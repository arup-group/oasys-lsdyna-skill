# Parts

Functions and constants relating to Parts

## Functions

* [GetPartInfo](d3plot-parts-class.md#Parts::GetPartInfo)(part\_id*[integer]*)
* [GetPid](d3plot-parts-class.md#Parts::GetPid)(type\_code*[integer]*, item*[integer]*, state\_id (optional)*[integer]*)

| Details of functions 
GetPartInfo(part\_id*[integer]*) [static]
Description<br><br>Returns information about a part in the current model<br> |
| --- |

#### Arguments

* part\_id (integer)
 
Internal part number

| Returns |
| --- |

Object with the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| alpha | integer | Part transparency (0-255) |
| blue | integer | Blue component of part colour (0-255) |
| green | integer | Green component of part colour (0-255) |
| include | integer | The include number part is in (0 if main file) |
| red | integer | Red component of part colour (0-255) |
| title | string | The part title |

#### Return type

object

| Example
<br><br><br>
```

// Return the title of the first part in the model
var info = GetPartInfo(1);
Print("Part title = " + info.title + "\n");

```
<br><br> |
| --- |

* * *

| GetPid(type\_code*[integer]*, item*[integer]*, state\_id (optional)*[integer]*) [static]
Description<br>Returns the internal part id of internal &lt;item&gt; of type &lt;type\_code&gt; |
| --- |

#### Arguments

* type\_code (integer)
 
A valid part-based element [type code](d3plot-sharedconstants-class.md#SharedConstants_Item_Type_constants) (e.g. SOLID, SHELL)

* item (integer)
 
If +ve, the internal item number starting at 1. If -ve, the external label of the item. Internal
numbers will be many times faster to process.

* state\_id (optional) (integer)
 
State number to be used instead of the current state

| Returns
<br>integer<br>
Return type
<br>Number |
| --- |

| Example
<br><br><br>
```

// Return the internal part index of the 27th internal shell
var a = GetPid(SHELL, 27);
// Return the external part label of the shell with label 123
var pid = GetLabel(PART, GetPid(SHELL, -123));

```
<br><br> |
| --- |

* * *