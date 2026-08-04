# Models

Functions and constants relating to Models

## Functions

* [GetModelInfo](d3plot-models-class.md#Models::GetModelInfo)(model\_id (optional)*[integer]*, family\_id (optional)*[integer]*)
* [ModelExists](d3plot-models-class.md#Models::ModelExists)(model\_id*[integer]*)
* [SetCurrentModel](d3plot-models-class.md#Models::SetCurrentModel)(model\_id*[integer]*)

| Details of functions 
GetModelInfo(model\_id (optional)*[integer]*, family\_id (optional)*[integer]*) [static]
Description<br><br><br><br>Returns information about filenames in the current model, or in model\_id if specified.<br>It is an error to define model\_id that is not currently in use.<br>
<br>**Notes**<br>
<br>The vast majority of analyses do not use adaptive remeshing and the family\_id argument can be ignored.<br>When it is given:<br>
<br>Family id 0 is the base analysis<br>
<br>Family id 1 is the first remesh, ie name\_aa<br>
<br>... and so on |
| --- |

#### Arguments

* model\_id (optional) (integer)
 
Model number. The current model is used if unspecified or zero

* family\_id (optional) (integer)
 
Family number (starting from zero). The family number of an adaptive remesh analysis

| Returns |
| --- |

Object with the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| ctf\_name | string | the full name, including the pathname, of the contact force CTF file (intfor) |
| num\_families | integer | the number of adaptive remesh families in the file sequence. Will be one for a normal non-adaptive analysis |
| num\_states | integer | the number of complete states in the file sequence |
| op2\_name | string | the full name, including the pathname, of the Nastran OP2 file |
| pp\_name | string | the full name, including the pathname, of the LS-PREPOST database file |
| ptf\_name | string | the full name, including the pathname, of the complete state PTF/d3plot file |
| xtf\_name | string | the full name, including the pathname, of the extra database XTF file |
| ztf\_name | string | the full name, including the pathname, of the extra database ZTF file |

#### Return type

object

| Example
<br><br><br>
```

// Print the name of the PTF (d3plot) file of the current model and the number of states
var info = GetModelInfo();
Print("PTF filename = " + info.ptf_name + "\n");
Print("Number of states = " + info.num_states + "\n");

// Print the name of the 3rd adaptive remesh PTF file in model 2
var info = GetModelInfo(2, 3);
Print("PTF filename = " + info.ptf_name + "\n");

```
<br><br> |
| --- |

* * *

| ModelExists(model\_id*[integer]*) [static]
Description<br><br><br><br>Checks whether a model exists in the database |
| --- |

#### Arguments

* model\_id (integer)
 
Model number to check

| Returns
<br>boolean<br>
Return type
<br>Boolean |
| --- |

| Example
<br><br><br>
```

// Check if model #2 exists
ModelExists(2);

```
<br><br> |
| --- |

* * *

| SetCurrentModel(model\_id*[integer]*) [static]
Description<br><br><br><br>Sets the current model in the JavaScript interface to model\_id<br>
<br>At the start of script execution the current model is automatically set to the first active model in the database |
| --- |

#### Arguments

* model\_id (integer)
 
Model number to be made current

| Returns
<br>boolean<br>
Return type
<br>Boolean |
| --- |

| Example
<br><br><br>
```

// Make model #2 current
SetCurrentModel(2);

```
<br><br> |
| --- |

* * *