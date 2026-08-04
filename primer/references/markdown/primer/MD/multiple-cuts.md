###  Multiple Cuts

By default only a single cutting plane is used, however you can choose to display multiple parallel planes by using Multiple Cuts.
 
#### Uniform spacing 
 
![](../Storage/primer-22-1/uniform_spacing.png)
 
1. Turn this mode on by selecting the tick box. 
 
When Custom spacing is off, these multiple parallel cut planes are located at a constant spacing either side of this "base" section.
2. Define the spacing between parallel cuts. By default approximately 10% of the diagonal across the bounding box that contains the model(s) will be used.
3. Define how many planes (# planes +/-) are to be drawn either side of the basic cut section position.

The # planes +/- values require some explanation
 ![](../Storage/primer-22-1/primer_links/sect_6/cutsect/fig_6_9_2.png) 
In this example the thick red line shows the basic plane definition, and the thin lines show the repeated multiple planes.
 
# planes +/- has been set to 1 for the +ve side and 2 cuts on the -ve side". The positive side of the plane is based on the outward normal of the cut section definition.
 
It does no harm to set # planes +/- values that are many times greater than the number of planes that could intersect the model, and in fact the default values are 999 meaning "effectively unlimited". PRIMER will only ever use the actual number of planes that can intersect the model.

#####  Multiple cuts may be combined with "thick" sections
 ![](../Storage/primer-22-1/primer_links/sect_6/cutsect/fig_6_9_3.png) 
This image shows the same model as above with the "thick sections" switch turned on. It can be seen that multiple thick sections are now drawn.
 
**Warning: Multiple thick sections can be slow**
 
Multiple thick sections require repeated passes through graphics rendering, so drawing and screen-picking can both become slow if many such cuts are used. The time taken to render a plot will be some function of model size times number of cuts, so it is recommended that you use this combination sparingly when processing large models.

####  Custom spacing 
 ![](../Storage/primer-22-1/multiple-cuts-2022-08-03-1.png) 
When Custom spacing is on, any not necessarily uniform sequence of offsets from the base plane can be defined. By default there are two additional planes shown on each side of the base plane, so five planes in total, but with the Edit spacing button each plane position can be edited individually. The Sort positions button can be used to sort the plane positions into ascending order.
 
![](../Storage/primer-22-1/primer_links/sect_6/cutsect/fig_6_9_6.png)
 
**Note: Thick sections can also be used for custom spacing**
 
 See the comparison below when Thick cut (with thickness is set to 60.0) is OFF and ON respectively:
 
![](../Storage/primer-22-1/primer_links/sect_6/cutsect/fig_6_9_7.png) ![](../Storage/primer-22-1/primer_links/sect_6/cutsect/fig_6_9_8.png)
 
#### Multiple directions for non-parallel cuts
 
Cut planes can be defined in up to three directions. By default only one plane direction D1 is active. To add a new plane direction or remove an existing direction, the checkbox above D1, D2 or D3 can be turned on or off.
 
![](../Storage/primer-22-1/multiple-cuts-2023-02-16.png)
 
Data dependent on the plane direction will be shown for the direction which is toggled on the D1, D2 and D3 tabs.
 
The following shows a model cut by two orthogonal planes:
 
![](../Storage/primer-22-1/primer_links/sect_6/cutsect/fig_6_13_9_2b.png)
 
Note that the cutting switch applies to all plane directions together. When it is switched off, the graphics window(s) show the model(s) as usual.
 
Multiple parallel cuts can be turned on for each plane direction individually. Either uniform spacing or custom spacing is available. The following is an example with uniform spacing for the first direction and no multiple cuts for the second direction:
 
![](../Storage/primer-22-1/primer_links/sect_6/cutsect/fig_6_13_9_2c.png)
 
Combinations of Thick cuts and Multiple cuts can be selected when multiple plane directions are active. The following are two examples.
 
![](../Storage/primer-22-1/primer_links/sect_6/cutsect/fig_6_13_9_2d.png)![](../Storage/primer-22-1/primer_links/sect_6/cutsect/fig_6_13_9_2e.png)
 
#### Union Vs Intersection
 
Normally when multiple directions are active the cut sections will be drawn in Union mode
 
![](../Storage/primer-22-1/primer_links/sect_6/cutsect/fig_6_13_9_2f.png)
 
**Union :**Each plane will be rendered individually without taking into account the Actions of other planes.
**Intersection:**The planes work in conjunction so that what is seen is what remains after each plane has clipped the model.
 
**Union**of Constant Z cut plane and Constant Y cut plane with Positive action "Omit" & Negative action "Normal" is shown below.
 
![](../Storage/primer-22-1/primer_links/sect_6/cutsect/turbine_union.png)
 
**Intersection**of Constant Z cut plane and Constant Y cut plane with Positive action "Outline" & Negative action "Normal" is shown below.
 
![](../Storage/primer-22-1/primer_links/sect_6/cutsect/turbine_inter.png)
 [Previous](thick-cut.md)  |  [Next](exclude-part.md)