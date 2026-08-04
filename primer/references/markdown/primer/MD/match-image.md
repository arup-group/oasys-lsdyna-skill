###  Match Image

Automatically aligns the current model image with the background by calculating the transformation parameters required.

Lining up an image requires the calculation of 11 unknowns:

* The camera position (3 coordinates)
* The direction in which the camera is pointing (3 vector terms)
* The "Up" axis of the camera (3 vector terms)
* The distance of the object from the camera, ie perspective distance (1 term)
* The focal length of the camera lens, ie image scale (1 term)

(In the orthographic case, where the object is viewed in a parallel sided frustrum, the perspective distance can be omitted leaving only 10 values to be computed.)

This calculation can be performed by PRIMER if four or more nodes on the model are matched to their corresponding points on the image. Generally 5 or 6 points are required for a good match.
 ![](../Storage/primer-22-1/primer_links/sect_9/images/fig_9_5_4.jpg)
 
####  Add point(s) Defining &lt;node : point&gt; pairs for matching

In the (artificial) example below the green image on the left has been read in as a background image, and the task is to get the red analysis image on the right to lie on top of it.

The user has defined 3 points so far: the nodes, identified by yellow pick symbols on the right, correspond to their matching points (red symbols and labels) on the left; the blue line shows which points and nodes are associated. These are screen-picked by selecting first the node, and then the corresponding point, and so on for the next pair.

![](../Storage/primer-22-1/primer_links/sect_9/images/fig_9_5_4a.png)

####  Calculate: aligning analysis with image

Once four or more &lt;node : point&gt; pairs have been defined it is possible to calculate the revised view. This will calculate the revised viewing parameters and update the image immediately. If the images can be matched and the points have been well chosen then the analysis should lie exactly over the target image.

| Edit...: correcting poorly chosen points <br>In the example below points have deliberately been chosen badly to obtain a poor match. (The error here is choosing points, ringed in blue, that lie more or less in a plane, making it difficult to calculate perspective distance correctly. In addition choosing only four points is often inadequate, and more can be required for a good solution.) | ![](../Storage/primer-22-1/primer_links/sect_9/images/fig_9_5_4c.jpg) |
| --- | --- |

| To edit a point screen-pick either its node or point (or select it from the menu), then repick its node or point. | ![](../Storage/primer-22-1/primer_links/sect_9/images/fig_9_5_4b.png) |
| --- | --- |

####  Delete and Restart: Deleting points

Delete allows you to delete individual points by selecting them as above. Each point is deleted immediately. 
 Restart deletes all points letting you make a fresh start.

| You can Add , Edit and Delete points in any order. Here is the example above with 6 points (circled in blue) chosen rather more judiciously, and it can be seen that the correspondence is now very good. | ![](../Storage/primer-22-1/primer_links/sect_9/images/fig_9_5_4d.png) |
| --- | --- |

####  What is stored for matching

"Node" data is stored as a reference to a node in a model.

"Point" data is stored as a parametric (x,y) screen space coordinate, so points will remain valid so long as the aspect ratio of the window remains the same. However in most cases if a window is resized it is best to delete all the points and start again if further matching is required.

[Previous](update-controlling-the-view-updating-frequency.md)  |  [Next](saved-properties.md)