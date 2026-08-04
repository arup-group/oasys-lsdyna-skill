# TieBreak class

The TieBreak class gives you access to constrained Tie-Break cards in PRIMER. [More...](primer-tiebreak-class.md#TieBreak_details)

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

* [BlankAll](primer-tiebreak-class.md#TieBreak::BlankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [BlankFlagged](primer-tiebreak-class.md#TieBreak::BlankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [First](primer-tiebreak-class.md#TieBreak::First)(Model*[[Model](primer-model-class.md)]*)
* [FlagAll](primer-tiebreak-class.md#TieBreak::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-tiebreak-class.md#TieBreak::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-tiebreak-class.md#TieBreak::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-tiebreak-class.md#TieBreak::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-tiebreak-class.md#TieBreak::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-tiebreak-class.md#TieBreak::Last)(Model*[[Model](primer-model-class.md)]*)
* [Pick](primer-tiebreak-class.md#TieBreak::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [Select](primer-tiebreak-class.md#TieBreak::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-tiebreak-class.md#TieBreak::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-tiebreak-class.md#TieBreak::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnblankAll](primer-tiebreak-class.md#TieBreak::UnblankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnblankFlagged](primer-tiebreak-class.md#TieBreak::UnblankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [UnflagAll](primer-tiebreak-class.md#TieBreak::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-tiebreak-class.md#TieBreak::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-tiebreak-class.md#TieBreak::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-tiebreak-class.md#TieBreak::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Blank](primer-tiebreak-class.md#TieBreak::Blank)()
* [Blanked](primer-tiebreak-class.md#TieBreak::Blanked)()
* [ClearFlag](primer-tiebreak-class.md#TieBreak::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-tiebreak-class.md#TieBreak::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-tiebreak-class.md#TieBreak::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Error](primer-tiebreak-class.md#TieBreak::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-tiebreak-class.md#TieBreak::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-tiebreak-class.md#TieBreak::GetComments)()
* [GetParameter](primer-tiebreak-class.md#TieBreak::GetParameter)(prop*[string]*)
* [Keyword](primer-tiebreak-class.md#TieBreak::Keyword)()
* [KeywordCards](primer-tiebreak-class.md#TieBreak::KeywordCards)()
* [Next](primer-tiebreak-class.md#TieBreak::Next)()
* [Previous](primer-tiebreak-class.md#TieBreak::Previous)()
* [SetFlag](primer-tiebreak-class.md#TieBreak::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Sketch](primer-tiebreak-class.md#TieBreak::Sketch)(redraw (optional)*[boolean]*)
* [Unblank](primer-tiebreak-class.md#TieBreak::Unblank)()
* [Unsketch](primer-tiebreak-class.md#TieBreak::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-tiebreak-class.md#TieBreak::ViewParameters)()
* [Warning](primer-tiebreak-class.md#TieBreak::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-tiebreak-class.md#TieBreak::Xrefs)()
* [toString](primer-tiebreak-class.md#TieBreak::toString)()

## TieBreak properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| eppf | real | Plastic strain at failure. |
| exists (read only) | logical | true if tie-break exists, false if referred to but not defined. |
| include | integer | The [Include](primer-include-class.md) file number that the tie-break is in. |
| model (read only) | integer | The [Model](primer-model-class.md) number that the tie-break is in. |
| nsid1 | integer | First [Node Set](primer-set-class.md) ID. |
| nsid2 | integer | Second [Node Set](primer-set-class.md) ID. |

| Detailed Description<br>The TieBreak class allows you to create, modify, edit and manipulate constrained tie-break cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new TieBreak(Model*[[Model](primer-model-class.md)]*, nsid1*[integer]*, nsid2*[integer]*, eppf (optional)*[real]*)

Description<br>Create a new [TieBreak](primer-tiebreak-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that constrained tie-break will be created in

* nsid1 (integer)
 
First [Node Set](primer-set-class.md) ID.

* nsid2 (integer)
 
Second [Node Set](primer-set-class.md) ID.

* eppf (optional) (real)
 
Plastic strain at failure.

| Returns
<br>[TieBreak](primer-tiebreak-class.md) object<br>
Return type
<br>TieBreak |
| --- |

| Example
<br>To create a new constrained tie-break in model m with first node set 100, second node set 200<br>
```
var tb = new TieBreak(m, 100, 200);
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a tie-break. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the tie-break

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the tie-break tb:<br>
```
tb.AssociateComment(c);
```
 |
| --- |

* * *

| Blank()

Description<br>Blanks the tie-break |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To blank tie-break tb:<br>
```
tb.Blank();
```
 |
| --- |

* * *

| BlankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the tie-breaks in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all tie-breaks will be blanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the tie-breaks in model m:<br>
```
TieBreak.BlankAll(m);
```
 |
| --- |

* * *

| BlankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the flagged tie-breaks in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged tie-breaks will be blanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the tie-breaks that you want to blank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the tie-breaks in model m flagged with f:<br>
```
TieBreak.BlankFlagged(m, f);
```
 |
| --- |

* * *

| Blanked()

Description<br>Checks if the tie-break is blanked or not. |
| --- |

#### Arguments

No arguments

| Returns
<br>true if blanked, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if tie-break tb is blanked:<br>
```
if (tb.Blanked() ) do_something...
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the tie-break. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the tie-break

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for tie-break tb:<br>
```
tb.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the tie-break. The target include of the copied tie-break can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>TieBreak object<br>
Return type
<br>TieBreak |
| --- |

| Example
<br>To copy tie-break tb into tie-break z:<br>
```
var z = tb.Copy();
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a tie-break. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the tie-break

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the tie-break tb:<br>
```
tb.DetachComment(c);
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for tie-break. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for tie-break tb:<br>
```
tb.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first tie-break in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first tie-break in

| Returns
<br>TieBreak object (or null if there are no tie-breaks in the model).<br>
Return type
<br>TieBreak |
| --- |

| Example
<br>To get the first tie-break in model m:<br>
```
var tb = TieBreak.First(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the tie-breaks in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all tie-breaks will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the tie-breaks

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the tie-breaks with flag f in model m:<br>
```
TieBreak.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the tie-break is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the tie-break

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if tie-break tb has flag f set on it:<br>
```
if (tb.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each tie-break in the model.<br> **Note that ForEach has been designed to make looping over tie-breaks as fast as possible and so has some limitations. Firstly, a single temporary TieBreak object is created and on each function call it is updated with the current tie-break data. This means that you should not try to store the TieBreak object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new tie-breaks inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all tie-breaks are in

* func (function)
 
Function to call for each tie-break

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the tie-breaks in model m:<br>
```
TieBreak.ForEach(m, test);
function test(tb)
{
// tb is TieBreak object
}
```
<br><br>To call function test for all of the tie-breaks in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
TieBreak.ForEach(m, test, data);
function test(tb, extra)
{
// tb is TieBreak object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of TieBreak objects or properties for all of the tie-breaks in a model in PRIMER. If the optional property argument is not given then an array of TieBreak objects is returned. If the property argument is given, that property value for each tie-break is returned in the array instead of a TieBreak object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get tie-breaks from

* property (optional) (string)
 
Name for property to get for all tie-breaks in the model

| Returns
<br>Array of TieBreak objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of TieBreak objects for all of the tie-breaks in model m:<br>
```
var a = TieBreak.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each tie-break in model m:<br>
```
var a = TieBreak.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a tie-break. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the tie-break tb:<br>
```
var comm_array = tb.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of TieBreak objects for all of the flagged tie-breaks in a model in PRIMER If the optional property argument is not given then an array of TieBreak objects is returned. If the property argument is given, then that property value for each tie-break is returned in the array instead of a TieBreak object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get tie-breaks from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the tie-breaks that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged tie-breaks in the model

| Returns
<br>Array of TieBreak objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of TieBreak objects for all of the tie-breaks in model m flagged with f:<br>
```
var tb = TieBreak.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the tie-breaks in model m flagged with f:<br>
```
var a = TieBreak.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the TieBreak object for a tie-break ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the tie-break in

* number (integer)
 
number of the tie-break you want the TieBreak object for

| Returns
<br>TieBreak object (or null if tie-break does not exist).<br>
Return type
<br>TieBreak |
| --- |

| Example
<br>To get the TieBreak object for tie-break 100 in model m<br>
```
var tb = TieBreak.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a TieBreak property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [TieBreak.ViewParameters()](primer-tiebreak-class.md#TieBreak::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
tie-break property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if TieBreak property tb.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (tb.GetParameter(tb.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if TieBreak property tb.example is a parameter by using the GetParameter method:<br>
```
if (tb.ViewParameters().GetParameter(tb.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this tie-break (\*\*CONSTRAINED\_TIE\_BREAK). **Note that a carriage return is not added**. See also [TieBreak.KeywordCards()](primer-tiebreak-class.md#TieBreak::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for tie-break tb:<br>
```
var key = tb.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the tie-break. **Note that a carriage return is not added**. See also [TieBreak.Keyword()](primer-tiebreak-class.md#TieBreak::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for tie-break tb:<br>
```
var cards = tb.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last tie-break in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last tie-break in

| Returns
<br>TieBreak object (or null if there are no tie-breaks in the model).<br>
Return type
<br>TieBreak |
| --- |

| Example
<br>To get the last tie-break in model m:<br>
```
var tb = TieBreak.Last(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next tie-break in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>TieBreak object (or null if there are no more tie-breaks in the model).<br>
Return type
<br>TieBreak |
| --- |

| Example
<br>To get the tie-break in model m after tie-break tb:<br>
```
var tb = tb.Next();
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a tie-break. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only tie-breaks from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only tie-breaks that are flagged with *limit* can be selected. If omitted, or null, any tie-breaks from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[TieBreak](primer-tiebreak-class.md) object (or null if not picked)<br>
Return type
<br>TieBreak |
| --- |

| Example
<br>To pick a tie-break from model m giving the prompt 'Pick tie-break from screen':<br>
```
var tb = TieBreak.Pick('Pick tie-break from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous tie-break in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>TieBreak object (or null if there are no more tie-breaks in the model).<br>
Return type
<br>TieBreak |
| --- |

| Example
<br>To get the tie-break in model m before tie-break tb:<br>
```
var tb = tb.Previous();
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select tie-breaks using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting tie-breaks

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only tie-breaks from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only tie-breaks that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any tie-breaks can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of tie-breaks selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select tie-breaks from model m, flagging those selected with flag f, giving the prompt 'Select tie-breaks':<br>
```
TieBreak.Select(f, 'Select tie-breaks', m);
```
<br><br>To select tie-breaks, flagging those selected with flag f but limiting selection to tie-breaks flagged with flag l, giving the prompt 'Select tie-breaks':<br>
```
TieBreak.Select(f, 'Select tie-breaks', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the tie-break. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the tie-break

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for tie-break tb:<br>
```
tb.SetFlag(f);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the tie-break. The tie-break will be sketched until you either call [TieBreak.Unsketch()](primer-tiebreak-class.md#TieBreak::Unsketch), [TieBreak.UnsketchAll()](primer-tiebreak-class.md#TieBreak::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the tie-break is sketched. If omitted redraw is true. If you want to sketch several tie-breaks and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch tie-break tb:<br>
```
tb.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged tie-breaks in the model. The tie-breaks will be sketched until you either call [TieBreak.Unsketch()](primer-tiebreak-class.md#TieBreak::Unsketch), [TieBreak.UnsketchFlagged()](primer-tiebreak-class.md#TieBreak::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged tie-breaks will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the tie-breaks that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the tie-breaks are sketched. If omitted redraw is true. If you want to sketch flagged tie-breaks several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all tie-breaks flagged with flag in model m:<br>
```
TieBreak.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of tie-breaks in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing tie-breaks should be counted. If false or omitted
referenced but undefined tie-breaks will also be included in the total.

| Returns
<br>number of tie-breaks<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of tie-breaks in model m:<br>
```
var total = TieBreak.Total(m);
```
 |
| --- |

* * *

| Unblank()

Description<br>Unblanks the tie-break |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank tie-break tb:<br>
```
tb.Unblank();
```
 |
| --- |

* * *

| UnblankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the tie-breaks in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all tie-breaks will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the tie-breaks in model m:<br>
```
TieBreak.UnblankAll(m);
```
 |
| --- |

* * *

| UnblankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the flagged tie-breaks in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the flagged tie-breaks will be unblanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the tie-breaks that you want to unblank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the tie-breaks in model m flagged with f:<br>
```
TieBreak.UnblankFlagged(m, f);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the tie-breaks in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all tie-breaks will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the tie-breaks

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the tie-breaks in model m:<br>
```
TieBreak.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the tie-break. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the tie-break is unsketched. If omitted redraw is true. If you want to unsketch several tie-breaks and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch tie-break tb:<br>
```
tb.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all tie-breaks. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all tie-breaks will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the tie-breaks are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all tie-breaks in model m:<br>
```
TieBreak.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged tie-breaks in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all tie-breaks will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the tie-breaks that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the tie-breaks are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all tie-breaks flagged with flag in model m:<br>
```
TieBreak.UnsketchAll(m, flag);
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
<br>[TieBreak](primer-tiebreak-class.md) object.<br>
Return type
<br>TieBreak |
| --- |

| Example
<br>To check if TieBreak property tb.example is a parameter by using the [TieBreak.GetParameter()](primer-tiebreak-class.md#TieBreak::GetParameter) method:<br>
```
if (tb.ViewParameters().GetParameter(tb.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for tie-break. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for tie-break tb:<br>
```
tb.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this tie-break. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for tie-break tb:<br>
```
var xrefs = tb.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the tie-break data in keyword format. Note that this contains the keyword header and the keyword cards. See also [TieBreak.Keyword()](primer-tiebreak-class.md#TieBreak::Keyword) and [TieBreak.KeywordCards()](primer-tiebreak-class.md#TieBreak::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for tie-break tb in keyword format<br>
```
var str = tb.toString();
```
 |
| --- |

* * *