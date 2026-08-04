####  Modifying Connection Data

The table window allows you to easily modify connection data. In the selected table row, right click on the field that you want to change. A popup menu allows you to change the option. Additionally, from all of the columns the following common options are available:

* Update & remake. This will remake any of the selected connection(s).
* Sketch conx. This will sketch the selected connection(s).
* Sketch FE. This will sketch the FE entities relating to the connection.
* Show conx & layer panels. This will blank everything apart from the selected connection(s) and associated layer panels.
* Show conx & attached panels. This will blank everything apart from the selected connection(s) and attached panels.
* Empty conx. Empties the connection of it's FE entities, leaving the connection DORMANT.
* Delete conx. Delete the connection (and optionally the connection FE entities).
* Upd & remake (repos). This will remake any of the selected connection(s), and create the connection entity at the average of the nodal coordinates related to that connection (spotwelds and rigid bolts only).
* Upd & remake (swap). The same as "update and remake", but the layer order is reversed. This is useful for material types where the orientation of a solid element within a spotweld is important..

The popup changes depending on the column. Some examples of connection modifications are given below.

| Modifying connection Type  <br>Right click a field of the Type column and the Change Type popup menu appears:<br> <br>You can then choose between Spotweld or Rigid (Bolt) type connection. | ![](../Storage/primer-22-1/primer_links/sect_6/connection/connection_table4.gif) |
| --- | --- |

| Modifying connection Subtype  <br>Right click a field of the Subtype column and the Change Subtype popup menu appears:<br> <br>If the connection Type is Spotweld , the Change Subtype popup menu looks like this:<br> <br>You can then choose the connection element type among the following options:<br><ul> <li>Single beam element </li> <li>Single hexahedral solid element </li> <li>4 hexahedral solid elements </li> <li>8 hexahedral solid elements </li> <li>12 hexahedral solid elements </li> <li>16 hexahedral solid elements </li> <li>MIG beam elements </li> </ul> | ![](../Storage/primer-22-1/primer_links/sect_6/connection/connection_table5.gif) |
| --- | --- |

| If the connection Type is<br>Bolt , the Change Subtype popup menu looks like this:<br> <br>You can then choose the connection entity type among the following options:<br><ul> <li>Various RIGID_BODY_MERGE types of rigid connection </li> <li>Various NODAL_RIGID_BODY types of rigid connection </li> </ul> <br>For more information on different bolt types, see [Creating Bolts](creating-bolts.md#create_bolts). | ![](../Storage/primer-22-1/primer_links/sect_6/connection/connection_table_5b.gif) |
| --- | --- |

| Modifying connection element Part  <br>Right click a field of the Part ID column and the Change Part popup menu appears:<br> <br>To modify the element Part data, you can type a new part ID in the text box. Alternatively, use Select/Create/Edit to choose a part from the part list, create a new part or edit a new part respectively.<br> <br>If just the Part ID column is used, the part specified is applied to elements created between all layers in the connection. You can also specify different parts between layer pairs. To do this, specify parts for columns PID (L2-L3), PID (L3-L4), etc. in the same way as above. If these columns are used, then the part specified in the Part ID column only applies between layer 1 and layer 2. | ![](../Storage/primer-22-1/primer_links/sect_6/connection/connection_table6.gif) |
| --- | --- |

| Modifying connection coordinates  <br>Right click a field of the P1 columns and the Change coordinate popup menu appears:<br> <br>To modify the connection coordinates, you can type the new coordinates in the text box or pick a node. Alternatively, you can choose the Pick(from shell) option and using the cursor, select a point on a shell where the connection needs to be located. | ![](../Storage/primer-22-1/primer_links/sect_6/connection/connection_table7.gif) |
| --- | --- |

| Modifying connection layers  <br>Right click a field of the Layer columns and the Change Layer popup menu appears:<br> <br>The vast majority of layer definitions will be a single part ID. In this case to modify the layer, you can type a new part ID in the text box or use Select PID which allows you to pick a part or select a part from an object menu. Wildcards are allowed when defining connection layers (Part ID type only) on the connections table. A "?" represents one digit, and a "\*" represents any number of digits. So, a layer part ID of 10?? will reference any shell part in the model with a label between 1000 and 1099. A layer part ID of 10\* will reference any shell part in the model with a label that begins with "10". | ![](../Storage/primer-22-1/primer_links/sect_6/connection/connection_table8.gif) |
| --- | --- |

| However, layers do not have to be defined by part IDs. You can also define layers by:<br><ul> <li class="buttontext">Part IDs </li> <li class="buttontext">Part names </li> <li class="buttontext">CAD names </li> <li class="buttontext">Assemblies </li> <li class="buttontext">Part set IDs </li> <li class="buttontext">Part set names </li> </ul> <br>The Change to... option allows you to change the layer definition to be a different type. Click on the option of your choice and PRIMER will automatically update the connection layer type. For example you may want to use CAD names for the layer definitions instead of part IDs. CAD names means PRIMER will look for any matching CAD name set through the BOM feature. Failing that PRIMER will look at part titles and will look for the CAD name string within the titles. If possible PRIMER will try to change any existing definition to the new type (e.g. if you change the layer definition from Part ID to Part name PRIMER will change the definition if the existing part has a name) | ![](../Storage/primer-22-1/primer_links/sect_6/connection/connection_table9.gif) |
| --- | --- |

| Alternatively, if you press More... a more detailed panel allows you change the layer definition. | ![](../Storage/primer-22-1/primer_links/sect_6/connection/connection_table10.gif) |
| --- | --- |

| Layers can also be defined with multiple parts, part sets etc.. If you press More... to access the detailed layer panel then you can select multiple parts by selecting the Multiple checkbox. In this case you can add/remove multiple items from the layer definition.<br> <br>This is useful in some circumstances. e.g. if you are spotwelding a tailor welded blank then there could be multiple parts that represent the entire panel (as there are different thickness' for each part). If you wanted to make spotwelds involving this then it is much easier to include all of the parts for the layer definition for the blank. If you didn't then the part could vary depending on the position of the weld. | ![](../Storage/primer-22-1/primer_links/sect_6/connection/connection_table10a.gif) |
| --- | --- |

| Modifying connection assembly  <br>A connection can reference one assembly of parts, rather than referring to different parts in different layer. This means you specify one assembly of parts, and PRIMER will create the connection attached to any parts within that assembly in the vicinity of the connection point specified. This method is most suitable for situations where CAD part information is stored in assemblies, and there is one file per assembly containing connection information - i.e. the connection information refers to an assembly rather than specifying individual layers. Right click a field of the assembly type columns and select either Part set or Assembly . Part set means you select a \*SET\_PART definition to specify parts in the assembly. Assembly means you select a PRIMER part tree assembly to specify parts in the assembly. After choosing the type, right click a field of the assembly column to select/modify the part set/part tree assembly containing the parts. | ![](../Storage/primer-22-1/primer_links/sect_6/connection/connection_table19.gif)<br> <br><br><br><br> ![](../Storage/primer-22-1/primer_links/sect_6/connection/connection_table20.gif) |
| --- | --- |

| Modifying connection include  <br>Right click a field of the conx inc columns and the Change conx include popup menu appears:<br> <br>To modify the connection coordinates, click on Change include . The standard include select panel will open. See [INCLUDE File Selection on Edit Panels](include-file-selection-on-edit-panels.md#506includeselectiononeditpanels) for more information on the include selection panel. | ![](../Storage/primer-22-1/primer_links/sect_6/connection/connection_table17.gif) |
| --- | --- |

| Listing the connection FE includes  <br>Right click a field of the FE inc columns and the FE include popup menu appears:<br> <br>This will print a listing to the screen with information regarding which include the various FE entities within the connection are in (nodes, beams etc.). | ![](../Storage/primer-22-1/primer_links/sect_6/connection/connection_table18.gif) |
| --- | --- |

#####  Modifying adhesive data

Adhesive data can be modified on the connection table. Adhesive width, number of elements across the width and adhesive element length can call be modified by right clicking on the field and typing in a new value. The path data can also be modified on the connection table. Under the adhe. Path column, the number shown is the number of path points between the start and end points of the adhesive run. Right clicking on the field and choosing Edit opens up the adhesive path modification panel allowing the user to modify the path data. For more information on the adhesive path modification panel see [Creating Adhesive](creating-adhesive.md#adhesive_modify_path).

![](../Storage/primer-22-1/primer_links/sect_6/connection/connection_table16.gif)

[Previous](changing-the-default-table-columns.md)  |  [Next](selecting-connections.md)