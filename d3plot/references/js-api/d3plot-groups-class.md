# Groups

Functions and constants relating to Groups

## Functions

* [GetGroupInfo](d3plot-groups-class.md#Groups::GetGroupInfo)(group\_id*[integer]*)

| Details of functions 
GetGroupInfo(group\_id*[integer]*) [static]
Description<br>Returns information about a group in the current model |
| --- |

#### Arguments

* group\_id (integer)
 
Group number

| Returns |
| --- |

Object with the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| label | integer | The label of the group |
| name | string | The name of the group |

#### Return type

object

| Example
<br><br><br>
```

// Print the name of the first group in the current model
var info = GetGroupInfo(1);
Print("Group name = " + info.name + "\n");

```
<br><br> |
| --- |

* * *