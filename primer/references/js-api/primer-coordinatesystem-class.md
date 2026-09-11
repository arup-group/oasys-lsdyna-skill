# CoordinateSystem (Csys) class

The CoordinateSystem class gives you access to define coordinate cards in PRIMER. [More...](primer-coordinatesystem-class.md#CoordinateSystem_details)

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

* [BlankAll](primer-coordinatesystem-class.md#CoordinateSystem::BlankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [BlankFlagged](primer-coordinatesystem-class.md#CoordinateSystem::BlankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Create](primer-coordinatesystem-class.md#CoordinateSystem::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [First](primer-coordinatesystem-class.md#CoordinateSystem::First)(Model*[[Model](primer-model-class.md)]*)
* [FirstFreeLabel](primer-coordinatesystem-class.md#CoordinateSystem::FirstFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [FlagAll](primer-coordinatesystem-class.md#CoordinateSystem::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-coordinatesystem-class.md#CoordinateSystem::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-coordinatesystem-class.md#CoordinateSystem::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-coordinatesystem-class.md#CoordinateSystem::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-coordinatesystem-class.md#CoordinateSystem::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-coordinatesystem-class.md#CoordinateSystem::Last)(Model*[[Model](primer-model-class.md)]*)
* [LastFreeLabel](primer-coordinatesystem-class.md#CoordinateSystem::LastFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [NextFreeLabel](primer-coordinatesystem-class.md#CoordinateSystem::NextFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [Pick](primer-coordinatesystem-class.md#CoordinateSystem::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [RenumberAll](primer-coordinatesystem-class.md#CoordinateSystem::RenumberAll)(Model*[[Model](primer-model-class.md)]*, start*[integer]*)
* [RenumberFlagged](primer-coordinatesystem-class.md#CoordinateSystem::RenumberFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*)
* [Select](primer-coordinatesystem-class.md#CoordinateSystem::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-coordinatesystem-class.md#CoordinateSystem::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-coordinatesystem-class.md#CoordinateSystem::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnblankAll](primer-coordinatesystem-class.md#CoordinateSystem::UnblankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnblankFlagged](primer-coordinatesystem-class.md#CoordinateSystem::UnblankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [UnflagAll](primer-coordinatesystem-class.md#CoordinateSystem::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-coordinatesystem-class.md#CoordinateSystem::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-coordinatesystem-class.md#CoordinateSystem::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-coordinatesystem-class.md#CoordinateSystem::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Blank](primer-coordinatesystem-class.md#CoordinateSystem::Blank)()
* [Blanked](primer-coordinatesystem-class.md#CoordinateSystem::Blanked)()
* [Browse](primer-coordinatesystem-class.md#CoordinateSystem::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-coordinatesystem-class.md#CoordinateSystem::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-coordinatesystem-class.md#CoordinateSystem::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-coordinatesystem-class.md#CoordinateSystem::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-coordinatesystem-class.md#CoordinateSystem::Edit)(modal (optional)*[boolean]*)
* [Error](primer-coordinatesystem-class.md#CoordinateSystem::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-coordinatesystem-class.md#CoordinateSystem::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-coordinatesystem-class.md#CoordinateSystem::GetComments)()
* [GetParameter](primer-coordinatesystem-class.md#CoordinateSystem::GetParameter)(prop*[string]*)
* [Keyword](primer-coordinatesystem-class.md#CoordinateSystem::Keyword)()
* [KeywordCards](primer-coordinatesystem-class.md#CoordinateSystem::KeywordCards)()
* [Next](primer-coordinatesystem-class.md#CoordinateSystem::Next)()
* [Previous](primer-coordinatesystem-class.md#CoordinateSystem::Previous)()
* [SetFlag](primer-coordinatesystem-class.md#CoordinateSystem::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Sketch](primer-coordinatesystem-class.md#CoordinateSystem::Sketch)(redraw (optional)*[boolean]*)
* [Unblank](primer-coordinatesystem-class.md#CoordinateSystem::Unblank)()
* [Unsketch](primer-coordinatesystem-class.md#CoordinateSystem::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-coordinatesystem-class.md#CoordinateSystem::ViewParameters)()
* [Warning](primer-coordinatesystem-class.md#CoordinateSystem::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-coordinatesystem-class.md#CoordinateSystem::Xrefs)()
* [toString](primer-coordinatesystem-class.md#CoordinateSystem::toString)()

## CoordinateSystem constants

| **Name** | **Description** |
| --- | --- |
| CoordinateSystem.NODES | Csys is \*DEFINE\_COORDINATE\_NODES. |
| CoordinateSystem.SYSTEM | Csys is \*DEFINE\_COORDINATE\_SYSTEM. |
| CoordinateSystem.VECTOR | Csys is \*DEFINE\_COORDINATE\_VECTOR. |

## CoordinateSystem properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| cid | integer | [CoordinateSystem](primer-coordinatesystem-class.md) number. Also see the [label](primer-coordinatesystem-class.md#label) number. |
| cidl | integer | Optional local coordinate system to define the points in |
| dir | int | Axis defined by N1N2 |
| exists (read only) | logical | true if coordinate system exists, false if referred to but not defined. |
| flag | logical | Flag for updating local system each timestep |
| heading | string | [CoordinateSystem](primer-coordinatesystem-class.md) heading |
| include | integer | The [Include](primer-include-class.md) file number that the coordinate system is in. |
| label | integer | [CoordinateSystem](primer-coordinatesystem-class.md) number. Also see the [cid](primer-coordinatesystem-class.md#cid) property which is an alternative name for this. |
| lx | real | X-coordinate of point on local X-axis |
| ly | real | Y-coordinate of point on local X-axis |
| lz | real | Z-coordinate of point on local X-axis |
| model (read only) | integer | The [Model](primer-model-class.md) number that the coordinate system is in. |
| n1 | int | Node located at local origin |
| n2 | int | Node located along local (dir) axis |
| n3 | int | Node located in local plane determined by (dir) |
| nid | integer | Optional node id for rotation |
| option | constant | CoordinateSystem type (Can be [CoordinateSystem.NODES](primer-coordinatesystem-class.md#CoordinateSystem.NODES), [CoordinateSystem.SYSTEM](primer-coordinatesystem-class.md#CoordinateSystem.SYSTEM) or [CoordinateSystem.VECTOR](primer-coordinatesystem-class.md#CoordinateSystem.VECTOR)). |
| ox | real | X-coordinate of origin |
| oy | real | Y-coordinate of origin |
| oz | real | Z-coordinate of origin |
| px | real | X-coordinate of point in local X-Y plane |
| py | real | Y-coordinate of point in local X-Y plane |
| pz | real | Z-coordinate of point in local X-Y plane |
| vx | real | X-coordinate of local X-Y vector |
| vy | real | Y-coordinate of local X-Y vector |
| vz | real | Z-coordinate of local X-Y vector |
| xx | real | X-coordinate on local X-axis |
| xy | real | Y-coordinate on local X-axis |
| xz | real | Z-coordinate on local X-axis |

| Detailed Description<br>The CoordinateSystem class allows you to create, modify, edit and manipulate csys cards.<br>See the documentation below for more details.<br>
<br>For convenience "Csys" can also be used as the class name instead of "CoordinateSystem". |
| --- |

| Constructor
new CoordinateSystem(Model*[[Model](primer-model-class.md)]*, details*[object]*)

Description<br>Create a new [CoordinateSystem](primer-coordinatesystem-class.md) object for \*DEFINE\_COORDINATE\_NODES. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that csys will be created in

* details (object)

Details for creating the [CoordinateSystem](primer-coordinatesystem-class.md) 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| cid | integer | Label of [CoordinateSystem](primer-coordinatesystem-class.md) |
| cl (optional) | array | Array of coordinates of point on local X-axis [[lx](primer-coordinatesystem-class.md#lx), [ly](primer-coordinatesystem-class.md#ly), [lz](primer-coordinatesystem-class.md#lz)] (for option CoordinateSystem.SYSTEM) |
| co (optional) | array | Array of coordinates of origin [[ox](primer-coordinatesystem-class.md#ox), [oy](primer-coordinatesystem-class.md#oy), [oz](primer-coordinatesystem-class.md#oz)] (for option CoordinateSystem.SYSTEM) |
| cp (optional) | array | Array of coordinates of point in local X-Y plane [[px](primer-coordinatesystem-class.md#px), [py](primer-coordinatesystem-class.md#py), [pz](primer-coordinatesystem-class.md#pz)] (for option CoordinateSystem.SYSTEM) |
| cv (optional) | array | Array of coordinates of local X-Y vector [[vx](primer-coordinatesystem-class.md#vx), [vy](primer-coordinatesystem-class.md#vy), [vz](primer-coordinatesystem-class.md#vz)] (for option CoordinateSystem.VECTOR) |
| cx (optional) | array | Array of coordinates on local X-axis [[xx](primer-coordinatesystem-class.md#xx), [xy](primer-coordinatesystem-class.md#xy), [xz](primer-coordinatesystem-class.md#xz)] (for option CoordinateSystem.VECTOR) |
| dir (optional) | integer | Axis defined by N1N2 (for option CoordinateSystem.NODES) |
| flag (optional) | boolean | Flag for local system update for each time step (for option CoordinateSystem.NODES) |
| heading (optional) | string | Title for the coordinate system |
| nid (optional) | integer | Optional [Node](primer-node-class.md) ID for rotation (for option CoordinateSystem.VECTOR) |
| nodes (optional) | array | Array of [Node](primer-node-class.md) IDs [[n1](primer-coordinatesystem-class.md#n1), [n2](primer-coordinatesystem-class.md#n2), [n3](primer-coordinatesystem-class.md#n3)] for the coordinate system (for option CoordinateSystem.NODES) |
| option | constant | CoordinateSystem type (can be [CoordinateSystem.NODES](primer-coordinatesystem-class.md#CoordinateSystem.NODES), [CoordinateSystem.SYSTEM](primer-coordinatesystem-class.md#CoordinateSystem.SYSTEM) or [CoordinateSystem.VECTOR](primer-coordinatesystem-class.md#CoordinateSystem.VECTOR)) |

| Returns
<br>[CoordinateSystem](primer-coordinatesystem-class.md) object<br>
Return type
<br>CoordinateSystem |
| --- |

| Example
<br>To create a new Csys of type Nodes in model m with label 200 and title "Test csys 1" defined by nodes 1, 2, 3 with where N1N2 defines local Y-axis; local system update flag is off<br>
```
var c = new CoordinateSystem(m, {option: CoordinateSystem.NODES, cid: 200, nodes: [1, 2, 3], flag: 0, dir: 2, heading: "Test csys nodes"});
```
<br>To create a new Csys of type System in model m with label 300 and title "Test csys 2" with origin at (10, 10, 0), point on local X-axis at (20, 20, 0) and point in X-Y plane at (10, 20, 0)<br>
```
var c = new CoordinateSystem(m, {option: CoordinateSystem.SYSTEM, cid: 300, co: [10, 10, 0], cl: [20, 20, 0], cp: [10, 20, 0], heading: "Test csys system"});
```
<br>To create a new Csys of type Vector in model m with label 400 with point on local X-axis at (50, 50, 0) and local XY vector being (-10, -20, 0) that can rotate with node 10003<br>
```
var c = new CoordinateSystem(m, {option: CoordinateSystem.VECTOR, cid: 400, cx: [50, 50, 0], cv: [10, -20, 0], nid: 10003, heading: "Test csys vector"});
```
 |
| --- |

| new CoordinateSystem(Model*[[Model](primer-model-class.md)]*, option*[constant]*, cid*[integer]*, n1*[integer]*, n2*[integer]*, n3*[integer]*, flag*[boolean]*, dir*[integer]*, heading (optional)*[string]*) [deprecated]
<br>This function is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>
Description<br>Create a new [CoordinateSystem](primer-coordinatesystem-class.md) object for \*DEFINE\_COORDINATE\_NODES. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that csys will be created in

* option (constant)
 
Must be CoordinateSystem.NODES

* cid (integer)
 
[CoordinateSystem](primer-coordinatesystem-class.md) number

* n1 (integer)
 
Node located at origin

* n2 (integer)
 
Node located along (DIR) axis

* n3 (integer)
 
Node located in plane defined by (DIR)

* flag (boolean)
 
Flag for local system update each time step

* dir (integer)
 
Axis defined by N1N2

* heading (optional) (string)
 
Title for the csys

| Returns
<br>[CoordinateSystem](primer-coordinatesystem-class.md) object<br>
Return type
<br>CoordinateSystem |
| --- |

| Example
<br>To create a new Csys of type Nodes in model m with label 200 and title "Test csys 1" defined by nodes 1, 2, 3 with where N1N2 defines local Y-axis; local system update flag is off<br>
```
var c = new CoordinateSystem(m, CoordinateSystem.NODES, 200, 1, 2, 3, 0, 2, "Test csys");
```
 |
| --- |

| new CoordinateSystem(Model*[[Model](primer-model-class.md)]*, option*[constant]*, cid*[integer]*, ox*[real]*, oy*[real]*, oz*[real]*, lx*[real]*, ly*[real]*, lz*[real]*, px*[real]*, py*[real]*, pz*[real]*, heading (optional)*[string]*) [deprecated]
<br>This function is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>
Description<br>Create a new [CoordinateSystem](primer-coordinatesystem-class.md) object for \*DEFINE\_COORDINATE\_SYSTEM. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that csys will be created in

* option (constant)
 
Must be CoordinateSystem.SYSTEM

* cid (integer)
 
[CoordinateSystem](primer-coordinatesystem-class.md) number

* ox (real)
 
X-coordinate of origin

* oy (real)
 
Y-coordinate of origin

* oz (real)
 
Z-coordinate of origin

* lx (real)
 
X-coordinate of point on local X-axis

* ly (real)
 
Y-coordinate of point on local X-axis

* lz (real)
 
Z-coordinate of point on local X-axis

* px (real)
 
X-coordinate of point in local X-Y plane

* py (real)
 
Y-coordinate of point in local X-Y plane

* pz (real)
 
Z-coordinate of point in local X-Y plane

* heading (optional) (string)
 
Title for the csys

| Returns
<br>No return value |
| --- |

| Example
<br>To create a new Csys of type System in model m with label 300 and title "Test csys 2" with origin at (10, 10, 0), point on local X-axis at (20, 20, 0) and point on X-y at (10, 20, 0)<br>
```
var c = new CoordinateSystem(m, CoordinateSystem.SYSTEM, 300, 10, 10, 0, 20, 20, 0, 10, 20, 0, "Test csys");
```
 |
| --- |

| new CoordinateSystem(Model*[[Model](primer-model-class.md)]*, option*[constant]*, cid*[integer]*, xx*[real]*, xy*[real]*, xz*[real]*, vx*[real]*, vy*[real]*, vz*[real]*, nid (optional)*[integer]*, heading (optional)*[string]*) [deprecated]
<br>This function is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>
Description<br>Create a new [CoordinateSystem](primer-coordinatesystem-class.md) object for \*DEFINE\_COORDINATE\_VECTOR. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that csys will be created in

* option (constant)
 
Must be CoordinateSystem.VECTOR

* cid (integer)
 
[CoordinateSystem](primer-coordinatesystem-class.md) number

* xx (real)
 
X-coordinate on local X-axis

* xy (real)
 
Y-coordinate on local X-axis

* xz (real)
 
Z-coordinate on local X-axis

* vx (real)
 
X-coordinate of local X-Y vector

* vy (real)
 
Y-coordinate of local X-Y vector

* vz (real)
 
Z-coordinate of local X-Z vector

* nid (optional) (integer)
 
Optional node id for rotation

* heading (optional) (string)
 
Title for the csys

| Returns
<br>No return value |
| --- |

| Example
<br>To create a new Csys of type Vector in model m with label 400 with point on local X-axis at (50, 50, 0) and local XY being (-10, -20, 0) that can rotate with node 10003<br>
```
var c = new CoordinateSystem(m, CoordinateSystem.VECTOR, 400, 50, 50, 0, 10, -20 , 0, 10003);
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a coordinate system. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the coordinate system

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the coordinate system c:<br>
```
c.AssociateComment(c);
```
 |
| --- |

* * *

| Blank()

Description<br>Blanks the coordinate system |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To blank coordinate system c:<br>
```
c.Blank();
```
 |
| --- |

* * *

| BlankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the coordinate systems in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all coordinate systems will be blanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the coordinate systems in model m:<br>
```
CoordinateSystem.BlankAll(m);
```
 |
| --- |

* * *

| BlankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the flagged coordinate systems in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged coordinate systems will be blanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the coordinate systems that you want to blank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the coordinate systems in model m flagged with f:<br>
```
CoordinateSystem.BlankFlagged(m, f);
```
 |
| --- |

* * *

| Blanked()

Description<br>Checks if the coordinate system is blanked or not. |
| --- |

#### Arguments

No arguments

| Returns
<br>true if blanked, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if coordinate system c is blanked:<br>
```
if (c.Blanked() ) do_something...
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
<br>To Browse coordinate system c:<br>
```
c.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the coordinate system. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the coordinate system

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for coordinate system c:<br>
```
c.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the coordinate system. The target include of the copied coordinate system can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>CoordinateSystem object<br>
Return type
<br>CoordinateSystem |
| --- |

| Example
<br>To copy coordinate system c into coordinate system z:<br>
```
var z = c.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a coordinate system |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the coordinate system will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>CoordinateSystem object (or null if not made).<br>
Return type
<br>CoordinateSystem |
| --- |

| Example
<br>To start creating a coordinate system in model m:<br>
```
var c = CoordinateSystem.Create(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a coordinate system. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the coordinate system

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the coordinate system c:<br>
```
c.DetachComment(c);
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
<br>To Edit coordinate system c:<br>
```
c.Edit();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for coordinate system. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for coordinate system c:<br>
```
c.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first coordinate system in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first coordinate system in

| Returns
<br>CoordinateSystem object (or null if there are no coordinate systems in the model).<br>
Return type
<br>CoordinateSystem |
| --- |

| Example
<br>To get the first coordinate system in model m:<br>
```
var c = CoordinateSystem.First(m);
```
 |
| --- |

* * *

| FirstFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the first free coordinate system label in the model. Also see [CoordinateSystem.LastFreeLabel()](primer-coordinatesystem-class.md#CoordinateSystem::LastFreeLabel), [CoordinateSystem.NextFreeLabel()](primer-coordinatesystem-class.md#CoordinateSystem::NextFreeLabel) and [Model.FirstFreeItemLabel()](primer-model-class.md#Model::FirstFreeItemLabel). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first free coordinate system label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *First free in layer* in editing panels). If omitted the whole model will be used (Equivalent to *First free* in editing panels).

| Returns
<br>CoordinateSystem label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the first free coordinate system label in model m:<br>
```
var label = CoordinateSystem.FirstFreeLabel(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the coordinate systems in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all coordinate systems will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the coordinate systems

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the coordinate systems with flag f in model m:<br>
```
CoordinateSystem.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the coordinate system is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the coordinate system

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if coordinate system c has flag f set on it:<br>
```
if (c.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each coordinate system in the model.<br> **Note that ForEach has been designed to make looping over coordinate systems as fast as possible and so has some limitations. Firstly, a single temporary CoordinateSystem object is created and on each function call it is updated with the current coordinate system data. This means that you should not try to store the CoordinateSystem object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new coordinate systems inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all coordinate systems are in

* func (function)
 
Function to call for each coordinate system

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the coordinate systems in model m:<br>
```
CoordinateSystem.ForEach(m, test);
function test(c)
{
// c is CoordinateSystem object
}
```
<br><br>To call function test for all of the coordinate systems in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
CoordinateSystem.ForEach(m, test, data);
function test(c, extra)
{
// c is CoordinateSystem object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of CoordinateSystem objects or properties for all of the coordinate systems in a model in PRIMER. If the optional property argument is not given then an array of CoordinateSystem objects is returned. If the property argument is given, that property value for each coordinate system is returned in the array instead of a CoordinateSystem object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get coordinate systems from

* property (optional) (string)
 
Name for property to get for all coordinate systems in the model

| Returns
<br>Array of CoordinateSystem objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of CoordinateSystem objects for all of the coordinate systems in model m:<br>
```
var a = CoordinateSystem.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each coordinate system in model m:<br>
```
var a = CoordinateSystem.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a coordinate system. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the coordinate system c:<br>
```
var comm_array = c.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of CoordinateSystem objects for all of the flagged coordinate systems in a model in PRIMER If the optional property argument is not given then an array of CoordinateSystem objects is returned. If the property argument is given, then that property value for each coordinate system is returned in the array instead of a CoordinateSystem object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get coordinate systems from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the coordinate systems that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged coordinate systems in the model

| Returns
<br>Array of CoordinateSystem objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of CoordinateSystem objects for all of the coordinate systems in model m flagged with f:<br>
```
var c = CoordinateSystem.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the coordinate systems in model m flagged with f:<br>
```
var a = CoordinateSystem.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the CoordinateSystem object for a coordinate system ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the coordinate system in

* number (integer)
 
number of the coordinate system you want the CoordinateSystem object for

| Returns
<br>CoordinateSystem object (or null if coordinate system does not exist).<br>
Return type
<br>CoordinateSystem |
| --- |

| Example
<br>To get the CoordinateSystem object for coordinate system 100 in model m<br>
```
var c = CoordinateSystem.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a CoordinateSystem property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [CoordinateSystem.ViewParameters()](primer-coordinatesystem-class.md#CoordinateSystem::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
coordinate system property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if CoordinateSystem property c.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (c.GetParameter(c.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if CoordinateSystem property c.example is a parameter by using the GetParameter method:<br>
```
if (c.ViewParameters().GetParameter(c.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this csys (\*DEFINE\_COORDINATE). **Note that a carriage return is not added**. See also [CoordinateSystem.KeywordCards()](primer-coordinatesystem-class.md#CoordinateSystem::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for csys m:<br>
```
var key = m.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the csys. **Note that a carriage return is not added**. See also [CoordinateSystem.Keyword()](primer-coordinatesystem-class.md#CoordinateSystem::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for csys c:<br>
```
var cards = v.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last coordinate system in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last coordinate system in

| Returns
<br>CoordinateSystem object (or null if there are no coordinate systems in the model).<br>
Return type
<br>CoordinateSystem |
| --- |

| Example
<br>To get the last coordinate system in model m:<br>
```
var c = CoordinateSystem.Last(m);
```
 |
| --- |

* * *

| LastFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the last free coordinate system label in the model. Also see [CoordinateSystem.FirstFreeLabel()](primer-coordinatesystem-class.md#CoordinateSystem::FirstFreeLabel), [CoordinateSystem.NextFreeLabel()](primer-coordinatesystem-class.md#CoordinateSystem::NextFreeLabel) and see [Model.LastFreeItemLabel()](primer-model-class.md#Model::LastFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last free coordinate system label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest free in layer* in editing panels). If omitted the whole model will be used.

| Returns
<br>CoordinateSystem label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the last free coordinate system label in model m:<br>
```
var label = CoordinateSystem.LastFreeLabel(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next coordinate system in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>CoordinateSystem object (or null if there are no more coordinate systems in the model).<br>
Return type
<br>CoordinateSystem |
| --- |

| Example
<br>To get the coordinate system in model m after coordinate system c:<br>
```
var c = c.Next();
```
 |
| --- |

* * *

| NextFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the next free (highest+1) coordinate system label in the model. Also see [CoordinateSystem.FirstFreeLabel()](primer-coordinatesystem-class.md#CoordinateSystem::FirstFreeLabel), [CoordinateSystem.LastFreeLabel()](primer-coordinatesystem-class.md#CoordinateSystem::LastFreeLabel) and [Model.NextFreeItemLabel()](primer-model-class.md#Model::NextFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get next free coordinate system label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest+1 in layer* in editing panels). If omitted the whole model will be used (Equivalent to *Highest+1* in editing panels).

| Returns
<br>CoordinateSystem label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the next free coordinate system label in model m:<br>
```
var label = CoordinateSystem.NextFreeLabel(m);
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a coordinate system. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only coordinate systems from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only coordinate systems that are flagged with *limit* can be selected. If omitted, or null, any coordinate systems from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[CoordinateSystem](primer-coordinatesystem-class.md) object (or null if not picked)<br>
Return type
<br>CoordinateSystem |
| --- |

| Example
<br>To pick a coordinate system from model m giving the prompt 'Pick coordinate system from screen':<br>
```
var c = CoordinateSystem.Pick('Pick coordinate system from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous coordinate system in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>CoordinateSystem object (or null if there are no more coordinate systems in the model).<br>
Return type
<br>CoordinateSystem |
| --- |

| Example
<br>To get the coordinate system in model m before coordinate system c:<br>
```
var c = c.Previous();
```
 |
| --- |

* * *

| RenumberAll(Model*[[Model](primer-model-class.md)]*, start*[integer]*) [static]
Description<br>Renumbers all of the coordinate systems in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all coordinate systems will be renumbered in

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the coordinate systems in model m, from 1000000:<br>
```
CoordinateSystem.RenumberAll(m, 1000000);
```
 |
| --- |

* * *

| RenumberFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*) [static]
Description<br>Renumbers all of the flagged coordinate systems in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged coordinate systems will be renumbered in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the coordinate systems that you want to renumber

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the coordinate systems in model m flagged with f, from 1000000:<br>
```
CoordinateSystem.RenumberFlagged(m, f, 1000000);
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select coordinate systems using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting coordinate systems

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only coordinate systems from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only coordinate systems that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any coordinate systems can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of coordinate systems selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select coordinate systems from model m, flagging those selected with flag f, giving the prompt 'Select coordinate systems':<br>
```
CoordinateSystem.Select(f, 'Select coordinate systems', m);
```
<br><br>To select coordinate systems, flagging those selected with flag f but limiting selection to coordinate systems flagged with flag l, giving the prompt 'Select coordinate systems':<br>
```
CoordinateSystem.Select(f, 'Select coordinate systems', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the coordinate system. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the coordinate system

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for coordinate system c:<br>
```
c.SetFlag(f);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the coordinate system. The coordinate system will be sketched until you either call [CoordinateSystem.Unsketch()](primer-coordinatesystem-class.md#CoordinateSystem::Unsketch), [CoordinateSystem.UnsketchAll()](primer-coordinatesystem-class.md#CoordinateSystem::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the coordinate system is sketched. If omitted redraw is true. If you want to sketch several coordinate systems and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch coordinate system c:<br>
```
c.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged coordinate systems in the model. The coordinate systems will be sketched until you either call [CoordinateSystem.Unsketch()](primer-coordinatesystem-class.md#CoordinateSystem::Unsketch), [CoordinateSystem.UnsketchFlagged()](primer-coordinatesystem-class.md#CoordinateSystem::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged coordinate systems will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the coordinate systems that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the coordinate systems are sketched. If omitted redraw is true. If you want to sketch flagged coordinate systems several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all coordinate systems flagged with flag in model m:<br>
```
CoordinateSystem.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of coordinate systems in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing coordinate systems should be counted. If false or omitted
referenced but undefined coordinate systems will also be included in the total.

| Returns
<br>number of coordinate systems<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of coordinate systems in model m:<br>
```
var total = CoordinateSystem.Total(m);
```
 |
| --- |

* * *

| Unblank()

Description<br>Unblanks the coordinate system |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank coordinate system c:<br>
```
c.Unblank();
```
 |
| --- |

* * *

| UnblankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the coordinate systems in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all coordinate systems will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the coordinate systems in model m:<br>
```
CoordinateSystem.UnblankAll(m);
```
 |
| --- |

* * *

| UnblankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the flagged coordinate systems in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the flagged coordinate systems will be unblanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the coordinate systems that you want to unblank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the coordinate systems in model m flagged with f:<br>
```
CoordinateSystem.UnblankFlagged(m, f);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the coordinate systems in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all coordinate systems will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the coordinate systems

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the coordinate systems in model m:<br>
```
CoordinateSystem.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the coordinate system. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the coordinate system is unsketched. If omitted redraw is true. If you want to unsketch several coordinate systems and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch coordinate system c:<br>
```
c.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all coordinate systems. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all coordinate systems will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the coordinate systems are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all coordinate systems in model m:<br>
```
CoordinateSystem.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged coordinate systems in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all coordinate systems will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the coordinate systems that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the coordinate systems are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all coordinate systems flagged with flag in model m:<br>
```
CoordinateSystem.UnsketchAll(m, flag);
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
<br>[CoordinateSystem](primer-coordinatesystem-class.md) object.<br>
Return type
<br>CoordinateSystem |
| --- |

| Example
<br>To check if CoordinateSystem property c.example is a parameter by using the [CoordinateSystem.GetParameter()](primer-coordinatesystem-class.md#CoordinateSystem::GetParameter) method:<br>
```
if (c.ViewParameters().GetParameter(c.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for coordinate system. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for coordinate system c:<br>
```
c.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this coordinate system. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for coordinate system c:<br>
```
var xrefs = c.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the csys data in keyword format. Note that this contains the keyword header and the keyword cards. See also [CoordinateSystem.Keyword()](primer-coordinatesystem-class.md#CoordinateSystem::Keyword) and [CoordinateSystem.KeywordCards()](primer-coordinatesystem-class.md#CoordinateSystem::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for csys c in keyword format<br>
```
var s = v.toString();
```
 |
| --- |

* * *