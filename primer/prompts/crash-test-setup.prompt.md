---
agent: agent
description: Set up a complete crash test loadcase in PRIMER — barrier, contacts, control cards, output
---

Set up a crash test loadcase in Oasys PRIMER v22.1.

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
   check `lsdyna/keywords.txt` for the correct contact keyword fields
4. **Control cards** — termination time, timestep (DT2MS or DTMS), energy output
5. **Database output** — `*DATABASE_*` cards for d3plot, rcforc, nodout, etc.
6. **Boundary conditions** — symmetry planes if applicable
7. **Gravity** — `LoadGravity` if required

## Reference files to consult
- `markdown/primer/MD/crash-test-setup.md`
- `markdown/primer/MD/contact-defining-contact-surfaces.md`
- `markdown/primer/MD/initial-defining-initial-conditions.md`
- `markdown/primer/MD/control-defining-analysis-control-cards.md`
- `markdown/primer/MD/database-defining-database-options.md`
- JS classes: `primer-contact-class.md`, `primer-velocity-class.md`, `primer-loadgravity-class.md`
- Python: fetch relevant class pages from `https://help.oasys-software.com/resources/Storage/sphinx/22.1/PRIMER/`
- Keyword fields: search `lsdyna/keywords.txt`

## Rules
- Verify all method names against MD files or `primer.d.ts`
- Add `$` comments in the deck explaining each setup section
- Python scripts must use `try/finally` with `terminate()`
