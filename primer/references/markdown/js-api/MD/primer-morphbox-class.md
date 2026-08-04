# MorphBox class

The MorphBox class gives you access to morph boxes in PRIMER. [More...](primer-morphbox-class.md#MorphBox_details)

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

* [BlankAll](primer-morphbox-class.md#MorphBox::BlankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [BlankFlagged](primer-morphbox-class.md#MorphBox::BlankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [First](primer-morphbox-class.md#MorphBox::First)(Model*[[Model](primer-model-class.md)]*)
* [FirstFreeLabel](primer-morphbox-class.md#MorphBox::FirstFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [FlagAll](primer-morphbox-class.md#MorphBox::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [FlagAllMorphedConnections](primer-morphbox-class.md#MorphBox::FlagAllMorphedConnections)(model*[[Model](primer-model-class.md)]*, flag*[integer]*)
* [ForEach](primer-morphbox-class.md#MorphBox::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-morphbox-class.md#MorphBox::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-morphbox-class.md#MorphBox::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-morphbox-class.md#MorphBox::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-morphbox-class.md#MorphBox::Last)(Model*[[Model](primer-model-class.md)]*)
* [LastFreeLabel](primer-morphbox-class.md#MorphBox::LastFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [NextFreeLabel](primer-morphbox-class.md#MorphBox::NextFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [Pick](primer-morphbox-class.md#MorphBox::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [RenumberAll](primer-morphbox-class.md#MorphBox::RenumberAll)(Model*[[Model](primer-model-class.md)]*, start*[integer]*)
* [RenumberFlagged](primer-morphbox-class.md#MorphBox::RenumberFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*)
* [Select](primer-morphbox-class.md#MorphBox::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SetMorphConnections](primer-morphbox-class.md#MorphBox::SetMorphConnections)(status*[boolean]*)
* [SketchFlagged](primer-morphbox-class.md#MorphBox::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-morphbox-class.md#MorphBox::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnblankAll](primer-morphbox-class.md#MorphBox::UnblankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnblankFlagged](primer-morphbox-class.md#MorphBox::UnblankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [UnflagAll](primer-morphbox-class.md#MorphBox::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-morphbox-class.md#MorphBox::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-morphbox-class.md#MorphBox::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [ApplyMorphing](primer-morphbox-class.md#MorphBox::ApplyMorphing)(redraw (optional)*[boolean]*)
* [AssociateComment](primer-morphbox-class.md#MorphBox::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Blank](primer-morphbox-class.md#MorphBox::Blank)()
* [Blanked](primer-morphbox-class.md#MorphBox::Blanked)()
* [ClearFlag](primer-morphbox-class.md#MorphBox::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-morphbox-class.md#MorphBox::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-morphbox-class.md#MorphBox::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Error](primer-morphbox-class.md#MorphBox::Error)(message*[string]*, details (optional)*[string]*)
* [FlagMorphedConnections](primer-morphbox-class.md#MorphBox::FlagMorphedConnections)(flag*[integer]*)
* [Flagged](primer-morphbox-class.md#MorphBox::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-morphbox-class.md#MorphBox::GetComments)()
* [GetParameter](primer-morphbox-class.md#MorphBox::GetParameter)(prop*[string]*)
* [GetPoint](primer-morphbox-class.md#MorphBox::GetPoint)(xindex*[integer]*, yindex*[integer]*, zindex*[integer]*)
* [Keyword](primer-morphbox-class.md#MorphBox::Keyword)()
* [KeywordCards](primer-morphbox-class.md#MorphBox::KeywordCards)()
* [Next](primer-morphbox-class.md#MorphBox::Next)()
* [Previous](primer-morphbox-class.md#MorphBox::Previous)()
* [Reset](primer-morphbox-class.md#MorphBox::Reset)(redraw (optional)*[boolean]*)
* [SetFlag](primer-morphbox-class.md#MorphBox::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [SetPointID](primer-morphbox-class.md#MorphBox::SetPointID)(xindex*[integer]*, yindex*[integer]*, zindex*[integer]*, id*[integer]*)
* [Sketch](primer-morphbox-class.md#MorphBox::Sketch)(redraw (optional)*[boolean]*)
* [Unblank](primer-morphbox-class.md#MorphBox::Unblank)()
* [Unsketch](primer-morphbox-class.md#MorphBox::Unsketch)(redraw (optional)*[boolean]*)
* [UpdateParametricCoordinates](primer-morphbox-class.md#MorphBox::UpdateParametricCoordinates)()
* [ViewParameters](primer-morphbox-class.md#MorphBox::ViewParameters)()
* [Warning](primer-morphbox-class.md#MorphBox::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-morphbox-class.md#MorphBox::Xrefs)()
* [toString](primer-morphbox-class.md#MorphBox::toString)()

## MorphBox properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists (read only) | logical | true if box exists, false if referred to but not defined. |
| include | integer | The [Include](primer-include-class.md) file number that the box is in. |
| label | integer | [MorphBox](primer-morphbox-class.md) number. |
| model (read only) | integer | The [Model](primer-model-class.md) number that the box is in. |
| nx (read only) | integer | Number of morph points in parametric X direction |
| ny (read only) | integer | Number of morph points in parametric Y direction |
| nz (read only) | integer | Number of morph points in parametric Z direction |
| setid (read only) | integer | ID for node set of nodes dragged with the box. This will be a \*SET\_NODE\_COLUMN containing the nodes together with their parametric coordinates in X, Y, Z. It is strongly discouraged to edit the contents of this set or the column data manually. |

| Detailed Description<br>The MorphBox class allows you to create, modify and manipulate morph boxes.<br>See the documentation below for more details. |
| --- |

| Constructor
new MorphBox(Model*[[Model](primer-model-class.md)]*, label*[integer]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, options (optional)*[object]*)

Description<br>Create a new [MorphBox](primer-morphbox-class.md) object around flagged items. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that morph box will be created in

* label (integer)
 
[MorphBox](primer-morphbox-class.md) number

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the entities (for example nodes, elements and/or parts) that you want to create the box around

* options (optional) (object)

Options to create the box. 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| csys (optional) | integer | Coordinate system for local coordinates. Leave undefined if using global coordinates or if local coordinate system defined with n1, n2 and n3. |
| n1 (optional) | integer | Node 1 label for local coordinate. Leave undefined if using global coordinates or if local coordinate system defined with csys. |
| n2 (optional) | integer | Node 2 label for local coordinate. Leave undefined if using global coordinates or if local coordinate system defined with csys. |
| n3 (optional) | integer | Node 3 label for local coordinate. Leave undefined if using global coordinates or if local coordinate system defined with csys. |
| nx (optional) | integer | Number of points in X direction of box (assumed to be 2 for linear box if omitted) |
| ny (optional) | integer | Number of points in Y direction of box (assumed to be 2 for linear box if omitted) |
| nz (optional) | integer | Number of points in Z direction of box (assumed to be 2 for linear box if omitted) |
| points (optional) | Array of integers | Array of integers of depth 3 containing the morph point IDs. This should be omitted in the (default) case of also creating new morph points together with the morph box at the locations based on the bounding box of the flagged items. If this array contains 'nx' by 'ny' by 'nz' existing morph points, the morph box is attached to these points, and 'csys', 'n1', 'n2', 'n3' will be irrelevant. Each 'points[i][j][k]' should contain the morph point ID to be added at index i in local X direction, index j in local Y direction and index k in local Z direction. The box will then still contain flagged nodes only, but nodes geometrically outside the volume of the morph points will not be included either. |

| Returns
<br>[MorphBox](primer-morphbox-class.md) object<br>
Return type
<br>MorphBox |
| --- |

| Example
<br>To create a new morph box in model m with label 100 and 2 by 2 by 2 points (linear in each coordinate direction) around all items flagged with flag in global coordinates:<br>
```
var box = new MorphBox(m, 100, flag);
```
<br>To create a new morph box in model m with label 100 and 4 by 4 by 2 points (cubic in parametric X and Y directions and linear in Z direction) around all flagged items in local coordinates determined by nodes 11, 12 and 13:<br>
```
var options = new Object();
options.nx = 4;
options.ny = 4;
options.nz = 2;
options.n1 = 11;
options.n2 = 12;
options.n3 = 13;
var box = new MorphBox(m, 100, flag, options);
```
<br>Suppose there are already morph points 1, 2, 3, 4, 5, 6, 7, 8 in model m at coordinates (0, 0, 0), (0, 0, 100), (0, 100, 0), (0, 100, 100), (100, 0, 0), (100, 0, 100), (100, 100, 0), (100, 100, 100) respectively. To create a new linear morph box between these points containing flagged items inside their volume:<br>
```
var options = new Object();
options.points = [[[1,2],[3,4]],[[5,6],[7,8]]];
var box = new MorphBox(m, 100, flag, options);
```
 |
| --- |

| Details of functions 
ApplyMorphing(redraw (optional)*[boolean]*)

Description<br>Recalculates the X, Y and Z coordinates of all nodes linked to the morph box by the \*SET\_NODE\_COLUMN. This should be called when coordinates of morph points have changed and you wish to apply the morphing. If several morph point positions on the same box change, then it is more speed-efficient to call this function only once for the box. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to apply the morphing to several boxes and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [Model.UpdateGraphics()](primer-model-class.md#Model::UpdateGraphics).

| Returns
<br>No return value |
| --- |

| Example
<br>To calculate all global X, Y and Z coordinates for the morphed nodes for box b:<br>
```
b.ApplyMorphing();
```
 |
| --- |

* * *

| AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a box. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the box

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the box b:<br>
```
b.AssociateComment(c);
```
 |
| --- |

* * *

| Blank()

Description<br>Blanks the box |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To blank box b:<br>
```
b.Blank();
```
 |
| --- |

* * *

| BlankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the boxs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all boxs will be blanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the boxs in model m:<br>
```
MorphBox.BlankAll(m);
```
 |
| --- |

* * *

| BlankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the flagged boxs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged boxs will be blanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the boxs that you want to blank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the boxs in model m flagged with f:<br>
```
MorphBox.BlankFlagged(m, f);
```
 |
| --- |

* * *

| Blanked()

Description<br>Checks if the box is blanked or not. |
| --- |

#### Arguments

No arguments

| Returns
<br>true if blanked, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if box b is blanked:<br>
```
if (b.Blanked() ) do_something...
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the box. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the box

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for box b:<br>
```
b.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the box. The target include of the copied box can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>MorphBox object<br>
Return type
<br>MorphBox |
| --- |

| Example
<br>To copy box b into box z:<br>
```
var z = b.Copy();
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a box. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the box

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the box b:<br>
```
b.DetachComment(c);
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for box. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for box b:<br>
```
b.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first box in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first box in

| Returns
<br>MorphBox object (or null if there are no boxs in the model).<br>
Return type
<br>MorphBox |
| --- |

| Example
<br>To get the first box in model m:<br>
```
var b = MorphBox.First(m);
```
 |
| --- |

* * *

| FirstFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the first free box label in the model. Also see [MorphBox.LastFreeLabel()](primer-morphbox-class.md#MorphBox::LastFreeLabel), [MorphBox.NextFreeLabel()](primer-morphbox-class.md#MorphBox::NextFreeLabel) and [Model.FirstFreeItemLabel()](primer-model-class.md#Model::FirstFreeItemLabel). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first free box label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *First free in layer* in editing panels). If omitted the whole model will be used (Equivalent to *First free* in editing panels).

| Returns
<br>MorphBox label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the first free box label in model m:<br>
```
var label = MorphBox.FirstFreeLabel(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the boxs in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all boxs will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the boxs

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the boxs with flag f in model m:<br>
```
MorphBox.FlagAll(m, f);
```
 |
| --- |

* * *

| FlagAllMorphedConnections(model*[[Model](primer-model-class.md)]*, flag*[integer]*) [static]
Description<br>Flags all connections, in a given model, that have been morphed since their last remake. This includes connections that have been morphed by a morph box that has since been deleted. |
| --- |

#### Arguments

* model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) containing desired connections.

* flag (integer)
 
Flag to mark morphed connections.

| Returns
<br>true if successful, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To flag all morphed connections in [Model](primer-model-class.md) m with flag.<br>
```
var flag = AllocateFlag();
   MorphBox.FlagAllMorphedConnections(m, flag);
```
 |
| --- |

* * *

| FlagMorphedConnections(flag*[integer]*)

Description<br>Flags all connections that have been morphed, by a givine morph box, since their last remake. A connection could be morphed by one morph box and not another, therefore calling this function on two boxes that share a connection may produce different results depending on which box the function is called for. E.g. morb1 and morb2 share conx1, morb1 gets morphed whereas morb2 remains unchanged. Calling this function for morb1 will flag conx1, however calling the function for morb2 won't flag conx1. |
| --- |

#### Arguments

* flag (integer)
 
Flag to mark morphed connections.

| Returns
<br>true if successful, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To flag all morphed connections in a [MorphBox](primer-morphbox-class.md) with flag.<br>
```
var flag = AllocateFlag();
   box.FlagMorphedConnections(flag);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the box is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the box

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if box b has flag f set on it:<br>
```
if (b.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each box in the model.<br> **Note that ForEach has been designed to make looping over boxs as fast as possible and so has some limitations. Firstly, a single temporary MorphBox object is created and on each function call it is updated with the current box data. This means that you should not try to store the MorphBox object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new boxs inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all boxs are in

* func (function)
 
Function to call for each box

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the boxs in model m:<br>
```
MorphBox.ForEach(m, test);
function test(b)
{
// b is MorphBox object
}
```
<br><br>To call function test for all of the boxs in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
MorphBox.ForEach(m, test, data);
function test(b, extra)
{
// b is MorphBox object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of MorphBox objects or properties for all of the boxs in a model in PRIMER. If the optional property argument is not given then an array of MorphBox objects is returned. If the property argument is given, that property value for each box is returned in the array instead of a MorphBox object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get boxs from

* property (optional) (string)
 
Name for property to get for all boxs in the model

| Returns
<br>Array of MorphBox objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of MorphBox objects for all of the boxs in model m:<br>
```
var a = MorphBox.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each box in model m:<br>
```
var a = MorphBox.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a box. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the box b:<br>
```
var comm_array = b.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of MorphBox objects for all of the flagged boxs in a model in PRIMER If the optional property argument is not given then an array of MorphBox objects is returned. If the property argument is given, then that property value for each box is returned in the array instead of a MorphBox object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get boxs from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the boxs that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged boxs in the model

| Returns
<br>Array of MorphBox objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of MorphBox objects for all of the boxs in model m flagged with f:<br>
```
var b = MorphBox.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the boxs in model m flagged with f:<br>
```
var a = MorphBox.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the MorphBox object for a box ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the box in

* number (integer)
 
number of the box you want the MorphBox object for

| Returns
<br>MorphBox object (or null if box does not exist).<br>
Return type
<br>MorphBox |
| --- |

| Example
<br>To get the MorphBox object for box 100 in model m<br>
```
var b = MorphBox.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a MorphBox property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [MorphBox.ViewParameters()](primer-morphbox-class.md#MorphBox::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
box property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if MorphBox property b.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (b.GetParameter(b.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if MorphBox property b.example is a parameter by using the GetParameter method:<br>
```
if (b.ViewParameters().GetParameter(b.example) ) do_something...
```
 |
| --- |

* * *

| GetPoint(xindex*[integer]*, yindex*[integer]*, zindex*[integer]*)

Description<br>Returns the morph point ID on the morph box at indices in X, Y and Z directions. |
| --- |

#### Arguments

* xindex (integer)
 
Index of the point in X direction. Note that indices start at 0, so it should be 0 for the points with the smallest parameteric X coordinate and box.nx-1 for the points with the highest X.

* yindex (integer)
 
Index of the point in Y direction. Note that indices start at 0, so it should be 0 for the points with the smallest parameteric Y coordinate and box.ny-1 for the points with the highest Y.

* zindex (integer)
 
Index of the point in Z direction. Note that indices start at 0, so it should be 0 for the points with the smallest parameteric Z coordinate and box.nz-1 for the points with the highest Z.

| Returns
<br>A MorphPoint object for the point on the box at given indices.<br>
Return type
<br>MorphPoint |
| --- |

| Example
<br>To get the 2nd point on the edge along the local Y direction and at highest local X and lowest local Z coordinate:<br>
```
var point = box.GetPoint(box.nx-1, 1, 0);
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this morph box (\*MORPH\_BOX or \*MORPH\_BOX\_HIGH\_ORDER). **Note that a carriage return is not added**. See also [MorphBox.KeywordCards()](primer-morphbox-class.md#MorphBox::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for morph box b:<br>
```
var key = b.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the morph box. **Note that a carriage return is not added**. See also [MorphBox.Keyword()](primer-morphbox-class.md#MorphBox::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for morph box b:<br>
```
var cards = b.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last box in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last box in

| Returns
<br>MorphBox object (or null if there are no boxs in the model).<br>
Return type
<br>MorphBox |
| --- |

| Example
<br>To get the last box in model m:<br>
```
var b = MorphBox.Last(m);
```
 |
| --- |

* * *

| LastFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the last free box label in the model. Also see [MorphBox.FirstFreeLabel()](primer-morphbox-class.md#MorphBox::FirstFreeLabel), [MorphBox.NextFreeLabel()](primer-morphbox-class.md#MorphBox::NextFreeLabel) and see [Model.LastFreeItemLabel()](primer-model-class.md#Model::LastFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last free box label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest free in layer* in editing panels). If omitted the whole model will be used.

| Returns
<br>MorphBox label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the last free box label in model m:<br>
```
var label = MorphBox.LastFreeLabel(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next box in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>MorphBox object (or null if there are no more boxs in the model).<br>
Return type
<br>MorphBox |
| --- |

| Example
<br>To get the box in model m after box b:<br>
```
var b = b.Next();
```
 |
| --- |

* * *

| NextFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the next free (highest+1) box label in the model. Also see [MorphBox.FirstFreeLabel()](primer-morphbox-class.md#MorphBox::FirstFreeLabel), [MorphBox.LastFreeLabel()](primer-morphbox-class.md#MorphBox::LastFreeLabel) and [Model.NextFreeItemLabel()](primer-model-class.md#Model::NextFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get next free box label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest+1 in layer* in editing panels). If omitted the whole model will be used (Equivalent to *Highest+1* in editing panels).

| Returns
<br>MorphBox label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the next free box label in model m:<br>
```
var label = MorphBox.NextFreeLabel(m);
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a box. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only boxs from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only boxs that are flagged with *limit* can be selected. If omitted, or null, any boxs from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[MorphBox](primer-morphbox-class.md) object (or null if not picked)<br>
Return type
<br>MorphBox |
| --- |

| Example
<br>To pick a box from model m giving the prompt 'Pick box from screen':<br>
```
var b = MorphBox.Pick('Pick box from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous box in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>MorphBox object (or null if there are no more boxs in the model).<br>
Return type
<br>MorphBox |
| --- |

| Example
<br>To get the box in model m before box b:<br>
```
var b = b.Previous();
```
 |
| --- |

* * *

| RenumberAll(Model*[[Model](primer-model-class.md)]*, start*[integer]*) [static]
Description<br>Renumbers all of the boxs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all boxs will be renumbered in

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the boxs in model m, from 1000000:<br>
```
MorphBox.RenumberAll(m, 1000000);
```
 |
| --- |

* * *

| RenumberFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*) [static]
Description<br>Renumbers all of the flagged boxs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged boxs will be renumbered in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the boxs that you want to renumber

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the boxs in model m flagged with f, from 1000000:<br>
```
MorphBox.RenumberFlagged(m, f, 1000000);
```
 |
| --- |

* * *

| Reset(redraw (optional)*[boolean]*)

Description<br>Resets the morph box to its initial position and updates the coordinates of all its nodes. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to reset several boxes and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [Model.UpdateGraphics()](primer-model-class.md#Model::UpdateGraphics).

| Returns
<br>No return value |
| --- |

| Example
<br>To reset box b:<br>
```
b.Reset();
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select boxs using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting boxs

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only boxs from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only boxs that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any boxs can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of boxs selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select boxs from model m, flagging those selected with flag f, giving the prompt 'Select boxs':<br>
```
MorphBox.Select(f, 'Select boxs', m);
```
<br><br>To select boxs, flagging those selected with flag f but limiting selection to boxs flagged with flag l, giving the prompt 'Select boxs':<br>
```
MorphBox.Select(f, 'Select boxs', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the box. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the box

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for box b:<br>
```
b.SetFlag(f);
```
 |
| --- |

* * *

| SetMorphConnections(status*[boolean]*) [static]
Description<br>Turns Morph Connections on/off. |
| --- |

#### Arguments

* status (boolean)
 
true turns Morph Connections on. false turns Morph Connections off.

| Returns
<br>No return value. |
| --- |

| Example
<br>To turn Morph Connections on.<br>
```
MorphBox.SetMorphConnections(true);
```
 |
| --- |

* * *

| SetPointID(xindex*[integer]*, yindex*[integer]*, zindex*[integer]*, id*[integer]*)

Description<br>Replaces the morph point ID on the array, whose size depends on the orders in X, Y and Z directions, with the given new ID. |
| --- |

#### Arguments

* xindex (integer)
 
Index of the point in X direction. Note that indices start at 0, so it should be 0 for the points with the smallest parameteric X coordinate and box.nx-1 for the points with the highest X.

* yindex (integer)
 
Index of the point in Y direction. Note that indices start at 0, so it should be 0 for the points with the smallest parameteric Y coordinate and box.ny-1 for the points with the highest Y.

* zindex (integer)
 
Index of the point in Z direction. Note that indices start at 0, so it should be 0 for the points with the smallest parameteric Z coordinate and box.nz-1 for the points with the highest Z.

* id (integer)
 
New [MorphPoint](primer-morphpoint-class.md) id.

| Returns
<br>No return value |
| --- |

| Example
<br>To replace the 2nd point on the edge along the local X direction and at lowest local Y and highest local Z coordinate with point 101:<br>
```
box.SetPointID(1, 0, box.nz-1, 101);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the box. The box will be sketched until you either call [MorphBox.Unsketch()](primer-morphbox-class.md#MorphBox::Unsketch), [MorphBox.UnsketchAll()](primer-morphbox-class.md#MorphBox::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the box is sketched. If omitted redraw is true. If you want to sketch several boxs and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch box b:<br>
```
b.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged boxs in the model. The boxs will be sketched until you either call [MorphBox.Unsketch()](primer-morphbox-class.md#MorphBox::Unsketch), [MorphBox.UnsketchFlagged()](primer-morphbox-class.md#MorphBox::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged boxs will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the boxs that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the boxs are sketched. If omitted redraw is true. If you want to sketch flagged boxs several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all boxs flagged with flag in model m:<br>
```
MorphBox.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of boxs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing boxs should be counted. If false or omitted
referenced but undefined boxs will also be included in the total.

| Returns
<br>number of boxs<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of boxs in model m:<br>
```
var total = MorphBox.Total(m);
```
 |
| --- |

* * *

| Unblank()

Description<br>Unblanks the box |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank box b:<br>
```
b.Unblank();
```
 |
| --- |

* * *

| UnblankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the boxs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all boxs will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the boxs in model m:<br>
```
MorphBox.UnblankAll(m);
```
 |
| --- |

* * *

| UnblankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the flagged boxs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the flagged boxs will be unblanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the boxs that you want to unblank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the boxs in model m flagged with f:<br>
```
MorphBox.UnblankFlagged(m, f);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the boxs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all boxs will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the boxs

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the boxs in model m:<br>
```
MorphBox.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the box. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the box is unsketched. If omitted redraw is true. If you want to unsketch several boxs and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch box b:<br>
```
b.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all boxs. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all boxs will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the boxs are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all boxs in model m:<br>
```
MorphBox.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged boxs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all boxs will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the boxs that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the boxs are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all boxs flagged with flag in model m:<br>
```
MorphBox.UnsketchAll(m, flag);
```
 |
| --- |

* * *

| UpdateParametricCoordinates()

Description<br>Recalculates parametric X, Y, Z coordinates for each node in the \*SET\_NODE\_COLUMN associated with the morph box. This needs to be called whenever morph points on the box or their coordinates have been changed manually and you wish to keep all nodes at their intrinsic global X, Y, Z coordinates. Provided Morph Connections is on (see [MorphBox.SetMorphConnections()](primer-morphbox-class.md#MorphBox::SetMorphConnections)), this will also force PRIMER to recalculate the parametric coordinates for any connections in the morph box next time one of its morph points is moved. |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To recalculate all X, Y and Z coordinates for box b:<br>
```
b.UpdateParametricCoordinates();
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
<br>[MorphBox](primer-morphbox-class.md) object.<br>
Return type
<br>MorphBox |
| --- |

| Example
<br>To check if MorphBox property b.example is a parameter by using the [MorphBox.GetParameter()](primer-morphbox-class.md#MorphBox::GetParameter) method:<br>
```
if (b.ViewParameters().GetParameter(b.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for box. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for box b:<br>
```
b.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this box. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for box b:<br>
```
var xrefs = b.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the morph box data in keyword format. Note that this contains the keyword header and the keyword cards. See also [MorphBox.Keyword()](primer-morphbox-class.md#MorphBox::Keyword) and [MorphBox.KeywordCards()](primer-morphbox-class.md#MorphBox::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for morph box b in keyword format<br>
```
var s = b.toString();
```
 |
| --- |

* * *