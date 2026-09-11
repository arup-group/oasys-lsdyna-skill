# Linear class

The Linear class gives you access to define \*CONSTRAINED\_LINEAR cards in PRIMER. [More...](primer-linear-class.md#Linear_details)

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

* [BlankAll](primer-linear-class.md#Linear::BlankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [BlankFlagged](primer-linear-class.md#Linear::BlankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Create](primer-linear-class.md#Linear::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [First](primer-linear-class.md#Linear::First)(Model*[[Model](primer-model-class.md)]*)
* [FirstFreeLabel](primer-linear-class.md#Linear::FirstFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [FlagAll](primer-linear-class.md#Linear::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-linear-class.md#Linear::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-linear-class.md#Linear::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-linear-class.md#Linear::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-linear-class.md#Linear::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-linear-class.md#Linear::Last)(Model*[[Model](primer-model-class.md)]*)
* [LastFreeLabel](primer-linear-class.md#Linear::LastFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [NextFreeLabel](primer-linear-class.md#Linear::NextFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [Pick](primer-linear-class.md#Linear::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [RenumberAll](primer-linear-class.md#Linear::RenumberAll)(Model*[[Model](primer-model-class.md)]*, start*[integer]*)
* [RenumberFlagged](primer-linear-class.md#Linear::RenumberFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*)
* [Select](primer-linear-class.md#Linear::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-linear-class.md#Linear::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-linear-class.md#Linear::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnblankAll](primer-linear-class.md#Linear::UnblankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnblankFlagged](primer-linear-class.md#Linear::UnblankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [UnflagAll](primer-linear-class.md#Linear::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-linear-class.md#Linear::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-linear-class.md#Linear::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AddRowData](primer-linear-class.md#Linear::AddRowData)(nid*[integer]*, dof*[integer]*, coeff*[real]*, cid (optional)*[integer]*)
* [AssociateComment](primer-linear-class.md#Linear::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Blank](primer-linear-class.md#Linear::Blank)()
* [Blanked](primer-linear-class.md#Linear::Blanked)()
* [Browse](primer-linear-class.md#Linear::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-linear-class.md#Linear::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-linear-class.md#Linear::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-linear-class.md#Linear::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-linear-class.md#Linear::Edit)(modal (optional)*[boolean]*)
* [Error](primer-linear-class.md#Linear::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-linear-class.md#Linear::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-linear-class.md#Linear::GetComments)()
* [GetParameter](primer-linear-class.md#Linear::GetParameter)(prop*[string]*)
* [GetRowData](primer-linear-class.md#Linear::GetRowData)(row\_index*[Integer]*)
* [Keyword](primer-linear-class.md#Linear::Keyword)()
* [KeywordCards](primer-linear-class.md#Linear::KeywordCards)()
* [Next](primer-linear-class.md#Linear::Next)()
* [Previous](primer-linear-class.md#Linear::Previous)()
* [RemoveRowData](primer-linear-class.md#Linear::RemoveRowData)(row\_index*[Integer]*)
* [SetFlag](primer-linear-class.md#Linear::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [SetRowData](primer-linear-class.md#Linear::SetRowData)(row\_index*[Integer]*, nid*[integer]*, dof*[integer]*, coeff*[real]*, cid (optional)*[integer]*)
* [Sketch](primer-linear-class.md#Linear::Sketch)(redraw (optional)*[boolean]*)
* [Unblank](primer-linear-class.md#Linear::Unblank)()
* [Unsketch](primer-linear-class.md#Linear::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-linear-class.md#Linear::ViewParameters)()
* [Warning](primer-linear-class.md#Linear::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-linear-class.md#Linear::Xrefs)()
* [toString](primer-linear-class.md#Linear::toString)()

## Linear constants

| **Name** | **Description** |
| --- | --- |
| Linear.GLOBAL | CNST is \*CONSTRAINED\_LINEAR\_GLOBAL. |
| Linear.LOCAL | CNST is \*CONSTRAINED\_LINEAR\_LOCAL. |

## Linear properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists (read only) | logical | true if constrained linear exists, false if referred to but not defined. |
| format | constant | The Constrained Linear option. Can be [Linear.GLOBAL](primer-linear-class.md#Linear.GLOBAL) or [Linear.LOCAL](primer-linear-class.md#Linear.LOCAL). |
| include | integer | The [Include](primer-include-class.md) file number that the constrained linear is in. |
| lcid | integer | [Linear](primer-linear-class.md) label |
| model (read only) | integer | The [Model](primer-model-class.md) number that the constrained linear is in. |
| total (read only) | integer | Number of degree-of-freedom cards. |

| Detailed Description<br>The Linear class allows you to create, modify, edit and manipulate \*CONSTRAINED\_LINEAR cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new Linear(Model*[[Model](primer-model-class.md)]*, format*[constant]*, lcid*[integer]*, nid*[integer]*, dof*[integer]*, coeff*[real]*, cid (optional)*[integer]*)

Description<br>Create a new [Linear](primer-linear-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that Linear will be created in

* format (constant)
 
Specify the type of constrained linear. Can be [Linear.GLOBAL](primer-linear-class.md#Linear.GLOBAL) or [Linear.LOCAL](primer-linear-class.md#Linear.LOCAL))

* lcid (integer)
 
[Linear](primer-linear-class.md) label

* nid (integer)
 
[Node](primer-node-class.md) id.

* dof (integer)
 
Degrees-of-Freedom.

* coeff (real)
 
Non-zero coefficient.

* cid (optional) (integer)
 
[Coordinate System](primer-coordinatesystem-class.md) ID if format is [Linear.LOCAL](primer-linear-class.md#Linear.LOCAL). The default value is 0.

| Returns
<br>[Linear](primer-linear-class.md) object<br>
Return type
<br>Linear |
| --- |

| Example
<br>To create a new constrained linear in model m of type LOCAL with lcid 1, nid 1, dof 3, coeff 0.5 and cid 2<br>
```
var c_l = new Linear(m,Linear.LOCAL,1,1,3,0.5,2);
```
 |
| --- |

| Details of functions 
AddRowData(nid*[integer]*, dof*[integer]*, coeff*[real]*, cid (optional)*[integer]*)

Description<br>Used to add additional independent card 2 to the keyword. Adds this data to the end of the selected \*CONSTRAINED\_LINEAR |
| --- |

#### Arguments

* nid (integer)
 
[Node](primer-node-class.md) id.

* dof (integer)
 
Degrees-of-Freedom.

* coeff (real)
 
Non-zero coefficient.

* cid (optional) (integer)
 
[Coordinate System](primer-coordinatesystem-class.md) ID if format is [Linear.LOCAL](primer-linear-class.md#Linear.LOCAL). The default value is 0.

| Returns
<br>No return value |
| --- |

| Example
<br>To add NID 10 to the keyword c\_l with dof 4, coeff 1.3, cid 2:<br>
```
c_l.AddRowData(10,4,1.3,2);
```
 |
| --- |

* * *

| AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a constrained linear. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the constrained linear

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the constrained linear c\_l:<br>
```
c_l.AssociateComment(c);
```
 |
| --- |

* * *

| Blank()

Description<br>Blanks the constrained linear |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To blank constrained linear c\_l:<br>
```
c_l.Blank();
```
 |
| --- |

* * *

| BlankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the constrained linears in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all constrained linears will be blanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the constrained linears in model m:<br>
```
Linear.BlankAll(m);
```
 |
| --- |

* * *

| BlankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the flagged constrained linears in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged constrained linears will be blanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the constrained linears that you want to blank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the constrained linears in model m flagged with f:<br>
```
Linear.BlankFlagged(m, f);
```
 |
| --- |

* * *

| Blanked()

Description<br>Checks if the constrained linear is blanked or not. |
| --- |

#### Arguments

No arguments

| Returns
<br>true if blanked, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if constrained linear c\_l is blanked:<br>
```
if (c_l.Blanked() ) do_something...
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
<br>To Browse constrained linear c\_l:<br>
```
c_l.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the constrained linear. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the constrained linear

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for constrained linear c\_l:<br>
```
c_l.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the constrained linear. The target include of the copied constrained linear can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>Linear object<br>
Return type
<br>Linear |
| --- |

| Example
<br>To copy constrained linear c\_l into constrained linear z:<br>
```
var z = c_l.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a constrained linear |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the constrained linear will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>Linear object (or null if not made).<br>
Return type
<br>Linear |
| --- |

| Example
<br>To start creating a constrained linear in model m:<br>
```
var c_l = Linear.Create(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a constrained linear. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the constrained linear

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the constrained linear c\_l:<br>
```
c_l.DetachComment(c);
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
<br>To Edit constrained linear c\_l:<br>
```
c_l.Edit();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for constrained linear. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for constrained linear c\_l:<br>
```
c_l.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first constrained linear in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first constrained linear in

| Returns
<br>Linear object (or null if there are no constrained linears in the model).<br>
Return type
<br>Linear |
| --- |

| Example
<br>To get the first constrained linear in model m:<br>
```
var c_l = Linear.First(m);
```
 |
| --- |

* * *

| FirstFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the first free constrained linear label in the model. Also see [Linear.LastFreeLabel()](primer-linear-class.md#Linear::LastFreeLabel), [Linear.NextFreeLabel()](primer-linear-class.md#Linear::NextFreeLabel) and [Model.FirstFreeItemLabel()](primer-model-class.md#Model::FirstFreeItemLabel). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first free constrained linear label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *First free in layer* in editing panels). If omitted the whole model will be used (Equivalent to *First free* in editing panels).

| Returns
<br>Linear label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the first free constrained linear label in model m:<br>
```
var label = Linear.FirstFreeLabel(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the constrained linears in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all constrained linears will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the constrained linears

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the constrained linears with flag f in model m:<br>
```
Linear.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the constrained linear is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the constrained linear

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if constrained linear c\_l has flag f set on it:<br>
```
if (c_l.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each constrained linear in the model.<br> **Note that ForEach has been designed to make looping over constrained linears as fast as possible and so has some limitations. Firstly, a single temporary Linear object is created and on each function call it is updated with the current constrained linear data. This means that you should not try to store the Linear object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new constrained linears inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all constrained linears are in

* func (function)
 
Function to call for each constrained linear

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the constrained linears in model m:<br>
```
Linear.ForEach(m, test);
function test(c_l)
{
// c_l is Linear object
}
```
<br><br>To call function test for all of the constrained linears in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
Linear.ForEach(m, test, data);
function test(c_l, extra)
{
// c_l is Linear object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Linear objects or properties for all of the constrained linears in a model in PRIMER. If the optional property argument is not given then an array of Linear objects is returned. If the property argument is given, that property value for each constrained linear is returned in the array instead of a Linear object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get constrained linears from

* property (optional) (string)
 
Name for property to get for all constrained linears in the model

| Returns
<br>Array of Linear objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Linear objects for all of the constrained linears in model m:<br>
```
var a = Linear.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each constrained linear in model m:<br>
```
var a = Linear.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a constrained linear. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the constrained linear c\_l:<br>
```
var comm_array = c_l.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Linear objects for all of the flagged constrained linears in a model in PRIMER If the optional property argument is not given then an array of Linear objects is returned. If the property argument is given, then that property value for each constrained linear is returned in the array instead of a Linear object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get constrained linears from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the constrained linears that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged constrained linears in the model

| Returns
<br>Array of Linear objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Linear objects for all of the constrained linears in model m flagged with f:<br>
```
var c_l = Linear.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the constrained linears in model m flagged with f:<br>
```
var a = Linear.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the Linear object for a constrained linear ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the constrained linear in

* number (integer)
 
number of the constrained linear you want the Linear object for

| Returns
<br>Linear object (or null if constrained linear does not exist).<br>
Return type
<br>Linear |
| --- |

| Example
<br>To get the Linear object for constrained linear 100 in model m<br>
```
var c_l = Linear.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a Linear property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [Linear.ViewParameters()](primer-linear-class.md#Linear::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
constrained linear property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if Linear property c\_l.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (c_l.GetParameter(c_l.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if Linear property c\_l.example is a parameter by using the GetParameter method:<br>
```
if (c_l.ViewParameters().GetParameter(c_l.example) ) do_something...
```
 |
| --- |

* * *

| GetRowData(row\_index*[Integer]*)

Description<br>Returns independent card 2 for the selected row of the \*CONSTRAINED\_LINEAR. |
| --- |

#### Arguments

* row\_index (Integer)
 
The row index of the data to return. **Note that indices start at 0, not 1**.
 0 &lt;= row\_index &lt; Linear.total

| Returns
<br>Array containing data.<br>
Return type
<br>Array |
| --- |

| Example
<br>To loop over all the lines of the keyword for c\_l:<br>
```
for (i=0; i<c_l.total; i++)
        var data = c_l.GetRowData(i);
      
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this Linear (\*constrained\_linear). **Note that a carriage return is not added**. See also [Linear.KeywordCards()](primer-linear-class.md#Linear::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for Linear c\_l:<br>
```
var key = c_l.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the Linear. **Note that a carriage return is not added**. See also [Linear.Keyword()](primer-linear-class.md#Linear::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for Linear c\_l:<br>
```
var cards = c_l.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last constrained linear in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last constrained linear in

| Returns
<br>Linear object (or null if there are no constrained linears in the model).<br>
Return type
<br>Linear |
| --- |

| Example
<br>To get the last constrained linear in model m:<br>
```
var c_l = Linear.Last(m);
```
 |
| --- |

* * *

| LastFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the last free constrained linear label in the model. Also see [Linear.FirstFreeLabel()](primer-linear-class.md#Linear::FirstFreeLabel), [Linear.NextFreeLabel()](primer-linear-class.md#Linear::NextFreeLabel) and see [Model.LastFreeItemLabel()](primer-model-class.md#Model::LastFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last free constrained linear label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest free in layer* in editing panels). If omitted the whole model will be used.

| Returns
<br>Linear label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the last free constrained linear label in model m:<br>
```
var label = Linear.LastFreeLabel(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next constrained linear in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Linear object (or null if there are no more constrained linears in the model).<br>
Return type
<br>Linear |
| --- |

| Example
<br>To get the constrained linear in model m after constrained linear c\_l:<br>
```
var c_l = c_l.Next();
```
 |
| --- |

* * *

| NextFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the next free (highest+1) constrained linear label in the model. Also see [Linear.FirstFreeLabel()](primer-linear-class.md#Linear::FirstFreeLabel), [Linear.LastFreeLabel()](primer-linear-class.md#Linear::LastFreeLabel) and [Model.NextFreeItemLabel()](primer-model-class.md#Model::NextFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get next free constrained linear label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest+1 in layer* in editing panels). If omitted the whole model will be used (Equivalent to *Highest+1* in editing panels).

| Returns
<br>Linear label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the next free constrained linear label in model m:<br>
```
var label = Linear.NextFreeLabel(m);
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a constrained linear. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only constrained linears from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only constrained linears that are flagged with *limit* can be selected. If omitted, or null, any constrained linears from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[Linear](primer-linear-class.md) object (or null if not picked)<br>
Return type
<br>Linear |
| --- |

| Example
<br>To pick a constrained linear from model m giving the prompt 'Pick constrained linear from screen':<br>
```
var c_l = Linear.Pick('Pick constrained linear from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous constrained linear in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Linear object (or null if there are no more constrained linears in the model).<br>
Return type
<br>Linear |
| --- |

| Example
<br>To get the constrained linear in model m before constrained linear c\_l:<br>
```
var c_l = c_l.Previous();
```
 |
| --- |

* * *

| RemoveRowData(row\_index*[Integer]*)

Description<br>Removes an independent card 2 for the selected row on the \*CONSTRAINED\_LINEAR. |
| --- |

#### Arguments

* row\_index (Integer)
 
The row index of the data to return. **Note that indices start at 0, not 1**.
 0 &lt;= row\_index &lt; Linear.total

| Returns
<br>No return value. |
| --- |

| Example
<br>To remove row 2 for c\_l:<br>
```
 c_l.RemoveRowData(1);
```
 |
| --- |

* * *

| RenumberAll(Model*[[Model](primer-model-class.md)]*, start*[integer]*) [static]
Description<br>Renumbers all of the constrained linears in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all constrained linears will be renumbered in

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the constrained linears in model m, from 1000000:<br>
```
Linear.RenumberAll(m, 1000000);
```
 |
| --- |

* * *

| RenumberFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*) [static]
Description<br>Renumbers all of the flagged constrained linears in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged constrained linears will be renumbered in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the constrained linears that you want to renumber

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the constrained linears in model m flagged with f, from 1000000:<br>
```
Linear.RenumberFlagged(m, f, 1000000);
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select constrained linears using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting constrained linears

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only constrained linears from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only constrained linears that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any constrained linears can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of constrained linears selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select constrained linears from model m, flagging those selected with flag f, giving the prompt 'Select constrained linears':<br>
```
Linear.Select(f, 'Select constrained linears', m);
```
<br><br>To select constrained linears, flagging those selected with flag f but limiting selection to constrained linears flagged with flag l, giving the prompt 'Select constrained linears':<br>
```
Linear.Select(f, 'Select constrained linears', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the constrained linear. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the constrained linear

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for constrained linear c\_l:<br>
```
c_l.SetFlag(f);
```
 |
| --- |

* * *

| SetRowData(row\_index*[Integer]*, nid*[integer]*, dof*[integer]*, coeff*[real]*, cid (optional)*[integer]*)

Description<br>Used to reset values in already existing card 2 in the selected row of \*CONSTRAINED\_LINEAR |
| --- |

#### Arguments

* row\_index (Integer)
 
The row index of the data to return. **Note that indices start at 0, not 1**.
 0 &lt;= row\_index &lt; Linear.total

* nid (integer)
 
[Node](primer-node-class.md) id.

* dof (integer)
 
Degrees-of-Freedom.

* coeff (real)
 
Non-zero coefficient.

* cid (optional) (integer)
 
[Coordinate System](primer-coordinatesystem-class.md) ID if format is [Linear.LOCAL](primer-linear-class.md#Linear.LOCAL). The default value is 0.

| Returns
<br>No return value |
| --- |

| Example
<br>To reset the values of row 3 of the keyword with NID 11, dof 2, coeff 3.2, cid 4:<br>
```
c_l.SetRowData(2,11,2,3.2,4);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the constrained linear. The constrained linear will be sketched until you either call [Linear.Unsketch()](primer-linear-class.md#Linear::Unsketch), [Linear.UnsketchAll()](primer-linear-class.md#Linear::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the constrained linear is sketched. If omitted redraw is true. If you want to sketch several constrained linears and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch constrained linear c\_l:<br>
```
c_l.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged constrained linears in the model. The constrained linears will be sketched until you either call [Linear.Unsketch()](primer-linear-class.md#Linear::Unsketch), [Linear.UnsketchFlagged()](primer-linear-class.md#Linear::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged constrained linears will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the constrained linears that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the constrained linears are sketched. If omitted redraw is true. If you want to sketch flagged constrained linears several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all constrained linears flagged with flag in model m:<br>
```
Linear.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of constrained linears in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing constrained linears should be counted. If false or omitted
referenced but undefined constrained linears will also be included in the total.

| Returns
<br>number of constrained linears<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of constrained linears in model m:<br>
```
var total = Linear.Total(m);
```
 |
| --- |

* * *

| Unblank()

Description<br>Unblanks the constrained linear |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank constrained linear c\_l:<br>
```
c_l.Unblank();
```
 |
| --- |

* * *

| UnblankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the constrained linears in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all constrained linears will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the constrained linears in model m:<br>
```
Linear.UnblankAll(m);
```
 |
| --- |

* * *

| UnblankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the flagged constrained linears in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the flagged constrained linears will be unblanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the constrained linears that you want to unblank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the constrained linears in model m flagged with f:<br>
```
Linear.UnblankFlagged(m, f);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the constrained linears in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all constrained linears will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the constrained linears

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the constrained linears in model m:<br>
```
Linear.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the constrained linear. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the constrained linear is unsketched. If omitted redraw is true. If you want to unsketch several constrained linears and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch constrained linear c\_l:<br>
```
c_l.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all constrained linears. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all constrained linears will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the constrained linears are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all constrained linears in model m:<br>
```
Linear.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged constrained linears in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all constrained linears will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the constrained linears that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the constrained linears are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all constrained linears flagged with flag in model m:<br>
```
Linear.UnsketchAll(m, flag);
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
<br>[Linear](primer-linear-class.md) object.<br>
Return type
<br>Linear |
| --- |

| Example
<br>To check if Linear property c\_l.example is a parameter by using the [Linear.GetParameter()](primer-linear-class.md#Linear::GetParameter) method:<br>
```
if (c_l.ViewParameters().GetParameter(c_l.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for constrained linear. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for constrained linear c\_l:<br>
```
c_l.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this constrained linear. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for constrained linear c\_l:<br>
```
var xrefs = c_l.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the Linear data in keyword format. Note that this contains the keyword header and the keyword cards. See also [Linear.Keyword()](primer-linear-class.md#Linear::Keyword) and [Linear.KeywordCards()](primer-linear-class.md#Linear::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for Linear c\_l in keyword format<br>
```
var s = c_l.toString();
```
 |
| --- |

* * *