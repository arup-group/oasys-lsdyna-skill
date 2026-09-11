# Mass class

The Mass class gives you access to element mass cards in PRIMER. [More...](primer-mass-class.md#Mass_details)

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

* [BlankAll](primer-mass-class.md#Mass::BlankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [BlankFlagged](primer-mass-class.md#Mass::BlankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Create](primer-mass-class.md#Mass::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [First](primer-mass-class.md#Mass::First)(Model*[[Model](primer-model-class.md)]*)
* [FirstFreeLabel](primer-mass-class.md#Mass::FirstFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [FlagAll](primer-mass-class.md#Mass::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-mass-class.md#Mass::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-mass-class.md#Mass::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-mass-class.md#Mass::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-mass-class.md#Mass::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-mass-class.md#Mass::Last)(Model*[[Model](primer-model-class.md)]*)
* [LastFreeLabel](primer-mass-class.md#Mass::LastFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [NextFreeLabel](primer-mass-class.md#Mass::NextFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [Pick](primer-mass-class.md#Mass::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [RenumberAll](primer-mass-class.md#Mass::RenumberAll)(Model*[[Model](primer-model-class.md)]*, start*[integer]*)
* [RenumberFlagged](primer-mass-class.md#Mass::RenumberFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*)
* [Select](primer-mass-class.md#Mass::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-mass-class.md#Mass::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-mass-class.md#Mass::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnblankAll](primer-mass-class.md#Mass::UnblankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnblankFlagged](primer-mass-class.md#Mass::UnblankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [UnflagAll](primer-mass-class.md#Mass::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-mass-class.md#Mass::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-mass-class.md#Mass::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-mass-class.md#Mass::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Blank](primer-mass-class.md#Mass::Blank)()
* [Blanked](primer-mass-class.md#Mass::Blanked)()
* [Browse](primer-mass-class.md#Mass::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-mass-class.md#Mass::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-mass-class.md#Mass::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-mass-class.md#Mass::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-mass-class.md#Mass::Edit)(modal (optional)*[boolean]*)
* [Error](primer-mass-class.md#Mass::Error)(message*[string]*, details (optional)*[string]*)
* [ExtractColour](primer-mass-class.md#Mass::ExtractColour)()
* [Flagged](primer-mass-class.md#Mass::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-mass-class.md#Mass::GetComments)()
* [GetParameter](primer-mass-class.md#Mass::GetParameter)(prop*[string]*)
* [Keyword](primer-mass-class.md#Mass::Keyword)()
* [KeywordCards](primer-mass-class.md#Mass::KeywordCards)()
* [Next](primer-mass-class.md#Mass::Next)()
* [Previous](primer-mass-class.md#Mass::Previous)()
* [SetFlag](primer-mass-class.md#Mass::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Sketch](primer-mass-class.md#Mass::Sketch)(redraw (optional)*[boolean]*)
* [Unblank](primer-mass-class.md#Mass::Unblank)()
* [Unsketch](primer-mass-class.md#Mass::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-mass-class.md#Mass::ViewParameters)()
* [Warning](primer-mass-class.md#Mass::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-mass-class.md#Mass::Xrefs)()
* [toString](primer-mass-class.md#Mass::toString)()

## Mass constants

| **Name** | **Description** |
| --- | --- |
| Mass.NODE\_SET | Mass is \*MASS\_NODE\_SET. |

## Mass properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| colour | [Colour](primer-colour-class.md) | The colour of the mass |
| eid | integer | [Mass](primer-mass-class.md) number. Also see the [label](primer-mass-class.md#label) property which is an alternative name for this. |
| exists (read only) | logical | true if mass exists, false if referred to but not defined. |
| id | integer | Node id or node set id |
| include | integer | The [Include](primer-include-class.md) file number that the mass is in. |
| label | integer | [Mass](primer-mass-class.md) number. Also see the [eid](primer-mass-class.md#eid) property which is an alternative name for this. |
| mass | real | Mass value |
| model (read only) | integer | The [Model](primer-model-class.md) number that the mass is in. |
| node\_set | integer | The type of the mass. Can be false (\*MASS) or Mass.NODE\_SET (\*MASS\_NODE\_SET) |
| pid | integer | Part ID |
| transparency | integer | The transparency of the mass (0-100) 0% is opaque, 100% is transparent. |

| Detailed Description<br>The Mass class allows you to create, modify, edit and manipulate mass cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new Mass(Model*[[Model](primer-model-class.md)]*, eid*[integer]*, id*[integer]*, mass*[real]*, node set (optional)*[integer]*)

Description<br>Create a new [Mass](primer-mass-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that mass will be created in

* eid (integer)
 
[Mass](primer-mass-class.md) number

* id (integer)
 
Node id or node set id

* mass (real)
 
Mass value

* node set (optional) (integer)
 
Only used if a node set is used

| Returns
<br>[Mass](primer-mass-class.md) object<br>
Return type
<br>Mass |
| --- |

| Example
<br>To create a new mass in model m with label 200, on node 500, or node set 500, with a mass of 3.5, use one of the following:<br>
```
var m = new Mass(m, 200, 500, 3.5);
```
<br><br>
```
var m = new Mass(m, 200, 500, 3.5, Mass.NODE_SET);
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a mass. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the mass

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the mass m:<br>
```
m.AssociateComment(c);
```
 |
| --- |

* * *

| Blank()

Description<br>Blanks the mass |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To blank mass m:<br>
```
m.Blank();
```
 |
| --- |

* * *

| BlankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the masss in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all masss will be blanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the masss in model m:<br>
```
Mass.BlankAll(m);
```
 |
| --- |

* * *

| BlankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the flagged masss in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged masss will be blanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the masss that you want to blank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the masss in model m flagged with f:<br>
```
Mass.BlankFlagged(m, f);
```
 |
| --- |

* * *

| Blanked()

Description<br>Checks if the mass is blanked or not. |
| --- |

#### Arguments

No arguments

| Returns
<br>true if blanked, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if mass m is blanked:<br>
```
if (m.Blanked() ) do_something...
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
<br>To Browse mass m:<br>
```
m.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the mass. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the mass

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for mass m:<br>
```
m.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the mass. The target include of the copied mass can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>Mass object<br>
Return type
<br>Mass |
| --- |

| Example
<br>To copy mass m into mass z:<br>
```
var z = m.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a mass |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the mass will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>Mass object (or null if not made).<br>
Return type
<br>Mass |
| --- |

| Example
<br>To start creating a mass in model m:<br>
```
var m = Mass.Create(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a mass. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the mass

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the mass m:<br>
```
m.DetachComment(c);
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
<br>To Edit mass m:<br>
```
m.Edit();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for mass. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for mass m:<br>
```
m.Error("My custom error");
```
 |
| --- |

* * *

| ExtractColour()

Description<br>Extracts the **actual** colour used for mass.<br> By default in PRIMER many entities such as elements get their colour automatically from the part that they are in. PRIMER cycles through 13 default colours based on the label of the entity. In this case the mass [colour](primer-mass-class.md#colour) property will return the value [Colour.PART](primer-colour-class.md#Colour.PART) instead of the actual colour. This method will return the actual colour which is used for drawing the mass. |
| --- |

#### Arguments

No arguments

| Returns
<br>colour value (integer)<br>
Return type
<br>Number |
| --- |

| Example
<br>To return the colour used for drawing mass m:<br>
```
var colour = m.ExtractColour();
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first mass in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first mass in

| Returns
<br>Mass object (or null if there are no masss in the model).<br>
Return type
<br>Mass |
| --- |

| Example
<br>To get the first mass in model m:<br>
```
var m = Mass.First(m);
```
 |
| --- |

* * *

| FirstFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the first free mass label in the model. Also see [Mass.LastFreeLabel()](primer-mass-class.md#Mass::LastFreeLabel), [Mass.NextFreeLabel()](primer-mass-class.md#Mass::NextFreeLabel) and [Model.FirstFreeItemLabel()](primer-model-class.md#Model::FirstFreeItemLabel). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first free mass label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *First free in layer* in editing panels). If omitted the whole model will be used (Equivalent to *First free* in editing panels).

| Returns
<br>Mass label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the first free mass label in model m:<br>
```
var label = Mass.FirstFreeLabel(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the masss in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all masss will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the masss

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the masss with flag f in model m:<br>
```
Mass.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the mass is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the mass

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if mass m has flag f set on it:<br>
```
if (m.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each mass in the model.<br> **Note that ForEach has been designed to make looping over masss as fast as possible and so has some limitations. Firstly, a single temporary Mass object is created and on each function call it is updated with the current mass data. This means that you should not try to store the Mass object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new masss inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all masss are in

* func (function)
 
Function to call for each mass

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the masss in model m:<br>
```
Mass.ForEach(m, test);
function test(m)
{
// m is Mass object
}
```
<br><br>To call function test for all of the masss in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
Mass.ForEach(m, test, data);
function test(m, extra)
{
// m is Mass object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Mass objects or properties for all of the masss in a model in PRIMER. If the optional property argument is not given then an array of Mass objects is returned. If the property argument is given, that property value for each mass is returned in the array instead of a Mass object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get masss from

* property (optional) (string)
 
Name for property to get for all masss in the model

| Returns
<br>Array of Mass objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Mass objects for all of the masss in model m:<br>
```
var a = Mass.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each mass in model m:<br>
```
var a = Mass.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a mass. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the mass m:<br>
```
var comm_array = m.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Mass objects for all of the flagged masss in a model in PRIMER If the optional property argument is not given then an array of Mass objects is returned. If the property argument is given, then that property value for each mass is returned in the array instead of a Mass object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get masss from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the masss that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged masss in the model

| Returns
<br>Array of Mass objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Mass objects for all of the masss in model m flagged with f:<br>
```
var m = Mass.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the masss in model m flagged with f:<br>
```
var a = Mass.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the Mass object for a mass ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the mass in

* number (integer)
 
number of the mass you want the Mass object for

| Returns
<br>Mass object (or null if mass does not exist).<br>
Return type
<br>Mass |
| --- |

| Example
<br>To get the Mass object for mass 100 in model m<br>
```
var m = Mass.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a Mass property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [Mass.ViewParameters()](primer-mass-class.md#Mass::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
mass property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if Mass property m.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (m.GetParameter(m.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if Mass property m.example is a parameter by using the GetParameter method:<br>
```
if (m.ViewParameters().GetParameter(m.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this mass (\*ELEMENT\_MASS or \*ELEMENT\_MASS\_NODE\_SET). **Note that a carriage return is not added**. See also [Mass.KeywordCards()](primer-mass-class.md#Mass::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for mass m:<br>
```
var key = m.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the mass. **Note that a carriage return is not added**. See also [Mass.Keyword()](primer-mass-class.md#Mass::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for mass m:<br>
```
var cards = m.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last mass in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last mass in

| Returns
<br>Mass object (or null if there are no masss in the model).<br>
Return type
<br>Mass |
| --- |

| Example
<br>To get the last mass in model m:<br>
```
var m = Mass.Last(m);
```
 |
| --- |

* * *

| LastFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the last free mass label in the model. Also see [Mass.FirstFreeLabel()](primer-mass-class.md#Mass::FirstFreeLabel), [Mass.NextFreeLabel()](primer-mass-class.md#Mass::NextFreeLabel) and see [Model.LastFreeItemLabel()](primer-model-class.md#Model::LastFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last free mass label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest free in layer* in editing panels). If omitted the whole model will be used.

| Returns
<br>Mass label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the last free mass label in model m:<br>
```
var label = Mass.LastFreeLabel(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next mass in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Mass object (or null if there are no more masss in the model).<br>
Return type
<br>Mass |
| --- |

| Example
<br>To get the mass in model m after mass m:<br>
```
var m = m.Next();
```
 |
| --- |

* * *

| NextFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the next free (highest+1) mass label in the model. Also see [Mass.FirstFreeLabel()](primer-mass-class.md#Mass::FirstFreeLabel), [Mass.LastFreeLabel()](primer-mass-class.md#Mass::LastFreeLabel) and [Model.NextFreeItemLabel()](primer-model-class.md#Model::NextFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get next free mass label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest+1 in layer* in editing panels). If omitted the whole model will be used (Equivalent to *Highest+1* in editing panels).

| Returns
<br>Mass label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the next free mass label in model m:<br>
```
var label = Mass.NextFreeLabel(m);
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a mass. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only masss from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only masss that are flagged with *limit* can be selected. If omitted, or null, any masss from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[Mass](primer-mass-class.md) object (or null if not picked)<br>
Return type
<br>Mass |
| --- |

| Example
<br>To pick a mass from model m giving the prompt 'Pick mass from screen':<br>
```
var m = Mass.Pick('Pick mass from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous mass in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Mass object (or null if there are no more masss in the model).<br>
Return type
<br>Mass |
| --- |

| Example
<br>To get the mass in model m before mass m:<br>
```
var m = m.Previous();
```
 |
| --- |

* * *

| RenumberAll(Model*[[Model](primer-model-class.md)]*, start*[integer]*) [static]
Description<br>Renumbers all of the masss in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all masss will be renumbered in

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the masss in model m, from 1000000:<br>
```
Mass.RenumberAll(m, 1000000);
```
 |
| --- |

* * *

| RenumberFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*) [static]
Description<br>Renumbers all of the flagged masss in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged masss will be renumbered in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the masss that you want to renumber

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the masss in model m flagged with f, from 1000000:<br>
```
Mass.RenumberFlagged(m, f, 1000000);
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select masss using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting masss

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only masss from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only masss that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any masss can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of masss selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select masss from model m, flagging those selected with flag f, giving the prompt 'Select masss':<br>
```
Mass.Select(f, 'Select masss', m);
```
<br><br>To select masss, flagging those selected with flag f but limiting selection to masss flagged with flag l, giving the prompt 'Select masss':<br>
```
Mass.Select(f, 'Select masss', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the mass. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the mass

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for mass m:<br>
```
m.SetFlag(f);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the mass. The mass will be sketched until you either call [Mass.Unsketch()](primer-mass-class.md#Mass::Unsketch), [Mass.UnsketchAll()](primer-mass-class.md#Mass::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the mass is sketched. If omitted redraw is true. If you want to sketch several masss and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch mass m:<br>
```
m.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged masss in the model. The masss will be sketched until you either call [Mass.Unsketch()](primer-mass-class.md#Mass::Unsketch), [Mass.UnsketchFlagged()](primer-mass-class.md#Mass::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged masss will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the masss that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the masss are sketched. If omitted redraw is true. If you want to sketch flagged masss several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all masss flagged with flag in model m:<br>
```
Mass.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of masss in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing masss should be counted. If false or omitted
referenced but undefined masss will also be included in the total.

| Returns
<br>number of masss<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of masss in model m:<br>
```
var total = Mass.Total(m);
```
 |
| --- |

* * *

| Unblank()

Description<br>Unblanks the mass |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank mass m:<br>
```
m.Unblank();
```
 |
| --- |

* * *

| UnblankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the masss in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all masss will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the masss in model m:<br>
```
Mass.UnblankAll(m);
```
 |
| --- |

* * *

| UnblankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the flagged masss in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the flagged masss will be unblanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the masss that you want to unblank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the masss in model m flagged with f:<br>
```
Mass.UnblankFlagged(m, f);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the masss in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all masss will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the masss

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the masss in model m:<br>
```
Mass.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the mass. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the mass is unsketched. If omitted redraw is true. If you want to unsketch several masss and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch mass m:<br>
```
m.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all masss. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all masss will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the masss are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all masss in model m:<br>
```
Mass.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged masss in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all masss will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the masss that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the masss are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all masss flagged with flag in model m:<br>
```
Mass.UnsketchAll(m, flag);
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
<br>[Mass](primer-mass-class.md) object.<br>
Return type
<br>Mass |
| --- |

| Example
<br>To check if Mass property m.example is a parameter by using the [Mass.GetParameter()](primer-mass-class.md#Mass::GetParameter) method:<br>
```
if (m.ViewParameters().GetParameter(m.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for mass. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for mass m:<br>
```
m.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this mass. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for mass m:<br>
```
var xrefs = m.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the mass data in keyword format. Note that this contains the keyword header and the keyword cards. See also [Mass.Keyword()](primer-mass-class.md#Mass::Keyword) and [Mass.KeywordCards()](primer-mass-class.md#Mass::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for mass m in keyword format<br>
```
var s = m.toString();
```
 |
| --- |

* * *