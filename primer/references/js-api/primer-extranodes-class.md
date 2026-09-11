# ExtraNodes class

The ExtraNodes class gives you access to constrained extra nodes cards in PRIMER. [More...](primer-extranodes-class.md#ExtraNodes_details)

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

* [BlankAll](primer-extranodes-class.md#ExtraNodes::BlankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [BlankFlagged](primer-extranodes-class.md#ExtraNodes::BlankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Create](primer-extranodes-class.md#ExtraNodes::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [First](primer-extranodes-class.md#ExtraNodes::First)(Model*[[Model](primer-model-class.md)]*)
* [FlagAll](primer-extranodes-class.md#ExtraNodes::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-extranodes-class.md#ExtraNodes::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-extranodes-class.md#ExtraNodes::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-extranodes-class.md#ExtraNodes::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-extranodes-class.md#ExtraNodes::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-extranodes-class.md#ExtraNodes::Last)(Model*[[Model](primer-model-class.md)]*)
* [Pick](primer-extranodes-class.md#ExtraNodes::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [Select](primer-extranodes-class.md#ExtraNodes::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-extranodes-class.md#ExtraNodes::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-extranodes-class.md#ExtraNodes::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnblankAll](primer-extranodes-class.md#ExtraNodes::UnblankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnblankFlagged](primer-extranodes-class.md#ExtraNodes::UnblankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [UnflagAll](primer-extranodes-class.md#ExtraNodes::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-extranodes-class.md#ExtraNodes::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-extranodes-class.md#ExtraNodes::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-extranodes-class.md#ExtraNodes::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Blank](primer-extranodes-class.md#ExtraNodes::Blank)()
* [Blanked](primer-extranodes-class.md#ExtraNodes::Blanked)()
* [Browse](primer-extranodes-class.md#ExtraNodes::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-extranodes-class.md#ExtraNodes::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-extranodes-class.md#ExtraNodes::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-extranodes-class.md#ExtraNodes::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-extranodes-class.md#ExtraNodes::Edit)(modal (optional)*[boolean]*)
* [Error](primer-extranodes-class.md#ExtraNodes::Error)(message*[string]*, details (optional)*[string]*)
* [ExtractColour](primer-extranodes-class.md#ExtraNodes::ExtractColour)()
* [Flagged](primer-extranodes-class.md#ExtraNodes::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-extranodes-class.md#ExtraNodes::GetComments)()
* [GetParameter](primer-extranodes-class.md#ExtraNodes::GetParameter)(prop*[string]*)
* [Keyword](primer-extranodes-class.md#ExtraNodes::Keyword)()
* [KeywordCards](primer-extranodes-class.md#ExtraNodes::KeywordCards)()
* [Next](primer-extranodes-class.md#ExtraNodes::Next)()
* [Previous](primer-extranodes-class.md#ExtraNodes::Previous)()
* [SetFlag](primer-extranodes-class.md#ExtraNodes::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Sketch](primer-extranodes-class.md#ExtraNodes::Sketch)(redraw (optional)*[boolean]*)
* [Unblank](primer-extranodes-class.md#ExtraNodes::Unblank)()
* [Unsketch](primer-extranodes-class.md#ExtraNodes::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-extranodes-class.md#ExtraNodes::ViewParameters)()
* [Warning](primer-extranodes-class.md#ExtraNodes::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-extranodes-class.md#ExtraNodes::Xrefs)()
* [toString](primer-extranodes-class.md#ExtraNodes::toString)()

## ExtraNodes constants

| **Name** | **Description** |
| --- | --- |
| ExtraNodes.NODE | CNST is \*CONSTRAINED\_EXTRA\_NODES\_NODE. |
| ExtraNodes.SET | CNST is \*CONSTRAINED\_EXTRA\_NODES\_SET. |

## ExtraNodes properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| colour | [Colour](primer-colour-class.md) | The colour of the extra nodes |
| exists (read only) | logical | true if constrained extra node exists, false if referred to but not defined. |
| id | integer | [Node](primer-node-class.md) ID or node set ID (not internal label) |
| iflag | logical | Flag for adding node mass inertia to PART\_INERTIA |
| include | integer | The [Include](primer-include-class.md) file number that the constrained extra node is in. |
| label (read only) | integer | The label the constrained extra nodes has in PRIMER |
| model (read only) | integer | The [Model](primer-model-class.md) number that the constrained extra node is in. |
| option | constant | The Constrained Extra Nodes option. Can be [ExtraNodes.NODE](primer-extranodes-class.md#ExtraNodes.NODE) or [ExtraNodes.SET](primer-extranodes-class.md#ExtraNodes.SET). |
| pid | integer | [Part](primer-part-class.md) ID of rigid body. |

| Detailed Description<br>The ExtraNodes class allows you to create, modify, edit and manipulate constrained extra nodes cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new ExtraNodes(Model*[[Model](primer-model-class.md)]*, option*[constant]*, pid*[integer]*, id*[integer]*, iflag*[boolean]*)

Description<br>Create a new [ExtraNodes](primer-extranodes-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that constrained extra nodes will be created in

* option (constant)
 
Specify the type of constrained extra nodes. Can be [ExtraNodes.NODE](primer-extranodes-class.md#ExtraNodes.NODE) or [ExtraNodes.SET](primer-extranodes-class.md#ExtraNodes.SET))

* pid (integer)
 
[Part](primer-part-class.md) ID of rigid body

* id (integer)
 
[Node](primer-node-class.md) node ID or node set ID

* iflag (boolean)
 
Flag for adding node mass inertia to PART\_INERTIA

| Returns
<br>[ExtraNodes](primer-extranodes-class.md) object<br>
Return type
<br>ExtraNodes |
| --- |

| Example
<br>To create a new constrained extra nodes in model m, of type SET, with part 9, node set 18 and iflag 0<br>
```
var e = new ExtraNodes(m, ExtraNodes.SET, 9, 18, 0);
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a constrained extra node. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the constrained extra node

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the constrained extra node en:<br>
```
en.AssociateComment(c);
```
 |
| --- |

* * *

| Blank()

Description<br>Blanks the constrained extra node |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To blank constrained extra node en:<br>
```
en.Blank();
```
 |
| --- |

* * *

| BlankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the constrained extra nodes in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all constrained extra nodes will be blanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the constrained extra nodes in model m:<br>
```
ExtraNodes.BlankAll(m);
```
 |
| --- |

* * *

| BlankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the flagged constrained extra nodes in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged constrained extra nodes will be blanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the constrained extra nodes that you want to blank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the constrained extra nodes in model m flagged with f:<br>
```
ExtraNodes.BlankFlagged(m, f);
```
 |
| --- |

* * *

| Blanked()

Description<br>Checks if the constrained extra node is blanked or not. |
| --- |

#### Arguments

No arguments

| Returns
<br>true if blanked, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if constrained extra node en is blanked:<br>
```
if (en.Blanked() ) do_something...
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
<br>To Browse constrained extra node en:<br>
```
en.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the constrained extra node. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the constrained extra node

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for constrained extra node en:<br>
```
en.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the constrained extra node. The target include of the copied constrained extra node can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>ExtraNodes object<br>
Return type
<br>ExtraNodes |
| --- |

| Example
<br>To copy constrained extra node en into constrained extra node z:<br>
```
var z = en.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a constrained extra node |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the constrained extra node will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>ExtraNodes object (or null if not made).<br>
Return type
<br>ExtraNodes |
| --- |

| Example
<br>To start creating a constrained extra node in model m:<br>
```
var en = ExtraNodes.Create(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a constrained extra node. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the constrained extra node

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the constrained extra node en:<br>
```
en.DetachComment(c);
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
<br>To Edit constrained extra node en:<br>
```
en.Edit();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for constrained extra node. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for constrained extra node en:<br>
```
en.Error("My custom error");
```
 |
| --- |

* * *

| ExtractColour()

Description<br>Extracts the **actual** colour used for constrained extra node.<br> By default in PRIMER many entities such as elements get their colour automatically from the part that they are in. PRIMER cycles through 13 default colours based on the label of the entity. In this case the constrained extra node [colour](primer-extranodes-class.md#colour) property will return the value [Colour.PART](primer-colour-class.md#Colour.PART) instead of the actual colour. This method will return the actual colour which is used for drawing the constrained extra node. |
| --- |

#### Arguments

No arguments

| Returns
<br>colour value (integer)<br>
Return type
<br>Number |
| --- |

| Example
<br>To return the colour used for drawing constrained extra node en:<br>
```
var colour = en.ExtractColour();
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first constrained extra node in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first constrained extra node in

| Returns
<br>ExtraNodes object (or null if there are no constrained extra nodes in the model).<br>
Return type
<br>ExtraNodes |
| --- |

| Example
<br>To get the first constrained extra node in model m:<br>
```
var en = ExtraNodes.First(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the constrained extra nodes in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all constrained extra nodes will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the constrained extra nodes

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the constrained extra nodes with flag f in model m:<br>
```
ExtraNodes.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the constrained extra node is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the constrained extra node

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if constrained extra node en has flag f set on it:<br>
```
if (en.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each constrained extra node in the model.<br> **Note that ForEach has been designed to make looping over constrained extra nodes as fast as possible and so has some limitations. Firstly, a single temporary ExtraNodes object is created and on each function call it is updated with the current constrained extra node data. This means that you should not try to store the ExtraNodes object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new constrained extra nodes inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all constrained extra nodes are in

* func (function)
 
Function to call for each constrained extra node

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the constrained extra nodes in model m:<br>
```
ExtraNodes.ForEach(m, test);
function test(en)
{
// en is ExtraNodes object
}
```
<br><br>To call function test for all of the constrained extra nodes in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
ExtraNodes.ForEach(m, test, data);
function test(en, extra)
{
// en is ExtraNodes object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of ExtraNodes objects or properties for all of the constrained extra nodes in a model in PRIMER. If the optional property argument is not given then an array of ExtraNodes objects is returned. If the property argument is given, that property value for each constrained extra node is returned in the array instead of a ExtraNodes object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get constrained extra nodes from

* property (optional) (string)
 
Name for property to get for all constrained extra nodes in the model

| Returns
<br>Array of ExtraNodes objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of ExtraNodes objects for all of the constrained extra nodes in model m:<br>
```
var a = ExtraNodes.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each constrained extra node in model m:<br>
```
var a = ExtraNodes.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a constrained extra node. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the constrained extra node en:<br>
```
var comm_array = en.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of ExtraNodes objects for all of the flagged constrained extra nodes in a model in PRIMER If the optional property argument is not given then an array of ExtraNodes objects is returned. If the property argument is given, then that property value for each constrained extra node is returned in the array instead of a ExtraNodes object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get constrained extra nodes from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the constrained extra nodes that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged constrained extra nodes in the model

| Returns
<br>Array of ExtraNodes objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of ExtraNodes objects for all of the constrained extra nodes in model m flagged with f:<br>
```
var en = ExtraNodes.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the constrained extra nodes in model m flagged with f:<br>
```
var a = ExtraNodes.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the ExtraNodes object for a constrained extra node ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the constrained extra node in

* number (integer)
 
number of the constrained extra node you want the ExtraNodes object for

| Returns
<br>ExtraNodes object (or null if constrained extra node does not exist).<br>
Return type
<br>ExtraNodes |
| --- |

| Example
<br>To get the ExtraNodes object for constrained extra node 100 in model m<br>
```
var en = ExtraNodes.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a ExtraNodes property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [ExtraNodes.ViewParameters()](primer-extranodes-class.md#ExtraNodes::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
constrained extra node property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if ExtraNodes property en.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (en.GetParameter(en.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if ExtraNodes property en.example is a parameter by using the GetParameter method:<br>
```
if (en.ViewParameters().GetParameter(en.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this constrained extra nodes (\*CONSTRAINED\_EXTRA\_NODES). **Note that a carriage return is not added**. See also [ExtraNodes.KeywordCards()](primer-extranodes-class.md#ExtraNodes::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for constrained extra nodes e:<br>
```
var key = e.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the constrained extra nodes. **Note that a carriage return is not added**. See also [ExtraNodes.Keyword()](primer-extranodes-class.md#ExtraNodes::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for constrained extra nodes e:<br>
```
var cards = e.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last constrained extra node in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last constrained extra node in

| Returns
<br>ExtraNodes object (or null if there are no constrained extra nodes in the model).<br>
Return type
<br>ExtraNodes |
| --- |

| Example
<br>To get the last constrained extra node in model m:<br>
```
var en = ExtraNodes.Last(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next constrained extra node in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>ExtraNodes object (or null if there are no more constrained extra nodes in the model).<br>
Return type
<br>ExtraNodes |
| --- |

| Example
<br>To get the constrained extra node in model m after constrained extra node en:<br>
```
var en = en.Next();
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a constrained extra node. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only constrained extra nodes from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only constrained extra nodes that are flagged with *limit* can be selected. If omitted, or null, any constrained extra nodes from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[ExtraNodes](primer-extranodes-class.md) object (or null if not picked)<br>
Return type
<br>ExtraNodes |
| --- |

| Example
<br>To pick a constrained extra node from model m giving the prompt 'Pick constrained extra node from screen':<br>
```
var en = ExtraNodes.Pick('Pick constrained extra node from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous constrained extra node in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>ExtraNodes object (or null if there are no more constrained extra nodes in the model).<br>
Return type
<br>ExtraNodes |
| --- |

| Example
<br>To get the constrained extra node in model m before constrained extra node en:<br>
```
var en = en.Previous();
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select constrained extra nodes using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting constrained extra nodes

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only constrained extra nodes from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only constrained extra nodes that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any constrained extra nodes can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of constrained extra nodes selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select constrained extra nodes from model m, flagging those selected with flag f, giving the prompt 'Select constrained extra nodes':<br>
```
ExtraNodes.Select(f, 'Select constrained extra nodes', m);
```
<br><br>To select constrained extra nodes, flagging those selected with flag f but limiting selection to constrained extra nodes flagged with flag l, giving the prompt 'Select constrained extra nodes':<br>
```
ExtraNodes.Select(f, 'Select constrained extra nodes', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the constrained extra node. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the constrained extra node

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for constrained extra node en:<br>
```
en.SetFlag(f);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the constrained extra node. The constrained extra node will be sketched until you either call [ExtraNodes.Unsketch()](primer-extranodes-class.md#ExtraNodes::Unsketch), [ExtraNodes.UnsketchAll()](primer-extranodes-class.md#ExtraNodes::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the constrained extra node is sketched. If omitted redraw is true. If you want to sketch several constrained extra nodes and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch constrained extra node en:<br>
```
en.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged constrained extra nodes in the model. The constrained extra nodes will be sketched until you either call [ExtraNodes.Unsketch()](primer-extranodes-class.md#ExtraNodes::Unsketch), [ExtraNodes.UnsketchFlagged()](primer-extranodes-class.md#ExtraNodes::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged constrained extra nodes will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the constrained extra nodes that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the constrained extra nodes are sketched. If omitted redraw is true. If you want to sketch flagged constrained extra nodes several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all constrained extra nodes flagged with flag in model m:<br>
```
ExtraNodes.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of constrained extra nodes in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing constrained extra nodes should be counted. If false or omitted
referenced but undefined constrained extra nodes will also be included in the total.

| Returns
<br>number of constrained extra nodes<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of constrained extra nodes in model m:<br>
```
var total = ExtraNodes.Total(m);
```
 |
| --- |

* * *

| Unblank()

Description<br>Unblanks the constrained extra node |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank constrained extra node en:<br>
```
en.Unblank();
```
 |
| --- |

* * *

| UnblankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the constrained extra nodes in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all constrained extra nodes will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the constrained extra nodes in model m:<br>
```
ExtraNodes.UnblankAll(m);
```
 |
| --- |

* * *

| UnblankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the flagged constrained extra nodes in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the flagged constrained extra nodes will be unblanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the constrained extra nodes that you want to unblank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the constrained extra nodes in model m flagged with f:<br>
```
ExtraNodes.UnblankFlagged(m, f);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the constrained extra nodes in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all constrained extra nodes will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the constrained extra nodes

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the constrained extra nodes in model m:<br>
```
ExtraNodes.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the constrained extra node. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the constrained extra node is unsketched. If omitted redraw is true. If you want to unsketch several constrained extra nodes and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch constrained extra node en:<br>
```
en.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all constrained extra nodes. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all constrained extra nodes will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the constrained extra nodes are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all constrained extra nodes in model m:<br>
```
ExtraNodes.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged constrained extra nodes in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all constrained extra nodes will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the constrained extra nodes that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the constrained extra nodes are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all constrained extra nodes flagged with flag in model m:<br>
```
ExtraNodes.UnsketchAll(m, flag);
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
<br>[ExtraNodes](primer-extranodes-class.md) object.<br>
Return type
<br>ExtraNodes |
| --- |

| Example
<br>To check if ExtraNodes property en.example is a parameter by using the [ExtraNodes.GetParameter()](primer-extranodes-class.md#ExtraNodes::GetParameter) method:<br>
```
if (en.ViewParameters().GetParameter(en.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for constrained extra node. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for constrained extra node en:<br>
```
en.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this constrained extra node. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for constrained extra node en:<br>
```
var xrefs = en.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the constrained extra nodes data in keyword format. Note that this contains the keyword header and the keyword cards. See also [ExtraNodes.Keyword()](primer-extranodes-class.md#ExtraNodes::Keyword) and [ExtraNodes.KeywordCards()](primer-extranodes-class.md#ExtraNodes::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for constrained extra nodes e in keyword format<br>
```
var s = e.toString();
```
 |
| --- |

* * *