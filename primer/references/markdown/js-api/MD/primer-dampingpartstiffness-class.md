# DampingPartStiffness class

The DampingPartStiffness class gives you access to define damping part stiffness cards in PRIMER. [More...](primer-dampingpartstiffness-class.md#DampingPartStiffness_details)

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

* [BlankAll](primer-dampingpartstiffness-class.md#DampingPartStiffness::BlankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [BlankFlagged](primer-dampingpartstiffness-class.md#DampingPartStiffness::BlankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [First](primer-dampingpartstiffness-class.md#DampingPartStiffness::First)(Model*[[Model](primer-model-class.md)]*)
* [FlagAll](primer-dampingpartstiffness-class.md#DampingPartStiffness::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-dampingpartstiffness-class.md#DampingPartStiffness::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-dampingpartstiffness-class.md#DampingPartStiffness::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-dampingpartstiffness-class.md#DampingPartStiffness::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-dampingpartstiffness-class.md#DampingPartStiffness::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-dampingpartstiffness-class.md#DampingPartStiffness::Last)(Model*[[Model](primer-model-class.md)]*)
* [Pick](primer-dampingpartstiffness-class.md#DampingPartStiffness::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [Select](primer-dampingpartstiffness-class.md#DampingPartStiffness::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-dampingpartstiffness-class.md#DampingPartStiffness::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-dampingpartstiffness-class.md#DampingPartStiffness::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnblankAll](primer-dampingpartstiffness-class.md#DampingPartStiffness::UnblankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnblankFlagged](primer-dampingpartstiffness-class.md#DampingPartStiffness::UnblankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [UnflagAll](primer-dampingpartstiffness-class.md#DampingPartStiffness::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-dampingpartstiffness-class.md#DampingPartStiffness::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-dampingpartstiffness-class.md#DampingPartStiffness::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-dampingpartstiffness-class.md#DampingPartStiffness::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Blank](primer-dampingpartstiffness-class.md#DampingPartStiffness::Blank)()
* [Blanked](primer-dampingpartstiffness-class.md#DampingPartStiffness::Blanked)()
* [ClearFlag](primer-dampingpartstiffness-class.md#DampingPartStiffness::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-dampingpartstiffness-class.md#DampingPartStiffness::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-dampingpartstiffness-class.md#DampingPartStiffness::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Error](primer-dampingpartstiffness-class.md#DampingPartStiffness::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-dampingpartstiffness-class.md#DampingPartStiffness::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-dampingpartstiffness-class.md#DampingPartStiffness::GetComments)()
* [GetParameter](primer-dampingpartstiffness-class.md#DampingPartStiffness::GetParameter)(prop*[string]*)
* [Keyword](primer-dampingpartstiffness-class.md#DampingPartStiffness::Keyword)()
* [KeywordCards](primer-dampingpartstiffness-class.md#DampingPartStiffness::KeywordCards)()
* [Next](primer-dampingpartstiffness-class.md#DampingPartStiffness::Next)()
* [Previous](primer-dampingpartstiffness-class.md#DampingPartStiffness::Previous)()
* [SetFlag](primer-dampingpartstiffness-class.md#DampingPartStiffness::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Sketch](primer-dampingpartstiffness-class.md#DampingPartStiffness::Sketch)(redraw (optional)*[boolean]*)
* [Unblank](primer-dampingpartstiffness-class.md#DampingPartStiffness::Unblank)()
* [Unsketch](primer-dampingpartstiffness-class.md#DampingPartStiffness::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-dampingpartstiffness-class.md#DampingPartStiffness::ViewParameters)()
* [Warning](primer-dampingpartstiffness-class.md#DampingPartStiffness::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-dampingpartstiffness-class.md#DampingPartStiffness::Xrefs)()
* [toString](primer-dampingpartstiffness-class.md#DampingPartStiffness::toString)()

## DampingPartStiffness constants

| **Name** | **Description** |
| --- | --- |
| DampingPartStiffness.PART | PART is \*DAMPING\_PART\_STIFFNESS. |
| DampingPartStiffness.SET | SET is \*DAMPING\_PART\_STIFFNESS\_SET. |

## DampingPartStiffness properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| coef | real | Rayleigh damping coefficient |
| exists (read only) | logical | true if damping part stiffness exists, false if referred to but not defined. |
| id | integer | Part/part set id |
| include | integer | The [Include](primer-include-class.md) file number that the damping part stiffness is in. |
| model (read only) | integer | The [Model](primer-model-class.md) number that the damping part stiffness is in. |
| type | constant | The DampingPartStiffness type. Can be:<ul> <li><a href="primer-dampingpartstiffness-class.md#DampingPartStiffness.PART">DampingPartStiffness.PART</a> or</li> <li><a href="primer-dampingpartstiffness-class.md#DampingPartStiffness.SET">DampingPartStiffness.SET</a></li> </ul> |

| Detailed Description<br>The DampingPartStiffness class allows you to create, modify, edit and manipulate damping\_part\_stiffness cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new DampingPartStiffness(Model*[[Model](primer-model-class.md)]*, type*[constant]*, id*[integer]*, coef (optional)*[real]*)

Description<br>Create a new [DampingPartStiffness](primer-dampingpartstiffness-class.md) object for \*DAMPING\_PART\_STIFFNESS. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that damping part stiffness will be created in

* type (constant)
 
Damping part stiffness type. Can be [DampingPartStiffness.PART](primer-dampingpartstiffness-class.md#DampingPartStiffness.PART) or [DampingPartStiffness.SET](primer-dampingpartstiffness-class.md#DampingPartStiffness.SET).

* id (integer)
 
Part/part set id

* coef (optional) (real)
 
Rayleigh damping coefficient

| Returns
<br>[DampingPartStiffness](primer-dampingpartstiffness-class.md) object<br>
Return type
<br>DampingPartStiffness |
| --- |

| Example
<br>To create a new damping part stiffness (of type PART) in model m with id, coef set to 11, 2.5 respectively:<br>
```
var ps = new DampingPartStiffness(m, DampingPartStiffness.PART, 11, 2.5);
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a damping part stiffness. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the damping part stiffness

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the damping part stiffness ps:<br>
```
ps.AssociateComment(c);
```
 |
| --- |

* * *

| Blank()

Description<br>Blanks the damping part stiffness |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To blank damping part stiffness ps:<br>
```
ps.Blank();
```
 |
| --- |

* * *

| BlankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the damping part stiffnesses in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all damping part stiffnesses will be blanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the damping part stiffnesses in model m:<br>
```
DampingPartStiffness.BlankAll(m);
```
 |
| --- |

* * *

| BlankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the flagged damping part stiffnesses in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged damping part stiffnesses will be blanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the damping part stiffnesses that you want to blank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the damping part stiffnesses in model m flagged with f:<br>
```
DampingPartStiffness.BlankFlagged(m, f);
```
 |
| --- |

* * *

| Blanked()

Description<br>Checks if the damping part stiffness is blanked or not. |
| --- |

#### Arguments

No arguments

| Returns
<br>true if blanked, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if damping part stiffness ps is blanked:<br>
```
if (ps.Blanked() ) do_something...
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the damping part stiffness. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the damping part stiffness

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for damping part stiffness ps:<br>
```
ps.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the damping part stiffness. The target include of the copied damping part stiffness can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>DampingPartStiffness object<br>
Return type
<br>DampingPartStiffness |
| --- |

| Example
<br>To copy damping part stiffness ps into damping part stiffness z:<br>
```
var z = ps.Copy();
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a damping part stiffness. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the damping part stiffness

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the damping part stiffness ps:<br>
```
ps.DetachComment(c);
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for damping part stiffness. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for damping part stiffness ps:<br>
```
ps.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first damping part stiffness in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first damping part stiffness in

| Returns
<br>DampingPartStiffness object (or null if there are no damping part stiffnesses in the model).<br>
Return type
<br>DampingPartStiffness |
| --- |

| Example
<br>To get the first damping part stiffness in model m:<br>
```
var ps = DampingPartStiffness.First(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the damping part stiffnesses in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all damping part stiffnesses will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the damping part stiffnesses

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the damping part stiffnesses with flag f in model m:<br>
```
DampingPartStiffness.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the damping part stiffness is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the damping part stiffness

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if damping part stiffness ps has flag f set on it:<br>
```
if (ps.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each damping part stiffness in the model.<br> **Note that ForEach has been designed to make looping over damping part stiffnesses as fast as possible and so has some limitations. Firstly, a single temporary DampingPartStiffness object is created and on each function call it is updated with the current damping part stiffness data. This means that you should not try to store the DampingPartStiffness object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new damping part stiffnesses inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all damping part stiffnesses are in

* func (function)
 
Function to call for each damping part stiffness

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the damping part stiffnesses in model m:<br>
```
DampingPartStiffness.ForEach(m, test);
function test(ps)
{
// ps is DampingPartStiffness object
}
```
<br><br>To call function test for all of the damping part stiffnesses in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
DampingPartStiffness.ForEach(m, test, data);
function test(ps, extra)
{
// ps is DampingPartStiffness object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of DampingPartStiffness objects or properties for all of the damping part stiffnesses in a model in PRIMER. If the optional property argument is not given then an array of DampingPartStiffness objects is returned. If the property argument is given, that property value for each damping part stiffness is returned in the array instead of a DampingPartStiffness object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get damping part stiffnesses from

* property (optional) (string)
 
Name for property to get for all damping part stiffnesses in the model

| Returns
<br>Array of DampingPartStiffness objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of DampingPartStiffness objects for all of the damping part stiffnesses in model m:<br>
```
var a = DampingPartStiffness.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each damping part stiffness in model m:<br>
```
var a = DampingPartStiffness.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a damping part stiffness. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the damping part stiffness ps:<br>
```
var comm_array = ps.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of DampingPartStiffness objects for all of the flagged damping part stiffnesses in a model in PRIMER If the optional property argument is not given then an array of DampingPartStiffness objects is returned. If the property argument is given, then that property value for each damping part stiffness is returned in the array instead of a DampingPartStiffness object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get damping part stiffnesses from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the damping part stiffnesses that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged damping part stiffnesses in the model

| Returns
<br>Array of DampingPartStiffness objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of DampingPartStiffness objects for all of the damping part stiffnesses in model m flagged with f:<br>
```
var ps = DampingPartStiffness.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the damping part stiffnesses in model m flagged with f:<br>
```
var a = DampingPartStiffness.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the DampingPartStiffness object for a damping part stiffness ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the damping part stiffness in

* number (integer)
 
number of the damping part stiffness you want the DampingPartStiffness object for

| Returns
<br>DampingPartStiffness object (or null if damping part stiffness does not exist).<br>
Return type
<br>DampingPartStiffness |
| --- |

| Example
<br>To get the DampingPartStiffness object for damping part stiffness 100 in model m<br>
```
var ps = DampingPartStiffness.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a DampingPartStiffness property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [DampingPartStiffness.ViewParameters()](primer-dampingpartstiffness-class.md#DampingPartStiffness::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
damping part stiffness property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if DampingPartStiffness property ps.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (ps.GetParameter(ps.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if DampingPartStiffness property ps.example is a parameter by using the GetParameter method:<br>
```
if (ps.ViewParameters().GetParameter(ps.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this damping part stiffness (\*DAMPING\_PART\_STIFFNESS). **Note that a carriage return is not added**. See also [DampingPartStiffness.KeywordCards()](primer-dampingpartstiffness-class.md#DampingPartStiffness::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for damping part stiffness m:<br>
```
var key = fr.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the damping part stiffness. **Note that a carriage return is not added**. See also [DampingPartStiffness.Keyword()](primer-dampingpartstiffness-class.md#DampingPartStiffness::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for damping part stiffness fr:<br>
```
var cards = fr.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last damping part stiffness in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last damping part stiffness in

| Returns
<br>DampingPartStiffness object (or null if there are no damping part stiffnesses in the model).<br>
Return type
<br>DampingPartStiffness |
| --- |

| Example
<br>To get the last damping part stiffness in model m:<br>
```
var ps = DampingPartStiffness.Last(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next damping part stiffness in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>DampingPartStiffness object (or null if there are no more damping part stiffnesses in the model).<br>
Return type
<br>DampingPartStiffness |
| --- |

| Example
<br>To get the damping part stiffness in model m after damping part stiffness ps:<br>
```
var ps = ps.Next();
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a damping part stiffness. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only damping part stiffnesses from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only damping part stiffnesses that are flagged with *limit* can be selected. If omitted, or null, any damping part stiffnesses from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[DampingPartStiffness](primer-dampingpartstiffness-class.md) object (or null if not picked)<br>
Return type
<br>DampingPartStiffness |
| --- |

| Example
<br>To pick a damping part stiffness from model m giving the prompt 'Pick damping part stiffness from screen':<br>
```
var ps = DampingPartStiffness.Pick('Pick damping part stiffness from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous damping part stiffness in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>DampingPartStiffness object (or null if there are no more damping part stiffnesses in the model).<br>
Return type
<br>DampingPartStiffness |
| --- |

| Example
<br>To get the damping part stiffness in model m before damping part stiffness ps:<br>
```
var ps = ps.Previous();
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select damping part stiffnesses using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting damping part stiffnesses

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only damping part stiffnesses from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only damping part stiffnesses that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any damping part stiffnesses can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of damping part stiffnesses selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select damping part stiffnesses from model m, flagging those selected with flag f, giving the prompt 'Select damping part stiffnesses':<br>
```
DampingPartStiffness.Select(f, 'Select damping part stiffnesses', m);
```
<br><br>To select damping part stiffnesses, flagging those selected with flag f but limiting selection to damping part stiffnesses flagged with flag l, giving the prompt 'Select damping part stiffnesses':<br>
```
DampingPartStiffness.Select(f, 'Select damping part stiffnesses', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the damping part stiffness. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the damping part stiffness

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for damping part stiffness ps:<br>
```
ps.SetFlag(f);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the damping part stiffness. The damping part stiffness will be sketched until you either call [DampingPartStiffness.Unsketch()](primer-dampingpartstiffness-class.md#DampingPartStiffness::Unsketch), [DampingPartStiffness.UnsketchAll()](primer-dampingpartstiffness-class.md#DampingPartStiffness::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the damping part stiffness is sketched. If omitted redraw is true. If you want to sketch several damping part stiffnesses and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch damping part stiffness ps:<br>
```
ps.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged damping part stiffnesses in the model. The damping part stiffnesses will be sketched until you either call [DampingPartStiffness.Unsketch()](primer-dampingpartstiffness-class.md#DampingPartStiffness::Unsketch), [DampingPartStiffness.UnsketchFlagged()](primer-dampingpartstiffness-class.md#DampingPartStiffness::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged damping part stiffnesses will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the damping part stiffnesses that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the damping part stiffnesses are sketched. If omitted redraw is true. If you want to sketch flagged damping part stiffnesses several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all damping part stiffnesses flagged with flag in model m:<br>
```
DampingPartStiffness.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of damping part stiffnesses in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing damping part stiffnesses should be counted. If false or omitted
referenced but undefined damping part stiffnesses will also be included in the total.

| Returns
<br>number of damping part stiffnesses<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of damping part stiffnesses in model m:<br>
```
var total = DampingPartStiffness.Total(m);
```
 |
| --- |

* * *

| Unblank()

Description<br>Unblanks the damping part stiffness |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank damping part stiffness ps:<br>
```
ps.Unblank();
```
 |
| --- |

* * *

| UnblankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the damping part stiffnesses in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all damping part stiffnesses will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the damping part stiffnesses in model m:<br>
```
DampingPartStiffness.UnblankAll(m);
```
 |
| --- |

* * *

| UnblankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the flagged damping part stiffnesses in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the flagged damping part stiffnesses will be unblanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the damping part stiffnesses that you want to unblank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the damping part stiffnesses in model m flagged with f:<br>
```
DampingPartStiffness.UnblankFlagged(m, f);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the damping part stiffnesses in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all damping part stiffnesses will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the damping part stiffnesses

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the damping part stiffnesses in model m:<br>
```
DampingPartStiffness.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the damping part stiffness. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the damping part stiffness is unsketched. If omitted redraw is true. If you want to unsketch several damping part stiffnesses and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch damping part stiffness ps:<br>
```
ps.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all damping part stiffnesses. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all damping part stiffnesses will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the damping part stiffnesses are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all damping part stiffnesses in model m:<br>
```
DampingPartStiffness.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged damping part stiffnesses in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all damping part stiffnesses will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the damping part stiffnesses that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the damping part stiffnesses are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all damping part stiffnesses flagged with flag in model m:<br>
```
DampingPartStiffness.UnsketchAll(m, flag);
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
<br>[DampingPartStiffness](primer-dampingpartstiffness-class.md) object.<br>
Return type
<br>DampingPartStiffness |
| --- |

| Example
<br>To check if DampingPartStiffness property ps.example is a parameter by using the [DampingPartStiffness.GetParameter()](primer-dampingpartstiffness-class.md#DampingPartStiffness::GetParameter) method:<br>
```
if (ps.ViewParameters().GetParameter(ps.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for damping part stiffness. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for damping part stiffness ps:<br>
```
ps.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this damping part stiffness. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for damping part stiffness ps:<br>
```
var xrefs = ps.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the damping part stiffness data in keyword format. Note that this contains the keyword header and the keyword cards. See also [DampingPartStiffness.Keyword()](primer-dampingpartstiffness-class.md#DampingPartStiffness::Keyword) and [DampingPartStiffness.KeywordCards()](primer-dampingpartstiffness-class.md#DampingPartStiffness::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for damping part stiffness ps in keyword format<br>
```
var s = fr.toString();
```
 |
| --- |

* * *