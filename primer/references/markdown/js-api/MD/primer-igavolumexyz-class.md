# IGAVolumeXYZ class

The IGAVolumeXYZ class gives you access to IGA volume xyz cards in PRIMER. [More...](primer-igavolumexyz-class.md#IGAVolumeXYZ_details)

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

* [Create](primer-igavolumexyz-class.md#IGAVolumeXYZ::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [First](primer-igavolumexyz-class.md#IGAVolumeXYZ::First)(Model*[[Model](primer-model-class.md)]*)
* [FirstFreeLabel](primer-igavolumexyz-class.md#IGAVolumeXYZ::FirstFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [FlagAll](primer-igavolumexyz-class.md#IGAVolumeXYZ::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-igavolumexyz-class.md#IGAVolumeXYZ::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-igavolumexyz-class.md#IGAVolumeXYZ::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-igavolumexyz-class.md#IGAVolumeXYZ::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-igavolumexyz-class.md#IGAVolumeXYZ::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-igavolumexyz-class.md#IGAVolumeXYZ::Last)(Model*[[Model](primer-model-class.md)]*)
* [LastFreeLabel](primer-igavolumexyz-class.md#IGAVolumeXYZ::LastFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [NextFreeLabel](primer-igavolumexyz-class.md#IGAVolumeXYZ::NextFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [RenumberAll](primer-igavolumexyz-class.md#IGAVolumeXYZ::RenumberAll)(Model*[[Model](primer-model-class.md)]*, start*[integer]*)
* [RenumberFlagged](primer-igavolumexyz-class.md#IGAVolumeXYZ::RenumberFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*)
* [Select](primer-igavolumexyz-class.md#IGAVolumeXYZ::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-igavolumexyz-class.md#IGAVolumeXYZ::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-igavolumexyz-class.md#IGAVolumeXYZ::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnflagAll](primer-igavolumexyz-class.md#IGAVolumeXYZ::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-igavolumexyz-class.md#IGAVolumeXYZ::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-igavolumexyz-class.md#IGAVolumeXYZ::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-igavolumexyz-class.md#IGAVolumeXYZ::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Browse](primer-igavolumexyz-class.md#IGAVolumeXYZ::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-igavolumexyz-class.md#IGAVolumeXYZ::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-igavolumexyz-class.md#IGAVolumeXYZ::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-igavolumexyz-class.md#IGAVolumeXYZ::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-igavolumexyz-class.md#IGAVolumeXYZ::Edit)(modal (optional)*[boolean]*)
* [Error](primer-igavolumexyz-class.md#IGAVolumeXYZ::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-igavolumexyz-class.md#IGAVolumeXYZ::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-igavolumexyz-class.md#IGAVolumeXYZ::GetComments)()
* [GetData](primer-igavolumexyz-class.md#IGAVolumeXYZ::GetData)(index*[integer]*)
* [GetParameter](primer-igavolumexyz-class.md#IGAVolumeXYZ::GetParameter)(prop*[string]*)
* [Keyword](primer-igavolumexyz-class.md#IGAVolumeXYZ::Keyword)()
* [KeywordCards](primer-igavolumexyz-class.md#IGAVolumeXYZ::KeywordCards)()
* [Next](primer-igavolumexyz-class.md#IGAVolumeXYZ::Next)()
* [Previous](primer-igavolumexyz-class.md#IGAVolumeXYZ::Previous)()
* [RemoveData](primer-igavolumexyz-class.md#IGAVolumeXYZ::RemoveData)(index*[integer]*)
* [SetData](primer-igavolumexyz-class.md#IGAVolumeXYZ::SetData)(index*[integer]*, brid*[integer]*)
* [SetFlag](primer-igavolumexyz-class.md#IGAVolumeXYZ::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Sketch](primer-igavolumexyz-class.md#IGAVolumeXYZ::Sketch)(redraw (optional)*[boolean]*)
* [Unsketch](primer-igavolumexyz-class.md#IGAVolumeXYZ::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-igavolumexyz-class.md#IGAVolumeXYZ::ViewParameters)()
* [Warning](primer-igavolumexyz-class.md#IGAVolumeXYZ::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-igavolumexyz-class.md#IGAVolumeXYZ::Xrefs)()
* [toString](primer-igavolumexyz-class.md#IGAVolumeXYZ::toString)()

## IGAVolumeXYZ constants

| **Name** | **Description** |
| --- | --- |
| IGAVolumeXYZ.BASIS\_TRANSFORM | BASIS\_TRANSFORM is \*IGA\_VOLUME\_XYZ\_BASIS\_TRANSFORM. |
| IGAVolumeXYZ.NONE | NONE is \*IGA\_VOLUME\_XYZ. |

## IGAVolumeXYZ properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| entries (read only) | integer | Number of Boundary representation IDs (brid) added in IGA\_VOLUME\_XYZ. Can be used as index to add a new entry. |
| esid | integer | Parametric edge set ID. \*SET\_IGA\_EDGE\_UVW. |
| exists (read only) | logical | true if IGA Volume XYZ exists, false if referred to but not defined. |
| fsid | integer | Parametric face set ID. \*SET\_IGA\_FACE\_UVW. |
| include | integer | The [Include](primer-include-class.md) file number that the IGA Volume XYZ is in. |
| label | integer | [IGAVolumeXYZ](primer-igavolumexyz-class.md) number. Also see the [vid](primer-igavolumexyz-class.md#vid) property which is an alternative name for this. |
| model (read only) | integer | The [Model](primer-model-class.md) number that the IGA Volume XYZ is in. |
| option | constant | IGA Volume XYZ option.<ul> <li><a href="primer-igavolumexyz-class.md#IGAVolumeXYZ.NONE">IGAVolumeXYZ.NONE</a> or</li> <li><a href="primer-igavolumexyz-class.md#IGAVolumeXYZ.BASIS_TRANSFORM">IGAVolumeXYZ.BASIS_TRANSFORM</a></li> </ul> |
| patchid | integer | Physical trivariate NURBS patch ID or a trivariate Basis Transform patch ID. |
| psid | integer | Parametric point set ID. \*SET\_IGA\_POINT\_UVW. |
| vid | integer | [IGAVolumeXYZ](primer-igavolumexyz-class.md) number. Also see the [label](primer-igavolumexyz-class.md#label) property which is an alternative name for this. |

| Detailed Description<br>The IGAVolumeXYZ class allows you to create, modify, edit and manipulate IGA volume xyz cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new IGAVolumeXYZ(Model*[[Model](primer-model-class.md)]*, details*[object]*)

Description<br>Create a new [IGAVolumeXYZ](primer-igavolumexyz-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that IGA volume xyz will be created in

* details (object)

Details for creating the [IGAVolumeXYZ](primer-igavolumexyz-class.md) 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| esid (optional) | integer | Parametric edge set ID. \*SET\_IGA\_EDGE\_UVW. |
| fsid (optional) | integer | Parametric face set ID. \*SET\_IGA\_FACE\_UVW. |
| option | constant | IGA Volume XYZ option. [IGAVolumeXYZ.NONE](primer-igavolumexyz-class.md#IGAVolumeXYZ.NONE) or [IGAVolumeXYZ.BASIS_TRANSFORM](primer-igavolumexyz-class.md#IGAVolumeXYZ.BASIS_TRANSFORM) |
| patchid (optional) | integer | Physical trivariate NURBS patch ID or a trivariate basis transform patch ID. |
| psid (optional) | integer | Parametric point set ID. \*SET\_IGA\_POINT\_UVW. |
| vid | integer | ID of the IGA Volume XYZ. |

| Returns
<br>[IGAVolumeXYZ](primer-igavolumexyz-class.md) object<br>
Return type
<br>IGAVolumeXYZ |
| --- |

| Example
<br>To create a new IGA volume xyz in model m using vid 10 with option NONE:<br>
```
var igvx = new IGAVolumeXYZ(m, {option:IGAVolumeXYZ.NONE, vid:10});
```
<br>To create a new IGA volume xyz in model m using vid 21 and option BASIS\_TRANSFORM with patch 22, psid 23, esid 24 and fsid 25:<br>
```
var igvx = new IGAVolumeXYZ(m, {option:IGAVolumeXYZ.BASIS_TRANSFORM, vid:21, patchid: 22, psid:23, esid:24, fsid:25});
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a IGA Volume XYZ. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the IGA Volume XYZ

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the IGA Volume XYZ igvx:<br>
```
igvx.AssociateComment(c);
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
<br>To Browse IGA Volume XYZ igvx:<br>
```
igvx.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the IGA Volume XYZ. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the IGA Volume XYZ

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for IGA Volume XYZ igvx:<br>
```
igvx.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the IGA Volume XYZ. The target include of the copied IGA Volume XYZ can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>IGAVolumeXYZ object<br>
Return type
<br>IGAVolumeXYZ |
| --- |

| Example
<br>To copy IGA Volume XYZ igvx into IGA Volume XYZ z:<br>
```
var z = igvx.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a IGA Volume XYZ |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the IGA Volume XYZ will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>IGAVolumeXYZ object (or null if not made).<br>
Return type
<br>IGAVolumeXYZ |
| --- |

| Example
<br>To start creating a IGA Volume XYZ in model m:<br>
```
var igvx = IGAVolumeXYZ.Create(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a IGA Volume XYZ. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the IGA Volume XYZ

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the IGA Volume XYZ igvx:<br>
```
igvx.DetachComment(c);
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
<br>To Edit IGA Volume XYZ igvx:<br>
```
igvx.Edit();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for IGA Volume XYZ. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for IGA Volume XYZ igvx:<br>
```
igvx.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first IGA Volume XYZ in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first IGA Volume XYZ in

| Returns
<br>IGAVolumeXYZ object (or null if there are no IGA Volume XYZs in the model).<br>
Return type
<br>IGAVolumeXYZ |
| --- |

| Example
<br>To get the first IGA Volume XYZ in model m:<br>
```
var igvx = IGAVolumeXYZ.First(m);
```
 |
| --- |

* * *

| FirstFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the first free IGA Volume XYZ label in the model. Also see [IGAVolumeXYZ.LastFreeLabel()](primer-igavolumexyz-class.md#IGAVolumeXYZ::LastFreeLabel), [IGAVolumeXYZ.NextFreeLabel()](primer-igavolumexyz-class.md#IGAVolumeXYZ::NextFreeLabel) and [Model.FirstFreeItemLabel()](primer-model-class.md#Model::FirstFreeItemLabel). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first free IGA Volume XYZ label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *First free in layer* in editing panels). If omitted the whole model will be used (Equivalent to *First free* in editing panels).

| Returns
<br>IGAVolumeXYZ label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the first free IGA Volume XYZ label in model m:<br>
```
var label = IGAVolumeXYZ.FirstFreeLabel(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the IGA Volume XYZs in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all IGA Volume XYZs will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the IGA Volume XYZs

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the IGA Volume XYZs with flag f in model m:<br>
```
IGAVolumeXYZ.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the IGA Volume XYZ is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the IGA Volume XYZ

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if IGA Volume XYZ igvx has flag f set on it:<br>
```
if (igvx.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each IGA Volume XYZ in the model.<br> **Note that ForEach has been designed to make looping over IGA Volume XYZs as fast as possible and so has some limitations. Firstly, a single temporary IGAVolumeXYZ object is created and on each function call it is updated with the current IGA Volume XYZ data. This means that you should not try to store the IGAVolumeXYZ object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new IGA Volume XYZs inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all IGA Volume XYZs are in

* func (function)
 
Function to call for each IGA Volume XYZ

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the IGA Volume XYZs in model m:<br>
```
IGAVolumeXYZ.ForEach(m, test);
function test(igvx)
{
// igvx is IGAVolumeXYZ object
}
```
<br><br>To call function test for all of the IGA Volume XYZs in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
IGAVolumeXYZ.ForEach(m, test, data);
function test(igvx, extra)
{
// igvx is IGAVolumeXYZ object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of IGAVolumeXYZ objects or properties for all of the IGA Volume XYZs in a model in PRIMER. If the optional property argument is not given then an array of IGAVolumeXYZ objects is returned. If the property argument is given, that property value for each IGA Volume XYZ is returned in the array instead of a IGAVolumeXYZ object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get IGA Volume XYZs from

* property (optional) (string)
 
Name for property to get for all IGA Volume XYZs in the model

| Returns
<br>Array of IGAVolumeXYZ objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of IGAVolumeXYZ objects for all of the IGA Volume XYZs in model m:<br>
```
var a = IGAVolumeXYZ.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each IGA Volume XYZ in model m:<br>
```
var a = IGAVolumeXYZ.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a IGA Volume XYZ. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the IGA Volume XYZ igvx:<br>
```
var comm_array = igvx.GetComments();
```
 |
| --- |

* * *

| GetData(index*[integer]*)

Description<br>Returns the data for brid in \*IGA\_VOLUME\_XYZ. Only valid for option [IGAVolumeXYZ.NONE](primer-igavolumexyz-class.md#IGAVolumeXYZ.NONE). |
| --- |

#### Arguments

* index (integer)
 
Index you want the data for. **Note that indices start at 0**.

| Returns
<br>The ID of 2 dimensional boundary representation.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the 3rd data entry in IGA volume xyz igvx:<br>
```
var data = igvx.GetData(2);
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of IGAVolumeXYZ objects for all of the flagged IGA Volume XYZs in a model in PRIMER If the optional property argument is not given then an array of IGAVolumeXYZ objects is returned. If the property argument is given, then that property value for each IGA Volume XYZ is returned in the array instead of a IGAVolumeXYZ object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get IGA Volume XYZs from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the IGA Volume XYZs that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged IGA Volume XYZs in the model

| Returns
<br>Array of IGAVolumeXYZ objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of IGAVolumeXYZ objects for all of the IGA Volume XYZs in model m flagged with f:<br>
```
var igvx = IGAVolumeXYZ.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the IGA Volume XYZs in model m flagged with f:<br>
```
var a = IGAVolumeXYZ.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the IGAVolumeXYZ object for a IGA Volume XYZ ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the IGA Volume XYZ in

* number (integer)
 
number of the IGA Volume XYZ you want the IGAVolumeXYZ object for

| Returns
<br>IGAVolumeXYZ object (or null if IGA Volume XYZ does not exist).<br>
Return type
<br>IGAVolumeXYZ |
| --- |

| Example
<br>To get the IGAVolumeXYZ object for IGA Volume XYZ 100 in model m<br>
```
var igvx = IGAVolumeXYZ.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a IGAVolumeXYZ property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [IGAVolumeXYZ.ViewParameters()](primer-igavolumexyz-class.md#IGAVolumeXYZ::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
IGA Volume XYZ property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if IGAVolumeXYZ property igvx.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (igvx.GetParameter(igvx.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if IGAVolumeXYZ property igvx.example is a parameter by using the GetParameter method:<br>
```
if (igvx.ViewParameters().GetParameter(igvx.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this IGA volume xyz (\*IGA\_VOLUME\_XYZ). **Note that a carriage return is not added**. See also [IGAVolumeXYZ.KeywordCards()](primer-igavolumexyz-class.md#IGAVolumeXYZ::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for IGA volume xyz igvx:<br>
```
var key = igvx.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the IGA volume xyz. **Note that a carriage return is not added**. See also [IGAVolumeXYZ.Keyword()](primer-igavolumexyz-class.md#IGAVolumeXYZ::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for IGA volume xyz igvx:<br>
```
var cards = igvx.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last IGA Volume XYZ in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last IGA Volume XYZ in

| Returns
<br>IGAVolumeXYZ object (or null if there are no IGA Volume XYZs in the model).<br>
Return type
<br>IGAVolumeXYZ |
| --- |

| Example
<br>To get the last IGA Volume XYZ in model m:<br>
```
var igvx = IGAVolumeXYZ.Last(m);
```
 |
| --- |

* * *

| LastFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the last free IGA Volume XYZ label in the model. Also see [IGAVolumeXYZ.FirstFreeLabel()](primer-igavolumexyz-class.md#IGAVolumeXYZ::FirstFreeLabel), [IGAVolumeXYZ.NextFreeLabel()](primer-igavolumexyz-class.md#IGAVolumeXYZ::NextFreeLabel) and see [Model.LastFreeItemLabel()](primer-model-class.md#Model::LastFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last free IGA Volume XYZ label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest free in layer* in editing panels). If omitted the whole model will be used.

| Returns
<br>IGAVolumeXYZ label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the last free IGA Volume XYZ label in model m:<br>
```
var label = IGAVolumeXYZ.LastFreeLabel(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next IGA Volume XYZ in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>IGAVolumeXYZ object (or null if there are no more IGA Volume XYZs in the model).<br>
Return type
<br>IGAVolumeXYZ |
| --- |

| Example
<br>To get the IGA Volume XYZ in model m after IGA Volume XYZ igvx:<br>
```
var igvx = igvx.Next();
```
 |
| --- |

* * *

| NextFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the next free (highest+1) IGA Volume XYZ label in the model. Also see [IGAVolumeXYZ.FirstFreeLabel()](primer-igavolumexyz-class.md#IGAVolumeXYZ::FirstFreeLabel), [IGAVolumeXYZ.LastFreeLabel()](primer-igavolumexyz-class.md#IGAVolumeXYZ::LastFreeLabel) and [Model.NextFreeItemLabel()](primer-model-class.md#Model::NextFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get next free IGA Volume XYZ label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest+1 in layer* in editing panels). If omitted the whole model will be used (Equivalent to *Highest+1* in editing panels).

| Returns
<br>IGAVolumeXYZ label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the next free IGA Volume XYZ label in model m:<br>
```
var label = IGAVolumeXYZ.NextFreeLabel(m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous IGA Volume XYZ in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>IGAVolumeXYZ object (or null if there are no more IGA Volume XYZs in the model).<br>
Return type
<br>IGAVolumeXYZ |
| --- |

| Example
<br>To get the IGA Volume XYZ in model m before IGA Volume XYZ igvx:<br>
```
var igvx = igvx.Previous();
```
 |
| --- |

* * *

| RemoveData(index*[integer]*)

Description<br>Removes brid for an index in \*IGA\_VOLUME\_XYZ. Only valid for option [IGAVolumeXYZ.NONE](primer-igavolumexyz-class.md#IGAVolumeXYZ.NONE). |
| --- |

#### Arguments

* index (integer)
 
The index you want to delete brid for. **Note that indices start at 0, not 1**.

| Returns
<br>No return value. |
| --- |

| Example
<br>To delete the brid for the 3rd index for \*IGA\_VOLUME\_XYZ in model m:<br>
```
if (igvx.entries >= 3)
{
    igvx.RemoveData(2);
}
```
 |
| --- |

* * *

| RenumberAll(Model*[[Model](primer-model-class.md)]*, start*[integer]*) [static]
Description<br>Renumbers all of the IGA Volume XYZs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all IGA Volume XYZs will be renumbered in

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the IGA Volume XYZs in model m, from 1000000:<br>
```
IGAVolumeXYZ.RenumberAll(m, 1000000);
```
 |
| --- |

* * *

| RenumberFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*) [static]
Description<br>Renumbers all of the flagged IGA Volume XYZs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged IGA Volume XYZs will be renumbered in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the IGA Volume XYZs that you want to renumber

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the IGA Volume XYZs in model m flagged with f, from 1000000:<br>
```
IGAVolumeXYZ.RenumberFlagged(m, f, 1000000);
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select IGA Volume XYZs using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting IGA Volume XYZs

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only IGA Volume XYZs from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only IGA Volume XYZs that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any IGA Volume XYZs can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of IGA Volume XYZs selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select IGA Volume XYZs from model m, flagging those selected with flag f, giving the prompt 'Select IGA Volume XYZs':<br>
```
IGAVolumeXYZ.Select(f, 'Select IGA Volume XYZs', m);
```
<br><br>To select IGA Volume XYZs, flagging those selected with flag f but limiting selection to IGA Volume XYZs flagged with flag l, giving the prompt 'Select IGA Volume XYZs':<br>
```
IGAVolumeXYZ.Select(f, 'Select IGA Volume XYZs', l);
```
 |
| --- |

* * *

| SetData(index*[integer]*, brid*[integer]*)

Description<br>Sets brid for \*IGA\_VOLUME\_XYZ. Only valid for option [IGAVolumeXYZ.NONE](primer-igavolumexyz-class.md#IGAVolumeXYZ.NONE). |
| --- |

#### Arguments

* index (integer)
 
Index you want to set the brid for. **Note that indices start at 0**.

* brid (integer)
 
The ID of 2 dimensional boundary representation.

| Returns
<br>No return value. |
| --- |

| Example
<br>To add an entry to the \*IGA\_VOLUME\_XYZ igvx with id 10 by using "entries" property to get the next available index:<br>
```
var i = igvx.entries;
igvx.SetData(i, 10);
```
<br>To change an entry in 3rd field for \*IGA\_VOLUME\_XYZ igvx with id 30:<br>
```
igvx.SetData(2, 30);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the IGA Volume XYZ. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the IGA Volume XYZ

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for IGA Volume XYZ igvx:<br>
```
igvx.SetFlag(f);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the IGA Volume XYZ. The IGA Volume XYZ will be sketched until you either call [IGAVolumeXYZ.Unsketch()](primer-igavolumexyz-class.md#IGAVolumeXYZ::Unsketch), [IGAVolumeXYZ.UnsketchAll()](primer-igavolumexyz-class.md#IGAVolumeXYZ::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA Volume XYZ is sketched. If omitted redraw is true. If you want to sketch several IGA Volume XYZs and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch IGA Volume XYZ igvx:<br>
```
igvx.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged IGA Volume XYZs in the model. The IGA Volume XYZs will be sketched until you either call [IGAVolumeXYZ.Unsketch()](primer-igavolumexyz-class.md#IGAVolumeXYZ::Unsketch), [IGAVolumeXYZ.UnsketchFlagged()](primer-igavolumexyz-class.md#IGAVolumeXYZ::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged IGA Volume XYZs will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the IGA Volume XYZs that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA Volume XYZs are sketched. If omitted redraw is true. If you want to sketch flagged IGA Volume XYZs several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all IGA Volume XYZs flagged with flag in model m:<br>
```
IGAVolumeXYZ.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of IGA Volume XYZs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing IGA Volume XYZs should be counted. If false or omitted
referenced but undefined IGA Volume XYZs will also be included in the total.

| Returns
<br>number of IGA Volume XYZs<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of IGA Volume XYZs in model m:<br>
```
var total = IGAVolumeXYZ.Total(m);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the IGA Volume XYZs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all IGA Volume XYZs will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the IGA Volume XYZs

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the IGA Volume XYZs in model m:<br>
```
IGAVolumeXYZ.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the IGA Volume XYZ. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA Volume XYZ is unsketched. If omitted redraw is true. If you want to unsketch several IGA Volume XYZs and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch IGA Volume XYZ igvx:<br>
```
igvx.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all IGA Volume XYZs. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all IGA Volume XYZs will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA Volume XYZs are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all IGA Volume XYZs in model m:<br>
```
IGAVolumeXYZ.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged IGA Volume XYZs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all IGA Volume XYZs will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the IGA Volume XYZs that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA Volume XYZs are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all IGA Volume XYZs flagged with flag in model m:<br>
```
IGAVolumeXYZ.UnsketchAll(m, flag);
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
<br>[IGAVolumeXYZ](primer-igavolumexyz-class.md) object.<br>
Return type
<br>IGAVolumeXYZ |
| --- |

| Example
<br>To check if IGAVolumeXYZ property igvx.example is a parameter by using the [IGAVolumeXYZ.GetParameter()](primer-igavolumexyz-class.md#IGAVolumeXYZ::GetParameter) method:<br>
```
if (igvx.ViewParameters().GetParameter(igvx.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for IGA Volume XYZ. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for IGA Volume XYZ igvx:<br>
```
igvx.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this IGA Volume XYZ. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for IGA Volume XYZ igvx:<br>
```
var xrefs = igvx.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the IGA volume xyz data in keyword format. Note that this contains the keyword header and the keyword cards. See also [IGAVolumeXYZ.Keyword()](primer-igavolumexyz-class.md#IGAVolumeXYZ::Keyword) and [IGAVolumeXYZ.KeywordCards()](primer-igavolumexyz-class.md#IGAVolumeXYZ::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for IGA volume xyz igvx in keyword format<br>
```
var s = igvx.toString();
```
 |
| --- |

* * *