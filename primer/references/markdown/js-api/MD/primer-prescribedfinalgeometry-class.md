# PrescribedFinalGeometry class

The PrescribedFinalGeometry class gives you access to define boundary prescribed final\_geometry cards in PRIMER. [More...](primer-prescribedfinalgeometry-class.md#PrescribedFinalGeometry_details)

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

* [BlankAll](primer-prescribedfinalgeometry-class.md#PrescribedFinalGeometry::BlankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [BlankFlagged](primer-prescribedfinalgeometry-class.md#PrescribedFinalGeometry::BlankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Create](primer-prescribedfinalgeometry-class.md#PrescribedFinalGeometry::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [First](primer-prescribedfinalgeometry-class.md#PrescribedFinalGeometry::First)(Model*[[Model](primer-model-class.md)]*)
* [FirstFreeLabel](primer-prescribedfinalgeometry-class.md#PrescribedFinalGeometry::FirstFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [FlagAll](primer-prescribedfinalgeometry-class.md#PrescribedFinalGeometry::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-prescribedfinalgeometry-class.md#PrescribedFinalGeometry::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-prescribedfinalgeometry-class.md#PrescribedFinalGeometry::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-prescribedfinalgeometry-class.md#PrescribedFinalGeometry::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-prescribedfinalgeometry-class.md#PrescribedFinalGeometry::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-prescribedfinalgeometry-class.md#PrescribedFinalGeometry::Last)(Model*[[Model](primer-model-class.md)]*)
* [LastFreeLabel](primer-prescribedfinalgeometry-class.md#PrescribedFinalGeometry::LastFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [NextFreeLabel](primer-prescribedfinalgeometry-class.md#PrescribedFinalGeometry::NextFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [Pick](primer-prescribedfinalgeometry-class.md#PrescribedFinalGeometry::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [RenumberAll](primer-prescribedfinalgeometry-class.md#PrescribedFinalGeometry::RenumberAll)(Model*[[Model](primer-model-class.md)]*, start*[integer]*)
* [RenumberFlagged](primer-prescribedfinalgeometry-class.md#PrescribedFinalGeometry::RenumberFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*)
* [Select](primer-prescribedfinalgeometry-class.md#PrescribedFinalGeometry::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-prescribedfinalgeometry-class.md#PrescribedFinalGeometry::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-prescribedfinalgeometry-class.md#PrescribedFinalGeometry::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnblankAll](primer-prescribedfinalgeometry-class.md#PrescribedFinalGeometry::UnblankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnblankFlagged](primer-prescribedfinalgeometry-class.md#PrescribedFinalGeometry::UnblankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [UnflagAll](primer-prescribedfinalgeometry-class.md#PrescribedFinalGeometry::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-prescribedfinalgeometry-class.md#PrescribedFinalGeometry::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-prescribedfinalgeometry-class.md#PrescribedFinalGeometry::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-prescribedfinalgeometry-class.md#PrescribedFinalGeometry::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Blank](primer-prescribedfinalgeometry-class.md#PrescribedFinalGeometry::Blank)()
* [Blanked](primer-prescribedfinalgeometry-class.md#PrescribedFinalGeometry::Blanked)()
* [Browse](primer-prescribedfinalgeometry-class.md#PrescribedFinalGeometry::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-prescribedfinalgeometry-class.md#PrescribedFinalGeometry::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-prescribedfinalgeometry-class.md#PrescribedFinalGeometry::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-prescribedfinalgeometry-class.md#PrescribedFinalGeometry::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-prescribedfinalgeometry-class.md#PrescribedFinalGeometry::Edit)(modal (optional)*[boolean]*)
* [Error](primer-prescribedfinalgeometry-class.md#PrescribedFinalGeometry::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-prescribedfinalgeometry-class.md#PrescribedFinalGeometry::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-prescribedfinalgeometry-class.md#PrescribedFinalGeometry::GetComments)()
* [GetData](primer-prescribedfinalgeometry-class.md#PrescribedFinalGeometry::GetData)(index*[integer]*)
* [GetParameter](primer-prescribedfinalgeometry-class.md#PrescribedFinalGeometry::GetParameter)(prop*[string]*)
* [Keyword](primer-prescribedfinalgeometry-class.md#PrescribedFinalGeometry::Keyword)()
* [KeywordCards](primer-prescribedfinalgeometry-class.md#PrescribedFinalGeometry::KeywordCards)()
* [Next](primer-prescribedfinalgeometry-class.md#PrescribedFinalGeometry::Next)()
* [Previous](primer-prescribedfinalgeometry-class.md#PrescribedFinalGeometry::Previous)()
* [RemoveData](primer-prescribedfinalgeometry-class.md#PrescribedFinalGeometry::RemoveData)(index*[Integer]*)
* [SetData](primer-prescribedfinalgeometry-class.md#PrescribedFinalGeometry::SetData)(index*[Integer]*, nid*[integer]*, x*[real]*, y*[real]*, z*[real]*, lcid (optional)*[integer]*, death (optional)*[real]*)
* [SetFlag](primer-prescribedfinalgeometry-class.md#PrescribedFinalGeometry::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Sketch](primer-prescribedfinalgeometry-class.md#PrescribedFinalGeometry::Sketch)(redraw (optional)*[boolean]*)
* [Unblank](primer-prescribedfinalgeometry-class.md#PrescribedFinalGeometry::Unblank)()
* [Unsketch](primer-prescribedfinalgeometry-class.md#PrescribedFinalGeometry::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-prescribedfinalgeometry-class.md#PrescribedFinalGeometry::ViewParameters)()
* [Warning](primer-prescribedfinalgeometry-class.md#PrescribedFinalGeometry::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-prescribedfinalgeometry-class.md#PrescribedFinalGeometry::Xrefs)()
* [toString](primer-prescribedfinalgeometry-class.md#PrescribedFinalGeometry::toString)()

## PrescribedFinalGeometry properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| bpfgid | integer | [PrescribedFinalGeometry](primer-prescribedfinalgeometry-class.md) number. Also see the [label](primer-prescribedfinalgeometry-class.md#label) property which is an alternative name for this. |
| deathd | real | Default death time. |
| exists (read only) | logical | true if boundary prescribed final geometry exists, false if referred to but not defined. |
| id | integer | [PrescribedFinalGeometry](primer-prescribedfinalgeometry-class.md) number. Also see the [label](primer-prescribedfinalgeometry-class.md#label) property which is an alternative name for this. |
| include | integer | The [Include](primer-include-class.md) file number that the boundary prescribed final geometry is in. |
| label | integer | [PrescribedFinalGeometry](primer-prescribedfinalgeometry-class.md) number. Also see the [bpfgid](primer-prescribedfinalgeometry-class.md#bpfgid) property which is an alternative name for this. |
| lcidf | integer | Default [loadcurve](primer-curve-class.md) number. |
| lines (read only) | integer | Number of lines of nodal data on the card. |
| model (read only) | integer | The [Model](primer-model-class.md) number that the boundary prescribed final geometry is in. |

| Detailed Description<br>The PrescribedFinalGeometry class allows you to create, modify, edit and boundary prescribed final\_geometry cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new PrescribedFinalGeometry(Model*[[Model](primer-model-class.md)]*, bpfgid*[[PrescribedFinalGeometry](primer-prescribedfinalgeometry-class.md)]*)

Description<br>Create a new [PrescribedFinalGeometry](primer-prescribedfinalgeometry-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that PrescribedFinalGeometry will be created in

* bpfgid ([PrescribedFinalGeometry](primer-prescribedfinalgeometry-class.md))
 
[PrescribedFinalGeometry](primer-prescribedfinalgeometry-class.md) number.

| Returns
<br>[PrescribedFinalGeometry](primer-prescribedfinalgeometry-class.md) object<br>
Return type
<br>PrescribedFinalGeometry |
| --- |

| Example
<br>To create a new final geometry 99 in model m<br>
```
var b = new PrescribedFinalGeometry(m, 99);
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a boundary prescribed final geometry. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the boundary prescribed final geometry

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the boundary prescribed final geometry b:<br>
```
b.AssociateComment(c);
```
 |
| --- |

* * *

| Blank()

Description<br>Blanks the boundary prescribed final geometry |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To blank boundary prescribed final geometry b:<br>
```
b.Blank();
```
 |
| --- |

* * *

| BlankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the boundary prescribed final geometrys in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all boundary prescribed final geometrys will be blanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the boundary prescribed final geometrys in model m:<br>
```
PrescribedFinalGeometry.BlankAll(m);
```
 |
| --- |

* * *

| BlankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the flagged boundary prescribed final geometrys in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged boundary prescribed final geometrys will be blanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the boundary prescribed final geometrys that you want to blank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the boundary prescribed final geometrys in model m flagged with f:<br>
```
PrescribedFinalGeometry.BlankFlagged(m, f);
```
 |
| --- |

* * *

| Blanked()

Description<br>Checks if the boundary prescribed final geometry is blanked or not. |
| --- |

#### Arguments

No arguments

| Returns
<br>true if blanked, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if boundary prescribed final geometry b is blanked:<br>
```
if (b.Blanked() ) do_something...
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
<br>To Browse boundary prescribed final geometry b:<br>
```
b.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the boundary prescribed final geometry. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the boundary prescribed final geometry

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for boundary prescribed final geometry b:<br>
```
b.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the boundary prescribed final geometry. The target include of the copied boundary prescribed final geometry can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>PrescribedFinalGeometry object<br>
Return type
<br>PrescribedFinalGeometry |
| --- |

| Example
<br>To copy boundary prescribed final geometry b into boundary prescribed final geometry z:<br>
```
var z = b.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a boundary prescribed final geometry |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the boundary prescribed final geometry will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>PrescribedFinalGeometry object (or null if not made).<br>
Return type
<br>PrescribedFinalGeometry |
| --- |

| Example
<br>To start creating a boundary prescribed final geometry in model m:<br>
```
var b = PrescribedFinalGeometry.Create(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a boundary prescribed final geometry. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the boundary prescribed final geometry

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the boundary prescribed final geometry b:<br>
```
b.DetachComment(c);
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
<br>To Edit boundary prescribed final geometry b:<br>
```
b.Edit();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for boundary prescribed final geometry. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for boundary prescribed final geometry b:<br>
```
b.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first boundary prescribed final geometry in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first boundary prescribed final geometry in

| Returns
<br>PrescribedFinalGeometry object (or null if there are no boundary prescribed final geometrys in the model).<br>
Return type
<br>PrescribedFinalGeometry |
| --- |

| Example
<br>To get the first boundary prescribed final geometry in model m:<br>
```
var b = PrescribedFinalGeometry.First(m);
```
 |
| --- |

* * *

| FirstFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the first free boundary prescribed final geometry label in the model. Also see [PrescribedFinalGeometry.LastFreeLabel()](primer-prescribedfinalgeometry-class.md#PrescribedFinalGeometry::LastFreeLabel), [PrescribedFinalGeometry.NextFreeLabel()](primer-prescribedfinalgeometry-class.md#PrescribedFinalGeometry::NextFreeLabel) and [Model.FirstFreeItemLabel()](primer-model-class.md#Model::FirstFreeItemLabel). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first free boundary prescribed final geometry label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *First free in layer* in editing panels). If omitted the whole model will be used (Equivalent to *First free* in editing panels).

| Returns
<br>PrescribedFinalGeometry label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the first free boundary prescribed final geometry label in model m:<br>
```
var label = PrescribedFinalGeometry.FirstFreeLabel(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the boundary prescribed final geometrys in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all boundary prescribed final geometrys will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the boundary prescribed final geometrys

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the boundary prescribed final geometrys with flag f in model m:<br>
```
PrescribedFinalGeometry.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the boundary prescribed final geometry is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the boundary prescribed final geometry

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if boundary prescribed final geometry b has flag f set on it:<br>
```
if (b.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each boundary prescribed final geometry in the model.<br> **Note that ForEach has been designed to make looping over boundary prescribed final geometrys as fast as possible and so has some limitations. Firstly, a single temporary PrescribedFinalGeometry object is created and on each function call it is updated with the current boundary prescribed final geometry data. This means that you should not try to store the PrescribedFinalGeometry object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new boundary prescribed final geometrys inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all boundary prescribed final geometrys are in

* func (function)
 
Function to call for each boundary prescribed final geometry

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the boundary prescribed final geometrys in model m:<br>
```
PrescribedFinalGeometry.ForEach(m, test);
function test(b)
{
// b is PrescribedFinalGeometry object
}
```
<br><br>To call function test for all of the boundary prescribed final geometrys in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
PrescribedFinalGeometry.ForEach(m, test, data);
function test(b, extra)
{
// b is PrescribedFinalGeometry object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of PrescribedFinalGeometry objects or properties for all of the boundary prescribed final geometrys in a model in PRIMER. If the optional property argument is not given then an array of PrescribedFinalGeometry objects is returned. If the property argument is given, that property value for each boundary prescribed final geometry is returned in the array instead of a PrescribedFinalGeometry object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get boundary prescribed final geometrys from

* property (optional) (string)
 
Name for property to get for all boundary prescribed final geometrys in the model

| Returns
<br>Array of PrescribedFinalGeometry objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of PrescribedFinalGeometry objects for all of the boundary prescribed final geometrys in model m:<br>
```
var a = PrescribedFinalGeometry.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each boundary prescribed final geometry in model m:<br>
```
var a = PrescribedFinalGeometry.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a boundary prescribed final geometry. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the boundary prescribed final geometry b:<br>
```
var comm_array = b.GetComments();
```
 |
| --- |

* * *

| GetData(index*[integer]*)

Description<br>Returns data for open-ended cards for a given row number in \*BOUNDARY\_PRESCRIBED\_FINAL\_GEOMETRY. |
| --- |

#### Arguments

* index (integer)
 
Index of open-ended card you want the data for. **Note that indices start at 0, not 1**.
 0 &lt;= index &lt; [lines](primer-prescribedfinalgeometry-class.md#lines)

| Returns
<br>An array containing data (NID, X, Y, Z, LCID, DEATH).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the data for the 3rd open-ended row for boundary prescribed final geometry b:<br>
```
var data = b.GetData(2);
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of PrescribedFinalGeometry objects for all of the flagged boundary prescribed final geometrys in a model in PRIMER If the optional property argument is not given then an array of PrescribedFinalGeometry objects is returned. If the property argument is given, then that property value for each boundary prescribed final geometry is returned in the array instead of a PrescribedFinalGeometry object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get boundary prescribed final geometrys from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the boundary prescribed final geometrys that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged boundary prescribed final geometrys in the model

| Returns
<br>Array of PrescribedFinalGeometry objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of PrescribedFinalGeometry objects for all of the boundary prescribed final geometrys in model m flagged with f:<br>
```
var b = PrescribedFinalGeometry.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the boundary prescribed final geometrys in model m flagged with f:<br>
```
var a = PrescribedFinalGeometry.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the PrescribedFinalGeometry object for a boundary prescribed final geometry ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the boundary prescribed final geometry in

* number (integer)
 
number of the boundary prescribed final geometry you want the PrescribedFinalGeometry object for

| Returns
<br>PrescribedFinalGeometry object (or null if boundary prescribed final geometry does not exist).<br>
Return type
<br>PrescribedFinalGeometry |
| --- |

| Example
<br>To get the PrescribedFinalGeometry object for boundary prescribed final geometry 100 in model m<br>
```
var b = PrescribedFinalGeometry.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a PrescribedFinalGeometry property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [PrescribedFinalGeometry.ViewParameters()](primer-prescribedfinalgeometry-class.md#PrescribedFinalGeometry::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
boundary prescribed final geometry property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if PrescribedFinalGeometry property b.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (b.GetParameter(b.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if PrescribedFinalGeometry property b.example is a parameter by using the GetParameter method:<br>
```
if (b.ViewParameters().GetParameter(b.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this PrescribedFinalGeometry (\*BOUNDARY\_PRESCRIBED\_FINAL\_GEOMETRY). **Note that a carriage return is not added**. See also [PrescribedFinalGeometry.KeywordCards()](primer-prescribedfinalgeometry-class.md#PrescribedFinalGeometry::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for PrescribedFinalGeometry bfg:<br>
```
var key = bfg.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the PrescribedFinalGeometry. **Note that a carriage return is not added**. See also [PrescribedFinalGeometry.Keyword()](primer-prescribedfinalgeometry-class.md#PrescribedFinalGeometry::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for PrescribedFinalGeometry bfg:<br>
```
var cards = bfg.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last boundary prescribed final geometry in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last boundary prescribed final geometry in

| Returns
<br>PrescribedFinalGeometry object (or null if there are no boundary prescribed final geometrys in the model).<br>
Return type
<br>PrescribedFinalGeometry |
| --- |

| Example
<br>To get the last boundary prescribed final geometry in model m:<br>
```
var b = PrescribedFinalGeometry.Last(m);
```
 |
| --- |

* * *

| LastFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the last free boundary prescribed final geometry label in the model. Also see [PrescribedFinalGeometry.FirstFreeLabel()](primer-prescribedfinalgeometry-class.md#PrescribedFinalGeometry::FirstFreeLabel), [PrescribedFinalGeometry.NextFreeLabel()](primer-prescribedfinalgeometry-class.md#PrescribedFinalGeometry::NextFreeLabel) and see [Model.LastFreeItemLabel()](primer-model-class.md#Model::LastFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last free boundary prescribed final geometry label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest free in layer* in editing panels). If omitted the whole model will be used.

| Returns
<br>PrescribedFinalGeometry label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the last free boundary prescribed final geometry label in model m:<br>
```
var label = PrescribedFinalGeometry.LastFreeLabel(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next boundary prescribed final geometry in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>PrescribedFinalGeometry object (or null if there are no more boundary prescribed final geometrys in the model).<br>
Return type
<br>PrescribedFinalGeometry |
| --- |

| Example
<br>To get the boundary prescribed final geometry in model m after boundary prescribed final geometry b:<br>
```
var b = b.Next();
```
 |
| --- |

* * *

| NextFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the next free (highest+1) boundary prescribed final geometry label in the model. Also see [PrescribedFinalGeometry.FirstFreeLabel()](primer-prescribedfinalgeometry-class.md#PrescribedFinalGeometry::FirstFreeLabel), [PrescribedFinalGeometry.LastFreeLabel()](primer-prescribedfinalgeometry-class.md#PrescribedFinalGeometry::LastFreeLabel) and [Model.NextFreeItemLabel()](primer-model-class.md#Model::NextFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get next free boundary prescribed final geometry label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest+1 in layer* in editing panels). If omitted the whole model will be used (Equivalent to *Highest+1* in editing panels).

| Returns
<br>PrescribedFinalGeometry label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the next free boundary prescribed final geometry label in model m:<br>
```
var label = PrescribedFinalGeometry.NextFreeLabel(m);
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a boundary prescribed final geometry. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only boundary prescribed final geometrys from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only boundary prescribed final geometrys that are flagged with *limit* can be selected. If omitted, or null, any boundary prescribed final geometrys from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[PrescribedFinalGeometry](primer-prescribedfinalgeometry-class.md) object (or null if not picked)<br>
Return type
<br>PrescribedFinalGeometry |
| --- |

| Example
<br>To pick a boundary prescribed final geometry from model m giving the prompt 'Pick boundary prescribed final geometry from screen':<br>
```
var b = PrescribedFinalGeometry.Pick('Pick boundary prescribed final geometry from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous boundary prescribed final geometry in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>PrescribedFinalGeometry object (or null if there are no more boundary prescribed final geometrys in the model).<br>
Return type
<br>PrescribedFinalGeometry |
| --- |

| Example
<br>To get the boundary prescribed final geometry in model m before boundary prescribed final geometry b:<br>
```
var b = b.Previous();
```
 |
| --- |

* * *

| RemoveData(index*[Integer]*)

Description<br>Removes a line of data for a \*BOUNDARY\_PRESCRIBED\_FINAL\_GEOMETRY. |
| --- |

#### Arguments

* index (Integer)
 
The index of the \*BOUNDARY\_PRESCRIBED\_FINAL\_GEOMETRY data to remove. **Note that indices start at 0, not 1**.
 0 &lt;= index &lt; [lines](primer-prescribedfinalgeometry-class.md#lines)

| Returns
<br>No return value. |
| --- |

| Example
<br>To remove row 2 (indices start with 0) of open-ended cards for \*BOUNDARY\_PRESCRIBED\_FINAL\_GEOMETRY b:<br>
```
b.RemoveData(1);
```
 |
| --- |

* * *

| RenumberAll(Model*[[Model](primer-model-class.md)]*, start*[integer]*) [static]
Description<br>Renumbers all of the boundary prescribed final geometrys in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all boundary prescribed final geometrys will be renumbered in

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the boundary prescribed final geometrys in model m, from 1000000:<br>
```
PrescribedFinalGeometry.RenumberAll(m, 1000000);
```
 |
| --- |

* * *

| RenumberFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*) [static]
Description<br>Renumbers all of the flagged boundary prescribed final geometrys in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged boundary prescribed final geometrys will be renumbered in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the boundary prescribed final geometrys that you want to renumber

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the boundary prescribed final geometrys in model m flagged with f, from 1000000:<br>
```
PrescribedFinalGeometry.RenumberFlagged(m, f, 1000000);
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select boundary prescribed final geometrys using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting boundary prescribed final geometrys

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only boundary prescribed final geometrys from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only boundary prescribed final geometrys that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any boundary prescribed final geometrys can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of boundary prescribed final geometrys selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select boundary prescribed final geometrys from model m, flagging those selected with flag f, giving the prompt 'Select boundary prescribed final geometrys':<br>
```
PrescribedFinalGeometry.Select(f, 'Select boundary prescribed final geometrys', m);
```
<br><br>To select boundary prescribed final geometrys, flagging those selected with flag f but limiting selection to boundary prescribed final geometrys flagged with flag l, giving the prompt 'Select boundary prescribed final geometrys':<br>
```
PrescribedFinalGeometry.Select(f, 'Select boundary prescribed final geometrys', l);
```
 |
| --- |

* * *

| SetData(index*[Integer]*, nid*[integer]*, x*[real]*, y*[real]*, z*[real]*, lcid (optional)*[integer]*, death (optional)*[real]*)

Description<br>Sets a line of data for a \*BOUNDARY\_PRESCRIBED\_FINAL\_GEOMETRY. |
| --- |

#### Arguments

* index (Integer)
 
The index of the \*BOUNDARY\_PRESCRIBED\_FINAL\_GEOMETRY data to set. **Note that indices start at 0, not 1**.
 0 &lt;= index &lt;= [lines](primer-prescribedfinalgeometry-class.md#lines)

* nid (integer)
 
Node or negative node set number.

* x (real)
 
X coordinates of final geometry.

* y (real)
 
Y coordinates of final geometry.

* z (real)
 
Z coordinates of final geometry.

* lcid (optional) (integer)
 
Loadcurve number.

* death (optional) (real)
 
Death time.

| Returns
<br>No return value. |
| --- |

| Example
<br>To set values for row 2 (indices start with 0) of open-ended cards for \*BOUNDARY\_PRESCRIBED\_FINAL\_GEOMETRY b with the following specification: nid, x, y, z, lcid, death are 99, 0.1, 0.2, 0.3, 88, 100.0 respectively<br>
```
b.SetData(1, 99, 0.1, 0.2, 0.3, 88, 100.0);
```
<br><br>To append a new line of data (using the same example values):<br>
```
b.SetData(b.lines, 99, 0.1, 0.2, 0.3, 88, 100.0);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the boundary prescribed final geometry. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the boundary prescribed final geometry

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for boundary prescribed final geometry b:<br>
```
b.SetFlag(f);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the boundary prescribed final geometry. The boundary prescribed final geometry will be sketched until you either call [PrescribedFinalGeometry.Unsketch()](primer-prescribedfinalgeometry-class.md#PrescribedFinalGeometry::Unsketch), [PrescribedFinalGeometry.UnsketchAll()](primer-prescribedfinalgeometry-class.md#PrescribedFinalGeometry::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the boundary prescribed final geometry is sketched. If omitted redraw is true. If you want to sketch several boundary prescribed final geometrys and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch boundary prescribed final geometry b:<br>
```
b.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged boundary prescribed final geometrys in the model. The boundary prescribed final geometrys will be sketched until you either call [PrescribedFinalGeometry.Unsketch()](primer-prescribedfinalgeometry-class.md#PrescribedFinalGeometry::Unsketch), [PrescribedFinalGeometry.UnsketchFlagged()](primer-prescribedfinalgeometry-class.md#PrescribedFinalGeometry::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged boundary prescribed final geometrys will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the boundary prescribed final geometrys that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the boundary prescribed final geometrys are sketched. If omitted redraw is true. If you want to sketch flagged boundary prescribed final geometrys several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all boundary prescribed final geometrys flagged with flag in model m:<br>
```
PrescribedFinalGeometry.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of boundary prescribed final geometrys in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing boundary prescribed final geometrys should be counted. If false or omitted
referenced but undefined boundary prescribed final geometrys will also be included in the total.

| Returns
<br>number of boundary prescribed final geometrys<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of boundary prescribed final geometrys in model m:<br>
```
var total = PrescribedFinalGeometry.Total(m);
```
 |
| --- |

* * *

| Unblank()

Description<br>Unblanks the boundary prescribed final geometry |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank boundary prescribed final geometry b:<br>
```
b.Unblank();
```
 |
| --- |

* * *

| UnblankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the boundary prescribed final geometrys in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all boundary prescribed final geometrys will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the boundary prescribed final geometrys in model m:<br>
```
PrescribedFinalGeometry.UnblankAll(m);
```
 |
| --- |

* * *

| UnblankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the flagged boundary prescribed final geometrys in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the flagged boundary prescribed final geometrys will be unblanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the boundary prescribed final geometrys that you want to unblank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the boundary prescribed final geometrys in model m flagged with f:<br>
```
PrescribedFinalGeometry.UnblankFlagged(m, f);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the boundary prescribed final geometrys in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all boundary prescribed final geometrys will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the boundary prescribed final geometrys

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the boundary prescribed final geometrys in model m:<br>
```
PrescribedFinalGeometry.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the boundary prescribed final geometry. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the boundary prescribed final geometry is unsketched. If omitted redraw is true. If you want to unsketch several boundary prescribed final geometrys and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch boundary prescribed final geometry b:<br>
```
b.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all boundary prescribed final geometrys. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all boundary prescribed final geometrys will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the boundary prescribed final geometrys are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all boundary prescribed final geometrys in model m:<br>
```
PrescribedFinalGeometry.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged boundary prescribed final geometrys in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all boundary prescribed final geometrys will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the boundary prescribed final geometrys that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the boundary prescribed final geometrys are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all boundary prescribed final geometrys flagged with flag in model m:<br>
```
PrescribedFinalGeometry.UnsketchAll(m, flag);
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
<br>[PrescribedFinalGeometry](primer-prescribedfinalgeometry-class.md) object.<br>
Return type
<br>PrescribedFinalGeometry |
| --- |

| Example
<br>To check if PrescribedFinalGeometry property b.example is a parameter by using the [PrescribedFinalGeometry.GetParameter()](primer-prescribedfinalgeometry-class.md#PrescribedFinalGeometry::GetParameter) method:<br>
```
if (b.ViewParameters().GetParameter(b.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for boundary prescribed final geometry. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for boundary prescribed final geometry b:<br>
```
b.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this boundary prescribed final geometry. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for boundary prescribed final geometry b:<br>
```
var xrefs = b.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the PrescribedFinalGeometry data in keyword format. Note that this contains the keyword header and the keyword cards. See also [PrescribedFinalGeometry.Keyword()](primer-prescribedfinalgeometry-class.md#PrescribedFinalGeometry::Keyword) and [PrescribedFinalGeometry.KeywordCards()](primer-prescribedfinalgeometry-class.md#PrescribedFinalGeometry::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for PrescribedFinalGeometry bfg in keyword format<br>
```
var s = bfg.toString();
```
 |
| --- |

* * *