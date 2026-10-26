---
name: shared
description: >
  Use when writing or debugging Oasys Python scripts for PRIMER, D3PLOT,
  T/HIS, or REPORTER, including package setup, gRPC connections,
  lifecycle management, and official Sphinx Python API verification.
---

# Shared Oasys Python API Guidance

Consult `python-api/` for common Python API setup and behaviour, including
connection, installation, modules, and cleanup guidance. Consult the tool's
skill for its API classes and methods. Load the root `../SKILL.md` for general
rules, tool routing, and combined workflow sequencing.

## Connection lifecycle

After connecting to or starting a tool, use `try/finally` to disconnect from
the existing session or terminate the instance the script started. Verify the
appropriate tool's lifecycle calls in its Python documentation.

## Python API verification

Before writing or modifying a Python script, fetch and consult the official
Sphinx Python API documentation for the appropriate tool and target release.

- PRIMER: https://dyna-downloads.oasys-software.com/sphinx/23.0/PRIMER/index.html
- D3PLOT: https://dyna-downloads.oasys-software.com/sphinx/23.0/D3PLOT/index.html
- T/HIS: https://dyna-downloads.oasys-software.com/sphinx/23.0/T-HIS/index.html
- REPORTER: https://dyna-downloads.oasys-software.com/sphinx/23.0/REPORTER/index.html

Follow the relevant class and function links to verify constructors, methods,
properties, constants, arguments, return values, and connection/lifecycle calls.
Use documentation matching the requested release; do not silently substitute
another version.

If the Sphinx documentation cannot be accessed, report that Python API
verification is blocked instead of inferring signatures from JavaScript
references, declarations, or examples.