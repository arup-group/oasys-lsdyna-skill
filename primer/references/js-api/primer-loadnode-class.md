# LoadNode class

The LoadNode class gives you access to define load node cards in PRIMER. [More...](primer-loadnode-class.md#LoadNode_details)

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

* [BlankAll](primer-loadnode-class.md#LoadNode::BlankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [BlankFlagged](primer-loadnode-class.md#LoadNode::BlankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [First](primer-loadnode-class.md#LoadNode::First)(Model*[[Model](primer-model-class.md)]*)
* [FlagAll](primer-loadnode-class.md#LoadNode::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-loadnode-class.md#LoadNode::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-loadnode-class.md#LoadNode::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-loadnode-class.md#LoadNode::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-loadnode-class.md#LoadNode::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-loadnode-class.md#LoadNode::Last)(Model*[[Model](primer-model-class.md)]*)
* [Pick](primer-loadnode-class.md#LoadNode::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [Select](primer-loadnode-class.md#LoadNode::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-loadnode-class.md#LoadNode::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-loadnode-class.md#LoadNode::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnblankAll](primer-loadnode-class.md#LoadNode::UnblankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnblankFlagged](primer-loadnode-class.md#LoadNode::UnblankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [UnflagAll](primer-loadnode-class.md#LoadNode::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-loadnode-class.md#LoadNode::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-loadnode-class.md#LoadNode::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-loadnode-class.md#LoadNode::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Blank](primer-loadnode-class.md#LoadNode::Blank)()
* [Blanked](primer-loadnode-class.md#LoadNode::Blanked)()
* [ClearFlag](primer-loadnode-class.md#LoadNode::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-loadnode-class.md#LoadNode::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-loadnode-class.md#LoadNode::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Error](primer-loadnode-class.md#LoadNode::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-loadnode-class.md#LoadNode::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-loadnode-class.md#LoadNode::GetComments)()
* [GetParameter](primer-loadnode-class.md#LoadNode::GetParameter)(prop*[string]*)
* [Keyword](primer-loadnode-class.md#LoadNode::Keyword)()
* [KeywordCards](primer-loadnode-class.md#LoadNode::KeywordCards)()
* [Next](primer-loadnode-class.md#LoadNode::Next)()
* [Previous](primer-loadnode-class.md#LoadNode::Previous)()
* [SetFlag](primer-loadnode-class.md#LoadNode::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Sketch](primer-loadnode-class.md#LoadNode::Sketch)(redraw (optional)*[boolean]*)
* [Unblank](primer-loadnode-class.md#LoadNode::Unblank)()
* [Unsketch](primer-loadnode-class.md#LoadNode::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-loadnode-class.md#LoadNode::ViewParameters)()
* [Warning](primer-loadnode-class.md#LoadNode::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-loadnode-class.md#LoadNode::Xrefs)()
* [toString](primer-loadnode-class.md#LoadNode::toString)()

## LoadNode constants

| **Name** | **Description** |
| --- | --- |
| LoadNode.POINT | Load is \*LOAD\_NODE\_POINT. |
| LoadNode.SET | LOAD is \*LOAD\_NODE\_SET. |
| LoadNode.SET\_ONCE | LOAD is \*LOAD\_NODE\_SET\_ONCE. |

## LoadNode properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| cid | integer | Coordinate system ID |
| dof | integer | Applicable degrees-of-freedom |
| exists (read only) | logical | true if load node exists, false if referred to but not defined. |
| include | integer | The [Include](primer-include-class.md) file number that the load node is in. |
| lcid | integer | [Curve](primer-curve-class.md) ID |
| m1 | integer | [Node](primer-node-class.md) 1 ID |
| m2 | integer | [Node](primer-node-class.md) 2 ID |
| m3 | integer | [Node](primer-node-class.md) 3 ID |
| model (read only) | integer | The [Model](primer-model-class.md) number that the load node is in. |
| nid | integer | [Node](primer-node-class.md) ID or node set ID |
| sf | real | Curve scale factor |
| type | constant | The Load Node type. Can be [LoadNode.POINT](primer-loadnode-class.md#LoadNode.POINT) or [LoadNode.SET](primer-loadnode-class.md#LoadNode.SET). [LoadNode.SET_ONCE](primer-loadnode-class.md#LoadNode.SET_ONCE). |

| Detailed Description<br>The LoadNode class allows you to create, modify, edit and manipulate load node cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new LoadNode(Model*[[Model](primer-model-class.md)]*, type*[constant]*, nid*[integer]*, dof*[integer]*, lcid*[integer]*, sf (optional)*[real]*, cid (optional)*[integer]*, m1 (optional)*[integer]*, m2 (optional)*[integer]*, m3 (optional)*[integer]*, lcidsf (optional)*[integer]*)

Description<br>Create a new [LoadNode](primer-loadnode-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that load node will be created in

* type (constant)
 
Specify the type of load node (Can be [LoadNode.POINT](primer-loadnode-class.md#LoadNode.POINT) or [LoadNode.SET](primer-loadnode-class.md#LoadNode.SET)) [LoadNode.SET_ONCE](primer-loadnode-class.md#LoadNode.SET_ONCE))

* nid (integer)
 
[Node](primer-node-class.md) ID or node set ID

* dof (integer)
 
Applicable degrees-of-freedom

* lcid (integer)
 
[Curve](primer-curve-class.md) ID

* sf (optional) (real)
 
Curve scale factor

* cid (optional) (integer)
 
Coordinate system ID

* m1 (optional) (integer)
 
[Node](primer-node-class.md) 1 ID

* m2 (optional) (integer)
 
[Node](primer-node-class.md) 2 ID

* m3 (optional) (integer)
 
[Node](primer-node-class.md) 3 ID

* lcidsf (optional) (integer)
 
[Curve](primer-curve-class.md) ID

| Returns
<br>[LoadNode](primer-loadnode-class.md) object<br>
Return type
<br>LoadNode |
| --- |

| Example
<br>To create a new load node in model m, of type SET, with loadcurve 9 and a scale factor of 0.5<br>
```
var b = new LoadNode(m, LoadNode.SET, 100, 2, 9, 0.5);
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a load node. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the load node

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the load node ln:<br>
```
ln.AssociateComment(c);
```
 |
| --- |

* * *

| Blank()

Description<br>Blanks the load node |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To blank load node ln:<br>
```
ln.Blank();
```
 |
| --- |

* * *

| BlankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the load nodes in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all load nodes will be blanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the load nodes in model m:<br>
```
LoadNode.BlankAll(m);
```
 |
| --- |

* * *

| BlankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the flagged load nodes in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged load nodes will be blanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the load nodes that you want to blank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the load nodes in model m flagged with f:<br>
```
LoadNode.BlankFlagged(m, f);
```
 |
| --- |

* * *

| Blanked()

Description<br>Checks if the load node is blanked or not. |
| --- |

#### Arguments

No arguments

| Returns
<br>true if blanked, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if load node ln is blanked:<br>
```
if (ln.Blanked() ) do_something...
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the load node. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the load node

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for load node ln:<br>
```
ln.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the load node. The target include of the copied load node can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>LoadNode object<br>
Return type
<br>LoadNode |
| --- |

| Example
<br>To copy load node ln into load node z:<br>
```
var z = ln.Copy();
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a load node. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the load node

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the load node ln:<br>
```
ln.DetachComment(c);
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for load node. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for load node ln:<br>
```
ln.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first load node in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first load node in

| Returns
<br>LoadNode object (or null if there are no load nodes in the model).<br>
Return type
<br>LoadNode |
| --- |

| Example
<br>To get the first load node in model m:<br>
```
var ln = LoadNode.First(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the load nodes in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all load nodes will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the load nodes

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the load nodes with flag f in model m:<br>
```
LoadNode.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the load node is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the load node

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if load node ln has flag f set on it:<br>
```
if (ln.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each load node in the model.<br> **Note that ForEach has been designed to make looping over load nodes as fast as possible and so has some limitations. Firstly, a single temporary LoadNode object is created and on each function call it is updated with the current load node data. This means that you should not try to store the LoadNode object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new load nodes inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all load nodes are in

* func (function)
 
Function to call for each load node

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the load nodes in model m:<br>
```
LoadNode.ForEach(m, test);
function test(ln)
{
// ln is LoadNode object
}
```
<br><br>To call function test for all of the load nodes in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
LoadNode.ForEach(m, test, data);
function test(ln, extra)
{
// ln is LoadNode object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of LoadNode objects or properties for all of the load nodes in a model in PRIMER. If the optional property argument is not given then an array of LoadNode objects is returned. If the property argument is given, that property value for each load node is returned in the array instead of a LoadNode object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get load nodes from

* property (optional) (string)
 
Name for property to get for all load nodes in the model

| Returns
<br>Array of LoadNode objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of LoadNode objects for all of the load nodes in model m:<br>
```
var a = LoadNode.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each load node in model m:<br>
```
var a = LoadNode.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a load node. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the load node ln:<br>
```
var comm_array = ln.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of LoadNode objects for all of the flagged load nodes in a model in PRIMER If the optional property argument is not given then an array of LoadNode objects is returned. If the property argument is given, then that property value for each load node is returned in the array instead of a LoadNode object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get load nodes from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the load nodes that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged load nodes in the model

| Returns
<br>Array of LoadNode objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of LoadNode objects for all of the load nodes in model m flagged with f:<br>
```
var ln = LoadNode.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the load nodes in model m flagged with f:<br>
```
var a = LoadNode.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the LoadNode object for a load node ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the load node in

* number (integer)
 
number of the load node you want the LoadNode object for

| Returns
<br>LoadNode object (or null if load node does not exist).<br>
Return type
<br>LoadNode |
| --- |

| Example
<br>To get the LoadNode object for load node 100 in model m<br>
```
var ln = LoadNode.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a LoadNode property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [LoadNode.ViewParameters()](primer-loadnode-class.md#LoadNode::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
load node property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if LoadNode property ln.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (ln.GetParameter(ln.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if LoadNode property ln.example is a parameter by using the GetParameter method:<br>
```
if (ln.ViewParameters().GetParameter(ln.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this load node (\*LOAD\_NODE\_xxxx). **Note that a carriage return is not added**. See also [LoadNode.KeywordCards()](primer-loadnode-class.md#LoadNode::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for load node m:<br>
```
var key = m.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the load node. **Note that a carriage return is not added**. See also [LoadNode.Keyword()](primer-loadnode-class.md#LoadNode::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for load node l:<br>
```
var cards = l.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last load node in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last load node in

| Returns
<br>LoadNode object (or null if there are no load nodes in the model).<br>
Return type
<br>LoadNode |
| --- |

| Example
<br>To get the last load node in model m:<br>
```
var ln = LoadNode.Last(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next load node in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>LoadNode object (or null if there are no more load nodes in the model).<br>
Return type
<br>LoadNode |
| --- |

| Example
<br>To get the load node in model m after load node ln:<br>
```
var ln = ln.Next();
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a load node. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only load nodes from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only load nodes that are flagged with *limit* can be selected. If omitted, or null, any load nodes from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[LoadNode](primer-loadnode-class.md) object (or null if not picked)<br>
Return type
<br>LoadNode |
| --- |

| Example
<br>To pick a load node from model m giving the prompt 'Pick load node from screen':<br>
```
var ln = LoadNode.Pick('Pick load node from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous load node in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>LoadNode object (or null if there are no more load nodes in the model).<br>
Return type
<br>LoadNode |
| --- |

| Example
<br>To get the load node in model m before load node ln:<br>
```
var ln = ln.Previous();
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select load nodes using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting load nodes

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only load nodes from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only load nodes that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any load nodes can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of load nodes selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select load nodes from model m, flagging those selected with flag f, giving the prompt 'Select load nodes':<br>
```
LoadNode.Select(f, 'Select load nodes', m);
```
<br><br>To select load nodes, flagging those selected with flag f but limiting selection to load nodes flagged with flag l, giving the prompt 'Select load nodes':<br>
```
LoadNode.Select(f, 'Select load nodes', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the load node. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the load node

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for load node ln:<br>
```
ln.SetFlag(f);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the load node. The load node will be sketched until you either call [LoadNode.Unsketch()](primer-loadnode-class.md#LoadNode::Unsketch), [LoadNode.UnsketchAll()](primer-loadnode-class.md#LoadNode::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the load node is sketched. If omitted redraw is true. If you want to sketch several load nodes and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch load node ln:<br>
```
ln.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged load nodes in the model. The load nodes will be sketched until you either call [LoadNode.Unsketch()](primer-loadnode-class.md#LoadNode::Unsketch), [LoadNode.UnsketchFlagged()](primer-loadnode-class.md#LoadNode::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged load nodes will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the load nodes that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the load nodes are sketched. If omitted redraw is true. If you want to sketch flagged load nodes several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all load nodes flagged with flag in model m:<br>
```
LoadNode.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of load nodes in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing load nodes should be counted. If false or omitted
referenced but undefined load nodes will also be included in the total.

| Returns
<br>number of load nodes<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of load nodes in model m:<br>
```
var total = LoadNode.Total(m);
```
 |
| --- |

* * *

| Unblank()

Description<br>Unblanks the load node |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank load node ln:<br>
```
ln.Unblank();
```
 |
| --- |

* * *

| UnblankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the load nodes in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all load nodes will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the load nodes in model m:<br>
```
LoadNode.UnblankAll(m);
```
 |
| --- |

* * *

| UnblankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the flagged load nodes in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the flagged load nodes will be unblanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the load nodes that you want to unblank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the load nodes in model m flagged with f:<br>
```
LoadNode.UnblankFlagged(m, f);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the load nodes in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all load nodes will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the load nodes

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the load nodes in model m:<br>
```
LoadNode.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the load node. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the load node is unsketched. If omitted redraw is true. If you want to unsketch several load nodes and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch load node ln:<br>
```
ln.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all load nodes. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all load nodes will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the load nodes are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all load nodes in model m:<br>
```
LoadNode.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged load nodes in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all load nodes will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the load nodes that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the load nodes are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all load nodes flagged with flag in model m:<br>
```
LoadNode.UnsketchAll(m, flag);
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
<br>[LoadNode](primer-loadnode-class.md) object.<br>
Return type
<br>LoadNode |
| --- |

| Example
<br>To check if LoadNode property ln.example is a parameter by using the [LoadNode.GetParameter()](primer-loadnode-class.md#LoadNode::GetParameter) method:<br>
```
if (ln.ViewParameters().GetParameter(ln.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for load node. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for load node ln:<br>
```
ln.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this load node. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for load node ln:<br>
```
var xrefs = ln.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the load node data in keyword format. Note that this contains the keyword header and the keyword cards. See also [LoadNode.Keyword()](primer-loadnode-class.md#LoadNode::Keyword) and [LoadNode.KeywordCards()](primer-loadnode-class.md#LoadNode::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for load node l in keyword format<br>
```
var s = l.toString();
```
 |
| --- |

* * *