# Spotweld class

The Spotweld class gives you access to constrained spotweld cards in PRIMER. [More...](primer-spotweld-class.md#Spotweld_details)

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

* [BlankAll](primer-spotweld-class.md#Spotweld::BlankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [BlankFlagged](primer-spotweld-class.md#Spotweld::BlankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Create](primer-spotweld-class.md#Spotweld::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [First](primer-spotweld-class.md#Spotweld::First)(Model*[[Model](primer-model-class.md)]*)
* [FirstFreeLabel](primer-spotweld-class.md#Spotweld::FirstFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [FlagAll](primer-spotweld-class.md#Spotweld::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-spotweld-class.md#Spotweld::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-spotweld-class.md#Spotweld::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-spotweld-class.md#Spotweld::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-spotweld-class.md#Spotweld::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-spotweld-class.md#Spotweld::Last)(Model*[[Model](primer-model-class.md)]*)
* [LastFreeLabel](primer-spotweld-class.md#Spotweld::LastFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [NextFreeLabel](primer-spotweld-class.md#Spotweld::NextFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [Pick](primer-spotweld-class.md#Spotweld::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [RenumberAll](primer-spotweld-class.md#Spotweld::RenumberAll)(Model*[[Model](primer-model-class.md)]*, start*[integer]*)
* [RenumberFlagged](primer-spotweld-class.md#Spotweld::RenumberFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*)
* [Select](primer-spotweld-class.md#Spotweld::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-spotweld-class.md#Spotweld::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-spotweld-class.md#Spotweld::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnblankAll](primer-spotweld-class.md#Spotweld::UnblankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnblankFlagged](primer-spotweld-class.md#Spotweld::UnblankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [UnflagAll](primer-spotweld-class.md#Spotweld::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-spotweld-class.md#Spotweld::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-spotweld-class.md#Spotweld::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-spotweld-class.md#Spotweld::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Blank](primer-spotweld-class.md#Spotweld::Blank)()
* [Blanked](primer-spotweld-class.md#Spotweld::Blanked)()
* [Browse](primer-spotweld-class.md#Spotweld::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-spotweld-class.md#Spotweld::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-spotweld-class.md#Spotweld::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-spotweld-class.md#Spotweld::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-spotweld-class.md#Spotweld::Edit)(modal (optional)*[boolean]*)
* [Error](primer-spotweld-class.md#Spotweld::Error)(message*[string]*, details (optional)*[string]*)
* [ExtractColour](primer-spotweld-class.md#Spotweld::ExtractColour)()
* [Flagged](primer-spotweld-class.md#Spotweld::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-spotweld-class.md#Spotweld::GetComments)()
* [GetParameter](primer-spotweld-class.md#Spotweld::GetParameter)(prop*[string]*)
* [Keyword](primer-spotweld-class.md#Spotweld::Keyword)()
* [KeywordCards](primer-spotweld-class.md#Spotweld::KeywordCards)()
* [Next](primer-spotweld-class.md#Spotweld::Next)()
* [Previous](primer-spotweld-class.md#Spotweld::Previous)()
* [SetFlag](primer-spotweld-class.md#Spotweld::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Sketch](primer-spotweld-class.md#Spotweld::Sketch)(redraw (optional)*[boolean]*)
* [Unblank](primer-spotweld-class.md#Spotweld::Unblank)()
* [Unsketch](primer-spotweld-class.md#Spotweld::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-spotweld-class.md#Spotweld::ViewParameters)()
* [Warning](primer-spotweld-class.md#Spotweld::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-spotweld-class.md#Spotweld::Xrefs)()
* [toString](primer-spotweld-class.md#Spotweld::toString)()

## Spotweld properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| colour | [Colour](primer-colour-class.md) | The colour of the spotweld |
| ep | real | Effective plastic strain at failure |
| exists (read only) | logical | true if spotweld exists, false if referred to but not defined. |
| filtered\_force | logical | true if \_FILTERED\_FORCE option is set, false if not |
| id | logical | true if \_ID option is set, false if not |
| include | integer | The [Include](primer-include-class.md) file number that the spotweld is in. |
| label | integer | Constrained spotweld number |
| m | real | Exponent for shear spotweld force |
| model (read only) | integer | The [Model](primer-model-class.md) number that the spotweld is in. |
| n | real | Exponent for normal spotweld force |
| n1 | integer | [Node](primer-node-class.md) ID |
| n2 | integer | [Node](primer-node-class.md) ID |
| nf | integer | Number of force vectors stored for filtering |
| sn | real | Normal force at spotweld failure |
| ss | real | Shear force at spotweld failure |
| tf | real | Failure time for nodal constraint set |
| tw | real | Time window for filtering |
| wid | integer | Constrained spotweld number (identical to label) |

| Detailed Description<br>The Spotweld class allows you to create, modify, edit and manipulate constrained spotweld cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new Spotweld(Model*[[Model](primer-model-class.md)]*, n1*[integer]*, n2*[integer]*, label (optional)*[integer]*)

Description<br>Create a new [Spotweld](primer-spotweld-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that constrained spotweld will be created in

* n1 (integer)
 
[Node](primer-node-class.md) ID 1

* n2 (integer)
 
[Node](primer-node-class.md) ID 2

* label (optional) (integer)
 
Constrained spotweld number

| Returns
<br>[Spotweld](primer-spotweld-class.md) object<br>
Return type
<br>Spotweld |
| --- |

| Example
<br>To create a new constrained spotweld 500 in model m between nodes 10 and 11<br>
```
var s = new Spotweld(m, 10, 11, 500);
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a spotweld. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the spotweld

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the spotweld s:<br>
```
s.AssociateComment(c);
```
 |
| --- |

* * *

| Blank()

Description<br>Blanks the spotweld |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To blank spotweld s:<br>
```
s.Blank();
```
 |
| --- |

* * *

| BlankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the spotwelds in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all spotwelds will be blanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the spotwelds in model m:<br>
```
Spotweld.BlankAll(m);
```
 |
| --- |

* * *

| BlankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the flagged spotwelds in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged spotwelds will be blanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the spotwelds that you want to blank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the spotwelds in model m flagged with f:<br>
```
Spotweld.BlankFlagged(m, f);
```
 |
| --- |

* * *

| Blanked()

Description<br>Checks if the spotweld is blanked or not. |
| --- |

#### Arguments

No arguments

| Returns
<br>true if blanked, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if spotweld s is blanked:<br>
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
<br>To Browse spotweld s:<br>
```
s.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the spotweld. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the spotweld

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for spotweld s:<br>
```
s.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the spotweld. The target include of the copied spotweld can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>Spotweld object<br>
Return type
<br>Spotweld |
| --- |

| Example
<br>To copy spotweld s into spotweld z:<br>
```
var z = s.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a spotweld |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the spotweld will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>Spotweld object (or null if not made).<br>
Return type
<br>Spotweld |
| --- |

| Example
<br>To start creating a spotweld in model m:<br>
```
var s = Spotweld.Create(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a spotweld. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the spotweld

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the spotweld s:<br>
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
<br>To Edit spotweld s:<br>
```
s.Edit();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for spotweld. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for spotweld s:<br>
```
s.Error("My custom error");
```
 |
| --- |

* * *

| ExtractColour()

Description<br>Extracts the **actual** colour used for spotweld.<br> By default in PRIMER many entities such as elements get their colour automatically from the part that they are in. PRIMER cycles through 13 default colours based on the label of the entity. In this case the spotweld [colour](primer-spotweld-class.md#colour) property will return the value [Colour.PART](primer-colour-class.md#Colour.PART) instead of the actual colour. This method will return the actual colour which is used for drawing the spotweld. |
| --- |

#### Arguments

No arguments

| Returns
<br>colour value (integer)<br>
Return type
<br>Number |
| --- |

| Example
<br>To return the colour used for drawing spotweld s:<br>
```
var colour = s.ExtractColour();
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first spotweld in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first spotweld in

| Returns
<br>Spotweld object (or null if there are no spotwelds in the model).<br>
Return type
<br>Spotweld |
| --- |

| Example
<br>To get the first spotweld in model m:<br>
```
var s = Spotweld.First(m);
```
 |
| --- |

* * *

| FirstFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the first free spotweld label in the model. Also see [Spotweld.LastFreeLabel()](primer-spotweld-class.md#Spotweld::LastFreeLabel), [Spotweld.NextFreeLabel()](primer-spotweld-class.md#Spotweld::NextFreeLabel) and [Model.FirstFreeItemLabel()](primer-model-class.md#Model::FirstFreeItemLabel). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first free spotweld label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *First free in layer* in editing panels). If omitted the whole model will be used (Equivalent to *First free* in editing panels).

| Returns
<br>Spotweld label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the first free spotweld label in model m:<br>
```
var label = Spotweld.FirstFreeLabel(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the spotwelds in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all spotwelds will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the spotwelds

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the spotwelds with flag f in model m:<br>
```
Spotweld.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the spotweld is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the spotweld

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if spotweld s has flag f set on it:<br>
```
if (s.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each spotweld in the model.<br> **Note that ForEach has been designed to make looping over spotwelds as fast as possible and so has some limitations. Firstly, a single temporary Spotweld object is created and on each function call it is updated with the current spotweld data. This means that you should not try to store the Spotweld object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new spotwelds inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all spotwelds are in

* func (function)
 
Function to call for each spotweld

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the spotwelds in model m:<br>
```
Spotweld.ForEach(m, test);
function test(s)
{
// s is Spotweld object
}
```
<br><br>To call function test for all of the spotwelds in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
Spotweld.ForEach(m, test, data);
function test(s, extra)
{
// s is Spotweld object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Spotweld objects or properties for all of the spotwelds in a model in PRIMER. If the optional property argument is not given then an array of Spotweld objects is returned. If the property argument is given, that property value for each spotweld is returned in the array instead of a Spotweld object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get spotwelds from

* property (optional) (string)
 
Name for property to get for all spotwelds in the model

| Returns
<br>Array of Spotweld objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Spotweld objects for all of the spotwelds in model m:<br>
```
var a = Spotweld.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each spotweld in model m:<br>
```
var a = Spotweld.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a spotweld. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the spotweld s:<br>
```
var comm_array = s.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Spotweld objects for all of the flagged spotwelds in a model in PRIMER If the optional property argument is not given then an array of Spotweld objects is returned. If the property argument is given, then that property value for each spotweld is returned in the array instead of a Spotweld object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get spotwelds from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the spotwelds that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged spotwelds in the model

| Returns
<br>Array of Spotweld objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Spotweld objects for all of the spotwelds in model m flagged with f:<br>
```
var s = Spotweld.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the spotwelds in model m flagged with f:<br>
```
var a = Spotweld.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the Spotweld object for a spotweld ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the spotweld in

* number (integer)
 
number of the spotweld you want the Spotweld object for

| Returns
<br>Spotweld object (or null if spotweld does not exist).<br>
Return type
<br>Spotweld |
| --- |

| Example
<br>To get the Spotweld object for spotweld 100 in model m<br>
```
var s = Spotweld.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a Spotweld property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [Spotweld.ViewParameters()](primer-spotweld-class.md#Spotweld::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
spotweld property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if Spotweld property s.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (s.GetParameter(s.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if Spotweld property s.example is a parameter by using the GetParameter method:<br>
```
if (s.ViewParameters().GetParameter(s.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this spotweld (\*CONSTRAINED\_SPOTWELD). **Note that a carriage return is not added**. See also [Spotweld.KeywordCards()](primer-spotweld-class.md#Spotweld::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for spotweld s:<br>
```
var key = s.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the spotweld. **Note that a carriage return is not added**. See also [Spotweld.Keyword()](primer-spotweld-class.md#Spotweld::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for spotweld s:<br>
```
var cards = s.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last spotweld in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last spotweld in

| Returns
<br>Spotweld object (or null if there are no spotwelds in the model).<br>
Return type
<br>Spotweld |
| --- |

| Example
<br>To get the last spotweld in model m:<br>
```
var s = Spotweld.Last(m);
```
 |
| --- |

* * *

| LastFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the last free spotweld label in the model. Also see [Spotweld.FirstFreeLabel()](primer-spotweld-class.md#Spotweld::FirstFreeLabel), [Spotweld.NextFreeLabel()](primer-spotweld-class.md#Spotweld::NextFreeLabel) and see [Model.LastFreeItemLabel()](primer-model-class.md#Model::LastFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last free spotweld label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest free in layer* in editing panels). If omitted the whole model will be used.

| Returns
<br>Spotweld label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the last free spotweld label in model m:<br>
```
var label = Spotweld.LastFreeLabel(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next spotweld in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Spotweld object (or null if there are no more spotwelds in the model).<br>
Return type
<br>Spotweld |
| --- |

| Example
<br>To get the spotweld in model m after spotweld s:<br>
```
var s = s.Next();
```
 |
| --- |

* * *

| NextFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the next free (highest+1) spotweld label in the model. Also see [Spotweld.FirstFreeLabel()](primer-spotweld-class.md#Spotweld::FirstFreeLabel), [Spotweld.LastFreeLabel()](primer-spotweld-class.md#Spotweld::LastFreeLabel) and [Model.NextFreeItemLabel()](primer-model-class.md#Model::NextFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get next free spotweld label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest+1 in layer* in editing panels). If omitted the whole model will be used (Equivalent to *Highest+1* in editing panels).

| Returns
<br>Spotweld label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the next free spotweld label in model m:<br>
```
var label = Spotweld.NextFreeLabel(m);
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a spotweld. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only spotwelds from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only spotwelds that are flagged with *limit* can be selected. If omitted, or null, any spotwelds from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[Spotweld](primer-spotweld-class.md) object (or null if not picked)<br>
Return type
<br>Spotweld |
| --- |

| Example
<br>To pick a spotweld from model m giving the prompt 'Pick spotweld from screen':<br>
```
var s = Spotweld.Pick('Pick spotweld from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous spotweld in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Spotweld object (or null if there are no more spotwelds in the model).<br>
Return type
<br>Spotweld |
| --- |

| Example
<br>To get the spotweld in model m before spotweld s:<br>
```
var s = s.Previous();
```
 |
| --- |

* * *

| RenumberAll(Model*[[Model](primer-model-class.md)]*, start*[integer]*) [static]
Description<br>Renumbers all of the spotwelds in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all spotwelds will be renumbered in

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the spotwelds in model m, from 1000000:<br>
```
Spotweld.RenumberAll(m, 1000000);
```
 |
| --- |

* * *

| RenumberFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*) [static]
Description<br>Renumbers all of the flagged spotwelds in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged spotwelds will be renumbered in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the spotwelds that you want to renumber

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the spotwelds in model m flagged with f, from 1000000:<br>
```
Spotweld.RenumberFlagged(m, f, 1000000);
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select spotwelds using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting spotwelds

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only spotwelds from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only spotwelds that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any spotwelds can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of spotwelds selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select spotwelds from model m, flagging those selected with flag f, giving the prompt 'Select spotwelds':<br>
```
Spotweld.Select(f, 'Select spotwelds', m);
```
<br><br>To select spotwelds, flagging those selected with flag f but limiting selection to spotwelds flagged with flag l, giving the prompt 'Select spotwelds':<br>
```
Spotweld.Select(f, 'Select spotwelds', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the spotweld. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the spotweld

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for spotweld s:<br>
```
s.SetFlag(f);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the spotweld. The spotweld will be sketched until you either call [Spotweld.Unsketch()](primer-spotweld-class.md#Spotweld::Unsketch), [Spotweld.UnsketchAll()](primer-spotweld-class.md#Spotweld::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the spotweld is sketched. If omitted redraw is true. If you want to sketch several spotwelds and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch spotweld s:<br>
```
s.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged spotwelds in the model. The spotwelds will be sketched until you either call [Spotweld.Unsketch()](primer-spotweld-class.md#Spotweld::Unsketch), [Spotweld.UnsketchFlagged()](primer-spotweld-class.md#Spotweld::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged spotwelds will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the spotwelds that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the spotwelds are sketched. If omitted redraw is true. If you want to sketch flagged spotwelds several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all spotwelds flagged with flag in model m:<br>
```
Spotweld.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of spotwelds in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing spotwelds should be counted. If false or omitted
referenced but undefined spotwelds will also be included in the total.

| Returns
<br>number of spotwelds<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of spotwelds in model m:<br>
```
var total = Spotweld.Total(m);
```
 |
| --- |

* * *

| Unblank()

Description<br>Unblanks the spotweld |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank spotweld s:<br>
```
s.Unblank();
```
 |
| --- |

* * *

| UnblankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the spotwelds in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all spotwelds will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the spotwelds in model m:<br>
```
Spotweld.UnblankAll(m);
```
 |
| --- |

* * *

| UnblankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the flagged spotwelds in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the flagged spotwelds will be unblanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the spotwelds that you want to unblank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the spotwelds in model m flagged with f:<br>
```
Spotweld.UnblankFlagged(m, f);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the spotwelds in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all spotwelds will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the spotwelds

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the spotwelds in model m:<br>
```
Spotweld.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the spotweld. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the spotweld is unsketched. If omitted redraw is true. If you want to unsketch several spotwelds and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch spotweld s:<br>
```
s.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all spotwelds. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all spotwelds will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the spotwelds are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all spotwelds in model m:<br>
```
Spotweld.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged spotwelds in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all spotwelds will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the spotwelds that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the spotwelds are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all spotwelds flagged with flag in model m:<br>
```
Spotweld.UnsketchAll(m, flag);
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
<br>[Spotweld](primer-spotweld-class.md) object.<br>
Return type
<br>Spotweld |
| --- |

| Example
<br>To check if Spotweld property s.example is a parameter by using the [Spotweld.GetParameter()](primer-spotweld-class.md#Spotweld::GetParameter) method:<br>
```
if (s.ViewParameters().GetParameter(s.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for spotweld. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for spotweld s:<br>
```
s.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this spotweld. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for spotweld s:<br>
```
var xrefs = s.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the spotweld data in keyword format. Note that this contains the keyword header and the keyword cards. See also [Spotweld.Keyword()](primer-spotweld-class.md#Spotweld::Keyword) and [Spotweld.KeywordCards()](primer-spotweld-class.md#Spotweld::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for spotweld s in keyword format<br>
```
var str = s.toString();
```
 |
| --- |

* * *