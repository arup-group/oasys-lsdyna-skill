####  Setting up Targets

The SETUP\_TARGETS button accesses the model target database.

![](../Storage/primer-22-1/primer_links/sect_6/fmh/target1.gif)

You can have as many target points in your model as you want. A scrolling list shows all of the points. Additionally you can have more than one point at the same position.

When a target point has been assigned a head position it's target file button (on rhs) will become active. You can then write a csv targetting file which can be used by the command line build models from csv file function (see Appendix).

| Adding a new target point  <br>To add a new target point:<br> <ol> <li>select the position name you want the point at using the popup menu shown on the right </li> <li>enter a description/name for this point </li> <li>Press <span class="buttontext">ADD new target point </span>. </li> </ol> <br>The point will be added to the list of available target points. You can then modify the point coordinates and min and max angles. | ![](../Storage/primer-22-1/primer_links/sect_6/fmh/target_popup.gif) |
| --- | --- |

| Removing a target point  <br>To remove a target point use the popup on the required target point and press Remove target point . If the target point is currently in use by a headform you will be asked to confirm removal of the point<br>  Sketching a target point  <br>To temporarily sketch/draw a target point on the screen use the popup on the required target point and press Sketch target point . If you want to see the target points at all times then you want to turn target point drawing on instead of sketching them. See [drawing and labelling target points](setting-up-targets.md#targetvis)below.<br>  Changing the position of a target point  <br>To change the location/position of a target point either:<br> <ul> <li>type the new X, Y and Z coordinates into the test boxes. </li> <li>use the popup on the required target point and press <span class="buttontext">Pick new location </span>. You can then select a node from the screen. The coordinates will be taken from that node </li> </ul> | ![](../Storage/primer-22-1/primer_links/sect_6/fmh/target_action_popup.gif) |
| --- | --- |

##### Changing the size of target points

The size of target points can be changed in the main  [OPTIONS](display-options-controlling-plot-parameters.md#options)  [panel](display-options-controlling-plot-parameters.md#options).

#####  Drawing and labelling target points

| Target points can be drawn and labelled just like nodes and elements. They are turned on in the [ENTity Viewing](controlling-entity-visibility-and-labelling.md#Entityvisibility) non-element-items.md#vis2. <br>In addition to drawing and labelling target points the  [NOTATE](how-associated-data-is-drawn-for-non-element-items.md#notate)  [function](how-associated-data-is-drawn-for-non-element-items.md#notate)can be used. If this is turned on then the name and position of each target point is written on the screen as well as the target point number. | ![](../Storage/primer-22-1/primer_links/sect_6/fmh/target_vis.gif) |
| --- | --- |

[Previous](positioning-the-headform.md)  |  [Next](reading-headform-position-data-from-a-file.md)