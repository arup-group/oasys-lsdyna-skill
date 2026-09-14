# Oasys LS-DYNA Scripting Skill

This repository contains Copilot skills for generating and debugging scripts for Oasys LS-DYNA tools.

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
│   │   ├── features/
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


The JavaScript API references are separated by tool. D3PLOT, T/HIS, and REPORTER
references are kept in their own folders so each tool can be routed independently.
## How to use

1. Download or clone this repository.
2. Open the repository folder in VS Code.
3. Start a Copilot Chat session.
4. Ask scripting questions in natural language.


