---
applyTo: "**/*.py"
---

# PRIMER v22.1 Python API

## Installation
```
pip install Oasys.PRIMER
```

## Runtime
Python scripts run **outside** PRIMER via gRPC. Each API call is a network round-trip —
avoid per-entity loops; prefer `GetAll()` and flagged bulk operations.

**GUI and Graphics classes are NOT available from Python.** Use JavaScript for anything
requiring PRIMER's graphical interface.

## Connection Patterns

### Start a new PRIMER instance
```python
import Oasys.PRIMER

connection = Oasys.PRIMER.start(abspath=r"C:\path\to\primerXX_x64.exe")
try:
    # ... your script ...
finally:
    Oasys.PRIMER.terminate(connection)
```

### Connect to a running PRIMER instance
PRIMER must be started with `-grpc=50051` or via **Options > gRPC/Python > Start**.
```python
import Oasys.PRIMER

connection = Oasys.PRIMER.connect(port=50051)
try:
    # ... your script ...
finally:
    Oasys.PRIMER.disconnect(connection)
```

### Batch (no GUI)
```python
connection = Oasys.PRIMER.start(abspath=r"C:\path\to\primerXX_x64.exe", batch=True)
```

## Finding Method Signatures
Fetch the live Sphinx docs for any class:
```
https://help.oasys-software.com/resources/Storage/sphinx/22.1/PRIMER/{ClassName}.html
```
Examples:
- `Model` → `https://help.oasys-software.com/resources/Storage/sphinx/22.1/PRIMER/Model.html`
- `Shell` → `https://help.oasys-software.com/resources/Storage/sphinx/22.1/PRIMER/Shell.html`
- Global functions → `https://help.oasys-software.com/resources/Storage/sphinx/22.1/PRIMER/global.html`

**Never invent or guess method names.**

## Key Patterns

### Read a model
```python
m = Oasys.PRIMER.Model.Read(r"path\to\model.key")
```

### Iterate entities (prefer GetAll over loops with GetFromID)
```python
parts = Oasys.PRIMER.Part.GetAll(m)
for p in parts:
    print(p.title)
```

### None checks — always required
```python
part = Oasys.PRIMER.Part.GetFromID(m, 101)
if part is None:
    raise ValueError("Part 101 not found")
```

### Property acronyms are always UPPERCASE
`SetPropertyByName` and `GetPropertyByName` require **uppercase** acronym strings matching the LS-DYNA keyword field names. This applies to **every entity class** — Material, Section, Contact, Curve, etc.:
```python
mat.SetPropertyByName("RO", 7.85e-9)  # NOT "ro"
mat.SetPropertyByName("E",  210000)   # NOT "e"
mat.SetPropertyByName("PR", 0.3)      # NOT "pr"
```

### Flag pattern
```python
flag = Oasys.PRIMER.AllocateFlag()
try:
    # ... flag entities ...
    Oasys.PRIMER.Part.BlankFlagged(m, flag)
finally:
    Oasys.PRIMER.ReturnFlag(flag)
```

### Write model
```python
m.Write(r"path\to\output.key")
```

## Reference Files in Workspace
| Topic | File |
|---|---|
| Connection & start patterns | `markdown/python_api/MD/primer.md` |
| Python vs JS tradeoffs | `markdown/python_api/MD/preamble.md` |
| gRPC connection details | `markdown/python_api/MD/grpc-connection.md` |
| Install instructions | `markdown/python_api/MD/python-modules.md` |
| Worked examples | `markdown/python_api/MD/` (gmsh, open3d, beam_opt) |

## Common Entity Class Names
`Model`, `Part`, `Node`, `Shell`, `Solid`, `Beam`, `Tshell`, `Material`, `Section`,
`Contact`, `Set`, `NodeSet`, `Curve`, `Spc`, `LoadNode`, `LoadGravity`, `LoadShell`,
`PrescribedMotion`, `Velocity`, `CoordinateSystem`, `Transformation`, `Parameter`,
`Include`, `History`, `Hourglass`, `Damping`, `Utils`, `Xrefs`
