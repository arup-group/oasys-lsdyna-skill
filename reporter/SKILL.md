---
name: reporter
description: >
  Use when the user is working with Oasys REPORTER, creating or updating report
  templates, inserting plots or tables, or automating result summaries.
---

# REPORTER Scripting Assistant

Load `../SKILL.md` and follow its general rules and Python routing instructions
alongside the REPORTER-specific guidance below.

## References

- JavaScript API: `references/js-api/`
- IntelliSense declarations: `intellisense/reporter.d.ts`
- Runnable examples: `examples/`

## Examples

- `examples/part_table_report.js` for creating a template, page, table, and
  generated report containing part data.
- `examples/reporter_batch_process.js` for processing a list of result files
  with a template and writing reports to an output directory.

  ## Golden Rules

- Before generating code, verify every class, method, property, and argument
  against the local API references and declaration file. Do not guess
  undocumented API names.

- Use only documented REPORTER APIs for REPORTER stages. Do not substitute
  PRIMER, D3PLOT, or T/HIS classes, methods, properties, constants, commands, or
  imports.
