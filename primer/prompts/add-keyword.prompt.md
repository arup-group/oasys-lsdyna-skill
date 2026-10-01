---
agent: agent
description: Look up an LS-DYNA keyword and generate the API call to add it to a PRIMER model
---

Add an LS-DYNA keyword to a PRIMER model using the PRIMER API.

**API:** {{API}} <!-- "JavaScript" or "Python" -->
**Keyword:** {{KEYWORD}}
<!-- Examples: *CONTACT_AUTOMATIC_SURFACE_TO_SURFACE, *MAT_PLASTIC_KINEMATIC, *SECTION_SHELL, *DEFINE_CURVE -->
**Model variable:** {{MODEL_VAR}} <!-- variable name holding the Model object, e.g. "m" or "model" -->
**Field values:** {{FIELD_VALUES}}
<!-- Describe what you want, e.g.:
  - "Young's modulus 210 GPa, Poisson's ratio 0.3, density 7.85e-9 t/mm³"
  - "Shell thickness 1.5 mm, 5 integration points, Belytschko-Tsay formulation"
  - "Contact friction 0.2, soft constraint formulation"
  Leave blank to get a template with placeholder values.
-->

## What to generate

1. **Look up the keyword** — search `../references/keywords/keywords.txt` for `{{KEYWORD}}=vol,page` and report the volume and page number
2. **Describe the required fields** — list all mandatory cards and fields for this keyword
3. **Generate the API call** — produce a code snippet using the correct PRIMER class and constructor/properties to create this keyword entity
4. **Show the equivalent keyword deck** — show what the resulting `*.k` card looks like

## Reference files to consult
- Keyword index: search `../references/keywords/keywords.txt` for `*KEYWORD_NAME=vol,page`.
- Keyword manual: open the corresponding manual at `page`:
  - `vol=1` → `../references/keywords/LS-DYNA_Manual_Volume_I_R16.pdf`
  - `vol=2` → `../references/keywords/LS-DYNA_Manual_Volume_II_R16.pdf`
  - `vol=3` → `../references/keywords/LS-DYNA_Manual_Volume_III_R16.pdf`
- JavaScript class: replace `{lowercaseclassname}` with the verified PRIMER class name converted to lowercase, then open `../references/js-api/primer-{lowercaseclassname}-class.md`. For example, class `Part` → `../references/js-api/primer-part-class.md`.
- Python class: replace `{ClassName}` with the verified, case-sensitive PRIMER class name, construct the URL, and then fetch it:
  `https://dyna-downloads.oasys-software.com/sphinx/23.0/PRIMER/{ClassName}.html`
  For example, class `Part` → `https://dyna-downloads.oasys-software.com/sphinx/23.0/PRIMER/Part.html`.

## Rules
- Always look up `keywords.txt` first — never guess field names or positions
- Verify the PRIMER class name against the MD files or Sphinx docs
- Flag optional fields clearly
- If the keyword maps to a "dictionary" type (e.g. `*CONTROL_*`, `*DATABASE_*`), note that it is accessed as a dict property on the Model, not as a standalone entity
