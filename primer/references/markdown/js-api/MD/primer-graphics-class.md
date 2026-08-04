# Graphics class

The Graphics class allows you to draw graphics in PRIMER. [More...](primer-graphics-class.md#Graphics_details)

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

## Class functions

* [DepthTest](primer-graphics-class.md#Graphics::DepthTest)(enable*[boolean]*)
* [DrawingFunction](primer-graphics-class.md#Graphics::DrawingFunction)(name*[function]*)
* [FillColour](primer-graphics-class.md#Graphics::FillColour)(colour*[[Colour](primer-colour-class.md)]*)
* [Finish](primer-graphics-class.md#Graphics::Finish)()
* [Line](primer-graphics-class.md#Graphics::Line)(x1*[real]*, y1*[real]*, z1*[real]*, x2*[real]*, y2*[real]*, z2*[real]*)
* [LineColour](primer-graphics-class.md#Graphics::LineColour)(colour*[[Colour](primer-colour-class.md)]*)
* [LineStyle](primer-graphics-class.md#Graphics::LineStyle)(style*[constant]*)
* [LineTo](primer-graphics-class.md#Graphics::LineTo)(x*[real]*, y*[real]*, z*[real]*)
* [LineWidth](primer-graphics-class.md#Graphics::LineWidth)(width*[Integer]*)
* [MoveTo](primer-graphics-class.md#Graphics::MoveTo)(x*[real]*, y*[real]*, z*[real]*)
* [PolygonFinish](primer-graphics-class.md#Graphics::PolygonFinish)()
* [PolygonStart](primer-graphics-class.md#Graphics::PolygonStart)()
* [Shape](primer-graphics-class.md#Graphics::Shape)(shape*[constant]*, size*[integer]*)
* [Start](primer-graphics-class.md#Graphics::Start)()
* [Text](primer-graphics-class.md#Graphics::Text)(text*[String]*)
* [TextColour](primer-graphics-class.md#Graphics::TextColour)(colour*[[Colour](primer-colour-class.md)]*)
* [TextSize](primer-graphics-class.md#Graphics::TextSize)(size*[Integer]*)

## Graphics constants

| **Name** | **Description** |
| --- | --- |
| Graphics.CIRCLE | Circle shape. See [Graphics.Shape()](primer-graphics-class.md#Graphics::Shape) for use. |
| Graphics.DASHDOT\_LINE | Dashed and dotted lines. See [Graphics.LineStyle()](primer-graphics-class.md#Graphics::LineStyle) for use. |
| Graphics.DASH\_LINE | Dashed lines. See [Graphics.LineStyle()](primer-graphics-class.md#Graphics::LineStyle) for use. |
| Graphics.DIAMOND | Diamond shape. See [Graphics.Shape()](primer-graphics-class.md#Graphics::Shape) for use. |
| Graphics.DOT\_LINE | Dotted lines. See [Graphics.LineStyle()](primer-graphics-class.md#Graphics::LineStyle) for use. |
| Graphics.FILLED\_CIRCLE | Filled circle shape. See [Graphics.Shape()](primer-graphics-class.md#Graphics::Shape) for use. |
| Graphics.FILLED\_DIAMOND | Filled diamond shape. See [Graphics.Shape()](primer-graphics-class.md#Graphics::Shape) for use. |
| Graphics.FILLED\_HOURGLASS | Filled hourglass shape. See [Graphics.Shape()](primer-graphics-class.md#Graphics::Shape) for use. |
| Graphics.FILLED\_SQUARE | Filled square shape. See [Graphics.Shape()](primer-graphics-class.md#Graphics::Shape) for use. |
| Graphics.HOURGLASS | Hourglass shape. See [Graphics.Shape()](primer-graphics-class.md#Graphics::Shape) for use. |
| Graphics.POINT | Point shape. See [Graphics.Shape()](primer-graphics-class.md#Graphics::Shape) for use. |
| Graphics.SOLID\_LINE | Solid lines. See [Graphics.LineStyle()](primer-graphics-class.md#Graphics::LineStyle) for use. |
| Graphics.SQUARE | Square shape. See [Graphics.Shape()](primer-graphics-class.md#Graphics::Shape) for use. |

| Detailed Description<br>The Graphics class gives you access to functions to draw lines, shapes etc on the graphics screen in PRIMER.<br>For example the following will draw a solid thick red line on the screen:<br> |
| --- |


```
Graphics.Start();
Graphics.LineWidth(3);
Graphics.LineColour(Colour.RED);
Graphics.LineStyle(Graphics.SOLID_LINE);
Graphics.Line(0, 0, 0, 10, 20, 30);
Graphics.Finish();
```

The drawing commands must be between

```
Graphics.Start()
```

and

```
Graphics.Finish()
```

or else
nothing will be seen.
This is suitable for sketching but the line will disappear if the graphics are redrawn or any dynamic viewing is done.
To draw graphics which will stay on the screen even if dynamic viewing or a redraw is done you have to register a
function using [Graphics.DrawingFunction()](primer-graphics-class.md#Graphics::DrawingFunction)
which will be called every time the graphics are redrawn by PRIMER. e.g:

```
var w = new Window("Graphics test", 0.8, 1.0, 0.5, 0.6);

var e = new Widget(w, Widget.BUTTON,  1, 21, 1, 7, "Exit");
e.onClick  = Exit;

do_draw();
Graphics.DrawingFunction(do_draw);

w.Show();

////////////////////////////////////////////////////////////////////////////////

function do_draw()
{
    Graphics.Start();
    Graphics.LineWidth(3);
    Graphics.LineColour(Colour.RED);
    Graphics.LineStyle(Graphics.SOLID_LINE);
    Graphics.Line(0, 0, 0, 10, 20, 30);
    Graphics.Finish();
}
```

See the documentation below for more details.

| Details of functions 
DepthTest(enable*[boolean]*) [static]
Description<br>Allows depth testing (hidden surface removal) to be turned on or off. Temporarily turning depth testing off may be used to ensure that an item (e.g. some text) is always drawn in front and will not be obscured. |
| --- |

#### Arguments

* enable (boolean)
 
Whether depth testing (hidden surface removal) is performed (true) or not (false)

| Returns
<br>No return value |
| --- |

| Example
<br>To turn off depth testing:<br>
```
Graphics.DepthTest(false);
```
<br>To turn depth testing back on:<br>
```
Graphics.DepthTest(true);
```
 |
| --- |

* * *

| DrawingFunction(name*[function]*) [static]
Description<br>Set the function to draw graphics from javaScript. This function will be called each time the graphics are redrawn after PRIMER has finished drawing everything else. This allows you to add extra items to the graphics.<br> To remove the graphics drawing function use Graphics.DrawingFunction(null).<br> **It is the responsibility of the script developer to ensure that any objects or variables that are used in the drawing function do not refer to items in PRIMER that no longer exist. Not doing so may cause PRIMER to crash**. For example, if you use some [Node](primer-node-class.md) objects in the drawing function that refer to nodes in model 1 and you delete the model, when the graphics are redrawn PRIMER may crash as the nodes referred to by the Node objects no longer exist. You should either remove the drawing function by calling Graphics.DrawingFunction(null) or set the [Node](primer-node-class.md) variables to null (and test that they exist before using them) in your drawing function **before** deleting the model.<br> **If a drawing function is used in your script, you should reset it before the script terminates to avoid a "race condition" between the script terminating and the graphics function being called. Not doing so may cause PRIMER to crash**.<br> |
| --- |

#### Arguments

* name (function)
 
The name of the function (or null to remove a function)

| Returns
<br>No return value |
| --- |

| Example
<br>To set function MyRedrawFunction as the Graphics drawing function<br>
```
Graphics.DrawingFunction(MyRedrawFunction);
```
 |
| --- |

* * *

| FillColour(colour*[[Colour](primer-colour-class.md)]*) [static]
Description<br>Sets the colour for drawing polygons. See the [Colour](primer-colour-class.md) class for more details on colours. |
| --- |

#### Arguments

* colour ([Colour](primer-colour-class.md))
 
The colour you want to fill polygons with

| Returns
<br>No return value |
| --- |

| Example
<br>To Set the current fill colour to red:<br>
```
Graphics.FillColour(Colour.RED);
```
<br>or<br>
```
Graphics.FillColour( Colour.RGB(255, 0, 0) );
```
 |
| --- |

* * *

| Finish() [static]
Description<br>Finish any graphics. See also [Graphics.Start()](primer-graphics-class.md#Graphics::Start). This **must** be used to finish drawing. |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To finish any graphics operations:<br>
```
Graphics.Finish();
```
 |
| --- |

* * *

| Line(x1*[real]*, y1*[real]*, z1*[real]*, x2*[real]*, y2*[real]*, z2*[real]*) [static]
Description<br>Draws a line from (x1, y1, z1) to (x2, y2, z2). See also [Graphics.LineTo()](primer-graphics-class.md#Graphics::LineTo) and [Graphics.MoveTo()](primer-graphics-class.md#Graphics::MoveTo) |
| --- |

#### Arguments

* x1 (real)
 
X coordinate of point 1

* y1 (real)
 
Y coordinate of point 1

* z1 (real)
 
Z coordinate of point 1

* x2 (real)
 
X coordinate of point 2

* y2 (real)
 
Y coordinate of point 2

* z2 (real)
 
Z coordinate of point 2

| Returns
<br>No return value |
| --- |

| Example
<br>To draw a line from (0.0, 0.0, 0.0) to (10.0, 20.0, 30.0)<br>
```
Graphics.Line(0.0, 0.0, 0.0, 10.0, 20.0, 30.0);
```
 |
| --- |

* * *

| LineColour(colour*[[Colour](primer-colour-class.md)]*) [static]
Description<br>Sets the colour for drawing lines. See the [Colour](primer-colour-class.md) class for more details on colours. |
| --- |

#### Arguments

* colour ([Colour](primer-colour-class.md))
 
The colour you want to draw lines with

| Returns
<br>No return value |
| --- |

| Example
<br>To Set the current drawing colour to red:<br>
```
Graphics.LineColour(Colour.RED);
```
<br>or<br>
```
Graphics.LineColour( Colour.RGB(255, 0, 0) );
```
 |
| --- |

* * *

| LineStyle(style*[constant]*) [static]
Description<br>Sets the style for drawing lines. |
| --- |

#### Arguments

* style (constant)
 
The style to draw lines with. Can be: [Graphics.SOLID_LINE](primer-graphics-class.md#Graphics.SOLID_LINE), [Graphics.DASH_LINE](primer-graphics-class.md#Graphics.DASH_LINE), [Graphics.DASHDOT_LINE](primer-graphics-class.md#Graphics.DASHDOT_LINE) or [Graphics.DOT_LINE](primer-graphics-class.md#Graphics.DOT_LINE)

| Returns
<br>No return value |
| --- |

| Example
<br>To Set the current line style to 3:<br>
```
Graphics.LineStyle(3);
```
 |
| --- |

* * *

| LineTo(x*[real]*, y*[real]*, z*[real]*) [static]
Description<br>Draws a line from the current point to (x, y, z). After drawing the line the current point will be (x, y, z). See also [Graphics.Line()](primer-graphics-class.md#Graphics::Line) and [Graphics.MoveTo()](primer-graphics-class.md#Graphics::MoveTo) |
| --- |

#### Arguments

* x (real)
 
X coordinate

* y (real)
 
Y coordinate

* z (real)
 
Z coordinate

| Returns
<br>No return value |
| --- |

| Example
<br>To draw a line from the current point to (10.0, 20.0, 30.0):<br>
```
Graphics.LineTo(10.0, 20.0, 30.0);
```
 |
| --- |

* * *

| LineWidth(width*[Integer]*) [static]
Description<br>Sets the width for drawing lines. |
| --- |

#### Arguments

* width (Integer)
 
The width to draw lines with

| Returns
<br>No return value |
| --- |

| Example
<br>To Set the current line width to 3:<br>
```
Graphics.LineWidth(3);
```
 |
| --- |

* * *

| MoveTo(x*[real]*, y*[real]*, z*[real]*) [static]
Description<br>Sets the current point to (x, y, z). See also [Graphics.Line()](primer-graphics-class.md#Graphics::Line) and [Graphics.LineTo()](primer-graphics-class.md#Graphics::LineTo) |
| --- |

#### Arguments

* x (real)
 
X coordinate

* y (real)
 
Y coordinate

* z (real)
 
Z coordinate

| Returns
<br>No return value |
| --- |

| Example
<br>To set the current point to (10.0, 20.0, 30.0):<br>
```
Graphics.MoveTo(10.0, 20.0, 30.0);
```
 |
| --- |

* * *

| PolygonFinish() [static]
Description<br>Ends drawing a polygon. See also [Graphics.PolygonStart()](primer-graphics-class.md#Graphics::PolygonStart) |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To draw a red square:<br>
```
Graphics.FillColour(Colour.RED);
Graphics.MoveTo(0.0, 0.0, 0.0);
Graphics.PolygonStart();
Graphics.MoveTo(10.0, 0.0, 0.0);
Graphics.MoveTo(10.0, 10.0, 0.0);
Graphics.MoveTo(0.0, 10.0, 0.0);
Graphics.PolygonFinish();
```
 |
| --- |

* * *

| PolygonStart() [static]
Description<br>Starts drawing a **convex**polygon. A maximum of 250 vertices are allowed. Drawing concave polygons is not supported by this function. To draw concave polygons split them into separate convex polygons.<br> See also [Graphics.PolygonFinish()](primer-graphics-class.md#Graphics::PolygonFinish).<br> The only graphics command allowed between [Graphics.PolygonStart()](primer-graphics-class.md#Graphics::PolygonStart) and [Graphics.PolygonFinish()](primer-graphics-class.md#Graphics::PolygonFinish) is [Graphics.MoveTo()](primer-graphics-class.md#Graphics::MoveTo). Any other graphics drawing commands (e.g. [Graphics.Text()](primer-graphics-class.md#Graphics::Text)) will be ignored. |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To draw a red square:<br>
```
Graphics.FillColour(Colour.RED);
Graphics.MoveTo(0.0, 0.0, 0.0);
Graphics.PolygonStart();
Graphics.MoveTo(10.0, 0.0, 0.0);
Graphics.MoveTo(10.0, 10.0, 0.0);
Graphics.MoveTo(0.0, 10.0, 0.0);
Graphics.PolygonFinish();
```
 |
| --- |

* * *

| Shape(shape*[constant]*, size*[integer]*) [static]
Description<br>Draws a simple shape. |
| --- |

#### Arguments

* shape (constant)
 
The style to draw lines with. Can be: [Graphics.POINT](primer-graphics-class.md#Graphics.POINT), [Graphics.SQUARE](primer-graphics-class.md#Graphics.SQUARE), [Graphics.CIRCLE](primer-graphics-class.md#Graphics.CIRCLE), [Graphics.DIAMOND](primer-graphics-class.md#Graphics.DIAMOND), [Graphics.HOURGLASS](primer-graphics-class.md#Graphics.HOURGLASS), [Graphics.FILLED_SQUARE](primer-graphics-class.md#Graphics.FILLED_SQUARE), [Graphics.FILLED_CIRCLE](primer-graphics-class.md#Graphics.FILLED_CIRCLE), [Graphics.FILLED_DIAMOND](primer-graphics-class.md#Graphics.FILLED_DIAMOND) or [Graphics.FILLED_HOURGLASS](primer-graphics-class.md#Graphics.FILLED_HOURGLASS)

* size (integer)
 
Size the shape should be drawn at.

| Returns
<br>No return value |
| --- |

| Example
<br>To draw a filled square at (10, 20, 30) at size 10:<br>
```
Graphics.MoveTo(10, 20, 30);
Graphics.Shape(Graphics.FILLED_SQUARE, 10);
```
 |
| --- |

* * *

| Start() [static]
Description<br>Start any graphics. See also [Graphics.Finish()](primer-graphics-class.md#Graphics::Finish). This **must** be used before any drawing is done. |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To start drawing graphics:<br>
```
Graphics.Start();
```
 |
| --- |

* * *

| Text(text*[String]*) [static]
Description<br>Draws text at current position. See [Graphics.MoveTo()](primer-graphics-class.md#Graphics::MoveTo) to set the current position. |
| --- |

#### Arguments

* text (String)
 
The text to write

| Returns
<br>No return value |
| --- |

| Example
<br>To write "Example" at (10, 20, 30):<br>
```
Graphics.MoveTo(10, 20, 30);
Graphics.Text("Example");
```
 |
| --- |

* * *

| TextColour(colour*[[Colour](primer-colour-class.md)]*) [static]
Description<br>Sets the colour for drawing text. See the [Colour](primer-colour-class.md) class for more details on colours. |
| --- |

#### Arguments

* colour ([Colour](primer-colour-class.md))
 
The colour you want to draw text with

| Returns
<br>No return value |
| --- |

| Example
<br>To Set the current text drawing colour to red:<br>
```
Graphics.TextColour(Colour.RED);
```
<br>or<br>
```
Graphics.TextColour( Colour.RGB(255, 0, 0) );
```
 |
| --- |

* * *

| TextSize(size*[Integer]*) [static]
Description<br>Sets the size for drawing text. |
| --- |

#### Arguments

* size (Integer)
 
The size to draw text with

| Returns
<br>No return value |
| --- |

| Example
<br>To Set the current text size to 30:<br>
```
Graphics.TextSize(30);
```
 |
| --- |

* * *