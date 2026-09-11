# IGAEdgeXYZ class

The IGAEdgeXYZ class gives you access to IGA edge xyz cards in PRIMER. [More...](primer-igaedgexyz-class.md#IGAEdgeXYZ_details)

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

* [Create](primer-igaedgexyz-class.md#IGAEdgeXYZ::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [First](primer-igaedgexyz-class.md#IGAEdgeXYZ::First)(Model*[[Model](primer-model-class.md)]*)
* [FirstFreeLabel](primer-igaedgexyz-class.md#IGAEdgeXYZ::FirstFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [FlagAll](primer-igaedgexyz-class.md#IGAEdgeXYZ::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-igaedgexyz-class.md#IGAEdgeXYZ::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-igaedgexyz-class.md#IGAEdgeXYZ::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-igaedgexyz-class.md#IGAEdgeXYZ::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-igaedgexyz-class.md#IGAEdgeXYZ::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-igaedgexyz-class.md#IGAEdgeXYZ::Last)(Model*[[Model](primer-model-class.md)]*)
* [LastFreeLabel](primer-igaedgexyz-class.md#IGAEdgeXYZ::LastFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [NextFreeLabel](primer-igaedgexyz-class.md#IGAEdgeXYZ::NextFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [RenumberAll](primer-igaedgexyz-class.md#IGAEdgeXYZ::RenumberAll)(Model*[[Model](primer-model-class.md)]*, start*[integer]*)
* [RenumberFlagged](primer-igaedgexyz-class.md#IGAEdgeXYZ::RenumberFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*)
* [Select](primer-igaedgexyz-class.md#IGAEdgeXYZ::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-igaedgexyz-class.md#IGAEdgeXYZ::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-igaedgexyz-class.md#IGAEdgeXYZ::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnflagAll](primer-igaedgexyz-class.md#IGAEdgeXYZ::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-igaedgexyz-class.md#IGAEdgeXYZ::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-igaedgexyz-class.md#IGAEdgeXYZ::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-igaedgexyz-class.md#IGAEdgeXYZ::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Browse](primer-igaedgexyz-class.md#IGAEdgeXYZ::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-igaedgexyz-class.md#IGAEdgeXYZ::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-igaedgexyz-class.md#IGAEdgeXYZ::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-igaedgexyz-class.md#IGAEdgeXYZ::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-igaedgexyz-class.md#IGAEdgeXYZ::Edit)(modal (optional)*[boolean]*)
* [Error](primer-igaedgexyz-class.md#IGAEdgeXYZ::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-igaedgexyz-class.md#IGAEdgeXYZ::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-igaedgexyz-class.md#IGAEdgeXYZ::GetComments)()
* [GetParameter](primer-igaedgexyz-class.md#IGAEdgeXYZ::GetParameter)(prop*[string]*)
* [Keyword](primer-igaedgexyz-class.md#IGAEdgeXYZ::Keyword)()
* [KeywordCards](primer-igaedgexyz-class.md#IGAEdgeXYZ::KeywordCards)()
* [Next](primer-igaedgexyz-class.md#IGAEdgeXYZ::Next)()
* [Previous](primer-igaedgexyz-class.md#IGAEdgeXYZ::Previous)()
* [SetFlag](primer-igaedgexyz-class.md#IGAEdgeXYZ::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Sketch](primer-igaedgexyz-class.md#IGAEdgeXYZ::Sketch)(redraw (optional)*[boolean]*)
* [Unsketch](primer-igaedgexyz-class.md#IGAEdgeXYZ::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-igaedgexyz-class.md#IGAEdgeXYZ::ViewParameters)()
* [Warning](primer-igaedgexyz-class.md#IGAEdgeXYZ::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-igaedgexyz-class.md#IGAEdgeXYZ::Xrefs)()
* [toString](primer-igaedgexyz-class.md#IGAEdgeXYZ::toString)()

## IGAEdgeXYZ properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| eid | integer | [IGAEdgeXYZ](primer-igaedgexyz-class.md) number. Also see the [label](primer-igaedgexyz-class.md#label) property which is an alternative name for this. |
| exists (read only) | logical | true if IGA Edge XYZ exists, false if referred to but not defined. |
| include | integer | The [Include](primer-include-class.md) file number that the IGA Edge XYZ is in. |
| label | integer | [IGAEdgeXYZ](primer-igaedgexyz-class.md) number. Also see the [eid](primer-igaedgexyz-class.md#eid) property which is an alternative name for this. |
| model (read only) | integer | The [Model](primer-model-class.md) number that the IGA Edge XYZ is in. |
| ori | integer | Orientation with respect to the physical univariate NURBS. |
| patchid | integer | Physical univariate NURBS patch ID. |
| pidend | integer | Parametric point ID defining the end of the trimmed physical NURBS. |
| pidstart | integer | Parametric point ID defining the start of the trimmed physical NURBS. |
| psid | integer | Parametric point set ID. \*SET\_IGA\_POINT\_UVW. |

| Detailed Description<br>The IGAEdgeXYZ class allows you to create, modify, edit and manipulate IGA edge xyz cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new IGAEdgeXYZ(Model*[[Model](primer-model-class.md)]*, details*[object]*)

Description<br>Create a new [IGAEdgeXYZ](primer-igaedgexyz-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that IGA edge xyz will be created in

* details (object)

Details for creating the [IGAEdgeXYZ](primer-igaedgexyz-class.md) 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| eid | integer | ID of the IGA Edge XYZ. |
| ori (optional) | integer | Orientation with respect to the physical univariate NURBS. |
| patchid (optional) | integer | Physical univariate NURBS patch ID. |
| pidend (optional) | integer | Parametric point ID defining the end of the trimmed physical NURBS. |
| pidstart (optional) | integer | Parametric point ID defining the start of the trimmed physical NURBS. |
| psid (optional) | integer | Parametric point set ID. \*SET\_IGA\_POINT\_UVW. |

| Returns
<br>[IGAEdgeXYZ](primer-igaedgexyz-class.md) object<br>
Return type
<br>IGAEdgeXYZ |
| --- |

| Example
<br>To create a new IGA edge xyz in model m using eid 10:<br>
```
var igex = new IGAEdgeXYZ(m, {eid: 10});
```
<br>To create a new IGA edge xyz in model m using eid 21 with patch id 22, ori as 23, pidstart as 24, pidend as 25 and psid as 26:<br>
```
var igex = new IGAEdgeXYZ(m, {eid: 21, patchid: 22, ori: 23, pidstart: 24, pidend: 25, psid: 26});
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a IGA Edge XYZ. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the IGA Edge XYZ

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the IGA Edge XYZ igex:<br>
```
igex.AssociateComment(c);
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
<br>To Browse IGA Edge XYZ igex:<br>
```
igex.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the IGA Edge XYZ. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the IGA Edge XYZ

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for IGA Edge XYZ igex:<br>
```
igex.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the IGA Edge XYZ. The target include of the copied IGA Edge XYZ can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>IGAEdgeXYZ object<br>
Return type
<br>IGAEdgeXYZ |
| --- |

| Example
<br>To copy IGA Edge XYZ igex into IGA Edge XYZ z:<br>
```
var z = igex.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a IGA Edge XYZ |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the IGA Edge XYZ will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>IGAEdgeXYZ object (or null if not made).<br>
Return type
<br>IGAEdgeXYZ |
| --- |

| Example
<br>To start creating a IGA Edge XYZ in model m:<br>
```
var igex = IGAEdgeXYZ.Create(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a IGA Edge XYZ. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the IGA Edge XYZ

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the IGA Edge XYZ igex:<br>
```
igex.DetachComment(c);
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
<br>To Edit IGA Edge XYZ igex:<br>
```
igex.Edit();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for IGA Edge XYZ. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for IGA Edge XYZ igex:<br>
```
igex.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first IGA Edge XYZ in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first IGA Edge XYZ in

| Returns
<br>IGAEdgeXYZ object (or null if there are no IGA Edge XYZs in the model).<br>
Return type
<br>IGAEdgeXYZ |
| --- |

| Example
<br>To get the first IGA Edge XYZ in model m:<br>
```
var igex = IGAEdgeXYZ.First(m);
```
 |
| --- |

* * *

| FirstFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the first free IGA Edge XYZ label in the model. Also see [IGAEdgeXYZ.LastFreeLabel()](primer-igaedgexyz-class.md#IGAEdgeXYZ::LastFreeLabel), [IGAEdgeXYZ.NextFreeLabel()](primer-igaedgexyz-class.md#IGAEdgeXYZ::NextFreeLabel) and [Model.FirstFreeItemLabel()](primer-model-class.md#Model::FirstFreeItemLabel). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first free IGA Edge XYZ label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *First free in layer* in editing panels). If omitted the whole model will be used (Equivalent to *First free* in editing panels).

| Returns
<br>IGAEdgeXYZ label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the first free IGA Edge XYZ label in model m:<br>
```
var label = IGAEdgeXYZ.FirstFreeLabel(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the IGA Edge XYZs in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all IGA Edge XYZs will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the IGA Edge XYZs

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the IGA Edge XYZs with flag f in model m:<br>
```
IGAEdgeXYZ.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the IGA Edge XYZ is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the IGA Edge XYZ

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if IGA Edge XYZ igex has flag f set on it:<br>
```
if (igex.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each IGA Edge XYZ in the model.<br> **Note that ForEach has been designed to make looping over IGA Edge XYZs as fast as possible and so has some limitations. Firstly, a single temporary IGAEdgeXYZ object is created and on each function call it is updated with the current IGA Edge XYZ data. This means that you should not try to store the IGAEdgeXYZ object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new IGA Edge XYZs inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all IGA Edge XYZs are in

* func (function)
 
Function to call for each IGA Edge XYZ

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the IGA Edge XYZs in model m:<br>
```
IGAEdgeXYZ.ForEach(m, test);
function test(igex)
{
// igex is IGAEdgeXYZ object
}
```
<br><br>To call function test for all of the IGA Edge XYZs in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
IGAEdgeXYZ.ForEach(m, test, data);
function test(igex, extra)
{
// igex is IGAEdgeXYZ object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of IGAEdgeXYZ objects or properties for all of the IGA Edge XYZs in a model in PRIMER. If the optional property argument is not given then an array of IGAEdgeXYZ objects is returned. If the property argument is given, that property value for each IGA Edge XYZ is returned in the array instead of a IGAEdgeXYZ object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get IGA Edge XYZs from

* property (optional) (string)
 
Name for property to get for all IGA Edge XYZs in the model

| Returns
<br>Array of IGAEdgeXYZ objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of IGAEdgeXYZ objects for all of the IGA Edge XYZs in model m:<br>
```
var a = IGAEdgeXYZ.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each IGA Edge XYZ in model m:<br>
```
var a = IGAEdgeXYZ.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a IGA Edge XYZ. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the IGA Edge XYZ igex:<br>
```
var comm_array = igex.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of IGAEdgeXYZ objects for all of the flagged IGA Edge XYZs in a model in PRIMER If the optional property argument is not given then an array of IGAEdgeXYZ objects is returned. If the property argument is given, then that property value for each IGA Edge XYZ is returned in the array instead of a IGAEdgeXYZ object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get IGA Edge XYZs from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the IGA Edge XYZs that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged IGA Edge XYZs in the model

| Returns
<br>Array of IGAEdgeXYZ objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of IGAEdgeXYZ objects for all of the IGA Edge XYZs in model m flagged with f:<br>
```
var igex = IGAEdgeXYZ.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the IGA Edge XYZs in model m flagged with f:<br>
```
var a = IGAEdgeXYZ.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the IGAEdgeXYZ object for a IGA Edge XYZ ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the IGA Edge XYZ in

* number (integer)
 
number of the IGA Edge XYZ you want the IGAEdgeXYZ object for

| Returns
<br>IGAEdgeXYZ object (or null if IGA Edge XYZ does not exist).<br>
Return type
<br>IGAEdgeXYZ |
| --- |

| Example
<br>To get the IGAEdgeXYZ object for IGA Edge XYZ 100 in model m<br>
```
var igex = IGAEdgeXYZ.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a IGAEdgeXYZ property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [IGAEdgeXYZ.ViewParameters()](primer-igaedgexyz-class.md#IGAEdgeXYZ::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
IGA Edge XYZ property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if IGAEdgeXYZ property igex.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (igex.GetParameter(igex.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if IGAEdgeXYZ property igex.example is a parameter by using the GetParameter method:<br>
```
if (igex.ViewParameters().GetParameter(igex.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this IGA edge xyz (\*IGA\_EDGE\_XYZ). **Note that a carriage return is not added**. See also [IGAEdgeXYZ.KeywordCards()](primer-igaedgexyz-class.md#IGAEdgeXYZ::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for IGA edge xyz igex:<br>
```
var key = igex.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the IGA edge xyz. **Note that a carriage return is not added**. See also [IGAEdgeXYZ.Keyword()](primer-igaedgexyz-class.md#IGAEdgeXYZ::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for IGA edge xyz igex:<br>
```
var cards = igex.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last IGA Edge XYZ in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last IGA Edge XYZ in

| Returns
<br>IGAEdgeXYZ object (or null if there are no IGA Edge XYZs in the model).<br>
Return type
<br>IGAEdgeXYZ |
| --- |

| Example
<br>To get the last IGA Edge XYZ in model m:<br>
```
var igex = IGAEdgeXYZ.Last(m);
```
 |
| --- |

* * *

| LastFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the last free IGA Edge XYZ label in the model. Also see [IGAEdgeXYZ.FirstFreeLabel()](primer-igaedgexyz-class.md#IGAEdgeXYZ::FirstFreeLabel), [IGAEdgeXYZ.NextFreeLabel()](primer-igaedgexyz-class.md#IGAEdgeXYZ::NextFreeLabel) and see [Model.LastFreeItemLabel()](primer-model-class.md#Model::LastFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last free IGA Edge XYZ label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest free in layer* in editing panels). If omitted the whole model will be used.

| Returns
<br>IGAEdgeXYZ label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the last free IGA Edge XYZ label in model m:<br>
```
var label = IGAEdgeXYZ.LastFreeLabel(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next IGA Edge XYZ in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>IGAEdgeXYZ object (or null if there are no more IGA Edge XYZs in the model).<br>
Return type
<br>IGAEdgeXYZ |
| --- |

| Example
<br>To get the IGA Edge XYZ in model m after IGA Edge XYZ igex:<br>
```
var igex = igex.Next();
```
 |
| --- |

* * *

| NextFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the next free (highest+1) IGA Edge XYZ label in the model. Also see [IGAEdgeXYZ.FirstFreeLabel()](primer-igaedgexyz-class.md#IGAEdgeXYZ::FirstFreeLabel), [IGAEdgeXYZ.LastFreeLabel()](primer-igaedgexyz-class.md#IGAEdgeXYZ::LastFreeLabel) and [Model.NextFreeItemLabel()](primer-model-class.md#Model::NextFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get next free IGA Edge XYZ label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest+1 in layer* in editing panels). If omitted the whole model will be used (Equivalent to *Highest+1* in editing panels).

| Returns
<br>IGAEdgeXYZ label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the next free IGA Edge XYZ label in model m:<br>
```
var label = IGAEdgeXYZ.NextFreeLabel(m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous IGA Edge XYZ in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>IGAEdgeXYZ object (or null if there are no more IGA Edge XYZs in the model).<br>
Return type
<br>IGAEdgeXYZ |
| --- |

| Example
<br>To get the IGA Edge XYZ in model m before IGA Edge XYZ igex:<br>
```
var igex = igex.Previous();
```
 |
| --- |

* * *

| RenumberAll(Model*[[Model](primer-model-class.md)]*, start*[integer]*) [static]
Description<br>Renumbers all of the IGA Edge XYZs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all IGA Edge XYZs will be renumbered in

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the IGA Edge XYZs in model m, from 1000000:<br>
```
IGAEdgeXYZ.RenumberAll(m, 1000000);
```
 |
| --- |

* * *

| RenumberFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*) [static]
Description<br>Renumbers all of the flagged IGA Edge XYZs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged IGA Edge XYZs will be renumbered in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the IGA Edge XYZs that you want to renumber

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the IGA Edge XYZs in model m flagged with f, from 1000000:<br>
```
IGAEdgeXYZ.RenumberFlagged(m, f, 1000000);
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select IGA Edge XYZs using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting IGA Edge XYZs

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only IGA Edge XYZs from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only IGA Edge XYZs that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any IGA Edge XYZs can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of IGA Edge XYZs selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select IGA Edge XYZs from model m, flagging those selected with flag f, giving the prompt 'Select IGA Edge XYZs':<br>
```
IGAEdgeXYZ.Select(f, 'Select IGA Edge XYZs', m);
```
<br><br>To select IGA Edge XYZs, flagging those selected with flag f but limiting selection to IGA Edge XYZs flagged with flag l, giving the prompt 'Select IGA Edge XYZs':<br>
```
IGAEdgeXYZ.Select(f, 'Select IGA Edge XYZs', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the IGA Edge XYZ. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the IGA Edge XYZ

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for IGA Edge XYZ igex:<br>
```
igex.SetFlag(f);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the IGA Edge XYZ. The IGA Edge XYZ will be sketched until you either call [IGAEdgeXYZ.Unsketch()](primer-igaedgexyz-class.md#IGAEdgeXYZ::Unsketch), [IGAEdgeXYZ.UnsketchAll()](primer-igaedgexyz-class.md#IGAEdgeXYZ::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA Edge XYZ is sketched. If omitted redraw is true. If you want to sketch several IGA Edge XYZs and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch IGA Edge XYZ igex:<br>
```
igex.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged IGA Edge XYZs in the model. The IGA Edge XYZs will be sketched until you either call [IGAEdgeXYZ.Unsketch()](primer-igaedgexyz-class.md#IGAEdgeXYZ::Unsketch), [IGAEdgeXYZ.UnsketchFlagged()](primer-igaedgexyz-class.md#IGAEdgeXYZ::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged IGA Edge XYZs will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the IGA Edge XYZs that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA Edge XYZs are sketched. If omitted redraw is true. If you want to sketch flagged IGA Edge XYZs several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all IGA Edge XYZs flagged with flag in model m:<br>
```
IGAEdgeXYZ.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of IGA Edge XYZs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing IGA Edge XYZs should be counted. If false or omitted
referenced but undefined IGA Edge XYZs will also be included in the total.

| Returns
<br>number of IGA Edge XYZs<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of IGA Edge XYZs in model m:<br>
```
var total = IGAEdgeXYZ.Total(m);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the IGA Edge XYZs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all IGA Edge XYZs will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the IGA Edge XYZs

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the IGA Edge XYZs in model m:<br>
```
IGAEdgeXYZ.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the IGA Edge XYZ. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA Edge XYZ is unsketched. If omitted redraw is true. If you want to unsketch several IGA Edge XYZs and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch IGA Edge XYZ igex:<br>
```
igex.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all IGA Edge XYZs. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all IGA Edge XYZs will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA Edge XYZs are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all IGA Edge XYZs in model m:<br>
```
IGAEdgeXYZ.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged IGA Edge XYZs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all IGA Edge XYZs will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the IGA Edge XYZs that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA Edge XYZs are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all IGA Edge XYZs flagged with flag in model m:<br>
```
IGAEdgeXYZ.UnsketchAll(m, flag);
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
<br>[IGAEdgeXYZ](primer-igaedgexyz-class.md) object.<br>
Return type
<br>IGAEdgeXYZ |
| --- |

| Example
<br>To check if IGAEdgeXYZ property igex.example is a parameter by using the [IGAEdgeXYZ.GetParameter()](primer-igaedgexyz-class.md#IGAEdgeXYZ::GetParameter) method:<br>
```
if (igex.ViewParameters().GetParameter(igex.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for IGA Edge XYZ. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for IGA Edge XYZ igex:<br>
```
igex.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this IGA Edge XYZ. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for IGA Edge XYZ igex:<br>
```
var xrefs = igex.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the IGA edge xyz data in keyword format. Note that this contains the keyword header and the keyword cards. See also [IGAEdgeXYZ.Keyword()](primer-igaedgexyz-class.md#IGAEdgeXYZ::Keyword) and [IGAEdgeXYZ.KeywordCards()](primer-igaedgexyz-class.md#IGAEdgeXYZ::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for IGA edge xyz igex in keyword format<br>
```
var s = igex.toString();
```
 |
| --- |

* * *