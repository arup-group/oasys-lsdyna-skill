# Hourglass class

The Hourglass class gives you access to hourglass cards in PRIMER. [More...](primer-hourglass-class.md#Hourglass_details)

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

* [Create](primer-hourglass-class.md#Hourglass::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [First](primer-hourglass-class.md#Hourglass::First)(Model*[[Model](primer-model-class.md)]*)
* [FirstFreeLabel](primer-hourglass-class.md#Hourglass::FirstFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [FlagAll](primer-hourglass-class.md#Hourglass::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-hourglass-class.md#Hourglass::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-hourglass-class.md#Hourglass::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-hourglass-class.md#Hourglass::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-hourglass-class.md#Hourglass::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-hourglass-class.md#Hourglass::Last)(Model*[[Model](primer-model-class.md)]*)
* [LastFreeLabel](primer-hourglass-class.md#Hourglass::LastFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [NextFreeLabel](primer-hourglass-class.md#Hourglass::NextFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [RenumberAll](primer-hourglass-class.md#Hourglass::RenumberAll)(Model*[[Model](primer-model-class.md)]*, start*[integer]*)
* [RenumberFlagged](primer-hourglass-class.md#Hourglass::RenumberFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*)
* [Select](primer-hourglass-class.md#Hourglass::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [Total](primer-hourglass-class.md#Hourglass::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnflagAll](primer-hourglass-class.md#Hourglass::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

## Member functions

* [AssociateComment](primer-hourglass-class.md#Hourglass::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Browse](primer-hourglass-class.md#Hourglass::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-hourglass-class.md#Hourglass::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-hourglass-class.md#Hourglass::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-hourglass-class.md#Hourglass::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-hourglass-class.md#Hourglass::Edit)(modal (optional)*[boolean]*)
* [Error](primer-hourglass-class.md#Hourglass::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-hourglass-class.md#Hourglass::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-hourglass-class.md#Hourglass::GetComments)()
* [GetParameter](primer-hourglass-class.md#Hourglass::GetParameter)(prop*[string]*)
* [Keyword](primer-hourglass-class.md#Hourglass::Keyword)()
* [KeywordCards](primer-hourglass-class.md#Hourglass::KeywordCards)()
* [Next](primer-hourglass-class.md#Hourglass::Next)()
* [Previous](primer-hourglass-class.md#Hourglass::Previous)()
* [SetFlag](primer-hourglass-class.md#Hourglass::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ViewParameters](primer-hourglass-class.md#Hourglass::ViewParameters)()
* [Warning](primer-hourglass-class.md#Hourglass::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-hourglass-class.md#Hourglass::Xrefs)()
* [toString](primer-hourglass-class.md#Hourglass::toString)()

## Hourglass properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists (read only) | logical | true if hourglass exists, false if referred to but not defined. |
| hgid | integer or string | [Hourglass](primer-hourglass-class.md) number or character label. Also see the [label](primer-hourglass-class.md#label) property which is an alternative name for this. |
| ibq | integer | Bulk viscosity type |
| ihq | integer | Hourglass control type |
| include | integer | The [Include](primer-include-class.md) file number that the hourglass is in. |
| label | integer or string | [Hourglass](primer-hourglass-class.md) number or character label. Also see the [hgid](primer-hourglass-class.md#hgid) property which is an alternative name for this. |
| model (read only) | integer | The [Model](primer-model-class.md) number that the hourglass is in. |
| q1 | real | Quadratic bulk viscosity coefficient |
| q2 | real | Linear bulk viscosity coefficient |
| qb | real | Coefficient for shell bending |
| qm | real | Hourglass coefficient |
| qw | real | Coefficient for shell warping |
| title | string | Title for hourglass |
| vdc | real | Viscous damping coefficient |

| Detailed Description<br>The Hourglass class allows you to create, modify, edit and manipulate hourglass cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new Hourglass(Model*[[Model](primer-model-class.md)]*, hgid*[integer or string]*, title (optional)*[string]*)

Description<br>Create a new [Hourglass](primer-hourglass-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that hourglass will be created in

* hgid (integer or string)
 
[Hourglass](primer-hourglass-class.md) number or character label

* title (optional) (string)
 
Title for the hourglass

| Returns
<br>[Hourglass](primer-hourglass-class.md) object<br>
Return type
<br>Hourglass |
| --- |

| Example
<br>To create a new hourglass in model m with label 100:<br>
```
var h = new Hourglass(m, 100);
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a hourglass. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the hourglass

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the hourglass n:<br>
```
n.AssociateComment(c);
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
<br>To Browse hourglass n:<br>
```
n.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the hourglass. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the hourglass

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for hourglass n:<br>
```
n.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the hourglass. The target include of the copied hourglass can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>Hourglass object<br>
Return type
<br>Hourglass |
| --- |

| Example
<br>To copy hourglass n into hourglass z:<br>
```
var z = n.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a hourglass |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the hourglass will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>Hourglass object (or null if not made).<br>
Return type
<br>Hourglass |
| --- |

| Example
<br>To start creating a hourglass in model m:<br>
```
var n = Hourglass.Create(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a hourglass. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the hourglass

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the hourglass n:<br>
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
<br>To Edit hourglass n:<br>
```
n.Edit();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for hourglass. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for hourglass n:<br>
```
n.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first hourglass in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first hourglass in

| Returns
<br>Hourglass object (or null if there are no hourglasses in the model).<br>
Return type
<br>Hourglass |
| --- |

| Example
<br>To get the first hourglass in model m:<br>
```
var n = Hourglass.First(m);
```
 |
| --- |

* * *

| FirstFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the first free hourglass label in the model. Also see [Hourglass.LastFreeLabel()](primer-hourglass-class.md#Hourglass::LastFreeLabel), [Hourglass.NextFreeLabel()](primer-hourglass-class.md#Hourglass::NextFreeLabel) and [Model.FirstFreeItemLabel()](primer-model-class.md#Model::FirstFreeItemLabel). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first free hourglass label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *First free in layer* in editing panels). If omitted the whole model will be used (Equivalent to *First free* in editing panels).

| Returns
<br>Hourglass label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the first free hourglass label in model m:<br>
```
var label = Hourglass.FirstFreeLabel(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the hourglasses in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all hourglasses will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the hourglasses

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the hourglasses with flag f in model m:<br>
```
Hourglass.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the hourglass is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the hourglass

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if hourglass n has flag f set on it:<br>
```
if (n.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each hourglass in the model.<br> **Note that ForEach has been designed to make looping over hourglasses as fast as possible and so has some limitations. Firstly, a single temporary Hourglass object is created and on each function call it is updated with the current hourglass data. This means that you should not try to store the Hourglass object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new hourglasses inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all hourglasses are in

* func (function)
 
Function to call for each hourglass

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the hourglasses in model m:<br>
```
Hourglass.ForEach(m, test);
function test(n)
{
// n is Hourglass object
}
```
<br><br>To call function test for all of the hourglasses in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
Hourglass.ForEach(m, test, data);
function test(n, extra)
{
// n is Hourglass object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Hourglass objects or properties for all of the hourglasses in a model in PRIMER. If the optional property argument is not given then an array of Hourglass objects is returned. If the property argument is given, that property value for each hourglass is returned in the array instead of a Hourglass object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get hourglasses from

* property (optional) (string)
 
Name for property to get for all hourglasses in the model

| Returns
<br>Array of Hourglass objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Hourglass objects for all of the hourglasses in model m:<br>
```
var a = Hourglass.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each hourglass in model m:<br>
```
var a = Hourglass.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a hourglass. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the hourglass n:<br>
```
var comm_array = n.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Hourglass objects for all of the flagged hourglasses in a model in PRIMER If the optional property argument is not given then an array of Hourglass objects is returned. If the property argument is given, then that property value for each hourglass is returned in the array instead of a Hourglass object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get hourglasses from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the hourglasses that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged hourglasses in the model

| Returns
<br>Array of Hourglass objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Hourglass objects for all of the hourglasses in model m flagged with f:<br>
```
var n = Hourglass.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the hourglasses in model m flagged with f:<br>
```
var a = Hourglass.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the Hourglass object for a hourglass ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the hourglass in

* number (integer)
 
number of the hourglass you want the Hourglass object for

| Returns
<br>Hourglass object (or null if hourglass does not exist).<br>
Return type
<br>Hourglass |
| --- |

| Example
<br>To get the Hourglass object for hourglass 100 in model m<br>
```
var n = Hourglass.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a Hourglass property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [Hourglass.ViewParameters()](primer-hourglass-class.md#Hourglass::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
hourglass property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if Hourglass property n.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (n.GetParameter(n.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if Hourglass property n.example is a parameter by using the GetParameter method:<br>
```
if (n.ViewParameters().GetParameter(n.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this hourglass (\*HOURGLASS). **Note that a carriage return is not added**. See also [Hourglass.KeywordCards()](primer-hourglass-class.md#Hourglass::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for hourglass h:<br>
```
var key = h.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the hourglass. **Note that a carriage return is not added**. See also [Hourglass.Keyword()](primer-hourglass-class.md#Hourglass::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for hourglass h:<br>
```
var cards = h.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last hourglass in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last hourglass in

| Returns
<br>Hourglass object (or null if there are no hourglasses in the model).<br>
Return type
<br>Hourglass |
| --- |

| Example
<br>To get the last hourglass in model m:<br>
```
var n = Hourglass.Last(m);
```
 |
| --- |

* * *

| LastFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the last free hourglass label in the model. Also see [Hourglass.FirstFreeLabel()](primer-hourglass-class.md#Hourglass::FirstFreeLabel), [Hourglass.NextFreeLabel()](primer-hourglass-class.md#Hourglass::NextFreeLabel) and see [Model.LastFreeItemLabel()](primer-model-class.md#Model::LastFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last free hourglass label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest free in layer* in editing panels). If omitted the whole model will be used.

| Returns
<br>Hourglass label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the last free hourglass label in model m:<br>
```
var label = Hourglass.LastFreeLabel(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next hourglass in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Hourglass object (or null if there are no more hourglasses in the model).<br>
Return type
<br>Hourglass |
| --- |

| Example
<br>To get the hourglass in model m after hourglass n:<br>
```
var n = n.Next();
```
 |
| --- |

* * *

| NextFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the next free (highest+1) hourglass label in the model. Also see [Hourglass.FirstFreeLabel()](primer-hourglass-class.md#Hourglass::FirstFreeLabel), [Hourglass.LastFreeLabel()](primer-hourglass-class.md#Hourglass::LastFreeLabel) and [Model.NextFreeItemLabel()](primer-model-class.md#Model::NextFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get next free hourglass label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest+1 in layer* in editing panels). If omitted the whole model will be used (Equivalent to *Highest+1* in editing panels).

| Returns
<br>Hourglass label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the next free hourglass label in model m:<br>
```
var label = Hourglass.NextFreeLabel(m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous hourglass in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Hourglass object (or null if there are no more hourglasses in the model).<br>
Return type
<br>Hourglass |
| --- |

| Example
<br>To get the hourglass in model m before hourglass n:<br>
```
var n = n.Previous();
```
 |
| --- |

* * *

| RenumberAll(Model*[[Model](primer-model-class.md)]*, start*[integer]*) [static]
Description<br>Renumbers all of the hourglasses in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all hourglasses will be renumbered in

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the hourglasses in model m, from 1000000:<br>
```
Hourglass.RenumberAll(m, 1000000);
```
 |
| --- |

* * *

| RenumberFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*) [static]
Description<br>Renumbers all of the flagged hourglasses in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged hourglasses will be renumbered in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the hourglasses that you want to renumber

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the hourglasses in model m flagged with f, from 1000000:<br>
```
Hourglass.RenumberFlagged(m, f, 1000000);
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select hourglasses using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting hourglasses

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only hourglasses from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only hourglasses that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any hourglasses can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of hourglasses selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select hourglasses from model m, flagging those selected with flag f, giving the prompt 'Select hourglasses':<br>
```
Hourglass.Select(f, 'Select hourglasses', m);
```
<br><br>To select hourglasses, flagging those selected with flag f but limiting selection to hourglasses flagged with flag l, giving the prompt 'Select hourglasses':<br>
```
Hourglass.Select(f, 'Select hourglasses', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the hourglass. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the hourglass

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for hourglass n:<br>
```
n.SetFlag(f);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of hourglasses in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing hourglasses should be counted. If false or omitted
referenced but undefined hourglasses will also be included in the total.

| Returns
<br>number of hourglasses<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of hourglasses in model m:<br>
```
var total = Hourglass.Total(m);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the hourglasses in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all hourglasses will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the hourglasses

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the hourglasses in model m:<br>
```
Hourglass.UnflagAll(m, f);
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
<br>[Hourglass](primer-hourglass-class.md) object.<br>
Return type
<br>Hourglass |
| --- |

| Example
<br>To check if Hourglass property n.example is a parameter by using the [Hourglass.GetParameter()](primer-hourglass-class.md#Hourglass::GetParameter) method:<br>
```
if (n.ViewParameters().GetParameter(n.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for hourglass. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for hourglass n:<br>
```
n.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this hourglass. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for hourglass n:<br>
```
var xrefs = n.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the hourglass data in keyword format. Note that this contains the keyword header and the keyword cards. See also [Hourglass.Keyword()](primer-hourglass-class.md#Hourglass::Keyword) and [Hourglass.KeywordCards()](primer-hourglass-class.md#Hourglass::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for hourglass h in keyword format<br>
```
var s = h.toString();
```
 |
| --- |

* * *