# ShellReferenceGeometry class

The ShellReferenceGeometry class gives you access to airbag shell reference geometry cards in PRIMER. [More...](primer-shellreferencegeometry-class.md#ShellReferenceGeometry_details)

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

* [Create](primer-shellreferencegeometry-class.md#ShellReferenceGeometry::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [First](primer-shellreferencegeometry-class.md#ShellReferenceGeometry::First)(Model*[[Model](primer-model-class.md)]*)
* [FirstFreeLabel](primer-shellreferencegeometry-class.md#ShellReferenceGeometry::FirstFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [FlagAll](primer-shellreferencegeometry-class.md#ShellReferenceGeometry::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-shellreferencegeometry-class.md#ShellReferenceGeometry::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-shellreferencegeometry-class.md#ShellReferenceGeometry::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-shellreferencegeometry-class.md#ShellReferenceGeometry::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-shellreferencegeometry-class.md#ShellReferenceGeometry::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-shellreferencegeometry-class.md#ShellReferenceGeometry::Last)(Model*[[Model](primer-model-class.md)]*)
* [LastFreeLabel](primer-shellreferencegeometry-class.md#ShellReferenceGeometry::LastFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [NextFreeLabel](primer-shellreferencegeometry-class.md#ShellReferenceGeometry::NextFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [Pick](primer-shellreferencegeometry-class.md#ShellReferenceGeometry::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [RenumberAll](primer-shellreferencegeometry-class.md#ShellReferenceGeometry::RenumberAll)(Model*[[Model](primer-model-class.md)]*, start*[integer]*)
* [RenumberFlagged](primer-shellreferencegeometry-class.md#ShellReferenceGeometry::RenumberFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*)
* [Select](primer-shellreferencegeometry-class.md#ShellReferenceGeometry::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-shellreferencegeometry-class.md#ShellReferenceGeometry::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-shellreferencegeometry-class.md#ShellReferenceGeometry::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnflagAll](primer-shellreferencegeometry-class.md#ShellReferenceGeometry::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-shellreferencegeometry-class.md#ShellReferenceGeometry::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-shellreferencegeometry-class.md#ShellReferenceGeometry::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-shellreferencegeometry-class.md#ShellReferenceGeometry::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Browse](primer-shellreferencegeometry-class.md#ShellReferenceGeometry::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-shellreferencegeometry-class.md#ShellReferenceGeometry::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-shellreferencegeometry-class.md#ShellReferenceGeometry::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-shellreferencegeometry-class.md#ShellReferenceGeometry::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-shellreferencegeometry-class.md#ShellReferenceGeometry::Edit)(modal (optional)*[boolean]*)
* [Error](primer-shellreferencegeometry-class.md#ShellReferenceGeometry::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-shellreferencegeometry-class.md#ShellReferenceGeometry::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-shellreferencegeometry-class.md#ShellReferenceGeometry::GetComments)()
* [GetParameter](primer-shellreferencegeometry-class.md#ShellReferenceGeometry::GetParameter)(prop*[string]*)
* [GetShell](primer-shellreferencegeometry-class.md#ShellReferenceGeometry::GetShell)(eid*[integer]*)
* [Keyword](primer-shellreferencegeometry-class.md#ShellReferenceGeometry::Keyword)()
* [KeywordCards](primer-shellreferencegeometry-class.md#ShellReferenceGeometry::KeywordCards)()
* [Next](primer-shellreferencegeometry-class.md#ShellReferenceGeometry::Next)()
* [Previous](primer-shellreferencegeometry-class.md#ShellReferenceGeometry::Previous)()
* [RemoveShell](primer-shellreferencegeometry-class.md#ShellReferenceGeometry::RemoveShell)(eid*[integer]*)
* [SetFlag](primer-shellreferencegeometry-class.md#ShellReferenceGeometry::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [SetShell](primer-shellreferencegeometry-class.md#ShellReferenceGeometry::SetShell)(eid*[integer]*, n1*[integer]*, n2*[integer]*, n3*[integer]*, n4*[integer]*, pid (optional)*[integer]*)
* [Sketch](primer-shellreferencegeometry-class.md#ShellReferenceGeometry::Sketch)(redraw (optional)*[boolean]*)
* [Spool](primer-shellreferencegeometry-class.md#ShellReferenceGeometry::Spool)()
* [StartSpool](primer-shellreferencegeometry-class.md#ShellReferenceGeometry::StartSpool)()
* [Unsketch](primer-shellreferencegeometry-class.md#ShellReferenceGeometry::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-shellreferencegeometry-class.md#ShellReferenceGeometry::ViewParameters)()
* [Warning](primer-shellreferencegeometry-class.md#ShellReferenceGeometry::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-shellreferencegeometry-class.md#ShellReferenceGeometry::Xrefs)()
* [toString](primer-shellreferencegeometry-class.md#ShellReferenceGeometry::toString)()

## ShellReferenceGeometry properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| aid | integer | [ShellReferenceGeometry](primer-shellreferencegeometry-class.md) number. Also see the [label](primer-shellreferencegeometry-class.md#label) property which is an alternative name for this. |
| exists (read only) | logical | true if airbag shell reference geometry exists, false if referred to but not defined. |
| id | logical | Turns \_ID on or OFF |
| include | integer | The [Include](primer-include-class.md) file number that the airbag shell reference geometry is in. |
| iout | integer | Flag for outputting the current reference node coordinates |
| label | integer | [ShellReferenceGeometry](primer-shellreferencegeometry-class.md) number. Also see the [aid](primer-shellreferencegeometry-class.md#aid) property which is an alternative name for this. |
| model (read only) | integer | The [Model](primer-model-class.md) number that the airbag shell reference geometry is in. |
| nid | integer | [Node](primer-node-class.md) number for origin |
| rdt | logical | Turns \_RDT on or OFF |
| sx | real | Scale factor in X direction |
| sy | real | Scale factor in Y direction |
| sz | real | Scale factor in Z direction |

| Detailed Description<br>The ShellReferenceGeometry class allows you to create, modify, edit and manipulate airbag shell reference geometry cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new ShellReferenceGeometry(Model*[[Model](primer-model-class.md)]*, aid (optional)*[integer]*)

Description<br>Create a new [ShellReferenceGeometry](primer-shellreferencegeometry-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that ShellReferenceGeometry will be created in

* aid (optional) (integer)
 
[ShellReferenceGeometry](primer-shellreferencegeometry-class.md) number to set \_ID suffix

| Returns
<br>[ShellReferenceGeometry](primer-shellreferencegeometry-class.md) object<br>
Return type
<br>ShellReferenceGeometry |
| --- |

| Example
<br>To create a new ShellReferenceGeometry in model m<br>
```
var a = new ShellReferenceGeometry(m);
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a airbag shell reference geometry. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the airbag shell reference geometry

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the airbag shell reference geometry a:<br>
```
a.AssociateComment(c);
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
<br>To Browse airbag shell reference geometry a:<br>
```
a.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the airbag shell reference geometry. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the airbag shell reference geometry

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for airbag shell reference geometry a:<br>
```
a.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the airbag shell reference geometry. The target include of the copied airbag shell reference geometry can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>ShellReferenceGeometry object<br>
Return type
<br>ShellReferenceGeometry |
| --- |

| Example
<br>To copy airbag shell reference geometry a into airbag shell reference geometry z:<br>
```
var z = a.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a airbag shell reference geometry |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the airbag shell reference geometry will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>ShellReferenceGeometry object (or null if not made).<br>
Return type
<br>ShellReferenceGeometry |
| --- |

| Example
<br>To start creating a airbag shell reference geometry in model m:<br>
```
var a = ShellReferenceGeometry.Create(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a airbag shell reference geometry. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the airbag shell reference geometry

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the airbag shell reference geometry a:<br>
```
a.DetachComment(c);
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
<br>To Edit airbag shell reference geometry a:<br>
```
a.Edit();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for airbag shell reference geometry. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for airbag shell reference geometry a:<br>
```
a.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first airbag shell reference geometry in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first airbag shell reference geometry in

| Returns
<br>ShellReferenceGeometry object (or null if there are no airbag shell reference geometrys in the model).<br>
Return type
<br>ShellReferenceGeometry |
| --- |

| Example
<br>To get the first airbag shell reference geometry in model m:<br>
```
var a = ShellReferenceGeometry.First(m);
```
 |
| --- |

* * *

| FirstFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the first free airbag shell reference geometry label in the model. Also see [ShellReferenceGeometry.LastFreeLabel()](primer-shellreferencegeometry-class.md#ShellReferenceGeometry::LastFreeLabel), [ShellReferenceGeometry.NextFreeLabel()](primer-shellreferencegeometry-class.md#ShellReferenceGeometry::NextFreeLabel) and [Model.FirstFreeItemLabel()](primer-model-class.md#Model::FirstFreeItemLabel). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first free airbag shell reference geometry label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *First free in layer* in editing panels). If omitted the whole model will be used (Equivalent to *First free* in editing panels).

| Returns
<br>ShellReferenceGeometry label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the first free airbag shell reference geometry label in model m:<br>
```
var label = ShellReferenceGeometry.FirstFreeLabel(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the airbag shell reference geometrys in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all airbag shell reference geometrys will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the airbag shell reference geometrys

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the airbag shell reference geometrys with flag f in model m:<br>
```
ShellReferenceGeometry.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the airbag shell reference geometry is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the airbag shell reference geometry

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if airbag shell reference geometry a has flag f set on it:<br>
```
if (a.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each airbag shell reference geometry in the model.<br> **Note that ForEach has been designed to make looping over airbag shell reference geometrys as fast as possible and so has some limitations. Firstly, a single temporary ShellReferenceGeometry object is created and on each function call it is updated with the current airbag shell reference geometry data. This means that you should not try to store the ShellReferenceGeometry object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new airbag shell reference geometrys inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all airbag shell reference geometrys are in

* func (function)
 
Function to call for each airbag shell reference geometry

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the airbag shell reference geometrys in model m:<br>
```
ShellReferenceGeometry.ForEach(m, test);
function test(a)
{
// a is ShellReferenceGeometry object
}
```
<br><br>To call function test for all of the airbag shell reference geometrys in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
ShellReferenceGeometry.ForEach(m, test, data);
function test(a, extra)
{
// a is ShellReferenceGeometry object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of ShellReferenceGeometry objects or properties for all of the airbag shell reference geometrys in a model in PRIMER. If the optional property argument is not given then an array of ShellReferenceGeometry objects is returned. If the property argument is given, that property value for each airbag shell reference geometry is returned in the array instead of a ShellReferenceGeometry object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get airbag shell reference geometrys from

* property (optional) (string)
 
Name for property to get for all airbag shell reference geometrys in the model

| Returns
<br>Array of ShellReferenceGeometry objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of ShellReferenceGeometry objects for all of the airbag shell reference geometrys in model m:<br>
```
var a = ShellReferenceGeometry.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each airbag shell reference geometry in model m:<br>
```
var a = ShellReferenceGeometry.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a airbag shell reference geometry. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the airbag shell reference geometry a:<br>
```
var comm_array = a.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of ShellReferenceGeometry objects for all of the flagged airbag shell reference geometrys in a model in PRIMER If the optional property argument is not given then an array of ShellReferenceGeometry objects is returned. If the property argument is given, then that property value for each airbag shell reference geometry is returned in the array instead of a ShellReferenceGeometry object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get airbag shell reference geometrys from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the airbag shell reference geometrys that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged airbag shell reference geometrys in the model

| Returns
<br>Array of ShellReferenceGeometry objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of ShellReferenceGeometry objects for all of the airbag shell reference geometrys in model m flagged with f:<br>
```
var a = ShellReferenceGeometry.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the airbag shell reference geometrys in model m flagged with f:<br>
```
var a = ShellReferenceGeometry.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the ShellReferenceGeometry object for a airbag shell reference geometry ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the airbag shell reference geometry in

* number (integer)
 
number of the airbag shell reference geometry you want the ShellReferenceGeometry object for

| Returns
<br>ShellReferenceGeometry object (or null if airbag shell reference geometry does not exist).<br>
Return type
<br>ShellReferenceGeometry |
| --- |

| Example
<br>To get the ShellReferenceGeometry object for airbag shell reference geometry 100 in model m<br>
```
var a = ShellReferenceGeometry.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a ShellReferenceGeometry property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [ShellReferenceGeometry.ViewParameters()](primer-shellreferencegeometry-class.md#ShellReferenceGeometry::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
airbag shell reference geometry property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if ShellReferenceGeometry property a.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (a.GetParameter(a.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if ShellReferenceGeometry property a.example is a parameter by using the GetParameter method:<br>
```
if (a.ViewParameters().GetParameter(a.example) ) do_something...
```
 |
| --- |

* * *

| GetShell(eid*[integer]*)

Description<br>Returns the shell reference geometry nodes and pid for the shell |
| --- |

#### Arguments

* eid (integer)
 
Shell element ID

| Returns
<br>An array containing the four reference node labels and the part ID (or null if the shell is not on the shell reference geometry)<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the node and part data of shell number eid on shell reference geometry a<br>
```
var data = a.GetShell(eid);
var n1 = data[0];
var n2 = data[1];
var n3 = data[2];
var n4 = data[3];
var pid = data[4];
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this shell\_reference\_geometry (\*AIRBAG\_SHELL\_REFERENCE\_GEOMETRY). **Note that a carriage return is not added**. See also [ShellReferenceGeometry.KeywordCards()](primer-shellreferencegeometry-class.md#ShellReferenceGeometry::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for shell\_reference\_geometry a:<br>
```
var key = a.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the shell\_reference\_geometry. **Note that a carriage return is not added**. See also [ShellReferenceGeometry.Keyword()](primer-shellreferencegeometry-class.md#ShellReferenceGeometry::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for airbag shell reference geometry a:<br>
```
var cards = b.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last airbag shell reference geometry in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last airbag shell reference geometry in

| Returns
<br>ShellReferenceGeometry object (or null if there are no airbag shell reference geometrys in the model).<br>
Return type
<br>ShellReferenceGeometry |
| --- |

| Example
<br>To get the last airbag shell reference geometry in model m:<br>
```
var a = ShellReferenceGeometry.Last(m);
```
 |
| --- |

* * *

| LastFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the last free airbag shell reference geometry label in the model. Also see [ShellReferenceGeometry.FirstFreeLabel()](primer-shellreferencegeometry-class.md#ShellReferenceGeometry::FirstFreeLabel), [ShellReferenceGeometry.NextFreeLabel()](primer-shellreferencegeometry-class.md#ShellReferenceGeometry::NextFreeLabel) and see [Model.LastFreeItemLabel()](primer-model-class.md#Model::LastFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last free airbag shell reference geometry label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest free in layer* in editing panels). If omitted the whole model will be used.

| Returns
<br>ShellReferenceGeometry label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the last free airbag shell reference geometry label in model m:<br>
```
var label = ShellReferenceGeometry.LastFreeLabel(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next airbag shell reference geometry in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>ShellReferenceGeometry object (or null if there are no more airbag shell reference geometrys in the model).<br>
Return type
<br>ShellReferenceGeometry |
| --- |

| Example
<br>To get the airbag shell reference geometry in model m after airbag shell reference geometry a:<br>
```
var a = a.Next();
```
 |
| --- |

* * *

| NextFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the next free (highest+1) airbag shell reference geometry label in the model. Also see [ShellReferenceGeometry.FirstFreeLabel()](primer-shellreferencegeometry-class.md#ShellReferenceGeometry::FirstFreeLabel), [ShellReferenceGeometry.LastFreeLabel()](primer-shellreferencegeometry-class.md#ShellReferenceGeometry::LastFreeLabel) and [Model.NextFreeItemLabel()](primer-model-class.md#Model::NextFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get next free airbag shell reference geometry label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest+1 in layer* in editing panels). If omitted the whole model will be used (Equivalent to *Highest+1* in editing panels).

| Returns
<br>ShellReferenceGeometry label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the next free airbag shell reference geometry label in model m:<br>
```
var label = ShellReferenceGeometry.NextFreeLabel(m);
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a airbag shell reference geometry. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only airbag shell reference geometrys from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only airbag shell reference geometrys that are flagged with *limit* can be selected. If omitted, or null, any airbag shell reference geometrys from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[ShellReferenceGeometry](primer-shellreferencegeometry-class.md) object (or null if not picked)<br>
Return type
<br>ShellReferenceGeometry |
| --- |

| Example
<br>To pick a airbag shell reference geometry from model m giving the prompt 'Pick airbag shell reference geometry from screen':<br>
```
var a = ShellReferenceGeometry.Pick('Pick airbag shell reference geometry from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous airbag shell reference geometry in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>ShellReferenceGeometry object (or null if there are no more airbag shell reference geometrys in the model).<br>
Return type
<br>ShellReferenceGeometry |
| --- |

| Example
<br>To get the airbag shell reference geometry in model m before airbag shell reference geometry a:<br>
```
var a = a.Previous();
```
 |
| --- |

* * *

| RemoveShell(eid*[integer]*)

Description<br>Removes a shell from the shell reference geometry if it is on it |
| --- |

#### Arguments

* eid (integer)
 
Element ID

| Returns
<br>No return value. |
| --- |

| Example
<br>To remove shell 11 from shell reference geometry a:<br>
```
a.RemoveShell(11);
```
 |
| --- |

* * *

| RenumberAll(Model*[[Model](primer-model-class.md)]*, start*[integer]*) [static]
Description<br>Renumbers all of the airbag shell reference geometrys in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all airbag shell reference geometrys will be renumbered in

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the airbag shell reference geometrys in model m, from 1000000:<br>
```
ShellReferenceGeometry.RenumberAll(m, 1000000);
```
 |
| --- |

* * *

| RenumberFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*) [static]
Description<br>Renumbers all of the flagged airbag shell reference geometrys in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged airbag shell reference geometrys will be renumbered in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the airbag shell reference geometrys that you want to renumber

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the airbag shell reference geometrys in model m flagged with f, from 1000000:<br>
```
ShellReferenceGeometry.RenumberFlagged(m, f, 1000000);
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select airbag shell reference geometrys using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting airbag shell reference geometrys

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only airbag shell reference geometrys from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only airbag shell reference geometrys that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any airbag shell reference geometrys can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of airbag shell reference geometrys selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select airbag shell reference geometrys from model m, flagging those selected with flag f, giving the prompt 'Select airbag shell reference geometrys':<br>
```
ShellReferenceGeometry.Select(f, 'Select airbag shell reference geometrys', m);
```
<br><br>To select airbag shell reference geometrys, flagging those selected with flag f but limiting selection to airbag shell reference geometrys flagged with flag l, giving the prompt 'Select airbag shell reference geometrys':<br>
```
ShellReferenceGeometry.Select(f, 'Select airbag shell reference geometrys', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the airbag shell reference geometry. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the airbag shell reference geometry

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for airbag shell reference geometry a:<br>
```
a.SetFlag(f);
```
 |
| --- |

* * *

| SetShell(eid*[integer]*, n1*[integer]*, n2*[integer]*, n3*[integer]*, n4*[integer]*, pid (optional)*[integer]*)

Description<br>Adds a shell to the shell reference geometry if not already there, otherwise just changes the reference nodes |
| --- |

#### Arguments

* eid (integer)
 
Element ID

* n1 (integer)
 
Nodal point 1

* n2 (integer)
 
Nodal point 2

* n3 (integer)
 
Nodal point 3

* n4 (integer)
 
Nodal point 4

* pid (optional) (integer)
 
Part ID (ignored by Ansys LS-DYNA). If omitted pid will be zero.

| Returns
<br>No return value. |
| --- |

| Example
<br>To add shell 11 to shell reference geometry a with nodal points 12, 13, 14, 15 (and part ID 0):<br>
```
a.SetShell(11, 12, 13, 14, 15);
```
<br><br>To add shell 11 to shell reference geometry a with nodal points 12, 13, 14, 15 and pid 100:<br>
```
a.SetShell(11, 12, 13, 14, 15, 100);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the airbag shell reference geometry. The airbag shell reference geometry will be sketched until you either call [ShellReferenceGeometry.Unsketch()](primer-shellreferencegeometry-class.md#ShellReferenceGeometry::Unsketch), [ShellReferenceGeometry.UnsketchAll()](primer-shellreferencegeometry-class.md#ShellReferenceGeometry::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the airbag shell reference geometry is sketched. If omitted redraw is true. If you want to sketch several airbag shell reference geometrys and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch airbag shell reference geometry a:<br>
```
a.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged airbag shell reference geometrys in the model. The airbag shell reference geometrys will be sketched until you either call [ShellReferenceGeometry.Unsketch()](primer-shellreferencegeometry-class.md#ShellReferenceGeometry::Unsketch), [ShellReferenceGeometry.UnsketchFlagged()](primer-shellreferencegeometry-class.md#ShellReferenceGeometry::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged airbag shell reference geometrys will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the airbag shell reference geometrys that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the airbag shell reference geometrys are sketched. If omitted redraw is true. If you want to sketch flagged airbag shell reference geometrys several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all airbag shell reference geometrys flagged with flag in model m:<br>
```
ShellReferenceGeometry.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Spool()

Description<br>Spools a shell reference geometry, entry by entry. See also [ShellReferenceGeometry.StartSpool](primer-shellreferencegeometry-class.md#ShellReferenceGeometry::StartSpool) |
| --- |

#### Arguments

No arguments

| Returns
<br>Returns an array containing the shell ID and the four nodal point labels. Returns 0 if no more items<br>
Return type
<br>Array |
| --- |

| Example
<br>To spool shell reference geometry a:<br>
```
var array;
a.StartSpool();
while (array = a.Spool())
{
    do something...
}
```
 |
| --- |

* * *

| StartSpool()

Description<br>Starts a shell reference geometry spooling operation. See also [ShellReferenceGeometry.Spool](primer-shellreferencegeometry-class.md#ShellReferenceGeometry::Spool) |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To start spooling shell reference geometry a:<br>
```
a.StartSpool();
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of airbag shell reference geometrys in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing airbag shell reference geometrys should be counted. If false or omitted
referenced but undefined airbag shell reference geometrys will also be included in the total.

| Returns
<br>number of airbag shell reference geometrys<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of airbag shell reference geometrys in model m:<br>
```
var total = ShellReferenceGeometry.Total(m);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the airbag shell reference geometrys in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all airbag shell reference geometrys will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the airbag shell reference geometrys

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the airbag shell reference geometrys in model m:<br>
```
ShellReferenceGeometry.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the airbag shell reference geometry. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the airbag shell reference geometry is unsketched. If omitted redraw is true. If you want to unsketch several airbag shell reference geometrys and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch airbag shell reference geometry a:<br>
```
a.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all airbag shell reference geometrys. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all airbag shell reference geometrys will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the airbag shell reference geometrys are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all airbag shell reference geometrys in model m:<br>
```
ShellReferenceGeometry.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged airbag shell reference geometrys in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all airbag shell reference geometrys will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the airbag shell reference geometrys that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the airbag shell reference geometrys are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all airbag shell reference geometrys flagged with flag in model m:<br>
```
ShellReferenceGeometry.UnsketchAll(m, flag);
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
<br>[ShellReferenceGeometry](primer-shellreferencegeometry-class.md) object.<br>
Return type
<br>ShellReferenceGeometry |
| --- |

| Example
<br>To check if ShellReferenceGeometry property a.example is a parameter by using the [ShellReferenceGeometry.GetParameter()](primer-shellreferencegeometry-class.md#ShellReferenceGeometry::GetParameter) method:<br>
```
if (a.ViewParameters().GetParameter(a.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for airbag shell reference geometry. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for airbag shell reference geometry a:<br>
```
a.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this airbag shell reference geometry. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for airbag shell reference geometry a:<br>
```
var xrefs = a.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the ShellReferenceGeometry data in keyword format. Note that this contains the keyword header and the keyword cards. See also [ShellReferenceGeometry.Keyword()](primer-shellreferencegeometry-class.md#ShellReferenceGeometry::Keyword) and [ShellReferenceGeometry.KeywordCards()](primer-shellreferencegeometry-class.md#ShellReferenceGeometry::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for ShellReferenceGeometry rdt in keyword format<br>
```
var s = rdt.toString();
```
 |
| --- |

* * *