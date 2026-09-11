####  PARAMETERS #1 Basic Control of the Form-Finding Process

| ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fig_7_2_3_3h.png)This panel contains controls for the form-finding process, and also the parameters for belt to structure contact that takes place during fitting. At this stage we will only consider:<br>
<br><br>
<br><br>
<br>Proj The "projection distance" which defines how far the chassis mesh is projected outwards prior to fitting.<br>
<br>The remaining controls will be discussed once the fitting process itself has been explained. |
| --- |
|  |

| ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fig_7_2_3_3i.gif) | ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fig_7_2_3_3j.gif) |
| --- | --- |

The Proj(ection) value is the distance by which the chassis mesh is lifted "outwards" from its defined position prior to fitting. The two examples above show the results of changing from the default of 25mm to 50mm.

There is no "correct" value to use, the criteria are:

* The distance must be sufficient to lift  ***all***    chassis mesh segments clear of the underlying structure so that, especially in the case of shells, they start fitting on the correct side of the elements. (Remember that the basic path has almost certainly been defined using nodes on the element mid-planes.)
* The distance must not be so great that it causes the chassis mesh to interact with unrelated bits of structure, or distorts the initial shape so much that it doesn't get pulled back onto the structure correctly.
* It is uneconomical to use excessively large values since it will require many form-finding iterations just to close the gap with the structure.

[Previous](parameter-equal-to-total-length.md)  |  [Next](special-treatment-of-fixed-segment-end-points.md)