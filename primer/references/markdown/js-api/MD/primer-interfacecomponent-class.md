# InterfaceComponent class

The InterfaceComponent class gives you access to interface component cards in PRIMER. [More...](primer-interfacecomponent-class.md#InterfaceComponent_details)

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

* [Create](primer-interfacecomponent-class.md#InterfaceComponent::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [First](primer-interfacecomponent-class.md#InterfaceComponent::First)(Model*[[Model](primer-model-class.md)]*)
* [FirstFreeLabel](primer-interfacecomponent-class.md#InterfaceComponent::FirstFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [FlagAll](primer-interfacecomponent-class.md#InterfaceComponent::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-interfacecomponent-class.md#InterfaceComponent::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-interfacecomponent-class.md#InterfaceComponent::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-interfacecomponent-class.md#InterfaceComponent::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-interfacecomponent-class.md#InterfaceComponent::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-interfacecomponent-class.md#InterfaceComponent::Last)(Model*[[Model](primer-model-class.md)]*)
* [LastFreeLabel](primer-interfacecomponent-class.md#InterfaceComponent::LastFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [NextFreeLabel](primer-interfacecomponent-class.md#InterfaceComponent::NextFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [RenumberAll](primer-interfacecomponent-class.md#InterfaceComponent::RenumberAll)(Model*[[Model](primer-model-class.md)]*, start*[integer]*)
* [RenumberFlagged](primer-interfacecomponent-class.md#InterfaceComponent::RenumberFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*)
* [Select](primer-interfacecomponent-class.md#InterfaceComponent::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [Total](primer-interfacecomponent-class.md#InterfaceComponent::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnflagAll](primer-interfacecomponent-class.md#InterfaceComponent::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

## Member functions

* [AssociateComment](primer-interfacecomponent-class.md#InterfaceComponent::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Browse](primer-interfacecomponent-class.md#InterfaceComponent::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-interfacecomponent-class.md#InterfaceComponent::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-interfacecomponent-class.md#InterfaceComponent::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-interfacecomponent-class.md#InterfaceComponent::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-interfacecomponent-class.md#InterfaceComponent::Edit)(modal (optional)*[boolean]*)
* [Error](primer-interfacecomponent-class.md#InterfaceComponent::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-interfacecomponent-class.md#InterfaceComponent::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-interfacecomponent-class.md#InterfaceComponent::GetComments)()
* [GetParameter](primer-interfacecomponent-class.md#InterfaceComponent::GetParameter)(prop*[string]*)
* [Keyword](primer-interfacecomponent-class.md#InterfaceComponent::Keyword)()
* [KeywordCards](primer-interfacecomponent-class.md#InterfaceComponent::KeywordCards)()
* [Next](primer-interfacecomponent-class.md#InterfaceComponent::Next)()
* [Previous](primer-interfacecomponent-class.md#InterfaceComponent::Previous)()
* [SetFlag](primer-interfacecomponent-class.md#InterfaceComponent::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ViewParameters](primer-interfacecomponent-class.md#InterfaceComponent::ViewParameters)()
* [Warning](primer-interfacecomponent-class.md#InterfaceComponent::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-interfacecomponent-class.md#InterfaceComponent::Xrefs)()
* [toString](primer-interfacecomponent-class.md#InterfaceComponent::toString)()

## InterfaceComponent constants

| **Name** | **Description** |
| --- | --- |
| InterfaceComponent.NODE | Node option |
| InterfaceComponent.SEGMENT | Segment option |

## InterfaceComponent properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| cid | integer | Coordinate system ID. |
| exists (read only) | logical | true if interface component exists, false if referred to but not defined. |
| include | integer | The [Include](primer-include-class.md) file number that the interface component is in. |
| model (read only) | integer | The [Model](primer-model-class.md) number that the interface component is in. |
| nid | integer | Node ID. |
| nsid | integer | Element ID or element set ID. The [ssid](primer-interfacecomponent-class.md#nsid) property is an alternative name for this. |
| option | constant | [InterfaceComponent](primer-interfacecomponent-class.md) option. Can be [InterfaceComponent.NODE](primer-interfacecomponent-class.md#InterfaceComponent.NODE), [InterfaceComponent.SEGMENT](primer-interfacecomponent-class.md#InterfaceComponent.SEGMENT), |
| ssid | integer | Element ID or element set ID. The [nsid](primer-interfacecomponent-class.md#ssid) property is an alternative name for this. |
| title | string | [InterfaceComponent](primer-interfacecomponent-class.md) title |

| Detailed Description<br>The InterfaceComponent class allows you to create, modify, edit and manipulate interface component cards. See the documentation below for more details. |
| --- |

| Constructor
new InterfaceComponent(Model*[[Model](primer-model-class.md)]*, type*[constant]*, snid/ssid*[integer]*, cid*[integer]*, nid*[integer]*, label (optional)*[integer]*, title (optional)*[string]*)

Description<br>Create a new [InterfaceComponent](primer-interfacecomponent-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that InterfaceComponent will be created in

* type (constant)
 
[InterfaceComponent](primer-interfacecomponent-class.md) type. Can be [InterfaceComponent.NODE](primer-interfacecomponent-class.md#InterfaceComponent.NODE), [InterfaceComponent.SEGMENT](primer-interfacecomponent-class.md#InterfaceComponent.SEGMENT),

* snid/ssid (integer)
 
Set node or set segment ID

* cid (integer)
 
Coordinate system ID

* nid (integer)
 
Node ID

* label (optional) (integer)
 
[InterfaceComponent](primer-interfacecomponent-class.md) number

* title (optional) (string)
 
Title for this interface

| Returns
<br>[InterfaceComponent](primer-interfacecomponent-class.md) object<br>
Return type
<br>InterfaceComponent |
| --- |

| Example
<br>To create a new Interface Component in model m with option: NODE, nsid: 100, cyd: 200, nid: 300, ID: 1, title: "MyInterfaceComponent"<br>
```
var i_c = new InterfaceComponent(m, InterfaceComponent.NODE, 100, 200, 300, 1, MyInterfaceComponent);
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a interface component. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the interface component

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the interface component i\_c:<br>
```
i_c.AssociateComment(c);
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
<br>To Browse interface component i\_c:<br>
```
i_c.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the interface component. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the interface component

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for interface component i\_c:<br>
```
i_c.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the interface component. The target include of the copied interface component can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>InterfaceComponent object<br>
Return type
<br>InterfaceComponent |
| --- |

| Example
<br>To copy interface component i\_c into interface component z:<br>
```
var z = i_c.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a interface component |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the interface component will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>InterfaceComponent object (or null if not made).<br>
Return type
<br>InterfaceComponent |
| --- |

| Example
<br>To start creating a interface component in model m:<br>
```
var i_c = InterfaceComponent.Create(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a interface component. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the interface component

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the interface component i\_c:<br>
```
i_c.DetachComment(c);
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
<br>To Edit interface component i\_c:<br>
```
i_c.Edit();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for interface component. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for interface component i\_c:<br>
```
i_c.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first interface component in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first interface component in

| Returns
<br>InterfaceComponent object (or null if there are no interface components in the model).<br>
Return type
<br>InterfaceComponent |
| --- |

| Example
<br>To get the first interface component in model m:<br>
```
var i_c = InterfaceComponent.First(m);
```
 |
| --- |

* * *

| FirstFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the first free interface component label in the model. Also see [InterfaceComponent.LastFreeLabel()](primer-interfacecomponent-class.md#InterfaceComponent::LastFreeLabel), [InterfaceComponent.NextFreeLabel()](primer-interfacecomponent-class.md#InterfaceComponent::NextFreeLabel) and [Model.FirstFreeItemLabel()](primer-model-class.md#Model::FirstFreeItemLabel). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first free interface component label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *First free in layer* in editing panels). If omitted the whole model will be used (Equivalent to *First free* in editing panels).

| Returns
<br>InterfaceComponent label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the first free interface component label in model m:<br>
```
var label = InterfaceComponent.FirstFreeLabel(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the interface components in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all interface components will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the interface components

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the interface components with flag f in model m:<br>
```
InterfaceComponent.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the interface component is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the interface component

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if interface component i\_c has flag f set on it:<br>
```
if (i_c.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each interface component in the model.<br> **Note that ForEach has been designed to make looping over interface components as fast as possible and so has some limitations. Firstly, a single temporary InterfaceComponent object is created and on each function call it is updated with the current interface component data. This means that you should not try to store the InterfaceComponent object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new interface components inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all interface components are in

* func (function)
 
Function to call for each interface component

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the interface components in model m:<br>
```
InterfaceComponent.ForEach(m, test);
function test(i_c)
{
// i_c is InterfaceComponent object
}
```
<br><br>To call function test for all of the interface components in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
InterfaceComponent.ForEach(m, test, data);
function test(i_c, extra)
{
// i_c is InterfaceComponent object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of InterfaceComponent objects or properties for all of the interface components in a model in PRIMER. If the optional property argument is not given then an array of InterfaceComponent objects is returned. If the property argument is given, that property value for each interface component is returned in the array instead of a InterfaceComponent object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get interface components from

* property (optional) (string)
 
Name for property to get for all interface components in the model

| Returns
<br>Array of InterfaceComponent objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of InterfaceComponent objects for all of the interface components in model m:<br>
```
var a = InterfaceComponent.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each interface component in model m:<br>
```
var a = InterfaceComponent.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a interface component. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the interface component i\_c:<br>
```
var comm_array = i_c.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of InterfaceComponent objects for all of the flagged interface components in a model in PRIMER If the optional property argument is not given then an array of InterfaceComponent objects is returned. If the property argument is given, then that property value for each interface component is returned in the array instead of a InterfaceComponent object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get interface components from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the interface components that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged interface components in the model

| Returns
<br>Array of InterfaceComponent objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of InterfaceComponent objects for all of the interface components in model m flagged with f:<br>
```
var i_c = InterfaceComponent.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the interface components in model m flagged with f:<br>
```
var a = InterfaceComponent.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the InterfaceComponent object for a interface component ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the interface component in

* number (integer)
 
number of the interface component you want the InterfaceComponent object for

| Returns
<br>InterfaceComponent object (or null if interface component does not exist).<br>
Return type
<br>InterfaceComponent |
| --- |

| Example
<br>To get the InterfaceComponent object for interface component 100 in model m<br>
```
var i_c = InterfaceComponent.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a InterfaceComponent property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [InterfaceComponent.ViewParameters()](primer-interfacecomponent-class.md#InterfaceComponent::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
interface component property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if InterfaceComponent property i\_c.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (i_c.GetParameter(i_c.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if InterfaceComponent property i\_c.example is a parameter by using the GetParameter method:<br>
```
if (i_c.ViewParameters().GetParameter(i_c.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this InterfaceComponent (\*INTERFACE\_COMPONENT).<br>**Note that a carriage return is not added**.<br>See also [InterfaceComponent.KeywordCards()](primer-interfacecomponent-class.md#InterfaceComponent::KeywordCards)<br> |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for InterfaceComponent ed:<br><br>
```
var key = ed.Keyword();
```
<br><br> |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the InterfaceComponent.<br>**Note that a carriage return is not added**.<br>See also [InterfaceComponent.Keyword()](primer-interfacecomponent-class.md#InterfaceComponent::Keyword)<br> |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for InterfaceComponent ed:<br><br>
```
var cards = ed.KeywordCards();
```
<br><br> |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last interface component in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last interface component in

| Returns
<br>InterfaceComponent object (or null if there are no interface components in the model).<br>
Return type
<br>InterfaceComponent |
| --- |

| Example
<br>To get the last interface component in model m:<br>
```
var i_c = InterfaceComponent.Last(m);
```
 |
| --- |

* * *

| LastFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the last free interface component label in the model. Also see [InterfaceComponent.FirstFreeLabel()](primer-interfacecomponent-class.md#InterfaceComponent::FirstFreeLabel), [InterfaceComponent.NextFreeLabel()](primer-interfacecomponent-class.md#InterfaceComponent::NextFreeLabel) and see [Model.LastFreeItemLabel()](primer-model-class.md#Model::LastFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last free interface component label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest free in layer* in editing panels). If omitted the whole model will be used.

| Returns
<br>InterfaceComponent label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the last free interface component label in model m:<br>
```
var label = InterfaceComponent.LastFreeLabel(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next interface component in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>InterfaceComponent object (or null if there are no more interface components in the model).<br>
Return type
<br>InterfaceComponent |
| --- |

| Example
<br>To get the interface component in model m after interface component i\_c:<br>
```
var i_c = i_c.Next();
```
 |
| --- |

* * *

| NextFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the next free (highest+1) interface component label in the model. Also see [InterfaceComponent.FirstFreeLabel()](primer-interfacecomponent-class.md#InterfaceComponent::FirstFreeLabel), [InterfaceComponent.LastFreeLabel()](primer-interfacecomponent-class.md#InterfaceComponent::LastFreeLabel) and [Model.NextFreeItemLabel()](primer-model-class.md#Model::NextFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get next free interface component label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest+1 in layer* in editing panels). If omitted the whole model will be used (Equivalent to *Highest+1* in editing panels).

| Returns
<br>InterfaceComponent label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the next free interface component label in model m:<br>
```
var label = InterfaceComponent.NextFreeLabel(m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous interface component in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>InterfaceComponent object (or null if there are no more interface components in the model).<br>
Return type
<br>InterfaceComponent |
| --- |

| Example
<br>To get the interface component in model m before interface component i\_c:<br>
```
var i_c = i_c.Previous();
```
 |
| --- |

* * *

| RenumberAll(Model*[[Model](primer-model-class.md)]*, start*[integer]*) [static]
Description<br>Renumbers all of the interface components in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all interface components will be renumbered in

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the interface components in model m, from 1000000:<br>
```
InterfaceComponent.RenumberAll(m, 1000000);
```
 |
| --- |

* * *

| RenumberFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*) [static]
Description<br>Renumbers all of the flagged interface components in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged interface components will be renumbered in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the interface components that you want to renumber

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the interface components in model m flagged with f, from 1000000:<br>
```
InterfaceComponent.RenumberFlagged(m, f, 1000000);
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select interface components using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting interface components

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only interface components from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only interface components that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any interface components can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of interface components selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select interface components from model m, flagging those selected with flag f, giving the prompt 'Select interface components':<br>
```
InterfaceComponent.Select(f, 'Select interface components', m);
```
<br><br>To select interface components, flagging those selected with flag f but limiting selection to interface components flagged with flag l, giving the prompt 'Select interface components':<br>
```
InterfaceComponent.Select(f, 'Select interface components', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the interface component. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the interface component

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for interface component i\_c:<br>
```
i_c.SetFlag(f);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of interface components in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing interface components should be counted. If false or omitted
referenced but undefined interface components will also be included in the total.

| Returns
<br>number of interface components<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of interface components in model m:<br>
```
var total = InterfaceComponent.Total(m);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the interface components in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all interface components will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the interface components

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the interface components in model m:<br>
```
InterfaceComponent.UnflagAll(m, f);
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
<br>[InterfaceComponent](primer-interfacecomponent-class.md) object.<br>
Return type
<br>InterfaceComponent |
| --- |

| Example
<br>To check if InterfaceComponent property i\_c.example is a parameter by using the [InterfaceComponent.GetParameter()](primer-interfacecomponent-class.md#InterfaceComponent::GetParameter) method:<br>
```
if (i_c.ViewParameters().GetParameter(i_c.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for interface component. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for interface component i\_c:<br>
```
i_c.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this interface component. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for interface component i\_c:<br>
```
var xrefs = i_c.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the InterfaceComponent data in keyword format. Note that this<br>contains the keyword header and the keyword cards.<br>See also [InterfaceComponent.Keyword()](primer-interfacecomponent-class.md#InterfaceComponent::Keyword) and<br>[InterfaceComponent.KeywordCards()](primer-interfacecomponent-class.md#InterfaceComponent::KeywordCards).<br> |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for InterfaceComponent ed in keyword format<br><br>
```
var s = ed.toString();
```
<br><br> |
| --- |

* * *