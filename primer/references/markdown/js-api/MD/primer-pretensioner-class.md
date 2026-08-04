# Pretensioner class

The Pretensioner class gives you access to seatbelt pretensioner cards in PRIMER. [More...](primer-pretensioner-class.md#Pretensioner_details)

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

* [BlankAll](primer-pretensioner-class.md#Pretensioner::BlankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [BlankFlagged](primer-pretensioner-class.md#Pretensioner::BlankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Create](primer-pretensioner-class.md#Pretensioner::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [First](primer-pretensioner-class.md#Pretensioner::First)(Model*[[Model](primer-model-class.md)]*)
* [FirstFreeLabel](primer-pretensioner-class.md#Pretensioner::FirstFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [FlagAll](primer-pretensioner-class.md#Pretensioner::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-pretensioner-class.md#Pretensioner::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-pretensioner-class.md#Pretensioner::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-pretensioner-class.md#Pretensioner::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-pretensioner-class.md#Pretensioner::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-pretensioner-class.md#Pretensioner::Last)(Model*[[Model](primer-model-class.md)]*)
* [LastFreeLabel](primer-pretensioner-class.md#Pretensioner::LastFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [NextFreeLabel](primer-pretensioner-class.md#Pretensioner::NextFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [Pick](primer-pretensioner-class.md#Pretensioner::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [RenumberAll](primer-pretensioner-class.md#Pretensioner::RenumberAll)(Model*[[Model](primer-model-class.md)]*, start*[integer]*)
* [RenumberFlagged](primer-pretensioner-class.md#Pretensioner::RenumberFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*)
* [Select](primer-pretensioner-class.md#Pretensioner::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-pretensioner-class.md#Pretensioner::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-pretensioner-class.md#Pretensioner::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnblankAll](primer-pretensioner-class.md#Pretensioner::UnblankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnblankFlagged](primer-pretensioner-class.md#Pretensioner::UnblankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [UnflagAll](primer-pretensioner-class.md#Pretensioner::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-pretensioner-class.md#Pretensioner::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-pretensioner-class.md#Pretensioner::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-pretensioner-class.md#Pretensioner::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Blank](primer-pretensioner-class.md#Pretensioner::Blank)()
* [Blanked](primer-pretensioner-class.md#Pretensioner::Blanked)()
* [Browse](primer-pretensioner-class.md#Pretensioner::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-pretensioner-class.md#Pretensioner::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-pretensioner-class.md#Pretensioner::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-pretensioner-class.md#Pretensioner::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-pretensioner-class.md#Pretensioner::Edit)(modal (optional)*[boolean]*)
* [Error](primer-pretensioner-class.md#Pretensioner::Error)(message*[string]*, details (optional)*[string]*)
* [ExtractColour](primer-pretensioner-class.md#Pretensioner::ExtractColour)()
* [Flagged](primer-pretensioner-class.md#Pretensioner::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-pretensioner-class.md#Pretensioner::GetComments)()
* [GetParameter](primer-pretensioner-class.md#Pretensioner::GetParameter)(prop*[string]*)
* [Keyword](primer-pretensioner-class.md#Pretensioner::Keyword)()
* [KeywordCards](primer-pretensioner-class.md#Pretensioner::KeywordCards)()
* [Next](primer-pretensioner-class.md#Pretensioner::Next)()
* [Previous](primer-pretensioner-class.md#Pretensioner::Previous)()
* [SetFlag](primer-pretensioner-class.md#Pretensioner::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Sketch](primer-pretensioner-class.md#Pretensioner::Sketch)(redraw (optional)*[boolean]*)
* [Unblank](primer-pretensioner-class.md#Pretensioner::Unblank)()
* [Unsketch](primer-pretensioner-class.md#Pretensioner::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-pretensioner-class.md#Pretensioner::ViewParameters)()
* [Warning](primer-pretensioner-class.md#Pretensioner::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-pretensioner-class.md#Pretensioner::Xrefs)()
* [toString](primer-pretensioner-class.md#Pretensioner::toString)()

## Pretensioner properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| colour | [Colour](primer-colour-class.md) | The colour of the pretensioner |
| exists (read only) | logical | true if pretensioner exists, false if referred to but not defined. |
| include | integer | The [Include](primer-include-class.md) file number that the pretensioner is in. |
| label | integer | [Pretensioner](primer-pretensioner-class.md) number. Also see the [sbprid](primer-pretensioner-class.md#sbprid) property which is an alternative name for this. |
| lmtfrc | real | Limiting force |
| lmtpin | real | Limiting pull-in |
| model (read only) | integer | The [Model](primer-model-class.md) number that the pretensioner is in. |
| ptlcid | integer | [Loadcurve](primer-curve-class.md) of pull-in vs time |
| sbprid | integer | [Pretensioner](primer-pretensioner-class.md) number. Also see the [label](primer-pretensioner-class.md#label) property which is an alternative name for this. |
| sbprty | integer | [Pretensioner](primer-pretensioner-class.md) type. |
| sbrid | integer | [Retractor](primer-retractor-class.md) number. |
| sbsid1 | integer | [Sensor](primer-sensor-class.md) number 1 |
| sbsid2 | integer | [Sensor](primer-sensor-class.md) number 2 |
| sbsid3 | integer | [Sensor](primer-sensor-class.md) number 3 |
| sbsid4 | integer | [Sensor](primer-sensor-class.md) number 4 |
| time | real | Time between sensor triggering and pretensioner acting. |
| transparency | integer | The transparency of the pretensioner (0-100) 0% is opaque, 100% is transparent. |

| Detailed Description<br>The Pretensioner class allows you to create, modify, edit and manipulate seatbelt pretensioner cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new Pretensioner(Model*[[Model](primer-model-class.md)]*, sbprid*[integer]*, sbprty*[integer]*, sbrid*[integer]*, ptlcid*[integer]*, sbsid1*[integer]*, sbsid2 (optional)*[integer]*, sbsid3 (optional)*[integer]*, sbsid4 (optional)*[integer]*, time (optional)*[real]*, lmtfrc (optional)*[real]*, lmtpin (optional)*[real]*)

Description<br>Create a new [Seatbelt Pretensioner](primer-pretensioner-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that pretensioner will be created in

* sbprid (integer)
 
[Pretensioner](primer-pretensioner-class.md) number.

* sbprty (integer)
 
[Pretensioner](primer-pretensioner-class.md) type.

* sbrid (integer)
 
[Retractor](primer-retractor-class.md) number.

* ptlcid (integer)
 
[Loadcurve](primer-curve-class.md) of pull-in vs time

* sbsid1 (integer)
 
[Sensor](primer-sensor-class.md) number 1

* sbsid2 (optional) (integer)
 
[Sensor](primer-sensor-class.md) number 2

* sbsid3 (optional) (integer)
 
[Sensor](primer-sensor-class.md) number 3

* sbsid4 (optional) (integer)
 
[Sensor](primer-sensor-class.md) number 4

* time (optional) (real)
 
Time between sensor triggering and pretensioner acting.

* lmtfrc (optional) (real)
 
Limiting force

* lmtpin (optional) (real)
 
Limiting pull-in

| Returns
<br>[Pretensioner](primer-pretensioner-class.md) object<br>
Return type
<br>Pretensioner |
| --- |

| Example
<br>To create a new pyrotechnic seatbelt pretensioner in model m with label 100, [Retractor](primer-retractor-class.md) 10, [Loading curve](primer-curve-class.md) 20 and [Sensor](primer-sensor-class.md) 30:<br>
```
var p = new Pretensioner(m, 100, 1, 10, 20, 30);
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a pretensioner. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the pretensioner

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the pretensioner p:<br>
```
p.AssociateComment(c);
```
 |
| --- |

* * *

| Blank()

Description<br>Blanks the pretensioner |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To blank pretensioner p:<br>
```
p.Blank();
```
 |
| --- |

* * *

| BlankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the pretensioners in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all pretensioners will be blanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the pretensioners in model m:<br>
```
Pretensioner.BlankAll(m);
```
 |
| --- |

* * *

| BlankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the flagged pretensioners in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged pretensioners will be blanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the pretensioners that you want to blank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the pretensioners in model m flagged with f:<br>
```
Pretensioner.BlankFlagged(m, f);
```
 |
| --- |

* * *

| Blanked()

Description<br>Checks if the pretensioner is blanked or not. |
| --- |

#### Arguments

No arguments

| Returns
<br>true if blanked, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if pretensioner p is blanked:<br>
```
if (p.Blanked() ) do_something...
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
<br>To Browse pretensioner p:<br>
```
p.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the pretensioner. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the pretensioner

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for pretensioner p:<br>
```
p.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the pretensioner. The target include of the copied pretensioner can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>Pretensioner object<br>
Return type
<br>Pretensioner |
| --- |

| Example
<br>To copy pretensioner p into pretensioner z:<br>
```
var z = p.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a pretensioner |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the pretensioner will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>Pretensioner object (or null if not made).<br>
Return type
<br>Pretensioner |
| --- |

| Example
<br>To start creating a pretensioner in model m:<br>
```
var p = Pretensioner.Create(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a pretensioner. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the pretensioner

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the pretensioner p:<br>
```
p.DetachComment(c);
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
<br>To Edit pretensioner p:<br>
```
p.Edit();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for pretensioner. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for pretensioner p:<br>
```
p.Error("My custom error");
```
 |
| --- |

* * *

| ExtractColour()

Description<br>Extracts the **actual** colour used for pretensioner.<br> By default in PRIMER many entities such as elements get their colour automatically from the part that they are in. PRIMER cycles through 13 default colours based on the label of the entity. In this case the pretensioner [colour](primer-pretensioner-class.md#colour) property will return the value [Colour.PART](primer-colour-class.md#Colour.PART) instead of the actual colour. This method will return the actual colour which is used for drawing the pretensioner. |
| --- |

#### Arguments

No arguments

| Returns
<br>colour value (integer)<br>
Return type
<br>Number |
| --- |

| Example
<br>To return the colour used for drawing pretensioner p:<br>
```
var colour = p.ExtractColour();
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first pretensioner in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first pretensioner in

| Returns
<br>Pretensioner object (or null if there are no pretensioners in the model).<br>
Return type
<br>Pretensioner |
| --- |

| Example
<br>To get the first pretensioner in model m:<br>
```
var p = Pretensioner.First(m);
```
 |
| --- |

* * *

| FirstFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the first free pretensioner label in the model. Also see [Pretensioner.LastFreeLabel()](primer-pretensioner-class.md#Pretensioner::LastFreeLabel), [Pretensioner.NextFreeLabel()](primer-pretensioner-class.md#Pretensioner::NextFreeLabel) and [Model.FirstFreeItemLabel()](primer-model-class.md#Model::FirstFreeItemLabel). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first free pretensioner label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *First free in layer* in editing panels). If omitted the whole model will be used (Equivalent to *First free* in editing panels).

| Returns
<br>Pretensioner label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the first free pretensioner label in model m:<br>
```
var label = Pretensioner.FirstFreeLabel(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the pretensioners in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all pretensioners will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the pretensioners

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the pretensioners with flag f in model m:<br>
```
Pretensioner.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the pretensioner is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the pretensioner

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if pretensioner p has flag f set on it:<br>
```
if (p.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each pretensioner in the model.<br> **Note that ForEach has been designed to make looping over pretensioners as fast as possible and so has some limitations. Firstly, a single temporary Pretensioner object is created and on each function call it is updated with the current pretensioner data. This means that you should not try to store the Pretensioner object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new pretensioners inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all pretensioners are in

* func (function)
 
Function to call for each pretensioner

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the pretensioners in model m:<br>
```
Pretensioner.ForEach(m, test);
function test(p)
{
// p is Pretensioner object
}
```
<br><br>To call function test for all of the pretensioners in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
Pretensioner.ForEach(m, test, data);
function test(p, extra)
{
// p is Pretensioner object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Pretensioner objects or properties for all of the pretensioners in a model in PRIMER. If the optional property argument is not given then an array of Pretensioner objects is returned. If the property argument is given, that property value for each pretensioner is returned in the array instead of a Pretensioner object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get pretensioners from

* property (optional) (string)
 
Name for property to get for all pretensioners in the model

| Returns
<br>Array of Pretensioner objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Pretensioner objects for all of the pretensioners in model m:<br>
```
var a = Pretensioner.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each pretensioner in model m:<br>
```
var a = Pretensioner.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a pretensioner. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the pretensioner p:<br>
```
var comm_array = p.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Pretensioner objects for all of the flagged pretensioners in a model in PRIMER If the optional property argument is not given then an array of Pretensioner objects is returned. If the property argument is given, then that property value for each pretensioner is returned in the array instead of a Pretensioner object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get pretensioners from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the pretensioners that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged pretensioners in the model

| Returns
<br>Array of Pretensioner objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Pretensioner objects for all of the pretensioners in model m flagged with f:<br>
```
var p = Pretensioner.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the pretensioners in model m flagged with f:<br>
```
var a = Pretensioner.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the Pretensioner object for a pretensioner ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the pretensioner in

* number (integer)
 
number of the pretensioner you want the Pretensioner object for

| Returns
<br>Pretensioner object (or null if pretensioner does not exist).<br>
Return type
<br>Pretensioner |
| --- |

| Example
<br>To get the Pretensioner object for pretensioner 100 in model m<br>
```
var p = Pretensioner.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a Pretensioner property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [Pretensioner.ViewParameters()](primer-pretensioner-class.md#Pretensioner::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
pretensioner property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if Pretensioner property p.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (p.GetParameter(p.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if Pretensioner property p.example is a parameter by using the GetParameter method:<br>
```
if (p.ViewParameters().GetParameter(p.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this pretensioner (\*ELEMENT\_SEATBELT\_PRETEROMETER) **Note that a carriage return is not added**. See also [Pretensioner.KeywordCards()](primer-pretensioner-class.md#Pretensioner::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for pretensioner p:<br>
```
var key = p.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the pretensioner. **Note that a carriage return is not added**. See also [Pretensioner.Keyword()](primer-pretensioner-class.md#Pretensioner::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for pretensioner a:<br>
```
var cards = a.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last pretensioner in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last pretensioner in

| Returns
<br>Pretensioner object (or null if there are no pretensioners in the model).<br>
Return type
<br>Pretensioner |
| --- |

| Example
<br>To get the last pretensioner in model m:<br>
```
var p = Pretensioner.Last(m);
```
 |
| --- |

* * *

| LastFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the last free pretensioner label in the model. Also see [Pretensioner.FirstFreeLabel()](primer-pretensioner-class.md#Pretensioner::FirstFreeLabel), [Pretensioner.NextFreeLabel()](primer-pretensioner-class.md#Pretensioner::NextFreeLabel) and see [Model.LastFreeItemLabel()](primer-model-class.md#Model::LastFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last free pretensioner label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest free in layer* in editing panels). If omitted the whole model will be used.

| Returns
<br>Pretensioner label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the last free pretensioner label in model m:<br>
```
var label = Pretensioner.LastFreeLabel(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next pretensioner in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Pretensioner object (or null if there are no more pretensioners in the model).<br>
Return type
<br>Pretensioner |
| --- |

| Example
<br>To get the pretensioner in model m after pretensioner p:<br>
```
var p = p.Next();
```
 |
| --- |

* * *

| NextFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the next free (highest+1) pretensioner label in the model. Also see [Pretensioner.FirstFreeLabel()](primer-pretensioner-class.md#Pretensioner::FirstFreeLabel), [Pretensioner.LastFreeLabel()](primer-pretensioner-class.md#Pretensioner::LastFreeLabel) and [Model.NextFreeItemLabel()](primer-model-class.md#Model::NextFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get next free pretensioner label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest+1 in layer* in editing panels). If omitted the whole model will be used (Equivalent to *Highest+1* in editing panels).

| Returns
<br>Pretensioner label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the next free pretensioner label in model m:<br>
```
var label = Pretensioner.NextFreeLabel(m);
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a pretensioner. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only pretensioners from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only pretensioners that are flagged with *limit* can be selected. If omitted, or null, any pretensioners from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[Pretensioner](primer-pretensioner-class.md) object (or null if not picked)<br>
Return type
<br>Pretensioner |
| --- |

| Example
<br>To pick a pretensioner from model m giving the prompt 'Pick pretensioner from screen':<br>
```
var p = Pretensioner.Pick('Pick pretensioner from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous pretensioner in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Pretensioner object (or null if there are no more pretensioners in the model).<br>
Return type
<br>Pretensioner |
| --- |

| Example
<br>To get the pretensioner in model m before pretensioner p:<br>
```
var p = p.Previous();
```
 |
| --- |

* * *

| RenumberAll(Model*[[Model](primer-model-class.md)]*, start*[integer]*) [static]
Description<br>Renumbers all of the pretensioners in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all pretensioners will be renumbered in

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the pretensioners in model m, from 1000000:<br>
```
Pretensioner.RenumberAll(m, 1000000);
```
 |
| --- |

* * *

| RenumberFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*) [static]
Description<br>Renumbers all of the flagged pretensioners in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged pretensioners will be renumbered in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the pretensioners that you want to renumber

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the pretensioners in model m flagged with f, from 1000000:<br>
```
Pretensioner.RenumberFlagged(m, f, 1000000);
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select pretensioners using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting pretensioners

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only pretensioners from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only pretensioners that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any pretensioners can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of pretensioners selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select pretensioners from model m, flagging those selected with flag f, giving the prompt 'Select pretensioners':<br>
```
Pretensioner.Select(f, 'Select pretensioners', m);
```
<br><br>To select pretensioners, flagging those selected with flag f but limiting selection to pretensioners flagged with flag l, giving the prompt 'Select pretensioners':<br>
```
Pretensioner.Select(f, 'Select pretensioners', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the pretensioner. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the pretensioner

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for pretensioner p:<br>
```
p.SetFlag(f);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the pretensioner. The pretensioner will be sketched until you either call [Pretensioner.Unsketch()](primer-pretensioner-class.md#Pretensioner::Unsketch), [Pretensioner.UnsketchAll()](primer-pretensioner-class.md#Pretensioner::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the pretensioner is sketched. If omitted redraw is true. If you want to sketch several pretensioners and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch pretensioner p:<br>
```
p.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged pretensioners in the model. The pretensioners will be sketched until you either call [Pretensioner.Unsketch()](primer-pretensioner-class.md#Pretensioner::Unsketch), [Pretensioner.UnsketchFlagged()](primer-pretensioner-class.md#Pretensioner::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged pretensioners will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the pretensioners that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the pretensioners are sketched. If omitted redraw is true. If you want to sketch flagged pretensioners several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all pretensioners flagged with flag in model m:<br>
```
Pretensioner.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of pretensioners in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing pretensioners should be counted. If false or omitted
referenced but undefined pretensioners will also be included in the total.

| Returns
<br>number of pretensioners<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of pretensioners in model m:<br>
```
var total = Pretensioner.Total(m);
```
 |
| --- |

* * *

| Unblank()

Description<br>Unblanks the pretensioner |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank pretensioner p:<br>
```
p.Unblank();
```
 |
| --- |

* * *

| UnblankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the pretensioners in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all pretensioners will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the pretensioners in model m:<br>
```
Pretensioner.UnblankAll(m);
```
 |
| --- |

* * *

| UnblankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the flagged pretensioners in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the flagged pretensioners will be unblanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the pretensioners that you want to unblank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the pretensioners in model m flagged with f:<br>
```
Pretensioner.UnblankFlagged(m, f);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the pretensioners in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all pretensioners will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the pretensioners

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the pretensioners in model m:<br>
```
Pretensioner.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the pretensioner. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the pretensioner is unsketched. If omitted redraw is true. If you want to unsketch several pretensioners and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch pretensioner p:<br>
```
p.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all pretensioners. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all pretensioners will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the pretensioners are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all pretensioners in model m:<br>
```
Pretensioner.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged pretensioners in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all pretensioners will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the pretensioners that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the pretensioners are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all pretensioners flagged with flag in model m:<br>
```
Pretensioner.UnsketchAll(m, flag);
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
<br>[Pretensioner](primer-pretensioner-class.md) object.<br>
Return type
<br>Pretensioner |
| --- |

| Example
<br>To check if Pretensioner property p.example is a parameter by using the [Pretensioner.GetParameter()](primer-pretensioner-class.md#Pretensioner::GetParameter) method:<br>
```
if (p.ViewParameters().GetParameter(p.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for pretensioner. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for pretensioner p:<br>
```
p.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this pretensioner. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for pretensioner p:<br>
```
var xrefs = p.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the pretensioner data in keyword format. Note that this contains the keyword header and the keyword cards. See also [Pretensioner.Keyword()](primer-pretensioner-class.md#Pretensioner::Keyword) and [Pretensioner.KeywordCards()](primer-pretensioner-class.md#Pretensioner::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for pretensioner p in keyword format<br>
```
var str = p.toString();
```
 |
| --- |

* * *