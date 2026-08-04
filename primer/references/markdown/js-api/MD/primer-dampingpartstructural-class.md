# DampingPartStructural class

The DampingPartStructural class gives you access to define damping part structural cards in PRIMER. [More...](primer-dampingpartstructural-class.md#DampingPartStructural_details)

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

* [BlankAll](primer-dampingpartstructural-class.md#DampingPartStructural::BlankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [BlankFlagged](primer-dampingpartstructural-class.md#DampingPartStructural::BlankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [First](primer-dampingpartstructural-class.md#DampingPartStructural::First)(Model*[[Model](primer-model-class.md)]*)
* [FlagAll](primer-dampingpartstructural-class.md#DampingPartStructural::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-dampingpartstructural-class.md#DampingPartStructural::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-dampingpartstructural-class.md#DampingPartStructural::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-dampingpartstructural-class.md#DampingPartStructural::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-dampingpartstructural-class.md#DampingPartStructural::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-dampingpartstructural-class.md#DampingPartStructural::Last)(Model*[[Model](primer-model-class.md)]*)
* [Pick](primer-dampingpartstructural-class.md#DampingPartStructural::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [Select](primer-dampingpartstructural-class.md#DampingPartStructural::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-dampingpartstructural-class.md#DampingPartStructural::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-dampingpartstructural-class.md#DampingPartStructural::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnblankAll](primer-dampingpartstructural-class.md#DampingPartStructural::UnblankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnblankFlagged](primer-dampingpartstructural-class.md#DampingPartStructural::UnblankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [UnflagAll](primer-dampingpartstructural-class.md#DampingPartStructural::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-dampingpartstructural-class.md#DampingPartStructural::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-dampingpartstructural-class.md#DampingPartStructural::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-dampingpartstructural-class.md#DampingPartStructural::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Blank](primer-dampingpartstructural-class.md#DampingPartStructural::Blank)()
* [Blanked](primer-dampingpartstructural-class.md#DampingPartStructural::Blanked)()
* [ClearFlag](primer-dampingpartstructural-class.md#DampingPartStructural::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-dampingpartstructural-class.md#DampingPartStructural::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-dampingpartstructural-class.md#DampingPartStructural::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Error](primer-dampingpartstructural-class.md#DampingPartStructural::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-dampingpartstructural-class.md#DampingPartStructural::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-dampingpartstructural-class.md#DampingPartStructural::GetComments)()
* [GetParameter](primer-dampingpartstructural-class.md#DampingPartStructural::GetParameter)(prop*[string]*)
* [Keyword](primer-dampingpartstructural-class.md#DampingPartStructural::Keyword)()
* [KeywordCards](primer-dampingpartstructural-class.md#DampingPartStructural::KeywordCards)()
* [Next](primer-dampingpartstructural-class.md#DampingPartStructural::Next)()
* [Previous](primer-dampingpartstructural-class.md#DampingPartStructural::Previous)()
* [SetFlag](primer-dampingpartstructural-class.md#DampingPartStructural::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Sketch](primer-dampingpartstructural-class.md#DampingPartStructural::Sketch)(redraw (optional)*[boolean]*)
* [Unblank](primer-dampingpartstructural-class.md#DampingPartStructural::Unblank)()
* [Unsketch](primer-dampingpartstructural-class.md#DampingPartStructural::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-dampingpartstructural-class.md#DampingPartStructural::ViewParameters)()
* [Warning](primer-dampingpartstructural-class.md#DampingPartStructural::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-dampingpartstructural-class.md#DampingPartStructural::Xrefs)()
* [toString](primer-dampingpartstructural-class.md#DampingPartStructural::toString)()

## DampingPartStructural constants

| **Name** | **Description** |
| --- | --- |
| DampingPartStructural.PART | PART is \*DAMPING\_PART\_STRUCTURAL. |
| DampingPartStructural.SET | SET is \*DAMPING\_PART\_STRUCTURAL\_SET. |

## DampingPartStructural properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| coef | real | Structural damping coefficient |
| exists (read only) | logical | true if damping part structural exists, false if referred to but not defined. |
| id | integer | Part/part set id |
| include | integer | The [Include](primer-include-class.md) file number that the damping part structural is in. |
| model (read only) | integer | The [Model](primer-model-class.md) number that the damping part structural is in. |
| type | constant | The DampingPartStructural type. Can be:<ul> <li><a href="primer-dampingpartstructural-class.md#DampingPartStructural.PART">DampingPartStructural.PART</a> or</li> <li><a href="primer-dampingpartstructural-class.md#DampingPartStructural.SET">DampingPartStructural.SET</a></li> </ul> |

| Detailed Description<br>The DampingPartStructural class allows you to create, modify, edit and manipulate damping\_part\_structural cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new DampingPartStructural(Model*[[Model](primer-model-class.md)]*, type*[constant]*, id*[integer]*, coef (optional)*[real]*)

Description<br>Create a new [DampingPartStructural](primer-dampingpartstructural-class.md) object for \*DAMPING\_PART\_STRUCTURAL. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that damping part structural will be created in

* type (constant)
 
Damping part structural type. Can be [DampingPartStructural.PART](primer-dampingpartstructural-class.md#DampingPartStructural.PART) or [DampingPartStructural.SET](primer-dampingpartstructural-class.md#DampingPartStructural.SET).

* id (integer)
 
Part/part set id

* coef (optional) (real)
 
Structural damping coefficient

| Returns
<br>[DampingPartStructural](primer-dampingpartstructural-class.md) object<br>
Return type
<br>DampingPartStructural |
| --- |

| Example
<br>To create a new damping part structural (of type PART) in model m with id, coef set to 11, 2.5 respectively:<br>
```
var ps = new DampingPartStructural(m, DampingPartStructural.PART, 11, 2.5);
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a damping part structural. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the damping part structural

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the damping part structural ps:<br>
```
ps.AssociateComment(c);
```
 |
| --- |

* * *

| Blank()

Description<br>Blanks the damping part structural |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To blank damping part structural ps:<br>
```
ps.Blank();
```
 |
| --- |

* * *

| BlankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the damping part structurals in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all damping part structurals will be blanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the damping part structurals in model m:<br>
```
DampingPartStructural.BlankAll(m);
```
 |
| --- |

* * *

| BlankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the flagged damping part structurals in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged damping part structurals will be blanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the damping part structurals that you want to blank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the damping part structurals in model m flagged with f:<br>
```
DampingPartStructural.BlankFlagged(m, f);
```
 |
| --- |

* * *

| Blanked()

Description<br>Checks if the damping part structural is blanked or not. |
| --- |

#### Arguments

No arguments

| Returns
<br>true if blanked, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if damping part structural ps is blanked:<br>
```
if (ps.Blanked() ) do_something...
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the damping part structural. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the damping part structural

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for damping part structural ps:<br>
```
ps.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the damping part structural. The target include of the copied damping part structural can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>DampingPartStructural object<br>
Return type
<br>DampingPartStructural |
| --- |

| Example
<br>To copy damping part structural ps into damping part structural z:<br>
```
var z = ps.Copy();
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a damping part structural. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the damping part structural

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the damping part structural ps:<br>
```
ps.DetachComment(c);
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for damping part structural. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for damping part structural ps:<br>
```
ps.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first damping part structural in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first damping part structural in

| Returns
<br>DampingPartStructural object (or null if there are no damping part structurals in the model).<br>
Return type
<br>DampingPartStructural |
| --- |

| Example
<br>To get the first damping part structural in model m:<br>
```
var ps = DampingPartStructural.First(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the damping part structurals in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all damping part structurals will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the damping part structurals

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the damping part structurals with flag f in model m:<br>
```
DampingPartStructural.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the damping part structural is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the damping part structural

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if damping part structural ps has flag f set on it:<br>
```
if (ps.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each damping part structural in the model.<br> **Note that ForEach has been designed to make looping over damping part structurals as fast as possible and so has some limitations. Firstly, a single temporary DampingPartStructural object is created and on each function call it is updated with the current damping part structural data. This means that you should not try to store the DampingPartStructural object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new damping part structurals inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all damping part structurals are in

* func (function)
 
Function to call for each damping part structural

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the damping part structurals in model m:<br>
```
DampingPartStructural.ForEach(m, test);
function test(ps)
{
// ps is DampingPartStructural object
}
```
<br><br>To call function test for all of the damping part structurals in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
DampingPartStructural.ForEach(m, test, data);
function test(ps, extra)
{
// ps is DampingPartStructural object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of DampingPartStructural objects or properties for all of the damping part structurals in a model in PRIMER. If the optional property argument is not given then an array of DampingPartStructural objects is returned. If the property argument is given, that property value for each damping part structural is returned in the array instead of a DampingPartStructural object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get damping part structurals from

* property (optional) (string)
 
Name for property to get for all damping part structurals in the model

| Returns
<br>Array of DampingPartStructural objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of DampingPartStructural objects for all of the damping part structurals in model m:<br>
```
var a = DampingPartStructural.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each damping part structural in model m:<br>
```
var a = DampingPartStructural.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a damping part structural. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the damping part structural ps:<br>
```
var comm_array = ps.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of DampingPartStructural objects for all of the flagged damping part structurals in a model in PRIMER If the optional property argument is not given then an array of DampingPartStructural objects is returned. If the property argument is given, then that property value for each damping part structural is returned in the array instead of a DampingPartStructural object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get damping part structurals from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the damping part structurals that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged damping part structurals in the model

| Returns
<br>Array of DampingPartStructural objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of DampingPartStructural objects for all of the damping part structurals in model m flagged with f:<br>
```
var ps = DampingPartStructural.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the damping part structurals in model m flagged with f:<br>
```
var a = DampingPartStructural.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the DampingPartStructural object for a damping part structural ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the damping part structural in

* number (integer)
 
number of the damping part structural you want the DampingPartStructural object for

| Returns
<br>DampingPartStructural object (or null if damping part structural does not exist).<br>
Return type
<br>DampingPartStructural |
| --- |

| Example
<br>To get the DampingPartStructural object for damping part structural 100 in model m<br>
```
var ps = DampingPartStructural.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a DampingPartStructural property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [DampingPartStructural.ViewParameters()](primer-dampingpartstructural-class.md#DampingPartStructural::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
damping part structural property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if DampingPartStructural property ps.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (ps.GetParameter(ps.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if DampingPartStructural property ps.example is a parameter by using the GetParameter method:<br>
```
if (ps.ViewParameters().GetParameter(ps.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this damping part structural (\*DAMPING\_PART\_STRUCTURAL). **Note that a carriage return is not added**. See also [DampingPartStructural.KeywordCards()](primer-dampingpartstructural-class.md#DampingPartStructural::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for damping part structural m:<br>
```
var key = fr.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the damping part structural. **Note that a carriage return is not added**. See also [DampingPartStructural.Keyword()](primer-dampingpartstructural-class.md#DampingPartStructural::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for damping part structural fr:<br>
```
var cards = fr.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last damping part structural in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last damping part structural in

| Returns
<br>DampingPartStructural object (or null if there are no damping part structurals in the model).<br>
Return type
<br>DampingPartStructural |
| --- |

| Example
<br>To get the last damping part structural in model m:<br>
```
var ps = DampingPartStructural.Last(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next damping part structural in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>DampingPartStructural object (or null if there are no more damping part structurals in the model).<br>
Return type
<br>DampingPartStructural |
| --- |

| Example
<br>To get the damping part structural in model m after damping part structural ps:<br>
```
var ps = ps.Next();
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a damping part structural. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only damping part structurals from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only damping part structurals that are flagged with *limit* can be selected. If omitted, or null, any damping part structurals from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[DampingPartStructural](primer-dampingpartstructural-class.md) object (or null if not picked)<br>
Return type
<br>DampingPartStructural |
| --- |

| Example
<br>To pick a damping part structural from model m giving the prompt 'Pick damping part structural from screen':<br>
```
var ps = DampingPartStructural.Pick('Pick damping part structural from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous damping part structural in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>DampingPartStructural object (or null if there are no more damping part structurals in the model).<br>
Return type
<br>DampingPartStructural |
| --- |

| Example
<br>To get the damping part structural in model m before damping part structural ps:<br>
```
var ps = ps.Previous();
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select damping part structurals using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting damping part structurals

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only damping part structurals from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only damping part structurals that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any damping part structurals can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of damping part structurals selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select damping part structurals from model m, flagging those selected with flag f, giving the prompt 'Select damping part structurals':<br>
```
DampingPartStructural.Select(f, 'Select damping part structurals', m);
```
<br><br>To select damping part structurals, flagging those selected with flag f but limiting selection to damping part structurals flagged with flag l, giving the prompt 'Select damping part structurals':<br>
```
DampingPartStructural.Select(f, 'Select damping part structurals', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the damping part structural. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the damping part structural

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for damping part structural ps:<br>
```
ps.SetFlag(f);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the damping part structural. The damping part structural will be sketched until you either call [DampingPartStructural.Unsketch()](primer-dampingpartstructural-class.md#DampingPartStructural::Unsketch), [DampingPartStructural.UnsketchAll()](primer-dampingpartstructural-class.md#DampingPartStructural::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the damping part structural is sketched. If omitted redraw is true. If you want to sketch several damping part structurals and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch damping part structural ps:<br>
```
ps.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged damping part structurals in the model. The damping part structurals will be sketched until you either call [DampingPartStructural.Unsketch()](primer-dampingpartstructural-class.md#DampingPartStructural::Unsketch), [DampingPartStructural.UnsketchFlagged()](primer-dampingpartstructural-class.md#DampingPartStructural::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged damping part structurals will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the damping part structurals that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the damping part structurals are sketched. If omitted redraw is true. If you want to sketch flagged damping part structurals several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all damping part structurals flagged with flag in model m:<br>
```
DampingPartStructural.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of damping part structurals in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing damping part structurals should be counted. If false or omitted
referenced but undefined damping part structurals will also be included in the total.

| Returns
<br>number of damping part structurals<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of damping part structurals in model m:<br>
```
var total = DampingPartStructural.Total(m);
```
 |
| --- |

* * *

| Unblank()

Description<br>Unblanks the damping part structural |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank damping part structural ps:<br>
```
ps.Unblank();
```
 |
| --- |

* * *

| UnblankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the damping part structurals in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all damping part structurals will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the damping part structurals in model m:<br>
```
DampingPartStructural.UnblankAll(m);
```
 |
| --- |

* * *

| UnblankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the flagged damping part structurals in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the flagged damping part structurals will be unblanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the damping part structurals that you want to unblank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the damping part structurals in model m flagged with f:<br>
```
DampingPartStructural.UnblankFlagged(m, f);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the damping part structurals in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all damping part structurals will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the damping part structurals

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the damping part structurals in model m:<br>
```
DampingPartStructural.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the damping part structural. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the damping part structural is unsketched. If omitted redraw is true. If you want to unsketch several damping part structurals and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch damping part structural ps:<br>
```
ps.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all damping part structurals. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all damping part structurals will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the damping part structurals are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all damping part structurals in model m:<br>
```
DampingPartStructural.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged damping part structurals in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all damping part structurals will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the damping part structurals that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the damping part structurals are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all damping part structurals flagged with flag in model m:<br>
```
DampingPartStructural.UnsketchAll(m, flag);
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
<br>[DampingPartStructural](primer-dampingpartstructural-class.md) object.<br>
Return type
<br>DampingPartStructural |
| --- |

| Example
<br>To check if DampingPartStructural property ps.example is a parameter by using the [DampingPartStructural.GetParameter()](primer-dampingpartstructural-class.md#DampingPartStructural::GetParameter) method:<br>
```
if (ps.ViewParameters().GetParameter(ps.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for damping part structural. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for damping part structural ps:<br>
```
ps.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this damping part structural. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for damping part structural ps:<br>
```
var xrefs = ps.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the damping part structural data in keyword format. Note that this contains the keyword header and the keyword cards. See also [DampingPartStructural.Keyword()](primer-dampingpartstructural-class.md#DampingPartStructural::Keyword) and [DampingPartStructural.KeywordCards()](primer-dampingpartstructural-class.md#DampingPartStructural::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for damping part structural ps in keyword format<br>
```
var s = fr.toString();
```
 |
| --- |

* * *