# MorphPoint class

The MorphPoint class gives you access to morph points in PRIMER. [More...](primer-morphpoint-class.md#MorphPoint_details)

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

* [BlankAll](primer-morphpoint-class.md#MorphPoint::BlankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [BlankFlagged](primer-morphpoint-class.md#MorphPoint::BlankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [First](primer-morphpoint-class.md#MorphPoint::First)(Model*[[Model](primer-model-class.md)]*)
* [FirstFreeLabel](primer-morphpoint-class.md#MorphPoint::FirstFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [FlagAll](primer-morphpoint-class.md#MorphPoint::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-morphpoint-class.md#MorphPoint::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-morphpoint-class.md#MorphPoint::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-morphpoint-class.md#MorphPoint::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-morphpoint-class.md#MorphPoint::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-morphpoint-class.md#MorphPoint::Last)(Model*[[Model](primer-model-class.md)]*)
* [LastFreeLabel](primer-morphpoint-class.md#MorphPoint::LastFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [MoveFlagged](primer-morphpoint-class.md#MorphPoint::MoveFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, dx*[real]*, dy*[real]*, dz*[real]*)
* [NextFreeLabel](primer-morphpoint-class.md#MorphPoint::NextFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [Pick](primer-morphpoint-class.md#MorphPoint::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [RenumberAll](primer-morphpoint-class.md#MorphPoint::RenumberAll)(Model*[[Model](primer-model-class.md)]*, start*[integer]*)
* [RenumberFlagged](primer-morphpoint-class.md#MorphPoint::RenumberFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*)
* [Select](primer-morphpoint-class.md#MorphPoint::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-morphpoint-class.md#MorphPoint::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-morphpoint-class.md#MorphPoint::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnblankAll](primer-morphpoint-class.md#MorphPoint::UnblankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnblankFlagged](primer-morphpoint-class.md#MorphPoint::UnblankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [UnflagAll](primer-morphpoint-class.md#MorphPoint::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-morphpoint-class.md#MorphPoint::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-morphpoint-class.md#MorphPoint::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-morphpoint-class.md#MorphPoint::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Blank](primer-morphpoint-class.md#MorphPoint::Blank)()
* [Blanked](primer-morphpoint-class.md#MorphPoint::Blanked)()
* [ClearFlag](primer-morphpoint-class.md#MorphPoint::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-morphpoint-class.md#MorphPoint::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-morphpoint-class.md#MorphPoint::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Error](primer-morphpoint-class.md#MorphPoint::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-morphpoint-class.md#MorphPoint::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-morphpoint-class.md#MorphPoint::GetComments)()
* [GetParameter](primer-morphpoint-class.md#MorphPoint::GetParameter)(prop*[string]*)
* [Keyword](primer-morphpoint-class.md#MorphPoint::Keyword)()
* [KeywordCards](primer-morphpoint-class.md#MorphPoint::KeywordCards)()
* [Next](primer-morphpoint-class.md#MorphPoint::Next)()
* [Previous](primer-morphpoint-class.md#MorphPoint::Previous)()
* [SetFlag](primer-morphpoint-class.md#MorphPoint::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Sketch](primer-morphpoint-class.md#MorphPoint::Sketch)(redraw (optional)*[boolean]*)
* [Unblank](primer-morphpoint-class.md#MorphPoint::Unblank)()
* [Unsketch](primer-morphpoint-class.md#MorphPoint::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-morphpoint-class.md#MorphPoint::ViewParameters)()
* [Warning](primer-morphpoint-class.md#MorphPoint::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-morphpoint-class.md#MorphPoint::Xrefs)()
* [toString](primer-morphpoint-class.md#MorphPoint::toString)()

## MorphPoint properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists (read only) | logical | true if point exists, false if referred to but not defined. |
| include | integer | The [Include](primer-include-class.md) file number that the point is in. |
| label | integer | [MorphPoint](primer-morphpoint-class.md) number. |
| model (read only) | integer | The [Model](primer-model-class.md) number that the point is in. |
| x | real | X coordinate |
| y | real | Y coordinate |
| z | real | Z coordinate |

| Detailed Description<br>The MorphPoint class allows you to create, modify and manipulate morph points.<br>See the documentation below for more details. |
| --- |

| Constructor
new MorphPoint(Model*[[Model](primer-model-class.md)]*, label*[integer]*, x*[real]*, y*[real]*, z*[real]*)

Description<br>Create a new [MorphPoint](primer-morphpoint-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that morph point will be created in

* label (integer)
 
[MorphPoint](primer-morphpoint-class.md) number

* x (real)
 
X coordinate

* y (real)
 
Y coordinate

* z (real)
 
Z coordinate

| Returns
<br>[MorphPoint](primer-morphpoint-class.md) object<br>
Return type
<br>MorphPoint |
| --- |

| Example
<br>To create a new morph point in model m with label 100, at coordinates (20, 40, 10)<br>
```
var n = new MorphPoint(m, 100, 20, 40, 10);
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a point. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the point

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the point p:<br>
```
p.AssociateComment(c);
```
 |
| --- |

* * *

| Blank()

Description<br>Blanks the point |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To blank point p:<br>
```
p.Blank();
```
 |
| --- |

* * *

| BlankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the points in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all points will be blanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the points in model m:<br>
```
MorphPoint.BlankAll(m);
```
 |
| --- |

* * *

| BlankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the flagged points in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged points will be blanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the points that you want to blank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the points in model m flagged with f:<br>
```
MorphPoint.BlankFlagged(m, f);
```
 |
| --- |

* * *

| Blanked()

Description<br>Checks if the point is blanked or not. |
| --- |

#### Arguments

No arguments

| Returns
<br>true if blanked, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if point p is blanked:<br>
```
if (p.Blanked() ) do_something...
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the point. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the point

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for point p:<br>
```
p.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the point. The target include of the copied point can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>MorphPoint object<br>
Return type
<br>MorphPoint |
| --- |

| Example
<br>To copy point p into point z:<br>
```
var z = p.Copy();
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a point. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the point

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the point p:<br>
```
p.DetachComment(c);
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for point. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for point p:<br>
```
p.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first point in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first point in

| Returns
<br>MorphPoint object (or null if there are no points in the model).<br>
Return type
<br>MorphPoint |
| --- |

| Example
<br>To get the first point in model m:<br>
```
var p = MorphPoint.First(m);
```
 |
| --- |

* * *

| FirstFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the first free point label in the model. Also see [MorphPoint.LastFreeLabel()](primer-morphpoint-class.md#MorphPoint::LastFreeLabel), [MorphPoint.NextFreeLabel()](primer-morphpoint-class.md#MorphPoint::NextFreeLabel) and [Model.FirstFreeItemLabel()](primer-model-class.md#Model::FirstFreeItemLabel). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first free point label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *First free in layer* in editing panels). If omitted the whole model will be used (Equivalent to *First free* in editing panels).

| Returns
<br>MorphPoint label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the first free point label in model m:<br>
```
var label = MorphPoint.FirstFreeLabel(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the points in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all points will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the points

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the points with flag f in model m:<br>
```
MorphPoint.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the point is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the point

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if point p has flag f set on it:<br>
```
if (p.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each point in the model.<br> **Note that ForEach has been designed to make looping over points as fast as possible and so has some limitations. Firstly, a single temporary MorphPoint object is created and on each function call it is updated with the current point data. This means that you should not try to store the MorphPoint object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new points inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all points are in

* func (function)
 
Function to call for each point

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the points in model m:<br>
```
MorphPoint.ForEach(m, test);
function test(p)
{
// p is MorphPoint object
}
```
<br><br>To call function test for all of the points in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
MorphPoint.ForEach(m, test, data);
function test(p, extra)
{
// p is MorphPoint object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of MorphPoint objects or properties for all of the points in a model in PRIMER. If the optional property argument is not given then an array of MorphPoint objects is returned. If the property argument is given, that property value for each point is returned in the array instead of a MorphPoint object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get points from

* property (optional) (string)
 
Name for property to get for all points in the model

| Returns
<br>Array of MorphPoint objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of MorphPoint objects for all of the points in model m:<br>
```
var a = MorphPoint.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each point in model m:<br>
```
var a = MorphPoint.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a point. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the point p:<br>
```
var comm_array = p.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of MorphPoint objects for all of the flagged points in a model in PRIMER If the optional property argument is not given then an array of MorphPoint objects is returned. If the property argument is given, then that property value for each point is returned in the array instead of a MorphPoint object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get points from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the points that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged points in the model

| Returns
<br>Array of MorphPoint objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of MorphPoint objects for all of the points in model m flagged with f:<br>
```
var p = MorphPoint.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the points in model m flagged with f:<br>
```
var a = MorphPoint.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the MorphPoint object for a point ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the point in

* number (integer)
 
number of the point you want the MorphPoint object for

| Returns
<br>MorphPoint object (or null if point does not exist).<br>
Return type
<br>MorphPoint |
| --- |

| Example
<br>To get the MorphPoint object for point 100 in model m<br>
```
var p = MorphPoint.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a MorphPoint property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [MorphPoint.ViewParameters()](primer-morphpoint-class.md#MorphPoint::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
point property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if MorphPoint property p.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (p.GetParameter(p.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if MorphPoint property p.example is a parameter by using the GetParameter method:<br>
```
if (p.ViewParameters().GetParameter(p.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this morph point (\*MORPH\_POINT). **Note that a carriage return is not added**. See also [MorphPoint.KeywordCards()](primer-morphpoint-class.md#MorphPoint::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for morph point p:<br>
```
var key = p.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the morph point. **Note that a carriage return is not added**. See also [MorphPoint.Keyword()](primer-morphpoint-class.md#MorphPoint::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for morph point p:<br>
```
var cards = p.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last point in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last point in

| Returns
<br>MorphPoint object (or null if there are no points in the model).<br>
Return type
<br>MorphPoint |
| --- |

| Example
<br>To get the last point in model m:<br>
```
var p = MorphPoint.Last(m);
```
 |
| --- |

* * *

| LastFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the last free point label in the model. Also see [MorphPoint.FirstFreeLabel()](primer-morphpoint-class.md#MorphPoint::FirstFreeLabel), [MorphPoint.NextFreeLabel()](primer-morphpoint-class.md#MorphPoint::NextFreeLabel) and see [Model.LastFreeItemLabel()](primer-model-class.md#Model::LastFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last free point label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest free in layer* in editing panels). If omitted the whole model will be used.

| Returns
<br>MorphPoint label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the last free point label in model m:<br>
```
var label = MorphPoint.LastFreeLabel(m);
```
 |
| --- |

* * *

| MoveFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, dx*[real]*, dy*[real]*, dz*[real]*) [static]
Description<br>This function moves a selection of flagged morph points by a given vector and interpolates the movement of other morph points in the same way as this happens on the interactive morph panel. Note that the interpolation depends on the settings which can be switched on the interactive morph panel or by preferences. To apply the movement to the nodes in the box(es), you will need to call [MorphBox.ApplyMorphing()](primer-morphbox-class.md#MorphBox::ApplyMorphing) at least for all relevant boxes or (if that is easier) for all morph boxes in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the flagged morph points are in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the morph points explicitly selected to move

* dx (real)
 
X component of vector to be moved along

* dy (real)
 
Y component of vector to be moved along

* dz (real)
 
Z component of vector to be moved along

| Returns
<br>No return value |
| --- |

| Example
<br>To move all morph points in model m flagged with flag by 10 units in global Y direction while interpolating the other morph points as given by button settings or preferences:<br>
```
MorphPoint.MoveFlagged(m, flag, 0.0, 10.0, 0.0);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next point in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>MorphPoint object (or null if there are no more points in the model).<br>
Return type
<br>MorphPoint |
| --- |

| Example
<br>To get the point in model m after point p:<br>
```
var p = p.Next();
```
 |
| --- |

* * *

| NextFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the next free (highest+1) point label in the model. Also see [MorphPoint.FirstFreeLabel()](primer-morphpoint-class.md#MorphPoint::FirstFreeLabel), [MorphPoint.LastFreeLabel()](primer-morphpoint-class.md#MorphPoint::LastFreeLabel) and [Model.NextFreeItemLabel()](primer-model-class.md#Model::NextFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get next free point label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest+1 in layer* in editing panels). If omitted the whole model will be used (Equivalent to *Highest+1* in editing panels).

| Returns
<br>MorphPoint label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the next free point label in model m:<br>
```
var label = MorphPoint.NextFreeLabel(m);
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a point. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only points from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only points that are flagged with *limit* can be selected. If omitted, or null, any points from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[MorphPoint](primer-morphpoint-class.md) object (or null if not picked)<br>
Return type
<br>MorphPoint |
| --- |

| Example
<br>To pick a point from model m giving the prompt 'Pick point from screen':<br>
```
var p = MorphPoint.Pick('Pick point from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous point in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>MorphPoint object (or null if there are no more points in the model).<br>
Return type
<br>MorphPoint |
| --- |

| Example
<br>To get the point in model m before point p:<br>
```
var p = p.Previous();
```
 |
| --- |

* * *

| RenumberAll(Model*[[Model](primer-model-class.md)]*, start*[integer]*) [static]
Description<br>Renumbers all of the points in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all points will be renumbered in

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the points in model m, from 1000000:<br>
```
MorphPoint.RenumberAll(m, 1000000);
```
 |
| --- |

* * *

| RenumberFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*) [static]
Description<br>Renumbers all of the flagged points in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged points will be renumbered in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the points that you want to renumber

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the points in model m flagged with f, from 1000000:<br>
```
MorphPoint.RenumberFlagged(m, f, 1000000);
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select points using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting points

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only points from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only points that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any points can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of points selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select points from model m, flagging those selected with flag f, giving the prompt 'Select points':<br>
```
MorphPoint.Select(f, 'Select points', m);
```
<br><br>To select points, flagging those selected with flag f but limiting selection to points flagged with flag l, giving the prompt 'Select points':<br>
```
MorphPoint.Select(f, 'Select points', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the point. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the point

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for point p:<br>
```
p.SetFlag(f);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the point. The point will be sketched until you either call [MorphPoint.Unsketch()](primer-morphpoint-class.md#MorphPoint::Unsketch), [MorphPoint.UnsketchAll()](primer-morphpoint-class.md#MorphPoint::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the point is sketched. If omitted redraw is true. If you want to sketch several points and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch point p:<br>
```
p.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged points in the model. The points will be sketched until you either call [MorphPoint.Unsketch()](primer-morphpoint-class.md#MorphPoint::Unsketch), [MorphPoint.UnsketchFlagged()](primer-morphpoint-class.md#MorphPoint::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged points will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the points that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the points are sketched. If omitted redraw is true. If you want to sketch flagged points several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all points flagged with flag in model m:<br>
```
MorphPoint.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of points in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing points should be counted. If false or omitted
referenced but undefined points will also be included in the total.

| Returns
<br>number of points<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of points in model m:<br>
```
var total = MorphPoint.Total(m);
```
 |
| --- |

* * *

| Unblank()

Description<br>Unblanks the point |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank point p:<br>
```
p.Unblank();
```
 |
| --- |

* * *

| UnblankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the points in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all points will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the points in model m:<br>
```
MorphPoint.UnblankAll(m);
```
 |
| --- |

* * *

| UnblankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the flagged points in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the flagged points will be unblanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the points that you want to unblank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the points in model m flagged with f:<br>
```
MorphPoint.UnblankFlagged(m, f);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the points in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all points will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the points

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the points in model m:<br>
```
MorphPoint.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the point. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the point is unsketched. If omitted redraw is true. If you want to unsketch several points and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch point p:<br>
```
p.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all points. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all points will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the points are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all points in model m:<br>
```
MorphPoint.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged points in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all points will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the points that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the points are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all points flagged with flag in model m:<br>
```
MorphPoint.UnsketchAll(m, flag);
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
<br>[MorphPoint](primer-morphpoint-class.md) object.<br>
Return type
<br>MorphPoint |
| --- |

| Example
<br>To check if MorphPoint property p.example is a parameter by using the [MorphPoint.GetParameter()](primer-morphpoint-class.md#MorphPoint::GetParameter) method:<br>
```
if (p.ViewParameters().GetParameter(p.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for point. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for point p:<br>
```
p.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this point. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for point p:<br>
```
var xrefs = p.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the morph point data in keyword format. Note that this contains the keyword header and the keyword cards. See also [MorphPoint.Keyword()](primer-morphpoint-class.md#MorphPoint::Keyword) and [MorphPoint.KeywordCards()](primer-morphpoint-class.md#MorphPoint::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for morph point p in keyword format<br>
```
var s = p.toString();
```
 |
| --- |

* * *