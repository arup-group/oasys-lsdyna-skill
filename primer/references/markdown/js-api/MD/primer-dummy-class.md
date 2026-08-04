# Dummy class

The Dummy class gives you access to dummy cards in PRIMER. [More...](primer-dummy-class.md#Dummy_details)

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

* [BlankAll](primer-dummy-class.md#Dummy::BlankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [BlankFlagged](primer-dummy-class.md#Dummy::BlankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [First](primer-dummy-class.md#Dummy::First)(Model*[[Model](primer-model-class.md)]*)
* [FirstFreeLabel](primer-dummy-class.md#Dummy::FirstFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [FlagAll](primer-dummy-class.md#Dummy::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-dummy-class.md#Dummy::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-dummy-class.md#Dummy::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-dummy-class.md#Dummy::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-dummy-class.md#Dummy::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-dummy-class.md#Dummy::Last)(Model*[[Model](primer-model-class.md)]*)
* [LastFreeLabel](primer-dummy-class.md#Dummy::LastFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [NextFreeLabel](primer-dummy-class.md#Dummy::NextFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [Pick](primer-dummy-class.md#Dummy::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [RenumberAll](primer-dummy-class.md#Dummy::RenumberAll)(Model*[[Model](primer-model-class.md)]*, start*[integer]*)
* [RenumberFlagged](primer-dummy-class.md#Dummy::RenumberFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*)
* [Select](primer-dummy-class.md#Dummy::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-dummy-class.md#Dummy::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-dummy-class.md#Dummy::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnblankAll](primer-dummy-class.md#Dummy::UnblankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnblankFlagged](primer-dummy-class.md#Dummy::UnblankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [UnflagAll](primer-dummy-class.md#Dummy::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-dummy-class.md#Dummy::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-dummy-class.md#Dummy::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-dummy-class.md#Dummy::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Blank](primer-dummy-class.md#Dummy::Blank)()
* [Blanked](primer-dummy-class.md#Dummy::Blanked)()
* [ClearFlag](primer-dummy-class.md#Dummy::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-dummy-class.md#Dummy::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-dummy-class.md#Dummy::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Error](primer-dummy-class.md#Dummy::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-dummy-class.md#Dummy::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetAssembly](primer-dummy-class.md#Dummy::GetAssembly)(index*[integer]*)
* [GetAssemblyChildInfo](primer-dummy-class.md#Dummy::GetAssemblyChildInfo)(label*[integer]*, index*[integer]*)
* [GetAssemblyFromID](primer-dummy-class.md#Dummy::GetAssemblyFromID)(label*[integer]*)
* [GetAssemblyPart](primer-dummy-class.md#Dummy::GetAssemblyPart)(label*[integer]*)
* [GetComments](primer-dummy-class.md#Dummy::GetComments)()
* [GetParameter](primer-dummy-class.md#Dummy::GetParameter)(prop*[string]*)
* [GetPoint](primer-dummy-class.md#Dummy::GetPoint)(index*[integer]*)
* [GetPointData](primer-dummy-class.md#Dummy::GetPointData)(rpt*[integer]*)
* [GetPointTitle](primer-dummy-class.md#Dummy::GetPointTitle)(rpt*[integer]*)
* [Next](primer-dummy-class.md#Dummy::Next)()
* [Previous](primer-dummy-class.md#Dummy::Previous)()
* [RemovePoint](primer-dummy-class.md#Dummy::RemovePoint)(index*[integer]*)
* [SelectAssembly](primer-dummy-class.md#Dummy::SelectAssembly)()
* [SetAssemblyNodeSet](primer-dummy-class.md#Dummy::SetAssemblyNodeSet)(label*[integer]*, nsid*[integer]*)
* [SetAssemblyPart](primer-dummy-class.md#Dummy::SetAssemblyPart)(label*[integer]*, pid*[integer]*)
* [SetAssemblyPartSet](primer-dummy-class.md#Dummy::SetAssemblyPartSet)(label*[integer]*, psid*[integer]*)
* [SetAssemblyStopAngle](primer-dummy-class.md#Dummy::SetAssemblyStopAngle)(label*[integer]*, axis*[integer]*, stop\_neg*[real]*, stop\_pos*[real]*)
* [SetFlag](primer-dummy-class.md#Dummy::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [SetPoint](primer-dummy-class.md#Dummy::SetPoint)(index*[integer]*, data*[object]*)
* [Sketch](primer-dummy-class.md#Dummy::Sketch)(redraw (optional)*[boolean]*)
* [SketchAssembly](primer-dummy-class.md#Dummy::SketchAssembly)(label*[integer]*, redraw (optional)*[boolean]*)
* [Unblank](primer-dummy-class.md#Dummy::Unblank)()
* [Unsketch](primer-dummy-class.md#Dummy::Unsketch)(redraw (optional)*[boolean]*)
* [UnsketchAssembly](primer-dummy-class.md#Dummy::UnsketchAssembly)(label*[integer]*, redraw (optional)*[boolean]*)
* [ViewParameters](primer-dummy-class.md#Dummy::ViewParameters)()
* [Warning](primer-dummy-class.md#Dummy::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-dummy-class.md#Dummy::Xrefs)()

## Dummy properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| assemblies (read only) | integer | Number of assemblies defined. |
| exists (read only) | logical | true if dummy exists, false if referred to but not defined. |
| id (read only) | integer | [Dummy](primer-dummy-class.md) number. Also see the [label](primer-dummy-class.md#label) property which is an alternative name for this. |
| include | integer | The [Include](primer-include-class.md) file number that the dummy is in. |
| label (read only) | integer | [Dummy](primer-dummy-class.md) number. Also see the [id](primer-dummy-class.md#id) property which is an alternative name for this. |
| model (read only) | integer | The [Model](primer-model-class.md) number that the dummy is in. |
| points (read only) | integer | Number of reference points defined. |
| title | string | [Dummy](primer-dummy-class.md) title. |
| xhpoint (read only) | real | H-Point X coordinate. |
| yhpoint (read only) | real | H-Point Y coordinate. |
| zhpoint (read only) | real | H-Point Z coordinate. |

| Detailed Description<br>The Dummy class allows you to create, modify, edit and manipulate dummy cards.<br>See the documentation below for more details. |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a dummy. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the dummy

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the dummy d:<br>
```
d.AssociateComment(c);
```
 |
| --- |

* * *

| Blank()

Description<br>Blanks the dummy |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To blank dummy d:<br>
```
d.Blank();
```
 |
| --- |

* * *

| BlankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the dummies in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all dummies will be blanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the dummies in model m:<br>
```
Dummy.BlankAll(m);
```
 |
| --- |

* * *

| BlankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the flagged dummies in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged dummies will be blanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the dummies that you want to blank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the dummies in model m flagged with f:<br>
```
Dummy.BlankFlagged(m, f);
```
 |
| --- |

* * *

| Blanked()

Description<br>Checks if the dummy is blanked or not. |
| --- |

#### Arguments

No arguments

| Returns
<br>true if blanked, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if dummy d is blanked:<br>
```
if (d.Blanked() ) do_something...
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the dummy. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the dummy

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for dummy d:<br>
```
d.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the dummy. The target include of the copied dummy can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>Dummy object<br>
Return type
<br>Dummy |
| --- |

| Example
<br>To copy dummy d into dummy z:<br>
```
var z = d.Copy();
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a dummy. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the dummy

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the dummy d:<br>
```
d.DetachComment(c);
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for dummy. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for dummy d:<br>
```
d.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first dummy in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first dummy in

| Returns
<br>Dummy object (or null if there are no dummies in the model).<br>
Return type
<br>Dummy |
| --- |

| Example
<br>To get the first dummy in model m:<br>
```
var d = Dummy.First(m);
```
 |
| --- |

* * *

| FirstFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the first free dummy label in the model. Also see [Dummy.LastFreeLabel()](primer-dummy-class.md#Dummy::LastFreeLabel), [Dummy.NextFreeLabel()](primer-dummy-class.md#Dummy::NextFreeLabel) and [Model.FirstFreeItemLabel()](primer-model-class.md#Model::FirstFreeItemLabel). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first free dummy label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *First free in layer* in editing panels). If omitted the whole model will be used (Equivalent to *First free* in editing panels).

| Returns
<br>Dummy label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the first free dummy label in model m:<br>
```
var label = Dummy.FirstFreeLabel(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the dummies in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all dummies will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the dummies

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the dummies with flag f in model m:<br>
```
Dummy.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the dummy is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the dummy

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if dummy d has flag f set on it:<br>
```
if (d.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each dummy in the model.<br> **Note that ForEach has been designed to make looping over dummies as fast as possible and so has some limitations. Firstly, a single temporary Dummy object is created and on each function call it is updated with the current dummy data. This means that you should not try to store the Dummy object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new dummies inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all dummies are in

* func (function)
 
Function to call for each dummy

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the dummies in model m:<br>
```
Dummy.ForEach(m, test);
function test(d)
{
// d is Dummy object
}
```
<br><br>To call function test for all of the dummies in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
Dummy.ForEach(m, test, data);
function test(d, extra)
{
// d is Dummy object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Dummy objects or properties for all of the dummies in a model in PRIMER. If the optional property argument is not given then an array of Dummy objects is returned. If the property argument is given, that property value for each dummy is returned in the array instead of a Dummy object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get dummies from

* property (optional) (string)
 
Name for property to get for all dummies in the model

| Returns
<br>Array of Dummy objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Dummy objects for all of the dummies in model m:<br>
```
var a = Dummy.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each dummy in model m:<br>
```
var a = Dummy.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetAssembly(index*[integer]*)

Description<br>Returns the information for an assembly |
| --- |

#### Arguments

* index (integer)
 
The index of the assembly you want the coordinates for. **Note that reference points start at 0, not 1**. 0 &lt;= index &lt; [assemblies](primer-dummy-class.md#assemblies)

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
<br>To get the information for the 3rd assembly for dummy d:<br>
```
var info = d.GetAssembly(2);
```
 |
| --- |

* * *

| GetAssemblyChildInfo(label*[integer]*, index*[integer]*)

Description<br>Get information about a child assembly from its parent assembly. |
| --- |

#### Arguments

* label (integer)
 
The label of the parent assembly.

* index (integer)
 
index of the child (start with 0 till n-1, where n is total number of child).

| Returns |
| --- |

Object with the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| dof\_code | integer | Degree of freedom codes |
| joint\_stiff | integer | Constrained joint stiffness label |
| label | integer | Label of the child assembly |
| node\_a | integer | Node A label |
| node\_b | integer | Node B label |

#### Return type

object

| Example
<br>To get the information of first child assembly for which index will be 0 (starts with 0) in the assembly with label = 2 for dummy d:<br>
```
var info = d.GetAssemblyChildInfo(2, 0);
```
 |
| --- |

* * *

| GetAssemblyFromID(label*[integer]*)

Description<br>Get assembly information for a given assembly ID and returns an object containing the details. |
| --- |

#### Arguments

* label (integer)
 
The label of the assembly you want the Assembly object for.

| Returns |
| --- |

Object with the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| child (read only) | integer | Total number of child assembly(s). |
| exists (read only) | logical | true if assembly exists, false if not defined. |
| index | integer | Assembly index |
| label | integer | Assembly label |
| parent | integer | Parent assembly label |
| rx (read only) | real | x-angle of the assembly. |
| ry (read only) | real | y-angle of the assembly. |
| rz (read only) | real | z-angle of the assembly. |
| title | string | Assembly title |

#### Return type

object

| Example
<br>To get the information for the assembly with label = 2 for dummy d:<br>
```
var info = d.GetAssemblyFromID(2);
```
 |
| --- |

* * *

| GetAssemblyPart(label*[integer]*)

Description<br>Returns an array of Part objects representing all the parts within the assembly. |
| --- |

#### Arguments

* label (integer)
 
The label of the assembly.

| Returns
<br>Array of Part objects<br>
Return type
<br>Array |
| --- |

| Example
<br>To get all the parts in the assembly with label = 2 for dummy d:<br>
```
var info = d.GetAssemblyPart(2);
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a dummy. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the dummy d:<br>
```
var comm_array = d.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Dummy objects for all of the flagged dummies in a model in PRIMER If the optional property argument is not given then an array of Dummy objects is returned. If the property argument is given, then that property value for each dummy is returned in the array instead of a Dummy object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get dummies from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the dummies that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged dummies in the model

| Returns
<br>Array of Dummy objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Dummy objects for all of the dummies in model m flagged with f:<br>
```
var d = Dummy.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the dummies in model m flagged with f:<br>
```
var a = Dummy.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the Dummy object for a dummy ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the dummy in

* number (integer)
 
number of the dummy you want the Dummy object for

| Returns
<br>Dummy object (or null if dummy does not exist).<br>
Return type
<br>Dummy |
| --- |

| Example
<br>To get the Dummy object for dummy 100 in model m<br>
```
var d = Dummy.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a Dummy property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [Dummy.ViewParameters()](primer-dummy-class.md#Dummy::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
dummy property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if Dummy property d.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (d.GetParameter(d.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if Dummy property d.example is a parameter by using the GetParameter method:<br>
```
if (d.ViewParameters().GetParameter(d.example) ) do_something...
```
 |
| --- |

* * *

| GetPoint(index*[integer]*)

Description<br>Returns the information for a reference point |
| --- |

#### Arguments

* index (integer)
 
The index of the reference point you want the information for. **Note that reference points start at 0, not 1**. 0 &lt;= index &lt; [points](primer-dummy-class.md#points)

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
<br>To get the information for the 3rd reference point for dummy d:<br>
```
var info = d.GetPoint(2);
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
<br>To get the coordinates of the 3rd reference point for dummy d:<br>
```
var c = d.GetPointData(2);
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
<br>To get the title of the 3rd reference point for dummy d:<br>
```
var c = d.GetPointTitle(2);
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last dummy in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last dummy in

| Returns
<br>Dummy object (or null if there are no dummies in the model).<br>
Return type
<br>Dummy |
| --- |

| Example
<br>To get the last dummy in model m:<br>
```
var d = Dummy.Last(m);
```
 |
| --- |

* * *

| LastFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the last free dummy label in the model. Also see [Dummy.FirstFreeLabel()](primer-dummy-class.md#Dummy::FirstFreeLabel), [Dummy.NextFreeLabel()](primer-dummy-class.md#Dummy::NextFreeLabel) and see [Model.LastFreeItemLabel()](primer-model-class.md#Model::LastFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last free dummy label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest free in layer* in editing panels). If omitted the whole model will be used.

| Returns
<br>Dummy label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the last free dummy label in model m:<br>
```
var label = Dummy.LastFreeLabel(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next dummy in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Dummy object (or null if there are no more dummies in the model).<br>
Return type
<br>Dummy |
| --- |

| Example
<br>To get the dummy in model m after dummy d:<br>
```
var d = d.Next();
```
 |
| --- |

* * *

| NextFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the next free (highest+1) dummy label in the model. Also see [Dummy.FirstFreeLabel()](primer-dummy-class.md#Dummy::FirstFreeLabel), [Dummy.LastFreeLabel()](primer-dummy-class.md#Dummy::LastFreeLabel) and [Model.NextFreeItemLabel()](primer-model-class.md#Model::NextFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get next free dummy label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest+1 in layer* in editing panels). If omitted the whole model will be used (Equivalent to *Highest+1* in editing panels).

| Returns
<br>Dummy label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the next free dummy label in model m:<br>
```
var label = Dummy.NextFreeLabel(m);
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a dummy. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only dummies from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only dummies that are flagged with *limit* can be selected. If omitted, or null, any dummies from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[Dummy](primer-dummy-class.md) object (or null if not picked)<br>
Return type
<br>Dummy |
| --- |

| Example
<br>To pick a dummy from model m giving the prompt 'Pick dummy from screen':<br>
```
var d = Dummy.Pick('Pick dummy from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous dummy in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Dummy object (or null if there are no more dummies in the model).<br>
Return type
<br>Dummy |
| --- |

| Example
<br>To get the dummy in model m before dummy d:<br>
```
var d = d.Previous();
```
 |
| --- |

* * *

| RemovePoint(index*[integer]*)

Description<br>Removes a reference point from a dummy |
| --- |

#### Arguments

* index (integer)
 
The index of the reference point you want to remove. **Note that reference points start at 0, not 1**. 0 &lt;= index &lt; [points](primer-dummy-class.md#points)

| Returns
<br>no return value |
| --- |

| Example
<br>To remove for the 3rd reference point for dummy d:<br>
```
d.RemovePoint(2);
```
 |
| --- |

* * *

| RenumberAll(Model*[[Model](primer-model-class.md)]*, start*[integer]*) [static]
Description<br>Renumbers all of the dummies in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all dummies will be renumbered in

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the dummies in model m, from 1000000:<br>
```
Dummy.RenumberAll(m, 1000000);
```
 |
| --- |

* * *

| RenumberFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*) [static]
Description<br>Renumbers all of the flagged dummies in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged dummies will be renumbered in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the dummies that you want to renumber

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the dummies in model m flagged with f, from 1000000:<br>
```
Dummy.RenumberFlagged(m, f, 1000000);
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select dummies using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting dummies

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only dummies from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only dummies that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any dummies can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of dummies selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select dummies from model m, flagging those selected with flag f, giving the prompt 'Select dummies':<br>
```
Dummy.Select(f, 'Select dummies', m);
```
<br><br>To select dummies, flagging those selected with flag f but limiting selection to dummies flagged with flag l, giving the prompt 'Select dummies':<br>
```
Dummy.Select(f, 'Select dummies', l);
```
 |
| --- |

* * *

| SelectAssembly()

Description<br>Returns an array of objects containing the assembly informaitons or null if menu cancelled. |
| --- |

#### Arguments

No arguments

| Returns |
| --- |

Array of objects with the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| label | integer | Assembly label |
| parent | integer | Parent assembly label |
| title | string | Assembly title |

#### Return type

object

| Example
<br>To select assemblies in dummy d, giving the prompt "Select assemblies":<br>
```
d.SelectAssembly();
```
 |
| --- |

* * *

| SetAssemblyNodeSet(label*[integer]*, nsid*[integer]*)

Description<br>Sets a set node for a Dummy/HBM assembly. |
| --- |

#### Arguments

* label (integer)
 
The label of the assembly.

* nsid (integer)
 
The label of the set node to be added into the assembly.

| Returns
<br>no return value |
| --- |

| Example
<br>To set the node set with label=100 in the assembly with label = 2 for dummy d:<br>
```
d.SetAssemblyNodeSet(2, 100);
```
 |
| --- |

* * *

| SetAssemblyPart(label*[integer]*, pid*[integer]*)

Description<br>Sets a part for a Dummy assembly. |
| --- |

#### Arguments

* label (integer)
 
The label of the assembly.

* pid (integer)
 
The label of the set part to be added into the assembly.

| Returns
<br>no return value |
| --- |

| Example
<br>To set the part with label=100 in the assembly with label = 2 for dummy d:<br>
```
d.SetAssemblyPart(2, 100);
```
 |
| --- |

* * *

| SetAssemblyPartSet(label*[integer]*, psid*[integer]*)

Description<br>Sets a set part for a Dummy/HBM assembly. |
| --- |

#### Arguments

* label (integer)
 
The label of the assembly.

* psid (integer)
 
The label of the set part to be added into the assembly.

| Returns
<br>no return value |
| --- |

| Example
<br>To set the set part with label=100 in the assembly with label = 2 for dummy d:<br>
```
d.SetAssemblyPartSet(2, 100);
```
 |
| --- |

* * *

| SetAssemblyStopAngle(label*[integer]*, axis*[integer]*, stop\_neg*[real]*, stop\_pos*[real]*)

Description<br>Sets -ve and +ve stop angles in the assembly. |
| --- |

#### Arguments

* label (integer)
 
The label of the assembly.

* axis (integer)
 
Axis (0 = X, 1 = Y, or 2 = Z) on which to define stop angles.

* stop\_neg (real)
 
-ve stop angle.

* stop\_pos (real)
 
+ve stop angle.

| Returns
<br>No return value |
| --- |

| Example
<br>To set -90 and 90 stop angles in X-axis in the assembly with label = 2 for dummy d:<br>
```
d.SetAssemblyStopAngle(2, 0, -90, 90);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the dummy. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the dummy

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for dummy d:<br>
```
d.SetFlag(f);
```
 |
| --- |

* * *

| SetPoint(index*[integer]*, data*[object]*)

Description<br>Sets the data for a reference point in a dummy |
| --- |

#### Arguments

* index (integer)
 
The index of the reference point you want to set. **Note that reference points start at 0, not 1**. To add a new point use index [points](primer-dummy-class.md#points)

* data (object)

Object containing the reference point data. The properties can be: 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| assembly | integer | Assembly label |
| csys (optional) | integer | Coordinate system label |
| node (optional) | integer | Node label (not rewuired if using x, y and z) |
| rx (optional) | boolean | Point restrained rotationally in X |
| ry (optional) | boolean | Point restrained rotationally in Y |
| rz (optional) | boolean | Point restrained rotationally in Z |
| title (optional) | string | Title |
| tx (optional) | boolean | Point restrained translationally in X |
| ty (optional) | boolean | Point restrained translationally in Y |
| tz (optional) | boolean | Point restrained translationally in Z |
| x (optional) | real | X coordinate (not required if using node) |
| y (optional) | real | Y coordinate (not required if using node) |
| z (optional) | real | Z coordinate (not required if using node) |

| Returns
<br>no return value |
| --- |

| Example
<br>To add a new reference point to dummy d assembly 5 at node 1000 with title "Example point" restrained in x:<br><br>
```
var data = { assembly:5, node:1000, title:"Example point", tx:true };
d.SetPoint(d.points, data);
```
<br>To add a new reference point to dummy d assembly 5 at (10, 20, 30) with title "Example point":<br><br>
```
var data = { assembly:5, x:10, y:20, z:30, title:"Example point" };
d.SetPoint(d.points, data);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the dummy. The dummy will be sketched until you either call [Dummy.Unsketch()](primer-dummy-class.md#Dummy::Unsketch), [Dummy.UnsketchAll()](primer-dummy-class.md#Dummy::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the dummy is sketched. If omitted redraw is true. If you want to sketch several dummies and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch dummy d:<br>
```
d.Sketch();
```
 |
| --- |

* * *

| SketchAssembly(label*[integer]*, redraw (optional)*[boolean]*)

Description<br>Sketches the assembly |
| --- |

#### Arguments

* label (integer)
 
The label of the assembly you want to sketch.

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch the assembly with label 3 in dummy d:<br>
```
var info = d.SketchAssembly(3);
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged dummies in the model. The dummies will be sketched until you either call [Dummy.Unsketch()](primer-dummy-class.md#Dummy::Unsketch), [Dummy.UnsketchFlagged()](primer-dummy-class.md#Dummy::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged dummies will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the dummies that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the dummies are sketched. If omitted redraw is true. If you want to sketch flagged dummies several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all dummies flagged with flag in model m:<br>
```
Dummy.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of dummies in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing dummies should be counted. If false or omitted
referenced but undefined dummies will also be included in the total.

| Returns
<br>number of dummies<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of dummies in model m:<br>
```
var total = Dummy.Total(m);
```
 |
| --- |

* * *

| Unblank()

Description<br>Unblanks the dummy |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank dummy d:<br>
```
d.Unblank();
```
 |
| --- |

* * *

| UnblankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the dummies in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all dummies will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the dummies in model m:<br>
```
Dummy.UnblankAll(m);
```
 |
| --- |

* * *

| UnblankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the flagged dummies in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the flagged dummies will be unblanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the dummies that you want to unblank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the dummies in model m flagged with f:<br>
```
Dummy.UnblankFlagged(m, f);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the dummies in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all dummies will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the dummies

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the dummies in model m:<br>
```
Dummy.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the dummy. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the dummy is unsketched. If omitted redraw is true. If you want to unsketch several dummies and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch dummy d:<br>
```
d.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all dummies. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all dummies will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the dummies are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all dummies in model m:<br>
```
Dummy.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchAssembly(label*[integer]*, redraw (optional)*[boolean]*)

Description<br>Unsketches the assembly |
| --- |

#### Arguments

* label (integer)
 
The label of the assembly you want to unsketch.

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch the assembly with label 3 in dummy d:<br>
```
var info = d.UnsketchAssembly(3);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged dummies in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all dummies will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the dummies that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the dummies are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all dummies flagged with flag in model m:<br>
```
Dummy.UnsketchAll(m, flag);
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
<br>[Dummy](primer-dummy-class.md) object.<br>
Return type
<br>Dummy |
| --- |

| Example
<br>To check if Dummy property d.example is a parameter by using the [Dummy.GetParameter()](primer-dummy-class.md#Dummy::GetParameter) method:<br>
```
if (d.ViewParameters().GetParameter(d.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for dummy. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for dummy d:<br>
```
d.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this dummy. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for dummy d:<br>
```
var xrefs = d.Xrefs();
```
 |
| --- |

* * *