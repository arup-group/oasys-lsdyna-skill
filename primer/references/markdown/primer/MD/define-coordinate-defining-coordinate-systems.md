##  

### (DEFINE_) COORDINATE: Defining Coordinate Systems

The \* DEFINE\_COORDINATE keyword is used to create local coordinate systems. Three points in space, which form two vectors are required. The coordinate system is then computed from the cross product of these vectors. They are used when a system is required that is not orthogonal to the global axes. For example boundary conditions, orthtropic materials and beam orientations.

Coordinate systems use unique labels and, although part of the \* DEFINE keyword, their labels do not clash with other \* DEFINE\_xxx entities. For example it is legal to have ( **\* DEFINE\_ )BOX#1** and (\* DEFINE\_ )COORDINATE **#1** .

* [Main Menu](define-transform.md#themainmenu)
* [Creation](define-transform.md#create)
* [Copying](define-transform.md#copy)
* [Editing](define-transform.md#modify)
* [Deletion](Editing%20a%20Model%20Database.html#delete)
* [Visualisation](define-coordinate-defining-coordinate-systems.md#VisualisingCoordinatesystems)

| This figure shows the main menufor the editing of co-ordinate systems.define-curvetable<br> <br>All functions have their standard meanings as given in [Standard Keyword Top Level Menu Options](standard-keyword-top-level-menu-options.md#501StandardKeywordtoplevelmenuoptions) | ![](../Storage/primer-22-1/primer_links/sect_5/define/fig_coord_0.gif) |
| --- | --- |

####  CREATE Making a coordinate definition

This figure shows the basic CREATE/UPDATE COORDINATE\_SYSTEM panel.

| There are three ways in Ansys LS-Dyna of defining a coordinate system: <br> <br> <br><br>| **DEFINE\_COORDINATE** | [_NODES](define-coordinate-defining-coordinate-systems.md#DEFINECOORDINATENODES) |<br>| --- | --- |<br>|  | [_SYSTEM](define-coordinate-defining-coordinate-systems.md#DEFINECOORDINATESYSTEM) |<br>|  | [_VECTORS](define-coordinate-defining-coordinate-systems.md#DEFINECOORDINATEVECTORS) |<br><br> <br>The popup menu gives these options:<br> <br>![](../Storage/primer-22-1/primer_links/sect_5/define/fig_coord_1b.gif)<br> <br>The detailed layout of the panels and definition methods vary slightly as shown below. | ![](../Storage/primer-22-1/primer_links/sect_5/define/fig_coord_1a.gif) |
| --- | --- |

| **DEFINE\_COORDINATE\_NODES** <br>Is defined by three nodes:<br> <br> * N1 : origin<br> * N2 : Gives local X axis from N1N2<br> * N3 : forms the local XY plane N1N2N3<br> <br> <br>Methods of defining the nodes: | ![](../Storage/primer-22-1/primer_links/sect_5/define/fig_coord_1c.gif) |
| --- | --- |
| **3 NODES** | Instead of defining each node separately, all nodes can be screen-picked together. Simply screen pick three nodes in the order:<ul> <li>N1 (origin) </li> <li>N2 (local X vector) </li> <li>N3 (lies on local XY plane) </li> </ul> |
| &lt;Individually&gt; | Alternatively use the individual popup menus to select nodes, or simply type in their labels. |

| **DEFINE\_COORDINATE\_SYSTEM** <br>Is defined by three points:<br> <br> * P1 : origin<br> * P2 : Gives local X axis from P1P2<br> * P3 : forms the local XY plane P1P2P3<br> <br> <br>Methods of defining the points: | ![](../Storage/primer-22-1/primer_links/sect_5/define/fig_coord_1d.gif) |
| --- | --- |
| **3 NODES**  <br>(Only their coordinates are used) | Instead of defining each node separately, all nodes can be screen-picked together. Simply screen pick three nodes in the order:<ul> <li>N1 (origin) </li> <li>N2 (local X vector) </li> <li>N3 (lies on local XY plane) </li> </ul> |
| &lt;Individually&gt; | Alternatively use the individual popup menus to select nodes, or simply type in their labels. <br>Or simply type in the coordinates explicitly. |

| **DEFINE\_COORDINATE\_VECTORS** <br>Is defined by the origin and 2 points:<br> <br> * Or : origin<br> * P1 : Gives local X axis from OrP1<br> * P2 : forms the local XY plane OrP1P2<br> <br> <br>Methods of defining the points: | ![](../Storage/primer-22-1/primer_links/sect_5/define/fig_coord_1e.gif) |
| --- | --- |
| **2 NODES**  <br>(Only their coordinates are used) | Instead of defining each node separately, both nodes can be screen-picked together. Simply screen pick three nodes in the order:<ul> <li>N1 (local X vector) </li> <li>N2 (lies on local XY plane) </li> </ul> |
| &lt;Individually&gt; | Alternatively use the individual popup menus to select nodes, or simply type in their labels. <br>Or simply type in the coordinates explicitly. |

####  COPY Copy existing coordinate(s) to make a new coordinate

The selected coordinates are copied. (Coordinates do not "own" anything, so the concept of recursive copying does not apply.)

####  MODIFY Modifying the attributes of an existing coordinate

MODIFY functions in the same way as CREATE , except that an initial definition will be present.

Any modifications made to the section definition will not be made permanent until the UPDATE\_CSYS button is pressed. At this point a the local copy which has been updated is used to overwrite the version in the model.

####  DELETE Delete existing coordinate definitions

The selected coordinates are deleted.

Coordinate definitions do not "own" anything, so the concept of recursive deletion does not apply, however a coordinate that is referred to (ie "owned") by some higher order item will not be deletable unless that item is deleted too, or its reference to the coordinate removed.

####  SKETCH Sketch coordinate definitions on the current image

Allows the user to select coordinate systems and superimpose a white sketch of them over the currently displayed image.

####  LIST List coordinate summaries to screen

The selected coordinate definitions are summarised on the screen.

####  CHECK Check coordinate definitions for errors

The selected coordinate definitions are run through the standard checking routines.

####  RENUMBER Change coordinate labels

Lets you change any or all coordinate labels within a given model using the standard renumbering panel.

To change the label of an individual coordinate it may be simpler just to MODIFY it.

| Visualising Coordinate systems |
| --- |
| Co-ordinate systems may be drawn by turning their display on in the ENT ity Viewing menu. <br><br> <br>They can also be drawn via the [**SKETCH**](define-transform.md#sketch)options above. | ![](../Storage/primer-22-1/primer_links/sect_5/define/fig_coord_3.gif) |
| They may also be drawn in other contexts (for example contacts) if their display as "associated data" in the ENT ity Viewing box is selected. | ![](../Storage/primer-22-1/primer_links/sect_5/define/fig_coord_4.gif) |

[Previous](define-contact-volume.md)  |  [Next](define-curvetable-defining-load-curves.md)