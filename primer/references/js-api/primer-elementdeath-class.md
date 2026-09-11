# ElementDeath class

The ElementDeath class gives you access to define element death cards in PRIMER. [More...](primer-elementdeath-class.md#ElementDeath_details)

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

* [Create](primer-elementdeath-class.md#ElementDeath::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [First](primer-elementdeath-class.md#ElementDeath::First)(Model*[[Model](primer-model-class.md)]*)
* [FlagAll](primer-elementdeath-class.md#ElementDeath::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-elementdeath-class.md#ElementDeath::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-elementdeath-class.md#ElementDeath::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-elementdeath-class.md#ElementDeath::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-elementdeath-class.md#ElementDeath::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-elementdeath-class.md#ElementDeath::Last)(Model*[[Model](primer-model-class.md)]*)
* [Select](primer-elementdeath-class.md#ElementDeath::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [Total](primer-elementdeath-class.md#ElementDeath::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnflagAll](primer-elementdeath-class.md#ElementDeath::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

## Member functions

* [AssociateComment](primer-elementdeath-class.md#ElementDeath::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Browse](primer-elementdeath-class.md#ElementDeath::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-elementdeath-class.md#ElementDeath::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-elementdeath-class.md#ElementDeath::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-elementdeath-class.md#ElementDeath::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-elementdeath-class.md#ElementDeath::Edit)(modal (optional)*[boolean]*)
* [Error](primer-elementdeath-class.md#ElementDeath::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-elementdeath-class.md#ElementDeath::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-elementdeath-class.md#ElementDeath::GetComments)()
* [GetParameter](primer-elementdeath-class.md#ElementDeath::GetParameter)(prop*[string]*)
* [Keyword](primer-elementdeath-class.md#ElementDeath::Keyword)()
* [KeywordCards](primer-elementdeath-class.md#ElementDeath::KeywordCards)()
* [Next](primer-elementdeath-class.md#ElementDeath::Next)()
* [Previous](primer-elementdeath-class.md#ElementDeath::Previous)()
* [SetFlag](primer-elementdeath-class.md#ElementDeath::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ViewParameters](primer-elementdeath-class.md#ElementDeath::ViewParameters)()
* [Warning](primer-elementdeath-class.md#ElementDeath::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-elementdeath-class.md#ElementDeath::Xrefs)()
* [toString](primer-elementdeath-class.md#ElementDeath::toString)()

## ElementDeath constants

| **Name** | **Description** |
| --- | --- |
| ElementDeath.BEAM | Beam option |
| ElementDeath.BEAM\_SET | Beam set option |
| ElementDeath.SHELL | Shell option |
| ElementDeath.SHELL\_SET | Shell set option |
| ElementDeath.SOLID | Solid option |
| ElementDeath.SOLID\_SET | Solid set option |
| ElementDeath.THICK\_SHELL | Thick shell option |
| ElementDeath.THICK\_SHELL\_SET | Thick shell set option |

## ElementDeath properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| boxid | integer | Box restricting element deletion |
| cid | integer | Coordinate ID for transforming boxid. |
| eid | integer | Element ID or element set ID. The [sid](primer-elementdeath-class.md#sid) property is an alternative name for this. |
| exists (read only) | logical | true if element death exists, false if referred to but not defined. |
| idgrp | integer | Group ID for simultaneous deletion. |
| include | integer | The [Include](primer-include-class.md) file number that the element death is in. |
| inout | logical | If true, Ansys LS-DYNA deletes elements outside box, otherwise inside box. |
| model (read only) | integer | The [Model](primer-model-class.md) number that the element death is in. |
| option | constant | [ElementDeath](primer-elementdeath-class.md) option. Can be [ElementDeath.SOLID](primer-elementdeath-class.md#ElementDeath.SOLID), [ElementDeath.SOLID_SET](primer-elementdeath-class.md#ElementDeath.SOLID_SET), [ElementDeath.BEAM](primer-elementdeath-class.md#ElementDeath.BEAM), [ElementDeath.BEAM_SET](primer-elementdeath-class.md#ElementDeath.BEAM_SET), [ElementDeath.SHELL](primer-elementdeath-class.md#ElementDeath.SHELL), [ElementDeath.SHELL_SET](primer-elementdeath-class.md#ElementDeath.SHELL_SET), [ElementDeath.THICK_SHELL](primer-elementdeath-class.md#ElementDeath.THICK_SHELL) or [ElementDeath.THICK_SHELL_SET](primer-elementdeath-class.md#ElementDeath.THICK_SHELL_SET). The [type](primer-elementdeath-class.md#type) property is an alternative name for this. |
| percent | real | Deletion percentage. |
| sid | integer | Element ID or element set ID. The [eid](primer-elementdeath-class.md#eid) property is an alternative name for this. |
| time | real | Deletion time for elimination |
| title | string | [ElementDeath](primer-elementdeath-class.md) title |
| type | constant | [ElementDeath](primer-elementdeath-class.md) option. Can be [ElementDeath.SOLID](primer-elementdeath-class.md#ElementDeath.SOLID), [ElementDeath.SOLID_SET](primer-elementdeath-class.md#ElementDeath.SOLID_SET), [ElementDeath.BEAM](primer-elementdeath-class.md#ElementDeath.BEAM), [ElementDeath.BEAM_SET](primer-elementdeath-class.md#ElementDeath.BEAM_SET), [ElementDeath.SHELL](primer-elementdeath-class.md#ElementDeath.SHELL), [ElementDeath.SHELL_SET](primer-elementdeath-class.md#ElementDeath.SHELL_SET), [ElementDeath.THICK_SHELL](primer-elementdeath-class.md#ElementDeath.THICK_SHELL) or [ElementDeath.THICK_SHELL_SET](primer-elementdeath-class.md#ElementDeath.THICK_SHELL_SET) The [option](primer-elementdeath-class.md#option) property is an alternative name for this. |

| Detailed Description<br>The ElementDeath class allows you to create, modify, edit and manipulate element death cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new ElementDeath(Model*[[Model](primer-model-class.md)]*, type*[string]*, eid/sid*[integer]*)

Description<br>Create a new [ElementDeath](primer-elementdeath-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that element death will be created in

* type (string)
 
[ElementDeath](primer-elementdeath-class.md) type. Can be [ElementDeath.SOLID](primer-elementdeath-class.md#ElementDeath.SOLID), [ElementDeath.SOLID_SET](primer-elementdeath-class.md#ElementDeath.SOLID_SET), [ElementDeath.BEAM](primer-elementdeath-class.md#ElementDeath.BEAM), [ElementDeath.BEAM_SET](primer-elementdeath-class.md#ElementDeath.BEAM_SET), [ElementDeath.SHELL](primer-elementdeath-class.md#ElementDeath.SHELL), [ElementDeath.SHELL_SET](primer-elementdeath-class.md#ElementDeath.SHELL_SET), [ElementDeath.THICK_SHELL](primer-elementdeath-class.md#ElementDeath.THICK_SHELL) or [ElementDeath.THICK_SHELL_SET](primer-elementdeath-class.md#ElementDeath.THICK_SHELL_SET)

* eid/sid (integer)
 
Element or element set ID

| Returns
<br>[ElementDeath](primer-elementdeath-class.md) object<br>
Return type
<br>ElementDeath |
| --- |

| Example
<br>To create a new element death in model m with option BEAM\_SET and sid 100<br>
```
var ed = new ElementDeath(m, ElementDeath.BEAM_SET, 100);
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a element death. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the element death

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the element death ed:<br>
```
ed.AssociateComment(c);
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
<br>To Browse element death ed:<br>
```
ed.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the element death. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the element death

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for element death ed:<br>
```
ed.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the element death. The target include of the copied element death can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>ElementDeath object<br>
Return type
<br>ElementDeath |
| --- |

| Example
<br>To copy element death ed into element death z:<br>
```
var z = ed.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a element death |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the element death will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>ElementDeath object (or null if not made).<br>
Return type
<br>ElementDeath |
| --- |

| Example
<br>To start creating a element death in model m:<br>
```
var ed = ElementDeath.Create(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a element death. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the element death

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the element death ed:<br>
```
ed.DetachComment(c);
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
<br>To Edit element death ed:<br>
```
ed.Edit();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for element death. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for element death ed:<br>
```
ed.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first element death in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first element death in

| Returns
<br>ElementDeath object (or null if there are no element deaths in the model).<br>
Return type
<br>ElementDeath |
| --- |

| Example
<br>To get the first element death in model m:<br>
```
var ed = ElementDeath.First(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the element deaths in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all element deaths will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the element deaths

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the element deaths with flag f in model m:<br>
```
ElementDeath.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the element death is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the element death

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if element death ed has flag f set on it:<br>
```
if (ed.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each element death in the model.<br> **Note that ForEach has been designed to make looping over element deaths as fast as possible and so has some limitations. Firstly, a single temporary ElementDeath object is created and on each function call it is updated with the current element death data. This means that you should not try to store the ElementDeath object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new element deaths inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all element deaths are in

* func (function)
 
Function to call for each element death

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the element deaths in model m:<br>
```
ElementDeath.ForEach(m, test);
function test(ed)
{
// ed is ElementDeath object
}
```
<br><br>To call function test for all of the element deaths in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
ElementDeath.ForEach(m, test, data);
function test(ed, extra)
{
// ed is ElementDeath object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of ElementDeath objects or properties for all of the element deaths in a model in PRIMER. If the optional property argument is not given then an array of ElementDeath objects is returned. If the property argument is given, that property value for each element death is returned in the array instead of a ElementDeath object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get element deaths from

* property (optional) (string)
 
Name for property to get for all element deaths in the model

| Returns
<br>Array of ElementDeath objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of ElementDeath objects for all of the element deaths in model m:<br>
```
var a = ElementDeath.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each element death in model m:<br>
```
var a = ElementDeath.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a element death. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the element death ed:<br>
```
var comm_array = ed.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of ElementDeath objects for all of the flagged element deaths in a model in PRIMER If the optional property argument is not given then an array of ElementDeath objects is returned. If the property argument is given, then that property value for each element death is returned in the array instead of a ElementDeath object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get element deaths from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the element deaths that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged element deaths in the model

| Returns
<br>Array of ElementDeath objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of ElementDeath objects for all of the element deaths in model m flagged with f:<br>
```
var ed = ElementDeath.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the element deaths in model m flagged with f:<br>
```
var a = ElementDeath.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the ElementDeath object for a element death ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the element death in

* number (integer)
 
number of the element death you want the ElementDeath object for

| Returns
<br>ElementDeath object (or null if element death does not exist).<br>
Return type
<br>ElementDeath |
| --- |

| Example
<br>To get the ElementDeath object for element death 100 in model m<br>
```
var ed = ElementDeath.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a ElementDeath property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [ElementDeath.ViewParameters()](primer-elementdeath-class.md#ElementDeath::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
element death property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if ElementDeath property ed.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (ed.GetParameter(ed.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if ElementDeath property ed.example is a parameter by using the GetParameter method:<br>
```
if (ed.ViewParameters().GetParameter(ed.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this element death (\*DEFINE\_ELEMENT\_DEATH). **Note that a carriage return is not added**. See also [ElementDeath.KeywordCards()](primer-elementdeath-class.md#ElementDeath::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for element death ed:<br>
```
var key = ed.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the element death. **Note that a carriage return is not added**. See also [ElementDeath.Keyword()](primer-elementdeath-class.md#ElementDeath::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for element death ed:<br>
```
var cards = ed.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last element death in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last element death in

| Returns
<br>ElementDeath object (or null if there are no element deaths in the model).<br>
Return type
<br>ElementDeath |
| --- |

| Example
<br>To get the last element death in model m:<br>
```
var ed = ElementDeath.Last(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next element death in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>ElementDeath object (or null if there are no more element deaths in the model).<br>
Return type
<br>ElementDeath |
| --- |

| Example
<br>To get the element death in model m after element death ed:<br>
```
var ed = ed.Next();
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous element death in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>ElementDeath object (or null if there are no more element deaths in the model).<br>
Return type
<br>ElementDeath |
| --- |

| Example
<br>To get the element death in model m before element death ed:<br>
```
var ed = ed.Previous();
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select element deaths using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting element deaths

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only element deaths from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only element deaths that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any element deaths can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of element deaths selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select element deaths from model m, flagging those selected with flag f, giving the prompt 'Select element deaths':<br>
```
ElementDeath.Select(f, 'Select element deaths', m);
```
<br><br>To select element deaths, flagging those selected with flag f but limiting selection to element deaths flagged with flag l, giving the prompt 'Select element deaths':<br>
```
ElementDeath.Select(f, 'Select element deaths', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the element death. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the element death

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for element death ed:<br>
```
ed.SetFlag(f);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of element deaths in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing element deaths should be counted. If false or omitted
referenced but undefined element deaths will also be included in the total.

| Returns
<br>number of element deaths<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of element deaths in model m:<br>
```
var total = ElementDeath.Total(m);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the element deaths in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all element deaths will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the element deaths

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the element deaths in model m:<br>
```
ElementDeath.UnflagAll(m, f);
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
<br>[ElementDeath](primer-elementdeath-class.md) object.<br>
Return type
<br>ElementDeath |
| --- |

| Example
<br>To check if ElementDeath property ed.example is a parameter by using the [ElementDeath.GetParameter()](primer-elementdeath-class.md#ElementDeath::GetParameter) method:<br>
```
if (ed.ViewParameters().GetParameter(ed.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for element death. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for element death ed:<br>
```
ed.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this element death. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for element death ed:<br>
```
var xrefs = ed.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the element death data in keyword format. Note that this contains the keyword header and the keyword cards. See also [ElementDeath.Keyword()](primer-elementdeath-class.md#ElementDeath::Keyword) and [ElementDeath.KeywordCards()](primer-elementdeath-class.md#ElementDeath::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for element death ed in keyword format<br>
```
var s = ed.toString();
```
 |
| --- |

* * *