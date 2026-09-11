#####  Parameter Equal to Total Length

This is optional. If defined it gives a parameter name (as defined by the \*PARAMETER keyword) that will be updated with the total length of the as-meshed belt each time it is generated. This can be referred to elsewhere, typically in \*ELEMENT\_SEATBELT\_SENSOR , to update attributes in accordance with the revised belt length. See [Parameter to contain the total seatbelt length](actually-creating-the-finite-element-mesh.md#length_param) for more details.

######  Add _Sn parameter for each segment

###### 

As an extension to the above if this option is selected each segment of the belt will have its length assigned to a separate parameter, which can be used in any context.

To save having to define multiple names these parameters are given the name of the total length one above with "\_s1", "\_s2", etc added for segments #1, #2, etc. For example:

| Nomenclature of per-segment parameters if parameter for total length is called **BLEN** |
| --- |
| Segment 1 | **BLEN\_S1** |
| Segment 2 | **BLEN\_S2** |
| ... etc for all belt segments. |

Parameter names may not exceed 9 characters in normal Ansys LS-DYNA format, or 19 characters in long format. Therefore the name of the total length parameter will be truncated if necessary when adding " **\_S *n***  " suffices in order to stay within these limits. For example if the total length parameter is " **beltlen** " then the parameter for segment #1 will be called " **beltle\_s1** " in normal format.

| The following pairs of figures show alternative cases of no (seatbelt only) and 3 shell rows:<br> <br><br>| ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fig_7_2_3_3d.gif) | ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fig_7_2_3_3e.gif) |<br>| --- | --- |<br>| ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fig_7_2_3_3f.gif) | ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fig_7_2_3_3g.gif) |<br>| #rows =0: The seatbelt element only case | #rows =3: Three shells across width | |
| --- |

[Previous](dimensions-setting-width-length-etc.md)  |  [Next](parameters-1-basic-control-of-the-form-finding-process-1.md)