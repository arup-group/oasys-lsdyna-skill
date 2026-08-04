###  Dragging the Cut-Section
 
![](../Storage/primer-22-1/dragging-the-cut-section-2022-08-03.png)Once the cut-section has been defined it can be moved to a new position and orientation by dragging with the mouse.
 
Drag (D key) Either clicking on the button, or using the D keyboard short-cut invokes this mode.
 
The Cut-section panel acquires control of the mouse (the cursor symbol changes to "sect drag" to signify this) and the mouse buttons work as follows:

| Mouse button | Cursor Symbol | Action |
| --- | --- | --- |
| Left | Tz | Translates the plane in the normal (local Z) direction |
| Middle | Rx | Rotates the plane about its local XX axis |
| Right | Ry | Rotates the plane about its local YY axis |

| More drag options...<br> <br>This gives access to a more complex set of options for dragging the section. You need to choose:<br> <ul style="font-size: 14.6667px;"> <li>Drag mode: either translate or rotate</li> <li>Drag coordinate system: section local or global</li> </ul> <br>Mouse buttons then translate/rotate in/about axes:<br> <br>Left button : Tx / Rx<br>Mid button: Ty / Ry<br>Right button : Tz / Rz | ![](../Storage/primer-22-1/primer_links/sect_6/cutsect/fig_12.gif) |
| --- | --- |

#### How mouse motion is interpreted when dragging 
 
In most cases the mouse motion is projected onto the section axis to be dragged, as shown on the screen, giving an intuitive result as if you had grabbed the section with the mouse and dragged it.
 
However this method fails when the section axis to be dragged points directly in or out of the screen since the dot product of its vector (screen Z) with mouse motion (screen XY) is zero. Therefore when the axis to be dragged lies within approximately 1 degree of screen +/-Z then an alternative method is used:
 
* +ve mouse motion in screen X or Y equates to +ve motion down the section drag axis.
* -ve mouse motion gives the opposite effect.

Put more simply: in these cases mouse motion to the right (+X) or up (+Y) results in +ve motion down the section axis, and left (-X) or down (-Y) gives -ve motion.
[Previous](cutting-switch.md)  |  [Next](definition-method.md)