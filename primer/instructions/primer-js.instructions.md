---
applyTo: "**/*.js"
---

# PRIMER v22.1 JavaScript API

## Runtime
Scripts run **inside** PRIMER's embedded JavaScript engine (SpiderMonkey).
- All PRIMER classes are **global** — no `import` or `require`
- Run a script: PRIMER menu → Script → Run, or pass `-d=tty` for batch mode
- Test batch mode: `BatchMode()` returns `true` if running without GUI

## Finding Method Signatures
Before writing any API call:
1. Read `markdown/js-api/MD/primer-{lowercaseclassname}-class.md` for the class
2. Or check `intellisense/primer.d.ts` — full TypeScript declarations for all classes
3. Global functions: `markdown/js-api/MD/primer-global-class.md`

**Never invent or guess method names.**

## Key Patterns

### Read a model
```js
var m = Model.Read("path/to/model.key");
```

### Iterate entities
```js
var parts = Part.GetAll(m);
for (var i = 0; i < parts.length; i++) {
    Message(parts[i].title);
}
```

### Flag pattern (required for flagged operations)
```js
var flag = AllocateFlag();
// ... set flag on entities ...
Part.BlankFlagged(m, flag);
ReturnFlag(flag);  // always return when done
```

### Create entities
```js
var n = new Node(m, id, x, y, z);
var s = new Shell(m, eid, pid, n1, n2, n3, n4);
```

### Property acronyms are always UPPERCASE
`SetPropertyByName` and `GetPropertyByName` require **uppercase** acronym strings matching the LS-DYNA keyword field names. This applies to **every entity class** — Material, Section, Contact, Curve, LoadNode, etc.:
```js
var mat = new Material(m, 1, "ELASTIC");
mat.SetPropertyByName("RO", 7.85e-9); // NOT "ro"
mat.SetPropertyByName("E",  210000);  // NOT "e"
mat.SetPropertyByName("PR", 0.3);     // NOT "pr"
```
When in doubt, check the LS-DYNA keyword manual for the exact field acronym.

### Write model
```js
m.Write("path/to/output.key");
```

## GUI Widgets (JS only — not available in Python)
- See `markdown/js-api/MD/primer-window-class.md` and `markdown/js-api/MD/primer-widget-class.md`
- See `markdown/js-api/MD/primer-graphics-class.md` for graphical operations
- Key classes: `Window`, `Form`, `Button`, `TextBox`, `CheckBox`, `OptionMenu`, `List`

## Key Class Reference Files
| Class | MD file |
|---|---|
| Model | `markdown/js-api/MD/primer-model-class.md` |
| Part | `markdown/js-api/MD/primer-part-class.md` |
| Node | `markdown/js-api/MD/primer-node-class.md` |
| Shell | `markdown/js-api/MD/primer-shell-class.md` |
| Solid | `markdown/js-api/MD/primer-solid-class.md` |
| Material | `markdown/js-api/MD/primer-material-class.md` |
| Section | `markdown/js-api/MD/primer-section-class.md` |
| Contact | `markdown/js-api/MD/primer-contact-class.md` |
| Set | `markdown/js-api/MD/primer-set-class.md` |
| Spc | `markdown/js-api/MD/primer-spc-class.md` |
| Curve | `markdown/js-api/MD/primer-curve-class.md` |
| LoadNode | `markdown/js-api/MD/primer-loadnode-class.md` |
| LoadGravity | `markdown/js-api/MD/primer-loadgravity-class.md` |
| Parameter | `markdown/js-api/MD/primer-parameter-class.md` |
| Include | `markdown/js-api/MD/primer-include-class.md` |
| Utils | `markdown/js-api/MD/primer-utils-class.md` |

## PRIMER Manual Topics
PRIMER feature documentation lives in `markdown/primer/MD/`. Key topics:
- `script-using-javascript-in-primer.md` — scripting overview
- `brief-tutorial-on-javascript-in-primer.md` — tutorial
- `crash-test-setup.md` — crash test setup
- `contact-defining-contact-surfaces.md` — contacts
- `keyword-menus.md` — keyword editing
