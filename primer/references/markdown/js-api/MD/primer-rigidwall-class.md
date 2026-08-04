# Rigidwall class

The Rigidwall class gives you access to rigidwall cards in PRIMER. [More...](primer-rigidwall-class.md#Rigidwall_details)

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

* [BlankAll](primer-rigidwall-class.md#Rigidwall::BlankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [BlankFlagged](primer-rigidwall-class.md#Rigidwall::BlankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Create](primer-rigidwall-class.md#Rigidwall::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [First](primer-rigidwall-class.md#Rigidwall::First)(Model*[[Model](primer-model-class.md)]*)
* [FirstFreeLabel](primer-rigidwall-class.md#Rigidwall::FirstFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [FlagAll](primer-rigidwall-class.md#Rigidwall::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-rigidwall-class.md#Rigidwall::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-rigidwall-class.md#Rigidwall::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-rigidwall-class.md#Rigidwall::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-rigidwall-class.md#Rigidwall::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-rigidwall-class.md#Rigidwall::Last)(Model*[[Model](primer-model-class.md)]*)
* [LastFreeLabel](primer-rigidwall-class.md#Rigidwall::LastFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [NextFreeLabel](primer-rigidwall-class.md#Rigidwall::NextFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [Pick](primer-rigidwall-class.md#Rigidwall::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [RenumberAll](primer-rigidwall-class.md#Rigidwall::RenumberAll)(Model*[[Model](primer-model-class.md)]*, start*[integer]*)
* [RenumberFlagged](primer-rigidwall-class.md#Rigidwall::RenumberFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*)
* [Select](primer-rigidwall-class.md#Rigidwall::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-rigidwall-class.md#Rigidwall::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-rigidwall-class.md#Rigidwall::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnblankAll](primer-rigidwall-class.md#Rigidwall::UnblankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnblankFlagged](primer-rigidwall-class.md#Rigidwall::UnblankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [UnflagAll](primer-rigidwall-class.md#Rigidwall::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-rigidwall-class.md#Rigidwall::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-rigidwall-class.md#Rigidwall::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-rigidwall-class.md#Rigidwall::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Blank](primer-rigidwall-class.md#Rigidwall::Blank)()
* [Blanked](primer-rigidwall-class.md#Rigidwall::Blanked)()
* [Browse](primer-rigidwall-class.md#Rigidwall::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-rigidwall-class.md#Rigidwall::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-rigidwall-class.md#Rigidwall::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-rigidwall-class.md#Rigidwall::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-rigidwall-class.md#Rigidwall::Edit)(modal (optional)*[boolean]*)
* [Error](primer-rigidwall-class.md#Rigidwall::Error)(message*[string]*, details (optional)*[string]*)
* [FindNodesBehind](primer-rigidwall-class.md#Rigidwall::FindNodesBehind)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Flagged](primer-rigidwall-class.md#Rigidwall::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-rigidwall-class.md#Rigidwall::GetComments)()
* [GetParameter](primer-rigidwall-class.md#Rigidwall::GetParameter)(prop*[string]*)
* [GetRow](primer-rigidwall-class.md#Rigidwall::GetRow)(row*[integer]*)
* [Keyword](primer-rigidwall-class.md#Rigidwall::Keyword)()
* [KeywordCards](primer-rigidwall-class.md#Rigidwall::KeywordCards)()
* [Next](primer-rigidwall-class.md#Rigidwall::Next)()
* [Previous](primer-rigidwall-class.md#Rigidwall::Previous)()
* [RemoveRow](primer-rigidwall-class.md#Rigidwall::RemoveRow)(row*[integer]*)
* [SetFlag](primer-rigidwall-class.md#Rigidwall::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [SetRow](primer-rigidwall-class.md#Rigidwall::SetRow)(row*[integer]*, data*[Array of data]*)
* [Sketch](primer-rigidwall-class.md#Rigidwall::Sketch)(redraw (optional)*[boolean]*)
* [Unblank](primer-rigidwall-class.md#Rigidwall::Unblank)()
* [Unsketch](primer-rigidwall-class.md#Rigidwall::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-rigidwall-class.md#Rigidwall::ViewParameters)()
* [Warning](primer-rigidwall-class.md#Rigidwall::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-rigidwall-class.md#Rigidwall::Xrefs)()
* [toString](primer-rigidwall-class.md#Rigidwall::toString)()

## Rigidwall constants

| **Name** | **Description** |
| --- | --- |
| Rigidwall.CYLINDER | Rigidwall is \*RIGIDWALL\_GEOMETRIC\_CYLINDER. |
| Rigidwall.FLAT | Rigidwall is \*RIGIDWALL\_GEOMETRIC\_FLAT. |
| Rigidwall.PLANAR | Rigidwall is \*RIGIDWALL\_PLANAR. |
| Rigidwall.PRISM | Rigidwall is \*RIGIDWALL\_GEOMETRIC\_PRISM. |
| Rigidwall.SPHERE | Rigidwall is \*RIGIDWALL\_GEOMETRIC\_SPHERE. |

## Rigidwall properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| birth | real | Birth time. |
| boxid | integer | Box for nodes. |
| d1 | real | X component of vector defn. |
| d2 | real | Y component of vector defn. |
| d3 | real | Z component of vector defn. |
| death | real | Death time. |
| decaya | real | Friction decay const in local A dir. |
| decayb | real | Friction decay const in local B dir. |
| dfrica | real | Dynamic friction coeff in local A dir. |
| dfricb | real | Dynamic friction coeff in local B dir. |
| display | logical | DISPLAY flag. |
| e | real | Young's modulus of rigidwall (for \_DISPLAY option). |
| exists (read only) | logical | true if rigidwall exists, false if referred to but not defined. |
| finite | logical | Finite flag. |
| forces | logical | Forces flag. |
| fric | real | Friction coefficient. |
| heading | string | [Rigidwall](primer-rigidwall-class.md) heading |
| id | logical | true if \_ID option is set, false if not |
| include | integer | The [Include](primer-include-class.md) file number that the rigidwall is in. |
| label | integer | [Rigidwall](primer-rigidwall-class.md) number. |
| lcid | integer | Vel/disp vs time [curve](primer-curve-class.md) number. |
| lencyl | real | Length of cylinder. |
| lenl | real | Length of L edge. |
| lenm | real | Length of M edge. |
| lenp | real | Length of prism in -ve N. |
| mass | real | Mass of moving wall. |
| model (read only) | integer | The [Model](primer-model-class.md) number that the rigidwall is in. |
| motion | logical | Motion flag. |
| moving | logical | Moving flag. |
| n1 | integer | 1st [node](primer-node-class.md) for visualisation. |
| n2 | integer | 2nd [node](primer-node-class.md) for visualisation. |
| n3 | integer | 3rd [node](primer-node-class.md) for visualisation. |
| n4 | integer | 4th [node](primer-node-class.md) for visualisation. |
| node1 | integer | [Node 1](primer-node-class.md) for vector defn. |
| node2 | integer | [Node 2](primer-node-class.md) for vector defn. |
| nsegs | integer | Number of subsections. |
| nsid | integer | Constrained [node set](primer-set-class.md) included in wall. |
| nsidex | integer | Constrained [node set](primer-set-class.md) exempted from wall. |
| offset | real | Offset for planar option. |
| opt | integer | Motion type. |
| ortho | logical | Ortho flag. |
| pid | integer | Part ID for display of geometric rigidwall (for \_DISPLAY option). |
| pr | real | Poisson's ratio of rigidwall (for \_DISPLAY option). |
| radcyl | real | Radius of cylinder. |
| radsph | real | Radius of sphere. |
| ro | real | Density of rigidwall (for \_DISPLAY option). |
| rwid | integer | [Rigidwall](primer-rigidwall-class.md) number (identical to label). |
| rwksf | real | Stiffness scaling factor. |
| sfrica | real | Static friction coeff in local A dir. |
| sfricb | real | Static friction coeff in local B dir. |
| soft | integer | No. of cycles to zero relative velocity. |
| ssid | integer | [Segment set](primer-set-class.md) number. |
| type | constant | The rigidwall type. Can be [Rigidwall.FLAT](primer-rigidwall-class.md#Rigidwall.FLAT), [Rigidwall.PRISM](primer-rigidwall-class.md#Rigidwall.PRISM), [Rigidwall.CYLINDER](primer-rigidwall-class.md#Rigidwall.CYLINDER), [Rigidwall.SPHERE](primer-rigidwall-class.md#Rigidwall.SPHERE), [Rigidwall.PLANAR](primer-rigidwall-class.md#Rigidwall.PLANAR), |
| v0 | real | Initial velocity. |
| vx | real | X component of motion vector. |
| vy | real | Y component of motion vector. |
| vz | real | Z component of motion vector. |
| wvel | real | Velocity at which nodes weld to wall. |
| xh | real | Head X coord of outward normal. |
| xhev | real | Head X coord of edge I vector. |
| xt | real | Tail X coord of outward normal. |
| yh | real | Head Y coord of outward normal. |
| yhev | real | Head Y coord of edge I vector. |
| yt | real | Tail Y coord of outward normal. |
| zh | real | Head Z coord of outward normal. |
| zhev | real | Head Z coord of edge I vector. |
| zt | real | Tail Z coord of outward normal. |

| Detailed Description<br>The Rigidwall class allows you to create, modify, edit rigidwall cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new Rigidwall(Model*[[Model](primer-model-class.md)]*, type*[constant]*, nsid (optional)*[integer]*, rwid (optional)*[integer]*, heading (optional)*[string]*)

Description<br>Create a new [Rigidwall](primer-rigidwall-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that Rigidwall will be created in

* type (constant)
 
Specify the type of rigidwall (Can be [Rigidwall.FLAT](primer-rigidwall-class.md#Rigidwall.FLAT), [Rigidwall.PRISM](primer-rigidwall-class.md#Rigidwall.PRISM), [Rigidwall.CYLINDER](primer-rigidwall-class.md#Rigidwall.CYLINDER), [Rigidwall.SPHERE](primer-rigidwall-class.md#Rigidwall.SPHERE), [Rigidwall.PLANAR](primer-rigidwall-class.md#Rigidwall.PLANAR))

* nsid (optional) (integer)
 
[Node set](primer-set-class.md) number.

* rwid (optional) (integer)
 
[Rigidwall](primer-rigidwall-class.md) number

* heading (optional) (string)
 
Title for the Rigidwall

| Returns
<br>[Rigidwall](primer-rigidwall-class.md) object<br>
Return type
<br>Rigidwall |
| --- |

| Example
<br>To create a new rigidwall 200 of type GEOMETRIC\_SPHERE in model m using node set 100 having the title "test wall"<br>
```
var r = new Rigidwall(m, Rigidwall.SPHERE, 200, 100, "test wall");
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a rigidwall. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the rigidwall

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the rigidwall r:<br>
```
r.AssociateComment(c);
```
 |
| --- |

* * *

| Blank()

Description<br>Blanks the rigidwall |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To blank rigidwall r:<br>
```
r.Blank();
```
 |
| --- |

* * *

| BlankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the rigidwalls in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all rigidwalls will be blanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the rigidwalls in model m:<br>
```
Rigidwall.BlankAll(m);
```
 |
| --- |

* * *

| BlankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the flagged rigidwalls in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged rigidwalls will be blanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the rigidwalls that you want to blank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the rigidwalls in model m flagged with f:<br>
```
Rigidwall.BlankFlagged(m, f);
```
 |
| --- |

* * *

| Blanked()

Description<br>Checks if the rigidwall is blanked or not. |
| --- |

#### Arguments

No arguments

| Returns
<br>true if blanked, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if rigidwall r is blanked:<br>
```
if (r.Blanked() ) do_something...
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
<br>To Browse rigidwall r:<br>
```
r.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the rigidwall. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the rigidwall

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for rigidwall r:<br>
```
r.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the rigidwall. The target include of the copied rigidwall can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>Rigidwall object<br>
Return type
<br>Rigidwall |
| --- |

| Example
<br>To copy rigidwall r into rigidwall z:<br>
```
var z = r.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a rigidwall |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the rigidwall will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>Rigidwall object (or null if not made).<br>
Return type
<br>Rigidwall |
| --- |

| Example
<br>To start creating a rigidwall in model m:<br>
```
var r = Rigidwall.Create(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a rigidwall. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the rigidwall

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the rigidwall r:<br>
```
r.DetachComment(c);
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
<br>To Edit rigidwall r:<br>
```
r.Edit();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for rigidwall. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for rigidwall r:<br>
```
r.Error("My custom error");
```
 |
| --- |

* * *

| FindNodesBehind(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Flags nodes that are behind a rigidwall |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to be set on nodes behind rigidwall.

| Returns
<br>Number of nodes found<br>
Return type
<br>Number |
| --- |

| Example
<br>To set flag f on nodes behind rigidwall w:<br>
```
w.FlagNodesBehind(f);
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first rigidwall in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first rigidwall in

| Returns
<br>Rigidwall object (or null if there are no rigidwalls in the model).<br>
Return type
<br>Rigidwall |
| --- |

| Example
<br>To get the first rigidwall in model m:<br>
```
var r = Rigidwall.First(m);
```
 |
| --- |

* * *

| FirstFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the first free rigidwall label in the model. Also see [Rigidwall.LastFreeLabel()](primer-rigidwall-class.md#Rigidwall::LastFreeLabel), [Rigidwall.NextFreeLabel()](primer-rigidwall-class.md#Rigidwall::NextFreeLabel) and [Model.FirstFreeItemLabel()](primer-model-class.md#Model::FirstFreeItemLabel). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first free rigidwall label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *First free in layer* in editing panels). If omitted the whole model will be used (Equivalent to *First free* in editing panels).

| Returns
<br>Rigidwall label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the first free rigidwall label in model m:<br>
```
var label = Rigidwall.FirstFreeLabel(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the rigidwalls in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all rigidwalls will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the rigidwalls

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the rigidwalls with flag f in model m:<br>
```
Rigidwall.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the rigidwall is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the rigidwall

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if rigidwall r has flag f set on it:<br>
```
if (r.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each rigidwall in the model.<br> **Note that ForEach has been designed to make looping over rigidwalls as fast as possible and so has some limitations. Firstly, a single temporary Rigidwall object is created and on each function call it is updated with the current rigidwall data. This means that you should not try to store the Rigidwall object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new rigidwalls inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all rigidwalls are in

* func (function)
 
Function to call for each rigidwall

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the rigidwalls in model m:<br>
```
Rigidwall.ForEach(m, test);
function test(r)
{
// r is Rigidwall object
}
```
<br><br>To call function test for all of the rigidwalls in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
Rigidwall.ForEach(m, test, data);
function test(r, extra)
{
// r is Rigidwall object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Rigidwall objects or properties for all of the rigidwalls in a model in PRIMER. If the optional property argument is not given then an array of Rigidwall objects is returned. If the property argument is given, that property value for each rigidwall is returned in the array instead of a Rigidwall object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get rigidwalls from

* property (optional) (string)
 
Name for property to get for all rigidwalls in the model

| Returns
<br>Array of Rigidwall objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Rigidwall objects for all of the rigidwalls in model m:<br>
```
var a = Rigidwall.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each rigidwall in model m:<br>
```
var a = Rigidwall.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a rigidwall. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the rigidwall r:<br>
```
var comm_array = r.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Rigidwall objects for all of the flagged rigidwalls in a model in PRIMER If the optional property argument is not given then an array of Rigidwall objects is returned. If the property argument is given, then that property value for each rigidwall is returned in the array instead of a Rigidwall object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get rigidwalls from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the rigidwalls that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged rigidwalls in the model

| Returns
<br>Array of Rigidwall objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Rigidwall objects for all of the rigidwalls in model m flagged with f:<br>
```
var r = Rigidwall.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the rigidwalls in model m flagged with f:<br>
```
var a = Rigidwall.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the Rigidwall object for a rigidwall ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the rigidwall in

* number (integer)
 
number of the rigidwall you want the Rigidwall object for

| Returns
<br>Rigidwall object (or null if rigidwall does not exist).<br>
Return type
<br>Rigidwall |
| --- |

| Example
<br>To get the Rigidwall object for rigidwall 100 in model m<br>
```
var r = Rigidwall.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a Rigidwall property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [Rigidwall.ViewParameters()](primer-rigidwall-class.md#Rigidwall::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
rigidwall property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if Rigidwall property r.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (r.GetParameter(r.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if Rigidwall property r.example is a parameter by using the GetParameter method:<br>
```
if (r.ViewParameters().GetParameter(r.example) ) do_something...
```
 |
| --- |

* * *

| GetRow(row*[integer]*)

Description<br>Returns the data for an NSEGS card row in the rigidwall. |
| --- |

#### Arguments

* row (integer)
 
The row you want the data for. **Note row indices start at 0**.

| Returns
<br>An array of numbers containing the row variables VL and HEIGHT.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the data for the 2nd row in rigidwall r:<br>
```
var data = r.GetRow(1);
var vl = data[0];
var height = data[1];
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this Rigidwall (\*RIGIDWALL). **Note that a carriage return is not added**. See also [Rigidwall.KeywordCards()](primer-rigidwall-class.md#Rigidwall::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for Rigidwall pm:<br>
```
var key = r.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the Rigidwall. **Note that a carriage return is not added**. See also [Rigidwall.Keyword()](primer-rigidwall-class.md#Rigidwall::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for Rigidwall pm:<br>
```
var cards = r.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last rigidwall in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last rigidwall in

| Returns
<br>Rigidwall object (or null if there are no rigidwalls in the model).<br>
Return type
<br>Rigidwall |
| --- |

| Example
<br>To get the last rigidwall in model m:<br>
```
var r = Rigidwall.Last(m);
```
 |
| --- |

* * *

| LastFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the last free rigidwall label in the model. Also see [Rigidwall.FirstFreeLabel()](primer-rigidwall-class.md#Rigidwall::FirstFreeLabel), [Rigidwall.NextFreeLabel()](primer-rigidwall-class.md#Rigidwall::NextFreeLabel) and see [Model.LastFreeItemLabel()](primer-model-class.md#Model::LastFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last free rigidwall label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest free in layer* in editing panels). If omitted the whole model will be used.

| Returns
<br>Rigidwall label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the last free rigidwall label in model m:<br>
```
var label = Rigidwall.LastFreeLabel(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next rigidwall in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Rigidwall object (or null if there are no more rigidwalls in the model).<br>
Return type
<br>Rigidwall |
| --- |

| Example
<br>To get the rigidwall in model m after rigidwall r:<br>
```
var r = r.Next();
```
 |
| --- |

* * *

| NextFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the next free (highest+1) rigidwall label in the model. Also see [Rigidwall.FirstFreeLabel()](primer-rigidwall-class.md#Rigidwall::FirstFreeLabel), [Rigidwall.LastFreeLabel()](primer-rigidwall-class.md#Rigidwall::LastFreeLabel) and [Model.NextFreeItemLabel()](primer-model-class.md#Model::NextFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get next free rigidwall label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest+1 in layer* in editing panels). If omitted the whole model will be used (Equivalent to *Highest+1* in editing panels).

| Returns
<br>Rigidwall label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the next free rigidwall label in model m:<br>
```
var label = Rigidwall.NextFreeLabel(m);
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a rigidwall. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only rigidwalls from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only rigidwalls that are flagged with *limit* can be selected. If omitted, or null, any rigidwalls from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[Rigidwall](primer-rigidwall-class.md) object (or null if not picked)<br>
Return type
<br>Rigidwall |
| --- |

| Example
<br>To pick a rigidwall from model m giving the prompt 'Pick rigidwall from screen':<br>
```
var r = Rigidwall.Pick('Pick rigidwall from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous rigidwall in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Rigidwall object (or null if there are no more rigidwalls in the model).<br>
Return type
<br>Rigidwall |
| --- |

| Example
<br>To get the rigidwall in model m before rigidwall r:<br>
```
var r = r.Previous();
```
 |
| --- |

* * *

| RemoveRow(row*[integer]*)

Description<br>Removes an NSEGS card row in the \*RIGIDWALL. |
| --- |

#### Arguments

* row (integer)
 
The row you want to remove the data for. **Note that row indices start at 0**.

| Returns
<br>No return value. |
| --- |

| Example
<br>To remove the second row of data for rigidwall r:<br>
```
r.RemoveRow(1);
```
 |
| --- |

* * *

| RenumberAll(Model*[[Model](primer-model-class.md)]*, start*[integer]*) [static]
Description<br>Renumbers all of the rigidwalls in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all rigidwalls will be renumbered in

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the rigidwalls in model m, from 1000000:<br>
```
Rigidwall.RenumberAll(m, 1000000);
```
 |
| --- |

* * *

| RenumberFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*) [static]
Description<br>Renumbers all of the flagged rigidwalls in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged rigidwalls will be renumbered in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the rigidwalls that you want to renumber

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the rigidwalls in model m flagged with f, from 1000000:<br>
```
Rigidwall.RenumberFlagged(m, f, 1000000);
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select rigidwalls using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting rigidwalls

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only rigidwalls from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only rigidwalls that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any rigidwalls can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of rigidwalls selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select rigidwalls from model m, flagging those selected with flag f, giving the prompt 'Select rigidwalls':<br>
```
Rigidwall.Select(f, 'Select rigidwalls', m);
```
<br><br>To select rigidwalls, flagging those selected with flag f but limiting selection to rigidwalls flagged with flag l, giving the prompt 'Select rigidwalls':<br>
```
Rigidwall.Select(f, 'Select rigidwalls', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the rigidwall. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the rigidwall

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for rigidwall r:<br>
```
r.SetFlag(f);
```
 |
| --- |

* * *

| SetRow(row*[integer]*, data*[Array of data]*)

Description<br>Sets the data for an NSEGS card row in the \*RIGIDWALL. |
| --- |

#### Arguments

* row (integer)
 
The row you want to set the data for. **Note that row indices start at 0**.

* data (Array of data)
 
The data you want to set the row to

| Returns
<br>No return value. |
| --- |

| Example
<br>To set the second row of data for rigidwall r to be vl 10.0 and height 1.0:<br>
```
var array = [10.0, 1.0];
r.SetRow(1, array);
```
<br>To append a new row of data (using the same array of values):<br>
```
r.SetRow(r.nsegs, array);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the rigidwall. The rigidwall will be sketched until you either call [Rigidwall.Unsketch()](primer-rigidwall-class.md#Rigidwall::Unsketch), [Rigidwall.UnsketchAll()](primer-rigidwall-class.md#Rigidwall::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the rigidwall is sketched. If omitted redraw is true. If you want to sketch several rigidwalls and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch rigidwall r:<br>
```
r.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged rigidwalls in the model. The rigidwalls will be sketched until you either call [Rigidwall.Unsketch()](primer-rigidwall-class.md#Rigidwall::Unsketch), [Rigidwall.UnsketchFlagged()](primer-rigidwall-class.md#Rigidwall::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged rigidwalls will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the rigidwalls that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the rigidwalls are sketched. If omitted redraw is true. If you want to sketch flagged rigidwalls several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all rigidwalls flagged with flag in model m:<br>
```
Rigidwall.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of rigidwalls in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing rigidwalls should be counted. If false or omitted
referenced but undefined rigidwalls will also be included in the total.

| Returns
<br>number of rigidwalls<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of rigidwalls in model m:<br>
```
var total = Rigidwall.Total(m);
```
 |
| --- |

* * *

| Unblank()

Description<br>Unblanks the rigidwall |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank rigidwall r:<br>
```
r.Unblank();
```
 |
| --- |

* * *

| UnblankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the rigidwalls in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all rigidwalls will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the rigidwalls in model m:<br>
```
Rigidwall.UnblankAll(m);
```
 |
| --- |

* * *

| UnblankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the flagged rigidwalls in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the flagged rigidwalls will be unblanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the rigidwalls that you want to unblank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the rigidwalls in model m flagged with f:<br>
```
Rigidwall.UnblankFlagged(m, f);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the rigidwalls in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all rigidwalls will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the rigidwalls

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the rigidwalls in model m:<br>
```
Rigidwall.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the rigidwall. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the rigidwall is unsketched. If omitted redraw is true. If you want to unsketch several rigidwalls and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch rigidwall r:<br>
```
r.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all rigidwalls. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all rigidwalls will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the rigidwalls are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all rigidwalls in model m:<br>
```
Rigidwall.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged rigidwalls in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all rigidwalls will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the rigidwalls that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the rigidwalls are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all rigidwalls flagged with flag in model m:<br>
```
Rigidwall.UnsketchAll(m, flag);
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
<br>[Rigidwall](primer-rigidwall-class.md) object.<br>
Return type
<br>Rigidwall |
| --- |

| Example
<br>To check if Rigidwall property r.example is a parameter by using the [Rigidwall.GetParameter()](primer-rigidwall-class.md#Rigidwall::GetParameter) method:<br>
```
if (r.ViewParameters().GetParameter(r.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for rigidwall. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for rigidwall r:<br>
```
r.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this rigidwall. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for rigidwall r:<br>
```
var xrefs = r.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the Rigidwall data in keyword format. Note that this contains the keyword header and the keyword cards. See also [Rigidwall.Keyword()](primer-rigidwall-class.md#Rigidwall::Keyword) and [Rigidwall.KeywordCards()](primer-rigidwall-class.md#Rigidwall::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for Rigidwall pm in keyword format<br>
```
var r = r.toString();
```
 |
| --- |

* * *