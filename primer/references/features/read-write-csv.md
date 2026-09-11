#####  Read & Write CSV

The Read csv option allows you to define the belt path via a CSV file. The CSV input will contain the following entries for each path point separated by a comma:

X-Coord, Y-Coord, Z-Coord, NodeID, Fixity Strings, tnode1, trx1, try1, trz1, tnx1, tny1, tnz1, tnode2, trx2, try2, trz2, tnx2, tny2, tnz2, tpx1, tpy1, tpz1, tpx2, tpy2, tpz2, projection

The meaning of each entry is explained below:

| X-Coord, Y-Coord, Z-Coord | The (x,y,z) coordinates of the point |
| --- | --- |
| NodeID | The node label of the point if a node is used |
| Fixity Strings | Bitwise-encoded fixity and other point data (separated by colon ( **:**) sign)<br><br>Valid values - FIXED, KNOWN, RETRACTOR, B\_POST\_SLIPRING, FREE\_SLIPRING, RADIUS\_SLIPRING, TWIST, XSEC |
| tnode1 | Twist node N1 |
| trx1, try1, trz1 | Radial vector on side #1 of the point |
| tnx1, tny1, tnz1 | Normal vector on side #1 of the point |
| tnode2 | Twist node N2 |
| trx2, try2, trz2 | Radial vector on side #2 of the point |
| tnx2, tny2, tnz2 | Normal vector on side #2 of the point |
| tpx1, tpy1, tpz1 | Twist along the vector on side #1 of the point |
| tpx2, tpy2, tpz2 | Twist along the path vector on side #2 of the point |
| projection | Projection distance along radial vector from point |

![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/define_path_panel_csv.PNG)
Write CSV option allows you to write seatbelt path point information to a file in the same format as mentioned above.

Other rules regarding the CSV input are:

* All the information in one line in a CSV file corresponds to one belt path point.
* Only Node Coordinates or the Node Id are mandatory other values are optional.
* For most points it is not necessary to define data for side #2 as it is assumed to be the same as side #1. The exceptions are: at explicit sliprings, acute points, and where the spline shape of the path (red path vector) is changed.
* All the vectors ("Normal" to Belt axis and "Twist radial") are the direction cosines values.
* PRIMER will consider empty strings for any of the inputs as zero, except for the projection distance where an empty field means default projection distance.
* If a conflict is detected between the twist nodes and their corresponding twist vectors, the twist nodes will be used and the vectors will get overwritten. A message will be printed in the dialogue box if that happens.
* A comment line may be included anywhere in the file by starting the line with a **$** sign.

**Description of fixity strings** :

| **Name** | **Description** |
| --- | --- |
| B\_POST\_SLIPRING | There is a B-Post slipring at this point. |
| FIXED | Point is fixed |
| FREE\_SLIPRING | There is a free (eg pelvis) slipring at this point |
| RADIUS\_SLIPRING | There is radius meshed slipring at this point |
| KNOWN | The belt path is known to pass through this point |
| RETRACTOR | There is a retractor at this point |
| TWIST | Point has twist vectors or twist nodes defined |
| XSEC | There is a database cross section at this point |

**Sample CSV Format** :

![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/read_csv_sample.gif)

| The following table lists the colours used both in the path editor and for the graphics in the various path editing modes.<br> <br><br>|  | Path Colour |  |  |<br>| --- | --- | --- | --- |<br>| **INSERT** | Green | Picks nodes for point coords,or "at" an intermediate point. | Choose point to insert before / after |<br>| **MODIFY** | Blue | Left: Modifies X coord <br>Middle: " Y " <br>Right: " Z " | &lt;Not active&gt; |<br>| **CONTROL TWIST** | Cyan | Left on point pick handle twists path <br>Middle on pick handle skews the path (fixed points only) | &lt;Not active&gt; |<br>| **CONTROL PROJECTION** | Cyan | Left on point pick handle moves path along outwards vector <br>Middle on pick handle resets that path point to default. | &lt;Not active&gt; |<br>| **DELETE** | Red | Picks points to delete | Choose point to delete | |
| --- |
| INSERT mode ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/insert_2.png) <br>This mode is used to create new points, and works in two ways:<br> <br><br>| **I-Be** or **I-Af** | | Creates new points between existing path points either by screen-picking nodes or by typing in explicit coordinates. <br> <br> **I-Be** inserts a new point  ***Before***  the point selected in the path editor. <br> **I-Af** inserts a new point  ***After***  the point selected in the path editor. <br> <br>You can insert any number of points, insertion being terminated by changing to a different editor mode or exiting the editor. This mode is usually best for defining the initial shape of the path by picking existing nodes. <br> <br>The coordinates of the picked node are used, and the node itself is "remembered" for future reference during meshing or refitting. <br> <br>In this example the user has selected **I-Af** and then point 3, meaning that they are creating a new point 4 after point 3. | ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/insert_1.png) |<br>| --- | --- |<br><br> <br> <br>When picking points at nodes it doesn't matter that nodal coordinates lie on the neutral axis locations of shells: the path is projected outwards prior to fitting, then pulled back to the structure surface by the form-finding operation.. |<br>| --- | --- |<br>| **I-@P** | | Creates a new path point  ***At***  an existing intermediate point. <br> <br>Once you have defined at least two points the current path will be drawn on the screen as either a straight line or a spline fitted between the basic points, split into smaller sections as defined by the belt element length. <br> <br>If you wish to create a new basic path point at an intermediate position somewhere on this path you can use **I-@P** to do this: <br><ul> <li>Every intermediate point (at element length spacing) is shown as a green dot. </li> <li>Hovering the mouse near a dot will change it to red to signify which will be chosen. </li> <li>Clicking on the dot will create a new basic path point at that location. </li> </ul> | ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/at_pt_1.png) |<br>| --- | --- |<br><br> <br> <br>This image shows that the basic path points are drawn as blue diamonds, and you will see the row of green dots that show the interpolated belt path. Here the mouse has been hovered over a point roughly in the centre of the image. <br> <br>Points created this way will not be associated with nodes, they are defined solely by their coordinates. | |

| MODIFY mode ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/modify_1.png) <br>This mode permits point coordinates to be adjusted. You can do this in any permutation of the following three ways:<br> <br>***Note** : This is the original menu, the [Advanced editor mode](the-advanced-editor-mode.md#advanced_main)available in version 18 onwards gives a much superior way of modifying point locations.* |
| --- |
| <ol> <li>Use the popup menu in the &quot;Node&quot; column in the path editor to screen-pick or select a new node. <br> <br>This is the preferred method since the point will still have a node associated with it, which is valuable if a retractor or slipring are defined at that point since it determines clearly which (structural) node the element should be associated with. (Field SBRNID). It is also valuable at path end points where the belt is attached directly to structure since, again, it defines which node should be used. <br> <br>This is still true in the case of 2D belt meshes, as although sliprings, retractors and belt ends will all have at least two nodes nevertheless they can still be associated with the specific nodal location via a nodal rigid body or extra nodes on the parent rigid part. </li> </ol> | ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fig_7_2_3_2g1.png) |
| <ol> <li value="2">Over-type the point coordinates with new values. The new coordinates will be applied immediately, but note that the associativity between the point and the node originally used to pick it will be lost. <br> <br> <br> </li> <li>Drag points visually. Click on a path point with the relevant button (see below) and, holding that button down, drag the point to its new location. <br> <br> <table border="0" cellpadding="5" cellspacing="0"> <tbody><tr> <td> <em>Left </em>button </td> <td>: </td> <td>Drags in global </td> <td>X </td> </tr> <tr> <td> <em>Middle </em>button </td> <td>: </td> <td>Drags in global </td> <td>Y </td> </tr> <tr> <td> <em>Right </em>button </td> <td>: </td> <td>Drags in global </td> <td>Z </td> </tr> </tbody></table> <br>As with method 2 the association between point and its original definition node will be lost once its coordinate is updated. </li> </ol> <br>In all cases both the visible path and the relevant coordinate in the editor will be updated dynamically so that you can see what is happening. |

| Control Twist mode ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/twist_1.png) <br>![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/twist_mode.PNG)The orientation of the belt path, its "twist", is chosen initially by PRIMER to give what it believes to be the best fit. This is computed in two possible ways:<br> <br>**(1) "Local Normal" method.**<br><ul> <li>The outward normal of nearby structure elements is used at intermediate points, and at end points the most recent normal is extrapolated to give a consistent end section. <br> <br> </li> <li>If no nearby structure elements are found then the path is treated as lying approximately on the surface of a sphere with its centre at the average (central) coordinate of the &quot;structure&quot; nodes. <br> <br> </li> <li>Special rules apply to straight sections between two fixed points, where a &quot;best guess&quot; at the wanted path is adopted. </li> </ul> |
| --- |
| **(2) "Path Twist" method**<br><ul> <li>The twist is based on the natural curvature of the path. In mathematical terms the transverse vector (the plane in which the belt elements lie) is given by the cross-product of the two vectors meeting at a point. Local structure is ignored. </li> </ul> | ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/twist_3.png) |
| The method used to define the default twist is controlled in the [Fitting Options](fitting-options.md#fitting_options)panel.<br> <br>However in many cases these defaults are inadequate and it is necessary to adjust the twist of the belt path. |

| Twisting a point manually using the mouse  <br>![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fig_7_2_3_2g2.png)<br> <br>In "Control twist" mode each path point has a "twist handle" attached to it, and by clicking and dragging on that handle you can adjust the twist of the path at that point. The axis that is twisted depends on the mouse button used:<br><ul> <li>The <b>Left </b>mouse button alters the <b>radial </b>(outwards) vector </li> <li>The <b>Middle </b>mouse button alters the <b>transverse </b>(rotation about radial) vector. </li> <li>(The right mouse button is not used in this context) </li> </ul> <br>![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fig_7_2_3_2g3.png)<br> <br>Here the path at the lower (pelvis) slipring has been rotated to <br>a more realistic angle by rotating its radial vector:<br> <br>![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fig_7_2_3_2g4.png) |
| --- |

| RADIAL twist, imposed by the left mouse button, changes the direction of the radial (outward) vector, effectively twisting it about the long axis of the belt at that point:<br> <br>![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fig_7_2_3_2g4a.png)<br> <br>Radial twist can be applied at any path point. | TRANSVERSE twist, imposed by the middle mouse button, rotates the transverse mesh lines about the radial (outward) vector at that point.<br> <br>![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fig_7_2_3_2g4b.png)<br> <br>Transverse twist can only be applied at end points, retractor and slipring locations, and fixed points. |
| --- | --- |

| Reporting and cancelling twist at a point.  <br>![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fig_7_2_3_2g5.png)Once a point has been twisted away from its "natural" orientation PRIMER remembers this and shows it in two ways:<br><ol> <li>The colour of the twist handle on the plot changes from dark blue to light blue (compare the lower and upper images above). <br> <br> </li> <li>In the path editor a cross [X] is shown in the &quot;Twist&quot; column, see points 5 (intermediate) and 7 (slipring) in the image on the right. </li> </ol> <br>The twist can be adjusted further at any time by dragging the handle to a new position.<br> <br>To cancel twist at a point, resetting it to its default orientation, click on the [X] symbol in the path editor. ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/twist_2.png) |
| --- |

Fixed points and acute points will have two [X] buttons, see point #7 in this figure, and also two twist handles on the plot. This is because the path twist on either side is independently controllable at these points.

| Twisting a point using 2 nodes to define a vector  <br>![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fig_7_2_3_2g5c.png)As an alternative to dragging the twist handles using the mouse, which is an interactive-only process, you can define the twist vector at a point by defining two "twist nodes", which define a vector N1N2. This has two advantages:<br><ol> <li>Where you are trying to align the belt with an existing piece of mesh, typically at a slipring buckle, you can simply pick two nodes and the path alignment will be done for you, avoiding the need to line things up &quot;by eye&quot;. <br> <br> </li> <li>The process need not be interactive, and therefore is suitable for batch fitting. The coordinates of the nodes at the time of fitting will be used, so a script could modify the twist node coordinates if required between repeated fitting operations on an updated model. </li> </ol> |
| --- |

The following example illustrates how two twist nodes might be used to line up the belt path correctly at a slipring buckle prior to fitting a 2d belt.

| ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fig_7_2_3_2g5a.png)<br> <br>Here it can be seen that the belt path is centred correctly in the buckle, but that its mesh is skewed. | ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fig_7_2_3_2g5b.png)<br> <br>Here is the result of setting the two red nodes shown as "twist nodes: it is now correctly aligned.<br> <br>Note that the twist nodes do not locate the path point in space in any way, but just provide an orientation vector. |
| --- | --- |

The following rules apply to twist nodes:

1. Both nodes must be defined in order for the vector to be calculated and applied. If only one node is present then no action will be taken.
2. The twist nodes do  ***not***  define the path point position in any way, this is defined either by a position node nid , or by an explicit coordinate. The two twist nodes can be located anywhere in space (although they will usually be near the belt path) as they simply define an orientation vector. In addition the order in which the twist nodes is defined is not important as the direction of the vector is reversed automatically if required.
3. The way the vector is applied varies slightly depending upon whether the path point is a fixed end or an intermediate point. 
 
At fixed ends, including sliprings, the N1N2 vector is applied directly to become the path orientation at that point, permitting the belt path to be both twisted and skewed. This is equivalent to twisting the belt using a combination of both left mouse and middle mouse motions above. 
 
At intermediate points only the belt twist is updated with no skew being applied, ie the transverse mesh lines remain approximately at right angles to the belt path and the N1N2 orientation vector just defines the plane in which the belt path lies. This is equivalent to twisting the belt using the left mouse only.
4. Cancelling belt twist using the [x] button(s) in the belt path editor cancels belt twist, and hence also removes any twist nodes at a point. Similarly applying a manual twist using left or middle mouse buttons supersedes any twist applied using twist nodes, and also deletes them.
5. Twist nodes are "remembered" in the \*BELT cards written after \*END (see [Appendix E](e-seatbelt-tree-file-structure.md) ). Since the coordinates of the nodes  ***at the time of fitting***  are used to (re)compute twist vectors this provides a mechanism for defining model-specific belt twist in different models.
6. Twist nodes may be used at a slipring position, in which case they will determine the orientation of the slipring. If the slipring has been defined as being of the "B-Post" type then there is a potential conflict between the orientation as defined by the special B-Post logic and that defined by the N1N2 vector, in this situation the N1N2 vector "wins" and the B-Post logic is ignored, effectively treating the slipring as being "free".

| Control Projection mode ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/proj_1.png) <br>The way a belt is normally fitted is that a basic (line) path is defined using points located at nodes on the structure, these are projected outwards to give some clearance, and an initial 2d belt path is calculated .<br> <br>By default all points are projected out by the same amount, in this example the default is 35mm but this can be changed using [Point offsets](point-projection.md#point_offsets)in the [Fitting Options panel](fitting-options.md#fitting_options), and this is generally successful for adult dummies. However when fitting to more complicated geometries it can be necessary to adjust the locations of individual points in order to fit the path through holes and around obstacles.<br> <br>It is possible to change a point's position using the [Modify](%28DEFINE_%29%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20TRANSFORM.html#modify)mode above, but the disadvantages of that approach are two-fold: | ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/proj_mode.PNG) |
| --- | --- |

1. Moving a path point away from its original node "breaks" the association with that node, and if remeshing is to be performed when the dummy has been moved this can cause problems since the belt fitter may not know how to move that path point if it no longer knows about its underlying node. (It can interpolate movement from adjacent points defined by nodes, but this becomes increasingly unsatisfactory as these become more distant.)
2. Modifying a path point involves either typing in new coordinates, or using mouse buttons to drag the point down some combination of global X, Y and Z vectors, and it is often cumbersome to achieve the desired position by this method.

Control Projection achieves the same result by different means. Instead of changing the coordinates of the basic path point instead the distance by which this point is projected outwards to create the initial 2d fitting path is modified.

This retains the original node if defined, and it is generally easier to perform since the "Outwards" vector at a path point is usually the direction in which you need to adjust the position, so a single mouse-driven dragging operation will usually suffice.

| ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/proj_3.png) <br>Typical chest section of dummy | ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/proj_4.png) <br>Close-up of point #2 at shoulder showing the outward vector | ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/proj_5.png) <br>View of the same point from the side |
| --- | --- | --- |

In control projection mode the mouse buttons work as follows:

* Left button drags the belt path along the outwards vector
* Middle button restores projection at the point to the default value.

You can also type a projection distance directly into each point's button, or restore it to the default projection.

| In addition in all editor modes the popup menu for each point not only shows whether or not a point has a non-default projection set by adding a red "P" symbol, but also allows you to set and restore this directly.<br> <br>In this example point #3 has been given a non-default projection of 10mm. | ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/proj_6.png) |
| --- | --- |
| Control of point projection is new in PRIMER V14, and the projection distance is stored in the \*BELT cards written after \*END. Therefore if point projection is defined at any point the resulting keyout file will not read into an earlier version of PRIMER . If it is necessary to export such a deck to an earlier PRIMER version it will be necessary to set the following preference to the appropriate version:<br> <br>primer\*mdumm\_keyout\_format: V13|V12|V11 |

| DELETE mode ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/delete_1.png) <br>This mode lets you delete points. Either press the label button of the point to be deleted, or click on the point with the mouse (left button). With either method it is deleted immediately. |
| --- |

[Previous](defining-the-initial-path.md)  |  [Next](adding-sliprings-and-retractors.md)