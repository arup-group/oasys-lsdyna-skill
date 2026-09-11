###  Part Tree Behaviour

Items can be selected by left-clicking anywhere on their row. Where selecting more than 1 item would be valid you can hold &lt;ctrl&gt; whilst clicking to select multiple items. Alternatively the &lt;click&gt; (start of range) .. &lt;shift&gt;&lt;click&gt; (end of range) method (cf Windows) may be used.

Clicking on the [-] button next to models / include files / assemblies will collapse branches. Collapsed branches will have a [+] button which when clicked will expand the branch.

Right-clicking on an item or a selection of items produces a pop-up menu with the options shown on the right (not all of these options will be available for some selections).

![](../Storage/primer-22-1/part-tree-behaviour/part-tree-behaviour-2024-03-13-1.png)

| Edit | Brings up the standard editing panel for that item |
| --- | --- |
| Delete | Deletes the item |
| Blank | Blanks the item |
| Unblank | Unblanks the item |
| Only | Blanks all other items and unblanks the item |
| Sketch | Sketch the item |
| Colour | Colours the items (or elements associated with the item)as selected |
| Transparency | Sets the transparency the items (or elements associated with the item)as selected |
| Cut parts | Marks the part as those to be moved upon receiving a paste command |
| Part table | Brings up the [Part table](part-table.md)for the selected parts |
| Paste parts | Moves the last cut parts into the selected Include file or assembly |
| Create part set | Create a part set which the currently selected parts as the contents |
| Create part set and link | Available for assemblies. Creates a part set which the currently selected parts as the contents. If the assembly contents are updated, the part set is also updated |
| Information | Display information on the currently selected part |
| Make current layer | Makes the selected include file the current layer into which newly created entities will be put |
| Read Assembly file | Read an assembly file (applies to a model only) |
| Write Assembly file | Write out an assembly file (applies to a model only) |
| Create Assembly | Create an assembly in the the selected model or as a child of the selected assembly |
| Delete Assembly | Remove the assembly (but not the contents) |
| Rename Assembly | Rename the assembly |
| Assembly C of G | Give information on assembly C of G |
| Select parts to add | Opens an object menu to select parts to add to an assembly |
| Make current assembly | Makes the selected assembly the current layer into which newly created entities will be put |
| Clear current assembly | Clears the current assembly (newly created entities will not go into an assembly) |
| Add to Clipboard | Add assembly contents to the clipboard |
| Remove from Clipboard | Remove assembly contents from the clipboard |
| Replace Clipboard | Empty the clipboard contents and replace with assembly contents |
| Flatten all assemblies | Flatten all assemblies in the selected model (confirmation will be required) |
| Edit comments | [Edit the header comments](editing-comments-in-include-files.md#editincludecomments)for a model or include file |
| Rename Include file | Changes an include file name |
| Suspend transformation | Temporarily suspends the transformation on an include transform. This can also be done from the [Include tool](temporarily-suspending-the-transformation-on-an-include-transform.md#suspendtransform). |
| Reinstate transformation | Reinstates the transform on a previously suspended include transform. This can also be done from the [Include tool](temporarily-suspending-the-transformation-on-an-include-transform.md#suspendtransform). |

[Previous](part-tree.md)  |  [Next](part-tree-top-menu-bar.md)