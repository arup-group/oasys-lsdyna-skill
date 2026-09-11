###  TARGET MARKER

These are circular symbols with four quadrants that are attached to nodes (shown below). If applied, they are drawn whenever the node is visible. They are drawn in the plane or the screen,so if you rotate a model will see them appear to rotate in space.

![](../Storage/primer-22-1/primer_links/sect_6/targetmarker/markers.gif)

These can be edited through their own specific editing panel (see below).

* [Main Menu](%28DEFINE_%29%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20TRANSFORM.html#themainmenu)
* [Creation](%28DEFINE_%29%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20TRANSFORM.html#create)
* [Editing](%28DEFINE_%29%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20TRANSFORM.html#modify)
* [Deletion](Editing%20a%20Model%20Database.html#delete)
* [Sketching](%28DEFINE_%29%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20TRANSFORM.html#sketch)

The following figure shows the main menufor the editing of target marker definitions.

![](../Storage/primer-22-1/primer_links/sect_6/targetmarker/target_main.PNG)

####  CREATE Making a new target marker definition.

The create panel will allow the user to select a set of nodes to create target markers on. Click "Pick NODE(s)" to interactively select NODE(s) to create target markers on (using this method will automatically create a node set for the selected nodes.). c1 and c2 are quadrant colours for the target marker. By default c1, c2 are set to black and yellow colour respectively. Radius controls marker size in either model or screen space units. To change between model and screen space display go to "Option-&gt; Program-&gt;Options-&gt;Category-&gt;Target Marker".

![](../Storage/primer-22-1/primer_links/sect_6/targetmarker/target_panel.PNG)

####  MODIFY Modifying the attributes of an existing target marker.

MODIFY functions in the same way as CREATE , except that an initial definition will be present. Any modifications made to the target marker definition will not be made permanent until the UPDATE button is pressed. At this point the local copy which has been updated is used to overwrite the version in the model.

####  DELETE Delete existing target markers.

The selected target markers are deleted.

Target markers do not "own" anything, so the concept of recursive deletion does not apply, however target marker that is referred to (ie "owned") by some higher order item will not be deletable unless that item is deleted too, or its reference to the target marker.

####  SKETCH Sketch target marker.

SKETCH draws the target marker on top of the current graphics image.

![](../Storage/primer-22-1/primer_links/sect_6/targetmarker/marker_sketch.PNG)

[Previous](metal-forming.md)  |  [Next](transfer-data.md)