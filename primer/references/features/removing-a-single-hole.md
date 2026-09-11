####  Removing a Single Hole

| ![](../Storage/primer-22-1/primer_links/sect_6/meshing/remove_hole.png)To remove a single hole toggle the Multiple button off (it is off by default)<br> <br>To remove a hole from a mesh pick a shell element next to the hole. PRIMER will then automatically select shells around the hole to remesh similarly to creating a hole. Add shells and Remove shells can be used to alter the selection.<br> <br>There are two ways that PRIMER can remove the hole. It can either just fill in the hole with new elements or it can completely remesh the area around the hole to remove the hole completely. This is controlled by the Remesh area around hole checkbox. If selected then the result is shown of the right hand image below. If not selected then by default the shells created in the hole are in the same part as the shells around the hole, but this can be altered with the Part for shells textbox. |
| --- |

Feature line limit can be used to stop automatic selection of shells which are beyond a certain angle. Its meaning is the same as [selection in object menus with feature lines](feature-line-picking.md#feature_angle).

| Original hole <br> <br> ![](../Storage/primer-22-1/primer_links/sect_6/meshing/remove_hole_1.gif) | Remesh area unset <br> <br> ![](../Storage/primer-22-1/primer_links/sect_6/meshing/remove_hole_2.gif) | Remesh area selected <br> <br> ![](../Storage/primer-22-1/primer_links/sect_6/meshing/remove_hole_3.gif) |
| --- | --- | --- |

If the surface that you are remeshing is flat then PRIMER will create the new shells on the flat surface. If the surface is curved then PRIMER will attempt to use the normals of the shells around the hole to make sure that the new shells that are created follow the curvature of the surface. This isn't always what you want. Selecting Use planar surface will force PRIMER to try to use a planar surface when creating shells. The planar surface will be the best 'fit' that can be created from the nodes on the edge of the hole.

When removing the hole PRIMER can optionally make a node at the centre of a hole. This may be useful if you want to make a beam or connection at the hole position. This is controlled by the Create node at centre of hole checkbox.

When you are happy with the properties pressing Apply will create a preview of the mesh that PRIMER will create. You can still change the properties and PRIMER will update the mesh interactively. To actually create the mesh press Confirm .

[Previous](remove-hole-from-mesh.md)  |  [Next](removing-multiple-holes.md)