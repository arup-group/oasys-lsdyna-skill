# Contact class

The Contact class gives you access to define contact cards in PRIMER. [More...](primer-contact-class.md#Contact_details)

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

* [BlankAll](primer-contact-class.md#Contact::BlankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [BlankFlagged](primer-contact-class.md#Contact::BlankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Create](primer-contact-class.md#Contact::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [First](primer-contact-class.md#Contact::First)(Model*[[Model](primer-model-class.md)]*)
* [FirstFreeLabel](primer-contact-class.md#Contact::FirstFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [FlagAll](primer-contact-class.md#Contact::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-contact-class.md#Contact::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-contact-class.md#Contact::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-contact-class.md#Contact::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-contact-class.md#Contact::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-contact-class.md#Contact::Last)(Model*[[Model](primer-model-class.md)]*)
* [LastFreeLabel](primer-contact-class.md#Contact::LastFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [NextFreeLabel](primer-contact-class.md#Contact::NextFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [Pick](primer-contact-class.md#Contact::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [RenumberAll](primer-contact-class.md#Contact::RenumberAll)(Model*[[Model](primer-model-class.md)]*, start*[integer]*)
* [RenumberFlagged](primer-contact-class.md#Contact::RenumberFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*)
* [Select](primer-contact-class.md#Contact::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-contact-class.md#Contact::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-contact-class.md#Contact::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnblankAll](primer-contact-class.md#Contact::UnblankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnblankFlagged](primer-contact-class.md#Contact::UnblankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [UnflagAll](primer-contact-class.md#Contact::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-contact-class.md#Contact::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-contact-class.md#Contact::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-contact-class.md#Contact::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Blank](primer-contact-class.md#Contact::Blank)()
* [Blanked](primer-contact-class.md#Contact::Blanked)()
* [Browse](primer-contact-class.md#Contact::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-contact-class.md#Contact::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Constrained](primer-contact-class.md#Contact::Constrained)(connection (optional)*[boolean]*)
* [Copy](primer-contact-class.md#Contact::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-contact-class.md#Contact::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-contact-class.md#Contact::Edit)(modal (optional)*[boolean]*)
* [Error](primer-contact-class.md#Contact::Error)(message*[string]*, details (optional)*[string]*)
* [ExtractColour](primer-contact-class.md#Contact::ExtractColour)()
* [FindInteractions](primer-contact-class.md#Contact::FindInteractions_deprecated)() [deprecated]
* [Flagged](primer-contact-class.md#Contact::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-contact-class.md#Contact::GetComments)()
* [GetParameter](primer-contact-class.md#Contact::GetParameter)(prop*[string]*)
* [Interactions](primer-contact-class.md#Contact::Interactions)(type (optional)*[constant]*)
* [Keyword](primer-contact-class.md#Contact::Keyword)()
* [KeywordCards](primer-contact-class.md#Contact::KeywordCards)()
* [Next](primer-contact-class.md#Contact::Next)()
* [PenCheck](primer-contact-class.md#Contact::PenCheck)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, eflag*[integer]*)
* [PenCheckEdit](primer-contact-class.md#Contact::PenCheckEdit)(modal (optional)*[boolean]*, check\_mode (optional)*[constant]*, mpp\_threshold (optional)*[real]*, report\_crossed\_3d\_elems (optional)*[boolean]*, contact\_penchk\_dup\_shells (optional)*[constant]*)
* [Previous](primer-contact-class.md#Contact::Previous)()
* [SetFlag](primer-contact-class.md#Contact::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Sketch](primer-contact-class.md#Contact::Sketch)(redraw (optional)*[boolean]*)
* [StatusCheck](primer-contact-class.md#Contact::StatusCheck)()
* [Unblank](primer-contact-class.md#Contact::Unblank)()
* [Unsketch](primer-contact-class.md#Contact::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-contact-class.md#Contact::ViewParameters)()
* [Warning](primer-contact-class.md#Contact::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-contact-class.md#Contact::Xrefs)()
* [toString](primer-contact-class.md#Contact::toString)()

## Contact constants

| **Name** | **Description** |
| --- | --- |
| Contact.CROSSED\_EDGES | Return crossed edges in [Contact.Interactions()](primer-contact-class.md#Contact::Interactions) |
| Contact.MPP\_MODE | MPP penetration check mode |
| Contact.PENETRATIONS | Return penetrations in [Contact.Interactions()](primer-contact-class.md#Contact::Interactions) |
| Contact.SMP\_MODE | SMP penetration check mode |

### Constants for Contact \_OFFSET types

| **Name** | **Description** |
| --- | --- |
| Contact.BEAM\_OFFSET | Adds \_BEAM\_OFFSET option |
| Contact.CONSTR\_OFFSET | Adds \_CONSTRAINED\_OFFSET option |
| Contact.NO\_OFFSET | No offset option added. |
| Contact.SIMPLE\_OFFSET | Adds \_OFFSET option |

### Constants for Contact penetration check\_mode types

| **Name** | **Description** |
| --- | --- |
| Contact.MPP\_METHOD | Launches the penetration edit panel with the MPP methodology turned on |
| Contact.SMP\_METHOD | Launches the penetration edit panel with the SMP methodology turned on |

### Constants for Contact penetration contact\_penchk\_dup\_shells types

| **Name** | **Description** |
| --- | --- |
| Contact.SHELL\_AUTO | Launches the penetration edit panel with Automatic shell treatment of duplicate shells. |
| Contact.SHELL\_THICK | Launches the penetration edit panel with the thickest always option for duplicate shells. |
| Contact.SHELL\_THIN | Launches the penetration edit panel with the thinnest always option for duplicate shells. |

## Contact properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| bt | real | Contact birth time |
| check\_mode | integer | Checking mode on the pen check edit panel. (Can be [Contact.MPP_METHOD](primer-contact-class.md#Contact.MPP_METHOD), [Contact.MPP_METHOD](primer-contact-class.md#Contact.MPP_METHOD) or [Contact.SMP_METHOD](primer-contact-class.md#Contact.SMP_METHOD)) |
| cid | integer | [Contact](primer-contact-class.md) number (identical to [label](primer-contact-class.md#label). |
| colour | [Colour](primer-colour-class.md) | The colour of the contact |
| contact\_penchk\_dup\_shells | integer | Shell treatment on the pen check edit panel. (Can be [Contact.SHELL_AUTO](primer-contact-class.md#Contact.SHELL_AUTO), [Contact.SHELL_AUTO](primer-contact-class.md#Contact.SHELL_AUTO) or [Contact.SHELL_THIN](primer-contact-class.md#Contact.SHELL_THIN) or [Contact.SHELL_THICK](primer-contact-class.md#Contact.SHELL_THICK)) |
| dc | real | Exponential decay coeff |
| dt | real | Contact death time |
| exists (read only) | logical | true if contact exists, false if referred to but not defined. |
| fd | real | Dynamic coeff of friction |
| fs | real | Static coeff of friction |
| fsf | real | Coulomb friction scale factor |
| heading | string | [Contact](primer-contact-class.md) heading |
| id | logical | true if \_ID option is set, false if not |
| include | integer | The [Include](primer-include-class.md) file number that the contact is in. |
| label | integer | [Contact](primer-contact-class.md) number. |
| model (read only) | integer | The [Model](primer-model-class.md) number that the contact is in. |
| mortar | logical | \_MORTAR keyword option - true if set, false if not. |
| offset\_flag | integer | \_OFFSET option. (Can be [Contact.NO_OFFSET](primer-contact-class.md#Contact.NO_OFFSET), [Contact.SIMPLE_OFFSET](primer-contact-class.md#Contact.SIMPLE_OFFSET), [Contact.CONSTR_OFFSET](primer-contact-class.md#Contact.CONSTR_OFFSET) or [Contact.BEAM_OFFSET](primer-contact-class.md#Contact.BEAM_OFFSET)) |
| penchk | integer | Penetration search flag |
| saboxid | integer | Surface A box id |
| sapr | integer | Surface A side printout flag |
| sast | real | Optional surface A side shell thickness |
| sbboxid | integer | Surface B box id |
| sbpr | integer | Surface B side printout flag |
| sbst | real | Optional surface B side shell thickness |
| sfsa | real | Scale factor on surface A penalty stiffness |
| sfsat | real | Scale factor on true surface A shell thickness |
| sfsb | real | Scale factor on surface B penalty stiffness |
| sfsbt | real | Scale factor on true surface B shell thickness |
| surfa | integer | Surface A set id |
| surfatyp | integer | Surface A set type |
| surfb | integer | Surface B set id |
| surfbtyp | integer | Surface B set type |
| type | string | Contact type ("AUTOMATIC\_GENERAL", "SINGLE\_SURFACE" etc). |
| vc | real | Coeff for viscous friction |
| vdc | real | Visous damping coefficient |
| vsf | real | Viscous friction scale factor |

### Properties for COMPOSITE/LUBRICATION options

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| cideta | integer | Curve ID for the viscosity |
| cidmu | integer | Curve ID for the coefficient of friction |
| d\_comp | real | Composite film thickness |
| srmodel | integer | Model for shear response |
| tfail | real | Tensile traction for failure |

### Properties for CONSTRAINT options

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| kpf | real | Kinematic partition factor |

### Properties for CONTRACTION\_JOINT options

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| alpha | real | Key amplitude parameter A |
| beta | real | Key amplitude parameter B |
| mtcj | integer | The method option for the gap function |
| tsvx | real | X component of the free sliding direction T |
| tsvy | real | Y component of the free sliding direction T |
| tsvz | real | Z component of the free sliding direction T |

### Properties for DRAWBEAD options

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| dbdth | real | Draw bead depth |
| dbpid | integer | optional Part ID |
| dfscl | real | Scale factor on lcidrf |
| eloff | integer | optional element id offset |
| ending | real | Parameter to define the length of the bead |
| epm | real | Maximum strain the blank will experience when it passes the bead |
| epscale | real | Scale factor to weaken the stress-strain curve |
| lceps | integer | Loadcurve ID for plastic strain vs. parametric coord |
| lceps2 | integer | Loadcurve ID for plastic strain vs. parametric coord (elements moved &gt; offset) |
| lcidnf | integer | Loadcurve ID for Normal force per unit length |
| lcidrf | integer | Loadcurve ID for Force due to bending per unit length |
| numint | integer | #int points along drawbead |
| offset | real | distance offset |
| tscale | integer |  |

### Properties for ERODING options

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| erosop | integer | Erosion/interior node option |
| iadj | integer | Adjacent matl treatment for solids |
| isym | integer | Symmetry plane option |

### Properties for INTERFERENCE options

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| lcid1 | integer | Loadcurve ID for Dyn rel stiffness |
| lcid2 | integer | Loadcurve ID for Transient stiffness |

### Properties for RIGID options

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| fcm | integer | Force calculation method |
| lcid | integer | Loadcurve ID for Force vs penetration curve |
| us | real | Optional unloading stiffness |

### Properties for THERMAL options

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| a | integer | Loadcurve ID for a |
| algo | integer | contact algorithm |
| b | integer | Loadcurve ID for b |
| bc\_flg | integer | boundary condition flag |
| c | integer | Loadcurve ID for c |
| d | integer | Loadcurve ID for d |
| formula | integer | formula id |
| frad | real | Radiation conductance across gap |
| ftosa | real | Fraction of sliding friction energy partitioned to surface A |
| h0 | real | Heat transfer coefficient |
| k | real | Conductivity of gap fluid |
| lcfdt | integer | Loadcurve ID for dynamic friction vs. temp |
| lcfst | integer | Loadcurve ID for static friction vs. temp |
| lch | integer | Loadcurve ID for lch |
| lmax | real | Max size for thermal contact |
| lmin | real | Critical gap size |
| thermal | logical | If \_THERMAL option is set. Can be true or false |

### Properties for TIEBREAK options

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| cn | real | Normal stiffness |
| ct2cn | real | Ratio of tangential stiffness to normal stiffness |
| eraten | real | Normal energy release rate used in damage calculation |
| erates | real | Shear energy release rate used in damage calculation |
| mes | real | Shear force exponent |
| nen | real | Normal force exponent |
| nfls | real | Normal failure stress |
| option | integer | Response option |
| param | real | Critical distance |
| sfls | real | Shear failure stress |
| tblcid | integer | Loadcurve ID for stress vs gap post failure |
| thkoff | integer | flag for thickness offset |

### Properties for TIEBREAK\_USER options

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| cn | real | Normal stiffness |
| ct2cn | real | Ratio of tangential to normal stiff |
| nhv | integer | Number of history variables |
| offset | integer | Flag for offset treatment. This is only valid for \*CONTACT\_AUTOMATIC(\_ONE\_WAY)\_SURFACE\_TO\_SURFACE\_TIEBREAK\_USER and should not be confused with the 'offset' property for other contact types. |
| option | integer | User tiebreak type |
| up1 | real | User parameter |
| up10 | real | User parameter |
| up11 | real | User parameter |
| up12 | real | User parameter |
| up13 | real | User parameter |
| up14 | real | User parameter |
| up15 | real | User parameter |
| up16 | real | User parameter |
| up2 | real | User parameter |
| up3 | real | User parameter |
| up4 | real | User parameter |
| up5 | real | User parameter |
| up6 | real | User parameter |
| up7 | real | User parameter |
| up8 | real | User parameter |
| up9 | real | User parameter |

### Properties for TIED\_WELD options

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| close | real | Surface closeness parameter |
| hclose | real | Thermal contact conductivity |
| nmhis | integer | Number of material history variables |
| nmtwh | integer | Number of surface B tied weld history variables |
| nstwh | integer | Number of surface A tied weld history variables |
| ntprm | integer | Number of user tied weld parameters |
| temp | real | Minimum temperature required. |
| time | real | Minimum time required |

### Properties for \_MPP option

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| bucket | integer | Bucket sorting frequency |
| chksegs | integer | Special check for inverted elements |
| cparm8 | integer | Exclude beam to beam contact flag |
| grpable | integer | Experimental contact algorithm |
| inititer | integer | Number of iterations for initial penetration checking |
| lcbucket | integer | Bucket sorting frequency loadcurve ID |
| mpp | logical | true if \_MPP option is set, false if not |
| ns2track | integer | Number of segments to track per surface A node |
| parmax | real | The parametric extension distance for contact segments |
| pensf | real | Ignore penetration scale factor |

### Properties for optional card A

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| bsort | integer | Loadcurve for #cycles between bucket sorts |
| depth | integer | Loadcurve for search depth in automatic contact |
| frcfrq | integer | #cycles between penalty force updates |
| lcidab | integer | Loadcurve ID for airbag thickness vs time |
| maxpar | real | Max parametric coord overlap |
| sbopt | real | segment based contact option |
| sofscl | real | Soft constraint scale factor |
| soft | integer | Soft constraint flag |

### Properties for optional card B

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| i2d3d | integer | Segment searching option |
| isym | integer | Symmetry plane option |
| penmax | real | Max pen distance for "old" types 3, 5, 10 |
| shlthk | integer | Thickness consideration flag |
| sldstf | real | Optional solid stiffness |
| sldthk | real | Optional solid thickness |
| snlog | integer | Shooting node logic flag |
| thkopt | integer | Thickness option for "old" types 3, 5, 10 |

### Properties for optional card C

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| cid\_rcf | integer | [Coordinate system ID](primer-coordinatesystem-class.md) to output rcforc force resultants and ncforc data in a local system |
| dprfac | real | Depth of penetration reduction factor |
| dtstif | real | Timestep used in stiffness calc |
| edgek | real | Scale factor for penalty stiffness of edge-to-edge contact |
| flangl | real | Angle tolerance in radians for feature lines option in smooth contact |
| igap | integer | Implicit convergence flag |
| ignore | integer | Ignore initial pens in automatic types |

### Properties for optional card D

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| dnlscl | real | Distance for nonlinear force scaling |
| dtpchk | real | Time interval between penetration reports |
| fnlscl | real | Scale factor for nonlinear force scaling |
| q2tri | integer | Split quads into 2 trias |
| sfnbr | real | Scale factor for neighbour segment contact |
| shledg | integer | Edge shape for shells when measuring penetration |
| tcso | integer | Segment treatment only flag |
| tiedid | integer | Incremental displacement update for tied contacts |

### Properties for optional card E

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| cparm8smp | integer | Spotweld beam flag for SMP |
| fricsf | real | Scale factor for frictional stiffness |
| ftorq | integer | Beam torsional force computation flag |
| icor | integer | coefficient of restitution expressed as a percentage |
| ipback | integer | Create backup penalty tied contact |
| region | integer | Region to limit contact volume |
| sharec | integer | Shared constraint flag |
| srnde | integer | Flag for non-extended exterior shell edges |

### Properties for optional card F

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| dbinr | integer | 2dbinr - Flag to include 2d belt elements in contact (note properties cannot start with a number, so 2 has been removed). |
| fstol | real | Tolerance for determining flat segments. |
| ignroff | integer | Flag to ignore the thickness offset for shells in the calculation of the shell contact penetration depth. |
| pstiff | integer | Flag to choose the method for calculating the penalty stiffness |
| ssftyp | integer | Flag to determine how the SSF option on \*PART\_CONTACT behaves when SOFT = 2 on optional card A |
| swtpr | integer | Flag to use tapered shell contact segments adjacent to segments that are thinned by the SPOTHIN option on \*CONTROL\_CONTACT |
| tetfac | real | Scale factor for the computed volume of tetrahedral solid elements for the mass calculation in SOFT = 2 contact.. |

### Properties for optional card G

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| shloff | real | Flag affecting the location of the contact surfaces. |

| Detailed Description<br>The Contact class allows you to create, modify, edit and contact cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new Contact(Model*[[Model](primer-model-class.md)]*, type*[string]*, id (optional)*[integer]*, heading (optional)*[string]*)

Description<br>Create a new [Contact](primer-contact-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that Contact will be created in

* type (string)
 
Type of contact

* id (optional) (integer)
 
[Contact](primer-contact-class.md) number

* heading (optional) (string)
 
Title for the Contact

| Returns
<br>[Contact](primer-contact-class.md) object<br>
Return type
<br>Contact |
| --- |

| Example
<br>To create a new AUTOMATIC\_GENERIC contact n model m with label 10 and title "Test contact"<br>
```
var c = new Contact(m, "AUTOMATIC_GENERAL", 10, "Test contact");
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a contact. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the contact

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the contact c:<br>
```
c.AssociateComment(c);
```
 |
| --- |

* * *

| Blank()

Description<br>Blanks the contact |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To blank contact c:<br>
```
c.Blank();
```
 |
| --- |

* * *

| BlankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the contacts in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all contacts will be blanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the contacts in model m:<br>
```
Contact.BlankAll(m);
```
 |
| --- |

* * *

| BlankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the flagged contacts in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged contacts will be blanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the contacts that you want to blank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the contacts in model m flagged with f:<br>
```
Contact.BlankFlagged(m, f);
```
 |
| --- |

* * *

| Blanked()

Description<br>Checks if the contact is blanked or not. |
| --- |

#### Arguments

No arguments

| Returns
<br>true if blanked, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if contact c is blanked:<br>
```
if (c.Blanked() ) do_something...
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
<br>To Browse contact c:<br>
```
c.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the contact. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the contact

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for contact c:<br>
```
c.ClearFlag(f);
```
 |
| --- |

* * *

| Constrained(connection (optional)*[boolean]*)

Description<br>see if tied/spotweld contact uses constrained formulation |
| --- |

#### Arguments

* connection (optional) (boolean)
 
if true will only consider contacts used for PRIMER connections. The default is false.

| Returns
<br>logical<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To see if contact is of type tied and constrained<br>
```
c.Constrained();
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the contact. The target include of the copied contact can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>Contact object<br>
Return type
<br>Contact |
| --- |

| Example
<br>To copy contact c into contact z:<br>
```
var z = c.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a contact |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the contact will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>Contact object (or null if not made).<br>
Return type
<br>Contact |
| --- |

| Example
<br>To start creating a contact in model m:<br>
```
var c = Contact.Create(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a contact. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the contact

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the contact c:<br>
```
c.DetachComment(c);
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
<br>To Edit contact c:<br>
```
c.Edit();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for contact. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for contact c:<br>
```
c.Error("My custom error");
```
 |
| --- |

* * *

| ExtractColour()

Description<br>Extracts the **actual** colour used for contact.<br> By default in PRIMER many entities such as elements get their colour automatically from the part that they are in. PRIMER cycles through 13 default colours based on the label of the entity. In this case the contact [colour](primer-contact-class.md#colour) property will return the value [Colour.PART](primer-colour-class.md#Colour.PART) instead of the actual colour. This method will return the actual colour which is used for drawing the contact. |
| --- |

#### Arguments

No arguments

| Returns
<br>colour value (integer)<br>
Return type
<br>Number |
| --- |

| Example
<br>To return the colour used for drawing contact c:<br>
```
var colour = c.ExtractColour();
```
 |
| --- |

* * *

| FindInteractions() [deprecated]
<br>This function is deprecated in version 11.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>
Description<br>Use [Contact.Interactions()](primer-contact-class.md#Contact::Interactions) instead. |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

|  |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first contact in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first contact in

| Returns
<br>Contact object (or null if there are no contacts in the model).<br>
Return type
<br>Contact |
| --- |

| Example
<br>To get the first contact in model m:<br>
```
var c = Contact.First(m);
```
 |
| --- |

* * *

| FirstFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the first free contact label in the model. Also see [Contact.LastFreeLabel()](primer-contact-class.md#Contact::LastFreeLabel), [Contact.NextFreeLabel()](primer-contact-class.md#Contact::NextFreeLabel) and [Model.FirstFreeItemLabel()](primer-model-class.md#Model::FirstFreeItemLabel). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first free contact label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *First free in layer* in editing panels). If omitted the whole model will be used (Equivalent to *First free* in editing panels).

| Returns
<br>Contact label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the first free contact label in model m:<br>
```
var label = Contact.FirstFreeLabel(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the contacts in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all contacts will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the contacts

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the contacts with flag f in model m:<br>
```
Contact.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the contact is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the contact

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if contact c has flag f set on it:<br>
```
if (c.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each contact in the model.<br> **Note that ForEach has been designed to make looping over contacts as fast as possible and so has some limitations. Firstly, a single temporary Contact object is created and on each function call it is updated with the current contact data. This means that you should not try to store the Contact object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new contacts inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all contacts are in

* func (function)
 
Function to call for each contact

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the contacts in model m:<br>
```
Contact.ForEach(m, test);
function test(c)
{
// c is Contact object
}
```
<br><br>To call function test for all of the contacts in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
Contact.ForEach(m, test, data);
function test(c, extra)
{
// c is Contact object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Contact objects or properties for all of the contacts in a model in PRIMER. If the optional property argument is not given then an array of Contact objects is returned. If the property argument is given, that property value for each contact is returned in the array instead of a Contact object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get contacts from

* property (optional) (string)
 
Name for property to get for all contacts in the model

| Returns
<br>Array of Contact objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Contact objects for all of the contacts in model m:<br>
```
var a = Contact.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each contact in model m:<br>
```
var a = Contact.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a contact. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the contact c:<br>
```
var comm_array = c.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Contact objects for all of the flagged contacts in a model in PRIMER If the optional property argument is not given then an array of Contact objects is returned. If the property argument is given, then that property value for each contact is returned in the array instead of a Contact object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get contacts from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the contacts that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged contacts in the model

| Returns
<br>Array of Contact objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Contact objects for all of the contacts in model m flagged with f:<br>
```
var c = Contact.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the contacts in model m flagged with f:<br>
```
var a = Contact.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the Contact object for a contact ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the contact in

* number (integer)
 
number of the contact you want the Contact object for

| Returns
<br>Contact object (or null if contact does not exist).<br>
Return type
<br>Contact |
| --- |

| Example
<br>To get the Contact object for contact 100 in model m<br>
```
var c = Contact.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a Contact property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [Contact.ViewParameters()](primer-contact-class.md#Contact::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
contact property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if Contact property c.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (c.GetParameter(c.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if Contact property c.example is a parameter by using the GetParameter method:<br>
```
if (c.ViewParameters().GetParameter(c.example) ) do_something...
```
 |
| --- |

* * *

| Interactions(type (optional)*[constant]*)

Description<br>Returns an array of objects describing the interactions which can either be penetrations (tracked nodes that are tied to or penetrate elements in the contact) or crossed edges (contact segments that cross). |
| --- |

#### Arguments

* type (optional) (constant)
 
What type of interactions to return. Can be bitwise code of [Contact.PENETRATIONS](primer-contact-class.md#Contact.PENETRATIONS) to return penetrations and [Contact.CROSSED_EDGES](primer-contact-class.md#Contact.CROSSED_EDGES) to return crossed edges. If omitted penetrations will be returned.

| Returns |
| --- |

Array of objects with the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| end | Array of reals | End coordinate of intersection line (for [Contact.CROSSED_EDGES](primer-contact-class.md#Contact.CROSSED_EDGES)) |
| ex | real | escape vector X component (for [Contact.PENETRATIONS](primer-contact-class.md#Contact.PENETRATIONS)) |
| ey | real | escape vector Y component (for [Contact.PENETRATIONS](primer-contact-class.md#Contact.PENETRATIONS)) |
| ez | real | escape vector Z component (for [Contact.PENETRATIONS](primer-contact-class.md#Contact.PENETRATIONS)) |
| n1 | Node object | Node 1 of reference segment (for [Contact.PENETRATIONS](primer-contact-class.md#Contact.PENETRATIONS)) |
| n2 | Node object | Node 2 of reference segment (for [Contact.PENETRATIONS](primer-contact-class.md#Contact.PENETRATIONS)) |
| n3 | Node object | Node 3 of reference segment (for [Contact.PENETRATIONS](primer-contact-class.md#Contact.PENETRATIONS)) |
| n4 | Node object | Node 4 of reference segment (for [Contact.PENETRATIONS](primer-contact-class.md#Contact.PENETRATIONS)) |
| node | Node object | Penetrating node (for [Contact.PENETRATIONS](primer-contact-class.md#Contact.PENETRATIONS)) |
| pen | real | Depth of penetration (for [Contact.PENETRATIONS](primer-contact-class.md#Contact.PENETRATIONS)) |
| qthick | real | Remaining thickness ratio (for [Contact.PENETRATIONS](primer-contact-class.md#Contact.PENETRATIONS)) |
| rthick | real | Remaining unpenetrated thickness (for [Contact.PENETRATIONS](primer-contact-class.md#Contact.PENETRATIONS)) |
| s | real | s parametric coordinate of the tracked node projected onto the shell (for [Contact.PENETRATIONS](primer-contact-class.md#Contact.PENETRATIONS)) |
| shell | Shell object | Penetrated shell (for [Contact.PENETRATIONS](primer-contact-class.md#Contact.PENETRATIONS)) |
| shell1 | Shell object | First segment if shell (for [Contact.CROSSED_EDGES](primer-contact-class.md#Contact.CROSSED_EDGES)) |
| shell2 | Shell object | Second segment if shell (for [Contact.CROSSED_EDGES](primer-contact-class.md#Contact.CROSSED_EDGES)) |
| solid | Solid object | Penetrated solid (for [Contact.PENETRATIONS](primer-contact-class.md#Contact.PENETRATIONS)) |
| solid1 | Solid object | First segment if solid (for [Contact.CROSSED_EDGES](primer-contact-class.md#Contact.CROSSED_EDGES)) |
| solid2 | Solid object | Second segment if solid (for [Contact.CROSSED_EDGES](primer-contact-class.md#Contact.CROSSED_EDGES)) |
| start | Array of reals | Start coordinate of intersection line (for [Contact.CROSSED_EDGES](primer-contact-class.md#Contact.CROSSED_EDGES)) |
| t | real | t parametric coordinate of the tracked node projected onto the shell (for [Contact.PENETRATIONS](primer-contact-class.md#Contact.PENETRATIONS)) |
| thick | real | Thickness of contact segment, i.e. 0.5\*(t1+t2) (for [Contact.PENETRATIONS](primer-contact-class.md#Contact.PENETRATIONS)) |
| thickshell | Tshell object | Penetrated thick shell (for [Contact.PENETRATIONS](primer-contact-class.md#Contact.PENETRATIONS)) |
| thickshell1 | Tshell object | First segment if thick shell (for [Contact.CROSSED_EDGES](primer-contact-class.md#Contact.CROSSED_EDGES)) |
| thickshell2 | Tshell object | Second segment if thick shell (for [Contact.CROSSED_EDGES](primer-contact-class.md#Contact.CROSSED_EDGES)) |
| type | integer | The interaction type. Either [Contact.PENETRATIONS](primer-contact-class.md#Contact.PENETRATIONS) or [Contact.CROSSED_EDGES](primer-contact-class.md#Contact.CROSSED_EDGES). |

#### Return type

object

| Example
<br>To get the penetration interactions for contact c:<br>
```
var interactions = c.Interactions();
for(i=0; i<interactions.length; i++)
{
    var type  = interactions[i].type;	// Will be Contact.PENETRATIONS
    var node  = interactions[i].node;
    var shell = interactions[i].shell;
    var n1    = interactions[i].n1;
    var n2    = interactions[i].n2;
    var n3    = interactions[i].n3;
    var n4    = interactions[i].n4;
    var s     = interactions[i].s;
    var t     = interactions[i].t;
    var ex    = interactions[i].ex;
    var ey    = interactions[i].ey;
    var ez    = interactions[i].ez;
    var pen   = interactions[i].pen;
    var thick = interactions[i].thick;
    var rthick = interactions[i].rthick;
    var qthick = interactions[i].qthick;

    if(shell != undefined)
            ... process shell ...
}

```
<br>To get the penetration and crossed edge interactions for contact c:<br><br>
```
var interactions = c.Interactions(Contact.PENETRATIONS|Contact.CROSSED_EDGES);
for(i=0; i<interactions.length; i++)
{
    if (interactions[i].type == Contact.PENETRATIONS)
    {
        var node  = interactions[i].node;
        ...
    }
    else if (interactions[i].type == Contact.CROSSED_EDGES)
    {
        var start = interactions[i].start;
        ...
    }
}

```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this Contact (\*BOUNDARY\_PRESCRIBED\_MOTION\_xxxx). **Note that a carriage return is not added**. See also [Contact.KeywordCards()](primer-contact-class.md#Contact::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for Contact c:<br>
```
var key = c.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the Contact. **Note that a carriage return is not added**. See also [Contact.Keyword()](primer-contact-class.md#Contact::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for Contact c:<br>
```
var cards = c.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last contact in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last contact in

| Returns
<br>Contact object (or null if there are no contacts in the model).<br>
Return type
<br>Contact |
| --- |

| Example
<br>To get the last contact in model m:<br>
```
var c = Contact.Last(m);
```
 |
| --- |

* * *

| LastFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the last free contact label in the model. Also see [Contact.FirstFreeLabel()](primer-contact-class.md#Contact::FirstFreeLabel), [Contact.NextFreeLabel()](primer-contact-class.md#Contact::NextFreeLabel) and see [Model.LastFreeItemLabel()](primer-model-class.md#Model::LastFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last free contact label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest free in layer* in editing panels). If omitted the whole model will be used.

| Returns
<br>Contact label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the last free contact label in model m:<br>
```
var label = Contact.LastFreeLabel(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next contact in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Contact object (or null if there are no more contacts in the model).<br>
Return type
<br>Contact |
| --- |

| Example
<br>To get the contact in model m after contact c:<br>
```
var c = c.Next();
```
 |
| --- |

* * *

| NextFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the next free (highest+1) contact label in the model. Also see [Contact.FirstFreeLabel()](primer-contact-class.md#Contact::FirstFreeLabel), [Contact.LastFreeLabel()](primer-contact-class.md#Contact::LastFreeLabel) and [Model.NextFreeItemLabel()](primer-model-class.md#Model::NextFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get next free contact label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest+1 in layer* in editing panels). If omitted the whole model will be used (Equivalent to *Highest+1* in editing panels).

| Returns
<br>Contact label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the next free contact label in model m:<br>
```
var label = Contact.NextFreeLabel(m);
```
 |
| --- |

* * *

| PenCheck(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, eflag*[integer]*)

Description<br>Flags nodes that penetrate (or tie) in contact |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to be set on penetrating (or tied) node.

* eflag (integer)
 
Optional flag for elements. If supplied, node will be flagged only if it penetrates (or ties to) an element that is flagged. Node and element flag may be the same.

| Returns
<br>zero if contact successfully checked<br>
Return type
<br>Number |
| --- |

| Example
<br>To set flag f on tracked nodes of Contact c which tie to elements flagged with f:<br>
```
c.PenCheck(f, f);
```
 |
| --- |

* * *

| PenCheckEdit(modal (optional)*[boolean]*, check\_mode (optional)*[constant]*, mpp\_threshold (optional)*[real]*, report\_crossed\_3d\_elems (optional)*[boolean]*, contact\_penchk\_dup\_shells (optional)*[constant]*)

Description<br>launches the interactive edit panel for penetration check on the con |
| --- |

#### Arguments

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

* check\_mode (optional) (constant)
 
Check mode. Can be [Model.MPP_MODE](primer-contact-class.md#Contact.MPP_MODE) or [Model.SMP_MODE](primer-contact-class.md#Contact.SMP_MODE). Default is set to the oa pref contact\_check\_mode

* mpp\_threshold (optional) (real)
 
Can set the MPP threshold, by default this is set to the oa pref contact\_mpp\_penetration\_threshold

* report\_crossed\_3d\_elems (optional) (boolean)
 
Can set the value of reporting crossed elements to TRUE or FALSE, by default this is set to the oa pref report\_crossed\_3d\_elems

* contact\_penchk\_dup\_shells (optional) (constant)
 
Duplicate shell treatment Can be [Model.SHELL_AUTO](primer-contact-class.md#Contact.SHELL_AUTO), [Model.SHELL_THICK](primer-contact-class.md#Contact.SHELL_THICK) or [Model.SHELL_THIN](primer-contact-class.md#Contact.SHELL_THIN). Default is set to the oa pref contact\_penchk\_dup\_shells

| Returns
<br>No return value |
| --- |

| Example
<br>To launch an edit panel with modal set to TRUE, check\_method set to MPP, mpp\_threshold set to 1.123, report\_crossed\_3d\_elems set to true and contact\_penchk\_dup\_shells set to thinnest always:<br>
```
c.PenCheckEdit(true,Contact.MPP_METHOD,1.123,true,Contact.SHELL_THIN);
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a contact. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only contacts from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only contacts that are flagged with *limit* can be selected. If omitted, or null, any contacts from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[Contact](primer-contact-class.md) object (or null if not picked)<br>
Return type
<br>Contact |
| --- |

| Example
<br>To pick a contact from model m giving the prompt 'Pick contact from screen':<br>
```
var c = Contact.Pick('Pick contact from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous contact in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Contact object (or null if there are no more contacts in the model).<br>
Return type
<br>Contact |
| --- |

| Example
<br>To get the contact in model m before contact c:<br>
```
var c = c.Previous();
```
 |
| --- |

* * *

| RenumberAll(Model*[[Model](primer-model-class.md)]*, start*[integer]*) [static]
Description<br>Renumbers all of the contacts in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all contacts will be renumbered in

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the contacts in model m, from 1000000:<br>
```
Contact.RenumberAll(m, 1000000);
```
 |
| --- |

* * *

| RenumberFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*) [static]
Description<br>Renumbers all of the flagged contacts in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged contacts will be renumbered in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the contacts that you want to renumber

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the contacts in model m flagged with f, from 1000000:<br>
```
Contact.RenumberFlagged(m, f, 1000000);
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select contacts using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting contacts

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only contacts from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only contacts that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any contacts can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of contacts selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select contacts from model m, flagging those selected with flag f, giving the prompt 'Select contacts':<br>
```
Contact.Select(f, 'Select contacts', m);
```
<br><br>To select contacts, flagging those selected with flag f but limiting selection to contacts flagged with flag l, giving the prompt 'Select contacts':<br>
```
Contact.Select(f, 'Select contacts', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the contact. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the contact

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for contact c:<br>
```
c.SetFlag(f);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the contact. The contact will be sketched until you either call [Contact.Unsketch()](primer-contact-class.md#Contact::Unsketch), [Contact.UnsketchAll()](primer-contact-class.md#Contact::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the contact is sketched. If omitted redraw is true. If you want to sketch several contacts and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch contact c:<br>
```
c.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged contacts in the model. The contacts will be sketched until you either call [Contact.Unsketch()](primer-contact-class.md#Contact::Unsketch), [Contact.UnsketchFlagged()](primer-contact-class.md#Contact::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged contacts will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the contacts that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the contacts are sketched. If omitted redraw is true. If you want to sketch flagged contacts several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all contacts flagged with flag in model m:<br>
```
Contact.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| StatusCheck()

Description<br>Checks sliding contact for crossed edges and penetrations |
| --- |

#### Arguments

No arguments

| Returns
<br>An array containing count of crossed edges, count of penetrations (note if a node penetrates more than one segment, it is only reported once here)<br>
Return type
<br>Array |
| --- |

| Example
<br>To check Contact c:<br>
```
var status = c.StatusCheck(); ncrossed = status[0]; npens = status[1]
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of contacts in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing contacts should be counted. If false or omitted
referenced but undefined contacts will also be included in the total.

| Returns
<br>number of contacts<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of contacts in model m:<br>
```
var total = Contact.Total(m);
```
 |
| --- |

* * *

| Unblank()

Description<br>Unblanks the contact |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank contact c:<br>
```
c.Unblank();
```
 |
| --- |

* * *

| UnblankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the contacts in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all contacts will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the contacts in model m:<br>
```
Contact.UnblankAll(m);
```
 |
| --- |

* * *

| UnblankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the flagged contacts in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the flagged contacts will be unblanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the contacts that you want to unblank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the contacts in model m flagged with f:<br>
```
Contact.UnblankFlagged(m, f);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the contacts in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all contacts will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the contacts

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the contacts in model m:<br>
```
Contact.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the contact. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the contact is unsketched. If omitted redraw is true. If you want to unsketch several contacts and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch contact c:<br>
```
c.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all contacts. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all contacts will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the contacts are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all contacts in model m:<br>
```
Contact.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged contacts in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all contacts will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the contacts that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the contacts are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all contacts flagged with flag in model m:<br>
```
Contact.UnsketchAll(m, flag);
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
<br>[Contact](primer-contact-class.md) object.<br>
Return type
<br>Contact |
| --- |

| Example
<br>To check if Contact property c.example is a parameter by using the [Contact.GetParameter()](primer-contact-class.md#Contact::GetParameter) method:<br>
```
if (c.ViewParameters().GetParameter(c.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for contact. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for contact c:<br>
```
c.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this contact. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for contact c:<br>
```
var xrefs = c.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the Contact data in keyword format. Note that this contains the keyword header and the keyword cards. See also [Contact.Keyword()](primer-contact-class.md#Contact::Keyword) and [Contact.KeywordCards()](primer-contact-class.md#Contact::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for Contact c in keyword format<br>
```
var data = c.toString();
```
 |
| --- |

* * *