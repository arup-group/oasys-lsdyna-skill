####  Options

Controlling calculation and plotting.
 ![](../Storage/primer-22-1/primer_links/sect_6/cutsect/fig_6_11_23.png)

#####  

| 2D and 1D section cut <br>![](../Storage/primer-22-1/primer_links/sect_6/cutsect/fig_6_11_22.png)Controls how 2D (shell) and 1D (beam) sections are generated when the angle between element and cutting plane is not orthogonal.<br> <ul style="font-size: 14.6667px;"> <li> <span class="buttontext">Always 90 degrees&#160;</span>gives a cross-section that cuts the element at right angles to its in-plane axis, giving a &quot;safe&quot; shape for calculating section properties.<br><br></li> <li> <span class="buttontext">Use actual angle&#160;</span>calculates the actual area cut through the element, which can be useful if you need to visualise this correctly. However this is not recommended for section property calculations as it can result in over-estimates of area and hence capacity.</li> </ul> <br>The effects of these two options on shells and beams is illustrated above for [shells](cutting-through-2d-thin-shell-elements.md#cut_2d)and [beams](cutting-through-1d-beam-elements.md#cut_1d). |
| --- |

#####  Yield stress (y) if not defined 
 
When calculating both [First Yield](calculation-of-first-yield-capacity-of-the-section.md#calc_y1)and [Fully Plastic](calculation-of-fully-plastic-capacity-of-the-section.md#calc_fp)section capacities PRIMER needs to know the yield stress of all cut element materials, and it will normally extract this from their material (\*MAT) cards.
 
However that card might not be present, or for some more exotic material types it may not be possible to calculate a yield stress, in which case some other value must be used, and the following three options are provided:

| Use %age strain \* E | Calculates a yield stress by multiplying the Young's Modulus (E) by a %age strain value. |
| --- | --- |
| Use fixed value | You define a yield stress to be used if a value cannot be found. |
| Do not compute | Elements for which a yield stress cannot be found are omitted from the calculation. |

#####  Young's Modulus (E) if not defined 
 
When calculating [First Yield](calculation-of-first-yield-capacity-of-the-section.md#calc_y1)section capacity PRIMER needs to know the Young's Modulus (E) of all materials so that it can compute the stress at a given strain. As with yield stress this value is normally extracted from the material card of the cut element, but this may be missing or the material may not have a well-defined E value. When this value cannot be found you have the following options:

| Use fixed value | You define a Young's Modulus value to be used |
| --- | --- |
| Do not compute | Elements for which an E value cannot be found are omitted from the calculation. |

#####  Axis tick marks and grid lines 
 
This control whether or not tick marks showing the dimensions of the cut-plane coordinate system are shown on the image, and also whether or not grid lines are drawn between these tick marks.
 [Previous](why-split-the-calculation-up-by-element-types.md)  |  [Next](image-capture-options.md)