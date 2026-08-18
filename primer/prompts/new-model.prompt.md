---
agent: agent
description: Scaffold a new LS-DYNA model from scratch in PRIMER using the JS or Python API
---

Build a new LS-DYNA model in Oasys PRIMER v23.0.

**API:** {{API}} <!-- "JavaScript" or "Python" -->
**Model description:** {{MODEL_DESCRIPTION}}
**Unit system:** {{UNIT_SYSTEM}} <!-- e.g. "mm, kg, ms, kN" or "m, kg, s, N" -->
**Output file:** {{OUTPUT_PATH}}

## What to generate

Produce a complete, runnable script that:

1. **Creates/opens a model** — `Model.Read()` if loading existing geometry, or a new `Model` object
2. **Defines sections** — appropriate `*SECTION_*` keyword via the `Section` class
3. **Defines materials** — appropriate `*MAT_*` keyword via the `Material` class
   - Look up the material keyword in `lsdyna/keywords.txt` to confirm the correct keyword name and fields
4. **Creates parts** — `Part` class linking section and material
5. **Creates nodes** — `Node` class with coordinates
6. **Creates elements** — `Shell`, `Solid`, or `Beam` class as appropriate
7. **Applies boundary conditions** — `Spc` class for constraints
8. **Applies loads** — `LoadNode`, `LoadGravity`, or `LoadShell` as appropriate
9. **Defines load curves** — `Curve` class for time-history data
10. **Sets control cards** — termination time, timestep, output requests
11. **Writes the model** — `m.Write(output_path)`

## Reference files to consult
- JS: `markdown/js-api/MD/primer-model-class.md`, `primer-part-class.md`, `primer-node-class.md`, `primer-shell-class.md`, `primer-material-class.md`, `primer-section-class.md`, `primer-spc-class.md`, `primer-curve-class.md`
- Python: fetch `https://help.oasys-software.com/resources/Storage/sphinx/22.1/PRIMER/Model.html` etc.
- Keyword fields: search `lsdyna/keywords.txt` for any `*KEYWORD=vol,page`

## Rules
- Verify every method name against the MD files or `intellisense/primer.d.ts` — never guess
- Include unit system as a comment at the top of the script
- Python scripts must use `try/finally` with `terminate()`/`disconnect()`
- JS scripts must use the Flag pattern: `AllocateFlag()` → use → `ReturnFlag()`
