# NodalRigidBody (Nrb) class

The NodalRigidBody class gives you access to define nodal rigid body cards in PRIMER. [More...](primer-nodalrigidbody-class.md#NodalRigidBody_details)

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

* [BlankAll](primer-nodalrigidbody-class.md#NodalRigidBody::BlankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [BlankFlagged](primer-nodalrigidbody-class.md#NodalRigidBody::BlankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Create](primer-nodalrigidbody-class.md#NodalRigidBody::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [First](primer-nodalrigidbody-class.md#NodalRigidBody::First)(Model*[[Model](primer-model-class.md)]*)
* [FirstFreeLabel](primer-nodalrigidbody-class.md#NodalRigidBody::FirstFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [FlagAll](primer-nodalrigidbody-class.md#NodalRigidBody::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-nodalrigidbody-class.md#NodalRigidBody::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-nodalrigidbody-class.md#NodalRigidBody::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-nodalrigidbody-class.md#NodalRigidBody::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-nodalrigidbody-class.md#NodalRigidBody::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-nodalrigidbody-class.md#NodalRigidBody::Last)(Model*[[Model](primer-model-class.md)]*)
* [LastFreeLabel](primer-nodalrigidbody-class.md#NodalRigidBody::LastFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [NextFreeLabel](primer-nodalrigidbody-class.md#NodalRigidBody::NextFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [Pick](primer-nodalrigidbody-class.md#NodalRigidBody::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [RenumberAll](primer-nodalrigidbody-class.md#NodalRigidBody::RenumberAll)(Model*[[Model](primer-model-class.md)]*, start*[integer]*)
* [RenumberFlagged](primer-nodalrigidbody-class.md#NodalRigidBody::RenumberFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*)
* [Select](primer-nodalrigidbody-class.md#NodalRigidBody::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-nodalrigidbody-class.md#NodalRigidBody::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-nodalrigidbody-class.md#NodalRigidBody::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnblankAll](primer-nodalrigidbody-class.md#NodalRigidBody::UnblankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnblankFlagged](primer-nodalrigidbody-class.md#NodalRigidBody::UnblankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [UnflagAll](primer-nodalrigidbody-class.md#NodalRigidBody::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-nodalrigidbody-class.md#NodalRigidBody::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-nodalrigidbody-class.md#NodalRigidBody::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-nodalrigidbody-class.md#NodalRigidBody::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Blank](primer-nodalrigidbody-class.md#NodalRigidBody::Blank)()
* [Blanked](primer-nodalrigidbody-class.md#NodalRigidBody::Blanked)()
* [Browse](primer-nodalrigidbody-class.md#NodalRigidBody::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-nodalrigidbody-class.md#NodalRigidBody::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-nodalrigidbody-class.md#NodalRigidBody::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-nodalrigidbody-class.md#NodalRigidBody::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-nodalrigidbody-class.md#NodalRigidBody::Edit)(modal (optional)*[boolean]*)
* [Error](primer-nodalrigidbody-class.md#NodalRigidBody::Error)(message*[string]*, details (optional)*[string]*)
* [ExtractColour](primer-nodalrigidbody-class.md#NodalRigidBody::ExtractColour)()
* [Flagged](primer-nodalrigidbody-class.md#NodalRigidBody::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-nodalrigidbody-class.md#NodalRigidBody::GetComments)()
* [GetParameter](primer-nodalrigidbody-class.md#NodalRigidBody::GetParameter)(prop*[string]*)
* [Keyword](primer-nodalrigidbody-class.md#NodalRigidBody::Keyword)()
* [KeywordCards](primer-nodalrigidbody-class.md#NodalRigidBody::KeywordCards)()
* [Next](primer-nodalrigidbody-class.md#NodalRigidBody::Next)()
* [Previous](primer-nodalrigidbody-class.md#NodalRigidBody::Previous)()
* [SetFlag](primer-nodalrigidbody-class.md#NodalRigidBody::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Sketch](primer-nodalrigidbody-class.md#NodalRigidBody::Sketch)(redraw (optional)*[boolean]*)
* [Unblank](primer-nodalrigidbody-class.md#NodalRigidBody::Unblank)()
* [Unsketch](primer-nodalrigidbody-class.md#NodalRigidBody::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-nodalrigidbody-class.md#NodalRigidBody::ViewParameters)()
* [Warning](primer-nodalrigidbody-class.md#NodalRigidBody::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-nodalrigidbody-class.md#NodalRigidBody::Xrefs)()
* [toString](primer-nodalrigidbody-class.md#NodalRigidBody::toString)()

## NodalRigidBody properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| cid | integer | Coordinate system ID |
| cmo | integer | Centre of mass option |
| colour | [Colour](primer-colour-class.md) | The colour of the nrb |
| con1 | integer | First retraint parameter |
| con2 | integer | Second retraint parameter |
| drflag | integer | Displacement release flag |
| exists (read only) | logical | true if nodal rigid body exists, false if referred to but not defined. |
| idthrm | integer | Flag for the thermal constraint |
| include | integer | The [Include](primer-include-class.md) file number that the nodal rigid body is in. |
| inertia | logical | Flag to turn on or off \_INERTIA option |
| iprt | integer | Print flag |
| ixx | real | Ixx component of inertia tensor |
| ixy | real | Ixy component of inertia tensor |
| ixz | real | Ixz component of inertia tensor |
| iyy | real | Iyy component of inertia tensor |
| iyz | real | Iyz component of inertia tensor |
| izz | real | Izz component of inertia tensor |
| label | integer | [NodalRigidBody](primer-nodalrigidbody-class.md) ID of the NRB. Also see the [pid](primer-nodalrigidbody-class.md#pid) property which is an alternative name for this. |
| model (read only) | integer | The [Model](primer-model-class.md) number that the nodal rigid body is in. |
| nodeid | integer | Optional node point |
| nsid | integer | Nodal set ID |
| override | logical | Flag to turn on or off \_OVERRIDE option |
| pid | integer | [NodalRigidBody](primer-nodalrigidbody-class.md) ID of the NRB. Also see the [label](primer-nodalrigidbody-class.md#label) property which is an alternative name for this. |
| pnode | integer | Optional nodal point |
| rrflag | integer | Rotation release flag |
| spc | logical | Flag to turn on or off \_SPC option |
| thermal | logical | Flag to turn on or off \_THERMAL option |
| tm | real | Translational mass |
| vrx | real | X rigid body rotational velocity |
| vry | real | Y rigid body rotational velocity |
| vrz | real | Z rigid body rotational velocity |
| vtx | real | X rigid body translational velocity |
| vty | real | Y rigid body translational velocity |
| vtz | real | Z rigid body translational velocity |
| xc | real | X coordinate centre of mass |
| xl | real | X coordinate of local x axis |
| xlip | real | X coordinate of local in plane vector |
| yc | real | Y coordinate centre of mass |
| yl | real | Y coordinate of local x axis |
| ylip | real | Y coordinate of local in plane vector |
| zc | real | Z coordinate centre of mass |
| zl | real | Z coordinate of local x axis |
| zlip | real | Z coordinate of local in plane vector |

| Detailed Description<br>The NodalRigidBody class allows you to create, modify, edit and manipulate nodal rigid body cards.<br>See the documentation below for more details.<br>
<br>For convenience "Nrb" can also be used as the class name instead of "NodalRigidBody". |
| --- |

| Constructor
new NodalRigidBody(Model*[[Model](primer-model-class.md)]*, nsid*[integer]*, pid (optional)*[integer]*, cid (optional)*[integer]*, pnode (optional)*[integer]*, iprt (optional)*[integer]*, drflag (optional)*[integer]*, rrflag (optional)*[integer]*)

Description<br>Create a new [NodalRigidBody](primer-nodalrigidbody-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that nrb will be created in

* nsid (integer)
 
Nodal set ID

* pid (optional) (integer)
 
[NodalRigidBody](primer-nodalrigidbody-class.md) ID of the NRB. Also see the [label](primer-nodalrigidbody-class.md#label) property which is an alternative name for this.

* cid (optional) (integer)
 
Coordinate system ID

* pnode (optional) (integer)
 
Optional nodal point

* iprt (optional) (integer)
 
Print flag

* drflag (optional) (integer)
 
Displacement release flag

* rrflag (optional) (integer)
 
Rotation release flag

| Returns
<br>[NodalRigidBody](primer-nodalrigidbody-class.md) object<br>
Return type
<br>NodalRigidBody |
| --- |

| Example
<br>To create a new nrb in model m with label 200, using node set 50<br>
```
var v = new NodalRigidBody(m, 50, 200);
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a nodal rigid body. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the nodal rigid body

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the nodal rigid body nrb:<br>
```
nrb.AssociateComment(c);
```
 |
| --- |

* * *

| Blank()

Description<br>Blanks the nodal rigid body |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To blank nodal rigid body nrb:<br>
```
nrb.Blank();
```
 |
| --- |

* * *

| BlankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the nodal rigid bodies in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all nodal rigid bodies will be blanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the nodal rigid bodies in model m:<br>
```
NodalRigidBody.BlankAll(m);
```
 |
| --- |

* * *

| BlankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the flagged nodal rigid bodies in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged nodal rigid bodies will be blanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the nodal rigid bodies that you want to blank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the nodal rigid bodies in model m flagged with f:<br>
```
NodalRigidBody.BlankFlagged(m, f);
```
 |
| --- |

* * *

| Blanked()

Description<br>Checks if the nodal rigid body is blanked or not. |
| --- |

#### Arguments

No arguments

| Returns
<br>true if blanked, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if nodal rigid body nrb is blanked:<br>
```
if (nrb.Blanked() ) do_something...
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
<br>To Browse nodal rigid body nrb:<br>
```
nrb.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the nodal rigid body. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the nodal rigid body

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for nodal rigid body nrb:<br>
```
nrb.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the nodal rigid body. The target include of the copied nodal rigid body can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>NodalRigidBody object<br>
Return type
<br>NodalRigidBody |
| --- |

| Example
<br>To copy nodal rigid body nrb into nodal rigid body z:<br>
```
var z = nrb.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a nodal rigid body |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the nodal rigid body will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>NodalRigidBody object (or null if not made).<br>
Return type
<br>NodalRigidBody |
| --- |

| Example
<br>To start creating a nodal rigid body in model m:<br>
```
var nrb = NodalRigidBody.Create(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a nodal rigid body. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the nodal rigid body

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the nodal rigid body nrb:<br>
```
nrb.DetachComment(c);
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
<br>To Edit nodal rigid body nrb:<br>
```
nrb.Edit();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for nodal rigid body. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for nodal rigid body nrb:<br>
```
nrb.Error("My custom error");
```
 |
| --- |

* * *

| ExtractColour()

Description<br>Extracts the **actual** colour used for nodal rigid body.<br> By default in PRIMER many entities such as elements get their colour automatically from the part that they are in. PRIMER cycles through 13 default colours based on the label of the entity. In this case the nodal rigid body [colour](primer-nodalrigidbody-class.md#colour) property will return the value [Colour.PART](primer-colour-class.md#Colour.PART) instead of the actual colour. This method will return the actual colour which is used for drawing the nodal rigid body. |
| --- |

#### Arguments

No arguments

| Returns
<br>colour value (integer)<br>
Return type
<br>Number |
| --- |

| Example
<br>To return the colour used for drawing nodal rigid body nrb:<br>
```
var colour = nrb.ExtractColour();
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first nodal rigid body in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first nodal rigid body in

| Returns
<br>NodalRigidBody object (or null if there are no nodal rigid bodies in the model).<br>
Return type
<br>NodalRigidBody |
| --- |

| Example
<br>To get the first nodal rigid body in model m:<br>
```
var nrb = NodalRigidBody.First(m);
```
 |
| --- |

* * *

| FirstFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the first free nodal rigid body label in the model. Also see [NodalRigidBody.LastFreeLabel()](primer-nodalrigidbody-class.md#NodalRigidBody::LastFreeLabel), [NodalRigidBody.NextFreeLabel()](primer-nodalrigidbody-class.md#NodalRigidBody::NextFreeLabel) and [Model.FirstFreeItemLabel()](primer-model-class.md#Model::FirstFreeItemLabel). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first free nodal rigid body label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *First free in layer* in editing panels). If omitted the whole model will be used (Equivalent to *First free* in editing panels).

| Returns
<br>NodalRigidBody label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the first free nodal rigid body label in model m:<br>
```
var label = NodalRigidBody.FirstFreeLabel(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the nodal rigid bodies in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all nodal rigid bodies will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the nodal rigid bodies

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the nodal rigid bodies with flag f in model m:<br>
```
NodalRigidBody.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the nodal rigid body is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the nodal rigid body

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if nodal rigid body nrb has flag f set on it:<br>
```
if (nrb.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each nodal rigid body in the model.<br> **Note that ForEach has been designed to make looping over nodal rigid bodies as fast as possible and so has some limitations. Firstly, a single temporary NodalRigidBody object is created and on each function call it is updated with the current nodal rigid body data. This means that you should not try to store the NodalRigidBody object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new nodal rigid bodies inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all nodal rigid bodies are in

* func (function)
 
Function to call for each nodal rigid body

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the nodal rigid bodies in model m:<br>
```
NodalRigidBody.ForEach(m, test);
function test(nrb)
{
// nrb is NodalRigidBody object
}
```
<br><br>To call function test for all of the nodal rigid bodies in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
NodalRigidBody.ForEach(m, test, data);
function test(nrb, extra)
{
// nrb is NodalRigidBody object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of NodalRigidBody objects or properties for all of the nodal rigid bodies in a model in PRIMER. If the optional property argument is not given then an array of NodalRigidBody objects is returned. If the property argument is given, that property value for each nodal rigid body is returned in the array instead of a NodalRigidBody object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get nodal rigid bodies from

* property (optional) (string)
 
Name for property to get for all nodal rigid bodies in the model

| Returns
<br>Array of NodalRigidBody objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of NodalRigidBody objects for all of the nodal rigid bodies in model m:<br>
```
var a = NodalRigidBody.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each nodal rigid body in model m:<br>
```
var a = NodalRigidBody.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a nodal rigid body. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the nodal rigid body nrb:<br>
```
var comm_array = nrb.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of NodalRigidBody objects for all of the flagged nodal rigid bodies in a model in PRIMER If the optional property argument is not given then an array of NodalRigidBody objects is returned. If the property argument is given, then that property value for each nodal rigid body is returned in the array instead of a NodalRigidBody object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get nodal rigid bodies from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the nodal rigid bodies that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged nodal rigid bodies in the model

| Returns
<br>Array of NodalRigidBody objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of NodalRigidBody objects for all of the nodal rigid bodies in model m flagged with f:<br>
```
var nrb = NodalRigidBody.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the nodal rigid bodies in model m flagged with f:<br>
```
var a = NodalRigidBody.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the NodalRigidBody object for a nodal rigid body ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the nodal rigid body in

* number (integer)
 
number of the nodal rigid body you want the NodalRigidBody object for

| Returns
<br>NodalRigidBody object (or null if nodal rigid body does not exist).<br>
Return type
<br>NodalRigidBody |
| --- |

| Example
<br>To get the NodalRigidBody object for nodal rigid body 100 in model m<br>
```
var nrb = NodalRigidBody.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a NodalRigidBody property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [NodalRigidBody.ViewParameters()](primer-nodalrigidbody-class.md#NodalRigidBody::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
nodal rigid body property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if NodalRigidBody property nrb.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (nrb.GetParameter(nrb.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if NodalRigidBody property nrb.example is a parameter by using the GetParameter method:<br>
```
if (nrb.ViewParameters().GetParameter(nrb.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this nrb (\*CONSTRAINED\_NODAL\_RIGID\_BODY\_xxxx). **Note that a carriage return is not added**. See also [NodalRigidBody.KeywordCards()](primer-nodalrigidbody-class.md#NodalRigidBody::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for nrb n:<br>
```
var key = n.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the nrb. **Note that a carriage return is not added**. See also [NodalRigidBody.Keyword()](primer-nodalrigidbody-class.md#NodalRigidBody::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for nrb n:<br>
```
var cards = n.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last nodal rigid body in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last nodal rigid body in

| Returns
<br>NodalRigidBody object (or null if there are no nodal rigid bodies in the model).<br>
Return type
<br>NodalRigidBody |
| --- |

| Example
<br>To get the last nodal rigid body in model m:<br>
```
var nrb = NodalRigidBody.Last(m);
```
 |
| --- |

* * *

| LastFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the last free nodal rigid body label in the model. Also see [NodalRigidBody.FirstFreeLabel()](primer-nodalrigidbody-class.md#NodalRigidBody::FirstFreeLabel), [NodalRigidBody.NextFreeLabel()](primer-nodalrigidbody-class.md#NodalRigidBody::NextFreeLabel) and see [Model.LastFreeItemLabel()](primer-model-class.md#Model::LastFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last free nodal rigid body label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest free in layer* in editing panels). If omitted the whole model will be used.

| Returns
<br>NodalRigidBody label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the last free nodal rigid body label in model m:<br>
```
var label = NodalRigidBody.LastFreeLabel(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next nodal rigid body in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>NodalRigidBody object (or null if there are no more nodal rigid bodies in the model).<br>
Return type
<br>NodalRigidBody |
| --- |

| Example
<br>To get the nodal rigid body in model m after nodal rigid body nrb:<br>
```
var nrb = nrb.Next();
```
 |
| --- |

* * *

| NextFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the next free (highest+1) nodal rigid body label in the model. Also see [NodalRigidBody.FirstFreeLabel()](primer-nodalrigidbody-class.md#NodalRigidBody::FirstFreeLabel), [NodalRigidBody.LastFreeLabel()](primer-nodalrigidbody-class.md#NodalRigidBody::LastFreeLabel) and [Model.NextFreeItemLabel()](primer-model-class.md#Model::NextFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get next free nodal rigid body label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest+1 in layer* in editing panels). If omitted the whole model will be used (Equivalent to *Highest+1* in editing panels).

| Returns
<br>NodalRigidBody label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the next free nodal rigid body label in model m:<br>
```
var label = NodalRigidBody.NextFreeLabel(m);
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a nodal rigid body. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only nodal rigid bodies from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only nodal rigid bodies that are flagged with *limit* can be selected. If omitted, or null, any nodal rigid bodies from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[NodalRigidBody](primer-nodalrigidbody-class.md) object (or null if not picked)<br>
Return type
<br>NodalRigidBody |
| --- |

| Example
<br>To pick a nodal rigid body from model m giving the prompt 'Pick nodal rigid body from screen':<br>
```
var nrb = NodalRigidBody.Pick('Pick nodal rigid body from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous nodal rigid body in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>NodalRigidBody object (or null if there are no more nodal rigid bodies in the model).<br>
Return type
<br>NodalRigidBody |
| --- |

| Example
<br>To get the nodal rigid body in model m before nodal rigid body nrb:<br>
```
var nrb = nrb.Previous();
```
 |
| --- |

* * *

| RenumberAll(Model*[[Model](primer-model-class.md)]*, start*[integer]*) [static]
Description<br>Renumbers all of the nodal rigid bodies in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all nodal rigid bodies will be renumbered in

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the nodal rigid bodies in model m, from 1000000:<br>
```
NodalRigidBody.RenumberAll(m, 1000000);
```
 |
| --- |

* * *

| RenumberFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*) [static]
Description<br>Renumbers all of the flagged nodal rigid bodies in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged nodal rigid bodies will be renumbered in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the nodal rigid bodies that you want to renumber

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the nodal rigid bodies in model m flagged with f, from 1000000:<br>
```
NodalRigidBody.RenumberFlagged(m, f, 1000000);
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select nodal rigid bodies using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting nodal rigid bodies

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only nodal rigid bodies from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only nodal rigid bodies that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any nodal rigid bodies can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of nodal rigid bodies selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select nodal rigid bodies from model m, flagging those selected with flag f, giving the prompt 'Select nodal rigid bodies':<br>
```
NodalRigidBody.Select(f, 'Select nodal rigid bodies', m);
```
<br><br>To select nodal rigid bodies, flagging those selected with flag f but limiting selection to nodal rigid bodies flagged with flag l, giving the prompt 'Select nodal rigid bodies':<br>
```
NodalRigidBody.Select(f, 'Select nodal rigid bodies', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the nodal rigid body. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the nodal rigid body

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for nodal rigid body nrb:<br>
```
nrb.SetFlag(f);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the nodal rigid body. The nodal rigid body will be sketched until you either call [NodalRigidBody.Unsketch()](primer-nodalrigidbody-class.md#NodalRigidBody::Unsketch), [NodalRigidBody.UnsketchAll()](primer-nodalrigidbody-class.md#NodalRigidBody::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the nodal rigid body is sketched. If omitted redraw is true. If you want to sketch several nodal rigid bodies and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch nodal rigid body nrb:<br>
```
nrb.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged nodal rigid bodies in the model. The nodal rigid bodies will be sketched until you either call [NodalRigidBody.Unsketch()](primer-nodalrigidbody-class.md#NodalRigidBody::Unsketch), [NodalRigidBody.UnsketchFlagged()](primer-nodalrigidbody-class.md#NodalRigidBody::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged nodal rigid bodies will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the nodal rigid bodies that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the nodal rigid bodies are sketched. If omitted redraw is true. If you want to sketch flagged nodal rigid bodies several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all nodal rigid bodies flagged with flag in model m:<br>
```
NodalRigidBody.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of nodal rigid bodies in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing nodal rigid bodies should be counted. If false or omitted
referenced but undefined nodal rigid bodies will also be included in the total.

| Returns
<br>number of nodal rigid bodies<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of nodal rigid bodies in model m:<br>
```
var total = NodalRigidBody.Total(m);
```
 |
| --- |

* * *

| Unblank()

Description<br>Unblanks the nodal rigid body |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank nodal rigid body nrb:<br>
```
nrb.Unblank();
```
 |
| --- |

* * *

| UnblankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the nodal rigid bodies in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all nodal rigid bodies will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the nodal rigid bodies in model m:<br>
```
NodalRigidBody.UnblankAll(m);
```
 |
| --- |

* * *

| UnblankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the flagged nodal rigid bodies in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the flagged nodal rigid bodies will be unblanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the nodal rigid bodies that you want to unblank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the nodal rigid bodies in model m flagged with f:<br>
```
NodalRigidBody.UnblankFlagged(m, f);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the nodal rigid bodies in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all nodal rigid bodies will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the nodal rigid bodies

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the nodal rigid bodies in model m:<br>
```
NodalRigidBody.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the nodal rigid body. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the nodal rigid body is unsketched. If omitted redraw is true. If you want to unsketch several nodal rigid bodies and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch nodal rigid body nrb:<br>
```
nrb.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all nodal rigid bodies. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all nodal rigid bodies will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the nodal rigid bodies are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all nodal rigid bodies in model m:<br>
```
NodalRigidBody.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged nodal rigid bodies in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all nodal rigid bodies will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the nodal rigid bodies that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the nodal rigid bodies are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all nodal rigid bodies flagged with flag in model m:<br>
```
NodalRigidBody.UnsketchAll(m, flag);
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
<br>[NodalRigidBody](primer-nodalrigidbody-class.md) object.<br>
Return type
<br>NodalRigidBody |
| --- |

| Example
<br>To check if NodalRigidBody property nrb.example is a parameter by using the [NodalRigidBody.GetParameter()](primer-nodalrigidbody-class.md#NodalRigidBody::GetParameter) method:<br>
```
if (nrb.ViewParameters().GetParameter(nrb.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for nodal rigid body. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for nodal rigid body nrb:<br>
```
nrb.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this nodal rigid body. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for nodal rigid body nrb:<br>
```
var xrefs = nrb.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the nrb data in keyword format. Note that this contains the keyword header and the keyword cards. See also [NodalRigidBody.Keyword()](primer-nodalrigidbody-class.md#NodalRigidBody::Keyword) and [NodalRigidBody.KeywordCards()](primer-nodalrigidbody-class.md#NodalRigidBody::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for nrb n in keyword format<br>
```
var s = n.toString();
```
 |
| --- |

* * *