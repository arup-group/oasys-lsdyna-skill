# PrescribedMotion class

The PrescribedMotion class gives you access to define boundary prescribed motion cards in PRIMER. [More...](primer-prescribedmotion-class.md#PrescribedMotion_details)

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

* [AnimationBackward](primer-prescribedmotion-class.md#PrescribedMotion::AnimationBackward)()
* [AnimationBegin](primer-prescribedmotion-class.md#PrescribedMotion::AnimationBegin)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [AnimationFinish](primer-prescribedmotion-class.md#PrescribedMotion::AnimationFinish)()
* [AnimationForward](primer-prescribedmotion-class.md#PrescribedMotion::AnimationForward)()
* [AnimationGetData](primer-prescribedmotion-class.md#PrescribedMotion::AnimationGetData)()
* [AnimationPause](primer-prescribedmotion-class.md#PrescribedMotion::AnimationPause)()
* [AnimationPlay](primer-prescribedmotion-class.md#PrescribedMotion::AnimationPlay)()
* [AnimationSetData](primer-prescribedmotion-class.md#PrescribedMotion::AnimationSetData)(data*[object]*)
* [AnimationToEnd](primer-prescribedmotion-class.md#PrescribedMotion::AnimationToEnd)()
* [AnimationToStart](primer-prescribedmotion-class.md#PrescribedMotion::AnimationToStart)()
* [AnimationToTime](primer-prescribedmotion-class.md#PrescribedMotion::AnimationToTime)()
* [BlankAll](primer-prescribedmotion-class.md#PrescribedMotion::BlankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [BlankFlagged](primer-prescribedmotion-class.md#PrescribedMotion::BlankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [First](primer-prescribedmotion-class.md#PrescribedMotion::First)(Model*[[Model](primer-model-class.md)]*)
* [FirstFreeLabel](primer-prescribedmotion-class.md#PrescribedMotion::FirstFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [FlagAll](primer-prescribedmotion-class.md#PrescribedMotion::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-prescribedmotion-class.md#PrescribedMotion::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-prescribedmotion-class.md#PrescribedMotion::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-prescribedmotion-class.md#PrescribedMotion::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-prescribedmotion-class.md#PrescribedMotion::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-prescribedmotion-class.md#PrescribedMotion::Last)(Model*[[Model](primer-model-class.md)]*)
* [LastFreeLabel](primer-prescribedmotion-class.md#PrescribedMotion::LastFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [NextFreeLabel](primer-prescribedmotion-class.md#PrescribedMotion::NextFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [Pick](primer-prescribedmotion-class.md#PrescribedMotion::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [RenumberAll](primer-prescribedmotion-class.md#PrescribedMotion::RenumberAll)(Model*[[Model](primer-model-class.md)]*, start*[integer]*)
* [RenumberFlagged](primer-prescribedmotion-class.md#PrescribedMotion::RenumberFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*)
* [Select](primer-prescribedmotion-class.md#PrescribedMotion::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-prescribedmotion-class.md#PrescribedMotion::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-prescribedmotion-class.md#PrescribedMotion::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnblankAll](primer-prescribedmotion-class.md#PrescribedMotion::UnblankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnblankFlagged](primer-prescribedmotion-class.md#PrescribedMotion::UnblankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [UnflagAll](primer-prescribedmotion-class.md#PrescribedMotion::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-prescribedmotion-class.md#PrescribedMotion::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-prescribedmotion-class.md#PrescribedMotion::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-prescribedmotion-class.md#PrescribedMotion::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Blank](primer-prescribedmotion-class.md#PrescribedMotion::Blank)()
* [Blanked](primer-prescribedmotion-class.md#PrescribedMotion::Blanked)()
* [ClearFlag](primer-prescribedmotion-class.md#PrescribedMotion::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-prescribedmotion-class.md#PrescribedMotion::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-prescribedmotion-class.md#PrescribedMotion::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Error](primer-prescribedmotion-class.md#PrescribedMotion::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-prescribedmotion-class.md#PrescribedMotion::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-prescribedmotion-class.md#PrescribedMotion::GetComments)()
* [GetParameter](primer-prescribedmotion-class.md#PrescribedMotion::GetParameter)(prop*[string]*)
* [Keyword](primer-prescribedmotion-class.md#PrescribedMotion::Keyword)()
* [KeywordCards](primer-prescribedmotion-class.md#PrescribedMotion::KeywordCards)()
* [Next](primer-prescribedmotion-class.md#PrescribedMotion::Next)()
* [Previous](primer-prescribedmotion-class.md#PrescribedMotion::Previous)()
* [SetFlag](primer-prescribedmotion-class.md#PrescribedMotion::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Sketch](primer-prescribedmotion-class.md#PrescribedMotion::Sketch)(redraw (optional)*[boolean]*)
* [Unblank](primer-prescribedmotion-class.md#PrescribedMotion::Unblank)()
* [Unsketch](primer-prescribedmotion-class.md#PrescribedMotion::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-prescribedmotion-class.md#PrescribedMotion::ViewParameters)()
* [Warning](primer-prescribedmotion-class.md#PrescribedMotion::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-prescribedmotion-class.md#PrescribedMotion::Xrefs)()
* [toString](primer-prescribedmotion-class.md#PrescribedMotion::toString)()

## PrescribedMotion constants

| **Name** | **Description** |
| --- | --- |
| PrescribedMotion.EDGE\_UVW | Prescribed motion is \*BOUNDARY\_PRESCRIBED\_MOTION\_EDGE\_UVW. |
| PrescribedMotion.FACE\_XYZ | Prescribed motion is \*BOUNDARY\_PRESCRIBED\_MOTION\_FACE\_XYZ. |
| PrescribedMotion.NODE | Prescribed motion is \*BOUNDARY\_PRESCRIBED\_MOTION\_NODE. |
| PrescribedMotion.NRBC | Prescribed motion is \*BOUNDARY\_PRESCRIBED\_MOTION\_RIGID, with an NRB, not a part. |
| PrescribedMotion.NRBC\_LOCAL | Prescribed motion is \*BOUNDARY\_PRESCRIBED\_MOTION\_RIGID\_LOCAL, with an NRB, not a part. |
| PrescribedMotion.POINT\_UVW | Prescribed motion is \*BOUNDARY\_PRESCRIBED\_MOTION\_POINT\_UVW. |
| PrescribedMotion.RIGID | Prescribed motion is \*BOUNDARY\_PRESCRIBED\_MOTION\_RIGID. |
| PrescribedMotion.RIGID\_LOCAL | Prescribed motion is \*BOUNDARY\_PRESCRIBED\_MOTION\_RIGID\_LOCAL. |
| PrescribedMotion.SET | Prescribed motion is \*BOUNDARY\_PRESCRIBED\_MOTION\_SET. |
| PrescribedMotion.SET\_BOX | Prescribed motion is \*BOUNDARY\_PRESCRIBED\_MOTION\_SET\_BOX. |
| PrescribedMotion.SET\_EDGE\_UVW | Prescribed motion is \*BOUNDARY\_PRESCRIBED\_MOTION\_SET\_EDGE\_UVW. |
| PrescribedMotion.SET\_FACE\_XYZ | Prescribed motion is \*BOUNDARY\_PRESCRIBED\_MOTION\_SET\_FACE\_XYZ. |
| PrescribedMotion.SET\_LINE | Prescribed motion is \*BOUNDARY\_PRESCRIBED\_MOTION\_SET\_LINE. |
| PrescribedMotion.SET\_POINT\_UVW | Prescribed motion is \*BOUNDARY\_PRESCRIBED\_MOTION\_SET\_POINT\_UVW. |
| PrescribedMotion.SET\_SEGMENT | Prescribed motion is \*BOUNDARY\_PRESCRIBED\_MOTION\_SET\_SEGMENT. |

## PrescribedMotion properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| birth | real | Birth time |
| bndout2dynain | logical | true if \_BNDOUT2DYNAIN option is set, false if not |
| death | real | Death time |
| dof | integer | Degree of freedom |
| exists (read only) | logical | true if boundary prescribed motion exists, false if referred to but not defined. |
| form | integer | Formulation type. Used for Card 6. |
| heading | string | [PrescribedMotion](primer-prescribedmotion-class.md) heading |
| id | logical | true if \_ID option is set, false if not |
| include | integer | The [Include](primer-include-class.md) file number that the boundary prescribed motion is in. |
| label | integer | [PrescribedMotion](primer-prescribedmotion-class.md) number. |
| lcid | integer | Load curve of motion vs. time |
| lrb | integer | Lead rigid body for measuring relative displacement |
| model (read only) | integer | The [Model](primer-model-class.md) number that the boundary prescribed motion is in. |
| nbeg | integer | Node ID of a starting node. Used for [PrescribedMotion.SET_LINE](primer-prescribedmotion-class.md#PrescribedMotion.SET_LINE) |
| nend | integer | Node ID of a ending node. Used for [PrescribedMotion.SET_LINE](primer-prescribedmotion-class.md#PrescribedMotion.SET_LINE) |
| node1 | integer | Optional orientation node for relative displacement |
| node2 | integer | Optional orientation node for relative displacement |
| offset1 | real | Offset 1 for types 9-11 |
| offset2 | real | Offset 2 for types 9-11 |
| prmr | string | String representing the name of the parameter to be output to the dynain file. Used when [PrescribedMotion.bndout2dynain](primer-prescribedmotion-class.md#bndout2dynain) is set to true. |
| sf | real | Load curve scale factor |
| sfd | real | Scale factor for displacement penalty stiffness. Used for Card 6. |
| sfr | real | This property is deprecated in version 14.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Scale factor for rotational penalty stiffness. Used for Card 6. [deprecated] |
| type | constant | The Prescribed motion type. Can be [PrescribedMotion.NODE](primer-prescribedmotion-class.md#PrescribedMotion.NODE), [PrescribedMotion.SET](primer-prescribedmotion-class.md#PrescribedMotion.SET), [PrescribedMotion.RIGID](primer-prescribedmotion-class.md#PrescribedMotion.RIGID), [PrescribedMotion.RIGID_LOCAL](primer-prescribedmotion-class.md#PrescribedMotion.RIGID_LOCAL), [PrescribedMotion.NRBC](primer-prescribedmotion-class.md#PrescribedMotion.NRBC), [PrescribedMotion.NRBC_LOCAL](primer-prescribedmotion-class.md#PrescribedMotion.NRBC_LOCAL), [PrescribedMotion.SET_BOX](primer-prescribedmotion-class.md#PrescribedMotion.SET_BOX), [PrescribedMotion.SET_SEGMENT](primer-prescribedmotion-class.md#PrescribedMotion.SET_SEGMENT), [PrescribedMotion.SET_LINE](primer-prescribedmotion-class.md#PrescribedMotion.SET_LINE), [PrescribedMotion.POINT_UVW](primer-prescribedmotion-class.md#PrescribedMotion.POINT_UVW), [PrescribedMotion.EDGE_UVW](primer-prescribedmotion-class.md#PrescribedMotion.EDGE_UVW), [PrescribedMotion.FACE_XYZ](primer-prescribedmotion-class.md#PrescribedMotion.FACE_XYZ), [PrescribedMotion.SET_POINT_UVW](primer-prescribedmotion-class.md#PrescribedMotion.SET_POINT_UVW), [PrescribedMotion.SET_EDGE_UVW](primer-prescribedmotion-class.md#PrescribedMotion.SET_EDGE_UVW) or [PrescribedMotion.SET_FACE_XYZ](primer-prescribedmotion-class.md#PrescribedMotion.SET_FACE_XYZ) |
| typeid | integer | Node ID, node set ID, part ID or NRB |
| vad | integer | Velocity/acceleration/displacement flag |
| vid | integer | Vector ID |

| Detailed Description<br>The PrescribedMotion class allows you to create, modify, edit and boundary prescribed motion cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new PrescribedMotion(Model*[[Model](primer-model-class.md)]*, typeid*[integer]*, dof*[integer]*, vad*[integer]*, lcid*[integer]*, type*[constant]*, label (optional)*[integer]*, heading (optional)*[string]*)

Description<br>Create a new [PrescribedMotion](primer-prescribedmotion-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that PrescribedMotion will be created in

* typeid (integer)
 
Node ID, node set ID or part ID

* dof (integer)
 
Degree of freedom

* vad (integer)
 
Velocity/acceleration/displacement flag

* lcid (integer)
 
Load curve for motion

* type (constant)
 
Specify the type of prescribed motion (Can be [PrescribedMotion.NODE](primer-prescribedmotion-class.md#PrescribedMotion.NODE), [PrescribedMotion.SET](primer-prescribedmotion-class.md#PrescribedMotion.SET), [PrescribedMotion.RIGID](primer-prescribedmotion-class.md#PrescribedMotion.RIGID), [PrescribedMotion.RIGID_LOCAL](primer-prescribedmotion-class.md#PrescribedMotion.RIGID_LOCAL), [PrescribedMotion.NRBC](primer-prescribedmotion-class.md#PrescribedMotion.NRBC), [PrescribedMotion.NRBC_LOCAL](primer-prescribedmotion-class.md#PrescribedMotion.NRBC_LOCAL), [PrescribedMotion.SET_BOX](primer-prescribedmotion-class.md#PrescribedMotion.SET_BOX), [PrescribedMotion.SET_SEGMENT](primer-prescribedmotion-class.md#PrescribedMotion.SET_SEGMENT), [PrescribedMotion.SET_LINE](primer-prescribedmotion-class.md#PrescribedMotion.SET_LINE), [PrescribedMotion.POINT_UVW](primer-prescribedmotion-class.md#PrescribedMotion.POINT_UVW), [PrescribedMotion.EDGE_UVW](primer-prescribedmotion-class.md#PrescribedMotion.EDGE_UVW), [PrescribedMotion.FACE_XYZ](primer-prescribedmotion-class.md#PrescribedMotion.FACE_XYZ), [PrescribedMotion.SET_POINT_UVW](primer-prescribedmotion-class.md#PrescribedMotion.SET_POINT_UVW), [PrescribedMotion.SET_EDGE_UVW](primer-prescribedmotion-class.md#PrescribedMotion.SET_EDGE_UVW) or [PrescribedMotion.SET_FACE_XYZ](primer-prescribedmotion-class.md#PrescribedMotion.SET_FACE_XYZ))

* label (optional) (integer)
 
[PrescribedMotion](primer-prescribedmotion-class.md) number

* heading (optional) (string)
 
Title for the PrescribedMotion

| Returns
<br>[PrescribedMotion](primer-prescribedmotion-class.md) object<br>
Return type
<br>PrescribedMotion |
| --- |

| Example
<br>To create a new displacement for node 100 in x using loadcurve 10 model m with label 200, of type SET<br>
```
var b = new PrescribedMotion(m, 100, 1, 2, 10, PrescribedMotion.SET, 200);
```
 |
| --- |

| Details of functions 
AnimationBackward() [static]
Description<br>Moves backward one frame of a PrescribedMotion animation (pausing animation first if required). Also see the [PrescribedMotion.AnimationBegin()](primer-prescribedmotion-class.md#PrescribedMotion::AnimationBegin) method which **MUST** be called before you start animating and the [PrescribedMotion.AnimationFinish()](primer-prescribedmotion-class.md#PrescribedMotion::AnimationFinish) method which **MUST** be called after you have finished animating. |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To move backward one frame of an animation:<br>
```
PrescribedMotion.AnimationBackward();
```
 |
| --- |

* * *

| AnimationBegin(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Begins a PrescribedMotion animation. This **MUST** be called before any of the other Animation methods. Also see the [PrescribedMotion.AnimationFinish()](primer-prescribedmotion-class.md#PrescribedMotion::AnimationFinish) method which **MUST** be called after you have finished animating. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that PrescribedMotions are in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the PrescribedMotions that you want to animate

| Returns |
| --- |

Object with the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| end | real | End time |
| frame | integer | Current frame |
| frames | integer | Number of frames |
| rate | integer | Animation speed in fps |
| repeat | integer | Animation repeat (0=off, 1=on) |
| start | real | Start time |
| time | real | Current time |
| timestep | real | Timestep |

#### Return type

object

| Example
<br>To begin an animation of the PrescribedMotions in model m flagged with f:<br>
```
var aprops = PrescribedMotion.AnimationBegin(m, f);
```
 |
| --- |

* * *

| AnimationFinish() [static]
Description<br>Finishes a PrescribedMotion animation. This **MUST** be called to finish animating. This will restore nodal coordinates but will **not** perform a graphics update. Also see the [PrescribedMotion.AnimationBegin()](primer-prescribedmotion-class.md#PrescribedMotion::AnimationBegin) method which **MUST** be called before you start animating. |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To finish animating:<br>
```
PrescribedMotion.AnimationFinish();
```
 |
| --- |

* * *

| AnimationForward() [static]
Description<br>Moves forward one frame of a PrescribedMotion animation (pausing animation first if required). Also see the [PrescribedMotion.AnimationBegin()](primer-prescribedmotion-class.md#PrescribedMotion::AnimationBegin) method which **MUST** be called before you start animating and the [PrescribedMotion.AnimationFinish()](primer-prescribedmotion-class.md#PrescribedMotion::AnimationFinish) method which **MUST** be called after you have finished animating. |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To move forward one frame of an animation:<br>
```
PrescribedMotion.AnimationForward();
```
 |
| --- |

* * *

| AnimationGetData() [static]
Description<br>Returns the animation data (pausing animation first if required). Also see the [PrescribedMotion.AnimationBegin()](primer-prescribedmotion-class.md#PrescribedMotion::AnimationBegin) method which **MUST** be called before you start animating and the [PrescribedMotion.AnimationFinish()](primer-prescribedmotion-class.md#PrescribedMotion::AnimationFinish) method which **MUST** be called after you have finished animating. |
| --- |

#### Arguments

No arguments

| Returns |
| --- |

Object with the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| end | real | End time |
| frame | integer | Current frame |
| frames | integer | Number of frames |
| rate | integer | Animation speed in fps |
| repeat | integer | Animation repeat (0=off, 1=on) |
| start | real | Start time |
| time | real | Current time |
| timestep | real | Timestep |

#### Return type

object

| Example
<br>To get the current animation data:<br>
```
PrescribedMotion.AnimationGetData();
```
 |
| --- |

* * *

| AnimationPause() [static]
Description<br>Pauses playback of a PrescribedMotion animation. Also see the [PrescribedMotion.AnimationBegin()](primer-prescribedmotion-class.md#PrescribedMotion::AnimationBegin) method which **MUST** be called before you start animating and the [PrescribedMotion.AnimationFinish()](primer-prescribedmotion-class.md#PrescribedMotion::AnimationFinish) method which **MUST** be called after you have finished animating. |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To pause playback of an animation:<br>
```
PrescribedMotion.AnimationPause();
```
 |
| --- |

* * *

| AnimationPlay() [static]
Description<br>Starts playback of a PrescribedMotion animation. Also see the [PrescribedMotion.AnimationBegin()](primer-prescribedmotion-class.md#PrescribedMotion::AnimationBegin) method which **MUST** be called before you start animating and the [PrescribedMotion.AnimationFinish()](primer-prescribedmotion-class.md#PrescribedMotion::AnimationFinish) method which **MUST** be called after you have finished animating.<br>This method should only be used from a script which implements a user interface so you can actually stop the animation! Don't forget to add a pause/stop button that calls [PrescribedMotion.AnimationPause()](primer-prescribedmotion-class.md#PrescribedMotion::AnimationPause)! |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To start playback of an animation:<br>
```
PrescribedMotion.AnimationPlay();
```
 |
| --- |

* * *

| AnimationSetData(data*[object]*) [static]
Description<br>Sets the current animation data (pausing animation first if required). Also see the [PrescribedMotion.AnimationBegin()](primer-prescribedmotion-class.md#PrescribedMotion::AnimationBegin) method which **MUST** be called before you start animating and the [PrescribedMotion.AnimationFinish()](primer-prescribedmotion-class.md#PrescribedMotion::AnimationFinish) method which **MUST** be called after you have finished animating. |
| --- |

#### Arguments

* data (object)

data returned from [PrescribedMotion.AnimationBegin()](primer-prescribedmotion-class.md#PrescribedMotion::AnimationBegin) or [PrescribedMotion.AnimationGetData()](primer-prescribedmotion-class.md#PrescribedMotion::AnimationGetData) 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| end | real | End time |
| frame | integer | Current frame |
| frames | integer | Number of frames |
| rate | integer | Animation speed in fps |
| repeat | integer | Animation repeat (0=off, 1=on) |
| start | real | Start time |
| time | real | Current time |
| timestep | real | Timestep |

| Returns
<br>No return value |
| --- |

| Example
<br>To set the animation frame rate to 10 frames/sec:<br>
```
data = PrescribedMotion.AnimationGetData();
data.rate = 10;
PrescribedMotion.AnimationSetData(data);
```
 |
| --- |

* * *

| AnimationToEnd() [static]
Description<br>Moves to the end of a PrescribedMotion animation (pausing animation first if required). Also see the [PrescribedMotion.AnimationBegin()](primer-prescribedmotion-class.md#PrescribedMotion::AnimationBegin) method which **MUST** be called before you start animating and the [PrescribedMotion.AnimationFinish()](primer-prescribedmotion-class.md#PrescribedMotion::AnimationFinish) method which **MUST** be called after you have finished animating. |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To move to the end of an animation:<br>
```
PrescribedMotion.AnimationToEnd();
```
 |
| --- |

* * *

| AnimationToStart() [static]
Description<br>Moves to the start of a PrescribedMotion animation (pausing animation first if required). Also see the [PrescribedMotion.AnimationBegin()](primer-prescribedmotion-class.md#PrescribedMotion::AnimationBegin) method which **MUST** be called before you start animating and the [PrescribedMotion.AnimationFinish()](primer-prescribedmotion-class.md#PrescribedMotion::AnimationFinish) method which **MUST** be called after you have finished animating. |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To move to the start of an animation:<br>
```
PrescribedMotion.AnimationToStart();
```
 |
| --- |

* * *

| AnimationToTime() [static]
Description<br>Moves to a specific time in a PrescribedMotion animation (pausing animation first if required). Also see the [PrescribedMotion.AnimationBegin()](primer-prescribedmotion-class.md#PrescribedMotion::AnimationBegin) method which **MUST** be called before you start animating and the [PrescribedMotion.AnimationFinish()](primer-prescribedmotion-class.md#PrescribedMotion::AnimationFinish) method which **MUST** be called after you have finished animating. |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To move to time 28.0 in an animation:<br>
```
PrescribedMotion.AnimationToTime(28.0);
```
 |
| --- |

* * *

| AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a boundary prescribed motion. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the boundary prescribed motion

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the boundary prescribed motion b:<br>
```
b.AssociateComment(c);
```
 |
| --- |

* * *

| Blank()

Description<br>Blanks the boundary prescribed motion |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To blank boundary prescribed motion b:<br>
```
b.Blank();
```
 |
| --- |

* * *

| BlankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the boundary prescribed motions in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all boundary prescribed motions will be blanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the boundary prescribed motions in model m:<br>
```
PrescribedMotion.BlankAll(m);
```
 |
| --- |

* * *

| BlankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the flagged boundary prescribed motions in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged boundary prescribed motions will be blanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the boundary prescribed motions that you want to blank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the boundary prescribed motions in model m flagged with f:<br>
```
PrescribedMotion.BlankFlagged(m, f);
```
 |
| --- |

* * *

| Blanked()

Description<br>Checks if the boundary prescribed motion is blanked or not. |
| --- |

#### Arguments

No arguments

| Returns
<br>true if blanked, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if boundary prescribed motion b is blanked:<br>
```
if (b.Blanked() ) do_something...
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the boundary prescribed motion. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the boundary prescribed motion

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for boundary prescribed motion b:<br>
```
b.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the boundary prescribed motion. The target include of the copied boundary prescribed motion can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>PrescribedMotion object<br>
Return type
<br>PrescribedMotion |
| --- |

| Example
<br>To copy boundary prescribed motion b into boundary prescribed motion z:<br>
```
var z = b.Copy();
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a boundary prescribed motion. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the boundary prescribed motion

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the boundary prescribed motion b:<br>
```
b.DetachComment(c);
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for boundary prescribed motion. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for boundary prescribed motion b:<br>
```
b.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first boundary prescribed motion in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first boundary prescribed motion in

| Returns
<br>PrescribedMotion object (or null if there are no boundary prescribed motions in the model).<br>
Return type
<br>PrescribedMotion |
| --- |

| Example
<br>To get the first boundary prescribed motion in model m:<br>
```
var b = PrescribedMotion.First(m);
```
 |
| --- |

* * *

| FirstFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the first free boundary prescribed motion label in the model. Also see [PrescribedMotion.LastFreeLabel()](primer-prescribedmotion-class.md#PrescribedMotion::LastFreeLabel), [PrescribedMotion.NextFreeLabel()](primer-prescribedmotion-class.md#PrescribedMotion::NextFreeLabel) and [Model.FirstFreeItemLabel()](primer-model-class.md#Model::FirstFreeItemLabel). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first free boundary prescribed motion label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *First free in layer* in editing panels). If omitted the whole model will be used (Equivalent to *First free* in editing panels).

| Returns
<br>PrescribedMotion label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the first free boundary prescribed motion label in model m:<br>
```
var label = PrescribedMotion.FirstFreeLabel(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the boundary prescribed motions in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all boundary prescribed motions will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the boundary prescribed motions

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the boundary prescribed motions with flag f in model m:<br>
```
PrescribedMotion.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the boundary prescribed motion is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the boundary prescribed motion

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if boundary prescribed motion b has flag f set on it:<br>
```
if (b.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each boundary prescribed motion in the model.<br> **Note that ForEach has been designed to make looping over boundary prescribed motions as fast as possible and so has some limitations. Firstly, a single temporary PrescribedMotion object is created and on each function call it is updated with the current boundary prescribed motion data. This means that you should not try to store the PrescribedMotion object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new boundary prescribed motions inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all boundary prescribed motions are in

* func (function)
 
Function to call for each boundary prescribed motion

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the boundary prescribed motions in model m:<br>
```
PrescribedMotion.ForEach(m, test);
function test(b)
{
// b is PrescribedMotion object
}
```
<br><br>To call function test for all of the boundary prescribed motions in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
PrescribedMotion.ForEach(m, test, data);
function test(b, extra)
{
// b is PrescribedMotion object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of PrescribedMotion objects or properties for all of the boundary prescribed motions in a model in PRIMER. If the optional property argument is not given then an array of PrescribedMotion objects is returned. If the property argument is given, that property value for each boundary prescribed motion is returned in the array instead of a PrescribedMotion object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get boundary prescribed motions from

* property (optional) (string)
 
Name for property to get for all boundary prescribed motions in the model

| Returns
<br>Array of PrescribedMotion objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of PrescribedMotion objects for all of the boundary prescribed motions in model m:<br>
```
var a = PrescribedMotion.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each boundary prescribed motion in model m:<br>
```
var a = PrescribedMotion.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a boundary prescribed motion. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the boundary prescribed motion b:<br>
```
var comm_array = b.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of PrescribedMotion objects for all of the flagged boundary prescribed motions in a model in PRIMER If the optional property argument is not given then an array of PrescribedMotion objects is returned. If the property argument is given, then that property value for each boundary prescribed motion is returned in the array instead of a PrescribedMotion object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get boundary prescribed motions from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the boundary prescribed motions that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged boundary prescribed motions in the model

| Returns
<br>Array of PrescribedMotion objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of PrescribedMotion objects for all of the boundary prescribed motions in model m flagged with f:<br>
```
var b = PrescribedMotion.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the boundary prescribed motions in model m flagged with f:<br>
```
var a = PrescribedMotion.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the PrescribedMotion object for a boundary prescribed motion ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the boundary prescribed motion in

* number (integer)
 
number of the boundary prescribed motion you want the PrescribedMotion object for

| Returns
<br>PrescribedMotion object (or null if boundary prescribed motion does not exist).<br>
Return type
<br>PrescribedMotion |
| --- |

| Example
<br>To get the PrescribedMotion object for boundary prescribed motion 100 in model m<br>
```
var b = PrescribedMotion.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a PrescribedMotion property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [PrescribedMotion.ViewParameters()](primer-prescribedmotion-class.md#PrescribedMotion::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
boundary prescribed motion property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if PrescribedMotion property b.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (b.GetParameter(b.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if PrescribedMotion property b.example is a parameter by using the GetParameter method:<br>
```
if (b.ViewParameters().GetParameter(b.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this PrescribedMotion (\*BOUNDARY\_PRESCRIBED\_MOTION\_xxxx). **Note that a carriage return is not added**. See also [PrescribedMotion.KeywordCards()](primer-prescribedmotion-class.md#PrescribedMotion::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for PrescribedMotion pm:<br>
```
var key = pm.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the PrescribedMotion. **Note that a carriage return is not added**. See also [PrescribedMotion.Keyword()](primer-prescribedmotion-class.md#PrescribedMotion::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for PrescribedMotion pm:<br>
```
var cards = pm.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last boundary prescribed motion in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last boundary prescribed motion in

| Returns
<br>PrescribedMotion object (or null if there are no boundary prescribed motions in the model).<br>
Return type
<br>PrescribedMotion |
| --- |

| Example
<br>To get the last boundary prescribed motion in model m:<br>
```
var b = PrescribedMotion.Last(m);
```
 |
| --- |

* * *

| LastFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the last free boundary prescribed motion label in the model. Also see [PrescribedMotion.FirstFreeLabel()](primer-prescribedmotion-class.md#PrescribedMotion::FirstFreeLabel), [PrescribedMotion.NextFreeLabel()](primer-prescribedmotion-class.md#PrescribedMotion::NextFreeLabel) and see [Model.LastFreeItemLabel()](primer-model-class.md#Model::LastFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last free boundary prescribed motion label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest free in layer* in editing panels). If omitted the whole model will be used.

| Returns
<br>PrescribedMotion label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the last free boundary prescribed motion label in model m:<br>
```
var label = PrescribedMotion.LastFreeLabel(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next boundary prescribed motion in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>PrescribedMotion object (or null if there are no more boundary prescribed motions in the model).<br>
Return type
<br>PrescribedMotion |
| --- |

| Example
<br>To get the boundary prescribed motion in model m after boundary prescribed motion b:<br>
```
var b = b.Next();
```
 |
| --- |

* * *

| NextFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the next free (highest+1) boundary prescribed motion label in the model. Also see [PrescribedMotion.FirstFreeLabel()](primer-prescribedmotion-class.md#PrescribedMotion::FirstFreeLabel), [PrescribedMotion.LastFreeLabel()](primer-prescribedmotion-class.md#PrescribedMotion::LastFreeLabel) and [Model.NextFreeItemLabel()](primer-model-class.md#Model::NextFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get next free boundary prescribed motion label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest+1 in layer* in editing panels). If omitted the whole model will be used (Equivalent to *Highest+1* in editing panels).

| Returns
<br>PrescribedMotion label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the next free boundary prescribed motion label in model m:<br>
```
var label = PrescribedMotion.NextFreeLabel(m);
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a boundary prescribed motion. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only boundary prescribed motions from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only boundary prescribed motions that are flagged with *limit* can be selected. If omitted, or null, any boundary prescribed motions from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[PrescribedMotion](primer-prescribedmotion-class.md) object (or null if not picked)<br>
Return type
<br>PrescribedMotion |
| --- |

| Example
<br>To pick a boundary prescribed motion from model m giving the prompt 'Pick boundary prescribed motion from screen':<br>
```
var b = PrescribedMotion.Pick('Pick boundary prescribed motion from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous boundary prescribed motion in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>PrescribedMotion object (or null if there are no more boundary prescribed motions in the model).<br>
Return type
<br>PrescribedMotion |
| --- |

| Example
<br>To get the boundary prescribed motion in model m before boundary prescribed motion b:<br>
```
var b = b.Previous();
```
 |
| --- |

* * *

| RenumberAll(Model*[[Model](primer-model-class.md)]*, start*[integer]*) [static]
Description<br>Renumbers all of the boundary prescribed motions in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all boundary prescribed motions will be renumbered in

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the boundary prescribed motions in model m, from 1000000:<br>
```
PrescribedMotion.RenumberAll(m, 1000000);
```
 |
| --- |

* * *

| RenumberFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*) [static]
Description<br>Renumbers all of the flagged boundary prescribed motions in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged boundary prescribed motions will be renumbered in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the boundary prescribed motions that you want to renumber

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the boundary prescribed motions in model m flagged with f, from 1000000:<br>
```
PrescribedMotion.RenumberFlagged(m, f, 1000000);
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select boundary prescribed motions using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting boundary prescribed motions

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only boundary prescribed motions from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only boundary prescribed motions that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any boundary prescribed motions can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of boundary prescribed motions selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select boundary prescribed motions from model m, flagging those selected with flag f, giving the prompt 'Select boundary prescribed motions':<br>
```
PrescribedMotion.Select(f, 'Select boundary prescribed motions', m);
```
<br><br>To select boundary prescribed motions, flagging those selected with flag f but limiting selection to boundary prescribed motions flagged with flag l, giving the prompt 'Select boundary prescribed motions':<br>
```
PrescribedMotion.Select(f, 'Select boundary prescribed motions', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the boundary prescribed motion. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the boundary prescribed motion

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for boundary prescribed motion b:<br>
```
b.SetFlag(f);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the boundary prescribed motion. The boundary prescribed motion will be sketched until you either call [PrescribedMotion.Unsketch()](primer-prescribedmotion-class.md#PrescribedMotion::Unsketch), [PrescribedMotion.UnsketchAll()](primer-prescribedmotion-class.md#PrescribedMotion::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the boundary prescribed motion is sketched. If omitted redraw is true. If you want to sketch several boundary prescribed motions and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch boundary prescribed motion b:<br>
```
b.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged boundary prescribed motions in the model. The boundary prescribed motions will be sketched until you either call [PrescribedMotion.Unsketch()](primer-prescribedmotion-class.md#PrescribedMotion::Unsketch), [PrescribedMotion.UnsketchFlagged()](primer-prescribedmotion-class.md#PrescribedMotion::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged boundary prescribed motions will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the boundary prescribed motions that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the boundary prescribed motions are sketched. If omitted redraw is true. If you want to sketch flagged boundary prescribed motions several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all boundary prescribed motions flagged with flag in model m:<br>
```
PrescribedMotion.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of boundary prescribed motions in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing boundary prescribed motions should be counted. If false or omitted
referenced but undefined boundary prescribed motions will also be included in the total.

| Returns
<br>number of boundary prescribed motions<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of boundary prescribed motions in model m:<br>
```
var total = PrescribedMotion.Total(m);
```
 |
| --- |

* * *

| Unblank()

Description<br>Unblanks the boundary prescribed motion |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank boundary prescribed motion b:<br>
```
b.Unblank();
```
 |
| --- |

* * *

| UnblankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the boundary prescribed motions in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all boundary prescribed motions will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the boundary prescribed motions in model m:<br>
```
PrescribedMotion.UnblankAll(m);
```
 |
| --- |

* * *

| UnblankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the flagged boundary prescribed motions in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the flagged boundary prescribed motions will be unblanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the boundary prescribed motions that you want to unblank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the boundary prescribed motions in model m flagged with f:<br>
```
PrescribedMotion.UnblankFlagged(m, f);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the boundary prescribed motions in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all boundary prescribed motions will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the boundary prescribed motions

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the boundary prescribed motions in model m:<br>
```
PrescribedMotion.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the boundary prescribed motion. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the boundary prescribed motion is unsketched. If omitted redraw is true. If you want to unsketch several boundary prescribed motions and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch boundary prescribed motion b:<br>
```
b.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all boundary prescribed motions. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all boundary prescribed motions will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the boundary prescribed motions are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all boundary prescribed motions in model m:<br>
```
PrescribedMotion.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged boundary prescribed motions in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all boundary prescribed motions will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the boundary prescribed motions that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the boundary prescribed motions are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all boundary prescribed motions flagged with flag in model m:<br>
```
PrescribedMotion.UnsketchAll(m, flag);
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
<br>[PrescribedMotion](primer-prescribedmotion-class.md) object.<br>
Return type
<br>PrescribedMotion |
| --- |

| Example
<br>To check if PrescribedMotion property b.example is a parameter by using the [PrescribedMotion.GetParameter()](primer-prescribedmotion-class.md#PrescribedMotion::GetParameter) method:<br>
```
if (b.ViewParameters().GetParameter(b.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for boundary prescribed motion. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for boundary prescribed motion b:<br>
```
b.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this boundary prescribed motion. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for boundary prescribed motion b:<br>
```
var xrefs = b.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the PrescribedMotion data in keyword format. Note that this contains the keyword header and the keyword cards. See also [PrescribedMotion.Keyword()](primer-prescribedmotion-class.md#PrescribedMotion::Keyword) and [PrescribedMotion.KeywordCards()](primer-prescribedmotion-class.md#PrescribedMotion::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for PrescribedMotion pm in keyword format<br>
```
var s = pm.toString();
```
 |
| --- |

* * *