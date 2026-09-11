# Retractor class

The Retractor class gives you access to seatbelt retractor cards in PRIMER. [More...](primer-retractor-class.md#Retractor_details)

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

* [BlankAll](primer-retractor-class.md#Retractor::BlankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [BlankFlagged](primer-retractor-class.md#Retractor::BlankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Create](primer-retractor-class.md#Retractor::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [First](primer-retractor-class.md#Retractor::First)(Model*[[Model](primer-model-class.md)]*)
* [FirstFreeLabel](primer-retractor-class.md#Retractor::FirstFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [FlagAll](primer-retractor-class.md#Retractor::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-retractor-class.md#Retractor::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-retractor-class.md#Retractor::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-retractor-class.md#Retractor::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-retractor-class.md#Retractor::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-retractor-class.md#Retractor::Last)(Model*[[Model](primer-model-class.md)]*)
* [LastFreeLabel](primer-retractor-class.md#Retractor::LastFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [NextFreeLabel](primer-retractor-class.md#Retractor::NextFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [Pick](primer-retractor-class.md#Retractor::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [RenumberAll](primer-retractor-class.md#Retractor::RenumberAll)(Model*[[Model](primer-model-class.md)]*, start*[integer]*)
* [RenumberFlagged](primer-retractor-class.md#Retractor::RenumberFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*)
* [Select](primer-retractor-class.md#Retractor::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-retractor-class.md#Retractor::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-retractor-class.md#Retractor::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnblankAll](primer-retractor-class.md#Retractor::UnblankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnblankFlagged](primer-retractor-class.md#Retractor::UnblankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [UnflagAll](primer-retractor-class.md#Retractor::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-retractor-class.md#Retractor::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-retractor-class.md#Retractor::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-retractor-class.md#Retractor::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Blank](primer-retractor-class.md#Retractor::Blank)()
* [Blanked](primer-retractor-class.md#Retractor::Blanked)()
* [Browse](primer-retractor-class.md#Retractor::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-retractor-class.md#Retractor::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-retractor-class.md#Retractor::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-retractor-class.md#Retractor::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-retractor-class.md#Retractor::Edit)(modal (optional)*[boolean]*)
* [Error](primer-retractor-class.md#Retractor::Error)(message*[string]*, details (optional)*[string]*)
* [ExtractColour](primer-retractor-class.md#Retractor::ExtractColour)()
* [Flagged](primer-retractor-class.md#Retractor::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-retractor-class.md#Retractor::GetComments)()
* [GetParameter](primer-retractor-class.md#Retractor::GetParameter)(prop*[string]*)
* [Keyword](primer-retractor-class.md#Retractor::Keyword)()
* [KeywordCards](primer-retractor-class.md#Retractor::KeywordCards)()
* [Next](primer-retractor-class.md#Retractor::Next)()
* [Previous](primer-retractor-class.md#Retractor::Previous)()
* [SetFlag](primer-retractor-class.md#Retractor::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Sketch](primer-retractor-class.md#Retractor::Sketch)(redraw (optional)*[boolean]*)
* [Unblank](primer-retractor-class.md#Retractor::Unblank)()
* [Unsketch](primer-retractor-class.md#Retractor::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-retractor-class.md#Retractor::ViewParameters)()
* [Warning](primer-retractor-class.md#Retractor::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-retractor-class.md#Retractor::Xrefs)()
* [toString](primer-retractor-class.md#Retractor::toString)()

## Retractor properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| colour | [Colour](primer-colour-class.md) | The colour of the retractor |
| dsid | integer | Retractor deactivation [Sensor](primer-sensor-class.md) |
| exists (read only) | logical | true if retractor exists, false if referred to but not defined. |
| flopt | integer | limiting force flage |
| include | integer | The [Include](primer-include-class.md) file number that the retractor is in. |
| label | integer | [Retractor](primer-retractor-class.md) number. Also see the [sbrid](primer-retractor-class.md#sbrid) property which is an alternative name for this. |
| lcfl | integer | [Loadcurve](primer-curve-class.md) representing an adaptive multi-level load limiter |
| lfed | real | Fed length |
| llcid | integer | [Loadcurve](primer-curve-class.md) for loading (pull-out vs force) |
| model (read only) | integer | The [Model](primer-model-class.md) number that the retractor is in. |
| nsbi | integer | Number of elements inside the retractor |
| pull | real | Amount of pull out between time delay ending and retractor locking |
| sbid | integer | [Seatbelt1D](primer-seatbelt1d-class.md) number (or [Set Shell](primer-set-class.md) number if [sbrnid](primer-retractor-class.md#sbrnid) is negative). |
| sbrid | integer | [Retractor](primer-retractor-class.md) number. Also see the [label](primer-retractor-class.md#label) property which is an alternative name for this. |
| sbrnid | integer | [Node](primer-node-class.md) number (or [Set Node](primer-set-class.md) number if negative). |
| shell\_seatbelt (read only) | logical | true if retractor is used for shell (2D) seatbelt elements. |
| sid1 | integer | [Sensor](primer-sensor-class.md) number 1 |
| sid2 | integer | [Sensor](primer-sensor-class.md) number 2 |
| sid3 | integer | [Sensor](primer-sensor-class.md) number 3 |
| sid4 | integer | [Sensor](primer-sensor-class.md) number 4 |
| tdel | real | Time delay after sensor triggers |
| transparency | integer | The transparency of the retractor (0-100) 0% is opaque, 100% is transparent. |
| ulcid | integer | [Loadcurve](primer-curve-class.md) for unloading (pull-out vs force) |

| Detailed Description<br>The Retractor class allows you to create, modify, edit and manipulate seatbelt retractor cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new Retractor(Model*[[Model](primer-model-class.md)]*, sbrid*[integer]*, sbrnid*[integer]*, sbid*[integer]*, llcid*[integer]*, sid1*[integer]*, sid2 (optional)*[integer]*, sid3 (optional)*[integer]*, sid4 (optional)*[integer]*, tdel (optional)*[real]*, pull (optional)*[real]*, ulcid (optional)*[integer]*, lfed (optional)*[real]*, lcfl (optional)*[integer]*, flopt(optional)*[integer]*)

Description<br>Create a new [Seatbelt Retractor](primer-retractor-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that retractor will be created in

* sbrid (integer)
 
[Retractor](primer-retractor-class.md) number.

* sbrnid (integer)
 
[Node](primer-node-class.md) number (or [Set Node](primer-set-class.md) number if negative).

* sbid (integer)
 
[Seatbelt](primer-seatbelt1d-class.md) number. (or [Set Shell](primer-set-class.md) number if [sbrnid](primer-retractor-class.md#sbrnid) is negative)

* llcid (integer)
 
[Loadcurve](primer-curve-class.md) for loading (pull-out vs force)

* sid1 (integer)
 
[Sensor](primer-sensor-class.md) number 1

* sid2 (optional) (integer)
 
[Sensor](primer-sensor-class.md) number 2

* sid3 (optional) (integer)
 
[Sensor](primer-sensor-class.md) number 3

* sid4 (optional) (integer)
 
[Sensor](primer-sensor-class.md) number 4

* tdel (optional) (real)
 
Time delay after sensor triggers.

* pull (optional) (real)
 
Amount of pull out between time delay ending and retractor locking.

* ulcid (optional) (integer)
 
[Loadcurve](primer-curve-class.md) for unloading (pull-out vs force)

* lfed (optional) (real)
 
Fed length

* lcfl (optional) (integer)
 
[Loadcurve](primer-curve-class.md) representing an adaptive multi-level load limiter

* flopt(optional) (integer)
 
limiting force flage

| Returns
<br>[Retractor](primer-retractor-class.md) object<br>
Return type
<br>Retractor |
| --- |

| Example
<br>To create a new seatbelt retractor in model m with label 100, retractor [Node](primer-node-class.md) 10, [Seatbelt](primer-seatbelt1d-class.md) 20, [Loading curve](primer-curve-class.md) 30 and [Sensor](primer-sensor-class.md) 40:<br>
```
var a = new Retractor(m, 100, 10, 20, 30, 40);
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a retractor. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the retractor

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the retractor r:<br>
```
r.AssociateComment(c);
```
 |
| --- |

* * *

| Blank()

Description<br>Blanks the retractor |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To blank retractor r:<br>
```
r.Blank();
```
 |
| --- |

* * *

| BlankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the retractors in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all retractors will be blanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the retractors in model m:<br>
```
Retractor.BlankAll(m);
```
 |
| --- |

* * *

| BlankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the flagged retractors in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged retractors will be blanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the retractors that you want to blank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the retractors in model m flagged with f:<br>
```
Retractor.BlankFlagged(m, f);
```
 |
| --- |

* * *

| Blanked()

Description<br>Checks if the retractor is blanked or not. |
| --- |

#### Arguments

No arguments

| Returns
<br>true if blanked, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if retractor r is blanked:<br>
```
if (r.Blanked() ) do_something...
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
<br>To Browse retractor r:<br>
```
r.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the retractor. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the retractor

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for retractor r:<br>
```
r.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the retractor. The target include of the copied retractor can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>Retractor object<br>
Return type
<br>Retractor |
| --- |

| Example
<br>To copy retractor r into retractor z:<br>
```
var z = r.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a retractor |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the retractor will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>Retractor object (or null if not made).<br>
Return type
<br>Retractor |
| --- |

| Example
<br>To start creating a retractor in model m:<br>
```
var r = Retractor.Create(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a retractor. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the retractor

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the retractor r:<br>
```
r.DetachComment(c);
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
<br>To Edit retractor r:<br>
```
r.Edit();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for retractor. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for retractor r:<br>
```
r.Error("My custom error");
```
 |
| --- |

* * *

| ExtractColour()

Description<br>Extracts the **actual** colour used for retractor.<br> By default in PRIMER many entities such as elements get their colour automatically from the part that they are in. PRIMER cycles through 13 default colours based on the label of the entity. In this case the retractor [colour](primer-retractor-class.md#colour) property will return the value [Colour.PART](primer-colour-class.md#Colour.PART) instead of the actual colour. This method will return the actual colour which is used for drawing the retractor. |
| --- |

#### Arguments

No arguments

| Returns
<br>colour value (integer)<br>
Return type
<br>Number |
| --- |

| Example
<br>To return the colour used for drawing retractor r:<br>
```
var colour = r.ExtractColour();
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first retractor in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first retractor in

| Returns
<br>Retractor object (or null if there are no retractors in the model).<br>
Return type
<br>Retractor |
| --- |

| Example
<br>To get the first retractor in model m:<br>
```
var r = Retractor.First(m);
```
 |
| --- |

* * *

| FirstFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the first free retractor label in the model. Also see [Retractor.LastFreeLabel()](primer-retractor-class.md#Retractor::LastFreeLabel), [Retractor.NextFreeLabel()](primer-retractor-class.md#Retractor::NextFreeLabel) and [Model.FirstFreeItemLabel()](primer-model-class.md#Model::FirstFreeItemLabel). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first free retractor label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *First free in layer* in editing panels). If omitted the whole model will be used (Equivalent to *First free* in editing panels).

| Returns
<br>Retractor label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the first free retractor label in model m:<br>
```
var label = Retractor.FirstFreeLabel(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the retractors in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all retractors will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the retractors

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the retractors with flag f in model m:<br>
```
Retractor.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the retractor is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the retractor

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if retractor r has flag f set on it:<br>
```
if (r.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each retractor in the model.<br> **Note that ForEach has been designed to make looping over retractors as fast as possible and so has some limitations. Firstly, a single temporary Retractor object is created and on each function call it is updated with the current retractor data. This means that you should not try to store the Retractor object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new retractors inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all retractors are in

* func (function)
 
Function to call for each retractor

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the retractors in model m:<br>
```
Retractor.ForEach(m, test);
function test(r)
{
// r is Retractor object
}
```
<br><br>To call function test for all of the retractors in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
Retractor.ForEach(m, test, data);
function test(r, extra)
{
// r is Retractor object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Retractor objects or properties for all of the retractors in a model in PRIMER. If the optional property argument is not given then an array of Retractor objects is returned. If the property argument is given, that property value for each retractor is returned in the array instead of a Retractor object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get retractors from

* property (optional) (string)
 
Name for property to get for all retractors in the model

| Returns
<br>Array of Retractor objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Retractor objects for all of the retractors in model m:<br>
```
var a = Retractor.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each retractor in model m:<br>
```
var a = Retractor.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a retractor. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the retractor r:<br>
```
var comm_array = r.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Retractor objects for all of the flagged retractors in a model in PRIMER If the optional property argument is not given then an array of Retractor objects is returned. If the property argument is given, then that property value for each retractor is returned in the array instead of a Retractor object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get retractors from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the retractors that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged retractors in the model

| Returns
<br>Array of Retractor objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Retractor objects for all of the retractors in model m flagged with f:<br>
```
var r = Retractor.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the retractors in model m flagged with f:<br>
```
var a = Retractor.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the Retractor object for a retractor ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the retractor in

* number (integer)
 
number of the retractor you want the Retractor object for

| Returns
<br>Retractor object (or null if retractor does not exist).<br>
Return type
<br>Retractor |
| --- |

| Example
<br>To get the Retractor object for retractor 100 in model m<br>
```
var r = Retractor.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a Retractor property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [Retractor.ViewParameters()](primer-retractor-class.md#Retractor::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
retractor property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if Retractor property r.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (r.GetParameter(r.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if Retractor property r.example is a parameter by using the GetParameter method:<br>
```
if (r.ViewParameters().GetParameter(r.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this retractor (\*ELEMENT\_SEATBELT\_RETREROMETER) **Note that a carriage return is not added**. See also [Retractor.KeywordCards()](primer-retractor-class.md#Retractor::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for retractor r:<br>
```
var key = r.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the retractor. **Note that a carriage return is not added**. See also [Retractor.Keyword()](primer-retractor-class.md#Retractor::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for retractor r:<br>
```
var cards = r.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last retractor in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last retractor in

| Returns
<br>Retractor object (or null if there are no retractors in the model).<br>
Return type
<br>Retractor |
| --- |

| Example
<br>To get the last retractor in model m:<br>
```
var r = Retractor.Last(m);
```
 |
| --- |

* * *

| LastFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the last free retractor label in the model. Also see [Retractor.FirstFreeLabel()](primer-retractor-class.md#Retractor::FirstFreeLabel), [Retractor.NextFreeLabel()](primer-retractor-class.md#Retractor::NextFreeLabel) and see [Model.LastFreeItemLabel()](primer-model-class.md#Model::LastFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last free retractor label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest free in layer* in editing panels). If omitted the whole model will be used.

| Returns
<br>Retractor label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the last free retractor label in model m:<br>
```
var label = Retractor.LastFreeLabel(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next retractor in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Retractor object (or null if there are no more retractors in the model).<br>
Return type
<br>Retractor |
| --- |

| Example
<br>To get the retractor in model m after retractor r:<br>
```
var r = r.Next();
```
 |
| --- |

* * *

| NextFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the next free (highest+1) retractor label in the model. Also see [Retractor.FirstFreeLabel()](primer-retractor-class.md#Retractor::FirstFreeLabel), [Retractor.LastFreeLabel()](primer-retractor-class.md#Retractor::LastFreeLabel) and [Model.NextFreeItemLabel()](primer-model-class.md#Model::NextFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get next free retractor label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest+1 in layer* in editing panels). If omitted the whole model will be used (Equivalent to *Highest+1* in editing panels).

| Returns
<br>Retractor label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the next free retractor label in model m:<br>
```
var label = Retractor.NextFreeLabel(m);
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a retractor. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only retractors from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only retractors that are flagged with *limit* can be selected. If omitted, or null, any retractors from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[Retractor](primer-retractor-class.md) object (or null if not picked)<br>
Return type
<br>Retractor |
| --- |

| Example
<br>To pick a retractor from model m giving the prompt 'Pick retractor from screen':<br>
```
var r = Retractor.Pick('Pick retractor from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous retractor in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Retractor object (or null if there are no more retractors in the model).<br>
Return type
<br>Retractor |
| --- |

| Example
<br>To get the retractor in model m before retractor r:<br>
```
var r = r.Previous();
```
 |
| --- |

* * *

| RenumberAll(Model*[[Model](primer-model-class.md)]*, start*[integer]*) [static]
Description<br>Renumbers all of the retractors in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all retractors will be renumbered in

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the retractors in model m, from 1000000:<br>
```
Retractor.RenumberAll(m, 1000000);
```
 |
| --- |

* * *

| RenumberFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*) [static]
Description<br>Renumbers all of the flagged retractors in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged retractors will be renumbered in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the retractors that you want to renumber

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the retractors in model m flagged with f, from 1000000:<br>
```
Retractor.RenumberFlagged(m, f, 1000000);
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select retractors using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting retractors

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only retractors from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only retractors that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any retractors can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of retractors selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select retractors from model m, flagging those selected with flag f, giving the prompt 'Select retractors':<br>
```
Retractor.Select(f, 'Select retractors', m);
```
<br><br>To select retractors, flagging those selected with flag f but limiting selection to retractors flagged with flag l, giving the prompt 'Select retractors':<br>
```
Retractor.Select(f, 'Select retractors', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the retractor. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the retractor

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for retractor r:<br>
```
r.SetFlag(f);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the retractor. The retractor will be sketched until you either call [Retractor.Unsketch()](primer-retractor-class.md#Retractor::Unsketch), [Retractor.UnsketchAll()](primer-retractor-class.md#Retractor::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the retractor is sketched. If omitted redraw is true. If you want to sketch several retractors and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch retractor r:<br>
```
r.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged retractors in the model. The retractors will be sketched until you either call [Retractor.Unsketch()](primer-retractor-class.md#Retractor::Unsketch), [Retractor.UnsketchFlagged()](primer-retractor-class.md#Retractor::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged retractors will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the retractors that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the retractors are sketched. If omitted redraw is true. If you want to sketch flagged retractors several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all retractors flagged with flag in model m:<br>
```
Retractor.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of retractors in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing retractors should be counted. If false or omitted
referenced but undefined retractors will also be included in the total.

| Returns
<br>number of retractors<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of retractors in model m:<br>
```
var total = Retractor.Total(m);
```
 |
| --- |

* * *

| Unblank()

Description<br>Unblanks the retractor |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank retractor r:<br>
```
r.Unblank();
```
 |
| --- |

* * *

| UnblankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the retractors in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all retractors will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the retractors in model m:<br>
```
Retractor.UnblankAll(m);
```
 |
| --- |

* * *

| UnblankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the flagged retractors in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the flagged retractors will be unblanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the retractors that you want to unblank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the retractors in model m flagged with f:<br>
```
Retractor.UnblankFlagged(m, f);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the retractors in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all retractors will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the retractors

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the retractors in model m:<br>
```
Retractor.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the retractor. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the retractor is unsketched. If omitted redraw is true. If you want to unsketch several retractors and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch retractor r:<br>
```
r.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all retractors. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all retractors will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the retractors are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all retractors in model m:<br>
```
Retractor.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged retractors in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all retractors will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the retractors that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the retractors are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all retractors flagged with flag in model m:<br>
```
Retractor.UnsketchAll(m, flag);
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
<br>[Retractor](primer-retractor-class.md) object.<br>
Return type
<br>Retractor |
| --- |

| Example
<br>To check if Retractor property r.example is a parameter by using the [Retractor.GetParameter()](primer-retractor-class.md#Retractor::GetParameter) method:<br>
```
if (r.ViewParameters().GetParameter(r.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for retractor. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for retractor r:<br>
```
r.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this retractor. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for retractor r:<br>
```
var xrefs = r.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the retractor data in keyword format. Note that this contains the keyword header and the keyword cards. See also [Retractor.Keyword()](primer-retractor-class.md#Retractor::Keyword) and [Retractor.KeywordCards()](primer-retractor-class.md#Retractor::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for retractor r in keyword format<br>
```
var str = r.toString();
```
 |
| --- |

* * *