###  Pre 9.3 Image Output

The following pre-T/HIS 9.3 image output commands are still supported but has been officially deprecated and users are recommended to use the new format described above. **Support for the below commands may be removed entirely in the future.**

Curve styles that have been previously defined can be applied to the curves in the plot, and various other settings can be made with regards to the axes and titles.

Images that require a second yaxis need to determine which curves go on which axis. To do this, use a "##" in the curve listing to switch to the second axis. The options are described in the tables below.

Curve files can be included within the curves to plot. FAST-TCF detects a curve file to read in using the pattern string ".cur" at the end of the name. The curves are read in, styles are applied, and the image is plotted. The curves are then deleted.

The user can use wildcards ("\*") in the tag names to select multiple curves for plotting.

| bit d.bmp | #1 #3 CRV2 ## #2 #4 head\_accn | Title 2nd axis example |
| --- | --- | --- |
|  | (2 curves on 1st yaxis and 3 on 2nd yaxis) | (Title) |
| bit h.bmp | #1 #3 CRV2 | style ONE | xax 0 5E-3 | Time | Title Head |
|  | (curves) | (style to apply) | (xaxis min and max) | (XLabel) | (Title) |
| bit l.bmp | #1 #100 reference.cur line.cur #1000 | style reference |
|  | (curves and curve files to plot) | (style to apply) |
| bmp test.bmp | accn\* |
|  | (all curves with tags beginning with "accn") |

| Description | keyword | second word | following words | following words |
| --- | --- | --- | --- | --- |
| Bitmap | bit / bmp | filename | curve(s) | additional formatting |
| Bitmap (uncompressed) | bit\_u / bmp\_u | filename | curve(s) | additional formatting |
| Jpeg | jpg / jpeg | filename | curve(s) | additional formatting |
| Pixel map | ppm | filename | curve(s) | additional formatting |
| B & W postscript | post | filename | curve(s) | additional formatting |
| Colour postscript | cpost | filename | curve(s) | additional formatting |

| Additional format | format word | following word #1 | following word #2 | notes |
| --- | --- | --- | --- | --- |
| Style application | sty | style name | - | Curves have styles applied in the order they were defined |
| Title | tit | title word #1 | title word #2 etc | Takes following words as a title until another keyword is found |
| X axis options | xax | if numeric #1 - xaxis min | if numeric #2 - xaxis max | Takes following words as a label until another keyword is found |
| otherwise xaxis label | otherwise xaxis label |
| Y axis options | yax | if numeric #1 - yaxis min | if numeric #2 - yaxis max | Takes following words as a label until another keyword is found |
| otherwise yaxis label | otherwise yaxis label |
| 2nd Y axis options | 2ya | if numeric #1 - yaxis min | if numeric #2 - yaxis max | Takes following words as a label until another keyword is found |
| otherwise yaxis label | otherwise yaxis label |

Previous: image-generation  |  Next: outputting-curve-properties-to-text-files-variables-and-reporter