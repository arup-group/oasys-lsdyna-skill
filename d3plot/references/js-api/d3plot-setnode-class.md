# SetNode class

The SetNode class gives you access to node sets in D3PLOT. [More...](d3plot-setnode-class.md#SetNode_details)

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

* [First](d3plot-setnode-class.md#SetNode::First)(model*[[Model](d3plot-model-class.md)]*)
* [FlagAll](d3plot-setnode-class.md#SetNode::FlagAll)(model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*)
* [GetAll](d3plot-setnode-class.md#SetNode::GetAll)(model*[[Model](d3plot-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](d3plot-setnode-class.md#SetNode::GetFlagged)(model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*, property (optional)*[string]*)
* [GetFromID](d3plot-setnode-class.md#SetNode::GetFromID)(model*[[Model](d3plot-model-class.md)]*, label*[integer]*)
* [GetFromIndex](d3plot-setnode-class.md#SetNode::GetFromIndex)(model*[[Model](d3plot-model-class.md)]*, index*[integer]*)
* [Last](d3plot-setnode-class.md#SetNode::Last)(model*[[Model](d3plot-model-class.md)]*)
* [Total](d3plot-setnode-class.md#SetNode::Total)(model*[[Model](d3plot-model-class.md)]*)
* [UnflagAll](d3plot-setnode-class.md#SetNode::UnflagAll)(model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*)

## Member functions

* [AllItems](d3plot-setnode-class.md#SetNode::AllItems)()
* [ClearFlag](d3plot-setnode-class.md#SetNode::ClearFlag)(flag*[Flag]*)
* [Flagged](d3plot-setnode-class.md#SetNode::Flagged)(flag*[Flag]*)
* [Item](d3plot-setnode-class.md#SetNode::Item)(index*[integer]*)
* [Next](d3plot-setnode-class.md#SetNode::Next)()
* [Previous](d3plot-setnode-class.md#SetNode::Previous)()
* [SetFlag](d3plot-setnode-class.md#SetNode::SetFlag)(flag*[Flag]*)

## SetNode properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| include (read only) | integer | The include file number in the model that the node set is in |
| index (read only) | integer | The internal index for the node set in D3PLOT (starting at 0) |
| label (read only) | integer | The Ansys LS-DYNA label for the node set |
| model (read only) | Model | The [Model](d3plot-model-class.md) that the node set is in |
| title (read only) | string | The title for the node set (or null if no title). This is only available if there is a ztf file for the model. If not null will be returned. |
| total (read only) | integer | The total number of node items in the node set |
| type (read only) | constant | The type for the node set (will be [Type.SET_NODE](d3plot-type-class.md#Type.SET_NODE)) |

| Detailed Description<br>The SetNode class allows you to view sets in D3PLOT. There are various methods and properties available. This class requires a ztf file to be present for the model. See the documentation below for more details. |
| --- |

| Details of functions 
AllItems()

Description<br>Returns all of the node items for the node set in the model |
| --- |

#### Arguments

No arguments

| Returns
<br>array of Node objects<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the node items in node set s:<br>
```
var items = s.AllItems();
```
 |
| --- |

* * *

| ClearFlag(flag*[Flag]*)

Description<br>Clears a flag on a node set |
| --- |

#### Arguments

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) to clear on the node set

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f on node set s:<br>
```
s.ClearFlag();
```
 |
| --- |

* * *

| First(model*[[Model](d3plot-model-class.md)]*) [static]
Description<br>Returns the first node set in the model (or null if there are no node sets in the model) |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) to get first node set in

| Returns
<br>SetNode object<br>
Return type
<br>SetNode |
| --- |

| Example
<br>To get the first node set in model m:<br>
```
var s = SetNode.First(m);
```
 |
| --- |

* * *

| FlagAll(model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*) [static]
Description<br>Flags all of the node sets in the model with a defined flag |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) that all the node sets will be flagged in

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) to set on the node sets

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the node sets with flag f in model m:<br>
```
SetNode.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[Flag]*)

Description<br>Checks if the node set is flagged or not |
| --- |

#### Arguments

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) to test on the node set

| Returns
<br>true if flagged, false if not<br>
Return type
<br>boolean |
| --- |

| Example
<br>To check if node set s has flag f set on it:<br>
```
if (s.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| GetAll(model*[[Model](d3plot-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of SetNode objects or properties for all of the node sets in the model. If the optional property argument is not given then an array of SetNode objects is returned. If the property argument is given, that property value for each node set is returned in the array instead of a SetNode object |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) that all the node sets are in

* property (optional) (string)
 
Name for property to get for all node sets in the model

| Returns
<br>Array of [SetNode](d3plot-setnode-class.md) objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To get all of the node sets in model m:<br>
```
var s = SetNode.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'label' for a node set) for each node set in model m:<br>
```
var a = SetNode.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetFlagged(model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*, property (optional)*[string]*) [static]
Description<br>Gets all of the node sets in the model flagged with a defined flag. If the optional property argument is not given then an array of SetNode objects is returned. If the property argument is given, that property value for each node set is returned in the array instead of a SetNode object |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) that the flagged node sets are in

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) set on the node sets to get

* property (optional) (string)
 
Name for property to get for all flagged node sets in the model

| Returns
<br>Array of [SetNode](d3plot-setnode-class.md) objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To get all of the node sets flagged with flag f in model m:<br>
```
SetNode.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'label' for a node) for all node sets flagged with flag f in model m:<br>
```
var a = SetNode.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(model*[[Model](d3plot-model-class.md)]*, label*[integer]*) [static]
Description<br>Returns the SetNode object for node set in model with label (or null if it does not exist) |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) to get node set in

* label (integer)
 
The Ansys LS-DYNA label for the node set in the model

| Returns
<br>SetNode object<br>
Return type
<br>SetNode |
| --- |

| Example
<br>To get the node set in model m with label 1000:<br>
```
var s = SetNode.GetFromID(m, 1000);
```
 |
| --- |

* * *

| GetFromIndex(model*[[Model](d3plot-model-class.md)]*, index*[integer]*) [static]
Description<br>Returns the SetNode object for node set in model with index (or null if it does not exist) |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) to get node set in

* index (integer)
 
The D3PLOT internal index in the model for node set, starting at 0.

| Returns
<br>SetNode object<br>
Return type
<br>SetNode |
| --- |

| Example
<br>To get the 51st node set in model m:<br>
```
var s = SetNode.GetFromIndex(m, 50);
```
 |
| --- |

* * *

| Item(index*[integer]*)

Description<br>Returns a node item from the node set in the model |
| --- |

#### Arguments

* index (integer)
 
The index in the node set to get the node from (0 &lt;= index &lt; [total](d3plot-setnode-class.md#total))

| Returns
<br>Node object<br>
Return type
<br>Node |
| --- |

| Example
<br>To get the 10th node in node set s:<br>
```
var items = s.Item(9);
```
 |
| --- |

* * *

| Last(model*[[Model](d3plot-model-class.md)]*) [static]
Description<br>Returns the last node set in the model (or null if there are no node sets in the model) |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) to get last node set in

| Returns
<br>SetNode object<br>
Return type
<br>SetNode |
| --- |

| Example
<br>To get the last node set in model m:<br>
```
var s = SetNode.Last(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next node set in the model (or null if there is not one) |
| --- |

#### Arguments

No arguments

| Returns
<br>SetNode object<br>
Return type
<br>SetNode |
| --- |

| Example
<br>To get the next node set after node set s:<br>
```
s = s.Next();
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous node set in the model (or null if there is not one) |
| --- |

#### Arguments

No arguments

| Returns
<br>SetNode object<br>
Return type
<br>SetNode |
| --- |

| Example
<br>To get the previous node set before node set s:<br>
```
s = s.Previous();
```
 |
| --- |

* * *

| SetFlag(flag*[Flag]*)

Description<br>Sets a flag on a node set |
| --- |

#### Arguments

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) to set on the node set

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f on node set s:<br>
```
s.SetFlag(f);
```
 |
| --- |

* * *

| Total(model*[[Model](d3plot-model-class.md)]*) [static]
Description<br>Returns the total number of node sets in the model |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) to get total in

| Returns
<br>The number of node sets<br>
Return type
<br>integer |
| --- |

| Example
<br>To get the number of node sets in model m:<br>
```
var total = SetNode.Total(m);
```
 |
| --- |

* * *

| UnflagAll(model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*) [static]
Description<br>Unsets a defined flag on all of the node sets in the model |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) that the defined flag for all node sets will be unset in

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) to unset on the node sets

| Returns
<br>No return value |
| --- |

| Example
<br>To unset flag f on all of the node sets in model m:<br>
```
SetNode.UnflagAll(m, f);
```
 |
| --- |

* * *