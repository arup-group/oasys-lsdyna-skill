####  Max Warpage

The warpage for each face of an element is calculated, and the maximum of each of these is then compared to the maximum warpage criteria. Any triangular faces are given a warpage of 0.

To determine the face warpage the face is first split along a diagonal (as below), such that the quad is then made up of two triangles. The angle (in degrees) between the unit normals of these triangles is then calculated. The same is done for the 'alternative' split, and the maximum of the two resulting angles is taken to be the warpage for that face.

![](../Storage/primer-22-1/primer_links/sect_3/images/Max_warpage_img.png)

[Previous](max-aspect-ratio.md)  |  [Next](max-skew.md)