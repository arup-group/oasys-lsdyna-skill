#####  Using PRIMER's "Radiused" Meshed Sliprings

A first attempt at solving the problem of meshing continuously through a slipring was provided by PRIMER 's "meshed slipring" option. This worked as follows:

* A notional cylinder of defined radius was positioned at the slipring location
* PRIMER automatically created a semi-cylindrical mesh at this location

This image shows this process in action, including the notional cylinder at the slipring location (this is only shown during the belt fitting phase, it does not form part of the model.)

The belt would be meshed with "pure" shell elements, typically using \*MAT\_FABRIC. Contact between belt and slipring would to be modelled explicitly.
 ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/uslip_8.png)
 
There were several problems with this approach:

* Although this particular example of a D-Ring can be meshed with a semi-cylindrical shape this is not always true, and particularly in the case of pelvis buckles where a section through the "slot" and surrounding geometry is often more of a rounded off irregular square shape than a cylinder.
* Only a single cylinder definition (radius etc) was provided for, so if a belt contained sliprings of different radii there was no way to mesh it correctly.
* Positioning the cylinder accurately in order to get the belt correctly placed in the slot was quite difficult.
* As this example shows the mesh was forced to line up with the long axis of the cylinder, which was not always ideal when the entry and departure angles through the buckle were skewed.
* The slipring provided a local zone of shorter elements, but transition from those to the normal belt element mesh size was not always satisfactory as shown here.

Notwithstanding all the above this method could be made to work, but in version 18 it has been superseded by the more comprehensive "explicitly meshed" solution shown below.
 ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/uslip_9.png)

[Previous](using-2d-element-seatbelt-slipring.md)  |  [Next](meshing-sliprings-explicitly.md)