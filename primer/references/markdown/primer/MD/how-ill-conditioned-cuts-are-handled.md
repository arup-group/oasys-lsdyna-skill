####  How Ill-Conditioned Cuts Are Handled

| ![](../Storage/primer-22-1/primer_links/sect_6/cutsect/fig_6_11_8a.png)It is normally the case that the cutting plane intersects elements cleanly, leaving no doubt about which elements are being cut. However where a mesh is rectilinear, and the cut plane is positioned exactly on a line of nodes, then a problem can arise as it is not clear whether the plane:<br>
<ol style="font-size: 14.6667px;"> <li>Lies in the gap between adjacent rows of elements, and doesn&#39;t cut anything<br>or<br></li> <li>Cuts elements both above and below the plane<br>or<br></li> <li>Only cuts elements on one side of the plane</li>
</ol> |
| --- |

#### Clearly (1) is not satisfactory, and (2) would be dangerous since it would tend to double the true properties, therefore (3) is adopted as follows:

* For each cut element a check for ill-conditioning, as in cut exactly at node (or nodes) location is made.
* Where this is found to be the case the cut plane is temporarily shifted by a very small amount in its +ve Z (outward normal) direction, and the cut calculation is repeated.

The effect of this is always to consider the element on the +ve Z side (in plane local axes) of such a cut, and to ignore the element on the -ve Z side. In the image here this means that the light green elements would be considered, and the dark blue ones ignored.
 
This solution is safe, but it may not always give the result that you want. The best solution is to avoid this problem by moving the plane so that it cuts near to the centre of elements, rather than at mesh lines, since in this way you control explicitly which elements are cut.
 [Previous](cutting-through-1d-beam-elements.md)  |  [Next](calculation-of-elastic-section-properties.md)