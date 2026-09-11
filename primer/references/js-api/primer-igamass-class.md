# IGAMass class

The IGAMass class gives you access to IGA mass cards in PRIMER. [More...](primer-igamass-class.md#IGAMass_details)

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

* [Create](primer-igamass-class.md#IGAMass::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [First](primer-igamass-class.md#IGAMass::First)(Model*[[Model](primer-model-class.md)]*)
* [FlagAll](primer-igamass-class.md#IGAMass::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-igamass-class.md#IGAMass::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-igamass-class.md#IGAMass::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-igamass-class.md#IGAMass::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-igamass-class.md#IGAMass::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-igamass-class.md#IGAMass::Last)(Model*[[Model](primer-model-class.md)]*)
* [Select](primer-igamass-class.md#IGAMass::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-igamass-class.md#IGAMass::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-igamass-class.md#IGAMass::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnflagAll](primer-igamass-class.md#IGAMass::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-igamass-class.md#IGAMass::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-igamass-class.md#IGAMass::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-igamass-class.md#IGAMass::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Browse](primer-igamass-class.md#IGAMass::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-igamass-class.md#IGAMass::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-igamass-class.md#IGAMass::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-igamass-class.md#IGAMass::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-igamass-class.md#IGAMass::Edit)(modal (optional)*[boolean]*)
* [Error](primer-igamass-class.md#IGAMass::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-igamass-class.md#IGAMass::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-igamass-class.md#IGAMass::GetComments)()
* [GetParameter](primer-igamass-class.md#IGAMass::GetParameter)(prop*[string]*)
* [Keyword](primer-igamass-class.md#IGAMass::Keyword)()
* [KeywordCards](primer-igamass-class.md#IGAMass::KeywordCards)()
* [Next](primer-igamass-class.md#IGAMass::Next)()
* [Previous](primer-igamass-class.md#IGAMass::Previous)()
* [SetFlag](primer-igamass-class.md#IGAMass::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Sketch](primer-igamass-class.md#IGAMass::Sketch)(redraw (optional)*[boolean]*)
* [Unsketch](primer-igamass-class.md#IGAMass::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-igamass-class.md#IGAMass::ViewParameters)()
* [Warning](primer-igamass-class.md#IGAMass::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-igamass-class.md#IGAMass::Xrefs)()
* [toString](primer-igamass-class.md#IGAMass::toString)()

## IGAMass constants

| **Name** | **Description** |
| --- | --- |
| IGAMass.EDGE\_UVW | EDGE is \*IGA\_MASS\_EDGE\_UVW. |
| IGAMass.FACE\_XYZ | FACE is \*IGA\_MASS\_FACE\_XYZ. |
| IGAMass.POINT\_UVW | POINT is \*IGA\_MASS\_POINT\_UVW. |
| IGAMass.SET\_EDGE\_UVW | S\_EDGE is \*IGA\_MASS\_SET\_EDGE\_UVW. |
| IGAMass.SET\_FACE\_XYZ | S\_FACE is \*IGA\_MASS\_SET\_FACE\_XYZ. |
| IGAMass.SET\_POINT\_UVW | S\_POINT is \*IGA\_MASS\_SET\_POINT\_UVW. |

## IGAMass properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| dmass | real | Uniformly distributed mass added to IGA entity. |
| exists (read only) | logical | true if IGA Mass exists, false if referred to but not defined. |
| id | integer | ID of IGA entity depending on the choice of keyword option. Can be [IGA_POINT_UVW](primer-igapointuvw-class.md), [IGA_EDGE_UVW](primer-igaedgeuvw-class.md), [IGA_FACE_XYZ](primer-igafacexyz-class.md), [SET_IGA_POINT_UVW](primer-set-class.md#Set.IGA_POINT_UVW), [SET_IGA_EDGE_UVW](primer-set-class.md#Set.IGA_EDGE) or [SET_IGA_FACE_XYZ](primer-set-class.md#Set.IGA_FACE). |
| include | integer | The [Include](primer-include-class.md) file number that the IGA Mass is in. |
| label (read only) | integer | [IGAMass](primer-igamass-class.md) number. Only used in PRIMER. |
| model (read only) | integer | The [Model](primer-model-class.md) number that the IGA Mass is in. |
| option | constant | IGA mass option. Can be [IGAMass.POINT_UVW](primer-igamass-class.md#IGAMass.POINT_UVW), [IGAMass.EDGE_UVW](primer-igamass-class.md#IGAMass.EDGE_UVW), [IGAMass.FACE_XYZ](primer-igamass-class.md#IGAMass.FACE_XYZ), [IGAMass.SET_POINT_UVW](primer-igamass-class.md#IGAMass.SET_POINT_UVW), [IGAMass.SET_EDGE_UVW](primer-igamass-class.md#IGAMass.SET_EDGE_UVW) or [IGAMass.SET_FACE_XYZ](primer-igamass-class.md#IGAMass.SET_FACE_XYZ). |
| tmass | real | Mass added to IGA entity. |

| Detailed Description<br>The IGAMass class allows you to create, modify, edit and manipulate IGA mass cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new IGAMass(Model*[[Model](primer-model-class.md)]*, details*[object]*)

Description<br>Create a new [IGAMass](primer-igamass-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that IGA mass will be created in

* details (object)

Details for creating the [IGAMass](primer-igamass-class.md) 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| dmass (optional) | real | Uniformly distributed mass added to IGA entity. |
| id | integer | ID of IGA entity depending on the choice of keyword option. Can be [IGA_POINT_UVW](primer-igapointuvw-class.md), [IGA_EDGE_UVW](primer-igaedgeuvw-class.md), [IGA_FACE_XYZ](primer-igafacexyz-class.md), [SET_IGA_POINT_UVW](primer-set-class.md#Set.IGA_POINT_UVW), [SET_IGA_EDGE_UVW](primer-set-class.md#Set.IGA_EDGE) or [SET_IGA_FACE_XYZ](primer-set-class.md#Set.IGA_FACE). |
| option | constant | IGA Face XYZ option. Can be [IGAMass.POINT_UVW](primer-igamass-class.md#IGAMass.POINT_UVW), [IGAMass.EDGE_UVW](primer-igamass-class.md#IGAMass.EDGE_UVW), [IGAMass.FACE_XYZ](primer-igamass-class.md#IGAMass.FACE_XYZ), [IGAMass.SET_POINT_UVW](primer-igamass-class.md#IGAMass.SET_POINT_UVW), [IGAMass.SET_EDGE_UVW](primer-igamass-class.md#IGAMass.SET_EDGE_UVW) or [IGAMass.SET_FACE_XYZ](primer-igamass-class.md#IGAMass.SET_FACE_XYZ). |
| tmass (optional) | real | Mass added to IGA entity. |

| Returns
<br>[IGAMass](primer-igamass-class.md) object<br>
Return type
<br>IGAMass |
| --- |

| Example
<br>To create a new IGA mass in model m using option POINT with id 10:<br>
```
var igma = new IGAMass(m, {option:IGAMass.POINT_UVW, id:10});
```
<br>To create a new IGA mass in model m using option S\_EDGE with id 21, tmass 22.5 and dmass 23.5:<br>
```
var igma = new IGAMass(m, {option:IGAMass.SET_EDGE_UVW, id:21, tmass: 22.5, dmass:23.5});
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a IGA Mass. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the IGA Mass

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the IGA Mass igma:<br>
```
igma.AssociateComment(c);
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
<br>To Browse IGA Mass igma:<br>
```
igma.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the IGA Mass. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the IGA Mass

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for IGA Mass igma:<br>
```
igma.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the IGA Mass. The target include of the copied IGA Mass can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>IGAMass object<br>
Return type
<br>IGAMass |
| --- |

| Example
<br>To copy IGA Mass igma into IGA Mass z:<br>
```
var z = igma.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a IGA Mass |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the IGA Mass will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>IGAMass object (or null if not made).<br>
Return type
<br>IGAMass |
| --- |

| Example
<br>To start creating a IGA Mass in model m:<br>
```
var igma = IGAMass.Create(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a IGA Mass. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the IGA Mass

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the IGA Mass igma:<br>
```
igma.DetachComment(c);
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
<br>To Edit IGA Mass igma:<br>
```
igma.Edit();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for IGA Mass. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for IGA Mass igma:<br>
```
igma.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first IGA Mass in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first IGA Mass in

| Returns
<br>IGAMass object (or null if there are no IGA Masss in the model).<br>
Return type
<br>IGAMass |
| --- |

| Example
<br>To get the first IGA Mass in model m:<br>
```
var igma = IGAMass.First(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the IGA Masss in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all IGA Masss will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the IGA Masss

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the IGA Masss with flag f in model m:<br>
```
IGAMass.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the IGA Mass is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the IGA Mass

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if IGA Mass igma has flag f set on it:<br>
```
if (igma.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each IGA Mass in the model.<br> **Note that ForEach has been designed to make looping over IGA Masss as fast as possible and so has some limitations. Firstly, a single temporary IGAMass object is created and on each function call it is updated with the current IGA Mass data. This means that you should not try to store the IGAMass object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new IGA Masss inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all IGA Masss are in

* func (function)
 
Function to call for each IGA Mass

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the IGA Masss in model m:<br>
```
IGAMass.ForEach(m, test);
function test(igma)
{
// igma is IGAMass object
}
```
<br><br>To call function test for all of the IGA Masss in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
IGAMass.ForEach(m, test, data);
function test(igma, extra)
{
// igma is IGAMass object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of IGAMass objects or properties for all of the IGA Masss in a model in PRIMER. If the optional property argument is not given then an array of IGAMass objects is returned. If the property argument is given, that property value for each IGA Mass is returned in the array instead of a IGAMass object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get IGA Masss from

* property (optional) (string)
 
Name for property to get for all IGA Masss in the model

| Returns
<br>Array of IGAMass objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of IGAMass objects for all of the IGA Masss in model m:<br>
```
var a = IGAMass.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each IGA Mass in model m:<br>
```
var a = IGAMass.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a IGA Mass. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the IGA Mass igma:<br>
```
var comm_array = igma.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of IGAMass objects for all of the flagged IGA Masss in a model in PRIMER If the optional property argument is not given then an array of IGAMass objects is returned. If the property argument is given, then that property value for each IGA Mass is returned in the array instead of a IGAMass object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get IGA Masss from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the IGA Masss that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged IGA Masss in the model

| Returns
<br>Array of IGAMass objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of IGAMass objects for all of the IGA Masss in model m flagged with f:<br>
```
var igma = IGAMass.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the IGA Masss in model m flagged with f:<br>
```
var a = IGAMass.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the IGAMass object for a IGA Mass ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the IGA Mass in

* number (integer)
 
number of the IGA Mass you want the IGAMass object for

| Returns
<br>IGAMass object (or null if IGA Mass does not exist).<br>
Return type
<br>IGAMass |
| --- |

| Example
<br>To get the IGAMass object for IGA Mass 100 in model m<br>
```
var igma = IGAMass.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a IGAMass property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [IGAMass.ViewParameters()](primer-igamass-class.md#IGAMass::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
IGA Mass property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if IGAMass property igma.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (igma.GetParameter(igma.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if IGAMass property igma.example is a parameter by using the GetParameter method:<br>
```
if (igma.ViewParameters().GetParameter(igma.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this IGA mass (\*IGA\_MASS). **Note that a carriage return is not added**. See also [IGAMass.KeywordCards()](primer-igamass-class.md#IGAMass::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for IGA mass igma:<br>
```
var key = igma.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the IGA mass. **Note that a carriage return is not added**. See also [IGAMass.Keyword()](primer-igamass-class.md#IGAMass::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for IGA mass igma:<br>
```
var cards = igma.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last IGA Mass in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last IGA Mass in

| Returns
<br>IGAMass object (or null if there are no IGA Masss in the model).<br>
Return type
<br>IGAMass |
| --- |

| Example
<br>To get the last IGA Mass in model m:<br>
```
var igma = IGAMass.Last(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next IGA Mass in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>IGAMass object (or null if there are no more IGA Masss in the model).<br>
Return type
<br>IGAMass |
| --- |

| Example
<br>To get the IGA Mass in model m after IGA Mass igma:<br>
```
var igma = igma.Next();
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous IGA Mass in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>IGAMass object (or null if there are no more IGA Masss in the model).<br>
Return type
<br>IGAMass |
| --- |

| Example
<br>To get the IGA Mass in model m before IGA Mass igma:<br>
```
var igma = igma.Previous();
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select IGA Masss using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting IGA Masss

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only IGA Masss from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only IGA Masss that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any IGA Masss can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of IGA Masss selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select IGA Masss from model m, flagging those selected with flag f, giving the prompt 'Select IGA Masss':<br>
```
IGAMass.Select(f, 'Select IGA Masss', m);
```
<br><br>To select IGA Masss, flagging those selected with flag f but limiting selection to IGA Masss flagged with flag l, giving the prompt 'Select IGA Masss':<br>
```
IGAMass.Select(f, 'Select IGA Masss', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the IGA Mass. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the IGA Mass

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for IGA Mass igma:<br>
```
igma.SetFlag(f);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the IGA Mass. The IGA Mass will be sketched until you either call [IGAMass.Unsketch()](primer-igamass-class.md#IGAMass::Unsketch), [IGAMass.UnsketchAll()](primer-igamass-class.md#IGAMass::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA Mass is sketched. If omitted redraw is true. If you want to sketch several IGA Masss and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch IGA Mass igma:<br>
```
igma.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged IGA Masss in the model. The IGA Masss will be sketched until you either call [IGAMass.Unsketch()](primer-igamass-class.md#IGAMass::Unsketch), [IGAMass.UnsketchFlagged()](primer-igamass-class.md#IGAMass::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged IGA Masss will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the IGA Masss that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA Masss are sketched. If omitted redraw is true. If you want to sketch flagged IGA Masss several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all IGA Masss flagged with flag in model m:<br>
```
IGAMass.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of IGA Masss in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing IGA Masss should be counted. If false or omitted
referenced but undefined IGA Masss will also be included in the total.

| Returns
<br>number of IGA Masss<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of IGA Masss in model m:<br>
```
var total = IGAMass.Total(m);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the IGA Masss in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all IGA Masss will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the IGA Masss

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the IGA Masss in model m:<br>
```
IGAMass.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the IGA Mass. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA Mass is unsketched. If omitted redraw is true. If you want to unsketch several IGA Masss and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch IGA Mass igma:<br>
```
igma.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all IGA Masss. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all IGA Masss will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA Masss are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all IGA Masss in model m:<br>
```
IGAMass.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged IGA Masss in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all IGA Masss will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the IGA Masss that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA Masss are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all IGA Masss flagged with flag in model m:<br>
```
IGAMass.UnsketchAll(m, flag);
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
<br>[IGAMass](primer-igamass-class.md) object.<br>
Return type
<br>IGAMass |
| --- |

| Example
<br>To check if IGAMass property igma.example is a parameter by using the [IGAMass.GetParameter()](primer-igamass-class.md#IGAMass::GetParameter) method:<br>
```
if (igma.ViewParameters().GetParameter(igma.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for IGA Mass. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for IGA Mass igma:<br>
```
igma.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this IGA Mass. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for IGA Mass igma:<br>
```
var xrefs = igma.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the IGA mass data in keyword format. Note that this contains the keyword header and the keyword cards. See also [IGAMass.Keyword()](primer-igamass-class.md#IGAMass::Keyword) and [IGAMass.KeywordCards()](primer-igamass-class.md#IGAMass::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for IGA mass igma in keyword format<br>
```
var s = igma.toString();
```
 |
| --- |

* * *