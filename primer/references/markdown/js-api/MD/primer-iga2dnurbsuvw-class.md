# IGA2DNurbsUVW class

The IGA2DNurbsUVW class gives you access to IGA 2d nurbs uvw cards in PRIMER. [More...](primer-iga2dnurbsuvw-class.md#IGA2DNurbsUVW_details)

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

* [Create](primer-iga2dnurbsuvw-class.md#IGA2DNurbsUVW::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [First](primer-iga2dnurbsuvw-class.md#IGA2DNurbsUVW::First)(Model*[[Model](primer-model-class.md)]*)
* [FirstFreeLabel](primer-iga2dnurbsuvw-class.md#IGA2DNurbsUVW::FirstFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [FlagAll](primer-iga2dnurbsuvw-class.md#IGA2DNurbsUVW::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-iga2dnurbsuvw-class.md#IGA2DNurbsUVW::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-iga2dnurbsuvw-class.md#IGA2DNurbsUVW::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-iga2dnurbsuvw-class.md#IGA2DNurbsUVW::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-iga2dnurbsuvw-class.md#IGA2DNurbsUVW::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-iga2dnurbsuvw-class.md#IGA2DNurbsUVW::Last)(Model*[[Model](primer-model-class.md)]*)
* [LastFreeLabel](primer-iga2dnurbsuvw-class.md#IGA2DNurbsUVW::LastFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [NextFreeLabel](primer-iga2dnurbsuvw-class.md#IGA2DNurbsUVW::NextFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [RenumberAll](primer-iga2dnurbsuvw-class.md#IGA2DNurbsUVW::RenumberAll)(Model*[[Model](primer-model-class.md)]*, start*[integer]*)
* [RenumberFlagged](primer-iga2dnurbsuvw-class.md#IGA2DNurbsUVW::RenumberFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*)
* [Select](primer-iga2dnurbsuvw-class.md#IGA2DNurbsUVW::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-iga2dnurbsuvw-class.md#IGA2DNurbsUVW::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-iga2dnurbsuvw-class.md#IGA2DNurbsUVW::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnflagAll](primer-iga2dnurbsuvw-class.md#IGA2DNurbsUVW::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-iga2dnurbsuvw-class.md#IGA2DNurbsUVW::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-iga2dnurbsuvw-class.md#IGA2DNurbsUVW::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-iga2dnurbsuvw-class.md#IGA2DNurbsUVW::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Browse](primer-iga2dnurbsuvw-class.md#IGA2DNurbsUVW::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-iga2dnurbsuvw-class.md#IGA2DNurbsUVW::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-iga2dnurbsuvw-class.md#IGA2DNurbsUVW::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-iga2dnurbsuvw-class.md#IGA2DNurbsUVW::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-iga2dnurbsuvw-class.md#IGA2DNurbsUVW::Edit)(modal (optional)*[boolean]*)
* [Error](primer-iga2dnurbsuvw-class.md#IGA2DNurbsUVW::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-iga2dnurbsuvw-class.md#IGA2DNurbsUVW::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-iga2dnurbsuvw-class.md#IGA2DNurbsUVW::GetComments)()
* [GetControlPoint](primer-iga2dnurbsuvw-class.md#IGA2DNurbsUVW::GetControlPoint)(index*[integer]*)
* [GetParameter](primer-iga2dnurbsuvw-class.md#IGA2DNurbsUVW::GetParameter)(prop*[string]*)
* [GetRKnotVector](primer-iga2dnurbsuvw-class.md#IGA2DNurbsUVW::GetRKnotVector)(index*[integer]*)
* [GetSKnotVector](primer-iga2dnurbsuvw-class.md#IGA2DNurbsUVW::GetSKnotVector)(index*[integer]*)
* [Keyword](primer-iga2dnurbsuvw-class.md#IGA2DNurbsUVW::Keyword)()
* [KeywordCards](primer-iga2dnurbsuvw-class.md#IGA2DNurbsUVW::KeywordCards)()
* [Next](primer-iga2dnurbsuvw-class.md#IGA2DNurbsUVW::Next)()
* [Previous](primer-iga2dnurbsuvw-class.md#IGA2DNurbsUVW::Previous)()
* [SetControlPoint](primer-iga2dnurbsuvw-class.md#IGA2DNurbsUVW::SetControlPoint)(index*[integer]*, data*[Array of data]*)
* [SetFlag](primer-iga2dnurbsuvw-class.md#IGA2DNurbsUVW::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [SetRKnotVector](primer-iga2dnurbsuvw-class.md#IGA2DNurbsUVW::SetRKnotVector)(index*[integer]*, r*[real]*)
* [SetSKnotVector](primer-iga2dnurbsuvw-class.md#IGA2DNurbsUVW::SetSKnotVector)(index*[integer]*, r*[real]*)
* [Sketch](primer-iga2dnurbsuvw-class.md#IGA2DNurbsUVW::Sketch)(redraw (optional)*[boolean]*)
* [Unsketch](primer-iga2dnurbsuvw-class.md#IGA2DNurbsUVW::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-iga2dnurbsuvw-class.md#IGA2DNurbsUVW::ViewParameters)()
* [Warning](primer-iga2dnurbsuvw-class.md#IGA2DNurbsUVW::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-iga2dnurbsuvw-class.md#IGA2DNurbsUVW::Xrefs)()
* [toString](primer-iga2dnurbsuvw-class.md#IGA2DNurbsUVW::toString)()

## IGA2DNurbsUVW properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists (read only) | logical | true if IGA 2D Nurbs UVW exists, false if referred to but not defined. |
| include | integer | The [Include](primer-include-class.md) file number that the IGA 2D Nurbs UVW is in. |
| label | integer | [IGA2DNurbsUVW](primer-iga2dnurbsuvw-class.md) number. Also see the [patchid](primer-iga2dnurbsuvw-class.md#patchid) property which is an alternative name for this. |
| model (read only) | integer | The [Model](primer-model-class.md) number that the IGA 2D Nurbs UVW is in. |
| nr | integer | Number of control points in the local r-direction. |
| ns | integer | Number of control points in the local s-direction. |
| patchid | integer | [IGA2DNurbsUVW](primer-iga2dnurbsuvw-class.md) number. Also see the [label](primer-iga2dnurbsuvw-class.md#label) property which is an alternative name for this. |
| pr | integer | Polynomial degree of the basis in the local r-direction. |
| ps | integer | Polynomial degree of the basis in the local s-direction. |
| rfirst | real | First knot value in the local r-direction. |
| rlast | real | Last knot value in the local r-direction. |
| sfirst | real | First knot value in the local s-direction. |
| slast | real | Last knot value in the local s-direction. |
| unir | integer | Knot vector type in the local r-direction. |
| unis | integer | Knot vector type in the local s-direction. |

| Detailed Description<br>The IGA2DNurbsUVW class allows you to create, modify, edit and manipulate IGA 2d nurbs uvw cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new IGA2DNurbsUVW(Model*[[Model](primer-model-class.md)]*, details*[object]*)

Description<br>Create a new [IGA2DNurbsUVW](primer-iga2dnurbsuvw-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that IGA 2d nurbs uvw will be created in

* details (object)

Details for creating the [IGA2DNurbsUVW](primer-iga2dnurbsuvw-class.md) 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| nr (optional) | integer | Number of control points in the local r-direction. |
| ns (optional) | integer | Number of control points in the local s-direction. |
| patchid | integer | ID of the IGA 2D Nurbs UVW. |
| pr (optional) | integer | Polynomial degree of the basis in the local r-direction. |
| ps (optional) | integer | Polynomial degree of the basis in the local s-direction. |
| unir (optional) | integer | Knot vector type in the local r-direction. |
| unis (optional) | integer | Knot vector type in the local s-direction. |

| Returns
<br>[IGA2DNurbsUVW](primer-iga2dnurbsuvw-class.md) object<br>
Return type
<br>IGA2DNurbsUVW |
| --- |

| Example
<br>To create a new IGA 2d nurbs uvw in model m of id 10:<br>
```
var ig2u = new IGA2DNurbsUVW(m, {patchid:10});
```
<br>To create a new IGA 2d nurbs uvw in model m of id 11 with nr, ns, pr, ps, unir, unis as 12, 13, 14, 15, 21, 22 respectively:<br>
```
var ig2u = new IGA2DNurbsUVW(m, {patchid:11, nr:12, ns:13, pr:14, ps:15, unir:21, unis:22});
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a IGA 2D Nurbs UVW. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the IGA 2D Nurbs UVW

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the IGA 2D Nurbs UVW ig2u:<br>
```
ig2u.AssociateComment(c);
```
 |
| --- |

* * *

| Browse(modal (optional)*[boolean]*)

Description<br>Starts an edit panel in Browse mode. |
| --- |

#### Arguments

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>no return value |
| --- |

| Example
<br>To Browse IGA 2D Nurbs UVW ig2u:<br>
```
ig2u.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the IGA 2D Nurbs UVW. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the IGA 2D Nurbs UVW

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for IGA 2D Nurbs UVW ig2u:<br>
```
ig2u.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the IGA 2D Nurbs UVW. The target include of the copied IGA 2D Nurbs UVW can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>IGA2DNurbsUVW object<br>
Return type
<br>IGA2DNurbsUVW |
| --- |

| Example
<br>To copy IGA 2D Nurbs UVW ig2u into IGA 2D Nurbs UVW z:<br>
```
var z = ig2u.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a IGA 2D Nurbs UVW |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the IGA 2D Nurbs UVW will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>IGA2DNurbsUVW object (or null if not made).<br>
Return type
<br>IGA2DNurbsUVW |
| --- |

| Example
<br>To start creating a IGA 2D Nurbs UVW in model m:<br>
```
var ig2u = IGA2DNurbsUVW.Create(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a IGA 2D Nurbs UVW. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the IGA 2D Nurbs UVW

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the IGA 2D Nurbs UVW ig2u:<br>
```
ig2u.DetachComment(c);
```
 |
| --- |

* * *

| Edit(modal (optional)*[boolean]*)

Description<br>Starts an interactive editing panel. |
| --- |

#### Arguments

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>no return value |
| --- |

| Example
<br>To Edit IGA 2D Nurbs UVW ig2u:<br>
```
ig2u.Edit();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for IGA 2D Nurbs UVW. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for IGA 2D Nurbs UVW ig2u:<br>
```
ig2u.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first IGA 2D Nurbs UVW in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first IGA 2D Nurbs UVW in

| Returns
<br>IGA2DNurbsUVW object (or null if there are no IGA 2D Nurbs UVWs in the model).<br>
Return type
<br>IGA2DNurbsUVW |
| --- |

| Example
<br>To get the first IGA 2D Nurbs UVW in model m:<br>
```
var ig2u = IGA2DNurbsUVW.First(m);
```
 |
| --- |

* * *

| FirstFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the first free IGA 2D Nurbs UVW label in the model. Also see [IGA2DNurbsUVW.LastFreeLabel()](primer-iga2dnurbsuvw-class.md#IGA2DNurbsUVW::LastFreeLabel), [IGA2DNurbsUVW.NextFreeLabel()](primer-iga2dnurbsuvw-class.md#IGA2DNurbsUVW::NextFreeLabel) and [Model.FirstFreeItemLabel()](primer-model-class.md#Model::FirstFreeItemLabel). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first free IGA 2D Nurbs UVW label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *First free in layer* in editing panels). If omitted the whole model will be used (Equivalent to *First free* in editing panels).

| Returns
<br>IGA2DNurbsUVW label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the first free IGA 2D Nurbs UVW label in model m:<br>
```
var label = IGA2DNurbsUVW.FirstFreeLabel(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the IGA 2D Nurbs UVWs in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all IGA 2D Nurbs UVWs will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the IGA 2D Nurbs UVWs

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the IGA 2D Nurbs UVWs with flag f in model m:<br>
```
IGA2DNurbsUVW.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the IGA 2D Nurbs UVW is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the IGA 2D Nurbs UVW

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if IGA 2D Nurbs UVW ig2u has flag f set on it:<br>
```
if (ig2u.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each IGA 2D Nurbs UVW in the model.<br> **Note that ForEach has been designed to make looping over IGA 2D Nurbs UVWs as fast as possible and so has some limitations. Firstly, a single temporary IGA2DNurbsUVW object is created and on each function call it is updated with the current IGA 2D Nurbs UVW data. This means that you should not try to store the IGA2DNurbsUVW object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new IGA 2D Nurbs UVWs inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all IGA 2D Nurbs UVWs are in

* func (function)
 
Function to call for each IGA 2D Nurbs UVW

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the IGA 2D Nurbs UVWs in model m:<br>
```
IGA2DNurbsUVW.ForEach(m, test);
function test(ig2u)
{
// ig2u is IGA2DNurbsUVW object
}
```
<br><br>To call function test for all of the IGA 2D Nurbs UVWs in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
IGA2DNurbsUVW.ForEach(m, test, data);
function test(ig2u, extra)
{
// ig2u is IGA2DNurbsUVW object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of IGA2DNurbsUVW objects or properties for all of the IGA 2D Nurbs UVWs in a model in PRIMER. If the optional property argument is not given then an array of IGA2DNurbsUVW objects is returned. If the property argument is given, that property value for each IGA 2D Nurbs UVW is returned in the array instead of a IGA2DNurbsUVW object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get IGA 2D Nurbs UVWs from

* property (optional) (string)
 
Name for property to get for all IGA 2D Nurbs UVWs in the model

| Returns
<br>Array of IGA2DNurbsUVW objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of IGA2DNurbsUVW objects for all of the IGA 2D Nurbs UVWs in model m:<br>
```
var a = IGA2DNurbsUVW.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each IGA 2D Nurbs UVW in model m:<br>
```
var a = IGA2DNurbsUVW.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a IGA 2D Nurbs UVW. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the IGA 2D Nurbs UVW ig2u:<br>
```
var comm_array = ig2u.GetComments();
```
 |
| --- |

* * *

| GetControlPoint(index*[integer]*)

Description<br>Returns the data for a specific control point an an array. There are [nr](primer-iga2dnurbsuvw-class.md#nr) x [ns](primer-iga2dnurbsuvw-class.md#ns) control points. |
| --- |

#### Arguments

* index (integer)
 
Index you want the control data for. **Note that indices start at 0**.

| Returns
<br>An array containing the control point data.<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the data for the 3rd control point in IGA 2d nurbs uvw ig2u:<br>
```
var data = ig2u.GetControlPoint(2);
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of IGA2DNurbsUVW objects for all of the flagged IGA 2D Nurbs UVWs in a model in PRIMER If the optional property argument is not given then an array of IGA2DNurbsUVW objects is returned. If the property argument is given, then that property value for each IGA 2D Nurbs UVW is returned in the array instead of a IGA2DNurbsUVW object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get IGA 2D Nurbs UVWs from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the IGA 2D Nurbs UVWs that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged IGA 2D Nurbs UVWs in the model

| Returns
<br>Array of IGA2DNurbsUVW objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of IGA2DNurbsUVW objects for all of the IGA 2D Nurbs UVWs in model m flagged with f:<br>
```
var ig2u = IGA2DNurbsUVW.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the IGA 2D Nurbs UVWs in model m flagged with f:<br>
```
var a = IGA2DNurbsUVW.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the IGA2DNurbsUVW object for a IGA 2D Nurbs UVW ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the IGA 2D Nurbs UVW in

* number (integer)
 
number of the IGA 2D Nurbs UVW you want the IGA2DNurbsUVW object for

| Returns
<br>IGA2DNurbsUVW object (or null if IGA 2D Nurbs UVW does not exist).<br>
Return type
<br>IGA2DNurbsUVW |
| --- |

| Example
<br>To get the IGA2DNurbsUVW object for IGA 2D Nurbs UVW 100 in model m<br>
```
var ig2u = IGA2DNurbsUVW.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a IGA2DNurbsUVW property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [IGA2DNurbsUVW.ViewParameters()](primer-iga2dnurbsuvw-class.md#IGA2DNurbsUVW::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
IGA 2D Nurbs UVW property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if IGA2DNurbsUVW property ig2u.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (ig2u.GetParameter(ig2u.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if IGA2DNurbsUVW property ig2u.example is a parameter by using the GetParameter method:<br>
```
if (ig2u.ViewParameters().GetParameter(ig2u.example) ) do_something...
```
 |
| --- |

* * *

| GetRKnotVector(index*[integer]*)

Description<br>The data for Knot values in the local r-direction. |
| --- |

#### Arguments

* index (integer)
 
Index you want the r-knot value for. **Note that indices start at 0**.

| Returns
<br>Knot values in the local r-direction.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the 3rd r-knot value in IGA 2d nurbs uvw ig2u:<br>
```
var data = ig2u.GetRKnotVector(2);
```
 |
| --- |

* * *

| GetSKnotVector(index*[integer]*)

Description<br>The data for Knot values in the local r-direction. |
| --- |

#### Arguments

* index (integer)
 
Index you want the s-knot value for. **Note that indices start at 0**.

| Returns
<br>Knot values in the local s-direction.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the 3rd s-knot value in IGA 2d nurbs uvw ig2u:<br>
```
var data = ig2u.GetSKnotVector(2);
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this IGA 2d nurbs uvw (\*IGA\_2D\_NURBS\_UVW). **Note that a carriage return is not added**. See also [IGA2DNurbsUVW.KeywordCards()](primer-iga2dnurbsuvw-class.md#IGA2DNurbsUVW::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for IGA 2d nurbs uvw ig2u:<br>
```
var key = ig2u.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the IGA 2d nurbs uvw. **Note that a carriage return is not added**. See also [IGA2DNurbsUVW.Keyword()](primer-iga2dnurbsuvw-class.md#IGA2DNurbsUVW::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for IGA 2d nurbs uvw ig2u:<br>
```
var cards = ig2u.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last IGA 2D Nurbs UVW in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last IGA 2D Nurbs UVW in

| Returns
<br>IGA2DNurbsUVW object (or null if there are no IGA 2D Nurbs UVWs in the model).<br>
Return type
<br>IGA2DNurbsUVW |
| --- |

| Example
<br>To get the last IGA 2D Nurbs UVW in model m:<br>
```
var ig2u = IGA2DNurbsUVW.Last(m);
```
 |
| --- |

* * *

| LastFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the last free IGA 2D Nurbs UVW label in the model. Also see [IGA2DNurbsUVW.FirstFreeLabel()](primer-iga2dnurbsuvw-class.md#IGA2DNurbsUVW::FirstFreeLabel), [IGA2DNurbsUVW.NextFreeLabel()](primer-iga2dnurbsuvw-class.md#IGA2DNurbsUVW::NextFreeLabel) and see [Model.LastFreeItemLabel()](primer-model-class.md#Model::LastFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last free IGA 2D Nurbs UVW label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest free in layer* in editing panels). If omitted the whole model will be used.

| Returns
<br>IGA2DNurbsUVW label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the last free IGA 2D Nurbs UVW label in model m:<br>
```
var label = IGA2DNurbsUVW.LastFreeLabel(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next IGA 2D Nurbs UVW in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>IGA2DNurbsUVW object (or null if there are no more IGA 2D Nurbs UVWs in the model).<br>
Return type
<br>IGA2DNurbsUVW |
| --- |

| Example
<br>To get the IGA 2D Nurbs UVW in model m after IGA 2D Nurbs UVW ig2u:<br>
```
var ig2u = ig2u.Next();
```
 |
| --- |

* * *

| NextFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the next free (highest+1) IGA 2D Nurbs UVW label in the model. Also see [IGA2DNurbsUVW.FirstFreeLabel()](primer-iga2dnurbsuvw-class.md#IGA2DNurbsUVW::FirstFreeLabel), [IGA2DNurbsUVW.LastFreeLabel()](primer-iga2dnurbsuvw-class.md#IGA2DNurbsUVW::LastFreeLabel) and [Model.NextFreeItemLabel()](primer-model-class.md#Model::NextFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get next free IGA 2D Nurbs UVW label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest+1 in layer* in editing panels). If omitted the whole model will be used (Equivalent to *Highest+1* in editing panels).

| Returns
<br>IGA2DNurbsUVW label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the next free IGA 2D Nurbs UVW label in model m:<br>
```
var label = IGA2DNurbsUVW.NextFreeLabel(m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous IGA 2D Nurbs UVW in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>IGA2DNurbsUVW object (or null if there are no more IGA 2D Nurbs UVWs in the model).<br>
Return type
<br>IGA2DNurbsUVW |
| --- |

| Example
<br>To get the IGA 2D Nurbs UVW in model m before IGA 2D Nurbs UVW ig2u:<br>
```
var ig2u = ig2u.Previous();
```
 |
| --- |

* * *

| RenumberAll(Model*[[Model](primer-model-class.md)]*, start*[integer]*) [static]
Description<br>Renumbers all of the IGA 2D Nurbs UVWs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all IGA 2D Nurbs UVWs will be renumbered in

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the IGA 2D Nurbs UVWs in model m, from 1000000:<br>
```
IGA2DNurbsUVW.RenumberAll(m, 1000000);
```
 |
| --- |

* * *

| RenumberFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*) [static]
Description<br>Renumbers all of the flagged IGA 2D Nurbs UVWs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged IGA 2D Nurbs UVWs will be renumbered in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the IGA 2D Nurbs UVWs that you want to renumber

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the IGA 2D Nurbs UVWs in model m flagged with f, from 1000000:<br>
```
IGA2DNurbsUVW.RenumberFlagged(m, f, 1000000);
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select IGA 2D Nurbs UVWs using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting IGA 2D Nurbs UVWs

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only IGA 2D Nurbs UVWs from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only IGA 2D Nurbs UVWs that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any IGA 2D Nurbs UVWs can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of IGA 2D Nurbs UVWs selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select IGA 2D Nurbs UVWs from model m, flagging those selected with flag f, giving the prompt 'Select IGA 2D Nurbs UVWs':<br>
```
IGA2DNurbsUVW.Select(f, 'Select IGA 2D Nurbs UVWs', m);
```
<br><br>To select IGA 2D Nurbs UVWs, flagging those selected with flag f but limiting selection to IGA 2D Nurbs UVWs flagged with flag l, giving the prompt 'Select IGA 2D Nurbs UVWs':<br>
```
IGA2DNurbsUVW.Select(f, 'Select IGA 2D Nurbs UVWs', l);
```
 |
| --- |

* * *

| SetControlPoint(index*[integer]*, data*[Array of data]*)

Description<br>Set the data for a specific control point. For each control point there will be control poin U, V, W and control weight WGT. There are [nr](primer-iga2dnurbsuvw-class.md#nr) x [ns](primer-iga2dnurbsuvw-class.md#ns) control points. |
| --- |

#### Arguments

* index (integer)
 
Index you want the control point data for. **Note that indices start at 0**.

* data (Array of data)
 
Array containing the control point data. The array length should be 4.

| Returns
<br>No return value. |
| --- |

| Example
<br>To set the 3rd control point data for IGA 2d nurbs uvw ig2u to the values in array data:<br>
```
ig2u.SetControlPoint(2, data);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the IGA 2D Nurbs UVW. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the IGA 2D Nurbs UVW

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for IGA 2D Nurbs UVW ig2u:<br>
```
ig2u.SetFlag(f);
```
 |
| --- |

* * *

| SetRKnotVector(index*[integer]*, r*[real]*)

Description<br>Sets knot value, r in \*IGA\_2D\_NURBS\_UVW. There are [[nr](primer-iga2dnurbsuvw-class.md#nr) + [pr](primer-iga2dnurbsuvw-class.md#pr) + 1] knot values. |
| --- |

#### Arguments

* index (integer)
 
Index you want to set the r knot vector for. **Note that indices start at 0**.

* r (real)
 
Knot values in the local r-direction

| Returns
<br>No return value. |
| --- |

| Example
<br>To set the 3rd knot value for IGA 2d nurbs uvw ig2u as 13.5:<br>
```
ig2u.SetRKnotVector(2, 13.5);
```
 |
| --- |

* * *

| SetSKnotVector(index*[integer]*, r*[real]*)

Description<br>Sets knot value, s in \*IGA\_2D\_NURBS\_UVW. There are [[ns](primer-iga2dnurbsuvw-class.md#ns) + [ps](primer-iga2dnurbsuvw-class.md#ps) + 1] knot values. |
| --- |

#### Arguments

* index (integer)
 
Index you want to set the s knot vector for. **Note that indices start at 0**.

* r (real)
 
Knot values in the local s-direction

| Returns
<br>No return value. |
| --- |

| Example
<br>To set the 2rd knot value for IGA 2d nurbs uvw ig2u as 24.5:<br>
```
ig2u.SetSKnotVector(1, 24.5);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the IGA 2D Nurbs UVW. The IGA 2D Nurbs UVW will be sketched until you either call [IGA2DNurbsUVW.Unsketch()](primer-iga2dnurbsuvw-class.md#IGA2DNurbsUVW::Unsketch), [IGA2DNurbsUVW.UnsketchAll()](primer-iga2dnurbsuvw-class.md#IGA2DNurbsUVW::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA 2D Nurbs UVW is sketched. If omitted redraw is true. If you want to sketch several IGA 2D Nurbs UVWs and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch IGA 2D Nurbs UVW ig2u:<br>
```
ig2u.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged IGA 2D Nurbs UVWs in the model. The IGA 2D Nurbs UVWs will be sketched until you either call [IGA2DNurbsUVW.Unsketch()](primer-iga2dnurbsuvw-class.md#IGA2DNurbsUVW::Unsketch), [IGA2DNurbsUVW.UnsketchFlagged()](primer-iga2dnurbsuvw-class.md#IGA2DNurbsUVW::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged IGA 2D Nurbs UVWs will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the IGA 2D Nurbs UVWs that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA 2D Nurbs UVWs are sketched. If omitted redraw is true. If you want to sketch flagged IGA 2D Nurbs UVWs several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all IGA 2D Nurbs UVWs flagged with flag in model m:<br>
```
IGA2DNurbsUVW.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of IGA 2D Nurbs UVWs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing IGA 2D Nurbs UVWs should be counted. If false or omitted
referenced but undefined IGA 2D Nurbs UVWs will also be included in the total.

| Returns
<br>number of IGA 2D Nurbs UVWs<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of IGA 2D Nurbs UVWs in model m:<br>
```
var total = IGA2DNurbsUVW.Total(m);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the IGA 2D Nurbs UVWs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all IGA 2D Nurbs UVWs will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the IGA 2D Nurbs UVWs

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the IGA 2D Nurbs UVWs in model m:<br>
```
IGA2DNurbsUVW.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the IGA 2D Nurbs UVW. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA 2D Nurbs UVW is unsketched. If omitted redraw is true. If you want to unsketch several IGA 2D Nurbs UVWs and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch IGA 2D Nurbs UVW ig2u:<br>
```
ig2u.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all IGA 2D Nurbs UVWs. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all IGA 2D Nurbs UVWs will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA 2D Nurbs UVWs are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all IGA 2D Nurbs UVWs in model m:<br>
```
IGA2DNurbsUVW.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged IGA 2D Nurbs UVWs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all IGA 2D Nurbs UVWs will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the IGA 2D Nurbs UVWs that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA 2D Nurbs UVWs are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all IGA 2D Nurbs UVWs flagged with flag in model m:<br>
```
IGA2DNurbsUVW.UnsketchAll(m, flag);
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
<br>[IGA2DNurbsUVW](primer-iga2dnurbsuvw-class.md) object.<br>
Return type
<br>IGA2DNurbsUVW |
| --- |

| Example
<br>To check if IGA2DNurbsUVW property ig2u.example is a parameter by using the [IGA2DNurbsUVW.GetParameter()](primer-iga2dnurbsuvw-class.md#IGA2DNurbsUVW::GetParameter) method:<br>
```
if (ig2u.ViewParameters().GetParameter(ig2u.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for IGA 2D Nurbs UVW. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for IGA 2D Nurbs UVW ig2u:<br>
```
ig2u.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this IGA 2D Nurbs UVW. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for IGA 2D Nurbs UVW ig2u:<br>
```
var xrefs = ig2u.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the IGA 2d nurbs uvw data in keyword format. Note that this contains the keyword header and the keyword cards. See also [IGA2DNurbsUVW.Keyword()](primer-iga2dnurbsuvw-class.md#IGA2DNurbsUVW::Keyword) and [IGA2DNurbsUVW.KeywordCards()](primer-iga2dnurbsuvw-class.md#IGA2DNurbsUVW::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for IGA 2d nurbs uvw ig2u in keyword format<br>
```
var s = ig2u.toString();
```
 |
| --- |

* * *