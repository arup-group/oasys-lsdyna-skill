# Accelerometer class

The Accelerometer class gives you access to seatbelt accelerometer cards in PRIMER. [More...](primer-accelerometer-class.md#Accelerometer_details)

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

* [BlankAll](primer-accelerometer-class.md#Accelerometer::BlankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [BlankFlagged](primer-accelerometer-class.md#Accelerometer::BlankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Create](primer-accelerometer-class.md#Accelerometer::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [First](primer-accelerometer-class.md#Accelerometer::First)(Model*[[Model](primer-model-class.md)]*)
* [FirstFreeLabel](primer-accelerometer-class.md#Accelerometer::FirstFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [FlagAll](primer-accelerometer-class.md#Accelerometer::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-accelerometer-class.md#Accelerometer::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-accelerometer-class.md#Accelerometer::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-accelerometer-class.md#Accelerometer::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-accelerometer-class.md#Accelerometer::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-accelerometer-class.md#Accelerometer::Last)(Model*[[Model](primer-model-class.md)]*)
* [LastFreeLabel](primer-accelerometer-class.md#Accelerometer::LastFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [NextFreeLabel](primer-accelerometer-class.md#Accelerometer::NextFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [Pick](primer-accelerometer-class.md#Accelerometer::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [RenumberAll](primer-accelerometer-class.md#Accelerometer::RenumberAll)(Model*[[Model](primer-model-class.md)]*, start*[integer]*)
* [RenumberFlagged](primer-accelerometer-class.md#Accelerometer::RenumberFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*)
* [Select](primer-accelerometer-class.md#Accelerometer::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-accelerometer-class.md#Accelerometer::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-accelerometer-class.md#Accelerometer::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnblankAll](primer-accelerometer-class.md#Accelerometer::UnblankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnblankFlagged](primer-accelerometer-class.md#Accelerometer::UnblankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [UnflagAll](primer-accelerometer-class.md#Accelerometer::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-accelerometer-class.md#Accelerometer::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-accelerometer-class.md#Accelerometer::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-accelerometer-class.md#Accelerometer::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Blank](primer-accelerometer-class.md#Accelerometer::Blank)()
* [Blanked](primer-accelerometer-class.md#Accelerometer::Blanked)()
* [Browse](primer-accelerometer-class.md#Accelerometer::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-accelerometer-class.md#Accelerometer::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-accelerometer-class.md#Accelerometer::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-accelerometer-class.md#Accelerometer::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-accelerometer-class.md#Accelerometer::Edit)(modal (optional)*[boolean]*)
* [Error](primer-accelerometer-class.md#Accelerometer::Error)(message*[string]*, details (optional)*[string]*)
* [ExtractColour](primer-accelerometer-class.md#Accelerometer::ExtractColour)()
* [Flagged](primer-accelerometer-class.md#Accelerometer::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-accelerometer-class.md#Accelerometer::GetComments)()
* [GetParameter](primer-accelerometer-class.md#Accelerometer::GetParameter)(prop*[string]*)
* [Keyword](primer-accelerometer-class.md#Accelerometer::Keyword)()
* [KeywordCards](primer-accelerometer-class.md#Accelerometer::KeywordCards)()
* [Next](primer-accelerometer-class.md#Accelerometer::Next)()
* [Previous](primer-accelerometer-class.md#Accelerometer::Previous)()
* [SetFlag](primer-accelerometer-class.md#Accelerometer::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Sketch](primer-accelerometer-class.md#Accelerometer::Sketch)(redraw (optional)*[boolean]*)
* [Unblank](primer-accelerometer-class.md#Accelerometer::Unblank)()
* [Unsketch](primer-accelerometer-class.md#Accelerometer::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-accelerometer-class.md#Accelerometer::ViewParameters)()
* [Warning](primer-accelerometer-class.md#Accelerometer::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-accelerometer-class.md#Accelerometer::Xrefs)()
* [toString](primer-accelerometer-class.md#Accelerometer::toString)()

## Accelerometer properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| colour | [Colour](primer-colour-class.md) | The colour of the accelerometer |
| exists (read only) | logical | true if accelerometer exists, false if referred to but not defined. |
| igrav | integer | Gravitational acceleration due to body force loads is included in acceleration output if igrav is 0, removed if igrav is 1. |
| include | integer | The [Include](primer-include-class.md) file number that the accelerometer is in. |
| intopt | integer | Integration option; velocities are integrated from global accelerations and transformed into local system if intopt is 0, they are integrated directly from local accelerations if intopt is 1. |
| label | integer | [Accelerometer](primer-accelerometer-class.md) number. Also see the [sbacid](primer-accelerometer-class.md#sbacid) property which is an alternative name for this. |
| mass | real | Optional added mass for accelerometer |
| model (read only) | integer | The [Model](primer-model-class.md) number that the accelerometer is in. |
| nid1 | integer | [Node](primer-node-class.md) number 1 |
| nid2 | integer | [Node](primer-node-class.md) number 2 |
| nid3 | integer | [Node](primer-node-class.md) number 3 |
| sbacid | integer | [Accelerometer](primer-accelerometer-class.md) number. Also see the [label](primer-accelerometer-class.md#label) property which is an alternative name for this. |
| transparency | integer | The transparency of the accelerometer (0-100) 0% is opaque, 100% is transparent. |

| Detailed Description<br>The Accelerometer class allows you to create, modify, edit and manipulate seatbelt accelerometer cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new Accelerometer(Model*[[Model](primer-model-class.md)]*, sbacid*[integer]*, nid1*[integer]*, nid2*[integer]*, nid3*[integer]*, igrav (optional)*[integer]*, intopt (optional)*[integer]*, mass (optional)*[real]*)

Description<br>Create a new [Seatbelt Accelerometer](primer-accelerometer-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that accelerometer will be created in

* sbacid (integer)
 
[Accelerometer](primer-accelerometer-class.md) number. Also see the [label](primer-accelerometer-class.md#label) property which is an alternative name for this.

* nid1 (integer)
 
[Node](primer-node-class.md) number 1

* nid2 (integer)
 
[Node](primer-node-class.md) number 2

* nid3 (integer)
 
[Node](primer-node-class.md) number 3

* igrav (optional) (integer)
 
Gravitational acceleration due to body force loads is included in acceleration output if igrav is 0, removed if igrav is 1.

* intopt (optional) (integer)
 
Integration option; velocities are integrated from global accelerations and transformed into local system if intopt is 0, they are integrated directly from local accelerations if intopt is 1.

* mass (optional) (real)
 
Optional added mass for accelerometer

| Returns
<br>[Accelerometer](primer-accelerometer-class.md) object<br>
Return type
<br>Accelerometer |
| --- |

| Example
<br>To create a new seatbelt accelerometer in model m with label 100, nodes 1, 2 and 3:<br>
```
var a = new Accelerometer(m, 100, 1, 2, 3);
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a accelerometer. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the accelerometer

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the accelerometer a:<br>
```
a.AssociateComment(c);
```
 |
| --- |

* * *

| Blank()

Description<br>Blanks the accelerometer |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To blank accelerometer a:<br>
```
a.Blank();
```
 |
| --- |

* * *

| BlankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the accelerometers in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all accelerometers will be blanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the accelerometers in model m:<br>
```
Accelerometer.BlankAll(m);
```
 |
| --- |

* * *

| BlankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the flagged accelerometers in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged accelerometers will be blanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the accelerometers that you want to blank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the accelerometers in model m flagged with f:<br>
```
Accelerometer.BlankFlagged(m, f);
```
 |
| --- |

* * *

| Blanked()

Description<br>Checks if the accelerometer is blanked or not. |
| --- |

#### Arguments

No arguments

| Returns
<br>true if blanked, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if accelerometer a is blanked:<br>
```
if (a.Blanked() ) do_something...
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
<br>To Browse accelerometer a:<br>
```
a.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the accelerometer. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the accelerometer

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for accelerometer a:<br>
```
a.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the accelerometer. The target include of the copied accelerometer can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>Accelerometer object<br>
Return type
<br>Accelerometer |
| --- |

| Example
<br>To copy accelerometer a into accelerometer z:<br>
```
var z = a.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a accelerometer |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the accelerometer will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>Accelerometer object (or null if not made).<br>
Return type
<br>Accelerometer |
| --- |

| Example
<br>To start creating a accelerometer in model m:<br>
```
var a = Accelerometer.Create(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a accelerometer. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the accelerometer

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the accelerometer a:<br>
```
a.DetachComment(c);
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
<br>To Edit accelerometer a:<br>
```
a.Edit();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for accelerometer. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for accelerometer a:<br>
```
a.Error("My custom error");
```
 |
| --- |

* * *

| ExtractColour()

Description<br>Extracts the **actual** colour used for accelerometer.<br> By default in PRIMER many entities such as elements get their colour automatically from the part that they are in. PRIMER cycles through 13 default colours based on the label of the entity. In this case the accelerometer [colour](primer-accelerometer-class.md#colour) property will return the value [Colour.PART](primer-colour-class.md#Colour.PART) instead of the actual colour. This method will return the actual colour which is used for drawing the accelerometer. |
| --- |

#### Arguments

No arguments

| Returns
<br>colour value (integer)<br>
Return type
<br>Number |
| --- |

| Example
<br>To return the colour used for drawing accelerometer a:<br>
```
var colour = a.ExtractColour();
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first accelerometer in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first accelerometer in

| Returns
<br>Accelerometer object (or null if there are no accelerometers in the model).<br>
Return type
<br>Accelerometer |
| --- |

| Example
<br>To get the first accelerometer in model m:<br>
```
var a = Accelerometer.First(m);
```
 |
| --- |

* * *

| FirstFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the first free accelerometer label in the model. Also see [Accelerometer.LastFreeLabel()](primer-accelerometer-class.md#Accelerometer::LastFreeLabel), [Accelerometer.NextFreeLabel()](primer-accelerometer-class.md#Accelerometer::NextFreeLabel) and [Model.FirstFreeItemLabel()](primer-model-class.md#Model::FirstFreeItemLabel). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first free accelerometer label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *First free in layer* in editing panels). If omitted the whole model will be used (Equivalent to *First free* in editing panels).

| Returns
<br>Accelerometer label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the first free accelerometer label in model m:<br>
```
var label = Accelerometer.FirstFreeLabel(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the accelerometers in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all accelerometers will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the accelerometers

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the accelerometers with flag f in model m:<br>
```
Accelerometer.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the accelerometer is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the accelerometer

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if accelerometer a has flag f set on it:<br>
```
if (a.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each accelerometer in the model.<br> **Note that ForEach has been designed to make looping over accelerometers as fast as possible and so has some limitations. Firstly, a single temporary Accelerometer object is created and on each function call it is updated with the current accelerometer data. This means that you should not try to store the Accelerometer object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new accelerometers inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all accelerometers are in

* func (function)
 
Function to call for each accelerometer

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the accelerometers in model m:<br>
```
Accelerometer.ForEach(m, test);
function test(a)
{
// a is Accelerometer object
}
```
<br><br>To call function test for all of the accelerometers in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
Accelerometer.ForEach(m, test, data);
function test(a, extra)
{
// a is Accelerometer object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Accelerometer objects or properties for all of the accelerometers in a model in PRIMER. If the optional property argument is not given then an array of Accelerometer objects is returned. If the property argument is given, that property value for each accelerometer is returned in the array instead of a Accelerometer object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get accelerometers from

* property (optional) (string)
 
Name for property to get for all accelerometers in the model

| Returns
<br>Array of Accelerometer objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Accelerometer objects for all of the accelerometers in model m:<br>
```
var a = Accelerometer.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each accelerometer in model m:<br>
```
var a = Accelerometer.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a accelerometer. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the accelerometer a:<br>
```
var comm_array = a.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Accelerometer objects for all of the flagged accelerometers in a model in PRIMER If the optional property argument is not given then an array of Accelerometer objects is returned. If the property argument is given, then that property value for each accelerometer is returned in the array instead of a Accelerometer object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get accelerometers from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the accelerometers that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged accelerometers in the model

| Returns
<br>Array of Accelerometer objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Accelerometer objects for all of the accelerometers in model m flagged with f:<br>
```
var a = Accelerometer.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the accelerometers in model m flagged with f:<br>
```
var a = Accelerometer.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the Accelerometer object for a accelerometer ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the accelerometer in

* number (integer)
 
number of the accelerometer you want the Accelerometer object for

| Returns
<br>Accelerometer object (or null if accelerometer does not exist).<br>
Return type
<br>Accelerometer |
| --- |

| Example
<br>To get the Accelerometer object for accelerometer 100 in model m<br>
```
var a = Accelerometer.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a Accelerometer property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [Accelerometer.ViewParameters()](primer-accelerometer-class.md#Accelerometer::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
accelerometer property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if Accelerometer property a.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (a.GetParameter(a.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if Accelerometer property a.example is a parameter by using the GetParameter method:<br>
```
if (a.ViewParameters().GetParameter(a.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this accelerometer (\*ELEMENT\_SEATBELT\_ACCELEROMETER) **Note that a carriage return is not added**. See also [Accelerometer.KeywordCards()](primer-accelerometer-class.md#Accelerometer::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for accelerometer a:<br>
```
var key = a.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the accelerometer. **Note that a carriage return is not added**. See also [Accelerometer.Keyword()](primer-accelerometer-class.md#Accelerometer::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for accelerometer a:<br>
```
var cards = a.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last accelerometer in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last accelerometer in

| Returns
<br>Accelerometer object (or null if there are no accelerometers in the model).<br>
Return type
<br>Accelerometer |
| --- |

| Example
<br>To get the last accelerometer in model m:<br>
```
var a = Accelerometer.Last(m);
```
 |
| --- |

* * *

| LastFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the last free accelerometer label in the model. Also see [Accelerometer.FirstFreeLabel()](primer-accelerometer-class.md#Accelerometer::FirstFreeLabel), [Accelerometer.NextFreeLabel()](primer-accelerometer-class.md#Accelerometer::NextFreeLabel) and see [Model.LastFreeItemLabel()](primer-model-class.md#Model::LastFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last free accelerometer label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest free in layer* in editing panels). If omitted the whole model will be used.

| Returns
<br>Accelerometer label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the last free accelerometer label in model m:<br>
```
var label = Accelerometer.LastFreeLabel(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next accelerometer in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Accelerometer object (or null if there are no more accelerometers in the model).<br>
Return type
<br>Accelerometer |
| --- |

| Example
<br>To get the accelerometer in model m after accelerometer a:<br>
```
var a = a.Next();
```
 |
| --- |

* * *

| NextFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the next free (highest+1) accelerometer label in the model. Also see [Accelerometer.FirstFreeLabel()](primer-accelerometer-class.md#Accelerometer::FirstFreeLabel), [Accelerometer.LastFreeLabel()](primer-accelerometer-class.md#Accelerometer::LastFreeLabel) and [Model.NextFreeItemLabel()](primer-model-class.md#Model::NextFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get next free accelerometer label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest+1 in layer* in editing panels). If omitted the whole model will be used (Equivalent to *Highest+1* in editing panels).

| Returns
<br>Accelerometer label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the next free accelerometer label in model m:<br>
```
var label = Accelerometer.NextFreeLabel(m);
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a accelerometer. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only accelerometers from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only accelerometers that are flagged with *limit* can be selected. If omitted, or null, any accelerometers from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[Accelerometer](primer-accelerometer-class.md) object (or null if not picked)<br>
Return type
<br>Accelerometer |
| --- |

| Example
<br>To pick a accelerometer from model m giving the prompt 'Pick accelerometer from screen':<br>
```
var a = Accelerometer.Pick('Pick accelerometer from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous accelerometer in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Accelerometer object (or null if there are no more accelerometers in the model).<br>
Return type
<br>Accelerometer |
| --- |

| Example
<br>To get the accelerometer in model m before accelerometer a:<br>
```
var a = a.Previous();
```
 |
| --- |

* * *

| RenumberAll(Model*[[Model](primer-model-class.md)]*, start*[integer]*) [static]
Description<br>Renumbers all of the accelerometers in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all accelerometers will be renumbered in

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the accelerometers in model m, from 1000000:<br>
```
Accelerometer.RenumberAll(m, 1000000);
```
 |
| --- |

* * *

| RenumberFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*) [static]
Description<br>Renumbers all of the flagged accelerometers in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged accelerometers will be renumbered in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the accelerometers that you want to renumber

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the accelerometers in model m flagged with f, from 1000000:<br>
```
Accelerometer.RenumberFlagged(m, f, 1000000);
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select accelerometers using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting accelerometers

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only accelerometers from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only accelerometers that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any accelerometers can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of accelerometers selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select accelerometers from model m, flagging those selected with flag f, giving the prompt 'Select accelerometers':<br>
```
Accelerometer.Select(f, 'Select accelerometers', m);
```
<br><br>To select accelerometers, flagging those selected with flag f but limiting selection to accelerometers flagged with flag l, giving the prompt 'Select accelerometers':<br>
```
Accelerometer.Select(f, 'Select accelerometers', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the accelerometer. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the accelerometer

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for accelerometer a:<br>
```
a.SetFlag(f);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the accelerometer. The accelerometer will be sketched until you either call [Accelerometer.Unsketch()](primer-accelerometer-class.md#Accelerometer::Unsketch), [Accelerometer.UnsketchAll()](primer-accelerometer-class.md#Accelerometer::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the accelerometer is sketched. If omitted redraw is true. If you want to sketch several accelerometers and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch accelerometer a:<br>
```
a.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged accelerometers in the model. The accelerometers will be sketched until you either call [Accelerometer.Unsketch()](primer-accelerometer-class.md#Accelerometer::Unsketch), [Accelerometer.UnsketchFlagged()](primer-accelerometer-class.md#Accelerometer::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged accelerometers will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the accelerometers that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the accelerometers are sketched. If omitted redraw is true. If you want to sketch flagged accelerometers several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all accelerometers flagged with flag in model m:<br>
```
Accelerometer.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of accelerometers in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing accelerometers should be counted. If false or omitted
referenced but undefined accelerometers will also be included in the total.

| Returns
<br>number of accelerometers<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of accelerometers in model m:<br>
```
var total = Accelerometer.Total(m);
```
 |
| --- |

* * *

| Unblank()

Description<br>Unblanks the accelerometer |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank accelerometer a:<br>
```
a.Unblank();
```
 |
| --- |

* * *

| UnblankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the accelerometers in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all accelerometers will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the accelerometers in model m:<br>
```
Accelerometer.UnblankAll(m);
```
 |
| --- |

* * *

| UnblankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the flagged accelerometers in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the flagged accelerometers will be unblanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the accelerometers that you want to unblank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the accelerometers in model m flagged with f:<br>
```
Accelerometer.UnblankFlagged(m, f);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the accelerometers in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all accelerometers will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the accelerometers

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the accelerometers in model m:<br>
```
Accelerometer.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the accelerometer. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the accelerometer is unsketched. If omitted redraw is true. If you want to unsketch several accelerometers and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch accelerometer a:<br>
```
a.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all accelerometers. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all accelerometers will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the accelerometers are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all accelerometers in model m:<br>
```
Accelerometer.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged accelerometers in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all accelerometers will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the accelerometers that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the accelerometers are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all accelerometers flagged with flag in model m:<br>
```
Accelerometer.UnsketchAll(m, flag);
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
<br>[Accelerometer](primer-accelerometer-class.md) object.<br>
Return type
<br>Accelerometer |
| --- |

| Example
<br>To check if Accelerometer property a.example is a parameter by using the [Accelerometer.GetParameter()](primer-accelerometer-class.md#Accelerometer::GetParameter) method:<br>
```
if (a.ViewParameters().GetParameter(a.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for accelerometer. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for accelerometer a:<br>
```
a.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this accelerometer. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for accelerometer a:<br>
```
var xrefs = a.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the accelerometer data in keyword format. Note that this contains the keyword header and the keyword cards. See also [Accelerometer.Keyword()](primer-accelerometer-class.md#Accelerometer::Keyword) and [Accelerometer.KeywordCards()](primer-accelerometer-class.md#Accelerometer::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for accelerometer a in keyword format<br>
```
var str = a.toString();
```
 |
| --- |

* * *