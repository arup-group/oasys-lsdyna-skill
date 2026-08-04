# LoadRigidBody class

The LoadRigidBody class gives you access to define load rigidbody cards in PRIMER. [More...](primer-loadrigidbody-class.md#LoadRigidBody_details)

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

* [BlankAll](primer-loadrigidbody-class.md#LoadRigidBody::BlankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [BlankFlagged](primer-loadrigidbody-class.md#LoadRigidBody::BlankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [First](primer-loadrigidbody-class.md#LoadRigidBody::First)(Model*[[Model](primer-model-class.md)]*)
* [FlagAll](primer-loadrigidbody-class.md#LoadRigidBody::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-loadrigidbody-class.md#LoadRigidBody::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-loadrigidbody-class.md#LoadRigidBody::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-loadrigidbody-class.md#LoadRigidBody::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-loadrigidbody-class.md#LoadRigidBody::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-loadrigidbody-class.md#LoadRigidBody::Last)(Model*[[Model](primer-model-class.md)]*)
* [Pick](primer-loadrigidbody-class.md#LoadRigidBody::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [Select](primer-loadrigidbody-class.md#LoadRigidBody::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-loadrigidbody-class.md#LoadRigidBody::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-loadrigidbody-class.md#LoadRigidBody::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnblankAll](primer-loadrigidbody-class.md#LoadRigidBody::UnblankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnblankFlagged](primer-loadrigidbody-class.md#LoadRigidBody::UnblankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [UnflagAll](primer-loadrigidbody-class.md#LoadRigidBody::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-loadrigidbody-class.md#LoadRigidBody::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-loadrigidbody-class.md#LoadRigidBody::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-loadrigidbody-class.md#LoadRigidBody::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Blank](primer-loadrigidbody-class.md#LoadRigidBody::Blank)()
* [Blanked](primer-loadrigidbody-class.md#LoadRigidBody::Blanked)()
* [ClearFlag](primer-loadrigidbody-class.md#LoadRigidBody::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-loadrigidbody-class.md#LoadRigidBody::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-loadrigidbody-class.md#LoadRigidBody::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Error](primer-loadrigidbody-class.md#LoadRigidBody::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-loadrigidbody-class.md#LoadRigidBody::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-loadrigidbody-class.md#LoadRigidBody::GetComments)()
* [GetParameter](primer-loadrigidbody-class.md#LoadRigidBody::GetParameter)(prop*[string]*)
* [Keyword](primer-loadrigidbody-class.md#LoadRigidBody::Keyword)()
* [KeywordCards](primer-loadrigidbody-class.md#LoadRigidBody::KeywordCards)()
* [Next](primer-loadrigidbody-class.md#LoadRigidBody::Next)()
* [Previous](primer-loadrigidbody-class.md#LoadRigidBody::Previous)()
* [SetFlag](primer-loadrigidbody-class.md#LoadRigidBody::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Sketch](primer-loadrigidbody-class.md#LoadRigidBody::Sketch)(redraw (optional)*[boolean]*)
* [Unblank](primer-loadrigidbody-class.md#LoadRigidBody::Unblank)()
* [Unsketch](primer-loadrigidbody-class.md#LoadRigidBody::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-loadrigidbody-class.md#LoadRigidBody::ViewParameters)()
* [Warning](primer-loadrigidbody-class.md#LoadRigidBody::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-loadrigidbody-class.md#LoadRigidBody::Xrefs)()
* [toString](primer-loadrigidbody-class.md#LoadRigidBody::toString)()

## LoadRigidBody properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| cid | integer | Coordinate system ID |
| dof | integer | Applicable degrees-of-freedom |
| exists (read only) | logical | true if load rigidbody exists, false if referred to but not defined. |
| include | integer | The [Include](primer-include-class.md) file number that the load rigidbody is in. |
| lcid | integer | [Curve](primer-curve-class.md) ID |
| m1 | integer | [Node](primer-node-class.md) 1 ID |
| m2 | integer | [Node](primer-node-class.md) 2 ID |
| m3 | integer | [Node](primer-node-class.md) 3 ID |
| model (read only) | integer | The [Model](primer-model-class.md) number that the load rigidbody is in. |
| pid | integer | [Part](primer-part-class.md) ID |
| sf | real | Curve scale factor |

| Detailed Description<br>The LoadRigidBody class allows you to create, modify, edit and manipulate load rigidbody cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new LoadRigidBody(Model*[[Model](primer-model-class.md)]*, pid*[integer]*, dof*[integer]*, lcid*[integer]*, sf (optional)*[real]*, cid (optional)*[integer]*, m1 (optional)*[integer]*, m2 (optional)*[integer]*, m3 (optional)*[integer]*)

Description<br>Create a new [LoadRigidBody](primer-loadrigidbody-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that load rigidbody will be created in

* pid (integer)
 
[Part](primer-part-class.md) ID

* dof (integer)
 
Applicable degrees-of-freedom

* lcid (integer)
 
[Curve](primer-curve-class.md) ID

* sf (optional) (real)
 
Curve scale factor

* cid (optional) (integer)
 
Coordinate system ID

* m1 (optional) (integer)
 
[Node](primer-node-class.md) 1 ID

* m2 (optional) (integer)
 
[Node](primer-node-class.md) 2 ID

* m3 (optional) (integer)
 
[Node](primer-node-class.md) 3 ID

| Returns
<br>[LoadRigidBody](primer-loadrigidbody-class.md) object<br>
Return type
<br>LoadRigidBody |
| --- |

| Example
<br>To create a new load rigidbody in model m, for part 100, with loadcurve 9 and a scale factor of 0.5<br>
```
var lrb = new LoadRigidBody(m, 100, 2, 9, 0.5);
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a load rigidbody. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the load rigidbody

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the load rigidbody lrb:<br>
```
lrb.AssociateComment(c);
```
 |
| --- |

* * *

| Blank()

Description<br>Blanks the load rigidbody |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To blank load rigidbody lrb:<br>
```
lrb.Blank();
```
 |
| --- |

* * *

| BlankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the load rigidbodies in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all load rigidbodies will be blanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the load rigidbodies in model m:<br>
```
LoadRigidBody.BlankAll(m);
```
 |
| --- |

* * *

| BlankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the flagged load rigidbodies in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged load rigidbodies will be blanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the load rigidbodies that you want to blank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the load rigidbodies in model m flagged with f:<br>
```
LoadRigidBody.BlankFlagged(m, f);
```
 |
| --- |

* * *

| Blanked()

Description<br>Checks if the load rigidbody is blanked or not. |
| --- |

#### Arguments

No arguments

| Returns
<br>true if blanked, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if load rigidbody lrb is blanked:<br>
```
if (lrb.Blanked() ) do_something...
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the load rigidbody. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the load rigidbody

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for load rigidbody lrb:<br>
```
lrb.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the load rigidbody. The target include of the copied load rigidbody can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>LoadRigidBody object<br>
Return type
<br>LoadRigidBody |
| --- |

| Example
<br>To copy load rigidbody lrb into load rigidbody z:<br>
```
var z = lrb.Copy();
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a load rigidbody. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the load rigidbody

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the load rigidbody lrb:<br>
```
lrb.DetachComment(c);
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for load rigidbody. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for load rigidbody lrb:<br>
```
lrb.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first load rigidbody in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first load rigidbody in

| Returns
<br>LoadRigidBody object (or null if there are no load rigidbodies in the model).<br>
Return type
<br>LoadRigidBody |
| --- |

| Example
<br>To get the first load rigidbody in model m:<br>
```
var lrb = LoadRigidBody.First(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the load rigidbodies in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all load rigidbodies will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the load rigidbodies

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the load rigidbodies with flag f in model m:<br>
```
LoadRigidBody.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the load rigidbody is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the load rigidbody

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if load rigidbody lrb has flag f set on it:<br>
```
if (lrb.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each load rigidbody in the model.<br> **Note that ForEach has been designed to make looping over load rigidbodies as fast as possible and so has some limitations. Firstly, a single temporary LoadRigidBody object is created and on each function call it is updated with the current load rigidbody data. This means that you should not try to store the LoadRigidBody object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new load rigidbodies inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all load rigidbodies are in

* func (function)
 
Function to call for each load rigidbody

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the load rigidbodies in model m:<br>
```
LoadRigidBody.ForEach(m, test);
function test(lrb)
{
// lrb is LoadRigidBody object
}
```
<br><br>To call function test for all of the load rigidbodies in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
LoadRigidBody.ForEach(m, test, data);
function test(lrb, extra)
{
// lrb is LoadRigidBody object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of LoadRigidBody objects or properties for all of the load rigidbodies in a model in PRIMER. If the optional property argument is not given then an array of LoadRigidBody objects is returned. If the property argument is given, that property value for each load rigidbody is returned in the array instead of a LoadRigidBody object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get load rigidbodies from

* property (optional) (string)
 
Name for property to get for all load rigidbodies in the model

| Returns
<br>Array of LoadRigidBody objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of LoadRigidBody objects for all of the load rigidbodies in model m:<br>
```
var a = LoadRigidBody.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each load rigidbody in model m:<br>
```
var a = LoadRigidBody.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a load rigidbody. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the load rigidbody lrb:<br>
```
var comm_array = lrb.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of LoadRigidBody objects for all of the flagged load rigidbodies in a model in PRIMER If the optional property argument is not given then an array of LoadRigidBody objects is returned. If the property argument is given, then that property value for each load rigidbody is returned in the array instead of a LoadRigidBody object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get load rigidbodies from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the load rigidbodies that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged load rigidbodies in the model

| Returns
<br>Array of LoadRigidBody objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of LoadRigidBody objects for all of the load rigidbodies in model m flagged with f:<br>
```
var lrb = LoadRigidBody.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the load rigidbodies in model m flagged with f:<br>
```
var a = LoadRigidBody.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the LoadRigidBody object for a load rigidbody ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the load rigidbody in

* number (integer)
 
number of the load rigidbody you want the LoadRigidBody object for

| Returns
<br>LoadRigidBody object (or null if load rigidbody does not exist).<br>
Return type
<br>LoadRigidBody |
| --- |

| Example
<br>To get the LoadRigidBody object for load rigidbody 100 in model m<br>
```
var lrb = LoadRigidBody.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a LoadRigidBody property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [LoadRigidBody.ViewParameters()](primer-loadrigidbody-class.md#LoadRigidBody::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
load rigidbody property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if LoadRigidBody property lrb.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (lrb.GetParameter(lrb.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if LoadRigidBody property lrb.example is a parameter by using the GetParameter method:<br>
```
if (lrb.ViewParameters().GetParameter(lrb.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this load rigidbody (\*LOAD\_RIGIDBODY). **Note that a carriage return is not added**. See also [LoadRigidBody.KeywordCards()](primer-loadrigidbody-class.md#LoadRigidBody::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for load rigidbody lrb:<br>
```
var key = lrb.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the load rigidbody. **Note that a carriage return is not added**. See also [LoadRigidBody.Keyword()](primer-loadrigidbody-class.md#LoadRigidBody::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for load rigidbody lrb:<br>
```
var cards = lrb.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last load rigidbody in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last load rigidbody in

| Returns
<br>LoadRigidBody object (or null if there are no load rigidbodies in the model).<br>
Return type
<br>LoadRigidBody |
| --- |

| Example
<br>To get the last load rigidbody in model m:<br>
```
var lrb = LoadRigidBody.Last(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next load rigidbody in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>LoadRigidBody object (or null if there are no more load rigidbodies in the model).<br>
Return type
<br>LoadRigidBody |
| --- |

| Example
<br>To get the load rigidbody in model m after load rigidbody lrb:<br>
```
var lrb = lrb.Next();
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a load rigidbody. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only load rigidbodies from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only load rigidbodies that are flagged with *limit* can be selected. If omitted, or null, any load rigidbodies from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[LoadRigidBody](primer-loadrigidbody-class.md) object (or null if not picked)<br>
Return type
<br>LoadRigidBody |
| --- |

| Example
<br>To pick a load rigidbody from model m giving the prompt 'Pick load rigidbody from screen':<br>
```
var lrb = LoadRigidBody.Pick('Pick load rigidbody from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous load rigidbody in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>LoadRigidBody object (or null if there are no more load rigidbodies in the model).<br>
Return type
<br>LoadRigidBody |
| --- |

| Example
<br>To get the load rigidbody in model m before load rigidbody lrb:<br>
```
var lrb = lrb.Previous();
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select load rigidbodies using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting load rigidbodies

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only load rigidbodies from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only load rigidbodies that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any load rigidbodies can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of load rigidbodies selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select load rigidbodies from model m, flagging those selected with flag f, giving the prompt 'Select load rigidbodies':<br>
```
LoadRigidBody.Select(f, 'Select load rigidbodies', m);
```
<br><br>To select load rigidbodies, flagging those selected with flag f but limiting selection to load rigidbodies flagged with flag l, giving the prompt 'Select load rigidbodies':<br>
```
LoadRigidBody.Select(f, 'Select load rigidbodies', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the load rigidbody. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the load rigidbody

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for load rigidbody lrb:<br>
```
lrb.SetFlag(f);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the load rigidbody. The load rigidbody will be sketched until you either call [LoadRigidBody.Unsketch()](primer-loadrigidbody-class.md#LoadRigidBody::Unsketch), [LoadRigidBody.UnsketchAll()](primer-loadrigidbody-class.md#LoadRigidBody::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the load rigidbody is sketched. If omitted redraw is true. If you want to sketch several load rigidbodies and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch load rigidbody lrb:<br>
```
lrb.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged load rigidbodies in the model. The load rigidbodies will be sketched until you either call [LoadRigidBody.Unsketch()](primer-loadrigidbody-class.md#LoadRigidBody::Unsketch), [LoadRigidBody.UnsketchFlagged()](primer-loadrigidbody-class.md#LoadRigidBody::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged load rigidbodies will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the load rigidbodies that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the load rigidbodies are sketched. If omitted redraw is true. If you want to sketch flagged load rigidbodies several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all load rigidbodies flagged with flag in model m:<br>
```
LoadRigidBody.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of load rigidbodies in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing load rigidbodies should be counted. If false or omitted
referenced but undefined load rigidbodies will also be included in the total.

| Returns
<br>number of load rigidbodies<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of load rigidbodies in model m:<br>
```
var total = LoadRigidBody.Total(m);
```
 |
| --- |

* * *

| Unblank()

Description<br>Unblanks the load rigidbody |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank load rigidbody lrb:<br>
```
lrb.Unblank();
```
 |
| --- |

* * *

| UnblankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the load rigidbodies in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all load rigidbodies will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the load rigidbodies in model m:<br>
```
LoadRigidBody.UnblankAll(m);
```
 |
| --- |

* * *

| UnblankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the flagged load rigidbodies in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the flagged load rigidbodies will be unblanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the load rigidbodies that you want to unblank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the load rigidbodies in model m flagged with f:<br>
```
LoadRigidBody.UnblankFlagged(m, f);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the load rigidbodies in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all load rigidbodies will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the load rigidbodies

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the load rigidbodies in model m:<br>
```
LoadRigidBody.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the load rigidbody. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the load rigidbody is unsketched. If omitted redraw is true. If you want to unsketch several load rigidbodies and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch load rigidbody lrb:<br>
```
lrb.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all load rigidbodies. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all load rigidbodies will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the load rigidbodies are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all load rigidbodies in model m:<br>
```
LoadRigidBody.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged load rigidbodies in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all load rigidbodies will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the load rigidbodies that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the load rigidbodies are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all load rigidbodies flagged with flag in model m:<br>
```
LoadRigidBody.UnsketchAll(m, flag);
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
<br>[LoadRigidBody](primer-loadrigidbody-class.md) object.<br>
Return type
<br>LoadRigidBody |
| --- |

| Example
<br>To check if LoadRigidBody property lrb.example is a parameter by using the [LoadRigidBody.GetParameter()](primer-loadrigidbody-class.md#LoadRigidBody::GetParameter) method:<br>
```
if (lrb.ViewParameters().GetParameter(lrb.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for load rigidbody. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for load rigidbody lrb:<br>
```
lrb.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this load rigidbody. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for load rigidbody lrb:<br>
```
var xrefs = lrb.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the load rigidbody data in keyword format. Note that this contains the keyword header and the keyword cards. See also [LoadRigidBody.Keyword()](primer-loadrigidbody-class.md#LoadRigidBody::Keyword) and [LoadRigidBody.KeywordCards()](primer-loadrigidbody-class.md#LoadRigidBody::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for load rigidbody lrb in keyword format<br>
```
var s = lrb.toString();
```
 |
| --- |

* * *