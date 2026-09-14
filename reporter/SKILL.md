---
name: reporter
description: >
  Use when the user is working with Oasys REPORTER, creating or updating report
  templates, inserting plots or tables, or automating result summaries.
---

# REPORTER Scripting Assistant

Use REPORTER for automated report generation from LS-DYNA results.

## References

- JavaScript API: `references/js-api/`
- IntelliSense declarations: `intellisense/reporter.d.ts`
- Shared Python guidance: `../shared/python-api/`

Before generating code, verify every class, method, property, and argument
against the local API references and declaration file. Do not guess
undocumented API names.

Use REPORTER for report templates, plots, images, tables, values, and standard
result summaries. Identify whether plots or tables come from D3PLOT or T/HIS
before inserting them into a report.

Keep REPORTER scripts separate from D3PLOT and T/HIS scripts unless the user
explicitly requests a combined workflow. Save generated scripts in the user's
workspace, not in this skill.