# SetShell class

The SetShell class gives you access to shell sets in D3PLOT. [More...](d3plot-setshell-class.md#SetShell_details)

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

* [First](d3plot-setshell-class.md#SetShell::First)(model*[[Model](d3plot-model-class.md)]*)
* [FlagAll](d3plot-setshell-class.md#SetShell::FlagAll)(model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*)
* [GetAll](d3plot-setshell-class.md#SetShell::GetAll)(model*[[Model](d3plot-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](d3plot-setshell-class.md#SetShell::GetFlagged)(model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*, property (optional)*[string]*)
* [GetFromID](d3plot-setshell-class.md#SetShell::GetFromID)(model*[[Model](d3plot-model-class.md)]*, label*[integer]*)
* [GetFromIndex](d3plot-setshell-class.md#SetShell::GetFromIndex)(model*[[Model](d3plot-model-class.md)]*, index*[integer]*)
* [Last](d3plot-setshell-class.md#SetShell::Last)(model*[[Model](d3plot-model-class.md)]*)
* [Total](d3plot-setshell-class.md#SetShell::Total)(model*[[Model](d3plot-model-class.md)]*)
* [UnflagAll](d3plot-setshell-class.md#SetShell::UnflagAll)(model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*)

## Member functions

* [AllItems](d3plot-setshell-class.md#SetShell::AllItems)()
* [ClearFlag](d3plot-setshell-class.md#SetShell::ClearFlag)(flag*[Flag]*)
* [Flagged](d3plot-setshell-class.md#SetShell::Flagged)(flag*[Flag]*)
* [Item](d3plot-setshell-class.md#SetShell::Item)(index*[integer]*)
* [Next](d3plot-setshell-class.md#SetShell::Next)()
* [Previous](d3plot-setshell-class.md#SetShell::Previous)()
* [SetFlag](d3plot-setshell-class.md#SetShell::SetFlag)(flag*[Flag]*)

## SetShell properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| include (read only) | integer | The include file number in the model that the shell set is in |
| index (read only) | integer | The internal index for the shell set in D3PLOT (starting at 0) |
| label (read only) | integer | The Ansys LS-DYNA label for the shell set |
| model (read only) | Model | The [Model](d3plot-model-class.md) that the shell set is in |
| title (read only) | string | The title for the shell set (or null if no title). This is only available if there is a ztf file for the model. If not null will be returned. |
| total (read only) | integer | The total number of shell items in the shell set |
| type (read only) | constant | The type for the shell set (will be [Type.SET_SHELL](d3plot-type-class.md#Type.SET_SHELL)) |

| Detailed Description<br>The SetShell class allows you to view sets in D3PLOT. There are various methods and properties available. This class requires a ztf file to be present for the model. See the documentation below for more details. |
| --- |

| Details of functions 
AllItems()

Description<br>Returns all of the shell items for the shell set in the model |
| --- |

#### Arguments

No arguments

| Returns
<br>array of Shell objects<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the shell items in shell set s:<br>
```
var items = s.AllItems();
```
 |
| --- |

* * *

| ClearFlag(flag*[Flag]*)

Description<br>Clears a flag on a shell set |
| --- |

#### Arguments

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) to clear on the shell set

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f on shell set s:<br>
```
s.ClearFlag();
```
 |
| --- |

* * *

| First(model*[[Model](d3plot-model-class.md)]*) [static]
Description<br>Returns the first shell set in the model (or null if there are no shell sets in the model) |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) to get first shell set in

| Returns
<br>SetShell object<br>
Return type
<br>SetShell |
| --- |

| Example
<br>To get the first shell set in model m:<br>
```
var s = SetShell.First(m);
```
 |
| --- |

* * *

| FlagAll(model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*) [static]
Description<br>Flags all of the shell sets in the model with a defined flag |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) that all the shell sets will be flagged in

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) to set on the shell sets

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the shell sets with flag f in model m:<br>
```
SetShell.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[Flag]*)

Description<br>Checks if the shell set is flagged or not |
| --- |

#### Arguments

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) to test on the shell set

| Returns
<br>true if flagged, false if not<br>
Return type
<br>boolean |
| --- |

| Example
<br>To check if shell set s has flag f set on it:<br>
```
if (s.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| GetAll(model*[[Model](d3plot-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of SetShell objects or properties for all of the shell sets in the model. If the optional property argument is not given then an array of SetShell objects is returned. If the property argument is given, that property value for each shell set is returned in the array instead of a SetShell object |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) that all the shell sets are in

* property (optional) (string)
 
Name for property to get for all shell sets in the model

| Returns
<br>Array of [SetShell](d3plot-setshell-class.md) objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To get all of the shell sets in model m:<br>
```
var s = SetShell.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'label' for a shell set) for each shell set in model m:<br>
```
var a = SetShell.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetFlagged(model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*, property (optional)*[string]*) [static]
Description<br>Gets all of the shell sets in the model flagged with a defined flag. If the optional property argument is not given then an array of SetShell objects is returned. If the property argument is given, that property value for each shell set is returned in the array instead of a SetShell object |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) that the flagged shell sets are in

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) set on the shell sets to get

* property (optional) (string)
 
Name for property to get for all flagged shell sets in the model

| Returns
<br>Array of [SetShell](d3plot-setshell-class.md) objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To get all of the shell sets flagged with flag f in model m:<br>
```
SetShell.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'label' for a node) for all shell sets flagged with flag f in model m:<br>
```
var a = SetShell.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(model*[[Model](d3plot-model-class.md)]*, label*[integer]*) [static]
Description<br>Returns the SetShell object for shell set in model with label (or null if it does not exist) |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) to get shell set in

* label (integer)
 
The Ansys LS-DYNA label for the shell set in the model

| Returns
<br>SetShell object<br>
Return type
<br>SetShell |
| --- |

| Example
<br>To get the shell set in model m with label 1000:<br>
```
var s = SetShell.GetFromID(m, 1000);
```
 |
| --- |

* * *

| GetFromIndex(model*[[Model](d3plot-model-class.md)]*, index*[integer]*) [static]
Description<br>Returns the SetShell object for shell set in model with index (or null if it does not exist) |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) to get shell set in

* index (integer)
 
The D3PLOT internal index in the model for shell set, starting at 0.

| Returns
<br>SetShell object<br>
Return type
<br>SetShell |
| --- |

| Example
<br>To get the 51st shell set in model m:<br>
```
var s = SetShell.GetFromIndex(m, 50);
```
 |
| --- |

* * *

| Item(index*[integer]*)

Description<br>Returns a shell item from the shell set in the model |
| --- |

#### Arguments

* index (integer)
 
The index in the shell set to get the shell from (0 &lt;= index &lt; [total](d3plot-setshell-class.md#total))

| Returns
<br>Shell object<br>
Return type
<br>Shell |
| --- |

| Example
<br>To get the 10th shell in shell set s:<br>
```
var items = s.Item(9);
```
 |
| --- |

* * *

| Last(model*[[Model](d3plot-model-class.md)]*) [static]
Description<br>Returns the last shell set in the model (or null if there are no shell sets in the model) |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) to get last shell set in

| Returns
<br>SetShell object<br>
Return type
<br>SetShell |
| --- |

| Example
<br>To get the last shell set in model m:<br>
```
var s = SetShell.Last(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next shell set in the model (or null if there is not one) |
| --- |

#### Arguments

No arguments

| Returns
<br>SetShell object<br>
Return type
<br>SetShell |
| --- |

| Example
<br>To get the next shell set after shell set s:<br>
```
s = s.Next();
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous shell set in the model (or null if there is not one) |
| --- |

#### Arguments

No arguments

| Returns
<br>SetShell object<br>
Return type
<br>SetShell |
| --- |

| Example
<br>To get the previous shell set before shell set s:<br>
```
s = s.Previous();
```
 |
| --- |

* * *

| SetFlag(flag*[Flag]*)

Description<br>Sets a flag on a shell set |
| --- |

#### Arguments

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) to set on the shell set

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f on shell set s:<br>
```
s.SetFlag(f);
```
 |
| --- |

* * *

| Total(model*[[Model](d3plot-model-class.md)]*) [static]
Description<br>Returns the total number of shell sets in the model |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) to get total in

| Returns
<br>The number of shell sets<br>
Return type
<br>integer |
| --- |

| Example
<br>To get the number of shell sets in model m:<br>
```
var total = SetShell.Total(m);
```
 |
| --- |

* * *

| UnflagAll(model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*) [static]
Description<br>Unsets a defined flag on all of the shell sets in the model |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) that the defined flag for all shell sets will be unset in

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) to unset on the shell sets

| Returns
<br>No return value |
| --- |

| Example
<br>To unset flag f on all of the shell sets in model m:<br>
```
SetShell.UnflagAll(m, f);
```
 |
| --- |

* * *