###  How RIGIDIFY Will Change the Model

All the structural elements (shells, thick shells, solids and beams) that have been selected will end up in a rigid part constrained to the dummy master rigid part.

*Selection of a deformable Part:* if a part is selected directly or all the elements of a part are selected, a new material will be generated (keeping the same values of E and rho) and the part-&gt;material reference updated. The part will be merged to the dummy master part.

*Selection of deformable elements* : if some elements of a deformable part are selected, a new part and material will be created and the elements will be moved into this part. The part will be merged to the dummy master part.

*Selection of a rigid part or an element of a rigid part* : in this case only the merge to the dummy master is made.

The rigidified parts will all be written to a group, so the user can easily determine the mass properties.

[Previous](create-rigid-patch-bolt.md)  |  [Next](how-rigidify-will-flag-items-for-deletion.md)