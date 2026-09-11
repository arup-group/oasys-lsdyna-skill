####  (1) SEARCH DISTANCE Mode

This is made active by setting a **Distance** value (in this example 100) in the interpolate box. This value remains current until changed, setting this value to 0 turns interpolation off again.

![](../Storage/primer-22-1/primer_links/sect_6/orient/fig_6_3_5.png)

The Interpolate button is shown in red when it is active.

![](../Storage/primer-22-1/primer_links/sect_6/orient/interp_on.gif)

Once a **Distance** value has been set the coordinates of unselected nodes within a radius &lt; **Distance** &gt; of any explicitly selected nodes will have their coordinates updated as follows:

| ![](../Storage/primer-22-1/primer_links/sect_6/orient/interp_eqn.gif) | Where: | **C** | = Coordinate of this node |
| --- | --- | --- | --- |
| ![](../Storage/primer-22-1/primer_links/sect_6/orient/interp_delta.gif) | = Coordinate change due to Translation / Rotation / Scale |
| **d** | = Distance from this node to nearest explicitly selected node |
| **D** | = The specified Distance value |
| **Order** | = The specified Order value |

The **Order** value defaults to 1.0, giving a linear interpolation, but any positive value &gt; 0.001 is permissible, and a sketch of the factor vs. distance is shown in the box. (In the figure above 0.5 has been used.)

[Previous](the-interpolate-command.md)  |  [Next](conn-only-restricting-movement-to-connected-nodes-only.md)