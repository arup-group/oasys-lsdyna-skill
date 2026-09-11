####  Edge distance

The edge distance is used to try to find elements if the point you pick is not on a flange. The figure below shows 2 panels with flanges. We want to connect the 2 panels together. The point that is picked is not actually on (or near) the flange. PRIMER checks to find the distance from the panel flanges. If this is less than the edge distance then the connection will be made at the end of the flanges. This may not be ideal and in reality you do not want connections on the edges of flanges. To avoid this try to ensure that the connection points are on flanges.

![](../Storage/primer-22-1/primer_links/sect_6/connection/weld_15.gif)

The edge tolerance is also important when connecting curved panels. The connection tool in PRIMER works by locating a point on a panel/element and then creating a connection that is perpendicular to that element. For a curved panel this sometimes does not work. The connection that we actually want to make is shown in the top figure.

![](../Storage/primer-22-1/primer_links/sect_6/connection/weld_16.gif)
 
Point **a**is selected for the connection and PRIMER chooses **shell 1**for one end of the weld. PRIMER then projects perpendicular to **shell 1**and looks for elements to join. PRIMER finds **shell 2**. If PRIMER used this point the connection may not be able to be made as the angle between the panels may be greater than the angle [tolerance](angle-tolerance.md#angletolerance). Instead, PRIMER checks to see if the distance, **dist**, is less than the edge distance. If it is then the connection (as shown above) can be made.
 
![](../Storage/primer-22-1/primer_links/sect_6/connection/weld_17.gif)
 [Previous](spotweld-length-adhesive-thickness.md)  |  [Next](angle-tolerance.md)