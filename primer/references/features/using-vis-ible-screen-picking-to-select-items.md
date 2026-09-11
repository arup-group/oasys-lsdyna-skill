###  Using Vis(ible) Screen-Picking to Select Items

| In addition to [Quick Pick](quick-pick-function.md#quickpick) operations, PRIMER allows multiple menus to be active concurrently, each of which may require a picking operation (e.g. Modify Part, Delete Element, etc).<br>
<br>As well as selecting items from a menu you may pick them from the screen using the mouse. Any permutation of explicit selection from the menu and screen-picking may be used, they are simply different ways of performing the same task.<br>
<br>When such a menu is invoked or brought to the front using the menu tabs, it automatically takes control of interpretation of screen-picking; this is indicated in the Quick Pick control. The user can cause any capable menu to control screen picking by clicking the white cross in the top-left of the menu. [Quick Pick](quick-pick-function.md#quickpick) control can be restored either by clicking the white cross in the top left of the graphics area, or from the drop-down in the Quick Pick control.<br>
<br>The mouse button during picking used is significant:<br>
<ul style="font-size: 14.6667px;"> <li>LEFT mouse button selects</li> <li>MIDDLE button rejects the most recent selection</li> <li>RIGHT mouse button deselects (the picked items are removed from the list of currently selected items)</li>
</ul>
<br>Mouse button usage is described in more detail [below](rejectingapplying-items-that-have-been-screen-picked.md#Rejectingitemsthathavebeenscreenpicked). | ![](../Storage/primer-22-1/primer_links/sect_2/images/fig_6_2_screen_pick.png) |
| --- | --- |

Screen-picking is always "live" in the graphics window once you have selected an object category that is capable of being picked, it is not necessary to select Vis explicitly, and it can be accomplished in a range of ways:

| "Scalar" picking of single items | Just click on the approximate centre of the item to select it. |
| --- | --- |
| "Rectangular Area" picking of a range of items | Click and drag out a rectangular area. Everything within the area is selected. |
| Within the Vis panel there are the following further screen-picking options: |
| All Visible | Will select automatically all "visible" items that are eligible. Note that "visible" in this context means what is displayed on the screen, but not necessarily what you can see. <br>Items hidden behind other items are still "visible", as are items off the border of the current window. A more precise definition of "All Visible" would be "things which would be visible in a wireframe plot autoscaled to fit in the current window". |
| **Screen Selection options**: |
| Area | Is an alternative way of defining a rectangular area by picking two points at opposite corners. Eligible items within the rectangle are selected. |
| Circle | Selects within a circular area. Click on the centre of the circle, drag out to define its radius and release to select eligible items within the circle. |
| Polygon | Selects within an arbitrarily shaped polygon. Select three or more points (up to a limit of 100) to define the polygon, and close it when complete. All eligible items within the polygon will be selected. <br>While the polygon may be any shape, and include concave sections, it should not be excessively complex; and it is also recommended that it should not have crossed edges since while these will work the algorithm used to distinguish "inside" from "outside" may become confused by them. |
| **Path Selection options**: |
| Line | This mode applies only to the picking of Shell Nodes or Shell Elements. Pick any number of Nodes/Shells in a Shell part. User selections are connected via a shortest path of adjacent entities with all path entities in between also selected. |
| Area | This mode applies only to the picking of Shell Nodes or Shell Elements. Pick any number of Nodes/Shells in a Shell part. <br>User selections are connected via a shortest path of adjacent entities with all path entities in between also selected.<br>User selections can be then used to create an enclosed polygon. The final selection will also contain entities within/outside that polygon. |
| **Feature Selection options**: |
| Feature Line (Li)<br>  and associated angle (Ang) | This mode applies only to the picking of 2D and 3D elements, and of nodes. <ul> <li>A single node or element is picked and its outward normal vector is computed. </li> <li>The pick is then propagated across the mesh of that element type so long as the difference in angle at a common edge between the outward normal of an element and its neighbour is not greater than the Feature Angle value. </li> </ul> <br>This has the effect of propagating a pick across a flat or (typically) gently curved surface, selecting all nodes or elements on that surface.<br> <br>More information on feature line picking can be found [here](feature-line-picking.md). |
| Feature Line Absolute (Abs) | This applies exactly the same logic as described above with the additional restriction that the angular difference between the outward normal of the original node/element and this one must also not exceed the feature angle. <br>This has the effect of limiting propagation over curved surfaces where the angular difference between adjacent elements may be small, but the overall surface curvature exceeds the specified angle. |
| **Other Selection options**: |
| Free Edge | This mode applies only to the picking of nodes in a Shell Part. Pick two nodes on a free edge. All the nodes situated in the edge and between the two nodes selected will be also be selected. |
| Hole | This mode applies only to the picking of nodes in a Shell Part. Pick one node on the edge of a hole formed by shell elements. All the nodes on the border of the hole will be selected. |

####  Path Line picking

![](../Storage/primer-22-1/primer_links/sect_2/fig_6_2_sp_pl.png)

This is a special mode in which user can keep picking Shell Nodes or Shell Elements and PRIMER will keep creating the shortest path between consecutive user picked entities with all path entities in between also selected.

##### Panel for Path Line Object Menu Selections

| ![](../Storage/primer-22-1/primer_links/sect_2/fig_6_2_pl_menu.png) | **Add to/Remove Pick List** | Adds/Remove all the highlighted entities to/from the Pick List. |
| --- | --- | --- |
| **Reject Last** | Rejects last selected entity and loses the last created path. |
| **Reject All** | Rejects all selections in the current path. |
| **Done Picking** | Closes the Path Line panel. |
| **Abort Picking** | Rejects all highlighted entities and closes the panel. |
| **Help** | Shows the help for this Path Line panel. |

#####  Path Line Example

PRIMER highlights entities joining the consecutive user picks via shortest path.

![](../Storage/primer-22-1/primer_links/sect_2/images/path_line_picks.png)
 
####  Path Area picking 
 
![](../Storage/primer-22-1/primer_links/sect_2/fig_6_2_sp_pa.png)
 
This is a special mode in which user can keep picking Shell Nodes or Shell Elements and PRIMER will keep creating the shortest path between consecutive user picked entities with all path entities in between also selected .

User selections can be then used to create an enclosed polygon. The final selection will also contain entities within/outside that polygon.

#####  Panel for Path Area Object Menu Selections

| ![](../Storage/primer-22-1/primer_links/sect_2/fig_6_2_pa_menu.png) | **Add to Pick List/ Remove Pick List** | Adds/Remove all the highlighted entities to/from the Pick List. |
| --- | --- | --- |
| **Cycle Area** | PRIMER cycles through and highlights all the potential areas of entities that are either enclosed within the boundaries of polygon or are enclosed by boundary of polygon and free edges of Model. |
| **Reject Last** | Rejects last selected entity and loses the last created path. |
| **Reject All** | Rejects all selections in the current path. |
| **Done Picking** | Closes the Path Selection panel. |
| **Abort Picking** | Rejects all highlighted entities and closes the panel. |
| **Help** | Shows the help for this Path Selection panel. |

#####  Path Area Example

PRIMER highlights entities joining the consecutive user picks via shortest path. Then closes polygon by calculating the shortest path between first and last user picks. And also highlights the entities within the polygon. 
 ![](../Storage/primer-22-1/primer_links/sect_2/images/path_area_picks.png)

####  Free edge picking

![](../Storage/primer-22-1/primer_links/sect_2/fig_6_2_sp_fe.png)

This is a special mode in which picking two nodes of an edge will result in the selection of all the nodes between them.

| Selection of N64 as Node 1 <br> ![](../Storage/primer-22-1/primer_links/sect_2/images/free_edge_start.png) | Selection of N228 as Node 2 <br> ![](../Storage/primer-22-1/primer_links/sect_2/images/free_edge_end.png) |
| --- | --- |

All the nodes on the free edge between N64 and N228 (shortest distance) are also selected.

####  Hole picking

![](../Storage/primer-22-1/primer_links/sect_2/fig_6_2_sp_h.png)

This is a special mode in which picking a node on the edge of a hole will result in the selection of all the nodes around the edge of the hole.

| Selection of N394 on the edge of the hole <br> <br> ![](../Storage/primer-22-1/primer_links/sect_2/images/hole_start.png) | All nodes round hole selected <br> <br> ![](../Storage/primer-22-1/primer_links/sect_2/images/hole_end.png) |
| --- | --- |

All the nodes on the edge of the hole are selected.

[Previous](the-options-popup-menu.md)  |  [Next](feature-line-picking.md)