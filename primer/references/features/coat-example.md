###  Coat Example

The following example shows how Coat Part can be used to cover solid parts with shells

| ![](../Storage/primer-22-1/primer_links/sect_6/coatpart/coat_3.png)<br> <br>Initial model |
| --- |
| In this first image the seat back has been modelled in solids, using two different solid parts (red and green), and the seat base is also solids using a third part (blue). |

| ![](../Storage/primer-22-1/primer_links/sect_6/coatpart/coat_4.png)<br> <br>After coating with shells |
| --- |
| Here all three parts have been coated with shells, the part id (1234 has been chosen at random) happens to have a default colour of orange, and this shows how the default "stippled" (chequer-board) rendering of the new part shows where it is applied.<br> <br>When you exit the coat part panel the rendering of the newly created parts will revert to conventional solid colouring. |

| Stippled (chequer board) drawing: Draw coating as...  Controlling the stippling (chequer-board) rendering of new parts / segments. | ![](../Storage/primer-22-1/primer_links/sect_6/coatpart/coat_5.png) |
| --- | --- |
| As the example on the right above shows newly created parts are drawn using stippling, which is equivalent to drawing the new part "through" a grid of squares in which alternate squares are opaque, so the underlying element can be "seen through" the new part. This is intended both to make new parts visually obvious, and to provide confirmation that you have coated the correct part.<br> <br>The size of the "chequer-board" pattern can be controlled using the popup on the "Draw coating as" button to be one of the options shown on the right. Examples of various settings are shown below.<br> <br>The default setting is 8x8, giving the pattern shown on the right above. This default can be controlled by setting the preference<br> <br>primer\*coatpart\_display:solid|stipple\_1| stipple\_2|stipple\_4|stipple\_8 |stipple\_16 | ![](../Storage/primer-22-1/primer_links/sect_6/coatpart/coat_6.png) |

| ![](../Storage/primer-22-1/primer_links/sect_6/coatpart/coat_7.png) | ![](../Storage/primer-22-1/primer_links/sect_6/coatpart/coat_8.png) | ![](../Storage/primer-22-1/primer_links/sect_6/coatpart/coat_9.png) |
| --- | --- | --- |
| This image uses "Solid colour" and you can see that it covers the underlying elements completely | This image uses 2x2 stippling. The effect is one of "coarse transparency" in which the underlying colour shows through and mixes with the new colour. | This image uses 16x16 stippling. |

[Previous](coat-face.md)  |  [Next](coat-high-order-solids.md)