###  How "Associated Data" Is Drawn for "Non-Element" items

The addition of extra "associated" data to symbols is controlled by the lower half of its box:.

![](../Storage/primer-22-1/primer_links/sect_4/images/fig_4_4_6.gif)

An example might be a contact surface, which is defined by sets of parts, sets of nodes, bounding boxes and which references a load-curve. It is possible to draw and label all these items (although the screen might get a bit cluttered!)

Therefore it is necessary to get used to the idea of primitive objects (nodes, elems, boxes, ...) being drawn because they make up part of some other higher order entity, and being labelled with that entity.

![](../Storage/primer-22-1/primer_links/sect_4/images/fig_4_4_7.gif)

In this example, which shows a \* CONSTRAINED\_SPOTWELD , both the weld itself and the nodes at its ends have been drawn.

The labelling of associated nodes has been turned on, but note that the primary label on the nodes associates them with the spotweld since it is their "parent" entity in this context.

This example also demonstrates the use of the NOTATE function. This is a global function which adds "useful" data where possible to some visible items, in this example the normal and shear force values of the spotweld.

Other examples are the stiffness and damping factors of joints; motion and orthotropic data on rigidwalls; stiffness and stop angle data on generalised stiffnesses; and so on. Generally speaking NOTATE adds extra data to items where this can be expressed concisely enough to fit onto the screen.

[Previous](non-element-items.md)  |  [Next](geometry-entities.md)