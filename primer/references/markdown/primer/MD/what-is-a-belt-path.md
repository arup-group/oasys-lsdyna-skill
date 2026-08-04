####  What Is a Belt "Path"?

A "path" is a connected set of 2 or more points which define an initial, crude line for the belt.

Each point is simply an [x,y,z] location in space, and has no structural significance: it is used solely to define an initial shape for the belt path. It is normal practice to locate path points at nodes, whereupon the points use the coordinates of those nodes, however points may also be located in "thin air" and not at a nodal location. A point may also be located initially at a node, then have its coordinate updated manually, which "breaks" its association with the node. Locating points at nodes has advantages when dummies are repositioned, since the path point coordinate is updated to the new nodal position. This is covered in more detail in [Auto-Refit](auto-refit-refitting-a-belt-automatically-when-the-dummy-moves.md#refit)below.

Paths have the following rules:

* A path may contain any number of points, and by default all points except the two ends are free to move. Any intermediate point may be fixed, meaning form-finding won't move it.
* A path consists of one or more segments. A segment is a path section of at least 2 points, and is demarcated by its end points being Fixed , Acute , Slipring or End points. Each segment is treated separately for both form-finding and subsequent meshing.
* If two adjacent points are fixed the path segment between them is assumed to be straight and will not move during fitting.
* At each unfixed point the adjacent lines must form an angle greater than the current "acute" angle in order for the path to be continuous. If an angle less than this is found the point will be designated automatically as Acute , forming a break between the segments on either side. The default "acute" angle is 90 degrees, but when meshing complicated geometries it can be convenient to reduce this.

Path points may be have one or more of the following attributes:

| The following attributes may be defined by the user. (2nd column shows suffix used in plots) |
| --- |
| Known | K | The belt is "known" to pass through this point, and this acts as a constraint upon form-finding which will make the centreline of the pass go through the point. |
| Fixed | F | A designated "fixed" point that demarcates the ends of any attached segments. The belt path is discontinuous at this point. |
| Acute | A | If an otherwise free intermediate path point has an "acute" angle (by default &lt; 90 degrees) between adjacent segments then PRIMER automatically defines the point as "Acute". This implicitly fixes it and creates a break between the adjacent segments. |
| End | E | Both ends of the path unless a Retractor has been defined. "End" points are implicitly fixed. |
| Retractor | R | A retractor will be created at this point. This is only legal at path end points, and the presence of a retractor supersedes the automatic "End" definition. |
| Slipring |  | A slipring will be created at this point. This is only legal at intermediate path points, and a slipring implicitly "fixes" the point and supersedes any "Fixed" or "Acute" definition. PRIMER V13 onwards has three types of slipring available: <br> <br><br>| **Type** | **Suffix** | **Description** |<br>| --- | --- | --- |<br>| **Free** | **S** | No constraint on orientation, which defaults to the average of the two path segments meeting at that point. |<br>| **B-Post** | **B** | Presumes that one side will be a straight stretch attached directly to a retractor, and constrains rotation to be about an axis normal to the notional B-Post |<br>| **Meshed** . explicitly meshed radius | **M** | As a free slipring, but instead of using \*ELEMENT\_SEATBELT\_SLIPRING it meshes the geometry explicitly around a user-defined radius using short elements. | |
| Cross- <br>section | X | A \*DATABASE\_CROSS\_SECTION definition will be created at this point. This is legal at any point on the path including at sliprings, retractors and ends. In the case of intermediate fixed points, typically sliprings, two sections will be created: one on each side of the point. |
| Projection | P | The point has been assigned a non-default projection down the "outwards" vector. See [Control Projection mode](read-write-csv.md#proj)below. |
| The following attributes are assigned automatically by PRIMER unless a user-defined attribute from the list above supersedes them. |
| Unfixed | U | This is the default for intermediate path points with obtuse angles, which are free to move during form-finding. |
| Acute | X | If an otherwise free intermediate path point has an acute angle (&lt; 90 degrees) between adjacent segments then PRIMER automatically defines the point as "Acute". This implicitly fixes it and creates a break between the adjacent segments. |
| End | E | Both ends of the path unless a Retractor has been defined. "End" points are implicitly fixed. |
| **Fully meshed sliprings.** |
| Unfixed | U | | ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fig_7_2_3_2d1.png) | If the mesh is to be continuous through the slipring, meshed explicitly rather than using a "meshed slipring", then:<br><ul> <li>Several path points will be required to give the initial path round and through the slot. </li> <li>These will all be &quot;unfixed&quot; </li> <li>It may be necessary to reduce the current &quot; <a href="handling-acute-points.md#handling_acute">acute </a>&quot; angle to something less than 90 degrees in order to prevent the initial shape of the path being &quot;broken&quot; where it negotiates the tight curvature required.</li> <li>Note that from v20.0 onwards, you can use the &#39;Adjust&#39; option in the &#39;Explicit slipring&#39; panel to effortlessly adjust the initial path through the slot of a shoulder slipring by simply creating a single unfixed point near the slipring bolt (see <a href="explicit-slipring-panel.md#explicit_slipring">Explicit Slipring Panel</a>).</li> </ul> <br>Meshing explicit sliprings and buckles is covered in ["Using radiused sliprings"](using-primer-s-radiused-meshed-sliprings.md#primer_radiused)below. |<br>| --- | --- | |

[Previous](2-fit-creating-a-belt-path.md)  |  [Next](creating-a-belt-path.md)