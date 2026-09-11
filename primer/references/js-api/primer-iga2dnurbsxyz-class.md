# IGA2DNurbsXYZ class

The IGA2DNurbsXYZ class gives you access to IGA 2d nurbs xyz cards in PRIMER. [More...](primer-iga2dnurbsxyz-class.md#IGA2DNurbsXYZ_details)

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

* [Create](primer-iga2dnurbsxyz-class.md#IGA2DNurbsXYZ::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [First](primer-iga2dnurbsxyz-class.md#IGA2DNurbsXYZ::First)(Model*[[Model](primer-model-class.md)]*)
* [FirstFreeLabel](primer-iga2dnurbsxyz-class.md#IGA2DNurbsXYZ::FirstFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [FlagAll](primer-iga2dnurbsxyz-class.md#IGA2DNurbsXYZ::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-iga2dnurbsxyz-class.md#IGA2DNurbsXYZ::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-iga2dnurbsxyz-class.md#IGA2DNurbsXYZ::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-iga2dnurbsxyz-class.md#IGA2DNurbsXYZ::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-iga2dnurbsxyz-class.md#IGA2DNurbsXYZ::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-iga2dnurbsxyz-class.md#IGA2DNurbsXYZ::Last)(Model*[[Model](primer-model-class.md)]*)
* [LastFreeLabel](primer-iga2dnurbsxyz-class.md#IGA2DNurbsXYZ::LastFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [NextFreeLabel](primer-iga2dnurbsxyz-class.md#IGA2DNurbsXYZ::NextFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [RenumberAll](primer-iga2dnurbsxyz-class.md#IGA2DNurbsXYZ::RenumberAll)(Model*[[Model](primer-model-class.md)]*, start*[integer]*)
* [RenumberFlagged](primer-iga2dnurbsxyz-class.md#IGA2DNurbsXYZ::RenumberFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*)
* [Select](primer-iga2dnurbsxyz-class.md#IGA2DNurbsXYZ::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-iga2dnurbsxyz-class.md#IGA2DNurbsXYZ::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-iga2dnurbsxyz-class.md#IGA2DNurbsXYZ::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnflagAll](primer-iga2dnurbsxyz-class.md#IGA2DNurbsXYZ::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-iga2dnurbsxyz-class.md#IGA2DNurbsXYZ::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-iga2dnurbsxyz-class.md#IGA2DNurbsXYZ::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-iga2dnurbsxyz-class.md#IGA2DNurbsXYZ::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Browse](primer-iga2dnurbsxyz-class.md#IGA2DNurbsXYZ::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-iga2dnurbsxyz-class.md#IGA2DNurbsXYZ::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-iga2dnurbsxyz-class.md#IGA2DNurbsXYZ::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-iga2dnurbsxyz-class.md#IGA2DNurbsXYZ::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-iga2dnurbsxyz-class.md#IGA2DNurbsXYZ::Edit)(modal (optional)*[boolean]*)
* [Error](primer-iga2dnurbsxyz-class.md#IGA2DNurbsXYZ::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-iga2dnurbsxyz-class.md#IGA2DNurbsXYZ::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-iga2dnurbsxyz-class.md#IGA2DNurbsXYZ::GetComments)()
* [GetControlPoint](primer-iga2dnurbsxyz-class.md#IGA2DNurbsXYZ::GetControlPoint)(index*[integer]*)
* [GetParameter](primer-iga2dnurbsxyz-class.md#IGA2DNurbsXYZ::GetParameter)(prop*[string]*)
* [GetRKnotVector](primer-iga2dnurbsxyz-class.md#IGA2DNurbsXYZ::GetRKnotVector)(index*[integer]*)
* [GetSKnotVector](primer-iga2dnurbsxyz-class.md#IGA2DNurbsXYZ::GetSKnotVector)(index*[integer]*)
* [Keyword](primer-iga2dnurbsxyz-class.md#IGA2DNurbsXYZ::Keyword)()
* [KeywordCards](primer-iga2dnurbsxyz-class.md#IGA2DNurbsXYZ::KeywordCards)()
* [Next](primer-iga2dnurbsxyz-class.md#IGA2DNurbsXYZ::Next)()
* [Previous](primer-iga2dnurbsxyz-class.md#IGA2DNurbsXYZ::Previous)()
* [SetControlPoint](primer-iga2dnurbsxyz-class.md#IGA2DNurbsXYZ::SetControlPoint)(index*[integer]*, data*[Array of data]*)
* [SetFlag](primer-iga2dnurbsxyz-class.md#IGA2DNurbsXYZ::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [SetRKnotVector](primer-iga2dnurbsxyz-class.md#IGA2DNurbsXYZ::SetRKnotVector)(index*[integer]*, r*[real]*)
* [SetSKnotVector](primer-iga2dnurbsxyz-class.md#IGA2DNurbsXYZ::SetSKnotVector)(index*[integer]*, r*[real]*)
* [Sketch](primer-iga2dnurbsxyz-class.md#IGA2DNurbsXYZ::Sketch)(redraw (optional)*[boolean]*)
* [Unsketch](primer-iga2dnurbsxyz-class.md#IGA2DNurbsXYZ::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-iga2dnurbsxyz-class.md#IGA2DNurbsXYZ::ViewParameters)()
* [Warning](primer-iga2dnurbsxyz-class.md#IGA2DNurbsXYZ::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-iga2dnurbsxyz-class.md#IGA2DNurbsXYZ::Xrefs)()
* [toString](primer-iga2dnurbsxyz-class.md#IGA2DNurbsXYZ::toString)()

## IGA2DNurbsXYZ properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists (read only) | logical | true if IGA 2D Nurbs XYZ exists, false if referred to but not defined. |
| include | integer | The [Include](primer-include-class.md) file number that the IGA 2D Nurbs XYZ is in. |
| label | integer | [IGA2DNurbsXYZ](primer-iga2dnurbsxyz-class.md) number. Also see the [patchid](primer-iga2dnurbsxyz-class.md#patchid) property which is an alternative name for this. |
| model (read only) | integer | The [Model](primer-model-class.md) number that the IGA 2D Nurbs XYZ is in. |
| nr | integer | Number of control points in the local r-direction. |
| ns | integer | Number of control points in the local s-direction. |
| patchid | integer | [IGA2DNurbsXYZ](primer-iga2dnurbsxyz-class.md) number. Also see the [label](primer-iga2dnurbsxyz-class.md#label) property which is an alternative name for this. |
| pr | integer | Polynomial degree of the basis in the local r-direction. |
| ps | integer | Polynomial degree of the basis in the local s-direction. |
| rfirst | real | First knot value in the local r-direction. |
| rlast | real | Last knot value in the local r-direction. |
| sfirst | real | First knot value in the local s-direction. |
| slast | real | Last knot value in the local s-direction. |
| unir | integer | Knot vector type in the local r-direction. |
| unis | integer | Knot vector type in the local s-direction. |

| Detailed Description<br>The IGA2DNurbsXYZ class allows you to create, modify, edit and manipulate IGA 2d nurbs xyz cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new IGA2DNurbsXYZ(Model*[[Model](primer-model-class.md)]*, details*[object]*)

Description<br>Create a new [IGA2DNurbsXYZ](primer-iga2dnurbsxyz-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that IGA 2d nurbs xyz will be created in

* details (object)

Details for creating the [IGA2DNurbsXYZ](primer-iga2dnurbsxyz-class.md) 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| nr (optional) | integer | Number of control points in the local r-direction. |
| ns (optional) | integer | Number of control points in the local s-direction. |
| patchid | integer | ID of the IGA 2D Nurbs XYZ. |
| pr (optional) | integer | Polynomial degree of the basis in the local r-direction. |
| ps (optional) | integer | Polynomial degree of the basis in the local s-direction. |
| unir (optional) | integer | Knot vector type in the local r-direction. |
| unis (optional) | integer | Knot vector type in the local s-direction. |

| Returns
<br>[IGA2DNurbsXYZ](primer-iga2dnurbsxyz-class.md) object<br>
Return type
<br>IGA2DNurbsXYZ |
| --- |

| Example
<br>To create a new IGA 2d nurbs xyz in model m of id 10:<br>
```
var ig2x = new IGA2DNurbsXYZ(m, {patchid:10});
```
<br>To create a new IGA 2d nurbs xyz in model m of id 11 with nr, ns, pr, ps, unir, unis as 12, 13, 14, 15, 21, 22 respectively:<br>
```
var ig2x = new IGA2DNurbsXYZ(m, {patchid:11, nr:12, ns:13, pr:14, ps:15, unir:21, unis:22});
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a IGA 2D Nurbs XYZ. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the IGA 2D Nurbs XYZ

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the IGA 2D Nurbs XYZ ig2x:<br>
```
ig2x.AssociateComment(c);
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
<br>To Browse IGA 2D Nurbs XYZ ig2x:<br>
```
ig2x.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the IGA 2D Nurbs XYZ. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the IGA 2D Nurbs XYZ

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for IGA 2D Nurbs XYZ ig2x:<br>
```
ig2x.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the IGA 2D Nurbs XYZ. The target include of the copied IGA 2D Nurbs XYZ can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>IGA2DNurbsXYZ object<br>
Return type
<br>IGA2DNurbsXYZ |
| --- |

| Example
<br>To copy IGA 2D Nurbs XYZ ig2x into IGA 2D Nurbs XYZ z:<br>
```
var z = ig2x.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a IGA 2D Nurbs XYZ |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the IGA 2D Nurbs XYZ will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>IGA2DNurbsXYZ object (or null if not made).<br>
Return type
<br>IGA2DNurbsXYZ |
| --- |

| Example
<br>To start creating a IGA 2D Nurbs XYZ in model m:<br>
```
var ig2x = IGA2DNurbsXYZ.Create(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a IGA 2D Nurbs XYZ. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the IGA 2D Nurbs XYZ

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the IGA 2D Nurbs XYZ ig2x:<br>
```
ig2x.DetachComment(c);
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
<br>To Edit IGA 2D Nurbs XYZ ig2x:<br>
```
ig2x.Edit();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for IGA 2D Nurbs XYZ. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for IGA 2D Nurbs XYZ ig2x:<br>
```
ig2x.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first IGA 2D Nurbs XYZ in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first IGA 2D Nurbs XYZ in

| Returns
<br>IGA2DNurbsXYZ object (or null if there are no IGA 2D Nurbs XYZs in the model).<br>
Return type
<br>IGA2DNurbsXYZ |
| --- |

| Example
<br>To get the first IGA 2D Nurbs XYZ in model m:<br>
```
var ig2x = IGA2DNurbsXYZ.First(m);
```
 |
| --- |

* * *

| FirstFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the first free IGA 2D Nurbs XYZ label in the model. Also see [IGA2DNurbsXYZ.LastFreeLabel()](primer-iga2dnurbsxyz-class.md#IGA2DNurbsXYZ::LastFreeLabel), [IGA2DNurbsXYZ.NextFreeLabel()](primer-iga2dnurbsxyz-class.md#IGA2DNurbsXYZ::NextFreeLabel) and [Model.FirstFreeItemLabel()](primer-model-class.md#Model::FirstFreeItemLabel). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first free IGA 2D Nurbs XYZ label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *First free in layer* in editing panels). If omitted the whole model will be used (Equivalent to *First free* in editing panels).

| Returns
<br>IGA2DNurbsXYZ label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the first free IGA 2D Nurbs XYZ label in model m:<br>
```
var label = IGA2DNurbsXYZ.FirstFreeLabel(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the IGA 2D Nurbs XYZs in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all IGA 2D Nurbs XYZs will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the IGA 2D Nurbs XYZs

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the IGA 2D Nurbs XYZs with flag f in model m:<br>
```
IGA2DNurbsXYZ.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the IGA 2D Nurbs XYZ is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the IGA 2D Nurbs XYZ

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if IGA 2D Nurbs XYZ ig2x has flag f set on it:<br>
```
if (ig2x.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each IGA 2D Nurbs XYZ in the model.<br> **Note that ForEach has been designed to make looping over IGA 2D Nurbs XYZs as fast as possible and so has some limitations. Firstly, a single temporary IGA2DNurbsXYZ object is created and on each function call it is updated with the current IGA 2D Nurbs XYZ data. This means that you should not try to store the IGA2DNurbsXYZ object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new IGA 2D Nurbs XYZs inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all IGA 2D Nurbs XYZs are in

* func (function)
 
Function to call for each IGA 2D Nurbs XYZ

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the IGA 2D Nurbs XYZs in model m:<br>
```
IGA2DNurbsXYZ.ForEach(m, test);
function test(ig2x)
{
// ig2x is IGA2DNurbsXYZ object
}
```
<br><br>To call function test for all of the IGA 2D Nurbs XYZs in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
IGA2DNurbsXYZ.ForEach(m, test, data);
function test(ig2x, extra)
{
// ig2x is IGA2DNurbsXYZ object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of IGA2DNurbsXYZ objects or properties for all of the IGA 2D Nurbs XYZs in a model in PRIMER. If the optional property argument is not given then an array of IGA2DNurbsXYZ objects is returned. If the property argument is given, that property value for each IGA 2D Nurbs XYZ is returned in the array instead of a IGA2DNurbsXYZ object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get IGA 2D Nurbs XYZs from

* property (optional) (string)
 
Name for property to get for all IGA 2D Nurbs XYZs in the model

| Returns
<br>Array of IGA2DNurbsXYZ objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of IGA2DNurbsXYZ objects for all of the IGA 2D Nurbs XYZs in model m:<br>
```
var a = IGA2DNurbsXYZ.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each IGA 2D Nurbs XYZ in model m:<br>
```
var a = IGA2DNurbsXYZ.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a IGA 2D Nurbs XYZ. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the IGA 2D Nurbs XYZ ig2x:<br>
```
var comm_array = ig2x.GetComments();
```
 |
| --- |

* * *

| GetControlPoint(index*[integer]*)

Description<br>Returns the data for a specific control point an an array. There are [nr](primer-iga2dnurbsxyz-class.md#nr) x [ns](primer-iga2dnurbsxyz-class.md#ns) control points. |
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
<br>To get the data for the 3rd control point in IGA 2d nurbs xyz ig2x:<br>
```
var data = ig2x.GetControlPoint(2);
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of IGA2DNurbsXYZ objects for all of the flagged IGA 2D Nurbs XYZs in a model in PRIMER If the optional property argument is not given then an array of IGA2DNurbsXYZ objects is returned. If the property argument is given, then that property value for each IGA 2D Nurbs XYZ is returned in the array instead of a IGA2DNurbsXYZ object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get IGA 2D Nurbs XYZs from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the IGA 2D Nurbs XYZs that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged IGA 2D Nurbs XYZs in the model

| Returns
<br>Array of IGA2DNurbsXYZ objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of IGA2DNurbsXYZ objects for all of the IGA 2D Nurbs XYZs in model m flagged with f:<br>
```
var ig2x = IGA2DNurbsXYZ.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the IGA 2D Nurbs XYZs in model m flagged with f:<br>
```
var a = IGA2DNurbsXYZ.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the IGA2DNurbsXYZ object for a IGA 2D Nurbs XYZ ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the IGA 2D Nurbs XYZ in

* number (integer)
 
number of the IGA 2D Nurbs XYZ you want the IGA2DNurbsXYZ object for

| Returns
<br>IGA2DNurbsXYZ object (or null if IGA 2D Nurbs XYZ does not exist).<br>
Return type
<br>IGA2DNurbsXYZ |
| --- |

| Example
<br>To get the IGA2DNurbsXYZ object for IGA 2D Nurbs XYZ 100 in model m<br>
```
var ig2x = IGA2DNurbsXYZ.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a IGA2DNurbsXYZ property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [IGA2DNurbsXYZ.ViewParameters()](primer-iga2dnurbsxyz-class.md#IGA2DNurbsXYZ::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
IGA 2D Nurbs XYZ property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if IGA2DNurbsXYZ property ig2x.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (ig2x.GetParameter(ig2x.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if IGA2DNurbsXYZ property ig2x.example is a parameter by using the GetParameter method:<br>
```
if (ig2x.ViewParameters().GetParameter(ig2x.example) ) do_something...
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
<br>To get the 3rd r-knot value in IGA 2d nurbs xyz ig2x:<br>
```
var data = ig2x.GetRKnotVector(2);
```
 |
| --- |

* * *

| GetSKnotVector(index*[integer]*)

Description<br>The data for Knot values in the local s-direction. |
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
<br>To get the 3rd s-knot value in IGA 2d nurbs xyz ig2x:<br>
```
var data = ig2x.GetSKnotVector(2);
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this IGA 2d nurbs xyz (\*IGA\_2D\_NURBS\_XYZ). **Note that a carriage return is not added**. See also [IGA2DNurbsXYZ.KeywordCards()](primer-iga2dnurbsxyz-class.md#IGA2DNurbsXYZ::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for IGA 2d nurbs xyz ig2x:<br>
```
var key = ig2x.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the IGA 2d nurbs xyz. **Note that a carriage return is not added**. See also [IGA2DNurbsXYZ.Keyword()](primer-iga2dnurbsxyz-class.md#IGA2DNurbsXYZ::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for IGA 2d nurbs xyz ig2x:<br>
```
var cards = ig2x.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last IGA 2D Nurbs XYZ in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last IGA 2D Nurbs XYZ in

| Returns
<br>IGA2DNurbsXYZ object (or null if there are no IGA 2D Nurbs XYZs in the model).<br>
Return type
<br>IGA2DNurbsXYZ |
| --- |

| Example
<br>To get the last IGA 2D Nurbs XYZ in model m:<br>
```
var ig2x = IGA2DNurbsXYZ.Last(m);
```
 |
| --- |

* * *

| LastFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the last free IGA 2D Nurbs XYZ label in the model. Also see [IGA2DNurbsXYZ.FirstFreeLabel()](primer-iga2dnurbsxyz-class.md#IGA2DNurbsXYZ::FirstFreeLabel), [IGA2DNurbsXYZ.NextFreeLabel()](primer-iga2dnurbsxyz-class.md#IGA2DNurbsXYZ::NextFreeLabel) and see [Model.LastFreeItemLabel()](primer-model-class.md#Model::LastFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last free IGA 2D Nurbs XYZ label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest free in layer* in editing panels). If omitted the whole model will be used.

| Returns
<br>IGA2DNurbsXYZ label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the last free IGA 2D Nurbs XYZ label in model m:<br>
```
var label = IGA2DNurbsXYZ.LastFreeLabel(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next IGA 2D Nurbs XYZ in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>IGA2DNurbsXYZ object (or null if there are no more IGA 2D Nurbs XYZs in the model).<br>
Return type
<br>IGA2DNurbsXYZ |
| --- |

| Example
<br>To get the IGA 2D Nurbs XYZ in model m after IGA 2D Nurbs XYZ ig2x:<br>
```
var ig2x = ig2x.Next();
```
 |
| --- |

* * *

| NextFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the next free (highest+1) IGA 2D Nurbs XYZ label in the model. Also see [IGA2DNurbsXYZ.FirstFreeLabel()](primer-iga2dnurbsxyz-class.md#IGA2DNurbsXYZ::FirstFreeLabel), [IGA2DNurbsXYZ.LastFreeLabel()](primer-iga2dnurbsxyz-class.md#IGA2DNurbsXYZ::LastFreeLabel) and [Model.NextFreeItemLabel()](primer-model-class.md#Model::NextFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get next free IGA 2D Nurbs XYZ label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest+1 in layer* in editing panels). If omitted the whole model will be used (Equivalent to *Highest+1* in editing panels).

| Returns
<br>IGA2DNurbsXYZ label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the next free IGA 2D Nurbs XYZ label in model m:<br>
```
var label = IGA2DNurbsXYZ.NextFreeLabel(m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous IGA 2D Nurbs XYZ in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>IGA2DNurbsXYZ object (or null if there are no more IGA 2D Nurbs XYZs in the model).<br>
Return type
<br>IGA2DNurbsXYZ |
| --- |

| Example
<br>To get the IGA 2D Nurbs XYZ in model m before IGA 2D Nurbs XYZ ig2x:<br>
```
var ig2x = ig2x.Previous();
```
 |
| --- |

* * *

| RenumberAll(Model*[[Model](primer-model-class.md)]*, start*[integer]*) [static]
Description<br>Renumbers all of the IGA 2D Nurbs XYZs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all IGA 2D Nurbs XYZs will be renumbered in

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the IGA 2D Nurbs XYZs in model m, from 1000000:<br>
```
IGA2DNurbsXYZ.RenumberAll(m, 1000000);
```
 |
| --- |

* * *

| RenumberFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*) [static]
Description<br>Renumbers all of the flagged IGA 2D Nurbs XYZs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged IGA 2D Nurbs XYZs will be renumbered in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the IGA 2D Nurbs XYZs that you want to renumber

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the IGA 2D Nurbs XYZs in model m flagged with f, from 1000000:<br>
```
IGA2DNurbsXYZ.RenumberFlagged(m, f, 1000000);
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select IGA 2D Nurbs XYZs using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting IGA 2D Nurbs XYZs

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only IGA 2D Nurbs XYZs from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only IGA 2D Nurbs XYZs that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any IGA 2D Nurbs XYZs can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of IGA 2D Nurbs XYZs selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select IGA 2D Nurbs XYZs from model m, flagging those selected with flag f, giving the prompt 'Select IGA 2D Nurbs XYZs':<br>
```
IGA2DNurbsXYZ.Select(f, 'Select IGA 2D Nurbs XYZs', m);
```
<br><br>To select IGA 2D Nurbs XYZs, flagging those selected with flag f but limiting selection to IGA 2D Nurbs XYZs flagged with flag l, giving the prompt 'Select IGA 2D Nurbs XYZs':<br>
```
IGA2DNurbsXYZ.Select(f, 'Select IGA 2D Nurbs XYZs', l);
```
 |
| --- |

* * *

| SetControlPoint(index*[integer]*, data*[Array of data]*)

Description<br>Set the data for a specific control point. For each control point there will be control point X, Y, Z and control weight WGT. There are [nr](primer-iga2dnurbsxyz-class.md#nr) x [ns](primer-iga2dnurbsxyz-class.md#ns) control points. |
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
<br>To set the 3rd control point data for IGA 2d nurbs xyz ig2x to the values in array data:<br>
```
ig2x.SetControlPoint(2, data);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the IGA 2D Nurbs XYZ. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the IGA 2D Nurbs XYZ

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for IGA 2D Nurbs XYZ ig2x:<br>
```
ig2x.SetFlag(f);
```
 |
| --- |

* * *

| SetRKnotVector(index*[integer]*, r*[real]*)

Description<br>Sets knot value, r in \*IGA\_2D\_NURBS\_XYZ. There are [[nr](primer-iga2dnurbsxyz-class.md#nr) + [pr](primer-iga2dnurbsxyz-class.md#pr) + 1] knot values. |
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
<br>To set the 3rd knot value for IGA 2d nurbs xyz ig2x as 13.5:<br>
```
ig2x.SetRKnotVector(2, 13.5);
```
 |
| --- |

* * *

| SetSKnotVector(index*[integer]*, r*[real]*)

Description<br>Sets knot value, s in \*IGA\_2D\_NURBS\_XYZ. There are [[ns](primer-iga2dnurbsxyz-class.md#ns) + [ps](primer-iga2dnurbsxyz-class.md#ps) + 1] knot values. |
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
<br>To set the 2rd knot value for IGA 2d nurbs xyz ig2x as 24.5:<br>
```
ig2x.SetSKnotVector(1, 24.5);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the IGA 2D Nurbs XYZ. The IGA 2D Nurbs XYZ will be sketched until you either call [IGA2DNurbsXYZ.Unsketch()](primer-iga2dnurbsxyz-class.md#IGA2DNurbsXYZ::Unsketch), [IGA2DNurbsXYZ.UnsketchAll()](primer-iga2dnurbsxyz-class.md#IGA2DNurbsXYZ::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA 2D Nurbs XYZ is sketched. If omitted redraw is true. If you want to sketch several IGA 2D Nurbs XYZs and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch IGA 2D Nurbs XYZ ig2x:<br>
```
ig2x.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged IGA 2D Nurbs XYZs in the model. The IGA 2D Nurbs XYZs will be sketched until you either call [IGA2DNurbsXYZ.Unsketch()](primer-iga2dnurbsxyz-class.md#IGA2DNurbsXYZ::Unsketch), [IGA2DNurbsXYZ.UnsketchFlagged()](primer-iga2dnurbsxyz-class.md#IGA2DNurbsXYZ::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged IGA 2D Nurbs XYZs will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the IGA 2D Nurbs XYZs that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA 2D Nurbs XYZs are sketched. If omitted redraw is true. If you want to sketch flagged IGA 2D Nurbs XYZs several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all IGA 2D Nurbs XYZs flagged with flag in model m:<br>
```
IGA2DNurbsXYZ.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of IGA 2D Nurbs XYZs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing IGA 2D Nurbs XYZs should be counted. If false or omitted
referenced but undefined IGA 2D Nurbs XYZs will also be included in the total.

| Returns
<br>number of IGA 2D Nurbs XYZs<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of IGA 2D Nurbs XYZs in model m:<br>
```
var total = IGA2DNurbsXYZ.Total(m);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the IGA 2D Nurbs XYZs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all IGA 2D Nurbs XYZs will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the IGA 2D Nurbs XYZs

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the IGA 2D Nurbs XYZs in model m:<br>
```
IGA2DNurbsXYZ.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the IGA 2D Nurbs XYZ. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA 2D Nurbs XYZ is unsketched. If omitted redraw is true. If you want to unsketch several IGA 2D Nurbs XYZs and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch IGA 2D Nurbs XYZ ig2x:<br>
```
ig2x.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all IGA 2D Nurbs XYZs. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all IGA 2D Nurbs XYZs will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA 2D Nurbs XYZs are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all IGA 2D Nurbs XYZs in model m:<br>
```
IGA2DNurbsXYZ.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged IGA 2D Nurbs XYZs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all IGA 2D Nurbs XYZs will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the IGA 2D Nurbs XYZs that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA 2D Nurbs XYZs are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all IGA 2D Nurbs XYZs flagged with flag in model m:<br>
```
IGA2DNurbsXYZ.UnsketchAll(m, flag);
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
<br>[IGA2DNurbsXYZ](primer-iga2dnurbsxyz-class.md) object.<br>
Return type
<br>IGA2DNurbsXYZ |
| --- |

| Example
<br>To check if IGA2DNurbsXYZ property ig2x.example is a parameter by using the [IGA2DNurbsXYZ.GetParameter()](primer-iga2dnurbsxyz-class.md#IGA2DNurbsXYZ::GetParameter) method:<br>
```
if (ig2x.ViewParameters().GetParameter(ig2x.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for IGA 2D Nurbs XYZ. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for IGA 2D Nurbs XYZ ig2x:<br>
```
ig2x.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this IGA 2D Nurbs XYZ. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for IGA 2D Nurbs XYZ ig2x:<br>
```
var xrefs = ig2x.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the IGA 2d nurbs xyz data in keyword format. Note that this contains the keyword header and the keyword cards. See also [IGA2DNurbsXYZ.Keyword()](primer-iga2dnurbsxyz-class.md#IGA2DNurbsXYZ::Keyword) and [IGA2DNurbsXYZ.KeywordCards()](primer-iga2dnurbsxyz-class.md#IGA2DNurbsXYZ::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for IGA 2d nurbs xyz ig2x in keyword format<br>
```
var s = ig2x.toString();
```
 |
| --- |

* * *