# DampingPartMass class

The DampingPartMass class gives you access to define damping part mass cards in PRIMER. [More...](primer-dampingpartmass-class.md#DampingPartMass_details)

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

* [BlankAll](primer-dampingpartmass-class.md#DampingPartMass::BlankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [BlankFlagged](primer-dampingpartmass-class.md#DampingPartMass::BlankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [First](primer-dampingpartmass-class.md#DampingPartMass::First)(Model*[[Model](primer-model-class.md)]*)
* [FlagAll](primer-dampingpartmass-class.md#DampingPartMass::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-dampingpartmass-class.md#DampingPartMass::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-dampingpartmass-class.md#DampingPartMass::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-dampingpartmass-class.md#DampingPartMass::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-dampingpartmass-class.md#DampingPartMass::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-dampingpartmass-class.md#DampingPartMass::Last)(Model*[[Model](primer-model-class.md)]*)
* [Pick](primer-dampingpartmass-class.md#DampingPartMass::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [Select](primer-dampingpartmass-class.md#DampingPartMass::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-dampingpartmass-class.md#DampingPartMass::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-dampingpartmass-class.md#DampingPartMass::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnblankAll](primer-dampingpartmass-class.md#DampingPartMass::UnblankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnblankFlagged](primer-dampingpartmass-class.md#DampingPartMass::UnblankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [UnflagAll](primer-dampingpartmass-class.md#DampingPartMass::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-dampingpartmass-class.md#DampingPartMass::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-dampingpartmass-class.md#DampingPartMass::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-dampingpartmass-class.md#DampingPartMass::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Blank](primer-dampingpartmass-class.md#DampingPartMass::Blank)()
* [Blanked](primer-dampingpartmass-class.md#DampingPartMass::Blanked)()
* [ClearFlag](primer-dampingpartmass-class.md#DampingPartMass::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-dampingpartmass-class.md#DampingPartMass::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-dampingpartmass-class.md#DampingPartMass::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Error](primer-dampingpartmass-class.md#DampingPartMass::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-dampingpartmass-class.md#DampingPartMass::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-dampingpartmass-class.md#DampingPartMass::GetComments)()
* [GetParameter](primer-dampingpartmass-class.md#DampingPartMass::GetParameter)(prop*[string]*)
* [Keyword](primer-dampingpartmass-class.md#DampingPartMass::Keyword)()
* [KeywordCards](primer-dampingpartmass-class.md#DampingPartMass::KeywordCards)()
* [Next](primer-dampingpartmass-class.md#DampingPartMass::Next)()
* [Previous](primer-dampingpartmass-class.md#DampingPartMass::Previous)()
* [SetFlag](primer-dampingpartmass-class.md#DampingPartMass::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Sketch](primer-dampingpartmass-class.md#DampingPartMass::Sketch)(redraw (optional)*[boolean]*)
* [Unblank](primer-dampingpartmass-class.md#DampingPartMass::Unblank)()
* [Unsketch](primer-dampingpartmass-class.md#DampingPartMass::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-dampingpartmass-class.md#DampingPartMass::ViewParameters)()
* [Warning](primer-dampingpartmass-class.md#DampingPartMass::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-dampingpartmass-class.md#DampingPartMass::Xrefs)()
* [toString](primer-dampingpartmass-class.md#DampingPartMass::toString)()

## DampingPartMass constants

| **Name** | **Description** |
| --- | --- |
| DampingPartMass.PART | PART is \*DAMPING\_PART\_MASS. |
| DampingPartMass.SET | SET is \*DAMPING\_PART\_MASS\_SET. |

## DampingPartMass properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists (read only) | logical | true if damping part mass exists, false if referred to but not defined. |
| flag | integer | Flag for scale factors |
| id | integer | Part/part set id |
| include | integer | The [Include](primer-include-class.md) file number that the damping part mass is in. |
| lcid | integer | LC: Damping vs time |
| model (read only) | integer | The [Model](primer-model-class.md) number that the damping part mass is in. |
| sf | real | Scale factor on loadcurve |
| srx | real | Rotational x scale factor |
| sry | real | Rotational y scale factor |
| srz | real | Rotational z scale factor |
| stx | real | Translational x scale factor |
| sty | real | Translational y scale factor |
| stz | real | Translational z scale factor |
| type | constant | The DampingPartMass type. Can be:<ul> <li><a href="primer-dampingpartmass-class.md#DampingPartMass.PART">DampingPartMass.PART</a> or</li> <li><a href="primer-dampingpartmass-class.md#DampingPartMass.SET">DampingPartMass.SET</a></li> </ul> |

| Detailed Description<br>The DampingPartMass class allows you to create, modify, edit and manipulate damping\_part\_mass cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new DampingPartMass(Model*[[Model](primer-model-class.md)]*, type*[constant]*, id*[integer]*, lcid*[integer]*, sf (optional)*[real]*, flag (optional)*[integer]*, stx (optional)*[real]*, sty (optional)*[real]*, stz (optional)*[real]*, srx (optional)*[real]*, sry (optional)*[real]*, srz (optional)*[real]*)

Description<br>Create a new [DampingPartMass](primer-dampingpartmass-class.md) object for \*DAMPING\_PART\_MASS. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that damping part mass will be created in

* type (constant)
 
Damping part mass type. Can be [DampingPartMass.PART](primer-dampingpartmass-class.md#DampingPartMass.PART) or [DampingPartMass.SET](primer-dampingpartmass-class.md#DampingPartMass.SET).

* id (integer)
 
Part/part set id

* lcid (integer)
 
LC: Damping vs time

* sf (optional) (real)
 
Scale factor on loadcurve

* flag (optional) (integer)
 
Flag for scale factors

* stx (optional) (real)
 
Translational x scale factor

* sty (optional) (real)
 
Translational y scale factor

* stz (optional) (real)
 
Translational z scale factor

* srx (optional) (real)
 
Rotational x scale factor

* sry (optional) (real)
 
Rotational y scale factor

* srz (optional) (real)
 
Rotational z scale factor

| Returns
<br>[DampingPartMass](primer-dampingpartmass-class.md) object<br>
Return type
<br>DampingPartMass |
| --- |

| Example
<br>To create a new damping part mass (of type PART) in model m with id, lcid, sf, flag set to 11, 12, 3.5, 1 respectively:<br>
```
var pm = new DampingPartMass(m, DampingPartMass.PART, 11, 12, 3.5, 1);
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a damping part mass. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the damping part mass

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the damping part mass pm:<br>
```
pm.AssociateComment(c);
```
 |
| --- |

* * *

| Blank()

Description<br>Blanks the damping part mass |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To blank damping part mass pm:<br>
```
pm.Blank();
```
 |
| --- |

* * *

| BlankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the damping part masss in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all damping part masss will be blanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the damping part masss in model m:<br>
```
DampingPartMass.BlankAll(m);
```
 |
| --- |

* * *

| BlankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the flagged damping part masss in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged damping part masss will be blanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the damping part masss that you want to blank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the damping part masss in model m flagged with f:<br>
```
DampingPartMass.BlankFlagged(m, f);
```
 |
| --- |

* * *

| Blanked()

Description<br>Checks if the damping part mass is blanked or not. |
| --- |

#### Arguments

No arguments

| Returns
<br>true if blanked, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if damping part mass pm is blanked:<br>
```
if (pm.Blanked() ) do_something...
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the damping part mass. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the damping part mass

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for damping part mass pm:<br>
```
pm.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the damping part mass. The target include of the copied damping part mass can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>DampingPartMass object<br>
Return type
<br>DampingPartMass |
| --- |

| Example
<br>To copy damping part mass pm into damping part mass z:<br>
```
var z = pm.Copy();
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a damping part mass. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the damping part mass

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the damping part mass pm:<br>
```
pm.DetachComment(c);
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for damping part mass. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for damping part mass pm:<br>
```
pm.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first damping part mass in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first damping part mass in

| Returns
<br>DampingPartMass object (or null if there are no damping part masss in the model).<br>
Return type
<br>DampingPartMass |
| --- |

| Example
<br>To get the first damping part mass in model m:<br>
```
var pm = DampingPartMass.First(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the damping part masss in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all damping part masss will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the damping part masss

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the damping part masss with flag f in model m:<br>
```
DampingPartMass.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the damping part mass is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the damping part mass

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if damping part mass pm has flag f set on it:<br>
```
if (pm.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each damping part mass in the model.<br> **Note that ForEach has been designed to make looping over damping part masss as fast as possible and so has some limitations. Firstly, a single temporary DampingPartMass object is created and on each function call it is updated with the current damping part mass data. This means that you should not try to store the DampingPartMass object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new damping part masss inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all damping part masss are in

* func (function)
 
Function to call for each damping part mass

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the damping part masss in model m:<br>
```
DampingPartMass.ForEach(m, test);
function test(pm)
{
// pm is DampingPartMass object
}
```
<br><br>To call function test for all of the damping part masss in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
DampingPartMass.ForEach(m, test, data);
function test(pm, extra)
{
// pm is DampingPartMass object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of DampingPartMass objects or properties for all of the damping part masss in a model in PRIMER. If the optional property argument is not given then an array of DampingPartMass objects is returned. If the property argument is given, that property value for each damping part mass is returned in the array instead of a DampingPartMass object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get damping part masss from

* property (optional) (string)
 
Name for property to get for all damping part masss in the model

| Returns
<br>Array of DampingPartMass objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of DampingPartMass objects for all of the damping part masss in model m:<br>
```
var a = DampingPartMass.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each damping part mass in model m:<br>
```
var a = DampingPartMass.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a damping part mass. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the damping part mass pm:<br>
```
var comm_array = pm.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of DampingPartMass objects for all of the flagged damping part masss in a model in PRIMER If the optional property argument is not given then an array of DampingPartMass objects is returned. If the property argument is given, then that property value for each damping part mass is returned in the array instead of a DampingPartMass object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get damping part masss from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the damping part masss that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged damping part masss in the model

| Returns
<br>Array of DampingPartMass objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of DampingPartMass objects for all of the damping part masss in model m flagged with f:<br>
```
var pm = DampingPartMass.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the damping part masss in model m flagged with f:<br>
```
var a = DampingPartMass.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the DampingPartMass object for a damping part mass ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the damping part mass in

* number (integer)
 
number of the damping part mass you want the DampingPartMass object for

| Returns
<br>DampingPartMass object (or null if damping part mass does not exist).<br>
Return type
<br>DampingPartMass |
| --- |

| Example
<br>To get the DampingPartMass object for damping part mass 100 in model m<br>
```
var pm = DampingPartMass.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a DampingPartMass property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [DampingPartMass.ViewParameters()](primer-dampingpartmass-class.md#DampingPartMass::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
damping part mass property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if DampingPartMass property pm.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (pm.GetParameter(pm.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if DampingPartMass property pm.example is a parameter by using the GetParameter method:<br>
```
if (pm.ViewParameters().GetParameter(pm.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this damping part mass (\*DAMPING\_PART\_MASS). **Note that a carriage return is not added**. See also [DampingPartMass.KeywordCards()](primer-dampingpartmass-class.md#DampingPartMass::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for damping part mass m:<br>
```
var key = fr.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the damping part mass. **Note that a carriage return is not added**. See also [DampingPartMass.Keyword()](primer-dampingpartmass-class.md#DampingPartMass::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for damping part mass fr:<br>
```
var cards = fr.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last damping part mass in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last damping part mass in

| Returns
<br>DampingPartMass object (or null if there are no damping part masss in the model).<br>
Return type
<br>DampingPartMass |
| --- |

| Example
<br>To get the last damping part mass in model m:<br>
```
var pm = DampingPartMass.Last(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next damping part mass in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>DampingPartMass object (or null if there are no more damping part masss in the model).<br>
Return type
<br>DampingPartMass |
| --- |

| Example
<br>To get the damping part mass in model m after damping part mass pm:<br>
```
var pm = pm.Next();
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a damping part mass. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only damping part masss from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only damping part masss that are flagged with *limit* can be selected. If omitted, or null, any damping part masss from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[DampingPartMass](primer-dampingpartmass-class.md) object (or null if not picked)<br>
Return type
<br>DampingPartMass |
| --- |

| Example
<br>To pick a damping part mass from model m giving the prompt 'Pick damping part mass from screen':<br>
```
var pm = DampingPartMass.Pick('Pick damping part mass from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous damping part mass in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>DampingPartMass object (or null if there are no more damping part masss in the model).<br>
Return type
<br>DampingPartMass |
| --- |

| Example
<br>To get the damping part mass in model m before damping part mass pm:<br>
```
var pm = pm.Previous();
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select damping part masss using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting damping part masss

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only damping part masss from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only damping part masss that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any damping part masss can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of damping part masss selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select damping part masss from model m, flagging those selected with flag f, giving the prompt 'Select damping part masss':<br>
```
DampingPartMass.Select(f, 'Select damping part masss', m);
```
<br><br>To select damping part masss, flagging those selected with flag f but limiting selection to damping part masss flagged with flag l, giving the prompt 'Select damping part masss':<br>
```
DampingPartMass.Select(f, 'Select damping part masss', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the damping part mass. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the damping part mass

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for damping part mass pm:<br>
```
pm.SetFlag(f);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the damping part mass. The damping part mass will be sketched until you either call [DampingPartMass.Unsketch()](primer-dampingpartmass-class.md#DampingPartMass::Unsketch), [DampingPartMass.UnsketchAll()](primer-dampingpartmass-class.md#DampingPartMass::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the damping part mass is sketched. If omitted redraw is true. If you want to sketch several damping part masss and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch damping part mass pm:<br>
```
pm.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged damping part masss in the model. The damping part masss will be sketched until you either call [DampingPartMass.Unsketch()](primer-dampingpartmass-class.md#DampingPartMass::Unsketch), [DampingPartMass.UnsketchFlagged()](primer-dampingpartmass-class.md#DampingPartMass::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged damping part masss will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the damping part masss that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the damping part masss are sketched. If omitted redraw is true. If you want to sketch flagged damping part masss several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all damping part masss flagged with flag in model m:<br>
```
DampingPartMass.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of damping part masss in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing damping part masss should be counted. If false or omitted
referenced but undefined damping part masss will also be included in the total.

| Returns
<br>number of damping part masss<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of damping part masss in model m:<br>
```
var total = DampingPartMass.Total(m);
```
 |
| --- |

* * *

| Unblank()

Description<br>Unblanks the damping part mass |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank damping part mass pm:<br>
```
pm.Unblank();
```
 |
| --- |

* * *

| UnblankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the damping part masss in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all damping part masss will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the damping part masss in model m:<br>
```
DampingPartMass.UnblankAll(m);
```
 |
| --- |

* * *

| UnblankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the flagged damping part masss in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the flagged damping part masss will be unblanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the damping part masss that you want to unblank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the damping part masss in model m flagged with f:<br>
```
DampingPartMass.UnblankFlagged(m, f);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the damping part masss in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all damping part masss will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the damping part masss

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the damping part masss in model m:<br>
```
DampingPartMass.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the damping part mass. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the damping part mass is unsketched. If omitted redraw is true. If you want to unsketch several damping part masss and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch damping part mass pm:<br>
```
pm.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all damping part masss. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all damping part masss will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the damping part masss are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all damping part masss in model m:<br>
```
DampingPartMass.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged damping part masss in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all damping part masss will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the damping part masss that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the damping part masss are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all damping part masss flagged with flag in model m:<br>
```
DampingPartMass.UnsketchAll(m, flag);
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
<br>[DampingPartMass](primer-dampingpartmass-class.md) object.<br>
Return type
<br>DampingPartMass |
| --- |

| Example
<br>To check if DampingPartMass property pm.example is a parameter by using the [DampingPartMass.GetParameter()](primer-dampingpartmass-class.md#DampingPartMass::GetParameter) method:<br>
```
if (pm.ViewParameters().GetParameter(pm.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for damping part mass. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for damping part mass pm:<br>
```
pm.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this damping part mass. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for damping part mass pm:<br>
```
var xrefs = pm.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the damping part mass data in keyword format. Note that this contains the keyword header and the keyword cards. See also [DampingPartMass.Keyword()](primer-dampingpartmass-class.md#DampingPartMass::Keyword) and [DampingPartMass.KeywordCards()](primer-dampingpartmass-class.md#DampingPartMass::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for damping part mass pm in keyword format<br>
```
var s = fr.toString();
```
 |
| --- |

* * *