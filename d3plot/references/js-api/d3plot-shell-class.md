# Shell class

The Shell class gives you access to shell elements in D3PLOT. [More...](d3plot-shell-class.md#Shell_details)

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

* [BlankAll](d3plot-shell-class.md#Shell::BlankAll)(window*[GraphicsWindow]*, model*[[Model](d3plot-model-class.md)]*)
* [BlankFlagged](d3plot-shell-class.md#Shell::BlankFlagged)(window*[GraphicsWindow]*, model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*)
* [First](d3plot-shell-class.md#Shell::First)(model*[[Model](d3plot-model-class.md)]*)
* [FlagAll](d3plot-shell-class.md#Shell::FlagAll)(model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*)
* [GetAll](d3plot-shell-class.md#Shell::GetAll)(model*[[Model](d3plot-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](d3plot-shell-class.md#Shell::GetFlagged)(model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*, property (optional)*[string]*)
* [GetFromID](d3plot-shell-class.md#Shell::GetFromID)(model*[[Model](d3plot-model-class.md)]*, label*[integer]*)
* [GetFromIndex](d3plot-shell-class.md#Shell::GetFromIndex)(model*[[Model](d3plot-model-class.md)]*, index*[integer]*)
* [GetMultipleData](d3plot-shell-class.md#Shell::GetMultipleData)(component*[constant]*, items*[array]*, options (optional)*[object]*)
* [Last](d3plot-shell-class.md#Shell::Last)(model*[[Model](d3plot-model-class.md)]*)
* [Pick](d3plot-shell-class.md#Shell::Pick)()
* [Select](d3plot-shell-class.md#Shell::Select)(flag*[Flag]*)
* [Total](d3plot-shell-class.md#Shell::Total)(model*[[Model](d3plot-model-class.md)]*)
* [TotalDeleted](d3plot-shell-class.md#Shell::TotalDeleted)(model*[[Model](d3plot-model-class.md)]*)
* [UnblankAll](d3plot-shell-class.md#Shell::UnblankAll)(window*[GraphicsWindow]*, model*[[Model](d3plot-model-class.md)]*)
* [UnblankFlagged](d3plot-shell-class.md#Shell::UnblankFlagged)(window*[GraphicsWindow]*, model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*)
* [UnflagAll](d3plot-shell-class.md#Shell::UnflagAll)(model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*)

## Member functions

* [Blank](d3plot-shell-class.md#Shell::Blank)(window*[GraphicsWindow]*)
* [Blanked](d3plot-shell-class.md#Shell::Blanked)(window*[GraphicsWindow]*)
* [ClearFlag](d3plot-shell-class.md#Shell::ClearFlag)(flag*[Flag]*)
* [Deleted](d3plot-shell-class.md#Shell::Deleted)()
* [Flagged](d3plot-shell-class.md#Shell::Flagged)(flag*[Flag]*)
* [GetData](d3plot-shell-class.md#Shell::GetData)(component*[constant]*, options (optional)*[object]*)
* [LocalAxes](d3plot-shell-class.md#Shell::LocalAxes)()
* [Next](d3plot-shell-class.md#Shell::Next)()
* [PlasticStrain](d3plot-shell-class.md#Shell::PlasticStrain)(options (optional)*[object]*)
* [Previous](d3plot-shell-class.md#Shell::Previous)()
* [SetFlag](d3plot-shell-class.md#Shell::SetFlag)(flag*[Flag]*)
* [StrainTensor](d3plot-shell-class.md#Shell::StrainTensor)(options (optional)*[object]*)
* [StressTensor](d3plot-shell-class.md#Shell::StressTensor)(options (optional)*[object]*)
* [Topology](d3plot-shell-class.md#Shell::Topology)()
* [Unblank](d3plot-shell-class.md#Shell::Unblank)(window*[GraphicsWindow]*)
* [VonMisesStress](d3plot-shell-class.md#Shell::VonMisesStress)(options (optional)*[object]*)

## Shell properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| data (read only) | real|array | Component data for a shell passed as an argument to [GetMultipleData](d3plot-shell-class.md#Shell::GetMultipleData). Note that data will only exist for the instance of the shell passed to [GetMultipleData](d3plot-shell-class.md#Shell::GetMultipleData). i.e. it is a local property stored on the specific instance. It is not stored in the D3PLOT database |
| include (read only) | integer | The include file number in the model that the shell is in |
| index (read only) | integer | The internal index for the shell in D3PLOT (starting at 0) |
| integrationPoints (read only) | integer | The number of through thickness integration points that the shell has |
| label (read only) | integer | The Ansys LS-DYNA label for the shell |
| material (read only) | Material | The [Material](d3plot-material-class.md) the shell has. This is only available if there is a ztf file for the model. If not null will be returned. If this is a PART\_COMPOSITE then null will be returned. [Part.GetCompositeData](d3plot-part-class.md#Part::GetCompositeData) should be used to get material data in this case |
| model (read only) | Model | The [Model](d3plot-model-class.md) that the shell is in |
| onPlanIntegrationPoints (read only) | integer | The number of on plan integration points that the shell has |
| part (read only) | Part | The [Part](d3plot-part-class.md) the shell is in |
| type (read only) | constant | The type for the shell (will be [Type.SHELL](d3plot-type-class.md#Type.SHELL)) |

| Detailed Description<br>The Shell class allows you to inspect shell elements in a model.<br>See the documentation below for more details. |
| --- |

| Details of functions 
Blank(window*[GraphicsWindow]*)

Description<br>Blanks the shell in a graphics window |
| --- |

#### Arguments

* window (GraphicsWindow)
 
[GraphicsWindow](d3plot-graphicswindow-class.md)) to blank the shell in

| Returns
<br>No return value |
| --- |

| Example
<br>To blank shell s in graphics window g:<br>
```
s.Blank(g);
```
 |
| --- |

* * *

| BlankAll(window*[GraphicsWindow]*, model*[[Model](d3plot-model-class.md)]*) [static]
Description<br>Blanks all of the shells in the model |
| --- |

#### Arguments

* window (GraphicsWindow)
 
[GraphicsWindow](d3plot-graphicswindow-class.md)) to blank the shells in

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) that all the shells will be blanked in

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the shells in model m, in graphics window gw:<br>
```
Shell.BlankAll(gw, m);
```
 |
| --- |

* * *

| BlankFlagged(window*[GraphicsWindow]*, model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*) [static]
Description<br>Blanks all of the shells in the model flagged with a defined flag |
| --- |

#### Arguments

* window (GraphicsWindow)
 
[GraphicsWindow](d3plot-graphicswindow-class.md)) to blank the shells in

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) that the flagged shells will be blanked in

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) set on the shells to blank

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the shells flagged with flag f in model m, in graphics window gw:<br>
```
Shell.BlankFlagged(gw, m, f);
```
 |
| --- |

* * *

| Blanked(window*[GraphicsWindow]*)

Description<br>Checks if the shell is blanked in a graphics window or not |
| --- |

#### Arguments

* window (GraphicsWindow)
 
[GraphicsWindow](d3plot-graphicswindow-class.md)) in which to check if the shell is blanked

| Returns
<br>true if blanked, false if not<br>
Return type
<br>boolean |
| --- |

| Example
<br>To check if shell s is blanked in graphics window g:<br>
```
if (s.Blanked(g) ) do_something...
```
 |
| --- |

* * *

| ClearFlag(flag*[Flag]*)

Description<br>Clears a flag on a shell |
| --- |

#### Arguments

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) to clear on the shell

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f on shell s:<br>
```
s.ClearFlag();
```
 |
| --- |

* * *

| Deleted()

Description<br>Checks if the shell has been deleted or not |
| --- |

#### Arguments

No arguments

| Returns
<br>true if deleted, false if not<br>
Return type
<br>boolean |
| --- |

| Example
<br>To check if shell s has been deleted:<br>
```
if (s.Deleted() ) do_something...
```
 |
| --- |

* * *

| First(model*[[Model](d3plot-model-class.md)]*) [static]
Description<br>Returns the first shell in the model (or null if there are no shells in the model) |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) to get first shell in

| Returns
<br>Shell object<br>
Return type
<br>Shell |
| --- |

| Example
<br>To get the first shell in model m:<br>
```
var s = Shell.First(m);
```
 |
| --- |

* * *

| FlagAll(model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*) [static]
Description<br>Flags all of the shells in the model with a defined flag |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) that all the shells will be flagged in

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) to set on the shells

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the shells with flag f in model m:<br>
```
Shell.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[Flag]*)

Description<br>Checks if the shell is flagged or not |
| --- |

#### Arguments

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) to test on the shell

| Returns
<br>true if flagged, false if not<br>
Return type
<br>boolean |
| --- |

| Example
<br>To check if shell s has flag f set on it:<br>
```
if (s.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| GetAll(model*[[Model](d3plot-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Shell objects or properties for all of the shells in the model. If the optional property argument is not given then an array of Shell objects is returned. If the property argument is given, that property value for each shell is returned in the array instead of a Shell object |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) that all the shells are in

* property (optional) (string)
 
Name for property to get for all shells in the model

| Returns
<br>Array of [Shell](d3plot-shell-class.md) objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To get all of the shells in model m:<br>
```
var s = Shell.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'label' for a shell) for each shell in model m:<br>
```
var a = Shell.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetData(component*[constant]*, options (optional)*[object]*)

Description<br>Returns the value for a data component.<br> Also see [GetMultipleData](d3plot-shell-class.md#Shell::GetMultipleData) |
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
Description<br>Gets all of the shells in the model flagged with a defined flag. If the optional property argument is not given then an array of Shell objects is returned. If the property argument is given, that property value for each shell is returned in the array instead of a Shell object |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) that the flagged shells are in

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) set on the shells to get

* property (optional) (string)
 
Name for property to get for all flagged shells in the model

| Returns
<br>Array of [Shell](d3plot-shell-class.md) objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To get all of the shells flagged with flag f in model m:<br>
```
Shell.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'label' for a node) for all shells flagged with flag f in model m:<br>
```
var a = Shell.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(model*[[Model](d3plot-model-class.md)]*, label*[integer]*) [static]
Description<br>Returns the Shell object for shell in model with label (or null if it does not exist) |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) to get shell in

* label (integer)
 
The Ansys LS-DYNA label for the shell in the model

| Returns
<br>Shell object<br>
Return type
<br>Shell |
| --- |

| Example
<br>To get the shell in model m with label 1000:<br>
```
var s = Shell.GetFromID(m, 1000);
```
 |
| --- |

* * *

| GetFromIndex(model*[[Model](d3plot-model-class.md)]*, index*[integer]*) [static]
Description<br>Returns the Shell object for shell in model with index (or null if it does not exist) |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) to get shell in

* index (integer)
 
The D3PLOT internal index in the model for shell, starting at 0.

| Returns
<br>Shell object<br>
Return type
<br>Shell |
| --- |

| Example
<br>To get the 51st shell in model m:<br>
```
var s = Shell.GetFromIndex(m, 50);
```
 |
| --- |

* * *

| GetMultipleData(component*[constant]*, items*[array]*, options (optional)*[object]*) [static]
Description<br>Returns the value for a data component for multiple shells. For each shell a local property called data will be created containing a number if a scalar component, or an array if a vector or tensor component (or null if the value cannot be calculated). The data is also returned as an object.<br> Also see [GetData](d3plot-shell-class.md#Shell::GetData) |
| --- |

#### Arguments

* component (constant)
 
[Component constant](d3plot-component-class.md#Component_constants) to get data for

* items (array)
 
Array of [Shell](d3plot-shell-class.md) objects to get the data for. All of the shells must be in the same model.

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
<br>Object containing the data. A property is created in the object for each shell with the label. The value of the property is a number if a scalar component or an array if a vector or tensor component (or null if the value cannot be calculated)<br>
Return type
<br>object |
| --- |

| Example
<br>To calculate a component for shells in array items and use the data property (note that in the example, the argument extra is optional):<br>
```
Shell.GetMultipleData(component, items, {extra: 1});
for (i=0; i<items.length; i++)
{
    if (items[i].data !== null) do_something...
}
```
<br>To calculate a component for shells in array items and use the return value (note that in the example, the argument extra is optional):<br>
```
var data = Shell.GetMultipleData(component, items, {extra: 1});
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
Description<br>Returns the last shell in the model (or null if there are no shells in the model) |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) to get last shell in

| Returns
<br>Shell object<br>
Return type
<br>Shell |
| --- |

| Example
<br>To get the last shell in model m:<br>
```
var s = Shell.Last(m);
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
<br>To get the local axes for shell s:<br>
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

Description<br>Returns the next shell in the model (or null if there is not one) |
| --- |

#### Arguments

No arguments

| Returns
<br>Shell object<br>
Return type
<br>Shell |
| --- |

| Example
<br>To get the next shell after shell s:<br>
```
s = s.Next();
```
 |
| --- |

* * *

| Pick() [static]
Description<br>Allows the user to pick a shell from the screen |
| --- |

#### Arguments

No arguments

| Returns
<br>Shell object or null if cancelled<br>
Return type
<br>Shell |
| --- |

| Example
<br>To pick a shell:<br>
```
var s = Shell.Pick();
```
 |
| --- |

* * *

| PlasticStrain(options (optional)*[object]*)

Description<br>Returns the effective plastic strain for the shell |
| --- |

#### Arguments

* options (optional) (object)

Object containing options for getting data. Can be any of: 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| ip | integer | Integration point number to get the data at (ip &gt;= 1 or one of the constants [Constant.TOP](d3plot-constant-class.md#Constant.TOP), [Constant.MIDDLE](d3plot-constant-class.md#Constant.MIDDLE) or [Constant.BOTTOM](d3plot-constant-class.md#Constant.BOTTOM)) |
| op | integer | On plane integration point number for shells and thick shells (op &gt;= 1 [default]) |

| Returns
<br>Plastic strain (or null if the value cannot be calculated)<br>
Return type
<br>real |
| --- |

| Example
<br>To return the effective plastic strain of shell s:<br>
```
var strain = s.PlasticStrain();
if (strain !== null) do_something...
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous shell in the model (or null if there is not one) |
| --- |

#### Arguments

No arguments

| Returns
<br>Shell object<br>
Return type
<br>Shell |
| --- |

| Example
<br>To get the previous shell before shell s:<br>
```
s = s.Previous();
```
 |
| --- |

* * *

| Select(flag*[Flag]*) [static]
Description<br>Selects shells using an object menu |
| --- |

#### Arguments

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) to use when selecting shells

| Returns
<br>The number of shells selected or null if menu cancelled<br>
Return type
<br>integer |
| --- |

| Example
<br>To select shells, flagging those selected with flag f:<br>
```
var total = Shell.Select(f);
```
 |
| --- |

* * *

| SetFlag(flag*[Flag]*)

Description<br>Sets a flag on a shell |
| --- |

#### Arguments

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) to set on the shell

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f on shell s:<br>
```
s.SetFlag(f);
```
 |
| --- |

* * *

| StrainTensor(options (optional)*[object]*)

Description<br>Returns the strain tensor for the shell |
| --- |

#### Arguments

* options (optional) (object)

Object containing options for getting data. Can be any of: 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| ip | integer | Integration point number to get the data at (ip &gt;= 1 or one of the constants [Constant.TOP](d3plot-constant-class.md#Constant.TOP), [Constant.MIDDLE](d3plot-constant-class.md#Constant.MIDDLE) or [Constant.BOTTOM](d3plot-constant-class.md#Constant.BOTTOM)) |
| op | integer | On plane integration point number for shells and thick shells (op &gt;= 1 [default]) |
| referenceFrame | constant | The frame of reference to return values in. Either [Constant.GLOBAL](d3plot-constant-class.md#Constant.GLOBAL) (default), [Constant.LOCAL](d3plot-constant-class.md#Constant.LOCAL), [Constant.CYLINDRICAL](d3plot-constant-class.md#Constant.CYLINDRICAL), [Constant.USER_DEFINED](d3plot-constant-class.md#Constant.USER_DEFINED) or [Constant.MATERIAL](d3plot-constant-class.md#Constant.MATERIAL) |

| Returns
<br>Array containing the strain tensor [Exx, Eyy, Ezz, Exy, Eyz, Ezx] (or null if the value cannot be calculated)<br>
Return type
<br>array |
| --- |

| Example
<br>To return the strain tensor of shell s:<br>
```
var tensor = s.StrainTensor();
if (tensor !== null) do_something...
```
 |
| --- |

* * *

| StressTensor(options (optional)*[object]*)

Description<br>Returns the stress tensor for the shell |
| --- |

#### Arguments

* options (optional) (object)

Object containing options for getting data. Can be any of: 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| ip | integer | Integration point number to get the data at (ip &gt;= 1 or one of the constants [Constant.TOP](d3plot-constant-class.md#Constant.TOP), [Constant.MIDDLE](d3plot-constant-class.md#Constant.MIDDLE) or [Constant.BOTTOM](d3plot-constant-class.md#Constant.BOTTOM)) |
| op | integer | On plane integration point number for shells and thick shells (op &gt;= 1 [default]) |
| referenceFrame | constant | The frame of reference to return values in. Either [Constant.GLOBAL](d3plot-constant-class.md#Constant.GLOBAL) (default), [Constant.LOCAL](d3plot-constant-class.md#Constant.LOCAL), [Constant.CYLINDRICAL](d3plot-constant-class.md#Constant.CYLINDRICAL), [Constant.USER_DEFINED](d3plot-constant-class.md#Constant.USER_DEFINED) or [Constant.MATERIAL](d3plot-constant-class.md#Constant.MATERIAL) |

| Returns
<br>Array containing the stress tensor [Exx, Eyy, Ezz, Exy, Eyz, Ezx] (or null if the value cannot be calculated)<br>
Return type
<br>array |
| --- |

| Example
<br>To return the stress tensor of shell s:<br>
```
var tensor = s.StressTensor();
if (tensor !== null) do_something...
```
 |
| --- |

* * *

| Topology()

Description<br>Returns the topology for the shell in the model |
| --- |

#### Arguments

No arguments

| Returns
<br>array of Node objects<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the topology for shell s:<br>
```
var topology = s.Topology();
```
 |
| --- |

* * *

| Total(model*[[Model](d3plot-model-class.md)]*) [static]
Description<br>Returns the total number of shells in the model |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) to get total in

| Returns
<br>The number of shells<br>
Return type
<br>integer |
| --- |

| Example
<br>To get the number of shells in model m:<br>
```
var total = Shell.Total(m);
```
 |
| --- |

* * *

| TotalDeleted(model*[[Model](d3plot-model-class.md)]*) [static]
Description<br>Returns the total number of shells that have been deleted in a model in the state given by its [state](d3plot-model-class.md#state) property |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) to get total in

| Returns
<br>The number of shells that have been deleted<br>
Return type
<br>integer |
| --- |

| Example
<br>To get the number of shells in model m that have been deleted in state 10:<br>
```
m.state = 10;
var total = Shell.TotalDeleted(m);
```
 |
| --- |

* * *

| Unblank(window*[GraphicsWindow]*)

Description<br>Unblanks the shell in a graphics window |
| --- |

#### Arguments

* window (GraphicsWindow)
 
[GraphicsWindow](d3plot-graphicswindow-class.md)) to unblank the shell in

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank shell s in graphics window g:<br>
```
s.Unblank(g);
```
 |
| --- |

* * *

| UnblankAll(window*[GraphicsWindow]*, model*[[Model](d3plot-model-class.md)]*) [static]
Description<br>Unblanks all of the shells in the model |
| --- |

#### Arguments

* window (GraphicsWindow)
 
[GraphicsWindow](d3plot-graphicswindow-class.md)) to unblank the shells in

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) that all the shells will be unblanked in

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the shells in model m, in graphics window gw:<br>
```
Shell.UnblankAll(gw, m);
```
 |
| --- |

* * *

| UnblankFlagged(window*[GraphicsWindow]*, model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*) [static]
Description<br>Unblanks all of the shells in the model flagged with a defined flag |
| --- |

#### Arguments

* window (GraphicsWindow)
 
[GraphicsWindow](d3plot-graphicswindow-class.md)) to unblank the shells in

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) that the flagged shells will be unblanked in

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) set on the shells to unblank

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the shells flagged with flag f in model m, in graphics window gw:<br>
```
Shell.UnblankFlagged(gw, m, f);
```
 |
| --- |

* * *

| UnflagAll(model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*) [static]
Description<br>Unsets a defined flag on all of the shells in the model |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) that the defined flag for all shells will be unset in

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) to unset on the shells

| Returns
<br>No return value |
| --- |

| Example
<br>To unset flag f on all of the shells in model m:<br>
```
Shell.UnflagAll(m, f);
```
 |
| --- |

* * *

| VonMisesStress(options (optional)*[object]*)

Description<br>Returns the von Mises stress for the shell (or null if the value cannot be calculated) |
| --- |

#### Arguments

* options (optional) (object)

Object containing options for getting data. Can be any of: 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| ip | integer | Integration point number to get the data at (ip &gt;= 1 or one of the constants [Constant.TOP](d3plot-constant-class.md#Constant.TOP), [Constant.MIDDLE](d3plot-constant-class.md#Constant.MIDDLE) or [Constant.BOTTOM](d3plot-constant-class.md#Constant.BOTTOM)) |
| op | integer | On plane integration point number for shells and thick shells (op &gt;= 1 [default]) |

| Returns
<br>von Mises stress<br>
Return type
<br>real |
| --- |

| Example
<br>To return the von Mises stress of shell s:<br>
```
var svm = s.VonMisesStress();
if (svm !== null) do_something...
```
 |
| --- |

* * *