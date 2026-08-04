# Segment class

The Segment class gives you access to contact segments in D3PLOT. [More...](d3plot-segment-class.md#Segment_details)

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

* [BlankAll](d3plot-segment-class.md#Segment::BlankAll)(window*[GraphicsWindow]*, model*[[Model](d3plot-model-class.md)]*)
* [BlankFlagged](d3plot-segment-class.md#Segment::BlankFlagged)(window*[GraphicsWindow]*, model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*)
* [First](d3plot-segment-class.md#Segment::First)(model*[[Model](d3plot-model-class.md)]*)
* [FlagAll](d3plot-segment-class.md#Segment::FlagAll)(model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*)
* [GetAll](d3plot-segment-class.md#Segment::GetAll)(model*[[Model](d3plot-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](d3plot-segment-class.md#Segment::GetFlagged)(model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*, property (optional)*[string]*)
* [GetFromID](d3plot-segment-class.md#Segment::GetFromID)(model*[[Model](d3plot-model-class.md)]*, label*[integer]*)
* [GetFromIndex](d3plot-segment-class.md#Segment::GetFromIndex)(model*[[Model](d3plot-model-class.md)]*, index*[integer]*)
* [GetMultipleData](d3plot-segment-class.md#Segment::GetMultipleData)(component*[constant]*, items*[array]*, options (optional)*[object]*)
* [Last](d3plot-segment-class.md#Segment::Last)(model*[[Model](d3plot-model-class.md)]*)
* [Pick](d3plot-segment-class.md#Segment::Pick)()
* [Select](d3plot-segment-class.md#Segment::Select)(flag*[Flag]*)
* [Total](d3plot-segment-class.md#Segment::Total)(model*[[Model](d3plot-model-class.md)]*)
* [UnblankAll](d3plot-segment-class.md#Segment::UnblankAll)(window*[GraphicsWindow]*, model*[[Model](d3plot-model-class.md)]*)
* [UnblankFlagged](d3plot-segment-class.md#Segment::UnblankFlagged)(window*[GraphicsWindow]*, model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*)
* [UnflagAll](d3plot-segment-class.md#Segment::UnflagAll)(model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*)

## Member functions

* [Blank](d3plot-segment-class.md#Segment::Blank)(window*[GraphicsWindow]*)
* [Blanked](d3plot-segment-class.md#Segment::Blanked)(window*[GraphicsWindow]*)
* [ClearFlag](d3plot-segment-class.md#Segment::ClearFlag)(flag*[Flag]*)
* [Flagged](d3plot-segment-class.md#Segment::Flagged)(flag*[Flag]*)
* [GetData](d3plot-segment-class.md#Segment::GetData)(component*[constant]*, options (optional)*[object]*)
* [LocalAxes](d3plot-segment-class.md#Segment::LocalAxes)()
* [Next](d3plot-segment-class.md#Segment::Next)()
* [Previous](d3plot-segment-class.md#Segment::Previous)()
* [SetFlag](d3plot-segment-class.md#Segment::SetFlag)(flag*[Flag]*)
* [Topology](d3plot-segment-class.md#Segment::Topology)()
* [Unblank](d3plot-segment-class.md#Segment::Unblank)(window*[GraphicsWindow]*)

## Segment properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| data (read only) | real|array | Component data for a segment passed as an argument to [GetMultipleData](d3plot-segment-class.md#Segment::GetMultipleData). Note that data will only exist for the instance of the segment passed to [GetMultipleData](d3plot-segment-class.md#Segment::GetMultipleData). i.e. it is a local property stored on the specific instance. It is not stored in the D3PLOT database |
| include (read only) | integer | The include file number in the model that the segment is in |
| index (read only) | integer | The internal index for the segment in D3PLOT (starting at 0) |
| label (read only) | integer | The Ansys LS-DYNA label for the segment |
| material (read only) | Material | The [Material](d3plot-material-class.md) the segment has. This is only available if there is a ztf file for the model. If not null will be returned. If this is a PART\_COMPOSITE then null will be returned. [Part.GetCompositeData](d3plot-part-class.md#Part::GetCompositeData) should be used to get material data in this case |
| model (read only) | Model | The [Model](d3plot-model-class.md) that the segment is in |
| part (read only) | Part | The [Part](d3plot-part-class.md) the segment is in |
| type (read only) | constant | The type for the segment (will be [Type.SEGMENT](d3plot-type-class.md#Type.SEGMENT)) |

| Detailed Description<br>The Segment class allows you to inspect contact segments in a model.<br>See the documentation below for more details. |
| --- |

| Details of functions 
Blank(window*[GraphicsWindow]*)

Description<br>Blanks the segment in a graphics window |
| --- |

#### Arguments

* window (GraphicsWindow)
 
[GraphicsWindow](d3plot-graphicswindow-class.md)) to blank the segment in

| Returns
<br>No return value |
| --- |

| Example
<br>To blank segment s in graphics window g:<br>
```
s.Blank(g);
```
 |
| --- |

* * *

| BlankAll(window*[GraphicsWindow]*, model*[[Model](d3plot-model-class.md)]*) [static]
Description<br>Blanks all of the segments in the model |
| --- |

#### Arguments

* window (GraphicsWindow)
 
[GraphicsWindow](d3plot-graphicswindow-class.md)) to blank the segments in

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) that all the segments will be blanked in

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the segments in model m, in graphics window gw:<br>
```
Segment.BlankAll(gw, m);
```
 |
| --- |

* * *

| BlankFlagged(window*[GraphicsWindow]*, model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*) [static]
Description<br>Blanks all of the segments in the model flagged with a defined flag |
| --- |

#### Arguments

* window (GraphicsWindow)
 
[GraphicsWindow](d3plot-graphicswindow-class.md)) to blank the segments in

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) that the flagged segments will be blanked in

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) set on the segments to blank

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the segments flagged with flag f in model m, in graphics window gw:<br>
```
Segment.BlankFlagged(gw, m, f);
```
 |
| --- |

* * *

| Blanked(window*[GraphicsWindow]*)

Description<br>Checks if the segment is blanked in a graphics window or not |
| --- |

#### Arguments

* window (GraphicsWindow)
 
[GraphicsWindow](d3plot-graphicswindow-class.md)) in which to check if the segment is blanked

| Returns
<br>true if blanked, false if not<br>
Return type
<br>boolean |
| --- |

| Example
<br>To check if segment s is blanked in graphics window g:<br>
```
if (s.Blanked(g) ) do_something...
```
 |
| --- |

* * *

| ClearFlag(flag*[Flag]*)

Description<br>Clears a flag on a segment |
| --- |

#### Arguments

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) to clear on the segment

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f on segment s:<br>
```
s.ClearFlag();
```
 |
| --- |

* * *

| First(model*[[Model](d3plot-model-class.md)]*) [static]
Description<br>Returns the first segment in the model (or null if there are no segments in the model) |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) to get first segment in

| Returns
<br>Segment object<br>
Return type
<br>Segment |
| --- |

| Example
<br>To get the first segment in model m:<br>
```
var s = Segment.First(m);
```
 |
| --- |

* * *

| FlagAll(model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*) [static]
Description<br>Flags all of the segments in the model with a defined flag |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) that all the segments will be flagged in

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) to set on the segments

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the segments with flag f in model m:<br>
```
Segment.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[Flag]*)

Description<br>Checks if the segment is flagged or not |
| --- |

#### Arguments

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) to test on the segment

| Returns
<br>true if flagged, false if not<br>
Return type
<br>boolean |
| --- |

| Example
<br>To check if segment s has flag f set on it:<br>
```
if (s.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| GetAll(model*[[Model](d3plot-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Segment objects or properties for all of the segments in the model. If the optional property argument is not given then an array of Segment objects is returned. If the property argument is given, that property value for each segment is returned in the array instead of a Segment object |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) that all the segments are in

* property (optional) (string)
 
Name for property to get for all segments in the model

| Returns
<br>Array of [Segment](d3plot-segment-class.md) objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To get all of the segments in model m:<br>
```
var s = Segment.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'label' for a segment) for each segment in model m:<br>
```
var a = Segment.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetData(component*[constant]*, options (optional)*[object]*)

Description<br>Returns the value for a data component.<br> Also see [GetMultipleData](d3plot-segment-class.md#Segment::GetMultipleData) |
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
var value = s.GetData(component, {extra: 1});
if (value !== null) do_something...
```
 |
| --- |

* * *

| GetFlagged(model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*, property (optional)*[string]*) [static]
Description<br>Gets all of the segments in the model flagged with a defined flag. If the optional property argument is not given then an array of Segment objects is returned. If the property argument is given, that property value for each segment is returned in the array instead of a Segment object |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) that the flagged segments are in

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) set on the segments to get

* property (optional) (string)
 
Name for property to get for all flagged segments in the model

| Returns
<br>Array of [Segment](d3plot-segment-class.md) objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To get all of the segments flagged with flag f in model m:<br>
```
Segment.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'label' for a node) for all segments flagged with flag f in model m:<br>
```
var a = Segment.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(model*[[Model](d3plot-model-class.md)]*, label*[integer]*) [static]
Description<br>Returns the Segment object for segment in model with label (or null if it does not exist) |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) to get segment in

* label (integer)
 
The Ansys LS-DYNA label for the segment in the model

| Returns
<br>Segment object<br>
Return type
<br>Segment |
| --- |

| Example
<br>To get the segment in model m with label 1000:<br>
```
var s = Segment.GetFromID(m, 1000);
```
 |
| --- |

* * *

| GetFromIndex(model*[[Model](d3plot-model-class.md)]*, index*[integer]*) [static]
Description<br>Returns the Segment object for segment in model with index (or null if it does not exist) |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) to get segment in

* index (integer)
 
The D3PLOT internal index in the model for segment, starting at 0.

| Returns
<br>Segment object<br>
Return type
<br>Segment |
| --- |

| Example
<br>To get the 51st segment in model m:<br>
```
var s = Segment.GetFromIndex(m, 50);
```
 |
| --- |

* * *

| GetMultipleData(component*[constant]*, items*[array]*, options (optional)*[object]*) [static]
Description<br>Returns the value for a data component for multiple segments. For each segment a local property called data will be created containing a number if a scalar component, or an array if a vector or tensor component (or null if the value cannot be calculated). The data is also returned as an object.<br> Also see [GetData](d3plot-segment-class.md#Segment::GetData) |
| --- |

#### Arguments

* component (constant)
 
[Component constant](d3plot-component-class.md#Component_constants) to get data for

* items (array)
 
Array of [Segment](d3plot-segment-class.md) objects to get the data for. All of the segments must be in the same model.

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
<br>Object containing the data. A property is created in the object for each segment with the label. The value of the property is a number if a scalar component or an array if a vector or tensor component (or null if the value cannot be calculated)<br>
Return type
<br>object |
| --- |

| Example
<br>To calculate a component for segments in array items and use the data property (note that in the example, the argument extra is optional):<br>
```
Segment.GetMultipleData(component, items, {extra: 1});
for (i=0; i<items.length; i++)
{
    if (items[i].data !== null) do_something...
}
```
<br>To calculate a component for segments in array items and use the return value (note that in the example, the argument extra is optional):<br>
```
var data = Segment.GetMultipleData(component, items, {extra: 1});
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
Description<br>Returns the last segment in the model (or null if there are no segments in the model) |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) to get last segment in

| Returns
<br>Segment object<br>
Return type
<br>Segment |
| --- |

| Example
<br>To get the last segment in model m:<br>
```
var s = Segment.Last(m);
```
 |
| --- |

* * *

| LocalAxes()

Description<br>Returns the local axes of the element in model space, expressed as direction cosines in a 2D array. Beam elements must have 3 nodes to be able to return local axes. |
| --- |

#### Arguments

No arguments

| Returns
<br>array of arrays<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the local axes for segment s:<br>
```
var axes = s.LocalAxes();
var xAxis = [ axes[0][0], axes[0][1], axes[0][2] ];
var yAxis = [ axes[1][0], axes[1][1], axes[1][2] ];
var zAxis = [ axes[2][0], axes[2][1], axes[2][2] ];
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next segment in the model (or null if there is not one) |
| --- |

#### Arguments

No arguments

| Returns
<br>Segment object<br>
Return type
<br>Segment |
| --- |

| Example
<br>To get the next segment after segment s:<br>
```
s = s.Next();
```
 |
| --- |

* * *

| Pick() [static]
Description<br>Allows the user to pick a segment from the screen |
| --- |

#### Arguments

No arguments

| Returns
<br>Segment object or null if cancelled<br>
Return type
<br>Segment |
| --- |

| Example
<br>To pick a segment:<br>
```
var s = Segment.Pick();
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous segment in the model (or null if there is not one) |
| --- |

#### Arguments

No arguments

| Returns
<br>Segment object<br>
Return type
<br>Segment |
| --- |

| Example
<br>To get the previous segment before segment s:<br>
```
s = s.Previous();
```
 |
| --- |

* * *

| Select(flag*[Flag]*) [static]
Description<br>Selects segments using an object menu |
| --- |

#### Arguments

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) to use when selecting segments

| Returns
<br>The number of segments selected or null if menu cancelled<br>
Return type
<br>integer |
| --- |

| Example
<br>To select segments, flagging those selected with flag f:<br>
```
var total = Segment.Select(f);
```
 |
| --- |

* * *

| SetFlag(flag*[Flag]*)

Description<br>Sets a flag on a segment |
| --- |

#### Arguments

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) to set on the segment

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f on segment s:<br>
```
s.SetFlag(f);
```
 |
| --- |

* * *

| Topology()

Description<br>Returns the topology for the segment in the model |
| --- |

#### Arguments

No arguments

| Returns
<br>array of Node objects<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the topology for segment s:<br>
```
var topology = s.Topology();
```
 |
| --- |

* * *

| Total(model*[[Model](d3plot-model-class.md)]*) [static]
Description<br>Returns the total number of segments in the model |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) to get total in

| Returns
<br>The number of segments<br>
Return type
<br>integer |
| --- |

| Example
<br>To get the number of segments in model m:<br>
```
var total = Segment.Total(m);
```
 |
| --- |

* * *

| Unblank(window*[GraphicsWindow]*)

Description<br>Unblanks the segment in a graphics window |
| --- |

#### Arguments

* window (GraphicsWindow)
 
[GraphicsWindow](d3plot-graphicswindow-class.md)) to unblank the segment in

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank segment s in graphics window g:<br>
```
s.Unblank(g);
```
 |
| --- |

* * *

| UnblankAll(window*[GraphicsWindow]*, model*[[Model](d3plot-model-class.md)]*) [static]
Description<br>Unblanks all of the segments in the model |
| --- |

#### Arguments

* window (GraphicsWindow)
 
[GraphicsWindow](d3plot-graphicswindow-class.md)) to unblank the segments in

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) that all the segments will be unblanked in

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the segments in model m, in graphics window gw:<br>
```
Segment.UnblankAll(gw, m);
```
 |
| --- |

* * *

| UnblankFlagged(window*[GraphicsWindow]*, model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*) [static]
Description<br>Unblanks all of the segments in the model flagged with a defined flag |
| --- |

#### Arguments

* window (GraphicsWindow)
 
[GraphicsWindow](d3plot-graphicswindow-class.md)) to unblank the segments in

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) that the flagged segments will be unblanked in

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) set on the segments to unblank

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the segments flagged with flag f in model m, in graphics window gw:<br>
```
Segment.UnblankFlagged(gw, m, f);
```
 |
| --- |

* * *

| UnflagAll(model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*) [static]
Description<br>Unsets a defined flag on all of the segments in the model |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) that the defined flag for all segments will be unset in

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) to unset on the segments

| Returns
<br>No return value |
| --- |

| Example
<br>To unset flag f on all of the segments in model m:<br>
```
Segment.UnflagAll(m, f);
```
 |
| --- |

* * *