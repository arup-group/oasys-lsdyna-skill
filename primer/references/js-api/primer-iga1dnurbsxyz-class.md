# IGA1DNurbsXYZ class

The IGA1DNurbsXYZ class gives you access to IGA 1d nurbs xyz cards in PRIMER. [More...](primer-iga1dnurbsxyz-class.md#IGA1DNurbsXYZ_details)

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

* [Create](primer-iga1dnurbsxyz-class.md#IGA1DNurbsXYZ::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [First](primer-iga1dnurbsxyz-class.md#IGA1DNurbsXYZ::First)(Model*[[Model](primer-model-class.md)]*)
* [FirstFreeLabel](primer-iga1dnurbsxyz-class.md#IGA1DNurbsXYZ::FirstFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [FlagAll](primer-iga1dnurbsxyz-class.md#IGA1DNurbsXYZ::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-iga1dnurbsxyz-class.md#IGA1DNurbsXYZ::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-iga1dnurbsxyz-class.md#IGA1DNurbsXYZ::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-iga1dnurbsxyz-class.md#IGA1DNurbsXYZ::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-iga1dnurbsxyz-class.md#IGA1DNurbsXYZ::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-iga1dnurbsxyz-class.md#IGA1DNurbsXYZ::Last)(Model*[[Model](primer-model-class.md)]*)
* [LastFreeLabel](primer-iga1dnurbsxyz-class.md#IGA1DNurbsXYZ::LastFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [NextFreeLabel](primer-iga1dnurbsxyz-class.md#IGA1DNurbsXYZ::NextFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [RenumberAll](primer-iga1dnurbsxyz-class.md#IGA1DNurbsXYZ::RenumberAll)(Model*[[Model](primer-model-class.md)]*, start*[integer]*)
* [RenumberFlagged](primer-iga1dnurbsxyz-class.md#IGA1DNurbsXYZ::RenumberFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*)
* [Select](primer-iga1dnurbsxyz-class.md#IGA1DNurbsXYZ::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-iga1dnurbsxyz-class.md#IGA1DNurbsXYZ::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-iga1dnurbsxyz-class.md#IGA1DNurbsXYZ::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnflagAll](primer-iga1dnurbsxyz-class.md#IGA1DNurbsXYZ::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-iga1dnurbsxyz-class.md#IGA1DNurbsXYZ::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-iga1dnurbsxyz-class.md#IGA1DNurbsXYZ::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-iga1dnurbsxyz-class.md#IGA1DNurbsXYZ::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Browse](primer-iga1dnurbsxyz-class.md#IGA1DNurbsXYZ::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-iga1dnurbsxyz-class.md#IGA1DNurbsXYZ::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-iga1dnurbsxyz-class.md#IGA1DNurbsXYZ::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-iga1dnurbsxyz-class.md#IGA1DNurbsXYZ::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-iga1dnurbsxyz-class.md#IGA1DNurbsXYZ::Edit)(modal (optional)*[boolean]*)
* [Error](primer-iga1dnurbsxyz-class.md#IGA1DNurbsXYZ::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-iga1dnurbsxyz-class.md#IGA1DNurbsXYZ::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-iga1dnurbsxyz-class.md#IGA1DNurbsXYZ::GetComments)()
* [GetControlPoint](primer-iga1dnurbsxyz-class.md#IGA1DNurbsXYZ::GetControlPoint)(index*[integer]*)
* [GetKnotVector](primer-iga1dnurbsxyz-class.md#IGA1DNurbsXYZ::GetKnotVector)(index*[integer]*)
* [GetParameter](primer-iga1dnurbsxyz-class.md#IGA1DNurbsXYZ::GetParameter)(prop*[string]*)
* [Keyword](primer-iga1dnurbsxyz-class.md#IGA1DNurbsXYZ::Keyword)()
* [KeywordCards](primer-iga1dnurbsxyz-class.md#IGA1DNurbsXYZ::KeywordCards)()
* [Next](primer-iga1dnurbsxyz-class.md#IGA1DNurbsXYZ::Next)()
* [Previous](primer-iga1dnurbsxyz-class.md#IGA1DNurbsXYZ::Previous)()
* [SetControlPoint](primer-iga1dnurbsxyz-class.md#IGA1DNurbsXYZ::SetControlPoint)(index*[integer]*, data*[Array of data]*)
* [SetFlag](primer-iga1dnurbsxyz-class.md#IGA1DNurbsXYZ::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [SetKnotVector](primer-iga1dnurbsxyz-class.md#IGA1DNurbsXYZ::SetKnotVector)(index*[integer]*, r*[real]*)
* [Sketch](primer-iga1dnurbsxyz-class.md#IGA1DNurbsXYZ::Sketch)(redraw (optional)*[boolean]*)
* [Unsketch](primer-iga1dnurbsxyz-class.md#IGA1DNurbsXYZ::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-iga1dnurbsxyz-class.md#IGA1DNurbsXYZ::ViewParameters)()
* [Warning](primer-iga1dnurbsxyz-class.md#IGA1DNurbsXYZ::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-iga1dnurbsxyz-class.md#IGA1DNurbsXYZ::Xrefs)()
* [toString](primer-iga1dnurbsxyz-class.md#IGA1DNurbsXYZ::toString)()

## IGA1DNurbsXYZ properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists (read only) | logical | true if IGA 1D Nurbs XYZ exists, false if referred to but not defined. |
| include | integer | The [Include](primer-include-class.md) file number that the IGA 1D Nurbs XYZ is in. |
| label | integer | [IGA1DNurbsXYZ](primer-iga1dnurbsxyz-class.md) number. Also see the [patchid](primer-iga1dnurbsxyz-class.md#patchid) property which is an alternative name for this. |
| model (read only) | integer | The [Model](primer-model-class.md) number that the IGA 1D Nurbs XYZ is in. |
| nr | integer | Number of control points in the local r-direction. |
| patchid | integer | [IGA1DNurbsXYZ](primer-iga1dnurbsxyz-class.md) number. Also see the [label](primer-iga1dnurbsxyz-class.md#label) property which is an alternative name for this. |
| pr | integer | Polynomial degree of the basis in the local r-direction. |
| rfirst | real | First knot value in the local r-direction. |
| rlast | real | Last knot value in the local r-direction. |
| unir | integer | Knot vector type in the local r-direction. |

| Detailed Description<br>The IGA1DNurbsXYZ class allows you to create, modify, edit and manipulate IGA 1d nurbs xyz cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new IGA1DNurbsXYZ(Model*[[Model](primer-model-class.md)]*, details*[object]*)

Description<br>Create a new [IGA1DNurbsXYZ](primer-iga1dnurbsxyz-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that IGA 1d nurbs xyz will be created in

* details (object)

Details for creating the [IGA1DNurbsXYZ](primer-iga1dnurbsxyz-class.md) 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| nr (optional) | integer | Number of control points in the local r-direction. |
| patchid | integer | ID of the IGA 1D Nurbs XYZ. |
| pr (optional) | integer | Polynomial degree of the basis in the local r-direction. |
| unir (optional) | integer | Knot vector type in the local r-direction. |

| Returns
<br>[IGA1DNurbsXYZ](primer-iga1dnurbsxyz-class.md) object<br>
Return type
<br>IGA1DNurbsXYZ |
| --- |

| Example
<br>To create a new IGA 1d nurbs xyz in model m of id 10:<br>
```
var ig1x = new IGA1DNurbsXYZ(m, {patchid:10});
```
<br>To create a new IGA 1d nurbs xyz in model m of id 10 with nr, pr, unir as 2, 3, 4:<br>
```
var ig1x = new IGA1DNurbsXYZ(m, {patchid:10, nr:2, pr:3, unir:4});
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a IGA 1D Nurbs XYZ. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the IGA 1D Nurbs XYZ

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the IGA 1D Nurbs XYZ ig1x:<br>
```
ig1x.AssociateComment(c);
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
<br>To Browse IGA 1D Nurbs XYZ ig1x:<br>
```
ig1x.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the IGA 1D Nurbs XYZ. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the IGA 1D Nurbs XYZ

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for IGA 1D Nurbs XYZ ig1x:<br>
```
ig1x.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the IGA 1D Nurbs XYZ. The target include of the copied IGA 1D Nurbs XYZ can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>IGA1DNurbsXYZ object<br>
Return type
<br>IGA1DNurbsXYZ |
| --- |

| Example
<br>To copy IGA 1D Nurbs XYZ ig1x into IGA 1D Nurbs XYZ z:<br>
```
var z = ig1x.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a IGA 1D Nurbs XYZ |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the IGA 1D Nurbs XYZ will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>IGA1DNurbsXYZ object (or null if not made).<br>
Return type
<br>IGA1DNurbsXYZ |
| --- |

| Example
<br>To start creating a IGA 1D Nurbs XYZ in model m:<br>
```
var ig1x = IGA1DNurbsXYZ.Create(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a IGA 1D Nurbs XYZ. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the IGA 1D Nurbs XYZ

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the IGA 1D Nurbs XYZ ig1x:<br>
```
ig1x.DetachComment(c);
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
<br>To Edit IGA 1D Nurbs XYZ ig1x:<br>
```
ig1x.Edit();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for IGA 1D Nurbs XYZ. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for IGA 1D Nurbs XYZ ig1x:<br>
```
ig1x.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first IGA 1D Nurbs XYZ in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first IGA 1D Nurbs XYZ in

| Returns
<br>IGA1DNurbsXYZ object (or null if there are no IGA 1D Nurbs XYZs in the model).<br>
Return type
<br>IGA1DNurbsXYZ |
| --- |

| Example
<br>To get the first IGA 1D Nurbs XYZ in model m:<br>
```
var ig1x = IGA1DNurbsXYZ.First(m);
```
 |
| --- |

* * *

| FirstFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the first free IGA 1D Nurbs XYZ label in the model. Also see [IGA1DNurbsXYZ.LastFreeLabel()](primer-iga1dnurbsxyz-class.md#IGA1DNurbsXYZ::LastFreeLabel), [IGA1DNurbsXYZ.NextFreeLabel()](primer-iga1dnurbsxyz-class.md#IGA1DNurbsXYZ::NextFreeLabel) and [Model.FirstFreeItemLabel()](primer-model-class.md#Model::FirstFreeItemLabel). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first free IGA 1D Nurbs XYZ label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *First free in layer* in editing panels). If omitted the whole model will be used (Equivalent to *First free* in editing panels).

| Returns
<br>IGA1DNurbsXYZ label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the first free IGA 1D Nurbs XYZ label in model m:<br>
```
var label = IGA1DNurbsXYZ.FirstFreeLabel(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the IGA 1D Nurbs XYZs in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all IGA 1D Nurbs XYZs will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the IGA 1D Nurbs XYZs

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the IGA 1D Nurbs XYZs with flag f in model m:<br>
```
IGA1DNurbsXYZ.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the IGA 1D Nurbs XYZ is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the IGA 1D Nurbs XYZ

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if IGA 1D Nurbs XYZ ig1x has flag f set on it:<br>
```
if (ig1x.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each IGA 1D Nurbs XYZ in the model.<br> **Note that ForEach has been designed to make looping over IGA 1D Nurbs XYZs as fast as possible and so has some limitations. Firstly, a single temporary IGA1DNurbsXYZ object is created and on each function call it is updated with the current IGA 1D Nurbs XYZ data. This means that you should not try to store the IGA1DNurbsXYZ object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new IGA 1D Nurbs XYZs inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all IGA 1D Nurbs XYZs are in

* func (function)
 
Function to call for each IGA 1D Nurbs XYZ

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the IGA 1D Nurbs XYZs in model m:<br>
```
IGA1DNurbsXYZ.ForEach(m, test);
function test(ig1x)
{
// ig1x is IGA1DNurbsXYZ object
}
```
<br><br>To call function test for all of the IGA 1D Nurbs XYZs in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
IGA1DNurbsXYZ.ForEach(m, test, data);
function test(ig1x, extra)
{
// ig1x is IGA1DNurbsXYZ object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of IGA1DNurbsXYZ objects or properties for all of the IGA 1D Nurbs XYZs in a model in PRIMER. If the optional property argument is not given then an array of IGA1DNurbsXYZ objects is returned. If the property argument is given, that property value for each IGA 1D Nurbs XYZ is returned in the array instead of a IGA1DNurbsXYZ object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get IGA 1D Nurbs XYZs from

* property (optional) (string)
 
Name for property to get for all IGA 1D Nurbs XYZs in the model

| Returns
<br>Array of IGA1DNurbsXYZ objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of IGA1DNurbsXYZ objects for all of the IGA 1D Nurbs XYZs in model m:<br>
```
var a = IGA1DNurbsXYZ.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each IGA 1D Nurbs XYZ in model m:<br>
```
var a = IGA1DNurbsXYZ.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a IGA 1D Nurbs XYZ. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the IGA 1D Nurbs XYZ ig1x:<br>
```
var comm_array = ig1x.GetComments();
```
 |
| --- |

* * *

| GetControlPoint(index*[integer]*)

Description<br>Returns the data for a specific control point an an array. There are [nr](primer-iga1dnurbsxyz-class.md#nr) control points. |
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
<br>To get the data for the 3rd control point in IGA 1d nurbs xyz ig1x:<br>
```
var data = ig1x.GetControlPoint(2);
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of IGA1DNurbsXYZ objects for all of the flagged IGA 1D Nurbs XYZs in a model in PRIMER If the optional property argument is not given then an array of IGA1DNurbsXYZ objects is returned. If the property argument is given, then that property value for each IGA 1D Nurbs XYZ is returned in the array instead of a IGA1DNurbsXYZ object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get IGA 1D Nurbs XYZs from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the IGA 1D Nurbs XYZs that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged IGA 1D Nurbs XYZs in the model

| Returns
<br>Array of IGA1DNurbsXYZ objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of IGA1DNurbsXYZ objects for all of the IGA 1D Nurbs XYZs in model m flagged with f:<br>
```
var ig1x = IGA1DNurbsXYZ.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the IGA 1D Nurbs XYZs in model m flagged with f:<br>
```
var a = IGA1DNurbsXYZ.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the IGA1DNurbsXYZ object for a IGA 1D Nurbs XYZ ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the IGA 1D Nurbs XYZ in

* number (integer)
 
number of the IGA 1D Nurbs XYZ you want the IGA1DNurbsXYZ object for

| Returns
<br>IGA1DNurbsXYZ object (or null if IGA 1D Nurbs XYZ does not exist).<br>
Return type
<br>IGA1DNurbsXYZ |
| --- |

| Example
<br>To get the IGA1DNurbsXYZ object for IGA 1D Nurbs XYZ 100 in model m<br>
```
var ig1x = IGA1DNurbsXYZ.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetKnotVector(index*[integer]*)

Description<br>The data for Knot values in the local r-direction. |
| --- |

#### Arguments

* index (integer)
 
Index you want the knot value for. **Note that indices start at 0**.

| Returns
<br>Knot values in the local r-direction.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the 3rd knot value in IGA 1d nurbs xyz ig1x:<br>
```
var data = ig1x.GetKnotVector(2);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a IGA1DNurbsXYZ property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [IGA1DNurbsXYZ.ViewParameters()](primer-iga1dnurbsxyz-class.md#IGA1DNurbsXYZ::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
IGA 1D Nurbs XYZ property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if IGA1DNurbsXYZ property ig1x.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (ig1x.GetParameter(ig1x.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if IGA1DNurbsXYZ property ig1x.example is a parameter by using the GetParameter method:<br>
```
if (ig1x.ViewParameters().GetParameter(ig1x.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this IGA 1d nurbs xyz (\*IGA\_1D\_NURBS\_XYZ). **Note that a carriage return is not added**. See also [IGA1DNurbsXYZ.KeywordCards()](primer-iga1dnurbsxyz-class.md#IGA1DNurbsXYZ::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for IGA 1d nurbs xyz ig1x:<br>
```
var key = ig1x.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the IGA 1d nurbs xyz. **Note that a carriage return is not added**. See also [IGA1DNurbsXYZ.Keyword()](primer-iga1dnurbsxyz-class.md#IGA1DNurbsXYZ::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for IGA 1d nurbs xyz ig1x:<br>
```
var cards = ig1x.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last IGA 1D Nurbs XYZ in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last IGA 1D Nurbs XYZ in

| Returns
<br>IGA1DNurbsXYZ object (or null if there are no IGA 1D Nurbs XYZs in the model).<br>
Return type
<br>IGA1DNurbsXYZ |
| --- |

| Example
<br>To get the last IGA 1D Nurbs XYZ in model m:<br>
```
var ig1x = IGA1DNurbsXYZ.Last(m);
```
 |
| --- |

* * *

| LastFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the last free IGA 1D Nurbs XYZ label in the model. Also see [IGA1DNurbsXYZ.FirstFreeLabel()](primer-iga1dnurbsxyz-class.md#IGA1DNurbsXYZ::FirstFreeLabel), [IGA1DNurbsXYZ.NextFreeLabel()](primer-iga1dnurbsxyz-class.md#IGA1DNurbsXYZ::NextFreeLabel) and see [Model.LastFreeItemLabel()](primer-model-class.md#Model::LastFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last free IGA 1D Nurbs XYZ label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest free in layer* in editing panels). If omitted the whole model will be used.

| Returns
<br>IGA1DNurbsXYZ label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the last free IGA 1D Nurbs XYZ label in model m:<br>
```
var label = IGA1DNurbsXYZ.LastFreeLabel(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next IGA 1D Nurbs XYZ in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>IGA1DNurbsXYZ object (or null if there are no more IGA 1D Nurbs XYZs in the model).<br>
Return type
<br>IGA1DNurbsXYZ |
| --- |

| Example
<br>To get the IGA 1D Nurbs XYZ in model m after IGA 1D Nurbs XYZ ig1x:<br>
```
var ig1x = ig1x.Next();
```
 |
| --- |

* * *

| NextFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the next free (highest+1) IGA 1D Nurbs XYZ label in the model. Also see [IGA1DNurbsXYZ.FirstFreeLabel()](primer-iga1dnurbsxyz-class.md#IGA1DNurbsXYZ::FirstFreeLabel), [IGA1DNurbsXYZ.LastFreeLabel()](primer-iga1dnurbsxyz-class.md#IGA1DNurbsXYZ::LastFreeLabel) and [Model.NextFreeItemLabel()](primer-model-class.md#Model::NextFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get next free IGA 1D Nurbs XYZ label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest+1 in layer* in editing panels). If omitted the whole model will be used (Equivalent to *Highest+1* in editing panels).

| Returns
<br>IGA1DNurbsXYZ label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the next free IGA 1D Nurbs XYZ label in model m:<br>
```
var label = IGA1DNurbsXYZ.NextFreeLabel(m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous IGA 1D Nurbs XYZ in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>IGA1DNurbsXYZ object (or null if there are no more IGA 1D Nurbs XYZs in the model).<br>
Return type
<br>IGA1DNurbsXYZ |
| --- |

| Example
<br>To get the IGA 1D Nurbs XYZ in model m before IGA 1D Nurbs XYZ ig1x:<br>
```
var ig1x = ig1x.Previous();
```
 |
| --- |

* * *

| RenumberAll(Model*[[Model](primer-model-class.md)]*, start*[integer]*) [static]
Description<br>Renumbers all of the IGA 1D Nurbs XYZs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all IGA 1D Nurbs XYZs will be renumbered in

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the IGA 1D Nurbs XYZs in model m, from 1000000:<br>
```
IGA1DNurbsXYZ.RenumberAll(m, 1000000);
```
 |
| --- |

* * *

| RenumberFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*) [static]
Description<br>Renumbers all of the flagged IGA 1D Nurbs XYZs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged IGA 1D Nurbs XYZs will be renumbered in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the IGA 1D Nurbs XYZs that you want to renumber

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the IGA 1D Nurbs XYZs in model m flagged with f, from 1000000:<br>
```
IGA1DNurbsXYZ.RenumberFlagged(m, f, 1000000);
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select IGA 1D Nurbs XYZs using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting IGA 1D Nurbs XYZs

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only IGA 1D Nurbs XYZs from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only IGA 1D Nurbs XYZs that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any IGA 1D Nurbs XYZs can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of IGA 1D Nurbs XYZs selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select IGA 1D Nurbs XYZs from model m, flagging those selected with flag f, giving the prompt 'Select IGA 1D Nurbs XYZs':<br>
```
IGA1DNurbsXYZ.Select(f, 'Select IGA 1D Nurbs XYZs', m);
```
<br><br>To select IGA 1D Nurbs XYZs, flagging those selected with flag f but limiting selection to IGA 1D Nurbs XYZs flagged with flag l, giving the prompt 'Select IGA 1D Nurbs XYZs':<br>
```
IGA1DNurbsXYZ.Select(f, 'Select IGA 1D Nurbs XYZs', l);
```
 |
| --- |

* * *

| SetControlPoint(index*[integer]*, data*[Array of data]*)

Description<br>Set the data for a specific control point. For each control point there will be control point X, Y, Z and control weight WGT. There are [nr](primer-iga1dnurbsxyz-class.md#nr) control points. |
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
<br>To set the 3rd control point data for IGA 1d nurbs xyz ig1x to the values in array data:<br>
```
ig1x.SetControlPoint(2, data);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the IGA 1D Nurbs XYZ. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the IGA 1D Nurbs XYZ

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for IGA 1D Nurbs XYZ ig1x:<br>
```
ig1x.SetFlag(f);
```
 |
| --- |

* * *

| SetKnotVector(index*[integer]*, r*[real]*)

Description<br>Sets knot value, r in \*IGA\_1D\_NURBS\_XYZ. There are [[nr](primer-iga1dnurbsxyz-class.md#nr) + [pr](primer-iga1dnurbsxyz-class.md#pr) + 1] knot values.<br> |
| --- |

#### Arguments

* index (integer)
 
Index you want to set the r for. **Note that indices start at 0**.

* r (real)
 
Knot values in the local r-direction

| Returns
<br>No return value. |
| --- |

| Example
<br>To set the 3rd knot value for IGA 1d nurbs xyz ig1x as 13.5:<br>
```
ig1x.SetKnotVector(2, 13.5);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the IGA 1D Nurbs XYZ. The IGA 1D Nurbs XYZ will be sketched until you either call [IGA1DNurbsXYZ.Unsketch()](primer-iga1dnurbsxyz-class.md#IGA1DNurbsXYZ::Unsketch), [IGA1DNurbsXYZ.UnsketchAll()](primer-iga1dnurbsxyz-class.md#IGA1DNurbsXYZ::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA 1D Nurbs XYZ is sketched. If omitted redraw is true. If you want to sketch several IGA 1D Nurbs XYZs and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch IGA 1D Nurbs XYZ ig1x:<br>
```
ig1x.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged IGA 1D Nurbs XYZs in the model. The IGA 1D Nurbs XYZs will be sketched until you either call [IGA1DNurbsXYZ.Unsketch()](primer-iga1dnurbsxyz-class.md#IGA1DNurbsXYZ::Unsketch), [IGA1DNurbsXYZ.UnsketchFlagged()](primer-iga1dnurbsxyz-class.md#IGA1DNurbsXYZ::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged IGA 1D Nurbs XYZs will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the IGA 1D Nurbs XYZs that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA 1D Nurbs XYZs are sketched. If omitted redraw is true. If you want to sketch flagged IGA 1D Nurbs XYZs several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all IGA 1D Nurbs XYZs flagged with flag in model m:<br>
```
IGA1DNurbsXYZ.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of IGA 1D Nurbs XYZs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing IGA 1D Nurbs XYZs should be counted. If false or omitted
referenced but undefined IGA 1D Nurbs XYZs will also be included in the total.

| Returns
<br>number of IGA 1D Nurbs XYZs<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of IGA 1D Nurbs XYZs in model m:<br>
```
var total = IGA1DNurbsXYZ.Total(m);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the IGA 1D Nurbs XYZs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all IGA 1D Nurbs XYZs will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the IGA 1D Nurbs XYZs

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the IGA 1D Nurbs XYZs in model m:<br>
```
IGA1DNurbsXYZ.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the IGA 1D Nurbs XYZ. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA 1D Nurbs XYZ is unsketched. If omitted redraw is true. If you want to unsketch several IGA 1D Nurbs XYZs and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch IGA 1D Nurbs XYZ ig1x:<br>
```
ig1x.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all IGA 1D Nurbs XYZs. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all IGA 1D Nurbs XYZs will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA 1D Nurbs XYZs are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all IGA 1D Nurbs XYZs in model m:<br>
```
IGA1DNurbsXYZ.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged IGA 1D Nurbs XYZs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all IGA 1D Nurbs XYZs will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the IGA 1D Nurbs XYZs that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA 1D Nurbs XYZs are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all IGA 1D Nurbs XYZs flagged with flag in model m:<br>
```
IGA1DNurbsXYZ.UnsketchAll(m, flag);
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
<br>[IGA1DNurbsXYZ](primer-iga1dnurbsxyz-class.md) object.<br>
Return type
<br>IGA1DNurbsXYZ |
| --- |

| Example
<br>To check if IGA1DNurbsXYZ property ig1x.example is a parameter by using the [IGA1DNurbsXYZ.GetParameter()](primer-iga1dnurbsxyz-class.md#IGA1DNurbsXYZ::GetParameter) method:<br>
```
if (ig1x.ViewParameters().GetParameter(ig1x.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for IGA 1D Nurbs XYZ. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for IGA 1D Nurbs XYZ ig1x:<br>
```
ig1x.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this IGA 1D Nurbs XYZ. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for IGA 1D Nurbs XYZ ig1x:<br>
```
var xrefs = ig1x.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the IGA 1d nurbs xyz data in keyword format. Note that this contains the keyword header and the keyword cards. See also [IGA1DNurbsXYZ.Keyword()](primer-iga1dnurbsxyz-class.md#IGA1DNurbsXYZ::Keyword) and [IGA1DNurbsXYZ.KeywordCards()](primer-iga1dnurbsxyz-class.md#IGA1DNurbsXYZ::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for IGA 1d nurbs xyz ig1x in keyword format<br>
```
var s = ig1x.toString();
```
 |
| --- |

* * *