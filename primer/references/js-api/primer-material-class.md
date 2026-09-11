# Material class

The Material class gives you access to material cards in PRIMER. [More...](primer-material-class.md#Material_details)

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

* [BlankAll](primer-material-class.md#Material::BlankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [BlankFlagged](primer-material-class.md#Material::BlankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Create](primer-material-class.md#Material::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [First](primer-material-class.md#Material::First)(Model*[[Model](primer-model-class.md)]*)
* [FirstFreeLabel](primer-material-class.md#Material::FirstFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [FlagAll](primer-material-class.md#Material::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-material-class.md#Material::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-material-class.md#Material::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-material-class.md#Material::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-material-class.md#Material::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-material-class.md#Material::Last)(Model*[[Model](primer-model-class.md)]*)
* [LastFreeLabel](primer-material-class.md#Material::LastFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [NextFreeLabel](primer-material-class.md#Material::NextFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [Pick](primer-material-class.md#Material::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [RenumberAll](primer-material-class.md#Material::RenumberAll)(Model*[[Model](primer-model-class.md)]*, start*[integer]*)
* [RenumberFlagged](primer-material-class.md#Material::RenumberFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*)
* [Select](primer-material-class.md#Material::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-material-class.md#Material::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-material-class.md#Material::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnblankAll](primer-material-class.md#Material::UnblankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnblankFlagged](primer-material-class.md#Material::UnblankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [UnflagAll](primer-material-class.md#Material::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-material-class.md#Material::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-material-class.md#Material::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AddOptionalCards](primer-material-class.md#Material::AddOptionalCards)()
* [AssociateComment](primer-material-class.md#Material::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Blank](primer-material-class.md#Material::Blank)()
* [Blanked](primer-material-class.md#Material::Blanked)()
* [Browse](primer-material-class.md#Material::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-material-class.md#Material::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-material-class.md#Material::Copy)(range (optional)*[boolean]*)
* [Density](primer-material-class.md#Material::Density)()
* [DetachComment](primer-material-class.md#Material::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-material-class.md#Material::Edit)(modal (optional)*[boolean]*)
* [Error](primer-material-class.md#Material::Error)(message*[string]*, details (optional)*[string]*)
* [ExtractColour](primer-material-class.md#Material::ExtractColour)()
* [Flagged](primer-material-class.md#Material::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetAddDamageGissmoData](primer-material-class.md#Material::GetAddDamageGissmoData)()
* [GetAddErosionData](primer-material-class.md#Material::GetAddErosionData)()
* [GetComments](primer-material-class.md#Material::GetComments)()
* [GetErosionPropertyByName](primer-material-class.md#Material::GetErosionPropertyByName_deprecated)(acronym*[string]*, idam\_index (optional)*[integer]*) [deprecated]
* [GetMaterialErosionExists](primer-material-class.md#Material::GetMaterialErosionExists_deprecated)() [deprecated]
* [GetParameter](primer-material-class.md#Material::GetParameter)(prop*[string]*)
* [GetPropertyByIndex](primer-material-class.md#Material::GetPropertyByIndex)(index*[integer]*)
* [GetPropertyByName](primer-material-class.md#Material::GetPropertyByName)(acronym*[string]*)
* [GetPropertyByRowCol](primer-material-class.md#Material::GetPropertyByRowCol)(row*[integer]*, col*[integer]*)
* [GetPropertyNameForIndex](primer-material-class.md#Material::GetPropertyNameForIndex)(index*[integer]*)
* [GetPropertyNameForRowCol](primer-material-class.md#Material::GetPropertyNameForRowCol)(row*[integer]*, col*[integer]*)
* [Keyword](primer-material-class.md#Material::Keyword)(index (optional)*[integer]*)
* [KeywordCards](primer-material-class.md#Material::KeywordCards)(index (optional)*[integer]*)
* [Next](primer-material-class.md#Material::Next)()
* [PoissonsRatio](primer-material-class.md#Material::PoissonsRatio)()
* [Previous](primer-material-class.md#Material::Previous)()
* [RemoveMaterialErosion](primer-material-class.md#Material::RemoveMaterialErosion_deprecated)() [deprecated]
* [SetAddDamageGissmoData](primer-material-class.md#Material::SetAddDamageGissmoData)(data*[object]*)
* [SetAddErosionData](primer-material-class.md#Material::SetAddErosionData)(data*[object]*)
* [SetErosionPropertyByName](primer-material-class.md#Material::SetErosionPropertyByName_deprecated)(acronym*[string]*, value*[integer/real for numeric properties, string for character properties]*, idam\_index (optional)*[integer]*) [deprecated]
* [SetFlag](primer-material-class.md#Material::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [SetMaterialErosion](primer-material-class.md#Material::SetMaterialErosion_deprecated)() [deprecated]
* [SetPropertyByIndex](primer-material-class.md#Material::SetPropertyByIndex)(index*[integer]*, value*[integer/real for numeric properties, string for character properties]*)
* [SetPropertyByName](primer-material-class.md#Material::SetPropertyByName)(acronym*[string]*, value*[integer/real for numeric properties, string for character properties]*)
* [SetPropertyByRowCol](primer-material-class.md#Material::SetPropertyByRowCol)(row*[integer]*, col*[integer]*, value*[integer/real for numeric properties, string for character properties]*)
* [Sketch](primer-material-class.md#Material::Sketch)(redraw (optional)*[boolean]*)
* [Unblank](primer-material-class.md#Material::Unblank)()
* [Unsketch](primer-material-class.md#Material::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-material-class.md#Material::ViewParameters)()
* [Warning](primer-material-class.md#Material::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-material-class.md#Material::Xrefs)()
* [YieldStress](primer-material-class.md#Material::YieldStress)()
* [YoungsModulus](primer-material-class.md#Material::YoungsModulus)()
* [toString](primer-material-class.md#Material::toString)()

## Material properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| addDamageGissmo | logical | True if \*MAT\_ADD\_DAMAGE\_GISSMO exists for material, false if not defined |
| addErosion | logical | True if \*MAT\_ADD\_EROSION exists for material, false if not defined |
| addKeywords (read only) | integer | The number of **extra** \*MAT\_ADD\_xxxx keywords that this material definition has. Note that if there is only a single \*MAT\_ADD\_xxxx keyword for an ID this will be 0. For example, if for material 1 both a \*MAT\_PIECEWISE\_LINEAR\_PLASTICITY card and a \*MAT\_ADD\_EROSION card exist then this will return 1. If for material 2 only a \*MAT\_ADD\_EROSION card exists then this will return 0. Also see [Material.Keyword()](primer-material-class.md#Material::Keyword) and [Material.KeywordCards()](primer-material-class.md#Material::KeywordCards) |
| colour | [Colour](primer-colour-class.md) | The colour of the material |
| cols (read only) | real | The number of columns of data the material has |
| exists (read only) | logical | true if material exists, false if referred to but not defined. |
| include | integer | The [Include](primer-include-class.md) file number that the material is in. |
| label | integer or string | [Material](primer-material-class.md) number or character label. Also see the [mid](primer-material-class.md#mid) property which is an alternative name for this. |
| mid | integer or string | [Material](primer-material-class.md) number or character label. Also see the [label](primer-material-class.md#label) property which is an alternative name for this. |
| model (read only) | integer | The [Model](primer-model-class.md) number that the material is in. |
| optionalCards (read only) | integer | The number of optional extra cards that this material definition can have. Also see [Material.AddOptionalCards()](primer-material-class.md#Material::AddOptionalCards) |
| properties | integer | The total number of properties that the material has |
| rows (read only) | integer | The number of rows of data the material has |
| title | string | [Material](primer-material-class.md) title |
| transparency | integer | The transparency of the material (0-100) 0% is opaque, 100% is transparent. |
| type | string | The material type name(e.g. 'ELASTIC', 'RIGID' etc). |
| typeNumber | string | The material type number (e.g. '001', '034M'). |

| Detailed Description<br>The Material class allows you to create, modify, edit and manipulate material cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new Material(Model*[[Model](primer-model-class.md)]*, mid*[integer or string]*, type*[string]*)

Description<br>Create a new [Material](primer-material-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that material will be created in

* mid (integer or string)
 
[Material](primer-material-class.md) number or character label

* type (string)
 
[Material](primer-material-class.md) type. Either give the Ansys LS-DYNA material name or 3 digit number.

| Returns
<br>[Material](primer-material-class.md) object<br>
Return type
<br>Material |
| --- |

| Example
<br>To create a new rigid material in model m with label 100<br>
```
var mat = new Material(m, 100, "RIGID");
```
<br>or<br>
```
var mat = new Material(m, 100, "020");
```
<br>or<br>
```
var mat = new Material(m, 100, "*MAT_RIGID");
```
<br>or<br>
```
var mat = new Material(m, 100, "*MAT_020");
```
 |
| --- |

| Details of functions 
AddOptionalCards()

Description<br>Adds any optional cards for the material.<br><br>Some materials have extra optional cards in the input.<br>If they are there Ansys LS-DYNA will read them but they are not required input. For example a material could have<br>three required cards and one extra optional card. If PRIMER reads this material from a keyword file and it only has<br>the three required cards then the properties in the material will only be defined for those cards. i.e. there<br>will not be any properties in the material for the extra optional line.<br><br>If you edit the material interactively in PRIMER then the extra optional card will be shown so you can add<br>values if required. When writing the material to a keyword file the extra optional card will be omitted if<br>none of the fields are used.<br><br>If you want to add one of the properties for the extra optional card in JavaScript this method will<br>ensure that the extra card is defined and the properties added to the material as zero values. You can then use<br>[Material.SetPropertyByIndex()](primer-material-class.md#Material::SetPropertyByIndex), [Material.SetPropertyByName()](primer-material-class.md#Material::SetPropertyByName) or<br>[Material.SetPropertyByRowCol()](primer-material-class.md#Material::SetPropertyByRowCol) as normal to set the properties.<br>Also see the [optionalCards](primer-material-class.md#optionalCards) property. |
| --- |

#### Arguments

No arguments

| Returns
<br>no return value |
| --- |

| Example
<br>To add any optional cards for material m:<br>
```
m.AddOptionalCards();
```
 |
| --- |

* * *

| AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a material. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the material

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the material m:<br>
```
m.AssociateComment(c);
```
 |
| --- |

* * *

| Blank()

Description<br>Blanks the material |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To blank material m:<br>
```
m.Blank();
```
 |
| --- |

* * *

| BlankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the materials in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all materials will be blanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the materials in model m:<br>
```
Material.BlankAll(m);
```
 |
| --- |

* * *

| BlankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the flagged materials in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged materials will be blanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the materials that you want to blank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the materials in model m flagged with f:<br>
```
Material.BlankFlagged(m, f);
```
 |
| --- |

* * *

| Blanked()

Description<br>Checks if the material is blanked or not. |
| --- |

#### Arguments

No arguments

| Returns
<br>true if blanked, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if material m is blanked:<br>
```
if (m.Blanked() ) do_something...
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
<br>To Browse material m:<br>
```
m.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the material. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the material

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for material m:<br>
```
m.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the material. The target include of the copied material can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>Material object<br>
Return type
<br>Material |
| --- |

| Example
<br>To copy material m into material z:<br>
```
var z = m.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a material |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the material will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>Material object (or null if not made).<br>
Return type
<br>Material |
| --- |

| Example
<br>To start creating a material in model m:<br>
```
var m = Material.Create(m);
```
 |
| --- |

* * *

| Density()

Description<br>Get the density material. |
| --- |

#### Arguments

No arguments

| Returns
<br>real<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the density for material m:<br>
```
var density = m.Density();
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a material. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the material

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the material m:<br>
```
m.DetachComment(c);
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
<br>To Edit material m:<br>
```
m.Edit();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for material. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for material m:<br>
```
m.Error("My custom error");
```
 |
| --- |

* * *

| ExtractColour()

Description<br>Extracts the **actual** colour used for material.<br> By default in PRIMER many entities such as elements get their colour automatically from the part that they are in. PRIMER cycles through 13 default colours based on the label of the entity. In this case the material [colour](primer-material-class.md#colour) property will return the value [Colour.PART](primer-colour-class.md#Colour.PART) instead of the actual colour. This method will return the actual colour which is used for drawing the material. |
| --- |

#### Arguments

No arguments

| Returns
<br>colour value (integer)<br>
Return type
<br>Number |
| --- |

| Example
<br>To return the colour used for drawing material m:<br>
```
var colour = m.ExtractColour();
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first material in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first material in

| Returns
<br>Material object (or null if there are no materials in the model).<br>
Return type
<br>Material |
| --- |

| Example
<br>To get the first material in model m:<br>
```
var m = Material.First(m);
```
 |
| --- |

* * *

| FirstFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the first free material label in the model. Also see [Material.LastFreeLabel()](primer-material-class.md#Material::LastFreeLabel), [Material.NextFreeLabel()](primer-material-class.md#Material::NextFreeLabel) and [Model.FirstFreeItemLabel()](primer-model-class.md#Model::FirstFreeItemLabel). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first free material label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *First free in layer* in editing panels). If omitted the whole model will be used (Equivalent to *First free* in editing panels).

| Returns
<br>Material label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the first free material label in model m:<br>
```
var label = Material.FirstFreeLabel(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the materials in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all materials will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the materials

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the materials with flag f in model m:<br>
```
Material.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the material is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the material

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if material m has flag f set on it:<br>
```
if (m.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each material in the model.<br> **Note that ForEach has been designed to make looping over materials as fast as possible and so has some limitations. Firstly, a single temporary Material object is created and on each function call it is updated with the current material data. This means that you should not try to store the Material object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new materials inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all materials are in

* func (function)
 
Function to call for each material

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the materials in model m:<br>
```
Material.ForEach(m, test);
function test(m)
{
// m is Material object
}
```
<br><br>To call function test for all of the materials in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
Material.ForEach(m, test, data);
function test(m, extra)
{
// m is Material object
// extra is data
}
```
 |
| --- |

* * *

| GetAddDamageGissmoData()

Description<br>Returns the \*MAT\_ADD\_DAMAGE\_GISSMO data of material. |
| --- |

#### Arguments

No arguments

| Returns |
| --- |

Object with the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| biaxf | real | Reduction factor for regularization at triaxiality=2/3 |
| dcrit | real | Damage treshold value |
| dmgexp | real | Exponent for nonlinear damage accumalation |
| dtyp | real | Flag for GISSMO damage type |
| ecrit | real/integer | Critical plastic strain (Curve/ table ID if negative) |
| fadexp | real/integer | Exponent for damage-related stress fadeout (Curve/ table ID if negative) |
| hisvn | real | History variable used to evaluate th 3-D table LCSDG |
| instf | integer | Flag for governing the behavior of instability measure F and fading exponent FADEXP |
| lcdlim | integer | Curve ID: damage limit values as a function of triaxiality |
| lcregd | integer | Curve/ table ID (positive) or Table ID (negative): Element-size dependent fading exponent |
| lcsdg | integer | Curve/ table ID (positive) or Function ID (negative): Failure strain curve/table or function |
| lcsoft | integer | Soft reduction factor for failure strain in crashfront elements. |
| lcsrs | integer | Curve/ table ID: Failure strain rate scaling factor v/s strain rate |
| lp2bi | real | Option to use bending indicator instead of the Lode parameter |
| midfail | integer | Mid-plane failure option for shell elements and GISSMO |
| numfip | real | Number of failed integration points prior to element deletion |
| refsz | real | Reference element size |
| rgtr1 | real | First triaxiality value for optional "tub-shaped" regularization |
| rgtr2 | real | Second triaxiality value for optional "tub-shaped" regularization |
| shrf | real | Reduction factor for regularization at triaxiality=0 |
| soft | real | Softening reduction factor for failure strain in crashfront elements |
| stochastic | logical | stochastic = true if \_STOCHASTIC is ON. Otherwise, \_STOCHASTIC is OFF |
| volfrac | real | Volume fraction required to fail before element deletion |

#### Return type

object

| Example
<br>To get the \*MAT\_ADD\_DAMAGE\_GISSMO data of material m:<br>
```
m.GetAddDamageGissmoData();
```
 |
| --- |

* * *

| GetAddErosionData()

Description<br>Returns the \*MAT\_ADD\_EROSION data of material. Note that this method does not support pre-R11 properties. |
| --- |

#### Arguments

No arguments

| Returns |
| --- |

Object with the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| dteflt | real | Time period for the low pass filter |
| dtmin | real | Minimum time step size at failure |
| effeps | real | Maximum effective strain at failure |
| engcrt | real | Critical energy for nonlocal failure criterion |
| epssh | real | Shear strain at failure |
| epsthin | real | Thinning strain at failure for shells |
| excl | real | The exclusion number |
| failtm | real | Failure time |
| idam | integer | Flag for damage model |
| impulse | real | Stress impulse for failure |
| lceps12 | integer | Load curve ID defining in-plane shear strain limit vs elem size |
| lceps13 | integer | Load curve ID defining through-thickness shear strain limit vs elem size |
| lcepsmx | integer | Load curve ID defining in-plane major strain limit vs elem size |
| lcfld | integer | Curve (negative) or table (positive) ID: Forming limit diagram |
| lcregd | integer | Curve ID: Element-size dependent fading exponent |
| mneps | real | Minimum principal strain at failure |
| mnpres | real | Pressure at failure |
| mxeps | real/integer | Principal strain at failure (curve ID if negative) |
| mxpres | real | Maximum pressure at failure |
| mxtmp | real | Maximum temperature at failure |
| ncs | real | Number of failure conditions to satisfy before failure occurs |
| nsff | real | Number of explicit time step cycles for stress fade-out used in the LCFLD criterion |
| numfip | real | Number of failed integration points prior to element deletion |
| radcrt | real | Critical radius for nonlocal failure criterion |
| sigp1 | real | Principal stress at failure |
| sigth | real | Threshold stress |
| sigvm | real/integer | Equivalent stress at failure (curve ID if negative) |
| voleps | real | Volumetric strain at failure |
| volfrac | real | The volume fraction required to fail before the element is deleted |

#### Return type

object

| Example
<br>To get the \*MAT\_ADD\_EROSION data of material m:<br>
```
m.GetAddErosionData();
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Material objects or properties for all of the materials in a model in PRIMER. If the optional property argument is not given then an array of Material objects is returned. If the property argument is given, that property value for each material is returned in the array instead of a Material object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get materials from

* property (optional) (string)
 
Name for property to get for all materials in the model

| Returns
<br>Array of Material objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Material objects for all of the materials in model m:<br>
```
var a = Material.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each material in model m:<br>
```
var a = Material.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a material. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the material m:<br>
```
var comm_array = m.GetComments();
```
 |
| --- |

* * *

| GetErosionPropertyByName(acronym*[string]*, idam\_index (optional)*[integer]*) [deprecated]
<br>This function is deprecated in version 20.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>
Description<br>Returns the value of Erosion property string *acronym* for this [Material](primer-material-class.md) object or null if Erosion is not set on Material or no such Erosion property exists. |
| --- |

#### Arguments

* acronym (string)
 
The acronym of the Erosion property value to retrieve

* idam\_index (optional) (integer)
 
Required if property is one of IDAM cards pair property (for IDAM value less than zero) . If the argument is not given, returns the property value for first IDAM cards Pair. The index value starts from zero.

| Returns
<br>Property value (real/integer)<br>
Return type
<br>Number |
| --- |

| Example
<br>To return the value of IDAM for material m:<br>
```
var idam = m.GetErosionPropertyByName("IDAM");

```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Material objects for all of the flagged materials in a model in PRIMER If the optional property argument is not given then an array of Material objects is returned. If the property argument is given, then that property value for each material is returned in the array instead of a Material object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get materials from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the materials that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged materials in the model

| Returns
<br>Array of Material objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Material objects for all of the materials in model m flagged with f:<br>
```
var m = Material.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the materials in model m flagged with f:<br>
```
var a = Material.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the Material object for a material ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the material in

* number (integer)
 
number of the material you want the Material object for

| Returns
<br>Material object (or null if material does not exist).<br>
Return type
<br>Material |
| --- |

| Example
<br>To get the Material object for material 100 in model m<br>
```
var m = Material.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetMaterialErosionExists() [deprecated]
<br>This function is deprecated in version 20.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>
Description<br>Checks if the Erosion properties are defined for this [Material](primer-material-class.md) object. |
| --- |

#### Arguments

No arguments

| Returns
<br>logical<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To get whether the Material has Erosion Properties:<br>
```
m.GetMaterialErosionExists();

```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a Material property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [Material.ViewParameters()](primer-material-class.md#Material::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
material property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if Material property m.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (m.GetParameter(m.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if Material property m.example is a parameter by using the GetParameter method:<br>
```
if (m.ViewParameters().GetParameter(m.example) ) do_something...
```
 |
| --- |

* * *

| GetPropertyByIndex(index*[integer]*)

Description<br>Returns the value of property at index *index* for this [Material](primer-material-class.md) object or null if no property exists. |
| --- |

#### Arguments

* index (integer)
 
The index of the property value to retrieve. (the number of properties can be found from [properties](primer-material-class.md#properties)) **Note that indices start at 0**. There is no link between indices and rows/columns so adjacent fields on a line for a material may not have adjacent indices.

| Returns
<br>Property value (real/integer)<br>
Return type
<br>Number |
| --- |

| Example
<br>To return the property at index 2, for material m:<br>
```
var prop = m.GetPropertyByIndex(2);

```
 |
| --- |

* * *

| GetPropertyByName(acronym*[string]*)

Description<br>Returns the value of property string *acronym* for this [Material](primer-material-class.md) object or null if no property exists. |
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
<br>To return the value of RO for material m:<br>
```
var ro = m.GetPropertyByName("RO");

```
 |
| --- |

* * *

| GetPropertyByRowCol(row*[integer]*, col*[integer]*)

Description<br>Returns the value of the property for row and col for this [Material](primer-material-class.md) object or null if no property exists. **Note that rows and columns start at 0**. |
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
<br>To return the value of the property at row 0, column 1 for material m:<br>
```
var prop = m.GetPropertyByRowCol(0, 1);

```
 |
| --- |

* * *

| GetPropertyNameForIndex(index*[integer]*)

Description<br>Returns the name of the property at index *index* for this [Material](primer-material-class.md) object or null if there is no property. |
| --- |

#### Arguments

* index (integer)
 
The index of the property name to retrieve. (the number of properties can be found from [properties](primer-material-class.md#properties)) **Note that indices start at 0**. There is no link between indices and rows/columns so adjacent fields on a line for a material may not have adjacent indices.

| Returns
<br>Property name (string)<br>
Return type
<br>String |
| --- |

| Example
<br>To return the name of the property at index 2, for material m:<br>
```
var name = m.GetPropertyNameForIndex(2);

```
 |
| --- |

* * *

| GetPropertyNameForRowCol(row*[integer]*, col*[integer]*)

Description<br>Returns the name of the property at row and col for this [Material](primer-material-class.md) object or null if there is no property. **Note that rows and columns start at 0**. |
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
<br>To return the name of the property at row 0, column 1 for material m:<br>
```
var name = m.GetPropertyNameForRowCol(0, 1);

```
 |
| --- |

* * *

| Keyword(index (optional)*[integer]*)

Description<br>Returns the keyword for this material (e.g. \*MAT\_RIGID, \*MAT\_ELASTIC etc). **Note that a carriage return is not added**. See also [Material.KeywordCards()](primer-material-class.md#Material::KeywordCards) |
| --- |

#### Arguments

* index (optional) (integer)
 
If this argument is not given then the material keyword is returned as normal. However if the material also has \*MAT\_ADD\_xxxx cards defined for it (e.g. \*MAT\_ADD\_EROSION) then the index can be used to return the title for the \*MAT\_ADD card instead. The index value starts from zero. The number of \*MAT\_ADD cards can be found from the [addKeywords](primer-material-class.md#addKeywords) property

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for material m:<br>
```
var key = m.Keyword();
```
<br>To print all of the keywords and keyword cards for any \*MAT\_ADD cards for material m:<br>
```
for (i=0; i<m.addKeywords; i++)
{
    Message(m.Keyword(i));
    Message(m.KeywordCards(i));
}
```
 |
| --- |

* * *

| KeywordCards(index (optional)*[integer]*)

Description<br>Returns the keyword cards for the material. **Note that a carriage return is not added**. See also [Material.Keyword()](primer-material-class.md#Material::Keyword) |
| --- |

#### Arguments

* index (optional) (integer)
 
If this argument is not given then the material keyword cards are returned as normal. However if the material also has \*MAT\_ADD\_xxxx cards defined for it (e.g. \*MAT\_ADD\_EROSION) then the index can be used to return the cards for the \*MAT\_ADD card instead. The index value starts from zero. The number of \*MAT\_ADD cards can be found from the [addKeywords](primer-material-class.md#addKeywords) property

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for material m:<br>
```
var cards = m.KeywordCards();
```
<br>To print all of the keywords and keyword cards for any \*MAT\_ADD cards for material m:<br>
```
for (i=0; i<m.addKeywords; i++)
{
    Message(m.Keyword(i));
    Message(m.KeywordCards(i));
}
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last material in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last material in

| Returns
<br>Material object (or null if there are no materials in the model).<br>
Return type
<br>Material |
| --- |

| Example
<br>To get the last material in model m:<br>
```
var m = Material.Last(m);
```
 |
| --- |

* * *

| LastFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the last free material label in the model. Also see [Material.FirstFreeLabel()](primer-material-class.md#Material::FirstFreeLabel), [Material.NextFreeLabel()](primer-material-class.md#Material::NextFreeLabel) and see [Model.LastFreeItemLabel()](primer-model-class.md#Model::LastFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last free material label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest free in layer* in editing panels). If omitted the whole model will be used.

| Returns
<br>Material label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the last free material label in model m:<br>
```
var label = Material.LastFreeLabel(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next material in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Material object (or null if there are no more materials in the model).<br>
Return type
<br>Material |
| --- |

| Example
<br>To get the material in model m after material m:<br>
```
var m = m.Next();
```
 |
| --- |

* * *

| NextFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the next free (highest+1) material label in the model. Also see [Material.FirstFreeLabel()](primer-material-class.md#Material::FirstFreeLabel), [Material.LastFreeLabel()](primer-material-class.md#Material::LastFreeLabel) and [Model.NextFreeItemLabel()](primer-model-class.md#Model::NextFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get next free material label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest+1 in layer* in editing panels). If omitted the whole model will be used (Equivalent to *Highest+1* in editing panels).

| Returns
<br>Material label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the next free material label in model m:<br>
```
var label = Material.NextFreeLabel(m);
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a material. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only materials from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only materials that are flagged with *limit* can be selected. If omitted, or null, any materials from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[Material](primer-material-class.md) object (or null if not picked)<br>
Return type
<br>Material |
| --- |

| Example
<br>To pick a material from model m giving the prompt 'Pick material from screen':<br>
```
var m = Material.Pick('Pick material from screen', m);
```
 |
| --- |

* * *

| PoissonsRatio()

Description<br>Get Poissons ratio for the material. |
| --- |

#### Arguments

No arguments

| Returns
<br>real<br>
Return type
<br>Number |
| --- |

| Example
<br>To get Poissons ratio for material m:<br>
```
var pr = m.PoissonsRatio(f);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous material in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Material object (or null if there are no more materials in the model).<br>
Return type
<br>Material |
| --- |

| Example
<br>To get the material in model m before material m:<br>
```
var m = m.Previous();
```
 |
| --- |

* * *

| RemoveMaterialErosion() [deprecated]
<br>This function is deprecated in version 20.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>
Description<br>Removes the Erosion properties for this [Material](primer-material-class.md) object. |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To remove the Erosion properties for material m:<br>
```
m.RemoveMaterialErosion();

```
 |
| --- |

* * *

| RenumberAll(Model*[[Model](primer-model-class.md)]*, start*[integer]*) [static]
Description<br>Renumbers all of the materials in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all materials will be renumbered in

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the materials in model m, from 1000000:<br>
```
Material.RenumberAll(m, 1000000);
```
 |
| --- |

* * *

| RenumberFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*) [static]
Description<br>Renumbers all of the flagged materials in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged materials will be renumbered in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the materials that you want to renumber

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the materials in model m flagged with f, from 1000000:<br>
```
Material.RenumberFlagged(m, f, 1000000);
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select materials using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting materials

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only materials from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only materials that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any materials can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of materials selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select materials from model m, flagging those selected with flag f, giving the prompt 'Select materials':<br>
```
Material.Select(f, 'Select materials', m);
```
<br><br>To select materials, flagging those selected with flag f but limiting selection to materials flagged with flag l, giving the prompt 'Select materials':<br>
```
Material.Select(f, 'Select materials', l);
```
 |
| --- |

* * *

| SetAddDamageGissmoData(data*[object]*)

Description<br>Sets the \*MAT\_ADD\_DAMAGE\_GISSMO data of material. |
| --- |

#### Arguments

* data (object)

Data returned from [Material.GetAddDamageGissmoData](primer-material-class.md#Material::GetAddDamageGissmoData) 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| biaxf | real | Reduction factor for regularization at triaxiality=2/3 |
| dcrit | real | Damage treshold value |
| dmgexp | real | Exponent for nonlinear damage accumalation |
| dtyp | real | Flag for GISSMO damage type |
| ecrit | real/integer | Critical plastic strain (Curve/ table ID if negative) |
| fadexp | real/integer | Exponent for damage-related stress fadeout (Curve/ table ID if negative) |
| hisvn | real | History variable used to evaluate th 3-D table LCSDG |
| instf | integer | Flag for governing the behavior of instability measure F and fading exponent FADEXP |
| lcdlim | integer | Curve ID: damage limit values as a function of triaxiality |
| lcregd | integer | Curve/ table ID (positive) or Table ID (negative): Element-size dependent fading exponent |
| lcsdg | integer | Curve/ table ID (positive) or Function ID (negative): Failure strain curve/table or function |
| lcsoft | integer | Soft reduction factor for failure strain in crashfront elements. |
| lcsrs | integer | Curve/ table ID: Failure strain rate scaling factor v/s strain rate |
| lp2bi | real | Option to use bending indicator instead of the Lode parameter |
| midfail | integer | Mid-plane failure option for shell elements and GISSMO |
| numfip | real | Number of failed integration points prior to element deletion |
| refsz | real | Reference element size |
| rgtr1 | real | First triaxiality value for optional "tub-shaped" regularization |
| rgtr2 | real | Second triaxiality value for optional "tub-shaped" regularization |
| shrf | real | Reduction factor for regularization at triaxiality=0 |
| soft | real | Softening reduction factor for failure strain in crashfront elements |
| stochastic | logical | stochastic = true if \_STOCHASTIC is ON. Otherwise, \_STOCHASTIC is OFF |
| volfrac | real | Volume fraction required to fail before element deletion |

| Returns
<br>No return value |
| --- |

| Example
<br>To set the value of MIDFAIL Damage Gissmo for material m to be 3:<br>
```
var data = m.GetAddDamageGissmoData();
data.midfail = 3;
m.SetAddDamageGissmoData(data);
       
```
 |
| --- |

* * *

| SetAddErosionData(data*[object]*)

Description<br>Sets the \*MAT\_ADD\_EROSION data of material. Note that this method does not support pre-R11 properties. |
| --- |

#### Arguments

* data (object)

Data returned from [Material.GetAddErosionData](primer-material-class.md#Material::GetAddErosionData). 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| dteflt | real | Time period for the low pass filter |
| dtmin | real | Minimum time step size at failure |
| effeps | real | Maximum effective strain at failure |
| engcrt | real | Critical energy for nonlocal failure criterion |
| epssh | real | Shear strain at failure |
| epsthin | real | Thinning strain at failure for shells |
| excl | real | The exclusion number |
| failtm | real | Failure time |
| idam | integer | Flag for damage model |
| impulse | real | Stress impulse for failure |
| lceps12 | integer | Load curve ID defining in-plane shear strain limit vs elem size |
| lceps13 | integer | Load curve ID defining through-thickness shear strain limit vs elem size |
| lcepsmx | integer | Load curve ID defining in-plane major strain limit vs elem size |
| lcfld | integer | Curve (negative) or table (positive) ID: Forming limit diagram |
| lcregd | integer | Curve ID: Element-size dependent fading exponent |
| mneps | real | Minimum principal strain at failure |
| mnpres | real | Pressure at failure |
| mxeps | real/integer | Principal strain at failure (curve ID if negative) |
| mxpres | real | Maximum pressure at failure |
| mxtmp | real | Maximum temperature at failure |
| ncs | real | Number of failure conditions to satisfy before failure occurs |
| nsff | real | Number of explicit time step cycles for stress fade-out used in the LCFLD criterion |
| numfip | real | Number of failed integration points prior to element deletion |
| radcrt | real | Critical radius for nonlocal failure criterion |
| sigp1 | real | Principal stress at failure |
| sigth | real | Threshold stress |
| sigvm | real/integer | Equivalent stress at failure (curve ID if negative) |
| voleps | real | Volumetric strain at failure |
| volfrac | real | The volume fraction required to fail before the element is deleted |

| Returns
<br>No return value |
| --- |

| Example
<br>To set the value of EXCL Erosion for material m to be 1.25:<br>
```
var data = m.GetAddErosionData();
data.excl = 1.25;
m.SetAddErosionData(data);
      
```
 |
| --- |

* * *

| SetErosionPropertyByName(acronym*[string]*, value*[integer/real for numeric properties, string for character properties]*, idam\_index (optional)*[integer]*) [deprecated]
<br>This function is deprecated in version 20.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>
Description<br>Sets the value of Erosion property string *acronym* for this [Material](primer-material-class.md) object |
| --- |

#### Arguments

* acronym (string)
 
The acronym of the property value to set

* value (integer/real for numeric properties, string for character properties)
 
The value of the property to set.

* idam\_index (optional) (integer)
 
Required if property is one of IDAM cards pair property (for IDAM value less than zero) . If the argument is not given, set the property values for first IDAM cards Pair. The index value starts from zero.

| Returns
<br>No return value |
| --- |

| Example
<br>To set the value of IDAM Erosion for material m to be 8:<br>
```
m.SetErosionPropertyByName("idam", 8);

```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the material. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the material

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for material m:<br>
```
m.SetFlag(f);
```
 |
| --- |

* * *

| SetMaterialErosion() [deprecated]
<br>This function is deprecated in version 20.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>
Description<br>Initializes the Erosion properties for this [Material](primer-material-class.md) object. |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To set the Erosion Property for material m:<br>
```
m.SetMaterialErosion();

```
 |
| --- |

* * *

| SetPropertyByIndex(index*[integer]*, value*[integer/real for numeric properties, string for character properties]*)

Description<br>Sets the value of property at index *index* for this [Material](primer-material-class.md) object |
| --- |

#### Arguments

* index (integer)
 
The index of the property value to set. (the number of properties can be found from [properties](primer-material-class.md#properties)) **Note that indices start at 0**. There is no link between indices and rows/columns so adjacent fields on a line for a material may not have adjacent indices.

* value (integer/real for numeric properties, string for character properties)
 
The value of the property to set.

| Returns
<br>No return value |
| --- |

| Example
<br>To set the property at index 2, for material m to be 1.234:<br>
```
m.SetPropertyByIndex(2, 1.234);

```
 |
| --- |

* * *

| SetPropertyByName(acronym*[string]*, value*[integer/real for numeric properties, string for character properties]*)

Description<br>Sets the value of property string *acronym* for this [Material](primer-material-class.md) object |
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
<br>To set the value of RO for material m to be 7.89e-9:<br>
```
m.SetPropertyByName("RO", 7.89e-9);

```
 |
| --- |

* * *

| SetPropertyByRowCol(row*[integer]*, col*[integer]*, value*[integer/real for numeric properties, string for character properties]*)

Description<br>Sets the value of the property for row and col for this [Material](primer-material-class.md) object.**Note that rows and columns start at 0**. |
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
<br>To set the value of the property at row 0, column 1 for material m to be 7.89e-9:<br>
```
m.SetPropertyByRowCol(0, 1, 7.89e-9);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the material. The material will be sketched until you either call [Material.Unsketch()](primer-material-class.md#Material::Unsketch), [Material.UnsketchAll()](primer-material-class.md#Material::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the material is sketched. If omitted redraw is true. If you want to sketch several materials and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch material m:<br>
```
m.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged materials in the model. The materials will be sketched until you either call [Material.Unsketch()](primer-material-class.md#Material::Unsketch), [Material.UnsketchFlagged()](primer-material-class.md#Material::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged materials will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the materials that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the materials are sketched. If omitted redraw is true. If you want to sketch flagged materials several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all materials flagged with flag in model m:<br>
```
Material.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of materials in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing materials should be counted. If false or omitted
referenced but undefined materials will also be included in the total.

| Returns
<br>number of materials<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of materials in model m:<br>
```
var total = Material.Total(m);
```
 |
| --- |

* * *

| Unblank()

Description<br>Unblanks the material |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank material m:<br>
```
m.Unblank();
```
 |
| --- |

* * *

| UnblankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the materials in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all materials will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the materials in model m:<br>
```
Material.UnblankAll(m);
```
 |
| --- |

* * *

| UnblankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the flagged materials in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the flagged materials will be unblanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the materials that you want to unblank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the materials in model m flagged with f:<br>
```
Material.UnblankFlagged(m, f);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the materials in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all materials will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the materials

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the materials in model m:<br>
```
Material.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the material. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the material is unsketched. If omitted redraw is true. If you want to unsketch several materials and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch material m:<br>
```
m.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all materials. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all materials will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the materials are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all materials in model m:<br>
```
Material.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged materials in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all materials will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the materials that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the materials are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all materials flagged with flag in model m:<br>
```
Material.UnsketchAll(m, flag);
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
<br>[Material](primer-material-class.md) object.<br>
Return type
<br>Material |
| --- |

| Example
<br>To check if Material property m.example is a parameter by using the [Material.GetParameter()](primer-material-class.md#Material::GetParameter) method:<br>
```
if (m.ViewParameters().GetParameter(m.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for material. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for material m:<br>
```
m.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this material. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for material m:<br>
```
var xrefs = m.Xrefs();
```
 |
| --- |

* * *

| YieldStress()

Description<br>Get Yield stress for the material. |
| --- |

#### Arguments

No arguments

| Returns
<br>real<br>
Return type
<br>Number |
| --- |

| Example
<br>To get Yield stress for material m:<br>
```
var yield = m.YieldStress();
```
 |
| --- |

* * *

| YoungsModulus()

Description<br>Get Youngs modulus for the material. |
| --- |

#### Arguments

No arguments

| Returns
<br>real<br>
Return type
<br>Number |
| --- |

| Example
<br>To get Youngs modulus for material m:<br>
```
var e = m.YoungsModulus();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the material data in keyword format. Note that this contains the keyword header and the keyword cards. See also [Material.Keyword()](primer-material-class.md#Material::Keyword) and [Material.KeywordCards()](primer-material-class.md#Material::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for material m in keyword format<br>
```
var s = m.toString();
```
 |
| --- |

* * *