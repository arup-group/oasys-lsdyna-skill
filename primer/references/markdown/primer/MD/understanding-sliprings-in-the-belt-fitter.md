####  Understanding Sliprings in the Belt Fitter

A typical 3-point automotive seatbelt will have a D-ring bolted onto the B-post and a buckle on a stalk at the pelvis location.

Obviously other layouts are possible: vehicles with no B-post will have some alternative geometry at the shoulder, back seat belts will be different and child seats may have guides. However from the point of view of the belt fitter these are all qualitatively the same sort of geometry:

* The belt changes direction quite sharply over a short distance.
* During an impact material will feed through from one side to the other.

This can be solved in two ways:

1. Using Ansys LS-DYNA's \*ELEMENT\_SEATBELT\_SLIPRING keyword, that is an explicit element which performs the functions of a slipring, including friction and the ability to feed belt material from one side to the other.
2. A continuously meshed piece of geometry where the belt elements are threaded through the slot in the slipring, \*CONTACT is used to model contact between belt and slipring, and material passes explicitly from one side to the other experiencing explicit friction en route.

 ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/uslip_1.png)
[Previous](right-click-options-at-intermediate-path-points.md)  |  [Next](using-1d-element-seatbelt-slipring.md)