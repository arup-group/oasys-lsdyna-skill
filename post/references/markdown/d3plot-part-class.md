# Part class

The Part class gives you access to parts in D3PLOT. [More...](d3plot-part-class.md#Part_details)

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

* [BlankAll](d3plot-part-class.md#Part::BlankAll)(window*[GraphicsWindow]*, model*[[Model](d3plot-model-class.md)]*)
* [BlankFlagged](d3plot-part-class.md#Part::BlankFlagged)(window*[GraphicsWindow]*, model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*)
* [First](d3plot-part-class.md#Part::First)(model*[[Model](d3plot-model-class.md)]*)
* [FlagAll](d3plot-part-class.md#Part::FlagAll)(model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*)
* [GetAll](d3plot-part-class.md#Part::GetAll)(model*[[Model](d3plot-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](d3plot-part-class.md#Part::GetFlagged)(model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*, property (optional)*[string]*)
* [GetFromID](d3plot-part-class.md#Part::GetFromID)(model*[[Model](d3plot-model-class.md)]*, label*[integer]*)
* [GetFromIndex](d3plot-part-class.md#Part::GetFromIndex)(model*[[Model](d3plot-model-class.md)]*, index*[integer]*)
* [GetMultipleData](d3plot-part-class.md#Part::GetMultipleData)(component*[constant]*, items*[array]*, options (optional)*[object]*)
* [Last](d3plot-part-class.md#Part::Last)(model*[[Model](d3plot-model-class.md)]*)
* [Pick](d3plot-part-class.md#Part::Pick)()
* [Select](d3plot-part-class.md#Part::Select)(flag*[Flag]*)
* [Total](d3plot-part-class.md#Part::Total)(model*[[Model](d3plot-model-class.md)]*)
* [UnblankAll](d3plot-part-class.md#Part::UnblankAll)(window*[GraphicsWindow]*, model*[[Model](d3plot-model-class.md)]*)
* [UnblankFlagged](d3plot-part-class.md#Part::UnblankFlagged)(window*[GraphicsWindow]*, model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*)
* [UnflagAll](d3plot-part-class.md#Part::UnflagAll)(model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*)

## Member functions

* [Blank](d3plot-part-class.md#Part::Blank)(window*[GraphicsWindow]*)
* [Blanked](d3plot-part-class.md#Part::Blanked)(window*[GraphicsWindow]*)
* [ClearFlag](d3plot-part-class.md#Part::ClearFlag)(flag*[Flag]*)
* [Elements](d3plot-part-class.md#Part::Elements)()
* [Flagged](d3plot-part-class.md#Part::Flagged)(flag*[Flag]*)
* [GetCompositeData](d3plot-part-class.md#Part::GetCompositeData)(ipt*[integer]*)
* [GetData](d3plot-part-class.md#Part::GetData)(component*[constant]*, options (optional)*[object]*)
* [Next](d3plot-part-class.md#Part::Next)()
* [Previous](d3plot-part-class.md#Part::Previous)()
* [SetFlag](d3plot-part-class.md#Part::SetFlag)(flag*[Flag]*)
* [Unblank](d3plot-part-class.md#Part::Unblank)(window*[GraphicsWindow]*)

## Part properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| composite (read only) | logical | If this is a PART\_COMPOSITE. Can be true or false. If there is no ztf file for the model this will be false. |
| data (read only) | real|array | Component data for a part passed as an argument to [GetMultipleData](d3plot-part-class.md#Part::GetMultipleData). Note that data will only exist for the instance of the part passed to [GetMultipleData](d3plot-part-class.md#Part::GetMultipleData). i.e. it is a local property stored on the specific instance. It is not stored in the D3PLOT database |
| elementType (read only) | constant | The type of elements in the part. e.g. [Type.SHELL](d3plot-type-class.md#Type.SHELL), [Type.SOLID](d3plot-type-class.md#Type.SOLID) etc |
| include (read only) | integer | The include file number in the model that the part is in |
| index (read only) | integer | The internal index for the part in D3PLOT (starting at 0) |
| label (read only) | integer | The Ansys LS-DYNA label for the part |
| material (read only) | Material | The [Material](d3plot-material-class.md) the part has. This is only available if there is a ztf file for the model. If not null will be returned. If this is a PART\_COMPOSITE then null will be returned. [Part.GetCompositeData](d3plot-part-class.md#Part::GetCompositeData) should be used to get material data in this case |
| model (read only) | Model | The [Model](d3plot-model-class.md) that the part is in |
| nip (read only) | integer | Number of integration points (layers) present for \_COMPOSITE parts |
| title (read only) | string | The title for the part (or null if no title) |
| type (read only) | constant | The type for the part (will be [Type.PART](d3plot-type-class.md#Type.PART)) |

| Detailed Description<br>The Part class allows you to inspect parts in a model.<br>See the documentation below for more details. |
| --- |

| Details of functions 
Blank(window*[GraphicsWindow]*)

Description<br>Blanks the part in a graphics window |
| --- |

#### Arguments

* window (GraphicsWindow)
 
[GraphicsWindow](d3plot-graphicswindow-class.md)) to blank the part in

| Returns
<br>No return value |
| --- |

| Example
<br>To blank part p in graphics window g:<br>
```
p.Blank(g);
```
 |
| --- |

* * *

| BlankAll(window*[GraphicsWindow]*, model*[[Model](d3plot-model-class.md)]*) [static]
Description<br>Blanks all of the parts in the model |
| --- |

#### Arguments

* window (GraphicsWindow)
 
[GraphicsWindow](d3plot-graphicswindow-class.md)) to blank the parts in

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) that all the parts will be blanked in

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the parts in model m, in graphics window gw:<br>
```
Part.BlankAll(gw, m);
```
 |
| --- |

* * *

| BlankFlagged(window*[GraphicsWindow]*, model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*) [static]
Description<br>Blanks all of the parts in the model flagged with a defined flag |
| --- |

#### Arguments

* window (GraphicsWindow)
 
[GraphicsWindow](d3plot-graphicswindow-class.md)) to blank the parts in

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) that the flagged parts will be blanked in

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) set on the parts to blank

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the parts flagged with flag f in model m, in graphics window gw:<br>
```
Part.BlankFlagged(gw, m, f);
```
 |
| --- |

* * *

| Blanked(window*[GraphicsWindow]*)

Description<br>Checks if the part is blanked in a graphics window or not |
| --- |

#### Arguments

* window (GraphicsWindow)
 
[GraphicsWindow](d3plot-graphicswindow-class.md)) in which to check if the part is blanked

| Returns
<br>true if blanked, false if not<br>
Return type
<br>boolean |
| --- |

| Example
<br>To check if part p is blanked in graphics window g:<br>
```
if (p.Blanked(g) ) do_something...
```
 |
| --- |

* * *

| ClearFlag(flag*[Flag]*)

Description<br>Clears a flag on a part |
| --- |

#### Arguments

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) to clear on the part

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f on part p:<br>
```
p.ClearFlag();
```
 |
| --- |

* * *

| Elements()

Description<br>Returns an array containing the elements in the part |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of element objects<br>
Return type
<br>array |
| --- |

| Example
<br>To return the elements for part p:<br>
```
var elements = p.Elements();
```
 |
| --- |

* * *

| First(model*[[Model](d3plot-model-class.md)]*) [static]
Description<br>Returns the first part in the model (or null if there are no parts in the model) |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) to get first part in

| Returns
<br>Part object<br>
Return type
<br>Part |
| --- |

| Example
<br>To get the first part in model m:<br>
```
var p = Part.First(m);
```
 |
| --- |

* * *

| FlagAll(model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*) [static]
Description<br>Flags all of the parts in the model with a defined flag |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) that all the parts will be flagged in

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) to set on the parts

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the parts with flag f in model m:<br>
```
Part.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[Flag]*)

Description<br>Checks if the part is flagged or not |
| --- |

#### Arguments

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) to test on the part

| Returns
<br>true if flagged, false if not<br>
Return type
<br>boolean |
| --- |

| Example
<br>To check if part p has flag f set on it:<br>
```
if (p.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| GetAll(model*[[Model](d3plot-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Part objects or properties for all of the parts in the model. If the optional property argument is not given then an array of Part objects is returned. If the property argument is given, that property value for each part is returned in the array instead of a Part object |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) that all the parts are in

* property (optional) (string)
 
Name for property to get for all parts in the model

| Returns
<br>Array of [Part](d3plot-part-class.md) objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To get all of the parts in model m:<br>
```
var p = Part.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'label' for a part) for each part in model m:<br>
```
var a = Part.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetCompositeData(ipt*[integer]*)

Description<br>Returns the composite data for an integration point in \*PART\_COMPOSITE. |
| --- |

#### Arguments

* ipt (integer)
 
The integration point you want the data for. **Note that integration points start at 0, not 1**.

| Returns
<br>An array containing the material id and thickness values.<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the composite data for the 3rd integration point for part p:<br>
```
if (p.composite && p.nip >= 3)
{
    var ipt_data = p.GetCompositeData(2);
}
```
 |
| --- |

* * *

| GetData(component*[constant]*, options (optional)*[object]*)

Description<br>Returns the value for a data component.<br> Also see [GetMultipleData](d3plot-part-class.md#Part::GetMultipleData) |
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
var value = p.GetData(component, {extra: 1});
if (value !== null) do_something...
```
 |
| --- |

* * *

| GetFlagged(model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*, property (optional)*[string]*) [static]
Description<br>Gets all of the parts in the model flagged with a defined flag. If the optional property argument is not given then an array of Part objects is returned. If the property argument is given, that property value for each part is returned in the array instead of a Part object |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) that the flagged parts are in

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) set on the parts to get

* property (optional) (string)
 
Name for property to get for all flagged parts in the model

| Returns
<br>Array of [Part](d3plot-part-class.md) objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To get all of the parts flagged with flag f in model m:<br>
```
Part.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'label' for a node) for all parts flagged with flag f in model m:<br>
```
var a = Part.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(model*[[Model](d3plot-model-class.md)]*, label*[integer]*) [static]
Description<br>Returns the Part object for part in model with label (or null if it does not exist) |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) to get part in

* label (integer)
 
The Ansys LS-DYNA label for the part in the model

| Returns
<br>Part object<br>
Return type
<br>Part |
| --- |

| Example
<br>To get the part in model m with label 1000:<br>
```
var p = Part.GetFromID(m, 1000);
```
 |
| --- |

* * *

| GetFromIndex(model*[[Model](d3plot-model-class.md)]*, index*[integer]*) [static]
Description<br>Returns the Part object for part in model with index (or null if it does not exist) |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) to get part in

* index (integer)
 
The D3PLOT internal index in the model for part, starting at 0.

| Returns
<br>Part object<br>
Return type
<br>Part |
| --- |

| Example
<br>To get the 51st part in model m:<br>
```
var p = Part.GetFromIndex(m, 50);
```
 |
| --- |

* * *

| GetMultipleData(component*[constant]*, items*[array]*, options (optional)*[object]*) [static]
Description<br>Returns the value for a data component for multiple parts. For each part a local property called data will be created containing a number if a scalar component, or an array if a vector or tensor component (or null if the value cannot be calculated). The data is also returned as an object.<br> Also see [GetData](d3plot-part-class.md#Part::GetData) |
| --- |

#### Arguments

* component (constant)
 
[Component constant](d3plot-component-class.md#Component_constants) to get data for

* items (array)
 
Array of [Part](d3plot-part-class.md) objects to get the data for. All of the parts must be in the same model.

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
<br>Object containing the data. A property is created in the object for each part with the label. The value of the property is a number if a scalar component or an array if a vector or tensor component (or null if the value cannot be calculated)<br>
Return type
<br>object |
| --- |

| Example
<br>To calculate a component for parts in array items and use the data property (note that in the example, the argument extra is optional):<br>
```
Part.GetMultipleData(component, items, {extra: 1});
for (i=0; i<items.length; i++)
{
    if (items[i].data !== null) do_something...
}
```
<br>To calculate a component for parts in array items and use the return value (note that in the example, the argument extra is optional):<br>
```
var data = Part.GetMultipleData(component, items, {extra: 1});
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
Description<br>Returns the last part in the model (or null if there are no parts in the model) |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) to get last part in

| Returns
<br>Part object<br>
Return type
<br>Part |
| --- |

| Example
<br>To get the last part in model m:<br>
```
var p = Part.Last(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next part in the model (or null if there is not one) |
| --- |

#### Arguments

No arguments

| Returns
<br>Part object<br>
Return type
<br>Part |
| --- |

| Example
<br>To get the next part after part p:<br>
```
p = p.Next();
```
 |
| --- |

* * *

| Pick() [static]
Description<br>Allows the user to pick a part from the screen |
| --- |

#### Arguments

No arguments

| Returns
<br>Part object or null if cancelled<br>
Return type
<br>Part |
| --- |

| Example
<br>To pick a part:<br>
```
var p = Part.Pick();
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous part in the model (or null if there is not one) |
| --- |

#### Arguments

No arguments

| Returns
<br>Part object<br>
Return type
<br>Part |
| --- |

| Example
<br>To get the previous part before part p:<br>
```
p = p.Previous();
```
 |
| --- |

* * *

| Select(flag*[Flag]*) [static]
Description<br>Selects parts using an object menu |
| --- |

#### Arguments

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) to use when selecting parts

| Returns
<br>The number of parts selected or null if menu cancelled<br>
Return type
<br>integer |
| --- |

| Example
<br>To select parts, flagging those selected with flag f:<br>
```
var total = Part.Select(f);
```
 |
| --- |

* * *

| SetFlag(flag*[Flag]*)

Description<br>Sets a flag on a part |
| --- |

#### Arguments

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) to set on the part

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f on part p:<br>
```
p.SetFlag(f);
```
 |
| --- |

* * *

| Total(model*[[Model](d3plot-model-class.md)]*) [static]
Description<br>Returns the total number of parts in the model |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) to get total in

| Returns
<br>The number of parts<br>
Return type
<br>integer |
| --- |

| Example
<br>To get the number of parts in model m:<br>
```
var total = Part.Total(m);
```
 |
| --- |

* * *

| Unblank(window*[GraphicsWindow]*)

Description<br>Unblanks the part in a graphics window |
| --- |

#### Arguments

* window (GraphicsWindow)
 
[GraphicsWindow](d3plot-graphicswindow-class.md)) to unblank the part in

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank part p in graphics window g:<br>
```
p.Unblank(g);
```
 |
| --- |

* * *

| UnblankAll(window*[GraphicsWindow]*, model*[[Model](d3plot-model-class.md)]*) [static]
Description<br>Unblanks all of the parts in the model |
| --- |

#### Arguments

* window (GraphicsWindow)
 
[GraphicsWindow](d3plot-graphicswindow-class.md)) to unblank the parts in

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) that all the parts will be unblanked in

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the parts in model m, in graphics window gw:<br>
```
Part.UnblankAll(gw, m);
```
 |
| --- |

* * *

| UnblankFlagged(window*[GraphicsWindow]*, model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*) [static]
Description<br>Unblanks all of the parts in the model flagged with a defined flag |
| --- |

#### Arguments

* window (GraphicsWindow)
 
[GraphicsWindow](d3plot-graphicswindow-class.md)) to unblank the parts in

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) that the flagged parts will be unblanked in

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) set on the parts to unblank

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the parts flagged with flag f in model m, in graphics window gw:<br>
```
Part.UnblankFlagged(gw, m, f);
```
 |
| --- |

* * *

| UnflagAll(model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*) [static]
Description<br>Unsets a defined flag on all of the parts in the model |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) that the defined flag for all parts will be unset in

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) to unset on the parts

| Returns
<br>No return value |
| --- |

| Example
<br>To unset flag f on all of the parts in model m:<br>
```
Part.UnflagAll(m, f);
```
 |
| --- |

* * *