###  Rejecting/Applying Items that Have Been Screen-Picked

Picked items can be rejected (deselected) in exactly the same way that they were selected by using the middle and right mouse buttons. You can also "Apply" the selection. The defaults are shown below, however these are configurable in the [menu attributes panel](menu-attributes-customising-menu-size-fonts-dynamic-viewing-and-handedness.md#menu_attributes):

| Mouse Button | Default Function |
| --- | --- |
| ![](../Storage/primer-22-1/primer_links/sect_2/selection/6_2_mouse_l.gif) | ***Selects***  items: by singler pick, rectangular area, circular area or by arbitrary polygon as described above. <br>A thin, solid white line is used to define areas and polygons. |
| ![](../Storage/primer-22-1/primer_links/sect_2/selection/6_2_mouse_m.gif) | ***Rejects***  the most recent selection: "last in, first out". The picking stack remembers all picks in the current operation, and repeated middle mouse clicks will back-track up it until it is empty.<br> <br>Area (of any type) picks are rejected en-bloc, ie items selected within a single area pick are also rejected via a single middle mouse click. |
| ![](../Storage/primer-22-1/primer_links/sect_2/selection/6_2_mouse_r.gif) | ***Rejects***  : <ul> <li>What is explicitly selected (scalar pick) </li> <li>All items in the area (multiple pick) </li> </ul> <br>A thick, broken white line is used to define areas and polygons. |
|  | ***Apply Selection***  : <ul> <li>Apply the current selection (for example when picking nodes to create a CONSTRAINED_NODAL_RIGID_BODY, this option will create the entity (this can speed up the process of creation of many entities through picking). </li> </ul> <br>Note this is not assigned to a mouse button by default, but can be assigned to the middle or right mouse button via the [menu attributes panel](menu-attributes-customising-menu-size-fonts-dynamic-viewing-and-handedness.md#menu_attributes). |

| ![](../Storage/primer-22-1/primer_links/sect_2/selection/fig_6_2g.gif) | ![](../Storage/primer-22-1/primer_links/sect_2/selection/fig_6_2h.gif) |
| --- | --- |
| ***Left***  Mouse button  ***Selects***  : <br>Solid borders for areas and polygons. | ***Right***  mouse button  ***Rejects***  : <br>Broken thick borders for areas and polygons. |

[Previous](rules-applying-to-screen-picking.md)  |  [Next](area-pick-what-is-visible-when-area-or-polygon-picking.md)