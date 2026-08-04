####  Other Options Used When Checking/Creating Connections

Some other options are used in the spotwelder. These are found in the Settings... panel. These are separated into spotwelds, bolts, adhesive and labelling.

#####  Spotweld options

![](../Storage/primer-22-1/other-options-used-when-checkingcreating-connections.png)

The **Minimum distance between connections** allows PRIMER to check the pitch between connections. If a panel has 2 connections that are closer than the minimum distance an error will be given. This is very useful to checking for bad weld positions or possible manufacturing problems.

**Max number of panels joined** sets the maximum number of panels that PRIMER will allow to be connected together.

Max warp for solid spotweld sets how distorted solid spotwelds can be before PRIMER refuses to create them.

The use \_PID for beam spotwelds option sets the \_PID option on a beam element when creating a spotweld, and supplies the appropriate part ID's.

When spotweld/glue part A &lt;-&gt; part A is active, PRIMER is able to connection the same part together (useful for parts folded on themselves or clinches).

When spotweld/glue multi part clinch is active, PRIMER is will allow multiple part clinches to be created.

When **Automatically remove missing layer(s) on remake** is active, PRIMER will automatically remove layers that failed to connect when remaking spotwelds.

Consistent area for solid welds is used when making solid welds and ensures that the area is set to pi\*d\*d/4, where d is the diameter. The default is on. If turned off the area is calculated using the pre-version 20.0 algorithm.

Align solid weld to free edge is used to align the solid by checking to see if any free edges are nearby.

Consider feature lines for alignment Consider local feature lines as well as free edges when aligning spotweld a break angle can also be modified to specify the feature line.

Always align flat edge always align a flat edge of a solid spotweld with the closest free edge/feature line.

Ignore inner layers for alignment only consider the outer layers of parts being joined together for alignment i.e. ignore free edges/feature lines on the inner layers.

Alignment search distance Search distance for finding free edges/feature lines near the spotweld.

Reuse old nodes is used when remaking spotwelds - node ID's in the original FE are used again in the new FE.

Show MIG weld as line is a graphics option that displays a line through groupings of MIG welds.

Allow MIG welds to feature line is a setting for allowing MIG welds to connect to a feature line as well as free edges. A break angle is given to specify what constitutes a feature line.

Spotweld line edge search distance is used when a spotweld line connection type is "edge locked" and you wish to re-create the path along a new free edge. This search distance is how far from the start and end points of the path PRIMER will search for a new start and end point on the new free edge.

Spotweld remesh feature line angle (SRFL) is the angle above which defines feature lines during spotweld remeshing.

Preserve corner angle is the minimum angle above which corners at nodes on free edges are preserved during spotweld remeshing. A value of zero would preserve all nodes on free edges; a value of 180 would not preserve any nodes, potentially leading to rounding of corners.

Preserve shells around hole in the HAZ remesh zone is used to preserve elements around hole if too close to a spotweld during spotweld remeshing. You can provide the hole diameter to be preserved in the **Max hole diameter to preserve** textbox.

If **Skip spotweld remesh if the node is on NRB etc.** is turned ON, it will not remesh the spotweld if the nodes close (within the remesh diameter) to the spotweld is on something like a Constrained Nodal Rigid Body, Boundary SPC etc. which will be modified.

Re-Attach nodes in the HAZ remesh zone is used to reattach nodes after spotweld remeshing to preserve Constrained Nodal Rigid Body, Boundary SPC, Initial Load, and Masses etc. You can provide the tolerance value for node merge in **Re-Attach node merge tolerance** textbox.

HAZ mesh reconstruct is used to improve mesh quality by remeshing all the elements around all the selected HAZ spotwelds in the model simultaneously by reducing the number of trias.

HAZ mesh reconstruct element size defines the target size of new reconstructed shells. You can either type in the necessary size in the textbox or set it to zero to use the average size of the selected shells as the target size.

HAZ mesh reconstruct search distance defines how much of the panel to remesh around the spotwelds. By default it is set to 35.

HAZ mesh reconstruct feature line
(HMRFL) tells PRIMER to look for any feature lines in the selected shells that have an angle greater than feature line limit. The shells with feature line greater than the entered value get excluded from the reconstruct operation. The default value is set to 20.

HAZ tria reduction is a second operation to reduce tria density. It loops through all the elements and tries to merge trias to further reduce their number.

HAZ full part replace is used to perform a full part replace to move new elements in the model after mesh reconstruct and tria removal. PRIMER will reapply any cross references, connection etc. from old elements to new remeshed elements. This can be a time intensive process.

HAZ simple element replace is a simpler approach to part replace. It deletes all the old shells/nodes and copies in new mesh shells/nodes. This should be less time intensive.

**Add nodes around spotweld to improve mesh quality:** When ‘Add nodes around spotweld to improve mesh quality’ option is turned ON PRIMER tries to improve the quality of the mesh produced around spotwelds by adding few new nodes around it.

![](../Storage/primer-22-1/other-options-used-when-checkingcreating-connections-2023-01-31.png)

The number of new nodes added per spotweld depends upon the local geometry and the type of spotweld remeshed. For example, in the image below, nodes marked in green and blue have been added by PRIMER using this option.

![](../Storage/primer-22-1/other-options-used-when-checkingcreating-connections-2023-01-19-4.png)

Prerequisites for using this option: Turn '**Always align flat edge**' and '**HAZ mesh reconstruct**' options present in connection creation panel to **ON** as, ‘Add nodes around spotweld to improve mesh quality’ option works along with them.

![](../Storage/primer-22-1/other-options-used-when-checkingcreating-connections-2023-01-31-3.png) ![](../Storage/primer-22-1/other-options-used-when-checkingcreating-connections-2023-01-31-2.png)

Various parameters are associated with this option.

Second feature line angle (SFLA): Having a larger area for remeshing can help in producing a better-quality mesh. SFLA option along with two other feature line options in the spotweld connection creation panel (SRFL and HMRFL – described above) helps in achieving that. For example, the model in the image below has two feature lines: 2° (marked in black) and 20° (marked in blue).

![](../Storage/primer-22-1/other-options-used-when-checkingcreating-connections-2023-01-19-1.png)

If 2° is specified for SRFL and HMRFL options, then we will get small area for remeshing. (Area marked with yellow rectangle).

![](../Storage/primer-22-1/other-options-used-when-checkingcreating-connections-2023-01-19-5.png)

So, to get a larger area user can specify 20° for HMRFL option and 2° for SFLA option. By doing this we will get a larger area for remeshing (area marked in green rectangle) while also preserving the (black) 2° feature line.

![](../Storage/primer-22-1/other-options-used-when-checkingcreating-connections-2023-01-19-6.png)

To summarize, the feature line nearest the spotweld can be preserved by specifying an appropriate angle for the SRFL and SFLA options. (2° in this case).

The feature line up to which the user wishes to perform the remesh should be specified in HMRFL by adding an appropriate angle. (20° in this case).

Note: HMRFL should be greater than SRFL and SFLA. Also SRFL and SFLA should be ideally equal. The algorithm for these three options as explained above is only applicable when the ‘Add nodes around spotweld’ option is turned ON. If ‘Add nodes around spotweld’ option is not turned ON, then SRFL and SFLA have same effects as V19 and previous versions.

Max flange width to skip adding nodes: If distance specified here is less than the ‘d’ (flange width where spotweld is located.) then PRIMER will skip using this option for that spotweld. PRIMER calculates the flange width near each spotweld and if that is greater than the value specified here then it skips using this option for that spotweld. We recommend using ‘Add nodes around spotweld to improve mesh quality’ option for flanges which are less then 20mm wide. The default value is 25mm.

![](../Storage/primer-22-1/other-options-used-when-checkingcreating-connections-2023-01-19-7.png)

**Options for adding new nodes:**There are six options available by which the user can specify how many nodes and at what location around the spotweld they will be added. The below six images shows meshes produced for a 16mm flange for all these six options. Nodes marked in black blobs are the nodes which have been added while using that option. The default is ‘4 nodes both’ as it seems to produce reasonable results for various models.

| 1) 4 nodes both:<br><br>![](../Storage/primer-22-1/other-options-used-when-checkingcreating-connections-2023-01-19-8.png) | 2) 4 nodes only edges:<br><br>![](../Storage/primer-22-1/other-options-used-when-checkingcreating-connections-2023-01-19-9.png) | 3) 4 nodes only middle:<br><br>![](../Storage/primer-22-1/other-options-used-when-checkingcreating-connections-2023-01-19-10.png) |
| --- | --- | --- |
| 4**) 2 nodes both:**<br><br>**![](../Storage/primer-22-1/other-options-used-when-checkingcreating-connections-2023-01-19-11.png)** | **5) 2 nodes only edges:**<br><br>![](../Storage/primer-22-1/other-options-used-when-checkingcreating-connections-2023-01-19-12.png) | **6) 2 nodes only middle:**<br><br>![](../Storage/primer-22-1/other-options-used-when-checkingcreating-connections-2023-01-19-13.png) |

#####  Adhesive
options

##### 

![](../Storage/primer-22-1/other-options-used-when-checkingcreating-connections-2022-11-25-1.png)

Some settings for adhesive are the same as for spotwelds as described above. Adhesive specific options are:

Adhesive percentage check is used when checking adhesive connection types. If the percentage of solid elements created along the path compared to the maximum number possible along its path is less than the percentage value specified, then an error will be given when checking the connection.

Patch adhesive  source angle tolerance is used when projecting shells to create patch adhesive. Switch this on to make the resulting solids align more closely to the source shells.

More information on adhesive settings can be found in the [adhesive creation section](creating-adhesive.md#create_adhesive).

#####  Labelling

![](../Storage/primer-22-1/other-options-used-when-checkingcreating-connections-2022-11-25-2.png)

The label rule for new general items and label rule for new nodes/elems/nsets/nrbs allow you to set what labels are chosen for new entities that are created.

#####  Bolts

For bolts, see the [bolt creation section](creating-bolts.md#bolt_options).

[Previous](angle-tolerance.md)  |  [Next](modifying-spotwelds-and-adhesives-through-lines.md)