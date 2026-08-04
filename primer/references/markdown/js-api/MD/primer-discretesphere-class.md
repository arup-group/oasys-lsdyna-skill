# DiscreteSphere class

The DiscreteSphere class gives you access to element discrete sphere cards in PRIMER. [More...](primer-discretesphere-class.md#DiscreteSphere_details)

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

* [BlankAll](primer-discretesphere-class.md#DiscreteSphere::BlankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [BlankFlagged](primer-discretesphere-class.md#DiscreteSphere::BlankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Create](primer-discretesphere-class.md#DiscreteSphere::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [First](primer-discretesphere-class.md#DiscreteSphere::First)(Model*[[Model](primer-model-class.md)]*)
* [FirstFreeLabel](primer-discretesphere-class.md#DiscreteSphere::FirstFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [FlagAll](primer-discretesphere-class.md#DiscreteSphere::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-discretesphere-class.md#DiscreteSphere::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-discretesphere-class.md#DiscreteSphere::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-discretesphere-class.md#DiscreteSphere::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-discretesphere-class.md#DiscreteSphere::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-discretesphere-class.md#DiscreteSphere::Last)(Model*[[Model](primer-model-class.md)]*)
* [LastFreeLabel](primer-discretesphere-class.md#DiscreteSphere::LastFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [NextFreeLabel](primer-discretesphere-class.md#DiscreteSphere::NextFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [Pick](primer-discretesphere-class.md#DiscreteSphere::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [Select](primer-discretesphere-class.md#DiscreteSphere::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-discretesphere-class.md#DiscreteSphere::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-discretesphere-class.md#DiscreteSphere::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnblankAll](primer-discretesphere-class.md#DiscreteSphere::UnblankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnblankFlagged](primer-discretesphere-class.md#DiscreteSphere::UnblankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [UnflagAll](primer-discretesphere-class.md#DiscreteSphere::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-discretesphere-class.md#DiscreteSphere::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-discretesphere-class.md#DiscreteSphere::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-discretesphere-class.md#DiscreteSphere::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Blank](primer-discretesphere-class.md#DiscreteSphere::Blank)()
* [Blanked](primer-discretesphere-class.md#DiscreteSphere::Blanked)()
* [Browse](primer-discretesphere-class.md#DiscreteSphere::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-discretesphere-class.md#DiscreteSphere::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-discretesphere-class.md#DiscreteSphere::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-discretesphere-class.md#DiscreteSphere::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-discretesphere-class.md#DiscreteSphere::Edit)(modal (optional)*[boolean]*)
* [Error](primer-discretesphere-class.md#DiscreteSphere::Error)(message*[string]*, details (optional)*[string]*)
* [ExtractColour](primer-discretesphere-class.md#DiscreteSphere::ExtractColour)()
* [Flagged](primer-discretesphere-class.md#DiscreteSphere::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-discretesphere-class.md#DiscreteSphere::GetComments)()
* [GetParameter](primer-discretesphere-class.md#DiscreteSphere::GetParameter)(prop*[string]*)
* [Keyword](primer-discretesphere-class.md#DiscreteSphere::Keyword)()
* [KeywordCards](primer-discretesphere-class.md#DiscreteSphere::KeywordCards)()
* [Next](primer-discretesphere-class.md#DiscreteSphere::Next)()
* [Previous](primer-discretesphere-class.md#DiscreteSphere::Previous)()
* [SetFlag](primer-discretesphere-class.md#DiscreteSphere::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Sketch](primer-discretesphere-class.md#DiscreteSphere::Sketch)(redraw (optional)*[boolean]*)
* [Unblank](primer-discretesphere-class.md#DiscreteSphere::Unblank)()
* [Unsketch](primer-discretesphere-class.md#DiscreteSphere::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-discretesphere-class.md#DiscreteSphere::ViewParameters)()
* [Warning](primer-discretesphere-class.md#DiscreteSphere::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-discretesphere-class.md#DiscreteSphere::Xrefs)()
* [toString](primer-discretesphere-class.md#DiscreteSphere::toString)()

## DiscreteSphere properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| colour | [Colour](primer-colour-class.md) | The colour of the discrete sphere |
| exists (read only) | logical | true if discrete sphere exists, false if referred to but not defined. |
| idist | integer | Distribution of DES properties. |
| include | integer | The [Include](primer-include-class.md) file number that the discrete sphere is in. |
| inertia | real | Mass moment of inertia. |
| isd\_mi | real | Standard deviation for mass moment of inertia or inertia per unit density(depending on whether the \_VOLUME option is set), if [idist](primer-discretesphere-class.md#idist) is -1 or 1. Shape parameter for mass moment of inertia or inertia per unit density(depending on whether the \_VOLUME option is set), if [idist](primer-discretesphere-class.md#idist) is -2 or 2. |
| mass | real | Mass or volume value (depending on whether the \_VOLUME option is set). |
| model (read only) | integer | The [Model](primer-model-class.md) number that the discrete sphere is in. |
| msd\_mm | real | Standard deviation for mass or volume(depending on whether the \_VOLUME option is set), if [idist](primer-discretesphere-class.md#idist) is -1 or 1. Shape parameter for mass or volume(depending on whether the \_VOLUME option is set), if [idist](primer-discretesphere-class.md#idist) is -2 or 2. |
| nid | integer | [Node](primer-node-class.md) ID. |
| pid | integer | [Part](primer-part-class.md) ID to which this element belongs. |
| radius | real | Particle radius. |
| rsd\_mr | real | Standard deviation for radius, if [idist](primer-discretesphere-class.md#idist) is -1 or 1. Shape parameter for radius, if [idist](primer-discretesphere-class.md#idist) is -2 or 2. |
| transparency | integer | The transparency of the discrete sphere (0-100) 0% is opaque, 100% is transparent. |
| volume | logical | Turns \_VOLUME on or OFF. Note that this does NOT refer to the data field VOLUME. For the latter see the [mass](primer-discretesphere-class.md#mass) property. |

| Detailed Description<br>The DiscreteSphere class allows you to create, modify, edit and manipulate discrete sphere cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new DiscreteSphere(Model*[[Model](primer-model-class.md)]*, nid*[integer]*, pid*[integer]*, mass*[real]*, inertia*[real]*, radius*[real]*)

Description<br>Create a new [DiscreteSphere](primer-discretesphere-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that discrete sphere will be created in

* nid (integer)
 
[Node](primer-node-class.md) ID and Element ID are the same for discrete spheres.

* pid (integer)
 
[Part](primer-part-class.md) ID to which this element belongs.

* mass (real)
 
Mass or volume value.

* inertia (real)
 
Mass moment of inertia.

* radius (real)
 
Particle radius.

| Returns
<br>[DiscreteSphere](primer-discretesphere-class.md) object<br>
Return type
<br>DiscreteSphere |
| --- |

| Example
<br>To create a new discrete sphere in model m with nid = 100, pid = 400, mass = 0.9, inertia = 2.5, radius = 2.0:<br>
```
var dsph = new DiscreteSphere(m, 100, 400, 0.9, 2.5, 2.0);
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a discrete sphere. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the discrete sphere

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the discrete sphere dsph:<br>
```
dsph.AssociateComment(c);
```
 |
| --- |

* * *

| Blank()

Description<br>Blanks the discrete sphere |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To blank discrete sphere dsph:<br>
```
dsph.Blank();
```
 |
| --- |

* * *

| BlankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the discrete spheres in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all discrete spheres will be blanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the discrete spheres in model m:<br>
```
DiscreteSphere.BlankAll(m);
```
 |
| --- |

* * *

| BlankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the flagged discrete spheres in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged discrete spheres will be blanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the discrete spheres that you want to blank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the discrete spheres in model m flagged with f:<br>
```
DiscreteSphere.BlankFlagged(m, f);
```
 |
| --- |

* * *

| Blanked()

Description<br>Checks if the discrete sphere is blanked or not. |
| --- |

#### Arguments

No arguments

| Returns
<br>true if blanked, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if discrete sphere dsph is blanked:<br>
```
if (dsph.Blanked() ) do_something...
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
<br>To Browse discrete sphere dsph:<br>
```
dsph.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the discrete sphere. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the discrete sphere

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for discrete sphere dsph:<br>
```
dsph.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the discrete sphere. The target include of the copied discrete sphere can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>DiscreteSphere object<br>
Return type
<br>DiscreteSphere |
| --- |

| Example
<br>To copy discrete sphere dsph into discrete sphere z:<br>
```
var z = dsph.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a discrete sphere |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the discrete sphere will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>DiscreteSphere object (or null if not made).<br>
Return type
<br>DiscreteSphere |
| --- |

| Example
<br>To start creating a discrete sphere in model m:<br>
```
var dsph = DiscreteSphere.Create(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a discrete sphere. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the discrete sphere

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the discrete sphere dsph:<br>
```
dsph.DetachComment(c);
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
<br>To Edit discrete sphere dsph:<br>
```
dsph.Edit();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for discrete sphere. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for discrete sphere dsph:<br>
```
dsph.Error("My custom error");
```
 |
| --- |

* * *

| ExtractColour()

Description<br>Extracts the **actual** colour used for discrete sphere.<br> By default in PRIMER many entities such as elements get their colour automatically from the part that they are in. PRIMER cycles through 13 default colours based on the label of the entity. In this case the discrete sphere [colour](primer-discretesphere-class.md#colour) property will return the value [Colour.PART](primer-colour-class.md#Colour.PART) instead of the actual colour. This method will return the actual colour which is used for drawing the discrete sphere. |
| --- |

#### Arguments

No arguments

| Returns
<br>colour value (integer)<br>
Return type
<br>Number |
| --- |

| Example
<br>To return the colour used for drawing discrete sphere dsph:<br>
```
var colour = dsph.ExtractColour();
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first discrete sphere in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first discrete sphere in

| Returns
<br>DiscreteSphere object (or null if there are no discrete spheres in the model).<br>
Return type
<br>DiscreteSphere |
| --- |

| Example
<br>To get the first discrete sphere in model m:<br>
```
var dsph = DiscreteSphere.First(m);
```
 |
| --- |

* * *

| FirstFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the first free discrete sphere label in the model. Also see [DiscreteSphere.LastFreeLabel()](primer-discretesphere-class.md#DiscreteSphere::LastFreeLabel), [DiscreteSphere.NextFreeLabel()](primer-discretesphere-class.md#DiscreteSphere::NextFreeLabel) and [Model.FirstFreeItemLabel()](primer-model-class.md#Model::FirstFreeItemLabel). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first free discrete sphere label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *First free in layer* in editing panels). If omitted the whole model will be used (Equivalent to *First free* in editing panels).

| Returns
<br>DiscreteSphere label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the first free discrete sphere label in model m:<br>
```
var label = DiscreteSphere.FirstFreeLabel(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the discrete spheres in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all discrete spheres will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the discrete spheres

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the discrete spheres with flag f in model m:<br>
```
DiscreteSphere.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the discrete sphere is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the discrete sphere

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if discrete sphere dsph has flag f set on it:<br>
```
if (dsph.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each discrete sphere in the model.<br> **Note that ForEach has been designed to make looping over discrete spheres as fast as possible and so has some limitations. Firstly, a single temporary DiscreteSphere object is created and on each function call it is updated with the current discrete sphere data. This means that you should not try to store the DiscreteSphere object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new discrete spheres inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all discrete spheres are in

* func (function)
 
Function to call for each discrete sphere

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the discrete spheres in model m:<br>
```
DiscreteSphere.ForEach(m, test);
function test(dsph)
{
// dsph is DiscreteSphere object
}
```
<br><br>To call function test for all of the discrete spheres in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
DiscreteSphere.ForEach(m, test, data);
function test(dsph, extra)
{
// dsph is DiscreteSphere object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of DiscreteSphere objects or properties for all of the discrete spheres in a model in PRIMER. If the optional property argument is not given then an array of DiscreteSphere objects is returned. If the property argument is given, that property value for each discrete sphere is returned in the array instead of a DiscreteSphere object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get discrete spheres from

* property (optional) (string)
 
Name for property to get for all discrete spheres in the model

| Returns
<br>Array of DiscreteSphere objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of DiscreteSphere objects for all of the discrete spheres in model m:<br>
```
var a = DiscreteSphere.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each discrete sphere in model m:<br>
```
var a = DiscreteSphere.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a discrete sphere. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the discrete sphere dsph:<br>
```
var comm_array = dsph.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of DiscreteSphere objects for all of the flagged discrete spheres in a model in PRIMER If the optional property argument is not given then an array of DiscreteSphere objects is returned. If the property argument is given, then that property value for each discrete sphere is returned in the array instead of a DiscreteSphere object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get discrete spheres from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the discrete spheres that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged discrete spheres in the model

| Returns
<br>Array of DiscreteSphere objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of DiscreteSphere objects for all of the discrete spheres in model m flagged with f:<br>
```
var dsph = DiscreteSphere.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the discrete spheres in model m flagged with f:<br>
```
var a = DiscreteSphere.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the DiscreteSphere object for a discrete sphere ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the discrete sphere in

* number (integer)
 
number of the discrete sphere you want the DiscreteSphere object for

| Returns
<br>DiscreteSphere object (or null if discrete sphere does not exist).<br>
Return type
<br>DiscreteSphere |
| --- |

| Example
<br>To get the DiscreteSphere object for discrete sphere 100 in model m<br>
```
var dsph = DiscreteSphere.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a DiscreteSphere property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [DiscreteSphere.ViewParameters()](primer-discretesphere-class.md#DiscreteSphere::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
discrete sphere property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if DiscreteSphere property dsph.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (dsph.GetParameter(dsph.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if DiscreteSphere property dsph.example is a parameter by using the GetParameter method:<br>
```
if (dsph.ViewParameters().GetParameter(dsph.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this discrete sphere (\*ELEMENT\_DISCRETE\_SPHERE or \*ELEMENT\_DISCRETE\_SPHERE\_VOLUME). **Note that a carriage return is not added**. See also [DiscreteSphere.KeywordCards()](primer-discretesphere-class.md#DiscreteSphere::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for discrete sphere dsph:<br>
```
var key = dsph.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the discrete sphere. **Note that a carriage return is not added**. See also [DiscreteSphere.Keyword()](primer-discretesphere-class.md#DiscreteSphere::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for discrete sphere dsph:<br>
```
var cards = dsph.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last discrete sphere in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last discrete sphere in

| Returns
<br>DiscreteSphere object (or null if there are no discrete spheres in the model).<br>
Return type
<br>DiscreteSphere |
| --- |

| Example
<br>To get the last discrete sphere in model m:<br>
```
var dsph = DiscreteSphere.Last(m);
```
 |
| --- |

* * *

| LastFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the last free discrete sphere label in the model. Also see [DiscreteSphere.FirstFreeLabel()](primer-discretesphere-class.md#DiscreteSphere::FirstFreeLabel), [DiscreteSphere.NextFreeLabel()](primer-discretesphere-class.md#DiscreteSphere::NextFreeLabel) and see [Model.LastFreeItemLabel()](primer-model-class.md#Model::LastFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last free discrete sphere label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest free in layer* in editing panels). If omitted the whole model will be used.

| Returns
<br>DiscreteSphere label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the last free discrete sphere label in model m:<br>
```
var label = DiscreteSphere.LastFreeLabel(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next discrete sphere in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>DiscreteSphere object (or null if there are no more discrete spheres in the model).<br>
Return type
<br>DiscreteSphere |
| --- |

| Example
<br>To get the discrete sphere in model m after discrete sphere dsph:<br>
```
var dsph = dsph.Next();
```
 |
| --- |

* * *

| NextFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the next free (highest+1) discrete sphere label in the model. Also see [DiscreteSphere.FirstFreeLabel()](primer-discretesphere-class.md#DiscreteSphere::FirstFreeLabel), [DiscreteSphere.LastFreeLabel()](primer-discretesphere-class.md#DiscreteSphere::LastFreeLabel) and [Model.NextFreeItemLabel()](primer-model-class.md#Model::NextFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get next free discrete sphere label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest+1 in layer* in editing panels). If omitted the whole model will be used (Equivalent to *Highest+1* in editing panels).

| Returns
<br>DiscreteSphere label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the next free discrete sphere label in model m:<br>
```
var label = DiscreteSphere.NextFreeLabel(m);
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a discrete sphere. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only discrete spheres from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only discrete spheres that are flagged with *limit* can be selected. If omitted, or null, any discrete spheres from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[DiscreteSphere](primer-discretesphere-class.md) object (or null if not picked)<br>
Return type
<br>DiscreteSphere |
| --- |

| Example
<br>To pick a discrete sphere from model m giving the prompt 'Pick discrete sphere from screen':<br>
```
var dsph = DiscreteSphere.Pick('Pick discrete sphere from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous discrete sphere in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>DiscreteSphere object (or null if there are no more discrete spheres in the model).<br>
Return type
<br>DiscreteSphere |
| --- |

| Example
<br>To get the discrete sphere in model m before discrete sphere dsph:<br>
```
var dsph = dsph.Previous();
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select discrete spheres using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting discrete spheres

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only discrete spheres from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only discrete spheres that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any discrete spheres can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of discrete spheres selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select discrete spheres from model m, flagging those selected with flag f, giving the prompt 'Select discrete spheres':<br>
```
DiscreteSphere.Select(f, 'Select discrete spheres', m);
```
<br><br>To select discrete spheres, flagging those selected with flag f but limiting selection to discrete spheres flagged with flag l, giving the prompt 'Select discrete spheres':<br>
```
DiscreteSphere.Select(f, 'Select discrete spheres', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the discrete sphere. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the discrete sphere

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for discrete sphere dsph:<br>
```
dsph.SetFlag(f);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the discrete sphere. The discrete sphere will be sketched until you either call [DiscreteSphere.Unsketch()](primer-discretesphere-class.md#DiscreteSphere::Unsketch), [DiscreteSphere.UnsketchAll()](primer-discretesphere-class.md#DiscreteSphere::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the discrete sphere is sketched. If omitted redraw is true. If you want to sketch several discrete spheres and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch discrete sphere dsph:<br>
```
dsph.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged discrete spheres in the model. The discrete spheres will be sketched until you either call [DiscreteSphere.Unsketch()](primer-discretesphere-class.md#DiscreteSphere::Unsketch), [DiscreteSphere.UnsketchFlagged()](primer-discretesphere-class.md#DiscreteSphere::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged discrete spheres will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the discrete spheres that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the discrete spheres are sketched. If omitted redraw is true. If you want to sketch flagged discrete spheres several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all discrete spheres flagged with flag in model m:<br>
```
DiscreteSphere.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of discrete spheres in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing discrete spheres should be counted. If false or omitted
referenced but undefined discrete spheres will also be included in the total.

| Returns
<br>number of discrete spheres<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of discrete spheres in model m:<br>
```
var total = DiscreteSphere.Total(m);
```
 |
| --- |

* * *

| Unblank()

Description<br>Unblanks the discrete sphere |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank discrete sphere dsph:<br>
```
dsph.Unblank();
```
 |
| --- |

* * *

| UnblankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the discrete spheres in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all discrete spheres will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the discrete spheres in model m:<br>
```
DiscreteSphere.UnblankAll(m);
```
 |
| --- |

* * *

| UnblankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the flagged discrete spheres in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the flagged discrete spheres will be unblanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the discrete spheres that you want to unblank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the discrete spheres in model m flagged with f:<br>
```
DiscreteSphere.UnblankFlagged(m, f);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the discrete spheres in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all discrete spheres will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the discrete spheres

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the discrete spheres in model m:<br>
```
DiscreteSphere.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the discrete sphere. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the discrete sphere is unsketched. If omitted redraw is true. If you want to unsketch several discrete spheres and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch discrete sphere dsph:<br>
```
dsph.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all discrete spheres. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all discrete spheres will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the discrete spheres are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all discrete spheres in model m:<br>
```
DiscreteSphere.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged discrete spheres in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all discrete spheres will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the discrete spheres that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the discrete spheres are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all discrete spheres flagged with flag in model m:<br>
```
DiscreteSphere.UnsketchAll(m, flag);
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
<br>[DiscreteSphere](primer-discretesphere-class.md) object.<br>
Return type
<br>DiscreteSphere |
| --- |

| Example
<br>To check if DiscreteSphere property dsph.example is a parameter by using the [DiscreteSphere.GetParameter()](primer-discretesphere-class.md#DiscreteSphere::GetParameter) method:<br>
```
if (dsph.ViewParameters().GetParameter(dsph.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for discrete sphere. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for discrete sphere dsph:<br>
```
dsph.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this discrete sphere. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for discrete sphere dsph:<br>
```
var xrefs = dsph.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the discrete sphere data in keyword format. Note that this contains the keyword header and the keyword cards. See also [DiscreteSphere.Keyword()](primer-discretesphere-class.md#DiscreteSphere::Keyword) and [DiscreteSphere.KeywordCards()](primer-discretesphere-class.md#DiscreteSphere::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for discrete sphere dsph in keyword format<br>
```
var s = dsph.toString();
```
 |
| --- |

* * *