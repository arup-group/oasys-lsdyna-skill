###  Image Generation

Many different types of image format can be outputted from FAST-TCF.

From T/HIS 17.0 onwards, the FAST-TCF image output options have been revised to allow multiple graphs and pages to be selected for output. The old pre-T/HIS 9.3 syntax (see [Pre 9.3 Image Output](pre-image-output.md#old_images)) is still supported for existing scripts but is officially deprecated and users are strongly advised to move to the new command format where all options are prefixed with either the "display" or "image" keyword.

| Description | keyword | following words |
| --- | --- | --- |
| Image output | image | image options |

The available image output options are

| Option | keyword | format word | second word | third word | fourth word | notes |
| --- | --- | --- | --- | --- | --- | --- |
| Bitmap (8 bit) | image | bit / bmp | filename | graph | all / active / 'n' | Generate an image containing all graphs / all active graphs / graph number 'n' |
| page | all / current / 'n' | Generate an image for each page / the current page / page number 'n' |
| Bitmap (8 bit uncompressed) | image | bit\_u / bmp\_u | filename | graph | all / active / 'n' | Generate an image containing all graphs / all active graphs / graph number 'n' |
| page | all / current / 'n' | Generate an image for each page / the current page / page number 'n' |
| Gif (8 bit) | image | gif | filename | graph | all / active / 'n' | Generate an image containing all graphs / all active graphs / graph number 'n' |
| page | all / current / 'n' | Generate an image for each page / the current page / page number 'n' |
| Png (8 bit) | image | png | filename | graph | all / active / 'n' | Generate an image containing all graphs / all active graphs / graph number 'n' |
| page | all / current / 'n' | Generate an image for each page / the current page / page number 'n' |
| Bitmap (24 bit) | image | bit24 / bmp24 | filename | graph | all / active / 'n' | Generate an image containing all graphs / all active graphs / graph number 'n' |
| page | all / current / 'n' | Generate an image for each page / the current page / page number 'n' |
| Pixel map (24 bit) | image | ppm / pix | filename | graph | all / active / 'n' | Generate an image containing all graphs / all active graphs / graph number 'n' |
| page | all / current / 'n' | Generate an image for each page / the current page / page number 'n' |
| Jpeg (24 bit) | image | jpg / jpeg | filename | graph | all / active / 'n' | Generate an image containing all graphs / all active graphs / graph number 'n' |
| page | all / current / 'n' | Generate an image for each page / the current page / page number 'n' |
| Png (24 bit) | image | png24 | filename | graph | all / active / 'n' | Generate an image containing all graphs / all active graphs / graph number 'n' |
| page | all / current / 'n' | Generate an image for each page / the current page / page number 'n' |
| Postscript | image | ps | filename | graph | all / active / 'n' | Generate an image containing all graphs / all active graphs / graph number 'n' |
| page | all / current / 'n' | Generate an image for each page / the current page / page number 'n' |
| PDF | image | pdf | filename | graph | all / active / 'n' | Generate an image containing all graphs / all active graphs / graph number 'n' |
| page | all / current / 'n' | Generate an image for each page / the current page / page number 'n' |

In addition to the image formats the following image output options can also be specified

| Description | keyword | second word | notes |
| --- | --- | --- | --- |
| Image resolution | i\_res | screen / 2x / 4x | Set the resolution to either the same as the screen or 2 or 4 times the screen resolution for image ouptut |
| Postscript /PDF resolution | p\_res | screen / 2x / 4x | Set the resolution to either the same as the screen or 2 or 4 times the screen resolution for Postscript and PDF ouptut |
| Plot title | ti | title string | Specify the plot title (postscript / PDF output only) |
| Figure Number | fi | figure number | Specify the figure number (postscript / PDF output only) |
| Orientation | ori | land / port | Specify the paper orientation (postscript / PDF output only) |

| image bmp | output1.bmp graph all |
| --- | --- |
|  | (generate a bitmap called output1.bmp containing all the current graphs) |
| image jpeg | output2.jpg page 3 |
|  | (generate a JPEG image called output2.jpg containing page 3) |
| image i\_res | 2x |
|  | (set the resolution used for all following images to 2 x the screen resolution) |
| image ti | Run number 2 |
|  | (set the plot title to "Run number 2" for any following postscript or PDF images) |
| image ori | landscape |
|  | (set the page layout to landscape for any following postscript or PDF images) |

Previous: curve-display  |  Next: pre-image-output