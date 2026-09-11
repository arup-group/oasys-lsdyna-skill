###  TRANSLATE: Shifting by [dx,dy,dz]

On entering TRANSLATE you must first select the objects to be moved, then

* enter a global translation vector [X, Y, Z]
* define a vector n1-&gt;n2 and a distance
* define a plane with 3 nodes (or pick a shell) and a distance for normal projection.

APPLY will update the nodal coordinates.

When a transformation is applied the image is redrawn so that you can see what the result looks like, and you are given the options of accepting, rejecting or repeating the transformation before it becomes permanent.

If you reject an orient, the nodal coordinates are restored from a backup cache, so no rounding error is incurred.

 ![](../Storage/primer-22-1/primer_links/sect_6/orient/fig_6_3_1a_new.gif)

**INTERPOLATE** is described in [section below](the-interpolate-command.md#635TheINTERPOLATEcommand).

| Alternative ways of defining a translation distance.  <br><br>| N1 -&gt; N2 Using the vector between two nodes.  <br>In this method you select two nodes: either by screen-picking them or by typing their labels into the relevant boxes in format M&lt;model number&gt;/N&lt;node label&gt;. Alternatively, nodal coordinates may also be specified directly. The coordinates of the second node may optionally be kept as the default value of (0, 0, 0) thereby permitting easy translation of entities to the origin. The vector is computed from the coordinates of N2 - N1 and the distance set.<br> <br>You can choose the degrees of freedom of this vector to use. By default  **VECTOR\_XYZ**  is in force, meaning all of the [x,y,z] components, but you can reduce this to two or one component only using XY, ... Z.<br> <br>When you have obtained the desired vector use OK to return to the main TRANSLATE panel, where you can then APPLY it.<br> <br><br> ![](../Storage/primer-22-1/primer_links/sect_6/orient/fig_6_3_1b.gif) |<br>| --- |<br>| VECTOR Using DEFINE_VECTOR(s)  <br>In this method you select a defined VECTOR from the object menu. Alternatively, the head and tail coordinates may also be specified directly. The head coordinates may optionally be kept as the default value of (0, 0, 0) thereby permitting easy translation of entities to the origin. The vector is computed from the head and tail coordinates as well as the distance set.<br> <br>You can choose the degrees of freedom of this vector to use. By default  **VECTOR\_XYZ**  is in force, meaning all of the [x,y,z] components, but you can reduce this to two or one component only using XY, ... Z.<br> <br>When you have obtained the desired vector use OK to return to the main TRANSLATE panel, where you can then APPLY it. | |
| --- |

![](../Storage/primer-22-1/primer_links/sect_6/orient/fig_6_3_1b_vec.gif)

| NORMAL TO PLANE  <br>Select the items to translate, and click on the NORMAL\_TO\_PLANE option.<br> <br>Define the plane by picking on 3 nodes and set the translation distance.<br> <br>Use OK to return to the main TRANSLATE panel, where you can then APPLY the orient.<br> <br><br> ![](../Storage/primer-22-1/primer_links/sect_6/orient/fig_6_3_1bb.gif) |
| --- |

| Translate Using Contact  <br>With this function selected parts (typically an impactor or barrier model) may be translated along a defined slide vector until they are brought into position or depenetrated (if initially penetrating).<br> <br>Contact part(s) on the main model (typically the vehicle) must be selected from the object menu of parts/part sets (the target side). The orientee items and the part do **not** need to be in the same model as this function has special logic to create contacts across models.<br> <br>If initial penetration is detected, items will be moved *against the direction of slide vector* until depenetrated. If not, they will be moved *in the direction of the slide vector* .<br> <br>The increment for each iteration may be set by the user, although the automatic method should work for most models.<br> <br>Add Gap option will impose a final translation against the direction of the slide vector.<br> <br>The default contact method is AUTOMATIC\_SURFACE\_TO\_SURFACE. However if the target (reference) side contains beam parts (excluding spotwelds) an AUTOMATIC\_GENERAL single surface contact will be used with additional logic to exclude self contact between parts of the target side.<br> <br>Green Sk button will provide red (orientee tracked parts ) / green (target reference parts) plot to show the contact that will used.<br> <br><br> ![](../Storage/primer-22-1/primer_links/sect_6/orient/tr_contact.gif) |
| --- |

| DRAG TRANSLATE Using the cursor to "drag" objects.  <br>Click down the left mouse button at any point on the screen (it's not related to the object) and drag it in the desired direction. The object, as a reduced set of vectors if it is large, will follow the mouse across the screen, stopping when you release the mouse button.<br> <br>Then use APPLY to accept the transformation, or UNDO to reject it and restore the status quo ante.<br> <br>Drags take place in the plane of the screen, so the actual [x,y,z] vector will depend on the current view. It is strongly recommended that you use one of the XY ... Z options to limit object motion to either a plane or a single vector.<br> <br><br> ![](../Storage/primer-22-1/primer_links/sect_6/orient/fig_6_3_1c.gif) |
| --- |

The motion may be limited to an arbitrary vector by switching to Along line mode. The vector may be typed in, defined by 2 node picks or the normal of a picked shell.

 ![](../Storage/primer-22-1/primer_links/sect_6/orient/fig_6_3_1d.gif)

On completion of drag, the new position may be accepted or rejected.
 [Previous](options-for-orient.md)  |  [Next](rotate-rotating-by-x-y-z.md)