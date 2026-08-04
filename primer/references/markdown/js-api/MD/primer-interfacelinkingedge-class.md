# InterfaceLinkingEdge class

The InterfaceLinkingEdge class gives you access to define Interface Linking Edge cards in PRIMER. [More...](primer-interfacelinkingedge-class.md#InterfaceLinkingEdge_details)

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

* [First](primer-interfacelinkingedge-class.md#InterfaceLinkingEdge::First)(Model*[[Model](primer-model-class.md)]*)
* [FlagAll](primer-interfacelinkingedge-class.md#InterfaceLinkingEdge::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-interfacelinkingedge-class.md#InterfaceLinkingEdge::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-interfacelinkingedge-class.md#InterfaceLinkingEdge::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-interfacelinkingedge-class.md#InterfaceLinkingEdge::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-interfacelinkingedge-class.md#InterfaceLinkingEdge::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-interfacelinkingedge-class.md#InterfaceLinkingEdge::Last)(Model*[[Model](primer-model-class.md)]*)
* [Select](primer-interfacelinkingedge-class.md#InterfaceLinkingEdge::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [Total](primer-interfacelinkingedge-class.md#InterfaceLinkingEdge::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnflagAll](primer-interfacelinkingedge-class.md#InterfaceLinkingEdge::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

## Member functions

* [AssociateComment](primer-interfacelinkingedge-class.md#InterfaceLinkingEdge::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [ClearFlag](primer-interfacelinkingedge-class.md#InterfaceLinkingEdge::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-interfacelinkingedge-class.md#InterfaceLinkingEdge::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-interfacelinkingedge-class.md#InterfaceLinkingEdge::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Error](primer-interfacelinkingedge-class.md#InterfaceLinkingEdge::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-interfacelinkingedge-class.md#InterfaceLinkingEdge::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-interfacelinkingedge-class.md#InterfaceLinkingEdge::GetComments)()
* [GetParameter](primer-interfacelinkingedge-class.md#InterfaceLinkingEdge::GetParameter)(prop*[string]*)
* [Keyword](primer-interfacelinkingedge-class.md#InterfaceLinkingEdge::Keyword)()
* [KeywordCards](primer-interfacelinkingedge-class.md#InterfaceLinkingEdge::KeywordCards)()
* [Next](primer-interfacelinkingedge-class.md#InterfaceLinkingEdge::Next)()
* [Previous](primer-interfacelinkingedge-class.md#InterfaceLinkingEdge::Previous)()
* [SetFlag](primer-interfacelinkingedge-class.md#InterfaceLinkingEdge::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ViewParameters](primer-interfacelinkingedge-class.md#InterfaceLinkingEdge::ViewParameters)()
* [Warning](primer-interfacelinkingedge-class.md#InterfaceLinkingEdge::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-interfacelinkingedge-class.md#InterfaceLinkingEdge::Xrefs)()
* [toString](primer-interfacelinkingedge-class.md#InterfaceLinkingEdge::toString)()

## InterfaceLinkingEdge properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists (read only) | logical | true if Interface Linking Edge exists, false if referred to but not defined. |
| ifid | integer | Interface ID. |
| include | integer | The [Include](primer-include-class.md) file number that the Interface Linking Edge is in. |
| model (read only) | integer | The [Model](primer-model-class.md) number that the Interface Linking Edge is in. |
| nsid | integer | [Node set](primer-set-class.md)ID |

| Detailed Description<br>The InterfaceLinkingEdge class allows you to create, modify, edit and manipulate Interface Linking Edge cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new InterfaceLinkingEdge(Model*[[Model](primer-model-class.md)]*, nsid*[integer]*, ifid*[integer]*)

Description<br>Create a new [InterfaceLinkingEdge](primer-interfacelinkingedge-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that Interface Linking Edge will be created in

* nsid (integer)
 
[Node set](primer-set-class.md) ID

* ifid (integer)
 
Interface ID

| Returns
<br>[InterfaceLinkingEdge](primer-interfacelinkingedge-class.md) object<br>
Return type
<br>InterfaceLinkingEdge |
| --- |

| Example
<br>To create a new Interface Linking Edge in model m with NSID 900 and IFID 2<br>
```
var b = new InterfaceLinkingEdge(m, 900, 2);
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a Interface Linking Edge. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the Interface Linking Edge

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the Interface Linking Edge I\_LE:<br>
```
I_LE.AssociateComment(c);
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the Interface Linking Edge. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the Interface Linking Edge

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for Interface Linking Edge I\_LE:<br>
```
I_LE.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the Interface Linking Edge. The target include of the copied Interface Linking Edge can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>InterfaceLinkingEdge object<br>
Return type
<br>InterfaceLinkingEdge |
| --- |

| Example
<br>To copy Interface Linking Edge I\_LE into Interface Linking Edge z:<br>
```
var z = I_LE.Copy();
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a Interface Linking Edge. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the Interface Linking Edge

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the Interface Linking Edge I\_LE:<br>
```
I_LE.DetachComment(c);
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for Interface Linking Edge. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for Interface Linking Edge I\_LE:<br>
```
I_LE.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first Interface Linking Edge in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first Interface Linking Edge in

| Returns
<br>InterfaceLinkingEdge object (or null if there are no Interface Linking Edges in the model).<br>
Return type
<br>InterfaceLinkingEdge |
| --- |

| Example
<br>To get the first Interface Linking Edge in model m:<br>
```
var I_LE = InterfaceLinkingEdge.First(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the Interface Linking Edges in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all Interface Linking Edges will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the Interface Linking Edges

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the Interface Linking Edges with flag f in model m:<br>
```
InterfaceLinkingEdge.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the Interface Linking Edge is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the Interface Linking Edge

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if Interface Linking Edge I\_LE has flag f set on it:<br>
```
if (I_LE.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each Interface Linking Edge in the model.<br> **Note that ForEach has been designed to make looping over Interface Linking Edges as fast as possible and so has some limitations. Firstly, a single temporary InterfaceLinkingEdge object is created and on each function call it is updated with the current Interface Linking Edge data. This means that you should not try to store the InterfaceLinkingEdge object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new Interface Linking Edges inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all Interface Linking Edges are in

* func (function)
 
Function to call for each Interface Linking Edge

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the Interface Linking Edges in model m:<br>
```
InterfaceLinkingEdge.ForEach(m, test);
function test(I_LE)
{
// I_LE is InterfaceLinkingEdge object
}
```
<br><br>To call function test for all of the Interface Linking Edges in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
InterfaceLinkingEdge.ForEach(m, test, data);
function test(I_LE, extra)
{
// I_LE is InterfaceLinkingEdge object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of InterfaceLinkingEdge objects or properties for all of the Interface Linking Edges in a model in PRIMER. If the optional property argument is not given then an array of InterfaceLinkingEdge objects is returned. If the property argument is given, that property value for each Interface Linking Edge is returned in the array instead of a InterfaceLinkingEdge object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get Interface Linking Edges from

* property (optional) (string)
 
Name for property to get for all Interface Linking Edges in the model

| Returns
<br>Array of InterfaceLinkingEdge objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of InterfaceLinkingEdge objects for all of the Interface Linking Edges in model m:<br>
```
var a = InterfaceLinkingEdge.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each Interface Linking Edge in model m:<br>
```
var a = InterfaceLinkingEdge.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a Interface Linking Edge. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the Interface Linking Edge I\_LE:<br>
```
var comm_array = I_LE.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of InterfaceLinkingEdge objects for all of the flagged Interface Linking Edges in a model in PRIMER If the optional property argument is not given then an array of InterfaceLinkingEdge objects is returned. If the property argument is given, then that property value for each Interface Linking Edge is returned in the array instead of a InterfaceLinkingEdge object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get Interface Linking Edges from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the Interface Linking Edges that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged Interface Linking Edges in the model

| Returns
<br>Array of InterfaceLinkingEdge objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of InterfaceLinkingEdge objects for all of the Interface Linking Edges in model m flagged with f:<br>
```
var I_LE = InterfaceLinkingEdge.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the Interface Linking Edges in model m flagged with f:<br>
```
var a = InterfaceLinkingEdge.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the InterfaceLinkingEdge object for a Interface Linking Edge ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the Interface Linking Edge in

* number (integer)
 
number of the Interface Linking Edge you want the InterfaceLinkingEdge object for

| Returns
<br>InterfaceLinkingEdge object (or null if Interface Linking Edge does not exist).<br>
Return type
<br>InterfaceLinkingEdge |
| --- |

| Example
<br>To get the InterfaceLinkingEdge object for Interface Linking Edge 100 in model m<br>
```
var I_LE = InterfaceLinkingEdge.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a InterfaceLinkingEdge property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [InterfaceLinkingEdge.ViewParameters()](primer-interfacelinkingedge-class.md#InterfaceLinkingEdge::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
Interface Linking Edge property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if InterfaceLinkingEdge property I\_LE.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (I_LE.GetParameter(I_LE.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if InterfaceLinkingEdge property I\_LE.example is a parameter by using the GetParameter method:<br>
```
if (I_LE.ViewParameters().GetParameter(I_LE.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this Interface Linking Edge (\*INTERFACE\_LINKING\_EDGE). **Note that a carriage return is not added**. See also [InterfaceLinkingEdge.KeywordCards()](primer-interfacelinkingedge-class.md#InterfaceLinkingEdge::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for Interface Linking Edge m:<br>
```
var key = m.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the Interface Linking Edge. **Note that a carriage return is not added**. See also [InterfaceLinkingEdge.Keyword()](primer-interfacelinkingedge-class.md#InterfaceLinkingEdge::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for Interface Linking Edge l:<br>
```
var cards = l.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last Interface Linking Edge in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last Interface Linking Edge in

| Returns
<br>InterfaceLinkingEdge object (or null if there are no Interface Linking Edges in the model).<br>
Return type
<br>InterfaceLinkingEdge |
| --- |

| Example
<br>To get the last Interface Linking Edge in model m:<br>
```
var I_LE = InterfaceLinkingEdge.Last(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next Interface Linking Edge in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>InterfaceLinkingEdge object (or null if there are no more Interface Linking Edges in the model).<br>
Return type
<br>InterfaceLinkingEdge |
| --- |

| Example
<br>To get the Interface Linking Edge in model m after Interface Linking Edge I\_LE:<br>
```
var I_LE = I_LE.Next();
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous Interface Linking Edge in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>InterfaceLinkingEdge object (or null if there are no more Interface Linking Edges in the model).<br>
Return type
<br>InterfaceLinkingEdge |
| --- |

| Example
<br>To get the Interface Linking Edge in model m before Interface Linking Edge I\_LE:<br>
```
var I_LE = I_LE.Previous();
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select Interface Linking Edges using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting Interface Linking Edges

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only Interface Linking Edges from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only Interface Linking Edges that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any Interface Linking Edges can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of Interface Linking Edges selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select Interface Linking Edges from model m, flagging those selected with flag f, giving the prompt 'Select Interface Linking Edges':<br>
```
InterfaceLinkingEdge.Select(f, 'Select Interface Linking Edges', m);
```
<br><br>To select Interface Linking Edges, flagging those selected with flag f but limiting selection to Interface Linking Edges flagged with flag l, giving the prompt 'Select Interface Linking Edges':<br>
```
InterfaceLinkingEdge.Select(f, 'Select Interface Linking Edges', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the Interface Linking Edge. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the Interface Linking Edge

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for Interface Linking Edge I\_LE:<br>
```
I_LE.SetFlag(f);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of Interface Linking Edges in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing Interface Linking Edges should be counted. If false or omitted
referenced but undefined Interface Linking Edges will also be included in the total.

| Returns
<br>number of Interface Linking Edges<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of Interface Linking Edges in model m:<br>
```
var total = InterfaceLinkingEdge.Total(m);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the Interface Linking Edges in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all Interface Linking Edges will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the Interface Linking Edges

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the Interface Linking Edges in model m:<br>
```
InterfaceLinkingEdge.UnflagAll(m, f);
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
<br>[InterfaceLinkingEdge](primer-interfacelinkingedge-class.md) object.<br>
Return type
<br>InterfaceLinkingEdge |
| --- |

| Example
<br>To check if InterfaceLinkingEdge property I\_LE.example is a parameter by using the [InterfaceLinkingEdge.GetParameter()](primer-interfacelinkingedge-class.md#InterfaceLinkingEdge::GetParameter) method:<br>
```
if (I_LE.ViewParameters().GetParameter(I_LE.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for Interface Linking Edge. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for Interface Linking Edge I\_LE:<br>
```
I_LE.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this Interface Linking Edge. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for Interface Linking Edge I\_LE:<br>
```
var xrefs = I_LE.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the Interface Linking Edge data in keyword format. Note that this contains the keyword header and the keyword cards. See also [InterfaceLinkingEdge.Keyword()](primer-interfacelinkingedge-class.md#InterfaceLinkingEdge::Keyword) and [InterfaceLinkingEdge.KeywordCards()](primer-interfacelinkingedge-class.md#InterfaceLinkingEdge::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for Interface Linking Edge l in keyword format<br>
```
var s = l.toString();
```
 |
| --- |

* * *