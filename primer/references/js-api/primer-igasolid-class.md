# IGASolid class

The IGASolid class gives you access to IGA solid cards in PRIMER. [More...](primer-igasolid-class.md#IGASolid_details)

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

* [BlankAll](primer-igasolid-class.md#IGASolid::BlankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [BlankFlagged](primer-igasolid-class.md#IGASolid::BlankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Create](primer-igasolid-class.md#IGASolid::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [First](primer-igasolid-class.md#IGASolid::First)(Model*[[Model](primer-model-class.md)]*)
* [FlagAll](primer-igasolid-class.md#IGASolid::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-igasolid-class.md#IGASolid::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-igasolid-class.md#IGASolid::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-igasolid-class.md#IGASolid::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-igasolid-class.md#IGASolid::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-igasolid-class.md#IGASolid::Last)(Model*[[Model](primer-model-class.md)]*)
* [Pick](primer-igasolid-class.md#IGASolid::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [RedrawAll](primer-igasolid-class.md#IGASolid::RedrawAll)(Model*[[Model](primer-model-class.md)]*)
* [Select](primer-igasolid-class.md#IGASolid::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-igasolid-class.md#IGASolid::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-igasolid-class.md#IGASolid::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnblankAll](primer-igasolid-class.md#IGASolid::UnblankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnblankFlagged](primer-igasolid-class.md#IGASolid::UnblankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [UnflagAll](primer-igasolid-class.md#IGASolid::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-igasolid-class.md#IGASolid::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-igasolid-class.md#IGASolid::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-igasolid-class.md#IGASolid::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Blank](primer-igasolid-class.md#IGASolid::Blank)()
* [Blanked](primer-igasolid-class.md#IGASolid::Blanked)()
* [Browse](primer-igasolid-class.md#IGASolid::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-igasolid-class.md#IGASolid::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-igasolid-class.md#IGASolid::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-igasolid-class.md#IGASolid::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-igasolid-class.md#IGASolid::Edit)(modal (optional)*[boolean]*)
* [Error](primer-igasolid-class.md#IGASolid::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-igasolid-class.md#IGASolid::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-igasolid-class.md#IGASolid::GetComments)()
* [GetParameter](primer-igasolid-class.md#IGASolid::GetParameter)(prop*[string]*)
* [Keyword](primer-igasolid-class.md#IGASolid::Keyword)()
* [KeywordCards](primer-igasolid-class.md#IGASolid::KeywordCards)()
* [Next](primer-igasolid-class.md#IGASolid::Next)()
* [Previous](primer-igasolid-class.md#IGASolid::Previous)()
* [SetFlag](primer-igasolid-class.md#IGASolid::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Sketch](primer-igasolid-class.md#IGASolid::Sketch)(redraw (optional)*[boolean]*)
* [Unblank](primer-igasolid-class.md#IGASolid::Unblank)()
* [Unsketch](primer-igasolid-class.md#IGASolid::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-igasolid-class.md#IGASolid::ViewParameters)()
* [Warning](primer-igasolid-class.md#IGASolid::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-igasolid-class.md#IGASolid::Xrefs)()
* [toString](primer-igasolid-class.md#IGASolid::toString)()

## IGASolid properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists (read only) | logical | true if IGA Solid exists, false if referred to but not defined. |
| id (read only) | integer | ID of the IGA solid. Only used in PRIMER. |
| include | integer | The [Include](primer-include-class.md) file number that the IGA Solid is in. |
| model (read only) | integer | The [Model](primer-model-class.md) number that the IGA Solid is in. |
| nisr | real | Interpolation elements in the local r-direction. |
| niss | real | Interpolation elements in the local s-direction. |
| nist | real | Interpolation elements in the local t-direction. |
| pid | integer | [Part](primer-part-class.md) ID. |
| rid | integer | Solid refinement ID. |
| sid | integer | Isogeometric Solid (patch) ID. |

| Detailed Description<br>The IGASolid class allows you to create, modify, edit and manipulate IGA solid cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new IGASolid(Model*[[Model](primer-model-class.md)]*, details*[object]*)

Description<br>Create a new [IGASolid](primer-igasolid-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that IGA solid will be created in

* details (object)

Details for creating the [IGASolid](primer-igasolid-class.md) 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| nisr (optional) | real | Interpolation elements in the local r-direction. |
| niss (optional) | real | Interpolation elements in the local s-direction. |
| nist (optional) | real | Interpolation elements in the local t-direction. |
| pid | integer | [Part](primer-part-class.md) ID. |
| rid (optional) | integer | Solid refinement ID. |
| sid | integer | Isogeometric Solid (patch) ID. |

| Returns
<br>[IGASolid](primer-igasolid-class.md) object<br>
Return type
<br>IGASolid |
| --- |

| Example
<br>To create a new IGA solid in model m using sid 10, part id 100:<br>
```
var igso = new IGASolid(m, {sid: 10, pid: 100});
```
<br>To create a new IGA solid in model m using sid 20, part id 200 with nisr as 3.3, niss as 4.4, nist as 5.5 and rid as 6:<br>
```
var igso = new IGASolid(m, {sid: 20, pid: 200, nisr: 3.3, niss: 4.4, nist: 5.5, rid: 6});
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a IGA Solid. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the IGA Solid

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the IGA Solid igso:<br>
```
igso.AssociateComment(c);
```
 |
| --- |

* * *

| Blank()

Description<br>Blanks the IGA Solid |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To blank IGA Solid igso:<br>
```
igso.Blank();
```
 |
| --- |

* * *

| BlankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the IGA Solids in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all IGA Solids will be blanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the IGA Solids in model m:<br>
```
IGASolid.BlankAll(m);
```
 |
| --- |

* * *

| BlankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the flagged IGA Solids in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged IGA Solids will be blanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the IGA Solids that you want to blank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the IGA Solids in model m flagged with f:<br>
```
IGASolid.BlankFlagged(m, f);
```
 |
| --- |

* * *

| Blanked()

Description<br>Checks if the IGA Solid is blanked or not. |
| --- |

#### Arguments

No arguments

| Returns
<br>true if blanked, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if IGA Solid igso is blanked:<br>
```
if (igso.Blanked() ) do_something...
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
<br>To Browse IGA Solid igso:<br>
```
igso.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the IGA Solid. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the IGA Solid

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for IGA Solid igso:<br>
```
igso.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the IGA Solid. The target include of the copied IGA Solid can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>IGASolid object<br>
Return type
<br>IGASolid |
| --- |

| Example
<br>To copy IGA Solid igso into IGA Solid z:<br>
```
var z = igso.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a IGA Solid |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the IGA Solid will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>IGASolid object (or null if not made).<br>
Return type
<br>IGASolid |
| --- |

| Example
<br>To start creating a IGA Solid in model m:<br>
```
var igso = IGASolid.Create(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a IGA Solid. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the IGA Solid

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the IGA Solid igso:<br>
```
igso.DetachComment(c);
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
<br>To Edit IGA Solid igso:<br>
```
igso.Edit();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for IGA Solid. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for IGA Solid igso:<br>
```
igso.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first IGA Solid in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first IGA Solid in

| Returns
<br>IGASolid object (or null if there are no IGA Solids in the model).<br>
Return type
<br>IGASolid |
| --- |

| Example
<br>To get the first IGA Solid in model m:<br>
```
var igso = IGASolid.First(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the IGA Solids in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all IGA Solids will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the IGA Solids

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the IGA Solids with flag f in model m:<br>
```
IGASolid.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the IGA Solid is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the IGA Solid

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if IGA Solid igso has flag f set on it:<br>
```
if (igso.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each IGA Solid in the model.<br> **Note that ForEach has been designed to make looping over IGA Solids as fast as possible and so has some limitations. Firstly, a single temporary IGASolid object is created and on each function call it is updated with the current IGA Solid data. This means that you should not try to store the IGASolid object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new IGA Solids inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all IGA Solids are in

* func (function)
 
Function to call for each IGA Solid

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the IGA Solids in model m:<br>
```
IGASolid.ForEach(m, test);
function test(igso)
{
// igso is IGASolid object
}
```
<br><br>To call function test for all of the IGA Solids in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
IGASolid.ForEach(m, test, data);
function test(igso, extra)
{
// igso is IGASolid object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of IGASolid objects or properties for all of the IGA Solids in a model in PRIMER. If the optional property argument is not given then an array of IGASolid objects is returned. If the property argument is given, that property value for each IGA Solid is returned in the array instead of a IGASolid object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get IGA Solids from

* property (optional) (string)
 
Name for property to get for all IGA Solids in the model

| Returns
<br>Array of IGASolid objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of IGASolid objects for all of the IGA Solids in model m:<br>
```
var a = IGASolid.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each IGA Solid in model m:<br>
```
var a = IGASolid.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a IGA Solid. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the IGA Solid igso:<br>
```
var comm_array = igso.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of IGASolid objects for all of the flagged IGA Solids in a model in PRIMER If the optional property argument is not given then an array of IGASolid objects is returned. If the property argument is given, then that property value for each IGA Solid is returned in the array instead of a IGASolid object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get IGA Solids from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the IGA Solids that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged IGA Solids in the model

| Returns
<br>Array of IGASolid objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of IGASolid objects for all of the IGA Solids in model m flagged with f:<br>
```
var igso = IGASolid.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the IGA Solids in model m flagged with f:<br>
```
var a = IGASolid.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the IGASolid object for a IGA Solid ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the IGA Solid in

* number (integer)
 
number of the IGA Solid you want the IGASolid object for

| Returns
<br>IGASolid object (or null if IGA Solid does not exist).<br>
Return type
<br>IGASolid |
| --- |

| Example
<br>To get the IGASolid object for IGA Solid 100 in model m<br>
```
var igso = IGASolid.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a IGASolid property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [IGASolid.ViewParameters()](primer-igasolid-class.md#IGASolid::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
IGA Solid property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if IGASolid property igso.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (igso.GetParameter(igso.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if IGASolid property igso.example is a parameter by using the GetParameter method:<br>
```
if (igso.ViewParameters().GetParameter(igso.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this IGA solid (\*IGA\_SOLID). **Note that a carriage return is not added**. See also [IGASolid.KeywordCards()](primer-igasolid-class.md#IGASolid::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for IGA solid igs:<br>
```
var key = igs.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the IGA solid. **Note that a carriage return is not added**. See also [IGASolid.Keyword()](primer-igasolid-class.md#IGASolid::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for IGA solid igs:<br>
```
var cards = igs.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last IGA Solid in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last IGA Solid in

| Returns
<br>IGASolid object (or null if there are no IGA Solids in the model).<br>
Return type
<br>IGASolid |
| --- |

| Example
<br>To get the last IGA Solid in model m:<br>
```
var igso = IGASolid.Last(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next IGA Solid in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>IGASolid object (or null if there are no more IGA Solids in the model).<br>
Return type
<br>IGASolid |
| --- |

| Example
<br>To get the IGA Solid in model m after IGA Solid igso:<br>
```
var igso = igso.Next();
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a IGA Solid. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only IGA Solids from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only IGA Solids that are flagged with *limit* can be selected. If omitted, or null, any IGA Solids from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[IGASolid](primer-igasolid-class.md) object (or null if not picked)<br>
Return type
<br>IGASolid |
| --- |

| Example
<br>To pick a IGA Solid from model m giving the prompt 'Pick IGA Solid from screen':<br>
```
var igso = IGASolid.Pick('Pick IGA Solid from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous IGA Solid in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>IGASolid object (or null if there are no more IGA Solids in the model).<br>
Return type
<br>IGASolid |
| --- |

| Example
<br>To get the IGA Solid in model m before IGA Solid igso:<br>
```
var igso = igso.Previous();
```
 |
| --- |

* * *

| RedrawAll(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Redraws all \*IGA\_SOLIDs whose graphics are out of date in a specified model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to redraw IGA SOLIDs in

| Returns
<br>No return value |
| --- |

| Example
<br>Redraw all out of date \*IGA\_SOLIDs following a change to an \*IGA\_SOLID or related IGA entity in model m1:<br>
```
IGASolid.RedrawAll(m1);
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select IGA Solids using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting IGA Solids

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only IGA Solids from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only IGA Solids that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any IGA Solids can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of IGA Solids selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select IGA Solids from model m, flagging those selected with flag f, giving the prompt 'Select IGA Solids':<br>
```
IGASolid.Select(f, 'Select IGA Solids', m);
```
<br><br>To select IGA Solids, flagging those selected with flag f but limiting selection to IGA Solids flagged with flag l, giving the prompt 'Select IGA Solids':<br>
```
IGASolid.Select(f, 'Select IGA Solids', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the IGA Solid. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the IGA Solid

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for IGA Solid igso:<br>
```
igso.SetFlag(f);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the IGA Solid. The IGA Solid will be sketched until you either call [IGASolid.Unsketch()](primer-igasolid-class.md#IGASolid::Unsketch), [IGASolid.UnsketchAll()](primer-igasolid-class.md#IGASolid::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA Solid is sketched. If omitted redraw is true. If you want to sketch several IGA Solids and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch IGA Solid igso:<br>
```
igso.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged IGA Solids in the model. The IGA Solids will be sketched until you either call [IGASolid.Unsketch()](primer-igasolid-class.md#IGASolid::Unsketch), [IGASolid.UnsketchFlagged()](primer-igasolid-class.md#IGASolid::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged IGA Solids will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the IGA Solids that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA Solids are sketched. If omitted redraw is true. If you want to sketch flagged IGA Solids several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all IGA Solids flagged with flag in model m:<br>
```
IGASolid.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of IGA Solids in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing IGA Solids should be counted. If false or omitted
referenced but undefined IGA Solids will also be included in the total.

| Returns
<br>number of IGA Solids<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of IGA Solids in model m:<br>
```
var total = IGASolid.Total(m);
```
 |
| --- |

* * *

| Unblank()

Description<br>Unblanks the IGA Solid |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank IGA Solid igso:<br>
```
igso.Unblank();
```
 |
| --- |

* * *

| UnblankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the IGA Solids in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all IGA Solids will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the IGA Solids in model m:<br>
```
IGASolid.UnblankAll(m);
```
 |
| --- |

* * *

| UnblankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the flagged IGA Solids in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the flagged IGA Solids will be unblanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the IGA Solids that you want to unblank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the IGA Solids in model m flagged with f:<br>
```
IGASolid.UnblankFlagged(m, f);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the IGA Solids in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all IGA Solids will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the IGA Solids

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the IGA Solids in model m:<br>
```
IGASolid.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the IGA Solid. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA Solid is unsketched. If omitted redraw is true. If you want to unsketch several IGA Solids and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch IGA Solid igso:<br>
```
igso.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all IGA Solids. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all IGA Solids will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA Solids are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all IGA Solids in model m:<br>
```
IGASolid.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged IGA Solids in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all IGA Solids will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the IGA Solids that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA Solids are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all IGA Solids flagged with flag in model m:<br>
```
IGASolid.UnsketchAll(m, flag);
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
<br>[IGASolid](primer-igasolid-class.md) object.<br>
Return type
<br>IGASolid |
| --- |

| Example
<br>To check if IGASolid property igso.example is a parameter by using the [IGASolid.GetParameter()](primer-igasolid-class.md#IGASolid::GetParameter) method:<br>
```
if (igso.ViewParameters().GetParameter(igso.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for IGA Solid. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for IGA Solid igso:<br>
```
igso.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this IGA Solid. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for IGA Solid igso:<br>
```
var xrefs = igso.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the IGA solid data in keyword format. Note that this contains the keyword header and the keyword cards. See also [IGASolid.Keyword()](primer-igasolid-class.md#IGASolid::Keyword) and [IGASolid.KeywordCards()](primer-igasolid-class.md#IGASolid::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for IGA solid igs in keyword format<br>
```
var s = igs.toString();
```
 |
| --- |

* * *