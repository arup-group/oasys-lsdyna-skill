# Spr2 class

The Spr2 class gives you access to constrained spr2 cards in PRIMER. [More...](primer-spr2-class.md#Spr2_details)

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

* [BlankAll](primer-spr2-class.md#Spr2::BlankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [BlankFlagged](primer-spr2-class.md#Spr2::BlankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [First](primer-spr2-class.md#Spr2::First)(Model*[[Model](primer-model-class.md)]*)
* [FlagAll](primer-spr2-class.md#Spr2::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-spr2-class.md#Spr2::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-spr2-class.md#Spr2::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-spr2-class.md#Spr2::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-spr2-class.md#Spr2::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-spr2-class.md#Spr2::Last)(Model*[[Model](primer-model-class.md)]*)
* [Pick](primer-spr2-class.md#Spr2::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [Select](primer-spr2-class.md#Spr2::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-spr2-class.md#Spr2::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-spr2-class.md#Spr2::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnblankAll](primer-spr2-class.md#Spr2::UnblankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnblankFlagged](primer-spr2-class.md#Spr2::UnblankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [UnflagAll](primer-spr2-class.md#Spr2::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-spr2-class.md#Spr2::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-spr2-class.md#Spr2::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-spr2-class.md#Spr2::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Blank](primer-spr2-class.md#Spr2::Blank)()
* [Blanked](primer-spr2-class.md#Spr2::Blanked)()
* [ClearFlag](primer-spr2-class.md#Spr2::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-spr2-class.md#Spr2::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-spr2-class.md#Spr2::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Error](primer-spr2-class.md#Spr2::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-spr2-class.md#Spr2::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-spr2-class.md#Spr2::GetComments)()
* [GetParameter](primer-spr2-class.md#Spr2::GetParameter)(prop*[string]*)
* [Keyword](primer-spr2-class.md#Spr2::Keyword)()
* [KeywordCards](primer-spr2-class.md#Spr2::KeywordCards)()
* [Next](primer-spr2-class.md#Spr2::Next)()
* [Previous](primer-spr2-class.md#Spr2::Previous)()
* [SetFlag](primer-spr2-class.md#Spr2::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Sketch](primer-spr2-class.md#Spr2::Sketch)(redraw (optional)*[boolean]*)
* [Unblank](primer-spr2-class.md#Spr2::Unblank)()
* [Unsketch](primer-spr2-class.md#Spr2::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-spr2-class.md#Spr2::ViewParameters)()
* [Warning](primer-spr2-class.md#Spr2::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-spr2-class.md#Spr2::Xrefs)()
* [toString](primer-spr2-class.md#Spr2::toString)()

## Spr2 constants

### Constants for Flags for Interpolation

| **Name** | **Description** |
| --- | --- |
| Spr2.INVERSE | Property INTP value EQ.2.0: Inverse distance weighting. |
| Spr2.LINEAR | Property INTP value EQ.0.0: Linear (default). |
| Spr2.UNIFORM | Property INTP value EQ.1.0: Uniform. |

## Spr2 properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| alpha1 | real | Dimensionless parameter scaling the effective displacement. |
| alpha2 | real | Dimensionless parameter scaling the effective displacement. |
| alpha3 | real | Dimensionless parameter scaling the effective displacement. ( GT.0: incremental update (default), LT.0: total update (recommended) ) |
| d | real | Rivet diameter. |
| dens | real | Rivet density (necessary for time step calculation). |
| dn | real | Failure displacement in normal direction. |
| dt | real | Failure displacement in tangential direction. |
| exists (read only) | logical | true if spr2 exists, false if referred to but not defined. |
| expn | real | Exponent value for load function in normal direction. |
| expt | real | Exponent value for load function in tangential direction. |
| fn | real | Rivet strength in tension (pull-out) or (if -ve) label for UPID |
| ft | real | Rivet strength in pure shear. |
| include | integer | The [Include](primer-include-class.md) file number that the spr2 is in. |
| intp | real | Flag for interpolation. Values can be [Spr2.LINEAR](primer-spr2-class.md#Spr2.Linear), [Spr2.UNIFORM](primer-spr2-class.md#Spr2.Uniform) or [Spr2.INVERSE](primer-spr2-class.md#Spr2.Inverse). |
| lpid | integer | Lower Sheet [Part](primer-part-class.md) ID. |
| model (read only) | integer | The [Model](primer-model-class.md) number that the spr2 is in. |
| nsid | integer | [Node Set](primer-set-class.md) ID of rivet location nodes. |
| pidvb | integer | Part ID for visualization beams representing SPR2 in postprocessing. |
| thick | real | Total thickness of lead and constrained sheet. |
| upid | integer | Upper Sheet [Part](primer-part-class.md) ID. |
| xin | real | Fraction of failure displacement at maximum normal force. |
| xit | real | Fraction of failure displacement at maximum tangential force. |
| xpid1 | integer | Extra [Part](primer-part-class.md) ID 1 for multi-sheet connection. |
| xpid2 | integer | Extra [Part](primer-part-class.md) ID 2 for multi-sheet connection. |
| xpid3 | integer | Extra [Part](primer-part-class.md) ID 3 for multi-sheet connection. |
| xpid4 | integer | Extra [Part](primer-part-class.md) ID 4 for multi-sheet connection. |

| Detailed Description<br>The Spr2 class allows you to create, modify, edit and manipulate constrained spr2 cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new Spr2(Model*[[Model](primer-model-class.md)]*, upid*[integer]*, lpid*[integer]*, nsid*[integer]*)

Description<br>Create a new [Spr2](primer-spr2-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that constrained spr2 will be created in

* upid (integer)
 
Upper Sheet [Part](primer-part-class.md) ID.

* lpid (integer)
 
Lower Sheet [Part](primer-part-class.md) ID

* nsid (integer)
 
[Node Set](primer-set-class.md) ID of rivet location nodes.

| Returns
<br>[Spr2](primer-spr2-class.md) object<br>
Return type
<br>Spr2 |
| --- |

| Example
<br>To create a new constrained spr2 in model m with lead sheet 100, constrained sheet 200 and rivet node set 100<br>
```
var s = new Spr2(m, 100, 200, 100);
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a spr2. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the spr2

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the spr2 s:<br>
```
s.AssociateComment(c);
```
 |
| --- |

* * *

| Blank()

Description<br>Blanks the spr2 |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To blank spr2 s:<br>
```
s.Blank();
```
 |
| --- |

* * *

| BlankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the spr2s in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all spr2s will be blanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the spr2s in model m:<br>
```
Spr2.BlankAll(m);
```
 |
| --- |

* * *

| BlankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the flagged spr2s in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged spr2s will be blanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the spr2s that you want to blank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the spr2s in model m flagged with f:<br>
```
Spr2.BlankFlagged(m, f);
```
 |
| --- |

* * *

| Blanked()

Description<br>Checks if the spr2 is blanked or not. |
| --- |

#### Arguments

No arguments

| Returns
<br>true if blanked, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if spr2 s is blanked:<br>
```
if (s.Blanked() ) do_something...
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the spr2. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the spr2

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for spr2 s:<br>
```
s.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the spr2. The target include of the copied spr2 can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>Spr2 object<br>
Return type
<br>Spr2 |
| --- |

| Example
<br>To copy spr2 s into spr2 z:<br>
```
var z = s.Copy();
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a spr2. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the spr2

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the spr2 s:<br>
```
s.DetachComment(c);
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for spr2. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for spr2 s:<br>
```
s.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first spr2 in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first spr2 in

| Returns
<br>Spr2 object (or null if there are no spr2s in the model).<br>
Return type
<br>Spr2 |
| --- |

| Example
<br>To get the first spr2 in model m:<br>
```
var s = Spr2.First(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the spr2s in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all spr2s will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the spr2s

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the spr2s with flag f in model m:<br>
```
Spr2.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the spr2 is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the spr2

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if spr2 s has flag f set on it:<br>
```
if (s.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each spr2 in the model.<br> **Note that ForEach has been designed to make looping over spr2s as fast as possible and so has some limitations. Firstly, a single temporary Spr2 object is created and on each function call it is updated with the current spr2 data. This means that you should not try to store the Spr2 object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new spr2s inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all spr2s are in

* func (function)
 
Function to call for each spr2

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the spr2s in model m:<br>
```
Spr2.ForEach(m, test);
function test(s)
{
// s is Spr2 object
}
```
<br><br>To call function test for all of the spr2s in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
Spr2.ForEach(m, test, data);
function test(s, extra)
{
// s is Spr2 object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Spr2 objects or properties for all of the spr2s in a model in PRIMER. If the optional property argument is not given then an array of Spr2 objects is returned. If the property argument is given, that property value for each spr2 is returned in the array instead of a Spr2 object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get spr2s from

* property (optional) (string)
 
Name for property to get for all spr2s in the model

| Returns
<br>Array of Spr2 objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Spr2 objects for all of the spr2s in model m:<br>
```
var a = Spr2.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each spr2 in model m:<br>
```
var a = Spr2.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a spr2. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the spr2 s:<br>
```
var comm_array = s.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Spr2 objects for all of the flagged spr2s in a model in PRIMER If the optional property argument is not given then an array of Spr2 objects is returned. If the property argument is given, then that property value for each spr2 is returned in the array instead of a Spr2 object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get spr2s from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the spr2s that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged spr2s in the model

| Returns
<br>Array of Spr2 objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Spr2 objects for all of the spr2s in model m flagged with f:<br>
```
var s = Spr2.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the spr2s in model m flagged with f:<br>
```
var a = Spr2.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the Spr2 object for a spr2 ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the spr2 in

* number (integer)
 
number of the spr2 you want the Spr2 object for

| Returns
<br>Spr2 object (or null if spr2 does not exist).<br>
Return type
<br>Spr2 |
| --- |

| Example
<br>To get the Spr2 object for spr2 100 in model m<br>
```
var s = Spr2.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a Spr2 property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [Spr2.ViewParameters()](primer-spr2-class.md#Spr2::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
spr2 property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if Spr2 property s.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (s.GetParameter(s.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if Spr2 property s.example is a parameter by using the GetParameter method:<br>
```
if (s.ViewParameters().GetParameter(s.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this spr2 (\*CONSTRAINED\_SPR2). **Note that a carriage return is not added**. See also [Spr2.KeywordCards()](primer-spr2-class.md#Spr2::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for spr2 s:<br>
```
var key = s.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the spr2. **Note that a carriage return is not added**. See also [Spr2.Keyword()](primer-spr2-class.md#Spr2::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for spr2 s:<br>
```
var cards = s.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last spr2 in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last spr2 in

| Returns
<br>Spr2 object (or null if there are no spr2s in the model).<br>
Return type
<br>Spr2 |
| --- |

| Example
<br>To get the last spr2 in model m:<br>
```
var s = Spr2.Last(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next spr2 in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Spr2 object (or null if there are no more spr2s in the model).<br>
Return type
<br>Spr2 |
| --- |

| Example
<br>To get the spr2 in model m after spr2 s:<br>
```
var s = s.Next();
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a spr2. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only spr2s from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only spr2s that are flagged with *limit* can be selected. If omitted, or null, any spr2s from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[Spr2](primer-spr2-class.md) object (or null if not picked)<br>
Return type
<br>Spr2 |
| --- |

| Example
<br>To pick a spr2 from model m giving the prompt 'Pick spr2 from screen':<br>
```
var s = Spr2.Pick('Pick spr2 from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous spr2 in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Spr2 object (or null if there are no more spr2s in the model).<br>
Return type
<br>Spr2 |
| --- |

| Example
<br>To get the spr2 in model m before spr2 s:<br>
```
var s = s.Previous();
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select spr2s using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting spr2s

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only spr2s from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only spr2s that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any spr2s can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of spr2s selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select spr2s from model m, flagging those selected with flag f, giving the prompt 'Select spr2s':<br>
```
Spr2.Select(f, 'Select spr2s', m);
```
<br><br>To select spr2s, flagging those selected with flag f but limiting selection to spr2s flagged with flag l, giving the prompt 'Select spr2s':<br>
```
Spr2.Select(f, 'Select spr2s', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the spr2. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the spr2

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for spr2 s:<br>
```
s.SetFlag(f);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the spr2. The spr2 will be sketched until you either call [Spr2.Unsketch()](primer-spr2-class.md#Spr2::Unsketch), [Spr2.UnsketchAll()](primer-spr2-class.md#Spr2::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the spr2 is sketched. If omitted redraw is true. If you want to sketch several spr2s and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch spr2 s:<br>
```
s.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged spr2s in the model. The spr2s will be sketched until you either call [Spr2.Unsketch()](primer-spr2-class.md#Spr2::Unsketch), [Spr2.UnsketchFlagged()](primer-spr2-class.md#Spr2::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged spr2s will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the spr2s that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the spr2s are sketched. If omitted redraw is true. If you want to sketch flagged spr2s several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all spr2s flagged with flag in model m:<br>
```
Spr2.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of spr2s in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing spr2s should be counted. If false or omitted
referenced but undefined spr2s will also be included in the total.

| Returns
<br>number of spr2s<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of spr2s in model m:<br>
```
var total = Spr2.Total(m);
```
 |
| --- |

* * *

| Unblank()

Description<br>Unblanks the spr2 |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank spr2 s:<br>
```
s.Unblank();
```
 |
| --- |

* * *

| UnblankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the spr2s in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all spr2s will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the spr2s in model m:<br>
```
Spr2.UnblankAll(m);
```
 |
| --- |

* * *

| UnblankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the flagged spr2s in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the flagged spr2s will be unblanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the spr2s that you want to unblank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the spr2s in model m flagged with f:<br>
```
Spr2.UnblankFlagged(m, f);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the spr2s in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all spr2s will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the spr2s

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the spr2s in model m:<br>
```
Spr2.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the spr2. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the spr2 is unsketched. If omitted redraw is true. If you want to unsketch several spr2s and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch spr2 s:<br>
```
s.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all spr2s. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all spr2s will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the spr2s are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all spr2s in model m:<br>
```
Spr2.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged spr2s in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all spr2s will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the spr2s that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the spr2s are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all spr2s flagged with flag in model m:<br>
```
Spr2.UnsketchAll(m, flag);
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
<br>[Spr2](primer-spr2-class.md) object.<br>
Return type
<br>Spr2 |
| --- |

| Example
<br>To check if Spr2 property s.example is a parameter by using the [Spr2.GetParameter()](primer-spr2-class.md#Spr2::GetParameter) method:<br>
```
if (s.ViewParameters().GetParameter(s.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for spr2. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for spr2 s:<br>
```
s.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this spr2. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for spr2 s:<br>
```
var xrefs = s.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the spr2 data in keyword format. Note that this contains the keyword header and the keyword cards. See also [Spr2.Keyword()](primer-spr2-class.md#Spr2::Keyword) and [Spr2.KeywordCards()](primer-spr2-class.md#Spr2::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for spr2 s in keyword format<br>
```
var str = s.toString();
```
 |
| --- |

* * *