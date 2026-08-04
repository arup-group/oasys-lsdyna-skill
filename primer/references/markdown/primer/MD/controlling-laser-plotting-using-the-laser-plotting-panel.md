##  Controlling Laser Plotting Using the Laser Plotting Panel

This figure shows the basic laser plotting panel.
 
This is invoked by the Postscript/pdf command under Images-&gt;Write in the top menu box.
 
It both controls and shows the status of the current laser file (if any).
 ![](../Storage/primer-22-1/primer_links/sect_8/images/fig_8_0.gif)
 
###  Plot button 
 
Press "Plot" button when you want to plot the current view on the screen. With the White Background option switched on, images will be plotted with a white background. Entity labels and screen text will be switched to black. Once the image has been captured the screen will return to its original colours.
 
Any plot directed to laser file is sent by default to the next free sub-image (if the file has multiple plots per page), or file (if only a single image per file, or the multiple page is full).
 
When multiple sub-images in a file are in use the next image to be written is shown by depressing the appropriate icon in the file layout panel. You can override this and choose a different sub-image: see
 
Choosing the laser filename
 
![](../Storage/primer-22-1/primer_links/sect_8/images/fig_8_1_2.gif)
 When no file is currently in use the File: entry box will be available. You can give any valid filename for the next laser file to be written, or let PRIMER choose one for you. You can also use the button to select a file via the standard file filter box.
 
If the file already exists you will be queried to check that you genuinely want to overwrite it: you cannot append to existing laser files.
 
The default naming convention used by PRIMER for postscript laser files is postNNN.ps , where:

>  
> NNN is a 3 digit number (with leading zeros if required) in the range 001 - 999 .
>  

Any existing files are skipped when the next file in the sequence is computed.
 Defining a label and figure number for laser plots.

![](../Storage/primer-22-1/primer_links/sect_8/images/fig_8_1_3.gif)
By default laser files are not labelled and have no figure number, but you may add either or both of these. They are always put at the bottom of the page, along the short edge, regardless of the orientation used for plots.
 
This figure shows the standard locations for title and figure number on laser plots.
 
The title may be up to 80 characters long, and is split over two lines if necessary by PRIMER.
 
The figure number may be any string (not just a number), and is preceded by the word "figure". It is suggested that it is 6 characters or less long: here "12a" was used.
 
This plot is written in "landscape" format, and reinforces the point that the title and figure number always go at the bottom of the paper, regardless of the orientation of the plot contents.
 
![](../Storage/primer-22-1/primer_links/sect_8/images/fig_8_1_3a.gif)
 
### Orientation Setting Landscape or Portrait plot orientation
 
![](../Storage/primer-22-1/primer_links/sect_8/images/fig_8_1_4.gif)By default plots are in "Landscape" orientation, with the long side of the plot aligned with the long side of the paper, but you can choose "Portrait" format instead.

The figure below shows examples of both landscape and portrait format plots, showing how they are aligned on the paper.
 
### Layout
 
In both landscape and portrait formats it is possible to have more than one plot on a page.
 
Various pre-programmed permutations of &lt;#x&gt; x &lt;#y&gt; plots are available as shown here.
 
Each individual plot on a page will be referred to from now as a "sub-image".

| ![](../Storage/primer-22-1/primer_links/sect_8/images/fig_8_1_5a.gif) | ![](../Storage/primer-22-1/primer_links/sect_8/images/fig_8_1_5b.gif) |
| --- | --- |
| LANDSCAPE | PORTRAIT |

The figures below show examples of 3x3 Landscape and 2x4 Portrait multiple plots.
 
![](../Storage/primer-22-1/primer_links/sect_8/images/fig_8_1_5c.gif)![](../Storage/primer-22-1/primer_links/sect_8/images/fig_8_1_5d.gif)
 
#### Controlling the order in which multiple plots are drawn.
 
#### The right hand menu shows a typical laser panel for a 3x3 portrait plot in which sub-images 1 and 2 are complete.
 
#### Normally sub-images are written in the order #1 to #n, but if the user wanted the next plot to be drawn to sub-image #5 instead of #3, they would click on the [5] icon where the button gets coloured in blue instead of the [3] icon as it normally would.
 
Next sub-image would be the next free one, i.e. #3 to receive the next plot. The [3] icon will be coloured in blue.
 
#### The status of files, and sub-images within files.
 
PRIMER laser files, and sub-images within files, have one of four possible states.

| **Inactive** | **Green** | No graphics written yet, and not selected for the next plot. |
| --- | --- | --- |
| **Selected** | **Blue** | No graphics written yet, but selected to receive the next plot. |
| **Closed** | Greyed out | File/sub-image complete, and cannot receive any more information. |

The colours referred to above are used for the button icons on multiple sub-image panels, as shown in the figure above. Only green icons (ie those which are currently inactive) may be selected to receive the next image.

How sub-image status affects the destination of graphics.

| (1) | If no graphics have been written to a sub-image then the next plotting command will send laser output to the the sub-image currently "selected". <br>By default this will be the lowest numbered sub-image that has not yet been written to, but you can choose another as described above. |
| --- | --- |
| (2) | Once graphics have been sent to the sub-image its status changes to "closed". This means that it cannot receive further graphics |

#### Interaction between sub-images and files
 
#### A file with only a single image in it is treated in exactly the same way as an individual sub-image above, except that it is (implicitly) always "selected" for plotting until something is drawn in it.
 
#### A file with sub-images remains current (ie open) until all of the sub-images in it have been "closed", or the user closes it prematurely with a CLOSE FILE command. Then PRIMER defaults to the next default filename as defined in 
 
#### The importance of closing files.
 
#### While a file is still current it is still connected to the programme, and at least some of its contents will still be held in system buffers. If you want to send it to a printer you must close it first using a CLOSE FILE command.
 
#### This flushes any remaining data to disk and disconnects the file from the programme.

[Previous](laser-introduction-to-laser-plotting.md)  |  [Next](margins-modifying-laser-paper-size-on-the-page.md)