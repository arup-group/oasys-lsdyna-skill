# XlsxWorksheet class

## Member functions

* [AddImage](d3plot-xlsxworksheet-class.md#XlsxWorksheet::AddImage)(row*[integer]*, column*[integer]*, filename*[string]*, x\_scale (optional)*[real]*, y\_scale (optional)*[real]*)
* [AddNumber](d3plot-xlsxworksheet-class.md#XlsxWorksheet::AddNumber)(row*[integer]*, column*[integer]*, value*[number]*)
* [AddText](d3plot-xlsxworksheet-class.md#XlsxWorksheet::AddText)(row*[integer]*, column*[integer]*, text*[string]*)
* [SetColumnProperties](d3plot-xlsxworksheet-class.md#XlsxWorksheet::SetColumnProperties)(column*[integer]*, width*[number]*)
* [SetRowProperties](d3plot-xlsxworksheet-class.md#XlsxWorksheet::SetRowProperties)(row*[integer]*, height*[number]*)

| Constructor
new XlsxWorksheet(workbook*[[XlsxWorkbook](d3plot-xlsxworkbook-class.md) object]*, name (optional)*[string]*)

Description<br>Create a new [XlsxWorksheet](d3plot-xlsxworksheet-class.md) object for writing xlsx files. |
| --- |

#### Arguments

* workbook ([XlsxWorkbook](d3plot-xlsxworkbook-class.md) object)
 
The workbook to create the worksheet in.

* name (optional) (string)
 
The name of the worksheet. If omitted the default names 'Sheet1', 'Sheet2' etc will be used.

| Returns
<br>[XlsxWorksheet](d3plot-xlsxworksheet-class.md) object<br>
Return type
<br>XlsxWorksheet |
| --- |

| Example
<br>To create a new worksheet in workbook<br>
```
var worksheet = new XlsxWorksheet(workbook);
```
 |
| --- |

| Details of functions 
AddImage(row*[integer]*, column*[integer]*, filename*[string]*, x\_scale (optional)*[real]*, y\_scale (optional)*[real]*)

Description<br>Add an image to the Xlsx file. Note that the image will not actually be read/inserted until the workbook is written by calling<br>[XlsxWorkbook.Close](d3plot-xlsxworkbook-class.md#XlsxWorkbook::Close) so you must make sure the image file exists until then. |
| --- |

#### Arguments

* row (integer)
 
The row in the xlsx file (rows start at zero)

* column (integer)
 
The column in the xlsx file (columns start at zero)

* filename (string)
 
Name of the image file you want to add to the xlsx file. The image can be in png or jpeg format.

* x\_scale (optional) (real)
 
Scale factor for horizontally scaling the input image.

* y\_scale (optional) (real)
 
Scale factor for vertically scaling the input image.

| Returns
<br>No return value |
| --- |

| Example
<br>To add image 'C:/temp/test.png' to XlsxWorksheet worksheet on the second row, third column:<br>
```
worksheet.AddImage(1, 2, 'C:/temp/test.png');
      
```
 |
| --- |

* * *

| AddNumber(row*[integer]*, column*[integer]*, value*[number]*)

Description<br>Add number to the Xlsx file |
| --- |

#### Arguments

* row (integer)
 
The row in the xlsx file (rows start at zero)

* column (integer)
 
The column in the xlsx file (columns start at zero)

* value (number)
 
Number you want to add to the xlsx file

| Returns
<br>No return value |
| --- |

| Example
<br>To add number 1.2345 to XlsxWorksheet worksheet on the second row, third column:<br>
```
worksheet.AddNumber(1, 2, 1.2345);
```
 |
| --- |

* * *

| AddText(row*[integer]*, column*[integer]*, text*[string]*)

Description<br>Add text to the Xlsx file |
| --- |

#### Arguments

* row (integer)
 
The row in the xlsx file (rows start at zero)

* column (integer)
 
The column in the xlsx file (columns start at zero)

* text (string)
 
Text you want to add to the xlsx file

| Returns
<br>No return value |
| --- |

| Example
<br>To add text 'test' to XlsxWorksheet worksheet on the second row, third column:<br>
```
worksheet.AddText(1, 2, 'test');
```
 |
| --- |

* * *

| SetColumnProperties(column*[integer]*, width*[number]*)

Description<br>Set the column properties in the worksheet |
| --- |

#### Arguments

* column (integer)
 
The column in the xlsx file (columns start at zero)

* width (number)
 
Width of the column to set

| Returns
<br>No return value |
| --- |

| Example
<br>To set the width of the third column in XlsxWorksheet worksheet to 30:<br>
```
worksheet.SetColumnProperties(2, 30);
```
 |
| --- |

* * *

| SetRowProperties(row*[integer]*, height*[number]*)

Description<br>Set the row properties in the worksheet |
| --- |

#### Arguments

* row (integer)
 
The row in the xlsx file (rows start at zero)

* height (number)
 
Height of the row to set

| Returns
<br>No return value |
| --- |

| Example
<br>To set the height of the third row in XlsxWorksheet worksheet to 20:<br>
```
worksheet.SetRowProperties(2, 20);
```
 |
| --- |

* * *