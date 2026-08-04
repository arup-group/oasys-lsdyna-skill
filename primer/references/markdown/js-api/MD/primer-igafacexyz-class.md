# IGAFaceXYZ class

The IGAFaceXYZ class gives you access to IGA face xyz cards in PRIMER. [More...](primer-igafacexyz-class.md#IGAFaceXYZ_details)

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

* [Create](primer-igafacexyz-class.md#IGAFaceXYZ::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [First](primer-igafacexyz-class.md#IGAFaceXYZ::First)(Model*[[Model](primer-model-class.md)]*)
* [FirstFreeLabel](primer-igafacexyz-class.md#IGAFaceXYZ::FirstFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [FlagAll](primer-igafacexyz-class.md#IGAFaceXYZ::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-igafacexyz-class.md#IGAFaceXYZ::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-igafacexyz-class.md#IGAFaceXYZ::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-igafacexyz-class.md#IGAFaceXYZ::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-igafacexyz-class.md#IGAFaceXYZ::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-igafacexyz-class.md#IGAFaceXYZ::Last)(Model*[[Model](primer-model-class.md)]*)
* [LastFreeLabel](primer-igafacexyz-class.md#IGAFaceXYZ::LastFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [NextFreeLabel](primer-igafacexyz-class.md#IGAFaceXYZ::NextFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [RenumberAll](primer-igafacexyz-class.md#IGAFaceXYZ::RenumberAll)(Model*[[Model](primer-model-class.md)]*, start*[integer]*)
* [RenumberFlagged](primer-igafacexyz-class.md#IGAFaceXYZ::RenumberFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*)
* [Select](primer-igafacexyz-class.md#IGAFaceXYZ::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-igafacexyz-class.md#IGAFaceXYZ::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-igafacexyz-class.md#IGAFaceXYZ::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnflagAll](primer-igafacexyz-class.md#IGAFaceXYZ::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-igafacexyz-class.md#IGAFaceXYZ::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-igafacexyz-class.md#IGAFaceXYZ::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-igafacexyz-class.md#IGAFaceXYZ::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Browse](primer-igafacexyz-class.md#IGAFaceXYZ::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-igafacexyz-class.md#IGAFaceXYZ::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-igafacexyz-class.md#IGAFaceXYZ::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-igafacexyz-class.md#IGAFaceXYZ::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-igafacexyz-class.md#IGAFaceXYZ::Edit)(modal (optional)*[boolean]*)
* [Error](primer-igafacexyz-class.md#IGAFaceXYZ::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-igafacexyz-class.md#IGAFaceXYZ::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-igafacexyz-class.md#IGAFaceXYZ::GetComments)()
* [GetData](primer-igafacexyz-class.md#IGAFaceXYZ::GetData)(index*[integer]*)
* [GetParameter](primer-igafacexyz-class.md#IGAFaceXYZ::GetParameter)(prop*[string]*)
* [Keyword](primer-igafacexyz-class.md#IGAFaceXYZ::Keyword)()
* [KeywordCards](primer-igafacexyz-class.md#IGAFaceXYZ::KeywordCards)()
* [Next](primer-igafacexyz-class.md#IGAFaceXYZ::Next)()
* [Previous](primer-igafacexyz-class.md#IGAFaceXYZ::Previous)()
* [RemoveData](primer-igafacexyz-class.md#IGAFaceXYZ::RemoveData)(index*[integer]*)
* [SetData](primer-igafacexyz-class.md#IGAFaceXYZ::SetData)(index*[integer]*, brid*[integer]*)
* [SetFlag](primer-igafacexyz-class.md#IGAFaceXYZ::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Sketch](primer-igafacexyz-class.md#IGAFaceXYZ::Sketch)(redraw (optional)*[boolean]*)
* [Unsketch](primer-igafacexyz-class.md#IGAFaceXYZ::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-igafacexyz-class.md#IGAFaceXYZ::ViewParameters)()
* [Warning](primer-igafacexyz-class.md#IGAFaceXYZ::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-igafacexyz-class.md#IGAFaceXYZ::Xrefs)()
* [toString](primer-igafacexyz-class.md#IGAFaceXYZ::toString)()

## IGAFaceXYZ constants

| **Name** | **Description** |
| --- | --- |
| IGAFaceXYZ.BASIS\_TRANSFORM | BASIS\_TRANSFORM is \*IGA\_FACE\_XYZ\_BASIS\_TRANSFORM. |
| IGAFaceXYZ.NONE | NONE is \*IGA\_FACE\_XYZ. |

## IGAFaceXYZ properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| entries (read only) | integer | Number of Boundary representation IDs (brid) or Element IDs (elid) added in IGA\_FACE\_XYZ. Can be used as index to add a new entry. |
| esid | integer | Parametric edge set ID. \*SET\_IGA\_EDGE\_UVW. |
| exists (read only) | logical | true if IGA Face XYZ exists, false if referred to but not defined. |
| fid | integer | [IGAFaceXYZ](primer-igafacexyz-class.md) number. Also see the [label](primer-igafacexyz-class.md#label) property which is an alternative name for this. |
| include | integer | The [Include](primer-include-class.md) file number that the IGA Face XYZ is in. |
| label | integer | [IGAFaceXYZ](primer-igafacexyz-class.md) number. Also see the [fid](primer-igafacexyz-class.md#fid) property which is an alternative name for this. |
| model (read only) | integer | The [Model](primer-model-class.md) number that the IGA Face XYZ is in. |
| option | constant | IGA Face XYZ option.<ul> <li><a href="primer-igafacexyz-class.md#IGAFaceXYZ.NONE">IGAFaceXYZ.NONE</a> or</li> <li><a href="primer-igafacexyz-class.md#IGAFaceXYZ.BASIS_TRANSFORM">IGAFaceXYZ.BASIS_TRANSFORM</a></li> </ul> |
| ori | integer | Orientation with respect to the physical bivariate NURBS. |
| patchid | integer | Physical bivariate NURBS patch ID or a bivariate Basis Transform patch ID. |
| psid | integer | Parametric point set ID. \*SET\_IGA\_POINT\_UVW. |

| Detailed Description<br>The IGAFaceXYZ class allows you to create, modify, edit and manipulate IGA face xyz cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new IGAFaceXYZ(Model*[[Model](primer-model-class.md)]*, details*[object]*)

Description<br>Create a new [IGAFaceXYZ](primer-igafacexyz-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that IGA face xyz will be created in

* details (object)

Details for creating the [IGAFaceXYZ](primer-igafacexyz-class.md) 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| esid (optional) | integer | Parametric edge set ID. \*SET\_IGA\_EDGE\_UVW. |
| fid | integer | ID of the IGA Face XYZ. |
| option | constant | IGA Face XYZ option. [IGAFaceXYZ.NONE](primer-igafacexyz-class.md#IGAFaceXYZ.NONE) or [IGAFaceXYZ.BASIS_TRANSFORM](primer-igafacexyz-class.md#IGAFaceXYZ.BASIS_TRANSFORM) |
| ori (optional) | integer | Orientation with respect to the physical bivariate NURBS. |
| patchid (optional) | integer | Physical bivariate NURBS patch ID or a bivariate basis transform patch ID. |
| psid (optional) | integer | Parametric point set ID. \*SET\_IGA\_POINT\_UVW. |

| Returns
<br>[IGAFaceXYZ](primer-igafacexyz-class.md) object<br>
Return type
<br>IGAFaceXYZ |
| --- |

| Example
<br>To create a new IGA face xyz in model m using fid 10 with option NONE:<br>
```
var igfx = new IGAFaceXYZ(m, {option:IGAFaceXYZ.NONE, fid:10});
```
<br>To create a new IGA face xyz in model m using fid 21 and option BASIS\_TRANSFORM with patch 22, ori 23, psid 24 and esid 25:<br>
```
var igfx = new IGAFaceXYZ(m, {option:IGAFaceXYZ.BASIS_TRANSFORM, fid:21, patchid: 22, ori:23, psid:24, esid:25});
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a IGA Face XYZ. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the IGA Face XYZ

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the IGA Face XYZ igfx:<br>
```
igfx.AssociateComment(c);
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
<br>To Browse IGA Face XYZ igfx:<br>
```
igfx.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the IGA Face XYZ. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the IGA Face XYZ

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for IGA Face XYZ igfx:<br>
```
igfx.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the IGA Face XYZ. The target include of the copied IGA Face XYZ can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>IGAFaceXYZ object<br>
Return type
<br>IGAFaceXYZ |
| --- |

| Example
<br>To copy IGA Face XYZ igfx into IGA Face XYZ z:<br>
```
var z = igfx.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a IGA Face XYZ |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the IGA Face XYZ will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>IGAFaceXYZ object (or null if not made).<br>
Return type
<br>IGAFaceXYZ |
| --- |

| Example
<br>To start creating a IGA Face XYZ in model m:<br>
```
var igfx = IGAFaceXYZ.Create(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a IGA Face XYZ. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the IGA Face XYZ

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the IGA Face XYZ igfx:<br>
```
igfx.DetachComment(c);
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
<br>To Edit IGA Face XYZ igfx:<br>
```
igfx.Edit();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for IGA Face XYZ. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for IGA Face XYZ igfx:<br>
```
igfx.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first IGA Face XYZ in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first IGA Face XYZ in

| Returns
<br>IGAFaceXYZ object (or null if there are no IGA Face XYZs in the model).<br>
Return type
<br>IGAFaceXYZ |
| --- |

| Example
<br>To get the first IGA Face XYZ in model m:<br>
```
var igfx = IGAFaceXYZ.First(m);
```
 |
| --- |

* * *

| FirstFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the first free IGA Face XYZ label in the model. Also see [IGAFaceXYZ.LastFreeLabel()](primer-igafacexyz-class.md#IGAFaceXYZ::LastFreeLabel), [IGAFaceXYZ.NextFreeLabel()](primer-igafacexyz-class.md#IGAFaceXYZ::NextFreeLabel) and [Model.FirstFreeItemLabel()](primer-model-class.md#Model::FirstFreeItemLabel). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first free IGA Face XYZ label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *First free in layer* in editing panels). If omitted the whole model will be used (Equivalent to *First free* in editing panels).

| Returns
<br>IGAFaceXYZ label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the first free IGA Face XYZ label in model m:<br>
```
var label = IGAFaceXYZ.FirstFreeLabel(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the IGA Face XYZs in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all IGA Face XYZs will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the IGA Face XYZs

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the IGA Face XYZs with flag f in model m:<br>
```
IGAFaceXYZ.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the IGA Face XYZ is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the IGA Face XYZ

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if IGA Face XYZ igfx has flag f set on it:<br>
```
if (igfx.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each IGA Face XYZ in the model.<br> **Note that ForEach has been designed to make looping over IGA Face XYZs as fast as possible and so has some limitations. Firstly, a single temporary IGAFaceXYZ object is created and on each function call it is updated with the current IGA Face XYZ data. This means that you should not try to store the IGAFaceXYZ object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new IGA Face XYZs inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all IGA Face XYZs are in

* func (function)
 
Function to call for each IGA Face XYZ

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the IGA Face XYZs in model m:<br>
```
IGAFaceXYZ.ForEach(m, test);
function test(igfx)
{
// igfx is IGAFaceXYZ object
}
```
<br><br>To call function test for all of the IGA Face XYZs in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
IGAFaceXYZ.ForEach(m, test, data);
function test(igfx, extra)
{
// igfx is IGAFaceXYZ object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of IGAFaceXYZ objects or properties for all of the IGA Face XYZs in a model in PRIMER. If the optional property argument is not given then an array of IGAFaceXYZ objects is returned. If the property argument is given, that property value for each IGA Face XYZ is returned in the array instead of a IGAFaceXYZ object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get IGA Face XYZs from

* property (optional) (string)
 
Name for property to get for all IGA Face XYZs in the model

| Returns
<br>Array of IGAFaceXYZ objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of IGAFaceXYZ objects for all of the IGA Face XYZs in model m:<br>
```
var a = IGAFaceXYZ.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each IGA Face XYZ in model m:<br>
```
var a = IGAFaceXYZ.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a IGA Face XYZ. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the IGA Face XYZ igfx:<br>
```
var comm_array = igfx.GetComments();
```
 |
| --- |

* * *

| GetData(index*[integer]*)

Description<br>Returns the data for brid/elid based on option in \*IGA\_FACE\_XYZ. |
| --- |

#### Arguments

* index (integer)
 
Index you want the data for. **Note that indices start at 0**.

| Returns
<br>The ID of boundary representation or basis transform element depending on option.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the 3rd data entry in IGA face xyz igfx:<br>
```
var data = igfx.GetData(2);
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of IGAFaceXYZ objects for all of the flagged IGA Face XYZs in a model in PRIMER If the optional property argument is not given then an array of IGAFaceXYZ objects is returned. If the property argument is given, then that property value for each IGA Face XYZ is returned in the array instead of a IGAFaceXYZ object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get IGA Face XYZs from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the IGA Face XYZs that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged IGA Face XYZs in the model

| Returns
<br>Array of IGAFaceXYZ objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of IGAFaceXYZ objects for all of the IGA Face XYZs in model m flagged with f:<br>
```
var igfx = IGAFaceXYZ.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the IGA Face XYZs in model m flagged with f:<br>
```
var a = IGAFaceXYZ.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the IGAFaceXYZ object for a IGA Face XYZ ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the IGA Face XYZ in

* number (integer)
 
number of the IGA Face XYZ you want the IGAFaceXYZ object for

| Returns
<br>IGAFaceXYZ object (or null if IGA Face XYZ does not exist).<br>
Return type
<br>IGAFaceXYZ |
| --- |

| Example
<br>To get the IGAFaceXYZ object for IGA Face XYZ 100 in model m<br>
```
var igfx = IGAFaceXYZ.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a IGAFaceXYZ property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [IGAFaceXYZ.ViewParameters()](primer-igafacexyz-class.md#IGAFaceXYZ::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
IGA Face XYZ property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if IGAFaceXYZ property igfx.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (igfx.GetParameter(igfx.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if IGAFaceXYZ property igfx.example is a parameter by using the GetParameter method:<br>
```
if (igfx.ViewParameters().GetParameter(igfx.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this IGA face xyz (\*IGA\_FACE\_XYZ). **Note that a carriage return is not added**. See also [IGAFaceXYZ.KeywordCards()](primer-igafacexyz-class.md#IGAFaceXYZ::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for IGA face xyz igfx:<br>
```
var key = igfx.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the IGA face xyz. **Note that a carriage return is not added**. See also [IGAFaceXYZ.Keyword()](primer-igafacexyz-class.md#IGAFaceXYZ::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for IGA face xyz igfx:<br>
```
var cards = igfx.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last IGA Face XYZ in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last IGA Face XYZ in

| Returns
<br>IGAFaceXYZ object (or null if there are no IGA Face XYZs in the model).<br>
Return type
<br>IGAFaceXYZ |
| --- |

| Example
<br>To get the last IGA Face XYZ in model m:<br>
```
var igfx = IGAFaceXYZ.Last(m);
```
 |
| --- |

* * *

| LastFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the last free IGA Face XYZ label in the model. Also see [IGAFaceXYZ.FirstFreeLabel()](primer-igafacexyz-class.md#IGAFaceXYZ::FirstFreeLabel), [IGAFaceXYZ.NextFreeLabel()](primer-igafacexyz-class.md#IGAFaceXYZ::NextFreeLabel) and see [Model.LastFreeItemLabel()](primer-model-class.md#Model::LastFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last free IGA Face XYZ label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest free in layer* in editing panels). If omitted the whole model will be used.

| Returns
<br>IGAFaceXYZ label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the last free IGA Face XYZ label in model m:<br>
```
var label = IGAFaceXYZ.LastFreeLabel(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next IGA Face XYZ in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>IGAFaceXYZ object (or null if there are no more IGA Face XYZs in the model).<br>
Return type
<br>IGAFaceXYZ |
| --- |

| Example
<br>To get the IGA Face XYZ in model m after IGA Face XYZ igfx:<br>
```
var igfx = igfx.Next();
```
 |
| --- |

* * *

| NextFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the next free (highest+1) IGA Face XYZ label in the model. Also see [IGAFaceXYZ.FirstFreeLabel()](primer-igafacexyz-class.md#IGAFaceXYZ::FirstFreeLabel), [IGAFaceXYZ.LastFreeLabel()](primer-igafacexyz-class.md#IGAFaceXYZ::LastFreeLabel) and [Model.NextFreeItemLabel()](primer-model-class.md#Model::NextFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get next free IGA Face XYZ label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest+1 in layer* in editing panels). If omitted the whole model will be used (Equivalent to *Highest+1* in editing panels).

| Returns
<br>IGAFaceXYZ label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the next free IGA Face XYZ label in model m:<br>
```
var label = IGAFaceXYZ.NextFreeLabel(m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous IGA Face XYZ in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>IGAFaceXYZ object (or null if there are no more IGA Face XYZs in the model).<br>
Return type
<br>IGAFaceXYZ |
| --- |

| Example
<br>To get the IGA Face XYZ in model m before IGA Face XYZ igfx:<br>
```
var igfx = igfx.Previous();
```
 |
| --- |

* * *

| RemoveData(index*[integer]*)

Description<br>Removes brid/elid for an index in \*IGA\_FACE\_XYZ. |
| --- |

#### Arguments

* index (integer)
 
The index you want to delete brid/elid for. **Note that indices start at 0, not 1**.

| Returns
<br>No return value. |
| --- |

| Example
<br>To delete the brid/elid for the 3rd index for \*IGA\_FACE\_XYZ in model m:<br>
```
if (igfx.entries >= 3)
{
    igfx.RemoveData(2);
}
```
 |
| --- |

* * *

| RenumberAll(Model*[[Model](primer-model-class.md)]*, start*[integer]*) [static]
Description<br>Renumbers all of the IGA Face XYZs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all IGA Face XYZs will be renumbered in

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the IGA Face XYZs in model m, from 1000000:<br>
```
IGAFaceXYZ.RenumberAll(m, 1000000);
```
 |
| --- |

* * *

| RenumberFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*) [static]
Description<br>Renumbers all of the flagged IGA Face XYZs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged IGA Face XYZs will be renumbered in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the IGA Face XYZs that you want to renumber

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the IGA Face XYZs in model m flagged with f, from 1000000:<br>
```
IGAFaceXYZ.RenumberFlagged(m, f, 1000000);
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select IGA Face XYZs using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting IGA Face XYZs

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only IGA Face XYZs from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only IGA Face XYZs that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any IGA Face XYZs can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of IGA Face XYZs selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select IGA Face XYZs from model m, flagging those selected with flag f, giving the prompt 'Select IGA Face XYZs':<br>
```
IGAFaceXYZ.Select(f, 'Select IGA Face XYZs', m);
```
<br><br>To select IGA Face XYZs, flagging those selected with flag f but limiting selection to IGA Face XYZs flagged with flag l, giving the prompt 'Select IGA Face XYZs':<br>
```
IGAFaceXYZ.Select(f, 'Select IGA Face XYZs', l);
```
 |
| --- |

* * *

| SetData(index*[integer]*, brid*[integer]*)

Description<br>Sets brid/elid based on option for an \*IGA\_FACE\_XYZ. |
| --- |

#### Arguments

* index (integer)
 
Index you want to set the brid/elid for. **Note that indices start at 0**.

* brid (integer)
 
The ID of boundary representation or basis transform element depending on option.

| Returns
<br>No return value. |
| --- |

| Example
<br>To add an entry to the \*IGA\_FACE\_XYZ igfx with id 10 by using "entries" property to get the next available index:<br>
```
var i = igfx.entries;
igfx.SetData(i, 10);
```
<br>To change an entry in 3rd field for \*IGA\_FACE\_XYZ igfx with id 30:<br>
```
igfx.SetData(2, 30);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the IGA Face XYZ. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the IGA Face XYZ

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for IGA Face XYZ igfx:<br>
```
igfx.SetFlag(f);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the IGA Face XYZ. The IGA Face XYZ will be sketched until you either call [IGAFaceXYZ.Unsketch()](primer-igafacexyz-class.md#IGAFaceXYZ::Unsketch), [IGAFaceXYZ.UnsketchAll()](primer-igafacexyz-class.md#IGAFaceXYZ::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA Face XYZ is sketched. If omitted redraw is true. If you want to sketch several IGA Face XYZs and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch IGA Face XYZ igfx:<br>
```
igfx.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged IGA Face XYZs in the model. The IGA Face XYZs will be sketched until you either call [IGAFaceXYZ.Unsketch()](primer-igafacexyz-class.md#IGAFaceXYZ::Unsketch), [IGAFaceXYZ.UnsketchFlagged()](primer-igafacexyz-class.md#IGAFaceXYZ::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged IGA Face XYZs will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the IGA Face XYZs that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA Face XYZs are sketched. If omitted redraw is true. If you want to sketch flagged IGA Face XYZs several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all IGA Face XYZs flagged with flag in model m:<br>
```
IGAFaceXYZ.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of IGA Face XYZs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing IGA Face XYZs should be counted. If false or omitted
referenced but undefined IGA Face XYZs will also be included in the total.

| Returns
<br>number of IGA Face XYZs<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of IGA Face XYZs in model m:<br>
```
var total = IGAFaceXYZ.Total(m);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the IGA Face XYZs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all IGA Face XYZs will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the IGA Face XYZs

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the IGA Face XYZs in model m:<br>
```
IGAFaceXYZ.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the IGA Face XYZ. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA Face XYZ is unsketched. If omitted redraw is true. If you want to unsketch several IGA Face XYZs and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch IGA Face XYZ igfx:<br>
```
igfx.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all IGA Face XYZs. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all IGA Face XYZs will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA Face XYZs are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all IGA Face XYZs in model m:<br>
```
IGAFaceXYZ.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged IGA Face XYZs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all IGA Face XYZs will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the IGA Face XYZs that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA Face XYZs are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all IGA Face XYZs flagged with flag in model m:<br>
```
IGAFaceXYZ.UnsketchAll(m, flag);
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
<br>[IGAFaceXYZ](primer-igafacexyz-class.md) object.<br>
Return type
<br>IGAFaceXYZ |
| --- |

| Example
<br>To check if IGAFaceXYZ property igfx.example is a parameter by using the [IGAFaceXYZ.GetParameter()](primer-igafacexyz-class.md#IGAFaceXYZ::GetParameter) method:<br>
```
if (igfx.ViewParameters().GetParameter(igfx.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for IGA Face XYZ. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for IGA Face XYZ igfx:<br>
```
igfx.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this IGA Face XYZ. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for IGA Face XYZ igfx:<br>
```
var xrefs = igfx.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the IGA face xyz data in keyword format. Note that this contains the keyword header and the keyword cards. See also [IGAFaceXYZ.Keyword()](primer-igafacexyz-class.md#IGAFaceXYZ::Keyword) and [IGAFaceXYZ.KeywordCards()](primer-igafacexyz-class.md#IGAFaceXYZ::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for IGA face xyz igfx in keyword format<br>
```
var s = igfx.toString();
```
 |
| --- |

* * *