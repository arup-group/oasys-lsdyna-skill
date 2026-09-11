# Spc class

The Spc class gives you access to define spc cards in PRIMER. [More...](primer-spc-class.md#Spc_details)

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

* [BlankAll](primer-spc-class.md#Spc::BlankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [BlankFlagged](primer-spc-class.md#Spc::BlankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [First](primer-spc-class.md#Spc::First)(Model*[[Model](primer-model-class.md)]*)
* [FirstFreeLabel](primer-spc-class.md#Spc::FirstFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [FlagAll](primer-spc-class.md#Spc::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-spc-class.md#Spc::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-spc-class.md#Spc::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-spc-class.md#Spc::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-spc-class.md#Spc::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-spc-class.md#Spc::Last)(Model*[[Model](primer-model-class.md)]*)
* [LastFreeLabel](primer-spc-class.md#Spc::LastFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [NextFreeLabel](primer-spc-class.md#Spc::NextFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [Pick](primer-spc-class.md#Spc::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [RenumberAll](primer-spc-class.md#Spc::RenumberAll)(Model*[[Model](primer-model-class.md)]*, start*[integer]*)
* [RenumberFlagged](primer-spc-class.md#Spc::RenumberFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*)
* [Select](primer-spc-class.md#Spc::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-spc-class.md#Spc::SketchFlagged)(type*[integer]*, Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Total](primer-spc-class.md#Spc::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnblankAll](primer-spc-class.md#Spc::UnblankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnblankFlagged](primer-spc-class.md#Spc::UnblankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [UnflagAll](primer-spc-class.md#Spc::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-spc-class.md#Spc::UnsketchAll)(Model*[[Model](primer-model-class.md)]*)
* [UnsketchFlagged](primer-spc-class.md#Spc::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

## Member functions

* [AssociateComment](primer-spc-class.md#Spc::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Blank](primer-spc-class.md#Spc::Blank)()
* [Blanked](primer-spc-class.md#Spc::Blanked)()
* [ClearFlag](primer-spc-class.md#Spc::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-spc-class.md#Spc::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-spc-class.md#Spc::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Error](primer-spc-class.md#Spc::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-spc-class.md#Spc::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-spc-class.md#Spc::GetComments)()
* [GetParameter](primer-spc-class.md#Spc::GetParameter)(prop*[string]*)
* [Keyword](primer-spc-class.md#Spc::Keyword)()
* [KeywordCards](primer-spc-class.md#Spc::KeywordCards)()
* [Next](primer-spc-class.md#Spc::Next)()
* [Previous](primer-spc-class.md#Spc::Previous)()
* [SetFlag](primer-spc-class.md#Spc::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Sketch](primer-spc-class.md#Spc::Sketch)(type*[constant]*, redraw (optional)*[boolean]*)
* [Unblank](primer-spc-class.md#Spc::Unblank)()
* [Unsketch](primer-spc-class.md#Spc::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-spc-class.md#Spc::ViewParameters)()
* [Warning](primer-spc-class.md#Spc::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-spc-class.md#Spc::Xrefs)()
* [toString](primer-spc-class.md#Spc::toString)()

## Spc constants

### Constants for sketching mode

| **Name** | **Description** |
| --- | --- |
| Spc.ROTATIONAL | Sketch rotational degrees of freedom. |
| Spc.TRANSLATIONAL | Sketch translational degrees of freedom. |

### Constants for suffix

| **Name** | **Description** |
| --- | --- |
| Spc.NODE | SPC is \*BOUNDARY\_SPC\_NODE. |
| Spc.SET | SPC is \*BOUNDARY\_SPC\_SET. |

## Spc properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| cid | integer | Coordinate system ID |
| dofrx | integer | Rotational constraint in local x direction |
| dofry | integer | Rotational constraint in local y direction |
| dofrz | integer | Rotational constraint in local z direction |
| dofx | integer | Translational constraint in local x direction |
| dofy | integer | Translational constraint in local y direction |
| dofz | integer | Translational constraint in local z direction |
| exists (read only) | logical | true if boundary SPC exists, false if referred to but not defined. |
| heading | string | [Spc](primer-spc-class.md) heading |
| id | logical | true if \_ID option is set, false if not. |
| include | integer | The [Include](primer-include-class.md) file number that the boundary SPC is in. |
| label | integer | [Spc](primer-spc-class.md) number. |
| model (read only) | integer | The [Model](primer-model-class.md) number that the boundary SPC is in. |
| nid | integer | Node ID or node set ID |
| type | constant | The Spc type. Can be [Spc.NODE](primer-spc-class.md#Spc.NODE) or [Spc.SET](primer-spc-class.md#Spc.SET). |

### Properties for \_BIRTH\_DEATH option

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| bd\_flag | logical | true if \_BIRTH\_DEATH option is set, false if not |
| birth | real | Activation time for constraint |
| death | real | Deactivation time for constraint |

| Detailed Description<br>The Spc class allows you to create, modify, edit and manipulate spc cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new Spc(Model*[[Model](primer-model-class.md)]*, nid*[integer]*, cid*[integer]*, dofx*[integer]*, dofy*[integer]*, dofz*[integer]*, dofrx*[integer]*, dofry*[integer]*, dofrz*[integer]*, type*[constant]*, label (optional)*[integer]*, heading (optional)*[string]*)

Description<br>Create a new [Spc](primer-spc-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that spc will be created in

* nid (integer)
 
Node ID or node set ID

* cid (integer)
 
Coordinate system ID

* dofx (integer)
 
Translational constraint in local x direction

* dofy (integer)
 
Translational constraint in local y direction

* dofz (integer)
 
Translational constraint in local z direction

* dofrx (integer)
 
Rotational constraint in local x direction

* dofry (integer)
 
Rotational constraint in local y direction

* dofrz (integer)
 
Rotational constraint in local z direction

* type (constant)
 
Specify the type of boundary spc (Can be [Spc.NODE](primer-spc-class.md#Spc.NODE) or [Spc.SET](primer-spc-class.md#Spc.SET))

* label (optional) (integer)
 
[Spc](primer-spc-class.md) number

* heading (optional) (string)
 
Title for the spc

| Returns
<br>[Spc](primer-spc-class.md) object<br>
Return type
<br>Spc |
| --- |

| Example
<br>To create a new boundary spc in model m with label 200, of type SET<br>
```
var b = new Spc(m, 200, 0, 1, 0, 0, 1, 0, 0, Spc.SET, 200);
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a boundary SPC. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the boundary SPC

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the boundary SPC s:<br>
```
s.AssociateComment(c);
```
 |
| --- |

* * *

| Blank()

Description<br>Blanks the boundary SPC |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To blank boundary SPC s:<br>
```
s.Blank();
```
 |
| --- |

* * *

| BlankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the boundary SPCs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all boundary SPCs will be blanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the boundary SPCs in model m:<br>
```
Spc.BlankAll(m);
```
 |
| --- |

* * *

| BlankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the flagged boundary SPCs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged boundary SPCs will be blanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the boundary SPCs that you want to blank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the boundary SPCs in model m flagged with f:<br>
```
Spc.BlankFlagged(m, f);
```
 |
| --- |

* * *

| Blanked()

Description<br>Checks if the boundary SPC is blanked or not. |
| --- |

#### Arguments

No arguments

| Returns
<br>true if blanked, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if boundary SPC s is blanked:<br>
```
if (s.Blanked() ) do_something...
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the boundary SPC. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the boundary SPC

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for boundary SPC s:<br>
```
s.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the boundary SPC. The target include of the copied boundary SPC can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>Spc object<br>
Return type
<br>Spc |
| --- |

| Example
<br>To copy boundary SPC s into boundary SPC z:<br>
```
var z = s.Copy();
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a boundary SPC. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the boundary SPC

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the boundary SPC s:<br>
```
s.DetachComment(c);
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for boundary SPC. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for boundary SPC s:<br>
```
s.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first boundary SPC in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first boundary SPC in

| Returns
<br>Spc object (or null if there are no boundary SPCs in the model).<br>
Return type
<br>Spc |
| --- |

| Example
<br>To get the first boundary SPC in model m:<br>
```
var s = Spc.First(m);
```
 |
| --- |

* * *

| FirstFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the first free boundary SPC label in the model. Also see [Spc.LastFreeLabel()](primer-spc-class.md#Spc::LastFreeLabel), [Spc.NextFreeLabel()](primer-spc-class.md#Spc::NextFreeLabel) and [Model.FirstFreeItemLabel()](primer-model-class.md#Model::FirstFreeItemLabel). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first free boundary SPC label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *First free in layer* in editing panels). If omitted the whole model will be used (Equivalent to *First free* in editing panels).

| Returns
<br>Spc label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the first free boundary SPC label in model m:<br>
```
var label = Spc.FirstFreeLabel(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the boundary SPCs in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all boundary SPCs will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the boundary SPCs

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the boundary SPCs with flag f in model m:<br>
```
Spc.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the boundary SPC is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the boundary SPC

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if boundary SPC s has flag f set on it:<br>
```
if (s.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each boundary SPC in the model.<br> **Note that ForEach has been designed to make looping over boundary SPCs as fast as possible and so has some limitations. Firstly, a single temporary Spc object is created and on each function call it is updated with the current boundary SPC data. This means that you should not try to store the Spc object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new boundary SPCs inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all boundary SPCs are in

* func (function)
 
Function to call for each boundary SPC

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the boundary SPCs in model m:<br>
```
Spc.ForEach(m, test);
function test(s)
{
// s is Spc object
}
```
<br><br>To call function test for all of the boundary SPCs in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
Spc.ForEach(m, test, data);
function test(s, extra)
{
// s is Spc object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Spc objects or properties for all of the boundary SPCs in a model in PRIMER. If the optional property argument is not given then an array of Spc objects is returned. If the property argument is given, that property value for each boundary SPC is returned in the array instead of a Spc object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get boundary SPCs from

* property (optional) (string)
 
Name for property to get for all boundary SPCs in the model

| Returns
<br>Array of Spc objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Spc objects for all of the boundary SPCs in model m:<br>
```
var a = Spc.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each boundary SPC in model m:<br>
```
var a = Spc.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a boundary SPC. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the boundary SPC s:<br>
```
var comm_array = s.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Spc objects for all of the flagged boundary SPCs in a model in PRIMER If the optional property argument is not given then an array of Spc objects is returned. If the property argument is given, then that property value for each boundary SPC is returned in the array instead of a Spc object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get boundary SPCs from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the boundary SPCs that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged boundary SPCs in the model

| Returns
<br>Array of Spc objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Spc objects for all of the boundary SPCs in model m flagged with f:<br>
```
var s = Spc.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the boundary SPCs in model m flagged with f:<br>
```
var a = Spc.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the Spc object for a boundary SPC ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the boundary SPC in

* number (integer)
 
number of the boundary SPC you want the Spc object for

| Returns
<br>Spc object (or null if boundary SPC does not exist).<br>
Return type
<br>Spc |
| --- |

| Example
<br>To get the Spc object for boundary SPC 100 in model m<br>
```
var s = Spc.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a Spc property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [Spc.ViewParameters()](primer-spc-class.md#Spc::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
boundary SPC property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if Spc property s.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (s.GetParameter(s.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if Spc property s.example is a parameter by using the GetParameter method:<br>
```
if (s.ViewParameters().GetParameter(s.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this spc (\*BOUNDARY\_SPC\_xxxx). **Note that a carriage return is not added**. See also [Spc.KeywordCards()](primer-spc-class.md#Spc::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for spc s:<br>
```
var key = s.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the spc. **Note that a carriage return is not added**. See also [Spc.Keyword()](primer-spc-class.md#Spc::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for spc s:<br>
```
var cards = s.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last boundary SPC in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last boundary SPC in

| Returns
<br>Spc object (or null if there are no boundary SPCs in the model).<br>
Return type
<br>Spc |
| --- |

| Example
<br>To get the last boundary SPC in model m:<br>
```
var s = Spc.Last(m);
```
 |
| --- |

* * *

| LastFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the last free boundary SPC label in the model. Also see [Spc.FirstFreeLabel()](primer-spc-class.md#Spc::FirstFreeLabel), [Spc.NextFreeLabel()](primer-spc-class.md#Spc::NextFreeLabel) and see [Model.LastFreeItemLabel()](primer-model-class.md#Model::LastFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last free boundary SPC label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest free in layer* in editing panels). If omitted the whole model will be used.

| Returns
<br>Spc label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the last free boundary SPC label in model m:<br>
```
var label = Spc.LastFreeLabel(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next boundary SPC in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Spc object (or null if there are no more boundary SPCs in the model).<br>
Return type
<br>Spc |
| --- |

| Example
<br>To get the boundary SPC in model m after boundary SPC s:<br>
```
var s = s.Next();
```
 |
| --- |

* * *

| NextFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the next free (highest+1) boundary SPC label in the model. Also see [Spc.FirstFreeLabel()](primer-spc-class.md#Spc::FirstFreeLabel), [Spc.LastFreeLabel()](primer-spc-class.md#Spc::LastFreeLabel) and [Model.NextFreeItemLabel()](primer-model-class.md#Model::NextFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get next free boundary SPC label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest+1 in layer* in editing panels). If omitted the whole model will be used (Equivalent to *Highest+1* in editing panels).

| Returns
<br>Spc label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the next free boundary SPC label in model m:<br>
```
var label = Spc.NextFreeLabel(m);
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a boundary SPC. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only boundary SPCs from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only boundary SPCs that are flagged with *limit* can be selected. If omitted, or null, any boundary SPCs from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[Spc](primer-spc-class.md) object (or null if not picked)<br>
Return type
<br>Spc |
| --- |

| Example
<br>To pick a boundary SPC from model m giving the prompt 'Pick boundary SPC from screen':<br>
```
var s = Spc.Pick('Pick boundary SPC from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous boundary SPC in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Spc object (or null if there are no more boundary SPCs in the model).<br>
Return type
<br>Spc |
| --- |

| Example
<br>To get the boundary SPC in model m before boundary SPC s:<br>
```
var s = s.Previous();
```
 |
| --- |

* * *

| RenumberAll(Model*[[Model](primer-model-class.md)]*, start*[integer]*) [static]
Description<br>Renumbers all of the boundary SPCs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all boundary SPCs will be renumbered in

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the boundary SPCs in model m, from 1000000:<br>
```
Spc.RenumberAll(m, 1000000);
```
 |
| --- |

* * *

| RenumberFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*) [static]
Description<br>Renumbers all of the flagged boundary SPCs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged boundary SPCs will be renumbered in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the boundary SPCs that you want to renumber

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the boundary SPCs in model m flagged with f, from 1000000:<br>
```
Spc.RenumberFlagged(m, f, 1000000);
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select boundary SPCs using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting boundary SPCs

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only boundary SPCs from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only boundary SPCs that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any boundary SPCs can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of boundary SPCs selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select boundary SPCs from model m, flagging those selected with flag f, giving the prompt 'Select boundary SPCs':<br>
```
Spc.Select(f, 'Select boundary SPCs', m);
```
<br><br>To select boundary SPCs, flagging those selected with flag f but limiting selection to boundary SPCs flagged with flag l, giving the prompt 'Select boundary SPCs':<br>
```
Spc.Select(f, 'Select boundary SPCs', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the boundary SPC. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the boundary SPC

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for boundary SPC s:<br>
```
s.SetFlag(f);
```
 |
| --- |

* * *

| Sketch(type*[constant]*, redraw (optional)*[boolean]*)

Description<br>Sketches the Boundary SPC. The SPC will be sketched until you do a graphics update or delete the model |
| --- |

#### Arguments

* type (constant)
 
Type of constraints to be drawn. Can be [Spc.TRANSLATIONAL](primer-spc-class.md#Spc.TRANSLATIONAL) or [Spc.ROTATIONAL](primer-spc-class.md#Spc.ROTATIONAL).

* redraw (optional) (boolean)
 
If set to true (or omitted) the plot will be redrawn each time. If sketching a large number of items, efficiency will be gained by setting the argument to false for all but the last item sketched. The final call will redraw.

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch SPC s - Translational constraint<br>
```
s1.Sketch(Spc.TRANSLATIONAL, false);
s2.Sketch(Spc.TRANSLATIONAL, false);
s3.Sketch(Spc.TRANSLATIONAL, true);
    
```
 |
| --- |

* * *

| SketchFlagged(type*[integer]*, Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Sketches all the flagged boundary SPCs in the model and update the plot. The SPCs will be sketched until you do a graphics update or delete the model. |
| --- |

#### Arguments

* type (integer)
 
Type of constraints to be drawn. Can be [Spc.TRANSLATIONAL](primer-spc-class.md#Spc.TRANSLATIONAL) or [Spc.ROTATIONAL](primer-spc-class.md#Spc.ROTATIONAL).

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged boundary SPCs will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the boundary SPCs that you want to sketch

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch translational SPCs flagged with f in model m and redraw<br>
```
Spc.SketchFlagged(Spc.TRANSLATIONAL, m, f);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of boundary SPCs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing boundary SPCs should be counted. If false or omitted
referenced but undefined boundary SPCs will also be included in the total.

| Returns
<br>number of boundary SPCs<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of boundary SPCs in model m:<br>
```
var total = Spc.Total(m);
```
 |
| --- |

* * *

| Unblank()

Description<br>Unblanks the boundary SPC |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank boundary SPC s:<br>
```
s.Unblank();
```
 |
| --- |

* * *

| UnblankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the boundary SPCs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all boundary SPCs will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the boundary SPCs in model m:<br>
```
Spc.UnblankAll(m);
```
 |
| --- |

* * *

| UnblankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the flagged boundary SPCs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the flagged boundary SPCs will be unblanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the boundary SPCs that you want to unblank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the boundary SPCs in model m flagged with f:<br>
```
Spc.UnblankFlagged(m, f);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the boundary SPCs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all boundary SPCs will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the boundary SPCs

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the boundary SPCs in model m:<br>
```
Spc.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the Spc. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If set to true (or omitted) the plot will be redrawn each time. If unsketching a large number of items, efficiency will be gained by setting the argument to false for all but the last item unsketched. The final call will redraw.

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch SPC s:<br>
```
s.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Unsketches all SPCs. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all SPCs will be unblanked in

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all SPCs in model m and redraw:<br>
```
SPC.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsketches all flagged SPCs. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all SPCs will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the SPCs that you want to unsketch

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all SPCs in model m which are flagged with f and redraw:<br>
```
SPC.UnsketchFlagged(m, f);
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
<br>[Spc](primer-spc-class.md) object.<br>
Return type
<br>Spc |
| --- |

| Example
<br>To check if Spc property s.example is a parameter by using the [Spc.GetParameter()](primer-spc-class.md#Spc::GetParameter) method:<br>
```
if (s.ViewParameters().GetParameter(s.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for boundary SPC. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for boundary SPC s:<br>
```
s.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this boundary SPC. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for boundary SPC s:<br>
```
var xrefs = s.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the spc data in keyword format. Note that this contains the keyword header and the keyword cards. See also [Spc.Keyword()](primer-spc-class.md#Spc::Keyword) and [Spc.KeywordCards()](primer-spc-class.md#Spc::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for spc s in keyword format<br>
```
var str = s.toString();
```
 |
| --- |

* * *