# Node class

The Node class gives you access to nodes in D3PLOT. [More...](d3plot-node-class.md#Node_details)

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

* [BlankAll](d3plot-node-class.md#Node::BlankAll)(window*[GraphicsWindow]*, model*[[Model](d3plot-model-class.md)]*)
* [BlankFlagged](d3plot-node-class.md#Node::BlankFlagged)(window*[GraphicsWindow]*, model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*)
* [First](d3plot-node-class.md#Node::First)(model*[[Model](d3plot-model-class.md)]*)
* [FlagAll](d3plot-node-class.md#Node::FlagAll)(model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*)
* [GetAll](d3plot-node-class.md#Node::GetAll)(model*[[Model](d3plot-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](d3plot-node-class.md#Node::GetFlagged)(model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*, property (optional)*[string]*)
* [GetFromID](d3plot-node-class.md#Node::GetFromID)(model*[[Model](d3plot-model-class.md)]*, label*[integer]*)
* [GetFromIndex](d3plot-node-class.md#Node::GetFromIndex)(model*[[Model](d3plot-model-class.md)]*, index*[integer]*)
* [GetMultipleData](d3plot-node-class.md#Node::GetMultipleData)(component*[constant]*, items*[array]*, options (optional)*[object]*)
* [Last](d3plot-node-class.md#Node::Last)(model*[[Model](d3plot-model-class.md)]*)
* [Pick](d3plot-node-class.md#Node::Pick)()
* [Select](d3plot-node-class.md#Node::Select)(flag*[Flag]*)
* [Total](d3plot-node-class.md#Node::Total)(model*[[Model](d3plot-model-class.md)]*)
* [UnblankAll](d3plot-node-class.md#Node::UnblankAll)(window*[GraphicsWindow]*, model*[[Model](d3plot-model-class.md)]*)
* [UnblankFlagged](d3plot-node-class.md#Node::UnblankFlagged)(window*[GraphicsWindow]*, model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*)
* [UnflagAll](d3plot-node-class.md#Node::UnflagAll)(model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*)

## Member functions

* [Acceleration](d3plot-node-class.md#Node::Acceleration)()
* [Blank](d3plot-node-class.md#Node::Blank)(window*[GraphicsWindow]*)
* [Blanked](d3plot-node-class.md#Node::Blanked)(window*[GraphicsWindow]*)
* [ClearFlag](d3plot-node-class.md#Node::ClearFlag)(flag*[Flag]*)
* [Coordinates](d3plot-node-class.md#Node::Coordinates)()
* [Displacement](d3plot-node-class.md#Node::Displacement)()
* [Elements](d3plot-node-class.md#Node::Elements)(type*[constant]*)
* [Flagged](d3plot-node-class.md#Node::Flagged)(flag*[Flag]*)
* [GetData](d3plot-node-class.md#Node::GetData)(component*[constant]*, options (optional)*[object]*)
* [Next](d3plot-node-class.md#Node::Next)()
* [Previous](d3plot-node-class.md#Node::Previous)()
* [SetFlag](d3plot-node-class.md#Node::SetFlag)(flag*[Flag]*)
* [Unblank](d3plot-node-class.md#Node::Unblank)(window*[GraphicsWindow]*)
* [Velocity](d3plot-node-class.md#Node::Velocity)()

## Node properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| data (read only) | real|array | Component data for a node passed as an argument to [GetMultipleData](d3plot-node-class.md#Node::GetMultipleData). Note that data will only exist for the instance of the node passed to [GetMultipleData](d3plot-node-class.md#Node::GetMultipleData). i.e. it is a local property stored on the specific instance. It is not stored in the D3PLOT database |
| include (read only) | integer | The include file number in the model that the node is in |
| index (read only) | integer | The internal index for the node in D3PLOT (starting at 0) |
| label (read only) | integer | The Ansys LS-DYNA label for the node |
| model (read only) | Model | The [Model](d3plot-model-class.md) that the node is in |
| type (read only) | constant | The type for the node (will be [Type.NODE](d3plot-type-class.md#Type.NODE)) |

| Detailed Description<br>The Node class allows you to inspect nodes in a model.<br>See the documentation below for more details. |
| --- |

| Details of functions 
Acceleration()

Description<br>Returns the acceleration for the node |
| --- |

#### Arguments

No arguments

| Returns
<br>Array containing the nodal acceleration [Ax, Ay, Az] (or null if the value cannot be calculated)<br>
Return type
<br>array |
| --- |

| Example
<br>To return the acceleration of node n:<br>
```
var acc = n.Acceleration();
if (acc !== null) do_something...
```
 |
| --- |

* * *

| Blank(window*[GraphicsWindow]*)

Description<br>Blanks the node in a graphics window |
| --- |

#### Arguments

* window (GraphicsWindow)
 
[GraphicsWindow](d3plot-graphicswindow-class.md)) to blank the node in

| Returns
<br>No return value |
| --- |

| Example
<br>To blank node n in graphics window g:<br>
```
n.Blank(g);
```
 |
| --- |

* * *

| BlankAll(window*[GraphicsWindow]*, model*[[Model](d3plot-model-class.md)]*) [static]
Description<br>Blanks all of the nodes in the model |
| --- |

#### Arguments

* window (GraphicsWindow)
 
[GraphicsWindow](d3plot-graphicswindow-class.md)) to blank the nodes in

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) that all the nodes will be blanked in

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the nodes in model m, in graphics window gw:<br>
```
Node.BlankAll(gw, m);
```
 |
| --- |

* * *

| BlankFlagged(window*[GraphicsWindow]*, model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*) [static]
Description<br>Blanks all of the nodes in the model flagged with a defined flag |
| --- |

#### Arguments

* window (GraphicsWindow)
 
[GraphicsWindow](d3plot-graphicswindow-class.md)) to blank the nodes in

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) that the flagged nodes will be blanked in

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) set on the nodes to blank

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the nodes flagged with flag f in model m, in graphics window gw:<br>
```
Node.BlankFlagged(gw, m, f);
```
 |
| --- |

* * *

| Blanked(window*[GraphicsWindow]*)

Description<br>Checks if the node is blanked in a graphics window or not |
| --- |

#### Arguments

* window (GraphicsWindow)
 
[GraphicsWindow](d3plot-graphicswindow-class.md)) in which to check if the node is blanked

| Returns
<br>true if blanked, false if not<br>
Return type
<br>boolean |
| --- |

| Example
<br>To check if node n is blanked in graphics window g:<br>
```
if (n.Blanked(g) ) do_something...
```
 |
| --- |

* * *

| ClearFlag(flag*[Flag]*)

Description<br>Clears a flag on a node |
| --- |

#### Arguments

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) to clear on the node

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f on node n:<br>
```
n.ClearFlag();
```
 |
| --- |

* * *

| Coordinates()

Description<br>Returns the coordinates for the node |
| --- |

#### Arguments

No arguments

| Returns
<br>Array containing the nodal coordinates [Cx, Cy, Cz] (or null if the value cannot be calculated)<br>
Return type
<br>array |
| --- |

| Example
<br>To return the coordinates of node n:<br>
```
var coords = n.Coordinates();
if (coords !== null) do_something...
```
 |
| --- |

* * *

| Displacement()

Description<br>Returns the displacement for the node |
| --- |

#### Arguments

No arguments

| Returns
<br>Array containing the nodal displacement [Dx, Dy, Dz] (or null if the value cannot be calculated)<br>
Return type
<br>array |
| --- |

| Example
<br>To return the displacement of node n:<br>
```
var disp = n.Displacement();
if (disp !== null) do_something...
```
 |
| --- |

* * *

| Elements(type*[constant]*)

Description<br>Returns the elements using this node |
| --- |

#### Arguments

* type (constant)
 
The type of elements. Either [Type.BEAM](d3plot-type-class.md#Type.BEAM), [Type.SHELL](d3plot-type-class.md#Type.SHELL), [Type.SOLID](d3plot-type-class.md#Type.SOLID) or [Type.TSHELL](d3plot-type-class.md#Type.TSHELL)

| Returns
<br>Array containing the elements or null if there are no elements<br>
Return type
<br>array |
| --- |

| Example
<br>To return the shell elements using node n:<br>
```
var shells = n.Elements(Type.SHELL);
```
 |
| --- |

* * *

| First(model*[[Model](d3plot-model-class.md)]*) [static]
Description<br>Returns the first node in the model (or null if there are no nodes in the model) |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) to get first node in

| Returns
<br>Node object<br>
Return type
<br>Node |
| --- |

| Example
<br>To get the first node in model m:<br>
```
var n = Node.First(m);
```
 |
| --- |

* * *

| FlagAll(model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*) [static]
Description<br>Flags all of the nodes in the model with a defined flag |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) that all the nodes will be flagged in

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) to set on the nodes

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the nodes with flag f in model m:<br>
```
Node.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[Flag]*)

Description<br>Checks if the node is flagged or not |
| --- |

#### Arguments

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) to test on the node

| Returns
<br>true if flagged, false if not<br>
Return type
<br>boolean |
| --- |

| Example
<br>To check if node n has flag f set on it:<br>
```
if (n.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| GetAll(model*[[Model](d3plot-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Node objects or properties for all of the nodes in the model. If the optional property argument is not given then an array of Node objects is returned. If the property argument is given, that property value for each node is returned in the array instead of a Node object |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) that all the nodes are in

* property (optional) (string)
 
Name for property to get for all nodes in the model

| Returns
<br>Array of [Node](d3plot-node-class.md) objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To get all of the nodes in model m:<br>
```
var n = Node.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'label' for a node) for each node in model m:<br>
```
var a = Node.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetData(component*[constant]*, options (optional)*[object]*)

Description<br>Returns the value for a data component.<br> Also see [GetMultipleData](d3plot-node-class.md#Node::GetMultipleData) |
| --- |

#### Arguments

* component (constant)
 
[Component constant](d3plot-component-class.md#Component_constants) to get data for

* options (optional) (object)

Object containing options for getting data. Can be any of: 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| extra | integer | The extra data component number if component [Component.SOX](d3plot-component-class.md#Component.SOX) for solids, [Component.BMX](d3plot-component-class.md#Component.BMX) for beams or [Component.SHX](d3plot-component-class.md#Component.SHX) for shells and thick shells |
| ip | integer | Integration point number to get the data at (ip &gt;= 1 or one of the constants [Constant.TOP](d3plot-constant-class.md#Constant.TOP), [Constant.MIDDLE](d3plot-constant-class.md#Constant.MIDDLE) or [Constant.BOTTOM](d3plot-constant-class.md#Constant.BOTTOM)). If the integration point is not defined it will use the integration point defined on the current GUI "data" panel, which defaults to the middle surface for shells, thick shells, and solids, and Mag All for beams, but may vary if changed by an interactive user. If consistent output from a script is required, independent of any prior interactive activity, an explicit integration point or surface should be defined |
| op | integer | On plane integration point number for shells and thick shells (op &gt;= 1 [default]) |
| referenceFrame | constant | The frame of reference to return values in. Either [Constant.GLOBAL](d3plot-constant-class.md#Constant.GLOBAL) (default), [Constant.LOCAL](d3plot-constant-class.md#Constant.LOCAL), [Constant.CYLINDRICAL](d3plot-constant-class.md#Constant.CYLINDRICAL), [Constant.USER_DEFINED](d3plot-constant-class.md#Constant.USER_DEFINED) or [Constant.MATERIAL](d3plot-constant-class.md#Constant.MATERIAL). This is only necessary for directional components (eg X stress) and then only when something other than the default [Constant.GLOBAL](d3plot-constant-class.md#Constant.GLOBAL) coordinate system is to be used |
| user | integer | The user-defined component number if component [Component.UNOS](d3plot-component-class.md#Component.UNOS), [Component.UNOV](d3plot-component-class.md#Component.UNOV), [Component.USSS](d3plot-component-class.md#Component.USSS), [Component.USST](d3plot-component-class.md#Component.USST), [Component.UBMS](d3plot-component-class.md#Component.UBMS) or [Component.UBMV](d3plot-component-class.md#Component.UBMV) |

| Returns
<br>Number if a scalar component, array if a vector or tensor component (or null if the value cannot be calculated because it's not available in the model).<br> If requesting an invalid component it will throw an error (e.g. Component.AREA of a node).<br>
Return type
<br>real|array |
| --- |

| Example
<br>To calculate a component and check it has been calculated (note that in the example, the argument extra is optional):<br>
```
var value = n.GetData(component, {extra: 1});
if (value !== null) do_something...
```
 |
| --- |

* * *

| GetFlagged(model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*, property (optional)*[string]*) [static]
Description<br>Gets all of the nodes in the model flagged with a defined flag. If the optional property argument is not given then an array of Node objects is returned. If the property argument is given, that property value for each node is returned in the array instead of a Node object |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) that the flagged nodes are in

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) set on the nodes to get

* property (optional) (string)
 
Name for property to get for all flagged nodes in the model

| Returns
<br>Array of [Node](d3plot-node-class.md) objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To get all of the nodes flagged with flag f in model m:<br>
```
Node.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'label' for a node) for all nodes flagged with flag f in model m:<br>
```
var a = Node.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(model*[[Model](d3plot-model-class.md)]*, label*[integer]*) [static]
Description<br>Returns the Node object for node in model with label (or null if it does not exist) |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) to get node in

* label (integer)
 
The Ansys LS-DYNA label for the node in the model

| Returns
<br>Node object<br>
Return type
<br>Node |
| --- |

| Example
<br>To get the node in model m with label 1000:<br>
```
var n = Node.GetFromID(m, 1000);
```
 |
| --- |

* * *

| GetFromIndex(model*[[Model](d3plot-model-class.md)]*, index*[integer]*) [static]
Description<br>Returns the Node object for node in model with index (or null if it does not exist) |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) to get node in

* index (integer)
 
The D3PLOT internal index in the model for node, starting at 0.

| Returns
<br>Node object<br>
Return type
<br>Node |
| --- |

| Example
<br>To get the 51st node in model m:<br>
```
var n = Node.GetFromIndex(m, 50);
```
 |
| --- |

* * *

| GetMultipleData(component*[constant]*, items*[array]*, options (optional)*[object]*) [static]
Description<br>Returns the value for a data component for multiple nodes. For each node a local property called data will be created containing a number if a scalar component, or an array if a vector or tensor component (or null if the value cannot be calculated). The data is also returned as an object.<br> Also see [GetData](d3plot-node-class.md#Node::GetData) |
| --- |

#### Arguments

* component (constant)
 
[Component constant](d3plot-component-class.md#Component_constants) to get data for

* items (array)
 
Array of [Node](d3plot-node-class.md) objects to get the data for. All of the nodes must be in the same model.

* options (optional) (object)

Object containing options for getting data. Can be any of: 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| extra | integer | The extra data component number if component [Component.SOX](d3plot-component-class.md#Component.SOX) for solids, [Component.BMX](d3plot-component-class.md#Component.BMX) for beams or [Component.SHX](d3plot-component-class.md#Component.SHX) for shells and thick shells |
| ip | integer | Integration point number to get the data at (ip &gt;= 1 or one of the constants [Constant.TOP](d3plot-constant-class.md#Constant.TOP), [Constant.MIDDLE](d3plot-constant-class.md#Constant.MIDDLE) or [Constant.BOTTOM](d3plot-constant-class.md#Constant.BOTTOM)) |
| op | integer | On plane integration point number for shells and thick shells (op &gt;= 1 [default]) |
| referenceFrame | constant | The frame of reference to return values in. Either [Constant.GLOBAL](d3plot-constant-class.md#Constant.GLOBAL) (default), [Constant.LOCAL](d3plot-constant-class.md#Constant.LOCAL), [Constant.CYLINDRICAL](d3plot-constant-class.md#Constant.CYLINDRICAL), [Constant.USER_DEFINED](d3plot-constant-class.md#Constant.USER_DEFINED) or [Constant.MATERIAL](d3plot-constant-class.md#Constant.MATERIAL). This is only necessary for directional components (eg X stress) and then only when something other than the default [Constant.GLOBAL](d3plot-constant-class.md#Constant.GLOBAL) coordinate system is to be used |
| user | integer | The user-defined component number if component [Component.UNOS](d3plot-component-class.md#Component.UNOS), [Component.UNOV](d3plot-component-class.md#Component.UNOV), [Component.USSS](d3plot-component-class.md#Component.USSS), [Component.USST](d3plot-component-class.md#Component.USST), [Component.UBMS](d3plot-component-class.md#Component.UBMS) or [Component.UBMV](d3plot-component-class.md#Component.UBMV) |

| Returns
<br>Object containing the data. A property is created in the object for each node with the label. The value of the property is a number if a scalar component or an array if a vector or tensor component (or null if the value cannot be calculated)<br>
Return type
<br>object |
| --- |

| Example
<br>To calculate a component for nodes in array items and use the data property (note that in the example, the argument extra is optional):<br>
```
Node.GetMultipleData(component, items, {extra: 1});
for (i=0; i<items.length; i++)
{
    if (items[i].data !== null) do_something...
}
```
<br>To calculate a component for nodes in array items and use the return value (note that in the example, the argument extra is optional):<br>
```
var data = Node.GetMultipleData(component, items, {extra: 1});
for (d in data)
{
    Message("Label is " + d);
    if (data[d] !== null) do_something...
}
```
 |
| --- |

* * *

| Last(model*[[Model](d3plot-model-class.md)]*) [static]
Description<br>Returns the last node in the model (or null if there are no nodes in the model) |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) to get last node in

| Returns
<br>Node object<br>
Return type
<br>Node |
| --- |

| Example
<br>To get the last node in model m:<br>
```
var n = Node.Last(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next node in the model (or null if there is not one) |
| --- |

#### Arguments

No arguments

| Returns
<br>Node object<br>
Return type
<br>Node |
| --- |

| Example
<br>To get the next node after node n:<br>
```
n = n.Next();
```
 |
| --- |

* * *

| Pick() [static]
Description<br>Allows the user to pick a node from the screen |
| --- |

#### Arguments

No arguments

| Returns
<br>Node object or null if cancelled<br>
Return type
<br>Node |
| --- |

| Example
<br>To pick a node:<br>
```
var n = Node.Pick();
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous node in the model (or null if there is not one) |
| --- |

#### Arguments

No arguments

| Returns
<br>Node object<br>
Return type
<br>Node |
| --- |

| Example
<br>To get the previous node before node n:<br>
```
n = n.Previous();
```
 |
| --- |

* * *

| Select(flag*[Flag]*) [static]
Description<br>Selects nodes using an object menu |
| --- |

#### Arguments

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) to use when selecting nodes

| Returns
<br>The number of nodes selected or null if menu cancelled<br>
Return type
<br>integer |
| --- |

| Example
<br>To select nodes, flagging those selected with flag f:<br>
```
var total = Node.Select(f);
```
 |
| --- |

* * *

| SetFlag(flag*[Flag]*)

Description<br>Sets a flag on a node |
| --- |

#### Arguments

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) to set on the node

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f on node n:<br>
```
n.SetFlag(f);
```
 |
| --- |

* * *

| Total(model*[[Model](d3plot-model-class.md)]*) [static]
Description<br>Returns the total number of nodes in the model |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) to get total in

| Returns
<br>The number of nodes<br>
Return type
<br>integer |
| --- |

| Example
<br>To get the number of nodes in model m:<br>
```
var total = Node.Total(m);
```
 |
| --- |

* * *

| Unblank(window*[GraphicsWindow]*)

Description<br>Unblanks the node in a graphics window |
| --- |

#### Arguments

* window (GraphicsWindow)
 
[GraphicsWindow](d3plot-graphicswindow-class.md)) to unblank the node in

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank node n in graphics window g:<br>
```
n.Unblank(g);
```
 |
| --- |

* * *

| UnblankAll(window*[GraphicsWindow]*, model*[[Model](d3plot-model-class.md)]*) [static]
Description<br>Unblanks all of the nodes in the model |
| --- |

#### Arguments

* window (GraphicsWindow)
 
[GraphicsWindow](d3plot-graphicswindow-class.md)) to unblank the nodes in

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) that all the nodes will be unblanked in

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the nodes in model m, in graphics window gw:<br>
```
Node.UnblankAll(gw, m);
```
 |
| --- |

* * *

| UnblankFlagged(window*[GraphicsWindow]*, model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*) [static]
Description<br>Unblanks all of the nodes in the model flagged with a defined flag |
| --- |

#### Arguments

* window (GraphicsWindow)
 
[GraphicsWindow](d3plot-graphicswindow-class.md)) to unblank the nodes in

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) that the flagged nodes will be unblanked in

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) set on the nodes to unblank

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the nodes flagged with flag f in model m, in graphics window gw:<br>
```
Node.UnblankFlagged(gw, m, f);
```
 |
| --- |

* * *

| UnflagAll(model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*) [static]
Description<br>Unsets a defined flag on all of the nodes in the model |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) that the defined flag for all nodes will be unset in

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) to unset on the nodes

| Returns
<br>No return value |
| --- |

| Example
<br>To unset flag f on all of the nodes in model m:<br>
```
Node.UnflagAll(m, f);
```
 |
| --- |

* * *

| Velocity()

Description<br>Returns the velocity for the node |
| --- |

#### Arguments

No arguments

| Returns
<br>Array containing the nodal velocity [Vx, Vy, Vz] (or null if the value cannot be calculated)<br>
Return type
<br>array |
| --- |

| Example
<br>To return the velocity of node n:<br>
```
var vel = n.Velocity();
if (disp !== null) do_something...
```
 |
| --- |

* * *