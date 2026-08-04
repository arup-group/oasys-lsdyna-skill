###  Calculating Properties

![](../Storage/primer-22-1/primer_links/sect_6/massprops/mprop3.gif)

In most cases, PRIMER will devolve the selection to the element level and sum the nodal masses derived from these elements as appropriate.

For a rigid element this will include the mass share of any deformable element directly attached.

If a rigid part is selected, by default the mass of \*CONSTRAINED\_EXTRA\_NODES and elements of any parts constrained to this one by \*CONSTRAINED\_RIGID\_BODIES will be not be included in the calculation. These options can be switched ON.

![](../Storage/primer-22-1/calculating-properties/calculating-properties-2023-06-23-1.png)

For deformable elements mass at nodes attached to rigid parts/nrbs will not be subtracted. Consequently for a part you may get a slightly higher mass from this function than the part table gives.

If you make a selection which does not devolve to elements (such as a constrained joint) PRIMER will sum the masses of the nodes involved (devolved from elements that may not be selected) and report that.

Options may be set to include lumped mass attached to the nodes of selected elements. These are off by default.

![](../Storage/primer-22-1/calculating-properties/calculating-properties-2023-07-18-1.png)

For a deformable part the value of lumped mass is shared equally amongst all the parts that attach to the node, so the calculation will only include that share that applies to selected elements.

*Note on ELEMENT\_SHELL\_NURBS\_PATCH & IGA\_SHELL part* . In this case mass is calculated based on the tessellated tria mesh. Mass for each tria is calculated based on area x section thickness x density and then summed up to get total mass. For CofG and inertia calculation tessellated tria mass is equally divided on tria vertices.

Timestep Added Mass will include timestep mass scaled mass for deformable elements

[Previous](selecting-an-item.md)  |  [Next](mass-of-what-is-visible.md)