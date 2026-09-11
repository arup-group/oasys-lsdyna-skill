# Item class

The Item class gives access to items in Reporter. [More...](reporter-item-class.md#Item_details)

The REPORTER JavaScript API provides many class constants, properties and methods. For Arup to
be able to extend and enhance the API in the future any constant, property or method names beginning with a lowercase
or uppercase letter are reserved.

If you need to add your own properties or methods to one of the existing classes then to avoid any potential future conflict you
should ensure that the name begins with either an underscore (\_) or a dollar sign ($) or the name is prefixed with your
own unique identifier.

For example if company 'ABC' need to add a property called 'example' then to avoid any potential future conflict use one of:

* \_example
* $example
* ABC\_example

## Class functions

* [GetAll](reporter-item-class.md#Item::GetAll)(page*[[Page](reporter-page-class.md)]*)
* [GetFromName](reporter-item-class.md#Item::GetFromName)(page*[[Page](reporter-page-class.md)]*, name*[string]*)

## Member functions

* [DeleteColumn](reporter-item-class.md#Item::DeleteColumn)(column*[integer]*)
* [DeleteRow](reporter-item-class.md#Item::DeleteRow)(row*[integer]*)
* [Generate](reporter-item-class.md#Item::Generate)()
* [GetCellProperties](reporter-item-class.md#Item::GetCellProperties)(row*[integer]*, column*[integer]*)
* [GetColumnProperties](reporter-item-class.md#Item::GetColumnProperties)(column*[integer]*, header*[constant]*)
* [GetColumnWidth](reporter-item-class.md#Item::GetColumnWidth)(row*[integer]*)
* [GetCondition](reporter-item-class.md#Item::GetCondition)(index*[integer]*)
* [GetCondition](reporter-item-class.md#Item::GetCondition_#1)(index*[integer]*, column*[integer]*)
* [GetCondition](reporter-item-class.md#Item::GetCondition_#2)(index*[integer]*, row*[integer]*, column*[integer]*)
* [GetGeneratedData](reporter-item-class.md#Item::GetGeneratedData)(row\_index*[integer]*, column\_index*[integer]*)
* [GetRowHeight](reporter-item-class.md#Item::GetRowHeight)(row*[integer]*)
* [InsertColumn](reporter-item-class.md#Item::InsertColumn)(column*[integer]*)
* [InsertRow](reporter-item-class.md#Item::InsertRow)(row*[integer]*)
* [MergeCells](reporter-item-class.md#Item::MergeCells)(topLeftRow*[integer]*, topLeftColumn*[integer]*, rows*[integer]*, columns*[integer]*)
* [RemoveCondition](reporter-item-class.md#Item::RemoveCondition)(condition*[integer]*)
* [RemoveCondition](reporter-item-class.md#Item::RemoveCondition_#1)(condition*[integer]*, column*[integer]*)
* [RemoveCondition](reporter-item-class.md#Item::RemoveCondition_#2)(condition*[integer]*, row*[integer]*, column*[integer]*)
* [SetCellProperties](reporter-item-class.md#Item::SetCellProperties)(properties*[object]*, row*[integer]*, column*[integer]*)
* [SetColumnProperties](reporter-item-class.md#Item::SetColumnProperties)(properties*[object]*, column*[integer]*, header*[constant]*)
* [SetColumnWidth](reporter-item-class.md#Item::SetColumnWidth)(column*[integer]*, width*[real]*)
* [SetCondition](reporter-item-class.md#Item::SetCondition)(condition*[integer]*, properties*[object]*)
* [SetCondition](reporter-item-class.md#Item::SetCondition_#1)(condition*[integer]*, column*[integer]*, properties*[object]*)
* [SetCondition](reporter-item-class.md#Item::SetCondition_#2)(condition*[integer]*, row*[integer]*, column*[integer]*, properties*[object]*)
* [SetRowHeight](reporter-item-class.md#Item::SetRowHeight)(row*[integer]*, height*[real]*)
* [UnmergeCells](reporter-item-class.md#Item::UnmergeCells)(row*[integer]*, column*[integer]*)

## Item constants

| **Name** | **Description** |
| --- | --- |
| Item.ARROW | Arrow item |
| Item.AUTO\_TABLE | Automatic table item |
| Item.D3PLOT | D3PLOT item |
| Item.ELLIPSE | Ellipse item |
| Item.IMAGE | Image item |
| Item.IMAGE\_FILE | Image file item |
| Item.LIBRARY\_IMAGE | Library image item |
| Item.LIBRARY\_PROGRAM | Library program item |
| Item.LINE | Line item |
| Item.NOTE | Note item |
| Item.PLACEHOLDER | Placeholder item |
| Item.PRIMER | PRIMER item |
| Item.PROGRAM | Program item |
| Item.RECTANGLE | Rectangle item |
| Item.SCRIPT | Script item |
| Item.SCRIPT\_FILE | Script File item |
| Item.TABLE | Table item |
| Item.TEXT | Text item |
| Item.TEXTBOX | Textbox item |
| Item.TEXT\_FILE | Text file item |
| Item.THIS | T/HIS item |

## Item properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| active | logical | If item is active or not. Inactive items will be skipped during report/page/item generation. |
| autotableType | constant | Autotable type (whether the data is sourced from a file or a directory). Can be [Reporter.AUTO_TABLE_DIRECTORY](reporter-reporter-class.md#Reporter.AUTO_TABLE_DIRECTORY) or [Reporter.AUTO_TABLE_FILE](reporter-reporter-class.md#Reporter.AUTO_TABLE_FILE). Valid for item type [Item.AUTO_TABLE](reporter-item-class.md#Item.AUTO_TABLE). |
| bottomCrop | integer | Bottom cropping value. Valid for item types [Item.IMAGE](reporter-item-class.md#Item.IMAGE), [Item.IMAGE_FILE](reporter-item-class.md#Item.IMAGE_FILE), [Item.D3PLOT](reporter-item-class.md#Item.D3PLOT), [Item.PRIMER](reporter-item-class.md#Item.PRIMER) and [Item.THIS](reporter-item-class.md#Item.THIS). |
| bottomMargin | real | Bottom margin width. Valid for item types [Item.TEXTBOX](reporter-item-class.md#Item.TEXTBOX), [Item.TEXT_FILE](reporter-item-class.md#Item.TEXT_FILE), [Item.TABLE](reporter-item-class.md#Item.TABLE) and [Item.AUTO_TABLE](reporter-item-class.md#Item.AUTO_TABLE) |
| columns (read only) | integer | The number of columns in the table. Valid for item types [Item.TABLE](reporter-item-class.md#Item.TABLE) and [Item.AUTO_TABLE](reporter-item-class.md#Item.AUTO_TABLE) |
| conditions (read only) | integer | The number of conditions assigned to the item. Valid for item types [Item.PROGRAM](reporter-item-class.md#Item.PROGRAM), [Item.TEXT_FILE](reporter-item-class.md#Item.TEXT_FILE), [Item.TEXT](reporter-item-class.md#Item.TEXT) and [Item.TEXTBOX](reporter-item-class.md#Item.TEXTBOX) |
| embed | logical | If image is embedded or not. Valid for item types [Item.IMAGE](reporter-item-class.md#Item.IMAGE) |
| file | string | File or directory for item. Valid for item types:<br> [Item.AUTO_TABLE](reporter-item-class.md#Item.AUTO_TABLE)<br> [Item.D3PLOT](reporter-item-class.md#Item.D3PLOT)<br> [Item.IMAGE](reporter-item-class.md#Item.IMAGE)<br> [Item.IMAGE_FILE](reporter-item-class.md#Item.IMAGE_FILE)<br> [Item.PRIMER](reporter-item-class.md#Item.PRIMER)<br> [Item.PROGRAM](reporter-item-class.md#Item.PROGRAM)<br> [Item.SCRIPT_FILE](reporter-item-class.md#Item.SCRIPT_FILE)<br> [Item.TEXT_FILE](reporter-item-class.md#Item.TEXT_FILE)<br> [Item.THIS](reporter-item-class.md#Item.THIS) |
| filetype (read only) | string | Output file type. Read-only but can be updated by changing the file extension on the item property
"file". Valid for item types [Item.D3PLOT](reporter-item-class.md#Item.D3PLOT) [Item.PRIMER](reporter-item-class.md#Item.PRIMER) and [Item.THIS](reporter-item-class.md#Item.THIS). |
| fillColour | [Colour](reporter-colour-class.md) object | Colour of fill for the item.<br> Valid for item types [Item.RECTANGLE](reporter-item-class.md#Item.RECTANGLE), [Item.ELLIPSE](reporter-item-class.md#Item.ELLIPSE), [Item.TEXTBOX](reporter-item-class.md#Item.TEXTBOX), [Item.PROGRAM](reporter-item-class.md#Item.PROGRAM) and [Item.TEXT_FILE](reporter-item-class.md#Item.TEXT_FILE) |
| fontName | string | Font for the item e.g. "Courier". Can be any font accessible by REPORTER.<br> Valid for item types [Item.TEXT](reporter-item-class.md#Item.TEXT), [Item.TEXTBOX](reporter-item-class.md#Item.TEXTBOX), [Item.PROGRAM](reporter-item-class.md#Item.PROGRAM) and [Item.TEXT_FILE](reporter-item-class.md#Item.TEXT_FILE) |
| fontSize | integer | Font size for the item (6 &lt;= fontSize &lt;= 72).<br> Valid for item types [Item.TEXT](reporter-item-class.md#Item.TEXT), [Item.TEXTBOX](reporter-item-class.md#Item.TEXTBOX), [Item.PROGRAM](reporter-item-class.md#Item.PROGRAM) and [Item.TEXT_FILE](reporter-item-class.md#Item.TEXT_FILE) |
| fontStyle | constant | Font style for the item. Can be a combination of [Reporter.TEXT_NORMAL](reporter-reporter-class.md#Reporter.TEXT_NORMAL), [Reporter.TEXT_BOLD](reporter-reporter-class.md#Reporter.TEXT_BOLD), [Reporter.TEXT_ITALIC](reporter-reporter-class.md#Reporter.TEXT_ITALIC) or [Reporter.TEXT_UNDERLINE](reporter-reporter-class.md#Reporter.TEXT_UNDERLINE)<br> Valid for item types [Item.TEXT](reporter-item-class.md#Item.TEXT), [Item.TEXTBOX](reporter-item-class.md#Item.TEXTBOX), [Item.PROGRAM](reporter-item-class.md#Item.PROGRAM) and [Item.TEXT_FILE](reporter-item-class.md#Item.TEXT_FILE) |
| generatedRowHeight | real | The height of each generated row in an Autotable. Valid for item type [Item.AUTO_TABLE](reporter-item-class.md#Item.AUTO_TABLE). |
| generating (read only) | logical | true if the item is currently being generated |
| headerHeight | real | The height of the header in an Autotable. Valid for item type [Item.AUTO_TABLE](reporter-item-class.md#Item.AUTO_TABLE). |
| height | real | Height for "rectangular" items (absolute difference between y and y2). Note that depending on
what your object reference corner preference is set to, changing this property will result in different
behaviour. |
| job | string | Input job file. Valid for item types [Item.D3PLOT](reporter-item-class.md#Item.D3PLOT) and [Item.THIS](reporter-item-class.md#Item.THIS). |
| justify | constant | Text justification for the item. Can be [Reporter.JUSTIFY_CENTRE](reporter-reporter-class.md#Reporter.JUSTIFY_CENTRE), [Reporter.JUSTIFY_LEFT](reporter-reporter-class.md#Reporter.JUSTIFY_LEFT) or [Reporter.JUSTIFY_RIGHT](reporter-reporter-class.md#Reporter.JUSTIFY_RIGHT) combined with [Reporter.JUSTIFY_TOP](reporter-reporter-class.md#Reporter.JUSTIFY_TOP), [Reporter.JUSTIFY_MIDDLE](reporter-reporter-class.md#Reporter.JUSTIFY_MIDDLE) or [Reporter.JUSTIFY_BOTTOM](reporter-reporter-class.md#Reporter.JUSTIFY_BOTTOM)<br> Valid for item types [Item.TEXT](reporter-item-class.md#Item.TEXT), [Item.TEXTBOX](reporter-item-class.md#Item.TEXTBOX), [Item.PROGRAM](reporter-item-class.md#Item.PROGRAM) and [Item.TEXT_FILE](reporter-item-class.md#Item.TEXT_FILE) |
| leftCrop | integer | Left cropping value. Valid for item types [Item.IMAGE](reporter-item-class.md#Item.IMAGE), [Item.IMAGE_FILE](reporter-item-class.md#Item.IMAGE_FILE), [Item.D3PLOT](reporter-item-class.md#Item.D3PLOT), [Item.PRIMER](reporter-item-class.md#Item.PRIMER) and [Item.THIS](reporter-item-class.md#Item.THIS). |
| leftMargin | real | Left margin width. Valid for item types [Item.TEXTBOX](reporter-item-class.md#Item.TEXTBOX), [Item.TEXT_FILE](reporter-item-class.md#Item.TEXT_FILE), [Item.TABLE](reporter-item-class.md#Item.TABLE) and [Item.AUTO_TABLE](reporter-item-class.md#Item.AUTO_TABLE) |
| lineColour | [Colour](reporter-colour-class.md) object | Colour of outline for the item.<br> Valid for item types [Item.LINE](reporter-item-class.md#Item.LINE), [Item.ARROW](reporter-item-class.md#Item.ARROW), [Item.RECTANGLE](reporter-item-class.md#Item.RECTANGLE), [Item.ELLIPSE](reporter-item-class.md#Item.ELLIPSE), [Item.TEXTBOX](reporter-item-class.md#Item.TEXTBOX), [Item.D3PLOT](reporter-item-class.md#Item.D3PLOT), [Item.PRIMER](reporter-item-class.md#Item.PRIMER), [Item.THIS](reporter-item-class.md#Item.THIS), [Item.PROGRAM](reporter-item-class.md#Item.PROGRAM), [Item.TEXT_FILE](reporter-item-class.md#Item.TEXT_FILE), [Item.IMAGE_FILE](reporter-item-class.md#Item.IMAGE_FILE), [Item.TABLE](reporter-item-class.md#Item.TABLE) and [Item.AUTO_TABLE](reporter-item-class.md#Item.TABLE). |
| lineStyle | constant | Style of outline for the item. Can be [Reporter.LINE_NONE](reporter-reporter-class.md#Reporter.LINE_NONE), [Reporter.LINE_SOLID](reporter-reporter-class.md#Reporter.LINE_SOLID), [Reporter.LINE_DASH](reporter-reporter-class.md#Reporter.LINE_DASH), [Reporter.LINE_DOT](reporter-reporter-class.md#Reporter.LINE_DOT), [Reporter.LINE_DASH_DOT](reporter-reporter-class.md#Reporter.LINE_DASH_DOT) or [Reporter.LINE_DASH_DOT_DOT](reporter-reporter-class.md#Reporter.LINE_DASH_DOT_DOT)<br> Valid for item types [Item.LINE](reporter-item-class.md#Item.LINE), [Item.ARROW](reporter-item-class.md#Item.ARROW), [Item.RECTANGLE](reporter-item-class.md#Item.RECTANGLE), [Item.ELLIPSE](reporter-item-class.md#Item.ELLIPSE), [Item.TEXTBOX](reporter-item-class.md#Item.TEXTBOX), [Item.D3PLOT](reporter-item-class.md#Item.D3PLOT), [Item.PRIMER](reporter-item-class.md#Item.PRIMER), [Item.THIS](reporter-item-class.md#Item.THIS), [Item.PROGRAM](reporter-item-class.md#Item.PROGRAM), [Item.TEXT_FILE](reporter-item-class.md#Item.TEXT_FILE) and [Item.IMAGE_FILE](reporter-item-class.md#Item.IMAGE_FILE). |
| lineWidth | real | Width of outline for the item in mm.<br> Valid for item types [Item.LINE](reporter-item-class.md#Item.LINE), [Item.ARROW](reporter-item-class.md#Item.ARROW), [Item.RECTANGLE](reporter-item-class.md#Item.RECTANGLE), [Item.ELLIPSE](reporter-item-class.md#Item.ELLIPSE), [Item.TEXTBOX](reporter-item-class.md#Item.TEXTBOX), [Item.D3PLOT](reporter-item-class.md#Item.D3PLOT), [Item.PRIMER](reporter-item-class.md#Item.PRIMER), [Item.THIS](reporter-item-class.md#Item.THIS), [Item.PROGRAM](reporter-item-class.md#Item.PROGRAM), [Item.TEXT_FILE](reporter-item-class.md#Item.TEXT_FILE), [Item.IMAGE_FILE](reporter-item-class.md#Item.IMAGE_FILE), [Item.TABLE](reporter-item-class.md#Item.TABLE) and [Item.AUTO_TABLE](reporter-item-class.md#Item.AUTO_TABLE) |
| name | string | Name of the [Item](reporter-item-class.md) |
| resolution | integer | Image resolution. Larger values yield a smaller image representation on screen. Valid for item type [Item.IMAGE](reporter-item-class.md#Item.IMAGE). |
| rightCrop | integer | Right cropping value. Valid for item types [Item.IMAGE](reporter-item-class.md#Item.IMAGE), [Item.IMAGE_FILE](reporter-item-class.md#Item.IMAGE_FILE), [Item.D3PLOT](reporter-item-class.md#Item.D3PLOT), [Item.PRIMER](reporter-item-class.md#Item.PRIMER) and [Item.THIS](reporter-item-class.md#Item.THIS). |
| rightMargin | real | Right margin width. Valid for item types [Item.TEXTBOX](reporter-item-class.md#Item.TEXTBOX), [Item.TEXT_FILE](reporter-item-class.md#Item.TEXT_FILE), [Item.TABLE](reporter-item-class.md#Item.TABLE) and [Item.AUTO_TABLE](reporter-item-class.md#Item.AUTO_TABLE) |
| rows (read only) | integer | The number of rows in the table. Valid for item type [Item.TABLE](reporter-item-class.md#Item.TABLE) |
| saveCSV | bool | Whether or not a CSV file of the table contents is written when the item is generated. Valid for item
types [Item.TABLE](reporter-item-class.md#Item.TABLE) and [Item.AUTO_TABLE](reporter-item-class.md#Item.AUTO_TABLE) |
| saveCSVFilename | string | The path and filename of the CSV file written when the item is generated. Valid for item types [Item.TABLE](reporter-item-class.md#Item.TABLE) and [Item.AUTO_TABLE](reporter-item-class.md#Item.AUTO_TABLE) |
| saveXlsx | bool | Whether or not a Excel file of the table contents is written when the item is generated. Valid for item
types [Item.TABLE](reporter-item-class.md#Item.TABLE) and [Item.AUTO_TABLE](reporter-item-class.md#Item.AUTO_TABLE) |
| saveXlsxFilename | string | The path and filename of the Excel file written when the item is generated. Valid for item types [Item.TABLE](reporter-item-class.md#Item.TABLE) and [Item.AUTO_TABLE](reporter-item-class.md#Item.AUTO_TABLE) |
| script | string | The script source text for the item.<br> Only valid for item type [Item.SCRIPT](reporter-item-class.md#Item.SCRIPT). For [Item.SCRIPT_FILE](reporter-item-class.md#Item.SCRIPT_FILE), use the *file* property. |
| text | string | The text for the item.<br> Valid for item types [Item.TEXT](reporter-item-class.md#Item.TEXT), [Item.TEXTBOX](reporter-item-class.md#Item.TEXTBOX), [Item.PROGRAM](reporter-item-class.md#Item.PROGRAM), [Item.TEXT_FILE](reporter-item-class.md#Item.TEXT_FILE) and [Item.SCRIPT](reporter-item-class.md#Item.SCRIPT) |
| textColour | [Colour](reporter-colour-class.md) object | Colour of text for the item.<br> Valid for item types [Item.TEXT](reporter-item-class.md#Item.TEXT), [Item.TEXTBOX](reporter-item-class.md#Item.TEXTBOX), [Item.PROGRAM](reporter-item-class.md#Item.PROGRAM) and [Item.TEXT_FILE](reporter-item-class.md#Item.TEXT_FILE) |
| topCrop | integer | Top cropping value. Valid for item types [Item.IMAGE](reporter-item-class.md#Item.IMAGE), [Item.IMAGE_FILE](reporter-item-class.md#Item.IMAGE_FILE), [Item.D3PLOT](reporter-item-class.md#Item.D3PLOT), [Item.PRIMER](reporter-item-class.md#Item.PRIMER) and [Item.THIS](reporter-item-class.md#Item.THIS). |
| topMargin | real | Top margin width. Valid for item types [Item.TEXTBOX](reporter-item-class.md#Item.TEXTBOX), [Item.TEXT_FILE](reporter-item-class.md#Item.TEXT_FILE), [Item.TABLE](reporter-item-class.md#Item.TABLE) and [Item.AUTO_TABLE](reporter-item-class.md#Item.AUTO_TABLE) |
| type (read only) | constant | type of the [Item](reporter-item-class.md). Can be [Item.LINE](reporter-item-class.md#Item.LINE), [Item.TEXT](reporter-item-class.md#Item.TEXT) etc. |
| width | real | Width for "rectangular" items (absolute difference between x and x2). Note that depending on
what your object reference corner preference is set to, changing this property will result in different
behaviour. |
| x | real | X coordinate |
| x2 | real | Second X coordinate for "rectangular" items |
| y | real | Y coordinate |
| y2 | real | Second Y coordinate for "rectangular" items |

| Detailed Description<br>The Item class allows you to access the items in templates that Reporter currently has open. |
| --- |

| Constructor
new Item(page*[[Page](reporter-page-class.md)]*, type*[constant]*, name (optional)*[string]*, x (optional)*[real]*, x2 (optional)*[real]*, y (optional)*[real]*, y2 (optional)*[real]*)

Description<br>Create a new [Item](reporter-item-class.md). The name and coordinates arguments are optional. [Item.TABLE](reporter-item-class.md#Item.TABLE) items are constructed with two rows and two columns by default. If you require only one row or column, use [DeleteRow](reporter-item-class.md#Item::DeleteRow) and [DeleteColumn](reporter-item-class.md#Item::DeleteColumn). |
| --- |

#### Arguments

* page ([Page](reporter-page-class.md))
 
[Page](reporter-page-class.md) to create item in

* type (constant)
 
Item type. Can be [Item.LINE](reporter-item-class.md#Item.LINE), [Item.ARROW](reporter-item-class.md#Item.ARROW), [Item.RECTANGLE](reporter-item-class.md#Item.RECTANGLE), [Item.ELLIPSE](reporter-item-class.md#Item.ELLIPSE), [Item.TEXT](reporter-item-class.md#Item.TEXT), [Item.TEXTBOX](reporter-item-class.md#Item.TEXTBOX), [Item.IMAGE](reporter-item-class.md#Item.IMAGE), [Item.PROGRAM](reporter-item-class.md#Item.PROGRAM), [Item.D3PLOT](reporter-item-class.md#Item.D3PLOT), [Item.PRIMER](reporter-item-class.md#Item.PRIMER), [Item.THIS](reporter-item-class.md#Item.THIS), [Item.TEXT_FILE](reporter-item-class.md#Item.TEXT_FILE), [Item.IMAGE_FILE](reporter-item-class.md#Item.IMAGE_FILE), [Item.LIBRARY_IMAGE](reporter-item-class.md#Item.LIBRARY_IMAGE), [Item.LIBRARY_PROGRAM](reporter-item-class.md#Item.LIBRARY_PROGRAM), [Item.TABLE](reporter-item-class.md#Item.TABLE), [Item.AUTO_TABLE](reporter-item-class.md#Item.AUTO_TABLE), [Item.SCRIPT](reporter-item-class.md#Item.SCRIPT), [Item.SCRIPT_FILE](reporter-item-class.md#Item.SCRIPT_FILE), [Item.NOTE](reporter-item-class.md#Item.NOTE) or [Item.PLACEHOLDER](reporter-item-class.md#Item.PLACEHOLDER).

* name (optional) (string)
 
Name of item

* x (optional) (real)
 
X coordinate

* x2 (optional) (real)
 
Second X coordinate for "rectangular" items

* y (optional) (real)
 
Y coordinate

* y2 (optional) (real)
 
Second Y coordinate for "rectangular" items

| Returns
<br>[Item](reporter-item-class.md) object<br>
Return type
<br>Item |
| --- |

| Example
<br>To create a new blank Item object:<br>
```
var i = new Item();
```
 |
| --- |

| Details of functions 
DeleteColumn(column*[integer]*)

Description<br>Delete a column from a table. Valid for item type [Item.TABLE](reporter-item-class.md#Item.TABLE) and [Item.AUTO_TABLE](reporter-item-class.md#Item.AUTO_TABLE). |
| --- |

#### Arguments

* column (integer)
 
The index of the column to delete. Note that indices start from 0.

| Returns
<br>No return value |
| --- |

| Example
<br>To delete the second column from table item i:<br>
```
i.DeleteColumn(1);
```
 |
| --- |

* * *

| DeleteRow(row*[integer]*)

Description<br>Delete a row from a table. Valid for item type [Item.TABLE](reporter-item-class.md#Item.TABLE). |
| --- |

#### Arguments

* row (integer)
 
The
index of the row to delete. Note that indices start from 0.

| Returns
<br>No return value |
| --- |

| Example
<br>To delete the second row from table item i:<br>
```
i.DeleteRow(1);
```
 |
| --- |

* * *

| Generate()

Description<br>Generate an item. |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To generate item i:<br>
```
i.Generate();
```
 |
| --- |

* * *

| GetAll(page*[[Page](reporter-page-class.md)]*) [static]
Description<br>Get all of the items on a page. |
| --- |

#### Arguments

* page ([Page](reporter-page-class.md))
 
[Page](reporter-page-class.md) to get items from.

| Returns
<br>Array of [Item](reporter-item-class.md) objects<br>
Return type
<br>Array |
| --- |

| Example
<br>To get all of the items on page p:<br><br>
```
var items = Item.GetAll(p);
```
<br><br> |
| --- |

* * *

| GetCellProperties(row*[integer]*, column*[integer]*)

Description<br>Get the properties of the specified cell. Valid for item type [Item.TABLE](reporter-item-class.md#Item.TABLE). |
| --- |

#### Arguments

* row (integer)
 
The row
index of the cell of interest. Note that indices start from 0.

* column (integer)
 
The column index of the cell of interest. Note that indices start from 0.

| Returns |
| --- |

Object with the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| bottomBorderWidth | real | Cell bottom border width. Can be 0.0, 0.1, 0.5, 0.75, 1.0, 1.5, 2.0, 2.5, 3.0, 4.0, 5.0. Other values will
result in no border. |
| colspan | integer | Number of columns this cell spans (for merged cells). 1 if not merged. Use columnMergeOrigin to find
top-left cell. |
| column | integer | The column index |
| columnMergeOrigin | integer | The column index of the top-left cell in this merge cell group (if cell not merged then ==
column). |
| conditions | integer | Number of conditions assigned to this cell. |
| fillColour | [Colour](reporter-colour-class.md) object | Fill colour |
| fontName | string | Font name (e.g. "Courier"). |
| fontSize | integer | Font size (between 6 and 72). |
| fontStyle | integer | Font style. See [Text style](reporter-reporter-class.md#Reporter_Text_style_constants) constants for
details. |
| height | real | Cell height. Modifying this property will modify the height of all cells in the row. |
| hyperlinkHTML | string | Hyperlink destination for HTML. |
| hyperlinkPDF | string | Hyperlink destination for PDF. |
| hyperlinkReport | string | Hyperlink destination for Report or page within Report. |
| justify | integer | Text justification for the item. Same rules as justify property of [Item](reporter-item-class.md)
Class. |
| output | string | The output text from a Program or Library Program cell. |
| prefix | string | Prefix text to appear before Library Program output. |
| program | string | Path and filename for a Program cell, or the filename (e.g. *title.js*) for a Library Program
cell. |
| programArgs | Array of strings | Program arguments |
| rightBorderWidth | real | Cell right border width. Can be 0.0, 0.1, 0.5, 0.75, 1.0, 1.5, 2.0, 2.5, 3.0, 4.0, 5.0. Other values will
result in no border. |
| row | integer | The cell row index. |
| rowMergeOrigin | integer | The row index of the top-left cell in this merge cell group (if cell not merged then == row). |
| rowSpan | integer | Number of rows this cell spans (for merged cells). == 1 if not merged. Use rowMergeOrigin to find top-left
cell. |
| suffix | string | Suffix text to appear after Library Program output. |
| text | string | The cell text. For Program and Library Program cells, use the **prefix**, **output** and
**suffix** properties. |
| textColour | [Colour](reporter-colour-class.md) object | Colour of text |
| topBorderWidth | real | Cell top border width. Can be 0.0, 0.1, 0.5, 0.75, 1.0, 1.5, 2.0, 2.5, 3.0, 4.0, 5.0. Other values will
result in no border. |
| type | integer | Can be [Item.TEXT](reporter-item-class.md#Item.TEXT),[Item.LIBRARY_PROGRAM](reporter-item-class.md#Item.LIBRARY_PROGRAM)or [Item.PROGRAM](reporter-item-class.md#Item.PROGRAM). |
| variable | string | REPORTER variable for library program output. |
| width | real | Cell width. Modifying this property will modify the width of all cells in the column. |

#### Return type

object

| Example
<br>To get the properties of the top-left cell in a table:<br><br>
```
i.GetCellProperties(0, 0);
```
<br><br> |
| --- |

* * *

| GetColumnProperties(column*[integer]*, header*[constant]*)

Description<br>Get an autotable column properties. Valid for item type [Item.AUTO_TABLE](reporter-item-class.md#Item.AUTO_TABLE). |
| --- |

#### Arguments

* column (integer)
 
The index of the column of interest. Note that indices start from 0.

* header (constant)
 
An argument to signify to get the properties of the header or the generated rows. Can be [Reporter.AUTO_TABLE_HEADER](reporter-reporter-class.md#Reporter.AUTO_TABLE_HEADER) or [Reporter.AUTO_TABLE_ROWS](reporter-reporter-class.md#Reporter.AUTO_TABLE_ROWS).

| Returns |
| --- |

Object with the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| conditions | integer | Number of conditions assigned to this cell. |
| fillColour | [Colour](reporter-colour-class.md) object | Fill colour |
| fontName | string | Font name (e.g. "Courier"). |
| fontSize | integer | Font size (between 6 and 72). |
| fontStyle | integer | Font style. Same rules as fontStyle property of |
| hyperlinkHTML | string | Hyperlink destination for HTML. |
| hyperlinkPDF | string | Hyperlink destination for PDF. |
| hyperlinkReport | string | Hyperlink destination for Report or page within Report. |
| justify | integer | Text justification for the item. Same rules as justify property of [Item](reporter-item-class.md)
Class. |
| program | string | Path and filename for a Program cell, or the filename (e.g. *title.js*) for a Library Program
cell. |
| programArgs | Array of strings | Program arguments |
| text | string | The cell text. For Program and Library Program cells, use the **prefix**, **output** and
**suffix** properties. |
| textColour | [Colour](reporter-colour-class.md) object | Colour of text |
| type | integer | Can be [Item.TEXT](reporter-item-class.md#Item.TEXT),[Item.LIBRARY_PROGRAM](reporter-item-class.md#Item.LIBRARY_PROGRAM)or [Item.PROGRAM](reporter-item-class.md#Item.PROGRAM). |
| width | real | Cell width. Modifying this property will modify the width of all cells in the column. |

#### Return type

object

| Example
<br>Returns the column properties of the header of the first column:<br><br>
```
i.GetColumnProperties(0, Reporter.AUTO_TABLE_HEADER);
```
<br><br> |
| --- |

* * *

| GetColumnWidth(row*[integer]*)

Description<br>Get the width of a table column. Valid for item types [Item.TABLE](reporter-item-class.md#Item.TABLE)<br>or [Item.AUTO_TABLE](reporter-item-class.md#Item.AUTO_TABLE). |
| --- |

#### Arguments

* row (integer)
 
The index of the column of interest. Note that indices start from 0.

| Returns
<br>Integer. The width of the specified column.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the width of the first column in a table:<br><br>
```
i.GetColumnWidth(0);
```
<br><br> |
| --- |

* * *

| GetCondition(index*[integer]*)

Description<br>Get the conditional formatting data for an item. Valid for item types [Item.TEXT_FILE](reporter-item-class.md#Item.TEXT_FILE), [Item.PROGRAM](reporter-item-class.md#Item.PROGRAM), [Item.TEXT](reporter-item-class.md#Item.TEXT) or [Item.TEXTBOX](reporter-item-class.md#Item.TEXTBOX) (for [Item.AUTO_TABLE](reporter-item-class.md#Item.AUTO_TABLE) and [Item.TABLE](reporter-item-class.md#Item.TABLE), see<br>GetCondition functions with additional arguments below). |
| --- |

#### Arguments

* index (integer)
 
The index of the condition to get. Note that indices start from 0. See [conditions](reporter-item-class.md#conditions) for the total number of comditions

| Returns |
| --- |

Object with the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| fillColour | [Colour](reporter-colour-class.md) object | Fill colour |
| fontName | string | Font name (e.g. "Courier"). |
| fontSize | integer | Font size (between 6 and 72). |
| fontStyle | integer | Font style. See [Text style](reporter-reporter-class.md#Reporter_Text_style_constants) constants for
details. |
| justify | integer | Text alignment for the item. See [Justification](reporter-reporter-class.md#Reporter_Justification_constants)
constants for details. |
| name | string | Condition name |
| textColour | [Colour](reporter-colour-class.md) object | Colour of text |
| type | integer | See [Condition types](reporter-reporter-class.md#Reporter_Condition_types_constants) constants for
details. |
| value | string | First condition value |
| value2 | string | Second condition value (where relevant) |

#### Return type

object

| Example
<br>To get the data for the 2nd condition in item i:<br><br>
```
var condition = i.GetCondition(1);
```
<br><br> |
| --- |

* * *

| GetCondition(index*[integer]*, column*[integer]*)

Description<br>Get the conditional formatting data for an [Item.AUTO_TABLE](reporter-item-class.md#Item.AUTO_TABLE)<br>item. |
| --- |

#### Arguments

* index (integer)
 
The index of the condition to get.
Note that indices start from 0.

* column (integer)
 
The column to get the condition from. Note that indices start from 0.

| Returns |
| --- |

Object with the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| fillColour | [Colour](reporter-colour-class.md) object | Fill colour |
| fontName | string | Font name (e.g. "Courier"). |
| fontSize | integer | Font size (between 6 and 72). |
| fontStyle | integer | Font style. See [Text style](reporter-reporter-class.md#Reporter_Text_style_constants) constants for
details. |
| justify | integer | Text alignment for the item. See [Justification](reporter-reporter-class.md#Reporter_Justification_constants)
constants for details. |
| name | string | Condition name |
| textColour | [Colour](reporter-colour-class.md) object | Colour of text |
| type | integer | See [Condition types](reporter-reporter-class.md#Reporter_Condition_types_constants) constants for
details. |
| value | string | First condition value |
| value2 | string | Second condition value (where relevant) |

#### Return type

object

| Example
<br>To get the data for the 2nd condition from the 3rd column in autotable item i:<br><br>
```
var condition = i.GetCondition(1, 2);
```
<br><br> |
| --- |

* * *

| GetCondition(index*[integer]*, row*[integer]*, column*[integer]*)

Description<br>Get the conditional formatting data for an [Item.TABLE](reporter-item-class.md#Item.TABLE)<br>item. |
| --- |

#### Arguments

* index (integer)
 
The index of the condition to get.
Note that indices start from 0.

* row (integer)
 
The cell row to get the condition from. Note that indices start from 0.

* column (integer)
 
The cell column to get the condition from. Note that indices start from 0.

| Returns |
| --- |

Object with the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| fillColour | [Colour](reporter-colour-class.md) object | Fill colour |
| fontName | string | Font name (e.g. "Courier"). |
| fontSize | integer | Font size (between 6 and 72). |
| fontStyle | integer | Font style. See [Text style](reporter-reporter-class.md#Reporter_Text_style_constants) constants for
details. |
| justify | integer | Text alignment for the item. See [Justification](reporter-reporter-class.md#Reporter_Justification_constants)
constants for details. |
| name | string | Condition name |
| textColour | [Colour](reporter-colour-class.md) object | Colour of text |
| type | integer | See [Condition types](reporter-reporter-class.md#Reporter_Condition_types_constants) constants for
details. |
| value | string | First condition value |
| value2 | string | Second condition value (where relevant) |

#### Return type

object

| Example
<br>To get the data for the 2nd condition from the 4th row, 3rd column in table item i:<br><br>
```
var condition = i.GetCondition(1, 3, 2);
```
<br><br> |
| --- |

* * *

| GetFromName(page*[[Page](reporter-page-class.md)]*, name*[string]*) [static]
Description<br>Get an Item from its name. |
| --- |

#### Arguments

* page ([Page](reporter-page-class.md))
 
[Page](reporter-page-class.md) to get item from

* name (string)
 
Item name

| Returns
<br>[Item](reporter-item-class.md) object (or null if item cannot be found)<br>
Return type
<br>Item |
| --- |

| Example
<br>To get the item with name test on page p:<br>
```
var item = Item.GetFromName(p, "test");
```
 |
| --- |

* * *

| GetGeneratedData(row\_index*[integer]*, column\_index*[integer]*)

Description<br>Get the text that appears in an autotable cell once generated. Valid for item type [Item.AUTO_TABLE](reporter-item-class.md#Item.AUTO_TABLE). |
| --- |

#### Arguments

* row\_index (integer)
 
The index of the row of interest. Note that indices start from 0.

* column\_index (integer)
 
The index of the column of interest. Note that indicies start from 0.

| Returns
<br>String: the text displayed in the specified row and column.<br>
Return type
<br>String |
| --- |

| Example
<br>Get the data from the first cell in the first row and column in an autotable.<br><br>
```
i.GetGeneratedData(0, 0);
```
<br><br> |
| --- |

* * *

| GetRowHeight(row*[integer]*)

Description<br>Get the height of a table row. Valid for item type [Item.TABLE](reporter-item-class.md#Item.TABLE). |
| --- |

#### Arguments

* row (integer)
 
The
index of the row of interest. Note that indices start from 0.

| Returns
<br>integer<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the height of the first row in a table:<br><br>
```
i.GetRowHeight(0);
```
<br><br> |
| --- |

* * *

| InsertColumn(column*[integer]*)

Description<br>Insert a column into a table. Valid for item types [Item.TABLE](reporter-item-class.md#Item.TABLE)<br>and [Item.AUTO_TABLE](reporter-item-class.md#Item.AUTO_TABLE). |
| --- |

#### Arguments

* column (integer)
 
The index of the position where the inserted column will end up. Note that indices start from 0. If no
argument is given, a column will be added to the bottom of the table.

| Returns
<br>No return value |
| --- |

| Example
<br>To insert a column that will become the second column from the left of the table:<br>
```
i.InsertColumn(1);
```
 |
| --- |

* * *

| InsertRow(row*[integer]*)

Description<br>Insert a row into a table. Valid for item type [Item.TABLE](reporter-item-class.md#Item.TABLE). |
| --- |

#### Arguments

* row (integer)
 
The
index of the position where the inserted row will end up. Note that indices start from 0. If no argument is given, a row
will be added to the bottom of the table.

| Returns
<br>No return value |
| --- |

| Example
<br>To insert a row that will become the second row from the top of the table:<br>
```
i.InsertRow(1);
```
 |
| --- |

* * *

| MergeCells(topLeftRow*[integer]*, topLeftColumn*[integer]*, rows*[integer]*, columns*[integer]*)

Description<br>Merge specified cells in a table. Valid for item types [Item.TABLE](reporter-item-class.md#Item.TABLE) and [Item.AUTO_TABLE](reporter-item-class.md#Item.AUTO_TABLE). |
| --- |

#### Arguments

* topLeftRow (integer)
 
The row index of the top-left cell in the group of cells to be merged. Note that indices start from
0.

* topLeftColumn (integer)
 
The column index of the top-left cell in the group of cells to be merged. Note that indices start from
0.

* rows (integer)
 
The number of rows of cells to be merged (measured from the topLeftRow position).

* columns (integer)
 
The number of columns of cells to be merged (measured from the topLeftColumn position).

| Returns
<br>No return value |
| --- |

| Example
<br>To merge the cells in first row and the first two columns in the table:<br><br>
```
i.MergeCells(0, 0, 1, 2);
```
<br><br> |
| --- |

* * *

| RemoveCondition(condition*[integer]*)

Description<br>Remove the specified condition for an item. Valid for item types [Item.TEXT_FILE](reporter-item-class.md#Item.TEXT_FILE), [Item.PROGRAM](reporter-item-class.md#Item.PROGRAM), [Item.TEXT](reporter-item-class.md#Item.TEXT) or [Item.TEXTBOX](reporter-item-class.md#Item.TEXTBOX) (for [Item.AUTO_TABLE](reporter-item-class.md#Item.AUTO_TABLE) and [Item.TABLE](reporter-item-class.md#Item.TABLE), see<br>RemoveCondition functions with additional arguments below). |
| --- |

#### Arguments

* condition (integer)
 
The index of the condition you wish to remove. Note that indices start at 0.

| Returns
<br>No return value |
| --- |

| Example
<br>To remove the condition for the condition index 1 in item i:<br><br>
```
i.RemoveCondition(1);
```
 |
| --- |

* * *

| RemoveCondition(condition*[integer]*, column*[integer]*)

Description<br>Remove the specified condition for an [Item.AUTO_TABLE](reporter-item-class.md#Item.AUTO_TABLE)<br>item. |
| --- |

#### Arguments

* condition (integer)
 
The index of the condition you
wish to remove. Note that indices start at 0.

* column (integer)
 
The column to remove the condition for. Note that indices start from 0.

| Returns
<br>No return value |
| --- |

| Example
<br>To remove the condition for condition index 1 in the third column in item i:<br><br>
```
i.RemoveCondition(1, 2);
```
 |
| --- |

* * *

| RemoveCondition(condition*[integer]*, row*[integer]*, column*[integer]*)

Description<br>Remove the specified condition for an [Item.TABLE](reporter-item-class.md#Item.TABLE)<br>item. |
| --- |

#### Arguments

* condition (integer)
 
The index of the condition you
wish to remove. Note that indices start at 0.

* row (integer)
 
The row to remove the condition for. Note that indices start from 0.

* column (integer)
 
The column to remove the condition for. Note that indices start from 0.

| Returns
<br>No return value |
| --- |

| Example
<br>To remove the condition for condition index 1 in the fourth row, third column in item i:<br><br>
```
i.RemoveCondition(1, 3, 2);
```
 |
| --- |

* * *

| SetCellProperties(properties*[object]*, row*[integer]*, column*[integer]*)

Description<br>Set the properties of the specified cell. Valid for item type [Item.TABLE](reporter-item-class.md#Item.TABLE). |
| --- |

#### Arguments

* properties (object)

An object
containing the cell properties. 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| bottomBorderWidth (optional) | real | Cell bottom border width. Can be 0.0, 0.1, 0.5,
0.75, 1.0, 1.5, 2.0, 2.5, 3.0, 4.0, 5.0. Other values will result in no border. |
| fillColour (optional) | [Colour](reporter-colour-class.md) object | Fill colour |
| fontName (optional) | string | Font name (e.g. "Courier"). |
| fontSize (optional) | integer | Font size (between 6 and 72). |
| fontStyle (optional) | integer | Font style. See [Text style](reporter-reporter-class.md#Reporter_Text_style_constants) constants for
details. |
| hyperlinkHTML (optional) | string | Hyperlink destination for HTML. |
| hyperlinkPDF (optional) | string | Hyperlink destination for PDF. |
| hyperlinkReport (optional) | string | Hyperlink destination for Report or page within Report. |
| justify (optional) | integer | Text justification for the item. Same rules as justify property of [Item](reporter-item-class.md)
Class. |
| prefix (optional) | string | Prefix text to appear before Library Program output. |
| program (optional) | string | Path and filename for a Program cell, or the filename (e.g. *title.js*) for a Library Program
cell. |
| programArgs (optional) | Array of strings | Program arguments |
| rightBorderWidth (optional) | real | Cell right border width. Can be 0.0, 0.1, 0.5, 0.75, 1.0, 1.5, 2.0, 2.5, 3.0, 4.0, 5.0. Other values will
result in no border. |
| suffix (optional) | string | Suffix text to appear after Library Program output. |
| text (optional) | string | The cell text. For Program and Library Program cells, use the **prefix**, **output** and
**suffix** properties. |
| textColour (optional) | [Colour](reporter-colour-class.md) object | Colour of text |
| topBorderWidth (optional) | real | Cell top border width. Can be 0.0, 0.1, 0.5, 0.75, 1.0, 1.5, 2.0, 2.5, 3.0, 4.0, 5.0. Other values will
result in no border. |
| type (optional) | integer | Can be [Item.TEXT](reporter-item-class.md#Item.TEXT),[Item.LIBRARY_PROGRAM](reporter-item-class.md#Item.LIBRARY_PROGRAM)or [Item.PROGRAM](reporter-item-class.md#Item.PROGRAM). |
| variable (optional) | string | REPORTER variable for library program output. |

* row (integer)
 
The row index of the cell to be modified. Note that indices start from 0.

* column (integer)
 
The column index of the cell to be modified. Note that indices start from 0.

| Returns
<br>No return value |
| --- |

| Example
<br>To set the properties of the cell object to those of the object *cell\_obj*:<br><br>
```
i.SetCellProperties(cell_obj, 0, 0);
```
<br><br> |
| --- |

* * *

| SetColumnProperties(properties*[object]*, column*[integer]*, header*[constant]*)

Description<br>Set the properties of an autotable column. Valid for item type [Item.AUTO_TABLE](reporter-item-class.md#Item.AUTO_TABLE). |
| --- |

#### Arguments

* properties (object)

Set the properties of an autotable column. Valid for item type [Item.AUTO_TABLE](reporter-item-class.md#Item.AUTO_TABLE). 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| fillColour (optional) | [Colour](reporter-colour-class.md) object | Fill colour |
| fontName (optional) | string | Font name (e.g. "Courier"). |
| fontSize (optional) | integer | Font size (between 6 and 72). |
| fontStyle (optional) | integer | Font style. Same rules as fontStyle property of |
| hyperlinkHTML (optional) | string | Hyperlink destination for HTML. |
| hyperlinkPDF (optional) | string | Hyperlink destination for PDF. |
| hyperlinkReport (optional) | string | Hyperlink destination for Report or page within Report. |
| justify (optional) | integer | Text justification for the item. Same rules as justify property of [Item](reporter-item-class.md)
Class. |
| program (optional) | string | Path and filename for a Program cell, or the filename (e.g. *title.js*) for a Library Program
cell. |
| programArgs (optional) | Array of strings | Program arguments |
| text (optional) | string | The cell text. For Program and Library Program cells, use the **prefix**, **output** and
**suffix** properties. |
| textColour (optional) | [Colour](reporter-colour-class.md) object | Colour of text |
| type (optional) | integer | Can be [Item.TEXT](reporter-item-class.md#Item.TEXT),[Item.LIBRARY_PROGRAM](reporter-item-class.md#Item.LIBRARY_PROGRAM)or [Item.PROGRAM](reporter-item-class.md#Item.PROGRAM). |

* column (integer)
 
The index of the column of interest. Note that indices start from 0.

* header (constant)
 
An argument to signify to set the properties of the header or the generated rows. Can be [Reporter.AUTO_TABLE_HEADER](reporter-reporter-class.md#Reporter.AUTO_TABLE_HEADER) or [Reporter.AUTO_TABLE_ROWS](reporter-reporter-class.md#Reporter.AUTO_TABLE_ROWS).

| Returns
<br>No return value |
| --- |

| Example
<br>Sets the column properties of the header of the first column with the properties of the object<br>*column\_obj*.<br>
```
i.SetColumnProperties(column_obj, 0, Reporter.AUTO_TABLE_HEADER);
```
<br><br> |
| --- |

* * *

| SetColumnWidth(column*[integer]*, width*[real]*)

Description<br>Set the width of a table column. Valid for item type [Item.TABLE](reporter-item-class.md#Item.TABLE). |
| --- |

#### Arguments

* column (integer)
 
The
index of the column of interest. Note that indices start from 0.

* width (real)
 
The column width.

| Returns
<br>No return value |
| --- |

| Example
<br>To set the width of the first column in a table to 10.0:<br>
```
i.SetColumnWidth(0, 10.0);
```
 |
| --- |

* * *

| SetCondition(condition*[integer]*, properties*[object]*)

Description<br>Set the specified condition for an item. Valid for item types [Item.TEXT_FILE](reporter-item-class.md#Item.TEXT_FILE), [Item.PROGRAM](reporter-item-class.md#Item.PROGRAM), [Item.TEXT](reporter-item-class.md#Item.TEXT) or [Item.TEXTBOX](reporter-item-class.md#Item.TEXTBOX) (for [Item.AUTO_TABLE](reporter-item-class.md#Item.AUTO_TABLE) and [Item.TABLE](reporter-item-class.md#Item.TABLE), see<br>SetCondition functions with additional arguments below). |
| --- |

#### Arguments

* condition (integer)
 
The index of the condition you wish to set. Note that indices start at 0. If a condition already exists at
the specified index, it will be replaced. To add a new condition, specify an index equal to the number of existing
conditions.

* properties (object)

The index of the condition you wish to set. Note that indices start at 0. If a condition already exists at
the specified index, it will be replaced. To add a new condition, specify an index equal to the number of existing
conditions. 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| fillColour (optional) | [Colour](reporter-colour-class.md) object | Fill colour |
| fontName (optional) | string | Font name (e.g. "Courier"). |
| fontSize (optional) | integer | Font size (between 6 and 72). |
| fontStyle (optional) | integer | Font style. See [Text style](reporter-reporter-class.md#Reporter_Text_style_constants) constants for
details. |
| justify (optional) | integer | Text alignment for the item. See [Justification](reporter-reporter-class.md#Reporter_Justification_constants)
constants for details. |
| name | string | Condition name |
| textColour (optional) | [Colour](reporter-colour-class.md) object | Colour of text |
| type (optional) | integer | See [Condition types](reporter-reporter-class.md#Reporter_Condition_types_constants) constants for
details. |
| value (optional) | string | First condition value |
| value2 (optional) | string | Second condition value (where relevant) |

| Returns
<br>No return value |
| --- |

| Example
<br>To set the conditions for the condition index 1 in item i to those of the object obj:<br><br>
```
var obj = { name:"example", type:Reporter.CONDITION_EQUAL_TO, value:"Test", textColour:Colour.Red() };
i.SetCondition(1, obj);
```
 |
| --- |

* * *

| SetCondition(condition*[integer]*, column*[integer]*, properties*[object]*)

Description<br>Set the specified condition for an [Item.AUTO_TABLE](reporter-item-class.md#Item.AUTO_TABLE)<br>item. |
| --- |

#### Arguments

* condition (integer)
 
The index of the condition you
wish to set. Note that indices start at 0. If a condition already exists at the specified index, it will be replaced. To
add a new condition, specify an index equal to the number of existing conditions.

* column (integer)
 
The column to set the condition for. Note that indices start from 0.

* properties (object)

The column to set the condition for. Note that indices start from 0. 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| fillColour (optional) | [Colour](reporter-colour-class.md) object | Fill colour |
| fontName (optional) | string | Font name (e.g. "Courier"). |
| fontSize (optional) | integer | Font size (between 6 and 72). |
| fontStyle (optional) | integer | Font style. See [Text style](reporter-reporter-class.md#Reporter_Text_style_constants) constants for
details. |
| justify (optional) | integer | Text alignment for the item. See [Justification](reporter-reporter-class.md#Reporter_Justification_constants)
constants for details. |
| name | string | Condition name |
| textColour (optional) | [Colour](reporter-colour-class.md) object | Colour of text |
| type (optional) | integer | See [Condition types](reporter-reporter-class.md#Reporter_Condition_types_constants) constants for
details. |
| value (optional) | string | First condition value |
| value2 (optional) | string | Second condition value (where relevant) |

| Returns
<br>No return value |
| --- |

| Example
<br>To set the conditions for condition index 1 in the third column in item i to those of the object obj:<br><br>
```
var obj = { name:"example", type:Reporter.CONDITION_EQUAL_TO, value:"Test", textColour:Colour.Red() };
i.SetCondition(1, 2, obj);
```
 |
| --- |

* * *

| SetCondition(condition*[integer]*, row*[integer]*, column*[integer]*, properties*[object]*)

Description<br>Set the specified condition for an [Item.TABLE](reporter-item-class.md#Item.TABLE)<br>item. |
| --- |

#### Arguments

* condition (integer)
 
The index of the condition you
wish to set. Note that indices start at 0. If a condition already exists at the specified index, it will be replaced. To
add a new condition, specify an index equal to the number of existing conditions.

* row (integer)
 
The row to set the condition for. Note that indices start from 0.

* column (integer)
 
The column to set the condition for. Note that indices start from 0.

* properties (object)

The column to set the condition for. Note that indices start from 0. 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| fillColour (optional) | [Colour](reporter-colour-class.md) object | Fill colour |
| fontName (optional) | string | Font name (e.g. "Courier"). |
| fontSize (optional) | integer | Font size (between 6 and 72). |
| fontStyle (optional) | integer | Font style. See [Text style](reporter-reporter-class.md#Reporter_Text_style_constants) constants for
details. |
| justify (optional) | integer | Text alignment for the item. See [Justification](reporter-reporter-class.md#Reporter_Justification_constants)
constants for details. |
| name | string | Condition name |
| textColour (optional) | [Colour](reporter-colour-class.md) object | Colour of text |
| type (optional) | integer | See [Condition types](reporter-reporter-class.md#Reporter_Condition_types_constants) constants for
details. |
| value (optional) | string | First condition value |
| value2 (optional) | string | Second condition value (where relevant) |

| Returns
<br>No return value |
| --- |

| Example
<br>To set the conditions for condition index 1 in the fourth row, third column in item i to those of the object<br>obj:<br>
```
var obj = { name:"example", type:Reporter.CONDITION_EQUAL_TO, value:"Test", textColour:Colour.Red()
}; i.SetCondition(1, 3, 2, obj);
```
 |
| --- |

* * *

| SetRowHeight(row*[integer]*, height*[real]*)

Description<br>Set the height of a table row. Valid for item type [Item.TABLE](reporter-item-class.md#Item.TABLE) and [Item.AUTO_TABLE](reporter-item-class.md#Item.AUTO_TABLE). |
| --- |

#### Arguments

* row (integer)
 
The index of the row of interest. Note that indices start from 0.

* height (real)
 
The row height.

| Returns
<br>No return value |
| --- |

| Example
<br>To set the height of the first row in a table to 10.0:<br>
```
i.SetRowHeight(0, 10.0);
```
 |
| --- |

* * *

| UnmergeCells(row*[integer]*, column*[integer]*)

Description<br>Unmerge the specified cell in a table. All cells merged to the specified cell will be unmerged. Valid for<br>item types [Item.TABLE](reporter-item-class.md#Item.TABLE) and [Item.AUTO_TABLE](reporter-item-class.md#Item.AUTO_TABLE). |
| --- |

#### Arguments

* row (integer)
 
The row index of the cell to be unmerged. Note that indices start from 0.

* column (integer)
 
The column index of the cell to be unmerged. Note that indices start from 0..

| Returns
<br>No return value |
| --- |

| Example
<br>To unmerge the top-left cell in a table:<br><br>
```
i.UnmergeCells(0, 0);
```
<br><br> |
| --- |

* * *