###  Hierarchy of Assign Mass

If you are massing assemblies of components which have themselves been massed up, you must observe the hierarchy that the assign mass statements of the components precede (i.e. are at a lower label than) the assign mass statement of their corresponding assembly.

When you come to mass the assembly, you may either define a subgroup which contains all parts of the group except those which have already been massed, or, as this may be rather inconvenient, you can allow primer to **automatically exclude** those elements which have been massed previously.

When you CALCULATE the assign mass, you will get the following warning:

![](../Storage/primer-22-1/primer_links/sect_6/assign_mass/assm_hierarch.gif)

If we modify an Assign Mass group which contains elements which are used by a later (hierarchically higher) statement, a warning will be given and the user urged to apply the RECALC function. This will remake all the assign mass statement which have labels above the current one, thus accomodating the affect of modifying the mass of the lower group. In default mode, the elements will not be remassed. To maintain the integrity of the assign mass statements, it is recommended that the function be used in this way. However, some users have requested the ability to add mass to items already massed up. This may be done by setting the OVERMASS flag on both the overmassed and the overmassing assign mass statements.

[Previous](recalculating-an-assign-mass.md)  |  [Next](including-part-inertias-in-the-assign-mass-operation.md)