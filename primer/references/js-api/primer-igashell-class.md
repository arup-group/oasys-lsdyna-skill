# IGAShell class

The IGAShell class gives you access to IGA shell cards in PRIMER. [More...](primer-igashell-class.md#IGAShell_details)

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

* [Create](primer-igashell-class.md#IGAShell::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [First](primer-igashell-class.md#IGAShell::First)(Model*[[Model](primer-model-class.md)]*)
* [FlagAll](primer-igashell-class.md#IGAShell::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-igashell-class.md#IGAShell::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-igashell-class.md#IGAShell::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-igashell-class.md#IGAShell::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-igashell-class.md#IGAShell::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-igashell-class.md#IGAShell::Last)(Model*[[Model](primer-model-class.md)]*)
* [RedrawAll](primer-igashell-class.md#IGAShell::RedrawAll)(Model*[[Model](primer-model-class.md)]*)
* [Select](primer-igashell-class.md#IGAShell::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-igashell-class.md#IGAShell::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-igashell-class.md#IGAShell::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnflagAll](primer-igashell-class.md#IGAShell::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-igashell-class.md#IGAShell::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-igashell-class.md#IGAShell::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-igashell-class.md#IGAShell::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Browse](primer-igashell-class.md#IGAShell::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-igashell-class.md#IGAShell::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-igashell-class.md#IGAShell::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-igashell-class.md#IGAShell::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-igashell-class.md#IGAShell::Edit)(modal (optional)*[boolean]*)
* [Error](primer-igashell-class.md#IGAShell::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-igashell-class.md#IGAShell::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-igashell-class.md#IGAShell::GetComments)()
* [GetParameter](primer-igashell-class.md#IGAShell::GetParameter)(prop*[string]*)
* [Keyword](primer-igashell-class.md#IGAShell::Keyword)()
* [KeywordCards](primer-igashell-class.md#IGAShell::KeywordCards)()
* [Next](primer-igashell-class.md#IGAShell::Next)()
* [Previous](primer-igashell-class.md#IGAShell::Previous)()
* [SetFlag](primer-igashell-class.md#IGAShell::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Sketch](primer-igashell-class.md#IGAShell::Sketch)(redraw (optional)*[boolean]*)
* [Unsketch](primer-igashell-class.md#IGAShell::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-igashell-class.md#IGAShell::ViewParameters)()
* [Warning](primer-igashell-class.md#IGAShell::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-igashell-class.md#IGAShell::Xrefs)()
* [toString](primer-igashell-class.md#IGAShell::toString)()

## IGAShell properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists (read only) | logical | true if IGA Shell exists, false if referred to but not defined. |
| id (read only) | integer | ID of the IGA shell. Only used in PRIMER. |
| idfne | integer | Element ID of the first IGA element. |
| include | integer | The [Include](primer-include-class.md) file number that the IGA Shell is in. |
| model (read only) | integer | The [Model](primer-model-class.md) number that the IGA Shell is in. |
| nisr | real | Interpolation elements in the local r-direction. |
| niss | real | Interpolation elements in the local s-direction. |
| pid | integer | [Part](primer-part-class.md) ID. |
| sid | integer | Isogeometric Shell (patch) ID. |

| Detailed Description<br>The IGAShell class allows you to create, modify, edit and manipulate IGA shell cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new IGAShell(Model*[[Model](primer-model-class.md)]*, details*[object]*)

Description<br>Create a new [IGAShell](primer-igashell-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that IGA shell will be created in

* details (object)

Details for creating the [IGAShell](primer-igashell-class.md) 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| idfne (optional) | integer | Element ID of the first IGA element. |
| nisr (optional) | real | Interpolation elements in the local r-direction. |
| niss (optional) | real | Interpolation elements in the local s-direction. |
| pid | integer | [Part](primer-part-class.md) ID. |
| sid | integer | Isogeometric Shell (patch) ID. |

| Returns
<br>[IGAShell](primer-igashell-class.md) object<br>
Return type
<br>IGAShell |
| --- |

| Example
<br>To create a new IGA shell in model m using sid 10, part id 100:<br>
```
var igsh = new IGAShell(m, {sid: 10, pid: 100});
```
<br>To create a new IGA shell in model m using sid 20, part id 200 with nisr as 3.3, niss as 4.4 and idfne as 50:<br>
```
var igsh = new IGAShell(m, {sid: 20, pid: 200, nisr: 3.3, niss: 4.4, idfne: 50});
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a IGA Shell. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the IGA Shell

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the IGA Shell igsh:<br>
```
igsh.AssociateComment(c);
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
<br>To Browse IGA Shell igsh:<br>
```
igsh.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the IGA Shell. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the IGA Shell

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for IGA Shell igsh:<br>
```
igsh.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the IGA Shell. The target include of the copied IGA Shell can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>IGAShell object<br>
Return type
<br>IGAShell |
| --- |

| Example
<br>To copy IGA Shell igsh into IGA Shell z:<br>
```
var z = igsh.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a IGA Shell |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the IGA Shell will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>IGAShell object (or null if not made).<br>
Return type
<br>IGAShell |
| --- |

| Example
<br>To start creating a IGA Shell in model m:<br>
```
var igsh = IGAShell.Create(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a IGA Shell. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the IGA Shell

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the IGA Shell igsh:<br>
```
igsh.DetachComment(c);
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
<br>To Edit IGA Shell igsh:<br>
```
igsh.Edit();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for IGA Shell. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for IGA Shell igsh:<br>
```
igsh.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first IGA Shell in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first IGA Shell in

| Returns
<br>IGAShell object (or null if there are no IGA Shells in the model).<br>
Return type
<br>IGAShell |
| --- |

| Example
<br>To get the first IGA Shell in model m:<br>
```
var igsh = IGAShell.First(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the IGA Shells in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all IGA Shells will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the IGA Shells

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the IGA Shells with flag f in model m:<br>
```
IGAShell.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the IGA Shell is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the IGA Shell

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if IGA Shell igsh has flag f set on it:<br>
```
if (igsh.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each IGA Shell in the model.<br> **Note that ForEach has been designed to make looping over IGA Shells as fast as possible and so has some limitations. Firstly, a single temporary IGAShell object is created and on each function call it is updated with the current IGA Shell data. This means that you should not try to store the IGAShell object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new IGA Shells inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all IGA Shells are in

* func (function)
 
Function to call for each IGA Shell

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the IGA Shells in model m:<br>
```
IGAShell.ForEach(m, test);
function test(igsh)
{
// igsh is IGAShell object
}
```
<br><br>To call function test for all of the IGA Shells in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
IGAShell.ForEach(m, test, data);
function test(igsh, extra)
{
// igsh is IGAShell object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of IGAShell objects or properties for all of the IGA Shells in a model in PRIMER. If the optional property argument is not given then an array of IGAShell objects is returned. If the property argument is given, that property value for each IGA Shell is returned in the array instead of a IGAShell object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get IGA Shells from

* property (optional) (string)
 
Name for property to get for all IGA Shells in the model

| Returns
<br>Array of IGAShell objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of IGAShell objects for all of the IGA Shells in model m:<br>
```
var a = IGAShell.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each IGA Shell in model m:<br>
```
var a = IGAShell.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a IGA Shell. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the IGA Shell igsh:<br>
```
var comm_array = igsh.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of IGAShell objects for all of the flagged IGA Shells in a model in PRIMER If the optional property argument is not given then an array of IGAShell objects is returned. If the property argument is given, then that property value for each IGA Shell is returned in the array instead of a IGAShell object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get IGA Shells from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the IGA Shells that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged IGA Shells in the model

| Returns
<br>Array of IGAShell objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of IGAShell objects for all of the IGA Shells in model m flagged with f:<br>
```
var igsh = IGAShell.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the IGA Shells in model m flagged with f:<br>
```
var a = IGAShell.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the IGAShell object for a IGA Shell ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the IGA Shell in

* number (integer)
 
number of the IGA Shell you want the IGAShell object for

| Returns
<br>IGAShell object (or null if IGA Shell does not exist).<br>
Return type
<br>IGAShell |
| --- |

| Example
<br>To get the IGAShell object for IGA Shell 100 in model m<br>
```
var igsh = IGAShell.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a IGAShell property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [IGAShell.ViewParameters()](primer-igashell-class.md#IGAShell::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
IGA Shell property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if IGAShell property igsh.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (igsh.GetParameter(igsh.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if IGAShell property igsh.example is a parameter by using the GetParameter method:<br>
```
if (igsh.ViewParameters().GetParameter(igsh.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this IGA shell (\*IGA\_SHELL). **Note that a carriage return is not added**. See also [IGAShell.KeywordCards()](primer-igashell-class.md#IGAShell::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for IGA shell igs:<br>
```
var key = igs.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the IGA shell. **Note that a carriage return is not added**. See also [IGAShell.Keyword()](primer-igashell-class.md#IGAShell::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for IGA shell igs:<br>
```
var cards = igs.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last IGA Shell in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last IGA Shell in

| Returns
<br>IGAShell object (or null if there are no IGA Shells in the model).<br>
Return type
<br>IGAShell |
| --- |

| Example
<br>To get the last IGA Shell in model m:<br>
```
var igsh = IGAShell.Last(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next IGA Shell in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>IGAShell object (or null if there are no more IGA Shells in the model).<br>
Return type
<br>IGAShell |
| --- |

| Example
<br>To get the IGA Shell in model m after IGA Shell igsh:<br>
```
var igsh = igsh.Next();
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous IGA Shell in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>IGAShell object (or null if there are no more IGA Shells in the model).<br>
Return type
<br>IGAShell |
| --- |

| Example
<br>To get the IGA Shell in model m before IGA Shell igsh:<br>
```
var igsh = igsh.Previous();
```
 |
| --- |

* * *

| RedrawAll(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Redraws all \*IGA\_SHELLs whose graphics are out of date in a specified model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to redraw IGA SHELLs in

| Returns
<br>No return value |
| --- |

| Example
<br>Redraw all out of date \*IGA\_SHELLs following a change to an \*IGA\_SHELL or related IGA entity in model m1:<br>
```
IGAShell.RedrawAll(m1);
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select IGA Shells using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting IGA Shells

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only IGA Shells from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only IGA Shells that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any IGA Shells can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of IGA Shells selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select IGA Shells from model m, flagging those selected with flag f, giving the prompt 'Select IGA Shells':<br>
```
IGAShell.Select(f, 'Select IGA Shells', m);
```
<br><br>To select IGA Shells, flagging those selected with flag f but limiting selection to IGA Shells flagged with flag l, giving the prompt 'Select IGA Shells':<br>
```
IGAShell.Select(f, 'Select IGA Shells', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the IGA Shell. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the IGA Shell

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for IGA Shell igsh:<br>
```
igsh.SetFlag(f);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the IGA Shell. The IGA Shell will be sketched until you either call [IGAShell.Unsketch()](primer-igashell-class.md#IGAShell::Unsketch), [IGAShell.UnsketchAll()](primer-igashell-class.md#IGAShell::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA Shell is sketched. If omitted redraw is true. If you want to sketch several IGA Shells and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch IGA Shell igsh:<br>
```
igsh.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged IGA Shells in the model. The IGA Shells will be sketched until you either call [IGAShell.Unsketch()](primer-igashell-class.md#IGAShell::Unsketch), [IGAShell.UnsketchFlagged()](primer-igashell-class.md#IGAShell::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged IGA Shells will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the IGA Shells that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA Shells are sketched. If omitted redraw is true. If you want to sketch flagged IGA Shells several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all IGA Shells flagged with flag in model m:<br>
```
IGAShell.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of IGA Shells in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing IGA Shells should be counted. If false or omitted
referenced but undefined IGA Shells will also be included in the total.

| Returns
<br>number of IGA Shells<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of IGA Shells in model m:<br>
```
var total = IGAShell.Total(m);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the IGA Shells in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all IGA Shells will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the IGA Shells

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the IGA Shells in model m:<br>
```
IGAShell.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the IGA Shell. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA Shell is unsketched. If omitted redraw is true. If you want to unsketch several IGA Shells and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch IGA Shell igsh:<br>
```
igsh.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all IGA Shells. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all IGA Shells will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA Shells are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all IGA Shells in model m:<br>
```
IGAShell.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged IGA Shells in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all IGA Shells will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the IGA Shells that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA Shells are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all IGA Shells flagged with flag in model m:<br>
```
IGAShell.UnsketchAll(m, flag);
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
<br>[IGAShell](primer-igashell-class.md) object.<br>
Return type
<br>IGAShell |
| --- |

| Example
<br>To check if IGAShell property igsh.example is a parameter by using the [IGAShell.GetParameter()](primer-igashell-class.md#IGAShell::GetParameter) method:<br>
```
if (igsh.ViewParameters().GetParameter(igsh.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for IGA Shell. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for IGA Shell igsh:<br>
```
igsh.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this IGA Shell. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for IGA Shell igsh:<br>
```
var xrefs = igsh.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the IGA shell data in keyword format. Note that this contains the keyword header and the keyword cards. See also [IGAShell.Keyword()](primer-igashell-class.md#IGAShell::Keyword) and [IGAShell.KeywordCards()](primer-igashell-class.md#IGAShell::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for IGA shell igs in keyword format<br>
```
var s = igs.toString();
```
 |
| --- |

* * *