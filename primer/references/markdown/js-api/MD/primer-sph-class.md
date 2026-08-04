# Sph class

The Sph class gives you access to Element SPH cards in PRIMER. [More...](primer-sph-class.md#Sph_details)

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

* [BlankAll](primer-sph-class.md#Sph::BlankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [BlankFlagged](primer-sph-class.md#Sph::BlankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Create](primer-sph-class.md#Sph::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [First](primer-sph-class.md#Sph::First)(Model*[[Model](primer-model-class.md)]*)
* [FirstFreeLabel](primer-sph-class.md#Sph::FirstFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [FlagAll](primer-sph-class.md#Sph::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-sph-class.md#Sph::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-sph-class.md#Sph::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-sph-class.md#Sph::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-sph-class.md#Sph::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-sph-class.md#Sph::Last)(Model*[[Model](primer-model-class.md)]*)
* [LastFreeLabel](primer-sph-class.md#Sph::LastFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [NextFreeLabel](primer-sph-class.md#Sph::NextFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [Pick](primer-sph-class.md#Sph::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [RenumberAll](primer-sph-class.md#Sph::RenumberAll)(Model*[[Model](primer-model-class.md)]*, start*[integer]*)
* [RenumberFlagged](primer-sph-class.md#Sph::RenumberFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*)
* [Select](primer-sph-class.md#Sph::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-sph-class.md#Sph::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-sph-class.md#Sph::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnblankAll](primer-sph-class.md#Sph::UnblankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnblankFlagged](primer-sph-class.md#Sph::UnblankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [UnflagAll](primer-sph-class.md#Sph::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-sph-class.md#Sph::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-sph-class.md#Sph::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-sph-class.md#Sph::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Blank](primer-sph-class.md#Sph::Blank)()
* [Blanked](primer-sph-class.md#Sph::Blanked)()
* [Browse](primer-sph-class.md#Sph::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-sph-class.md#Sph::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-sph-class.md#Sph::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-sph-class.md#Sph::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-sph-class.md#Sph::Edit)(modal (optional)*[boolean]*)
* [Error](primer-sph-class.md#Sph::Error)(message*[string]*, details (optional)*[string]*)
* [ExtractColour](primer-sph-class.md#Sph::ExtractColour)()
* [Flagged](primer-sph-class.md#Sph::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-sph-class.md#Sph::GetComments)()
* [GetParameter](primer-sph-class.md#Sph::GetParameter)(prop*[string]*)
* [Keyword](primer-sph-class.md#Sph::Keyword)()
* [KeywordCards](primer-sph-class.md#Sph::KeywordCards)()
* [Next](primer-sph-class.md#Sph::Next)()
* [Previous](primer-sph-class.md#Sph::Previous)()
* [SetFlag](primer-sph-class.md#Sph::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Sketch](primer-sph-class.md#Sph::Sketch)(redraw (optional)*[boolean]*)
* [Unblank](primer-sph-class.md#Sph::Unblank)()
* [Unsketch](primer-sph-class.md#Sph::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-sph-class.md#Sph::ViewParameters)()
* [Warning](primer-sph-class.md#Sph::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-sph-class.md#Sph::Xrefs)()
* [toString](primer-sph-class.md#Sph::toString)()

## Sph properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| colour | [Colour](primer-colour-class.md) | The colour of the sph element. |
| exists (read only) | logical | true if sph exists, false if referred to but not defined. |
| include | integer | The [Include](primer-include-class.md) file number that the sph is in. |
| mass | real | Mass value. |
| model (read only) | integer | The [Model](primer-model-class.md) number that the sph is in. |
| nid | integer | [Node](primer-node-class.md) ID. |
| pid | integer | [Part](primer-part-class.md) ID to which this element belongs. |
| transparency | integer | The transparency of the sph (0-100) 0% is opaque, 100% is transparent. |

| Detailed Description<br>The Sph class allows you to create, modify, edit and manipulate SPH cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new Sph(Model*[[Model](primer-model-class.md)]*, nid*[integer]*, pid*[integer]*, mass*[real]*)

Description<br>Create a new primer-sph-class.mdobject. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that sph will be created in

* nid (integer)
 
[Node](primer-node-class.md) ID and Element ID are the same for the SPH option.

* pid (integer)
 
[Part](primer-part-class.md) ID to which this element belongs.

* mass (real)
 
Mass value.

| Returns
<br>[Sph](primer-sph-class.md) object<br>
Return type
<br>Sph |
| --- |

| Example
<br>To create a new sph element in model m with nid = 100, pid = 400, mass = 0.9:<br>
```
var s = new Sph(m, 100, 400, 0.9);
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a sph. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the sph

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the sph s:<br>
```
s.AssociateComment(c);
```
 |
| --- |

* * *

| Blank()

Description<br>Blanks the sph |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To blank sph s:<br>
```
s.Blank();
```
 |
| --- |

* * *

| BlankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the sphs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all sphs will be blanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the sphs in model m:<br>
```
Sph.BlankAll(m);
```
 |
| --- |

* * *

| BlankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the flagged sphs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged sphs will be blanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the sphs that you want to blank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the sphs in model m flagged with f:<br>
```
Sph.BlankFlagged(m, f);
```
 |
| --- |

* * *

| Blanked()

Description<br>Checks if the sph is blanked or not. |
| --- |

#### Arguments

No arguments

| Returns
<br>true if blanked, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if sph s is blanked:<br>
```
if (s.Blanked() ) do_something...
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
<br>To Browse sph s:<br>
```
s.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the sph. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the sph

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for sph s:<br>
```
s.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the sph. The target include of the copied sph can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>Sph object<br>
Return type
<br>Sph |
| --- |

| Example
<br>To copy sph s into sph z:<br>
```
var z = s.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a sph |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the sph will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>Sph object (or null if not made).<br>
Return type
<br>Sph |
| --- |

| Example
<br>To start creating a sph in model m:<br>
```
var s = Sph.Create(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a sph. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the sph

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the sph s:<br>
```
s.DetachComment(c);
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
<br>To Edit sph s:<br>
```
s.Edit();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for sph. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for sph s:<br>
```
s.Error("My custom error");
```
 |
| --- |

* * *

| ExtractColour()

Description<br>Extracts the **actual** colour used for sph.<br> By default in PRIMER many entities such as elements get their colour automatically from the part that they are in. PRIMER cycles through 13 default colours based on the label of the entity. In this case the sph [colour](primer-sph-class.md#colour) property will return the value [Colour.PART](primer-colour-class.md#Colour.PART) instead of the actual colour. This method will return the actual colour which is used for drawing the sph. |
| --- |

#### Arguments

No arguments

| Returns
<br>colour value (integer)<br>
Return type
<br>Number |
| --- |

| Example
<br>To return the colour used for drawing sph s:<br>
```
var colour = s.ExtractColour();
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first sph in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first sph in

| Returns
<br>Sph object (or null if there are no sphs in the model).<br>
Return type
<br>Sph |
| --- |

| Example
<br>To get the first sph in model m:<br>
```
var s = Sph.First(m);
```
 |
| --- |

* * *

| FirstFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the first free sph label in the model. Also see [Sph.LastFreeLabel()](primer-sph-class.md#Sph::LastFreeLabel), [Sph.NextFreeLabel()](primer-sph-class.md#Sph::NextFreeLabel) and [Model.FirstFreeItemLabel()](primer-model-class.md#Model::FirstFreeItemLabel). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first free sph label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *First free in layer* in editing panels). If omitted the whole model will be used (Equivalent to *First free* in editing panels).

| Returns
<br>Sph label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the first free sph label in model m:<br>
```
var label = Sph.FirstFreeLabel(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the sphs in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all sphs will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the sphs

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the sphs with flag f in model m:<br>
```
Sph.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the sph is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the sph

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if sph s has flag f set on it:<br>
```
if (s.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each sph in the model.<br> **Note that ForEach has been designed to make looping over sphs as fast as possible and so has some limitations. Firstly, a single temporary Sph object is created and on each function call it is updated with the current sph data. This means that you should not try to store the Sph object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new sphs inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all sphs are in

* func (function)
 
Function to call for each sph

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the sphs in model m:<br>
```
Sph.ForEach(m, test);
function test(s)
{
// s is Sph object
}
```
<br><br>To call function test for all of the sphs in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
Sph.ForEach(m, test, data);
function test(s, extra)
{
// s is Sph object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Sph objects or properties for all of the sphs in a model in PRIMER. If the optional property argument is not given then an array of Sph objects is returned. If the property argument is given, that property value for each sph is returned in the array instead of a Sph object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get sphs from

* property (optional) (string)
 
Name for property to get for all sphs in the model

| Returns
<br>Array of Sph objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Sph objects for all of the sphs in model m:<br>
```
var a = Sph.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each sph in model m:<br>
```
var a = Sph.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a sph. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the sph s:<br>
```
var comm_array = s.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Sph objects for all of the flagged sphs in a model in PRIMER If the optional property argument is not given then an array of Sph objects is returned. If the property argument is given, then that property value for each sph is returned in the array instead of a Sph object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get sphs from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the sphs that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged sphs in the model

| Returns
<br>Array of Sph objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Sph objects for all of the sphs in model m flagged with f:<br>
```
var s = Sph.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the sphs in model m flagged with f:<br>
```
var a = Sph.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the Sph object for a sph ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the sph in

* number (integer)
 
number of the sph you want the Sph object for

| Returns
<br>Sph object (or null if sph does not exist).<br>
Return type
<br>Sph |
| --- |

| Example
<br>To get the Sph object for sph 100 in model m<br>
```
var s = Sph.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a Sph property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [Sph.ViewParameters()](primer-sph-class.md#Sph::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
sph property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if Sph property s.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (s.GetParameter(s.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if Sph property s.example is a parameter by using the GetParameter method:<br>
```
if (s.ViewParameters().GetParameter(s.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this sph (\*ELEMENT\_SPH) **Note that a carriage return is not added**. See also [Sph.KeywordCards()](primer-sph-class.md#Sph::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for sph s:<br>
```
var key = s.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the sph. **Note that a carriage return is not added**. See also [Sph.Keyword()](primer-sph-class.md#Sph::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for sph s:<br>
```
var cards = s.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last sph in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last sph in

| Returns
<br>Sph object (or null if there are no sphs in the model).<br>
Return type
<br>Sph |
| --- |

| Example
<br>To get the last sph in model m:<br>
```
var s = Sph.Last(m);
```
 |
| --- |

* * *

| LastFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the last free sph label in the model. Also see [Sph.FirstFreeLabel()](primer-sph-class.md#Sph::FirstFreeLabel), [Sph.NextFreeLabel()](primer-sph-class.md#Sph::NextFreeLabel) and see [Model.LastFreeItemLabel()](primer-model-class.md#Model::LastFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last free sph label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest free in layer* in editing panels). If omitted the whole model will be used.

| Returns
<br>Sph label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the last free sph label in model m:<br>
```
var label = Sph.LastFreeLabel(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next sph in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Sph object (or null if there are no more sphs in the model).<br>
Return type
<br>Sph |
| --- |

| Example
<br>To get the sph in model m after sph s:<br>
```
var s = s.Next();
```
 |
| --- |

* * *

| NextFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the next free (highest+1) sph label in the model. Also see [Sph.FirstFreeLabel()](primer-sph-class.md#Sph::FirstFreeLabel), [Sph.LastFreeLabel()](primer-sph-class.md#Sph::LastFreeLabel) and [Model.NextFreeItemLabel()](primer-model-class.md#Model::NextFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get next free sph label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest+1 in layer* in editing panels). If omitted the whole model will be used (Equivalent to *Highest+1* in editing panels).

| Returns
<br>Sph label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the next free sph label in model m:<br>
```
var label = Sph.NextFreeLabel(m);
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a sph. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only sphs from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only sphs that are flagged with *limit* can be selected. If omitted, or null, any sphs from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[Sph](primer-sph-class.md) object (or null if not picked)<br>
Return type
<br>Sph |
| --- |

| Example
<br>To pick a sph from model m giving the prompt 'Pick sph from screen':<br>
```
var s = Sph.Pick('Pick sph from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous sph in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Sph object (or null if there are no more sphs in the model).<br>
Return type
<br>Sph |
| --- |

| Example
<br>To get the sph in model m before sph s:<br>
```
var s = s.Previous();
```
 |
| --- |

* * *

| RenumberAll(Model*[[Model](primer-model-class.md)]*, start*[integer]*) [static]
Description<br>Renumbers all of the sphs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all sphs will be renumbered in

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the sphs in model m, from 1000000:<br>
```
Sph.RenumberAll(m, 1000000);
```
 |
| --- |

* * *

| RenumberFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*) [static]
Description<br>Renumbers all of the flagged sphs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged sphs will be renumbered in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the sphs that you want to renumber

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the sphs in model m flagged with f, from 1000000:<br>
```
Sph.RenumberFlagged(m, f, 1000000);
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select sphs using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting sphs

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only sphs from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only sphs that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any sphs can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of sphs selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select sphs from model m, flagging those selected with flag f, giving the prompt 'Select sphs':<br>
```
Sph.Select(f, 'Select sphs', m);
```
<br><br>To select sphs, flagging those selected with flag f but limiting selection to sphs flagged with flag l, giving the prompt 'Select sphs':<br>
```
Sph.Select(f, 'Select sphs', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the sph. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the sph

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for sph s:<br>
```
s.SetFlag(f);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the sph. The sph will be sketched until you either call [Sph.Unsketch()](primer-sph-class.md#Sph::Unsketch), [Sph.UnsketchAll()](primer-sph-class.md#Sph::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the sph is sketched. If omitted redraw is true. If you want to sketch several sphs and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch sph s:<br>
```
s.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged sphs in the model. The sphs will be sketched until you either call [Sph.Unsketch()](primer-sph-class.md#Sph::Unsketch), [Sph.UnsketchFlagged()](primer-sph-class.md#Sph::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged sphs will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the sphs that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the sphs are sketched. If omitted redraw is true. If you want to sketch flagged sphs several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all sphs flagged with flag in model m:<br>
```
Sph.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of sphs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing sphs should be counted. If false or omitted
referenced but undefined sphs will also be included in the total.

| Returns
<br>number of sphs<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of sphs in model m:<br>
```
var total = Sph.Total(m);
```
 |
| --- |

* * *

| Unblank()

Description<br>Unblanks the sph |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank sph s:<br>
```
s.Unblank();
```
 |
| --- |

* * *

| UnblankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the sphs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all sphs will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the sphs in model m:<br>
```
Sph.UnblankAll(m);
```
 |
| --- |

* * *

| UnblankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the flagged sphs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the flagged sphs will be unblanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the sphs that you want to unblank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the sphs in model m flagged with f:<br>
```
Sph.UnblankFlagged(m, f);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the sphs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all sphs will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the sphs

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the sphs in model m:<br>
```
Sph.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the sph. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the sph is unsketched. If omitted redraw is true. If you want to unsketch several sphs and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch sph s:<br>
```
s.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all sphs. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all sphs will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the sphs are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all sphs in model m:<br>
```
Sph.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged sphs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all sphs will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the sphs that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the sphs are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all sphs flagged with flag in model m:<br>
```
Sph.UnsketchAll(m, flag);
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
<br>[Sph](primer-sph-class.md) object.<br>
Return type
<br>Sph |
| --- |

| Example
<br>To check if Sph property s.example is a parameter by using the [Sph.GetParameter()](primer-sph-class.md#Sph::GetParameter) method:<br>
```
if (s.ViewParameters().GetParameter(s.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for sph. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for sph s:<br>
```
s.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this sph. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for sph s:<br>
```
var xrefs = s.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the sph data in keyword format. Note that this contains the keyword header and the keyword cards. See also [Sph.Keyword()](primer-sph-class.md#Sph::Keyword) and [Sph.KeywordCards()](primer-sph-class.md#Sph::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for sph s in keyword format<br>
```
var str = s.toString();
```
 |
| --- |

* * *