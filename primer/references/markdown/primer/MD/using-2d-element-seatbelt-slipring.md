#####  Using 2D *ELEMENT_SEATBELT_SLIPRING

These 2d elements were added to Ansys LS-DYNA to address the problems identified above. They are defined on the \*ELEMENT\_SEATBELT\_SLIPRING card but inside Ansys LS-DYNA they are actually 2d shell elements with parallel lines of 1d seatbelt elements running down each row of nodes.

Their exact method of working is opaque but an approximate description is:

* About 85% of the axial force in the belt is taken by the parallel rows of 1d belt elements
* The remainder is taken by the shells.
* The shells provide some shear and bending stiffness, maintaining the shape
* The shells also provide a 2d surface for contact.
* 2d sliprings work like a parallel line of 1d sliprings, 1 per mesh line.

Ansys LS-DYNA aggregates the forces in the 1d belt elements and the shells such that you just see a single unified belt force. However the behaviour is very much parallel lines of 1d elements plus some in-plane stiffness from the shells.
 ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/uslip_5.png)
 
Here is the same model as above, now meshed with a 2d slipring. The mesh is continuous through the slipring with a line of nodes coincident with the slipring nodes.
 
![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/uslip_7.png)
 
Here is a detail of the slipring section of the belt showing how the 2d mesh is continuous in this region, allowing contact between belt and the rest of the vehicle to be modelled more realistically. The actual FE mesh of the D-Ring is omitted here, it would not be physically connected to the belt in any way.
 
Some users are very happy with the performance of 2d belt elements during an analysis, others are not. See [More details about meshing 2D seatbelt elements](more-details-about-meshing-2d-seatbelt-elements.md#more_2d)for more details of how these 2d belt elements work and are handled in PRIMER
 ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/uslip_6.png)
 
######  Orientation of 2D sliprings - \*does\* matter. 
 
There are two distinct geometries of slipring that need to be considered if 2d seatbelt elements are to be meshed correctly. PRIMER offers two variants of element based (that is using \*ELEMENT\_SEATBELT\_SLIPRING)

* **[B-Post](slipring-case-1-b-post-type-at-shoulder-location.md#slip_case_1)**  slipring-case-1-b-post-type-at-shoulder-location.md#slip_case_1(shoulder) location, where the slipring is constrained to rotate about the transverse axis defined by its fixing bolt.
* **[Free](slipring-case-2-free-type-at-pelvis-location.md#slip_case_2)** (typically, but not exclusively, pelvis) location, where the slipring is free to adopt the average orientation of the two belt segments meeting at that point. **Meshed** (radiused) sliprings are also effectively "free", in that their orientation is not constrained by adjacent path geometry.

These are described, with examples, in [The effect of Sliprings on the belt path](the-effect-of-sliprings-on-the-belt-path.md#slipring_special_cases).
 [Previous](using-1d-element-seatbelt-slipring.md)  |  [Next](using-primer-s-radiused-meshed-sliprings.md)