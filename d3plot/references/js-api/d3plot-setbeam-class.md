# SetBeam class

The SetBeam class gives you access to beam sets in D3PLOT. [More...](d3plot-setbeam-class.md#SetBeam_details)

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

* [First](d3plot-setbeam-class.md#SetBeam::First)(model*[[Model](d3plot-model-class.md)]*)
* [FlagAll](d3plot-setbeam-class.md#SetBeam::FlagAll)(model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*)
* [GetAll](d3plot-setbeam-class.md#SetBeam::GetAll)(model*[[Model](d3plot-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](d3plot-setbeam-class.md#SetBeam::GetFlagged)(model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*, property (optional)*[string]*)
* [GetFromID](d3plot-setbeam-class.md#SetBeam::GetFromID)(model*[[Model](d3plot-model-class.md)]*, label*[integer]*)
* [GetFromIndex](d3plot-setbeam-class.md#SetBeam::GetFromIndex)(model*[[Model](d3plot-model-class.md)]*, index*[integer]*)
* [Last](d3plot-setbeam-class.md#SetBeam::Last)(model*[[Model](d3plot-model-class.md)]*)
* [Total](d3plot-setbeam-class.md#SetBeam::Total)(model*[[Model](d3plot-model-class.md)]*)
* [UnflagAll](d3plot-setbeam-class.md#SetBeam::UnflagAll)(model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*)

## Member functions

* [AllItems](d3plot-setbeam-class.md#SetBeam::AllItems)()
* [ClearFlag](d3plot-setbeam-class.md#SetBeam::ClearFlag)(flag*[Flag]*)
* [Flagged](d3plot-setbeam-class.md#SetBeam::Flagged)(flag*[Flag]*)
* [Item](d3plot-setbeam-class.md#SetBeam::Item)(index*[integer]*)
* [Next](d3plot-setbeam-class.md#SetBeam::Next)()
* [Previous](d3plot-setbeam-class.md#SetBeam::Previous)()
* [SetFlag](d3plot-setbeam-class.md#SetBeam::SetFlag)(flag*[Flag]*)

## SetBeam properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| include (read only) | integer | The include file number in the model that the beam set is in |
| index (read only) | integer | The internal index for the beam set in D3PLOT (starting at 0) |
| label (read only) | integer | The Ansys LS-DYNA label for the beam set |
| model (read only) | Model | The [Model](d3plot-model-class.md) that the beam set is in |
| title (read only) | string | The title for the beam set (or null if no title). This is only available if there is a ztf file for the model. If not null will be returned. |
| total (read only) | integer | The total number of beam items in the beam set |
| type (read only) | constant | The type for the beam set (will be [Type.SET_BEAM](d3plot-type-class.md#Type.SET_BEAM)) |

| Detailed Description<br>The SetBeam class allows you to view sets in D3PLOT. There are various methods and properties available. This class requires a ztf file to be present for the model. See the documentation below for more details. |
| --- |

| Details of functions 
AllItems()

Description<br>Returns all of the beam items for the beam set in the model |
| --- |

#### Arguments

No arguments

| Returns
<br>array of Beam objects<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the beam items in beam set s:<br>
```
var items = s.AllItems();
```
 |
| --- |

* * *

| ClearFlag(flag*[Flag]*)

Description<br>Clears a flag on a beam set |
| --- |

#### Arguments

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) to clear on the beam set

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f on beam set s:<br>
```
s.ClearFlag();
```
 |
| --- |

* * *

| First(model*[[Model](d3plot-model-class.md)]*) [static]
Description<br>Returns the first beam set in the model (or null if there are no beam sets in the model) |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) to get first beam set in

| Returns
<br>SetBeam object<br>
Return type
<br>SetBeam |
| --- |

| Example
<br>To get the first beam set in model m:<br>
```
var s = SetBeam.First(m);
```
 |
| --- |

* * *

| FlagAll(model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*) [static]
Description<br>Flags all of the beam sets in the model with a defined flag |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) that all the beam sets will be flagged in

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) to set on the beam sets

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the beam sets with flag f in model m:<br>
```
SetBeam.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[Flag]*)

Description<br>Checks if the beam set is flagged or not |
| --- |

#### Arguments

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) to test on the beam set

| Returns
<br>true if flagged, false if not<br>
Return type
<br>boolean |
| --- |

| Example
<br>To check if beam set s has flag f set on it:<br>
```
if (s.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| GetAll(model*[[Model](d3plot-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of SetBeam objects or properties for all of the beam sets in the model. If the optional property argument is not given then an array of SetBeam objects is returned. If the property argument is given, that property value for each beam set is returned in the array instead of a SetBeam object |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) that all the beam sets are in

* property (optional) (string)
 
Name for property to get for all beam sets in the model

| Returns
<br>Array of [SetBeam](d3plot-setbeam-class.md) objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To get all of the beam sets in model m:<br>
```
var s = SetBeam.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'label' for a beam set) for each beam set in model m:<br>
```
var a = SetBeam.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetFlagged(model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*, property (optional)*[string]*) [static]
Description<br>Gets all of the beam sets in the model flagged with a defined flag. If the optional property argument is not given then an array of SetBeam objects is returned. If the property argument is given, that property value for each beam set is returned in the array instead of a SetBeam object |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) that the flagged beam sets are in

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) set on the beam sets to get

* property (optional) (string)
 
Name for property to get for all flagged beam sets in the model

| Returns
<br>Array of [SetBeam](d3plot-setbeam-class.md) objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To get all of the beam sets flagged with flag f in model m:<br>
```
SetBeam.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'label' for a node) for all beam sets flagged with flag f in model m:<br>
```
var a = SetBeam.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(model*[[Model](d3plot-model-class.md)]*, label*[integer]*) [static]
Description<br>Returns the SetBeam object for beam set in model with label (or null if it does not exist) |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) to get beam set in

* label (integer)
 
The Ansys LS-DYNA label for the beam set in the model

| Returns
<br>SetBeam object<br>
Return type
<br>SetBeam |
| --- |

| Example
<br>To get the beam set in model m with label 1000:<br>
```
var s = SetBeam.GetFromID(m, 1000);
```
 |
| --- |

* * *

| GetFromIndex(model*[[Model](d3plot-model-class.md)]*, index*[integer]*) [static]
Description<br>Returns the SetBeam object for beam set in model with index (or null if it does not exist) |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) to get beam set in

* index (integer)
 
The D3PLOT internal index in the model for beam set, starting at 0.

| Returns
<br>SetBeam object<br>
Return type
<br>SetBeam |
| --- |

| Example
<br>To get the 51st beam set in model m:<br>
```
var s = SetBeam.GetFromIndex(m, 50);
```
 |
| --- |

* * *

| Item(index*[integer]*)

Description<br>Returns a beam item from the beam set in the model |
| --- |

#### Arguments

* index (integer)
 
The index in the beam set to get the beam from (0 &lt;= index &lt; [total](d3plot-setbeam-class.md#total))

| Returns
<br>Beam object<br>
Return type
<br>Beam |
| --- |

| Example
<br>To get the 10th beam in beam set s:<br>
```
var items = s.Item(9);
```
 |
| --- |

* * *

| Last(model*[[Model](d3plot-model-class.md)]*) [static]
Description<br>Returns the last beam set in the model (or null if there are no beam sets in the model) |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) to get last beam set in

| Returns
<br>SetBeam object<br>
Return type
<br>SetBeam |
| --- |

| Example
<br>To get the last beam set in model m:<br>
```
var s = SetBeam.Last(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next beam set in the model (or null if there is not one) |
| --- |

#### Arguments

No arguments

| Returns
<br>SetBeam object<br>
Return type
<br>SetBeam |
| --- |

| Example
<br>To get the next beam set after beam set s:<br>
```
s = s.Next();
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous beam set in the model (or null if there is not one) |
| --- |

#### Arguments

No arguments

| Returns
<br>SetBeam object<br>
Return type
<br>SetBeam |
| --- |

| Example
<br>To get the previous beam set before beam set s:<br>
```
s = s.Previous();
```
 |
| --- |

* * *

| SetFlag(flag*[Flag]*)

Description<br>Sets a flag on a beam set |
| --- |

#### Arguments

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) to set on the beam set

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f on beam set s:<br>
```
s.SetFlag(f);
```
 |
| --- |

* * *

| Total(model*[[Model](d3plot-model-class.md)]*) [static]
Description<br>Returns the total number of beam sets in the model |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) to get total in

| Returns
<br>The number of beam sets<br>
Return type
<br>integer |
| --- |

| Example
<br>To get the number of beam sets in model m:<br>
```
var total = SetBeam.Total(m);
```
 |
| --- |

* * *

| UnflagAll(model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*) [static]
Description<br>Unsets a defined flag on all of the beam sets in the model |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) that the defined flag for all beam sets will be unset in

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) to unset on the beam sets

| Returns
<br>No return value |
| --- |

| Example
<br>To unset flag f on all of the beam sets in model m:<br>
```
SetBeam.UnflagAll(m, f);
```
 |
| --- |

* * *