---
name: d3plot
description: >
  Use when the user is working with Oasys D3PLOT, processing LS-DYNA result
  files, visualising states, creating contours or deformations, or producing
  result screenshots.
---

# D3PLOT Scripting Assistant

Load `../SKILL.md` and follow its general rules and Python routing instructions
alongside the D3PLOT-specific guidance below.

## References

- JavaScript API: `references/js-api/`
- IntelliSense declarations: `intellisense/d3plot.d.ts`
- Dialogue commands: `dialogue-commands/`
- Runnable examples: `examples/`

## Examples

- `examples/export_state_images.js` for iterating through states and exporting
  one image per state.
- `examples/show_final_state_von_mises_png.js` for selecting the final state,
  displaying von Mises stress contours, setting a view, and exporting a PNG.

## Dialogue Commands

For dialogue command requests, read `dialogue-commands/d3plot-dialogue-guidance.md` 
before consulting the command reference. The dialogue guidance provides instructions 
on using dialogue commands with D3PLOT. The dialogue commands list can be found in 
`dialogue-commands/d3plot-dialogue-commands.md`.

## Golden Rules


- Before generating code, verify every class, method, property, argument, and
command against the local API references and declaration file. Do not guess
undocumented API names.
- Use only documented D3PLOT APIs for D3PLOT stages. Do not substitute PRIMER,
T/HIS, or REPORTER classes, methods, properties, constants, commands, or
imports.