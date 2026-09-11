####  How the Ends of Stretches of Shells or 2D Seatbelts Are Handled

The ends of stretches of (seatbelt) shell elements need special treatment since they need to be attached at a single point either to a structural node or to the adjoining seatbelt element. This presents two problems:

* For odd numbers of shells across the belt (#rows = 1, 3) there is no central node to attach to.
* In all cases fixing at a single point will lead to excessive warping, hourglassing or other distortion of the end shells because of the lack of end constraint.

| ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fig_7_2_3_4f.gif)Therefore PRIMER usually creates a "Nodal Rigid Body" (NRB) at the ends of stretches of shell elements: both to constrain the ends against warping and to provide an attachment point. (Exceptions are given below.)<br> <br>This example shows a shell (blue) to seatbelt (purple) connection next to a slipring. A Nodal Rigid Body has been created using the two shell end nodes, and an extra node has been created at the shell centreline to which the seatbelt element is attached.<br> <br>There are some special cases that arise because of the limitation that nodes can only be constrained by one rigid body at a time. |
| --- |

| Shell mesh meets shell mesh at fixed point (no intervening seatbelt elements)  <br><br>| ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fig_7_2_3_4g.gif)In this situation Nodal Rigid Bodies are required at each shell end, but because they share a common centre node they cannot be separate.<br> <br>Therefore PRIMER creates a single NRB and places all the nodes into it, as shown in this example.<br> <br>This has the effect of fixing the belt end geometries together, ie they can't twist relative to one another. If this is not acceptable it will be necessary to mesh the two segments as separate belt definitions, then to connect the central end nodes (which will be separate) manually with a joint, which may need lumped masses at the nodes for stability. |<br>| --- | |
| --- |

#####  Shell mesh meets rigid structural node. (also no intervening seatbelt elements)

| ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fig_7_2_3_4h.gif)Where a shell mesh attaches directly to a node on rigid structure, PRIMER does not create a nodal rigid body: instead it makes the end nodes of the shell "Extra Nodes" on the rigid part of the structure.<br> <br>In this example the (blue) belt shells are attached to (red) rigid part #1, and the two end nodes have been made Extra Nodes on part 1.<br> <br>Again, this fixes the end shell relative to the rigid structure, inhibiting relative rotations. If this is unsatisfactory then let PRIMER create the shell centre node and NRB, then attach the structure manually to the central NRB node via a joint (maybe with a mass) as above. |
| --- |

#####  Other illegal constraints on end nodes.

At present PRIMER only checks for the cases above when meshing belts. It would be possible to imagine some other very obscure illegal constraints, but these are so unlikely that they are ignored. You will have to fix such cases manually if they arise.

[Previous](examples-of-each-type-of-mesh.md)  |  [Next](controlling-the-end-connectivity-of-each-segment.md)