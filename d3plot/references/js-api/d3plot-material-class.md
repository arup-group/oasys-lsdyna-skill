# Material class

The Material class gives you access to materials in D3PLOT. [More...](d3plot-material-class.md#Material_details)

The D3PLOT JavaScript API provides many class constants, properties and methods. For Arup to
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

* [First](d3plot-material-class.md#Material::First)(model*[[Model](d3plot-model-class.md)]*)
* [FlagAll](d3plot-material-class.md#Material::FlagAll)(model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*)
* [GetAll](d3plot-material-class.md#Material::GetAll)(model*[[Model](d3plot-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](d3plot-material-class.md#Material::GetFlagged)(model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*, property (optional)*[string]*)
* [GetFromID](d3plot-material-class.md#Material::GetFromID)(model*[[Model](d3plot-model-class.md)]*, label*[integer]*)
* [GetFromIndex](d3plot-material-class.md#Material::GetFromIndex)(model*[[Model](d3plot-model-class.md)]*, index*[integer]*)
* [Last](d3plot-material-class.md#Material::Last)(model*[[Model](d3plot-model-class.md)]*)
* [Total](d3plot-material-class.md#Material::Total)(model*[[Model](d3plot-model-class.md)]*)
* [UnflagAll](d3plot-material-class.md#Material::UnflagAll)(model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*)

## Member functions

* [ClearFlag](d3plot-material-class.md#Material::ClearFlag)(flag*[Flag]*)
* [Flagged](d3plot-material-class.md#Material::Flagged)(flag*[Flag]*)
* [Next](d3plot-material-class.md#Material::Next)()
* [Previous](d3plot-material-class.md#Material::Previous)()
* [SetFlag](d3plot-material-class.md#Material::SetFlag)(flag*[Flag]*)

## Material properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| include (read only) | integer | The include file number in the model that the material is in |
| index (read only) | integer | The internal index for the material in D3PLOT (starting at 0) |
| label (read only) | integer | The Ansys LS-DYNA label for the material |
| model (read only) | Model | The [Model](d3plot-model-class.md) that the material is in |
| name (read only) | string | The name for the material type (e.g. \*MAT\_RIGID) |
| title (read only) | string | The title for the material (or null if no title) |
| type (read only) | constant | The type for the material (will be [Type.MATERIAL](d3plot-type-class.md#Type.MATERIAL)) |

| Detailed Description<br>The Material class allows you to inspect materials in a model. This information will only be available if a ztf file has been read for a model.<br>See the documentation below for more details. |
| --- |

| Details of functions 
ClearFlag(flag*[Flag]*)

Description<br>Clears a flag on a material |
| --- |

#### Arguments

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) to clear on the material

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f on material m:<br>
```
m.ClearFlag();
```
 |
| --- |

* * *

| First(model*[[Model](d3plot-model-class.md)]*) [static]
Description<br>Returns the first material in the model (or null if there are no materials in the model) |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) to get first material in

| Returns
<br>Material object<br>
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

| FlagAll(model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*) [static]
Description<br>Flags all of the materials in the model with a defined flag |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) that all the materials will be flagged in

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) to set on the materials

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

| Flagged(flag*[Flag]*)

Description<br>Checks if the material is flagged or not |
| --- |

#### Arguments

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) to test on the material

| Returns
<br>true if flagged, false if not<br>
Return type
<br>boolean |
| --- |

| Example
<br>To check if material m has flag f set on it:<br>
```
if (m.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| GetAll(model*[[Model](d3plot-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Material objects or properties for all of the materials in the model. If the optional property argument is not given then an array of Material objects is returned. If the property argument is given, that property value for each material is returned in the array instead of a Material object |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) that all the materials are in

* property (optional) (string)
 
Name for property to get for all materials in the model

| Returns
<br>Array of [Material](d3plot-material-class.md) objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To get all of the materials in model m:<br>
```
var m = Material.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'label' for a material) for each material in model m:<br>
```
var a = Material.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetFlagged(model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*, property (optional)*[string]*) [static]
Description<br>Gets all of the materials in the model flagged with a defined flag. If the optional property argument is not given then an array of Material objects is returned. If the property argument is given, that property value for each material is returned in the array instead of a Material object |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) that the flagged materials are in

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) set on the materials to get

* property (optional) (string)
 
Name for property to get for all flagged materials in the model

| Returns
<br>Array of [Material](d3plot-material-class.md) objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To get all of the materials flagged with flag f in model m:<br>
```
Material.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'label' for a node) for all materials flagged with flag f in model m:<br>
```
var a = Material.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(model*[[Model](d3plot-model-class.md)]*, label*[integer]*) [static]
Description<br>Returns the Material object for material in model with label (or null if it does not exist) |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) to get material in

* label (integer)
 
The Ansys LS-DYNA label for the material in the model

| Returns
<br>Material object<br>
Return type
<br>Material |
| --- |

| Example
<br>To get the material in model m with label 1000:<br>
```
var m = Material.GetFromID(m, 1000);
```
 |
| --- |

* * *

| GetFromIndex(model*[[Model](d3plot-model-class.md)]*, index*[integer]*) [static]
Description<br>Returns the Material object for material in model with index (or null if it does not exist) |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) to get material in

* index (integer)
 
The D3PLOT internal index in the model for material, starting at 0.

| Returns
<br>Material object<br>
Return type
<br>Material |
| --- |

| Example
<br>To get the 51st material in model m:<br>
```
var m = Material.GetFromIndex(m, 50);
```
 |
| --- |

* * *

| Last(model*[[Model](d3plot-model-class.md)]*) [static]
Description<br>Returns the last material in the model (or null if there are no materials in the model) |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) to get last material in

| Returns
<br>Material object<br>
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

| Next()

Description<br>Returns the next material in the model (or null if there is not one) |
| --- |

#### Arguments

No arguments

| Returns
<br>Material object<br>
Return type
<br>Material |
| --- |

| Example
<br>To get the next material after material m:<br>
```
m = m.Next();
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous material in the model (or null if there is not one) |
| --- |

#### Arguments

No arguments

| Returns
<br>Material object<br>
Return type
<br>Material |
| --- |

| Example
<br>To get the previous material before material m:<br>
```
m = m.Previous();
```
 |
| --- |

* * *

| SetFlag(flag*[Flag]*)

Description<br>Sets a flag on a material |
| --- |

#### Arguments

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) to set on the material

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f on material m:<br>
```
m.SetFlag(f);
```
 |
| --- |

* * *

| Total(model*[[Model](d3plot-model-class.md)]*) [static]
Description<br>Returns the total number of materials in the model |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) to get total in

| Returns
<br>The number of materials<br>
Return type
<br>integer |
| --- |

| Example
<br>To get the number of materials in model m:<br>
```
var total = Material.Total(m);
```
 |
| --- |

* * *

| UnflagAll(model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*) [static]
Description<br>Unsets a defined flag on all of the materials in the model |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) that the defined flag for all materials will be unset in

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) to unset on the materials

| Returns
<br>No return value |
| --- |

| Example
<br>To unset flag f on all of the materials in model m:<br>
```
Material.UnflagAll(m, f);
```
 |
| --- |

* * *