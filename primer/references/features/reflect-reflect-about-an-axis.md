###  REFLECT: Reflect about an Axis

Reflections take place about one of the global X, Y or Z axes, about a plane at a specified distance down that axis.

To use it:

* Select the objects to reflect.

* Pick an axis: X Y or Z

* Define a distance, or use  **PICK**  to use a nodal coordinate to define the reflection plane distance.

* Use  **APPLY**  to make the reflection happen.

As before the image is drawn showing the new configuration, and you can accept, reject or repeat the transformation.

****
 **![](../Storage/primer-22-1/primer_links/sect_6/orient/fig_6_3_3.gif)**
 **** 

| Notes on REFLECT: <ul> <li>At present reflection may only take place about global axes. </li> </ul><ul> <li> <em> <strong>IMPORTANT </strong> </em>: A reflection is <em> <strong>NOT </strong> </em>the same as a rotation by 180 degrees! </li> </ul> <br><br>>  <br>> Reflection not only moves coordinates, but also reverses the topology ordering of elements with 3 or more nodes so as to preserve their local axis systems (and +ve volume in the case of 3D elements). Whereas rotation by 180 degrees just moves the coordinates. So although the results may look similar they can have different properties.<br>>  <br><br><ul> <li> <i> <b>NEGATIVE SCALE </b>: </i>PRIMER treats negative scale (SCX * SCY * SCZ &lt; 0) as reflection i.e. the topology of elements <b>is reversed </b>. This change was necessitated by the fact that *INCLUDE_TRANSFORM can only encode a reflection as a -ve scale and Ansys LS-DYNA does reverse the topology in this case (otherwise it would not work with 3d elements). </li> </ul> |
| --- |

[Previous](rotate-rotating-by-x-y-z.md)  |  [Next](scale-scale-by-sx-sy-sz.md)