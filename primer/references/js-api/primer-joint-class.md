# Joint class

The Joint class gives you access to constrained joint cards in PRIMER. [More...](primer-joint-class.md#Joint_details)

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

* [BlankAll](primer-joint-class.md#Joint::BlankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [BlankFlagged](primer-joint-class.md#Joint::BlankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Create](primer-joint-class.md#Joint::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [First](primer-joint-class.md#Joint::First)(Model*[[Model](primer-model-class.md)]*)
* [FirstFreeLabel](primer-joint-class.md#Joint::FirstFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [FlagAll](primer-joint-class.md#Joint::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-joint-class.md#Joint::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-joint-class.md#Joint::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-joint-class.md#Joint::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-joint-class.md#Joint::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-joint-class.md#Joint::Last)(Model*[[Model](primer-model-class.md)]*)
* [LastFreeLabel](primer-joint-class.md#Joint::LastFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [NextFreeLabel](primer-joint-class.md#Joint::NextFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [Pick](primer-joint-class.md#Joint::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [RenumberAll](primer-joint-class.md#Joint::RenumberAll)(Model*[[Model](primer-model-class.md)]*, start*[integer]*)
* [RenumberFlagged](primer-joint-class.md#Joint::RenumberFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*)
* [Select](primer-joint-class.md#Joint::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-joint-class.md#Joint::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-joint-class.md#Joint::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnblankAll](primer-joint-class.md#Joint::UnblankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnblankFlagged](primer-joint-class.md#Joint::UnblankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [UnflagAll](primer-joint-class.md#Joint::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-joint-class.md#Joint::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-joint-class.md#Joint::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-joint-class.md#Joint::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Blank](primer-joint-class.md#Joint::Blank)()
* [Blanked](primer-joint-class.md#Joint::Blanked)()
* [Browse](primer-joint-class.md#Joint::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-joint-class.md#Joint::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-joint-class.md#Joint::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-joint-class.md#Joint::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-joint-class.md#Joint::Edit)(modal (optional)*[boolean]*)
* [Error](primer-joint-class.md#Joint::Error)(message*[string]*, details (optional)*[string]*)
* [ExtractColour](primer-joint-class.md#Joint::ExtractColour)()
* [Flagged](primer-joint-class.md#Joint::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-joint-class.md#Joint::GetComments)()
* [GetParameter](primer-joint-class.md#Joint::GetParameter)(prop*[string]*)
* [Keyword](primer-joint-class.md#Joint::Keyword)()
* [KeywordCards](primer-joint-class.md#Joint::KeywordCards)()
* [Next](primer-joint-class.md#Joint::Next)()
* [Previous](primer-joint-class.md#Joint::Previous)()
* [SetFlag](primer-joint-class.md#Joint::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Sketch](primer-joint-class.md#Joint::Sketch)(redraw (optional)*[boolean]*)
* [Unblank](primer-joint-class.md#Joint::Unblank)()
* [Unsketch](primer-joint-class.md#Joint::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-joint-class.md#Joint::ViewParameters)()
* [Warning](primer-joint-class.md#Joint::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-joint-class.md#Joint::Xrefs)()
* [toString](primer-joint-class.md#Joint::toString)()

## Joint constants

| **Name** | **Description** |
| --- | --- |
| Joint.CONSTANT\_VELOCITY | CONSTANT\_VELOCITY is \*CONSTRAINED\_JOINT\_CONSTANT\_VELOCITY. |
| Joint.CYLINDRICAL | CYLINDRICAL is \*CONSTRAINED\_JOINT\_CYLINDRICAL. |
| Joint.GEARS | GEARS is \*CONSTRAINED\_JOINT\_GEARS. |
| Joint.LOCKING | LOCKING is \*CONSTRAINED\_JOINT\_LOCKING. |
| Joint.PLANAR | PLANAR is \*CONSTRAINED\_JOINT\_PLANAR. |
| Joint.PULLEY | PULLEY is \*CONSTRAINED\_JOINT\_PULLEY. |
| Joint.RACK\_AND\_PINION | RACK\_AND\_PINION is \*CONSTRAINED\_JOINT\_RACK\_AND\_PINION. |
| Joint.REVOLUTE | REVOLUTE is \*CONSTRAINED\_JOINT\_REVOLUTE. |
| Joint.ROTATIONAL\_MOTOR | ROTATIONAL\_MOTOR is \*CONSTRAINED\_JOINT\_ROTATIONAL\_MOTOR. |
| Joint.SCREW | SCREW is \*CONSTRAINED\_JOINT\_SCREW. |
| Joint.SPHERICAL | SPHERICAL is \*CONSTRAINED\_JOINT\_SPHERICAL. |
| Joint.TRANSLATIONAL | TRANSLATIONAL is \*CONSTRAINED\_JOINT\_TRANSLATIONAL. |
| Joint.TRANSLATIONAL\_MOTOR | TRANSLATIONAL\_MOTOR is \*CONSTRAINED\_JOINT\_TRANSLATIONAL\_MOTOR. |
| Joint.UNIVERSAL | UNIVERSAL is \*CONSTRAINED\_JOINT\_UNIVERSAL. |

## Joint properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| cid | integer | [Coordinate system](primer-coordinatesystem-class.md) number. |
| colour | [Colour](primer-colour-class.md) | The colour of the joint |
| coupl | real | Coupling between force and moment failure. |
| damp | real | Damping scale factor. |
| exists (read only) | logical | true if joint exists, false if referred to but not defined. |
| failure | logical | true if \_FAILURE option is set, false if not. |
| h\_angle | real | Helix angle for gears. |
| heading | string | Constrained joint heading. |
| id | logical | true if \_ID option is set, false if not |
| include | integer | The [Include](primer-include-class.md) file number that the joint is in. |
| jid | integer | Constrained joint number (identical to label). |
| label | integer | Constrained joint number. |
| lcid | integer | [Loadcuve](primer-curve-class.md) number. |
| local | logical | true if \_LOCAL option is set, false if not. |
| lst | integer | Local system type is accelerometer if lst is 1, rigid body if 0. |
| model (read only) | integer | The [Model](primer-model-class.md) number that the joint is in. |
| mxx | real | Torsional moment resultant at failure. |
| myy | real | Moment resultant at failure. |
| mzz | real | Moment resultant at failure. |
| n1 | integer | [Node](primer-node-class.md) number 1. |
| n2 | integer | [Node](primer-node-class.md) number 2. |
| n3 | integer | [Node](primer-node-class.md) number 3. |
| n4 | integer | [Node](primer-node-class.md) number 4. |
| n5 | integer | [Node](primer-node-class.md) number 5. |
| n6 | integer | [Node](primer-node-class.md) number 6. |
| nxx | real | Axial force resultant at failure. |
| nyy | real | Force resultant at failure. |
| nzz | real | Force resultant at failure. |
| option | constant | The Constrained Joint option. Can be: [Joint.SPHERICAL](primer-joint-class.md#Joint.SPHERICAL), [Joint.REVOLUTE](primer-joint-class.md#Joint.REVOLUTE), [Joint.CYLINDRICAL](primer-joint-class.md#Joint.CYLINDRICAL), [Joint.PLANAR](primer-joint-class.md#Joint.PLANAR), [Joint.UNIVERSAL](primer-joint-class.md#Joint.UNIVERSAL), [Joint.TRANSLATIONAL](primer-joint-class.md#Joint.TRANSLATIONAL), [Joint.LOCKING](primer-joint-class.md#Joint.LOCKING), [Joint.TRANSLATIONAL_MOTOR](primer-joint-class.md#Joint.TRANSLATIONAL_MOTOR), [Joint.ROTATIONAL_MOTOR](primer-joint-class.md#Joint.ROTATIONAL_MOTOR), [Joint.GEARS](primer-joint-class.md#Joint.GEARS), [Joint.RACK_AND_PINION](primer-joint-class.md#Joint.RACK_AND_PINION), [Joint.CONSTANT_VELOCITY](primer-joint-class.md#Joint.CONSTANT_VELOCITY), [Joint.PULLEY](primer-joint-class.md#Joint.PULLEY) or [Joint.SCREW](primer-joint-class.md#Joint.SCREW) |
| parm | real | Parameter for function. |
| r1 | real | Gear and pulley radius. |
| raid | integer | Rigid body or accelerometer number. |
| rps | real | Relative penalty stiffness. |
| tfail | real | Time for joint failure. |
| type | integer | Flag for motor type. |

| Detailed Description<br>The Joint class allows you to create, modify, edit and manipulate constrained joint cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new Joint(Model*[[Model](primer-model-class.md)]*, options *[object]*)

Description<br>Create a new [Joint](primer-joint-class.md) object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that constrained joint will be created in

* options  (object)

Options for creating the joint 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| heading (optional) | string | Constrained joint title |
| id (optional) | integer | Constrained joint ID. If omitted, the joint will be created without the \_ID option |
| nodes | array | Array of [Node](primer-node-class.md) IDs for the joint. At least 2 nodes must be given |
| type | constant | Constrained joint type (any) |

| Returns
<br>[Joint](primer-joint-class.md) object<br>
Return type
<br>Joint |
| --- |

| Example
<br>To create a new constrained joint 500 called "test spherical joint" of type \_SPHERICAL in model m with nodes 50 and 150<br>
```
var j = new Joint(m, { type: Joint.SPHERICAL, nodes: [50, 150], id: 500, heading: "test spherical joint" } );
```
<br>To create a new constrained joint 500 called "test revolute joint" of type \_REVOLUTE in model m with nodes 50, 100, 150 and 200<br>
```
var j = new Joint(m, { type: Joint.REVOLUTE, nodes: [50, 100, 150, 200], id: 500, heading: "test revolute joint" } );
```
<br>To create a new constrained joint 500 called "test translational joint" of type \_TRANSLATIONAL in model m with nodes 50, 100, 150, 200, 250 and 300<br>
```
var j = new Joint(m, { type: Joint.TRANSLATIONAL, nodes: [50, 100, 150, 200, 250, 300], id: 500, heading: "test translational joint" } );
```
 |
| --- |

| new Joint(Model*[[Model](primer-model-class.md)]*, option*[constant]*, n1*[integer]*, n2*[integer]*, jid (optional)*[integer]*, heading (optional)*[string]*) [deprecated]
<br>This function is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>
Description<br>Create a new [Joint](primer-joint-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that constrained joint will be created in

* option (constant)
 
Constrained joint type (any).

* n1 (integer)
 
[Node](primer-node-class.md) 1.

* n2 (integer)
 
[Node](primer-node-class.md) 2.

* jid (optional) (integer)
 
Constrained joint number.

* heading (optional) (string)
 
Constrained joint title.

| Returns
<br>[Joint](primer-joint-class.md) object<br>
Return type
<br>Joint |
| --- |

| Example
<br>To create a new constrained joint 500 called "test spherical joint" of type \_SPHERICAL in model m with nodes 50 and 150<br>
```
var j = new Joint(m, Joint.SPHERICAL, 50, 150, 500, "test spherical joint");
```
<br>To create a new constrained joint 500 called "test revolute joint" of type \_REVOLUTE in model m with nodes 50, 100, 150 and 200<br>
```
var j = new Joint(m, Joint.REVOLUTE, 50, 100, 500, "test revolute joint");
j.n3 = 150;
j.n4 = 200;
```
 |
| --- |

| new Joint(Model*[[Model](primer-model-class.md)]*, option*[constant]*, n1*[integer]*, n2*[integer]*, n3*[integer]*, n4*[integer]*, jid (optional)*[integer]*, heading (optional)*[string]*) [deprecated]
<br>This function is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>
Description<br>Create a new [Joint](primer-joint-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that constrained joint will be created in

* option (constant)
 
Constrained joint type. Can be [Joint.REVOLUTE](primer-joint-class.md#Joint.REVOLUTE), [Joint.CYLINDRICAL](primer-joint-class.md#Joint.CYLINDRICAL), [Joint.PLANAR](primer-joint-class.md#Joint.PLANAR), [Joint.UNIVERSAL](primer-joint-class.md#Joint.UNIVERSAL) or [Joint.TRANSLATIONAL_MOTOR](primer-joint-class.md#Joint.TRANSLATIONAL_MOTOR).

* n1 (integer)
 
[Node](primer-node-class.md) 1.

* n2 (integer)
 
[Node](primer-node-class.md) 2.

* n3 (integer)
 
[Node](primer-node-class.md) 3.

* n4 (integer)
 
[Node](primer-node-class.md) 4.

* jid (optional) (integer)
 
Constrained joint number.

* heading (optional) (string)
 
Constrained joint title.

| Returns
<br>[Joint](primer-joint-class.md) object<br>
Return type
<br>Joint |
| --- |

| Example
<br>To create a new constrained joint 500 called "test revolute joint" of type \_REVOLUTE in model m with nodes 50, 100, 150 and 200<br>
```
var j = new Joint(m, Joint.REVOLUTE, 50, 100, 150, 200, 500, "test revolute joint");
```
 |
| --- |

| new Joint(Model*[[Model](primer-model-class.md)]*, option*[constant]*, n1*[integer]*, n2*[integer]*, n3*[integer]*, n4*[integer]*, n5*[integer]*, n6*[integer]*, jid (optional)*[integer]*, heading (optional)*[string]*) [deprecated]
<br>This function is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>
Description<br>Create a new [Joint](primer-joint-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that constrained joint will be created in

* option (constant)
 
Constrained joint type. Can be [Joint.TRANSLATIONAL](primer-joint-class.md#Joint.TRANSLATIONAL), [Joint.LOCKING](primer-joint-class.md#Joint.LOCKING), [Joint.ROTATIONAL_MOTOR](primer-joint-class.md#Joint.ROTATIONAL_MOTOR), [Joint.GEARS](primer-joint-class.md#Joint.GEARS), [Joint.RACK_AND_PINION](primer-joint-class.md#Joint.RACK_AND_PINION), [Joint.CONSTANT_VELOCITY](primer-joint-class.md#Joint.CONSTANT_VELOCITY), [Joint.PULLEY](primer-joint-class.md#Joint.PULLEY) or [Joint.SCREW](primer-joint-class.md#Joint.SCREW).

* n1 (integer)
 
[Node](primer-node-class.md) 1.

* n2 (integer)
 
[Node](primer-node-class.md) 2.

* n3 (integer)
 
[Node](primer-node-class.md) 3.

* n4 (integer)
 
[Node](primer-node-class.md) 4.

* n5 (integer)
 
[Node](primer-node-class.md) 5.

* n6 (integer)
 
[Node](primer-node-class.md) 6.

* jid (optional) (integer)
 
Constrained joint number.

* heading (optional) (string)
 
Constrained joint title.

| Returns
<br>[Joint](primer-joint-class.md) object<br>
Return type
<br>Joint |
| --- |

| Example
<br>To create a new constrained joint 500 called "test translational joint" of type \_TRANSLATIONAL in model m with nodes 50, 100, 150, 300, 250 and 300<br>
```
var j = new Joint(m, Joint.TRANSLATIONAL, 50, 100, 150, 200, 250, 300, 500, "test translational joint");
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a joint. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the joint

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the joint j:<br>
```
j.AssociateComment(c);
```
 |
| --- |

* * *

| Blank()

Description<br>Blanks the joint |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To blank joint j:<br>
```
j.Blank();
```
 |
| --- |

* * *

| BlankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the joints in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all joints will be blanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the joints in model m:<br>
```
Joint.BlankAll(m);
```
 |
| --- |

* * *

| BlankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the flagged joints in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged joints will be blanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the joints that you want to blank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the joints in model m flagged with f:<br>
```
Joint.BlankFlagged(m, f);
```
 |
| --- |

* * *

| Blanked()

Description<br>Checks if the joint is blanked or not. |
| --- |

#### Arguments

No arguments

| Returns
<br>true if blanked, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if joint j is blanked:<br>
```
if (j.Blanked() ) do_something...
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
<br>To Browse joint j:<br>
```
j.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the joint. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the joint

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for joint j:<br>
```
j.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the joint. The target include of the copied joint can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>Joint object<br>
Return type
<br>Joint |
| --- |

| Example
<br>To copy joint j into joint z:<br>
```
var z = j.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a joint |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the joint will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>Joint object (or null if not made).<br>
Return type
<br>Joint |
| --- |

| Example
<br>To start creating a joint in model m:<br>
```
var j = Joint.Create(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a joint. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the joint

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the joint j:<br>
```
j.DetachComment(c);
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
<br>To Edit joint j:<br>
```
j.Edit();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for joint. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for joint j:<br>
```
j.Error("My custom error");
```
 |
| --- |

* * *

| ExtractColour()

Description<br>Extracts the **actual** colour used for joint.<br> By default in PRIMER many entities such as elements get their colour automatically from the part that they are in. PRIMER cycles through 13 default colours based on the label of the entity. In this case the joint [colour](primer-joint-class.md#colour) property will return the value [Colour.PART](primer-colour-class.md#Colour.PART) instead of the actual colour. This method will return the actual colour which is used for drawing the joint. |
| --- |

#### Arguments

No arguments

| Returns
<br>colour value (integer)<br>
Return type
<br>Number |
| --- |

| Example
<br>To return the colour used for drawing joint j:<br>
```
var colour = j.ExtractColour();
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first joint in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first joint in

| Returns
<br>Joint object (or null if there are no joints in the model).<br>
Return type
<br>Joint |
| --- |

| Example
<br>To get the first joint in model m:<br>
```
var j = Joint.First(m);
```
 |
| --- |

* * *

| FirstFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the first free joint label in the model. Also see [Joint.LastFreeLabel()](primer-joint-class.md#Joint::LastFreeLabel), [Joint.NextFreeLabel()](primer-joint-class.md#Joint::NextFreeLabel) and [Model.FirstFreeItemLabel()](primer-model-class.md#Model::FirstFreeItemLabel). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first free joint label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *First free in layer* in editing panels). If omitted the whole model will be used (Equivalent to *First free* in editing panels).

| Returns
<br>Joint label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the first free joint label in model m:<br>
```
var label = Joint.FirstFreeLabel(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the joints in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all joints will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the joints

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the joints with flag f in model m:<br>
```
Joint.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the joint is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the joint

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if joint j has flag f set on it:<br>
```
if (j.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each joint in the model.<br> **Note that ForEach has been designed to make looping over joints as fast as possible and so has some limitations. Firstly, a single temporary Joint object is created and on each function call it is updated with the current joint data. This means that you should not try to store the Joint object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new joints inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all joints are in

* func (function)
 
Function to call for each joint

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the joints in model m:<br>
```
Joint.ForEach(m, test);
function test(j)
{
// j is Joint object
}
```
<br><br>To call function test for all of the joints in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
Joint.ForEach(m, test, data);
function test(j, extra)
{
// j is Joint object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Joint objects or properties for all of the joints in a model in PRIMER. If the optional property argument is not given then an array of Joint objects is returned. If the property argument is given, that property value for each joint is returned in the array instead of a Joint object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get joints from

* property (optional) (string)
 
Name for property to get for all joints in the model

| Returns
<br>Array of Joint objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Joint objects for all of the joints in model m:<br>
```
var a = Joint.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each joint in model m:<br>
```
var a = Joint.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a joint. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the joint j:<br>
```
var comm_array = j.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Joint objects for all of the flagged joints in a model in PRIMER If the optional property argument is not given then an array of Joint objects is returned. If the property argument is given, then that property value for each joint is returned in the array instead of a Joint object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get joints from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the joints that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged joints in the model

| Returns
<br>Array of Joint objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Joint objects for all of the joints in model m flagged with f:<br>
```
var j = Joint.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the joints in model m flagged with f:<br>
```
var a = Joint.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the Joint object for a joint ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the joint in

* number (integer)
 
number of the joint you want the Joint object for

| Returns
<br>Joint object (or null if joint does not exist).<br>
Return type
<br>Joint |
| --- |

| Example
<br>To get the Joint object for joint 100 in model m<br>
```
var j = Joint.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a Joint property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [Joint.ViewParameters()](primer-joint-class.md#Joint::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
joint property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if Joint property j.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (j.GetParameter(j.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if Joint property j.example is a parameter by using the GetParameter method:<br>
```
if (j.ViewParameters().GetParameter(j.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this joint (\*CONSTRAINED\_JOINT). **Note that a carriage return is not added**. See also [Joint.KeywordCards()](primer-joint-class.md#Joint::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for joint j:<br>
```
var key = j.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the joint. **Note that a carriage return is not added**. See also [Joint.Keyword()](primer-joint-class.md#Joint::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for joint j:<br>
```
var cards = j.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last joint in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last joint in

| Returns
<br>Joint object (or null if there are no joints in the model).<br>
Return type
<br>Joint |
| --- |

| Example
<br>To get the last joint in model m:<br>
```
var j = Joint.Last(m);
```
 |
| --- |

* * *

| LastFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the last free joint label in the model. Also see [Joint.FirstFreeLabel()](primer-joint-class.md#Joint::FirstFreeLabel), [Joint.NextFreeLabel()](primer-joint-class.md#Joint::NextFreeLabel) and see [Model.LastFreeItemLabel()](primer-model-class.md#Model::LastFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last free joint label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest free in layer* in editing panels). If omitted the whole model will be used.

| Returns
<br>Joint label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the last free joint label in model m:<br>
```
var label = Joint.LastFreeLabel(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next joint in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Joint object (or null if there are no more joints in the model).<br>
Return type
<br>Joint |
| --- |

| Example
<br>To get the joint in model m after joint j:<br>
```
var j = j.Next();
```
 |
| --- |

* * *

| NextFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the next free (highest+1) joint label in the model. Also see [Joint.FirstFreeLabel()](primer-joint-class.md#Joint::FirstFreeLabel), [Joint.LastFreeLabel()](primer-joint-class.md#Joint::LastFreeLabel) and [Model.NextFreeItemLabel()](primer-model-class.md#Model::NextFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get next free joint label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest+1 in layer* in editing panels). If omitted the whole model will be used (Equivalent to *Highest+1* in editing panels).

| Returns
<br>Joint label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the next free joint label in model m:<br>
```
var label = Joint.NextFreeLabel(m);
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a joint. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only joints from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only joints that are flagged with *limit* can be selected. If omitted, or null, any joints from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[Joint](primer-joint-class.md) object (or null if not picked)<br>
Return type
<br>Joint |
| --- |

| Example
<br>To pick a joint from model m giving the prompt 'Pick joint from screen':<br>
```
var j = Joint.Pick('Pick joint from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous joint in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Joint object (or null if there are no more joints in the model).<br>
Return type
<br>Joint |
| --- |

| Example
<br>To get the joint in model m before joint j:<br>
```
var j = j.Previous();
```
 |
| --- |

* * *

| RenumberAll(Model*[[Model](primer-model-class.md)]*, start*[integer]*) [static]
Description<br>Renumbers all of the joints in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all joints will be renumbered in

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the joints in model m, from 1000000:<br>
```
Joint.RenumberAll(m, 1000000);
```
 |
| --- |

* * *

| RenumberFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*) [static]
Description<br>Renumbers all of the flagged joints in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged joints will be renumbered in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the joints that you want to renumber

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the joints in model m flagged with f, from 1000000:<br>
```
Joint.RenumberFlagged(m, f, 1000000);
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select joints using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting joints

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only joints from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only joints that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any joints can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of joints selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select joints from model m, flagging those selected with flag f, giving the prompt 'Select joints':<br>
```
Joint.Select(f, 'Select joints', m);
```
<br><br>To select joints, flagging those selected with flag f but limiting selection to joints flagged with flag l, giving the prompt 'Select joints':<br>
```
Joint.Select(f, 'Select joints', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the joint. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the joint

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for joint j:<br>
```
j.SetFlag(f);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the joint. The joint will be sketched until you either call [Joint.Unsketch()](primer-joint-class.md#Joint::Unsketch), [Joint.UnsketchAll()](primer-joint-class.md#Joint::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the joint is sketched. If omitted redraw is true. If you want to sketch several joints and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch joint j:<br>
```
j.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged joints in the model. The joints will be sketched until you either call [Joint.Unsketch()](primer-joint-class.md#Joint::Unsketch), [Joint.UnsketchFlagged()](primer-joint-class.md#Joint::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged joints will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the joints that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the joints are sketched. If omitted redraw is true. If you want to sketch flagged joints several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all joints flagged with flag in model m:<br>
```
Joint.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of joints in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing joints should be counted. If false or omitted
referenced but undefined joints will also be included in the total.

| Returns
<br>number of joints<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of joints in model m:<br>
```
var total = Joint.Total(m);
```
 |
| --- |

* * *

| Unblank()

Description<br>Unblanks the joint |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank joint j:<br>
```
j.Unblank();
```
 |
| --- |

* * *

| UnblankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the joints in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all joints will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the joints in model m:<br>
```
Joint.UnblankAll(m);
```
 |
| --- |

* * *

| UnblankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the flagged joints in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the flagged joints will be unblanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the joints that you want to unblank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the joints in model m flagged with f:<br>
```
Joint.UnblankFlagged(m, f);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the joints in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all joints will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the joints

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the joints in model m:<br>
```
Joint.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the joint. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the joint is unsketched. If omitted redraw is true. If you want to unsketch several joints and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch joint j:<br>
```
j.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all joints. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all joints will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the joints are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all joints in model m:<br>
```
Joint.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged joints in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all joints will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the joints that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the joints are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all joints flagged with flag in model m:<br>
```
Joint.UnsketchAll(m, flag);
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
<br>[Joint](primer-joint-class.md) object.<br>
Return type
<br>Joint |
| --- |

| Example
<br>To check if Joint property j.example is a parameter by using the [Joint.GetParameter()](primer-joint-class.md#Joint::GetParameter) method:<br>
```
if (j.ViewParameters().GetParameter(j.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for joint. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for joint j:<br>
```
j.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this joint. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for joint j:<br>
```
var xrefs = j.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the joint data in keyword format. Note that this contains the keyword header and the keyword cards. See also [Joint.Keyword()](primer-joint-class.md#Joint::Keyword) and [Joint.KeywordCards()](primer-joint-class.md#Joint::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for joint j in keyword format<br>
```
var s = j.toString();
```
 |
| --- |

* * *