# VelocityGeneration class

The VelocityGeneration class gives you access to define initial velocity generation cards in PRIMER. [More...](primer-velocitygeneration-class.md#VelocityGeneration_details)

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

* [BlankAll](primer-velocitygeneration-class.md#VelocityGeneration::BlankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [BlankFlagged](primer-velocitygeneration-class.md#VelocityGeneration::BlankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Create](primer-velocitygeneration-class.md#VelocityGeneration::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [First](primer-velocitygeneration-class.md#VelocityGeneration::First)(Model*[[Model](primer-model-class.md)]*)
* [FlagAll](primer-velocitygeneration-class.md#VelocityGeneration::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-velocitygeneration-class.md#VelocityGeneration::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-velocitygeneration-class.md#VelocityGeneration::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-velocitygeneration-class.md#VelocityGeneration::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-velocitygeneration-class.md#VelocityGeneration::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-velocitygeneration-class.md#VelocityGeneration::Last)(Model*[[Model](primer-model-class.md)]*)
* [Pick](primer-velocitygeneration-class.md#VelocityGeneration::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [Select](primer-velocitygeneration-class.md#VelocityGeneration::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-velocitygeneration-class.md#VelocityGeneration::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-velocitygeneration-class.md#VelocityGeneration::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnblankAll](primer-velocitygeneration-class.md#VelocityGeneration::UnblankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnblankFlagged](primer-velocitygeneration-class.md#VelocityGeneration::UnblankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [UnflagAll](primer-velocitygeneration-class.md#VelocityGeneration::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-velocitygeneration-class.md#VelocityGeneration::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-velocitygeneration-class.md#VelocityGeneration::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-velocitygeneration-class.md#VelocityGeneration::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Blank](primer-velocitygeneration-class.md#VelocityGeneration::Blank)()
* [Blanked](primer-velocitygeneration-class.md#VelocityGeneration::Blanked)()
* [Browse](primer-velocitygeneration-class.md#VelocityGeneration::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-velocitygeneration-class.md#VelocityGeneration::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-velocitygeneration-class.md#VelocityGeneration::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-velocitygeneration-class.md#VelocityGeneration::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-velocitygeneration-class.md#VelocityGeneration::Edit)(modal (optional)*[boolean]*)
* [Error](primer-velocitygeneration-class.md#VelocityGeneration::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-velocitygeneration-class.md#VelocityGeneration::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-velocitygeneration-class.md#VelocityGeneration::GetComments)()
* [GetParameter](primer-velocitygeneration-class.md#VelocityGeneration::GetParameter)(prop*[string]*)
* [Keyword](primer-velocitygeneration-class.md#VelocityGeneration::Keyword)()
* [KeywordCards](primer-velocitygeneration-class.md#VelocityGeneration::KeywordCards)()
* [Next](primer-velocitygeneration-class.md#VelocityGeneration::Next)()
* [Previous](primer-velocitygeneration-class.md#VelocityGeneration::Previous)()
* [SetFlag](primer-velocitygeneration-class.md#VelocityGeneration::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Sketch](primer-velocitygeneration-class.md#VelocityGeneration::Sketch)(redraw (optional)*[boolean]*)
* [Unblank](primer-velocitygeneration-class.md#VelocityGeneration::Unblank)()
* [Unsketch](primer-velocitygeneration-class.md#VelocityGeneration::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-velocitygeneration-class.md#VelocityGeneration::ViewParameters)()
* [Warning](primer-velocitygeneration-class.md#VelocityGeneration::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-velocitygeneration-class.md#VelocityGeneration::Xrefs)()
* [toString](primer-velocitygeneration-class.md#VelocityGeneration::toString)()

## VelocityGeneration constants

| **Name** | **Description** |
| --- | --- |
| VelocityGeneration.NODE\_SET | ID is a NODE\_SET |
| VelocityGeneration.PART | ID is a PART |
| VelocityGeneration.PART\_SET | ID is a PART\_SET |

## VelocityGeneration properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists (read only) | logical | true if initial velocity generation exists, false if referred to but not defined. |
| icid | integer | Local coordinate system |
| id | integer | [Set](primer-set-class.md) Part ID, Part set ID or Node set ID |
| include | integer | The [Include](primer-include-class.md) file number that the initial velocity generation is in. |
| irigid | integer | Overide part inertia flag |
| ivatn | integer | Tracked parts flag |
| model (read only) | integer | The [Model](primer-model-class.md) number that the initial velocity generation is in. |
| nx | real | x-direction cosine |
| ny | real | y-direction cosine |
| nz | real | z-direction cosine |
| omega | real | Angular velocity about the rotational axis |
| phase | integer | Dynamic relaxation flag |
| type | constant | Specify the type of Velocity generation (Can be [VelocityGeneration.PART_SET](primer-velocitygeneration-class.md#VelocityGeneration.PART_SET) or [VelocityGeneration.PART](primer-velocitygeneration-class.md#VelocityGeneration.PART) or [VelocityGeneration.NODE_SET](primer-velocitygeneration-class.md#VelocityGeneration.NODE_SET)) |
| vx | real | Initial translational velocity in X direction |
| vy | real | Initial translational velocity in Y direction |
| vz | real | Initial translational velocity in Z direction |
| xc | real | x-coordinate on rotational axis |
| yc | real | y-coordinate on rotational axis |
| zc | real | z-coordinate on rotational axis |

| Detailed Description<br>The VelocityGeneration class allows you to create, modify, edit and manipulate velocity cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new VelocityGeneration(Model*[[Model](primer-model-class.md)]*, type*[constant]*, id*[integer]*, omega*[real]*, vx*[real]*, vy*[real]*, vz*[real]*, ivatn*[integer]*, xc*[real]*, yc*[real]*, zc*[real]*, nx*[real]*, ny*[real]*, nz*[real]*, phase*[integer]*, irigid*[integer]*, icid*[integer]*)

Description<br>Create a new [VelocityGeneration](primer-velocitygeneration-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that velocity will be created in

* type (constant)
 
Specify the type of Velocity generation (Can be [VelocityGeneration.PART_SET](primer-velocitygeneration-class.md#VelocityGeneration.PART_SET) or [VelocityGeneration.PART](primer-velocitygeneration-class.md#VelocityGeneration.PART) or [VelocityGeneration.NODE_SET](primer-velocitygeneration-class.md#VelocityGeneration.NODE_SET))

* id (integer)
 
[Set](primer-set-class.md) Part ID, Part set ID or Node set ID

* omega (real)
 
Angular velocity about the rotational axis

* vx (real)
 
Initial translational velocity in X direction

* vy (real)
 
Initial translational velocity in Y direction

* vz (real)
 
Initial translational velocity in Z direction

* ivatn (integer)
 
Tracked parts flag

* xc (real)
 
x-coordinate on rotational axis

* yc (real)
 
y-coordinate on rotational axis

* zc (real)
 
z-coordinate on rotational axis

* nx (real)
 
x-direction cosine

* ny (real)
 
y-direction cosine

* nz (real)
 
z-direction cosine

* phase (integer)
 
Dynamic relaxation flag

* irigid (integer)
 
Overide part inertia flag

* icid (integer)
 
Local coordinate system

| Returns
<br>[VelocityGeneration](primer-velocitygeneration-class.md) object<br>
Return type
<br>VelocityGeneration |
| --- |

| Example
<br>To create a new velocity in model m<br>
```
var s = new VelocityGeneration(m, VelocityGeneration.PART, 500, 3.4, 2.4, 3.7, 7.9, 0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1, 0);
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a initial velocity generation. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the initial velocity generation

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the initial velocity generation ivg:<br>
```
ivg.AssociateComment(c);
```
 |
| --- |

* * *

| Blank()

Description<br>Blanks the initial velocity generation |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To blank initial velocity generation ivg:<br>
```
ivg.Blank();
```
 |
| --- |

* * *

| BlankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the initial velocity generations in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all initial velocity generations will be blanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the initial velocity generations in model m:<br>
```
VelocityGeneration.BlankAll(m);
```
 |
| --- |

* * *

| BlankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the flagged initial velocity generations in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged initial velocity generations will be blanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the initial velocity generations that you want to blank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the initial velocity generations in model m flagged with f:<br>
```
VelocityGeneration.BlankFlagged(m, f);
```
 |
| --- |

* * *

| Blanked()

Description<br>Checks if the initial velocity generation is blanked or not. |
| --- |

#### Arguments

No arguments

| Returns
<br>true if blanked, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if initial velocity generation ivg is blanked:<br>
```
if (ivg.Blanked() ) do_something...
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
<br>To Browse initial velocity generation ivg:<br>
```
ivg.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the initial velocity generation. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the initial velocity generation

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for initial velocity generation ivg:<br>
```
ivg.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the initial velocity generation. The target include of the copied initial velocity generation can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>VelocityGeneration object<br>
Return type
<br>VelocityGeneration |
| --- |

| Example
<br>To copy initial velocity generation ivg into initial velocity generation z:<br>
```
var z = ivg.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a initial velocity generation |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the initial velocity generation will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>VelocityGeneration object (or null if not made).<br>
Return type
<br>VelocityGeneration |
| --- |

| Example
<br>To start creating a initial velocity generation in model m:<br>
```
var ivg = VelocityGeneration.Create(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a initial velocity generation. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the initial velocity generation

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the initial velocity generation ivg:<br>
```
ivg.DetachComment(c);
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
<br>To Edit initial velocity generation ivg:<br>
```
ivg.Edit();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for initial velocity generation. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for initial velocity generation ivg:<br>
```
ivg.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first initial velocity generation in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first initial velocity generation in

| Returns
<br>VelocityGeneration object (or null if there are no initial velocity generations in the model).<br>
Return type
<br>VelocityGeneration |
| --- |

| Example
<br>To get the first initial velocity generation in model m:<br>
```
var ivg = VelocityGeneration.First(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the initial velocity generations in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all initial velocity generations will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the initial velocity generations

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the initial velocity generations with flag f in model m:<br>
```
VelocityGeneration.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the initial velocity generation is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the initial velocity generation

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if initial velocity generation ivg has flag f set on it:<br>
```
if (ivg.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each initial velocity generation in the model.<br> **Note that ForEach has been designed to make looping over initial velocity generations as fast as possible and so has some limitations. Firstly, a single temporary VelocityGeneration object is created and on each function call it is updated with the current initial velocity generation data. This means that you should not try to store the VelocityGeneration object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new initial velocity generations inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all initial velocity generations are in

* func (function)
 
Function to call for each initial velocity generation

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the initial velocity generations in model m:<br>
```
VelocityGeneration.ForEach(m, test);
function test(ivg)
{
// ivg is VelocityGeneration object
}
```
<br><br>To call function test for all of the initial velocity generations in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
VelocityGeneration.ForEach(m, test, data);
function test(ivg, extra)
{
// ivg is VelocityGeneration object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of VelocityGeneration objects or properties for all of the initial velocity generations in a model in PRIMER. If the optional property argument is not given then an array of VelocityGeneration objects is returned. If the property argument is given, that property value for each initial velocity generation is returned in the array instead of a VelocityGeneration object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get initial velocity generations from

* property (optional) (string)
 
Name for property to get for all initial velocity generations in the model

| Returns
<br>Array of VelocityGeneration objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of VelocityGeneration objects for all of the initial velocity generations in model m:<br>
```
var a = VelocityGeneration.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each initial velocity generation in model m:<br>
```
var a = VelocityGeneration.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a initial velocity generation. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the initial velocity generation ivg:<br>
```
var comm_array = ivg.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of VelocityGeneration objects for all of the flagged initial velocity generations in a model in PRIMER If the optional property argument is not given then an array of VelocityGeneration objects is returned. If the property argument is given, then that property value for each initial velocity generation is returned in the array instead of a VelocityGeneration object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get initial velocity generations from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the initial velocity generations that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged initial velocity generations in the model

| Returns
<br>Array of VelocityGeneration objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of VelocityGeneration objects for all of the initial velocity generations in model m flagged with f:<br>
```
var ivg = VelocityGeneration.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the initial velocity generations in model m flagged with f:<br>
```
var a = VelocityGeneration.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the VelocityGeneration object for a initial velocity generation ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the initial velocity generation in

* number (integer)
 
number of the initial velocity generation you want the VelocityGeneration object for

| Returns
<br>VelocityGeneration object (or null if initial velocity generation does not exist).<br>
Return type
<br>VelocityGeneration |
| --- |

| Example
<br>To get the VelocityGeneration object for initial velocity generation 100 in model m<br>
```
var ivg = VelocityGeneration.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a VelocityGeneration property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [VelocityGeneration.ViewParameters()](primer-velocitygeneration-class.md#VelocityGeneration::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
initial velocity generation property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if VelocityGeneration property ivg.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (ivg.GetParameter(ivg.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if VelocityGeneration property ivg.example is a parameter by using the GetParameter method:<br>
```
if (ivg.ViewParameters().GetParameter(ivg.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this initial velocity (\*INITIAL\_VELOCITY\_GENERATION). **Note that a carriage return is not added**. See also [VelocityGeneration.KeywordCards()](primer-velocitygeneration-class.md#VelocityGeneration::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for velocity i:<br>
```
var key = i.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the initial velocity\_generation. **Note that a carriage return is not added**. See also [VelocityGeneration.Keyword()](primer-velocitygeneration-class.md#VelocityGeneration::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for velocity i:<br>
```
var cards = i.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last initial velocity generation in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last initial velocity generation in

| Returns
<br>VelocityGeneration object (or null if there are no initial velocity generations in the model).<br>
Return type
<br>VelocityGeneration |
| --- |

| Example
<br>To get the last initial velocity generation in model m:<br>
```
var ivg = VelocityGeneration.Last(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next initial velocity generation in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>VelocityGeneration object (or null if there are no more initial velocity generations in the model).<br>
Return type
<br>VelocityGeneration |
| --- |

| Example
<br>To get the initial velocity generation in model m after initial velocity generation ivg:<br>
```
var ivg = ivg.Next();
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a initial velocity generation. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only initial velocity generations from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only initial velocity generations that are flagged with *limit* can be selected. If omitted, or null, any initial velocity generations from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[VelocityGeneration](primer-velocitygeneration-class.md) object (or null if not picked)<br>
Return type
<br>VelocityGeneration |
| --- |

| Example
<br>To pick a initial velocity generation from model m giving the prompt 'Pick initial velocity generation from screen':<br>
```
var ivg = VelocityGeneration.Pick('Pick initial velocity generation from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous initial velocity generation in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>VelocityGeneration object (or null if there are no more initial velocity generations in the model).<br>
Return type
<br>VelocityGeneration |
| --- |

| Example
<br>To get the initial velocity generation in model m before initial velocity generation ivg:<br>
```
var ivg = ivg.Previous();
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select initial velocity generations using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting initial velocity generations

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only initial velocity generations from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only initial velocity generations that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any initial velocity generations can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of initial velocity generations selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select initial velocity generations from model m, flagging those selected with flag f, giving the prompt 'Select initial velocity generations':<br>
```
VelocityGeneration.Select(f, 'Select initial velocity generations', m);
```
<br><br>To select initial velocity generations, flagging those selected with flag f but limiting selection to initial velocity generations flagged with flag l, giving the prompt 'Select initial velocity generations':<br>
```
VelocityGeneration.Select(f, 'Select initial velocity generations', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the initial velocity generation. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the initial velocity generation

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for initial velocity generation ivg:<br>
```
ivg.SetFlag(f);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the initial velocity generation. The initial velocity generation will be sketched until you either call [VelocityGeneration.Unsketch()](primer-velocitygeneration-class.md#VelocityGeneration::Unsketch), [VelocityGeneration.UnsketchAll()](primer-velocitygeneration-class.md#VelocityGeneration::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the initial velocity generation is sketched. If omitted redraw is true. If you want to sketch several initial velocity generations and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch initial velocity generation ivg:<br>
```
ivg.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged initial velocity generations in the model. The initial velocity generations will be sketched until you either call [VelocityGeneration.Unsketch()](primer-velocitygeneration-class.md#VelocityGeneration::Unsketch), [VelocityGeneration.UnsketchFlagged()](primer-velocitygeneration-class.md#VelocityGeneration::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged initial velocity generations will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the initial velocity generations that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the initial velocity generations are sketched. If omitted redraw is true. If you want to sketch flagged initial velocity generations several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all initial velocity generations flagged with flag in model m:<br>
```
VelocityGeneration.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of initial velocity generations in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing initial velocity generations should be counted. If false or omitted
referenced but undefined initial velocity generations will also be included in the total.

| Returns
<br>number of initial velocity generations<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of initial velocity generations in model m:<br>
```
var total = VelocityGeneration.Total(m);
```
 |
| --- |

* * *

| Unblank()

Description<br>Unblanks the initial velocity generation |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank initial velocity generation ivg:<br>
```
ivg.Unblank();
```
 |
| --- |

* * *

| UnblankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the initial velocity generations in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all initial velocity generations will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the initial velocity generations in model m:<br>
```
VelocityGeneration.UnblankAll(m);
```
 |
| --- |

* * *

| UnblankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the flagged initial velocity generations in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the flagged initial velocity generations will be unblanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the initial velocity generations that you want to unblank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the initial velocity generations in model m flagged with f:<br>
```
VelocityGeneration.UnblankFlagged(m, f);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the initial velocity generations in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all initial velocity generations will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the initial velocity generations

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the initial velocity generations in model m:<br>
```
VelocityGeneration.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the initial velocity generation. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the initial velocity generation is unsketched. If omitted redraw is true. If you want to unsketch several initial velocity generations and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch initial velocity generation ivg:<br>
```
ivg.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all initial velocity generations. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all initial velocity generations will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the initial velocity generations are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all initial velocity generations in model m:<br>
```
VelocityGeneration.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged initial velocity generations in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all initial velocity generations will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the initial velocity generations that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the initial velocity generations are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all initial velocity generations flagged with flag in model m:<br>
```
VelocityGeneration.UnsketchAll(m, flag);
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
<br>[VelocityGeneration](primer-velocitygeneration-class.md) object.<br>
Return type
<br>VelocityGeneration |
| --- |

| Example
<br>To check if VelocityGeneration property ivg.example is a parameter by using the [VelocityGeneration.GetParameter()](primer-velocitygeneration-class.md#VelocityGeneration::GetParameter) method:<br>
```
if (ivg.ViewParameters().GetParameter(ivg.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for initial velocity generation. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for initial velocity generation ivg:<br>
```
ivg.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this initial velocity generation. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for initial velocity generation ivg:<br>
```
var xrefs = ivg.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the initial velocity data in keyword format. Note that this contains the keyword header and the keyword cards. See also [VelocityGeneration.Keyword()](primer-velocitygeneration-class.md#VelocityGeneration::Keyword) and [VelocityGeneration.KeywordCards()](primer-velocitygeneration-class.md#VelocityGeneration::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for velocity i in keyword format<br>
```
var s = i.toString();
```
 |
| --- |

* * *