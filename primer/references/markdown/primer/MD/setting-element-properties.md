####  Setting Element Properties

| Before elements can be generated PRIMER must know what properties (Part ids, etc) to assign to the elements. | ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fig_7_2_3_4l.png) |
| --- | --- |

Therefore it is necessary to select an existing property, or create a new one for the relevant class(es) of element. The following colour scheme is used for these buttons:

| **Red** | The property has not yet been defined. |
| --- | --- |
| **Orange** | The property has been defined, but a check shows errors or warnings |
| **Green** | The property has been defined and checks cleanly. |

If a property is required but has yet to be defined that button will have a red background, and the GENERATE button will be greyed out until it has been selected or created.

Properties not required will have their button greyed out.

| This panel shows the 1D seatbelt element create/ edit box.<br> <br>The user is required to give a part ID, this can either be typed in directly or selected/created via the part pop-up box. Information about the section and material properties from the part to be used are shown below the part ID.<br> <br>There is also the option of setting the element-specific "slack length" value.<br> ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fig_7_2_3_4m.gif) |
| --- |

| This panel shows the shell property creation/editing box.<br> <br>As above, a part ID is required to be set. Here one has been selected and the properties are displayed below the ID. The update\_property button has now been made active.<br> <br>The shell element specific data, (variable thickness at nodes and beta angle) is not used here.<br> <br><br> <br>This panel is also used for 2D Seatbelt Shell elements which, despite being defined as \*ELEMENT\_SEATBELT are in fact shells and must have the following attributes:<br> <ul> <li>A <span class="courierbold">*PART </span>card unique to this seatbelt shell definition. <br> <br> </li> <li>A <span class="courierbold">*SECTION_SHELL </span>( <i> <b>not </b> </i> <i class="courierbold">_SEATBELT </i>) definition that is unique to the part. Since the shells are used only for contact purposes the properties on this card are not structurally significant, however a sensible thickness should be used and a membrane formulation (type 5) is recommended. <br> <br> </li> <li>A <span class="courierbold">*MAT_SEATBELT </span>card. It is recommended that this too is unique to the <span class="courierbold">*PART </span>definition above. </li> </ul> <br>Unique definitions are required because of the extra work performed in the Ansys LS-DYNA keyword reader to "track down" the belt and generate 1D belt, slipring and retractor elements. It gets confused if multiple belts used the same basic definitions.<br> ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fig_7_2_3_4n.gif) |
| --- |

[Previous](navigating-the-meshing-panel-between-segments.md)  |  [Next](create-reference-geometry.md)