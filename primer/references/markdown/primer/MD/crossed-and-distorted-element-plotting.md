####  Crossed and Distorted Element Plotting

| ![](../Storage/primer-22-1/primer_links/sect_6/airbag/airbag_distorted_button.gif) | ![](../Storage/primer-22-1/primer_links/sect_6/airbag/airbag_crossed_button.gif) |
| --- | --- |

By default when doing a fold, elements which are distorted in the folding process and elements which have penetrations or are crossed are highlighted on the origami. Just as with the fold nodes in the previous section, when any fold parameters are changed the display is automatically updated.

Automatically drawing of crossed, penetrating and distorted elements can be turned off by using the folder options (see [Subset Folding](subset-folding.md)). At any time the elements can be redrawn by using pressing the DISTORTED and CROSSED buttons.

Elements are crossed when a node from one element has passed through the mid plane of another element. Elements are defined as penetrating if a node from one element is within the thickness of another element but has not passed through the mid plane. These features are very useful when adjusting the tip scale factors for thin folds. As the fold tip is adjusted the display will show if there are any penetration problems. In this way any potential penetration problems can be visualised and fixed. The thickness which is used for the penetration check can be altered in the folder options (see [Subset Folding](subset-folding.md)).

Element distortion is defined as the ratio of the current element side or diagonal length divided by the reference element side or diagonal length. Therefore if an element is stretched the number will be greater than 1. If the element is shrunk the number will be less than 1. Three different contour bands are available for plotting distorted elements. The ranges and the colours for each contour can be altered in the folder options (see section 6 . 1 .11).

[Previous](fold-node-plotting-visualisation-of-fold-nodes.md)  |  [Next](set-foldcreating-fold-definitions.md)