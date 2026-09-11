# PrescribedAccelerometerRigid class

The PrescribedAccelerometerRigid class gives you access to define \*BOUNDARY\_PRESCRIBED\_ACCELEROMETER\_RIGID cards in PRIMER. [More...](primer-prescribedaccelerometerrigid-class.md#PrescribedAccelerometerRigid_details)

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

* [Create](primer-prescribedaccelerometerrigid-class.md#PrescribedAccelerometerRigid::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [First](primer-prescribedaccelerometerrigid-class.md#PrescribedAccelerometerRigid::First)(Model*[[Model](primer-model-class.md)]*)
* [FlagAll](primer-prescribedaccelerometerrigid-class.md#PrescribedAccelerometerRigid::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-prescribedaccelerometerrigid-class.md#PrescribedAccelerometerRigid::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-prescribedaccelerometerrigid-class.md#PrescribedAccelerometerRigid::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-prescribedaccelerometerrigid-class.md#PrescribedAccelerometerRigid::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-prescribedaccelerometerrigid-class.md#PrescribedAccelerometerRigid::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-prescribedaccelerometerrigid-class.md#PrescribedAccelerometerRigid::Last)(Model*[[Model](primer-model-class.md)]*)
* [Select](primer-prescribedaccelerometerrigid-class.md#PrescribedAccelerometerRigid::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [Total](primer-prescribedaccelerometerrigid-class.md#PrescribedAccelerometerRigid::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnflagAll](primer-prescribedaccelerometerrigid-class.md#PrescribedAccelerometerRigid::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

## Member functions

* [AssociateComment](primer-prescribedaccelerometerrigid-class.md#PrescribedAccelerometerRigid::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Browse](primer-prescribedaccelerometerrigid-class.md#PrescribedAccelerometerRigid::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-prescribedaccelerometerrigid-class.md#PrescribedAccelerometerRigid::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-prescribedaccelerometerrigid-class.md#PrescribedAccelerometerRigid::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-prescribedaccelerometerrigid-class.md#PrescribedAccelerometerRigid::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-prescribedaccelerometerrigid-class.md#PrescribedAccelerometerRigid::Edit)(modal (optional)*[boolean]*)
* [Error](primer-prescribedaccelerometerrigid-class.md#PrescribedAccelerometerRigid::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-prescribedaccelerometerrigid-class.md#PrescribedAccelerometerRigid::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-prescribedaccelerometerrigid-class.md#PrescribedAccelerometerRigid::GetComments)()
* [GetParameter](primer-prescribedaccelerometerrigid-class.md#PrescribedAccelerometerRigid::GetParameter)(prop*[string]*)
* [GetRow](primer-prescribedaccelerometerrigid-class.md#PrescribedAccelerometerRigid::GetRow)(row*[integer]*)
* [Keyword](primer-prescribedaccelerometerrigid-class.md#PrescribedAccelerometerRigid::Keyword)()
* [KeywordCards](primer-prescribedaccelerometerrigid-class.md#PrescribedAccelerometerRigid::KeywordCards)()
* [Next](primer-prescribedaccelerometerrigid-class.md#PrescribedAccelerometerRigid::Next)()
* [Previous](primer-prescribedaccelerometerrigid-class.md#PrescribedAccelerometerRigid::Previous)()
* [RemoveRow](primer-prescribedaccelerometerrigid-class.md#PrescribedAccelerometerRigid::RemoveRow)(row*[integer]*)
* [SetFlag](primer-prescribedaccelerometerrigid-class.md#PrescribedAccelerometerRigid::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [SetRow](primer-prescribedaccelerometerrigid-class.md#PrescribedAccelerometerRigid::SetRow)(row*[integer]*, data*[Array of data]*)
* [ViewParameters](primer-prescribedaccelerometerrigid-class.md#PrescribedAccelerometerRigid::ViewParameters)()
* [Warning](primer-prescribedaccelerometerrigid-class.md#PrescribedAccelerometerRigid::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-prescribedaccelerometerrigid-class.md#PrescribedAccelerometerRigid::Xrefs)()
* [toString](primer-prescribedaccelerometerrigid-class.md#PrescribedAccelerometerRigid::toString)()

## PrescribedAccelerometerRigid properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists (read only) | logical | true if prescribed accelerometer rigid exists, false if referred to but not defined. |
| include | integer | The [Include](primer-include-class.md) file number that the prescribed accelerometer rigid is in. |
| model (read only) | integer | The [Model](primer-model-class.md) number that the prescribed accelerometer rigid is in. |
| nrow (read only) | integer | Number of accelerometer cards. |
| pid | integer | Part ID for rigid body whose motion is prescribed. |
| solv | integer | Solver type: 1 for Gaussian elimination or 2 for linear regression. |

| Detailed Description<br>The PrescribedAccelerometerRigid class allows you to create, modify, edit and manipulate boundary prescribed accelerometer rigid cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new PrescribedAccelerometerRigid(Model*[[Model](primer-model-class.md)]*, pid*[integer]*, solv (optional)*[integer]*)

Description<br>Create a new [PrescribedAccelerometerRigid](primer-prescribedaccelerometerrigid-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that prescribed accelerometer rigid will be created in

* pid (integer)
 
Part ID for rigid body whose motion is prescribed.

* solv (optional) (integer)
 
Solver type

| Returns
<br>[PrescribedAccelerometerRigid](primer-prescribedaccelerometerrigid-class.md) object<br>
Return type
<br>PrescribedAccelerometerRigid |
| --- |

| Example
<br>To create a new prescribed accelerometer rigid in model m with part ID 10 and solver type 2 (linear regression):<br>
```
var par = new PrescribedAccelerometerRigid(m, 10, 2);
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a prescribed accelerometer rigid. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the prescribed accelerometer rigid

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the prescribed accelerometer rigid par:<br>
```
par.AssociateComment(c);
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
<br>To Browse prescribed accelerometer rigid par:<br>
```
par.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the prescribed accelerometer rigid. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the prescribed accelerometer rigid

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for prescribed accelerometer rigid par:<br>
```
par.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the prescribed accelerometer rigid. The target include of the copied prescribed accelerometer rigid can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>PrescribedAccelerometerRigid object<br>
Return type
<br>PrescribedAccelerometerRigid |
| --- |

| Example
<br>To copy prescribed accelerometer rigid par into prescribed accelerometer rigid z:<br>
```
var z = par.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a prescribed accelerometer rigid |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the prescribed accelerometer rigid will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>PrescribedAccelerometerRigid object (or null if not made).<br>
Return type
<br>PrescribedAccelerometerRigid |
| --- |

| Example
<br>To start creating a prescribed accelerometer rigid in model m:<br>
```
var par = PrescribedAccelerometerRigid.Create(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a prescribed accelerometer rigid. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the prescribed accelerometer rigid

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the prescribed accelerometer rigid par:<br>
```
par.DetachComment(c);
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
<br>To Edit prescribed accelerometer rigid par:<br>
```
par.Edit();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for prescribed accelerometer rigid. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for prescribed accelerometer rigid par:<br>
```
par.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first prescribed accelerometer rigid in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first prescribed accelerometer rigid in

| Returns
<br>PrescribedAccelerometerRigid object (or null if there are no prescribed accelerometer rigids in the model).<br>
Return type
<br>PrescribedAccelerometerRigid |
| --- |

| Example
<br>To get the first prescribed accelerometer rigid in model m:<br>
```
var par = PrescribedAccelerometerRigid.First(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the prescribed accelerometer rigids in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all prescribed accelerometer rigids will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the prescribed accelerometer rigids

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the prescribed accelerometer rigids with flag f in model m:<br>
```
PrescribedAccelerometerRigid.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the prescribed accelerometer rigid is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the prescribed accelerometer rigid

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if prescribed accelerometer rigid par has flag f set on it:<br>
```
if (par.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each prescribed accelerometer rigid in the model.<br> **Note that ForEach has been designed to make looping over prescribed accelerometer rigids as fast as possible and so has some limitations. Firstly, a single temporary PrescribedAccelerometerRigid object is created and on each function call it is updated with the current prescribed accelerometer rigid data. This means that you should not try to store the PrescribedAccelerometerRigid object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new prescribed accelerometer rigids inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all prescribed accelerometer rigids are in

* func (function)
 
Function to call for each prescribed accelerometer rigid

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the prescribed accelerometer rigids in model m:<br>
```
PrescribedAccelerometerRigid.ForEach(m, test);
function test(par)
{
// par is PrescribedAccelerometerRigid object
}
```
<br><br>To call function test for all of the prescribed accelerometer rigids in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
PrescribedAccelerometerRigid.ForEach(m, test, data);
function test(par, extra)
{
// par is PrescribedAccelerometerRigid object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of PrescribedAccelerometerRigid objects or properties for all of the prescribed accelerometer rigids in a model in PRIMER. If the optional property argument is not given then an array of PrescribedAccelerometerRigid objects is returned. If the property argument is given, that property value for each prescribed accelerometer rigid is returned in the array instead of a PrescribedAccelerometerRigid object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get prescribed accelerometer rigids from

* property (optional) (string)
 
Name for property to get for all prescribed accelerometer rigids in the model

| Returns
<br>Array of PrescribedAccelerometerRigid objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of PrescribedAccelerometerRigid objects for all of the prescribed accelerometer rigids in model m:<br>
```
var a = PrescribedAccelerometerRigid.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each prescribed accelerometer rigid in model m:<br>
```
var a = PrescribedAccelerometerRigid.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a prescribed accelerometer rigid. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the prescribed accelerometer rigid par:<br>
```
var comm_array = par.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of PrescribedAccelerometerRigid objects for all of the flagged prescribed accelerometer rigids in a model in PRIMER If the optional property argument is not given then an array of PrescribedAccelerometerRigid objects is returned. If the property argument is given, then that property value for each prescribed accelerometer rigid is returned in the array instead of a PrescribedAccelerometerRigid object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get prescribed accelerometer rigids from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the prescribed accelerometer rigids that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged prescribed accelerometer rigids in the model

| Returns
<br>Array of PrescribedAccelerometerRigid objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of PrescribedAccelerometerRigid objects for all of the prescribed accelerometer rigids in model m flagged with f:<br>
```
var par = PrescribedAccelerometerRigid.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the prescribed accelerometer rigids in model m flagged with f:<br>
```
var a = PrescribedAccelerometerRigid.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the PrescribedAccelerometerRigid object for a prescribed accelerometer rigid ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the prescribed accelerometer rigid in

* number (integer)
 
number of the prescribed accelerometer rigid you want the PrescribedAccelerometerRigid object for

| Returns
<br>PrescribedAccelerometerRigid object (or null if prescribed accelerometer rigid does not exist).<br>
Return type
<br>PrescribedAccelerometerRigid |
| --- |

| Example
<br>To get the PrescribedAccelerometerRigid object for prescribed accelerometer rigid 100 in model m<br>
```
var par = PrescribedAccelerometerRigid.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a PrescribedAccelerometerRigid property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [PrescribedAccelerometerRigid.ViewParameters()](primer-prescribedaccelerometerrigid-class.md#PrescribedAccelerometerRigid::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
prescribed accelerometer rigid property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if PrescribedAccelerometerRigid property par.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (par.GetParameter(par.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if PrescribedAccelerometerRigid property par.example is a parameter by using the GetParameter method:<br>
```
if (par.ViewParameters().GetParameter(par.example) ) do_something...
```
 |
| --- |

* * *

| GetRow(row*[integer]*)

Description<br>Returns the data for a row in the prescribed accelerometer rigid. |
| --- |

#### Arguments

* row (integer)
 
The row you want the data for. **Note row indices start at 0**.

| Returns
<br>An array of numbers containing the row variables NID, CID, LCIDX, LCIDY and LCIDZ.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the data for the 2nd row in prescribed accelerometer rigid par:<br>
```
var data = par.GetRow(1);
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this prescribed accelerometer rigid. **Note that a carriage return is not added**. See also [PrescribedAccelerometerRigid.KeywordCards()](primer-prescribedaccelerometerrigid-class.md#PrescribedAccelerometerRigid::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for prescribed accelerometer rigid par:<br>
```
var key = par.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the prescribed accelerometer rigid. **Note that a carriage return is not added**. See also [PrescribedAccelerometerRigid.Keyword()](primer-prescribedaccelerometerrigid-class.md#PrescribedAccelerometerRigid::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for prescribed accelerometer rigid par:<br>
```
var cards = par.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last prescribed accelerometer rigid in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last prescribed accelerometer rigid in

| Returns
<br>PrescribedAccelerometerRigid object (or null if there are no prescribed accelerometer rigids in the model).<br>
Return type
<br>PrescribedAccelerometerRigid |
| --- |

| Example
<br>To get the last prescribed accelerometer rigid in model m:<br>
```
var par = PrescribedAccelerometerRigid.Last(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next prescribed accelerometer rigid in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>PrescribedAccelerometerRigid object (or null if there are no more prescribed accelerometer rigids in the model).<br>
Return type
<br>PrescribedAccelerometerRigid |
| --- |

| Example
<br>To get the prescribed accelerometer rigid in model m after prescribed accelerometer rigid par:<br>
```
var par = par.Next();
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous prescribed accelerometer rigid in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>PrescribedAccelerometerRigid object (or null if there are no more prescribed accelerometer rigids in the model).<br>
Return type
<br>PrescribedAccelerometerRigid |
| --- |

| Example
<br>To get the prescribed accelerometer rigid in model m before prescribed accelerometer rigid par:<br>
```
var par = par.Previous();
```
 |
| --- |

* * *

| RemoveRow(row*[integer]*)

Description<br>Removes the data for a row in \*BOUNDARY\_PRESCRIBED\_ACCELEROMETER\_RIGID. |
| --- |

#### Arguments

* row (integer)
 
The row you want to remove the data for. **Note that row indices start at 0**.

| Returns
<br>No return value. |
| --- |

| Example
<br>To remove the second row of data for prescribed accelerometer rigid par:<br>
```
par.RemoveRow(1);
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select prescribed accelerometer rigids using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting prescribed accelerometer rigids

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only prescribed accelerometer rigids from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only prescribed accelerometer rigids that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any prescribed accelerometer rigids can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of prescribed accelerometer rigids selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select prescribed accelerometer rigids from model m, flagging those selected with flag f, giving the prompt 'Select prescribed accelerometer rigids':<br>
```
PrescribedAccelerometerRigid.Select(f, 'Select prescribed accelerometer rigids', m);
```
<br><br>To select prescribed accelerometer rigids, flagging those selected with flag f but limiting selection to prescribed accelerometer rigids flagged with flag l, giving the prompt 'Select prescribed accelerometer rigids':<br>
```
PrescribedAccelerometerRigid.Select(f, 'Select prescribed accelerometer rigids', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the prescribed accelerometer rigid. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the prescribed accelerometer rigid

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for prescribed accelerometer rigid par:<br>
```
par.SetFlag(f);
```
 |
| --- |

* * *

| SetRow(row*[integer]*, data*[Array of data]*)

Description<br>Sets the data for a row in \*BOUNDARY\_PRESCRIBED\_ACCELEROMETER\_RIGID. |
| --- |

#### Arguments

* row (integer)
 
The row you want to set the data for. **Note that row indices start at 0**.

* data (Array of data)
 
The data you want to set the row to

| Returns
<br>No return value. |
| --- |

| Example
<br>To set the second row of data for prescribed accelerometer rigid par to be node 11, coordinate system 12, and load curves 13, 14, 15:<br>
```
var array = [11, 12, 13, 14, 15];
par.SetRow(1, array);
```
<br>To append a new row of data (using the same array of values):<br>
```
par.SetRow(par.nrow, array);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of prescribed accelerometer rigids in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing prescribed accelerometer rigids should be counted. If false or omitted
referenced but undefined prescribed accelerometer rigids will also be included in the total.

| Returns
<br>number of prescribed accelerometer rigids<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of prescribed accelerometer rigids in model m:<br>
```
var total = PrescribedAccelerometerRigid.Total(m);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the prescribed accelerometer rigids in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all prescribed accelerometer rigids will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the prescribed accelerometer rigids

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the prescribed accelerometer rigids in model m:<br>
```
PrescribedAccelerometerRigid.UnflagAll(m, f);
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
<br>[PrescribedAccelerometerRigid](primer-prescribedaccelerometerrigid-class.md) object.<br>
Return type
<br>PrescribedAccelerometerRigid |
| --- |

| Example
<br>To check if PrescribedAccelerometerRigid property par.example is a parameter by using the [PrescribedAccelerometerRigid.GetParameter()](primer-prescribedaccelerometerrigid-class.md#PrescribedAccelerometerRigid::GetParameter) method:<br>
```
if (par.ViewParameters().GetParameter(par.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for prescribed accelerometer rigid. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for prescribed accelerometer rigid par:<br>
```
par.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this prescribed accelerometer rigid. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for prescribed accelerometer rigid par:<br>
```
var xrefs = par.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the prescribed accelerometer rigid data in keyword format. Note that this contains the keyword header and the keyword cards. See also [PrescribedAccelerometerRigid.Keyword()](primer-prescribedaccelerometerrigid-class.md#PrescribedAccelerometerRigid::Keyword) and [PrescribedAccelerometerRigid.KeywordCards()](primer-prescribedaccelerometerrigid-class.md#PrescribedAccelerometerRigid::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for prescribed accelerometer rigid par in keyword format<br>
```
var s = par.toString();
```
 |
| --- |

* * *