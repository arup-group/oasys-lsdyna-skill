# Beam class

The Beam class gives you access to beam cards in PRIMER. [More...](primer-beam-class.md#Beam_details)

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

* [BlankAll](primer-beam-class.md#Beam::BlankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [BlankFlagged](primer-beam-class.md#Beam::BlankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Create](primer-beam-class.md#Beam::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [FindBeamInBox](primer-beam-class.md#Beam::FindBeamInBox)(Model*[[Model](primer-model-class.md)]*, xmin*[real]*, xmax*[real]*, ymin*[real]*, ymax*[real]*, zmin*[real]*, zmax*[real]*, flag (optional)*[integer]*, excl (optional)*[integer]*, vis\_only (optional)*[integer]*)
* [FindBeamInit](primer-beam-class.md#Beam::FindBeamInit_deprecated)(Model*[[Model](primer-model-class.md)]*, flag (optional)*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [deprecated]
* [First](primer-beam-class.md#Beam::First)(Model*[[Model](primer-model-class.md)]*)
* [FirstFreeLabel](primer-beam-class.md#Beam::FirstFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [FlagAll](primer-beam-class.md#Beam::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-beam-class.md#Beam::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-beam-class.md#Beam::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-beam-class.md#Beam::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-beam-class.md#Beam::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-beam-class.md#Beam::Last)(Model*[[Model](primer-model-class.md)]*)
* [LastFreeLabel](primer-beam-class.md#Beam::LastFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [NextFreeLabel](primer-beam-class.md#Beam::NextFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [Pick](primer-beam-class.md#Beam::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [RenumberAll](primer-beam-class.md#Beam::RenumberAll)(Model*[[Model](primer-model-class.md)]*, start*[integer]*)
* [RenumberFlagged](primer-beam-class.md#Beam::RenumberFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*)
* [Select](primer-beam-class.md#Beam::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-beam-class.md#Beam::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-beam-class.md#Beam::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnblankAll](primer-beam-class.md#Beam::UnblankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnblankFlagged](primer-beam-class.md#Beam::UnblankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [UnflagAll](primer-beam-class.md#Beam::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-beam-class.md#Beam::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-beam-class.md#Beam::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-beam-class.md#Beam::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Blank](primer-beam-class.md#Beam::Blank)()
* [Blanked](primer-beam-class.md#Beam::Blanked)()
* [Browse](primer-beam-class.md#Beam::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-beam-class.md#Beam::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-beam-class.md#Beam::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-beam-class.md#Beam::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-beam-class.md#Beam::Edit)(modal (optional)*[boolean]*)
* [ElemCut](primer-beam-class.md#Beam::ElemCut)(Database cross section label*[integer]*)
* [Error](primer-beam-class.md#Beam::Error)(message*[string]*, details (optional)*[string]*)
* [ExtractColour](primer-beam-class.md#Beam::ExtractColour)()
* [Flagged](primer-beam-class.md#Beam::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-beam-class.md#Beam::GetComments)()
* [GetParameter](primer-beam-class.md#Beam::GetParameter)(prop*[string]*)
* [Keyword](primer-beam-class.md#Beam::Keyword)()
* [KeywordCards](primer-beam-class.md#Beam::KeywordCards)()
* [Next](primer-beam-class.md#Beam::Next)()
* [Previous](primer-beam-class.md#Beam::Previous)()
* [SectionFacePoints](primer-beam-class.md#Beam::SectionFacePoints)(face*[integer]*)
* [SectionFaces](primer-beam-class.md#Beam::SectionFaces)()
* [SectionPoints](primer-beam-class.md#Beam::SectionPoints)()
* [SetFlag](primer-beam-class.md#Beam::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Sketch](primer-beam-class.md#Beam::Sketch)(redraw (optional)*[boolean]*)
* [TiedNodeCheck](primer-beam-class.md#Beam::TiedNodeCheck)(Contact label*[integer]*, Flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, Option1*[integer]*, Option2*[integer]*)
* [Timestep](primer-beam-class.md#Beam::Timestep)()
* [Unblank](primer-beam-class.md#Beam::Unblank)()
* [Unsketch](primer-beam-class.md#Beam::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-beam-class.md#Beam::ViewParameters)()
* [Warning](primer-beam-class.md#Beam::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-beam-class.md#Beam::Xrefs)()
* [toString](primer-beam-class.md#Beam::toString)()

## Beam properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| cid | integer | Coordinate system ID (\_SCALAR) |
| cid | integer | Coordinate system ID at node 1 (\_SCALR) |
| colour | [Colour](primer-colour-class.md) | The colour of the beam |
| d1 | real | Section parameter 1 |
| d2 | real | Section parameter 2 |
| d3 | real | Section parameter 3 |
| d4 | real | Section parameter 4 |
| d5 | real | Section parameter 5 |
| d6 | real | Section parameter 6 |
| dofn1 | integer | Active degree of freedom at node 1 (\_SCALAR) |
| dofn2 | integer | Active degree of freedom at node 2 (\_SCALAR) |
| dofns | integer | Active degrees of freedom at nodes 1 and 2 (\_SCALR) |
| eid | integer | [Beam](primer-beam-class.md) number. Also see the [label](primer-beam-class.md#label) property which is an alternative name for this. |
| elbow | logical | If ELBOW option is set. Can be true or false |
| exists (read only) | logical | true if beam exists, false if referred to but not defined. |
| include | integer | The [Include](primer-include-class.md) file number that the beam is in. |
| iner | real | Mass moment of inertia for beam |
| label | integer | [Beam](primer-beam-class.md) number. Also see the [eid](primer-beam-class.md#eid) property which is an alternative name for this. |
| local | integer | Coordinate system option |
| mn | integer | Middle [Node](primer-node-class.md) for [elbow](primer-beam-class.md#elbow) beam |
| model (read only) | integer | The [Model](primer-model-class.md) number that the beam is in. |
| n1 | integer | [Node](primer-node-class.md) number 1 |
| n2 | integer | [Node](primer-node-class.md) number 2 |
| n3 | integer | [Node](primer-node-class.md) number 3 |
| nodes (read only) | integer | Number of nodes beam has |
| offset | real | If \_OFFSET option is set. Can be true or false |
| orientation | real | If \_ORIENTATION option is set. Can be true or false |
| parm1 | real | Thickness parameter 1 |
| parm2 | real | Thickness parameter 2 |
| parm3 | real | Thickness parameter 3 |
| parm4 | real | Thickness parameter 4 |
| parm5 | real | Thickness parameter 5 |
| pid | integer | [Part](primer-part-class.md) number |
| pid1 | integer | [Part](primer-part-class.md) number 1 for spotweld beam |
| pid2 | integer | [Part](primer-part-class.md) number 2 for spotweld beam |
| pid\_opt | logical | If \_PID option is set. Can be true or false |
| rr1 | integer | Rotational release code at node 1 |
| rr2 | integer | Rotational release code at node 2 |
| rt1 | integer | Translational release code at node 1 |
| rt2 | integer | Translational release code at node 2 |
| scalar | logical | If \_SCALAR option is set. Can be true or false |
| scalr | logical | If \_SCALR option is set. Can be true or false |
| section | logical | If \_SECTION option is set. Can be true or false |
| sn1 | integer | Scalar [Node](primer-node-class.md) number 1 |
| sn2 | integer | Scalar [Node](primer-node-class.md) number 2 |
| stype | string | Section type |
| thickness | logical | If \_THICKNESS option is set. Can be true or false |
| transparency | integer | The transparency of the beam (0-100) 0% is opaque, 100% is transparent. |
| vol | real | Volume of beam |
| vx | real | Orientation vector X at node 1 |
| vy | real | Orientation vector Y at node 1 |
| vz | real | Orientation vector Z at node 1 |
| warpage | logical | If WARPAGE option is set. Can be true or false |
| wx1 | real | Offset vector X at node 1 |
| wx2 | real | Offset vector X at node 2 |
| wy1 | real | Offset vector Y at node 1 |
| wy2 | real | Offset vector Y at node 2 |
| wz1 | real | Offset vector Z at node 1 |
| wz2 | real | Offset vector Z at node 2 |

| Detailed Description<br>The Beam class allows you to create, modify, edit and manipulate beam cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new Beam(Model*[[Model](primer-model-class.md)]*, eid*[integer]*, pid*[integer]*, n1*[integer]*, n2 (optional)*[integer]*, n3 (optional)*[integer]*)

Description<br>Create a new [Beam](primer-beam-class.md) object. Use either 1, 2 or 3 nodes when creating a new beam. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that beam will be created in

* eid (integer)
 
[Beam](primer-beam-class.md) number

* pid (integer)
 
[Part](primer-part-class.md) number

* n1 (integer)
 
[Node](primer-node-class.md) number 1

* n2 (optional) (integer)
 
[Node](primer-node-class.md) number 2

* n3 (optional) (integer)
 
[Node](primer-node-class.md) number 3

| Returns
<br>[Beam](primer-beam-class.md) object<br>
Return type
<br>Beam |
| --- |

| Example
<br>To create a new beam in model m with label 100, part 10 and nodes 1, 2, 3:<br>
```
var b = new Beam(m, 100, 10, 1, 2, 3);
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a beam. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the beam

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the beam b:<br>
```
b.AssociateComment(c);
```
 |
| --- |

* * *

| Blank()

Description<br>Blanks the beam |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To blank beam b:<br>
```
b.Blank();
```
 |
| --- |

* * *

| BlankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the beams in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all beams will be blanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the beams in model m:<br>
```
Beam.BlankAll(m);
```
 |
| --- |

* * *

| BlankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the flagged beams in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged beams will be blanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the beams that you want to blank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the beams in model m flagged with f:<br>
```
Beam.BlankFlagged(m, f);
```
 |
| --- |

* * *

| Blanked()

Description<br>Checks if the beam is blanked or not. |
| --- |

#### Arguments

No arguments

| Returns
<br>true if blanked, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if beam b is blanked:<br>
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
<br>To Browse beam b:<br>
```
b.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the beam. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the beam

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for beam b:<br>
```
b.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the beam. The target include of the copied beam can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>Beam object<br>
Return type
<br>Beam |
| --- |

| Example
<br>To copy beam b into beam z:<br>
```
var z = b.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a beam |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the beam will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>Beam object (or null if not made).<br>
Return type
<br>Beam |
| --- |

| Example
<br>To start creating a beam in model m:<br>
```
var b = Beam.Create(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a beam. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the beam

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the beam b:<br>
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
<br>To Edit beam b:<br>
```
b.Edit();
```
 |
| --- |

* * *

| ElemCut(Database cross section label*[integer]*)

Description<br>Returns coordinates of the intersections between a beam and a database cross section.<br>Note this function does not check that the beam is in the cross section definition (part set) |
| --- |

#### Arguments

* Database cross section label (integer)
 
The label of the database cross section.

| Returns
<br>An array containing the x,y,z coordinates of the cut point, or NULL if it does not cut<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the cut line coordinates between database cross section 200 and beam b:<br>
```
var data = b.ElemCut(200)
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for beam. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for beam b:<br>
```
b.Error("My custom error");
```
 |
| --- |

* * *

| ExtractColour()

Description<br>Extracts the **actual** colour used for beam.<br> By default in PRIMER many entities such as elements get their colour automatically from the part that they are in. PRIMER cycles through 13 default colours based on the label of the entity. In this case the beam [colour](primer-beam-class.md#colour) property will return the value [Colour.PART](primer-colour-class.md#Colour.PART) instead of the actual colour. This method will return the actual colour which is used for drawing the beam. |
| --- |

#### Arguments

No arguments

| Returns
<br>colour value (integer)<br>
Return type
<br>Number |
| --- |

| Example
<br>To return the colour used for drawing beam b:<br>
```
var colour = b.ExtractColour();
```
 |
| --- |

* * *

| FindBeamInBox(Model*[[Model](primer-model-class.md)]*, xmin*[real]*, xmax*[real]*, ymin*[real]*, ymax*[real]*, zmin*[real]*, zmax*[real]*, flag (optional)*[integer]*, excl (optional)*[integer]*, vis\_only (optional)*[integer]*) [static]
Description<br>Returns an array of Beam objects for the beams within a box. Please note this function provides a list of all beams that could potentially be in the box (using computationally cheap bounding box comparison) it is not a rigorous test of whether the beam is actually in the box. Note an extension of "spot\_thickness" is applied to each beam. This may include beams that are ostensibly outside box. The user should apply their own test. (this function is intended to provide an upper bound of elems to test) Setting the "excl" flag will require that the beam is fully contained, but this may not capture all the beams you want to process. |
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
 
Optional flag to restrict beams considered, if 0 all beams considered

* excl (optional) (integer)
 
Optional flag ( 0) Apply inclusive selection ( 1) Apply exclusive selection inclusive selection means elements intersect box exclusive selection means elements contained in box

* vis\_only (optional) (integer)
 
Optional flag to consider visible elements only (1), if (0) all elements considered

| Returns
<br>Array of Beam objects<br>
Return type
<br>Array |
| --- |

| Example
<br>To get an array of Beam objects for flagged beams within defined box (inclusive selection)<br>
```

      var s = Beam.FindBeamInBox(m, xmin, xmax, ymin, ymax, zmin, zmax, flag, 0, 0);
      if(s.length) ...
      
```
 |
| --- |

* * *

| FindBeamInit(Model*[[Model](primer-model-class.md)]*, flag (optional)*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static] [deprecated]
<br>This function is deprecated in version 20.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>
Description<br>Initialize setup so that all flagged beams in model can be tested to see if they are within box. In v20.0 this function is obsolete and the flagging bit (if required) should be specified in [Beam.FindBeamInBox()](primer-beam-class.md#Beam::FindBeamInBox) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) in which beams have been flagged

* flag (optional) ([Flag](primer-global-class.md#global::AllocateFlag))
 
Optional flag that has been set on the beams, if 0 all beams considered

| Returns
<br>No return value |
| --- |

| Example
<br>To initialize find setup for flagged beams in model m:<br>
```
Beam.FindBeamInit(m, flag);
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first beam in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first beam in

| Returns
<br>Beam object (or null if there are no beams in the model).<br>
Return type
<br>Beam |
| --- |

| Example
<br>To get the first beam in model m:<br>
```
var b = Beam.First(m);
```
 |
| --- |

* * *

| FirstFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the first free beam label in the model. Also see [Beam.LastFreeLabel()](primer-beam-class.md#Beam::LastFreeLabel), [Beam.NextFreeLabel()](primer-beam-class.md#Beam::NextFreeLabel) and [Model.FirstFreeItemLabel()](primer-model-class.md#Model::FirstFreeItemLabel). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first free beam label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *First free in layer* in editing panels). If omitted the whole model will be used (Equivalent to *First free* in editing panels).

| Returns
<br>Beam label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the first free beam label in model m:<br>
```
var label = Beam.FirstFreeLabel(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the beams in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all beams will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the beams

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the beams with flag f in model m:<br>
```
Beam.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the beam is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the beam

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if beam b has flag f set on it:<br>
```
if (b.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each beam in the model.<br> **Note that ForEach has been designed to make looping over beams as fast as possible and so has some limitations. Firstly, a single temporary Beam object is created and on each function call it is updated with the current beam data. This means that you should not try to store the Beam object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new beams inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all beams are in

* func (function)
 
Function to call for each beam

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the beams in model m:<br>
```
Beam.ForEach(m, test);
function test(b)
{
// b is Beam object
}
```
<br><br>To call function test for all of the beams in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
Beam.ForEach(m, test, data);
function test(b, extra)
{
// b is Beam object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Beam objects or properties for all of the beams in a model in PRIMER. If the optional property argument is not given then an array of Beam objects is returned. If the property argument is given, that property value for each beam is returned in the array instead of a Beam object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get beams from

* property (optional) (string)
 
Name for property to get for all beams in the model

| Returns
<br>Array of Beam objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Beam objects for all of the beams in model m:<br>
```
var a = Beam.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each beam in model m:<br>
```
var a = Beam.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a beam. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the beam b:<br>
```
var comm_array = b.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Beam objects for all of the flagged beams in a model in PRIMER If the optional property argument is not given then an array of Beam objects is returned. If the property argument is given, then that property value for each beam is returned in the array instead of a Beam object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get beams from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the beams that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged beams in the model

| Returns
<br>Array of Beam objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Beam objects for all of the beams in model m flagged with f:<br>
```
var b = Beam.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the beams in model m flagged with f:<br>
```
var a = Beam.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the Beam object for a beam ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the beam in

* number (integer)
 
number of the beam you want the Beam object for

| Returns
<br>Beam object (or null if beam does not exist).<br>
Return type
<br>Beam |
| --- |

| Example
<br>To get the Beam object for beam 100 in model m<br>
```
var b = Beam.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a Beam property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [Beam.ViewParameters()](primer-beam-class.md#Beam::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
beam property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if Beam property b.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (b.GetParameter(b.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if Beam property b.example is a parameter by using the GetParameter method:<br>
```
if (b.ViewParameters().GetParameter(b.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this beam (\*BEAM, \*BEAM\_SCALAR or \*BEAM\_SCALAR\_VALUE). **Note that a carriage return is not added**. See also [Beam.KeywordCards()](primer-beam-class.md#Beam::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for beam s:<br>
```
var key = s.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the beam. **Note that a carriage return is not added**. See also [Beam.Keyword()](primer-beam-class.md#Beam::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for beam b:<br>
```
var cards = b.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last beam in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last beam in

| Returns
<br>Beam object (or null if there are no beams in the model).<br>
Return type
<br>Beam |
| --- |

| Example
<br>To get the last beam in model m:<br>
```
var b = Beam.Last(m);
```
 |
| --- |

* * *

| LastFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the last free beam label in the model. Also see [Beam.FirstFreeLabel()](primer-beam-class.md#Beam::FirstFreeLabel), [Beam.NextFreeLabel()](primer-beam-class.md#Beam::NextFreeLabel) and see [Model.LastFreeItemLabel()](primer-model-class.md#Model::LastFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last free beam label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest free in layer* in editing panels). If omitted the whole model will be used.

| Returns
<br>Beam label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the last free beam label in model m:<br>
```
var label = Beam.LastFreeLabel(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next beam in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Beam object (or null if there are no more beams in the model).<br>
Return type
<br>Beam |
| --- |

| Example
<br>To get the beam in model m after beam b:<br>
```
var b = b.Next();
```
 |
| --- |

* * *

| NextFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the next free (highest+1) beam label in the model. Also see [Beam.FirstFreeLabel()](primer-beam-class.md#Beam::FirstFreeLabel), [Beam.LastFreeLabel()](primer-beam-class.md#Beam::LastFreeLabel) and [Model.NextFreeItemLabel()](primer-model-class.md#Model::NextFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get next free beam label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest+1 in layer* in editing panels). If omitted the whole model will be used (Equivalent to *Highest+1* in editing panels).

| Returns
<br>Beam label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the next free beam label in model m:<br>
```
var label = Beam.NextFreeLabel(m);
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a beam. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only beams from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only beams that are flagged with *limit* can be selected. If omitted, or null, any beams from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[Beam](primer-beam-class.md) object (or null if not picked)<br>
Return type
<br>Beam |
| --- |

| Example
<br>To pick a beam from model m giving the prompt 'Pick beam from screen':<br>
```
var b = Beam.Pick('Pick beam from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous beam in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Beam object (or null if there are no more beams in the model).<br>
Return type
<br>Beam |
| --- |

| Example
<br>To get the beam in model m before beam b:<br>
```
var b = b.Previous();
```
 |
| --- |

* * *

| RenumberAll(Model*[[Model](primer-model-class.md)]*, start*[integer]*) [static]
Description<br>Renumbers all of the beams in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all beams will be renumbered in

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the beams in model m, from 1000000:<br>
```
Beam.RenumberAll(m, 1000000);
```
 |
| --- |

* * *

| RenumberFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*) [static]
Description<br>Renumbers all of the flagged beams in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged beams will be renumbered in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the beams that you want to renumber

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the beams in model m flagged with f, from 1000000:<br>
```
Beam.RenumberFlagged(m, f, 1000000);
```
 |
| --- |

* * *

| SectionFacePoints(face*[integer]*)

Description<br>Returns the indices of the points for a faces to plot the true section of the beam. Note face numbers start at 0. [Beam.SectionPoints](primer-beam-class.md#Beam::SectionPoints) must be called before this method. |
| --- |

#### Arguments

* face (integer)
 
Face to get indices for

| Returns
<br>Array of integers<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the indices of the points for the second face on beam b:<br>
```
var indices = b.SectionFacePoints(1);
```
 |
| --- |

* * *

| SectionFaces()

Description<br>Returns the number of faces to plot the true section of the beam. [Beam.SectionPoints](primer-beam-class.md#Beam::SectionPoints) must be called before this method. |
| --- |

#### Arguments

No arguments

| Returns
<br>integer<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the number of faces for beam b:<br>
```
var faces = b.SectionFaces();
```
 |
| --- |

* * *

| SectionPoints()

Description<br>Returns the point coordinates to plot the true section of the beam. They are returned in a single array of numbers. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of reals<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the point coordinates for beam b:<br>
```
var points = b.SectionPoints();
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select beams using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting beams

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only beams from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only beams that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any beams can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of beams selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select beams from model m, flagging those selected with flag f, giving the prompt 'Select beams':<br>
```
Beam.Select(f, 'Select beams', m);
```
<br><br>To select beams, flagging those selected with flag f but limiting selection to beams flagged with flag l, giving the prompt 'Select beams':<br>
```
Beam.Select(f, 'Select beams', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the beam. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the beam

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for beam b:<br>
```
b.SetFlag(f);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the beam. The beam will be sketched until you either call [Beam.Unsketch()](primer-beam-class.md#Beam::Unsketch), [Beam.UnsketchAll()](primer-beam-class.md#Beam::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the beam is sketched. If omitted redraw is true. If you want to sketch several beams and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch beam b:<br>
```
b.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged beams in the model. The beams will be sketched until you either call [Beam.Unsketch()](primer-beam-class.md#Beam::Unsketch), [Beam.UnsketchFlagged()](primer-beam-class.md#Beam::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged beams will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the beams that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the beams are sketched. If omitted redraw is true. If you want to sketch flagged beams several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all beams flagged with flag in model m:<br>
```
Beam.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| TiedNodeCheck(Contact label*[integer]*, Flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, Option1*[integer]*, Option2*[integer]*)

Description<br>Checks if nodes of beam are tied by contact or directly attached (non-zero option1) |
| --- |

#### Arguments

* Contact label (integer)
 
The label of the tied contact. If zero the tied contact is found for the beam by reverse lookup.

* Flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
flag bit

* Option1 (integer)
 
Directly tied node (logical OR) 0:NONE 1:NRB/C\_EXNO 2:BEAM 4:SHELL 8:SOLID 16:TSHELL

* Option2 (integer)
 
0:No action 1:report error if directly attached node (acc. option1) also captured by contact

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To check if both nodes of beam b are tied by contact 200 or attach directly to constraint, beam or shell:<br>
```
var message = b.TiedNodeCheck(200, flag, 1|2|4, 1)
```
 |
| --- |

* * *

| Timestep()

Description<br>Calculates the timestep for the beam |
| --- |

#### Arguments

No arguments

| Returns
<br>real<br>
Return type
<br>Number |
| --- |

| Example
<br>To calculate the timestep for beam b:<br>
```
var timestep = b.Timestep();
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of beams in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing beams should be counted. If false or omitted
referenced but undefined beams will also be included in the total.

| Returns
<br>number of beams<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of beams in model m:<br>
```
var total = Beam.Total(m);
```
 |
| --- |

* * *

| Unblank()

Description<br>Unblanks the beam |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank beam b:<br>
```
b.Unblank();
```
 |
| --- |

* * *

| UnblankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the beams in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all beams will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the beams in model m:<br>
```
Beam.UnblankAll(m);
```
 |
| --- |

* * *

| UnblankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the flagged beams in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the flagged beams will be unblanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the beams that you want to unblank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the beams in model m flagged with f:<br>
```
Beam.UnblankFlagged(m, f);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the beams in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all beams will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the beams

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the beams in model m:<br>
```
Beam.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the beam. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the beam is unsketched. If omitted redraw is true. If you want to unsketch several beams and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch beam b:<br>
```
b.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all beams. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all beams will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the beams are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all beams in model m:<br>
```
Beam.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged beams in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all beams will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the beams that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the beams are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all beams flagged with flag in model m:<br>
```
Beam.UnsketchAll(m, flag);
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
<br>[Beam](primer-beam-class.md) object.<br>
Return type
<br>Beam |
| --- |

| Example
<br>To check if Beam property b.example is a parameter by using the [Beam.GetParameter()](primer-beam-class.md#Beam::GetParameter) method:<br>
```
if (b.ViewParameters().GetParameter(b.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for beam. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for beam b:<br>
```
b.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this beam. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for beam b:<br>
```
var xrefs = b.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the beam data in keyword format. Note that this contains the keyword header and the keyword cards. See also [Beam.Keyword()](primer-beam-class.md#Beam::Keyword) and [Beam.KeywordCards()](primer-beam-class.md#Beam::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for beam b in keyword format<br>
```
var str = b.toString();
```
 |
| --- |

* * *