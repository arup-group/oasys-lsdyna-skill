To auto-create cross sections, press the **Auto-**Create button in the LOAD\_PATH main panel and follow the process below:

**1. Select the desired structure and the PSID to be referenced by the** **\*DATABASE\_CROSS\_SECTIONs**

![](../Storage/primer-22-1/auto-create-cross-sections/load_path_auto_create_step1.png)

To define the structure that will be used by PRIMER to position and scale the cross sections, you can use any of the methods below:![](../Storage/primer-22-1/auto-create-cross-sections/load_path_structure_selection.png)

- **Select**: select elements, parts or part sets through an object menu

- **Select All**: select all elements in the model

- **Select Visible**: select all visible elements in the model

Regardless of the chosen selection method, a message will be displayed showing the total number of selected elements.

The **Sketch** and **Show only** buttons can be used to easily visualise these selected elements in the graphics window.

The **Elements to exclude from selection** tick boxes can be used to control which element types get included in the selection. Any exclusion of elements will be reflected in the displayed message, and the excluded elements will not be used by PRIMER when defining the geometry of the cross sections.

The part set (PSID) that will be referenced by the **\*DATABASE\_CROSS\_SECTIONs** can be defined through one of the methods below:![](../Storage/primer-22-1/auto-create-cross-sections/load_path_auto_psid.png)

- **Auto-create part set**: PRIMER will automatically create a new set that contains all parts referencing selected elements and intersected by at least one cross section. By default, the **Label** of this part set will be defined as the highest label in the current layer incremented by 1, but can be changed to something else.

- **Manually select or create part set**: defined using the standard PRIMER method.

**2. Define the pitch, position and dimensions of the cross sections:**

![](../Storage/primer-22-1/auto-create-cross-sections/load_path_step2.png)

* **Orientation**: Determines whether the normal vectors of the cross sections align with the path defined in step 3 or with one of the global axes.

![](../Storage/primer-22-1/auto-create-cross-sections/load_path_orientation.png)

* **Pitch / Number of XSECs / Snap to grid**: The position and number of cross sections can be determined either by defining the pitch, the number of cross sections, or by snapping the cross sections to a global axis with a defined grid pitch.

![](../Storage/primer-22-1/auto-create-cross-sections/load_path_position.png)

For the **Pitch** and **Number of XSECs** methods, the pitch is defined as the total sum of the path segment lengths enclosed by adjacent cross sections. The number of cross sections for the former method, and the pitch for the latter method are determined based on the full length of the path (sum of composite segments lengths). Note that the points of intersection of the cross sections with the path (not the centres of cross sections) are used as the basis of measurement of the pitch.

For the **Snap to grid** method, the point of intersection of the cross sections with the path are snapped to the virtual grid. If **Orientation** is set to 'Constant X', 'Constant Y' or 'Constant Z' then the **Snap to global axis** is automatically set to the corresponding axis. If it is set to 'Normal to path' then by default, **Snap to global axis** is set to the axis with the greatest projection length of the full path created in step 3, but can be changed to any other axis.

* **Start offset**: Distance between the path start node and the intersection of the path with the first cross section.

![](../Storage/primer-22-1/auto-create-cross-sections/load_path_start_offset.png)

* **Auto size / Fixed size**: Determines how the dimensions of the cross sections are computed. The **Auto size** mode can be used to automatically size the plane so to just encompass the cut elements, with an optional **% increase** and limited to a **Max size**. The **Only visible** option can be used to only consider the elements visible in the graphics when auto-sizing the planes. The **Fixed size** mode can be used to explicitly define the **L** and **M** lengths of the planes. Regardless of the selected mode, PRIMER will automatically centre the planes on the cut elements.

**3. Define the path determining cross sections positioning:**

**![](../Storage/primer-22-1/auto-create-cross-sections/load_path_step3.png)**

For the cross section creation to work properly, the path should align with the structure selection from step 1.

To create the path click on **Pick nodes** and start picking nodes on the desired structure as control points. The order of the point selection determines the orientation of the normal vectors of the cross sections as these will be pointing from the start node to the end node. The more points selected, the smoother the path. Therefore, if the 'Normal to path' **Orientation** mode is selected for curved shaped structures, it is recommended to select a higher number of control points to more accurately position and orient the cross sections.
To remove the last node from selection, simply click on **Undo last** or the middle mouse button. 
To clear the path and restart the picking process from scratch, click on **Reset path** and start picking again.

![](../Storage/primer-22-1/auto-create-cross-sections/modify_path.png)

To edit the path points, click on **Modify path** and then on any of the picked nodes in the graphics area. This will bring up a popup with a list of modify actions to choose from:

* **New node**: define a node ID to replace this point.
* **Pick new node**: pick a node in the graphics to replace this point.
* **Insert after**: pick a node in the graphics to insert directly after this point.
* **Delete point**: remove this point from the path.

The **Sketch path** button can be used to sketch the path at any stage of the process (as long as the list is not empty).

The **XSEC start label** determines the label of the first cross section created, with the labels of subsequent cross sections being incremented by 1. However, if a labelling clash is detected, PRIMER will offer a variety of solutions to fix the clash.

If **Automatically add locations to titles** is turned on, the title of each \*DATABASE\_CROSS\_SECTION will be defined as its plane X, Y or Z centre global coordinate, appended to the LOAD\_PATH title. The choice between the X, Y or Z depends on the selected **Orientation** mode as follows:

Normal to path → Global axis with the greatest projection length of the full path.

Constant X → X axis

Constant Y → Y axis

Constant Z → Z axis

**Preview XSECs** draws simplified planes showing the geometry of the cross sections based on the properties defined in all three steps.

**Create XSECs** creates the \*DATABASE\_CROSS\_SECTION definitions and auto-populates the LOAD\_PATH list.

**Other** **miscellaneous buttons:**

**Return** can be used to****go back to the main LOAD\_PATH panel at any stage of the process without creating any cross sections.

**Save to oa\_pref** can be used to save the current configuration settings (excluding entity selection and labelling) in the "Auto-create" panel to the oa\_pref file to use them as defaults in future sessions.

**Auto-creating cross sections for a LOAD\_PATH with a non empty list:**

If the **Auto-Create** button is clicked for a LOAD\_PATH with a non empty list of \*DATABASE\_CROSS\_SECTION instances, then PRIMER will attempt to delete these instances from the model if they're not referenced by any other entity. If you wish to keep these in the model then turn on the **Keep old xsecs in model** option before going into "Auto-create" mode.

![](../Storage/primer-22-1/export-cross-section-properties-to-csv/load_path_keep_old_xsec.png)

[Previous](create-a-loadpath.md)  |  [Next](export-cross-section-properties-to-csv.md)