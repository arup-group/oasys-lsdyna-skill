# NodalForceGroup (Nfgr) class

The NodalForceGroup class gives you access to database nodal force group cards in PRIMER. [More...](primer-nodalforcegroup-class.md#NodalForceGroup_details)

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

* [BlankAll](primer-nodalforcegroup-class.md#NodalForceGroup::BlankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [BlankFlagged](primer-nodalforcegroup-class.md#NodalForceGroup::BlankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [First](primer-nodalforcegroup-class.md#NodalForceGroup::First)(Model*[[Model](primer-model-class.md)]*)
* [FlagAll](primer-nodalforcegroup-class.md#NodalForceGroup::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-nodalforcegroup-class.md#NodalForceGroup::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-nodalforcegroup-class.md#NodalForceGroup::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-nodalforcegroup-class.md#NodalForceGroup::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-nodalforcegroup-class.md#NodalForceGroup::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-nodalforcegroup-class.md#NodalForceGroup::Last)(Model*[[Model](primer-model-class.md)]*)
* [Pick](primer-nodalforcegroup-class.md#NodalForceGroup::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [Select](primer-nodalforcegroup-class.md#NodalForceGroup::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-nodalforcegroup-class.md#NodalForceGroup::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-nodalforcegroup-class.md#NodalForceGroup::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnblankAll](primer-nodalforcegroup-class.md#NodalForceGroup::UnblankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnblankFlagged](primer-nodalforcegroup-class.md#NodalForceGroup::UnblankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [UnflagAll](primer-nodalforcegroup-class.md#NodalForceGroup::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-nodalforcegroup-class.md#NodalForceGroup::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-nodalforcegroup-class.md#NodalForceGroup::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-nodalforcegroup-class.md#NodalForceGroup::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Blank](primer-nodalforcegroup-class.md#NodalForceGroup::Blank)()
* [Blanked](primer-nodalforcegroup-class.md#NodalForceGroup::Blanked)()
* [ClearFlag](primer-nodalforcegroup-class.md#NodalForceGroup::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-nodalforcegroup-class.md#NodalForceGroup::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-nodalforcegroup-class.md#NodalForceGroup::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Error](primer-nodalforcegroup-class.md#NodalForceGroup::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-nodalforcegroup-class.md#NodalForceGroup::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-nodalforcegroup-class.md#NodalForceGroup::GetComments)()
* [GetParameter](primer-nodalforcegroup-class.md#NodalForceGroup::GetParameter)(prop*[string]*)
* [Keyword](primer-nodalforcegroup-class.md#NodalForceGroup::Keyword)()
* [KeywordCards](primer-nodalforcegroup-class.md#NodalForceGroup::KeywordCards)()
* [Next](primer-nodalforcegroup-class.md#NodalForceGroup::Next)()
* [Previous](primer-nodalforcegroup-class.md#NodalForceGroup::Previous)()
* [SetFlag](primer-nodalforcegroup-class.md#NodalForceGroup::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Sketch](primer-nodalforcegroup-class.md#NodalForceGroup::Sketch)(redraw (optional)*[boolean]*)
* [Unblank](primer-nodalforcegroup-class.md#NodalForceGroup::Unblank)()
* [Unsketch](primer-nodalforcegroup-class.md#NodalForceGroup::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-nodalforcegroup-class.md#NodalForceGroup::ViewParameters)()
* [Warning](primer-nodalforcegroup-class.md#NodalForceGroup::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-nodalforcegroup-class.md#NodalForceGroup::Xrefs)()
* [toString](primer-nodalforcegroup-class.md#NodalForceGroup::toString)()

## NodalForceGroup properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| cid | integer | [Coordinate System](primer-coordinatesystem-class.md) ID. |
| exists (read only) | logical | true if nodal force group exists, false if referred to but not defined. |
| id | integer | Database Nodal Force Group number (identical to label). |
| include | integer | The [Include](primer-include-class.md) file number that the nodal force group is in. |
| label | integer | Database Nodal Force Group number. |
| model (read only) | integer | The [Model](primer-model-class.md) number that the nodal force group is in. |
| nsid | integer | [Set](primer-set-class.md) Node Set ID. |

| Detailed Description<br>The NodalForceGroup class allows you to create, modify, edit and manipulate nodal force group cards.<br>See the documentation below for more details.<br>
<br>For convenience "Nfgr" can also be used as the class name instead of "NodalForceGroup". |
| --- |

| Constructor
new NodalForceGroup(Model*[[Model](primer-model-class.md)]*, nsid*[integer]*, cid (optional)*[integer]*)

Description<br>Create a new [NodalForceGroup](primer-nodalforcegroup-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that nodal force group will be created in

* nsid (integer)
 
[Set](primer-set-class.md) Node Set ID.

* cid (optional) (integer)
 
[Coordinate System](primer-coordinatesystem-class.md) ID.

| Returns
<br>[NodalForceGroup](primer-nodalforcegroup-class.md) object<br>
Return type
<br>NodalForceGroup |
| --- |

| Example
<br>To create a new nodal force group in model m with nsid 100:<br>
```
var nfg = new NodalForceGroup(m, 100);
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a nodal force group. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the nodal force group

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the nodal force group nfg:<br>
```
nfg.AssociateComment(c);
```
 |
| --- |

* * *

| Blank()

Description<br>Blanks the nodal force group |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To blank nodal force group nfg:<br>
```
nfg.Blank();
```
 |
| --- |

* * *

| BlankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the nodal force groups in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all nodal force groups will be blanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the nodal force groups in model m:<br>
```
NodalForceGroup.BlankAll(m);
```
 |
| --- |

* * *

| BlankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the flagged nodal force groups in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged nodal force groups will be blanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the nodal force groups that you want to blank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the nodal force groups in model m flagged with f:<br>
```
NodalForceGroup.BlankFlagged(m, f);
```
 |
| --- |

* * *

| Blanked()

Description<br>Checks if the nodal force group is blanked or not. |
| --- |

#### Arguments

No arguments

| Returns
<br>true if blanked, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if nodal force group nfg is blanked:<br>
```
if (nfg.Blanked() ) do_something...
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the nodal force group. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the nodal force group

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for nodal force group nfg:<br>
```
nfg.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the nodal force group. The target include of the copied nodal force group can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>NodalForceGroup object<br>
Return type
<br>NodalForceGroup |
| --- |

| Example
<br>To copy nodal force group nfg into nodal force group z:<br>
```
var z = nfg.Copy();
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a nodal force group. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the nodal force group

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the nodal force group nfg:<br>
```
nfg.DetachComment(c);
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for nodal force group. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for nodal force group nfg:<br>
```
nfg.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first nodal force group in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first nodal force group in

| Returns
<br>NodalForceGroup object (or null if there are no nodal force groups in the model).<br>
Return type
<br>NodalForceGroup |
| --- |

| Example
<br>To get the first nodal force group in model m:<br>
```
var nfg = NodalForceGroup.First(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the nodal force groups in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all nodal force groups will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the nodal force groups

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the nodal force groups with flag f in model m:<br>
```
NodalForceGroup.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the nodal force group is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the nodal force group

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if nodal force group nfg has flag f set on it:<br>
```
if (nfg.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each nodal force group in the model.<br> **Note that ForEach has been designed to make looping over nodal force groups as fast as possible and so has some limitations. Firstly, a single temporary NodalForceGroup object is created and on each function call it is updated with the current nodal force group data. This means that you should not try to store the NodalForceGroup object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new nodal force groups inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all nodal force groups are in

* func (function)
 
Function to call for each nodal force group

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the nodal force groups in model m:<br>
```
NodalForceGroup.ForEach(m, test);
function test(nfg)
{
// nfg is NodalForceGroup object
}
```
<br><br>To call function test for all of the nodal force groups in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
NodalForceGroup.ForEach(m, test, data);
function test(nfg, extra)
{
// nfg is NodalForceGroup object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of NodalForceGroup objects or properties for all of the nodal force groups in a model in PRIMER. If the optional property argument is not given then an array of NodalForceGroup objects is returned. If the property argument is given, that property value for each nodal force group is returned in the array instead of a NodalForceGroup object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get nodal force groups from

* property (optional) (string)
 
Name for property to get for all nodal force groups in the model

| Returns
<br>Array of NodalForceGroup objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of NodalForceGroup objects for all of the nodal force groups in model m:<br>
```
var a = NodalForceGroup.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each nodal force group in model m:<br>
```
var a = NodalForceGroup.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a nodal force group. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the nodal force group nfg:<br>
```
var comm_array = nfg.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of NodalForceGroup objects for all of the flagged nodal force groups in a model in PRIMER If the optional property argument is not given then an array of NodalForceGroup objects is returned. If the property argument is given, then that property value for each nodal force group is returned in the array instead of a NodalForceGroup object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get nodal force groups from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the nodal force groups that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged nodal force groups in the model

| Returns
<br>Array of NodalForceGroup objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of NodalForceGroup objects for all of the nodal force groups in model m flagged with f:<br>
```
var nfg = NodalForceGroup.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the nodal force groups in model m flagged with f:<br>
```
var a = NodalForceGroup.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the NodalForceGroup object for a nodal force group ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the nodal force group in

* number (integer)
 
number of the nodal force group you want the NodalForceGroup object for

| Returns
<br>NodalForceGroup object (or null if nodal force group does not exist).<br>
Return type
<br>NodalForceGroup |
| --- |

| Example
<br>To get the NodalForceGroup object for nodal force group 100 in model m<br>
```
var nfg = NodalForceGroup.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a NodalForceGroup property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [NodalForceGroup.ViewParameters()](primer-nodalforcegroup-class.md#NodalForceGroup::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
nodal force group property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if NodalForceGroup property nfg.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (nfg.GetParameter(nfg.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if NodalForceGroup property nfg.example is a parameter by using the GetParameter method:<br>
```
if (nfg.ViewParameters().GetParameter(nfg.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this nodal force group. **Note that a carriage return is not added**. See also [NodalForceGroup.KeywordCards()](primer-nodalforcegroup-class.md#NodalForceGroup::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for nodal force group nfg:<br>
```
var key = nfg.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the nodal force group. **Note that a carriage return is not added**. See also [NodalForceGroup.Keyword()](primer-nodalforcegroup-class.md#NodalForceGroup::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for nodal force group nfg:<br>
```
var cards = nfg.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last nodal force group in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last nodal force group in

| Returns
<br>NodalForceGroup object (or null if there are no nodal force groups in the model).<br>
Return type
<br>NodalForceGroup |
| --- |

| Example
<br>To get the last nodal force group in model m:<br>
```
var nfg = NodalForceGroup.Last(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next nodal force group in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>NodalForceGroup object (or null if there are no more nodal force groups in the model).<br>
Return type
<br>NodalForceGroup |
| --- |

| Example
<br>To get the nodal force group in model m after nodal force group nfg:<br>
```
var nfg = nfg.Next();
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a nodal force group. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only nodal force groups from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only nodal force groups that are flagged with *limit* can be selected. If omitted, or null, any nodal force groups from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[NodalForceGroup](primer-nodalforcegroup-class.md) object (or null if not picked)<br>
Return type
<br>NodalForceGroup |
| --- |

| Example
<br>To pick a nodal force group from model m giving the prompt 'Pick nodal force group from screen':<br>
```
var nfg = NodalForceGroup.Pick('Pick nodal force group from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous nodal force group in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>NodalForceGroup object (or null if there are no more nodal force groups in the model).<br>
Return type
<br>NodalForceGroup |
| --- |

| Example
<br>To get the nodal force group in model m before nodal force group nfg:<br>
```
var nfg = nfg.Previous();
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select nodal force groups using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting nodal force groups

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only nodal force groups from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only nodal force groups that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any nodal force groups can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of nodal force groups selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select nodal force groups from model m, flagging those selected with flag f, giving the prompt 'Select nodal force groups':<br>
```
NodalForceGroup.Select(f, 'Select nodal force groups', m);
```
<br><br>To select nodal force groups, flagging those selected with flag f but limiting selection to nodal force groups flagged with flag l, giving the prompt 'Select nodal force groups':<br>
```
NodalForceGroup.Select(f, 'Select nodal force groups', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the nodal force group. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the nodal force group

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for nodal force group nfg:<br>
```
nfg.SetFlag(f);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the nodal force group. The nodal force group will be sketched until you either call [NodalForceGroup.Unsketch()](primer-nodalforcegroup-class.md#NodalForceGroup::Unsketch), [NodalForceGroup.UnsketchAll()](primer-nodalforcegroup-class.md#NodalForceGroup::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the nodal force group is sketched. If omitted redraw is true. If you want to sketch several nodal force groups and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch nodal force group nfg:<br>
```
nfg.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged nodal force groups in the model. The nodal force groups will be sketched until you either call [NodalForceGroup.Unsketch()](primer-nodalforcegroup-class.md#NodalForceGroup::Unsketch), [NodalForceGroup.UnsketchFlagged()](primer-nodalforcegroup-class.md#NodalForceGroup::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged nodal force groups will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the nodal force groups that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the nodal force groups are sketched. If omitted redraw is true. If you want to sketch flagged nodal force groups several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all nodal force groups flagged with flag in model m:<br>
```
NodalForceGroup.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of nodal force groups in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing nodal force groups should be counted. If false or omitted
referenced but undefined nodal force groups will also be included in the total.

| Returns
<br>number of nodal force groups<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of nodal force groups in model m:<br>
```
var total = NodalForceGroup.Total(m);
```
 |
| --- |

* * *

| Unblank()

Description<br>Unblanks the nodal force group |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank nodal force group nfg:<br>
```
nfg.Unblank();
```
 |
| --- |

* * *

| UnblankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the nodal force groups in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all nodal force groups will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the nodal force groups in model m:<br>
```
NodalForceGroup.UnblankAll(m);
```
 |
| --- |

* * *

| UnblankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the flagged nodal force groups in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the flagged nodal force groups will be unblanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the nodal force groups that you want to unblank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the nodal force groups in model m flagged with f:<br>
```
NodalForceGroup.UnblankFlagged(m, f);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the nodal force groups in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all nodal force groups will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the nodal force groups

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the nodal force groups in model m:<br>
```
NodalForceGroup.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the nodal force group. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the nodal force group is unsketched. If omitted redraw is true. If you want to unsketch several nodal force groups and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch nodal force group nfg:<br>
```
nfg.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all nodal force groups. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all nodal force groups will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the nodal force groups are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all nodal force groups in model m:<br>
```
NodalForceGroup.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged nodal force groups in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all nodal force groups will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the nodal force groups that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the nodal force groups are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all nodal force groups flagged with flag in model m:<br>
```
NodalForceGroup.UnsketchAll(m, flag);
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
<br>[NodalForceGroup](primer-nodalforcegroup-class.md) object.<br>
Return type
<br>NodalForceGroup |
| --- |

| Example
<br>To check if NodalForceGroup property nfg.example is a parameter by using the [NodalForceGroup.GetParameter()](primer-nodalforcegroup-class.md#NodalForceGroup::GetParameter) method:<br>
```
if (nfg.ViewParameters().GetParameter(nfg.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for nodal force group. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for nodal force group nfg:<br>
```
nfg.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this nodal force group. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for nodal force group nfg:<br>
```
var xrefs = nfg.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the nodal force group data in keyword format. Note that this contains the keyword header and the keyword cards. See also [NodalForceGroup.Keyword()](primer-nodalforcegroup-class.md#NodalForceGroup::Keyword) and [NodalForceGroup.KeywordCards()](primer-nodalforcegroup-class.md#NodalForceGroup::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for nodal force group n in keyword format<br>
```
var s = n.toString();
```
 |
| --- |

* * *