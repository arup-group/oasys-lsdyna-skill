---
name: shared
description: >
  Use for shared Oasys Python API setup, gRPC connection patterns, and workflows
  that combine PRIMER, D3PLOT, T/HIS, or REPORTER.
---

# Shared Oasys Scripting Guidance

Consult `python-api/` for common Python API setup and behaviour, including
connection, installation, modules, and cleanup guidance. Consult the tool's
skill for its API classes and methods.

For a combined post-processing workflow, use the tools in this order unless the
user requests a different sequence:

1. Use D3PLOT to open or visualise result data.
2. Use T/HIS to extract histories or curves.
3. Use REPORTER to generate a report from plots, tables, or extracted values.

For an end-to-end model and results workflow:

1. Use PRIMER to create or modify the model.
2. Run the LS-DYNA solve.
3. Use the appropriate post-processing skill for the results.

Keep scripts for separate tools separate. Verify all Python API usage against
the shared references and the relevant tool declarations. If an API or command
is not documented, state that clearly instead of guessing.