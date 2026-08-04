####  Creating Spotwelds

![](../Storage/primer-22-1/creating-spotwelds/creating-spotwelds-2024-10-18.png)

Before any connections can be created the user should specify

1. [The spotweld element type](creating-spotwelds.md#spotelemtype)
2. [A part to put the spotweld elements in.](creating-spotwelds.md#choosepart)
3. Spotweld diameter for solid welds

When these steps are done you can start creating spotwelds. You can make a spotweld by either:

* Typing in the [X, Y, Z coordinates](creating-spotwelds.md#coordinates). The spotweld will be created at this point.
* Picking an arbitrary [screen point](creating-spotwelds.md#screenpoint). This does not have to be a location of a node. The spotweld will be created at this point using the element found under the pick.
* Picking a [connection](creating-spotwelds.md#spotconnection) from the model. The spotweld will be created at the connection location.
* Picking a [single node](creating-spotwelds.md#node) from the model. The spotweld will be made at the node location.
* Picking a minimum of 2 screen points to create a line. Spotwelds will be created on this line. The number of spotwelds can be defined by number or pitch
* Using a [node set](creating-spotwelds.md#nodeset). The default behavior is now to replace each \*Constrained weld which uses any nodes of the set. Previous method of making a spotweld at each node is still available.
* [automatically detecting flanges and creating welds](creating-spotwelds.md#autoweld).
* Selecting [geometry points](creating-spotwelds.md#geometrypoints) that exist in any model read into PRIMER .

There are various [options](connection-options.md#options)that can be set to control how spotwelds are made.

PRIMER v14 added the ability to remesh panels around spotwelds. This can be used to represent heat affected zones around welds more accurately. The Remesh options control this. If you want the spotweld connection to remesh panels then select the checkbox. Pressing Options sets the options for how the remshing is done. See the [Spotweld remeshing](creating-spotwelds.md#spotweld_remeshing)section for more details. In this case only shells should be selected.

PRIMER v15 added the ability to give different PIDs for beams/solids between each layer of the spotweld instead of using the same PID using 'rules'. The PID rule option controls this. See the [PID rule](creating-spotwelds.md#PIDrules)section for more details.

#####  Choosing the spotweld element type

First, the type of spotweld connection must be defined. Spotwelds can either be beams or solid elements.

![](../Storage/primer-22-1/primer_links/sect_6/connection/weld_type.gif)

To create spotweld connections, PRIMER offers the following options. Note rivet creation is included here.

![](../Storage/primer-22-1/primer_links/sect_6/connection/elemtype_popup.png)

| The Beam and Hexa options allow you to create mesh independent spotwelds using a single beam, a single solid or multiple solids between panels. The image on the right shows examples of Beam, Hexa, 4 Hexa and 8 Hexa welds. | ![](../Storage/primer-22-1/primer_links/sect_6/connection/weld_types.png) |
| --- | --- |

If one of the solid Hexa element options is selected, the spotweld nugget diameter can be modified.

For beam type, the value from the \*SECTION is displayed but cannot be edited.

![](../Storage/primer-22-1/creating-spotwelds/creating-spotwelds-2024-10-18-2.png)

| The MIG (beam) option allows you to create a beam to represent a portion of a MIG weld. Typically many of these connections would represent a MIG weld seam. The beam is meshed in (shares a node with the shell) at one end (the blue part in the figure).The other end of the beam is projected onto the other panel and is mesh-independant (like the normal beam weld).<br> <br>Also see [converting MIG weld to beamless](using-the-assembly-method-to-specify-panels-the-connection-joins-together.md#beamless_mig). | ![](../Storage/primer-22-1/primer_links/sect_6/connection/mig_weld.png) |
| --- | --- |

| Choosing a part for the spotweld elements  <br>PRIMER needs to know which part to put the spotweld elements into. If there is only one part in the model that is suitable (i.e. for beams if the part uses material \*MAT\_SPOTWELD and section type \*SECTION\_BEAM , or for solids if the part uses material \*MAT\_SPOTWELD ) then PRIMER will automatically select it. Otherwise you will have to select it. |
| --- |

![](../Storage/primer-22-1/primer_links/sect_6/connection/weld_2a.gif)

To select a part type in the part number, or you can use the standard popup functions (right click) to select or create the part. Generally, the part **must** use material type \*MAT\_SPOTWELD (material 100). It is possible to specify other valid material types by setting the following preference:

additional\_valid\_spotweld\_material\_types: 196, 240

In the above example, the preference is set to allow MAT\_196 and MAT\_240 as valid material types to used for spotwelds along with MAT\_100.

When using MAT\_100, if the spotwelds are defined as beam element, the part **must** use a section type \*SECTION\_BEAM type 9.

Once the part has been selected or created the part number will be displayed in the box:

![](../Storage/primer-22-1/primer_links/sect_6/connection/weld_2b.gif)

Note that when creating spotwelds, one part is used for all beams/solids created. After the connection has been created, you can modify the part to be different between layers on the [connections table](connection-table.md). So, for example for a 3T weld, the beam/solids between layer 1 and layer 2 can reference a different part to the solids between layer 2 and layer 3.

#####  PID rules

By default PRIMER uses a single part for all of the beams/solids created for a spotweld. However you may want to give different PIDs for some of the beams/solids when joining panels of different thicknesses and/or different material properties to give different spotweld properties. In versions prior to version 15, once the weld had been created, the PIDs could be changed for each layer by using the [Parts columns](available-table-columns.md#table_column_parts)in the [connection table](connection-table.md#modifying).

In version 15 PRIMER added the ability to use a PID rule when creating the spotweld to set the PID for each layer of the weld. This is similar to the [connection rules](creating-spotwelds.md#spotweld_remeshing_connection_rule)used in [spotweld remeshing](creating-spotwelds.md#spotweld_remeshing). As well as specifying a default Part ID to use for the spotweld you can also specify a PID rule to use. In the image below the PID rule example\_fepid.js has been used.

![](../Storage/primer-22-1/primer_links/sect_6/connection/spotwelds_create_pid_rule.png)

A PID rule is a special JavaScript which PRIMER runs for each pair of layers when creating the spotweld. For example if a spotweld connects two panels together the rule will be run once, if it connects three panels together the rule will be run twice.

Each time the rule is run it is passed information about the spotweld and it can return the PID to use for the beam/solids. This means that a different PID can be used for layer if required.

PRIMER will look for PID rules in the directories

$OA\_ADMIN/primer\_library/connection\_rules 
$OA\_INSTALL/primer\_library/connection\_rules 
$OA\_HOME/primer\_library/connection\_rules

There are several example PID rule files that are distributed with PRIMER to help understand how they work:

| example\_by\_nlayer.js | This example remesh rule sets the PID for rings around the spotweld depending on how many layers the connections has. |
| --- | --- |
| example\_by\_pid.js | This example remesh rule adds 1000 to the PID for rings around the spotweld. |
| example\_by\_thickness.js | This example remesh rule sets the PID for rings around the spotweld depending on the thickness of the panel being welded. |
| example\_fepid.js | This example rule sets the PID to 1000 + the layer number. <br>e.g. if the spotweld connects three panels together the rule will return PID 1000 for the beams/solids between the first pair of panels and 1001 for the beams/solids between the second pair of panels. |

Each time the rule is run it can specify the PID to return using the special function Conx.SetRuleFEPID(). If the PID is not set then the default PID from the creation panel will be used.

The data for the connection is passed to the rule using the arguments array. The data is:

| arguments[0] | The absolute name of the connection rule |
| --- | --- |
| arguments[1] | Model object for the model that the connection is being made in |
| arguments[2] | An object containing the remeshing data |

The remeshing data object contains the following properties

| **Property** | **Description** |
| --- | --- |
| label | Connection label |
| type | Connection type (Conx.SPOTWELD, Conx.ADHESIVE or Conx.SPOTWELD\_LINE) |
| subtype | Connection subtype (Conx.SPOTWELD\_BEAM, Conx.SPOTWELD\_SOLID1, ADHESIVE\_SOLID etc) |
| nlayers | How many layers the connection has |
| nrings | How many rings the connection has [if remeshing] |
| coords | The coordinates of the connection (array of length 3) |
| layer | The layer we want to specify the PID for |
| pid | Array of layer parts (length nlayers) |
| mid | Array of layer materials(length nlayers) |
| thickness | Array of layer thicknesses (length nlayers) |
| weldpid | Array of spotweld parts (usually only 1) |
| weldmid | Array of spotweld materials (usually only 1) |
| remesh | false as script not called as remesh rule |
| fepid | true as script called as a FE PID rule |

so, for example, the script can get the data using:


```
var rule  = arguments[0];		// The name of the rule
var model = arguments[1];		// The model the connection is being made in
var data  = arguments[2];		// The remeshing data
```


The layer would then be available as


```
data.layer

```
 For a simple example of a rule, the example rule example\_fepid.js sets the PID to 1000 + layer 
```
if (data.fepid)
{
// Add 1000 on to layer ID
    Conx.SetRuleFEPID(1000 + data.layer);
}
```


Once the PID rule is run and PIDs are assigned for the different layers they are automatically assigned to the PID (L2-L3), PID (L3-L4) fields for the connection. These can be viewed and changed by using the [Parts columns](available-table-columns.md#table_column_parts)in the [connection table](connection-table.md#modifying).
 
##### Using coordinates

| ![](../Storage/primer-22-1/primer_links/sect_6/connection/weld_4.gif) | Type the X, Y, Z coordinates into the box and press the APPLY button. The spotweld will be created if it is possible. If the weld cannot be made an error message in the dialogue box will give the reason why. You can undo the spotweld if it is not what you want by pressing UNDO CREATE . |
| --- | --- |

##### Using a screen point

| ![](../Storage/primer-22-1/primer_links/sect_6/connection/weld_101.gif) | Using the cursor, select a point on the screen at which you wish the spotweld to be created. The spotweld will be automatically created at the point selected. |
| --- | --- |

#####  Using a connection

| ![](../Storage/primer-22-1/primer_links/sect_6/connection/weld_connect1.gif) | If quick create is turned on, you can just pick an existing connection from the screen. The spotweld will be created if it is possible. If the weld cannot be made an error message in the dialogue box will give the reason why. You can undo the spotweld if it is not what you want by pressing UNDO CREATE . |
| --- | --- |

If a spotweld or bolt is already defined for the selected connection, you can substitute this existing element with the new spotweld by selecting the Delete old connection option

| ![](../Storage/primer-22-1/primer_links/sect_6/connection/weld_connect2.gif) | If quick create is turned off, you can type the connection number into the box or use the normal popup functions to select a connection. |
| --- | --- |

| ![](../Storage/primer-22-1/primer_links/sect_6/connection/weld_connect3.gif) | Once the connection has been selected the spotweld can be created by pressing the APPLY button. You can undo the spotweld if it is not what you want by pressing UNDO CREATE. |
| --- | --- |

#####  Using a node

| ![](../Storage/primer-22-1/primer_links/sect_6/connection/weld_5.gif) | If quick create is turned on you can just pick a node from the screen. The spotweld will be created if it is possible. If the weld cannot be made an error message in the dialogue box will give the reason why. You can undo the spotweld if it is not what you want by pressing UNDO CREATE . If quick create is turned off you can type the node number into the box or use the normal popup functions to create or select a node. |
| --- | --- |

| ![](../Storage/primer-22-1/primer_links/sect_6/connection/weld_9.gif) | Once the node has been selected or created the spotweld can be created by pressing the APPLY button. You can undo the spotweld if it is not what you want by pressing UNDO CREATE . |
| --- | --- |

![](../Storage/primer-22-1/primer_links/sect_6/connection/weld_10.gif)

#####  Using a node set

| ![](../Storage/primer-22-1/primer_links/sect_6/connection/weld11a.gif) | The "Replace \*Constrained" option is designed to replace with a spotweld every \*CONSTRAINED\_SPOTWELD or \*CONSTRAINED\_GENERALIZED\_WELD which has at least one node in the selected set. The spotweld will be created between panels selected for welding. NOTE - this may not be all the panels which the old weld joined if the original shell selection was incomplete. In this case the connection table will be invoked for these welds.<br> <br>The old option "weld every node in set" is still available. In this mode PRIMER will attempt to create a spotweld at every node in the set and dump to a node set any nodes where the weld could not be made. |
| --- | --- |

#####  Using a line of welds

| ![](../Storage/primer-22-1/primer_links/sect_6/connection/weld_102.gif) | Using the cursor, select 2 or more points in order to create a line along which you wish to create spotwelds. For the MIG type spotwelds, this mode works in a different way. Here you select 2 nodes along a free edge/feature line. PRIMER will determine all the nodes along the free edge/feature line between the two nodes chosen. Clicking on Apply after this will create MIG spotwelds at all the nodes along the free edge/feature line between the 2 selected nodes. If you choose the same node twice for this operation, PRIMER will create MIG weld beams for every node around the free edge. |
| --- | --- |

| ![](../Storage/primer-22-1/primer_links/sect_6/connection/weld_103.gif) | By either clicking on the tab or using the available popup function, specify whether the quantity of spotwelds you require is determined by Number or by Pitch . If using number, type the number of spotwelds required along the line in the box. If pitch is required, type the desired distance between spotwelds in the box. Once completed, press the Apply button to create the spotwelds. |
| --- | --- |

#####  Using geometry points

| ![](../Storage/primer-22-1/primer_links/sect_6/connection/weld_105.gif) | Geometry points can be selected from any model in PRIMER . The coordinates of these points are used as the coordinates of the connections to be created. |
| --- | --- |

| Auto Welding  <br>![](../Storage/primer-22-1/primer_links/sect_6/connection/weld_104.gif) |
| --- |

PRIMER has the ability to automatically weld panels together with the only input being the shells to weld and a few user defined parameters, for example:

![](../Storage/primer-22-1/primer_links/sect_6/connection/autoweld08.gif)

The selected shells are searched through, and any shells that are close together are flagged for the 2nd stage of the auto welding process. The second stage takes these shells and highlights any model free edges that belong to the shells - these are called **free edge runs** . Finally, each of these free edge runs are split into sub sections (at feature edges defined by a user defined angle **"sub break angle"** ) and spotwelded at a user defined pitch and distance from the edge. The weld run is centred so there is an equal amount of space at the beginning and end of the weld.

Any welds that are too close together are discarded - eliminating the chance of multiply welded parts.

You can sketch the possible weld points using the Sketch weld positions button; note that this shows all attempted weld points - weld runs that lie on top of one another will no doubt have many weld points unmade because they are too close.

The user defined parameters are as follows:

* Min run length: any free edge runs that are less than this amount are discarded.
* Min sub length: any sub sections that are smaller than this amount are discarded.
* Sub break angle: the angle that determines how the free edge runs are split up.
* Pitch: pitch of the welds
* Weld edge dist: distance to weld in from the free edge run.

A master part or a master part set can be used to specify which panel(s) are used to determine the free edges. If specified, only free edges on the master part(s) are used to construct spotwelds. Without a master part/part set selected, all shells selected for connection are considered when determining free edges.

![](../Storage/primer-22-1/primer_links/sect_6/connection/autoweld09.gif)

The following shows an example of sketching the positions, where the weld runs are shown as green lines (start position), red lines (end position) and black lines (min run lengths). Each possible position on each weld run is sketched as a square. Explanations of the parameters are also shown:

![](../Storage/primer-22-1/primer_links/sect_6/connection/autoweld05.gif)

Sketch weld positions will sketch all the potential weld points PRIMER has calculated to attempt to weld. A green line marks the start of a run, and a red marks the end.

![](../Storage/primer-22-1/primer_links/sect_6/connection/autoweld06.gif)

The following shows an example of the automatic welding, the red dots are the successful 2-panel welds, and the green dots are the 3-panel welds. Even though there were weld runs (and therefore weld points) that were next to each other, the auto weld routine checks for proximity and will not weld any points that are too close to each other.

![](../Storage/primer-22-1/primer_links/sect_6/connection/autoweld07.gif)

The next image shows the result of changing the minimum sub length to create welds on the two short sections at either edge of the magenta panel. On the first image, the sub length isn't enough to allow the sections to be welded, on the second image, the sub length has been reduced so the auto spotwelder allows these welds:

![](../Storage/primer-22-1/primer_links/sect_6/connection/autoweld03.gif)

![](../Storage/primer-22-1/primer_links/sect_6/connection/autoweld04.gif)

Note: There are 2 oa\_pref options to control how tolerant the autoweld feature is when checking close welds. They are factors on the spotweld pitch and are used to calculate the distance to check for close welds on nearby seams.

The first is autoweld\_diff\_seam\_proximity (0.5) which is a factor for checking welds on a different seam. The second is autoweld\_same\_seam\_proximity (0.8) which is a factor for checking welds on the same seam.

e.g. distance to check = Pitch \* autoweld\_same\_seam\_proximity

#####  Spotweld remeshing

| Spotweld remeshing is used to remesh the panels that are welded so the spotweld is directly meshed into them. For example the following image shows a normal 4 solid nugget spotweld which is attached using a tied contact. | ![](../Storage/primer-22-1/primer_links/sect_6/connection/spotweld_remesh4.png) |
| --- | --- |

| The image on the right shows the same spotweld connection but using the spotweld remeshing, creating a ring of elements around the weld to represent the heat affected zone. These elements are moved to a different part so the material properties can be different. | ![](../Storage/primer-22-1/primer_links/sect_6/connection/spotweld_remesh5.png) |
| --- | --- |

When creating spotwelds the remeshing is controlled in the Spotweld remeshing options panel.

![](../Storage/primer-22-1/primer_links/sect_6/connection/spotweld_remesh1.png)

PRIMER needs to know how much of the panel to remesh when creating the spotweld. The Diameter to remesh setting is used to control this. If set to zero then PRIMER will automatically choose which elements to remesh, otherwise give a diameter and PRIMER will select any elements that have a node inside that diameter to remesh. The default diameter (if setting is zero) is:

largest ring diameter + (2 x spotweld diameter)

If the number of rings is zero then this is then (3 x spotweld diameter)

The Number of rings setting controls how many rings of elements will be created around the spotweld to represent the heat affected zone. If set to zero no rings will be created. A maximum of 5 rings is allowed. In the image above no rings have been selected so the data for the 5 rings is greyed out. In the image below one ring has been selected so data can be given for that ring. 
The Number of elem / ring setting can only be changed for beam spotwelds. When remeshing around beam spotwelds PRIMER will provide options to create 6, 8, 10, 12, 14, or 16 elements per ring. In the image above it is set to 6 so a hexagonal region will be created. In the image below we are creating a solid spotweld so the option is not available to change but it will indicate how many elements will be used per ring. In this case we are making a 4 solid nugget so the value is 8.

![](../Storage/primer-22-1/primer_links/sect_6/connection/spotweld_remesh2.png)

When remeshing the panel around the spotweld for solid spotwelds PRIMER creates shell elements 'on' the spotweld. For example for a single solid spotweld PRIMER will create a shell on the spotweld for each layer. For a 4 solid nugget PRIMER will create 4 shells for each layer. The part that these are created in is given by Weld PID . If it is zero then PRIMER will use the part ID from the panel being welded.

The diameter of each ring and the PID for the shells creating each ring can then be given. If the PID is zero then PRIMER will use the part ID from the panel being welded.

######  Connection rules

The method decribed above of specifying the number of rings to create and a PID for each ring around the spotweld may be sufficient for modelling basic spotwelds. However, it may be desirable to have much more control of the part IDs created for the spotweld rings. For example different PIDs may be required for joining panels of different thicknesses and/or different material properties.

This can be done in PRIMER by using a connection rule when remeshing the spotweld. Instead of specifying a PID to use for each ring you instead specify a connection rule to use. In the image below the connection rule example\_by\_pid.js has been used.

![](../Storage/primer-22-1/primer_links/sect_6/connection/spotweld_remesh3.png)

A connection rule is a special JavaScript which PRIMER runs for each ring and each layer when remeshing the spotweld. For example if a spotweld connects 2 panels together and three rings have been defined the rule will be run 8 times. 
For each layer (2 layers) the connection is run for each ring ( 3 rings) and also the central weld portion. So it is run 2 x ( 3 + 1) times.

Each time the rule is run it is passed information about the spotweld and it can return the PID and/or the diameter. This means that a different PID can be used for each ring and/or layer if required and the diameter can be different for each layer if required.

PRIMER will look for connection rules in the directories

$OA\_ADMIN/primer\_library/connection\_rules 
$OA\_INSTALL/primer\_library/connection\_rules 
$OA\_HOME/primer\_library/connection\_rules

There are 3 simple example connection rules that have been give out with PRIMER to help understand how they work:

| example\_by\_pid.js | This example rule adds 1000 to the PID for rings around the spotweld <br>e.g. if the spotweld connects parts 100 and 101 the PID for elements in the rings will be 1100 and 110 |
| --- | --- |
| example\_by\_nlayer.js | This example rule sets the PID for rings around the spotweld depending on how many layers the connections has. <br>If there are 2 layers the PID is set to 1000 <br>If there are 3 layers the PID is set to 2000. <br>Additionally for a 3 layer connection if there is one ring the diameter of the ring is changed to be 9mm |
| example\_by\_thickness.js | This example rule sets the PID for rings around the spotweld depending on the thickness of the panel being welded. <br>If the panel is &lt; 0.7mm the PID is increased to 1000 <br>Additionally if there is one ring the diameter of the ring is changed to be 9mm. <br>If the panel being welded is &gt;= 0.7mm then the defaults are used |

Each time the rule is run it can specify the PID to return using the special function Conx.SetRulePID() and the diameter can be changed (if required) using Conx.SetRuleDiameter() . If the PID is not set then the PID from the layer definition will be used. If the diameter is not set then the default diameter given for the ring will be used.

The data for the connection is passed to the rule using the arguments array. The data is:

| arguments[0] | The absolute name of the connection rule |
| --- | --- |
| arguments[1] | Model object for the model that the connection is being made in |
| arguments[2] | An object containing the remeshing data |

The remeshing data object contains the following properties

| **Property** | **Description** |
| --- | --- |
| label | Connection label |
| type | Connection type (Conx.SPOTWELD) |
| subtype | Connection subtype (Conx.SPOTWELD\_BEAM, Conx.SPOTWELD\_SOLID1 etc) |
| nlayers | How many layers the connection has |
| nrings | How many rings the connection has |
| coords | The coordinates of the connection (array of length 3) |
| layer | The layer we are currently running the rule for |
| ring | The ring we are currently running the rule for |
| pid | Array of layer parts (length nlayers) |
| mid | Array of layer materials(length nlayers) |
| thickness | Array of layer thicknesses (length nlayers) |
| ringdiameter | Array of ring diameters (length nrings) |
| weldpid | Array of spotweld parts (usually only 1) |
| weldmid | Array of spotweld materials (usually only 1) |
| remesh | true as script called as remesh rule |
| fepid | false as script not called as a FE PID rule |

so, for example, the script can get the data using:


```
var rule  = arguments[0];		// The name of the rule
var model = arguments[1];		// The model the connection is being made in
var data  = arguments[2];		// The remeshing data
```


The layer and ring would then be available as


```
data.layer
data.ring
```


Taking the above example where a spotweld connects 2 panels together and three rings have been defined the rule will be run 8 times. 
data.layer and data.ring will have the following values for each time the script is run.

| **data.layer** | **data.ring** | **Description** |
| --- | --- | --- |
| 0 | -1 | Central 'spotweld' region on first layer |
| 0 | 0 | First ring on first layer |
| 0 | 1 | Second ring on first layer |
| 0 | 2 | Third ring on first layer |
| 1 | -1 | Central 'spotweld' region on second layer |
| 1 | 0 | First ring on second layer |
| 1 | 1 | Second ring on second layer |
| 1 | 2 | Third ring on second layer |

For a simple example of a rule, the example rule example\_by\_pid.js adds 1000 to the PID for the rings but not the central 'spotweld' portion using


```
// Add 1000 on to PID
if (data.ring != -1)
{
    Conx.SetRulePID(1000 + data.pid[data.layer]);
}

```


[Previous](creating-connections-spotwelds-bolts-adhesive-rivet.md)  |  [Next](creating-rivets.md)