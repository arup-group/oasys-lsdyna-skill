# AxialForceBeam class

The AxialForceBeam class gives you access to initial axial force beam cards in PRIMER. [More...](primer-axialforcebeam-class.md#AxialForceBeam_details)

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

* [First](primer-axialforcebeam-class.md#AxialForceBeam::First)(Model*[[Model](primer-model-class.md)]*)
* [FlagAll](primer-axialforcebeam-class.md#AxialForceBeam::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-axialforcebeam-class.md#AxialForceBeam::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-axialforcebeam-class.md#AxialForceBeam::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-axialforcebeam-class.md#AxialForceBeam::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-axialforcebeam-class.md#AxialForceBeam::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-axialforcebeam-class.md#AxialForceBeam::Last)(Model*[[Model](primer-model-class.md)]*)
* [Select](primer-axialforcebeam-class.md#AxialForceBeam::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-axialforcebeam-class.md#AxialForceBeam::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-axialforcebeam-class.md#AxialForceBeam::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnflagAll](primer-axialforcebeam-class.md#AxialForceBeam::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-axialforcebeam-class.md#AxialForceBeam::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-axialforcebeam-class.md#AxialForceBeam::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-axialforcebeam-class.md#AxialForceBeam::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [ClearFlag](primer-axialforcebeam-class.md#AxialForceBeam::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-axialforcebeam-class.md#AxialForceBeam::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-axialforcebeam-class.md#AxialForceBeam::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Error](primer-axialforcebeam-class.md#AxialForceBeam::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-axialforcebeam-class.md#AxialForceBeam::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-axialforcebeam-class.md#AxialForceBeam::GetComments)()
* [GetParameter](primer-axialforcebeam-class.md#AxialForceBeam::GetParameter)(prop*[string]*)
* [Keyword](primer-axialforcebeam-class.md#AxialForceBeam::Keyword)()
* [KeywordCards](primer-axialforcebeam-class.md#AxialForceBeam::KeywordCards)()
* [Next](primer-axialforcebeam-class.md#AxialForceBeam::Next)()
* [Previous](primer-axialforcebeam-class.md#AxialForceBeam::Previous)()
* [SetFlag](primer-axialforcebeam-class.md#AxialForceBeam::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Sketch](primer-axialforcebeam-class.md#AxialForceBeam::Sketch)(redraw (optional)*[boolean]*)
* [Unsketch](primer-axialforcebeam-class.md#AxialForceBeam::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-axialforcebeam-class.md#AxialForceBeam::ViewParameters)()
* [Warning](primer-axialforcebeam-class.md#AxialForceBeam::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-axialforcebeam-class.md#AxialForceBeam::Xrefs)()
* [toString](primer-axialforcebeam-class.md#AxialForceBeam::toString)()

## AxialForceBeam properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| bsid | integer | [Beam set](primer-set-class.md) ID. |
| exists (read only) | logical | true if axial force beam exists, false if referred to but not defined. |
| id (read only) | integer | ID of the axial force beam. Only used in PRIMER. |
| include | integer | The [Include](primer-include-class.md) file number that the axial force beam is in. |
| kbend | integer | Bending stiffness flag. |
| lcid | integer | [Loadcurve](primer-curve-class.md) ID. |
| model (read only) | integer | The [Model](primer-model-class.md) number that the axial force beam is in. |
| scale | real | Scale factor on loadcurve. |

| Detailed Description<br>The AxialForceBeam class allows you to create, modify, edit and manipulate initial axial force beam cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new AxialForceBeam(Model*[[Model](primer-model-class.md)]*, bsid*[integer]*, lcid*[integer]*, scale (optional)*[real]*)

Description<br>Create a new [AxialForceBeam](primer-axialforcebeam-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that axial force beam will be created in

* bsid (integer)
 
[BeamSet](primer-set-class.md) ID.

* lcid (integer)
 
[Loadcurve](primer-curve-class.md) ID defining preload versus time.

* scale (optional) (real)
 
Scale factor on curve

| Returns
<br>[AxialForceBeam](primer-axialforcebeam-class.md) object<br>
Return type
<br>AxialForceBeam |
| --- |

| Example
<br>To create a new axial force beam in model m using beam set 10, load curve 100:<br>
```
var afb = new AxialForceBeam(m, 10, 100);
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a axial force beam. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the axial force beam

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the axial force beam afb:<br>
```
afb.AssociateComment(c);
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the axial force beam. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the axial force beam

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for axial force beam afb:<br>
```
afb.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the axial force beam. The target include of the copied axial force beam can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>AxialForceBeam object<br>
Return type
<br>AxialForceBeam |
| --- |

| Example
<br>To copy axial force beam afb into axial force beam z:<br>
```
var z = afb.Copy();
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a axial force beam. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the axial force beam

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the axial force beam afb:<br>
```
afb.DetachComment(c);
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for axial force beam. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for axial force beam afb:<br>
```
afb.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first axial force beam in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first axial force beam in

| Returns
<br>AxialForceBeam object (or null if there are no axial force beams in the model).<br>
Return type
<br>AxialForceBeam |
| --- |

| Example
<br>To get the first axial force beam in model m:<br>
```
var afb = AxialForceBeam.First(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the axial force beams in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all axial force beams will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the axial force beams

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the axial force beams with flag f in model m:<br>
```
AxialForceBeam.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the axial force beam is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the axial force beam

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if axial force beam afb has flag f set on it:<br>
```
if (afb.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each axial force beam in the model.<br> **Note that ForEach has been designed to make looping over axial force beams as fast as possible and so has some limitations. Firstly, a single temporary AxialForceBeam object is created and on each function call it is updated with the current axial force beam data. This means that you should not try to store the AxialForceBeam object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new axial force beams inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all axial force beams are in

* func (function)
 
Function to call for each axial force beam

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the axial force beams in model m:<br>
```
AxialForceBeam.ForEach(m, test);
function test(afb)
{
// afb is AxialForceBeam object
}
```
<br><br>To call function test for all of the axial force beams in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
AxialForceBeam.ForEach(m, test, data);
function test(afb, extra)
{
// afb is AxialForceBeam object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of AxialForceBeam objects or properties for all of the axial force beams in a model in PRIMER. If the optional property argument is not given then an array of AxialForceBeam objects is returned. If the property argument is given, that property value for each axial force beam is returned in the array instead of a AxialForceBeam object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get axial force beams from

* property (optional) (string)
 
Name for property to get for all axial force beams in the model

| Returns
<br>Array of AxialForceBeam objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of AxialForceBeam objects for all of the axial force beams in model m:<br>
```
var a = AxialForceBeam.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each axial force beam in model m:<br>
```
var a = AxialForceBeam.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a axial force beam. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the axial force beam afb:<br>
```
var comm_array = afb.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of AxialForceBeam objects for all of the flagged axial force beams in a model in PRIMER If the optional property argument is not given then an array of AxialForceBeam objects is returned. If the property argument is given, then that property value for each axial force beam is returned in the array instead of a AxialForceBeam object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get axial force beams from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the axial force beams that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged axial force beams in the model

| Returns
<br>Array of AxialForceBeam objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of AxialForceBeam objects for all of the axial force beams in model m flagged with f:<br>
```
var afb = AxialForceBeam.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the axial force beams in model m flagged with f:<br>
```
var a = AxialForceBeam.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the AxialForceBeam object for a axial force beam ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the axial force beam in

* number (integer)
 
number of the axial force beam you want the AxialForceBeam object for

| Returns
<br>AxialForceBeam object (or null if axial force beam does not exist).<br>
Return type
<br>AxialForceBeam |
| --- |

| Example
<br>To get the AxialForceBeam object for axial force beam 100 in model m<br>
```
var afb = AxialForceBeam.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a AxialForceBeam property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [AxialForceBeam.ViewParameters()](primer-axialforcebeam-class.md#AxialForceBeam::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
axial force beam property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if AxialForceBeam property afb.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (afb.GetParameter(afb.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if AxialForceBeam property afb.example is a parameter by using the GetParameter method:<br>
```
if (afb.ViewParameters().GetParameter(afb.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this axial force beam (\*INITIAL\_AXIAL\_FORCE\_BEAM). **Note that a carriage return is not added**. See also [AxialForceBeam.KeywordCards()](primer-axialforcebeam-class.md#AxialForceBeam::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for axial force beam afb:<br>
```
var key = afb.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the axial force beam. **Note that a carriage return is not added**. See also [AxialForceBeam.Keyword()](primer-axialforcebeam-class.md#AxialForceBeam::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for axial force beam afb:<br>
```
var cards = afb.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last axial force beam in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last axial force beam in

| Returns
<br>AxialForceBeam object (or null if there are no axial force beams in the model).<br>
Return type
<br>AxialForceBeam |
| --- |

| Example
<br>To get the last axial force beam in model m:<br>
```
var afb = AxialForceBeam.Last(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next axial force beam in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>AxialForceBeam object (or null if there are no more axial force beams in the model).<br>
Return type
<br>AxialForceBeam |
| --- |

| Example
<br>To get the axial force beam in model m after axial force beam afb:<br>
```
var afb = afb.Next();
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous axial force beam in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>AxialForceBeam object (or null if there are no more axial force beams in the model).<br>
Return type
<br>AxialForceBeam |
| --- |

| Example
<br>To get the axial force beam in model m before axial force beam afb:<br>
```
var afb = afb.Previous();
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select axial force beams using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting axial force beams

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only axial force beams from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only axial force beams that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any axial force beams can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of axial force beams selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select axial force beams from model m, flagging those selected with flag f, giving the prompt 'Select axial force beams':<br>
```
AxialForceBeam.Select(f, 'Select axial force beams', m);
```
<br><br>To select axial force beams, flagging those selected with flag f but limiting selection to axial force beams flagged with flag l, giving the prompt 'Select axial force beams':<br>
```
AxialForceBeam.Select(f, 'Select axial force beams', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the axial force beam. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the axial force beam

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for axial force beam afb:<br>
```
afb.SetFlag(f);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the axial force beam. The axial force beam will be sketched until you either call [AxialForceBeam.Unsketch()](primer-axialforcebeam-class.md#AxialForceBeam::Unsketch), [AxialForceBeam.UnsketchAll()](primer-axialforcebeam-class.md#AxialForceBeam::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the axial force beam is sketched. If omitted redraw is true. If you want to sketch several axial force beams and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch axial force beam afb:<br>
```
afb.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged axial force beams in the model. The axial force beams will be sketched until you either call [AxialForceBeam.Unsketch()](primer-axialforcebeam-class.md#AxialForceBeam::Unsketch), [AxialForceBeam.UnsketchFlagged()](primer-axialforcebeam-class.md#AxialForceBeam::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged axial force beams will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the axial force beams that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the axial force beams are sketched. If omitted redraw is true. If you want to sketch flagged axial force beams several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all axial force beams flagged with flag in model m:<br>
```
AxialForceBeam.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of axial force beams in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing axial force beams should be counted. If false or omitted
referenced but undefined axial force beams will also be included in the total.

| Returns
<br>number of axial force beams<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of axial force beams in model m:<br>
```
var total = AxialForceBeam.Total(m);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the axial force beams in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all axial force beams will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the axial force beams

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the axial force beams in model m:<br>
```
AxialForceBeam.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the axial force beam. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the axial force beam is unsketched. If omitted redraw is true. If you want to unsketch several axial force beams and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch axial force beam afb:<br>
```
afb.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all axial force beams. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all axial force beams will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the axial force beams are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all axial force beams in model m:<br>
```
AxialForceBeam.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged axial force beams in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all axial force beams will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the axial force beams that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the axial force beams are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all axial force beams flagged with flag in model m:<br>
```
AxialForceBeam.UnsketchAll(m, flag);
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
<br>[AxialForceBeam](primer-axialforcebeam-class.md) object.<br>
Return type
<br>AxialForceBeam |
| --- |

| Example
<br>To check if AxialForceBeam property afb.example is a parameter by using the [AxialForceBeam.GetParameter()](primer-axialforcebeam-class.md#AxialForceBeam::GetParameter) method:<br>
```
if (afb.ViewParameters().GetParameter(afb.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for axial force beam. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for axial force beam afb:<br>
```
afb.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this axial force beam. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for axial force beam afb:<br>
```
var xrefs = afb.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the axial force data in keyword format. Note that this contains the keyword header and the keyword cards. See also [AxialForceBeam.Keyword()](primer-axialforcebeam-class.md#AxialForceBeam::Keyword) and [AxialForceBeam.KeywordCards()](primer-axialforcebeam-class.md#AxialForceBeam::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for axial force beam afb in keyword format<br>
```
var s = afb.toString();
```
 |
| --- |

* * *