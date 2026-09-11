# Materials

Functions and constants relating to Materials

## Functions

* [GetMid](d3plot-materials-class.md#Materials::GetMid)(type\_code*[integer]*, item*[integer]*, layer\_id (optional)*[integer]*, state\_id (optional)*[integer]*)

| Details of functions 
GetMid(type\_code*[integer]*, item*[integer]*, layer\_id (optional)*[integer]*, state\_id (optional)*[integer]*) [static]
Description<br><br><br><br>Returns the external material id of internal &lt;item&gt; of type &lt;type\_code&gt;<br>
<br>Use of this function requires that material data be present, which means that a .ztf file<br>must have been read. If the optional &lt;layer\_id&gt; argument is used the element must be in<br>a part using a \*PART\_COMPOSITE definition.<br>
<br>If the material number is requested for a (composite) layer that does not exist in this<br>item a value of zero is returned. No warning message is issued in this situation since<br>experience has shown that this is a common occurrence and excessive warning messages are a<br>nuisance. |
| --- |

#### Arguments

* type\_code (integer)
 
PART or a valid part-based element [type code](d3plot-sharedconstants-class.md#SharedConstants_Item_Type_constants) (e.g. SOLID, SHELL)

* item (integer)
 
If +ve, the internal item number starting at 1. If -ve, the external label of the item. Internal
numbers will be many times faster to process.

* layer\_id (optional) (integer)
 
For composites the layer number 1 - n.

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

// Return the external material id of *PART 2
var a = GetMid(PART, 2);

// Return the external material id of the 3rd layer of *PART_COMPOSITE 12
var b = GetMid(PART, 12, 3);

// Return the external material id of the 27th internal shell
var c = GetMid(SHELL, 27);

// Return the external material id of the 2nd layer of internal shell 100
// Assumes the part is a *PART_COMPOSITE
var d = GetMid(SHELL, 100, 2);

```
<br><br> |
| --- |

* * *