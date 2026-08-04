# Velocity class

The Velocity class gives you access to define initial velocity cards in PRIMER. [More...](primer-velocity-class.md#Velocity_details)

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

* [BlankAll](primer-velocity-class.md#Velocity::BlankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [BlankFlagged](primer-velocity-class.md#Velocity::BlankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [First](primer-velocity-class.md#Velocity::First)(Model*[[Model](primer-model-class.md)]*)
* [FlagAll](primer-velocity-class.md#Velocity::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-velocity-class.md#Velocity::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-velocity-class.md#Velocity::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-velocity-class.md#Velocity::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-velocity-class.md#Velocity::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-velocity-class.md#Velocity::Last)(Model*[[Model](primer-model-class.md)]*)
* [Pick](primer-velocity-class.md#Velocity::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [Select](primer-velocity-class.md#Velocity::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-velocity-class.md#Velocity::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-velocity-class.md#Velocity::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnblankAll](primer-velocity-class.md#Velocity::UnblankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnblankFlagged](primer-velocity-class.md#Velocity::UnblankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [UnflagAll](primer-velocity-class.md#Velocity::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-velocity-class.md#Velocity::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-velocity-class.md#Velocity::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-velocity-class.md#Velocity::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Blank](primer-velocity-class.md#Velocity::Blank)()
* [Blanked](primer-velocity-class.md#Velocity::Blanked)()
* [ClearFlag](primer-velocity-class.md#Velocity::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-velocity-class.md#Velocity::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-velocity-class.md#Velocity::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Error](primer-velocity-class.md#Velocity::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-velocity-class.md#Velocity::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-velocity-class.md#Velocity::GetComments)()
* [GetParameter](primer-velocity-class.md#Velocity::GetParameter)(prop*[string]*)
* [Keyword](primer-velocity-class.md#Velocity::Keyword)()
* [KeywordCards](primer-velocity-class.md#Velocity::KeywordCards)()
* [Next](primer-velocity-class.md#Velocity::Next)()
* [Previous](primer-velocity-class.md#Velocity::Previous)()
* [SetFlag](primer-velocity-class.md#Velocity::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Sketch](primer-velocity-class.md#Velocity::Sketch)(redraw (optional)*[boolean]*)
* [Unblank](primer-velocity-class.md#Velocity::Unblank)()
* [Unsketch](primer-velocity-class.md#Velocity::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-velocity-class.md#Velocity::ViewParameters)()
* [Warning](primer-velocity-class.md#Velocity::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-velocity-class.md#Velocity::Xrefs)()
* [toString](primer-velocity-class.md#Velocity::toString)()

## Velocity properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| boxid | integer | Define box containing nodes |
| exists (read only) | logical | true if initial velocity exists, false if referred to but not defined. |
| icid | integer | Local coordinate system |
| include | integer | The [Include](primer-include-class.md) file number that the initial velocity is in. |
| irigid | integer | IRIGID flag |
| model (read only) | integer | The [Model](primer-model-class.md) number that the initial velocity is in. |
| nsid | integer | [Set](primer-set-class.md) Node set ID |
| nsidex | integer | [Set](primer-set-class.md) Exempted Node set ID |
| vx | real | Initial velocity in X direction |
| vxe | real | Initial velocity in X direction of exempted nodes |
| vxr | real | Initial rotational velocity about X axis |
| vxre | real | Initial rotational velocity about X axis of exempted nodes |
| vy | real | Initial velocity in Y direction |
| vye | real | Initial velocity in Y direction of exempted nodes |
| vyr | real | Initial rotational velocity about Y axis |
| vyre | real | Initial rotational velocity about Y axis of exempted nodes |
| vz | real | Initial velocity in Z direction |
| vze | real | Initial velocity in Z direction of exempted nodes |
| vzr | real | Initial rotational velocity about Z axis |
| vzre | real | Initial rotational velocity about Z axis of exempted nodes |

| Detailed Description<br>The Velocity class allows you to create, modify, edit and manipulate velocity cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new Velocity(Model*[[Model](primer-model-class.md)]*, nsid*[integer]*, vx*[real]*, vy*[real]*, vz*[real]*, vxr*[real]*, vyr*[real]*, vzr*[real]*, boxid (optional)*[integer]*, irigid (optional)*[integer]*, nsidex (optional)*[integer]*, vxe (optional)*[real]*, vye (optional)*[real]*, vze (optional)*[real]*, vxre (optional)*[real]*, vyre (optional)*[real]*, vzre (optional)*[real]*, icid (optional)*[real]*)

Description<br>Create a new [Velocity](primer-velocity-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that velocity will be created in

* nsid (integer)
 
[Set](primer-set-class.md) Node set ID

* vx (real)
 
Initial velocity in X direction

* vy (real)
 
Initial velocity in Y direction

* vz (real)
 
Initial velocity in Z direction

* vxr (real)
 
Initial rotational velocity about X axis

* vyr (real)
 
Initial rotational velocity about Y axis

* vzr (real)
 
Initial rotational velocity about Z axis

* boxid (optional) (integer)
 
Define box containing nodes

* irigid (optional) (integer)
 
IRIGID flag

* nsidex (optional) (integer)
 
[Set](primer-set-class.md) Exempted Node set ID

* vxe (optional) (real)
 
Initial velocity in X direction of exempted nodes

* vye (optional) (real)
 
Initial velocity in Y direction of exempted nodes

* vze (optional) (real)
 
Initial velocity in Z direction of exempted nodes

* vxre (optional) (real)
 
Initial rotational velocity about X axis of exempted nodes

* vyre (optional) (real)
 
Initial rotational velocity about Y axis of exempted nodes

* vzre (optional) (real)
 
Initial rotational velocity about Z axis of exempted nodes

* icid (optional) (real)
 
Local coordinate system nodes

| Returns
<br>[Velocity](primer-velocity-class.md) object<br>
Return type
<br>Velocity |
| --- |

| Example
<br>To create a new velocity in model m<br>
```
var s = new Velocity(m, 1, 2.4, 3.7, 7.9, 0.0, 0.0, 0.0);
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a initial velocity. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the initial velocity

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the initial velocity v:<br>
```
v.AssociateComment(c);
```
 |
| --- |

* * *

| Blank()

Description<br>Blanks the initial velocity |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To blank initial velocity v:<br>
```
v.Blank();
```
 |
| --- |

* * *

| BlankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the initial velocities in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all initial velocities will be blanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the initial velocities in model m:<br>
```
Velocity.BlankAll(m);
```
 |
| --- |

* * *

| BlankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the flagged initial velocities in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged initial velocities will be blanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the initial velocities that you want to blank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the initial velocities in model m flagged with f:<br>
```
Velocity.BlankFlagged(m, f);
```
 |
| --- |

* * *

| Blanked()

Description<br>Checks if the initial velocity is blanked or not. |
| --- |

#### Arguments

No arguments

| Returns
<br>true if blanked, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if initial velocity v is blanked:<br>
```
if (v.Blanked() ) do_something...
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the initial velocity. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the initial velocity

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for initial velocity v:<br>
```
v.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the initial velocity. The target include of the copied initial velocity can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>Velocity object<br>
Return type
<br>Velocity |
| --- |

| Example
<br>To copy initial velocity v into initial velocity z:<br>
```
var z = v.Copy();
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a initial velocity. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the initial velocity

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the initial velocity v:<br>
```
v.DetachComment(c);
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for initial velocity. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for initial velocity v:<br>
```
v.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first initial velocity in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first initial velocity in

| Returns
<br>Velocity object (or null if there are no initial velocities in the model).<br>
Return type
<br>Velocity |
| --- |

| Example
<br>To get the first initial velocity in model m:<br>
```
var v = Velocity.First(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the initial velocities in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all initial velocities will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the initial velocities

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the initial velocities with flag f in model m:<br>
```
Velocity.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the initial velocity is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the initial velocity

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if initial velocity v has flag f set on it:<br>
```
if (v.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each initial velocity in the model.<br> **Note that ForEach has been designed to make looping over initial velocities as fast as possible and so has some limitations. Firstly, a single temporary Velocity object is created and on each function call it is updated with the current initial velocity data. This means that you should not try to store the Velocity object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new initial velocities inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all initial velocities are in

* func (function)
 
Function to call for each initial velocity

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the initial velocities in model m:<br>
```
Velocity.ForEach(m, test);
function test(v)
{
// v is Velocity object
}
```
<br><br>To call function test for all of the initial velocities in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
Velocity.ForEach(m, test, data);
function test(v, extra)
{
// v is Velocity object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Velocity objects or properties for all of the initial velocities in a model in PRIMER. If the optional property argument is not given then an array of Velocity objects is returned. If the property argument is given, that property value for each initial velocity is returned in the array instead of a Velocity object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get initial velocities from

* property (optional) (string)
 
Name for property to get for all initial velocities in the model

| Returns
<br>Array of Velocity objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Velocity objects for all of the initial velocities in model m:<br>
```
var a = Velocity.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each initial velocity in model m:<br>
```
var a = Velocity.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a initial velocity. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the initial velocity v:<br>
```
var comm_array = v.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Velocity objects for all of the flagged initial velocities in a model in PRIMER If the optional property argument is not given then an array of Velocity objects is returned. If the property argument is given, then that property value for each initial velocity is returned in the array instead of a Velocity object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get initial velocities from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the initial velocities that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged initial velocities in the model

| Returns
<br>Array of Velocity objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Velocity objects for all of the initial velocities in model m flagged with f:<br>
```
var v = Velocity.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the initial velocities in model m flagged with f:<br>
```
var a = Velocity.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the Velocity object for a initial velocity ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the initial velocity in

* number (integer)
 
number of the initial velocity you want the Velocity object for

| Returns
<br>Velocity object (or null if initial velocity does not exist).<br>
Return type
<br>Velocity |
| --- |

| Example
<br>To get the Velocity object for initial velocity 100 in model m<br>
```
var v = Velocity.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a Velocity property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [Velocity.ViewParameters()](primer-velocity-class.md#Velocity::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
initial velocity property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if Velocity property v.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (v.GetParameter(v.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if Velocity property v.example is a parameter by using the GetParameter method:<br>
```
if (v.ViewParameters().GetParameter(v.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this initial velocity (\*INITIAL\_VELOCITY). **Note that a carriage return is not added**. See also [Velocity.KeywordCards()](primer-velocity-class.md#Velocity::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for velocity i:<br>
```
var key = i.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the initial velocity. **Note that a carriage return is not added**. See also [Velocity.Keyword()](primer-velocity-class.md#Velocity::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for velocity i:<br>
```
var cards = i.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last initial velocity in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last initial velocity in

| Returns
<br>Velocity object (or null if there are no initial velocities in the model).<br>
Return type
<br>Velocity |
| --- |

| Example
<br>To get the last initial velocity in model m:<br>
```
var v = Velocity.Last(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next initial velocity in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Velocity object (or null if there are no more initial velocities in the model).<br>
Return type
<br>Velocity |
| --- |

| Example
<br>To get the initial velocity in model m after initial velocity v:<br>
```
var v = v.Next();
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a initial velocity. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only initial velocities from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only initial velocities that are flagged with *limit* can be selected. If omitted, or null, any initial velocities from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[Velocity](primer-velocity-class.md) object (or null if not picked)<br>
Return type
<br>Velocity |
| --- |

| Example
<br>To pick a initial velocity from model m giving the prompt 'Pick initial velocity from screen':<br>
```
var v = Velocity.Pick('Pick initial velocity from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous initial velocity in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Velocity object (or null if there are no more initial velocities in the model).<br>
Return type
<br>Velocity |
| --- |

| Example
<br>To get the initial velocity in model m before initial velocity v:<br>
```
var v = v.Previous();
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select initial velocities using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting initial velocities

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only initial velocities from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only initial velocities that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any initial velocities can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of initial velocities selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select initial velocities from model m, flagging those selected with flag f, giving the prompt 'Select initial velocities':<br>
```
Velocity.Select(f, 'Select initial velocities', m);
```
<br><br>To select initial velocities, flagging those selected with flag f but limiting selection to initial velocities flagged with flag l, giving the prompt 'Select initial velocities':<br>
```
Velocity.Select(f, 'Select initial velocities', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the initial velocity. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the initial velocity

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for initial velocity v:<br>
```
v.SetFlag(f);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the initial velocity. The initial velocity will be sketched until you either call [Velocity.Unsketch()](primer-velocity-class.md#Velocity::Unsketch), [Velocity.UnsketchAll()](primer-velocity-class.md#Velocity::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the initial velocity is sketched. If omitted redraw is true. If you want to sketch several initial velocities and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch initial velocity v:<br>
```
v.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged initial velocities in the model. The initial velocities will be sketched until you either call [Velocity.Unsketch()](primer-velocity-class.md#Velocity::Unsketch), [Velocity.UnsketchFlagged()](primer-velocity-class.md#Velocity::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged initial velocities will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the initial velocities that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the initial velocities are sketched. If omitted redraw is true. If you want to sketch flagged initial velocities several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all initial velocities flagged with flag in model m:<br>
```
Velocity.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of initial velocities in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing initial velocities should be counted. If false or omitted
referenced but undefined initial velocities will also be included in the total.

| Returns
<br>number of initial velocities<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of initial velocities in model m:<br>
```
var total = Velocity.Total(m);
```
 |
| --- |

* * *

| Unblank()

Description<br>Unblanks the initial velocity |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank initial velocity v:<br>
```
v.Unblank();
```
 |
| --- |

* * *

| UnblankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the initial velocities in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all initial velocities will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the initial velocities in model m:<br>
```
Velocity.UnblankAll(m);
```
 |
| --- |

* * *

| UnblankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the flagged initial velocities in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the flagged initial velocities will be unblanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the initial velocities that you want to unblank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the initial velocities in model m flagged with f:<br>
```
Velocity.UnblankFlagged(m, f);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the initial velocities in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all initial velocities will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the initial velocities

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the initial velocities in model m:<br>
```
Velocity.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the initial velocity. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the initial velocity is unsketched. If omitted redraw is true. If you want to unsketch several initial velocities and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch initial velocity v:<br>
```
v.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all initial velocities. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all initial velocities will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the initial velocities are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all initial velocities in model m:<br>
```
Velocity.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged initial velocities in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all initial velocities will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the initial velocities that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the initial velocities are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all initial velocities flagged with flag in model m:<br>
```
Velocity.UnsketchAll(m, flag);
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
<br>[Velocity](primer-velocity-class.md) object.<br>
Return type
<br>Velocity |
| --- |

| Example
<br>To check if Velocity property v.example is a parameter by using the [Velocity.GetParameter()](primer-velocity-class.md#Velocity::GetParameter) method:<br>
```
if (v.ViewParameters().GetParameter(v.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for initial velocity. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for initial velocity v:<br>
```
v.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this initial velocity. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for initial velocity v:<br>
```
var xrefs = v.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the initial velocity data in keyword format. Note that this contains the keyword header and the keyword cards. See also [Velocity.Keyword()](primer-velocity-class.md#Velocity::Keyword) and [Velocity.KeywordCards()](primer-velocity-class.md#Velocity::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for velocity i in keyword format<br>
```
var s = i.toString();
```
 |
| --- |

* * *