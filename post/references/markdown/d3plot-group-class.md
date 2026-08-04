# Group class

The Group class gives you access to groups in D3PLOT. [More...](d3plot-group-class.md#Group_details)

The D3PLOT JavaScript API provides many class constants, properties and methods. For Arup to
be able to extend and enhance the API in the future any constant, property or method names beginning with a lowercase
or uppercase letter are reserved.

If you need to add your own properties or methods to one of the existing classes then to avoid any potential future conflict you
should ensure that the name begins with either an underscore (\_) or a dollar sign ($) or the name is prefixed with your
own unique identifier.

For example if company 'ABC' need to add a property called 'example' then to avoid any potential future conflict use one of:

* \_example
* $example
* ABC\_example

## Class functions

* [First](d3plot-group-class.md#Group::First)(model*[[Model](d3plot-model-class.md)]*)
* [GetFromID](d3plot-group-class.md#Group::GetFromID)(model*[[Model](d3plot-model-class.md)]*, label*[integer]*)
* [Last](d3plot-group-class.md#Group::Last)(model*[[Model](d3plot-model-class.md)]*)
* [Total](d3plot-group-class.md#Group::Total)(model*[[Model](d3plot-model-class.md)]*)

## Member functions

* [AddFlagged](d3plot-group-class.md#Group::AddFlagged)(flag*[Flag]*)
* [Empty](d3plot-group-class.md#Group::Empty)()
* [FlagContents](d3plot-group-class.md#Group::FlagContents)(flag*[Flag]*)
* [Next](d3plot-group-class.md#Group::Next)()
* [Previous](d3plot-group-class.md#Group::Previous)()

## Group properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| label (read only) | integer | The group label |
| model (read only) | Model | The [Model](d3plot-model-class.md) that the group is in |
| title | string | The group title |
| type (read only) | constant | The type for the group (will be [Type.GROUP](d3plot-type-class.md#Type.GROUP)) |

| Detailed Description<br>The Group class allows you to inspect groups in a model.<br>See the documentation below for more details. |
| --- |

| Constructor
new Group(model*[[Model](d3plot-model-class.md) object]*)

Description<br>Creates a new group in D3PLOT |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md) object)
 
The model to create the group in

| Returns
<br>Group object<br>
Return type
<br>Group |
| --- |

| Example
<br>To create a group for [Model](d3plot-model-class.md) m in D3PLOT<br>
```
var g = new Group(m);
```
 |
| --- |

| Details of functions 
AddFlagged(flag*[Flag]*)

Description<br>Adds flagged items to the contents of the group |
| --- |

#### Arguments

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) set on items to add to the group

| Returns
<br>No return value |
| --- |

| Example
<br>To add items flagged with flag f to group g:<br>
```
g.AddFlagged(f);
```
 |
| --- |

* * *

| Empty()

Description<br>Empties the group (removes everything from the group) |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To empty group g:<br>
```
g.Empty();
```
 |
| --- |

* * *

| First(model*[[Model](d3plot-model-class.md)]*) [static]
Description<br>Returns the first group in the model (or null if there are no groups) |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) to get first group in

| Returns
<br>Group object<br>
Return type
<br>Group |
| --- |

| Example
<br>To get the first group in model m:<br>
```
var g = Group.First(m);
```
 |
| --- |

* * *

| FlagContents(flag*[Flag]*)

Description<br>Flags the contents of the group |
| --- |

#### Arguments

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) to set for the group contents

| Returns
<br>No return value |
| --- |

| Example
<br>To flag the contents of group g with flag f:<br>
```
g.FlagContents(f);
```
 |
| --- |

* * *

| GetFromID(model*[[Model](d3plot-model-class.md)]*, label*[integer]*) [static]
Description<br>Returns the Group object for group in model with label (or null if it does not exist) |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) to get group in

* label (integer)
 
The label for the group in the model

| Returns
<br>Group object<br>
Return type
<br>Group |
| --- |

| Example
<br>To get the group in model m with label 2:<br>
```
var g = Group.GetFromID(m, 2);
```
 |
| --- |

* * *

| Last(model*[[Model](d3plot-model-class.md)]*) [static]
Description<br>Returns the last group in the model (or null if there are no groups) |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) to get last group in

| Returns
<br>Group object<br>
Return type
<br>Group |
| --- |

| Example
<br>To get the last group in model m:<br>
```
var g = Group.Last(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next group in the model (or null if there is not one) |
| --- |

#### Arguments

No arguments

| Returns
<br>Group object<br>
Return type
<br>Group |
| --- |

| Example
<br>To get the next group after group g:<br>
```
g = g.Next();
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous group in the model (or null if there is not one) |
| --- |

#### Arguments

No arguments

| Returns
<br>Group object<br>
Return type
<br>Group |
| --- |

| Example
<br>To get the previous group before group g:<br>
```
g = g.Previous();
```
 |
| --- |

* * *

| Total(model*[[Model](d3plot-model-class.md)]*) [static]
Description<br>Returns the total number of groups in a model |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) to get group in

| Returns
<br>The number of groups<br>
Return type
<br>integer |
| --- |

| Example
<br>To get the number of groups in model m:<br>
```
var total = Group.Total(m);
```
 |
| --- |

* * *