#####  Slipring Case 1: B-Post Type at Shoulder Location

Note the difference between paths at the B-Post in the images above before and after a slipring was added, shown enlarged below.

| ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fig_7_2_3_2f3.png)<br> <br>Before slipring, simply an "acute" point. | ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fig_7_2_3_2f4.png)<br> <br>After slipring defined, twist of free section has changed. |
| --- | --- |

| ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fig_7_2_3_2f5.png) <br>This example shows how the special case of a slipring at the B-Post location is treated. PRIMER assumes that the slipring is only free to rotate about (approximately) the horizontal axis across the vehicle, axis "A" in the diagram here, defined by the bolt attaching it to the B-Post<br> <br>This requires that the section of the belt going back over the shoulder towards the slipring must adopt a reverse twist in order to give the correct belt path through the slipring.<br> <br>PRIMER treats axis "A" as being the outward normal of the straight section of belt between retractor and slipring, which poses a problem since it is just a line and lines have no orientation.<br> <br>Therefore PRIMER estimates what it believes will be a credible orientation for that section of the belt path, but it may require adjustment to its twist angle to achieve the correct angle at the slipring.<br> <br>**NOTE** : If you define an orientation vector via "twist" nodes N1 and N2 at a B-Post slipring the N1N2 vector "wins" and the special B-Post logic is ignored, effectively treating the slipring as being "free". |
| --- |

The following two images show seatbelt path fitting at the shoulder slipring in PRIMER superimposed on top of photographs of the shoulder belt detail taken in a real vehicle, and they demonstrate how the twist of the belt passing over the shoulder has to rotate backwards to match the angle at the slipring imposed by its limited rotation axis.

| ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fig_7_2_3_2f6.png)<br> <br>Before fitting, with free section of path projected above its final position | ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fig_7_2_3_2f7.png)<br> <br>After fitting, showing the final shape of the belt path. |
| --- | --- |

The orientation of the shoulder slipring is based on the outward normal of the straight vertical path from retractor to slipring, and since this is a straight line there is no "correct" value for this. PRIMER attempts to choose a default orientation that makes sense, but it may not always get it right making it necessary to adjust the twist of this straight section to achieve the correct geometry.

The following figure shows how altering the twist of the vertical section influences the shape of the belt at the shoulder slipring.

| ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fig_7_2_3_2g6a.png) | ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fig_7_2_3_2g6b.png) | ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fig_7_2_3_2g6c.png) |
| --- | --- | --- |

In this example the belt has been rotated at the base (retractor) location, but it could equally well have been rotated at the top (slipring) location. If an explicit twist is applied only to one point on a straight section of path then the whole section will rotate as shown here, however separate twists may be applied at each end in which case the path will twist between them.

[Previous](the-effect-of-sliprings-on-the-belt-path.md)  |  [Next](slipring-case-2-free-type-at-pelvis-location.md)