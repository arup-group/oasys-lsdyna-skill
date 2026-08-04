#####  Radial Vectors

| Controls how the default "twist" of the belt path is computed.<br><br>![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fopts_radial_1.png) |
| --- |
| **![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fopts_radial_2.png)Local Normal**is suitable for gently curved shapes where the belt path will not reverse curvature in a segment. This is the typical adult dummy case.<br> <br>The outward normal of the elements at the belt path points is computed (red arrows here), and is used to define the outward normal of the belt path at that point.<br> <br>Path points not on a node find the nearest node, or if there is none they interpolate the normals from adjacent points. |
| ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fopts_radial_3.png)Attempting to use **Local normal**for cases where the belt path reverses curvature tend to be disastrous!<br> <br>The section of belt path going under the wing of the seat in this image illustrates the problem, with sharp reversals of curvature. It is easy to see why it is going wrong.<br> <br>Reverting to **Path twist**, which ignores local structure, gives the much better result below in that region.<br> <br><br> ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fopts_radial_4.png) |

[Previous](meshed-radiused-sliprings.md)  |  [Next](depenetrate-belt-to-belt.md)