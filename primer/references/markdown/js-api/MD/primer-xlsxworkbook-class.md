# XlsxWorkbook class

The XlsxWorkbook class enables writing xlsx files. [More...](primer-xlsxworkbook-class.md#XlsxWorkbook_details)

The PRIMER JavaScript API provides many class constants, properties and methods. For Arup to
be able to extend and enhance the API in the future any constant, property or method names beginning with a lowercase
or uppercase letter are reserved.

If you need to add your own properties or methods to one of the existing classes then to avoid any potential future conflict you
should ensure that the name begins with either an underscore (\_) or a dollar sign ($) or the name is prefixed with your
own unique identifier.

For example if company 'ABC' need to add a property called 'example' then to avoid any potential future conflict use one of:

* \_example
* $example
* ABC\_example

## Member functions

* [Close](primer-xlsxworkbook-class.md#XlsxWorkbook::Close)()

## XlsxWorkbook properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| filename (read only) | string | Name of the xlsx file |

| Detailed Description<br>The XlsxWorkbook class provides functions to enable you to create xlsx files.<br>The following simple example shows how to write a xlsx file:<br> |
| --- |


```
 var workbook = new XlsxWorkbook("C:/temp/test.xlsx");
var worksheet = new XlsxWorksheet(workbook);
worksheet.AddText(0, 0, "Hello world!");
worksheet.AddNumber(1, 0, 1.2345);
worksheet.AddImage(2, 0, "image.png");
workbook.Close();

```


| Constructor
new XlsxWorkbook(filename*[string]*)

Description<br>Create a new [XlsxWorkbook](primer-xlsxworkbook-class.md) object for writing xlsx files. |
| --- |

#### Arguments

* filename (string)
 
Filename of the xlsx file you want to write. The file will be overwritten (if it exists).

| Returns
<br>[XlsxWorkbook](primer-xlsxworkbook-class.md) object<br>
Return type
<br>XlsxWorkbook |
| --- |

| Example
<br>To create a new XlsxWorkbook object to write Xlsx file "/data/test/file.xlsx"<br>
```
var workbook = new XlsxWorkbook("/data/test/file.xlsx");
```
 |
| --- |

| Details of functions 
Close()

Description<br>Close a Xlsx file |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To close Xlsx file workbook:<br>
```

workbook.Close();
      
```
 |
| --- |

* * *