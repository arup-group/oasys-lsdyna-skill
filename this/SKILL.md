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
- Shared Python guidance: `../shared/python-api/`

Before generating code, verify every class, method, property, argument, and
command against the local API references and declaration file. Do not guess
undocumented API names.

Use T/HIS for history files, curves, nodal histories, contact forces, result
extraction, plotting, and CSV or text export.

Keep T/HIS scripts separate from D3PLOT and REPORTER scripts unless the user
explicitly requests a combined workflow. Save generated scripts in the user's
workspace, not in this skill.