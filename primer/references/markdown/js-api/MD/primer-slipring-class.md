# Slipring class

The Slipring class gives you access to seatbelt slipring cards in PRIMER. [More...](primer-slipring-class.md#Slipring_details)

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

* [BlankAll](primer-slipring-class.md#Slipring::BlankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [BlankFlagged](primer-slipring-class.md#Slipring::BlankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Create](primer-slipring-class.md#Slipring::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [First](primer-slipring-class.md#Slipring::First)(Model*[[Model](primer-model-class.md)]*)
* [FirstFreeLabel](primer-slipring-class.md#Slipring::FirstFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [FlagAll](primer-slipring-class.md#Slipring::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-slipring-class.md#Slipring::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-slipring-class.md#Slipring::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-slipring-class.md#Slipring::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-slipring-class.md#Slipring::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-slipring-class.md#Slipring::Last)(Model*[[Model](primer-model-class.md)]*)
* [LastFreeLabel](primer-slipring-class.md#Slipring::LastFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [NextFreeLabel](primer-slipring-class.md#Slipring::NextFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [Pick](primer-slipring-class.md#Slipring::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [RenumberAll](primer-slipring-class.md#Slipring::RenumberAll)(Model*[[Model](primer-model-class.md)]*, start*[integer]*)
* [RenumberFlagged](primer-slipring-class.md#Slipring::RenumberFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*)
* [Select](primer-slipring-class.md#Slipring::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-slipring-class.md#Slipring::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-slipring-class.md#Slipring::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnblankAll](primer-slipring-class.md#Slipring::UnblankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnblankFlagged](primer-slipring-class.md#Slipring::UnblankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [UnflagAll](primer-slipring-class.md#Slipring::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-slipring-class.md#Slipring::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-slipring-class.md#Slipring::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-slipring-class.md#Slipring::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Blank](primer-slipring-class.md#Slipring::Blank)()
* [Blanked](primer-slipring-class.md#Slipring::Blanked)()
* [Browse](primer-slipring-class.md#Slipring::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-slipring-class.md#Slipring::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-slipring-class.md#Slipring::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-slipring-class.md#Slipring::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-slipring-class.md#Slipring::Edit)(modal (optional)*[boolean]*)
* [Error](primer-slipring-class.md#Slipring::Error)(message*[string]*, details (optional)*[string]*)
* [ExtractColour](primer-slipring-class.md#Slipring::ExtractColour)()
* [Flagged](primer-slipring-class.md#Slipring::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-slipring-class.md#Slipring::GetComments)()
* [GetParameter](primer-slipring-class.md#Slipring::GetParameter)(prop*[string]*)
* [Keyword](primer-slipring-class.md#Slipring::Keyword)()
* [KeywordCards](primer-slipring-class.md#Slipring::KeywordCards)()
* [Next](primer-slipring-class.md#Slipring::Next)()
* [Previous](primer-slipring-class.md#Slipring::Previous)()
* [SetFlag](primer-slipring-class.md#Slipring::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Sketch](primer-slipring-class.md#Slipring::Sketch)(redraw (optional)*[boolean]*)
* [Unblank](primer-slipring-class.md#Slipring::Unblank)()
* [Unsketch](primer-slipring-class.md#Slipring::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-slipring-class.md#Slipring::ViewParameters)()
* [Warning](primer-slipring-class.md#Slipring::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-slipring-class.md#Slipring::Xrefs)()
* [toString](primer-slipring-class.md#Slipring::toString)()

## Slipring properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| colour | [Colour](primer-colour-class.md) | The colour of the slipring |
| dc | real | Optional decay constant to allow a smooth transition between the static and dynamic friction coefficients. |
| direct | integer | Direction of belt movement |
| exists (read only) | logical | true if slipring exists, false if referred to but not defined. |
| fc | real | Coulomb dynamic friction coefficient |
| fcs | real | Coulomb static friction coefficient |
| funcid | integer | Function ID to determine friction coefficient |
| include | integer | The [Include](primer-include-class.md) file number that the slipring is in. |
| k | real | Optional coefficient for determining the Coulomb friction coefficient related to angle alpha |
| label | integer | [Slipring](primer-slipring-class.md) number. Also see the [sbsrid](primer-slipring-class.md#sbsrid) property which is an alternative name for this. |
| lcnffd | integer | [Loadcurve](primer-curve-class.md) for Coulomb dynamic friction |
| lcnffs | integer | [Loadcurve](primer-curve-class.md) for Coulomb static friction |
| ltime | real | Slipring lockup time |
| model (read only) | integer | The [Model](primer-model-class.md) number that the slipring is in. |
| onid | integer | Orientation [Node](primer-node-class.md) number |
| sbid1 | integer | [Seatbelt](primer-seatbelt1d-class.md) number 1 (or [Set Shell](primer-set-class.md) number if [sbrnid](primer-slipring-class.md#sbrnid) is negative). |
| sbid2 | integer | [Seatbelt](primer-seatbelt1d-class.md) number 2 (or [Set Shell](primer-set-class.md) number if [sbrnid](primer-slipring-class.md#sbrnid) is negative). |
| sbrnid | integer | [Node](primer-node-class.md) number (or [Set Node](primer-set-class.md) number if negative) |
| sbsrid | integer | [Slipring](primer-slipring-class.md) number. Also see the [label](primer-slipring-class.md#label) property which is an alternative name for this. |
| shell\_seatbelt (read only) | logical | true if slipring is used for shell (2D) seatbelt elements. |
| transparency | integer | The transparency of the slipring (0-100) 0% is opaque, 100% is transparent. |

| Detailed Description<br>The Slipring class allows you to create, modify, edit and manipulate seatbelt slipring cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new Slipring(Model*[[Model](primer-model-class.md)]*, sbsrid*[integer]*, sbid1*[integer]*, sbid2*[integer]*, sbrnid*[integer]*)

Description<br>Create a new [Seatbelt Slipring](primer-slipring-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that slipring will be created in

* sbsrid (integer)
 
[Slipring](primer-slipring-class.md) number.

* sbid1 (integer)
 
[Seatbelt](primer-seatbelt1d-class.md) number 1

* sbid2 (integer)
 
[Seatbelt](primer-seatbelt1d-class.md) number 2

* sbrnid (integer)
 
Slipring [Node](primer-node-class.md) number

| Returns
<br>[Slipring](primer-slipring-class.md) object<br>
Return type
<br>Slipring |
| --- |

| Example
<br>To create a new seatbelt slipring in model m with label 100, seatbelts 10, 11 and node 20:<br>
```
var a = new Slipring(m, 100, 10, 11, 20);
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a slipring. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the slipring

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the slipring s:<br>
```
s.AssociateComment(c);
```
 |
| --- |

* * *

| Blank()

Description<br>Blanks the slipring |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To blank slipring s:<br>
```
s.Blank();
```
 |
| --- |

* * *

| BlankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the sliprings in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all sliprings will be blanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the sliprings in model m:<br>
```
Slipring.BlankAll(m);
```
 |
| --- |

* * *

| BlankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the flagged sliprings in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged sliprings will be blanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the sliprings that you want to blank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the sliprings in model m flagged with f:<br>
```
Slipring.BlankFlagged(m, f);
```
 |
| --- |

* * *

| Blanked()

Description<br>Checks if the slipring is blanked or not. |
| --- |

#### Arguments

No arguments

| Returns
<br>true if blanked, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if slipring s is blanked:<br>
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
<br>To Browse slipring s:<br>
```
s.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the slipring. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the slipring

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for slipring s:<br>
```
s.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the slipring. The target include of the copied slipring can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>Slipring object<br>
Return type
<br>Slipring |
| --- |

| Example
<br>To copy slipring s into slipring z:<br>
```
var z = s.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a slipring |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the slipring will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>Slipring object (or null if not made).<br>
Return type
<br>Slipring |
| --- |

| Example
<br>To start creating a slipring in model m:<br>
```
var s = Slipring.Create(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a slipring. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the slipring

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the slipring s:<br>
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
<br>To Edit slipring s:<br>
```
s.Edit();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for slipring. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for slipring s:<br>
```
s.Error("My custom error");
```
 |
| --- |

* * *

| ExtractColour()

Description<br>Extracts the **actual** colour used for slipring.<br> By default in PRIMER many entities such as elements get their colour automatically from the part that they are in. PRIMER cycles through 13 default colours based on the label of the entity. In this case the slipring [colour](primer-slipring-class.md#colour) property will return the value [Colour.PART](primer-colour-class.md#Colour.PART) instead of the actual colour. This method will return the actual colour which is used for drawing the slipring. |
| --- |

#### Arguments

No arguments

| Returns
<br>colour value (integer)<br>
Return type
<br>Number |
| --- |

| Example
<br>To return the colour used for drawing slipring s:<br>
```
var colour = s.ExtractColour();
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first slipring in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first slipring in

| Returns
<br>Slipring object (or null if there are no sliprings in the model).<br>
Return type
<br>Slipring |
| --- |

| Example
<br>To get the first slipring in model m:<br>
```
var s = Slipring.First(m);
```
 |
| --- |

* * *

| FirstFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the first free slipring label in the model. Also see [Slipring.LastFreeLabel()](primer-slipring-class.md#Slipring::LastFreeLabel), [Slipring.NextFreeLabel()](primer-slipring-class.md#Slipring::NextFreeLabel) and [Model.FirstFreeItemLabel()](primer-model-class.md#Model::FirstFreeItemLabel). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first free slipring label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *First free in layer* in editing panels). If omitted the whole model will be used (Equivalent to *First free* in editing panels).

| Returns
<br>Slipring label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the first free slipring label in model m:<br>
```
var label = Slipring.FirstFreeLabel(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the sliprings in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all sliprings will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the sliprings

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the sliprings with flag f in model m:<br>
```
Slipring.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the slipring is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the slipring

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if slipring s has flag f set on it:<br>
```
if (s.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each slipring in the model.<br> **Note that ForEach has been designed to make looping over sliprings as fast as possible and so has some limitations. Firstly, a single temporary Slipring object is created and on each function call it is updated with the current slipring data. This means that you should not try to store the Slipring object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new sliprings inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all sliprings are in

* func (function)
 
Function to call for each slipring

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the sliprings in model m:<br>
```
Slipring.ForEach(m, test);
function test(s)
{
// s is Slipring object
}
```
<br><br>To call function test for all of the sliprings in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
Slipring.ForEach(m, test, data);
function test(s, extra)
{
// s is Slipring object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Slipring objects or properties for all of the sliprings in a model in PRIMER. If the optional property argument is not given then an array of Slipring objects is returned. If the property argument is given, that property value for each slipring is returned in the array instead of a Slipring object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get sliprings from

* property (optional) (string)
 
Name for property to get for all sliprings in the model

| Returns
<br>Array of Slipring objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Slipring objects for all of the sliprings in model m:<br>
```
var a = Slipring.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each slipring in model m:<br>
```
var a = Slipring.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a slipring. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the slipring s:<br>
```
var comm_array = s.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Slipring objects for all of the flagged sliprings in a model in PRIMER If the optional property argument is not given then an array of Slipring objects is returned. If the property argument is given, then that property value for each slipring is returned in the array instead of a Slipring object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get sliprings from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the sliprings that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged sliprings in the model

| Returns
<br>Array of Slipring objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Slipring objects for all of the sliprings in model m flagged with f:<br>
```
var s = Slipring.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the sliprings in model m flagged with f:<br>
```
var a = Slipring.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the Slipring object for a slipring ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the slipring in

* number (integer)
 
number of the slipring you want the Slipring object for

| Returns
<br>Slipring object (or null if slipring does not exist).<br>
Return type
<br>Slipring |
| --- |

| Example
<br>To get the Slipring object for slipring 100 in model m<br>
```
var s = Slipring.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a Slipring property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [Slipring.ViewParameters()](primer-slipring-class.md#Slipring::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
slipring property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if Slipring property s.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (s.GetParameter(s.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if Slipring property s.example is a parameter by using the GetParameter method:<br>
```
if (s.ViewParameters().GetParameter(s.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this slipring (\*ELEMENT\_SEATBELT\_SLIPEROMETER) **Note that a carriage return is not added**. See also [Slipring.KeywordCards()](primer-slipring-class.md#Slipring::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for slipring s:<br>
```
var key = s.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the slipring. **Note that a carriage return is not added**. See also [Slipring.Keyword()](primer-slipring-class.md#Slipring::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for slipring s:<br>
```
var cards = s.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last slipring in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last slipring in

| Returns
<br>Slipring object (or null if there are no sliprings in the model).<br>
Return type
<br>Slipring |
| --- |

| Example
<br>To get the last slipring in model m:<br>
```
var s = Slipring.Last(m);
```
 |
| --- |

* * *

| LastFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the last free slipring label in the model. Also see [Slipring.FirstFreeLabel()](primer-slipring-class.md#Slipring::FirstFreeLabel), [Slipring.NextFreeLabel()](primer-slipring-class.md#Slipring::NextFreeLabel) and see [Model.LastFreeItemLabel()](primer-model-class.md#Model::LastFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last free slipring label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest free in layer* in editing panels). If omitted the whole model will be used.

| Returns
<br>Slipring label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the last free slipring label in model m:<br>
```
var label = Slipring.LastFreeLabel(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next slipring in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Slipring object (or null if there are no more sliprings in the model).<br>
Return type
<br>Slipring |
| --- |

| Example
<br>To get the slipring in model m after slipring s:<br>
```
var s = s.Next();
```
 |
| --- |

* * *

| NextFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the next free (highest+1) slipring label in the model. Also see [Slipring.FirstFreeLabel()](primer-slipring-class.md#Slipring::FirstFreeLabel), [Slipring.LastFreeLabel()](primer-slipring-class.md#Slipring::LastFreeLabel) and [Model.NextFreeItemLabel()](primer-model-class.md#Model::NextFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get next free slipring label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest+1 in layer* in editing panels). If omitted the whole model will be used (Equivalent to *Highest+1* in editing panels).

| Returns
<br>Slipring label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the next free slipring label in model m:<br>
```
var label = Slipring.NextFreeLabel(m);
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a slipring. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only sliprings from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only sliprings that are flagged with *limit* can be selected. If omitted, or null, any sliprings from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[Slipring](primer-slipring-class.md) object (or null if not picked)<br>
Return type
<br>Slipring |
| --- |

| Example
<br>To pick a slipring from model m giving the prompt 'Pick slipring from screen':<br>
```
var s = Slipring.Pick('Pick slipring from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous slipring in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Slipring object (or null if there are no more sliprings in the model).<br>
Return type
<br>Slipring |
| --- |

| Example
<br>To get the slipring in model m before slipring s:<br>
```
var s = s.Previous();
```
 |
| --- |

* * *

| RenumberAll(Model*[[Model](primer-model-class.md)]*, start*[integer]*) [static]
Description<br>Renumbers all of the sliprings in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all sliprings will be renumbered in

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the sliprings in model m, from 1000000:<br>
```
Slipring.RenumberAll(m, 1000000);
```
 |
| --- |

* * *

| RenumberFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*) [static]
Description<br>Renumbers all of the flagged sliprings in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged sliprings will be renumbered in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the sliprings that you want to renumber

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the sliprings in model m flagged with f, from 1000000:<br>
```
Slipring.RenumberFlagged(m, f, 1000000);
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select sliprings using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting sliprings

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only sliprings from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only sliprings that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any sliprings can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of sliprings selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select sliprings from model m, flagging those selected with flag f, giving the prompt 'Select sliprings':<br>
```
Slipring.Select(f, 'Select sliprings', m);
```
<br><br>To select sliprings, flagging those selected with flag f but limiting selection to sliprings flagged with flag l, giving the prompt 'Select sliprings':<br>
```
Slipring.Select(f, 'Select sliprings', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the slipring. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the slipring

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for slipring s:<br>
```
s.SetFlag(f);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the slipring. The slipring will be sketched until you either call [Slipring.Unsketch()](primer-slipring-class.md#Slipring::Unsketch), [Slipring.UnsketchAll()](primer-slipring-class.md#Slipring::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the slipring is sketched. If omitted redraw is true. If you want to sketch several sliprings and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch slipring s:<br>
```
s.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged sliprings in the model. The sliprings will be sketched until you either call [Slipring.Unsketch()](primer-slipring-class.md#Slipring::Unsketch), [Slipring.UnsketchFlagged()](primer-slipring-class.md#Slipring::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged sliprings will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the sliprings that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the sliprings are sketched. If omitted redraw is true. If you want to sketch flagged sliprings several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all sliprings flagged with flag in model m:<br>
```
Slipring.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of sliprings in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing sliprings should be counted. If false or omitted
referenced but undefined sliprings will also be included in the total.

| Returns
<br>number of sliprings<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of sliprings in model m:<br>
```
var total = Slipring.Total(m);
```
 |
| --- |

* * *

| Unblank()

Description<br>Unblanks the slipring |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank slipring s:<br>
```
s.Unblank();
```
 |
| --- |

* * *

| UnblankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the sliprings in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all sliprings will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the sliprings in model m:<br>
```
Slipring.UnblankAll(m);
```
 |
| --- |

* * *

| UnblankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the flagged sliprings in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the flagged sliprings will be unblanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the sliprings that you want to unblank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the sliprings in model m flagged with f:<br>
```
Slipring.UnblankFlagged(m, f);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the sliprings in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all sliprings will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the sliprings

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the sliprings in model m:<br>
```
Slipring.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the slipring. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the slipring is unsketched. If omitted redraw is true. If you want to unsketch several sliprings and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch slipring s:<br>
```
s.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all sliprings. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all sliprings will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the sliprings are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all sliprings in model m:<br>
```
Slipring.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged sliprings in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all sliprings will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the sliprings that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the sliprings are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all sliprings flagged with flag in model m:<br>
```
Slipring.UnsketchAll(m, flag);
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
<br>[Slipring](primer-slipring-class.md) object.<br>
Return type
<br>Slipring |
| --- |

| Example
<br>To check if Slipring property s.example is a parameter by using the [Slipring.GetParameter()](primer-slipring-class.md#Slipring::GetParameter) method:<br>
```
if (s.ViewParameters().GetParameter(s.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for slipring. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for slipring s:<br>
```
s.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this slipring. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for slipring s:<br>
```
var xrefs = s.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the slipring data in keyword format. Note that this contains the keyword header and the keyword cards. See also [Slipring.Keyword()](primer-slipring-class.md#Slipring::Keyword) and [Slipring.KeywordCards()](primer-slipring-class.md#Slipring::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for slipring s in keyword format<br>
```
var str = s.toString();
```
 |
| --- |

* * *