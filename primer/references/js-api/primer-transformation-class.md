# Transformation class

The Transformation class gives you access to define transform cards in PRIMER. [More...](primer-transformation-class.md#Transformation_details)

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

* [Create](primer-transformation-class.md#Transformation::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [First](primer-transformation-class.md#Transformation::First)(Model*[[Model](primer-model-class.md)]*)
* [FirstFreeLabel](primer-transformation-class.md#Transformation::FirstFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [FlagAll](primer-transformation-class.md#Transformation::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-transformation-class.md#Transformation::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-transformation-class.md#Transformation::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-transformation-class.md#Transformation::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-transformation-class.md#Transformation::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-transformation-class.md#Transformation::Last)(Model*[[Model](primer-model-class.md)]*)
* [LastFreeLabel](primer-transformation-class.md#Transformation::LastFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [NextFreeLabel](primer-transformation-class.md#Transformation::NextFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [Select](primer-transformation-class.md#Transformation::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [Total](primer-transformation-class.md#Transformation::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnflagAll](primer-transformation-class.md#Transformation::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

## Member functions

* [AddRow](primer-transformation-class.md#Transformation::AddRow)(data*[Array of data]*, row (optional)*[integer]*)
* [AssociateComment](primer-transformation-class.md#Transformation::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Browse](primer-transformation-class.md#Transformation::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-transformation-class.md#Transformation::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-transformation-class.md#Transformation::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-transformation-class.md#Transformation::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-transformation-class.md#Transformation::Edit)(modal (optional)*[boolean]*)
* [Error](primer-transformation-class.md#Transformation::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-transformation-class.md#Transformation::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-transformation-class.md#Transformation::GetComments)()
* [GetParameter](primer-transformation-class.md#Transformation::GetParameter)(prop*[string]*)
* [GetRow](primer-transformation-class.md#Transformation::GetRow)(row*[integer]*)
* [Keyword](primer-transformation-class.md#Transformation::Keyword)()
* [KeywordCards](primer-transformation-class.md#Transformation::KeywordCards)()
* [Next](primer-transformation-class.md#Transformation::Next)()
* [Previous](primer-transformation-class.md#Transformation::Previous)()
* [RemoveRow](primer-transformation-class.md#Transformation::RemoveRow)(row*[integer]*)
* [SetFlag](primer-transformation-class.md#Transformation::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [SetRow](primer-transformation-class.md#Transformation::SetRow)(row*[integer]*, data*[Array of data]*)
* [ViewParameters](primer-transformation-class.md#Transformation::ViewParameters)()
* [Warning](primer-transformation-class.md#Transformation::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-transformation-class.md#Transformation::Xrefs)()
* [toString](primer-transformation-class.md#Transformation::toString)()

## Transformation properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists (read only) | logical | true if transformation exists, false if referred to but not defined. |
| include | integer | The [Include](primer-include-class.md) file number that the transformation is in. |
| label | integer | [Transformation](primer-transformation-class.md) number. Also see the [tranid](primer-transformation-class.md#tranid) property which is an alternative name for this. |
| model (read only) | integer | The [Model](primer-model-class.md) number that the transformation is in. |
| nrow (read only) | integer | Number of rows of transformations |
| title | string | The title for the transformation. |
| tranid | integer | [Transformation](primer-transformation-class.md) number. Also see the [label](primer-transformation-class.md#label) property which is an alternative name for this. |

| Detailed Description<br>The Transformation class allows you to create, modify, edit and manipulate define transformation cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new Transformation(Model*[[Model](primer-model-class.md)]*, tranid*[integer]*, title (optional)*[string]*)

Description<br>Create a new [Transformation](primer-transformation-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that transformation will be created in

* tranid (integer)
 
[Transformation](primer-transformation-class.md) label

* title (optional) (string)
 
[Transformation](primer-transformation-class.md) title

| Returns
<br>[Transformation](primer-transformation-class.md) object<br>
Return type
<br>Transformation |
| --- |

| Example
<br>To create a new transformation in model m with label 1000 and title "Example transform"<br>
```
var t = new Transformation(m, 1000, "Example transform");
```
 |
| --- |

| Details of functions 
AddRow(data*[Array of data]*, row (optional)*[integer]*)

Description<br>Adds a row of data for a \*DEFINE\_TRANSFORMATION. |
| --- |

#### Arguments

* data (Array of data)
 
The data you want to add

* row (optional) (integer)
 
The row you want to add the data at. Existing transforms will be shifted. If omitted the data will be added to the end of the existing transforms. **Note that row indices start at 0**.

| Returns
<br>No return value. |
| --- |

| Example
<br>To add a translation of (0, 0, 100) to transformation t:<br>
```
var array = ["TRANSL", 0, 0, 100];
t.AddRow(array);
```
 |
| --- |

* * *

| AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a transformation. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the transformation

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the transformation t:<br>
```
t.AssociateComment(c);
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
<br>To Browse transformation t:<br>
```
t.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the transformation. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the transformation

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for transformation t:<br>
```
t.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the transformation. The target include of the copied transformation can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>Transformation object<br>
Return type
<br>Transformation |
| --- |

| Example
<br>To copy transformation t into transformation z:<br>
```
var z = t.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a transformation |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the transformation will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>Transformation object (or null if not made).<br>
Return type
<br>Transformation |
| --- |

| Example
<br>To start creating a transformation in model m:<br>
```
var t = Transformation.Create(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a transformation. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the transformation

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the transformation t:<br>
```
t.DetachComment(c);
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
<br>To Edit transformation t:<br>
```
t.Edit();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for transformation. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for transformation t:<br>
```
t.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first transformation in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first transformation in

| Returns
<br>Transformation object (or null if there are no transformations in the model).<br>
Return type
<br>Transformation |
| --- |

| Example
<br>To get the first transformation in model m:<br>
```
var t = Transformation.First(m);
```
 |
| --- |

* * *

| FirstFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the first free transformation label in the model. Also see [Transformation.LastFreeLabel()](primer-transformation-class.md#Transformation::LastFreeLabel), [Transformation.NextFreeLabel()](primer-transformation-class.md#Transformation::NextFreeLabel) and [Model.FirstFreeItemLabel()](primer-model-class.md#Model::FirstFreeItemLabel). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first free transformation label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *First free in layer* in editing panels). If omitted the whole model will be used (Equivalent to *First free* in editing panels).

| Returns
<br>Transformation label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the first free transformation label in model m:<br>
```
var label = Transformation.FirstFreeLabel(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the transformations in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all transformations will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the transformations

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the transformations with flag f in model m:<br>
```
Transformation.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the transformation is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the transformation

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if transformation t has flag f set on it:<br>
```
if (t.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each transformation in the model.<br> **Note that ForEach has been designed to make looping over transformations as fast as possible and so has some limitations. Firstly, a single temporary Transformation object is created and on each function call it is updated with the current transformation data. This means that you should not try to store the Transformation object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new transformations inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all transformations are in

* func (function)
 
Function to call for each transformation

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the transformations in model m:<br>
```
Transformation.ForEach(m, test);
function test(t)
{
// t is Transformation object
}
```
<br><br>To call function test for all of the transformations in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
Transformation.ForEach(m, test, data);
function test(t, extra)
{
// t is Transformation object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Transformation objects or properties for all of the transformations in a model in PRIMER. If the optional property argument is not given then an array of Transformation objects is returned. If the property argument is given, that property value for each transformation is returned in the array instead of a Transformation object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get transformations from

* property (optional) (string)
 
Name for property to get for all transformations in the model

| Returns
<br>Array of Transformation objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Transformation objects for all of the transformations in model m:<br>
```
var a = Transformation.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each transformation in model m:<br>
```
var a = Transformation.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a transformation. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the transformation t:<br>
```
var comm_array = t.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Transformation objects for all of the flagged transformations in a model in PRIMER If the optional property argument is not given then an array of Transformation objects is returned. If the property argument is given, then that property value for each transformation is returned in the array instead of a Transformation object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get transformations from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the transformations that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged transformations in the model

| Returns
<br>Array of Transformation objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Transformation objects for all of the transformations in model m flagged with f:<br>
```
var t = Transformation.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the transformations in model m flagged with f:<br>
```
var a = Transformation.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the Transformation object for a transformation ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the transformation in

* number (integer)
 
number of the transformation you want the Transformation object for

| Returns
<br>Transformation object (or null if transformation does not exist).<br>
Return type
<br>Transformation |
| --- |

| Example
<br>To get the Transformation object for transformation 100 in model m<br>
```
var t = Transformation.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a Transformation property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [Transformation.ViewParameters()](primer-transformation-class.md#Transformation::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
transformation property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if Transformation property t.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (t.GetParameter(t.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if Transformation property t.example is a parameter by using the GetParameter method:<br>
```
if (t.ViewParameters().GetParameter(t.example) ) do_something...
```
 |
| --- |

* * *

| GetRow(row*[integer]*)

Description<br>Returns the data for a row in the transformation. |
| --- |

#### Arguments

* row (integer)
 
The row you want the data for. **Note row indices start at 0**.

| Returns
<br>An array of numbers containing the row variables.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the data for the 2nd row in transformation t:<br>
```
var data = t.GetRow(1);
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this transformation. **Note that a carriage return is not added**. See also [Transformation.KeywordCards()](primer-transformation-class.md#Transformation::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for transformation t:<br>
```
var key = t.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the transformation. **Note that a carriage return is not added**. See also [Transformation.Keyword()](primer-transformation-class.md#Transformation::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for transformation i:<br>
```
var cards = i.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last transformation in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last transformation in

| Returns
<br>Transformation object (or null if there are no transformations in the model).<br>
Return type
<br>Transformation |
| --- |

| Example
<br>To get the last transformation in model m:<br>
```
var t = Transformation.Last(m);
```
 |
| --- |

* * *

| LastFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the last free transformation label in the model. Also see [Transformation.FirstFreeLabel()](primer-transformation-class.md#Transformation::FirstFreeLabel), [Transformation.NextFreeLabel()](primer-transformation-class.md#Transformation::NextFreeLabel) and see [Model.LastFreeItemLabel()](primer-model-class.md#Model::LastFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last free transformation label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest free in layer* in editing panels). If omitted the whole model will be used.

| Returns
<br>Transformation label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the last free transformation label in model m:<br>
```
var label = Transformation.LastFreeLabel(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next transformation in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Transformation object (or null if there are no more transformations in the model).<br>
Return type
<br>Transformation |
| --- |

| Example
<br>To get the transformation in model m after transformation t:<br>
```
var t = t.Next();
```
 |
| --- |

* * *

| NextFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the next free (highest+1) transformation label in the model. Also see [Transformation.FirstFreeLabel()](primer-transformation-class.md#Transformation::FirstFreeLabel), [Transformation.LastFreeLabel()](primer-transformation-class.md#Transformation::LastFreeLabel) and [Model.NextFreeItemLabel()](primer-model-class.md#Model::NextFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get next free transformation label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest+1 in layer* in editing panels). If omitted the whole model will be used (Equivalent to *Highest+1* in editing panels).

| Returns
<br>Transformation label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the next free transformation label in model m:<br>
```
var label = Transformation.NextFreeLabel(m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous transformation in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Transformation object (or null if there are no more transformations in the model).<br>
Return type
<br>Transformation |
| --- |

| Example
<br>To get the transformation in model m before transformation t:<br>
```
var t = t.Previous();
```
 |
| --- |

* * *

| RemoveRow(row*[integer]*)

Description<br>Removes the data for a row in \*DEFINE\_TRANSFORMATION. |
| --- |

#### Arguments

* row (integer)
 
The row you want to remove the data for. **Note that row indices start at 0**.

| Returns
<br>No return value. |
| --- |

| Example
<br>To remove the second row of data for transformation t:<br>
```
t.RemoveRow(1);
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select transformations using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting transformations

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only transformations from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only transformations that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any transformations can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of transformations selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select transformations from model m, flagging those selected with flag f, giving the prompt 'Select transformations':<br>
```
Transformation.Select(f, 'Select transformations', m);
```
<br><br>To select transformations, flagging those selected with flag f but limiting selection to transformations flagged with flag l, giving the prompt 'Select transformations':<br>
```
Transformation.Select(f, 'Select transformations', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the transformation. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the transformation

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for transformation t:<br>
```
t.SetFlag(f);
```
 |
| --- |

* * *

| SetRow(row*[integer]*, data*[Array of data]*)

Description<br>Sets the data for a row in \*DEFINE\_TRANSFORMATION. |
| --- |

#### Arguments

* row (integer)
 
The row you want to set the data for. **Note that row indices start at 0**.

* data (Array of data)
 
The data you want to set the row to

| Returns
<br>No return value. |
| --- |

| Example
<br>To set the second row of data for transformation t to be a translation of (0, 0, 100):<br>
```
var array = ["TRANSL", 0, 0, 100];
t.SetRow(1, array);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of transformations in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing transformations should be counted. If false or omitted
referenced but undefined transformations will also be included in the total.

| Returns
<br>number of transformations<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of transformations in model m:<br>
```
var total = Transformation.Total(m);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the transformations in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all transformations will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the transformations

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the transformations in model m:<br>
```
Transformation.UnflagAll(m, f);
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
<br>[Transformation](primer-transformation-class.md) object.<br>
Return type
<br>Transformation |
| --- |

| Example
<br>To check if Transformation property t.example is a parameter by using the [Transformation.GetParameter()](primer-transformation-class.md#Transformation::GetParameter) method:<br>
```
if (t.ViewParameters().GetParameter(t.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for transformation. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for transformation t:<br>
```
t.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this transformation. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for transformation t:<br>
```
var xrefs = t.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the transformation data in keyword format. Note that this contains the keyword header and the keyword cards. See also [Transformation.Keyword()](primer-transformation-class.md#Transformation::Keyword) and [Transformation.KeywordCards()](primer-transformation-class.md#Transformation::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for transformation t in keyword format<br>
```
var s = t.toString();
```
 |
| --- |

* * *