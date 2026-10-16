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
- Runnable examples: `examples/`
- Shared Python guidance: `../shared/python-api/`

## Examples

Before generating or editing a REPORTER script, check `examples/` for a relevant example:

- `examples/part_table_report.js` for creating a template, page, table, and
  generated report containing part data.
- `examples/reporter_batch_process.js` for processing a list of result files
  with a template and writing reports to an output directory.

Use examples as runnable patterns, but adapt template variables, result files,
table data, paths, and output formats. Verify copied API usage against
`references/js-api/` and `intellisense/reporter.d.ts`; examples do not override
the API references.


## Generation Rules

Before generating code, verify every class, method, property, and argument
against the local API references and declaration file. Do not guess
undocumented API names.

Use only documented REPORTER APIs for REPORTER stages. Do not substitute
PRIMER, D3PLOT, or T/HIS classes, methods, properties, constants, commands, or
imports.

Use REPORTER for report templates, plots, images, tables, values, and standard
result summaries. Identify whether plots or tables come from D3PLOT or T/HIS
before inserting them into a report.

Keep REPORTER scripts separate from D3PLOT and T/HIS scripts unless the user
explicitly requests a combined workflow. Save generated scripts in the user's
workspace, not in this skill.