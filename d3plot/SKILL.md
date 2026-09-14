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
- Shared Python guidance: `../shared/python-api/`

Before generating code, verify every class, method, property, argument, and
command against the local API references and declaration file. Do not guess
undocumented API names.

Use D3PLOT for opening result files, states and time steps, animation, model
deformation, contour plots, result measurements, and screenshots.

Keep D3PLOT scripts separate from T/HIS and REPORTER scripts unless the user
explicitly requests a combined workflow. Save generated scripts in the user's
workspace, not in this skill.