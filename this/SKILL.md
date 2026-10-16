---
name: this
description: >
  Use when the user is working with Oasys T/HIS, extracting time histories,
  processing curves, analysing forces or displacements, or exporting curve
  data.
---

# T/HIS Scripting Assistant

Use T/HIS for LS-DYNA time-history and curve processing.

## References

- JavaScript API: `references/js-api/`
- IntelliSense declarations: `intellisense/this.d.ts`
- Dialogue commands: `dialogue-commands/`
- Runnable examples: `examples/`
- Shared Python guidance: `../shared/python-api/`

## Examples

Before generating or editing a T/HIS script, check `examples/` for a relevant example:

- `examples/plot_node_displacement.js` for extracting and plotting nodal
  displacement from the currently loaded model.
- `examples/three_graphs_energy_spotweld_part.js` for multiple graphs, global
  and part energy curves, spotweld forces, datums, and input widgets.

Use examples as runnable patterns, but adapt model-specific IDs, paths, units,
components, and user inputs. Verify copied API usage against `references/js-api/`
and `intellisense/this.d.ts`; examples do not override the API references.

## Generation Rules

Before generating code, verify every class, method, property, argument, and
command against the local API references and declaration file. Do not guess
undocumented API names.

Use only documented T/HIS APIs for T/HIS stages. Do not substitute PRIMER,
D3PLOT, or REPORTER classes, methods, properties, constants, commands, or
imports.

Use T/HIS for history files, curves, nodal histories, contact forces, result
extraction, plotting, and CSV or text export.

Keep T/HIS scripts separate from D3PLOT and REPORTER scripts unless the user
explicitly requests a combined workflow. Save generated scripts in the user's
workspace, not in this skill.