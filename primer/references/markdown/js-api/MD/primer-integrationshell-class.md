# IntegrationShell (IntS) class

The IntegrationShell class gives you access to integration shell cards in PRIMER. [More...](primer-integrationshell-class.md#IntegrationShell_details)

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

* [Create](primer-integrationshell-class.md#IntegrationShell::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [First](primer-integrationshell-class.md#IntegrationShell::First)(Model*[[Model](primer-model-class.md)]*)
* [FirstFreeLabel](primer-integrationshell-class.md#IntegrationShell::FirstFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [FlagAll](primer-integrationshell-class.md#IntegrationShell::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-integrationshell-class.md#IntegrationShell::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-integrationshell-class.md#IntegrationShell::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-integrationshell-class.md#IntegrationShell::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-integrationshell-class.md#IntegrationShell::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-integrationshell-class.md#IntegrationShell::Last)(Model*[[Model](primer-model-class.md)]*)
* [LastFreeLabel](primer-integrationshell-class.md#IntegrationShell::LastFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [NextFreeLabel](primer-integrationshell-class.md#IntegrationShell::NextFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [RenumberAll](primer-integrationshell-class.md#IntegrationShell::RenumberAll)(Model*[[Model](primer-model-class.md)]*, start*[integer]*)
* [RenumberFlagged](primer-integrationshell-class.md#IntegrationShell::RenumberFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*)
* [Select](primer-integrationshell-class.md#IntegrationShell::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [Total](primer-integrationshell-class.md#IntegrationShell::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnflagAll](primer-integrationshell-class.md#IntegrationShell::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

## Member functions

* [AssociateComment](primer-integrationshell-class.md#IntegrationShell::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Browse](primer-integrationshell-class.md#IntegrationShell::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-integrationshell-class.md#IntegrationShell::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-integrationshell-class.md#IntegrationShell::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-integrationshell-class.md#IntegrationShell::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-integrationshell-class.md#IntegrationShell::Edit)(modal (optional)*[boolean]*)
* [Error](primer-integrationshell-class.md#IntegrationShell::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-integrationshell-class.md#IntegrationShell::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-integrationshell-class.md#IntegrationShell::GetComments)()
* [GetIntegrationPoint](primer-integrationshell-class.md#IntegrationShell::GetIntegrationPoint)(index*[integer]*)
* [GetNipCard](primer-integrationshell-class.md#IntegrationShell::GetNipCard_deprecated)() [deprecated]
* [GetParameter](primer-integrationshell-class.md#IntegrationShell::GetParameter)(prop*[string]*)
* [Keyword](primer-integrationshell-class.md#IntegrationShell::Keyword)()
* [KeywordCards](primer-integrationshell-class.md#IntegrationShell::KeywordCards)()
* [Next](primer-integrationshell-class.md#IntegrationShell::Next)()
* [Previous](primer-integrationshell-class.md#IntegrationShell::Previous)()
* [SetFlag](primer-integrationshell-class.md#IntegrationShell::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [SetIntegrationPoint](primer-integrationshell-class.md#IntegrationShell::SetIntegrationPoint)(index*[integer]*, s*[real]*, wf*[real]*, pid(optional)*[integer]*)
* [SetNipCard](primer-integrationshell-class.md#IntegrationShell::SetNipCard_deprecated)() [deprecated]
* [ViewParameters](primer-integrationshell-class.md#IntegrationShell::ViewParameters)()
* [Warning](primer-integrationshell-class.md#IntegrationShell::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-integrationshell-class.md#IntegrationShell::Xrefs)()
* [toString](primer-integrationshell-class.md#IntegrationShell::toString)()

## IntegrationShell properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| esop | integer | Equal spacing of integration points option. |
| exists (read only) | logical | true if integration shell exists, false if referred to but not defined. |
| failopt | integer | Treatment of failure when mixing different constitutive types. |
| include | integer | The [Include](primer-include-class.md) file number that the integration shell is in. |
| irid | integer | Integration rule id. |
| model (read only) | integer | The [Model](primer-model-class.md) number that the integration shell is in. |
| nip | integer | Number of integration points. |
| pid | [Part](primer-part-class.md) | Optional part ID if different from the PID specified on the element card. |
| s | real | Coordinate of integration point in range -1 to 1. |
| wf | real | Weighting factor (thickness associated with integration point divided by actual shell thickness). |

| Detailed Description<br>The IntegrationShell class allows you to create, modify, edit and manipulate integration shell cards.<br>See the documentation below for more details.<br>
<br>For convenience "IntS" can also be used as the class name instead of "IntegrationShell". |
| --- |

| Constructor
new IntegrationShell(Model*[[Model](primer-model-class.md)]*, irid*[integer]*, nip*[integer]*, esop (optional)*[integer]*, failopt (optional)*[integer]*)

Description<br>Create a new [IntegrationShell](primer-integrationshell-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that ints will be created in.

* irid (integer)
 
Integration\_Beam ID.

* nip (integer)
 
Number of integration points.

* esop (optional) (integer)
 
Equal spacing of integration points option. If omitted esop will be 0.

* failopt (optional) (integer)
 
Treatment of failure when mixing different constitutive types. If omitted failopt will be 0.

| Returns
<br>[IntegrationShell](primer-integrationshell-class.md) object<br>
Return type
<br>IntegrationShell |
| --- |

| Example
<br>To create a new ints 1000 in model m with the following specifiction: irid, nip, esop, failopt are 1000, 2, 0, 1 respectively<br>
```
var w = new IntegrationBeam(m, 1000, 2, 0, 1);
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a integration shell. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the integration shell

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the integration shell is:<br>
```
is.AssociateComment(c);
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
<br>To Browse integration shell is:<br>
```
is.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the integration shell. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the integration shell

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for integration shell is:<br>
```
is.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the integration shell. The target include of the copied integration shell can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>IntegrationShell object<br>
Return type
<br>IntegrationShell |
| --- |

| Example
<br>To copy integration shell is into integration shell z:<br>
```
var z = is.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a integration shell |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the integration shell will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>IntegrationShell object (or null if not made).<br>
Return type
<br>IntegrationShell |
| --- |

| Example
<br>To start creating a integration shell in model m:<br>
```
var is = IntegrationShell.Create(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a integration shell. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the integration shell

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the integration shell is:<br>
```
is.DetachComment(c);
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
<br>To Edit integration shell is:<br>
```
is.Edit();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for integration shell. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for integration shell is:<br>
```
is.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first integration shell in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first integration shell in

| Returns
<br>IntegrationShell object (or null if there are no integration shells in the model).<br>
Return type
<br>IntegrationShell |
| --- |

| Example
<br>To get the first integration shell in model m:<br>
```
var is = IntegrationShell.First(m);
```
 |
| --- |

* * *

| FirstFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the first free integration shell label in the model. Also see [IntegrationShell.LastFreeLabel()](primer-integrationshell-class.md#IntegrationShell::LastFreeLabel), [IntegrationShell.NextFreeLabel()](primer-integrationshell-class.md#IntegrationShell::NextFreeLabel) and [Model.FirstFreeItemLabel()](primer-model-class.md#Model::FirstFreeItemLabel). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first free integration shell label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *First free in layer* in editing panels). If omitted the whole model will be used (Equivalent to *First free* in editing panels).

| Returns
<br>IntegrationShell label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the first free integration shell label in model m:<br>
```
var label = IntegrationShell.FirstFreeLabel(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the integration shells in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all integration shells will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the integration shells

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the integration shells with flag f in model m:<br>
```
IntegrationShell.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the integration shell is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the integration shell

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if integration shell is has flag f set on it:<br>
```
if (is.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each integration shell in the model.<br> **Note that ForEach has been designed to make looping over integration shells as fast as possible and so has some limitations. Firstly, a single temporary IntegrationShell object is created and on each function call it is updated with the current integration shell data. This means that you should not try to store the IntegrationShell object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new integration shells inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all integration shells are in

* func (function)
 
Function to call for each integration shell

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the integration shells in model m:<br>
```
IntegrationShell.ForEach(m, test);
function test(is)
{
// is is IntegrationShell object
}
```
<br><br>To call function test for all of the integration shells in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
IntegrationShell.ForEach(m, test, data);
function test(is, extra)
{
// is is IntegrationShell object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of IntegrationShell objects or properties for all of the integration shells in a model in PRIMER. If the optional property argument is not given then an array of IntegrationShell objects is returned. If the property argument is given, that property value for each integration shell is returned in the array instead of a IntegrationShell object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get integration shells from

* property (optional) (string)
 
Name for property to get for all integration shells in the model

| Returns
<br>Array of IntegrationShell objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of IntegrationShell objects for all of the integration shells in model m:<br>
```
var a = IntegrationShell.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each integration shell in model m:<br>
```
var a = IntegrationShell.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a integration shell. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the integration shell is:<br>
```
var comm_array = is.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of IntegrationShell objects for all of the flagged integration shells in a model in PRIMER If the optional property argument is not given then an array of IntegrationShell objects is returned. If the property argument is given, then that property value for each integration shell is returned in the array instead of a IntegrationShell object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get integration shells from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the integration shells that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged integration shells in the model

| Returns
<br>Array of IntegrationShell objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of IntegrationShell objects for all of the integration shells in model m flagged with f:<br>
```
var is = IntegrationShell.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the integration shells in model m flagged with f:<br>
```
var a = IntegrationShell.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the IntegrationShell object for a integration shell ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the integration shell in

* number (integer)
 
number of the integration shell you want the IntegrationShell object for

| Returns
<br>IntegrationShell object (or null if integration shell does not exist).<br>
Return type
<br>IntegrationShell |
| --- |

| Example
<br>To get the IntegrationShell object for integration shell 100 in model m<br>
```
var is = IntegrationShell.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetIntegrationPoint(index*[integer]*)

Description<br>Returns the data for an integration point in \*INTEGRATION\_SHELL.**Note data is only available when NIP&gt;0 and ESOP=0**. |
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
<br>To get the data for the 3rd integration point for integration shell:<br>
```
var data = is.GetIntegrationPoint(2);
```
 |
| --- |

* * *

| GetNipCard() [deprecated]
<br>This function is deprecated in version 11.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>
Description<br>Please use [IntegrationShell.GetIntegrationPoint()](primer-integrationshell-class.md#IntegrationShell::GetIntegrationPoint) instead. |
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

Description<br>Checks if a IntegrationShell property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [IntegrationShell.ViewParameters()](primer-integrationshell-class.md#IntegrationShell::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
integration shell property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if IntegrationShell property is.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (is.GetParameter(is.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if IntegrationShell property is.example is a parameter by using the GetParameter method:<br>
```
if (is.ViewParameters().GetParameter(is.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this ints (\*INTEGRATION\_SHELL). **Note that a carriage return is not added**. See also [IntegrationShell.KeywordCards()](primer-integrationshell-class.md#IntegrationShell::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for ints n:<br>
```
var key = n.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the ints. **Note that a carriage return is not added**. See also [IntegrationShell.Keyword()](primer-integrationshell-class.md#IntegrationShell::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for integration shell is:<br>
```
var cards = is.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last integration shell in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last integration shell in

| Returns
<br>IntegrationShell object (or null if there are no integration shells in the model).<br>
Return type
<br>IntegrationShell |
| --- |

| Example
<br>To get the last integration shell in model m:<br>
```
var is = IntegrationShell.Last(m);
```
 |
| --- |

* * *

| LastFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the last free integration shell label in the model. Also see [IntegrationShell.FirstFreeLabel()](primer-integrationshell-class.md#IntegrationShell::FirstFreeLabel), [IntegrationShell.NextFreeLabel()](primer-integrationshell-class.md#IntegrationShell::NextFreeLabel) and see [Model.LastFreeItemLabel()](primer-model-class.md#Model::LastFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last free integration shell label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest free in layer* in editing panels). If omitted the whole model will be used.

| Returns
<br>IntegrationShell label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the last free integration shell label in model m:<br>
```
var label = IntegrationShell.LastFreeLabel(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next integration shell in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>IntegrationShell object (or null if there are no more integration shells in the model).<br>
Return type
<br>IntegrationShell |
| --- |

| Example
<br>To get the integration shell in model m after integration shell is:<br>
```
var is = is.Next();
```
 |
| --- |

* * *

| NextFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the next free (highest+1) integration shell label in the model. Also see [IntegrationShell.FirstFreeLabel()](primer-integrationshell-class.md#IntegrationShell::FirstFreeLabel), [IntegrationShell.LastFreeLabel()](primer-integrationshell-class.md#IntegrationShell::LastFreeLabel) and [Model.NextFreeItemLabel()](primer-model-class.md#Model::NextFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get next free integration shell label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest+1 in layer* in editing panels). If omitted the whole model will be used (Equivalent to *Highest+1* in editing panels).

| Returns
<br>IntegrationShell label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the next free integration shell label in model m:<br>
```
var label = IntegrationShell.NextFreeLabel(m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous integration shell in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>IntegrationShell object (or null if there are no more integration shells in the model).<br>
Return type
<br>IntegrationShell |
| --- |

| Example
<br>To get the integration shell in model m before integration shell is:<br>
```
var is = is.Previous();
```
 |
| --- |

* * *

| RenumberAll(Model*[[Model](primer-model-class.md)]*, start*[integer]*) [static]
Description<br>Renumbers all of the integration shells in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all integration shells will be renumbered in

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the integration shells in model m, from 1000000:<br>
```
IntegrationShell.RenumberAll(m, 1000000);
```
 |
| --- |

* * *

| RenumberFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*) [static]
Description<br>Renumbers all of the flagged integration shells in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged integration shells will be renumbered in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the integration shells that you want to renumber

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the integration shells in model m flagged with f, from 1000000:<br>
```
IntegrationShell.RenumberFlagged(m, f, 1000000);
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select integration shells using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting integration shells

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only integration shells from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only integration shells that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any integration shells can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of integration shells selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select integration shells from model m, flagging those selected with flag f, giving the prompt 'Select integration shells':<br>
```
IntegrationShell.Select(f, 'Select integration shells', m);
```
<br><br>To select integration shells, flagging those selected with flag f but limiting selection to integration shells flagged with flag l, giving the prompt 'Select integration shells':<br>
```
IntegrationShell.Select(f, 'Select integration shells', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the integration shell. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the integration shell

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for integration shell is:<br>
```
is.SetFlag(f);
```
 |
| --- |

* * *

| SetIntegrationPoint(index*[integer]*, s*[real]*, wf*[real]*, pid(optional)*[integer]*)

Description<br>Sets the integration point data for an \*INTEGRATION\_SHELL. |
| --- |

#### Arguments

* index (integer)
 
Index you want to set the integration point data for. **Note that indices start at 0**.

* s (real)
 
Coordinate of integration point in range -1 to 1.

* wf (real)
 
Weighting factor, thickness associated with the integration point divided by actual shell thickness.

* pid(optional) (integer)
 
Optional part ID if different from the PID specified on the element card.

| Returns
<br>No return value. |
| --- |

| Example
<br>To set the 4th integration point for \*INTEGRATION\_SHELL is to the following specifiction: s, wf, pid are 0.1, 0.2, 1 respectively<br>
```
is.SetIntegrationPoint(3, 0.1, 0.2, 1);
```
 |
| --- |

* * *

| SetNipCard() [deprecated]
<br>This function is deprecated in version 11.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>
Description<br>Please use [IntegrationShell.SetIntegrationPoint()](primer-integrationshell-class.md#IntegrationShell::SetIntegrationPoint) instead. |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

|  |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of integration shells in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing integration shells should be counted. If false or omitted
referenced but undefined integration shells will also be included in the total.

| Returns
<br>number of integration shells<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of integration shells in model m:<br>
```
var total = IntegrationShell.Total(m);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the integration shells in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all integration shells will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the integration shells

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the integration shells in model m:<br>
```
IntegrationShell.UnflagAll(m, f);
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
<br>[IntegrationShell](primer-integrationshell-class.md) object.<br>
Return type
<br>IntegrationShell |
| --- |

| Example
<br>To check if IntegrationShell property is.example is a parameter by using the [IntegrationShell.GetParameter()](primer-integrationshell-class.md#IntegrationShell::GetParameter) method:<br>
```
if (is.ViewParameters().GetParameter(is.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for integration shell. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for integration shell is:<br>
```
is.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this integration shell. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for integration shell is:<br>
```
var xrefs = is.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the ints data in keyword format. Note that this contains the keyword header and the keyword cards. See also [IntegrationShell.Keyword()](primer-integrationshell-class.md#IntegrationShell::Keyword) and [IntegrationShell.KeywordCards()](primer-integrationshell-class.md#IntegrationShell::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for integration shell is in keyword format<br>
```
var s = is.toString();
```
 |
| --- |

* * *