###  Sub-Model Creation

The find referenced item option (under save as model) described above can be used to create a sub-model but will require the user to make an detailed selection of items and propagation may not give the expected results, e.g. if a contact using part-set is selected, then all parts of the set will be found, not just the ones on the clipboard. Try putting contact on clipboard and pressing propagate selection .

![](../Storage/primer-22-1/primer_links/sect_6/clipboard/subfromparts.gif)

If parts only have been selected
Create sub-model from parts option may work better. This will propagate the selected parts to find sets, contacts, database cross-sections, etc that use those parts but will NOT bring in the unselected parts of those sets (or their elements). Additionally, it will find PRIMER connections on the selected parts and offer to export them to the sub-model. As with find referenced, it will not capture items (such as \*CONTROL) which have no direct reference to the selection.

![](../Storage/primer-22-1/sub-model-creation/sub-model-creation-2024-01-10.png)

Sub-model from visible is a tool which applies deletion and clean-up processes to make a sub-model.

* The entire model is copied to the next free slot
* Pass#1 deletion is applied to all items which have been blanked (and elements for which the entity switch has been turned off)
* Iterative cleanup-unused is then applied.
* Pass#2 deletion is then applied to remove items which have no visibility in themselves (e.g. seatbelt definitions) but may be blocking deletion of items which should go (e.g. seatbelt elements)

The result should be a sub-model consisting of the visible items of the original model but retaining the all important \*CONTROL, \*DATABASE, etc cards

[Previous](clipboard-usage-in-object-menus.md)  |  [Next](coat-entity-coating-entities-with-shells-or-segments.md)