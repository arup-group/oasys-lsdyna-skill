# LoadShell class

The LoadShell class gives you access to define \*LOAD\_SHELL cards in PRIMER. [More...](primer-loadshell-class.md#LoadShell_details)

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

* [BlankAll](primer-loadshell-class.md#LoadShell::BlankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [BlankFlagged](primer-loadshell-class.md#LoadShell::BlankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [First](primer-loadshell-class.md#LoadShell::First)(Model*[[Model](primer-model-class.md)]*)
* [FirstFreeLabel](primer-loadshell-class.md#LoadShell::FirstFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [FlagAll](primer-loadshell-class.md#LoadShell::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-loadshell-class.md#LoadShell::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-loadshell-class.md#LoadShell::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-loadshell-class.md#LoadShell::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-loadshell-class.md#LoadShell::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-loadshell-class.md#LoadShell::Last)(Model*[[Model](primer-model-class.md)]*)
* [LastFreeLabel](primer-loadshell-class.md#LoadShell::LastFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [NextFreeLabel](primer-loadshell-class.md#LoadShell::NextFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [Pick](primer-loadshell-class.md#LoadShell::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [RenumberAll](primer-loadshell-class.md#LoadShell::RenumberAll)(Model*[[Model](primer-model-class.md)]*, start*[integer]*)
* [RenumberFlagged](primer-loadshell-class.md#LoadShell::RenumberFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*)
* [Select](primer-loadshell-class.md#LoadShell::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-loadshell-class.md#LoadShell::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-loadshell-class.md#LoadShell::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnblankAll](primer-loadshell-class.md#LoadShell::UnblankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnblankFlagged](primer-loadshell-class.md#LoadShell::UnblankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [UnflagAll](primer-loadshell-class.md#LoadShell::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-loadshell-class.md#LoadShell::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-loadshell-class.md#LoadShell::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-loadshell-class.md#LoadShell::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Blank](primer-loadshell-class.md#LoadShell::Blank)()
* [Blanked](primer-loadshell-class.md#LoadShell::Blanked)()
* [ClearFlag](primer-loadshell-class.md#LoadShell::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-loadshell-class.md#LoadShell::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-loadshell-class.md#LoadShell::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Error](primer-loadshell-class.md#LoadShell::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-loadshell-class.md#LoadShell::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-loadshell-class.md#LoadShell::GetComments)()
* [GetParameter](primer-loadshell-class.md#LoadShell::GetParameter)(prop*[string]*)
* [Keyword](primer-loadshell-class.md#LoadShell::Keyword)()
* [KeywordCards](primer-loadshell-class.md#LoadShell::KeywordCards)()
* [Next](primer-loadshell-class.md#LoadShell::Next)()
* [Previous](primer-loadshell-class.md#LoadShell::Previous)()
* [SetFlag](primer-loadshell-class.md#LoadShell::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Sketch](primer-loadshell-class.md#LoadShell::Sketch)(redraw (optional)*[boolean]*)
* [Unblank](primer-loadshell-class.md#LoadShell::Unblank)()
* [Unsketch](primer-loadshell-class.md#LoadShell::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-loadshell-class.md#LoadShell::ViewParameters)()
* [Warning](primer-loadshell-class.md#LoadShell::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-loadshell-class.md#LoadShell::Xrefs)()
* [toString](primer-loadshell-class.md#LoadShell::toString)()

## LoadShell constants

| **Name** | **Description** |
| --- | --- |
| LoadShell.ELEMENT | Load is \*LOAD\_SHELL\_ELEMENT. |
| LoadShell.SET | LOAD is \*LOAD\_SHELL\_SET. |

## LoadShell properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| at | real | Arrival time for pressure |
| eid | integer | [Shell](primer-shell-class.md) ID or shell set ID |
| exists (read only) | logical | true if load shell exists, false if referred to but not defined. |
| heading | string | [LoadShell](primer-loadshell-class.md) heading |
| id | logical | true if \_ID option is set, false if not |
| include | integer | The [Include](primer-include-class.md) file number that the load shell is in. |
| label | integer | [LoadShell](primer-loadshell-class.md) number. |
| lcid | integer | [Curve](primer-curve-class.md) ID |
| lsid | integer | [LoadShell](primer-loadshell-class.md) number (identical to label). |
| model (read only) | integer | The [Model](primer-model-class.md) number that the load shell is in. |
| sf | real | Curve scale factor |
| type | constant | The Load Node type. Can be [LoadShell.ELEMENT](primer-loadshell-class.md#LoadShell.ELEMENT) or [LoadShell.SET](primer-loadshell-class.md#LoadShell.SET). |

| Detailed Description<br>The LoadShell class allows you to create, modify, edit and manipulate \*LOAD\_SHELL cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new LoadShell(Model*[[Model](primer-model-class.md)]*, type*[constant]*, eid*[integer]*, lcid*[integer]*, sf (optional)*[real]*, at (optional)*[real]*, lsid (optional)*[integer]*, heading (optional)*[string]*)

Description<br>Create a new [LoadShell](primer-loadshell-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that LoadShell will be created in

* type (constant)
 
Specify the type of LoadShell (Can be [LoadShell.ELEMENT](primer-loadshell-class.md#LoadShell.ELEMENT) or [LoadShell.SET](primer-loadshell-class.md#LoadShell.SET))

* eid (integer)
 
[Shell](primer-shell-class.md) ID or shell set ID

* lcid (integer)
 
[Curve](primer-curve-class.md) ID

* sf (optional) (real)
 
Curve scale factor

* at (optional) (real)
 
Arrival time for pressure

* lsid (optional) (integer)
 
[LoadShell](primer-loadshell-class.md) number

* heading (optional) (string)
 
Title for the LoadShell

| Returns
<br>[LoadShell](primer-loadshell-class.md) object<br>
Return type
<br>LoadShell |
| --- |

| Example
<br>To create a new load shell in model m, of type SET, with loadcurve 9 and a scale factor of 0.5<br>
```
var b = new LoadShell(m, LoadShell.SET, 100, 2, 9, 0.5);
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a load shell. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the load shell

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the load shell ls:<br>
```
ls.AssociateComment(c);
```
 |
| --- |

* * *

| Blank()

Description<br>Blanks the load shell |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To blank load shell ls:<br>
```
ls.Blank();
```
 |
| --- |

* * *

| BlankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the load shells in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all load shells will be blanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the load shells in model m:<br>
```
LoadShell.BlankAll(m);
```
 |
| --- |

* * *

| BlankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the flagged load shells in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged load shells will be blanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the load shells that you want to blank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the load shells in model m flagged with f:<br>
```
LoadShell.BlankFlagged(m, f);
```
 |
| --- |

* * *

| Blanked()

Description<br>Checks if the load shell is blanked or not. |
| --- |

#### Arguments

No arguments

| Returns
<br>true if blanked, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if load shell ls is blanked:<br>
```
if (ls.Blanked() ) do_something...
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the load shell. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the load shell

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for load shell ls:<br>
```
ls.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the load shell. The target include of the copied load shell can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>LoadShell object<br>
Return type
<br>LoadShell |
| --- |

| Example
<br>To copy load shell ls into load shell z:<br>
```
var z = ls.Copy();
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a load shell. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the load shell

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the load shell ls:<br>
```
ls.DetachComment(c);
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for load shell. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for load shell ls:<br>
```
ls.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first load shell in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first load shell in

| Returns
<br>LoadShell object (or null if there are no load shells in the model).<br>
Return type
<br>LoadShell |
| --- |

| Example
<br>To get the first load shell in model m:<br>
```
var ls = LoadShell.First(m);
```
 |
| --- |

* * *

| FirstFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the first free load shell label in the model. Also see [LoadShell.LastFreeLabel()](primer-loadshell-class.md#LoadShell::LastFreeLabel), [LoadShell.NextFreeLabel()](primer-loadshell-class.md#LoadShell::NextFreeLabel) and [Model.FirstFreeItemLabel()](primer-model-class.md#Model::FirstFreeItemLabel). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first free load shell label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *First free in layer* in editing panels). If omitted the whole model will be used (Equivalent to *First free* in editing panels).

| Returns
<br>LoadShell label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the first free load shell label in model m:<br>
```
var label = LoadShell.FirstFreeLabel(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the load shells in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all load shells will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the load shells

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the load shells with flag f in model m:<br>
```
LoadShell.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the load shell is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the load shell

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if load shell ls has flag f set on it:<br>
```
if (ls.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each load shell in the model.<br> **Note that ForEach has been designed to make looping over load shells as fast as possible and so has some limitations. Firstly, a single temporary LoadShell object is created and on each function call it is updated with the current load shell data. This means that you should not try to store the LoadShell object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new load shells inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all load shells are in

* func (function)
 
Function to call for each load shell

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the load shells in model m:<br>
```
LoadShell.ForEach(m, test);
function test(ls)
{
// ls is LoadShell object
}
```
<br><br>To call function test for all of the load shells in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
LoadShell.ForEach(m, test, data);
function test(ls, extra)
{
// ls is LoadShell object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of LoadShell objects or properties for all of the load shells in a model in PRIMER. If the optional property argument is not given then an array of LoadShell objects is returned. If the property argument is given, that property value for each load shell is returned in the array instead of a LoadShell object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get load shells from

* property (optional) (string)
 
Name for property to get for all load shells in the model

| Returns
<br>Array of LoadShell objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of LoadShell objects for all of the load shells in model m:<br>
```
var a = LoadShell.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each load shell in model m:<br>
```
var a = LoadShell.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a load shell. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the load shell ls:<br>
```
var comm_array = ls.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of LoadShell objects for all of the flagged load shells in a model in PRIMER If the optional property argument is not given then an array of LoadShell objects is returned. If the property argument is given, then that property value for each load shell is returned in the array instead of a LoadShell object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get load shells from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the load shells that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged load shells in the model

| Returns
<br>Array of LoadShell objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of LoadShell objects for all of the load shells in model m flagged with f:<br>
```
var ls = LoadShell.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the load shells in model m flagged with f:<br>
```
var a = LoadShell.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the LoadShell object for a load shell ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the load shell in

* number (integer)
 
number of the load shell you want the LoadShell object for

| Returns
<br>LoadShell object (or null if load shell does not exist).<br>
Return type
<br>LoadShell |
| --- |

| Example
<br>To get the LoadShell object for load shell 100 in model m<br>
```
var ls = LoadShell.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a LoadShell property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [LoadShell.ViewParameters()](primer-loadshell-class.md#LoadShell::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
load shell property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if LoadShell property ls.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (ls.GetParameter(ls.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if LoadShell property ls.example is a parameter by using the GetParameter method:<br>
```
if (ls.ViewParameters().GetParameter(ls.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this LoadShell (\*LOAD\_SHELL\_xxxx). **Note that a carriage return is not added**. See also [LoadShell.KeywordCards()](primer-loadshell-class.md#LoadShell::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for LoadShell m:<br>
```
var key = m.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the LoadShell. **Note that a carriage return is not added**. See also [LoadShell.Keyword()](primer-loadshell-class.md#LoadShell::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for LoadShell l:<br>
```
var cards = l.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last load shell in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last load shell in

| Returns
<br>LoadShell object (or null if there are no load shells in the model).<br>
Return type
<br>LoadShell |
| --- |

| Example
<br>To get the last load shell in model m:<br>
```
var ls = LoadShell.Last(m);
```
 |
| --- |

* * *

| LastFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the last free load shell label in the model. Also see [LoadShell.FirstFreeLabel()](primer-loadshell-class.md#LoadShell::FirstFreeLabel), [LoadShell.NextFreeLabel()](primer-loadshell-class.md#LoadShell::NextFreeLabel) and see [Model.LastFreeItemLabel()](primer-model-class.md#Model::LastFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last free load shell label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest free in layer* in editing panels). If omitted the whole model will be used.

| Returns
<br>LoadShell label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the last free load shell label in model m:<br>
```
var label = LoadShell.LastFreeLabel(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next load shell in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>LoadShell object (or null if there are no more load shells in the model).<br>
Return type
<br>LoadShell |
| --- |

| Example
<br>To get the load shell in model m after load shell ls:<br>
```
var ls = ls.Next();
```
 |
| --- |

* * *

| NextFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the next free (highest+1) load shell label in the model. Also see [LoadShell.FirstFreeLabel()](primer-loadshell-class.md#LoadShell::FirstFreeLabel), [LoadShell.LastFreeLabel()](primer-loadshell-class.md#LoadShell::LastFreeLabel) and [Model.NextFreeItemLabel()](primer-model-class.md#Model::NextFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get next free load shell label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest+1 in layer* in editing panels). If omitted the whole model will be used (Equivalent to *Highest+1* in editing panels).

| Returns
<br>LoadShell label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the next free load shell label in model m:<br>
```
var label = LoadShell.NextFreeLabel(m);
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a load shell. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only load shells from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only load shells that are flagged with *limit* can be selected. If omitted, or null, any load shells from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[LoadShell](primer-loadshell-class.md) object (or null if not picked)<br>
Return type
<br>LoadShell |
| --- |

| Example
<br>To pick a load shell from model m giving the prompt 'Pick load shell from screen':<br>
```
var ls = LoadShell.Pick('Pick load shell from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous load shell in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>LoadShell object (or null if there are no more load shells in the model).<br>
Return type
<br>LoadShell |
| --- |

| Example
<br>To get the load shell in model m before load shell ls:<br>
```
var ls = ls.Previous();
```
 |
| --- |

* * *

| RenumberAll(Model*[[Model](primer-model-class.md)]*, start*[integer]*) [static]
Description<br>Renumbers all of the load shells in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all load shells will be renumbered in

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the load shells in model m, from 1000000:<br>
```
LoadShell.RenumberAll(m, 1000000);
```
 |
| --- |

* * *

| RenumberFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*) [static]
Description<br>Renumbers all of the flagged load shells in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged load shells will be renumbered in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the load shells that you want to renumber

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the load shells in model m flagged with f, from 1000000:<br>
```
LoadShell.RenumberFlagged(m, f, 1000000);
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select load shells using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting load shells

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only load shells from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only load shells that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any load shells can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of load shells selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select load shells from model m, flagging those selected with flag f, giving the prompt 'Select load shells':<br>
```
LoadShell.Select(f, 'Select load shells', m);
```
<br><br>To select load shells, flagging those selected with flag f but limiting selection to load shells flagged with flag l, giving the prompt 'Select load shells':<br>
```
LoadShell.Select(f, 'Select load shells', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the load shell. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the load shell

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for load shell ls:<br>
```
ls.SetFlag(f);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the load shell. The load shell will be sketched until you either call [LoadShell.Unsketch()](primer-loadshell-class.md#LoadShell::Unsketch), [LoadShell.UnsketchAll()](primer-loadshell-class.md#LoadShell::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the load shell is sketched. If omitted redraw is true. If you want to sketch several load shells and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch load shell ls:<br>
```
ls.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged load shells in the model. The load shells will be sketched until you either call [LoadShell.Unsketch()](primer-loadshell-class.md#LoadShell::Unsketch), [LoadShell.UnsketchFlagged()](primer-loadshell-class.md#LoadShell::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged load shells will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the load shells that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the load shells are sketched. If omitted redraw is true. If you want to sketch flagged load shells several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all load shells flagged with flag in model m:<br>
```
LoadShell.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of load shells in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing load shells should be counted. If false or omitted
referenced but undefined load shells will also be included in the total.

| Returns
<br>number of load shells<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of load shells in model m:<br>
```
var total = LoadShell.Total(m);
```
 |
| --- |

* * *

| Unblank()

Description<br>Unblanks the load shell |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank load shell ls:<br>
```
ls.Unblank();
```
 |
| --- |

* * *

| UnblankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the load shells in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all load shells will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the load shells in model m:<br>
```
LoadShell.UnblankAll(m);
```
 |
| --- |

* * *

| UnblankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the flagged load shells in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the flagged load shells will be unblanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the load shells that you want to unblank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the load shells in model m flagged with f:<br>
```
LoadShell.UnblankFlagged(m, f);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the load shells in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all load shells will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the load shells

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the load shells in model m:<br>
```
LoadShell.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the load shell. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the load shell is unsketched. If omitted redraw is true. If you want to unsketch several load shells and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch load shell ls:<br>
```
ls.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all load shells. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all load shells will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the load shells are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all load shells in model m:<br>
```
LoadShell.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged load shells in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all load shells will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the load shells that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the load shells are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all load shells flagged with flag in model m:<br>
```
LoadShell.UnsketchAll(m, flag);
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
<br>[LoadShell](primer-loadshell-class.md) object.<br>
Return type
<br>LoadShell |
| --- |

| Example
<br>To check if LoadShell property ls.example is a parameter by using the [LoadShell.GetParameter()](primer-loadshell-class.md#LoadShell::GetParameter) method:<br>
```
if (ls.ViewParameters().GetParameter(ls.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for load shell. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for load shell ls:<br>
```
ls.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this load shell. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for load shell ls:<br>
```
var xrefs = ls.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the LoadShell data in keyword format. Note that this contains the keyword header and the keyword cards. See also [LoadShell.Keyword()](primer-loadshell-class.md#LoadShell::Keyword) and [LoadShell.KeywordCards()](primer-loadshell-class.md#LoadShell::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for LoadShell l in keyword format<br>
```
var s = l.toString();
```
 |
| --- |

* * *