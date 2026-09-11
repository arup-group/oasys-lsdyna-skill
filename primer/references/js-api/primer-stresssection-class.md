# StressSection class

The StressSection class gives you access to define \*INITIAL\_STRESS\_SECTION cards in PRIMER. [More...](primer-stresssection-class.md#StressSection_details)

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

* [BlankAll](primer-stresssection-class.md#StressSection::BlankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [BlankFlagged](primer-stresssection-class.md#StressSection::BlankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Create](primer-stresssection-class.md#StressSection::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [First](primer-stresssection-class.md#StressSection::First)(Model*[[Model](primer-model-class.md)]*)
* [FirstFreeLabel](primer-stresssection-class.md#StressSection::FirstFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [FlagAll](primer-stresssection-class.md#StressSection::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-stresssection-class.md#StressSection::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-stresssection-class.md#StressSection::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-stresssection-class.md#StressSection::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-stresssection-class.md#StressSection::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-stresssection-class.md#StressSection::Last)(Model*[[Model](primer-model-class.md)]*)
* [LastFreeLabel](primer-stresssection-class.md#StressSection::LastFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [NextFreeLabel](primer-stresssection-class.md#StressSection::NextFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [RenumberAll](primer-stresssection-class.md#StressSection::RenumberAll)(Model*[[Model](primer-model-class.md)]*, start*[integer]*)
* [RenumberFlagged](primer-stresssection-class.md#StressSection::RenumberFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*)
* [Select](primer-stresssection-class.md#StressSection::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-stresssection-class.md#StressSection::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-stresssection-class.md#StressSection::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnblankAll](primer-stresssection-class.md#StressSection::UnblankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnblankFlagged](primer-stresssection-class.md#StressSection::UnblankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [UnflagAll](primer-stresssection-class.md#StressSection::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-stresssection-class.md#StressSection::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-stresssection-class.md#StressSection::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-stresssection-class.md#StressSection::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Blank](primer-stresssection-class.md#StressSection::Blank)()
* [Blanked](primer-stresssection-class.md#StressSection::Blanked)()
* [Browse](primer-stresssection-class.md#StressSection::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-stresssection-class.md#StressSection::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-stresssection-class.md#StressSection::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-stresssection-class.md#StressSection::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-stresssection-class.md#StressSection::Edit)(modal (optional)*[boolean]*)
* [Error](primer-stresssection-class.md#StressSection::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-stresssection-class.md#StressSection::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-stresssection-class.md#StressSection::GetComments)()
* [GetParameter](primer-stresssection-class.md#StressSection::GetParameter)(prop*[string]*)
* [Keyword](primer-stresssection-class.md#StressSection::Keyword)()
* [KeywordCards](primer-stresssection-class.md#StressSection::KeywordCards)()
* [Next](primer-stresssection-class.md#StressSection::Next)()
* [Previous](primer-stresssection-class.md#StressSection::Previous)()
* [SetFlag](primer-stresssection-class.md#StressSection::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Sketch](primer-stresssection-class.md#StressSection::Sketch)(redraw (optional)*[boolean]*)
* [Unblank](primer-stresssection-class.md#StressSection::Unblank)()
* [Unsketch](primer-stresssection-class.md#StressSection::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-stresssection-class.md#StressSection::ViewParameters)()
* [Warning](primer-stresssection-class.md#StressSection::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-stresssection-class.md#StressSection::Xrefs)()
* [toString](primer-stresssection-class.md#StressSection::toString)()

## StressSection properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| csid | integer | Cross section ID. |
| exists (read only) | logical | true if stress section exists, false if referred to but not defined. |
| include | integer | The [Include](primer-include-class.md) file number that the stress section is in. |
| issid | integer | [StressSection](primer-stresssection-class.md) number. Also see the [label](primer-stresssection-class.md#label) property which is an alternative name for this. |
| istiff | integer | Load curve ID defining the artificial stress fraction versus time. |
| izshear | integer | Shear stress flag. |
| label | integer | [StressSection](primer-stresssection-class.md) number. Also see the [issid](primer-stresssection-class.md#issid) property which is an alternative name for this. |
| lcid | integer | Load curve ID defining preload stress versus time. |
| model (read only) | integer | The [Model](primer-model-class.md) number that the stress section is in. |
| psid | integer | Part set ID. |
| vid | integer | Vector ID defining the direction normal to the cross section. |

| Detailed Description<br>The StressSection class allows you to create, modify, edit and manipulate initial stress section cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new StressSection(Model*[[Model](primer-model-class.md)]*, issid*[integer]*, csid*[integer]*, lcid*[integer]*, psid*[integer]*, vid*[integer]*, izshear*[integer]*, istiff (optional)*[integer]*)

Description<br>Create a new [StressSection](primer-stresssection-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that stress section will be created in

* issid (integer)
 
[StressSection](primer-stresssection-class.md) number.

* csid (integer)
 
Cross section ID.

* lcid (integer)
 
Load curve ID defining preload stress versus time.

* psid (integer)
 
Part set ID.

* vid (integer)
 
Vector ID.

* izshear (integer)
 
Shear stress flag.

* istiff (optional) (integer)
 
Load curve ID defining artificial stress fraction versus time.

| Returns
<br>[StressSection](primer-stresssection-class.md) object<br>
Return type
<br>StressSection |
| --- |

| Example
<br>To create a new stress section in model m with label 11, cross section 12, load curve 13, part set 14, vector 15 and shear stress flag 16:<br>
```
var iss = new StressSection(m, 11, 12, 13, 14, 15, 16);
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a stress section. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the stress section

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the stress section iss:<br>
```
iss.AssociateComment(c);
```
 |
| --- |

* * *

| Blank()

Description<br>Blanks the stress section |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To blank stress section iss:<br>
```
iss.Blank();
```
 |
| --- |

* * *

| BlankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the stress sections in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all stress sections will be blanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the stress sections in model m:<br>
```
StressSection.BlankAll(m);
```
 |
| --- |

* * *

| BlankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the flagged stress sections in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged stress sections will be blanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the stress sections that you want to blank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the stress sections in model m flagged with f:<br>
```
StressSection.BlankFlagged(m, f);
```
 |
| --- |

* * *

| Blanked()

Description<br>Checks if the stress section is blanked or not. |
| --- |

#### Arguments

No arguments

| Returns
<br>true if blanked, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if stress section iss is blanked:<br>
```
if (iss.Blanked() ) do_something...
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
<br>To Browse stress section iss:<br>
```
iss.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the stress section. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the stress section

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for stress section iss:<br>
```
iss.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the stress section. The target include of the copied stress section can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>StressSection object<br>
Return type
<br>StressSection |
| --- |

| Example
<br>To copy stress section iss into stress section z:<br>
```
var z = iss.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a stress section |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the stress section will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>StressSection object (or null if not made).<br>
Return type
<br>StressSection |
| --- |

| Example
<br>To start creating a stress section in model m:<br>
```
var iss = StressSection.Create(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a stress section. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the stress section

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the stress section iss:<br>
```
iss.DetachComment(c);
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
<br>To Edit stress section iss:<br>
```
iss.Edit();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for stress section. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for stress section iss:<br>
```
iss.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first stress section in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first stress section in

| Returns
<br>StressSection object (or null if there are no stress sections in the model).<br>
Return type
<br>StressSection |
| --- |

| Example
<br>To get the first stress section in model m:<br>
```
var iss = StressSection.First(m);
```
 |
| --- |

* * *

| FirstFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the first free stress section label in the model. Also see [StressSection.LastFreeLabel()](primer-stresssection-class.md#StressSection::LastFreeLabel), [StressSection.NextFreeLabel()](primer-stresssection-class.md#StressSection::NextFreeLabel) and [Model.FirstFreeItemLabel()](primer-model-class.md#Model::FirstFreeItemLabel). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first free stress section label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *First free in layer* in editing panels). If omitted the whole model will be used (Equivalent to *First free* in editing panels).

| Returns
<br>StressSection label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the first free stress section label in model m:<br>
```
var label = StressSection.FirstFreeLabel(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the stress sections in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all stress sections will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the stress sections

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the stress sections with flag f in model m:<br>
```
StressSection.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the stress section is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the stress section

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if stress section iss has flag f set on it:<br>
```
if (iss.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each stress section in the model.<br> **Note that ForEach has been designed to make looping over stress sections as fast as possible and so has some limitations. Firstly, a single temporary StressSection object is created and on each function call it is updated with the current stress section data. This means that you should not try to store the StressSection object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new stress sections inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all stress sections are in

* func (function)
 
Function to call for each stress section

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the stress sections in model m:<br>
```
StressSection.ForEach(m, test);
function test(iss)
{
// iss is StressSection object
}
```
<br><br>To call function test for all of the stress sections in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
StressSection.ForEach(m, test, data);
function test(iss, extra)
{
// iss is StressSection object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of StressSection objects or properties for all of the stress sections in a model in PRIMER. If the optional property argument is not given then an array of StressSection objects is returned. If the property argument is given, that property value for each stress section is returned in the array instead of a StressSection object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get stress sections from

* property (optional) (string)
 
Name for property to get for all stress sections in the model

| Returns
<br>Array of StressSection objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of StressSection objects for all of the stress sections in model m:<br>
```
var a = StressSection.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each stress section in model m:<br>
```
var a = StressSection.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a stress section. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the stress section iss:<br>
```
var comm_array = iss.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of StressSection objects for all of the flagged stress sections in a model in PRIMER If the optional property argument is not given then an array of StressSection objects is returned. If the property argument is given, then that property value for each stress section is returned in the array instead of a StressSection object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get stress sections from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the stress sections that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged stress sections in the model

| Returns
<br>Array of StressSection objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of StressSection objects for all of the stress sections in model m flagged with f:<br>
```
var iss = StressSection.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the stress sections in model m flagged with f:<br>
```
var a = StressSection.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the StressSection object for a stress section ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the stress section in

* number (integer)
 
number of the stress section you want the StressSection object for

| Returns
<br>StressSection object (or null if stress section does not exist).<br>
Return type
<br>StressSection |
| --- |

| Example
<br>To get the StressSection object for stress section 100 in model m<br>
```
var iss = StressSection.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a StressSection property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [StressSection.ViewParameters()](primer-stresssection-class.md#StressSection::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
stress section property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if StressSection property iss.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (iss.GetParameter(iss.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if StressSection property iss.example is a parameter by using the GetParameter method:<br>
```
if (iss.ViewParameters().GetParameter(iss.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this stress section. **Note that a carriage return is not added**. See also [StressSection.KeywordCards()](primer-stresssection-class.md#StressSection::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for stress section iss:<br>
```
var key = iss.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the stress section. **Note that a carriage return is not added**. See also [StressSection.Keyword()](primer-stresssection-class.md#StressSection::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for stress section iss:<br>
```
var cards = iss.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last stress section in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last stress section in

| Returns
<br>StressSection object (or null if there are no stress sections in the model).<br>
Return type
<br>StressSection |
| --- |

| Example
<br>To get the last stress section in model m:<br>
```
var iss = StressSection.Last(m);
```
 |
| --- |

* * *

| LastFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the last free stress section label in the model. Also see [StressSection.FirstFreeLabel()](primer-stresssection-class.md#StressSection::FirstFreeLabel), [StressSection.NextFreeLabel()](primer-stresssection-class.md#StressSection::NextFreeLabel) and see [Model.LastFreeItemLabel()](primer-model-class.md#Model::LastFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last free stress section label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest free in layer* in editing panels). If omitted the whole model will be used.

| Returns
<br>StressSection label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the last free stress section label in model m:<br>
```
var label = StressSection.LastFreeLabel(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next stress section in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>StressSection object (or null if there are no more stress sections in the model).<br>
Return type
<br>StressSection |
| --- |

| Example
<br>To get the stress section in model m after stress section iss:<br>
```
var iss = iss.Next();
```
 |
| --- |

* * *

| NextFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the next free (highest+1) stress section label in the model. Also see [StressSection.FirstFreeLabel()](primer-stresssection-class.md#StressSection::FirstFreeLabel), [StressSection.LastFreeLabel()](primer-stresssection-class.md#StressSection::LastFreeLabel) and [Model.NextFreeItemLabel()](primer-model-class.md#Model::NextFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get next free stress section label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest+1 in layer* in editing panels). If omitted the whole model will be used (Equivalent to *Highest+1* in editing panels).

| Returns
<br>StressSection label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the next free stress section label in model m:<br>
```
var label = StressSection.NextFreeLabel(m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous stress section in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>StressSection object (or null if there are no more stress sections in the model).<br>
Return type
<br>StressSection |
| --- |

| Example
<br>To get the stress section in model m before stress section iss:<br>
```
var iss = iss.Previous();
```
 |
| --- |

* * *

| RenumberAll(Model*[[Model](primer-model-class.md)]*, start*[integer]*) [static]
Description<br>Renumbers all of the stress sections in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all stress sections will be renumbered in

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the stress sections in model m, from 1000000:<br>
```
StressSection.RenumberAll(m, 1000000);
```
 |
| --- |

* * *

| RenumberFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*) [static]
Description<br>Renumbers all of the flagged stress sections in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged stress sections will be renumbered in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the stress sections that you want to renumber

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the stress sections in model m flagged with f, from 1000000:<br>
```
StressSection.RenumberFlagged(m, f, 1000000);
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select stress sections using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting stress sections

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only stress sections from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only stress sections that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any stress sections can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of stress sections selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select stress sections from model m, flagging those selected with flag f, giving the prompt 'Select stress sections':<br>
```
StressSection.Select(f, 'Select stress sections', m);
```
<br><br>To select stress sections, flagging those selected with flag f but limiting selection to stress sections flagged with flag l, giving the prompt 'Select stress sections':<br>
```
StressSection.Select(f, 'Select stress sections', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the stress section. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the stress section

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for stress section iss:<br>
```
iss.SetFlag(f);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the stress section. The stress section will be sketched until you either call [StressSection.Unsketch()](primer-stresssection-class.md#StressSection::Unsketch), [StressSection.UnsketchAll()](primer-stresssection-class.md#StressSection::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the stress section is sketched. If omitted redraw is true. If you want to sketch several stress sections and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch stress section iss:<br>
```
iss.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged stress sections in the model. The stress sections will be sketched until you either call [StressSection.Unsketch()](primer-stresssection-class.md#StressSection::Unsketch), [StressSection.UnsketchFlagged()](primer-stresssection-class.md#StressSection::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged stress sections will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the stress sections that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the stress sections are sketched. If omitted redraw is true. If you want to sketch flagged stress sections several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all stress sections flagged with flag in model m:<br>
```
StressSection.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of stress sections in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing stress sections should be counted. If false or omitted
referenced but undefined stress sections will also be included in the total.

| Returns
<br>number of stress sections<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of stress sections in model m:<br>
```
var total = StressSection.Total(m);
```
 |
| --- |

* * *

| Unblank()

Description<br>Unblanks the stress section |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank stress section iss:<br>
```
iss.Unblank();
```
 |
| --- |

* * *

| UnblankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the stress sections in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all stress sections will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the stress sections in model m:<br>
```
StressSection.UnblankAll(m);
```
 |
| --- |

* * *

| UnblankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the flagged stress sections in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the flagged stress sections will be unblanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the stress sections that you want to unblank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the stress sections in model m flagged with f:<br>
```
StressSection.UnblankFlagged(m, f);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the stress sections in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all stress sections will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the stress sections

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the stress sections in model m:<br>
```
StressSection.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the stress section. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the stress section is unsketched. If omitted redraw is true. If you want to unsketch several stress sections and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch stress section iss:<br>
```
iss.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all stress sections. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all stress sections will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the stress sections are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all stress sections in model m:<br>
```
StressSection.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged stress sections in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all stress sections will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the stress sections that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the stress sections are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all stress sections flagged with flag in model m:<br>
```
StressSection.UnsketchAll(m, flag);
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
<br>[StressSection](primer-stresssection-class.md) object.<br>
Return type
<br>StressSection |
| --- |

| Example
<br>To check if StressSection property iss.example is a parameter by using the [StressSection.GetParameter()](primer-stresssection-class.md#StressSection::GetParameter) method:<br>
```
if (iss.ViewParameters().GetParameter(iss.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for stress section. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for stress section iss:<br>
```
iss.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this stress section. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for stress section iss:<br>
```
var xrefs = iss.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the stress section data in keyword format. Note that this contains the keyword header and the keyword cards. See also [StressSection.Keyword()](primer-stresssection-class.md#StressSection::Keyword) and [StressSection.KeywordCards()](primer-stresssection-class.md#StressSection::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for stress section iss in keyword format<br>
```
var s = iss.toString();
```
 |
| --- |

* * *