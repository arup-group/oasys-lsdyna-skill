# Node class

The Node class gives you access to node cards in PRIMER. [More...](primer-node-class.md#Node_details)

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

* [BlankAll](primer-node-class.md#Node::BlankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [BlankFlagged](primer-node-class.md#Node::BlankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Create](primer-node-class.md#Node::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [First](primer-node-class.md#Node::First)(Model*[[Model](primer-model-class.md)]*)
* [FirstFreeLabel](primer-node-class.md#Node::FirstFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [FlagAll](primer-node-class.md#Node::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-node-class.md#Node::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-node-class.md#Node::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-node-class.md#Node::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-node-class.md#Node::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-node-class.md#Node::Last)(Model*[[Model](primer-model-class.md)]*)
* [LastFreeLabel](primer-node-class.md#Node::LastFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [Merge](primer-node-class.md#Node::Merge)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, dist*[real]*, label (optional)*[integer]*, position (optional)*[integer]*)
* [NextFreeLabel](primer-node-class.md#Node::NextFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [Pick](primer-node-class.md#Node::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [RenumberAll](primer-node-class.md#Node::RenumberAll)(Model*[[Model](primer-model-class.md)]*, start*[integer]*)
* [RenumberFlagged](primer-node-class.md#Node::RenumberFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*)
* [Select](primer-node-class.md#Node::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-node-class.md#Node::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-node-class.md#Node::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnblankAll](primer-node-class.md#Node::UnblankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnblankFlagged](primer-node-class.md#Node::UnblankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [UnflagAll](primer-node-class.md#Node::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-node-class.md#Node::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-node-class.md#Node::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-node-class.md#Node::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Blank](primer-node-class.md#Node::Blank)()
* [Blanked](primer-node-class.md#Node::Blanked)()
* [Browse](primer-node-class.md#Node::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-node-class.md#Node::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-node-class.md#Node::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-node-class.md#Node::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-node-class.md#Node::Edit)(modal (optional)*[boolean]*)
* [Error](primer-node-class.md#Node::Error)(message*[string]*, details (optional)*[string]*)
* [ExtractColour](primer-node-class.md#Node::ExtractColour)()
* [Flagged](primer-node-class.md#Node::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetAttachedShells](primer-node-class.md#Node::GetAttachedShells)(recursive (optional)*[boolean]*)
* [GetComments](primer-node-class.md#Node::GetComments)()
* [GetFreeEdgeNodes](primer-node-class.md#Node::GetFreeEdgeNodes)()
* [GetInitialVelocities](primer-node-class.md#Node::GetInitialVelocities)()
* [GetParameter](primer-node-class.md#Node::GetParameter)(prop*[string]*)
* [GetReferenceGeometry](primer-node-class.md#Node::GetReferenceGeometry)()
* [Keyword](primer-node-class.md#Node::Keyword)()
* [KeywordCards](primer-node-class.md#Node::KeywordCards)()
* [Next](primer-node-class.md#Node::Next)()
* [NodalMass](primer-node-class.md#Node::NodalMass)()
* [Previous](primer-node-class.md#Node::Previous)()
* [SetFlag](primer-node-class.md#Node::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Sketch](primer-node-class.md#Node::Sketch)(redraw (optional)*[boolean]*)
* [Unblank](primer-node-class.md#Node::Unblank)()
* [Unsketch](primer-node-class.md#Node::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-node-class.md#Node::ViewParameters)()
* [Warning](primer-node-class.md#Node::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-node-class.md#Node::Xrefs)()
* [toString](primer-node-class.md#Node::toString)()

## Node constants

| **Name** | **Description** |
| --- | --- |
| Node.SCALAR | Node is \*NODE\_SCALAR. |
| Node.SCALAR\_VALUE | Node is \*NODE\_SCALAR\_VALUE. |

## Node properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| colour | [Colour](primer-colour-class.md) | The colour of the node |
| exists (read only) | logical | true if node exists, false if referred to but not defined. |
| include | integer | The [Include](primer-include-class.md) file number that the node is in. |
| label | integer | [Node](primer-node-class.md) number. Also see the [nid](primer-node-class.md#nid) property which is an alternative name for this. |
| model (read only) | integer | The [Model](primer-model-class.md) number that the node is in. |
| ndof | integer | Number of degrees of freedom (SCALAR and SCALAR\_VALUE only). |
| nid | integer | [Node](primer-node-class.md) number. Also see the [label](primer-node-class.md#label) property which is an alternative name for this. |
| rc | integer | Rotational constraint (0-7) |
| scalar | integer | The type of the node. Can be false (\*NODE), Node.SCALAR (\*NODE\_SCALAR) or Node.SCALAR\_VALUE (\*NODE\_SCALAR\_VALUE) |
| tc | integer | Translational constraint (0-7) |
| x | real | X coordinate |
| x1 | integer | Initial value of 1st degree of freedom (SCALAR\_VALUE only). |
| x2 | integer | Initial value of 2nd degree of freedom (SCALAR\_VALUE only). |
| x3 | integer | Initial value of 3rd degree of freedom (SCALAR\_VALUE only). |
| y | real | Y coordinate |
| z | real | Z coordinate |

| Detailed Description<br>The Node class allows you to create, modify, edit and manipulate node cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new Node(Model*[[Model](primer-model-class.md)]*, nid*[integer]*, x*[real]*, y*[real]*, z*[real]*, tc (optional)*[integer]*, rc (optional)*[integer]*)

Description<br>Create a new [Node](primer-node-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that node will be created in

* nid (integer)
 
[Node](primer-node-class.md) number

* x (real)
 
X coordinate

* y (real)
 
Y coordinate

* z (real)
 
Z coordinate

* tc (optional) (integer)
 
Translational constraint (0-7). If omitted tc will be set to 0.

* rc (optional) (integer)
 
Rotational constraint (0-7). If omitted rc will be set to 0.

| Returns
<br>[Node](primer-node-class.md) object<br>
Return type
<br>Node |
| --- |

| Example
<br>To create a new node in model m with label 100, at coordinates (20, 40, 10)<br>
```
var n = new Node(m, 100, 20, 40, 10);
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a node. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the node

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the node n:<br>
```
n.AssociateComment(c);
```
 |
| --- |

* * *

| Blank()

Description<br>Blanks the node |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To blank node n:<br>
```
n.Blank();
```
 |
| --- |

* * *

| BlankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the nodes in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all nodes will be blanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the nodes in model m:<br>
```
Node.BlankAll(m);
```
 |
| --- |

* * *

| BlankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the flagged nodes in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged nodes will be blanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the nodes that you want to blank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the nodes in model m flagged with f:<br>
```
Node.BlankFlagged(m, f);
```
 |
| --- |

* * *

| Blanked()

Description<br>Checks if the node is blanked or not. |
| --- |

#### Arguments

No arguments

| Returns
<br>true if blanked, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if node n is blanked:<br>
```
if (n.Blanked() ) do_something...
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
<br>To Browse node n:<br>
```
n.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the node. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the node

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for node n:<br>
```
n.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the node. The target include of the copied node can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>Node object<br>
Return type
<br>Node |
| --- |

| Example
<br>To copy node n into node z:<br>
```
var z = n.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a node |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the node will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>Node object (or null if not made).<br>
Return type
<br>Node |
| --- |

| Example
<br>To start creating a node in model m:<br>
```
var n = Node.Create(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a node. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the node

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the node n:<br>
```
n.DetachComment(c);
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
<br>To Edit node n:<br>
```
n.Edit();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for node. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for node n:<br>
```
n.Error("My custom error");
```
 |
| --- |

* * *

| ExtractColour()

Description<br>Extracts the **actual** colour used for node.<br> By default in PRIMER many entities such as elements get their colour automatically from the part that they are in. PRIMER cycles through 13 default colours based on the label of the entity. In this case the node [colour](primer-node-class.md#colour) property will return the value [Colour.PART](primer-colour-class.md#Colour.PART) instead of the actual colour. This method will return the actual colour which is used for drawing the node. |
| --- |

#### Arguments

No arguments

| Returns
<br>colour value (integer)<br>
Return type
<br>Number |
| --- |

| Example
<br>To return the colour used for drawing node n:<br>
```
var colour = n.ExtractColour();
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first node in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first node in

| Returns
<br>Node object (or null if there are no nodes in the model).<br>
Return type
<br>Node |
| --- |

| Example
<br>To get the first node in model m:<br>
```
var n = Node.First(m);
```
 |
| --- |

* * *

| FirstFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the first free node label in the model. Also see [Node.LastFreeLabel()](primer-node-class.md#Node::LastFreeLabel), [Node.NextFreeLabel()](primer-node-class.md#Node::NextFreeLabel) and [Model.FirstFreeItemLabel()](primer-model-class.md#Model::FirstFreeItemLabel). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first free node label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *First free in layer* in editing panels). If omitted the whole model will be used (Equivalent to *First free* in editing panels).

| Returns
<br>Node label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the first free node label in model m:<br>
```
var label = Node.FirstFreeLabel(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the nodes in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all nodes will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the nodes

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the nodes with flag f in model m:<br>
```
Node.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the node is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the node

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if node n has flag f set on it:<br>
```
if (n.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each node in the model.<br> **Note that ForEach has been designed to make looping over nodes as fast as possible and so has some limitations. Firstly, a single temporary Node object is created and on each function call it is updated with the current node data. This means that you should not try to store the Node object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new nodes inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all nodes are in

* func (function)
 
Function to call for each node

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the nodes in model m:<br>
```
Node.ForEach(m, test);
function test(n)
{
// n is Node object
}
```
<br><br>To call function test for all of the nodes in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
Node.ForEach(m, test, data);
function test(n, extra)
{
// n is Node object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Node objects or properties for all of the nodes in a model in PRIMER. If the optional property argument is not given then an array of Node objects is returned. If the property argument is given, that property value for each node is returned in the array instead of a Node object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get nodes from

* property (optional) (string)
 
Name for property to get for all nodes in the model

| Returns
<br>Array of Node objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Node objects for all of the nodes in model m:<br>
```
var a = Node.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each node in model m:<br>
```
var a = Node.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetAttachedShells(recursive (optional)*[boolean]*)

Description<br>Returns the shells that are attached to the node. |
| --- |

#### Arguments

* recursive (optional) (boolean)
 
If recursive is false then only the shells actually attached to the node will be returned (this could also be done by using the [Xrefs](primer-xrefs-class.md) class but this method is provided for convenience. If recursive is true then PRIMER will keep finding attached shells until no more can be found. If omitted recursive will be false.

| Returns
<br>Array of [Shell](primer-shell-class.md) objects (or null if there are no attached shells).<br>
Return type
<br>Array |
| --- |

| Example
<br>To find the shells attached to node n, growing the selection until no more shells can be found:<br>
```
var shell_array = n.GetAttachedShells(true);
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a node. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the node n:<br>
```
var comm_array = n.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Node objects for all of the flagged nodes in a model in PRIMER If the optional property argument is not given then an array of Node objects is returned. If the property argument is given, then that property value for each node is returned in the array instead of a Node object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get nodes from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the nodes that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged nodes in the model

| Returns
<br>Array of Node objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Node objects for all of the nodes in model m flagged with f:<br>
```
var n = Node.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the nodes in model m flagged with f:<br>
```
var a = Node.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFreeEdgeNodes()

Description<br><br><br>If the node is on a shell free edge and that edge forms a loop like the boundary of a hole, then GetFreeEdgeNodes returns all of the nodes on the hole/boundary in order.<br> <br>Note that a free edge is a shell edge which is only used by one shell, whereas edges in the middle of a shell part will have got more than one adjacent shell and are therefore not free edges. If every node on a boundary belongs to exactly two free edges, then this function returns the array as described. In more involved combinatorics of shells, for example multiple parts sharing nodes along their boundaries, there can be one, three or more free edges at a node, and this function should not be used.<br> <br>If you only need to know whether or not a node is on a free edge, you should find the shells attached to it by cross references with [Xrefs.GetItemID](primer-xrefs-class.md#Xrefs::GetItemID) and see whether these shells have got other nodes in common as well. If nodes along an edge of a shell only appear in that one shell, this is a free edge. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of [Node](primer-node-class.md) objects (or null if not on a shell free edge).<br>
Return type
<br>Array |
| --- |

| Example
<br>To find all the nodes on the hole/boundary that node n is on:<br>
```
var node_array = n.GetFreeEdgeNodes();
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the Node object for a node ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the node in

* number (integer)
 
number of the node you want the Node object for

| Returns
<br>Node object (or null if node does not exist).<br>
Return type
<br>Node |
| --- |

| Example
<br>To get the Node object for node 100 in model m<br>
```
var n = Node.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetInitialVelocities()

Description<br>Returns the initial velocity of the node. You need to be sure the field nvels of the node is populate before to use GetInitialVelocities. To do so you can use [Model.PopNodeVels](primer-model-class.md#Model::PopulateInitialVelocities). |
| --- |

#### Arguments

No arguments

| Returns
<br>Array containing the 3 translational and 3 rotational velocity values.<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the initial velocity of the node n:<br>
```
var vel = n.GetInitialVelocities();
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a Node property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [Node.ViewParameters()](primer-node-class.md#Node::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
node property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if Node property n.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (n.GetParameter(n.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if Node property n.example is a parameter by using the GetParameter method:<br>
```
if (n.ViewParameters().GetParameter(n.example) ) do_something...
```
 |
| --- |

* * *

| GetReferenceGeometry()

Description<br>Returns the airbag reference geometry of the node |
| --- |

#### Arguments

No arguments

| Returns
<br>The reference geometry ID of the node (or 0 if it hasn't got any)<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the reference geometry of the node n:<br>
```
var a = n.GetReferenceGeometry();
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this node (\*NODE, \*NODE\_SCALAR or \*NODE\_SCALAR\_VALUE). **Note that a carriage return is not added**. See also [Node.KeywordCards()](primer-node-class.md#Node::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for node n:<br>
```
var key = n.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the node. **Note that a carriage return is not added**. See also [Node.Keyword()](primer-node-class.md#Node::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for node n:<br>
```
var cards = n.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last node in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last node in

| Returns
<br>Node object (or null if there are no nodes in the model).<br>
Return type
<br>Node |
| --- |

| Example
<br>To get the last node in model m:<br>
```
var n = Node.Last(m);
```
 |
| --- |

* * *

| LastFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the last free node label in the model. Also see [Node.FirstFreeLabel()](primer-node-class.md#Node::FirstFreeLabel), [Node.NextFreeLabel()](primer-node-class.md#Node::NextFreeLabel) and see [Model.LastFreeItemLabel()](primer-model-class.md#Model::LastFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last free node label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest free in layer* in editing panels). If omitted the whole model will be used.

| Returns
<br>Node label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the last free node label in model m:<br>
```
var label = Node.LastFreeLabel(m);
```
 |
| --- |

* * *

| Merge(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, dist*[real]*, label (optional)*[integer]*, position (optional)*[integer]*) [static]
Description<br>Attempts to merge nodes flagged with flag for a model in PRIMER. Merging nodes on \*AIRBAG\_SHELL\_REFERENCE\_GEOMETRY can be controlled by using [Options.node_replace_asrg](primer-options-class.md#node_replace_asrg). Also see [Model.MergeNodes()](primer-model-class.md#Model::MergeNodes). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the nodes will be merged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on nodes to nodes

* dist (real)
 
Nodes closer than dist will be potentially merged.

* label (optional) (integer)
 
Label to keep after merge. If &gt; 0 then highest label kept. If &lt;= 0 then lowest kept. If omitted the lowest label will be kept.

* position (optional) (integer)
 
Position to merge at. If &gt; 0 then merged at highest label position. If &lt; 0 then merged at lowest label position. If 0 then merged at midpoint. If omitted the merge will be done at the lowest label.

| Returns
<br>The number of nodes merged<br>
Return type
<br>Number |
| --- |

| Example
<br>To (try to) merge nodes in model m flagged with flag f, with a distance of 0.1:<br>
```
Node.Merge(m, f, 0.1);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next node in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Node object (or null if there are no more nodes in the model).<br>
Return type
<br>Node |
| --- |

| Example
<br>To get the node in model m after node n:<br>
```
var n = n.Next();
```
 |
| --- |

* * *

| NextFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the next free (highest+1) node label in the model. Also see [Node.FirstFreeLabel()](primer-node-class.md#Node::FirstFreeLabel), [Node.LastFreeLabel()](primer-node-class.md#Node::LastFreeLabel) and [Model.NextFreeItemLabel()](primer-model-class.md#Model::NextFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get next free node label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest+1 in layer* in editing panels). If omitted the whole model will be used (Equivalent to *Highest+1* in editing panels).

| Returns
<br>Node label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the next free node label in model m:<br>
```
var label = Node.NextFreeLabel(m);
```
 |
| --- |

* * *

| NodalMass()

Description<br>Get the mass of a node. This will be the sum of the structural element mass attached to the node plus any lumped mass. If called on the node of a PART\_INERTIA or NRBC\_INERTIA, this function will return the mass of the part/nrbc, as 'nodal mass' has no meaning in this context. |
| --- |

#### Arguments

No arguments

| Returns
<br>real<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the mass for node n:<br>
```
var mass = n.NodalMass();
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a node. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only nodes from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only nodes that are flagged with *limit* can be selected. If omitted, or null, any nodes from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[Node](primer-node-class.md) object (or null if not picked)<br>
Return type
<br>Node |
| --- |

| Example
<br>To pick a node from model m giving the prompt 'Pick node from screen':<br>
```
var n = Node.Pick('Pick node from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous node in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Node object (or null if there are no more nodes in the model).<br>
Return type
<br>Node |
| --- |

| Example
<br>To get the node in model m before node n:<br>
```
var n = n.Previous();
```
 |
| --- |

* * *

| RenumberAll(Model*[[Model](primer-model-class.md)]*, start*[integer]*) [static]
Description<br>Renumbers all of the nodes in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all nodes will be renumbered in

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the nodes in model m, from 1000000:<br>
```
Node.RenumberAll(m, 1000000);
```
 |
| --- |

* * *

| RenumberFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*) [static]
Description<br>Renumbers all of the flagged nodes in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged nodes will be renumbered in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the nodes that you want to renumber

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the nodes in model m flagged with f, from 1000000:<br>
```
Node.RenumberFlagged(m, f, 1000000);
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select nodes using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting nodes

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only nodes from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only nodes that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any nodes can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of nodes selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select nodes from model m, flagging those selected with flag f, giving the prompt 'Select nodes':<br>
```
Node.Select(f, 'Select nodes', m);
```
<br><br>To select nodes, flagging those selected with flag f but limiting selection to nodes flagged with flag l, giving the prompt 'Select nodes':<br>
```
Node.Select(f, 'Select nodes', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the node. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the node

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for node n:<br>
```
n.SetFlag(f);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the node. The node will be sketched until you either call [Node.Unsketch()](primer-node-class.md#Node::Unsketch), [Node.UnsketchAll()](primer-node-class.md#Node::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the node is sketched. If omitted redraw is true. If you want to sketch several nodes and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch node n:<br>
```
n.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged nodes in the model. The nodes will be sketched until you either call [Node.Unsketch()](primer-node-class.md#Node::Unsketch), [Node.UnsketchFlagged()](primer-node-class.md#Node::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged nodes will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the nodes that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the nodes are sketched. If omitted redraw is true. If you want to sketch flagged nodes several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all nodes flagged with flag in model m:<br>
```
Node.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of nodes in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing nodes should be counted. If false or omitted
referenced but undefined nodes will also be included in the total.

| Returns
<br>number of nodes<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of nodes in model m:<br>
```
var total = Node.Total(m);
```
 |
| --- |

* * *

| Unblank()

Description<br>Unblanks the node |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank node n:<br>
```
n.Unblank();
```
 |
| --- |

* * *

| UnblankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the nodes in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all nodes will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the nodes in model m:<br>
```
Node.UnblankAll(m);
```
 |
| --- |

* * *

| UnblankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the flagged nodes in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the flagged nodes will be unblanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the nodes that you want to unblank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the nodes in model m flagged with f:<br>
```
Node.UnblankFlagged(m, f);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the nodes in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all nodes will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the nodes

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the nodes in model m:<br>
```
Node.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the node. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the node is unsketched. If omitted redraw is true. If you want to unsketch several nodes and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch node n:<br>
```
n.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all nodes. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all nodes will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the nodes are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all nodes in model m:<br>
```
Node.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged nodes in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all nodes will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the nodes that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the nodes are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all nodes flagged with flag in model m:<br>
```
Node.UnsketchAll(m, flag);
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
<br>[Node](primer-node-class.md) object.<br>
Return type
<br>Node |
| --- |

| Example
<br>To check if Node property n.example is a parameter by using the [Node.GetParameter()](primer-node-class.md#Node::GetParameter) method:<br>
```
if (n.ViewParameters().GetParameter(n.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for node. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for node n:<br>
```
n.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this node. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for node n:<br>
```
var xrefs = n.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the node data in keyword format. Note that this contains the keyword header and the keyword cards. See also [Node.Keyword()](primer-node-class.md#Node::Keyword) and [Node.KeywordCards()](primer-node-class.md#Node::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for node n in keyword format<br>
```
var s = n.toString();
```
 |
| --- |

* * *