####  Creating Adhesive

| ![](../Storage/primer-22-1/primer_links/sect_6/connection/adhesive_1.gif) | The adhesive creation panel is shown on the left. Adhesive is either defined as a constant width run of solid elements or a patch of element solids created between the panels you wish to connect.<br> <br>Constant width adhesive lines are created by defining a line along the panels you wish to join. The line can either be defined manually by clicking on the screen or through automatic methods, similar to automatic spotwelding. Patches of adhesive are created by defining areas of shells to use as a source for creating solid elements.<br> <br>Before any adhesive can be created, the part ID that new adhesive solid entities are put in needs to be specified.<br> <br>Various inputs are defined to determine the final adhesive run. These include the width of adhesive, number of solid elements across the width, element length and various inputs to aid the adhesive definition when going round corners. These are explained in more detail below. |
| --- | --- |

#####  Generic adhesive buttons

| ![](../Storage/primer-22-1/primer_links/sect_6/connection/adhesive_2.gif) | The available methods of creation are adhesive line, auto adhesive, free edge, geometry line and patch . These can be selected on the radio buttons on the left. Sketch adhesive is used for sketching the proposed adhesive before creating it. This is particularly useful when creating long runs of adhesive. Modify existing path is used to modify the path points on an existing adhesive run.<br> <br>Break angle controls how the defined path is split into sections. PRIMER will also try to meet the soft aspect ratio for the solid elements created, however this will not prevent creation. If a solid is found to fail the hard aspect ratio for the solids, then that solid will not be created. Note the aspect ratio check does not take into account the through thickness of the solid element, i.e. it is just in-plane aspect ratio.<br> <br>When creating adhesive PRIMER will create all the solid elements it can. Some solid elements may not be possible (for example due to holes in the mesh). PRIMER will skip over these sections and create what it can. Because of this it is useful to use the sketch adhesive button as you are creating the adhesive to see what will be made and what will not.<br> <br>When adhesive line is selected, the undo last point and restart buttons are available. These can be used as you are defining the adhesive path to undo points you have created and to start again. |
| --- | --- |

| ![](../Storage/primer-22-1/primer_links/sect_6/connection/adhesive_3.gif) | The part id for adhesives is the part that the created adhesive solid elements will end up in. This must be defined before adhesive can be created. <br>The width of adhesive is the width across the run of adhesive (not applicable for patch creation method). <br>The number of solids across the width of the adhesive can also be specified on this panel (not applicable for patch creation method). <br>The element length is the desired size of the solid elements along the length of the adhesive path (not applicable for patch creation method). <br>You can also increase the maximum number of layers to join from the default of 2.<br> <br>A PID rule can also be used to define the PID used for the adhesive layer(s). This is documented in the [PID rule](creating-spotwelds.md#PIDrules)section for spotwelds. |
| --- | --- |

#####  Adhesive line creation method

The following example shows how to create a simple run of adhesive using the adhesive line creation method.

| ![](../Storage/primer-22-1/primer_links/sect_6/connection/adhesive_4a.gif) | Say you want to join together two panels with an adhesive run using the adhesive line method. Remember, before you can create adhesive you must choose the part ID you wish the adhesive solids to end up in, and also the shells you wish to connect. You should also set your adhesive width , number across width and element length values. |
| --- | --- |

| ![](../Storage/primer-22-1/primer_links/sect_6/connection/adhesive_4b.gif) | With adhesive line selected, click on the panels you have chosen to join to define points in the run. PRIMER will sketch the points and the line as you go along. |
| --- | --- |

| ![](../Storage/primer-22-1/primer_links/sect_6/connection/adhesive_4c.gif) | Clicking on the sketch adhesive button as you go along will allow you to preview the adhesive before actually creating it. |
| --- | --- |

| ![](../Storage/primer-22-1/primer_links/sect_6/connection/adhesive_4d.gif) | After you are happy with your defined path, clicking Apply will create the solid elements and create the connection entity. The connection entity is drawn as two blobs connected by a path line. The colouring of this connection entity is dependent on connection status and follows the same scheme as spotwelds. |
| --- | --- |

| ![](../Storage/primer-22-1/primer_links/sect_6/connection/adhesive_5.gif) | In the example shown, the width of adhesive has been defined as 20mm. The number of solids across the width has been defined as 2. The element length along the length of the adhesive has been defined as 10mm. |
| --- | --- |

#####  Auto adhesive creation method

Auto adhesive allows the user to automatically create adhesive runs between selected panels. The method works in a similar way to the automatic spotwelding feature described above.

The following additional buttons/inputs are available for auto adhesive creation:

| ![](../Storage/primer-22-1/primer_links/sect_6/connection/adhesive_6.gif) | Min run length : any free edge runs that are less than this amount are discarded.<br> <br>Glue edge dist : distance between the edge of the panel and the edge of the solid elements.<br> <br>Master Part: a master part or a master part set can be used to specify which panel(s) are used to base the auto adhesive on. If specified, only free edges on the master part(s) are used to construct adhesive paths.<br> <br>Without a master part selected, PRIMER will attempt to create adhesive from all free edges on the shells selected for connection. |
| --- | --- |

| ![](../Storage/primer-22-1/primer_links/sect_6/connection/adhesive_7a.gif) | To the left is an example of auto adhesive creation. In this case, the adhesive width is set to 10mm, the number of solids across the width is set to 1 and the element length is set to 10mm. The glue edge distance is set to 1mm, and the front part (red part) is set as the master part , meaning it is the part used to determine free edges and hence adhesive runs. |
| --- | --- |

| ![](../Storage/primer-22-1/primer_links/sect_6/connection/adhesive_7b.gif) | After setting the desired parameters, the sketch adhesive button can be used to preview the adhesive that PRIMER will create. The user can now change any of their inputs now and re-sketch the adhesive until they are happy with what will be created. |
| --- | --- |

| ![](../Storage/primer-22-1/primer_links/sect_6/connection/adhesive_7c.gif) | Clicking Apply will now create the adhesive. Note that modify existing path can be used to modify any runs created. |
| --- | --- |

#####  Free edge adhesive creation method

This is similar to the auto-create method in that it is based on free edges, but here the free edges are defined by the user rather than automatically determined by PRIMER .

| ![](../Storage/primer-22-1/primer_links/sect_6/connection/adhesive_10.gif) | The free edge length is defined by clicking on two nodes along the free edge. PRIMER will determine all the nodes along the free edge between the two selected nodes. Adhesive created using this method will follow the free edge. The distance between the edge of the adhesive solids and the free edge can be specified using Glue edge dist . |
| --- | --- |

#####  Geometry line creation method

| ![](../Storage/primer-22-1/primer_links/sect_6/connection/adhesive_12.gif) | The geometry line creation method can be used to create adhesive runs from geometry lines that exist in any model in PRIMER . Use Line split no. to specify how many increments the line is split into when creating the information for the adhesive path. |
| --- | --- |

#####  Patch adhesive creation method

The patch creation method should be used if you want to create adhesive based on an area rather than a constant width line. Source shells are selected and used to project between the panels to create solid elements. The source shells do not need to be in the model you are creating adhesive in, i.e. the source shells can be meshed "ribbons" of adhesive that exist in a separate model.

| ![](../Storage/primer-22-1/primer_links/sect_6/connection/adhesive_13.gif) | The patch creation method can be used to create adhesive from shells that exist in any model in PRIMER . Use Select patch source shells to select the source shells for creating solid adhesive elements. |
| --- | --- |

| ![](../Storage/primer-22-1/primer_links/sect_6/connection/adhesive_14.gif) | In this example we want to create a patch of adhesive covering the flange shown between the red and blue part. The flange is not constant width so the patch method is appropriate. |
| --- | --- |

| ![](../Storage/primer-22-1/primer_links/sect_6/connection/adhesive_15.gif) | Click on Select patch source shells to select the shells along the flange (highlighted in this example). Note in this example the source shells are within the model we are creating adhesive in. The source shells could also be in a separate model, for example if your adhesive information has come direct from CAD and been meshed as shell ribbons. |
| --- | --- |

| ![](../Storage/primer-22-1/primer_links/sect_6/connection/adhesive_16.gif) | Click Apply to create the adhesive patch. The image to the left shows the created solids with the red part blanked. As with other connection types, a PRIMER connection entity has been created as well as the solid elements. The colour of this connection entity gives the status of the connection entity (for example an orange colour means the solids are not tied to the surface). The existence of the connection entity means the adhesive patch can be easily modified/reprojected in the connections table. |
| --- | --- |

| ![](../Storage/primer-22-1/primer_links/sect_6/connection/adhesive_17.gif) | A close-up showing the solids created between the panels. |
| --- | --- |

#####  Patch adhesive generated from solids

![](../Storage/primer-22-1/primer_links/sect_6/connection/patch_adhesive_create_options.PNG)

Using 'Select patch source solids' patch adhesive may now be created directly from solid parts by selecting relevant segments on the face.

The object menu allows removal of segments by screen area, etc. The current selected segments are plotted using thick lines.

![](../Storage/primer-22-1/primer_links/sect_6/connection/patch_adhesive_segments.PNG)

When creating adhesive, the default is to use a quad biased grid from which the adhesive is extruded. The should give better quality adhesive by reducing the number of trias.

The option is retained to extrude directly from the the mesh, which may be preferred for hexa meshes.

These options are also available for adhesive from shells.

![](../Storage/primer-22-1/primer_links/sect_6/connection/patch_quad_biased.PNG)

![](../Storage/primer-22-1/primer_links/sect_6/connection/patch_non_quad_biased.PNG)

When 'Mesh size for adhesive patch' is turned ON, PRIMER will use the mesh size provided by the user for creating the adhesive. Default is 5. If OFF, PRIMER will use the average size.

![](../Storage/primer-22-1/creating-adhesive-2022-12-09.png)

For existing connections, the 'Patch Quad Bias' setting may be set/unset on the connection table (under 'Settings Saved').

When the adhesive patch info is subsequently modified and the connection remade, this will apply. Note - simply remaking the connection will use the existing grid.

![](../Storage/primer-22-1/primer_links/sect_6/connection/patch_option_on_table.PNG)

#####  Modifying the adhesive path

The path of an adhesive line can be modified by clicking on the Modify existing path button in the create panel. The path can also be modified in the same way through the connections table (see [Modifying Connection Data](modifying-connection-data.md#modifyconnectionadhesivedata)). After clicking the button, you select the adhesive you wish to modify, and the following panel will appear.

![](../Storage/primer-22-1/primer_links/sect_6/connection/adhesive_8.gif)

The path modification panel displays the adhesive path information. The coordinates of the start and end points are displayed, as well as the in-between path points. Through this panel it is possible to carry out the following functions:

* Add or remove path points to the adhesive run.
* Modify the position of point on the adhesive path, either by typing in new coordinates or by clicking on the screen.
* Setting any of the existing path points to a new start or end point.
* Splitting the path at any point along the adhesive run with a defined gap.

To demonstrate some of these features, take the following example:

![](../Storage/primer-22-1/primer_links/sect_6/connection/adhesive_9a.gif)

The above example shows a typical adhesive run. Clicking Sketch in the modify path panel will sketch the path points with numbers next to the points corresponding to the numbers shown on the panel. Note, you can return to the original path data by clicking on Reset (must be done before clicking on Apply ).

![](../Storage/primer-22-1/primer_links/sect_6/connection/adhesive_9b.gif)

By clicking the red X button next to any of the points, that point will be removed. Clicking Apply will remake the adhesive run without that point. The image above shows the 3rd point removed. Similarly a point can be added by clicking on the green + button next to any of the points. This will create a new point after the point you clicked on. You can then select the position of the point by either typing in the coordinates or by clicking on Pick next to the new point, and then choosing a point on the mesh.

![](../Storage/primer-22-1/primer_links/sect_6/connection/adhesive_9c.gif)

You can modify an existing point either typing in the coordinates or by clicking on the Pick button next to the point, and then choosing a point on the mesh.

![](../Storage/primer-22-1/primer_links/sect_6/connection/adhesive_9d.gif)

You can set any of the path points to the new start or end points by using the appropriate Start or End buttons next to the path point in the panel.

![](../Storage/primer-22-1/primer_links/sect_6/connection/adhesive_9e.gif)

You can split the adhesive path by clicking on the Split button on the adhesive path panel, and then clicking on a node on the adhesive run. PRIMER will split the path at this point with the gap specified in the adhesive path panel. Note that this operation cannot be undone. After the split, the path information retained on the path panel is for the first of the two resulting adhesive runs.

[Previous](creating-bolts.md)  |  [Next](creating-spotweld-lines.md)