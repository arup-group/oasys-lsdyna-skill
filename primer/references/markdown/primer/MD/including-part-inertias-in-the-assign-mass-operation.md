###  Including Part Inertias in the Assign Mass Operation

If a group contains \*PART\_INERTIA or \*CONSTRAINED\_NODAL\_RIGID\_BODY\_INERTIA cards they will be included in the assign mass calculation if they are completely contained in the group. For example if you mass up an entire car that contains an engine which is a part inertia that will be fine. If you try to mass up the rear 2/3 of the car so only half of the engine is in the group, the engine part inertia will not be included.

| ![](../Storage/primer-22-1/primer_links/sect_6/assign_mass/assign_mass_25.gif)If your group does not contain any inertia definitions then the panel will be displayed as shown on the right. |
| --- |
| ![](../Storage/primer-22-1/primer_links/sect_6/assign_mass/assign_mass_26.gif)If your group does contain some inertia definitions then the panel will be displayed as shown on the right. The mass will be shown for each type and the elements can be sketched. <br>The included mass from parts and NRB's is shown. These are inertias that are completely contained in the group and so are included in the calculation. |

The Excluded part inertia and NRB elements are from inertias that are not completely contained. If this occurs PRIMER will give a warning and they will not be included in the mass calculation ([see the problems section](problems-with-assign-mass.md#partinertia))

Ansys LS-DYNA will ignore any lumped masses that are on inertia definitions. They will be overwritten by the part inertia when DYNA initialises. PRIMER will not create any lumped masses on inertia definitions.

[Previous](hierarchy-of-assign-mass.md)  |  [Next](changing-the-mass-of-a-group-by-only-adding-mass-to-a-subgroup.md)