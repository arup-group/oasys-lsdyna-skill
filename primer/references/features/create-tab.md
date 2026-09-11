####  Create Tab

The Create tab, shown in the image to the right, is used to create new morph boxes. To create a new morph box you must specify the Nodes to be affected, the coordinate system the box is oriented in, and the numbers of morph points that define the box in each coordinate direction.

Affected Nodes can be selected via Part, Shell, Solid, Node, or Entity type. The coordinates of the nodes will change in general, but the topology of the elements will remain the same during morphing. Morph boxes are created as bounding boxes around the selected nodes, though each side of the box is limited to a minimum length. This length can be controlled via the Morph options panel, accessed by the Morph options button.

The orientation of a morph box is defined by the coordinate system chosen: Global or Local. The faces of a morph box are created in the XY, XZ, and YZ planes of the chosen coordinate system. If Local is selected, the coordinate system can be defined in one of two ways:

* 3 Nodes : selecting three nodes. Node 1 gives the origin of the coordinate system. The vector taken from Node 1 to Node 2 defines the local X direction. Finally, Node 3 is a point in the local XY plane (not on the X direction vector).
* Csys : selecting a \*DEFINE\_COORDINATE\_SYSTEM.

 ![](../Storage/primer-22-1/primer_links/sect_6/mesh_morphing/mesh_morphing_create.png) 
By default, morph boxes contain eight morph points ( Points along: X: 2, Y: 2, Z: 2), one at each of its corners. In this case, the nodal coordinates inside the box are recalculated linearly in each coordinate direction, after a morph point(s) is moved. Specifying more than two points in a coordinate direction will create either of the following morph boxes:

* High order : This creates one box with high order, as first introduced in PRIMER 16.0. The nodal coordinates are calculated as higher degree polynomials (a combination of Bernstein polynomials in each coordinate direction) when coordinates of morph points change in the morphing panel. Therefore, these high order morph boxes give you more control over smoothness of the morphing deformations. However, the mesh usually follows the dragged morph points by a fraction of the distance, and nodes across the entire box can move even if the morph points closest to them remain stationary.
* Multiple linear : This option also creates a uniform cuboid grid of the specified number of morph points, however, multiple adjacent morph boxes are created from these points. Each box will contain eight points, with adjacent boxes sharing four points. As only boxes connected to dragged morph points move, the smaller boxes provide more localised morphing. However, tangent directions will not be continuous, potentially creating sharper edges in the mesh at the transition between several boxes.

Whenever creating morph boxes, no node should be contained in more than one morph box at a time. By default, PRIMER does not allow you to create a morph box when the selected contents includes nodes already in other boxes. The option Nodes already contained in boxes (in the Morphing section in Program options in the Options menu) allows you to change this such that nodes are silently skipped when they are already in another morph box.
[Previous](mesh-morphing.md)  |  [Next](morph-tab.md)