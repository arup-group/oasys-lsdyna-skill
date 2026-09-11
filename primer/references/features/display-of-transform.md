###  Display of Transform

Include files which belong to include Transform statements will be displayed in the include file tree with a prominent " **T** " on their branch.

![](../Storage/primer-22-1/primer_links/sect_3/images/incl_trans_1.gif)

PRIMER applies the transformations to the model on read-in. Therefore, on write-out the transformations are usually reversed and the transformation definition data restored (but the user may prevent this).In the graphics window, the items of the include file will be displayed *in their transformed state.* That is with their labels offset and their geometry changed as necessary.

| Sometimes it may be useful to temporarily suspend the transformation (translation, rotation and scaling) on an include transform. This can be done by using Suspend in the Transform popup. If an include transform has previously been suspended there will be a Reinstate option instead which will reinstate the transformation data. <br>This can also be done from the [part tree](part-tree-behaviour.md#part_tree_behaviour). | ![](../Storage/primer-22-1/primer_links/sect_3/images/suspend_incl_trans.png) |
| --- | --- |

[Previous](include-transform.md)  |  [Next](edit-of-include-transform.md)