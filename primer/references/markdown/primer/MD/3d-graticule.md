####  3D Graticule

The 3D graticule option will produce 3 planes aligned with the global x, y and z axis which show the model bounding box.

The display of each of the 3 plane can be turned on and off separately as required.

As well as specifying the minimum and maximum dimensions for each plane the location of each plane can also be specified along with the grid interval.

By default PRIMER will automatically calculate all the graticule plane values. If the user modifes any of the values then the text box colours will change to WHITE text on a DARK BLUE.

![2d graticule](../Storage/primer-22-1/primer_links/sect_4/images/fig_4_1_4_2a.png)

By default PRIMER will automtically calculate the location of the 3 graticule planes based on the model dimension. The location of each plane can be changed by entering the new location in the text box.

Alternatively 3 pre-set locations can be selected.

![](../Storage/primer-22-1/primer_links/sect_4/images/fig_4_1_4_2b.png)

| Automatic | This is the default option. PRIMER will automatically locate the plane at either the minium or maximum value so that it is positioned behind the model from the users view point. As the model is rotated PRIMER will adjust the plane location as required. |
| --- | --- |
| At Minimum | The plane will automatically be located at the minimum value for the axis. If the axis minimum is modfied by the user the plane location will automatically update. |
| At Maximum | The plane will automatically be located at the maximum value for the axis. If the axis maximum is modfied by the user the plane location will automatically update. |

![](../Storage/primer-22-1/primer_links/sect_4/images/fig_4_1_4_2c.png)

By default PRMER will automtically calculate the minimum and maximum values used to display each plane along with the interval between the values displayed.

The minimum and maximum values along with the tick intreval can be changed using the text boxes. If any of the values are changed then the text box colours will change to WHITE text on a DARK BLUE.

All of the values can be reset to Automatic using the popup menu.

If the Tick Interval is set to Automatic D3PLOT will adjust the tick spacing if required as you zoom in and out.

| ![](../Storage/primer-22-1/primer_links/sect_4/images/fig_4_1_4_2d.png) |
| --- |

If necessary a transparency value and colour can also be set for the 3 plane

| ![](../Storage/primer-22-1/primer_links/sect_4/images/fig_4_1_4_2e.png) |
| --- |

[Previous](2d-graticule.md)  |  [Next](graphics-setup-via-the-oa-pref-file.md)