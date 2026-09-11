####  Max Skew

The skew is calculated for each face of an element, the largest of which is then compared to the maximum skew criteria.

For quadrilateral faces, the midpoint of each edge is found. Vectors are then drawn between opposite midpoints (as shown below). The skew for that face is then taken to be the acute angle (in degrees) between these two vectors.

For triangular faces, the midpoint of each edge is found. One vector is drawn between one midpoint and the opposite node, while the other vector is drawn between the two remaining midpoints. The acute angle between these two vectors is then found. This is repeated until each node has been 'used' to define a vector (see below). The largest these angles is taken to be the skew for that face.

![](../Storage/primer-22-1/primer_links/sect_3/images/Max_skew_img1.png)

![](../Storage/primer-22-1/primer_links/sect_3/images/Max_skew_img2.png)

[Previous](max-warpage.md)  |  [Next](minmax-angle.md)