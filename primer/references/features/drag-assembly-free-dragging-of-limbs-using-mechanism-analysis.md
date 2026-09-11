####  Drag Assembly: Free Dragging of Limbs Using Mechanism Analysis

![](../Storage/primer-22-1/primer_links/sect_6/dummies/position-panel-drag-mode.png) 
![](../Storage/primer-22-1/drag-assembly-free-dragging-of-limbs-using-mechanism-analysis/Drag_assembly_panel.PNG)In Drag Assembly mode the positioning panel changes.
 
Each assembly is still shown as a row, but now:
 
* Clicking on the "name" button brings up the assembly editing panel [as before](assembly-creation-and-editing.md#edit_assembly).
* You can select the degrees of freedom to be restrained (locked) during positioning for each assembly. Restraint acts in the coordinate system of the assembly (if defined), otherwise in the global system. These restraints can be controlled for all assemblies using the popup buttons on 'Lock tr' and 'Lock rot'

In this example the pelvis is restrained against all translations and rotations, thorax is restrained in Ty and Rx, head is retrained in Ty and against all rotations.
 
As before you click on an assembly to drag it, but now the dummy is treated as a mechanism, and it will follow the mouse movement in a natural way, subject to any restraints placed upon it, and also the properties of the joints between assemblies.
 
Joint rotation axes and stop angles are honoured as in Rotate Angles mode above, but otherwise the dummy is treated as a pin-jointed set of rigid assemblies, and will respond to dragging using rigid body mechanics.
 Mouse motion following picking on an assembly works as follows: 

| Mouse button | Resulting action |
| --- | --- |
| Left | All limbs attached to this limb, in both "parent" and "child" directions, that are not fully restrained become draggable, and will follow to where the motion of this limb drags them. |
| Middle | Only this assembly and its children will move. |
| Right | Only this assembly, its immediate parent and its children will move. |

#####  An example of Drag Assembly free dragging

The following sequence of images shows how this might be used in practice. In this example the dummy has been positioned in the seat, with hands attached to the steering wheel and feet to the pedals. Both hands and feet are fully restrained in all degrees of freedom, the torso, thorax and head are restrained against all rotations and also Y (out of plane) translation.

The user has clicked on the lower torso with the left mouse button, so the whole dummy is selected for movement, and drags it progressively further forwards. This sequence would be carried out in a single operation, and for this dummy the drag occurs in near real-time on a modern desktop computer.

| **![](../Storage/primer-22-1/primer_links/sect_6/dummies/fig_posn_6.jpg)Initial condition**<br> <br>The user has clicked on the lower torso, which selects the whole dummy, and is about to drag from left to right |
| --- |
| **![](../Storage/primer-22-1/primer_links/sect_6/dummies/fig_posn_7.jpg)After about 100mm movement to the right**<br> <br>Notice that the hands and feet have remained fixed, the knees have moved up and the elbows have moved out.<br> <br>Because of their rotational restraints the head, torso and pelvis regions have remained upright. |
| **![](../Storage/primer-22-1/primer_links/sect_6/dummies/fig_posn_8.jpg)Final position**<br> <br>The elbows have moved up and outwards, and the knees have moved up. |
| ![](../Storage/primer-22-1/primer_links/sect_6/dummies/fig_posn_9.jpg)Here is the final position in an isometric view.<br> <br>Arm and leg movement is very obvious! |

#####  An example of Dragging child assemblies with more than one parent

The following sequence of images shows how this might be used in practice.

In this example the dummy has its two feet/ankles conjoined at a node.

Here the the dummy assembly connections are:

1. Assembly **left\_foot** is a child assembly to assembly '**left\_lo\_leg**' (DOF=XYZ)
2. Assembly **right\_foot** is a child assembly to assembly '**right\_lo\_leg**' (DOF=XYZ)
3. Assembly **right\_foot** is a child assembly to assembly '**left\_foot**' (DOF= PIN)

So the assembly ' **right\_foot** ' has two parent assemblies - '**right\_lo\_leg**' and '**left\_foot**'.

| **![1](../Storage/primer-22-1/primer_links/sect_6/dummies/fig_posn_13.jpg)Initial condition**<br> <br>The assemblies 'right\_foot' and 'left\_foot' are conjoined at the ankles.<br> <br>This means that 'right\_foot', 'right\_lo\_leg' and 'left\_foot' assemblies form [circular connections](assemblycreation-and-editing.md#circular_connections). From PRIMER V21.0, **Rotate Angles** can also be used to position the left and right legs independently. However, **Drag Assemblies** and **Move points** can be used to position these assemblies in all versions of PRIMER.<br> <br>Assemblies above the pelvis in this model are not affected, for example the assemblies making up the torso, arms and head each only have a single parent so they can be positioned using Rotate Angles or **Drag Assemblies** or **Move points** in PRIMER of any version. |
| --- |
| **![1](../Storage/primer-22-1/primer_links/sect_6/dummies/fig_posn_14.jpg)Drag Right Foot with middle mouse button**<br> <br>If any of the feet are dragged then the other foot gets dragged too.<br> <br>Because of their rotational restraints the head, torso and pelvis regions have remained upright. |
| **![1](../Storage/primer-22-1/primer_links/sect_6/dummies/fig_posn_15.jpg)Drag the Left Lower leg with the Right mouse button**<br> <br>The Right lower leg and the and left foot moves with the dragged assembly. |

#####  The characteristics of Drag Assembly mode

* **It is approximate**: movement is calculated using rigid body mechanics in an iterative scheme, and some small errors are inevitably generated. Using the default [Options](options-0.md#options) errors will be of the order of 1 part in 10,000, or around 0.2mm for a typical dummy model which, in engineering terms, is not significant. 
 
However Ansys LS-DYNA requires node pairs at joints to be coincident to a very tight tolerance, and the actions taken to achieve this when you  [Accept](nan) the positioned dummy are described [below](nan).
* **It considers** restraints on assemblies, or restrained points within them. You can switch restraints on/off at will during the positioning process, and indeed the "move to position, then clamp in place" process is the obvious way to work.
* **It is intuitive**: movement is a reasonably natural mixture of translation and rotation, more or less what one would get in real life from grabbing a limb and pulling it.

##### Using assembly to structure contact
 
In the example above the hands are fixed rigidly to the steering wheel, which prevents them from rotating and therefore forces the elbows out at an unrealistic angle.

| An alternative way of modelling the connection of the hands to the wheel is to define a contact between them and to turn off the fixity. This allows the hands to rotate on the wheel in a more realistic fashion and gives an altogether better final shape.<br> <br>Contact for dummy positioning is not a "true" contact using the \*CONTACT card, but rather a simplified version defined on the [assembly editing panel](assemblycreation-and-editing.md#edit_contact) as a "list of part sets contacted during positioning". Here the part set includes the steering wheel, and a box has been used to limit contact to just the section of the wheel near the right hand. A similar contact has also been set up for the right hand.<br> <br>![](../Storage/primer-22-1/primer_links/sect_6/dummies/fig_posn_9c.png) | ![](../Storage/primer-22-1/primer_links/sect_6/dummies/fig_posn_9b.png) |
| --- | --- |

![](../Storage/primer-22-1/primer_links/sect_6/dummies/fig_posn_9a.png)Compare the result with the final image from the example above. The positions of the arms and hands are more natural as they have been able to rotate on the wheel.
 
The disadvantage is that movement is much slower because of the need to compute contact, making it much harder to drag the dummy interactively when contact is used since response is so slow. For this reason contacts can be turned on/off via their [C] buttons in the "cont" column of the positioning panel.
 
However when positioning a dummy by specifying displacement at a point motion is driven by PRIMER itself and the result is acceptable.
 [Previous](rotate-angles-explicit-rotation-of-assemblies-about-their-connection-nodes.md)  |  [Next](move-points-free-movement-driven-by-updated-point-positions.md)