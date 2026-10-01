---
agent: agent
description: Set up a complete crash test loadcase in PRIMER — barrier, contacts, control cards, output
---

Set up a crash test loadcase in Oasys PRIMER v23.0.

**API:** {{API}} <!-- "JavaScript" or "Python" -->
**Model file:** {{MODEL_FILE}}
**Test type:** {{TEST_TYPE}}
<!-- Examples:
  - "Full frontal 56 km/h rigid barrier"
  - "ODB 40% offset deformable barrier at 64 km/h"
  - "Side impact MDB Euro NCAP"
  - "Pedestrian head impact"
  - "Component drop test"
-->
**Barrier/impactor part ID:** {{BARRIER_PID}} <!-- or "none" if already in model -->
**Vehicle speed (km/h):** {{SPEED}}
**End time (ms):** {{END_TIME}}
**Output file:** {{OUTPUT_FILE}}

## What to generate

Produce a complete, runnable script that sets up:

1. **Initial velocity** — `Velocity` or `PrescribedMotion` on vehicle parts
2. **Rigid barrier/wall** — position and constrain the barrier part (`Rigidwall` or rigid part setup)
3. **Contacts** — `Contact` class with appropriate `*CONTACT_AUTOMATIC_*` type;
  check `../references/keywords/keywords.txt` for the correct contact keyword fields
4. **Control cards** — termination time, timestep (DT2MS or DTMS), energy output
5. **Database output** — `*DATABASE_*` cards for d3plot, rcforc, nodout, etc.
6. **Boundary conditions** — symmetry planes if applicable
7. **Gravity** — `LoadGravity` if required

## Reference files to consult
- JS classes: `../references/js-api/primer-contact-class.md`, `../references/js-api/primer-velocity-class.md`, `../references/js-api/primer-loadgravity-class.md`
- Python class: replace `{ClassName}` with the verified, case-sensitive PRIMER class name, construct the URL, and then fetch it:
  `https://dyna-downloads.oasys-software.com/sphinx/23.0/PRIMER/{ClassName}.html`
  For example, class `Part` → `https://dyna-downloads.oasys-software.com/sphinx/23.0/PRIMER/Part.html`.
- Keyword fields: search `../references/keywords/keywords.txt`

## Rules
- Verify all method names against MD files or `primer.d.ts`
- Add `$` comments in the deck explaining each setup section
- Python scripts must use `try/finally` with `terminate()`
