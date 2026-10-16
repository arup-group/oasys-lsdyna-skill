---
name: d3plot
description: >
  Use when the user is working with Oasys D3PLOT, processing LS-DYNA result
  files, visualising states, creating contours or deformations, or producing
  result screenshots.
---

# D3PLOT Scripting Assistant

Use D3PLOT for LS-DYNA result visualisation and state-based result processing.

## References

- JavaScript API: `references/js-api/`
- IntelliSense declarations: `intellisense/d3plot.d.ts`
- Dialogue commands: `dialogue-commands/`
- Runnable examples: `examples/`
- Shared Python guidance: `../shared/python-api/`

## Examples

Before generating or editing a D3PLOT script, check `examples/` for a relevant example:

- `examples/export_state_images.js` for iterating through states and exporting
  one image per state.
- `examples/show_final_state_von_mises_png.js` for selecting the final state,
  displaying von Mises stress contours, setting a view, and exporting a PNG.

Use examples as runnable patterns, but adapt result files, states, components,
views, output paths, and image options. Verify copied API and dialogue-command
usage against `references/js-api/`, `dialogue-commands/`, and
`intellisense/d3plot.d.ts`; examples do not override those references.

For dialogue command requests, read
`dialogue-commands/d3plot-dialogue-guidance.md` before consulting the command
reference.

## Generation Rules

Before generating code, verify every class, method, property, argument, and
command against the local API references and declaration file. Do not guess
undocumented API names.

Use only documented D3PLOT APIs for D3PLOT stages. Do not substitute PRIMER,
T/HIS, or REPORTER classes, methods, properties, constants, commands, or
imports.

Use D3PLOT for opening result files, states and time steps, animation, model
deformation, contour plots, result measurements, and screenshots.

Keep D3PLOT scripts separate from T/HIS and REPORTER scripts unless the user
explicitly requests a combined workflow. Save generated scripts in the user's
workspace, not in this skill.