###  CONSTRAINED: Imposed Constraints: Joints, Welds, etc

* [Selecting the *CONSTRAINED sub-keyword](constrained-imposed-constraints-joints-welds-etc.md#select)
* ["Scalar" editing panels](constrained-imposed-constraints-joints-welds-etc.md#CONSTRAINEDEXTRANODES)
* ["Edit range" editing panels](constrained-imposed-constraints-joints-welds-etc.md#CONSTRAINEDGENERALIZEDWELD)
* [Visualisation](Model%20visualisation.html#visualisation)
* [Labelling](constrained-imposed-constraints-joints-welds-etc.md#labelling)

 Constrained conditions within Ansys LS-DYNA apply a range of constraints to models, and several \* CONSTRAINED keywords are linked closely to rigid bodies. 
All \* CONSTRAINED sub-keywords are editable within PRIMER.

| The *  **CONSTRAINED**  keyword has 26 sub-categories. <br>Some may be created and modified using standard Create/Edit panels and some with the standard keyword editor. The table below defines which.<br> <br><br>| Keyword | Create/Edit panel | Keyword editor |<br>| --- | --- | --- |<br>| **ADAPTIVITY** |  | ![](../Storage/primer-22-1/primer_links/sect_5/constrained/tick.gif) |<br>| **BUTT\_WELD** |  | ![](../Storage/primer-22-1/primer_links/sect_5/constrained/tick.gif) |<br>| **EULER\_IN\_EULER** |  | ![](../Storage/primer-22-1/primer_links/sect_5/constrained/tick.gif) |<br>| **EXTRA\_NODES** | ![](../Storage/primer-22-1/primer_links/sect_5/constrained/tick.gif) | ![](../Storage/primer-22-1/primer_links/sect_5/constrained/tick.gif) |<br>| **GENERALIZED\_WELD** | ![](../Storage/primer-22-1/primer_links/sect_5/constrained/tick.gif) | ![](../Storage/primer-22-1/primer_links/sect_5/constrained/tick.gif) |<br>| **GLOBAL** |  | ![](../Storage/primer-22-1/primer_links/sect_5/constrained/tick.gif) |<br>| **INTERPOLATION** | ![](../Storage/primer-22-1/primer_links/sect_5/constrained/tick.gif) |  |<br>| **JOINT** |  | ![](../Storage/primer-22-1/primer_links/sect_5/constrained/tick.gif) |<br>| **JOINT\_STIFFNESS** |  | ![](../Storage/primer-22-1/primer_links/sect_5/constrained/tick.gif) |<br>| **JOINT\_USER\_FORCE** | ![](../Storage/primer-22-1/primer_links/sect_5/constrained/tick.gif) |  |<br>| **LAGRANGE\_IN\_SOLID** |  | ![](../Storage/primer-22-1/primer_links/sect_5/constrained/tick.gif) |<br>| **LINEAR** | ![](../Storage/primer-22-1/primer_links/sect_5/constrained/tick.gif) |  |<br>| **NODAL\_RIGID\_BODY** | ![](../Storage/primer-22-1/primer_links/sect_5/constrained/tick.gif) | ![](../Storage/primer-22-1/primer_links/sect_5/constrained/tick.gif) |<br>| **NODE\_SET** | ![](../Storage/primer-22-1/primer_links/sect_5/constrained/tick.gif) | ![](../Storage/primer-22-1/primer_links/sect_5/constrained/tick.gif) |<br>| **POINTS** |  | ![](../Storage/primer-22-1/primer_links/sect_5/constrained/tick.gif) |<br>| **RIGID\_BODIES** | ![](../Storage/primer-22-1/primer_links/sect_5/constrained/tick.gif) | ![](../Storage/primer-22-1/primer_links/sect_5/constrained/tick.gif) |<br>| **RIGID\_BODY\_STOPPERS** |  | ![](../Storage/primer-22-1/primer_links/sect_5/constrained/tick.gif) |<br>| **RIVET** | ![](../Storage/primer-22-1/primer_links/sect_5/constrained/tick.gif) | ![](../Storage/primer-22-1/primer_links/sect_5/constrained/tick.gif) |<br>| **SHELL\_TO\_SOLID** |  | ![](../Storage/primer-22-1/primer_links/sect_5/constrained/tick.gif) |<br>| **SPLINE** | ![](../Storage/primer-22-1/primer_links/sect_5/constrained/tick.gif) |  |<br>| **SPOTWELD** | ![](../Storage/primer-22-1/primer_links/sect_5/constrained/tick.gif) | ![](../Storage/primer-22-1/primer_links/sect_5/constrained/tick.gif) |<br>| **SPR** |  | ![](../Storage/primer-22-1/primer_links/sect_5/constrained/tick.gif) |<br>| **SPR2** |  | ![](../Storage/primer-22-1/primer_links/sect_5/constrained/tick.gif) |<br>| **SPR3** |  | ![](../Storage/primer-22-1/primer_links/sect_5/constrained/tick.gif) |<br>| **TIE-BREAK** |  | ![](../Storage/primer-22-1/primer_links/sect_5/constrained/tick.gif) |<br>| **TIED\_NODES\_FAILURE** |  | ![](../Storage/primer-22-1/primer_links/sect_5/constrained/tick.gif) | | ![](../Storage/primer-22-1/primer_links/sect_5/constrained/const_1.png) |
| --- | --- |

The methods for creating and modifying constrained entities falls into two categories.

* [**EXTRA NODES, NODAL RIGID BODIES, NODE SETS** and **RIGID BODIES**](constrained-imposed-constraints-joints-welds-etc.md#CONSTRAINEDEXTRANODES) 
    These are "scalar" panels, in which a single definition is created or edited.
* [**GENERALIZED WELDS, RIVETS** and **SPOTWELDS**](constrained-imposed-constraints-joints-welds-etc.md#CONSTRAINEDGENERALIZEDWELD) 
    These provide "scalar" creation and editing as above. 
Also "quick create" functionality to create a sequence of items. 
Also "edit range" functionality to permit edits to apply to a range of items.

To illustrate the two categories [**EXTRA\_NODES**](constrained-imposed-constraints-joints-welds-etc.md#CONSTRAINEDEXTRANODES)and [**GENERALIZED WELDS**](constrained-imposed-constraints-joints-welds-etc.md#CONSTRAINEDGENERALIZEDWELD)are presented as examples

####  CONSTRAINED_EXTRA_NODES Extra nodes on rigid bodies

| Constrained extra nodes allow a single node ( EXTRA\_NODES\_NODE ) or a group of nodes in a node set ( EXTRA\_ NODES\_SET ) to be attached to a rigid body in Ansys LS-Dyna. <br>This figure shows the main extra nodes menu.<br> <br>The functions currently available have their standard meanings. (See 5.1.1)<br> <br>CREATE and MODIFY apply only to single definitions ("scalar" editing) | ![](../Storage/primer-22-1/primer_links/sect_5/constrained/cnst_2.png) |
| --- | --- |

| CREATE Making a new extra node.  <br>This figure shows the initial state of the extra nodes creation panel: no part or node has been given yet, so both are highlighted red.<br> <br>The &lt;\_option&gt; radio buttons can be used to change whether a EXTRA\_NODES\_NODE or a EXTRA\_NODES\_SET is created.<br> <br>The part and the node (or node set) numbers can be typed directly into the text boxes. If the value is valid (for example the part must be rigid) the box will turn blue, otherwise an error message will be displayed indicating what is wrong. Alternatively, the popup menus can be used to pick a part, node or node set off the screen, or to select a part, node or node set from a list.There is an AUTO-CREATE button which will automatically create the new extra node once the necessary information has been given. | ![](../Storage/primer-22-1/primer_links/sect_5/constrained/cnst_3.png) |
| --- | --- |

Once the required fields are filled in the SKETCH and CREATE\_EXTRA\_NODE buttons will become active.

CREATE\_EXTRA\_NODE saves the new definition permanently.

#####  COPY Copying existing extra nodes(s) to make a new one(s)

>  
> You can COPY any number of extra node definitions, in multiple models.
>  
> For each model the &lt;n&gt; extra nodes chosen in that model are copied using labels &lt;previous highest + 1&gt; to &lt;previous highest +n&gt;, there is currently no control available over the new labels assigned.
> 

#####  MODIFY Modifying the attributes of an existing extra node

>  
> This functions in exactly the same way as CREATE , using the same panels as in the figure above. The only difference is that the initial state of the panels is already set with the attributes of the extra node to be modified.
> 

#####  KEYWORD Invoking the standard keyword editor

>  
> The [standard keyword editing panel](the-generic-keyword-editing-panel.md#keywordedit)is set up.
> 

#####  DELETE Deleting existing constraints

>  
> The DELETE operation deletes the EXTRA\_NODES definitions.
> 
> * If DELETE\_RECURSIVE is switched on any nodes, node sets and parts, referenced by the extra nodes to be deleted are marked for deletion.
> * If recursive deletion is not used only the extra node definitions themselves are removed.
> 
>  
> Note also that the standard deletion rules described in Section 6.4.1 still apply: parts, nodes and node sets will only be deleted if nothing else (which is to remain) depends on them.
>  
> 
> 

#####  SKETCH Sketch the chosen extra node on the current image

>  
> SKETCH allows the user to select and sketch individual extra nodes on the current graphics image. Extra nodes are drawn with a dashed line from the node (or dashed lines from each node in the node set) to the centre of the rigid body.
> 

#####  CHECK Checking for errors

>  
> Runs the standard checking function on the selected extra nodes. Each extra node will be listed either as "OK", or a summary of the errors encountered will be printed. (This is the same as the CHECK\_DEFN command during extra node editing.)
> 

#####  RENUMBER Changing labels

>  
> Raises the standard renumbering panel for constraints in the chosen model, allowing you to renumber some or all of them.
>  
> As constraints do not have labels in Ansys LS-DYNA the usefulness of this is limited.
> 

**END\_CONSTRAINED** returns the user to the main **CONSTRAINED** box.

####  CONSTRAINED_GENERALIZED_WELD "Generalised" welds of various types

Generalized welds in Ansys LS-Dyna are used to represent spotwelds between more than 2 nodes and fillet welds. At present only the creation and modification of spotwelds is implemented.

The main generalized weld menu has identical options to the extra nodes menu and the functions currently available have their standard meanings. (See [Standard Keyword Top Level Menu Options](standard-keyword-top-level-menu-options.md#501StandardKeywordtoplevelmenuoptions))

| CREATE Making a new generalized weld <br>This figure shows the initial state of the generalized weld creation panel.<br> <br>No node set has been given yet, so it is labelled &lt; **N/A** &gt;.<br> <br>The **&lt;\_option&gt;** radio buttons are greyed out as at present only **GENERALIZED\_WELD\_SPOT** can be created.<br> <br>The various parameters for the generalized weld spot can be typed directly into the text boxes (eg  ****  **FILTER, SN, SS** etc). If the value is valid it will be displayed in the text box, otherwise an error message will be displayed indicating what is wrong.<br> <br>Popup menus can be used to pick a coordinate system. | ![](../Storage/primer-22-1/primer_links/sect_5/constrained/cnst_4.png) |
| --- | --- |

| There are 4 methods available for creating the welds. For all methods except 'Pick nodes', there is an AUTO-CREATE button which will automatically create the generalized weld once the necessary information has been given. There is also a maximum length of generalized weld button which sets the maximum permissible length of weld. If you try to create a weld greater than this length, a warning will be given and creation stopped. If you had the AUTO-CREATE option on it will be turned off to give you a chance to do something about the problem such as changing the nodes or increasing the tolerance.<br> <br><br>| ![](../Storage/primer-22-1/primer_links/sect_5/constrained/cnst_4a.png) |<br>| --- | |
| --- |
| **(1) Pick n nodes** | If this option is selected you can pick nodes directly off the screen. The default number of nodes is 3 but you can easily change this by typing in a new number in the box (in the range 2 to 100) or by using the popup menu to select commonly used values. Once you have reached the number of nodes the CREATE\_GEN\_WELD and SKETCH buttons will be ungreyed, or if you have AUTO-CREATE on, the weld will automatically be created. If AUTO-CREATE is off and you try to pick more nodes they will be ignored and a warning given. <br>As you pick nodes the feedback button on the creation panel changes to indicate how many you have picked.<br> <br><br>| ![](../Storage/primer-22-1/primer_links/sect_5/constrained/cnst_4b.png) |<br>| --- | |
| **(2) Pick nodes** | This is similar to method 1 but there is no limit on the number of nodes. Once you have picked 2 nodes the CREATE\_GEN\_WELD button will be ungreyed. <br>The AUTO-CREATE option cannot be used with this method. As you pick nodes the feedback button on the creation panel changes to indicate how many you have picked. |
| **(3) Pick with tolerance of n** | This method can be used to select all the nodes within a certain tolerance of a screen pick. The tolerance can be changed by typing in a number (in the range 1 to 7) or using the popup. <br>The nodes which you selected are sketched on the screen and the feedback button on the creation panel changes to indicate how many you have picked.<br> <br>Care must be taken with this option to ensure that the weld geometry in a tightly meshed area is sensible.<br> <br><br>| ![](../Storage/primer-22-1/primer_links/sect_5/constrained/cnst_5.gif) |<br>| --- | |
| **(4)**    ******   **Standard menu creation.** | This method is the usual (scalar) method in PRIMER for creating an entity. Either type the values into the text boxes and/or use the popup menu to create or select a node set for the generalized weld. |

Unlike other editing panels in PRIMER which are closed when the entity is created, the generalized weld creation panel will remain on the screen until the DISMISS button is pressed. Additionally all the values which you type in for the failure parameters are remembered so that when creating multiple generalized welds the information only has to be typed in once. This information is also remembered when you dismiss the window.

| **Node picking:** filtering the nodes that are picked. <br>By default any visible nodes in the currently selected model can be picked for use in the generalized weld. This can be changed by using the **Node picking** option. If this is set to:<br> <br><br>| ![](../Storage/primer-22-1/primer_links/sect_5/constrained/cnst_6a.png) |<br>| --- |<br><br> <br><br> <br>then If the filter option is chosen then |
| --- |
| **All visible** | Any visible nodes in the currently selected model can be picked. |  |
| **Filter** | A sub-menu allows you to filter which nodes can be picked. <br>The most useful option is to select the **PART(s)** from which you want to pick the nodes. This permits you to limit selection within a dense mesh to just the panels you want to weld.<br> <br>For example you could filter the nodes so that only nodes on 2 panels can be picked. All the other panels are still visible on the screen, but they will be ignored when picking nodes. | ![](../Storage/primer-22-1/primer_links/sect_5/constrained/cnst_7.png) |

| MODIFY Modifying the attributes of an existing generalized weld <br><br>| Unlike most editing panels in PRIMER it is possible to modify more than one generalized weld at a time. <br>If only one is being modified then all attributes of the generalized weld including the failure criteria and the node set can be modified (see figure above).<br> <br>None of the creation options are valid when modifying generalized welds so they are all greyed out. The node set can be changed or modified using the popup menus.<br> <br>However when a range of &gt; 1 welds has been selected then: (fig to right)<br><ul> <li>The node set ( <strong>NSID </strong>) is unavailable for editing. </li> </ul><ul> <li>The default properties are taken from the first weld chosen, and will be applied to all welds, possibly modified, when you <span class="buttontext">UPDATE </span>the panel. </li> </ul><ul> <li>The welds may be selected from multiple models, since only attributes, which are not model-specific, are editable. </li> </ul> <br>Once all the modifications are complete the UPDATE\_GEN\_WELD button saves the new values into the database. | ![](../Storage/primer-22-1/primer_links/sect_5/constrained/cnst_8.png) |<br>| --- | --- | |
| --- |

| KEYWORD Editing welds using the generic Keyword editor <br>All weld types may be edited using the KEYWORD editor, but for the CROSS\_FILLET and COMBINED types only the initial "attributes" rows are editable since the remaining rows are open-ended in length.<br> <br>The keyword editor also provides a more selective way than MODIFY &lt;range&gt; above of changing properties over a range of welds<br> <br><br> <br><br>| **COPY** | **Copying existing generalized weld(s) to make a new one(s).** | These functions work in exactly the same way as for EXTRA\_NODES |<br>| --- | --- | --- |<br>| DELETE | **Deleting existing generalized welds** |<br>| SKETCH | **Sketching welds on the current image** |<br>| CHECK | **Checking for errors** |<br>| RENUMBER | **Renumbering welds** | |
| --- |

| ![](../Storage/primer-22-1/primer_links/sect_5/constrained/cnst_10.png) |
| --- |

| There are 5 methods available for creating a **NODAL\_RIGID\_BODY** . The first four methods are similar to those available for creating welds.<br> <br><br>| ![](../Storage/primer-22-1/primer_links/sect_5/constrained/cnst_17.png) |<br>| --- | |
| --- |
| **(5) Edge of hole** | If this option is selected you can pick any one node on the edge of a hole. A node is automatically created at the centre of the hole and added to a node set. Nodes situated along the circumference are located and added to the same set. Once you have selected node on the edge of hole Create NODAL\_RB and SKETCH buttons will be ungreyed, or if you have AUTO-CREATE on, the NRB will automatically be created. <br>As you pick a node on edge, the feedback button on the creation panel changes to indicate how many nodes are obtained along the circumference.<br> <br><br>| ![](../Storage/primer-22-1/primer_links/sect_5/constrained/cnst_18.gif) |<br>| --- | |

New options for IGA case can be used after toggling on "IGA Options" toggle button.

![](../Storage/primer-22-1/primer_links/sect_5/constrained/cnst_20.png)

| **(1) Create points on surface** | Select a point on the screen on IGA\_SHELL. NODE, IGA\_POINT\_UVW will be created automatically and added in the corresponding SET\_IGA\_POINT\_UVW on IGA\_FACE\_XYZ. |
| --- | --- |
| **(2) Create points around a hole** | Select any IGA\_1D\_BREP on IGA\_SHELL. Number of nodes and IGA\_POINT\_UVW will be created automatically around IGA\_1D\_BREP. There are two options for node creation:<br><ol><li>For the Pitch length option, the nearest possible even number of&#160;nodes is created based on the pitch length specified in the textbox.</li><li>For the Number of nodes option, the number of nodes is created based&#160;on the value specified in the textbox.<span style="font-size: 11pt;"><br></span></li></ol> |

The NODE\_SET creation menu is similar to the EXTRA\_NODES menu and uses the same principles.

![](../Storage/primer-22-1/primer_links/sect_5/constrained/cnst_11.png)

The CONSTRAINED\_RIGID\_BODY creation menu is similar to the EXTRA\_NODES menu and uses the same principles. It has a few more specific options.

![](../Storage/primer-22-1/primer_links/sect_5/constrained/cnst_19.png)

Swap L/C - Swap the lead and constrained entries.

Pick Parts - Allows quick interactive picking - you do not need to instigate picking from the PIDL or PIDC dropdowns.

Autocreate - Means a rigid body will be automatically created once the necessary information has been given (PIDL & PIDC).

Pick option - With the Pick Parts option on and Autocreate on the Pick option can be used to specify whether you wish to pick a new constrained each time (L-C-L-C) or you wish to pick the lead once followed by multiple constrained to create multiple rigid body definitions with the same lead (L-C-C-C).

The **RIVET** and **SPOTWELD** creation menus are similar to the **GENERALIZED\_WELD** menu and use the same principles.

| ![](../Storage/primer-22-1/primer_links/sect_5/constrained/cnst_13.png) | ![](../Storage/primer-22-1/primer_links/sect_5/constrained/cnst_14.png) |
| --- | --- |

####  

#### Combine*CONSTRAINED_NODAL_RIGID_BODY

There is a specific tool for CONSTRIANED\_NODAL\_RIGID\_BODY (NRB) types called Combine . This is available through the main NODAL\_RIGID\_BODY panel. This tool combines multiple selected NRBs into one.

If all the selected NRBs exist in same layer (include file), new combined NRB and respective node sets will be created in the same layer, otherwise the current layer will be used.

![](../Storage/primer-22-1/primer_links/sect_5/constrained/combine_nrb.png)

| **Visualisation of***CONSTRAINEDitems   <br>![](../Storage/primer-22-1/primer_links/sect_5/constrained/cnst_16.png) |
| --- |

All CONSTRAINED items except \_LINEAR, \_RIGID\_BODY\_STOPPERS and \_LAGRANGE\_IN\_SOLID are explicitly drawn and labelled, and all sub-types can have their constituent sets, parts or whatever displayed. Visibility is controlled by the ENT ity Viewing , CONSTRAINED panel.

####  

#### Labelling of*CONSTRAINEDitems within PRIMER.

#### 

Ansys LS-Dyna has optional labels for some \*CONSTRAINED items (e.g. \*CONSTRAINED\_NODE\_SET\_ID): the conversion from "keyword" to "formatted" input that precedes every Ansys LS-Dyna analysis converts them from discrete definitions to attributes applied to other items.

For internal consistency, PRIMER assigns new labels to everything that does not already have a label and that can be defined "once or many times", so \*CONSTRAINED definitions are given labels based on their order of appearance in the keyword input file.

PRIMER 's labels:

* May safely be ignored - you don't have to worry about them if you don't want to!
* Are treated sequentially, starting at 1. (Thus **CNST\_1, CNST\_2, ... CNST\_n** )
* Are not grouped by sub-type: **CNST\_1** might be a NODE\_SET, CNST\_2 a JOINT - they are based solely on the order in which they appear in the input deck. Each \*CONSTRAINED definition encountered gets the next label in the sequence.
* Are used in selection menus (eg for blanking, deletion, etc). Are also used in the output deck when defining what is referenced by what.

Because PRIMER groups \* CONSTRAINED definitions by type when they are written out or copied (all JOINT s together, etc), and because labels are assigned in order of appearance, the labels assigned to these items may change when decks are written out and read in again, unless the \_ID option is used.

####  *CONSTRAINED_JOINT specific annotate tools.

There is a specific tool for joint constained types called Annotate . This is available through the main CONSTRAINED\_JOINT panel or on individual CONSTRAINED\_JOINT edit panels. This tool annotates the joints with nodal positions and rigid body information. It can be useful when creating or checking joints to ensure nodes and rigid bodies are defined in the correct order.

[Previous](comment.md)  |  [Next](contact-defining-contact-surfaces.md)