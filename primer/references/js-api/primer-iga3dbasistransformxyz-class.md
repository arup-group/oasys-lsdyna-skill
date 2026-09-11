# IGA3DBasisTransformXYZ class

The IGA3DBasisTransformXYZ class gives you access to IGA 3d basis transform xyz cards in PRIMER. [More...](primer-iga3dbasistransformxyz-class.md#IGA3DBasisTransformXYZ_details)

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

* [Create](primer-iga3dbasistransformxyz-class.md#IGA3DBasisTransformXYZ::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [First](primer-iga3dbasistransformxyz-class.md#IGA3DBasisTransformXYZ::First)(Model*[[Model](primer-model-class.md)]*)
* [FirstFreeLabel](primer-iga3dbasistransformxyz-class.md#IGA3DBasisTransformXYZ::FirstFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [FlagAll](primer-iga3dbasistransformxyz-class.md#IGA3DBasisTransformXYZ::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-iga3dbasistransformxyz-class.md#IGA3DBasisTransformXYZ::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-iga3dbasistransformxyz-class.md#IGA3DBasisTransformXYZ::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-iga3dbasistransformxyz-class.md#IGA3DBasisTransformXYZ::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-iga3dbasistransformxyz-class.md#IGA3DBasisTransformXYZ::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-iga3dbasistransformxyz-class.md#IGA3DBasisTransformXYZ::Last)(Model*[[Model](primer-model-class.md)]*)
* [LastFreeLabel](primer-iga3dbasistransformxyz-class.md#IGA3DBasisTransformXYZ::LastFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [NextFreeLabel](primer-iga3dbasistransformxyz-class.md#IGA3DBasisTransformXYZ::NextFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [RenumberAll](primer-iga3dbasistransformxyz-class.md#IGA3DBasisTransformXYZ::RenumberAll)(Model*[[Model](primer-model-class.md)]*, start*[integer]*)
* [RenumberFlagged](primer-iga3dbasistransformxyz-class.md#IGA3DBasisTransformXYZ::RenumberFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*)
* [Select](primer-iga3dbasistransformxyz-class.md#IGA3DBasisTransformXYZ::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-iga3dbasistransformxyz-class.md#IGA3DBasisTransformXYZ::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-iga3dbasistransformxyz-class.md#IGA3DBasisTransformXYZ::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnflagAll](primer-iga3dbasistransformxyz-class.md#IGA3DBasisTransformXYZ::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-iga3dbasistransformxyz-class.md#IGA3DBasisTransformXYZ::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-iga3dbasistransformxyz-class.md#IGA3DBasisTransformXYZ::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-iga3dbasistransformxyz-class.md#IGA3DBasisTransformXYZ::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Browse](primer-iga3dbasistransformxyz-class.md#IGA3DBasisTransformXYZ::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-iga3dbasistransformxyz-class.md#IGA3DBasisTransformXYZ::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-iga3dbasistransformxyz-class.md#IGA3DBasisTransformXYZ::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-iga3dbasistransformxyz-class.md#IGA3DBasisTransformXYZ::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-iga3dbasistransformxyz-class.md#IGA3DBasisTransformXYZ::Edit)(modal (optional)*[boolean]*)
* [Error](primer-iga3dbasistransformxyz-class.md#IGA3DBasisTransformXYZ::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-iga3dbasistransformxyz-class.md#IGA3DBasisTransformXYZ::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-iga3dbasistransformxyz-class.md#IGA3DBasisTransformXYZ::GetComments)()
* [GetParameter](primer-iga3dbasistransformxyz-class.md#IGA3DBasisTransformXYZ::GetParameter)(prop*[string]*)
* [Keyword](primer-iga3dbasistransformxyz-class.md#IGA3DBasisTransformXYZ::Keyword)()
* [KeywordCards](primer-iga3dbasistransformxyz-class.md#IGA3DBasisTransformXYZ::KeywordCards)()
* [Next](primer-iga3dbasistransformxyz-class.md#IGA3DBasisTransformXYZ::Next)()
* [Previous](primer-iga3dbasistransformxyz-class.md#IGA3DBasisTransformXYZ::Previous)()
* [SetFlag](primer-iga3dbasistransformxyz-class.md#IGA3DBasisTransformXYZ::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Sketch](primer-iga3dbasistransformxyz-class.md#IGA3DBasisTransformXYZ::Sketch)(redraw (optional)*[boolean]*)
* [Unsketch](primer-iga3dbasistransformxyz-class.md#IGA3DBasisTransformXYZ::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-iga3dbasistransformxyz-class.md#IGA3DBasisTransformXYZ::ViewParameters)()
* [Warning](primer-iga3dbasistransformxyz-class.md#IGA3DBasisTransformXYZ::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-iga3dbasistransformxyz-class.md#IGA3DBasisTransformXYZ::Xrefs)()
* [toString](primer-iga3dbasistransformxyz-class.md#IGA3DBasisTransformXYZ::toString)()

## IGA3DBasisTransformXYZ properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists (read only) | logical | true if IGA 3D Basis Transform XYZ exists, false if referred to but not defined. |
| filename | string | Number of control points in the local r-direction. |
| include | integer | The [Include](primer-include-class.md) file number that the IGA 3D Basis Transform XYZ is in. |
| label | integer | [IGA3DBasisTransformXYZ](primer-iga3dbasistransformxyz-class.md) number. Also see the [patchid](primer-iga3dbasistransformxyz-class.md#patchid) property which is an alternative name for this. |
| model (read only) | integer | The [Model](primer-model-class.md) number that the IGA 3D Basis Transform XYZ is in. |
| patchid | integer | [IGA3DBasisTransformXYZ](primer-iga3dbasistransformxyz-class.md) number. Also see the [label](primer-iga3dbasistransformxyz-class.md#label) property which is an alternative name for this. |

| Detailed Description<br>The IGA3DBasisTransformXYZ class allows you to create, modify, edit and manipulate IGA 3d basis transform xyz cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new IGA3DBasisTransformXYZ(Model*[[Model](primer-model-class.md)]*, details*[object]*)

Description<br>Create a new [IGA3DBasisTransformXYZ](primer-iga3dbasistransformxyz-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that IGA 3d basis transform xyz will be created in

* details (object)

Details for creating the [IGA3DBasisTransformXYZ](primer-iga3dbasistransformxyz-class.md) 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| filename (optional) | string | Name of file containing patch data. |
| patchid | integer | ID of the IGA 3D Basis Transform XYZ. |

| Returns
<br>[IGA3DBasisTransformXYZ](primer-iga3dbasistransformxyz-class.md) object<br>
Return type
<br>IGA3DBasisTransformXYZ |
| --- |

| Example
<br>To create a new IGA 3d basis transform xyz in model m of id 10:<br>
```
var ig3bt = new IGA3DBasisTransformXYZ(m, {patchid:10});
```
<br>To create a new IGA 3d basis transform xyz in model m of id 10 with a filename:<br>
```
var ig3bt = new IGA3DBasisTransformXYZ(m, {patchid:10, filename:"Filename\\with\\path.extension"});
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a IGA 3D Basis Transform XYZ. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the IGA 3D Basis Transform XYZ

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the IGA 3D Basis Transform XYZ ig3bt:<br>
```
ig3bt.AssociateComment(c);
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
<br>To Browse IGA 3D Basis Transform XYZ ig3bt:<br>
```
ig3bt.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the IGA 3D Basis Transform XYZ. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the IGA 3D Basis Transform XYZ

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for IGA 3D Basis Transform XYZ ig3bt:<br>
```
ig3bt.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the IGA 3D Basis Transform XYZ. The target include of the copied IGA 3D Basis Transform XYZ can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>IGA3DBasisTransformXYZ object<br>
Return type
<br>IGA3DBasisTransformXYZ |
| --- |

| Example
<br>To copy IGA 3D Basis Transform XYZ ig3bt into IGA 3D Basis Transform XYZ z:<br>
```
var z = ig3bt.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a IGA 3D Basis Transform XYZ |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the IGA 3D Basis Transform XYZ will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>IGA3DBasisTransformXYZ object (or null if not made).<br>
Return type
<br>IGA3DBasisTransformXYZ |
| --- |

| Example
<br>To start creating a IGA 3D Basis Transform XYZ in model m:<br>
```
var ig3bt = IGA3DBasisTransformXYZ.Create(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a IGA 3D Basis Transform XYZ. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the IGA 3D Basis Transform XYZ

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the IGA 3D Basis Transform XYZ ig3bt:<br>
```
ig3bt.DetachComment(c);
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
<br>To Edit IGA 3D Basis Transform XYZ ig3bt:<br>
```
ig3bt.Edit();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for IGA 3D Basis Transform XYZ. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for IGA 3D Basis Transform XYZ ig3bt:<br>
```
ig3bt.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first IGA 3D Basis Transform XYZ in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first IGA 3D Basis Transform XYZ in

| Returns
<br>IGA3DBasisTransformXYZ object (or null if there are no IGA 3D Basis Transform XYZs in the model).<br>
Return type
<br>IGA3DBasisTransformXYZ |
| --- |

| Example
<br>To get the first IGA 3D Basis Transform XYZ in model m:<br>
```
var ig3bt = IGA3DBasisTransformXYZ.First(m);
```
 |
| --- |

* * *

| FirstFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the first free IGA 3D Basis Transform XYZ label in the model. Also see [IGA3DBasisTransformXYZ.LastFreeLabel()](primer-iga3dbasistransformxyz-class.md#IGA3DBasisTransformXYZ::LastFreeLabel), [IGA3DBasisTransformXYZ.NextFreeLabel()](primer-iga3dbasistransformxyz-class.md#IGA3DBasisTransformXYZ::NextFreeLabel) and [Model.FirstFreeItemLabel()](primer-model-class.md#Model::FirstFreeItemLabel). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first free IGA 3D Basis Transform XYZ label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *First free in layer* in editing panels). If omitted the whole model will be used (Equivalent to *First free* in editing panels).

| Returns
<br>IGA3DBasisTransformXYZ label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the first free IGA 3D Basis Transform XYZ label in model m:<br>
```
var label = IGA3DBasisTransformXYZ.FirstFreeLabel(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the IGA 3D Basis Transform XYZs in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all IGA 3D Basis Transform XYZs will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the IGA 3D Basis Transform XYZs

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the IGA 3D Basis Transform XYZs with flag f in model m:<br>
```
IGA3DBasisTransformXYZ.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the IGA 3D Basis Transform XYZ is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the IGA 3D Basis Transform XYZ

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if IGA 3D Basis Transform XYZ ig3bt has flag f set on it:<br>
```
if (ig3bt.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each IGA 3D Basis Transform XYZ in the model.<br> **Note that ForEach has been designed to make looping over IGA 3D Basis Transform XYZs as fast as possible and so has some limitations. Firstly, a single temporary IGA3DBasisTransformXYZ object is created and on each function call it is updated with the current IGA 3D Basis Transform XYZ data. This means that you should not try to store the IGA3DBasisTransformXYZ object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new IGA 3D Basis Transform XYZs inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all IGA 3D Basis Transform XYZs are in

* func (function)
 
Function to call for each IGA 3D Basis Transform XYZ

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the IGA 3D Basis Transform XYZs in model m:<br>
```
IGA3DBasisTransformXYZ.ForEach(m, test);
function test(ig3bt)
{
// ig3bt is IGA3DBasisTransformXYZ object
}
```
<br><br>To call function test for all of the IGA 3D Basis Transform XYZs in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
IGA3DBasisTransformXYZ.ForEach(m, test, data);
function test(ig3bt, extra)
{
// ig3bt is IGA3DBasisTransformXYZ object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of IGA3DBasisTransformXYZ objects or properties for all of the IGA 3D Basis Transform XYZs in a model in PRIMER. If the optional property argument is not given then an array of IGA3DBasisTransformXYZ objects is returned. If the property argument is given, that property value for each IGA 3D Basis Transform XYZ is returned in the array instead of a IGA3DBasisTransformXYZ object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get IGA 3D Basis Transform XYZs from

* property (optional) (string)
 
Name for property to get for all IGA 3D Basis Transform XYZs in the model

| Returns
<br>Array of IGA3DBasisTransformXYZ objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of IGA3DBasisTransformXYZ objects for all of the IGA 3D Basis Transform XYZs in model m:<br>
```
var a = IGA3DBasisTransformXYZ.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each IGA 3D Basis Transform XYZ in model m:<br>
```
var a = IGA3DBasisTransformXYZ.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a IGA 3D Basis Transform XYZ. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the IGA 3D Basis Transform XYZ ig3bt:<br>
```
var comm_array = ig3bt.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of IGA3DBasisTransformXYZ objects for all of the flagged IGA 3D Basis Transform XYZs in a model in PRIMER If the optional property argument is not given then an array of IGA3DBasisTransformXYZ objects is returned. If the property argument is given, then that property value for each IGA 3D Basis Transform XYZ is returned in the array instead of a IGA3DBasisTransformXYZ object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get IGA 3D Basis Transform XYZs from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the IGA 3D Basis Transform XYZs that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged IGA 3D Basis Transform XYZs in the model

| Returns
<br>Array of IGA3DBasisTransformXYZ objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of IGA3DBasisTransformXYZ objects for all of the IGA 3D Basis Transform XYZs in model m flagged with f:<br>
```
var ig3bt = IGA3DBasisTransformXYZ.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the IGA 3D Basis Transform XYZs in model m flagged with f:<br>
```
var a = IGA3DBasisTransformXYZ.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the IGA3DBasisTransformXYZ object for a IGA 3D Basis Transform XYZ ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the IGA 3D Basis Transform XYZ in

* number (integer)
 
number of the IGA 3D Basis Transform XYZ you want the IGA3DBasisTransformXYZ object for

| Returns
<br>IGA3DBasisTransformXYZ object (or null if IGA 3D Basis Transform XYZ does not exist).<br>
Return type
<br>IGA3DBasisTransformXYZ |
| --- |

| Example
<br>To get the IGA3DBasisTransformXYZ object for IGA 3D Basis Transform XYZ 100 in model m<br>
```
var ig3bt = IGA3DBasisTransformXYZ.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a IGA3DBasisTransformXYZ property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [IGA3DBasisTransformXYZ.ViewParameters()](primer-iga3dbasistransformxyz-class.md#IGA3DBasisTransformXYZ::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
IGA 3D Basis Transform XYZ property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if IGA3DBasisTransformXYZ property ig3bt.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (ig3bt.GetParameter(ig3bt.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if IGA3DBasisTransformXYZ property ig3bt.example is a parameter by using the GetParameter method:<br>
```
if (ig3bt.ViewParameters().GetParameter(ig3bt.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this IGA 3d basis transform xyz (\*IGA\_3D\_BASIS\_TRANSFORM\_XYZ). **Note that a carriage return is not added**. See also [IGA3DBasisTransformXYZ.KeywordCards()](primer-iga3dbasistransformxyz-class.md#IGA3DBasisTransformXYZ::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for IGA 3d basis transform xyz ig3bt:<br>
```
var key = ig3bt.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the IGA 3d basis transform xyz. **Note that a carriage return is not added**. See also [IGA3DBasisTransformXYZ.Keyword()](primer-iga3dbasistransformxyz-class.md#IGA3DBasisTransformXYZ::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for IGA 3d basis transform xyz ig3bt:<br>
```
var cards = ig3bt.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last IGA 3D Basis Transform XYZ in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last IGA 3D Basis Transform XYZ in

| Returns
<br>IGA3DBasisTransformXYZ object (or null if there are no IGA 3D Basis Transform XYZs in the model).<br>
Return type
<br>IGA3DBasisTransformXYZ |
| --- |

| Example
<br>To get the last IGA 3D Basis Transform XYZ in model m:<br>
```
var ig3bt = IGA3DBasisTransformXYZ.Last(m);
```
 |
| --- |

* * *

| LastFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the last free IGA 3D Basis Transform XYZ label in the model. Also see [IGA3DBasisTransformXYZ.FirstFreeLabel()](primer-iga3dbasistransformxyz-class.md#IGA3DBasisTransformXYZ::FirstFreeLabel), [IGA3DBasisTransformXYZ.NextFreeLabel()](primer-iga3dbasistransformxyz-class.md#IGA3DBasisTransformXYZ::NextFreeLabel) and see [Model.LastFreeItemLabel()](primer-model-class.md#Model::LastFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last free IGA 3D Basis Transform XYZ label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest free in layer* in editing panels). If omitted the whole model will be used.

| Returns
<br>IGA3DBasisTransformXYZ label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the last free IGA 3D Basis Transform XYZ label in model m:<br>
```
var label = IGA3DBasisTransformXYZ.LastFreeLabel(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next IGA 3D Basis Transform XYZ in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>IGA3DBasisTransformXYZ object (or null if there are no more IGA 3D Basis Transform XYZs in the model).<br>
Return type
<br>IGA3DBasisTransformXYZ |
| --- |

| Example
<br>To get the IGA 3D Basis Transform XYZ in model m after IGA 3D Basis Transform XYZ ig3bt:<br>
```
var ig3bt = ig3bt.Next();
```
 |
| --- |

* * *

| NextFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the next free (highest+1) IGA 3D Basis Transform XYZ label in the model. Also see [IGA3DBasisTransformXYZ.FirstFreeLabel()](primer-iga3dbasistransformxyz-class.md#IGA3DBasisTransformXYZ::FirstFreeLabel), [IGA3DBasisTransformXYZ.LastFreeLabel()](primer-iga3dbasistransformxyz-class.md#IGA3DBasisTransformXYZ::LastFreeLabel) and [Model.NextFreeItemLabel()](primer-model-class.md#Model::NextFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get next free IGA 3D Basis Transform XYZ label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest+1 in layer* in editing panels). If omitted the whole model will be used (Equivalent to *Highest+1* in editing panels).

| Returns
<br>IGA3DBasisTransformXYZ label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the next free IGA 3D Basis Transform XYZ label in model m:<br>
```
var label = IGA3DBasisTransformXYZ.NextFreeLabel(m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous IGA 3D Basis Transform XYZ in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>IGA3DBasisTransformXYZ object (or null if there are no more IGA 3D Basis Transform XYZs in the model).<br>
Return type
<br>IGA3DBasisTransformXYZ |
| --- |

| Example
<br>To get the IGA 3D Basis Transform XYZ in model m before IGA 3D Basis Transform XYZ ig3bt:<br>
```
var ig3bt = ig3bt.Previous();
```
 |
| --- |

* * *

| RenumberAll(Model*[[Model](primer-model-class.md)]*, start*[integer]*) [static]
Description<br>Renumbers all of the IGA 3D Basis Transform XYZs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all IGA 3D Basis Transform XYZs will be renumbered in

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the IGA 3D Basis Transform XYZs in model m, from 1000000:<br>
```
IGA3DBasisTransformXYZ.RenumberAll(m, 1000000);
```
 |
| --- |

* * *

| RenumberFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*) [static]
Description<br>Renumbers all of the flagged IGA 3D Basis Transform XYZs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged IGA 3D Basis Transform XYZs will be renumbered in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the IGA 3D Basis Transform XYZs that you want to renumber

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the IGA 3D Basis Transform XYZs in model m flagged with f, from 1000000:<br>
```
IGA3DBasisTransformXYZ.RenumberFlagged(m, f, 1000000);
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select IGA 3D Basis Transform XYZs using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting IGA 3D Basis Transform XYZs

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only IGA 3D Basis Transform XYZs from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only IGA 3D Basis Transform XYZs that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any IGA 3D Basis Transform XYZs can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of IGA 3D Basis Transform XYZs selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select IGA 3D Basis Transform XYZs from model m, flagging those selected with flag f, giving the prompt 'Select IGA 3D Basis Transform XYZs':<br>
```
IGA3DBasisTransformXYZ.Select(f, 'Select IGA 3D Basis Transform XYZs', m);
```
<br><br>To select IGA 3D Basis Transform XYZs, flagging those selected with flag f but limiting selection to IGA 3D Basis Transform XYZs flagged with flag l, giving the prompt 'Select IGA 3D Basis Transform XYZs':<br>
```
IGA3DBasisTransformXYZ.Select(f, 'Select IGA 3D Basis Transform XYZs', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the IGA 3D Basis Transform XYZ. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the IGA 3D Basis Transform XYZ

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for IGA 3D Basis Transform XYZ ig3bt:<br>
```
ig3bt.SetFlag(f);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the IGA 3D Basis Transform XYZ. The IGA 3D Basis Transform XYZ will be sketched until you either call [IGA3DBasisTransformXYZ.Unsketch()](primer-iga3dbasistransformxyz-class.md#IGA3DBasisTransformXYZ::Unsketch), [IGA3DBasisTransformXYZ.UnsketchAll()](primer-iga3dbasistransformxyz-class.md#IGA3DBasisTransformXYZ::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA 3D Basis Transform XYZ is sketched. If omitted redraw is true. If you want to sketch several IGA 3D Basis Transform XYZs and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch IGA 3D Basis Transform XYZ ig3bt:<br>
```
ig3bt.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged IGA 3D Basis Transform XYZs in the model. The IGA 3D Basis Transform XYZs will be sketched until you either call [IGA3DBasisTransformXYZ.Unsketch()](primer-iga3dbasistransformxyz-class.md#IGA3DBasisTransformXYZ::Unsketch), [IGA3DBasisTransformXYZ.UnsketchFlagged()](primer-iga3dbasistransformxyz-class.md#IGA3DBasisTransformXYZ::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged IGA 3D Basis Transform XYZs will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the IGA 3D Basis Transform XYZs that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA 3D Basis Transform XYZs are sketched. If omitted redraw is true. If you want to sketch flagged IGA 3D Basis Transform XYZs several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all IGA 3D Basis Transform XYZs flagged with flag in model m:<br>
```
IGA3DBasisTransformXYZ.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of IGA 3D Basis Transform XYZs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing IGA 3D Basis Transform XYZs should be counted. If false or omitted
referenced but undefined IGA 3D Basis Transform XYZs will also be included in the total.

| Returns
<br>number of IGA 3D Basis Transform XYZs<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of IGA 3D Basis Transform XYZs in model m:<br>
```
var total = IGA3DBasisTransformXYZ.Total(m);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the IGA 3D Basis Transform XYZs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all IGA 3D Basis Transform XYZs will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the IGA 3D Basis Transform XYZs

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the IGA 3D Basis Transform XYZs in model m:<br>
```
IGA3DBasisTransformXYZ.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the IGA 3D Basis Transform XYZ. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA 3D Basis Transform XYZ is unsketched. If omitted redraw is true. If you want to unsketch several IGA 3D Basis Transform XYZs and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch IGA 3D Basis Transform XYZ ig3bt:<br>
```
ig3bt.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all IGA 3D Basis Transform XYZs. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all IGA 3D Basis Transform XYZs will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA 3D Basis Transform XYZs are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all IGA 3D Basis Transform XYZs in model m:<br>
```
IGA3DBasisTransformXYZ.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged IGA 3D Basis Transform XYZs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all IGA 3D Basis Transform XYZs will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the IGA 3D Basis Transform XYZs that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA 3D Basis Transform XYZs are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all IGA 3D Basis Transform XYZs flagged with flag in model m:<br>
```
IGA3DBasisTransformXYZ.UnsketchAll(m, flag);
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
<br>[IGA3DBasisTransformXYZ](primer-iga3dbasistransformxyz-class.md) object.<br>
Return type
<br>IGA3DBasisTransformXYZ |
| --- |

| Example
<br>To check if IGA3DBasisTransformXYZ property ig3bt.example is a parameter by using the [IGA3DBasisTransformXYZ.GetParameter()](primer-iga3dbasistransformxyz-class.md#IGA3DBasisTransformXYZ::GetParameter) method:<br>
```
if (ig3bt.ViewParameters().GetParameter(ig3bt.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for IGA 3D Basis Transform XYZ. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for IGA 3D Basis Transform XYZ ig3bt:<br>
```
ig3bt.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this IGA 3D Basis Transform XYZ. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for IGA 3D Basis Transform XYZ ig3bt:<br>
```
var xrefs = ig3bt.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the IGA 3d basis transform xyz data in keyword format. Note that this contains the keyword header and the keyword cards. See also [IGA3DBasisTransformXYZ.Keyword()](primer-iga3dbasistransformxyz-class.md#IGA3DBasisTransformXYZ::Keyword) and [IGA3DBasisTransformXYZ.KeywordCards()](primer-iga3dbasistransformxyz-class.md#IGA3DBasisTransformXYZ::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for IGA 3d basis transform xyz ig3bt in keyword format<br>
```
var s = ig3bt.toString();
```
 |
| --- |

* * *