#####  Path Order

| Controls the interpolation method used to generate the fitting path between the basic path points.<br><br><br>![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fopts_order_1.png) |
| --- |
| **Cubic Spline**fits a continuous curve through points.<br> <br>This is generally best for curved geometry such as dummies, it also gives a clear indication of the "outwards" direction used when projecting the path forwards. | ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fopts_order_2.png) |
| **Linear**fits straight lines between basic path points.<br> <br>This is more likely to work well for arbitrary geometries made up of a series of straight sections, perhaps fitting a belt between rollers. | ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fopts_order_3.png) |
| **Mixed**is the average of **Spline**and **Linear**shapes.<br> <br>This may work well in mildly curved situations | ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fopts_order_4.png) |

[Previous](length-parameter.md)  |  [Next](path-drawn-as.md)