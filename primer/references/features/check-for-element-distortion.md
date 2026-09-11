###  Check for Element Distortion

With the option Distorted Element Warning active, PRIMER will detect when an orient operation moves some but not all the nodes of an element.

This typically occurs when orienting a rigid part with the option to Move attached extra nodes active. These nodes attach to deformable elements which will get distorted.

The function will allow you to sketch the problematic elements and undo the entire orient or just undo the orient of extra nodes if applicable.

![](../Storage/primer-22-1/primer_links/sect_6/orient/orient_distort.gif)

Additionally the 3rd nodes of non-circular beam sections are checked. If the orientation of the section changes, you will get a warning message which allows you to sketch the original and the current section.

![](../Storage/primer-22-1/primer_links/sect_6/orient/orient_distort_bm.gif)

Subsequently you will be offered the option to undo the orient.

![](../Storage/primer-22-1/primer_links/sect_6/orient/orient_distort_bm2.gif)

[Previous](copy-and-orient.md)  |  [Next](orient-and-include-transform.md)