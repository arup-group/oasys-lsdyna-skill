# Image class

The Image class allows you to create bitmaps in Reporter. [More...](reporter-image-class.md#Image_details)

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

## Member functions

* [Ellipse](reporter-image-class.md#Image::Ellipse)(x1*[integer]*, y1*[integer]*, x2*[integer]*, y2*[integer]*)
* [Fill](reporter-image-class.md#Image::Fill)(x*[integer]*, y*[integer]*, tol (optional)*[integer]*)
* [Line](reporter-image-class.md#Image::Line)(x1*[integer]*, y1*[integer]*, x2*[integer]*, y2*[integer]*)
* [Load](reporter-image-class.md#Image::Load)(filename*[string]*)
* [PixelCount](reporter-image-class.md#Image::PixelCount)(colour*[string]*, tol (optional)*[integer]*)
* [Polygon](reporter-image-class.md#Image::Polygon)(points*[array]*)
* [Polygon](reporter-image-class.md#Image::Polygon_deprecated)(x1*[integer]*, y1*[integer]*, x2*[integer]*, y2*[integer]*, ... xn*[integer]*, ... yn*[integer]*) [deprecated]
* [Polyline](reporter-image-class.md#Image::Polyline)(points*[array]*)
* [Polyline](reporter-image-class.md#Image::Polyline_deprecated)(x1*[integer]*, y1*[integer]*, x2*[integer]*, y2*[integer]*, ... xn*[integer]*, ... yn*[integer]*) [deprecated]
* [Rectangle](reporter-image-class.md#Image::Rectangle)(x1*[integer]*, y1*[integer]*, x2*[integer]*, y2*[integer]*)
* [Save](reporter-image-class.md#Image::Save)(filename*[string]*, filetype*[constant]*)
* [Star](reporter-image-class.md#Image::Star)(x*[integer]*, y*[integer]*, r*[integer]*)
* [Text](reporter-image-class.md#Image::Text)(x*[integer]*, y*[integer]*, text*[string]*)

## Image constants

| **Name** | **Description** |
| --- | --- |
| Image.BMP | Save image as BMP |
| Image.JPG | Save image as JPG |
| Image.PNG | Save image as PNG |

## Image properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| antialiasing | bool | Whether or not lines, shapes and text are drawn with antialiasing (true by default). |
| fillColour | string | Colour to use when filling shapes on the [Image](reporter-image-class.md). Can be "none", a valid colour from the X colour database (For Linux users, see /etc/X11/rgb.txt) e.g. "Blue", or #RRGGBB (each of R, G and
B is a single hex digit) e.g. "#0000FF" for blue. |
| font | string | Font to use when drawing text on the [Image](reporter-image-class.md) e.g. "Courier". Can be any font
accessible by REPORTER. |
| fontAngle | integer | Angle (degrees) text is drawn at on the [Image](reporter-image-class.md). Can be between -360 and 360
degrees. |
| fontColour | string | Colour to use when drawing text on the [Image](reporter-image-class.md). Can be "none", a valid colour from the X colour database (For Linux users, see /etc/X11/rgb.txt) e.g. "Blue", or #RRGGBB (each of R, G and
B is a single hex digit) e.g. "#0000FF" for blue. |
| fontJustify | constant | Justification to use when drawing text on the [Image](reporter-image-class.md). Can be [Reporter.JUSTIFY_CENTRE](reporter-reporter-class.md#Reporter.JUSTIFY_CENTRE), [Reporter.JUSTIFY_LEFT](reporter-reporter-class.md#Reporter.JUSTIFY_LEFT) or [Reporter.JUSTIFY_RIGHT](reporter-reporter-class.md#Reporter.JUSTIFY_RIGHT) |
| fontSize | integer | Size of font (in points) to use when drawing text on the [Image](reporter-image-class.md) |
| fontStyle | constant | Style of font to use when drawing text on the [Image](reporter-image-class.md). Can be any combination
of [Reporter.TEXT_NORMAL](reporter-reporter-class.md#Reporter.TEXT_NORMAL), [Reporter.TEXT_BOLD](reporter-reporter-class.md#Reporter.TEXT_BOLD), [Reporter.TEXT_ITALIC](reporter-reporter-class.md#Reporter.TEXT_ITALIC) and [Reporter.TEXT_UNDERLINE](reporter-reporter-class.md#Reporter.TEXT_UNDERLINE) |
| height | integer | Height of the [Image](reporter-image-class.md) |
| lineCapStyle | constant | Style to use for the end of lines on an [Image](reporter-image-class.md). Can be [Reporter.CAP_FLAT](reporter-reporter-class.md#Reporter.CAP_FLAT), [Reporter.CAP_SQUARE](reporter-reporter-class.md#Reporter.CAP_SQUARE) or [Reporter.CAP_ROUND](reporter-reporter-class.md#Reporter.CAP_ROUND) |
| lineColour | string | Colour to use when drawing lines on the [Image](reporter-image-class.md). Can be "none", a valid colour from the X colour database (For Linux users, see /etc/X11/rgb.txt) e.g. "Blue", or #RRGGBB (each of R, G and
B is a single hex digit) e.g. "#0000FF" for blue. |
| lineJoinStyle | constant | Style to use for the line join at vertices of polygons and polylines on an [Image](reporter-image-class.md). Can be [Reporter.JOIN_MITRE](reporter-reporter-class.md#Reporter.JOIN_MITRE), [Reporter.JOIN_BEVEL](reporter-reporter-class.md#Reporter.JOIN_BEVEL) or [Reporter.JOIN_ROUND](reporter-reporter-class.md#Reporter.JOIN_ROUND) |
| lineStyle | constant | Style to use when drawing lines on an [Image](reporter-image-class.md). Can be [Reporter.LINE_NONE](reporter-reporter-class.md#Reporter.LINE_NONE), [Reporter.LINE_SOLID](reporter-reporter-class.md#Reporter.LINE_SOLID), [Reporter.LINE_DASH](reporter-reporter-class.md#Reporter.LINE_DASH), [Reporter.LINE_DOT](reporter-reporter-class.md#Reporter.LINE_DOT), [Reporter.LINE_DASH_DOT](reporter-reporter-class.md#Reporter.LINE_DASH_DOT) or [Reporter.LINE_DASH_DOT_DOT](reporter-reporter-class.md#Reporter.LINE_DASH_DOT_DOT) |
| lineWidth | integer | Width to use when drawing lines on an [Image](reporter-image-class.md) value |
| width | integer | Width of the [Image](reporter-image-class.md) |

| Detailed Description<br>The Image class allows you to create, load and save bitmaps. There are various functions available that allow to to draw lines, rectangles, ellipses, text etc on a bitmap. |
| --- |

| Constructor
new Image(width*[integer]*, height*[integer]*, backgroundColour (optional)*[string]*)

Description<br>Create a new [Image](reporter-image-class.md) object for creating an image. If only 2 arguments are given they are used as the width and height of the image. The third argument can be used to define the initial background colour (the default is white). |
| --- |

#### Arguments

* width (integer)
 
Width of image

* height (integer)
 
Height of image

* backgroundColour (optional) (string)
 
Initial background colour for the image (default is white). Can be "none", a valid colour from the X colour database (For Linux users, see /etc/X11/rgb.txt) e.g. "Blue", or #RRGGBB (each of R, G
and B is a single hex digit) e.g. "#0000FF" for blue.

| Returns
<br>[Image](reporter-image-class.md) object<br>
Return type
<br>Image |
| --- |

| Example
<br>To create a new image object 100 pixels wide by 50 pixels high<br>
```
var img = new Image(100, 50);
```
 |
| --- |

| Details of functions 
Ellipse(x1*[integer]*, y1*[integer]*, x2*[integer]*, y2*[integer]*)

Description<br>Draw an ellipse on an image |
| --- |

#### Arguments

* x1 (integer)
 
X coordinate of start position for ellipse

* y1 (integer)
 
Y coordinate of start position for ellipse

* x2 (integer)
 
X coordinate of end position for ellipse

* y2 (integer)
 
Y coordinate of end position for ellipse

| Returns
<br>no return value |
| --- |

| Example
<br>To draw an ellipse with no fill and solid red border line width 2 pixels, on image 'idata', starting at<br>point 30, 20 and finishing at point 100, 50<br>
```
idata.lineColour = "red"; idata.fillColour = "none";
idata.lineWidth = 2;
idata.lineStyle = Reporter.LINE_SOLID;
idata.Ellipse(30, 20, 100, 50);
```
 |
| --- |

* * *

| Fill(x*[integer]*, y*[integer]*, tol (optional)*[integer]*)

Description<br>Fill an area in an image with a colour. |
| --- |

#### Arguments

* x (integer)
 
X coordinate of start position for fill

* y (integer)
 
Y coordinate of start position for fill

* tol (optional) (integer)
 
Tolerance for colour matching (0-255). Default is 0. When filling a shape if the red, green and blue components are within tol of the colour of pixel (x, y) the pixel will be filled with the current fill colour.

| Returns
<br>no return value |
| --- |

| Example
<br>To fill an area of image 'idata', starting at point 30, 20 with red:<br>
```
idata.fillColour = "red";
idata.Fill(30, 20);
```
 |
| --- |

* * *

| Line(x1*[integer]*, y1*[integer]*, x2*[integer]*, y2*[integer]*)

Description<br>Draw a line on an image |
| --- |

#### Arguments

* x1 (integer)
 
X coordinate of start position for line

* y1 (integer)
 
Y coordinate of start position for line

* x2 (integer)
 
X coordinate of end position for line

* y2 (integer)
 
Y coordinate of end position for line

| Returns
<br>no return value |
| --- |

| Example
<br>To draw a blue, dashed line width 2 pixels, on image 'idata', starting at point 30, 20 and finishing at<br>point 100, 50<br>
```
idata.lineColour = "blue"; idata.lineWidth = 2; idata.lineStyle = Reporter.LINE_DASH; idata.Line(30, 20, 100, 50);
```
 |
| --- |

* * *

| Load(filename*[string]*)

Description<br>Load an image file (gif, png, bmp or jpeg) |
| --- |

#### Arguments

* filename (string)
 
Imagename you want to load.

| Returns
<br>no return value |
| --- |

| Example
<br>To load the image file "/data/test/image.jpg" into the image object 'idata'<br>
```
idata.Load("/data/test/image.jpg");
```
 |
| --- |

* * *

| PixelCount(colour*[string]*, tol (optional)*[integer]*)

Description<br>Count the number of pixels in an image that have a specific colour. |
| --- |

#### Arguments

* colour (string)
 
A valid colour from the X colour database (For Linux users, see /etc/X11/rgb.txt) e.g. "Blue", or
#RRGGBB (each of R, G and B is a single hex digit) e.g. "#0000FF" for blue

* tol (optional) (integer)
 
Tolerance for colour matching (0-255). Default is 0. When looking at pixels if the red, green and blue components are within tol of the colour of pixel (x, y) the pixel will be counted.

| Returns
<br>Number of pixels (integer) with the colour.<br>
Return type
<br>Number |
| --- |

| Example
<br>To count the number of red pixels in image 'idata':<br>
```
var nred = idata.PixelCount("red");
```
 |
| --- |

* * *

| Polygon(points*[array]*)

Description<br>Draw a polygon on an image. The last point is always connected back to the first point. |
| --- |

#### Arguments

* points (array)
 
Array of point coordinates

| Returns
<br>no return value |
| --- |

| Example
<br>To draw a blue polygon with a solid red border line width 2 pixels, on image 'idata', connecting points<br>(10,10) (20,10) (20,20) (10,20)<br>
```
idata.fillColour = "blue"; idata.lineColour = "red"; idata.lineWidth =
2; idata.lineStyle = Reporter.LINE_SOLID; var a = new Array(10,10,
20,10, 20,20, 10,20); idata.Polygon(a);
```
 |
| --- |

* * *

| Polygon(x1*[integer]*, y1*[integer]*, x2*[integer]*, y2*[integer]*, ... xn*[integer]*, ... yn*[integer]*) [deprecated]
<br>This function is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>
Description<br>Draw a polygon on an image. The last point is always connected back to the first point. |
| --- |

#### Arguments

* x1 (integer)
 
X coordinate of point 1

* y1 (integer)
 
Y coordinate of point 1

* x2 (integer)
 
X coordinate of point 2

* y2 (integer)
 
Y coordinate of point 2

* ... xn (integer)
 
X coordinate of point n

* ... yn (integer)
 
Y coordinate of point n

| Returns
<br>no return value |
| --- |

| Example
<br>To draw a blue polygon with a solid red border line width 2 pixels, on image 'idata', connecting points<br>(10,10) (20,10) (20,20) (10,20)<br>
```
idata.fillColour = "blue"; idata.lineColour = "red"; idata.lineWidth = 2;
idata.lineStyle = Reporter.LINE_SOLID;
idata.Polygon(10,10, 20,10, 20,20, 10,20);
```
 |
| --- |

* * *

| Polyline(points*[array]*)

Description<br>Draw a line with multiple straight segments on an image |
| --- |

#### Arguments

* points (array)
 
Array of point coordinates

| Returns
<br>no return value |
| --- |

| Example
<br>To draw a blue, dashed polyline width 2 pixels, on image 'idata', connecting points (10,10) (20,10) (20,20)<br>(10,20)<br>
```
idata.lineColour = "blue"; idata.lineWidth = 2; idata.lineStyle = Reporter.LINE_DASH; var a = new Array(10,10, 20,10, 20,20, 10,20); idata.Polyline(a);
```
 |
| --- |

* * *

| Polyline(x1*[integer]*, y1*[integer]*, x2*[integer]*, y2*[integer]*, ... xn*[integer]*, ... yn*[integer]*) [deprecated]
<br>This function is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>
Description<br>Draw a line with multiple straight segments on an image |
| --- |

#### Arguments

* x1 (integer)
 
X coordinate of point 1

* y1 (integer)
 
Y coordinate of point 1

* x2 (integer)
 
X coordinate of point 2

* y2 (integer)
 
Y coordinate of point 2

* ... xn (integer)
 
X coordinate of point n

* ... yn (integer)
 
Y coordinate of point n

| Returns
<br>no return value |
| --- |

| Example
<br>To draw a blue, dashed polyline width 2 pixels, on image 'idata', connecting points (10,10) (20,10) (20,20)<br>(10,20)<br>
```
idata.lineColour = "blue"; idata.lineWidth = 2; idata.lineStyle = Reporter.LINE_DASH; idata.Polyline(10,10, 20,10, 20,20, 10,20);
```
 |
| --- |

* * *

| Rectangle(x1*[integer]*, y1*[integer]*, x2*[integer]*, y2*[integer]*)

Description<br>Draw a rectangle on an image |
| --- |

#### Arguments

* x1 (integer)
 
X coordinate of start position for rectangle

* y1 (integer)
 
Y coordinate of start position for rectangle

* x2 (integer)
 
X coordinate of end position for rectangle

* y2 (integer)
 
Y coordinate of end position for rectangle

| Returns
<br>no return value |
| --- |

| Example
<br>To draw a rectangle with no fill and solid red border line width 2 pixels, on image 'idata', starting at<br>point 30, 20 and finishing at point 100, 50<br>
```
idata.lineColour = "red"; idata.fillColour = "none";
idata.lineWidth = 2;
idata.lineStyle = Reporter.LINE_SOLID;
idata.Rectangle(30, 20, 100, 50);
```
 |
| --- |

* * *

| Save(filename*[string]*, filetype*[constant]*)

Description<br>Save an image to file (png, bmp or jpeg) |
| --- |

#### Arguments

* filename (string)
 
Imagename you want to save.

* filetype (constant)
 
Type you want to save as. Can be: [Image.BMP](reporter-image-class.md#Image.BMP), [Image.JPG](reporter-image-class.md#Image.JPG) or [Image.PNG](reporter-image-class.md#Image.PNG)

| Returns
<br>no return value |
| --- |

| Example
<br>To save the image object 'idata' to file "/data/test/image.jpg" as a jpeg<br>
```
idata.Save("/data/test/image.jpg", Image.JPG);
```
 |
| --- |

* * *

| Star(x*[integer]*, y*[integer]*, r*[integer]*)

Description<br>Draw a star on an image |
| --- |

#### Arguments

* x (integer)
 
X coordinate of centre of star

* y (integer)
 
Y coordinate of centre of star

* r (integer)
 
Radius of star

| Returns
<br>no return value |
| --- |

| Example
<br>To draw a blue star with yellow fill, on image 'idata', centred at point 30, 20 with radius 10<br>
```
idata.lineColour = "blue";
idata.fillColour = "yellow";
idata.Star(30, 20, 10);
```
 |
| --- |

* * *

| Text(x*[integer]*, y*[integer]*, text*[string]*)

Description<br>Draw text on an image |
| --- |

#### Arguments

* x (integer)
 
X position for text

* y (integer)
 
Y position for text

* text (string)
 
Text to write on image

| Returns
<br>no return value |
| --- |

| Example
<br>To write the text 'Test' in Helvetica 12pt bold underlined, coloured red on image 'idata', at point 30, 20<br>
```
idata.fontColour = "red";
idata.fontSize = 12;
idata.fontStyle = Reporter.TEXT_BOLD | Reporter.TEXT_UNDERLINE; idata.Text(30, 20, "Test");
```
 |
| --- |

* * *