# IGAIntegrationShellReduce class

The IGAIntegrationShellReduce class gives you access to IGA integration shell reduce cards in PRIMER. [More...](primer-igaintegrationshellreduce-class.md#IGAIntegrationShellReduce_details)

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

* [Create](primer-igaintegrationshellreduce-class.md#IGAIntegrationShellReduce::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [First](primer-igaintegrationshellreduce-class.md#IGAIntegrationShellReduce::First)(Model*[[Model](primer-model-class.md)]*)
* [FlagAll](primer-igaintegrationshellreduce-class.md#IGAIntegrationShellReduce::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-igaintegrationshellreduce-class.md#IGAIntegrationShellReduce::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-igaintegrationshellreduce-class.md#IGAIntegrationShellReduce::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-igaintegrationshellreduce-class.md#IGAIntegrationShellReduce::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-igaintegrationshellreduce-class.md#IGAIntegrationShellReduce::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-igaintegrationshellreduce-class.md#IGAIntegrationShellReduce::Last)(Model*[[Model](primer-model-class.md)]*)
* [Pick](primer-igaintegrationshellreduce-class.md#IGAIntegrationShellReduce::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [Select](primer-igaintegrationshellreduce-class.md#IGAIntegrationShellReduce::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-igaintegrationshellreduce-class.md#IGAIntegrationShellReduce::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-igaintegrationshellreduce-class.md#IGAIntegrationShellReduce::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnflagAll](primer-igaintegrationshellreduce-class.md#IGAIntegrationShellReduce::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-igaintegrationshellreduce-class.md#IGAIntegrationShellReduce::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-igaintegrationshellreduce-class.md#IGAIntegrationShellReduce::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-igaintegrationshellreduce-class.md#IGAIntegrationShellReduce::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Browse](primer-igaintegrationshellreduce-class.md#IGAIntegrationShellReduce::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-igaintegrationshellreduce-class.md#IGAIntegrationShellReduce::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-igaintegrationshellreduce-class.md#IGAIntegrationShellReduce::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-igaintegrationshellreduce-class.md#IGAIntegrationShellReduce::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-igaintegrationshellreduce-class.md#IGAIntegrationShellReduce::Edit)(modal (optional)*[boolean]*)
* [Error](primer-igaintegrationshellreduce-class.md#IGAIntegrationShellReduce::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-igaintegrationshellreduce-class.md#IGAIntegrationShellReduce::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-igaintegrationshellreduce-class.md#IGAIntegrationShellReduce::GetComments)()
* [GetParameter](primer-igaintegrationshellreduce-class.md#IGAIntegrationShellReduce::GetParameter)(prop*[string]*)
* [Keyword](primer-igaintegrationshellreduce-class.md#IGAIntegrationShellReduce::Keyword)()
* [KeywordCards](primer-igaintegrationshellreduce-class.md#IGAIntegrationShellReduce::KeywordCards)()
* [Next](primer-igaintegrationshellreduce-class.md#IGAIntegrationShellReduce::Next)()
* [Previous](primer-igaintegrationshellreduce-class.md#IGAIntegrationShellReduce::Previous)()
* [SetFlag](primer-igaintegrationshellreduce-class.md#IGAIntegrationShellReduce::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Sketch](primer-igaintegrationshellreduce-class.md#IGAIntegrationShellReduce::Sketch)(redraw (optional)*[boolean]*)
* [Unsketch](primer-igaintegrationshellreduce-class.md#IGAIntegrationShellReduce::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-igaintegrationshellreduce-class.md#IGAIntegrationShellReduce::ViewParameters)()
* [Warning](primer-igaintegrationshellreduce-class.md#IGAIntegrationShellReduce::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-igaintegrationshellreduce-class.md#IGAIntegrationShellReduce::Xrefs)()
* [toString](primer-igaintegrationshellreduce-class.md#IGAIntegrationShellReduce::toString)()

## IGAIntegrationShellReduce properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists (read only) | logical | true if IGA Integration Shell Reduce exists, false if referred to but not defined. |
| id (read only) | integer | ID of the IGA integration shell reduce. Only used in PRIMER. |
| include | integer | The [Include](primer-include-class.md) file number that the IGA Integration Shell Reduce is in. |
| model (read only) | integer | The [Model](primer-model-class.md) number that the IGA Integration Shell Reduce is in. |
| nrdr | int | Reduced degree in the r-direction. |
| nrds | int | Reduced degree in the s-direction. |
| patchid | integer | PATCH ID defined in \*IGA\_SHELL. |

| Detailed Description<br>The IGAIntegrationShellReduce class allows you to create, modify, edit and manipulate IGA integration shell reduce cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new IGAIntegrationShellReduce(Model*[[Model](primer-model-class.md)]*, details*[object]*)

Description<br>Create a new [IGAIntegrationShellReduce](primer-igaintegrationshellreduce-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that IGA integration shell reduce will be created in

* details (object)

Details for creating the [IGAIntegrationShellReduce](primer-igaintegrationshellreduce-class.md) 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| nrdr (optional) | int | Reduced degree in the r-direction. |
| nrds (optional) | int | Reduced degree in the s-direction. |
| patchid | integer | PATCH ID defined in \*IGA\_SHELL. |

| Returns
<br>[IGAIntegrationShellReduce](primer-igaintegrationshellreduce-class.md) object<br>
Return type
<br>IGAIntegrationShellReduce |
| --- |

| Example
<br>To create a new IGA integration shell reduce in model m for shell patch 10:<br>
```
var igish = new IGAIntegrationShellReduce(m, {patchid: 10});
```
<br>To create a new IGA integration shell reduce in model m for shell patch 20 with nrdr and nrds 1 and 2 respectively:<br>
```
var igish = new IGAIntegrationShellReduce(m, {patchid: 20, nrdr: 1, nrds: 2});
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a IGA Integration Shell Reduce. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the IGA Integration Shell Reduce

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the IGA Integration Shell Reduce igish:<br>
```
igish.AssociateComment(c);
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
<br>To Browse IGA Integration Shell Reduce igish:<br>
```
igish.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the IGA Integration Shell Reduce. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the IGA Integration Shell Reduce

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for IGA Integration Shell Reduce igish:<br>
```
igish.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the IGA Integration Shell Reduce. The target include of the copied IGA Integration Shell Reduce can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>IGAIntegrationShellReduce object<br>
Return type
<br>IGAIntegrationShellReduce |
| --- |

| Example
<br>To copy IGA Integration Shell Reduce igish into IGA Integration Shell Reduce z:<br>
```
var z = igish.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a IGA Integration Shell Reduce |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the IGA Integration Shell Reduce will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>IGAIntegrationShellReduce object (or null if not made).<br>
Return type
<br>IGAIntegrationShellReduce |
| --- |

| Example
<br>To start creating a IGA Integration Shell Reduce in model m:<br>
```
var igish = IGAIntegrationShellReduce.Create(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a IGA Integration Shell Reduce. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the IGA Integration Shell Reduce

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the IGA Integration Shell Reduce igish:<br>
```
igish.DetachComment(c);
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
<br>To Edit IGA Integration Shell Reduce igish:<br>
```
igish.Edit();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for IGA Integration Shell Reduce. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for IGA Integration Shell Reduce igish:<br>
```
igish.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first IGA Integration Shell Reduce in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first IGA Integration Shell Reduce in

| Returns
<br>IGAIntegrationShellReduce object (or null if there are no IGA Integration Shell Reduces in the model).<br>
Return type
<br>IGAIntegrationShellReduce |
| --- |

| Example
<br>To get the first IGA Integration Shell Reduce in model m:<br>
```
var igish = IGAIntegrationShellReduce.First(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the IGA Integration Shell Reduces in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all IGA Integration Shell Reduces will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the IGA Integration Shell Reduces

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the IGA Integration Shell Reduces with flag f in model m:<br>
```
IGAIntegrationShellReduce.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the IGA Integration Shell Reduce is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the IGA Integration Shell Reduce

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if IGA Integration Shell Reduce igish has flag f set on it:<br>
```
if (igish.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each IGA Integration Shell Reduce in the model.<br> **Note that ForEach has been designed to make looping over IGA Integration Shell Reduces as fast as possible and so has some limitations. Firstly, a single temporary IGAIntegrationShellReduce object is created and on each function call it is updated with the current IGA Integration Shell Reduce data. This means that you should not try to store the IGAIntegrationShellReduce object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new IGA Integration Shell Reduces inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all IGA Integration Shell Reduces are in

* func (function)
 
Function to call for each IGA Integration Shell Reduce

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the IGA Integration Shell Reduces in model m:<br>
```
IGAIntegrationShellReduce.ForEach(m, test);
function test(igish)
{
// igish is IGAIntegrationShellReduce object
}
```
<br><br>To call function test for all of the IGA Integration Shell Reduces in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
IGAIntegrationShellReduce.ForEach(m, test, data);
function test(igish, extra)
{
// igish is IGAIntegrationShellReduce object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of IGAIntegrationShellReduce objects or properties for all of the IGA Integration Shell Reduces in a model in PRIMER. If the optional property argument is not given then an array of IGAIntegrationShellReduce objects is returned. If the property argument is given, that property value for each IGA Integration Shell Reduce is returned in the array instead of a IGAIntegrationShellReduce object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get IGA Integration Shell Reduces from

* property (optional) (string)
 
Name for property to get for all IGA Integration Shell Reduces in the model

| Returns
<br>Array of IGAIntegrationShellReduce objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of IGAIntegrationShellReduce objects for all of the IGA Integration Shell Reduces in model m:<br>
```
var a = IGAIntegrationShellReduce.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each IGA Integration Shell Reduce in model m:<br>
```
var a = IGAIntegrationShellReduce.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a IGA Integration Shell Reduce. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the IGA Integration Shell Reduce igish:<br>
```
var comm_array = igish.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of IGAIntegrationShellReduce objects for all of the flagged IGA Integration Shell Reduces in a model in PRIMER If the optional property argument is not given then an array of IGAIntegrationShellReduce objects is returned. If the property argument is given, then that property value for each IGA Integration Shell Reduce is returned in the array instead of a IGAIntegrationShellReduce object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get IGA Integration Shell Reduces from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the IGA Integration Shell Reduces that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged IGA Integration Shell Reduces in the model

| Returns
<br>Array of IGAIntegrationShellReduce objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of IGAIntegrationShellReduce objects for all of the IGA Integration Shell Reduces in model m flagged with f:<br>
```
var igish = IGAIntegrationShellReduce.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the IGA Integration Shell Reduces in model m flagged with f:<br>
```
var a = IGAIntegrationShellReduce.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the IGAIntegrationShellReduce object for a IGA Integration Shell Reduce ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the IGA Integration Shell Reduce in

* number (integer)
 
number of the IGA Integration Shell Reduce you want the IGAIntegrationShellReduce object for

| Returns
<br>IGAIntegrationShellReduce object (or null if IGA Integration Shell Reduce does not exist).<br>
Return type
<br>IGAIntegrationShellReduce |
| --- |

| Example
<br>To get the IGAIntegrationShellReduce object for IGA Integration Shell Reduce 100 in model m<br>
```
var igish = IGAIntegrationShellReduce.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a IGAIntegrationShellReduce property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [IGAIntegrationShellReduce.ViewParameters()](primer-igaintegrationshellreduce-class.md#IGAIntegrationShellReduce::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
IGA Integration Shell Reduce property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if IGAIntegrationShellReduce property igish.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (igish.GetParameter(igish.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if IGAIntegrationShellReduce property igish.example is a parameter by using the GetParameter method:<br>
```
if (igish.ViewParameters().GetParameter(igish.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this IGA integration shell reduce (\*IGA\_SHELL). **Note that a carriage return is not added**. See also [IGAIntegrationShellReduce.KeywordCards()](primer-igaintegrationshellreduce-class.md#IGAIntegrationShellReduce::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for IGA integration shell reduce igs:<br>
```
var key = igs.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the IGA integration shell reduce. **Note that a carriage return is not added**. See also [IGAIntegrationShellReduce.Keyword()](primer-igaintegrationshellreduce-class.md#IGAIntegrationShellReduce::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for IGA integration shell reduce igs:<br>
```
var cards = igs.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last IGA Integration Shell Reduce in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last IGA Integration Shell Reduce in

| Returns
<br>IGAIntegrationShellReduce object (or null if there are no IGA Integration Shell Reduces in the model).<br>
Return type
<br>IGAIntegrationShellReduce |
| --- |

| Example
<br>To get the last IGA Integration Shell Reduce in model m:<br>
```
var igish = IGAIntegrationShellReduce.Last(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next IGA Integration Shell Reduce in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>IGAIntegrationShellReduce object (or null if there are no more IGA Integration Shell Reduces in the model).<br>
Return type
<br>IGAIntegrationShellReduce |
| --- |

| Example
<br>To get the IGA Integration Shell Reduce in model m after IGA Integration Shell Reduce igish:<br>
```
var igish = igish.Next();
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a IGA Integration Shell Reduce. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only IGA Integration Shell Reduces from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only IGA Integration Shell Reduces that are flagged with *limit* can be selected. If omitted, or null, any IGA Integration Shell Reduces from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[IGAIntegrationShellReduce](primer-igaintegrationshellreduce-class.md) object (or null if not picked)<br>
Return type
<br>IGAIntegrationShellReduce |
| --- |

| Example
<br>To pick a IGA Integration Shell Reduce from model m giving the prompt 'Pick IGA Integration Shell Reduce from screen':<br>
```
var igish = IGAIntegrationShellReduce.Pick('Pick IGA Integration Shell Reduce from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous IGA Integration Shell Reduce in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>IGAIntegrationShellReduce object (or null if there are no more IGA Integration Shell Reduces in the model).<br>
Return type
<br>IGAIntegrationShellReduce |
| --- |

| Example
<br>To get the IGA Integration Shell Reduce in model m before IGA Integration Shell Reduce igish:<br>
```
var igish = igish.Previous();
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select IGA Integration Shell Reduces using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting IGA Integration Shell Reduces

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only IGA Integration Shell Reduces from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only IGA Integration Shell Reduces that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any IGA Integration Shell Reduces can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of IGA Integration Shell Reduces selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select IGA Integration Shell Reduces from model m, flagging those selected with flag f, giving the prompt 'Select IGA Integration Shell Reduces':<br>
```
IGAIntegrationShellReduce.Select(f, 'Select IGA Integration Shell Reduces', m);
```
<br><br>To select IGA Integration Shell Reduces, flagging those selected with flag f but limiting selection to IGA Integration Shell Reduces flagged with flag l, giving the prompt 'Select IGA Integration Shell Reduces':<br>
```
IGAIntegrationShellReduce.Select(f, 'Select IGA Integration Shell Reduces', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the IGA Integration Shell Reduce. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the IGA Integration Shell Reduce

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for IGA Integration Shell Reduce igish:<br>
```
igish.SetFlag(f);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the IGA Integration Shell Reduce. The IGA Integration Shell Reduce will be sketched until you either call [IGAIntegrationShellReduce.Unsketch()](primer-igaintegrationshellreduce-class.md#IGAIntegrationShellReduce::Unsketch), [IGAIntegrationShellReduce.UnsketchAll()](primer-igaintegrationshellreduce-class.md#IGAIntegrationShellReduce::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA Integration Shell Reduce is sketched. If omitted redraw is true. If you want to sketch several IGA Integration Shell Reduces and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch IGA Integration Shell Reduce igish:<br>
```
igish.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged IGA Integration Shell Reduces in the model. The IGA Integration Shell Reduces will be sketched until you either call [IGAIntegrationShellReduce.Unsketch()](primer-igaintegrationshellreduce-class.md#IGAIntegrationShellReduce::Unsketch), [IGAIntegrationShellReduce.UnsketchFlagged()](primer-igaintegrationshellreduce-class.md#IGAIntegrationShellReduce::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged IGA Integration Shell Reduces will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the IGA Integration Shell Reduces that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA Integration Shell Reduces are sketched. If omitted redraw is true. If you want to sketch flagged IGA Integration Shell Reduces several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all IGA Integration Shell Reduces flagged with flag in model m:<br>
```
IGAIntegrationShellReduce.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of IGA Integration Shell Reduces in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing IGA Integration Shell Reduces should be counted. If false or omitted
referenced but undefined IGA Integration Shell Reduces will also be included in the total.

| Returns
<br>number of IGA Integration Shell Reduces<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of IGA Integration Shell Reduces in model m:<br>
```
var total = IGAIntegrationShellReduce.Total(m);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the IGA Integration Shell Reduces in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all IGA Integration Shell Reduces will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the IGA Integration Shell Reduces

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the IGA Integration Shell Reduces in model m:<br>
```
IGAIntegrationShellReduce.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the IGA Integration Shell Reduce. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA Integration Shell Reduce is unsketched. If omitted redraw is true. If you want to unsketch several IGA Integration Shell Reduces and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch IGA Integration Shell Reduce igish:<br>
```
igish.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all IGA Integration Shell Reduces. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all IGA Integration Shell Reduces will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA Integration Shell Reduces are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all IGA Integration Shell Reduces in model m:<br>
```
IGAIntegrationShellReduce.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged IGA Integration Shell Reduces in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all IGA Integration Shell Reduces will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the IGA Integration Shell Reduces that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA Integration Shell Reduces are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all IGA Integration Shell Reduces flagged with flag in model m:<br>
```
IGAIntegrationShellReduce.UnsketchAll(m, flag);
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
<br>[IGAIntegrationShellReduce](primer-igaintegrationshellreduce-class.md) object.<br>
Return type
<br>IGAIntegrationShellReduce |
| --- |

| Example
<br>To check if IGAIntegrationShellReduce property igish.example is a parameter by using the [IGAIntegrationShellReduce.GetParameter()](primer-igaintegrationshellreduce-class.md#IGAIntegrationShellReduce::GetParameter) method:<br>
```
if (igish.ViewParameters().GetParameter(igish.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for IGA Integration Shell Reduce. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for IGA Integration Shell Reduce igish:<br>
```
igish.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this IGA Integration Shell Reduce. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for IGA Integration Shell Reduce igish:<br>
```
var xrefs = igish.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the IGA integration shell reduce data in keyword format. Note that this contains the keyword header and the keyword cards. See also [IGAIntegrationShellReduce.Keyword()](primer-igaintegrationshellreduce-class.md#IGAIntegrationShellReduce::Keyword) and [IGAIntegrationShellReduce.KeywordCards()](primer-igaintegrationshellreduce-class.md#IGAIntegrationShellReduce::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for IGA integration shell reduce igs in keyword format<br>
```
var s = igs.toString();
```
 |
| --- |

* * *