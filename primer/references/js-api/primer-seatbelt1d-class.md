# Seatbelt1D class

The Seatbelt1D class gives you access to 2 noded (1D) element seatbelt cards in PRIMER. [More...](primer-seatbelt1d-class.md#Seatbelt1D_details)

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

* [BlankAll](primer-seatbelt1d-class.md#Seatbelt1D::BlankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [BlankFlagged](primer-seatbelt1d-class.md#Seatbelt1D::BlankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Create](primer-seatbelt1d-class.md#Seatbelt1D::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [First](primer-seatbelt1d-class.md#Seatbelt1D::First)(Model*[[Model](primer-model-class.md)]*)
* [FirstFreeLabel](primer-seatbelt1d-class.md#Seatbelt1D::FirstFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [FlagAll](primer-seatbelt1d-class.md#Seatbelt1D::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-seatbelt1d-class.md#Seatbelt1D::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-seatbelt1d-class.md#Seatbelt1D::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-seatbelt1d-class.md#Seatbelt1D::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-seatbelt1d-class.md#Seatbelt1D::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-seatbelt1d-class.md#Seatbelt1D::Last)(Model*[[Model](primer-model-class.md)]*)
* [LastFreeLabel](primer-seatbelt1d-class.md#Seatbelt1D::LastFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [NextFreeLabel](primer-seatbelt1d-class.md#Seatbelt1D::NextFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [Pick](primer-seatbelt1d-class.md#Seatbelt1D::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [RenumberAll](primer-seatbelt1d-class.md#Seatbelt1D::RenumberAll)(Model*[[Model](primer-model-class.md)]*, start*[integer]*)
* [RenumberFlagged](primer-seatbelt1d-class.md#Seatbelt1D::RenumberFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*)
* [Select](primer-seatbelt1d-class.md#Seatbelt1D::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-seatbelt1d-class.md#Seatbelt1D::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-seatbelt1d-class.md#Seatbelt1D::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnblankAll](primer-seatbelt1d-class.md#Seatbelt1D::UnblankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnblankFlagged](primer-seatbelt1d-class.md#Seatbelt1D::UnblankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [UnflagAll](primer-seatbelt1d-class.md#Seatbelt1D::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-seatbelt1d-class.md#Seatbelt1D::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-seatbelt1d-class.md#Seatbelt1D::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-seatbelt1d-class.md#Seatbelt1D::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Blank](primer-seatbelt1d-class.md#Seatbelt1D::Blank)()
* [Blanked](primer-seatbelt1d-class.md#Seatbelt1D::Blanked)()
* [Browse](primer-seatbelt1d-class.md#Seatbelt1D::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-seatbelt1d-class.md#Seatbelt1D::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-seatbelt1d-class.md#Seatbelt1D::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-seatbelt1d-class.md#Seatbelt1D::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-seatbelt1d-class.md#Seatbelt1D::Edit)(modal (optional)*[boolean]*)
* [Error](primer-seatbelt1d-class.md#Seatbelt1D::Error)(message*[string]*, details (optional)*[string]*)
* [ExtractColour](primer-seatbelt1d-class.md#Seatbelt1D::ExtractColour)()
* [Flagged](primer-seatbelt1d-class.md#Seatbelt1D::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-seatbelt1d-class.md#Seatbelt1D::GetComments)()
* [GetParameter](primer-seatbelt1d-class.md#Seatbelt1D::GetParameter)(prop*[string]*)
* [Keyword](primer-seatbelt1d-class.md#Seatbelt1D::Keyword)()
* [KeywordCards](primer-seatbelt1d-class.md#Seatbelt1D::KeywordCards)()
* [Next](primer-seatbelt1d-class.md#Seatbelt1D::Next)()
* [Previous](primer-seatbelt1d-class.md#Seatbelt1D::Previous)()
* [SetFlag](primer-seatbelt1d-class.md#Seatbelt1D::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Sketch](primer-seatbelt1d-class.md#Seatbelt1D::Sketch)(redraw (optional)*[boolean]*)
* [Timestep](primer-seatbelt1d-class.md#Seatbelt1D::Timestep)()
* [Unblank](primer-seatbelt1d-class.md#Seatbelt1D::Unblank)()
* [Unsketch](primer-seatbelt1d-class.md#Seatbelt1D::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-seatbelt1d-class.md#Seatbelt1D::ViewParameters)()
* [Warning](primer-seatbelt1d-class.md#Seatbelt1D::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-seatbelt1d-class.md#Seatbelt1D::Xrefs)()
* [toString](primer-seatbelt1d-class.md#Seatbelt1D::toString)()

## Seatbelt1D properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| colour | [Colour](primer-colour-class.md) | The colour of the seatbelt |
| eid | integer | [Seatbelt1D](primer-seatbelt1d-class.md) number. Also see the [label](primer-seatbelt1d-class.md#label) property which is an alternative name for this. |
| exists (read only) | logical | true if seatbelt exists, false if referred to but not defined. |
| include | integer | The [Include](primer-include-class.md) file number that the seatbelt is in. |
| label | integer | [Seatbelt1D](primer-seatbelt1d-class.md) number. Also see the [eid](primer-seatbelt1d-class.md#eid) property which is an alternative name for this. |
| model (read only) | integer | The [Model](primer-model-class.md) number that the seatbelt is in. |
| n1 | integer | [Node](primer-node-class.md) 1 ID |
| n2 | integer | [Node](primer-node-class.md) 2 ID |
| pid | integer | [Part](primer-part-class.md) ID |
| sbrid | integer | [Retractor](primer-retractor-class.md) ID |
| slen | real | Initial slack length |
| transparency | integer | The transparency of the seatbelt (0-100) 0% is opaque, 100% is transparent. |

| Detailed Description<br>The Seatbelt1D class allows you to create, modify, edit and manipulate 2 noded (1D) element seatbelt cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new Seatbelt1D(Model*[[Model](primer-model-class.md)]*, eid*[integer]*, pid*[integer]*, n1*[integer]*, n2*[integer]*)

Description<br>Create a new [Seatbelt1D](primer-seatbelt1d-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that seatbelt will be created in

* eid (integer)
 
[Seatbelt](primer-seatbelt1d-class.md) ID.

* pid (integer)
 
[Part](primer-part-class.md) number.

* n1 (integer)
 
[Node](primer-node-class.md) 1 ID

* n2 (integer)
 
[Node](primer-node-class.md) 2 ID

| Returns
<br>[Seatbelt1D](primer-seatbelt1d-class.md) object<br>
Return type
<br>Seatbelt1D |
| --- |

| Example
<br>To create a new 2 noded element seatbelt in model m with label 100, part 10 and nodes 20, 21:<br>
```
var a = new Seatbelt1D(m, 100, 10, 20, 21);
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a seatbelt. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the seatbelt

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the seatbelt s:<br>
```
s.AssociateComment(c);
```
 |
| --- |

* * *

| Blank()

Description<br>Blanks the seatbelt |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To blank seatbelt s:<br>
```
s.Blank();
```
 |
| --- |

* * *

| BlankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the seatbelts in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all seatbelts will be blanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the seatbelts in model m:<br>
```
Seatbelt1D.BlankAll(m);
```
 |
| --- |

* * *

| BlankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the flagged seatbelts in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged seatbelts will be blanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the seatbelts that you want to blank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the seatbelts in model m flagged with f:<br>
```
Seatbelt1D.BlankFlagged(m, f);
```
 |
| --- |

* * *

| Blanked()

Description<br>Checks if the seatbelt is blanked or not. |
| --- |

#### Arguments

No arguments

| Returns
<br>true if blanked, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if seatbelt s is blanked:<br>
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
<br>To Browse seatbelt s:<br>
```
s.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the seatbelt. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the seatbelt

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for seatbelt s:<br>
```
s.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the seatbelt. The target include of the copied seatbelt can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>Seatbelt1D object<br>
Return type
<br>Seatbelt1D |
| --- |

| Example
<br>To copy seatbelt s into seatbelt z:<br>
```
var z = s.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a seatbelt |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the seatbelt will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>Seatbelt1D object (or null if not made).<br>
Return type
<br>Seatbelt1D |
| --- |

| Example
<br>To start creating a seatbelt in model m:<br>
```
var s = Seatbelt1D.Create(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a seatbelt. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the seatbelt

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the seatbelt s:<br>
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
<br>To Edit seatbelt s:<br>
```
s.Edit();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for seatbelt. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for seatbelt s:<br>
```
s.Error("My custom error");
```
 |
| --- |

* * *

| ExtractColour()

Description<br>Extracts the **actual** colour used for seatbelt.<br> By default in PRIMER many entities such as elements get their colour automatically from the part that they are in. PRIMER cycles through 13 default colours based on the label of the entity. In this case the seatbelt [colour](primer-seatbelt1d-class.md#colour) property will return the value [Colour.PART](primer-colour-class.md#Colour.PART) instead of the actual colour. This method will return the actual colour which is used for drawing the seatbelt. |
| --- |

#### Arguments

No arguments

| Returns
<br>colour value (integer)<br>
Return type
<br>Number |
| --- |

| Example
<br>To return the colour used for drawing seatbelt s:<br>
```
var colour = s.ExtractColour();
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first seatbelt in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first seatbelt in

| Returns
<br>Seatbelt1D object (or null if there are no seatbelts in the model).<br>
Return type
<br>Seatbelt1D |
| --- |

| Example
<br>To get the first seatbelt in model m:<br>
```
var s = Seatbelt1D.First(m);
```
 |
| --- |

* * *

| FirstFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the first free seatbelt label in the model. Also see [Seatbelt1D.LastFreeLabel()](primer-seatbelt1d-class.md#Seatbelt1D::LastFreeLabel), [Seatbelt1D.NextFreeLabel()](primer-seatbelt1d-class.md#Seatbelt1D::NextFreeLabel) and [Model.FirstFreeItemLabel()](primer-model-class.md#Model::FirstFreeItemLabel). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first free seatbelt label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *First free in layer* in editing panels). If omitted the whole model will be used (Equivalent to *First free* in editing panels).

| Returns
<br>Seatbelt1D label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the first free seatbelt label in model m:<br>
```
var label = Seatbelt1D.FirstFreeLabel(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the seatbelts in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all seatbelts will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the seatbelts

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the seatbelts with flag f in model m:<br>
```
Seatbelt1D.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the seatbelt is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the seatbelt

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if seatbelt s has flag f set on it:<br>
```
if (s.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each seatbelt in the model.<br> **Note that ForEach has been designed to make looping over seatbelts as fast as possible and so has some limitations. Firstly, a single temporary Seatbelt1D object is created and on each function call it is updated with the current seatbelt data. This means that you should not try to store the Seatbelt1D object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new seatbelts inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all seatbelts are in

* func (function)
 
Function to call for each seatbelt

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the seatbelts in model m:<br>
```
Seatbelt1D.ForEach(m, test);
function test(s)
{
// s is Seatbelt1D object
}
```
<br><br>To call function test for all of the seatbelts in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
Seatbelt1D.ForEach(m, test, data);
function test(s, extra)
{
// s is Seatbelt1D object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Seatbelt1D objects or properties for all of the seatbelts in a model in PRIMER. If the optional property argument is not given then an array of Seatbelt1D objects is returned. If the property argument is given, that property value for each seatbelt is returned in the array instead of a Seatbelt1D object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get seatbelts from

* property (optional) (string)
 
Name for property to get for all seatbelts in the model

| Returns
<br>Array of Seatbelt1D objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Seatbelt1D objects for all of the seatbelts in model m:<br>
```
var a = Seatbelt1D.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each seatbelt in model m:<br>
```
var a = Seatbelt1D.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a seatbelt. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the seatbelt s:<br>
```
var comm_array = s.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Seatbelt1D objects for all of the flagged seatbelts in a model in PRIMER If the optional property argument is not given then an array of Seatbelt1D objects is returned. If the property argument is given, then that property value for each seatbelt is returned in the array instead of a Seatbelt1D object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get seatbelts from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the seatbelts that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged seatbelts in the model

| Returns
<br>Array of Seatbelt1D objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Seatbelt1D objects for all of the seatbelts in model m flagged with f:<br>
```
var s = Seatbelt1D.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the seatbelts in model m flagged with f:<br>
```
var a = Seatbelt1D.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the Seatbelt1D object for a seatbelt ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the seatbelt in

* number (integer)
 
number of the seatbelt you want the Seatbelt1D object for

| Returns
<br>Seatbelt1D object (or null if seatbelt does not exist).<br>
Return type
<br>Seatbelt1D |
| --- |

| Example
<br>To get the Seatbelt1D object for seatbelt 100 in model m<br>
```
var s = Seatbelt1D.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a Seatbelt1D property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [Seatbelt1D.ViewParameters()](primer-seatbelt1d-class.md#Seatbelt1D::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
seatbelt property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if Seatbelt1D property s.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (s.GetParameter(s.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if Seatbelt1D property s.example is a parameter by using the GetParameter method:<br>
```
if (s.ViewParameters().GetParameter(s.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this seatbelt (\*ELEMENT\_SEATBELT) **Note that a carriage return is not added**. See also [Seatbelt1D.KeywordCards()](primer-seatbelt1d-class.md#Seatbelt1D::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for seatbelt s:<br>
```
var key = s.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the seatbelt. **Note that a carriage return is not added**. See also [Seatbelt1D.Keyword()](primer-seatbelt1d-class.md#Seatbelt1D::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for seatbelt s:<br>
```
var cards = s.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last seatbelt in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last seatbelt in

| Returns
<br>Seatbelt1D object (or null if there are no seatbelts in the model).<br>
Return type
<br>Seatbelt1D |
| --- |

| Example
<br>To get the last seatbelt in model m:<br>
```
var s = Seatbelt1D.Last(m);
```
 |
| --- |

* * *

| LastFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the last free seatbelt label in the model. Also see [Seatbelt1D.FirstFreeLabel()](primer-seatbelt1d-class.md#Seatbelt1D::FirstFreeLabel), [Seatbelt1D.NextFreeLabel()](primer-seatbelt1d-class.md#Seatbelt1D::NextFreeLabel) and see [Model.LastFreeItemLabel()](primer-model-class.md#Model::LastFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last free seatbelt label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest free in layer* in editing panels). If omitted the whole model will be used.

| Returns
<br>Seatbelt1D label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the last free seatbelt label in model m:<br>
```
var label = Seatbelt1D.LastFreeLabel(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next seatbelt in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Seatbelt1D object (or null if there are no more seatbelts in the model).<br>
Return type
<br>Seatbelt1D |
| --- |

| Example
<br>To get the seatbelt in model m after seatbelt s:<br>
```
var s = s.Next();
```
 |
| --- |

* * *

| NextFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the next free (highest+1) seatbelt label in the model. Also see [Seatbelt1D.FirstFreeLabel()](primer-seatbelt1d-class.md#Seatbelt1D::FirstFreeLabel), [Seatbelt1D.LastFreeLabel()](primer-seatbelt1d-class.md#Seatbelt1D::LastFreeLabel) and [Model.NextFreeItemLabel()](primer-model-class.md#Model::NextFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get next free seatbelt label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest+1 in layer* in editing panels). If omitted the whole model will be used (Equivalent to *Highest+1* in editing panels).

| Returns
<br>Seatbelt1D label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the next free seatbelt label in model m:<br>
```
var label = Seatbelt1D.NextFreeLabel(m);
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a seatbelt. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only seatbelts from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only seatbelts that are flagged with *limit* can be selected. If omitted, or null, any seatbelts from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[Seatbelt1D](primer-seatbelt1d-class.md) object (or null if not picked)<br>
Return type
<br>Seatbelt1D |
| --- |

| Example
<br>To pick a seatbelt from model m giving the prompt 'Pick seatbelt from screen':<br>
```
var s = Seatbelt1D.Pick('Pick seatbelt from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous seatbelt in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Seatbelt1D object (or null if there are no more seatbelts in the model).<br>
Return type
<br>Seatbelt1D |
| --- |

| Example
<br>To get the seatbelt in model m before seatbelt s:<br>
```
var s = s.Previous();
```
 |
| --- |

* * *

| RenumberAll(Model*[[Model](primer-model-class.md)]*, start*[integer]*) [static]
Description<br>Renumbers all of the seatbelts in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all seatbelts will be renumbered in

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the seatbelts in model m, from 1000000:<br>
```
Seatbelt1D.RenumberAll(m, 1000000);
```
 |
| --- |

* * *

| RenumberFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*) [static]
Description<br>Renumbers all of the flagged seatbelts in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged seatbelts will be renumbered in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the seatbelts that you want to renumber

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the seatbelts in model m flagged with f, from 1000000:<br>
```
Seatbelt1D.RenumberFlagged(m, f, 1000000);
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select seatbelts using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting seatbelts

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only seatbelts from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only seatbelts that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any seatbelts can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of seatbelts selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select seatbelts from model m, flagging those selected with flag f, giving the prompt 'Select seatbelts':<br>
```
Seatbelt1D.Select(f, 'Select seatbelts', m);
```
<br><br>To select seatbelts, flagging those selected with flag f but limiting selection to seatbelts flagged with flag l, giving the prompt 'Select seatbelts':<br>
```
Seatbelt1D.Select(f, 'Select seatbelts', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the seatbelt. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the seatbelt

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for seatbelt s:<br>
```
s.SetFlag(f);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the seatbelt. The seatbelt will be sketched until you either call [Seatbelt1D.Unsketch()](primer-seatbelt1d-class.md#Seatbelt1D::Unsketch), [Seatbelt1D.UnsketchAll()](primer-seatbelt1d-class.md#Seatbelt1D::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the seatbelt is sketched. If omitted redraw is true. If you want to sketch several seatbelts and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch seatbelt s:<br>
```
s.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged seatbelts in the model. The seatbelts will be sketched until you either call [Seatbelt1D.Unsketch()](primer-seatbelt1d-class.md#Seatbelt1D::Unsketch), [Seatbelt1D.UnsketchFlagged()](primer-seatbelt1d-class.md#Seatbelt1D::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged seatbelts will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the seatbelts that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the seatbelts are sketched. If omitted redraw is true. If you want to sketch flagged seatbelts several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all seatbelts flagged with flag in model m:<br>
```
Seatbelt1D.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Timestep()

Description<br>Calculates the timestep for the seatbelt |
| --- |

#### Arguments

No arguments

| Returns
<br>real<br>
Return type
<br>Number |
| --- |

| Example
<br>To calculate the timestep for seatbelt s:<br>
```
var timestep = s.Timestep();
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of seatbelts in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing seatbelts should be counted. If false or omitted
referenced but undefined seatbelts will also be included in the total.

| Returns
<br>number of seatbelts<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of seatbelts in model m:<br>
```
var total = Seatbelt1D.Total(m);
```
 |
| --- |

* * *

| Unblank()

Description<br>Unblanks the seatbelt |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank seatbelt s:<br>
```
s.Unblank();
```
 |
| --- |

* * *

| UnblankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the seatbelts in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all seatbelts will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the seatbelts in model m:<br>
```
Seatbelt1D.UnblankAll(m);
```
 |
| --- |

* * *

| UnblankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the flagged seatbelts in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the flagged seatbelts will be unblanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the seatbelts that you want to unblank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the seatbelts in model m flagged with f:<br>
```
Seatbelt1D.UnblankFlagged(m, f);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the seatbelts in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all seatbelts will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the seatbelts

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the seatbelts in model m:<br>
```
Seatbelt1D.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the seatbelt. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the seatbelt is unsketched. If omitted redraw is true. If you want to unsketch several seatbelts and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch seatbelt s:<br>
```
s.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all seatbelts. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all seatbelts will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the seatbelts are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all seatbelts in model m:<br>
```
Seatbelt1D.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged seatbelts in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all seatbelts will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the seatbelts that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the seatbelts are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all seatbelts flagged with flag in model m:<br>
```
Seatbelt1D.UnsketchAll(m, flag);
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
<br>[Seatbelt1D](primer-seatbelt1d-class.md) object.<br>
Return type
<br>Seatbelt1D |
| --- |

| Example
<br>To check if Seatbelt1D property s.example is a parameter by using the [Seatbelt1D.GetParameter()](primer-seatbelt1d-class.md#Seatbelt1D::GetParameter) method:<br>
```
if (s.ViewParameters().GetParameter(s.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for seatbelt. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for seatbelt s:<br>
```
s.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this seatbelt. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for seatbelt s:<br>
```
var xrefs = s.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the seatbelt data in keyword format. Note that this contains the keyword header and the keyword cards. See also [Seatbelt1D.Keyword()](primer-seatbelt1d-class.md#Seatbelt1D::Keyword) and [Seatbelt1D.KeywordCards()](primer-seatbelt1d-class.md#Seatbelt1D::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for seatbelt s in keyword format<br>
```
var str = s.toString();
```
 |
| --- |

* * *