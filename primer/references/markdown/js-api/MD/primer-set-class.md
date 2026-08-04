# Set (SetK) class

The Set class gives you access to sets in PRIMER. [More...](primer-set-class.md#Set_details)

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

* [BlankAll](primer-set-class.md#Set::BlankAll)(Model*[[Model](primer-model-class.md)]*, type (optional)*[constant]*, redraw (optional)*[boolean]*)
* [BlankFlagged](primer-set-class.md#Set::BlankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, type (optional)*[constant]*, redraw (optional)*[boolean]*)
* [Create](primer-set-class.md#Set::Create)(Model*[[Model](primer-model-class.md)]*, type*[constant]*, modal (optional)*[boolean]*)
* [First](primer-set-class.md#Set::First)(Model*[[Model](primer-model-class.md)]*, type*[constant]*)
* [FirstFreeLabel](primer-set-class.md#Set::FirstFreeLabel)(Model*[[Model](primer-model-class.md)]*, type*[constant]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [FlagAll](primer-set-class.md#Set::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, type (optional)*[constant]*)
* [GetAll](primer-set-class.md#Set::GetAll)(Model*[[Model](primer-model-class.md)]*, type*[constant]*)
* [GetFlagged](primer-set-class.md#Set::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, type*[constant]*)
* [GetFromID](primer-set-class.md#Set::GetFromID)(Model*[[Model](primer-model-class.md)]*, set number*[integer]*, type*[constant]*)
* [Last](primer-set-class.md#Set::Last)(Model*[[Model](primer-model-class.md)]*, type*[constant]*)
* [LastFreeLabel](primer-set-class.md#Set::LastFreeLabel)(Model*[[Model](primer-model-class.md)]*, type*[constant]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [NextFreeLabel](primer-set-class.md#Set::NextFreeLabel)(Model*[[Model](primer-model-class.md)]*, type*[constant]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [Pick](primer-set-class.md#Set::Pick)(type*[constant]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [RenumberAll](primer-set-class.md#Set::RenumberAll)(Model*[[Model](primer-model-class.md)]*, start*[integer]*, type (optional)*[constant]*)
* [RenumberFlagged](primer-set-class.md#Set::RenumberFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*, type (optional)*[constant]*)
* [Select](primer-set-class.md#Set::Select)(type*[constant]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-set-class.md#Set::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, type (optional)*[constant]*, redraw (optional)*[boolean]*)
* [UnblankAll](primer-set-class.md#Set::UnblankAll)(Model*[[Model](primer-model-class.md)]*, type (optional)*[constant]*, redraw (optional)*[boolean]*)
* [UnblankFlagged](primer-set-class.md#Set::UnblankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, type (optional)*[constant]*, redraw (optional)*[boolean]*)
* [UnflagAll](primer-set-class.md#Set::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, type (optional)*[constant]*)
* [UnsketchAll](primer-set-class.md#Set::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, type (optional)*[constant]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-set-class.md#Set::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, type (optional)*[constant]*, redraw (optional)*[boolean]*)

## Member functions

* [Add](primer-set-class.md#Set::Add)(id1*[integer]*, id2 (optional)*[integer]*, id3 (optional)*[integer]*, id4 (optional)*[integer]*)
* [AddCollectChild](primer-set-class.md#Set::AddCollectChild)(set*[[Set](primer-set-class.md)]*)
* [AddFlagged](primer-set-class.md#Set::AddFlagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [AllItems](primer-set-class.md#Set::AllItems)()
* [Blanked](primer-set-class.md#Set::Blanked)()
* [Browse](primer-set-class.md#Set::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-set-class.md#Set::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Contains](primer-set-class.md#Set::Contains)(id*[integer]*)
* [Copy](primer-set-class.md#Set::Copy)(range (optional)*[boolean]*)
* [Edit](primer-set-class.md#Set::Edit)(modal (optional)*[boolean]*)
* [Empty](primer-set-class.md#Set::Empty)()
* [Error](primer-set-class.md#Set::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-set-class.md#Set::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetCollectChild](primer-set-class.md#Set::GetCollectChild)(number*[Integer]*)
* [GetGeneralData](primer-set-class.md#Set::GetGeneralData)(index*[Integer]*)
* [Keyword](primer-set-class.md#Set::Keyword)()
* [KeywordCards](primer-set-class.md#Set::KeywordCards)()
* [Next](primer-set-class.md#Set::Next)()
* [Previous](primer-set-class.md#Set::Previous)()
* [RebuildCache](primer-set-class.md#Set::RebuildCache)()
* [Remove](primer-set-class.md#Set::Remove)(id*[integer]*)
* [RemoveFlagged](primer-set-class.md#Set::RemoveFlagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [RemoveGeneralData](primer-set-class.md#Set::RemoveGeneralData)(index*[Integer]*)
* [SetFlag](primer-set-class.md#Set::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [SetGeneralData](primer-set-class.md#Set::SetGeneralData)(index*[Integer]*, data*[Array of data]*)
* [Sketch](primer-set-class.md#Set::Sketch)(redraw (optional)*[boolean]*)
* [Spool](primer-set-class.md#Set::Spool)()
* [StartSpool](primer-set-class.md#Set::StartSpool)(raw (optional)*[boolean]*)
* [Unsketch](primer-set-class.md#Set::Unsketch)(redraw (optional)*[boolean]*)
* [Warning](primer-set-class.md#Set::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-set-class.md#Set::Xrefs)()
* [toString](primer-set-class.md#Set::toString)()

## Set constants

| **Name** | **Description** |
| --- | --- |
| Set.2D\_SEGMENT | This constant is deprecated in version 11.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Please use [Set.SEGMENT_2D](primer-set-class.md#Set.SEGMENT_2D) instead. [deprecated] |
| Set.ADD | Set type is \*SET\_XYZ\_ADD. |
| Set.ALL\_TYPES | All set types - used in blanking etc. |
| Set.BEAM | Set beam type |
| Set.BOX | Set box type |
| Set.DISCRETE | Set discrete type |
| Set.GENERAL | Set type is \*SET\_XYZ\_GENERAL. |
| Set.GENERATE | Set type is \*SET\_XYZ\_GENERATE. |
| Set.IGA\_EDGE | Set IGA edge uvw/xyz type |
| Set.IGA\_FACE | Set IGA face uvw/xyz type |
| Set.IGA\_POINT\_UVW | Set IGA point uvw type |
| Set.IGA\_UVW | Set UVW option for \*SET\_IGA\_EDGE and \*SET\_IGA\_FACE. |
| Set.IGA\_XYZ | Set XYZ option for \*SET\_IGA\_EDGE and \*SET\_IGA\_FACE. |
| Set.INTERSECT | Set type is \*SET\_XYZ\_INTERSECT. |
| Set.MM\_GROUP | Set multi-material group type |
| Set.MODE | Set mode type |
| Set.NODE | Set node type |
| Set.PART | Set part type |
| Set.PART\_TREE | Set part tree type |
| Set.PERI\_LAMINATE | Set Peri Laminate type |
| Set.SEGMENT | Set segment type |
| Set.SEGMENT\_2D | Set segment 2d type |
| Set.SHELL | Set shell type |
| Set.SOLID | Set solid type |
| Set.TSHELL | Set thick shell type |

## Set properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| add | logical | If \_ADD option is active. |
| advanced (read only) | logical | If \_ADD\_ADVANCED option is active. |
| collect | logical | If \_COLLECT option is active. To manage \_COLLECT sets PRIMER creates a 'parent' set that can be used to sketch/view all of the items from the \_COLLECT sets with the same label. PRIMER then manages each \_COLLECT set with the same label as a 'child' of this 'parent' set. Also see [collect_children](primer-set-class.md#collect_children) and [GetCollectChild](primer-set-class.md#Set::GetCollectChild). If the collect property is unset for a child collect set then
a new label will be assigned for the child set. If the collect property is unset for a parent collect set
then all of the child sets will be reassigned new labels. |
| collect\_children (read only) | integer | The number of child \_COLLECT sets if \_COLLECT option is active. |
| colour | [Colour](primer-colour-class.md) | The colour of the set |
| column (read only) | logical | If \_COLUMN option is active. |
| da1 | real | The first default attribute for the set (only valid for Set.IGA\_EDGE, Set.IGA\_FACE, Set.IGA\_POINT\_UVW, Set.NODE, Set.PART, Set.SEGMENT, Set.SEGMENT\_2D and Set.SHELL) |
| da2 | real | The second default attribute for the set (only valid for Set.IGA\_EDGE, Set.IGA\_FACE, Set.IGA\_POINT\_UVW, Set.NODE, Set.PART, Set.SEGMENT, Set.SEGMENT\_2D and Set.SHELL) |
| da3 | real | The third default attribute for the set (only valid for Set.IGA\_EDGE, Set.IGA\_FACE, Set.IGA\_POINT\_UVW, Set.NODE, Set.PART, Set.SEGMENT, Set.SEGMENT\_2D and Set.SHELL) |
| da4 | real | The fourth default attribute for the set (only valid for Set.IGA\_EDGE, Set.IGA\_FACE, Set.IGA\_POINT\_UVW, Set.NODE, Set.PART, Set.SEGMENT, Set.SEGMENT\_2D and Set.SHELL) |
| exists (read only) | logical | true if set exists, false if referred to but not defined. |
| general | logical | If \_GENERAL option is active. |
| general\_lines (read only) | integer | Number of lines of data for \_GENERAL set (if \_GENERAL option is active). |
| generate | logical | If \_GENERATE option is active. |
| iga\_opt (read only) | constant | Option for IGA\_EGDE and IGA\_FACE. Can be [Set.IGA_UVW](primer-set-class.md#Set.IGA_UVW), [Set.IGA_XYZ](primer-set-class.md#Set.IGA_XYZ) |
| include | integer | The [Include](primer-include-class.md) file number that the set is in. |
| increment (read only) | logical | If \_GENERATE\_INCREMENT option is active. |
| intersect | logical | If \_INTERSECT option is active. |
| its | integer | Coupling type across different scales in two-scale cosimulation (only valid for Set.SEGMENT or Set.NODE). |
| label | integer | [Set](primer-set-class.md) number. Also see the [sid](primer-set-class.md#sid) property which is an alternative name for this. |
| model | integer | The [Model](primer-model-class.md) number that the set is in. |
| sid | integer | [Set](primer-set-class.md) number. Also see the [label](primer-set-class.md#label) property which is an alternative name for this. |
| smooth (read only) | logical | If \_LIST\_SMOOTH option is active. |
| solver | string | Solver to attach to set. Can be "MECH", "CESE", "EM", "ICFD" or blank (only valid for Set.IGA\_EDGE, Set.IGA\_FACE, Set.IGA\_POINT\_UVW, Set.NODE, Set.PART, Set.SEGMENT and Set.SOLID). |
| title | string | [Set](primer-set-class.md) title |
| total (read only) | integer | The total number of items in the set. Note that for \_GENERAL and \_GENERATE sets this is expensive to compute. |
| transparency | integer | The transparency of the set (0-100) 0% is opaque, 100% is transparent. |
| type (read only) | constant | Set type. Can be [Set.BEAM](primer-set-class.md#Set.BEAM), [Set.BOX](primer-set-class.md#Set.BOX) [Set.DISCRETE](primer-set-class.md#Set.DISCRETE), [Set.IGA_EDGE](primer-set-class.md#Set.IGA_EDGE), [Set.IGA_FACE](primer-set-class.md#Set.IGA_FACE), [Set.IGA_POINT_UVW](primer-set-class.md#Set.IGA_POINT_UVW), [Set.MM_GROUP](primer-set-class.md#Set.MM_GROUP), [Set.MODE](primer-set-class.md#Set.MODE), [Set.NODE](primer-set-class.md#Set.NODE), [Set.PART](primer-set-class.md#Set.PART), [Set.PART_TREE](primer-set-class.md#Set.PART_TREE), [Set.PERI_LAMINATE](primer-set-class.md#Set.PERI_LAMINATE), [Set.SEGMENT](primer-set-class.md#Set.SEGMENT), [Set.SEGMENT_2D](primer-set-class.md#Set.SEGMENT_2D), [Set.SHELL](primer-set-class.md#Set.SHELL), [Set.SOLID](primer-set-class.md#Set.SOLID) or [Set.TSHELL](primer-set-class.md#Set.TSHELL) |

| Detailed Description<br>The Set class allows you to create, modify, edit and manipulate sets.<br>See the documentation below for more details.<br><br>ECMAScript 6 defines a Set class for Set objects so unfortunately this clashes with the Set class<br>we have defined in PRIMER for the Ansys LS-DYNA keyword \*SET.<br>By default the Set class is used for the Ansys LS-DYNA keyword \*SET but this can be changed by using the preference 'set\_class' in the preferences editor.<br><br>The Ansys LS-DYNA keyword \*SET class is also available (regardless of whether Set is used for the keyword<br>or ECMAScript 6 Set objects) by using SetK (similarly to Nrb being an alias for the NodalRigidBody class).<br><br>
<br>For convenience "SetK" can also be used as the class name instead of "Set". |
| --- |

| Constructor
new Set(Model*[[Model](primer-model-class.md)]*, details*[object]*)

Description<br>Create a new [Set](primer-set-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that set will be created in

* details (object)

Details for creating the [Set](primer-set-class.md) 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| iga\_opt (optional) | constant | IGA type. Can be [Set.IGA_UVW](primer-set-class.md#Set.IGA_UVW) or [Set.IGA_XYZ](primer-set-class.md#Set.IGA_XYZ). Only valid for set types [Set.IGA_EDGE](primer-set-class.md#Set.IGA_EDGE) and [Set.IGA_FACE](primer-set-class.md#Set.IGA_FACE) where it must be given |
| option (optional) | constant | Set type. Can be [Set.ADD](primer-set-class.md#Set.ADD), [Set.INTERSECT](primer-set-class.md#Set.INTERSECT), [Set.GENERAL](primer-set-class.md#Set.GENERAL) or [Set.GENERATE](primer-set-class.md#Set.GENERATE) |
| sid | integer | [Set](primer-set-class.md) number |
| title (optional) | string | Title for the set |
| type | constant | Type of set. Can be [Set.BEAM](primer-set-class.md#Set.BEAM), [Set.BOX](primer-set-class.md#Set.BOX), [Set.DISCRETE](primer-set-class.md#Set.DISCRETE), [Set.IGA_EDGE](primer-set-class.md#Set.IGA_EDGE), [Set.IGA_FACE](primer-set-class.md#Set.IGA_FACE), [Set.IGA_POINT_UVW](primer-set-class.md#Set.IGA_POINT_UVW), [Set.MM_GROUP](primer-set-class.md#Set.MM_GROUP), [Set.MODE](primer-set-class.md#Set.MODE), [Set.NODE](primer-set-class.md#Set.NODE), [Set.PART](primer-set-class.md#Set.PART), [Set.PART_TREE](primer-set-class.md#Set.PART_TREE), [Set.PERI_LAMINATE](primer-set-class.md#Set.PERI_LAMINATE), [Set.SEGMENT](primer-set-class.md#Set.SEGMENT), [Set.SEGMENT_2D](primer-set-class.md#Set.SEGMENT_2D), [Set.SHELL](primer-set-class.md#Set.SHELL), [Set.SOLID](primer-set-class.md#Set.SOLID) or [Set.TSHELL](primer-set-class.md#Set.TSHELL) |

| Returns
<br>[Set](primer-set-class.md) object<br>
Return type
<br>Set |
| --- |

| Example
<br>To create a new node set in model m with label 100:<br>
```
var s = new Set(m, {sid:100, type:Set.NODE});
```
<br>To create a new \*NODE\_SET\_ADD in model m with label 101:<br>
```
var s = new Set(m, {sid:101, type:Set.NODE, title:"", option:Set.ADD});
```
<br>To create a new \*SET\_IGA\_EDGE\_XYZ in model m with label 102:<br>
```
var s = new Set(m, {sid:102, type:Set.IGA_EDGE, title:"Set of IGA_EDGE_XYZ", iga_opt:Set.IGA_XYZ});
```
 |
| --- |

| new Set(Model*[[Model](primer-model-class.md)]*, sid*[integer]*, type*[constant]*, title (optional)*[string]*, option (optional)*[constant]*) [deprecated]
<br>This function is deprecated in version 22.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>
Description<br>Create a new [Set](primer-set-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that set will be created in

* sid (integer)
 
[Set](primer-set-class.md) number

* type (constant)
 
Type of set. Can be [Set.BEAM](primer-set-class.md#Set.BEAM), [Set.BOX](primer-set-class.md#Set.BOX), [Set.DISCRETE](primer-set-class.md#Set.DISCRETE), [Set.MM_GROUP](primer-set-class.md#Set.MM_GROUP), [Set.MODE](primer-set-class.md#Set.MODE), [Set.NODE](primer-set-class.md#Set.NODE), [Set.PART](primer-set-class.md#Set.PART), [Set.PART_TREE](primer-set-class.md#Set.PART_TREE), [Set.PERI_LAMINATE](primer-set-class.md#Set.PERI_LAMINATE), [Set.SEGMENT](primer-set-class.md#Set.SEGMENT), [Set.SEGMENT_2D](primer-set-class.md#Set.SEGMENT_2D), [Set.SHELL](primer-set-class.md#Set.SHELL), [Set.SOLID](primer-set-class.md#Set.SOLID) or [Set.TSHELL](primer-set-class.md#Set.TSHELL)

* title (optional) (string)
 
Title for the set

* option (optional) (constant)
 
Set type. Can be [Set.ADD](primer-set-class.md#Set.ADD), [Set.INTERSECT](primer-set-class.md#Set.INTERSECT), [Set.GENERAL](primer-set-class.md#Set.GENERAL) or [Set.GENERATE](primer-set-class.md#Set.GENERATE)

| Returns
<br>[Set](primer-set-class.md) object<br>
Return type
<br>Set |
| --- |

| Example
<br>To create a new node set in model m with label 100:<br>
```
var s = new Set(m, 100, Set.NODE);
```
<br>To create a new \*NODE\_SET\_ADD in model m with label 101:<br>
```
var s = new Set(m, 101, Set.NODE,"", Set.ADD);
```
 |
| --- |

| Details of functions 
Add(id1*[integer]*, id2 (optional)*[integer]*, id3 (optional)*[integer]*, id4 (optional)*[integer]*)

Description<br>Adds an item to the set. **This cannot be used for \_COLUMN and \_GENERAL sets**. For segment sets four nodes must be given to define a segment to add to the set. |
| --- |

#### Arguments

* id1 (integer)
 
id of the item to add to the set (normal, \_ADD or \_ADD\_ADVANCED sets) or Start ID (\_GENERATE sets)

* id2 (optional) (integer)
 
type of the item to add to the set [1-7] (\_ADD\_ADVANCED sets) or End ID (\_GENERATE sets)
(only for SEGMENT, \_GENERATE, \_GENERATE\_INCREMENT and \_ADD\_ADVANCED sets)

* id3 (optional) (integer)
 
Increment for \_GENERATE\_INCREMENT sets, otherwise id of the item to add to the set
(only for SEGMENT and \_GENERATE\_INCREMENT sets)

* id4 (optional) (integer)
 
id of the item to add to the set
(only for SEGMENT sets)

| Returns
<br>No return value |
| --- |

| Example
<br>To add node 10 to node set ns:<br>
```
ns.Add(10);
```
<br><br>To add segment 10, 11, 12, 13 to segment set ss:<br>
```
ss.Add(10, 11, 12, 13);
```
<br><br><br>SET PART TREE is a special type of set, which can contain PARTs (negative) and/or child SET PART TREEs (positive).<br><br>To add part 10 to SET PART TREE spt:<br>
```
spt.Add(-10);
```
<br><br>To add child SET PART TREE 20 to SET PART TREE spt:<br>
```
spt.Add(20);
```
 |
| --- |

* * *

| AddCollectChild(set*[[Set](primer-set-class.md)]*)

Description<br>Adds a child collect set to the set. The child set label will be changed to be the same as the parent set and it will become a child. Also see [Set.collect_children](primer-set-class.md#collect_children) and [Set.GetCollectChild](primer-set-class.md#Set::GetCollectChild). |
| --- |

#### Arguments

* set ([Set](primer-set-class.md))
 
[Set](primer-set-class.md) to be added as a child collect set.

| Returns
<br>No return value |
| --- |

| Example
<br>To make set ns2 to node set ns:<br>
```
ns.AddCollectChild(ns2);
```
 |
| --- |

* * *

| AddFlagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Adds flagged items to the set. **This cannot be used for \_GENERAL or \_GENERATE sets** and **cannot be used for segment sets** |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag for items to add to the set

| Returns
<br>No return value |
| --- |

| Example
<br>To add any nodes flagged with flag f to node set ns:<br>
```
ns.AddFlagged(f);
```
 |
| --- |

* * *

| AllItems()

Description<br>Returns an array containing all of the items in the set, decomposing any complex set definitions as required to give those items. For [Set.SEGMENT](primer-set-class.md#Set.SEGMENT) sets, each index in the array is an array containing the segment node IDs. For all other set types each index in the array is an item ID |
| --- |

#### Arguments

No arguments

| Returns
<br>array<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the items in set s:<br>
```
var items = s.AllItems();
```
 |
| --- |

* * *

| BlankAll(Model*[[Model](primer-model-class.md)]*, type (optional)*[constant]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the sets in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all sets will be blanked in

* type (optional) (constant)
 
Type of sets to blank. Can be [Set.BEAM](primer-set-class.md#Set.BEAM), [Set.BOX](primer-set-class.md#Set.BOX), [Set.DISCRETE](primer-set-class.md#Set.DISCRETE), [Set.MM_GROUP](primer-set-class.md#Set.MM_GROUP), [Set.NODE](primer-set-class.md#Set.NODE), [Set.PART](primer-set-class.md#Set.PART), [Set.PART_TREE](primer-set-class.md#Set.PART_TREE), [Set.PERI_LAMINATE](primer-set-class.md#Set.PERI_LAMINATE), [Set.SEGMENT](primer-set-class.md#Set.SEGMENT), [Set.SEGMENT_2D](primer-set-class.md#Set.SEGMENT_2D), [Set.SHELL](primer-set-class.md#Set.SHELL), [Set.SOLID](primer-set-class.md#Set.SOLID) or [Set.TSHELL](primer-set-class.md#Set.TSHELL). [Set.ALL_TYPES](primer-set-class.md#Set.ALL_TYPES). If omitted sets of all types will be blanked.

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the sets in model m:<br>
```
Set.BlankAll(m);
```
<br><br>To blank all of the node sets in model m:<br>
```
Set.BlankAll(m, Set.NODE);
```
 |
| --- |

* * *

| BlankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, type (optional)*[constant]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the flagged sets in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged sets will be blanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the sets that you want to blank

* type (optional) (constant)
 
Type of sets to blank. Can be [Set.BEAM](primer-set-class.md#Set.BEAM), [Set.BOX](primer-set-class.md#Set.BOX), [Set.DISCRETE](primer-set-class.md#Set.DISCRETE), [Set.MM_GROUP](primer-set-class.md#Set.MM_GROUP), [Set.NODE](primer-set-class.md#Set.NODE), [Set.PART](primer-set-class.md#Set.PART), [Set.PART_TREE](primer-set-class.md#Set.PART_TREE), [Set.PERI_LAMINATE](primer-set-class.md#Set.PERI_LAMINATE), [Set.SEGMENT](primer-set-class.md#Set.SEGMENT), [Set.SEGMENT_2D](primer-set-class.md#Set.SEGMENT_2D), [Set.SHELL](primer-set-class.md#Set.SHELL), [Set.SOLID](primer-set-class.md#Set.SOLID) or [Set.TSHELL](primer-set-class.md#Set.TSHELL). [Set.ALL_TYPES](primer-set-class.md#Set.ALL_TYPES). If set, only flagged sets of this type will be blanked. If omitted flagged sets of all types will be blanked.

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the sets in model m flagged with f:<br>
```
Set.BlankFlagged(m, f);
```
<br><br>To blank all of the node sets in model m flagged with f:<br>
```
Set.BlankFlagged(m, f, Set.NODE);
```
 |
| --- |

* * *

| Blanked()

Description<br>Checks if the set is blanked or not. |
| --- |

#### Arguments

No arguments

| Returns
<br>true if blanked, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if set s is blanked:<br>
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
<br>No return value |
| --- |

| Example
<br>To browse set s:<br>
```
var s.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the set. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the set

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for set s:<br>
```
s.ClearFlag(f);
```
 |
| --- |

* * *

| Contains(id*[integer]*)

Description<br>Checks if an item is in the set. **This cannot be used for ADD\_ADVANCED, \_GENERAL or \_GENERATE sets** and **cannot be used for segment sets** |
| --- |

#### Arguments

* id (integer)
 
id of the item to check.

| Returns
<br>true if item is in set, false if not<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To see if node 10 is in node set ns:<br>
```
if (ns.Contains(10) )
{
    do something...
}
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the set. |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>Set object<br>
Return type
<br>Set |
| --- |

| Example
<br>To copy node net ns into node net ns1:<br>
```
var ns1 = ns.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, type*[constant]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a set. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the set will be created in

* type (constant)
 
Type of the set that you want to create. Can be [Set.BEAM](primer-set-class.md#Set.BEAM), [Set.BOX](primer-set-class.md#Set.BOX), [Set.DISCRETE](primer-set-class.md#Set.DISCRETE), [Set.IGA_EDGE](primer-set-class.md#Set.IGA_EDGE), [Set.IGA_FACE](primer-set-class.md#Set.IGA_FACE), [Set.IGA_POINT_UVW](primer-set-class.md#Set.IGA_POINT_UVW), [Set.MM_GROUP](primer-set-class.md#Set.MM_GROUP), [Set.MODE](primer-set-class.md#Set.MODE), [Set.NODE](primer-set-class.md#Set.NODE), [Set.PART](primer-set-class.md#Set.PART), [Set.PART_TREE](primer-set-class.md#Set.PART_TREE), [Set.PERI_LAMINATE](primer-set-class.md#Set.PERI_LAMINATE), [Set.SEGMENT](primer-set-class.md#Set.SEGMENT), [Set.SEGMENT_2D](primer-set-class.md#Set.SEGMENT_2D), [Set.SHELL](primer-set-class.md#Set.SHELL), [Set.SOLID](primer-set-class.md#Set.SOLID) or [Set.TSHELL](primer-set-class.md#Set.TSHELL)

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>[Set](primer-set-class.md) object (or null if not made)<br>
Return type
<br>Set |
| --- |

| Example
<br>To start creating a node set in model m:<br>
```
var s = Set.Create(m, Set.NODE);
```
 |
| --- |

* * *

| Edit(modal (optional)*[boolean]*)

Description<br>Starts an interactive editing panel to edit the set. |
| --- |

#### Arguments

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>No return value |
| --- |

| Example
<br>To edit set s:<br>
```
var s.Edit();
```
 |
| --- |

* * *

| Empty()

Description<br>Removes all items from the set. **This cannot be used for \_GENERATE sets** and **cannot be used for segment sets** |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To remove all nodes from node set ns:<br>
```
ns.Empty(f);
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for a set. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for set s:<br>
```
s.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*, type*[constant]*) [static]
Description<br>Returns the first set in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first set in

* type (constant)
 
Type of the set. Can be [Set.BEAM](primer-set-class.md#Set.BEAM), [Set.BOX](primer-set-class.md#Set.BOX), [Set.DISCRETE](primer-set-class.md#Set.DISCRETE), [Set.IGA_EDGE](primer-set-class.md#Set.IGA_EDGE), [Set.IGA_FACE](primer-set-class.md#Set.IGA_FACE), [Set.IGA_POINT_UVW](primer-set-class.md#Set.IGA_POINT_UVW), [Set.MM_GROUP](primer-set-class.md#Set.MM_GROUP), [Set.MODE](primer-set-class.md#Set.MODE), [Set.NODE](primer-set-class.md#Set.NODE), [Set.PART](primer-set-class.md#Set.PART), [Set.PART_TREE](primer-set-class.md#Set.PART_TREE), [Set.PERI_LAMINATE](primer-set-class.md#Set.PERI_LAMINATE), [Set.SEGMENT](primer-set-class.md#Set.SEGMENT), [Set.SEGMENT_2D](primer-set-class.md#Set.SEGMENT_2D), [Set.SHELL](primer-set-class.md#Set.SHELL), [Set.SOLID](primer-set-class.md#Set.SOLID) or [Set.TSHELL](primer-set-class.md#Set.TSHELL)

| Returns
<br>Set object (or null if there are no sets in the model).<br>
Return type
<br>Set |
| --- |

| Example
<br>To get the first node set in model m:<br>
```
var n = Set.First(m, Set.NODE);
```
 |
| --- |

* * *

| FirstFreeLabel(Model*[[Model](primer-model-class.md)]*, type*[constant]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the first free set label in the model. Also see [Set.LastFreeLabel()](primer-set-class.md#Set::LastFreeLabel), [Set.NextFreeLabel()](primer-set-class.md#Set::NextFreeLabel) and [Model.FirstFreeItemLabel()](primer-model-class.md#Model::FirstFreeItemLabel). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first free Set label in

* type (constant)
 
Type of the set. Can be [Set.BEAM](primer-set-class.md#Set.BEAM), [Set.BOX](primer-set-class.md#Set.BOX), [Set.DISCRETE](primer-set-class.md#Set.DISCRETE), [Set.IGA_EDGE](primer-set-class.md#Set.IGA_EDGE), [Set.IGA_FACE](primer-set-class.md#Set.IGA_FACE), [Set.IGA_POINT_UVW](primer-set-class.md#Set.IGA_POINT_UVW), [Set.MM_GROUP](primer-set-class.md#Set.MM_GROUP), [Set.MODE](primer-set-class.md#Set.MODE), [Set.NODE](primer-set-class.md#Set.NODE), [Set.PART](primer-set-class.md#Set.PART), [Set.PART_TREE](primer-set-class.md#Set.PART_TREE), [Set.PERI_LAMINATE](primer-set-class.md#Set.PERI_LAMINATE), [Set.SEGMENT](primer-set-class.md#Set.SEGMENT), [Set.SEGMENT_2D](primer-set-class.md#Set.SEGMENT_2D), [Set.SHELL](primer-set-class.md#Set.SHELL), [Set.SOLID](primer-set-class.md#Set.SOLID) or [Set.TSHELL](primer-set-class.md#Set.TSHELL)

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *First free in layer* in editing panels). If omitted the whole model will be used (Equivalent to *First free* in editing panels).

| Returns
<br>Set label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the first free node set label in model m:<br>
```
var label = Set.FirstFreeLabel(m, Set.NODE);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, type (optional)*[constant]*) [static]
Description<br>Flags all of the sets in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all sets will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the sets

* type (optional) (constant)
 
Type of the set. Can be [Set.BEAM](primer-set-class.md#Set.BEAM), [Set.BOX](primer-set-class.md#Set.BOX) [Set.DISCRETE](primer-set-class.md#Set.DISCRETE), [Set.IGA_EDGE](primer-set-class.md#Set.IGA_EDGE), [Set.IGA_FACE](primer-set-class.md#Set.IGA_FACE), [Set.IGA_POINT_UVW](primer-set-class.md#Set.IGA_POINT_UVW), [Set.MM_GROUP](primer-set-class.md#Set.MM_GROUP), [Set.MODE](primer-set-class.md#Set.MODE), [Set.NODE](primer-set-class.md#Set.NODE), [Set.PART](primer-set-class.md#Set.PART), [Set.PART_TREE](primer-set-class.md#Set.PART_TREE), [Set.PERI_LAMINATE](primer-set-class.md#Set.PERI_LAMINATE), [Set.SEGMENT](primer-set-class.md#Set.SEGMENT), [Set.SEGMENT_2D](primer-set-class.md#Set.SEGMENT_2D), [Set.SHELL](primer-set-class.md#Set.SHELL), [Set.SOLID](primer-set-class.md#Set.SOLID) or [Set.TSHELL](primer-set-class.md#Set.TSHELL). If set, only sets of this type will be flagged. If omitted sets of all types will be flagged.

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the node sets with flag f in model m:<br>
```
Set.FlagAll(m, f, Set.NODE);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the set is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the set

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if set s has flag f set on it:<br>
```
if (s.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, type*[constant]*) [static]
Description<br>Returns an array of Set objects for all of the sets in a models in PRIMER |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get sets from

* type (constant)
 
Type of the set. Can be [Set.BEAM](primer-set-class.md#Set.BEAM), [Set.BOX](primer-set-class.md#Set.BOX), [Set.DISCRETE](primer-set-class.md#Set.DISCRETE), [Set.IGA_EDGE](primer-set-class.md#Set.IGA_EDGE), [Set.IGA_FACE](primer-set-class.md#Set.IGA_FACE), [Set.IGA_POINT_UVW](primer-set-class.md#Set.IGA_POINT_UVW), [Set.MM_GROUP](primer-set-class.md#Set.MM_GROUP), [Set.MODE](primer-set-class.md#Set.MODE), [Set.NODE](primer-set-class.md#Set.NODE), [Set.PART](primer-set-class.md#Set.PART), [Set.PART_TREE](primer-set-class.md#Set.PART_TREE), [Set.PERI_LAMINATE](primer-set-class.md#Set.PERI_LAMINATE), [Set.SEGMENT](primer-set-class.md#Set.SEGMENT), [Set.SEGMENT_2D](primer-set-class.md#Set.SEGMENT_2D), [Set.SHELL](primer-set-class.md#Set.SHELL), [Set.SOLID](primer-set-class.md#Set.SOLID) or [Set.TSHELL](primer-set-class.md#Set.TSHELL)

| Returns
<br>Array of Set objects<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Set objects for all of the node sets in model m<br>
```
var n = Set.GetAll(m, Set.NODE);
```
 |
| --- |

* * *

| GetCollectChild(number*[Integer]*)

Description<br>Returns a child collect set. Also see [Set.collect_children](primer-set-class.md#collect_children) and [Set.AddCollectChild](primer-set-class.md#Set::AddCollectChild). |
| --- |

#### Arguments

* number (Integer)
 
The index of the child collect set to return. **Note that indices start at 0, not 1**

| Returns
<br>[Set](primer-set-class.md) object<br>
Return type
<br>Set |
| --- |

| Example
<br>To loop over the child collect sets for set ns:<br>
```
if (ns.collect)
{
    for (i=0; i<ns.collect_children; i++)
        var child = ns.GetCollectChild(i);
}
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, type*[constant]*) [static]
Description<br>Returns an array of Set objects for all of the flagged sets in a models in PRIMER |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get sets from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the set that you want to retrieve

* type (constant)
 
Type of the set. Can be [Set.BEAM](primer-set-class.md#Set.BEAM), [Set.BOX](primer-set-class.md#Set.BOX), [Set.DISCRETE](primer-set-class.md#Set.DISCRETE), [Set.IGA_EDGE](primer-set-class.md#Set.IGA_EDGE), [Set.IGA_FACE](primer-set-class.md#Set.IGA_FACE), [Set.IGA_POINT_UVW](primer-set-class.md#Set.IGA_POINT_UVW), [Set.MM_GROUP](primer-set-class.md#Set.MM_GROUP), [Set.MODE](primer-set-class.md#Set.MODE), [Set.NODE](primer-set-class.md#Set.NODE), [Set.PART](primer-set-class.md#Set.PART), [Set.PART_TREE](primer-set-class.md#Set.PART_TREE), [Set.PERI_LAMINATE](primer-set-class.md#Set.PERI_LAMINATE), [Set.SEGMENT](primer-set-class.md#Set.SEGMENT), [Set.SEGMENT_2D](primer-set-class.md#Set.SEGMENT_2D), [Set.SHELL](primer-set-class.md#Set.SHELL), [Set.SOLID](primer-set-class.md#Set.SOLID) or [Set.TSHELL](primer-set-class.md#Set.TSHELL)

| Returns
<br>Array of Set objects<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Set objects for all of the node sets in model m flagged with f<br>
```
var n = Set.GetFlagged(m, f, Set.NODE);
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, set number*[integer]*, type*[constant]*) [static]
Description<br>Returns the Set object for a set ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the set in

* set number (integer)
 
number of the set you want the Set object for

* type (constant)
 
Type of the set. Can be [Set.BEAM](primer-set-class.md#Set.BEAM), [Set.BOX](primer-set-class.md#Set.BOX), [Set.DISCRETE](primer-set-class.md#Set.DISCRETE), [Set.IGA_EDGE](primer-set-class.md#Set.IGA_EDGE), [Set.IGA_FACE](primer-set-class.md#Set.IGA_FACE), [Set.IGA_POINT_UVW](primer-set-class.md#Set.IGA_POINT_UVW), [Set.MM_GROUP](primer-set-class.md#Set.MM_GROUP), [Set.MODE](primer-set-class.md#Set.MODE), [Set.NODE](primer-set-class.md#Set.NODE), [Set.PART](primer-set-class.md#Set.PART), [Set.PART_TREE](primer-set-class.md#Set.PART_TREE), [Set.PERI_LAMINATE](primer-set-class.md#Set.PERI_LAMINATE), [Set.SEGMENT](primer-set-class.md#Set.SEGMENT), [Set.SEGMENT_2D](primer-set-class.md#Set.SEGMENT_2D), [Set.SHELL](primer-set-class.md#Set.SHELL), [Set.SOLID](primer-set-class.md#Set.SOLID) or [Set.TSHELL](primer-set-class.md#Set.TSHELL)

| Returns
<br>Set object (or null if set does not exist).<br>
Return type
<br>Set |
| --- |

| Example
<br>To get the Set object for node set 100 in model m<br>
```
var n = Set.GetFromID(m, 100, Set.NODE);
```
 |
| --- |

* * *

| GetGeneralData(index*[Integer]*)

Description<br>Returns a line of data for a GENERAL set. |
| --- |

#### Arguments

* index (Integer)
 
The index of the GENERAL data to return. **Note that indices start at 0, not 1**.
 0 &lt;= index &lt; [general_lines](primer-set-class.md#general_lines)

| Returns
<br>Array containing data.<br>
Return type
<br>Array |
| --- |

| Example
<br>To loop over the lines of general data sets for set s:<br>
```
if (s.general)
{
    for (i=0; i<s.general_lines; i++)
        var data = s.GetGeneralData(i);
}
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this set (\*SET\_NODE etc). **Note that a carriage return is not added**. See also [Set.KeywordCards()](primer-set-class.md#Set::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for set s:<br>
```
var key = s.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the set. **Note that a carriage return is not added**. See also [Set.Keyword()](primer-set-class.md#Set::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for set s:<br>
```
var cards = s.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*, type*[constant]*) [static]
Description<br>Returns the last set in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last set in

* type (constant)
 
Type of the set. Can be [Set.BEAM](primer-set-class.md#Set.BEAM), [Set.BOX](primer-set-class.md#Set.BOX), [Set.DISCRETE](primer-set-class.md#Set.DISCRETE), [Set.IGA_EDGE](primer-set-class.md#Set.IGA_EDGE), [Set.IGA_FACE](primer-set-class.md#Set.IGA_FACE), [Set.IGA_POINT_UVW](primer-set-class.md#Set.IGA_POINT_UVW), [Set.MM_GROUP](primer-set-class.md#Set.MM_GROUP), [Set.MODE](primer-set-class.md#Set.MODE), [Set.NODE](primer-set-class.md#Set.NODE), [Set.PART](primer-set-class.md#Set.PART), [Set.PART_TREE](primer-set-class.md#Set.PART_TREE), [Set.PERI_LAMINATE](primer-set-class.md#Set.PERI_LAMINATE), [Set.SEGMENT](primer-set-class.md#Set.SEGMENT), [Set.SEGMENT_2D](primer-set-class.md#Set.SEGMENT_2D), [Set.SHELL](primer-set-class.md#Set.SHELL), [Set.SOLID](primer-set-class.md#Set.SOLID) or [Set.TSHELL](primer-set-class.md#Set.TSHELL)

| Returns
<br>Set object (or null if there are no sets in the model).<br>
Return type
<br>Set |
| --- |

| Example
<br>To get the last node set in model m:<br>
```
var n = Set.Last(m, Set.NODE);
```
 |
| --- |

* * *

| LastFreeLabel(Model*[[Model](primer-model-class.md)]*, type*[constant]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the last free set label in the model. Also see [Set.FirstFreeLabel()](primer-set-class.md#Set::FirstFreeLabel), [Set.NextFreeLabel()](primer-set-class.md#Set::NextFreeLabel) and [Model.LastFreeItemLabel()](primer-model-class.md#Model::LastFreeItemLabel). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last free Set label in

* type (constant)
 
Type of the set. Can be [Set.BEAM](primer-set-class.md#Set.BEAM), [Set.BOX](primer-set-class.md#Set.BOX), [Set.DISCRETE](primer-set-class.md#Set.DISCRETE), [Set.IGA_EDGE](primer-set-class.md#Set.IGA_EDGE), [Set.IGA_FACE](primer-set-class.md#Set.IGA_FACE), [Set.IGA_POINT_UVW](primer-set-class.md#Set.IGA_POINT_UVW), [Set.MM_GROUP](primer-set-class.md#Set.MM_GROUP), [Set.MODE](primer-set-class.md#Set.MODE), [Set.NODE](primer-set-class.md#Set.NODE), [Set.PART](primer-set-class.md#Set.PART), [Set.PART_TREE](primer-set-class.md#Set.PART_TREE), [Set.PERI_LAMINATE](primer-set-class.md#Set.PERI_LAMINATE), [Set.SEGMENT](primer-set-class.md#Set.SEGMENT), [Set.SEGMENT_2D](primer-set-class.md#Set.SEGMENT_2D), [Set.SHELL](primer-set-class.md#Set.SHELL), [Set.SOLID](primer-set-class.md#Set.SOLID) or [Set.TSHELL](primer-set-class.md#Set.TSHELL)

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest free in layer* in editing panels). If omitted the whole model will be used.

| Returns
<br>Set label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the last free node set label in model m:<br>
```
var label = Set.LastFreeLabel(m, Set.NODE);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next set in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Set object (or null if there are no more sets in the model).<br>
Return type
<br>Set |
| --- |

| Example
<br>To get the set in model m after set n:<br>
```
var n = n.Next();
```
 |
| --- |

* * *

| NextFreeLabel(Model*[[Model](primer-model-class.md)]*, type*[constant]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the next free set label in the model. Also see [Set.FirstFreeLabel()](primer-set-class.md#Set::FirstFreeLabel), [Set.LastFreeLabel()](primer-set-class.md#Set::LastFreeLabel) and [Model.NextFreeItemLabel()](primer-model-class.md#Model::NextFreeItemLabel). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get next free Set label in

* type (constant)
 
Type of the set. Can be [Set.BEAM](primer-set-class.md#Set.BEAM), [Set.BOX](primer-set-class.md#Set.BOX), [Set.DISCRETE](primer-set-class.md#Set.DISCRETE), [Set.IGA_EDGE](primer-set-class.md#Set.IGA_EDGE), [Set.IGA_FACE](primer-set-class.md#Set.IGA_FACE), [Set.IGA_POINT_UVW](primer-set-class.md#Set.IGA_POINT_UVW), [Set.MM_GROUP](primer-set-class.md#Set.MM_GROUP), [Set.MODE](primer-set-class.md#Set.MODE), [Set.NODE](primer-set-class.md#Set.NODE), [Set.PART](primer-set-class.md#Set.PART), [Set.PART_TREE](primer-set-class.md#Set.PART_TREE), [Set.PERI_LAMINATE](primer-set-class.md#Set.PERI_LAMINATE), [Set.SEGMENT](primer-set-class.md#Set.SEGMENT), [Set.SEGMENT_2D](primer-set-class.md#Set.SEGMENT_2D), [Set.SHELL](primer-set-class.md#Set.SHELL), [Set.SOLID](primer-set-class.md#Set.SOLID) or [Set.TSHELL](primer-set-class.md#Set.TSHELL)

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest+1 in layer* in editing panels). If omitted the whole model will be used (Equivalent to *Highest+1* in editing panels).

| Returns
<br>Set label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the next free node set label in model m:<br>
```
var label = Set.NextFreeLabel(m, Set.NODE);
```
 |
| --- |

* * *

| Pick(type*[constant]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a set. |
| --- |

#### Arguments

* type (constant)
 
Type of sets to pick. Can be [Set.BEAM](primer-set-class.md#Set.BEAM), [Set.BOX](primer-set-class.md#Set.BOX), [Set.DISCRETE](primer-set-class.md#Set.DISCRETE), [Set.MM_GROUP](primer-set-class.md#Set.MM_GROUP), [Set.NODE](primer-set-class.md#Set.NODE), [Set.PART](primer-set-class.md#Set.PART), [Set.PART_TREE](primer-set-class.md#Set.PART_TREE), [Set.PERI_LAMINATE](primer-set-class.md#Set.PERI_LAMINATE), [Set.SEGMENT](primer-set-class.md#Set.SEGMENT), [Set.SEGMENT_2D](primer-set-class.md#Set.SEGMENT_2D), [Set.SHELL](primer-set-class.md#Set.SHELL), [Set.SOLID](primer-set-class.md#Set.SOLID) or [Set.TSHELL](primer-set-class.md#Set.TSHELL).

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only sets from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only sets that are flagged with *limit* can be selected. If omitted, or null, any sets from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[Set](primer-set-class.md) object (or null if not picked)<br>
Return type
<br>Set |
| --- |

| Example
<br>To pick a node set from model m giving the prompt 'Pick set from screen':<br>
```
var n = Set.Pick(Set.NODE, 'Pick set from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous set in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Set object (or null if there are no more sets in the model).<br>
Return type
<br>Set |
| --- |

| Example
<br>To get the set in model m before this one:<br>
```
var s = s.Previous();
```
 |
| --- |

* * *

| RebuildCache()

Description<br>Rebuilds the cache for a set. As sets can be built using complex combinations of \_GENERAL, \_ADD, \_INTERSECT options etc PRIMER creates a 'cache' for the set to speed up set drawing and usage. During normal interactive use this cache is rebuilt as necessary but in JavaScript it is possible for the cache to become out of date (e.g. you change a box position in JavaScript that is used by a \*SET\_GENERAL). Calling this forces the cache to be rebuilt. |
| --- |

#### Arguments

No arguments

| Returns
<br>No return type<br>
Return type
<br>null |
| --- |

| Example
<br>To rebuild the cache for set s:<br>
```
s.RebuildCache();
```
 |
| --- |

* * *

| Remove(id*[integer]*)

Description<br>Removes an item from the set. If the item is not in the set nothing is done. **This cannot be used for ADD\_ADVANCED, \_COLUMN, \_GENERAL or \_GENERATE sets** and **cannot be used for segment sets** |
| --- |

#### Arguments

* id (integer)
 
id of the item to remove from the set.

| Returns
<br>No return value |
| --- |

| Example
<br>To remove node 10 from node set ns:<br>
```
ns.Remove(10);
```
 |
| --- |

* * *

| RemoveFlagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Removes flagged items from the set. **This cannot be used for \_GENERAL or \_GENERATE sets** and **cannot be used for segment sets** |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag for items to remove from the set

| Returns
<br>No return value |
| --- |

| Example
<br>To remove any nodes flagged with flag f from node set ns:<br>
```
ns.RemoveFlagged(f);
```
 |
| --- |

* * *

| RemoveGeneralData(index*[Integer]*)

Description<br>Removes a line of data from a GENERAL set. |
| --- |

#### Arguments

* index (Integer)
 
The index of the GENERAL data to remove. **Note that indices start at 0, not 1**.
 0 &lt;= index &lt; [general_lines](primer-set-class.md#general_lines)

| Returns
<br>No return value |
| --- |

| Example
<br>To remove the first line of general data sets for set s:<br>
```
if (s.general)
{
    s.RemoveGeneralData(0);
}
```
 |
| --- |

* * *

| RenumberAll(Model*[[Model](primer-model-class.md)]*, start*[integer]*, type (optional)*[constant]*) [static]
Description<br>Renumbers all of the sets in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all sets will be renumbered in

* start (integer)
 
Start point for renumbering

* type (optional) (constant)
 
Type of sets to renumber. Can be [Set.BEAM](primer-set-class.md#Set.BEAM), [Set.BOX](primer-set-class.md#Set.BOX) [Set.DISCRETE](primer-set-class.md#Set.DISCRETE), [Set.IGA_EDGE](primer-set-class.md#Set.IGA_EDGE), [Set.IGA_FACE](primer-set-class.md#Set.IGA_FACE), [Set.IGA_POINT_UVW](primer-set-class.md#Set.IGA_POINT_UVW), [Set.MM_GROUP](primer-set-class.md#Set.MM_GROUP), [Set.MODE](primer-set-class.md#Set.MODE), [Set.NODE](primer-set-class.md#Set.NODE), [Set.PART](primer-set-class.md#Set.PART), [Set.PART_TREE](primer-set-class.md#Set.PART_TREE), [Set.PERI_LAMINATE](primer-set-class.md#Set.PERI_LAMINATE), [Set.SEGMENT](primer-set-class.md#Set.SEGMENT), [Set.SEGMENT_2D](primer-set-class.md#Set.SEGMENT_2D), [Set.SHELL](primer-set-class.md#Set.SHELL), [Set.SOLID](primer-set-class.md#Set.SOLID) or [Set.TSHELL](primer-set-class.md#Set.TSHELL). If omitted sets of all types will be blanked.

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the sets in model m, from 1000000:<br>
```
Set.RenumberAll(m, 1000000);
```
<br><br>To renumber all of the node sets in model m, from 1000000:<br>
```
Set.RenumberAll(m, 1000000, Set.NODE);
```
 |
| --- |

* * *

| RenumberFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*, type (optional)*[constant]*) [static]
Description<br>Renumbers all of the flagged sets in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged sets will be renumbered in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the sets that you want to renumber

* start (integer)
 
Start point for renumbering

* type (optional) (constant)
 
Type of sets to renumber. Can be [Set.BEAM](primer-set-class.md#Set.BEAM), [Set.BOX](primer-set-class.md#Set.BOX) [Set.DISCRETE](primer-set-class.md#Set.DISCRETE), [Set.IGA_EDGE](primer-set-class.md#Set.IGA_EDGE), [Set.IGA_FACE](primer-set-class.md#Set.IGA_FACE), [Set.IGA_POINT_UVW](primer-set-class.md#Set.IGA_POINT_UVW), [Set.MM_GROUP](primer-set-class.md#Set.MM_GROUP), [Set.MODE](primer-set-class.md#Set.MODE), [Set.NODE](primer-set-class.md#Set.NODE), [Set.PART](primer-set-class.md#Set.PART), [Set.PART_TREE](primer-set-class.md#Set.PART_TREE), [Set.PERI_LAMINATE](primer-set-class.md#Set.PERI_LAMINATE), [Set.SEGMENT](primer-set-class.md#Set.SEGMENT), [Set.SEGMENT_2D](primer-set-class.md#Set.SEGMENT_2D), [Set.SHELL](primer-set-class.md#Set.SHELL), [Set.SOLID](primer-set-class.md#Set.SOLID) or [Set.TSHELL](primer-set-class.md#Set.TSHELL). If omitted sets of all types will be blanked.

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the sets in model m flagged with f, from 1000000:<br>
```
Set.RenumberFlagged(m, f, 1000000);
```
<br><br>To renumber all of the node sets in model m flagged with f, from 1000000:<br>
```
Set.RenumberFlagged(m, f, 1000000, Set.NODE);
```
 |
| --- |

* * *

| Select(type*[constant]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select sets using standard PRIMER object menus. |
| --- |

#### Arguments

* type (constant)
 
Type of sets to pick. Can be [Set.BEAM](primer-set-class.md#Set.BEAM), [Set.BOX](primer-set-class.md#Set.BOX) [Set.DISCRETE](primer-set-class.md#Set.DISCRETE), [Set.IGA_EDGE](primer-set-class.md#Set.IGA_EDGE), [Set.IGA_FACE](primer-set-class.md#Set.IGA_FACE), [Set.IGA_POINT_UVW](primer-set-class.md#Set.IGA_POINT_UVW), [Set.MM_GROUP](primer-set-class.md#Set.MM_GROUP), [Set.MODE](primer-set-class.md#Set.MODE), [Set.NODE](primer-set-class.md#Set.NODE), [Set.PART](primer-set-class.md#Set.PART), [Set.PART_TREE](primer-set-class.md#Set.PART_TREE), [Set.PERI_LAMINATE](primer-set-class.md#Set.PERI_LAMINATE), [Set.SEGMENT](primer-set-class.md#Set.SEGMENT), [Set.SEGMENT_2D](primer-set-class.md#Set.SEGMENT_2D), [Set.SHELL](primer-set-class.md#Set.SHELL), [Set.SOLID](primer-set-class.md#Set.SOLID) or [Set.TSHELL](primer-set-class.md#Set.TSHELL).

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting sets

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only sets from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only sets that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any sets from any model can be selected.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of items selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select node sets from model m, flagging those selected with flag f, giving the prompt 'Select sets':<br>
```
Set.Select(Set.NODE, f, 'Select sets', m);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the set. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the set

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for set s:<br>
```
s.SetFlag(f);
```
 |
| --- |

* * *

| SetGeneralData(index*[Integer]*, data*[Array of data]*)

Description<br>Sets a line of data for a GENERAL set. |
| --- |

#### Arguments

* index (Integer)
 
The index of the GENERAL data to set. **Note that indices start at 0, not 1**.
 0 &lt;= index &lt;= [general_lines](primer-set-class.md#general_lines)

* data (Array of data)
 
Array containing GENERAL data to set.

| Returns
<br>No return value. |
| --- |

| Example
<br>To add nodes inside boxes 1, 2 and 3 as a new line of data to node general set s:<br>
```
var data = [ "BOX", 1, 2, 3];
s.SetGeneralData(s.general_lines, data);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the set. The set will be sketched until you either call [Set.Unsketch()](primer-set-class.md#Set::Unsketch), [Set.UnsketchAll()](primer-set-class.md#Set::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the set is sketched. If omitted redraw is true. If you want to sketch several sets and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch set s:<br>
```
s.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, type (optional)*[constant]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged sets in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged sets will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the sets that you want to sketch

* type (optional) (constant)
 
Type of sets to sketch. Can be [Set.BEAM](primer-set-class.md#Set.BEAM), [Set.BOX](primer-set-class.md#Set.BOX) [Set.DISCRETE](primer-set-class.md#Set.DISCRETE), [Set.MM_GROUP](primer-set-class.md#Set.MM_GROUP), [Set.NODE](primer-set-class.md#Set.NODE), [Set.PART](primer-set-class.md#Set.PART), [Set.PART_TREE](primer-set-class.md#Set.PART_TREE), [Set.PERI_LAMINATE](primer-set-class.md#Set.PERI_LAMINATE), [Set.SEGMENT](primer-set-class.md#Set.SEGMENT), [Set.SEGMENT_2D](primer-set-class.md#Set.SEGMENT_2D), [Set.SHELL](primer-set-class.md#Set.SHELL), [Set.SOLID](primer-set-class.md#Set.SOLID) or [Set.TSHELL](primer-set-class.md#Set.TSHELL). [Set.ALL_TYPES](primer-set-class.md#Set.ALL_TYPES). If set, only flagged sets of this type will be sketched. If omitted flagged sets of all types will be sketched.

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is true. If you want to do several (un)sketches and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all of the sets in model m flagged with f:<br>
```
Set.SketchFlagged(m, f);
```
<br><br>To sketch all of the node sets in model m flagged with f:<br>
```
Set.SketchFlagged(m, f, Set.NODE);
```
 |
| --- |

* * *

| Spool()

Description<br>Spools a set, entry by entry. See also [Set.StartSpool](primer-set-class.md#Set::StartSpool) |
| --- |

#### Arguments

No arguments

| Returns
<br>For [Set.SEGMENT](primer-set-class.md#Set.SEGMENT) returns an array containing node IDs, for all other set types returns the ID of the item. Returns 0 if no more items<br>
Return type
<br>Array |
| --- |

| Example
<br>To spool set s:<br>
```
var id;
s.StartSpool();
while (id = s.Spool()) 
{
    do something...
}
```
 |
| --- |

* * *

| StartSpool(raw (optional)*[boolean]*)

Description<br>Starts a set spooling operation. See also [Set.Spool](primer-set-class.md#Set::Spool) |
| --- |

#### Arguments

* raw (optional) (boolean)
 
If true then the raw data from \_GENERATE, \_ADD and \_INTERSECT sets will be returned instead of expanding the data ranges or child set contents. If omitted raw will be false.

| Returns
<br>No return value |
| --- |

| Example
<br>To start spooling set s:<br>
```
s.StartSpool();
```
 |
| --- |

* * *

| UnblankAll(Model*[[Model](primer-model-class.md)]*, type (optional)*[constant]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the sets in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all sets will be unblanked in

* type (optional) (constant)
 
Type of sets to unblank. Can be [Set.BEAM](primer-set-class.md#Set.BEAM), [Set.BOX](primer-set-class.md#Set.BOX) [Set.DISCRETE](primer-set-class.md#Set.DISCRETE), [Set.MM_GROUP](primer-set-class.md#Set.MM_GROUP), [Set.NODE](primer-set-class.md#Set.NODE), [Set.PART](primer-set-class.md#Set.PART), [Set.PART_TREE](primer-set-class.md#Set.PART_TREE), [Set.PERI_LAMINATE](primer-set-class.md#Set.PERI_LAMINATE), [Set.SEGMENT](primer-set-class.md#Set.SEGMENT), [Set.SEGMENT_2D](primer-set-class.md#Set.SEGMENT_2D), [Set.SHELL](primer-set-class.md#Set.SHELL), [Set.SOLID](primer-set-class.md#Set.SOLID) or [Set.TSHELL](primer-set-class.md#Set.TSHELL). [Set.ALL_TYPES](primer-set-class.md#Set.ALL_TYPES). If omitted sets of all types will be blanked.

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the sets in model m:<br>
```
Set.UnblankAll(m);
```
<br><br>To unblank all of the node sets in model m:<br>
```
Set.UnblankAll(m, Set.NODE);
```
 |
| --- |

* * *

| UnblankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, type (optional)*[constant]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the flagged sets in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the flagged sets will be unblanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the sets that you want to unblank

* type (optional) (constant)
 
Type of sets to unblank. Can be [Set.BEAM](primer-set-class.md#Set.BEAM), [Set.BOX](primer-set-class.md#Set.BOX) [Set.DISCRETE](primer-set-class.md#Set.DISCRETE), [Set.MM_GROUP](primer-set-class.md#Set.MM_GROUP), [Set.NODE](primer-set-class.md#Set.NODE), [Set.PART](primer-set-class.md#Set.PART), [Set.PART_TREE](primer-set-class.md#Set.PART_TREE), [Set.PERI_LAMINATE](primer-set-class.md#Set.PERI_LAMINATE), [Set.SEGMENT](primer-set-class.md#Set.SEGMENT), [Set.SEGMENT_2D](primer-set-class.md#Set.SEGMENT_2D), [Set.SHELL](primer-set-class.md#Set.SHELL), [Set.SOLID](primer-set-class.md#Set.SOLID) or [Set.TSHELL](primer-set-class.md#Set.TSHELL). [Set.ALL_TYPES](primer-set-class.md#Set.ALL_TYPES). If set, only flagged sets of this type will be unblanked. If omitted flagged sets of all types will be unblanked.

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the sets in model m flagged with f:<br>
```
Set.UnblankFlagged(m, f);
```
<br><br>To unblank all of the node sets in model m flagged with f:<br>
```
Set.UnblankFlagged(m, f, Set.NODE);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, type (optional)*[constant]*) [static]
Description<br>Unsets a defined flag on all of the sets in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all sets will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the sets

* type (optional) (constant)
 
Type of the set. Can be [Set.BEAM](primer-set-class.md#Set.BEAM), [Set.BOX](primer-set-class.md#Set.BOX) [Set.DISCRETE](primer-set-class.md#Set.DISCRETE), [Set.IGA_EDGE](primer-set-class.md#Set.IGA_EDGE), [Set.IGA_FACE](primer-set-class.md#Set.IGA_FACE), [Set.IGA_POINT_UVW](primer-set-class.md#Set.IGA_POINT_UVW), [Set.MM_GROUP](primer-set-class.md#Set.MM_GROUP), [Set.MODE](primer-set-class.md#Set.MODE), [Set.NODE](primer-set-class.md#Set.NODE), [Set.PART](primer-set-class.md#Set.PART), [Set.PART_TREE](primer-set-class.md#Set.PART_TREE), [Set.PERI_LAMINATE](primer-set-class.md#Set.PERI_LAMINATE), [Set.SEGMENT](primer-set-class.md#Set.SEGMENT), [Set.SEGMENT_2D](primer-set-class.md#Set.SEGMENT_2D), [Set.SHELL](primer-set-class.md#Set.SHELL), [Set.SOLID](primer-set-class.md#Set.SOLID) or [Set.TSHELL](primer-set-class.md#Set.TSHELL)

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the sets in model m:<br>
```
Set.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the set. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the set is unsketched. If omitted redraw is true. If you want to unsketch several sets and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch set s:<br>
```
s.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, type (optional)*[constant]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all sets. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all sets will be unsketched in

* type (optional) (constant)
 
Type of sets to unsketch. Can be [Set.BEAM](primer-set-class.md#Set.BEAM), [Set.BOX](primer-set-class.md#Set.BOX) [Set.DISCRETE](primer-set-class.md#Set.DISCRETE), [Set.MM_GROUP](primer-set-class.md#Set.MM_GROUP), [Set.NODE](primer-set-class.md#Set.NODE), [Set.PART](primer-set-class.md#Set.PART), [Set.PART_TREE](primer-set-class.md#Set.PART_TREE), [Set.PERI_LAMINATE](primer-set-class.md#Set.PERI_LAMINATE), [Set.SEGMENT](primer-set-class.md#Set.SEGMENT), [Set.SEGMENT_2D](primer-set-class.md#Set.SEGMENT_2D), [Set.SHELL](primer-set-class.md#Set.SHELL), [Set.SOLID](primer-set-class.md#Set.SOLID) or [Set.TSHELL](primer-set-class.md#Set.TSHELL). If omitted sets of all types will be unsketched.

* redraw (optional) (boolean)
 
If model should be redrawn or not after the sets are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all sets in model m:<br>
```
Set.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, type (optional)*[constant]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged sets. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all sets will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the sets that you want to unsketch

* type (optional) (constant)
 
Type of sets to unsketch. Can be [Set.BEAM](primer-set-class.md#Set.BEAM), [Set.BOX](primer-set-class.md#Set.BOX) [Set.DISCRETE](primer-set-class.md#Set.DISCRETE), [Set.MM_GROUP](primer-set-class.md#Set.MM_GROUP), [Set.NODE](primer-set-class.md#Set.NODE), [Set.PART](primer-set-class.md#Set.PART), [Set.PART_TREE](primer-set-class.md#Set.PART_TREE), [Set.PERI_LAMINATE](primer-set-class.md#Set.PERI_LAMINATE), [Set.SEGMENT](primer-set-class.md#Set.SEGMENT), [Set.SEGMENT_2D](primer-set-class.md#Set.SEGMENT_2D), [Set.SHELL](primer-set-class.md#Set.SHELL), [Set.SOLID](primer-set-class.md#Set.SOLID) or [Set.TSHELL](primer-set-class.md#Set.TSHELL). If omitted sets of all types will be unsketched.

* redraw (optional) (boolean)
 
If model should be redrawn or not after the sets are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all sets in model m flagged with f:<br>
```
Set.UnsketchFlagged(m, f);
```
<br><br>To unsketch all of the node sets in model m flagged with f:<br>
```
Set.UnsketchFlagged(m, f, Set.NODE);
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for a set. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for set s:<br>
```
s.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this set. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for this set:<br>
```
var xrefs = s.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the set data in keyword format. Note that this contains the keyword header and the keyword cards. See also [Set.Keyword()](primer-set-class.md#Set::Keyword) and [Set.KeywordCards()](primer-set-class.md#Set::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for set n in keyword format<br>
```
var s = n.toString();
```
 |
| --- |

* * *