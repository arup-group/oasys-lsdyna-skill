##  INPUT SYNTAX TO LOAD OTHER FILES

FAST-TCF has the option of reading in curve files and other FAST-TCF files nested within the input file. T/HIS now writes out and reads in curve styles and internal tags. FAST-TCF recognizes these tags if the user wishes to refer to them later on in the input file. If they are relative then the include files must be relative to where T/HIS is running from.

Filenames can contain spaces, but if they do then they **must** be enclosed in quotes

e.g. read "c:\my documents\filename.cur".

| Description | keyword | second word | third word onwards | notes |
| --- | --- | --- | --- | --- |
| Bulk data | readb | bulk data file | - | curves will be read in at this point in the file, and will be numbered accordingly |
| CSV 1 (X,Y,X,Y...) | readcsv | csv file | **lr** &lt;row number containing line labels&gt; | Subsequent words can be any of these 2 options.<br> <br>If no options then assumes reading x from column 1 and no labels. |
| **ar** &lt;row number containing axis labels&gt; |
| CSV 2 (X,Y,Y,Y...) | readcsv2 | csv file type 2 | **xg** &lt;x start value&gt; &lt;x interval&gt; | Subsequent words can be any of the 3rd word options. O nly one of the options XG and XC can be used.<br> <br>If no options then assumes reading x from column 1 and no labels. |
| **xc** &lt;x values column number&gt; |
| **lr** &lt;row number containing line labels&gt; |
| **ar** &lt;row number containing axis labels&gt; |
| T/HIS Curve file | rea | curve name | - | curves will be read in at this point in the file, and will be numbered accordingly <br>curve tags and styles are stored automatically through the $TAG and $STYLE lines <br>NOTE: If the tag in the curve file conflicts with an existing tag, the tag is NOT read in |
| Keyword | readk | keyword filename | - | curves will be read in at this point in the file, and will be numbered accordingly |
| FAST-TCF Include | inc | include filename | - | FAST-TCF will search for includes within includes etc <br>FAST-TCF pastes the include files into the final input file as soon as they are detected |
| LS-PrePost Curve file | readlspost | filename | - | Reads in curves from an LS-PREPOST curve file |
| LS-PrePost XY data file | readlsp\_xy | filename | - | Reads in curves from an LS-PREPOST XY data file |
| DIAdem | read\_diadem | header file filename | &lt;channel number to read&gt; OR "&lt;channel name to read&gt;" (must use quotes) | subsequent words can be either of these 2 options |
| **xg** &lt;x start value&gt; &lt;x interval&gt; | Only one of these 2 options can be used |
| **xc** &lt;channel containing x-axis&gt; |
| JavaScript | java | JavaScript filename | - | Runs a JavaScript. If any curves created by the JavaScript are referenced by following command in the FAST-TCF script then the JavaScript should generate curves tags for the curves whih ccan then be used in the FAST-TCF script. |

Keyboard entry can also be added into the FAST-TCF file, allowing for simple curves to be created in T/HIS. The keyword for this is **keyboard** . The order of the following words is important, and must be adhered to (see below). The continuation line character is useful here "\".

| Keyword | following word | following word | notes |
| --- | --- | --- | --- |
| Keyboard | xaxis | x axis name | specifies the x axis label |
| yaxis | y axis name | specifies the y axis label |
| label | curve label | specifies the curve label |
| data | xval,yval <br>xval2,yval2 <br>xval3, yval3 etc | no space between the x and y values, only a space between the **pairs** of values |

for example, to create an acceleration curve with a straight line at value 1.0:

**keyboard title straight line \ xaxis time \ yaxis accn \ label straight line at 1.0 \ data 0.000000,1.000000 \ 1.000000,1.000000**

Previous: page-graph-layout-and-selection  |  Next: input-for-data-extraction-requests