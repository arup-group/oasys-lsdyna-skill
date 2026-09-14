# Oasys LS-DYNA Scripting Skill

Use this root skill to route requests to the relevant Oasys tool. Identify the
target tool before writing or debugging a script.

## Tool routing

- Use `primer/` for LS-DYNA model creation and editing, PRIMER JavaScript or
	Python, GUI workflows, dialogue commands, and keyword decks.
- Use `d3plot/` for result visualisation, states, deformation, contours, and
	screenshots from D3PLOT result files.
- Use `this/` for time histories, curves, force or displacement extraction,
	and curve export.
- Use `reporter/` for report templates, plots, tables, and report generation.

Use the tool-specific API references before generating code:

- PRIMER: `primer/references/js-api/` and `primer/intellisense/primer.d.ts`
- D3PLOT: `d3plot/references/js-api/` and `d3plot/intellisense/d3plot.d.ts`
- T/HIS: `this/references/js-api/` and `this/intellisense/this.d.ts`
- REPORTER: `reporter/references/js-api/` and
	`reporter/intellisense/reporter.d.ts`
- Shared Python guidance: `shared/python-api/`

PRIMER keyword references are in `primer/references/keywords/`. Dialogue
command references are in each tool's `dialogue-commands/` directory.

## General rules

- Do not invent API classes, methods, properties, commands, or keyword fields.
- Verify API usage against the relevant reference files and declaration file.
- If the required API is not documented, say so instead of guessing.
- Keep scripts for separate tools separate unless a combined workflow is
	explicitly requested.
- For a combined workflow, complete PRIMER model setup before post-processing.
- Add the user's original prompt as a comment at the top of generated scripts.
- Save generated scripts in the user's project or workspace, not in this skill.
- Prefer concise, runnable scripts with clear comments.

## Debugging

When debugging, identify the target tool and API mode first. Check its skill
guidance, instructions, local API references, declaration file, and shared
Python guidance. Preserve the script's intent, explain the likely failure, and
make the smallest targeted change that addresses it.