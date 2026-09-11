# HexSpotweldAssembly class

The HexSpotweldAssembly class gives you access to \*DEFINE\_HEX\_SPOTWELD\_ASSEMBLY cards in PRIMER. [More...](primer-hexspotweldassembly-class.md#HexSpotweldAssembly_details)

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

* [Create](primer-hexspotweldassembly-class.md#HexSpotweldAssembly::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [First](primer-hexspotweldassembly-class.md#HexSpotweldAssembly::First)(Model*[[Model](primer-model-class.md)]*)
* [FirstFreeLabel](primer-hexspotweldassembly-class.md#HexSpotweldAssembly::FirstFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [FlagAll](primer-hexspotweldassembly-class.md#HexSpotweldAssembly::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-hexspotweldassembly-class.md#HexSpotweldAssembly::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-hexspotweldassembly-class.md#HexSpotweldAssembly::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-hexspotweldassembly-class.md#HexSpotweldAssembly::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-hexspotweldassembly-class.md#HexSpotweldAssembly::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-hexspotweldassembly-class.md#HexSpotweldAssembly::Last)(Model*[[Model](primer-model-class.md)]*)
* [LastFreeLabel](primer-hexspotweldassembly-class.md#HexSpotweldAssembly::LastFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [NextFreeLabel](primer-hexspotweldassembly-class.md#HexSpotweldAssembly::NextFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [RenumberAll](primer-hexspotweldassembly-class.md#HexSpotweldAssembly::RenumberAll)(Model*[[Model](primer-model-class.md)]*, start*[integer]*)
* [RenumberFlagged](primer-hexspotweldassembly-class.md#HexSpotweldAssembly::RenumberFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*)
* [Select](primer-hexspotweldassembly-class.md#HexSpotweldAssembly::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [Total](primer-hexspotweldassembly-class.md#HexSpotweldAssembly::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnflagAll](primer-hexspotweldassembly-class.md#HexSpotweldAssembly::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

## Member functions

* [AssociateComment](primer-hexspotweldassembly-class.md#HexSpotweldAssembly::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Browse](primer-hexspotweldassembly-class.md#HexSpotweldAssembly::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-hexspotweldassembly-class.md#HexSpotweldAssembly::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-hexspotweldassembly-class.md#HexSpotweldAssembly::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-hexspotweldassembly-class.md#HexSpotweldAssembly::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-hexspotweldassembly-class.md#HexSpotweldAssembly::Edit)(modal (optional)*[boolean]*)
* [Error](primer-hexspotweldassembly-class.md#HexSpotweldAssembly::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-hexspotweldassembly-class.md#HexSpotweldAssembly::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-hexspotweldassembly-class.md#HexSpotweldAssembly::GetComments)()
* [GetParameter](primer-hexspotweldassembly-class.md#HexSpotweldAssembly::GetParameter)(prop*[string]*)
* [Keyword](primer-hexspotweldassembly-class.md#HexSpotweldAssembly::Keyword)()
* [KeywordCards](primer-hexspotweldassembly-class.md#HexSpotweldAssembly::KeywordCards)()
* [Next](primer-hexspotweldassembly-class.md#HexSpotweldAssembly::Next)()
* [Previous](primer-hexspotweldassembly-class.md#HexSpotweldAssembly::Previous)()
* [SetFlag](primer-hexspotweldassembly-class.md#HexSpotweldAssembly::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ViewParameters](primer-hexspotweldassembly-class.md#HexSpotweldAssembly::ViewParameters)()
* [Warning](primer-hexspotweldassembly-class.md#HexSpotweldAssembly::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-hexspotweldassembly-class.md#HexSpotweldAssembly::Xrefs)()
* [toString](primer-hexspotweldassembly-class.md#HexSpotweldAssembly::toString)()

## HexSpotweldAssembly properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| eid1 | integer | [EID](primer-solid-class.md) 1 |
| eid10 | integer | [EID](primer-solid-class.md) 10 |
| eid11 | integer | [EID](primer-solid-class.md) 11 |
| eid12 | integer | [EID](primer-solid-class.md) 12 |
| eid13 | integer | [EID](primer-solid-class.md) 13 |
| eid14 | integer | [EID](primer-solid-class.md) 14 |
| eid15 | integer | [EID](primer-solid-class.md) 15 |
| eid16 | integer | [EID](primer-solid-class.md) 16 |
| eid2 | integer | [EID](primer-solid-class.md) 2 |
| eid3 | integer | [EID](primer-solid-class.md) 3 |
| eid4 | integer | [EID](primer-solid-class.md) 4 |
| eid5 | integer | [EID](primer-solid-class.md) 5 |
| eid6 | integer | [EID](primer-solid-class.md) 6 |
| eid7 | integer | [EID](primer-solid-class.md) 7 |
| eid8 | integer | [EID](primer-solid-class.md) 8 |
| eid9 | integer | [EID](primer-solid-class.md) 9 |
| exists (read only) | logical | true if DEFINE\_HEX\_SPOTWELD\_ASSEMBLY exists, false if referred to but not defined. |
| id | integer | [*DEFINE_HEX_SPOTWELD_ASSEMBLY](primer-hexspotweldassembly-class.md) id |
| include | integer | The [Include](primer-include-class.md) file number that the DEFINE\_HEX\_SPOTWELD\_ASSEMBLY is in. |
| model (read only) | integer | The [Model](primer-model-class.md) number that the DEFINE\_HEX\_SPOTWELD\_ASSEMBLY is in. |
| opt | integer | [*DEFINE_HEX_SPOTWELD_ASSEMBLY](primer-hexspotweldassembly-class.md) opt |
| title | string | Title (optional) |

| Detailed Description<br>The HexSpotweldAssembly class allows you to create, modify, edit and manipulate \*DEFINE\_HEX\_SPOTWELD\_ASSEMBLY cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new HexSpotweldAssembly(Model*[[Model](primer-model-class.md)]*, options *[object]*)

Description<br>Create a new [*DEFINE_HEX_SPOTWELD_ASSEMBLY](primer-hexspotweldassembly-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that Hex Spotweld Assembly will be created in

* options  (object)

Options for creating the [HexSpotweldAssembly](primer-hexspotweldassembly-class.md) 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| id | integer | [HexSpotweldAssembly](primer-hexspotweldassembly-class.md) ID. |
| opt | integer | HexSpotweldAssembly option indicating the length of the solids array. [opt](primer-hexspotweldassembly-class.md#opt) can be 4, 8 or 16. |
| solids | array | Array of [Solid](primer-solid-class.md) IDs, at least 4 EIDs must be given. |
| title (optional) | string | Optional HexSpotweldAssembly title. |

| Returns
<br>[HexSpotweldAssembly](primer-hexspotweldassembly-class.md) object<br>
Return type
<br>HexSpotweldAssembly |
| --- |

| Example
<br>To create a new \*DEFINE\_HEX\_SPOTWELD\_ASSEMBLY with ID 100 in model m with 4 elements 50, 150, 250 and 350<br>
```
var h = new HexSpotweldAssembly(m, {id: 100, opt: 4, solids: [50, 150, 250, 350]});
```
<br>To create a new \*DEFINE\_HEX\_SPOTWELD\_ASSEMBLY with ID 200 in model m with 8 elements 50, 150, 250, 350, 450, 550, 650 and 750<br>
```
var h = new HexSpotweldAssembly(m, {id: 200, opt: 8, solids: [50, 150, 250, 350, 450, 550, 650, 750]});
```
<br>To create a new \*DEFINE\_HEX\_SPOTWELD\_ASSEMBLY with ID 300 in model m with 16 elements 50, 150, 250, 350, 450, 550, 650, 750, 850, 950, 1050, 1150, 1250, 1350, 1450 and 1550<br>
```
var h = new HexSpotweldAssembly(m, {id: 300, opt: 16, solids: [50, 150, 250, 350, 450, 550, 650, 750, 850, 950, 1050, 1150, 1250, 1350, 1450, 1550]});
```
 |
| --- |

| new HexSpotweldAssembly(Model*[[Model](primer-model-class.md)]*, id*[integer]*, opt*[integer]*, eid1*[integer]*, eid2*[integer]*, eid3*[integer]*, eid4*[integer]*, title (optional)*[string]*) [deprecated]
<br>This function is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>
Description<br>Create a new [*DEFINE_HEX_SPOTWELD_ASSEMBLY](primer-hexspotweldassembly-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that Hex Spotweld Assembly will be created in

* id (integer)
 
[*DEFINE_HEX_SPOTWELD_ASSEMBLY](primer-hexspotweldassembly-class.md) id\_sw.

* opt (integer)
 
[*DEFINE_HEX_SPOTWELD_ASSEMBLY](primer-hexspotweldassembly-class.md) opt can be 4, 8 or 16

* eid1 (integer)
 
[EID](primer-solid-class.md) 1.

* eid2 (integer)
 
[EID](primer-solid-class.md) 2.

* eid3 (integer)
 
[EID](primer-solid-class.md) 3.

* eid4 (integer)
 
[EID](primer-solid-class.md) 4.

* title (optional) (string)
 
Define hex spotweld assembly title.

| Returns
<br>[HexSpotweldAssembly](primer-hexspotweldassembly-class.md) object<br>
Return type
<br>HexSpotweldAssembly |
| --- |

| Example
<br>To create a new \*DEFINE\_HEX\_SPOTWELD\_ASSEMBLY with ID 100 in model m with 4 elements 50, 150, 250 and 350<br>
```
var h = new HexSpotweldAssembly(m, 100, 4, 50, 150, 250, 350);
```
 |
| --- |

| new HexSpotweldAssembly(Model*[[Model](primer-model-class.md)]*, id*[integer]*, opt*[integer]*, eid1*[integer]*, eid2*[integer]*, eid3*[integer]*, eid4*[integer]*, eid5*[integer]*, eid6*[integer]*, eid7*[integer]*, eid8*[integer]*, title (optional)*[string]*) [deprecated]
<br>This function is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>
Description<br>Create a new [*DEFINE_HEX_SPOTWELD_ASSEMBLY](primer-hexspotweldassembly-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that Hex Spotweld Assembly will be created in

* id (integer)
 
[*DEFINE_HEX_SPOTWELD_ASSEMBLY](primer-hexspotweldassembly-class.md) id.

* opt (integer)
 
[*DEFINE_HEX_SPOTWELD_ASSEMBLY](primer-hexspotweldassembly-class.md) opt can be 4, 8 or 16

* eid1 (integer)
 
[EID](primer-solid-class.md) 1.

* eid2 (integer)
 
[EID](primer-solid-class.md) 2.

* eid3 (integer)
 
[EID](primer-solid-class.md) 3.

* eid4 (integer)
 
[EID](primer-solid-class.md) 4.

* eid5 (integer)
 
[EID](primer-solid-class.md) 5.

* eid6 (integer)
 
[EID](primer-solid-class.md) 6.

* eid7 (integer)
 
[EID](primer-solid-class.md) 7.

* eid8 (integer)
 
[EID](primer-solid-class.md) 8.

* title (optional) (string)
 
Define hex spotweld assembly title.

| Returns
<br>[HexSpotweldAssembly](primer-hexspotweldassembly-class.md) object<br>
Return type
<br>HexSpotweldAssembly |
| --- |

| Example
<br>To create a new \*DEFINE\_HEX\_SPOTWELD\_ASSEMBLY with ID 100 in model m with 8 elements 50, 150, 250, 350, 450, 550, 650 and 750<br>
```
var h = new HexSpotweldAssembly(m, 100, 8, 50, 150, 250, 350, 450, 550, 650, 750);
```
 |
| --- |

| new HexSpotweldAssembly(Model*[[Model](primer-model-class.md)]*, id*[integer]*, opt*[integer]*, eid1*[integer]*, eid2*[integer]*, eid3*[integer]*, eid4*[integer]*, eid5*[integer]*, eid6*[integer]*, eid7*[integer]*, eid8*[integer]*, eid9*[integer]*, eid10*[integer]*, eid11*[integer]*, eid12*[integer]*, eid13*[integer]*, eid14*[integer]*, eid15*[integer]*, eid16*[integer]*, title (optional)*[string]*) [deprecated]
<br>This function is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>
Description<br>Create a new [*DEFINE_HEX_SPOTWELD_ASSEMBLY](primer-hexspotweldassembly-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that Hex Spotweld Assembly will be created in

* id (integer)
 
[*DEFINE_HEX_SPOTWELD_ASSEMBLY](primer-hexspotweldassembly-class.md) id.

* opt (integer)
 
[*DEFINE_HEX_SPOTWELD_ASSEMBLY](primer-hexspotweldassembly-class.md) opt can be 4, 8 or 16

* eid1 (integer)
 
[EID](primer-solid-class.md) 1.

* eid2 (integer)
 
[EID](primer-solid-class.md) 2.

* eid3 (integer)
 
[EID](primer-solid-class.md) 3.

* eid4 (integer)
 
[EID](primer-solid-class.md) 4.

* eid5 (integer)
 
[EID](primer-solid-class.md) 5.

* eid6 (integer)
 
[EID](primer-solid-class.md) 6.

* eid7 (integer)
 
[EID](primer-solid-class.md) 7.

* eid8 (integer)
 
[EID](primer-solid-class.md) 8.

* eid9 (integer)
 
[EID](primer-solid-class.md) 9.

* eid10 (integer)
 
[EID](primer-solid-class.md) 10.

* eid11 (integer)
 
[EID](primer-solid-class.md) 11.

* eid12 (integer)
 
[EID](primer-solid-class.md) 12.

* eid13 (integer)
 
[EID](primer-solid-class.md) 13.

* eid14 (integer)
 
[EID](primer-solid-class.md) 14.

* eid15 (integer)
 
[EID](primer-solid-class.md) 15.

* eid16 (integer)
 
[EID](primer-solid-class.md) 16.

* title (optional) (string)
 
Define hex spotweld assembly title.

| Returns
<br>[HexSpotweldAssembly](primer-hexspotweldassembly-class.md) object<br>
Return type
<br>HexSpotweldAssembly |
| --- |

| Example
<br>To create a new \*DEFINE\_HEX\_SPOTWELD\_ASSEMBLY with ID 100 in model m with 16 elements 50, 150, 250, 350, 450, 550, 650, 750, 850, 950, 1050, 1150, 1250, 1350, 1450 and 1550<br>
```
var h = new HexSpotweldAssembly(m, 100, 16, 50, 150, 250, 350, 450, 550, 650, 750, 850, 950, 1050, 1150, 1250, 1350, 1450, 1550);
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a DEFINE\_HEX\_SPOTWELD\_ASSEMBLY. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the DEFINE\_HEX\_SPOTWELD\_ASSEMBLY

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the DEFINE\_HEX\_SPOTWELD\_ASSEMBLY h:<br>
```
h.AssociateComment(c);
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
<br>To Browse DEFINE\_HEX\_SPOTWELD\_ASSEMBLY h:<br>
```
h.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the DEFINE\_HEX\_SPOTWELD\_ASSEMBLY. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the DEFINE\_HEX\_SPOTWELD\_ASSEMBLY

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for DEFINE\_HEX\_SPOTWELD\_ASSEMBLY h:<br>
```
h.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the DEFINE\_HEX\_SPOTWELD\_ASSEMBLY. The target include of the copied DEFINE\_HEX\_SPOTWELD\_ASSEMBLY can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>HexSpotweldAssembly object<br>
Return type
<br>HexSpotweldAssembly |
| --- |

| Example
<br>To copy DEFINE\_HEX\_SPOTWELD\_ASSEMBLY h into DEFINE\_HEX\_SPOTWELD\_ASSEMBLY z:<br>
```
var z = h.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a DEFINE\_HEX\_SPOTWELD\_ASSEMBLY |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the DEFINE\_HEX\_SPOTWELD\_ASSEMBLY will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>HexSpotweldAssembly object (or null if not made).<br>
Return type
<br>HexSpotweldAssembly |
| --- |

| Example
<br>To start creating a DEFINE\_HEX\_SPOTWELD\_ASSEMBLY in model m:<br>
```
var h = HexSpotweldAssembly.Create(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a DEFINE\_HEX\_SPOTWELD\_ASSEMBLY. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the DEFINE\_HEX\_SPOTWELD\_ASSEMBLY

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the DEFINE\_HEX\_SPOTWELD\_ASSEMBLY h:<br>
```
h.DetachComment(c);
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
<br>To Edit DEFINE\_HEX\_SPOTWELD\_ASSEMBLY h:<br>
```
h.Edit();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for DEFINE\_HEX\_SPOTWELD\_ASSEMBLY. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for DEFINE\_HEX\_SPOTWELD\_ASSEMBLY h:<br>
```
h.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first DEFINE\_HEX\_SPOTWELD\_ASSEMBLY in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first DEFINE\_HEX\_SPOTWELD\_ASSEMBLY in

| Returns
<br>HexSpotweldAssembly object (or null if there are no DEFINE\_HEX\_SPOTWELD\_ASSEMBLYs in the model).<br>
Return type
<br>HexSpotweldAssembly |
| --- |

| Example
<br>To get the first DEFINE\_HEX\_SPOTWELD\_ASSEMBLY in model m:<br>
```
var h = HexSpotweldAssembly.First(m);
```
 |
| --- |

* * *

| FirstFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the first free DEFINE\_HEX\_SPOTWELD\_ASSEMBLY label in the model. Also see [HexSpotweldAssembly.LastFreeLabel()](primer-hexspotweldassembly-class.md#HexSpotweldAssembly::LastFreeLabel), [HexSpotweldAssembly.NextFreeLabel()](primer-hexspotweldassembly-class.md#HexSpotweldAssembly::NextFreeLabel) and [Model.FirstFreeItemLabel()](primer-model-class.md#Model::FirstFreeItemLabel). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first free DEFINE\_HEX\_SPOTWELD\_ASSEMBLY label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *First free in layer* in editing panels). If omitted the whole model will be used (Equivalent to *First free* in editing panels).

| Returns
<br>HexSpotweldAssembly label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the first free DEFINE\_HEX\_SPOTWELD\_ASSEMBLY label in model m:<br>
```
var label = HexSpotweldAssembly.FirstFreeLabel(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the DEFINE\_HEX\_SPOTWELD\_ASSEMBLYs in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all DEFINE\_HEX\_SPOTWELD\_ASSEMBLYs will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the DEFINE\_HEX\_SPOTWELD\_ASSEMBLYs

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the DEFINE\_HEX\_SPOTWELD\_ASSEMBLYs with flag f in model m:<br>
```
HexSpotweldAssembly.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the DEFINE\_HEX\_SPOTWELD\_ASSEMBLY is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the DEFINE\_HEX\_SPOTWELD\_ASSEMBLY

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if DEFINE\_HEX\_SPOTWELD\_ASSEMBLY h has flag f set on it:<br>
```
if (h.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each DEFINE\_HEX\_SPOTWELD\_ASSEMBLY in the model.<br> **Note that ForEach has been designed to make looping over DEFINE\_HEX\_SPOTWELD\_ASSEMBLYs as fast as possible and so has some limitations. Firstly, a single temporary HexSpotweldAssembly object is created and on each function call it is updated with the current DEFINE\_HEX\_SPOTWELD\_ASSEMBLY data. This means that you should not try to store the HexSpotweldAssembly object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new DEFINE\_HEX\_SPOTWELD\_ASSEMBLYs inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all DEFINE\_HEX\_SPOTWELD\_ASSEMBLYs are in

* func (function)
 
Function to call for each DEFINE\_HEX\_SPOTWELD\_ASSEMBLY

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the DEFINE\_HEX\_SPOTWELD\_ASSEMBLYs in model m:<br>
```
HexSpotweldAssembly.ForEach(m, test);
function test(h)
{
// h is HexSpotweldAssembly object
}
```
<br><br>To call function test for all of the DEFINE\_HEX\_SPOTWELD\_ASSEMBLYs in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
HexSpotweldAssembly.ForEach(m, test, data);
function test(h, extra)
{
// h is HexSpotweldAssembly object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of HexSpotweldAssembly objects or properties for all of the DEFINE\_HEX\_SPOTWELD\_ASSEMBLYs in a model in PRIMER. If the optional property argument is not given then an array of HexSpotweldAssembly objects is returned. If the property argument is given, that property value for each DEFINE\_HEX\_SPOTWELD\_ASSEMBLY is returned in the array instead of a HexSpotweldAssembly object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get DEFINE\_HEX\_SPOTWELD\_ASSEMBLYs from

* property (optional) (string)
 
Name for property to get for all DEFINE\_HEX\_SPOTWELD\_ASSEMBLYs in the model

| Returns
<br>Array of HexSpotweldAssembly objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of HexSpotweldAssembly objects for all of the DEFINE\_HEX\_SPOTWELD\_ASSEMBLYs in model m:<br>
```
var a = HexSpotweldAssembly.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each DEFINE\_HEX\_SPOTWELD\_ASSEMBLY in model m:<br>
```
var a = HexSpotweldAssembly.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a DEFINE\_HEX\_SPOTWELD\_ASSEMBLY. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the DEFINE\_HEX\_SPOTWELD\_ASSEMBLY h:<br>
```
var comm_array = h.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of HexSpotweldAssembly objects for all of the flagged DEFINE\_HEX\_SPOTWELD\_ASSEMBLYs in a model in PRIMER If the optional property argument is not given then an array of HexSpotweldAssembly objects is returned. If the property argument is given, then that property value for each DEFINE\_HEX\_SPOTWELD\_ASSEMBLY is returned in the array instead of a HexSpotweldAssembly object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get DEFINE\_HEX\_SPOTWELD\_ASSEMBLYs from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the DEFINE\_HEX\_SPOTWELD\_ASSEMBLYs that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged DEFINE\_HEX\_SPOTWELD\_ASSEMBLYs in the model

| Returns
<br>Array of HexSpotweldAssembly objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of HexSpotweldAssembly objects for all of the DEFINE\_HEX\_SPOTWELD\_ASSEMBLYs in model m flagged with f:<br>
```
var h = HexSpotweldAssembly.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the DEFINE\_HEX\_SPOTWELD\_ASSEMBLYs in model m flagged with f:<br>
```
var a = HexSpotweldAssembly.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the HexSpotweldAssembly object for a DEFINE\_HEX\_SPOTWELD\_ASSEMBLY ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the DEFINE\_HEX\_SPOTWELD\_ASSEMBLY in

* number (integer)
 
number of the DEFINE\_HEX\_SPOTWELD\_ASSEMBLY you want the HexSpotweldAssembly object for

| Returns
<br>HexSpotweldAssembly object (or null if DEFINE\_HEX\_SPOTWELD\_ASSEMBLY does not exist).<br>
Return type
<br>HexSpotweldAssembly |
| --- |

| Example
<br>To get the HexSpotweldAssembly object for DEFINE\_HEX\_SPOTWELD\_ASSEMBLY 100 in model m<br>
```
var h = HexSpotweldAssembly.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a HexSpotweldAssembly property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [HexSpotweldAssembly.ViewParameters()](primer-hexspotweldassembly-class.md#HexSpotweldAssembly::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
DEFINE\_HEX\_SPOTWELD\_ASSEMBLY property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if HexSpotweldAssembly property h.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (h.GetParameter(h.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if HexSpotweldAssembly property h.example is a parameter by using the GetParameter method:<br>
```
if (h.ViewParameters().GetParameter(h.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this HexSpotweldAssembly (\*DEFINE\_HEX\_SPOTWELD\_ASSEMBLY). **Note that a carriage return is not added**. See also [HexSpotweldAssembly.KeywordCards()](primer-hexspotweldassembly-class.md#HexSpotweldAssembly::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for HexSpotweldAssem s:<br>
```
var key = s.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the HexSpotweldAssem. **Note that a carriage return is not added**. See also [HexSpotweldAssembly.Keyword()](primer-hexspotweldassembly-class.md#HexSpotweldAssembly::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for HexSpotweldAssem s:<br>
```
var cards = s.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last DEFINE\_HEX\_SPOTWELD\_ASSEMBLY in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last DEFINE\_HEX\_SPOTWELD\_ASSEMBLY in

| Returns
<br>HexSpotweldAssembly object (or null if there are no DEFINE\_HEX\_SPOTWELD\_ASSEMBLYs in the model).<br>
Return type
<br>HexSpotweldAssembly |
| --- |

| Example
<br>To get the last DEFINE\_HEX\_SPOTWELD\_ASSEMBLY in model m:<br>
```
var h = HexSpotweldAssembly.Last(m);
```
 |
| --- |

* * *

| LastFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the last free DEFINE\_HEX\_SPOTWELD\_ASSEMBLY label in the model. Also see [HexSpotweldAssembly.FirstFreeLabel()](primer-hexspotweldassembly-class.md#HexSpotweldAssembly::FirstFreeLabel), [HexSpotweldAssembly.NextFreeLabel()](primer-hexspotweldassembly-class.md#HexSpotweldAssembly::NextFreeLabel) and see [Model.LastFreeItemLabel()](primer-model-class.md#Model::LastFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last free DEFINE\_HEX\_SPOTWELD\_ASSEMBLY label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest free in layer* in editing panels). If omitted the whole model will be used.

| Returns
<br>HexSpotweldAssembly label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the last free DEFINE\_HEX\_SPOTWELD\_ASSEMBLY label in model m:<br>
```
var label = HexSpotweldAssembly.LastFreeLabel(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next DEFINE\_HEX\_SPOTWELD\_ASSEMBLY in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>HexSpotweldAssembly object (or null if there are no more DEFINE\_HEX\_SPOTWELD\_ASSEMBLYs in the model).<br>
Return type
<br>HexSpotweldAssembly |
| --- |

| Example
<br>To get the DEFINE\_HEX\_SPOTWELD\_ASSEMBLY in model m after DEFINE\_HEX\_SPOTWELD\_ASSEMBLY h:<br>
```
var h = h.Next();
```
 |
| --- |

* * *

| NextFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the next free (highest+1) DEFINE\_HEX\_SPOTWELD\_ASSEMBLY label in the model. Also see [HexSpotweldAssembly.FirstFreeLabel()](primer-hexspotweldassembly-class.md#HexSpotweldAssembly::FirstFreeLabel), [HexSpotweldAssembly.LastFreeLabel()](primer-hexspotweldassembly-class.md#HexSpotweldAssembly::LastFreeLabel) and [Model.NextFreeItemLabel()](primer-model-class.md#Model::NextFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get next free DEFINE\_HEX\_SPOTWELD\_ASSEMBLY label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest+1 in layer* in editing panels). If omitted the whole model will be used (Equivalent to *Highest+1* in editing panels).

| Returns
<br>HexSpotweldAssembly label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the next free DEFINE\_HEX\_SPOTWELD\_ASSEMBLY label in model m:<br>
```
var label = HexSpotweldAssembly.NextFreeLabel(m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous DEFINE\_HEX\_SPOTWELD\_ASSEMBLY in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>HexSpotweldAssembly object (or null if there are no more DEFINE\_HEX\_SPOTWELD\_ASSEMBLYs in the model).<br>
Return type
<br>HexSpotweldAssembly |
| --- |

| Example
<br>To get the DEFINE\_HEX\_SPOTWELD\_ASSEMBLY in model m before DEFINE\_HEX\_SPOTWELD\_ASSEMBLY h:<br>
```
var h = h.Previous();
```
 |
| --- |

* * *

| RenumberAll(Model*[[Model](primer-model-class.md)]*, start*[integer]*) [static]
Description<br>Renumbers all of the DEFINE\_HEX\_SPOTWELD\_ASSEMBLYs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all DEFINE\_HEX\_SPOTWELD\_ASSEMBLYs will be renumbered in

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the DEFINE\_HEX\_SPOTWELD\_ASSEMBLYs in model m, from 1000000:<br>
```
HexSpotweldAssembly.RenumberAll(m, 1000000);
```
 |
| --- |

* * *

| RenumberFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*) [static]
Description<br>Renumbers all of the flagged DEFINE\_HEX\_SPOTWELD\_ASSEMBLYs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged DEFINE\_HEX\_SPOTWELD\_ASSEMBLYs will be renumbered in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the DEFINE\_HEX\_SPOTWELD\_ASSEMBLYs that you want to renumber

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the DEFINE\_HEX\_SPOTWELD\_ASSEMBLYs in model m flagged with f, from 1000000:<br>
```
HexSpotweldAssembly.RenumberFlagged(m, f, 1000000);
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select DEFINE\_HEX\_SPOTWELD\_ASSEMBLYs using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting DEFINE\_HEX\_SPOTWELD\_ASSEMBLYs

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only DEFINE\_HEX\_SPOTWELD\_ASSEMBLYs from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only DEFINE\_HEX\_SPOTWELD\_ASSEMBLYs that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any DEFINE\_HEX\_SPOTWELD\_ASSEMBLYs can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of DEFINE\_HEX\_SPOTWELD\_ASSEMBLYs selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select DEFINE\_HEX\_SPOTWELD\_ASSEMBLYs from model m, flagging those selected with flag f, giving the prompt 'Select DEFINE\_HEX\_SPOTWELD\_ASSEMBLYs':<br>
```
HexSpotweldAssembly.Select(f, 'Select DEFINE_HEX_SPOTWELD_ASSEMBLYs', m);
```
<br><br>To select DEFINE\_HEX\_SPOTWELD\_ASSEMBLYs, flagging those selected with flag f but limiting selection to DEFINE\_HEX\_SPOTWELD\_ASSEMBLYs flagged with flag l, giving the prompt 'Select DEFINE\_HEX\_SPOTWELD\_ASSEMBLYs':<br>
```
HexSpotweldAssembly.Select(f, 'Select DEFINE_HEX_SPOTWELD_ASSEMBLYs', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the DEFINE\_HEX\_SPOTWELD\_ASSEMBLY. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the DEFINE\_HEX\_SPOTWELD\_ASSEMBLY

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for DEFINE\_HEX\_SPOTWELD\_ASSEMBLY h:<br>
```
h.SetFlag(f);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of DEFINE\_HEX\_SPOTWELD\_ASSEMBLYs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing DEFINE\_HEX\_SPOTWELD\_ASSEMBLYs should be counted. If false or omitted
referenced but undefined DEFINE\_HEX\_SPOTWELD\_ASSEMBLYs will also be included in the total.

| Returns
<br>number of DEFINE\_HEX\_SPOTWELD\_ASSEMBLYs<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of DEFINE\_HEX\_SPOTWELD\_ASSEMBLYs in model m:<br>
```
var total = HexSpotweldAssembly.Total(m);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the DEFINE\_HEX\_SPOTWELD\_ASSEMBLYs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all DEFINE\_HEX\_SPOTWELD\_ASSEMBLYs will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the DEFINE\_HEX\_SPOTWELD\_ASSEMBLYs

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the DEFINE\_HEX\_SPOTWELD\_ASSEMBLYs in model m:<br>
```
HexSpotweldAssembly.UnflagAll(m, f);
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
<br>[HexSpotweldAssembly](primer-hexspotweldassembly-class.md) object.<br>
Return type
<br>HexSpotweldAssembly |
| --- |

| Example
<br>To check if HexSpotweldAssembly property h.example is a parameter by using the [HexSpotweldAssembly.GetParameter()](primer-hexspotweldassembly-class.md#HexSpotweldAssembly::GetParameter) method:<br>
```
if (h.ViewParameters().GetParameter(h.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for DEFINE\_HEX\_SPOTWELD\_ASSEMBLY. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for DEFINE\_HEX\_SPOTWELD\_ASSEMBLY h:<br>
```
h.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this DEFINE\_HEX\_SPOTWELD\_ASSEMBLY. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for DEFINE\_HEX\_SPOTWELD\_ASSEMBLY h:<br>
```
var xrefs = h.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the HexSpotweldAssem data in keyword format. Note that this contains the keyword header and the keyword cards. See also [HexSpotweldAssembly.Keyword()](primer-hexspotweldassembly-class.md#HexSpotweldAssembly::Keyword) and [HexSpotweldAssembly.KeywordCards()](primer-hexspotweldassembly-class.md#HexSpotweldAssembly::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for HexSpotweldAssem s in keyword format<br>
```
var str = s.toString();
```
 |
| --- |

* * *