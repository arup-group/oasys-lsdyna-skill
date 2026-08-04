###  SCALE: Scale by [Sx,Sy,Sz]

You can scale objects by independent factors about each of the [x,y,z] axes. To do this:

* Select objects as before;
* Define the coordinate to scale about.
* Define the factors for each of the [x,y,z] axes.
* Use APPLY to make it happen.

As before the image is drawn showing the new configuration, and you can accept, reject or repeat the transformation.

Negative factors are allowed, see the notes above on  **REFLECT**  .

****
 ![](../Storage/primer-22-1/scale_scaleby.PNG)
 **** 

####  CENTRE Defining a central coordinate to scale about.

Instead of typing in a coordinate you can use
Select  Centre to define a node whose coordinate will be used as the centre of scaling.

For rotate and for scale, if a single part is selected the useful option centre @ part CofG will become active.

####  What is and is not scaled

Scale factors can be different in each of [X,Y,Z] directions, which implicitly ties scaling to the global coordinate system and restricts it to spatial and directional quantities. There is no ambiguity where coordinates and vectors are to be scaled, but the issue of scalar length values is more difficult because they do not usually have an orientation.

For example scaling the thickness values T1 - T4 on a \*SECTION\_SHELL card would not be appropriate.

Therefore the general rule in PRIMER is that:

* Coordinates and vectors expressed in the global system  ***are***  scaled
* Single ("scalar") length values are  ***not***  scaled, however there are some exceptions: 

    * The "finite" lengths on \*RIGIDWALL cards (lenl, lenm, etc)  ***are***  scaled. See [Rigidwalls](rigidwall-defining-rigid-stone-walls.md#scaling)for details.

| DRAG: Dragging with the cursor.  <br>As an alternative to specifying scale factors you can "drag" the objects' scales, with respect to the defined centre, using the DRAG option shown in this figure.<br> <br>Place the cursor anywhere on the graphics screen, press the left mouse button and, keeping it depressed, move it until the desired size is reached, then release it. The image (or a subset of it if it is large) will expand or contract on the screen, and then be redrawn at the new position.<br> <br>Use APPLY to make the change permanent, or UNDO to reject it and return it to how it was before. (Using CANCEL also implicitly rejects any dragged rotations.)<br> <br>Dragged scaling can take place using any combination of **XYZ ... Z**   **** axis factors, and by default the factors about each axis are computed independently from the cursor movement in that axis as projected from the current view.<br> <br>This tends to give unsymmetrical scaling if more than one axis is in use, so you can "clamp" all the factors to have the same values using the **X=Y=Z** button: particularly useful when combined with **VECTOR\_XYZ** to expand or contract by a uniform amount in all three directions. |  |
| --- | --- |

[Previous](reflect-reflect-about-an-axis.md)  |  [Next](the-interpolate-command.md)