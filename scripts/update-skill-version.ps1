[CmdletBinding()]
param(
    [Parameter(Mandatory = $true)]
    [ValidatePattern('^\d+\.\d+$')]
    [string]$OldVersion,

    [Parameter(Mandatory = $true)]
    [ValidatePattern('^\d+\.\d+$')]
    [string]$NewVersion,

    [string]$RootPath = (Split-Path -Parent $PSScriptRoot),

    [string]$ReportPath,

    [switch]$IncludeHtml,

    [switch]$Apply
)

$ErrorActionPreference = 'Stop'
$RootPath = (Resolve-Path -LiteralPath $RootPath).Path.TrimEnd('\', '/')

$oldParts = $OldVersion.Split('.')
$newParts = $NewVersion.Split('.')
$oldMajor = $oldParts[0]
$newMajor = $newParts[0]
$oldDash = $OldVersion.Replace('.', '-')
$newDash = $NewVersion.Replace('.', '-')

if (-not $ReportPath) {
    $ReportPath = Join-Path $RootPath "reports\version-$oldDash-to-$newDash.md"
} elseif (-not [IO.Path]::IsPathRooted($ReportPath)) {
    $ReportPath = Join-Path $RootPath $ReportPath
}
$ReportPath = [IO.Path]::GetFullPath($ReportPath)

$excludedDirectoryNames = @('.git', '.svn', 'node_modules', '__pycache__', 'reports')
$textExtensions = @(
    '.css', '.htm', '.html', '.js', '.json', '.md', '.ps1', '.py', '.ts',
    '.txt', '.yaml', '.yml'
)
$utf8NoBom = New-Object System.Text.UTF8Encoding($false)

function Get-RepositoryFiles {
    Get-ChildItem -LiteralPath $RootPath -Recurse -File -Force | Where-Object {
        $relative = $_.FullName.Substring($RootPath.Length).TrimStart('\', '/')
        $segments = $relative -split '[\\/]'
        -not ($segments | Where-Object { $excludedDirectoryNames -contains $_ })
    }
}

function Get-RelativePath([string]$Path) {
    if ($Path.StartsWith($RootPath, [StringComparison]::OrdinalIgnoreCase)) {
        return $Path.Substring($RootPath.Length).TrimStart('\', '/').Replace('\', '/')
    }
    return $Path.Replace('\', '/')
}

function Get-RenameDestination([IO.FileSystemInfo]$Item) {
    $newName = $Item.Name.Replace($oldDash, $newDash)
    if ($Item.PSIsContainer -and $Item.Parent.Name -eq 'sphinx') {
        if ($Item.Name -eq $oldMajor) {
            $newName = $newMajor
        } elseif ($Item.Name -eq $OldVersion) {
            $newName = $NewVersion
        }
    }
    if ($newName -eq $Item.Name) {
        return $null
    }
    return Join-Path $Item.Parent.FullName $newName
}

function Test-IgnoredTarget([string]$Target) {
    return $Target -match '^(?:[a-z][a-z0-9+.-]*:|#|//|/articles/|\{)' -or
        $Target -eq '/'
}

function Resolve-LocalTarget([string]$SourcePath, [string]$RawTarget) {
    $target = ($RawTarget.Trim().Trim('<', '>') -split '[#?]', 2)[0]
    if (-not $target -or (Test-IgnoredTarget $target)) {
        return $null
    }
    try {
        $target = [Uri]::UnescapeDataString($target)
    } catch {
        return $null
    }
    return [IO.Path]::GetFullPath((Join-Path (Split-Path -Parent $SourcePath) ($target -replace '/', '\')))
}

function Add-ValidationResult(
    [System.Collections.Generic.List[object]]$Results,
    [string]$SourcePath,
    [int]$LineNumber,
    [string]$RawTarget,
    [string]$Kind
) {
    $resolved = Resolve-LocalTarget $SourcePath $RawTarget
    if (-not $resolved) {
        return
    }
    $script:linksChecked++
    if (-not (Test-Path -LiteralPath $resolved)) {
        $Results.Add([pscustomobject]@{
            Source = Get-RelativePath $SourcePath
            Line = $LineNumber
            Kind = $Kind
            Target = $RawTarget
            Resolved = Get-RelativePath $resolved
        })
    }
}

function Test-LocalReferences {
    $results = [System.Collections.Generic.List[object]]::new()
    $script:linksChecked = 0
    $validatedExtensions = @('.md', '.yaml', '.yml')
    if ($IncludeHtml) {
        $validatedExtensions += @('.html', '.htm')
    }

    Get-RepositoryFiles | Where-Object {
        $_.Extension -in $validatedExtensions -and
        $_.FullName -ne $ReportPath
    } | ForEach-Object {
        $file = $_
        $lineNumber = 0
        Get-Content -LiteralPath $file.FullName | ForEach-Object {
            $lineNumber++
            $line = $_

            if ($file.Extension -eq '.md') {
                [regex]::Matches($line, '!?(?<!\!)\[[^\]]*\]\(([^)]+)\)') | ForEach-Object {
                    Add-ValidationResult $results $file.FullName $lineNumber $_.Groups[1].Value 'Markdown'
                }
            }

            if ($file.Extension -in @('.html', '.htm')) {
                [regex]::Matches($line, '(?:href|src)\s*=\s*["'']([^"'']+)["'']', 'IgnoreCase') | ForEach-Object {
                    Add-ValidationResult $results $file.FullName $lineNumber $_.Groups[1].Value 'HTML'
                }
            }

            if ($file.Extension -in @('.yaml', '.yml') -and $line -match '^\s*file:\s*["'']?([^"''#]+)') {
                Add-ValidationResult $results $file.FullName $lineNumber $Matches[1].Trim() 'YAML'
            }
        }
    }
    return $results
}

function Escape-MarkdownCell([string]$Value) {
    return $Value.Replace('|', '\|').Replace("`r", '').Replace("`n", ' ')
}

$renamePlan = [System.Collections.Generic.List[object]]::new()
Get-ChildItem -LiteralPath $RootPath -Recurse -Force | Where-Object {
    $relative = $_.FullName.Substring($RootPath.Length).TrimStart('\', '/')
    $segments = $relative -split '[\\/]'
    -not ($segments | Where-Object { $excludedDirectoryNames -contains $_ })
} | Sort-Object { $_.FullName.Length } -Descending | ForEach-Object {
    $destination = Get-RenameDestination $_
    if ($destination) {
        $renamePlan.Add([pscustomobject]@{
            Source = $_.FullName
            Destination = $destination
            IsDirectory = $_.PSIsContainer
        })
    }
}

$collisions = $renamePlan | Where-Object {
    Test-Path -LiteralPath $_.Destination
}
if ($collisions) {
    $details = ($collisions | ForEach-Object {
        "$(Get-RelativePath $_.Source) -> $(Get-RelativePath $_.Destination)"
    }) -join [Environment]::NewLine
    throw "Cannot migrate because destination paths already exist:$([Environment]::NewLine)$details"
}

$renamed = [System.Collections.Generic.List[object]]::new()
if ($Apply) {
    foreach ($item in $renamePlan) {
        if (Test-Path -LiteralPath $item.Source) {
            Move-Item -LiteralPath $item.Source -Destination $item.Destination
            $renamed.Add($item)
        }
    }
}

$literalRules = @(
    [pscustomobject]@{ Old = "py_api-$oldDash"; New = "py_api-$newDash" },
    [pscustomobject]@{ Old = "/sphinx/$OldVersion/"; New = "/sphinx/$NewVersion/" },
    [pscustomobject]@{ Old = "/sphinx/$oldMajor/"; New = "/sphinx/$newMajor/" },
    [pscustomobject]@{ Old = "\sphinx\$OldVersion\"; New = "\sphinx\$NewVersion\" },
    [pscustomobject]@{ Old = "\sphinx\$oldMajor\"; New = "\sphinx\$newMajor\" }
)

$contentChanges = [System.Collections.Generic.List[object]]::new()
Get-RepositoryFiles | Where-Object {
    $_.Extension.ToLowerInvariant() -in $textExtensions -and $_.FullName -ne $ReportPath
} | ForEach-Object {
    $file = $_
    $original = [IO.File]::ReadAllText($file.FullName)
    $updated = $original
    $replacementCount = 0

    foreach ($rule in $literalRules) {
        $matches = ([regex]::Matches($updated, [regex]::Escape($rule.Old))).Count
        if ($matches) {
            $updated = $updated.Replace($rule.Old, $rule.New)
            $replacementCount += $matches
        }
    }

    $productPattern = "(?i)(Oasys\s+(?:PRIMER|D3PLOT|REPORTER|T/HIS)\s+v)$([regex]::Escape($OldVersion))\b"
    $productMatches = ([regex]::Matches($updated, $productPattern)).Count
    if ($productMatches) {
        $updated = [regex]::Replace($updated, $productPattern, "`${1}$NewVersion")
        $replacementCount += $productMatches
    }

    if ($replacementCount) {
        $contentChanges.Add([pscustomobject]@{
            Path = Get-RelativePath $file.FullName
            Replacements = $replacementCount
        })
        if ($Apply) {
            [IO.File]::WriteAllText($file.FullName, $updated, $utf8NoBom)
        }
    }
}

$brokenLinks = Test-LocalReferences
$stalePatterns = @(
    "py_api-$oldDash",
    "/sphinx/$OldVersion/",
    "/sphinx/$oldMajor/"
)
$staleReferences = [System.Collections.Generic.List[object]]::new()
Get-RepositoryFiles | Where-Object {
    $_.Extension.ToLowerInvariant() -in $textExtensions -and $_.FullName -ne $ReportPath
} | ForEach-Object {
    $file = $_
    $lineNumber = 0
    Get-Content -LiteralPath $file.FullName | ForEach-Object {
        $lineNumber++
        $line = $_
        foreach ($pattern in $stalePatterns) {
            if ($line.Contains($pattern)) {
                $staleReferences.Add([pscustomobject]@{
                    Source = Get-RelativePath $file.FullName
                    Line = $lineNumber
                    Pattern = $pattern
                })
            }
        }
    }
}

$reportDirectory = Split-Path -Parent $ReportPath
if (-not (Test-Path -LiteralPath $reportDirectory)) {
    New-Item -ItemType Directory -Path $reportDirectory -Force | Out-Null
}

$mode = if ($Apply) { 'Applied' } else { 'Dry run' }
$report = [System.Collections.Generic.List[string]]::new()
$report.Add("# Skill version migration report")
$report.Add('')
$report.Add("- Mode: **$mode**")
$report.Add("- Root: ``$($RootPath.Replace('\', '/'))``")
$report.Add("- Version: ``$OldVersion`` -> ``$NewVersion``")
$report.Add("- Generated: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss K')")
$report.Add("- HTML validation: $(if ($IncludeHtml) { 'included' } else { 'not included' })")
$report.Add("- Planned path renames: $($renamePlan.Count)")
$report.Add("- Applied path renames: $($renamed.Count)")
$report.Add("- Files with content updates: $($contentChanges.Count)")
$report.Add("- Content replacements: $(($contentChanges | Measure-Object Replacements -Sum).Sum -as [int])")
$report.Add("- Local references checked: $linksChecked")
$report.Add("- Broken local references: $($brokenLinks.Count)")
$report.Add("- Remaining old path references: $($staleReferences.Count)")

$report.Add('')
$report.Add('## Path renames')
$report.Add('')
if ($renamePlan.Count) {
    $report.Add('| From | To |')
    $report.Add('|---|---|')
    foreach ($item in $renamePlan) {
        $report.Add("| ``$(Get-RelativePath $item.Source)`` | ``$(Get-RelativePath $item.Destination)`` |")
    }
} else {
    $report.Add('None.')
}

$report.Add('')
$report.Add('## Content updates')
$report.Add('')
if ($contentChanges.Count) {
    $report.Add('| File | Replacements |')
    $report.Add('|---|---:|')
    foreach ($item in $contentChanges) {
        $report.Add("| ``$($item.Path)`` | $($item.Replacements) |")
    }
} else {
    $report.Add('None.')
}

$report.Add('')
$report.Add('## Broken local references')
$report.Add('')
if ($brokenLinks.Count) {
    $report.Add('| Source | Line | Type | Target | Resolved path |')
    $report.Add('|---|---:|---|---|---|')
    foreach ($item in $brokenLinks) {
        $report.Add("| $(Escape-MarkdownCell $item.Source) | $($item.Line) | $($item.Kind) | ``$(Escape-MarkdownCell $item.Target)`` | ``$(Escape-MarkdownCell $item.Resolved)`` |")
    }
} else {
    $report.Add('None.')
}

$report.Add('')
$report.Add('## Remaining old path references')
$report.Add('')
if ($staleReferences.Count) {
    $report.Add('| Source | Line | Pattern |')
    $report.Add('|---|---:|---|')
    foreach ($item in $staleReferences) {
        $report.Add("| $(Escape-MarkdownCell $item.Source) | $($item.Line) | ``$(Escape-MarkdownCell $item.Pattern)`` |")
    }
} else {
    $report.Add('None.')
}

[IO.File]::WriteAllLines($ReportPath, $report, $utf8NoBom)

Write-Host "$mode complete. Report: $ReportPath"
Write-Host "Renames: $($renamePlan.Count); changed files: $($contentChanges.Count); links checked: $linksChecked; broken: $($brokenLinks.Count); stale: $($staleReferences.Count)"

if ($brokenLinks.Count -or ($Apply -and $staleReferences.Count)) {
    exit 1
}