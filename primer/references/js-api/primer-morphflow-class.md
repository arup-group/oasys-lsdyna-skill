# MorphFlow class

The MorphFlow class gives you access to morph flows in PRIMER. [More...](primer-morphflow-class.md#MorphFlow_details)

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

* [BlankAll](primer-morphflow-class.md#MorphFlow::BlankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [BlankFlagged](primer-morphflow-class.md#MorphFlow::BlankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Create](primer-morphflow-class.md#MorphFlow::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [First](primer-morphflow-class.md#MorphFlow::First)(Model*[[Model](primer-model-class.md)]*)
* [FlagAll](primer-morphflow-class.md#MorphFlow::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-morphflow-class.md#MorphFlow::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-morphflow-class.md#MorphFlow::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-morphflow-class.md#MorphFlow::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-morphflow-class.md#MorphFlow::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [GetFromName](primer-morphflow-class.md#MorphFlow::GetFromName)(Model*[[Model](primer-model-class.md)]*, morph flow name*[string]*)
* [Last](primer-morphflow-class.md#MorphFlow::Last)(Model*[[Model](primer-model-class.md)]*)
* [Pick](primer-morphflow-class.md#MorphFlow::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [Select](primer-morphflow-class.md#MorphFlow::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-morphflow-class.md#MorphFlow::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-morphflow-class.md#MorphFlow::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnblankAll](primer-morphflow-class.md#MorphFlow::UnblankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnblankFlagged](primer-morphflow-class.md#MorphFlow::UnblankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [UnflagAll](primer-morphflow-class.md#MorphFlow::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-morphflow-class.md#MorphFlow::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-morphflow-class.md#MorphFlow::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-morphflow-class.md#MorphFlow::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Blank](primer-morphflow-class.md#MorphFlow::Blank)()
* [Blanked](primer-morphflow-class.md#MorphFlow::Blanked)()
* [Browse](primer-morphflow-class.md#MorphFlow::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-morphflow-class.md#MorphFlow::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-morphflow-class.md#MorphFlow::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-morphflow-class.md#MorphFlow::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-morphflow-class.md#MorphFlow::Edit)(modal (optional)*[boolean]*)
* [Error](primer-morphflow-class.md#MorphFlow::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-morphflow-class.md#MorphFlow::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-morphflow-class.md#MorphFlow::GetComments)()
* [GetParameter](primer-morphflow-class.md#MorphFlow::GetParameter)(prop*[string]*)
* [GetRow](primer-morphflow-class.md#MorphFlow::GetRow)(row*[integer]*)
* [GetValue](primer-morphflow-class.md#MorphFlow::GetValue)(index*[integer]*)
* [Keyword](primer-morphflow-class.md#MorphFlow::Keyword)()
* [KeywordCards](primer-morphflow-class.md#MorphFlow::KeywordCards)()
* [Next](primer-morphflow-class.md#MorphFlow::Next)()
* [Previous](primer-morphflow-class.md#MorphFlow::Previous)()
* [RemoveRow](primer-morphflow-class.md#MorphFlow::RemoveRow)(row*[integer]*)
* [RemoveValue](primer-morphflow-class.md#MorphFlow::RemoveValue)(index*[integer]*)
* [SetFlag](primer-morphflow-class.md#MorphFlow::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [SetRow](primer-morphflow-class.md#MorphFlow::SetRow)(row*[integer]*, data*[Array of data]*)
* [SetValue](primer-morphflow-class.md#MorphFlow::SetValue)(index*[integer]*, value*[real]*)
* [Sketch](primer-morphflow-class.md#MorphFlow::Sketch)(redraw (optional)*[boolean]*)
* [Unblank](primer-morphflow-class.md#MorphFlow::Unblank)()
* [Unsketch](primer-morphflow-class.md#MorphFlow::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-morphflow-class.md#MorphFlow::ViewParameters)()
* [Warning](primer-morphflow-class.md#MorphFlow::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-morphflow-class.md#MorphFlow::Xrefs)()
* [toString](primer-morphflow-class.md#MorphFlow::toString)()

## MorphFlow properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists (read only) | logical | true if flow exists, false if referred to but not defined. |
| include | integer | The [Include](primer-include-class.md) file number that the flow is in. |
| max | real | Maximum value for type set to "CONTINUOUS" or "STEP" when written as design variable for LS-OPT. |
| min | real | Minimum value for type set to "CONTINUOUS" or "STEP" when written as design variable for LS-OPT. |
| model (read only) | integer | The [Model](primer-model-class.md) number that the flow is in. |
| name | string | Name of the morph flow. If the flow is used for applying LS-OPT variables, this should match the variable name in the listing file written by LS-OPT. |
| npoints (read only) | integer | Number of morph points referenced by the flow. |
| nvals (read only) | integer | Number of values in the list when type is set to "DISCRETE". |
| step | real | Step size for type set to "STEP" when written as design variable for LS-OPT. |
| type | string | Range type for the morph flow. This should be "CONTINUOUS", "STEP" or "DISCRETE" and may be used for LS-OPT when writing design variable files from morph flows. |

| Detailed Description<br>The MorphFlow class allows you to create, modify and manipulate morph flows.<br>See the documentation below for more details. |
| --- |

| Constructor
new MorphFlow(Model*[[Model](primer-model-class.md)]*, name*[string]*)

Description<br>Create a new [MorphFlow](primer-morphflow-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that morph flow will be created in

* name (string)
 
[MorphFlow](primer-morphflow-class.md) name

| Returns
<br>[MorphFlow](primer-morphflow-class.md) object<br>
Return type
<br>MorphFlow |
| --- |

| Example
<br>To create a new (empty) morph flow in model m with name 'depth'<br>
```
var f = new MorphFlow(m, "depth");
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a flow. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the flow

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the flow flow:<br>
```
flow.AssociateComment(c);
```
 |
| --- |

* * *

| Blank()

Description<br>Blanks the flow |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To blank flow flow:<br>
```
flow.Blank();
```
 |
| --- |

* * *

| BlankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the flows in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all flows will be blanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the flows in model m:<br>
```
MorphFlow.BlankAll(m);
```
 |
| --- |

* * *

| BlankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the flagged flows in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged flows will be blanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the flows that you want to blank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the flows in model m flagged with f:<br>
```
MorphFlow.BlankFlagged(m, f);
```
 |
| --- |

* * *

| Blanked()

Description<br>Checks if the flow is blanked or not. |
| --- |

#### Arguments

No arguments

| Returns
<br>true if blanked, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if flow flow is blanked:<br>
```
if (flow.Blanked() ) do_something...
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
<br>To Browse flow flow:<br>
```
flow.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the flow. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the flow

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for flow flow:<br>
```
flow.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the flow. The target include of the copied flow can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>MorphFlow object<br>
Return type
<br>MorphFlow |
| --- |

| Example
<br>To copy flow flow into flow z:<br>
```
var z = flow.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a flow |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the flow will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>MorphFlow object (or null if not made).<br>
Return type
<br>MorphFlow |
| --- |

| Example
<br>To start creating a flow in model m:<br>
```
var flow = MorphFlow.Create(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a flow. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the flow

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the flow flow:<br>
```
flow.DetachComment(c);
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
<br>To Edit flow flow:<br>
```
flow.Edit();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for flow. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for flow flow:<br>
```
flow.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first flow in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first flow in

| Returns
<br>MorphFlow object (or null if there are no flows in the model).<br>
Return type
<br>MorphFlow |
| --- |

| Example
<br>To get the first flow in model m:<br>
```
var flow = MorphFlow.First(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the flows in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all flows will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the flows

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the flows with flag f in model m:<br>
```
MorphFlow.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the flow is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the flow

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if flow flow has flag f set on it:<br>
```
if (flow.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each flow in the model.<br> **Note that ForEach has been designed to make looping over flows as fast as possible and so has some limitations. Firstly, a single temporary MorphFlow object is created and on each function call it is updated with the current flow data. This means that you should not try to store the MorphFlow object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new flows inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all flows are in

* func (function)
 
Function to call for each flow

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the flows in model m:<br>
```
MorphFlow.ForEach(m, test);
function test(flow)
{
// flow is MorphFlow object
}
```
<br><br>To call function test for all of the flows in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
MorphFlow.ForEach(m, test, data);
function test(flow, extra)
{
// flow is MorphFlow object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of MorphFlow objects or properties for all of the flows in a model in PRIMER. If the optional property argument is not given then an array of MorphFlow objects is returned. If the property argument is given, that property value for each flow is returned in the array instead of a MorphFlow object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get flows from

* property (optional) (string)
 
Name for property to get for all flows in the model

| Returns
<br>Array of MorphFlow objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of MorphFlow objects for all of the flows in model m:<br>
```
var a = MorphFlow.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each flow in model m:<br>
```
var a = MorphFlow.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a flow. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the flow flow:<br>
```
var comm_array = flow.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of MorphFlow objects for all of the flagged flows in a model in PRIMER If the optional property argument is not given then an array of MorphFlow objects is returned. If the property argument is given, then that property value for each flow is returned in the array instead of a MorphFlow object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get flows from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the flows that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged flows in the model

| Returns
<br>Array of MorphFlow objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of MorphFlow objects for all of the flows in model m flagged with f:<br>
```
var flow = MorphFlow.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the flows in model m flagged with f:<br>
```
var a = MorphFlow.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the MorphFlow object for a flow ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the flow in

* number (integer)
 
number of the flow you want the MorphFlow object for

| Returns
<br>MorphFlow object (or null if flow does not exist).<br>
Return type
<br>MorphFlow |
| --- |

| Example
<br>To get the MorphFlow object for flow 100 in model m<br>
```
var flow = MorphFlow.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetFromName(Model*[[Model](primer-model-class.md)]*, morph flow name*[string]*) [static]
Description<br>Returns the stored MorphFlow object for a morph flow name.<br>WARNING: This assumes that there is at most one morph flow with a given name.<br>Otherwise this function only returns the first occurrence. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the morph flow in

* morph flow name (string)
 
name of the morph flow you want the MorphFlow object for

| Returns
<br>MorphFlow object (or null if morph flow does not exist).<br>
Return type
<br>MorphFlow |
| --- |

| Example
<br>To get the MorphFlow object for flow "depth" in model m<br>
```
var f = MorphFlow.GetFromName(m, "depth");
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a MorphFlow property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [MorphFlow.ViewParameters()](primer-morphflow-class.md#MorphFlow::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
flow property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if MorphFlow property flow.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (flow.GetParameter(flow.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if MorphFlow property flow.example is a parameter by using the GetParameter method:<br>
```
if (flow.ViewParameters().GetParameter(flow.example) ) do_something...
```
 |
| --- |

* * *

| GetRow(row*[integer]*)

Description<br>Returns the data for a row in the morph flow. |
| --- |

#### Arguments

* row (integer)
 
The row you want the data for. **Note row indices start at 0**.

| Returns
<br>An array of numbers containing the morph point ID at index 0 and the vector components at indices 1, 2, 3.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the data for the 2nd row in morph flow f:<br>
```
var data = f.GetRow(1);
var point_id = data[0];
var dx = data[1];
var dy = data[2];
var dz = data[3];
```
 |
| --- |

* * *

| GetValue(index*[integer]*)

Description<br>Get the value at given index on the morph flow with type "DISCRETE". |
| --- |

#### Arguments

* index (integer)
 
The index where you are extracting the value. **Note row indices start at 0**.

| Returns
<br>real<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the 2nd value for morph flow f with type "DISCRETE":<br>
```
var value = f.GetValue(1);
```
<br>To get the last value on the list of values on f:<br>
```
var value = f.GetValue(f.nvals - 1);
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this morph flow (\*MORPH\_FLOW). **Note that a carriage return is not added**. See also [MorphFlow.KeywordCards()](primer-morphflow-class.md#MorphFlow::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for morph flow f:<br>
```
var key = f.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the morph flow. **Note that a carriage return is not added**. See also [MorphFlow.Keyword()](primer-morphflow-class.md#MorphFlow::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for morph flow f:<br>
```
var cards = f.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last flow in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last flow in

| Returns
<br>MorphFlow object (or null if there are no flows in the model).<br>
Return type
<br>MorphFlow |
| --- |

| Example
<br>To get the last flow in model m:<br>
```
var flow = MorphFlow.Last(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next flow in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>MorphFlow object (or null if there are no more flows in the model).<br>
Return type
<br>MorphFlow |
| --- |

| Example
<br>To get the flow in model m after flow flow:<br>
```
var flow = flow.Next();
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a flow. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only flows from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only flows that are flagged with *limit* can be selected. If omitted, or null, any flows from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[MorphFlow](primer-morphflow-class.md) object (or null if not picked)<br>
Return type
<br>MorphFlow |
| --- |

| Example
<br>To pick a flow from model m giving the prompt 'Pick flow from screen':<br>
```
var flow = MorphFlow.Pick('Pick flow from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous flow in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>MorphFlow object (or null if there are no more flows in the model).<br>
Return type
<br>MorphFlow |
| --- |

| Example
<br>To get the flow in model m before flow flow:<br>
```
var flow = flow.Previous();
```
 |
| --- |

* * *

| RemoveRow(row*[integer]*)

Description<br>Removes the data (a morph point ID and its three vector components) for a row in \*MORPH\_FLOW. |
| --- |

#### Arguments

* row (integer)
 
The row you want to remove the data for. **Note that row indices start at 0**.

| Returns
<br>No return value. |
| --- |

| Example
<br>To remove the second row of data for morph flow f:<br>
```
f.RemoveRow(1);
```
 |
| --- |

* * *

| RemoveValue(index*[integer]*)

Description<br>Removes the value at given index in \*MORPH\_FLOW with type "DISCRETE". |
| --- |

#### Arguments

* index (integer)
 
The index where you are removing the value. **Note that indices start at 0**.

| Returns
<br>No return value. |
| --- |

| Example
<br>To remove the second value for morph flow f:<br>
```
f.RemoveValue(1);
```
<br>To remove the last value for f:<br>
```
f.RemoveValue(f.nvals - 1);
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select flows using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting flows

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only flows from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only flows that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any flows can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of flows selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select flows from model m, flagging those selected with flag f, giving the prompt 'Select flows':<br>
```
MorphFlow.Select(f, 'Select flows', m);
```
<br><br>To select flows, flagging those selected with flag f but limiting selection to flows flagged with flag l, giving the prompt 'Select flows':<br>
```
MorphFlow.Select(f, 'Select flows', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the flow. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the flow

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for flow flow:<br>
```
flow.SetFlag(f);
```
 |
| --- |

* * *

| SetRow(row*[integer]*, data*[Array of data]*)

Description<br>Sets the data for a row in \*MORPH\_FLOW. |
| --- |

#### Arguments

* row (integer)
 
The row you want to set the data for. **Note that row indices start at 0**.

* data (Array of data)
 
The data you want to set the row to. It should be of length 4 having the morph point ID at index 0, and the vector components at indices 1, 2, 3.

| Returns
<br>No return value. |
| --- |

| Example
<br>To set the second point of the morph flow f to be morph point 11 with unit vector in X-direction:<br>
```
var array = [11, 1.0, 0.0, 0.0];
f.SetRow(1, array);
```
<br>To append a new row of data (using the same array of values):<br>
```
f.SetRow(f.npoints, array);
```
 |
| --- |

* * *

| SetValue(index*[integer]*, value*[real]*)

Description<br>Sets the value at given index in a \*MORPH\_FLOW with type "DISCRETE". |
| --- |

#### Arguments

* index (integer)
 
The row you want to set the data for. **Note that row indices start at 0**.

* value (real)
 
The new value to insert into the list.

| Returns
<br>No return value. |
| --- |

| Example
<br>To set the second value morph flow f to 20.0:<br>
```
f.SetValue(1, 20.0);
```
<br>To append the value 20.0 to the end of the list:<br>
```
f.SetValue(f.nvals, 20.0);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the flow. The flow will be sketched until you either call [MorphFlow.Unsketch()](primer-morphflow-class.md#MorphFlow::Unsketch), [MorphFlow.UnsketchAll()](primer-morphflow-class.md#MorphFlow::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the flow is sketched. If omitted redraw is true. If you want to sketch several flows and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch flow flow:<br>
```
flow.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged flows in the model. The flows will be sketched until you either call [MorphFlow.Unsketch()](primer-morphflow-class.md#MorphFlow::Unsketch), [MorphFlow.UnsketchFlagged()](primer-morphflow-class.md#MorphFlow::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged flows will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the flows that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the flows are sketched. If omitted redraw is true. If you want to sketch flagged flows several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all flows flagged with flag in model m:<br>
```
MorphFlow.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of flows in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing flows should be counted. If false or omitted
referenced but undefined flows will also be included in the total.

| Returns
<br>number of flows<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of flows in model m:<br>
```
var total = MorphFlow.Total(m);
```
 |
| --- |

* * *

| Unblank()

Description<br>Unblanks the flow |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank flow flow:<br>
```
flow.Unblank();
```
 |
| --- |

* * *

| UnblankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the flows in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all flows will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the flows in model m:<br>
```
MorphFlow.UnblankAll(m);
```
 |
| --- |

* * *

| UnblankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the flagged flows in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the flagged flows will be unblanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the flows that you want to unblank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the flows in model m flagged with f:<br>
```
MorphFlow.UnblankFlagged(m, f);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the flows in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all flows will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the flows

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the flows in model m:<br>
```
MorphFlow.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the flow. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the flow is unsketched. If omitted redraw is true. If you want to unsketch several flows and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch flow flow:<br>
```
flow.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flows. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all flows will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the flows are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all flows in model m:<br>
```
MorphFlow.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged flows in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all flows will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the flows that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the flows are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all flows flagged with flag in model m:<br>
```
MorphFlow.UnsketchAll(m, flag);
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
<br>[MorphFlow](primer-morphflow-class.md) object.<br>
Return type
<br>MorphFlow |
| --- |

| Example
<br>To check if MorphFlow property flow.example is a parameter by using the [MorphFlow.GetParameter()](primer-morphflow-class.md#MorphFlow::GetParameter) method:<br>
```
if (flow.ViewParameters().GetParameter(flow.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for flow. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for flow flow:<br>
```
flow.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this flow. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for flow flow:<br>
```
var xrefs = flow.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the morph flow data in keyword format. Note that this contains the keyword header and the keyword cards. See also [MorphFlow.Keyword()](primer-morphflow-class.md#MorphFlow::Keyword) and [MorphFlow.KeywordCards()](primer-morphflow-class.md#MorphFlow::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for morph flow f in keyword format<br>
```
var s = f.toString();
```
 |
| --- |

* * *