####  STRETCH Definitions

![](../Storage/primer-22-1/primer_links/sect_6/mechanism/fig_11.png)These allow you to define parts of the structure which are not part of the dummy, but which will be "stretched" by dummy assembly movement. Typical examples might be fabric spanning between two dummy assemblies, but not part of either, which needs to have its shape changed when the related assemblies move.

At least one node must be defined at each "end" of a stretch, and at least one end needs to be on a dummy assembly. You also define parts, part sets or node sets of structure that will be "stretched".

When the dummy is articulated and the assemblies move the relative motion between the two ends is interpolated onto the parts and nodes defined within the Stretch definition.

A single node at an end gives a "Pinned" definition, and three nodes forming a triad give an "Encastre" definition. Pinned ends only result in translation being interpolated, whereas encastre ends will result in both translation and rotation being interpolated.

This topic is covered fully under the [Mechanism section](stretch-definitions-from-v11-onwards.md#stretch), please refer to that for more information.

[Previous](visualising-points.md)  |  [Next](dummy-tree-files.md)