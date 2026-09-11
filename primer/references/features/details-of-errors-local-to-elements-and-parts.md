###  Details of Errors Local to Elements and Parts

The main CT, SI and WIRE commands display errors for the whole model, [as shown before](plotting-contact-penetrations.md#Plottingcontacterrors).
  **![](../Storage/primer-22-1/primer_links/sect_5/pen_check/fig_6_10_5.gif)**  
The particular example illustrated is very simple, so display clutter is not a problem, but in a more complex model it is easy to imagine how confusing a plot of contact penetrations can get.

To make it easier to see what is going wrong you can select, by any means, a node (separate nodes may be selected for each case.)
 
#### Element(s) at the node
 
![](../Storage/primer-22-1/primer_links/sect_5/pen_check/fig_6_10_5a.gif)Only the elements related to this node are displayed, and the plot is autoscaled to these.
 
This means:
 
* All elements to which the node is attached
* All elements into which this node penetrates

This is an SI plot of the example.
 
All other plotting parameters (#levels, Settings... parameters, etc) are kept as before.

#### Parts(s) at the node
 
![](../Storage/primer-22-1/primer_links/sect_5/pen_check/fig_6_10_5b.gif)The elements related to this node are detected, as above; and all the elements of their respective parts are displayed in the mode selected in the Settings... panel.
 
This is a **WIRE**plot of the example.
 
Because this model is so simple the whole model, which only contains two parts, is drawn. However in a complex model this display mode allows you to determine how two parts interfere.
 [Previous](levels-setting-the-contour-bands.md)  |  [Next](generating-null-beams-on-crossed-edges.md)