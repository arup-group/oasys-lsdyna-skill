# IGAFaceUVW class

The IGAFaceUVW class gives you access to IGA face uvw cards in PRIMER. [More...](primer-igafaceuvw-class.md#IGAFaceUVW_details)

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

* [Create](primer-igafaceuvw-class.md#IGAFaceUVW::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [First](primer-igafaceuvw-class.md#IGAFaceUVW::First)(Model*[[Model](primer-model-class.md)]*)
* [FirstFreeLabel](primer-igafaceuvw-class.md#IGAFaceUVW::FirstFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [FlagAll](primer-igafaceuvw-class.md#IGAFaceUVW::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-igafaceuvw-class.md#IGAFaceUVW::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-igafaceuvw-class.md#IGAFaceUVW::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-igafaceuvw-class.md#IGAFaceUVW::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-igafaceuvw-class.md#IGAFaceUVW::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-igafaceuvw-class.md#IGAFaceUVW::Last)(Model*[[Model](primer-model-class.md)]*)
* [LastFreeLabel](primer-igafaceuvw-class.md#IGAFaceUVW::LastFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [NextFreeLabel](primer-igafaceuvw-class.md#IGAFaceUVW::NextFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [RenumberAll](primer-igafaceuvw-class.md#IGAFaceUVW::RenumberAll)(Model*[[Model](primer-model-class.md)]*, start*[integer]*)
* [RenumberFlagged](primer-igafaceuvw-class.md#IGAFaceUVW::RenumberFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*)
* [Select](primer-igafaceuvw-class.md#IGAFaceUVW::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-igafaceuvw-class.md#IGAFaceUVW::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-igafaceuvw-class.md#IGAFaceUVW::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnflagAll](primer-igafaceuvw-class.md#IGAFaceUVW::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-igafaceuvw-class.md#IGAFaceUVW::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-igafaceuvw-class.md#IGAFaceUVW::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-igafaceuvw-class.md#IGAFaceUVW::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Browse](primer-igafaceuvw-class.md#IGAFaceUVW::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-igafaceuvw-class.md#IGAFaceUVW::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-igafaceuvw-class.md#IGAFaceUVW::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-igafaceuvw-class.md#IGAFaceUVW::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-igafaceuvw-class.md#IGAFaceUVW::Edit)(modal (optional)*[boolean]*)
* [Error](primer-igafaceuvw-class.md#IGAFaceUVW::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-igafaceuvw-class.md#IGAFaceUVW::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-igafaceuvw-class.md#IGAFaceUVW::GetComments)()
* [GetData](primer-igafaceuvw-class.md#IGAFaceUVW::GetData)(index*[integer]*)
* [GetParameter](primer-igafaceuvw-class.md#IGAFaceUVW::GetParameter)(prop*[string]*)
* [Keyword](primer-igafaceuvw-class.md#IGAFaceUVW::Keyword)()
* [KeywordCards](primer-igafaceuvw-class.md#IGAFaceUVW::KeywordCards)()
* [Next](primer-igafaceuvw-class.md#IGAFaceUVW::Next)()
* [Previous](primer-igafaceuvw-class.md#IGAFaceUVW::Previous)()
* [RemoveData](primer-igafaceuvw-class.md#IGAFaceUVW::RemoveData)(index*[integer]*)
* [SetData](primer-igafaceuvw-class.md#IGAFaceUVW::SetData)(index*[integer]*, brid*[integer]*)
* [SetFlag](primer-igafaceuvw-class.md#IGAFaceUVW::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Sketch](primer-igafaceuvw-class.md#IGAFaceUVW::Sketch)(redraw (optional)*[boolean]*)
* [Unsketch](primer-igafaceuvw-class.md#IGAFaceUVW::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-igafaceuvw-class.md#IGAFaceUVW::ViewParameters)()
* [Warning](primer-igafaceuvw-class.md#IGAFaceUVW::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-igafaceuvw-class.md#IGAFaceUVW::Xrefs)()
* [toString](primer-igafaceuvw-class.md#IGAFaceUVW::toString)()

## IGAFaceUVW constants

| **Name** | **Description** |
| --- | --- |
| IGAFaceUVW.BASIS\_TRANSFORM | BASIS\_TRANSFORM is \*IGA\_FACE\_UVW\_BASIS\_TRANSFORM. |
| IGAFaceUVW.NONE | NONE is \*IGA\_FACE\_UVW. |

## IGAFaceUVW properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| elid | integer | Element ID local to a trivariate basis transform. Only for the BASIS\_TRANSFORM keyword option. |
| entries (read only) | integer | Number of Boundary representation IDs (brid) or Element IDs (elid) added in IGA\_FACE\_UVW. Can be used as index to add a new entry. |
| exists (read only) | logical | true if IGA Face UVW exists, false if referred to but not defined. |
| faceid | integer | Face ID. Only for the BASIS\_TRANSFORM keyword option. |
| fid | integer | [IGAFaceUVW](primer-igafaceuvw-class.md) number. Also see the [label](primer-igafaceuvw-class.md#label) property which is an alternative name for this. |
| fxyzid | integer | Physical face ID. \*IGA\_FACE\_XYZ. |
| include | integer | The [Include](primer-include-class.md) file number that the IGA Face UVW is in. |
| label | integer | [IGAFaceUVW](primer-igafaceuvw-class.md) number. Also see the [fid](primer-igafaceuvw-class.md#fid) property which is an alternative name for this. |
| model (read only) | integer | The [Model](primer-model-class.md) number that the IGA Face UVW is in. |
| option | constant | IGA Face UVW option.<ul> <li><a href="primer-igafaceuvw-class.md#IGAFaceUVW.NONE">IGAFaceUVW.NONE</a> or</li> <li><a href="primer-igafaceuvw-class.md#IGAFaceUVW.BASIS_TRANSFORM">IGAFaceUVW.BASIS_TRANSFORM</a></li> </ul> |
| patchid | integer | Physical bivariate NURBS patch ID or a bivariate Basis Transform patch ID. Ignored for the BASIS\_TRANSFORM keyword option. |
| sense | integer | Sense of orientation with respect to the physical face. Ignored for the BASIS\_TRANSFORM keyword option. |

| Detailed Description<br>The IGAFaceUVW class allows you to create, modify, edit and manipulate IGA face uvw cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new IGAFaceUVW(Model*[[Model](primer-model-class.md)]*, details*[object]*)

Description<br>Create a new [IGAFaceUVW](primer-igafaceuvw-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that IGA face uvw will be created in

* details (object)

Details for creating the [IGAFaceUVW](primer-igafaceuvw-class.md) 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| elid (optional) | integer | Element ID local to a trivariate basis transform. |
| faceid (optional) | integer | Face ID. |
| fid | integer | ID of the IGA Face UVW. |
| fxyzid (optional) | integer | Physical face ID. \*IGA\_FACE\_XYZ. |
| option | constant | IGA Face UVW option. [IGAFaceUVW.NONE](primer-igafaceuvw-class.md#IGAFaceUVW.NONE) or [IGAFaceUVW.BASIS_TRANSFORM](primer-igafaceuvw-class.md#IGAFaceUVW.BASIS_TRANSFORM) |
| patchid (optional) | integer | Physical bivariate NURBS patch ID. |
| sense (optional) | integer | Sense of orientation with respect to the physical face. |

| Returns
<br>[IGAFaceUVW](primer-igafaceuvw-class.md) object<br>
Return type
<br>IGAFaceUVW |
| --- |

| Example
<br>To create a new IGA face uvw in model m using fid 10 and option NONE with fxyzid 11, patchid 12 and sense 1:<br>
```
var igfu = new IGAFaceUVW(m, {option:IGAFaceUVW.NONE, fid:10, fxyzid:11, patchid:12, sense:1});
```
<br>To create a new IGA face uvw in model m using fid 21 and option BASIS\_TRANSFORM with elid 31, faceid 6:<br>
```
var igfu = new IGAFaceUVW(m, {option:IGAFaceUVW.BASIS_TRANSFORM, fid:21, elid: 31, faceid:6});
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a IGA Face UVW. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the IGA Face UVW

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the IGA Face UVW igfu:<br>
```
igfu.AssociateComment(c);
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
<br>To Browse IGA Face UVW igfu:<br>
```
igfu.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the IGA Face UVW. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the IGA Face UVW

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for IGA Face UVW igfu:<br>
```
igfu.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the IGA Face UVW. The target include of the copied IGA Face UVW can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>IGAFaceUVW object<br>
Return type
<br>IGAFaceUVW |
| --- |

| Example
<br>To copy IGA Face UVW igfu into IGA Face UVW z:<br>
```
var z = igfu.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a IGA Face UVW |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the IGA Face UVW will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>IGAFaceUVW object (or null if not made).<br>
Return type
<br>IGAFaceUVW |
| --- |

| Example
<br>To start creating a IGA Face UVW in model m:<br>
```
var igfu = IGAFaceUVW.Create(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a IGA Face UVW. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the IGA Face UVW

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the IGA Face UVW igfu:<br>
```
igfu.DetachComment(c);
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
<br>To Edit IGA Face UVW igfu:<br>
```
igfu.Edit();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for IGA Face UVW. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for IGA Face UVW igfu:<br>
```
igfu.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first IGA Face UVW in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first IGA Face UVW in

| Returns
<br>IGAFaceUVW object (or null if there are no IGA Face UVWs in the model).<br>
Return type
<br>IGAFaceUVW |
| --- |

| Example
<br>To get the first IGA Face UVW in model m:<br>
```
var igfu = IGAFaceUVW.First(m);
```
 |
| --- |

* * *

| FirstFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the first free IGA Face UVW label in the model. Also see [IGAFaceUVW.LastFreeLabel()](primer-igafaceuvw-class.md#IGAFaceUVW::LastFreeLabel), [IGAFaceUVW.NextFreeLabel()](primer-igafaceuvw-class.md#IGAFaceUVW::NextFreeLabel) and [Model.FirstFreeItemLabel()](primer-model-class.md#Model::FirstFreeItemLabel). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first free IGA Face UVW label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *First free in layer* in editing panels). If omitted the whole model will be used (Equivalent to *First free* in editing panels).

| Returns
<br>IGAFaceUVW label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the first free IGA Face UVW label in model m:<br>
```
var label = IGAFaceUVW.FirstFreeLabel(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the IGA Face UVWs in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all IGA Face UVWs will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the IGA Face UVWs

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the IGA Face UVWs with flag f in model m:<br>
```
IGAFaceUVW.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the IGA Face UVW is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the IGA Face UVW

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if IGA Face UVW igfu has flag f set on it:<br>
```
if (igfu.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each IGA Face UVW in the model.<br> **Note that ForEach has been designed to make looping over IGA Face UVWs as fast as possible and so has some limitations. Firstly, a single temporary IGAFaceUVW object is created and on each function call it is updated with the current IGA Face UVW data. This means that you should not try to store the IGAFaceUVW object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new IGA Face UVWs inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all IGA Face UVWs are in

* func (function)
 
Function to call for each IGA Face UVW

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the IGA Face UVWs in model m:<br>
```
IGAFaceUVW.ForEach(m, test);
function test(igfu)
{
// igfu is IGAFaceUVW object
}
```
<br><br>To call function test for all of the IGA Face UVWs in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
IGAFaceUVW.ForEach(m, test, data);
function test(igfu, extra)
{
// igfu is IGAFaceUVW object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of IGAFaceUVW objects or properties for all of the IGA Face UVWs in a model in PRIMER. If the optional property argument is not given then an array of IGAFaceUVW objects is returned. If the property argument is given, that property value for each IGA Face UVW is returned in the array instead of a IGAFaceUVW object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get IGA Face UVWs from

* property (optional) (string)
 
Name for property to get for all IGA Face UVWs in the model

| Returns
<br>Array of IGAFaceUVW objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of IGAFaceUVW objects for all of the IGA Face UVWs in model m:<br>
```
var a = IGAFaceUVW.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each IGA Face UVW in model m:<br>
```
var a = IGAFaceUVW.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a IGA Face UVW. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the IGA Face UVW igfu:<br>
```
var comm_array = igfu.GetComments();
```
 |
| --- |

* * *

| GetData(index*[integer]*)

Description<br>Returns the data for brid in \*IGA\_FACE\_UVW. Only valid for option [IGAFaceUVW.NONE](primer-igafaceuvw-class.md#IGAFaceUVW.NONE). |
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
<br>To get the 3rd data entry in IGA face uvw igfu:<br>
```
var data = igfu.GetData(2);
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of IGAFaceUVW objects for all of the flagged IGA Face UVWs in a model in PRIMER If the optional property argument is not given then an array of IGAFaceUVW objects is returned. If the property argument is given, then that property value for each IGA Face UVW is returned in the array instead of a IGAFaceUVW object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get IGA Face UVWs from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the IGA Face UVWs that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged IGA Face UVWs in the model

| Returns
<br>Array of IGAFaceUVW objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of IGAFaceUVW objects for all of the IGA Face UVWs in model m flagged with f:<br>
```
var igfu = IGAFaceUVW.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the IGA Face UVWs in model m flagged with f:<br>
```
var a = IGAFaceUVW.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the IGAFaceUVW object for a IGA Face UVW ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the IGA Face UVW in

* number (integer)
 
number of the IGA Face UVW you want the IGAFaceUVW object for

| Returns
<br>IGAFaceUVW object (or null if IGA Face UVW does not exist).<br>
Return type
<br>IGAFaceUVW |
| --- |

| Example
<br>To get the IGAFaceUVW object for IGA Face UVW 100 in model m<br>
```
var igfu = IGAFaceUVW.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a IGAFaceUVW property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [IGAFaceUVW.ViewParameters()](primer-igafaceuvw-class.md#IGAFaceUVW::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
IGA Face UVW property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if IGAFaceUVW property igfu.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (igfu.GetParameter(igfu.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if IGAFaceUVW property igfu.example is a parameter by using the GetParameter method:<br>
```
if (igfu.ViewParameters().GetParameter(igfu.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this IGA face uvw (\*IGA\_FACE\_UVW). **Note that a carriage return is not added**. See also [IGAFaceUVW.KeywordCards()](primer-igafaceuvw-class.md#IGAFaceUVW::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for IGA face uvw igfu:<br>
```
var key = igfu.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the IGA face uvw. **Note that a carriage return is not added**. See also [IGAFaceUVW.Keyword()](primer-igafaceuvw-class.md#IGAFaceUVW::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for IGA face uvw igfu:<br>
```
var cards = igfu.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last IGA Face UVW in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last IGA Face UVW in

| Returns
<br>IGAFaceUVW object (or null if there are no IGA Face UVWs in the model).<br>
Return type
<br>IGAFaceUVW |
| --- |

| Example
<br>To get the last IGA Face UVW in model m:<br>
```
var igfu = IGAFaceUVW.Last(m);
```
 |
| --- |

* * *

| LastFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the last free IGA Face UVW label in the model. Also see [IGAFaceUVW.FirstFreeLabel()](primer-igafaceuvw-class.md#IGAFaceUVW::FirstFreeLabel), [IGAFaceUVW.NextFreeLabel()](primer-igafaceuvw-class.md#IGAFaceUVW::NextFreeLabel) and see [Model.LastFreeItemLabel()](primer-model-class.md#Model::LastFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last free IGA Face UVW label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest free in layer* in editing panels). If omitted the whole model will be used.

| Returns
<br>IGAFaceUVW label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the last free IGA Face UVW label in model m:<br>
```
var label = IGAFaceUVW.LastFreeLabel(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next IGA Face UVW in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>IGAFaceUVW object (or null if there are no more IGA Face UVWs in the model).<br>
Return type
<br>IGAFaceUVW |
| --- |

| Example
<br>To get the IGA Face UVW in model m after IGA Face UVW igfu:<br>
```
var igfu = igfu.Next();
```
 |
| --- |

* * *

| NextFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the next free (highest+1) IGA Face UVW label in the model. Also see [IGAFaceUVW.FirstFreeLabel()](primer-igafaceuvw-class.md#IGAFaceUVW::FirstFreeLabel), [IGAFaceUVW.LastFreeLabel()](primer-igafaceuvw-class.md#IGAFaceUVW::LastFreeLabel) and [Model.NextFreeItemLabel()](primer-model-class.md#Model::NextFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get next free IGA Face UVW label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest+1 in layer* in editing panels). If omitted the whole model will be used (Equivalent to *Highest+1* in editing panels).

| Returns
<br>IGAFaceUVW label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the next free IGA Face UVW label in model m:<br>
```
var label = IGAFaceUVW.NextFreeLabel(m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous IGA Face UVW in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>IGAFaceUVW object (or null if there are no more IGA Face UVWs in the model).<br>
Return type
<br>IGAFaceUVW |
| --- |

| Example
<br>To get the IGA Face UVW in model m before IGA Face UVW igfu:<br>
```
var igfu = igfu.Previous();
```
 |
| --- |

* * *

| RemoveData(index*[integer]*)

Description<br>Removes brid/elid for an index in \*IGA\_FACE\_UVW. Only valid for option [IGAFaceUVW.NONE](primer-igafaceuvw-class.md#IGAFaceUVW.NONE). |
| --- |

#### Arguments

* index (integer)
 
The index you want to delete brid/elid for. **Note that indices start at 0, not 1**.

| Returns
<br>No return value. |
| --- |

| Example
<br>To delete the brid/elid for the 3rd index for \*IGA\_FACE\_UVW in model m:<br>
```
if (igfu.entries >= 3)
{
    igfu.RemoveData(2);
}
      
```
 |
| --- |

* * *

| RenumberAll(Model*[[Model](primer-model-class.md)]*, start*[integer]*) [static]
Description<br>Renumbers all of the IGA Face UVWs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all IGA Face UVWs will be renumbered in

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the IGA Face UVWs in model m, from 1000000:<br>
```
IGAFaceUVW.RenumberAll(m, 1000000);
```
 |
| --- |

* * *

| RenumberFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*) [static]
Description<br>Renumbers all of the flagged IGA Face UVWs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged IGA Face UVWs will be renumbered in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the IGA Face UVWs that you want to renumber

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the IGA Face UVWs in model m flagged with f, from 1000000:<br>
```
IGAFaceUVW.RenumberFlagged(m, f, 1000000);
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select IGA Face UVWs using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting IGA Face UVWs

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only IGA Face UVWs from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only IGA Face UVWs that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any IGA Face UVWs can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of IGA Face UVWs selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select IGA Face UVWs from model m, flagging those selected with flag f, giving the prompt 'Select IGA Face UVWs':<br>
```
IGAFaceUVW.Select(f, 'Select IGA Face UVWs', m);
```
<br><br>To select IGA Face UVWs, flagging those selected with flag f but limiting selection to IGA Face UVWs flagged with flag l, giving the prompt 'Select IGA Face UVWs':<br>
```
IGAFaceUVW.Select(f, 'Select IGA Face UVWs', l);
```
 |
| --- |

* * *

| SetData(index*[integer]*, brid*[integer]*)

Description<br>Sets brid for \*IGA\_FACE\_UVW. Only valid for option [IGAFaceUVW.NONE](primer-igafaceuvw-class.md#IGAFaceUVW.NONE). |
| --- |

#### Arguments

* index (integer)
 
Index you want to set the brid/elid for. **Note that indices start at 0**.

* brid (integer)
 
The ID of 1 dimensional boundary representation.

| Returns
<br>No return value. |
| --- |

| Example
<br>To add an entry to the \*IGA\_FACE\_UVW igfu with id 10 by using "entries" property to get the next available index:<br>
```
var i = igfu.entries;
igfu.SetData(i, 10);
```
<br>To change an entry in 3rd field for \*IGA\_FACE\_UVW igfu with id 30:<br>
```
igfu.SetData(2, 30);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the IGA Face UVW. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the IGA Face UVW

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for IGA Face UVW igfu:<br>
```
igfu.SetFlag(f);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the IGA Face UVW. The IGA Face UVW will be sketched until you either call [IGAFaceUVW.Unsketch()](primer-igafaceuvw-class.md#IGAFaceUVW::Unsketch), [IGAFaceUVW.UnsketchAll()](primer-igafaceuvw-class.md#IGAFaceUVW::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA Face UVW is sketched. If omitted redraw is true. If you want to sketch several IGA Face UVWs and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch IGA Face UVW igfu:<br>
```
igfu.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged IGA Face UVWs in the model. The IGA Face UVWs will be sketched until you either call [IGAFaceUVW.Unsketch()](primer-igafaceuvw-class.md#IGAFaceUVW::Unsketch), [IGAFaceUVW.UnsketchFlagged()](primer-igafaceuvw-class.md#IGAFaceUVW::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged IGA Face UVWs will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the IGA Face UVWs that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA Face UVWs are sketched. If omitted redraw is true. If you want to sketch flagged IGA Face UVWs several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all IGA Face UVWs flagged with flag in model m:<br>
```
IGAFaceUVW.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of IGA Face UVWs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing IGA Face UVWs should be counted. If false or omitted
referenced but undefined IGA Face UVWs will also be included in the total.

| Returns
<br>number of IGA Face UVWs<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of IGA Face UVWs in model m:<br>
```
var total = IGAFaceUVW.Total(m);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the IGA Face UVWs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all IGA Face UVWs will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the IGA Face UVWs

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the IGA Face UVWs in model m:<br>
```
IGAFaceUVW.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the IGA Face UVW. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA Face UVW is unsketched. If omitted redraw is true. If you want to unsketch several IGA Face UVWs and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch IGA Face UVW igfu:<br>
```
igfu.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all IGA Face UVWs. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all IGA Face UVWs will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA Face UVWs are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all IGA Face UVWs in model m:<br>
```
IGAFaceUVW.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged IGA Face UVWs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all IGA Face UVWs will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the IGA Face UVWs that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA Face UVWs are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all IGA Face UVWs flagged with flag in model m:<br>
```
IGAFaceUVW.UnsketchAll(m, flag);
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
<br>[IGAFaceUVW](primer-igafaceuvw-class.md) object.<br>
Return type
<br>IGAFaceUVW |
| --- |

| Example
<br>To check if IGAFaceUVW property igfu.example is a parameter by using the [IGAFaceUVW.GetParameter()](primer-igafaceuvw-class.md#IGAFaceUVW::GetParameter) method:<br>
```
if (igfu.ViewParameters().GetParameter(igfu.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for IGA Face UVW. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for IGA Face UVW igfu:<br>
```
igfu.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this IGA Face UVW. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for IGA Face UVW igfu:<br>
```
var xrefs = igfu.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the IGA face uvw data in keyword format. Note that this contains the keyword header and the keyword cards. See also [IGAFaceUVW.Keyword()](primer-igafaceuvw-class.md#IGAFaceUVW::Keyword) and [IGAFaceUVW.KeywordCards()](primer-igafaceuvw-class.md#IGAFaceUVW::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for IGA face uvw igfu in keyword format<br>
```
var s = igfu.toString();
```
 |
| --- |

* * *