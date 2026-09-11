####  Conn Only Restricting Movement to "Connected" Nodes Only

The  ****  **Conn only** switch limits nodes that are eligible for transformation by **INTERPOLATE** still further: if it is switched on only those nodes which are connected via element mesh to explicitly chosen nodes, (as well as being within Distance), are eligible for movement.

"Connected" in this context means that it is possible to get from the node in question to any explicitly selected node via a continuous mesh of structural elements. The connection path does not have to be direct, PRIMER will follow mesh of any complexity, but there must not be any breaks to cross.

This is intended for use within very crowded areas of mesh where a purely geometrical selection of nodes for movement could lead to undesirable results by including unrelated items.

[Previous](1-search-distance-mode.md)  |  [Next](part-only-restricting-movement-to-nodes-of-parts.md)