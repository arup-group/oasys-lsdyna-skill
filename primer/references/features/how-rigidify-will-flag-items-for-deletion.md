###  How RIGIDIFY Will Flag Items for Deletion

To ensure that the rigidification of the model does not incur errors PRIMER will flag selected items for deletion.

Certain nodal constraints within the rigidified area will require removal, these include joints, constrained welds, boundary prescribed motions, boundary spcs, constrained extra nodes and nodal rigid bodies. In these cases connection to nodes located outside the rigidified area will be retained by the creation of additional constrained extra nodes.

Rigid body merges, where the part to be rigidified is the constrained part, will be removed to avoid clashing with the merge onto the dummy lead part.

Spotweld beams will be flagged for removal where both sides of the weld are rigidified. Where one side of the weld remains deformable, the spotwelds will be retained, but a warning will be issued if the contact is not suitable for rigid parts.

Contacts where all parts have been rigidified will be flagged for removal as they are superfluous.

The user has control over the deletion panel and may choose to leave the offending items. If deletion is aborted, a PRIMER model check may contain errors.

If Simplify and delete is selected, the elements will also be flagged for deletion.

![](../Storage/primer-22-1/primer_links/sect_6/rigidify/rigidify_delete.gif)

[Previous](how-rigidify-will-change-the-model.md)  |  [Next](main-input-seat-belt-anchorage.md)