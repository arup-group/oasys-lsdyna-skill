###  Orient: An Easy Way to Set Composite Beta Aangles across Plys in a Layup

| The "Orient" panel offers several techniques with which users can set Beta angles on composites. Please note that all the options on this panel at the moment only apply to ELEMENT\_SHELL\_COMPOSITE(\_LONG) cards and if a ply contains other dyna cards, these plys are automatically filtered out and are not shown in the object menu.<br> <br>Please note that all operations done on this panel are binding, i.e they modify the actual values on the ELEMENT\_SHELL\_COMPOSITE(\_LONG) cards. | ![](../Storage/primer-22-1/primer_links/sect_6/composite/composite_20.png) |
| --- | --- |

| ![](../Storage/primer-22-1/primer_links/sect_6/composite/composite_21.png)All Operations in this tab apply to a selection of plys in a layup. The user is first presented with an object menu from which to select any layup in the model. Next This opens up an object menu will all the plys in the selected layup. The user can then select the required plys and the apply any of the orient operations to these selected plys. <br>At the moment there are four options which the user can use to set composite angles, these are:<br> <br>1. Rotate Fibres<br> <br>2. Set using Vectors<br> <br>3. Map Fibres<br> <br>4. Set Beta |
| --- |

**1. Rotate Fibres:**This option allows users to rotate the angles in the ply by the specified amount. The user has to enter the desired angle increment in degrees in the text box and use the + or - buttons to rotate the fibres
 ![](../Storage/primer-22-1/primer_links/sect_6/composite/composite_22.png)
 
**2. Set Using Vectors:**This option basically consists of options which are present in the ply panel, but form here, they can be applied to a selection of plys rather than just one. For more details on these options, please refer to the documentation on the ply panel.
 
![](../Storage/primer-22-1/primer_links/sect_6/composite/composite_23.png)
 
**3. Map Fibres:** This function can be used to interpolate fibres along map lines which can be specified by the user. The user has a choice of selecting free edges or map lines. The interpolation takes place based on the inverse (distace)^(2 x mapping parameter). The value of the mapping parameter is set to 1.5 by default but this can be changed by the user in Options -&gt; Program Options -&gt; Composites -&gt; Mapping Parameter.

**a) Free Edges:** Using the free edges option, the user can select free edges along the model by using the left mouse button. The user can select discrete sections of the model and any selection can be undone by using either the middle mouse button or the "Rej" button on the panel.

![](../Storage/primer-22-1/primer_links/sect_6/composite/composite_24.png)

**b) Map Lines:** The user can also select lines along the surface of the model using the Map lines option in conjuction with any free edges.

When you are satisfied with the selection of free edges and map lines. Click on 'Apply' which will interpolate the composite beta angles based on your selection of lines. The "Reset All Picks" button will be used to reject all free egdes and map lines and should be used only when the user wants to start the mapping process again from the beginning.

![](../Storage/primer-22-1/primer_links/sect_6/composite/composite_25.png)

**4. Set Beta:** This option can be used to directly set the value of beta angles on the entire ply.

![](../Storage/primer-22-1/primer_links/sect_6/composite/composite_26.png)

| **Composites Angle Quality Feedback**<br> <br>While setting composite ply angles through the orient panel, PRIMER warns the users if some angles have not been set or if some beta angles change direction too drastically compared to their neighbours.<br> <br>In some cases it is possible that the input map line or vector is too close to the shell normal and it is not possible for PRIMER to correctly compute the beta angles, in all these cases, the shell's beta angles remain unchanged and the offending shells are sketched in red.<br> <br>PRIMER also checks for shells which change angles too drastically compared to their neighbours and sketches these shells in yellow. The default angle for this check is set to 45 degrees, but this value can be changed by the user in Options -&gt; Program Options -&gt; Composites -&gt; Shell quality angle.<br> <br>The number of offending shells in either case is also listed in the message box in the bottom left corner of PRIMER. | **![](../Storage/primer-22-1/primer_links/sect_6/composite/composite_27.png)** |
| --- | --- |

**Composites Sketching options**

Users can now sketch composite ply angles using the previously available lines or alternatively they can now sketch them using arrows. This option can be set by the user in Options -&gt; Program Options -&gt; Composites -&gt; Sketch Method.

![](../Storage/primer-22-1/primer_links/sect_6/composite/composite_28.png)

[Previous](automake-creating-plies-and-layups-from-composite-data-in-the-model.md)  |  [Next](composites-graphics-options.md)