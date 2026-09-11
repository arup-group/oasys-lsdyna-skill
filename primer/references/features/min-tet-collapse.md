####  Min Tet Collapse

Tet collapse checks are only calculated for tetrahedral SOLID elements. Other SOLID elements are given a tet collapse value of 1.0 so as to not flag a warning in the Error tree, though this means that they will be drawn in a tet collapse CT/SI plot.

For each node in a tetrahedron, the node's height above the base (the opposite face) is divided by the square root of the base's area. The smallest of these fractions is then divided by 1.24, the result of which is taken as the element's tet collapse value.

(The height of the node is defined as the shortest distance between that node and the plane described by the base.)

![](../Storage/primer-22-1/primer_links/sect_3/images/Min_tet_collapse_img.png)

![](../Storage/primer-22-1/primer_links/sect_3/images/Min_tet_collapse_eq.png)

[Previous](max-taper.md)  |  [Next](check-output.md)