###  Finding Unconnected Panels

| This tool allows you to find panels that are not attached to any connection. This facility enables you to quickly check that the panels you expect to be connected together,either by bolts or spotwelds, actually are welded together!<br> <br>To see how the function works look at the following [example](An%20example%20of%20how%20to%20set%20up%20a%20database%20and%20how%20to%20use%20%20%20it..html#example). | ![](../Storage/primer-22-1/primer_links/sect_6/connection/unconnected_1.gif) |
| --- | --- |

####  Example

The following figure shows the front of a vehicle. It has been welded/bolted together using the PRIMER connections ability. We want to find which panels are not attached by any spotweld nor beam connection.

![](../Storage/primer-22-1/primer_links/sect_6/connection/unconnected_2.gif)

| Press the Apply button.<br> <br>PRIMER blanks the model, and unblank any parts in the model that are not attached together by any connection.<br> <br>![](../Storage/primer-22-1/primer_links/sect_6/connection/unconnected_3.gif)<br> <br>This shows that the radiator, wheels, engine, gearbox, windscreen and screenrail are not connected to the rest of the vehicle. In this case the screenrail should be connected by spotwelds! We can now go back and fix this before submitting the job. Doing this quick check can help find problems which may be missed otherwise.<br>  Reset blanking and Store blank status  <br>If you want to undo the blanking that PRIMER has just done you can press Reset blanking . PRIMER will reset the blanking to the previous state. Using Store blank status will store the current blanking status - this is useful because when you exit the panel it goes back to the stored status. |
| --- |

[Previous](finding-connected-panels.md)  |  [Next](listing-connections.md)