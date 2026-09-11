####  Rotate Angles: Explicit Rotation of Assemblies about their Connection Nodes

![](../Storage/primer-22-1/primer_links/sect_6/dummies/position-panel-rotate-mode.png) 
![](../Storage/primer-22-1/primer_links/sect_6/dummies/positioning_panel.PNG)For each assembly a row showing the current joint angles is shown.
 
* White background indicates that the angles are in the main dummy axes system.
* Green background indicates that the angles are in the local system of the [joint stiffness](assemblycreation-and-editing.md#jstf) connecting this assembly to its parent.
* Grey background indicates that the angles either belong to the assemblies that have multiple parents or the assemblies that makeup the [circular connections](assemblycreation-and-editing.md#circular_connections) in the dummy construct.

Greyed out angles are locked against rotation by the &lt; [DoF code](assemblycreation-and-editing.md#dof_code)&gt; of the assembly.
 
![](../Storage/primer-22-1/primer_links/sect_6/dummies/positioning_panel2.PNG)
 
In the Assembly list, the indications (R), (E) and (M) against the assembly names indicate the following:

* (R): The indicated assembly is the Root Assembly.
* (E): One or more child/grandchild assemblies of the indicated assembly have [circular connections](assemblycreation-and-editing.md#circular_connections).
* (M): The indicated assembly has multiple parent assemblies and therefore connected with the parents in mechanism style connections.

In this Rotate Angles mode, an assembly is selected and rotated about one of the three axes. Both the selected assembly  ***and its children***  are rotated as a rigid unit, and rotation only takes place about a single axis at a time.
 
"Euler" angles are used to specify and compute angles in this mode. These are described in more detail under "[Euler angles in PRIMER](notes-on-using-dummy-angles.md#euler_angles)" below.

| Until PRIMER V20.1, if an assembly uses mechanism-style [PIN, HINGE or LINE](assemblycreation-and-editing.md#dof_code)connection with multiple parents it, and any assemblies connected to it which form a statically indeterminate load path, were greyed out here. This was because their motion can only be calculated using kinematic (mechanism) calculation using [Drag Assembly](drag-assemblies-free-dragging-of-assemblies.md#drag_assembly)or [Move Points](move-points-free-movement-driven-by-updated-point-positions.md#move_points), and not by simple trigonometry.<br><br>But from PRIMER V21.0,  is also enabled for the assemblies with multiple parents and the motion of these assemblies happens in mechanism style rotation. |
| --- |

##### An example of Rotate Angles for Assemblies with single parent

In the example here the user has selected the upper right arm of the dummy (coloured grey to denote selection), and it can be seen that the elbow, lower arm, wrist and hand have all been selected too.
 
Dragging with the mouse is the easiest method, but this is not applicable for mechanism style rotation (i.e., for the assemblies with multiple parents)

| Mouse button | Drags axis |
| --- | --- |
| Left | Local X (Phi) |
| Middle | Local Y (Theta) |
| Right | Local Z (Psi) |

| ![](../Storage/primer-22-1/primer_links/sect_6/dummies/fig_posn_4.jpg)Dragging is only permitted about the axes implied by the [DoF Code](assemblycreation-and-editing.md#dof_code)specified on the parent assembly. In addition rotation will be limited to the stop angles specified on any [Joint Stiffness](assemblycreation-and-editing.md#jstf)definition for the joint. |
| --- |
| ![](../Storage/primer-22-1/primer_links/sect_6/dummies/fig_posn_3.jpg)This image shows the arm after some movement, demonstrating how the assemblies below the upper arm in the hierarchy all move as a rigid combination, rotating about the (nearly) vertical axis at the right hand shoulder yoke joint. |

| Assembly angles can also be set explicitly by typing angles into the appropriate row text entry box (red outline):<br> <br>![](../Storage/primer-22-1/primer_links/sect_6/dummies/rotate_angles_input.png)<br> <br>Or the full editing panel for an assembly can be mapped by clicking on the "name" button (blue outline). The editing panel allows all the angle attributes of the assembly to be adjusted.<br> <br>Articulation of each degree of freedom is limited by stop angles that defined maximum +ve and -ve articulation in degrees. Two sets of angles are considered:<br><ul> <li>&quot;Hard&quot; stop angles (top two rows, designated <span class="buttontext">Stop -ve </span>and <span class="buttontext">Stop +ve </span>) </li> <li>&quot;Soft&quot; stop angles (lower two rows, designated <span class="buttontext">Soft -ve </span>and <span class="buttontext">Soft +ve </span>) </li> </ul> <br>If no soft stop angles are defined both -ve and +ve fields will be zero and grey as shown here for the Phi and Theta degrees of freedom, meaning that only the hard angles apply. | ![](../Storage/primer-22-1/primer_links/sect_6/dummies/position-panel-edit-assembly.png) |
| --- | --- |

##### An example of Rotate Angles for circular connections (Model Acknowledgement: THUMS - Toyota Motor Corporation)

![](../Storage/primer-22-1/rotate-angles-explicit-rotation-of-assemblies-about-their-connection-nodes/circular_connections_rotation_eg1.png)![](../Storage/primer-22-1/rotate-angles-explicit-rotation-of-assemblies-about-their-connection-nodes/circular_connections_rotation_eg2.png)In this example, **L Hand (16)** assembly has two parent assemblies **L Ulna (15)** and **Left Radius (36)** and hence these assemblies form [circular connections](assemblycreation-and-editing.md#circular_connections).

As **L Hand** is connected to two parent assemblies, PRIMER indicates it with (M) in the Assembly list and it's parent assemblies **L Ulna** and **Left Radius** are indicated with (E), and the angles of all the three assemblies are shown with the grey background.

![](../Storage/primer-22-1/rotate-angles-explicit-rotation-of-assemblies-about-their-connection-nodes/circular_connections_rotation_eg3.png)

| ![](../Storage/primer-22-1/rotate-angles-explicit-rotation-of-assemblies-about-their-connection-nodes/circular_connections_rotation_eg4.png)**Initial Condition**<br><br>The assemblies can be rotated in **Rotate Angles** method either by dragging with mouse buttons or by giving the assembly angles explicitly in the respective angle textbox. But for [circular connections](assemblycreation-and-editing.md#circular_connections), the feature of dragging using a particular mouse button to rotate about a particular axis is not applicable. Instead, if you drag an assembly with any mouse button, PRIMER rotates that assembly about any axis as per your mouse movement.<br><br>This image shows the initial position of **L Hand**, **L Ulna** and**Left Radius** assemblies with the relative assembly angles as zero degrees.<br><br>![](../Storage/primer-22-1/rotate-angles-explicit-rotation-of-assemblies-about-their-connection-nodes/circular_connections_initial_condition.PNG) |
| --- |
| ![](../Storage/primer-22-1/rotate-angles-explicit-rotation-of-assemblies-about-their-connection-nodes/circular_connections_rotation_eg6.png)<br><br>**Rotate L Hand Assembly**<br><br>Enter the assembly angle for **L Hand** assembly to the desired degree of rotation in the respective text box. This will rotate the **L Hand** assembly to the given angle (if it is within the stop angles limit) and its parent assemblies to the appropriate degrees.<br><br>In this example, **L Hand** assembly is only allowed to rotate about z axis. This image shows the assemblies after giving a certain amount of rotation to the **L Hand** assembly.<br><br>![](../Storage/primer-22-1/rotate-angles-explicit-rotation-of-assemblies-about-their-connection-nodes/circular_connections_rotation_eg5.png) |

##### "Hard" vs "Soft" stop angles

From PRIMER 12 onwards both "Hard" and "Soft" stop angles are supported, earlier versions did not make this distinction and simply implemented what are now described as "Hard" stop angles.

| **Meaning of the two types of stop angle** |
| --- |
| "Hard" angles | Have always existed in all versions of PRIMER as plain "stop angles".<br><ul> <li>Are defined on the Ansys LS-DYNA *CONSTRAINED_JOINT_STIFFNESS card. </li> <li>Act as limiting angles during analyses, with stiffness rising sharply once reached. </li> <li>Will be used by <!-- #BeginLibraryItem &quot;/Library/primer.lbi&quot; -->PRIMER <!-- #EndLibraryItem -->during positioning if no &quot;soft&quot; angles are defined for that degree of freedom. </li> </ul> |
| "Soft" angles | Were introduced in PRIMER 12.<br><ul> <li>Are optional, and need not be defined. </li> <li>Are defined in <!-- #BeginLibraryItem &quot;/Library/primer.lbi&quot; -->PRIMER <!-- #EndLibraryItem -->&#39;s dummy tree file, under the dummy *ASSEMBLY keyword after *END. </li> <li>If defined they act as a limit during positioning only, and are not considered during Ansys LS-DYNA analysis. </li> </ul> |

Soft stop angles have been introduced at the request of users as a simple way of preventing initial penetrations during positioning. The following sequence of images uses the junction between the upper leg and lower torso of a typical dummy to illustrate the problem.

| **Initial state**<br> <br>Here is the leg (red) and lower torso (green) in their neutral, unpositioned state.<br> <br>Rotation of the leg takes place about the pelvis spherical joint. | ![](../Storage/primer-22-1/primer_links/sect_6/dummies/fig_posn_4a.png) |
| --- | --- |
| **Positioned *without* Soft Stop angles**<br> <br>The \*CONSTRAINED\_JOINT\_STIFFNESS card used to define the local axis system and associated "hard" stop angles for the upper leg permits rotations about all axes, and also permits the leg to rotate up and down by an amount that can cause inter-penetration between leg and torso, as shown in this example.<br> <br>Of course in a Ansys LS-DYNA analysis there would be a contact surface between leg and torso which would generate forces resisting penetration, and the soft material itself would deform, so the "hard" stop angles are quite adequate.<br> <br>However positioning in PRIMER is totally rigid, and no compliance of the penetrating materials is considered. | ![](../Storage/primer-22-1/primer_links/sect_6/dummies/fig_posn_4b.png) |
| **Positioned *with* Soft Stop angles**<br> <br>Here additional soft stop angles have been defined, limiting the upwards angle of rotation of the leg to angle , which is set to prevent penetration.<br> <br>Since the soft stop angles are only on PRIMER 's dummy \*ASSEMBLY card, after \*END, they are not "seen" by Ansys LS-DYNA meaning that the normal hard angles are used as limits during the analysis. | ![](../Storage/primer-22-1/primer_links/sect_6/dummies/fig_posn_4c.png) |

Documentation of the syntax used for soft stop angles can be found in the section on the [Dummy tree file *ASSEMBLY card in Appendix B.i](bi-dummy-tree-file-format.md#soft_angles)
 
![](../Storage/primer-22-1/primer_links/sect_6/dummies/fig_posn_5.jpg)This image shows the axes of explicit dragging more clearly.
 
Here only the right hand is being dragged, and the display of \*Constrained Joint Stiffnesses has been turned on to show the local axis systems at the wrist to hand joint.
 
Rotation is only permitted about the joint's local Z axis, shown here with a white line superimposed on the image. There are two local axis systems at the joint: one on the wrist (parent) and one on the hand (child). Initially they were coincident.
 
It can be seen from the divergence of the local X axes (coming out of the joint towards the observer) that the hand has been rotated a little.

**Rotation Permissions**
 
The rotation of each axes of an assembly can be set using the Permit rot'n buttons in the panel displayed above. However, if the rotations for all assemblies need to be set, then the popups displayed below can be used. There is one under each axis button.
 
![](../Storage/primer-22-1/permit_rotation_popup.PNG)

#####  

##### 

##### 

##### The characteristics of Rotate Angles mode

* **It is precise** : movement is calculated using trigonometry about the rotation point on the parent assembly. This preserves the accuracy of the dummy model and, in particular, preserves the coincidence of nodes at joints.
* **It takes no notice of** restraints on assemblies, or restrained points within them, or contacts: these are considered in "dragging" modes only.
* **It can be frustrating** to use since positioning of a limb requires a set of rotations about various joints back up its "tree", making precise positioning awkward.

[Previous](the-main-positioning-panel.md)  |  [Next](drag-assembly-free-dragging-of-limbs-using-mechanism-analysis.md)