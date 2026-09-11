# Page class

The Page class allows you to return or set the current active page in T/HIS. [More...](this-page-class.md#Page_details)

The T/HIS JavaScript API provides many class constants, properties and methods. For Arup to
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

* [AddGraph](this-page-class.md#Page::AddGraph)(Page number*[integer]*, Graph number (optional)*[integer]*, Graph number to copy properties from (optional)*[integer]*, Number of graphs (optional)*[integer]*)
* [Layout](this-page-class.md#Page::Layout)(Page number*[integer]*, Layout*[String or Integer]*, Num in X (optional)*[integer]*, Num in Y (optional)*[integer]*)
* [RemoveGraph](this-page-class.md#Page::RemoveGraph)(Page number*[integer]*, Graph number (optional)*[integer]*, Lower end of range for removing graphs (optional)*[integer]*, Upper end of range for removing graphs (optional)*[integer]*)
* [ReturnActivePage](this-page-class.md#Page::ReturnActivePage)()
* [ReturnGraphs](this-page-class.md#Page::ReturnGraphs)(Page number*[integer]*)
* [SetActivePage](this-page-class.md#Page::SetActivePage)(Page number*[integer]*)

| Detailed Description<br>The Page class allows you to return or set the current active page in T/HIS. |
| --- |

| Details of functions 
AddGraph(Page number*[integer]*, Graph number (optional)*[integer]*, Graph number to copy properties from (optional)*[integer]*, Number of graphs (optional)*[integer]*) [static]
Description<br>Adds one or more graphs to the specified page. |
| --- |

#### Arguments

* Page number (integer)
 
Page number to add graph(s) to.

* Graph number (optional) (integer)
 
Graph number to add to page. If this argument is 0 or not given, a new graph is created.

* Graph number to copy properties from (optional) (integer)
 
If the second argument is 0, this specifies which graph to copy properties from when creating new graphs.

* Number of graphs (optional) (integer)
 
If the second argument is 0, this specifies the number of new graphs to create and add to the specified page.

| Returns
<br>True if the graph was added, false if failed.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To add graph 1 to page 2<br>
```
 Page.AddGraph(2,1);
```
 |
| --- |

* * *

| Layout(Page number*[integer]*, Layout*[String or Integer]*, Num in X (optional)*[integer]*, Num in Y (optional)*[integer]*) [static]
Description<br>Sets the layout of either all pages or a specified page. |
| --- |

#### Arguments

* Page number (integer)
 
Page number for which to set layout. If this argument is 0 then layout will be set on all pages individually. If -1 then the layout will be set globally, as in the 'Graphs' panel.

* Layout (String or Integer)
 
Layout specifier. Options are: "wide" or 1 - Tile wide, "tall" or 2 - Tile tall, "1x1" or 3 - 1x1, "2x2" or 4 - 2x2, "3x3" or 5 - 3x3, "xy" or 6 - XxY.

* Num in X (optional) (integer)
 
Number of graphs in X-direction if user-defined XxY layout (6).

* Num in Y (optional) (integer)
 
Number of graphs in Y-direction if user-defined XxY layout (6).

| Returns
<br>True if the layout was set, false if failed.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To set the layout of page 1 to 'Tile tall'.<br>
```
 Page.Layout(1,"tall");
```
 |
| --- |

* * *

| RemoveGraph(Page number*[integer]*, Graph number (optional)*[integer]*, Lower end of range for removing graphs (optional)*[integer]*, Upper end of range for removing graphs (optional)*[integer]*) [static]
Description<br>Remove one or more graphs from the specified page. |
| --- |

#### Arguments

* Page number (integer)
 
Page number to remove the graph from.

* Graph number (optional) (integer)
 
Graph number to remove from page. If this argument is 0 or not given, the highest number graph on the page will be removed. If this argument is -1, all graphs will be removed.

* Lower end of range for removing graphs (optional) (integer)
 
If the second argument is 0, this specifies the lower end of the range for removing graphs. All graphs with numbers within the specified range will be removed from the page.

* Upper end of range for removing graphs (optional) (integer)
 
If the second argument is 0, this specifies the upper end of the range for removing graphs. All graphs with numbers within the specified range will be removed from the page. If this argument is not given then it will be set to 32 by default.

| Returns
<br>True if the graph was removed, false if failed.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To remove any graph with number between 2 and 6 from page 3<br>
```
 Page.RemoveGraph(3,0,2,6);
```
 |
| --- |

* * *

| ReturnActivePage() [static]
Description<br>Returns the current active page in T/HIS. |
| --- |

#### Arguments

No arguments

| Returns
<br>integer<br>
Return type
<br>Number |
| --- |

| Example
<br>To return the current active page<br>
```
var p = Page.ReturnActivePage();
```
 |
| --- |

* * *

| ReturnGraphs(Page number*[integer]*) [static]
Description<br>Returns the graphs on the specified page as an array of Graph objects. |
| --- |

#### Arguments

* Page number (integer)
 
Page number for which to return the graphs it contains.

| Returns
<br>Array of Graph objects<br>
Return type
<br>Array |
| --- |

| Example
<br>To return the graphs on page 2.<br>
```
 Page.ReturnGraphs(2);
```
 |
| --- |

* * *

| SetActivePage(Page number*[integer]*) [static]
Description<br>Sets the current active page in T/HIS, returning -1 if the page does not exist or the page number if it does. |
| --- |

#### Arguments

* Page number (integer)
 
Page number to set to active page

| Returns
<br>True if the page was set, false if the page does not exist.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To set the current active page to 2<br>
```
 Page.SetActivePage(2);
```
 |
| --- |

* * *