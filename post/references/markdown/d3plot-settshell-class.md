# SetTshell class

The SetTshell class gives you access to thick shell sets in D3PLOT. [More...](d3plot-settshell-class.md#SetTshell_details)

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

* [First](d3plot-settshell-class.md#SetTshell::First)(model*[[Model](d3plot-model-class.md)]*)
* [FlagAll](d3plot-settshell-class.md#SetTshell::FlagAll)(model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*)
* [GetAll](d3plot-settshell-class.md#SetTshell::GetAll)(model*[[Model](d3plot-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](d3plot-settshell-class.md#SetTshell::GetFlagged)(model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*, property (optional)*[string]*)
* [GetFromID](d3plot-settshell-class.md#SetTshell::GetFromID)(model*[[Model](d3plot-model-class.md)]*, label*[integer]*)
* [GetFromIndex](d3plot-settshell-class.md#SetTshell::GetFromIndex)(model*[[Model](d3plot-model-class.md)]*, index*[integer]*)
* [Last](d3plot-settshell-class.md#SetTshell::Last)(model*[[Model](d3plot-model-class.md)]*)
* [Total](d3plot-settshell-class.md#SetTshell::Total)(model*[[Model](d3plot-model-class.md)]*)
* [UnflagAll](d3plot-settshell-class.md#SetTshell::UnflagAll)(model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*)

## Member functions

* [AllItems](d3plot-settshell-class.md#SetTshell::AllItems)()
* [ClearFlag](d3plot-settshell-class.md#SetTshell::ClearFlag)(flag*[Flag]*)
* [Flagged](d3plot-settshell-class.md#SetTshell::Flagged)(flag*[Flag]*)
* [Item](d3plot-settshell-class.md#SetTshell::Item)(index*[integer]*)
* [Next](d3plot-settshell-class.md#SetTshell::Next)()
* [Previous](d3plot-settshell-class.md#SetTshell::Previous)()
* [SetFlag](d3plot-settshell-class.md#SetTshell::SetFlag)(flag*[Flag]*)

## SetTshell properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| include (read only) | integer | The include file number in the model that the thick shell set is in |
| index (read only) | integer | The internal index for the thick shell set in D3PLOT (starting at 0) |
| label (read only) | integer | The Ansys LS-DYNA label for the thick shell set |
| model (read only) | Model | The [Model](d3plot-model-class.md) that the thick shell set is in |
| title (read only) | string | The title for the thick shell set (or null if no title). This is only available if there is a ztf file for the model. If not null will be returned. |
| total (read only) | integer | The total number of thick shell items in the thick shell set |
| type (read only) | constant | The type for the thick shell set (will be [Type.SET_TSHELL](d3plot-type-class.md#Type.SET_TSHELL)) |

| Detailed Description<br>The SetTshell class allows you to view sets in D3PLOT. There are various methods and properties available. This class requires a ztf file to be present for the model. See the documentation below for more details. |
| --- |

| Details of functions 
AllItems()

Description<br>Returns all of the thick shell items for the thick shell set in the model |
| --- |

#### Arguments

No arguments

| Returns
<br>array of Tshell objects<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the thick shell items in thick shell set s:<br>
```
var items = s.AllItems();
```
 |
| --- |

* * *

| ClearFlag(flag*[Flag]*)

Description<br>Clears a flag on a thick shell set |
| --- |

#### Arguments

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) to clear on the thick shell set

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f on thick shell set s:<br>
```
s.ClearFlag();
```
 |
| --- |

* * *

| First(model*[[Model](d3plot-model-class.md)]*) [static]
Description<br>Returns the first thick shell set in the model (or null if there are no thick shell sets in the model) |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) to get first thick shell set in

| Returns
<br>SetTshell object<br>
Return type
<br>SetTshell |
| --- |

| Example
<br>To get the first thick shell set in model m:<br>
```
var s = SetTshell.First(m);
```
 |
| --- |

* * *

| FlagAll(model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*) [static]
Description<br>Flags all of the thick shell sets in the model with a defined flag |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) that all the thick shell sets will be flagged in

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) to set on the thick shell sets

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the thick shell sets with flag f in model m:<br>
```
SetTshell.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[Flag]*)

Description<br>Checks if the thick shell set is flagged or not |
| --- |

#### Arguments

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) to test on the thick shell set

| Returns
<br>true if flagged, false if not<br>
Return type
<br>boolean |
| --- |

| Example
<br>To check if thick shell set s has flag f set on it:<br>
```
if (s.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| GetAll(model*[[Model](d3plot-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of SetTshell objects or properties for all of the thick shell sets in the model. If the optional property argument is not given then an array of SetTshell objects is returned. If the property argument is given, that property value for each thick shell set is returned in the array instead of a SetTshell object |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) that all the thick shell sets are in

* property (optional) (string)
 
Name for property to get for all thick shell sets in the model

| Returns
<br>Array of [SetTshell](d3plot-settshell-class.md) objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To get all of the thick shell sets in model m:<br>
```
var s = SetTshell.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'label' for a thick shell set) for each thick shell set in model m:<br>
```
var a = SetTshell.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetFlagged(model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*, property (optional)*[string]*) [static]
Description<br>Gets all of the thick shell sets in the model flagged with a defined flag. If the optional property argument is not given then an array of SetTshell objects is returned. If the property argument is given, that property value for each thick shell set is returned in the array instead of a SetTshell object |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) that the flagged thick shell sets are in

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) set on the thick shell sets to get

* property (optional) (string)
 
Name for property to get for all flagged thick shell sets in the model

| Returns
<br>Array of [SetTshell](d3plot-settshell-class.md) objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To get all of the thick shell sets flagged with flag f in model m:<br>
```
SetTshell.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'label' for a node) for all thick shell sets flagged with flag f in model m:<br>
```
var a = SetTshell.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(model*[[Model](d3plot-model-class.md)]*, label*[integer]*) [static]
Description<br>Returns the SetTshell object for thick shell set in model with label (or null if it does not exist) |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) to get thick shell set in

* label (integer)
 
The Ansys LS-DYNA label for the thick shell set in the model

| Returns
<br>SetTshell object<br>
Return type
<br>SetTshell |
| --- |

| Example
<br>To get the thick shell set in model m with label 1000:<br>
```
var s = SetTshell.GetFromID(m, 1000);
```
 |
| --- |

* * *

| GetFromIndex(model*[[Model](d3plot-model-class.md)]*, index*[integer]*) [static]
Description<br>Returns the SetTshell object for thick shell set in model with index (or null if it does not exist) |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) to get thick shell set in

* index (integer)
 
The D3PLOT internal index in the model for thick shell set, starting at 0.

| Returns
<br>SetTshell object<br>
Return type
<br>SetTshell |
| --- |

| Example
<br>To get the 51st thick shell set in model m:<br>
```
var s = SetTshell.GetFromIndex(m, 50);
```
 |
| --- |

* * *

| Item(index*[integer]*)

Description<br>Returns a thick shell item from the thick shell set in the model |
| --- |

#### Arguments

* index (integer)
 
The index in the thick shell set to get the thick shell from (0 &lt;= index &lt; [total](d3plot-settshell-class.md#total))

| Returns
<br>Tshell object<br>
Return type
<br>Tshell |
| --- |

| Example
<br>To get the 10th thick shell in thick shell set s:<br>
```
var items = s.Item(9);
```
 |
| --- |

* * *

| Last(model*[[Model](d3plot-model-class.md)]*) [static]
Description<br>Returns the last thick shell set in the model (or null if there are no thick shell sets in the model) |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) to get last thick shell set in

| Returns
<br>SetTshell object<br>
Return type
<br>SetTshell |
| --- |

| Example
<br>To get the last thick shell set in model m:<br>
```
var s = SetTshell.Last(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next thick shell set in the model (or null if there is not one) |
| --- |

#### Arguments

No arguments

| Returns
<br>SetTshell object<br>
Return type
<br>SetTshell |
| --- |

| Example
<br>To get the next thick shell set after thick shell set s:<br>
```
s = s.Next();
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous thick shell set in the model (or null if there is not one) |
| --- |

#### Arguments

No arguments

| Returns
<br>SetTshell object<br>
Return type
<br>SetTshell |
| --- |

| Example
<br>To get the previous thick shell set before thick shell set s:<br>
```
s = s.Previous();
```
 |
| --- |

* * *

| SetFlag(flag*[Flag]*)

Description<br>Sets a flag on a thick shell set |
| --- |

#### Arguments

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) to set on the thick shell set

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f on thick shell set s:<br>
```
s.SetFlag(f);
```
 |
| --- |

* * *

| Total(model*[[Model](d3plot-model-class.md)]*) [static]
Description<br>Returns the total number of thick shell sets in the model |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) to get total in

| Returns
<br>The number of thick shell sets<br>
Return type
<br>integer |
| --- |

| Example
<br>To get the number of thick shell sets in model m:<br>
```
var total = SetTshell.Total(m);
```
 |
| --- |

* * *

| UnflagAll(model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*) [static]
Description<br>Unsets a defined flag on all of the thick shell sets in the model |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) that the defined flag for all thick shell sets will be unset in

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) to unset on the thick shell sets

| Returns
<br>No return value |
| --- |

| Example
<br>To unset flag f on all of the thick shell sets in model m:<br>
```
SetTshell.UnflagAll(m, f);
```
 |
| --- |

* * *