# StressSolid class

The StressSolid class gives you access to define initial stress solid cards in PRIMER. [More...](primer-stresssolid-class.md#StressSolid_details)

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

* [First](primer-stresssolid-class.md#StressSolid::First)(Model*[[Model](primer-model-class.md)]*)
* [FlagAll](primer-stresssolid-class.md#StressSolid::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-stresssolid-class.md#StressSolid::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-stresssolid-class.md#StressSolid::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-stresssolid-class.md#StressSolid::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-stresssolid-class.md#StressSolid::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-stresssolid-class.md#StressSolid::Last)(Model*[[Model](primer-model-class.md)]*)
* [Pick](primer-stresssolid-class.md#StressSolid::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [Select](primer-stresssolid-class.md#StressSolid::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-stresssolid-class.md#StressSolid::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-stresssolid-class.md#StressSolid::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnflagAll](primer-stresssolid-class.md#StressSolid::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-stresssolid-class.md#StressSolid::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-stresssolid-class.md#StressSolid::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-stresssolid-class.md#StressSolid::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [ClearFlag](primer-stresssolid-class.md#StressSolid::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-stresssolid-class.md#StressSolid::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-stresssolid-class.md#StressSolid::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Error](primer-stresssolid-class.md#StressSolid::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-stresssolid-class.md#StressSolid::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-stresssolid-class.md#StressSolid::GetComments)()
* [GetIntegrationPoint](primer-stresssolid-class.md#StressSolid::GetIntegrationPoint)(index*[integer]*)
* [GetParameter](primer-stresssolid-class.md#StressSolid::GetParameter)(prop*[string]*)
* [GetThermalIntegrationPoint](primer-stresssolid-class.md#StressSolid::GetThermalIntegrationPoint)(index*[integer]*)
* [Keyword](primer-stresssolid-class.md#StressSolid::Keyword)()
* [KeywordCards](primer-stresssolid-class.md#StressSolid::KeywordCards)()
* [Next](primer-stresssolid-class.md#StressSolid::Next)()
* [Previous](primer-stresssolid-class.md#StressSolid::Previous)()
* [SetFlag](primer-stresssolid-class.md#StressSolid::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [SetIntegrationPoint](primer-stresssolid-class.md#StressSolid::SetIntegrationPoint)(index*[integer]*, data*[Array of data]*)
* [SetThermalIntegrationPoint](primer-stresssolid-class.md#StressSolid::SetThermalIntegrationPoint)(index*[integer]*, data*[Array of data]*)
* [Sketch](primer-stresssolid-class.md#StressSolid::Sketch)(redraw (optional)*[boolean]*)
* [Unsketch](primer-stresssolid-class.md#StressSolid::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-stresssolid-class.md#StressSolid::ViewParameters)()
* [Warning](primer-stresssolid-class.md#StressSolid::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-stresssolid-class.md#StressSolid::Xrefs)()
* [toString](primer-stresssolid-class.md#StressSolid::toString)()

## StressSolid constants

| **Name** | **Description** |
| --- | --- |
| StressSolid.SET | Initial is \*INITIAL\_STRESS\_SOLID\_SET. |
| StressSolid.SOLID | Initial is \*INITIAL\_STRESS\_SOLID. |

## StressSolid properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| eid | integer | [Solid](primer-solid-class.md) Element ID or solid set ID |
| exists (read only) | logical | true if initial stress solid exists, false if referred to but not defined. |
| ialegp | integer | \*ALE\_MULTI-MATERIAL\_GROUP or \*ALE\_STRUCTURED\_MULTI-MATERIAL\_GROUP id. |
| include | integer | The [Include](primer-include-class.md) file number that the initial stress solid is in. |
| iveflg | integer | Initial volume energy flag (only used if [large](primer-stresssolid-class.md#large) is TRUE). Valid values are 0, 1 and 2 only. |
| large | logical | true if large format, false otherwise. |
| model (read only) | integer | The [Model](primer-model-class.md) number that the initial stress solid is in. |
| nhisv | integer | Number of additional history variables (only used if [large](primer-stresssolid-class.md#large) is TRUE). |
| nint | integer | Number of integration points (should correspond to the solid element formulation). Valid values for hexadral solid elements are 1, 8 or 14. Valid values for tetrahedral elements are 1, 4 or 5. Valid values for pentraderal elements are 1 or 2. |
| nthhsv | integer | Number of thermal history variables per thermal integration point (only used if [large](primer-stresssolid-class.md#large) is TRUE). |
| nthint | integer | Number of thermal integration points (only used if [large](primer-stresssolid-class.md#large) is TRUE). |
| type | constant | The Intial stress solid type. Can be [StressSolid.SOLID](primer-stresssolid-class.md#StressSolid.SOLID) or [StressSolid.SET](primer-stresssolid-class.md#StressSolid.SET). |

| Detailed Description<br>The StressSolid class allows you to create, modify, edit and manipulate \*INITIAL\_STRESS\_SOLID cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new StressSolid(Model*[[Model](primer-model-class.md)]*, type*[constant]*, eid*[integer]*, nint*[integer]*, nhisv*[integer]*, large*[boolean]*, iveflg*[integer]*)

Description<br>Create a new [StressSolid](primer-stresssolid-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that stress\_solid will be created in

* type (constant)
 
Specify the type of initial stress solid (Can be [StressSolid.SOLID](primer-stresssolid-class.md#StressSolid.SOLID) or [StressSolid.SET](primer-stresssolid-class.md#StressSolid.SET))

* eid (integer)
 
[Solid](primer-solid-class.md) Element ID or solid set ID

* nint (integer)
 
Number of integration points (should correspond to the solid element formulation). Valid values for hexadral solid elements are 1, 8 or 14. Valid values for tetrahedral elements are 1, 4 or 5. Valid values for pentraderal elements are 1 or 2.

* nhisv (integer)
 
Number of additional history variables (only used if [large](primer-stresssolid-class.md#large) is TRUE).

* large (boolean)
 
true if large format, false otherwise.

* iveflg (integer)
 
Initial volume energy flag (only used if [large](primer-stresssolid-class.md#large) is TRUE). Valid values are 0, 1 and 2 only.

| Returns
<br>[StressSolid](primer-stresssolid-class.md) object<br>
Return type
<br>StressSolid |
| --- |

| Example
<br>To create a new stress\_solid in model m, of type SET with SOLID\_SET id as 1, number of integration points as 3 and number of history variables as 4.<br>
```
var s = new StressSolid(m, StressSolid.SET, 1, 3, 4, true);
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a initial stress solid. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the initial stress solid

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the initial stress solid iso:<br>
```
iso.AssociateComment(c);
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the initial stress solid. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the initial stress solid

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for initial stress solid iso:<br>
```
iso.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the initial stress solid. The target include of the copied initial stress solid can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>StressSolid object<br>
Return type
<br>StressSolid |
| --- |

| Example
<br>To copy initial stress solid iso into initial stress solid z:<br>
```
var z = iso.Copy();
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a initial stress solid. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the initial stress solid

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the initial stress solid iso:<br>
```
iso.DetachComment(c);
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for initial stress solid. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for initial stress solid iso:<br>
```
iso.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first initial stress solid in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first initial stress solid in

| Returns
<br>StressSolid object (or null if there are no initial stress solids in the model).<br>
Return type
<br>StressSolid |
| --- |

| Example
<br>To get the first initial stress solid in model m:<br>
```
var iso = StressSolid.First(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the initial stress solids in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all initial stress solids will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the initial stress solids

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the initial stress solids with flag f in model m:<br>
```
StressSolid.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the initial stress solid is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the initial stress solid

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if initial stress solid iso has flag f set on it:<br>
```
if (iso.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each initial stress solid in the model.<br> **Note that ForEach has been designed to make looping over initial stress solids as fast as possible and so has some limitations. Firstly, a single temporary StressSolid object is created and on each function call it is updated with the current initial stress solid data. This means that you should not try to store the StressSolid object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new initial stress solids inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all initial stress solids are in

* func (function)
 
Function to call for each initial stress solid

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the initial stress solids in model m:<br>
```
StressSolid.ForEach(m, test);
function test(iso)
{
// iso is StressSolid object
}
```
<br><br>To call function test for all of the initial stress solids in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
StressSolid.ForEach(m, test, data);
function test(iso, extra)
{
// iso is StressSolid object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of StressSolid objects or properties for all of the initial stress solids in a model in PRIMER. If the optional property argument is not given then an array of StressSolid objects is returned. If the property argument is given, that property value for each initial stress solid is returned in the array instead of a StressSolid object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get initial stress solids from

* property (optional) (string)
 
Name for property to get for all initial stress solids in the model

| Returns
<br>Array of StressSolid objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of StressSolid objects for all of the initial stress solids in model m:<br>
```
var a = StressSolid.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each initial stress solid in model m:<br>
```
var a = StressSolid.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a initial stress solid. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the initial stress solid iso:<br>
```
var comm_array = iso.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of StressSolid objects for all of the flagged initial stress solids in a model in PRIMER If the optional property argument is not given then an array of StressSolid objects is returned. If the property argument is given, then that property value for each initial stress solid is returned in the array instead of a StressSolid object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get initial stress solids from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the initial stress solids that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged initial stress solids in the model

| Returns
<br>Array of StressSolid objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of StressSolid objects for all of the initial stress solids in model m flagged with f:<br>
```
var iso = StressSolid.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the initial stress solids in model m flagged with f:<br>
```
var a = StressSolid.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the StressSolid object for a initial stress solid ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the initial stress solid in

* number (integer)
 
number of the initial stress solid you want the StressSolid object for

| Returns
<br>StressSolid object (or null if initial stress solid does not exist).<br>
Return type
<br>StressSolid |
| --- |

| Example
<br>To get the StressSolid object for initial stress solid 100 in model m<br>
```
var iso = StressSolid.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetIntegrationPoint(index*[integer]*)

Description<br>Returns the data for a specific integration point as an array. For each integration point there will be 7 values if [large](primer-stresssolid-class.md#large) is FALSE. For each integration point there will be (7 + [nhisv](primer-stresssolid-class.md#nhisv)) values if [large](primer-stresssolid-class.md#large) is TRUE. There are [nint](primer-stresssolid-class.md#nint) integration points. |
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
<br>To get the data for the 3rd integration point for initial stress solid iso:<br>
```
var data = iso.GetIntegrationPoint(2);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a StressSolid property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [StressSolid.ViewParameters()](primer-stresssolid-class.md#StressSolid::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
initial stress solid property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if StressSolid property iso.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (iso.GetParameter(iso.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if StressSolid property iso.example is a parameter by using the GetParameter method:<br>
```
if (iso.ViewParameters().GetParameter(iso.example) ) do_something...
```
 |
| --- |

* * *

| GetThermalIntegrationPoint(index*[integer]*)

Description<br>Returns the thermal data for a specific integration point as an array. For each integration point there will be [nthhsv](primer-stresssolid-class.md#nthhsv) values. There are [nthint](primer-stresssolid-class.md#nthint) integration points. |
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
<br>To get the data for the 3rd thermal integration point for initial stress solid iso:<br>
```
var data = iso.GetThermalIntegrationPoint(2);
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this initial stress solid (\*INITIAL\_STRESS\_SOLID). **Note that a carriage return is not added**. See also [StressSolid.KeywordCards()](primer-stresssolid-class.md#StressSolid::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for stress\_solid i:<br>
```
var key = i.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the initial stress solid. **Note that a carriage return is not added**. See also [StressSolid.Keyword()](primer-stresssolid-class.md#StressSolid::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for stress\_solid i:<br>
```
var cards = i.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last initial stress solid in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last initial stress solid in

| Returns
<br>StressSolid object (or null if there are no initial stress solids in the model).<br>
Return type
<br>StressSolid |
| --- |

| Example
<br>To get the last initial stress solid in model m:<br>
```
var iso = StressSolid.Last(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next initial stress solid in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>StressSolid object (or null if there are no more initial stress solids in the model).<br>
Return type
<br>StressSolid |
| --- |

| Example
<br>To get the initial stress solid in model m after initial stress solid iso:<br>
```
var iso = iso.Next();
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a initial stress solid. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only initial stress solids from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only initial stress solids that are flagged with *limit* can be selected. If omitted, or null, any initial stress solids from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[StressSolid](primer-stresssolid-class.md) object (or null if not picked)<br>
Return type
<br>StressSolid |
| --- |

| Example
<br>To pick a initial stress solid from model m giving the prompt 'Pick initial stress solid from screen':<br>
```
var iso = StressSolid.Pick('Pick initial stress solid from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous initial stress solid in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>StressSolid object (or null if there are no more initial stress solids in the model).<br>
Return type
<br>StressSolid |
| --- |

| Example
<br>To get the initial stress solid in model m before initial stress solid iso:<br>
```
var iso = iso.Previous();
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select initial stress solids using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting initial stress solids

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only initial stress solids from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only initial stress solids that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any initial stress solids can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of initial stress solids selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select initial stress solids from model m, flagging those selected with flag f, giving the prompt 'Select initial stress solids':<br>
```
StressSolid.Select(f, 'Select initial stress solids', m);
```
<br><br>To select initial stress solids, flagging those selected with flag f but limiting selection to initial stress solids flagged with flag l, giving the prompt 'Select initial stress solids':<br>
```
StressSolid.Select(f, 'Select initial stress solids', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the initial stress solid. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the initial stress solid

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for initial stress solid iso:<br>
```
iso.SetFlag(f);
```
 |
| --- |

* * *

| SetIntegrationPoint(index*[integer]*, data*[Array of data]*)

Description<br>Set the data for a specific integration point. For each integration point there will be 7 values if [large](primer-stresssolid-class.md#large) is FALSE. For each integration point there will be (7 + [nhisv](primer-stresssolid-class.md#nhisv)) values if [large](primer-stresssolid-class.md#large) is TRUE. There are [nint](primer-stresssolid-class.md#nint) integration points. |
| --- |

#### Arguments

* index (integer)
 
Index you want the integration point data for. **Note that indices start at 0**.

* data (Array of data)
 
Array containing the integration point data. The array length should be 7 if [large](primer-stresssolid-class.md#large) is FALSE. The array length should be (7 + [nhisv](primer-stresssolid-class.md#nhisv)) if [large](primer-stresssolid-class.md#large) is TRUE.

| Returns
<br>No return value. |
| --- |

| Example
<br>To set the 3rd integration point data for initial stress solid iso to the values in array adata:<br>
```
iso.SetIntegrationPoint(2, adata);
```
 |
| --- |

* * *

| SetThermalIntegrationPoint(index*[integer]*, data*[Array of data]*)

Description<br>Set the thermal data for a specific integration point. For each integration point there will be [nthhsv](primer-stresssolid-class.md#nthhsv) values. There are [nthint](primer-stresssolid-class.md#nthint) thermal integration points. |
| --- |

#### Arguments

* index (integer)
 
Index you want the thermal integration point data for. **Note that indices start at 0**.

* data (Array of data)
 
Array containing the thermal integration point data. The array length should be [nthhsv](primer-stresssolid-class.md#nthhsv).

| Returns
<br>No return value. |
| --- |

| Example
<br>To set the 3rd thermal integration point data for initial stress solid iso to the values in array adata:<br>
```
iso.SetThermalIntegrationPoint(2, adata);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the initial stress solid. The initial stress solid will be sketched until you either call [StressSolid.Unsketch()](primer-stresssolid-class.md#StressSolid::Unsketch), [StressSolid.UnsketchAll()](primer-stresssolid-class.md#StressSolid::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the initial stress solid is sketched. If omitted redraw is true. If you want to sketch several initial stress solids and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch initial stress solid iso:<br>
```
iso.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged initial stress solids in the model. The initial stress solids will be sketched until you either call [StressSolid.Unsketch()](primer-stresssolid-class.md#StressSolid::Unsketch), [StressSolid.UnsketchFlagged()](primer-stresssolid-class.md#StressSolid::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged initial stress solids will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the initial stress solids that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the initial stress solids are sketched. If omitted redraw is true. If you want to sketch flagged initial stress solids several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all initial stress solids flagged with flag in model m:<br>
```
StressSolid.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of initial stress solids in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing initial stress solids should be counted. If false or omitted
referenced but undefined initial stress solids will also be included in the total.

| Returns
<br>number of initial stress solids<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of initial stress solids in model m:<br>
```
var total = StressSolid.Total(m);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the initial stress solids in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all initial stress solids will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the initial stress solids

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the initial stress solids in model m:<br>
```
StressSolid.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the initial stress solid. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the initial stress solid is unsketched. If omitted redraw is true. If you want to unsketch several initial stress solids and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch initial stress solid iso:<br>
```
iso.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all initial stress solids. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all initial stress solids will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the initial stress solids are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all initial stress solids in model m:<br>
```
StressSolid.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged initial stress solids in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all initial stress solids will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the initial stress solids that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the initial stress solids are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all initial stress solids flagged with flag in model m:<br>
```
StressSolid.UnsketchAll(m, flag);
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
<br>[StressSolid](primer-stresssolid-class.md) object.<br>
Return type
<br>StressSolid |
| --- |

| Example
<br>To check if StressSolid property iso.example is a parameter by using the [StressSolid.GetParameter()](primer-stresssolid-class.md#StressSolid::GetParameter) method:<br>
```
if (iso.ViewParameters().GetParameter(iso.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for initial stress solid. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for initial stress solid iso:<br>
```
iso.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this initial stress solid. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for initial stress solid iso:<br>
```
var xrefs = iso.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the initial stress solid data in keyword format. Note that this contains the keyword header and the keyword cards. See also [StressSolid.Keyword()](primer-stresssolid-class.md#StressSolid::Keyword) and [StressSolid.KeywordCards()](primer-stresssolid-class.md#StressSolid::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for stress\_solid i in keyword format<br>
```
var s = i.toString();
```
 |
| --- |

* * *