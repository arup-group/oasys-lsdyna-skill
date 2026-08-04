####  (2) SELECT ITEMS Mode

Instead of setting a Search Distance, you are able to manually select the nodes to interpolate via NODEs, SHELLs and PARTs.

When INTERP ITEMS are selected, the nodes for interpolation will automatically be identified and sketched in blue. The nodes at the boundary of this selection (excluding those on free edges) will automatically be flagged as fixed nodes and sketched in red. If the FIXED NODES - Automatically Fix Free Edge Nodes option was selected, the interpolation nodes at the free edges will automatically be flagged as fixed and also sketched in red. Additionally, FIXED NODES can be added or removed manually.

The following image shows the **SELECT ITEMS** interpolation mode after some nodes have been selected:

![](../Storage/primer-22-1/primer_links/sect_6/orient/fig_6_3_5g.png)

When the INTERPOLATION panel is active, the nodes that will be interpolated will be sketched in blue and the nodes that should remain fixed will be sketched in red. Please make sure all interpolation nodes (blue) lie between selected orient items (black on white background or white on black background) and fixed nodes (red) so that the interpolation algorithm can be implemented correctly. In the **SELECT ITEMS** mode, the Tolerance angle will be used to evaluate the interpolation ratio for each node **P** as follows:

![](../Storage/primer-22-1/primer_links/sect_6/orient/interp_ratio_sel_items.png)

**Note** : If no fixed nodes give an **POF** angle within the **tolerance angle** , the fixed node with the smallest **POF** angle is used as point **F** . Which is why the interpolation might result in irregularity when you have a mesh that is not dense enough or a tolerance angle that is too small. However, interpolation will be distorted if your tolerance angle is too big. Therefore, you should choose a small angle suitable for your model.

The following are some examples regarding the selection of **INTERP ITEMS** and **FIXED NODES** :

[Previous](example-use-of-interpolate-search-distance-mode.md)  |  [Next](selecting-items-for-interpolation-enclosed-examples.md)