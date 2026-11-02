---
name: oasys-lsdyna-skill
description: >
  Use when a request involves scripting, automation, API usage, or dialogue
  commands for Oasys PRIMER, D3PLOT, T/HIS, or REPORTER.
---

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

After routing, load the selected tool's `SKILL.md` and follow the references it
identifies. For workflows spanning multiple tools, load each relevant tool
skill.

Requests about session files, FAST-TCF, command files, or other automation methods are
answered from the `automation/` folder of the selected tool (`d3plot/automation/`
or `this/automation/`). The tool's `SKILL.md` says which file to read.

For Python requests, also load `shared/SKILL.md` before writing or modifying
code. Use the selected tool's skill for product-specific guidance and the
shared skill for Python setup and official Sphinx Python API verification.

## Combined workflows

Only include stages needed for the user's request. For a combined
post-processing workflow, use the tools in this order unless the user requests
a different sequence:

1. Use D3PLOT to open or visualise result data.
2. Use T/HIS to extract histories or curves.
3. Use REPORTER to generate a report from plots, tables, or extracted values.

For an end-to-end model and results workflow:

1. Use PRIMER to create or modify the model.
2. Run the LS-DYNA solve.
3. Use the appropriate post-processing skill for the results.

## General rules

- Verify JavaScript classes, constructors, methods, properties, constants,
  arguments, return values, and dialogue commands against the selected tool's
  local API references, declarations, and command references. For Python,
  follow `shared/SKILL.md`.
- Do not invent APIs, commands, or keyword fields. If the required API or command
  is not documented, say so instead of guessing.
- Check for null/None after entity lookups such as `GetFromID()` or `First()`
  before using the result.
- Before generating or editing a script, check the selected tool's `examples/`
  folder if present. Adapt IDs, paths, units, components, options, and user
  inputs to the request. Examples do not override the API references; verify
  copied calls using the appropriate JavaScript or Python documentation.
- Treat the PRIMER, D3PLOT, T/HIS, and REPORTER APIs as separate namespaces.
	Never use a class, method, property, constant, command, or import from one
	tool when writing a script for another tool.
- For single-tool requests, use only that tool's API references, declarations,
	dialogue commands, and documented module namespace.
- Keep scripts for separate tools separate unless a combined workflow is
	explicitly requested. In a combined workflow, use clearly labelled
	tool-specific stages and keep API objects and calls within their owning stage.
- Add a brief summary of the user's prompt as a comment at the top of generated
  scripts. It need not be an exact copy of the prompt.
- Save generated scripts in the user's project or workspace, not in this skill.
- When a given request cannot be achieved using available API's, use dialogue 
commands instead.
- Prefer concise, runnable scripts with clear comments.

## Script generation style

- Begin by briefly summarising the user's request in a comment at the top of the script.
- Use only the details given in the prompt (IDs, ranges, counts, types). Put them
  in the configuration block as named constants. Do not add extra user inputs,
  prompts, GUI, options, or assumed values.
- Do not ask the user for more input before generating the script when the
  prompt is enough to write it. State any needed values that are missing in the
  notes after the script instead.
- Keep the code focused on the requested task: no extra validation, skipping
  logic, or fallbacks beyond a null check on the model.
- After the script, briefly note (1-3 lines) any essential information that
  would be needed for a more specific solution, such as real part IDs, units,
  or contact options. Also note what the script assumes.

## Debugging

When debugging, identify the target tool and API mode first. Check its skill
guidance, instructions, local API references, declaration file, and shared
Python guidance. Preserve the script's intent, explain the likely failure, and
make the smallest targeted change that addresses it.