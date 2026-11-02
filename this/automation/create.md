###  Create

T/HIS 9.2 onwards has the ability to automatically generate FAST-TCF scripts using the CREATE menu.

The FAST-TCF script will contain all of the commands required to

1. Create and position multiple graphs on pages.
2. Extract the data from models or other files
3. Carry out any curve operations required to reproduce the chosen curves
4. Set any curve styles and labels
5. Set plot attributes such as titles, axis labels, colours, fonts and scaling
6. Generate the output image and/or curve file
7. Generate curve groups
8. Generate variable and tabular output requests

![](../Storage/this-23-0/this%20-%20links/sect_5/fig_5_14_1.gif)
 
Before generating the FAST-TCF script the following options can be set:

| Generate For<br> <br><br>| All Pages | The FAST-TCF script will contain all of the commands required to regenerate all of the pages that contain 1 or more graphs. <br> <br>If the option to generate images is selected then the FAST-TCF script will contain the commands to generate multiple images with the page number appended to the filename specified. |<br>| --- | --- |<br>| Current Page | The FAST-TCF script will contain all of the commands required to regenerate the currently displayed page. |<br>| Only Page (n) | The FAST-TCF script will contain all of the commands required to regenerate the selected page. |<br>| All Graphs | The FAST-TCF script will contain all of the commands required to regenerate all the currently defined graphs. All of the graphs will be positioned on page 1 using the currently defined layout. <br> <br> *This option will only be available if T/HIS only contains a single page (see Page Layouts).* |<br>| All Active Graphs | The FAST-TCF script will contain all of the commands required to regenerate all of the active graphs. All of the graphs will be positioned on page 1 using the currently defined layout. <br> <br> *This option will only be available if T/HIS only contains a single page (see Page Layouts).* |<br>| Only Graph (n) | The FAST-TCF script will contain all of the commands required to regenerate the selected graph. The graph will be positioned on page 1. | |
| --- |

| FAST-TCF Script : Image Output<br> <br>If this option is selected then the FAST-TCF script will contain the commands required to generate an image of each of the pages/graphs selected for output. The Image Format can be set to any of the supported image types (see IMAGE Options).<br> <br>If the FAST-TCF script generates multiple pages then the Filename specified will be used for the first image. Subsequent images will use the specified filename with "\_2", "\_3" ... appended. |
| --- |

| FAST-TCF Script : Curve Output<br> <br>By default the FAST-TCF script will only contain the command needed to reproduce the curves that are unblanked in 1 or more of the graphs selected for output. This option can be used to select additional curves for which the commands required to generate them are also added to the FAST-TCF script. If a curve is selected that is also unblanked in one of the graphs the command to regenerate it are only added to the FAST-TCF script once.<br> <br>In addition to selecting additional curves this option can also be used to add commands to the FAST-TCF script to write the additional curves out to a T/HIS .cur curve file. |
| --- |

| FAST-TCF Script : Curve Group Output<br> <br>This option can be used to select additional curves for output to the FAST-TCF script by curve group. If a curve is selected that is also unblanked in one of the graphs the command to regenerate it are only added to the FAST-TCF script once. This option will also add the commands to regenerate the selected curve groups to the FAST-TCF script. |
| --- |

| FAST-TCF Script : Variable Output<br> <br>This option can be used to define variable and tabular output requests for output to the FAST-TCF script via the menu launched by pressing the button. Variable and tabular output requests defined in a FAST-TCF script that is read in will appear in the menu. |
| --- |
| Variable Output or Tabular Output are selected at the top of the menu. Each output request is defined on a row of the table. The curve and variable type are selected using the drop down menu. A default variable name is generated and can be manually edited or a name can be selected from variable names that are present in . Additional value fields are populated with default values if required and these can be edited. The output description is also populated with default text that can be edited. The output type is selected using the drop down menu. Curve Lock prevents the curve that the variable refers to from being deleted. If a curve is not locked and is deleted, then any variables associated with that curve will also be deleted. |

Pressing the heading buttons will sort the output request definitions.

![](../Storage/this-23-0/this%20-%20links/sect_5/fig_5_14_1a.png)
Previous: fast-tcf-options  |  Next: run