###  PERSP... Setting Perspective Attributes

| By default perspective in PRIMER is off.<br>
<br>Figure 10 .5.2(a) shows the perspective control panel it this default state. Note that the distance changing options are greyed out as a consequence of perspective being turned off.<br>
<br>Figures 10 .5.2(b) and (c) show the effect of turning perspective OFF and ON for a rectangular box. In the left image, where perspective is off, the image is foreshortened and looks strange; in the right image, with it on, the box looks more normal. | ![](../Storage/primer-22-1/primer_links/sect_9/images/fig_9_5_2a.gif) |
| --- | --- |

| [!\[Click to view pdf image\](../navigation/images/pdf.gif)](../Storage/primer-22-1/primer_links/sect_9/pdfs/fig_8_5_2bc.pdf) <br> ![](../Storage/primer-22-1/primer_links/sect_9/images/fig_9_5_2bc.gif) |
| --- |
| Figure 10 .5.2(b): Perspective OFF | Figure 10 .5.2(c): Perspective ON |

| Figure 10 .5.2(d) shows the control panel when perspective is turned ON.<br> <br>Note that the distance changing options are now live. These are used as follows. | ![](../Storage/primer-22-1/primer_links/sect_9/images/fig_9_5_2d1.gif) |
| --- | --- |

| ![](../Storage/primer-22-1/primer_links/sect_9/images/fig_9_5_2e.gif) | NEARER | Reducing perspective distance Clicking on this button reduces the perspective distance by 5%. This brings the viewer closer to the object. |
| --- | --- | --- |
| ![](../Storage/primer-22-1/primer_links/sect_9/images/fig_9_5_2f.gif) | AWAY | Increasing perspective distance.  <br>Clicking on this button increases the perspective distance by 5%. The takes the viewer further away from the object. |
| ![](../Storage/primer-22-1/primer_links/sect_9/images/fig_9_5_2b1.gif) | NORM | Restore perspective distance to its NORMal value  <br>This button restores the perspective distance to its standard setting, which gives a field of view of about 37 degrees. |

For all three buttons above the effect is immediate if the UPDATE\_LEVEL (see 10 .5.3) is 2 or greater. In addition holding down a button gives a repeated action after an initial delay, so that you can, in effect, see the effect dynamically as you change the distance.

| Setting the distance explicitly <br>You can type in an explicit Distance from the observer. | ![](../Storage/primer-22-1/primer_links/sect_9/images/fig_9_5_2g.gif) |
| --- | --- |

| Locate Target and Eye  <br>Normal PRIMER viewing effectively positions the model in front of a stationary camera, then rotates, pans and enlarges it to place the desired region in the field of view of the lens.<br> <br>However it is possible to set the "eye" (camera) position and also the "target" point on the structure at which the camera is pointing, and PRIMER will compute the viewing transformation required to give the image from this point. | ![](../Storage/primer-22-1/primer_links/sect_9/images/fig_9_5_2_1a.png) |
| --- | --- |
| There are three components in a "Locate target and eye" definition:<br> <br><br>| Target position | This is the coordinate in space at which the camera is pointing. |<br>| --- | --- |<br>| Eye position | This is the coordinate in space at which the camera (eye) is located |<br>| "Up" vector | This is the vector defining "which way is up". Panning the camera up and down would move it up and down this axis |<br><br> <br>The distance between the camera (eye) and target points is implicitly the current perspective distance, and this is reset when you Update the view. Perspective is switched on automatically if this is not already the case. | ![](../Storage/primer-22-1/primer_links/sect_9/images/fig_9_5_2_1b.png) |

Both target and eye positions may be defined explicitly as coordinates in space, or you may screen-pick a node and its coordinate will be extracted.

By default PRIMER tries to deduce the "Up" vector automatically, but you can override this by choosing a global vector, or by defining your own arbitrary vector.

#####  The relationship between Perspective Distance and Scale

If you use the "locate target and eye" feature you will almost certainly position your eye fairly close to the structure, which will bring you much closer than the normal perspective distance set by PRIMER which is 3x the diagonal of the bounding box around the model. When the perspective distance becomes small the fore-shortening effect it causes becomes much more obvious

| ![](../Storage/primer-22-1/primer_links/sect_9/images/fig_9_5_2_1c.png)<br> <br>In this image the target point is the dummy's nose, and eye point has been placed on the steering column just behind the wheel. | ![](../Storage/primer-22-1/primer_links/sect_9/images/fig_9_5_2_1d.png)<br> <br>In this image the target point is the same, but the perspective distance has been increased by a factor of three, effectively moving the eye point backwards out of the paper. |
| --- | --- |

Photographers will recognise that the perspective distance is, quite literally, the distance between subject and camera, whereas the scale is the "zoom power" (or, more precisely, focal length) of the lens on the camera. Both images above show the dummy head at approximately the same  ***scale***  , but the difference in  ***perspective distance***  gives rise to very different images.

If you are attempting to select viewing attributes to match an existing image you may find this quite difficult to achieve by hand since there are 11 independent variables to match in such an operation:

* Camera position (x,y,z coordinate = 3 variables)
* Subject position (ditto = 3 variables)
* "Up" vector (ditto = 3 variables)
* Scale (1 variable)
* Perspective distance (1 variable)

The [Match Image](match-image.md#match_image)function below will calculate this for you when given at least four points on the image and structure to match.

[Previous](views-storing-and-retrieving-view-information.md)  |  [Next](update-controlling-the-view-updating-frequency.md)