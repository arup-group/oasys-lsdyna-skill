---
agent: agent
description: Batch-modify entities in an existing PRIMER model — rename, reassign, change properties
---

Batch-edit entities in an existing LS-DYNA model using Oasys PRIMER v22.1.

**API:** {{API}} <!-- "JavaScript" or "Python" -->
**Model file:** {{MODEL_FILE}}
**Operation:** {{OPERATION}}
<!-- Examples:
  - "Rename all parts matching pattern 'BODY_*' to add prefix 'V2_'"
  - "Reassign all parts in include file 2 to material ID 5"
  - "Change shell thickness on all parts with PID 100-200 to 1.5mm"
  - "Delete all duplicate nodes within 0.01mm tolerance"
  - "Renumber all parts starting from 1000"
  - "Set hourglass control type 4 on all solid parts"
-->

## What to generate

Produce a complete, runnable script that:

1. Reads the model
2. Identifies the target entities (by ID range, title pattern, include file, set, etc.)
3. Applies the modification
4. Writes the modified model to {{OUTPUT_FILE}} (or overwrites if not specified)

## Reference files to consult
- JS: `markdown/js-api/MD/primer-part-class.md`, `primer-set-class.md`, `primer-node-class.md`, `primer-shell-class.md`, `primer-utils-class.md`
- Python: fetch relevant class pages from `https://help.oasys-software.com/resources/Storage/sphinx/22.1/PRIMER/`
- For flagged bulk operations: see `AllocateFlag()` in `markdown/js-api/MD/primer-global-class.md`

## Rules
- Use flagged operations (`SetFlagged`, `BlankFlagged`, `DeleteFlagged`) for bulk work — much faster than per-entity calls
- JS: always `ReturnFlag()` after flagged operations
- Python: prefer `GetAll()` over per-entity `GetFromID()` loops
- Always write to a new file first; only overwrite original if explicitly requested
