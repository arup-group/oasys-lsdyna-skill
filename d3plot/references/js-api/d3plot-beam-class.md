# Beam class

The Beam class gives you access to beam elements in D3PLOT. [More...](d3plot-beam-class.md#Beam_details)

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

* [BlankAll](d3plot-beam-class.md#Beam::BlankAll)(window*[GraphicsWindow]*, model*[[Model](d3plot-model-class.md)]*)
* [BlankFlagged](d3plot-beam-class.md#Beam::BlankFlagged)(window*[GraphicsWindow]*, model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*)
* [First](d3plot-beam-class.md#Beam::First)(model*[[Model](d3plot-model-class.md)]*)
* [FlagAll](d3plot-beam-class.md#Beam::FlagAll)(model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*)
* [GetAll](d3plot-beam-class.md#Beam::GetAll)(model*[[Model](d3plot-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](d3plot-beam-class.md#Beam::GetFlagged)(model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*, property (optional)*[string]*)
* [GetFromID](d3plot-beam-class.md#Beam::GetFromID)(model*[[Model](d3plot-model-class.md)]*, label*[integer]*)
* [GetFromIndex](d3plot-beam-class.md#Beam::GetFromIndex)(model*[[Model](d3plot-model-class.md)]*, index*[integer]*)
* [GetMultipleData](d3plot-beam-class.md#Beam::GetMultipleData)(component*[constant]*, items*[array]*, options (optional)*[object]*)
* [Last](d3plot-beam-class.md#Beam::Last)(model*[[Model](d3plot-model-class.md)]*)
* [Pick](d3plot-beam-class.md#Beam::Pick)()
* [Select](d3plot-beam-class.md#Beam::Select)(flag*[Flag]*)
* [Total](d3plot-beam-class.md#Beam::Total)(model*[[Model](d3plot-model-class.md)]*)
* [TotalDeleted](d3plot-beam-class.md#Beam::TotalDeleted)(model*[[Model](d3plot-model-class.md)]*)
* [UnblankAll](d3plot-beam-class.md#Beam::UnblankAll)(window*[GraphicsWindow]*, model*[[Model](d3plot-model-class.md)]*)
* [UnblankFlagged](d3plot-beam-class.md#Beam::UnblankFlagged)(window*[GraphicsWindow]*, model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*)
* [UnflagAll](d3plot-beam-class.md#Beam::UnflagAll)(model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*)

## Member functions

* [Blank](d3plot-beam-class.md#Beam::Blank)(window*[GraphicsWindow]*)
* [Blanked](d3plot-beam-class.md#Beam::Blanked)(window*[GraphicsWindow]*)
* [ClearFlag](d3plot-beam-class.md#Beam::ClearFlag)(flag*[Flag]*)
* [Deleted](d3plot-beam-class.md#Beam::Deleted)()
* [Flagged](d3plot-beam-class.md#Beam::Flagged)(flag*[Flag]*)
* [ForceMoment](d3plot-beam-class.md#Beam::ForceMoment)(options (optional)*[object]*)
* [GetData](d3plot-beam-class.md#Beam::GetData)(component*[constant]*, options (optional)*[object]*)
* [LocalAxes](d3plot-beam-class.md#Beam::LocalAxes)()
* [Next](d3plot-beam-class.md#Beam::Next)()
* [Previous](d3plot-beam-class.md#Beam::Previous)()
* [SetFlag](d3plot-beam-class.md#Beam::SetFlag)(flag*[Flag]*)
* [Topology](d3plot-beam-class.md#Beam::Topology)()
* [Unblank](d3plot-beam-class.md#Beam::Unblank)(window*[GraphicsWindow]*)

## Beam properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| data (read only) | real|array | Component data for a beam passed as an argument to [GetMultipleData](d3plot-beam-class.md#Beam::GetMultipleData). Note that data will only exist for the instance of the beam passed to [GetMultipleData](d3plot-beam-class.md#Beam::GetMultipleData). i.e. it is a local property stored on the specific instance. It is not stored in the D3PLOT database |
| include (read only) | integer | The include file number in the model that the beam is in |
| index (read only) | integer | The internal index for the beam in D3PLOT (starting at 0) |
| integrationPoints (read only) | integer | The number of integration points that the beam has |
| label (read only) | integer | The Ansys LS-DYNA label for the beam |
| material (read only) | Material | The [Material](d3plot-material-class.md) the beam has. This is only available if there is a ztf file for the model. If not null will be returned. If this is a PART\_COMPOSITE then null will be returned. [Part.GetCompositeData](d3plot-part-class.md#Part::GetCompositeData) should be used to get material data in this case |
| model (read only) | Model | The [Model](d3plot-model-class.md) that the beam is in |
| part (read only) | Part | The [Part](d3plot-part-class.md) the beam is in |
| type (read only) | constant | The type for the beam (will be [Type.BEAM](d3plot-type-class.md#Type.BEAM)) |

| Detailed Description<br>The Beam class allows you to inspect beam elements in a model.<br>See the documentation below for more details. |
| --- |

| Details of functions 
Blank(window*[GraphicsWindow]*)

Description<br>Blanks the beam in a graphics window |
| --- |

#### Arguments

* window (GraphicsWindow)
 
[GraphicsWindow](d3plot-graphicswindow-class.md)) to blank the beam in

| Returns
<br>No return value |
| --- |

| Example
<br>To blank beam b in graphics window g:<br>
```
b.Blank(g);
```
 |
| --- |

* * *

| BlankAll(window*[GraphicsWindow]*, model*[[Model](d3plot-model-class.md)]*) [static]
Description<br>Blanks all of the beams in the model |
| --- |

#### Arguments

* window (GraphicsWindow)
 
[GraphicsWindow](d3plot-graphicswindow-class.md)) to blank the beams in

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) that all the beams will be blanked in

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the beams in model m, in graphics window gw:<br>
```
Beam.BlankAll(gw, m);
```
 |
| --- |

* * *

| BlankFlagged(window*[GraphicsWindow]*, model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*) [static]
Description<br>Blanks all of the beams in the model flagged with a defined flag |
| --- |

#### Arguments

* window (GraphicsWindow)
 
[GraphicsWindow](d3plot-graphicswindow-class.md)) to blank the beams in

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) that the flagged beams will be blanked in

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) set on the beams to blank

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the beams flagged with flag f in model m, in graphics window gw:<br>
```
Beam.BlankFlagged(gw, m, f);
```
 |
| --- |

* * *

| Blanked(window*[GraphicsWindow]*)

Description<br>Checks if the beam is blanked in a graphics window or not |
| --- |

#### Arguments

* window (GraphicsWindow)
 
[GraphicsWindow](d3plot-graphicswindow-class.md)) in which to check if the beam is blanked

| Returns
<br>true if blanked, false if not<br>
Return type
<br>boolean |
| --- |

| Example
<br>To check if beam b is blanked in graphics window g:<br>
```
if (b.Blanked(g) ) do_something...
```
 |
| --- |

* * *

| ClearFlag(flag*[Flag]*)

Description<br>Clears a flag on a beam |
| --- |

#### Arguments

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) to clear on the beam

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f on beam b:<br>
```
b.ClearFlag();
```
 |
| --- |

* * *

| Deleted()

Description<br>Checks if the beam has been deleted or not |
| --- |

#### Arguments

No arguments

| Returns
<br>true if deleted, false if not<br>
Return type
<br>boolean |
| --- |

| Example
<br>To check if beam b has been deleted:<br>
```
if (b.Deleted() ) do_something...
```
 |
| --- |

* * *

| First(model*[[Model](d3plot-model-class.md)]*) [static]
Description<br>Returns the first beam in the model (or null if there are no beams in the model) |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) to get first beam in

| Returns
<br>Beam object<br>
Return type
<br>Beam |
| --- |

| Example
<br>To get the first beam in model m:<br>
```
var b = Beam.First(m);
```
 |
| --- |

* * *

| FlagAll(model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*) [static]
Description<br>Flags all of the beams in the model with a defined flag |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) that all the beams will be flagged in

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) to set on the beams

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the beams with flag f in model m:<br>
```
Beam.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[Flag]*)

Description<br>Checks if the beam is flagged or not |
| --- |

#### Arguments

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) to test on the beam

| Returns
<br>true if flagged, false if not<br>
Return type
<br>boolean |
| --- |

| Example
<br>To check if beam b has flag f set on it:<br>
```
if (b.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForceMoment(options (optional)*[object]*)

Description<br>Returns the forces and moments for the beam |
| --- |

#### Arguments

* options (optional) (object)

Object containing options for getting data. Can be any of: 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| ip | integer | Integration point number to get the data at (ip &gt;= 1) |

| Returns
<br>Array containing the forces and moments [Fx, Fy, Fz, Mxx, Myy, Mzz] (or null if the value cannot be calculated)<br>
Return type
<br>array |
| --- |

| Example
<br>To return the forces and moments of beam b:<br>
```
var fm = b.ForceMoment();
if (fm !== null) do_something...
```
 |
| --- |

* * *

| GetAll(model*[[Model](d3plot-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Beam objects or properties for all of the beams in the model. If the optional property argument is not given then an array of Beam objects is returned. If the property argument is given, that property value for each beam is returned in the array instead of a Beam object |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) that all the beams are in

* property (optional) (string)
 
Name for property to get for all beams in the model

| Returns
<br>Array of [Beam](d3plot-beam-class.md) objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To get all of the beams in model m:<br>
```
var b = Beam.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'label' for a beam) for each beam in model m:<br>
```
var a = Beam.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetData(component*[constant]*, options (optional)*[object]*)

Description<br>Returns the value for a data component.<br> Also see [GetMultipleData](d3plot-beam-class.md#Beam::GetMultipleData) |
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
var value = b.GetData(component, {extra: 1});
if (value !== null) do_something...
```
 |
| --- |

* * *

| GetFlagged(model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*, property (optional)*[string]*) [static]
Description<br>Gets all of the beams in the model flagged with a defined flag. If the optional property argument is not given then an array of Beam objects is returned. If the property argument is given, that property value for each beam is returned in the array instead of a Beam object |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) that the flagged beams are in

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) set on the beams to get

* property (optional) (string)
 
Name for property to get for all flagged beams in the model

| Returns
<br>Array of [Beam](d3plot-beam-class.md) objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To get all of the beams flagged with flag f in model m:<br>
```
Beam.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'label' for a node) for all beams flagged with flag f in model m:<br>
```
var a = Beam.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(model*[[Model](d3plot-model-class.md)]*, label*[integer]*) [static]
Description<br>Returns the Beam object for beam in model with label (or null if it does not exist) |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) to get beam in

* label (integer)
 
The Ansys LS-DYNA label for the beam in the model

| Returns
<br>Beam object<br>
Return type
<br>Beam |
| --- |

| Example
<br>To get the beam in model m with label 1000:<br>
```
var b = Beam.GetFromID(m, 1000);
```
 |
| --- |

* * *

| GetFromIndex(model*[[Model](d3plot-model-class.md)]*, index*[integer]*) [static]
Description<br>Returns the Beam object for beam in model with index (or null if it does not exist) |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) to get beam in

* index (integer)
 
The D3PLOT internal index in the model for beam, starting at 0.

| Returns
<br>Beam object<br>
Return type
<br>Beam |
| --- |

| Example
<br>To get the 51st beam in model m:<br>
```
var b = Beam.GetFromIndex(m, 50);
```
 |
| --- |

* * *

| GetMultipleData(component*[constant]*, items*[array]*, options (optional)*[object]*) [static]
Description<br>Returns the value for a data component for multiple beams. For each beam a local property called data will be created containing a number if a scalar component, or an array if a vector or tensor component (or null if the value cannot be calculated). The data is also returned as an object.<br> Also see [GetData](d3plot-beam-class.md#Beam::GetData) |
| --- |

#### Arguments

* component (constant)
 
[Component constant](d3plot-component-class.md#Component_constants) to get data for

* items (array)
 
Array of [Beam](d3plot-beam-class.md) objects to get the data for. All of the beams must be in the same model.

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
<br>Object containing the data. A property is created in the object for each beam with the label. The value of the property is a number if a scalar component or an array if a vector or tensor component (or null if the value cannot be calculated)<br>
Return type
<br>object |
| --- |

| Example
<br>To calculate a component for beams in array items and use the data property (note that in the example, the argument extra is optional):<br>
```
Beam.GetMultipleData(component, items, {extra: 1});
for (i=0; i<items.length; i++)
{
    if (items[i].data !== null) do_something...
}
```
<br>To calculate a component for beams in array items and use the return value (note that in the example, the argument extra is optional):<br>
```
var data = Beam.GetMultipleData(component, items, {extra: 1});
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
Description<br>Returns the last beam in the model (or null if there are no beams in the model) |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) to get last beam in

| Returns
<br>Beam object<br>
Return type
<br>Beam |
| --- |

| Example
<br>To get the last beam in model m:<br>
```
var b = Beam.Last(m);
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
<br>To get the local axes for beam b:<br>
```
var axes = b.LocalAxes();
var xAxis = [ axes[0][0], axes[0][1], axes[0][2] ];
var yAxis = [ axes[1][0], axes[1][1], axes[1][2] ];
var zAxis = [ axes[2][0], axes[2][1], axes[2][2] ];
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next beam in the model (or null if there is not one) |
| --- |

#### Arguments

No arguments

| Returns
<br>Beam object<br>
Return type
<br>Beam |
| --- |

| Example
<br>To get the next beam after beam b:<br>
```
b = b.Next();
```
 |
| --- |

* * *

| Pick() [static]
Description<br>Allows the user to pick a beam from the screen |
| --- |

#### Arguments

No arguments

| Returns
<br>Beam object or null if cancelled<br>
Return type
<br>Beam |
| --- |

| Example
<br>To pick a beam:<br>
```
var b = Beam.Pick();
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous beam in the model (or null if there is not one) |
| --- |

#### Arguments

No arguments

| Returns
<br>Beam object<br>
Return type
<br>Beam |
| --- |

| Example
<br>To get the previous beam before beam b:<br>
```
b = b.Previous();
```
 |
| --- |

* * *

| Select(flag*[Flag]*) [static]
Description<br>Selects beams using an object menu |
| --- |

#### Arguments

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) to use when selecting beams

| Returns
<br>The number of beams selected or null if menu cancelled<br>
Return type
<br>integer |
| --- |

| Example
<br>To select beams, flagging those selected with flag f:<br>
```
var total = Beam.Select(f);
```
 |
| --- |

* * *

| SetFlag(flag*[Flag]*)

Description<br>Sets a flag on a beam |
| --- |

#### Arguments

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) to set on the beam

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f on beam b:<br>
```
b.SetFlag(f);
```
 |
| --- |

* * *

| Topology()

Description<br>Returns the topology for the beam in the model |
| --- |

#### Arguments

No arguments

| Returns
<br>array of Node objects<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the topology for beam b:<br>
```
var topology = b.Topology();
```
 |
| --- |

* * *

| Total(model*[[Model](d3plot-model-class.md)]*) [static]
Description<br>Returns the total number of beams in the model |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) to get total in

| Returns
<br>The number of beams<br>
Return type
<br>integer |
| --- |

| Example
<br>To get the number of beams in model m:<br>
```
var total = Beam.Total(m);
```
 |
| --- |

* * *

| TotalDeleted(model*[[Model](d3plot-model-class.md)]*) [static]
Description<br>Returns the total number of beams that have been deleted in a model in the state given by its [state](d3plot-model-class.md#state) property |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) to get total in

| Returns
<br>The number of beams that have been deleted<br>
Return type
<br>integer |
| --- |

| Example
<br>To get the number of beams in model m that have been deleted in state 10:<br>
```
m.state = 10;
var total = Beam.TotalDeleted(m);
```
 |
| --- |

* * *

| Unblank(window*[GraphicsWindow]*)

Description<br>Unblanks the beam in a graphics window |
| --- |

#### Arguments

* window (GraphicsWindow)
 
[GraphicsWindow](d3plot-graphicswindow-class.md)) to unblank the beam in

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank beam b in graphics window g:<br>
```
b.Unblank(g);
```
 |
| --- |

* * *

| UnblankAll(window*[GraphicsWindow]*, model*[[Model](d3plot-model-class.md)]*) [static]
Description<br>Unblanks all of the beams in the model |
| --- |

#### Arguments

* window (GraphicsWindow)
 
[GraphicsWindow](d3plot-graphicswindow-class.md)) to unblank the beams in

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) that all the beams will be unblanked in

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the beams in model m, in graphics window gw:<br>
```
Beam.UnblankAll(gw, m);
```
 |
| --- |

* * *

| UnblankFlagged(window*[GraphicsWindow]*, model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*) [static]
Description<br>Unblanks all of the beams in the model flagged with a defined flag |
| --- |

#### Arguments

* window (GraphicsWindow)
 
[GraphicsWindow](d3plot-graphicswindow-class.md)) to unblank the beams in

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) that the flagged beams will be unblanked in

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) set on the beams to unblank

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the beams flagged with flag f in model m, in graphics window gw:<br>
```
Beam.UnblankFlagged(gw, m, f);
```
 |
| --- |

* * *

| UnflagAll(model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*) [static]
Description<br>Unsets a defined flag on all of the beams in the model |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) that the defined flag for all beams will be unset in

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) to unset on the beams

| Returns
<br>No return value |
| --- |

| Example
<br>To unset flag f on all of the beams in model m:<br>
```
Beam.UnflagAll(m, f);
```
 |
| --- |

* * *