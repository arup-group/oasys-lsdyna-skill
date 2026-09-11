# StrainBeam class

The StrainBeam class gives you access to define initial strain beam cards in PRIMER. [More...](primer-strainbeam-class.md#StrainBeam_details)

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

* [First](primer-strainbeam-class.md#StrainBeam::First)(Model*[[Model](primer-model-class.md)]*)
* [FlagAll](primer-strainbeam-class.md#StrainBeam::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-strainbeam-class.md#StrainBeam::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-strainbeam-class.md#StrainBeam::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-strainbeam-class.md#StrainBeam::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-strainbeam-class.md#StrainBeam::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-strainbeam-class.md#StrainBeam::Last)(Model*[[Model](primer-model-class.md)]*)
* [Pick](primer-strainbeam-class.md#StrainBeam::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [Select](primer-strainbeam-class.md#StrainBeam::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-strainbeam-class.md#StrainBeam::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-strainbeam-class.md#StrainBeam::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnflagAll](primer-strainbeam-class.md#StrainBeam::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-strainbeam-class.md#StrainBeam::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-strainbeam-class.md#StrainBeam::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-strainbeam-class.md#StrainBeam::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [ClearFlag](primer-strainbeam-class.md#StrainBeam::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-strainbeam-class.md#StrainBeam::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-strainbeam-class.md#StrainBeam::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Error](primer-strainbeam-class.md#StrainBeam::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-strainbeam-class.md#StrainBeam::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-strainbeam-class.md#StrainBeam::GetComments)()
* [GetParameter](primer-strainbeam-class.md#StrainBeam::GetParameter)(prop*[string]*)
* [Keyword](primer-strainbeam-class.md#StrainBeam::Keyword)()
* [KeywordCards](primer-strainbeam-class.md#StrainBeam::KeywordCards)()
* [Next](primer-strainbeam-class.md#StrainBeam::Next)()
* [Previous](primer-strainbeam-class.md#StrainBeam::Previous)()
* [SetFlag](primer-strainbeam-class.md#StrainBeam::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Sketch](primer-strainbeam-class.md#StrainBeam::Sketch)(redraw (optional)*[boolean]*)
* [Unsketch](primer-strainbeam-class.md#StrainBeam::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-strainbeam-class.md#StrainBeam::ViewParameters)()
* [Warning](primer-strainbeam-class.md#StrainBeam::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-strainbeam-class.md#StrainBeam::Xrefs)()
* [toString](primer-strainbeam-class.md#StrainBeam::toString)()

## StrainBeam properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| eid | integer | [Beam](primer-beam-class.md) Element ID |
| exists (read only) | logical | true if initial strain beam exists, false if referred to but not defined. |
| include | integer | The [Include](primer-include-class.md) file number that the initial strain beam is in. |
| model (read only) | integer | The [Model](primer-model-class.md) number that the initial strain beam is in. |
| rdisp | real | The initial displacement along the local r-axis |
| rrot | real | The initial rotation about the local r-axis |
| sdisp | real | The initial displacement along the local s-axis |
| srot | real | The initial rotation about the local s-axis |
| tdisp | real | The initial displacement aling the local t-axis |
| trot | real | The initial rotation about the local t-axis |

| Detailed Description<br>The StrainBeam class allows you to create, modify, edit and manipulate strain\_beam cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new StrainBeam(Model*[[Model](primer-model-class.md)]*, details*[object]*)

Description<br>Create a new [StrainBeam](primer-strainbeam-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that strain\_beam will be created in

* details (object)

Details for creating the [StrainBeam](primer-strainbeam-class.md) 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| eid | integer | [Beam](primer-beam-class.md) Element ID |
| rdisp (optional) | real | The initial displacement along the local r-axis |
| rrot (optional) | real | The initial rotation about the local r-axis |
| sdisp (optional) | real | The initial displacement along the local s-axis |
| srot (optional) | real | The initial rotation about the local s-axis |
| tdisp (optional) | real | The initial displacement along the local t-axis |
| trot (optional) | real | The initial rotation about the local t-axis |

| Returns
<br>[StrainBeam](primer-strainbeam-class.md) object<br>
Return type
<br>StrainBeam |
| --- |

| Example
<br>To create a new strain\_beam in model m, using eid 1, rdisp 2.2, sdisp 3.3, tdisp 4.4, rrot 5.5, srot 6.6 and trot 7.7:<br>
```
var s = new StrainBeam(m, {eid: 1, rdisp: 2.2, sdisp: 3.3, tdisp: 4.4, rrot: 5.5, srot: 6.6, trot: 7.7});
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a initial strain beam. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the initial strain beam

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the initial strain beam ieb:<br>
```
ieb.AssociateComment(c);
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the initial strain beam. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the initial strain beam

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for initial strain beam ieb:<br>
```
ieb.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the initial strain beam. The target include of the copied initial strain beam can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>StrainBeam object<br>
Return type
<br>StrainBeam |
| --- |

| Example
<br>To copy initial strain beam ieb into initial strain beam z:<br>
```
var z = ieb.Copy();
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a initial strain beam. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the initial strain beam

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the initial strain beam ieb:<br>
```
ieb.DetachComment(c);
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for initial strain beam. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for initial strain beam ieb:<br>
```
ieb.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first initial strain beam in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first initial strain beam in

| Returns
<br>StrainBeam object (or null if there are no initial strain beams in the model).<br>
Return type
<br>StrainBeam |
| --- |

| Example
<br>To get the first initial strain beam in model m:<br>
```
var ieb = StrainBeam.First(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the initial strain beams in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all initial strain beams will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the initial strain beams

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the initial strain beams with flag f in model m:<br>
```
StrainBeam.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the initial strain beam is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the initial strain beam

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if initial strain beam ieb has flag f set on it:<br>
```
if (ieb.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each initial strain beam in the model.<br> **Note that ForEach has been designed to make looping over initial strain beams as fast as possible and so has some limitations. Firstly, a single temporary StrainBeam object is created and on each function call it is updated with the current initial strain beam data. This means that you should not try to store the StrainBeam object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new initial strain beams inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all initial strain beams are in

* func (function)
 
Function to call for each initial strain beam

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the initial strain beams in model m:<br>
```
StrainBeam.ForEach(m, test);
function test(ieb)
{
// ieb is StrainBeam object
}
```
<br><br>To call function test for all of the initial strain beams in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
StrainBeam.ForEach(m, test, data);
function test(ieb, extra)
{
// ieb is StrainBeam object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of StrainBeam objects or properties for all of the initial strain beams in a model in PRIMER. If the optional property argument is not given then an array of StrainBeam objects is returned. If the property argument is given, that property value for each initial strain beam is returned in the array instead of a StrainBeam object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get initial strain beams from

* property (optional) (string)
 
Name for property to get for all initial strain beams in the model

| Returns
<br>Array of StrainBeam objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of StrainBeam objects for all of the initial strain beams in model m:<br>
```
var a = StrainBeam.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each initial strain beam in model m:<br>
```
var a = StrainBeam.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a initial strain beam. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the initial strain beam ieb:<br>
```
var comm_array = ieb.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of StrainBeam objects for all of the flagged initial strain beams in a model in PRIMER If the optional property argument is not given then an array of StrainBeam objects is returned. If the property argument is given, then that property value for each initial strain beam is returned in the array instead of a StrainBeam object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get initial strain beams from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the initial strain beams that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged initial strain beams in the model

| Returns
<br>Array of StrainBeam objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of StrainBeam objects for all of the initial strain beams in model m flagged with f:<br>
```
var ieb = StrainBeam.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the initial strain beams in model m flagged with f:<br>
```
var a = StrainBeam.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the StrainBeam object for a initial strain beam ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the initial strain beam in

* number (integer)
 
number of the initial strain beam you want the StrainBeam object for

| Returns
<br>StrainBeam object (or null if initial strain beam does not exist).<br>
Return type
<br>StrainBeam |
| --- |

| Example
<br>To get the StrainBeam object for initial strain beam 100 in model m<br>
```
var ieb = StrainBeam.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a StrainBeam property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [StrainBeam.ViewParameters()](primer-strainbeam-class.md#StrainBeam::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
initial strain beam property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if StrainBeam property ieb.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (ieb.GetParameter(ieb.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if StrainBeam property ieb.example is a parameter by using the GetParameter method:<br>
```
if (ieb.ViewParameters().GetParameter(ieb.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this initial strain beam (\*INITIAL\_STRAIN\_SHELL). **Note that a carriage return is not added**. See also [StrainBeam.KeywordCards()](primer-strainbeam-class.md#StrainBeam::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for strain\_beam i:<br>
```
var key = i.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the initial strain beam. **Note that a carriage return is not added**. See also [StrainBeam.Keyword()](primer-strainbeam-class.md#StrainBeam::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for strain\_beam i:<br>
```
var cards = i.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last initial strain beam in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last initial strain beam in

| Returns
<br>StrainBeam object (or null if there are no initial strain beams in the model).<br>
Return type
<br>StrainBeam |
| --- |

| Example
<br>To get the last initial strain beam in model m:<br>
```
var ieb = StrainBeam.Last(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next initial strain beam in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>StrainBeam object (or null if there are no more initial strain beams in the model).<br>
Return type
<br>StrainBeam |
| --- |

| Example
<br>To get the initial strain beam in model m after initial strain beam ieb:<br>
```
var ieb = ieb.Next();
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a initial strain beam. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only initial strain beams from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only initial strain beams that are flagged with *limit* can be selected. If omitted, or null, any initial strain beams from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[StrainBeam](primer-strainbeam-class.md) object (or null if not picked)<br>
Return type
<br>StrainBeam |
| --- |

| Example
<br>To pick a initial strain beam from model m giving the prompt 'Pick initial strain beam from screen':<br>
```
var ieb = StrainBeam.Pick('Pick initial strain beam from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous initial strain beam in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>StrainBeam object (or null if there are no more initial strain beams in the model).<br>
Return type
<br>StrainBeam |
| --- |

| Example
<br>To get the initial strain beam in model m before initial strain beam ieb:<br>
```
var ieb = ieb.Previous();
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select initial strain beams using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting initial strain beams

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only initial strain beams from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only initial strain beams that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any initial strain beams can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of initial strain beams selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select initial strain beams from model m, flagging those selected with flag f, giving the prompt 'Select initial strain beams':<br>
```
StrainBeam.Select(f, 'Select initial strain beams', m);
```
<br><br>To select initial strain beams, flagging those selected with flag f but limiting selection to initial strain beams flagged with flag l, giving the prompt 'Select initial strain beams':<br>
```
StrainBeam.Select(f, 'Select initial strain beams', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the initial strain beam. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the initial strain beam

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for initial strain beam ieb:<br>
```
ieb.SetFlag(f);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the initial strain beam. The initial strain beam will be sketched until you either call [StrainBeam.Unsketch()](primer-strainbeam-class.md#StrainBeam::Unsketch), [StrainBeam.UnsketchAll()](primer-strainbeam-class.md#StrainBeam::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the initial strain beam is sketched. If omitted redraw is true. If you want to sketch several initial strain beams and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch initial strain beam ieb:<br>
```
ieb.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged initial strain beams in the model. The initial strain beams will be sketched until you either call [StrainBeam.Unsketch()](primer-strainbeam-class.md#StrainBeam::Unsketch), [StrainBeam.UnsketchFlagged()](primer-strainbeam-class.md#StrainBeam::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged initial strain beams will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the initial strain beams that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the initial strain beams are sketched. If omitted redraw is true. If you want to sketch flagged initial strain beams several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all initial strain beams flagged with flag in model m:<br>
```
StrainBeam.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of initial strain beams in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing initial strain beams should be counted. If false or omitted
referenced but undefined initial strain beams will also be included in the total.

| Returns
<br>number of initial strain beams<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of initial strain beams in model m:<br>
```
var total = StrainBeam.Total(m);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the initial strain beams in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all initial strain beams will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the initial strain beams

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the initial strain beams in model m:<br>
```
StrainBeam.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the initial strain beam. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the initial strain beam is unsketched. If omitted redraw is true. If you want to unsketch several initial strain beams and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch initial strain beam ieb:<br>
```
ieb.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all initial strain beams. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all initial strain beams will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the initial strain beams are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all initial strain beams in model m:<br>
```
StrainBeam.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged initial strain beams in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all initial strain beams will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the initial strain beams that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the initial strain beams are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all initial strain beams flagged with flag in model m:<br>
```
StrainBeam.UnsketchAll(m, flag);
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
<br>[StrainBeam](primer-strainbeam-class.md) object.<br>
Return type
<br>StrainBeam |
| --- |

| Example
<br>To check if StrainBeam property ieb.example is a parameter by using the [StrainBeam.GetParameter()](primer-strainbeam-class.md#StrainBeam::GetParameter) method:<br>
```
if (ieb.ViewParameters().GetParameter(ieb.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for initial strain beam. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for initial strain beam ieb:<br>
```
ieb.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this initial strain beam. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for initial strain beam ieb:<br>
```
var xrefs = ieb.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the initial strain beam data in keyword format. Note that this contains the keyword header and the keyword cards. See also [StrainBeam.Keyword()](primer-strainbeam-class.md#StrainBeam::Keyword) and [StrainBeam.KeywordCards()](primer-strainbeam-class.md#StrainBeam::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for strain\_beam i in keyword format<br>
```
var s = i.toString();
```
 |
| --- |

* * *