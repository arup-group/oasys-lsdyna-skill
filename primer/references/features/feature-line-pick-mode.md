###  "Feature Line Pick " Mode

![](../Storage/primer-22-1/primer_links/sect_2/images/fig_2_9_1d.png)
This works in exactly the same way as [Feature Line Picking](feature-line-picking.md#feature_angle). 
The purpose of the right click functionality is to permit any of the functions listed below to be applied to selection without having to change the master quick pick mode.

The first menu allows selection of what function is to be applied to left click operations. A summary of these is provided here:

| ![](../Storage/primer-22-1/primer_links/sect_2/images/fig_2_9_2.png) |  | The exact options in this popup menu will vary according to the entity type selected for operations.<br> <br>The example here is for the commonest case of PART |
| --- | --- | --- |

| Blank | Blanks the selected item(s). For more information on Blanking see [BLANKING Controlling Entity Visibility](blanking-controlling-entity-visibility.md#BLANKING) |
| --- | --- |
| Unblank | Unblanks the whole of the selected item(s) (only available for certain types) |
| Only | Blanks everything except the selected item(s) |
| Delete | Delete the selected item(s). There are two options. "Confirm" means you will be asked to confirm the deletion of the entity(s) and associated entity(s), "No confirm" means the deletion will occur without confirmation. |
| Information | Provides a list of the item's properties. (If multiple items are selected only the first is shown.) |
| Label | Labels the item on the screen dynamically, with a choice of attributes selected in the sub-menu |
| Edit | Maps the standard editing panel for the selected item(s). (To a maximum of 20 panels) |
| Keyword | Maps the standard Keyword Editor (see
[The Generic KEYWORD Editing Panel](the-generic-keyword-editing-panel.md#keywordedit)), showing the selected item(s) only. |
| Colour | Sets the colour of the selected item(s) to the one set in the pop-up menu (accessed by &gt;) |
| Transparency | Sets the transparency of the selected item(s) to the value set in the pop-up menu (accessed by &gt;) |
| Plotting Mode | Sets the plotting mode (Shaded, Wireframe, etc) of the selected item(s) to that set in the pop-up menu (accessed by &gt;) |
| Locate in Tree | Highlights the selected part(s) in the part tree. Add selects in addition to any currently selected in the part tree, only selects instead of any existing selection. See<br>[PART TREE](part-tree.md) or more detail on the Part Tree. |
| Part Table | Produces a Part Table for the selected part. See<br>[PART TABLE](part-table.md) for more detail. |
| Sketch | Sketches the selected item and locates cross-hairs at its centre (generally used via Key in &lt;label&gt;) |
| Find | Envoke Find feature for selected item. For more information on Find, see
[FIND AND SKETCH](find-and-sketch.md). |
| Xrefs | Envoke the Xrefs panel for selected item. For more information on Xrefs, see
[XREFS: Cross References Viewer](xrefs-cross-references-viewer.md). |
| Set current layer | Set the current include layer to the include file which the picked item is in. |
| Clipboard | Add, Remove or replace entities to Clipboard. |
| &lt;item&gt; Details | Opens the detailed information panel for that item. |

There are a number of different types of item to which Quick Pick can be applied. The item type to be selected is chosen from the second menu, displayed here below. This selected choice here will affect the options available from the first menu. For example, Part Table is only available when Part is selected as the item type and &lt;item&gt; Details is only available for elements and Nodes.

| ![](../Storage/primer-22-1/primer_links/sect_2/images/qp_entities.png) | This shows the master popup menu of all possible types, and the second level menus under Element, Boundary, etc permit more detailed selection of type.<br> <br><br> <br>A special case is Part picking, which can be too crude at times, especially when attempting to select a beam part from beams in front of 2D or 3D elements, as the latter will always be favoured.<br> <br>Therefore it is possible to restrict PART picking to a specific element sub-type by selecting from the 2nd level popup Part &gt; as shown here.<br> <br>To revert to general part picking use Any part type . |  |
| --- | --- | --- |

Whenever screen picking can be applied for a menu other than Quick Pick (see
[Selecting Entities for Operations](selecting-entities-for-operations.md#selectentities)) the menus in the top option box will be replaced by a box indicating what can be currently screen picked. [Quick Pick](quick-pick-function.md#quickpick) control can be restored either by clicking the white cross in the top left of the graphics area, or from the drop-down in the Quick Pick control.

![](../Storage/primer-22-1/primer_links/sect_2/images/fig_2_9_4.gif)

[Previous](pick-circle-drag-mode.md)  |  [Next](using-parameters-in-edit-panels.md)