####  Example

The figures below show the effect of recursive deletion. The entities selected by PRIMER with (left column) and without (right column) recursion are shown. In this example the user selected one part to be deleted.

* SKETCH will sketch each of the entities that are to be deleted. ( SKETCH may not be available for all entity types.)

* ABORT\_SEL will quit the delete operation making no changes to the model.

* The user can toggle each of the entities using the DELETE/LEAVE and DEL/LVE toggles so that they will be deleted or left as required.

* DELETE\_SEL executes the deletion using the above rules and reports to the user the number of entities that have been deleted - see the lower pair of figures.

| DELETE\_RECURSIVE ON | DELETE\_RECURSIVE OFF |
| --- | --- |
| ![](../Storage/primer-22-1/primer_links/sect_6/remove/fig_6_4_1_2a.png) | ![](../Storage/primer-22-1/primer_links/sect_6/remove/fig_6_4_1_2b.png) |
| The left figure shows that recursive deletion has found a number of elements, nodes etc. | Without recursion PRIMER finds the entities shown on the right(ie the part only). |
| ![](../Storage/primer-22-1/primer_links/sect_6/remove/fig_6_4_1_2c.png) | ![](../Storage/primer-22-1/primer_links/sect_6/remove/fig_6_4_1_2d.png) |
| Following DELETE\_SEL the part and its associated data have been deleted on the left, since recursive deletion has picked up all the subordinate items. | On the right nothing has been deleted since the part is"locked" by its elements. |

|  |
| --- |

[Previous](deletion-rules.md)  |  [Next](finding-out-why-an-item-is-locked-against-deletion.md)