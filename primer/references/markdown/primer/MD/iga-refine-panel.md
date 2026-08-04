The figure shows the IGA refine panel. It can be accessed from IGA\_SHELL, IGA\_FACE\_XYZ or IGA\_2D\_NURBS\_XYZ. The refine panel allows you to manipulate and visualise the IGA\_SHELL. You can:

* Visualise knot grids
* View Interpolated elements
* Change the curve degree
* Insert knot values

![iga_refine_1](../Storage/primer-22-1/primer_links/sect_5/iga/iga_refine_1.JPG)

#### Visualise knot grid

The NURBS elements (or knot segments) can be visualised by enabling the Display Knot toggle button.

![iga_refine_3](../Storage/primer-22-1/primer_links/sect_5/iga/iga_refine_3.JPG)

#### View Interpolated elements

The interpolated elements based on NISR and NISS values can be visualised by enabling the View Interpolated Elems toggle button.

You can change NISR/NISS values and it will show Interpolated elements based on the current value in the panel. If you press Update after changing NISR/NISS, it should also change on the IGA\_SHELL definition referenced by IGA\_2D\_NURBS\_XYZ.

You can also enable the Trim option to view trimmed interpolated elements.

![](../Storage/primer-22-1/primer_links/sect_5/iga/iga_refine_6.JPG)

#### Change the curve degree (p-refinement)

The refine panel lets you change the basis function degree which will result in control points being added or removed. The degree can be changed by typing in the new value in the PR/PS textboxes. Feedback regarding how many new knots and coordinates will be added is given in the panel in the feedback box above the NID, NR, NS, etc. fields.

NOTE: It is only possible to reduce the degree by one at a time (e.g., from p to p-1)

#### Insert knot values (h-refinement)

There are two methods to add a knot.

For the first method, type a knot value in the r-Knot Value/s-Knot Value text box and press Insert r-Knot/Insert s-Knot.

For the second method, press Screen Pick Knot to pick a knot value from the screen by clicking on the blue line (shown below). Use left mouse click to pick a knot and the selected value gets updated in the refine panel. Alternatively, use right mouse click to select and insert a knot value (make sure to put the cursor over the blue curves when right clicking otherwise you will get a warning "Nothing close enough"). The right mouse click should insert a knot at the selected point without any need to click the insert button.

Feedback regarding how many new knots and coordinates will be added is given in the panel in feedback box above NID, NR, NS, etc. fields.

NOTE: Screen pick knot can only be done from one panel at a time.

![iga_refine_4](../Storage/primer-22-1/primer_links/sect_5/iga/iga_refine_4.JPG)

[Previous](iga.md)  |  [Next](sketching-trimming-loop.md)