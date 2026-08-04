# LoadGravity class

The LoadGravity class gives you access to define \*LOAD\_GRAVITY\_PART cards in PRIMER. [More...](primer-loadgravity-class.md#LoadGravity_details)

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

* [BlankAll](primer-loadgravity-class.md#LoadGravity::BlankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [BlankFlagged](primer-loadgravity-class.md#LoadGravity::BlankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [First](primer-loadgravity-class.md#LoadGravity::First)(Model*[[Model](primer-model-class.md)]*)
* [FlagAll](primer-loadgravity-class.md#LoadGravity::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-loadgravity-class.md#LoadGravity::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-loadgravity-class.md#LoadGravity::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-loadgravity-class.md#LoadGravity::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-loadgravity-class.md#LoadGravity::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-loadgravity-class.md#LoadGravity::Last)(Model*[[Model](primer-model-class.md)]*)
* [Pick](primer-loadgravity-class.md#LoadGravity::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [Select](primer-loadgravity-class.md#LoadGravity::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-loadgravity-class.md#LoadGravity::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-loadgravity-class.md#LoadGravity::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnblankAll](primer-loadgravity-class.md#LoadGravity::UnblankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnblankFlagged](primer-loadgravity-class.md#LoadGravity::UnblankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [UnflagAll](primer-loadgravity-class.md#LoadGravity::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-loadgravity-class.md#LoadGravity::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-loadgravity-class.md#LoadGravity::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-loadgravity-class.md#LoadGravity::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Blank](primer-loadgravity-class.md#LoadGravity::Blank)()
* [Blanked](primer-loadgravity-class.md#LoadGravity::Blanked)()
* [ClearFlag](primer-loadgravity-class.md#LoadGravity::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-loadgravity-class.md#LoadGravity::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-loadgravity-class.md#LoadGravity::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Error](primer-loadgravity-class.md#LoadGravity::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-loadgravity-class.md#LoadGravity::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-loadgravity-class.md#LoadGravity::GetComments)()
* [GetParameter](primer-loadgravity-class.md#LoadGravity::GetParameter)(prop*[string]*)
* [Keyword](primer-loadgravity-class.md#LoadGravity::Keyword)()
* [KeywordCards](primer-loadgravity-class.md#LoadGravity::KeywordCards)()
* [Next](primer-loadgravity-class.md#LoadGravity::Next)()
* [Previous](primer-loadgravity-class.md#LoadGravity::Previous)()
* [SetFlag](primer-loadgravity-class.md#LoadGravity::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Sketch](primer-loadgravity-class.md#LoadGravity::Sketch)(redraw (optional)*[boolean]*)
* [Unblank](primer-loadgravity-class.md#LoadGravity::Unblank)()
* [Unsketch](primer-loadgravity-class.md#LoadGravity::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-loadgravity-class.md#LoadGravity::ViewParameters)()
* [Warning](primer-loadgravity-class.md#LoadGravity::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-loadgravity-class.md#LoadGravity::Xrefs)()
* [toString](primer-loadgravity-class.md#LoadGravity::toString)()

## LoadGravity constants

| **Name** | **Description** |
| --- | --- |
| LoadGravity.PART | LOAD is \*LOAD\_GRAVITY\_PART. |
| LoadGravity.SET\_PART | LOAD is \*LOAD\_GRAVITY\_PART\_SET. |

## LoadGravity properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| accel | real | Acceleration (will be multiplied by factor from curve) |
| dof | integer | Direction: enter 1, 2 or 3 for x, y, or z |
| exists (read only) | logical | true if load gravity exists, false if referred to but not defined. |
| include | integer | The [Include](primer-include-class.md) file number that the load gravity is in. |
| lc | integer | [Curve](primer-curve-class.md) ID. Load curve defining factor vs. time (or zero if STGA, STGR are defined) |
| lcdr | integer | [Curve](primer-curve-class.md) ID. Load curve defining factor vs. time during dynamic relaxation |
| model (read only) | integer | The [Model](primer-model-class.md) number that the load gravity is in. |
| pid | integer | [Part](primer-part-class.md) ID or Part set ID |
| stga | integer | [Construction Stages](primer-constructionstages-class.md) ID at which part is added (optional) |
| stgr | integer | [Construction Stages](primer-constructionstages-class.md) ID at which part is removed (optional) |
| type | constant | The Load Gravity type. Can be [LoadGravity.PART](primer-loadgravity-class.md#LoadGravity.PART) or [LoadGravity.SET_PART](primer-loadgravity-class.md#LoadGravity.SET_PART). |

| Detailed Description<br>The LoadGravity class allows you to create, modify, edit and manipulate \*LOAD\_GRAVITY\_PART cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new LoadGravity(Model*[[Model](primer-model-class.md)]*, type*[constant]*, pid*[integer]*, dof*[integer]*, lc*[integer]*, accel*[real]*, lcdr*[integer]*, stga (optional)*[integer]*, stgr (optional)*[integer]*)

Description<br>Create a new [LoadGravity](primer-loadgravity-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that LoadGravity will be created in

* type (constant)
 
Specify the type of LoadGravity (Can be [LoadGravity.PART](primer-loadgravity-class.md#LoadGravity.PART) or [LoadGravity.SET_PART](primer-loadgravity-class.md#LoadGravity.SET_PART)

* pid (integer)
 
[Part](primer-part-class.md) ID or Part set ID

* dof (integer)
 
Direction: enter 1, 2 or 3 for x, y or z

* lc (integer)
 
[Curve](primer-curve-class.md) ID. Load curve defining factor vs. time (or zero if STGA, STGR are defined)

* accel (real)
 
Acceleration (will be multiplied by factor from curve)

* lcdr (integer)
 
[Curve](primer-curve-class.md) ID. Load curve defining factor vs. time during dynamic relaxation

* stga (optional) (integer)
 
[Construction Stage](primer-constructionstages-class.md) ID at which part is added

* stgr (optional) (integer)
 
[Construction Stage](primer-constructionstages-class.md) ID at which part is removed

| Returns
<br>[LoadGravity](primer-loadgravity-class.md) object<br>
Return type
<br>LoadGravity |
| --- |

| Example
<br>To create a new load gravity in model m, of type SET, with dof 2, loadcurve 9, acceleration of 0.5, and lcdr 10<br>
```
var lg = new LoadGravity(m, LoadGravity.PART, 100, 2, 9, 0.5, 10);
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a load gravity. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the load gravity

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the load gravity lg:<br>
```
lg.AssociateComment(c);
```
 |
| --- |

* * *

| Blank()

Description<br>Blanks the load gravity |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To blank load gravity lg:<br>
```
lg.Blank();
```
 |
| --- |

* * *

| BlankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the load gravitys in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all load gravitys will be blanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the load gravitys in model m:<br>
```
LoadGravity.BlankAll(m);
```
 |
| --- |

* * *

| BlankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the flagged load gravitys in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged load gravitys will be blanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the load gravitys that you want to blank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the load gravitys in model m flagged with f:<br>
```
LoadGravity.BlankFlagged(m, f);
```
 |
| --- |

* * *

| Blanked()

Description<br>Checks if the load gravity is blanked or not. |
| --- |

#### Arguments

No arguments

| Returns
<br>true if blanked, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if load gravity lg is blanked:<br>
```
if (lg.Blanked() ) do_something...
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the load gravity. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the load gravity

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for load gravity lg:<br>
```
lg.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the load gravity. The target include of the copied load gravity can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>LoadGravity object<br>
Return type
<br>LoadGravity |
| --- |

| Example
<br>To copy load gravity lg into load gravity z:<br>
```
var z = lg.Copy();
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a load gravity. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the load gravity

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the load gravity lg:<br>
```
lg.DetachComment(c);
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for load gravity. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for load gravity lg:<br>
```
lg.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first load gravity in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first load gravity in

| Returns
<br>LoadGravity object (or null if there are no load gravitys in the model).<br>
Return type
<br>LoadGravity |
| --- |

| Example
<br>To get the first load gravity in model m:<br>
```
var lg = LoadGravity.First(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the load gravitys in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all load gravitys will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the load gravitys

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the load gravitys with flag f in model m:<br>
```
LoadGravity.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the load gravity is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the load gravity

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if load gravity lg has flag f set on it:<br>
```
if (lg.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each load gravity in the model.<br> **Note that ForEach has been designed to make looping over load gravitys as fast as possible and so has some limitations. Firstly, a single temporary LoadGravity object is created and on each function call it is updated with the current load gravity data. This means that you should not try to store the LoadGravity object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new load gravitys inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all load gravitys are in

* func (function)
 
Function to call for each load gravity

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the load gravitys in model m:<br>
```
LoadGravity.ForEach(m, test);
function test(lg)
{
// lg is LoadGravity object
}
```
<br><br>To call function test for all of the load gravitys in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
LoadGravity.ForEach(m, test, data);
function test(lg, extra)
{
// lg is LoadGravity object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of LoadGravity objects or properties for all of the load gravitys in a model in PRIMER. If the optional property argument is not given then an array of LoadGravity objects is returned. If the property argument is given, that property value for each load gravity is returned in the array instead of a LoadGravity object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get load gravitys from

* property (optional) (string)
 
Name for property to get for all load gravitys in the model

| Returns
<br>Array of LoadGravity objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of LoadGravity objects for all of the load gravitys in model m:<br>
```
var a = LoadGravity.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each load gravity in model m:<br>
```
var a = LoadGravity.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a load gravity. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the load gravity lg:<br>
```
var comm_array = lg.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of LoadGravity objects for all of the flagged load gravitys in a model in PRIMER If the optional property argument is not given then an array of LoadGravity objects is returned. If the property argument is given, then that property value for each load gravity is returned in the array instead of a LoadGravity object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get load gravitys from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the load gravitys that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged load gravitys in the model

| Returns
<br>Array of LoadGravity objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of LoadGravity objects for all of the load gravitys in model m flagged with f:<br>
```
var lg = LoadGravity.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the load gravitys in model m flagged with f:<br>
```
var a = LoadGravity.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the LoadGravity object for a load gravity ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the load gravity in

* number (integer)
 
number of the load gravity you want the LoadGravity object for

| Returns
<br>LoadGravity object (or null if load gravity does not exist).<br>
Return type
<br>LoadGravity |
| --- |

| Example
<br>To get the LoadGravity object for load gravity 100 in model m<br>
```
var lg = LoadGravity.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a LoadGravity property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [LoadGravity.ViewParameters()](primer-loadgravity-class.md#LoadGravity::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
load gravity property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if LoadGravity property lg.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (lg.GetParameter(lg.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if LoadGravity property lg.example is a parameter by using the GetParameter method:<br>
```
if (lg.ViewParameters().GetParameter(lg.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this LoadGravity (\*LOAD\_GRAVITY\_PART). **Note that a carriage return is not added**. See also [LoadGravity.KeywordCards()](primer-loadgravity-class.md#LoadGravity::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for LoadGravity lg:<br>
```
var key = lg.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the LoadGravity. **Note that a carriage return is not added**. See also [LoadGravity.Keyword()](primer-loadgravity-class.md#LoadGravity::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for LoadGravity lg:<br>
```
var cards = lg.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last load gravity in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last load gravity in

| Returns
<br>LoadGravity object (or null if there are no load gravitys in the model).<br>
Return type
<br>LoadGravity |
| --- |

| Example
<br>To get the last load gravity in model m:<br>
```
var lg = LoadGravity.Last(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next load gravity in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>LoadGravity object (or null if there are no more load gravitys in the model).<br>
Return type
<br>LoadGravity |
| --- |

| Example
<br>To get the load gravity in model m after load gravity lg:<br>
```
var lg = lg.Next();
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a load gravity. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only load gravitys from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only load gravitys that are flagged with *limit* can be selected. If omitted, or null, any load gravitys from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[LoadGravity](primer-loadgravity-class.md) object (or null if not picked)<br>
Return type
<br>LoadGravity |
| --- |

| Example
<br>To pick a load gravity from model m giving the prompt 'Pick load gravity from screen':<br>
```
var lg = LoadGravity.Pick('Pick load gravity from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous load gravity in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>LoadGravity object (or null if there are no more load gravitys in the model).<br>
Return type
<br>LoadGravity |
| --- |

| Example
<br>To get the load gravity in model m before load gravity lg:<br>
```
var lg = lg.Previous();
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select load gravitys using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting load gravitys

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only load gravitys from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only load gravitys that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any load gravitys can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of load gravitys selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select load gravitys from model m, flagging those selected with flag f, giving the prompt 'Select load gravitys':<br>
```
LoadGravity.Select(f, 'Select load gravitys', m);
```
<br><br>To select load gravitys, flagging those selected with flag f but limiting selection to load gravitys flagged with flag l, giving the prompt 'Select load gravitys':<br>
```
LoadGravity.Select(f, 'Select load gravitys', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the load gravity. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the load gravity

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for load gravity lg:<br>
```
lg.SetFlag(f);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the load gravity. The load gravity will be sketched until you either call [LoadGravity.Unsketch()](primer-loadgravity-class.md#LoadGravity::Unsketch), [LoadGravity.UnsketchAll()](primer-loadgravity-class.md#LoadGravity::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the load gravity is sketched. If omitted redraw is true. If you want to sketch several load gravitys and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch load gravity lg:<br>
```
lg.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged load gravitys in the model. The load gravitys will be sketched until you either call [LoadGravity.Unsketch()](primer-loadgravity-class.md#LoadGravity::Unsketch), [LoadGravity.UnsketchFlagged()](primer-loadgravity-class.md#LoadGravity::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged load gravitys will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the load gravitys that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the load gravitys are sketched. If omitted redraw is true. If you want to sketch flagged load gravitys several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all load gravitys flagged with flag in model m:<br>
```
LoadGravity.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of load gravitys in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing load gravitys should be counted. If false or omitted
referenced but undefined load gravitys will also be included in the total.

| Returns
<br>number of load gravitys<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of load gravitys in model m:<br>
```
var total = LoadGravity.Total(m);
```
 |
| --- |

* * *

| Unblank()

Description<br>Unblanks the load gravity |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank load gravity lg:<br>
```
lg.Unblank();
```
 |
| --- |

* * *

| UnblankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the load gravitys in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all load gravitys will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the load gravitys in model m:<br>
```
LoadGravity.UnblankAll(m);
```
 |
| --- |

* * *

| UnblankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the flagged load gravitys in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the flagged load gravitys will be unblanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the load gravitys that you want to unblank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the load gravitys in model m flagged with f:<br>
```
LoadGravity.UnblankFlagged(m, f);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the load gravitys in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all load gravitys will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the load gravitys

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the load gravitys in model m:<br>
```
LoadGravity.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the load gravity. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the load gravity is unsketched. If omitted redraw is true. If you want to unsketch several load gravitys and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch load gravity lg:<br>
```
lg.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all load gravitys. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all load gravitys will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the load gravitys are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all load gravitys in model m:<br>
```
LoadGravity.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged load gravitys in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all load gravitys will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the load gravitys that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the load gravitys are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all load gravitys flagged with flag in model m:<br>
```
LoadGravity.UnsketchAll(m, flag);
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
<br>[LoadGravity](primer-loadgravity-class.md) object.<br>
Return type
<br>LoadGravity |
| --- |

| Example
<br>To check if LoadGravity property lg.example is a parameter by using the [LoadGravity.GetParameter()](primer-loadgravity-class.md#LoadGravity::GetParameter) method:<br>
```
if (lg.ViewParameters().GetParameter(lg.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for load gravity. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for load gravity lg:<br>
```
lg.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this load gravity. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for load gravity lg:<br>
```
var xrefs = lg.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the LoadGravity data in keyword format. Note that this contains the keyword header and the keyword cards. See also [LoadGravity.Keyword()](primer-loadgravity-class.md#LoadGravity::Keyword) and [LoadGravity.KeywordCards()](primer-loadgravity-class.md#LoadGravity::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for LoadGravity lg in keyword format<br>
```
var s = lg.toString();
```
 |
| --- |

* * *