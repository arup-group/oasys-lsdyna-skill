# StrainShell class

The StrainShell class gives you access to define initial strain shell cards in PRIMER. [More...](primer-strainshell-class.md#StrainShell_details)

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

* [First](primer-strainshell-class.md#StrainShell::First)(Model*[[Model](primer-model-class.md)]*)
* [FlagAll](primer-strainshell-class.md#StrainShell::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-strainshell-class.md#StrainShell::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-strainshell-class.md#StrainShell::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-strainshell-class.md#StrainShell::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-strainshell-class.md#StrainShell::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-strainshell-class.md#StrainShell::Last)(Model*[[Model](primer-model-class.md)]*)
* [Pick](primer-strainshell-class.md#StrainShell::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [Select](primer-strainshell-class.md#StrainShell::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-strainshell-class.md#StrainShell::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-strainshell-class.md#StrainShell::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnflagAll](primer-strainshell-class.md#StrainShell::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-strainshell-class.md#StrainShell::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-strainshell-class.md#StrainShell::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-strainshell-class.md#StrainShell::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [ClearFlag](primer-strainshell-class.md#StrainShell::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-strainshell-class.md#StrainShell::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-strainshell-class.md#StrainShell::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Error](primer-strainshell-class.md#StrainShell::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-strainshell-class.md#StrainShell::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-strainshell-class.md#StrainShell::GetComments)()
* [GetIntegrationPoint](primer-strainshell-class.md#StrainShell::GetIntegrationPoint)(index*[integer]*)
* [GetParameter](primer-strainshell-class.md#StrainShell::GetParameter)(prop*[string]*)
* [Keyword](primer-strainshell-class.md#StrainShell::Keyword)()
* [KeywordCards](primer-strainshell-class.md#StrainShell::KeywordCards)()
* [Next](primer-strainshell-class.md#StrainShell::Next)()
* [Previous](primer-strainshell-class.md#StrainShell::Previous)()
* [SetFlag](primer-strainshell-class.md#StrainShell::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [SetIntegrationPoint](primer-strainshell-class.md#StrainShell::SetIntegrationPoint)(index*[integer]*, data*[Array of data]*)
* [Sketch](primer-strainshell-class.md#StrainShell::Sketch)(redraw (optional)*[boolean]*)
* [Unsketch](primer-strainshell-class.md#StrainShell::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-strainshell-class.md#StrainShell::ViewParameters)()
* [Warning](primer-strainshell-class.md#StrainShell::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-strainshell-class.md#StrainShell::Xrefs)()
* [toString](primer-strainshell-class.md#StrainShell::toString)()

## StrainShell constants

| **Name** | **Description** |
| --- | --- |
| StrainShell.SET | Initial is \*INITIAL\_STRAIN\_SHELL\_SET. |
| StrainShell.SHELL | Initial is \*INITIAL\_STRAIN\_SHELL. |

## StrainShell properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| eid | integer | [Shell](primer-shell-class.md) Element ID or shell set ID |
| exists (read only) | logical | true if initial strain shell exists, false if referred to but not defined. |
| ilocal | integer | Flag for coordinate system of strain components |
| include | integer | The [Include](primer-include-class.md) file number that the initial strain shell is in. |
| large | logical | true if large format, false otherwise |
| model (read only) | integer | The [Model](primer-model-class.md) number that the initial strain shell is in. |
| nplane | integer | Number of in plane integration points being output (not read when the SET option is used) |
| nthick | integer | Number of integration points through the thickness (not read when the SET option is used) |
| type | constant | The Intial strain shell type. Can be [StrainShell.SHELL](primer-strainshell-class.md#StrainShell.SHELL) or [StrainShell.SET](primer-strainshell-class.md#StrainShell.SET). |

| Detailed Description<br>The StrainShell class allows you to create, modify, edit and manipulate strain\_shell cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new StrainShell(Model*[[Model](primer-model-class.md)]*, type*[constant]*, eid*[integer]*, nplane*[integer]*, nthick*[integer]*, large*[integer]*, ilocal*[integer]*)

Description<br>Create a new [StrainShell](primer-strainshell-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that strain\_shell will be created in

* type (constant)
 
Specify the type of initial strain shell (Can be [StrainShell.SHELL](primer-strainshell-class.md#StrainShell.SHELL) or [StrainShell.SET](primer-strainshell-class.md#StrainShell.SET))

* eid (integer)
 
[Shell](primer-shell-class.md) Element ID or shell set ID

* nplane (integer)
 
Number of in plane integration points being output

* nthick (integer)
 
Number of integration points through the thickness

* large (integer)
 
Large format flag, set 0 to turn it off or 1 to enable it. It is optional and set to 0 by default.

* ilocal (integer)
 
Flag for coordinate system of strain components. Set to 0 for global or 1 to enable local. It is optional and set to 0 by default

| Returns
<br>[StrainShell](primer-strainshell-class.md) object<br>
Return type
<br>StrainShell |
| --- |

| Example
<br>To create a new strain\_shell in model m, of type SET<br>
```
var s = new StrainShell(m, StrainShell.SET, 1, 2, 2);
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a initial strain shell. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the initial strain shell

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the initial strain shell iss:<br>
```
iss.AssociateComment(c);
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the initial strain shell. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the initial strain shell

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for initial strain shell iss:<br>
```
iss.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the initial strain shell. The target include of the copied initial strain shell can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>StrainShell object<br>
Return type
<br>StrainShell |
| --- |

| Example
<br>To copy initial strain shell iss into initial strain shell z:<br>
```
var z = iss.Copy();
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a initial strain shell. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the initial strain shell

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the initial strain shell iss:<br>
```
iss.DetachComment(c);
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for initial strain shell. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for initial strain shell iss:<br>
```
iss.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first initial strain shell in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first initial strain shell in

| Returns
<br>StrainShell object (or null if there are no initial strain shells in the model).<br>
Return type
<br>StrainShell |
| --- |

| Example
<br>To get the first initial strain shell in model m:<br>
```
var iss = StrainShell.First(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the initial strain shells in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all initial strain shells will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the initial strain shells

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the initial strain shells with flag f in model m:<br>
```
StrainShell.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the initial strain shell is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the initial strain shell

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if initial strain shell iss has flag f set on it:<br>
```
if (iss.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each initial strain shell in the model.<br> **Note that ForEach has been designed to make looping over initial strain shells as fast as possible and so has some limitations. Firstly, a single temporary StrainShell object is created and on each function call it is updated with the current initial strain shell data. This means that you should not try to store the StrainShell object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new initial strain shells inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all initial strain shells are in

* func (function)
 
Function to call for each initial strain shell

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the initial strain shells in model m:<br>
```
StrainShell.ForEach(m, test);
function test(iss)
{
// iss is StrainShell object
}
```
<br><br>To call function test for all of the initial strain shells in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
StrainShell.ForEach(m, test, data);
function test(iss, extra)
{
// iss is StrainShell object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of StrainShell objects or properties for all of the initial strain shells in a model in PRIMER. If the optional property argument is not given then an array of StrainShell objects is returned. If the property argument is given, that property value for each initial strain shell is returned in the array instead of a StrainShell object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get initial strain shells from

* property (optional) (string)
 
Name for property to get for all initial strain shells in the model

| Returns
<br>Array of StrainShell objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of StrainShell objects for all of the initial strain shells in model m:<br>
```
var a = StrainShell.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each initial strain shell in model m:<br>
```
var a = StrainShell.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a initial strain shell. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the initial strain shell iss:<br>
```
var comm_array = iss.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of StrainShell objects for all of the flagged initial strain shells in a model in PRIMER If the optional property argument is not given then an array of StrainShell objects is returned. If the property argument is given, then that property value for each initial strain shell is returned in the array instead of a StrainShell object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get initial strain shells from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the initial strain shells that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged initial strain shells in the model

| Returns
<br>Array of StrainShell objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of StrainShell objects for all of the initial strain shells in model m flagged with f:<br>
```
var iss = StrainShell.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the initial strain shells in model m flagged with f:<br>
```
var a = StrainShell.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the StrainShell object for a initial strain shell ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the initial strain shell in

* number (integer)
 
number of the initial strain shell you want the StrainShell object for

| Returns
<br>StrainShell object (or null if initial strain shell does not exist).<br>
Return type
<br>StrainShell |
| --- |

| Example
<br>To get the StrainShell object for initial strain shell 100 in model m<br>
```
var iss = StrainShell.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetIntegrationPoint(index*[integer]*)

Description<br>Returns the data for a specific integration point as an array. For each integration point there will be 7 strain component values. There are [nplane](primer-strainshell-class.md#nplane) x [nthick](primer-strainshell-class.md#nthick) integration points. |
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
<br>To get the data for the 3rd integration point for initial strain shell iss:<br>
```
var data = iss.GetIntegrationPoint(2);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a StrainShell property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [StrainShell.ViewParameters()](primer-strainshell-class.md#StrainShell::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
initial strain shell property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if StrainShell property iss.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (iss.GetParameter(iss.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if StrainShell property iss.example is a parameter by using the GetParameter method:<br>
```
if (iss.ViewParameters().GetParameter(iss.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this initial strain shell (\*INITIAL\_STRAIN\_SHELL). **Note that a carriage return is not added**. See also [StrainShell.KeywordCards()](primer-strainshell-class.md#StrainShell::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for strain\_shell i:<br>
```
var key = i.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the initial strain shell. **Note that a carriage return is not added**. See also [StrainShell.Keyword()](primer-strainshell-class.md#StrainShell::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for strain\_shell i:<br>
```
var cards = i.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last initial strain shell in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last initial strain shell in

| Returns
<br>StrainShell object (or null if there are no initial strain shells in the model).<br>
Return type
<br>StrainShell |
| --- |

| Example
<br>To get the last initial strain shell in model m:<br>
```
var iss = StrainShell.Last(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next initial strain shell in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>StrainShell object (or null if there are no more initial strain shells in the model).<br>
Return type
<br>StrainShell |
| --- |

| Example
<br>To get the initial strain shell in model m after initial strain shell iss:<br>
```
var iss = iss.Next();
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a initial strain shell. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only initial strain shells from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only initial strain shells that are flagged with *limit* can be selected. If omitted, or null, any initial strain shells from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[StrainShell](primer-strainshell-class.md) object (or null if not picked)<br>
Return type
<br>StrainShell |
| --- |

| Example
<br>To pick a initial strain shell from model m giving the prompt 'Pick initial strain shell from screen':<br>
```
var iss = StrainShell.Pick('Pick initial strain shell from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous initial strain shell in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>StrainShell object (or null if there are no more initial strain shells in the model).<br>
Return type
<br>StrainShell |
| --- |

| Example
<br>To get the initial strain shell in model m before initial strain shell iss:<br>
```
var iss = iss.Previous();
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select initial strain shells using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting initial strain shells

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only initial strain shells from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only initial strain shells that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any initial strain shells can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of initial strain shells selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select initial strain shells from model m, flagging those selected with flag f, giving the prompt 'Select initial strain shells':<br>
```
StrainShell.Select(f, 'Select initial strain shells', m);
```
<br><br>To select initial strain shells, flagging those selected with flag f but limiting selection to initial strain shells flagged with flag l, giving the prompt 'Select initial strain shells':<br>
```
StrainShell.Select(f, 'Select initial strain shells', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the initial strain shell. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the initial strain shell

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for initial strain shell iss:<br>
```
iss.SetFlag(f);
```
 |
| --- |

* * *

| SetIntegrationPoint(index*[integer]*, data*[Array of data]*)

Description<br>Set the data for a specific integration point. For each integration point there will be 7 strain component values. There are [nplane](primer-strainshell-class.md#nplane) x [nthick](primer-strainshell-class.md#nthick) integration points. |
| --- |

#### Arguments

* index (integer)
 
Index you want the integration point data for. **Note that indices start at 0**.

* data (Array of data)
 
Array containing the integration point data. The array length should be 7.

| Returns
<br>No return value. |
| --- |

| Example
<br>To set the 3rd integration point data for initial strain shell iss to the values in array adata:<br>
```
iss.SetIntegrationPoint(2, adata);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the initial strain shell. The initial strain shell will be sketched until you either call [StrainShell.Unsketch()](primer-strainshell-class.md#StrainShell::Unsketch), [StrainShell.UnsketchAll()](primer-strainshell-class.md#StrainShell::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the initial strain shell is sketched. If omitted redraw is true. If you want to sketch several initial strain shells and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch initial strain shell iss:<br>
```
iss.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged initial strain shells in the model. The initial strain shells will be sketched until you either call [StrainShell.Unsketch()](primer-strainshell-class.md#StrainShell::Unsketch), [StrainShell.UnsketchFlagged()](primer-strainshell-class.md#StrainShell::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged initial strain shells will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the initial strain shells that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the initial strain shells are sketched. If omitted redraw is true. If you want to sketch flagged initial strain shells several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all initial strain shells flagged with flag in model m:<br>
```
StrainShell.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of initial strain shells in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing initial strain shells should be counted. If false or omitted
referenced but undefined initial strain shells will also be included in the total.

| Returns
<br>number of initial strain shells<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of initial strain shells in model m:<br>
```
var total = StrainShell.Total(m);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the initial strain shells in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all initial strain shells will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the initial strain shells

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the initial strain shells in model m:<br>
```
StrainShell.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the initial strain shell. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the initial strain shell is unsketched. If omitted redraw is true. If you want to unsketch several initial strain shells and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch initial strain shell iss:<br>
```
iss.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all initial strain shells. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all initial strain shells will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the initial strain shells are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all initial strain shells in model m:<br>
```
StrainShell.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged initial strain shells in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all initial strain shells will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the initial strain shells that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the initial strain shells are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all initial strain shells flagged with flag in model m:<br>
```
StrainShell.UnsketchAll(m, flag);
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
<br>[StrainShell](primer-strainshell-class.md) object.<br>
Return type
<br>StrainShell |
| --- |

| Example
<br>To check if StrainShell property iss.example is a parameter by using the [StrainShell.GetParameter()](primer-strainshell-class.md#StrainShell::GetParameter) method:<br>
```
if (iss.ViewParameters().GetParameter(iss.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for initial strain shell. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for initial strain shell iss:<br>
```
iss.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this initial strain shell. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for initial strain shell iss:<br>
```
var xrefs = iss.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the initial strain shell data in keyword format. Note that this contains the keyword header and the keyword cards. See also [StrainShell.Keyword()](primer-strainshell-class.md#StrainShell::Keyword) and [StrainShell.KeywordCards()](primer-strainshell-class.md#StrainShell::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for strain\_shell i in keyword format<br>
```
var s = i.toString();
```
 |
| --- |

* * *