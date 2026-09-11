# IGA1DBrep class

The IGA1DBrep class gives you access to IGA 1d brep cards in PRIMER. [More...](primer-iga1dbrep-class.md#IGA1DBrep_details)

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

* [Create](primer-iga1dbrep-class.md#IGA1DBrep::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [First](primer-iga1dbrep-class.md#IGA1DBrep::First)(Model*[[Model](primer-model-class.md)]*)
* [FirstFreeLabel](primer-iga1dbrep-class.md#IGA1DBrep::FirstFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [FlagAll](primer-iga1dbrep-class.md#IGA1DBrep::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-iga1dbrep-class.md#IGA1DBrep::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-iga1dbrep-class.md#IGA1DBrep::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-iga1dbrep-class.md#IGA1DBrep::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-iga1dbrep-class.md#IGA1DBrep::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-iga1dbrep-class.md#IGA1DBrep::Last)(Model*[[Model](primer-model-class.md)]*)
* [LastFreeLabel](primer-iga1dbrep-class.md#IGA1DBrep::LastFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [NextFreeLabel](primer-iga1dbrep-class.md#IGA1DBrep::NextFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [RenumberAll](primer-iga1dbrep-class.md#IGA1DBrep::RenumberAll)(Model*[[Model](primer-model-class.md)]*, start*[integer]*)
* [RenumberFlagged](primer-iga1dbrep-class.md#IGA1DBrep::RenumberFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*)
* [Select](primer-iga1dbrep-class.md#IGA1DBrep::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-iga1dbrep-class.md#IGA1DBrep::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-iga1dbrep-class.md#IGA1DBrep::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnflagAll](primer-iga1dbrep-class.md#IGA1DBrep::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-iga1dbrep-class.md#IGA1DBrep::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-iga1dbrep-class.md#IGA1DBrep::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-iga1dbrep-class.md#IGA1DBrep::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Browse](primer-iga1dbrep-class.md#IGA1DBrep::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-iga1dbrep-class.md#IGA1DBrep::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-iga1dbrep-class.md#IGA1DBrep::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-iga1dbrep-class.md#IGA1DBrep::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-iga1dbrep-class.md#IGA1DBrep::Edit)(modal (optional)*[boolean]*)
* [Error](primer-iga1dbrep-class.md#IGA1DBrep::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-iga1dbrep-class.md#IGA1DBrep::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-iga1dbrep-class.md#IGA1DBrep::GetComments)()
* [GetData](primer-iga1dbrep-class.md#IGA1DBrep::GetData)(index*[integer]*)
* [GetParameter](primer-iga1dbrep-class.md#IGA1DBrep::GetParameter)(prop*[string]*)
* [Keyword](primer-iga1dbrep-class.md#IGA1DBrep::Keyword)()
* [KeywordCards](primer-iga1dbrep-class.md#IGA1DBrep::KeywordCards)()
* [Next](primer-iga1dbrep-class.md#IGA1DBrep::Next)()
* [Previous](primer-iga1dbrep-class.md#IGA1DBrep::Previous)()
* [RemoveData](primer-iga1dbrep-class.md#IGA1DBrep::RemoveData)(index*[integer]*)
* [SetData](primer-iga1dbrep-class.md#IGA1DBrep::SetData)(index*[integer]*, eid*[integer]*)
* [SetFlag](primer-iga1dbrep-class.md#IGA1DBrep::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Sketch](primer-iga1dbrep-class.md#IGA1DBrep::Sketch)(redraw (optional)*[boolean]*)
* [Unsketch](primer-iga1dbrep-class.md#IGA1DBrep::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-iga1dbrep-class.md#IGA1DBrep::ViewParameters)()
* [Warning](primer-iga1dbrep-class.md#IGA1DBrep::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-iga1dbrep-class.md#IGA1DBrep::Xrefs)()
* [toString](primer-iga1dbrep-class.md#IGA1DBrep::toString)()

## IGA1DBrep properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| brid | integer | [IGA1DBrep](primer-iga1dbrep-class.md) number. Also see the [label](primer-iga1dbrep-class.md#label) property which is an alternative name for this. |
| entries (read only) | integer | Number of Parametric Edge IDs (eid) added in IGA\_1D\_BREP. Can be used as index to add a new entry. |
| exists (read only) | logical | true if IGA 1D Brep exists, false if referred to but not defined. |
| include | integer | The [Include](primer-include-class.md) file number that the IGA 1D Brep is in. |
| label | integer | [IGA1DBrep](primer-iga1dbrep-class.md) number. Also see the [brid](primer-iga1dbrep-class.md#brid) property which is an alternative name for this. |
| model (read only) | integer | The [Model](primer-model-class.md) number that the IGA 1D Brep is in. |

| Detailed Description<br>The IGA1DBrep class allows you to create, modify, edit and manipulate IGA 1d brep cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new IGA1DBrep(Model*[[Model](primer-model-class.md)]*, details*[object]*)

Description<br>Create a new [IGA1DBrep](primer-iga1dbrep-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that IGA 1d brep will be created in

* details (object)

Details for creating the [IGA1DBrep](primer-iga1dbrep-class.md) 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| brid | integer | ID of the IGA 1D Brep. |

| Returns
<br>[IGA1DBrep](primer-iga1dbrep-class.md) object<br>
Return type
<br>IGA1DBrep |
| --- |

| Example
<br>To create a new IGA 1d brep in model m of id 10:<br>
```
var ig1b = new IGA1DBrep(m, {brid:10});
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a IGA 1D Brep. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the IGA 1D Brep

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the IGA 1D Brep ig1b:<br>
```
ig1b.AssociateComment(c);
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
<br>To Browse IGA 1D Brep ig1b:<br>
```
ig1b.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the IGA 1D Brep. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the IGA 1D Brep

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for IGA 1D Brep ig1b:<br>
```
ig1b.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the IGA 1D Brep. The target include of the copied IGA 1D Brep can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>IGA1DBrep object<br>
Return type
<br>IGA1DBrep |
| --- |

| Example
<br>To copy IGA 1D Brep ig1b into IGA 1D Brep z:<br>
```
var z = ig1b.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a IGA 1D Brep |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the IGA 1D Brep will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>IGA1DBrep object (or null if not made).<br>
Return type
<br>IGA1DBrep |
| --- |

| Example
<br>To start creating a IGA 1D Brep in model m:<br>
```
var ig1b = IGA1DBrep.Create(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a IGA 1D Brep. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the IGA 1D Brep

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the IGA 1D Brep ig1b:<br>
```
ig1b.DetachComment(c);
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
<br>To Edit IGA 1D Brep ig1b:<br>
```
ig1b.Edit();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for IGA 1D Brep. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for IGA 1D Brep ig1b:<br>
```
ig1b.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first IGA 1D Brep in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first IGA 1D Brep in

| Returns
<br>IGA1DBrep object (or null if there are no IGA 1D Breps in the model).<br>
Return type
<br>IGA1DBrep |
| --- |

| Example
<br>To get the first IGA 1D Brep in model m:<br>
```
var ig1b = IGA1DBrep.First(m);
```
 |
| --- |

* * *

| FirstFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the first free IGA 1D Brep label in the model. Also see [IGA1DBrep.LastFreeLabel()](primer-iga1dbrep-class.md#IGA1DBrep::LastFreeLabel), [IGA1DBrep.NextFreeLabel()](primer-iga1dbrep-class.md#IGA1DBrep::NextFreeLabel) and [Model.FirstFreeItemLabel()](primer-model-class.md#Model::FirstFreeItemLabel). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first free IGA 1D Brep label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *First free in layer* in editing panels). If omitted the whole model will be used (Equivalent to *First free* in editing panels).

| Returns
<br>IGA1DBrep label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the first free IGA 1D Brep label in model m:<br>
```
var label = IGA1DBrep.FirstFreeLabel(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the IGA 1D Breps in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all IGA 1D Breps will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the IGA 1D Breps

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the IGA 1D Breps with flag f in model m:<br>
```
IGA1DBrep.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the IGA 1D Brep is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the IGA 1D Brep

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if IGA 1D Brep ig1b has flag f set on it:<br>
```
if (ig1b.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each IGA 1D Brep in the model.<br> **Note that ForEach has been designed to make looping over IGA 1D Breps as fast as possible and so has some limitations. Firstly, a single temporary IGA1DBrep object is created and on each function call it is updated with the current IGA 1D Brep data. This means that you should not try to store the IGA1DBrep object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new IGA 1D Breps inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all IGA 1D Breps are in

* func (function)
 
Function to call for each IGA 1D Brep

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the IGA 1D Breps in model m:<br>
```
IGA1DBrep.ForEach(m, test);
function test(ig1b)
{
// ig1b is IGA1DBrep object
}
```
<br><br>To call function test for all of the IGA 1D Breps in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
IGA1DBrep.ForEach(m, test, data);
function test(ig1b, extra)
{
// ig1b is IGA1DBrep object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of IGA1DBrep objects or properties for all of the IGA 1D Breps in a model in PRIMER. If the optional property argument is not given then an array of IGA1DBrep objects is returned. If the property argument is given, that property value for each IGA 1D Brep is returned in the array instead of a IGA1DBrep object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get IGA 1D Breps from

* property (optional) (string)
 
Name for property to get for all IGA 1D Breps in the model

| Returns
<br>Array of IGA1DBrep objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of IGA1DBrep objects for all of the IGA 1D Breps in model m:<br>
```
var a = IGA1DBrep.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each IGA 1D Brep in model m:<br>
```
var a = IGA1DBrep.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a IGA 1D Brep. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the IGA 1D Brep ig1b:<br>
```
var comm_array = ig1b.GetComments();
```
 |
| --- |

* * *

| GetData(index*[integer]*)

Description<br>Returns the data for eid in \*IGA\_1D\_BREP. |
| --- |

#### Arguments

* index (integer)
 
Index you want the data for. **Note that indices start at 0**.

| Returns
<br>The ID of parametric edge, \*IGA\_EDGE\_UVW.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the 3rd data entry in IGA 1d brep ig1b:<br>
```
var data = ig1b.GetData(2);
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of IGA1DBrep objects for all of the flagged IGA 1D Breps in a model in PRIMER If the optional property argument is not given then an array of IGA1DBrep objects is returned. If the property argument is given, then that property value for each IGA 1D Brep is returned in the array instead of a IGA1DBrep object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get IGA 1D Breps from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the IGA 1D Breps that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged IGA 1D Breps in the model

| Returns
<br>Array of IGA1DBrep objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of IGA1DBrep objects for all of the IGA 1D Breps in model m flagged with f:<br>
```
var ig1b = IGA1DBrep.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the IGA 1D Breps in model m flagged with f:<br>
```
var a = IGA1DBrep.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the IGA1DBrep object for a IGA 1D Brep ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the IGA 1D Brep in

* number (integer)
 
number of the IGA 1D Brep you want the IGA1DBrep object for

| Returns
<br>IGA1DBrep object (or null if IGA 1D Brep does not exist).<br>
Return type
<br>IGA1DBrep |
| --- |

| Example
<br>To get the IGA1DBrep object for IGA 1D Brep 100 in model m<br>
```
var ig1b = IGA1DBrep.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a IGA1DBrep property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [IGA1DBrep.ViewParameters()](primer-iga1dbrep-class.md#IGA1DBrep::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
IGA 1D Brep property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if IGA1DBrep property ig1b.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (ig1b.GetParameter(ig1b.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if IGA1DBrep property ig1b.example is a parameter by using the GetParameter method:<br>
```
if (ig1b.ViewParameters().GetParameter(ig1b.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this IGA 1d brep (\*IGA\_1D\_BREP). **Note that a carriage return is not added**. See also [IGA1DBrep.KeywordCards()](primer-iga1dbrep-class.md#IGA1DBrep::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for IGA 1d brep ig1b:<br>
```
var key = ig1b.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the IGA 1d brep. **Note that a carriage return is not added**. See also [IGA1DBrep.Keyword()](primer-iga1dbrep-class.md#IGA1DBrep::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for IGA 1d brep ig1b:<br>
```
var cards = ig1b.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last IGA 1D Brep in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last IGA 1D Brep in

| Returns
<br>IGA1DBrep object (or null if there are no IGA 1D Breps in the model).<br>
Return type
<br>IGA1DBrep |
| --- |

| Example
<br>To get the last IGA 1D Brep in model m:<br>
```
var ig1b = IGA1DBrep.Last(m);
```
 |
| --- |

* * *

| LastFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the last free IGA 1D Brep label in the model. Also see [IGA1DBrep.FirstFreeLabel()](primer-iga1dbrep-class.md#IGA1DBrep::FirstFreeLabel), [IGA1DBrep.NextFreeLabel()](primer-iga1dbrep-class.md#IGA1DBrep::NextFreeLabel) and see [Model.LastFreeItemLabel()](primer-model-class.md#Model::LastFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last free IGA 1D Brep label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest free in layer* in editing panels). If omitted the whole model will be used.

| Returns
<br>IGA1DBrep label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the last free IGA 1D Brep label in model m:<br>
```
var label = IGA1DBrep.LastFreeLabel(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next IGA 1D Brep in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>IGA1DBrep object (or null if there are no more IGA 1D Breps in the model).<br>
Return type
<br>IGA1DBrep |
| --- |

| Example
<br>To get the IGA 1D Brep in model m after IGA 1D Brep ig1b:<br>
```
var ig1b = ig1b.Next();
```
 |
| --- |

* * *

| NextFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the next free (highest+1) IGA 1D Brep label in the model. Also see [IGA1DBrep.FirstFreeLabel()](primer-iga1dbrep-class.md#IGA1DBrep::FirstFreeLabel), [IGA1DBrep.LastFreeLabel()](primer-iga1dbrep-class.md#IGA1DBrep::LastFreeLabel) and [Model.NextFreeItemLabel()](primer-model-class.md#Model::NextFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get next free IGA 1D Brep label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest+1 in layer* in editing panels). If omitted the whole model will be used (Equivalent to *Highest+1* in editing panels).

| Returns
<br>IGA1DBrep label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the next free IGA 1D Brep label in model m:<br>
```
var label = IGA1DBrep.NextFreeLabel(m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous IGA 1D Brep in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>IGA1DBrep object (or null if there are no more IGA 1D Breps in the model).<br>
Return type
<br>IGA1DBrep |
| --- |

| Example
<br>To get the IGA 1D Brep in model m before IGA 1D Brep ig1b:<br>
```
var ig1b = ig1b.Previous();
```
 |
| --- |

* * *

| RemoveData(index*[integer]*)

Description<br>Removes eid for an index in \*IGA\_1D\_BREP. |
| --- |

#### Arguments

* index (integer)
 
The index you want to delete eid for. **Note that indices start at 0, not 1**.

| Returns
<br>No return value. |
| --- |

| Example
<br>To delete the eid for the 3rd index for \*IGA\_1D\_BREP in model m:<br>
```
if (ig1b.entries >= 3)
{
    ig1b.RemoveData(2);
}
```
 |
| --- |

* * *

| RenumberAll(Model*[[Model](primer-model-class.md)]*, start*[integer]*) [static]
Description<br>Renumbers all of the IGA 1D Breps in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all IGA 1D Breps will be renumbered in

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the IGA 1D Breps in model m, from 1000000:<br>
```
IGA1DBrep.RenumberAll(m, 1000000);
```
 |
| --- |

* * *

| RenumberFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*) [static]
Description<br>Renumbers all of the flagged IGA 1D Breps in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged IGA 1D Breps will be renumbered in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the IGA 1D Breps that you want to renumber

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the IGA 1D Breps in model m flagged with f, from 1000000:<br>
```
IGA1DBrep.RenumberFlagged(m, f, 1000000);
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select IGA 1D Breps using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting IGA 1D Breps

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only IGA 1D Breps from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only IGA 1D Breps that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any IGA 1D Breps can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of IGA 1D Breps selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select IGA 1D Breps from model m, flagging those selected with flag f, giving the prompt 'Select IGA 1D Breps':<br>
```
IGA1DBrep.Select(f, 'Select IGA 1D Breps', m);
```
<br><br>To select IGA 1D Breps, flagging those selected with flag f but limiting selection to IGA 1D Breps flagged with flag l, giving the prompt 'Select IGA 1D Breps':<br>
```
IGA1DBrep.Select(f, 'Select IGA 1D Breps', l);
```
 |
| --- |

* * *

| SetData(index*[integer]*, eid*[integer]*)

Description<br>Sets eid in \*IGA\_1D\_BREP. |
| --- |

#### Arguments

* index (integer)
 
Index you want to set the eid for. **Note that indices start at 0**.

* eid (integer)
 
The ID of parametric edge.

| Returns
<br>No return value. |
| --- |

| Example
<br>To add an entry to the \*IGA\_1D\_BREP ig1b with id 10 by using "entries" property to get the next available index:<br>
```
var i = ig1b.entries;
ig1b.SetData(i, 10);
```
<br>To change an entry in 3rd field for \*IGA\_1D\_BREP ig1b with id 30:<br>
```
ig1b.SetData(2, 30);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the IGA 1D Brep. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the IGA 1D Brep

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for IGA 1D Brep ig1b:<br>
```
ig1b.SetFlag(f);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the IGA 1D Brep. The IGA 1D Brep will be sketched until you either call [IGA1DBrep.Unsketch()](primer-iga1dbrep-class.md#IGA1DBrep::Unsketch), [IGA1DBrep.UnsketchAll()](primer-iga1dbrep-class.md#IGA1DBrep::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA 1D Brep is sketched. If omitted redraw is true. If you want to sketch several IGA 1D Breps and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch IGA 1D Brep ig1b:<br>
```
ig1b.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged IGA 1D Breps in the model. The IGA 1D Breps will be sketched until you either call [IGA1DBrep.Unsketch()](primer-iga1dbrep-class.md#IGA1DBrep::Unsketch), [IGA1DBrep.UnsketchFlagged()](primer-iga1dbrep-class.md#IGA1DBrep::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged IGA 1D Breps will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the IGA 1D Breps that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA 1D Breps are sketched. If omitted redraw is true. If you want to sketch flagged IGA 1D Breps several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all IGA 1D Breps flagged with flag in model m:<br>
```
IGA1DBrep.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of IGA 1D Breps in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing IGA 1D Breps should be counted. If false or omitted
referenced but undefined IGA 1D Breps will also be included in the total.

| Returns
<br>number of IGA 1D Breps<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of IGA 1D Breps in model m:<br>
```
var total = IGA1DBrep.Total(m);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the IGA 1D Breps in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all IGA 1D Breps will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the IGA 1D Breps

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the IGA 1D Breps in model m:<br>
```
IGA1DBrep.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the IGA 1D Brep. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA 1D Brep is unsketched. If omitted redraw is true. If you want to unsketch several IGA 1D Breps and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch IGA 1D Brep ig1b:<br>
```
ig1b.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all IGA 1D Breps. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all IGA 1D Breps will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA 1D Breps are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all IGA 1D Breps in model m:<br>
```
IGA1DBrep.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged IGA 1D Breps in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all IGA 1D Breps will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the IGA 1D Breps that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA 1D Breps are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all IGA 1D Breps flagged with flag in model m:<br>
```
IGA1DBrep.UnsketchAll(m, flag);
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
<br>[IGA1DBrep](primer-iga1dbrep-class.md) object.<br>
Return type
<br>IGA1DBrep |
| --- |

| Example
<br>To check if IGA1DBrep property ig1b.example is a parameter by using the [IGA1DBrep.GetParameter()](primer-iga1dbrep-class.md#IGA1DBrep::GetParameter) method:<br>
```
if (ig1b.ViewParameters().GetParameter(ig1b.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for IGA 1D Brep. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for IGA 1D Brep ig1b:<br>
```
ig1b.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this IGA 1D Brep. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for IGA 1D Brep ig1b:<br>
```
var xrefs = ig1b.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the IGA 1d brep data in keyword format. Note that this contains the keyword header and the keyword cards. See also [IGA1DBrep.Keyword()](primer-iga1dbrep-class.md#IGA1DBrep::Keyword) and [IGA1DBrep.KeywordCards()](primer-iga1dbrep-class.md#IGA1DBrep::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for IGA 1d brep ig1b in keyword format<br>
```
var s = ig1b.toString();
```
 |
| --- |

* * *