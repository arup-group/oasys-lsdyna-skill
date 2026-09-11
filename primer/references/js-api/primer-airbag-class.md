# Airbag class

The Airbag class gives you access to airbag cards in PRIMER. [More...](primer-airbag-class.md#Airbag_details)

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

* [Create](primer-airbag-class.md#Airbag::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [First](primer-airbag-class.md#Airbag::First)(Model*[[Model](primer-model-class.md)]*)
* [FirstFreeLabel](primer-airbag-class.md#Airbag::FirstFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [FlagAll](primer-airbag-class.md#Airbag::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-airbag-class.md#Airbag::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-airbag-class.md#Airbag::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-airbag-class.md#Airbag::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-airbag-class.md#Airbag::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-airbag-class.md#Airbag::Last)(Model*[[Model](primer-model-class.md)]*)
* [LastFreeLabel](primer-airbag-class.md#Airbag::LastFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [NextFreeLabel](primer-airbag-class.md#Airbag::NextFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [RenumberAll](primer-airbag-class.md#Airbag::RenumberAll)(Model*[[Model](primer-model-class.md)]*, start*[integer]*)
* [RenumberFlagged](primer-airbag-class.md#Airbag::RenumberFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*)
* [Select](primer-airbag-class.md#Airbag::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-airbag-class.md#Airbag::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-airbag-class.md#Airbag::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnflagAll](primer-airbag-class.md#Airbag::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-airbag-class.md#Airbag::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-airbag-class.md#Airbag::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-airbag-class.md#Airbag::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Browse](primer-airbag-class.md#Airbag::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-airbag-class.md#Airbag::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-airbag-class.md#Airbag::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-airbag-class.md#Airbag::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-airbag-class.md#Airbag::Edit)(modal (optional)*[boolean]*)
* [Error](primer-airbag-class.md#Airbag::Error)(message*[string]*, details (optional)*[string]*)
* [ExtractColour](primer-airbag-class.md#Airbag::ExtractColour)()
* [Flagged](primer-airbag-class.md#Airbag::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-airbag-class.md#Airbag::GetComments)()
* [GetParameter](primer-airbag-class.md#Airbag::GetParameter)(prop*[string]*)
* [GetPropertyByIndex](primer-airbag-class.md#Airbag::GetPropertyByIndex)(index*[integer]*)
* [GetPropertyByName](primer-airbag-class.md#Airbag::GetPropertyByName)(acronym*[string]*)
* [GetPropertyByRowCol](primer-airbag-class.md#Airbag::GetPropertyByRowCol)(row*[integer]*, col*[integer]*)
* [GetPropertyNameForIndex](primer-airbag-class.md#Airbag::GetPropertyNameForIndex)(index*[integer]*)
* [GetPropertyNameForRowCol](primer-airbag-class.md#Airbag::GetPropertyNameForRowCol)(row*[integer]*, col*[integer]*)
* [Keyword](primer-airbag-class.md#Airbag::Keyword)()
* [KeywordCards](primer-airbag-class.md#Airbag::KeywordCards)()
* [Next](primer-airbag-class.md#Airbag::Next)()
* [Previous](primer-airbag-class.md#Airbag::Previous)()
* [SetFlag](primer-airbag-class.md#Airbag::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [SetPropertyByIndex](primer-airbag-class.md#Airbag::SetPropertyByIndex)(index*[integer]*, value*[integer/real for numeric properties, string for character properties]*)
* [SetPropertyByName](primer-airbag-class.md#Airbag::SetPropertyByName)(acronym*[string]*, value*[integer/real for numeric properties, string for character properties]*)
* [SetPropertyByRowCol](primer-airbag-class.md#Airbag::SetPropertyByRowCol)(row*[integer]*, col*[integer]*, value*[integer/real for numeric properties, string for character properties]*)
* [Sketch](primer-airbag-class.md#Airbag::Sketch)(redraw (optional)*[boolean]*)
* [Unsketch](primer-airbag-class.md#Airbag::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-airbag-class.md#Airbag::ViewParameters)()
* [Warning](primer-airbag-class.md#Airbag::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-airbag-class.md#Airbag::Xrefs)()
* [toString](primer-airbag-class.md#Airbag::toString)()

## Airbag constants

| **Name** | **Description** |
| --- | --- |
| Airbag.ADIABATIC\_GAS\_MODEL | Airbag adiabatic gas model type |
| Airbag.ADVANCED\_ALE | Airbag advanced ALE type |
| Airbag.ALE | Airbag ALE type |
| Airbag.HYBRID | Airbag hybrid type |
| Airbag.HYBRID\_CHEMKIN | Airbag hybrid chemkin type |
| Airbag.HYBRID\_JETTING | Airbag hybrid jetting type |
| Airbag.LINEAR\_FLUID | Airbag linear fluid type |
| Airbag.LOAD\_CURVE | Airbag load curve type |
| Airbag.PARTICLE | Airbag particle type |
| Airbag.SIMPLE\_AIRBAG\_MODEL | Airbag simple airbag model type |
| Airbag.SIMPLE\_PRESSURE\_VOLUME | Airbag simple pressure volume type |
| Airbag.WANG\_NEFSKE | Airbag Wang Nefske type |
| Airbag.WANG\_NEFSKE\_JETTING | Airbag Wang Nefske jetting type |
| Airbag.WANG\_NEFSKE\_MULTIPLE\_JETTING | Airbag Wang Nefske multiple jetting type |

## Airbag properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| abid | integer | [Airbag](primer-airbag-class.md) number. Also see the [label](primer-airbag-class.md#label) property which is an alternative name for this. |
| colour | [Colour](primer-colour-class.md) | The colour of the airbag |
| cols (read only) | real | The number of columns of data the airbag has |
| exists (read only) | logical | true if airbag exists, false if referred to but not defined. |
| id | logical | Turns \_ID on or OFF |
| include | integer | The [Include](primer-include-class.md) file number that the airbag is in. |
| label | integer | [Airbag](primer-airbag-class.md) number. Also see the [abid](primer-airbag-class.md#abid) property which is an alternative name for this. |
| model (read only) | integer | The [Model](primer-model-class.md) number that the airbag is in. |
| properties | integer | The total number of properties that the airbag has |
| rows (read only) | integer | The number of rows of data the airbag has. This includes the \_ID card if it is set. |
| title | string | [Airbag](primer-airbag-class.md) title |
| type | constant | Airbag type. Can be [Airbag.SIMPLE_PRESSURE_VOLUME](primer-airbag-class.md#Airbag.SIMPLE_PRESSURE_VOLUME), [Airbag.SIMPLE_AIRBAG_MODEL](primer-airbag-class.md#Airbag.SIMPLE_AIRBAG_MODEL), [Airbag.ADIABATIC_GAS_MODEL](primer-airbag-class.md#Airbag.ADIABATIC_GAS_MODEL), [Airbag.WANG_NEFSKE](primer-airbag-class.md#Airbag.WANG_NEFSKE), [Airbag.WANG_NEFSKE_JETTING](primer-airbag-class.md#Airbag.WANG_NEFSKE_JETTING), [Airbag.WANG_NEFSKE_MULTIPLE_JETTING](primer-airbag-class.md#Airbag.WANG_NEFSKE_MULTIPLE_JETTING), [Airbag.LOAD_CURVE](primer-airbag-class.md#Airbag.LOAD_CURVE), [Airbag.LINEAR_FLUID](primer-airbag-class.md#Airbag.LINEAR_FLUID), [Airbag.HYBRID](primer-airbag-class.md#Airbag.HYBRID), [Airbag.HYBRID_JETTING](primer-airbag-class.md#Airbag.HYBRID_JETTING), [Airbag.HYBRID_CHEMKIN](primer-airbag-class.md#Airbag.HYBRID_CHEMKIN), [Airbag.ALE](primer-airbag-class.md#Airbag.ALE), [Airbag.ADVANCED_ALE](primer-airbag-class.md#Airbag.ADVANCED_ALE) or [Airbag.PARTICLE](primer-airbag-class.md#Airbag.PARTICLE) |

| Detailed Description<br>The Airbag class allows you to create, modify, edit and manipulate airbag cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new Airbag(Model*[[Model](primer-model-class.md)]*, type*[string]*, sid*[integer]*, sidtyp (optional)*[integer]*, abid (optional)*[integer]*, heading (optional)*[string]*)

Description<br>Create a new [Airbag](primer-airbag-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that airbag will be created in

* type (string)
 
Airbag type. Can be [Airbag.SIMPLE_PRESSURE_VOLUME](primer-airbag-class.md#Airbag.SIMPLE_PRESSURE_VOLUME), [Airbag.SIMPLE_AIRBAG_MODEL](primer-airbag-class.md#Airbag.SIMPLE_AIRBAG_MODEL), [Airbag.ADIABATIC_GAS_MODEL](primer-airbag-class.md#Airbag.ADIABATIC_GAS_MODEL), [Airbag.WANG_NEFSKE](primer-airbag-class.md#Airbag.WANG_NEFSKE), [Airbag.WANG_NEFSKE_JETTING](primer-airbag-class.md#Airbag.WANG_NEFSKE_JETTING), [Airbag.WANG_NEFSKE_MULTIPLE_JETTING](primer-airbag-class.md#Airbag.WANG_NEFSKE_MULTIPLE_JETTING), [Airbag.LOAD_CURVE](primer-airbag-class.md#Airbag.LOAD_CURVE), [Airbag.LINEAR_FLUID](primer-airbag-class.md#Airbag.LINEAR_FLUID), [Airbag.HYBRID](primer-airbag-class.md#Airbag.HYBRID), [Airbag.HYBRID_JETTING](primer-airbag-class.md#Airbag.HYBRID_JETTING), [Airbag.HYBRID_CHEMKIN](primer-airbag-class.md#Airbag.HYBRID_CHEMKIN), [Airbag.ALE](primer-airbag-class.md#Airbag.ALE), [Airbag.ADVANCED_ALE](primer-airbag-class.md#Airbag.ADVANCED_ALE) or [Airbag.PARTICLE](primer-airbag-class.md#Airbag.PARTICLE)

* sid (integer)
 
Set ID

* sidtyp (optional) (integer)
 
Set type: segment/part set ID

* abid (optional) (integer)
 
[Airbag](primer-airbag-class.md) number

* heading (optional) (string)
 
[Airbag](primer-airbag-class.md) title

| Returns
<br>[Airbag](primer-airbag-class.md) object<br>
Return type
<br>Airbag |
| --- |

| Example
<br>To create a new AIRBAG\_SIMPLE\_PRESSURE\_VOLUME in model m with set ID 10 and segment set type<br>
```
var a = new Airbag(m, Airbag.SIMPLE_PRESSURE_VOLUME, 10);
```
<br>or<br>
```
var a = new Airbag(m, Airbag.SIMPLE_PRESSURE_VOLUME, 10, 0);
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a airbag. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the airbag

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the airbag a:<br>
```
a.AssociateComment(c);
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
<br>To Browse airbag a:<br>
```
a.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the airbag. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the airbag

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for airbag a:<br>
```
a.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the airbag. The target include of the copied airbag can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>Airbag object<br>
Return type
<br>Airbag |
| --- |

| Example
<br>To copy airbag a into airbag z:<br>
```
var z = a.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a airbag |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the airbag will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>Airbag object (or null if not made).<br>
Return type
<br>Airbag |
| --- |

| Example
<br>To start creating a airbag in model m:<br>
```
var a = Airbag.Create(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a airbag. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the airbag

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the airbag a:<br>
```
a.DetachComment(c);
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
<br>To Edit airbag a:<br>
```
a.Edit();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for airbag. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for airbag a:<br>
```
a.Error("My custom error");
```
 |
| --- |

* * *

| ExtractColour()

Description<br>Extracts the **actual** colour used for airbag.<br> By default in PRIMER many entities such as elements get their colour automatically from the part that they are in. PRIMER cycles through 13 default colours based on the label of the entity. In this case the airbag [colour](primer-airbag-class.md#colour) property will return the value [Colour.PART](primer-colour-class.md#Colour.PART) instead of the actual colour. This method will return the actual colour which is used for drawing the airbag. |
| --- |

#### Arguments

No arguments

| Returns
<br>colour value (integer)<br>
Return type
<br>Number |
| --- |

| Example
<br>To return the colour used for drawing airbag a:<br>
```
var colour = a.ExtractColour();
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first airbag in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first airbag in

| Returns
<br>Airbag object (or null if there are no airbags in the model).<br>
Return type
<br>Airbag |
| --- |

| Example
<br>To get the first airbag in model m:<br>
```
var a = Airbag.First(m);
```
 |
| --- |

* * *

| FirstFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the first free airbag label in the model. Also see [Airbag.LastFreeLabel()](primer-airbag-class.md#Airbag::LastFreeLabel), [Airbag.NextFreeLabel()](primer-airbag-class.md#Airbag::NextFreeLabel) and [Model.FirstFreeItemLabel()](primer-model-class.md#Model::FirstFreeItemLabel). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first free airbag label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *First free in layer* in editing panels). If omitted the whole model will be used (Equivalent to *First free* in editing panels).

| Returns
<br>Airbag label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the first free airbag label in model m:<br>
```
var label = Airbag.FirstFreeLabel(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the airbags in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all airbags will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the airbags

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the airbags with flag f in model m:<br>
```
Airbag.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the airbag is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the airbag

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if airbag a has flag f set on it:<br>
```
if (a.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each airbag in the model.<br> **Note that ForEach has been designed to make looping over airbags as fast as possible and so has some limitations. Firstly, a single temporary Airbag object is created and on each function call it is updated with the current airbag data. This means that you should not try to store the Airbag object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new airbags inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all airbags are in

* func (function)
 
Function to call for each airbag

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the airbags in model m:<br>
```
Airbag.ForEach(m, test);
function test(a)
{
// a is Airbag object
}
```
<br><br>To call function test for all of the airbags in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
Airbag.ForEach(m, test, data);
function test(a, extra)
{
// a is Airbag object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Airbag objects or properties for all of the airbags in a model in PRIMER. If the optional property argument is not given then an array of Airbag objects is returned. If the property argument is given, that property value for each airbag is returned in the array instead of a Airbag object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get airbags from

* property (optional) (string)
 
Name for property to get for all airbags in the model

| Returns
<br>Array of Airbag objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Airbag objects for all of the airbags in model m:<br>
```
var a = Airbag.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each airbag in model m:<br>
```
var a = Airbag.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a airbag. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the airbag a:<br>
```
var comm_array = a.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Airbag objects for all of the flagged airbags in a model in PRIMER If the optional property argument is not given then an array of Airbag objects is returned. If the property argument is given, then that property value for each airbag is returned in the array instead of a Airbag object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get airbags from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the airbags that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged airbags in the model

| Returns
<br>Array of Airbag objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Airbag objects for all of the airbags in model m flagged with f:<br>
```
var a = Airbag.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the airbags in model m flagged with f:<br>
```
var a = Airbag.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the Airbag object for a airbag ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the airbag in

* number (integer)
 
number of the airbag you want the Airbag object for

| Returns
<br>Airbag object (or null if airbag does not exist).<br>
Return type
<br>Airbag |
| --- |

| Example
<br>To get the Airbag object for airbag 100 in model m<br>
```
var a = Airbag.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a Airbag property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [Airbag.ViewParameters()](primer-airbag-class.md#Airbag::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
airbag property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if Airbag property a.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (a.GetParameter(a.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if Airbag property a.example is a parameter by using the GetParameter method:<br>
```
if (a.ViewParameters().GetParameter(a.example) ) do_something...
```
 |
| --- |

* * *

| GetPropertyByIndex(index*[integer]*)

Description<br>Returns the value of property at index *index* for this [Airbag](primer-airbag-class.md) object or null if no property exists. |
| --- |

#### Arguments

* index (integer)
 
The index of the property value to retrieve. (the number of properties can be found from [properties](primer-airbag-class.md#properties)) **Note that indices start at 0**. There is no link between indices and rows/columns so adjacent fields on a line for an airbag may not have adjacent indices.

| Returns
<br>Property value (real/integer)<br>
Return type
<br>Number |
| --- |

| Example
<br>To return the property at index 3, for airbag a:<br>
```
var prop = a.GetPropertyByIndex(3);

```
 |
| --- |

* * *

| GetPropertyByName(acronym*[string]*)

Description<br>Returns the value of property string *acronym* for this [Airbag](primer-airbag-class.md) object or null if no property exists. |
| --- |

#### Arguments

* acronym (string)
 
The acronym of the property value to retrieve

| Returns
<br>Property value (real/integer)<br>
Return type
<br>Number |
| --- |

| Example
<br>To return the value of HCONV for airbag a:<br>
```
var hconv = a.GetPropertyByName("HCONV");
```
 |
| --- |

* * *

| GetPropertyByRowCol(row*[integer]*, col*[integer]*)

Description<br>Returns the value of the property for row and col for this [Airbag](primer-airbag-class.md) object or null if no property exists. **Note that columns start at 0. Rows start at 1 if the \_ID option is set, at 0 otherwise**. |
| --- |

#### Arguments

* row (integer)
 
The row of the property value to retrieve

* col (integer)
 
The column of the property value to retrieve

| Returns
<br>Property value (real/integer)<br>
Return type
<br>Number |
| --- |

| Example
<br>To return the value of the property at row 0, column 3 for airbag a:<br>
```
var prop = a.GetPropertyByRowCol(0, 3);
```
 |
| --- |

* * *

| GetPropertyNameForIndex(index*[integer]*)

Description<br>Returns the name of the property at index *index* for this [Airbag](primer-airbag-class.md) object or null if there is no property. |
| --- |

#### Arguments

* index (integer)
 
The index of the property name to retrieve. (the number of properties can be found from [properties](primer-airbag-class.md#properties)) **Note that indices start at 0**. There is no link between indices and rows/columns so adjacent fields on a line for an airbag may not have adjacent indices.

| Returns
<br>Property name (string)<br>
Return type
<br>String |
| --- |

| Example
<br>To return the name of the property at index 3, for airbag a:<br>
```
var name = a.GetPropertyNameForIndex(3);

```
 |
| --- |

* * *

| GetPropertyNameForRowCol(row*[integer]*, col*[integer]*)

Description<br>Returns the name of the property at row and col for this [Airbag](primer-airbag-class.md) object or null if there is no property. **Note that columns start at 0. Rows start at 1 if the \_ID option is set, at 0 otherwise**. |
| --- |

#### Arguments

* row (integer)
 
The row of the property name to retrieve

* col (integer)
 
The column of the property name to retrieve

| Returns
<br>Property name (string)<br>
Return type
<br>String |
| --- |

| Example
<br>To return the name of the property at row 0, column 1 for airbag a:<br>
```
var name = a.GetPropertyNameForRowCol(0, 1);

```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this airbag (e.g. \*AIRBAG\_SIMPLE\_PRESSURE\_VOLUME, \*AIRBAG\_SIMPLE\_AIRBAG\_MODEL etc). **Note that a carriage return is not added**. See also [Airbag.KeywordCards()](primer-airbag-class.md#Airbag::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for airbag a:<br>
```
var key = a.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the airbag. **Note that a carriage return is not added**. See also [Airbag.Keyword()](primer-airbag-class.md#Airbag::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for airbag a:<br>
```
var cards = a.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last airbag in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last airbag in

| Returns
<br>Airbag object (or null if there are no airbags in the model).<br>
Return type
<br>Airbag |
| --- |

| Example
<br>To get the last airbag in model m:<br>
```
var a = Airbag.Last(m);
```
 |
| --- |

* * *

| LastFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the last free airbag label in the model. Also see [Airbag.FirstFreeLabel()](primer-airbag-class.md#Airbag::FirstFreeLabel), [Airbag.NextFreeLabel()](primer-airbag-class.md#Airbag::NextFreeLabel) and see [Model.LastFreeItemLabel()](primer-model-class.md#Model::LastFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last free airbag label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest free in layer* in editing panels). If omitted the whole model will be used.

| Returns
<br>Airbag label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the last free airbag label in model m:<br>
```
var label = Airbag.LastFreeLabel(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next airbag in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Airbag object (or null if there are no more airbags in the model).<br>
Return type
<br>Airbag |
| --- |

| Example
<br>To get the airbag in model m after airbag a:<br>
```
var a = a.Next();
```
 |
| --- |

* * *

| NextFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the next free (highest+1) airbag label in the model. Also see [Airbag.FirstFreeLabel()](primer-airbag-class.md#Airbag::FirstFreeLabel), [Airbag.LastFreeLabel()](primer-airbag-class.md#Airbag::LastFreeLabel) and [Model.NextFreeItemLabel()](primer-model-class.md#Model::NextFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get next free airbag label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest+1 in layer* in editing panels). If omitted the whole model will be used (Equivalent to *Highest+1* in editing panels).

| Returns
<br>Airbag label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the next free airbag label in model m:<br>
```
var label = Airbag.NextFreeLabel(m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous airbag in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Airbag object (or null if there are no more airbags in the model).<br>
Return type
<br>Airbag |
| --- |

| Example
<br>To get the airbag in model m before airbag a:<br>
```
var a = a.Previous();
```
 |
| --- |

* * *

| RenumberAll(Model*[[Model](primer-model-class.md)]*, start*[integer]*) [static]
Description<br>Renumbers all of the airbags in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all airbags will be renumbered in

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the airbags in model m, from 1000000:<br>
```
Airbag.RenumberAll(m, 1000000);
```
 |
| --- |

* * *

| RenumberFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*) [static]
Description<br>Renumbers all of the flagged airbags in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged airbags will be renumbered in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the airbags that you want to renumber

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the airbags in model m flagged with f, from 1000000:<br>
```
Airbag.RenumberFlagged(m, f, 1000000);
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select airbags using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting airbags

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only airbags from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only airbags that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any airbags can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of airbags selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select airbags from model m, flagging those selected with flag f, giving the prompt 'Select airbags':<br>
```
Airbag.Select(f, 'Select airbags', m);
```
<br><br>To select airbags, flagging those selected with flag f but limiting selection to airbags flagged with flag l, giving the prompt 'Select airbags':<br>
```
Airbag.Select(f, 'Select airbags', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the airbag. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the airbag

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for airbag a:<br>
```
a.SetFlag(f);
```
 |
| --- |

* * *

| SetPropertyByIndex(index*[integer]*, value*[integer/real for numeric properties, string for character properties]*)

Description<br>Sets the value of property at index *index* for this [Airbag](primer-airbag-class.md) object |
| --- |

#### Arguments

* index (integer)
 
The index of the property value to set. (the number of properties can be found from [properties](primer-airbag-class.md#properties)) **Note that indices start at 0**. There is no link between indices and rows/columns so adjacent fields on a line for an airbag may not have adjacent indices.

* value (integer/real for numeric properties, string for character properties)
 
The value of the property to set.

| Returns
<br>No return value |
| --- |

| Example
<br>To set the property at index 3, for airbag a to be 1.234:<br>
```
a.SetPropertyByIndex(3, 1.234);

```
 |
| --- |

* * *

| SetPropertyByName(acronym*[string]*, value*[integer/real for numeric properties, string for character properties]*)

Description<br>Sets the value of property string *acronym* for this [Airbag](primer-airbag-class.md) object |
| --- |

#### Arguments

* acronym (string)
 
The acronym of the property value to set

* value (integer/real for numeric properties, string for character properties)
 
The value of the property to set.

| Returns
<br>No return value |
| --- |

| Example
<br>To set the value of HCONV for airbag a to be 1.23:<br>
```
a.SetPropertyByName("HCONV", 1.23);

```
 |
| --- |

* * *

| SetPropertyByRowCol(row*[integer]*, col*[integer]*, value*[integer/real for numeric properties, string for character properties]*)

Description<br>Sets the value of the property for row and col for this [Airbag](primer-airbag-class.md) object. **Note that columns start at 0. Rows start at 1 if the \_ID option is set, at 0 otherwise**. |
| --- |

#### Arguments

* row (integer)
 
The row of the property value to set

* col (integer)
 
The column of the property value to set

* value (integer/real for numeric properties, string for character properties)
 
The value of the property to set.

| Returns
<br>No return value |
| --- |

| Example
<br>To set the value of the property at row 0, column 3 for airbag a to be 0.5:<br>
```
a.SetPropertyByRowCol(0, 3, 0.5);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the airbag. The airbag will be sketched until you either call [Airbag.Unsketch()](primer-airbag-class.md#Airbag::Unsketch), [Airbag.UnsketchAll()](primer-airbag-class.md#Airbag::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the airbag is sketched. If omitted redraw is true. If you want to sketch several airbags and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch airbag a:<br>
```
a.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged airbags in the model. The airbags will be sketched until you either call [Airbag.Unsketch()](primer-airbag-class.md#Airbag::Unsketch), [Airbag.UnsketchFlagged()](primer-airbag-class.md#Airbag::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged airbags will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the airbags that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the airbags are sketched. If omitted redraw is true. If you want to sketch flagged airbags several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all airbags flagged with flag in model m:<br>
```
Airbag.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of airbags in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing airbags should be counted. If false or omitted
referenced but undefined airbags will also be included in the total.

| Returns
<br>number of airbags<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of airbags in model m:<br>
```
var total = Airbag.Total(m);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the airbags in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all airbags will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the airbags

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the airbags in model m:<br>
```
Airbag.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the airbag. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the airbag is unsketched. If omitted redraw is true. If you want to unsketch several airbags and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch airbag a:<br>
```
a.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all airbags. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all airbags will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the airbags are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all airbags in model m:<br>
```
Airbag.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged airbags in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all airbags will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the airbags that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the airbags are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all airbags flagged with flag in model m:<br>
```
Airbag.UnsketchAll(m, flag);
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
<br>[Airbag](primer-airbag-class.md) object.<br>
Return type
<br>Airbag |
| --- |

| Example
<br>To check if Airbag property a.example is a parameter by using the [Airbag.GetParameter()](primer-airbag-class.md#Airbag::GetParameter) method:<br>
```
if (a.ViewParameters().GetParameter(a.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for airbag. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for airbag a:<br>
```
a.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this airbag. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for airbag a:<br>
```
var xrefs = a.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the airbag data in keyword format. Note that this contains the keyword header and the keyword cards. See also [Airbag.Keyword()](primer-airbag-class.md#Airbag::Keyword) and [Airbag.KeywordCards()](primer-airbag-class.md#Airbag::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for airbag a in keyword format<br>
```
var s = a.toString();
```
 |
| --- |

* * *