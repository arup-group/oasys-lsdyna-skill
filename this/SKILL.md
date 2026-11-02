---
name: this
description: >
  Use when the user is working with Oasys T/HIS, extracting time histories,
  processing curves, analysing forces or displacements, or exporting curve
  data.
  Also use for T/HIS session files (.tsf), command files, and FAST-TCF
  automation scripts.
---

# T/HIS Scripting Assistant

Load `../SKILL.md` and follow its general rules and Python routing instructions
alongside the T/HIS-specific guidance below.

## References

- JavaScript API: `references/js-api/`
- IntelliSense declarations: `intellisense/this.d.ts`
- Dialogue commands: `dialogue-commands/`
- Runnable examples: `examples/`
- Automation (FAST-TCF, session and command files): `automation/`

## Examples

- `examples/plot_node_displacement.js` for extracting and plotting nodal
  displacement from the currently loaded model.
- `examples/three_graphs_energy_spotweld_part.js` for multiple graphs, global
  and part energy curves, spotweld forces, datums, and input widgets.


## Dialogue Commands

For dialogue commands list in T/HIS, refer to `dialogue-commands/this-dialogue-commands.md`

## Automation (FAST-TCF, Session and Command Files)

For T/HIS session files, command files, FAST-TCF, or other batch automation,
read the matching file in `automation/` before answering. Start with
`automation/fast-tcf-overview.md` for FAST-TCF. Syntax tables are long; read
only the part you need.

| Request | Read |
|---|---|
| FAST-TCF overview and menu options | `automation/fast-tcf-overview.md`, `automation/fast-tcf-options.md` |
| Writing or generating a FAST-TCF file | `automation/creating-fast-tcf-files.md`, `automation/create.md`, `automation/fasttcf-general-rules.md`, `automation/format.md` |
| Running a FAST-TCF file | `automation/running-fast-tcf.md`, `automation/run.md`, `automation/input-files-needed-and-output-and-intermediate-files-created.md` |
| Data extraction (keywords, components) | `automation/input-for-data-extraction-requests.md`, `automation/data-extraction-options.md`, `automation/data-extraction-reference-table.md`, `automation/applying-extra-options-to-data-requests.md`, `automation/selecting-models.md` |
| Save or restore a session (`.tsf`) | `automation/this-session-save-and-retrieve.md`, `automation/save-session.md`, `automation/retrieve-session.md` |
| Record or play back command files | `automation/command-session-files.md`, `automation/writing-recording-session-files.md`, `automation/executing-playing-back-command-files.md` |

For other FAST-TCF topics (curve operations, properties, styles, graphs, units,
curve and image output, debugging), pick the file in `automation/` whose name
matches.

Rules:

- Verify FAST-TCF and session-file answers against `automation/`, not the
  JavaScript API. Do not invent keywords, options, or file formats; if one is
  not documented there, say so.
- FAST-TCF is a text scripting language, not the JavaScript API. Use it when
  asked, or for repeatable file-driven extraction, plotting, and output. Use
  the JavaScript API (`references/js-api/`) otherwise.
- T/HIS sessions are `.tsf`; D3PLOT sessions are `.dsf` (see
  `../d3plot/automation/`). Do not mix them.

## Golden Rules

- Before generating code, verify every class, method, property, argument, and
 command against the local API references and declaration file. Do not guess
 undocumented API names.
- Use only documented T/HIS APIs for T/HIS stages. Do not substitute PRIMER,
 D3PLOT, or REPORTER classes, methods, properties, constants, commands, or
 imports.