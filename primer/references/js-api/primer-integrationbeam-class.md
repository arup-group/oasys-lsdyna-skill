# IntegrationBeam (IntB) class

The IntegrationBeam class gives you access to integration beam cards in PRIMER. [More...](primer-integrationbeam-class.md#IntegrationBeam_details)

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

* [Create](primer-integrationbeam-class.md#IntegrationBeam::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [First](primer-integrationbeam-class.md#IntegrationBeam::First)(Model*[[Model](primer-model-class.md)]*)
* [FirstFreeLabel](primer-integrationbeam-class.md#IntegrationBeam::FirstFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [FlagAll](primer-integrationbeam-class.md#IntegrationBeam::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-integrationbeam-class.md#IntegrationBeam::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-integrationbeam-class.md#IntegrationBeam::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-integrationbeam-class.md#IntegrationBeam::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-integrationbeam-class.md#IntegrationBeam::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-integrationbeam-class.md#IntegrationBeam::Last)(Model*[[Model](primer-model-class.md)]*)
* [LastFreeLabel](primer-integrationbeam-class.md#IntegrationBeam::LastFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [NextFreeLabel](primer-integrationbeam-class.md#IntegrationBeam::NextFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [RenumberAll](primer-integrationbeam-class.md#IntegrationBeam::RenumberAll)(Model*[[Model](primer-model-class.md)]*, start*[integer]*)
* [RenumberFlagged](primer-integrationbeam-class.md#IntegrationBeam::RenumberFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*)
* [Select](primer-integrationbeam-class.md#IntegrationBeam::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [Total](primer-integrationbeam-class.md#IntegrationBeam::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnflagAll](primer-integrationbeam-class.md#IntegrationBeam::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

## Member functions

* [AssociateComment](primer-integrationbeam-class.md#IntegrationBeam::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Browse](primer-integrationbeam-class.md#IntegrationBeam::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-integrationbeam-class.md#IntegrationBeam::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-integrationbeam-class.md#IntegrationBeam::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-integrationbeam-class.md#IntegrationBeam::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-integrationbeam-class.md#IntegrationBeam::Edit)(modal (optional)*[boolean]*)
* [Error](primer-integrationbeam-class.md#IntegrationBeam::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-integrationbeam-class.md#IntegrationBeam::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-integrationbeam-class.md#IntegrationBeam::GetComments)()
* [GetIntegrationPoint](primer-integrationbeam-class.md#IntegrationBeam::GetIntegrationPoint)(index*[integer]*)
* [GetNipCard](primer-integrationbeam-class.md#IntegrationBeam::GetNipCard_deprecated)() [deprecated]
* [GetParameter](primer-integrationbeam-class.md#IntegrationBeam::GetParameter)(prop*[string]*)
* [GetSectionData](primer-integrationbeam-class.md#IntegrationBeam::GetSectionData_deprecated)() [deprecated]
* [Keyword](primer-integrationbeam-class.md#IntegrationBeam::Keyword)()
* [KeywordCards](primer-integrationbeam-class.md#IntegrationBeam::KeywordCards)()
* [Next](primer-integrationbeam-class.md#IntegrationBeam::Next)()
* [Previous](primer-integrationbeam-class.md#IntegrationBeam::Previous)()
* [SetFlag](primer-integrationbeam-class.md#IntegrationBeam::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [SetIntegrationPoint](primer-integrationbeam-class.md#IntegrationBeam::SetIntegrationPoint)(index*[integer]*, s*[real]*, t*[real]*, wf*[real]*, pid(optional)*[integer]*)
* [SetNipCard](primer-integrationbeam-class.md#IntegrationBeam::SetNipCard_deprecated)() [deprecated]
* [SetSectionData](primer-integrationbeam-class.md#IntegrationBeam::SetSectionData_deprecated)() [deprecated]
* [ViewParameters](primer-integrationbeam-class.md#IntegrationBeam::ViewParameters)()
* [Warning](primer-integrationbeam-class.md#IntegrationBeam::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-integrationbeam-class.md#IntegrationBeam::Xrefs)()
* [toString](primer-integrationbeam-class.md#IntegrationBeam::toString)()

## IntegrationBeam properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| d1 | real | Cross-section dimension. |
| d2 | real | Cross-section dimension. |
| d3 | real | Cross-section dimension. |
| d4 | real | Cross-section dimension. |
| d5 | real | Cross-section dimension. |
| d6 | real | Cross-section dimension. |
| exists (read only) | logical | true if integration beam exists, false if referred to but not defined. |
| icst | integer | Standard cross section type. If icst is non-zero, [nip](primer-integrationbeam-class.md#nip) should be zero and vice-versa. |
| include | integer | The [Include](primer-include-class.md) file number that the integration beam is in. |
| irid | integer | Integration rule id. |
| k | integer | Integration refinement parameter for standard cross section types. |
| model (read only) | integer | The [Model](primer-model-class.md) number that the integration beam is in. |
| nip | integer | Number of integration points. If nip is non-zero, [icst](primer-integrationbeam-class.md#icst) should be zero and vice-versa. |
| pid | [Part](primer-part-class.md) | Optional part ID if different from the PID specified on the element card. |
| ra | real | Relative area of cross section. |
| s | real | Normalized s coordinate of integration point. |
| sref | real | Location of reference surface normal to s, for the Hughes-Liu beam only. |
| t | real | Normalized t coordinate of integration point. |
| tref | real | Location of reference surface normal to t, for the Hughes-Liu beam only. |
| wf | real | Weighting factor (area associated with integration point divided by actual cross sectional area). |

| Detailed Description<br>The IntegrationBeam class allows you to create, modify, edit and manipulate integration beam cards.<br>See the documentation below for more details.<br>
<br>For convenience "IntB" can also be used as the class name instead of "IntegrationBeam". |
| --- |

| Constructor
new IntegrationBeam(Model*[[Model](primer-model-class.md)]*, irid*[integer]*, nip (optional)*[integer]*, ra (optional)*[real]*, icst (optional)*[integer]*, k (optional)*[integer]*)

Description<br>Create a new [IntegrationBeam](primer-integrationbeam-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that intb will be created in.

* irid (integer)
 
Integration\_Beam ID.

* nip (optional) (integer)
 
Number of integration points. If omitted nip will be 0. If nip is non-zero, [icst](primer-integrationbeam-class.md#icst) should be zero and vice-versa.

* ra (optional) (real)
 
Relative area of cross section. If omitted ra will be 0.

* icst (optional) (integer)
 
Standard cross section type. If omitted icst will be 0. If icst is non-zero, [nip](primer-integrationbeam-class.md#nip) should be zero and vice-versa.

* k (optional) (integer)
 
Integration refinement parameter for standard cross section types. If omitted k will be 0.

| Returns
<br>[IntegrationBeam](primer-integrationbeam-class.md) object<br>
Return type
<br>IntegrationBeam |
| --- |

| Example
<br>To create a new intgb 1000 in model m with the following specifiction: irid, nip, ra, icst, k are 1000, 2, 0.1, 3, 5 respectively<br>
```
var w = new IntegrationBeam(m, 1000, 2, 0.1, 3, 5);
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a integration beam. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the integration beam

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the integration beam ib:<br>
```
ib.AssociateComment(c);
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
<br>To Browse integration beam ib:<br>
```
ib.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the integration beam. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the integration beam

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for integration beam ib:<br>
```
ib.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the integration beam. The target include of the copied integration beam can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>IntegrationBeam object<br>
Return type
<br>IntegrationBeam |
| --- |

| Example
<br>To copy integration beam ib into integration beam z:<br>
```
var z = ib.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a integration beam |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the integration beam will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>IntegrationBeam object (or null if not made).<br>
Return type
<br>IntegrationBeam |
| --- |

| Example
<br>To start creating a integration beam in model m:<br>
```
var ib = IntegrationBeam.Create(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a integration beam. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the integration beam

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the integration beam ib:<br>
```
ib.DetachComment(c);
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
<br>To Edit integration beam ib:<br>
```
ib.Edit();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for integration beam. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for integration beam ib:<br>
```
ib.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first integration beam in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first integration beam in

| Returns
<br>IntegrationBeam object (or null if there are no integration beams in the model).<br>
Return type
<br>IntegrationBeam |
| --- |

| Example
<br>To get the first integration beam in model m:<br>
```
var ib = IntegrationBeam.First(m);
```
 |
| --- |

* * *

| FirstFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the first free integration beam label in the model. Also see [IntegrationBeam.LastFreeLabel()](primer-integrationbeam-class.md#IntegrationBeam::LastFreeLabel), [IntegrationBeam.NextFreeLabel()](primer-integrationbeam-class.md#IntegrationBeam::NextFreeLabel) and [Model.FirstFreeItemLabel()](primer-model-class.md#Model::FirstFreeItemLabel). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first free integration beam label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *First free in layer* in editing panels). If omitted the whole model will be used (Equivalent to *First free* in editing panels).

| Returns
<br>IntegrationBeam label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the first free integration beam label in model m:<br>
```
var label = IntegrationBeam.FirstFreeLabel(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the integration beams in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all integration beams will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the integration beams

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the integration beams with flag f in model m:<br>
```
IntegrationBeam.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the integration beam is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the integration beam

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if integration beam ib has flag f set on it:<br>
```
if (ib.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each integration beam in the model.<br> **Note that ForEach has been designed to make looping over integration beams as fast as possible and so has some limitations. Firstly, a single temporary IntegrationBeam object is created and on each function call it is updated with the current integration beam data. This means that you should not try to store the IntegrationBeam object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new integration beams inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all integration beams are in

* func (function)
 
Function to call for each integration beam

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the integration beams in model m:<br>
```
IntegrationBeam.ForEach(m, test);
function test(ib)
{
// ib is IntegrationBeam object
}
```
<br><br>To call function test for all of the integration beams in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
IntegrationBeam.ForEach(m, test, data);
function test(ib, extra)
{
// ib is IntegrationBeam object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of IntegrationBeam objects or properties for all of the integration beams in a model in PRIMER. If the optional property argument is not given then an array of IntegrationBeam objects is returned. If the property argument is given, that property value for each integration beam is returned in the array instead of a IntegrationBeam object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get integration beams from

* property (optional) (string)
 
Name for property to get for all integration beams in the model

| Returns
<br>Array of IntegrationBeam objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of IntegrationBeam objects for all of the integration beams in model m:<br>
```
var a = IntegrationBeam.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each integration beam in model m:<br>
```
var a = IntegrationBeam.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a integration beam. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the integration beam ib:<br>
```
var comm_array = ib.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of IntegrationBeam objects for all of the flagged integration beams in a model in PRIMER If the optional property argument is not given then an array of IntegrationBeam objects is returned. If the property argument is given, then that property value for each integration beam is returned in the array instead of a IntegrationBeam object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get integration beams from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the integration beams that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged integration beams in the model

| Returns
<br>Array of IntegrationBeam objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of IntegrationBeam objects for all of the integration beams in model m flagged with f:<br>
```
var ib = IntegrationBeam.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the integration beams in model m flagged with f:<br>
```
var a = IntegrationBeam.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the IntegrationBeam object for a integration beam ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the integration beam in

* number (integer)
 
number of the integration beam you want the IntegrationBeam object for

| Returns
<br>IntegrationBeam object (or null if integration beam does not exist).<br>
Return type
<br>IntegrationBeam |
| --- |

| Example
<br>To get the IntegrationBeam object for integration beam 100 in model m<br>
```
var ib = IntegrationBeam.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetIntegrationPoint(index*[integer]*)

Description<br>Returns the data for an integration point in \*INTEGRATION\_BEAM.**Note data is only available when NIP&gt;0**. |
| --- |

#### Arguments

* index (integer)
 
Index you want the integration point data for. **Note that indices start at 0**.

| Returns
<br>An array containing the integration point data.<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the data for the 3rd integration point for integration beam ib:<br>
```
var data = ib.GetIntegrationPoint(2);
```
 |
| --- |

* * *

| GetNipCard() [deprecated]
<br>This function is deprecated in version 11.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>
Description<br>Please use [IntegrationBeam.GetIntegrationPoint()](primer-integrationbeam-class.md#IntegrationBeam::GetIntegrationPoint) instead. |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

|  |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a IntegrationBeam property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [IntegrationBeam.ViewParameters()](primer-integrationbeam-class.md#IntegrationBeam::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
integration beam property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if IntegrationBeam property ib.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (ib.GetParameter(ib.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if IntegrationBeam property ib.example is a parameter by using the GetParameter method:<br>
```
if (ib.ViewParameters().GetParameter(ib.example) ) do_something...
```
 |
| --- |

* * *

| GetSectionData() [deprecated]
<br>This function is deprecated in version 11.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>
Description<br>Use properties [d1](primer-integrationbeam-class.md#d1), [d2](primer-integrationbeam-class.md#d2), [sref](primer-integrationbeam-class.md#sref) etc to get the section data. |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

|  |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this intb (\*INTEGRATION\_BEAM). **Note that a carriage return is not added**. See also [IntegrationBeam.KeywordCards()](primer-integrationbeam-class.md#IntegrationBeam::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for intb n:<br>
```
var key = n.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the intb. **Note that a carriage return is not added**. See also [IntegrationBeam.Keyword()](primer-integrationbeam-class.md#IntegrationBeam::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for intb n:<br>
```
var cards = n.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last integration beam in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last integration beam in

| Returns
<br>IntegrationBeam object (or null if there are no integration beams in the model).<br>
Return type
<br>IntegrationBeam |
| --- |

| Example
<br>To get the last integration beam in model m:<br>
```
var ib = IntegrationBeam.Last(m);
```
 |
| --- |

* * *

| LastFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the last free integration beam label in the model. Also see [IntegrationBeam.FirstFreeLabel()](primer-integrationbeam-class.md#IntegrationBeam::FirstFreeLabel), [IntegrationBeam.NextFreeLabel()](primer-integrationbeam-class.md#IntegrationBeam::NextFreeLabel) and see [Model.LastFreeItemLabel()](primer-model-class.md#Model::LastFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last free integration beam label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest free in layer* in editing panels). If omitted the whole model will be used.

| Returns
<br>IntegrationBeam label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the last free integration beam label in model m:<br>
```
var label = IntegrationBeam.LastFreeLabel(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next integration beam in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>IntegrationBeam object (or null if there are no more integration beams in the model).<br>
Return type
<br>IntegrationBeam |
| --- |

| Example
<br>To get the integration beam in model m after integration beam ib:<br>
```
var ib = ib.Next();
```
 |
| --- |

* * *

| NextFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the next free (highest+1) integration beam label in the model. Also see [IntegrationBeam.FirstFreeLabel()](primer-integrationbeam-class.md#IntegrationBeam::FirstFreeLabel), [IntegrationBeam.LastFreeLabel()](primer-integrationbeam-class.md#IntegrationBeam::LastFreeLabel) and [Model.NextFreeItemLabel()](primer-model-class.md#Model::NextFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get next free integration beam label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest+1 in layer* in editing panels). If omitted the whole model will be used (Equivalent to *Highest+1* in editing panels).

| Returns
<br>IntegrationBeam label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the next free integration beam label in model m:<br>
```
var label = IntegrationBeam.NextFreeLabel(m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous integration beam in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>IntegrationBeam object (or null if there are no more integration beams in the model).<br>
Return type
<br>IntegrationBeam |
| --- |

| Example
<br>To get the integration beam in model m before integration beam ib:<br>
```
var ib = ib.Previous();
```
 |
| --- |

* * *

| RenumberAll(Model*[[Model](primer-model-class.md)]*, start*[integer]*) [static]
Description<br>Renumbers all of the integration beams in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all integration beams will be renumbered in

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the integration beams in model m, from 1000000:<br>
```
IntegrationBeam.RenumberAll(m, 1000000);
```
 |
| --- |

* * *

| RenumberFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*) [static]
Description<br>Renumbers all of the flagged integration beams in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged integration beams will be renumbered in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the integration beams that you want to renumber

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the integration beams in model m flagged with f, from 1000000:<br>
```
IntegrationBeam.RenumberFlagged(m, f, 1000000);
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select integration beams using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting integration beams

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only integration beams from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only integration beams that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any integration beams can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of integration beams selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select integration beams from model m, flagging those selected with flag f, giving the prompt 'Select integration beams':<br>
```
IntegrationBeam.Select(f, 'Select integration beams', m);
```
<br><br>To select integration beams, flagging those selected with flag f but limiting selection to integration beams flagged with flag l, giving the prompt 'Select integration beams':<br>
```
IntegrationBeam.Select(f, 'Select integration beams', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the integration beam. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the integration beam

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for integration beam ib:<br>
```
ib.SetFlag(f);
```
 |
| --- |

* * *

| SetIntegrationPoint(index*[integer]*, s*[real]*, t*[real]*, wf*[real]*, pid(optional)*[integer]*)

Description<br>Sets the integration point data for an \*INTEGRATION\_BEAM. |
| --- |

#### Arguments

* index (integer)
 
Index you want to set the integration point data for. **Note that indices start at 0**.

* s (real)
 
s coordinate of integration point in range -1 to 1.

* t (real)
 
s coordinate of integration point in range -1 to 1.

* wf (real)
 
Weighting factor, area associated with the integration point divided by actual beam cross sectional area.

* pid(optional) (integer)
 
Optional part ID if different from the PID specified on the element card.

| Returns
<br>No return value. |
| --- |

| Example
<br>To set the 4th integration point for \*INTEGRATION\_BEAM ib to the following specifiction: s, t, wf, pid are 0.1, 0.2, 0.3, 1 respectively<br>
```
ib.SetIntegrationPoint(3, 0.1, 0.2, 0.3, 1);
```
 |
| --- |

* * *

| SetNipCard() [deprecated]
<br>This function is deprecated in version 11.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>
Description<br>Please use [IntegrationBeam.SetIntegrationPoint()](primer-integrationbeam-class.md#IntegrationBeam::SetIntegrationPoint) instead. |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

|  |
| --- |

* * *

| SetSectionData() [deprecated]
<br>This function is deprecated in version 11.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>
Description<br>Use properties [d1](primer-integrationbeam-class.md#d1), [d2](primer-integrationbeam-class.md#d2), [sref](primer-integrationbeam-class.md#sref) etc to set the section data. |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

|  |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of integration beams in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing integration beams should be counted. If false or omitted
referenced but undefined integration beams will also be included in the total.

| Returns
<br>number of integration beams<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of integration beams in model m:<br>
```
var total = IntegrationBeam.Total(m);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the integration beams in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all integration beams will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the integration beams

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the integration beams in model m:<br>
```
IntegrationBeam.UnflagAll(m, f);
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
<br>[IntegrationBeam](primer-integrationbeam-class.md) object.<br>
Return type
<br>IntegrationBeam |
| --- |

| Example
<br>To check if IntegrationBeam property ib.example is a parameter by using the [IntegrationBeam.GetParameter()](primer-integrationbeam-class.md#IntegrationBeam::GetParameter) method:<br>
```
if (ib.ViewParameters().GetParameter(ib.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for integration beam. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for integration beam ib:<br>
```
ib.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this integration beam. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for integration beam ib:<br>
```
var xrefs = ib.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the intb data in keyword format. Note that this contains the keyword header and the keyword cards. See also [IntegrationBeam.Keyword()](primer-integrationbeam-class.md#IntegrationBeam::Keyword) and [IntegrationBeam.KeywordCards()](primer-integrationbeam-class.md#IntegrationBeam::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for intb n in keyword format<br>
```
var s = n.toString();
```
 |
| --- |

* * *