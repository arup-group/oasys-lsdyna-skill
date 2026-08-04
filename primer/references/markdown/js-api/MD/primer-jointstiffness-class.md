# JointStiffness (Jstf) class

The JointStiffness class gives you access to constrained joint stiffness cards in PRIMER. [More...](primer-jointstiffness-class.md#JointStiffness_details)

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

* [BlankAll](primer-jointstiffness-class.md#JointStiffness::BlankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [BlankFlagged](primer-jointstiffness-class.md#JointStiffness::BlankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Create](primer-jointstiffness-class.md#JointStiffness::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [First](primer-jointstiffness-class.md#JointStiffness::First)(Model*[[Model](primer-model-class.md)]*)
* [FirstFreeLabel](primer-jointstiffness-class.md#JointStiffness::FirstFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [FlagAll](primer-jointstiffness-class.md#JointStiffness::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-jointstiffness-class.md#JointStiffness::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-jointstiffness-class.md#JointStiffness::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-jointstiffness-class.md#JointStiffness::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-jointstiffness-class.md#JointStiffness::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-jointstiffness-class.md#JointStiffness::Last)(Model*[[Model](primer-model-class.md)]*)
* [LastFreeLabel](primer-jointstiffness-class.md#JointStiffness::LastFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [NextFreeLabel](primer-jointstiffness-class.md#JointStiffness::NextFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [Pick](primer-jointstiffness-class.md#JointStiffness::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [RenumberAll](primer-jointstiffness-class.md#JointStiffness::RenumberAll)(Model*[[Model](primer-model-class.md)]*, start*[integer]*)
* [RenumberFlagged](primer-jointstiffness-class.md#JointStiffness::RenumberFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*)
* [Select](primer-jointstiffness-class.md#JointStiffness::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-jointstiffness-class.md#JointStiffness::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-jointstiffness-class.md#JointStiffness::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnblankAll](primer-jointstiffness-class.md#JointStiffness::UnblankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnblankFlagged](primer-jointstiffness-class.md#JointStiffness::UnblankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [UnflagAll](primer-jointstiffness-class.md#JointStiffness::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-jointstiffness-class.md#JointStiffness::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-jointstiffness-class.md#JointStiffness::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-jointstiffness-class.md#JointStiffness::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Blank](primer-jointstiffness-class.md#JointStiffness::Blank)()
* [Blanked](primer-jointstiffness-class.md#JointStiffness::Blanked)()
* [Browse](primer-jointstiffness-class.md#JointStiffness::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-jointstiffness-class.md#JointStiffness::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-jointstiffness-class.md#JointStiffness::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-jointstiffness-class.md#JointStiffness::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-jointstiffness-class.md#JointStiffness::Edit)(modal (optional)*[boolean]*)
* [Error](primer-jointstiffness-class.md#JointStiffness::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-jointstiffness-class.md#JointStiffness::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-jointstiffness-class.md#JointStiffness::GetComments)()
* [GetParameter](primer-jointstiffness-class.md#JointStiffness::GetParameter)(prop*[string]*)
* [Keyword](primer-jointstiffness-class.md#JointStiffness::Keyword)()
* [KeywordCards](primer-jointstiffness-class.md#JointStiffness::KeywordCards)()
* [Next](primer-jointstiffness-class.md#JointStiffness::Next)()
* [Previous](primer-jointstiffness-class.md#JointStiffness::Previous)()
* [SetFlag](primer-jointstiffness-class.md#JointStiffness::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Sketch](primer-jointstiffness-class.md#JointStiffness::Sketch)(redraw (optional)*[boolean]*)
* [Unblank](primer-jointstiffness-class.md#JointStiffness::Unblank)()
* [Unsketch](primer-jointstiffness-class.md#JointStiffness::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-jointstiffness-class.md#JointStiffness::ViewParameters)()
* [Warning](primer-jointstiffness-class.md#JointStiffness::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-jointstiffness-class.md#JointStiffness::Xrefs)()
* [toString](primer-jointstiffness-class.md#JointStiffness::toString)()

## JointStiffness constants

| **Name** | **Description** |
| --- | --- |
| JointStiffness.CYLINDRICAL | JointStiffness is \*CONSTRAINED\_JOINT\_STIFFNESS\_CYLINDRICAL. |
| JointStiffness.FLEXION\_TORSION | JointStiffness is \*CONSTRAINED\_JOINT\_STIFFNESS\_FLEXION-TORSION. |
| JointStiffness.GENERALIZED | JointStiffness is \*CONSTRAINED\_JOINT\_STIFFNESS\_GENERALIZED. |
| JointStiffness.TRANSLATIONAL | JointStiffness is \*CONSTRAINED\_JOINT\_STIFFNESS\_TRANSLATIONAL. |

## JointStiffness properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| cida | integer | [Coordinate System](primer-coordinatesystem-class.md) ID #A. |
| cidb | integer | [Coordinate System](primer-coordinatesystem-class.md) ID #B. |
| dlcidal | integer | [LC:](primer-curve-class.md) Alpha damping moment vs Rotl vel. |
| dlcidbt | integer | [LC:](primer-curve-class.md) Beta damping moment vs Rotl vel. |
| dlcidg | integer | [LC:](primer-curve-class.md) Gamma damping factor vs factor on Alpha damping moment. |
| dlcidp | integer | [LC:](primer-curve-class.md) P damping vs P rel velocity. |
| dlcidph | integer | [LC:](primer-curve-class.md) Phi damping moment vs rotation vel. |
| dlcidps | integer | [LC:](primer-curve-class.md) Psi damping moment vs rotation vel. |
| dlcidr | integer | [LC:](primer-curve-class.md) R damping vs R rel velocity. |
| dlcidt | integer | [LC:](primer-curve-class.md) Theta damping moment vs rotation vel. |
| dlcidx | integer | [LC:](primer-curve-class.md) X damping vs X rel velocity. |
| dlcidy | integer | [LC:](primer-curve-class.md) Y damping vs Y rel velocity. |
| dlcidz | integer | [LC:](primer-curve-class.md) Z damping vs Z rel velocity. |
| esal | real | Stiffness/angle in Alpha direction. |
| esbt | real | Stiffness/angle in Beta direction. |
| esph | real | Stiffness/angle in Phi direction. |
| esps | real | Stiffness/angle in Psi direction. |
| esr | real | Elastic stiffness for R stop and friction. |
| est | real | Stiffness/angle in Theta direction. |
| esx | real | Elastic stiffness for X stop and friction. |
| esy | real | Elastic stiffness for Y stop and friction. |
| esz | real | Elastic stiffness for Z stop and friction. |
| exists (read only) | logical | true if joint stiffness exists, false if referred to but not defined. |
| fd | real | Dynamic friction coefficient. |
| ffr | integer | [LC:](primer-curve-class.md) Lim R force, or yield force vs R translation. |
| ffx | integer | [LC:](primer-curve-class.md) Lim X force, or yield force vs X translation. |
| ffy | integer | [LC:](primer-curve-class.md) Lim Y force, or yield force vs Y translation. |
| ffz | integer | [LC:](primer-curve-class.md) Lim Z force, or yield force vs Z translation. |
| fmal | integer | [LC:](primer-curve-class.md) Alpha Frictional moment vs rotation. |
| fmbt | integer | [LC:](primer-curve-class.md) Beta Frictional moment vs rotation. |
| fmph | integer | [LC:](primer-curve-class.md) Psi frictional moment vs rotation. |
| fmps | integer | [LC:](primer-curve-class.md) Psi frictional moment vs rotation. |
| fmt | integer | [LC:](primer-curve-class.md) Theta frictional moment vs rotation. |
| fs | real | Static friction coefficient. |
| heading | string | This property is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>[JointStiffness](primer-jointstiffness-class.md) heading. Use the [title](primer-jointstiffness-class.md#title) property instead [deprecated] |
| include | integer | The [Include](primer-include-class.md) file number that the joint stiffness is in. |
| jid | integer | [Joint](primer-joint-class.md) for restraint/table uses. |
| jsid | integer | ID of the [JointStiffness](primer-jointstiffness-class.md). Also see the [label](primer-jointstiffness-class.md#label) property which is an alternative name for this |
| label | integer | Label of the [JointStiffness](primer-jointstiffness-class.md) |
| lcidal | integer | [LC:](primer-curve-class.md) Alpha moment vs Rotation. |
| lcidbt | integer | [LC:](primer-curve-class.md) Beta moment vs Rotation. |
| lcidg | integer | [LC:](primer-curve-class.md) Gamma angle vs factor on Alpha blending. |
| lcidph | integer | [LC:](primer-curve-class.md) Phi moment vs rotation. |
| lcidps | integer | [LC:](primer-curve-class.md) Psi moment vs rotation. |
| lcidr | integer | [LC:](primer-curve-class.md) R force vs R rel displ. |
| lcidt | integer | [LC:](primer-curve-class.md) Theta moment vs rotation. |
| lcidx | integer | [LC:](primer-curve-class.md) X force vs X rel displ. |
| lcidy | integer | [LC:](primer-curve-class.md) Y force vs Y rel displ. |
| lcidz | integer | [LC:](primer-curve-class.md) Z force vs Z rel displ. |
| model (read only) | integer | The [Model](primer-model-class.md) number that the joint stiffness is in. |
| nsabt | real | Stop angle for -ve Beta rotation. |
| nsaph | real | Stop angle for -ve Phi rotation. |
| nsaps | real | Stop angle for -ve Psi rotation. |
| nsat | real | Stop angle for -ve Theta rotation. |
| nsdx | real | Limiting -ve X translation. |
| nsdy | real | Limiting -ve Y translation. |
| nsdz | real | Limiting -ve Z translation. |
| option | constant | JointStiffness type. Can be [JointStiffness.GENERALIZED](primer-jointstiffness-class.md#JointStiffness.GENERALIZED), [JointStiffness.FLEXION_TORSION](primer-jointstiffness-class.md#JointStiffness.FLEXION_TORSION), [JointStiffness.TRANSLATIONAL](primer-jointstiffness-class.md#JointStiffness.TRANSLATIONAL) or [JointStiffness.CYLINDRICAL](primer-jointstiffness-class.md#JointStiffness.CYLINDRICAL) |
| pida | integer | [Part](primer-part-class.md) ID #A. |
| pidb | integer | [Part](primer-part-class.md) ID #B. |
| psabt | real | Stop angle for +ve Beta rotation. |
| psaph | real | Stop angle for +ve Phi rotation. |
| psaps | real | Stop angle for +ve Psi rotation. |
| psat | real | Stop angle for +ve Theta rotation. |
| psdr | real | Limiting R translation. |
| psdx | real | Limiting +ve X translation. |
| psdy | real | Limiting +ve Y translation. |
| psdz | real | Limiting +ve Z translation. |
| rad1 | real | Radius of pin. |
| rad2 | real | Radius of hole. |
| rps | real | Relative penalty stiffness. |
| saal | real | Stop angle for Alpha rotation. |
| title | string | [JointStiffness](primer-jointstiffness-class.md) title |

| Detailed Description<br>The JointStiffness class allows you to create, modify, edit and manipulate joint stiffness cards.<br>See the documentation below for more details.<br>
<br>For convenience "Jstf" can also be used as the class name instead of "JointStiffness". |
| --- |

| Constructor
new JointStiffness(Model*[[Model](primer-model-class.md)]*, options *[object]*)

Description<br>Create a new [JointStiffness](primer-jointstiffness-class.md) object. The fields on card 1 of the joint stiffness can be set in the constructor using the option argument. To set any other values use properties. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the joint stiffness will be created in

* options  (object)

Options for creating the joint stiffness 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| cida (optional) | integer | [Coordinate System](primer-coordinatesystem-class.md) ID #A |
| cidb (optional) | integer | [Coordinate System](primer-coordinatesystem-class.md) ID #B |
| id | integer | Joint stiffness ID |
| jid (optional) | integer | [Joint](primer-joint-class.md) for restraint/table uses |
| option | constant | Constrained joint stiffness option. Can be [JointStiffness.GENERALIZED](primer-jointstiffness-class.md#JointStiffness.GENERALIZED), [JointStiffness.FLEXION_TORSION](primer-jointstiffness-class.md#JointStiffness.FLEXION_TORSION), [JointStiffness.TRANSLATIONAL](primer-jointstiffness-class.md#JointStiffness.TRANSLATIONAL) or [JointStiffness.CYLINDRICAL](primer-jointstiffness-class.md#JointStiffness.CYLINDRICAL) |
| pida (optional) | integer | [Part](primer-part-class.md) ID #A |
| pidb (optional) | integer | [Part](primer-part-class.md) ID #B |
| rps (optional) | real | Relative penalty stiffness (for [JointStiffness.TRANSLATIONAL](primer-jointstiffness-class.md#JointStiffness.TRANSLATIONAL) or [JointStiffness.CYLINDRICAL](primer-jointstiffness-class.md#JointStiffness.CYLINDRICAL)) |
| title (optional) | string | Joint stiffness title |

| Returns
<br>[JointStiffness](primer-jointstiffness-class.md) object<br>
Return type
<br>JointStiffness |
| --- |

| Example
<br>To create a new joint stiffness 500 with title "test" of type GENERALIZED in model m with rigid body parts 50 and 150 and lcidph 10<br>
```
var j = new JointStiffness(m, { type: JointStiffness.GENERALIZED, id: 500, pida: 50, pidb: 50, title: "test" } );
j.lcidph = 10;
```
 |
| --- |

| new JointStiffness(Model*[[Model](primer-model-class.md)]*, option*[constant]*, label*[integer]*, pida*[integer]*, pidb*[integer]*, cida*[integer]*, cidb*[integer]*, jid*[integer]*, lcidph*[integer]*, lcidt*[integer]*, lcidps*[integer]*, dlcidph*[integer]*, dlcidt*[integer]*, dlcidps*[integer]*, esph*[real]*, fmph*[integer]*, est*[real]*, fmt*[integer]*, esps*[real]*, fmps*[integer]*, nsaph*[real]*, psaph*[real]*, nsat*[real]*, psat*[real]*, nsaps*[real]*, psaps*[real]*) [deprecated]
<br>This function is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>
Description<br>Create a new [JointStiffness](primer-jointstiffness-class.md) object for \*CONSTRAINED\_JOINT\_STIFFNESS\_GENERALIZED. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that jstf will be created in

* option (constant)
 
Must be JointStiffness.GENERALIZED.

* label (integer)
 
[JointStiffness](primer-jointstiffness-class.md) ID of the JSTF. Also see the [label](primer-jointstiffness-class.md) argument which is an alternative name for this.

* pida (integer)
 
[Part](primer-part-class.md) ID #A.

* pidb (integer)
 
[Part](primer-part-class.md) ID #B.

* cida (integer)
 
[Coordinate System](primer-coordinatesystem-class.md) ID #A.

* cidb (integer)
 
[Coordinate System](primer-coordinatesystem-class.md) ID #B.

* jid (integer)
 
[Joint](primer-joint-class.md) for restraint/table uses.

* lcidph (integer)
 
[LC:](primer-curve-class.md) Phi moment vs rotation.

* lcidt (integer)
 
[LC:](primer-curve-class.md) Theta moment vs rotation.

* lcidps (integer)
 
[LC:](primer-curve-class.md) Psi moment vs rotation.

* dlcidph (integer)
 
[LC:](primer-curve-class.md) Phi damping moment vs rotation vel.

* dlcidt (integer)
 
[LC:](primer-curve-class.md) Theta damping moment vs rotation vel.

* dlcidps (integer)
 
[LC:](primer-curve-class.md) Psi damping moment vs rotation vel.

* esph (real)
 
Stiffness/angle in Phi direction.

* fmph (integer)
 
[LC:](primer-curve-class.md) Psi frictional moment vs rotation.

* est (real)
 
Stiffness/angle in Theta direction.

* fmt (integer)
 
[LC:](primer-curve-class.md) Theta frictional moment vs rotation.

* esps (real)
 
Stiffness/angle in Psi direction.

* fmps (integer)
 
[LC:](primer-curve-class.md) Psi frictional moment vs rotation.

* nsaph (real)
 
Stop angle for -ve Phi rotation.

* psaph (real)
 
Stop angle for +ve Phi rotation.

* nsat (real)
 
Stop angle for -ve Theta rotation.

* psat (real)
 
Stop angle for +ve Theta rotation.

* nsaps (real)
 
Stop angle for -ve Psi rotation.

* psaps (real)
 
Stop angle for +ve Psi rotation.

| Returns
<br>[JointStiffness](primer-jointstiffness-class.md) object<br>
Return type
<br>JointStiffness |
| --- |

| Example
<br>To create a new jstf 1000 of type GENERALIZED in model m with the following specifiction: pida, pidb, cida, cidb, jid are 91, 92, 81, 82, 71 respectively; lcidph, lcidt, lcidps, dlcidph, dlcidt, dlcidps are 1, 2, 3, 4, 5, 6 respectively; esph, fmph, est, fmt, esps, fmps are 11.0, 11, 12.0, 12, 13.0, 13 respectively; nsaph, psaph, nsat, psat, nsaps, psaps are -20, 20, -30, 30, -40, 40 respectively.<br>
```
var j = new JointStiffness(m, JointStiffness.GENERALIZED, 1000, 91, 92, 81, 82, 71, 1, 2, 3, 4, 5, 6, 11.0, 11, 12.0, 12, 13.0, 13, -20, 20, -30, 30, -40, 40);
```
 |
| --- |

| new JointStiffness(Model*[[Model](primer-model-class.md)]*, option*[constant]*, label*[integer]*, pida*[integer]*, pidb*[integer]*, cida*[integer]*, cidb*[integer]*, jid*[integer]*, lcidal*[integer]*, lcidg*[integer]*, lcidbt*[integer]*, dlcidal*[integer]*, dlcidg*[integer]*, dlcidbt*[integer]*, esal*[real]*, fmal*[integer]*, esbt*[real]*, fmbt*[integer]*, saal*[real]*, nsabt*[real]*, psabt*[real]*) [deprecated]
<br>This function is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>
Description<br>Create a new [JointStiffness](primer-jointstiffness-class.md) object for \*CONSTRAINED\_JOINT\_STIFFNESS\_FLEXION-TORSION. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that jstf will be created in

* option (constant)
 
Must be JointStiffness.FLEXION\_TORSION.

* label (integer)
 
[JointStiffness](primer-jointstiffness-class.md) ID of the JSTF. Also see the [label](primer-jointstiffness-class.md) argument which is an alternative name for this.

* pida (integer)
 
[Part](primer-part-class.md) ID #A.

* pidb (integer)
 
[Part](primer-part-class.md) ID #B.

* cida (integer)
 
[Coordinate System](primer-coordinatesystem-class.md) ID #A.

* cidb (integer)
 
[Coordinate System](primer-coordinatesystem-class.md) ID #B.

* jid (integer)
 
[Joint](primer-joint-class.md) for restraint/table uses.

* lcidal (integer)
 
[LC:](primer-curve-class.md) Alpha moment vs Rotation.

* lcidg (integer)
 
[LC:](primer-curve-class.md) Gamma angle vs factor on Alpha blending.

* lcidbt (integer)
 
[LC:](primer-curve-class.md) Beta moment vs Rotation.

* dlcidal (integer)
 
[LC:](primer-curve-class.md) Alpha damping moment vs Rotl vel.

* dlcidg (integer)
 
[LC:](primer-curve-class.md) Gamma damping factor vs factor on Alpha damping moment.

* dlcidbt (integer)
 
[LC:](primer-curve-class.md) Beta damping moment vs Rotl vel.

* esal (real)
 
Stiffness/angle in Alpha direction.

* fmal (integer)
 
[LC:](primer-curve-class.md) Alpha Frictional moment vs rotation.

* esbt (real)
 
Stiffness/angle in Beta direction.

* fmbt (integer)
 
[LC:](primer-curve-class.md) Beta Frictional moment vs rotation.

* saal (real)
 
Stop angle for Alpha rotation.

* nsabt (real)
 
Stop angle for -ve Beta rotation.

* psabt (real)
 
Stop angle for +ve Beta rotation.

| Returns
<br>[JointStiffness](primer-jointstiffness-class.md) object<br>
Return type
<br>JointStiffness |
| --- |

| Example
<br>To create a new jstf 2000 of type GENERALIZED in model m with the following specifiction: pida, pidb, cida, cidb, jid are 81, 82, 71, 72, 61 respectively; lcidal, lcidg, lcidbt, dlcidal, dlcidg, dlcidbt are 1, 2, 3, 4, 5, 6 respectively; esal, fmal, esbt, fmbt are 11.5, 12, 12.5, 13 respectively; saal, nsabt, psabt are 22.5, 25.0, 27.5 respectively.<br>
```
var j = new JointStiffness(m, JointStiffness.FLEXION_TORSION, 2000, 81, 82, 71, 72, 61, 1, 2, 3, 4, 5, 6, 11.5, 12, 12.5, 13, 22.5, 25.0, 27.5);
```
 |
| --- |

| new JointStiffness(Model*[[Model](primer-model-class.md)]*, option*[constant]*, label*[integer]*, pida*[integer]*, pidb*[integer]*, cida*[integer]*, cidb*[integer]*, jid*[integer]*, rps*[real]*, lcidx*[integer]*, lcidy*[integer]*, lcidz*[integer]*, dlcidx*[integer]*, dlcidy*[integer]*, dlcidz*[integer]*, esx*[real]*, ffx*[integer]*, esy*[real]*, ffy*[integer]*, esz*[real]*, ffz*[integer]*, nsdx*[real]*, psdx*[real]*, nsdy*[real]*, psdy*[real]*, nsdz*[real]*, psdz*[real]*, fs*[real]*, fd*[real]*) [deprecated]
<br>This function is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>
Description<br>Create a new [JointStiffness](primer-jointstiffness-class.md) object for \*CONSTRAINED\_JOINT\_STIFFNESS\_TRANSLATIONAL. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that jstf will be created in

* option (constant)
 
Must be JointStiffness.TRANSLATIONAL.

* label (integer)
 
[JointStiffness](primer-jointstiffness-class.md) ID of the JSTF. Also see the [label](primer-jointstiffness-class.md) argument which is an alternative name for this.

* pida (integer)
 
[Part](primer-part-class.md) ID #A.

* pidb (integer)
 
[Part](primer-part-class.md) ID #B.

* cida (integer)
 
[Coordinate System](primer-coordinatesystem-class.md) ID #A.

* cidb (integer)
 
[Coordinate System](primer-coordinatesystem-class.md) ID #B.

* jid (integer)
 
[Joint](primer-joint-class.md) for restraint/table uses.

* rps (real)
 
Relative penalty stiffness.

* lcidx (integer)
 
[LC:](primer-curve-class.md) X force vs X rel displ.

* lcidy (integer)
 
[LC:](primer-curve-class.md) Y force vs Y rel displ.

* lcidz (integer)
 
[LC:](primer-curve-class.md) Z force vs Z rel displ.

* dlcidx (integer)
 
[LC:](primer-curve-class.md) X damping vs X rel velocity.

* dlcidy (integer)
 
[LC:](primer-curve-class.md) Y damping vs Y rel velocity.

* dlcidz (integer)
 
[LC:](primer-curve-class.md) Z damping vs Z rel velocity.

* esx (real)
 
Elastic stiffness for X stop and friction.

* ffx (integer)
 
[LC:](primer-curve-class.md) Lim X force, or yield force vs X translation.

* esy (real)
 
Elastic stiffness for Y stop and friction.

* ffy (integer)
 
[LC:](primer-curve-class.md) Lim Y force, or yield force vs Y translation.

* esz (real)
 
Elastic stiffness for Z stop and friction.

* ffz (integer)
 
[LC:](primer-curve-class.md) Lim Z force, or yield force vs Z translation.

* nsdx (real)
 
Limiting -ve X translation.

* psdx (real)
 
Limiting +ve X translation.

* nsdy (real)
 
Limiting -ve Y translation.

* psdy (real)
 
Limiting +ve Y translation.

* nsdz (real)
 
Limiting -ve Z translation.

* psdz (real)
 
Limiting +ve Z translation.

* fs (real)
 
Static friction coefficient.

* fd (real)
 
Dynamic friction coefficient.

| Returns
<br>[JointStiffness](primer-jointstiffness-class.md) object<br>
Return type
<br>JointStiffness |
| --- |

| Example
<br>To create a new jstf 3000 of type TRANSLATIONAL in model m with the following specifiction: pida, pidb, cida, cidb, jid, rps are 71, 72, 61, 62, 51, 2 respectively; lcidx, lcidy, lcidz, dlcidx, dlcidy, dlcidz are 1, 2, 3, 4, 5, 6 respectively; esx, ffx, esy, ffy, esz, ffz are are 12.5, 13, 13.5, 14, 14.5, 15 respectively; nsdx, psdx, nsdy, psdy, nsdz, psdz, fs, fd are -30, 30, -40, 40, -50, 50, 0.2, 0.1 respectively.<br>
```
var j = new JointStiffness(m, JointStiffness.TRANSLATIONAL, 3000, 71, 72, 61, 62, 51, 2, 1, 2, 3, 4, 5, 6, 12.5, 13, 13.5, 14, 14.5, 15, -30, 30, -40, 40, -50, 50, 0.2, 0.1);
```
 |
| --- |

| new JointStiffness(Model*[[Model](primer-model-class.md)]*, option*[constant]*, label*[integer]*, pida*[integer]*, pidb*[integer]*, cida*[integer]*, cidb*[integer]*, jid*[integer]*, rps*[real]*, lcidr*[integer]*, lcidz*[integer]*, dlcidr*[integer]*, dlcidp*[integer]*, dlcidz*[integer]*, lcidt*[integer]*, dlcidt*[integer]*, esr*[real]*, ffr*[integer]*, esz*[real]*, ffz*[integer]*, rad1*[real]*, rad2*[real]*, psdr*[real]*, nsdz*[real]*, psdz*[real]*, fs*[real]*, fd*[real]*) [deprecated]
<br>This function is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>
Description<br>Create a new [JointStiffness](primer-jointstiffness-class.md) object for \*CONSTRAINED\_JOINT\_STIFFNESS\_CYLINDRICAL. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that jstf will be created in

* option (constant)
 
Must be JointStiffness.CYLINDRICAL.

* label (integer)
 
[JointStiffness](primer-jointstiffness-class.md) ID of the JSTF. Also see the [label](primer-jointstiffness-class.md) argument which is an alternative name for this.

* pida (integer)
 
[Part](primer-part-class.md) ID #A.

* pidb (integer)
 
[Part](primer-part-class.md) ID #B.

* cida (integer)
 
[Coordinate System](primer-coordinatesystem-class.md) ID #A.

* cidb (integer)
 
[Coordinate System](primer-coordinatesystem-class.md) ID #B.

* jid (integer)
 
[Joint](primer-joint-class.md) for restraint/table uses.

* rps (real)
 
Relative penalty stiffness.

* lcidr (integer)
 
[LC:](primer-curve-class.md) R force vs R rel displ.

* lcidz (integer)
 
[LC:](primer-curve-class.md) Z force vs Z rel displ.

* dlcidr (integer)
 
[LC:](primer-curve-class.md) R damping vs R rel velocity.

* dlcidp (integer)
 
[LC:](primer-curve-class.md) P damping vs P rel velocity.

* dlcidz (integer)
 
[LC:](primer-curve-class.md) Z damping vs Z rel velocity.

* lcidt (integer)
 
[LC:](primer-curve-class.md) Theta moment vs rotation.

* dlcidt (integer)
 
[LC:](primer-curve-class.md) Theta damping moment vs rotation vel.

* esr (real)
 
Elastic stiffness for R stop and friction.

* ffr (integer)
 
[LC:](primer-curve-class.md) Lim R force, or yield force vs R translation.

* esz (real)
 
Elastic stiffness for Z stop and friction.

* ffz (integer)
 
[LC:](primer-curve-class.md) Lim Z force, or yield force vs Z translation.

* rad1 (real)
 
Radius of pin.

* rad2 (real)
 
Radius of hole.

* psdr (real)
 
Limiting R translation.

* nsdz (real)
 
Limiting -ve Z translation.

* psdz (real)
 
Limiting +ve Z translation.

* fs (real)
 
Static friction coefficient.

* fd (real)
 
Dynamic friction coefficient.

| Returns
<br>[JointStiffness](primer-jointstiffness-class.md) object<br>
Return type
<br>JointStiffness |
| --- |

| Example
<br>To create a new jstf 4000 of type CYLINDRICAL in model m with the following specifiction: pida, pidb, cida, cidb, jid, rps are 61, 62, 51, 52, 41, 2 respectively; lcidr, lcidz, dlcidr, dlcidp, dlcidz, lcidt, dlcidt are 1, 2, 3, 4, 5, 6, 7 respectively; esr, ffr, esz, ffz, rad1, rad2 are are 12.5, 13, 13.5, 14, 14.5, 15.5 respectively; psdr, nsdz, psdz, fs, fd are 30, -40, 50, 0.2, 0.1 respectively.<br>
```
var j = new JointStiffness(m, JointStiffness.CYLINDRICAL, 4000, 61, 62, 51, 52, 41, 2, 1, 2, 3, 4, 5, 6, 7, 12.5, 13, 13.5, 14, 14.5, 15.5, 30, -40, 50, 0.2, 0.1);
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a joint stiffness. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the joint stiffness

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the joint stiffness js:<br>
```
js.AssociateComment(c);
```
 |
| --- |

* * *

| Blank()

Description<br>Blanks the joint stiffness |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To blank joint stiffness js:<br>
```
js.Blank();
```
 |
| --- |

* * *

| BlankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the joint stiffnesses in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all joint stiffnesses will be blanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the joint stiffnesses in model m:<br>
```
JointStiffness.BlankAll(m);
```
 |
| --- |

* * *

| BlankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the flagged joint stiffnesses in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged joint stiffnesses will be blanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the joint stiffnesses that you want to blank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the joint stiffnesses in model m flagged with f:<br>
```
JointStiffness.BlankFlagged(m, f);
```
 |
| --- |

* * *

| Blanked()

Description<br>Checks if the joint stiffness is blanked or not. |
| --- |

#### Arguments

No arguments

| Returns
<br>true if blanked, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if joint stiffness js is blanked:<br>
```
if (js.Blanked() ) do_something...
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
<br>To Browse joint stiffness js:<br>
```
js.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the joint stiffness. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the joint stiffness

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for joint stiffness js:<br>
```
js.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the joint stiffness. The target include of the copied joint stiffness can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>JointStiffness object<br>
Return type
<br>JointStiffness |
| --- |

| Example
<br>To copy joint stiffness js into joint stiffness z:<br>
```
var z = js.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a joint stiffness |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the joint stiffness will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>JointStiffness object (or null if not made).<br>
Return type
<br>JointStiffness |
| --- |

| Example
<br>To start creating a joint stiffness in model m:<br>
```
var js = JointStiffness.Create(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a joint stiffness. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the joint stiffness

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the joint stiffness js:<br>
```
js.DetachComment(c);
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
<br>To Edit joint stiffness js:<br>
```
js.Edit();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for joint stiffness. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for joint stiffness js:<br>
```
js.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first joint stiffness in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first joint stiffness in

| Returns
<br>JointStiffness object (or null if there are no joint stiffnesses in the model).<br>
Return type
<br>JointStiffness |
| --- |

| Example
<br>To get the first joint stiffness in model m:<br>
```
var js = JointStiffness.First(m);
```
 |
| --- |

* * *

| FirstFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the first free joint stiffness label in the model. Also see [JointStiffness.LastFreeLabel()](primer-jointstiffness-class.md#JointStiffness::LastFreeLabel), [JointStiffness.NextFreeLabel()](primer-jointstiffness-class.md#JointStiffness::NextFreeLabel) and [Model.FirstFreeItemLabel()](primer-model-class.md#Model::FirstFreeItemLabel). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first free joint stiffness label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *First free in layer* in editing panels). If omitted the whole model will be used (Equivalent to *First free* in editing panels).

| Returns
<br>JointStiffness label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the first free joint stiffness label in model m:<br>
```
var label = JointStiffness.FirstFreeLabel(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the joint stiffnesses in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all joint stiffnesses will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the joint stiffnesses

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the joint stiffnesses with flag f in model m:<br>
```
JointStiffness.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the joint stiffness is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the joint stiffness

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if joint stiffness js has flag f set on it:<br>
```
if (js.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each joint stiffness in the model.<br> **Note that ForEach has been designed to make looping over joint stiffnesses as fast as possible and so has some limitations. Firstly, a single temporary JointStiffness object is created and on each function call it is updated with the current joint stiffness data. This means that you should not try to store the JointStiffness object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new joint stiffnesses inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all joint stiffnesses are in

* func (function)
 
Function to call for each joint stiffness

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the joint stiffnesses in model m:<br>
```
JointStiffness.ForEach(m, test);
function test(js)
{
// js is JointStiffness object
}
```
<br><br>To call function test for all of the joint stiffnesses in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
JointStiffness.ForEach(m, test, data);
function test(js, extra)
{
// js is JointStiffness object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of JointStiffness objects or properties for all of the joint stiffnesses in a model in PRIMER. If the optional property argument is not given then an array of JointStiffness objects is returned. If the property argument is given, that property value for each joint stiffness is returned in the array instead of a JointStiffness object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get joint stiffnesses from

* property (optional) (string)
 
Name for property to get for all joint stiffnesses in the model

| Returns
<br>Array of JointStiffness objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of JointStiffness objects for all of the joint stiffnesses in model m:<br>
```
var a = JointStiffness.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each joint stiffness in model m:<br>
```
var a = JointStiffness.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a joint stiffness. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the joint stiffness js:<br>
```
var comm_array = js.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of JointStiffness objects for all of the flagged joint stiffnesses in a model in PRIMER If the optional property argument is not given then an array of JointStiffness objects is returned. If the property argument is given, then that property value for each joint stiffness is returned in the array instead of a JointStiffness object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get joint stiffnesses from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the joint stiffnesses that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged joint stiffnesses in the model

| Returns
<br>Array of JointStiffness objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of JointStiffness objects for all of the joint stiffnesses in model m flagged with f:<br>
```
var js = JointStiffness.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the joint stiffnesses in model m flagged with f:<br>
```
var a = JointStiffness.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the JointStiffness object for a joint stiffness ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the joint stiffness in

* number (integer)
 
number of the joint stiffness you want the JointStiffness object for

| Returns
<br>JointStiffness object (or null if joint stiffness does not exist).<br>
Return type
<br>JointStiffness |
| --- |

| Example
<br>To get the JointStiffness object for joint stiffness 100 in model m<br>
```
var js = JointStiffness.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a JointStiffness property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [JointStiffness.ViewParameters()](primer-jointstiffness-class.md#JointStiffness::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
joint stiffness property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if JointStiffness property js.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (js.GetParameter(js.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if JointStiffness property js.example is a parameter by using the GetParameter method:<br>
```
if (js.ViewParameters().GetParameter(js.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this jstf (\*CONSTRAINED\_JOINT\_STIFFNESS). **Note that a carriage return is not added**. See also [JointStiffness.KeywordCards()](primer-jointstiffness-class.md#JointStiffness::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for jstf n:<br>
```
var key = n.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the jstf. **Note that a carriage return is not added**. See also [JointStiffness.Keyword()](primer-jointstiffness-class.md#JointStiffness::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for jstf n:<br>
```
var cards = n.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last joint stiffness in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last joint stiffness in

| Returns
<br>JointStiffness object (or null if there are no joint stiffnesses in the model).<br>
Return type
<br>JointStiffness |
| --- |

| Example
<br>To get the last joint stiffness in model m:<br>
```
var js = JointStiffness.Last(m);
```
 |
| --- |

* * *

| LastFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the last free joint stiffness label in the model. Also see [JointStiffness.FirstFreeLabel()](primer-jointstiffness-class.md#JointStiffness::FirstFreeLabel), [JointStiffness.NextFreeLabel()](primer-jointstiffness-class.md#JointStiffness::NextFreeLabel) and see [Model.LastFreeItemLabel()](primer-model-class.md#Model::LastFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last free joint stiffness label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest free in layer* in editing panels). If omitted the whole model will be used.

| Returns
<br>JointStiffness label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the last free joint stiffness label in model m:<br>
```
var label = JointStiffness.LastFreeLabel(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next joint stiffness in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>JointStiffness object (or null if there are no more joint stiffnesses in the model).<br>
Return type
<br>JointStiffness |
| --- |

| Example
<br>To get the joint stiffness in model m after joint stiffness js:<br>
```
var js = js.Next();
```
 |
| --- |

* * *

| NextFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the next free (highest+1) joint stiffness label in the model. Also see [JointStiffness.FirstFreeLabel()](primer-jointstiffness-class.md#JointStiffness::FirstFreeLabel), [JointStiffness.LastFreeLabel()](primer-jointstiffness-class.md#JointStiffness::LastFreeLabel) and [Model.NextFreeItemLabel()](primer-model-class.md#Model::NextFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get next free joint stiffness label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest+1 in layer* in editing panels). If omitted the whole model will be used (Equivalent to *Highest+1* in editing panels).

| Returns
<br>JointStiffness label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the next free joint stiffness label in model m:<br>
```
var label = JointStiffness.NextFreeLabel(m);
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a joint stiffness. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only joint stiffnesses from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only joint stiffnesses that are flagged with *limit* can be selected. If omitted, or null, any joint stiffnesses from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[JointStiffness](primer-jointstiffness-class.md) object (or null if not picked)<br>
Return type
<br>JointStiffness |
| --- |

| Example
<br>To pick a joint stiffness from model m giving the prompt 'Pick joint stiffness from screen':<br>
```
var js = JointStiffness.Pick('Pick joint stiffness from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous joint stiffness in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>JointStiffness object (or null if there are no more joint stiffnesses in the model).<br>
Return type
<br>JointStiffness |
| --- |

| Example
<br>To get the joint stiffness in model m before joint stiffness js:<br>
```
var js = js.Previous();
```
 |
| --- |

* * *

| RenumberAll(Model*[[Model](primer-model-class.md)]*, start*[integer]*) [static]
Description<br>Renumbers all of the joint stiffnesses in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all joint stiffnesses will be renumbered in

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the joint stiffnesses in model m, from 1000000:<br>
```
JointStiffness.RenumberAll(m, 1000000);
```
 |
| --- |

* * *

| RenumberFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*) [static]
Description<br>Renumbers all of the flagged joint stiffnesses in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged joint stiffnesses will be renumbered in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the joint stiffnesses that you want to renumber

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the joint stiffnesses in model m flagged with f, from 1000000:<br>
```
JointStiffness.RenumberFlagged(m, f, 1000000);
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select joint stiffnesses using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting joint stiffnesses

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only joint stiffnesses from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only joint stiffnesses that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any joint stiffnesses can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of joint stiffnesses selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select joint stiffnesses from model m, flagging those selected with flag f, giving the prompt 'Select joint stiffnesses':<br>
```
JointStiffness.Select(f, 'Select joint stiffnesses', m);
```
<br><br>To select joint stiffnesses, flagging those selected with flag f but limiting selection to joint stiffnesses flagged with flag l, giving the prompt 'Select joint stiffnesses':<br>
```
JointStiffness.Select(f, 'Select joint stiffnesses', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the joint stiffness. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the joint stiffness

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for joint stiffness js:<br>
```
js.SetFlag(f);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the joint stiffness. The joint stiffness will be sketched until you either call [JointStiffness.Unsketch()](primer-jointstiffness-class.md#JointStiffness::Unsketch), [JointStiffness.UnsketchAll()](primer-jointstiffness-class.md#JointStiffness::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the joint stiffness is sketched. If omitted redraw is true. If you want to sketch several joint stiffnesses and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch joint stiffness js:<br>
```
js.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged joint stiffnesses in the model. The joint stiffnesses will be sketched until you either call [JointStiffness.Unsketch()](primer-jointstiffness-class.md#JointStiffness::Unsketch), [JointStiffness.UnsketchFlagged()](primer-jointstiffness-class.md#JointStiffness::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged joint stiffnesses will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the joint stiffnesses that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the joint stiffnesses are sketched. If omitted redraw is true. If you want to sketch flagged joint stiffnesses several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all joint stiffnesses flagged with flag in model m:<br>
```
JointStiffness.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of joint stiffnesses in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing joint stiffnesses should be counted. If false or omitted
referenced but undefined joint stiffnesses will also be included in the total.

| Returns
<br>number of joint stiffnesses<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of joint stiffnesses in model m:<br>
```
var total = JointStiffness.Total(m);
```
 |
| --- |

* * *

| Unblank()

Description<br>Unblanks the joint stiffness |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank joint stiffness js:<br>
```
js.Unblank();
```
 |
| --- |

* * *

| UnblankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the joint stiffnesses in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all joint stiffnesses will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the joint stiffnesses in model m:<br>
```
JointStiffness.UnblankAll(m);
```
 |
| --- |

* * *

| UnblankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the flagged joint stiffnesses in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the flagged joint stiffnesses will be unblanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the joint stiffnesses that you want to unblank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the joint stiffnesses in model m flagged with f:<br>
```
JointStiffness.UnblankFlagged(m, f);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the joint stiffnesses in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all joint stiffnesses will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the joint stiffnesses

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the joint stiffnesses in model m:<br>
```
JointStiffness.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the joint stiffness. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the joint stiffness is unsketched. If omitted redraw is true. If you want to unsketch several joint stiffnesses and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch joint stiffness js:<br>
```
js.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all joint stiffnesses. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all joint stiffnesses will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the joint stiffnesses are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all joint stiffnesses in model m:<br>
```
JointStiffness.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged joint stiffnesses in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all joint stiffnesses will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the joint stiffnesses that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the joint stiffnesses are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all joint stiffnesses flagged with flag in model m:<br>
```
JointStiffness.UnsketchAll(m, flag);
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
<br>[JointStiffness](primer-jointstiffness-class.md) object.<br>
Return type
<br>JointStiffness |
| --- |

| Example
<br>To check if JointStiffness property js.example is a parameter by using the [JointStiffness.GetParameter()](primer-jointstiffness-class.md#JointStiffness::GetParameter) method:<br>
```
if (js.ViewParameters().GetParameter(js.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for joint stiffness. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for joint stiffness js:<br>
```
js.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this joint stiffness. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for joint stiffness js:<br>
```
var xrefs = js.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the jstf data in keyword format. Note that this contains the keyword header and the keyword cards. See also [JointStiffness.Keyword()](primer-jointstiffness-class.md#JointStiffness::Keyword) and [JointStiffness.KeywordCards()](primer-jointstiffness-class.md#JointStiffness::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for jstf n in keyword format<br>
```
var s = n.toString();
```
 |
| --- |

* * *