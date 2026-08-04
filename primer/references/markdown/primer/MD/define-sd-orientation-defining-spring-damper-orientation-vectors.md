##  

### (DEFINE_) SD_ORIENTATION: Defining Spring & Damper Orientation Vectors

* [Main Menu](define-transform.md#themainmenu)
* [Creation](define-transform.md#create)
* [Copying](define-transform.md#copy)
* [Editing](define-transform.md#modify)
* [Deletion](Editing%20a%20Model%20Database.html#delete)
* [Visualisation](define-sd-orientation-defining-spring-damper-orientation-vectors.md#VisualisingOrientationVectors)

The \* DEFINE\_SD\_ORIENTATION keyword is used to create orientation vectors for springs and dampers. These are vectors used to define the direction of the element, and are used primarily for rotational elements - which are generally of zero length. 
However orientation vectors can also be used for translational springs/dampers of finite length, and they define the direction in which the elements acts, which can be different to the "natural" vector defined by its topology.
 
Orientation vectors use unique labels and, although part of the \* DEFINE  ****    **** keyword, their labels do not clash with other \* DEFINE\_xxx entities. For example it is legal to have (\*DEFINE\_)SD\_ORIENTATION **#1**  and (\* DEFINE\_)CURVE  **#1**.

| This figure shows the main menufor the editing of orientation vector definitions. <br>All functions have their standard meanings as given in [Standard Keyword Top Level Menu Options](standard-keyword-top-level-menu-options.md#501StandardKeywordtoplevelmenuoptions) | ![](../Storage/primer-22-1/primer_links/sect_5/define/fig_sdov_1.gif) |
| --- | --- |

| CREATE Making a new orientation vector definition |
| --- |
| This shows the create/edit panel for orientation vectors. <br>&lt; **IOP** &gt; defines the orientation vector definition method.<br> <br>![](../Storage/primer-22-1/primer_links/sect_5/define/fig_sdov_3.gif)<br> <br>Methods #2 and #3 make the **NID1** and **NID2** boxes "live" for selection. | ![](../Storage/primer-22-1/primer_links/sect_5/define/fig_sdov_2.gif) |

####  COPY Copy existing orientation vector(s) to make a new vector(s)
 
The selected orientation vectors are copied. (orientation vectors do not "own" anything, so the concept of recursive copying does not apply.)
 
####  MODIFY Modifying the attributes of an existing orientation vector
 
MODIFY functions in the same way as CREATE , except that an initial definition will be present. Any modifications made to the orientation vector definition will not be made permanent until the UPDATE\_VECTOR button is pressed. At this point a the local copy which has been updated is used to overwrite the version in the model.
 
####  DELETE Delete existing orientation vector definitions
 
The selected orientation vectors are deleted.
 
Orientation vectors do not "own" anything, so the concept of recursive deletion does not apply, however a orientation vector that is referred to (ie "owned") by some higher order item will not be deletable unless that item is deleted too, or its reference to the orientation vector removed.

####  SKETCH Sketch orientation vector definitions
 
SKETCH draws the vector on top of the current graphics image.

####  LIST List orientation vector summaries to screen

The selected orientation vectors are summarised on the screen.

####  CHECK Check orientation vector definitions for errors

The selected orientation vector definitions are run through the standard checking routines.

####  RENUMBER Change orientation vector labels

RENUMBER lets you change any or all orientation vector labels within a given model using [the standard renumbering panel](standard-category-renumbering-panel.md#505Standardcategoryrenumberingpanel). To change the label of an individual orientation vector it may be simpler just to MODIFY it.

| Visualising Orientation Vectors |
| --- |
| Orientation Vectors may be drawn by turning their display on in the ENTity Viewing menu. <br><br> <br>They can also be drawn via the [SKETCH](define-transform.md#sketch) options above. | ![](../Storage/primer-22-1/primer_links/sect_5/define/fig_coord_3.gif) |
| They may also be drawn in other contexts (for example contacts) if their display as "associated data" in the ENTity Viewing box is selected. | ![](../Storage/primer-22-1/primer_links/sect_5/define/fig_coord_4.gif) |

[Previous](define-friction.md)  |  [Next](define-spotweld-failure-resultants.md)