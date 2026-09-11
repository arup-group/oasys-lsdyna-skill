# Page class

The Page class gives you access to pages in D3PLOT. [More...](d3plot-page-class.md#Page_details)

The D3PLOT JavaScript API provides many class constants, properties and methods. For Arup to
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

* [First](d3plot-page-class.md#Page::First)()
* [GetFromID](d3plot-page-class.md#Page::GetFromID)(page number*[integer]*)
* [Last](d3plot-page-class.md#Page::Last)()
* [Total](d3plot-page-class.md#Page::Total)()

## Member functions

* [Next](d3plot-page-class.md#Page::Next)()
* [Previous](d3plot-page-class.md#Page::Previous)()
* [Show](d3plot-page-class.md#Page::Show)()

## Page constants

### Constants for Layout

| **Name** | **Description** |
| --- | --- |
| Page.LAYOUT\_1\_1 | Layout with 1x1 windows per page |
| Page.LAYOUT\_2\_2 | Layout with 2x2 windows per page |
| Page.LAYOUT\_3\_3 | Layout with 3x3 windows per page |
| Page.LAYOUT\_CUSTOM | Custom layout with user defined numer of windows per page |
| Page.LAYOUT\_TILE\_TALL | Layout with tall tiles |
| Page.LAYOUT\_TILE\_WIDE | Layout with wide tiles |

## Page properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| layout | constant | The page layout. See Page [layout](d3plot-page-class.md#Page_layout_constants) constants |
| number (read only) | integer | The page number |
| x | integer | The number of windows in X for the [LAYOUT_CUSTOM](d3plot-page-class.md#Page.LAYOUT_CUSTOM) case |
| y | integer | The number of windows in Y for the [LAYOUT_CUSTOM](d3plot-page-class.md#Page.LAYOUT_CUSTOM) case |

| Detailed Description<br>The Page class allows you to modify pages in D3PLOT. There are various methods and properties available that allow you do alter how windows are displayed on pages. See the documentation below for more details. |
| --- |

| Details of functions 
First() [static]
Description<br>Returns the Page object for the first page in D3PLOT |
| --- |

#### Arguments

No arguments

| Returns
<br>Page object<br>
Return type
<br>Page |
| --- |

| Example
<br>To get the Page object for the first page:<br>
```
var p = Page.First();
```
 |
| --- |

* * *

| GetFromID(page number*[integer]*) [static]
Description<br>Returns the Page object for a page ID |
| --- |

#### Arguments

* page number (integer)
 
number of the page you want the Page object for

| Returns
<br>Page object<br>
Return type
<br>Page |
| --- |

| Example
<br>To get the Page object for page number 1<br>
```
var p = Page.GetFromID(1);
```
 |
| --- |

* * *

| Last() [static]
Description<br>Returns the Page object for the last page in D3PLOT |
| --- |

#### Arguments

No arguments

| Returns
<br>Page object<br>
Return type
<br>Page |
| --- |

| Example
<br>To get the Page object for the last page:<br>
```
var p = Page.Last();
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next page (or null if there is not one) |
| --- |

#### Arguments

No arguments

| Returns
<br>Page object<br>
Return type
<br>Page |
| --- |

| Example
<br>To get the page after page p:<br>
```
p = p.Next();
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous page (or null if there is not one) |
| --- |

#### Arguments

No arguments

| Returns
<br>Page object<br>
Return type
<br>Page |
| --- |

| Example
<br>To get the page before page p:<br>
```
p = p.Previous();
```
 |
| --- |

* * *

| Show()

Description<br>Shows this page in D3PLOT |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To show page p:<br>
```
p.Show();
```
 |
| --- |

* * *

| Total() [static]
Description<br>Returns the total number of pages in D3PLOT. |
| --- |

#### Arguments

No arguments

| Returns
<br>Total number of pages<br>
Return type
<br>integer |
| --- |

| Example
<br>To get total number of pages:<br>
```
var total = Page.Total();
```
 |
| --- |

* * *