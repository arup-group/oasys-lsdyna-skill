#####  Adding Cross-Sections

| ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fig_7_2_3_2f10.png)It is possible to add a CROSS\_SECTION definition at any path point, including retractors, sliprings and ends. This does not affect the geometry of the path, but during the meshing stage a \*DATABASE\_CROSS\_SECTION definition will be created at that point. Its attributes will be:<br>
<ul style="font-size: 14.6667px;"> <li>It is required to have a label, therefore it will use the&#160;<span class="courierbold">_ID&#160;</span>suffix.<br><br></li> <li>The type of&#160;<span class="courierbold">*DATABASE_CROSS_SECTION&#160;</span>created depends on the type of belt elements it cuts.<br><br> <ul> <li>Cutting shells or 2D seatbelt elements creates a&#160;<span class="courierbold">_SET&#160;</span>definition in which&#160;<span class="courierbold">SSID&#160;</span>is a set of elements (2D belt elements are really shells), and&#160;<span class="courierbold">NSID&#160;</span>is a set of nodes at one end of those elements.<br><br></li> <li>Cutting 1D belt elements requires the&#160;<span class="courierbold">_PLANE&#160;</span>variant to be used since Ansys LS-DYNA does not contain the concept of a set of 1D belt elements, however the 1D seatbelt element has a part, therefore it can be placed in part set PSID.<br><br>The origin of the plane will be at the centreline of the belt half way through the &quot;next&quot; element beyond the path point. This location is chosen in order to give a well-conditioned intersection, as cutting elements exactly at mesh lines can cause problems.</li> </ul> </li>
</ul> |
| --- |

The image here shows cross-sections near the pelvis slipring on a belt meshed with a mixture of 1D belt elements and shells. It can be seen that in the 1D region the sections are circular planes, normal to the direction of the belt; in the shell region they are defined by sets of shells and nodes.

| Database cross-sections meshed on belts are automatically given titles of the form:<br> <br>[ISO standard prefix][Belt id] [Path point id] [Path point type if relevant] [Distance from that point].<br> <br>For example here is a menu of database cross-sections generated for the mesh in the picture above. | ![](../Storage/primer-22-1/adding-cross-sections/x_sect_titles.png) |
| --- | --- |

######  Special rules for cross-sections defined at end, fixed, retractor or slipring path points. 
 
The belt path editor permits you to define a cross-section at a "cusp" point in the belt: end, fixed, retractor or slipring locations. Obviously locating a section exactly at such a point would not work since either it would not intersect an element (belt end point), or it would lie exactly on the border between two elements (intermediate / slipring point). Therefore in order to obtain a well-conditioned cut the following logic is used:

| **End point**  <br>(Fixed end or retractor) | A single cut section is located, by default half an element length into the belt. |
| --- | --- |
| **Intermediate point**  <br>(Acute fixed point or slipring) | Two cut-sections are created, one on each side of the point. By default these points are offset by varying amounts as described below. |

Offsets from points are necessary at slipring locations where locating the sections 1/2 an element either side of the slipring would result in the "upstream" one being pulled through to the other side as the belt tightened. Offsets may also be defined at other points.
 
Offsets are defined in the fitting panel using X-Sect Offsets
 
The default offsets are split into four categories.

| **B-Post slipring** | Generates 2 sections, one each side, by default at approximately +/-200 from the point. |
| --- | --- |
| **Free (pelvis) slipring** | Generates 2 sections, one each side, by default at approximately +/-150 from the point. |
| **Meshed slipring** |
| **Retractor** | Generates a single section with a default offset of zero. |
| **End point** | Generates a single section with a default offset of zero. |

The actual locations of cross-sections will always be at the mid-point of the row of elements closest to the desired location. For example even though the offset it zero at an end point the section will be located 1/2 element length into the belt.
 
This also means that the location of sections with a finite offset will be at the 1/2 element location nearest to the requested distance from the point, and not exactly at the requested offset distance.
 
In the example above an offset of 80mm from the pelvis slipring was set, and it can be see that the actual locations of the sections as reported in their titles was 84.7mm before (-ve) and 75.7mm after (+ve) the slipring location.
 
The offsets values can be defined in the **X-Sect Offsets** panel.
 
![](../Storage/primer-22-1/adding-cross-sections/x_sect_main_menu.png) ![](../Storage/primer-22-1/adding-cross-sections/x-sect_menu.png)

New X-Sections created using this opion will automatically include a prefix in their titles (the ‘Automatic’ option in ‘Additional pre text’) , following these ISO standard prefixes:

* B1: Just outside the retractor
* B2: Prior to the D-loop
* B3: Between the D-loop and the shoulder
* B4: Before the pelvis slipring
* B5: After the pelvis slipring
* B6: At the end of the lap belt

All other points that aren’t fixed will have prefixes like O1, O2. The **Additional pre-text**option in the X-Section panel lets you specify your own pre-text for X-section titles or remove the default ISO prefix. You can select from the following pre-text options:

* **None**: No pre-text will be added, and the ISO standard prefix won’t be included in the title.
* **Automatic**: The pre-text will be based on the ISO standard as outlined above (Default).
* **Custom**: You can define your own pre-text in addition to the automatic one.

You can set your own preferences for this feature if you want a specific type all the time using the primer\*belt\_xsec\_naming\_convention and primer\*belt\_xsec\_custom\_pre\_text preferences.

The **Auto-refit title update** option gives you the ability to manage how the titles of cross sections are updated during an Auto-refit. You can select from the following options:

* **Update default**: This updates the default title but retains any pre and suffix text previously created. It will update the ISO standard prefix, Belt id, Path point id, Path point type (if relevant), and Distance from that point, but will keep any additional text that was added before and after the default title (Default).
* **Replace old**: This option removes the old title and replaces it with the new default title.
* **Keep old**: This option copies the old cross section title to the new cross section. This is only possible if the number of X-sections remains the same during the refit, and it will reuse the old X-section titles for the newly created titles.

You can set a preference for this feature if you want a specific type all the time using the primer\*belt\_refit\_xsec\_rename preference.
[Previous](handling-acute-points.md)  |  [Next](the-advanced-editor-mode.md)