###  Ply Options

![hey](../Storage/primer-22-1/primer_links/sect_6/composite/composite_10.png)On the Ply panel it is possible to modify the material assigned to the ply (MID), the thickness (THICK) or the contents of the ply. The contents of the ply is defined by a set of shells, by pressing Contents on the COMPOSITE PLY edit panel, a classic set edit panel appears, user can from there add/remove elements from the definition of the ply.
 
Another option available from this edit panel is to set the Beta angle to the elements of the Ply, this option is at the bottom of the panel, the different methods are explained below.
 
### 

| To set an angle to the elements of a Ply there is different methods, three differents shell selection and three differents way to assign the angle.<br> <br>Shell Selection:<br> <br>- whole ply: the angle will be set to all elements of the ply<br> <br>- elements without angle: the angle will be set to all elements of the ply which hadn't already got an angle assigned (example, elements newly added in a ply)<br> <br>- selected elements: the angle will be set to every elements the user has selected<br> <br>Beta Angle Method:<br> <br>- from global vector: the fiber direction will be the projection, on the element, of the global vector typed in the textbox at the bottom of the panel.<br> <br>- from element: allows the user to pick an element and duplicate the fiber direction of this element to others.<br> <br>- from MCID vector: the fiber direction will be the projection, on the element, of the vector, expressed in material local coordinates (available only from certain types of materials), typed in the textbox at the bottom of the panel.<br> <br>After selecting the method and the angle press the red button Apply setting angles so it will assign the new angle to the elements selected. To check if the result is as expected Sketch the ply.<br> <br>Following are some examples:<br> <br>Below, first image is a sketching of the ply and fiber direction before setting the angle. In the second user is setting angle to the whole ply from global X vector. The last image is after setting the angle. |
| --- |
| ![](../Storage/primer-22-1/primer_links/sect_6/composite/composite_11.png) |

| Below, first image is a sketching of the ply and fiber direction before setting the angle. In the second user is setting angle to the element in green from global XY vector. The last image is after setting the angle. |
| --- |
| ![](../Storage/primer-22-1/primer_links/sect_6/composite/composite_12.png) |

| Below, first image is a sketching of the ply and fiber direction before setting the angle. In the second user is setting angle to the whole ply from the elements in green angle. The last image is after setting the angle. |
| --- |
| ![](../Storage/primer-22-1/primer_links/sect_6/composite/composite_13.png) |

[Previous](create-a-composite-layup.md)  |  [Next](layup-options.md)