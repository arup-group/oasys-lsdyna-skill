###  Other Selection Methods

In many contexts where an individual item (as opposed to a list) is required PRIMER will use "popup" menus to select things.

| For example the creation of retractor elements requires, among other things, the definition of a central node and a seatbelt element.<br> <br><br>| ![](../Storage/primer-22-1/primer_links/sect_2/selection/fig_6_2j.gif) |<br>| --- |<br><br> <br>As shown here you can type a label into the relevant text entry box, or use the right mouse button to invoke a selection menu which will have the standard options:<br> <br><br>| ![](../Storage/primer-22-1/primer_links/sect_2/selection/fig_6_2l.gif) | These standard options allow you to (screen-) PICK the item directly, or SELECT it from a standard selection as described here. |<br>| --- | --- | |
| --- |

Picking and sketching will only be available for viewable items (for example you can't pick a loadcurve).

The CREATE and EDIT functions will only be available for those items which PRIMER currently has the ability to create/edit.

Given a little thought these concepts are straightforward, but you need to take a little care. For example selecting a **PART** is not the same as selecting all the **ELEMENTS** in that part:

* Deleting by ELEMENT will delete the elements but leave their PART definition intact (if redundant).

* Deleting by PART will delete both elements and the PART definition itself.

(The interaction of hierarchies and deletion is explained further under
[REMOVE](remove-delete-unwanted-model-clean-up-node-merging-and-duplicate-elimination.md).

[Previous](to-delete-all-current-selections-and-start-again.md)  |  [Next](undo.md)