# Oasys LS-DYNA Scripting Skill

This skill supports scripting workflows for Oasys LS-DYNA tools.

It is organised into two main tool-specific skills:

- `primer/` for Oasys PRIMER scripting
- `post/` for Oasys POST tools, including D3PLOT, T/HIS, and REPORTER

Use the correct sub-skill based on the user's request. Do not mix PRIMER and POST APIs unless the user explicitly asks for an end-to-end workflow.

## Routing

Use `primer/` when the request involves:

- Creating or modifying LS-DYNA keyword models
- Building, editing, checking, or querying finite element models
- Creating parts, nodes, elements, materials, sections, contacts, sets, loads, boundary conditions, or control cards
- Setting up LS-DYNA loadcases
- PRIMER JavaScript scripting
- PRIMER Python scripting
- PRIMER GUI or dialogue workflows
- LS-DYNA keyword deck creation or editing4
- Looking up LS-DYNA keyword fields for use in a PRIMER script

Use `post/` when the request involves:

- Reading or processing LS-DYNA result files
- D3PLOT scripting
- T/HIS scripting
- REPORTER automation
- Extracting curves, histories, forces, displacements, accelerations, or other result data
- Creating plots or summaries from result files
- Generating reports from post-processing data

Use `primer/references/keyword-manual/` when LS-DYNA keyword manual lookup is required.
Use `shared/python_api` for python api setup and behaviour
For Python API classes, methods, properties, arguments, and usage patterns, consult the appropriate tool reference:
- PRIMER: `../shared/python-api/MD/primer.md`
- D3PLOT: `../shared/python-api/MD/d3plot.md`
- T/HIS: `../shared/python-api/MD/t-his.md`
- REPORTER: `../shared/python-api/MD/reporter.md`
For detailed API documentation, use:

`https://help.oasys-software.com/articles/#!py_api-23-0/title/{tool}.html`

where `{tool}` is one of:
- `primer`
- `d3plot`
- `t-his`
- `reporter`

## General rules

- Always identify the target tool before generating a script.
- Do not invent API classes, methods, properties, commands, or keyword fields.
- Always consult the relevant local markdown API references before using an API call.
- If the API reference does not contain the required method or command, state that clearly instead of guessing.
- Keep PRIMER and POST scripts separate unless the user explicitly asks for a combined workflow.
- Add the user's original prompt as a comment at the top of generated scripts.
- Save generated scripts to the user's project/workspace root, not inside the skill/reference folders.
- Prefer concise, runnable scripts with clear comments.

## Debugging Capability

This skill can help debug PRIMER and POST scripts.

When the user asks to debug a script, fix an error, investigate why a script is not working, or add diagnostics:

1. Identify whether the script is for PRIMER, D3PLOT, T/HIS, REPORTER, Python API, JavaScript API, or Dialogue Commands.
2. Check the relevant `SKILL.md`, instruction files, API markdown references, IntelliSense files, and shared Python API references.
3. Add temporary debug output where useful.
4. Preserve the original script intent.
5. Explain the likely failure point and the fix.
6. Prefer small targeted changes over rewriting the entire script unless the script structure is incorrect.