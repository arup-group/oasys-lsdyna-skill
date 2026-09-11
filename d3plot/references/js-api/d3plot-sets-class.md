# Sets

Functions and constants relating to Sets

## Functions

* [GetItemsInSet](d3plot-sets-class.md#Sets::GetItemsInSet)(set\_type*[integer]*, set\_id*[integer]*)
* [GetSetInfo](d3plot-sets-class.md#Sets::GetSetInfo)(set\_type*[integer]*, set\_id*[integer]*)

| Details of functions 
GetItemsInSet(set\_type*[integer]*, set\_id*[integer]*) [static]
Description<br>Returns an object containing the number of items in set &lt;set\_id&gt; of set type &lt;set\_type&gt; and also an<br>array &lt;list[ ]&gt; of their internal indices. If there are no items in the set then false is returned. |
| --- |

#### Arguments

* set\_type (integer)
 
A valid [type code](d3plot-sharedconstants-class.md#SharedConstants_Item_Type_constants) (SET\_PART, etc.)

* set\_id (integer)
 
The set id. If +ve, the internal number starting at 1. If -ve, the external label of the set. Internal
numbers will be many times faster to process.

| Returns |
| --- |

Object with the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| list | array of integers | Internal entity indices |
| nn | integer | Number of entities in list |

#### Return type

object

| Example
<br><br><br>
```

// Get a list of parts in the 5th SET_PART
if(a = GetItemsInSet(SET_PART, 5))
{
    var nparts = a.nn;
    for(var i=0; i<nparts; i++)
    {
        Message("Part: " + GetLabel(PART, a.list[i]));
    }
}

```
<br><br> |
| --- |

* * *

| GetSetInfo(set\_type*[integer]*, set\_id*[integer]*) [static]
Description<br>Returns information about a set in the current model |
| --- |

#### Arguments

* set\_type (integer)
 
A valid [type code](d3plot-sharedconstants-class.md#SharedConstants_Item_Type_constants) (SET\_PART, etc.)

* set\_id (integer)
 
The set id. If +ve, the internal number starting at 1. If -ve, the external label of the set. Internal
numbers will be many times faster to process.

| Returns |
| --- |

Object with the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| label | integer | The label of the set |
| name | string | The name of the set |
| nn | integer | Number of items in the set |

#### Return type

object

| Example
<br><br><br>
```

// Print the name of the first *SET_PART in the current model
var info = GetSetInfo(SET_PART, 1);
Print("Set name = " + info.name + "\n");

```
<br><br> |
| --- |

* * *