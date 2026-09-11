# Elements

Functions and constants relating to Elements

## Functions

* [GetElemAxes](d3plot-elements-class.md#Elements::GetElemAxes)(type\_code*[integer]*, item*[integer]*, state\_id (optional)*[integer]*)
* [GetElemBetaAngle](d3plot-elements-class.md#Elements::GetElemBetaAngle)(type\_code*[integer]*, item*[integer]*, ply\_id*[integer]*, int\_pnt (optional)*[integer]*, state\_id (optional)*[integer]*)
* [GetElemsAtNode](d3plot-elements-class.md#Elements::GetElemsAtNode)(node*[integer]*, type\_code*[integer]*, state\_id (optional)*[integer]*)
* [GetElemsInPart](d3plot-elements-class.md#Elements::GetElemsInPart)(part\_id*[integer]*, state\_id (optional)*[integer]*)
* [GetTopology](d3plot-elements-class.md#Elements::GetTopology)(type\_code*[integer]*, item*[integer]*, state\_id (optional)*[integer]*)

| Details of functions 
GetElemAxes(type\_code*[integer]*, item*[integer]*, state\_id (optional)*[integer]*) [static]
Description<br>Returns the local axes of the element in model space, expressed as direction cosines in a 2d array |
| --- |

#### Arguments

* type\_code (integer)
 
A valid element [type code](d3plot-sharedconstants-class.md#SharedConstants_Item_Type_constants) (SOLID, BEAM, SHELL or TSHELL)

* item (integer)
 
If +ve, the internal item number starting at 1. If -ve, the external label of the item. Internal
numbers will be many times faster to process.

* state\_id (optional) (integer)
 
State number to be used instead of the current state

| Returns
<br>2d array of reals. The cosines of the element in model space as a two-dimensional array, subscripts [row][col], with cosines organised in rows.<br><br><br>Spelled out in detail for results array R this means:<br><ul>
<li>X axis cosines: R[X][X], R[X][Y], R[X][Z]</li>
<li>Y axis cosines: R[Y][X], R[Y][Y], R[Y][Z]</li>
<li>Z axis cosines: R[Z][X], R[Z][Y], R[Z][Z]</li>
</ul>

Return type
<br>Number |
| --- |

| Example
<br><br><br>
```

// Return the direction cosines of shell 1
var r = GetElemAxes(SHELL, 1);

var yz_cosine = r[Y][Z];

```
<br><br> |
| --- |

* * *

| GetElemBetaAngle(type\_code*[integer]*, item*[integer]*, ply\_id*[integer]*, int\_pnt (optional)*[integer]*, state\_id (optional)*[integer]*) [static]
Description<br><br><br><br>Returns the beta angle (in degrees) at either the ply id or integration point number on element &lt;item&gt; of &lt;type\_code&gt;<br>
<br>If &lt;ply\_id&gt; is non-zero then &lt;int\_pnt&gt; can be omitted or set to zero.<br>
<br>If &lt;ply\_id&gt; is zero then &lt;int\_pnt&gt; must be defined and non-zero.<br>
<br>When working with &lt;ply\_id&gt; if the ply does not exist in the element, then false is returned.<br>
<br>When working with &lt;int\_pnt&gt; a value will always be returned, but this will be zero if no beta angle<br>is defined for the element / int\_pnt combination.<br>
<br>Ply data is only available if a .ztf file containing composite information has been read. |
| --- |

#### Arguments

* type\_code (integer)
 
A valid element [type code](d3plot-sharedconstants-class.md#SharedConstants_Item_Type_constants) (Currently only SHELL is valid)

* item (integer)
 
If +ve, the internal item number starting at 1. If -ve, the external label of the item. Internal
numbers will be many times faster to process.

* ply\_id (integer)
 
If +ve, the internal ply index. If -ve, the external ply label. Internal
numbers will be many times faster to process. Set to zero if &lt;int\_pt&gt; is to be used instead.

* int\_pnt (optional) (integer)
 
Integration point in the range 1 - maxint, required if &lt;ply\_id&gt; is zero.

* state\_id (optional) (integer)
 
State number to be used instead of the current state

| Returns
<br>real<br>
Return type
<br>Number |
| --- |

| Example
<br><br><br>
```

// Return the beta angle in shell 1 for ply external label 13
var beta = GetElemBetaAngle(SHELL, 1, -13);

// Return the beta angle in shell 1 at integration point 7
var beta = GetElemBetaAngle(SHELL, 1, 0, 7);

```
<br><br> |
| --- |

* * *

| GetElemsAtNode(node*[integer]*, type\_code*[integer]*, state\_id (optional)*[integer]*) [static]
Description<br>Returns an object containing the number of elements of &lt;type&gt; at &lt;node&gt;, and also an array &lt;list[ ]&gt; of their internal indices.<br>If there are no elements of &lt;type&gt; at the node then false is returned. |
| --- |

#### Arguments

* node (integer)
 
The node at which to return the list of elements. If +ve, the internal node number starting at 1.
If -ve, the external node label. Internal numbers will be many times faster to process.

* type\_code (integer)
 
A valid element [type code](d3plot-sharedconstants-class.md#SharedConstants_Item_Type_constants) (SOLID etc.)

* state\_id (optional) (integer)
 
State number to be used instead of the current state

| Returns |
| --- |

Object with the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| list | array of integers | Internal element ids |
| nn | integer | Number of elements in list |

#### Return type

object

| Example
<br><br><br>
```

// Get a list of shell elements at node 5
if(a = GetElemsAtNode(5, SHELL))
{
    var nelems = a.nn;
    var e1 = a.list[0];
    var e2 = a.list[1];
}

```
<br><br> |
| --- |

* * *

| GetElemsInPart(part\_id*[integer]*, state\_id (optional)*[integer]*) [static]
Description<br>Returns an object containing the number of elements in part &lt;part\_id&gt;, the element type code, and also an array &lt;list[ ]&gt; of their internal indices.<br>If there are no elements in the part then false is returned. |
| --- |

#### Arguments

* part\_id (integer)
 
The part in which to return the list of elements. If +ve, the internal part number starting at 1.
If -ve, the external part label. Internal numbers will be many times faster to process.

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

// Get a list of elements in part 5
if(a = GetElemsInPart(5))
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

| GetTopology(type\_code*[integer]*, item*[integer]*, state\_id (optional)*[integer]*) [static]
Description<br>Returns the topology list for internal &lt;item&gt; of type &lt;type\_code&gt;. This should only be used for<br>element types which have nodal topologies. |
| --- |

#### Arguments

* type\_code (integer)
 
A valid element [type code](d3plot-sharedconstants-class.md#SharedConstants_Item_Type_constants) (SOLID etc.)

* item (integer)
 
If +ve, the internal item number starting at 1. If -ve, the external label of the item. Internal
numbers will be many times faster to process.

* state\_id (optional) (integer)
 
State number to be used instead of the current state

| Returns |
| --- |

Object with the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| nn | integer | Number of nodes in topology list |
| pid | integer | Internal part id for part-based elements, otherwise zero |
| top | array of integers | Internal node ids |

#### Return type

object

| Example
<br><br><br>
```

// Get the topology of internal shell 27
var a = GetTopology(SHELL, 27);

var nnodes = a.nn;
var n1 = a.top[0];
var n2 = a.top[1];
var pid = a.pid;

```
<br><br> |
| --- |

* * *