# MassPart class

The MassPart class gives you access to element mass part cards in PRIMER. [More...](primer-masspart-class.md#MassPart_details)

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

* [BlankAll](primer-masspart-class.md#MassPart::BlankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [BlankFlagged](primer-masspart-class.md#MassPart::BlankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Create](primer-masspart-class.md#MassPart::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [First](primer-masspart-class.md#MassPart::First)(Model*[[Model](primer-model-class.md)]*)
* [FlagAll](primer-masspart-class.md#MassPart::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-masspart-class.md#MassPart::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-masspart-class.md#MassPart::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-masspart-class.md#MassPart::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-masspart-class.md#MassPart::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-masspart-class.md#MassPart::Last)(Model*[[Model](primer-model-class.md)]*)
* [Pick](primer-masspart-class.md#MassPart::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [Select](primer-masspart-class.md#MassPart::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-masspart-class.md#MassPart::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-masspart-class.md#MassPart::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnblankAll](primer-masspart-class.md#MassPart::UnblankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnblankFlagged](primer-masspart-class.md#MassPart::UnblankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [UnflagAll](primer-masspart-class.md#MassPart::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-masspart-class.md#MassPart::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-masspart-class.md#MassPart::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-masspart-class.md#MassPart::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Blank](primer-masspart-class.md#MassPart::Blank)()
* [Blanked](primer-masspart-class.md#MassPart::Blanked)()
* [Browse](primer-masspart-class.md#MassPart::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-masspart-class.md#MassPart::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-masspart-class.md#MassPart::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-masspart-class.md#MassPart::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-masspart-class.md#MassPart::Edit)(modal (optional)*[boolean]*)
* [Error](primer-masspart-class.md#MassPart::Error)(message*[string]*, details (optional)*[string]*)
* [ExtractColour](primer-masspart-class.md#MassPart::ExtractColour)()
* [Flagged](primer-masspart-class.md#MassPart::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-masspart-class.md#MassPart::GetComments)()
* [GetParameter](primer-masspart-class.md#MassPart::GetParameter)(prop*[string]*)
* [Keyword](primer-masspart-class.md#MassPart::Keyword)()
* [KeywordCards](primer-masspart-class.md#MassPart::KeywordCards)()
* [Next](primer-masspart-class.md#MassPart::Next)()
* [Previous](primer-masspart-class.md#MassPart::Previous)()
* [SetFlag](primer-masspart-class.md#MassPart::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Sketch](primer-masspart-class.md#MassPart::Sketch)(redraw (optional)*[boolean]*)
* [Unblank](primer-masspart-class.md#MassPart::Unblank)()
* [Unsketch](primer-masspart-class.md#MassPart::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-masspart-class.md#MassPart::ViewParameters)()
* [Warning](primer-masspart-class.md#MassPart::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-masspart-class.md#MassPart::Xrefs)()
* [toString](primer-masspart-class.md#MassPart::toString)()

## MassPart constants

| **Name** | **Description** |
| --- | --- |
| MassPart.PART | Element is \*ELEMENT\_MASS\_PART. |
| MassPart.SET | Element is \*ELEMENT\_MASS\_PART\_SET. |

## MassPart properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| addmass | real | Added translational mass to be distributed to the nodes of the part or part set ID. |
| colour | [Colour](primer-colour-class.md) | The colour of the mass part |
| exists (read only) | logical | true if element mass part exists, false if referred to but not defined. |
| finmass | real | Final translational mass of the part or part set ID. |
| id | integer | Part or part set ID if the SET option is active. |
| include | integer | The [Include](primer-include-class.md) file number that the element mass part is in. |
| lcid | integer | Optional load curve ID to scale the added mass at time = 0. |
| model (read only) | integer | The [Model](primer-model-class.md) number that the element mass part is in. |
| mwd | integer | Optional flag for mass-weighted distribution. |
| option | constant | The Element Mass Part option. Can be [MassPart.PART](primer-masspart-class.md#MassPart.PART) or [MassPart.SET](primer-masspart-class.md#MassPart.SET) |
| transparency | integer | The transparency of the mass part (0-100) 0% is opaque, 100% is transparent. |

| Detailed Description<br>The MassPart class allows you to create, modify, edit and manipulate element mass part cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new MassPart(Model*[[Model](primer-model-class.md)]*, option*[constant]*, id*[integer]*, addmass (optional)*[real]*, finmass (optional)*[real]*)

Description<br>Create a new [MassPart](primer-masspart-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that mass part will be created in

* option (constant)
 
Suffix for element mass part. Can be [MassPart.PART](primer-masspart-class.md#MassPart.PART) or [MassPart.SET](primer-masspart-class.md#MassPart.SET).

* id (integer)
 
Part or part set ID.

* addmass (optional) (real)
 
Added translational mass.

* finmass (optional) (real)
 
Final translational mass.

| Returns
<br>[MassPart](primer-masspart-class.md) object<br>
Return type
<br>MassPart |
| --- |

| Example
<br>To create a new element mass part in model m with option \_&lt;BLANK&gt; and part ID 10:<br>
```
var mp = new MassPart(m, MassPart.PART, 10);
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a element mass part. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the element mass part

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the element mass part mp:<br>
```
mp.AssociateComment(c);
```
 |
| --- |

* * *

| Blank()

Description<br>Blanks the element mass part |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To blank element mass part mp:<br>
```
mp.Blank();
```
 |
| --- |

* * *

| BlankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the element mass parts in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all element mass parts will be blanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the element mass parts in model m:<br>
```
MassPart.BlankAll(m);
```
 |
| --- |

* * *

| BlankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the flagged element mass parts in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged element mass parts will be blanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the element mass parts that you want to blank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the element mass parts in model m flagged with f:<br>
```
MassPart.BlankFlagged(m, f);
```
 |
| --- |

* * *

| Blanked()

Description<br>Checks if the element mass part is blanked or not. |
| --- |

#### Arguments

No arguments

| Returns
<br>true if blanked, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if element mass part mp is blanked:<br>
```
if (mp.Blanked() ) do_something...
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
<br>To Browse element mass part mp:<br>
```
mp.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the element mass part. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the element mass part

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for element mass part mp:<br>
```
mp.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the element mass part. The target include of the copied element mass part can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>MassPart object<br>
Return type
<br>MassPart |
| --- |

| Example
<br>To copy element mass part mp into element mass part z:<br>
```
var z = mp.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a element mass part |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the element mass part will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>MassPart object (or null if not made).<br>
Return type
<br>MassPart |
| --- |

| Example
<br>To start creating a element mass part in model m:<br>
```
var mp = MassPart.Create(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a element mass part. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the element mass part

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the element mass part mp:<br>
```
mp.DetachComment(c);
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
<br>To Edit element mass part mp:<br>
```
mp.Edit();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for element mass part. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for element mass part mp:<br>
```
mp.Error("My custom error");
```
 |
| --- |

* * *

| ExtractColour()

Description<br>Extracts the **actual** colour used for element mass part.<br> By default in PRIMER many entities such as elements get their colour automatically from the part that they are in. PRIMER cycles through 13 default colours based on the label of the entity. In this case the element mass part [colour](primer-masspart-class.md#colour) property will return the value [Colour.PART](primer-colour-class.md#Colour.PART) instead of the actual colour. This method will return the actual colour which is used for drawing the element mass part. |
| --- |

#### Arguments

No arguments

| Returns
<br>colour value (integer)<br>
Return type
<br>Number |
| --- |

| Example
<br>To return the colour used for drawing element mass part mp:<br>
```
var colour = mp.ExtractColour();
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first element mass part in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first element mass part in

| Returns
<br>MassPart object (or null if there are no element mass parts in the model).<br>
Return type
<br>MassPart |
| --- |

| Example
<br>To get the first element mass part in model m:<br>
```
var mp = MassPart.First(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the element mass parts in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all element mass parts will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the element mass parts

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the element mass parts with flag f in model m:<br>
```
MassPart.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the element mass part is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the element mass part

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if element mass part mp has flag f set on it:<br>
```
if (mp.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each element mass part in the model.<br> **Note that ForEach has been designed to make looping over element mass parts as fast as possible and so has some limitations. Firstly, a single temporary MassPart object is created and on each function call it is updated with the current element mass part data. This means that you should not try to store the MassPart object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new element mass parts inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all element mass parts are in

* func (function)
 
Function to call for each element mass part

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the element mass parts in model m:<br>
```
MassPart.ForEach(m, test);
function test(mp)
{
// mp is MassPart object
}
```
<br><br>To call function test for all of the element mass parts in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
MassPart.ForEach(m, test, data);
function test(mp, extra)
{
// mp is MassPart object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of MassPart objects or properties for all of the element mass parts in a model in PRIMER. If the optional property argument is not given then an array of MassPart objects is returned. If the property argument is given, that property value for each element mass part is returned in the array instead of a MassPart object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get element mass parts from

* property (optional) (string)
 
Name for property to get for all element mass parts in the model

| Returns
<br>Array of MassPart objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of MassPart objects for all of the element mass parts in model m:<br>
```
var a = MassPart.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each element mass part in model m:<br>
```
var a = MassPart.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a element mass part. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the element mass part mp:<br>
```
var comm_array = mp.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of MassPart objects for all of the flagged element mass parts in a model in PRIMER If the optional property argument is not given then an array of MassPart objects is returned. If the property argument is given, then that property value for each element mass part is returned in the array instead of a MassPart object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get element mass parts from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the element mass parts that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged element mass parts in the model

| Returns
<br>Array of MassPart objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of MassPart objects for all of the element mass parts in model m flagged with f:<br>
```
var mp = MassPart.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the element mass parts in model m flagged with f:<br>
```
var a = MassPart.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the MassPart object for a element mass part ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the element mass part in

* number (integer)
 
number of the element mass part you want the MassPart object for

| Returns
<br>MassPart object (or null if element mass part does not exist).<br>
Return type
<br>MassPart |
| --- |

| Example
<br>To get the MassPart object for element mass part 100 in model m<br>
```
var mp = MassPart.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a MassPart property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [MassPart.ViewParameters()](primer-masspart-class.md#MassPart::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
element mass part property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if MassPart property mp.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (mp.GetParameter(mp.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if MassPart property mp.example is a parameter by using the GetParameter method:<br>
```
if (mp.ViewParameters().GetParameter(mp.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this mass part (\*ELEMENT\_MASS\_PART) **Note that a carriage return is not added**. See also [MassPart.KeywordCards()](primer-masspart-class.md#MassPart::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for mass part mp:<br>
```
var key = mp.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the mass part. **Note that a carriage return is not added**. See also [MassPart.Keyword()](primer-masspart-class.md#MassPart::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for mass part mp:<br>
```
var cards = mp.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last element mass part in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last element mass part in

| Returns
<br>MassPart object (or null if there are no element mass parts in the model).<br>
Return type
<br>MassPart |
| --- |

| Example
<br>To get the last element mass part in model m:<br>
```
var mp = MassPart.Last(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next element mass part in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>MassPart object (or null if there are no more element mass parts in the model).<br>
Return type
<br>MassPart |
| --- |

| Example
<br>To get the element mass part in model m after element mass part mp:<br>
```
var mp = mp.Next();
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a element mass part. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only element mass parts from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only element mass parts that are flagged with *limit* can be selected. If omitted, or null, any element mass parts from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[MassPart](primer-masspart-class.md) object (or null if not picked)<br>
Return type
<br>MassPart |
| --- |

| Example
<br>To pick a element mass part from model m giving the prompt 'Pick element mass part from screen':<br>
```
var mp = MassPart.Pick('Pick element mass part from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous element mass part in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>MassPart object (or null if there are no more element mass parts in the model).<br>
Return type
<br>MassPart |
| --- |

| Example
<br>To get the element mass part in model m before element mass part mp:<br>
```
var mp = mp.Previous();
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select element mass parts using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting element mass parts

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only element mass parts from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only element mass parts that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any element mass parts can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of element mass parts selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select element mass parts from model m, flagging those selected with flag f, giving the prompt 'Select element mass parts':<br>
```
MassPart.Select(f, 'Select element mass parts', m);
```
<br><br>To select element mass parts, flagging those selected with flag f but limiting selection to element mass parts flagged with flag l, giving the prompt 'Select element mass parts':<br>
```
MassPart.Select(f, 'Select element mass parts', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the element mass part. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the element mass part

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for element mass part mp:<br>
```
mp.SetFlag(f);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the element mass part. The element mass part will be sketched until you either call [MassPart.Unsketch()](primer-masspart-class.md#MassPart::Unsketch), [MassPart.UnsketchAll()](primer-masspart-class.md#MassPart::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the element mass part is sketched. If omitted redraw is true. If you want to sketch several element mass parts and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch element mass part mp:<br>
```
mp.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged element mass parts in the model. The element mass parts will be sketched until you either call [MassPart.Unsketch()](primer-masspart-class.md#MassPart::Unsketch), [MassPart.UnsketchFlagged()](primer-masspart-class.md#MassPart::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged element mass parts will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the element mass parts that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the element mass parts are sketched. If omitted redraw is true. If you want to sketch flagged element mass parts several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all element mass parts flagged with flag in model m:<br>
```
MassPart.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of element mass parts in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing element mass parts should be counted. If false or omitted
referenced but undefined element mass parts will also be included in the total.

| Returns
<br>number of element mass parts<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of element mass parts in model m:<br>
```
var total = MassPart.Total(m);
```
 |
| --- |

* * *

| Unblank()

Description<br>Unblanks the element mass part |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank element mass part mp:<br>
```
mp.Unblank();
```
 |
| --- |

* * *

| UnblankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the element mass parts in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all element mass parts will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the element mass parts in model m:<br>
```
MassPart.UnblankAll(m);
```
 |
| --- |

* * *

| UnblankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the flagged element mass parts in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the flagged element mass parts will be unblanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the element mass parts that you want to unblank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the element mass parts in model m flagged with f:<br>
```
MassPart.UnblankFlagged(m, f);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the element mass parts in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all element mass parts will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the element mass parts

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the element mass parts in model m:<br>
```
MassPart.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the element mass part. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the element mass part is unsketched. If omitted redraw is true. If you want to unsketch several element mass parts and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch element mass part mp:<br>
```
mp.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all element mass parts. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all element mass parts will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the element mass parts are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all element mass parts in model m:<br>
```
MassPart.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged element mass parts in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all element mass parts will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the element mass parts that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the element mass parts are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all element mass parts flagged with flag in model m:<br>
```
MassPart.UnsketchAll(m, flag);
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
<br>[MassPart](primer-masspart-class.md) object.<br>
Return type
<br>MassPart |
| --- |

| Example
<br>To check if MassPart property mp.example is a parameter by using the [MassPart.GetParameter()](primer-masspart-class.md#MassPart::GetParameter) method:<br>
```
if (mp.ViewParameters().GetParameter(mp.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for element mass part. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for element mass part mp:<br>
```
mp.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this element mass part. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for element mass part mp:<br>
```
var xrefs = mp.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the mass part data in keyword format. Note that this contains the keyword header and the keyword cards. See also [MassPart.Keyword()](primer-masspart-class.md#MassPart::Keyword) and [MassPart.KeywordCards()](primer-masspart-class.md#MassPart::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for mass part mp in keyword format<br>
```
var str = mp.toString();
```
 |
| --- |

* * *