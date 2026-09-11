###  RENUMBER SELECTION

Renumbering will be applied to those items pre-selected through the object menu panel. Provisionally, the select items are to be renumbered **sequentially** starting at the defined start label ("START AT" option - the default) or to be **offset** by a defined value ("OFFSET" option).

If, however, such renumbering would cause a clash of labels, some additional action must be taken which may change labels on unselected items.

In START AT mode

![](../Storage/primer-22-1/renumber-selection/renumber-selection-2023-11-29.png)

Options for **modifying labels of clashing unselected items**, to make sequential labels available for the selected items:

* *Move clashing* - Move clashing (unselected) labels to above the highest label for that type in the model
* *Shift upwards* - apply an offset to all labels of the type, to shift all the labels clear of the sequential renumbering range

Options for renumbering selected items **without changing labels of unselected items**:

* *Relabel item* - Renumber each selected item to the first available free label above the start label
* *Relabel block*- Find the first range above start label which can accommodate all the selected items and relabel into that range

In OFFSET mode

![](../Storage/primer-22-1/renumber-selection/renumber-selection-2023-11-29-1.png)

* move the clashing (unselected) labels to above the highest label
* offset the selected items as a block to the first found free space, interlacing as necessary

*Note on treatment of Latent items*

Items which are referenced by a keyword but do not actually exist in a model are called latent. The renumber-selection function has been designed to avoid renumbering the labels of latent items. These labels are therefore reserved, and renumbering/clash fixing will always work around them. In the "OFFSET" case, if the required label for an item (current+offset) already belongs to a latent item, the item will not be renumbered.

![](../Storage/primer-22-1/renumber-selection/renumber-selection-2023-11-23-3.png)

id low:high will report the range into which the items will be relabelled. "low" may not be same as nominal "start at" if clashes were found.

The SKETCH function will sketch those items that have been assigned for renumbering by activating " YES " button.

The Post-renumber label declash option allows the declash of certain entity types. See
[Label declash option](declash-labels.md#declash_option) for more information.

[Previous](condense-model-ids.md)  |  [Next](condense-mats.md)