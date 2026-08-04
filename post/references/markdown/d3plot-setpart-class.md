# SetPart class

The SetPart class gives you access to part sets in D3PLOT. [More...](d3plot-setpart-class.md#SetPart_details)

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

* [First](d3plot-setpart-class.md#SetPart::First)(model*[[Model](d3plot-model-class.md)]*)
* [FlagAll](d3plot-setpart-class.md#SetPart::FlagAll)(model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*)
* [GetAll](d3plot-setpart-class.md#SetPart::GetAll)(model*[[Model](d3plot-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](d3plot-setpart-class.md#SetPart::GetFlagged)(model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*, property (optional)*[string]*)
* [GetFromID](d3plot-setpart-class.md#SetPart::GetFromID)(model*[[Model](d3plot-model-class.md)]*, label*[integer]*)
* [GetFromIndex](d3plot-setpart-class.md#SetPart::GetFromIndex)(model*[[Model](d3plot-model-class.md)]*, index*[integer]*)
* [Last](d3plot-setpart-class.md#SetPart::Last)(model*[[Model](d3plot-model-class.md)]*)
* [Total](d3plot-setpart-class.md#SetPart::Total)(model*[[Model](d3plot-model-class.md)]*)
* [UnflagAll](d3plot-setpart-class.md#SetPart::UnflagAll)(model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*)

## Member functions

* [AllItems](d3plot-setpart-class.md#SetPart::AllItems)()
* [ClearFlag](d3plot-setpart-class.md#SetPart::ClearFlag)(flag*[Flag]*)
* [Flagged](d3plot-setpart-class.md#SetPart::Flagged)(flag*[Flag]*)
* [Item](d3plot-setpart-class.md#SetPart::Item)(index*[integer]*)
* [Next](d3plot-setpart-class.md#SetPart::Next)()
* [Previous](d3plot-setpart-class.md#SetPart::Previous)()
* [SetFlag](d3plot-setpart-class.md#SetPart::SetFlag)(flag*[Flag]*)

## SetPart properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| include (read only) | integer | The include file number in the model that the part set is in |
| index (read only) | integer | The internal index for the part set in D3PLOT (starting at 0) |
| label (read only) | integer | The Ansys LS-DYNA label for the part set |
| model (read only) | Model | The [Model](d3plot-model-class.md) that the part set is in |
| title (read only) | string | The title for the part set (or null if no title). This is only available if there is a ztf file for the model. If not null will be returned. |
| total (read only) | integer | The total number of part items in the part set |
| type (read only) | constant | The type for the part set (will be [Type.SET_PART](d3plot-type-class.md#Type.SET_PART)) |

| Detailed Description<br>The SetPart class allows you to view sets in D3PLOT. There are various methods and properties available. This class requires a ztf file to be present for the model. See the documentation below for more details. |
| --- |

| Details of functions 
AllItems()

Description<br>Returns all of the part items for the part set in the model |
| --- |

#### Arguments

No arguments

| Returns
<br>array of Part objects<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the part items in part set s:<br>
```
var items = s.AllItems();
```
 |
| --- |

* * *

| ClearFlag(flag*[Flag]*)

Description<br>Clears a flag on a part set |
| --- |

#### Arguments

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) to clear on the part set

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f on part set s:<br>
```
s.ClearFlag();
```
 |
| --- |

* * *

| First(model*[[Model](d3plot-model-class.md)]*) [static]
Description<br>Returns the first part set in the model (or null if there are no part sets in the model) |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) to get first part set in

| Returns
<br>SetPart object<br>
Return type
<br>SetPart |
| --- |

| Example
<br>To get the first part set in model m:<br>
```
var s = SetPart.First(m);
```
 |
| --- |

* * *

| FlagAll(model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*) [static]
Description<br>Flags all of the part sets in the model with a defined flag |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) that all the part sets will be flagged in

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) to set on the part sets

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the part sets with flag f in model m:<br>
```
SetPart.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[Flag]*)

Description<br>Checks if the part set is flagged or not |
| --- |

#### Arguments

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) to test on the part set

| Returns
<br>true if flagged, false if not<br>
Return type
<br>boolean |
| --- |

| Example
<br>To check if part set s has flag f set on it:<br>
```
if (s.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| GetAll(model*[[Model](d3plot-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of SetPart objects or properties for all of the part sets in the model. If the optional property argument is not given then an array of SetPart objects is returned. If the property argument is given, that property value for each part set is returned in the array instead of a SetPart object |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) that all the part sets are in

* property (optional) (string)
 
Name for property to get for all part sets in the model

| Returns
<br>Array of [SetPart](d3plot-setpart-class.md) objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To get all of the part sets in model m:<br>
```
var s = SetPart.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'label' for a part set) for each part set in model m:<br>
```
var a = SetPart.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetFlagged(model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*, property (optional)*[string]*) [static]
Description<br>Gets all of the part sets in the model flagged with a defined flag. If the optional property argument is not given then an array of SetPart objects is returned. If the property argument is given, that property value for each part set is returned in the array instead of a SetPart object |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) that the flagged part sets are in

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) set on the part sets to get

* property (optional) (string)
 
Name for property to get for all flagged part sets in the model

| Returns
<br>Array of [SetPart](d3plot-setpart-class.md) objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To get all of the part sets flagged with flag f in model m:<br>
```
SetPart.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'label' for a node) for all part sets flagged with flag f in model m:<br>
```
var a = SetPart.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(model*[[Model](d3plot-model-class.md)]*, label*[integer]*) [static]
Description<br>Returns the SetPart object for part set in model with label (or null if it does not exist) |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) to get part set in

* label (integer)
 
The Ansys LS-DYNA label for the part set in the model

| Returns
<br>SetPart object<br>
Return type
<br>SetPart |
| --- |

| Example
<br>To get the part set in model m with label 1000:<br>
```
var s = SetPart.GetFromID(m, 1000);
```
 |
| --- |

* * *

| GetFromIndex(model*[[Model](d3plot-model-class.md)]*, index*[integer]*) [static]
Description<br>Returns the SetPart object for part set in model with index (or null if it does not exist) |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) to get part set in

* index (integer)
 
The D3PLOT internal index in the model for part set, starting at 0.

| Returns
<br>SetPart object<br>
Return type
<br>SetPart |
| --- |

| Example
<br>To get the 51st part set in model m:<br>
```
var s = SetPart.GetFromIndex(m, 50);
```
 |
| --- |

* * *

| Item(index*[integer]*)

Description<br>Returns a part item from the part set in the model |
| --- |

#### Arguments

* index (integer)
 
The index in the part set to get the part from (0 &lt;= index &lt; [total](d3plot-setpart-class.md#total))

| Returns
<br>Part object<br>
Return type
<br>Part |
| --- |

| Example
<br>To get the 10th part in part set s:<br>
```
var items = s.Item(9);
```
 |
| --- |

* * *

| Last(model*[[Model](d3plot-model-class.md)]*) [static]
Description<br>Returns the last part set in the model (or null if there are no part sets in the model) |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) to get last part set in

| Returns
<br>SetPart object<br>
Return type
<br>SetPart |
| --- |

| Example
<br>To get the last part set in model m:<br>
```
var s = SetPart.Last(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next part set in the model (or null if there is not one) |
| --- |

#### Arguments

No arguments

| Returns
<br>SetPart object<br>
Return type
<br>SetPart |
| --- |

| Example
<br>To get the next part set after part set s:<br>
```
s = s.Next();
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous part set in the model (or null if there is not one) |
| --- |

#### Arguments

No arguments

| Returns
<br>SetPart object<br>
Return type
<br>SetPart |
| --- |

| Example
<br>To get the previous part set before part set s:<br>
```
s = s.Previous();
```
 |
| --- |

* * *

| SetFlag(flag*[Flag]*)

Description<br>Sets a flag on a part set |
| --- |

#### Arguments

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) to set on the part set

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f on part set s:<br>
```
s.SetFlag(f);
```
 |
| --- |

* * *

| Total(model*[[Model](d3plot-model-class.md)]*) [static]
Description<br>Returns the total number of part sets in the model |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) to get total in

| Returns
<br>The number of part sets<br>
Return type
<br>integer |
| --- |

| Example
<br>To get the number of part sets in model m:<br>
```
var total = SetPart.Total(m);
```
 |
| --- |

* * *

| UnflagAll(model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*) [static]
Description<br>Unsets a defined flag on all of the part sets in the model |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) that the defined flag for all part sets will be unset in

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) to unset on the part sets

| Returns
<br>No return value |
| --- |

| Example
<br>To unset flag f on all of the part sets in model m:<br>
```
SetPart.UnflagAll(m, f);
```
 |
| --- |

* * *