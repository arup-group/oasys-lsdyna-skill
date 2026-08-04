# LoadBodyGeneralized class

The LoadBodyGeneralized class gives you access to define load body generalized cards in PRIMER. [More...](primer-loadbodygeneralized-class.md#LoadBodyGeneralized_details)

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

* [BlankAll](primer-loadbodygeneralized-class.md#LoadBodyGeneralized::BlankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [BlankFlagged](primer-loadbodygeneralized-class.md#LoadBodyGeneralized::BlankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [First](primer-loadbodygeneralized-class.md#LoadBodyGeneralized::First)(Model*[[Model](primer-model-class.md)]*)
* [FlagAll](primer-loadbodygeneralized-class.md#LoadBodyGeneralized::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-loadbodygeneralized-class.md#LoadBodyGeneralized::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-loadbodygeneralized-class.md#LoadBodyGeneralized::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-loadbodygeneralized-class.md#LoadBodyGeneralized::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-loadbodygeneralized-class.md#LoadBodyGeneralized::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-loadbodygeneralized-class.md#LoadBodyGeneralized::Last)(Model*[[Model](primer-model-class.md)]*)
* [Pick](primer-loadbodygeneralized-class.md#LoadBodyGeneralized::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [Select](primer-loadbodygeneralized-class.md#LoadBodyGeneralized::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-loadbodygeneralized-class.md#LoadBodyGeneralized::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-loadbodygeneralized-class.md#LoadBodyGeneralized::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnblankAll](primer-loadbodygeneralized-class.md#LoadBodyGeneralized::UnblankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnblankFlagged](primer-loadbodygeneralized-class.md#LoadBodyGeneralized::UnblankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [UnflagAll](primer-loadbodygeneralized-class.md#LoadBodyGeneralized::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-loadbodygeneralized-class.md#LoadBodyGeneralized::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-loadbodygeneralized-class.md#LoadBodyGeneralized::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-loadbodygeneralized-class.md#LoadBodyGeneralized::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Blank](primer-loadbodygeneralized-class.md#LoadBodyGeneralized::Blank)()
* [Blanked](primer-loadbodygeneralized-class.md#LoadBodyGeneralized::Blanked)()
* [ClearFlag](primer-loadbodygeneralized-class.md#LoadBodyGeneralized::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-loadbodygeneralized-class.md#LoadBodyGeneralized::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-loadbodygeneralized-class.md#LoadBodyGeneralized::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Error](primer-loadbodygeneralized-class.md#LoadBodyGeneralized::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-loadbodygeneralized-class.md#LoadBodyGeneralized::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-loadbodygeneralized-class.md#LoadBodyGeneralized::GetComments)()
* [GetParameter](primer-loadbodygeneralized-class.md#LoadBodyGeneralized::GetParameter)(prop*[string]*)
* [Keyword](primer-loadbodygeneralized-class.md#LoadBodyGeneralized::Keyword)()
* [KeywordCards](primer-loadbodygeneralized-class.md#LoadBodyGeneralized::KeywordCards)()
* [Next](primer-loadbodygeneralized-class.md#LoadBodyGeneralized::Next)()
* [Previous](primer-loadbodygeneralized-class.md#LoadBodyGeneralized::Previous)()
* [SetFlag](primer-loadbodygeneralized-class.md#LoadBodyGeneralized::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Sketch](primer-loadbodygeneralized-class.md#LoadBodyGeneralized::Sketch)(redraw (optional)*[boolean]*)
* [Unblank](primer-loadbodygeneralized-class.md#LoadBodyGeneralized::Unblank)()
* [Unsketch](primer-loadbodygeneralized-class.md#LoadBodyGeneralized::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-loadbodygeneralized-class.md#LoadBodyGeneralized::ViewParameters)()
* [Warning](primer-loadbodygeneralized-class.md#LoadBodyGeneralized::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-loadbodygeneralized-class.md#LoadBodyGeneralized::Xrefs)()
* [toString](primer-loadbodygeneralized-class.md#LoadBodyGeneralized::toString)()

## LoadBodyGeneralized constants

| **Name** | **Description** |
| --- | --- |
| LoadBodyGeneralized.NODE | Load is \*LOAD\_BODY\_GENERALIZED. |
| LoadBodyGeneralized.SET\_NODE | Load is \*LOAD\_BODY\_GENERALIZED\_SET\_NODE. |
| LoadBodyGeneralized.SET\_PART | LOAD is \*LOAD\_BODY\_GENERALIZED\_SET\_PART. |

## LoadBodyGeneralized properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| angtyp | string | Type of body loads |
| ax | real | Scale factor for acceleration in x-direction |
| ay | real | Scale factor for acceleration in y-direction |
| az | real | Scale factor for acceleration in z-direction |
| cid | integer | Coordinate system ID to define acceleration |
| drlcid | real | [Curve](primer-curve-class.md) ID for dynamic relaxation phase |
| exists (read only) | logical | true if load body generalized exists, false if referred to but not defined. |
| include | integer | The [Include](primer-include-class.md) file number that the load body generalized is in. |
| lcid | integer | [Curve](primer-curve-class.md) ID |
| model (read only) | integer | The [Model](primer-model-class.md) number that the load body generalized is in. |
| n1 | integer | Beginning [Node](primer-node-class.md) ID for body force load or the node or [Part](primer-part-class.md) set ID |
| n2 | integer | Ending [Node](primer-node-class.md) ID for body force load. Set to zero if a set ID is defined |
| omx | real | Scale factor for x-angular velocity or acceleration |
| omy | real | Scale factor for y-angular velocity or acceleration |
| omz | real | Scale factor for z-angular velocity or acceleration |
| type | constant | The Load Node type, can be [LoadBodyGeneralized.NODE](primer-loadbodygeneralized-class.md#LoadBodyGeneralized.NODE) or [LoadBodyGeneralized.SET_NODE](primer-loadbodygeneralized-class.md#LoadBodyGeneralized.SET_NODE) or [LoadBodyGeneralized.SET_PART](primer-loadbodygeneralized-class.md#LoadBodyGeneralized.SET_PART). |
| xc | real | X-center of rotation |
| yc | real | Y-center of rotation |
| zc | real | Z-center of rotation |

| Detailed Description<br>The LoadBodyGeneralized class allows you to create, modify, edit and manipulate load body generalized cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new LoadBodyGeneralized(Model*[[Model](primer-model-class.md)]*, type*[constant]*, n1*[integer]*, n2*[integer]*, lcid*[integer]*, drlcid (optional)*[integer]*, xc (optional)*[real]*, yc (optional)*[real]*, zc (optional)*[real]*, ax (optional)*[real]*, ay (optional)*[real]*, az (optional)*[real]*, omx (optional)*[real]*, omy (optional)*[real]*, omz (optional)*[real]*, cid (optional)*[integer]*, angtyp (optional)*[string]*)

Description<br>Create a new [LoadBodyGeneralized](primer-loadbodygeneralized-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that load body generalized will be created in

* type (constant)
 
Specify the type of load body generalized (Can be [LoadBodyGeneralized.NODE](primer-loadbodygeneralized-class.md#LoadBodyGeneralized.NODE) or [LoadBodyGeneralized.SET_NODE](primer-loadbodygeneralized-class.md#LoadBodyGeneralized.SET_NODE) or [LoadBodyGeneralized.SET_PART](primer-loadbodygeneralized-class.md#LoadBodyGeneralized.SET_PART))

* n1 (integer)
 
Beginning [Node](primer-node-class.md) ID for body force load or the node or [Part](primer-part-class.md) set ID

* n2 (integer)
 
Ending [Node](primer-node-class.md) ID for body force load. Set to zero if a set ID is defined

* lcid (integer)
 
[Curve](primer-curve-class.md) ID

* drlcid (optional) (integer)
 
[Curve](primer-curve-class.md) ID for dynamic relaxation phase

* xc (optional) (real)
 
X-center of rotation

* yc (optional) (real)
 
Y-center of rotation

* zc (optional) (real)
 
Z-center of rotation

* ax (optional) (real)
 
Scale factor for acceleration in x-direction

* ay (optional) (real)
 
Scale factor for acceleration in y-direction

* az (optional) (real)
 
Scale factor for acceleration in z-direction

* omx (optional) (real)
 
Scale factor for x-angular velocity or acceleration

* omy (optional) (real)
 
Scale factor for y-angular velocity or acceleration

* omz (optional) (real)
 
Scale factor for z-angular velocity or acceleration

* cid (optional) (integer)
 
Coordinate system ID to define acceleration

* angtyp (optional) (string)
 
Type of body loads

| Returns
<br>[LoadBodyGeneralized](primer-loadbodygeneralized-class.md) object<br>
Return type
<br>LoadBodyGeneralized |
| --- |

| Example
<br>To create a new load body generalized in model m, of type SET\_NODE, with LCID 9 and N2 is 2<br>
```
var b = new LoadBodyGeneralized(m, LoadBodyGeneralized.SET_NODE, 100, 2, 9);
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a load body generalized. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the load body generalized

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the load body generalized lbg:<br>
```
lbg.AssociateComment(c);
```
 |
| --- |

* * *

| Blank()

Description<br>Blanks the load body generalized |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To blank load body generalized lbg:<br>
```
lbg.Blank();
```
 |
| --- |

* * *

| BlankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the load body generalizeds in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all load body generalizeds will be blanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the load body generalizeds in model m:<br>
```
LoadBodyGeneralized.BlankAll(m);
```
 |
| --- |

* * *

| BlankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the flagged load body generalizeds in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged load body generalizeds will be blanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the load body generalizeds that you want to blank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the load body generalizeds in model m flagged with f:<br>
```
LoadBodyGeneralized.BlankFlagged(m, f);
```
 |
| --- |

* * *

| Blanked()

Description<br>Checks if the load body generalized is blanked or not. |
| --- |

#### Arguments

No arguments

| Returns
<br>true if blanked, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if load body generalized lbg is blanked:<br>
```
if (lbg.Blanked() ) do_something...
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the load body generalized. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the load body generalized

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for load body generalized lbg:<br>
```
lbg.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the load body generalized. The target include of the copied load body generalized can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>LoadBodyGeneralized object<br>
Return type
<br>LoadBodyGeneralized |
| --- |

| Example
<br>To copy load body generalized lbg into load body generalized z:<br>
```
var z = lbg.Copy();
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a load body generalized. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the load body generalized

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the load body generalized lbg:<br>
```
lbg.DetachComment(c);
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for load body generalized. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for load body generalized lbg:<br>
```
lbg.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first load body generalized in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first load body generalized in

| Returns
<br>LoadBodyGeneralized object (or null if there are no load body generalizeds in the model).<br>
Return type
<br>LoadBodyGeneralized |
| --- |

| Example
<br>To get the first load body generalized in model m:<br>
```
var lbg = LoadBodyGeneralized.First(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the load body generalizeds in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all load body generalizeds will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the load body generalizeds

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the load body generalizeds with flag f in model m:<br>
```
LoadBodyGeneralized.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the load body generalized is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the load body generalized

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if load body generalized lbg has flag f set on it:<br>
```
if (lbg.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each load body generalized in the model.<br> **Note that ForEach has been designed to make looping over load body generalizeds as fast as possible and so has some limitations. Firstly, a single temporary LoadBodyGeneralized object is created and on each function call it is updated with the current load body generalized data. This means that you should not try to store the LoadBodyGeneralized object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new load body generalizeds inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all load body generalizeds are in

* func (function)
 
Function to call for each load body generalized

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the load body generalizeds in model m:<br>
```
LoadBodyGeneralized.ForEach(m, test);
function test(lbg)
{
// lbg is LoadBodyGeneralized object
}
```
<br><br>To call function test for all of the load body generalizeds in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
LoadBodyGeneralized.ForEach(m, test, data);
function test(lbg, extra)
{
// lbg is LoadBodyGeneralized object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of LoadBodyGeneralized objects or properties for all of the load body generalizeds in a model in PRIMER. If the optional property argument is not given then an array of LoadBodyGeneralized objects is returned. If the property argument is given, that property value for each load body generalized is returned in the array instead of a LoadBodyGeneralized object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get load body generalizeds from

* property (optional) (string)
 
Name for property to get for all load body generalizeds in the model

| Returns
<br>Array of LoadBodyGeneralized objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of LoadBodyGeneralized objects for all of the load body generalizeds in model m:<br>
```
var a = LoadBodyGeneralized.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each load body generalized in model m:<br>
```
var a = LoadBodyGeneralized.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a load body generalized. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the load body generalized lbg:<br>
```
var comm_array = lbg.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of LoadBodyGeneralized objects for all of the flagged load body generalizeds in a model in PRIMER If the optional property argument is not given then an array of LoadBodyGeneralized objects is returned. If the property argument is given, then that property value for each load body generalized is returned in the array instead of a LoadBodyGeneralized object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get load body generalizeds from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the load body generalizeds that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged load body generalizeds in the model

| Returns
<br>Array of LoadBodyGeneralized objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of LoadBodyGeneralized objects for all of the load body generalizeds in model m flagged with f:<br>
```
var lbg = LoadBodyGeneralized.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the load body generalizeds in model m flagged with f:<br>
```
var a = LoadBodyGeneralized.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the LoadBodyGeneralized object for a load body generalized ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the load body generalized in

* number (integer)
 
number of the load body generalized you want the LoadBodyGeneralized object for

| Returns
<br>LoadBodyGeneralized object (or null if load body generalized does not exist).<br>
Return type
<br>LoadBodyGeneralized |
| --- |

| Example
<br>To get the LoadBodyGeneralized object for load body generalized 100 in model m<br>
```
var lbg = LoadBodyGeneralized.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a LoadBodyGeneralized property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [LoadBodyGeneralized.ViewParameters()](primer-loadbodygeneralized-class.md#LoadBodyGeneralized::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
load body generalized property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if LoadBodyGeneralized property lbg.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (lbg.GetParameter(lbg.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if LoadBodyGeneralized property lbg.example is a parameter by using the GetParameter method:<br>
```
if (lbg.ViewParameters().GetParameter(lbg.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this load body generalized (\*LOAD\_NODE\_xxxx). **Note that a carriage return is not added**. See also [LoadBodyGeneralized.KeywordCards()](primer-loadbodygeneralized-class.md#LoadBodyGeneralized::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for load body generalized m:<br>
```
var key = m.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the load body generalized. **Note that a carriage return is not added**. See also [LoadBodyGeneralized.Keyword()](primer-loadbodygeneralized-class.md#LoadBodyGeneralized::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for load body generalized l:<br>
```
var cards = l.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last load body generalized in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last load body generalized in

| Returns
<br>LoadBodyGeneralized object (or null if there are no load body generalizeds in the model).<br>
Return type
<br>LoadBodyGeneralized |
| --- |

| Example
<br>To get the last load body generalized in model m:<br>
```
var lbg = LoadBodyGeneralized.Last(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next load body generalized in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>LoadBodyGeneralized object (or null if there are no more load body generalizeds in the model).<br>
Return type
<br>LoadBodyGeneralized |
| --- |

| Example
<br>To get the load body generalized in model m after load body generalized lbg:<br>
```
var lbg = lbg.Next();
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a load body generalized. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only load body generalizeds from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only load body generalizeds that are flagged with *limit* can be selected. If omitted, or null, any load body generalizeds from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[LoadBodyGeneralized](primer-loadbodygeneralized-class.md) object (or null if not picked)<br>
Return type
<br>LoadBodyGeneralized |
| --- |

| Example
<br>To pick a load body generalized from model m giving the prompt 'Pick load body generalized from screen':<br>
```
var lbg = LoadBodyGeneralized.Pick('Pick load body generalized from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous load body generalized in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>LoadBodyGeneralized object (or null if there are no more load body generalizeds in the model).<br>
Return type
<br>LoadBodyGeneralized |
| --- |

| Example
<br>To get the load body generalized in model m before load body generalized lbg:<br>
```
var lbg = lbg.Previous();
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select load body generalizeds using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting load body generalizeds

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only load body generalizeds from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only load body generalizeds that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any load body generalizeds can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of load body generalizeds selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select load body generalizeds from model m, flagging those selected with flag f, giving the prompt 'Select load body generalizeds':<br>
```
LoadBodyGeneralized.Select(f, 'Select load body generalizeds', m);
```
<br><br>To select load body generalizeds, flagging those selected with flag f but limiting selection to load body generalizeds flagged with flag l, giving the prompt 'Select load body generalizeds':<br>
```
LoadBodyGeneralized.Select(f, 'Select load body generalizeds', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the load body generalized. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the load body generalized

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for load body generalized lbg:<br>
```
lbg.SetFlag(f);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the load body generalized. The load body generalized will be sketched until you either call [LoadBodyGeneralized.Unsketch()](primer-loadbodygeneralized-class.md#LoadBodyGeneralized::Unsketch), [LoadBodyGeneralized.UnsketchAll()](primer-loadbodygeneralized-class.md#LoadBodyGeneralized::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the load body generalized is sketched. If omitted redraw is true. If you want to sketch several load body generalizeds and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch load body generalized lbg:<br>
```
lbg.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged load body generalizeds in the model. The load body generalizeds will be sketched until you either call [LoadBodyGeneralized.Unsketch()](primer-loadbodygeneralized-class.md#LoadBodyGeneralized::Unsketch), [LoadBodyGeneralized.UnsketchFlagged()](primer-loadbodygeneralized-class.md#LoadBodyGeneralized::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged load body generalizeds will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the load body generalizeds that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the load body generalizeds are sketched. If omitted redraw is true. If you want to sketch flagged load body generalizeds several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all load body generalizeds flagged with flag in model m:<br>
```
LoadBodyGeneralized.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of load body generalizeds in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing load body generalizeds should be counted. If false or omitted
referenced but undefined load body generalizeds will also be included in the total.

| Returns
<br>number of load body generalizeds<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of load body generalizeds in model m:<br>
```
var total = LoadBodyGeneralized.Total(m);
```
 |
| --- |

* * *

| Unblank()

Description<br>Unblanks the load body generalized |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank load body generalized lbg:<br>
```
lbg.Unblank();
```
 |
| --- |

* * *

| UnblankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the load body generalizeds in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all load body generalizeds will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the load body generalizeds in model m:<br>
```
LoadBodyGeneralized.UnblankAll(m);
```
 |
| --- |

* * *

| UnblankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the flagged load body generalizeds in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the flagged load body generalizeds will be unblanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the load body generalizeds that you want to unblank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the load body generalizeds in model m flagged with f:<br>
```
LoadBodyGeneralized.UnblankFlagged(m, f);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the load body generalizeds in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all load body generalizeds will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the load body generalizeds

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the load body generalizeds in model m:<br>
```
LoadBodyGeneralized.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the load body generalized. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the load body generalized is unsketched. If omitted redraw is true. If you want to unsketch several load body generalizeds and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch load body generalized lbg:<br>
```
lbg.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all load body generalizeds. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all load body generalizeds will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the load body generalizeds are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all load body generalizeds in model m:<br>
```
LoadBodyGeneralized.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged load body generalizeds in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all load body generalizeds will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the load body generalizeds that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the load body generalizeds are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all load body generalizeds flagged with flag in model m:<br>
```
LoadBodyGeneralized.UnsketchAll(m, flag);
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
<br>[LoadBodyGeneralized](primer-loadbodygeneralized-class.md) object.<br>
Return type
<br>LoadBodyGeneralized |
| --- |

| Example
<br>To check if LoadBodyGeneralized property lbg.example is a parameter by using the [LoadBodyGeneralized.GetParameter()](primer-loadbodygeneralized-class.md#LoadBodyGeneralized::GetParameter) method:<br>
```
if (lbg.ViewParameters().GetParameter(lbg.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for load body generalized. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for load body generalized lbg:<br>
```
lbg.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this load body generalized. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for load body generalized lbg:<br>
```
var xrefs = lbg.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the load body generalized data in keyword format. Note that this contains the keyword header and the keyword cards. See also [LoadBodyGeneralized.Keyword()](primer-loadbodygeneralized-class.md#LoadBodyGeneralized::Keyword) and [LoadBodyGeneralized.KeywordCards()](primer-loadbodygeneralized-class.md#LoadBodyGeneralized::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for load body generalized l in keyword format<br>
```
var s = l.toString();
```
 |
| --- |

* * *