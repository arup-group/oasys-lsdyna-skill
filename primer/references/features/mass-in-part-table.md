###  Mass in Part Table

The Part table allows display of different kinds of part mass, namely Structural mass, assign mass, nonstructural mass, dyna part mass, component mass, lumped mass, added mass and percentage added mass.

NS mass (non-structural mass) is the mass that applies on shell or beam parts as a result of mass per unit area setting (MAREA) on the section card. It may also be applied using the \*ELEMENT\_MASS\_PART card.

Lumped mass (def) is the sum of lumped masses attached to the nodes of the part, including assigned mass. For rigid parts the lumped mass (including masses on constrained extra nodes) is included in the Dyna Part mass, so it is not included in the column total (though the sum per part is listed for information).

Dyna part mass tries to use the same mathematical formulation as Ansys LS-Dyna. It is the sum of structural & non-structural mass belonging to nodes of part including lumped mass for rigid part (unless it is Part\_Inertia). A deformable part 'loses' mass where nodes attach to rigid part/nrb. A rigid part 'gains' mass where it attaches to deformable nodes. Constrained parts in rigid body merges get zero mass, lead parts acquire the mass of the constrained part(s).

Component mass is an attempt to describe the "engineering" mass of a part. This is the sum of structural & non-structural mass belonging to nodes of part including lumped mass for both deformable & rigid parts (unless Part\_Inertia). Mass is NOT transferred from deformable to rigid parts/nrbs. Also in this context rigid body merges are ignored. The total of this column should be the model mass (without added mass).

*Note on ELEMENT\_SHELL\_NURBS\_PATCH part* . In this case mass is calculated based on tessellated tria mesh. Mass for each tria is calculated based on (area x section thickness x rho). And then summed up to get total mass.

*Note on masses on nodes of nodal rigid bodies* . Masses on nodes of nodal rigid bodies attached to a part will be included in the NRB mass column for the part. If the mass is on a node which does not directly attach to a part its mass will be shared amongst the nodes which do attach.

| ![](../Storage/primer-22-1/primer_links/sect_7/parttable/mass_on_nrb.gif) |
| --- |
| In this example NRBmass for Part 1 will include mass 2/3 of mass of MA1 and 2 quarter element shares. Mass for Part 2 will include 1/3 of mass of MA1 and all of mass MA2 and 1 quarter element share.<br> <br>If mass properties (CofG and Inertia) are activated in the table as above, they will include Lumped Mass and NRB mass.<br> <br><br> ![](../Storage/primer-22-1/primer_links/sect_7/parttable/mass_on_nrb_2.gif)<br> <br><br><br>If these columns are not displayed, the calculation will ignore the mass associated with the NRB and should give the same result as reported in the Ansys LS-Dyna otf (d3hsp) file. This treatment de-couples the NRB from the deformable parts.<br> <br><br> ![](../Storage/primer-22-1/primer_links/sect_7/parttable/mass_on_nrb_3.gif) |

Added mass is the timestep added mass on deformable parts that arises due the model mass scaling (DT2MS &lt; 0.0).The percentage added mass is the ratio of added mass to part mass.

Structural mass is the sum of the structural element masses, except for rigid Part\_Inertia, where is the raw value &lt;TM&gt;.

Part mass is defined by PRIMER as follows:

For a deformable part it is the sum of the structural mass, the assigned mass and the nonstructural mass.

For a rigid part that is not \_INERTIA it is the sum of structural mass, the assigned mass, the nonstructural mass and the attached lumped mass. This will include mass on constrained extra nodes. If it is a lead part, the mass of its constrained parts will be added in. If it is a constrained part itself its part mass will be reported as zero.

For a rigid part\_inertia it is the true Ansys LS-DYNA part inertia value, that includes adjustment for rigid body merges and constrained extra nodes which carry the inertia flag (IFLAG). If the part is constrained itself its part mass will be reported as zero.

####  C of G and Inertia in part table

The C of G and Inertia tensor of individual parts may be displayed by using the drop down from the appropriate row.

If multiple parts are selected, the combined C of G will be displayed. These values are echoed in the dialogue box.

The value given on the top row is the combined C of G and combined Inertia for the parts displayed on the table.

If NRB mass/Lumped mass/Added mass columns are displayed, these masses will be included in the mass property calculations.

*Note on ELEMENT\_SHELL\_NURBS\_PATCH part* . For Cofg and inertia calculation tessellated tria mass is equally divided on tria vertices.

![](../Storage/primer-22-1/primer_links/sect_7/parttable/cofg.gif)

[Previous](saving-part-table-information-to-file.md)  |  [Next](parameters-in-the-part-table.md)