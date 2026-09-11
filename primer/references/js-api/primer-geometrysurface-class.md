# GeometrySurface class

The GeometrySurface class gives you access to surfaces in PRIMER. [More...](primer-geometrysurface-class.md#GeometrySurface_details)

The PRIMER JavaScript API provides many class constants, properties and methods. For Arup to
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

* [BlankAll](primer-geometrysurface-class.md#GeometrySurface::BlankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [BlankFlagged](primer-geometrysurface-class.md#GeometrySurface::BlankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [First](primer-geometrysurface-class.md#GeometrySurface::First)(Model*[[Model](primer-model-class.md)]*)
* [FirstFreeLabel](primer-geometrysurface-class.md#GeometrySurface::FirstFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [FlagAll](primer-geometrysurface-class.md#GeometrySurface::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-geometrysurface-class.md#GeometrySurface::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-geometrysurface-class.md#GeometrySurface::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-geometrysurface-class.md#GeometrySurface::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-geometrysurface-class.md#GeometrySurface::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-geometrysurface-class.md#GeometrySurface::Last)(Model*[[Model](primer-model-class.md)]*)
* [LastFreeLabel](primer-geometrysurface-class.md#GeometrySurface::LastFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [NextFreeLabel](primer-geometrysurface-class.md#GeometrySurface::NextFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [Pick](primer-geometrysurface-class.md#GeometrySurface::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [RenumberAll](primer-geometrysurface-class.md#GeometrySurface::RenumberAll)(Model*[[Model](primer-model-class.md)]*, start*[integer]*)
* [RenumberFlagged](primer-geometrysurface-class.md#GeometrySurface::RenumberFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*)
* [Select](primer-geometrysurface-class.md#GeometrySurface::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-geometrysurface-class.md#GeometrySurface::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-geometrysurface-class.md#GeometrySurface::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnblankAll](primer-geometrysurface-class.md#GeometrySurface::UnblankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnblankFlagged](primer-geometrysurface-class.md#GeometrySurface::UnblankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [UnflagAll](primer-geometrysurface-class.md#GeometrySurface::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-geometrysurface-class.md#GeometrySurface::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-geometrysurface-class.md#GeometrySurface::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-geometrysurface-class.md#GeometrySurface::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Blank](primer-geometrysurface-class.md#GeometrySurface::Blank)()
* [Blanked](primer-geometrysurface-class.md#GeometrySurface::Blanked)()
* [CalculateNormal](primer-geometrysurface-class.md#GeometrySurface::CalculateNormal)(u*[real]*, y*[real]*)
* [CalculatePoint](primer-geometrysurface-class.md#GeometrySurface::CalculatePoint)(u*[real]*, v*[real]*)
* [ClearFlag](primer-geometrysurface-class.md#GeometrySurface::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-geometrysurface-class.md#GeometrySurface::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-geometrysurface-class.md#GeometrySurface::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Error](primer-geometrysurface-class.md#GeometrySurface::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-geometrysurface-class.md#GeometrySurface::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-geometrysurface-class.md#GeometrySurface::GetComments)()
* [GetEdgeIndices](primer-geometrysurface-class.md#GeometrySurface::GetEdgeIndices)()
* [GetParameter](primer-geometrysurface-class.md#GeometrySurface::GetParameter)(prop*[string]*)
* [GetTriaIndices](primer-geometrysurface-class.md#GeometrySurface::GetTriaIndices)()
* [GetVertices](primer-geometrysurface-class.md#GeometrySurface::GetVertices)()
* [Next](primer-geometrysurface-class.md#GeometrySurface::Next)()
* [Previous](primer-geometrysurface-class.md#GeometrySurface::Previous)()
* [ProjectPoint](primer-geometrysurface-class.md#GeometrySurface::ProjectPoint)(x*[real]*, y*[real]*, z*[real]*)
* [SetFlag](primer-geometrysurface-class.md#GeometrySurface::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Sketch](primer-geometrysurface-class.md#GeometrySurface::Sketch)(redraw (optional)*[boolean]*)
* [Unblank](primer-geometrysurface-class.md#GeometrySurface::Unblank)()
* [Unsketch](primer-geometrysurface-class.md#GeometrySurface::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-geometrysurface-class.md#GeometrySurface::ViewParameters)()
* [Warning](primer-geometrysurface-class.md#GeometrySurface::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-geometrysurface-class.md#GeometrySurface::Xrefs)()

## GeometrySurface properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists (read only) | logical | true if surface exists, false if referred to but not defined. |
| id (read only) | integer | [GeometrySurface](primer-geometrysurface-class.md) number. Also see the [label](primer-geometrysurface-class.md#label) property which is an alternative name for this. |
| include | integer | The [Include](primer-include-class.md) file number that the surface is in. |
| label (read only) | integer | [GeometrySurface](primer-geometrysurface-class.md) number. Also see the [id](primer-geometrysurface-class.md#id) property which is an alternative name for this. |
| model (read only) | integer | The [Model](primer-model-class.md) number that the surface is in. |

| Detailed Description<br>The GeometrySurface class allows you to create, modify, edit and manipulate surfaces cards.<br>See the documentation below for more details. |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a surface. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the surface

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the surface s:<br>
```
s.AssociateComment(c);
```
 |
| --- |

* * *

| Blank()

Description<br>Blanks the surface |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To blank surface s:<br>
```
s.Blank();
```
 |
| --- |

* * *

| BlankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the surfaces in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all surfaces will be blanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the surfaces in model m:<br>
```
GeometrySurface.BlankAll(m);
```
 |
| --- |

* * *

| BlankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the flagged surfaces in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged surfaces will be blanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the surfaces that you want to blank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the surfaces in model m flagged with f:<br>
```
GeometrySurface.BlankFlagged(m, f);
```
 |
| --- |

* * *

| Blanked()

Description<br>Checks if the surface is blanked or not. |
| --- |

#### Arguments

No arguments

| Returns
<br>true if blanked, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if surface s is blanked:<br>
```
if (s.Blanked() ) do_something...
```
 |
| --- |

* * *

| CalculateNormal(u*[real]*, y*[real]*)

Description<br>Calculate the normal vector for a parametric point on a surface. |
| --- |

#### Arguments

* u (real)
 
u parametric coordinate

* y (real)
 
v parametric coordinate

| Returns
<br>Array containing x, y and z values.<br>
Return type
<br>Array |
| --- |

| Example
<br>To obtain the surface normal at parametric point (0.2, 0.3) on surface s:<br>
```
var coords = s.CalculateNormal(0.2, 0.3);
```
 |
| --- |

* * *

| CalculatePoint(u*[real]*, v*[real]*)

Description<br>Calculate the X, Y and Z coordinates for a parametric point on a surface. |
| --- |

#### Arguments

* u (real)
 
u parametric coordinate

* v (real)
 
v parametric coordinate

| Returns
<br>Array containing x, y and z values.<br>
Return type
<br>Array |
| --- |

| Example
<br>To obtain the coordinates of parametric point (0.2, 0.3) on surface s:<br>
```
var coords = s.CalculatePoint(0.2, 0.3);
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the surface. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the surface

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for surface s:<br>
```
s.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the surface. The target include of the copied surface can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>GeometrySurface object<br>
Return type
<br>GeometrySurface |
| --- |

| Example
<br>To copy surface s into surface z:<br>
```
var z = s.Copy();
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a surface. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the surface

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the surface s:<br>
```
s.DetachComment(c);
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for surface. For more details on checking see the [Check](primer-check-class.md) class. |
| --- |

#### Arguments

* message (string)
 
The error message to give

* details (optional) (string)
 
An optional detailed error message

| Returns
<br>No return value |
| --- |

| Example
<br>To add an error message "My custom error" for surface s:<br>
```
s.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first surface in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first surface in

| Returns
<br>GeometrySurface object (or null if there are no surfaces in the model).<br>
Return type
<br>GeometrySurface |
| --- |

| Example
<br>To get the first surface in model m:<br>
```
var s = GeometrySurface.First(m);
```
 |
| --- |

* * *

| FirstFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the first free surface label in the model. Also see [GeometrySurface.LastFreeLabel()](primer-geometrysurface-class.md#GeometrySurface::LastFreeLabel), [GeometrySurface.NextFreeLabel()](primer-geometrysurface-class.md#GeometrySurface::NextFreeLabel) and [Model.FirstFreeItemLabel()](primer-model-class.md#Model::FirstFreeItemLabel). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first free surface label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *First free in layer* in editing panels). If omitted the whole model will be used (Equivalent to *First free* in editing panels).

| Returns
<br>GeometrySurface label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the first free surface label in model m:<br>
```
var label = GeometrySurface.FirstFreeLabel(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the surfaces in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all surfaces will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the surfaces

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the surfaces with flag f in model m:<br>
```
GeometrySurface.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the surface is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the surface

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if surface s has flag f set on it:<br>
```
if (s.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each surface in the model.<br> **Note that ForEach has been designed to make looping over surfaces as fast as possible and so has some limitations. Firstly, a single temporary GeometrySurface object is created and on each function call it is updated with the current surface data. This means that you should not try to store the GeometrySurface object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new surfaces inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all surfaces are in

* func (function)
 
Function to call for each surface

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the surfaces in model m:<br>
```
GeometrySurface.ForEach(m, test);
function test(s)
{
// s is GeometrySurface object
}
```
<br><br>To call function test for all of the surfaces in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
GeometrySurface.ForEach(m, test, data);
function test(s, extra)
{
// s is GeometrySurface object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of GeometrySurface objects or properties for all of the surfaces in a model in PRIMER. If the optional property argument is not given then an array of GeometrySurface objects is returned. If the property argument is given, that property value for each surface is returned in the array instead of a GeometrySurface object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get surfaces from

* property (optional) (string)
 
Name for property to get for all surfaces in the model

| Returns
<br>Array of GeometrySurface objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of GeometrySurface objects for all of the surfaces in model m:<br>
```
var a = GeometrySurface.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each surface in model m:<br>
```
var a = GeometrySurface.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a surface. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the surface s:<br>
```
var comm_array = s.GetComments();
```
 |
| --- |

* * *

| GetEdgeIndices()

Description<br>Return an array of all the edge indices for a surface (in pairs). |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of indices<br>
Return type
<br>Array |
| --- |

| Example
<br>To get edge indices for surface s<br>
```
var edges = s.GetEdgeIndices();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of GeometrySurface objects for all of the flagged surfaces in a model in PRIMER If the optional property argument is not given then an array of GeometrySurface objects is returned. If the property argument is given, then that property value for each surface is returned in the array instead of a GeometrySurface object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get surfaces from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the surfaces that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged surfaces in the model

| Returns
<br>Array of GeometrySurface objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of GeometrySurface objects for all of the surfaces in model m flagged with f:<br>
```
var s = GeometrySurface.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the surfaces in model m flagged with f:<br>
```
var a = GeometrySurface.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the GeometrySurface object for a surface ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the surface in

* number (integer)
 
number of the surface you want the GeometrySurface object for

| Returns
<br>GeometrySurface object (or null if surface does not exist).<br>
Return type
<br>GeometrySurface |
| --- |

| Example
<br>To get the GeometrySurface object for surface 100 in model m<br>
```
var s = GeometrySurface.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a GeometrySurface property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [GeometrySurface.ViewParameters()](primer-geometrysurface-class.md#GeometrySurface::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
surface property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if GeometrySurface property s.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (s.GetParameter(s.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if GeometrySurface property s.example is a parameter by using the GetParameter method:<br>
```
if (s.ViewParameters().GetParameter(s.example) ) do_something...
```
 |
| --- |

* * *

| GetTriaIndices()

Description<br>Return an array of all the tria indices for a surface (in triplets). |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of indices<br>
Return type
<br>Array |
| --- |

| Example
<br>To get tria indices for surface s<br>
```
var trias = s.GetTriaIndices();
```
 |
| --- |

* * *

| GetVertices()

Description<br>Return an array of all the vertex coordinates for a surface (in triplets). |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of indices<br>
Return type
<br>Array |
| --- |

| Example
<br>To get vertex coordinates for surface s<br>
```
var vertices = s.GetVertices();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last surface in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last surface in

| Returns
<br>GeometrySurface object (or null if there are no surfaces in the model).<br>
Return type
<br>GeometrySurface |
| --- |

| Example
<br>To get the last surface in model m:<br>
```
var s = GeometrySurface.Last(m);
```
 |
| --- |

* * *

| LastFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the last free surface label in the model. Also see [GeometrySurface.FirstFreeLabel()](primer-geometrysurface-class.md#GeometrySurface::FirstFreeLabel), [GeometrySurface.NextFreeLabel()](primer-geometrysurface-class.md#GeometrySurface::NextFreeLabel) and see [Model.LastFreeItemLabel()](primer-model-class.md#Model::LastFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last free surface label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest free in layer* in editing panels). If omitted the whole model will be used.

| Returns
<br>GeometrySurface label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the last free surface label in model m:<br>
```
var label = GeometrySurface.LastFreeLabel(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next surface in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>GeometrySurface object (or null if there are no more surfaces in the model).<br>
Return type
<br>GeometrySurface |
| --- |

| Example
<br>To get the surface in model m after surface s:<br>
```
var s = s.Next();
```
 |
| --- |

* * *

| NextFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the next free (highest+1) surface label in the model. Also see [GeometrySurface.FirstFreeLabel()](primer-geometrysurface-class.md#GeometrySurface::FirstFreeLabel), [GeometrySurface.LastFreeLabel()](primer-geometrysurface-class.md#GeometrySurface::LastFreeLabel) and [Model.NextFreeItemLabel()](primer-model-class.md#Model::NextFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get next free surface label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest+1 in layer* in editing panels). If omitted the whole model will be used (Equivalent to *Highest+1* in editing panels).

| Returns
<br>GeometrySurface label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the next free surface label in model m:<br>
```
var label = GeometrySurface.NextFreeLabel(m);
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a surface. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only surfaces from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only surfaces that are flagged with *limit* can be selected. If omitted, or null, any surfaces from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[GeometrySurface](primer-geometrysurface-class.md) object (or null if not picked)<br>
Return type
<br>GeometrySurface |
| --- |

| Example
<br>To pick a surface from model m giving the prompt 'Pick surface from screen':<br>
```
var s = GeometrySurface.Pick('Pick surface from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous surface in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>GeometrySurface object (or null if there are no more surfaces in the model).<br>
Return type
<br>GeometrySurface |
| --- |

| Example
<br>To get the surface in model m before surface s:<br>
```
var s = s.Previous();
```
 |
| --- |

* * *

| ProjectPoint(x*[real]*, y*[real]*, z*[real]*)

Description<br>Project a point onto the surface. |
| --- |

#### Arguments

* x (real)
 
X coordinate of point to project

* y (real)
 
Y coordinate of point to project

* z (real)
 
Z coordinate of point to project

| Returns
<br>Array containing u and v values.<br>
Return type
<br>Array |
| --- |

| Example
<br>To obtain the projection of point (1, 2, 3) on to surface s:<br>
```
var projection = s.ProjectPoint(1, 2, 3);
```
 |
| --- |

* * *

| RenumberAll(Model*[[Model](primer-model-class.md)]*, start*[integer]*) [static]
Description<br>Renumbers all of the surfaces in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all surfaces will be renumbered in

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the surfaces in model m, from 1000000:<br>
```
GeometrySurface.RenumberAll(m, 1000000);
```
 |
| --- |

* * *

| RenumberFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*) [static]
Description<br>Renumbers all of the flagged surfaces in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged surfaces will be renumbered in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the surfaces that you want to renumber

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the surfaces in model m flagged with f, from 1000000:<br>
```
GeometrySurface.RenumberFlagged(m, f, 1000000);
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select surfaces using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting surfaces

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only surfaces from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only surfaces that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any surfaces can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of surfaces selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select surfaces from model m, flagging those selected with flag f, giving the prompt 'Select surfaces':<br>
```
GeometrySurface.Select(f, 'Select surfaces', m);
```
<br><br>To select surfaces, flagging those selected with flag f but limiting selection to surfaces flagged with flag l, giving the prompt 'Select surfaces':<br>
```
GeometrySurface.Select(f, 'Select surfaces', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the surface. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the surface

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for surface s:<br>
```
s.SetFlag(f);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the surface. The surface will be sketched until you either call [GeometrySurface.Unsketch()](primer-geometrysurface-class.md#GeometrySurface::Unsketch), [GeometrySurface.UnsketchAll()](primer-geometrysurface-class.md#GeometrySurface::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the surface is sketched. If omitted redraw is true. If you want to sketch several surfaces and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch surface s:<br>
```
s.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged surfaces in the model. The surfaces will be sketched until you either call [GeometrySurface.Unsketch()](primer-geometrysurface-class.md#GeometrySurface::Unsketch), [GeometrySurface.UnsketchFlagged()](primer-geometrysurface-class.md#GeometrySurface::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged surfaces will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the surfaces that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the surfaces are sketched. If omitted redraw is true. If you want to sketch flagged surfaces several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all surfaces flagged with flag in model m:<br>
```
GeometrySurface.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of surfaces in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing surfaces should be counted. If false or omitted
referenced but undefined surfaces will also be included in the total.

| Returns
<br>number of surfaces<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of surfaces in model m:<br>
```
var total = GeometrySurface.Total(m);
```
 |
| --- |

* * *

| Unblank()

Description<br>Unblanks the surface |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank surface s:<br>
```
s.Unblank();
```
 |
| --- |

* * *

| UnblankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the surfaces in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all surfaces will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the surfaces in model m:<br>
```
GeometrySurface.UnblankAll(m);
```
 |
| --- |

* * *

| UnblankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the flagged surfaces in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the flagged surfaces will be unblanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the surfaces that you want to unblank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the surfaces in model m flagged with f:<br>
```
GeometrySurface.UnblankFlagged(m, f);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the surfaces in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all surfaces will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the surfaces

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the surfaces in model m:<br>
```
GeometrySurface.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the surface. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the surface is unsketched. If omitted redraw is true. If you want to unsketch several surfaces and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch surface s:<br>
```
s.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all surfaces. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all surfaces will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the surfaces are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all surfaces in model m:<br>
```
GeometrySurface.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged surfaces in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all surfaces will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the surfaces that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the surfaces are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all surfaces flagged with flag in model m:<br>
```
GeometrySurface.UnsketchAll(m, flag);
```
 |
| --- |

* * *

| ViewParameters()

Description<br>Object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. This function temporarily changes the behaviour so that if a property is a parameter the parameter name is returned instead. This can be used with 'method chaining' (see the example below) to make sure a property argument is correct. |
| --- |

#### Arguments

No arguments

| Returns
<br>[GeometrySurface](primer-geometrysurface-class.md) object.<br>
Return type
<br>GeometrySurface |
| --- |

| Example
<br>To check if GeometrySurface property s.example is a parameter by using the [GeometrySurface.GetParameter()](primer-geometrysurface-class.md#GeometrySurface::GetParameter) method:<br>
```
if (s.ViewParameters().GetParameter(s.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for surface. For more details on checking see the [Check](primer-check-class.md) class. |
| --- |

#### Arguments

* message (string)
 
The warning message to give

* details (optional) (string)
 
An optional detailed warning message

| Returns
<br>No return value |
| --- |

| Example
<br>To add a warning message "My custom warning" for surface s:<br>
```
s.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this surface. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for surface s:<br>
```
var xrefs = s.Xrefs();
```
 |
| --- |

* * *