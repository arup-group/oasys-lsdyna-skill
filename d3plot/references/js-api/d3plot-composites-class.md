# Composites

Functions and constants relating to Composites

## Functions

* [GetElemsInPly](d3plot-composites-class.md#Composites::GetElemsInPly)(ply\_id*[integer]*, state\_id (optional)*[integer]*)
* [GetPlyIntPoint](d3plot-composites-class.md#Composites::GetPlyIntPoint)(type\_code*[integer]*, item*[integer]*, ply\_id*[integer]*, state\_id (optional)*[integer]*)
* [GetPlysInLayup](d3plot-composites-class.md#Composites::GetPlysInLayup)(layup\_id*[integer]*, state\_id (optional)*[integer]*)

| Details of functions 
GetElemsInPly(ply\_id*[integer]*, state\_id (optional)*[integer]*) [static]
Description<br>Returns an object containing the number of elements in ply &lt;ply\_id&gt;, the element type code, and also an array &lt;list[ ]&gt; of their internal indices.<br>If there are no elements in the ply then false is returned. Ply data is only available if a .ztf file containing composite information has been read. |
| --- |

#### Arguments

* ply\_id (integer)
 
The ply in which to return the list of elements. If +ve, the internal ply number starting at 1.
If -ve, the external ply label. Internal numbers will be many times faster to process.

* state\_id (optional) (integer)
 
State number to be used instead of the current state

| Returns |
| --- |

Object with the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| list | array of integers | Internal element ids |
| nn | integer | Number of elements in list |
| type | integer | Element [type code](d3plot-sharedconstants-class.md#SharedConstants_Item_Type_constants) |

#### Return type

object

| Example
<br><br><br>
```

// Get a list of elements in ply 5
if(a = GetElemsInPly(5))
{
    var nelems = a.nn;
    for(var i=0; i<nelems; i++)
    {
        Message("Element: " + GetLabel(a.type, a.list[i]))
    }
}

```
<br><br> |
| --- |

* * *

| GetPlyIntPoint(type\_code*[integer]*, item*[integer]*, ply\_id*[integer]*, state\_id (optional)*[integer]*) [static]
Description<br><br>Return the integration point of &lt;type/item&gt; in ply &lt;ply\_id&gt;.<br>If the &gt;type/item&lt; is not in the ply then false is returned.<br>Ply data is only available if a .ztf file containing composite information has been read.<br> |
| --- |

#### Arguments

* type\_code (integer)
 
A valid element [type code](d3plot-sharedconstants-class.md#SharedConstants_Item_Type_constants) (Currently only SHELL is valid)

* item (integer)
 
If +ve, the internal item number starting at 1. If -ve, the external label of the item. Internal
numbers will be many times faster to process.

* ply\_id (integer)
 
If +ve, the internal ply index. If -ve, the external ply label. Internal
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

// Find the integration point in shell #1 occupied by internal ply index 14
var ip = GetPlyIntPoint(SHELL, 1, 14));

```
<br><br> |
| --- |

* * *

| GetPlysInLayup(layup\_id*[integer]*, state\_id (optional)*[integer]*) [static]
Description<br><br>Returns an object containing the number of plys in layup &lt;layup\_id&gt; and an array &lt;list[ ]&gt; of their internal indices.<br>If there are no plys in the layup then false is returned. Ply data is only available if a .ztf file containing composite information<br>has been read.<br> |
| --- |

#### Arguments

* layup\_id (integer)
 
The layup in which to return the list of plys. If +ve an internal layup index, if -ve an external layup label

* state\_id (optional) (integer)
 
State number to be used instead of the current state

| Returns |
| --- |

Object with the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| list | array of integers | Array of internal ply indices |
| nn | integer | Number of plys in list |

#### Return type

object

| Example
<br><br><br>
```

// Print the ply labels in layup 1
if(a = GetPlysInLayup(1))
{
    var nplys = a.nn;
    for(var i=0; i<nplys; i++)
    {
        Message("Ply: " + GetLabel(CPLY, a.list[i]))
    }
}

```
<br><br> |
| --- |

* * *