####  STRETCH Definitions (From V11 Onwards)

These allow you to define parts of the structure which are not part of the mechanism, but which will be "stretched" by mechanism movement.

Typical examples might be a coil spring modelled explicitly in a suspension tower which will be contracted or expanded by movement of the suspension below.

In the diagram here the blue and green blocks are mechanism assemblies, while the red spring is in a stretch definition (but not in any assembly). When the blocks are pulled apart the mechanism positioner stretches the red spring using the relative displacement of the two assemblies to define how it should be modified.

The structure being stretched does not have to be a simple spring, it can be of arbitrary complexity.

![](../Storage/primer-22-1/primer_links/sect_6/mechanism/fig_11a.png)

#####  Defining a Stretch definition

The structure to be stretched is defined, like an assembly, by any permutation of Parts, Part sets or Node sets.

Stretching is defined by the relative motion of two nodes on ends 1 and 2 respectively. At least one node should be on a mechanism assembly otherwise no motion will occur during positioning. Nodes do not have to be on the structure being stretched.

Two possibilities exist for end fixity:

**(1) Pinned ends: Simple linear stretching, translation only.**

In this case only nodes N1 and N2 are defined, and only linear displacement between the two will be used giving a "simple" translational stretch as in the example above.

**(2) Encastre ends: Complex stretching, including rotation.**

In this case all three nodes at an end must be defined, and should form a well-conditioned triad capable of forming a local coordinate system with its origin, the point of fixity, at the first node. For example at end 1 the three nodes N1, N3, and N5 must be defined:

![](../Storage/primer-22-1/primer_links/sect_6/mechanism/fig_11.png)

If encastre fixity is required at end 2 then nodes N2, N4, N6 must form a similar local system, with its origin at N2.

(Although the 3 nodes at an encastre end form a local coordinate system, and this is used internally, the orientation of this system is not important. However you may find it helpful to align it with the approximate directions of expected movement, as this may make it easier to visualise motion.)

Stretching is interpolated from the relative movements of ends 1 and 2. Translation is always included, but if an end is encastre then rotation and bending due to "rotation times lever arm" effects will also be included. You can have any permutation of fixity methods at ends 1 and 2, and the following diagrams show how end fixity will influence the shape of the structure between the ends. (Those who have studied bending of beams should find these images familiar.)

| **Examples of how end fixity affects stretched shape.** |
| --- |
| **Both ends pinned** | ![](../Storage/primer-22-1/primer_links/sect_6/mechanism/fig_12a.png) | ![](../Storage/primer-22-1/primer_links/sect_6/mechanism/fig_12b.png) |
| **One end pinned, one end encastre** | ![](../Storage/primer-22-1/primer_links/sect_6/mechanism/fig_12c.png) | ![](../Storage/primer-22-1/primer_links/sect_6/mechanism/fig_12d.png) |
| **Both ends encastre** | ![](../Storage/primer-22-1/primer_links/sect_6/mechanism/fig_12e.png) | ![](../Storage/primer-22-1/primer_links/sect_6/mechanism/fig_12f.png) |

######  Defining the structure to be stretched.

This consists of any permutation of parts, part sets and node sets and is defined in exactly the same way as for assemblies above. There are no restrictions upon membership of a stretch definition, but it is recommended that parts and nodes already in an assembly in this mechanism should not be used since this would lead to their position being "driven" by two possibly conflicting methods.

As with assemblies membership of a **Mechanism**  Stretch definition does not "lock" parts etc against deletion, but membership of a **Dummy**  Stretch definition does lock them.

######  How stretch is applied

Stretch is applied by updating nodal coordinates, and in the case of rigid parts using \_INERTIA definitions the Centre of Gravity of the part is also updated.

Generally the structure to be stretched should ie in the region between nodes 1 and 2 because of the way motion is interpolated:

* Structure between N1 and N2 gets moved by (P1 x motion of N1) plus (P2 x motion of N2), where proportions P1 and P2 are calculated as follows: 
 
P1 = projection of vector between node to be moved N and N1 onto the vector N1N2 divided by the length of vector N1N2 
P2 = (1.0 - P1)
* Structure "behind" N1, ie P1 is &lt; 0.0, gets 100% of the motion of N1, and none from N2.
* Structure "behind" N2, ie P1 is &gt; 1.0, gets 100% of the motion of N2, and none from N1.

When an end is encastre then an additional motion based on the (rotation of that end) x (the distance from that end's node) x (the proportion P) is applied. This gives a "delta x theta" motion.

######  Example of Stretch in action

Here is an example from a real model showing how an explicitly modelled spring at the top of a shock absorber tower is compressed and expanded. Here the wheel, brake assembly, wishbone and drive-shaft are all assemblies in a mechanism that allows them to move up and down. The top of the shock absorber tower (yellow) is fixed.

A Stretch definition with pinned ends has been made between the top of the shock absorber column and the top of the tower. The structure to be stretched is the spring (red) and its bracket (blue)

| ![](../Storage/primer-22-1/primer_links/sect_6/mechanism/fig_13a.png) | ![](../Storage/primer-22-1/primer_links/sect_6/mechanism/fig_13b.png) | ![](../Storage/primer-22-1/primer_links/sect_6/mechanism/fig_13c.png) |
| --- | --- | --- |
| Neutral position | Wheel moved up | Wheel pulled down |

This example illustrates two limitations of this approach:

1. It can be seen that interpolation has thinned the spring material in the centre image, and thickened it in the right hand one. This will clearly affect both the mass and the stiffness of the spring, and indeed any structure made of solid or thick shell elements that is stretched in this way.
2. In the centre image it can also be seen that the spring is just "poking through" the top of the tower. A better choice of node at the top of the tower (a bit lower down) would fix this problem, but it has been left to illustrate the point that stretching material may give rise to penetrations.

#####  WARNING: Stretch is a purely geometrical transformation that distorts elements

When structure is stretched it is likely that volume, and hence mass, will be added to or removed from the model when element sizes are changed. In the case of solid elements it is likely that structural thicknesses will also be changed.

***It is your responsibility to ensure that such distortions of your model geometry are not excessive and do not invalidate it in any way.***

[Previous](child-mechanisms.md)  |  [Next](applying-motion-to-databasecrosssection-definitions-mechanism.md)