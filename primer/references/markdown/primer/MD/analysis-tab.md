### Analysis Tab

In addition to calculating the low HIC area % there are several other tools accessible from the analysis tab:

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/hic_area_20.png)

####  Area Sensitivity Study (GTR Only)

It can sometimes be difficult for the pedestrian impact engineer to identify which areas should be targeted to improve the overall low HIC % area. Some points may be close to the low HIC boundary and deemed to be 'easy wins' but have little impact to the total % area. Whereas other points may be well above the low HIC boundary but have a greater influence.

The 'Sensitivity Button' allows you to input a HIC 'delta'. PRIMER will then:

1. Take input point 1 and add/subtract delta.
2. Recalculate low HIC area %.
3. Store change in area from baseline.
4. Reset input point back to original value.
5. Take next input point and return to step 1).

Once all input points have been analysed PRIMER will display a contour plot highlighting the areas which showed the greatest sensitivity to the given delta. These areas are those that will give the greatest improvement and should be prioritised in order to reduce low HIC % area.

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/hic_area_21.bmp)

Additionally, you can choose to exclude points from the calculation:

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/hic_area_22.bmp)

####  Target % Area (GTR Only)

The 'Target % Area' button allows you to input the low HIC area % you are targeting. PRIMER will adjust the low HIC value so that the exact target is achieved. This provides a rough estimate of how far the data is above/below achieving the target.

####  Band Sensitivity

The 'Band Sensitivity' button allows you to input a HIC value. PRIMER will check each impact point to check whether a point is close to changing band (GTR or ENCAP). The points will be ringed by the colour band they are close to. You have the option to identify points that are subject to improving, getting worse, or both.

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/hic_area_23.png)

####  Target Score (NCAP Only)

The target score button allows you to input a target NCAP score and the tool will calculate the minimum number of points to improve in order to achieve the target value (if possible).

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/hic_area_24.bmp)

Similar to Area Sensitivity, there is an option to exclude points from this calculation.

####  Contour HIC

This tool calculates a contour plot of HIC:

####  HIC Iso Plot

Allows you to mark on the contour plots areas of constant HIC:

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/hic_area_iso_plot.png)

####  View Curve & D3PLOT

The View Curve and View D3PLOT buttons allow you to view head impact analysis data using the T-HIS and D3PLOT software respectively. To use these options you must simply identify the points you are interested in and PRIMER will open HIC curve data in T-HIS and d3plot file data in D3PLOT.

PRIMER locates the relevant data using the path field of the input data along with two optional special comments at the top of the blob file. The two comments are:


```
$cur_file extra_info
$d3plot_file extra_info
```


These comments are text strings that provide PRIMER with the additional information needed to locate the relevant data. PRIMER combines the comments with the path fields from the data points (blobs) to build strings pointing to the files that are to be opened. For example, the following is a valid comment:


```
$cur_file hic_output.cur
```
 

In this example, PRIMER would look for files named hic\_output.cur in the same directory as each point's keyword (as defined by the Path input) and load them into T-HIS when requested.
 
To provide additional flexibility special variables can be used for each of the comments. They are:

| 
```
$$NAME$
```
 | - this corresponds to the Name input for a given point. |
| --- | --- |
| 
```
$$KEYWORD$
```
 | - this corresponds to the base filename of the keyword, as defined by the Path input for a given point. |

Taking the previous example and including the $$NAME$ variable we have:


```
$cur_file $$NAME$_hic_output.cur
data 1466.9 -909.2 949.7 852.8 C_1467_909 C:\PEDHEAD_ABC_001_GTR\C_1467_909\c_1467_909.key
```
 

PRIMER would then look for the following curve for the given data point:


```
C:\PEDHEAD_ABC_001_GTR\C_1467_909\C_1467_909_hic_output.cur
```
 

PRIMER is using the directory defined by the Path and looking for the file named C\_1467\_909\_hic\_output.cur. Having replaced the $$NAME$ variable by the specific name: C\_1467\_909 defined for the data point.
 
This approach applies to both D3PLOT data as defined by the $d3plot\_file comment and the T-HIS curve data as defined by the $cur\_file comment. Below is a further example showing the logic that PRIMER takes.
 
![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/hic_area_31.png)
 
Additionally, for D3PLOT, if PRIMER cannot find the data using the above logic, it will also check for files named 'd3plot' and 'filename.ptf', where filename is the base keyword filename as defined by the Path variable.
 
If, using the logic above, PRIMER can successfully identify the curve and D3PLOT data it will be opened in T-HIS and D3PLOT respectively.
 
![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/hic_area_32.png)

**D3PLOT Display Options**
 
The D3PLOT model display options allow you to toggle on/off model colouring and cut-sections. The colouring options allow different models to be coloured different colours. A constant x cut-section can be created at the point's x-coordinate or a constant y cut-section can be created at the point's y-coordinate.

![](../Storage/primer-22-1/HIC_Tool_D3PLOT_Display_Options_Manual_v1.PNG)
**![](../Storage/primer-22-1/HIC_Tool_D3PLOT_Display_Options_Manual_002_v1.PNG)**
 
If the same model is in more than one window, you have control over which window the display options are changed for by using the drop down window options for the model.
 
The refresh button updates the available models and windows, which may be required if models have been deleted or moved to different windows.
 
**T-HIS Curve Colouring Options**
 
The T-HIS curve colouring options you to control how the HIC curves are coloured in T-HIS. Instead of the curves being coloured default colours, the curves can be coloured based on properties of the head impact points. The curves can be coloured based on:

* HIC: curves will be coloured based on the head impact point's HIC (which should be provided in the input text file)
* X-coordinate: curves will be coloured based on the head impact point's x-coordinate
* Y-coordinate: curves will be coloured based on the head impact point's y-coordinate
* Regulation band: curves will be coloured based on the regulation band the HIC for the point lies in. The regulation and bands used are the same as the regulation and bands selected in the calculation tab in PRIMER and they can be changed in T-HIS by changing them in PRIMER.
* User defined data (see below).

![](../Storage/primer-22-1/HIC_Tool_THIS_Curve_Colouring_Options_Manual_001_v1.PNG)

It is possible to turn on/off contour bands by clicking the colours in the contour bar. The minimum and maximum value contoured can be changed and the colours can be reversed.

Any number of user defined data entries can be provided in the input text file. The format of the input file with two additional data entries would be:

```
X coordinate, Y coordinate, Z coordinate, HIC value, [Name], [Path], [User Data 1], [User Data 2]
```


This information can optionally be used with a special comment line which is included at the top of the input text file:

```
$user_data_headings

This comment can be followed by comma delimited text strings which are the headings for each of the user's data components.
```


For example:

![](../Storage/primer-22-1/HIC_Tool_THIS_User_Data_Comps_Manual_001_v1.PNG)
[Previous](points-tab.md)  |  [Next](utilities-tab.md)