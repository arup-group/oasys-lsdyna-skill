# StressShell class

The StressShell class gives you access to define initial stress shell cards in PRIMER. [More...](primer-stressshell-class.md#StressShell_details)

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

* [First](primer-stressshell-class.md#StressShell::First)(Model*[[Model](primer-model-class.md)]*)
* [FlagAll](primer-stressshell-class.md#StressShell::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-stressshell-class.md#StressShell::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-stressshell-class.md#StressShell::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-stressshell-class.md#StressShell::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-stressshell-class.md#StressShell::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-stressshell-class.md#StressShell::Last)(Model*[[Model](primer-model-class.md)]*)
* [Pick](primer-stressshell-class.md#StressShell::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [Select](primer-stressshell-class.md#StressShell::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-stressshell-class.md#StressShell::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-stressshell-class.md#StressShell::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnflagAll](primer-stressshell-class.md#StressShell::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-stressshell-class.md#StressShell::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-stressshell-class.md#StressShell::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-stressshell-class.md#StressShell::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [ClearFlag](primer-stressshell-class.md#StressShell::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-stressshell-class.md#StressShell::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-stressshell-class.md#StressShell::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Error](primer-stressshell-class.md#StressShell::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-stressshell-class.md#StressShell::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-stressshell-class.md#StressShell::GetComments)()
* [GetHisvData](primer-stressshell-class.md#StressShell::GetHisvData_deprecated)() [deprecated]
* [GetIntegrationPoint](primer-stressshell-class.md#StressShell::GetIntegrationPoint)(index*[integer]*)
* [GetParameter](primer-stressshell-class.md#StressShell::GetParameter)(prop*[string]*)
* [GetStressData](primer-stressshell-class.md#StressShell::GetStressData_deprecated)() [deprecated]
* [GetTensrData](primer-stressshell-class.md#StressShell::GetTensrData_deprecated)() [deprecated]
* [GetThermalIntegrationPoint](primer-stressshell-class.md#StressShell::GetThermalIntegrationPoint)(index*[integer]*)
* [Keyword](primer-stressshell-class.md#StressShell::Keyword)()
* [KeywordCards](primer-stressshell-class.md#StressShell::KeywordCards)()
* [Next](primer-stressshell-class.md#StressShell::Next)()
* [Previous](primer-stressshell-class.md#StressShell::Previous)()
* [SetFlag](primer-stressshell-class.md#StressShell::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [SetHisvData](primer-stressshell-class.md#StressShell::SetHisvData_deprecated)() [deprecated]
* [SetIntegrationPoint](primer-stressshell-class.md#StressShell::SetIntegrationPoint)(index*[integer]*, data*[Array of data]*)
* [SetStressData](primer-stressshell-class.md#StressShell::SetStressData_deprecated)() [deprecated]
* [SetTensrData](primer-stressshell-class.md#StressShell::SetTensrData_deprecated)() [deprecated]
* [SetThermalIntegrationPoint](primer-stressshell-class.md#StressShell::SetThermalIntegrationPoint)(index*[integer]*, data*[Array of data]*)
* [Sketch](primer-stressshell-class.md#StressShell::Sketch)(redraw (optional)*[boolean]*)
* [Unsketch](primer-stressshell-class.md#StressShell::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-stressshell-class.md#StressShell::ViewParameters)()
* [Warning](primer-stressshell-class.md#StressShell::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-stressshell-class.md#StressShell::Xrefs)()
* [toString](primer-stressshell-class.md#StressShell::toString)()

## StressShell constants

| **Name** | **Description** |
| --- | --- |
| StressShell.SET | Initial is \*INITIAL\_STRESS\_SHELL\_SET. |
| StressShell.SHELL | Initial is \*INITIAL\_STRESS\_SHELL. |

## StressShell properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| eid | integer | [Shell](primer-shell-class.md) Element ID or shell set ID |
| exists (read only) | logical | true if initial stress shell exists, false if referred to but not defined. |
| include | integer | The [Include](primer-include-class.md) file number that the initial stress shell is in. |
| large | logical | true if large format, false otherwise |
| model (read only) | integer | The [Model](primer-model-class.md) number that the initial stress shell is in. |
| nhisv | integer | Number of additional history variables |
| nplane | integer | Number of in plane integration points being output |
| ntensr | integer | Number of components of tensor data taken from the element history variables stored |
| nthhsv | integer | Number of thermal history variables per thermal integration point |
| nthick | integer | Number of integration points through the thickness |
| nthint | integer | Number of thermal integration points |
| type | constant | The Intial stress shell type. Can be [StressShell.SHELL](primer-stressshell-class.md#StressShell.SHELL) or [StressShell.SET](primer-stressshell-class.md#StressShell.SET). |

| Detailed Description<br>The StressShell class allows you to create, modify, edit and manipulate stress\_shell cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new StressShell(Model*[[Model](primer-model-class.md)]*, type*[constant]*, eid*[integer]*, nplane*[integer]*, nthick*[integer]*, nhisv*[integer]*, ntensr*[integer]*)

Description<br>Create a new [StressShell](primer-stressshell-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that stress\_shell will be created in

* type (constant)
 
Specify the type of initial stress shell (Can be [StressShell.SHELL](primer-stressshell-class.md#StressShell.SHELL) or [StressShell.SET](primer-stressshell-class.md#StressShell.SET))

* eid (integer)
 
[Shell](primer-shell-class.md) Element ID or shell set ID

* nplane (integer)
 
Number of in plane integration points being output

* nthick (integer)
 
Number of integration points through the thickness

* nhisv (integer)
 
Number of additional history variables

* ntensr (integer)
 
Number of components of tensor data taken from the element history variables stored

| Returns
<br>[StressShell](primer-stressshell-class.md) object<br>
Return type
<br>StressShell |
| --- |

| Example
<br>To create a new stress\_shell in model m, of type SET<br>
```
var s = new StressShell(m, StressShell.SET, 1, 3, 0, 0);
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a initial stress shell. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the initial stress shell

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the initial stress shell iss:<br>
```
iss.AssociateComment(c);
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the initial stress shell. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the initial stress shell

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for initial stress shell iss:<br>
```
iss.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the initial stress shell. The target include of the copied initial stress shell can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>StressShell object<br>
Return type
<br>StressShell |
| --- |

| Example
<br>To copy initial stress shell iss into initial stress shell z:<br>
```
var z = iss.Copy();
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a initial stress shell. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the initial stress shell

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the initial stress shell iss:<br>
```
iss.DetachComment(c);
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for initial stress shell. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for initial stress shell iss:<br>
```
iss.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first initial stress shell in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first initial stress shell in

| Returns
<br>StressShell object (or null if there are no initial stress shells in the model).<br>
Return type
<br>StressShell |
| --- |

| Example
<br>To get the first initial stress shell in model m:<br>
```
var iss = StressShell.First(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the initial stress shells in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all initial stress shells will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the initial stress shells

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the initial stress shells with flag f in model m:<br>
```
StressShell.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the initial stress shell is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the initial stress shell

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if initial stress shell iss has flag f set on it:<br>
```
if (iss.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each initial stress shell in the model.<br> **Note that ForEach has been designed to make looping over initial stress shells as fast as possible and so has some limitations. Firstly, a single temporary StressShell object is created and on each function call it is updated with the current initial stress shell data. This means that you should not try to store the StressShell object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new initial stress shells inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all initial stress shells are in

* func (function)
 
Function to call for each initial stress shell

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the initial stress shells in model m:<br>
```
StressShell.ForEach(m, test);
function test(iss)
{
// iss is StressShell object
}
```
<br><br>To call function test for all of the initial stress shells in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
StressShell.ForEach(m, test, data);
function test(iss, extra)
{
// iss is StressShell object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of StressShell objects or properties for all of the initial stress shells in a model in PRIMER. If the optional property argument is not given then an array of StressShell objects is returned. If the property argument is given, that property value for each initial stress shell is returned in the array instead of a StressShell object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get initial stress shells from

* property (optional) (string)
 
Name for property to get for all initial stress shells in the model

| Returns
<br>Array of StressShell objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of StressShell objects for all of the initial stress shells in model m:<br>
```
var a = StressShell.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each initial stress shell in model m:<br>
```
var a = StressShell.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a initial stress shell. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the initial stress shell iss:<br>
```
var comm_array = iss.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of StressShell objects for all of the flagged initial stress shells in a model in PRIMER If the optional property argument is not given then an array of StressShell objects is returned. If the property argument is given, then that property value for each initial stress shell is returned in the array instead of a StressShell object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get initial stress shells from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the initial stress shells that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged initial stress shells in the model

| Returns
<br>Array of StressShell objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of StressShell objects for all of the initial stress shells in model m flagged with f:<br>
```
var iss = StressShell.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the initial stress shells in model m flagged with f:<br>
```
var a = StressShell.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the StressShell object for a initial stress shell ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the initial stress shell in

* number (integer)
 
number of the initial stress shell you want the StressShell object for

| Returns
<br>StressShell object (or null if initial stress shell does not exist).<br>
Return type
<br>StressShell |
| --- |

| Example
<br>To get the StressShell object for initial stress shell 100 in model m<br>
```
var iss = StressShell.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetHisvData() [deprecated]
<br>This function is deprecated in version 11.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>
Description<br>Please use [StressShell.GetIntegrationPoint()](primer-stressshell-class.md#StressShell::GetIntegrationPoint) instead. |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

|  |
| --- |

* * *

| GetIntegrationPoint(index*[integer]*)

Description<br>Returns the data for a specific integration point as an array. For each integration point there will be 8 + [nhisv](primer-stressshell-class.md#nhisv) + (6 x [ntensr](primer-stressshell-class.md#ntensr)) values. There are [nplane](primer-stressshell-class.md#nplane) x [nthick](primer-stressshell-class.md#nthick) integration points. |
| --- |

#### Arguments

* index (integer)
 
Index you want the integration point data for. **Note that indices start at 0**.

| Returns
<br>An array containing the integration point data.<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the data for the 3rd integration point for initial stress shell iss:<br>
```
var data = iss.GetIntegrationPoint(2);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a StressShell property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [StressShell.ViewParameters()](primer-stressshell-class.md#StressShell::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
initial stress shell property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if StressShell property iss.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (iss.GetParameter(iss.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if StressShell property iss.example is a parameter by using the GetParameter method:<br>
```
if (iss.ViewParameters().GetParameter(iss.example) ) do_something...
```
 |
| --- |

* * *

| GetStressData() [deprecated]
<br>This function is deprecated in version 11.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>
Description<br>Please use [StressShell.GetIntegrationPoint()](primer-stressshell-class.md#StressShell::GetIntegrationPoint) instead. |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

|  |
| --- |

* * *

| GetTensrData() [deprecated]
<br>This function is deprecated in version 11.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>
Description<br>Please use [StressShell.GetIntegrationPoint()](primer-stressshell-class.md#StressShell::GetIntegrationPoint) instead. |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

|  |
| --- |

* * *

| GetThermalIntegrationPoint(index*[integer]*)

Description<br>Returns the thermal data for a specific integration point as an array. For each integration point there will be [nthhsv](primer-stressshell-class.md#nthhsv) values. There are [nthint](primer-stressshell-class.md#nthint) integration points. |
| --- |

#### Arguments

* index (integer)
 
Index you want the integration point data for. **Note that indices start at 0**.

| Returns
<br>An array containing the integration point data.<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the data for the 3rd thermal integration point for initial stress shell iss:<br>
```
var data = iss.GetThermalIntegrationPoint(2);
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this initial stress shell (\*INITIAL\_STRESS\_SHELL). **Note that a carriage return is not added**. See also [StressShell.KeywordCards()](primer-stressshell-class.md#StressShell::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for stress\_shell i:<br>
```
var key = i.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the initial stress shell. **Note that a carriage return is not added**. See also [StressShell.Keyword()](primer-stressshell-class.md#StressShell::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for stress\_shell i:<br>
```
var cards = i.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last initial stress shell in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last initial stress shell in

| Returns
<br>StressShell object (or null if there are no initial stress shells in the model).<br>
Return type
<br>StressShell |
| --- |

| Example
<br>To get the last initial stress shell in model m:<br>
```
var iss = StressShell.Last(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next initial stress shell in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>StressShell object (or null if there are no more initial stress shells in the model).<br>
Return type
<br>StressShell |
| --- |

| Example
<br>To get the initial stress shell in model m after initial stress shell iss:<br>
```
var iss = iss.Next();
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a initial stress shell. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only initial stress shells from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only initial stress shells that are flagged with *limit* can be selected. If omitted, or null, any initial stress shells from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[StressShell](primer-stressshell-class.md) object (or null if not picked)<br>
Return type
<br>StressShell |
| --- |

| Example
<br>To pick a initial stress shell from model m giving the prompt 'Pick initial stress shell from screen':<br>
```
var iss = StressShell.Pick('Pick initial stress shell from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous initial stress shell in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>StressShell object (or null if there are no more initial stress shells in the model).<br>
Return type
<br>StressShell |
| --- |

| Example
<br>To get the initial stress shell in model m before initial stress shell iss:<br>
```
var iss = iss.Previous();
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select initial stress shells using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting initial stress shells

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only initial stress shells from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only initial stress shells that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any initial stress shells can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of initial stress shells selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select initial stress shells from model m, flagging those selected with flag f, giving the prompt 'Select initial stress shells':<br>
```
StressShell.Select(f, 'Select initial stress shells', m);
```
<br><br>To select initial stress shells, flagging those selected with flag f but limiting selection to initial stress shells flagged with flag l, giving the prompt 'Select initial stress shells':<br>
```
StressShell.Select(f, 'Select initial stress shells', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the initial stress shell. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the initial stress shell

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for initial stress shell iss:<br>
```
iss.SetFlag(f);
```
 |
| --- |

* * *

| SetHisvData() [deprecated]
<br>This function is deprecated in version 11.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>
Description<br>Please use [StressShell.SetIntegrationPoint()](primer-stressshell-class.md#StressShell::SetIntegrationPoint) instead. |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

|  |
| --- |

* * *

| SetIntegrationPoint(index*[integer]*, data*[Array of data]*)

Description<br>Set the data for a specific integration point. For each integration point there will be 8 + [nhisv](primer-stressshell-class.md#nhisv) + (6 x [ntensr](primer-stressshell-class.md#ntensr)) values. There are [nplane](primer-stressshell-class.md#nplane) x [nthick](primer-stressshell-class.md#nthick) integration points. |
| --- |

#### Arguments

* index (integer)
 
Index you want the integration point data for. **Note that indices start at 0**.

* data (Array of data)
 
Array containing the integration point data. The array length should be 8 + [nhisv](primer-stressshell-class.md#nhisv) + (6 x [ntensr](primer-stressshell-class.md#ntensr)).

| Returns
<br>No return value. |
| --- |

| Example
<br>To set the 3rd integration point data for initial stress shell iss to the values in array adata:<br>
```
iss.SetIntegrationPoint(2, adata);
```
 |
| --- |

* * *

| SetStressData() [deprecated]
<br>This function is deprecated in version 11.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>
Description<br>Please use [StressShell.SetIntegrationPoint()](primer-stressshell-class.md#StressShell::SetIntegrationPoint) instead. |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

|  |
| --- |

* * *

| SetTensrData() [deprecated]
<br>This function is deprecated in version 11.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>
Description<br>Please use [StressShell.SetIntegrationPoint()](primer-stressshell-class.md#StressShell::SetIntegrationPoint) instead. |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

|  |
| --- |

* * *

| SetThermalIntegrationPoint(index*[integer]*, data*[Array of data]*)

Description<br>Set the thermal data for a specific integration point. For each integration point there will be [nthhsv](primer-stressshell-class.md#nthhsv) values. There are [nthint](primer-stressshell-class.md#nthint) thermal integration points. |
| --- |

#### Arguments

* index (integer)
 
Index you want the thermal integration point data for. **Note that indices start at 0**.

* data (Array of data)
 
Array containing the thermal integration point data. The array length should be [nthhsv](primer-stressshell-class.md#nthhsv).

| Returns
<br>No return value. |
| --- |

| Example
<br>To set the 3rd thermal integration point data for initial stress shell iss to the values in array adata:<br>
```
iss.SetThermalIntegrationPoint(2, adata);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the initial stress shell. The initial stress shell will be sketched until you either call [StressShell.Unsketch()](primer-stressshell-class.md#StressShell::Unsketch), [StressShell.UnsketchAll()](primer-stressshell-class.md#StressShell::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the initial stress shell is sketched. If omitted redraw is true. If you want to sketch several initial stress shells and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch initial stress shell iss:<br>
```
iss.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged initial stress shells in the model. The initial stress shells will be sketched until you either call [StressShell.Unsketch()](primer-stressshell-class.md#StressShell::Unsketch), [StressShell.UnsketchFlagged()](primer-stressshell-class.md#StressShell::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged initial stress shells will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the initial stress shells that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the initial stress shells are sketched. If omitted redraw is true. If you want to sketch flagged initial stress shells several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all initial stress shells flagged with flag in model m:<br>
```
StressShell.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of initial stress shells in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing initial stress shells should be counted. If false or omitted
referenced but undefined initial stress shells will also be included in the total.

| Returns
<br>number of initial stress shells<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of initial stress shells in model m:<br>
```
var total = StressShell.Total(m);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the initial stress shells in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all initial stress shells will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the initial stress shells

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the initial stress shells in model m:<br>
```
StressShell.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the initial stress shell. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the initial stress shell is unsketched. If omitted redraw is true. If you want to unsketch several initial stress shells and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch initial stress shell iss:<br>
```
iss.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all initial stress shells. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all initial stress shells will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the initial stress shells are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all initial stress shells in model m:<br>
```
StressShell.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged initial stress shells in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all initial stress shells will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the initial stress shells that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the initial stress shells are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all initial stress shells flagged with flag in model m:<br>
```
StressShell.UnsketchAll(m, flag);
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
<br>[StressShell](primer-stressshell-class.md) object.<br>
Return type
<br>StressShell |
| --- |

| Example
<br>To check if StressShell property iss.example is a parameter by using the [StressShell.GetParameter()](primer-stressshell-class.md#StressShell::GetParameter) method:<br>
```
if (iss.ViewParameters().GetParameter(iss.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for initial stress shell. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for initial stress shell iss:<br>
```
iss.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this initial stress shell. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for initial stress shell iss:<br>
```
var xrefs = iss.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the initial stress shell data in keyword format. Note that this contains the keyword header and the keyword cards. See also [StressShell.Keyword()](primer-stressshell-class.md#StressShell::Keyword) and [StressShell.KeywordCards()](primer-stressshell-class.md#StressShell::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for stress\_shell i in keyword format<br>
```
var s = i.toString();
```
 |
| --- |

* * *