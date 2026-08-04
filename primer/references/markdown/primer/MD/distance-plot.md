###  Distance Plotter

| Distance plot generates a contour plot displaying the distance between two groups of parts.<br><br><br>![](../Storage/primer-22-1/primer_links/sect_6/measure/fig_distance_plotter.png) |
| --- |
| ![](../Storage/primer-22-1/primer_links/sect_6/measure/fig_6_5_10b.png)Distance plot generates a contour plot displaying the distance between two groups of parts. The user must select parts to measure from and (optionally) parts to measure to. Not selecting parts to measure to results in the entire model being considered, which may be slow to compute. <br>After selecting the parts for consideration, the user must define the measurement vector. There are several ways to define the vector: node to node, shell normal and three nodes. It is also possible to flip the vector direction and rotate it about the global axes. |

The distance calculated will be from the nodes of the from parts in the direction of the vector to the elements/segments of the to parts. The measurement is one way, in the positive vector direction.

Once calculated the plot will be displayed as coloured blobs at each of the from nodes.

![](../Storage/primer-22-1/primer_links/sect_6/measure/fig_6_5_10c.png)

####  Contour Manipulation

The contour plot popup is interactive:

* Clicking the colour bands will toggle the visibility of that range.
* The max and min values can be changed using the text boxes.
* The colours can be reversed and the max/min reset.
* The plot can be output to a csv or a d3plot external data (blob) file.
* The size of the coloured blobs can be changed.

####  Clearance Plotting

It is also possible to input a clearance value which represents a keep out zone.

![](../Storage/primer-22-1/primer_links/sect_6/measure/fig_6_5_10d.png)

PRIMER applies this as an offset to the measured values so that any negative values represent those that are exceeding the clearance.

It is sometimes useful to understand what % of the measured area has exceeded the clearance. This is possible using the Display as Area button, which becomes active once a clearance is defined. The user can also specify an affected zone distance, representing areas which are influenced by the exceeded clearance.

![clearance_plotting](../Storage/primer-22-1/primer_links/sect_6/measure/clearance_plottin.png)

[Previous](node-curve-length.md)  |  [Next](node-to-plane.md)