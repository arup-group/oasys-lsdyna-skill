###  Problems with Assign Mass

####  Unable to achieve centre of gravity or inertia

The assign mass function in PRIMER works by adding lumped masses to (some but not necessary all of) the nodes of the group in an iterative process which attempts to meet the requirements of total mass, CofG and Inertia.

If the error of solution falls below the specified error tolerance (5% by default) the the mass distribution is simply applied as above. If a satisfactory solution cannot be reached an information panel will be offered giving the magnitude of the error.

![](../Storage/primer-22-1/primer_links/sect_6/assign_mass/assm_7.gif)

This will usually occur because for the given amount of mass being added the CofG cannot be shifted by the required amount. PRIMER can add mass to nodes but it cannot remove mass.
 
#### Part inertias
 
The assign mass function in PRIMER works by adding lumped masses to the group you have specified. This works perfectly OK (even on rigid materials). However, if you have a rigid material that has a \*PART\_INERTIA card, Ansys LS-DYNA ignores the mass of the elements and lumped masses and imposes the mass and inertia properties from the \*PART\_INERTIA card. This means that any lumped masses that are added in PRIMER during the assign mass function to nodes that are in a \*PART\_INERTIA will be ignored. An identical problem occurs if a node is part of a \*NODAL\_RIGID\_BODY\_INERTIA . PRIMER will include any inertia definitions that are completely contained in the group in the mass calculation but will not produce any lumped masses on the nodes in the inertia definition (see [Including part inertias in the assign mass operation](including-part-inertias-in-the-assign-mass-operation.md#incinertia))
 
If an inertia definition is not completely contained it will not be included. To warn you of this, when you select the group in the assign mass panel, PRIMER checks to see if any of the nodes are on a \*PART\_INERTIA card or a \*NODAL\_RIGID\_BODY\_INERTIA card. If any of the nodes in the group are part of an \_INERTIA , then PRIMER checks to see if the inertia is completely contained. If it is not, a warning screen is printed and the nodes will be excluded from the assign mass calculation.

![](../Storage/primer-22-1/primer_links/sect_6/assign_mass/assign_mass_14.gif)

[Previous](changing-the-mass-of-a-group-by-only-adding-mass-to-a-subgroup.md)  |  [Next](controlling-suppression-of-text-box-warnings.md)