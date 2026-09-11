# DeformableToRigid class

The DeformableToRigid class gives you access to \*DEFORMABLE\_TO\_RIGID cards in PRIMER. [More...](primer-deformabletorigid-class.md#DeformableToRigid_details)

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

* [BlankAll](primer-deformabletorigid-class.md#DeformableToRigid::BlankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [BlankFlagged](primer-deformabletorigid-class.md#DeformableToRigid::BlankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Create](primer-deformabletorigid-class.md#DeformableToRigid::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [First](primer-deformabletorigid-class.md#DeformableToRigid::First)(Model*[[Model](primer-model-class.md)]*)
* [FirstFreeLabel](primer-deformabletorigid-class.md#DeformableToRigid::FirstFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [FlagAll](primer-deformabletorigid-class.md#DeformableToRigid::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-deformabletorigid-class.md#DeformableToRigid::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-deformabletorigid-class.md#DeformableToRigid::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-deformabletorigid-class.md#DeformableToRigid::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-deformabletorigid-class.md#DeformableToRigid::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-deformabletorigid-class.md#DeformableToRigid::Last)(Model*[[Model](primer-model-class.md)]*)
* [LastFreeLabel](primer-deformabletorigid-class.md#DeformableToRigid::LastFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [NextFreeLabel](primer-deformabletorigid-class.md#DeformableToRigid::NextFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [Pick](primer-deformabletorigid-class.md#DeformableToRigid::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [RenumberAll](primer-deformabletorigid-class.md#DeformableToRigid::RenumberAll)(Model*[[Model](primer-model-class.md)]*, start*[integer]*)
* [RenumberFlagged](primer-deformabletorigid-class.md#DeformableToRigid::RenumberFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*)
* [Select](primer-deformabletorigid-class.md#DeformableToRigid::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-deformabletorigid-class.md#DeformableToRigid::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-deformabletorigid-class.md#DeformableToRigid::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnblankAll](primer-deformabletorigid-class.md#DeformableToRigid::UnblankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnblankFlagged](primer-deformabletorigid-class.md#DeformableToRigid::UnblankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [UnflagAll](primer-deformabletorigid-class.md#DeformableToRigid::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-deformabletorigid-class.md#DeformableToRigid::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-deformabletorigid-class.md#DeformableToRigid::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-deformabletorigid-class.md#DeformableToRigid::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Blank](primer-deformabletorigid-class.md#DeformableToRigid::Blank)()
* [Blanked](primer-deformabletorigid-class.md#DeformableToRigid::Blanked)()
* [Browse](primer-deformabletorigid-class.md#DeformableToRigid::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-deformabletorigid-class.md#DeformableToRigid::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-deformabletorigid-class.md#DeformableToRigid::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-deformabletorigid-class.md#DeformableToRigid::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-deformabletorigid-class.md#DeformableToRigid::Edit)(modal (optional)*[boolean]*)
* [Error](primer-deformabletorigid-class.md#DeformableToRigid::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-deformabletorigid-class.md#DeformableToRigid::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-deformabletorigid-class.md#DeformableToRigid::GetComments)()
* [GetDefToRegAutoCard](primer-deformabletorigid-class.md#DeformableToRigid::GetDefToRegAutoCard)(ctype*[integer]*, index*[integer]*)
* [GetParameter](primer-deformabletorigid-class.md#DeformableToRigid::GetParameter)(prop*[string]*)
* [Keyword](primer-deformabletorigid-class.md#DeformableToRigid::Keyword)()
* [KeywordCards](primer-deformabletorigid-class.md#DeformableToRigid::KeywordCards)()
* [Next](primer-deformabletorigid-class.md#DeformableToRigid::Next)()
* [Previous](primer-deformabletorigid-class.md#DeformableToRigid::Previous)()
* [RemoveDefToRegAutoCard](primer-deformabletorigid-class.md#DeformableToRigid::RemoveDefToRegAutoCard)(ctype*[integer]*, index*[integer]*)
* [SetDefToRegAutoCard](primer-deformabletorigid-class.md#DeformableToRigid::SetDefToRegAutoCard)(ctype*[integer]*, index*[integer]*, ptype*[integer]*, pid*[integer]*, lrb (optional)*[integer]*)
* [SetFlag](primer-deformabletorigid-class.md#DeformableToRigid::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Sketch](primer-deformabletorigid-class.md#DeformableToRigid::Sketch)(redraw (optional)*[boolean]*)
* [Unblank](primer-deformabletorigid-class.md#DeformableToRigid::Unblank)()
* [Unsketch](primer-deformabletorigid-class.md#DeformableToRigid::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-deformabletorigid-class.md#DeformableToRigid::ViewParameters)()
* [Warning](primer-deformabletorigid-class.md#DeformableToRigid::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-deformabletorigid-class.md#DeformableToRigid::Xrefs)()
* [toString](primer-deformabletorigid-class.md#DeformableToRigid::toString)()

## DeformableToRigid constants

### Constants for DEFORMABLE\_TO\_RIGID type

| **Name** | **Description** |
| --- | --- |
| DeformableToRigid.AUTOMATIC | \*DEFORMABLE\_TO\_RIGID\_AUTOMATIC. |
| DeformableToRigid.INERTIA | \*DEFORMABLE\_TO\_RIGID\_INERTIA. |
| DeformableToRigid.SIMPLE | \*DEFORMABLE\_TO\_RIGID. |

### Constants for PID field type

| **Name** | **Description** |
| --- | --- |
| DeformableToRigid.PART | Identifies the PID type as [Part](primer-part-class.md). Used for field [ptype](primer-deformabletorigid-class.md#ptype). Used only for [DeformableToRigid.SIMPLE](primer-deformabletorigid-class.md#DeformableToRigid.SIMPLE) or [DeformableToRigid.INERTIA](primer-deformabletorigid-class.md#DeformableToRigid.INERTIA). |
| DeformableToRigid.PSET | Identifies the PID type as [Part Set](primer-set-class.md). Used for field [ptype](primer-deformabletorigid-class.md#ptype). Used only for [DeformableToRigid.SIMPLE](primer-deformabletorigid-class.md#DeformableToRigid.SIMPLE) or [DeformableToRigid.INERTIA](primer-deformabletorigid-class.md#DeformableToRigid.INERTIA). |

### Constants for automatic types

| **Name** | **Description** |
| --- | --- |
| DeformableToRigid.D2R | Identifies that card is being written/retreived/removed as D2R card.<br> Used in methods [GetDefToRegAutoCard](primer-deformabletorigid-class.md#DeformableToRigid::GetDefToRegAutoCard), [SetDefToRegAutoCard](primer-deformabletorigid-class.md#DeformableToRigid::SetDefToRegAutoCard) and [RemoveDefToRegAutoCard](primer-deformabletorigid-class.md#DeformableToRigid::RemoveDefToRegAutoCard).<br> Used only for [DeformableToRigid.AUTOMATIC](primer-deformabletorigid-class.md#DeformableToRigid.AUTOMATIC). |
| DeformableToRigid.R2D | Identifies that card is being written/retreived/removed as R2D card.<br> Used in methods [GetDefToRegAutoCard](primer-deformabletorigid-class.md#DeformableToRigid::GetDefToRegAutoCard), [SetDefToRegAutoCard](primer-deformabletorigid-class.md#DeformableToRigid::SetDefToRegAutoCard) and [RemoveDefToRegAutoCard](primer-deformabletorigid-class.md#DeformableToRigid::RemoveDefToRegAutoCard).<br> Used only for [DeformableToRigid.AUTOMATIC](primer-deformabletorigid-class.md#DeformableToRigid.AUTOMATIC). |

## DeformableToRigid properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| code | integer | Activation switch code. (Valid values: 0-5). Used only for [DeformableToRigid.AUTOMATIC](primer-deformabletorigid-class.md#DeformableToRigid.AUTOMATIC). |
| d2r | integer | Number of deformable parts to be switched to rigid plus number of rigid parts for which new lead/constrained rigid body combinations will be defined. Used only for [DeformableToRigid.AUTOMATIC](primer-deformabletorigid-class.md#DeformableToRigid.AUTOMATIC). |
| dtmax | real | Maximum permitted time step size after switch. Used only for [DeformableToRigid.AUTOMATIC](primer-deformabletorigid-class.md#DeformableToRigid.AUTOMATIC). |
| entno | integer | Rigid wall/contact surface number for switch codes 1, 2, 3, 4. Used only for [DeformableToRigid.AUTOMATIC](primer-deformabletorigid-class.md#DeformableToRigid.AUTOMATIC). |
| exists (read only) | logical | true if deformable to rigid exists, false if referred to but not defined. |
| include | integer | The [Include](primer-include-class.md) file number that the deformable to rigid is in. |
| ixx | real | The xx component of inertia tensor. Used only for [DeformableToRigid.INERTIA](primer-deformabletorigid-class.md#DeformableToRigid.INERTIA). |
| ixx | real | The xx component of inertia tensor. Used only for [DeformableToRigid.INERTIA](primer-deformabletorigid-class.md#DeformableToRigid.INERTIA). |
| ixy | real | The xy component of inertia tensor. Used only for [DeformableToRigid.INERTIA](primer-deformabletorigid-class.md#DeformableToRigid.INERTIA). |
| ixz | real | The xz component of inertia tensor. Used only for [DeformableToRigid.INERTIA](primer-deformabletorigid-class.md#DeformableToRigid.INERTIA). |
| iyz | real | The yz component of inertia tensor. Used only for [DeformableToRigid.INERTIA](primer-deformabletorigid-class.md#DeformableToRigid.INERTIA). |
| izz | real | The zz component of inertia tensor. Used only for [DeformableToRigid.INERTIA](primer-deformabletorigid-class.md#DeformableToRigid.INERTIA). |
| lrb | integer | [Part](primer-part-class.md) ID of the lead rigid body to which the part is merged. Used only for [DeformableToRigid.SIMPLE](primer-deformabletorigid-class.md#DeformableToRigid.SIMPLE). |
| model (read only) | integer | The [Model](primer-model-class.md) number that the deformable to rigid is in. |
| ncsf | integer | Nodal constraint body flag. (Valid values : 0, 1, 2). Used only for [DeformableToRigid.AUTOMATIC](primer-deformabletorigid-class.md#DeformableToRigid.AUTOMATIC). |
| nrbf | integer | Nodal rigid body flag. (Valid values : 0, 1, 2). Used only for [DeformableToRigid.AUTOMATIC](primer-deformabletorigid-class.md#DeformableToRigid.AUTOMATIC). |
| offset | real | Optional contact thickness for switch to deformable. Used only for [DeformableToRigid.AUTOMATIC](primer-deformabletorigid-class.md#DeformableToRigid.AUTOMATIC). |
| paired | integer | Define a pair of related switches. (Valid values : -1, 0, 1). Used only for [DeformableToRigid.AUTOMATIC](primer-deformabletorigid-class.md#DeformableToRigid.AUTOMATIC). |
| pid | integer | [Part](primer-part-class.md) or [Part set](primer-set-class.md)ID which is switched to a rigid material. Depends on value of [ptype](primer-deformabletorigid-class.md#ptype). Used only for [DeformableToRigid.SIMPLE](primer-deformabletorigid-class.md#DeformableToRigid.SIMPLE) or [DeformableToRigid.INERTIA](primer-deformabletorigid-class.md#DeformableToRigid.INERTIA). |
| ptype | integer | Type of PID. Valid values are: [DeformableToRigid.PART](primer-deformabletorigid-class.md#DeformableToRigid.PART) or [DeformableToRigid.PSET](primer-deformabletorigid-class.md#DeformableToRigid.PSET). Used only for [DeformableToRigid.SIMPLE](primer-deformabletorigid-class.md#DeformableToRigid.SIMPLE). |
| r2d | integer | Number of rigid parts to be switched to deformable. Used only for [DeformableToRigid.AUTOMATIC](primer-deformabletorigid-class.md#DeformableToRigid.AUTOMATIC). |
| relsw | integer | Related switch set. Used only for [DeformableToRigid.AUTOMATIC](primer-deformabletorigid-class.md#DeformableToRigid.AUTOMATIC). |
| rwf | integer | Flag to delete or activate rigid walls. (Valid values : 0, 1, 2). Used only for [DeformableToRigid.AUTOMATIC](primer-deformabletorigid-class.md#DeformableToRigid.AUTOMATIC). |
| swset (read only) | integer | Set number for this automatic switch set. Used only for [DeformableToRigid.AUTOMATIC](primer-deformabletorigid-class.md#DeformableToRigid.AUTOMATIC). |
| time1 | real | Switch will not take place before this time. Used only for [DeformableToRigid.AUTOMATIC](primer-deformabletorigid-class.md#DeformableToRigid.AUTOMATIC). |
| time2 | real | Switch will not take place after this time. Used only for [DeformableToRigid.AUTOMATIC](primer-deformabletorigid-class.md#DeformableToRigid.AUTOMATIC). |
| time3 | real | After this part switch has taken place, another automatic switch will not take place for the duration of the delay period. Used only for [DeformableToRigid.AUTOMATIC](primer-deformabletorigid-class.md#DeformableToRigid.AUTOMATIC). |
| tm | real | Translational mass. Used only for [DeformableToRigid.INERTIA](primer-deformabletorigid-class.md#DeformableToRigid.INERTIA). |
| type (read only) | integer | Gives the type of DeformableToRigid Object. |
| xc | real | x-coordinate of center of mass. Used only for [DeformableToRigid.INERTIA](primer-deformabletorigid-class.md#DeformableToRigid.INERTIA). |
| yc | real | y-coordinate of center of mass. Used only for [DeformableToRigid.INERTIA](primer-deformabletorigid-class.md#DeformableToRigid.INERTIA). |
| zc | real | z-coordinate of center of mass. Used only for [DeformableToRigid.INERTIA](primer-deformabletorigid-class.md#DeformableToRigid.INERTIA). |

| Detailed Description<br>The DeformableToRigid class allows you to create, modify, edit and manipulate deformable to rigid cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new DeformableToRigid(Model*[[Model](primer-model-class.md)]*, Type*[constant]*, pid (optional) *[integer]*, lrb (optional)*[integer]*, ptype (optional)*[integer]*)

Description<br>Create a new [DeformableToRigid](primer-deformabletorigid-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that deformable to rigid will be created in

* Type (constant)
 
Specify the type of DeformableToRigid (Can be [DeformableToRigid.SIMPLE](primer-deformabletorigid-class.md#DeformableToRigid.SIMPLE) or [DeformableToRigid.AUTOMATIC](primer-deformabletorigid-class.md#DeformableToRigid.AUTOMATIC) or [DeformableToRigid.INERTIA](primer-deformabletorigid-class.md#DeformableToRigid.INERTIA) )

* pid (optional)  (integer)
 
[Part](primer-part-class.md)or [Part set](primer-set-class.md)ID which is switched to a rigid material. Depends on value of [ptype](primer-deformabletorigid-class.md#ptype). Used only for [DeformableToRigid.SIMPLE](primer-deformabletorigid-class.md#DeformableToRigid.SIMPLE) or [DeformableToRigid.INERTIA](primer-deformabletorigid-class.md#DeformableToRigid.INERTIA).

* lrb (optional) (integer)
 
[Part](primer-part-class.md) ID of the lead rigid body to which the part is merged. Used only for [DeformableToRigid.SIMPLE](primer-deformabletorigid-class.md#DeformableToRigid.SIMPLE).

* ptype (optional) (integer)
 
Type of PID. Valid values are: [DeformableToRigid.PART](primer-deformabletorigid-class.md#DeformableToRigid.PART) or [DeformableToRigid.PSET](primer-deformabletorigid-class.md#DeformableToRigid.PSET). Used only for [DeformableToRigid.SIMPLE](primer-deformabletorigid-class.md#DeformableToRigid.SIMPLE).

| Returns
<br>[DeformableToRigid](primer-deformabletorigid-class.md) object<br>
Return type
<br>DeformableToRigid |
| --- |

| Example
<br>To create a new deformable to rigid in model m, type SIMPLE, part id 100:<br>
```
var dtor = new DeformableToRigid(m, DeformableToRigid.SIMPLE, 100);
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a deformable to rigid. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the deformable to rigid

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the deformable to rigid dtor:<br>
```
dtor.AssociateComment(c);
```
 |
| --- |

* * *

| Blank()

Description<br>Blanks the deformable to rigid |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To blank deformable to rigid dtor:<br>
```
dtor.Blank();
```
 |
| --- |

* * *

| BlankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the deformable to rigids in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all deformable to rigids will be blanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the deformable to rigids in model m:<br>
```
DeformableToRigid.BlankAll(m);
```
 |
| --- |

* * *

| BlankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the flagged deformable to rigids in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged deformable to rigids will be blanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the deformable to rigids that you want to blank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the deformable to rigids in model m flagged with f:<br>
```
DeformableToRigid.BlankFlagged(m, f);
```
 |
| --- |

* * *

| Blanked()

Description<br>Checks if the deformable to rigid is blanked or not. |
| --- |

#### Arguments

No arguments

| Returns
<br>true if blanked, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if deformable to rigid dtor is blanked:<br>
```
if (dtor.Blanked() ) do_something...
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
<br>To Browse deformable to rigid dtor:<br>
```
dtor.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the deformable to rigid. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the deformable to rigid

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for deformable to rigid dtor:<br>
```
dtor.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the deformable to rigid. The target include of the copied deformable to rigid can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>DeformableToRigid object<br>
Return type
<br>DeformableToRigid |
| --- |

| Example
<br>To copy deformable to rigid dtor into deformable to rigid z:<br>
```
var z = dtor.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a deformable to rigid |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the deformable to rigid will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>DeformableToRigid object (or null if not made).<br>
Return type
<br>DeformableToRigid |
| --- |

| Example
<br>To start creating a deformable to rigid in model m:<br>
```
var dtor = DeformableToRigid.Create(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a deformable to rigid. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the deformable to rigid

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the deformable to rigid dtor:<br>
```
dtor.DetachComment(c);
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
<br>To Edit deformable to rigid dtor:<br>
```
dtor.Edit();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for deformable to rigid. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for deformable to rigid dtor:<br>
```
dtor.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first deformable to rigid in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first deformable to rigid in

| Returns
<br>DeformableToRigid object (or null if there are no deformable to rigids in the model).<br>
Return type
<br>DeformableToRigid |
| --- |

| Example
<br>To get the first deformable to rigid in model m:<br>
```
var dtor = DeformableToRigid.First(m);
```
 |
| --- |

* * *

| FirstFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the first free deformable to rigid label in the model. Also see [DeformableToRigid.LastFreeLabel()](primer-deformabletorigid-class.md#DeformableToRigid::LastFreeLabel), [DeformableToRigid.NextFreeLabel()](primer-deformabletorigid-class.md#DeformableToRigid::NextFreeLabel) and [Model.FirstFreeItemLabel()](primer-model-class.md#Model::FirstFreeItemLabel). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first free deformable to rigid label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *First free in layer* in editing panels). If omitted the whole model will be used (Equivalent to *First free* in editing panels).

| Returns
<br>DeformableToRigid label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the first free deformable to rigid label in model m:<br>
```
var label = DeformableToRigid.FirstFreeLabel(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the deformable to rigids in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all deformable to rigids will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the deformable to rigids

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the deformable to rigids with flag f in model m:<br>
```
DeformableToRigid.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the deformable to rigid is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the deformable to rigid

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if deformable to rigid dtor has flag f set on it:<br>
```
if (dtor.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each deformable to rigid in the model.<br> **Note that ForEach has been designed to make looping over deformable to rigids as fast as possible and so has some limitations. Firstly, a single temporary DeformableToRigid object is created and on each function call it is updated with the current deformable to rigid data. This means that you should not try to store the DeformableToRigid object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new deformable to rigids inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all deformable to rigids are in

* func (function)
 
Function to call for each deformable to rigid

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the deformable to rigids in model m:<br>
```
DeformableToRigid.ForEach(m, test);
function test(dtor)
{
// dtor is DeformableToRigid object
}
```
<br><br>To call function test for all of the deformable to rigids in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
DeformableToRigid.ForEach(m, test, data);
function test(dtor, extra)
{
// dtor is DeformableToRigid object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of DeformableToRigid objects or properties for all of the deformable to rigids in a model in PRIMER. If the optional property argument is not given then an array of DeformableToRigid objects is returned. If the property argument is given, that property value for each deformable to rigid is returned in the array instead of a DeformableToRigid object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get deformable to rigids from

* property (optional) (string)
 
Name for property to get for all deformable to rigids in the model

| Returns
<br>Array of DeformableToRigid objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of DeformableToRigid objects for all of the deformable to rigids in model m:<br>
```
var a = DeformableToRigid.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each deformable to rigid in model m:<br>
```
var a = DeformableToRigid.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a deformable to rigid. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the deformable to rigid dtor:<br>
```
var comm_array = dtor.GetComments();
```
 |
| --- |

* * *

| GetDefToRegAutoCard(ctype*[integer]*, index*[integer]*)

Description<br>Returns the D2R or R2D cards for \*DEFORMABLE\_TO\_RIGID\_AUTOMATC. |
| --- |

#### Arguments

* ctype (integer)
 
The card type you want the data for. Can be [D2R](primer-deformabletorigid-class.md#DeformableToRigid.D2R) or [R2D](primer-deformabletorigid-class.md#DeformableToRigid.R2D).

* index (integer)
 
The card index you want the data for. **Note that card indices start at 0, not 1**.

| Returns
<br>An array of numbers containing the 2 or 3 member (depending on Card type): [Part](primer-part-class.md) or [Part Set](primer-set-class.md) ID, [LRB Part](primer-part-class.md) ID (only for card type [D2R](primer-deformabletorigid-class.md#DeformableToRigid.D2R)), and part type (PTYPE - Can be [DeformableToRigid.PART](primer-deformabletorigid-class.md#DeformableToRigid.PART) or [DeformableToRigid.PSET](primer-deformabletorigid-class.md#DeformableToRigid.PSET)).<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the D2R card data for the 3rd D2R card for Deformable to Rigid dtor:<br>
```
if (dtor.d2r >= 3)
{
    var dtor_data = dtor.GetDefToRegAutoCard(DeformableToRigid.D2R, 2);
}
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of DeformableToRigid objects for all of the flagged deformable to rigids in a model in PRIMER If the optional property argument is not given then an array of DeformableToRigid objects is returned. If the property argument is given, then that property value for each deformable to rigid is returned in the array instead of a DeformableToRigid object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get deformable to rigids from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the deformable to rigids that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged deformable to rigids in the model

| Returns
<br>Array of DeformableToRigid objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of DeformableToRigid objects for all of the deformable to rigids in model m flagged with f:<br>
```
var dtor = DeformableToRigid.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the deformable to rigids in model m flagged with f:<br>
```
var a = DeformableToRigid.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the DeformableToRigid object for a deformable to rigid ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the deformable to rigid in

* number (integer)
 
number of the deformable to rigid you want the DeformableToRigid object for

| Returns
<br>DeformableToRigid object (or null if deformable to rigid does not exist).<br>
Return type
<br>DeformableToRigid |
| --- |

| Example
<br>To get the DeformableToRigid object for deformable to rigid 100 in model m<br>
```
var dtor = DeformableToRigid.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a DeformableToRigid property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [DeformableToRigid.ViewParameters()](primer-deformabletorigid-class.md#DeformableToRigid::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
deformable to rigid property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if DeformableToRigid property dtor.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (dtor.GetParameter(dtor.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if DeformableToRigid property dtor.example is a parameter by using the GetParameter method:<br>
```
if (dtor.ViewParameters().GetParameter(dtor.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this DeformableToRigid (\*DEFORMABLE\_TO\_RIGID\_xxxx) **Note that a carriage return is not added**. See also [DeformableToRigid.KeywordCards()](primer-deformabletorigid-class.md#DeformableToRigid::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for DeformableToRigid dtor:<br>
```
var key = dtor.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the DeformableToRigid. **Note that a carriage return is not added**. See also [DeformableToRigid.Keyword()](primer-deformabletorigid-class.md#DeformableToRigid::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for DeformableToRigid dtor:<br>
```
var cards = dtor.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last deformable to rigid in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last deformable to rigid in

| Returns
<br>DeformableToRigid object (or null if there are no deformable to rigids in the model).<br>
Return type
<br>DeformableToRigid |
| --- |

| Example
<br>To get the last deformable to rigid in model m:<br>
```
var dtor = DeformableToRigid.Last(m);
```
 |
| --- |

* * *

| LastFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the last free deformable to rigid label in the model. Also see [DeformableToRigid.FirstFreeLabel()](primer-deformabletorigid-class.md#DeformableToRigid::FirstFreeLabel), [DeformableToRigid.NextFreeLabel()](primer-deformabletorigid-class.md#DeformableToRigid::NextFreeLabel) and see [Model.LastFreeItemLabel()](primer-model-class.md#Model::LastFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last free deformable to rigid label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest free in layer* in editing panels). If omitted the whole model will be used.

| Returns
<br>DeformableToRigid label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the last free deformable to rigid label in model m:<br>
```
var label = DeformableToRigid.LastFreeLabel(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next deformable to rigid in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>DeformableToRigid object (or null if there are no more deformable to rigids in the model).<br>
Return type
<br>DeformableToRigid |
| --- |

| Example
<br>To get the deformable to rigid in model m after deformable to rigid dtor:<br>
```
var dtor = dtor.Next();
```
 |
| --- |

* * *

| NextFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the next free (highest+1) deformable to rigid label in the model. Also see [DeformableToRigid.FirstFreeLabel()](primer-deformabletorigid-class.md#DeformableToRigid::FirstFreeLabel), [DeformableToRigid.LastFreeLabel()](primer-deformabletorigid-class.md#DeformableToRigid::LastFreeLabel) and [Model.NextFreeItemLabel()](primer-model-class.md#Model::NextFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get next free deformable to rigid label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest+1 in layer* in editing panels). If omitted the whole model will be used (Equivalent to *Highest+1* in editing panels).

| Returns
<br>DeformableToRigid label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the next free deformable to rigid label in model m:<br>
```
var label = DeformableToRigid.NextFreeLabel(m);
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a deformable to rigid. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only deformable to rigids from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only deformable to rigids that are flagged with *limit* can be selected. If omitted, or null, any deformable to rigids from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[DeformableToRigid](primer-deformabletorigid-class.md) object (or null if not picked)<br>
Return type
<br>DeformableToRigid |
| --- |

| Example
<br>To pick a deformable to rigid from model m giving the prompt 'Pick deformable to rigid from screen':<br>
```
var dtor = DeformableToRigid.Pick('Pick deformable to rigid from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous deformable to rigid in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>DeformableToRigid object (or null if there are no more deformable to rigids in the model).<br>
Return type
<br>DeformableToRigid |
| --- |

| Example
<br>To get the deformable to rigid in model m before deformable to rigid dtor:<br>
```
var dtor = dtor.Previous();
```
 |
| --- |

* * *

| RemoveDefToRegAutoCard(ctype*[integer]*, index*[integer]*)

Description<br>Removes the D2R or R2D cards for \*DEFORMABLE\_TO\_RIGID\_AUTOMATC. |
| --- |

#### Arguments

* ctype (integer)
 
The card type you want removed. Can be [D2R](primer-deformabletorigid-class.md#DeformableToRigid.D2R) or [R2D](primer-deformabletorigid-class.md#DeformableToRigid.R2D).

* index (integer)
 
The card index you want removed. **Note that card indices start at 0, not 1**.

| Returns
<br>No return value. |
| --- |

| Example
<br>To remove the D2R card data for the 3rd D2R card from Deformable to Rigid dtor:<br>
```
if (dtor.d2r >= 3)
{
    var dtor_data = dtor.RemoveDefToRegAutoCard(DeformableToRigid.D2R, 2);
}
```
 |
| --- |

* * *

| RenumberAll(Model*[[Model](primer-model-class.md)]*, start*[integer]*) [static]
Description<br>Renumbers all of the deformable to rigids in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all deformable to rigids will be renumbered in

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the deformable to rigids in model m, from 1000000:<br>
```
DeformableToRigid.RenumberAll(m, 1000000);
```
 |
| --- |

* * *

| RenumberFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*) [static]
Description<br>Renumbers all of the flagged deformable to rigids in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged deformable to rigids will be renumbered in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the deformable to rigids that you want to renumber

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the deformable to rigids in model m flagged with f, from 1000000:<br>
```
DeformableToRigid.RenumberFlagged(m, f, 1000000);
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select deformable to rigids using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting deformable to rigids

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only deformable to rigids from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only deformable to rigids that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any deformable to rigids can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of deformable to rigids selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select deformable to rigids from model m, flagging those selected with flag f, giving the prompt 'Select deformable to rigids':<br>
```
DeformableToRigid.Select(f, 'Select deformable to rigids', m);
```
<br><br>To select deformable to rigids, flagging those selected with flag f but limiting selection to deformable to rigids flagged with flag l, giving the prompt 'Select deformable to rigids':<br>
```
DeformableToRigid.Select(f, 'Select deformable to rigids', l);
```
 |
| --- |

* * *

| SetDefToRegAutoCard(ctype*[integer]*, index*[integer]*, ptype*[integer]*, pid*[integer]*, lrb (optional)*[integer]*)

Description<br>Sets the D2r or R2D card data f\*DEFORMABLE\_TO\_RIGID\_AUTOMATIC. |
| --- |

#### Arguments

* ctype (integer)
 
The card type you want to set. Can be [D2R](primer-deformabletorigid-class.md#DeformableToRigid.D2R) or [R2D](primer-deformabletorigid-class.md#DeformableToRigid.R2D).

* index (integer)
 
The D2R or R2D card index you want to set. **Note that cards start at 0, not 1**.

* ptype (integer)
 
Part type (PTYPE). Can be [DeformableToRigid.PART](primer-deformabletorigid-class.md#DeformableToRigid.PART) or [DeformableToRigid.PSET](primer-deformabletorigid-class.md#DeformableToRigid.PSET).

* pid (integer)
 
[Part](primer-part-class.md) or [Part Set](primer-set-class.md) ID.

* lrb (optional) (integer)
 
[LRB Part](primer-part-class.md) ID (only for card type [D2R](primer-deformabletorigid-class.md#DeformableToRigid.D2R))

| Returns
<br>No return value. |
| --- |

| Example
<br>To set the 3rd D2R card to ptype DeformabletoRigid.PART, pid 100 and lrb 200, for DeformableToRigid dtor:<br>
```
dtor.SetDefToRegAutoCard(DeformabletoRigid.D2R, 2, DeformabletoRigid.PART, 100, 200);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the deformable to rigid. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the deformable to rigid

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for deformable to rigid dtor:<br>
```
dtor.SetFlag(f);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the deformable to rigid. The deformable to rigid will be sketched until you either call [DeformableToRigid.Unsketch()](primer-deformabletorigid-class.md#DeformableToRigid::Unsketch), [DeformableToRigid.UnsketchAll()](primer-deformabletorigid-class.md#DeformableToRigid::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the deformable to rigid is sketched. If omitted redraw is true. If you want to sketch several deformable to rigids and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch deformable to rigid dtor:<br>
```
dtor.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged deformable to rigids in the model. The deformable to rigids will be sketched until you either call [DeformableToRigid.Unsketch()](primer-deformabletorigid-class.md#DeformableToRigid::Unsketch), [DeformableToRigid.UnsketchFlagged()](primer-deformabletorigid-class.md#DeformableToRigid::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged deformable to rigids will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the deformable to rigids that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the deformable to rigids are sketched. If omitted redraw is true. If you want to sketch flagged deformable to rigids several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all deformable to rigids flagged with flag in model m:<br>
```
DeformableToRigid.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of deformable to rigids in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing deformable to rigids should be counted. If false or omitted
referenced but undefined deformable to rigids will also be included in the total.

| Returns
<br>number of deformable to rigids<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of deformable to rigids in model m:<br>
```
var total = DeformableToRigid.Total(m);
```
 |
| --- |

* * *

| Unblank()

Description<br>Unblanks the deformable to rigid |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank deformable to rigid dtor:<br>
```
dtor.Unblank();
```
 |
| --- |

* * *

| UnblankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the deformable to rigids in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all deformable to rigids will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the deformable to rigids in model m:<br>
```
DeformableToRigid.UnblankAll(m);
```
 |
| --- |

* * *

| UnblankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the flagged deformable to rigids in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the flagged deformable to rigids will be unblanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the deformable to rigids that you want to unblank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the deformable to rigids in model m flagged with f:<br>
```
DeformableToRigid.UnblankFlagged(m, f);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the deformable to rigids in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all deformable to rigids will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the deformable to rigids

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the deformable to rigids in model m:<br>
```
DeformableToRigid.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the deformable to rigid. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the deformable to rigid is unsketched. If omitted redraw is true. If you want to unsketch several deformable to rigids and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch deformable to rigid dtor:<br>
```
dtor.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all deformable to rigids. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all deformable to rigids will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the deformable to rigids are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all deformable to rigids in model m:<br>
```
DeformableToRigid.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged deformable to rigids in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all deformable to rigids will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the deformable to rigids that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the deformable to rigids are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all deformable to rigids flagged with flag in model m:<br>
```
DeformableToRigid.UnsketchAll(m, flag);
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
<br>[DeformableToRigid](primer-deformabletorigid-class.md) object.<br>
Return type
<br>DeformableToRigid |
| --- |

| Example
<br>To check if DeformableToRigid property dtor.example is a parameter by using the [DeformableToRigid.GetParameter()](primer-deformabletorigid-class.md#DeformableToRigid::GetParameter) method:<br>
```
if (dtor.ViewParameters().GetParameter(dtor.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for deformable to rigid. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for deformable to rigid dtor:<br>
```
dtor.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this deformable to rigid. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for deformable to rigid dtor:<br>
```
var xrefs = dtor.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the DeformableToRigid data in keyword format. Note that this contains the keyword header and the keyword cards. See also [DeformableToRigid.Keyword()](primer-deformabletorigid-class.md#DeformableToRigid::Keyword) and [DeformableToRigid.KeywordCards()](primer-deformabletorigid-class.md#DeformableToRigid::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for DeformableToRigid dtor in keyword format<br>
```
var i_str = dtor.toString();
```
 |
| --- |

* * *