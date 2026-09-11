# SensorControl class

The SensorControl class gives you access to \*SENSOR\_CONTROL keyword in PRIMER. [More...](primer-sensorcontrol-class.md#SensorControl_details)

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

* [Create](primer-sensorcontrol-class.md#SensorControl::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [First](primer-sensorcontrol-class.md#SensorControl::First)(Model*[[Model](primer-model-class.md)]*)
* [FirstFreeLabel](primer-sensorcontrol-class.md#SensorControl::FirstFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [FlagAll](primer-sensorcontrol-class.md#SensorControl::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-sensorcontrol-class.md#SensorControl::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-sensorcontrol-class.md#SensorControl::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-sensorcontrol-class.md#SensorControl::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-sensorcontrol-class.md#SensorControl::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-sensorcontrol-class.md#SensorControl::Last)(Model*[[Model](primer-model-class.md)]*)
* [LastFreeLabel](primer-sensorcontrol-class.md#SensorControl::LastFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [NextFreeLabel](primer-sensorcontrol-class.md#SensorControl::NextFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [RenumberAll](primer-sensorcontrol-class.md#SensorControl::RenumberAll)(Model*[[Model](primer-model-class.md)]*, start*[integer]*)
* [RenumberFlagged](primer-sensorcontrol-class.md#SensorControl::RenumberFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*)
* [Select](primer-sensorcontrol-class.md#SensorControl::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-sensorcontrol-class.md#SensorControl::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-sensorcontrol-class.md#SensorControl::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnflagAll](primer-sensorcontrol-class.md#SensorControl::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-sensorcontrol-class.md#SensorControl::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-sensorcontrol-class.md#SensorControl::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-sensorcontrol-class.md#SensorControl::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Browse](primer-sensorcontrol-class.md#SensorControl::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-sensorcontrol-class.md#SensorControl::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-sensorcontrol-class.md#SensorControl::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-sensorcontrol-class.md#SensorControl::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-sensorcontrol-class.md#SensorControl::Edit)(modal (optional)*[boolean]*)
* [Error](primer-sensorcontrol-class.md#SensorControl::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-sensorcontrol-class.md#SensorControl::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-sensorcontrol-class.md#SensorControl::GetComments)()
* [GetParameter](primer-sensorcontrol-class.md#SensorControl::GetParameter)(prop*[string]*)
* [Keyword](primer-sensorcontrol-class.md#SensorControl::Keyword)()
* [KeywordCards](primer-sensorcontrol-class.md#SensorControl::KeywordCards)()
* [Next](primer-sensorcontrol-class.md#SensorControl::Next)()
* [Previous](primer-sensorcontrol-class.md#SensorControl::Previous)()
* [SetFlag](primer-sensorcontrol-class.md#SensorControl::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Sketch](primer-sensorcontrol-class.md#SensorControl::Sketch)(redraw (optional)*[boolean]*)
* [Unsketch](primer-sensorcontrol-class.md#SensorControl::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-sensorcontrol-class.md#SensorControl::ViewParameters)()
* [Warning](primer-sensorcontrol-class.md#SensorControl::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-sensorcontrol-class.md#SensorControl::Xrefs)()
* [toString](primer-sensorcontrol-class.md#SensorControl::toString)()

## SensorControl properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| cntlid | integer | [SensorControl](primer-sensorcontrol-class.md) number. The [label](primer-sensorcontrol-class.md#label) property is an alternative name for this. |
| defcv | real/string | Default curve value when a curve is not active for TYPE = CURVE only. If DEFCRV = "LASTSTEP", the curve value right before the curve is turned off becomes the default curve value. |
| estyp | string | Element Set Type to be controlled. Can be "BEAM", "DISC", "SHELL", "SOLID", "TSHELL". |
| exists (read only) | logical | true if \*SENSOR\_CONTROL exists, false if referred to but not defined. |
| include | integer | The [Include](primer-include-class.md) file number that the \*SENSOR\_CONTROL is in. |
| initstt | string | Initial status. Can be "On" or "Off". |
| label | integer | [SensorControl](primer-sensorcontrol-class.md) number. The [cntlid](primer-sensorcontrol-class.md#cntlid) property is an alternative name for this. |
| model (read only) | integer | The [Model](primer-model-class.md) number that the \*SENSOR\_CONTROL is in. |
| nrep | integer | Number of repeat of cycle of switches. |
| swit1 | integer | ID of 1st switch. |
| swit2 | integer | ID of 2nd switch. |
| swit3 | integer | ID of 3rd switch. |
| swit4 | integer | ID of 4th switch. |
| swit5 | integer | ID of 5th switch. |
| swit6 | integer | ID of 6th switch. |
| swit7 | integer | ID of 7th switch. |
| timeoff | integer | Flag for offset of time in curve. |
| timeoff/idiscl | integer | Flag for offset of time in curve./Flag for the reference length of the discrete element |
| type | string | Entity to be controlled. Can be "AIRBAG", "BAGVENTPOP", "BELTPRET", "BELTRETRA", "BELTSLIP", "CONTACT", "CONTACT2D", "CNRB", "DEF2RIG", "DISC-ELE", "DISC-ELES", "ELESET", "FUNCTION", "JOINT", "JOINTSTIFF", "LOADTHM", "M PRESSURE", "RWALL", "SPC", "SPOTWELD". |
| typeid | integer | ID of entity to be controlled if type is not FUNCTION or input value for FUNCTION. |

| Detailed Description<br>The SensorControl class allows you to create, modify, edit and manipulate \*SENSOR\_CONTROL.<br>See the documentation below for more details. |
| --- |

| Constructor
new SensorControl(Model*[[Model](primer-model-class.md)]*, Sensor control ID*[integer]*, Type*[string]*, Type ID (optional)*[integer]*, estyp (optional)*[string]*)

Description<br>Create a new [SensorControl](primer-sensorcontrol-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that \*SENSOR\_CONTROL will be created in

* Sensor control ID (integer)
 
[SensorControl](primer-sensorcontrol-class.md) id.

* Type (string)
 
Entity type to be controlled. Can be "AIRBAG", "BAGVENTPOP", "BELTPRET", "BELTRETRA", "BELTSLIP", "CONTACT", "CONTACT2D", "DEF2RIG", "CURVE", "DISC-ELE", "DISC-ELES", "ELESET", "FUNCTION", "JOINT", "JOINTSTIFF", "M PRESSURE", "RWALL", "SPC", "SPOTWELD".

* Type ID (optional) (integer)
 
ID of entity to be controlled if type is not FUNCTION or input value for FUNCTION.

* estyp (optional) (string)
 
Element Set Type to be controlled. Can be "BEAM", "DISC", "SHELL", "SOLID", "TSHELL". **Required only if Type argument is "ELESET"**.

| Returns
<br>[SensorControl](primer-sensorcontrol-class.md) object<br>
Return type
<br>SensorControl |
| --- |

| Example
<br>To create a new \*SENSOR\_CONTROL in model m with label 100 and type JOINT:<br>
```
var sc = new SensorControl(m, 100, "JOINT");
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a \*SENSOR\_CONTROL. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the \*SENSOR\_CONTROL

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the \*SENSOR\_CONTROL sc:<br>
```
sc.AssociateComment(c);
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
<br>To Browse \*SENSOR\_CONTROL sc:<br>
```
sc.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the \*SENSOR\_CONTROL. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the \*SENSOR\_CONTROL

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for \*SENSOR\_CONTROL sc:<br>
```
sc.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the \*SENSOR\_CONTROL. The target include of the copied \*SENSOR\_CONTROL can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>SensorControl object<br>
Return type
<br>SensorControl |
| --- |

| Example
<br>To copy \*SENSOR\_CONTROL sc into \*SENSOR\_CONTROL z:<br>
```
var z = sc.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a \*SENSOR\_CONTROL |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the \*SENSOR\_CONTROL will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>SensorControl object (or null if not made).<br>
Return type
<br>SensorControl |
| --- |

| Example
<br>To start creating a \*SENSOR\_CONTROL in model m:<br>
```
var sc = SensorControl.Create(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a \*SENSOR\_CONTROL. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the \*SENSOR\_CONTROL

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the \*SENSOR\_CONTROL sc:<br>
```
sc.DetachComment(c);
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
<br>To Edit \*SENSOR\_CONTROL sc:<br>
```
sc.Edit();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for \*SENSOR\_CONTROL. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for \*SENSOR\_CONTROL sc:<br>
```
sc.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first \*SENSOR\_CONTROL in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first \*SENSOR\_CONTROL in

| Returns
<br>SensorControl object (or null if there are no \*SENSOR\_CONTROLs in the model).<br>
Return type
<br>SensorControl |
| --- |

| Example
<br>To get the first \*SENSOR\_CONTROL in model m:<br>
```
var sc = SensorControl.First(m);
```
 |
| --- |

* * *

| FirstFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the first free \*SENSOR\_CONTROL label in the model. Also see [SensorControl.LastFreeLabel()](primer-sensorcontrol-class.md#SensorControl::LastFreeLabel), [SensorControl.NextFreeLabel()](primer-sensorcontrol-class.md#SensorControl::NextFreeLabel) and [Model.FirstFreeItemLabel()](primer-model-class.md#Model::FirstFreeItemLabel). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first free \*SENSOR\_CONTROL label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *First free in layer* in editing panels). If omitted the whole model will be used (Equivalent to *First free* in editing panels).

| Returns
<br>SensorControl label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the first free \*SENSOR\_CONTROL label in model m:<br>
```
var label = SensorControl.FirstFreeLabel(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the \*SENSOR\_CONTROLs in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all \*SENSOR\_CONTROLs will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the \*SENSOR\_CONTROLs

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the \*SENSOR\_CONTROLs with flag f in model m:<br>
```
SensorControl.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the \*SENSOR\_CONTROL is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the \*SENSOR\_CONTROL

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if \*SENSOR\_CONTROL sc has flag f set on it:<br>
```
if (sc.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each \*SENSOR\_CONTROL in the model.<br> **Note that ForEach has been designed to make looping over \*SENSOR\_CONTROLs as fast as possible and so has some limitations. Firstly, a single temporary SensorControl object is created and on each function call it is updated with the current \*SENSOR\_CONTROL data. This means that you should not try to store the SensorControl object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new \*SENSOR\_CONTROLs inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all \*SENSOR\_CONTROLs are in

* func (function)
 
Function to call for each \*SENSOR\_CONTROL

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the \*SENSOR\_CONTROLs in model m:<br>
```
SensorControl.ForEach(m, test);
function test(sc)
{
// sc is SensorControl object
}
```
<br><br>To call function test for all of the \*SENSOR\_CONTROLs in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
SensorControl.ForEach(m, test, data);
function test(sc, extra)
{
// sc is SensorControl object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of SensorControl objects or properties for all of the \*SENSOR\_CONTROLs in a model in PRIMER. If the optional property argument is not given then an array of SensorControl objects is returned. If the property argument is given, that property value for each \*SENSOR\_CONTROL is returned in the array instead of a SensorControl object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get \*SENSOR\_CONTROLs from

* property (optional) (string)
 
Name for property to get for all \*SENSOR\_CONTROLs in the model

| Returns
<br>Array of SensorControl objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of SensorControl objects for all of the \*SENSOR\_CONTROLs in model m:<br>
```
var a = SensorControl.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each \*SENSOR\_CONTROL in model m:<br>
```
var a = SensorControl.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a \*SENSOR\_CONTROL. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the \*SENSOR\_CONTROL sc:<br>
```
var comm_array = sc.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of SensorControl objects for all of the flagged \*SENSOR\_CONTROLs in a model in PRIMER If the optional property argument is not given then an array of SensorControl objects is returned. If the property argument is given, then that property value for each \*SENSOR\_CONTROL is returned in the array instead of a SensorControl object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get \*SENSOR\_CONTROLs from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the \*SENSOR\_CONTROLs that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged \*SENSOR\_CONTROLs in the model

| Returns
<br>Array of SensorControl objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of SensorControl objects for all of the \*SENSOR\_CONTROLs in model m flagged with f:<br>
```
var sc = SensorControl.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the \*SENSOR\_CONTROLs in model m flagged with f:<br>
```
var a = SensorControl.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the SensorControl object for a \*SENSOR\_CONTROL ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the \*SENSOR\_CONTROL in

* number (integer)
 
number of the \*SENSOR\_CONTROL you want the SensorControl object for

| Returns
<br>SensorControl object (or null if \*SENSOR\_CONTROL does not exist).<br>
Return type
<br>SensorControl |
| --- |

| Example
<br>To get the SensorControl object for \*SENSOR\_CONTROL 100 in model m<br>
```
var sc = SensorControl.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a SensorControl property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [SensorControl.ViewParameters()](primer-sensorcontrol-class.md#SensorControl::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
\*SENSOR\_CONTROL property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if SensorControl property sc.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (sc.GetParameter(sc.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if SensorControl property sc.example is a parameter by using the GetParameter method:<br>
```
if (sc.ViewParameters().GetParameter(sc.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this \*SENSOR\_CONTROL. **Note that a carriage return is not added**. See also [SensorControl.KeywordCards()](primer-sensorcontrol-class.md#SensorControl::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for SensorControl sc:<br>
```
var key = sc.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the \*SENSOR\_CONTROL. **Note that a carriage return is not added**. See also [SensorControl.Keyword()](primer-sensorcontrol-class.md#SensorControl::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for sensor control sc:<br>
```
var cards = sc.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last \*SENSOR\_CONTROL in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last \*SENSOR\_CONTROL in

| Returns
<br>SensorControl object (or null if there are no \*SENSOR\_CONTROLs in the model).<br>
Return type
<br>SensorControl |
| --- |

| Example
<br>To get the last \*SENSOR\_CONTROL in model m:<br>
```
var sc = SensorControl.Last(m);
```
 |
| --- |

* * *

| LastFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the last free \*SENSOR\_CONTROL label in the model. Also see [SensorControl.FirstFreeLabel()](primer-sensorcontrol-class.md#SensorControl::FirstFreeLabel), [SensorControl.NextFreeLabel()](primer-sensorcontrol-class.md#SensorControl::NextFreeLabel) and see [Model.LastFreeItemLabel()](primer-model-class.md#Model::LastFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last free \*SENSOR\_CONTROL label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest free in layer* in editing panels). If omitted the whole model will be used.

| Returns
<br>SensorControl label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the last free \*SENSOR\_CONTROL label in model m:<br>
```
var label = SensorControl.LastFreeLabel(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next \*SENSOR\_CONTROL in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>SensorControl object (or null if there are no more \*SENSOR\_CONTROLs in the model).<br>
Return type
<br>SensorControl |
| --- |

| Example
<br>To get the \*SENSOR\_CONTROL in model m after \*SENSOR\_CONTROL sc:<br>
```
var sc = sc.Next();
```
 |
| --- |

* * *

| NextFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the next free (highest+1) \*SENSOR\_CONTROL label in the model. Also see [SensorControl.FirstFreeLabel()](primer-sensorcontrol-class.md#SensorControl::FirstFreeLabel), [SensorControl.LastFreeLabel()](primer-sensorcontrol-class.md#SensorControl::LastFreeLabel) and [Model.NextFreeItemLabel()](primer-model-class.md#Model::NextFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get next free \*SENSOR\_CONTROL label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest+1 in layer* in editing panels). If omitted the whole model will be used (Equivalent to *Highest+1* in editing panels).

| Returns
<br>SensorControl label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the next free \*SENSOR\_CONTROL label in model m:<br>
```
var label = SensorControl.NextFreeLabel(m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous \*SENSOR\_CONTROL in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>SensorControl object (or null if there are no more \*SENSOR\_CONTROLs in the model).<br>
Return type
<br>SensorControl |
| --- |

| Example
<br>To get the \*SENSOR\_CONTROL in model m before \*SENSOR\_CONTROL sc:<br>
```
var sc = sc.Previous();
```
 |
| --- |

* * *

| RenumberAll(Model*[[Model](primer-model-class.md)]*, start*[integer]*) [static]
Description<br>Renumbers all of the \*SENSOR\_CONTROLs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all \*SENSOR\_CONTROLs will be renumbered in

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the \*SENSOR\_CONTROLs in model m, from 1000000:<br>
```
SensorControl.RenumberAll(m, 1000000);
```
 |
| --- |

* * *

| RenumberFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*) [static]
Description<br>Renumbers all of the flagged \*SENSOR\_CONTROLs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged \*SENSOR\_CONTROLs will be renumbered in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the \*SENSOR\_CONTROLs that you want to renumber

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the \*SENSOR\_CONTROLs in model m flagged with f, from 1000000:<br>
```
SensorControl.RenumberFlagged(m, f, 1000000);
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select \*SENSOR\_CONTROLs using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting \*SENSOR\_CONTROLs

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only \*SENSOR\_CONTROLs from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only \*SENSOR\_CONTROLs that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any \*SENSOR\_CONTROLs can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of \*SENSOR\_CONTROLs selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select \*SENSOR\_CONTROLs from model m, flagging those selected with flag f, giving the prompt 'Select \*SENSOR\_CONTROLs':<br>
```
SensorControl.Select(f, 'Select *SENSOR_CONTROLs', m);
```
<br><br>To select \*SENSOR\_CONTROLs, flagging those selected with flag f but limiting selection to \*SENSOR\_CONTROLs flagged with flag l, giving the prompt 'Select \*SENSOR\_CONTROLs':<br>
```
SensorControl.Select(f, 'Select *SENSOR_CONTROLs', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the \*SENSOR\_CONTROL. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the \*SENSOR\_CONTROL

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for \*SENSOR\_CONTROL sc:<br>
```
sc.SetFlag(f);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the \*SENSOR\_CONTROL. The \*SENSOR\_CONTROL will be sketched until you either call [SensorControl.Unsketch()](primer-sensorcontrol-class.md#SensorControl::Unsketch), [SensorControl.UnsketchAll()](primer-sensorcontrol-class.md#SensorControl::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the \*SENSOR\_CONTROL is sketched. If omitted redraw is true. If you want to sketch several \*SENSOR\_CONTROLs and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch \*SENSOR\_CONTROL sc:<br>
```
sc.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged \*SENSOR\_CONTROLs in the model. The \*SENSOR\_CONTROLs will be sketched until you either call [SensorControl.Unsketch()](primer-sensorcontrol-class.md#SensorControl::Unsketch), [SensorControl.UnsketchFlagged()](primer-sensorcontrol-class.md#SensorControl::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged \*SENSOR\_CONTROLs will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the \*SENSOR\_CONTROLs that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the \*SENSOR\_CONTROLs are sketched. If omitted redraw is true. If you want to sketch flagged \*SENSOR\_CONTROLs several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all \*SENSOR\_CONTROLs flagged with flag in model m:<br>
```
SensorControl.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of \*SENSOR\_CONTROLs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing \*SENSOR\_CONTROLs should be counted. If false or omitted
referenced but undefined \*SENSOR\_CONTROLs will also be included in the total.

| Returns
<br>number of \*SENSOR\_CONTROLs<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of \*SENSOR\_CONTROLs in model m:<br>
```
var total = SensorControl.Total(m);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the \*SENSOR\_CONTROLs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all \*SENSOR\_CONTROLs will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the \*SENSOR\_CONTROLs

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the \*SENSOR\_CONTROLs in model m:<br>
```
SensorControl.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the \*SENSOR\_CONTROL. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the \*SENSOR\_CONTROL is unsketched. If omitted redraw is true. If you want to unsketch several \*SENSOR\_CONTROLs and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch \*SENSOR\_CONTROL sc:<br>
```
sc.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all \*SENSOR\_CONTROLs. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all \*SENSOR\_CONTROLs will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the \*SENSOR\_CONTROLs are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all \*SENSOR\_CONTROLs in model m:<br>
```
SensorControl.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged \*SENSOR\_CONTROLs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all \*SENSOR\_CONTROLs will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the \*SENSOR\_CONTROLs that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the \*SENSOR\_CONTROLs are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all \*SENSOR\_CONTROLs flagged with flag in model m:<br>
```
SensorControl.UnsketchAll(m, flag);
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
<br>[SensorControl](primer-sensorcontrol-class.md) object.<br>
Return type
<br>SensorControl |
| --- |

| Example
<br>To check if SensorControl property sc.example is a parameter by using the [SensorControl.GetParameter()](primer-sensorcontrol-class.md#SensorControl::GetParameter) method:<br>
```
if (sc.ViewParameters().GetParameter(sc.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for \*SENSOR\_CONTROL. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for \*SENSOR\_CONTROL sc:<br>
```
sc.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this \*SENSOR\_CONTROL. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for \*SENSOR\_CONTROL sc:<br>
```
var xrefs = sc.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the sensor control data in keyword format. Note that this contains the keyword header and the keyword cards. See also [SensorControl.Keyword()](primer-sensorcontrol-class.md#SensorControl::Keyword) and [SensorControl.KeywordCards()](primer-sensorcontrol-class.md#SensorControl::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for sensor control sc in keyword format<br>
```
var str = sc.toString();
```
 |
| --- |

* * *