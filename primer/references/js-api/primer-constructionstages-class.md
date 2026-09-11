# ConstructionStages class

The ConstructionStages class gives you access to \*DEFINE\_CONSTRUCTION\_STAGES keyword in PRIMER. [More...](primer-constructionstages-class.md#ConstructionStages_details)

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

* [Create](primer-constructionstages-class.md#ConstructionStages::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [First](primer-constructionstages-class.md#ConstructionStages::First)(Model*[[Model](primer-model-class.md)]*)
* [FirstFreeLabel](primer-constructionstages-class.md#ConstructionStages::FirstFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [FlagAll](primer-constructionstages-class.md#ConstructionStages::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-constructionstages-class.md#ConstructionStages::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-constructionstages-class.md#ConstructionStages::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-constructionstages-class.md#ConstructionStages::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-constructionstages-class.md#ConstructionStages::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-constructionstages-class.md#ConstructionStages::Last)(Model*[[Model](primer-model-class.md)]*)
* [LastFreeLabel](primer-constructionstages-class.md#ConstructionStages::LastFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [NextFreeLabel](primer-constructionstages-class.md#ConstructionStages::NextFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [RenumberAll](primer-constructionstages-class.md#ConstructionStages::RenumberAll)(Model*[[Model](primer-model-class.md)]*, start*[integer]*)
* [RenumberFlagged](primer-constructionstages-class.md#ConstructionStages::RenumberFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*)
* [Select](primer-constructionstages-class.md#ConstructionStages::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [Total](primer-constructionstages-class.md#ConstructionStages::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnflagAll](primer-constructionstages-class.md#ConstructionStages::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

## Member functions

* [AssociateComment](primer-constructionstages-class.md#ConstructionStages::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Browse](primer-constructionstages-class.md#ConstructionStages::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-constructionstages-class.md#ConstructionStages::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-constructionstages-class.md#ConstructionStages::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-constructionstages-class.md#ConstructionStages::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-constructionstages-class.md#ConstructionStages::Edit)(modal (optional)*[boolean]*)
* [Error](primer-constructionstages-class.md#ConstructionStages::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-constructionstages-class.md#ConstructionStages::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-constructionstages-class.md#ConstructionStages::GetComments)()
* [GetParameter](primer-constructionstages-class.md#ConstructionStages::GetParameter)(prop*[string]*)
* [Keyword](primer-constructionstages-class.md#ConstructionStages::Keyword)()
* [KeywordCards](primer-constructionstages-class.md#ConstructionStages::KeywordCards)()
* [Next](primer-constructionstages-class.md#ConstructionStages::Next)()
* [Previous](primer-constructionstages-class.md#ConstructionStages::Previous)()
* [SetFlag](primer-constructionstages-class.md#ConstructionStages::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ViewParameters](primer-constructionstages-class.md#ConstructionStages::ViewParameters)()
* [Warning](primer-constructionstages-class.md#ConstructionStages::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-constructionstages-class.md#ConstructionStages::Xrefs)()
* [toString](primer-constructionstages-class.md#ConstructionStages::toString)()

## ConstructionStages properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| ate | real | Analysis time at end of stage. |
| atr | real | Analysis time duration of stage. |
| ats | real | Analysis time at start of stage. |
| exists (read only) | logical | true if \*DEFINE\_CONSTRUCTION\_STAGES exists, false if referred to but not defined. |
| heading | string | The title of the \*DEFINE\_CONSTRUCTION\_STAGES or the empty string if \_TITLE is not set |
| include | integer | The [Include](primer-include-class.md) file number that the \*DEFINE\_CONSTRUCTION\_STAGES is in. |
| istage | integer | [ConstructionStages](primer-constructionstages-class.md) number. The [label](primer-constructionstages-class.md#label) is an alternative name for this. |
| ivel0 | integer | Flag to set velocities to zero at start of stage. |
| label | integer | [ConstructionStages](primer-constructionstages-class.md) number. The [istage](primer-constructionstages-class.md#istage) is an alternative name for this. |
| model (read only) | integer | The [Model](primer-model-class.md) number that the \*DEFINE\_CONSTRUCTION\_STAGES is in. |
| rte | real | Real time at end of stage. |
| rts | real | Real time at start of stage. |

| Detailed Description<br>The ConstructionStages class allows you to create, modify, edit and manipulate \*DEFINE\_CONSTRUCTION\_STAGES.<br>See the documentation below for more details. |
| --- |

| Constructor
new ConstructionStages(Model*[[Model](primer-model-class.md)]*, Stage ID*[integer]*, heading (optional)*[string]*)

Description<br>Create a new [ConstructionStages](primer-constructionstages-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that \*DEFINE\_CONSTRUCTION\_STAGES will be created in

* Stage ID (integer)
 
[ConstructionStages](primer-constructionstages-class.md) id.

* heading (optional) (string)
 
Title for the \*DEFINE\_CONSTRUCTION\_STAGES

| Returns
<br>[ConstructionStages](primer-constructionstages-class.md) object<br>
Return type
<br>ConstructionStages |
| --- |

| Example
<br>To create a new \*DEFINE\_CONSTRUCTION\_STAGES in model m with label 100:<br>
```
var c = new ConstructionStages(m, 100);
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a \*DEFINE\_CONSTRUCTION\_STAGES. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the \*DEFINE\_CONSTRUCTION\_STAGES

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the \*DEFINE\_CONSTRUCTION\_STAGES c:<br>
```
c.AssociateComment(c);
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
<br>To Browse \*DEFINE\_CONSTRUCTION\_STAGES c:<br>
```
c.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the \*DEFINE\_CONSTRUCTION\_STAGES. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the \*DEFINE\_CONSTRUCTION\_STAGES

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for \*DEFINE\_CONSTRUCTION\_STAGES c:<br>
```
c.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the \*DEFINE\_CONSTRUCTION\_STAGES. The target include of the copied \*DEFINE\_CONSTRUCTION\_STAGES can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>ConstructionStages object<br>
Return type
<br>ConstructionStages |
| --- |

| Example
<br>To copy \*DEFINE\_CONSTRUCTION\_STAGES c into \*DEFINE\_CONSTRUCTION\_STAGES z:<br>
```
var z = c.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a \*DEFINE\_CONSTRUCTION\_STAGES |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the \*DEFINE\_CONSTRUCTION\_STAGES will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>ConstructionStages object (or null if not made).<br>
Return type
<br>ConstructionStages |
| --- |

| Example
<br>To start creating a \*DEFINE\_CONSTRUCTION\_STAGES in model m:<br>
```
var c = ConstructionStages.Create(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a \*DEFINE\_CONSTRUCTION\_STAGES. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the \*DEFINE\_CONSTRUCTION\_STAGES

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the \*DEFINE\_CONSTRUCTION\_STAGES c:<br>
```
c.DetachComment(c);
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
<br>To Edit \*DEFINE\_CONSTRUCTION\_STAGES c:<br>
```
c.Edit();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for \*DEFINE\_CONSTRUCTION\_STAGES. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for \*DEFINE\_CONSTRUCTION\_STAGES c:<br>
```
c.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first \*DEFINE\_CONSTRUCTION\_STAGES in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first \*DEFINE\_CONSTRUCTION\_STAGES in

| Returns
<br>ConstructionStages object (or null if there are no \*DEFINE\_CONSTRUCTION\_STAGESs in the model).<br>
Return type
<br>ConstructionStages |
| --- |

| Example
<br>To get the first \*DEFINE\_CONSTRUCTION\_STAGES in model m:<br>
```
var c = ConstructionStages.First(m);
```
 |
| --- |

* * *

| FirstFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the first free \*DEFINE\_CONSTRUCTION\_STAGES label in the model. Also see [ConstructionStages.LastFreeLabel()](primer-constructionstages-class.md#ConstructionStages::LastFreeLabel), [ConstructionStages.NextFreeLabel()](primer-constructionstages-class.md#ConstructionStages::NextFreeLabel) and [Model.FirstFreeItemLabel()](primer-model-class.md#Model::FirstFreeItemLabel). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first free \*DEFINE\_CONSTRUCTION\_STAGES label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *First free in layer* in editing panels). If omitted the whole model will be used (Equivalent to *First free* in editing panels).

| Returns
<br>ConstructionStages label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the first free \*DEFINE\_CONSTRUCTION\_STAGES label in model m:<br>
```
var label = ConstructionStages.FirstFreeLabel(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the \*DEFINE\_CONSTRUCTION\_STAGESs in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all \*DEFINE\_CONSTRUCTION\_STAGESs will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the \*DEFINE\_CONSTRUCTION\_STAGESs

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the \*DEFINE\_CONSTRUCTION\_STAGESs with flag f in model m:<br>
```
ConstructionStages.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the \*DEFINE\_CONSTRUCTION\_STAGES is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the \*DEFINE\_CONSTRUCTION\_STAGES

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if \*DEFINE\_CONSTRUCTION\_STAGES c has flag f set on it:<br>
```
if (c.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each \*DEFINE\_CONSTRUCTION\_STAGES in the model.<br> **Note that ForEach has been designed to make looping over \*DEFINE\_CONSTRUCTION\_STAGESs as fast as possible and so has some limitations. Firstly, a single temporary ConstructionStages object is created and on each function call it is updated with the current \*DEFINE\_CONSTRUCTION\_STAGES data. This means that you should not try to store the ConstructionStages object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new \*DEFINE\_CONSTRUCTION\_STAGESs inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all \*DEFINE\_CONSTRUCTION\_STAGESs are in

* func (function)
 
Function to call for each \*DEFINE\_CONSTRUCTION\_STAGES

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the \*DEFINE\_CONSTRUCTION\_STAGESs in model m:<br>
```
ConstructionStages.ForEach(m, test);
function test(c)
{
// c is ConstructionStages object
}
```
<br><br>To call function test for all of the \*DEFINE\_CONSTRUCTION\_STAGESs in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
ConstructionStages.ForEach(m, test, data);
function test(c, extra)
{
// c is ConstructionStages object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of ConstructionStages objects or properties for all of the \*DEFINE\_CONSTRUCTION\_STAGESs in a model in PRIMER. If the optional property argument is not given then an array of ConstructionStages objects is returned. If the property argument is given, that property value for each \*DEFINE\_CONSTRUCTION\_STAGES is returned in the array instead of a ConstructionStages object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get \*DEFINE\_CONSTRUCTION\_STAGESs from

* property (optional) (string)
 
Name for property to get for all \*DEFINE\_CONSTRUCTION\_STAGESs in the model

| Returns
<br>Array of ConstructionStages objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of ConstructionStages objects for all of the \*DEFINE\_CONSTRUCTION\_STAGESs in model m:<br>
```
var a = ConstructionStages.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each \*DEFINE\_CONSTRUCTION\_STAGES in model m:<br>
```
var a = ConstructionStages.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a \*DEFINE\_CONSTRUCTION\_STAGES. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the \*DEFINE\_CONSTRUCTION\_STAGES c:<br>
```
var comm_array = c.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of ConstructionStages objects for all of the flagged \*DEFINE\_CONSTRUCTION\_STAGESs in a model in PRIMER If the optional property argument is not given then an array of ConstructionStages objects is returned. If the property argument is given, then that property value for each \*DEFINE\_CONSTRUCTION\_STAGES is returned in the array instead of a ConstructionStages object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get \*DEFINE\_CONSTRUCTION\_STAGESs from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the \*DEFINE\_CONSTRUCTION\_STAGESs that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged \*DEFINE\_CONSTRUCTION\_STAGESs in the model

| Returns
<br>Array of ConstructionStages objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of ConstructionStages objects for all of the \*DEFINE\_CONSTRUCTION\_STAGESs in model m flagged with f:<br>
```
var c = ConstructionStages.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the \*DEFINE\_CONSTRUCTION\_STAGESs in model m flagged with f:<br>
```
var a = ConstructionStages.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the ConstructionStages object for a \*DEFINE\_CONSTRUCTION\_STAGES ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the \*DEFINE\_CONSTRUCTION\_STAGES in

* number (integer)
 
number of the \*DEFINE\_CONSTRUCTION\_STAGES you want the ConstructionStages object for

| Returns
<br>ConstructionStages object (or null if \*DEFINE\_CONSTRUCTION\_STAGES does not exist).<br>
Return type
<br>ConstructionStages |
| --- |

| Example
<br>To get the ConstructionStages object for \*DEFINE\_CONSTRUCTION\_STAGES 100 in model m<br>
```
var c = ConstructionStages.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a ConstructionStages property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [ConstructionStages.ViewParameters()](primer-constructionstages-class.md#ConstructionStages::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
\*DEFINE\_CONSTRUCTION\_STAGES property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if ConstructionStages property c.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (c.GetParameter(c.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if ConstructionStages property c.example is a parameter by using the GetParameter method:<br>
```
if (c.ViewParameters().GetParameter(c.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this \*DEFINE\_CONSTRUCTION\_STAGES. **Note that a carriage return is not added**. See also [ConstructionStages.KeywordCards()](primer-constructionstages-class.md#ConstructionStages::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for ConstructionStages c:<br>
```
var key = c.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the \*DEFINE\_CONSTRUCTION\_STAGES. **Note that a carriage return is not added**. See also [ConstructionStages.Keyword()](primer-constructionstages-class.md#ConstructionStages::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for construction\_stages c:<br>
```
var cards = c.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last \*DEFINE\_CONSTRUCTION\_STAGES in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last \*DEFINE\_CONSTRUCTION\_STAGES in

| Returns
<br>ConstructionStages object (or null if there are no \*DEFINE\_CONSTRUCTION\_STAGESs in the model).<br>
Return type
<br>ConstructionStages |
| --- |

| Example
<br>To get the last \*DEFINE\_CONSTRUCTION\_STAGES in model m:<br>
```
var c = ConstructionStages.Last(m);
```
 |
| --- |

* * *

| LastFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the last free \*DEFINE\_CONSTRUCTION\_STAGES label in the model. Also see [ConstructionStages.FirstFreeLabel()](primer-constructionstages-class.md#ConstructionStages::FirstFreeLabel), [ConstructionStages.NextFreeLabel()](primer-constructionstages-class.md#ConstructionStages::NextFreeLabel) and see [Model.LastFreeItemLabel()](primer-model-class.md#Model::LastFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last free \*DEFINE\_CONSTRUCTION\_STAGES label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest free in layer* in editing panels). If omitted the whole model will be used.

| Returns
<br>ConstructionStages label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the last free \*DEFINE\_CONSTRUCTION\_STAGES label in model m:<br>
```
var label = ConstructionStages.LastFreeLabel(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next \*DEFINE\_CONSTRUCTION\_STAGES in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>ConstructionStages object (or null if there are no more \*DEFINE\_CONSTRUCTION\_STAGESs in the model).<br>
Return type
<br>ConstructionStages |
| --- |

| Example
<br>To get the \*DEFINE\_CONSTRUCTION\_STAGES in model m after \*DEFINE\_CONSTRUCTION\_STAGES c:<br>
```
var c = c.Next();
```
 |
| --- |

* * *

| NextFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the next free (highest+1) \*DEFINE\_CONSTRUCTION\_STAGES label in the model. Also see [ConstructionStages.FirstFreeLabel()](primer-constructionstages-class.md#ConstructionStages::FirstFreeLabel), [ConstructionStages.LastFreeLabel()](primer-constructionstages-class.md#ConstructionStages::LastFreeLabel) and [Model.NextFreeItemLabel()](primer-model-class.md#Model::NextFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get next free \*DEFINE\_CONSTRUCTION\_STAGES label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest+1 in layer* in editing panels). If omitted the whole model will be used (Equivalent to *Highest+1* in editing panels).

| Returns
<br>ConstructionStages label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the next free \*DEFINE\_CONSTRUCTION\_STAGES label in model m:<br>
```
var label = ConstructionStages.NextFreeLabel(m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous \*DEFINE\_CONSTRUCTION\_STAGES in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>ConstructionStages object (or null if there are no more \*DEFINE\_CONSTRUCTION\_STAGESs in the model).<br>
Return type
<br>ConstructionStages |
| --- |

| Example
<br>To get the \*DEFINE\_CONSTRUCTION\_STAGES in model m before \*DEFINE\_CONSTRUCTION\_STAGES c:<br>
```
var c = c.Previous();
```
 |
| --- |

* * *

| RenumberAll(Model*[[Model](primer-model-class.md)]*, start*[integer]*) [static]
Description<br>Renumbers all of the \*DEFINE\_CONSTRUCTION\_STAGESs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all \*DEFINE\_CONSTRUCTION\_STAGESs will be renumbered in

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the \*DEFINE\_CONSTRUCTION\_STAGESs in model m, from 1000000:<br>
```
ConstructionStages.RenumberAll(m, 1000000);
```
 |
| --- |

* * *

| RenumberFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*) [static]
Description<br>Renumbers all of the flagged \*DEFINE\_CONSTRUCTION\_STAGESs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged \*DEFINE\_CONSTRUCTION\_STAGESs will be renumbered in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the \*DEFINE\_CONSTRUCTION\_STAGESs that you want to renumber

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the \*DEFINE\_CONSTRUCTION\_STAGESs in model m flagged with f, from 1000000:<br>
```
ConstructionStages.RenumberFlagged(m, f, 1000000);
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select \*DEFINE\_CONSTRUCTION\_STAGESs using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting \*DEFINE\_CONSTRUCTION\_STAGESs

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only \*DEFINE\_CONSTRUCTION\_STAGESs from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only \*DEFINE\_CONSTRUCTION\_STAGESs that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any \*DEFINE\_CONSTRUCTION\_STAGESs can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of \*DEFINE\_CONSTRUCTION\_STAGESs selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select \*DEFINE\_CONSTRUCTION\_STAGESs from model m, flagging those selected with flag f, giving the prompt 'Select \*DEFINE\_CONSTRUCTION\_STAGESs':<br>
```
ConstructionStages.Select(f, 'Select *DEFINE_CONSTRUCTION_STAGESs', m);
```
<br><br>To select \*DEFINE\_CONSTRUCTION\_STAGESs, flagging those selected with flag f but limiting selection to \*DEFINE\_CONSTRUCTION\_STAGESs flagged with flag l, giving the prompt 'Select \*DEFINE\_CONSTRUCTION\_STAGESs':<br>
```
ConstructionStages.Select(f, 'Select *DEFINE_CONSTRUCTION_STAGESs', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the \*DEFINE\_CONSTRUCTION\_STAGES. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the \*DEFINE\_CONSTRUCTION\_STAGES

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for \*DEFINE\_CONSTRUCTION\_STAGES c:<br>
```
c.SetFlag(f);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of \*DEFINE\_CONSTRUCTION\_STAGESs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing \*DEFINE\_CONSTRUCTION\_STAGESs should be counted. If false or omitted
referenced but undefined \*DEFINE\_CONSTRUCTION\_STAGESs will also be included in the total.

| Returns
<br>number of \*DEFINE\_CONSTRUCTION\_STAGESs<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of \*DEFINE\_CONSTRUCTION\_STAGESs in model m:<br>
```
var total = ConstructionStages.Total(m);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the \*DEFINE\_CONSTRUCTION\_STAGESs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all \*DEFINE\_CONSTRUCTION\_STAGESs will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the \*DEFINE\_CONSTRUCTION\_STAGESs

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the \*DEFINE\_CONSTRUCTION\_STAGESs in model m:<br>
```
ConstructionStages.UnflagAll(m, f);
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
<br>[ConstructionStages](primer-constructionstages-class.md) object.<br>
Return type
<br>ConstructionStages |
| --- |

| Example
<br>To check if ConstructionStages property c.example is a parameter by using the [ConstructionStages.GetParameter()](primer-constructionstages-class.md#ConstructionStages::GetParameter) method:<br>
```
if (c.ViewParameters().GetParameter(c.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for \*DEFINE\_CONSTRUCTION\_STAGES. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for \*DEFINE\_CONSTRUCTION\_STAGES c:<br>
```
c.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this \*DEFINE\_CONSTRUCTION\_STAGES. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for \*DEFINE\_CONSTRUCTION\_STAGES c:<br>
```
var xrefs = c.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the construction stages data in keyword format. Note that this contains the keyword header and the keyword cards. See also [ConstructionStages.Keyword()](primer-constructionstages-class.md#ConstructionStages::Keyword) and [ConstructionStages.KeywordCards()](primer-constructionstages-class.md#ConstructionStages::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for construction stages c in keyword format<br>
```
var str = c.toString();
```
 |
| --- |

* * *