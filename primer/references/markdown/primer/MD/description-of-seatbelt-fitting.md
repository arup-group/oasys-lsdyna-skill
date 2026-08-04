###  Description of Seatbelt Fitting

####  Traditional 1D Seatbelts + shells method.

A "belt definition" in PRIMER has traditionally been made up out of a combination of SHELL and SEATBELT element types. Typically SHELL elements will be used where the belt touches the dummy, so as to give a realistic area of contact, and SEATBELT elements will be attached at the ends of each section so that they can interact with RETRACTOR and SLIPRING elements.

This figure shows a typical seatbelt definition using a traditional mixture of 1D seatbelt elements and shells

* SHELL elements (red) cover the regions where the belt crosses the dummy.
* A SLIPRING has been created behind the right shoulder. (There is another one at the left pelvis, not visible here.)
* A RETRACTOR has been created at the base of the B-Pillar behind the right pelvis.
* 1D SEATBELT elements (blue) are used to connect to the slipring at the shoulder, (and at the left pelvis), and also for the whole section from slipring to retractor.
* Nodal rigid bodies ( **NRB** ) are required to connect the 1D seatbelt elements to the shells.
* At the belt end a direct connection to structure via a NRB if deformable, or extra nodes on rigid part if rigid.

PRIMER would permit the whole belt to be made of 1D SEATBELT elements, but this would only be suitable for rigid dummies as these elements only give a "line" (zero width) contact with the dummy structure elements.
 ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fig_7_2_3_0a.png)

| All stretches of SHELL elements are terminated with nodal rigid bodies or, where a shell connects directly to a rigid part, by making the shell end nodes "extra" on that rigid part.<br> <br>This is to achieve SHELL to SEATBELT connections, as shown in this figure, and also to stabilise the end element if it connected directly to the structure.<br> <br>This leads to the end shell being artificially stiff in a transverse direction, but this is acceptable in this context. | ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fig_7_2_3_0b.gif) |
| --- | --- |

[Previous](manual-versus-automatic-fitting.md)  |  [Next](four-noded-2d-seatbelt-shell-elements.md)