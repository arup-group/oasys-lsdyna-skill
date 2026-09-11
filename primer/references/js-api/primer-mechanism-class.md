# Mechanism class

The Mechanism class gives you access to mechanism cards in PRIMER. [More...](primer-mechanism-class.md#Mechanism_details)

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

* [BlankAll](primer-mechanism-class.md#Mechanism::BlankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [BlankFlagged](primer-mechanism-class.md#Mechanism::BlankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [First](primer-mechanism-class.md#Mechanism::First)(Model*[[Model](primer-model-class.md)]*)
* [FirstFreeLabel](primer-mechanism-class.md#Mechanism::FirstFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [FlagAll](primer-mechanism-class.md#Mechanism::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-mechanism-class.md#Mechanism::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-mechanism-class.md#Mechanism::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-mechanism-class.md#Mechanism::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-mechanism-class.md#Mechanism::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-mechanism-class.md#Mechanism::Last)(Model*[[Model](primer-model-class.md)]*)
* [LastFreeLabel](primer-mechanism-class.md#Mechanism::LastFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [NextFreeLabel](primer-mechanism-class.md#Mechanism::NextFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [Pick](primer-mechanism-class.md#Mechanism::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [RenumberAll](primer-mechanism-class.md#Mechanism::RenumberAll)(Model*[[Model](primer-model-class.md)]*, start*[integer]*)
* [RenumberFlagged](primer-mechanism-class.md#Mechanism::RenumberFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*)
* [Select](primer-mechanism-class.md#Mechanism::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-mechanism-class.md#Mechanism::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-mechanism-class.md#Mechanism::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnblankAll](primer-mechanism-class.md#Mechanism::UnblankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnblankFlagged](primer-mechanism-class.md#Mechanism::UnblankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [UnflagAll](primer-mechanism-class.md#Mechanism::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-mechanism-class.md#Mechanism::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-mechanism-class.md#Mechanism::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AddNodeSetToAssembly](primer-mechanism-class.md#Mechanism::AddNodeSetToAssembly)(index*[integer]*, nsid*[integer]*)
* [AddPartSetToAssembly](primer-mechanism-class.md#Mechanism::AddPartSetToAssembly)(index*[integer]*, psid*[integer]*)
* [AddPartToAssembly](primer-mechanism-class.md#Mechanism::AddPartToAssembly)(index*[integer]*, pid*[integer]*)
* [AssociateComment](primer-mechanism-class.md#Mechanism::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Blank](primer-mechanism-class.md#Mechanism::Blank)()
* [Blanked](primer-mechanism-class.md#Mechanism::Blanked)()
* [ClearFlag](primer-mechanism-class.md#Mechanism::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-mechanism-class.md#Mechanism::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-mechanism-class.md#Mechanism::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Error](primer-mechanism-class.md#Mechanism::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-mechanism-class.md#Mechanism::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetAssembly](primer-mechanism-class.md#Mechanism::GetAssembly)(index*[integer]*)
* [GetComments](primer-mechanism-class.md#Mechanism::GetComments)()
* [GetConnection](primer-mechanism-class.md#Mechanism::GetConnection)(index*[integer]*)
* [GetParameter](primer-mechanism-class.md#Mechanism::GetParameter)(prop*[string]*)
* [GetPoint](primer-mechanism-class.md#Mechanism::GetPoint)(index*[integer]*)
* [GetPointData](primer-mechanism-class.md#Mechanism::GetPointData)(rpt*[integer]*)
* [GetPointTitle](primer-mechanism-class.md#Mechanism::GetPointTitle)(rpt*[integer]*)
* [Next](primer-mechanism-class.md#Mechanism::Next)()
* [Previous](primer-mechanism-class.md#Mechanism::Previous)()
* [RemoveConnection](primer-mechanism-class.md#Mechanism::RemoveConnection)(index*[integer]*)
* [RemoveNodeSetFromAssembly](primer-mechanism-class.md#Mechanism::RemoveNodeSetFromAssembly)(index*[integer]*, nsid*[integer]*)
* [RemovePartFromAssembly](primer-mechanism-class.md#Mechanism::RemovePartFromAssembly)(index*[integer]*, pid*[integer]*)
* [RemovePartSetFromAssembly](primer-mechanism-class.md#Mechanism::RemovePartSetFromAssembly)(index*[integer]*, psid*[integer]*)
* [RemovePoint](primer-mechanism-class.md#Mechanism::RemovePoint)(index*[integer]*)
* [SetConnection](primer-mechanism-class.md#Mechanism::SetConnection)(index*[integer]*, data*[object]*)
* [SetFlag](primer-mechanism-class.md#Mechanism::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [SetPoint](primer-mechanism-class.md#Mechanism::SetPoint)(index*[integer]*, data*[object]*)
* [Sketch](primer-mechanism-class.md#Mechanism::Sketch)(redraw (optional)*[boolean]*)
* [Unblank](primer-mechanism-class.md#Mechanism::Unblank)()
* [Unsketch](primer-mechanism-class.md#Mechanism::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-mechanism-class.md#Mechanism::ViewParameters)()
* [Warning](primer-mechanism-class.md#Mechanism::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-mechanism-class.md#Mechanism::Xrefs)()

## Mechanism constants

### Constants for Connection types

| **Name** | **Description** |
| --- | --- |
| Mechanism.COUPLER | Coupler mechanism connection |
| Mechanism.HINGE | Hinge mechanism connection |
| Mechanism.LINE | Line mechanism connection |
| Mechanism.PIN | Pin mechanism connection |

### Constants for Coupler modes

| **Name** | **Description** |
| --- | --- |
| Mechanism.ROTATION | Rotational coupling on mechanism coupler |
| Mechanism.TRANSLATION | Translational coupling on mechanism coupler |

## Mechanism properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| assemblies (read only) | integer | Number of assemblies defined. |
| connections (read only) | integer | Number of connections defined. |
| exists (read only) | logical | true if mechanism exists, false if referred to but not defined. |
| id (read only) | integer | [Mechanism](primer-mechanism-class.md) number. Also see the [label](primer-mechanism-class.md#label) property which is an alternative name for this. |
| include | integer | The [Include](primer-include-class.md) file number that the mechanism is in. |
| label (read only) | integer | [Mechanism](primer-mechanism-class.md) number. Also see the [id](primer-mechanism-class.md#id) property which is an alternative name for this. |
| model (read only) | integer | The [Model](primer-model-class.md) number that the mechanism is in. |
| points (read only) | integer | Number of reference points defined. |
| title | string | [Mechanism](primer-mechanism-class.md) title. |

| Detailed Description<br>The Mechanism class allows you to create, modify, edit and manipulate mechanism cards.<br>See the documentation below for more details. |
| --- |

| Details of functions 
AddNodeSetToAssembly(index*[integer]*, nsid*[integer]*)

Description<br>Add node set to assembly |
| --- |

#### Arguments

* index (integer)
 
The index of the assembly in which you want to add node set. **Note that reference points start at 0, not 1**. 0 &lt;= index &lt; [assemblies](primer-mechanism-class.md#assemblies)

* nsid (integer)
 
The node set ID that you want to add.

| Returns
<br>No return value |
| --- |

| Example
<br>To add node set 3 in 3rd assembly in mechanism m:<br>
```
m.AddNodeSetToAssembly(2,3);
```
 |
| --- |

* * *

| AddPartSetToAssembly(index*[integer]*, psid*[integer]*)

Description<br>Add part set to assembly |
| --- |

#### Arguments

* index (integer)
 
The index of the assembly in which you want to add part set. **Note that reference points start at 0, not 1**. 0 &lt;= index &lt; [assemblies](primer-mechanism-class.md#assemblies)

* psid (integer)
 
The part set ID that you want to add.

| Returns
<br>No return value |
| --- |

| Example
<br>To add part set 3 in 3rd assembly in mechanism m:<br>
```
m.AddPartSetToAssembly(2,3);
```
 |
| --- |

* * *

| AddPartToAssembly(index*[integer]*, pid*[integer]*)

Description<br>Add part to assembly |
| --- |

#### Arguments

* index (integer)
 
The index of the assembly in which you want to add part. **Note that reference points start at 0, not 1**. 0 &lt;= index &lt; [assemblies](primer-mechanism-class.md#assemblies)

* pid (integer)
 
The part ID that you want to add.

| Returns
<br>No return value |
| --- |

| Example
<br>To add part 3 in 3rd assembly in mechanism m:<br>
```
m.AddPartToAssembly(2,3);
```
 |
| --- |

* * *

| AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a mechanism. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the mechanism

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the mechanism m:<br>
```
m.AssociateComment(c);
```
 |
| --- |

* * *

| Blank()

Description<br>Blanks the mechanism |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To blank mechanism m:<br>
```
m.Blank();
```
 |
| --- |

* * *

| BlankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the mechanisms in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all mechanisms will be blanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the mechanisms in model m:<br>
```
Mechanism.BlankAll(m);
```
 |
| --- |

* * *

| BlankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the flagged mechanisms in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged mechanisms will be blanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the mechanisms that you want to blank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the mechanisms in model m flagged with f:<br>
```
Mechanism.BlankFlagged(m, f);
```
 |
| --- |

* * *

| Blanked()

Description<br>Checks if the mechanism is blanked or not. |
| --- |

#### Arguments

No arguments

| Returns
<br>true if blanked, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if mechanism m is blanked:<br>
```
if (m.Blanked() ) do_something...
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the mechanism. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the mechanism

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for mechanism m:<br>
```
m.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the mechanism. The target include of the copied mechanism can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>Mechanism object<br>
Return type
<br>Mechanism |
| --- |

| Example
<br>To copy mechanism m into mechanism z:<br>
```
var z = m.Copy();
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a mechanism. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the mechanism

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the mechanism m:<br>
```
m.DetachComment(c);
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for mechanism. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for mechanism m:<br>
```
m.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first mechanism in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first mechanism in

| Returns
<br>Mechanism object (or null if there are no mechanisms in the model).<br>
Return type
<br>Mechanism |
| --- |

| Example
<br>To get the first mechanism in model m:<br>
```
var m = Mechanism.First(m);
```
 |
| --- |

* * *

| FirstFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the first free mechanism label in the model. Also see [Mechanism.LastFreeLabel()](primer-mechanism-class.md#Mechanism::LastFreeLabel), [Mechanism.NextFreeLabel()](primer-mechanism-class.md#Mechanism::NextFreeLabel) and [Model.FirstFreeItemLabel()](primer-model-class.md#Model::FirstFreeItemLabel). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first free mechanism label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *First free in layer* in editing panels). If omitted the whole model will be used (Equivalent to *First free* in editing panels).

| Returns
<br>Mechanism label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the first free mechanism label in model m:<br>
```
var label = Mechanism.FirstFreeLabel(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the mechanisms in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all mechanisms will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the mechanisms

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the mechanisms with flag f in model m:<br>
```
Mechanism.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the mechanism is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the mechanism

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if mechanism m has flag f set on it:<br>
```
if (m.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each mechanism in the model.<br> **Note that ForEach has been designed to make looping over mechanisms as fast as possible and so has some limitations. Firstly, a single temporary Mechanism object is created and on each function call it is updated with the current mechanism data. This means that you should not try to store the Mechanism object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new mechanisms inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all mechanisms are in

* func (function)
 
Function to call for each mechanism

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the mechanisms in model m:<br>
```
Mechanism.ForEach(m, test);
function test(m)
{
// m is Mechanism object
}
```
<br><br>To call function test for all of the mechanisms in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
Mechanism.ForEach(m, test, data);
function test(m, extra)
{
// m is Mechanism object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Mechanism objects or properties for all of the mechanisms in a model in PRIMER. If the optional property argument is not given then an array of Mechanism objects is returned. If the property argument is given, that property value for each mechanism is returned in the array instead of a Mechanism object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get mechanisms from

* property (optional) (string)
 
Name for property to get for all mechanisms in the model

| Returns
<br>Array of Mechanism objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Mechanism objects for all of the mechanisms in model m:<br>
```
var a = Mechanism.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each mechanism in model m:<br>
```
var a = Mechanism.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetAssembly(index*[integer]*)

Description<br>Returns the information for an assembly |
| --- |

#### Arguments

* index (integer)
 
The index of the assembly you want the coordinates for. **Note that reference points start at 0, not 1**. 0 &lt;= index &lt; [assemblies](primer-mechanism-class.md#assemblies)

| Returns |
| --- |

Object with the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| label | integer | Assembly label |
| parent | integer | Parent assembly label |
| title | string | Assembly title |

#### Return type

object

| Example
<br>To get the information for the 3rd assembly for mechanism m:<br>
```
var info = m.GetAssembly(2);
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a mechanism. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the mechanism m:<br>
```
var comm_array = m.GetComments();
```
 |
| --- |

* * *

| GetConnection(index*[integer]*)

Description<br>Returns the information for a connection |
| --- |

#### Arguments

* index (integer)
 
The index of the connection you want the information for. **Note that connections start at 0, not 1**. 0 &lt;= index &lt; [connections](primer-mechanism-class.md#connections)

| Returns |
| --- |

Object with the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| angle | real | Current angle in degrees (for [Mechanism.LINE](primer-mechanism-class.md#Mechanism.LINE) and [Mechanism.HINGE](primer-mechanism-class.md#Mechanism.HINGE)) |
| assembly1 | integer | Assembly 1 label |
| assembly2 | integer | Assembly 2 label |
| assembly3 | integer | Assembly 3 label |
| coefficient1 | real | Coefficient for linear coupler equation for connection 1 (for [Mechanism.COUPLER](primer-mechanism-class.md#Mechanism.COUPLER)) |
| coefficient2 | real | Coefficient for linear coupler equation for connection 2 (for [Mechanism.COUPLER](primer-mechanism-class.md#Mechanism.COUPLER)) |
| coefficient3 | real | Coefficient for linear coupler equation for connection 3 (for [Mechanism.COUPLER](primer-mechanism-class.md#Mechanism.COUPLER)) |
| connection1 | integer | Connection 1 label (for [Mechanism.COUPLER](primer-mechanism-class.md#Mechanism.COUPLER)) |
| connection2 | integer | Connection 2 label (for [Mechanism.COUPLER](primer-mechanism-class.md#Mechanism.COUPLER)) |
| connection3 | integer | Connection 3 label (for [Mechanism.COUPLER](primer-mechanism-class.md#Mechanism.COUPLER)) |
| distance | real | Current distance (for [Mechanism.LINE](primer-mechanism-class.md#Mechanism.LINE)) |
| factor1 | real | Factor 1 on Assembly 3 ([Mechanism.LINE](primer-mechanism-class.md#Mechanism.LINE) only) |
| factor2 | real | Factor 2 on Assembly 3 ([Mechanism.LINE](primer-mechanism-class.md#Mechanism.LINE) only) |
| label | integer | Connection label |
| locked | integer | 1 if locked (for [Mechanism.LINE](primer-mechanism-class.md#Mechanism.LINE), [Mechanism.PIN](primer-mechanism-class.md#Mechanism.PIN) and [Mechanism.HINGE](primer-mechanism-class.md#Mechanism.HINGE)) |
| mode1 | integer | Coupling mode for connection 1. 0 = translational coupling, 1 = rotational coupling (for [Mechanism.COUPLER](primer-mechanism-class.md#Mechanism.COUPLER)) |
| mode2 | integer | Coupling mode for connection 2. 0 = translational coupling, 1 = rotational coupling (for [Mechanism.COUPLER](primer-mechanism-class.md#Mechanism.COUPLER)) |
| mode3 | integer | Coupling mode for connection 3. 0 = translational coupling, 1 = rotational coupling (for [Mechanism.COUPLER](primer-mechanism-class.md#Mechanism.COUPLER)) |
| node1 | integer | Node 1 label (for [Mechanism.LINE](primer-mechanism-class.md#Mechanism.LINE), [Mechanism.PIN](primer-mechanism-class.md#Mechanism.PIN) and [Mechanism.HINGE](primer-mechanism-class.md#Mechanism.HINGE)) |
| node2 | integer | Node 2 label (for [Mechanism.LINE](primer-mechanism-class.md#Mechanism.LINE), [Mechanism.PIN](primer-mechanism-class.md#Mechanism.PIN) and [Mechanism.HINGE](primer-mechanism-class.md#Mechanism.HINGE)) |
| nrotation | real | -ve rotation limit in degrees (for [Mechanism.LINE](primer-mechanism-class.md#Mechanism.LINE) and [Mechanism.HINGE](primer-mechanism-class.md#Mechanism.HINGE)) |
| nslide | real | -ve slide translation (for [Mechanism.LINE](primer-mechanism-class.md#Mechanism.LINE)) |
| protation | real | +ve rotation limit in degrees (for [Mechanism.LINE](primer-mechanism-class.md#Mechanism.LINE) and [Mechanism.HINGE](primer-mechanism-class.md#Mechanism.HINGE)) |
| pslide | real | +ve slide translation (for [Mechanism.LINE](primer-mechanism-class.md#Mechanism.LINE)) |
| title | string | Connection label |
| type | integer | Mechanism type ([Mechanism.COUPLER](primer-mechanism-class.md#Mechanism.COUPLER), [Mechanism.HINGE](primer-mechanism-class.md#Mechanism.HINGE), [Mechanism.LINE](primer-mechanism-class.md#Mechanism.LINE), [Mechanism.PIN](primer-mechanism-class.md#Mechanism.PIN)) |
| x1 | real | X1 coordinates (for [Mechanism.LINE](primer-mechanism-class.md#Mechanism.LINE), [Mechanism.PIN](primer-mechanism-class.md#Mechanism.PIN) and [Mechanism.HINGE](primer-mechanism-class.md#Mechanism.HINGE)) |
| x2 | real | X2 coordinates (for [Mechanism.LINE](primer-mechanism-class.md#Mechanism.LINE), [Mechanism.PIN](primer-mechanism-class.md#Mechanism.PIN) and [Mechanism.HINGE](primer-mechanism-class.md#Mechanism.HINGE)) |
| y1 | real | Y1 coordinates (for [Mechanism.LINE](primer-mechanism-class.md#Mechanism.LINE), [Mechanism.PIN](primer-mechanism-class.md#Mechanism.PIN) and [Mechanism.HINGE](primer-mechanism-class.md#Mechanism.HINGE)) |
| y2 | real | Y2 coordinates (for [Mechanism.LINE](primer-mechanism-class.md#Mechanism.LINE), [Mechanism.PIN](primer-mechanism-class.md#Mechanism.PIN) and [Mechanism.HINGE](primer-mechanism-class.md#Mechanism.HINGE)) |
| z1 | real | Z1 coordinates (for [Mechanism.LINE](primer-mechanism-class.md#Mechanism.LINE), [Mechanism.PIN](primer-mechanism-class.md#Mechanism.PIN) and [Mechanism.HINGE](primer-mechanism-class.md#Mechanism.HINGE)) |
| z2 | real | Z2 coordinates (for [Mechanism.LINE](primer-mechanism-class.md#Mechanism.LINE), [Mechanism.PIN](primer-mechanism-class.md#Mechanism.PIN) and [Mechanism.HINGE](primer-mechanism-class.md#Mechanism.HINGE)) |

#### Return type

object

| Example
<br>To get the information for the 3rd connection for mechanism m:<br>
```
var info = m.GetConnection(2);
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Mechanism objects for all of the flagged mechanisms in a model in PRIMER If the optional property argument is not given then an array of Mechanism objects is returned. If the property argument is given, then that property value for each mechanism is returned in the array instead of a Mechanism object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get mechanisms from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the mechanisms that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged mechanisms in the model

| Returns
<br>Array of Mechanism objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Mechanism objects for all of the mechanisms in model m flagged with f:<br>
```
var m = Mechanism.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the mechanisms in model m flagged with f:<br>
```
var a = Mechanism.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the Mechanism object for a mechanism ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the mechanism in

* number (integer)
 
number of the mechanism you want the Mechanism object for

| Returns
<br>Mechanism object (or null if mechanism does not exist).<br>
Return type
<br>Mechanism |
| --- |

| Example
<br>To get the Mechanism object for mechanism 100 in model m<br>
```
var m = Mechanism.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a Mechanism property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [Mechanism.ViewParameters()](primer-mechanism-class.md#Mechanism::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
mechanism property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if Mechanism property m.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (m.GetParameter(m.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if Mechanism property m.example is a parameter by using the GetParameter method:<br>
```
if (m.ViewParameters().GetParameter(m.example) ) do_something...
```
 |
| --- |

* * *

| GetPoint(index*[integer]*)

Description<br>Returns the information for a reference point |
| --- |

#### Arguments

* index (integer)
 
The index of the reference point you want the information for. **Note that reference points start at 0, not 1**. 0 &lt;= index &lt; [points](primer-mechanism-class.md#points)

| Returns |
| --- |

Object with the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| assembly | integer | Assembly label |
| csys | integer | Coordinate system |
| hpt | boolean | If point has been automatically created by PRIMER at the H-point |
| label | integer | Point label |
| node | integer | Node label (0 if coordinate) |
| rx | boolean | Point restrained rotationally in X |
| ry | boolean | Point restrained rotationally in Y |
| rz | boolean | Point restrained rotationally in Z |
| title | string | Point title |
| tx | boolean | Point restrained translationally in X |
| ty | boolean | Point restrained translationally in Y |
| tz | boolean | Point restrained translationally in Z |
| x | real | Node/point x coordinate |
| y | real | Node/point y coordinate |
| z | real | Node/point z coordinate |

#### Return type

object

| Example
<br>To get the information for the 3rd reference point for mechanism m:<br>
```
var info = m.GetPoint(2);
```
 |
| --- |

* * *

| GetPointData(rpt*[integer]*)

Description<br>Returns the coordinates of a reference point |
| --- |

#### Arguments

* rpt (integer)
 
The reference point you want the coordinates for. **Note that reference points start at 0, not 1**.

| Returns
<br>Array containing the reference point coordinates<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the coordinates of the 3rd reference point for mechanism mec:<br>
```
var c = mec.GetPointData(2)
```
 |
| --- |

* * *

| GetPointTitle(rpt*[integer]*)

Description<br>Returns the title of a reference point |
| --- |

#### Arguments

* rpt (integer)
 
The reference point you want the title for. **Note that reference points start at 0, not 1**.

| Returns
<br>The reference point title<br>
Return type
<br>String |
| --- |

| Example
<br>To get the title of the 3rd reference point for mechanism mec:<br>
```
var c = mec.GetPointTitle(2)
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last mechanism in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last mechanism in

| Returns
<br>Mechanism object (or null if there are no mechanisms in the model).<br>
Return type
<br>Mechanism |
| --- |

| Example
<br>To get the last mechanism in model m:<br>
```
var m = Mechanism.Last(m);
```
 |
| --- |

* * *

| LastFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the last free mechanism label in the model. Also see [Mechanism.FirstFreeLabel()](primer-mechanism-class.md#Mechanism::FirstFreeLabel), [Mechanism.NextFreeLabel()](primer-mechanism-class.md#Mechanism::NextFreeLabel) and see [Model.LastFreeItemLabel()](primer-model-class.md#Model::LastFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last free mechanism label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest free in layer* in editing panels). If omitted the whole model will be used.

| Returns
<br>Mechanism label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the last free mechanism label in model m:<br>
```
var label = Mechanism.LastFreeLabel(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next mechanism in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Mechanism object (or null if there are no more mechanisms in the model).<br>
Return type
<br>Mechanism |
| --- |

| Example
<br>To get the mechanism in model m after mechanism m:<br>
```
var m = m.Next();
```
 |
| --- |

* * *

| NextFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the next free (highest+1) mechanism label in the model. Also see [Mechanism.FirstFreeLabel()](primer-mechanism-class.md#Mechanism::FirstFreeLabel), [Mechanism.LastFreeLabel()](primer-mechanism-class.md#Mechanism::LastFreeLabel) and [Model.NextFreeItemLabel()](primer-model-class.md#Model::NextFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get next free mechanism label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest+1 in layer* in editing panels). If omitted the whole model will be used (Equivalent to *Highest+1* in editing panels).

| Returns
<br>Mechanism label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the next free mechanism label in model m:<br>
```
var label = Mechanism.NextFreeLabel(m);
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a mechanism. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only mechanisms from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only mechanisms that are flagged with *limit* can be selected. If omitted, or null, any mechanisms from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[Mechanism](primer-mechanism-class.md) object (or null if not picked)<br>
Return type
<br>Mechanism |
| --- |

| Example
<br>To pick a mechanism from model m giving the prompt 'Pick mechanism from screen':<br>
```
var m = Mechanism.Pick('Pick mechanism from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous mechanism in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Mechanism object (or null if there are no more mechanisms in the model).<br>
Return type
<br>Mechanism |
| --- |

| Example
<br>To get the mechanism in model m before mechanism m:<br>
```
var m = m.Previous();
```
 |
| --- |

* * *

| RemoveConnection(index*[integer]*)

Description<br>Removes a connection from a mechanism |
| --- |

#### Arguments

* index (integer)
 
The index of the connection you want to remove. **Note that connections start at 0, not 1**. 0 &lt;= index &lt; [connections](primer-mechanism-class.md#connections)

| Returns
<br>no return value |
| --- |

| Example
<br>To remove the 3rd connection for mechanism m:<br>
```
m.RemoveConnection(2);
```
 |
| --- |

* * *

| RemoveNodeSetFromAssembly(index*[integer]*, nsid*[integer]*)

Description<br>Remove node set from assembly |
| --- |

#### Arguments

* index (integer)
 
The index of the assembly from which you want to remove the node set. **Note that reference points start at 0, not 1**. 0 &lt;= index &lt; [assemblies](primer-mechanism-class.md#assemblies)

* nsid (integer)
 
The node set ID that you want to remove.

| Returns
<br>No return value |
| --- |

| Example
<br>To remove node set 3 from 3rd assembly in mechanism m:<br>
```
m.RemoveNodeSetFromAssembly(2,3);
```
 |
| --- |

* * *

| RemovePartFromAssembly(index*[integer]*, pid*[integer]*)

Description<br>Remove part from assembly |
| --- |

#### Arguments

* index (integer)
 
The index of the assembly from which you want to remove the part. **Note that reference points start at 0, not 1**. 0 &lt;= index &lt; [assemblies](primer-mechanism-class.md#assemblies)

* pid (integer)
 
The part ID that you want to remove.

| Returns
<br>No return value |
| --- |

| Example
<br>To remove part 3 from 3rd assembly in mechanism m:<br>
```
m.RemovePartFromAssembly(2,3);
```
 |
| --- |

* * *

| RemovePartSetFromAssembly(index*[integer]*, psid*[integer]*)

Description<br>Remove part set from assembly |
| --- |

#### Arguments

* index (integer)
 
The index of the assembly from which you want to remove the part set. **Note that reference points start at 0, not 1**. 0 &lt;= index &lt; [assemblies](primer-mechanism-class.md#assemblies)

* psid (integer)
 
The part set ID that you want to remove.

| Returns
<br>No return value |
| --- |

| Example
<br>To remove part set 3 from 3rd assembly in mechanism m:<br>
```
m.RemovePartSetFromAssembly(2,3);
```
 |
| --- |

* * *

| RemovePoint(index*[integer]*)

Description<br>Removes a reference point from a mechanism |
| --- |

#### Arguments

* index (integer)
 
The index of the reference point you want to remove. **Note that reference points start at 0, not 1**. 0 &lt;= index &lt; [points](primer-mechanism-class.md#points)

| Returns
<br>no return value |
| --- |

| Example
<br>To remove the 3rd reference point for mechanism m:<br>
```
m.RemovePoint(2);
```
 |
| --- |

* * *

| RenumberAll(Model*[[Model](primer-model-class.md)]*, start*[integer]*) [static]
Description<br>Renumbers all of the mechanisms in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all mechanisms will be renumbered in

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the mechanisms in model m, from 1000000:<br>
```
Mechanism.RenumberAll(m, 1000000);
```
 |
| --- |

* * *

| RenumberFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*) [static]
Description<br>Renumbers all of the flagged mechanisms in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged mechanisms will be renumbered in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the mechanisms that you want to renumber

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the mechanisms in model m flagged with f, from 1000000:<br>
```
Mechanism.RenumberFlagged(m, f, 1000000);
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select mechanisms using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting mechanisms

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only mechanisms from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only mechanisms that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any mechanisms can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of mechanisms selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select mechanisms from model m, flagging those selected with flag f, giving the prompt 'Select mechanisms':<br>
```
Mechanism.Select(f, 'Select mechanisms', m);
```
<br><br>To select mechanisms, flagging those selected with flag f but limiting selection to mechanisms flagged with flag l, giving the prompt 'Select mechanisms':<br>
```
Mechanism.Select(f, 'Select mechanisms', l);
```
 |
| --- |

* * *

| SetConnection(index*[integer]*, data*[object]*)

Description<br>Sets the data for a connection in a mechanism |
| --- |

#### Arguments

* index (integer)
 
The index of the connection you want to set. **Note that connections start at 0, not 1**. To add a new connection use index [connections](primer-mechanism-class.md#connections)

* data (object)

Object containing the connection data. The properties can be: 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| angle (optional) | real | Current angle in degrees (for [Mechanism.LINE](primer-mechanism-class.md#Mechanism.LINE) and [Mechanism.HINGE](primer-mechanism-class.md#Mechanism.HINGE)) |
| assembly1 (optional) | integer | Assembly 1 label (required for [Mechanism.LINE](primer-mechanism-class.md#Mechanism.LINE), [Mechanism.PIN](primer-mechanism-class.md#Mechanism.PIN) and [Mechanism.HINGE](primer-mechanism-class.md#Mechanism.HINGE)) |
| assembly2 (optional) | integer | Assembly 2 label (required for [Mechanism.LINE](primer-mechanism-class.md#Mechanism.LINE), [Mechanism.PIN](primer-mechanism-class.md#Mechanism.PIN) and [Mechanism.HINGE](primer-mechanism-class.md#Mechanism.HINGE)) |
| assembly3 | integer | Assembly 3 label (required for [Mechanism.LINE](primer-mechanism-class.md#Mechanism.LINE)) |
| coefficient1 (optional) | real | Coefficient for linear coupler equation for connection 1 (for [Mechanism.COUPLER](primer-mechanism-class.md#Mechanism.COUPLER)) |
| coefficient2 (optional) | real | Coefficient for linear coupler equation for connection 2 (for [Mechanism.COUPLER](primer-mechanism-class.md#Mechanism.COUPLER)) |
| coefficient3 (optional) | real | Coefficient for linear coupler equation for connection 3 (for [Mechanism.COUPLER](primer-mechanism-class.md#Mechanism.COUPLER)) |
| connection1 (optional) | integer | Connection 1 label (for [Mechanism.COUPLER](primer-mechanism-class.md#Mechanism.COUPLER)) |
| connection2 (optional) | integer | Connection 2 label (for [Mechanism.COUPLER](primer-mechanism-class.md#Mechanism.COUPLER)) |
| connection3 (optional) | integer | Connection 3 label (for [Mechanism.COUPLER](primer-mechanism-class.md#Mechanism.COUPLER)) |
| distance (optional) | real | Current distance (for [Mechanism.LINE](primer-mechanism-class.md#Mechanism.LINE)) |
| factor1 (optional) | real | Factor 1 on Assembly 3 ([Mechanism.LINE](primer-mechanism-class.md#Mechanism.LINE) only) |
| factor2 (optional) | real | Factor 2 on Assembly 3 ([Mechanism.LINE](primer-mechanism-class.md#Mechanism.LINE) only) |
| locked (optional) | integer | 1 if locked (for [Mechanism.LINE](primer-mechanism-class.md#Mechanism.LINE), [Mechanism.PIN](primer-mechanism-class.md#Mechanism.PIN) and [Mechanism.HINGE](primer-mechanism-class.md#Mechanism.HINGE)) |
| mode1 (optional) | integer | Coupling mode for connection 1. 0 = translational coupling, 1 = rotational coupling (for [Mechanism.COUPLER](primer-mechanism-class.md#Mechanism.COUPLER)) |
| mode2 (optional) | integer | Coupling mode for connection 2. 0 = translational coupling, 1 = rotational coupling (for [Mechanism.COUPLER](primer-mechanism-class.md#Mechanism.COUPLER)) |
| mode3 (optional) | integer | Coupling mode for connection 3. 0 = translational coupling, 1 = rotational coupling (for [Mechanism.COUPLER](primer-mechanism-class.md#Mechanism.COUPLER)) |
| node1 (optional) | integer | Node 1 label (for [Mechanism.LINE](primer-mechanism-class.md#Mechanism.LINE), [Mechanism.PIN](primer-mechanism-class.md#Mechanism.PIN) and [Mechanism.HINGE](primer-mechanism-class.md#Mechanism.HINGE), not required if using x1, y1 and z1) |
| node2 (optional) | integer | Node 2 label (for [Mechanism.LINE](primer-mechanism-class.md#Mechanism.LINE), [Mechanism.PIN](primer-mechanism-class.md#Mechanism.PIN) and [Mechanism.HINGE](primer-mechanism-class.md#Mechanism.HINGE), not required if using x2, y2 and z2) |
| nrotation (optional) | real | -ve rotation limit in degrees (for [Mechanism.LINE](primer-mechanism-class.md#Mechanism.LINE) and [Mechanism.HINGE](primer-mechanism-class.md#Mechanism.HINGE)) |
| nslide (optional) | real | -ve slide translation (for [Mechanism.LINE](primer-mechanism-class.md#Mechanism.LINE)) |
| protation (optional) | real | +ve rotation limit in degrees (for [Mechanism.LINE](primer-mechanism-class.md#Mechanism.LINE) and [Mechanism.HINGE](primer-mechanism-class.md#Mechanism.HINGE)) |
| pslide (optional) | real | +ve slide translation (for [Mechanism.LINE](primer-mechanism-class.md#Mechanism.LINE)) |
| title (optional) | string | Title |
| type | integer | Connection type. Can be one of: [Mechanism.PIN](primer-mechanism-class.md#Mechanism.PIN), [Mechanism.LINE](primer-mechanism-class.md#Mechanism.LINE), [Mechanism.HINGE](primer-mechanism-class.md#Mechanism.HINGE) or [Mechanism.COUPLER](primer-mechanism-class.md#Mechanism.COUPLER)] |
| x1 (optional) | real | x1 coordinate (for [Mechanism.LINE](primer-mechanism-class.md#Mechanism.LINE), [Mechanism.PIN](primer-mechanism-class.md#Mechanism.PIN) and [Mechanism.HINGE](primer-mechanism-class.md#Mechanism.HINGE), not required if using node1) |
| x2 (optional) | real | x2 coordinate (for [Mechanism.LINE](primer-mechanism-class.md#Mechanism.LINE), [Mechanism.PIN](primer-mechanism-class.md#Mechanism.PIN) and [Mechanism.HINGE](primer-mechanism-class.md#Mechanism.HINGE), not required if using node2) |
| y1 (optional) | real | y1 coordinate (for [Mechanism.LINE](primer-mechanism-class.md#Mechanism.LINE), [Mechanism.PIN](primer-mechanism-class.md#Mechanism.PIN) and [Mechanism.HINGE](primer-mechanism-class.md#Mechanism.HINGE), not required if using node1) |
| y2 (optional) | real | y2 coordinate (for [Mechanism.LINE](primer-mechanism-class.md#Mechanism.LINE), [Mechanism.PIN](primer-mechanism-class.md#Mechanism.PIN) and [Mechanism.HINGE](primer-mechanism-class.md#Mechanism.HINGE), not required if using node2) |
| z1 (optional) | real | z1 coordinate (for [Mechanism.LINE](primer-mechanism-class.md#Mechanism.LINE), [Mechanism.PIN](primer-mechanism-class.md#Mechanism.PIN) and [Mechanism.HINGE](primer-mechanism-class.md#Mechanism.HINGE), not required if using node1) |
| z2 (optional) | real | z2 coordinate (for [Mechanism.LINE](primer-mechanism-class.md#Mechanism.LINE), [Mechanism.PIN](primer-mechanism-class.md#Mechanism.PIN) and [Mechanism.HINGE](primer-mechanism-class.md#Mechanism.HINGE), not required if using node2) |

| Returns
<br>no return value |
| --- |

| Example
<br>To add a new pin connection to mechanism m between assemblies 5 and 6 at node 1000 with title "Example connection":<br><br>
```
var data = { type:Mechanism.PIN, assembly1:5, assembly2:6, node1:1000, title:"Example connection" };
m.SetConnection(m.connections, data);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the mechanism. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the mechanism

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for mechanism m:<br>
```
m.SetFlag(f);
```
 |
| --- |

* * *

| SetPoint(index*[integer]*, data*[object]*)

Description<br>Sets the data for a reference point in a mechanism |
| --- |

#### Arguments

* index (integer)
 
The index of the reference point you want to set. **Note that reference points start at 0, not 1**. To add a new point use index [points](primer-mechanism-class.md#points)

* data (object)

Object containing the reference point data. The properties can be: 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| assembly | integer | Assembly label |
| csys (optional) | integer | Coordinate system label |
| node (optional) | integer | Node label (not required if using x, y and z) |
| rx (optional) | boolean | Point restrained rotationally in X |
| ry (optional) | boolean | Point restrained rotationally in Y |
| rz (optional) | boolean | Point restrained rotationally in Z |
| title (optional) | string | Point title |
| tx (optional) | boolean | Point restrained translationally in X |
| ty (optional) | boolean | Point restrained translationally in Y |
| tz (optional) | boolean | Point restrained translationally in Z |
| x (optional) | real | x coordinate (not required if using node) |
| y (optional) | real | y coordinate (not required if using node) |
| z (optional) | real | z coordinate (not required if using node) |

| Returns
<br>no return value |
| --- |

| Example
<br>To add a new reference point to mechanism m assembly 5 at node 1000 with title "Example point" restrained in x:<br><br>
```
var data = { assembly:5, node:1000, title:"Example point", tx:true };
m.SetPoint(m.points, data);
```
<br>To add a new reference point to mechanism m assembly 5 at (10, 20, 30) with title "Example point":<br><br>
```
var data = { assembly:5, x:10, y:20, z:30, title:"Example point" };
m.SetPoint(m.points, data);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the mechanism. The mechanism will be sketched until you either call [Mechanism.Unsketch()](primer-mechanism-class.md#Mechanism::Unsketch), [Mechanism.UnsketchAll()](primer-mechanism-class.md#Mechanism::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the mechanism is sketched. If omitted redraw is true. If you want to sketch several mechanisms and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch mechanism m:<br>
```
m.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged mechanisms in the model. The mechanisms will be sketched until you either call [Mechanism.Unsketch()](primer-mechanism-class.md#Mechanism::Unsketch), [Mechanism.UnsketchFlagged()](primer-mechanism-class.md#Mechanism::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged mechanisms will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the mechanisms that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the mechanisms are sketched. If omitted redraw is true. If you want to sketch flagged mechanisms several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all mechanisms flagged with flag in model m:<br>
```
Mechanism.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of mechanisms in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing mechanisms should be counted. If false or omitted
referenced but undefined mechanisms will also be included in the total.

| Returns
<br>number of mechanisms<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of mechanisms in model m:<br>
```
var total = Mechanism.Total(m);
```
 |
| --- |

* * *

| Unblank()

Description<br>Unblanks the mechanism |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank mechanism m:<br>
```
m.Unblank();
```
 |
| --- |

* * *

| UnblankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the mechanisms in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all mechanisms will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the mechanisms in model m:<br>
```
Mechanism.UnblankAll(m);
```
 |
| --- |

* * *

| UnblankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the flagged mechanisms in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the flagged mechanisms will be unblanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the mechanisms that you want to unblank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the mechanisms in model m flagged with f:<br>
```
Mechanism.UnblankFlagged(m, f);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the mechanisms in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all mechanisms will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the mechanisms

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the mechanisms in model m:<br>
```
Mechanism.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the mechanism. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the mechanism is unsketched. If omitted redraw is true. If you want to unsketch several mechanisms and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch mechanism m:<br>
```
m.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all mechanisms. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all mechanisms will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the mechanisms are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all mechanisms in model m:<br>
```
Mechanism.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged mechanisms in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all mechanisms will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the mechanisms that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the mechanisms are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all mechanisms flagged with flag in model m:<br>
```
Mechanism.UnsketchAll(m, flag);
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
<br>[Mechanism](primer-mechanism-class.md) object.<br>
Return type
<br>Mechanism |
| --- |

| Example
<br>To check if Mechanism property m.example is a parameter by using the [Mechanism.GetParameter()](primer-mechanism-class.md#Mechanism::GetParameter) method:<br>
```
if (m.ViewParameters().GetParameter(m.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for mechanism. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for mechanism m:<br>
```
m.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this mechanism. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for mechanism m:<br>
```
var xrefs = m.Xrefs();
```
 |
| --- |

* * *