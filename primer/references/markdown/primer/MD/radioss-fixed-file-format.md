###  RADIOSS Fixed File Format

The RADIOSS Translator function is aimed specifically at translating RADIOSS starter and engine files into Ansys LS-DYNA keyword format data.

| ![](../Storage/primer-22-1/primer_links/appen_6/radfig1.gif) | The RADIOSS translator is invoked identically to all other formats read into PRIMER. Please refer to section 3.2 of the main manual for details on the READ function, remembering to select the RADIOSS sub-type.<br> <br>For a translation the starter file must be present. An engine file can optionally be selected. The generic file extension for a starter file is 00 (Radioss starter files usually end with d00 or D00), but this can easily be modified in the file selector panel. Once the correct file has been selected and the APPLY button pushed, another window will be created which allows an engine file to be selected and some options to be set. |
| --- | --- |

| ![](../Storage/primer-22-1/primer_links/appen_6/radfig2.gif) <br>The buttons in the RADIOSS translation defaults box are as follows:-<br> <br>DISMISS terminate the translation process, returning to the generic READ panel.<br> <br>APPLY accept the defaults in the panel and proceed with the translation.<br> <br>HELP will create a message box full of useful information about the function of this panel.<br> <br>ENGINE FILE is by default greyed out and the text box next to the button reads &lt;none&gt;. If you have a RADIOSS engine file to go with the starter file you are translating pressing this button will then allow an engine file to be selected by either typing in the name in the text box or pressing the button which will bring up the file selection box. Engine files by default have the extension 01 (Radioss engine files usually end with d01 or D01)<br> <br>MINIMUM VALUE FOR E and MULTIPLICATION FACTOR FOR E are used to set options for translating honeycomb materials. When honeycomb materials are defined in RADIOSS the material curve can be steeper than the Young's modulus. This is not allowed in Ansys LS-DYNA. These options allow a minimum permissible Young's modulus to be set. |
| --- |

INTERFACE OPTIONS

The radio buttons under Interface Options can be used to either translate or skip any interfaces (contacts) that are in the starter file.

| /DEL CARD OPTIONS<br> <br>The radio buttons under /DEL card options can be used to either process or skip any /DEL cards that are present in the engine file. |
| --- |

####  TRANSLATOR FUNCTIONALITY

This section of the appendix is meant to give a brief insight into the methods that the translator uses to process and store data, and the types of RADIOSS data which are understood.

#####  Engine File

The following keywords are translated:

| /DTIX | Initial timestep translated as DTINIT on \*CONTROL\_TIMESTEP; maximum timestep ignored |
| --- | --- |
| /DT | Scale factor on timestep translated as TSSFAC on \*CONTROL\_TIMESTEP . Minimum timestep converted to a mass-scaling timestep (-ve value of   DT2MS on \*CONTROL\_TIMESTEP ). Any other keywords (e.g. specifying a particular element type) are ignored. |
| /GFILE | T translated as interval between plot file outputs ( DT on \*DATABASE\_BINARY\_D3PLOT ). T and type of file ignored. |
| /RFILE | N translated as number of cycles between restart dumps ( CYCL on \*DATABASE\_BINARY\_D3DUMP ). File types ignored. |
| /RUN | T translated as termination time ( ENDTIM on \*CONTROL\_TERMINATION ). Run name and number ignored. |
| /TFILE | T translated as interval between time history file outputs ( DT on \*DATABASE\_BINARY\_D3THDT ). Type of file ignored |
| /VERS | Tells PRIMER which version of RADIOSS the starter file is |

The following keywords are translated, but for their effect upon the model see the relevant sections:

/DEL See below

/VEL See below

The following keywords are ignored:

/ANIM

/DYREL

/INTER (but birth & death times will be read from Starter file)

/KEREL

/PATRAN

/PRINT

/TITLE (but title will be read from starter file)

/BCS & BCSR cannot read restraints from the engine file, only from the Starter file.

/RBODY

######  /DEL CARDS

| ![](../Storage/primer-22-1/primer_links/appen_6/radfig3.gif) | If there are any /DEL cards in the engine file and they have been selected to process by using the 'Process / DEL cards ' radio button PRIMER will allow the user to delete or leave the elements selected in the /DEL cards . If there are any elements that are marked for deletion, two windows will appear on the screen after the translation has finished. The first is a text window explaining what is happening and the second shows what objects will be deleted. |
| --- | --- |

| ![](../Storage/primer-22-1/primer_links/appen_6/radfig4.gif) | The selected elements can now either be deleted by pressing the DELETE SEL button or left by pressing the ABORT SEL button. Alternatively if only some of the elements need to be deleted the appropriate elements can be selected. |
| --- | --- |
| ![](../Storage/primer-22-1/primer_links/appen_6/radfig5.gif) | After deleting the window shows if the deletion has been successful. |

######  /VEL CARDS

In RADIOSS, a set of nodes can be given the same translational velocity by using a /VEL/TRA card. Similarly they can be given the same rotational velocity by using a /VEL/ROT card. Each card can be used in any combination of X, Y and Z. Many of these combinations have no equivalent in Ansys LS-DYNA so some translations are not exact.

If a set of nodes occurs on a /VEL/TRA card only it is translated as a \*CONSTRAINED\_NODE\_SET . This is an exact translation.

If a set of nodes on a /VEL/TRA card have a translational degree of freedom XYZ and they also appear in a /VEL/ROT card with degree of freedom XYZ, the set is translated to a \*CONSTRAINED\_NODAL\_RIGID\_BODY . This is an exact translation.

If a set of nodes appears on a /VEL/TRA/ and a /VEL/ROT card with any other degree of freedom there is no equivalent in Ansys LS-DYNA. The rotational degrees of freedom are ignored and a \*CONSTRAINED\_NODE\_SET is created with the translational degree of freedom.

#####  Starter File

The table below summarises which features can be translated. For more details on each feature see the relevant section.

| Feature | Translated | Ignored |
| --- | --- | --- |
| Header |  |  |
| Title & Control Data | title, gravity load | all other data |
| Materials | Types 1,2,3,4,14,19,21,22,23,27 & 28 (see below) | All other materials are translated as \*MAT\_NULL (see below) |
| Mats for time history |  |  |
| Nodes | fully supported |  |
| Nodes for time history | fully supported |  |
| Skew frames for node time history |  | no equivalent |
| Boundary Conditions | all except GRILAG | GRILAG |
| Skew Frames |  |  |
| Elements | all except 2-D solid and 3 noded springs |  |
| Properties | all except type 12 (see below) |  |
| Functions |  |  |
| Concentrated loads |  | Sensor not translated |
| Pressure loads |  | Sensor not translated |
| Initial velocity | all except I | I |
| Accelerometers |  |  |
| Interfaces | all types & most data - see below |  |
| Rigid Walls | Plane, parallelogram - all data except as in "ignored" box | Node (moving wall); dist for search; direction of init. vel; prlgrm converted to rectangle |
| Rigid Body | see below |  |
| Rigid Body for time history |  |  |
| Added Mass |  |  |
| Fixed Velocity |  |  |
| Rivets spotwelds |  |  |
| Sections |  |  |
| Cylindrical joints |  |  |
| Monitored volumes |  |  |

######  Header and control cards

The first line in the file must start RADIOSS STARTER and the INVERS number (columns 17 to 24) must be 31. If this is not the case, PRIMER will assume that the file is not a Radioss version 3.1 starter file and will not be able to translate the file.

CARD1 - TITLE is used by PRIMER for the analysis title.

IGRAX, IGRAY and IGRAZ are translated to LOAD\_BODY\_X, \_Y and \_Z respectively.

######  Materials

Only some materials in the RADIOSS starter file can be translated. This is because there are some RADIOSS materials that have no equivalent in Ansys LS-DYNA.

######  RADIOSS material law 1: Elastic

RADIOSS material type 1 translates directly to an elastic material (\*MAT\_ELASTIC ) in Ansys LS-DYNA

######  RADIOSS material law 2: Elastic/plastic

RADIOSS uses a power-law equation to describe the stress-strain behaviour. There is no exact equivalent in Ansys LS-DYNA so a piece-wise linear approach is used (material type \*MAT PIECEWISE\_LINEAR\_PLASTICITY ). The stress-strain curve is created using the power law and input parameters. Similarly, the rate effect equation is implemented by creating a further curve for Ansys LS-DYNA.

PRIMER tests to see if Ansys LS-DYNA material type \*MAT\_PLASTIC\_KINEMATIC can be used instead (bi-linear elastic plastic). This will happen if the RADIOSS power is 0.0 (no strain hardening), or if the power is 1.0 and no maximum stress has been defined (bi-linear power law).

Because of the look-up table operations, the Ansys LS-DYNA model will not run very quickly; if exact correlation with RADIOSS is not required then we recommend that the materials be converted by hand back to bi-linear elastic-plastic (type 3).

| RADIOSS material law 21: Foam/Honeycomb  <br>The most direct equivalent of this RADIOSS material is Ansys LS-DYNA material type \*MAT SOIL\_CONCRETE (78) . This material allows a curve of pressure vs compaction while still allowing a pressure-sensitive yield criterion. However, there is a special case where the behaviour can be replicated more simply using the crushable foam material \*MAT CRUSHABLE\_FOAM(63 ) - see final paragraph in this section. |
| --- |

The pressure-vs-volume strain relationship is converted to be suitable for Ansys LS-DYNA (Ansys LS-DYNA true strain = -log(1/(1.+RADIOSS strain)) ) and the maximum volume strain is included as a steep slope at the end of the curve.

In RADIOSS, the curve can be steeper than the elastic modulus: often the RADIOSS models have very low Young's moduli. This is not permitted in Ansys LS-DYNA: it would cause the timestep to be reduced and there would be energy gain caused by hysteresis loops going the wrong way. Therefore we must raise the Young's modulus or change the curve. PRIMER checks each section of the curve, and if steeper than the bulk modulus, revises the curve and warns the user. This avoids the problems listed above but because the Ansys LS-DYNA curve is then softer than the RADIOSS curve, unwanted bottoming-out behaviour may occur.

As an option, the user may request that all RADIOSS materials which use law 21 have their Moduli multiplied by a factor (e.g.10) - the curve segments will then be permitted to be stiffer. The new modulus will then be checked against a user-supplied minimum modulus, and raised to match it if necessary. To do this, use the options in the RADIOSS translation window. Set values for the multiplication factor and minimum value for Young's Modulus.

The yield vs pressure relationship is determined by a quadratic power law with plateau value (A0, A1, A2 and AMAX). These must be converted by PRIMER to a load curve for Ansys LS-DYNA, and this in turn requires a sensible range of pressures to form the x-axis of the load curve. PRIMER uses a range of -5 to +50: this is sensible for foams in the usual millimetre units but would be very inappropriate if the units are not millimetres and Newtons.

The RADIOSS tensile and unloading bulk moduli are ignored (in Ansys LS-DYNA, assumed to be defined by Young's modulus and Poisson's ratio)

If A0=0.0,A1=0.0,A2=3.0 then the behaviour is that of crushable foam. PRIMER translates the material as type 63 ( \*MAT\_CRUSHABLE\_FOAM ). The curve is converted to stress-strain using the following assumptions:

Ansys LS-DYNA volumetric strain = 1.0 - (1.0/(RADIOSS strain + 1.0))

Ansys LS-DYNA direct stress = 3 x pressure

Again, the slopes of the curve are checked against the Young's modulus and revised if necessary to maintain the timestep.

######  RADIOSS material law 19: Elastic orthotropic

This material is translated to Ansys LS-DYNA material \*MAT\_ORTHOTROPIC\_ELASTIC (2) . The stiffness reduction in compression parameter (Re) is ignored.

######  RADIOSS material laws 3,4,22,23,27

These RADIOSS materials are similar to material law 2 with some extra parameters and are translated in the same way, so some information may be lost (for example damage parameters). The user should check these material models after translation to satisfy themselves that a suitable translation has been achieved. If not some editing of the keyword deck may be required. Also in some circumstances the Ansys LS-DYNA material type \*MAT\_ENHANCED\_COMPOSITE\_DAMAGE may be more appropriate.

######  RADIOSS material law 28

This material is translated to Ansys LS-DYNA material 26 ( \*MAT\_HONEYCOMB ). The load curves are translated to volumetric strain for Ansys LS-DYNA. RADIOSS allows the user to specify the local coordinate system of each element individually, with respect to a reference plane defined on property set type 6. In Ansys LS-DYNA there is no similar function, but by swapping the values for each direction on the material card in Ansys LS-DYNA it is possible to achieve the same effect. Currently the swapping has to be done by hand since PRIMER cannot do this automatically. It should be also noted that the orthotropic angle referred to in the RADIOSS property set 6 cannot be incorporated into the Ansys LS-DYNA keyword deck.

######  Material law 36

This is translated into material 24 in Ansys LS-DYNA ( \*MAT\_PIECEWISE\_LINEAR\_ PLASTICITY ). Only the first function is translated so any multi-functional parts are lost.

| Unsupported Materials Where an unsupported material model is encountered PRIMER will translate them as \*MAT\_NULL . The user then has to change the material model and input parameters by hand to a suitable material model before running the Ansys LS-DYNA model. All translated \*MAT\_NULL materials have zero density to act as a error trap in Ansys LS-DYNA. |
| --- |

######  User defined materials

| ![](../Storage/primer-22-1/primer_links/appen_6/radfig6.gif) | In a RADIOSS starter file, material laws 7, 8, 9, 12, 13, 29, 30 and 31 are user defined materials. As the length of a user defined material in RADIOSS is unknown some information is needed by the translator when one is encountered. A warning will be printed in the dialogue box. |
| --- | --- |
| ![](../Storage/primer-22-1/primer_links/appen_6/radfig7.gif) | Another window will also be displayed on the screen showing all the user defined material numbers in RADIOSS and how many cards each one requires. The default number for each material law is set to 8 cards (each material in RADIOSS has 7 compulsory cards). The user needs to edit the number of cards for the required user defined material in this window. Once this has been done and the DONE button pressed the translation will proceed. The user defined materials will be translated to user defined materials in Ansys LS-DYNA as shown in the following table. However, there will be no material parameters in the materials in Ansys LS-DYNA. The user will need to edit the material back to something sensible. |

| RADIOSS material law | Ansys LS-DYNA user defined material |
| --- | --- |
| 7 | 41 |
| 8 | 42 |
| 9 | 43 |
| 12 | 44 |
| 13 | 45 |
| 29 | 46 |
| 30 | 47 |
| 31 | 48 |

Equivalent RADIOSS and Ansys LS-DYNA user defined materials.

######  Skew Frames

Moving skew frames are translated to \*DEFINE\_COORDINATE\_NODES (fully supported)

Fixed skew frames are translated to \*DEFINE\_COORDINATE\_VECTOR (fully supported)

######  Property sets

**Type 0 (void)** Skipped

**Type 1 (shells** ) Supported. Only N, Thick and A are translated.

**Type 2 (truss)** Supported. Initial gap is not translated.

**Type 3 (beam)** Supported. Rotations at nodes are ignored.

**Type 4 (spring)** RADIOSS spring properties are defined by a number of parameters describing force as a function of deflection and deflection rate, with various options for treating unloading. In the general case, there is no equivalent in Ansys LS-DYNA, but if certain combinations of parameters have been left zero in the RADIOSS deck, a close equivalent in Ansys LS-DYNA does exist.

PRIMER identifies the following cases:

| a) | If curve N1 is zero (linear spring) but K is non-zero, the spring is assumed to be linear elastic. This translation is exact when C is also zero; if C is non-zero then the rate effect will be missing in Ansys LS-DYNA. |
| --- | --- |
| b) | If curve N1 is zero (linear spring) and K is also zero, a linear damper is assumed with coefficient C. This is an exact translation. |
| c) | Otherwise the spring is assumed to be nonlinear elastic, with rate effect: curve N1 is force-deflection and curve N2 is rate effect. This translation is exact only when H, A and B are zero. If H is non-zero, the unloading response is missing in Ansys LS-DYNA; this could lead to serious errors since no permanent deflection could occur. |

**Type 5 (Rivet and Spotweld)** Supported. Maximum normal and tangential forces are translated.

**Type 6 (Orthotropic solid element)** Translated to a normal solid element property. Any orthotropic angles will be lost.

**Type 7 (Airbag)** Translated into a Wang Nefske airbag in Ansys LS-DYNA. In Ansys LS-DYNA the ambient density is required when creating a control volume. PRIMER attempts to create a suitable value for the density by looking at the values given for the Gas constant and the specific heat. This value may not be correct and will need checking. Functions used for airbags in Radioss use total mass vs. time. In Ansys LS-DYNA the function is mass flow rate vs. time. The Radioss function is differentiated to get the mass flow rate curve for Ansys LS-DYNA.

**Type 8 (General spring)** . The best equivalent of a general spring in Ansys LS-DYNA is a discrete beam element. As with property type 4 springs only some combinations of values can be translated correctly. A linear discrete beam will be created if the properties in all 6 degrees of freedom are linear, and a non-linear discrete beam will be created if all are non-linear. If a mixture of properties are found 2 discrete beams need to be created - one linear and one non-linear - with the appropriate properties for each degree of freedom. As the spring is changed into a beam element in Ansys LS-DYNA the element number will change to avoid any potential clashes.

**Type 9 (Orthotropic Shell)** and **type 10 (Composite shell** ).These are translated as a normal shell. Any orthotropic properties will be lost.

**Type 11 (Composite shell)** . Material angles will be lost but a user defined integration law is created with the correct layer thicknesses.

**Type 12 (3 noded springs)** . Not supported. These will be skipped.

**Type 13 (beam type spring)** . Translated in the same way as type 9 general springs.

**Type 14 (Solid)** Supported

######  Accelerometers

Accelerometers in RADIOSS are defined by one node and a skew system (coordinate system). In Ansys LS-DYNA they are defined using 3 nodes which define a local triad. These nodes must also be on one rigid body. To translate the accelerometers two extra nodes are created which together with the first node make up this triad. A rigid part is then created which contains a beam representation of this triad. Finally the 3 nodes are used to create the accelerometer. N.B as any skew system can be used in RADIOSS to define an accelerometer, if a moving skew frame (defined by nodes) is used which is defined with 3 nodes somewhere else in the model the accelerometer in Ansys LS-DYNA will give different results. This is because the accelerometer in RADIOSS will give results depending on how the moving skew frame rotates. The accelerometer for Ansys LS-DYNA will give the results depending on how the rigid triad rotates.

######  Interfaces

Interfaces in RADIOSS are defined in a very similar way to Ansys LS-DYNA and so can be translated. The following table shows which contact types in Ansys LS-DYNA the RADIOSS interfaces are translated to.

| **RADIOSS Interface type** | **Ansys LS-DYNA contact type** |
| --- | --- |
| 2 TIED | \*CONTACT\_TIED\_NODES\_TO\_SURFACE or <br> <br>\*CONTACT\_TIED\_SURFACE\_TO\_SURFACE |
| 3 SLIDE/VOID | \*CONTACT\_AUTOMATIC\_NODES\_TO\_SURFACE or <br> <br>\*CONTACT\_AUTOMATIC\_SURFACE\_TO\_SURFACE |
| 4 SLIDE/VOID | \*CONTACT\_AUTOMATIC\_SINGLE\_SURFACE |
| 5 SLIDE/VOID | \*CONTACT\_AUTOMATIC\_NODES\_TO\_SURFACE or <br> <br>\*CONTACT\_AUTOMATIC\_SURFACE\_TO\_SURFACE |
| 6 SLIDE/VOID | \*CONTACT\_RIGID\_BODY\_TWO\_WAY\_TO\_RIGID\_BODY |
| 7 SLIDE/VOID | \*CONTACT\_AUTOMATIC\_NODES\_TO\_SURFACE or <br> <br>\*CONTACT\_AUTOMATIC\_SURFACE\_TO\_SURFACE or \*CONTACT\_AUTOMATIC\_SINGLE\_SURFACE |
| 8 SLIDE | \*CONTACT\_DRAWBEAD |
| 10 TIED/VOID | \*CONTACT\_AUTOMATIC\_NODES\_TO\_SURFACE or <br> <br>\*CONTACT\_AUTOMATIC\_SURFACE\_TO\_SURFACE |

Surface input types 1 (segments), 2 (nodes), 4 (shell property sets) and 5 (shell elements) are translated directly. Input type 3 (shell materials) has no equivalent in Ansys LS-DYNA so it is translated to a list of parts which use these materials. Interfaces in RADIOSS can have the same entities in the surfA and the surfB side of the contact. This could cause problems in Ansys LS-DYNA so for each contact any entities which occur in the surfA and surfB surfaces are removed from the surfB side.

For RADIOSS interface type 4, any entities which are left in the surfB side of the contact after this process are added to the surfA side and a single surface contact created.

Interface type 7 can be used to replace more than one type of contact in RADIOSS. If a type 7 contact is found which does not use nodes for the surfA side it is translated to a surface to surface contact and a single surface contact.

######  Rigid Walls

Rigid walls in RADIOSS are translated to Ansys LS-DYNA rigid walls as follows

| **RADIOSS Type** | **Ansys LS-DYNA type** |
| --- | --- |
| 1 infinite plane | \*RIGIDWALL\_PLANAR\_OPTION |
| 2 infinite cylinder | \*RIGIDWALL\_GEOMETRIC\_CYLINDER |
| 3 sphere | \*RIGIDWALL\_GEOMETRIC\_SPHERE |
| 4 parallelogram | \*RIGIDWALL\_PLANAR\_FINITE\_OPTION |

The OPTION on the Ansys LS-DYNA rigidwalls can be MOVING if the rigid wall in RADIOSS has a velocity. However in RADIOSS a rigidwall can have a velocity in any direction. In Ansys LS-DYNA velocity is restricted to the direction of the normal defining the rigidwall. The vector magnitude of the velocity from the RADIOSS rigidwall is used and so the direction and magnitude of the velocity may be incorrect.

######  Rigid Bodies

Rigid bodies in RADIOSS can be defined by either nodes or property sets. The equivalent of a rigid body defined by nodes in Ansys LS-DYNA is a \*CONSTRAINED\_NODAL\_RIGID\_BODY . However if this is used then no external motions can be applied to the rigid body (e.g. \*BOUNDARY\_PRESCRIBED\_MOTION\_RIGID ). To overcome this, if a rigid body in RADIOSS is defined by nodes a new part, beam section and rigid material are created. Beams with negligible mass are created from the primary node on the rigid body to all other nodes. This also helps in visualisation of the rigid body.

If the primary node on a rigid body is at (0,0,0) then RADIOSS will calculate the centre of mass and inertia for the rigid body on initialisation and then move the node to the centre of mass. If this node was included in the rigid body definition in Ansys LS-DYNA the inertia and centre of mass would be incorrect. If the lead node is found to be at the origin it is not translated and the next node in the rigid body is used as the lead node.

Rigid bodies defined by property sets are translated as rigid parts by PRIMER with \*CONSTRAINED\_RIGID\_BODIES to merge the parts together. If the lead node is not at the origin it is added to the rigid body by using a \*CONSTRAINED\_EXTRA\_NODE card.

If there is a mass and inertia tensor for the rigid body it is translated and a \*PART\_INERTIA card defined. If there is no mass and inertia a \*PART card is defined and Ansys LS-DYNA will calculate the mass and inertia tensor. If there is only one of the mass and inertia present a warning will be printed.

######  Fixed velocities

Fixed velocities in RADIOSS are translated to \*BOUNDARY\_PRESCRIBED\_MOTION\_ NODE unless the node is a primary node on a rigid body. If this is the case it is translated to \*BOUNDARY\_PRESCRIBED\_MOTION\_RIGID .

[Previous](patran-neutral-file-ntl-reader.md)  |  [Next](radioss-block-format.md)