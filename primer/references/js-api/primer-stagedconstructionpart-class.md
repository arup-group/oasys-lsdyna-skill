# StagedConstructionPart class

The StagedConstructionPart class gives you access to Define staged construction part cards in PRIMER. [More...](primer-stagedconstructionpart-class.md#StagedConstructionPart_details)

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

* [BlankAll](primer-stagedconstructionpart-class.md#StagedConstructionPart::BlankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [BlankFlagged](primer-stagedconstructionpart-class.md#StagedConstructionPart::BlankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Create](primer-stagedconstructionpart-class.md#StagedConstructionPart::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [First](primer-stagedconstructionpart-class.md#StagedConstructionPart::First)(Model*[[Model](primer-model-class.md)]*)
* [FlagAll](primer-stagedconstructionpart-class.md#StagedConstructionPart::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-stagedconstructionpart-class.md#StagedConstructionPart::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-stagedconstructionpart-class.md#StagedConstructionPart::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-stagedconstructionpart-class.md#StagedConstructionPart::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-stagedconstructionpart-class.md#StagedConstructionPart::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-stagedconstructionpart-class.md#StagedConstructionPart::Last)(Model*[[Model](primer-model-class.md)]*)
* [Pick](primer-stagedconstructionpart-class.md#StagedConstructionPart::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [Select](primer-stagedconstructionpart-class.md#StagedConstructionPart::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-stagedconstructionpart-class.md#StagedConstructionPart::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-stagedconstructionpart-class.md#StagedConstructionPart::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnblankAll](primer-stagedconstructionpart-class.md#StagedConstructionPart::UnblankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnblankFlagged](primer-stagedconstructionpart-class.md#StagedConstructionPart::UnblankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [UnflagAll](primer-stagedconstructionpart-class.md#StagedConstructionPart::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-stagedconstructionpart-class.md#StagedConstructionPart::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-stagedconstructionpart-class.md#StagedConstructionPart::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-stagedconstructionpart-class.md#StagedConstructionPart::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Blank](primer-stagedconstructionpart-class.md#StagedConstructionPart::Blank)()
* [Blanked](primer-stagedconstructionpart-class.md#StagedConstructionPart::Blanked)()
* [Browse](primer-stagedconstructionpart-class.md#StagedConstructionPart::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-stagedconstructionpart-class.md#StagedConstructionPart::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-stagedconstructionpart-class.md#StagedConstructionPart::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-stagedconstructionpart-class.md#StagedConstructionPart::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-stagedconstructionpart-class.md#StagedConstructionPart::Edit)(modal (optional)*[boolean]*)
* [Error](primer-stagedconstructionpart-class.md#StagedConstructionPart::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-stagedconstructionpart-class.md#StagedConstructionPart::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-stagedconstructionpart-class.md#StagedConstructionPart::GetComments)()
* [GetParameter](primer-stagedconstructionpart-class.md#StagedConstructionPart::GetParameter)(prop*[string]*)
* [Keyword](primer-stagedconstructionpart-class.md#StagedConstructionPart::Keyword)()
* [KeywordCards](primer-stagedconstructionpart-class.md#StagedConstructionPart::KeywordCards)()
* [Next](primer-stagedconstructionpart-class.md#StagedConstructionPart::Next)()
* [Previous](primer-stagedconstructionpart-class.md#StagedConstructionPart::Previous)()
* [SetFlag](primer-stagedconstructionpart-class.md#StagedConstructionPart::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Sketch](primer-stagedconstructionpart-class.md#StagedConstructionPart::Sketch)(redraw (optional)*[boolean]*)
* [Unblank](primer-stagedconstructionpart-class.md#StagedConstructionPart::Unblank)()
* [Unsketch](primer-stagedconstructionpart-class.md#StagedConstructionPart::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-stagedconstructionpart-class.md#StagedConstructionPart::ViewParameters)()
* [Warning](primer-stagedconstructionpart-class.md#StagedConstructionPart::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-stagedconstructionpart-class.md#StagedConstructionPart::Xrefs)()
* [toString](primer-stagedconstructionpart-class.md#StagedConstructionPart::toString)()

## StagedConstructionPart constants

| **Name** | **Description** |
| --- | --- |
| StagedConstructionPart.PART | DEFN is \*DEFINE\_STAGED\_CONSTRUCTION\_PART. |
| StagedConstructionPart.SET | DEFN is \*DEFINE\_STAGED\_CONSTRUCTION\_PART\_SET. |

## StagedConstructionPart properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists (read only) | logical | true if Define staged construction part exists, false if referred to but not defined. |
| id | integer | [Part](primer-part-class.md) ID or part set ID (not internal label) |
| include | integer | The [Include](primer-include-class.md) file number that the Define staged construction part is in. |
| label (read only) | integer | The label the Define staged construction parts has in PRIMER |
| model (read only) | integer | The [Model](primer-model-class.md) number that the Define staged construction part is in. |
| option | constant | The Define staged construction parts option. Can be [StagedConstructionPart.PART](primer-stagedconstructionpart-class.md#StagedConstructionPart.PART) or [StagedConstructionPart.SET](primer-stagedconstructionpart-class.md#StagedConstructionPart.SET). |
| stga | integer | [Construction stage](primer-constructionstages-class.md) at which part is added. |
| stgr | integer | [Construction stage](primer-constructionstages-class.md) at which part is removed. |

| Detailed Description<br>The StagedConstructionPart class allows you to create, modify, edit and manipulate Define staged construction parts cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new StagedConstructionPart(Model*[[Model](primer-model-class.md)]*, option*[constant]*, id*[integer]*, stga*[integer]*, stgr*[integer]*)

Description<br>Create a new [StagedConstructionPart](primer-stagedconstructionpart-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that Define staged construction parts will be created in

* option (constant)
 
Specify the type of Define staged construction parts. Can be [StagedConstructionPart.PART](primer-stagedconstructionpart-class.md#StagedConstructionPart.PART) or [StagedConstructionPart.SET](primer-stagedconstructionpart-class.md#StagedConstructionPart.SET))

* id (integer)
 
[Part](primer-part-class.md) ID or part set ID

* stga (integer)
 
[Construction stage](primer-constructionstages-class.md) at which part is added.

* stgr (integer)
 
[Construction stage](primer-constructionstages-class.md) at which part is removed.

| Returns
<br>[StagedConstructionPart](primer-stagedconstructionpart-class.md) object<br>
Return type
<br>StagedConstructionPart |
| --- |

| Example
<br>To create a new Define staged construction part in model m, of type SET, with part set 9, stga 18 and stgr 12<br>
```
var scp = new StagedConstructionPart(m, StagedConstructionPart.SET, 9, 18, 12);
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a Define staged construction part. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the Define staged construction part

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the Define staged construction part scp:<br>
```
scp.AssociateComment(c);
```
 |
| --- |

* * *

| Blank()

Description<br>Blanks the Define staged construction part |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To blank Define staged construction part scp:<br>
```
scp.Blank();
```
 |
| --- |

* * *

| BlankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the Define staged construction parts in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all Define staged construction parts will be blanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the Define staged construction parts in model m:<br>
```
StagedConstructionPart.BlankAll(m);
```
 |
| --- |

* * *

| BlankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the flagged Define staged construction parts in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged Define staged construction parts will be blanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the Define staged construction parts that you want to blank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the Define staged construction parts in model m flagged with f:<br>
```
StagedConstructionPart.BlankFlagged(m, f);
```
 |
| --- |

* * *

| Blanked()

Description<br>Checks if the Define staged construction part is blanked or not. |
| --- |

#### Arguments

No arguments

| Returns
<br>true if blanked, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if Define staged construction part scp is blanked:<br>
```
if (scp.Blanked() ) do_something...
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
<br>To Browse Define staged construction part scp:<br>
```
scp.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the Define staged construction part. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the Define staged construction part

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for Define staged construction part scp:<br>
```
scp.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the Define staged construction part. The target include of the copied Define staged construction part can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>StagedConstructionPart object<br>
Return type
<br>StagedConstructionPart |
| --- |

| Example
<br>To copy Define staged construction part scp into Define staged construction part z:<br>
```
var z = scp.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a Define staged construction part |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the Define staged construction part will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>StagedConstructionPart object (or null if not made).<br>
Return type
<br>StagedConstructionPart |
| --- |

| Example
<br>To start creating a Define staged construction part in model m:<br>
```
var scp = StagedConstructionPart.Create(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a Define staged construction part. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the Define staged construction part

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the Define staged construction part scp:<br>
```
scp.DetachComment(c);
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
<br>To Edit Define staged construction part scp:<br>
```
scp.Edit();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for Define staged construction part. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for Define staged construction part scp:<br>
```
scp.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first Define staged construction part in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first Define staged construction part in

| Returns
<br>StagedConstructionPart object (or null if there are no Define staged construction parts in the model).<br>
Return type
<br>StagedConstructionPart |
| --- |

| Example
<br>To get the first Define staged construction part in model m:<br>
```
var scp = StagedConstructionPart.First(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the Define staged construction parts in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all Define staged construction parts will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the Define staged construction parts

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the Define staged construction parts with flag f in model m:<br>
```
StagedConstructionPart.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the Define staged construction part is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the Define staged construction part

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if Define staged construction part scp has flag f set on it:<br>
```
if (scp.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each Define staged construction part in the model.<br> **Note that ForEach has been designed to make looping over Define staged construction parts as fast as possible and so has some limitations. Firstly, a single temporary StagedConstructionPart object is created and on each function call it is updated with the current Define staged construction part data. This means that you should not try to store the StagedConstructionPart object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new Define staged construction parts inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all Define staged construction parts are in

* func (function)
 
Function to call for each Define staged construction part

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the Define staged construction parts in model m:<br>
```
StagedConstructionPart.ForEach(m, test);
function test(scp)
{
// scp is StagedConstructionPart object
}
```
<br><br>To call function test for all of the Define staged construction parts in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
StagedConstructionPart.ForEach(m, test, data);
function test(scp, extra)
{
// scp is StagedConstructionPart object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of StagedConstructionPart objects or properties for all of the Define staged construction parts in a model in PRIMER. If the optional property argument is not given then an array of StagedConstructionPart objects is returned. If the property argument is given, that property value for each Define staged construction part is returned in the array instead of a StagedConstructionPart object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get Define staged construction parts from

* property (optional) (string)
 
Name for property to get for all Define staged construction parts in the model

| Returns
<br>Array of StagedConstructionPart objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of StagedConstructionPart objects for all of the Define staged construction parts in model m:<br>
```
var a = StagedConstructionPart.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each Define staged construction part in model m:<br>
```
var a = StagedConstructionPart.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a Define staged construction part. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the Define staged construction part scp:<br>
```
var comm_array = scp.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of StagedConstructionPart objects for all of the flagged Define staged construction parts in a model in PRIMER If the optional property argument is not given then an array of StagedConstructionPart objects is returned. If the property argument is given, then that property value for each Define staged construction part is returned in the array instead of a StagedConstructionPart object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get Define staged construction parts from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the Define staged construction parts that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged Define staged construction parts in the model

| Returns
<br>Array of StagedConstructionPart objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of StagedConstructionPart objects for all of the Define staged construction parts in model m flagged with f:<br>
```
var scp = StagedConstructionPart.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the Define staged construction parts in model m flagged with f:<br>
```
var a = StagedConstructionPart.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the StagedConstructionPart object for a Define staged construction part ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the Define staged construction part in

* number (integer)
 
number of the Define staged construction part you want the StagedConstructionPart object for

| Returns
<br>StagedConstructionPart object (or null if Define staged construction part does not exist).<br>
Return type
<br>StagedConstructionPart |
| --- |

| Example
<br>To get the StagedConstructionPart object for Define staged construction part 100 in model m<br>
```
var scp = StagedConstructionPart.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a StagedConstructionPart property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [StagedConstructionPart.ViewParameters()](primer-stagedconstructionpart-class.md#StagedConstructionPart::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
Define staged construction part property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if StagedConstructionPart property scp.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (scp.GetParameter(scp.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if StagedConstructionPart property scp.example is a parameter by using the GetParameter method:<br>
```
if (scp.ViewParameters().GetParameter(scp.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this Define staged construction parts (\*Define\_staged\_construction\_part). **Note that a carriage return is not added**. See also [StagedConstructionPart.KeywordCards()](primer-stagedconstructionpart-class.md#StagedConstructionPart::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for Define staged construction parts scp:<br>
```
var key = scp.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the Define staged construction parts. **Note that a carriage return is not added**. See also [StagedConstructionPart.Keyword()](primer-stagedconstructionpart-class.md#StagedConstructionPart::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for Define staged construction parts scp:<br>
```
var cards = scp.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last Define staged construction part in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last Define staged construction part in

| Returns
<br>StagedConstructionPart object (or null if there are no Define staged construction parts in the model).<br>
Return type
<br>StagedConstructionPart |
| --- |

| Example
<br>To get the last Define staged construction part in model m:<br>
```
var scp = StagedConstructionPart.Last(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next Define staged construction part in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>StagedConstructionPart object (or null if there are no more Define staged construction parts in the model).<br>
Return type
<br>StagedConstructionPart |
| --- |

| Example
<br>To get the Define staged construction part in model m after Define staged construction part scp:<br>
```
var scp = scp.Next();
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a Define staged construction part. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only Define staged construction parts from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only Define staged construction parts that are flagged with *limit* can be selected. If omitted, or null, any Define staged construction parts from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[StagedConstructionPart](primer-stagedconstructionpart-class.md) object (or null if not picked)<br>
Return type
<br>StagedConstructionPart |
| --- |

| Example
<br>To pick a Define staged construction part from model m giving the prompt 'Pick Define staged construction part from screen':<br>
```
var scp = StagedConstructionPart.Pick('Pick Define staged construction part from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous Define staged construction part in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>StagedConstructionPart object (or null if there are no more Define staged construction parts in the model).<br>
Return type
<br>StagedConstructionPart |
| --- |

| Example
<br>To get the Define staged construction part in model m before Define staged construction part scp:<br>
```
var scp = scp.Previous();
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select Define staged construction parts using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting Define staged construction parts

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only Define staged construction parts from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only Define staged construction parts that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any Define staged construction parts can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of Define staged construction parts selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select Define staged construction parts from model m, flagging those selected with flag f, giving the prompt 'Select Define staged construction parts':<br>
```
StagedConstructionPart.Select(f, 'Select Define staged construction parts', m);
```
<br><br>To select Define staged construction parts, flagging those selected with flag f but limiting selection to Define staged construction parts flagged with flag l, giving the prompt 'Select Define staged construction parts':<br>
```
StagedConstructionPart.Select(f, 'Select Define staged construction parts', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the Define staged construction part. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the Define staged construction part

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for Define staged construction part scp:<br>
```
scp.SetFlag(f);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the Define staged construction part. The Define staged construction part will be sketched until you either call [StagedConstructionPart.Unsketch()](primer-stagedconstructionpart-class.md#StagedConstructionPart::Unsketch), [StagedConstructionPart.UnsketchAll()](primer-stagedconstructionpart-class.md#StagedConstructionPart::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the Define staged construction part is sketched. If omitted redraw is true. If you want to sketch several Define staged construction parts and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch Define staged construction part scp:<br>
```
scp.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged Define staged construction parts in the model. The Define staged construction parts will be sketched until you either call [StagedConstructionPart.Unsketch()](primer-stagedconstructionpart-class.md#StagedConstructionPart::Unsketch), [StagedConstructionPart.UnsketchFlagged()](primer-stagedconstructionpart-class.md#StagedConstructionPart::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged Define staged construction parts will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the Define staged construction parts that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the Define staged construction parts are sketched. If omitted redraw is true. If you want to sketch flagged Define staged construction parts several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all Define staged construction parts flagged with flag in model m:<br>
```
StagedConstructionPart.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of Define staged construction parts in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing Define staged construction parts should be counted. If false or omitted
referenced but undefined Define staged construction parts will also be included in the total.

| Returns
<br>number of Define staged construction parts<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of Define staged construction parts in model m:<br>
```
var total = StagedConstructionPart.Total(m);
```
 |
| --- |

* * *

| Unblank()

Description<br>Unblanks the Define staged construction part |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank Define staged construction part scp:<br>
```
scp.Unblank();
```
 |
| --- |

* * *

| UnblankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the Define staged construction parts in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all Define staged construction parts will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the Define staged construction parts in model m:<br>
```
StagedConstructionPart.UnblankAll(m);
```
 |
| --- |

* * *

| UnblankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the flagged Define staged construction parts in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the flagged Define staged construction parts will be unblanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the Define staged construction parts that you want to unblank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the Define staged construction parts in model m flagged with f:<br>
```
StagedConstructionPart.UnblankFlagged(m, f);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the Define staged construction parts in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all Define staged construction parts will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the Define staged construction parts

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the Define staged construction parts in model m:<br>
```
StagedConstructionPart.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the Define staged construction part. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the Define staged construction part is unsketched. If omitted redraw is true. If you want to unsketch several Define staged construction parts and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch Define staged construction part scp:<br>
```
scp.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all Define staged construction parts. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all Define staged construction parts will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the Define staged construction parts are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all Define staged construction parts in model m:<br>
```
StagedConstructionPart.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged Define staged construction parts in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all Define staged construction parts will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the Define staged construction parts that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the Define staged construction parts are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all Define staged construction parts flagged with flag in model m:<br>
```
StagedConstructionPart.UnsketchAll(m, flag);
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
<br>[StagedConstructionPart](primer-stagedconstructionpart-class.md) object.<br>
Return type
<br>StagedConstructionPart |
| --- |

| Example
<br>To check if StagedConstructionPart property scp.example is a parameter by using the [StagedConstructionPart.GetParameter()](primer-stagedconstructionpart-class.md#StagedConstructionPart::GetParameter) method:<br>
```
if (scp.ViewParameters().GetParameter(scp.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for Define staged construction part. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for Define staged construction part scp:<br>
```
scp.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this Define staged construction part. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for Define staged construction part scp:<br>
```
var xrefs = scp.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the Define staged construction parts data in keyword format. Note that this contains the keyword header and the keyword cards. See also [StagedConstructionPart.Keyword()](primer-stagedconstructionpart-class.md#StagedConstructionPart::Keyword) and [StagedConstructionPart.KeywordCards()](primer-stagedconstructionpart-class.md#StagedConstructionPart::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for Define staged construction parts scp in keyword format<br>
```
var s = scp.toString();
```
 |
| --- |

* * *