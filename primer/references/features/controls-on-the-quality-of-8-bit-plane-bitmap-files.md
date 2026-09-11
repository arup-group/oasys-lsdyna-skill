###  Controls on the Quality of 8 -Bit Plane Bitmap Files

24 bit BMP files tend to be huge, and the space saved by using the compressed 8 bit format is attractive. The trouble is that without further processing the image quality obtained when 24 bit images are truncated to 8 bits is definitely not!

The problem is the number of colours available in the 8 bit format is 2\*\*8 = 256, and this gives rise to "banding" when the least significant bits of the original colour definitions are lost as the original 16 million colours are truncated.

 ![](../Storage/primer-22-1/primer_links/sect_8/images/fig_8_5_3a.png)

####  Dither image 
 
The following sequence of images show how the different levels of dithering affect the quality and file size of a compressed 8 bit image, comparing it with the JPEG equivalent.
 
For static images there is no advantage in using BMP files over JPEGs: they are larger and of inferior quality. However if you are unable to use MPEG animation, and have to revert to AVI format, the various permutations of image quality and filesize below will be of interest when trying to obtain the best compromise between image quality and overall file size.
 
The ideal would be an AVI file composed of JPEGs, or MJPEG format. Sadly all such formats are proprietary and, perhaps as a consequence, are not supported by the typical players currently available. Hopefully this will change in the future.

| ![](../Storage/primer-22-1/primer_links/sect_8/images/fig_6_11_1_1a.jpg) | ![](../Storage/primer-22-1/primer_links/sect_8/images/fig_6_11_1_1b.gif) |
| --- | --- |
| Here is the original 24 bit-plane image, saved as a JPEG file. **Size 5.1kB** | This is the undithered equivalent bitmap image. **Size 7.3kB**.<br> <br>Note how the discretising affect of mapping onto a limited colour palette has caused "banding" which makes the image almost unusable. However at least the files are small |

| "Dithering" is a technique in which an ordered pattern of noise, xxxxx in the table below, is added to the least significant bits of a colour value to make it alternate between two adjacent shades.<br> <br>Consider the bits for a single colour in this image that have been truncated from 24 bits (8 bits each of Red, Green and Blue). Truncated bits are shown in lower case.<br> <br><br>| Original Red byte 001????? | truncates to | 001ooooo |<br>| --- | --- | --- |<br>| Adding the dither pattern oooxxxxx to the bottom 5 bits of the original byte gives |<br>| 001????? + oooxxxxx | giving either <br>or | 001ooooo <br>010ooooo |<br><br> <br>The result may be truncated to 001ooooo , or the increased to the next shade up 010ooooo , depending on the trailing bits ????? and the noise value xxxxx at that pixel.<br> <br>The effect is to produce a composite shade that is somewhere between the two originals. | ![](../Storage/primer-22-1/primer_links/sect_8/images/fig_6_11_1_1c.gif) <br>This is the "Shifted 2x2" dithered bitmap image. **Size 19kB** .<br> <br>Some reduction in banding is evident, but the quality is still poor and not worth the saving in file size over normal 2x2 unless you are desperate for space. |
| --- | --- |

| Palette Optimization  <br>When 8 bit images are produced the 24 bit palette has to be reduced to only 256 colours. To do this the best way is to use Palette Optimization to choose the most representative colours used in the image.<br> <br>Without Palette Optimization 256 colours can be chosen uniformly along the original 24 bit palette, missing out important colours.<br> <br>The following figures show the differences in images with Palette Optimization. |
| --- |

| ![](../Storage/primer-22-1/primer_links/sect_8/images/fig_8_5_2a.gif) | ![](../Storage/primer-22-1/primer_links/sect_8/images/fig_8_5_2b.gif) |
| --- | --- |
| This is the original image, saved as a GIF, with no dithering or palette optimization. **Size 6.1kB** | This is the image, saved as a GIF, with palette optimization. **Size 12.6kB**<br> <br>Note that whilst there are still bands, the coarseness of them has diminished. |
| The two images above were created from a shaded image plot in PRIMER and therefore contained a lot of different colours. The banding is present because the palette has been reduced to the 256 most representative colours in the image.<br> <br>The following figures are images of a contour plot in PRIMER. |
| ![](../Storage/primer-22-1/primer_links/sect_8/images/fig_8_5_2c.gif) | ![](../Storage/primer-22-1/primer_links/sect_8/images/fig_8_5_2d.gif) |
| This is the image, saved as a GIF, with palette optimization. **Size 3.1kB**<br> <br>Note that due to the smaller number of colours in the image, there is no banding. | This is the image, saved as a GIF, with dithering. **Size 3.7kB**<br> <br>Dithering is not well suited to images with distinct colours since by its nature it produces colours that are somewhere in between neighbouring colours. This is effective with shaded images, but not with images where there are sharp changes of colour. |

[Previous](24-bit-file-formats.md)  |  [Next](info-further-online-help-about-formats.md)