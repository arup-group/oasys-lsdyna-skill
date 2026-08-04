# Discrete class

The Discrete class gives you access to element discrete cards in PRIMER. [More...](primer-discrete-class.md#Discrete_details)

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

* [BlankAll](primer-discrete-class.md#Discrete::BlankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [BlankFlagged](primer-discrete-class.md#Discrete::BlankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Create](primer-discrete-class.md#Discrete::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [First](primer-discrete-class.md#Discrete::First)(Model*[[Model](primer-model-class.md)]*)
* [FirstFreeLabel](primer-discrete-class.md#Discrete::FirstFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [FlagAll](primer-discrete-class.md#Discrete::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-discrete-class.md#Discrete::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-discrete-class.md#Discrete::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-discrete-class.md#Discrete::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-discrete-class.md#Discrete::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-discrete-class.md#Discrete::Last)(Model*[[Model](primer-model-class.md)]*)
* [LastFreeLabel](primer-discrete-class.md#Discrete::LastFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [NextFreeLabel](primer-discrete-class.md#Discrete::NextFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [Pick](primer-discrete-class.md#Discrete::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [RenumberAll](primer-discrete-class.md#Discrete::RenumberAll)(Model*[[Model](primer-model-class.md)]*, start*[integer]*)
* [RenumberFlagged](primer-discrete-class.md#Discrete::RenumberFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*)
* [Select](primer-discrete-class.md#Discrete::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-discrete-class.md#Discrete::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-discrete-class.md#Discrete::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnblankAll](primer-discrete-class.md#Discrete::UnblankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnblankFlagged](primer-discrete-class.md#Discrete::UnblankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [UnflagAll](primer-discrete-class.md#Discrete::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-discrete-class.md#Discrete::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-discrete-class.md#Discrete::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-discrete-class.md#Discrete::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Blank](primer-discrete-class.md#Discrete::Blank)()
* [Blanked](primer-discrete-class.md#Discrete::Blanked)()
* [Browse](primer-discrete-class.md#Discrete::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-discrete-class.md#Discrete::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-discrete-class.md#Discrete::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-discrete-class.md#Discrete::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-discrete-class.md#Discrete::Edit)(modal (optional)*[boolean]*)
* [Error](primer-discrete-class.md#Discrete::Error)(message*[string]*, details (optional)*[string]*)
* [ExtractColour](primer-discrete-class.md#Discrete::ExtractColour)()
* [Flagged](primer-discrete-class.md#Discrete::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-discrete-class.md#Discrete::GetComments)()
* [GetParameter](primer-discrete-class.md#Discrete::GetParameter)(prop*[string]*)
* [Keyword](primer-discrete-class.md#Discrete::Keyword)()
* [KeywordCards](primer-discrete-class.md#Discrete::KeywordCards)()
* [Next](primer-discrete-class.md#Discrete::Next)()
* [Previous](primer-discrete-class.md#Discrete::Previous)()
* [SetFlag](primer-discrete-class.md#Discrete::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Sketch](primer-discrete-class.md#Discrete::Sketch)(redraw (optional)*[boolean]*)
* [Timestep](primer-discrete-class.md#Discrete::Timestep)()
* [Unblank](primer-discrete-class.md#Discrete::Unblank)()
* [Unsketch](primer-discrete-class.md#Discrete::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-discrete-class.md#Discrete::ViewParameters)()
* [Warning](primer-discrete-class.md#Discrete::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-discrete-class.md#Discrete::Xrefs)()
* [toString](primer-discrete-class.md#Discrete::toString)()

## Discrete properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| colour | [Colour](primer-colour-class.md) | The colour of the discrete |
| eid | integer | [Discrete](primer-discrete-class.md) number. Also see the [label](primer-discrete-class.md#label) property which is an alternative name for this. |
| exists (read only) | logical | true if discrete exists, false if referred to but not defined. |
| include | integer | The [Include](primer-include-class.md) file number that the discrete is in. |
| label | integer | [Discrete](primer-discrete-class.md) number. Also see the [eid](primer-discrete-class.md#eid) property which is an alternative name for this. |
| lcid | integer | [Loadcurve](primer-curve-class.md) for offset vs time |
| lciddr | integer | [Loadcurve](primer-curve-class.md) for offset vs time during dynamic relaxation |
| lco | boolean | If LCO option is set. Can be true or false |
| model (read only) | integer | The [Model](primer-model-class.md) number that the discrete is in. |
| n1 | integer | [Node](primer-node-class.md) number 1 |
| n2 | integer | [Node](primer-node-class.md) number 2 |
| offset | real | Initial offset |
| pf | integer | Print flag. Set to write forces to the DEFORC file |
| pid | integer | [Part](primer-part-class.md) number |
| s | real | Scale factor on forces |
| transparency | integer | The transparency of the discrete (0-100) 0% is opaque, 100% is transparent. |
| vid | integer | Orientation vector |

| Detailed Description<br>The Discrete class allows you to create, modify, edit and manipulate discrete cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new Discrete(Model*[[Model](primer-model-class.md)]*, eid*[integer]*, pid*[integer]*, n1*[integer]*, n2*[integer]*, vid (optional)*[integer]*, s (optional)*[real]*, pf (optional)*[integer]*, offset (optional)*[real]*)

Description<br>Create a new [Discrete](primer-discrete-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that discrete will be created in

* eid (integer)
 
[Discrete](primer-discrete-class.md) number

* pid (integer)
 
[Part](primer-part-class.md) number

* n1 (integer)
 
[Node](primer-node-class.md) number 1

* n2 (integer)
 
[Node](primer-node-class.md) number 2

* vid (optional) (integer)
 
Orientation vector

* s (optional) (real)
 
Scale factor on forces

* pf (optional) (integer)
 
Print flag. Set to write forces to the DEFORC file

* offset (optional) (real)
 
Initial offset

| Returns
<br>[Discrete](primer-discrete-class.md) object<br>
Return type
<br>Discrete |
| --- |

| Example
<br>To create a new discrete in model m with label 200, in part 10, on nodes 1 and 2<br>
```
var m = new Discrete(m, 200, 10, 1, 2);
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a discrete. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the discrete

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the discrete d:<br>
```
d.AssociateComment(c);
```
 |
| --- |

* * *

| Blank()

Description<br>Blanks the discrete |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To blank discrete d:<br>
```
d.Blank();
```
 |
| --- |

* * *

| BlankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the discretes in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all discretes will be blanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the discretes in model m:<br>
```
Discrete.BlankAll(m);
```
 |
| --- |

* * *

| BlankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the flagged discretes in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged discretes will be blanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the discretes that you want to blank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the discretes in model m flagged with f:<br>
```
Discrete.BlankFlagged(m, f);
```
 |
| --- |

* * *

| Blanked()

Description<br>Checks if the discrete is blanked or not. |
| --- |

#### Arguments

No arguments

| Returns
<br>true if blanked, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if discrete d is blanked:<br>
```
if (d.Blanked() ) do_something...
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
<br>To Browse discrete d:<br>
```
d.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the discrete. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the discrete

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for discrete d:<br>
```
d.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the discrete. The target include of the copied discrete can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>Discrete object<br>
Return type
<br>Discrete |
| --- |

| Example
<br>To copy discrete d into discrete z:<br>
```
var z = d.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a discrete |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the discrete will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>Discrete object (or null if not made).<br>
Return type
<br>Discrete |
| --- |

| Example
<br>To start creating a discrete in model m:<br>
```
var d = Discrete.Create(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a discrete. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the discrete

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the discrete d:<br>
```
d.DetachComment(c);
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
<br>To Edit discrete d:<br>
```
d.Edit();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for discrete. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for discrete d:<br>
```
d.Error("My custom error");
```
 |
| --- |

* * *

| ExtractColour()

Description<br>Extracts the **actual** colour used for discrete.<br> By default in PRIMER many entities such as elements get their colour automatically from the part that they are in. PRIMER cycles through 13 default colours based on the label of the entity. In this case the discrete [colour](primer-discrete-class.md#colour) property will return the value [Colour.PART](primer-colour-class.md#Colour.PART) instead of the actual colour. This method will return the actual colour which is used for drawing the discrete. |
| --- |

#### Arguments

No arguments

| Returns
<br>colour value (integer)<br>
Return type
<br>Number |
| --- |

| Example
<br>To return the colour used for drawing discrete d:<br>
```
var colour = d.ExtractColour();
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first discrete in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first discrete in

| Returns
<br>Discrete object (or null if there are no discretes in the model).<br>
Return type
<br>Discrete |
| --- |

| Example
<br>To get the first discrete in model m:<br>
```
var d = Discrete.First(m);
```
 |
| --- |

* * *

| FirstFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the first free discrete label in the model. Also see [Discrete.LastFreeLabel()](primer-discrete-class.md#Discrete::LastFreeLabel), [Discrete.NextFreeLabel()](primer-discrete-class.md#Discrete::NextFreeLabel) and [Model.FirstFreeItemLabel()](primer-model-class.md#Model::FirstFreeItemLabel). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first free discrete label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *First free in layer* in editing panels). If omitted the whole model will be used (Equivalent to *First free* in editing panels).

| Returns
<br>Discrete label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the first free discrete label in model m:<br>
```
var label = Discrete.FirstFreeLabel(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the discretes in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all discretes will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the discretes

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the discretes with flag f in model m:<br>
```
Discrete.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the discrete is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the discrete

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if discrete d has flag f set on it:<br>
```
if (d.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each discrete in the model.<br> **Note that ForEach has been designed to make looping over discretes as fast as possible and so has some limitations. Firstly, a single temporary Discrete object is created and on each function call it is updated with the current discrete data. This means that you should not try to store the Discrete object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new discretes inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all discretes are in

* func (function)
 
Function to call for each discrete

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the discretes in model m:<br>
```
Discrete.ForEach(m, test);
function test(d)
{
// d is Discrete object
}
```
<br><br>To call function test for all of the discretes in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
Discrete.ForEach(m, test, data);
function test(d, extra)
{
// d is Discrete object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Discrete objects or properties for all of the discretes in a model in PRIMER. If the optional property argument is not given then an array of Discrete objects is returned. If the property argument is given, that property value for each discrete is returned in the array instead of a Discrete object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get discretes from

* property (optional) (string)
 
Name for property to get for all discretes in the model

| Returns
<br>Array of Discrete objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Discrete objects for all of the discretes in model m:<br>
```
var a = Discrete.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each discrete in model m:<br>
```
var a = Discrete.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a discrete. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the discrete d:<br>
```
var comm_array = d.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Discrete objects for all of the flagged discretes in a model in PRIMER If the optional property argument is not given then an array of Discrete objects is returned. If the property argument is given, then that property value for each discrete is returned in the array instead of a Discrete object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get discretes from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the discretes that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged discretes in the model

| Returns
<br>Array of Discrete objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Discrete objects for all of the discretes in model m flagged with f:<br>
```
var d = Discrete.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the discretes in model m flagged with f:<br>
```
var a = Discrete.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the Discrete object for a discrete ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the discrete in

* number (integer)
 
number of the discrete you want the Discrete object for

| Returns
<br>Discrete object (or null if discrete does not exist).<br>
Return type
<br>Discrete |
| --- |

| Example
<br>To get the Discrete object for discrete 100 in model m<br>
```
var d = Discrete.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a Discrete property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [Discrete.ViewParameters()](primer-discrete-class.md#Discrete::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
discrete property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if Discrete property d.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (d.GetParameter(d.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if Discrete property d.example is a parameter by using the GetParameter method:<br>
```
if (d.ViewParameters().GetParameter(d.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this discrete (\*ELEMENT\_DISCRETE). **Note that a carriage return is not added**. See also [Discrete.KeywordCards()](primer-discrete-class.md#Discrete::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for discrete m:<br>
```
var key = m.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the discrete. **Note that a carriage return is not added**. See also [Discrete.Keyword()](primer-discrete-class.md#Discrete::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for discrete d:<br>
```
var cards = d.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last discrete in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last discrete in

| Returns
<br>Discrete object (or null if there are no discretes in the model).<br>
Return type
<br>Discrete |
| --- |

| Example
<br>To get the last discrete in model m:<br>
```
var d = Discrete.Last(m);
```
 |
| --- |

* * *

| LastFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the last free discrete label in the model. Also see [Discrete.FirstFreeLabel()](primer-discrete-class.md#Discrete::FirstFreeLabel), [Discrete.NextFreeLabel()](primer-discrete-class.md#Discrete::NextFreeLabel) and see [Model.LastFreeItemLabel()](primer-model-class.md#Model::LastFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last free discrete label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest free in layer* in editing panels). If omitted the whole model will be used.

| Returns
<br>Discrete label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the last free discrete label in model m:<br>
```
var label = Discrete.LastFreeLabel(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next discrete in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Discrete object (or null if there are no more discretes in the model).<br>
Return type
<br>Discrete |
| --- |

| Example
<br>To get the discrete in model m after discrete d:<br>
```
var d = d.Next();
```
 |
| --- |

* * *

| NextFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the next free (highest+1) discrete label in the model. Also see [Discrete.FirstFreeLabel()](primer-discrete-class.md#Discrete::FirstFreeLabel), [Discrete.LastFreeLabel()](primer-discrete-class.md#Discrete::LastFreeLabel) and [Model.NextFreeItemLabel()](primer-model-class.md#Model::NextFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get next free discrete label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest+1 in layer* in editing panels). If omitted the whole model will be used (Equivalent to *Highest+1* in editing panels).

| Returns
<br>Discrete label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the next free discrete label in model m:<br>
```
var label = Discrete.NextFreeLabel(m);
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a discrete. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only discretes from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only discretes that are flagged with *limit* can be selected. If omitted, or null, any discretes from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[Discrete](primer-discrete-class.md) object (or null if not picked)<br>
Return type
<br>Discrete |
| --- |

| Example
<br>To pick a discrete from model m giving the prompt 'Pick discrete from screen':<br>
```
var d = Discrete.Pick('Pick discrete from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous discrete in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Discrete object (or null if there are no more discretes in the model).<br>
Return type
<br>Discrete |
| --- |

| Example
<br>To get the discrete in model m before discrete d:<br>
```
var d = d.Previous();
```
 |
| --- |

* * *

| RenumberAll(Model*[[Model](primer-model-class.md)]*, start*[integer]*) [static]
Description<br>Renumbers all of the discretes in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all discretes will be renumbered in

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the discretes in model m, from 1000000:<br>
```
Discrete.RenumberAll(m, 1000000);
```
 |
| --- |

* * *

| RenumberFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*) [static]
Description<br>Renumbers all of the flagged discretes in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged discretes will be renumbered in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the discretes that you want to renumber

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the discretes in model m flagged with f, from 1000000:<br>
```
Discrete.RenumberFlagged(m, f, 1000000);
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select discretes using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting discretes

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only discretes from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only discretes that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any discretes can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of discretes selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select discretes from model m, flagging those selected with flag f, giving the prompt 'Select discretes':<br>
```
Discrete.Select(f, 'Select discretes', m);
```
<br><br>To select discretes, flagging those selected with flag f but limiting selection to discretes flagged with flag l, giving the prompt 'Select discretes':<br>
```
Discrete.Select(f, 'Select discretes', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the discrete. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the discrete

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for discrete d:<br>
```
d.SetFlag(f);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the discrete. The discrete will be sketched until you either call [Discrete.Unsketch()](primer-discrete-class.md#Discrete::Unsketch), [Discrete.UnsketchAll()](primer-discrete-class.md#Discrete::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the discrete is sketched. If omitted redraw is true. If you want to sketch several discretes and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch discrete d:<br>
```
d.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged discretes in the model. The discretes will be sketched until you either call [Discrete.Unsketch()](primer-discrete-class.md#Discrete::Unsketch), [Discrete.UnsketchFlagged()](primer-discrete-class.md#Discrete::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged discretes will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the discretes that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the discretes are sketched. If omitted redraw is true. If you want to sketch flagged discretes several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all discretes flagged with flag in model m:<br>
```
Discrete.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Timestep()

Description<br>Calculates the timestep for the discrete |
| --- |

#### Arguments

No arguments

| Returns
<br>real<br>
Return type
<br>Number |
| --- |

| Example
<br>To calculate the timestep for discrete d:<br>
```
var timestep = d.Timestep();
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of discretes in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing discretes should be counted. If false or omitted
referenced but undefined discretes will also be included in the total.

| Returns
<br>number of discretes<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of discretes in model m:<br>
```
var total = Discrete.Total(m);
```
 |
| --- |

* * *

| Unblank()

Description<br>Unblanks the discrete |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank discrete d:<br>
```
d.Unblank();
```
 |
| --- |

* * *

| UnblankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the discretes in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all discretes will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the discretes in model m:<br>
```
Discrete.UnblankAll(m);
```
 |
| --- |

* * *

| UnblankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the flagged discretes in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the flagged discretes will be unblanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the discretes that you want to unblank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the discretes in model m flagged with f:<br>
```
Discrete.UnblankFlagged(m, f);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the discretes in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all discretes will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the discretes

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the discretes in model m:<br>
```
Discrete.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the discrete. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the discrete is unsketched. If omitted redraw is true. If you want to unsketch several discretes and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch discrete d:<br>
```
d.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all discretes. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all discretes will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the discretes are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all discretes in model m:<br>
```
Discrete.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged discretes in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all discretes will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the discretes that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the discretes are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all discretes flagged with flag in model m:<br>
```
Discrete.UnsketchAll(m, flag);
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
<br>[Discrete](primer-discrete-class.md) object.<br>
Return type
<br>Discrete |
| --- |

| Example
<br>To check if Discrete property d.example is a parameter by using the [Discrete.GetParameter()](primer-discrete-class.md#Discrete::GetParameter) method:<br>
```
if (d.ViewParameters().GetParameter(d.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for discrete. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for discrete d:<br>
```
d.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this discrete. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for discrete d:<br>
```
var xrefs = d.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the discrete data in keyword format. Note that this contains the keyword header and the keyword cards. See also [Discrete.Keyword()](primer-discrete-class.md#Discrete::Keyword) and [Discrete.KeywordCards()](primer-discrete-class.md#Discrete::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for discrete d in keyword format<br>
```
var s = d.toString();
```
 |
| --- |

* * *