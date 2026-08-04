####  Warning about Speed Penalties

Using **INTERPOLATE** can slow down transformations significantly, particularly if large Distance values are used. This is because a bucket sort for the "nearest explicitly selected node" is required for every candidate node within Distance of selected nodes, and the number of nodes in the sort increases as the cube of Distance .

So don't be surprised if there is a significant delay when interpolation is used with large Distance values in big models. Using Conn only can speed matters up as it usually reduces the number of candidate nodes for movement.

[Previous](part-only-restricting-movement-to-nodes-of-parts.md)  |  [Next](example-use-of-interpolate-search-distance-mode.md)