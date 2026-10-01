# Oasys LS-DYNA Scripting Skill

This repository contains Copilot skills for generating and debugging scripts for Oasys LS-DYNA tools.

Install the repository once as personal Copilot skills and use it from any project workspace opened in VS Code. You do not need to work inside this repository when generating scripts.

## Installation

### 1. Clone the repository

```powershell
git clone git@github.com:arup-group/oasys-lsdyna-skill.git
```

Do not move or delete the cloned repository after installation because the personal Copilot skills directory will point to it.

### 2. Register the personal Copilot skills

Run the following in PowerShell, replacing the placeholder with the cloned repository path:

```powershell
$repository = '<path-to-cloned-repository>'; $skillsPath = "$env:USERPROFILE\.copilot\skills"; New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\.copilot" | Out-Null; New-Item -ItemType Junction -Path $skillsPath -Target $repository
```

This creates the default personal skills directory at `C:\Users\<username>\.copilot\skills`. Copilot can then discover these skills from any workspace.

### 3. Verify the installation

```powershell
Get-ChildItem "$env:USERPROFILE\.copilot\skills" -Filter SKILL.md -Recurse
```

The output should include the root `SKILL.md` and the `SKILL.md` files under `primer`, `d3plot`, `this`, `reporter`, and `shared`. The skills is now ready to be used.

### 4. Restart VS Code

Close and reopen VS Code, or start a new GitHub Copilot Chat session, to refresh skill discovery.

## Workspace Structure

```
oasys-lsdyna-skill/                     
├── SKILL.md                   ← Routes requests to the relevant tool skill.
│
├── primer/
│   ├── SKILL.md               ← Instructions for PRIMER-related requests.
│   ├── dialogue-commands/
│   │   ├── dialogue-command-struture.md
│   │   └── main-menu-commands.md
|   ├── instructions/
│   |   ├── primer-js.instructions.md    ← applied to *.js files
│   |   ├── primer-py.instructions.md    ← applied to *.py files
│   |   └── lsdyna-keywords.instructions.md  ← applied to *.k / *.key files
│   ├── intellisense/
│   │   └── primer.d.ts
│   ├── prompts/
│   ├── references/
│   │   ├── js-api/
│   │   └── keywords/
│
├── d3plot/
│   ├── dialogue-commands/
│   │   ├── dialogue-command-structure.md
│   │   └── d3plot-dialogue-commands.md
│   ├── intellisense/
│   │   └── d3plot.d.ts
│   └── references/js-api/
│
├── this/
│   ├── dialogue-commands/
│   │   └── this-dialogue-commands.md
│   ├── intellisense/
│   │   └── this.d.ts
│   └── references/js-api/
│
├── reporter/
│   ├── intellisense/
│   │   └── reporter.d.ts
│   └── references/js-api/
│
└── shared/
	├── python-api/              ← Shared Oasys Python API documentation.
	└── references/
```

The JavaScript API references are separated by tool. D3PLOT, T/HIS, and REPORTER references are kept in their own folders so each tool can be routed independently.

## Using the Skills

1. Open your project in VS Code.
2. Open GitHub Copilot Chat and select **Agent** mode.
3. Describe the script you need, including the Oasys application and scripting language.
4. Review the generated script before running it.
5. Save generated scripts in your project workspace, not in the skills repository.

Example requests:

```text
Write a PRIMER JavaScript script that lists all parts and their materials.
```

```text
Write a D3PLOT cript that displays the last state at 0x deformation and exports the visible model to a GLB file.
```

```text
Write a T/HIS Python script that extracts selected curves to CSV.
```

```text
Write a REPORTER script that creates a report and inserts an image.
```

## Updating the Installed Skills

Because the personal skills directory points to the cloned repository, update the installed skills by pulling the latest changes:

```powershell
Set-Location '<path-to-cloned-repository>'
git pull
```

No reinstallation or file copying is required. Start a new Copilot Chat session if the updated instructions are not immediately reflected.

## Repository Validation

The repository uses `scripts/test-skills-repo.ps1` for automated validation.
Run it from the repository root with external-link checking enabled:

```powershell
.\scripts\test-skills-repo.ps1 -CheckExternalLinks
```

The script writes `reports/skills-validation.md` and reports local references, frontmatter, forbidden legacy links, URL placeholders, external HTTP links, empty files, and orphaned assets.

## Updating for a New Oasys Release

Use both scripts in `/scripts` when a new Oasys version is released. The migration script `scripts/update-skill-version.ps1` updates known versioned paths and references; it does not import new API content.

The example below migrates version 23.0 to 24.0. Substitute the applicable versions for later releases.

### 1. Create an update branch

```powershell
git switch main
git pull
git switch -c update-oasys-24
```

### 2. Preview the migration (Dry Run)

Run the version update script in preview mode:

```powershell
.\scripts\update-skill-version.ps1 -OldVersion 23.0 -NewVersion 24.0 -IncludeHtml
```

This generates `reports/version-23-0-to-24-0.md`, showing planned path renames, content updates, and broken references before applying the migration.

### 3. Apply the migration

Once the preview results have been reviewed, run the script again to apply the changes:

```powershell
.\scripts\update-skill-version.ps1 -OldVersion 23.0 -NewVersion 24.0 -IncludeHtml -Apply
```

### 4. Synchronize release-derived files

Replace the contents in the following locations with files from latest release:

- JavaScript API pages under `primer/references/js-api/`, `d3plot/references/js-api/`, `this/references/js-api/`, and `reporter/references/js-api/`.
- IntelliSense declarations under each tool's `intellisense/` directory.
- Python documentation, examples, and assets under `shared/python-api/`.
- Dialogue-command references under `primer/dialogue-commands/`,`d3plot/dialogue-commands/`, and `this/dialogue-commands/`.

The files under `primer/references/keywords/` follow the supported LS-DYNA manual version, not the Oasys release. Replace them only when the LS-DYNA manual baseline changes.

Do not replace repository-authored `SKILL.md`, instruction, README, or script files. Review and update them only when an API or workflow change requires it.

### 5. Validate the completed migration

Run the migration script again to detect remaining old-version references and broken local references in imported content:

```powershell
.\scripts\update-skill-version.ps1 -OldVersion 23.0 -NewVersion 24.0 -IncludeHtml -Apply
```

The migration report must show zero broken local references and zero remaining old path references. Then run the independent repository validation:

```powershell
.\scripts\test-skills-repo.ps1 -CheckExternalLinks
```

This should show 0 warnings and issues.

### 6. Review and publish

```powershell
git status
git diff
git add .
git commit -m "Update Oasys references to version 24.0"
git push -u origin update-oasys-24
```

Open a pull request, obtain maintainer review, address review comments, and merge the approved update into `main`.

After the pull request is merged, create an annotated tag from the updated `main` branch. Use `oasys-<version>` as the tag format:

```powershell
git switch main
git pull --ff-only origin main
git tag -a oasys-24.0 -m "Oasys 24.0 skills"
git push origin oasys-24.0
```

To publish a GitHub release, open the repository on GitHub, select **Releases**,then **Draft a new release**. Select the `oasys-24.0` tag, add release notes, and publish the release. If a remote other than `origin` is the release target, replace `origin` in the commands above with that remote name.


