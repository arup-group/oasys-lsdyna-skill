# NodeSet class

The NodeSet class gives you access to constrained node set cards in PRIMER, **not** set node cards. For access to set node cards, refer to the [Set class](primer-set-class.md). [More...](primer-nodeset-class.md#NodeSet_details)

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

* [BlankAll](primer-nodeset-class.md#NodeSet::BlankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [BlankFlagged](primer-nodeset-class.md#NodeSet::BlankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Create](primer-nodeset-class.md#NodeSet::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [First](primer-nodeset-class.md#NodeSet::First)(Model*[[Model](primer-model-class.md)]*)
* [FirstFreeLabel](primer-nodeset-class.md#NodeSet::FirstFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [FlagAll](primer-nodeset-class.md#NodeSet::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-nodeset-class.md#NodeSet::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-nodeset-class.md#NodeSet::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-nodeset-class.md#NodeSet::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-nodeset-class.md#NodeSet::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-nodeset-class.md#NodeSet::Last)(Model*[[Model](primer-model-class.md)]*)
* [LastFreeLabel](primer-nodeset-class.md#NodeSet::LastFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [NextFreeLabel](primer-nodeset-class.md#NodeSet::NextFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [Pick](primer-nodeset-class.md#NodeSet::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [RenumberAll](primer-nodeset-class.md#NodeSet::RenumberAll)(Model*[[Model](primer-model-class.md)]*, start*[integer]*)
* [RenumberFlagged](primer-nodeset-class.md#NodeSet::RenumberFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*)
* [Select](primer-nodeset-class.md#NodeSet::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-nodeset-class.md#NodeSet::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-nodeset-class.md#NodeSet::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnblankAll](primer-nodeset-class.md#NodeSet::UnblankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnblankFlagged](primer-nodeset-class.md#NodeSet::UnblankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [UnflagAll](primer-nodeset-class.md#NodeSet::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-nodeset-class.md#NodeSet::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-nodeset-class.md#NodeSet::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-nodeset-class.md#NodeSet::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Blank](primer-nodeset-class.md#NodeSet::Blank)()
* [Blanked](primer-nodeset-class.md#NodeSet::Blanked)()
* [Browse](primer-nodeset-class.md#NodeSet::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-nodeset-class.md#NodeSet::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-nodeset-class.md#NodeSet::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-nodeset-class.md#NodeSet::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-nodeset-class.md#NodeSet::Edit)(modal (optional)*[boolean]*)
* [Error](primer-nodeset-class.md#NodeSet::Error)(message*[string]*, details (optional)*[string]*)
* [ExtractColour](primer-nodeset-class.md#NodeSet::ExtractColour)()
* [Flagged](primer-nodeset-class.md#NodeSet::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-nodeset-class.md#NodeSet::GetComments)()
* [GetParameter](primer-nodeset-class.md#NodeSet::GetParameter)(prop*[string]*)
* [Keyword](primer-nodeset-class.md#NodeSet::Keyword)()
* [KeywordCards](primer-nodeset-class.md#NodeSet::KeywordCards)()
* [Next](primer-nodeset-class.md#NodeSet::Next)()
* [Previous](primer-nodeset-class.md#NodeSet::Previous)()
* [SetFlag](primer-nodeset-class.md#NodeSet::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Sketch](primer-nodeset-class.md#NodeSet::Sketch)(redraw (optional)*[boolean]*)
* [Unblank](primer-nodeset-class.md#NodeSet::Unblank)()
* [Unsketch](primer-nodeset-class.md#NodeSet::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-nodeset-class.md#NodeSet::ViewParameters)()
* [Warning](primer-nodeset-class.md#NodeSet::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-nodeset-class.md#NodeSet::Xrefs)()
* [toString](primer-nodeset-class.md#NodeSet::toString)()

## NodeSet properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| cnsid | integer | Constrained node set number (identical to label). |
| colour | [Colour](primer-colour-class.md) | The colour of the node set |
| dof | integer | Degree of freedom. |
| exists (read only) | logical | true if node set exists, false if referred to but not defined. |
| id | logical | true if \_ID option is set, false if not |
| include | integer | The [Include](primer-include-class.md) file number that the node set is in. |
| label | integer | Constrained node set number. |
| model (read only) | integer | The [Model](primer-model-class.md) number that the node set is in. |
| nsid | integer | [Set Node](primer-set-class.md) ID. |
| tf | real | Failure time. |

| Detailed Description<br>The NodeSet class allows you to create, modify, edit and manipulate constrained node set cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new NodeSet(Model*[[Model](primer-model-class.md)]*, nsid*[integer]*, dof*[integer]*, tf*[real]*, label (optional)*[integer]*)

Description<br>Create a new [NodeSet](primer-nodeset-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that constrained node set will be created in

* nsid (integer)
 
[Set Node](primer-set-class.md) ID.

* dof (integer)
 
Degree of freedom.

* tf (real)
 
Failure time.

* label (optional) (integer)
 
Constrained node set number.

| Returns
<br>[NodeSet](primer-nodeset-class.md) object<br>
Return type
<br>NodeSet |
| --- |

| Example
<br>To create a new constrained node set 500 in model m, of type SET, with node set 9, degree of freedom 1 and failure time 1000<br>
```
var n = new NodeSet(m, 9, 1, 1000, 500);
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a node set. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the node set

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the node set ns:<br>
```
ns.AssociateComment(c);
```
 |
| --- |

* * *

| Blank()

Description<br>Blanks the node set |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To blank node set ns:<br>
```
ns.Blank();
```
 |
| --- |

* * *

| BlankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the node sets in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all node sets will be blanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the node sets in model m:<br>
```
NodeSet.BlankAll(m);
```
 |
| --- |

* * *

| BlankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the flagged node sets in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged node sets will be blanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the node sets that you want to blank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the node sets in model m flagged with f:<br>
```
NodeSet.BlankFlagged(m, f);
```
 |
| --- |

* * *

| Blanked()

Description<br>Checks if the node set is blanked or not. |
| --- |

#### Arguments

No arguments

| Returns
<br>true if blanked, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if node set ns is blanked:<br>
```
if (ns.Blanked() ) do_something...
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
<br>To Browse node set ns:<br>
```
ns.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the node set. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the node set

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for node set ns:<br>
```
ns.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the node set. The target include of the copied node set can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>NodeSet object<br>
Return type
<br>NodeSet |
| --- |

| Example
<br>To copy node set ns into node set z:<br>
```
var z = ns.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a node set |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the node set will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>NodeSet object (or null if not made).<br>
Return type
<br>NodeSet |
| --- |

| Example
<br>To start creating a node set in model m:<br>
```
var ns = NodeSet.Create(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a node set. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the node set

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the node set ns:<br>
```
ns.DetachComment(c);
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
<br>To Edit node set ns:<br>
```
ns.Edit();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for node set. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for node set ns:<br>
```
ns.Error("My custom error");
```
 |
| --- |

* * *

| ExtractColour()

Description<br>Extracts the **actual** colour used for node set.<br> By default in PRIMER many entities such as elements get their colour automatically from the part that they are in. PRIMER cycles through 13 default colours based on the label of the entity. In this case the node set [colour](primer-nodeset-class.md#colour) property will return the value [Colour.PART](primer-colour-class.md#Colour.PART) instead of the actual colour. This method will return the actual colour which is used for drawing the node set. |
| --- |

#### Arguments

No arguments

| Returns
<br>colour value (integer)<br>
Return type
<br>Number |
| --- |

| Example
<br>To return the colour used for drawing node set ns:<br>
```
var colour = ns.ExtractColour();
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first node set in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first node set in

| Returns
<br>NodeSet object (or null if there are no node sets in the model).<br>
Return type
<br>NodeSet |
| --- |

| Example
<br>To get the first node set in model m:<br>
```
var ns = NodeSet.First(m);
```
 |
| --- |

* * *

| FirstFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the first free node set label in the model. Also see [NodeSet.LastFreeLabel()](primer-nodeset-class.md#NodeSet::LastFreeLabel), [NodeSet.NextFreeLabel()](primer-nodeset-class.md#NodeSet::NextFreeLabel) and [Model.FirstFreeItemLabel()](primer-model-class.md#Model::FirstFreeItemLabel). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first free node set label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *First free in layer* in editing panels). If omitted the whole model will be used (Equivalent to *First free* in editing panels).

| Returns
<br>NodeSet label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the first free node set label in model m:<br>
```
var label = NodeSet.FirstFreeLabel(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the node sets in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all node sets will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the node sets

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the node sets with flag f in model m:<br>
```
NodeSet.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the node set is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the node set

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if node set ns has flag f set on it:<br>
```
if (ns.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each node set in the model.<br> **Note that ForEach has been designed to make looping over node sets as fast as possible and so has some limitations. Firstly, a single temporary NodeSet object is created and on each function call it is updated with the current node set data. This means that you should not try to store the NodeSet object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new node sets inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all node sets are in

* func (function)
 
Function to call for each node set

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the node sets in model m:<br>
```
NodeSet.ForEach(m, test);
function test(ns)
{
// ns is NodeSet object
}
```
<br><br>To call function test for all of the node sets in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
NodeSet.ForEach(m, test, data);
function test(ns, extra)
{
// ns is NodeSet object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of NodeSet objects or properties for all of the node sets in a model in PRIMER. If the optional property argument is not given then an array of NodeSet objects is returned. If the property argument is given, that property value for each node set is returned in the array instead of a NodeSet object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get node sets from

* property (optional) (string)
 
Name for property to get for all node sets in the model

| Returns
<br>Array of NodeSet objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of NodeSet objects for all of the node sets in model m:<br>
```
var a = NodeSet.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each node set in model m:<br>
```
var a = NodeSet.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a node set. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the node set ns:<br>
```
var comm_array = ns.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of NodeSet objects for all of the flagged node sets in a model in PRIMER If the optional property argument is not given then an array of NodeSet objects is returned. If the property argument is given, then that property value for each node set is returned in the array instead of a NodeSet object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get node sets from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the node sets that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged node sets in the model

| Returns
<br>Array of NodeSet objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of NodeSet objects for all of the node sets in model m flagged with f:<br>
```
var ns = NodeSet.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the node sets in model m flagged with f:<br>
```
var a = NodeSet.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the NodeSet object for a node set ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the node set in

* number (integer)
 
number of the node set you want the NodeSet object for

| Returns
<br>NodeSet object (or null if node set does not exist).<br>
Return type
<br>NodeSet |
| --- |

| Example
<br>To get the NodeSet object for node set 100 in model m<br>
```
var ns = NodeSet.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a NodeSet property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [NodeSet.ViewParameters()](primer-nodeset-class.md#NodeSet::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
node set property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if NodeSet property ns.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (ns.GetParameter(ns.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if NodeSet property ns.example is a parameter by using the GetParameter method:<br>
```
if (ns.ViewParameters().GetParameter(ns.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this node\_set (\*CONSTRAINED\_NODE\_SET). **Note that a carriage return is not added**. See also [NodeSet.KeywordCards()](primer-nodeset-class.md#NodeSet::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for node\_set n:<br>
```
var key = n.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the node\_set. **Note that a carriage return is not added**. See also [NodeSet.Keyword()](primer-nodeset-class.md#NodeSet::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for node\_set n:<br>
```
var cards = n.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last node set in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last node set in

| Returns
<br>NodeSet object (or null if there are no node sets in the model).<br>
Return type
<br>NodeSet |
| --- |

| Example
<br>To get the last node set in model m:<br>
```
var ns = NodeSet.Last(m);
```
 |
| --- |

* * *

| LastFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the last free node set label in the model. Also see [NodeSet.FirstFreeLabel()](primer-nodeset-class.md#NodeSet::FirstFreeLabel), [NodeSet.NextFreeLabel()](primer-nodeset-class.md#NodeSet::NextFreeLabel) and see [Model.LastFreeItemLabel()](primer-model-class.md#Model::LastFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last free node set label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest free in layer* in editing panels). If omitted the whole model will be used.

| Returns
<br>NodeSet label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the last free node set label in model m:<br>
```
var label = NodeSet.LastFreeLabel(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next node set in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>NodeSet object (or null if there are no more node sets in the model).<br>
Return type
<br>NodeSet |
| --- |

| Example
<br>To get the node set in model m after node set ns:<br>
```
var ns = ns.Next();
```
 |
| --- |

* * *

| NextFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the next free (highest+1) node set label in the model. Also see [NodeSet.FirstFreeLabel()](primer-nodeset-class.md#NodeSet::FirstFreeLabel), [NodeSet.LastFreeLabel()](primer-nodeset-class.md#NodeSet::LastFreeLabel) and [Model.NextFreeItemLabel()](primer-model-class.md#Model::NextFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get next free node set label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest+1 in layer* in editing panels). If omitted the whole model will be used (Equivalent to *Highest+1* in editing panels).

| Returns
<br>NodeSet label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the next free node set label in model m:<br>
```
var label = NodeSet.NextFreeLabel(m);
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a node set. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only node sets from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only node sets that are flagged with *limit* can be selected. If omitted, or null, any node sets from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[NodeSet](primer-nodeset-class.md) object (or null if not picked)<br>
Return type
<br>NodeSet |
| --- |

| Example
<br>To pick a node set from model m giving the prompt 'Pick node set from screen':<br>
```
var ns = NodeSet.Pick('Pick node set from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous node set in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>NodeSet object (or null if there are no more node sets in the model).<br>
Return type
<br>NodeSet |
| --- |

| Example
<br>To get the node set in model m before node set ns:<br>
```
var ns = ns.Previous();
```
 |
| --- |

* * *

| RenumberAll(Model*[[Model](primer-model-class.md)]*, start*[integer]*) [static]
Description<br>Renumbers all of the node sets in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all node sets will be renumbered in

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the node sets in model m, from 1000000:<br>
```
NodeSet.RenumberAll(m, 1000000);
```
 |
| --- |

* * *

| RenumberFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*) [static]
Description<br>Renumbers all of the flagged node sets in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged node sets will be renumbered in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the node sets that you want to renumber

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the node sets in model m flagged with f, from 1000000:<br>
```
NodeSet.RenumberFlagged(m, f, 1000000);
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select node sets using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting node sets

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only node sets from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only node sets that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any node sets can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of node sets selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select node sets from model m, flagging those selected with flag f, giving the prompt 'Select node sets':<br>
```
NodeSet.Select(f, 'Select node sets', m);
```
<br><br>To select node sets, flagging those selected with flag f but limiting selection to node sets flagged with flag l, giving the prompt 'Select node sets':<br>
```
NodeSet.Select(f, 'Select node sets', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the node set. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the node set

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for node set ns:<br>
```
ns.SetFlag(f);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the node set. The node set will be sketched until you either call [NodeSet.Unsketch()](primer-nodeset-class.md#NodeSet::Unsketch), [NodeSet.UnsketchAll()](primer-nodeset-class.md#NodeSet::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the node set is sketched. If omitted redraw is true. If you want to sketch several node sets and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch node set ns:<br>
```
ns.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged node sets in the model. The node sets will be sketched until you either call [NodeSet.Unsketch()](primer-nodeset-class.md#NodeSet::Unsketch), [NodeSet.UnsketchFlagged()](primer-nodeset-class.md#NodeSet::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged node sets will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the node sets that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the node sets are sketched. If omitted redraw is true. If you want to sketch flagged node sets several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all node sets flagged with flag in model m:<br>
```
NodeSet.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of node sets in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing node sets should be counted. If false or omitted
referenced but undefined node sets will also be included in the total.

| Returns
<br>number of node sets<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of node sets in model m:<br>
```
var total = NodeSet.Total(m);
```
 |
| --- |

* * *

| Unblank()

Description<br>Unblanks the node set |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank node set ns:<br>
```
ns.Unblank();
```
 |
| --- |

* * *

| UnblankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the node sets in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all node sets will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the node sets in model m:<br>
```
NodeSet.UnblankAll(m);
```
 |
| --- |

* * *

| UnblankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the flagged node sets in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the flagged node sets will be unblanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the node sets that you want to unblank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the node sets in model m flagged with f:<br>
```
NodeSet.UnblankFlagged(m, f);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the node sets in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all node sets will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the node sets

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the node sets in model m:<br>
```
NodeSet.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the node set. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the node set is unsketched. If omitted redraw is true. If you want to unsketch several node sets and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch node set ns:<br>
```
ns.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all node sets. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all node sets will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the node sets are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all node sets in model m:<br>
```
NodeSet.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged node sets in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all node sets will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the node sets that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the node sets are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all node sets flagged with flag in model m:<br>
```
NodeSet.UnsketchAll(m, flag);
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
<br>[NodeSet](primer-nodeset-class.md) object.<br>
Return type
<br>NodeSet |
| --- |

| Example
<br>To check if NodeSet property ns.example is a parameter by using the [NodeSet.GetParameter()](primer-nodeset-class.md#NodeSet::GetParameter) method:<br>
```
if (ns.ViewParameters().GetParameter(ns.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for node set. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for node set ns:<br>
```
ns.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this node set. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for node set ns:<br>
```
var xrefs = ns.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the node\_set data in keyword format. Note that this contains the keyword header and the keyword cards. See also [NodeSet.Keyword()](primer-nodeset-class.md#NodeSet::Keyword) and [NodeSet.KeywordCards()](primer-nodeset-class.md#NodeSet::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for node set n in keyword format<br>
```
var s = n.toString();
```
 |
| --- |

* * *