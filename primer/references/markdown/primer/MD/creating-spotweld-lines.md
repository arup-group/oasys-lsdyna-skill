####  Creating Spotweld Lines

Spotweld line entity types are an extension to individual spotwelds where you can create lines of spotwelds which are associated with one connection entity type. This is beneficial as the connection entity can be easily modified to have a different pitch, or to follow a new free edge should the part the connection attaches to be re-meshed.

| The spotweld lines creation panel is shown below. Spotweld lines are defined as a run of beam/solid spotwelds elements created between the panels you wish to connect. <br>Spotweld lines are created by defining a line along the panels you wish to join. The line can either be defined manually by clicking on the screen or through automatic methods, similar to automatic spotwelding.<br> <br>Before any spotweld line can be created, the part ID that new beam/solid entities are put in needs to be specified. If creating solid spotwelds you will also need to specify a diameter (default 5.0).<br> <br>Various inputs can be defined to determine the final spotweld line run. These are explained in more detail below.<br> <br>A PID rule can also be used to define the PID used for the beams/solids created for each layer. This is documented in the [PID rule](creating-spotwelds.md#PIDrules)section for spotwelds.<br> <br>![](../Storage/primer-22-1/creating-spotweld-lines-2022-12-19.png) |
| --- |

#####  Generic Spotweld line buttons

![](../Storage/primer-22-1/primer_links/sect_6/connection/spot_lines_2.png)

The available methods of creation are manual line, free edge and geometry line. These can be selected on the radio buttons on the left. Sketch spot line is used for sketching the proposed spotweld line before creating it.

Modify existing path is used to modify the path points on an existing line of connections.

Break angle controls how the defined path is split into sections. The Pitch input is where you specify the pitch of the spotwelds along the path.

When creating spotweld lines PRIMER will create all the beam/solid spotwelds it can when progressing along the run path. It may not be possible to create some spotwelds along the path (for example due to holes in the mesh).

PRIMER will skip over these sections and create what it can. Because of this it is useful to use the sketch spot line button as you are creating the connection to see what will be made and what will not.

When manual line is selected, the undo last point and restart buttons are available. These can be used as you are defining the path to undo points you have created and to start again.

For information on specifying the part ID for spotwelds, the spotweld element type and diameter, please refer to previous  [Choosing the spotweld element type](creating-spotwelds.md#spotelemtype) section.

#####  Manual line creation method

The following example shows how to create a simple run of spotwelds using the spotweld manual line creation method.

Say you want to join together two panels with an spotweld line run using the manual line method.

Remember, before you can create spotweld lines you must choose the part ID you wish the beams/solids to end up in, and also the shells you wish to connect.

![](../Storage/primer-22-1/primer_links/sect_6/connection/spot_lines_3.png)

With manual line selected, click on the panels you have chosen to join to define points in the run. PRIMER will sketch the points and the line as you go along.

![](../Storage/primer-22-1/primer_links/sect_6/connection/spot_lines_4.png)

Clicking on the sketch spot line button as you go along will allow you to preview the spotwelds before actually creating it.

![](../Storage/primer-22-1/primer_links/sect_6/connection/spot_lines_5.png)

After you are happy with your defined path, clicking Apply will create the beam/solid elements and create the connection entity.

The connection entity is drawn as two blobs connected by a path line.

The colouring of this connection entity is dependent on connection status and follows the same scheme as spotwelds.

![](../Storage/primer-22-1/primer_links/sect_6/connection/spot_lines_6.png)

#####  Free edge Spotweld lines creation method

This method is used to create spotwelds along a free edge, using the free edge to define the path.

The free edge length is defined by clicking on two nodes along the free edge. PRIMER will determine all the nodes along the free edge between the two selected nodes.

Spotwelds created using this method will follow the free edge. The distance between the centre of the spotwelds and the free edge can be specified using Edge dist .

![](../Storage/primer-22-1/primer_links/sect_6/connection/spot_lines_7.png)

##### Free edge / feature line MIG line / Arc-weld line creation 

![](../Storage/primer-22-1/creating-spotweld-lines/creating-spotweld-lines-2024-10-18-3.png)

Lines of MIG beams can be created on free edges or on feature lines if the MIG option is selected

If both start/end nodes are on feature line, this logic is now automatically activated.

![](../Storage/primer-22-1/creating-spotweld-lines/creating-spotweld-lines-2024-10-18.png)

Similarly the ARC-WELD option will give a contact based or NRB connection.

The connection table can be used to convert connections from MIG to ARC-WELD or vice versa.

![](../Storage/primer-22-1/creating-spotweld-lines/creating-spotweld-lines-2024-10-18-1.png)

Creating ARC-WELDs automatically creates \*CONTACT\_TIED\_SHELL\_EDGE\_TO\_SURFACE for each Primer connection.

The contact thickness is automatically created from the geometry.

Parametric search (PARMAX) can be increased via Max contact parmax for ARC welds.

![](../Storage/primer-22-1/creating-spotweld-lines/creating-spotweld-lines-2025-04-17.png)

![](../Storage/primer-22-1/creating-spotweld-lines/creating-spotweld-lines-2024-10-18-2.png)

The default option is to create a contact, but this may be changed to NRB with the Use NRBs for Arc-Weld option.

![](../Storage/primer-22-1/creating-spotweld-lines/creating-spotweld-lines-2024-12-19-2.png)

An existing line weld may be changed from using contacts to NRBs and vice versa using the saved settings on the connection table.

##### ![](../Storage/primer-22-1/creating-spotweld-lines/creating-spotweld-lines-2024-12-19-3.png)

##### Geometry line creation method

The geometry line creation method can be used to create spotweld line runs from geometry lines that exist in any model in PRIMER .

Use Line split no. to specify how many increments the line is split into when creating the information for the spotweld line path.

#####  Modifying the Spotweld line path

The path of a spotweld line run can be modified by clicking on the Modify existing path button in the create panel.

The path can also be modified in the same way through the connections table (see section [6.10.2](modifying-connection-data.md#modifyconnectionadhesivedata)).

After clicking the button, you select the spotweld line connection entity you wish to modify, and the following panel will appear.

![](../Storage/primer-22-1/primer_links/sect_6/connection/adhesive_8.gif)

The path modification panel displays the path information. The coordinates of the start and end points are displayed, as well as the in-between path points. Through this panel it is possible to carry out the following functions:

* Add or remove path points to the spotweld line run.
* Modify the position of point on the spotweld line path, either by typing in new coordinates or by clicking on the screen.
* Setting any of the existing path points to a new start or end point.
* Splitting the path at any point along the spotweld line run with a defined gap.

This panel works in the same way as modifying an adhesive path run. For more information, see [Modifying the adhesive path](creating-adhesive.md#adhesive_modify_path) above.

#####  Connectivity check

Upon exiting the connection create panel, PRIMER will automatically check the connectivity status of all newly created spotwelds and adhesive connections.

This check (on by default) can be turned off on the global settings panel.

![](../Storage/primer-22-1/creating-spotweld-lines/creating-spotweld-lines-2024-10-18-4.png)

##### Options
 
See the [connection options](connection-options.md) section for more information.

![](../Storage/primer-22-1/creating-spotweld-lines/creating-spotweld-lines-2024-10-18-5.png)

[Previous](creating-adhesive.md)  |  [Next](deleting-connections.md)