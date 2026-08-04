####  Rotate Angles: Rotation of Assemblies

##### Rotating Mechanism assemblies:
 
![](../Storage/primer-22-1/primer_links/sect_6/mechanism/mode_1.gif)For each assembly a row showing the current joint angles is shown. Angles on a blue background are in the mechanism's [native system](rotate-angles-rotation-of-assemblies.md#native_sys), those on a green background are in the local axes of the assembly's coordinate system where this has been defined.
 
Typing in a new angle will cause the assembly to rotate to the new value using the iterative analysis (free drag) calculation method.
 
Mechanism assemblies are initially set to angle zero degrees (as shown here) when first defined, and thereafter their rotation angles are computed from their rotation relative to that initial orientation.
 
######  Angles are expressed in the mechanism's native system 
 
In order to give consistent calculation and reporting of angles for assemblies, those with no local coordinate system are reported in the Mechanism's native system (on a blue background).
 
This is assigned automatically and is initially aligned with the global cartesian system, however if the mechanism as a whole is rotated with the [Orient](orient-translating-rotating-scaling-reflecting-projecting.md)command then this system also rotates, thus reported angles will not change.

 ![](../Storage/primer-22-1/primer_links/sect_6/mechanism/rot_1.gif) 
Rotation of mechanism assemblies is only permitted about axes that are not restrained.
 
You can view the status of these restraints by swapping to the "Drag Assemblies" mode of the positioning panel.
 
You can see here that the seat base ("Bum section" - a technical term!) is fully restrained in all degrees of freedom, while the seat back is restrained only against rotations Rx and Rz in anticipation of the [example rotation](rotate-angles-rotation-of-assemblies.md#rot_example)below.

 ![](../Storage/primer-22-1/primer_links/sect_6/mechanism/fig_11.gif)

##### Rotating Dummy assemblies 
 
Rotation works somewhat differently. For compatibility with the [Dummy angle positioning process](dummies-positioning-occupants.md):
 
* Angles are computed relative to the coordinate system of the joint stiffness coordinate system at the parent side of the assembly's attachment node.
* Angular changes are applied explicitly via trigonometrical calculation, not via the iterative dragging scheme, and take no notice of assembly or point restraints.
* Both the selected assembly  ***and its children***  are rotated as a rigid unit, and rotation only takes place about a single axis at a time.

This behaviour is very different to that of rotations of mechanism assemblies, and the angle entry buttons have a dark grey background to reinforce this point. It is usually best to position a Dummy in the occupant positioner, and then let its behaviour as a "child" of a mechanism be driven by the motion of that parent mechanism.
 
Please see [Rotate Angles](rotate-angles-explicit-rotation-of-assemblies-about-their-connection-nodes.md#rotate_angles)in the dummy documentation for more details.

| Example of positioning a mechanism assembly by rotation.  <br>Remember that the seat back in this demonstration model is connected to the seat base by a [HINGE connection](connection-creation-and-editing.md#hinge_joint)permitting rotation only. |
| --- |
| ![](../Storage/primer-22-1/primer_links/sect_6/mechanism/rotate_1.jpg)This image shows the seat back in its initial position.<br> <br>This becomes the initial orientation of 0.0 degrees about all axes.<br> <br>We propose to rotate by 30 degrees clockwise about the global Y axis, which is coming towards the observer out of the plane of the page.<br> <br>( *Because the seat has not been rotated as a whole using [Orient](orient-translating-rotating-scaling-reflecting-projecting.md)the mechanism axes are aligned with the global axes. If the mechanism as a whole is rotated then rotations will take place about the rotated axes - see the notes on the [mechanism's native coordinate system](rotate-angles-rotation-of-assemblies.md#native_sys)above.* ) |
|  |  |
| The user types the new angle into the Y rotation column | ![](../Storage/primer-22-1/primer_links/sect_6/mechanism/rot_3.gif) |
|  |  |
| PRIMER drives the rotation automatically, using the iterative calculation method.<br> ![](../Storage/primer-22-1/primer_links/sect_6/mechanism/rotate_2.jpg) |
|  |  |
| Feedback on progress achieved is given every 10 iterations. | ![](../Storage/primer-22-1/primer_links/sect_6/mechanism/rot_2.gif) |
|  |  |
| Here is the final position, achieved after about 40 iterations.<br> <br><br> ![](../Storage/primer-22-1/primer_links/sect_6/mechanism/rotate_3.jpg) |

[Previous](the-main-positioning-panel-mechanism.md)  |  [Next](drag-assemblies-free-dragging-of-assemblies.md)