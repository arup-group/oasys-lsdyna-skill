####  Calculation of Elastic Section Properties

Note that X and Y axes here are the cut-section local (X,Y) plane, and the![](../Storage/primer-22-1/primer_links/sect_6/cutsect/cut_sec_elastic_prop.PNG) centroid position is given relative to the origin of the plane.

The following engineering properties are calculated:
 
Total Area -&gt; The sum of all cut-section polygon areas.

Geometric centroid ( Xc,Yc ) -&gt; The result of the 1st moment of area about X and Y axes, divided by the area.

Geometric centroid in global coordinates (  **** **Xc\_g, Yc\_g, Zc\_g** ****  )
-&gt; Displays the geometric centroid in the global coordinate system.

2nd moments of area Ixx, Iyy, Ixy
-&gt; In each case the sum of the local I value for each polygon, + its area \* distance squared from the relevant axis.

Principal 2nd moments of area Iuu (max) and Ivv (min), and the angle theta between Iuu and Ixx
-&gt; The result of transforming the tensor [Ixx, Iyy, Ixy] using Mohr's circle to give principal values and the angle between Iuu and Ixx.
[Previous](how-ill-conditioned-cuts-are-handled.md)  |  [Next](calculation-of-plastic-section-properties.md)