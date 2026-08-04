#####  Using 1D *ELEMENT_SEATBELT_SLIPRING

The original \*ELEMENT\_SEATBELT elements in Ansys LS-DYNA were 2-noded discrete elements, quite similar in many ways to springs (\*ELEMENT\_DISCRETE).

Since the elements were one dimensional they could only transmit axial force and of course contact between them and dummy or vehicle structure was hopelessly unrealistic because it was just a 1d line.

Nevertheless 1d belt elements are still sometimes used, typically at the end of 2d shell element sections:

![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/uslip_3.png)

Here is a typical detail of a shell element belt (red) passing over the shoulder of a dummy and making the transition to 1d belt elements (black) via a nodal rigid body (blue).

Such a detail does a good job of transmitting force in the belt through the slipring and into the 2d shell elements, but a very poor job of modelling contact between belt and structure in the region of the B-Post. This matters when modelling side impact, and even when modelling frontal impact when there are airbags in the seat and door frame in this region.

For this reason contemporary practice tends to relegate this sort of modelling method to static pull-out tests and other situations where details of contact between belt, dummy and structure are not significant.

PRIMER still support this modelling method: you can choose to model regions of the belt using 1d elements in the Mesh stage; the appropriate sliprings and nodal rigid bodies will be used.
 ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/uslip_2.png)

![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/uslip_4.png)

**Orientation of 1D sliprings** - doesn't matter!
 
Because a 1d seatbelt element is just a line the orientation of 1d slipring elements doesn't matter. PRIMER graphics attempts to synthesise a plane for 1d belt and slipring elements, the green elements in the image above, because otherwise they are difficult to visualise but this is just notional.

[Previous](understanding-sliprings-in-the-belt-fitter.md)  |  [Next](using-2d-element-seatbelt-slipring.md)