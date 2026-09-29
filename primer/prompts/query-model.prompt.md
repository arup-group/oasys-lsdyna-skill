---
agent: agent
description: Read and inspect an existing LS-DYNA model in PRIMER — list parts, check mass, find entities
---

Query an existing LS-DYNA model in Oasys PRIMER v23.0.

**API:** {{API}} <!-- "JavaScript" or "Python" -->
**Model file:** {{MODEL_FILE}}
**Query:** {{QUERY}}
<!-- Examples:
  - "List all parts with their IDs, titles, and mass"
  - "Find all *CONTACT_* definitions and their slave/master surfaces"
  - "Report total model mass and centre of gravity"
  - "List all materials and their type (*MAT_xxx)"
  - "Find parts with no section or material assigned"
  - "Count nodes and elements by type"
-->

## What to generate

Produce a complete, runnable script that:

1. Connects to / starts PRIMER and reads the model file
2. Performs the requested query
3. Prints results clearly to stdout or a CSV file
4. Cleans up the connection

## Reference files to consult
- JS: `../references/js-api/primer-model-class.md`, `../references/js-api/primer-part-class.md`, `../references/js-api/primer-material-class.md`, `../references/js-api/primer-section-class.md`
- Python: fetch `https://help.oasys-software.com/resources/Storage/sphinx/23/PRIMER/Model.html`, `Part.html`, etc.
- For keyword field meanings: search `../references/keywords/keywords.txt` for the relevant `*KEYWORD=vol,page`
- PRIMER Xrefs class for cross-reference queries: `../references/js-api/primer-xrefs-class.md`

## Rules
- Always `None`-check entity lookups in Python
- Prefer `GetAll()` over iterating with `GetFromID()` in loops
- JS: use Flag pattern for any flagged operations
