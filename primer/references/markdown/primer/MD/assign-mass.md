##  ASSIGN MASS

The assign mass panel allows you to add mass and change the centre of gravity of a [group](groups.md#groups), part-set or assembly. This is done by adding lumped masses on the nodes in the group (or a subset of the group if you use the subgroup option) or by creating/modifiying \*ELEMENT\_MASS\_PART(ADD) definitions. Movement of CofG is more restricted if using the EMP method but the principles of mass distribution are the same.
 
A new assign mass may be created using either method, and an existing one may be swapped from one to the other.
 
It is impossible to assign mass to nodes of a part which is defined with a \*PART\_INERTIA card as the lumped masses will be ignored by Ansys LS-DYNA. However, this does not mean that part inertias cannot be present in a massing up operation. They can be, but must be wholly contained in the group to be valid and included in the mass calculation. See the [part inertias](problems-with-assign-mass.md#partinertia) section in the [problems](problems-with-assign-mass.md) below for more details.
 
Similarly in part mode, PRIMER will expect any \*ELEMENT\_MASS\_PART\_SET(ADD) definitions to be fully contained within the group,etc. \*ELEMENT\_MASS\_PART\_FINMASS definitions are analogous to \*ELEMENT\_MASS\_NODE\_SET in the node method and will be locked against change of mass.
 
## ![](../Storage/primer-22-1/primer_links/sect_6/assign_mass/assign_mass_2.gif)

[Previous](folding-example.md)  |  [Next](basic-assign-mass-operation.md)