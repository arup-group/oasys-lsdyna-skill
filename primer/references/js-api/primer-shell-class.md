# Shell class

The Shell class gives you access to shell cards in PRIMER. [More...](primer-shell-class.md#Shell_details)

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

* [BlankAll](primer-shell-class.md#Shell::BlankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [BlankFlagged](primer-shell-class.md#Shell::BlankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Create](primer-shell-class.md#Shell::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [FillHolesOnFlagged](primer-shell-class.md#Shell::FillHolesOnFlagged)(Model*[[Model](primer-model-class.md)]*, Flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, RemeshHole*[boolean]*, pid (optional)*[integer]*, Max Hole Size (optional)*[real]*, Mesh Element size (optional)*[real]*, planarSurface (optional)*[boolean]*)
* [FindShellInBox](primer-shell-class.md#Shell::FindShellInBox)(Model*[[Model](primer-model-class.md)]*, xmin*[real]*, xmax*[real]*, ymin*[real]*, ymax*[real]*, zmin*[real]*, zmax*[real]*, flag (optional)*[integer]*, excl (optional)*[integer]*, vis\_only (optional)*[integer]*)
* [FindShellInit](primer-shell-class.md#Shell::FindShellInit_deprecated)(Model*[[Model](primer-model-class.md)]*, flag (optional)*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [deprecated]
* [First](primer-shell-class.md#Shell::First)(Model*[[Model](primer-model-class.md)]*)
* [FirstFreeLabel](primer-shell-class.md#Shell::FirstFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [FlagAll](primer-shell-class.md#Shell::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-shell-class.md#Shell::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-shell-class.md#Shell::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-shell-class.md#Shell::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-shell-class.md#Shell::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-shell-class.md#Shell::Last)(Model*[[Model](primer-model-class.md)]*)
* [LastFreeLabel](primer-shell-class.md#Shell::LastFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [MakeConsistentNormalsFlagged](primer-shell-class.md#Shell::MakeConsistentNormalsFlagged)(Model*[[Model](primer-model-class.md)]*, Flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, Shell label (optional)*[integer]*)
* [NextFreeLabel](primer-shell-class.md#Shell::NextFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [Pick](primer-shell-class.md#Shell::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [PickIsoparametric](primer-shell-class.md#Shell::PickIsoparametric)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [RenumberAll](primer-shell-class.md#Shell::RenumberAll)(Model*[[Model](primer-model-class.md)]*, start*[integer]*)
* [RenumberFlagged](primer-shell-class.md#Shell::RenumberFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*)
* [ReverseNormalsFlagged](primer-shell-class.md#Shell::ReverseNormalsFlagged)(Model*[[Model](primer-model-class.md)]*, Flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Select](primer-shell-class.md#Shell::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-shell-class.md#Shell::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-shell-class.md#Shell::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnblankAll](primer-shell-class.md#Shell::UnblankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnblankFlagged](primer-shell-class.md#Shell::UnblankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [UnflagAll](primer-shell-class.md#Shell::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-shell-class.md#Shell::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-shell-class.md#Shell::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [Angles](primer-shell-class.md#Shell::Angles)()
* [Area](primer-shell-class.md#Shell::Area)()
* [AspectRatio](primer-shell-class.md#Shell::AspectRatio)()
* [AssociateComment](primer-shell-class.md#Shell::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Blank](primer-shell-class.md#Shell::Blank)()
* [Blanked](primer-shell-class.md#Shell::Blanked)()
* [Browse](primer-shell-class.md#Shell::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-shell-class.md#Shell::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [CoordsToIsoparametric](primer-shell-class.md#Shell::CoordsToIsoparametric)(x*[real]*, y*[real]*, z*[real]*)
* [Copy](primer-shell-class.md#Shell::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-shell-class.md#Shell::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-shell-class.md#Shell::Edit)(modal (optional)*[boolean]*)
* [ElemCut](primer-shell-class.md#Shell::ElemCut)(Database cross section label*[integer]*)
* [Error](primer-shell-class.md#Shell::Error)(message*[string]*, details (optional)*[string]*)
* [ExtractColour](primer-shell-class.md#Shell::ExtractColour)()
* [FillAttachedHole](primer-shell-class.md#Shell::FillAttachedHole)(pid*[integer]*, size*[real]*)
* [Flagged](primer-shell-class.md#Shell::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetAttachedShells](primer-shell-class.md#Shell::GetAttachedShells)(tolerance (optional)*[real]*, recursive (optional)*[boolean]*)
* [GetComments](primer-shell-class.md#Shell::GetComments)()
* [GetCompositeData](primer-shell-class.md#Shell::GetCompositeData)(ipt*[integer]*)
* [GetNodeIDs](primer-shell-class.md#Shell::GetNodeIDs)()
* [GetNodes](primer-shell-class.md#Shell::GetNodes)()
* [GetParameter](primer-shell-class.md#Shell::GetParameter)(prop*[string]*)
* [GetShellReferenceGeometry](primer-shell-class.md#Shell::GetShellReferenceGeometry)()
* [IsoparametricToCoords](primer-shell-class.md#Shell::IsoparametricToCoords)(s*[real]*, t*[real]*)
* [Jacobian](primer-shell-class.md#Shell::Jacobian)()
* [Keyword](primer-shell-class.md#Shell::Keyword)()
* [KeywordCards](primer-shell-class.md#Shell::KeywordCards)()
* [Length](primer-shell-class.md#Shell::Length)()
* [Next](primer-shell-class.md#Shell::Next)()
* [NormalVector](primer-shell-class.md#Shell::NormalVector)()
* [Previous](primer-shell-class.md#Shell::Previous)()
* [RemoveCompositeData](primer-shell-class.md#Shell::RemoveCompositeData)(ipt*[integer]*)
* [ReverseNormal](primer-shell-class.md#Shell::ReverseNormal)(redraw (optional)*[boolean]*)
* [SetCompositeData](primer-shell-class.md#Shell::SetCompositeData)(ipt*[integer]*, mid*[integer]*, thick*[real]*, beta*[real]*, plyid (optional)*[integer]*)
* [SetFlag](primer-shell-class.md#Shell::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Sketch](primer-shell-class.md#Shell::Sketch)(redraw (optional)*[boolean]*)
* [Skew](primer-shell-class.md#Shell::Skew)()
* [Taper](primer-shell-class.md#Shell::Taper)()
* [TiedNodeCheck](primer-shell-class.md#Shell::TiedNodeCheck)(Contact label*[integer]*, Flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, Option1*[integer]*, Option2*[integer]*)
* [Timestep](primer-shell-class.md#Shell::Timestep)()
* [Unblank](primer-shell-class.md#Shell::Unblank)()
* [Unsketch](primer-shell-class.md#Shell::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-shell-class.md#Shell::ViewParameters)()
* [Warning](primer-shell-class.md#Shell::Warning)(message*[string]*, details (optional)*[string]*)
* [Warpage](primer-shell-class.md#Shell::Warpage)()
* [WeightingFactors](primer-shell-class.md#Shell::WeightingFactors)(s*[real]*, t*[real]*)
* [Xrefs](primer-shell-class.md#Shell::Xrefs)()
* [toString](primer-shell-class.md#Shell::toString)()

## Shell constants

| **Name** | **Description** |
| --- | --- |
| Shell.EDGE\_1 | Edge 1 of shell |
| Shell.EDGE\_2 | Edge 2 of shell |
| Shell.EDGE\_3 | Edge 3 of shell |
| Shell.EDGE\_4 | Edge 4 of shell |

## Shell properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| beta | real | Orthotropic material base offset angle. null if the \_BETA option is not set. If not null then this is the angle in degrees and the \_BETA option is set. This is required to distinguish between the cases of \_BETA not being used (beta === null) and \_BETA being set but the angle being zero (beta === 0). Prior to version 18 \_BETA was only set if beta was non-zero. This was fixed in version 18 and the test changed to beta not being null. **Note: If this option is set then mcid should be 0** |
| colour | [Colour](primer-colour-class.md) | The colour of the shell |
| composite | logical | If COMPOSITE option is set. Can be true or false |
| composite\_long | logical | If COMPOSITE\_LONG option is set. Can be true or false |
| dof | logical | If DOF option is set. Can be true or false |
| edges | constant | Bitwise code of [Shell.EDGE_1](primer-shell-class.md#Shell.EDGE_1), [Shell.EDGE_2](primer-shell-class.md#Shell.EDGE_2), [Shell.EDGE_3](primer-shell-class.md#Shell.EDGE_3) and [Shell.EDGE_4](primer-shell-class.md#Shell.EDGE_4) representing which edges of the shell are free edges |
| eid | integer | [Shell](primer-shell-class.md) number. Also see the [label](primer-shell-class.md#label) property which is an alternative name for this. |
| exists (read only) | logical | true if shell exists, false if referred to but not defined. |
| include | integer | The [Include](primer-include-class.md) file number that the shell is in. |
| label | integer | [Shell](primer-shell-class.md) number. Also see the [eid](primer-shell-class.md#eid) property which is an alternative name for this. |
| mcid | integer | Material coordinate system ID. If non zero then the \_MCID option is assumed. **Note: If this option is set then beta should be null.** |
| model (read only) | integer | The [Model](primer-model-class.md) number that the shell is in. |
| n1 | integer | [Node](primer-node-class.md) number 1 |
| n2 | integer | [Node](primer-node-class.md) number 2 |
| n3 | integer | [Node](primer-node-class.md) number 3 |
| n4 | integer | [Node](primer-node-class.md) number 4 |
| n5 | integer | [Node](primer-node-class.md) number 5 |
| n6 | integer | [Node](primer-node-class.md) number 6 |
| n7 | integer | [Node](primer-node-class.md) number 7 |
| n8 | integer | [Node](primer-node-class.md) number 8 |
| nip | logical | Number of integration points for [composite](primer-shell-class.md#composite) shell |
| nodes (read only) | integer | Number of nodes shell has |
| ns1 | integer | Scalar [Node](primer-node-class.md) number 1 |
| ns2 | integer | Scalar [Node](primer-node-class.md) number 2 |
| ns3 | integer | Scalar [Node](primer-node-class.md) number 3 |
| ns4 | integer | Scalar [Node](primer-node-class.md) number 4 |
| offset | real | Offset distance. If non zero then the \_OFFSET option is assumed |
| pid | integer | [Part](primer-part-class.md) number |
| shl4\_to\_shl8 | logical | If SHL4\_TO\_SHL8 option is set. Can be true or false |
| thic1 | real | Thickness at node 1 |
| thic2 | real | Thickness at node 2 |
| thic3 | real | Thickness at node 3 |
| thic4 | real | Thickness at node 4 |
| thic5 | real | Thickness at node 5 (if 8 noded shell) |
| thic6 | real | Thickness at node 6 (if 8 noded shell) |
| thic7 | real | Thickness at node 7 (if 8 noded shell) |
| thic8 | real | Thickness at node 8 (if 8 noded shell) |
| thickness | logical | If \_THICKNESS option is set. Can be true or false |
| transparency | integer | The transparency of the shell (0-100) 0% is opaque, 100% is transparent. |

| Detailed Description<br>The Shell class allows you to create, modify, edit and manipulate shell cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new Shell(Model*[[Model](primer-model-class.md)]*, eid*[integer]*, pid*[integer]*, n1*[integer]*, n2*[integer]*, n3*[integer]*, n4 (optional)*[integer]*, n5 (optional)*[integer]*, n6 (optional)*[integer]*, n7 (optional)*[integer]*, n8 (optional)*[integer]*)

Description<br>Create a new [Shell](primer-shell-class.md) object. Use either 3, 4, 6 or 8 nodes when creating a new shell. If you are creating a 3 noded shell either only give 3 nodes or give 4 nodes but make nodes 3 and 4 the same number. Similarly, 6 noded shells can be created with 6 node arguments or with 8 nodes but nodes 3 and 4 the same number and nodes 7 and 8 the same number. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that shell will be created in

* eid (integer)
 
[Shell](primer-shell-class.md) number

* pid (integer)
 
[Part](primer-part-class.md) number

* n1 (integer)
 
[Node](primer-node-class.md) number 1

* n2 (integer)
 
[Node](primer-node-class.md) number 2

* n3 (integer)
 
[Node](primer-node-class.md) number 3

* n4 (optional) (integer)
 
[Node](primer-node-class.md) number 4

* n5 (optional) (integer)
 
[Node](primer-node-class.md) number 5

* n6 (optional) (integer)
 
[Node](primer-node-class.md) number 6

* n7 (optional) (integer)
 
[Node](primer-node-class.md) number 7

* n8 (optional) (integer)
 
[Node](primer-node-class.md) number 8

| Returns
<br>[Shell](primer-shell-class.md) object<br>
Return type
<br>Shell |
| --- |

| Example
<br>To create a new shell in model m with label 100, part 10 and nodes 1, 2, 3, 4:<br>
```
var s = new Shell(m, 100, 10, 1, 2, 3, 4);
```
 |
| --- |

| Details of functions 
Angles()

Description<br>Calculates the minimum and maximum internal angles (in degrees) for the shell |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of numbers containing min and max angles<br>
Return type
<br>Number |
| --- |

| Example
<br>To calculate the maximum and minimum internal angles for shell s:<br>
```
var angles = s.Angles();
var min = angles[0];
var max = angles[1];
```
 |
| --- |

* * *

| Area()

Description<br>Calculates the area for the shell |
| --- |

#### Arguments

No arguments

| Returns
<br>real<br>
Return type
<br>Number |
| --- |

| Example
<br>To calculate the area for shell s:<br>
```
var area = s.Area();
```
 |
| --- |

* * *

| AspectRatio()

Description<br>Calculates the aspect ratio for the shell |
| --- |

#### Arguments

No arguments

| Returns
<br>real<br>
Return type
<br>Number |
| --- |

| Example
<br>To calculate the aspect ratio for shell s:<br>
```
var ratio = s.AspectRatio();
```
 |
| --- |

* * *

| AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a shell. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the shell

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the shell s:<br>
```
s.AssociateComment(c);
```
 |
| --- |

* * *

| Blank()

Description<br>Blanks the shell |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To blank shell s:<br>
```
s.Blank();
```
 |
| --- |

* * *

| BlankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the shells in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all shells will be blanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the shells in model m:<br>
```
Shell.BlankAll(m);
```
 |
| --- |

* * *

| BlankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the flagged shells in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged shells will be blanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the shells that you want to blank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the shells in model m flagged with f:<br>
```
Shell.BlankFlagged(m, f);
```
 |
| --- |

* * *

| Blanked()

Description<br>Checks if the shell is blanked or not. |
| --- |

#### Arguments

No arguments

| Returns
<br>true if blanked, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if shell s is blanked:<br>
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
<br>To Browse shell s:<br>
```
s.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the shell. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the shell

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for shell s:<br>
```
s.ClearFlag(f);
```
 |
| --- |

* * *

| CoordsToIsoparametric(x*[real]*, y*[real]*, z*[real]*)

Description<br>Calculates the isoparametric coordinates for a point on the shell. |
| --- |

#### Arguments

* x (real)
 
X coordinate of point

* y (real)
 
Y coordinate of point

* z (real)
 
Z coordinate of point

| Returns
<br>Array containing s and t isoparametric coordinates and the distance the point is from the shell (positive in direction of shell normal). If it is not possible to calculate the isoparametric coordinates null is returned.<br>
Return type
<br>Array |
| --- |

| Example
<br>To calculate the isoparametric coordinates of point (10, 20, 30) on shell s:<br>
```
var isocoords = s.CoordsToIsoparametric(10, 20, 30);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the shell. The target include of the copied shell can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>Shell object<br>
Return type
<br>Shell |
| --- |

| Example
<br>To copy shell s into shell z:<br>
```
var z = s.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a shell |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the shell will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>Shell object (or null if not made).<br>
Return type
<br>Shell |
| --- |

| Example
<br>To start creating a shell in model m:<br>
```
var s = Shell.Create(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a shell. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the shell

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the shell s:<br>
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
<br>To Edit shell s:<br>
```
s.Edit();
```
 |
| --- |

* * *

| ElemCut(Database cross section label*[integer]*)

Description<br>Returns coordinates of the intersections between a shell and a database cross section. |
| --- |

#### Arguments

* Database cross section label (integer)
 
The label of the database cross section.

| Returns
<br>An array containing the x1,y1,z1,x2,y2,z2 coordinates of the cut line, or NULL if it does not cut. Note this function does not check that the shell is in the cross section definition (part set)<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the cut line coordinates between database cross section 200 and shell s:<br>
```
var data = s.ElemCut(200)
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for shell. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for shell s:<br>
```
s.Error("My custom error");
```
 |
| --- |

* * *

| ExtractColour()

Description<br>Extracts the **actual** colour used for shell.<br> By default in PRIMER many entities such as elements get their colour automatically from the part that they are in. PRIMER cycles through 13 default colours based on the label of the entity. In this case the shell [colour](primer-shell-class.md#colour) property will return the value [Colour.PART](primer-colour-class.md#Colour.PART) instead of the actual colour. This method will return the actual colour which is used for drawing the shell. |
| --- |

#### Arguments

No arguments

| Returns
<br>colour value (integer)<br>
Return type
<br>Number |
| --- |

| Example
<br>To return the colour used for drawing shell s:<br>
```
var colour = s.ExtractColour();
```
 |
| --- |

* * *

| FillAttachedHole(pid*[integer]*, size*[real]*)

Description<br>Fills in (meshes) a hole attached to the shell. |
| --- |

#### Arguments

* pid (integer)
 
The [Part](primer-part-class.md) number that the new shells will be created in.

* size (real)
 
The size for created elements.

| Returns
<br>No return value. |
| --- |

| Example
<br>To fill in a hole attached to shell s, putting new shells with size 5.0 into part 100:<br>
```
s.FillAttachedHole(100, 5.0);
```
 |
| --- |

* * *

| FillHolesOnFlagged(Model*[[Model](primer-model-class.md)]*, Flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, RemeshHole*[boolean]*, pid (optional)*[integer]*, Max Hole Size (optional)*[real]*, Mesh Element size (optional)*[real]*, planarSurface (optional)*[boolean]*) [static]
Description<br>Fills multiple holes using flagged shells. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all shells are in.

* Flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
flag bit

* RemeshHole (boolean)
 
TRUE if elements around the hole should be remeshed

* pid (optional) (integer)
 
Needs to be specified if RemeshHole is FALSE. Specifies the Part id where the mesh is filled

* Max Hole Size (optional) (real)
 
Maximum size of the hole which is to be filled. If omitted a default size of 20.0 will be set

* Mesh Element size (optional) (real)
 
Element size of the mesh which fills the hole. If omitted a default size of 10.0 will be set

* planarSurface (optional) (boolean)
 
Needs to be specified if RemeshHole is TRUE. TRUE if we need to Use planar surface

| Returns
<br>No return value. |
| --- |

| Example
<br>To fill holes on flagged shells:<br>
```
Shell.FillHolesOnFlagged(m, flag, 1, 112, 60.5, 5.34 ,0);
```
<br>Note: pid is required when RemeshHole is FALSE<br>
```
Shell.FillHolesOnFlagged(m, flag, 0, 112);
```
 |
| --- |

* * *

| FindShellInBox(Model*[[Model](primer-model-class.md)]*, xmin*[real]*, xmax*[real]*, ymin*[real]*, ymax*[real]*, zmin*[real]*, zmax*[real]*, flag (optional)*[integer]*, excl (optional)*[integer]*, vis\_only (optional)*[integer]*) [static]
Description<br>Returns an array of Shell objects for the shells within a box. Please note in (default) inclusive mode this function provides a list of all shells that could potentially be in the box (using computationally cheap bounding box comparison - local box vs main box). NOTE - it is not a rigorous test of whether the shell is actually in the box. An extension of "spot\_thickness" is applied to each local shell box. By default this is 10mm. You can use "Options.connection\_max\_thickness = x" to reduce this value. This may return shells that are ostensibly outside box. The user should apply their own test on each shell returned. The purpose of this function is to reduce the number of shells you need to test. Setting the exclusive option will only return shells that are fully contained in the main box This may not capture all the shells you want to process so must be used with care. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) designated model

* xmin (real)
 
Minimum bound in global x

* xmax (real)
 
Maximum bound in global x

* ymin (real)
 
Minimum bound in global y

* ymax (real)
 
Maximum bound in global y

* zmin (real)
 
Minimum bound in global z

* zmax (real)
 
Maximum bound in global z

* flag (optional) (integer)
 
Optional flag to restrict shells considered, if 0 all shells considered

* excl (optional) (integer)
 
Optional flag ( 0) Apply inclusive selection with local box extension = "spot\_thickness" (default 10) (-1) Apply inclusive selection with local box extension = 0.5\*shell thickness ( 1) Apply exclusive selection inclusive selection means elements intersect box exclusive selection means elements contained in box

* vis\_only (optional) (integer)
 
Optional flag to consider visible shells only (1), if (0) all shells considered

| Returns
<br>Array of Shell objects<br>
Return type
<br>Array |
| --- |

| Example
<br>To get an array of Shell objects for flagged shells within defined box.<br>
```
var s = Shell.FindShellInBox(m, xmin, xmax, ymin, ymax, zmin, zmax, flag, 0, 0);
```
 |
| --- |

* * *

| FindShellInit(Model*[[Model](primer-model-class.md)]*, flag (optional)*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static] [deprecated]
<br>This function is deprecated in version 20.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>
Description<br>Initialize setup so that all flagged shells in model can be tested to see if they are within box. In v20.0 this function is obsolete and the flagging bit (if required) should be specified in [Shell.FindShellInBox()](primer-shell-class.md#Shell::FindShellInBox) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) in which shells have been flagged

* flag (optional) ([Flag](primer-global-class.md#global::AllocateFlag))
 
Optional flag that has been set on the shells, if 0 all shells considered

| Returns
<br>No return value |
| --- |

| Example
<br>To initialize find setup for flagged shells in model m:<br>
```
Shell.FindShellInit(m, flag);
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first shell in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first shell in

| Returns
<br>Shell object (or null if there are no shells in the model).<br>
Return type
<br>Shell |
| --- |

| Example
<br>To get the first shell in model m:<br>
```
var s = Shell.First(m);
```
 |
| --- |

* * *

| FirstFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the first free shell label in the model. Also see [Shell.LastFreeLabel()](primer-shell-class.md#Shell::LastFreeLabel), [Shell.NextFreeLabel()](primer-shell-class.md#Shell::NextFreeLabel) and [Model.FirstFreeItemLabel()](primer-model-class.md#Model::FirstFreeItemLabel). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first free shell label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *First free in layer* in editing panels). If omitted the whole model will be used (Equivalent to *First free* in editing panels).

| Returns
<br>Shell label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the first free shell label in model m:<br>
```
var label = Shell.FirstFreeLabel(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the shells in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all shells will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the shells

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the shells with flag f in model m:<br>
```
Shell.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the shell is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the shell

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if shell s has flag f set on it:<br>
```
if (s.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each shell in the model.<br> **Note that ForEach has been designed to make looping over shells as fast as possible and so has some limitations. Firstly, a single temporary Shell object is created and on each function call it is updated with the current shell data. This means that you should not try to store the Shell object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new shells inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all shells are in

* func (function)
 
Function to call for each shell

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the shells in model m:<br>
```
Shell.ForEach(m, test);
function test(s)
{
// s is Shell object
}
```
<br><br>To call function test for all of the shells in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
Shell.ForEach(m, test, data);
function test(s, extra)
{
// s is Shell object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Shell objects or properties for all of the shells in a model in PRIMER. If the optional property argument is not given then an array of Shell objects is returned. If the property argument is given, that property value for each shell is returned in the array instead of a Shell object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get shells from

* property (optional) (string)
 
Name for property to get for all shells in the model

| Returns
<br>Array of Shell objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Shell objects for all of the shells in model m:<br>
```
var a = Shell.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each shell in model m:<br>
```
var a = Shell.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetAttachedShells(tolerance (optional)*[real]*, recursive (optional)*[boolean]*)

Description<br>Returns the shells that are attached to the shell. **Note that 'attached' means that the shells must share 2 nodes**. |
| --- |

#### Arguments

* tolerance (optional) (real)
 
This tolerance can be used to limit the selection to shells whose normal vector is within this tolerance (in degrees) of the original shell. If omitted the tolerance is 180 degrees.

* recursive (optional) (boolean)
 
If recursive is false then only the shells actually attached to the shell will be returned (this could also be done by using the [Xrefs](primer-xrefs-class.md) class but this method is provided for convenience. If recursive is true then PRIMER will keep finding attached shells until no more can be found. If omitted recursive will be false.

| Returns
<br>Array of [Shell](primer-shell-class.md) objects (or null if there are no attached shells).<br>
Return type
<br>Array |
| --- |

| Example
<br>To find the shells attached to shell s with a 10 degree tolerance, growing the selection until no more shells can be found:<br>
```
var shell_array = s.GetAttachedShells(10, true);
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a shell. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the shell s:<br>
```
var comm_array = s.GetComments();
```
 |
| --- |

* * *

| GetCompositeData(ipt*[integer]*)

Description<br>Returns the composite data for an integration point in \*ELEMENT\_SHELL\_COMPOSITE. |
| --- |

#### Arguments

* ipt (integer)
 
The integration point you want the data for. **Note that integration points start at 0, not 1**.

| Returns
<br>An array containing the material ID, thickness and beta angle values. If the \_COMPOSITE\_LONG option is set, then the array returned will also contain the ply ID.<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the composite data for the 3rd integration point for shell s:<br>
```
if (s.composite && s.nip >= 3)
{
    var ipt_data = s.GetCompositeData(2);
}
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Shell objects for all of the flagged shells in a model in PRIMER If the optional property argument is not given then an array of Shell objects is returned. If the property argument is given, then that property value for each shell is returned in the array instead of a Shell object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get shells from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the shells that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged shells in the model

| Returns
<br>Array of Shell objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Shell objects for all of the shells in model m flagged with f:<br>
```
var s = Shell.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the shells in model m flagged with f:<br>
```
var a = Shell.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the Shell object for a shell ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the shell in

* number (integer)
 
number of the shell you want the Shell object for

| Returns
<br>Shell object (or null if shell does not exist).<br>
Return type
<br>Shell |
| --- |

| Example
<br>To get the Shell object for shell 100 in model m<br>
```
var s = Shell.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetNodeIDs()

Description<br>Returns the labels of the nodes on the shell as an array. See also [Shell.GetNodes()](primer-shell-class.md#Shell::GetNodes) |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of node labels (integers)<br>
Return type
<br>Number |
| --- |

| Example
<br>To return the node labels of shell s as an array<br>
```
var nodes = s.GetNodeIDs();
```
 |
| --- |

* * *

| GetNodes()

Description<br>Returns the nodes on the shell as an array of [Node](primer-node-class.md) objects. See also [Shell.GetNodeIDs()](primer-shell-class.md#Shell::GetNodeIDs) |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of [Node](primer-node-class.md) objects<br>
Return type
<br>Array |
| --- |

| Example
<br>To return the nodes of shell s as an array<br>
```
var nodes = s.GetNodes();
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a Shell property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [Shell.ViewParameters()](primer-shell-class.md#Shell::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
shell property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if Shell property s.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (s.GetParameter(s.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if Shell property s.example is a parameter by using the GetParameter method:<br>
```
if (s.ViewParameters().GetParameter(s.example) ) do_something...
```
 |
| --- |

* * *

| GetShellReferenceGeometry()

Description<br>Returns the airbag shell reference geometry of the shell |
| --- |

#### Arguments

No arguments

| Returns
<br>The shell reference geometry ID of the shell (or 0 if it hasn't got any)<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the shell reference geometry of the shell s:<br>
```
var a = s.GetShellReferenceGeometry();
```
 |
| --- |

* * *

| IsoparametricToCoords(s*[real]*, t*[real]*)

Description<br>Calculates the coordinates for a point on the shell from the isoparametric coords. |
| --- |

#### Arguments

* s (real)
 
First isoparametric coordinate

* t (real)
 
Second isoparametric coordinate

| Returns
<br>Array of numbers containing x, y and z or null if not possible to calculate.<br>
Return type
<br>Number |
| --- |

| Example
<br>To calculate the coordinates of isoparametric point (0.5, -0.5) on shell s:<br>
```
var coords = s.IsoparametricToCoords(0.5, -0.5);
```
 |
| --- |

* * *

| Jacobian()

Description<br>Calculates the jacobian for the shell |
| --- |

#### Arguments

No arguments

| Returns
<br>real<br>
Return type
<br>Number |
| --- |

| Example
<br>To calculate the jacobian for shell s:<br>
```
var jacobian = s.Jacobian();
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this shell (\*SHELL, \*SHELL\_SCALAR or \*SHELL\_SCALAR\_VALUE). **Note that a carriage return is not added**. See also [Shell.KeywordCards()](primer-shell-class.md#Shell::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for shell s:<br>
```
var key = s.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the shell. **Note that a carriage return is not added**. See also [Shell.Keyword()](primer-shell-class.md#Shell::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for shell s:<br>
```
var cards = s.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last shell in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last shell in

| Returns
<br>Shell object (or null if there are no shells in the model).<br>
Return type
<br>Shell |
| --- |

| Example
<br>To get the last shell in model m:<br>
```
var s = Shell.Last(m);
```
 |
| --- |

* * *

| LastFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the last free shell label in the model. Also see [Shell.FirstFreeLabel()](primer-shell-class.md#Shell::FirstFreeLabel), [Shell.NextFreeLabel()](primer-shell-class.md#Shell::NextFreeLabel) and see [Model.LastFreeItemLabel()](primer-model-class.md#Model::LastFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last free shell label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest free in layer* in editing panels). If omitted the whole model will be used.

| Returns
<br>Shell label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the last free shell label in model m:<br>
```
var label = Shell.LastFreeLabel(m);
```
 |
| --- |

* * *

| Length()

Description<br>Calculates the minimum length for the shell |
| --- |

#### Arguments

No arguments

| Returns
<br>real<br>
Return type
<br>Number |
| --- |

| Example
<br>To calculate the minimum length for shell s:<br>
```
var length = s.Length();
```
 |
| --- |

* * *

| MakeConsistentNormalsFlagged(Model*[[Model](primer-model-class.md)]*, Flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, Shell label (optional)*[integer]*) [static]
Description<br>Make all the flagged SHELL normals consistent with a selected one, the Seed Element. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all shells are in.

* Flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
flag bit

* Shell label (optional) (integer)
 
The label of the seed shell. If omitted, or null, the first flagged shell is used as the seed shell.

| Returns
<br>Array containing the labels of shells which have had normals reversed<br>
Return type
<br>Array |
| --- |

| Example
<br>To make all flagged shell normals consistent:<br>
```
Shell.MakeConsistentNormalsFlagged(m, flag, 1001);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next shell in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Shell object (or null if there are no more shells in the model).<br>
Return type
<br>Shell |
| --- |

| Example
<br>To get the shell in model m after shell s:<br>
```
var s = s.Next();
```
 |
| --- |

* * *

| NextFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the next free (highest+1) shell label in the model. Also see [Shell.FirstFreeLabel()](primer-shell-class.md#Shell::FirstFreeLabel), [Shell.LastFreeLabel()](primer-shell-class.md#Shell::LastFreeLabel) and [Model.NextFreeItemLabel()](primer-model-class.md#Model::NextFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get next free shell label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest+1 in layer* in editing panels). If omitted the whole model will be used (Equivalent to *Highest+1* in editing panels).

| Returns
<br>Shell label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the next free shell label in model m:<br>
```
var label = Shell.NextFreeLabel(m);
```
 |
| --- |

* * *

| NormalVector()

Description<br>Calculates the unit normal vector for the shell. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of numbers containing x, y and z components of unit normal vector or null if the vector cannot<br>be calculated (for example if the shell has zero area).<br>
Return type
<br>Number |
| --- |

| Example
<br>To calculate the normal vector of shell s:<br>
```
var nvector = s.NormalVector();
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a shell. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only shells from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only shells that are flagged with *limit* can be selected. If omitted, or null, any shells from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[Shell](primer-shell-class.md) object (or null if not picked)<br>
Return type
<br>Shell |
| --- |

| Example
<br>To pick a shell from model m giving the prompt 'Pick shell from screen':<br>
```
var s = Shell.Pick('Pick shell from screen', m);
```
 |
| --- |

* * *

| PickIsoparametric(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a point on a shell. The isoparametric coordinates of the point picked on the shell are returned as well as the shell picked. These coordinates are suitable for using in the function [Shell.IsoparametricToCoords()](primer-shell-class.md#Shell::IsoparametricToCoords). See also [Shell.Pick()](primer-shell-class.md#Shell::Pick) |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only shells from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only shells that are flagged with *limit* can be selected. If omitted, or null, any shells from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>Array containing [Shell](primer-shell-class.md) object and isoparametric coordinates (or null if not picked or the point is not on a shell)<br>
Return type
<br>Array |
| --- |

| Example
<br>To pick a point on a shell from model m giving the prompt 'Pick a point on a shell on the screen':<br>
```
var a = Shell.PickIsoparametric('Pick a point on a shell on the screen', m);
if (a != null)
{
    Message("You picked point "+a[1]+","+a[2]+" on shell "+a[0].label);
}

```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous shell in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Shell object (or null if there are no more shells in the model).<br>
Return type
<br>Shell |
| --- |

| Example
<br>To get the shell in model m before shell s:<br>
```
var s = s.Previous();
```
 |
| --- |

* * *

| RemoveCompositeData(ipt*[integer]*)

Description<br>Removes the composite data for an integration point in \*ELEMENT\_SHELL\_COMPOSITE. |
| --- |

#### Arguments

* ipt (integer)
 
The integration point you want to remove. **Note that integration points start at 0, not 1**.

| Returns
<br>No return value. |
| --- |

| Example
<br>To remove the composite data for the 3rd integration point for shell s:<br>
```
s.RemoveCompositeData(2);
```
 |
| --- |

* * *

| RenumberAll(Model*[[Model](primer-model-class.md)]*, start*[integer]*) [static]
Description<br>Renumbers all of the shells in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all shells will be renumbered in

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the shells in model m, from 1000000:<br>
```
Shell.RenumberAll(m, 1000000);
```
 |
| --- |

* * *

| RenumberFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*) [static]
Description<br>Renumbers all of the flagged shells in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged shells will be renumbered in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the shells that you want to renumber

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the shells in model m flagged with f, from 1000000:<br>
```
Shell.RenumberFlagged(m, f, 1000000);
```
 |
| --- |

* * *

| ReverseNormal(redraw (optional)*[boolean]*)

Description<br>Reverse shell normal. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to reverse several shell normals and only redraw after the last one then use false for all redraws apart from the last one.

| Returns
<br>No return value. |
| --- |

| Example
<br>To Reverse shell normal for shell s:<br>
```
s.ReverseNormal();
```
 |
| --- |

* * *

| ReverseNormalsFlagged(Model*[[Model](primer-model-class.md)]*, Flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Reverse all the flagged shell normals |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all shells are in.

* Flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
flag bit

| Returns
<br>No return value. |
| --- |

| Example
<br>To Reverse all flagged shell normals:<br>
```
Shell.ReverseNormalsFlagged(m, flag);
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select shells using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting shells

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only shells from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only shells that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any shells can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of shells selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select shells from model m, flagging those selected with flag f, giving the prompt 'Select shells':<br>
```
Shell.Select(f, 'Select shells', m);
```
<br><br>To select shells, flagging those selected with flag f but limiting selection to shells flagged with flag l, giving the prompt 'Select shells':<br>
```
Shell.Select(f, 'Select shells', l);
```
 |
| --- |

* * *

| SetCompositeData(ipt*[integer]*, mid*[integer]*, thick*[real]*, beta*[real]*, plyid (optional)*[integer]*)

Description<br>Sets the composite data for an integration point in \*ELEMENT\_SHELL\_COMPOSITE. |
| --- |

#### Arguments

* ipt (integer)
 
The integration point you want to set the data for. **Note that integration points start at 0, not 1**.

* mid (integer)
 
Material ID for the integration point.

* thick (real)
 
Thickness of the integration point.

* beta (real)
 
Material angle of the integration point.

* plyid (optional) (integer)
 
Ply ID for the integration point. This should be used if the \_COMPOSITE\_LONG option is set for the shell.

| Returns
<br>No return value. |
| --- |

| Example
<br>To set the composite data for the 3rd integration point to mat 1, thickness 0.5 and angle 45, for shell s:<br>
```
s.SetCompositeData(2, 1, 0.5, 45);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the shell. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the shell

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for shell s:<br>
```
s.SetFlag(f);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the shell. The shell will be sketched until you either call [Shell.Unsketch()](primer-shell-class.md#Shell::Unsketch), [Shell.UnsketchAll()](primer-shell-class.md#Shell::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the shell is sketched. If omitted redraw is true. If you want to sketch several shells and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch shell s:<br>
```
s.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged shells in the model. The shells will be sketched until you either call [Shell.Unsketch()](primer-shell-class.md#Shell::Unsketch), [Shell.UnsketchFlagged()](primer-shell-class.md#Shell::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged shells will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the shells that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the shells are sketched. If omitted redraw is true. If you want to sketch flagged shells several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all shells flagged with flag in model m:<br>
```
Shell.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Skew()

Description<br>Calculates the skew for the shell |
| --- |

#### Arguments

No arguments

| Returns
<br>real<br>
Return type
<br>Number |
| --- |

| Example
<br>To calculate the skew for shell s:<br>
```
var skew = s.Skew();
```
 |
| --- |

* * *

| Taper()

Description<br>Calculates the taper for the shell |
| --- |

#### Arguments

No arguments

| Returns
<br>real<br>
Return type
<br>Number |
| --- |

| Example
<br>To calculate the taper for shell s:<br>
```
var taper = s.Taper();
```
 |
| --- |

* * *

| TiedNodeCheck(Contact label*[integer]*, Flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, Option1*[integer]*, Option2*[integer]*)

Description<br>Checks if nodes of shell are tied by contact or directly attached (non-zero option1). |
| --- |

#### Arguments

* Contact label (integer)
 
The label of the tied contact. If zero the tied contact is found for the shell by reverse lookup.

* Flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
flag bit

* Option1 (integer)
 
Directly tied node (logical OR) 0:NONE 1:NRB/C\_EXNO 2:BEAM 4:SHELL 8:SOLID 16:TSHELL

* Option2 (integer)
 
0:No action 1: report error if directly attached node (acc. option1) captured by contact

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To check if all nodes of shell s are tied by contact 200 or attach directly to constraint:<br>
```
var message = s.TiedNodeCheck(200, flag, 1, 1)
```
 |
| --- |

* * *

| Timestep()

Description<br>Calculates the timestep for the shell |
| --- |

#### Arguments

No arguments

| Returns
<br>real<br>
Return type
<br>Number |
| --- |

| Example
<br>To calculate the timestep for shell s:<br>
```
var timestep = s.Timestep();
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of shells in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing shells should be counted. If false or omitted
referenced but undefined shells will also be included in the total.

| Returns
<br>number of shells<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of shells in model m:<br>
```
var total = Shell.Total(m);
```
 |
| --- |

* * *

| Unblank()

Description<br>Unblanks the shell |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank shell s:<br>
```
s.Unblank();
```
 |
| --- |

* * *

| UnblankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the shells in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all shells will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the shells in model m:<br>
```
Shell.UnblankAll(m);
```
 |
| --- |

* * *

| UnblankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the flagged shells in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the flagged shells will be unblanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the shells that you want to unblank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the shells in model m flagged with f:<br>
```
Shell.UnblankFlagged(m, f);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the shells in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all shells will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the shells

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the shells in model m:<br>
```
Shell.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the shell. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the shell is unsketched. If omitted redraw is true. If you want to unsketch several shells and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch shell s:<br>
```
s.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all shells. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all shells will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the shells are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all shells in model m:<br>
```
Shell.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged shells in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all shells will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the shells that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the shells are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all shells flagged with flag in model m:<br>
```
Shell.UnsketchAll(m, flag);
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
<br>[Shell](primer-shell-class.md) object.<br>
Return type
<br>Shell |
| --- |

| Example
<br>To check if Shell property s.example is a parameter by using the [Shell.GetParameter()](primer-shell-class.md#Shell::GetParameter) method:<br>
```
if (s.ViewParameters().GetParameter(s.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for shell. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for shell s:<br>
```
s.Warning("My custom warning");
```
 |
| --- |

* * *

| Warpage()

Description<br>Calculates the warpage for the shell |
| --- |

#### Arguments

No arguments

| Returns
<br>real<br>
Return type
<br>Number |
| --- |

| Example
<br>To calculate the warpage for shell s:<br>
```
var warpage = s.Warpage();
```
 |
| --- |

* * *

| WeightingFactors(s*[real]*, t*[real]*)

Description<br>Calculates the weighting factors for a point on the shell from the isoparametric coords. |
| --- |

#### Arguments

* s (real)
 
First isoparametric coordinate

* t (real)
 
Second isoparametric coordinate

| Returns
<br>Array of numbers containing weighting factors or null if not possible to calculate.<br>
Return type
<br>Number |
| --- |

| Example
<br>To calculate the weighting factors of isoparametric point (0.5, -0.5) on shell s:<br>
```
var weights = s.WeightingFactors(0.5, -0.5);
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this shell. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for shell s:<br>
```
var xrefs = s.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the shell data in keyword format. Note that this contains the keyword header and the keyword cards. See also [Shell.Keyword()](primer-shell-class.md#Shell::Keyword) and [Shell.KeywordCards()](primer-shell-class.md#Shell::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for shell s in keyword format<br>
```
var str = s.toString();
```
 |
| --- |

* * *