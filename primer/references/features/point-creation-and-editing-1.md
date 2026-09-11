####  Point Creation and Editing

 ![](../Storage/primer-22-1/primer_links/sect_6/mechanism/fig_7.gif)
 A title will be generated automatically, but you can supersede this with your own.
Points do not have labels
 
##### Point type
 
A point defined by **Location** is a coordinate in space that is attached to, and moves with, its parent assembly.
 
A point defined by **Node** is essentially the same: it obtains it current coordinate from the node. (However if the node is not on a part or node set of the assembly it will not move with the assembly.)
 
The node should normally be part of the parent assembly, but this is not mandatory.

##### Restraints and coordinate systems
 
A point's movement may be restrained in any combination of degrees of freedom (or none).
 
If a local coordinate system is defined restraints act in that system, otherwise they are global.
 [Previous](connection-creation-and-editing.md)  |  [Next](visualising-points-1.md)