###  NODE: Defining Nodes
 [Top level menu](node-defining-nodes.md#Thenodesmenu) 
* [Creating](node-defining-nodes.md#CREATEMakingnewnodes)
* [Copying](node-defining-nodes.md#COPYCopyingexistingnodesstomakeanewones)
* [Editing](node-defining-nodes.md#MODIFYModifyingtheattributesofanexistingnode)
* [Deleting](node-defining-nodes.md#DELETEDeletingexistingnodes)

#### Precision of storage

Prior to PRIMER 21 nodal coordinates were stored in single (32 bit) precision. From PRIMER 21 onwards nodal storage has been converted to use double (64 bit) precision. The main differences are:

| Attribute | PRIMER 21: 64 bit coordinates | Earlier versions: 32 bit coordinates |
| --- | --- | --- |
| Reliable precision | 15 decimal digits | 7 decimal digits |
| Typical error after transformations | Approximately 1 part in 1e15 | Approximately 1 part in 1e7 |
| Storage cost per number | 8 bytes | 4 bytes |
| Default output precision | 15 sig figs | 8 sig figs |

In practice a typical model uses between 3% and 5% more memory in PRIMER 21 compared to PRIMER 20 because of this change. The speed of the code in general, and coordinate transformations in particular, is unchanged.

The most noticeable change will be that nodal coordinate output now defaults to 15 significant figures, although in the default "small" and "i10" file formats the field width of 16 columns tends to restrict this further when an exponent is present. Output formats are described further under [Model &gt; WRITE, Pre-out options tab, Double precision](pre-out-options-tab.md#h5_831112000)

[Visualisation](node-defining-nodes.md#Controllingthevisibilityandlabellingofnodes)
[Labelling](node-defining-nodes.md#Dynamiclabelling)
[Screen-picking](node-defining-nodes.md#Rulesforscreenpickingnodes)
 
Nodes ("grid points") form the vertices of elements and wide range of other structural purposes: they are the "glue" that holds a finite element model together. Within an Ansys LS-Dyna analysis virtually all mass is lumped at nodes, providing a simple mass vector that doesn't require matrix inversion: the basis of the "explicit" solution method.
 
Special rules apply to the eligibility of nodes for screen-picking: they do not have to be drawn explicitly to be pickable: see the "[Rules for screen-picking nodes](node-defining-nodes.md#Rulesforscreenpickingnodes)" below.
 
The following special operations may also be performed on nodes.

| [Replace](node-defining-nodes.md#replacenodes) | Allows you to replace node A with node B |
| --- | --- |
| [Drag](node-defining-nodes.md#dragnodes) | Allows nodes to be dragged, morphing the model, using a range of geometrical and topological rules. |
| [Duplicates](node-defining-nodes.md#duplicates) | When nodes have been multiply defined in different include files PRIMER merges them together using the same coincidence rules as Ansys LS-DYNA, creating "clone" definitions so that they are remembered. This option allows you to sketch and label these duplicated nodes. |

| The nodes menuallows the creating, modification etc. of nodes in a keyword deck. <br>The functions currently available have their standard meanings. (See [Standard Keyword Top Level Menu Options](standard-keyword-top-level-menu-options.md#501StandardKeywordtoplevelmenuoptions))<br> <br><br> <br>[Generic keyword editing](the-generic-keyword-editing-panel.md#keywordedit) is also available. | ![](../Storage/primer-22-1/primer_links/sect_5/node/node_menu.gif) |
| --- | --- |

| CREATE Making new node(s) <br>There are eight possible ways of creating nodes. These are selected by right clciking below Method. The following options are available | ![](../Storage/primer-22-1/primer_links/sect_5/node/fig_node_method.gif) |
| --- | --- |

##### (1) Pick or type in coordinates
This figure shows the initial state of the nodes creation panel.
The default node label used is the highest node label in the model + 1.
 
Picking a node from the screen will set the X, Y and Z fields for the node you are creating to be the coordinates of the picked node. Alternatively you can just type in a new value for the X, Y or Z coordinate in the boxes.The default coordinates used are (0.0, 0.0, 0.0).

The node label can be changed by typing in a new value or using the popup. If needed translational and rotational restraints can be applied by typing the value into the TC and RC fields or by using the popups.

![](../Storage/primer-22-1/primer_links/sect_5/node/node_single.gif)
 
##### (2) Create between 2 nodes (line)
 
Instead of creating a single node, you can create any number of nodes in a line between 2 existing nodes.
 
Initially the two end nodes are undefined so will be shown as &lt;none&gt; on a red background. Picking a node from the screen will update one of the two end nodes. The one which will be updated is shown in yellow instead of white, so in the figure to the right, Node 1 will be updated if a node is picked. Once this is picked then node 2 will be highlighted and can be picked from the screen. The two nodes can alternately be picked from the screen in this way.
 
Any number of nodes can be created between the 2 end nodes. Either use the popup or type in a number to select how many to create. In this figure 4 nodes will be created.Alternatively you can type in a node number or use the popups to create, select, sketch etc a node.

Once both end nodes have been defined the CREATE\_NODES button will become active and can be used to create the nodes. The display will then refresh for you to create another line of nodes. Once you have finished DISMISS will close the window.

![](../Storage/primer-22-1/primer_links/sect_5/node/node_line.gif)
 
##### (3) Create between 4 nodes (surf)
 
Creating a surface of nodes works in an identical way to creating a line of nodes except that 4 nodes need to be defined (one at each corner) and the number of nodes to create can be varied in both directions.

In this figure node 1 is the node currently highlighted for picking, and 4 nodes will be created in one direction, 5 in the other.

The nodes do not need to be on a plane. If the nodes are not then the nodes will be generated on a curved surface between the 4 nodes.

![](../Storage/primer-22-1/primer_links/sect_5/node/node_surf.gif)
 
##### (4) Create between 3 nodes (circle)
 
Creating a node at the centre of a circle works in an identical way to creating a line of nodes except that 3 nodes need to be defined.
 
In this figure node 1 is the node currently highlighted for picking. The 3 nodes define a circle, and the node created will be at the centre of that circle.
 
![](../Storage/primer-22-1/primer_links/sect_5/node/node_circle.gif)

##### (5) Create at the centre of a hole
 
This method of creating a node only requires the user to select one node. This node must be on the free edge of a hole. PRIMER will determine the centre of the hole and create the node there when clicking on CREATE\_NODES.
 
![](../Storage/primer-22-1/primer_links/sect_5/node/node_hole.gif)

##### (6) Create at geometry point
 
This method of creating a node requires the user to screen pick one geometry point. An 'auto-create' option is also available that obviates the need for clicking on CREATE\_NODES.
 
![](../Storage/primer-22-1/primer_links/sect_5/node/node_gpnt.gif)

##### (7) Create at selected geometry points
 
Instead of creating nodes by picking one geometry point at a time, users may select multiple geometry points from a menu or off the screen. New nodes are then created at the location defined by all these geometry points. As in the case of the single geometry point method, an 'auto-create' option is available that obviates the need for clicking on CREATE\_NODES.
 
![](../Storage/primer-22-1/primer_links/sect_5/node/node_mgpnt.gif)

##### (8) Create along geometry curves
 
Multiple geometry curves may be selected. PRIMER will then create the desired number of nodes spaced equidistantly along each of these geometry curves.
 
![](../Storage/primer-22-1/primer_links/sect_5/node/node_gcur.gif)
 
##### Other node creation commands: 

| DISMISS | Aborts the current definition and returns to the main nodes menu. |
| --- | --- |
| RESET\_ALL | Resets all attributes to &lt;null&gt; for this definition: all data entered will be lost, and the panel will return to its initial default state. |
| COPY\_EXISTING | Copies the attributes of an existing node definition (in the current model). This may then be modified as required. |
| SKETCH | Sketches the current definition on top of the current image. |
| LIST\_XREFS | Lists everything that references the current node definition. |
| CHECK\_DEFN | Performs a check of the current definition, listing any errors. |
| CREATE\_NODE | Saving the node definition. <br>Once you have entered the node information the CREATE\_NODE button will save this definition. The definition will be checked and any errors listed, an then it will saved permanently in this model.<br> <br>Until you press this the definition remains volatile, and will be lost if you exit this panel in any other way.<br> <br>Once the node(s) has been defined the panel will refresh with the default values to speed up node creation. |

#### COPY Copying existing nodes(s) to make a new one(s)
 
You can COPY any number of nodes, in multiple models.
 
When APPLY is pressed you are asked to confirm what is to be copied, and then the operation is carried out.
 
For each model the &lt;n&gt; extra nodes chosen in that model are copied using labels &lt;previous highest + 1&gt; to &lt;previous highest +n&gt;, there is currently no control available over the new labels assigned.

####  MODIFY Modifying the attributes of an existing node

This functions in exactly the same way as [CREATE](node-defining-nodes.md#CREATEMakingnewnodes), using the same panels as in the figures above. The only difference is that the initial state of the panels is already set with the attributes of the node to be modified. In the modify mode the options to create nodes along a line or surface are not available. Only a single node can be modified.

If you want to change values on multiple nodes then you should use the [KEYWORD](define-box-defining-boxes.md#keyword)option instead

####  DELETE Deleting existing nodes

The DELETE operation works exactly the same way as COPY above, except that the chosen nodes are deleted.

* If DELETE\_RECURSIVE is switched on any loads, constraints etc. referenced by the nodes to be deleted are marked for deletion.

* If recursive deletion is not used only the node definitions themselves are removed.

Note also that the standard deletion rules described in [DELETE UNWANTED](delete-unwanted.md#641DELETEUNWANTED) still apply: nodes will only be deleted if nothing else (which is to remain) depends on them.

####  KEYWORD Generic keyword editor

KEYWORD starts the [generic keyword editor](the-generic-keyword-editing-panel.md#keywordedit) which allows creation, deleting and modification of multiple nodes. This is useful for modifying multiple nodes in a single operation.

####  SKETCH Sketch the chosen nodes on the current image

SKETCH allows the user to select and sketch individual nodes on the current graphics image. Nodes are drawn with a star symbol.

####  CHECK

Runs the standard checking function on the selected nodes. Each node will be listed either as "OK", or a summary of the errors encountered will be printed. (This is the same as the CHECK\_DEFN command during node editing.)

####  LIST

Writes a summary list of the selected nodes to the screen. This is just the total number of selected nodes in each model.

####  RENUMBER

Raises the [standard renumbering panel](standard-category-renumbering-panel.md#505Standardcategoryrenumberingpanel)for nodes in the chosen model, allowing you to renumber some or all of them.

####  MERGE

MERGE allows you to merge coincident nodes (or nodes within a specific tolerance) together. For more information see the [MERGE NODES](merge-nodes.md#mergenodes)option in the [REMOVE](remove-delete-unwanted-model-clean-up-node-merging-and-duplicate-elimination.md#64remove)window.
 
#### REPLACE
 
REPLACE works in an identical way to [MERGE](Merging%20nodes%20during%20model%20merge.html#mergenodes)but only allows you to replace a single node with another node.

| 'quick picking' is enabled in the replace node panel so you can just click on the screen to select the 2 nodes. The node which you are currently picking is shown by the colours being inverted (i.e. in the figure on the right, node A is currently being picked). <br>Alternatively you can type in the node numbers or use the popup to select the nodes<br> <br>If Auto is selected then the node will be replaced as soon as both nodes are given. Alternatively press APPLY to replace the node. | ![](../Storage/primer-22-1/primer_links/sect_5/node/replace_node.gif) |
| --- | --- |
| By default the label of the second node you pick (B) will be kept. You can change this by using the popup. You can choose to keep either label or the highest or lowest label. | ![](../Storage/primer-22-1/primer_links/sect_5/node/replace_node_label_popup.gif) |
| By default the node will be replaced at the location of the second node you pick (B). This can be changed by using the popup. You can force the node location to be at the position of either node A or B, the average position, or the position of the node with the lowest or highest label. | ![](../Storage/primer-22-1/primer_links/sect_5/node/replace_node_location_popup.gif) |

DISMISS returns the user to the main PRIMER window

####  DRAG

DRAG permits users to drag nodes based on certain constraints. The impact of such an operation on element quality can be viewed using the Quality button. Various individual quality metrics, as well as overall quality imperfection can be viewed using the Settings button.

| Four methods are currently available for node dragging:<br><ul> <li>The <span class="buttontext">Attached shell planes </span>popup option facilitates dragging along the planes of attached shells. </li> <li>The <span class="buttontext">Local X, Y, Z </span>option permits dragging along local X, Y, Z axes or along local XY, YZ, ZX planes. Appropriate degrees of freedom can be defined using the attached <span class="buttontext">X </span>, <span class="buttontext">Y </span>, <span class="buttontext">Z </span>, <span class="buttontext">XY </span>, <span class="buttontext">YZ </span>, <span class="buttontext">ZX </span>option buttons. A local coordinate system can be defined using an element, a coordinate system or a set of three nodes. </li> <li>The <span class="buttontext">Global X, Y, Z </span>option, likewise, permits dragging along global X, Y, Z axes or along global XY, YZ, ZX planes. </li> <li>Selecting the <span class="buttontext">XYZ </span>degree of freedom will translate mouse motion into movement on the current screen coordinate plane. </li> <li>The <span class="buttontext">N1-&gt;N2 </span>option permits users to select a source node &#39;N1&#39; and destination node &#39;N2&#39;. After selection, N1 will shift to position of N2.</li> </ul> ![Node drag methods](../Storage/primer-22-1/primer_links/sect_5/node/node_drag_methods.gif)<br><br>![Node drag local coordinate options](../Storage/primer-22-1/primer_links/sect_5/node/node_drag_local.gif) | ![Node drag](../Storage/primer-22-1/primer_links/sect_5/node/node_drag_menu.gif) |
| --- | --- |

| The Optimise button will instruct PRIMER to automatically reposition nodes for improved quality.<br> <br>Two optimisation modes are available - single and multi node. The latter permits selection of one or more elements. PRIMER will then reposition attached nodes so that overall quality of the selected elements is improved.<br> <br>Nodes that lie on a free edge or feature line can be restrained using an appropriate option.<br> <br>Movement of nodes that also lie on unselected elements can also be restricted using an option. | ![Optimise](../Storage/primer-22-1/primer_links/sect_5/node/node_optimise.gif) |
| --- | --- |

| DUPLICATES  <br>Sketching and labelling duplicate coincident nodes, sometimes used to "stitch" models together.<br>  Coincidence rules <br>Ansys LS-DYNA has special rules to handle the case that node label N is defined more than once in different include files. It merges multiple definitions of node N into a single definition so long as:<br><ul> <li>The restraint codes TC and RC are identical </li> <li>The nodal coordinates are coincident. </li> </ul> <br>The test for "coincidence" of two definitions NA and NB with the same label is as follows:<br> <br>xdist1 = max(1.0e-16, vector distance of node from origin) <br>xdist2 = vector distance between coords of NA and NB<br> <br>xdist2 / xdist1 &lt; 1.0e-8<br> <br>In addition if a \*NODE\_MERGE\_TOLERANCE card has been defined then the distance xdist2 must be greater than this tolerance value for the nodes to be considered "not coincident".<br> <br>PRIMER uses the same rules as Ansys LS-DYNA. | ![](../Storage/primer-22-1/primer_links/sect_5/node/dup_1.png) |
| --- | --- |
| How coincident nodes are handled inside PRIMER  <br>PRIMER has the problem that nodes must be merged if coincident, but also that the duplicate definitions must be "remembered" so that they are written out again in the correct include files. It handles this by creating "clone" definitions of each node such that:<br><ul> <li>The first definition of node A that is found is the &quot;true&quot; definition, which is the normal definition of the node. <br> <br> </li> <li>Any subsequent duplicate definitions make &quot;<a href="clones.md#Clones">clones</a>&quot; of this node where: <br> <br>- A clone is simply a reference to the &quot;true&quot; definition <br>- It remembers the include file in which it exists. <br> <br> </li> <li>On keyword output the &quot;true&quot; definition of the node is repeated in every include file where there is a clone </li> </ul> <br>Coincident nodes are normally merged silently during keyword input, but it is possible to list nodes merged during this process by using the "[Save keyin log to file](options-controls-many-aspects-of-reading-ls-dyna-files.md#opts_save_keyin_log)" option. |
| Visualising duplicate nodes <br>Since duplicate nodes are actually just references to the true node definition they do not appear as separate entities on plots, nor will you see them in menus that list nodes. However they can be sketched and labelled using this Duplicates option.<br> <br>Either Sketch all to show all of them, or select the subset of nodes to be seen from the menu of cloned nodes and Apply to draw them.<br> <br>By default only node symbols are shown, but Label Sketched will also turn on labels, which shows both node label and also the include file in which it resides. | ![](../Storage/primer-22-1/primer_links/sect_5/node/dup_2.png) |

#### Controlling the visibility and labelling of nodes
 
![](../Storage/primer-22-1/primer_links/sect_5/node/fig_node_vis_1.gif)
 
Node visibility and labelling is controlled from the ENT ity Viewing menu.
 
However its treatment is different to that applied to all other item types.

| ALL\_NODES | Draws all nodes, regardless of attachment |
| --- | --- |
| ATTACHED | Draws only nodes attached to items currently visible on the screen |
| UNATTACHED | Draws nodes that are  ***not***  attached to any item. |

Labelling of nodes is handled in much the same as their drawing.
 
Nodes do not have to be drawn explicitly in order to be labelled: for example selecting ATTACHED labels will display the node labels on visible elements etc.

| Dynamic labelling and details of nodes |
| --- |
| ![](../Storage/primer-22-1/primer_links/sect_5/node/fig_node_vis_4.gif) | As with elements, nodes have a special "pick to label and display details box" that is invoked by clicking on one of the <br> <br> <br><br>| ALL\_NODES | Buttons in ENTity Viewing (doesn't matter which) |<br>| --- | --- |<br>| ATTACHED |<br>| UNATTACHED |<br><br> <br>or from Quick Pick.<br> <br>You can control how nodes are labelled and drawn using:<br> <br>**Label with...**<br> <br> * Label : The node's label<br> * Model : Prefixes the Mnnn model id<br> * R. Part : The part id of any "parent" rigid part.<br> <br> <br>**Draw with...**<br> <br> * Att. elems : The elements attached to the node<br> * **Coordinates**    **** : The node's global coordinates. |

####  Rules for screen-picking nodes

Nodes are treated in a non-standard way for screen-picking purposes. A node is pickable if:

* It is drawn explicitly (using the \* symbol)
* Or if an item which uses it (element, joint, restraint, ...) is visible.

The second condition may be thought of as " **ATTACHED** ", without actually having to draw the nodes.

The reason for this anomaly is that it is extremely useful to be able to screen-pick nodes, but very annoying if they have to be drawn to make this possible: node symbols tend to obscure other useful information, and also slow down graphics.

[Previous](material-defining-structural-and-thermal-materials.md)  |  [Next](node-transformation.md)