###  Changing the Mass of a Group by Only Adding Mass to a Subgroup

By default the assign mass function will try to change the mass and centre of gravity of the group by adding mass to all the nodes in the group (except the nodes on \*PART\_INERTIA and \*CONSTRAINED\_ NODAL\_RIGID\_BODY\_INERTIA cards.

![](../Storage/primer-22-1/primer_links/sect_6/assign_mass/assign_mass_20.gif)

If you only want to change the mass on a certain part of the group instead then select Change mass and CofG by changing a subset of the group.

![](../Storage/primer-22-1/primer_links/sect_6/assign_mass/assign_mass_21.gif)

You can then select a subgroup which will be used by PRIMER for adding lumped masses to instead of the main group. This group **MUST**be a subgroup of the main group for this to work. If you try to use a group that is not a subgroup of the main group PRIMER will warn you.

![](../Storage/primer-22-1/primer_links/sect_6/assign_mass/assign_mass_22.gif)
[Previous](including-part-inertias-in-the-assign-mass-operation.md)  |  [Next](problems-with-assign-mass.md)