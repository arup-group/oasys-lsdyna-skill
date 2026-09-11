###  ELEMENT: Defining Structural Elements
 
* [**\*ELEMENT\_&lt;type&gt;**](element-defining-structural-elements.md#menu)
* [**Visualisation**](element-defining-structural-elements.md#Visualisation)
* [**Setting Colour**](element-defining-structural-elements.md#Controllingthecolour)
* [**Data display**](element-defining-structural-elements.md#Datadisplayandcontouring)
* [**Fitting seatbelts**](element-defining-structural-elements.md#Specialcapabilitiesforseatbeltsandrelatedelementtypes)

Ansys LS-DYNA has 15 classes of structural element types, all of which are fully editable in PRIMER in individual create/edit panels. Generic keyword editing of all element types is also provided. 
All element types except \*TRIM are fully drawable, and there are a range of contouring options for different types of element data.
 
Each class of element has its own independent label sequence, thus it is legal to have shell #1 and solid #1, etc in the same model.

| The elements menuenables you to create, modify and delete all the element types that are available in Ansys LS-DYNA. <br>This figure shows the main element menu.<br> <br>The **\*ELEMENT** keyword in Ansys LS-DYNA supports the following sub-types of structural element: | ![](../Storage/primer-22-1/primer_links/sect_5/element/element_types.jpg) |
| --- | --- |
| * [**BEAM**](element-defining-structural-elements.md#ELEMENTBEAM)<br> * [**DISCRETE**](element-defining-structural-elements.md#ELEMENTDISCRETE)<br> * [**INERTIA**](element-defining-structural-elements.md#ELEMENTINERTIA)<br> * [**MASS**](element-defining-structural-elements.md#ELEMENTMASS) <br>  **[MASS_MATRIX](element-defining-structural-elements.md#massmatrix) MASS\_PART**<br> * [**SHELL**](element-defining-structural-elements.md#ELEMENTSHELL)<br> * [**SHELL\_SOURCE\_SINK**](element-defining-structural-elements.md#ELEMENTSHELLSOURCESINK)<br> * [**S** **HELL\_NURBS\_PATCH**](element-defining-structural-elements.md#ELEMENTSHELLNURBS)<br> * [**SOLID**](element-defining-structural-elements.md#ELEMENTSOLID)<br> * [**SPH**](element-defining-structural-elements.md#ELEMENTSPH)<br> * [**TSHELL**](element-defining-structural-elements.md#ELEMENTTSHELL)<br> * [**TRIM**](element-defining-structural-elements.md#ELEMENTTRIM)<br> * [**SEATBELT**](element-defining-structural-elements.md#ELEMENTSEATBELT)<br> * [****](element-defining-structural-elements.md#ELEMENTSEATBELT) [**SEATBELT\_ACCELEROMETER**](element-defining-structural-elements.md#ELEMENTSEATBELTACCELEROMETER)<br> * ****  [**SEATBELT\_PRETENSIONER**](element-defining-structural-elements.md#ELEMENTSEATBELTPRETENSIONER)<br> * [**SEATBELT\_RETRACTOR**](element-defining-structural-elements.md#ELEMENTSEATBELTRETRACTOR)<br> * [**SEATBELT\_SENSOR**](element-defining-structural-elements.md#ELEMENTSEATBELTSENSOR)<br> * [**SEATBELT\_SLIPRING**](element-defining-structural-elements.md#ELEMENTSEATBELTSLIPRING) |

All of the element types with the exception of \* ELEMENT\_TRIM can be created by quickly picking the nodes from the screen and setting the extra data. For all element types, when an element is created, default settings are saved so that the next element will use the same defaults. For example if you create a shell and select part 1000 for the PID, then the next element you create will automatically have the PID set to 1000. Obviously, you can change the part if needed but hopefully this will speed up creation of lots of elements in the same part.

A quick create option is also available. Once the necessary information needed for the element is defined the element will automatically be created.

When an element is created the panel automatically remaps itself with the default values.

As the method for creating the different element types is very similar the generic method will be described in detail for shells. Any major differences in other element types will be stated

| ELEMENT_SHELL |  |
| --- | --- |
| This figure shows the main element shell menu. <br>The functions currently available have their standard meanings. (See [Standard Keyword Top Level Menu Options](standard-keyword-top-level-menu-options.md#501StandardKeywordtoplevelmenuoptions))<br> <br>As with all classes of element the [Generic Keyword editor](the-generic-keyword-editing-panel.md#keywordedit) may be used instead. | ****  ![](../Storage/primer-22-1/primer_links/sect_5/element/element_front.gif) |

| CREATE Making a new shell <br>This figure shows the initial state of the element shell creation panel: no part has been given yet, so it is highlighted red.<br> <br>The &lt;\_option&gt; buttons can be used to select among sub-keyword suffices:<br> <br>ELEMENT\_SHELL  <br> ELEMENT\_SHELL\_THICKNESS or <br> ELEMENT\_SHELL\_BETA  <br>etc<br> <br>The SEATBELT option is a special case: [see below](element-defining-structural-elements.md#sbelt).<br> <br>The part and the node numbers can be typed directly into the text boxes. The default element label used is the highest node label in the model + 1. This can be changed if needed. Alternatively, the popup menus can be used to pick a part, and the nodes from the screen, or to select a part, or node from a list.<br> <br>To choose creation of tria or quad elements the nodes popup can be used to select the number of nodes. For a shell only 3 or 4 nodes can be chosen. |
| --- |

![](../Storage/primer-22-1/primer_links/sect_5/element/element_create.gif)
 
##### 6 and 8 noded (parabolic) shell elements
 
To edit parabolic shells used the "Pick &gt;" popup to select the number of nodes on the element. The example below shows the 8 noded case:
 ![](../Storage/primer-22-1/primer_links/sect_5/element/elem_parab.gif)
 
##### The SEATBELT option: creating 4 noded seatbelt shells
 
In Ansys LS-DYNA release 971 4 noded "shell" seatbelt elements are introduced under the \*ELEMENT\_SEATBELT keyword. However these are in fact shell elements, sharing the same numbering scheme as shells, so for consistency within PRIMER they are edited under the SHELL keyword.
 
These elements should belong to shell parts, referencing \*SECTION\_SHELL cards, however they can use the \*MAT\_SEATBELT material definition.

![](../Storage/primer-22-1/primer_links/sect_5/element/shell_sbelt.gif)

The quickest method for creating a shell is to use one of the quick creation methods:

#####  Pick closest nodes

This is the default method for creating shells. When you pick a point on the screen the 4 (or 3 if you are creating a tria) closest nodes to the point are automatically selected. The order of the nodes will be automatically calculated for you so there is no danger of creating a shell with a negative area. The shell that will be created is sketched on the screen **but will not be created yet** . Picking a second point on the screen will update the display with the 4 closest nodes to that point. You can carry on picking a point until you have the nodes you require. When all nodes and the part are filled in the SKETCH and CREATE\_ELEMENT buttons will be ungreyed.

By default all visible nodes in the model can be used for this method. The filtering option under Node picking allows you to limit the nodes which can be used. If for example you only wanted to use nodes which are on part 1000 this option can be used.

Individual nodes can still be edited by either typing in a new value or using the popups.

#####  Pick individual nodes

In this mode the nodes are picked from the screen in the order 1, 2, 3, 4, 1, 2 The node which will be picked is indicated by the colour of the node text in the panel. The node which will currently be picked has yellow text. All the others will have white text. You can also edit individual nodes by either typing in a new value or using the popups. With this method the filtering option for node picking is not available.

#####  Auto create

Instead of having to press CREATE\_ELEMENT each time you want to create a shell the AUTO\_CREATE option can be used. When this option is set, as soon as the required data is set the element is created. Using this in conjunction with pick closest nodes enables creation of a shell with a single click of the mouse.

Once the element has been created the UNDO LAST button will be made live. This can be used to delete the element if is not what you wanted.

#####  Shell options

| ![](../Storage/primer-22-1/primer_links/sect_5/element/elem_options.gif) | **\_BETA \_MCID \_THICKNESS** and **\_OFFSET**<br> <br>Options for \*ELEMENT\_SHELL can be set on shells selected directly or by part by using the \_option function. |
| --- | --- |

| ![](../Storage/primer-22-1/primer_links/sect_5/element/elem_options_2.gif) | The option is set by pressing Set or removed by pressing Remove<br> <br>Plot Current Beta shows the current beta angles of any shell\_beta amongst the selection<br> <br>Plot Proposed Beta shows prospective beta angles corresponding to the global input vector. Any shells onto which the vector does not project properly will be highlighted with the (dubious) angle line plotted in red and the user warned.<br> <br>Use Set to set proposed beta angle on all selected shells. If the vector is [0,0,0] the beta angles will be set to zero. The effective angle may be viewed by pressing Plot N1-&gt;N2 beams .<br> <br>Use Map Beta to orient the beta angles along the map lines and free edges. For more details on usage please refer to the documentation on [Map Fibres](composite.md) on the composites page.<br> <br>Make Plotel creates plotel elements to show all current beta angles. These may be removed later by using ELEMENT-&gt;BEAM-&gt;DELETE-&gt;DELETE ALL PLOTEL if you wish.<br> <br>For other options, the option alone is activated and you need to use the shell [Keyword editor](define-box-defining-boxes.md#keyword) to set the values. |
| --- | --- |

#####  Other shell creation commands

>  
> 
> | DISMISS | Aborts the current definition and returns to the main element shell menu. |
> | --- | --- |
> | RESET\_ALL | Resets all attributes to &lt;null&gt; for this definition: all data entered will be lost, and the panel will return to its initial default state. |
> | COPY\_EXISTING | Copies the attributes of an existing shell definition (in the current model). This may then be modified as required. |
> | SKETCH | Sketches the current definition on top of the current image. |
> | LIST\_XREFS | Lists everything that references the current shell definition. |
> | CHECK | Performs a check of the current definition, listing any errors |
> 
> 

#####  CREATE_ELEMENT Saving the element definition

Once you have entered the minimum amount of data required to define this shell the CREATE\_ELEMENT button will be made live, and this permits you to save this definition. (If it is not live the missing fields will be highlighted in red.) The definition will be checked and any errors listed, an then it will saved permanently in this model.

Until you press this, the definition remains volatile, and will be lost if you exit this panel in any other way.

When the shell element is created the part number and the number of nodes are saved as the defaults. When the panel refreshes for you to create another shell these defaults are automatically used to speed up element creation.

| Quality checks By default quality checks are done on shell elements when they are created to ensure that there are no badly defined elements. If you want to bypass the quality checks then they can be turned off by using the QUALITY CHECKS button. It is recommended that you keep the quality checks on. <br>The values that are used for the quality checks can be changed by using the OPTIONS button next to quality checks. This brings up the main check options panel.<br> <br>Checks are done for:<br><ul> <li>Element length </li> <li>Warpage </li> <li>Aspect ratio </li> <li>Skew </li> <li>Minimum and maximum internal angles </li> </ul> <br>The values used for checking can easily be changed. | ![](../Storage/primer-22-1/primer_links/sect_5/element/element_qchk.jpg) |
| --- | --- |

#####  COPY Copying existing shell(s) to make a new one(s)

You can COPY any number of shells, in multiple models.

When APPLY is pressed you are asked to confirm what is to be copied, and then the operation is carried out.

For each model the &lt;n&gt; shells chosen in that model are copied using labels &lt;previous highest + 1&gt; to &lt;previous highest +n&gt;, there is currently no control available over the new labels assigned.

#####  MODIFY Modifying the attributes of an existing shell

This functions in exactly the same way as  [CREATE](define-transform.md#create) , using the same panels as in figure Elem\_3. The only difference is that the initial state of the panels is already set with the attributes of the shell to be modified.

#####  DELETE Deleting existing elements

The DELETE operation works exactly the same way as  [COPY](define-transform.md#copy) described above, except that the chosen elements are deleted.

* If DELETE\_RECURSIVE is switched on any nodes, restraints and loads on the elements to be deleted are marked for deletion.

* If recursive deletion is not used only the elements themselves are removed.

Note also that the standard deletion rules described in [DELETE UNWANTED](delete-unwanted.md#641DELETEUNWANTED) still apply: nodes, loads, restraints, etc will only be deleted if nothing else (which is to remain) depends on them.
 
#####  KEYWORD Generic keyword editor

KEYWORD starts the generic keyword editor which allows creation, deleting and modification of multiple shells. This is useful for modifying multiple shells in a single operation.

| This example shows the SHELL keyword editor.<br> <br>Note that the \_THICKNESS,  \_BETA, \_PSI, etc  options require separate layouts since they have a different number of rows of data. | ![](../Storage/primer-22-1/primer_links/sect_5/element/element_keyword.gif) |
| --- | --- |

#####  SKETCH Sketch the chosen shell on the current image

SKETCH allows the user to select and sketch individual shells on the current graphics image.
 
#####  CHECK

Runs the standard checking function on the selected shells. Each shell will be listed either as "OK", or a summary of the errors encountered will be printed. (This is the same as the CHECK\_DEFN command during shell editing.)
 
#####  LIST

Writes a summary list of the selected shells to the screen.
 
##### RENUMBER
 
Raises the standard renumbering panel for shells in the chosen model, allowing you to renumber some or all of them.
 
#####  How to move shells from one part to another:

* For a single element, use the EDIT panel.
* Otherwise, use the Keyword editor in EDIT mode, select the shells, ill in the new part ID instead of \* and press Apply .
* Or, select PART (in Keywords) &gt; MODIFY (select the new part) &gt; CONTENTS... &gt; ADD\_ITEMS and add the shells.

| NORMALS/ALIGN |
| --- |
| The direction of shell normals can be shown in PRIMER using contour plotting (see<br>[CT and SI Plots](ct-and-si-plots.md#contour)).<br> <br>![](../Storage/primer-22-1/primer_links/sect_5/element/element_shell_plot.gif)<br> <br>![](../Storage/primer-22-1/primer_links/sect_5/element/element_shell_plot_2.gif) | ![](../Storage/primer-22-1/primer_links/sect_5/element/element_shell_normals.gif)<br> <br><br><br><br> ![](../Storage/primer-22-1/primer_links/sect_5/element/element_shell_align.gif) |

The direction of normals is indicated by the colour of the shell plotted. Blue represents the normal heading away, pink towards. The Vector suboption allows the shell normals to be represented as arrows.

The arrows used to represent shell normals can also be turned on from NORMALS/ALIGN panel. The Draw Normals button can be used to turn this feature ON or OFF. The user can choose either Selected or All option which will display normals to either selected or all shells respectively. The length of the shell normal arrows can also be changed as a multiple of Model diagonal length.

The shell normals menu is shown on the top right. Select Shells invokes an object menu whereby the shells can be selected. The selection can be sketched or Apply Selection can be used to return to the initial menu. The other options will now be "live" instead of greyed out. It is now possible to either reverse all the shell normals in the selection simply by clicking Reverse Normals . The other option is to make all the normals consistent with a selected one, the Seed Element .

The align menu can be used to align elements in PRIMER to a specified vector by changing the nodal order of the elements. Seed align should be used if you wish to align elements to the vector defined by N1-&gt;N2 of another element. Vector align should be used if you wish to align elements with a specified vector, either defined by an input box or by selecting 2 nodes.
 
##### SUM OF SELECTED MASSES

| ![](../Storage/primer-22-1/primer_links/sect_5/element/sum_mass_1.gif) | <ul> <li>The ELEMENT_MASS panel offers a function to sum the mass of mass elements selected from the object menu.</li> </ul> |
| --- | --- |

| ![](../Storage/primer-22-1/primer_links/sect_5/element/sum_mass_2.gif) | <ul> <li> The total mass of the selected mass elements is reported in the dialogue box when you press <span class="buttontext">APPLY </span>. </li> </ul> |
| --- | --- |

##### SPLIT/COMBINE

| The split/combine panel allows you to manipulate shell elements. You can:<br><ul> <li>Split shells using <a href="element-defining-structural-elements.md#splitshellpredefined">predefined patterns </a> </li> <li>Split shells by <a href="element-defining-structural-elements.md#splitshellline">drawing a line </a> </li> <li>Find <a href="element-defining-structural-elements.md#splitshellwarp">warped quads </a>and split into 2 trias</li> <li> <a href="element-defining-structural-elements.md#splitshelltransition"> Fix transitions </a>between adjacent shells </li> <li> <a href="element-defining-structural-elements.md#splitshelldetach">Detach shells </a>from a mesh </li> <li> <a href="element-defining-structural-elements.md#splitshellcombine">Combine shells </a>together into one shell </li> </ul> <br>To change the mode use the popup on the top left of the panel. The options will then change accordingly. | ![](../Storage/primer-22-1/primer_links/sect_5/element/split_shell_mode_popup.gif) |
| --- | --- |
| Some modes allow you to work on a single shell or multiple shells. The default, is Single mode. In this mode 'quick picking' is activend. Alternatively, to operate on many shells at the same time, select Multiple mode. The standard object menu is mapped to allow you to choose the shells you want to modify. Press APPLY to change them. | ![](../Storage/primer-22-1/primer_links/sect_5/element/split_beam_multiple_popup.gif) |
| You can choose what labels to use for any new nodes and shells that are created. Use the popup to select which option you require.<br> <br>If you choose Start at label then give a label number to start from. PRIMER will try to use that number. If a node or beam already exists with that label it will revert to Highest+1 in model . | ![](../Storage/primer-22-1/primer_links/sect_5/element/split_beam_label_popup.gif) |

| The checks button allows you to trap creating elements which do not pass specific quality checks. With CHECKS ON this checking is done. The values and types of checks done can be cahnged with the OPTIONS... button.<br> <br>In the example on the right a quad is being split into 2 trias. However the minimum angle for the tria (38.66) is less than the allowed angle. PRIMER is warning you of this. CREATE will force the creation of the shell, ABORT will stop this operation. TURN OFF will turn the checks off. This is useful if you are splitting lots of shells. | ![](../Storage/primer-22-1/primer_links/sect_5/element/split_shell_check.gif) |
| --- | --- |

| | Predefined split patterns  <br>There are several predefined split patterns. To change the pattern use the popup. | ![](../Storage/primer-22-1/primer_links/sect_5/element/split_shell_predefined_popup.gif) |<br>| --- | --- |<br><br> <br>In Single mode just click on a shell to split it. You can split the shell at the centre of the shell, at the point you click on the screen (projected onto the shell) or at an existing node location.<br> <br>In Multiple mode select the shells you want to split using the object menu and press APPLY . | ![](../Storage/primer-22-1/primer_links/sect_5/element/split_shell_predefined.gif) |
| --- | --- |

| Splitting by line | ![](../Storage/primer-22-1/primer_links/sect_5/element/split_shell_line.gif) |
| --- | --- |
| Single mode<br> <br><br>| ![](../Storage/primer-22-1/primer_links/sect_5/element/split_shell_line1.gif) | 1. Select the shell to split | ![](../Storage/primer-22-1/primer_links/sect_5/element/split_shell_line2.gif) | 2. Click the first point on the line |<br>| --- | --- | --- | --- |<br>| ![](../Storage/primer-22-1/primer_links/sect_5/element/split_shell_line3.gif) | 3. Click the seond point on the line | ![](../Storage/primer-22-1/primer_links/sect_5/element/split_shell_line4.gif) | 4. Click the third point on the line (if required) |<br>| ![](../Storage/primer-22-1/primer_links/sect_5/element/split_shell_line5.gif) | 5. The shell is split |  |  | |
| Multiple mode<br> <br><br>| ![](../Storage/primer-22-1/primer_links/sect_5/element/split_shell_line_multi1.gif) | 1. Select the shells to split and press DRAW LINE. | ![](../Storage/primer-22-1/primer_links/sect_5/element/split_shell_line_multi2.gif) | 2. Draw the line by clicking with the mouse. |<br>| --- | --- | --- | --- |<br>| ![](../Storage/primer-22-1/primer_links/sect_5/element/split_shell_line_multi3.gif) | 3. Press APPLY. The shells are split. |  |  | |

######  Splitting warped quads

| Select the shells you want to check/split by using the object menu. Give a value for the maximum warpage.<br> <br>You can sketch the shells that are warped by pressing the SKETCH button. They can be placed on the clipboard by pressing CLIP.<br> <br>To split the shells into trias press APPLY. | ![](../Storage/primer-22-1/primer_links/sect_5/element/split_shell_warped.gif) |
| --- | --- |

| Fixing mesh-transitions  <br>Fix transitions looks at neighbouring elements to see if the mesh is continuous. If it is not, the element is split to make it continuous.<br> <br><br>| ![](../Storage/primer-22-1/primer_links/sect_5/element/split_shell_transition1.gif) | 1. Click on the shell you want to split. |<br>| --- | --- |<br>| ![](../Storage/primer-22-1/primer_links/sect_5/element/split_shell_transition2.gif) | 2. The shell is split to make a continuous mesh. | | ![](../Storage/primer-22-1/primer_links/sect_5/element/split_shell_transition.gif) |
| --- | --- |

| Detaching shells  <br>To detach one or more shells from a mesh use the Detach function. Select the shells you want to detach by either clicking on the screen or using the object menu.<br> <br>If AUTO is enabled, once you have the correct number of shells they will be detached, otherwise press APPLY to detach them.<br> <br>If DETACH ALL is enabled, all the selected shells will be detached from each other, otherwise only the shells which are on the boundary among all the selected ones will be detached. | ![](../Storage/primer-22-1/primer_links/sect_5/element/split_shell_detach.gif) |
| --- | --- |

| Combining shells  <br>To combine two or more shells together use the Combine function. Select the shells you want to combine by either clicking on the screen or using the object menu.<br> <br>If AUTO is enabled, once you have the correct number of shells they will be combined, otherwise press APPLY to detach them.<br> <br>The QUAD and TRIA buttons can be used to choose what to combine the shells into. | ![](../Storage/primer-22-1/primer_links/sect_5/element/split_shell_combine.gif) |
| --- | --- |

##### Interpolation Nodes Adjustment

A model check produces a warning if an interpolation node in a high order element is not right in between the 2 corner nodes. This is not necessarily wrong (e.g.: curved surfaces). But, if desired, the nodes can be adjusted to the mid-point position using the Interp. nodes button.

This option is available for shells and solids:

![](../Storage/primer-22-1/element-defining-structural-elements/element-defining-structural-elements-2023-11-13.png) 
##### Convert Mesh Elements
 
The MESH\_SURFACE\_ELEMENTs can be converted to SHELLs along with referenced MESH\_PARTs to PARTs and MESH\_NODEs to NODEs.
 
The details can be found in Volume III Keywords [section](volume-iii-keywords.md#volIII).
 
#### ELEMENT_SHELL_SOURCE_SINK
 This figure shows the shell source sink keyword editing panel.
This keyword defines a strip of shell elements of a single part ID to simulate a continuous forming operation.
 
![](../Storage/primer-22-1/primer_links/sect_5/element/element_shell_source_sink.gif)
 
#### ELEMENT_SHELL_NURBS_PATCH
 
Isogeometric Analyses can be run in Ansys LS-DYNA using the keyword \*ELEMENT\_SHELL\_NURBS\_PATCH and \*DEFINE\_NURBS\_CURVE to define the surfaces. From v16 onwards, PRIMER can display those surfaces.
 
The figure shows the \*ELEMENT\_SHELL\_NURBS\_PATCH edit panel. The edit panel allows you to manipulate and visualise the shell nurbs patch. You can:

* Visualise knot grids
* Change the curve degree (p-refinement)
* Insert knot values (h-refinement)
* Sketch trimming curves
* View Interpolated Elements

![nurbs_edit](../Storage/primer-22-1/primer_links/sect_5/element/shell_nurbs1.png)
 
##### Visualise Knot grid (Display Knot)
 
The NURBS elements (or knot segments) can be visualized by enabling the Display Knot toggle button.
 
![nurbs_display](../Storage/primer-22-1/primer_links/sect_5/element/shell_nurbs2.png)

##### Change the curve degree (p-refinement)
 
The edit panel lets you change the basis function degree which will result in control points being added or removed. The degree can be changed by typing in the new value in the PR/PS textboxes.
 
##### Insert knot values (h-refinement)
 
There are two methods to add a knot. In the first method, type a knot value in the r-Knot Value/s-Knot Value text box and press Insert r-Knot/Insert s-Knot . In the second method, press Screen Pick Knot to pick a knot value from the screen by clicking on the blue line (shown below). Use left mouse click to pick a knot and the selected value gets updated in the edit panel. Alternatively, use right mouse click to select and insert a knot value (make sure to put the cursor over the blue curves when right clicking otherwise you will get a warning "Nothing close enough"). The right mouse click should insert a knot at the selected point without any need to click the insert button.
 
![add-knot](../Storage/primer-22-1/primer_links/sect_5/element/shell_nurbs3.png)
 
##### Sketch trimming curves
 
To view all the trimming curves, enable Sketch all loops or alternatively you can use Sketch loop to view the current trimming curve. In order to view curve labels, press Show curve labels.
 
![view_trim_curve](../Storage/primer-22-1/primer_links/sect_5/element/shell_nurbs4.png)
 
##### View Interpolated Elements
 
The interpolated elements based on NISR and NISS values can be visualised by enabling the View Interpolated Elems toggle button.

You can change NISR/NISS values and it will show Interpolated elements based on the current value in the panel. You can also enable the Enable Trim option to view trimmed interpolated elements.

![](../Storage/primer-22-1/primer_links/sect_5/element/shell_nurbs5.png)

#### ELEMENT_SOLID
 
This figure shows the element solid creation panel.
 
![](../Storage/primer-22-1/primer_links/sect_5/element/element_solid.gif)
 
The  **ORTHO**  &lt;\_option&gt; button can be used to change whether an ELEMENT\_SOLID or an ELEMENT\_SOLID\_ORTHO  ****    **** is created.

Tetra, penta and hexa solid elements can be created by changing the number of nodes by typing in the number of nodes or using the popup.

Alternatively, if the number of nodes is left set at eight and the nomal Ansys LS-DYNA method for creating either penta elements (N1, N2, N3, N4, N5, N5, N6, N6) is used a penta element will be created, or tetra elements (N1, N2, N3, N4, N4, N4, N4, N4) a tetra element will be created.

The **Pick closest nodes** and **Node picking** options are not available for solid elements.

When a solid element is created the part number and the number of nodes are remembered as defaults for the next element.

| ALIGN |
| --- |
| The direction axes of a solid element can be showed in PRIMER using Entities-&gt;Triad check button. (see [Triads (Elements)](triads-elements.md#Triad)).<br><ul> <li>X-Axis is the direction of edge connecting the first two nodes of the solid element. </li> <li>Z-Axis is the direction normal to the plane forming the first face of the solid element. </li> <li>Y-Axis is the cross product of Z and X axes directions. </li> </ul> <br>The solid align menu is shown on the bottom right. Select Solids invokes an object menu whereby the solids can be selected. The selection can be sketched or Apply Selection can be used to return to the initial menu. The other options will now be "live".<br> <br>The align menu can be used to align elements in PRIMER to a specified vector by changing the nodal order of the elements. Seed align should be used if you wish to align elements to the vector directions defined by nodes of another element. Vector align should be used if you wish to align elements with a specified vector, either defined by an input box or by selecting 2 nodes.<br> <br>You can specify which axes to align by choosing options from First align and Second align menus. <br> First align is the first axes to be aligned and Second align is to align the second axes after alignment of the first axes. Second axis alignment is optional.<br> <br>If two axes directions are chosen to be aligned, PRIMER compulsorily needs to define a seed solid. <br>If the seed solid is still not defined, PRIMER assumes the first selected element in the list as the seed solid.<br> <br>If while aligning a hexa-solid element (8-noded solids), the user does not want to change the Top/Bottom faces of the element to its side faces, Treat as cohesive solids option can be checked ON.<br> <br>To align the second axes, the first axes alignment may have to be changed. For this purpose, the Angle Tolerance value can be modified. This value is the maximum angle allowed between the final first axes and the first axes direction achieved. Essentially it allows the first axes to deviate from the "best" alignment found by a specified tolerance to achieve the second axis alignment. | ![element_solid_triad](../Storage/primer-22-1/primer_links/sect_5/element/element_solid_triad.png)<br> <br><br><br><br> ![element_solid_align](../Storage/primer-22-1/primer_links/sect_5/element/element_solid_align.png) |

| SPLIT  <br><br>| The split panel allows you to manipulate solid elements. You can:<br><ul> <li>Split solids by splitting at <a href="element-defining-structural-elements.md#splitsolidallaxes">all axes </a> </li> <li>Split solids by splitting at <a href="element-defining-structural-elements.md#splitsolidlocalaxes">chosen local axes</a></li> <li><a href="element-defining-structural-elements.md#splitandpropagate">Split and propagate</a> in the direction normal to the selected face.</li> </ul> <br>To change the mode use the radio buttons on the bottom right of the panel or use popup on the top left of the panel for the "Splt and propagate" mode. The options will then change accordingly. | ![](../Storage/primer-22-1/primer_links/sect_5/element/split_solid_mode_popup.JPG) |<br>| --- | --- |<br>| The modes allow you to work on a single solid or multiple solids. The default, is Single mode. In this mode 'quick picking' is active. Alternatively, to operate on many solids at the same time, select Multiple mode. The standard object menu is mapped to allow you to choose the solids you want to modify. Press APPLY to change them. | ![](../Storage/primer-22-1/primer_links/sect_5/element/split_beam_multiple_popup.png) |<br>| You can choose what labels to use for any new nodes and solids that are created. Use the popup to select which option you require. <br>If you choose Start at label then give a label number to start from. PRIMER will try to use that number. If a node or solid already exists with that label it will revert to Highest+1 in model . | ![](../Storage/primer-22-1/primer_links/sect_5/element/split_beam_label_popup.png) | |
| --- |

| Split at all axes <br>The solid elements can be split at all the axes with this option.<br> <br>In Single mode just click on a solid to split it.<br> <br>In Multiple mode select the solids you want to split using the object menu and press APPLY. | ![](../Storage/primer-22-1/primer_links/sect_5/element/split_solid_allaxes.jpg) |
| --- | --- |

| Split at chosen local axes <br>The solid elements can be split at any single axis or a combination of axes. For example a solid can be split at only X or Y or Z axis or it can be split at XY, XZ or YZ (as shown in the image). Currently splitting at chosen local axes is restricted to hexahedral solid elements only. The other types of solids can be split using the above method i.e. [Split at all axes](element-defining-structural-elements.md#splitsolidallaxes).<br> <br>This splitting happens with respect to the local coordinate system and not the global coordinate system.<br> <br>In Single mode just click on a solid to split it.<br> <br>In Multiple mode select the solids you want to split using the object menu and press APPLY . | ![](../Storage/primer-22-1/primer_links/sect_5/element/split_solid_local_axes.jpg) |
| --- | --- |

| Split and propagate<br>The solid elements are split along the axis normal to the selected face. Solids can be split Horizontally, Vertically, both, or in the third direction normal to the selected face. Only hexahedral and pentahedral solids are split using this method. Furthermore, splitting with one axis is restricted to hexahedral solid elements only.<br> <br>For Split with one axis the initial axis is chosen as a vertical line based on the local coordinate system and not the global coordinate system. This axis can be toggled between Horizontal and Vertical using the "Switch axis" button.<br> <br><br>| Split both axes | ![](../Storage/primer-22-1/element-defining-structural-elements/element-defining-structural-elements-2023-08-03-1.jpg) |<br>| --- | --- |<br>| Split with one axis | ![](../Storage/primer-22-1/element-defining-structural-elements/split_option_2a.jpg) ![](../Storage/primer-22-1/element-defining-structural-elements/element-defining-structural-elements-2023-08-03.jpg) |<br>| Split direction normal to the face | ![](../Storage/primer-22-1/element-defining-structural-elements/element-defining-structural-elements-2023-08-03-3.jpg) | | ![](../Storage/primer-22-1/element-defining-structural-elements/split_and_propagate_menu.jpg) |
| --- | --- |
| Single mode<br><br><br>| ![](../Storage/primer-22-1/element-defining-structural-elements/1.png) | 1. Select a face on the solid | ![](../Storage/primer-22-1/element-defining-structural-elements/2.png) | 2. Preview split direction and solids going to be split |<br>| --- | --- | --- | --- |<br>| ![](../Storage/primer-22-1/element-defining-structural-elements/Split_types.png) | 3. Change type of split (if required) | ![](../Storage/primer-22-1/element-defining-structural-elements/3.png) | 4. Click Apply. The solids are split. | |
| --- |
| Multiple mode<br><br>Follow the same steps as above. Here you can select multiple faces to split multiple batches of solids at the same time.<br><br>Further, in Multiple mode, there is a "Grow out face" option. If this is selected once the face of a solid is clicked, all the adjacent solids with a face with an angle less than the defined break angle with the selected face are selected (along with the solids propagating from them).<br><br><br>| Without face propagation | With face propagation |<br>| --- | --- |<br>| ![](../Storage/primer-22-1/element-defining-structural-elements/primer001.png) | ![](../Storage/primer-22-1/element-defining-structural-elements/primer002.png) |<br><br><br>Yellow arrow indicates the face clicked on. |
| --- |

As for shells it is possible to adjust [interpolation nodes](element-defining-structural-elements.md#INTERP_NODES) on solids.

####  ELEMENT_BEAM

#####  CREATE

This figure shows the element beam creation panel.

![](../Storage/primer-22-1/primer_links/sect_5/element/element_beam1.gif)

There is an option to create a **plotel** beam which is a 2 noded beam used for display purposes only.

The row of buttons **THICKNESS, SCALAR, SCALR, SECTION, OFFSET, ORIENT, PID, WARPAGE** can be used to select beam options, with proviso that THICKNESS and SCALAR are exclusive.

     * **ELEMENT\_BEAM**
     * **ELEMENT\_BEAM** \_option1\_option2
     * 
 * ****

Three, two (discrete and spotweld), and one (spotweld) beam elements can be created by changing the number of nodes by typing in the number of nodes or using the popup.

There are no element quality checks available for beam elements at present.

When a beam element is created the part number and the number of nodes are remembered as defaults for the next element.

Additionally if a three noded beam is created the third node is also remembered as a default.

| Create Multiple Beams on Nodes  <br><br>| The panel allows you create multiple beams connecting the selected list of nodes.<br><ul> <li>All beams will have same part (PID) and orientation node (N3) defined in the Panel. N3 is kept optional for creation of beams. </li> <li>The beams will be created connecting nodes in exact order of selection by the user. </li> </ul> <br> ![beam_on_nodes](../Storage/primer-22-1/primer_links/sect_5/element/beam_on_nodes.gif) |<br>| --- |<br>| An extra beam can also be created connecting the first and the last nodes in the selection list. This is based on the user selection in 'Create as' pop-up option.<br> <br>As an example, if four different nodes N1-N2-N3-N4 are selected by the user in this order:<br><ul> <li>Open Loop&#39; : Three beams will be created connecting the nodes in this order: N1-N2, N2-N3 and N3-N4. </li> <li>Closed Loop : An extra fourth beam will be created connecting the nodes N4-N1. </li> </ul> | ![beam_on_node_type](../Storage/primer-22-1/primer_links/sect_5/element/beam_on_nodes_create_as.gif) |<br>| You can choose what labels to use for any new nodes and beams that are created. Use the popup to select which option you require.<br> <br>If you choose Start at label then give a label number to start from. PRIMER will try to use that number. If a node or beam already exists with that label it will revert to Highest+1 in model . | ![](../Storage/primer-22-1/primer_links/sect_5/element/split_beam_label_popup.gif) | |
| --- |

| SPLIT  <br><br>| The SPLIT panel allows you to split beams into 2 or more beams.<br><ul> <li>Any beams which are created will have the same 3rd node as the original beam. <b>V20 </b>onwards a new option &#39;Make 3rd nodes unique&#39; has been added. It creates unique 3rd nodes for the new split beams.&#160;</li> <li>Release conditions on the original beam nodes will be retained. </li> <li>Thickness parameters for beams will be correctly calculated (e.g. if the original beam is tapered) </li> <li>If the beam is in a set, the new beams will automatically be added to the set. </li> </ul> <br>If the beam has a segment (2 noded )on it or a \* DATABASE\_HISTORY\_BEAM , \* LOAD\_BEAM or \* INITIAL\_STRESS\_BEAM card on it the beam cannot be split. | ![](../Storage/primer-22-1/primer_links/sect_5/element/split_beam.PNG) |<br>| --- | --- |<br>| By default, 'quick picking' is activated in Single mode, and each beam you pick will be split. Alternatively, to split many beams at the same time, select Multiple mode. The standard object menu is mapped to allow you to choose the beams you want to split. Press APPLY to split them. | ![](../Storage/primer-22-1/primer_links/sect_5/element/split_beam_multiple_popup.gif) |<br>| You can choose what labels to use for any new nodes and beams that are created. Use the popup to select which option you require.<br> <br>If you choose Start at label then give a label number to start from. PRIMER will try to use that number. If a node or beam already exists with that label it will revert to Highest+1 in model . | ![](../Storage/primer-22-1/primer_links/sect_5/element/split_beam_label_popup.gif) |<br>| If you split a beam into two, you have the option of choosing the direction of the second beam. This can be useful if using the beam with \* MAT\_SEISMIC\_BEAM as a plastic hinge can only be formed at one end of the beam. In this case N1-N2,N2-N1 should be used. For other analyses N1-N2,N1-N2 should be used so that forces and moments are plotted correctly in post-processing. | ![](../Storage/primer-22-1/primer_links/sect_5/element/split_beam_n1n2_popup.gif) | |
| --- |

##### REVERSE
 
REVERSE will permit users to change beam orientation by swapping nodes N1 and N2.
 
![](../Storage/primer-22-1/primer_links/sect_5/element/reverse_beam.gif)
 
#### ELEMENT_TSHELL
 This figure shows the thick shell element creation panel.
The thick shell creation method is identical to the solid element method except that:

* Only triangular and quadrilateral elements are allowed.

* There is no **ORTHO**option

 ![](../Storage/primer-22-1/primer_links/sect_5/element/element_tshell.gif)

| SPLIT  <br><br>| The split panel allows you to manipulate thick shell elements. You can:<br><ul> <li>Split thick shell by splitting at <a href="element-defining-structural-elements.md#splittshellallaxes">all axes </a> </li> <li>Split thick shell by splitting at <a href="element-defining-structural-elements.md#splittshelllocalaxes">chosen local axes </a> </li> </ul> <br>To change the mode use the radio buttons on the bottom right of the panel. The options will then change accordingly. | ![](../Storage/primer-22-1/primer_links/sect_5/element/split_solid_mode_popup.JPG) |<br>| --- | --- |<br>| The modes allow you to work on a single thick shell or multiple thick shells. The default, is Single mode. In this mode 'quick picking' is active. Alternatively, to operate on many thick shells at the same time, select Multiple mode. The standard object menu is mapped to allow you to choose the thick shells you want to modify. Press APPLY to change them. | ![](../Storage/primer-22-1/primer_links/sect_5/element/split_beam_multiple_popup.gif) |<br>| You can choose what labels to use for any new nodes and thick shells that are created. Use the popup to select which option you require.<br> <br>If you choose Start at label then give a label number to start from. PRIMER will try to use that number. If a node or thick shell already exists with that label it will revert to Highest+1 in model . | ![](../Storage/primer-22-1/primer_links/sect_5/element/split_beam_label_popup.gif) | |
| --- |

| Split at all axes <br>The thick shell elements can be split at all the axes with this option.<br> <br>In Single mode just click on a thick shell to split it.<br> <br>In Multiple mode select the thick shells you want to split using the object menu and press APPLY . | ![](../Storage/primer-22-1/primer_links/sect_5/element/split_tshell_allaxes.jpg) |
| --- | --- |

| Split at chosen local axes <br>The thick shell elements can be split at any single axis or a combination of axes. For example a thick shell can be split at only X or Y or Z axis or it can be split at XY, XZ or YZ (as shown in the image). Currently splitting at chosen local axes is restricted to hexahedral thick shell elements only. The other types of thick shell can be split using the above method i.e. [Split at all axes](element-defining-structural-elements.md#splittshellallaxes).<br> <br>This splitting happens with respect to the local coordinate system and not the global coordinate system.<br> <br>In Single mode just click on a thick shell to split it.<br> <br>In Multiple mode select the thick shells you want to split using the object menu and press APPLY. | ![](../Storage/primer-22-1/primer_links/sect_5/element/split_tshell_local_axes.jpg) |
| --- | --- |

| ALIGN The local coordinate system a TSHELL element can be seen in PRIMER using Entities-&gt;Triad check button.<br><ul> <li>X-Axis is the direction of edge connecting the first two nodes of the TSHELL element.</li> <li>Z-Axis is the direction normal to the plane forming the first face of the TSHELL element.</li> <li>Y-Axis is the cross product of Z and X axes directions.</li> </ul> <br>The TSHELL align menu is shown on the right. It can be invoked by selecting Align radio button from Normals/Align panel. Select TSHELL invokes an object menu whereby the TSHELLs can be selected. The selection can be sketched or Apply Selection can be used to return to the initial menu.<br> <br>The align menu can be used to align elements in PRIMER to a specified vector by changing the nodal order of the elements. Seed align should be used if you wish to align elements to the vector directions defined by nodes of another element. Vector align should be used if you wish to align elements with a specified vector, either defined by an input box or by selecting 2 nodes.<br> <br>You can specify which axes to align by choosing options from First align and Second align menus.<br> First align is the first axes to be aligned and Second align is to align the second axes after alignment of the first axes. Second axis alignment is optional.<br> <br>If Modify normal tickbox is turned ON then, if needed PRIMER will change the nodal order of the element such that element normal's direction might get changed. This is optional. If first and second align both are chosen then modify normal will be greyed out in ON state.<br> <br>If two axes directions are chosen to be aligned, PRIMER compulsorily needs to define a seed solid.<br>If the seed solid is still not defined, PRIMER assumes the first selected element in the list as the seed solid.<br> <br>To align the second axes, the first axes alignment may have to be changed. For this purpose, the Angle Tolerance value can be modified. This value is the maximum angle allowed between the final first axes and the first axes direction achieved. Essentially it allows the first axes to deviate from the "best" alignment found by a specified tolerance to achieve the second axis alignment. | ![](../Storage/primer-22-1/element-defining-structural-elements-2022-12-09-1.png) |
| --- | --- |

#### ELEMENT_DISCRETE
 This figure shows the element discrete creation panel.
Two and one (grounded) discrete elements can be created by changing the number of nodes by typing in the number of nodes or using the popup.
 
There are no element quality checks available for discrete elements at present.
 
When a discrete element is created the part number and the number of nodes are remembered as defaults for the next element.
 ![](../Storage/primer-22-1/primer_links/sect_5/element/element_discrete.gif)

| **If an orientation vector (**  **VID**  **) is required:**<br> <br>If the discrete element needs to use an orientation vector then one can be created/ edited by using the **VID** popup.<br> <br>The panel that the create option brings up can be seen in figure Elem\_9.<br> <br>In this panel the label can be defined as usual by typing in the number or using the popup. The type of orientation vector can be set by using the **IOP** option and either the vector set using the **XT** , **YT** and **ZT** fields or the 2 nodes defined by typing in or using the popups for the **NID1** and **NID2** fields | ![](../Storage/primer-22-1/primer_links/sect_5/element/element_sdov.gif) |
| --- | --- |

#### ELEMENT_INERTIA
 This figure shows the inertia element creation panel.
Only 1 node needs to be picked for the inertia element. The components of the inertia tensor and the coordinate system are saved as defaults when an element is created.
 
There are no element quality checks available for inertia elements at present.
 
![](../Storage/primer-22-1/primer_links/sect_5/element/element_inertia.gif)
 
#### ELEMENT_MASS
 This figure shows the mass element creation panel.
Only 1 node needs to be picked for the mass element. The mass is saved as a default when an element is created.
 
There are no element quality checks available for mass elements at present.
 ![](../Storage/primer-22-1/primer_links/sect_5/element/element_mass.gif)

####  ELEMENT_MASS_MATRIX

This image shows the Create/Modify panel for \*ELEMENT\_MASS\_MATRIX

One node, or node set, is selected at a time and a 6x6 mass matrix is defined for it. This is described in more detail below.

No quality checks are carried out for this element.

![](../Storage/primer-22-1/primer_links/sect_5/element/element_mass_matrix.png)

| The 6x6 mass matrix [M]: what it means and how PRIMER handles it.  <br>This element reads a symmetric 6x6 mass matrix which populates all possible terms of the classic **F = M.A** equation as follows:<br> <br><br>| **Force** | = |  | **Mass** |  | **x** | **Accel** |  |  |  |  |  |<br>| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |<br>| Fx |  | [ | M11 | *m12* | *m13* | *m14* | *m15* | *m16* | ] |  | Tx |  |  | Where: | Fx/y/z | are translational forces in [X,Y,Z] |<br>| Fy |  | [ | M21 | M22 | *m23* | *m24* | *m25* | *m25* | ] |  | Ty |  |  |  | Mxx/yy/zz | are rotational moments about [X,Y,Z] |<br>| Fz | = | [ | M31 | M32 | M33 | *m34* | *m35* | *m36* | ] | x | Tz |  |  |  | Tx/y/z | are translational accelerations |<br>| Mxx |  | [ | M41 | M42 | M43 | M44 | m45 | m46 | ] |  | Rxx |  |  |  | Rxx/yy/zz | are rotational accelerations |<br>| Myy |  | [ | M51 | M52 | M53 | M54 | M55 | m56 | ] |  | Ryy |  |  |  |  |  |<br>| Mzz |  | [ | M61 | M62 | M63 | M64 | M65 | M66 | ] |  | Rzz |  |  |  |<br><br> <br>The matrix is symmetric, with only the lower triangle defined, so upper triangle terms M12 etc (in italics above) are identically equal to M21 etc. |
| --- |

| A good way to think of term **Mij** is that it links **force** in direction &lt; **i** &gt; with **acceleration** in direction &lt; **j** &gt;. For example:<br> <br>![](../Storage/primer-22-1/primer_links/sect_5/element/matrix_picture.png) |
| --- |

#####  Extracting Mass and Inertia from the 6x6 matrix [M]

This raises two interesting questions:

* What is the (scalar) mass of this element?
* What is the inertia of this element?

These properties are needed when PRIMER calculates the mass and inertia of a model.

To understand how PRIMER calculates these values it is necessary to consider the full 6x6 [M] matrix above as the following block matrix of 3x3 sub-matrices:

| **[** | **[A]** | **|** | *[B]* | **]** |  | Where: | **[A]** | is a symmetric tensor describing mass |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **[** | **----** | **+** | **----** | **]** |  |  | **[C]** | is an unsymmetric tensor describing cross-linking terms ( *[B]* is the transpose of **[C]** ) |
| **[** | **[C]** | **|** | **[D]** | **]** |  |  | **[D]** | is a symmetric tensor describing inertia |

The "cross-linking" terms in sub-matrix [C] will be non-zero if the matrix has been set up to describe the result of accelerations not acting through the centroid, as in the image above, and - strictly - the full [M] matrix should be reworked to reduce the terms in [C] to zero before [A] can be considered to be "pure mass" and [D] "pure inertia". The physical equivalent of this reworking would be to shift the matrix so that it described accelerations acting through the element centroid.

However this is very hard to do and, given the unconstrained nature of the input, it would be easy for a user to define an unrealistic (non-physical) matrix in which this is not possible, so PRIMER adopts the following simplified approach:

**MASS is taken to be the 1st invariant of sub-matrix [A]**

That is the average of the leading diagonal terms: **mass = (M11 + M22 + M33) / 3.0**

**INERTIA is taken to be the symmetric tensor in sub-matrix [D]:**

| **[** | **Ixx** | *Ixy* | *Ixz* | **]** | **** | **[** | **M44** | *M45* | *M46* | **]** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **[** | **Iyx** | **Iyy** | *Iyz* | **]** | **=** | **[** | **M54** | **M55** | *M56* | **]** |
| **[** | **Izx** | **Izy** | **Izx** | **]** | **** | **[** | **M64** | **M65** | **M66** | **]** |

**The "cross-linking" terms in sub-matrix [C] .**

If the terms in sub-matrix [C] are large, ie the matrix [M] has been written to describe behaviour remote from the element centroid, then the Inertia (which includes "distance squared" terms) and - to a lesser extent - the Mass calculated using the methods above will be wrong.

#####  Rotating matrix [M]

PRIMER rotates a \*ELEMENT\_MASS\_MATRIX as follows:

The 6x6 matrix [M] is treated as a block matrix of three 3x3 matrices:

| **[** | **[A]** | **|** | *[B]* | **]** |
| --- | --- | --- | --- | --- |
| **[** | **----** | **+** | **----** | **]** |
| **[** | **[C]** | **|** | **[D]** | **]** |

Each sub-matrix [A], [B], [D] is rotated independently as a 3x3 tensor.
 
#### ELEMENT_SEATBELT
 This figure shows the seatbelt element creation panel.
Two nodes need to be picked for the seatbelt element. The part number and slack length ( **SLEN**) are saved as defaults when an element is created.
 
There are no element quality checks available for seatbelt elements at present.
 
This panel is suitable for creation and editing of individual seatbelt elements.
 
For generating and fitting a line of seatbelt elements to an occupant model PRIMER provides a "seatbelt fitting" capability: see [SEAT-BELTS: Fitting Seatbelts and Related Elements](links-to-particular-sections.md).
 
![](../Storage/primer-22-1/primer_links/sect_5/element/element_seatbelt.gif)
 
##### Four noded seatbelt elements (introduced in LS971)
 
The four noded seatbelt elements introduced in Ansys LS-DYNA release 971 are in fact shell elements, and share the same numbering sequence as conventional shells, so within PRIMER they are edited under [shell elements](element-defining-structural-elements.md#ELEMENTSHELL).
 
On output they will be written correctly under the \*ELEMENT\_SEATBELT header. The user can click on Create 4 noded seat belt to open up a shell creation panel with the seatbelt option active.
 
#### ELEMENT_SEATBELT_ACCELEROMETER
 This figure shows the accelerometer create/edit panel.
Three nodes must be selected:

* N1: Origin
* N2 : Local X axis from N1N2
* N3 : Local XY plane from N1N2N3

All three nodes should be on the same rigid part.
 
Accelerations will be output in the local coordinate system of the accelerometer.
 
![](../Storage/primer-22-1/primer_links/sect_5/element/element_seatbelt.gif)
 
#### ELEMENT_SEATBELT_PRETENSIONER
 This figure shows the pretensioner create/edit panel.
Pretensioners are active devices that tighten a seatbelt in the event of a crash.
 
Three different types are provided, which may be triggered by up to four [**SENSOR**](element-defining-structural-elements.md#ELEMENTSEATBELTSENSOR)s.
 
![](../Storage/primer-22-1/primer_links/sect_5/element/element_pret.gif)
 
#### ELEMENT_SEATBELT_RETRACTOR
 This figure shows the retractor create/edit panel.
Retractors are the "inertia reel" part of the seatbelt system.
 
They are assumed to have some number of seatbelt elements curled up inside them, and to apply an constant tension to the belt to take up any slack.
 
When a collision occurs, denoted by a [**SENSOR**](element-defining-structural-elements.md#ELEMENTSEATBELTSENSOR)****activating, they can be programmed to "lock up".
 
![](../Storage/primer-22-1/primer_links/sect_5/element/element_retr.gif)
 
#### ELEMENT_SEATBELT_SENSOR
 This figure shows the sensor create/edit panel.
Sensors are not really elements in the structural sense (forgive the pun!) of the word. Their role is to detect one of four types of event and then to trigger other ELEMENT\_SEATBELT\_xxx elements.
 
![](../Storage/primer-22-1/primer_links/sect_5/element/element_sens.gif)
 
#### ELEMENT_SEATBELT_SLIPRING
 This figure shows the slipring create/edit panel.
Sliprings permit seatbelt elements to "feed through" from one side to the other, emulating the real behaviour in a crash event.
 
They require two contiguous seatbelt elements **SBID1**and **SBID2**to be defined, whose common node must initially be coincident with the slipring node **SBRNID.**
 
![](../Storage/primer-22-1/primer_links/sect_5/element/element_slip.gif)
 
#### ELEMENT_SPH
 This figure shows the sph element creation panel. This is virtually identical to the mass element except a part also needs to be chosen.
Only 1 node needs to be picked for the sph element. The mass and part number are saved as defaults when an element is created.
 
There are no element quality checks available for sph elements at present.
 
![](../Storage/primer-22-1/primer_links/sect_5/element/element_sph.gif)
 
#### ELEMENT_TRIM
 This figure shows the trim element creation panel. This element does not have any node picking associated with it. The only thing that needs to be defined is a part set.
Trim elements are used in conjunction with \* DEFINE\_CURVE\_TRIM in metal forming analyses.
 
![](../Storage/primer-22-1/primer_links/sect_5/element/element_trim.gif)

| Visualisation and labelling of elements  <br>PRIMER draws and labels all element types (except TRIM), display being controlled in the ENTity Viewing panel. (See [Controlling Model Visibility](controlling-model-visibility.md)) <br>Details of an individual element of a specific type can be obtained by clicking on its category in this panel (eg **SOLID** ) and then screen-picking or typing in the element label.<br> <br>To visualise elements of any type use ALL ELEMENTS.<br> <br>The details panel for a solid element is shown below:<br> <br>![](../Storage/primer-22-1/primer_links/sect_5/element/elem_fig4.gif) |  |
| --- | --- |

This is accessed either from [Quick Pick](quick-pick-function.md#quickpick) (click on the element in the graphics window) or by clicking on the word SOLID (or BEAM, SHELL, etc) in the Entities panel and typing in the label of the element.

| Controlling the colour in which elements are drawn |  |
| --- | --- |
| The COLOUR panel menu controls the display of elements that reference \* PART cards.<br> <br>Such elements may be drawn in colours based on:<br> <br> * **PART id** (default)<br> * **MODEL id**<br> * **INCLUDE file id**<br> * **SECTION id**<br> * **MATERIAL id**<br> <br> <br>Colour can also be changed for parts and individual elements using Quick Pick.<br> <br>See [COLOUR... Setting Item Colours in Plots](colour-setting-item-colours-in-plots.md#colour) for more detail. | ![](../Storage/primer-22-1/primer_links/sect_5/element/element_col_1.gif) |
| ![](../Storage/primer-22-1/primer_links/sect_5/element/element_col_2.gif) |

| Special "true thickness" display for beams and shells  <br>Normally beams are displayed as lines and (thin) shells as infinitely thin lines or facets, since this is the simplest and fastest way of rendering them.<br> <br>However both element types have \*SECTION cards which define their properties, and it can be useful to visualise their true shapes, including any offsets that may be defined.<br> <br>The [Display Options](display-options-controlling-plot-parameters.md#dopt_beam)panel controls how beams and shells are displayed, permitting their "true" sections and offsets to be drawn. | ![](../Storage/primer-22-1/primer_links/sect_4/images/options_beams.png)<br> <br>![](../Storage/primer-22-1/primer_links/sect_4/images/options_shells.png) |
| --- | --- |

#####  Data display and contouring

| ![](../Storage/primer-22-1/primer_links/sect_5/element/element_data_1.gif) | A range of different quantities can be displayed as data contours on elements via the CT (Continuous Tone) and SI (Shaded Image) commands. The Vect or plot command can also display element data. <br>These are described in [Data Plotting Commands.](data-plotting-commands.md#42DataPlottingCommands) |
| --- | --- |

####  Special capabilities for seatbelts and related element types

Seat-belt elements can be fitted to occupants using the Safety , Seatbelts menu

This involves form-finding to establish the line of the belt, a fitting process to pull it onto a dummy, meshing, element property definition and contact creation. It is described in section [SEAT-BELTS Fitting seatbelts and related elements](links-to-particular-sections.md).

[Previous](deformable-to-rigid-switching-parts.md)  |  [Next](eqos-equation-of-state.md)