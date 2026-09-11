# LoadRemovePart class

The LoadRemovePart class gives you access to define \*LOAD\_REMOVE\_PART cards in PRIMER. [More...](primer-loadremovepart-class.md#LoadRemovePart_details)

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

* [BlankAll](primer-loadremovepart-class.md#LoadRemovePart::BlankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [BlankFlagged](primer-loadremovepart-class.md#LoadRemovePart::BlankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [First](primer-loadremovepart-class.md#LoadRemovePart::First)(Model*[[Model](primer-model-class.md)]*)
* [FlagAll](primer-loadremovepart-class.md#LoadRemovePart::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-loadremovepart-class.md#LoadRemovePart::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-loadremovepart-class.md#LoadRemovePart::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-loadremovepart-class.md#LoadRemovePart::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-loadremovepart-class.md#LoadRemovePart::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-loadremovepart-class.md#LoadRemovePart::Last)(Model*[[Model](primer-model-class.md)]*)
* [Pick](primer-loadremovepart-class.md#LoadRemovePart::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [Select](primer-loadremovepart-class.md#LoadRemovePart::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-loadremovepart-class.md#LoadRemovePart::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-loadremovepart-class.md#LoadRemovePart::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnblankAll](primer-loadremovepart-class.md#LoadRemovePart::UnblankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnblankFlagged](primer-loadremovepart-class.md#LoadRemovePart::UnblankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [UnflagAll](primer-loadremovepart-class.md#LoadRemovePart::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-loadremovepart-class.md#LoadRemovePart::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-loadremovepart-class.md#LoadRemovePart::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-loadremovepart-class.md#LoadRemovePart::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Blank](primer-loadremovepart-class.md#LoadRemovePart::Blank)()
* [Blanked](primer-loadremovepart-class.md#LoadRemovePart::Blanked)()
* [ClearFlag](primer-loadremovepart-class.md#LoadRemovePart::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-loadremovepart-class.md#LoadRemovePart::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-loadremovepart-class.md#LoadRemovePart::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Error](primer-loadremovepart-class.md#LoadRemovePart::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-loadremovepart-class.md#LoadRemovePart::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-loadremovepart-class.md#LoadRemovePart::GetComments)()
* [GetParameter](primer-loadremovepart-class.md#LoadRemovePart::GetParameter)(prop*[string]*)
* [Keyword](primer-loadremovepart-class.md#LoadRemovePart::Keyword)()
* [KeywordCards](primer-loadremovepart-class.md#LoadRemovePart::KeywordCards)()
* [Next](primer-loadremovepart-class.md#LoadRemovePart::Next)()
* [Previous](primer-loadremovepart-class.md#LoadRemovePart::Previous)()
* [SetFlag](primer-loadremovepart-class.md#LoadRemovePart::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Sketch](primer-loadremovepart-class.md#LoadRemovePart::Sketch)(redraw (optional)*[boolean]*)
* [Unblank](primer-loadremovepart-class.md#LoadRemovePart::Unblank)()
* [Unsketch](primer-loadremovepart-class.md#LoadRemovePart::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-loadremovepart-class.md#LoadRemovePart::ViewParameters)()
* [Warning](primer-loadremovepart-class.md#LoadRemovePart::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-loadremovepart-class.md#LoadRemovePart::Xrefs)()
* [toString](primer-loadremovepart-class.md#LoadRemovePart::toString)()

## LoadRemovePart constants

| **Name** | **Description** |
| --- | --- |
| LoadRemovePart.PART | LOAD is \*LOAD\_REMOVE\_PART. |
| LoadRemovePart.SET\_PART | LOAD is \*LOAD\_REMOVE\_PART\_SET. |

## LoadRemovePart properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists (read only) | logical | true if load remove\_part exists, false if referred to but not defined. |
| include | integer | The [Include](primer-include-class.md) file number that the load remove\_part is in. |
| model (read only) | integer | The [Model](primer-model-class.md) number that the load remove\_part is in. |
| pid | integer | [Part](primer-part-class.md) ID or [Part Set](primer-set-class.md) ID |
| stgr | integer | [Construction Stages](primer-constructionstages-class.md) ID at which part is removed. |
| time0 | real | Time at which stress reduction starts. |
| time1 | real | Time at which stresses become zero and elements are deleted. |
| type | constant | The Load RemovePart type. Can be [LoadRemovePart.PART](primer-loadremovepart-class.md#LoadRemovePart.PART) or [LoadRemovePart.SET_PART](primer-loadremovepart-class.md#LoadRemovePart.SET_PART). |

| Detailed Description<br>The LoadRemovePart class allows you to create, modify, edit and manipulate \*LOAD\_REMOVE\_PART cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new LoadRemovePart(Model*[[Model](primer-model-class.md)]*, type*[constant]*, pid*[integer]*, time0 (optional)*[real]*, time1 (optional)*[real]*, stgr (optional)*[integer]*)

Description<br>Create a new [LoadRemovePart](primer-loadremovepart-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that LoadRemovePart will be created in

* type (constant)
 
Specify the type of LoadRemovePart (Can be [LoadRemovePart.PART](primer-loadremovepart-class.md#LoadRemovePart.PART) or [LoadRemovePart.SET_PART](primer-loadremovepart-class.md#LoadRemovePart.SET_PART)

* pid (integer)
 
[Part](primer-part-class.md) ID or [Part Set](primer-set-class.md) ID

* time0 (optional) (real)
 
Time at which stress reduction starts.

* time1 (optional) (real)
 
Time at which stresses become zero and elements are deleted.

* stgr (optional) (integer)
 
[Construction Stage](primer-constructionstages-class.md) ID at which part is removed.

| Returns
<br>[LoadRemovePart](primer-loadremovepart-class.md) object<br>
Return type
<br>LoadRemovePart |
| --- |

| Example
<br>To create a new load remove\_part in model m, of type PART, with pid 100, time0 2.5 and time1 4.5.<br>
```
var l_r_p = new LoadRemovePart(m, LoadRemovePart.PART, 100, 2.5, 4.5);
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a load remove\_part. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the load remove\_part

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the load remove\_part l\_r\_p:<br>
```
l_r_p.AssociateComment(c);
```
 |
| --- |

* * *

| Blank()

Description<br>Blanks the load remove\_part |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To blank load remove\_part l\_r\_p:<br>
```
l_r_p.Blank();
```
 |
| --- |

* * *

| BlankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the load remove\_parts in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all load remove\_parts will be blanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the load remove\_parts in model m:<br>
```
LoadRemovePart.BlankAll(m);
```
 |
| --- |

* * *

| BlankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the flagged load remove\_parts in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged load remove\_parts will be blanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the load remove\_parts that you want to blank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the load remove\_parts in model m flagged with f:<br>
```
LoadRemovePart.BlankFlagged(m, f);
```
 |
| --- |

* * *

| Blanked()

Description<br>Checks if the load remove\_part is blanked or not. |
| --- |

#### Arguments

No arguments

| Returns
<br>true if blanked, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if load remove\_part l\_r\_p is blanked:<br>
```
if (l_r_p.Blanked() ) do_something...
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the load remove\_part. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the load remove\_part

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for load remove\_part l\_r\_p:<br>
```
l_r_p.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the load remove\_part. The target include of the copied load remove\_part can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>LoadRemovePart object<br>
Return type
<br>LoadRemovePart |
| --- |

| Example
<br>To copy load remove\_part l\_r\_p into load remove\_part z:<br>
```
var z = l_r_p.Copy();
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a load remove\_part. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the load remove\_part

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the load remove\_part l\_r\_p:<br>
```
l_r_p.DetachComment(c);
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for load remove\_part. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for load remove\_part l\_r\_p:<br>
```
l_r_p.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first load remove\_part in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first load remove\_part in

| Returns
<br>LoadRemovePart object (or null if there are no load remove\_parts in the model).<br>
Return type
<br>LoadRemovePart |
| --- |

| Example
<br>To get the first load remove\_part in model m:<br>
```
var l_r_p = LoadRemovePart.First(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the load remove\_parts in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all load remove\_parts will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the load remove\_parts

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the load remove\_parts with flag f in model m:<br>
```
LoadRemovePart.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the load remove\_part is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the load remove\_part

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if load remove\_part l\_r\_p has flag f set on it:<br>
```
if (l_r_p.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each load remove\_part in the model.<br> **Note that ForEach has been designed to make looping over load remove\_parts as fast as possible and so has some limitations. Firstly, a single temporary LoadRemovePart object is created and on each function call it is updated with the current load remove\_part data. This means that you should not try to store the LoadRemovePart object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new load remove\_parts inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all load remove\_parts are in

* func (function)
 
Function to call for each load remove\_part

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the load remove\_parts in model m:<br>
```
LoadRemovePart.ForEach(m, test);
function test(l_r_p)
{
// l_r_p is LoadRemovePart object
}
```
<br><br>To call function test for all of the load remove\_parts in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
LoadRemovePart.ForEach(m, test, data);
function test(l_r_p, extra)
{
// l_r_p is LoadRemovePart object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of LoadRemovePart objects or properties for all of the load remove\_parts in a model in PRIMER. If the optional property argument is not given then an array of LoadRemovePart objects is returned. If the property argument is given, that property value for each load remove\_part is returned in the array instead of a LoadRemovePart object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get load remove\_parts from

* property (optional) (string)
 
Name for property to get for all load remove\_parts in the model

| Returns
<br>Array of LoadRemovePart objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of LoadRemovePart objects for all of the load remove\_parts in model m:<br>
```
var a = LoadRemovePart.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each load remove\_part in model m:<br>
```
var a = LoadRemovePart.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a load remove\_part. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the load remove\_part l\_r\_p:<br>
```
var comm_array = l_r_p.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of LoadRemovePart objects for all of the flagged load remove\_parts in a model in PRIMER If the optional property argument is not given then an array of LoadRemovePart objects is returned. If the property argument is given, then that property value for each load remove\_part is returned in the array instead of a LoadRemovePart object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get load remove\_parts from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the load remove\_parts that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged load remove\_parts in the model

| Returns
<br>Array of LoadRemovePart objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of LoadRemovePart objects for all of the load remove\_parts in model m flagged with f:<br>
```
var l_r_p = LoadRemovePart.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the load remove\_parts in model m flagged with f:<br>
```
var a = LoadRemovePart.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the LoadRemovePart object for a load remove\_part ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the load remove\_part in

* number (integer)
 
number of the load remove\_part you want the LoadRemovePart object for

| Returns
<br>LoadRemovePart object (or null if load remove\_part does not exist).<br>
Return type
<br>LoadRemovePart |
| --- |

| Example
<br>To get the LoadRemovePart object for load remove\_part 100 in model m<br>
```
var l_r_p = LoadRemovePart.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a LoadRemovePart property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [LoadRemovePart.ViewParameters()](primer-loadremovepart-class.md#LoadRemovePart::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
load remove\_part property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if LoadRemovePart property l\_r\_p.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (l_r_p.GetParameter(l_r_p.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if LoadRemovePart property l\_r\_p.example is a parameter by using the GetParameter method:<br>
```
if (l_r_p.ViewParameters().GetParameter(l_r_p.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this LoadRemovePart (\*LOAD\_REMOVE\_PART). **Note that a carriage return is not added**. See also [LoadRemovePart.KeywordCards()](primer-loadremovepart-class.md#LoadRemovePart::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for LoadRemovePart l\_r\_p:<br>
```
var key = l_r_p.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the LoadRemovePart. **Note that a carriage return is not added**. See also [LoadRemovePart.Keyword()](primer-loadremovepart-class.md#LoadRemovePart::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for LoadRemovePart l\_r\_p:<br>
```
var cards = l_r_p.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last load remove\_part in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last load remove\_part in

| Returns
<br>LoadRemovePart object (or null if there are no load remove\_parts in the model).<br>
Return type
<br>LoadRemovePart |
| --- |

| Example
<br>To get the last load remove\_part in model m:<br>
```
var l_r_p = LoadRemovePart.Last(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next load remove\_part in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>LoadRemovePart object (or null if there are no more load remove\_parts in the model).<br>
Return type
<br>LoadRemovePart |
| --- |

| Example
<br>To get the load remove\_part in model m after load remove\_part l\_r\_p:<br>
```
var l_r_p = l_r_p.Next();
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a load remove\_part. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only load remove\_parts from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only load remove\_parts that are flagged with *limit* can be selected. If omitted, or null, any load remove\_parts from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[LoadRemovePart](primer-loadremovepart-class.md) object (or null if not picked)<br>
Return type
<br>LoadRemovePart |
| --- |

| Example
<br>To pick a load remove\_part from model m giving the prompt 'Pick load remove\_part from screen':<br>
```
var l_r_p = LoadRemovePart.Pick('Pick load remove_part from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous load remove\_part in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>LoadRemovePart object (or null if there are no more load remove\_parts in the model).<br>
Return type
<br>LoadRemovePart |
| --- |

| Example
<br>To get the load remove\_part in model m before load remove\_part l\_r\_p:<br>
```
var l_r_p = l_r_p.Previous();
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select load remove\_parts using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting load remove\_parts

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only load remove\_parts from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only load remove\_parts that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any load remove\_parts can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of load remove\_parts selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select load remove\_parts from model m, flagging those selected with flag f, giving the prompt 'Select load remove\_parts':<br>
```
LoadRemovePart.Select(f, 'Select load remove_parts', m);
```
<br><br>To select load remove\_parts, flagging those selected with flag f but limiting selection to load remove\_parts flagged with flag l, giving the prompt 'Select load remove\_parts':<br>
```
LoadRemovePart.Select(f, 'Select load remove_parts', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the load remove\_part. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the load remove\_part

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for load remove\_part l\_r\_p:<br>
```
l_r_p.SetFlag(f);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the load remove\_part. The load remove\_part will be sketched until you either call [LoadRemovePart.Unsketch()](primer-loadremovepart-class.md#LoadRemovePart::Unsketch), [LoadRemovePart.UnsketchAll()](primer-loadremovepart-class.md#LoadRemovePart::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the load remove\_part is sketched. If omitted redraw is true. If you want to sketch several load remove\_parts and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch load remove\_part l\_r\_p:<br>
```
l_r_p.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged load remove\_parts in the model. The load remove\_parts will be sketched until you either call [LoadRemovePart.Unsketch()](primer-loadremovepart-class.md#LoadRemovePart::Unsketch), [LoadRemovePart.UnsketchFlagged()](primer-loadremovepart-class.md#LoadRemovePart::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged load remove\_parts will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the load remove\_parts that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the load remove\_parts are sketched. If omitted redraw is true. If you want to sketch flagged load remove\_parts several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all load remove\_parts flagged with flag in model m:<br>
```
LoadRemovePart.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of load remove\_parts in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing load remove\_parts should be counted. If false or omitted
referenced but undefined load remove\_parts will also be included in the total.

| Returns
<br>number of load remove\_parts<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of load remove\_parts in model m:<br>
```
var total = LoadRemovePart.Total(m);
```
 |
| --- |

* * *

| Unblank()

Description<br>Unblanks the load remove\_part |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank load remove\_part l\_r\_p:<br>
```
l_r_p.Unblank();
```
 |
| --- |

* * *

| UnblankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the load remove\_parts in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all load remove\_parts will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the load remove\_parts in model m:<br>
```
LoadRemovePart.UnblankAll(m);
```
 |
| --- |

* * *

| UnblankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the flagged load remove\_parts in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the flagged load remove\_parts will be unblanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the load remove\_parts that you want to unblank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the load remove\_parts in model m flagged with f:<br>
```
LoadRemovePart.UnblankFlagged(m, f);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the load remove\_parts in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all load remove\_parts will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the load remove\_parts

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the load remove\_parts in model m:<br>
```
LoadRemovePart.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the load remove\_part. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the load remove\_part is unsketched. If omitted redraw is true. If you want to unsketch several load remove\_parts and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch load remove\_part l\_r\_p:<br>
```
l_r_p.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all load remove\_parts. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all load remove\_parts will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the load remove\_parts are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all load remove\_parts in model m:<br>
```
LoadRemovePart.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged load remove\_parts in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all load remove\_parts will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the load remove\_parts that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the load remove\_parts are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all load remove\_parts flagged with flag in model m:<br>
```
LoadRemovePart.UnsketchAll(m, flag);
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
<br>[LoadRemovePart](primer-loadremovepart-class.md) object.<br>
Return type
<br>LoadRemovePart |
| --- |

| Example
<br>To check if LoadRemovePart property l\_r\_p.example is a parameter by using the [LoadRemovePart.GetParameter()](primer-loadremovepart-class.md#LoadRemovePart::GetParameter) method:<br>
```
if (l_r_p.ViewParameters().GetParameter(l_r_p.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for load remove\_part. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for load remove\_part l\_r\_p:<br>
```
l_r_p.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this load remove\_part. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for load remove\_part l\_r\_p:<br>
```
var xrefs = l_r_p.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the LoadRemovePart data in keyword format. Note that this contains the keyword header and the keyword cards. See also [LoadRemovePart.Keyword()](primer-loadremovepart-class.md#LoadRemovePart::Keyword) and [LoadRemovePart.KeywordCards()](primer-loadremovepart-class.md#LoadRemovePart::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for LoadRemovePart l\_r\_p in keyword format<br>
```
var s = l_r_p.toString();
```
 |
| --- |

* * *