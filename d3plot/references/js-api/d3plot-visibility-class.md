# Visibility

Functions and constants relating to Visibility

## Functions

* [Blank](d3plot-visibility-class.md#Visibility::Blank)(type\_code*[integer]*, item*[integer or array of integers or string]*, window\_id (optional)*[integer]*)
* [IsBlanked](d3plot-visibility-class.md#Visibility::IsBlanked)(type\_code*[integer]*, item*[integer]*, window\_id (optional)*[integer]*)
* [IsDeleted](d3plot-visibility-class.md#Visibility::IsDeleted)(type\_code*[integer]*, item*[integer]*, state\_id (optional)*[integer]*)
* [IsVisible](d3plot-visibility-class.md#Visibility::IsVisible)(type\_code*[integer]*, item*[integer]*, window\_id*[integer]*, state\_id (optional)*[integer]*)
* [NumDeleted](d3plot-visibility-class.md#Visibility::NumDeleted)(type\_code*[integer]*, state\_id (optional)*[integer]*)
* [Unblank](d3plot-visibility-class.md#Visibility::Unblank)(type\_code*[integer]*, item*[integer or array of integers or string]*, window\_id (optional)*[integer]*)

| Details of functions 
Blank(type\_code*[integer]*, item*[integer or array of integers or string]*, window\_id (optional)*[integer]*) [static]
Description<br>Blank an item |
| --- |

#### Arguments

* type\_code (integer)
 
The [type](d3plot-sharedconstants-class.md#SharedConstants_Item_Type_constants) of item to check (SOLID, PART etc.)
Note: If &lt;item&gt; is "ALL\_DEL" (all deleted elements), only element types are acceptable.

* item (integer or array of integers or string)
 
If +ve, the internal item number starting at 1. If -ve, the external label of the item.
It can also be an array of items (index/label) or a string indicating various items
("ALL" for all items of the type and "ALL\_DEL" for deleted items of the type.)

* window\_id (optional) (integer)
 
A window id. If defined then the item is blanked in that window. If not defined
or set 0 to then the item is blanked in all windows.

| Returns
<br>No return value |
| --- |

| Example
<br><br><br>
```

// Blanks the 1st PART in the current model in all windows
Blank(PART, 1);

// Blanks the 1st PART in the current model in window 2
Blank(PART, 1, 2);

// Blanks the 1st PART in the current model in all windows
Blank(PART, 1, 0);

// Blanks all PARTs in window 2
Blank(PART, "ALL", 2);

// Blanks everything in window 2
Blank(MODEL, "ALL", 2);

// Blanks all SHELLs specified in the array shell_list in window 1
Blank(SHELL, shell_list, 1);

```
<br><br> |
| --- |

* * *

| IsBlanked(type\_code*[integer]*, item*[integer]*, window\_id (optional)*[integer]*) [static]
Description<br>Checks whether an item is currently blanked. If the type is [PART](d3plot-sharedconstants-class.md#SharedConstants.PART)<br>then this function will only return true if all elements of the PART are currently blanked. If the PART is empty this returns false |
| --- |

#### Arguments

* type\_code (integer)
 
The [type](d3plot-sharedconstants-class.md#SharedConstants_Item_Type_constants) of item to check (SOLID, etc.)

* item (integer)
 
If +ve, the internal item number starting at 1. If -ve, the external label of the item.

* window\_id (optional) (integer)
 
A window id. If defined then the function will return true if the item is blanked in that window. If not defined
or set to then the function returns true if it is blanked in any window.

| Returns
<br>boolean<br>
Return type
<br>Boolean |
| --- |

| Example
<br><br><br>
```

// Return true if the 1st SHELL in the model is blanked in any window
if(IsBlanked(SHELL, 1))
{
    ....
}

// Return true if the 1st SHELL in the model is blanked in window 2
if(IsBlanked(SHELL, 1, 2))
{
    ....
}

// Return true if the 1st SHELL in the model is blanked in any window
if(IsBlanked(SHELL, 1, 0))
{
    ....
}

```
<br><br> |
| --- |

* * *

| IsDeleted(type\_code*[integer]*, item*[integer]*, state\_id (optional)*[integer]*) [static]
Description<br><br><br><br>Checks whether an item is currently deleted. If the type is PART then this function will only return true if all the<br>elements of the PART are currently deleted<br>
<br>The deleted status is computed as follows:<br><br><ul>
<li>Part-based elements: Ansys LS-DYNA reports the deletion status for part-based elements (but not DISCRETE or 1d SEATBELT elements)</li>
which have failed according to the failure criteria of their deletion model. Reincarnation of dead elements is possible:
*DEFINE_CONSTRUCTION_STAGES will result in an inactive element being marked as deleted, and it will be &quot;undeleted&quot; if that stage
becomes active later on in the analysis.
<li>Parts themselves: Ansys LS-DYNA does not delete parts as such. A deformable part in which all elements have been deleted is removed</li>
from the calculation, but this removal is not reported in the results database. D3PLOT considers a part to be deleted if it has no
elements, or all of its elements are marked as deleted. Note that a rigid part with no elements is a perfectly legitimate- if unusual -
construct in Ansys LS-DYNA.
<li>Nodes: Ansys LS-DYNA does not delete nodes, but nodes with no structural mass are removed from the calculation. However this removal</li>
is not reported in the results database. D3PLOT considers a node to be deleted if all the elements to which it is attached are
themselves deleted. Remember that D3PLOT does not &quot;know about&quot; all possible connections to a node, for example it may be an extra
node on a rigid body, in a rigid part set, or constrained in some other obscure way. Therefore the test &quot;deleted if all attached nodes
are deleted&quot; may give false positives and should not be considered definitive.
</ul> |
| --- |

#### Arguments

* type\_code (integer)
 
This function only supports the following type codes.
[PART](d3plot-sharedconstants-class.md#SharedConstants.PART),
[NODE](d3plot-sharedconstants-class.md#SharedConstants.NODE),
[SOLID](d3plot-sharedconstants-class.md#SharedConstants.SOLID),
[BEAM](d3plot-sharedconstants-class.md#SharedConstants.BEAM),
[TSHELL](d3plot-sharedconstants-class.md#SharedConstants.TSHELL),
[SPH](d3plot-sharedconstants-class.md#SharedConstants.SPH),
[DES](d3plot-sharedconstants-class.md#SharedConstants.DES)

* item (integer)
 
If +ve, the internal item number starting at 1. If -ve, the external label of the item.

* state\_id (optional) (integer)
 
A valid state id. If omitted the current state will be used.

| Returns
<br>boolean<br>
Return type
<br>Boolean |
| --- |

| Example
<br><br><br>
```

// Returns true if the 1st SHELL in the model has been deleted
if(IsDeleted(SHELL, 1))
{
    ....
}

```
<br><br> |
| --- |

* * *

| IsVisible(type\_code*[integer]*, item*[integer]*, window\_id*[integer]*, state\_id (optional)*[integer]*) [static]
Description<br><br><br><br>Checks whether an item is currently visible.<br>
<br>An item is considered "visible" if the following conditions are all true:<br><br><ol>
<li>Not blanked</li>
<li>The visibility switch is on for type_code</li>
<li>Is not empty, if type is PART</li>
<li>The item has not been deleted in the current state if the type is an element</li>
</ol> |
| --- |

#### Arguments

* type\_code (integer)
 
This function only supports the following type codes.
[PART](d3plot-sharedconstants-class.md#SharedConstants.PART),
[NODE](d3plot-sharedconstants-class.md#SharedConstants.NODE),
[SOLID](d3plot-sharedconstants-class.md#SharedConstants.SOLID),
[BEAM](d3plot-sharedconstants-class.md#SharedConstants.BEAM),
[TSHELL](d3plot-sharedconstants-class.md#SharedConstants.TSHELL),
[SPH](d3plot-sharedconstants-class.md#SharedConstants.SPH),
[DES](d3plot-sharedconstants-class.md#SharedConstants.DES)

* item (integer)
 
If +ve, the internal item number starting at 1. If -ve, the external label of the item.

* window\_id (integer)
 
A valid window id

* state\_id (optional) (integer)
 
A valid state id. If omitted the current state will be used.

| Returns
<br>boolean<br>
Return type
<br>Boolean |
| --- |

| Example
<br><br><br>
```

// Returns true if the 1st SHELL in the model in the first window is visible
if(IsVisible(SHELL, 1, 1))
{
    ....
}

```
<br><br> |
| --- |

* * *

| NumDeleted(type\_code*[integer]*, state\_id (optional)*[integer]*) [static]
Description<br>Gets the number of deleted elements or segments |
| --- |

#### Arguments

* type\_code (integer)
 
The [type](d3plot-sharedconstants-class.md#SharedConstants_Item_Type_constants) of item to check.
Only accepts ELEM for #elements or SEGM for #segments.

* state\_id (optional) (integer)
 
A state id. If defined then the number of deleted items is calculated for that state. If not defined
or set to 0 then the number of items is calculated for the current state.

| Returns
<br>integer<br>
Return type
<br>Number |
| --- |

| Example
<br><br><br>
```

// Number of deleted elements in current state of the current model
var a = NumDeleted(ELEM);

// Number of deleted elements in state 3 of the current model
var b = NumDeleted(ELEM, 3);

// Number of deleted segments in state 5 of the current model
var c = NumDeleted(SEGM, 5);

```
<br><br> |
| --- |

* * *

| Unblank(type\_code*[integer]*, item*[integer or array of integers or string]*, window\_id (optional)*[integer]*) [static]
Description<br>Unblank an item |
| --- |

#### Arguments

* type\_code (integer)
 
The [type](d3plot-sharedconstants-class.md#SharedConstants_Item_Type_constants) of item to check (SOLID, PART etc.)
Note: If &lt;item&gt; is "ALL\_DEL" (all deleted elements), only element types are acceptable.

* item (integer or array of integers or string)
 
If +ve, the internal item number starting at 1. If -ve, the external label of the item.
It can also be an array of items (index/label) or a string indicating various items
("ALL" for all items of the type and "ALL\_DEL" for deleted items of the type.)

* window\_id (optional) (integer)
 
A window id. If defined then the item is unblanked in that window. If not defined
or set to 0 then the item is unblanked in all windows.

| Returns
<br>No return value |
| --- |

| Example
<br><br><br>
```

// Unblanks the 1st PART in the current model in all windows
Unblank(PART, 1);

// Unblanks the 1st PART in the current model in window 2
Unblank(PART, 1, 2);

// Unblanks the 1st PART in the current model in all windows
Unblank(PART, 1, 0);

// Unblanks all PARTs in window 2
Unblank(PART, "ALL", 2);

// Unblanks everything in window 2
Unblank(MODEL, "ALL", 2);

// Unblanks all SOLIDs specified in the array solid_list in window 1
Unblank(SOLID, solid_list, 1);

```
<br><br> |
| --- |

* * *