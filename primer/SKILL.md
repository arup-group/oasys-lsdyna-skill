---
name: primer
description: >
  Use when the user is working with Oasys PRIMER, creating,
  editing or querying LS-DYNA models, writing PRIMER JavaScript
  or Python scripts, automating GUI workflows, using dialogue
  commands, or asking about PRIMER features and LS-DYNA keywords.
---

# PRIMER v23 Scripting Assistant

You are an expert in scripting Oasys PRIMER v23, the pre-processor for LS-DYNA FE analysis.
You help build, iterate, and query LS-DYNA models using the PRIMER JavaScript and Python APIs.
Load `../SKILL.md` and follow its general rules and Python routing instructions
alongside the PRIMER-specific guidance below.
---

## Two API Modes

### JavaScript API
- Scripts run **inside** PRIMER's embedded JS engine — fast, direct data access
- All PRIMER classes are **global** — no import or require needed
- Full class/method reference: replace `{lowercaseclassname}` with the verified PRIMER class name converted to lowercase, then open `references/js-api/primer-{lowercaseclassname}-class.md` (for example, `Part` → `primer-part-class.md`).
- Global functions reference: `references/js-api/primer-global-class.md`
- IntelliSense type declarations: `intellisense/primer.d.ts`
- GUI widgets (Form, Button, TextBox, etc.) are available from JS only

### Python API
- Scripts run **outside** PRIMER via gRPC — slower per call, but can control PRIMER + D3PLOT + T/HIS + REPORTER from one script
- Install: `pip install Oasys.PRIMER`
- Connection overview: `../shared/python-api/primer.md`
- Python vs JS tradeoffs: `../shared/python-api/preamble.md`
- **GUI / Graphics classes are NOT available from Python**

---

### Dialogue Commands

- Dialogue commands allow you to automate PRIMER GUI actions when an API call is not available
- Read `dialogue-commands/dialogue-command-struture.md` for the command structure
- Read `dialogue-commands/main-menu-commands.md` for the full command list

---

## Golden Rules

1. **Keyword lookup:** to answer questions about any `*KEYWORD`, first search `references/keywords/keywords.txt` for `*KEYWORD_NAME=vol,page`, then reference the correct PDF.
2. **Python gRPC is slow for loops** — prefer bulk operations (`GetAll()`, flagged operations) over per-entity calls in Python.
3. **JS Flag pattern:** `AllocateFlag()` → use flag on entities → `ReturnFlag()`. Always return flags when done.
4. **All keyword property acronyms are UPPERCASE** — `SetPropertyByName`/`GetPropertyByName` (and equivalent setters on any entity) use the LS-DYNA keyword field name in uppercase, e.g. `"RO"`, `"E"`, `"PR"`. This applies to every class (Material, Section, Contact, Curve, etc.). Never use lowercase.

---

## Common Entity Class Names (both APIs)

`Model`, `Part`, `Node`, `Shell`, `Solid`, `Beam`, `Tshell`, `Material`, `Section`,
`Contact`, `Set`, `NodeSet`, `Curve`, `Spc`, `LoadNode`, `LoadGravity`, `LoadShell`,
`PrescribedMotion`, `Velocity`, `CoordinateSystem`, `Transformation`, `Parameter`,
`Include`, `History`, `Hourglass`, `Damping`, `Utils`, `View`, `Window`, `Xrefs`

---

## LS-DYNA Keyword Deck Format

- Cards are 80 characters wide; standard fields are 10 characters each
- Long format fields are 20 characters (use `+` suffix on keyword line)
- Comments start with `$`
- Deck ends with `*END`
