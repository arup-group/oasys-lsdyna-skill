###  Coat Face

This option allows users to coat specific solid faces with shells/segments. Two additional options are available for coating solid faces:

* **Propagate** - Users are directed to pick a face on any solid or shell element, and the associated break angle. All faces on that element and on adjacent elements that define an angle with the selected face that is less than the break angle are coated. This is the default mode for the **Coat Face** option.
* **Single Face** - The selected face on a solid element is coated. All other faces are ignored.

| **Coating with shells:**<br> <br>Part to create shells in may be an existing or new part in which the "coating" shells will be created. This can be any valid part, with "null" or ordinary structural materials.<br> <br>Three options are available for coating element faces with shells:<br><ul> <li> <b>External faces </b>- For 3D elements, shells are created on topologically external faces of the selected elements. These would be faces that would be visible if no elements of this type were blanked. </li> <li> <b>Exposed faces </b>- For 3D elements, shells would be created on the exposed faces of the selected elements. These would be the elements that would be visible if all but the selected elements were blanked. </li> <li> <b>All faces </b>- All selected faces including internal faces will be coated. </li> </ul> | **Coating with segments:**<br> <br>Set for segments. By default the highest+1 set id will be displayed. The user may select any existing set or type in the id of a new one. In the former case the new segments will be added (without duplication) to the set.<br> <br>Three options are available for coating element faces with segments:<br><ul> <li> <b>External faces </b>- For 3D elements, segments are created on topologically external faces of the selected elements. These would be faces that would be visible if no elements of this type were blanked. </li> <li> <b>Exposed faces </b>- For 3D elements, segments would be created on the exposed faces of the selected elements. These would be the elements that would be visible if all but the selected elements were blanked. </li> <li> <b>Visible faces </b>- For both 2D and 3D elements, segments are created on only those faces that are visible in the current view. </li> </ul> |
| --- | --- |

Once the parts have been defined APPLY creates shells/segments.

**NOTE:** Segment sets may also be created through SET-&gt;SEGMENT-&gt;CREATE-&gt;COAT ELEMENTS option.

Multiple (coincident) coatings may be applied to a part by calling this function repeatedly - any existing shells attached to solid faces are ignored.

[Previous](coat-elements.md)  |  [Next](coat-example.md)