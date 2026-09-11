# IGAEdgeUVW class

The IGAEdgeUVW class gives you access to IGA edge uvw cards in PRIMER. [More...](primer-igaedgeuvw-class.md#IGAEdgeUVW_details)

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

* [Create](primer-igaedgeuvw-class.md#IGAEdgeUVW::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [First](primer-igaedgeuvw-class.md#IGAEdgeUVW::First)(Model*[[Model](primer-model-class.md)]*)
* [FirstFreeLabel](primer-igaedgeuvw-class.md#IGAEdgeUVW::FirstFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [FlagAll](primer-igaedgeuvw-class.md#IGAEdgeUVW::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-igaedgeuvw-class.md#IGAEdgeUVW::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-igaedgeuvw-class.md#IGAEdgeUVW::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-igaedgeuvw-class.md#IGAEdgeUVW::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-igaedgeuvw-class.md#IGAEdgeUVW::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-igaedgeuvw-class.md#IGAEdgeUVW::Last)(Model*[[Model](primer-model-class.md)]*)
* [LastFreeLabel](primer-igaedgeuvw-class.md#IGAEdgeUVW::LastFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [NextFreeLabel](primer-igaedgeuvw-class.md#IGAEdgeUVW::NextFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [RenumberAll](primer-igaedgeuvw-class.md#IGAEdgeUVW::RenumberAll)(Model*[[Model](primer-model-class.md)]*, start*[integer]*)
* [RenumberFlagged](primer-igaedgeuvw-class.md#IGAEdgeUVW::RenumberFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*)
* [Select](primer-igaedgeuvw-class.md#IGAEdgeUVW::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-igaedgeuvw-class.md#IGAEdgeUVW::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-igaedgeuvw-class.md#IGAEdgeUVW::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnflagAll](primer-igaedgeuvw-class.md#IGAEdgeUVW::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-igaedgeuvw-class.md#IGAEdgeUVW::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-igaedgeuvw-class.md#IGAEdgeUVW::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-igaedgeuvw-class.md#IGAEdgeUVW::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Browse](primer-igaedgeuvw-class.md#IGAEdgeUVW::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-igaedgeuvw-class.md#IGAEdgeUVW::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-igaedgeuvw-class.md#IGAEdgeUVW::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-igaedgeuvw-class.md#IGAEdgeUVW::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-igaedgeuvw-class.md#IGAEdgeUVW::Edit)(modal (optional)*[boolean]*)
* [Error](primer-igaedgeuvw-class.md#IGAEdgeUVW::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-igaedgeuvw-class.md#IGAEdgeUVW::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-igaedgeuvw-class.md#IGAEdgeUVW::GetComments)()
* [GetParameter](primer-igaedgeuvw-class.md#IGAEdgeUVW::GetParameter)(prop*[string]*)
* [Keyword](primer-igaedgeuvw-class.md#IGAEdgeUVW::Keyword)()
* [KeywordCards](primer-igaedgeuvw-class.md#IGAEdgeUVW::KeywordCards)()
* [Next](primer-igaedgeuvw-class.md#IGAEdgeUVW::Next)()
* [Previous](primer-igaedgeuvw-class.md#IGAEdgeUVW::Previous)()
* [SetFlag](primer-igaedgeuvw-class.md#IGAEdgeUVW::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Sketch](primer-igaedgeuvw-class.md#IGAEdgeUVW::Sketch)(redraw (optional)*[boolean]*)
* [Unsketch](primer-igaedgeuvw-class.md#IGAEdgeUVW::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-igaedgeuvw-class.md#IGAEdgeUVW::ViewParameters)()
* [Warning](primer-igaedgeuvw-class.md#IGAEdgeUVW::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-igaedgeuvw-class.md#IGAEdgeUVW::Xrefs)()
* [toString](primer-igaedgeuvw-class.md#IGAEdgeUVW::toString)()

## IGAEdgeUVW constants

| **Name** | **Description** |
| --- | --- |
| IGAEdgeUVW.BASIS\_TRANSFORM | BASIS\_TRANSFORM is \*IGA\_EDGE\_UVW\_BASIS\_TRANSFORM. |
| IGAEdgeUVW.NONE | NONE is \*IGA\_EDGE\_UVW. |

## IGAEdgeUVW properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| edgeid | integer | Parametric Edge ID. |
| eid | integer | [IGAEdgeUVW](primer-igaedgeuvw-class.md) number. Also see the [label](primer-igaedgeuvw-class.md#label) property which is an alternative name for this. |
| elid | integer | Element ID local to a basis transform. |
| exists (read only) | logical | true if IGA Edge UVW exists, false if referred to but not defined. |
| exyzid | integer | Physical edge ID. \*IGA\_EDGE\_XYZ. |
| include | integer | The [Include](primer-include-class.md) file number that the IGA Edge UVW is in. |
| label | integer | [IGAEdgeUVW](primer-igaedgeuvw-class.md) number. Also see the [eid](primer-igaedgeuvw-class.md#eid) property which is an alternative name for this. |
| model (read only) | integer | The [Model](primer-model-class.md) number that the IGA Edge UVW is in. |
| option | constant | IGA Edge UVW option.<ul> <li><a href="primer-igaedgeuvw-class.md#IGAEdgeUVW.NONE">IGAEdgeUVW.NONE</a> or</li> <li><a href="primer-igaedgeuvw-class.md#IGAEdgeUVW.BASIS_TRANSFORM">IGAEdgeUVW.BASIS_TRANSFORM</a></li> </ul> |
| patchid | integer | Parametric univariate NURBS patch ID. |
| rend | real | Parametric coordinate defining the end of the trimmed parametric NURBS. |
| rstart | real | Parametric coordinate defining the start of the trimmed parametric NURBS. |
| sense | integer | Sense of orientation with respect to the physical edge. |

| Detailed Description<br>The IGAEdgeUVW class allows you to create, modify, edit and manipulate IGA edge uvw cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new IGAEdgeUVW(Model*[[Model](primer-model-class.md)]*, details*[object]*)

Description<br>Create a new [IGAEdgeUVW](primer-igaedgeuvw-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that IGA edge uvw will be created in

* details (object)

Details for creating the [IGAEdgeUVW](primer-igaedgeuvw-class.md) 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| edgeid (optional) | integer | Parametric Edge ID. |
| eid | integer | ID of the IGA Edge UVW. |
| elid (optional) | integer | Element ID local to a basis transform. |
| exyzid (optional) | integer | Physical edge ID. \*IGA\_EDGE\_XYZ. |
| option (optional) | constant | IGA Edge UVW option. [IGAEdgeUVW.NONE](primer-igaedgeuvw-class.md#IGAEdgeUVW.NONE) or [IGAEdgeUVW.BASIS_TRANSFORM](primer-igaedgeuvw-class.md#IGAEdgeUVW.BASIS_TRANSFORM) |
| patchid (optional) | integer | Parametric univariate NURBS patch ID. |
| rend (optional) | real | Parametric coordinate defining the end of the trimmed parametric NURBS. |
| rstart (optional) | real | Parametric coordinate defining the start of the trimmed parametric NURBS. |
| sense (optional) | integer | Sense of orientation with respect to the physical edge. |

| Returns
<br>[IGAEdgeUVW](primer-igaedgeuvw-class.md) object<br>
Return type
<br>IGAEdgeUVW |
| --- |

| Example
<br>To create a new IGA edge uvw in model m using eid 10:<br>
```
var igeu = new IGAEdgeUVW(m, {eid: 10});
```
<br>To create a new IGA edge uvw in model m using eid 21 and option BASIS\_TRANSFORM with exyzid 22, elid 31 and edgeid as 32:<br>
```
var igeu = new IGAEdgeUVW(m, {option:IGAEdgeUVW.BASIS_TRANSFORM, eid: 21, exyzid: 22, elid: 31, edgeid: 32});
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a IGA Edge UVW. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the IGA Edge UVW

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the IGA Edge UVW igeu:<br>
```
igeu.AssociateComment(c);
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
<br>To Browse IGA Edge UVW igeu:<br>
```
igeu.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the IGA Edge UVW. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the IGA Edge UVW

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for IGA Edge UVW igeu:<br>
```
igeu.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the IGA Edge UVW. The target include of the copied IGA Edge UVW can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>IGAEdgeUVW object<br>
Return type
<br>IGAEdgeUVW |
| --- |

| Example
<br>To copy IGA Edge UVW igeu into IGA Edge UVW z:<br>
```
var z = igeu.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a IGA Edge UVW |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the IGA Edge UVW will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>IGAEdgeUVW object (or null if not made).<br>
Return type
<br>IGAEdgeUVW |
| --- |

| Example
<br>To start creating a IGA Edge UVW in model m:<br>
```
var igeu = IGAEdgeUVW.Create(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a IGA Edge UVW. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the IGA Edge UVW

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the IGA Edge UVW igeu:<br>
```
igeu.DetachComment(c);
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
<br>To Edit IGA Edge UVW igeu:<br>
```
igeu.Edit();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for IGA Edge UVW. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for IGA Edge UVW igeu:<br>
```
igeu.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first IGA Edge UVW in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first IGA Edge UVW in

| Returns
<br>IGAEdgeUVW object (or null if there are no IGA Edge UVWs in the model).<br>
Return type
<br>IGAEdgeUVW |
| --- |

| Example
<br>To get the first IGA Edge UVW in model m:<br>
```
var igeu = IGAEdgeUVW.First(m);
```
 |
| --- |

* * *

| FirstFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the first free IGA Edge UVW label in the model. Also see [IGAEdgeUVW.LastFreeLabel()](primer-igaedgeuvw-class.md#IGAEdgeUVW::LastFreeLabel), [IGAEdgeUVW.NextFreeLabel()](primer-igaedgeuvw-class.md#IGAEdgeUVW::NextFreeLabel) and [Model.FirstFreeItemLabel()](primer-model-class.md#Model::FirstFreeItemLabel). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first free IGA Edge UVW label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *First free in layer* in editing panels). If omitted the whole model will be used (Equivalent to *First free* in editing panels).

| Returns
<br>IGAEdgeUVW label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the first free IGA Edge UVW label in model m:<br>
```
var label = IGAEdgeUVW.FirstFreeLabel(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the IGA Edge UVWs in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all IGA Edge UVWs will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the IGA Edge UVWs

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the IGA Edge UVWs with flag f in model m:<br>
```
IGAEdgeUVW.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the IGA Edge UVW is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the IGA Edge UVW

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if IGA Edge UVW igeu has flag f set on it:<br>
```
if (igeu.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each IGA Edge UVW in the model.<br> **Note that ForEach has been designed to make looping over IGA Edge UVWs as fast as possible and so has some limitations. Firstly, a single temporary IGAEdgeUVW object is created and on each function call it is updated with the current IGA Edge UVW data. This means that you should not try to store the IGAEdgeUVW object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new IGA Edge UVWs inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all IGA Edge UVWs are in

* func (function)
 
Function to call for each IGA Edge UVW

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the IGA Edge UVWs in model m:<br>
```
IGAEdgeUVW.ForEach(m, test);
function test(igeu)
{
// igeu is IGAEdgeUVW object
}
```
<br><br>To call function test for all of the IGA Edge UVWs in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
IGAEdgeUVW.ForEach(m, test, data);
function test(igeu, extra)
{
// igeu is IGAEdgeUVW object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of IGAEdgeUVW objects or properties for all of the IGA Edge UVWs in a model in PRIMER. If the optional property argument is not given then an array of IGAEdgeUVW objects is returned. If the property argument is given, that property value for each IGA Edge UVW is returned in the array instead of a IGAEdgeUVW object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get IGA Edge UVWs from

* property (optional) (string)
 
Name for property to get for all IGA Edge UVWs in the model

| Returns
<br>Array of IGAEdgeUVW objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of IGAEdgeUVW objects for all of the IGA Edge UVWs in model m:<br>
```
var a = IGAEdgeUVW.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each IGA Edge UVW in model m:<br>
```
var a = IGAEdgeUVW.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a IGA Edge UVW. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the IGA Edge UVW igeu:<br>
```
var comm_array = igeu.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of IGAEdgeUVW objects for all of the flagged IGA Edge UVWs in a model in PRIMER If the optional property argument is not given then an array of IGAEdgeUVW objects is returned. If the property argument is given, then that property value for each IGA Edge UVW is returned in the array instead of a IGAEdgeUVW object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get IGA Edge UVWs from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the IGA Edge UVWs that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged IGA Edge UVWs in the model

| Returns
<br>Array of IGAEdgeUVW objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of IGAEdgeUVW objects for all of the IGA Edge UVWs in model m flagged with f:<br>
```
var igeu = IGAEdgeUVW.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the IGA Edge UVWs in model m flagged with f:<br>
```
var a = IGAEdgeUVW.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the IGAEdgeUVW object for a IGA Edge UVW ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the IGA Edge UVW in

* number (integer)
 
number of the IGA Edge UVW you want the IGAEdgeUVW object for

| Returns
<br>IGAEdgeUVW object (or null if IGA Edge UVW does not exist).<br>
Return type
<br>IGAEdgeUVW |
| --- |

| Example
<br>To get the IGAEdgeUVW object for IGA Edge UVW 100 in model m<br>
```
var igeu = IGAEdgeUVW.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a IGAEdgeUVW property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [IGAEdgeUVW.ViewParameters()](primer-igaedgeuvw-class.md#IGAEdgeUVW::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
IGA Edge UVW property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if IGAEdgeUVW property igeu.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (igeu.GetParameter(igeu.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if IGAEdgeUVW property igeu.example is a parameter by using the GetParameter method:<br>
```
if (igeu.ViewParameters().GetParameter(igeu.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this IGA edge uvw (\*IGA\_EDGE\_UVW). **Note that a carriage return is not added**. See also [IGAEdgeUVW.KeywordCards()](primer-igaedgeuvw-class.md#IGAEdgeUVW::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for IGA edge uvw igeu:<br>
```
var key = igeu.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the IGA edge uvw. **Note that a carriage return is not added**. See also [IGAEdgeUVW.Keyword()](primer-igaedgeuvw-class.md#IGAEdgeUVW::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for IGA edge uvw igeu:<br>
```
var cards = igeu.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last IGA Edge UVW in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last IGA Edge UVW in

| Returns
<br>IGAEdgeUVW object (or null if there are no IGA Edge UVWs in the model).<br>
Return type
<br>IGAEdgeUVW |
| --- |

| Example
<br>To get the last IGA Edge UVW in model m:<br>
```
var igeu = IGAEdgeUVW.Last(m);
```
 |
| --- |

* * *

| LastFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the last free IGA Edge UVW label in the model. Also see [IGAEdgeUVW.FirstFreeLabel()](primer-igaedgeuvw-class.md#IGAEdgeUVW::FirstFreeLabel), [IGAEdgeUVW.NextFreeLabel()](primer-igaedgeuvw-class.md#IGAEdgeUVW::NextFreeLabel) and see [Model.LastFreeItemLabel()](primer-model-class.md#Model::LastFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last free IGA Edge UVW label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest free in layer* in editing panels). If omitted the whole model will be used.

| Returns
<br>IGAEdgeUVW label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the last free IGA Edge UVW label in model m:<br>
```
var label = IGAEdgeUVW.LastFreeLabel(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next IGA Edge UVW in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>IGAEdgeUVW object (or null if there are no more IGA Edge UVWs in the model).<br>
Return type
<br>IGAEdgeUVW |
| --- |

| Example
<br>To get the IGA Edge UVW in model m after IGA Edge UVW igeu:<br>
```
var igeu = igeu.Next();
```
 |
| --- |

* * *

| NextFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the next free (highest+1) IGA Edge UVW label in the model. Also see [IGAEdgeUVW.FirstFreeLabel()](primer-igaedgeuvw-class.md#IGAEdgeUVW::FirstFreeLabel), [IGAEdgeUVW.LastFreeLabel()](primer-igaedgeuvw-class.md#IGAEdgeUVW::LastFreeLabel) and [Model.NextFreeItemLabel()](primer-model-class.md#Model::NextFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get next free IGA Edge UVW label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest+1 in layer* in editing panels). If omitted the whole model will be used (Equivalent to *Highest+1* in editing panels).

| Returns
<br>IGAEdgeUVW label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the next free IGA Edge UVW label in model m:<br>
```
var label = IGAEdgeUVW.NextFreeLabel(m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous IGA Edge UVW in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>IGAEdgeUVW object (or null if there are no more IGA Edge UVWs in the model).<br>
Return type
<br>IGAEdgeUVW |
| --- |

| Example
<br>To get the IGA Edge UVW in model m before IGA Edge UVW igeu:<br>
```
var igeu = igeu.Previous();
```
 |
| --- |

* * *

| RenumberAll(Model*[[Model](primer-model-class.md)]*, start*[integer]*) [static]
Description<br>Renumbers all of the IGA Edge UVWs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all IGA Edge UVWs will be renumbered in

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the IGA Edge UVWs in model m, from 1000000:<br>
```
IGAEdgeUVW.RenumberAll(m, 1000000);
```
 |
| --- |

* * *

| RenumberFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*) [static]
Description<br>Renumbers all of the flagged IGA Edge UVWs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged IGA Edge UVWs will be renumbered in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the IGA Edge UVWs that you want to renumber

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the IGA Edge UVWs in model m flagged with f, from 1000000:<br>
```
IGAEdgeUVW.RenumberFlagged(m, f, 1000000);
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select IGA Edge UVWs using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting IGA Edge UVWs

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only IGA Edge UVWs from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only IGA Edge UVWs that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any IGA Edge UVWs can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of IGA Edge UVWs selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select IGA Edge UVWs from model m, flagging those selected with flag f, giving the prompt 'Select IGA Edge UVWs':<br>
```
IGAEdgeUVW.Select(f, 'Select IGA Edge UVWs', m);
```
<br><br>To select IGA Edge UVWs, flagging those selected with flag f but limiting selection to IGA Edge UVWs flagged with flag l, giving the prompt 'Select IGA Edge UVWs':<br>
```
IGAEdgeUVW.Select(f, 'Select IGA Edge UVWs', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the IGA Edge UVW. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the IGA Edge UVW

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for IGA Edge UVW igeu:<br>
```
igeu.SetFlag(f);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the IGA Edge UVW. The IGA Edge UVW will be sketched until you either call [IGAEdgeUVW.Unsketch()](primer-igaedgeuvw-class.md#IGAEdgeUVW::Unsketch), [IGAEdgeUVW.UnsketchAll()](primer-igaedgeuvw-class.md#IGAEdgeUVW::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA Edge UVW is sketched. If omitted redraw is true. If you want to sketch several IGA Edge UVWs and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch IGA Edge UVW igeu:<br>
```
igeu.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged IGA Edge UVWs in the model. The IGA Edge UVWs will be sketched until you either call [IGAEdgeUVW.Unsketch()](primer-igaedgeuvw-class.md#IGAEdgeUVW::Unsketch), [IGAEdgeUVW.UnsketchFlagged()](primer-igaedgeuvw-class.md#IGAEdgeUVW::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged IGA Edge UVWs will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the IGA Edge UVWs that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA Edge UVWs are sketched. If omitted redraw is true. If you want to sketch flagged IGA Edge UVWs several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all IGA Edge UVWs flagged with flag in model m:<br>
```
IGAEdgeUVW.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of IGA Edge UVWs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing IGA Edge UVWs should be counted. If false or omitted
referenced but undefined IGA Edge UVWs will also be included in the total.

| Returns
<br>number of IGA Edge UVWs<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of IGA Edge UVWs in model m:<br>
```
var total = IGAEdgeUVW.Total(m);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the IGA Edge UVWs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all IGA Edge UVWs will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the IGA Edge UVWs

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the IGA Edge UVWs in model m:<br>
```
IGAEdgeUVW.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the IGA Edge UVW. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA Edge UVW is unsketched. If omitted redraw is true. If you want to unsketch several IGA Edge UVWs and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch IGA Edge UVW igeu:<br>
```
igeu.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all IGA Edge UVWs. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all IGA Edge UVWs will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA Edge UVWs are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all IGA Edge UVWs in model m:<br>
```
IGAEdgeUVW.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged IGA Edge UVWs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all IGA Edge UVWs will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the IGA Edge UVWs that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA Edge UVWs are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all IGA Edge UVWs flagged with flag in model m:<br>
```
IGAEdgeUVW.UnsketchAll(m, flag);
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
<br>[IGAEdgeUVW](primer-igaedgeuvw-class.md) object.<br>
Return type
<br>IGAEdgeUVW |
| --- |

| Example
<br>To check if IGAEdgeUVW property igeu.example is a parameter by using the [IGAEdgeUVW.GetParameter()](primer-igaedgeuvw-class.md#IGAEdgeUVW::GetParameter) method:<br>
```
if (igeu.ViewParameters().GetParameter(igeu.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for IGA Edge UVW. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for IGA Edge UVW igeu:<br>
```
igeu.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this IGA Edge UVW. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for IGA Edge UVW igeu:<br>
```
var xrefs = igeu.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the IGA edge uvw data in keyword format. Note that this contains the keyword header and the keyword cards. See also [IGAEdgeUVW.Keyword()](primer-igaedgeuvw-class.md#IGAEdgeUVW::Keyword) and [IGAEdgeUVW.KeywordCards()](primer-igaedgeuvw-class.md#IGAEdgeUVW::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for IGA edge uvw igeu in keyword format<br>
```
var s = igeu.toString();
```
 |
| --- |

* * *