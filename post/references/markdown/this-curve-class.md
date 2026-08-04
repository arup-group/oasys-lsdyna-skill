# Curve class

The Curve class gives you access to curves in T/HIS. [More...](this-curve-class.md#Curve_details)

The T/HIS JavaScript API provides many class constants, properties and methods. For Arup to
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

* [AddFlaggedToGraph](this-curve-class.md#Curve::AddFlaggedToGraph)(flag*[[Flag](this-global-class.md#global::AllocateFlag)]*, graph (optional)*[int]*)
* [Copy](this-curve-class.md#Curve::Copy)(source*[integer]*, target*[integer]*)
* [Delete](this-curve-class.md#Curve::Delete)(curve*[integer]*)
* [DeleteFlagged](this-curve-class.md#Curve::DeleteFlagged)(flag*[[Flag](this-global-class.md#global::AllocateFlag)]*)
* [Exists](this-curve-class.md#Curve::Exists)(curve*[integer]*)
* [First](this-curve-class.md#Curve::First)()
* [FirstFreeID](this-curve-class.md#Curve::FirstFreeID)()
* [FirstID](this-curve-class.md#Curve::FirstID)()
* [FlagAll](this-curve-class.md#Curve::FlagAll)(flag*[integer]*)
* [GetFlagged](this-curve-class.md#Curve::GetFlagged)(flag*[[Flag](this-global-class.md#global::AllocateFlag)]*)
* [GetFromID](this-curve-class.md#Curve::GetFromID)(ID*[integer]*)
* [GetFromTag](this-curve-class.md#Curve::GetFromTag)(TAG*[string]*)
* [HighestID](this-curve-class.md#Curve::HighestID)()
* [Pick](this-curve-class.md#Curve::Pick)(prompt*[string]*, modal (optional)*[boolean]*)
* [RemoveFlaggedFromGraph](this-curve-class.md#Curve::RemoveFlaggedFromGraph)(flag*[[Flag](this-global-class.md#global::AllocateFlag)]*, graph (optional)*[int]*)
* [Select](this-curve-class.md#Curve::Select)(flag*[integer]*, prompt*[string]*, modal (optional)*[boolean]*)
* [UnflagAll](this-curve-class.md#Curve::UnflagAll)(flag*[integer]*)

## Member functions

* [AddPoint](this-curve-class.md#Curve::AddPoint)(xvalue*[real]*, yvalue*[real]*)
* [AddToGraph](this-curve-class.md#Curve::AddToGraph)(graph (optional)*[int]*)
* [ClearFlag](this-curve-class.md#Curve::ClearFlag)(flag*[integer]*)
* [DeletePoint](this-curve-class.md#Curve::DeletePoint)(ipt*[integer]*)
* [Flagged](this-curve-class.md#Curve::Flagged)(flag*[integer]*)
* [Freeze](this-curve-class.md#Curve::Freeze)(graph*[integer]*, Freeze option*[integer]*)
* [GetPoint](this-curve-class.md#Curve::GetPoint)(row*[integer]*)
* [InsertPoint](this-curve-class.md#Curve::InsertPoint)(ipt*[integer]*, xvalue*[real]*, yvalue*[real]*, position*[integer]*)
* [Next](this-curve-class.md#Curve::Next)()
* [Previous](this-curve-class.md#Curve::Previous)()
* [RemoveFromGraph](this-curve-class.md#Curve::RemoveFromGraph)(graph (optional)*[int]*)
* [SetFlag](this-curve-class.md#Curve::SetFlag)(flag*[integer]*)
* [SetPoint](this-curve-class.md#Curve::SetPoint)(ipt*[integer]*, xvalue*[real]*, yvalue*[real]*)
* [Update](this-curve-class.md#Curve::Update)()
* [YatX](this-curve-class.md#Curve::YatX)(xvalue*[real]*)

## Curve constants

| **Name** | **Description** |
| --- | --- |
| Curve.AFTER | Insertion of curve data option. |
| Curve.BEFORE | Insertion of curve data option. |
| Curve.Y1\_AXIS | Y1 axis option. |
| Curve.Y2\_AXIS | Y2 axis option. |

## Curve properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| average (read only) | real | Curve average value |
| colour | integer | The [Colour](this-colour-class.md) of the curve |
| directory | string | Directory the curve came from |
| entity\_id | integer | The ID of the entity that the curve was generated from. |
| entity\_type | integer | The [Entity](this-entity-class.md) type that the curve was generated from |
| file | string | Filename the curve came from |
| hic (read only) | real | Curve HIC value - returns 0.0 if the HIC hasn't been calculated |
| hic\_tmax (read only) | real | End of HIC time windows - returns 0.0 if the HIC hasn't been calculated |
| hic\_tmin (read only) | real | Start of HIC time windows - returns 0.0 if the HIC hasn't been calculated |
| hicd (read only) | real | Curve HIC(d) value - returns 0.0 if the HIC(d) hasn't been calculated |
| hicd\_tmax (read only) | real | End of HIC(d) time windows - returns 0.0 if the HIC(d) hasn't been calculated |
| hicd\_tmin (read only) | real | Start of HIC(d) time windows - returns 0.0 if the HIC(d) hasn't been calculated |
| id (read only) | integer | Curve ID |
| is\_null (read only) | integer | Returns 1 if the curve is NULL |
| label | string | Curve label |
| model | integer | The ID of the model that a curve was read from. |
| npoints (read only) | integer | Number of curve points |
| regr\_rsq (read only) | real | Pearson's R^2 value for regression curve, returns 0.0 if the curve has not come from the regression operation. |
| regr\_sdgrad (read only) | real | Standard deviation of the linear regression gradient value, returns 0.0 if the curve has not come from linear regression. |
| regr\_sdicpt (read only) | real | Standard deviation of the linear regression intercept value, returns 0.0 if the curve has not come from linear regression. |
| regr\_sdyx (read only) | real | Standard deviation of the linear regression values 'y = bx + c', returns 0.0 if the curve has not come from linear regression. |
| rms (read only) | real | Curve RMS value |
| style | integer | The [LineStyle](this-linestyle-class.md) used to draw the curve |
| symbol | integer | The [Symbol](this-symbol-class.md) style for a curve |
| tag | string | Curve tag. If a FAST-TCF script is running then this is the FAST-TCF tag |
| title | string | Curve title |
| tms (read only) | real | 3ms Clip value - returns 0.0 if the 3ms Clip value hasn't been calculated |
| tms\_tmax (read only) | real | End of 3ms clip time windows - returns 0.0 if the 3ms Clip hasn't been calculated |
| tms\_tmin (read only) | real | Start of 3ms clip time windows - returns 0.0 if the 3ms Clip hasn't been calculated |
| unit\_system | integer | The Curve [UnitSystem](this-unitsystem-class.md) |
| width | integer | The [LineWidth](this-linewidth-class.md) used to draw the curve |
| x\_at\_ymax (read only) | real | X axis value at the Y axis maximum |
| x\_at\_ymin (read only) | real | X axis value at the Y axis minimum |
| x\_axis\_label | string | Curve X axis label |
| x\_axis\_unit | integer | The X axis [Units](this-units-class.md) |
| xmax (read only) | real | X axis maximum value |
| xmin (read only) | real | X axis minimum value |
| y\_axis | integer | The Y axis used by the curve ([Curve.Y1_AXIS](this-curve-class.md#Curve.Y1_AXIS) or [Curve.Y2_AXIS](this-curve-class.md#Curve.Y2_AXIS)).
(Note to turn on the display of the Y2 axis you need to set the [show_y2axis](this-graph-class.md#show_y2axis) on the graph to Graph.ON) |
| y\_axis\_label | string | Curve Y axis label |
| y\_axis\_unit | integer | The Y axis [Units](this-units-class.md) |
| ymax (read only) | real | Y axis maximum value |
| ymin (read only) | real | Y axis minimum value |

| Detailed Description<br>The Curve class allows you to create, modify, edit and manipulate curves.<br>See the documentation below for more details. |
| --- |

| Constructor
new Curve(lcid*[integer]*, tag (optional)*[string]*, Line label (optional)*[string]*, X-axis label (optional)*[string]*, Y-axis label (optional)*[string]*)

Description<br>Create a new [Curve](this-curve-class.md) object. The curve will be added to all the currently active graphs. |
| --- |

#### Arguments

* lcid (integer)
 
[Curve](this-curve-class.md) number

* tag (optional) (string)
 
Tag used to reference the curve in FAST-TCF scripts

* Line label (optional) (string)
 
Line label for the curve

* X-axis label (optional) (string)
 
X-axis label for the curve

* Y-axis label (optional) (string)
 
Y-axis label for the curve

| Returns
<br>[Curve](this-curve-class.md) object<br>
Return type
<br>Curve |
| --- |

| Example
<br>To create a new curve with label 200<br>
```
var l = new Curve(200);
```
 |
| --- |

| Details of functions 
AddFlaggedToGraph(flag*[[Flag](this-global-class.md#global::AllocateFlag)]*, graph (optional)*[int]*) [static]
Description<br>Adds flagged curves to a graph. |
| --- |

#### Arguments

* flag ([Flag](this-global-class.md#global::AllocateFlag))
 
Flag to check on the curve

* graph (optional) (int)
 
Graph to add the curve to. If undefined then the curve is added to all graphs.
 
This argument can be repeated if required
Alternatively a single array argument containing the multiple values can be given

| Returns
<br>No return value. |
| --- |

| Example
<br>To add curves flagged with flag f to graphs 1 and 3:<br>
```
Curve.AddFlaggedToGraph(f,1,3);
```
<br><br>To add curves flagged with flag to all graphs:<br>
```
Curve.AddToGraph(f);
```
 |
| --- |

* * *

| AddPoint(xvalue*[real]*, yvalue*[real]*)

Description<br>Adds a point at the end of the curve. |
| --- |

#### Arguments

* xvalue (real)
 
The x value of the point.

* yvalue (real)
 
The y value of the point.

| Returns
<br>No return value. |
| --- |

| Example
<br>To add the point x=3.5, y=5.5 to curve l:<br>
```
l.AddPoint(3.5,5.5);
```
 |
| --- |

* * *

| AddToGraph(graph (optional)*[int]*)

Description<br>Adds a curve to a graph. |
| --- |

#### Arguments

* graph (optional) (int)
 
Graph to add the curve to. If undefined then the curve is added to all graphs.
 
This argument can be repeated if required
Alternatively a single array argument containing the multiple values can be given

| Returns
<br>No return value. |
| --- |

| Example
<br>To add a curve (c) to graphs 1 and 3:<br>
```
c.AddToGraph(1,3);
```
<br><br>To add a curve (c) to all graphs:<br>
```
c.AddToGraph();
```
 |
| --- |

* * *

| ClearFlag(flag*[integer]*)

Description<br>Clears a flag on the curve. |
| --- |

#### Arguments

* flag (integer)
 
Flag to clear on the curve

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for curve l:<br>
```
l.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(source*[integer]*, target*[integer]*) [static]
Description<br>Copies a curve. |
| --- |

#### Arguments

* source (integer)
 
ID of curve to copy from

* target (integer)
 
ID of curve to copy to

| Returns
<br>No return value |
| --- |

| Example
<br>To copy curve 1 to curve 4:<br>
```
Curve.Copy(1,4);
```
<br><br>To copy curve a to curve b,<br>
```
Curve.Copy(a.id,b.id);
```
 |
| --- |

* * *

| Delete(curve*[integer]*) [static]
Description<br>Deletes a curve |
| --- |

#### Arguments

* curve (integer)
 
ID of curve to delete

| Returns
<br>No return value |
| --- |

| Example
<br>To delete curve n<br>
```
Curve.Delete(n);
```
 |
| --- |

* * *

| DeleteFlagged(flag*[[Flag](this-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Deletes flagged curves |
| --- |

#### Arguments

* flag ([Flag](this-global-class.md#global::AllocateFlag))
 
Flag to check on the curve

| Returns
<br>No return value |
| --- |

| Example
<br>To delete curves flagged with flag f<br>
```
Curve.DeleteFlagged(f);
```
 |
| --- |

* * *

| DeletePoint(ipt*[integer]*)

Description<br>Deletes a point in a curve. The input<br>for the point number should start at 1 for the 1st point not zero. |
| --- |

#### Arguments

* ipt (integer)
 
The point you want to insert the data before or after.

| Returns
<br>No return value. |
| --- |

| Example
<br>To delete the 3rd point in curve l:<br>
```
l.DeletePoint(3); 
```
 |
| --- |

* * *

| Exists(curve*[integer]*) [static]
Description<br>Checks if a curve exists |
| --- |

#### Arguments

* curve (integer)
 
ID of curve to check

| Returns
<br>TRUE if the curve exists, otherwise FALSE<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if a curve n exists<br>
```
var exists = Curve.Exists(n);
```
 |
| --- |

* * *

| First() [static]
Description<br>Returns the first curve. |
| --- |

#### Arguments

No arguments

| Returns
<br>Curve object (or null if there are no more curves in the model).<br>
Return type
<br>Curve |
| --- |

| Example
<br>To get the 1st curve<br>
```
var curve = Curve.First();
```
 |
| --- |

* * *

| FirstFreeID() [static]
Description<br>Returns the ID of the first free curve. |
| --- |

#### Arguments

No arguments

| Returns
<br>ID of first unsued curve.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the ID of the first free curve:<br>
```
var curve = Curve.FirstFreeID();
```
 |
| --- |

* * *

| FirstID() [static]
Description<br>Returns the ID of the first curve. |
| --- |

#### Arguments

No arguments

| Returns
<br>ID of the first curve defined.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the 1st curve<br>
```
var curve = Curve.FirstID();
```
 |
| --- |

* * *

| FlagAll(flag*[integer]*) [static]
Description<br>Flags all of the curves with a defined flag |
| --- |

#### Arguments

* flag (integer)
 
Flag to set on the curves

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the curves with flag f:<br>
```
Curve.FlagAll(f);
```
 |
| --- |

* * *

| Flagged(flag*[integer]*)

Description<br>Checks if the curve is flagged or not. |
| --- |

#### Arguments

* flag (integer)
 
Flag to check on the curve

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if curve d has flag f set on it:<br>
```
if (d.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| Freeze(graph*[integer]*, Freeze option*[integer]*)

Description<br>Freezes an unblanked curve on one or all graphs. |
| --- |

#### Arguments

* graph (integer)
 
Graph number to freeze curve on or 0 for all graphs.

* Freeze option (integer)
 
No argument or 1 to freeze the curve, 0 to unfreeze.

| Returns
<br>No return value |
| --- |

| Example
<br>To freeze a curve c on graph 3:<br>
```
c.Freeze(3,1)
```
 |
| --- |

* * *

| GetFlagged(flag*[[Flag](this-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Returns an array of all curves flagged with a given flag. |
| --- |

#### Arguments

* flag ([Flag](this-global-class.md#global::AllocateFlag))
 
Flag for which to return flagged objects.

| Returns
<br>Array of Curve objects (or null if no curves are flagged)<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the curves flagged with flag f:<br>
```
var curve_array = Curve.GetFlagged(f);
```
 |
| --- |

* * *

| GetFromID(ID*[integer]*) [static]
Description<br>Returns the curve object for a curve ID. |
| --- |

#### Arguments

* ID (integer)
 
ID of curve to return object for

| Returns
<br>Curve object (or null if the curve does not exist.<br>
Return type
<br>Curve |
| --- |

| Example
<br>To get the curve n<br>
```
var curve = Curve.GetFromID(n);
```
 |
| --- |

* * *

| GetFromTag(TAG*[string]*) [static]
Description<br>Finds a curve from it's Tag. This function is only available when running a Javascript from within a FAST-TCF script |
| --- |

#### Arguments

* TAG (string)
 
TAG of curve to return object for

| Returns
<br>Curve object (or null if there are no free curves).<br>
Return type
<br>Curve |
| --- |

| Example
<br>To get the curve with a tag "tag"<br>
```
var curve = Curve.GetFromTag(tag);
```
 |
| --- |

* * *

| GetPoint(row*[integer]*)

Description<br>Returns x and y data for a point in a curve. The input<br>for the point number should start at 1 for the 1st point not zero. In the array<br>returned array[0] contains the x axis value and array[1] contains the y-axis value. |
| --- |

#### Arguments

* row (integer)
 
The point you want the data for.

| Returns
<br>Array of point values<br>
Return type
<br>array |
| --- |

| Example
<br>To get the curve data for the 3rd point for curve l:<br>
```
if (l.npoints >= 3)
{
    var point_data = l.GetPoint(3);
}
```
 |
| --- |

* * *

| HighestID() [static]
Description<br>Returns the ID of the highest curve currently being used |
| --- |

#### Arguments

No arguments

| Returns
<br>ID of highest curve currently being used.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the highest curve ID<br>
```
var id= Curve.HighestID();
```
 |
| --- |

* * *

| InsertPoint(ipt*[integer]*, xvalue*[real]*, yvalue*[real]*, position*[integer]*)

Description<br>Inserts a new point before or after the specified point. |
| --- |

#### Arguments

* ipt (integer)
 
The point you want to insert the data before or after.

* xvalue (real)
 
The x value of the point.

* yvalue (real)
 
The y value of the point.

* position (integer)
 
Specify either before or after the selected pioint. Use 'Curve.BEFORE' for before, and 'Curve.AFTER' for after.

| Returns
<br>No return value. |
| --- |

| Example
<br>To insert the values after the 3rd row to x=3, y=5 for curve l:<br>
```
l.InsertPoint(3, 3, 5, Curve.AFTER);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next curve in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Curve object (or null if there are no more curves in the model).<br>
Return type
<br>Curve |
| --- |

| Example
<br>To get the curve in model m after curve l:<br>
```
var curve = l.Next();
```
 |
| --- |

* * *

| Pick(prompt*[string]*, modal (optional)*[boolean]*) [static]
Description<br>Picks a single curve. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in T/HIS until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Curve object (or null if the user cancels the pick operation).<br>
Return type
<br>Curve |
| --- |

| Example
<br>To pick a curve, giving the prompt 'Pick curve':<br>
```
var curve = Curve.Pick('Pick curves');
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous curve in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Curve object (or null if there are no more curves in the model).<br>
Return type
<br>Curve |
| --- |

| Example
<br>To get the curve in model m before this one:<br>
```
var curve = curve.Previous();
```
 |
| --- |

* * *

| RemoveFlaggedFromGraph(flag*[[Flag](this-global-class.md#global::AllocateFlag)]*, graph (optional)*[int]*) [static]
Description<br>Removes flagged curves from a graph. |
| --- |

#### Arguments

* flag ([Flag](this-global-class.md#global::AllocateFlag))
 
Flag to check on the curve

* graph (optional) (int)
 
Graph to remove the curve from. If undefined then the curve is removed from all graphs.
 
This argument can be repeated if required
Alternatively a single array argument containing the multiple values can be given

| Returns
<br>No return value. |
| --- |

| Example
<br>To remove curves flagged with flag f from graphs 1 and 3:<br>
```
Curve.RemoveFlaggedFromGraph(f,1,3);
```
<br><br>To remove curves flagged with flag f from all graphs:<br>
```
Curve.RemoveFlaggedFromGraph(f);
```
 |
| --- |

* * *

| RemoveFromGraph(graph (optional)*[int]*)

Description<br>Removes a curve from a graph. |
| --- |

#### Arguments

* graph (optional) (int)
 
Graph to remove the curve from, If undefined then the curve is removed from all graphs.
 
This argument can be repeated if required
Alternatively a single array argument containing the multiple values can be given

| Returns
<br>No return value. |
| --- |

| Example
<br>To remove a curve (c) from graphs 1 and 3:<br>
```
c.RemoveFromGraph(1,3);
```
<br><br>To remove a curve (c) from all graphs:<br>
```
c.RemoveFromGraph();
```
 |
| --- |

* * *

| Select(flag*[integer]*, prompt*[string]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select curves. |
| --- |

#### Arguments

* flag (integer)
 
Flag to use when selecting curves

* prompt (string)
 
Text to display as a prompt to the user

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in T/HIS until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of items selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select curves, flagging those selected which flag f, giving the prompt 'Select curves':<br>
```
var num = Curve.Select(f, 'Select curves');
```
 |
| --- |

* * *

| SetFlag(flag*[integer]*)

Description<br>Sets a flag on the curve. |
| --- |

#### Arguments

* flag (integer)
 
Flag to set on the curve

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for curve l:<br>
```
l.SetFlag(f);
```
 |
| --- |

* * *

| SetPoint(ipt*[integer]*, xvalue*[real]*, yvalue*[real]*)

Description<br>Sets the x and y values for a specified point in a curve. |
| --- |

#### Arguments

* ipt (integer)
 
The point to set the data for.

* xvalue (real)
 
The x value of the point.

* yvalue (real)
 
The y value of the point.

| Returns
<br>No return value. |
| --- |

| Example
<br>To set the values for the 3rd point to x=3, y=5 for curve l:<br>
```
l.SetPoint(3, 3, 5);
```
 |
| --- |

* * *

| UnflagAll(flag*[integer]*) [static]
Description<br>Unsets a defined flag on all of the curves. |
| --- |

#### Arguments

* flag (integer)
 
Flag to unset on the curves

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all of the curves:<br>
```
Curve.UnflagAll(f);
```
 |
| --- |

* * *

| Update()

Description<br>Updates a curve properties (min,max, average values etc). |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value. |
| --- |

| Example
<br>To update the properties of curve l:<br>
```
l.Update();
```
 |
| --- |

* * *

| YatX(xvalue*[real]*)

Description<br>Returns the y value of the curve at a given x value, interpolating if requested x value lies between data points. |
| --- |

#### Arguments

* xvalue (real)
 
The x value.

| Returns
<br>Y value<br>
Return type
<br>real |
| --- |

| Example
<br>To get the y value of curve c when x=1.4:<br>
```
var y = c.YatX(1.4);
```
 |
| --- |

* * *