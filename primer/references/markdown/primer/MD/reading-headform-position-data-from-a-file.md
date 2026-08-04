####  Reading Headform Position Data from a File

You can read in headform position data from an external delimited file by clicking on the Read data from file button. This will guide you through a series of panels where you can specify the file type and what data you wish to read from the file. The file would generally be of a CSV format with each row containing information for a target point/head position. The sequence of panels is:

Select the file to read.

![](../Storage/primer-22-1/primer_links/sect_6/fmh/read_1.gif)

Specify any lines to ignore by defining characters at the start of the line that signify a comment. Note that a preview of the file is shown at the bottom of the panel.

![](../Storage/primer-22-1/primer_links/sect_6/fmh/read_2.gif)

Specify the delimiter for the data in the file.

![](../Storage/primer-22-1/primer_links/sect_6/fmh/read_3.gif)

Choose depenetation options for when the data is read in. You can choose to automatically depenetrate the headform from it's starting position in different dergrees of freedom. You can also choose to run the headform checks after reading in the data (see [Reading Headform Position Data from a File](reading-headform-position-data-from-a-file.md#checkpositions)).

![](../Storage/primer-22-1/primer_links/sect_6/fmh/read_4.gif)

Finally the data is presented to you in a table format. If there where suitable titles in the input file, PRIMER will have attempted to guess the type of data in each column. If not, you can specify this on the panel by right clicking on the column headers and choosing the type of data from the resulting popup. After the columns have been assigned, click on Apply to read in the data and setup headform position information from the data. Note that the minimum that has to be contained in the file is the x, y, z coordinates of the target point.

![](../Storage/primer-22-1/primer_links/sect_6/fmh/read_5.gif)

[Previous](setting-up-targets.md)  |  [Next](checking-defined-targets.md)