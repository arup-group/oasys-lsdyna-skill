###  Node to Node

Node to node measurement computes the vector between nodes/geometry points N1 and N2, and reports it as model space (x,y,z) and magnitude components.

Nodes/geometry points may either be screen-picked, or have their label typed in, or use the standard popup options. As in this example nodes need not be in the same model.

Nodal distance is editable and if edited will result into a movement of the second node picked for measure (N2). The node will be moved along the line formed by N1N2 to reach the distance typed in.

In the same way, nodal vector is also editable. In this case, the user has the option of setting the unit vector option ON or OFF. If the unit vector option is ON, then the second node (N2) will be moved such that the vector N1-N2 will lie along the input unit vector keeping the original distance constant. If this option is OFF, then N2 will be set based on the direction and magnitude of the given vector.
 ![](../Storage/primer-22-1/primer_links/sect_6/measure/fig_node_to_node.png)
[Previous](point-angle.md)  |  [Next](node-angle.md)