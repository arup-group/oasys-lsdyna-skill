###  Create Geometry from Mesh

| ![](../Storage/primer-22-1/primer_links/sect_6/meshing/mesh_to_surf1.png) <br>To fit a NURB surface to a mesh, Mesh-&gt;surf under Mesh Tools opens a panel as shown on the right. This allows you to fit geometry surfaces to a selection of shells, which can be done in the object menu by parts, shell sets or shells directly. If the IGES output option is toggled before clicking Fit surface , an IGES file containing all surfaces created in this operation is written. |
| --- |

| Surfaces can be fitted in two different modes, which are illustrated in the figures below. You can choose to create One surface per part of the selection (left) or a Surface to each single shell (right), where different colours indicate different surfaces. The latter method creates a linear NURB surface with 2 by 2 control points on the corners of each shell in the selection. This typically creates a large number of small surface pieces, but this is robust for all types of shell selections. |
| --- |
| | ![](../Storage/primer-22-1/primer_links/sect_6/meshing/mesh_to_surf2.png) | ![](../Storage/primer-22-1/primer_links/sect_6/meshing/mesh_to_surf3.png) |<br>| --- | --- | |

When fitting one surface to a part, a reference plane is fitted to the part using a principal component analysis on the nodal coordinates. The method requires that the linear projection of the part to its reference plane hasn't got any overlaps. This condition is given for "flat" parts like windows or doors of a car. Whenever you attempt to fit a surface to a part not satisfying this restriction, e.g. to a tyre or a bumper, this part is skipped and you will get a warning that the selection of shells is too curved.
There is a threshold for the inclination of a shell to the reference plane, which is set to 89.0 degrees by default. The closer the angle specified for Max. inclination is to 90 degrees, the fewer parts are rejected as too curved, but this may compromise the quality of the surfaces.

It is also possible to split up too curved parts such that PRIMER creates several surfaces for them. Unless fitting a surface to each single shell, you will have to specify the shells for each surface piece manually. This can be done by selecting shells or shell sets in the object menu.

| In exceptional cases the reference plane fitted by the aforementioned principal component analysis is not optimal for the algorithm. If the result is unsatisfactory but you think that the selected shells of the part do project onto a plane without overlap, you can use the Specify normal option and type the normal vector of the desired plane into the text box.<br> <br>All surfaces created by these functions will be NURB surfaces whose Degree can be set to 1 (linear), 2 (quadratic) or 3 (cubic) for both parametric coordinate directions. |
| --- |

[Previous](cobweb-mesh.md)  |  [Next](mesh-morphing.md)