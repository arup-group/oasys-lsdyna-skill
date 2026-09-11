# SensorSwitch class

The SensorSwitch class gives you access to \*SENSOR\_SWITCH keyword in PRIMER. [More...](primer-sensorswitch-class.md#SensorSwitch_details)

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

* [Create](primer-sensorswitch-class.md#SensorSwitch::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [First](primer-sensorswitch-class.md#SensorSwitch::First)(Model*[[Model](primer-model-class.md)]*)
* [FirstFreeLabel](primer-sensorswitch-class.md#SensorSwitch::FirstFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [FlagAll](primer-sensorswitch-class.md#SensorSwitch::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-sensorswitch-class.md#SensorSwitch::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-sensorswitch-class.md#SensorSwitch::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-sensorswitch-class.md#SensorSwitch::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-sensorswitch-class.md#SensorSwitch::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-sensorswitch-class.md#SensorSwitch::Last)(Model*[[Model](primer-model-class.md)]*)
* [LastFreeLabel](primer-sensorswitch-class.md#SensorSwitch::LastFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [NextFreeLabel](primer-sensorswitch-class.md#SensorSwitch::NextFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [RenumberAll](primer-sensorswitch-class.md#SensorSwitch::RenumberAll)(Model*[[Model](primer-model-class.md)]*, start*[integer]*)
* [RenumberFlagged](primer-sensorswitch-class.md#SensorSwitch::RenumberFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*)
* [Select](primer-sensorswitch-class.md#SensorSwitch::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [Total](primer-sensorswitch-class.md#SensorSwitch::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnflagAll](primer-sensorswitch-class.md#SensorSwitch::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

## Member functions

* [AssociateComment](primer-sensorswitch-class.md#SensorSwitch::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Browse](primer-sensorswitch-class.md#SensorSwitch::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-sensorswitch-class.md#SensorSwitch::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-sensorswitch-class.md#SensorSwitch::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-sensorswitch-class.md#SensorSwitch::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-sensorswitch-class.md#SensorSwitch::Edit)(modal (optional)*[boolean]*)
* [Error](primer-sensorswitch-class.md#SensorSwitch::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-sensorswitch-class.md#SensorSwitch::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-sensorswitch-class.md#SensorSwitch::GetComments)()
* [GetParameter](primer-sensorswitch-class.md#SensorSwitch::GetParameter)(prop*[string]*)
* [GetRow](primer-sensorswitch-class.md#SensorSwitch::GetRow)(row*[integer]*)
* [GetSwitch](primer-sensorswitch-class.md#SensorSwitch::GetSwitch)(row*[integer]*)
* [Keyword](primer-sensorswitch-class.md#SensorSwitch::Keyword)()
* [KeywordCards](primer-sensorswitch-class.md#SensorSwitch::KeywordCards)()
* [Next](primer-sensorswitch-class.md#SensorSwitch::Next)()
* [Previous](primer-sensorswitch-class.md#SensorSwitch::Previous)()
* [RemoveRow](primer-sensorswitch-class.md#SensorSwitch::RemoveRow)(row*[integer]*)
* [RemoveSwitch](primer-sensorswitch-class.md#SensorSwitch::RemoveSwitch)(row*[integer]*)
* [SetFlag](primer-sensorswitch-class.md#SensorSwitch::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [SetRow](primer-sensorswitch-class.md#SensorSwitch::SetRow)(row*[integer]*, data*[Array of data]*)
* [SetSwitch](primer-sensorswitch-class.md#SensorSwitch::SetSwitch)(index*[integer]*, data*[object]*)
* [ViewParameters](primer-sensorswitch-class.md#SensorSwitch::ViewParameters)()
* [Warning](primer-sensorswitch-class.md#SensorSwitch::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-sensorswitch-class.md#SensorSwitch::Xrefs)()
* [toString](primer-sensorswitch-class.md#SensorSwitch::toString)()

## SensorSwitch constants

| **Name** | **Description** |
| --- | --- |
| SensorSwitch.SWITCH | Sensor switch is \*SENSOR\_SWITCH. |
| SensorSwitch.SWITCH\_CALC\_LOGIC | Sensor switch is \*SENSOR\_SWITCH\_CALC-LOGIC. |
| SensorSwitch.SWITCH\_SHELL\_TO\_VENT | Sensor switch is \*SENSOR\_SWITCH\_SHELL\_TO\_VENT. |

## SensorSwitch properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| abid | integer | Airbag ID. |
| amax | real | Maximum allowable area for failed vent surface area (VA). |
| c23 | integer/real | Vent coefficient if positive or user defined load curve ID if negative. |
| exists (read only) | logical | true if \*SENSOR\_SWITCH exists, false if referred to but not defined. |
| filtrid | integer | Filter ID. |
| id | integer | Part set ID or Part ID. |
| id\_flag | logical | Turns \_TITLE/\_ID ON or OFF. Used only for [SensorSwitch.SWITCH_SHELL_TO_VENT.](primer-sensorswitch-class.md#SensorSwitch.SWITCH_SHELL_TO_VENT) |
| include | integer | The [Include](primer-include-class.md) file number that the \*SENSOR\_SWITCH is in. |
| itype | integer | 0 for Part, 1 for Part Set. |
| label | integer | [SensorSwitch](primer-sensorswitch-class.md) number. The [switid](primer-sensorswitch-class.md#switid) property is an alternative name for this. |
| logic | string | Logic operator. |
| model (read only) | integer | The [Model](primer-model-class.md) number that the \*SENSOR\_SWITCH is in. |
| nrow | integer | Number of Shell Fail Time Cards. |
| nswit (read only) | integer | Number of sensor switch IDs defined. IDs can be positive for "AND", negative ID for "OR". Applicable to [SensorSwitch.SWITCH_CALC_LOGIC](primer-sensorswitch-class.md#SensorSwitch.SWITCH_CALC_LOGIC). |
| option | constant | SENSOR\_SWITCH suffix. Can be [SensorSwitch.SWITCH](primer-sensorswitch-class.md#SensorSwitch.SWITCH), [SensorSwitch.SWITCH_CALC_LOGIC](primer-sensorswitch-class.md#SensorSwitch.SWITCH_CALC_LOGIC) or [SensorSwitch.SWITCH_SHELL_TO_VENT](primer-sensorswitch-class.md#SensorSwitch.SWITCH_SHELL_TO_VENT). |
| sensid | integer | ID of the sensor whose value will be compared. |
| switid | integer | [SensorSwitch](primer-sensorswitch-class.md) number. The [label](primer-sensorswitch-class.md#label) property is an alternative name for this. |
| timwin | real | Trigger status change when the value given by the sensor is less/greater (depending on logic) than value for duration defined by timwin. |
| title | string | [SensorSwitch](primer-sensorswitch-class.md) title. Used only for [SensorSwitch.SWITCH_SHELL_TO_VENT.](primer-sensorswitch-class.md#SensorSwitch.SWITCH_SHELL_TO_VENT) |
| type | string | This property is deprecated in version R9.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Type used for sensor. Can either be "SENSOR" or "TIME" [deprecated] |
| value | real | Critical value. |

| Detailed Description<br>The SensorSwitch class allows you to create, modify, edit and manipulate \*SENSOR\_SWITCH.<br>See the documentation below for more details. |
| --- |

| Constructor
new SensorSwitch(Option*[constant]*, Model*[[Model](primer-model-class.md)]*, Switch ID*[integer]*)

Description<br>Create a new [SensorSwitch](primer-sensorswitch-class.md) object. |
| --- |

#### Arguments

* Option (constant)
 
SENSOR\_SWITCH suffix. Can be [SensorSwitch.SWITCH](primer-sensorswitch-class.md#SensorSwitch.SWITCH), [SensorSwitch.SWITCH_CALC_LOGIC](primer-sensorswitch-class.md#SensorSwitch.SWITCH_CALC_LOGIC) or [SensorSwitch.SWITCH_SHELL_TO_VENT](primer-sensorswitch-class.md#SensorSwitch.SWITCH_SHELL_TO_VENT).

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that \*SENSOR\_SWITCH will be created in

* Switch ID (integer)
 
[SensorSwitch](primer-sensorswitch-class.md) id. This is required for the [SensorSwitch.SWITCH](primer-sensorswitch-class.md#SensorSwitch.SWITCH) and [SensorSwitch.SWITCH_CALC_LOGIC](primer-sensorswitch-class.md#SensorSwitch.SWITCH_CALC_LOGIC) options and ignored for [SensorSwitch.SWITCH_SHELL_TO_VENT](primer-sensorswitch-class.md#SensorSwitch.SWITCH_SHELL_TO_VENT).

| Returns
<br>[SensorSwitch](primer-sensorswitch-class.md) object<br>
Return type
<br>SensorSwitch |
| --- |

| Example
<br>To create a new \*SENSOR\_SWITCH in model m with label 100:<br>
```
var sc = new SensorSwitch(SensorSwitch.SWITCH, m, 100);
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a \*SENSOR\_SWITCH. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the \*SENSOR\_SWITCH

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the \*SENSOR\_SWITCH ss:<br>
```
ss.AssociateComment(c);
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
<br>To Browse \*SENSOR\_SWITCH ss:<br>
```
ss.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the \*SENSOR\_SWITCH. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the \*SENSOR\_SWITCH

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for \*SENSOR\_SWITCH ss:<br>
```
ss.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the \*SENSOR\_SWITCH. The target include of the copied \*SENSOR\_SWITCH can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>SensorSwitch object<br>
Return type
<br>SensorSwitch |
| --- |

| Example
<br>To copy \*SENSOR\_SWITCH ss into \*SENSOR\_SWITCH z:<br>
```
var z = ss.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a \*SENSOR\_SWITCH |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the \*SENSOR\_SWITCH will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>SensorSwitch object (or null if not made).<br>
Return type
<br>SensorSwitch |
| --- |

| Example
<br>To start creating a \*SENSOR\_SWITCH in model m:<br>
```
var ss = SensorSwitch.Create(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a \*SENSOR\_SWITCH. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the \*SENSOR\_SWITCH

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the \*SENSOR\_SWITCH ss:<br>
```
ss.DetachComment(c);
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
<br>To Edit \*SENSOR\_SWITCH ss:<br>
```
ss.Edit();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for \*SENSOR\_SWITCH. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for \*SENSOR\_SWITCH ss:<br>
```
ss.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first \*SENSOR\_SWITCH in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first \*SENSOR\_SWITCH in

| Returns
<br>SensorSwitch object (or null if there are no \*SENSOR\_SWITCHs in the model).<br>
Return type
<br>SensorSwitch |
| --- |

| Example
<br>To get the first \*SENSOR\_SWITCH in model m:<br>
```
var ss = SensorSwitch.First(m);
```
 |
| --- |

* * *

| FirstFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the first free \*SENSOR\_SWITCH label in the model. Also see [SensorSwitch.LastFreeLabel()](primer-sensorswitch-class.md#SensorSwitch::LastFreeLabel), [SensorSwitch.NextFreeLabel()](primer-sensorswitch-class.md#SensorSwitch::NextFreeLabel) and [Model.FirstFreeItemLabel()](primer-model-class.md#Model::FirstFreeItemLabel). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first free \*SENSOR\_SWITCH label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *First free in layer* in editing panels). If omitted the whole model will be used (Equivalent to *First free* in editing panels).

| Returns
<br>SensorSwitch label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the first free \*SENSOR\_SWITCH label in model m:<br>
```
var label = SensorSwitch.FirstFreeLabel(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the \*SENSOR\_SWITCHs in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all \*SENSOR\_SWITCHs will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the \*SENSOR\_SWITCHs

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the \*SENSOR\_SWITCHs with flag f in model m:<br>
```
SensorSwitch.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the \*SENSOR\_SWITCH is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the \*SENSOR\_SWITCH

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if \*SENSOR\_SWITCH ss has flag f set on it:<br>
```
if (ss.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each \*SENSOR\_SWITCH in the model.<br> **Note that ForEach has been designed to make looping over \*SENSOR\_SWITCHs as fast as possible and so has some limitations. Firstly, a single temporary SensorSwitch object is created and on each function call it is updated with the current \*SENSOR\_SWITCH data. This means that you should not try to store the SensorSwitch object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new \*SENSOR\_SWITCHs inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all \*SENSOR\_SWITCHs are in

* func (function)
 
Function to call for each \*SENSOR\_SWITCH

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the \*SENSOR\_SWITCHs in model m:<br>
```
SensorSwitch.ForEach(m, test);
function test(ss)
{
// ss is SensorSwitch object
}
```
<br><br>To call function test for all of the \*SENSOR\_SWITCHs in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
SensorSwitch.ForEach(m, test, data);
function test(ss, extra)
{
// ss is SensorSwitch object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of SensorSwitch objects or properties for all of the \*SENSOR\_SWITCHs in a model in PRIMER. If the optional property argument is not given then an array of SensorSwitch objects is returned. If the property argument is given, that property value for each \*SENSOR\_SWITCH is returned in the array instead of a SensorSwitch object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get \*SENSOR\_SWITCHs from

* property (optional) (string)
 
Name for property to get for all \*SENSOR\_SWITCHs in the model

| Returns
<br>Array of SensorSwitch objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of SensorSwitch objects for all of the \*SENSOR\_SWITCHs in model m:<br>
```
var a = SensorSwitch.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each \*SENSOR\_SWITCH in model m:<br>
```
var a = SensorSwitch.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a \*SENSOR\_SWITCH. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the \*SENSOR\_SWITCH ss:<br>
```
var comm_array = ss.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of SensorSwitch objects for all of the flagged \*SENSOR\_SWITCHs in a model in PRIMER If the optional property argument is not given then an array of SensorSwitch objects is returned. If the property argument is given, then that property value for each \*SENSOR\_SWITCH is returned in the array instead of a SensorSwitch object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get \*SENSOR\_SWITCHs from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the \*SENSOR\_SWITCHs that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged \*SENSOR\_SWITCHs in the model

| Returns
<br>Array of SensorSwitch objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of SensorSwitch objects for all of the \*SENSOR\_SWITCHs in model m flagged with f:<br>
```
var ss = SensorSwitch.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the \*SENSOR\_SWITCHs in model m flagged with f:<br>
```
var a = SensorSwitch.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the SensorSwitch object for a \*SENSOR\_SWITCH ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the \*SENSOR\_SWITCH in

* number (integer)
 
number of the \*SENSOR\_SWITCH you want the SensorSwitch object for

| Returns
<br>SensorSwitch object (or null if \*SENSOR\_SWITCH does not exist).<br>
Return type
<br>SensorSwitch |
| --- |

| Example
<br>To get the SensorSwitch object for \*SENSOR\_SWITCH 100 in model m<br>
```
var ss = SensorSwitch.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a SensorSwitch property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [SensorSwitch.ViewParameters()](primer-sensorswitch-class.md#SensorSwitch::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
\*SENSOR\_SWITCH property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if SensorSwitch property ss.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (ss.GetParameter(ss.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if SensorSwitch property ss.example is a parameter by using the GetParameter method:<br>
```
if (ss.ViewParameters().GetParameter(ss.example) ) do_something...
```
 |
| --- |

* * *

| GetRow(row*[integer]*)

Description<br>Returns the data for a row in the SENSOR\_SWITCH\_SHELL\_TO\_VENT. |
| --- |

#### Arguments

* row (integer)
 
The row you want the data for. **Note row indices start at 0**.

| Returns
<br>An array of numbers containing the row variables SSID, FTIME and C23V.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the data for the 2nd row in sensor switch ss:<br>
```
var data = ss.GetRow(1);
```
 |
| --- |

* * *

| GetSwitch(row*[integer]*)

Description<br>Returns switch ID information for \*SENSOR\_SWITCH\_CALC-LOGIC. |
| --- |

#### Arguments

* row (integer)
 
The row you want the data for. **Note row indices start at 0**.

| Returns
<br>Object containing sensor switch ID information.<br>
Return type
<br>Object |
| --- |

| Example
<br>To get the data for the 2nd switch in sensor switch ss:<br>
```
var data = ss.GetSwitch(1);
Message("Switch 2: " + data.swit);
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this \*SENSOR\_SWITCH. **Note that a carriage return is not added**. See also [SensorSwitch.KeywordCards()](primer-sensorswitch-class.md#SensorSwitch::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for SensorSwitch ss:<br>
```
var key = ss.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the \*SENSOR\_SWITCH. **Note that a carriage return is not added**. See also [SensorSwitch.Keyword()](primer-sensorswitch-class.md#SensorSwitch::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for sensor switch ss:<br>
```
var cards = ss.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last \*SENSOR\_SWITCH in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last \*SENSOR\_SWITCH in

| Returns
<br>SensorSwitch object (or null if there are no \*SENSOR\_SWITCHs in the model).<br>
Return type
<br>SensorSwitch |
| --- |

| Example
<br>To get the last \*SENSOR\_SWITCH in model m:<br>
```
var ss = SensorSwitch.Last(m);
```
 |
| --- |

* * *

| LastFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the last free \*SENSOR\_SWITCH label in the model. Also see [SensorSwitch.FirstFreeLabel()](primer-sensorswitch-class.md#SensorSwitch::FirstFreeLabel), [SensorSwitch.NextFreeLabel()](primer-sensorswitch-class.md#SensorSwitch::NextFreeLabel) and see [Model.LastFreeItemLabel()](primer-model-class.md#Model::LastFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last free \*SENSOR\_SWITCH label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest free in layer* in editing panels). If omitted the whole model will be used.

| Returns
<br>SensorSwitch label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the last free \*SENSOR\_SWITCH label in model m:<br>
```
var label = SensorSwitch.LastFreeLabel(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next \*SENSOR\_SWITCH in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>SensorSwitch object (or null if there are no more \*SENSOR\_SWITCHs in the model).<br>
Return type
<br>SensorSwitch |
| --- |

| Example
<br>To get the \*SENSOR\_SWITCH in model m after \*SENSOR\_SWITCH ss:<br>
```
var ss = ss.Next();
```
 |
| --- |

* * *

| NextFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the next free (highest+1) \*SENSOR\_SWITCH label in the model. Also see [SensorSwitch.FirstFreeLabel()](primer-sensorswitch-class.md#SensorSwitch::FirstFreeLabel), [SensorSwitch.LastFreeLabel()](primer-sensorswitch-class.md#SensorSwitch::LastFreeLabel) and [Model.NextFreeItemLabel()](primer-model-class.md#Model::NextFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get next free \*SENSOR\_SWITCH label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest+1 in layer* in editing panels). If omitted the whole model will be used (Equivalent to *Highest+1* in editing panels).

| Returns
<br>SensorSwitch label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the next free \*SENSOR\_SWITCH label in model m:<br>
```
var label = SensorSwitch.NextFreeLabel(m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous \*SENSOR\_SWITCH in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>SensorSwitch object (or null if there are no more \*SENSOR\_SWITCHs in the model).<br>
Return type
<br>SensorSwitch |
| --- |

| Example
<br>To get the \*SENSOR\_SWITCH in model m before \*SENSOR\_SWITCH ss:<br>
```
var ss = ss.Previous();
```
 |
| --- |

* * *

| RemoveRow(row*[integer]*)

Description<br>Removes the data for a row in \*SENSOR\_SWITCH\_SHELL\_TO\_VENT. |
| --- |

#### Arguments

* row (integer)
 
The row you want to remove the data for. **Note that row indices start at 0**.

| Returns
<br>No return value. |
| --- |

| Example
<br>To remove the second row of data for sensor switch ss:<br>
```
ss.RemoveRow(1);
```
 |
| --- |

* * *

| RemoveSwitch(row*[integer]*)

Description<br>Removes sensor switch ID from \*SENSOR\_SWITCH\_CALC-LOGIC. |
| --- |

#### Arguments

* row (integer)
 
The sensor switch ID that you want to remove. **Note that row indices start at 0**.

| Returns
<br>No return value. |
| --- |

| Example
<br>To remove the second sensor switch ID for sensor switch ss:<br>
```
ss.RemoveSwitch(1);
```
 |
| --- |

* * *

| RenumberAll(Model*[[Model](primer-model-class.md)]*, start*[integer]*) [static]
Description<br>Renumbers all of the \*SENSOR\_SWITCHs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all \*SENSOR\_SWITCHs will be renumbered in

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the \*SENSOR\_SWITCHs in model m, from 1000000:<br>
```
SensorSwitch.RenumberAll(m, 1000000);
```
 |
| --- |

* * *

| RenumberFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*) [static]
Description<br>Renumbers all of the flagged \*SENSOR\_SWITCHs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged \*SENSOR\_SWITCHs will be renumbered in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the \*SENSOR\_SWITCHs that you want to renumber

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the \*SENSOR\_SWITCHs in model m flagged with f, from 1000000:<br>
```
SensorSwitch.RenumberFlagged(m, f, 1000000);
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select \*SENSOR\_SWITCHs using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting \*SENSOR\_SWITCHs

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only \*SENSOR\_SWITCHs from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only \*SENSOR\_SWITCHs that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any \*SENSOR\_SWITCHs can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of \*SENSOR\_SWITCHs selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select \*SENSOR\_SWITCHs from model m, flagging those selected with flag f, giving the prompt 'Select \*SENSOR\_SWITCHs':<br>
```
SensorSwitch.Select(f, 'Select *SENSOR_SWITCHs', m);
```
<br><br>To select \*SENSOR\_SWITCHs, flagging those selected with flag f but limiting selection to \*SENSOR\_SWITCHs flagged with flag l, giving the prompt 'Select \*SENSOR\_SWITCHs':<br>
```
SensorSwitch.Select(f, 'Select *SENSOR_SWITCHs', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the \*SENSOR\_SWITCH. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the \*SENSOR\_SWITCH

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for \*SENSOR\_SWITCH ss:<br>
```
ss.SetFlag(f);
```
 |
| --- |

* * *

| SetRow(row*[integer]*, data*[Array of data]*)

Description<br>Sets the data for a row in \*SENSOR\_SWITCH\_SHELL\_TO\_VENT. |
| --- |

#### Arguments

* row (integer)
 
The row you want to set the data for. **Note that row indices start at 0**.

* data (Array of data)
 
An array containing the row variables SSID, FTIME and C23V.

| Returns
<br>No return value. |
| --- |

| Example
<br>To set the second row of data for sensor switch ss to be shell set list 11, time 12.0 and vent coefficient 0.7:<br>
```
var array = [11, 12.0, 0.7];
ss.SetRow(1, array);
```
<br>To append a new row of data (using the same array of values):<br>
```
ss.SetRow(ss.nrow, array);
```
 |
| --- |

* * *

| SetSwitch(index*[integer]*, data*[object]*)

Description<br>Specifies a sensor switch ID for a \*SENSOR\_SWITCH\_CALC-LOGIC. |
| --- |

#### Arguments

* index (integer)
 
The index of the \*SENSOR\_SWITCH\_CALC-LOGIC data to set. **Note that indices start at 0, not 1**.
 0 &lt;= index &lt;= [nswit](primer-sensorswitch-class.md#nswit)

* data (object)

Object containing sensor swith ID data. 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| swit | integer | Positive or negative sensor switch id. |

| Returns
<br>No return value. |
| --- |

| Example
<br>To set the value of -10 for sensor switch 5 (indices start with 0) for \*SENSOR\_SWITCH\_CALC-LOGIC s:<br>
```
var data = { swit: -10 };
s.SetSwitch(4, data);
```
<br>To append a new line of data (using the same example values):<br>
```
var data2 = {swit: -10};
s.SetSwitch(b.lines, data2);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of \*SENSOR\_SWITCHs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing \*SENSOR\_SWITCHs should be counted. If false or omitted
referenced but undefined \*SENSOR\_SWITCHs will also be included in the total.

| Returns
<br>number of \*SENSOR\_SWITCHs<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of \*SENSOR\_SWITCHs in model m:<br>
```
var total = SensorSwitch.Total(m);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the \*SENSOR\_SWITCHs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all \*SENSOR\_SWITCHs will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the \*SENSOR\_SWITCHs

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the \*SENSOR\_SWITCHs in model m:<br>
```
SensorSwitch.UnflagAll(m, f);
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
<br>[SensorSwitch](primer-sensorswitch-class.md) object.<br>
Return type
<br>SensorSwitch |
| --- |

| Example
<br>To check if SensorSwitch property ss.example is a parameter by using the [SensorSwitch.GetParameter()](primer-sensorswitch-class.md#SensorSwitch::GetParameter) method:<br>
```
if (ss.ViewParameters().GetParameter(ss.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for \*SENSOR\_SWITCH. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for \*SENSOR\_SWITCH ss:<br>
```
ss.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this \*SENSOR\_SWITCH. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for \*SENSOR\_SWITCH ss:<br>
```
var xrefs = ss.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the sensor switch data in keyword format. Note that this contains the keyword header and the keyword cards. See also [SensorSwitch.Keyword()](primer-sensorswitch-class.md#SensorSwitch::Keyword) and [SensorSwitch.KeywordCards()](primer-sensorswitch-class.md#SensorSwitch::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for sensor switch ss in keyword format<br>
```
var str = ss.toString();
```
 |
| --- |

* * *