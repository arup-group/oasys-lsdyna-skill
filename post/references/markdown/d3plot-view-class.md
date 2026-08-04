# View class

The View class allows you to control the view and plotting modes in D3PLOT. [More...](d3plot-view-class.md#View_details)

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

* [Ac](d3plot-view-class.md#View::Ac)()
* [Ct](d3plot-view-class.md#View::Ct)()
* [Hi](d3plot-view-class.md#View::Hi)()
* [Li](d3plot-view-class.md#View::Li)()
* [Redraw](d3plot-view-class.md#View::Redraw)()
* [Sh](d3plot-view-class.md#View::Sh)()
* [Show](d3plot-view-class.md#View::Show)(View type*[constant]*)
* [Si](d3plot-view-class.md#View::Si)()
* [Vec](d3plot-view-class.md#View::Vec)()

## View constants

### Constants for Show

| **Name** | **Description** |
| --- | --- |
| View.ISO | Isometric projection |
| View.XY | XY axis projection |
| View.XZ | XZ axis projection |
| View.YZ | YZ axis projection |

### Constants for plotting mode

| **Name** | **Description** |
| --- | --- |
| View.CURRENT | current mode |
| View.HIDDEN | Hidden line |
| View.SHADED | Shaded view |
| View.WIRE | Wireframe |

| Detailed Description<br>The View class gives you access to the different plotting modes and views.<br>See the documentation below for more details. |
| --- |

| Details of functions 
Ac() [static]
Description<br>Autoscales the view |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To autoscale<br>
```
View.Ac();
```
 |
| --- |

* * *

| Ct() [static]
Description<br>Does a contour plot |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To do a contour plot<br>
```
View.Ct();
```
 |
| --- |

* * *

| Hi() [static]
Description<br>Does a Hidden line plot |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To do a hidden line plot<br>
```
View.Hi();
```
 |
| --- |

* * *

| Li() [static]
Description<br>Does a line (wireframe) plot |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To do a line plot<br>
```
View.Li();
```
 |
| --- |

* * *

| Redraw() [static]
Description<br>Redraws the plot using the current plot mode. |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To redraw<br>
```
View.Redraw();
```
 |
| --- |

* * *

| Sh() [static]
Description<br>Does a shaded plot |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To do a shaded plot<br>
```
View.Sh();
```
 |
| --- |

* * *

| Show(View type*[constant]*) [static]
Description<br>Redraws using one of the standard views |
| --- |

#### Arguments

* View type (constant)
 
The view to show. Can be +/-[View.XY](d3plot-view-class.md#View.XY), +/-[View.YZ](d3plot-view-class.md#View.YZ), +/-[View.XZ](d3plot-view-class.md#View.XZ) or +/-[View.ISO](d3plot-view-class.md#View.ISO)

| Returns
<br>No return value |
| --- |

| Example
<br>To do an isometric view from the negative direction:<br>
```
View.Show(-View.ISO);
```
 |
| --- |

* * *

| Si() [static]
Description<br>Does a shaded image contour plot |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To do a shaded image contour plot<br>
```
View.Si();
```
 |
| --- |

* * *

| Vec() [static]
Description<br>Does a vector plot |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To do a vector plot<br>
```
View.Vec();
```
 |
| --- |

* * *