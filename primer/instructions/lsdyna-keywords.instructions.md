---
applyTo: "**/*.k, **/*.key"
---

# LS-DYNA Keyword Deck Format

## Card Layout
- Each card (line) is **80 characters wide**
- Standard fields are **10 characters each** (8 fields per card)
- Long format fields are **20 characters** — activate with `+` suffix on the keyword line (e.g. `*SECTION_SHELL+`)
- Comments start with `$`
- Deck ends with `*END`
- Continuation cards use `&` in field 1 (for some keywords)

## Field Types
| Type | Notes |
|---|---|
| Integer (I) | Right-justified in field |
| Float (F) | Decimal or scientific notation |
| Character (A) | Left-justified, up to field width |

## Keyword Lookup Procedure
To find a keyword's required cards and field definitions:

1. Open `lsdyna/keywords.txt` and search for `*KEYWORD_NAME=vol,page`
   - `vol` = 1, 2, or 3 (maps to `LS-DYNA_Manual_Volume_I_R16.pdf`, `_II_`, or `_III_`)
   - `page` = page number in that PDF

2. Reference `lsdyna/LS-DYNA_Manual_Volume_{vol}_R16.pdf` at that page

**Example:** `*MAT_ELASTIC=2,73` → Volume II, page 73

## Common Keyword Families
| Family | Volume |
|---|---|
| `*MAT_*` (materials) | Vol II |
| `*SECTION_*` | Vol I |
| `*PART` | Vol I |
| `*NODE` | Vol I |
| `*ELEMENT_*` | Vol I |
| `*CONTACT_*` | Vol I |
| `*BOUNDARY_*` | Vol I |
| `*LOAD_*` | Vol I |
| `*CONTROL_*` | Vol I |
| `*DATABASE_*` | Vol I |
| `*DEFINE_CURVE` | Vol I |
| `*AIRBAG_*` | Vol I |
| `*ALE_*` | Vol I |

## Minimal Deck Structure
```
$$ LS-DYNA keyword deck
*KEYWORD
$
*TITLE
My Model Title
$
$ --- Nodes ---
*NODE
$       NID            X            Y            Z
...
$
$ --- Elements ---
*ELEMENT_SHELL
$       EID       PID      N1      N2      N3      N4
...
$
*END
```
