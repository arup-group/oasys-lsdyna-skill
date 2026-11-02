###  Creating FAST-TCF files

| The most obvious option is to generate a FAST-TCF script using a text editor such as vim or wordpad. However, an easier option is to use T/HIS as normal, then generate a FAST-TCF script to recreate the curves currently displayed on the screen from within T/HIS.<br> <br>**It involves a single button click to produce a FAST-TCF script that can recreate the plot on the screen.**<br> <br>T/HIS internally stores the history behind each curve; noting which curves, operations and data requests were used to create each curve. This means that the user **does not** have to start recording a command file, and carefully record a script. Instead the user can work for as long as they like as normal, then choose to generate a FAST-TCF script to recreate the plot on the screen by using the FAST-TCF Create menu.<br> <br><br> <br>By default the FAST-TCF script that is generated will contain commands to reproduce all of the graphs that are currently defined in T/HIS. Instead of reproducing all of the graphs the FAST-TCF script can also contain the commands to generate a subset of pages or graphs. | ![](../Storage/this-23-0/this%20-%20links/sect_7/fig_7_1.gif) |
| --- | --- |

####  FAST-TCF Script : Image Output

This option can be used to add the commands to the FAST-TCF script to generate an image of each graph/page that is selected for output. In addition to selecting the image format a filename can also be specified that is used in the FAST-TCF script as the output filename for images.

####  FAST-TCF Script : Curve Output

This option can be used to add commands to the FAST-TCF script to write curves out to a T/HIS curve file. By default this option will add commands to the FAST-TCF script write any curves that are unblanked in a graph to a curve file. Instead of writing all of the unblanked curves out to a file the Select Curves option can be used to select a subset of curves.

####  FAST-TCF Script : Curve Group Output

This option can be used to select additional curves for output to the FAST-TCF script by curve group. If a curve is selected that is also unblanked in one of the graphs the command to regenerate it are only added to the FAST-TCF script once. This option will also add the commands to regenerate the selected curve groups to the FAST-TCF script.

Previous: debugging-fast-tcf-files  |  Next: page-graph-layout-and-selection