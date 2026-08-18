---
agent: agent
description: Build a PRIMER GUI tool using JavaScript widgets — Form, Button, TextBox, OptionMenu
---

> **Note:** GUI / widget classes are only available in the **JavaScript API** (runs inside PRIMER).
> They cannot be used from Python.

Build a PRIMER GUI tool in JavaScript for Oasys PRIMER v23.0.

**Tool name:** {{TOOL_NAME}}
**Purpose:** {{TOOL_PURPOSE}}
<!-- Examples:
  - "A panel to batch-rename parts using a prefix/suffix input"
  - "A dialog to set material properties on selected parts"
  - "A tool to create a simple mesh of a flat plate with user-defined dimensions"
  - "A form to set up *DATABASE_* output requests"
-->
**Inputs required:** {{INPUTS}}
<!-- List the user inputs needed, e.g.:
  - "Model selection dropdown"
  - "Part ID or pick from screen"
  - "Numeric input for thickness"
  - "OK / Cancel buttons"
-->

## What to generate

Produce a complete, runnable JavaScript script that:

1. Creates a `Window` or `Form` with the required widgets
2. Handles user input with callbacks
3. Performs the operation on **OK** / applies
4. Shows results or errors in the dialogue box (`Message()`, `ErrorMessage()`)
5. Cleans up on **Cancel** or close

## Reference files to consult
- `markdown/js-api/MD/primer-window-class.md` — Window and Form creation
- `markdown/js-api/MD/primer-widget-class.md` — widget types and properties
- `markdown/js-api/MD/primer-widgetitem-class.md` — OptionMenu / List items
- `markdown/js-api/MD/primer-graphics-class.md` — graphics/view operations
- `markdown/js-api/MD/primer-global-class.md` — Message(), ErrorMessage(), AllocateFlag()
- `markdown/primer/MD/how-to-build-a-gui.md` — PRIMER GUI builder guide
- `markdown/primer/MD/the-javascript-gui-builder.md`

## Rules
- Verify every widget method and property against `primer-widget-class.md` or `primer.d.ts`
- All callbacks must handle errors gracefully with `ErrorMessage()`
- Use `AllocateFlag()` / `ReturnFlag()` for any flagged entity operations inside callbacks
- Do not mix Python and JS in the same script
