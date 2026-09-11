# Includes

Functions and constants relating to Includes

## Functions

* [GetIncludeInfo](d3plot-includes-class.md#Includes::GetIncludeInfo)(include\_id*[integer]*)

| Details of functions 
GetIncludeInfo(include\_id*[integer]*) [static]
Description<br>Returns information about an include file in the current model |
| --- |

#### Arguments

* include\_id (integer)
 
Include number

| Returns |
| --- |

Object with the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| label | integer | The label of the include file |
| name | string | The name of the include file |
| parent | integer | The parent include file (0 if main file) |

#### Return type

object

| Example
<br><br><br>
```

// Print the name of the first include file in the current model
var info = GetIncludeInfo(1);
Print("Include name = " + info.name + "\n");

```
<br><br> |
| --- |

* * *