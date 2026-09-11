# Sensor class

The Sensor class gives you access to seatbelt sensor cards in PRIMER. [More...](primer-sensor-class.md#Sensor_details)

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

* [BlankAll](primer-sensor-class.md#Sensor::BlankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [BlankFlagged](primer-sensor-class.md#Sensor::BlankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Create](primer-sensor-class.md#Sensor::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [First](primer-sensor-class.md#Sensor::First)(Model*[[Model](primer-model-class.md)]*)
* [FirstFreeLabel](primer-sensor-class.md#Sensor::FirstFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [FlagAll](primer-sensor-class.md#Sensor::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-sensor-class.md#Sensor::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-sensor-class.md#Sensor::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-sensor-class.md#Sensor::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-sensor-class.md#Sensor::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-sensor-class.md#Sensor::Last)(Model*[[Model](primer-model-class.md)]*)
* [LastFreeLabel](primer-sensor-class.md#Sensor::LastFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [NextFreeLabel](primer-sensor-class.md#Sensor::NextFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [Pick](primer-sensor-class.md#Sensor::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [RenumberAll](primer-sensor-class.md#Sensor::RenumberAll)(Model*[[Model](primer-model-class.md)]*, start*[integer]*)
* [RenumberFlagged](primer-sensor-class.md#Sensor::RenumberFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*)
* [Select](primer-sensor-class.md#Sensor::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-sensor-class.md#Sensor::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-sensor-class.md#Sensor::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnblankAll](primer-sensor-class.md#Sensor::UnblankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnblankFlagged](primer-sensor-class.md#Sensor::UnblankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [UnflagAll](primer-sensor-class.md#Sensor::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-sensor-class.md#Sensor::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-sensor-class.md#Sensor::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-sensor-class.md#Sensor::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Blank](primer-sensor-class.md#Sensor::Blank)()
* [Blanked](primer-sensor-class.md#Sensor::Blanked)()
* [Browse](primer-sensor-class.md#Sensor::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-sensor-class.md#Sensor::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-sensor-class.md#Sensor::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-sensor-class.md#Sensor::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-sensor-class.md#Sensor::Edit)(modal (optional)*[boolean]*)
* [Error](primer-sensor-class.md#Sensor::Error)(message*[string]*, details (optional)*[string]*)
* [ExtractColour](primer-sensor-class.md#Sensor::ExtractColour)()
* [Flagged](primer-sensor-class.md#Sensor::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-sensor-class.md#Sensor::GetComments)()
* [GetParameter](primer-sensor-class.md#Sensor::GetParameter)(prop*[string]*)
* [Keyword](primer-sensor-class.md#Sensor::Keyword)()
* [KeywordCards](primer-sensor-class.md#Sensor::KeywordCards)()
* [Next](primer-sensor-class.md#Sensor::Next)()
* [Previous](primer-sensor-class.md#Sensor::Previous)()
* [SetFlag](primer-sensor-class.md#Sensor::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Sketch](primer-sensor-class.md#Sensor::Sketch)(redraw (optional)*[boolean]*)
* [Unblank](primer-sensor-class.md#Sensor::Unblank)()
* [Unsketch](primer-sensor-class.md#Sensor::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-sensor-class.md#Sensor::ViewParameters)()
* [Warning](primer-sensor-class.md#Sensor::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-sensor-class.md#Sensor::Xrefs)()
* [toString](primer-sensor-class.md#Sensor::toString)()

## Sensor properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| acc | real | Activating acceleration. |
| atime | real | Time over which acceleration must be exceeded. |
| colour | [Colour](primer-colour-class.md) | The colour of the sensor |
| dmn | real | Minimum distance |
| dmx | real | Maximum distance |
| dof | integer | Degree of freedom. |
| exists (read only) | logical | true if sensor exists, false if referred to but not defined. |
| include | integer | The [Include](primer-include-class.md) file number that the sensor is in. |
| label | integer | [Sensor](primer-sensor-class.md) number. Also see the [sbacid](primer-sensor-class.md#sbsid) property which is an alternative name for this. |
| model (read only) | integer | The [Model](primer-model-class.md) number that the sensor is in. |
| nid | integer | [Node](primer-node-class.md) number. |
| nid1 | integer | [Node](primer-node-class.md) number 1 |
| nid2 | integer | [Node](primer-node-class.md) number 2 |
| pulmn | real | Maximum pull-out |
| pulmx | real | Maximum pull-out |
| pulrat | real | Rate of pull-out (length/time units) |
| pultim | real | Time over which rate of pull#out must be exceeded |
| sbrid | integer | [Retractor](primer-retractor-class.md) number (for sbstyp = 2 OR 5). |
| sbsfl | integer | Sensor flag. |
| sbsid | integer | [Sensor](primer-sensor-class.md) number. Also see the [label](primer-sensor-class.md#label) property which is an alternative name for this. |
| sbstyp | integer | Sensor type. |
| time | real | Time at which sensor triggers |
| transparency | integer | The transparency of the sensor (0-100) 0% is opaque, 100% is transparent. |

| Detailed Description<br>The Sensor class allows you to create, modify, edit and manipulate seatbelt sensor cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new Sensor(Model*[[Model](primer-model-class.md)]*, sbsid*[integer]*, sbstyp*[integer]*, sbsfl (optional)*[integer]*, nid (optional)*[integer]*, nid2 (optional)*[integer]*)

Description<br>Create a new [Seatbelt Sensor](primer-sensor-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that sensor will be created in

* sbsid (integer)
 
[Sensor](primer-sensor-class.md) number.

* sbstyp (integer)
 
Sensor type

* sbsfl (optional) (integer)
 
Sensor flag. Default 0.

* nid (optional) (integer)
 
Optional node ID: Compulsory for types 1 and 4.

* nid2 (optional) (integer)
 
Optional node ID 2: Compulsory for type 4.

| Returns
<br>[Sensor](primer-sensor-class.md) object<br>
Return type
<br>Sensor |
| --- |

| Example
<br>To create a new seatbelt sensor in model m with label 100, type 1 and node 1:<br>
```
var s = new Sensor(m, 100, 1, 0, 1);
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a sensor. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the sensor

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the sensor s:<br>
```
s.AssociateComment(c);
```
 |
| --- |

* * *

| Blank()

Description<br>Blanks the sensor |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To blank sensor s:<br>
```
s.Blank();
```
 |
| --- |

* * *

| BlankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the sensors in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all sensors will be blanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the sensors in model m:<br>
```
Sensor.BlankAll(m);
```
 |
| --- |

* * *

| BlankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the flagged sensors in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged sensors will be blanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the sensors that you want to blank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the sensors in model m flagged with f:<br>
```
Sensor.BlankFlagged(m, f);
```
 |
| --- |

* * *

| Blanked()

Description<br>Checks if the sensor is blanked or not. |
| --- |

#### Arguments

No arguments

| Returns
<br>true if blanked, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if sensor s is blanked:<br>
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
<br>To Browse sensor s:<br>
```
s.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the sensor. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the sensor

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for sensor s:<br>
```
s.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the sensor. The target include of the copied sensor can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>Sensor object<br>
Return type
<br>Sensor |
| --- |

| Example
<br>To copy sensor s into sensor z:<br>
```
var z = s.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a sensor |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the sensor will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>Sensor object (or null if not made).<br>
Return type
<br>Sensor |
| --- |

| Example
<br>To start creating a sensor in model m:<br>
```
var s = Sensor.Create(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a sensor. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the sensor

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the sensor s:<br>
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
<br>To Edit sensor s:<br>
```
s.Edit();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for sensor. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for sensor s:<br>
```
s.Error("My custom error");
```
 |
| --- |

* * *

| ExtractColour()

Description<br>Extracts the **actual** colour used for sensor.<br> By default in PRIMER many entities such as elements get their colour automatically from the part that they are in. PRIMER cycles through 13 default colours based on the label of the entity. In this case the sensor [colour](primer-sensor-class.md#colour) property will return the value [Colour.PART](primer-colour-class.md#Colour.PART) instead of the actual colour. This method will return the actual colour which is used for drawing the sensor. |
| --- |

#### Arguments

No arguments

| Returns
<br>colour value (integer)<br>
Return type
<br>Number |
| --- |

| Example
<br>To return the colour used for drawing sensor s:<br>
```
var colour = s.ExtractColour();
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first sensor in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first sensor in

| Returns
<br>Sensor object (or null if there are no sensors in the model).<br>
Return type
<br>Sensor |
| --- |

| Example
<br>To get the first sensor in model m:<br>
```
var s = Sensor.First(m);
```
 |
| --- |

* * *

| FirstFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the first free sensor label in the model. Also see [Sensor.LastFreeLabel()](primer-sensor-class.md#Sensor::LastFreeLabel), [Sensor.NextFreeLabel()](primer-sensor-class.md#Sensor::NextFreeLabel) and [Model.FirstFreeItemLabel()](primer-model-class.md#Model::FirstFreeItemLabel). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first free sensor label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *First free in layer* in editing panels). If omitted the whole model will be used (Equivalent to *First free* in editing panels).

| Returns
<br>Sensor label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the first free sensor label in model m:<br>
```
var label = Sensor.FirstFreeLabel(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the sensors in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all sensors will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the sensors

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the sensors with flag f in model m:<br>
```
Sensor.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the sensor is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the sensor

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if sensor s has flag f set on it:<br>
```
if (s.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each sensor in the model.<br> **Note that ForEach has been designed to make looping over sensors as fast as possible and so has some limitations. Firstly, a single temporary Sensor object is created and on each function call it is updated with the current sensor data. This means that you should not try to store the Sensor object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new sensors inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all sensors are in

* func (function)
 
Function to call for each sensor

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the sensors in model m:<br>
```
Sensor.ForEach(m, test);
function test(s)
{
// s is Sensor object
}
```
<br><br>To call function test for all of the sensors in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
Sensor.ForEach(m, test, data);
function test(s, extra)
{
// s is Sensor object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Sensor objects or properties for all of the sensors in a model in PRIMER. If the optional property argument is not given then an array of Sensor objects is returned. If the property argument is given, that property value for each sensor is returned in the array instead of a Sensor object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get sensors from

* property (optional) (string)
 
Name for property to get for all sensors in the model

| Returns
<br>Array of Sensor objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Sensor objects for all of the sensors in model m:<br>
```
var a = Sensor.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each sensor in model m:<br>
```
var a = Sensor.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a sensor. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the sensor s:<br>
```
var comm_array = s.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Sensor objects for all of the flagged sensors in a model in PRIMER If the optional property argument is not given then an array of Sensor objects is returned. If the property argument is given, then that property value for each sensor is returned in the array instead of a Sensor object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get sensors from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the sensors that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged sensors in the model

| Returns
<br>Array of Sensor objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Sensor objects for all of the sensors in model m flagged with f:<br>
```
var s = Sensor.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the sensors in model m flagged with f:<br>
```
var a = Sensor.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the Sensor object for a sensor ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the sensor in

* number (integer)
 
number of the sensor you want the Sensor object for

| Returns
<br>Sensor object (or null if sensor does not exist).<br>
Return type
<br>Sensor |
| --- |

| Example
<br>To get the Sensor object for sensor 100 in model m<br>
```
var s = Sensor.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a Sensor property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [Sensor.ViewParameters()](primer-sensor-class.md#Sensor::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
sensor property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if Sensor property s.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (s.GetParameter(s.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if Sensor property s.example is a parameter by using the GetParameter method:<br>
```
if (s.ViewParameters().GetParameter(s.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this sensor (\*ELEMENT\_SEATBELT\_SENSEROMETER) **Note that a carriage return is not added**. See also [Sensor.KeywordCards()](primer-sensor-class.md#Sensor::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for sensor s:<br>
```
var key = s.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the sensor. **Note that a carriage return is not added**. See also [Sensor.Keyword()](primer-sensor-class.md#Sensor::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for sensor s:<br>
```
var cards = s.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last sensor in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last sensor in

| Returns
<br>Sensor object (or null if there are no sensors in the model).<br>
Return type
<br>Sensor |
| --- |

| Example
<br>To get the last sensor in model m:<br>
```
var s = Sensor.Last(m);
```
 |
| --- |

* * *

| LastFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the last free sensor label in the model. Also see [Sensor.FirstFreeLabel()](primer-sensor-class.md#Sensor::FirstFreeLabel), [Sensor.NextFreeLabel()](primer-sensor-class.md#Sensor::NextFreeLabel) and see [Model.LastFreeItemLabel()](primer-model-class.md#Model::LastFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last free sensor label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest free in layer* in editing panels). If omitted the whole model will be used.

| Returns
<br>Sensor label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the last free sensor label in model m:<br>
```
var label = Sensor.LastFreeLabel(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next sensor in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Sensor object (or null if there are no more sensors in the model).<br>
Return type
<br>Sensor |
| --- |

| Example
<br>To get the sensor in model m after sensor s:<br>
```
var s = s.Next();
```
 |
| --- |

* * *

| NextFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the next free (highest+1) sensor label in the model. Also see [Sensor.FirstFreeLabel()](primer-sensor-class.md#Sensor::FirstFreeLabel), [Sensor.LastFreeLabel()](primer-sensor-class.md#Sensor::LastFreeLabel) and [Model.NextFreeItemLabel()](primer-model-class.md#Model::NextFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get next free sensor label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest+1 in layer* in editing panels). If omitted the whole model will be used (Equivalent to *Highest+1* in editing panels).

| Returns
<br>Sensor label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the next free sensor label in model m:<br>
```
var label = Sensor.NextFreeLabel(m);
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a sensor. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only sensors from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only sensors that are flagged with *limit* can be selected. If omitted, or null, any sensors from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[Sensor](primer-sensor-class.md) object (or null if not picked)<br>
Return type
<br>Sensor |
| --- |

| Example
<br>To pick a sensor from model m giving the prompt 'Pick sensor from screen':<br>
```
var s = Sensor.Pick('Pick sensor from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous sensor in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Sensor object (or null if there are no more sensors in the model).<br>
Return type
<br>Sensor |
| --- |

| Example
<br>To get the sensor in model m before sensor s:<br>
```
var s = s.Previous();
```
 |
| --- |

* * *

| RenumberAll(Model*[[Model](primer-model-class.md)]*, start*[integer]*) [static]
Description<br>Renumbers all of the sensors in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all sensors will be renumbered in

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the sensors in model m, from 1000000:<br>
```
Sensor.RenumberAll(m, 1000000);
```
 |
| --- |

* * *

| RenumberFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*) [static]
Description<br>Renumbers all of the flagged sensors in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged sensors will be renumbered in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the sensors that you want to renumber

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the sensors in model m flagged with f, from 1000000:<br>
```
Sensor.RenumberFlagged(m, f, 1000000);
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select sensors using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting sensors

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only sensors from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only sensors that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any sensors can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of sensors selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select sensors from model m, flagging those selected with flag f, giving the prompt 'Select sensors':<br>
```
Sensor.Select(f, 'Select sensors', m);
```
<br><br>To select sensors, flagging those selected with flag f but limiting selection to sensors flagged with flag l, giving the prompt 'Select sensors':<br>
```
Sensor.Select(f, 'Select sensors', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the sensor. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the sensor

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for sensor s:<br>
```
s.SetFlag(f);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the sensor. The sensor will be sketched until you either call [Sensor.Unsketch()](primer-sensor-class.md#Sensor::Unsketch), [Sensor.UnsketchAll()](primer-sensor-class.md#Sensor::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the sensor is sketched. If omitted redraw is true. If you want to sketch several sensors and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch sensor s:<br>
```
s.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged sensors in the model. The sensors will be sketched until you either call [Sensor.Unsketch()](primer-sensor-class.md#Sensor::Unsketch), [Sensor.UnsketchFlagged()](primer-sensor-class.md#Sensor::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged sensors will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the sensors that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the sensors are sketched. If omitted redraw is true. If you want to sketch flagged sensors several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all sensors flagged with flag in model m:<br>
```
Sensor.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of sensors in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing sensors should be counted. If false or omitted
referenced but undefined sensors will also be included in the total.

| Returns
<br>number of sensors<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of sensors in model m:<br>
```
var total = Sensor.Total(m);
```
 |
| --- |

* * *

| Unblank()

Description<br>Unblanks the sensor |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank sensor s:<br>
```
s.Unblank();
```
 |
| --- |

* * *

| UnblankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the sensors in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all sensors will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the sensors in model m:<br>
```
Sensor.UnblankAll(m);
```
 |
| --- |

* * *

| UnblankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the flagged sensors in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the flagged sensors will be unblanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the sensors that you want to unblank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the sensors in model m flagged with f:<br>
```
Sensor.UnblankFlagged(m, f);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the sensors in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all sensors will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the sensors

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the sensors in model m:<br>
```
Sensor.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the sensor. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the sensor is unsketched. If omitted redraw is true. If you want to unsketch several sensors and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch sensor s:<br>
```
s.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all sensors. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all sensors will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the sensors are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all sensors in model m:<br>
```
Sensor.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged sensors in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all sensors will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the sensors that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the sensors are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all sensors flagged with flag in model m:<br>
```
Sensor.UnsketchAll(m, flag);
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
<br>[Sensor](primer-sensor-class.md) object.<br>
Return type
<br>Sensor |
| --- |

| Example
<br>To check if Sensor property s.example is a parameter by using the [Sensor.GetParameter()](primer-sensor-class.md#Sensor::GetParameter) method:<br>
```
if (s.ViewParameters().GetParameter(s.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for sensor. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for sensor s:<br>
```
s.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this sensor. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for sensor s:<br>
```
var xrefs = s.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the sensor data in keyword format. Note that this contains the keyword header and the keyword cards. See also [Sensor.Keyword()](primer-sensor-class.md#Sensor::Keyword) and [Sensor.KeywordCards()](primer-sensor-class.md#Sensor::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for sensor s in keyword format<br>
```
var str = s.toString();
```
 |
| --- |

* * *