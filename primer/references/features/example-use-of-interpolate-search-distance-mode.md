####  Example Use of INTERPOLATE (Search Distance Mode)

Distance = 0 
In this figure two nodes in the centre of a flat plate have been raised, with no **INTERPOLATE** value set. 
It is clear that only they have moved, and adjacent nodes are unaffected.

![](../Storage/primer-22-1/primer_links/sect_6/orient/fig_6_3_5a.gif)

| Distance = 20, Order = 1.0 <br>In this figure the same nodes have been moved, but now **INTERPOLATE** has been switched on. The Distance chosen is equal to half the smaller mesh dimension. <br>Here Order = 1.0, so there is a linear interpolation between the selected nodes and the edge of the mesh.<br> <br><br> ![](../Storage/primer-22-1/primer_links/sect_6/orient/fig_6_3_5b.gif) |
| --- |

| Distance = 20, Order = 0.5 <br>In this final figure the Order value has been reset to 0.5, giving a curved variation from centre to edge of the mesh. <br>This shows how a non-linear effect can be achieved.<br> <br><br> ![](../Storage/primer-22-1/primer_links/sect_6/orient/fig_6_3_5c.gif) |
| --- |

[Previous](warning-about-speed-penalties.md)  |  [Next](2-select-items-mode.md)