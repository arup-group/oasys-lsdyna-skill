####  Drag Assemblies: Free Dragging of Assemblies

![](../Storage/primer-22-1/primer_links/sect_6/mechanism/mode_2.gif)
 
In Drag Assemblies mode the positioning panel changes.
 
Each assembly is still shown as a row, but now:
 
* Clicking on the "name" button brings up the assembly editing panel [as above](assembly-creation-and-editing.md#edit_assembly).
* You can select the degrees of freedom to be restrained (locked) during positioning for each assembly. Restraint acts in the coordinate system of the assembly (if defined), otherwise in the global system.

Restraints shown in blue are in the global system, those in green (here "Link front left") are in the local system of the assembly.
 
Restraints can be set and unset at any time during positioning.
 ![](../Storage/primer-22-1/primer_links/sect_6/mechanism/fig_12.gif)
 
#####  An example of Drag Assemblies free dragging.

The following sequence of images shows how this might be used in practice. In this example the dummy has been positioned in the seat, with hands attached to the steering wheel and feet to the pedals. Both hands and feet are fully restrained in all degrees of freedom, the torso, thorax and head are restrained against all rotations and also Y (out of plane) translation.

The user has clicked on the lower torso with the left mouse button, so the whole dummy is selected for movement, and drags it progressively further forwards. This sequence would be carried out in a single operation, and for this dummy the drag occurs in near real-time on a modern desktop computer.

| ![](../Storage/primer-22-1/primer_links/sect_6/mechanism/pos_1.jpg) | ![](../Storage/primer-22-1/primer_links/sect_6/mechanism/pos_2.jpg) |
| --- | --- |
| **Initial condition** .<br> <br>The user is about to click on the seat cushion (blue) and move it up and forward | **In progress.**<br> <br>The seat has to rise upwards on its links in order to move forwards |
|  |  |
| ![](../Storage/primer-22-1/primer_links/sect_6/mechanism/pos_3.jpg) | ![](../Storage/primer-22-1/primer_links/sect_6/mechanism/pos_4.jpg) |
| **Further progress.**<br> <br>The seat has made progress forwards, rotating on its fore and aft links. | **Final position.**<br> <br>The seat has come back down again to achieve its final forwards position. |

[Previous](rotate-angles-rotation-of-assemblies.md)  |  [Next](move-points-movement-driven-by-updated-point-positions.md)