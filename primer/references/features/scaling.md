####  Scaling

| ![](../Storage/primer-22-1/primer_links/sect_6/airbag/postion_scale_glob.gif) | ![](../Storage/primer-22-1/primer_links/sect_6/airbag/postion_scale_n1n2n3gif.gif) |
| --- | --- |
| Scaling using global axes | Scaling using local axes |

There are 2 methods available for scaling the airbag. The first method allows you to scale the airbag in the global axes (left hand figure). Different scale factors can be used for the X, Y and Z directions if necessary. The centre for the scaling operation can be defined as either the global origin (0, 0, 0), a coordinate which you can specify by typing in the X, Y and Z values or a node number which you can pick or select by typing the number.

The second scaling method allows you to scale an airbag in directions other than the global axes by using three nodes. The three nodes are used to define a local coordinate system for the scaling. N1 is the origin for the local coordinate system. The vector from N1 to N2 is the local x axis. N3 defines another point which lies in the xy plane. This method is the same as \*DEFINE\_COORDINATE\_NODES and is used a lot in Ansys LS-Dyna. For further information look at the user guide. The 3 nodes can be typed in or picked using the popup menus. As for the global scaling option the centre can be the origin, a coordinate or a node.

[Previous](rotation.md)  |  [Next](saving-and-reading-orgiamifold-definitions.md)