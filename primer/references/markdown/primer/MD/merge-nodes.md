###  Merge Nodes

This operation will permit coincident (and/or close) nodes to be merged.

The MERGE NODES function is accessed either through the Remove button on the top panel or through Volumes I & II -&gt; NODE -&gt; Merge .

| Using Merge Nodes  <br>Merge applied to a selection of nodes or on a global plane, using user defined tolerance.<br> <ul> <li>retain lowest/highest node label </li> <li>merge at lowest/highest node or at average position </li> </ul> <br>PREVIEW MERGE will highlight the nodes to be merged. | ![](../Storage/primer-22-1/primer_links/sect_6/remove/fig_6_12_1.gif) |
| --- | --- |

####  More cautious and Less cautious modes

Merge nodes has two different modes: More cautious and Less cautious .

For simple cases where only 2 nodes will be merged and the nodes are only on elements such as shells or solids there is no difference but for cases where there are more than 2 nodes to merge or where there is a constrained item such as a nodal 
rigid body or extra nodes on a rigid body using the 2 nodes to merge you will get a different result depending on the mode.

To understand the difference between the 2 modes consider the following examples:

#####  Example 1

During a merge PRIMER has found 3 potential nodes to merge together. The 2 constrained nodes are on a nodal rigid body. 
In the more cautious mode PRIMER will not merge any nodes. 
In the less cautious mode PRIMER will merge all 3 nodes together (removing the duplicate node from the NRB).

#####  Example 2

During a merge PRIMER has found 3 potential nodes to merge together. The 2 constrained nodes have a beam between them. 
In the more cautious mode PRIMER will not merge any nodes. 
In the less cautious mode PRIMER will choose the node on the beam which is closest to the master and merge it to the master node.

#####  Example 3

During a merge PRIMER has found 2 potential nodes to merge together. The master and constrained nodes are on the same nodal 
rigid body. 
In the more cautious mode PRIMER will not merge any nodes. 
In the less cautious mode PRIMER will merge the constrained node to the master node.

####  Collapsing shells

By default Merge nodes will not collapse quad shells to trias. This can be turned on by using the Collapse quad shells to trias option in the Node replace/merge section in Program options (in the Options menu). This can also be changed with the replace\_collapse\_shell preference.

[Previous](delete-and-undo.md)  |  [Next](rigidify.md)