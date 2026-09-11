# IGAPointUVW class

The IGAPointUVW class gives you access to IGA point uvw cards in PRIMER. [More...](primer-igapointuvw-class.md#IGAPointUVW_details)

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

* [Create](primer-igapointuvw-class.md#IGAPointUVW::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [First](primer-igapointuvw-class.md#IGAPointUVW::First)(Model*[[Model](primer-model-class.md)]*)
* [FirstFreeLabel](primer-igapointuvw-class.md#IGAPointUVW::FirstFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [FlagAll](primer-igapointuvw-class.md#IGAPointUVW::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-igapointuvw-class.md#IGAPointUVW::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-igapointuvw-class.md#IGAPointUVW::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-igapointuvw-class.md#IGAPointUVW::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-igapointuvw-class.md#IGAPointUVW::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-igapointuvw-class.md#IGAPointUVW::Last)(Model*[[Model](primer-model-class.md)]*)
* [LastFreeLabel](primer-igapointuvw-class.md#IGAPointUVW::LastFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [NextFreeLabel](primer-igapointuvw-class.md#IGAPointUVW::NextFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [RenumberAll](primer-igapointuvw-class.md#IGAPointUVW::RenumberAll)(Model*[[Model](primer-model-class.md)]*, start*[integer]*)
* [RenumberFlagged](primer-igapointuvw-class.md#IGAPointUVW::RenumberFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*)
* [Select](primer-igapointuvw-class.md#IGAPointUVW::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-igapointuvw-class.md#IGAPointUVW::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-igapointuvw-class.md#IGAPointUVW::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnflagAll](primer-igapointuvw-class.md#IGAPointUVW::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-igapointuvw-class.md#IGAPointUVW::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-igapointuvw-class.md#IGAPointUVW::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-igapointuvw-class.md#IGAPointUVW::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Browse](primer-igapointuvw-class.md#IGAPointUVW::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-igapointuvw-class.md#IGAPointUVW::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-igapointuvw-class.md#IGAPointUVW::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-igapointuvw-class.md#IGAPointUVW::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-igapointuvw-class.md#IGAPointUVW::Edit)(modal (optional)*[boolean]*)
* [Error](primer-igapointuvw-class.md#IGAPointUVW::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-igapointuvw-class.md#IGAPointUVW::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-igapointuvw-class.md#IGAPointUVW::GetComments)()
* [GetParameter](primer-igapointuvw-class.md#IGAPointUVW::GetParameter)(prop*[string]*)
* [Keyword](primer-igapointuvw-class.md#IGAPointUVW::Keyword)()
* [KeywordCards](primer-igapointuvw-class.md#IGAPointUVW::KeywordCards)()
* [Next](primer-igapointuvw-class.md#IGAPointUVW::Next)()
* [Previous](primer-igapointuvw-class.md#IGAPointUVW::Previous)()
* [SetFlag](primer-igapointuvw-class.md#IGAPointUVW::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Sketch](primer-igapointuvw-class.md#IGAPointUVW::Sketch)(redraw (optional)*[boolean]*)
* [Unsketch](primer-igapointuvw-class.md#IGAPointUVW::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-igapointuvw-class.md#IGAPointUVW::ViewParameters)()
* [Warning](primer-igapointuvw-class.md#IGAPointUVW::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-igapointuvw-class.md#IGAPointUVW::Xrefs)()
* [toString](primer-igapointuvw-class.md#IGAPointUVW::toString)()

## IGAPointUVW constants

| **Name** | **Description** |
| --- | --- |
| IGAPointUVW.BASIS\_TRANSFORM | BASIS\_TRANSFORM is \*IGA\_POINT\_UVW\_BASIS\_TRANSFORM. |
| IGAPointUVW.NONE | NONE is \*IGA\_POINT\_UVW. |

## IGAPointUVW properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| elid | integer | Element ID local to a basis transform. |
| exists (read only) | logical | true if IGA Point UVW exists, false if referred to but not defined. |
| include | integer | The [Include](primer-include-class.md) file number that the IGA Point UVW is in. |
| label | integer | [IGAPointUVW](primer-igapointuvw-class.md) number. Also see the [pid](primer-igapointuvw-class.md#pid) property which is an alternative name for this. |
| model (read only) | integer | The [Model](primer-model-class.md) number that the IGA Point UVW is in. |
| nid | integer | [Node](primer-node-class.md) ID. |
| option | constant | IGA Edge UVW option.<ul> <li><a href="primer-igapointuvw-class.md#IGAPointUVW.NONE">IGAPointUVW.NONE</a> or</li> <li><a href="primer-igapointuvw-class.md#IGAPointUVW.BASIS_TRANSFORM">IGAPointUVW.BASIS_TRANSFORM</a></li> </ul> |
| pid | integer | [IGAPointUVW](primer-igapointuvw-class.md) number. Also see the [label](primer-igapointuvw-class.md#label) property which is an alternative name for this. |
| u | real | Coordinates in the parametric u-direction. |
| v | real | Coordinates in the parametric v-direction. |
| w | real | Coordinates in the parametric w-direction. |

| Detailed Description<br>The IGAPointUVW class allows you to create, modify, edit and manipulate IGA point uvw cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new IGAPointUVW(Model*[[Model](primer-model-class.md)]*, details*[object]*)

Description<br>Create a new [IGAPointUVW](primer-igapointuvw-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that IGA point uvw will be created in

* details (object)

Details for creating the [IGAPointUVW](primer-igapointuvw-class.md) 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| nid | integer | Node ID. |
| option (optional) | constant | IGA Point UVW option. [IGAPointUVW.NONE](primer-igapointuvw-class.md#IGAPointUVW.NONE) or [IGAPointUVW.BASIS_TRANSFORM](primer-igapointuvw-class.md#IGAPointUVW.BASIS_TRANSFORM) |
| pid | integer | ID of the IGA Point UVW. |
| u (optional) | real | Coordinates in the parametric u-direction. |
| v (optional) | real | Coordinates in the parametric v-direction. |
| w (optional) | real | Coordinates in the parametric w-direction. |

| Returns
<br>[IGAPointUVW](primer-igapointuvw-class.md) object<br>
Return type
<br>IGAPointUVW |
| --- |

| Example
<br>To create a new IGA point uvw in model m using pid 10 and node 100:<br>
```
var igpu = new IGAPointUVW(m, {pid: 10, nid:100});
```
<br>To create a new IGA point uvw in model m using pid 20 with node 200 and option BASIS\_TRANSFORM and parametric coordinates u, v, w, as 3.3, 4.4, 5.5, elid 15 respectively:<br>
```
var igpu = new IGAPointUVW(m, {option:IGAPointUVW.BASIS_TRANSFORM, pid: 20, nid: 200, u: 3.3, v: 4.4, w: 5.5, elid: 15});
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a IGA Point UVW. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the IGA Point UVW

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the IGA Point UVW igpu:<br>
```
igpu.AssociateComment(c);
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
<br>To Browse IGA Point UVW igpu:<br>
```
igpu.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the IGA Point UVW. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the IGA Point UVW

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for IGA Point UVW igpu:<br>
```
igpu.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the IGA Point UVW. The target include of the copied IGA Point UVW can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>IGAPointUVW object<br>
Return type
<br>IGAPointUVW |
| --- |

| Example
<br>To copy IGA Point UVW igpu into IGA Point UVW z:<br>
```
var z = igpu.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a IGA Point UVW |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the IGA Point UVW will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>IGAPointUVW object (or null if not made).<br>
Return type
<br>IGAPointUVW |
| --- |

| Example
<br>To start creating a IGA Point UVW in model m:<br>
```
var igpu = IGAPointUVW.Create(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a IGA Point UVW. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the IGA Point UVW

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the IGA Point UVW igpu:<br>
```
igpu.DetachComment(c);
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
<br>To Edit IGA Point UVW igpu:<br>
```
igpu.Edit();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for IGA Point UVW. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for IGA Point UVW igpu:<br>
```
igpu.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first IGA Point UVW in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first IGA Point UVW in

| Returns
<br>IGAPointUVW object (or null if there are no IGA Point UVWs in the model).<br>
Return type
<br>IGAPointUVW |
| --- |

| Example
<br>To get the first IGA Point UVW in model m:<br>
```
var igpu = IGAPointUVW.First(m);
```
 |
| --- |

* * *

| FirstFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the first free IGA Point UVW label in the model. Also see [IGAPointUVW.LastFreeLabel()](primer-igapointuvw-class.md#IGAPointUVW::LastFreeLabel), [IGAPointUVW.NextFreeLabel()](primer-igapointuvw-class.md#IGAPointUVW::NextFreeLabel) and [Model.FirstFreeItemLabel()](primer-model-class.md#Model::FirstFreeItemLabel). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first free IGA Point UVW label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *First free in layer* in editing panels). If omitted the whole model will be used (Equivalent to *First free* in editing panels).

| Returns
<br>IGAPointUVW label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the first free IGA Point UVW label in model m:<br>
```
var label = IGAPointUVW.FirstFreeLabel(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the IGA Point UVWs in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all IGA Point UVWs will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the IGA Point UVWs

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the IGA Point UVWs with flag f in model m:<br>
```
IGAPointUVW.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the IGA Point UVW is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the IGA Point UVW

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if IGA Point UVW igpu has flag f set on it:<br>
```
if (igpu.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each IGA Point UVW in the model.<br> **Note that ForEach has been designed to make looping over IGA Point UVWs as fast as possible and so has some limitations. Firstly, a single temporary IGAPointUVW object is created and on each function call it is updated with the current IGA Point UVW data. This means that you should not try to store the IGAPointUVW object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new IGA Point UVWs inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all IGA Point UVWs are in

* func (function)
 
Function to call for each IGA Point UVW

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the IGA Point UVWs in model m:<br>
```
IGAPointUVW.ForEach(m, test);
function test(igpu)
{
// igpu is IGAPointUVW object
}
```
<br><br>To call function test for all of the IGA Point UVWs in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
IGAPointUVW.ForEach(m, test, data);
function test(igpu, extra)
{
// igpu is IGAPointUVW object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of IGAPointUVW objects or properties for all of the IGA Point UVWs in a model in PRIMER. If the optional property argument is not given then an array of IGAPointUVW objects is returned. If the property argument is given, that property value for each IGA Point UVW is returned in the array instead of a IGAPointUVW object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get IGA Point UVWs from

* property (optional) (string)
 
Name for property to get for all IGA Point UVWs in the model

| Returns
<br>Array of IGAPointUVW objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of IGAPointUVW objects for all of the IGA Point UVWs in model m:<br>
```
var a = IGAPointUVW.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each IGA Point UVW in model m:<br>
```
var a = IGAPointUVW.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a IGA Point UVW. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the IGA Point UVW igpu:<br>
```
var comm_array = igpu.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of IGAPointUVW objects for all of the flagged IGA Point UVWs in a model in PRIMER If the optional property argument is not given then an array of IGAPointUVW objects is returned. If the property argument is given, then that property value for each IGA Point UVW is returned in the array instead of a IGAPointUVW object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get IGA Point UVWs from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the IGA Point UVWs that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged IGA Point UVWs in the model

| Returns
<br>Array of IGAPointUVW objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of IGAPointUVW objects for all of the IGA Point UVWs in model m flagged with f:<br>
```
var igpu = IGAPointUVW.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the IGA Point UVWs in model m flagged with f:<br>
```
var a = IGAPointUVW.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the IGAPointUVW object for a IGA Point UVW ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the IGA Point UVW in

* number (integer)
 
number of the IGA Point UVW you want the IGAPointUVW object for

| Returns
<br>IGAPointUVW object (or null if IGA Point UVW does not exist).<br>
Return type
<br>IGAPointUVW |
| --- |

| Example
<br>To get the IGAPointUVW object for IGA Point UVW 100 in model m<br>
```
var igpu = IGAPointUVW.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a IGAPointUVW property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [IGAPointUVW.ViewParameters()](primer-igapointuvw-class.md#IGAPointUVW::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
IGA Point UVW property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if IGAPointUVW property igpu.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (igpu.GetParameter(igpu.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if IGAPointUVW property igpu.example is a parameter by using the GetParameter method:<br>
```
if (igpu.ViewParameters().GetParameter(igpu.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this IGA point uvw (\*IGA\_POINT\_UVW). **Note that a carriage return is not added**. See also [IGAPointUVW.KeywordCards()](primer-igapointuvw-class.md#IGAPointUVW::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for IGA point uvw igpu:<br>
```
var key = igpu.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the IGA point uvw. **Note that a carriage return is not added**. See also [IGAPointUVW.Keyword()](primer-igapointuvw-class.md#IGAPointUVW::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for IGA point uvw igpu:<br>
```
var cards = igpu.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last IGA Point UVW in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last IGA Point UVW in

| Returns
<br>IGAPointUVW object (or null if there are no IGA Point UVWs in the model).<br>
Return type
<br>IGAPointUVW |
| --- |

| Example
<br>To get the last IGA Point UVW in model m:<br>
```
var igpu = IGAPointUVW.Last(m);
```
 |
| --- |

* * *

| LastFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the last free IGA Point UVW label in the model. Also see [IGAPointUVW.FirstFreeLabel()](primer-igapointuvw-class.md#IGAPointUVW::FirstFreeLabel), [IGAPointUVW.NextFreeLabel()](primer-igapointuvw-class.md#IGAPointUVW::NextFreeLabel) and see [Model.LastFreeItemLabel()](primer-model-class.md#Model::LastFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last free IGA Point UVW label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest free in layer* in editing panels). If omitted the whole model will be used.

| Returns
<br>IGAPointUVW label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the last free IGA Point UVW label in model m:<br>
```
var label = IGAPointUVW.LastFreeLabel(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next IGA Point UVW in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>IGAPointUVW object (or null if there are no more IGA Point UVWs in the model).<br>
Return type
<br>IGAPointUVW |
| --- |

| Example
<br>To get the IGA Point UVW in model m after IGA Point UVW igpu:<br>
```
var igpu = igpu.Next();
```
 |
| --- |

* * *

| NextFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the next free (highest+1) IGA Point UVW label in the model. Also see [IGAPointUVW.FirstFreeLabel()](primer-igapointuvw-class.md#IGAPointUVW::FirstFreeLabel), [IGAPointUVW.LastFreeLabel()](primer-igapointuvw-class.md#IGAPointUVW::LastFreeLabel) and [Model.NextFreeItemLabel()](primer-model-class.md#Model::NextFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get next free IGA Point UVW label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest+1 in layer* in editing panels). If omitted the whole model will be used (Equivalent to *Highest+1* in editing panels).

| Returns
<br>IGAPointUVW label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the next free IGA Point UVW label in model m:<br>
```
var label = IGAPointUVW.NextFreeLabel(m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous IGA Point UVW in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>IGAPointUVW object (or null if there are no more IGA Point UVWs in the model).<br>
Return type
<br>IGAPointUVW |
| --- |

| Example
<br>To get the IGA Point UVW in model m before IGA Point UVW igpu:<br>
```
var igpu = igpu.Previous();
```
 |
| --- |

* * *

| RenumberAll(Model*[[Model](primer-model-class.md)]*, start*[integer]*) [static]
Description<br>Renumbers all of the IGA Point UVWs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all IGA Point UVWs will be renumbered in

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the IGA Point UVWs in model m, from 1000000:<br>
```
IGAPointUVW.RenumberAll(m, 1000000);
```
 |
| --- |

* * *

| RenumberFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*) [static]
Description<br>Renumbers all of the flagged IGA Point UVWs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged IGA Point UVWs will be renumbered in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the IGA Point UVWs that you want to renumber

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the IGA Point UVWs in model m flagged with f, from 1000000:<br>
```
IGAPointUVW.RenumberFlagged(m, f, 1000000);
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select IGA Point UVWs using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting IGA Point UVWs

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only IGA Point UVWs from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only IGA Point UVWs that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any IGA Point UVWs can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of IGA Point UVWs selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select IGA Point UVWs from model m, flagging those selected with flag f, giving the prompt 'Select IGA Point UVWs':<br>
```
IGAPointUVW.Select(f, 'Select IGA Point UVWs', m);
```
<br><br>To select IGA Point UVWs, flagging those selected with flag f but limiting selection to IGA Point UVWs flagged with flag l, giving the prompt 'Select IGA Point UVWs':<br>
```
IGAPointUVW.Select(f, 'Select IGA Point UVWs', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the IGA Point UVW. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the IGA Point UVW

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for IGA Point UVW igpu:<br>
```
igpu.SetFlag(f);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the IGA Point UVW. The IGA Point UVW will be sketched until you either call [IGAPointUVW.Unsketch()](primer-igapointuvw-class.md#IGAPointUVW::Unsketch), [IGAPointUVW.UnsketchAll()](primer-igapointuvw-class.md#IGAPointUVW::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA Point UVW is sketched. If omitted redraw is true. If you want to sketch several IGA Point UVWs and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch IGA Point UVW igpu:<br>
```
igpu.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged IGA Point UVWs in the model. The IGA Point UVWs will be sketched until you either call [IGAPointUVW.Unsketch()](primer-igapointuvw-class.md#IGAPointUVW::Unsketch), [IGAPointUVW.UnsketchFlagged()](primer-igapointuvw-class.md#IGAPointUVW::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged IGA Point UVWs will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the IGA Point UVWs that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA Point UVWs are sketched. If omitted redraw is true. If you want to sketch flagged IGA Point UVWs several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all IGA Point UVWs flagged with flag in model m:<br>
```
IGAPointUVW.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of IGA Point UVWs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing IGA Point UVWs should be counted. If false or omitted
referenced but undefined IGA Point UVWs will also be included in the total.

| Returns
<br>number of IGA Point UVWs<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of IGA Point UVWs in model m:<br>
```
var total = IGAPointUVW.Total(m);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the IGA Point UVWs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all IGA Point UVWs will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the IGA Point UVWs

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the IGA Point UVWs in model m:<br>
```
IGAPointUVW.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the IGA Point UVW. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA Point UVW is unsketched. If omitted redraw is true. If you want to unsketch several IGA Point UVWs and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch IGA Point UVW igpu:<br>
```
igpu.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all IGA Point UVWs. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all IGA Point UVWs will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA Point UVWs are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all IGA Point UVWs in model m:<br>
```
IGAPointUVW.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged IGA Point UVWs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all IGA Point UVWs will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the IGA Point UVWs that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA Point UVWs are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all IGA Point UVWs flagged with flag in model m:<br>
```
IGAPointUVW.UnsketchAll(m, flag);
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
<br>[IGAPointUVW](primer-igapointuvw-class.md) object.<br>
Return type
<br>IGAPointUVW |
| --- |

| Example
<br>To check if IGAPointUVW property igpu.example is a parameter by using the [IGAPointUVW.GetParameter()](primer-igapointuvw-class.md#IGAPointUVW::GetParameter) method:<br>
```
if (igpu.ViewParameters().GetParameter(igpu.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for IGA Point UVW. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for IGA Point UVW igpu:<br>
```
igpu.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this IGA Point UVW. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for IGA Point UVW igpu:<br>
```
var xrefs = igpu.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the IGA point uvw data in keyword format. Note that this contains the keyword header and the keyword cards. See also [IGAPointUVW.Keyword()](primer-igapointuvw-class.md#IGAPointUVW::Keyword) and [IGAPointUVW.KeywordCards()](primer-igapointuvw-class.md#IGAPointUVW::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for IGA point uvw igpu in keyword format<br>
```
var s = igpu.toString();
```
 |
| --- |

* * *