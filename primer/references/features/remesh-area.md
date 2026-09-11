###  Remesh Area

| The Remesh area function was completely rewritten for version 13 of PRIMER .<br> <br>To start the process PRIMER needs some shells to remesh. Use the Add shells and Remove shells buttons to add or remove shells to remesh. Both of these will map an object menu which will allow you to choose which shells to remesh. Use the Apply button in the object menu to add or remove them. | ![](../Storage/primer-22-1/primer_links/sect_6/meshing/remesh_area_panel_basic.png) |
| --- | --- |

| Once there are some shells to remesh the Apply button will become active.<br> <br>The target size for new shells is given with the Element size textbox. You can either type in the necessary size in the textbox or pressing Ave will use the average size of the selected shells as the target size.<br> <br>Shells can be added or removed as much as you like. Note that the shells do not have to form a single attached area. There can be several different areas of shells. When you are happy with the selection pressing Apply will take you to the next step. | ![](../Storage/primer-22-1/primer_links/sect_6/meshing/remesh_area_panel_shells_added.png) |
| --- | --- |

| ![](../Storage/primer-22-1/primer_links/sect_6/meshing/remesh_area_edges.png)To illustrate some of the remeshing features we will show an example of remeshing the top part of a component with a finer mesh. The mesh on the right has an average size of about 10mm. We want to remesh it with a size of 6mm. <br>To start the meshing process PRIMER looks at the selected shells to find any free edges and edges which are shared by other elements.<br> <br>The selected shells are sketched (shown in black in the image on the right).<br> <br>Edges that are shared with other elements are shown in red and a red blob is drawn for each node that PRIMER must keep to maintain the mesh connectictivity.<br> <br>Free edges are shown in blue. PRIMER will look along the free edges and anwhere where two adjacent free edges have an angle greater than Fixed point angle a fixed node will also be added to ensure that any sharp edge edges are maintained. In the image on the right these are shown as blue blobs. <br>If a new value is given for Fixed point angle then PRIMER will recalculate and redraw as required. |
| --- |

| ![](../Storage/primer-22-1/primer_links/sect_6/meshing/remesh_area_feature_lines.png)By default PRIMER will only preserve the edges of the mesh. There may be feature lines on the mesh where you want to ensure that nodes are created.<br> <br>The Feature line limit tells PRIMER to look for any feature lines in the selected shells that have an angle greater than feature line limit. If it is turned on by ticking the checkbox then PRIMER will show the feature lines in green. Where feature lines intersect PRIMER will also add fixed points (shown as green blobs). The image on the right shows the feature lines found with an angle of 20 degrees. |
| --- |
| If a new value is given for Feature line limit then PRIMER will recalculate and redraw as required.<br> <br><br> ![](../Storage/primer-22-1/primer_links/sect_6/meshing/remesh_area_panel_fixed_point.png) |

| ![](../Storage/primer-22-1/primer_links/sect_6/meshing/remesh_area_free_point.png)It is also possible to add extra fixed points and free edges to the mesh that should be preserved. To do this use the Fixed points and Feature lines tools. The tool which is currently selected is shown in green.<br> <br>The Fixed points tool has Node , Edge and Free options. In the image above the Node tool is active. <br> Node allows a fixed point to be added/removed on an existing node. <br> Edge allows a fixed point to be added/removed on an existing element edge. <br> Free allows a fixed point to be added at a free location on an existing shell. <br> Fixed points that have been added manually are shown as cyan blobs. |
| --- |
| ![](../Storage/primer-22-1/primer_links/sect_6/meshing/remesh_area_panel_feature.png) <br>The Feature lines tool has Single and Feature options. <br> Single allows a feature line to be created on a single element edge. <br> Feature allows the free edge to propagate until the end of the feature is found. |

To add a fixed point left click with the mouse where you want the fixed point to be created. 
To remove a fixed point right click with the mouse on the fixed point you want to remove. Only manually added fixed points (shown in cyan) and fixed points added by PRIMER on free edges (shown in blue) can be removed.

In the image above there is a Free fixed point in the middle of the component and there are two Node fixed points. PRIMER will ensure that nodes are created where there are fixed points.

To add a feature line left click with the mouse on an element edge where you want the feature line to be created. 
To remove a feature line right click with the mouse on the feature line you want to remove. Only manually added feature lines (shown in cyan) can be removed.

Lock allows you to lock a mesh on a free edge/feature line. This will ensure that the original nodes are maintained. This may be useful to keep nodes on hole boundaries that are used in nodal rigid bodies or connections. A locked edge will be drawn in red with red blobs for the fixed nodes.

In the image above there are feature lines on 2 element edges. PRIMER will ensure that nodes are created along feature lines.

| ![](../Storage/primer-22-1/primer_links/sect_6/meshing/remesh_area_mesh_sizes.png) <br>Once you have created any Fixed points and Feature lines that you need in the mesh and set the Element size to the target mesh size (6mm in this example) press Apply and PRIMER will move onto the next stage.<br> <br>PRIMER will look at the free edges and feature lines that you have selected and choose how many nodes to create on them to achieve the target mesh size. A magenta + symbol will be shown where each node will be created and then number of elements that will be created between fixed points on a free edge is shown as a magenta number.<br> <br>To increase the number of elements created along a free edge left click with the mouse on the number. <br>To decrease the number of elements created along a free edge right click with the mouse on the number. <br> PRIMER will adjust the mesh density along that free edge.<br> <br>If you want to go back and add some more fixed points and/or feature lines press Reject . <br>Once you are happy with the mesh density then press Apply to preview the mesh. |
| --- |

| ![](../Storage/primer-22-1/primer_links/sect_6/meshing/remesh_area_meshed.png) <br>The preview of the mesh is shown in blue.<br> <br><br> <br>If you are happy with the mesh press Confirm to finalise the mesh. <br>If you want to go back and change the mesh density or add fixed points/feature lines press Reject .<br> <br>It can be difficult to see the new mesh so the Toggle mesh visibility button can be used to toggle between both meshes, the original mesh and the new mesh. |
| --- |
| ![](../Storage/primer-22-1/primer_links/sect_6/meshing/remesh_area_panel_confirm.png)It can be difficult to see the new mesh so the Toggle mesh visibility button can be used to toggle between both meshes, the original mesh and the new mesh. |

| Original mesh shown after pressing Toggle mesh visibility button once<br> <br><br> ![](../Storage/primer-22-1/primer_links/sect_6/meshing/remesh_area_original_mesh.png) |
| --- |
| New mesh shown after pressing Toggle mesh visibility button again.<br> <br><br> ![](../Storage/primer-22-1/primer_links/sect_6/meshing/remesh_area_new_mesh.png) |

| When **Preserve elements around hole** option is turned ON, PRIMER will preserve all the elements while remeshing which are present immediately around hole. By specifying 'Max hole size' user can control which hole elements should be preserved. Edges of all such elements will be drawn in cyan colour to represent that those edges will be preserved. Free edges will still be drawn in blue. | ![](../Storage/primer-22-1/remesh-area-2022-12-09-1.png)<br><br>![](../Storage/primer-22-1/remesh-area-2022-12-09-2.png) |
| --- | --- |

####  Remesh muliple area

PRIMER allows you to select multiple zones to re-mesh using Area Remesh at the same time instead of selecting one by one.

Use Add shells to select multiple zones either using screen pick or directly from the object menu.

Use Remove shells to remove shell from the selected zones. Once you are happy with the selection, hit Apply and continue with Remesh process as explained in the previous section.

| ![multi_panel](../Storage/primer-22-1/primer_links/sect_6/meshing/remesh_multi_1.png) |
| --- |
| ![remesh_multi2](../Storage/primer-22-1/primer_links/sect_6/meshing/remesh_multi_2.png) |

In version 17 onwards, the visibility of elements is maintained after area remesh.

Area remesh also recognizes internal part boundaries.

If the selected shells have internal boundaries (belong to different \*PARTs) they are treated in the same way as feature lines and shown in CYAN colour after the selection.

| ![remesh_multi_4](../Storage/primer-22-1/primer_links/sect_6/meshing/remesh_multi_4.png) |
| --- |
| ![remesh_multi_5](../Storage/primer-22-1/primer_links/sect_6/meshing/remesh_multi_5.png) |
| ![remesh_multi_6](../Storage/primer-22-1/primer_links/sect_6/meshing/remesh_multi_6.png) |

[Previous](removing-multiple-holes.md)  |  [Next](cobweb-mesh.md)