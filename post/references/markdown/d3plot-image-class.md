# Image class

The Image class allows you to write image and movie files from D3PLOT. [More...](d3plot-image-class.md#Image_details)

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

* [Write3D](d3plot-image-class.md#Image::Write3D)(name*[string]*, options (optional)*[object]*)
* [WriteImage](d3plot-image-class.md#Image::WriteImage)(name*[string]*, options (optional)*[object]*)
* [WriteMovie](d3plot-image-class.md#Image::WriteMovie)(name*[string]*, options (optional)*[object]*)

## Image constants

### Constants for 3D (D3PLOT viewer types

| **Name** | **Description** |
| --- | --- |
| Image.GLBU | Uncompressed GLB animation file |

### Constants for 3D (D3PLOT viewer) types

| **Name** | **Description** |
| --- | --- |
| Image.GLB | GLB animation file |

### Constants for image types

| **Name** | **Description** |
| --- | --- |
| Image.BMP | 24-bit uncompressed BMP file |
| Image.BMP8 | 8-bit uncompressed BMP file |
| Image.BMP8C | 8-bit compressed BMP file |
| Image.GIF | 8-bit GIF file |
| Image.JPEG | JPEG file |
| Image.PNG | 24-bit PNG file |
| Image.PNG8 | 8-bit PNG file |
| Image.PPM | PPM file |

### Constants for movie types

| **Name** | **Description** |
| --- | --- |
| Image.AGIF | 8-bit animated GIF file |
| Image.AVI | AVI movie file |
| Image.MP4 | MP4 movie file |

### Constants for resolution

| **Name** | **Description** |
| --- | --- |
| Image.SCREEN | Image will be created at screen resolution. |
| Image.X2 | Image will be created at 2x screen resolution. |
| Image.X4 | Image will be created at 4x screen resolution. |

### Constants for state selection

| **Name** | **Description** |
| --- | --- |
| Image.ALL\_STATES | Use all states |

| Detailed Description<br>The Image class gives you methods to be able to write images, animations and 3D models.<br>See the documentation below for more details. |
| --- |

| Details of functions 
Write3D(name*[string]*, options (optional)*[object]*) [static]
Description<br>Writes a 3D (GLB) file |
| --- |

#### Arguments

* name (string)
 
Filename for the movie

* options (optional) (object)

Object containing options for writing movie. Can be any of: 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| anonymise | boolean | Anonymise part tree (default = false) |
| format | constant | The format for the 3D file. Either [Image.GLB](d3plot-image-class.md#Image.GLB) (default) or [Image.GLBU](d3plot-image-class.md#Image.GLBU) |
| frameRate | integer | The frame rate if multiple states are written (default = 25) |
| graphicsWindow | [GraphicsWindow](d3plot-graphicswindow-class.md) | An individual [GraphicsWindow](d3plot-graphicswindow-class.md) to write 3D data for. If not given (default) all the windows on the current page will be written |
| state | integer | The state number to write or [Image.ALL_STATES](d3plot-image-class.md#Image.ALL_STATES) (default) |

| Returns
<br>No return value |
| --- |

| Example
<br>To write a 3D file "example.glb" for graphics window gw:<br>
```
Image.Write3D("example.glb", { 'graphicsWindow': gw } );
```
 |
| --- |

* * *

| WriteImage(name*[string]*, options (optional)*[object]*) [static]
Description<br>Writes a static image file |
| --- |

#### Arguments

* name (string)
 
Filename for the image

* options (optional) (object)

Object containing options for writing image. Can be any of: 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| dither | boolean | Whether to dither 8 bit images or not (default is false) |
| format | constant | The format for the image. One of [Image.BMP8C](d3plot-image-class.md#Image.BMP8C), [Image.BMP8](d3plot-image-class.md#Image.BMP8), [Image.BMP](d3plot-image-class.md#Image.BMP), [Image.JPEG](d3plot-image-class.md#Image.JPEG), [Image.PPM](d3plot-image-class.md#Image.PPM), [Image.PNG](d3plot-image-class.md#Image.PNG) (default), [Image.PNG8](d3plot-image-class.md#Image.PNG8) or [Image.GIF](d3plot-image-class.md#Image.GIF) |
| graphicsWindow | [GraphicsWindow](d3plot-graphicswindow-class.md) | An individual [GraphicsWindow](d3plot-graphicswindow-class.md) to write image for. If not given (default) all the windows on the current page will be written |
| optimise | boolean | Whether to optimise the colour palette for 8 bit images or not (default is true) |
| quality | integer | The quality for JPEG images (1 - 100) (default = 90) |
| resolution | constant | The resolution for the image. One of [Image.SCREEN](d3plot-image-class.md#Image.SCREEN) (default), [Image.X2](d3plot-image-class.md#Image.X2) or [Image.X4](d3plot-image-class.md#Image.X4) |

| Returns
<br>No return value |
| --- |

| Example
<br>To write an image "example.png"<br>
```
Image.WriteImage("example.png");
```
 |
| --- |

* * *

| WriteMovie(name*[string]*, options (optional)*[object]*) [static]
Description<br>Writes a movie file |
| --- |

#### Arguments

* name (string)
 
Filename for the movie

* options (optional) (object)

Object containing options for writing movie. Can be any of: 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| aviFormat | constant | The AVI format for the movie if writing an AVI file. One of [Image.JPEG](d3plot-image-class.md#Image.JPEG) (default), [Image.BMP8C](d3plot-image-class.md#Image.BMP8C), [Image.BMP8](d3plot-image-class.md#Image.BMP8) or [Image.BMP](d3plot-image-class.md#Image.BMP) |
| dither | boolean | Whether to dither 8 bit images or not (default is false) |
| format | constant | The format for the movie. One of [Image.MP4](d3plot-image-class.md#Image.MP4) (default), [Image.AVI](d3plot-image-class.md#Image.AVI) or [Image.AGIF](d3plot-image-class.md#Image.AGIF) |
| frameRate | integer | The frame rate (default = 25) |
| graphicsWindow | [GraphicsWindow](d3plot-graphicswindow-class.md) | An individual [GraphicsWindow](d3plot-graphicswindow-class.md) to write movie for. If not given (default) all the windows on the current page will be written |
| quality | integer | The quality for AVI MJPEG images (1 - 100) (default = 90) |
| repeat | integer | The number of repeats for the movie. 0 is infinite (default = 0) |
| targetFileSize | real | The target file size for the movie file in megabytes. This only applies when 'format' is [Image.MP4](d3plot-image-class.md#Image.MP4). If this is positive, it supersedes any value for 'quality'. This value is only a target and not a certainly achieved exact size. If the target file size is 0.0, it has the same effect as being undefined. |

| Returns
<br>No return value |
| --- |

| Example
<br>To write a movie "example.mp4":<br>
```
Image.WriteMovie("example.mp4");
```
 |
| --- |

* * *