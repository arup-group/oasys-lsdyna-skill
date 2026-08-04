###  Mesh Geometry

Now in version 16 PRIMER has ability to mesh the selected surface into a single meshed part. For example the image below shows 12 surfaces that we want to mesh. Each of the 12 surfaces will be meshed together so there will be no nodes on all of the shared surface edges.

![](../Storage/primer-22-1/primer_links/sect_6/meshing/mesh_geometry1.png)

| ![panel1](../Storage/primer-22-1/primer_links/sect_6/meshing/mesh_geometry_panel1.png) <br>The geometry meshing panel is available in Mesh tools under the Mesh popup button.<br> <br>Element size will be the target element size for the generated mesh. <br> Part is the part ID for elements to be created in. <br> Fixed point angle specifies the angle at which fixed points will be created on the boundary. For example a flat rectangular surface has 4 corners and the angles at these corners are 90 degrees. Fixed points ( PRIMER will ensure than a node is created at that point) on the mesh will be created at these corners if the Fixed point angle is less than this.<br> <br>Vertex tolerance specifies the tolerance to find matching vertices in the selected surfaces. It is not available at first. After selecting the surfaces and followed by "Apply" on the selection panel, vertex tolerance will become active. In case there are minor gaps between the selected surface, provide a relevant Vertex tolerance value to perform matching. The maximum tolerance value which can be specified is controlled by the minimum surface length in the selected surfaces.<br> <br>Join surfaces is ticked on by default. This will allow to mesh selected surfaces into a single meshed part. If this option is turned off, each of the selected surfaces will be meshed independently from the others so there will be nodes on all of the surface edges. |
| --- |

Select the surface(s) that you want to mesh in the object menu (by either picking the surfaces or selecting in the object menu) and press Apply in the object menu. PRIMER will then show the surfaces that will be meshed together with Grey line boundaries and fixed points with Grey circles. Blue line edges between surfaces will indicate that the surfaces will not be joined due to gap/intersection between the selected surfaces. Free edges are also indicated by Blue line.

![geom2](../Storage/primer-22-1/primer_links/sect_6/meshing/mesh_geometry2.png)

After selecting the surfaces, feature line/points and vertex tolerance can be defined. Feature line and points insure that node will be created on the specified line and points while meshing. Select Join to select feature line and Vertex to define points. Selection is made using left click on the mouse and right click on mouse is used to deselect. If you wish to select multiple feature lines/points, drag a box in the graphics area using left mouse click. You can drag a box in the graphics area using right mouse click to deselect multiple feature lines/points. Selected feature lines and points are displayed in Magenta.

![panel2](../Storage/primer-22-1/primer_links/sect_6/meshing/mesh_geometry_panel2.png)

![geom3](../Storage/primer-22-1/primer_links/sect_6/meshing/mesh_geometry3.png)

In case there are minor gaps between the selected surface, provide a relevant Vertex tolerance value to perform matching. For example the image below shows 30 surfaces that we have selected. A default tolerance of 1.0E-3 is used to do matching. The surfaces which are matched have Grey shared edges. The one which are not matched due to gap like Red and Yellow surfaces have Blue boundaries. There is a gap of 7.48E-2 between Red and Yellow surface. Enter 7.5E-2 as a Vertex tolerance and hit Restart. Now these surfaces are matched properly.

![panel4](../Storage/primer-22-1/primer_links/sect_6/meshing/mesh_geometry_panel4.png)

![mesh6](../Storage/primer-22-1/primer_links/sect_6/meshing/mesh_geometry6_1.png)

![panel5](../Storage/primer-22-1/primer_links/sect_6/meshing/mesh_geometry_panel5.png)

![mesh6_2](../Storage/primer-22-1/primer_links/sect_6/meshing/mesh_geometry6_2.png)

| Once the surfaces have been selected and a part ID is given the Apply button will become active.<br> <br>If you press it then PRIMER will show a preview of the mesh that will be generated.<br> ![panel3](../Storage/primer-22-1/primer_links/sect_6/meshing/mesh_geometry_panel2.png) |
| --- |

![mesh4](../Storage/primer-22-1/primer_links/sect_6/meshing/mesh_geometry4.png)

| ![panel3](../Storage/primer-22-1/primer_links/sect_6/meshing/mesh_geometry_panel3.png)At this point you are free to change the element size, part ID or fixed point angle.<br> <br>The mesh can be cancelled by pressing Reject .<br> <br>Once you are happy with the mesh press Confirm to create it. |
| --- |

![mesh5](../Storage/primer-22-1/primer_links/sect_6/meshing/mesh_geometry5.png)

[Previous](create-tetrahedron-mesh.md)  |  [Next](meshing-limitations.md)