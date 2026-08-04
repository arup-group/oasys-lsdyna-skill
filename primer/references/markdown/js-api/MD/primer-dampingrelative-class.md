# DampingRelative class

The DampingRelative class gives you access to define damping relative cards in PRIMER. [More...](primer-dampingrelative-class.md#DampingRelative_details)

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

* [BlankAll](primer-dampingrelative-class.md#DampingRelative::BlankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [BlankFlagged](primer-dampingrelative-class.md#DampingRelative::BlankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [First](primer-dampingrelative-class.md#DampingRelative::First)(Model*[[Model](primer-model-class.md)]*)
* [FlagAll](primer-dampingrelative-class.md#DampingRelative::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-dampingrelative-class.md#DampingRelative::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-dampingrelative-class.md#DampingRelative::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-dampingrelative-class.md#DampingRelative::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-dampingrelative-class.md#DampingRelative::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-dampingrelative-class.md#DampingRelative::Last)(Model*[[Model](primer-model-class.md)]*)
* [Pick](primer-dampingrelative-class.md#DampingRelative::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [Select](primer-dampingrelative-class.md#DampingRelative::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-dampingrelative-class.md#DampingRelative::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-dampingrelative-class.md#DampingRelative::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnblankAll](primer-dampingrelative-class.md#DampingRelative::UnblankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnblankFlagged](primer-dampingrelative-class.md#DampingRelative::UnblankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [UnflagAll](primer-dampingrelative-class.md#DampingRelative::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-dampingrelative-class.md#DampingRelative::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-dampingrelative-class.md#DampingRelative::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-dampingrelative-class.md#DampingRelative::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Blank](primer-dampingrelative-class.md#DampingRelative::Blank)()
* [Blanked](primer-dampingrelative-class.md#DampingRelative::Blanked)()
* [ClearFlag](primer-dampingrelative-class.md#DampingRelative::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-dampingrelative-class.md#DampingRelative::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-dampingrelative-class.md#DampingRelative::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Error](primer-dampingrelative-class.md#DampingRelative::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-dampingrelative-class.md#DampingRelative::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-dampingrelative-class.md#DampingRelative::GetComments)()
* [GetParameter](primer-dampingrelative-class.md#DampingRelative::GetParameter)(prop*[string]*)
* [Keyword](primer-dampingrelative-class.md#DampingRelative::Keyword)()
* [KeywordCards](primer-dampingrelative-class.md#DampingRelative::KeywordCards)()
* [Next](primer-dampingrelative-class.md#DampingRelative::Next)()
* [Previous](primer-dampingrelative-class.md#DampingRelative::Previous)()
* [SetFlag](primer-dampingrelative-class.md#DampingRelative::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Sketch](primer-dampingrelative-class.md#DampingRelative::Sketch)(redraw (optional)*[boolean]*)
* [Unblank](primer-dampingrelative-class.md#DampingRelative::Unblank)()
* [Unsketch](primer-dampingrelative-class.md#DampingRelative::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-dampingrelative-class.md#DampingRelative::ViewParameters)()
* [Warning](primer-dampingrelative-class.md#DampingRelative::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-dampingrelative-class.md#DampingRelative::Xrefs)()
* [toString](primer-dampingrelative-class.md#DampingRelative::toString)()

## DampingRelative properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| cdamp | real | Fraction of critical damping |
| dv2 | real | Constant for velocity squared term |
| exists (read only) | logical | true if damping relative exists, false if referred to but not defined. |
| freq | real | Target frequency |
| include | integer | The [Include](primer-include-class.md) file number that the damping relative is in. |
| lcid | integer | Fraction of cricitcal damping vs time |
| model (read only) | integer | The [Model](primer-model-class.md) number that the damping relative is in. |
| pidrb | integer | [Part](primer-part-class.md) Rigid body ID |
| psid | integer | [Set](primer-set-class.md) Part set ID. |

| Detailed Description<br>The DampingRelative class allows you to create, modify, edit and manipulate damping\_relative cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new DampingRelative(Model*[[Model](primer-model-class.md)]*, pidrb*[integer]*, psid*[integer]*, cdamp (optional)*[real]*, freq (optional)*[real]*, dv2 (optional)*[real]*, lcid (optional)*[integer]*)

Description<br>Create a new [DampingRelative](primer-dampingrelative-class.md) object for \*DAMPING\_RELATIVE. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that damping relative will be created in

* pidrb (integer)
 
[Part](primer-part-class.md) Rigid body ID

* psid (integer)
 
[Set](primer-set-class.md) Part set ID.

* cdamp (optional) (real)
 
Fraction of critical damping

* freq (optional) (real)
 
Target frequency

* dv2 (optional) (real)
 
Constant for velocity squared term

* lcid (optional) (integer)
 
Fraction of cricitcal damping vs time

| Returns
<br>[DampingRelative](primer-dampingrelative-class.md) object<br>
Return type
<br>DampingRelative |
| --- |

| Example
<br>To create a new damping relative (of no type) in model m with pidrb, psid, cdamp, freq, dv2, lcid set to 10, 20, 3.5, 4.5, 5.5, 60 respectively:<br>
```
var r = new DampingRelative(m, 10, 20, 3.5, 4.5, 5.5, 60);
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a damping relative. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the damping relative

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the damping relative r:<br>
```
r.AssociateComment(c);
```
 |
| --- |

* * *

| Blank()

Description<br>Blanks the damping relative |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To blank damping relative r:<br>
```
r.Blank();
```
 |
| --- |

* * *

| BlankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the damping relatives in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all damping relatives will be blanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the damping relatives in model m:<br>
```
DampingRelative.BlankAll(m);
```
 |
| --- |

* * *

| BlankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the flagged damping relatives in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged damping relatives will be blanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the damping relatives that you want to blank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the damping relatives in model m flagged with f:<br>
```
DampingRelative.BlankFlagged(m, f);
```
 |
| --- |

* * *

| Blanked()

Description<br>Checks if the damping relative is blanked or not. |
| --- |

#### Arguments

No arguments

| Returns
<br>true if blanked, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if damping relative r is blanked:<br>
```
if (r.Blanked() ) do_something...
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the damping relative. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the damping relative

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for damping relative r:<br>
```
r.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the damping relative. The target include of the copied damping relative can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>DampingRelative object<br>
Return type
<br>DampingRelative |
| --- |

| Example
<br>To copy damping relative r into damping relative z:<br>
```
var z = r.Copy();
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a damping relative. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the damping relative

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the damping relative r:<br>
```
r.DetachComment(c);
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for damping relative. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for damping relative r:<br>
```
r.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first damping relative in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first damping relative in

| Returns
<br>DampingRelative object (or null if there are no damping relatives in the model).<br>
Return type
<br>DampingRelative |
| --- |

| Example
<br>To get the first damping relative in model m:<br>
```
var r = DampingRelative.First(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the damping relatives in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all damping relatives will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the damping relatives

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the damping relatives with flag f in model m:<br>
```
DampingRelative.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the damping relative is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the damping relative

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if damping relative r has flag f set on it:<br>
```
if (r.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each damping relative in the model.<br> **Note that ForEach has been designed to make looping over damping relatives as fast as possible and so has some limitations. Firstly, a single temporary DampingRelative object is created and on each function call it is updated with the current damping relative data. This means that you should not try to store the DampingRelative object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new damping relatives inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all damping relatives are in

* func (function)
 
Function to call for each damping relative

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the damping relatives in model m:<br>
```
DampingRelative.ForEach(m, test);
function test(r)
{
// r is DampingRelative object
}
```
<br><br>To call function test for all of the damping relatives in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
DampingRelative.ForEach(m, test, data);
function test(r, extra)
{
// r is DampingRelative object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of DampingRelative objects or properties for all of the damping relatives in a model in PRIMER. If the optional property argument is not given then an array of DampingRelative objects is returned. If the property argument is given, that property value for each damping relative is returned in the array instead of a DampingRelative object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get damping relatives from

* property (optional) (string)
 
Name for property to get for all damping relatives in the model

| Returns
<br>Array of DampingRelative objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of DampingRelative objects for all of the damping relatives in model m:<br>
```
var a = DampingRelative.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each damping relative in model m:<br>
```
var a = DampingRelative.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a damping relative. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the damping relative r:<br>
```
var comm_array = r.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of DampingRelative objects for all of the flagged damping relatives in a model in PRIMER If the optional property argument is not given then an array of DampingRelative objects is returned. If the property argument is given, then that property value for each damping relative is returned in the array instead of a DampingRelative object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get damping relatives from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the damping relatives that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged damping relatives in the model

| Returns
<br>Array of DampingRelative objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of DampingRelative objects for all of the damping relatives in model m flagged with f:<br>
```
var r = DampingRelative.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the damping relatives in model m flagged with f:<br>
```
var a = DampingRelative.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the DampingRelative object for a damping relative ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the damping relative in

* number (integer)
 
number of the damping relative you want the DampingRelative object for

| Returns
<br>DampingRelative object (or null if damping relative does not exist).<br>
Return type
<br>DampingRelative |
| --- |

| Example
<br>To get the DampingRelative object for damping relative 100 in model m<br>
```
var r = DampingRelative.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a DampingRelative property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [DampingRelative.ViewParameters()](primer-dampingrelative-class.md#DampingRelative::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
damping relative property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if DampingRelative property r.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (r.GetParameter(r.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if DampingRelative property r.example is a parameter by using the GetParameter method:<br>
```
if (r.ViewParameters().GetParameter(r.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this damping relative (\*DAMPING\_RELATIVE). **Note that a carriage return is not added**. See also [DampingRelative.KeywordCards()](primer-dampingrelative-class.md#DampingRelative::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for damping relative m:<br>
```
var key = r.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the damping relative. **Note that a carriage return is not added**. See also [DampingRelative.Keyword()](primer-dampingrelative-class.md#DampingRelative::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for damping relative fr:<br>
```
var cards = r.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last damping relative in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last damping relative in

| Returns
<br>DampingRelative object (or null if there are no damping relatives in the model).<br>
Return type
<br>DampingRelative |
| --- |

| Example
<br>To get the last damping relative in model m:<br>
```
var r = DampingRelative.Last(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next damping relative in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>DampingRelative object (or null if there are no more damping relatives in the model).<br>
Return type
<br>DampingRelative |
| --- |

| Example
<br>To get the damping relative in model m after damping relative r:<br>
```
var r = r.Next();
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a damping relative. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only damping relatives from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only damping relatives that are flagged with *limit* can be selected. If omitted, or null, any damping relatives from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[DampingRelative](primer-dampingrelative-class.md) object (or null if not picked)<br>
Return type
<br>DampingRelative |
| --- |

| Example
<br>To pick a damping relative from model m giving the prompt 'Pick damping relative from screen':<br>
```
var r = DampingRelative.Pick('Pick damping relative from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous damping relative in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>DampingRelative object (or null if there are no more damping relatives in the model).<br>
Return type
<br>DampingRelative |
| --- |

| Example
<br>To get the damping relative in model m before damping relative r:<br>
```
var r = r.Previous();
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select damping relatives using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting damping relatives

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only damping relatives from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only damping relatives that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any damping relatives can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of damping relatives selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select damping relatives from model m, flagging those selected with flag f, giving the prompt 'Select damping relatives':<br>
```
DampingRelative.Select(f, 'Select damping relatives', m);
```
<br><br>To select damping relatives, flagging those selected with flag f but limiting selection to damping relatives flagged with flag l, giving the prompt 'Select damping relatives':<br>
```
DampingRelative.Select(f, 'Select damping relatives', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the damping relative. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the damping relative

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for damping relative r:<br>
```
r.SetFlag(f);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the damping relative. The damping relative will be sketched until you either call [DampingRelative.Unsketch()](primer-dampingrelative-class.md#DampingRelative::Unsketch), [DampingRelative.UnsketchAll()](primer-dampingrelative-class.md#DampingRelative::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the damping relative is sketched. If omitted redraw is true. If you want to sketch several damping relatives and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch damping relative r:<br>
```
r.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged damping relatives in the model. The damping relatives will be sketched until you either call [DampingRelative.Unsketch()](primer-dampingrelative-class.md#DampingRelative::Unsketch), [DampingRelative.UnsketchFlagged()](primer-dampingrelative-class.md#DampingRelative::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged damping relatives will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the damping relatives that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the damping relatives are sketched. If omitted redraw is true. If you want to sketch flagged damping relatives several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all damping relatives flagged with flag in model m:<br>
```
DampingRelative.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of damping relatives in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing damping relatives should be counted. If false or omitted
referenced but undefined damping relatives will also be included in the total.

| Returns
<br>number of damping relatives<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of damping relatives in model m:<br>
```
var total = DampingRelative.Total(m);
```
 |
| --- |

* * *

| Unblank()

Description<br>Unblanks the damping relative |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank damping relative r:<br>
```
r.Unblank();
```
 |
| --- |

* * *

| UnblankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the damping relatives in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all damping relatives will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the damping relatives in model m:<br>
```
DampingRelative.UnblankAll(m);
```
 |
| --- |

* * *

| UnblankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the flagged damping relatives in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the flagged damping relatives will be unblanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the damping relatives that you want to unblank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the damping relatives in model m flagged with f:<br>
```
DampingRelative.UnblankFlagged(m, f);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the damping relatives in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all damping relatives will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the damping relatives

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the damping relatives in model m:<br>
```
DampingRelative.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the damping relative. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the damping relative is unsketched. If omitted redraw is true. If you want to unsketch several damping relatives and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch damping relative r:<br>
```
r.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all damping relatives. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all damping relatives will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the damping relatives are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all damping relatives in model m:<br>
```
DampingRelative.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged damping relatives in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all damping relatives will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the damping relatives that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the damping relatives are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all damping relatives flagged with flag in model m:<br>
```
DampingRelative.UnsketchAll(m, flag);
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
<br>[DampingRelative](primer-dampingrelative-class.md) object.<br>
Return type
<br>DampingRelative |
| --- |

| Example
<br>To check if DampingRelative property r.example is a parameter by using the [DampingRelative.GetParameter()](primer-dampingrelative-class.md#DampingRelative::GetParameter) method:<br>
```
if (r.ViewParameters().GetParameter(r.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for damping relative. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for damping relative r:<br>
```
r.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this damping relative. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for damping relative r:<br>
```
var xrefs = r.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the damping relative data in keyword format. Note that this contains the keyword header and the keyword cards. See also [DampingRelative.Keyword()](primer-dampingrelative-class.md#DampingRelative::Keyword) and [DampingRelative.KeywordCards()](primer-dampingrelative-class.md#DampingRelative::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for damping relative r in keyword format<br>
```
var s = r.toString();
```
 |
| --- |

* * *