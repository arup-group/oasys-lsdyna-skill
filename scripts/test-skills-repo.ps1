[CmdletBinding()]
param(
    [string]$RootPath = (Split-Path -Parent $PSScriptRoot),

    [string]$ReportPath,

    [switch]$CheckExternalLinks
)

$ErrorActionPreference = 'Stop'
$RootPath = (Resolve-Path -LiteralPath $RootPath).Path.TrimEnd('\', '/')

if (-not $ReportPath) {
    $ReportPath = Join-Path $RootPath 'reports\skills-validation.md'
} elseif (-not [IO.Path]::IsPathRooted($ReportPath)) {
    $ReportPath = Join-Path $RootPath $ReportPath
}
$ReportPath = [IO.Path]::GetFullPath($ReportPath)

$excludedDirectoryNames = @('.git', '.svn', 'node_modules', '__pycache__', 'reports')
$assetExtensions = @(
    '.bmp', '.env', '.gif', '.ico', '.jpeg', '.jpg', '.key', '.pdf', '.png',
    '.step', '.svg', '.webp'
)
$frontmatterRules = @(
    [pscustomobject]@{ Pattern = 'SKILL.md'; Required = @('name', 'description'); MatchFolder = $true },
    [pscustomobject]@{ Pattern = '*.prompt.md'; Required = @('description'); MatchFolder = $false },
    [pscustomobject]@{ Pattern = '*.instructions.md'; Required = @('applyTo'); MatchFolder = $false }
)
$forbiddenPatterns = @(
    [pscustomobject]@{
        Name = 'Legacy Oasys Sphinx URL'
        Pattern = '(?i)help\.oasys-software\.com[^\s)"''<>]*sphinx|resources[/\\]Storage[/\\]sphinx'
    },
    [pscustomobject]@{
        Name = 'Removed local Sphinx snapshot'
        Pattern = '(?i)(?:\./|\.\./)?Storage[/\\][^\s)"''<>]*sphinx[/\\]'
    }
)
$utf8NoBom = New-Object System.Text.UTF8Encoding($false)

function Get-RepositoryFiles {
    Get-ChildItem -LiteralPath $RootPath -Recurse -File -Force | Where-Object {
        $relative = $_.FullName.Substring($RootPath.Length).TrimStart('\', '/')
        $segments = $relative -split '[\\/]'
        -not ($segments | Where-Object { $excludedDirectoryNames -contains $_ }) -and
        $_.FullName -ne $ReportPath
    }
}

function Get-RelativePath([string]$Path) {
    if ($Path.StartsWith($RootPath, [StringComparison]::OrdinalIgnoreCase)) {
        return $Path.Substring($RootPath.Length).TrimStart('\', '/').Replace('\', '/')
    }
    return $Path.Replace('\', '/')
}

function Get-LineNumber([string]$Text, [int]$Index) {
    if ($Index -le 0) {
        return 1
    }
    return ([regex]::Matches($Text.Substring(0, $Index), "`n")).Count + 1
}

function Get-MarkdownTarget([string]$RawTarget) {
    $target = $RawTarget.Trim()
    if ($target -match '^<([^>]+)>') {
        return $Matches[1]
    }
    if ($target -match '^(\S+)') {
        return $Matches[1]
    }
    return $target
}

function Test-IgnoredLocalTarget([string]$Target) {
    return -not $Target -or
    $Target -match '^(?i)(?:[a-z][a-z0-9+.-]*:|#|/)' -or
        $Target.Contains('{') -or
        $Target.Contains('*')
}

function Resolve-LocalTarget([string]$SourcePath, [string]$RawTarget) {
    $target = Get-MarkdownTarget $RawTarget
    $target = ($target -split '[#?]', 2)[0]
    if (Test-IgnoredLocalTarget $target) {
        return $null
    }
    try {
        $target = [Uri]::UnescapeDataString($target)
        $resolved = [IO.Path]::GetFullPath(
            (Join-Path (Split-Path -Parent $SourcePath) ($target -replace '/', '\'))
        )
        if (Test-Path -LiteralPath $resolved) {
            return $resolved
        }

        if ($target -match '^(?:references|intellisense|dialogue-commands|prompts|instructions)/') {
            $directory = Get-Item -LiteralPath (Split-Path -Parent $SourcePath)
            while ($directory -and $directory.FullName.StartsWith($RootPath, [StringComparison]::OrdinalIgnoreCase)) {
                if (Test-Path -LiteralPath (Join-Path $directory.FullName 'SKILL.md')) {
                    return [IO.Path]::GetFullPath(
                        (Join-Path $directory.FullName ($target -replace '/', '\'))
                    )
                }
                $directory = $directory.Parent
            }
        }

        return $resolved
    } catch {
        return $null
    }
}

function Add-LocalReference(
    [System.Collections.Generic.List[object]]$Broken,
    [System.Collections.Generic.HashSet[string]]$Referenced,
    [string]$SourcePath,
    [int]$LineNumber,
    [string]$RawTarget,
    [string]$Kind
) {
    $resolved = Resolve-LocalTarget $SourcePath $RawTarget
    if (-not $resolved) {
        return
    }

    $script:localReferencesChecked++
    [void]$Referenced.Add($resolved)
    if (-not (Test-Path -LiteralPath $resolved)) {
        $Broken.Add([pscustomobject]@{
            Source = Get-RelativePath $SourcePath
            Line = $LineNumber
            Kind = $Kind
            Target = Get-MarkdownTarget $RawTarget
            Resolved = Get-RelativePath $resolved
        })
    }
}

function Test-Frontmatter(
    [IO.FileInfo]$File,
    [string[]]$Required,
    [bool]$MatchFolder,
    [System.Collections.Generic.List[object]]$Results
) {
    $lines = @(Get-Content -LiteralPath $File.FullName)
    if (-not $lines.Count -or $lines[0].Trim() -ne '---') {
        $Results.Add([pscustomobject]@{
            Source = Get-RelativePath $File.FullName
            Line = 1
            Message = 'Missing opening YAML frontmatter delimiter.'
        })
        return
    }

    $closingIndex = -1
    for ($index = 1; $index -lt $lines.Count; $index++) {
        if ($lines[$index].Trim() -eq '---') {
            $closingIndex = $index
            break
        }
    }
    if ($closingIndex -lt 1) {
        $Results.Add([pscustomobject]@{
            Source = Get-RelativePath $File.FullName
            Line = 1
            Message = 'Missing closing YAML frontmatter delimiter.'
        })
        return
    }

    $frontmatter = ($lines[1..($closingIndex - 1)] -join "`n")
    foreach ($field in $Required) {
        if ($frontmatter -notmatch "(?m)^$([regex]::Escape($field))\s*:\s*\S+") {
            $Results.Add([pscustomobject]@{
                Source = Get-RelativePath $File.FullName
                Line = 2
                Message = "Missing or empty '$field' frontmatter field."
            })
        }
    }

    if ($MatchFolder -and $frontmatter -match '(?m)^name\s*:\s*[''\"]?([^''\"\r\n]+)') {
        $skillName = $Matches[1].Trim()
        $folderName = $File.Directory.Name
        if ($skillName -ne $folderName) {
            $Results.Add([pscustomobject]@{
                Source = Get-RelativePath $File.FullName
                Line = 2
                Message = "Skill name '$skillName' does not match folder '$folderName'."
            })
        }
    }
}

function Escape-MarkdownCell([string]$Value) {
    if ($null -eq $Value) {
        return ''
    }
    return $Value.Replace('|', '\|').Replace("`r", '').Replace("`n", ' ')
}

function Add-TableSection(
    [System.Collections.Generic.List[string]]$Report,
    [string]$Heading,
    [object[]]$Rows,
    [string[]]$Columns
) {
    $Report.Add('')
    $Report.Add("## $Heading")
    $Report.Add('')
    if (-not $Rows.Count) {
        $Report.Add('None.')
        return
    }

    $Report.Add('| ' + ($Columns -join ' | ') + ' |')
    $Report.Add('|' + (($Columns | ForEach-Object { '---' }) -join '|') + '|')
    foreach ($row in $Rows) {
        $values = foreach ($column in $Columns) {
            Escape-MarkdownCell ([string]$row.$column)
        }
        $Report.Add('| ' + ($values -join ' | ') + ' |')
    }
}

$files = @(Get-RepositoryFiles)
$brokenReferences = [System.Collections.Generic.List[object]]::new()
$frontmatterIssues = [System.Collections.Generic.List[object]]::new()
$forbiddenReferences = [System.Collections.Generic.List[object]]::new()
$placeholderIssues = [System.Collections.Generic.List[object]]::new()
$externalFailures = [System.Collections.Generic.List[object]]::new()
$emptyFiles = [System.Collections.Generic.List[object]]::new()
$orphanedAssets = [System.Collections.Generic.List[object]]::new()
$referencedPaths = [System.Collections.Generic.HashSet[string]]::new([StringComparer]::OrdinalIgnoreCase)
$externalUrls = [System.Collections.Generic.Dictionary[string, System.Collections.Generic.List[object]]]::new(
    [StringComparer]::OrdinalIgnoreCase
)
$script:localReferencesChecked = 0

foreach ($file in $files) {
    if ($file.Length -eq 0) {
        $emptyFiles.Add([pscustomobject]@{ Source = Get-RelativePath $file.FullName; Bytes = 0 })
    }

    $extension = $file.Extension.ToLowerInvariant()
    if ($extension -notin @('.htm', '.html', '.json', '.md', '.ps1', '.txt', '.yaml', '.yml')) {
        continue
    }

    $content = [IO.File]::ReadAllText($file.FullName)
    $lines = @($content -split "`r?`n")

    foreach ($rule in $forbiddenPatterns) {
        foreach ($match in [regex]::Matches($content, $rule.Pattern)) {
            $forbiddenReferences.Add([pscustomobject]@{
                Source = Get-RelativePath $file.FullName
                Line = Get-LineNumber $content $match.Index
                Rule = $rule.Name
                Match = $match.Value
            })
        }
    }

    foreach ($match in [regex]::Matches($content, 'https?://[^\s)`>]*\{[^}\s]+\}[^\s)`>]*', 'IgnoreCase')) {
        $lineNumber = Get-LineNumber $content $match.Index
        $contextStart = [Math]::Max(0, $lineNumber - 3)
        $contextEnd = [Math]::Min($lines.Count - 1, $lineNumber + 1)
        $context = ($lines[$contextStart..$contextEnd] -join ' ')
        if ($context -notmatch '(?i)replace|substitut|construct') {
            $placeholderIssues.Add([pscustomobject]@{
                Source = Get-RelativePath $file.FullName
                Line = $lineNumber
                Url = $match.Value
                Message = 'URL placeholder has no nearby substitution instruction.'
            })
        }
    }

    foreach ($match in [regex]::Matches($content, 'https?://[^\s()<>{}\[\]`"'']+', 'IgnoreCase')) {
        $url = $match.Value.TrimEnd('.', ',', ';', ':')
        if (-not $externalUrls.ContainsKey($url)) {
            $externalUrls[$url] = [System.Collections.Generic.List[object]]::new()
        }
        $source = Get-RelativePath $file.FullName
        $line = Get-LineNumber $content $match.Index
        $existingLocation = $externalUrls[$url] | Where-Object {
            $_.Source -eq $source -and $_.Line -eq $line
        }
        if (-not $existingLocation) {
            $externalUrls[$url].Add([pscustomobject]@{
                Source = $source
                Line = $line
            })
        }
    }

    if ($extension -eq '.md') {
        foreach ($match in [regex]::Matches($content, '!?(?<!\\)\[[^\]]*\]\(([^)]+)\)')) {
            $lineNumber = Get-LineNumber $content $match.Index
            $target = $match.Groups[1].Value
            if ($target -match '^https?://') {
                continue
            }
            Add-LocalReference $brokenReferences $referencedPaths $file.FullName $lineNumber $target 'Markdown'
        }

        foreach ($match in [regex]::Matches($content, '(?m)^\s*\[[^\]]+\]:\s*(\S+)')) {
            Add-LocalReference $brokenReferences $referencedPaths $file.FullName `
                (Get-LineNumber $content $match.Index) $match.Groups[1].Value 'Markdown definition'
        }

        foreach ($match in [regex]::Matches($content, '`((?:\.\.?/|references/|intellisense/|dialogue-commands/|python-api/)[^`{}*]+)`')) {
            Add-LocalReference $brokenReferences $referencedPaths $file.FullName `
                (Get-LineNumber $content $match.Index) $match.Groups[1].Value 'Code path'
        }
    }

    if ($extension -in @('.yaml', '.yml')) {
        foreach ($match in [regex]::Matches($content, '(?m)^\s*file:\s*[''\"]?([^''\"#\r\n]+)')) {
            Add-LocalReference $brokenReferences $referencedPaths $file.FullName `
                (Get-LineNumber $content $match.Index) $match.Groups[1].Value.Trim() 'YAML file'
        }
    }

    if ($extension -in @('.html', '.htm')) {
        foreach ($match in [regex]::Matches($content, '(?:href|src)\s*=\s*["'']([^"'']+)["'']', 'IgnoreCase')) {
            $target = $match.Groups[1].Value
            if ($target -match '^https?://') {
                continue
            }
            Add-LocalReference $brokenReferences $referencedPaths $file.FullName `
                (Get-LineNumber $content $match.Index) $target 'HTML'
        }
    }
}

foreach ($rule in $frontmatterRules) {
    foreach ($file in $files | Where-Object { $_.Name -like $rule.Pattern }) {
        Test-Frontmatter $file $rule.Required $rule.MatchFolder $frontmatterIssues
    }
}

foreach ($asset in $files | Where-Object { $_.Extension.ToLowerInvariant() -in $assetExtensions }) {
    if (-not $referencedPaths.Contains($asset.FullName)) {
        $orphanedAssets.Add([pscustomobject]@{
            Source = Get-RelativePath $asset.FullName
            SizeKB = [math]::Round($asset.Length / 1KB, 1)
        })
    }
}

if ($CheckExternalLinks) {
    foreach ($url in $externalUrls.Keys) {
        if ($url.Contains('{')) {
            continue
        }
        $hostName = ([uri]$url).DnsSafeHost
        if ($hostName -match '(^|\.)example\.(com|net|org)$' -or $hostName -eq 'example.proxy.com') {
            continue
        }
        try {
            $response = Invoke-WebRequest -Uri $url -Method Head -UseBasicParsing -TimeoutSec 20
            if ($response.StatusCode -ge 400) {
                throw "HTTP $($response.StatusCode)"
            }
        } catch {
            try {
                $response = Invoke-WebRequest -Uri $url -Method Get -UseBasicParsing -TimeoutSec 20
                if ($response.StatusCode -ge 400) {
                    throw "HTTP $($response.StatusCode)"
                }
            } catch {
                $failureMessage = $_.Exception.Message
                foreach ($location in $externalUrls[$url]) {
                    $externalFailures.Add([pscustomobject]@{
                        Source = $location.Source
                        Line = $location.Line
                        Url = $url
                        Error = $failureMessage
                    })
                }
            }
        }
    }
}

$errorCount = $brokenReferences.Count + $frontmatterIssues.Count +
    $forbiddenReferences.Count + $placeholderIssues.Count + $externalFailures.Count
$warningCount = $emptyFiles.Count + $orphanedAssets.Count

$reportDirectory = Split-Path -Parent $ReportPath
if (-not (Test-Path -LiteralPath $reportDirectory)) {
    New-Item -ItemType Directory -Path $reportDirectory -Force | Out-Null
}

$report = [System.Collections.Generic.List[string]]::new()
$report.Add('# Skills repository validation')
$report.Add('')
$report.Add("- Root: ``$($RootPath.Replace('\', '/'))``")
$report.Add("- Generated: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss K')")
$report.Add("- Files scanned: $($files.Count)")
$report.Add("- Local references checked: $localReferencesChecked")
$report.Add("- External URLs discovered: $($externalUrls.Count)")
$report.Add("- External URL checks: $(if ($CheckExternalLinks) { 'enabled' } else { 'disabled' })")
$report.Add("- Errors: $errorCount")
$report.Add("- Warnings: $warningCount")

Add-TableSection $report 'Broken local references' $brokenReferences.ToArray() @('Source', 'Line', 'Kind', 'Target', 'Resolved')
Add-TableSection $report 'Frontmatter issues' $frontmatterIssues.ToArray() @('Source', 'Line', 'Message')
Add-TableSection $report 'Forbidden references' $forbiddenReferences.ToArray() @('Source', 'Line', 'Rule', 'Match')
Add-TableSection $report 'Unsafe URL placeholders' $placeholderIssues.ToArray() @('Source', 'Line', 'Url', 'Message')
Add-TableSection $report 'External link failures' $externalFailures.ToArray() @('Source', 'Line', 'Url', 'Error')
Add-TableSection $report 'Empty files' $emptyFiles.ToArray() @('Source', 'Bytes')
Add-TableSection $report 'Orphaned assets' $orphanedAssets.ToArray() @('Source', 'SizeKB')

[IO.File]::WriteAllLines($ReportPath, $report, $utf8NoBom)

Write-Host "Validation complete. Report: $ReportPath"
Write-Host "Files: $($files.Count); local references: $localReferencesChecked; errors: $errorCount; warnings: $warningCount"

if ($errorCount) {
    exit 1
}