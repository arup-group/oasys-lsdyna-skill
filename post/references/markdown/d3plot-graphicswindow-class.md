# GraphicsWindow class

The GraphicsWindow class gives you access to graphics windows in D3PLOT. [More...](d3plot-graphicswindow-class.md#GraphicsWindow_details)

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

* [First](d3plot-graphicswindow-class.md#GraphicsWindow::First)()
* [GetFromID](d3plot-graphicswindow-class.md#GraphicsWindow::GetFromID)(graphics window number*[integer]*)
* [Last](d3plot-graphicswindow-class.md#GraphicsWindow::Last)()
* [Total](d3plot-graphicswindow-class.md#GraphicsWindow::Total)()

## Member functions

* [AddModel](d3plot-graphicswindow-class.md#GraphicsWindow::AddModel)(model*[[Model](d3plot-model-class.md) object]*)
* [Delete](d3plot-graphicswindow-class.md#GraphicsWindow::Delete)()
* [GetModelInfo](d3plot-graphicswindow-class.md#GraphicsWindow::GetModelInfo)(index*[integer]*)
* [GetTargetEye](d3plot-graphicswindow-class.md#GraphicsWindow::GetTargetEye)()
* [Next](d3plot-graphicswindow-class.md#GraphicsWindow::Next)()
* [Previous](d3plot-graphicswindow-class.md#GraphicsWindow::Previous)()
* [Redraw](d3plot-graphicswindow-class.md#GraphicsWindow::Redraw)()
* [RemoveModel](d3plot-graphicswindow-class.md#GraphicsWindow::RemoveModel)(model*[[Model](d3plot-model-class.md) object]*)
* [SetModelInfo](d3plot-graphicswindow-class.md#GraphicsWindow::SetModelInfo)(index*[integer]*, info*[object]*)
* [SetTargetEye](d3plot-graphicswindow-class.md#GraphicsWindow::SetTargetEye)(info*[object]*)

## GraphicsWindow constants

### Constants for model offset

| **Name** | **Description** |
| --- | --- |
| GraphicsWindow.NO\_OFFSET | Model has no offset in the graphics window |
| GraphicsWindow.OFFSET\_MODEL\_SPACE | Model is offset in model space coordinates |
| GraphicsWindow.OFFSET\_SCREEN\_SPACE | Model is offset in screen space coordinates |

### Constants for up vector

| **Name** | **Description** |
| --- | --- |
| GraphicsWindow.UP\_AUTOMATIC | Automatically calculate up vector for target and eye |
| GraphicsWindow.UP\_X | Set up vector for target and eye to global X |
| GraphicsWindow.UP\_Y | Set up vector for target and eye to global Y |
| GraphicsWindow.UP\_Z | Set up vector for target and eye to global Z |

## GraphicsWindow properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| active | boolean | Whether the graphics window is active or not (equivalent to turning the window off/on in the GUI) |
| models (read only) | integer | The total number of models in this graphics window |
| number (read only) | integer | The graphics window number |
| state | integer | The current state displayed in this graphics window. Also see the Model [state](d3plot-model-class.md#state). |
| states (read only) | integer | The highest state number from all models in this graphics window |

| Detailed Description<br>The GraphicsWindow class allows you to do various operations on graphics windows in D3PLOT. There are various methods and properties available that allow you do create, delete and modify thems. See the documentation below for more details. |
| --- |

| Constructor
new GraphicsWindow(model*[[Model](d3plot-model-class.md) object]*)

Description<br>Creates a new graphics window in D3PLOT |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md) object)
 
The model to open in this graphics window
 
This argument can be repeated if required
Alternatively a single array argument containing the multiple values can be given

| Returns
<br>GraphicsWindow object<br>
Return type
<br>GraphicsWindow |
| --- |

| Example
<br>To create a graphics window containing [Model](d3plot-model-class.md) m in D3PLOT<br>
```
var gw = new GraphicsWindow(m);
```
 |
| --- |

| Details of functions 
AddModel(model*[[Model](d3plot-model-class.md) object]*)

Description<br>Adds a model to a graphics window |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md) object)
 
The model to add to the graphics window

| Returns
<br>No return value |
| --- |

| Example
<br>To add model m to graphics window gw in D3PLOT<br>
```
gw.AddModel(m);
```
 |
| --- |

* * *

| Delete()

Description<br>Deletes a graphics window in D3PLOT<br>**Do not use the GraphicsWindow object after calling this method**. |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To delete graphics window gw in D3PLOT<br>
```
gw.Delete();
```
 |
| --- |

* * *

| First() [static]
Description<br>Returns the GraphicsWindow object for the first graphics window in D3PLOT (or null if there are no graphics windows) |
| --- |

#### Arguments

No arguments

| Returns
<br>GraphicsWindow object<br>
Return type
<br>GraphicsWindow |
| --- |

| Example
<br>To get the GraphicsWindow object for the first graphics window:<br>
```
var gw = GraphicsWindow.First();
```
 |
| --- |

* * *

| GetFromID(graphics window number*[integer]*) [static]
Description<br>Returns the GraphicsWindow object for a graphics window ID (or null if graphics window does not exist) |
| --- |

#### Arguments

* graphics window number (integer)
 
number of the graphics window you want the GraphicsWindow object for

| Returns
<br>GraphicsWindow object<br>
Return type
<br>GraphicsWindow |
| --- |

| Example
<br>To get the GraphicsWindow object for graphics window number 1<br>
```
var gw = GraphicsWindow.GetFromID(1);
```
 |
| --- |

* * *

| GetModelInfo(index*[integer]*)

Description<br>Gets the information for a model in a graphics window |
| --- |

#### Arguments

* index (integer)
 
index of the model in the graphics window you want information for (0 &lt;= index &lt; [models](d3plot-graphicswindow-class.md#models))

| Returns |
| --- |

Object with the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| colour | [Colour](d3plot-colour-class.md) | The colour for the model |
| mode | constant | How the model is model is displayed in the graphics window. One of [View.WIRE](d3plot-view-class.md#View.WIRE), [View.HIDDEN](d3plot-view-class.md#View.HIDDEN), [View.SHADED](d3plot-view-class.md#View.SHADED) or [View.CURRENT](d3plot-view-class.md#View.CURRENT) |
| model | Model object | The model at the given index |
| offsetMode | constant | How the model is offset in the graphics window. One of [GraphicsWindow.NO_OFFSET](d3plot-graphicswindow-class.md#GraphicsWindow.NO_OFFSET), [GraphicsWindow.OFFSET_MODEL_SPACE](d3plot-graphicswindow-class.md#GraphicsWindow.OFFSET_MODEL_SPACE) or [GraphicsWindow.OFFSET_SCREEN_SPACE](d3plot-graphicswindow-class.md#GraphicsWindow.OFFSET_SCREEN_SPACE) |
| state | integer | The current state number for the model |
| visible | boolean | Whether the model is visible in the graphics window or not |
| xOffset | real | The X offset for the model |
| yOffset | real | The Y offset for the model |
| zOffset | real | The Z offset for the model |

#### Return type

object

| Example
<br>To get the information for the second model in graphics window gw:<br>
```
var info = gw.GetModelInfo(1);
```
 |
| --- |

* * *

| GetTargetEye()

Description<br>Get the current target and eye settings |
| --- |

#### Arguments

No arguments

| Returns |
| --- |

Object with the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| eye | array | Array containing the coordinates of the eye position |
| perspective | boolean | Whether the perspective switch is active |
| scale | real | Scale factor |
| target | array | Array containing the coordinates of the target position |
| up | constant/array | [GraphicsWindow.UP_AUTOMATIC](d3plot-graphicswindow-class.md#GraphicsWindow.UP_AUTOMATIC), [GraphicsWindow.UP_X](d3plot-graphicswindow-class.md#GraphicsWindow.UP_X), [GraphicsWindow.UP_Y](d3plot-graphicswindow-class.md#GraphicsWindow.UP_Y), [GraphicsWindow.UP_Z](d3plot-graphicswindow-class.md#GraphicsWindow.UP_Z) or an array containing the up vector if user defined |

#### Return type

object

| Example
<br>To get the current target and eye information for graphics window gw:<br>
```
var info = gw.GetTargetEye();
```
 |
| --- |

* * *

| Last() [static]
Description<br>Returns the GraphicsWindow object for the last graphics window in D3PLOT (or null if there are no graphics windows) |
| --- |

#### Arguments

No arguments

| Returns
<br>GraphicsWindow object<br>
Return type
<br>GraphicsWindow |
| --- |

| Example
<br>To get the GraphicsWindow object for the last graphics window:<br>
```
var gw = GraphicsWindow.Last();
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next graphics window (or null if there is not one) |
| --- |

#### Arguments

No arguments

| Returns
<br>GraphicsWindow object<br>
Return type
<br>GraphicsWindow |
| --- |

| Example
<br>To get the graphics window after graphics window gw:<br>
```
gw = gw.Next();
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous graphics window (or null if there is not one) |
| --- |

#### Arguments

No arguments

| Returns
<br>GraphicsWindow object<br>
Return type
<br>GraphicsWindow |
| --- |

| Example
<br>To get the graphics window before graphics window gw:<br>
```
gw = gw.Previous();
```
 |
| --- |

* * *

| Redraw()

Description<br>Redraws the graphics window |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To dedraw graphics window gw:<br>
```
gw.Redraw();
```
 |
| --- |

* * *

| RemoveModel(model*[[Model](d3plot-model-class.md) object]*)

Description<br>Removes a model from a graphics window |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md) object)
 
The model to remove from the graphics window

| Returns
<br>No return value |
| --- |

| Example
<br>To remove model m from graphics window gw in D3PLOT<br>
```
gw.RemoveModel(m);
```
 |
| --- |

* * *

| SetModelInfo(index*[integer]*, info*[object]*)

Description<br>Sets the information for a model in a graphics window |
| --- |

#### Arguments

* index (integer)
 
index of the model in the graphics window you want to set information for (0 &lt;= index &lt; [models](d3plot-graphicswindow-class.md#models))

* info (object)

Object containing the information to set. Can be any of: 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| colour | [Colour](d3plot-colour-class.md) | The colour for the model |
| mode | constant | How the model is model is displayed in the graphics window. One of [View.WIRE](d3plot-view-class.md#View.WIRE), [View.HIDDEN](d3plot-view-class.md#View.HIDDEN), [View.SHADED](d3plot-view-class.md#View.SHADED) or [View.CURRENT](d3plot-view-class.md#View.CURRENT) |
| offsetMode | constant | How the model is offset in the graphics window. One of [GraphicsWindow.NO_OFFSET](d3plot-graphicswindow-class.md#GraphicsWindow.NO_OFFSET), [GraphicsWindow.OFFSET_MODEL_SPACE](d3plot-graphicswindow-class.md#GraphicsWindow.OFFSET_MODEL_SPACE) or [GraphicsWindow.OFFSET_SCREEN_SPACE](d3plot-graphicswindow-class.md#GraphicsWindow.OFFSET_SCREEN_SPACE) |
| visible | boolean | Whether the model is visible in the graphics window or not |
| xOffset | real | The X offset for the model |
| yOffset | real | The Y offset for the model |
| zOffset | real | The Z offset for the model |

| Returns
<br>No return value |
| --- |

| Example
<br>To set the second model in graphics window gw to have an offset of (100, 100, 0) in model space:<br>
```
gw.SetModelInfo(1, { offsetMode: GraphicsWindow.OFFSET_MODEL_SPACE, xOffset: 100, yOffset:100, zOffset: 0 } );
```
 |
| --- |

* * *

| SetTargetEye(info*[object]*)

Description<br>Set the current target and eye settings |
| --- |

#### Arguments

* info (object)

Object containing the target and eye properties 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| eye | array | Array containing the coordinates of the eye position |
| perspective | boolean | Whether the perspective switch is active. If omitted the default is true |
| scale | real | Scale factor. If omitted, the scaling is automatically calculated (in the same way as if running D3PLOT interactively) |
| target | array | Array containing the coordinates of the target position |
| up | constant/array | [GraphicsWindow.UP_AUTOMATIC](d3plot-graphicswindow-class.md#GraphicsWindow.UP_AUTOMATIC), [GraphicsWindow.UP_X](d3plot-graphicswindow-class.md#GraphicsWindow.UP_X), [GraphicsWindow.UP_Y](d3plot-graphicswindow-class.md#GraphicsWindow.UP_Y), [GraphicsWindow.UP_Z](d3plot-graphicswindow-class.md#GraphicsWindow.UP_Z) or an array containing the up vector if user defined. If omitted the default is [GraphicsWindow.UP_AUTOMATIC](d3plot-graphicswindow-class.md#GraphicsWindow.UP_AUTOMATIC) |

| Returns
<br>No return value |
| --- |

| Example
<br>To set the eye position to (-2365.1, -373.2, 1081.1) looking at target (-2075.9, -367.7, 905.2) with the up vector in global Z, automatically turning on perspective and calculating the scale factor, in graphics window gw:<br>
```
gw.SetTargetEye( { eye: [-2365.1, -373.2, 1081.1], target: [-2075.9, -367.7, 905.2], up: GraphicsWindow.UP_Z } );
```
<br>To set the eye position to (-2365.1, -373.2, 1081.1) looking at target (-2075.9, -367.7, 905.2) with the up vector in global Z, turning off perspective and setting the scale factor to 10, in graphics window gw:<br>
```
gw.SetTargetEye( { eye: [-2365.1, -373.2, 1081.1], target: [-2075.9, -367.7, 905.2], up: GraphicsWindow.UP_Z, perspective: false, scale: 10 } );
```
 |
| --- |

* * *

| Total() [static]
Description<br>Returns the total number of graphics windows in use in D3PLOT |
| --- |

#### Arguments

No arguments

| Returns
<br>Total number of graphics windows<br>
Return type
<br>integer |
| --- |

| Example
<br>To get total number of graphics windows:<br>
```
var total = GraphicsWindow.Total();
```
 |
| --- |

* * *