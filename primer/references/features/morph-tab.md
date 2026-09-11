####  Morph Tab

The Morph tab is used to deform mesh, contained within morph boxes, by changing the positions of morph points. Morph points can be selected individually or as part of a group via a drag handle (blue crosses). Hovering over a drag handle highlights the morph points that will be selected. Dragging a handle will result in the same nodal coordinates as applying the same vector to each affected morph point individually.

The buttons under Handles to move are used to toggle what can be selected/dragged when morphing:

* Points : This toggles individual morph point selection. Corner morph points are drawn as little green cubes, all other morph points are drawn as solid green diamonds.
* Edge : This toggles edge handle selection/dragging. Edge handles are positioned in the middle of an edge segment between two adjacent morph points. Visibility of these handles is also controlled with the Edge button.
* Face : This toggles face handle selection/dragging. Face handles are positioned in the middle of a rectangle of four adjacent morph points (a face in the case of a 2 by 2 by 2 box). Visibility of these handles is also controlled with the Face button.

By default, edge and face handles are turned off for high order morph boxes, though they can be manually toggled back on.

There are two different methods of selecting drag handles:

* Interactive : allows picking/dragging of just one handle/point at a time.
* Selection : allows picking of multiple handles/points, either by area or one at a time. Clicking Drag allows the selection to then be dragged by the same vector. Specific handles/points can be deselected by right-click, the middle mouse button will undo the last pick (both only when Select is pressed). The whole selection can be cleared by clicking Reset .

 ![](../Storage/primer-22-1/primer_links/sect_6/mesh_morphing/mesh_morphing_morphing_tab.png)
 
PRIMER allows you to morph in any direction in either the global coordinate system or a user-defined local coordinate system (the methods of defining a local coordinate system are the same as when creating a morph box). However, you can limit the allowed directions of dragging with the following buttons:

* X : drag along X direction of the selected coordinate system.
* Y : drag along Y direction of the selected coordinate system.
* Z : drag along Z direction of the selected coordinate system.
* FREE : drag in any direction in the plane of view.
* MOUSE : drag along X, Y or Z directions in the selected coordinate system - using the left mouse button for X, the middle mouse button for Y, and the right mouse button for Z.

When dragging morph points, the Offset vector text box dynamically shows the vector by which the morph points have been moved. The vector is shown in either global or user-defined local coordinates, depending on the setting for the dragging. It is also possible to type a vector (with its components separated by spaces) into this text box to move the selected morph points by that given vector.

If the last morphing operation was undesired clicking Undo will revert the operation.

The Morph point options section of the panel offers buttons to control the visibility of morph points. Toggling Corner , Edge , Face or Internal will switch the visibility of these types of morph points on/off. The latter three types of points are only present in high order boxes - by default the internal morph points are not drawn. These morph point types should not be confused with the types of drag handles at the midpoints of edges and faces controlling several morph points at the same time.

When dragging or applying an offset vector to selected morph points on a high order box, the movements of unselected morph points on the same box(es) can be interpolated in the following ways:

* No interpolation : Only the selected morph points move as you drag, and all other morph points remain stationary.
* Hidden points only : The selected morph points move by the drag/offset vector, the other visible morph points remain where they are. Morph points whose type visibilities are off are interpolated, therefore the interpolation depends on the visibility switches of morph point types. For example: when corner, edge and face points are visible, but internal points are not visible; then only the movement of internal points will be interpolated. While dragging, you will not see the interpolated morph points moving. This behaviour is motivated by the situation when all visible morph points on a box are selected and moved by the same vector, in which case it will ensure that the contents of the morph box will translate by that vector without the invisible (usually internal) morph points staying behind.
* Full interpolation : As with Hidden points only , however the movement of visible morph points is also interpolated.

Different settings for how the interpolations are calculated can be found on the Program options panel, which can also be accessed with the Advanced options button at the top of the Morphing panel.

It is also possible for connections to be moved along with the mesh inside a morph box. If the Morph Connections tick box is checked (default option) PRIMER will automatically detect all connections that are attached to the mesh which is being morphed and move them accordingly. The nodes associated with the connections (e.g. that form the solid elements of an adhesive, or the rings of a HAZ weld) will also be added to the morph box, or updated if already added, such that the connection FE entities may also be morphed. These connections are not written in the \*MORPH\_BOX keyword and hence morph boxes will not remember them across PRIMER sessions. However, they are remembered within a session. Therefore, if one of these connections becomes unattached (e.g. as a result of a failed remake) it can still be affected by a morphing operation.

The automatic discovery and update of connection information within morph boxes can be turned on or off using the Automatically search for connections setting, found in the Program options panel. This option can also be set using the preference primer\*morph\_find\_new\_connections\_automatically. If the the setting is turned off discovery and update of connection information can be manually triggered with the Find new connections buttons - this can either be done for all morph boxes in all models by clicking All Boxes or a selection of morph boxes by clicking Sel Boxes. A morph box-connection information update will always occur after switching to the Morph tab within the morphing panel. Turning off the automatic search could be useful when working with a large model with many connections and many morph boxes, as the search for connections can take a while in these cases - the automatic search will occur at the start of a morphing operation if some connections have been altered/created since the last search, whereas turning off the automatic search allows the user to determine whether these alterations/new connections affect the morph box(es) that are to be operated on.

When a connection has been altered by a morph box the Remake and Table buttons become available. Clicking Remake will attempt to remake all morphed connections and present any connections that failed to remake in the Connections Table . Clicking Table will present all currently morphed connections in the Connections Table . It is worth noting that these operations act on all active models.

Notes on morphing connections:

* Only connection points that lie within the morph box will be altered, as shown in the images of an adhesive line below.
* So as to account for any manual changes made to a morphed connection, the parametric coordinates for a connection are sometimes re-calculated at the start of a morphing operation (if Automatically search for connections is turned on). If the morph box has been excessively deformed PRIMER may fail to calculate these parametric coordinates. As a result, these points will appear to be 'left behind' when morphing. If this occurs a warning message will be printed in the dialogue box.
* When remaking a HAZ weld, sections of the old mesh are deleted and new nodes and shells are created. If this HAZ weld is 'known' to a morph box, PRIMER will check if these new nodes lie within the morph box and, if so, will add them to the morph box. As above, if the morph box has been excessively deformed PRIMER may fail to calculate the parametric coordinates of these nodes. In this case, these nodes will not be added to the morph box and a warning message will be printed in the dialogue box.
* If morphing interactively after running a PRIMER JavaScript, ensure that ApplyMorphing() is called for all relevant morph boxes after moving any morph points. Otherwise, connections (and their associated FE) may be prone to shifting unexpectedly.

![](../Storage/primer-22-1/primer_links/sect_6/mesh_morphing/mesh_morphing_partial_connection_1.png) ![](../Storage/primer-22-1/primer_links/sect_6/mesh_morphing/mesh_morphing_partial_connection_2.png)

[Previous](create-tab.md)  |  [Next](utilities-tab-meshing.md)