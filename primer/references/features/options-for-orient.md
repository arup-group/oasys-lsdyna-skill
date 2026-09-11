###  Options for Orient

![](../Storage/primer-22-1/options-for-orient/options-for-orient-2023-11-22-3.png)

The Save Orient settings button saves the following options to the oa\_pref file.

Constrained child rigid bodies oriented when their lead part is. The default is not to orient.

Beam 3rd nodes (which define the beam section) by default will be oriented when the beam itself is.

When a rigid part is oriented, by default the constrained extra nodes will also be oriented. This may distort deformable elements.

When all FE entities of a connection are oriented, by default the connection itself will also be oriented.

There is an option to move (or copy) welds that attach to panels which are being oriented.

There is an option to report that nodes of unselected elements have been moved as a result of the orientation as this may have caused [distorted elements](check-for-element-distortion.md#ORIENT_DISTORT).

Box rotation by default is automatic, which means that if Ansys LS-DYNA output version is set to 971R6 or above a rotated box will be converted to \_LOCAL. Otherwise the old method of enlarging rotated boxes will apply.

Propagation orient of parts/nodes. Propagation is no longer applied unconditionally to all "junior" items that are cross-referenced by the items selected for orient. This gave inconsistent results when parts or nodes were selected as such items as \*BOUNDARY may or may not be oriented depending on their configuration. By default, PRIMER will limit propagation from parts and nodes. Copy orient has its own propagation options.

Orient airbag reference geometry active by default, may be disabled.

Orient mat fabric axis active by default, may be disabled.

Orient constraint with node. With this option orientation of a node(s) will move the entire constraint.

The following options apply for copy orient

![](../Storage/primer-22-1/options-for-orient/options-for-orient-2023-11-22-2.png)

[Previous](orient-in-a-local-system.md)  |  [Next](translate-shifting-by-dx-dy-dz.md)