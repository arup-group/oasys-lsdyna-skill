# Component class

The Component class gives you access to user defined binary components in D3PLOT. [More...](d3plot-component-class.md#Component_details)

The D3PLOT JavaScript API provides many class constants, properties and methods. For Arup to
be able to extend and enhance the API in the future any constant, property or method names beginning with a lowercase
or uppercase letter are reserved.

If you need to add your own properties or methods to one of the existing classes then to avoid any potential future conflict you
should ensure that the name begins with either an underscore (\_) or a dollar sign ($) or the name is prefixed with your
own unique identifier.

For example if company 'ABC' need to add a property called 'example' then to avoid any potential future conflict use one of:

* \_example
* $example
* ABC\_example

## Class functions

* [First](d3plot-component-class.md#Component::First)()
* [GetFromID](d3plot-component-class.md#Component::GetFromID)(number*[integer]*)
* [GetFromName](d3plot-component-class.md#Component::GetFromName)(name*[string]*)
* [Last](d3plot-component-class.md#Component::Last)()
* [Total](d3plot-component-class.md#Component::Total)()

## Member functions

* [Delete](d3plot-component-class.md#Component::Delete)()
* [GetData](d3plot-component-class.md#Component::GetData)(item*[Node|Beam|Shell|Solid|Tshell]*, options (optional)*[object]*)
* [Next](d3plot-component-class.md#Component::Next)()
* [Previous](d3plot-component-class.md#Component::Previous)()
* [PutData](d3plot-component-class.md#Component::PutData)(item*[Node|Beam|Shell|Solid|Tshell]*, data*[real|array]*, options (optional)*[object]*)

## Component constants

### Constants for ALE Data Components

| **Name** | **Description** |
| --- | --- |
| Component.ADENS | ALE denisty |
| Component.ADOMF | ALE dominant fraction |
| Component.AMMG | ALE multi-material group id |
| Component.AMMS | ALE multi-material group mass |

### Constants for Basic and Integrated Beam Force/Moment Data Components

| **Name** | **Description** |
| --- | --- |
| Component.BFMV | Force and moment vector [BFX, BFY, BFZ, BMXX, BMYY, BMZZ] |
| Component.BFR | Force magnitude |
| Component.BFX | X axial force |
| Component.BFY | Y axial force |
| Component.BFZ | Z axial force |
| Component.BMX | Extra beam data |
| Component.BMXX | XX torsional moment |
| Component.BMYY | YY bending moment |
| Component.BMZZ | ZZ bending moment |
| Component.BRM | Moment magnitude |

### Constants for Basic and Integrated Beam Strain Data Components

| **Name** | **Description** |
| --- | --- |
| Component.BEAX | Axial strain |
| Component.BEP | Effective plastic strain |

### Constants for Basic and Integrated Beam Stress Data Components

| **Name** | **Description** |
| --- | --- |
| Component.BSXX | Axial stress |
| Component.BSXY | XY shear stress |
| Component.BSZX | ZX shear stress |

### Constants for Belytschko-Schwer Resultant Beam Energy Data Components

| **Name** | **Description** |
| --- | --- |
| Component.BAED | Axial energy density |
| Component.BAEN | Axial energy |
| Component.BBED | Bending energy density |
| Component.BIE | Internal energy |
| Component.BIED | Internal energy density |

### Constants for Belytschko-Schwer Resultant Beam Moment Data Components

| **Name** | **Description** |
| --- | --- |
| Component.BMY1 | Y moment at end 1 |
| Component.BMY2 | Y moment at end 2 |
| Component.BMZ1 | Z moment at end 1 |
| Component.BMZ2 | Z moment at end 2 |

### Constants for Belytschko-Schwer Resultant Beam Rotation Data Components

| **Name** | **Description** |
| --- | --- |
| Component.BRXX | Torsional rotation |
| Component.BRY1 | Y rotation at end 1 |
| Component.BRY2 | Y rotation at end 2 |
| Component.BRZ1 | Z rotation at end 1 |
| Component.BRZ2 | Z rotation at end 2 |

### Constants for Belytschko-Schwer Resultant Beam Strain Data Components

| **Name** | **Description** |
| --- | --- |
| Component.BPE1 | Plastic energy at end 1 |
| Component.BPE2 | Plastic energy at end 2 |
| Component.BSAX | Total axial strain |

### Constants for Contact Surface Data Components (if a .ctf file has been read)

| **Name** | **Description** |
| --- | --- |
| Component.CAREA | Contact segment area |
| Component.CFGX | Contact global X force |
| Component.CFGY | Contact global Y force |
| Component.CFGZ | Contact global Z force |
| Component.CFLX | Contact local X force |
| Component.CFLY | Contact local Y force |
| Component.CFLZ | Contact local Z force |
| Component.CFM | Contact force magnitude |
| Component.CSN | Contact normal stress |
| Component.CST | Contact tangential stress |
| Component.CSX | Contact local X stress |
| Component.CSY | Contact local Y stress |

### Constants for Element Plastic Strain Data Components

| **Name** | **Description** |
| --- | --- |
| Component.EPL | Effective plastic strain |
| Component.ERATE | Strain rate |
| Component.PEMAG | Plastic strain magnitude |

### Constants for Element Plastic Strain Derived Data Components

| **Name** | **Description** |
| --- | --- |
| Component.PEAV | Average plastic strain |
| Component.PEMAX | Max principal plastic strain |
| Component.PEMID | Middle principal plastic strain |
| Component.PEMIN | Min principal plastic strain |
| Component.PEMS | Max plastic shear strain |

### Constants for Element Plastic Strain Tensor Data Components

| **Name** | **Description** |
| --- | --- |
| Component.PETEN | Plastic strain tensor [EXX, EYY, EZZ, EXY, EYZ, EZX] |
| Component.PEXX | X Plastic strain |
| Component.PEXY | XY Plastic shear strain |
| Component.PEYY | Y Plastic strain |
| Component.PEYZ | XY Plastic shear strain |
| Component.PEZX | ZX Plastic shear strain |
| Component.PEZZ | Z Plastic strain |

### Constants for Element Strain Derived Data Components

| **Name** | **Description** |
| --- | --- |
| Component.E2MAX | 2D (in-plane) max principal strain |
| Component.E2MIN | 2D (in-plane) min principal strain |
| Component.E2SHEAR | 2D (in-plane) max shear strain |
| Component.EAV | Average strain |
| Component.EMAX | Max prinicipal strain |
| Component.EMID | Middle prinicipal strain |
| Component.EMIN | Min prinicipal strain |
| Component.EMS | Max shear strain |
| Component.ENGMAJ | Engineering Major strain |
| Component.ENGMIN | Engineering Minor strain |
| Component.ENGTHK | Engineering Thickness strain |
| Component.ERATIO | 2D (in-plane) principal strain ratio |
| Component.EVON | von Mises strain |
| Component.SED | Strain energy density |

### Constants for Element Strain Tensor Data Components

| **Name** | **Description** |
| --- | --- |
| Component.ETEN | Strain tensor [EXX, EYY, EZZ, EXY, EYZ, EZX] |
| Component.EXX | X strain |
| Component.EXY | XY shear strain |
| Component.EYY | Y strain |
| Component.EYZ | YZ shear strain |
| Component.EZX | ZX shear strain |
| Component.EZZ | Z strain |

### Constants for Element Stress Derived Data Components

| **Name** | **Description** |
| --- | --- |
| Component.LODE\_A | Lode angle |
| Component.LODE\_P | Lode parameter |
| Component.LODE\_PA | Lode parameter alt |
| Component.S2MAX | 2D (in-plane) max principal stress |
| Component.S2MIN | 2D (in-plane) min principal stress |
| Component.S2SHEAR | 2D (in-plane) max shear stress |
| Component.SAV | Average stress (pressure) |
| Component.SMAX | Max principal stress |
| Component.SMID | Middle principal stress |
| Component.SMIN | Min principal stress |
| Component.SMS | Max shear stress |
| Component.SVON | signed von Mises stress |
| Component.TRI | Triaxiality |
| Component.YUTF | Yield Utilisation Factor |
| Component.YUTP | Yield Utilisation Percentage |

### Constants for Element Stress Tensor Data Components

| **Name** | **Description** |
| --- | --- |
| Component.STEN | Stress tensor [SXX, SYY, SZZ, SXY, SYZ, SZX] |
| Component.SXX | X stress |
| Component.SXY | XY stress |
| Component.SYY | Y stress |
| Component.SYZ | YZ stress |
| Component.SZX | ZX stress |
| Component.SZZ | Z stress |

### Constants for Element Thermal Strain Derived Data Components

| **Name** | **Description** |
| --- | --- |
| Component.TEAV | Average thermal strain |
| Component.TEMAX | Max principal thermal strain |
| Component.TEMID | Middle principal thermal strain |
| Component.TEMIN | Min principal thermal strain |
| Component.TEMS | Max thermal shear strain |

### Constants for Element Thermal Strain Tensor Data Components

| **Name** | **Description** |
| --- | --- |
| Component.TETEN | Thermal strain tensor [EXX, EYY, EZZ, EXY, EYZ, EZX] |
| Component.TEXX | X Thermal strain |
| Component.TEXY | XY Thermal shear strain |
| Component.TEYY | Y Thermal strain |
| Component.TEYZ | XY Thermal shear strain |
| Component.TEZX | ZX Thermal shear strain |
| Component.TEZZ | Z Thermal strain |

### Constants for Global Energy Data Components

| **Name** | **Description** |
| --- | --- |
| Component.GIE | Internal energy |
| Component.GKE | Kinetic energy |
| Component.GTE | Total energy |

### Constants for Global Mass Data Components

| **Name** | **Description** |
| --- | --- |
| Component.GMASS | Mass |

### Constants for Global Momentum Data Components

| **Name** | **Description** |
| --- | --- |
| Component.GMM | Momentum magnitude |
| Component.GMX | X Momentum |
| Component.GMY | Y Momentum |
| Component.GMZ | Z Momentum |

### Constants for Global Velocity Data Components

| **Name** | **Description** |
| --- | --- |
| Component.GVM | Velocity magnitude |
| Component.GVX | X Velocity |
| Component.GVY | Y Velocity |
| Component.GVZ | Z Velocity |

### Constants for LSDA (binout) Database Cross Section Data Components

| **Name** | **Description** |
| --- | --- |
| Component.XSEC\_A | Database X-sect area |
| Component.XSEC\_F | Database X-sect force (vector data) |
| Component.XSEC\_M | Database X-sect moment (vector data) |

### Constants for LSDA (binout) Retractor Data Components

| **Name** | **Description** |
| --- | --- |
| Component.RT\_F | Retractor force |
| Component.RT\_P | Retractor pull-out |

### Constants for LSDA (binout) SPC Data Components

| **Name** | **Description** |
| --- | --- |
| Component.SPC\_F | SPC force (vector data at nodes) |
| Component.SPC\_M | SPC moment (vector data at nodes) |

### Constants for LSDA (binout) Seatbelt Data Components

| **Name** | **Description** |
| --- | --- |
| Component.SB\_F | Seatbelt axial force |
| Component.SB\_L | Seatbelt length |

### Constants for LSDA (binout) Slipring Data Components

| **Name** | **Description** |
| --- | --- |
| Component.SR\_P | Slipring pull-through |

### Constants for LSDA (binout) Spotweld Data Components

| **Name** | **Description** |
| --- | --- |
| Component.SW\_F | Spotweld axial force |
| Component.SW\_FAIL | Spotweld failure |
| Component.SW\_S | Spotweld shear force |
| Component.SW\_TIME | Spotweld failure time |
| Component.SW\_TRSN | Spotweld torsion moment |

### Constants for LSDA (binout) Spring Data Components

| **Name** | **Description** |
| --- | --- |
| Component.SP\_E | Spring elongation |
| Component.SP\_F | Spring axial force |
| Component.SP\_M | Spring torsional moment |
| Component.SP\_R | Spring rotation |

### Constants for Material Data Components for PARTs and Part-based elems (needs .ZTF file)

| **Name** | **Description** |
| --- | --- |
| Component.DENS | Material density |
| Component.FSTRN | Failure strain |
| Component.PRAT | Poisson's ratio |
| Component.YMOD | Young's modulus |
| Component.YSTRS | Yield stress |

### Constants for Nastran OP2 Beam Data Components

| **Name** | **Description** |
| --- | --- |
| Component.BENL | Energy loss |
| Component.BENLD | Energy loss density |
| Component.BENLP | Energy loss percentage |
| Component.BKEN | Kinetic energy |
| Component.BKEND | Kinetic energy density |
| Component.BKENP | Kinetic energy percentage |
| Component.BSEN | Strain energy |
| Component.BSEND | Strain energy density |
| Component.BSENP | Strain energy percentage |

### Constants for Nodal Data Components

| **Name** | **Description** |
| --- | --- |
| Component.AM | Acceleration magnitude |
| Component.AV | Acceleration vector [AX, AY, AZ] |
| Component.AX | X acceleration |
| Component.AY | Y acceleration |
| Component.AZ | Z acceleration |
| Component.BV | Basic (undeformed) vector [BX, BY, BZ] |
| Component.BX | Basic (undeformed) X coordinate |
| Component.BY | Basic (undeformed) Y coordinate |
| Component.BZ | Basic (undeformed) Z coordinate |
| Component.CV | Current vector [CX, CY, CZ] |
| Component.CX | Current X coordinate |
| Component.CY | Current Y coordinate |
| Component.CZ | Current Z coordinate |
| Component.DM | Displacement magnitude |
| Component.DV | Displacement vector [DX, DY, DZ] |
| Component.DX | X displacement |
| Component.DY | Y displacement |
| Component.DZ | Z displacement |
| Component.RAM | Rotation acceleration magnitude |
| Component.RAV | Rotation acceleration vector [RAX, RAY, RAZ] |
| Component.RAX | X rotation acceleration |
| Component.RAY | Y rotation acceleration |
| Component.RAZ | Z rotation acceleration |
| Component.RDM | Rotation displacement magnitude |
| Component.RDV | Rotation displacement vector [RDX, RDY, RDZ] |
| Component.RDX | X rotation displacement |
| Component.RDY | Y rotation displacement |
| Component.RDZ | Z rotation displacement |
| Component.RVM | Rotation velocity magnitude |
| Component.RVV | Rotation velocity vector [RVX, RVY, RVZ] |
| Component.RVX | X rotation velocity |
| Component.RVY | Y rotation velocity |
| Component.RVZ | Z rotation velocity |
| Component.VM | Velocity magnitude |
| Component.VV | Velocity vector [VX, VY, VZ] |
| Component.VX | X velocity |
| Component.VY | Y velocity |
| Component.VZ | Z velocity |

### Constants for Shell and Solid Data Components

| **Name** | **Description** |
| --- | --- |
| Component.AREA | Area |
| Component.DTDT | dTemp / dTime |
| Component.EDEN | Internal energy density |
| Component.EMASS | Mass |
| Component.ENL | Energy loss (Nastran OP2 results only) |
| Component.ENLD | Energy loss density (Nastran OP2 results only) |
| Component.ENLP | Energy loss percentage (Nastran OP2 results only) |
| Component.HGEN | Hourglass energy |
| Component.KEN | Kinetic energy (Nastran OP2 results only) |
| Component.KEND | Kinetic energy density (Nastran OP2 results only) |
| Component.KENP | Kinetic energy percentage (Nastran OP2 results only) |
| Component.MADD | Added mass |
| Component.RFX | X force resultant |
| Component.RFXY | XY force resultant |
| Component.RFY | Y force resultant |
| Component.RMX | MX moment resultant |
| Component.RMXY | MXY moment resultant |
| Component.RMY | MY moment resultant |
| Component.RQX | XZ shear force resultant |
| Component.RQY | YZ shear force resultant |
| Component.RVOL | Relative volume (solid) |
| Component.SEN | Strain energy (Nastran OP2 results only) |
| Component.SEND | Strain energy density (Nastran OP2 results only) |
| Component.SENP | Strain energy percentage (Nastran OP2 results only) |
| Component.SHX | Extra shell and thick shell data |
| Component.SOX | Extra solid data |
| Component.TBOT | Nodal (shell) bottom surface temperature |
| Component.TEMP | Nodal temperature |
| Component.TFM | Temperature magnitude |
| Component.TFV | Temperature vector [TFX, TFY, TFZ] |
| Component.TFX | X temperature flux |
| Component.TFY | Y temperature flux |
| Component.TFZ | Z temperature flux |
| Component.THK | Thickness |
| Component.TMID | Nodal (shell) middle surface temperature |
| Component.TSTP | Timestep |
| Component.TTOP | Nodal (shell) top surface temperature |
| Component.VOL | Volume (solid) |

### Constants for User defined binary component data type

| **Name** | **Description** |
| --- | --- |
| Component.SCALAR | Scalar data (1 value) |
| Component.TENSOR | Tensor data (6 values) |
| Component.VECTOR | Vector data (3 values) |

### Constants for User defined binary component existing action

| **Name** | **Description** |
| --- | --- |
| Component.RENAME | Renames the name of the component by adding a suffix to make it unique so any existing component of this name (and data) will be left unchanged and the new one will not clash with it |
| Component.REPLACE | Replaces any existing component, replacing it with this definition. This means that any existing data for the user-defined component of this name is deleted and the component is re-initialised |

### Constants for User defined binary component location

| **Name** | **Description** |
| --- | --- |
| Component.IN\_CORE | held in memory |

### Constants for User defined binary component type

| **Name** | **Description** |
| --- | --- |
| Component.BEAM | User-defined beam component |
| Component.NODE | User-defined nodal component |
| Component.OTHER | User-defined other (LSDA) component |
| Component.SOLID\_SHELL\_TSHELL | User-defined solid, shell and thick shell component |

### Constants for user

| **Name** | **Description** |
| --- | --- |
| Component.UBMS | Beam scalar |
| Component.UBMV | Beam vector |
| Component.UNOS | Node scalar |
| Component.UNOV | Node vector |
| Component.USSS | Solid and shell scalar |
| Component.USST | Solid and shell tensor |

## Component properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| componentType (read only) | constant | The type of component stored in the user defined binary component. Either [Component.NODE](d3plot-component-class.md#Component.NODE), [Component.BEAM](d3plot-component-class.md#Component.BEAM), [Component.SOLID_SHELL_TSHELL](d3plot-component-class.md#Component.SOLID_SHELL_TSHELL) or [Component.OTHER](d3plot-component-class.md#Component.OTHER) |
| dataType (read only) | constant | The type of data stored in the user defined binary component. Either [Component.SCALAR](d3plot-component-class.md#Component.SCALAR), [Component.TENSOR](d3plot-component-class.md#Component.TENSOR) or [Component.VECTOR](d3plot-component-class.md#Component.VECTOR) |
| dispose (read only) | boolean | If .ubd files for components will be disposed of (deleted) when a model is closed or D3PLOT exits or not. The default is not to delete files. |
| location (read only) | constant|string | Where the user defined binary component will be written to disk. This can be an absolute or relative pathname. If a relative path is used, this is relative to the Ansys LS-DYNA results files. This is done by giving a pathname beginning with "JOBDIR". For example "JOBDIR/.." refers to the parent directory where the results files are. The default, if location is null, is for .ubd files to be written in the same directory as the Ansys LS-DYNA output files. Alternatively, the data can just be kept in memory and not written to disk by using [Component.IN_CORE](d3plot-component-class.md#Component.IN_CORE). |
| name (read only) | string | The name for the user defined binary component |

| Detailed Description<br>The component class allows to to create, modify and delete user defined binary data components in D3PLOT. The class also gives access to various data component constants that are used in the D3PLOT API. They are defined in the Component class so the global namespace is not polluted.<br>See the documentation below for more details. |
| --- |

| Constructor
new Component(name*[string]*, component*[constant]*, data*[constant]*, options (optional)*[object]*)

Description<br>Creates a new user defined binary data component in D3PLOT |
| --- |

#### Arguments

* name (string)
 
Name for the component

* component (constant)
 
The type of component stored in the user defined binary component. Either [Component.NODE](d3plot-component-class.md#Component.NODE), [Component.BEAM](d3plot-component-class.md#Component.BEAM), [Component.SOLID_SHELL_TSHELL](d3plot-component-class.md#Component.SOLID_SHELL_TSHELL) or [Component.OTHER](d3plot-component-class.md#Component.OTHER)

* data (constant)
 
The type of data stored in the user defined binary component. Either [Component.SCALAR](d3plot-component-class.md#Component.SCALAR), [Component.TENSOR](d3plot-component-class.md#Component.TENSOR) or [Component.VECTOR](d3plot-component-class.md#Component.VECTOR)

* options (optional) (object)

Object containing extra information. Can contain any of: 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| dispose | boolean | If .ubd files for components will be disposed of (deleted) when a model is closed or D3PLOT exits or not. The default is not to delete files. |
| exists | constant | Action to take if a component with this name already exists. Either [Component.RENAME](d3plot-component-class.md#Component.RENAME) or [Component.REPLACE](d3plot-component-class.md#Component.REPLACE) (default) |
| location | constant|string|null | Location to store the .ubd files. See [location](d3plot-component-class.md#location) for details. The default, if location is null, is for .ubd files to be written in the same directory as the Ansys LS-DYNA output files. This default can be changed with the d3plot\*ubd\_file\_location preference. |

| Returns
<br>Model object<br>
Return type
<br>Model |
| --- |

| Example
<br>To create a user defined binary data component in D3PLOT:<br>
```
var ub = new Component("My component", Component.NODE, Component.SCALAR, { dispose: true, exists: Component.RENAME, location: null });
```
 |
| --- |

| Details of functions 
Delete()

Description<br>Deletes the next user defined binary data component.<br>**Do not use the component object after calling this method** |
| --- |

#### Arguments

No arguments

| Returns
<br>Component object<br>
Return type
<br>Component |
| --- |

| Example
<br>To delete component c:<br>
```
c.Delete();
```
 |
| --- |

* * *

| First() [static]
Description<br>Returns the first user defined binary component in D3PLOT (or null if there are no components) |
| --- |

#### Arguments

No arguments

| Returns
<br>Component object<br>
Return type
<br>Component |
| --- |

| Example
<br>To get the first user defined binary component:<br>
```
var c = Component.First();
```
 |
| --- |

* * *

| GetData(item*[Node|Beam|Shell|Solid|Tshell]*, options (optional)*[object]*)

Description<br>Returns the user defined binary data component for an item |
| --- |

#### Arguments

* item (Node|Beam|Shell|Solid|Tshell)
 
The [Node](d3plot-node-class.md), [Beam](d3plot-beam-class.md), [Shell](d3plot-shell-class.md), [Solid](d3plot-solid-class.md) or [Tshell](d3plot-tshell-class.md) the data should be retrieved for

* options (optional) (object)

Object containing extra information. Can contain any of: 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| ip | integer | The integration point to get the data for for shells and thick shells |
| op | integer | The on plan integration point to get the data for for fully integrated shells and thick shells. If omitted the first on plan integration point will be used |

| Returns
<br>The component data<br>
Return type
<br>real|array |
| --- |

| Example
<br>To get the data for solid s, user defined component c:<br>
```
var data = c.GetData(s);
```
 |
| --- |

* * *

| GetFromID(number*[integer]*) [static]
Description<br>Returns the user defined binary component in D3PLOT by ID (or null if the component does not exist) |
| --- |

#### Arguments

* number (integer)
 
number of the component you want the Component object for

| Returns
<br>Component object<br>
Return type
<br>Component |
| --- |

| Example
<br>To get the Component object for user defined binary component number 1:<br>
```
var c = Component.GetFromID(1);
```
 |
| --- |

* * *

| GetFromName(name*[string]*) [static]
Description<br>Returns the user defined binary component in D3PLOT by name (or null if the component does not exist) |
| --- |

#### Arguments

* name (string)
 
name of the component you want the Component object for

| Returns
<br>Component object<br>
Return type
<br>Component |
| --- |

| Example
<br>To get the Component object for user defined binary component named test:<br>
```
var c = Component.GetFromName("test");
```
 |
| --- |

* * *

| Last() [static]
Description<br>Returns the last user defined binary component in D3PLOT (or null if there are no components) |
| --- |

#### Arguments

No arguments

| Returns
<br>Component object<br>
Return type
<br>Component |
| --- |

| Example
<br>To get the last user defined binary component:<br>
```
var c = Component.Last();
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next user defined binary data component (or null if there is not one) |
| --- |

#### Arguments

No arguments

| Returns
<br>Component object<br>
Return type
<br>Component |
| --- |

| Example
<br>To get the component after component c:<br>
```
c = c.Next();
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous user defined binary data component (or null if there is not one) |
| --- |

#### Arguments

No arguments

| Returns
<br>Component object<br>
Return type
<br>Component |
| --- |

| Example
<br>To get the component before component c:<br>
```
c = c.Previous();
```
 |
| --- |

* * *

| PutData(item*[Node|Beam|Shell|Solid|Tshell]*, data*[real|array]*, options (optional)*[object]*)

Description<br>Sets the user defined binary data component for an item |
| --- |

#### Arguments

* item (Node|Beam|Shell|Solid|Tshell)
 
The [Node](d3plot-node-class.md), [Beam](d3plot-beam-class.md), [Shell](d3plot-shell-class.md), [Solid](d3plot-solid-class.md) or [Tshell](d3plot-tshell-class.md) the data should be set for

* data (real|array)
 
The data to set. If the component [data](d3plot-component-class.md#dataType) property is [Component.SCALAR](d3plot-component-class.md#Component.SCALAR) this will be a single value. If the component [data](d3plot-component-class.md#dataType) property is [Component.VECTOR](d3plot-component-class.md#Component.VECTOR) this is an array with length 3. If the component [data](d3plot-component-class.md#dataType) property is [Component.TESNOR](d3plot-component-class.md#Component.TENSOR) this is an array with length 6

* options (optional) (object)

Object containing extra information. Can contain any of: 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| ip | integer | The integration point to set the data for for shells and thick shells |
| op | integer | The on plan integration point to set the data for for fully integrated shells and thick shells |

| Returns
<br>No return value |
| --- |

| Example
<br>To Set the data for solid s, user defined component c to be 1.23:<br>
```
c.PutData(s, 1.23);
```
 |
| --- |

* * *

| Total() [static]
Description<br>Returns the total number of user defined binary components in D3PLOT. |
| --- |

#### Arguments

No arguments

| Returns
<br>Total number of user binary components<br>
Return type
<br>integer |
| --- |

| Example
<br>To get total number of components:<br>
```
var total = Component.Total();
```
 |
| --- |

* * *