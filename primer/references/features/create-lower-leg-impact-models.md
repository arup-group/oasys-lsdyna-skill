####  Create Lower Leg Impact Models

First set the Type to Lower Leg Impacts.

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_94.png)

#####  Automatically create points

You then need to set how you want to automatically create impact points. There are a number of ways to do this:

* Define a distance between points
* Define N points per zone (GTR / UN R127 only)
* Nothing

If you set the Method to Define Distance, you will need to select the distance between points.

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_32.png)

If you set the Method to N points, you will need to select the number of points and a spacing factor.

The spacing factor can be in the range 0-N, where 0 will put the impact points on the edge of the zone and N will put them all at the centre. Set it to 1 to space the points equally.

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_33.png)

N=2, Spacing factor = 0

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_95.png)

N=2, Spacing factor = 1

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_96.png)

N=2, Spacing factor = 2

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_97.png)

You can set the Method to Nothing, in which case no points will be created automatically.

To create models you will need to create points manually.

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_38.png)

#####  Manually create points

Pressing the CREATE MANUALLY button will bring up a menu where you can manually create impact points.

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_44.png)

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_45.png)

Press the PICK button to start picking points on the vehicle. If you select outside the markup line boundaries then a point will not be created.

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_46.png)

Once you have selected all the points you want, press the FINISH button in the window that has popped up.

The menu will be filled with the labels and coordinates of the points created.

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_98.png)

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_99.png)

If you have created enough points you can move to different pages in the menu to view them.

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_49.png)

You can also edit the coordinates by typing in the appropriate textboxes. Only the X and Y coordinate can be modified as the Z coordinate is specified below.

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_100.png)

To view the points press SKETCH ALL or SKETCH

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_51.png)

To delete points press DELETE ALL or DELETE

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_52.png)

Once you have finished press the FINISH button to close the menu.

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_53.png)

#####  Build Models

To build models, the pedestrian markup tool uses PRIMERs [model build](building-using-csv-targeting-file-ihi-pdh-build.md#buildcsv)from a CSV file functionality. You can either write out a CSV file and then use the model build menu or you can build the models directly in the pedestrian markup tool.

![Lower leg](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_101.png)

For lower leg impacts you need to specify the Z coordinate of the bottom of the impactor. By default this is set to 25mm above the ground level.

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_102.png)

Now select where you want to save the CSV file that will be used by PRIMERs model build function.

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_92.png)

The WRITE button should now become active, meaning you can write out the CSV file. However, this will only write out data for each impact point (name and coordinates). To be able to build the models more information is required (see [Appendix N](n-automated-model-build-from-command-line.md#auto_build)), e.g.

* The location of the vehicle keyword file
* The location of the impactor keyword file
* Information on the impactor orientation
* How to depenetrate the impactor from the vehicle

This information needs to be written to the top of the CSV file and can be specified here via a template and additional options. The lower legform template can be automatically selected using the following PRIMER preference:

primer\*pm\_lower\_leg\_template: &lt;lower legform template file with full path&gt;

The Impactor Parameters menu may be used to create a template file if one doesn't exist. The template file should only need to be created once for each vehicle-impactor combination.

| ![Impactor Params button (lower leg)](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_79a.png) |  | ![Impactor Params menu (lower leg)](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_79b.png) |
| --- | --- | --- |

If you don't select a template file comments are written at the top of the CSV file showing what needs to be in the template file:

$ ----------------------------------------------------------------------- 
$ THE FOLLOWING NEEDS TO BE HAND EDITED 
$ 
$ Remove the '$$'s from the following lines and put in the correct values 
$ 
$ MODELS 
$ ------ 
$$ model, &lt;model\_filename&gt; 
$$ impactor, &lt;impactor\_filename&gt; 
$ 
$ IMPACTOR ORIENTATION 
$ -------------------- 
$$ orient, define, &lt;coord system name/id&gt; 
$$ or 
$$ orient, nodes, &lt;base node name/id&gt;, &lt;x node name/id&gt;, &lt;y node name/id&gt; 
$ 
$ DEPENETRATION METHOD 
$ -------------------- 
$ 
$$ depenetrate, contact, &lt;contact name/id&gt;, &lt;dof (X, XZ or XYZ)&gt; 
$$ or 
$$ depenetrate, partset, &lt;partset name/id&gt;, &lt;dof (X, XZ or XYZ)&gt; 
$ 
$ END OF SECTION THAT NEEDS TO BE HAND EDITED 
$ --------------------------------------------

Additional optional information that can be used by the [model build](building-using-csv-targeting-file-ihi-pdh-build.md#buildcsv)(from csv) function may be specified using the Run Parameters menu.

| ![Run Params button](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_79c.png) |  | ![Run Params menu](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_79d.png) |
| --- | --- | --- |

If you do select a template file the BUILD button should become active. If you press this the CSV file should get written out with the information from the template file copied into the top. Assuming the information is correct, the models should get built.

[Previous](create-upper-leg-impact-models.md)  |  [Next](output-lines-to-file.md)