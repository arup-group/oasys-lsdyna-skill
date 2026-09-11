###  ROTATE: Rotating by X, Y, Z

On entering ROTATE you must define:

* The objects to be rotated;
* The centre about which to rotate;
* either the rotation angles (**GLOBAL\_** option) or a single angle and a local axis ( **about\_vector\_** option)

Local axis of rotation may be defined by a vector &lt;x y z&gt; or two nodes.

When these have been entered press APPLY to make them take effect.

As with TRANSLATE when the rotation is applied the image is redrawn so that you can see what the result looks like, and you are given the options of accepting, rejecting or repeating the transformation before it becomes permanent.

****
 ![](../Storage/primer-22-1/primer_links/sect_6/orient/rotate_xyz.PNG)
 **** 

####  CENTRE: Defining the rotation centre

Instead of typing in an [x,y,z] coordinate you can use **Select** Centre to pick/select a node to be used as the rotation centre. The node's coordinate will be placed in the "centre" box for you.

For rotate and for scale, if a single part is selected the useful option centre @ part CofG will become active.

| ANGLES: Defining rotation angles  <br>As an alternative to typing in angles about the [x,y,z] axes you can use the ANGLES command to calculate the angle between 3 nodes, as shown in this figure.<br> <br>Pick, or type in the labels of, 3 nodes.<br> <br>The vectors N1N2 and N1N3 are computed, and then the angle between them.<br> <br>You can choose the 3D angle, or the projected value about any axes using **XY, ...Z**   **** as before.<br> <br>When the angle is satisfactory use OK to return to the main ROTATE box where you can then apply it. |
| --- |

| DRAG ROTATE Using the cursor  <br>As an alternative to specifying rotation angles you can "drag" the objects, about the defined centre, using the DRAG option shown in this figure.<br> <br>Place the cursor anywhere on the graphics screen, press the left mouse button and, keeping it depressed, move it until the desired position is reached, then release it. The image (or a subset of it if it is large) will move across the screen, and then be redrawn at the new position.<br> <br>Use APPLY to make the change permanent, or UNDO to reject it and return it to how it was before. (Using CANCEL also implicitly rejects any dragged rotations.)<br> <br>Dragging can only take place about one axis at a time, the default being global **X** as shown here. The centre of rotation may be typed in or set by a node pick/selection. The @ button will sketch the current centre.<br> ![](../Storage/primer-22-1/primer_links/sect_6/orient/rotate_drag.PNG) |
| --- |

The About line option will allow a rotational drag about an arbitrary line.

![](../Storage/primer-22-1/rotate_about_line.PNG)

[Previous](translate-shifting-by-dx-dy-dz.md)  |  [Next](reflect-reflect-about-an-axis.md)