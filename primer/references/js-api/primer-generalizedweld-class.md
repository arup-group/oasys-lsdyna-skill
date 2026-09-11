# GeneralizedWeld (Gwld) class

The GeneralizedWeld class gives you access to constrained generalized weld cards in PRIMER. [More...](primer-generalizedweld-class.md#GeneralizedWeld_details)

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

* [BlankAll](primer-generalizedweld-class.md#GeneralizedWeld::BlankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [BlankFlagged](primer-generalizedweld-class.md#GeneralizedWeld::BlankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Create](primer-generalizedweld-class.md#GeneralizedWeld::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [First](primer-generalizedweld-class.md#GeneralizedWeld::First)(Model*[[Model](primer-model-class.md)]*)
* [FirstFreeLabel](primer-generalizedweld-class.md#GeneralizedWeld::FirstFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [FlagAll](primer-generalizedweld-class.md#GeneralizedWeld::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-generalizedweld-class.md#GeneralizedWeld::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-generalizedweld-class.md#GeneralizedWeld::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-generalizedweld-class.md#GeneralizedWeld::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-generalizedweld-class.md#GeneralizedWeld::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-generalizedweld-class.md#GeneralizedWeld::Last)(Model*[[Model](primer-model-class.md)]*)
* [LastFreeLabel](primer-generalizedweld-class.md#GeneralizedWeld::LastFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [NextFreeLabel](primer-generalizedweld-class.md#GeneralizedWeld::NextFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [Pick](primer-generalizedweld-class.md#GeneralizedWeld::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [RenumberAll](primer-generalizedweld-class.md#GeneralizedWeld::RenumberAll)(Model*[[Model](primer-model-class.md)]*, start*[integer]*)
* [RenumberFlagged](primer-generalizedweld-class.md#GeneralizedWeld::RenumberFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*)
* [Select](primer-generalizedweld-class.md#GeneralizedWeld::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-generalizedweld-class.md#GeneralizedWeld::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-generalizedweld-class.md#GeneralizedWeld::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnblankAll](primer-generalizedweld-class.md#GeneralizedWeld::UnblankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnblankFlagged](primer-generalizedweld-class.md#GeneralizedWeld::UnblankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [UnflagAll](primer-generalizedweld-class.md#GeneralizedWeld::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-generalizedweld-class.md#GeneralizedWeld::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-generalizedweld-class.md#GeneralizedWeld::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-generalizedweld-class.md#GeneralizedWeld::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Blank](primer-generalizedweld-class.md#GeneralizedWeld::Blank)()
* [Blanked](primer-generalizedweld-class.md#GeneralizedWeld::Blanked)()
* [Browse](primer-generalizedweld-class.md#GeneralizedWeld::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-generalizedweld-class.md#GeneralizedWeld::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-generalizedweld-class.md#GeneralizedWeld::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-generalizedweld-class.md#GeneralizedWeld::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-generalizedweld-class.md#GeneralizedWeld::Edit)(modal (optional)*[boolean]*)
* [Error](primer-generalizedweld-class.md#GeneralizedWeld::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-generalizedweld-class.md#GeneralizedWeld::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetCombinedData](primer-generalizedweld-class.md#GeneralizedWeld::GetCombinedData)(index*[integer]*)
* [GetComments](primer-generalizedweld-class.md#GeneralizedWeld::GetComments)()
* [GetCrossFilletData](primer-generalizedweld-class.md#GeneralizedWeld::GetCrossFilletData)(index*[integer]*)
* [GetFailureData](primer-generalizedweld-class.md#GeneralizedWeld::GetFailureData_deprecated)() [deprecated]
* [GetNodalPair](primer-generalizedweld-class.md#GeneralizedWeld::GetNodalPair_deprecated)() [deprecated]
* [GetParameter](primer-generalizedweld-class.md#GeneralizedWeld::GetParameter)(prop*[string]*)
* [Keyword](primer-generalizedweld-class.md#GeneralizedWeld::Keyword)()
* [KeywordCards](primer-generalizedweld-class.md#GeneralizedWeld::KeywordCards)()
* [Next](primer-generalizedweld-class.md#GeneralizedWeld::Next)()
* [Previous](primer-generalizedweld-class.md#GeneralizedWeld::Previous)()
* [SetCombinedData](primer-generalizedweld-class.md#GeneralizedWeld::SetCombinedData)(index*[integer]*, data*[Array of numbers]*)
* [SetCrossFilletData](primer-generalizedweld-class.md#GeneralizedWeld::SetCrossFilletData)(index*[integer]*, data*[Array of numbers]*)
* [SetFailureData](primer-generalizedweld-class.md#GeneralizedWeld::SetFailureData_deprecated)() [deprecated]
* [SetFlag](primer-generalizedweld-class.md#GeneralizedWeld::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [SetNodalPair](primer-generalizedweld-class.md#GeneralizedWeld::SetNodalPair_deprecated)() [deprecated]
* [Sketch](primer-generalizedweld-class.md#GeneralizedWeld::Sketch)(redraw (optional)*[boolean]*)
* [Unblank](primer-generalizedweld-class.md#GeneralizedWeld::Unblank)()
* [Unsketch](primer-generalizedweld-class.md#GeneralizedWeld::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-generalizedweld-class.md#GeneralizedWeld::ViewParameters)()
* [Warning](primer-generalizedweld-class.md#GeneralizedWeld::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-generalizedweld-class.md#GeneralizedWeld::Xrefs)()
* [toString](primer-generalizedweld-class.md#GeneralizedWeld::toString)()

## GeneralizedWeld constants

| **Name** | **Description** |
| --- | --- |
| GeneralizedWeld.BUTT | GeneralizedWeld is \*CONSTRAINED\_GENERALIZED\_WELD\_BUTT. |
| GeneralizedWeld.COMBINED | GeneralizedWeld is \*CONSTRAINED\_GENERALIZED\_WELD\_COMBINED. |
| GeneralizedWeld.CROSS\_FILLET | GeneralizedWeld is \*CONSTRAINED\_GENERALIZED\_WELD\_CROSS\_FILLET. |
| GeneralizedWeld.FILLET | GeneralizedWeld is \*CONSTRAINED\_GENERALIZED\_WELD\_FILLET. |
| GeneralizedWeld.SPOT | GeneralizedWeld is \*CONSTRAINED\_GENERALIZED\_WELD\_SPOT. |

## GeneralizedWeld properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| a | real | Width of fillet ([GeneralizedWeld.FILLET](primer-generalizedweld-class.md#GeneralizedWeld.FILLET), [GeneralizedWeld.CROSS_FILLET](primer-generalizedweld-class.md#GeneralizedWeld.CROSS_FILLET)) |
| alpha | real | Weld angle ([GeneralizedWeld.FILLET](primer-generalizedweld-class.md#GeneralizedWeld.FILLET), [GeneralizedWeld.CROSS_FILLET](primer-generalizedweld-class.md#GeneralizedWeld.CROSS_FILLET)) |
| beta | real | Failure parameter ([GeneralizedWeld.FILLET](primer-generalizedweld-class.md#GeneralizedWeld.FILLET), [GeneralizedWeld.BUTT](primer-generalizedweld-class.md#GeneralizedWeld.BUTT), [GeneralizedWeld.CROSS_FILLET](primer-generalizedweld-class.md#GeneralizedWeld.CROSS_FILLET)) |
| cid | integer | [Coordinate System](primer-coordinatesystem-class.md) ID. |
| d | real | Thickness of weld ([GeneralizedWeld.BUTT](primer-generalizedweld-class.md#GeneralizedWeld.BUTT)) |
| epsf | real | Effective plastic strain at failure ([GeneralizedWeld.SPOT](primer-generalizedweld-class.md#GeneralizedWeld.SPOT), [GeneralizedWeld.FILLET](primer-generalizedweld-class.md#GeneralizedWeld.FILLET), [GeneralizedWeld.BUTT](primer-generalizedweld-class.md#GeneralizedWeld.BUTT), [GeneralizedWeld.CROSS_FILLET](primer-generalizedweld-class.md#GeneralizedWeld.CROSS_FILLET)) |
| exists (read only) | logical | true if generalized weld exists, false if referred to but not defined. |
| filter | integer | Number of force vectors saved for filtering. |
| id | logical | true if \_ID option is set, false if not |
| include | integer | The [Include](primer-include-class.md) file number that the generalized weld is in. |
| l | real | Length of weld ([GeneralizedWeld.FILLET](primer-generalizedweld-class.md#GeneralizedWeld.FILLET), [GeneralizedWeld.BUTT](primer-generalizedweld-class.md#GeneralizedWeld.BUTT), [GeneralizedWeld.CROSS_FILLET](primer-generalizedweld-class.md#GeneralizedWeld.CROSS_FILLET)) |
| label | integer | Constrained Generalized weld number. |
| lt | real | Transverse length ([GeneralizedWeld.BUTT](primer-generalizedweld-class.md#GeneralizedWeld.BUTT)) |
| m | real | Exponent for shear force ([GeneralizedWeld.SPOT](primer-generalizedweld-class.md#GeneralizedWeld.SPOT)) |
| model (read only) | integer | The [Model](primer-model-class.md) number that the generalized weld is in. |
| n | real | Exponent for normal force ([GeneralizedWeld.SPOT](primer-generalizedweld-class.md#GeneralizedWeld.SPOT)) |
| npr | integer | Number of individual nodal pairs in cross fillet and combined weld. |
| nprt | integer | Printout option. |
| nsid | integer | [Set](primer-set-class.md) Node Set ID. |
| option | constant | GeneralizedWeld type. Can be [GeneralizedWeld.SPOT](primer-generalizedweld-class.md#GeneralizedWeld.SPOT), [GeneralizedWeld.FILLET](primer-generalizedweld-class.md#GeneralizedWeld.FILLET), [GeneralizedWeld.BUTT](primer-generalizedweld-class.md#GeneralizedWeld.BUTT), [GeneralizedWeld.CROSS_FILLET](primer-generalizedweld-class.md#GeneralizedWeld.CROSS_FILLET), [GeneralizedWeld.COMBINED](primer-generalizedweld-class.md#GeneralizedWeld.COMBINED) |
| sigf | real | Stress at failure ([GeneralizedWeld.FILLET](primer-generalizedweld-class.md#GeneralizedWeld.FILLET)) |
| sigy | real | Stress at failure ([GeneralizedWeld.BUTT](primer-generalizedweld-class.md#GeneralizedWeld.BUTT), [GeneralizedWeld.CROSS_FILLET](primer-generalizedweld-class.md#GeneralizedWeld.CROSS_FILLET)) |
| sn | real | Normal force at failure ([GeneralizedWeld.SPOT](primer-generalizedweld-class.md#GeneralizedWeld.SPOT)) |
| ss | real | Shear force at faliure ([GeneralizedWeld.SPOT](primer-generalizedweld-class.md#GeneralizedWeld.SPOT)) |
| tfail | real | Failure time for constraint set ([GeneralizedWeld.SPOT](primer-generalizedweld-class.md#GeneralizedWeld.SPOT), [GeneralizedWeld.FILLET](primer-generalizedweld-class.md#GeneralizedWeld.FILLET), [GeneralizedWeld.BUTT](primer-generalizedweld-class.md#GeneralizedWeld.BUTT), [GeneralizedWeld.CROSS_FILLET](primer-generalizedweld-class.md#GeneralizedWeld.CROSS_FILLET)) |
| w | real | Width of flange ([GeneralizedWeld.FILLET](primer-generalizedweld-class.md#GeneralizedWeld.FILLET), [GeneralizedWeld.CROSS_FILLET](primer-generalizedweld-class.md#GeneralizedWeld.CROSS_FILLET)) |
| wid | integer | Constrained Generalized weld number (identical to label). |
| window | real | Filter time window. |

| Detailed Description<br>The GeneralizedWeld class allows you to create, modify, edit and manipulate generalized weld cards.<br>See the documentation below for more details.<br>
<br>For convenience "Gwld" can also be used as the class name instead of "GeneralizedWeld". |
| --- |

| Constructor
new GeneralizedWeld(Model*[[Model](primer-model-class.md)]*, option*[constant]*, nsid*[integer]*, cid (optional)*[integer]*, filter (optional)*[integer]*, window (optional)*[real]*, npr (optional)*[integer]*, nprt (optional)*[integer]*, wid (optional)*[integer]*)

Description<br>Create a new [GeneralizedWeld](primer-generalizedweld-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that gwld will be created in

* option (constant)
 
Constrained generalized weld type (any).

* nsid (integer)
 
[Set](primer-set-class.md) Node Set ID.

* cid (optional) (integer)
 
[Coordinate System](primer-coordinatesystem-class.md) ID.

* filter (optional) (integer)
 
Number of force vectors saved for filtering.

* window (optional) (real)
 
Filter time window.

* npr (optional) (integer)
 
Number of individual nodal pairs in cross fillet and combined weld.

* nprt (optional) (integer)
 
Printout option.

* wid (optional) (integer)
 
Constrained Generalized weld number.

| Returns
<br>[GeneralizedWeld](primer-generalizedweld-class.md) object<br>
Return type
<br>GeneralizedWeld |
| --- |

| Example
<br>To create a new gwld 1000 of type SPOT in model m with specifiction: nsid, cid, filter, window, nprt are 91, 92, 81, 0.5, 82 respectively<br>
```
var w = new GeneralizedWeld(m, GeneralizedWeld.SPOT, 91, 92, 81, 0.5, 82, 1000);
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a generalized weld. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the generalized weld

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the generalized weld gw:<br>
```
gw.AssociateComment(c);
```
 |
| --- |

* * *

| Blank()

Description<br>Blanks the generalized weld |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To blank generalized weld gw:<br>
```
gw.Blank();
```
 |
| --- |

* * *

| BlankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the generalized welds in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all generalized welds will be blanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the generalized welds in model m:<br>
```
GeneralizedWeld.BlankAll(m);
```
 |
| --- |

* * *

| BlankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the flagged generalized welds in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged generalized welds will be blanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the generalized welds that you want to blank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the generalized welds in model m flagged with f:<br>
```
GeneralizedWeld.BlankFlagged(m, f);
```
 |
| --- |

* * *

| Blanked()

Description<br>Checks if the generalized weld is blanked or not. |
| --- |

#### Arguments

No arguments

| Returns
<br>true if blanked, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if generalized weld gw is blanked:<br>
```
if (gw.Blanked() ) do_something...
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
<br>To Browse generalized weld gw:<br>
```
gw.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the generalized weld. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the generalized weld

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for generalized weld gw:<br>
```
gw.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the generalized weld. The target include of the copied generalized weld can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>GeneralizedWeld object<br>
Return type
<br>GeneralizedWeld |
| --- |

| Example
<br>To copy generalized weld gw into generalized weld z:<br>
```
var z = gw.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a generalized weld |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the generalized weld will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>GeneralizedWeld object (or null if not made).<br>
Return type
<br>GeneralizedWeld |
| --- |

| Example
<br>To start creating a generalized weld in model m:<br>
```
var gw = GeneralizedWeld.Create(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a generalized weld. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the generalized weld

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the generalized weld gw:<br>
```
gw.DetachComment(c);
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
<br>To Edit generalized weld gw:<br>
```
gw.Edit();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for generalized weld. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for generalized weld gw:<br>
```
gw.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first generalized weld in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first generalized weld in

| Returns
<br>GeneralizedWeld object (or null if there are no generalized welds in the model).<br>
Return type
<br>GeneralizedWeld |
| --- |

| Example
<br>To get the first generalized weld in model m:<br>
```
var gw = GeneralizedWeld.First(m);
```
 |
| --- |

* * *

| FirstFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the first free generalized weld label in the model. Also see [GeneralizedWeld.LastFreeLabel()](primer-generalizedweld-class.md#GeneralizedWeld::LastFreeLabel), [GeneralizedWeld.NextFreeLabel()](primer-generalizedweld-class.md#GeneralizedWeld::NextFreeLabel) and [Model.FirstFreeItemLabel()](primer-model-class.md#Model::FirstFreeItemLabel). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first free generalized weld label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *First free in layer* in editing panels). If omitted the whole model will be used (Equivalent to *First free* in editing panels).

| Returns
<br>GeneralizedWeld label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the first free generalized weld label in model m:<br>
```
var label = GeneralizedWeld.FirstFreeLabel(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the generalized welds in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all generalized welds will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the generalized welds

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the generalized welds with flag f in model m:<br>
```
GeneralizedWeld.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the generalized weld is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the generalized weld

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if generalized weld gw has flag f set on it:<br>
```
if (gw.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each generalized weld in the model.<br> **Note that ForEach has been designed to make looping over generalized welds as fast as possible and so has some limitations. Firstly, a single temporary GeneralizedWeld object is created and on each function call it is updated with the current generalized weld data. This means that you should not try to store the GeneralizedWeld object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new generalized welds inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all generalized welds are in

* func (function)
 
Function to call for each generalized weld

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the generalized welds in model m:<br>
```
GeneralizedWeld.ForEach(m, test);
function test(gw)
{
// gw is GeneralizedWeld object
}
```
<br><br>To call function test for all of the generalized welds in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
GeneralizedWeld.ForEach(m, test, data);
function test(gw, extra)
{
// gw is GeneralizedWeld object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of GeneralizedWeld objects or properties for all of the generalized welds in a model in PRIMER. If the optional property argument is not given then an array of GeneralizedWeld objects is returned. If the property argument is given, that property value for each generalized weld is returned in the array instead of a GeneralizedWeld object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get generalized welds from

* property (optional) (string)
 
Name for property to get for all generalized welds in the model

| Returns
<br>Array of GeneralizedWeld objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of GeneralizedWeld objects for all of the generalized welds in model m:<br>
```
var a = GeneralizedWeld.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each generalized weld in model m:<br>
```
var a = GeneralizedWeld.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetCombinedData(index*[integer]*)

Description<br>Returns the combined data for a specific nodal pair as an array. |
| --- |

#### Arguments

* index (integer)
 
Index you want the data for. **Note that indices start at 0**.

| Returns
<br>An array containing the data (tfail, epsf, sigy, beta, l, w, a, alpha, nodea, nodeb, ncid, wtyp).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the data for the 3rd node pair for generalized weld gw:<br>
```
var data = gw.GetCombinedData(2);
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a generalized weld. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the generalized weld gw:<br>
```
var comm_array = gw.GetComments();
```
 |
| --- |

* * *

| GetCrossFilletData(index*[integer]*)

Description<br>Returns the cross fillet data for a specific nodal pair as an array. |
| --- |

#### Arguments

* index (integer)
 
Index you want the data for. **Note that indices start at 0**.

| Returns
<br>An array containing the data (nodea, nodeb, ncid).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the data for the 3rd node pair for generalized weld gw:<br>
```
var data = gw.GetCrossFilletData(2);
```
 |
| --- |

* * *

| GetFailureData() [deprecated]
<br>This function is deprecated in version 11.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>
Description<br>Access the properties directly or use [GeneralizedWeld.GetCombinedData()](primer-generalizedweld-class.md#GeneralizedWeld::GetCombinedData) for [GeneralizedWeld.COMBINED](primer-generalizedweld-class.md#GeneralizedWeld.COMBINED) instead. |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

|  |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of GeneralizedWeld objects for all of the flagged generalized welds in a model in PRIMER If the optional property argument is not given then an array of GeneralizedWeld objects is returned. If the property argument is given, then that property value for each generalized weld is returned in the array instead of a GeneralizedWeld object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get generalized welds from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the generalized welds that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged generalized welds in the model

| Returns
<br>Array of GeneralizedWeld objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of GeneralizedWeld objects for all of the generalized welds in model m flagged with f:<br>
```
var gw = GeneralizedWeld.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the generalized welds in model m flagged with f:<br>
```
var a = GeneralizedWeld.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the GeneralizedWeld object for a generalized weld ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the generalized weld in

* number (integer)
 
number of the generalized weld you want the GeneralizedWeld object for

| Returns
<br>GeneralizedWeld object (or null if generalized weld does not exist).<br>
Return type
<br>GeneralizedWeld |
| --- |

| Example
<br>To get the GeneralizedWeld object for generalized weld 100 in model m<br>
```
var gw = GeneralizedWeld.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetNodalPair() [deprecated]
<br>This function is deprecated in version 11.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>
Description<br>Use [GeneralizedWeld.GetCombinedData()](primer-generalizedweld-class.md#GeneralizedWeld::GetCombinedData) for [GeneralizedWeld.COMBINED](primer-generalizedweld-class.md#GeneralizedWeld.COMBINED) or [GeneralizedWeld.GetCrossFilletData()](primer-generalizedweld-class.md#GeneralizedWeld::GetCrossFilletData) for [GeneralizedWeld.CROSS_FILLET](primer-generalizedweld-class.md#GeneralizedWeld.CROSS_FILLET) instead. |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

|  |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a GeneralizedWeld property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [GeneralizedWeld.ViewParameters()](primer-generalizedweld-class.md#GeneralizedWeld::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
generalized weld property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if GeneralizedWeld property gw.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (gw.GetParameter(gw.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if GeneralizedWeld property gw.example is a parameter by using the GetParameter method:<br>
```
if (gw.ViewParameters().GetParameter(gw.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this gwld (\*CONSTRAINED\_GENERALIZED\_WELD\_xxxx). **Note that a carriage return is not added**. See also [GeneralizedWeld.KeywordCards()](primer-generalizedweld-class.md#GeneralizedWeld::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for generalized weld gw:<br>
```
var key = gw.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the gwld. **Note that a carriage return is not added**. See also [GeneralizedWeld.Keyword()](primer-generalizedweld-class.md#GeneralizedWeld::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for generalized weld gw:<br>
```
var cards = gw.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last generalized weld in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last generalized weld in

| Returns
<br>GeneralizedWeld object (or null if there are no generalized welds in the model).<br>
Return type
<br>GeneralizedWeld |
| --- |

| Example
<br>To get the last generalized weld in model m:<br>
```
var gw = GeneralizedWeld.Last(m);
```
 |
| --- |

* * *

| LastFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the last free generalized weld label in the model. Also see [GeneralizedWeld.FirstFreeLabel()](primer-generalizedweld-class.md#GeneralizedWeld::FirstFreeLabel), [GeneralizedWeld.NextFreeLabel()](primer-generalizedweld-class.md#GeneralizedWeld::NextFreeLabel) and see [Model.LastFreeItemLabel()](primer-model-class.md#Model::LastFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last free generalized weld label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest free in layer* in editing panels). If omitted the whole model will be used.

| Returns
<br>GeneralizedWeld label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the last free generalized weld label in model m:<br>
```
var label = GeneralizedWeld.LastFreeLabel(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next generalized weld in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>GeneralizedWeld object (or null if there are no more generalized welds in the model).<br>
Return type
<br>GeneralizedWeld |
| --- |

| Example
<br>To get the generalized weld in model m after generalized weld gw:<br>
```
var gw = gw.Next();
```
 |
| --- |

* * *

| NextFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the next free (highest+1) generalized weld label in the model. Also see [GeneralizedWeld.FirstFreeLabel()](primer-generalizedweld-class.md#GeneralizedWeld::FirstFreeLabel), [GeneralizedWeld.LastFreeLabel()](primer-generalizedweld-class.md#GeneralizedWeld::LastFreeLabel) and [Model.NextFreeItemLabel()](primer-model-class.md#Model::NextFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get next free generalized weld label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest+1 in layer* in editing panels). If omitted the whole model will be used (Equivalent to *Highest+1* in editing panels).

| Returns
<br>GeneralizedWeld label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the next free generalized weld label in model m:<br>
```
var label = GeneralizedWeld.NextFreeLabel(m);
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a generalized weld. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only generalized welds from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only generalized welds that are flagged with *limit* can be selected. If omitted, or null, any generalized welds from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[GeneralizedWeld](primer-generalizedweld-class.md) object (or null if not picked)<br>
Return type
<br>GeneralizedWeld |
| --- |

| Example
<br>To pick a generalized weld from model m giving the prompt 'Pick generalized weld from screen':<br>
```
var gw = GeneralizedWeld.Pick('Pick generalized weld from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous generalized weld in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>GeneralizedWeld object (or null if there are no more generalized welds in the model).<br>
Return type
<br>GeneralizedWeld |
| --- |

| Example
<br>To get the generalized weld in model m before generalized weld gw:<br>
```
var gw = gw.Previous();
```
 |
| --- |

* * *

| RenumberAll(Model*[[Model](primer-model-class.md)]*, start*[integer]*) [static]
Description<br>Renumbers all of the generalized welds in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all generalized welds will be renumbered in

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the generalized welds in model m, from 1000000:<br>
```
GeneralizedWeld.RenumberAll(m, 1000000);
```
 |
| --- |

* * *

| RenumberFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*) [static]
Description<br>Renumbers all of the flagged generalized welds in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged generalized welds will be renumbered in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the generalized welds that you want to renumber

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the generalized welds in model m flagged with f, from 1000000:<br>
```
GeneralizedWeld.RenumberFlagged(m, f, 1000000);
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select generalized welds using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting generalized welds

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only generalized welds from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only generalized welds that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any generalized welds can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of generalized welds selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select generalized welds from model m, flagging those selected with flag f, giving the prompt 'Select generalized welds':<br>
```
GeneralizedWeld.Select(f, 'Select generalized welds', m);
```
<br><br>To select generalized welds, flagging those selected with flag f but limiting selection to generalized welds flagged with flag l, giving the prompt 'Select generalized welds':<br>
```
GeneralizedWeld.Select(f, 'Select generalized welds', l);
```
 |
| --- |

* * *

| SetCombinedData(index*[integer]*, data*[Array of numbers]*)

Description<br>Sets the combined data for a specific nodal pair. |
| --- |

#### Arguments

* index (integer)
 
Index you want to set the data for. **Note that indices start at 0**.

* data (Array of numbers)
 
Array containing the data. The array length should be 12 (tfail, epsf, sigy, beta, l, w, a, alpha, nodea, nodeb, ncid, wtyp)

| Returns
<br>No return value. |
| --- |

| Example
<br>To set the data for the 3rd nodal pair for generalized weld gw to the values in array adata:<br>
```
gw.SetCombinedData(2, adata);
```
 |
| --- |

* * *

| SetCrossFilletData(index*[integer]*, data*[Array of numbers]*)

Description<br>Sets the cross fillet data for a specific nodal pair. |
| --- |

#### Arguments

* index (integer)
 
Index you want to set the data for. **Note that indices start at 0**.

* data (Array of numbers)
 
Array containing the data. The array length should be 3 (nodea, nodeb, ncid)

| Returns
<br>No return value. |
| --- |

| Example
<br>To set the data for the 3rd nodal pair for generalized weld gw to the values in array adata:<br>
```
gw.SetCrossFilletData(2, adata);
```
 |
| --- |

* * *

| SetFailureData() [deprecated]
<br>This function is deprecated in version 11.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>
Description<br>Access the properties directly or use [GeneralizedWeld.SetCombinedData()](primer-generalizedweld-class.md#GeneralizedWeld::SetCombinedData) for [GeneralizedWeld.COMBINED](primer-generalizedweld-class.md#GeneralizedWeld.COMBINED) instead. |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

|  |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the generalized weld. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the generalized weld

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for generalized weld gw:<br>
```
gw.SetFlag(f);
```
 |
| --- |

* * *

| SetNodalPair() [deprecated]
<br>This function is deprecated in version 11.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>
Description<br>Use [GeneralizedWeld.SetCombinedData()](primer-generalizedweld-class.md#GeneralizedWeld::SetCombinedData) for [GeneralizedWeld.COMBINED](primer-generalizedweld-class.md#GeneralizedWeld.COMBINED) or [GeneralizedWeld.SetCrossFilletData()](primer-generalizedweld-class.md#GeneralizedWeld::SetCrossFilletData) for [GeneralizedWeld.CROSS_FILLET](primer-generalizedweld-class.md#GeneralizedWeld.CROSS_FILLET) instead. |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

|  |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the generalized weld. The generalized weld will be sketched until you either call [GeneralizedWeld.Unsketch()](primer-generalizedweld-class.md#GeneralizedWeld::Unsketch), [GeneralizedWeld.UnsketchAll()](primer-generalizedweld-class.md#GeneralizedWeld::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the generalized weld is sketched. If omitted redraw is true. If you want to sketch several generalized welds and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch generalized weld gw:<br>
```
gw.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged generalized welds in the model. The generalized welds will be sketched until you either call [GeneralizedWeld.Unsketch()](primer-generalizedweld-class.md#GeneralizedWeld::Unsketch), [GeneralizedWeld.UnsketchFlagged()](primer-generalizedweld-class.md#GeneralizedWeld::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged generalized welds will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the generalized welds that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the generalized welds are sketched. If omitted redraw is true. If you want to sketch flagged generalized welds several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all generalized welds flagged with flag in model m:<br>
```
GeneralizedWeld.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of generalized welds in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing generalized welds should be counted. If false or omitted
referenced but undefined generalized welds will also be included in the total.

| Returns
<br>number of generalized welds<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of generalized welds in model m:<br>
```
var total = GeneralizedWeld.Total(m);
```
 |
| --- |

* * *

| Unblank()

Description<br>Unblanks the generalized weld |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank generalized weld gw:<br>
```
gw.Unblank();
```
 |
| --- |

* * *

| UnblankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the generalized welds in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all generalized welds will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the generalized welds in model m:<br>
```
GeneralizedWeld.UnblankAll(m);
```
 |
| --- |

* * *

| UnblankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the flagged generalized welds in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the flagged generalized welds will be unblanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the generalized welds that you want to unblank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the generalized welds in model m flagged with f:<br>
```
GeneralizedWeld.UnblankFlagged(m, f);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the generalized welds in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all generalized welds will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the generalized welds

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the generalized welds in model m:<br>
```
GeneralizedWeld.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the generalized weld. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the generalized weld is unsketched. If omitted redraw is true. If you want to unsketch several generalized welds and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch generalized weld gw:<br>
```
gw.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all generalized welds. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all generalized welds will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the generalized welds are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all generalized welds in model m:<br>
```
GeneralizedWeld.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged generalized welds in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all generalized welds will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the generalized welds that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the generalized welds are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all generalized welds flagged with flag in model m:<br>
```
GeneralizedWeld.UnsketchAll(m, flag);
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
<br>[GeneralizedWeld](primer-generalizedweld-class.md) object.<br>
Return type
<br>GeneralizedWeld |
| --- |

| Example
<br>To check if GeneralizedWeld property gw.example is a parameter by using the [GeneralizedWeld.GetParameter()](primer-generalizedweld-class.md#GeneralizedWeld::GetParameter) method:<br>
```
if (gw.ViewParameters().GetParameter(gw.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for generalized weld. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for generalized weld gw:<br>
```
gw.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this generalized weld. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for generalized weld gw:<br>
```
var xrefs = gw.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the gwld data in keyword format. Note that this contains the keyword header and the keyword cards. See also [GeneralizedWeld.Keyword()](primer-generalizedweld-class.md#GeneralizedWeld::Keyword) and [GeneralizedWeld.KeywordCards()](primer-generalizedweld-class.md#GeneralizedWeld::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for generalized weld gw in keyword format<br>
```
var s = gw.toString();
```
 |
| --- |

* * *