# Image class

The Image class enables writing bitmaps to file. [More...](primer-image-class.md#Image_details)

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

* [WriteBMP](primer-image-class.md#Image::WriteBMP)(filename*[string]*, resolution (optional)*[constant]*, 8bit (optional)*[boolean]*, options (optional)*[constant]*)
* [WriteGIF](primer-image-class.md#Image::WriteGIF)(filename*[string]*, resolution (optional)*[constant]*, palette (optional)*[constant]*)
* [WriteJPEG](primer-image-class.md#Image::WriteJPEG)(filename*[string]*, resolution (optional)*[constant]*, quality (optional)*[integer]*)
* [WritePNG](primer-image-class.md#Image::WritePNG)(filename*[string]*, resolution (optional)*[constant]*, 8bit (optional)*[boolean]*, palette (optional)*[constant]*)

## Image constants

| **Name** | **Description** |
| --- | --- |
| Image.COMPRESS | If compression is done for 8 bit bmp images. |
| Image.DITHER | If dithering is done for 8 bit images. |
| Image.OPTIMISE | If palette optimisation is done for 8 bit images. |
| Image.SCREEN | Image will be created at screen resolution. |
| Image.X2 | Image will be created at 2x screen resolution. |
| Image.X4 | Image will be created at 4x screen resolution. |

| Detailed Description<br>The Image class enables you to write BMP, GIF, JPEG or PNG images from PRIMER.<br>See the documentation below for more details. |
| --- |

| Details of functions 
WriteBMP(filename*[string]*, resolution (optional)*[constant]*, 8bit (optional)*[boolean]*, options (optional)*[constant]*) [static]
Description<br>Create a bmp image of the current screen image |
| --- |

#### Arguments

* filename (string)
 
Filename you want to write. The file will be overwritten if it already exists.

* resolution (optional) (constant)
 
The resolution to write the image at. Can be [Image.SCREEN](primer-image-class.md#Image.SCREEN), [Image.X2](primer-image-class.md#Image.X2) or [Image.X4](primer-image-class.md#Image.X4). If omitted screen resolution will be used

* 8bit (optional) (boolean)
 
BMP images can be written using either 8 bit (256 colours) or 24 bit (16 million colours). If this is true then an 8 bit image will be written. If false (or omitted) a 24 bit image will be written.

* options (optional) (constant)
 
For 8 bit images (see '8bit' argument) the palette can be optimised ([Image.OPTIMISE](primer-image-class.md#Image.OPTIMISE)) and/or dithered ([Image.DITHER](primer-image-class.md#Image.DITHER)) and/or compressed ([Image.COMPRESS](primer-image-class.md#Image.COMPRESS)) If 0 (or omitted) no palette optimising, dithering or compression will be done.

| Returns
<br>No return value |
| --- |

| Example
<br>To create a 24 bit png file "/data/test/image.png" at 2x screen resolution<br>
```
Image.WriteBMP("/data/test/image.bmp", Image.X2);
```
 |
| --- |

* * *

| WriteGIF(filename*[string]*, resolution (optional)*[constant]*, palette (optional)*[constant]*) [static]
Description<br>Create a gif image of the current screen image |
| --- |

#### Arguments

* filename (string)
 
Filename you want to write. The file will be overwritten if it already exists.

* resolution (optional) (constant)
 
The resolution to write the image at. Can be [Image.SCREEN](primer-image-class.md#Image.SCREEN), [Image.X2](primer-image-class.md#Image.X2) or [Image.X4](primer-image-class.md#Image.X4). If omitted screen resolution will be used

* palette (optional) (constant)
 
The palette can be optimised ([Image.OPTIMISE](primer-image-class.md#Image.OPTIMISE)) and/or dithered ([Image.DITHER](primer-image-class.md#Image.DITHER)). If 0 (or omitted) no palette optimising or dithering will be done.

| Returns
<br>No return value |
| --- |

| Example
<br>To create a gif file "/data/test/image.gif" at 2x screen resolution<br>
```
Image.WriteGIF("/data/test/image.gif", Image.X2);
```
 |
| --- |

* * *

| WriteJPEG(filename*[string]*, resolution (optional)*[constant]*, quality (optional)*[integer]*) [static]
Description<br>Create a jpeg image of the current screen image |
| --- |

#### Arguments

* filename (string)
 
Filename you want to write. The file will be overwritten if it already exists.

* resolution (optional) (constant)
 
The resolution to write the image at. Can be [Image.SCREEN](primer-image-class.md#Image.SCREEN), [Image.X2](primer-image-class.md#Image.X2) or [Image.X4](primer-image-class.md#Image.X4). If omitted screen resolution will be used

* quality (optional) (integer)
 
Quality of the image in percent. Can be in the range [10,100]. If omitted, the quality is 90.

| Returns
<br>No return value |
| --- |

| Example
<br>To create a jpeg file "/data/test/image.jpg" at 2x screen resolution<br>
```
Image.WriteJPEG("/data/test/image.jpg", Image.X2);
```
 |
| --- |

* * *

| WritePNG(filename*[string]*, resolution (optional)*[constant]*, 8bit (optional)*[boolean]*, palette (optional)*[constant]*) [static]
Description<br>Create a png image of the current screen image |
| --- |

#### Arguments

* filename (string)
 
Filename you want to write. The file will be overwritten if it already exists.

* resolution (optional) (constant)
 
The resolution to write the image at. Can be [Image.SCREEN](primer-image-class.md#Image.SCREEN), [Image.X2](primer-image-class.md#Image.X2) or [Image.X4](primer-image-class.md#Image.X4). If omitted screen resolution will be used

* 8bit (optional) (boolean)
 
PNG images can be written using either 8 bit (256 colours) or 24 bit (16 million colours). If this is true then an 8 bit image will be written. If false (or omitted) a 24 bit image will be written.

* palette (optional) (constant)
 
For 8 bit images (see '8bit' argument) the palette can be optimised ([Image.OPTIMISE](primer-image-class.md#Image.OPTIMISE)) and/or dithered ([Image.DITHER](primer-image-class.md#Image.DITHER)). If 0 (or omitted) no palette optimising or dithering will be done.

| Returns
<br>No return value |
| --- |

| Example
<br>To create a 24 bit png file "/data/test/image.png" at 2x screen resolution<br>
```
Image.WritePNG("/data/test/image.png", Image.X2);
```
 |
| --- |

* * *