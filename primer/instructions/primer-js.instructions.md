---
applyTo: "**/*.js"
---

# PRIMER v23 JavaScript API

## Runtime
Scripts run **inside** PRIMER's embedded JavaScript engine (SpiderMonkey).
- All PRIMER classes are **global** — no `import` or `require`
- Run a script: PRIMER menu → Script → Run, or pass `-d=tty` for batch mode
- Test batch mode: `BatchMode()` returns `true` if running without GUI

## Finding Method Signatures
Before writing any API call:
1. Replace `{lowercaseclassname}` with the verified PRIMER class name converted to lowercase, then read the resulting `../references/js-api/primer-{lowercaseclassname}-class.md` file (for example, `Part` → `primer-part-class.md`).
2. Or check `../intellisense/primer.d.ts` — full TypeScript declarations for all classes
3. Global functions: `../references/js-api/primer-global-class.md`

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
- See `../references/js-api/primer-window-class.md` and `../references/js-api/primer-widget-class.md`
- See `../references/js-api/primer-graphics-class.md` for graphical operations
- Key classes: `Window`, `Form`, `Button`, `TextBox`, `CheckBox`, `OptionMenu`, `List`

## Key Class Reference Files
| Class | MD file |
|---|---|
| Model | `../references/js-api/primer-model-class.md` |
| Part | `../references/js-api/primer-part-class.md` |
| Node | `../references/js-api/primer-node-class.md` |
| Shell | `../references/js-api/primer-shell-class.md` |
| Solid | `../references/js-api/primer-solid-class.md` |
| Material | `../references/js-api/primer-material-class.md` |
| Section | `../references/js-api/primer-section-class.md` |
| Contact | `../references/js-api/primer-contact-class.md` |
| Set | `../references/js-api/primer-set-class.md` |
| Spc | `../references/js-api/primer-spc-class.md` |
| Curve | `../references/js-api/primer-curve-class.md` |
| LoadNode | `../references/js-api/primer-loadnode-class.md` |
| LoadGravity | `../references/js-api/primer-loadgravity-class.md` |
| Parameter | `../references/js-api/primer-parameter-class.md` |
| Include | `../references/js-api/primer-include-class.md` |
| Utils | `../references/js-api/primer-utils-class.md` |
