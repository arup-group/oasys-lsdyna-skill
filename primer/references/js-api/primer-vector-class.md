# Vector class

The Vector class gives you access to define vector cards in PRIMER. [More...](primer-vector-class.md#Vector_details)

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

* [BlankAll](primer-vector-class.md#Vector::BlankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [BlankFlagged](primer-vector-class.md#Vector::BlankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Create](primer-vector-class.md#Vector::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [First](primer-vector-class.md#Vector::First)(Model*[[Model](primer-model-class.md)]*)
* [FirstFreeLabel](primer-vector-class.md#Vector::FirstFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [FlagAll](primer-vector-class.md#Vector::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-vector-class.md#Vector::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-vector-class.md#Vector::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-vector-class.md#Vector::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-vector-class.md#Vector::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-vector-class.md#Vector::Last)(Model*[[Model](primer-model-class.md)]*)
* [LastFreeLabel](primer-vector-class.md#Vector::LastFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [NextFreeLabel](primer-vector-class.md#Vector::NextFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [Pick](primer-vector-class.md#Vector::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [RenumberAll](primer-vector-class.md#Vector::RenumberAll)(Model*[[Model](primer-model-class.md)]*, start*[integer]*)
* [RenumberFlagged](primer-vector-class.md#Vector::RenumberFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*)
* [Select](primer-vector-class.md#Vector::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-vector-class.md#Vector::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-vector-class.md#Vector::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnblankAll](primer-vector-class.md#Vector::UnblankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnblankFlagged](primer-vector-class.md#Vector::UnblankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [UnflagAll](primer-vector-class.md#Vector::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-vector-class.md#Vector::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-vector-class.md#Vector::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-vector-class.md#Vector::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Blank](primer-vector-class.md#Vector::Blank)()
* [Blanked](primer-vector-class.md#Vector::Blanked)()
* [Browse](primer-vector-class.md#Vector::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-vector-class.md#Vector::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-vector-class.md#Vector::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-vector-class.md#Vector::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-vector-class.md#Vector::Edit)(modal (optional)*[boolean]*)
* [Error](primer-vector-class.md#Vector::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-vector-class.md#Vector::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-vector-class.md#Vector::GetComments)()
* [GetParameter](primer-vector-class.md#Vector::GetParameter)(prop*[string]*)
* [Keyword](primer-vector-class.md#Vector::Keyword)()
* [KeywordCards](primer-vector-class.md#Vector::KeywordCards)()
* [Next](primer-vector-class.md#Vector::Next)()
* [Previous](primer-vector-class.md#Vector::Previous)()
* [SetFlag](primer-vector-class.md#Vector::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Sketch](primer-vector-class.md#Vector::Sketch)(redraw (optional)*[boolean]*)
* [Unblank](primer-vector-class.md#Vector::Unblank)()
* [Unsketch](primer-vector-class.md#Vector::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-vector-class.md#Vector::ViewParameters)()
* [Warning](primer-vector-class.md#Vector::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-vector-class.md#Vector::Xrefs)()
* [toString](primer-vector-class.md#Vector::toString)()

## Vector properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| cid | int | Coordinate system ID |
| exists (read only) | logical | true if vector exists, false if referred to but not defined. |
| heading | string | [Vector](primer-vector-class.md) heading |
| include | integer | The [Include](primer-include-class.md) file number that the vector is in. |
| label | integer | [Vector](primer-vector-class.md) number. Also see the [vid](primer-vector-class.md#vid) property which is an alternative name for this. |
| model (read only) | integer | The [Model](primer-model-class.md) number that the vector is in. |
| nodeh | int | Node ID for head of vector (for \_NODES option) |
| nodes | logical | \_NODES option |
| nodet | int | Node ID for tail of vector (for \_NODES option) |
| vid | integer | [Vector](primer-vector-class.md) number. Also see the [label](primer-vector-class.md#label) property which is an alternative name for this. |
| xh | real | X coordinate of head of vector |
| xt | real | X coordinate of tail of vector |
| yh | real | Y coordinate of head of vector |
| yt | real | Y coordinate of tail of vector |
| zh | real | Z coordinate of head of vector |
| zt | real | Z coordinate of tail vector |

| Detailed Description<br>The Vector class allows you to create, modify, edit and manipulate vector cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new Vector(Model*[[Model](primer-model-class.md)]*, options*[object]*)

Description<br>Create a new [Vector](primer-vector-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that vector will be created in

* options (object)

Options for creating the [Vector](primer-vector-class.md) 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| ch (optional) | array | Array of coordinates of head of vector [[xh](primer-vector-class.md#xh), [yh](primer-vector-class.md#yh), [zh](primer-vector-class.md#zh)] (for \*DEFINE\_VECTOR) |
| cid (optional) | int | Optional coordinate system ID (for \*DEFINE\_VECTOR) |
| ct (optional) | array | Array of coordinates of tail of vector [[xt](primer-vector-class.md#xt), [yt](primer-vector-class.md#yt), [zt](primer-vector-class.md#zt)] (for \*DEFINE\_VECTOR) |
| heading (optional) | string | Optional title for the vector |
| nodeh (optional) | integer | [Node](primer-node-class.md) ID for head of vector (for \*DEFINE\_VECTOR\_NODES) |
| nodes | boolean | \_NODES option (true for \*DEFINE\_VECTOR\_NODES, false for \*DEFINE\_VECTOR) |
| nodet (optional) | integer | [Node](primer-node-class.md) ID for tail of vector (for \*DEFINE\_VECTOR\_NODES) |
| vid | integer | [Vector](primer-vector-class.md) ID. |

| Returns
<br>[Vector](primer-vector-class.md) object<br>
Return type
<br>Vector |
| --- |

| Example
<br>To create a new \*DEFINE\_VECTOR in model m with label 100 with the tail at (1.5, 2.5, 1.0) and the head at (4.5, 4.0, 3.0)<br>
```
var v = new Vector(m, {nodes: 0, vid: 100, ct: [1.5, 2.5, 1.0], ch: [4.5, 4.0, 3.0]});
```
<br>To create a new \*DEFINE\_VECTOR\_NODES in model m with label 200 using node 10 for the tail and node 20 for the head<br>
```
var v = new Vector(m, {nodes: 1, vid: 200, nodet: 10, nodeh: 20});
```
 |
| --- |

| new Vector(Model*[[Model](primer-model-class.md)]*, vid*[integer]*, xt*[real]*, yt*[real]*, zt*[real]*, xh*[real]*, yh*[real]*, zh*[real]*, cid (optional)*[int]*, heading (optional)*[string]*) [deprecated]
<br>This function is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>
Description<br>Create a new [Vector](primer-vector-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that vector will be created in

* vid (integer)
 
[Vector](primer-vector-class.md) number

* xt (real)
 
X coordinate of tail of vector

* yt (real)
 
Y coordinate of tail of vector

* zt (real)
 
Z coordinate of tail vector

* xh (real)
 
X coordinate of head of vector

* yh (real)
 
Y coordinate of head of vector

* zh (real)
 
Z coordinate of head of vector

* cid (optional) (int)
 
Coordinate system ID

* heading (optional) (string)
 
Title for the vector

| Returns
<br>[Vector](primer-vector-class.md) object<br>
Return type
<br>Vector |
| --- |

| Example
<br>To create a new vector in model m with label 200<br>
```
var v = new Vector(m, 200, 1.5, 2.5, 1.0, 4.5, 4.0, 3.0);
```
 |
| --- |

| new Vector(Model*[[Model](primer-model-class.md)]*, vid*[integer]*, nodet*[integer]*, nodeh*[integer]*, heading (optional)*[string]*) [deprecated]
<br>This function is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>
Description<br>Create a new [Vector](primer-vector-class.md) object with \_NODES option. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that vector will be created in

* vid (integer)
 
[Vector](primer-vector-class.md) number

* nodet (integer)
 
[Node](primer-node-class.md) ID for tail of vector

* nodeh (integer)
 
[Node](primer-node-class.md) ID for head of vector

* heading (optional) (string)
 
Title for the vector

| Returns
<br>[Vector](primer-vector-class.md) object<br>
Return type
<br>Vector |
| --- |

| Example
<br>To create a new vector in model m with label 200 using nodes 10 for the tail and 20 for the head<br>
```
var v = new Vector(m, 200, 20, 30);
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a vector. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the vector

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the vector v:<br>
```
v.AssociateComment(c);
```
 |
| --- |

* * *

| Blank()

Description<br>Blanks the vector |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To blank vector v:<br>
```
v.Blank();
```
 |
| --- |

* * *

| BlankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the vectors in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all vectors will be blanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the vectors in model m:<br>
```
Vector.BlankAll(m);
```
 |
| --- |

* * *

| BlankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the flagged vectors in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged vectors will be blanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the vectors that you want to blank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the vectors in model m flagged with f:<br>
```
Vector.BlankFlagged(m, f);
```
 |
| --- |

* * *

| Blanked()

Description<br>Checks if the vector is blanked or not. |
| --- |

#### Arguments

No arguments

| Returns
<br>true if blanked, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if vector v is blanked:<br>
```
if (v.Blanked() ) do_something...
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
<br>To Browse vector v:<br>
```
v.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the vector. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the vector

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for vector v:<br>
```
v.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the vector. The target include of the copied vector can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>Vector object<br>
Return type
<br>Vector |
| --- |

| Example
<br>To copy vector v into vector z:<br>
```
var z = v.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a vector |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the vector will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>Vector object (or null if not made).<br>
Return type
<br>Vector |
| --- |

| Example
<br>To start creating a vector in model m:<br>
```
var v = Vector.Create(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a vector. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the vector

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the vector v:<br>
```
v.DetachComment(c);
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
<br>To Edit vector v:<br>
```
v.Edit();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for vector. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for vector v:<br>
```
v.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first vector in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first vector in

| Returns
<br>Vector object (or null if there are no vectors in the model).<br>
Return type
<br>Vector |
| --- |

| Example
<br>To get the first vector in model m:<br>
```
var v = Vector.First(m);
```
 |
| --- |

* * *

| FirstFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the first free vector label in the model. Also see [Vector.LastFreeLabel()](primer-vector-class.md#Vector::LastFreeLabel), [Vector.NextFreeLabel()](primer-vector-class.md#Vector::NextFreeLabel) and [Model.FirstFreeItemLabel()](primer-model-class.md#Model::FirstFreeItemLabel). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first free vector label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *First free in layer* in editing panels). If omitted the whole model will be used (Equivalent to *First free* in editing panels).

| Returns
<br>Vector label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the first free vector label in model m:<br>
```
var label = Vector.FirstFreeLabel(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the vectors in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all vectors will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the vectors

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the vectors with flag f in model m:<br>
```
Vector.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the vector is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the vector

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if vector v has flag f set on it:<br>
```
if (v.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each vector in the model.<br> **Note that ForEach has been designed to make looping over vectors as fast as possible and so has some limitations. Firstly, a single temporary Vector object is created and on each function call it is updated with the current vector data. This means that you should not try to store the Vector object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new vectors inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all vectors are in

* func (function)
 
Function to call for each vector

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the vectors in model m:<br>
```
Vector.ForEach(m, test);
function test(v)
{
// v is Vector object
}
```
<br><br>To call function test for all of the vectors in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
Vector.ForEach(m, test, data);
function test(v, extra)
{
// v is Vector object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Vector objects or properties for all of the vectors in a model in PRIMER. If the optional property argument is not given then an array of Vector objects is returned. If the property argument is given, that property value for each vector is returned in the array instead of a Vector object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get vectors from

* property (optional) (string)
 
Name for property to get for all vectors in the model

| Returns
<br>Array of Vector objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Vector objects for all of the vectors in model m:<br>
```
var a = Vector.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each vector in model m:<br>
```
var a = Vector.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a vector. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the vector v:<br>
```
var comm_array = v.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Vector objects for all of the flagged vectors in a model in PRIMER If the optional property argument is not given then an array of Vector objects is returned. If the property argument is given, then that property value for each vector is returned in the array instead of a Vector object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get vectors from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the vectors that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged vectors in the model

| Returns
<br>Array of Vector objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Vector objects for all of the vectors in model m flagged with f:<br>
```
var v = Vector.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the vectors in model m flagged with f:<br>
```
var a = Vector.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the Vector object for a vector ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the vector in

* number (integer)
 
number of the vector you want the Vector object for

| Returns
<br>Vector object (or null if vector does not exist).<br>
Return type
<br>Vector |
| --- |

| Example
<br>To get the Vector object for vector 100 in model m<br>
```
var v = Vector.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a Vector property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [Vector.ViewParameters()](primer-vector-class.md#Vector::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
vector property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if Vector property v.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (v.GetParameter(v.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if Vector property v.example is a parameter by using the GetParameter method:<br>
```
if (v.ViewParameters().GetParameter(v.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this vector (\*DEFINE\_VECTOR). **Note that a carriage return is not added**. See also [Vector.KeywordCards()](primer-vector-class.md#Vector::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for vector m:<br>
```
var key = m.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the vector. **Note that a carriage return is not added**. See also [Vector.Keyword()](primer-vector-class.md#Vector::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for vector v:<br>
```
var cards = v.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last vector in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last vector in

| Returns
<br>Vector object (or null if there are no vectors in the model).<br>
Return type
<br>Vector |
| --- |

| Example
<br>To get the last vector in model m:<br>
```
var v = Vector.Last(m);
```
 |
| --- |

* * *

| LastFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the last free vector label in the model. Also see [Vector.FirstFreeLabel()](primer-vector-class.md#Vector::FirstFreeLabel), [Vector.NextFreeLabel()](primer-vector-class.md#Vector::NextFreeLabel) and see [Model.LastFreeItemLabel()](primer-model-class.md#Model::LastFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last free vector label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest free in layer* in editing panels). If omitted the whole model will be used.

| Returns
<br>Vector label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the last free vector label in model m:<br>
```
var label = Vector.LastFreeLabel(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next vector in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Vector object (or null if there are no more vectors in the model).<br>
Return type
<br>Vector |
| --- |

| Example
<br>To get the vector in model m after vector v:<br>
```
var v = v.Next();
```
 |
| --- |

* * *

| NextFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the next free (highest+1) vector label in the model. Also see [Vector.FirstFreeLabel()](primer-vector-class.md#Vector::FirstFreeLabel), [Vector.LastFreeLabel()](primer-vector-class.md#Vector::LastFreeLabel) and [Model.NextFreeItemLabel()](primer-model-class.md#Model::NextFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get next free vector label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest+1 in layer* in editing panels). If omitted the whole model will be used (Equivalent to *Highest+1* in editing panels).

| Returns
<br>Vector label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the next free vector label in model m:<br>
```
var label = Vector.NextFreeLabel(m);
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a vector. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only vectors from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only vectors that are flagged with *limit* can be selected. If omitted, or null, any vectors from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[Vector](primer-vector-class.md) object (or null if not picked)<br>
Return type
<br>Vector |
| --- |

| Example
<br>To pick a vector from model m giving the prompt 'Pick vector from screen':<br>
```
var v = Vector.Pick('Pick vector from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous vector in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Vector object (or null if there are no more vectors in the model).<br>
Return type
<br>Vector |
| --- |

| Example
<br>To get the vector in model m before vector v:<br>
```
var v = v.Previous();
```
 |
| --- |

* * *

| RenumberAll(Model*[[Model](primer-model-class.md)]*, start*[integer]*) [static]
Description<br>Renumbers all of the vectors in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all vectors will be renumbered in

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the vectors in model m, from 1000000:<br>
```
Vector.RenumberAll(m, 1000000);
```
 |
| --- |

* * *

| RenumberFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*) [static]
Description<br>Renumbers all of the flagged vectors in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged vectors will be renumbered in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the vectors that you want to renumber

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the vectors in model m flagged with f, from 1000000:<br>
```
Vector.RenumberFlagged(m, f, 1000000);
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select vectors using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting vectors

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only vectors from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only vectors that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any vectors can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of vectors selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select vectors from model m, flagging those selected with flag f, giving the prompt 'Select vectors':<br>
```
Vector.Select(f, 'Select vectors', m);
```
<br><br>To select vectors, flagging those selected with flag f but limiting selection to vectors flagged with flag l, giving the prompt 'Select vectors':<br>
```
Vector.Select(f, 'Select vectors', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the vector. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the vector

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for vector v:<br>
```
v.SetFlag(f);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the vector. The vector will be sketched until you either call [Vector.Unsketch()](primer-vector-class.md#Vector::Unsketch), [Vector.UnsketchAll()](primer-vector-class.md#Vector::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the vector is sketched. If omitted redraw is true. If you want to sketch several vectors and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch vector v:<br>
```
v.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged vectors in the model. The vectors will be sketched until you either call [Vector.Unsketch()](primer-vector-class.md#Vector::Unsketch), [Vector.UnsketchFlagged()](primer-vector-class.md#Vector::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged vectors will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the vectors that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the vectors are sketched. If omitted redraw is true. If you want to sketch flagged vectors several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all vectors flagged with flag in model m:<br>
```
Vector.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of vectors in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing vectors should be counted. If false or omitted
referenced but undefined vectors will also be included in the total.

| Returns
<br>number of vectors<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of vectors in model m:<br>
```
var total = Vector.Total(m);
```
 |
| --- |

* * *

| Unblank()

Description<br>Unblanks the vector |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank vector v:<br>
```
v.Unblank();
```
 |
| --- |

* * *

| UnblankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the vectors in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all vectors will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the vectors in model m:<br>
```
Vector.UnblankAll(m);
```
 |
| --- |

* * *

| UnblankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the flagged vectors in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the flagged vectors will be unblanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the vectors that you want to unblank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the vectors in model m flagged with f:<br>
```
Vector.UnblankFlagged(m, f);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the vectors in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all vectors will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the vectors

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the vectors in model m:<br>
```
Vector.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the vector. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the vector is unsketched. If omitted redraw is true. If you want to unsketch several vectors and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch vector v:<br>
```
v.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all vectors. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all vectors will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the vectors are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all vectors in model m:<br>
```
Vector.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged vectors in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all vectors will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the vectors that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the vectors are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all vectors flagged with flag in model m:<br>
```
Vector.UnsketchAll(m, flag);
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
<br>[Vector](primer-vector-class.md) object.<br>
Return type
<br>Vector |
| --- |

| Example
<br>To check if Vector property v.example is a parameter by using the [Vector.GetParameter()](primer-vector-class.md#Vector::GetParameter) method:<br>
```
if (v.ViewParameters().GetParameter(v.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for vector. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for vector v:<br>
```
v.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this vector. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for vector v:<br>
```
var xrefs = v.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the vector data in keyword format. Note that this contains the keyword header and the keyword cards. See also [Vector.Keyword()](primer-vector-class.md#Vector::Keyword) and [Vector.KeywordCards()](primer-vector-class.md#Vector::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for vector v in keyword format<br>
```
var s = v.toString();
```
 |
| --- |

* * *