# IGAIntegrationSolidReduce class

The IGAIntegrationSolidReduce class gives you access to IGA integration solid reduce cards in PRIMER. [More...](primer-igaintegrationsolidreduce-class.md#IGAIntegrationSolidReduce_details)

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

* [Create](primer-igaintegrationsolidreduce-class.md#IGAIntegrationSolidReduce::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [First](primer-igaintegrationsolidreduce-class.md#IGAIntegrationSolidReduce::First)(Model*[[Model](primer-model-class.md)]*)
* [FlagAll](primer-igaintegrationsolidreduce-class.md#IGAIntegrationSolidReduce::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-igaintegrationsolidreduce-class.md#IGAIntegrationSolidReduce::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-igaintegrationsolidreduce-class.md#IGAIntegrationSolidReduce::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-igaintegrationsolidreduce-class.md#IGAIntegrationSolidReduce::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-igaintegrationsolidreduce-class.md#IGAIntegrationSolidReduce::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-igaintegrationsolidreduce-class.md#IGAIntegrationSolidReduce::Last)(Model*[[Model](primer-model-class.md)]*)
* [Pick](primer-igaintegrationsolidreduce-class.md#IGAIntegrationSolidReduce::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [Select](primer-igaintegrationsolidreduce-class.md#IGAIntegrationSolidReduce::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-igaintegrationsolidreduce-class.md#IGAIntegrationSolidReduce::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-igaintegrationsolidreduce-class.md#IGAIntegrationSolidReduce::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnflagAll](primer-igaintegrationsolidreduce-class.md#IGAIntegrationSolidReduce::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-igaintegrationsolidreduce-class.md#IGAIntegrationSolidReduce::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-igaintegrationsolidreduce-class.md#IGAIntegrationSolidReduce::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-igaintegrationsolidreduce-class.md#IGAIntegrationSolidReduce::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Browse](primer-igaintegrationsolidreduce-class.md#IGAIntegrationSolidReduce::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-igaintegrationsolidreduce-class.md#IGAIntegrationSolidReduce::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-igaintegrationsolidreduce-class.md#IGAIntegrationSolidReduce::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-igaintegrationsolidreduce-class.md#IGAIntegrationSolidReduce::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-igaintegrationsolidreduce-class.md#IGAIntegrationSolidReduce::Edit)(modal (optional)*[boolean]*)
* [Error](primer-igaintegrationsolidreduce-class.md#IGAIntegrationSolidReduce::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-igaintegrationsolidreduce-class.md#IGAIntegrationSolidReduce::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-igaintegrationsolidreduce-class.md#IGAIntegrationSolidReduce::GetComments)()
* [GetParameter](primer-igaintegrationsolidreduce-class.md#IGAIntegrationSolidReduce::GetParameter)(prop*[string]*)
* [Keyword](primer-igaintegrationsolidreduce-class.md#IGAIntegrationSolidReduce::Keyword)()
* [KeywordCards](primer-igaintegrationsolidreduce-class.md#IGAIntegrationSolidReduce::KeywordCards)()
* [Next](primer-igaintegrationsolidreduce-class.md#IGAIntegrationSolidReduce::Next)()
* [Previous](primer-igaintegrationsolidreduce-class.md#IGAIntegrationSolidReduce::Previous)()
* [SetFlag](primer-igaintegrationsolidreduce-class.md#IGAIntegrationSolidReduce::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Sketch](primer-igaintegrationsolidreduce-class.md#IGAIntegrationSolidReduce::Sketch)(redraw (optional)*[boolean]*)
* [Unsketch](primer-igaintegrationsolidreduce-class.md#IGAIntegrationSolidReduce::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-igaintegrationsolidreduce-class.md#IGAIntegrationSolidReduce::ViewParameters)()
* [Warning](primer-igaintegrationsolidreduce-class.md#IGAIntegrationSolidReduce::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-igaintegrationsolidreduce-class.md#IGAIntegrationSolidReduce::Xrefs)()
* [toString](primer-igaintegrationsolidreduce-class.md#IGAIntegrationSolidReduce::toString)()

## IGAIntegrationSolidReduce properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists (read only) | logical | true if IGA Integration Solid Reduce exists, false if referred to but not defined. |
| id (read only) | integer | ID of the IGA integration solid reduce. Only used in PRIMER. |
| include | integer | The [Include](primer-include-class.md) file number that the IGA Integration Solid Reduce is in. |
| model (read only) | integer | The [Model](primer-model-class.md) number that the IGA Integration Solid Reduce is in. |
| nrdr | int | Reduced degree in the r-direction. |
| nrds | int | Reduced degree in the s-direction. |
| nrdt | int | Reduced degree in the t-direction. |
| patchid | integer | PATCH ID defined in \*IGA\_SOLID. |

| Detailed Description<br>The IGAIntegrationSolidReduce class allows you to create, modify, edit and manipulate IGA integration solid reduce cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new IGAIntegrationSolidReduce(Model*[[Model](primer-model-class.md)]*, details*[object]*)

Description<br>Create a new [IGAIntegrationSolidReduce](primer-igaintegrationsolidreduce-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that IGA integration solid reduce will be created in

* details (object)

Details for creating the [IGAIntegrationSolidReduce](primer-igaintegrationsolidreduce-class.md) 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| nrdr (optional) | int | Reduced degree in the r-direction. |
| nrds (optional) | int | Reduced degree in the s-direction. |
| nrdt (optional) | int | Reduced degree in the t-direction. |
| patchid | integer | PATCH ID defined in \*IGA\_SOLID. |

| Returns
<br>[IGAIntegrationSolidReduce](primer-igaintegrationsolidreduce-class.md) object<br>
Return type
<br>IGAIntegrationSolidReduce |
| --- |

| Example
<br>To create a new IGA integration solid reduce in model m for solid patch 10:<br>
```
var igiso = new IGAIntegrationSolidReduce(m, {patchid: 10});
```
<br>To create a new IGA integration solid reduce in model m for solid patch 20 with nrdr, nrds and nrdt as 1, 2 and 2 respectively:<br>
```
var igiso = new IGAIntegrationSolidReduce(m, {patchid: 20, nrdr: 1, nrds: 2, nrdt: 2});
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a IGA Integration Solid Reduce. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the IGA Integration Solid Reduce

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the IGA Integration Solid Reduce igiso:<br>
```
igiso.AssociateComment(c);
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
<br>To Browse IGA Integration Solid Reduce igiso:<br>
```
igiso.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the IGA Integration Solid Reduce. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the IGA Integration Solid Reduce

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for IGA Integration Solid Reduce igiso:<br>
```
igiso.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the IGA Integration Solid Reduce. The target include of the copied IGA Integration Solid Reduce can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>IGAIntegrationSolidReduce object<br>
Return type
<br>IGAIntegrationSolidReduce |
| --- |

| Example
<br>To copy IGA Integration Solid Reduce igiso into IGA Integration Solid Reduce z:<br>
```
var z = igiso.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a IGA Integration Solid Reduce |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the IGA Integration Solid Reduce will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>IGAIntegrationSolidReduce object (or null if not made).<br>
Return type
<br>IGAIntegrationSolidReduce |
| --- |

| Example
<br>To start creating a IGA Integration Solid Reduce in model m:<br>
```
var igiso = IGAIntegrationSolidReduce.Create(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a IGA Integration Solid Reduce. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the IGA Integration Solid Reduce

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the IGA Integration Solid Reduce igiso:<br>
```
igiso.DetachComment(c);
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
<br>To Edit IGA Integration Solid Reduce igiso:<br>
```
igiso.Edit();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for IGA Integration Solid Reduce. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for IGA Integration Solid Reduce igiso:<br>
```
igiso.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first IGA Integration Solid Reduce in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first IGA Integration Solid Reduce in

| Returns
<br>IGAIntegrationSolidReduce object (or null if there are no IGA Integration Solid Reduces in the model).<br>
Return type
<br>IGAIntegrationSolidReduce |
| --- |

| Example
<br>To get the first IGA Integration Solid Reduce in model m:<br>
```
var igiso = IGAIntegrationSolidReduce.First(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the IGA Integration Solid Reduces in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all IGA Integration Solid Reduces will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the IGA Integration Solid Reduces

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the IGA Integration Solid Reduces with flag f in model m:<br>
```
IGAIntegrationSolidReduce.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the IGA Integration Solid Reduce is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the IGA Integration Solid Reduce

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if IGA Integration Solid Reduce igiso has flag f set on it:<br>
```
if (igiso.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each IGA Integration Solid Reduce in the model.<br> **Note that ForEach has been designed to make looping over IGA Integration Solid Reduces as fast as possible and so has some limitations. Firstly, a single temporary IGAIntegrationSolidReduce object is created and on each function call it is updated with the current IGA Integration Solid Reduce data. This means that you should not try to store the IGAIntegrationSolidReduce object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new IGA Integration Solid Reduces inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all IGA Integration Solid Reduces are in

* func (function)
 
Function to call for each IGA Integration Solid Reduce

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the IGA Integration Solid Reduces in model m:<br>
```
IGAIntegrationSolidReduce.ForEach(m, test);
function test(igiso)
{
// igiso is IGAIntegrationSolidReduce object
}
```
<br><br>To call function test for all of the IGA Integration Solid Reduces in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
IGAIntegrationSolidReduce.ForEach(m, test, data);
function test(igiso, extra)
{
// igiso is IGAIntegrationSolidReduce object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of IGAIntegrationSolidReduce objects or properties for all of the IGA Integration Solid Reduces in a model in PRIMER. If the optional property argument is not given then an array of IGAIntegrationSolidReduce objects is returned. If the property argument is given, that property value for each IGA Integration Solid Reduce is returned in the array instead of a IGAIntegrationSolidReduce object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get IGA Integration Solid Reduces from

* property (optional) (string)
 
Name for property to get for all IGA Integration Solid Reduces in the model

| Returns
<br>Array of IGAIntegrationSolidReduce objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of IGAIntegrationSolidReduce objects for all of the IGA Integration Solid Reduces in model m:<br>
```
var a = IGAIntegrationSolidReduce.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each IGA Integration Solid Reduce in model m:<br>
```
var a = IGAIntegrationSolidReduce.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a IGA Integration Solid Reduce. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the IGA Integration Solid Reduce igiso:<br>
```
var comm_array = igiso.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of IGAIntegrationSolidReduce objects for all of the flagged IGA Integration Solid Reduces in a model in PRIMER If the optional property argument is not given then an array of IGAIntegrationSolidReduce objects is returned. If the property argument is given, then that property value for each IGA Integration Solid Reduce is returned in the array instead of a IGAIntegrationSolidReduce object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get IGA Integration Solid Reduces from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the IGA Integration Solid Reduces that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged IGA Integration Solid Reduces in the model

| Returns
<br>Array of IGAIntegrationSolidReduce objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of IGAIntegrationSolidReduce objects for all of the IGA Integration Solid Reduces in model m flagged with f:<br>
```
var igiso = IGAIntegrationSolidReduce.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the IGA Integration Solid Reduces in model m flagged with f:<br>
```
var a = IGAIntegrationSolidReduce.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the IGAIntegrationSolidReduce object for a IGA Integration Solid Reduce ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the IGA Integration Solid Reduce in

* number (integer)
 
number of the IGA Integration Solid Reduce you want the IGAIntegrationSolidReduce object for

| Returns
<br>IGAIntegrationSolidReduce object (or null if IGA Integration Solid Reduce does not exist).<br>
Return type
<br>IGAIntegrationSolidReduce |
| --- |

| Example
<br>To get the IGAIntegrationSolidReduce object for IGA Integration Solid Reduce 100 in model m<br>
```
var igiso = IGAIntegrationSolidReduce.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a IGAIntegrationSolidReduce property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [IGAIntegrationSolidReduce.ViewParameters()](primer-igaintegrationsolidreduce-class.md#IGAIntegrationSolidReduce::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
IGA Integration Solid Reduce property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if IGAIntegrationSolidReduce property igiso.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (igiso.GetParameter(igiso.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if IGAIntegrationSolidReduce property igiso.example is a parameter by using the GetParameter method:<br>
```
if (igiso.ViewParameters().GetParameter(igiso.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this IGA integration solid reduce (\*IGA\_SOLID). **Note that a carriage return is not added**. See also [IGAIntegrationSolidReduce.KeywordCards()](primer-igaintegrationsolidreduce-class.md#IGAIntegrationSolidReduce::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for IGA integration solid reduce igs:<br>
```
var key = igs.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the IGA integration solid reduce. **Note that a carriage return is not added**. See also [IGAIntegrationSolidReduce.Keyword()](primer-igaintegrationsolidreduce-class.md#IGAIntegrationSolidReduce::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for IGA integration solid reduce igs:<br>
```
var cards = igs.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last IGA Integration Solid Reduce in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last IGA Integration Solid Reduce in

| Returns
<br>IGAIntegrationSolidReduce object (or null if there are no IGA Integration Solid Reduces in the model).<br>
Return type
<br>IGAIntegrationSolidReduce |
| --- |

| Example
<br>To get the last IGA Integration Solid Reduce in model m:<br>
```
var igiso = IGAIntegrationSolidReduce.Last(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next IGA Integration Solid Reduce in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>IGAIntegrationSolidReduce object (or null if there are no more IGA Integration Solid Reduces in the model).<br>
Return type
<br>IGAIntegrationSolidReduce |
| --- |

| Example
<br>To get the IGA Integration Solid Reduce in model m after IGA Integration Solid Reduce igiso:<br>
```
var igiso = igiso.Next();
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a IGA Integration Solid Reduce. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only IGA Integration Solid Reduces from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only IGA Integration Solid Reduces that are flagged with *limit* can be selected. If omitted, or null, any IGA Integration Solid Reduces from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[IGAIntegrationSolidReduce](primer-igaintegrationsolidreduce-class.md) object (or null if not picked)<br>
Return type
<br>IGAIntegrationSolidReduce |
| --- |

| Example
<br>To pick a IGA Integration Solid Reduce from model m giving the prompt 'Pick IGA Integration Solid Reduce from screen':<br>
```
var igiso = IGAIntegrationSolidReduce.Pick('Pick IGA Integration Solid Reduce from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous IGA Integration Solid Reduce in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>IGAIntegrationSolidReduce object (or null if there are no more IGA Integration Solid Reduces in the model).<br>
Return type
<br>IGAIntegrationSolidReduce |
| --- |

| Example
<br>To get the IGA Integration Solid Reduce in model m before IGA Integration Solid Reduce igiso:<br>
```
var igiso = igiso.Previous();
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select IGA Integration Solid Reduces using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting IGA Integration Solid Reduces

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only IGA Integration Solid Reduces from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only IGA Integration Solid Reduces that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any IGA Integration Solid Reduces can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of IGA Integration Solid Reduces selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select IGA Integration Solid Reduces from model m, flagging those selected with flag f, giving the prompt 'Select IGA Integration Solid Reduces':<br>
```
IGAIntegrationSolidReduce.Select(f, 'Select IGA Integration Solid Reduces', m);
```
<br><br>To select IGA Integration Solid Reduces, flagging those selected with flag f but limiting selection to IGA Integration Solid Reduces flagged with flag l, giving the prompt 'Select IGA Integration Solid Reduces':<br>
```
IGAIntegrationSolidReduce.Select(f, 'Select IGA Integration Solid Reduces', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the IGA Integration Solid Reduce. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the IGA Integration Solid Reduce

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for IGA Integration Solid Reduce igiso:<br>
```
igiso.SetFlag(f);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the IGA Integration Solid Reduce. The IGA Integration Solid Reduce will be sketched until you either call [IGAIntegrationSolidReduce.Unsketch()](primer-igaintegrationsolidreduce-class.md#IGAIntegrationSolidReduce::Unsketch), [IGAIntegrationSolidReduce.UnsketchAll()](primer-igaintegrationsolidreduce-class.md#IGAIntegrationSolidReduce::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA Integration Solid Reduce is sketched. If omitted redraw is true. If you want to sketch several IGA Integration Solid Reduces and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch IGA Integration Solid Reduce igiso:<br>
```
igiso.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged IGA Integration Solid Reduces in the model. The IGA Integration Solid Reduces will be sketched until you either call [IGAIntegrationSolidReduce.Unsketch()](primer-igaintegrationsolidreduce-class.md#IGAIntegrationSolidReduce::Unsketch), [IGAIntegrationSolidReduce.UnsketchFlagged()](primer-igaintegrationsolidreduce-class.md#IGAIntegrationSolidReduce::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged IGA Integration Solid Reduces will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the IGA Integration Solid Reduces that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA Integration Solid Reduces are sketched. If omitted redraw is true. If you want to sketch flagged IGA Integration Solid Reduces several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all IGA Integration Solid Reduces flagged with flag in model m:<br>
```
IGAIntegrationSolidReduce.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of IGA Integration Solid Reduces in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing IGA Integration Solid Reduces should be counted. If false or omitted
referenced but undefined IGA Integration Solid Reduces will also be included in the total.

| Returns
<br>number of IGA Integration Solid Reduces<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of IGA Integration Solid Reduces in model m:<br>
```
var total = IGAIntegrationSolidReduce.Total(m);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the IGA Integration Solid Reduces in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all IGA Integration Solid Reduces will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the IGA Integration Solid Reduces

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the IGA Integration Solid Reduces in model m:<br>
```
IGAIntegrationSolidReduce.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the IGA Integration Solid Reduce. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA Integration Solid Reduce is unsketched. If omitted redraw is true. If you want to unsketch several IGA Integration Solid Reduces and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch IGA Integration Solid Reduce igiso:<br>
```
igiso.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all IGA Integration Solid Reduces. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all IGA Integration Solid Reduces will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA Integration Solid Reduces are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all IGA Integration Solid Reduces in model m:<br>
```
IGAIntegrationSolidReduce.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged IGA Integration Solid Reduces in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all IGA Integration Solid Reduces will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the IGA Integration Solid Reduces that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the IGA Integration Solid Reduces are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all IGA Integration Solid Reduces flagged with flag in model m:<br>
```
IGAIntegrationSolidReduce.UnsketchAll(m, flag);
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
<br>[IGAIntegrationSolidReduce](primer-igaintegrationsolidreduce-class.md) object.<br>
Return type
<br>IGAIntegrationSolidReduce |
| --- |

| Example
<br>To check if IGAIntegrationSolidReduce property igiso.example is a parameter by using the [IGAIntegrationSolidReduce.GetParameter()](primer-igaintegrationsolidreduce-class.md#IGAIntegrationSolidReduce::GetParameter) method:<br>
```
if (igiso.ViewParameters().GetParameter(igiso.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for IGA Integration Solid Reduce. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for IGA Integration Solid Reduce igiso:<br>
```
igiso.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this IGA Integration Solid Reduce. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for IGA Integration Solid Reduce igiso:<br>
```
var xrefs = igiso.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the IGA integration solid reduce data in keyword format. Note that this contains the keyword header and the keyword cards. See also [IGAIntegrationSolidReduce.Keyword()](primer-igaintegrationsolidreduce-class.md#IGAIntegrationSolidReduce::Keyword) and [IGAIntegrationSolidReduce.KeywordCards()](primer-igaintegrationsolidreduce-class.md#IGAIntegrationSolidReduce::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for IGA integration solid reduce igs in keyword format<br>
```
var s = igs.toString();
```
 |
| --- |

* * *