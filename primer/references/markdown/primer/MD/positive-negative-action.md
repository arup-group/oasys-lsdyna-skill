###  Positive & Negative Action

![](../Storage/primer-22-1/primer_links/sect_6/cutsect/fig_13.gif)Controls how the image on either side of the plane is rendered.
 
The cutting plane itself is always rendered in the current display mode, but for each side of the cutting plane you must choose how the image is to be rendered:
 
* Omit means that it will not be drawn at all
* Outline means that it will be drawn in wireframe outline, in the edging mode of the current display mode
* Normal means that it will be drawn in the current display mode

Swap &lt;===&gt; simply swaps the +ve and -ve display modes around and redraws.
 
Any permutation of modes can be drawn on either side, here are some examples for the model above:

| In this example both +ve and -ve sides have been set to Outline.<br> <br>Because the current display mode is Shaded, with free edge outlines, this means that they are rendered in free edge wireframe mode.<br> <br>The cutting plane itself is clearly visible in shaded mode, and because this model contains solid elements these are capped on the cut plane and therefore easy to see. | ![](../Storage/primer-22-1/primer_links/sect_6/cutsect/demo_3.jpg) |
| --- | --- |
| Here the +ve (far) side is displayed in Normal mode, and -ve side has been Omit ted.<br> <br>The display mode is SI this time, showing element density.<br> <br>This demonstrates the cut-sections can be used with any plotting mode, including data-bearing ones. | ![](../Storage/primer-22-1/primer_links/sect_6/cutsect/demo_4.jpg) |

[Previous](definition-method.md)  |  [Next](thick-cut.md)