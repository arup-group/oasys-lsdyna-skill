####  Create Head Impact Models

First set the Type to Head Impacts.

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_31.png)

#####  Automatically create points

You then need to set how you want to automatically create impact points. There are a number of ways to do this:

* Define a distance between points to create a grid
* Define NxN points per zone (EuroNCAP v5 only)
* Define NxM points per zone (EuroNCAP v5 only)
* Nothing

If you set the Method to Define Distance, you will need to select the distance between points.

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_32.png)

If you set the Method to N points, you will need to select the number of points and a spacing factor.

The spacing factor can be in the range 0-N, where 0 will put the impact points on the edge of the zone and N will put them all at the centre. Set it to 1 to space the points equally.

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_33.png)

| N=2, Spacing factor = 0 | ![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_35.png) |
| --- | --- |
| N=2, Spacing factor = 1 | ![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_34.png) |
| N=2, Spacing factor = 2 | ![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_36.png) |

If you set the Method to NxM points, you will need to select the number of points and a spacing factor for both the rows and columns. The same rules as above apply for the spacing factor.

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_37.png)

You can set the Method to Nothing, in which case no points will be created automatically.

To create models you will need to create points manually or detect points close to hard parts.

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_38.png)

#####  Labelling impact points

There are three methods for labelling head impact points:

* Standard
* Coordinate
* GM Style
* Line Labels

The Standard method uses the labelling rules defined in the selected protocol, e.g. for EuroNCAP v8.2

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_39.png)

The Coordinate style uses a combination of the zone name and the point's x and y coordinates to form the label. The label is of the form: P\_XXXX\_YYY; where P is the zone name, XXXX is the point's x coordinate, and YYY is the point's y coordinate (e.g. A\_1234\_123 for an Adult impact point located at (1234, 123)). If a duplicate label occurs the latter of the duplicate labels will have the point's z coordinate appended to the end of the label: P\_XXXX\_YYY\_ZZZZ. Further duplicates will then have a counter index appended to the end of this label.

![](../Storage/primer-22-1/coordinate_labelling.png)

GM Style uses an 8 digit number [ABCDEFGH] to encode the location of the point:

* ABC = the first 3 numbers of the WAD
* DEF = the absolute value of the Y co-ordinate
* G = 0 if on the centre, 1 if on the left, 2 if on the right
* H = 0 for a target point

e.g. 12050010 is a target point at the 1200 WAD, 500mm from the centre on the left hand side.

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_40.png)

If GM Style is used then all the \*DEFINE\_TRANSFORMATION definitions for each head impactor position are written to a common file, which needs to be specified here. Each \*DEFINE\_TRANSFORMATION is given the same label as the impact point.

In addition, the final transformation is the impact point coordinates.

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_41.png)

A title for each \*DEFINE\_TRANSFORMATION can also be specified and is a combination of the impact point label, the specified string and the depenetration type ('aim point' or 'target point'), e.g.

12050010 **project\_x** : aim point

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_42.png)

Some protocols specify an area on the windscreen where points can be defaulted to green (meaning they get the maximum score) without having to test them.

If you don't want to create models for the points in this area you need to select some part(s) that define the area by pressing the PICK DEFAULT GREEN PARTS button.

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_43.png)

'Line Labels' option labels the points according to their placement on the markup lines (WAD, BRRL and SRL lines).

Labelling of points which are not on any line is according to the standard selected protocol

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_108.PNG)

#####  Manually create points

Pressing the CREATE MANUALLY button will bring up a menu where you can manually create impact points.

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_44.png)

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_45.png)

Press the PICK button to start picking points on the vehicle. If you select outside the markup line boundaries then a point will not be created.

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_46.png)

Once you have selected all the points you want, press the FINISH button in the window that has popped up.

The menu will be filled with the labels and coordinates of the points created.

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_47.png)

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_48.png)

If you have created enough points you can move to different pages in the menu to view them.

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_49.png)

You can also edit the coordinates by typing in the appropriate textboxes.

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_50.png)

To view the points press SKETCH ALL or SKETCH

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_51.png)

To delete points press DELETE ALL or DELETE

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_52.png)

Once you have finished press the FINISH button to close the menu.

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_53.png)

#####  Create hard points

Pressing the HARD POINTS button will bring up a menu where you can create impact points close to hard parts under the bonnet surface.

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_54.png)

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_55.png)

Press the PICK HARD PARTS button to start picking parts under the bonnet surface. They can be Shell or Solid parts.

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_56.png)

Once selected, the buttons in the menu should all become active.

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_57.png)

The menu is split into three sections

* At the top you can manually create points
* In the centre you can get PRIMER to automatically detect points
* At the bottom you can do a CT plot of the distance from the vehicle surface to hard parts

######  Manually find hard points

To manually create points first chose whether you want to select points on nodes or shells using the dropdown menu.

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_58.png)

You should also set the line of flight angle of the head impactor. By default it is set to 65.

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_60.png)

Now press the MANUALLY SELECT button.

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_59.png)

You will now be able to select points on the surface on the vehicle or on the hard parts.

If you select a point on the vehicle PRIMER will project a line along the line of flight to calculate whether it will intersect with any of the hard parts selected. If it does it will create an impact point.

If you select a point on a hard part PRIMER will project a line along the line of flight to calculate whether it will intersect the vehicle surface. If it does it will create an impact point.

If a point is created it will be drawn on the screen along with the distance from the vehicle surface to the hard part along the line of flight:

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_5.png)

Once you have selected all the points you want, press the FINISH button in the window that has popped up.

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_61.png)

######  Automatically find hard points

To automatically find hard points press the AUTO DETECT button.

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_62.png)

The following parameters define how the detection is carried out:

* **Max Search Dist** : The maximum distance to search for hard parts from the outer surface.
* **Min Separation Dist** : The minimum distance between successive points.
* **Step Distance** : The search is carried out along a grid. This is the distance between each grid point.
* **Number of points** : The number of hard points to look for.
* **Angle** : The line of flight angle.

If point(s) are successfully found they will be drawn on the screen along with the distance(s) from the vehicle surface to the hard part along the line of flight:

To delete any hard points created, press the REMOVE ALL button. This will delete both manually and automatically created points.

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_63.png)

######  CT plot distance from vehicle to hard parts

Press the CT button to do a CT plot of the distance from the vehicle outer surface to the hard parts.

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_64.png)

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_6.png)

You can turn off the CT plot by pressing the NO CT button.

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_65.png)

The contour bar is displayed in the hard points menu. By default it is set to 13 levels and the min and max values are automatically set. These can be changed using the #Levels and Min and Max textboxes.

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_66.png)

#####  Create robustness points

Pressing the ROBUSTNESS POINTS button will bring up a menu where you can create a ring of impact points around other points (all points or just manual and hard points).

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_67.png)

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_68.png)

First select the number of robustness points you want to create around each master point (4 or 8) from the dropdown.

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_69.png)

Next select which points you want to create the robustness points around. **All** will create them around all automatic, manual and hard points. **Manual and Hard** will only create them around manual and hard points.

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_70.png)

Then set the radius of the ring of robustness points around the master points.

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_71.png)

Press CREATE to create the robustness points.

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_72.png)

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_7.png)

To delete any robustness points, press REMOVE .

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_73.png)

#####  Build Models

To build models, the pedestrian markup tool uses PRIMERs [model build](building-using-csv-targeting-file-ihi-pdh-build.md#buildcsv)from a CSV file functionality. You can either write out a CSV file and then use the model build menu or you can build the models directly in the pedestrian markup tool.

For head impacts you can choose to build all, or a selection of, adult head impacts, child head impacts, and cyclist head impacts.

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_74.png)

First of all you need to select the angle to rotate the head impactor. If it is already in the correct orientation you can leave this blank - an example for a rotation angle of 65 is given below. The different angle textboxes correspond to:

* (Bonnet top) Adult Angle - for impact points in the (Bonnet top) adult head impact zone.
* (Bonnet top) Child Angle - for impact points in the (Bonnet top) child head impact zone.
* Cyclist Angle - for impact points in the cyclist head impact zone - if applicable.
* Windscreen Adult Angle - for impact points in the windscreen adult head impact zone - if applicable.
* Windscreen Child Angle - for impact points in the windscreen child head impact zone - if applicable.
* Cowl Adult Angle - for impact points in the cowl adult head impact zone - if applicable.
* Cowl Child Angle - for impact points in the cowl child head impact zone - if applicable.
* Roof Angle - for impact points in the adult/cyclist head impact zone that are on the roof (behind the windscreen rear reference line) - if applicable.
* Bumper Angle - for impact points in the child head impact zone that are on/in front of the bonnet leading edge - if applicable.

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_75.png)

 ![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_76.png)

Next select which models you want to build.
 
![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_77.png)
 
Now select where you want to save the CSV file(s) that will be used by PRIMERs model build function (one each for the adult, child, and cyclist head impacts).
 
![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_78.png)
 
The WRITE button should now become active, meaning you can write out the CSV file. However, this will only write out data for each impact point (name, coordinates and angle if set). To be able to build the models more information is required (see [Appendix N](n-automated-model-build-from-command-line.md#auto_build)), e.g.

* The location of the vehicle keyword file
* The location of the impactor keyword file
* Information on the impactor orientation
* How to depenetrate the impactor from the vehicle

This information needs to be written to the top of the CSV file and can be specified here via templates and additional options. Adult, child, and cyclist head templates can be automatically selected using the following PRIMER preferences:
 
primer\*pm\_adult\_head\_template: &lt;adult head template file with full path&gt;
 
primer\*pm\_child\_head\_template: &lt;child head template file with full path&gt;
 
primer\*pm\_cyclist\_head\_template: &lt;cyclist head template file with full path&gt;
 
The Impactor Parameters menu may be used to create a template file if one doesn't exist. The template file should only need to be created once for each vehicle-impactor combination.

| ![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_79a2.png) |  | ![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_79b.png) |
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

| ![Run Params button](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_79c2.png) |  | ![Run Params menu](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_79d.png) |
| --- | --- | --- |

If you do select a template file the BUILD button should become active. If you press this the CSV file should get written out with the information from the template file copied into the top. Assuming the information is correct, the models should get built.

[Previous](how-to-create-models.md)  |  [Next](create-upper-leg-impact-models.md)