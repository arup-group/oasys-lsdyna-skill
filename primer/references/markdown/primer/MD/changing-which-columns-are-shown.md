###  Changing Which Columns Are Shown

There are many different fields that can be shown. To add or remove a column press View... which will bring up the list of field types as shown below. The fields which are currently shown will have a tick symbol next to them

![](../Storage/primer-22-1/primer_links/sect_7/parttable/parttable2.png)

####  Changing the table columns

The following columns are available for display in the part table under View...

| **Column** | **Explanation** |
| --- | --- |
| Model | Model label |
| Part ID | Part label |
| Blanking | Displays whether part is blanked or not |
| Colour | Colour of part |
| Composite | Displays YES if the part is of type PART\_COMPOSITE, otherwise displays NO |
| Composite number layers | Displays the number of layers, if the part is of type PART\_COMPOSITE |
| EQOS ID | EQOS ID part uses |
| HGLS ID | Hourglass ID part uses |
| HGLS Type | Hourglass type |
| HGLS Coeff | Hourglass coefficient |
| Include | Include file the part resides in |
| Mass (Assign lumped) | Mass added through lumped mass belonging assign mass |
| Mass (Component) | Part mass (See below) |
| Mass (Dyna Part) | Part mass (see below) |
| Mass (Lumped def) | Mass applied through lumped masses on nodes of deformable part (including assign mass) |
| Mass (NRB) | Mass of nodes of deformable part that is attributed to NRB |
| Mass (NS) | Non-structural mass (section card or \*Element\_mass\_part) |
| Mass (struct) | Structural mass (rho x vol) |
| Mass (transferred) | Mass lost/gained where node is shared by both deformable & rigid element |
| Mass (Dyna added) | Timestep Added mass (true value applicable for solid spotwelds see [appendix Q](q-mat100-dt-added-mass-for-solid-spotwelds.md#mat100_added_mass) ) |
| Mass (%added) | Percentage added mass |
| C of G | Centre of gravity |
| Mass Iner (XX YY ZZ) | Part inertia tensor |
| Mass Iner (XY XZ YZ) | Part inertia tensor |
| Mat ID | Material ID part uses |
| Mat CMO |  |
| Mat CON1 | CON1 field from any applicable rigid material card |
| Mat CON2 | CON2 field from any applicable rigid material card |
| Mat Density | Density of material part uses |
| Mat Encrypted | Displays YES if the part references an encrypted material card, otherwise displays NO |
| Mat Fail strain | Failure strain of material part uses |
| Mat Modulus | Young's Modulus of material part uses |
| Mat Title | Title of material part uses |
| Mat Type | Type of material part uses |
| Mat Yield | Yield stress of material part uses |
| Merge status | Rigid body merge status (lead or constrained part) |
| Numel | Number of elements contained within the part |
| Part Contact | Is \_CONTACTapplied to the part? |
| Part cont FS | \_CONTACT field. Static coefficient of friction |
| Part cont FD | \_CONTACT field. Dynamic coefficient of friction |
| Part cont DC | \_CONTACT field. Exponential decay coefficient |
| Part cont VC | \_CONTACT field. Coefficient of viscous friction |
| Part cont OPTT | \_CONTACT field. Optional contact thickness |
| Part cont SFT | \_CONTACT field. Option thickness scale factor. |
| Part cont SSF | \_CONTACT field. Contact stiffness scale factor |
| Part cont CPARM |  |
| Part Inertia | Is \_INERTIA applied to the part? |
| Part title | Part title |
| Part type | Type of part (shell, solid etc.) |
| Sect ID | Section ID part uses |
| Sect Elform | Element formulation |
| Sect Gauge | Gauge or thickness of part |
| Sect NIP | Number of integration points |
| Sect Title | Title of section part uses |
| Sect SHRF | Section shear correction factor |
| Smallest Elem | id & characteristic length of element with smallest characteristic length |
| Smallest TS | id & timestep of element with smallest timestep in this part |
| Stamped part | Displays whether the part is in an INCLUDE\_STAMPED\_PART definition or not |
| Style | Current style of the part |
| Transparency | Transparency status of part |
| Volume | Volume of SHELL, TSHELL, SOLID or BEAM |

####  Changing the default table columns

By default the part table will show the Part ID, Part title, Part type, Section ID, Gauge and Mat ID columns. If you want to change which columns are shown by default then [change the columns shown](changing-which-columns-are-shown.md#columnshow)to be the ones you want and press Save Settings in the View... popup. This will automatically add a preference primer\*part\_table\_columns to your home oa\_pref file with the appropriate columns.

[Previous](part-table.md)  |  [Next](selecting-rows-in-the-table.md)