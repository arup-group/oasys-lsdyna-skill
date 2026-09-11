###  Contour Levels on the Contour Ramp

For all relevant Vector, CT and SI plots, the number of contour levels on the contour ramp can be set to any number between one and thirteen via the  [Levels...](levels-setting-the-contour-bands.md)  panel. When the number of distinct values being contoured is in excess of thirteen, the user-defined number of contour levels are displayed on the contour ramp with each colour representing a **range** of values being contoured.

However, if the number of distinct values being contoured in the visible model(s) is thirteen or less, each distinct value being contoured is allocated its own distinct colour on the contour ramp, and all values are automatically represented in it. Hence in such cases, the number of contour levels displayed on the  [Levels...](levels-setting-the-contour-bands.md)  panel is updated automatically and cannot be modified.

The following table illustrates the two different types of contour ramps just described. The first ramp is of a model containing shell elements with more than thirteen different thickness values. In this case, each colour represents a range of shell thicknesses, and the contour ramp contains six levels as specified via the  [Levels...](levels-setting-the-contour-bands.md)  panel. The second contour ramp is of a model containing shell elements with exactly thirteen distinct shell thickness values. In this case, each shell thickness is assigned its own colour in the contour ramp, thereby overriding the number of contour levels specified by the user.

This behaviour can be modified by enabling the 'Disable discrete contouring' option from any of the 'Settings' panels. If this option is specified, thirteen contour bands will be displayed even if the model contains fewer than thirteen distinct values unless a different number is specified in the [Levels...](levels-setting-the-contour-bands.md) panel.

| ![](../Storage/primer-22-1/primer_links/sect_4/images/fig_4_2_8.jpg) | ![](../Storage/primer-22-1/primer_links/sect_4/images/fig_4_2_9.jpg) |
| --- | --- |

####  Contouring specific values in plots.

If required, a specific value of an entity can be contoured by specifying a narrow range of values in the Settings... panel.

As an example, consider the following model containing shell elements of four distinct thickness values. The contour ramp thus contains four colours, each representing a distinct shell thickness value.

![](../Storage/primer-22-1/primer_links/sect_4/images/fig_4_2_10.jpg)
 
In order to visualize only those shell elements which are 0.015 units thick, a narrow range of values encompassing the desired value to be contoured is specified in the " **Min value** " and " **Max value** " boxes of the Settings... panel as shown below.
 
![](../Storage/primer-22-1/primer_links/sect_4/images/fig_4_2_11.jpg)
  
Clicking the UPDATE button produces the following plot.
 
![](../Storage/primer-22-1/primer_links/sect_4/images/fig_4_2_12.jpg)
 
In the updated plot, shell elements with a thickness of 0.015 only are contoured as desired, while the remaining elements are drawn in the **wireframe** mode as per the options set in the Settings... panel.
 
Note that it is necessary to specify a range of values as opposed to the specific value to be plotted in the Settings... panel. If the exact value to be plotted is specified in both the " **Min value** " and " **Max value** " boxes, rounding errors that occur during computation might prevent the desired plot from being generated properly.

[Previous](contour-refinement-using-the-ramp.md)  |  [Next](controlling-model-visibility.md)