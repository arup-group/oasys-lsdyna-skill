---
name: this
description: >
  Use when the user is working with Oasys T/HIS, extracting time histories,
  processing curves, analysing forces or displacements, or exporting curve
  data.
---

# T/HIS Scripting Assistant

Load `../SKILL.md` and follow its general rules and Python routing instructions
alongside the T/HIS-specific guidance below.

## References

- JavaScript API: `references/js-api/`
- IntelliSense declarations: `intellisense/this.d.ts`
- Dialogue commands: `dialogue-commands/`
- Runnable examples: `examples/`

## Examples

- `examples/plot_node_displacement.js` for extracting and plotting nodal
  displacement from the currently loaded model.
- `examples/three_graphs_energy_spotweld_part.js` for multiple graphs, global
  and part energy curves, spotweld forces, datums, and input widgets.


## Dialogue Commands

For dialogue commands list in T/HIS, refer to `dialogue-commands/this-dialogue-commands.md`

## Golden Rules

- Before generating code, verify every class, method, property, argument, and
 command against the local API references and declaration file. Do not guess
 undocumented API names.
- Use only documented T/HIS APIs for T/HIS stages. Do not substitute PRIMER,
 D3PLOT, or REPORTER classes, methods, properties, constants, commands, or
 imports.