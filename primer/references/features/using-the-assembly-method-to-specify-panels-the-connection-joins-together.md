####  Using the Assembly Method to Specify Panels the Connection Joins Together

As an alternative to the standard method (connections refer to parts or groups of parts for each layer) the assembly method can be used to specify one assembly of parts that the connection uses to determine which panels it connects. In this case the layer information in automatically modified/changes when the connections are remade, and PRIMER will just use shells within the specified assembly within the vicinity of the connection location to determine what it connects to. To switch connection to the assembly method, specify

Changing the action for connections

| The current action for the connections table is shown in the Action field. | ![](../Storage/primer-22-1/primer_links/sect_6/connection/connection_table11.gif) |
| --- | --- |

| Right clicking on the button will show the possible actions (shown on the right). The available options are:<br> <ul> <li> <span class="buttontext">update connection data </span>. The connection is updated with the current values in the table. </li> <li> <span class="buttontext">update &amp; remake </span>. The connection is updated with the current values in the table and then remade. </li> <li> <span class="buttontext">update and remake with repos </span>. The same as above, but the connection entity is created at the average position of the nodes associated with the connection. </li> <li> <span class="buttontext">update and remake swap layers </span>. The same as &quot;update and remake&quot;, but the layer order is reversed. This is useful for material types where the orientation of a solid element within a spotweld is important. </li> <li> <span class="buttontext">sketch (with FE entities) </span>. The connection is sketched. </li> <li> <span class="buttontext">show connection and panels </span>. Everything apart from the selected connection(s) and associated panels will be blanked. </li> <li> <span class="buttontext">Show entire weld seam </span>. All connections that use the same layers are shown. </li> <li> <span class="buttontext">delete connection </span>. The connections are deleted. This gives the option to delete both the connection itself and the FE entities, or just the connection itself, leaving the FE entities unchanged. </li> <li> <span class="buttontext">empty (delete FE entities only) </span>. The FE entities that make the connection are deleted but the connection definition is left &#39;latent&#39; </li> <li> <span class="buttontext">update &amp; write to file </span>. The connection is updated with the current values in the table and then written to file </li> <li> <span class="buttontext">convert-&gt;beamless MIG weld. </span>Converts the connection to a beamless MIG weld. </li> <li> <span class="buttontext">merge spotwelds </span>. Merges spotwelds that are close to each other. For example two 2T welds can be converted to a 3T </li> <li> <span class="buttontext">select MIG line </span>. Select all MIG welds in a line with currently selected MIG welds. </li> </ul> <br>Additionally there are options for controlling which include file the connection entity and the FE entities are in. | ![](../Storage/primer-22-1/primer_links/sect_6/connection/connection_table12.gif) |
| --- | --- |

#####  Converting MIG weld to beamless

PRIMER supports a [MIG beam weld](creating-spotwelds.md#spotelemtype)which is meshed to a shell on one side and tied using spotweld contact on the other. If weld failure is not an issue, users may prefer to model this weld simply using \*CONTACT\_TIED\_SHELL\_EDGE\_TO\_SURFACE\_BEAM\_OFFSET with a node set on the SURFA side.

The function convert -&gt; beamless MIG weld can be applied to a selection of conventional beam MIG welds (their status may be REALIZED or INVALID).

![](../Storage/primer-22-1/primer_links/sect_6/connection/mig_1.gif)

You may create a new \_OFFSET contact, add nodes to node set of an existing one which is suitable (if any is found) or just dump the nodes to a set for sorting out later.

![](../Storage/primer-22-1/primer_links/sect_6/connection/mig_contact_opt.gif)

If the nodes are found not to tie because they are too far away you can run INCREASE SFMT TO FIX which will thicken the SURFB side of the contact iteratively until all nodes are tied.

![](../Storage/primer-22-1/primer_links/sect_6/connection/mig_sfmt.gif)

The contact alone then provides connectivity between the panels.

![](../Storage/primer-22-1/primer_links/sect_6/connection/mig_2.gif)

If PRIMER fails to tie all nodes, you will get the following error message.

![](../Storage/primer-22-1/primer_links/sect_6/connection/mig_4.gif)

The connections that failed to convert are left with **NOT TIED** error and **invalid** status (denoted by orange colour).

![](../Storage/primer-22-1/primer_links/sect_6/connection/mig_5.gif)

You can use update & remake to reform these as conventional beam MIG welds. Alternately, you may be able to get them tie by adjusting parameters on the tied contact which control the search depth, such as MAXPAR. Such tuning is beyond the scope of this function.

![](../Storage/primer-22-1/primer_links/sect_6/connection/mig_6.gif)

#####  Merging spotwelds

The action merge spotwelds provides an alternate method to deletion for dealing with [conflicting welds](checking-connections.md#conflict). The function uses parameter min dist between connections if it is non-zero ([see settings](other-options-used-when-checkingcreating-connections.md#otheroptions)). Two or more spotweld connections may be selected on the table and the action applied. PRIMER will then calculate the average position of the selected welds. To proceed the function requires that

* all welds are within min dist between connections of the average position (if set to zero this restriction is ignored)
* all welds must share at least one layer with another selected weld
* all welds must have the same sub-type, PID and diameter

PRIMER will then attempt to make a weld at the average position which connects all the layers involved. If this is successful the old welds will be deleted, if it fails they should be left unchanged.

![](../Storage/primer-22-1/primer_links/sect_6/connection/merge_1.gif)

![](../Storage/primer-22-1/primer_links/sect_6/connection/merge_2.gif)

#####  Modifying the include (layer) of connections and their FE

* Con & FE to include of layer 1 - move connections and FE into layer of first found part in layer definition 1
* FE into same include as FE - move all FE of connection into layer of primer FE element
* FE into include of connection - move all FE into same layer as connection itself
* Connection into include of FE - move connection (and FE) into same layer as primary FE element
* bolt to parent layer - if all connected shells in same layer, move connection and all FE into that layer. If in different layers, move rigid shells/parts/materials to same layer as overlaid parent shells, nut connection/master part/C\_RBOD/NRBC remain unmoved
* Con & FE to current layer - move connection and all FE into current layer

Primary element in this context means first found beam/solid for spotweld, NRBC or master part for bolt.

[Previous](deleting-a-layer-from-a-connection.md)  |  [Next](applyingundoing-connection-action.md)