# ReferenceGeometry class

The ReferenceGeometry class gives you access to define airbag reference geometry cards in PRIMER. [More...](primer-referencegeometry-class.md#ReferenceGeometry_details)

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

* [Create](primer-referencegeometry-class.md#ReferenceGeometry::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [First](primer-referencegeometry-class.md#ReferenceGeometry::First)(Model*[[Model](primer-model-class.md)]*)
* [FirstFreeLabel](primer-referencegeometry-class.md#ReferenceGeometry::FirstFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [FlagAll](primer-referencegeometry-class.md#ReferenceGeometry::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-referencegeometry-class.md#ReferenceGeometry::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-referencegeometry-class.md#ReferenceGeometry::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-referencegeometry-class.md#ReferenceGeometry::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-referencegeometry-class.md#ReferenceGeometry::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-referencegeometry-class.md#ReferenceGeometry::Last)(Model*[[Model](primer-model-class.md)]*)
* [LastFreeLabel](primer-referencegeometry-class.md#ReferenceGeometry::LastFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [NextFreeLabel](primer-referencegeometry-class.md#ReferenceGeometry::NextFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [Pick](primer-referencegeometry-class.md#ReferenceGeometry::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [RenumberAll](primer-referencegeometry-class.md#ReferenceGeometry::RenumberAll)(Model*[[Model](primer-model-class.md)]*, start*[integer]*)
* [RenumberFlagged](primer-referencegeometry-class.md#ReferenceGeometry::RenumberFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*)
* [Select](primer-referencegeometry-class.md#ReferenceGeometry::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-referencegeometry-class.md#ReferenceGeometry::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-referencegeometry-class.md#ReferenceGeometry::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnflagAll](primer-referencegeometry-class.md#ReferenceGeometry::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-referencegeometry-class.md#ReferenceGeometry::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-referencegeometry-class.md#ReferenceGeometry::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-referencegeometry-class.md#ReferenceGeometry::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Browse](primer-referencegeometry-class.md#ReferenceGeometry::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-referencegeometry-class.md#ReferenceGeometry::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-referencegeometry-class.md#ReferenceGeometry::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-referencegeometry-class.md#ReferenceGeometry::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-referencegeometry-class.md#ReferenceGeometry::Edit)(modal (optional)*[boolean]*)
* [Error](primer-referencegeometry-class.md#ReferenceGeometry::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-referencegeometry-class.md#ReferenceGeometry::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-referencegeometry-class.md#ReferenceGeometry::GetComments)()
* [GetNode](primer-referencegeometry-class.md#ReferenceGeometry::GetNode)(nid*[integer]*)
* [GetParameter](primer-referencegeometry-class.md#ReferenceGeometry::GetParameter)(prop*[string]*)
* [Keyword](primer-referencegeometry-class.md#ReferenceGeometry::Keyword)()
* [KeywordCards](primer-referencegeometry-class.md#ReferenceGeometry::KeywordCards)()
* [Next](primer-referencegeometry-class.md#ReferenceGeometry::Next)()
* [Previous](primer-referencegeometry-class.md#ReferenceGeometry::Previous)()
* [RemoveNode](primer-referencegeometry-class.md#ReferenceGeometry::RemoveNode)(nid*[integer]*)
* [SetFlag](primer-referencegeometry-class.md#ReferenceGeometry::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [SetNode](primer-referencegeometry-class.md#ReferenceGeometry::SetNode)(nid*[integer]*, x*[real]*, y*[real]*, z*[real]*)
* [Sketch](primer-referencegeometry-class.md#ReferenceGeometry::Sketch)(redraw (optional)*[boolean]*)
* [Spool](primer-referencegeometry-class.md#ReferenceGeometry::Spool)()
* [StartSpool](primer-referencegeometry-class.md#ReferenceGeometry::StartSpool)()
* [Unsketch](primer-referencegeometry-class.md#ReferenceGeometry::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-referencegeometry-class.md#ReferenceGeometry::ViewParameters)()
* [Warning](primer-referencegeometry-class.md#ReferenceGeometry::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-referencegeometry-class.md#ReferenceGeometry::Xrefs)()
* [toString](primer-referencegeometry-class.md#ReferenceGeometry::toString)()

## ReferenceGeometry properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| aid | integer | [ReferenceGeometry](primer-referencegeometry-class.md) number. Also see the [label](primer-referencegeometry-class.md#label) property which is an alternative name for this. |
| birth | logical | Turns \_BIRTH on or off |
| birth\_time | real | Birth time |
| exists (read only) | logical | true if airbag reference geometry exists, false if referred to but not defined. |
| id | logical | Turns \_ID on or OFF |
| include | integer | The [Include](primer-include-class.md) file number that the airbag reference geometry is in. |
| iout | integer | Flag for outputting the current reference node coordinates |
| label | integer | [ReferenceGeometry](primer-referencegeometry-class.md) number. Also see the [aid](primer-referencegeometry-class.md#aid) property which is an alternative name for this. |
| model (read only) | integer | The [Model](primer-model-class.md) number that the airbag reference geometry is in. |
| nido | integer | [Node](primer-node-class.md) number for origin |
| rdt | logical | Turns \_RDT on or OFF |
| sx | real | Scale factor in X direction |
| sy | real | Scale factor in Y direction |
| sz | real | Scale factor in Z direction |

| Detailed Description<br>The ReferenceGeometry class allows you to create, modify, edit and manipulate airbag reference geometry cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new ReferenceGeometry(Model*[[Model](primer-model-class.md)]*, aid (optional)*[integer]*)

Description<br>Create a new [ReferenceGeometry](primer-referencegeometry-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that ReferenceGeometry will be created in

* aid (optional) (integer)
 
[ReferenceGeometry](primer-referencegeometry-class.md) number to set \_ID suffix

| Returns
<br>[ReferenceGeometry](primer-referencegeometry-class.md) object<br>
Return type
<br>ReferenceGeometry |
| --- |

| Example
<br>To create a new ReferenceGeometry in model m<br>
```
var a = new ReferenceGeometry(m);
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a airbag reference geometry. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the airbag reference geometry

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the airbag reference geometry a:<br>
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
<br>To Browse airbag reference geometry a:<br>
```
a.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the airbag reference geometry. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the airbag reference geometry

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for airbag reference geometry a:<br>
```
a.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the airbag reference geometry. The target include of the copied airbag reference geometry can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>ReferenceGeometry object<br>
Return type
<br>ReferenceGeometry |
| --- |

| Example
<br>To copy airbag reference geometry a into airbag reference geometry z:<br>
```
var z = a.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a airbag reference geometry |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the airbag reference geometry will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>ReferenceGeometry object (or null if not made).<br>
Return type
<br>ReferenceGeometry |
| --- |

| Example
<br>To start creating a airbag reference geometry in model m:<br>
```
var a = ReferenceGeometry.Create(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a airbag reference geometry. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the airbag reference geometry

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the airbag reference geometry a:<br>
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
<br>To Edit airbag reference geometry a:<br>
```
a.Edit();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for airbag reference geometry. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for airbag reference geometry a:<br>
```
a.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first airbag reference geometry in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first airbag reference geometry in

| Returns
<br>ReferenceGeometry object (or null if there are no airbag reference geometrys in the model).<br>
Return type
<br>ReferenceGeometry |
| --- |

| Example
<br>To get the first airbag reference geometry in model m:<br>
```
var a = ReferenceGeometry.First(m);
```
 |
| --- |

* * *

| FirstFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the first free airbag reference geometry label in the model. Also see [ReferenceGeometry.LastFreeLabel()](primer-referencegeometry-class.md#ReferenceGeometry::LastFreeLabel), [ReferenceGeometry.NextFreeLabel()](primer-referencegeometry-class.md#ReferenceGeometry::NextFreeLabel) and [Model.FirstFreeItemLabel()](primer-model-class.md#Model::FirstFreeItemLabel). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first free airbag reference geometry label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *First free in layer* in editing panels). If omitted the whole model will be used (Equivalent to *First free* in editing panels).

| Returns
<br>ReferenceGeometry label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the first free airbag reference geometry label in model m:<br>
```
var label = ReferenceGeometry.FirstFreeLabel(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the airbag reference geometrys in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all airbag reference geometrys will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the airbag reference geometrys

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the airbag reference geometrys with flag f in model m:<br>
```
ReferenceGeometry.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the airbag reference geometry is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the airbag reference geometry

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if airbag reference geometry a has flag f set on it:<br>
```
if (a.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each airbag reference geometry in the model.<br> **Note that ForEach has been designed to make looping over airbag reference geometrys as fast as possible and so has some limitations. Firstly, a single temporary ReferenceGeometry object is created and on each function call it is updated with the current airbag reference geometry data. This means that you should not try to store the ReferenceGeometry object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new airbag reference geometrys inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all airbag reference geometrys are in

* func (function)
 
Function to call for each airbag reference geometry

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the airbag reference geometrys in model m:<br>
```
ReferenceGeometry.ForEach(m, test);
function test(a)
{
// a is ReferenceGeometry object
}
```
<br><br>To call function test for all of the airbag reference geometrys in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
ReferenceGeometry.ForEach(m, test, data);
function test(a, extra)
{
// a is ReferenceGeometry object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of ReferenceGeometry objects or properties for all of the airbag reference geometrys in a model in PRIMER. If the optional property argument is not given then an array of ReferenceGeometry objects is returned. If the property argument is given, that property value for each airbag reference geometry is returned in the array instead of a ReferenceGeometry object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get airbag reference geometrys from

* property (optional) (string)
 
Name for property to get for all airbag reference geometrys in the model

| Returns
<br>Array of ReferenceGeometry objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of ReferenceGeometry objects for all of the airbag reference geometrys in model m:<br>
```
var a = ReferenceGeometry.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each airbag reference geometry in model m:<br>
```
var a = ReferenceGeometry.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a airbag reference geometry. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the airbag reference geometry a:<br>
```
var comm_array = a.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of ReferenceGeometry objects for all of the flagged airbag reference geometrys in a model in PRIMER If the optional property argument is not given then an array of ReferenceGeometry objects is returned. If the property argument is given, then that property value for each airbag reference geometry is returned in the array instead of a ReferenceGeometry object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get airbag reference geometrys from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the airbag reference geometrys that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged airbag reference geometrys in the model

| Returns
<br>Array of ReferenceGeometry objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of ReferenceGeometry objects for all of the airbag reference geometrys in model m flagged with f:<br>
```
var a = ReferenceGeometry.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the airbag reference geometrys in model m flagged with f:<br>
```
var a = ReferenceGeometry.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the ReferenceGeometry object for a airbag reference geometry ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the airbag reference geometry in

* number (integer)
 
number of the airbag reference geometry you want the ReferenceGeometry object for

| Returns
<br>ReferenceGeometry object (or null if airbag reference geometry does not exist).<br>
Return type
<br>ReferenceGeometry |
| --- |

| Example
<br>To get the ReferenceGeometry object for airbag reference geometry 100 in model m<br>
```
var a = ReferenceGeometry.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetNode(nid*[integer]*)

Description<br>Returns the reference geometry coordinates for the node |
| --- |

#### Arguments

* nid (integer)
 
Node ID

| Returns
<br>An array containing the three reference coordinates (or null if the node is not on the reference geometry)<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the reference coordinates of node number nid on reference geometry a<br>
```
var coords = a.GetNode(nid);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a ReferenceGeometry property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [ReferenceGeometry.ViewParameters()](primer-referencegeometry-class.md#ReferenceGeometry::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
airbag reference geometry property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if ReferenceGeometry property a.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (a.GetParameter(a.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if ReferenceGeometry property a.example is a parameter by using the GetParameter method:<br>
```
if (a.ViewParameters().GetParameter(a.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this reference\_geometry (\*AIRBAG\_REFERENCE\_GEOMETRY). **Note that a carriage return is not added**. See also [ReferenceGeometry.KeywordCards()](primer-referencegeometry-class.md#ReferenceGeometry::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for reference\_geometry m:<br>
```
var key = m.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the reference\_geometry. **Note that a carriage return is not added**. See also [ReferenceGeometry.Keyword()](primer-referencegeometry-class.md#ReferenceGeometry::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for airbag reference geometry a:<br>
```
var cards = b.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last airbag reference geometry in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last airbag reference geometry in

| Returns
<br>ReferenceGeometry object (or null if there are no airbag reference geometrys in the model).<br>
Return type
<br>ReferenceGeometry |
| --- |

| Example
<br>To get the last airbag reference geometry in model m:<br>
```
var a = ReferenceGeometry.Last(m);
```
 |
| --- |

* * *

| LastFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the last free airbag reference geometry label in the model. Also see [ReferenceGeometry.FirstFreeLabel()](primer-referencegeometry-class.md#ReferenceGeometry::FirstFreeLabel), [ReferenceGeometry.NextFreeLabel()](primer-referencegeometry-class.md#ReferenceGeometry::NextFreeLabel) and see [Model.LastFreeItemLabel()](primer-model-class.md#Model::LastFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last free airbag reference geometry label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest free in layer* in editing panels). If omitted the whole model will be used.

| Returns
<br>ReferenceGeometry label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the last free airbag reference geometry label in model m:<br>
```
var label = ReferenceGeometry.LastFreeLabel(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next airbag reference geometry in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>ReferenceGeometry object (or null if there are no more airbag reference geometrys in the model).<br>
Return type
<br>ReferenceGeometry |
| --- |

| Example
<br>To get the airbag reference geometry in model m after airbag reference geometry a:<br>
```
var a = a.Next();
```
 |
| --- |

* * *

| NextFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the next free (highest+1) airbag reference geometry label in the model. Also see [ReferenceGeometry.FirstFreeLabel()](primer-referencegeometry-class.md#ReferenceGeometry::FirstFreeLabel), [ReferenceGeometry.LastFreeLabel()](primer-referencegeometry-class.md#ReferenceGeometry::LastFreeLabel) and [Model.NextFreeItemLabel()](primer-model-class.md#Model::NextFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get next free airbag reference geometry label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest+1 in layer* in editing panels). If omitted the whole model will be used (Equivalent to *Highest+1* in editing panels).

| Returns
<br>ReferenceGeometry label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the next free airbag reference geometry label in model m:<br>
```
var label = ReferenceGeometry.NextFreeLabel(m);
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a airbag reference geometry. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only airbag reference geometrys from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only airbag reference geometrys that are flagged with *limit* can be selected. If omitted, or null, any airbag reference geometrys from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[ReferenceGeometry](primer-referencegeometry-class.md) object (or null if not picked)<br>
Return type
<br>ReferenceGeometry |
| --- |

| Example
<br>To pick a airbag reference geometry from model m giving the prompt 'Pick airbag reference geometry from screen':<br>
```
var a = ReferenceGeometry.Pick('Pick airbag reference geometry from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous airbag reference geometry in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>ReferenceGeometry object (or null if there are no more airbag reference geometrys in the model).<br>
Return type
<br>ReferenceGeometry |
| --- |

| Example
<br>To get the airbag reference geometry in model m before airbag reference geometry a:<br>
```
var a = a.Previous();
```
 |
| --- |

* * *

| RemoveNode(nid*[integer]*)

Description<br>Removes a node from the reference geometry if it is on it |
| --- |

#### Arguments

* nid (integer)
 
Node ID

| Returns
<br>No return value. |
| --- |

| Example
<br>To remove node 11 from reference geometry a:<br>
```
a.RemoveNode(11);
```
 |
| --- |

* * *

| RenumberAll(Model*[[Model](primer-model-class.md)]*, start*[integer]*) [static]
Description<br>Renumbers all of the airbag reference geometrys in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all airbag reference geometrys will be renumbered in

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the airbag reference geometrys in model m, from 1000000:<br>
```
ReferenceGeometry.RenumberAll(m, 1000000);
```
 |
| --- |

* * *

| RenumberFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*) [static]
Description<br>Renumbers all of the flagged airbag reference geometrys in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged airbag reference geometrys will be renumbered in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the airbag reference geometrys that you want to renumber

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the airbag reference geometrys in model m flagged with f, from 1000000:<br>
```
ReferenceGeometry.RenumberFlagged(m, f, 1000000);
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select airbag reference geometrys using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting airbag reference geometrys

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only airbag reference geometrys from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only airbag reference geometrys that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any airbag reference geometrys can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of airbag reference geometrys selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select airbag reference geometrys from model m, flagging those selected with flag f, giving the prompt 'Select airbag reference geometrys':<br>
```
ReferenceGeometry.Select(f, 'Select airbag reference geometrys', m);
```
<br><br>To select airbag reference geometrys, flagging those selected with flag f but limiting selection to airbag reference geometrys flagged with flag l, giving the prompt 'Select airbag reference geometrys':<br>
```
ReferenceGeometry.Select(f, 'Select airbag reference geometrys', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the airbag reference geometry. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the airbag reference geometry

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for airbag reference geometry a:<br>
```
a.SetFlag(f);
```
 |
| --- |

* * *

| SetNode(nid*[integer]*, x*[real]*, y*[real]*, z*[real]*)

Description<br>Adds a node to the reference geometry if not already there, otherwise just changes the coordinates |
| --- |

#### Arguments

* nid (integer)
 
Node ID

* x (real)
 
X reference coordinate

* y (real)
 
Y reference coordinate

* z (real)
 
Z reference coordinate

| Returns
<br>No return value. |
| --- |

| Example
<br>To add node 11 to reference geometry a with coordinates 12.0, 13.0, 14.0<br>
```
a.SetNode(11, 12.0, 13.0, 14.0);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the airbag reference geometry. The airbag reference geometry will be sketched until you either call [ReferenceGeometry.Unsketch()](primer-referencegeometry-class.md#ReferenceGeometry::Unsketch), [ReferenceGeometry.UnsketchAll()](primer-referencegeometry-class.md#ReferenceGeometry::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the airbag reference geometry is sketched. If omitted redraw is true. If you want to sketch several airbag reference geometrys and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch airbag reference geometry a:<br>
```
a.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged airbag reference geometrys in the model. The airbag reference geometrys will be sketched until you either call [ReferenceGeometry.Unsketch()](primer-referencegeometry-class.md#ReferenceGeometry::Unsketch), [ReferenceGeometry.UnsketchFlagged()](primer-referencegeometry-class.md#ReferenceGeometry::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged airbag reference geometrys will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the airbag reference geometrys that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the airbag reference geometrys are sketched. If omitted redraw is true. If you want to sketch flagged airbag reference geometrys several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all airbag reference geometrys flagged with flag in model m:<br>
```
ReferenceGeometry.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Spool()

Description<br>Spools a reference geometry, entry by entry. See also [ReferenceGeometry.StartSpool](primer-referencegeometry-class.md#ReferenceGeometry::StartSpool) |
| --- |

#### Arguments

No arguments

| Returns
<br>An array containing the node ID and the three coordinates. Returns 0 if no more items<br>
Return type
<br>Array |
| --- |

| Example
<br>To spool reference geometry a:<br>
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

Description<br>Starts a reference geometry spooling operation. See also [ReferenceGeometry.Spool](primer-referencegeometry-class.md#ReferenceGeometry::Spool) |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To start spooling reference geometry a:<br>
```
a.StartSpool();
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of airbag reference geometrys in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing airbag reference geometrys should be counted. If false or omitted
referenced but undefined airbag reference geometrys will also be included in the total.

| Returns
<br>number of airbag reference geometrys<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of airbag reference geometrys in model m:<br>
```
var total = ReferenceGeometry.Total(m);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the airbag reference geometrys in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all airbag reference geometrys will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the airbag reference geometrys

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the airbag reference geometrys in model m:<br>
```
ReferenceGeometry.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the airbag reference geometry. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the airbag reference geometry is unsketched. If omitted redraw is true. If you want to unsketch several airbag reference geometrys and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch airbag reference geometry a:<br>
```
a.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all airbag reference geometrys. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all airbag reference geometrys will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the airbag reference geometrys are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all airbag reference geometrys in model m:<br>
```
ReferenceGeometry.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged airbag reference geometrys in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all airbag reference geometrys will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the airbag reference geometrys that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the airbag reference geometrys are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all airbag reference geometrys flagged with flag in model m:<br>
```
ReferenceGeometry.UnsketchAll(m, flag);
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
<br>[ReferenceGeometry](primer-referencegeometry-class.md) object.<br>
Return type
<br>ReferenceGeometry |
| --- |

| Example
<br>To check if ReferenceGeometry property a.example is a parameter by using the [ReferenceGeometry.GetParameter()](primer-referencegeometry-class.md#ReferenceGeometry::GetParameter) method:<br>
```
if (a.ViewParameters().GetParameter(a.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for airbag reference geometry. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for airbag reference geometry a:<br>
```
a.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this airbag reference geometry. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for airbag reference geometry a:<br>
```
var xrefs = a.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the ReferenceGeometry data in keyword format. Note that this contains the keyword header and the keyword cards. See also [ReferenceGeometry.Keyword()](primer-referencegeometry-class.md#ReferenceGeometry::Keyword) and [ReferenceGeometry.KeywordCards()](primer-referencegeometry-class.md#ReferenceGeometry::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for ReferenceGeometry rdt in keyword format<br>
```
var s = rdt.toString();
```
 |
| --- |

* * *