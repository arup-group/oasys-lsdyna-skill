# DampingFrequencyRange class

The DampingFrequencyRange class gives you access to define damping frequency range cards in PRIMER. [More...](primer-dampingfrequencyrange-class.md#DampingFrequencyRange_details)

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

* [BlankAll](primer-dampingfrequencyrange-class.md#DampingFrequencyRange::BlankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [BlankFlagged](primer-dampingfrequencyrange-class.md#DampingFrequencyRange::BlankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [First](primer-dampingfrequencyrange-class.md#DampingFrequencyRange::First)(Model*[[Model](primer-model-class.md)]*)
* [FlagAll](primer-dampingfrequencyrange-class.md#DampingFrequencyRange::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-dampingfrequencyrange-class.md#DampingFrequencyRange::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-dampingfrequencyrange-class.md#DampingFrequencyRange::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-dampingfrequencyrange-class.md#DampingFrequencyRange::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-dampingfrequencyrange-class.md#DampingFrequencyRange::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-dampingfrequencyrange-class.md#DampingFrequencyRange::Last)(Model*[[Model](primer-model-class.md)]*)
* [Pick](primer-dampingfrequencyrange-class.md#DampingFrequencyRange::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [Select](primer-dampingfrequencyrange-class.md#DampingFrequencyRange::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-dampingfrequencyrange-class.md#DampingFrequencyRange::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-dampingfrequencyrange-class.md#DampingFrequencyRange::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnblankAll](primer-dampingfrequencyrange-class.md#DampingFrequencyRange::UnblankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnblankFlagged](primer-dampingfrequencyrange-class.md#DampingFrequencyRange::UnblankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [UnflagAll](primer-dampingfrequencyrange-class.md#DampingFrequencyRange::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-dampingfrequencyrange-class.md#DampingFrequencyRange::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-dampingfrequencyrange-class.md#DampingFrequencyRange::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-dampingfrequencyrange-class.md#DampingFrequencyRange::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Blank](primer-dampingfrequencyrange-class.md#DampingFrequencyRange::Blank)()
* [Blanked](primer-dampingfrequencyrange-class.md#DampingFrequencyRange::Blanked)()
* [ClearFlag](primer-dampingfrequencyrange-class.md#DampingFrequencyRange::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-dampingfrequencyrange-class.md#DampingFrequencyRange::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-dampingfrequencyrange-class.md#DampingFrequencyRange::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Error](primer-dampingfrequencyrange-class.md#DampingFrequencyRange::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-dampingfrequencyrange-class.md#DampingFrequencyRange::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-dampingfrequencyrange-class.md#DampingFrequencyRange::GetComments)()
* [GetParameter](primer-dampingfrequencyrange-class.md#DampingFrequencyRange::GetParameter)(prop*[string]*)
* [Keyword](primer-dampingfrequencyrange-class.md#DampingFrequencyRange::Keyword)()
* [KeywordCards](primer-dampingfrequencyrange-class.md#DampingFrequencyRange::KeywordCards)()
* [Next](primer-dampingfrequencyrange-class.md#DampingFrequencyRange::Next)()
* [Previous](primer-dampingfrequencyrange-class.md#DampingFrequencyRange::Previous)()
* [SetFlag](primer-dampingfrequencyrange-class.md#DampingFrequencyRange::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Sketch](primer-dampingfrequencyrange-class.md#DampingFrequencyRange::Sketch)(redraw (optional)*[boolean]*)
* [Unblank](primer-dampingfrequencyrange-class.md#DampingFrequencyRange::Unblank)()
* [Unsketch](primer-dampingfrequencyrange-class.md#DampingFrequencyRange::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-dampingfrequencyrange-class.md#DampingFrequencyRange::ViewParameters)()
* [Warning](primer-dampingfrequencyrange-class.md#DampingFrequencyRange::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-dampingfrequencyrange-class.md#DampingFrequencyRange::Xrefs)()
* [toString](primer-dampingfrequencyrange-class.md#DampingFrequencyRange::toString)()

## DampingFrequencyRange constants

| **Name** | **Description** |
| --- | --- |
| DampingFrequencyRange.DEFORM | DEFORM is \*DAMPING\_FREQUENCY\_RANGE\_DEFORM. |
| DampingFrequencyRange.NO\_OPT | NO\_OPT is \*DAMPING\_FREQUENCY\_RANGE. |

## DampingFrequencyRange properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| cdamp | real | Fraction of critical damping |
| cdampv | real | Fraction of critical damping applied to pressure/volume response of solid elements |
| exists (read only) | logical | true if damping frequency range exists, false if referred to but not defined. |
| fhigh | real | Highest frequency in range of interest. |
| flow | real | Lowest frequency in range of interest |
| icard2 | integer | Flag for reading the additional card |
| iflg | integer | Method used for internal calculation of damping constants |
| include | integer | The [Include](primer-include-class.md) file number that the damping frequency range is in. |
| ipwp | integer | Flag to determine whether damping is applied to excess pore pressure |
| model (read only) | integer | The [Model](primer-model-class.md) number that the damping frequency range is in. |
| option | constant | The DampingFrequencyRange option. Can be:<ul> <li><a href="primer-dampingfrequencyrange-class.md#DampingFrequencyRange.NO_OPT">DampingFrequencyRange.NO_OPT</a> or 0</li> </ul><ul> <li><a href="primer-dampingfrequencyrange-class.md#DampingFrequencyRange.DEFORM">DampingFrequencyRange.DEFORM</a></li> </ul> |
| pidref | integer | [Part](primer-part-class.md) ID. |
| psid | integer | [Set](primer-set-class.md) Part set ID. |

| Detailed Description<br>The DampingFrequencyRange class allows you to create, modify, edit and manipulate damping\_frequency\_range cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new DampingFrequencyRange(Model*[[Model](primer-model-class.md)]*, option (optional)*[constant]*, cdamp (optional)*[real]*, flow (optional)*[real]*, fhigh (optional)*[real]*, psid (optional)*[integer]*, pidref (optional)*[integer]*, iflg (optional)*[integer]*, icard2 (optional)*[integer]*, cdampv (optional)*[real]*, ipwp (optional)*[integer]*)

Description<br>Create a new [DampingFrequencyRange](primer-dampingfrequencyrange-class.md) object for \*DAMPING\_FREQUENCY\_RANGE. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that damping frequency range will be created in

* option (optional) (constant)
 
Damping frequency range type. Can be [DampingFrequencyRange.NO_OPT](primer-dampingfrequencyrange-class.md#DampingFrequencyRange.NO_OPT) or [DampingFrequencyRange.DEFORM](primer-dampingfrequencyrange-class.md#DampingFrequencyRange.DEFORM).

* cdamp (optional) (real)
 
Fraction of critical damping

* flow (optional) (real)
 
Lowest frequency in range of interest

* fhigh (optional) (real)
 
Highest frequency in range of interest.

* psid (optional) (integer)
 
[Set](primer-set-class.md) Part set ID.

* pidref (optional) (integer)
 
[Part](primer-part-class.md) ID.

* iflg (optional) (integer)
 
Method used for internal calculation of damping constants

* icard2 (optional) (integer)
 
Flag for reading the additional card

* cdampv (optional) (real)
 
Fraction of critical damping applied to pressure/volume response of solid elements

* ipwp (optional) (integer)
 
Flag to determine whether damping is applied to excess pore pressure

| Returns
<br>[DampingFrequencyRange](primer-dampingfrequencyrange-class.md) object<br>
Return type
<br>DampingFrequencyRange |
| --- |

| Example
<br>To create a new damping frequency range (of type DEFORM) in model m with cdamp, flow, fhigh, psid, iflg set to 1.5, 2.5, 3.5, 4, 1 respectively:<br>
```
var fr = new DampingFrequencyRange(m, DampingFrequencyRange.DEFORM, 1.5, 2.5, 3.5, 4, 1);
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a damping frequency range. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the damping frequency range

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the damping frequency range fr:<br>
```
fr.AssociateComment(c);
```
 |
| --- |

* * *

| Blank()

Description<br>Blanks the damping frequency range |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To blank damping frequency range fr:<br>
```
fr.Blank();
```
 |
| --- |

* * *

| BlankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the damping frequency ranges in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all damping frequency ranges will be blanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the damping frequency ranges in model m:<br>
```
DampingFrequencyRange.BlankAll(m);
```
 |
| --- |

* * *

| BlankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the flagged damping frequency ranges in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged damping frequency ranges will be blanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the damping frequency ranges that you want to blank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the damping frequency ranges in model m flagged with f:<br>
```
DampingFrequencyRange.BlankFlagged(m, f);
```
 |
| --- |

* * *

| Blanked()

Description<br>Checks if the damping frequency range is blanked or not. |
| --- |

#### Arguments

No arguments

| Returns
<br>true if blanked, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if damping frequency range fr is blanked:<br>
```
if (fr.Blanked() ) do_something...
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the damping frequency range. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the damping frequency range

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for damping frequency range fr:<br>
```
fr.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the damping frequency range. The target include of the copied damping frequency range can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>DampingFrequencyRange object<br>
Return type
<br>DampingFrequencyRange |
| --- |

| Example
<br>To copy damping frequency range fr into damping frequency range z:<br>
```
var z = fr.Copy();
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a damping frequency range. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the damping frequency range

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the damping frequency range fr:<br>
```
fr.DetachComment(c);
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for damping frequency range. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for damping frequency range fr:<br>
```
fr.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first damping frequency range in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first damping frequency range in

| Returns
<br>DampingFrequencyRange object (or null if there are no damping frequency ranges in the model).<br>
Return type
<br>DampingFrequencyRange |
| --- |

| Example
<br>To get the first damping frequency range in model m:<br>
```
var fr = DampingFrequencyRange.First(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the damping frequency ranges in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all damping frequency ranges will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the damping frequency ranges

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the damping frequency ranges with flag f in model m:<br>
```
DampingFrequencyRange.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the damping frequency range is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the damping frequency range

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if damping frequency range fr has flag f set on it:<br>
```
if (fr.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each damping frequency range in the model.<br> **Note that ForEach has been designed to make looping over damping frequency ranges as fast as possible and so has some limitations. Firstly, a single temporary DampingFrequencyRange object is created and on each function call it is updated with the current damping frequency range data. This means that you should not try to store the DampingFrequencyRange object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new damping frequency ranges inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all damping frequency ranges are in

* func (function)
 
Function to call for each damping frequency range

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the damping frequency ranges in model m:<br>
```
DampingFrequencyRange.ForEach(m, test);
function test(fr)
{
// fr is DampingFrequencyRange object
}
```
<br><br>To call function test for all of the damping frequency ranges in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
DampingFrequencyRange.ForEach(m, test, data);
function test(fr, extra)
{
// fr is DampingFrequencyRange object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of DampingFrequencyRange objects or properties for all of the damping frequency ranges in a model in PRIMER. If the optional property argument is not given then an array of DampingFrequencyRange objects is returned. If the property argument is given, that property value for each damping frequency range is returned in the array instead of a DampingFrequencyRange object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get damping frequency ranges from

* property (optional) (string)
 
Name for property to get for all damping frequency ranges in the model

| Returns
<br>Array of DampingFrequencyRange objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of DampingFrequencyRange objects for all of the damping frequency ranges in model m:<br>
```
var a = DampingFrequencyRange.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each damping frequency range in model m:<br>
```
var a = DampingFrequencyRange.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a damping frequency range. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the damping frequency range fr:<br>
```
var comm_array = fr.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of DampingFrequencyRange objects for all of the flagged damping frequency ranges in a model in PRIMER If the optional property argument is not given then an array of DampingFrequencyRange objects is returned. If the property argument is given, then that property value for each damping frequency range is returned in the array instead of a DampingFrequencyRange object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get damping frequency ranges from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the damping frequency ranges that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged damping frequency ranges in the model

| Returns
<br>Array of DampingFrequencyRange objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of DampingFrequencyRange objects for all of the damping frequency ranges in model m flagged with f:<br>
```
var fr = DampingFrequencyRange.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the damping frequency ranges in model m flagged with f:<br>
```
var a = DampingFrequencyRange.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the DampingFrequencyRange object for a damping frequency range ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the damping frequency range in

* number (integer)
 
number of the damping frequency range you want the DampingFrequencyRange object for

| Returns
<br>DampingFrequencyRange object (or null if damping frequency range does not exist).<br>
Return type
<br>DampingFrequencyRange |
| --- |

| Example
<br>To get the DampingFrequencyRange object for damping frequency range 100 in model m<br>
```
var fr = DampingFrequencyRange.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a DampingFrequencyRange property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [DampingFrequencyRange.ViewParameters()](primer-dampingfrequencyrange-class.md#DampingFrequencyRange::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
damping frequency range property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if DampingFrequencyRange property fr.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (fr.GetParameter(fr.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if DampingFrequencyRange property fr.example is a parameter by using the GetParameter method:<br>
```
if (fr.ViewParameters().GetParameter(fr.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this damping frequency range (\*DAMPING\_FREQUENCY\_RANGE). **Note that a carriage return is not added**. See also [DampingFrequencyRange.KeywordCards()](primer-dampingfrequencyrange-class.md#DampingFrequencyRange::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for damping frequency range m:<br>
```
var key = fr.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the damping frequency range. **Note that a carriage return is not added**. See also [DampingFrequencyRange.Keyword()](primer-dampingfrequencyrange-class.md#DampingFrequencyRange::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for damping frequency range fr:<br>
```
var cards = fr.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last damping frequency range in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last damping frequency range in

| Returns
<br>DampingFrequencyRange object (or null if there are no damping frequency ranges in the model).<br>
Return type
<br>DampingFrequencyRange |
| --- |

| Example
<br>To get the last damping frequency range in model m:<br>
```
var fr = DampingFrequencyRange.Last(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next damping frequency range in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>DampingFrequencyRange object (or null if there are no more damping frequency ranges in the model).<br>
Return type
<br>DampingFrequencyRange |
| --- |

| Example
<br>To get the damping frequency range in model m after damping frequency range fr:<br>
```
var fr = fr.Next();
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a damping frequency range. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only damping frequency ranges from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only damping frequency ranges that are flagged with *limit* can be selected. If omitted, or null, any damping frequency ranges from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[DampingFrequencyRange](primer-dampingfrequencyrange-class.md) object (or null if not picked)<br>
Return type
<br>DampingFrequencyRange |
| --- |

| Example
<br>To pick a damping frequency range from model m giving the prompt 'Pick damping frequency range from screen':<br>
```
var fr = DampingFrequencyRange.Pick('Pick damping frequency range from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous damping frequency range in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>DampingFrequencyRange object (or null if there are no more damping frequency ranges in the model).<br>
Return type
<br>DampingFrequencyRange |
| --- |

| Example
<br>To get the damping frequency range in model m before damping frequency range fr:<br>
```
var fr = fr.Previous();
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select damping frequency ranges using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting damping frequency ranges

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only damping frequency ranges from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only damping frequency ranges that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any damping frequency ranges can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of damping frequency ranges selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select damping frequency ranges from model m, flagging those selected with flag f, giving the prompt 'Select damping frequency ranges':<br>
```
DampingFrequencyRange.Select(f, 'Select damping frequency ranges', m);
```
<br><br>To select damping frequency ranges, flagging those selected with flag f but limiting selection to damping frequency ranges flagged with flag l, giving the prompt 'Select damping frequency ranges':<br>
```
DampingFrequencyRange.Select(f, 'Select damping frequency ranges', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the damping frequency range. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the damping frequency range

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for damping frequency range fr:<br>
```
fr.SetFlag(f);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the damping frequency range. The damping frequency range will be sketched until you either call [DampingFrequencyRange.Unsketch()](primer-dampingfrequencyrange-class.md#DampingFrequencyRange::Unsketch), [DampingFrequencyRange.UnsketchAll()](primer-dampingfrequencyrange-class.md#DampingFrequencyRange::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the damping frequency range is sketched. If omitted redraw is true. If you want to sketch several damping frequency ranges and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch damping frequency range fr:<br>
```
fr.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged damping frequency ranges in the model. The damping frequency ranges will be sketched until you either call [DampingFrequencyRange.Unsketch()](primer-dampingfrequencyrange-class.md#DampingFrequencyRange::Unsketch), [DampingFrequencyRange.UnsketchFlagged()](primer-dampingfrequencyrange-class.md#DampingFrequencyRange::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged damping frequency ranges will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the damping frequency ranges that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the damping frequency ranges are sketched. If omitted redraw is true. If you want to sketch flagged damping frequency ranges several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all damping frequency ranges flagged with flag in model m:<br>
```
DampingFrequencyRange.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of damping frequency ranges in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing damping frequency ranges should be counted. If false or omitted
referenced but undefined damping frequency ranges will also be included in the total.

| Returns
<br>number of damping frequency ranges<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of damping frequency ranges in model m:<br>
```
var total = DampingFrequencyRange.Total(m);
```
 |
| --- |

* * *

| Unblank()

Description<br>Unblanks the damping frequency range |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank damping frequency range fr:<br>
```
fr.Unblank();
```
 |
| --- |

* * *

| UnblankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the damping frequency ranges in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all damping frequency ranges will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the damping frequency ranges in model m:<br>
```
DampingFrequencyRange.UnblankAll(m);
```
 |
| --- |

* * *

| UnblankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the flagged damping frequency ranges in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the flagged damping frequency ranges will be unblanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the damping frequency ranges that you want to unblank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the damping frequency ranges in model m flagged with f:<br>
```
DampingFrequencyRange.UnblankFlagged(m, f);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the damping frequency ranges in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all damping frequency ranges will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the damping frequency ranges

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the damping frequency ranges in model m:<br>
```
DampingFrequencyRange.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the damping frequency range. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the damping frequency range is unsketched. If omitted redraw is true. If you want to unsketch several damping frequency ranges and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch damping frequency range fr:<br>
```
fr.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all damping frequency ranges. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all damping frequency ranges will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the damping frequency ranges are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all damping frequency ranges in model m:<br>
```
DampingFrequencyRange.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged damping frequency ranges in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all damping frequency ranges will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the damping frequency ranges that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the damping frequency ranges are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all damping frequency ranges flagged with flag in model m:<br>
```
DampingFrequencyRange.UnsketchAll(m, flag);
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
<br>[DampingFrequencyRange](primer-dampingfrequencyrange-class.md) object.<br>
Return type
<br>DampingFrequencyRange |
| --- |

| Example
<br>To check if DampingFrequencyRange property fr.example is a parameter by using the [DampingFrequencyRange.GetParameter()](primer-dampingfrequencyrange-class.md#DampingFrequencyRange::GetParameter) method:<br>
```
if (fr.ViewParameters().GetParameter(fr.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for damping frequency range. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for damping frequency range fr:<br>
```
fr.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this damping frequency range. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for damping frequency range fr:<br>
```
var xrefs = fr.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the damping frequency range data in keyword format. Note that this contains the keyword header and the keyword cards. See also [DampingFrequencyRange.Keyword()](primer-dampingfrequencyrange-class.md#DampingFrequencyRange::Keyword) and [DampingFrequencyRange.KeywordCards()](primer-dampingfrequencyrange-class.md#DampingFrequencyRange::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for damping frequency range fr in keyword format<br>
```
var s = fr.toString();
```
 |
| --- |

* * *