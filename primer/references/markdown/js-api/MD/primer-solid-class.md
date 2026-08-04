# Solid class

The Solid class gives you access to solid cards in PRIMER. [More...](primer-solid-class.md#Solid_details)

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

* [BlankAll](primer-solid-class.md#Solid::BlankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [BlankFlagged](primer-solid-class.md#Solid::BlankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [CoordsToIsoparametric](primer-solid-class.md#Solid::CoordsToIsoparametric)(Model*[[Model](primer-model-class.md)]*, x*[real]*, y*[real]*, z*[real]*, n1*[integer]*, n2*[integer]*, n3*[integer]*, n4*[integer]*)
* [Create](primer-solid-class.md#Solid::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [FindSolidInBox](primer-solid-class.md#Solid::FindSolidInBox)(Model*[[Model](primer-model-class.md)]*, xmin*[real]*, xmax*[real]*, ymin*[real]*, ymax*[real]*, zmin*[real]*, zmax*[real]*, flag (optional)*[integer]*, excl (optional)*[integer]*, vis\_only (optional)*[integer]*)
* [FindSolidInit](primer-solid-class.md#Solid::FindSolidInit_deprecated)(Model*[[Model](primer-model-class.md)]*, flag (optional)*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [deprecated]
* [First](primer-solid-class.md#Solid::First)(Model*[[Model](primer-model-class.md)]*)
* [FirstFreeLabel](primer-solid-class.md#Solid::FirstFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [FlagAll](primer-solid-class.md#Solid::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-solid-class.md#Solid::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-solid-class.md#Solid::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-solid-class.md#Solid::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-solid-class.md#Solid::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-solid-class.md#Solid::Last)(Model*[[Model](primer-model-class.md)]*)
* [LastFreeLabel](primer-solid-class.md#Solid::LastFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [NextFreeLabel](primer-solid-class.md#Solid::NextFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [Pick](primer-solid-class.md#Solid::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [RenumberAll](primer-solid-class.md#Solid::RenumberAll)(Model*[[Model](primer-model-class.md)]*, start*[integer]*)
* [RenumberFlagged](primer-solid-class.md#Solid::RenumberFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*)
* [Select](primer-solid-class.md#Solid::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-solid-class.md#Solid::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-solid-class.md#Solid::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnblankAll](primer-solid-class.md#Solid::UnblankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnblankFlagged](primer-solid-class.md#Solid::UnblankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [UnflagAll](primer-solid-class.md#Solid::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-solid-class.md#Solid::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-solid-class.md#Solid::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AspectRatio](primer-solid-class.md#Solid::AspectRatio)()
* [AssociateComment](primer-solid-class.md#Solid::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Blank](primer-solid-class.md#Solid::Blank)()
* [Blanked](primer-solid-class.md#Solid::Blanked)()
* [Browse](primer-solid-class.md#Solid::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-solid-class.md#Solid::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-solid-class.md#Solid::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-solid-class.md#Solid::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-solid-class.md#Solid::Edit)(modal (optional)*[boolean]*)
* [ElemCut](primer-solid-class.md#Solid::ElemCut)(Database cross section label*[integer]*)
* [Error](primer-solid-class.md#Solid::Error)(message*[string]*, details (optional)*[string]*)
* [ExtractColour](primer-solid-class.md#Solid::ExtractColour)()
* [Flagged](primer-solid-class.md#Solid::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-solid-class.md#Solid::GetComments)()
* [GetParameter](primer-solid-class.md#Solid::GetParameter)(prop*[string]*)
* [Jacobian](primer-solid-class.md#Solid::Jacobian)()
* [Keyword](primer-solid-class.md#Solid::Keyword)()
* [KeywordCards](primer-solid-class.md#Solid::KeywordCards)()
* [Next](primer-solid-class.md#Solid::Next)()
* [Previous](primer-solid-class.md#Solid::Previous)()
* [SetFlag](primer-solid-class.md#Solid::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Sketch](primer-solid-class.md#Solid::Sketch)(redraw (optional)*[boolean]*)
* [TetCollapse](primer-solid-class.md#Solid::TetCollapse)()
* [TiedNodeCheck](primer-solid-class.md#Solid::TiedNodeCheck)(Contact label*[integer]*, Flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, Option1*[integer]*, Option2*[integer]*)
* [Timestep](primer-solid-class.md#Solid::Timestep)()
* [Unblank](primer-solid-class.md#Solid::Unblank)()
* [Unsketch](primer-solid-class.md#Solid::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-solid-class.md#Solid::ViewParameters)()
* [Volume](primer-solid-class.md#Solid::Volume)()
* [Warning](primer-solid-class.md#Solid::Warning)(message*[string]*, details (optional)*[string]*)
* [Warpage](primer-solid-class.md#Solid::Warpage)()
* [Xrefs](primer-solid-class.md#Solid::Xrefs)()
* [toString](primer-solid-class.md#Solid::toString)()

## Solid constants

| **Name** | **Description** |
| --- | --- |
| Solid.EDGE\_1 | Edge 1 of solid |
| Solid.EDGE\_10 | Edge 10 of solid |
| Solid.EDGE\_11 | Edge 11 of solid |
| Solid.EDGE\_12 | Edge 12 of solid |
| Solid.EDGE\_2 | Edge 2 of solid |
| Solid.EDGE\_3 | Edge 3 of solid |
| Solid.EDGE\_4 | Edge 4 of solid |
| Solid.EDGE\_5 | Edge 5 of solid |
| Solid.EDGE\_6 | Edge 6 of solid |
| Solid.EDGE\_7 | Edge 7 of solid |
| Solid.EDGE\_8 | Edge 8 of solid |
| Solid.EDGE\_9 | Edge 9 of solid |
| Solid.FACE\_1 | Face 1 of solid |
| Solid.FACE\_2 | Face 2 of solid |
| Solid.FACE\_3 | Face 3 of solid |
| Solid.FACE\_4 | Face 4 of solid |
| Solid.FACE\_5 | Face 5 of solid |
| Solid.FACE\_6 | Face 6 of solid |

## Solid properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| a1 | real | x component of material direction a |
| a2 | real | y component of material direction a |
| a3 | real | z component of material direction a |
| colour | [Colour](primer-colour-class.md) | The colour of the solid |
| d1 | real | x component of material in-plane vector |
| d2 | real | y component of material in-plane vector |
| d3 | real | z component of material in-plane vector |
| dof | logical | If DOF option is set. Can be true or false |
| edges | constant | Bitwise code of [Solid.EDGE_1](primer-solid-class.md#Solid.EDGE_1), [Solid.EDGE_2](primer-solid-class.md#Solid.EDGE_2), [Solid.EDGE_3](primer-solid-class.md#Solid.EDGE_3), [Solid.EDGE_4](primer-solid-class.md#Solid.EDGE_4), [Solid.EDGE_5](primer-solid-class.md#Solid.EDGE_5), [Solid.EDGE_6](primer-solid-class.md#Solid.EDGE_6), [Solid.EDGE_7](primer-solid-class.md#Solid.EDGE_7), [Solid.EDGE_8](primer-solid-class.md#Solid.EDGE_8), [Solid.EDGE_9](primer-solid-class.md#Solid.EDGE_9), [Solid.EDGE_10](primer-solid-class.md#Solid.EDGE_10), [Solid.EDGE_11](primer-solid-class.md#Solid.EDGE_11) and [Solid.EDGE_12](primer-solid-class.md#Solid.EDGE_12) representing which edges of the solid are free faces |
| eid | integer | [Solid](primer-solid-class.md) number. Also see the [label](primer-solid-class.md#label) property which is an alternative name for this. |
| exists (read only) | logical | true if solid exists, false if referred to but not defined. |
| faces | constant | Bitwise code of [Solid.FACE_1](primer-solid-class.md#Solid.FACE_1), [Solid.FACE_2](primer-solid-class.md#Solid.FACE_2), [Solid.FACE_3](primer-solid-class.md#Solid.FACE_3), [Solid.FACE_4](primer-solid-class.md#Solid.FACE_4), [Solid.FACE_5](primer-solid-class.md#Solid.FACE_5) and [Solid.FACE_6](primer-solid-class.md#Solid.FACE_6) representing which faces of the solid are internal faces. Note that this is calculated from the solids that are currently visible so blanking solids will affect this property once graphics have been updated. |
| h20 | logical | If \_H20 option is set. Can be true or false |
| h27 | logical | If \_H27 option is set. Can be true or false |
| h64 | logical | If \_H64 option is set. Can be true or false |
| h8toh20 | logical | If \_H8TOH20 option is set. Can be true or false |
| h8toh27 | logical | If \_H8TOH27 option is set. Can be true or false |
| h8toh64 | logical | If \_H8TOH64 option is set. Can be true or false |
| include | integer | The [Include](primer-include-class.md) file number that the solid is in. |
| label | integer | [Solid](primer-solid-class.md) number. Also see the [eid](primer-solid-class.md#eid) property which is an alternative name for this. |
| model (read only) | integer | The [Model](primer-model-class.md) number that the solid is in. |
| n1 | integer | [Node](primer-node-class.md) number 1 |
| n10 | integer | [Node](primer-node-class.md) number 10 |
| n11 | integer | [Node](primer-node-class.md) number 11 |
| n12 | integer | [Node](primer-node-class.md) number 12 |
| n13 | integer | [Node](primer-node-class.md) number 13 |
| n14 | integer | [Node](primer-node-class.md) number 14 |
| n15 | integer | [Node](primer-node-class.md) number 15 |
| n16 | integer | [Node](primer-node-class.md) number 16 |
| n17 | integer | [Node](primer-node-class.md) number 17 |
| n18 | integer | [Node](primer-node-class.md) number 18 |
| n19 | integer | [Node](primer-node-class.md) number 19 |
| n2 | integer | [Node](primer-node-class.md) number 2 |
| n20 | integer | [Node](primer-node-class.md) number 20 |
| n21 | integer | [Node](primer-node-class.md) number 21 |
| n22 | integer | [Node](primer-node-class.md) number 22 |
| n23 | integer | [Node](primer-node-class.md) number 23 |
| n24 | integer | [Node](primer-node-class.md) number 24 |
| n25 | integer | [Node](primer-node-class.md) number 25 |
| n26 | integer | [Node](primer-node-class.md) number 26 |
| n27 | integer | [Node](primer-node-class.md) number 27 |
| n28 | integer | [Node](primer-node-class.md) number 28 |
| n29 | integer | [Node](primer-node-class.md) number 29 |
| n3 | integer | [Node](primer-node-class.md) number 3 |
| n30 | integer | [Node](primer-node-class.md) number 30 |
| n31 | integer | [Node](primer-node-class.md) number 31 |
| n32 | integer | [Node](primer-node-class.md) number 32 |
| n33 | integer | [Node](primer-node-class.md) number 33 |
| n34 | integer | [Node](primer-node-class.md) number 34 |
| n35 | integer | [Node](primer-node-class.md) number 35 |
| n36 | integer | [Node](primer-node-class.md) number 36 |
| n37 | integer | [Node](primer-node-class.md) number 37 |
| n38 | integer | [Node](primer-node-class.md) number 38 |
| n39 | integer | [Node](primer-node-class.md) number 39 |
| n4 | integer | [Node](primer-node-class.md) number 4 |
| n40 | integer | [Node](primer-node-class.md) number 40 |
| n41 | integer | [Node](primer-node-class.md) number 41 |
| n42 | integer | [Node](primer-node-class.md) number 42 |
| n43 | integer | [Node](primer-node-class.md) number 43 |
| n44 | integer | [Node](primer-node-class.md) number 44 |
| n45 | integer | [Node](primer-node-class.md) number 45 |
| n46 | integer | [Node](primer-node-class.md) number 46 |
| n47 | integer | [Node](primer-node-class.md) number 47 |
| n48 | integer | [Node](primer-node-class.md) number 48 |
| n49 | integer | [Node](primer-node-class.md) number 49 |
| n5 | integer | [Node](primer-node-class.md) number 5 |
| n50 | integer | [Node](primer-node-class.md) number 50 |
| n51 | integer | [Node](primer-node-class.md) number 51 |
| n52 | integer | [Node](primer-node-class.md) number 52 |
| n53 | integer | [Node](primer-node-class.md) number 53 |
| n54 | integer | [Node](primer-node-class.md) number 54 |
| n55 | integer | [Node](primer-node-class.md) number 55 |
| n56 | integer | [Node](primer-node-class.md) number 56 |
| n57 | integer | [Node](primer-node-class.md) number 57 |
| n58 | integer | [Node](primer-node-class.md) number 58 |
| n59 | integer | [Node](primer-node-class.md) number 59 |
| n6 | integer | [Node](primer-node-class.md) number 6 |
| n60 | integer | [Node](primer-node-class.md) number 60 |
| n61 | integer | [Node](primer-node-class.md) number 61 |
| n62 | integer | [Node](primer-node-class.md) number 62 |
| n63 | integer | [Node](primer-node-class.md) number 63 |
| n64 | integer | [Node](primer-node-class.md) number 64 |
| n7 | integer | [Node](primer-node-class.md) number 7 |
| n8 | integer | [Node](primer-node-class.md) number 8 |
| n9 | integer | [Node](primer-node-class.md) number 9 |
| nodes (read only) | integer | Number of nodes solid has |
| ns1 | integer | Scalar [Node](primer-node-class.md) number 1 |
| ns2 | integer | Scalar [Node](primer-node-class.md) number 2 |
| ns3 | integer | Scalar [Node](primer-node-class.md) number 3 |
| ns4 | integer | Scalar [Node](primer-node-class.md) number 4 |
| ns5 | integer | Scalar [Node](primer-node-class.md) number 5 |
| ns6 | integer | Scalar [Node](primer-node-class.md) number 6 |
| ns7 | integer | Scalar [Node](primer-node-class.md) number 7 |
| ns8 | integer | Scalar [Node](primer-node-class.md) number 8 |
| ortho | logical | If \_ORTHO option is set. Can be true or false |
| p21 | logical | If \_P21 option is set. Can be true or false |
| p40 | logical | If \_P40 option is set. Can be true or false |
| pid | integer | [Part](primer-part-class.md) number |
| t15 | logical | If \_T15 option is set. Can be true or false |
| t20 | logical | If \_T20 option is set. Can be true or false |
| tet4totet10 | logical | If \_TET4TOTET10 option is set. Can be true or false |
| transparency | integer | The transparency of the solid (0-100) 0% is opaque, 100% is transparent. |

| Detailed Description<br>The Solid class allows you to create, modify, edit and manipulate solid cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new Solid(Model*[[Model](primer-model-class.md)]*, options *[object]*)

Description<br>Create a new [Solid](primer-solid-class.md) object. If you are creating a 4 noded solid either only give 4 nodes or give 8 nodes but make nodes 4 to 8 the same number. If you are creating a 6 noded solid either only give 6 nodes or give 8 nodes but make nodes 5 and 6 the same number and nodes 7 and 8 the same number. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that solid will be created in

* options  (object)

Options for creating the solid 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| eid | integer | [Solid](primer-solid-class.md) number |
| nodes | array | Array of [Node](primer-node-class.md) IDs for the solid. At least 4 nodes must be given |
| pid | integer | [Part](primer-part-class.md) number |

| Returns
<br>[Solid](primer-solid-class.md) object<br>
Return type
<br>Solid |
| --- |

| Example
<br>To create a new solid in model m with label 100, part 10 and nodes 1, 2, 3, 4:<br>
```
var s = new Solid(m, {eid: 100, pid: 10, nodes: [1,2,3,4]} );
```
 |
| --- |

| new Solid(Model*[[Model](primer-model-class.md)]*, eid*[integer]*, pid*[integer]*, n1*[integer]*, n2*[integer]*, n3*[integer]*, n4*[integer]*, n5 (optional)*[integer]*, n6 (optional)*[integer]*, n7 (optional)*[integer]*, n8 (optional)*[integer]*) [deprecated]
<br>This function is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>
Description<br>Create a new [Solid](primer-solid-class.md) object. Use either 4, 6 or 8 nodes when creating a new solid. If you are creating a 4 noded solid either only give 4 nodes or give 8 nodes but make nodes 4 to 8 the same number. If you are creating a 6 noded solid either only give 6 nodes or give 8 nodes but make nodes 5 and 6 the same number and nodes 7 and 8 the same number. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that solid will be created in

* eid (integer)
 
[Solid](primer-solid-class.md) number

* pid (integer)
 
[Part](primer-part-class.md) number

* n1 (integer)
 
[Node](primer-node-class.md) number 1 or array containing all nodes (in which case other no other arguement has to be given after this)

* n2 (integer)
 
[Node](primer-node-class.md) number 2

* n3 (integer)
 
[Node](primer-node-class.md) number 3

* n4 (integer)
 
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
<br>[Solid](primer-solid-class.md) object<br>
Return type
<br>Solid |
| --- |

| Example
<br>To create a new solid in model m with label 100, part 10 and nodes 1, 2, 3, 4, 5, 6, 7, 8:<br>
```
var s = new Solid(m, 100, 10, 1, 2, 3, 4, 5, 6, 7, 8); 
```
 |
| --- |

| Details of functions 
AspectRatio()

Description<br>Calculates the aspect ratio for the solid |
| --- |

#### Arguments

No arguments

| Returns
<br>real<br>
Return type
<br>Number |
| --- |

| Example
<br>To calculate the aspect ratio for solid s:<br>
```
var ratio = s.AspectRatio();
```
 |
| --- |

* * *

| AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a solid. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the solid

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the solid s:<br>
```
s.AssociateComment(c);
```
 |
| --- |

* * *

| Blank()

Description<br>Blanks the solid |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To blank solid s:<br>
```
s.Blank();
```
 |
| --- |

* * *

| BlankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the solids in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all solids will be blanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the solids in model m:<br>
```
Solid.BlankAll(m);
```
 |
| --- |

* * *

| BlankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the flagged solids in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged solids will be blanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the solids that you want to blank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the solids in model m flagged with f:<br>
```
Solid.BlankFlagged(m, f);
```
 |
| --- |

* * *

| Blanked()

Description<br>Checks if the solid is blanked or not. |
| --- |

#### Arguments

No arguments

| Returns
<br>true if blanked, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if solid s is blanked:<br>
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
<br>To Browse solid s:<br>
```
s.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the solid. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the solid

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for solid s:<br>
```
s.ClearFlag(f);
```
 |
| --- |

* * *

| CoordsToIsoparametric(Model*[[Model](primer-model-class.md)]*, x*[real]*, y*[real]*, z*[real]*, n1*[integer]*, n2*[integer]*, n3*[integer]*, n4*[integer]*) [static]
Description<br>Calculates the isoparametric coordinates for a point on 3 or 4 noded segment |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) designated model

* x (real)
 
X coordinate of point

* y (real)
 
Y coordinate of point

* z (real)
 
Z coordinate of point

* n1 (integer)
 
node 1 of segment

* n2 (integer)
 
node 2 of segment

* n3 (integer)
 
node 3 of segment

* n4 (integer)
 
node 4 of segment

| Returns
<br>Array containing s and t isoparametric coordinates and the distance the point is from the segment If it is not possible to calculate the isoparametric coordinates null is returned.<br>
Return type
<br>Array |
| --- |

| Example
<br>To calculate the isoparametric coordinates of point (100, 100, 20) on segment defined by nodes 11,12,13,14:<br>
```
var isocoords = Solid.CoordsToIsoparametric(100, 100, 20, 11, 12, 13, 14);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the solid. The target include of the copied solid can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>Solid object<br>
Return type
<br>Solid |
| --- |

| Example
<br>To copy solid s into solid z:<br>
```
var z = s.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a solid |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the solid will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>Solid object (or null if not made).<br>
Return type
<br>Solid |
| --- |

| Example
<br>To start creating a solid in model m:<br>
```
var s = Solid.Create(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a solid. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the solid

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the solid s:<br>
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
<br>To Edit solid s:<br>
```
s.Edit();
```
 |
| --- |

* * *

| ElemCut(Database cross section label*[integer]*)

Description<br>Returns coordinates of the intersections between a solid and a database cross section. |
| --- |

#### Arguments

* Database cross section label (integer)
 
The label of the database cross section.

| Returns |
| --- |

Object with the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| face1 | Array of reals | An array containing the x1,y1,z1,x2,y2,z2 coordinates of the cut line on the face 1. Null if no cut on this face. |
| face2 | Array of reals | An array containing the x1,y1,z1,x2,y2,z2 coordinates of the cut line on the face 2. Null if no cut on this face. |
| face3 | Array of reals | An array containing the x1,y1,z1,x2,y2,z2 coordinates of the cut line on the face 3. Null if no cut on this face. |
| face4 | Array of reals | An array containing the x1,y1,z1,x2,y2,z2 coordinates of the cut line on the face 4. Null if no cut on this face. |
| face5 | Array of reals | An array containing the x1,y1,z1,x2,y2,z2 coordinates of the cut line on the face 5. Null if no cut on this face. |
| face6 | Array of reals | An array containing the x1,y1,z1,x2,y2,z2 coordinates of the cut line on the face 6. Null if no cut on this face. |

#### Return type

object

| Example
<br>To see if the database cross section 200 cuts solid s and at which points it cuts face 3 of the solid:<br>
```

var data = s.ElemCut(200);
var face = data.face3;
if(face)
{
   var point1_x = face[0];
   var point1_y = face[1];
   var point1_z = face[2];
   var point2_x = face[3];
   var point2_y = face[4];
   var point2_z = face[5];
} 
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for solid. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for solid s:<br>
```
s.Error("My custom error");
```
 |
| --- |

* * *

| ExtractColour()

Description<br>Extracts the **actual** colour used for solid.<br> By default in PRIMER many entities such as elements get their colour automatically from the part that they are in. PRIMER cycles through 13 default colours based on the label of the entity. In this case the solid [colour](primer-solid-class.md#colour) property will return the value [Colour.PART](primer-colour-class.md#Colour.PART) instead of the actual colour. This method will return the actual colour which is used for drawing the solid. |
| --- |

#### Arguments

No arguments

| Returns
<br>colour value (integer)<br>
Return type
<br>Number |
| --- |

| Example
<br>To return the colour used for drawing solid s:<br>
```
var colour = s.ExtractColour();
```
 |
| --- |

* * *

| FindSolidInBox(Model*[[Model](primer-model-class.md)]*, xmin*[real]*, xmax*[real]*, ymin*[real]*, ymax*[real]*, zmin*[real]*, zmax*[real]*, flag (optional)*[integer]*, excl (optional)*[integer]*, vis\_only (optional)*[integer]*) [static]
Description<br>Returns an array of Solid objects for the solids within a box. Please note this function provides a list of all solids that could potentially be in the box (using computationally cheap bounding box comparison) it is not a rigorous test of whether the solid is actually in the box. This may include solids that are ostensibly outside box. The user should apply their own test. (this function is intended to provide an upper bound of elems to test) Setting the "excl" flag will require that the solid is fully contained but this may not capture all the solids you want to process. |
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
 
Optional flag to restrict solids considered, if 0 all solids considered

* excl (optional) (integer)
 
Optional flag ( 0) Apply inclusive selection ( 1) Apply exclusive selection inclusive selection means elements intersect box exclusive selection means elements contained in box

* vis\_only (optional) (integer)
 
Optional flag to consider visible elements only (1), if (0) all elements considered

| Returns
<br>Array of Solid objects<br>
Return type
<br>Array |
| --- |

| Example
<br>To get an array of Solid objects for flagged solids within defined box (inclusive selection)<br>
```
var s = Solid.FindSolidInBox(m, xmin, xmax, ymin, ymax, zmin, zmax, flag, 0, 0);
```
 |
| --- |

* * *

| FindSolidInit(Model*[[Model](primer-model-class.md)]*, flag (optional)*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static] [deprecated]
<br>This function is deprecated in version 20.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>
Description<br>Initialize setup so that all flagged solids in model can be tested to see if they are within box. In v20.0 this function is obsolete and the flagging bit (if required) should be specified in [Solid.FindSolidInBox()](primer-solid-class.md#Solid::FindSolidInBox) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) in which shells have been flagged

* flag (optional) ([Flag](primer-global-class.md#global::AllocateFlag))
 
Optional flag that has been set on the solids, if 0 all solids considered

| Returns
<br>No return value |
| --- |

| Example
<br>To initialize find setup for flagged solids in model m:<br>
```
Solid.FindSolidInit(m, flag);
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first solid in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first solid in

| Returns
<br>Solid object (or null if there are no solids in the model).<br>
Return type
<br>Solid |
| --- |

| Example
<br>To get the first solid in model m:<br>
```
var s = Solid.First(m);
```
 |
| --- |

* * *

| FirstFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the first free solid label in the model. Also see [Solid.LastFreeLabel()](primer-solid-class.md#Solid::LastFreeLabel), [Solid.NextFreeLabel()](primer-solid-class.md#Solid::NextFreeLabel) and [Model.FirstFreeItemLabel()](primer-model-class.md#Model::FirstFreeItemLabel). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first free solid label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *First free in layer* in editing panels). If omitted the whole model will be used (Equivalent to *First free* in editing panels).

| Returns
<br>Solid label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the first free solid label in model m:<br>
```
var label = Solid.FirstFreeLabel(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the solids in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all solids will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the solids

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the solids with flag f in model m:<br>
```
Solid.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the solid is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the solid

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if solid s has flag f set on it:<br>
```
if (s.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each solid in the model.<br> **Note that ForEach has been designed to make looping over solids as fast as possible and so has some limitations. Firstly, a single temporary Solid object is created and on each function call it is updated with the current solid data. This means that you should not try to store the Solid object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new solids inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all solids are in

* func (function)
 
Function to call for each solid

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the solids in model m:<br>
```
Solid.ForEach(m, test);
function test(s)
{
// s is Solid object
}
```
<br><br>To call function test for all of the solids in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
Solid.ForEach(m, test, data);
function test(s, extra)
{
// s is Solid object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Solid objects or properties for all of the solids in a model in PRIMER. If the optional property argument is not given then an array of Solid objects is returned. If the property argument is given, that property value for each solid is returned in the array instead of a Solid object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get solids from

* property (optional) (string)
 
Name for property to get for all solids in the model

| Returns
<br>Array of Solid objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Solid objects for all of the solids in model m:<br>
```
var a = Solid.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each solid in model m:<br>
```
var a = Solid.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a solid. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the solid s:<br>
```
var comm_array = s.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Solid objects for all of the flagged solids in a model in PRIMER If the optional property argument is not given then an array of Solid objects is returned. If the property argument is given, then that property value for each solid is returned in the array instead of a Solid object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get solids from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the solids that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged solids in the model

| Returns
<br>Array of Solid objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Solid objects for all of the solids in model m flagged with f:<br>
```
var s = Solid.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the solids in model m flagged with f:<br>
```
var a = Solid.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the Solid object for a solid ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the solid in

* number (integer)
 
number of the solid you want the Solid object for

| Returns
<br>Solid object (or null if solid does not exist).<br>
Return type
<br>Solid |
| --- |

| Example
<br>To get the Solid object for solid 100 in model m<br>
```
var s = Solid.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a Solid property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [Solid.ViewParameters()](primer-solid-class.md#Solid::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
solid property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if Solid property s.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (s.GetParameter(s.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if Solid property s.example is a parameter by using the GetParameter method:<br>
```
if (s.ViewParameters().GetParameter(s.example) ) do_something...
```
 |
| --- |

* * *

| Jacobian()

Description<br>Calculates the jacobian for the solid |
| --- |

#### Arguments

No arguments

| Returns
<br>real<br>
Return type
<br>Number |
| --- |

| Example
<br>To calculate the jacobian for solid s:<br>
```
var jacobian = s.Jacobian();
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this solid (\*SOLID, \*SOLID\_SCALAR or \*SOLID\_SCALAR\_VALUE). **Note that a carriage return is not added**. See also [Solid.KeywordCards()](primer-solid-class.md#Solid::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for solid s:<br>
```
var key = s.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the solid. **Note that a carriage return is not added**. See also [Solid.Keyword()](primer-solid-class.md#Solid::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for solid s:<br>
```
var cards = s.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last solid in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last solid in

| Returns
<br>Solid object (or null if there are no solids in the model).<br>
Return type
<br>Solid |
| --- |

| Example
<br>To get the last solid in model m:<br>
```
var s = Solid.Last(m);
```
 |
| --- |

* * *

| LastFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the last free solid label in the model. Also see [Solid.FirstFreeLabel()](primer-solid-class.md#Solid::FirstFreeLabel), [Solid.NextFreeLabel()](primer-solid-class.md#Solid::NextFreeLabel) and see [Model.LastFreeItemLabel()](primer-model-class.md#Model::LastFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last free solid label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest free in layer* in editing panels). If omitted the whole model will be used.

| Returns
<br>Solid label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the last free solid label in model m:<br>
```
var label = Solid.LastFreeLabel(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next solid in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Solid object (or null if there are no more solids in the model).<br>
Return type
<br>Solid |
| --- |

| Example
<br>To get the solid in model m after solid s:<br>
```
var s = s.Next();
```
 |
| --- |

* * *

| NextFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the next free (highest+1) solid label in the model. Also see [Solid.FirstFreeLabel()](primer-solid-class.md#Solid::FirstFreeLabel), [Solid.LastFreeLabel()](primer-solid-class.md#Solid::LastFreeLabel) and [Model.NextFreeItemLabel()](primer-model-class.md#Model::NextFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get next free solid label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest+1 in layer* in editing panels). If omitted the whole model will be used (Equivalent to *Highest+1* in editing panels).

| Returns
<br>Solid label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the next free solid label in model m:<br>
```
var label = Solid.NextFreeLabel(m);
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a solid. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only solids from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only solids that are flagged with *limit* can be selected. If omitted, or null, any solids from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[Solid](primer-solid-class.md) object (or null if not picked)<br>
Return type
<br>Solid |
| --- |

| Example
<br>To pick a solid from model m giving the prompt 'Pick solid from screen':<br>
```
var s = Solid.Pick('Pick solid from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous solid in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Solid object (or null if there are no more solids in the model).<br>
Return type
<br>Solid |
| --- |

| Example
<br>To get the solid in model m before solid s:<br>
```
var s = s.Previous();
```
 |
| --- |

* * *

| RenumberAll(Model*[[Model](primer-model-class.md)]*, start*[integer]*) [static]
Description<br>Renumbers all of the solids in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all solids will be renumbered in

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the solids in model m, from 1000000:<br>
```
Solid.RenumberAll(m, 1000000);
```
 |
| --- |

* * *

| RenumberFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*) [static]
Description<br>Renumbers all of the flagged solids in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged solids will be renumbered in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the solids that you want to renumber

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the solids in model m flagged with f, from 1000000:<br>
```
Solid.RenumberFlagged(m, f, 1000000);
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select solids using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting solids

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only solids from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only solids that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any solids can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of solids selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select solids from model m, flagging those selected with flag f, giving the prompt 'Select solids':<br>
```
Solid.Select(f, 'Select solids', m);
```
<br><br>To select solids, flagging those selected with flag f but limiting selection to solids flagged with flag l, giving the prompt 'Select solids':<br>
```
Solid.Select(f, 'Select solids', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the solid. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the solid

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for solid s:<br>
```
s.SetFlag(f);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the solid. The solid will be sketched until you either call [Solid.Unsketch()](primer-solid-class.md#Solid::Unsketch), [Solid.UnsketchAll()](primer-solid-class.md#Solid::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the solid is sketched. If omitted redraw is true. If you want to sketch several solids and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch solid s:<br>
```
s.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged solids in the model. The solids will be sketched until you either call [Solid.Unsketch()](primer-solid-class.md#Solid::Unsketch), [Solid.UnsketchFlagged()](primer-solid-class.md#Solid::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged solids will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the solids that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the solids are sketched. If omitted redraw is true. If you want to sketch flagged solids several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all solids flagged with flag in model m:<br>
```
Solid.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| TetCollapse()

Description<br>Calculates the tetrahedral collapse for the solid |
| --- |

#### Arguments

No arguments

| Returns
<br>real<br>
Return type
<br>Number |
| --- |

| Example
<br>To calculate the tet collapse for solid s:<br>
```
var tet collapse = s.TetCollapse();
```
 |
| --- |

* * *

| TiedNodeCheck(Contact label*[integer]*, Flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, Option1*[integer]*, Option2*[integer]*)

Description<br>Checks if nodes of solid are tied by contact or directly attached (non-zero option1). |
| --- |

#### Arguments

* Contact label (integer)
 
The label of the tied contact. If zero the tied contact is found for the solid by reverse lookup.

* Flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
flag bit

* Option1 (integer)
 
Directly tied node (logical OR) 0:NONE 1:NRB/C\_EXNO 2:BEAM 4:SHELL 8:SOLID 16:TSHELL

* Option2 (integer)
 
0:No action 1:report error if directly attached node (acc. option1) also captured by contact

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To check if all nodes of solid h are tied by contact 200 or attach directly to constraint or shell:<br>
```
var message = h.TiedNodeCheck(200, flag, 1|4, 1)
```
 |
| --- |

* * *

| Timestep()

Description<br>Calculates the timestep for the solid |
| --- |

#### Arguments

No arguments

| Returns
<br>real<br>
Return type
<br>Number |
| --- |

| Example
<br>To calculate the timestep for solid s:<br>
```
var timestep = s.Timestep();
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of solids in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing solids should be counted. If false or omitted
referenced but undefined solids will also be included in the total.

| Returns
<br>number of solids<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of solids in model m:<br>
```
var total = Solid.Total(m);
```
 |
| --- |

* * *

| Unblank()

Description<br>Unblanks the solid |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank solid s:<br>
```
s.Unblank();
```
 |
| --- |

* * *

| UnblankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the solids in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all solids will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the solids in model m:<br>
```
Solid.UnblankAll(m);
```
 |
| --- |

* * *

| UnblankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the flagged solids in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the flagged solids will be unblanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the solids that you want to unblank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the solids in model m flagged with f:<br>
```
Solid.UnblankFlagged(m, f);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the solids in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all solids will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the solids

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the solids in model m:<br>
```
Solid.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the solid. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the solid is unsketched. If omitted redraw is true. If you want to unsketch several solids and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch solid s:<br>
```
s.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all solids. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all solids will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the solids are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all solids in model m:<br>
```
Solid.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged solids in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all solids will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the solids that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the solids are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all solids flagged with flag in model m:<br>
```
Solid.UnsketchAll(m, flag);
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
<br>[Solid](primer-solid-class.md) object.<br>
Return type
<br>Solid |
| --- |

| Example
<br>To check if Solid property s.example is a parameter by using the [Solid.GetParameter()](primer-solid-class.md#Solid::GetParameter) method:<br>
```
if (s.ViewParameters().GetParameter(s.example) ) do_something...
```
 |
| --- |

* * *

| Volume()

Description<br>Calculates the volume for the solid |
| --- |

#### Arguments

No arguments

| Returns
<br>real<br>
Return type
<br>Number |
| --- |

| Example
<br>To calculate the volume for solid s:<br>
```
var volume = s.Volume();
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for solid. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for solid s:<br>
```
s.Warning("My custom warning");
```
 |
| --- |

* * *

| Warpage()

Description<br>Calculates the warpage for the solid |
| --- |

#### Arguments

No arguments

| Returns
<br>real<br>
Return type
<br>Number |
| --- |

| Example
<br>To calculate the warpage for solid s:<br>
```
var warpage = s.Warpage();
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this solid. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for solid s:<br>
```
var xrefs = s.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the solid data in keyword format. Note that this contains the keyword header and the keyword cards. See also [Solid.Keyword()](primer-solid-class.md#Solid::Keyword) and [Solid.KeywordCards()](primer-solid-class.md#Solid::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for solid s in keyword format<br>
```
var str = s.toString();
```
 |
| --- |

* * *