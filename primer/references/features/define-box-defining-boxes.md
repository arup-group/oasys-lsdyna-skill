##  

### (DEFINE_) BOX: Defining Boxes

## 

* [Main Menu](define-transform.md#themainmenu)
* [Creation](define-transform.md#create)
* [Copying](define-transform.md#copy)
* [Editing](define-transform.md#modify)
* [Deletion](Editing%20a%20Model%20Database.html#delete)
* [Visualisation](define-box-defining-boxes.md#VisualisingBoxes)

Box suffices:
 
[_ADAPTIVE 
_COARSEN 
_DRAWBEAD 
_SPH](define-box-defining-boxes.md#box_opts)
 
The \* DEFINE\_BOX keyword is used to create "boxes". These are rectilinear volumes of space, defined by the min and max [x,y,z] coordinates, in global space units, of diagonally opposite corners. This imposes limitations upon their orientation when rotated - [see below](define-box-defining-boxes.md#limitations). 
Boxes are used to bound the limits of other items, for example a contact may be defined by those elements which lie within a box. However they are not structural items and play no direct role during the actual analysis.
 
Boxes use unique labels and, although part of the **\* DEFINE**  keyword, their labels do not clash with other \* DEFINE\_xxx entities. For example it is legal to have **(\* DEFINE\_ ) BOX**     ****   **#1** and **(\* DEFINE\_ ) CURVE #1.**

| This figure shows the main menu for the editing of box definitions. <br>All functions have their standard meanings as given in [Standard Keyword Top Level Menu Options](standard-keyword-top-level-menu-options.md#501StandardKeywordtoplevelmenuoptions) | ![](../Storage/primer-22-1/primer_links/sect_5/define/fig_box_0.gif) |
| --- | --- |

| CREATE Making a new box definition.  <br>This figure shows the basic CREATE / UPDATE  BOX panel.<br> <br><br>| **Methods of defining box coordinates:**<br> <br><br>| **Corner Nodes:** | The box can be defined in terms of corner nodes in the current target model. In this example the box does not use corner nodes: **&lt;none&gt;** is displayed in the button field. <br>A value for each node can either be typed in directly or chosen via the associated popup window (i.e. screen picking). |<br>| --- | --- |<br>| **PICK 2 NODES** | Instead of defining each node separately, both nodes can be screen-picked together. |<br>| **MIN / MAX COORDINATES** | The minimum and maximum X, Y and Z coordinates are displayed at the bottom of the basic editing panel. These numbers can be typed in directly if required. | | ![](../Storage/primer-22-1/primer_links/sect_5/define/fig_box_1a.gif) |<br>| --- | --- | |
| --- |

Note that the coordinates of a box are independent of the methods used to define them. For example using nodes, by either method above, only extracts the coordinates of the nodes, and they do not become part of the box definition.

| *DEFINE_BOX options: _ADAPTIVE, _COARSEN, _DRAWBEAD, _SPH, _LOCAL  <br><br>| ![](../Storage/primer-22-1/primer_links/sect_5/define/fig_box_opts.gif) | The various sub-types of box may be selected in the editor above.<br> <br>The data entry rows will change accordingly. This example shows the \_DRAWBEAD data. |<br>| --- | --- | |
| --- |

The \_LOCAL option allows you to specify a local coordinate system to create the DEFINE\_BOX definition in. With this active, the max/min coord values will all apply in the local coordiante system rather than the global coordinate system. The local coordinate can be specified by typing in values defining the vectors of the local coordinate system, or by selecting 3 nodes.

DRAG "Dragging" a box size and shape interactively with the cursor.

| Once a box has been given some initial dimensions the cursor can be used to modify the dimensions and position of the box. <br>When DRAG is selected the current box definition is sketched, and 27 "handles" are added to it (8 corners, 12 edges, 6 faces and 1 centre). Each can be picked with the cursor and used to drag the relevant dimension(s). |
| --- |
| ![](../Storage/primer-22-1/primer_links/sect_5/define/fig_box_1c.gif) |

| The dragging "handles" are: |
| --- |
| **TRIAD** (1 @ centre) | LEFT mouse button operates the X-coordinate position of the box; translating the whole box along the X-axis. Note that the X-coordinate buttons are turned green while the mouse button is depressed. <br>MIDDLE mouse button translates the box through the Y-axis; Y-coordinate buttons are turned green.<br> <br>RIGHT mouse button translates the box through the Z-axis; Z-coordinate buttons are turned green. |
| **HANDLE\_1**   **** (6: 1 @ each box face) | Any mouse button will allow the FACE of the box to translated along a vector normal to the face. Note that the coordinate buttons that are locked out turn red. |
| **HANDLE\_2** (12: 1 @ each box edge) | Any mouse button will allow an edge of the box to translated in the plane normal to the edge line. The coordinate box parallel to the edge will be locked out and turned red. |
| **HANDLE\_3** (8: 1 @ each box vertex) | Any mouse button will allow the corner of a box to be moved in any of the three axis directions |

| BOX\_&lt;options&gt; <br>The radio buttons allow the selection the options \_ADAPTIVE, \_COARSEN, \_DRAWBEAD and \_SPH . | ![](../Storage/primer-22-1/primer_links/sect_5/define/fig_box_1d.gif) |
| --- | --- |

####  COPY Copy existing box(es) to make a new box(es)
 
The selected boxes are copied. (Boxes do not "own" anything, so the concept of recursive copying does not apply.)

####  MODIFY Modifying the attributes of an existing box
 
MODIFY functions in the same way as CREATE , except that an initial definition will be present.
 
Any modifications made to the box definition will not be made permanent until the UPDATE\_BOX button is pressed. At this point a the local copy which has been updated is used to overwrite the version in the model.

####  DELETE Delete existing box definitions
 
The selected boxes are deleted.
 
Boxes do not "own" anything, so the concept of recursive deletion does not apply, however a box that is referred to (ie "owned") by some higher order item will not be deleteable unless that item is deleted too, or its reference to the box removed.

####  KEYWORD Creation / editing in the generic keyword editor

Boxes may be created, edited and deleted as a whole category in the [generic keyword editor](the-generic-keyword-editing-panel.md#keywordedit).

####  SKETCH Sketch box definitions on the current image
 
SKETCH allows the user to select box definitions and superimpose a white sketch of them over the currently displayed image. The box and its contents (in the context in which it is being used) will be sketched if the WITH CONTENTS button is active.

**LIST**  **List box summaries to screen**
 
The selected boxes are summarised on the screen.

**CHECK**  **Check box definitions for errors**

The selected box definitions are run through the standard checking routines.

####  RENUMBER Change box labels

RENUMBER lets you change any or all box labels within a given model using the [standard renumbering panel](standard-category-renumbering-panel.md#505Standardcategoryrenumberingpanel).
 
To change the label of an individual box it may be simpler just to [MODIFY](define-transform.md#modify)it.

| Limitations of the box definition method that prohibit non-global orientations  <br>PRIMER allows you to create and edit boxes by both numerical (type in coordinates) and screen-based (pick and drag) methods. You can also transform them via the  **[ORIENT](orient-translating-rotating-scaling-reflecting-projecting.md)**function.<br> <br>**Note on ROTATION OF BOXES** : The way boxes are specified in LS\_DYNA (coordinates of two corners in global units) means that they are always aligned with the global [x,y,z] axes. If a box is rotated by any angle other than a multiple of 90 degrees it will be expanded to a global box which surrounds the actual rotated shape of the original box. Thus a box rotated by by 45 degrees will expand by a factor of 1.4. In such cases, the user will be warned and the contents of the new box sketched. |
| --- |

| Visualising Boxes |
| --- |
| Boxes may be drawn by turning their display on in the ENTity Viewing menu. <br><br> <br>They can also be drawn via the [SKETCH](define-transform.md#sketch) options above. | ![](../Storage/primer-22-1/primer_links/sect_5/define/fig_box_3.gif) |
| They may also be drawn in other contexts (for example contacts) if their display as "associated data" in the ENTity Viewing menu is selected. | ![](../Storage/primer-22-1/primer_links/sect_5/define/fig_box_4.gif) |

[Previous](define-alebag-inflator.md)  |  [Next](define-connection-properties.md)