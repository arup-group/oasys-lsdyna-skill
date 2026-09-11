# Labels

Functions and constants relating to Labels

## Functions

* [GetLabel](d3plot-labels-class.md#Labels::GetLabel)(type\_code*[integer]*, item*[integer]*, state\_id (optional)*[integer]*)

| Details of functions 
GetLabel(type\_code*[integer]*, item*[integer]*, state\_id (optional)*[integer]*) [static]
Description<br>Returns the external label of internal &lt;item&gt; of type &lt;type\_code&gt; |
| --- |

#### Arguments

* type\_code (integer)
 
A valid [type code](d3plot-sharedconstants-class.md#SharedConstants_Item_Type_constants) (e.g. NODE, SOLID, SHELL)

* item (integer)
 
The internal number starting from 1

* state\_id (optional) (integer)
 
State number to use instead of the current state

| Returns
<br>integer<br>
Return type
<br>Number |
| --- |

| Example
<br><br><br>
```

// Get the label of the 27th internal node
var label = GetLabel(NODE, 27);

```
<br><br> |
| --- |

* * *