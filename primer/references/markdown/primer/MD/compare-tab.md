###  Compare Tab

When additional data has been read, the compare tab can be used to compare the data against that of the current session.

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/hic_area_compare1.png)

To begin you must select the baseline data set. This is the additional data to be compared with. The baseline is assumed to be the previous result and as such any differences are calculated as 'current minus previous'.

The current and baseline data are compared based on their names and proximity to each other (name taking precedence over distance).

The inspect button allows you to check how the points have been matched:

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/hic_area_compare_02.png)

**Note: the tool does not currently check for duplicate point names, it is your responsibility to ensure point names are unique.**

####  Show Delta

This option calculates the difference between the *baseline* and the current session data. Positive numbers imply the current session values are greater than the *baseline* . The values are presented as floating text, which can be controlled via the relevant display options of the main panel. Additionally, you can toggle the % Change button to present the delta values as percentages, which may be more appropriate in some instances.

####  Contour Delta

This option uses the delta values to create a contour plot. The contours are coloured blue in locations where HIC is reducing and orange where HIC is increasing. White or black colouring is used for regions of zero (or little) change, the choice of colour can be toggled using the button on the contour bar.

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/hic_area_compare_03.png)

####  Band Change

Band Change can be used to highlight points which have changed band between baseline and current results. As with Band Sensitivity Analysis, it is possible to choose to show points that get better, worse or both:

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/hic_area_compare_04.png)

####  Compare Curves & D3PLOT

The Compare Curves and Compare D3PLOT buttons allow you to select pairs of points ( *baseline* and current) and have the respective data loaded in to the T-HIS and D3PLOT software. For 'Compare Curves', HIC curve data is read into T-HIS as defined by the $cur\_file comment in the input file. For 'Compare D3PLOT', the $d3plot\_file comment is used to read relevant d3plot data in to D3PLOT. For more info on the special input comments refer to section: .

When loaded into T-HIS pairs of points share the same colour and are distinguishable by their line style:

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/hic_area_33.png)

When using D3PLOT, there is an additional option to combine points into a single window, for easy comparison:

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/hic_area_34.png)

[Previous](reading-additional-data.md)  |  [Next](icfd-setup-script.md)