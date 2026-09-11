# SetSolid class

The SetSolid class gives you access to solid sets in D3PLOT. [More...](d3plot-setsolid-class.md#SetSolid_details)

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

* [First](d3plot-setsolid-class.md#SetSolid::First)(model*[[Model](d3plot-model-class.md)]*)
* [FlagAll](d3plot-setsolid-class.md#SetSolid::FlagAll)(model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*)
* [GetAll](d3plot-setsolid-class.md#SetSolid::GetAll)(model*[[Model](d3plot-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](d3plot-setsolid-class.md#SetSolid::GetFlagged)(model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*, property (optional)*[string]*)
* [GetFromID](d3plot-setsolid-class.md#SetSolid::GetFromID)(model*[[Model](d3plot-model-class.md)]*, label*[integer]*)
* [GetFromIndex](d3plot-setsolid-class.md#SetSolid::GetFromIndex)(model*[[Model](d3plot-model-class.md)]*, index*[integer]*)
* [Last](d3plot-setsolid-class.md#SetSolid::Last)(model*[[Model](d3plot-model-class.md)]*)
* [Total](d3plot-setsolid-class.md#SetSolid::Total)(model*[[Model](d3plot-model-class.md)]*)
* [UnflagAll](d3plot-setsolid-class.md#SetSolid::UnflagAll)(model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*)

## Member functions

* [AllItems](d3plot-setsolid-class.md#SetSolid::AllItems)()
* [ClearFlag](d3plot-setsolid-class.md#SetSolid::ClearFlag)(flag*[Flag]*)
* [Flagged](d3plot-setsolid-class.md#SetSolid::Flagged)(flag*[Flag]*)
* [Item](d3plot-setsolid-class.md#SetSolid::Item)(index*[integer]*)
* [Next](d3plot-setsolid-class.md#SetSolid::Next)()
* [Previous](d3plot-setsolid-class.md#SetSolid::Previous)()
* [SetFlag](d3plot-setsolid-class.md#SetSolid::SetFlag)(flag*[Flag]*)

## SetSolid properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| include (read only) | integer | The include file number in the model that the solid set is in |
| index (read only) | integer | The internal index for the solid set in D3PLOT (starting at 0) |
| label (read only) | integer | The Ansys LS-DYNA label for the solid set |
| model (read only) | Model | The [Model](d3plot-model-class.md) that the solid set is in |
| title (read only) | string | The title for the solid set (or null if no title). This is only available if there is a ztf file for the model. If not null will be returned. |
| total (read only) | integer | The total number of solid items in the solid set |
| type (read only) | constant | The type for the solid set (will be [Type.SET_SOLID](d3plot-type-class.md#Type.SET_SOLID)) |

| Detailed Description<br>The SetSolid class allows you to view sets in D3PLOT. There are various methods and properties available. This class requires a ztf file to be present for the model. See the documentation below for more details. |
| --- |

| Details of functions 
AllItems()

Description<br>Returns all of the solid items for the solid set in the model |
| --- |

#### Arguments

No arguments

| Returns
<br>array of Solid objects<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the solid items in solid set s:<br>
```
var items = s.AllItems();
```
 |
| --- |

* * *

| ClearFlag(flag*[Flag]*)

Description<br>Clears a flag on a solid set |
| --- |

#### Arguments

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) to clear on the solid set

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f on solid set s:<br>
```
s.ClearFlag();
```
 |
| --- |

* * *

| First(model*[[Model](d3plot-model-class.md)]*) [static]
Description<br>Returns the first solid set in the model (or null if there are no solid sets in the model) |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) to get first solid set in

| Returns
<br>SetSolid object<br>
Return type
<br>SetSolid |
| --- |

| Example
<br>To get the first solid set in model m:<br>
```
var s = SetSolid.First(m);
```
 |
| --- |

* * *

| FlagAll(model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*) [static]
Description<br>Flags all of the solid sets in the model with a defined flag |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) that all the solid sets will be flagged in

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) to set on the solid sets

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the solid sets with flag f in model m:<br>
```
SetSolid.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[Flag]*)

Description<br>Checks if the solid set is flagged or not |
| --- |

#### Arguments

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) to test on the solid set

| Returns
<br>true if flagged, false if not<br>
Return type
<br>boolean |
| --- |

| Example
<br>To check if solid set s has flag f set on it:<br>
```
if (s.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| GetAll(model*[[Model](d3plot-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of SetSolid objects or properties for all of the solid sets in the model. If the optional property argument is not given then an array of SetSolid objects is returned. If the property argument is given, that property value for each solid set is returned in the array instead of a SetSolid object |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) that all the solid sets are in

* property (optional) (string)
 
Name for property to get for all solid sets in the model

| Returns
<br>Array of [SetSolid](d3plot-setsolid-class.md) objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To get all of the solid sets in model m:<br>
```
var s = SetSolid.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'label' for a solid set) for each solid set in model m:<br>
```
var a = SetSolid.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetFlagged(model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*, property (optional)*[string]*) [static]
Description<br>Gets all of the solid sets in the model flagged with a defined flag. If the optional property argument is not given then an array of SetSolid objects is returned. If the property argument is given, that property value for each solid set is returned in the array instead of a SetSolid object |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) that the flagged solid sets are in

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) set on the solid sets to get

* property (optional) (string)
 
Name for property to get for all flagged solid sets in the model

| Returns
<br>Array of [SetSolid](d3plot-setsolid-class.md) objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To get all of the solid sets flagged with flag f in model m:<br>
```
SetSolid.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'label' for a node) for all solid sets flagged with flag f in model m:<br>
```
var a = SetSolid.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(model*[[Model](d3plot-model-class.md)]*, label*[integer]*) [static]
Description<br>Returns the SetSolid object for solid set in model with label (or null if it does not exist) |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) to get solid set in

* label (integer)
 
The Ansys LS-DYNA label for the solid set in the model

| Returns
<br>SetSolid object<br>
Return type
<br>SetSolid |
| --- |

| Example
<br>To get the solid set in model m with label 1000:<br>
```
var s = SetSolid.GetFromID(m, 1000);
```
 |
| --- |

* * *

| GetFromIndex(model*[[Model](d3plot-model-class.md)]*, index*[integer]*) [static]
Description<br>Returns the SetSolid object for solid set in model with index (or null if it does not exist) |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) to get solid set in

* index (integer)
 
The D3PLOT internal index in the model for solid set, starting at 0.

| Returns
<br>SetSolid object<br>
Return type
<br>SetSolid |
| --- |

| Example
<br>To get the 51st solid set in model m:<br>
```
var s = SetSolid.GetFromIndex(m, 50);
```
 |
| --- |

* * *

| Item(index*[integer]*)

Description<br>Returns a solid item from the solid set in the model |
| --- |

#### Arguments

* index (integer)
 
The index in the solid set to get the solid from (0 &lt;= index &lt; [total](d3plot-setsolid-class.md#total))

| Returns
<br>Solid object<br>
Return type
<br>Solid |
| --- |

| Example
<br>To get the 10th solid in solid set s:<br>
```
var items = s.Item(9);
```
 |
| --- |

* * *

| Last(model*[[Model](d3plot-model-class.md)]*) [static]
Description<br>Returns the last solid set in the model (or null if there are no solid sets in the model) |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) to get last solid set in

| Returns
<br>SetSolid object<br>
Return type
<br>SetSolid |
| --- |

| Example
<br>To get the last solid set in model m:<br>
```
var s = SetSolid.Last(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next solid set in the model (or null if there is not one) |
| --- |

#### Arguments

No arguments

| Returns
<br>SetSolid object<br>
Return type
<br>SetSolid |
| --- |

| Example
<br>To get the next solid set after solid set s:<br>
```
s = s.Next();
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous solid set in the model (or null if there is not one) |
| --- |

#### Arguments

No arguments

| Returns
<br>SetSolid object<br>
Return type
<br>SetSolid |
| --- |

| Example
<br>To get the previous solid set before solid set s:<br>
```
s = s.Previous();
```
 |
| --- |

* * *

| SetFlag(flag*[Flag]*)

Description<br>Sets a flag on a solid set |
| --- |

#### Arguments

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) to set on the solid set

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f on solid set s:<br>
```
s.SetFlag(f);
```
 |
| --- |

* * *

| Total(model*[[Model](d3plot-model-class.md)]*) [static]
Description<br>Returns the total number of solid sets in the model |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) to get total in

| Returns
<br>The number of solid sets<br>
Return type
<br>integer |
| --- |

| Example
<br>To get the number of solid sets in model m:<br>
```
var total = SetSolid.Total(m);
```
 |
| --- |

* * *

| UnflagAll(model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*) [static]
Description<br>Unsets a defined flag on all of the solid sets in the model |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) that the defined flag for all solid sets will be unset in

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) to unset on the solid sets

| Returns
<br>No return value |
| --- |

| Example
<br>To unset flag f on all of the solid sets in model m:<br>
```
SetSolid.UnflagAll(m, f);
```
 |
| --- |

* * *