# Section class

The Section class gives you access to section cards in PRIMER. [More...](primer-section-class.md#Section_details)

The PRIMER JavaScript API provides many class constants, properties and methods. For Arup to
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

* [BlankAll](primer-section-class.md#Section::BlankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [BlankFlagged](primer-section-class.md#Section::BlankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Create](primer-section-class.md#Section::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [First](primer-section-class.md#Section::First)(Model*[[Model](primer-model-class.md)]*)
* [FirstFreeLabel](primer-section-class.md#Section::FirstFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [FlagAll](primer-section-class.md#Section::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-section-class.md#Section::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-section-class.md#Section::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-section-class.md#Section::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-section-class.md#Section::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-section-class.md#Section::Last)(Model*[[Model](primer-model-class.md)]*)
* [LastFreeLabel](primer-section-class.md#Section::LastFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [NextFreeLabel](primer-section-class.md#Section::NextFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [Pick](primer-section-class.md#Section::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [RenumberAll](primer-section-class.md#Section::RenumberAll)(Model*[[Model](primer-model-class.md)]*, start*[integer]*)
* [RenumberFlagged](primer-section-class.md#Section::RenumberFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*)
* [Select](primer-section-class.md#Section::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-section-class.md#Section::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-section-class.md#Section::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnblankAll](primer-section-class.md#Section::UnblankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnblankFlagged](primer-section-class.md#Section::UnblankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [UnflagAll](primer-section-class.md#Section::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-section-class.md#Section::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-section-class.md#Section::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-section-class.md#Section::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Blank](primer-section-class.md#Section::Blank)()
* [Blanked](primer-section-class.md#Section::Blanked)()
* [Browse](primer-section-class.md#Section::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-section-class.md#Section::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-section-class.md#Section::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-section-class.md#Section::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-section-class.md#Section::Edit)(modal (optional)*[boolean]*)
* [Error](primer-section-class.md#Section::Error)(message*[string]*, details (optional)*[string]*)
* [ExtractColour](primer-section-class.md#Section::ExtractColour)()
* [Flagged](primer-section-class.md#Section::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetBetaData](primer-section-class.md#Section::GetBetaData)(ipt*[integer]*)
* [GetComments](primer-section-class.md#Section::GetComments)()
* [GetLmcData](primer-section-class.md#Section::GetLmcData)(i*[integer]*)
* [GetParameter](primer-section-class.md#Section::GetParameter)(prop*[string]*)
* [GetPointData](primer-section-class.md#Section::GetPointData)(ipt*[integer]*)
* [GetUserData](primer-section-class.md#Section::GetUserData)(ipt*[integer]*)
* [Keyword](primer-section-class.md#Section::Keyword)()
* [KeywordCards](primer-section-class.md#Section::KeywordCards)()
* [Next](primer-section-class.md#Section::Next)()
* [Previous](primer-section-class.md#Section::Previous)()
* [SetBetaData](primer-section-class.md#Section::SetBetaData)(ipt*[integer]*, beta*[real]*)
* [SetFlag](primer-section-class.md#Section::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [SetLmcData](primer-section-class.md#Section::SetLmcData)(ipt*[integer]*, lmc*[real]*)
* [SetPointData](primer-section-class.md#Section::SetPointData)(ipt*[integer]*, nodeid*[integer]*, vecid*[integer]*, area*[real]*)
* [SetUserData](primer-section-class.md#Section::SetUserData)(ipt*[integer]*, xi*[real]*, eta*[real]*, zeta (SOLID) **or**
wgt (SHELL)*[real]*, wgt (SOLID only)*[real]*)
* [Sketch](primer-section-class.md#Section::Sketch)(redraw (optional)*[boolean]*)
* [Unblank](primer-section-class.md#Section::Unblank)()
* [Unsketch](primer-section-class.md#Section::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-section-class.md#Section::ViewParameters)()
* [Warning](primer-section-class.md#Section::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-section-class.md#Section::Xrefs)()
* [toString](primer-section-class.md#Section::toString)()

## Section constants

| **Name** | **Description** |
| --- | --- |
| Section.ALE1D | Section ale1d type |
| Section.ALE2D | Section ale2d type |
| Section.BEAM | Section beam type |
| Section.DISCRETE | Section discrete type |
| Section.IGA\_SHELL | Section IGA shell type |
| Section.IGA\_SOLID | Section IGA solid type |
| Section.POINT\_SOURCE | Section point source type |
| Section.SEATBELT | Section seatbelt type |
| Section.SHELL | Section shell type |
| Section.SOLID | Section solid type |
| Section.SPH | Section sph type |
| Section.TSHELL | Section thick shell type |

## Section properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| aafac | real | ALE advection factor(SHELL, SOLID) |
| aet | integer | Ambient element type (ALE1D, ALE2D, SOLID) |
| afac | real | Smoothing weight factor - Simple average (SHELL, SOLID) |
| ale | logical | If \_ALE option is set. Can be true or false (SHELL, SOLID) |
| aleform | integer | ALE formulation (ALE1D, ALE2D) |
| baselm | integer | Base element type for XFEM (SHELL) |
| bfac | real | Smoothing weight factor - Volume weighting (SHELL, SOLID) |
| cfac | real | Smoothing weight factor - Isoparametric (SHELL, SOLID) |
| cmid | integer | Cohesive material (SHELL, SOLID) |
| cohthk | real | Cohesive thickness (SOLID) |
| colour | [Colour](primer-colour-class.md) | The colour of the section |
| dfac | real | Smoothing weight factor - Equipotential (SHELL, SOLID) |
| domint | integer | Domain integration in XFEM (SHELL) |
| dr | real | PERI normalized horizon size (SOLID) |
| dx | real | Normalized dilation parameter of kernel function in X (SHELL, SOLID) |
| dy | real | Normalized dilation parameter of kernel function in Y (SHELL, SOLID) |
| dz | real | Normalized dilation parameter of kernel function in Z (SOLID) |
| efac | real | Smoothing weight factor - Equilibrium (SHELL) |
| efg | logical | If \_EFG option is set. Can be true or false (SHELL, SOLID) |
| elform | integer | Element formulation (ALE1D, ALE2D, BEAM, IGA\_SHELL, IGA\_SOLID, SHELL, SOLID, TSHELL) |
| end | real | End time for smoothing (SHELL, SOLID) |
| exists (read only) | logical | true if section exists, false if referred to but not defined. |
| failcr | integer | Different failure criteria (SHELL) |
| fs | real | SPG Failure strain if IDAM = 1 (SOLID) |
| icomp | integer | Composite flag (IGA\_SHELL, IGA\_SOLID, SHELL, TSHELL) |
| idam | integer | SPG Option of damage mechanism (SOLID) |
| idila | integer | Normalized dilation parameter definition (SOLID) |
| idim | integer | Domain integration method (SOLID) |
| iebt | integer | Essential boundary condition treatment (SOLID) |
| ihgf | integer | Flag for using hourglass stabilization (SHELL, SOLID) |
| iloc | integer | Coordinate system option (SHELL) |
| include | integer | The [Include](primer-include-class.md) file number that the section is in. |
| ispline | integer | EFG kernel function definition (SHELL, SOLID) |
| itaj | integer | Flag for setting up finite element matrices (SHELL, SOLID) |
| itb | integer | SPG Stabilization flag (SOLID) |
| ithelfm | integer | THERMAL shell formulation (SHELL) |
| iunf | integer | Flag for using nodal fibre vectors (SHELL) |
| kernel | integer | SPG kernel type approximation (SOLID) |
| label | integer or string | [Section](primer-section-class.md) ID (all types) or character label. Also see the [secid](primer-section-class.md#secid) property which is an alternative name for this. |
| lmc | integer | Number of property parameters (SHELL, SOLID) |
| lprint | integer | Debug printout option (SHELL) |
| lscale | real | SPG length scale for displacement regularisation (SOLID) |
| misc | logical | If \_MISC option is set. Can be true or false (SHELL, SOLID) |
| model (read only) | integer | The [Model](primer-model-class.md) number that the section is in. |
| nhsv | integer | Number of history variables (SHELL, SOLID) |
| nip | integer | Number of integration points (IGA\_SHELL, IGA\_SOLID, SHELL, SOLID, TSHELL) |
| nipp | integer | Number of in-plane integration points (SHELL) |
| nxdof | integer | Number of extra degrees of freedom per node (SHELL, SOLID) |
| peri | logical | If \_PERI option is set. Can be true or false (SOLID) |
| propcr | integer | Not used (SHELL) |
| propt | real | Printout option (SHELL, TSHELL) |
| ptype | integer | PERI peridynamics formulation (SOLID) |
| qr | real | Quadrature rule (BEAM, IGA\_SHELL, IGA\_SOLID, SHELL, TSHELL) |
| secid | integer or string | [Section](primer-section-class.md) ID (all types) or character label. Also see the [label](primer-section-class.md#label) property which is an alternative name for this. |
| shrf | real | Shear correction factor (BEAM, IGA\_SHELL, IGA\_SOLID, SHELL, TSHELL) |
| smstep | integer | SPG Interval of timestep to conduction displ regularisation (SOLID) |
| spg | logical | If \_SPG option is set. Can be true or false (SOLID) |
| start | real | Time imposed SPH approximation is activated (SPH) **or**<br>Start time for smoothing (SHELL, SOLID) |
| stretch | real | SPG stretching parameter if IDAM = 1 (SOLID) |
| swtime | real | SPG Time to switch from updated Lagrangian to Eulerian kernel (SOLID) |
| thermal | logical | If \_THERMAL option is set. Can be true or false (SHELL) |
| thick | real | Thickness (ALE1D, SEATBELT) |
| title | string | [Section](primer-section-class.md) title (all types) |
| toldef | real | Deformation tolerance (SOLID) |
| transparency | integer | The transparency of the section (0-100) 0% is opaque, 100% is transparent. |
| type (read only) | constant | Section type. Can be [Section.ALE1D](primer-section-class.md#Section.ALE1D), [Section.ALE2D](primer-section-class.md#Section.ALE2D), [Section.BEAM](primer-section-class.md#Section.BEAM), [Section.DISCRETE](primer-section-class.md#Section.DISCRETE), [Section.IGA_SHELL](primer-section-class.md#Section.IGA_SHELL), [Section.IGA_SOLID](primer-section-class.md#Section.IGA_SOLID), [Section.POINT_SOURCE](primer-section-class.md#Section.POINT_SOURCE), [Section.SEATBELT](primer-section-class.md#Section.SEATBELT), [Section.SHELL](primer-section-class.md#Section.SHELL), [Section.SOLID](primer-section-class.md#Section.SOLID), [Section.SPH](primer-section-class.md#Section.SPH) or [Section.TSHELL](primer-section-class.md#Section.TSHELL) |
| xfem | logical | If \_THERMAL option is set. Can be true or false (SHELL) |

### Properties for BEAM

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| a | real | Cross sectional area |
| aisc | logical | If \_AISC option is set. Can be true or false |
| aisc\_label | string | AISC section label |
| ca | real | Cable area |
| cid | integer | Coordinate system ID for orientation |
| cst | real | Cross section type |
| d1 | real | Input parameter 1 for section type |
| d2 | real | Input parameter 2 for section type |
| d3 | real | Input parameter 3 for section type |
| d4 | real | Input parameter 4 for section type |
| d5 | real | Input parameter 5 for section type |
| d6 | real | Input parameter 6 for section type |
| dofn1 | real | Active degree of freedom at node 1 |
| dofn2 | real | Active degree of freedom at node 2 |
| iner | real | Mass moment of inertia |
| iovpr | integer | Print flag for the elbow ovalization degrees of freedom (elform 14) |
| iprstr | integer | Flag for adding stress due to pressure into the material routine (elform 14) |
| irr | real | Irr |
| iss | real | Iss |
| ist | real | Ist |
| itoff | real | Option to specify torsional behaviour for spotwelds |
| itorm | real | Itorm |
| itt | real | Itt |
| iw | real | Warping constant |
| iwr | real | Warping constant |
| iyr | real | IYR integral |
| izr | real | IZR integral |
| j | real | torsional constant |
| nsloc | real | Location of s reference surface |
| nsm | real | Non structural mass per unit length |
| ntloc | real | Location of t reference surface |
| offset | real | Offset for cable |
| pr | real | Pressure inside elements (elform 14) |
| print | real | Output spot force resultants from spotwelds |
| rampt | real | Ramp up time for dynamic relaxation |
| rrcon | real | r rotational constraint |
| sa | real | Shear area |
| scoor | real | Location of triad for discrete beam |
| srcon | real | s rotational constraint |
| stress | real | Initial stress for dynamic relaxation |
| stype | string | Section type |
| trcon | real | t rotational constraint |
| ts1 | real | s thickness or outer diameter at N1 |
| ts2 | real | s thickness or outer diameter at N2 |
| tt1 | real | t thickness or inner diameter at N1 |
| tt2 | real | t thickness or inner diameter at N2 |
| vol | real | Volume of discrete beam |
| ys | real | s coordinate of shear centre of cross section |
| zs | real | t coordinate of shear centre of cross section |

### Properties for DISCRETE

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| cdl | real | Deflection limit in compression |
| cl | real | Clearance |
| dro | integer | Displacement/rotation option |
| fd | real | Failure deflection |
| kd | real | Dynamic magnification factor |
| tdl | real | Deflection limit in tension |
| v0 | real | Test velocity |

### Properties for IGA\_SHELL

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| irl | integer | Lamina integration rule |
| nloc | real | Location of reference surface |
| t | real | Shell thickness |

### Properties for IGA\_SOLID

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| ir | integer | Integration rule |

### Properties for POINT SOURCE

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| lcidt | integer | Temperature loadcurve ID |
| lcidvel | integer | Inlet flow velocity loadcurve ID |
| lcidvolr | integer | Relative volume loadcurve ID |
| lcmdot1 | integer | Mass flowrate loadcurve for gas 1 |
| lcmdot2 | integer | Mass flowrate loadcurve for gas 2 |
| lcmdot3 | integer | Mass flowrate loadcurve for gas 3 |
| lcmdot4 | integer | Mass flowrate loadcurve for gas 4 |
| lcmdot5 | integer | Mass flowrate loadcurve for gas 5 |
| lcmdot6 | integer | Mass flowrate loadcurve for gas 6 |
| lcmdot7 | integer | Mass flowrate loadcurve for gas 7 |
| lcmdot8 | integer | Mass flowrate loadcurve for gas 8 |
| mixture | logical | If \_MIXTURE option is set. Can be true or false |
| nidlc001 | integer | 1st node ID defining a local coordinate |
| nidlc002 | integer | 2nd node ID defining a local coordinate |
| nidlc003 | integer | 3rd node ID defining a local coordinate |
| points | integer | Number of point sources |

### Properties for SEATBELT

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| area | real | Optional cross sectional area used in contact |

### Properties for SHELL

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| edgset | integer | Edge node set |
| idof | real | Thickness field value |
| marea | real | Non structural mass per unit area |
| nloc | integer | Location of reference surface |
| setyp | integer | 2D solid element type |
| t1 | real | Thickness at [Node](primer-node-class.md) 1 |
| t2 | real | Thickness at [Node](primer-node-class.md) 2 |
| t3 | real | Thickness at [Node](primer-node-class.md) 3 |
| t4 | real | Thickness at [Node](primer-node-class.md) 4 |

### Properties for SOLID

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| cohoff | real | Relative location of cohesive layer (for cohesive solid elements 20 and 22) |
| ds | real | Displacement jump |
| ecut | real | Minimum distance to the node that a crack surface can cut to the edge |
| gaskett | real | Gasket thickness for converting elform 19-22 elements to gasket element |
| ibr | integer | Branching |
| iken | integer | approximation |
| ips | integer | Pressure smoothing/recovery |
| sf | real | Failure strain |
| stime | real | Time to switch from stabilized EFG to standard EFG formulation |

### Properties for SPH

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| cslh | real | Smoothing length constant |
| death | real | Time imposed SPH approximation is stopped |
| ellipse | logical | If \_ELLIPSE option is set (was \_TENSOR pre R8). Can be true or false |
| hmax | real | Max smoothing length scale factor |
| hmin | real | Min smoothing length scale factor |
| hxcslh | real | Constant for smoothing length in X for tensor/ellipse case |
| hxini | real | Initial smoothing length in X for tensor/ellipse case |
| hycslh | real | Constant for smoothing length in Y for tensor/ellipse case |
| hyini | real | Initial smoothing length in Y for tensor/ellipse case |
| hzcslh | real | Constant for smoothing length in Z for tensor/ellipse case |
| hzini | real | Initial smoothing length in Z for tensor/ellipse case |
| iform | integer | SPH element formulation |
| interaction | logical | If \_INTERACTION option is set. Can be true or false |
| sphini | real | Optional initial smoothing length |
| tensor | logical | If \_TENSOR option is set (\_ELLIPSE from R8 onwards). Can be true or false |
| user | logical | If \_USER option is set. Can be true or false |

### Properties for TSHELL

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| tshear | integer | Flag for transverse shear strain or stress distribution |

| Detailed Description<br>The Section class allows you to create, modify, edit and manipulate section cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new Section(Model*[[Model](primer-model-class.md)]*, secid*[integer or string]*, type*[constant]*, title (optional)*[string]*)

Description<br>Create a new [Section](primer-section-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that section will be created in

* secid (integer or string)
 
[Section](primer-section-class.md) number or character label

* type (constant)
 
Section type. Can be [Section.BEAM](primer-section-class.md#Section.BEAM), [Section.DISCRETE](primer-section-class.md#Section.DISCRETE), [Section.IGA_SHELL](primer-section-class.md#Section.IGA_SHELL), [Section.IGA_SOLID](primer-section-class.md#Section.IGA_SOLID), [Section.POINT_SOURCE](primer-section-class.md#Section.POINT_SOURCE), [Section.SEATBELT](primer-section-class.md#Section.SEATBELT), [Section.SHELL](primer-section-class.md#Section.SHELL), [Section.SOLID](primer-section-class.md#Section.SOLID), [Section.SPH](primer-section-class.md#Section.SPH) or [Section.TSHELL](primer-section-class.md#Section.TSHELL)

* title (optional) (string)
 
Title for the section

| Returns
<br>[Section](primer-section-class.md) object<br>
Return type
<br>Section |
| --- |

| Example
<br>To create a new section, type shell, called 'Example' in model m with label 100:<br>
```
var s = new Section(m, 100, Section.SHELL, 'Example');
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a section. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the section

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the section s:<br>
```
s.AssociateComment(c);
```
 |
| --- |

* * *

| Blank()

Description<br>Blanks the section |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To blank section s:<br>
```
s.Blank();
```
 |
| --- |

* * *

| BlankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the sections in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all sections will be blanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the sections in model m:<br>
```
Section.BlankAll(m);
```
 |
| --- |

* * *

| BlankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the flagged sections in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged sections will be blanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the sections that you want to blank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the sections in model m flagged with f:<br>
```
Section.BlankFlagged(m, f);
```
 |
| --- |

* * *

| Blanked()

Description<br>Checks if the section is blanked or not. |
| --- |

#### Arguments

No arguments

| Returns
<br>true if blanked, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if section s is blanked:<br>
```
if (s.Blanked() ) do_something...
```
 |
| --- |

* * *

| Browse(modal (optional)*[boolean]*)

Description<br>Starts an edit panel in Browse mode. |
| --- |

#### Arguments

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>no return value |
| --- |

| Example
<br>To Browse section s:<br>
```
s.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the section. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the section

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for section s:<br>
```
s.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the section. The target include of the copied section can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>Section object<br>
Return type
<br>Section |
| --- |

| Example
<br>To copy section s into section z:<br>
```
var z = s.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a section |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the section will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>Section object (or null if not made).<br>
Return type
<br>Section |
| --- |

| Example
<br>To start creating a section in model m:<br>
```
var s = Section.Create(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a section. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the section

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the section s:<br>
```
s.DetachComment(c);
```
 |
| --- |

* * *

| Edit(modal (optional)*[boolean]*)

Description<br>Starts an interactive editing panel. |
| --- |

#### Arguments

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>no return value |
| --- |

| Example
<br>To Edit section s:<br>
```
s.Edit();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for section. For more details on checking see the [Check](primer-check-class.md) class. |
| --- |

#### Arguments

* message (string)
 
The error message to give

* details (optional) (string)
 
An optional detailed error message

| Returns
<br>No return value |
| --- |

| Example
<br>To add an error message "My custom error" for section s:<br>
```
s.Error("My custom error");
```
 |
| --- |

* * *

| ExtractColour()

Description<br>Extracts the **actual** colour used for section.<br> By default in PRIMER many entities such as elements get their colour automatically from the part that they are in. PRIMER cycles through 13 default colours based on the label of the entity. In this case the section [colour](primer-section-class.md#colour) property will return the value [Colour.PART](primer-colour-class.md#Colour.PART) instead of the actual colour. This method will return the actual colour which is used for drawing the section. |
| --- |

#### Arguments

No arguments

| Returns
<br>colour value (integer)<br>
Return type
<br>Number |
| --- |

| Example
<br>To return the colour used for drawing section s:<br>
```
var colour = s.ExtractColour();
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first section in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first section in

| Returns
<br>Section object (or null if there are no sections in the model).<br>
Return type
<br>Section |
| --- |

| Example
<br>To get the first section in model m:<br>
```
var s = Section.First(m);
```
 |
| --- |

* * *

| FirstFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the first free section label in the model. Also see [Section.LastFreeLabel()](primer-section-class.md#Section::LastFreeLabel), [Section.NextFreeLabel()](primer-section-class.md#Section::NextFreeLabel) and [Model.FirstFreeItemLabel()](primer-model-class.md#Model::FirstFreeItemLabel). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first free section label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *First free in layer* in editing panels). If omitted the whole model will be used (Equivalent to *First free* in editing panels).

| Returns
<br>Section label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the first free section label in model m:<br>
```
var label = Section.FirstFreeLabel(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the sections in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all sections will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the sections

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the sections with flag f in model m:<br>
```
Section.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the section is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the section

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if section s has flag f set on it:<br>
```
if (s.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each section in the model.<br> **Note that ForEach has been designed to make looping over sections as fast as possible and so has some limitations. Firstly, a single temporary Section object is created and on each function call it is updated with the current section data. This means that you should not try to store the Section object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new sections inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all sections are in

* func (function)
 
Function to call for each section

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the sections in model m:<br>
```
Section.ForEach(m, test);
function test(s)
{
// s is Section object
}
```
<br><br>To call function test for all of the sections in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
Section.ForEach(m, test, data);
function test(s, extra)
{
// s is Section object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Section objects or properties for all of the sections in a model in PRIMER. If the optional property argument is not given then an array of Section objects is returned. If the property argument is given, that property value for each section is returned in the array instead of a Section object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get sections from

* property (optional) (string)
 
Name for property to get for all sections in the model

| Returns
<br>Array of Section objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Section objects for all of the sections in model m:<br>
```
var a = Section.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each section in model m:<br>
```
var a = Section.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetBetaData(ipt*[integer]*)

Description<br>Returns the beta angle data for an integration point in \*SECTION\_IGA\_SHELL, \*SECTION\_SHELL or \*SECTION\_TSHELL. |
| --- |

#### Arguments

* ipt (integer)
 
The integration point you want the data for. **Note that integration points start at 0, not 1**.

| Returns
<br>real<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the beta angle for the 3rd integration point for section shell s:<br>
```
if (s.icomp && s.nip >= 3)
{
    var beta = s.GetBetaData(2);
}
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a section. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the section s:<br>
```
var comm_array = s.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Section objects for all of the flagged sections in a model in PRIMER If the optional property argument is not given then an array of Section objects is returned. If the property argument is given, then that property value for each section is returned in the array instead of a Section object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get sections from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the sections that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged sections in the model

| Returns
<br>Array of Section objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Section objects for all of the sections in model m flagged with f:<br>
```
var s = Section.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the sections in model m flagged with f:<br>
```
var a = Section.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the Section object for a section ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the section in

* number (integer)
 
number of the section you want the Section object for

| Returns
<br>Section object (or null if section does not exist).<br>
Return type
<br>Section |
| --- |

| Example
<br>To get the Section object for section 100 in model m<br>
```
var s = Section.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetLmcData(i*[integer]*)

Description<br>Returns the LMC property parameter for \*SECTION\_SHELL or \*SECTION\_SOLID. |
| --- |

#### Arguments

* i (integer)
 
The point you want the parameter for. **Note that points start at 0, not 1**.

| Returns
<br>real<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the 3rd LMC parameter for section shell s:<br>
```
if (s.lmc >= 3)
{
    var p = s.GetLmcData(2);
}
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a Section property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [Section.ViewParameters()](primer-section-class.md#Section::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
section property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if Section property s.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (s.GetParameter(s.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if Section property s.example is a parameter by using the GetParameter method:<br>
```
if (s.ViewParameters().GetParameter(s.example) ) do_something...
```
 |
| --- |

* * *

| GetPointData(ipt*[integer]*)

Description<br>Returns the point data for a single point in \*SECTION\_POINT\_SOURCE. |
| --- |

#### Arguments

* ipt (integer)
 
The point you want the data for. **Note that integration points start at 0, not 1**.

| Returns
<br>An array of numbers containing the node id, vector id and orifice area.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the data for the 3rd point for section point source s:<br>
```
if (s.points >= 3)
{
    var pt_data = s.GetPointData(3);
}
```
 |
| --- |

* * *

| GetUserData(ipt*[integer]*)

Description<br>Returns the user defined data for an integration point in \*SECTION\_SHELL and \*SECTION\_SOLID. |
| --- |

#### Arguments

* ipt (integer)
 
The integration point you want the data for. **Note that integration points start at 0, not 1**.

| Returns
<br>An array containing the data (XI, ETA, WGT for \*SECTION\_SHELL, XI, ETA, ZETA, WGT for \*SECTION\_SOLID).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the data for the 3rd integration point for section shell s:<br>
```
if (s.nipp >= 3)
{
    var user_data = s.GetUserData(2);
}
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this section (\*SECT, \*SECT\_SCALAR or \*SECT\_SCALAR\_VALUE). **Note that a carriage return is not added**. See also [Section.KeywordCards()](primer-section-class.md#Section::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for section s:<br>
```
var key = s.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the section. **Note that a carriage return is not added**. See also [Section.Keyword()](primer-section-class.md#Section::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for section s:<br>
```
var cards = n.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last section in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last section in

| Returns
<br>Section object (or null if there are no sections in the model).<br>
Return type
<br>Section |
| --- |

| Example
<br>To get the last section in model m:<br>
```
var s = Section.Last(m);
```
 |
| --- |

* * *

| LastFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the last free section label in the model. Also see [Section.FirstFreeLabel()](primer-section-class.md#Section::FirstFreeLabel), [Section.NextFreeLabel()](primer-section-class.md#Section::NextFreeLabel) and see [Model.LastFreeItemLabel()](primer-model-class.md#Model::LastFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last free section label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest free in layer* in editing panels). If omitted the whole model will be used.

| Returns
<br>Section label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the last free section label in model m:<br>
```
var label = Section.LastFreeLabel(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next section in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Section object (or null if there are no more sections in the model).<br>
Return type
<br>Section |
| --- |

| Example
<br>To get the section in model m after section s:<br>
```
var s = s.Next();
```
 |
| --- |

* * *

| NextFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the next free (highest+1) section label in the model. Also see [Section.FirstFreeLabel()](primer-section-class.md#Section::FirstFreeLabel), [Section.LastFreeLabel()](primer-section-class.md#Section::LastFreeLabel) and [Model.NextFreeItemLabel()](primer-model-class.md#Model::NextFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get next free section label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest+1 in layer* in editing panels). If omitted the whole model will be used (Equivalent to *Highest+1* in editing panels).

| Returns
<br>Section label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the next free section label in model m:<br>
```
var label = Section.NextFreeLabel(m);
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a section. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only sections from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only sections that are flagged with *limit* can be selected. If omitted, or null, any sections from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[Section](primer-section-class.md) object (or null if not picked)<br>
Return type
<br>Section |
| --- |

| Example
<br>To pick a section from model m giving the prompt 'Pick section from screen':<br>
```
var s = Section.Pick('Pick section from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous section in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Section object (or null if there are no more sections in the model).<br>
Return type
<br>Section |
| --- |

| Example
<br>To get the section in model m before section s:<br>
```
var s = s.Previous();
```
 |
| --- |

* * *

| RenumberAll(Model*[[Model](primer-model-class.md)]*, start*[integer]*) [static]
Description<br>Renumbers all of the sections in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all sections will be renumbered in

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the sections in model m, from 1000000:<br>
```
Section.RenumberAll(m, 1000000);
```
 |
| --- |

* * *

| RenumberFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*) [static]
Description<br>Renumbers all of the flagged sections in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged sections will be renumbered in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the sections that you want to renumber

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the sections in model m flagged with f, from 1000000:<br>
```
Section.RenumberFlagged(m, f, 1000000);
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select sections using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting sections

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only sections from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only sections that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any sections can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of sections selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select sections from model m, flagging those selected with flag f, giving the prompt 'Select sections':<br>
```
Section.Select(f, 'Select sections', m);
```
<br><br>To select sections, flagging those selected with flag f but limiting selection to sections flagged with flag l, giving the prompt 'Select sections':<br>
```
Section.Select(f, 'Select sections', l);
```
 |
| --- |

* * *

| SetBetaData(ipt*[integer]*, beta*[real]*)

Description<br>Sets the beta angle for an integration point in \*SECTION\_IGA\_SHELL, \*SECTION\_SHELL or \*SECTION\_TSHELL. |
| --- |

#### Arguments

* ipt (integer)
 
The integration point you want to set the data for. **Note that integration points start at 0, not 1**.

* beta (real)
 
Beta angle for the integration point.

| Returns
<br>No return value. |
| --- |

| Example
<br>To set the beta angle for the 3rd integration point to 45, for section s:<br>
```
s.SetBetaData(2, 45);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the section. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the section

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for section s:<br>
```
s.SetFlag(f);
```
 |
| --- |

* * *

| SetLmcData(ipt*[integer]*, lmc*[real]*)

Description<br>Sets the lmc parameter for a point in \*SECTION\_SHELL or \*SECTION\_SOLID. |
| --- |

#### Arguments

* ipt (integer)
 
The point you want to set the data for. **Note that points start at 0, not 1**.

* lmc (real)
 
Lmc parameter for the point.

| Returns
<br>No return value. |
| --- |

| Example
<br>To set the 3rd lmc point to 0.1, for section s:<br>
```
s.SetLmcData(2, 0.1);
```
 |
| --- |

* * *

| SetPointData(ipt*[integer]*, nodeid*[integer]*, vecid*[integer]*, area*[real]*)

Description<br>Sets the data for a single point in \*SECTION\_POINT\_SOURCE. |
| --- |

#### Arguments

* ipt (integer)
 
The point you want to set the data for. **Note that integration points start at 0, not 1**.

* nodeid (integer)
 
Node ID for the point.

* vecid (integer)
 
Vector ID for the point.

* area (real)
 
Orifice area for the point.

| Returns
<br>No return value. |
| --- |

| Example
<br>To set the data for the 3rd point to node 1, vector 10 and area 0.2, for section s:<br>
```
s.SetPointData(2, 1, 10, 0.2);
```
 |
| --- |

* * *

| SetUserData(ipt*[integer]*, xi*[real]*, eta*[real]*, zeta (SOLID) **or**<br>wgt (SHELL)*[real]*, wgt (SOLID only)*[real]*)

Description<br>Sets the user defined data for an integration point in \*SECTION\_SHELL and \*SECTION\_SOLID. |
| --- |

#### Arguments

* ipt (integer)
 
The integration point you want to set the data for. **Note that integration points start at 0, not 1**.

* xi (real)
 
First isoparametric coordinate.

* eta (real)
 
Second isoparametric coordinate.

* zeta (SOLID) **or**
wgt (SHELL) (real)
 
Second isoparametric coordinate (SOLID) **or**
Isoparametric weight (SHELL)

* wgt (SOLID only) (real)
 
Isoparametric weight (SOLID)

| Returns
<br>No return value. |
| --- |

| Example
<br>To set the user data for the 3rd integration point to xi 0.5, eta 0.5, zeta -0.5, wgt 0.125, for section solid s:<br>
```
s.SetUserData(2, 0.5, 0.5, -0.5, 0.125);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the section. The section will be sketched until you either call [Section.Unsketch()](primer-section-class.md#Section::Unsketch), [Section.UnsketchAll()](primer-section-class.md#Section::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the section is sketched. If omitted redraw is true. If you want to sketch several sections and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch section s:<br>
```
s.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged sections in the model. The sections will be sketched until you either call [Section.Unsketch()](primer-section-class.md#Section::Unsketch), [Section.UnsketchFlagged()](primer-section-class.md#Section::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged sections will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the sections that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the sections are sketched. If omitted redraw is true. If you want to sketch flagged sections several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all sections flagged with flag in model m:<br>
```
Section.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of sections in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing sections should be counted. If false or omitted
referenced but undefined sections will also be included in the total.

| Returns
<br>number of sections<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of sections in model m:<br>
```
var total = Section.Total(m);
```
 |
| --- |

* * *

| Unblank()

Description<br>Unblanks the section |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank section s:<br>
```
s.Unblank();
```
 |
| --- |

* * *

| UnblankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the sections in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all sections will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the sections in model m:<br>
```
Section.UnblankAll(m);
```
 |
| --- |

* * *

| UnblankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the flagged sections in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the flagged sections will be unblanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the sections that you want to unblank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the sections in model m flagged with f:<br>
```
Section.UnblankFlagged(m, f);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the sections in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all sections will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the sections

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the sections in model m:<br>
```
Section.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the section. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the section is unsketched. If omitted redraw is true. If you want to unsketch several sections and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch section s:<br>
```
s.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all sections. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all sections will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the sections are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all sections in model m:<br>
```
Section.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged sections in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all sections will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the sections that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the sections are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all sections flagged with flag in model m:<br>
```
Section.UnsketchAll(m, flag);
```
 |
| --- |

* * *

| ViewParameters()

Description<br>Object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. This function temporarily changes the behaviour so that if a property is a parameter the parameter name is returned instead. This can be used with 'method chaining' (see the example below) to make sure a property argument is correct. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Section](primer-section-class.md) object.<br>
Return type
<br>Section |
| --- |

| Example
<br>To check if Section property s.example is a parameter by using the [Section.GetParameter()](primer-section-class.md#Section::GetParameter) method:<br>
```
if (s.ViewParameters().GetParameter(s.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for section. For more details on checking see the [Check](primer-check-class.md) class. |
| --- |

#### Arguments

* message (string)
 
The warning message to give

* details (optional) (string)
 
An optional detailed warning message

| Returns
<br>No return value |
| --- |

| Example
<br>To add a warning message "My custom warning" for section s:<br>
```
s.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this section. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for section s:<br>
```
var xrefs = s.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the section data in keyword format. Note that this contains the keyword header and the keyword cards. See also [Section.Keyword()](primer-section-class.md#Section::Keyword) and [Section.KeywordCards()](primer-section-class.md#Section::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for section s in keyword format<br>
```
var str = s.toString();
```
 |
| --- |

* * *