###  Utilities Tab

The utilities tab contains other additional functionality.

![](../Storage/primer-22-1/utilities-tab/utilities-tab-2024-04-09.png)

####  

#### Combine From File

Often pedestrian impact engineers will run small localised models over a specific part of the bonnet, rather than rerun the full sweep of impact points. The 'Combine From File' button allows you to replace values from a full sweep with those from a sub-sweep; allowing you to calculate a predicted full sweep result.

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/hic_area_26.png)

Prior to combining, PRIMER will display the values being changed:

Grey = Unchanged.

Green = Changed.

Blue = New.

An existing value is changed when a new value is found to be within a given tolerance (default is 10 length units).

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/hic_area_27.bmp)

It is possible to write the combined data for future use using the 'Write Edited Blob' button.

#### 

#### Save Settings

Save settings allows you to save a variety of settings into their oa\_pref file. The settings available (saved under the 'pedestrian' heading of the preference file) are:

* HIC Yellow - HIC value for EuroNCAP yellow score.
* HIC Orange - HIC value for EuroNCAP orange score.
* HIC Brown - HIC value for EuroNCAP brown score.
* HIC Red - HIC value for EuroNCAP red score.
* HIC Low - HIC value for Low area GTR calculation.
* HIC High - HIC value for shown as red as part of GTR calculation.
* HIC Grid - Fine grid spacing for area calculation.
* HIC Area Sensitivity - Default value used for Area Sensitivity calculations.
* HIC Band Sensitivity - Default value used for Band Sensitivity calculations.

#### 

#### Write Edited Blob

It is possible to write edited or combined data for future use using the 'Write Edited Blob' button. The data can be saved in 'blob' format for use with d3plot or regular csv. Both formats can be read back into the HIC tool.

#### 

#### Write Perimeter

Output perimeter file used for area calculations.

#### 

#### Write HIC Iso Points

Output HIC Iso Points (when calculated).

####  

#### Read Perimeter File

Should you wish, a custom perimeter can be input using the 'Read Perimeter File' button on the Utilities tab. The format for this file is:

*X coordinate, Y coordinate, (Z coordinate)*

The data can be comma separated, tab separated or space separated. The order of the points is important and should represent the sequence of the perimeter. As the calculation is 2D it is not essential for the perimeter to have z coordinates defined.

For best results user-input perimeters should use the same coordinates as the data file.

**Warning: ill-conditioned perimeters may result in error.**

####  

#### Read Child & Cyclist WAL

It is possible to input 'child' and 'cyclist' WALs for use with HIC contour plotting. The child WAL (e.g. WAL 1700) is intended for use with GTR/R127 calculation as it denotes the child zone specifically. The cyclist WAL (e.g. WAL 2100) is not considered at all for GTR/R127 but is used for when contouring HIC (and subsequently filtering the point selection) while using NCAP regs.

The 'child' WAL is important as it can influence the calculation of the GTR/R127 child area specifically. If a child WAL is not provided, the default behaviour is to determine each zone by 'shrink wrapping' the respective set of points, which works well when there are adult and child points along the boundary lines (e.g. WAL 1700) but not as well if they do not, since this can result in an 'unaccounted area'.

When input the child WAL is used to determine the boundary, not shrink wrapping, avoiding any 'unaccounted' for child area.

![](../Storage/primer-22-1/utilities-tab/utilities-tab-2024-04-09-1.png)

[Previous](analysis-tab.md)  |  [Next](reading-additional-data.md)