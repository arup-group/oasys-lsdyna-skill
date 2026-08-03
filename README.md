# Oasys LS-DYNA Scripting Skill

This repository contains Copilot skills for generating and debugging scripts for Oasys LS-DYNA tools.

## Workspace Structure

```
oasys-lsdyna-skill/                     
├── SKILL.md                   ← Directs agent to PRIMER, POST or shared reference.
|
├── primer/
│   ├── SKILL.md               ← Instructions for PRIMER-related requests.
│   ├── dialogue_commands/
|   |   ├── dialogue-command_structure.md
|   |   └── main_menu_commands.md
|   ├── instructions/
│   |   ├── primer-js.instructions.md    ← applied to *.js files
│   |   ├── primer-py.instructions.md    ← applied to *.py files
│   |   └── lsdyna-keywords.instructions.md  ← applied to *.k / *.key files
│   ├── intellisense/
│   |   └── primer.d.ts
|   ├── prompts/
│   ├── references/
|   |   ├── keyword-manuals/
│   |   ├── markdown/
│   |   └── primer-pdf/
|
├── post/
│   ├── SKILL.md               ← Instructions for POST-related requests
│   ├── dialogue_commands/
|   |   ├── dialogue-command_structure.md
|   |   └── main_menu_commands.md
|   ├── intellisense/
│   |   ├── d3plot.d.ts
│   |   ├── this.d.ts
│   |   └── reporter.d.ts
│   ├── references/
|   |     └── markdown
|
├── shared/                    
|   └── python_api/              ← Shared Oasys Python API documentation.
```

## How to use

1. Download or clone this repository.
2. Open the repository folder in VS Code.
3. Start a Copilot Chat session.
4. Ask scripting questions in natural language.


