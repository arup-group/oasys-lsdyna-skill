# StrainSolid class

The StrainSolid class gives you access to define initial strain solid cards in PRIMER. [More...](primer-strainsolid-class.md#StrainSolid_details)

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

* [First](primer-strainsolid-class.md#StrainSolid::First)(Model*[[Model](primer-model-class.md)]*)
* [FlagAll](primer-strainsolid-class.md#StrainSolid::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-strainsolid-class.md#StrainSolid::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-strainsolid-class.md#StrainSolid::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-strainsolid-class.md#StrainSolid::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-strainsolid-class.md#StrainSolid::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-strainsolid-class.md#StrainSolid::Last)(Model*[[Model](primer-model-class.md)]*)
* [Pick](primer-strainsolid-class.md#StrainSolid::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [Select](primer-strainsolid-class.md#StrainSolid::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-strainsolid-class.md#StrainSolid::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-strainsolid-class.md#StrainSolid::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnflagAll](primer-strainsolid-class.md#StrainSolid::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-strainsolid-class.md#StrainSolid::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-strainsolid-class.md#StrainSolid::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-strainsolid-class.md#StrainSolid::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [ClearFlag](primer-strainsolid-class.md#StrainSolid::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-strainsolid-class.md#StrainSolid::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-strainsolid-class.md#StrainSolid::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Error](primer-strainsolid-class.md#StrainSolid::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-strainsolid-class.md#StrainSolid::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-strainsolid-class.md#StrainSolid::GetComments)()
* [GetParameter](primer-strainsolid-class.md#StrainSolid::GetParameter)(prop*[string]*)
* [Keyword](primer-strainsolid-class.md#StrainSolid::Keyword)()
* [KeywordCards](primer-strainsolid-class.md#StrainSolid::KeywordCards)()
* [Next](primer-strainsolid-class.md#StrainSolid::Next)()
* [Previous](primer-strainsolid-class.md#StrainSolid::Previous)()
* [SetFlag](primer-strainsolid-class.md#StrainSolid::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Sketch](primer-strainsolid-class.md#StrainSolid::Sketch)(redraw (optional)*[boolean]*)
* [Unsketch](primer-strainsolid-class.md#StrainSolid::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-strainsolid-class.md#StrainSolid::ViewParameters)()
* [Warning](primer-strainsolid-class.md#StrainSolid::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-strainsolid-class.md#StrainSolid::Xrefs)()
* [toString](primer-strainsolid-class.md#StrainSolid::toString)()

## StrainSolid constants

| **Name** | **Description** |
| --- | --- |
| StrainSolid.SET | Initial is \*INITIAL\_STRESS\_SOLID\_SET. |
| StrainSolid.SOLID | Initial is \*INITIAL\_STRESS\_SOLID. |

## StrainSolid properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| eid | integer | [Solid](primer-solid-class.md) Element ID or solid set ID |
| epsxx | real | Define the xxth strain component in the global cartesian system. |
| epsxy | real | Define the xyth strain component in the global cartesian system. |
| epsyy | real | Define the yyth strain component in the global cartesian system. |
| epsyz | real | Define the yzth strain component in the global cartesian system. |
| epszx | real | Define the zxth strain component in the global cartesian system. |
| epszz | real | Define the zzth strain component in the global cartesian system. |
| exists (read only) | logical | true if initial strain solid exists, false if referred to but not defined. |
| include | integer | The [Include](primer-include-class.md) file number that the initial strain solid is in. |
| model (read only) | integer | The [Model](primer-model-class.md) number that the initial strain solid is in. |
| type | constant | The Intial strain solid type. Can be [StrainSolid.SOLID](primer-strainsolid-class.md#StrainSolid.SOLID) or [StrainSolid.SET](primer-strainsolid-class.md#StrainSolid.SET). |

| Detailed Description<br>The StrainSolid class allows you to create, modify, edit and manipulate \*INITIAL\_STRESS\_SOLID cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new StrainSolid(Model*[[Model](primer-model-class.md)]*, type*[constant]*, eid*[integer]*, epsxx*[real]*, epsyy*[real]*, epszz*[real]*, epsxy*[real]*, epsyz*[real]*, epszx*[real]*)

Description<br>Create a new [StrainSolid](primer-strainsolid-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that strain\_solid will be created in

* type (constant)
 
Specify the type of initial strain solid (Can be [StrainSolid.SOLID](primer-strainsolid-class.md#StrainSolid.SOLID) or [StrainSolid.SET](primer-strainsolid-class.md#StrainSolid.SET))

* eid (integer)
 
[Solid](primer-solid-class.md) Element ID or solid set ID

* epsxx (real)
 
The xxth strain component in the global cartesian system.

* epsyy (real)
 
The yyth strain component in the global cartesian system.

* epszz (real)
 
The zzth strain component in the global cartesian system.

* epsxy (real)
 
The xyth strain component in the global cartesian system.

* epsyz (real)
 
The yzth strain component in the global cartesian system.

* epszx (real)
 
The zxth strain component in the global cartesian system.

| Returns
<br>[StrainSolid](primer-strainsolid-class.md) object<br>
Return type
<br>StrainSolid |
| --- |

| Example
<br>To create a new strain\_solid in model m, of type SET with SOLID\_SET id as 1, strain components as 10, 20, 30, 40, 50, 60.<br>
```
var s = new StrainSolid(m, StrainSolid.SET, 1, 10, 20, 30, 40, 50, 60);
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a initial strain solid. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the initial strain solid

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the initial strain solid iso:<br>
```
iso.AssociateComment(c);
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the initial strain solid. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the initial strain solid

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for initial strain solid iso:<br>
```
iso.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the initial strain solid. The target include of the copied initial strain solid can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>StrainSolid object<br>
Return type
<br>StrainSolid |
| --- |

| Example
<br>To copy initial strain solid iso into initial strain solid z:<br>
```
var z = iso.Copy();
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a initial strain solid. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the initial strain solid

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the initial strain solid iso:<br>
```
iso.DetachComment(c);
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for initial strain solid. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for initial strain solid iso:<br>
```
iso.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first initial strain solid in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first initial strain solid in

| Returns
<br>StrainSolid object (or null if there are no initial strain solids in the model).<br>
Return type
<br>StrainSolid |
| --- |

| Example
<br>To get the first initial strain solid in model m:<br>
```
var iso = StrainSolid.First(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the initial strain solids in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all initial strain solids will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the initial strain solids

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the initial strain solids with flag f in model m:<br>
```
StrainSolid.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the initial strain solid is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the initial strain solid

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if initial strain solid iso has flag f set on it:<br>
```
if (iso.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each initial strain solid in the model.<br> **Note that ForEach has been designed to make looping over initial strain solids as fast as possible and so has some limitations. Firstly, a single temporary StrainSolid object is created and on each function call it is updated with the current initial strain solid data. This means that you should not try to store the StrainSolid object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new initial strain solids inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all initial strain solids are in

* func (function)
 
Function to call for each initial strain solid

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the initial strain solids in model m:<br>
```
StrainSolid.ForEach(m, test);
function test(iso)
{
// iso is StrainSolid object
}
```
<br><br>To call function test for all of the initial strain solids in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
StrainSolid.ForEach(m, test, data);
function test(iso, extra)
{
// iso is StrainSolid object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of StrainSolid objects or properties for all of the initial strain solids in a model in PRIMER. If the optional property argument is not given then an array of StrainSolid objects is returned. If the property argument is given, that property value for each initial strain solid is returned in the array instead of a StrainSolid object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get initial strain solids from

* property (optional) (string)
 
Name for property to get for all initial strain solids in the model

| Returns
<br>Array of StrainSolid objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of StrainSolid objects for all of the initial strain solids in model m:<br>
```
var a = StrainSolid.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each initial strain solid in model m:<br>
```
var a = StrainSolid.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a initial strain solid. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the initial strain solid iso:<br>
```
var comm_array = iso.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of StrainSolid objects for all of the flagged initial strain solids in a model in PRIMER If the optional property argument is not given then an array of StrainSolid objects is returned. If the property argument is given, then that property value for each initial strain solid is returned in the array instead of a StrainSolid object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get initial strain solids from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the initial strain solids that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged initial strain solids in the model

| Returns
<br>Array of StrainSolid objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of StrainSolid objects for all of the initial strain solids in model m flagged with f:<br>
```
var iso = StrainSolid.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the initial strain solids in model m flagged with f:<br>
```
var a = StrainSolid.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the StrainSolid object for a initial strain solid ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the initial strain solid in

* number (integer)
 
number of the initial strain solid you want the StrainSolid object for

| Returns
<br>StrainSolid object (or null if initial strain solid does not exist).<br>
Return type
<br>StrainSolid |
| --- |

| Example
<br>To get the StrainSolid object for initial strain solid 100 in model m<br>
```
var iso = StrainSolid.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a StrainSolid property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [StrainSolid.ViewParameters()](primer-strainsolid-class.md#StrainSolid::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
initial strain solid property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if StrainSolid property iso.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (iso.GetParameter(iso.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if StrainSolid property iso.example is a parameter by using the GetParameter method:<br>
```
if (iso.ViewParameters().GetParameter(iso.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this initial strain solid (\*INITIAL\_STRESS\_SOLID). **Note that a carriage return is not added**. See also [StrainSolid.KeywordCards()](primer-strainsolid-class.md#StrainSolid::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for strain\_solid i:<br>
```
var key = i.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the initial strain solid. **Note that a carriage return is not added**. See also [StrainSolid.Keyword()](primer-strainsolid-class.md#StrainSolid::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for strain\_solid i:<br>
```
var cards = i.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last initial strain solid in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last initial strain solid in

| Returns
<br>StrainSolid object (or null if there are no initial strain solids in the model).<br>
Return type
<br>StrainSolid |
| --- |

| Example
<br>To get the last initial strain solid in model m:<br>
```
var iso = StrainSolid.Last(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next initial strain solid in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>StrainSolid object (or null if there are no more initial strain solids in the model).<br>
Return type
<br>StrainSolid |
| --- |

| Example
<br>To get the initial strain solid in model m after initial strain solid iso:<br>
```
var iso = iso.Next();
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a initial strain solid. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only initial strain solids from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only initial strain solids that are flagged with *limit* can be selected. If omitted, or null, any initial strain solids from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[StrainSolid](primer-strainsolid-class.md) object (or null if not picked)<br>
Return type
<br>StrainSolid |
| --- |

| Example
<br>To pick a initial strain solid from model m giving the prompt 'Pick initial strain solid from screen':<br>
```
var iso = StrainSolid.Pick('Pick initial strain solid from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous initial strain solid in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>StrainSolid object (or null if there are no more initial strain solids in the model).<br>
Return type
<br>StrainSolid |
| --- |

| Example
<br>To get the initial strain solid in model m before initial strain solid iso:<br>
```
var iso = iso.Previous();
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select initial strain solids using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting initial strain solids

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only initial strain solids from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only initial strain solids that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any initial strain solids can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of initial strain solids selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select initial strain solids from model m, flagging those selected with flag f, giving the prompt 'Select initial strain solids':<br>
```
StrainSolid.Select(f, 'Select initial strain solids', m);
```
<br><br>To select initial strain solids, flagging those selected with flag f but limiting selection to initial strain solids flagged with flag l, giving the prompt 'Select initial strain solids':<br>
```
StrainSolid.Select(f, 'Select initial strain solids', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the initial strain solid. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the initial strain solid

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for initial strain solid iso:<br>
```
iso.SetFlag(f);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the initial strain solid. The initial strain solid will be sketched until you either call [StrainSolid.Unsketch()](primer-strainsolid-class.md#StrainSolid::Unsketch), [StrainSolid.UnsketchAll()](primer-strainsolid-class.md#StrainSolid::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the initial strain solid is sketched. If omitted redraw is true. If you want to sketch several initial strain solids and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch initial strain solid iso:<br>
```
iso.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged initial strain solids in the model. The initial strain solids will be sketched until you either call [StrainSolid.Unsketch()](primer-strainsolid-class.md#StrainSolid::Unsketch), [StrainSolid.UnsketchFlagged()](primer-strainsolid-class.md#StrainSolid::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged initial strain solids will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the initial strain solids that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the initial strain solids are sketched. If omitted redraw is true. If you want to sketch flagged initial strain solids several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all initial strain solids flagged with flag in model m:<br>
```
StrainSolid.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of initial strain solids in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing initial strain solids should be counted. If false or omitted
referenced but undefined initial strain solids will also be included in the total.

| Returns
<br>number of initial strain solids<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of initial strain solids in model m:<br>
```
var total = StrainSolid.Total(m);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the initial strain solids in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all initial strain solids will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the initial strain solids

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the initial strain solids in model m:<br>
```
StrainSolid.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the initial strain solid. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the initial strain solid is unsketched. If omitted redraw is true. If you want to unsketch several initial strain solids and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch initial strain solid iso:<br>
```
iso.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all initial strain solids. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all initial strain solids will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the initial strain solids are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all initial strain solids in model m:<br>
```
StrainSolid.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged initial strain solids in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all initial strain solids will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the initial strain solids that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the initial strain solids are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all initial strain solids flagged with flag in model m:<br>
```
StrainSolid.UnsketchAll(m, flag);
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
<br>[StrainSolid](primer-strainsolid-class.md) object.<br>
Return type
<br>StrainSolid |
| --- |

| Example
<br>To check if StrainSolid property iso.example is a parameter by using the [StrainSolid.GetParameter()](primer-strainsolid-class.md#StrainSolid::GetParameter) method:<br>
```
if (iso.ViewParameters().GetParameter(iso.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for initial strain solid. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for initial strain solid iso:<br>
```
iso.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this initial strain solid. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for initial strain solid iso:<br>
```
var xrefs = iso.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the initial strain solid data in keyword format. Note that this contains the keyword header and the keyword cards. See also [StrainSolid.Keyword()](primer-strainsolid-class.md#StrainSolid::Keyword) and [StrainSolid.KeywordCards()](primer-strainsolid-class.md#StrainSolid::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for strain\_solid i in keyword format<br>
```
var s = i.toString();
```
 |
| --- |

* * *