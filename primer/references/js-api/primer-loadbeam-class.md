# LoadBeam class

The LoadBeam class gives you access to define load beam cards in PRIMER. [More...](primer-loadbeam-class.md#LoadBeam_details)

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

* [BlankAll](primer-loadbeam-class.md#LoadBeam::BlankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [BlankFlagged](primer-loadbeam-class.md#LoadBeam::BlankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Create](primer-loadbeam-class.md#LoadBeam::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [First](primer-loadbeam-class.md#LoadBeam::First)(Model*[[Model](primer-model-class.md)]*)
* [FlagAll](primer-loadbeam-class.md#LoadBeam::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-loadbeam-class.md#LoadBeam::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-loadbeam-class.md#LoadBeam::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-loadbeam-class.md#LoadBeam::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-loadbeam-class.md#LoadBeam::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-loadbeam-class.md#LoadBeam::Last)(Model*[[Model](primer-model-class.md)]*)
* [Pick](primer-loadbeam-class.md#LoadBeam::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [Select](primer-loadbeam-class.md#LoadBeam::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-loadbeam-class.md#LoadBeam::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-loadbeam-class.md#LoadBeam::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnblankAll](primer-loadbeam-class.md#LoadBeam::UnblankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnblankFlagged](primer-loadbeam-class.md#LoadBeam::UnblankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [UnflagAll](primer-loadbeam-class.md#LoadBeam::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-loadbeam-class.md#LoadBeam::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-loadbeam-class.md#LoadBeam::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-loadbeam-class.md#LoadBeam::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Blank](primer-loadbeam-class.md#LoadBeam::Blank)()
* [Blanked](primer-loadbeam-class.md#LoadBeam::Blanked)()
* [Browse](primer-loadbeam-class.md#LoadBeam::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-loadbeam-class.md#LoadBeam::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-loadbeam-class.md#LoadBeam::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-loadbeam-class.md#LoadBeam::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-loadbeam-class.md#LoadBeam::Edit)(modal (optional)*[boolean]*)
* [Error](primer-loadbeam-class.md#LoadBeam::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-loadbeam-class.md#LoadBeam::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-loadbeam-class.md#LoadBeam::GetComments)()
* [GetParameter](primer-loadbeam-class.md#LoadBeam::GetParameter)(prop*[string]*)
* [Keyword](primer-loadbeam-class.md#LoadBeam::Keyword)()
* [KeywordCards](primer-loadbeam-class.md#LoadBeam::KeywordCards)()
* [Next](primer-loadbeam-class.md#LoadBeam::Next)()
* [Previous](primer-loadbeam-class.md#LoadBeam::Previous)()
* [SetFlag](primer-loadbeam-class.md#LoadBeam::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Sketch](primer-loadbeam-class.md#LoadBeam::Sketch)(redraw (optional)*[boolean]*)
* [Unblank](primer-loadbeam-class.md#LoadBeam::Unblank)()
* [Unsketch](primer-loadbeam-class.md#LoadBeam::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-loadbeam-class.md#LoadBeam::ViewParameters)()
* [Warning](primer-loadbeam-class.md#LoadBeam::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-loadbeam-class.md#LoadBeam::Xrefs)()
* [toString](primer-loadbeam-class.md#LoadBeam::toString)()

## LoadBeam constants

| **Name** | **Description** |
| --- | --- |
| LoadBeam.ELEMENT | Load is \*LOAD\_BEAM\_ELEMENT. |
| LoadBeam.SET | LOAD is \*LOAD\_BEAM\_SET. |

## LoadBeam properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| dal | integer | Direction of applied load. 1 for r-axis, 2 for s-axis or 3 for t-axis of beam. |
| eid | integer | [Node](primer-node-class.md)Beam ID or beam set ID. The [esid](primer-loadbeam-class.md#esid) property is an alternative name for this. |
| esid | integer | [Node](primer-node-class.md)Beam ID or beam set ID. The [eid](primer-loadbeam-class.md#eid) property is an alternative name for this. |
| exists (read only) | logical | true if load beam exists, false if referred to but not defined. |
| include | integer | The [Include](primer-include-class.md) file number that the load beam is in. |
| lcid | integer | [Curve](primer-curve-class.md) ID or function ID |
| model (read only) | integer | The [Model](primer-model-class.md) number that the load beam is in. |
| sf | real | Load curve scale factor |
| type | constant | The Load Beam type. Can be [LoadBeam.ELEMENT](primer-loadbeam-class.md#LoadBeam.ELEMENT) or [LoadBeam.SET](primer-loadbeam-class.md#LoadBeam.SET). |

| Detailed Description<br>The LoadBeam class allows you to create, modify, edit and manipulate load beam cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new LoadBeam(Model*[[Model](primer-model-class.md)]*, type*[constant]*, eid/esid*[integer]*, dal*[integer]*, lcid*[integer]*, sf (optional)*[real]*)

Description<br>Create a new [LoadBeam](primer-loadbeam-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that load beam will be created in

* type (constant)
 
Specify the type of load beam (Can be [LoadBeam.ELEMENT](primer-loadbeam-class.md#LoadBeam.ELEMENT) or [LoadBeam.SET](primer-loadbeam-class.md#LoadBeam.SET))

* eid/esid (integer)
 
[Beam](primer-beam-class.md) ID or beam set ID

* dal (integer)
 
Direction of applied load. 1 for r-axis, 2 for s-axis or 3 for t-axis of beam.

* lcid (integer)
 
[Curve](primer-curve-class.md) ID

* sf (optional) (real)
 
Load curve scale factor

| Returns
<br>[LoadBeam](primer-loadbeam-class.md) object<br>
Return type
<br>LoadBeam |
| --- |

| Example
<br>To create a new load beam in model m, of type SET, with beam set 100, load parallel to s-axis, loadcurve 9 and a scale factor of 0.5:<br>
```
var lb = new LoadBeam(m, LoadBeam.SET, 100, 2, 9, 0.5);
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a load beam. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the load beam

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the load beam lb:<br>
```
lb.AssociateComment(c);
```
 |
| --- |

* * *

| Blank()

Description<br>Blanks the load beam |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To blank load beam lb:<br>
```
lb.Blank();
```
 |
| --- |

* * *

| BlankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the load beams in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all load beams will be blanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the load beams in model m:<br>
```
LoadBeam.BlankAll(m);
```
 |
| --- |

* * *

| BlankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the flagged load beams in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged load beams will be blanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the load beams that you want to blank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the load beams in model m flagged with f:<br>
```
LoadBeam.BlankFlagged(m, f);
```
 |
| --- |

* * *

| Blanked()

Description<br>Checks if the load beam is blanked or not. |
| --- |

#### Arguments

No arguments

| Returns
<br>true if blanked, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if load beam lb is blanked:<br>
```
if (lb.Blanked() ) do_something...
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
<br>To Browse load beam lb:<br>
```
lb.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the load beam. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the load beam

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for load beam lb:<br>
```
lb.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the load beam. The target include of the copied load beam can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>LoadBeam object<br>
Return type
<br>LoadBeam |
| --- |

| Example
<br>To copy load beam lb into load beam z:<br>
```
var z = lb.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a load beam |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the load beam will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>LoadBeam object (or null if not made).<br>
Return type
<br>LoadBeam |
| --- |

| Example
<br>To start creating a load beam in model m:<br>
```
var lb = LoadBeam.Create(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a load beam. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the load beam

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the load beam lb:<br>
```
lb.DetachComment(c);
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
<br>To Edit load beam lb:<br>
```
lb.Edit();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for load beam. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for load beam lb:<br>
```
lb.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first load beam in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first load beam in

| Returns
<br>LoadBeam object (or null if there are no load beams in the model).<br>
Return type
<br>LoadBeam |
| --- |

| Example
<br>To get the first load beam in model m:<br>
```
var lb = LoadBeam.First(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the load beams in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all load beams will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the load beams

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the load beams with flag f in model m:<br>
```
LoadBeam.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the load beam is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the load beam

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if load beam lb has flag f set on it:<br>
```
if (lb.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each load beam in the model.<br> **Note that ForEach has been designed to make looping over load beams as fast as possible and so has some limitations. Firstly, a single temporary LoadBeam object is created and on each function call it is updated with the current load beam data. This means that you should not try to store the LoadBeam object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new load beams inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all load beams are in

* func (function)
 
Function to call for each load beam

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the load beams in model m:<br>
```
LoadBeam.ForEach(m, test);
function test(lb)
{
// lb is LoadBeam object
}
```
<br><br>To call function test for all of the load beams in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
LoadBeam.ForEach(m, test, data);
function test(lb, extra)
{
// lb is LoadBeam object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of LoadBeam objects or properties for all of the load beams in a model in PRIMER. If the optional property argument is not given then an array of LoadBeam objects is returned. If the property argument is given, that property value for each load beam is returned in the array instead of a LoadBeam object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get load beams from

* property (optional) (string)
 
Name for property to get for all load beams in the model

| Returns
<br>Array of LoadBeam objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of LoadBeam objects for all of the load beams in model m:<br>
```
var a = LoadBeam.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each load beam in model m:<br>
```
var a = LoadBeam.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a load beam. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the load beam lb:<br>
```
var comm_array = lb.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of LoadBeam objects for all of the flagged load beams in a model in PRIMER If the optional property argument is not given then an array of LoadBeam objects is returned. If the property argument is given, then that property value for each load beam is returned in the array instead of a LoadBeam object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get load beams from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the load beams that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged load beams in the model

| Returns
<br>Array of LoadBeam objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of LoadBeam objects for all of the load beams in model m flagged with f:<br>
```
var lb = LoadBeam.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the load beams in model m flagged with f:<br>
```
var a = LoadBeam.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the LoadBeam object for a load beam ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the load beam in

* number (integer)
 
number of the load beam you want the LoadBeam object for

| Returns
<br>LoadBeam object (or null if load beam does not exist).<br>
Return type
<br>LoadBeam |
| --- |

| Example
<br>To get the LoadBeam object for load beam 100 in model m<br>
```
var lb = LoadBeam.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a LoadBeam property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [LoadBeam.ViewParameters()](primer-loadbeam-class.md#LoadBeam::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
load beam property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if LoadBeam property lb.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (lb.GetParameter(lb.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if LoadBeam property lb.example is a parameter by using the GetParameter method:<br>
```
if (lb.ViewParameters().GetParameter(lb.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this load beam (\*LOAD\_BEAM\_xxxx). **Note that a carriage return is not added**. See also [LoadBeam.KeywordCards()](primer-loadbeam-class.md#LoadBeam::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for load beam lb:<br>
```
var key = lb.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the load beam. **Note that a carriage return is not added**. See also [LoadBeam.Keyword()](primer-loadbeam-class.md#LoadBeam::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for load beam lb:<br>
```
var cards = lb.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last load beam in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last load beam in

| Returns
<br>LoadBeam object (or null if there are no load beams in the model).<br>
Return type
<br>LoadBeam |
| --- |

| Example
<br>To get the last load beam in model m:<br>
```
var lb = LoadBeam.Last(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next load beam in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>LoadBeam object (or null if there are no more load beams in the model).<br>
Return type
<br>LoadBeam |
| --- |

| Example
<br>To get the load beam in model m after load beam lb:<br>
```
var lb = lb.Next();
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a load beam. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only load beams from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only load beams that are flagged with *limit* can be selected. If omitted, or null, any load beams from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[LoadBeam](primer-loadbeam-class.md) object (or null if not picked)<br>
Return type
<br>LoadBeam |
| --- |

| Example
<br>To pick a load beam from model m giving the prompt 'Pick load beam from screen':<br>
```
var lb = LoadBeam.Pick('Pick load beam from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous load beam in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>LoadBeam object (or null if there are no more load beams in the model).<br>
Return type
<br>LoadBeam |
| --- |

| Example
<br>To get the load beam in model m before load beam lb:<br>
```
var lb = lb.Previous();
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select load beams using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting load beams

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only load beams from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only load beams that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any load beams can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of load beams selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select load beams from model m, flagging those selected with flag f, giving the prompt 'Select load beams':<br>
```
LoadBeam.Select(f, 'Select load beams', m);
```
<br><br>To select load beams, flagging those selected with flag f but limiting selection to load beams flagged with flag l, giving the prompt 'Select load beams':<br>
```
LoadBeam.Select(f, 'Select load beams', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the load beam. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the load beam

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for load beam lb:<br>
```
lb.SetFlag(f);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the load beam. The load beam will be sketched until you either call [LoadBeam.Unsketch()](primer-loadbeam-class.md#LoadBeam::Unsketch), [LoadBeam.UnsketchAll()](primer-loadbeam-class.md#LoadBeam::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the load beam is sketched. If omitted redraw is true. If you want to sketch several load beams and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch load beam lb:<br>
```
lb.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged load beams in the model. The load beams will be sketched until you either call [LoadBeam.Unsketch()](primer-loadbeam-class.md#LoadBeam::Unsketch), [LoadBeam.UnsketchFlagged()](primer-loadbeam-class.md#LoadBeam::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged load beams will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the load beams that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the load beams are sketched. If omitted redraw is true. If you want to sketch flagged load beams several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all load beams flagged with flag in model m:<br>
```
LoadBeam.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of load beams in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing load beams should be counted. If false or omitted
referenced but undefined load beams will also be included in the total.

| Returns
<br>number of load beams<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of load beams in model m:<br>
```
var total = LoadBeam.Total(m);
```
 |
| --- |

* * *

| Unblank()

Description<br>Unblanks the load beam |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank load beam lb:<br>
```
lb.Unblank();
```
 |
| --- |

* * *

| UnblankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the load beams in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all load beams will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the load beams in model m:<br>
```
LoadBeam.UnblankAll(m);
```
 |
| --- |

* * *

| UnblankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the flagged load beams in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the flagged load beams will be unblanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the load beams that you want to unblank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the load beams in model m flagged with f:<br>
```
LoadBeam.UnblankFlagged(m, f);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the load beams in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all load beams will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the load beams

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the load beams in model m:<br>
```
LoadBeam.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the load beam. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the load beam is unsketched. If omitted redraw is true. If you want to unsketch several load beams and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch load beam lb:<br>
```
lb.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all load beams. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all load beams will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the load beams are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all load beams in model m:<br>
```
LoadBeam.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged load beams in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all load beams will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the load beams that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the load beams are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all load beams flagged with flag in model m:<br>
```
LoadBeam.UnsketchAll(m, flag);
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
<br>[LoadBeam](primer-loadbeam-class.md) object.<br>
Return type
<br>LoadBeam |
| --- |

| Example
<br>To check if LoadBeam property lb.example is a parameter by using the [LoadBeam.GetParameter()](primer-loadbeam-class.md#LoadBeam::GetParameter) method:<br>
```
if (lb.ViewParameters().GetParameter(lb.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for load beam. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for load beam lb:<br>
```
lb.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this load beam. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for load beam lb:<br>
```
var xrefs = lb.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the load beam data in keyword format. Note that this contains the keyword header and the keyword cards. See also [LoadBeam.Keyword()](primer-loadbeam-class.md#LoadBeam::Keyword) and [LoadBeam.KeywordCards()](primer-loadbeam-class.md#LoadBeam::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for load beam lb in keyword format<br>
```
var s = lb.toString();
```
 |
| --- |

* * *