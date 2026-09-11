# Box class

The Box class gives you access to define box cards in PRIMER. [More...](primer-box-class.md#Box_details)

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

* [BlankAll](primer-box-class.md#Box::BlankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [BlankFlagged](primer-box-class.md#Box::BlankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Create](primer-box-class.md#Box::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [First](primer-box-class.md#Box::First)(Model*[[Model](primer-model-class.md)]*)
* [FirstFreeLabel](primer-box-class.md#Box::FirstFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [FlagAll](primer-box-class.md#Box::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-box-class.md#Box::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-box-class.md#Box::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-box-class.md#Box::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-box-class.md#Box::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-box-class.md#Box::Last)(Model*[[Model](primer-model-class.md)]*)
* [LastFreeLabel](primer-box-class.md#Box::LastFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [NextFreeLabel](primer-box-class.md#Box::NextFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [Pick](primer-box-class.md#Box::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [RenumberAll](primer-box-class.md#Box::RenumberAll)(Model*[[Model](primer-model-class.md)]*, start*[integer]*)
* [RenumberFlagged](primer-box-class.md#Box::RenumberFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*)
* [Select](primer-box-class.md#Box::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-box-class.md#Box::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-box-class.md#Box::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnblankAll](primer-box-class.md#Box::UnblankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnblankFlagged](primer-box-class.md#Box::UnblankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [UnflagAll](primer-box-class.md#Box::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-box-class.md#Box::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-box-class.md#Box::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-box-class.md#Box::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Blank](primer-box-class.md#Box::Blank)()
* [Blanked](primer-box-class.md#Box::Blanked)()
* [Browse](primer-box-class.md#Box::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-box-class.md#Box::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-box-class.md#Box::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-box-class.md#Box::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-box-class.md#Box::Edit)(modal (optional)*[boolean]*)
* [Error](primer-box-class.md#Box::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-box-class.md#Box::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-box-class.md#Box::GetComments)()
* [GetParameter](primer-box-class.md#Box::GetParameter)(prop*[string]*)
* [Keyword](primer-box-class.md#Box::Keyword)()
* [KeywordCards](primer-box-class.md#Box::KeywordCards)()
* [Next](primer-box-class.md#Box::Next)()
* [Previous](primer-box-class.md#Box::Previous)()
* [SetFlag](primer-box-class.md#Box::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Sketch](primer-box-class.md#Box::Sketch)(redraw (optional)*[boolean]*)
* [Unblank](primer-box-class.md#Box::Unblank)()
* [Unsketch](primer-box-class.md#Box::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-box-class.md#Box::ViewParameters)()
* [Warning](primer-box-class.md#Box::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-box-class.md#Box::Xrefs)()
* [toString](primer-box-class.md#Box::toString)()

## Box constants

| **Name** | **Description** |
| --- | --- |
| Box.BOX | Box is \*DEFINE\_BOX. |
| Box.BOX\_ADAPTIVE | Box is \*DEFINE\_BOX\_ADAPTIVE. |
| Box.BOX\_COARSEN | Box is \*DEFINE\_BOX\_COARSEN. |
| Box.BOX\_DRAWBEAD | Box is \*DEFINE\_BOX\_DRAWBEAD. |
| Box.BOX\_SPH | Box is \*DEFINE\_BOX\_SPH. |

## Box properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| bid | integer | [Box](primer-box-class.md) number. Also see the [label](primer-box-class.md#label) property which is an alternative name for this. |
| brmax | real | Maximum mesh size in 3D tetrahedron adaptivity |
| brmin | real | Minimum mesh size in 3D tetrahedron adaptivity |
| cid | integer | Optional coordinate system ID for tubular drawbead |
| cx | real | X coordinate of offset vector to local origin |
| cy | real | Y coordinate of offset vector to local origin |
| cz | real | Z coordinate of offset vector to local origin |
| exists (read only) | logical | true if box exists, false if referred to but not defined. |
| heading | string | [Box](primer-box-class.md) heading |
| idir | integer | Direction of tooling movement. 1: x-direction, 2: y-direction, 3: z-direction |
| iflag | integer | Element protection flag. 0: elements inside, 1: elements outside box cannot be coarsened. |
| include | integer | The [Include](primer-include-class.md) file number that the box is in. |
| label | integer | [Box](primer-box-class.md) number. Also see the [bid](primer-box-class.md#bid) property which is an alternative name for this. |
| lcid | integer | Load curve ID to describe motion value versus time |
| level | integer | Maximum number of refinement levels for elements contained in box |
| lidx | integer | Box movement in global X axis or by node. The [ndid](primer-box-class.md#ndid) property is an alternative name for this. |
| lidy | integer | Box movement in global Y axis |
| lidz | integer | Box movement in global Z axis |
| local | logical | Turns \_LOCAL on or off |
| model (read only) | integer | The [Model](primer-model-class.md) number that the box is in. |
| ndid | integer | Box movement in global X axis or by node. The [lidx](primer-box-class.md#lidx) property is an alternative name for this. |
| nid | integer | Referential nodal ID for vd = 2 |
| option | constant | The box option. Can be [Box.BOX](primer-box-class.md#Box.BOX), [Box.BOX_ADAPTIVE](primer-box-class.md#Box.BOX_ADAPTIVE), [Box.BOX_COARSEN](primer-box-class.md#Box.BOX_COARSEN), [Box.BOX_DRAWBEAD](primer-box-class.md#Box.BOX_DRAWBEAD) or [Box.BOX_SPH](primer-box-class.md#Box.BOX_SPH). |
| pid\_adaptive | integer | Part ID for [Box.BOX_ADAPTIVE](primer-box-class.md#Box.BOX_ADAPTIVE) option |
| pid\_drawbead | integer | Part ID of blank for [Box.BOX_DRAWBEAD](primer-box-class.md#Box.BOX_DRAWBEAD) option |
| radius | real | Radius of tube centered around draw bead |
| sid | integer | Part set, part or node set defining the nodal points along draw bead |
| stype | integer | Set type for stype. 2: part set ID, 3: part ID, 4: node set ID |
| vd | integer | Velocity/Displacement flag. 0: velocity, 1: displacement, 2: referential node |
| vid | integer | Vector ID of DOF |
| xmn | real | Minimum X coordinate |
| xmx | real | Maximum X coordinate |
| xv | real | Local V vector X coordinate |
| xx | real | Local X vector X coordinate |
| ymn | real | Minimum Y coordinate |
| ymx | real | Maximum Y coordinate |
| yv | real | Local V vector Y coordinate |
| yx | real | Local X vector Y coordinate |
| zmn | real | Minimum Z coordinate |
| zmx | real | Maximum Z coordinate |
| zv | real | Local V vector Z coordinate |
| zx | real | Local X vector Z coordinate |

| Detailed Description<br>The Box class allows you to create, modify, edit and manipulate box cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new Box(Model*[[Model](primer-model-class.md)]*, bid*[integer]*, xmn*[real]*, xmx*[real]*, ymn*[real]*, ymx*[real]*, zmn*[real]*, zmx*[real]*, heading (optional)*[string]*)

Description<br>Create a new [Box](primer-box-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that box will be created in

* bid (integer)
 
[Box](primer-box-class.md) number

* xmn (real)
 
Minimum X coordinate

* xmx (real)
 
Maximum X coordinate

* ymn (real)
 
Minimum Y coordinate

* ymx (real)
 
Maximum Y coordinate

* zmn (real)
 
Minimum Z coordinate

* zmx (real)
 
Maximum Z coordinate

* heading (optional) (string)
 
Title for the box

| Returns
<br>[Box](primer-box-class.md) object<br>
Return type
<br>Box |
| --- |

| Example
<br>To create a new box in model m with label 200<br>
```
var b = new Box(m, 200, 1.5, 2.5, 1.0, 4.5, -4.0, 3.0);
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

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
Box.BlankAll(m);
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
Box.BlankFlagged(m, f);
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
<br>To Browse box b:<br>
```
b.Browse();
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
<br>Box object<br>
Return type
<br>Box |
| --- |

| Example
<br>To copy box b into box z:<br>
```
var z = b.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a box |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the box will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>Box object (or null if not made).<br>
Return type
<br>Box |
| --- |

| Example
<br>To start creating a box in model m:<br>
```
var b = Box.Create(m);
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
<br>To Edit box b:<br>
```
b.Edit();
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
<br>Box object (or null if there are no boxs in the model).<br>
Return type
<br>Box |
| --- |

| Example
<br>To get the first box in model m:<br>
```
var b = Box.First(m);
```
 |
| --- |

* * *

| FirstFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the first free box label in the model. Also see [Box.LastFreeLabel()](primer-box-class.md#Box::LastFreeLabel), [Box.NextFreeLabel()](primer-box-class.md#Box::NextFreeLabel) and [Model.FirstFreeItemLabel()](primer-model-class.md#Model::FirstFreeItemLabel). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first free box label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *First free in layer* in editing panels). If omitted the whole model will be used (Equivalent to *First free* in editing panels).

| Returns
<br>Box label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the first free box label in model m:<br>
```
var label = Box.FirstFreeLabel(m);
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
Box.FlagAll(m, f);
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
Description<br>Calls a function for each box in the model.<br> **Note that ForEach has been designed to make looping over boxs as fast as possible and so has some limitations. Firstly, a single temporary Box object is created and on each function call it is updated with the current box data. This means that you should not try to store the Box object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new boxs inside a ForEach loop.** |
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
Box.ForEach(m, test);
function test(b)
{
// b is Box object
}
```
<br><br>To call function test for all of the boxs in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
Box.ForEach(m, test, data);
function test(b, extra)
{
// b is Box object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Box objects or properties for all of the boxs in a model in PRIMER. If the optional property argument is not given then an array of Box objects is returned. If the property argument is given, that property value for each box is returned in the array instead of a Box object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get boxs from

* property (optional) (string)
 
Name for property to get for all boxs in the model

| Returns
<br>Array of Box objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Box objects for all of the boxs in model m:<br>
```
var a = Box.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each box in model m:<br>
```
var a = Box.GetAll(m, 'foo');
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
Description<br>Returns an array of Box objects for all of the flagged boxs in a model in PRIMER If the optional property argument is not given then an array of Box objects is returned. If the property argument is given, then that property value for each box is returned in the array instead of a Box object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get boxs from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the boxs that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged boxs in the model

| Returns
<br>Array of Box objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Box objects for all of the boxs in model m flagged with f:<br>
```
var b = Box.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the boxs in model m flagged with f:<br>
```
var a = Box.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the Box object for a box ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the box in

* number (integer)
 
number of the box you want the Box object for

| Returns
<br>Box object (or null if box does not exist).<br>
Return type
<br>Box |
| --- |

| Example
<br>To get the Box object for box 100 in model m<br>
```
var b = Box.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a Box property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [Box.ViewParameters()](primer-box-class.md#Box::ViewParameters) method and 'method chaining' (see the examples below). |
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
<br>To check if Box property b.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (b.GetParameter(b.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if Box property b.example is a parameter by using the GetParameter method:<br>
```
if (b.ViewParameters().GetParameter(b.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this box (\*DEFINE\_BOX). **Note that a carriage return is not added**. See also [Box.KeywordCards()](primer-box-class.md#Box::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for box m:<br>
```
var key = m.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the box. **Note that a carriage return is not added**. See also [Box.Keyword()](primer-box-class.md#Box::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for box b:<br>
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
<br>Box object (or null if there are no boxs in the model).<br>
Return type
<br>Box |
| --- |

| Example
<br>To get the last box in model m:<br>
```
var b = Box.Last(m);
```
 |
| --- |

* * *

| LastFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the last free box label in the model. Also see [Box.FirstFreeLabel()](primer-box-class.md#Box::FirstFreeLabel), [Box.NextFreeLabel()](primer-box-class.md#Box::NextFreeLabel) and see [Model.LastFreeItemLabel()](primer-model-class.md#Model::LastFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last free box label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest free in layer* in editing panels). If omitted the whole model will be used.

| Returns
<br>Box label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the last free box label in model m:<br>
```
var label = Box.LastFreeLabel(m);
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
<br>Box object (or null if there are no more boxs in the model).<br>
Return type
<br>Box |
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
Description<br>Returns the next free (highest+1) box label in the model. Also see [Box.FirstFreeLabel()](primer-box-class.md#Box::FirstFreeLabel), [Box.LastFreeLabel()](primer-box-class.md#Box::LastFreeLabel) and [Model.NextFreeItemLabel()](primer-model-class.md#Model::NextFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get next free box label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest+1 in layer* in editing panels). If omitted the whole model will be used (Equivalent to *Highest+1* in editing panels).

| Returns
<br>Box label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the next free box label in model m:<br>
```
var label = Box.NextFreeLabel(m);
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
<br>[Box](primer-box-class.md) object (or null if not picked)<br>
Return type
<br>Box |
| --- |

| Example
<br>To pick a box from model m giving the prompt 'Pick box from screen':<br>
```
var b = Box.Pick('Pick box from screen', m);
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
<br>Box object (or null if there are no more boxs in the model).<br>
Return type
<br>Box |
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
Box.RenumberAll(m, 1000000);
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
Box.RenumberFlagged(m, f, 1000000);
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
Box.Select(f, 'Select boxs', m);
```
<br><br>To select boxs, flagging those selected with flag f but limiting selection to boxs flagged with flag l, giving the prompt 'Select boxs':<br>
```
Box.Select(f, 'Select boxs', l);
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

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the box. The box will be sketched until you either call [Box.Unsketch()](primer-box-class.md#Box::Unsketch), [Box.UnsketchAll()](primer-box-class.md#Box::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
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
Description<br>Sketches all of the flagged boxs in the model. The boxs will be sketched until you either call [Box.Unsketch()](primer-box-class.md#Box::Unsketch), [Box.UnsketchFlagged()](primer-box-class.md#Box::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
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
Box.SketchFlagged(m, flag);
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
var total = Box.Total(m);
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
Box.UnblankAll(m);
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
Box.UnblankFlagged(m, f);
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
Box.UnflagAll(m, f);
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
Box.UnsketchAll(m);
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
Box.UnsketchAll(m, flag);
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
<br>[Box](primer-box-class.md) object.<br>
Return type
<br>Box |
| --- |

| Example
<br>To check if Box property b.example is a parameter by using the [Box.GetParameter()](primer-box-class.md#Box::GetParameter) method:<br>
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

Description<br>Creates a string containing the box data in keyword format. Note that this contains the keyword header and the keyword cards. See also [Box.Keyword()](primer-box-class.md#Box::Keyword) and [Box.KeywordCards()](primer-box-class.md#Box::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for box b in keyword format<br>
```
var s = b.toString();
```
 |
| --- |

* * *