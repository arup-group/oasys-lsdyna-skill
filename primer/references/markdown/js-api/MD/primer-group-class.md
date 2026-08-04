# Group class

The Group class gives you access to groups in PRIMER. [More...](primer-group-class.md#Group_details)

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

* [BlankAll](primer-group-class.md#Group::BlankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [BlankFlagged](primer-group-class.md#Group::BlankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Create](primer-group-class.md#Group::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [First](primer-group-class.md#Group::First)(Model*[[Model](primer-model-class.md)]*)
* [FirstFreeLabel](primer-group-class.md#Group::FirstFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [FlagAll](primer-group-class.md#Group::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-group-class.md#Group::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-group-class.md#Group::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-group-class.md#Group::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-group-class.md#Group::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-group-class.md#Group::Last)(Model*[[Model](primer-model-class.md)]*)
* [LastFreeLabel](primer-group-class.md#Group::LastFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [NextFreeLabel](primer-group-class.md#Group::NextFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [Pick](primer-group-class.md#Group::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [RenumberAll](primer-group-class.md#Group::RenumberAll)(Model*[[Model](primer-model-class.md)]*, start*[integer]*)
* [RenumberFlagged](primer-group-class.md#Group::RenumberFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*)
* [Select](primer-group-class.md#Group::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-group-class.md#Group::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-group-class.md#Group::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnblankAll](primer-group-class.md#Group::UnblankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnblankFlagged](primer-group-class.md#Group::UnblankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [UnflagAll](primer-group-class.md#Group::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-group-class.md#Group::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-group-class.md#Group::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-group-class.md#Group::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Blank](primer-group-class.md#Group::Blank)()
* [Blanked](primer-group-class.md#Group::Blanked)()
* [Browse](primer-group-class.md#Group::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-group-class.md#Group::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-group-class.md#Group::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-group-class.md#Group::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-group-class.md#Group::Edit)(modal (optional)*[boolean]*)
* [Error](primer-group-class.md#Group::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-group-class.md#Group::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-group-class.md#Group::GetComments)()
* [GetDataAll](primer-group-class.md#Group::GetDataAll)(type*[string]*, index*[integer]*)
* [GetDataList](primer-group-class.md#Group::GetDataList)(type*[string]*, index*[integer]*)
* [GetDataRange](primer-group-class.md#Group::GetDataRange)(type*[string]*, index*[integer]*)
* [GetParameter](primer-group-class.md#Group::GetParameter)(prop*[string]*)
* [GetTotalAll](primer-group-class.md#Group::GetTotalAll)(type*[string]*)
* [GetTotalList](primer-group-class.md#Group::GetTotalList)(type*[string]*)
* [GetTotalRange](primer-group-class.md#Group::GetTotalRange)(type*[string]*)
* [GetTotals](primer-group-class.md#Group::GetTotals)(type*[string]*)
* [GetType](primer-group-class.md#Group::GetType)(row*[integer]*)
* [Keyword](primer-group-class.md#Group::Keyword)()
* [KeywordCards](primer-group-class.md#Group::KeywordCards)()
* [Next](primer-group-class.md#Group::Next)()
* [Previous](primer-group-class.md#Group::Previous)()
* [RemoveDataAll](primer-group-class.md#Group::RemoveDataAll)(type*[string]*, index*[integer]*)
* [RemoveDataList](primer-group-class.md#Group::RemoveDataList)(type*[string]*, index*[integer]*)
* [RemoveDataRange](primer-group-class.md#Group::RemoveDataRange)(type*[string]*, index*[integer]*)
* [SetDataAll](primer-group-class.md#Group::SetDataAll)(type*[string]*, index*[integer]*, data*[Array of data]*)
* [SetDataList](primer-group-class.md#Group::SetDataList)(type*[string]*, index*[integer]*, data*[Array of data]*)
* [SetDataRange](primer-group-class.md#Group::SetDataRange)(type*[string]*, index*[integer]*, data*[Array of data]*)
* [SetFlag](primer-group-class.md#Group::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Sketch](primer-group-class.md#Group::Sketch)(redraw (optional)*[boolean]*)
* [Unblank](primer-group-class.md#Group::Unblank)()
* [Unsketch](primer-group-class.md#Group::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-group-class.md#Group::ViewParameters)()
* [Warning](primer-group-class.md#Group::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-group-class.md#Group::Xrefs)()
* [toString](primer-group-class.md#Group::toString)()

## Group constants

| **Name** | **Description** |
| --- | --- |
| Group.ADD | Add contents to group |
| Group.REMOVE | Remove contents from group |

## Group properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists (read only) | logical | true if group exists, false if referred to but not defined. |
| include | integer | The [Include](primer-include-class.md) file number that the group is in. |
| label | integer | [Group](primer-group-class.md) number |
| lock | logical | Whether [Group](primer-group-class.md) contents are locked against deletion. |
| model (read only) | integer | The [Model](primer-model-class.md) number that the group is in. |
| numtypes (read only) | integer | Number of types in the group. |
| title | string | [Group](primer-group-class.md) title |

| Detailed Description<br>The Group class allows you to create, modify, edit and manipulate groups.<br>See the documentation below for more details. |
| --- |

| Constructor
new Group(Model*[[Model](primer-model-class.md)]*, label*[integer]*, title (optional)*[string]*)

Description<br>Create a new [Group](primer-group-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that Group will be created in

* label (integer)
 
[Group](primer-group-class.md) number.

* title (optional) (string)
 
Title for the group

| Returns
<br>[Group](primer-group-class.md) object<br>
Return type
<br>Group |
| --- |

| Example
<br>To create a new group 99 in model m with title "Example":<br>
```
var g = new Group(m, 99, "Example");
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a group. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the group

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the group g:<br>
```
g.AssociateComment(c);
```
 |
| --- |

* * *

| Blank()

Description<br>Blanks the group |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To blank group g:<br>
```
g.Blank();
```
 |
| --- |

* * *

| BlankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the groups in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all groups will be blanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the groups in model m:<br>
```
Group.BlankAll(m);
```
 |
| --- |

* * *

| BlankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the flagged groups in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged groups will be blanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the groups that you want to blank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the groups in model m flagged with f:<br>
```
Group.BlankFlagged(m, f);
```
 |
| --- |

* * *

| Blanked()

Description<br>Checks if the group is blanked or not. |
| --- |

#### Arguments

No arguments

| Returns
<br>true if blanked, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if group g is blanked:<br>
```
if (g.Blanked() ) do_something...
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
<br>To Browse group g:<br>
```
g.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the group. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the group

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for group g:<br>
```
g.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the group. The target include of the copied group can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>Group object<br>
Return type
<br>Group |
| --- |

| Example
<br>To copy group g into group z:<br>
```
var z = g.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a group |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the group will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>Group object (or null if not made).<br>
Return type
<br>Group |
| --- |

| Example
<br>To start creating a group in model m:<br>
```
var g = Group.Create(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a group. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the group

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the group g:<br>
```
g.DetachComment(c);
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
<br>To Edit group g:<br>
```
g.Edit();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for group. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for group g:<br>
```
g.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first group in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first group in

| Returns
<br>Group object (or null if there are no groups in the model).<br>
Return type
<br>Group |
| --- |

| Example
<br>To get the first group in model m:<br>
```
var g = Group.First(m);
```
 |
| --- |

* * *

| FirstFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the first free group label in the model. Also see [Group.LastFreeLabel()](primer-group-class.md#Group::LastFreeLabel), [Group.NextFreeLabel()](primer-group-class.md#Group::NextFreeLabel) and [Model.FirstFreeItemLabel()](primer-model-class.md#Model::FirstFreeItemLabel). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first free group label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *First free in layer* in editing panels). If omitted the whole model will be used (Equivalent to *First free* in editing panels).

| Returns
<br>Group label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the first free group label in model m:<br>
```
var label = Group.FirstFreeLabel(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the groups in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all groups will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the groups

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the groups with flag f in model m:<br>
```
Group.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the group is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the group

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if group g has flag f set on it:<br>
```
if (g.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each group in the model.<br> **Note that ForEach has been designed to make looping over groups as fast as possible and so has some limitations. Firstly, a single temporary Group object is created and on each function call it is updated with the current group data. This means that you should not try to store the Group object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new groups inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all groups are in

* func (function)
 
Function to call for each group

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the groups in model m:<br>
```
Group.ForEach(m, test);
function test(g)
{
// g is Group object
}
```
<br><br>To call function test for all of the groups in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
Group.ForEach(m, test, data);
function test(g, extra)
{
// g is Group object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Group objects or properties for all of the groups in a model in PRIMER. If the optional property argument is not given then an array of Group objects is returned. If the property argument is given, that property value for each group is returned in the array instead of a Group object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get groups from

* property (optional) (string)
 
Name for property to get for all groups in the model

| Returns
<br>Array of Group objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Group objects for all of the groups in model m:<br>
```
var a = Group.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each group in model m:<br>
```
var a = Group.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a group. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the group g:<br>
```
var comm_array = g.GetComments();
```
 |
| --- |

* * *

| GetDataAll(type*[string]*, index*[integer]*)

Description<br>Returns 'all' data for a given row number and type in the group. |
| --- |

#### Arguments

* type (string)
 
The type of the item

* index (integer)
 
Index of 'all' row you want the data for. **Note that indices start at 0, not 1**.
 0 &lt;= index &lt; [Group.GetTotalAll()](primer-group-class.md#Group::GetTotalAll)

| Returns
<br>An array containing data [[Group.ADD](primer-group-class.md#Group.ADD) or [Group.REMOVE](primer-group-class.md#Group.REMOVE), BOX (if defined)].<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the data for the 3rd SHELL 'all' row in group g:<br>
```
var data = g.GetDataAll("SHELL", 2);
```
 |
| --- |

* * *

| GetDataList(type*[string]*, index*[integer]*)

Description<br>Returns 'list' data for a given row number and type in the group. |
| --- |

#### Arguments

* type (string)
 
The type of the item

* index (integer)
 
Index of 'list' row you want the data for. **Note that indices start at 0, not 1**.
 0 &lt;= index &lt; [Group.GetTotalList()](primer-group-class.md#Group::GetTotalList)

| Returns
<br>An array containing data [[Group.ADD](primer-group-class.md#Group.ADD) or [Group.REMOVE](primer-group-class.md#Group.REMOVE), ITEM1 (if defined), ITEM2 (if defined), ITEM3 (if defined), ITEM4 (if defined), ITEM5 (if defined), BOX (if defined)].<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the data for the 3rd SHELL 'list' row in group g:<br>
```
var data = g.GetDataList("SHELL", 2);
```
 |
| --- |

* * *

| GetDataRange(type*[string]*, index*[integer]*)

Description<br>Returns 'range' data for a given row number and type in the group. |
| --- |

#### Arguments

* type (string)
 
The type of the item

* index (integer)
 
Index of 'range' row you want the data for. **Note that indices start at 0, not 1**.
 0 &lt;= index &lt; [Group.GetTotalRange()](primer-group-class.md#Group::GetTotalRange)

| Returns
<br>An array containing data [[Group.ADD](primer-group-class.md#Group.ADD) or [Group.REMOVE](primer-group-class.md#Group.REMOVE), START, END, BOX (if defined)].<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the data for the 3rd SHELL 'range' row in group g:<br>
```
var data = g.GetDataRange("SHELL", 2);
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Group objects for all of the flagged groups in a model in PRIMER If the optional property argument is not given then an array of Group objects is returned. If the property argument is given, then that property value for each group is returned in the array instead of a Group object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get groups from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the groups that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged groups in the model

| Returns
<br>Array of Group objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Group objects for all of the groups in model m flagged with f:<br>
```
var g = Group.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the groups in model m flagged with f:<br>
```
var a = Group.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the Group object for a group ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the group in

* number (integer)
 
number of the group you want the Group object for

| Returns
<br>Group object (or null if group does not exist).<br>
Return type
<br>Group |
| --- |

| Example
<br>To get the Group object for group 100 in model m<br>
```
var g = Group.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a Group property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [Group.ViewParameters()](primer-group-class.md#Group::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
group property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if Group property g.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (g.GetParameter(g.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if Group property g.example is a parameter by using the GetParameter method:<br>
```
if (g.ViewParameters().GetParameter(g.example) ) do_something...
```
 |
| --- |

* * *

| GetTotalAll(type*[string]*)

Description<br>Returns the total number of 'all' rows for a type in a group |
| --- |

#### Arguments

* type (string)
 
The type of the item

| Returns
<br>The number of 'all' rows defined<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of shell 'all' rows in group g:<br>
```
var nrow = g.GetTotalAll("SHELL");
```
 |
| --- |

* * *

| GetTotalList(type*[string]*)

Description<br>Returns the total number of 'list' rows for a type in a group |
| --- |

#### Arguments

* type (string)
 
The type of the item

| Returns
<br>The number of 'list' rows defined<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of shell 'list' rows in group g:<br>
```
var nrow = g.GetTotalList("SHELL");
```
 |
| --- |

* * *

| GetTotalRange(type*[string]*)

Description<br>Returns the total number of 'range' rows for a type in a group |
| --- |

#### Arguments

* type (string)
 
The type of the item

| Returns
<br>The number of 'range' rows defined<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of shell 'range' rows in group g:<br>
```
var nrow = g.GetTotalRange("SHELL");
```
 |
| --- |

* * *

| GetTotals(type*[string]*)

Description<br>Returns the total number of 'all', 'list' and 'range' rows for a type in a group |
| --- |

#### Arguments

* type (string)
 
The type of the item

| Returns
<br>Array containing number of 'all', 'list' and 'range' rows defined or null if type not in group.<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the total number of shell 'all', 'list' and 'range' rows in group g:<br>
```
var totals = g.GetTotals("SHELL");
var nall   = totals[0];
var nlist  = totals[1];
var nrange = totals[2];
```
 |
| --- |

* * *

| GetType(row*[integer]*)

Description<br>Returns the type for an entry in a group |
| --- |

#### Arguments

* row (integer)
 
The entry in the group types that you want the type for. **Note that entries start at 0, not 1**

| Returns
<br>The type of the item (string)<br>
Return type
<br>String |
| --- |

| Example
<br>To list the types that are present in group g:<br>
```
for (var t=0; t<g.numtypes; t++)
{
    var type = g.GetType(t);
    Message(type);
}

```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this group. **Note that a carriage return is not added**. See also [Group.KeywordCards()](primer-group-class.md#Group::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for goup g:<br>
```
var key = g.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the Group. **Note that a carriage return is not added**. See also [Group.Keyword()](primer-group-class.md#Group::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for Group g:<br>
```
var cards = g.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last group in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last group in

| Returns
<br>Group object (or null if there are no groups in the model).<br>
Return type
<br>Group |
| --- |

| Example
<br>To get the last group in model m:<br>
```
var g = Group.Last(m);
```
 |
| --- |

* * *

| LastFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the last free group label in the model. Also see [Group.FirstFreeLabel()](primer-group-class.md#Group::FirstFreeLabel), [Group.NextFreeLabel()](primer-group-class.md#Group::NextFreeLabel) and see [Model.LastFreeItemLabel()](primer-model-class.md#Model::LastFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last free group label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest free in layer* in editing panels). If omitted the whole model will be used.

| Returns
<br>Group label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the last free group label in model m:<br>
```
var label = Group.LastFreeLabel(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next group in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Group object (or null if there are no more groups in the model).<br>
Return type
<br>Group |
| --- |

| Example
<br>To get the group in model m after group g:<br>
```
var g = g.Next();
```
 |
| --- |

* * *

| NextFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the next free (highest+1) group label in the model. Also see [Group.FirstFreeLabel()](primer-group-class.md#Group::FirstFreeLabel), [Group.LastFreeLabel()](primer-group-class.md#Group::LastFreeLabel) and [Model.NextFreeItemLabel()](primer-model-class.md#Model::NextFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get next free group label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest+1 in layer* in editing panels). If omitted the whole model will be used (Equivalent to *Highest+1* in editing panels).

| Returns
<br>Group label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the next free group label in model m:<br>
```
var label = Group.NextFreeLabel(m);
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a group. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only groups from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only groups that are flagged with *limit* can be selected. If omitted, or null, any groups from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[Group](primer-group-class.md) object (or null if not picked)<br>
Return type
<br>Group |
| --- |

| Example
<br>To pick a group from model m giving the prompt 'Pick group from screen':<br>
```
var g = Group.Pick('Pick group from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous group in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Group object (or null if there are no more groups in the model).<br>
Return type
<br>Group |
| --- |

| Example
<br>To get the group in model m before group g:<br>
```
var g = g.Previous();
```
 |
| --- |

* * *

| RemoveDataAll(type*[string]*, index*[integer]*)

Description<br>Removes 'all' data for a given row number and type in the group. |
| --- |

#### Arguments

* type (string)
 
The type of the item

* index (integer)
 
Index of 'all' row you want to Remove. **Note that indices start at 0, not 1**.
 0 &lt;= index &lt; [Group.GetTotalAll()](primer-group-class.md#Group::GetTotalAll)

| Returns
<br>No return value |
| --- |

| Example
<br>To remove the data for the 3rd SHELL 'all' row in group g:<br>
```
g.RemoveDataAll("SHELL", 2);
```
 |
| --- |

* * *

| RemoveDataList(type*[string]*, index*[integer]*)

Description<br>Removes 'list' data for a given row number and type in the group. |
| --- |

#### Arguments

* type (string)
 
The type of the item

* index (integer)
 
Index of 'list' row you want to Remove. **Note that indices start at 0, not 1**.
 0 &lt;= index &lt; [Group.GetTotalList()](primer-group-class.md#Group::GetTotalList)

| Returns
<br>No return value |
| --- |

| Example
<br>To remove the data for the 3rd SHELL 'list' row in group g:<br>
```
g.RemoveDataList("SHELL", 2);
```
 |
| --- |

* * *

| RemoveDataRange(type*[string]*, index*[integer]*)

Description<br>Removes 'range' data for a given row number and type in the group. |
| --- |

#### Arguments

* type (string)
 
The type of the item

* index (integer)
 
Index of 'range' row you want to Remove. **Note that indices start at 0, not 1**.
 0 &lt;= index &lt; [Group.GetTotalRange()](primer-group-class.md#Group::GetTotalRange)

| Returns
<br>No return value |
| --- |

| Example
<br>To remove the data for the 3rd SHELL 'range' row in group g:<br>
```
g.RemoveDataRange("SHELL", 2);
```
 |
| --- |

* * *

| RenumberAll(Model*[[Model](primer-model-class.md)]*, start*[integer]*) [static]
Description<br>Renumbers all of the groups in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all groups will be renumbered in

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the groups in model m, from 1000000:<br>
```
Group.RenumberAll(m, 1000000);
```
 |
| --- |

* * *

| RenumberFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*) [static]
Description<br>Renumbers all of the flagged groups in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged groups will be renumbered in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the groups that you want to renumber

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the groups in model m flagged with f, from 1000000:<br>
```
Group.RenumberFlagged(m, f, 1000000);
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select groups using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting groups

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only groups from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only groups that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any groups can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of groups selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select groups from model m, flagging those selected with flag f, giving the prompt 'Select groups':<br>
```
Group.Select(f, 'Select groups', m);
```
<br><br>To select groups, flagging those selected with flag f but limiting selection to groups flagged with flag l, giving the prompt 'Select groups':<br>
```
Group.Select(f, 'Select groups', l);
```
 |
| --- |

* * *

| SetDataAll(type*[string]*, index*[integer]*, data*[Array of data]*)

Description<br>Sets 'all' data for a given row number and type in the group. |
| --- |

#### Arguments

* type (string)
 
The type of the item

* index (integer)
 
Index of 'all' row you want the data for. **Note that indices start at 0, not 1**.
 0 &lt;= index &lt;= [Group.GetTotalAll()](primer-group-class.md#Group::GetTotalAll)

* data (Array of data)
 
An array containing data [[Group.ADD](primer-group-class.md#Group.ADD) or [Group.REMOVE](primer-group-class.md#Group.REMOVE), BOX (if defined)].

| Returns
<br>No return value |
| --- |

| Example
<br>To set the data for the 3rd SHELL 'all' row in group g to 'add box 10':<br>
```
var data = [Group.ADD, 10];
g.SetDataAll("SHELL", 2, data);
```
 |
| --- |

* * *

| SetDataList(type*[string]*, index*[integer]*, data*[Array of data]*)

Description<br>Sets 'list' data for a given row number and type in the group. |
| --- |

#### Arguments

* type (string)
 
The type of the item

* index (integer)
 
Index of 'list' row you want the data for. **Note that indices start at 0, not 1**.
 0 &lt;= index &lt;= [Group.GetTotalList()](primer-group-class.md#Group::GetTotalList)

* data (Array of data)
 
An array containing data [[Group.ADD](primer-group-class.md#Group.ADD) or [Group.REMOVE](primer-group-class.md#Group.REMOVE), ITEM1 (if defined), ITEM2 (if defined), ITEM3 (if defined), ITEM4 (if defined), ITEM5 (if defined), BOX (if defined)].

| Returns
<br>No return value |
| --- |

| Example
<br>To set the data for the 3rd SHELL 'list' row in group g to 'add 1 2 box 10':<br>
```
var data = [Group.ADD, 1, 2, 0, 0, 0, 10];
g.SetDataList("SHELL", 2, data);
```
 |
| --- |

* * *

| SetDataRange(type*[string]*, index*[integer]*, data*[Array of data]*)

Description<br>Sets 'range' data for a given row number and type in the group. |
| --- |

#### Arguments

* type (string)
 
The type of the item

* index (integer)
 
Index of 'all' row you want the data for. **Note that indices start at 0, not 1**.
 0 &lt;= index &lt;= [Group.GetTotalRange()](primer-group-class.md#Group::GetTotalRange)

* data (Array of data)
 
An array containing data [[Group.ADD](primer-group-class.md#Group.ADD) or [Group.REMOVE](primer-group-class.md#Group.REMOVE), START, END, BOX (if defined)].

| Returns
<br>No return value |
| --- |

| Example
<br>To set the data for the 3rd SHELL 'range' row in group g to 'add 100 200 box 10':<br>
```
var data = [Group.ADD, 100, 200, 10];
g.SetDataRange("SHELL", 2, data);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the group. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the group

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for group g:<br>
```
g.SetFlag(f);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the group. The group will be sketched until you either call [Group.Unsketch()](primer-group-class.md#Group::Unsketch), [Group.UnsketchAll()](primer-group-class.md#Group::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the group is sketched. If omitted redraw is true. If you want to sketch several groups and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch group g:<br>
```
g.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged groups in the model. The groups will be sketched until you either call [Group.Unsketch()](primer-group-class.md#Group::Unsketch), [Group.UnsketchFlagged()](primer-group-class.md#Group::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged groups will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the groups that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the groups are sketched. If omitted redraw is true. If you want to sketch flagged groups several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all groups flagged with flag in model m:<br>
```
Group.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of groups in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing groups should be counted. If false or omitted
referenced but undefined groups will also be included in the total.

| Returns
<br>number of groups<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of groups in model m:<br>
```
var total = Group.Total(m);
```
 |
| --- |

* * *

| Unblank()

Description<br>Unblanks the group |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank group g:<br>
```
g.Unblank();
```
 |
| --- |

* * *

| UnblankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the groups in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all groups will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the groups in model m:<br>
```
Group.UnblankAll(m);
```
 |
| --- |

* * *

| UnblankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the flagged groups in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the flagged groups will be unblanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the groups that you want to unblank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the groups in model m flagged with f:<br>
```
Group.UnblankFlagged(m, f);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the groups in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all groups will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the groups

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the groups in model m:<br>
```
Group.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the group. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the group is unsketched. If omitted redraw is true. If you want to unsketch several groups and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch group g:<br>
```
g.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all groups. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all groups will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the groups are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all groups in model m:<br>
```
Group.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged groups in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all groups will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the groups that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the groups are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all groups flagged with flag in model m:<br>
```
Group.UnsketchAll(m, flag);
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
<br>[Group](primer-group-class.md) object.<br>
Return type
<br>Group |
| --- |

| Example
<br>To check if Group property g.example is a parameter by using the [Group.GetParameter()](primer-group-class.md#Group::GetParameter) method:<br>
```
if (g.ViewParameters().GetParameter(g.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for group. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for group g:<br>
```
g.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this group. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for group g:<br>
```
var xrefs = g.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the Group data in keyword format. Note that this contains the keyword header and the keyword cards. See also [Group.Keyword()](primer-group-class.md#Group::Keyword) and [Group.KeywordCards()](primer-group-class.md#Group::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for Group g in keyword format<br>
```
var s = g.toString();
```
 |
| --- |

* * *