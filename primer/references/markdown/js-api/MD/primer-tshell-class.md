# Tshell class

The Tshell class gives you access to thick shell cards in PRIMER. [More...](primer-tshell-class.md#Tshell_details)

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

* [BlankAll](primer-tshell-class.md#Tshell::BlankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [BlankFlagged](primer-tshell-class.md#Tshell::BlankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Create](primer-tshell-class.md#Tshell::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [FindTshellInBox](primer-tshell-class.md#Tshell::FindTshellInBox)(Model*[[Model](primer-model-class.md)]*, xmin*[real]*, xmax*[real]*, ymin*[real]*, ymax*[real]*, zmin*[real]*, zmax*[real]*, flag (optional)*[integer]*, excl (optional)*[integer]*, vis\_only (optional)*[integer]*)
* [First](primer-tshell-class.md#Tshell::First)(Model*[[Model](primer-model-class.md)]*)
* [FirstFreeLabel](primer-tshell-class.md#Tshell::FirstFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [FlagAll](primer-tshell-class.md#Tshell::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-tshell-class.md#Tshell::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-tshell-class.md#Tshell::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-tshell-class.md#Tshell::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-tshell-class.md#Tshell::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-tshell-class.md#Tshell::Last)(Model*[[Model](primer-model-class.md)]*)
* [LastFreeLabel](primer-tshell-class.md#Tshell::LastFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [NextFreeLabel](primer-tshell-class.md#Tshell::NextFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [Pick](primer-tshell-class.md#Tshell::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [RenumberAll](primer-tshell-class.md#Tshell::RenumberAll)(Model*[[Model](primer-model-class.md)]*, start*[integer]*)
* [RenumberFlagged](primer-tshell-class.md#Tshell::RenumberFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*)
* [Select](primer-tshell-class.md#Tshell::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-tshell-class.md#Tshell::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-tshell-class.md#Tshell::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnblankAll](primer-tshell-class.md#Tshell::UnblankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnblankFlagged](primer-tshell-class.md#Tshell::UnblankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [UnflagAll](primer-tshell-class.md#Tshell::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-tshell-class.md#Tshell::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-tshell-class.md#Tshell::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AspectRatio](primer-tshell-class.md#Tshell::AspectRatio)()
* [AssociateComment](primer-tshell-class.md#Tshell::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Blank](primer-tshell-class.md#Tshell::Blank)()
* [Blanked](primer-tshell-class.md#Tshell::Blanked)()
* [Browse](primer-tshell-class.md#Tshell::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-tshell-class.md#Tshell::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-tshell-class.md#Tshell::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-tshell-class.md#Tshell::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-tshell-class.md#Tshell::Edit)(modal (optional)*[boolean]*)
* [ElemCut](primer-tshell-class.md#Tshell::ElemCut)(Database cross section label*[integer]*)
* [Error](primer-tshell-class.md#Tshell::Error)(message*[string]*, details (optional)*[string]*)
* [ExtractColour](primer-tshell-class.md#Tshell::ExtractColour)()
* [Flagged](primer-tshell-class.md#Tshell::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-tshell-class.md#Tshell::GetComments)()
* [GetCompositeData](primer-tshell-class.md#Tshell::GetCompositeData)(ipt*[integer]*)
* [GetNodeIDs](primer-tshell-class.md#Tshell::GetNodeIDs)()
* [GetNodes](primer-tshell-class.md#Tshell::GetNodes)()
* [GetParameter](primer-tshell-class.md#Tshell::GetParameter)(prop*[string]*)
* [Jacobian](primer-tshell-class.md#Tshell::Jacobian)()
* [Keyword](primer-tshell-class.md#Tshell::Keyword)()
* [KeywordCards](primer-tshell-class.md#Tshell::KeywordCards)()
* [Next](primer-tshell-class.md#Tshell::Next)()
* [Previous](primer-tshell-class.md#Tshell::Previous)()
* [RemoveCompositeData](primer-tshell-class.md#Tshell::RemoveCompositeData)(ipt*[integer]*)
* [SetCompositeData](primer-tshell-class.md#Tshell::SetCompositeData)(ipt*[integer]*, mid*[integer]*, thick*[real]*, beta*[real]*)
* [SetFlag](primer-tshell-class.md#Tshell::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Sketch](primer-tshell-class.md#Tshell::Sketch)(redraw (optional)*[boolean]*)
* [Timestep](primer-tshell-class.md#Tshell::Timestep)()
* [Unblank](primer-tshell-class.md#Tshell::Unblank)()
* [Unsketch](primer-tshell-class.md#Tshell::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-tshell-class.md#Tshell::ViewParameters)()
* [Warning](primer-tshell-class.md#Tshell::Warning)(message*[string]*, details (optional)*[string]*)
* [Warpage](primer-tshell-class.md#Tshell::Warpage)()
* [Xrefs](primer-tshell-class.md#Tshell::Xrefs)()
* [toString](primer-tshell-class.md#Tshell::toString)()

## Tshell properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| beta | logical | If BETA option is set. |
| beta\_angle | real | Angle for BETA option. |
| colour | [Colour](primer-colour-class.md) | The colour of the thick shell |
| composite | logical | If COMPOSITE option is set. Can be true or false |
| eid | integer | [Tshell](primer-tshell-class.md) number. Also see the [label](primer-tshell-class.md#label) property which is an alternative name for this. |
| exists (read only) | logical | true if thick shell exists, false if referred to but not defined. |
| include | integer | The [Include](primer-include-class.md) file number that the thick shell is in. |
| label | integer | [Tshell](primer-tshell-class.md) number. Also see the [eid](primer-tshell-class.md#eid) property which is an alternative name for this. |
| model (read only) | integer | The [Model](primer-model-class.md) number that the thick shell is in. |
| n1 | integer | [Node](primer-node-class.md) number 1 |
| n2 | integer | [Node](primer-node-class.md) number 2 |
| n3 | integer | [Node](primer-node-class.md) number 3 |
| n4 | integer | [Node](primer-node-class.md) number 4 |
| n5 | integer | [Node](primer-node-class.md) number 5 |
| n6 | integer | [Node](primer-node-class.md) number 6 |
| n7 | integer | [Node](primer-node-class.md) number 7 |
| n8 | integer | [Node](primer-node-class.md) number 8 |
| nip | logical | Number of integration points for [composite](primer-tshell-class.md#composite) thick shell |
| nodes (read only) | integer | Number of nodes thick shell has |
| pid | integer | [Part](primer-part-class.md) number |
| transparency | integer | The transparency of the thick shell (0-100) 0% is opaque, 100% is transparent. |

| Detailed Description<br>The Tshell class allows you to create, modify, edit and manipulate thich shell cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new Tshell(Model*[[Model](primer-model-class.md)]*, eid*[integer]*, pid*[integer]*, n1*[integer]*, n2*[integer]*, n3*[integer]*, n4*[integer]*, n5*[integer]*, n6*[integer]*, n7 (optional)*[integer]*, n8 (optional)*[integer]*)

Description<br>Create a new [Tshell](primer-tshell-class.md) object. Use either 6 or 8 nodes when creating a new thick shell. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that thick shell will be created in

* eid (integer)
 
[Tshell](primer-tshell-class.md) number

* pid (integer)
 
[Part](primer-part-class.md) number

* n1 (integer)
 
[Node](primer-node-class.md) number 1

* n2 (integer)
 
[Node](primer-node-class.md) number 2

* n3 (integer)
 
[Node](primer-node-class.md) number 3

* n4 (integer)
 
[Node](primer-node-class.md) number 4

* n5 (integer)
 
[Node](primer-node-class.md) number 5

* n6 (integer)
 
[Node](primer-node-class.md) number 6

* n7 (optional) (integer)
 
[Node](primer-node-class.md) number 7

* n8 (optional) (integer)
 
[Node](primer-node-class.md) number 8

| Returns
<br>[Tshell](primer-tshell-class.md) object<br>
Return type
<br>Tshell |
| --- |

| Example
<br>To create a new thick shell in model m with label 100, part 10 and nodes 1, 2, 3, 4, 5, 6, 7, 8:<br>
```
var t = new Tshell(m, 100, 10, 1, 2, 3, 4, 5, 6, 7, 8);
```
 |
| --- |

| Details of functions 
AspectRatio()

Description<br>Calculates the aspect ratio for the thick shell |
| --- |

#### Arguments

No arguments

| Returns
<br>real<br>
Return type
<br>Number |
| --- |

| Example
<br>To calculate the aspect ratio for thick shell t:<br>
```
var ratio = t.AspectRatio();
```
 |
| --- |

* * *

| AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a thick shell. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the thick shell

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the thick shell t:<br>
```
t.AssociateComment(c);
```
 |
| --- |

* * *

| Blank()

Description<br>Blanks the thick shell |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To blank thick shell t:<br>
```
t.Blank();
```
 |
| --- |

* * *

| BlankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the thick shells in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all thick shells will be blanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the thick shells in model m:<br>
```
Tshell.BlankAll(m);
```
 |
| --- |

* * *

| BlankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the flagged thick shells in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged thick shells will be blanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the thick shells that you want to blank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the thick shells in model m flagged with f:<br>
```
Tshell.BlankFlagged(m, f);
```
 |
| --- |

* * *

| Blanked()

Description<br>Checks if the thick shell is blanked or not. |
| --- |

#### Arguments

No arguments

| Returns
<br>true if blanked, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if thick shell t is blanked:<br>
```
if (t.Blanked() ) do_something...
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
<br>To Browse thick shell t:<br>
```
t.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the thick shell. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the thick shell

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for thick shell t:<br>
```
t.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the thick shell. The target include of the copied thick shell can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>Tshell object<br>
Return type
<br>Tshell |
| --- |

| Example
<br>To copy thick shell t into thick shell z:<br>
```
var z = t.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a thick shell |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the thick shell will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>Tshell object (or null if not made).<br>
Return type
<br>Tshell |
| --- |

| Example
<br>To start creating a thick shell in model m:<br>
```
var t = Tshell.Create(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a thick shell. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the thick shell

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the thick shell t:<br>
```
t.DetachComment(c);
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
<br>To Edit thick shell t:<br>
```
t.Edit();
```
 |
| --- |

* * *

| ElemCut(Database cross section label*[integer]*)

Description<br>Returns coordinates of the intersections between a thick shell and a database cross section. |
| --- |

#### Arguments

* Database cross section label (integer)
 
The label of the database cross section.

| Returns |
| --- |

Object with the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| face1 | Array of reals | An array containing the x1,y1,z1,x2,y2,z2 coordinates of the cut line on the face 1. Null if no cut on this face. |
| face2 | Array of reals | An array containing the x1,y1,z1,x2,y2,z2 coordinates of the cut line on the face 2. Null if no cut on this face. |
| face3 | Array of reals | An array containing the x1,y1,z1,x2,y2,z2 coordinates of the cut line on the face 3. Null if no cut on this face. |
| face4 | Array of reals | An array containing the x1,y1,z1,x2,y2,z2 coordinates of the cut line on the face 4. Null if no cut on this face. |
| face5 | Array of reals | An array containing the x1,y1,z1,x2,y2,z2 coordinates of the cut line on the face 5. Null if no cut on this face. |
| face6 | Array of reals | An array containing the x1,y1,z1,x2,y2,z2 coordinates of the cut line on the face 6. Null if no cut on this face. |

#### Return type

object

| Example
<br>To see if the database cross section 200 cuts thick shell s and at which points it cuts face 3 of the thick shell:<br>
```

var data = s.ElemCut(200);
var face = data.face3;
if(face)
{
    var point1_x = face[0];
    var point1_y = face[1];
    var point1_z = face[2];
    var point2_x = face[3];
    var point2_y = face[4];
    var point2_z = face[5];
} 
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for thick shell. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for thick shell t:<br>
```
t.Error("My custom error");
```
 |
| --- |

* * *

| ExtractColour()

Description<br>Extracts the **actual** colour used for thick shell.<br> By default in PRIMER many entities such as elements get their colour automatically from the part that they are in. PRIMER cycles through 13 default colours based on the label of the entity. In this case the thick shell [colour](primer-tshell-class.md#colour) property will return the value [Colour.PART](primer-colour-class.md#Colour.PART) instead of the actual colour. This method will return the actual colour which is used for drawing the thick shell. |
| --- |

#### Arguments

No arguments

| Returns
<br>colour value (integer)<br>
Return type
<br>Number |
| --- |

| Example
<br>To return the colour used for drawing thick shell t:<br>
```
var colour = t.ExtractColour();
```
 |
| --- |

* * *

| FindTshellInBox(Model*[[Model](primer-model-class.md)]*, xmin*[real]*, xmax*[real]*, ymin*[real]*, ymax*[real]*, zmin*[real]*, zmax*[real]*, flag (optional)*[integer]*, excl (optional)*[integer]*, vis\_only (optional)*[integer]*) [static]
Description<br>Returns an array of Tshell objects for the thick shells within a box. Please note this function provides a list of all thick shells that could potentially be in the box (using computationally cheap bounding box comparison) it is not a rigorous test of whether the thick shellis actually in the box. This may include tshells that are ostensibly outside box. The user should apply their own test. (this function is intended to provide an upper bound of elems to test) Setting the "excl" flag will require that the tshell is fully contained. but this may not capture all the tshells you want to process. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) designated model

* xmin (real)
 
Minimum bound in global x

* xmax (real)
 
Maximum bound in global x

* ymin (real)
 
Minimum bound in global y

* ymax (real)
 
Maximum bound in global y

* zmin (real)
 
Minimum bound in global z

* zmax (real)
 
Maximum bound in global z

* flag (optional) (integer)
 
Optional flag to restrict thick shells considered, if 0 all tshells considered

* excl (optional) (integer)
 
Optional flag ( 0) Apply inclusive selection ( 1) Apply exclusive selection inclusive selection means elements intersect box exclusive selection means elements contained in box

* vis\_only (optional) (integer)
 
Optional flag to consider visible elements only (1), if (0) all elements considered

| Returns
<br>Array of Tshell objects<br>
Return type
<br>Array |
| --- |

| Example
<br>To get an array of Tshell objects for flagged thick shells within defined box (inclusive selection)<br>
```
var s = Tshell.FindTshellInBox(m, xmin, xmax, ymin, ymax, zmin, zmax, flag, 0, 0);
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first thick shell in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first thick shell in

| Returns
<br>Tshell object (or null if there are no thick shells in the model).<br>
Return type
<br>Tshell |
| --- |

| Example
<br>To get the first thick shell in model m:<br>
```
var t = Tshell.First(m);
```
 |
| --- |

* * *

| FirstFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the first free thick shell label in the model. Also see [Tshell.LastFreeLabel()](primer-tshell-class.md#Tshell::LastFreeLabel), [Tshell.NextFreeLabel()](primer-tshell-class.md#Tshell::NextFreeLabel) and [Model.FirstFreeItemLabel()](primer-model-class.md#Model::FirstFreeItemLabel). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first free thick shell label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *First free in layer* in editing panels). If omitted the whole model will be used (Equivalent to *First free* in editing panels).

| Returns
<br>Tshell label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the first free thick shell label in model m:<br>
```
var label = Tshell.FirstFreeLabel(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the thick shells in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all thick shells will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the thick shells

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the thick shells with flag f in model m:<br>
```
Tshell.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the thick shell is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the thick shell

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if thick shell t has flag f set on it:<br>
```
if (t.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each thick shell in the model.<br> **Note that ForEach has been designed to make looping over thick shells as fast as possible and so has some limitations. Firstly, a single temporary Tshell object is created and on each function call it is updated with the current thick shell data. This means that you should not try to store the Tshell object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new thick shells inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all thick shells are in

* func (function)
 
Function to call for each thick shell

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the thick shells in model m:<br>
```
Tshell.ForEach(m, test);
function test(t)
{
// t is Tshell object
}
```
<br><br>To call function test for all of the thick shells in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
Tshell.ForEach(m, test, data);
function test(t, extra)
{
// t is Tshell object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Tshell objects or properties for all of the thick shells in a model in PRIMER. If the optional property argument is not given then an array of Tshell objects is returned. If the property argument is given, that property value for each thick shell is returned in the array instead of a Tshell object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get thick shells from

* property (optional) (string)
 
Name for property to get for all thick shells in the model

| Returns
<br>Array of Tshell objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Tshell objects for all of the thick shells in model m:<br>
```
var a = Tshell.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each thick shell in model m:<br>
```
var a = Tshell.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a thick shell. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the thick shell t:<br>
```
var comm_array = t.GetComments();
```
 |
| --- |

* * *

| GetCompositeData(ipt*[integer]*)

Description<br>Returns the composite data for an integration point in \*ELEMENT\_TSHELL\_COMPOSITE. |
| --- |

#### Arguments

* ipt (integer)
 
The integration point you want the data for. **Note that integration points start at 0, not 1**.

| Returns
<br>An array of numbers containing the material id, thickness and beta angle.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the composite data for the 3rd integration point for thick shell t:<br>
```
if (t.composite && s.nip >= 3)
{
    var ipt_data = t.GetCompositeData(2);
}
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Tshell objects for all of the flagged thick shells in a model in PRIMER If the optional property argument is not given then an array of Tshell objects is returned. If the property argument is given, then that property value for each thick shell is returned in the array instead of a Tshell object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get thick shells from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the thick shells that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged thick shells in the model

| Returns
<br>Array of Tshell objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Tshell objects for all of the thick shells in model m flagged with f:<br>
```
var t = Tshell.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the thick shells in model m flagged with f:<br>
```
var a = Tshell.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the Tshell object for a thick shell ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the thick shell in

* number (integer)
 
number of the thick shell you want the Tshell object for

| Returns
<br>Tshell object (or null if thick shell does not exist).<br>
Return type
<br>Tshell |
| --- |

| Example
<br>To get the Tshell object for thick shell 100 in model m<br>
```
var t = Tshell.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetNodeIDs()

Description<br>Returns the labels of the nodes on the thick shell as an array. See also [Tshell.GetNodes()](primer-tshell-class.md#Tshell::GetNodes) |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of node labels (integers)<br>
Return type
<br>Number |
| --- |

| Example
<br>To return the node labels of thick shell t as an array<br>
```
var nodes = t.GetNodeIDs();
```
 |
| --- |

* * *

| GetNodes()

Description<br>Returns the nodes on the thick shell as an array of [Node](primer-node-class.md) objects. See also [Tshell.GetNodeIDs()](primer-tshell-class.md#Tshell::GetNodeIDs) |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of [Node](primer-node-class.md) objects<br>
Return type
<br>Array |
| --- |

| Example
<br>To return the nodes of thick shell t as an array<br>
```
var nodes = t.GetNodes();
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a Tshell property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [Tshell.ViewParameters()](primer-tshell-class.md#Tshell::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
thick shell property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if Tshell property t.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (t.GetParameter(t.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if Tshell property t.example is a parameter by using the GetParameter method:<br>
```
if (t.ViewParameters().GetParameter(t.example) ) do_something...
```
 |
| --- |

* * *

| Jacobian()

Description<br>Calculates the jacobian for the thick shell |
| --- |

#### Arguments

No arguments

| Returns
<br>real<br>
Return type
<br>Number |
| --- |

| Example
<br>To calculate the jacobian for thick shell t:<br>
```
var jacobian = s.Jacobian();
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this thick shell (\*ELEMENT\_TSHELL or \*ELEMENT\_TSHELL\_COMPOSITE). **Note that a carriage return is not added**. See also [Tshell.KeywordCards()](primer-tshell-class.md#Tshell::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for thick shell t:<br>
```
var key = t.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the thick shell. **Note that a carriage return is not added**. See also [Tshell.Keyword()](primer-tshell-class.md#Tshell::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for thick shell t:<br>
```
var cards = t.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last thick shell in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last thick shell in

| Returns
<br>Tshell object (or null if there are no thick shells in the model).<br>
Return type
<br>Tshell |
| --- |

| Example
<br>To get the last thick shell in model m:<br>
```
var t = Tshell.Last(m);
```
 |
| --- |

* * *

| LastFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the last free thick shell label in the model. Also see [Tshell.FirstFreeLabel()](primer-tshell-class.md#Tshell::FirstFreeLabel), [Tshell.NextFreeLabel()](primer-tshell-class.md#Tshell::NextFreeLabel) and see [Model.LastFreeItemLabel()](primer-model-class.md#Model::LastFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last free thick shell label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest free in layer* in editing panels). If omitted the whole model will be used.

| Returns
<br>Tshell label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the last free thick shell label in model m:<br>
```
var label = Tshell.LastFreeLabel(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next thick shell in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Tshell object (or null if there are no more thick shells in the model).<br>
Return type
<br>Tshell |
| --- |

| Example
<br>To get the thick shell in model m after thick shell t:<br>
```
var t = t.Next();
```
 |
| --- |

* * *

| NextFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the next free (highest+1) thick shell label in the model. Also see [Tshell.FirstFreeLabel()](primer-tshell-class.md#Tshell::FirstFreeLabel), [Tshell.LastFreeLabel()](primer-tshell-class.md#Tshell::LastFreeLabel) and [Model.NextFreeItemLabel()](primer-model-class.md#Model::NextFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get next free thick shell label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest+1 in layer* in editing panels). If omitted the whole model will be used (Equivalent to *Highest+1* in editing panels).

| Returns
<br>Tshell label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the next free thick shell label in model m:<br>
```
var label = Tshell.NextFreeLabel(m);
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a thick shell. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only thick shells from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only thick shells that are flagged with *limit* can be selected. If omitted, or null, any thick shells from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[Tshell](primer-tshell-class.md) object (or null if not picked)<br>
Return type
<br>Tshell |
| --- |

| Example
<br>To pick a thick shell from model m giving the prompt 'Pick thick shell from screen':<br>
```
var t = Tshell.Pick('Pick thick shell from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous thick shell in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Tshell object (or null if there are no more thick shells in the model).<br>
Return type
<br>Tshell |
| --- |

| Example
<br>To get the thick shell in model m before thick shell t:<br>
```
var t = t.Previous();
```
 |
| --- |

* * *

| RemoveCompositeData(ipt*[integer]*)

Description<br>Removes the composite data for an integration point in \*ELEMENT\_TSHELL\_COMPOSITE. |
| --- |

#### Arguments

* ipt (integer)
 
The integration point you want to remove. **Note that integration points start at 0, not 1**.

| Returns
<br>No return value. |
| --- |

| Example
<br>To remove the composite data for the 3rd integration point for thick shell t:<br>
```
t.RemoveCompositeData(2);
```
 |
| --- |

* * *

| RenumberAll(Model*[[Model](primer-model-class.md)]*, start*[integer]*) [static]
Description<br>Renumbers all of the thick shells in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all thick shells will be renumbered in

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the thick shells in model m, from 1000000:<br>
```
Tshell.RenumberAll(m, 1000000);
```
 |
| --- |

* * *

| RenumberFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*) [static]
Description<br>Renumbers all of the flagged thick shells in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged thick shells will be renumbered in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the thick shells that you want to renumber

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the thick shells in model m flagged with f, from 1000000:<br>
```
Tshell.RenumberFlagged(m, f, 1000000);
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select thick shells using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting thick shells

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only thick shells from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only thick shells that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any thick shells can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of thick shells selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select thick shells from model m, flagging those selected with flag f, giving the prompt 'Select thick shells':<br>
```
Tshell.Select(f, 'Select thick shells', m);
```
<br><br>To select thick shells, flagging those selected with flag f but limiting selection to thick shells flagged with flag l, giving the prompt 'Select thick shells':<br>
```
Tshell.Select(f, 'Select thick shells', l);
```
 |
| --- |

* * *

| SetCompositeData(ipt*[integer]*, mid*[integer]*, thick*[real]*, beta*[real]*)

Description<br>Sets the composite data for an integration point in \*ELEMENT\_TSHELL\_COMPOSITE. |
| --- |

#### Arguments

* ipt (integer)
 
The integration point you want to set the data for. **Note that integration points start at 0, not 1**.

* mid (integer)
 
Material ID for the integration point.

* thick (real)
 
Thickness of the integration point.

* beta (real)
 
Material angle of the integration point.

| Returns
<br>No return value. |
| --- |

| Example
<br>To set the composite data for the 3rd integration point to mat 1, thickness 0.5 and angle 45, for thick shell t:<br>
```
t.SetCompositeData(2, 1, 0.5, 45);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the thick shell. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the thick shell

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for thick shell t:<br>
```
t.SetFlag(f);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the thick shell. The thick shell will be sketched until you either call [Tshell.Unsketch()](primer-tshell-class.md#Tshell::Unsketch), [Tshell.UnsketchAll()](primer-tshell-class.md#Tshell::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the thick shell is sketched. If omitted redraw is true. If you want to sketch several thick shells and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch thick shell t:<br>
```
t.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged thick shells in the model. The thick shells will be sketched until you either call [Tshell.Unsketch()](primer-tshell-class.md#Tshell::Unsketch), [Tshell.UnsketchFlagged()](primer-tshell-class.md#Tshell::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged thick shells will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the thick shells that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the thick shells are sketched. If omitted redraw is true. If you want to sketch flagged thick shells several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all thick shells flagged with flag in model m:<br>
```
Tshell.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Timestep()

Description<br>Calculates the timestep for the thick shell |
| --- |

#### Arguments

No arguments

| Returns
<br>real<br>
Return type
<br>Number |
| --- |

| Example
<br>To calculate the timestep for thick shell t:<br>
```
var timestep = t.Timestep();
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of thick shells in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing thick shells should be counted. If false or omitted
referenced but undefined thick shells will also be included in the total.

| Returns
<br>number of thick shells<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of thick shells in model m:<br>
```
var total = Tshell.Total(m);
```
 |
| --- |

* * *

| Unblank()

Description<br>Unblanks the thick shell |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank thick shell t:<br>
```
t.Unblank();
```
 |
| --- |

* * *

| UnblankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the thick shells in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all thick shells will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the thick shells in model m:<br>
```
Tshell.UnblankAll(m);
```
 |
| --- |

* * *

| UnblankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the flagged thick shells in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the flagged thick shells will be unblanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the thick shells that you want to unblank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the thick shells in model m flagged with f:<br>
```
Tshell.UnblankFlagged(m, f);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the thick shells in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all thick shells will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the thick shells

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the thick shells in model m:<br>
```
Tshell.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the thick shell. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the thick shell is unsketched. If omitted redraw is true. If you want to unsketch several thick shells and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch thick shell t:<br>
```
t.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all thick shells. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all thick shells will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the thick shells are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all thick shells in model m:<br>
```
Tshell.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged thick shells in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all thick shells will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the thick shells that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the thick shells are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all thick shells flagged with flag in model m:<br>
```
Tshell.UnsketchAll(m, flag);
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
<br>[Tshell](primer-tshell-class.md) object.<br>
Return type
<br>Tshell |
| --- |

| Example
<br>To check if Tshell property t.example is a parameter by using the [Tshell.GetParameter()](primer-tshell-class.md#Tshell::GetParameter) method:<br>
```
if (t.ViewParameters().GetParameter(t.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for thick shell. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for thick shell t:<br>
```
t.Warning("My custom warning");
```
 |
| --- |

* * *

| Warpage()

Description<br>Calculates the warpage for the thick shell |
| --- |

#### Arguments

No arguments

| Returns
<br>real<br>
Return type
<br>Number |
| --- |

| Example
<br>To calculate the warpage for thick shell t:<br>
```
var warpage = s.Warpage();
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this thick shell. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for thick shell t:<br>
```
var xrefs = t.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the thick shell data in keyword format. Note that this contains the keyword header and the keyword cards. See also [Tshell.Keyword()](primer-tshell-class.md#Tshell::Keyword) and [Tshell.KeywordCards()](primer-tshell-class.md#Tshell::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for thick shell t in keyword format<br>
```
var str = t.toString();
```
 |
| --- |

* * *