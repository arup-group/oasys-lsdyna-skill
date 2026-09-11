Click **Seat Settings and Belt Fitting Inputs** to open the setting panel and set maximum iterations for seat belt fitting, bolt angle tolerance, translate shoulder block in global axis, rotate lap block and more.

![](../Storage/primer-22-1/seat-settings-and-belt-fitting-inputs-2023-03-02.png)

The following options are available on the Seat Settings and Belt Fitting Inputs Panel:

| Max iterations | Max iteration to be used for seat belt fitting |
| --- | --- |
| Bolt angle tolerance | Tolerance to be used to create bolts to fix seat belts to the vehicle for seat belt anchorage tests. Default is 30 |
| Loading belt stiffness factor | Ratio between the stiffness of the belt that applies the load and the stiffness of the seatbelt itself. Default is 10 |
| Former element mass | Define value of the lumped mass which will be assigned to formers using \*ELEMENT\_MASS |
| Align shoulder block | Select automatic or manual option to align shoulder block |
| Shoulder block offset in X, Y, Z | Becomes active if manual shoulder block is selected, input translation values |
| Rotate shoulder block in X-axis | Becomes active if manual shoulder block is selected, input rotation angle |
| Absolute shoulder angle | Select if input angle is absolute |
| Rotate lap block in Y axis | Input angle to rotate lap block in Y-axis. Default is 15 |
| Lap block's belt points offset in +z direction | Set the distance to move lap block's belt points in +Z axis to remove any initial belt penetration between the lap block and seat. If left empty, the tool will automatically calculate suitable distance for offset |
| Update 1D belt length | Select update 1D belt length to provide lengths to change 1D lengths in belt definition. For 2-pt middle belt, provide length 1 and length 2 |
| Set torso points to 'Known Positions' | It acts as a constraint upon form-finding which will make the centre line of belt go through the points. Sometimes the shoulder belt might slip off centre during the fitting process and this offset in the loadpath may lead to unwanted rotation. It is advised to turn on the option |
| Create \*DATABASE cards for loading beams and belt elements | Select this option to create \*DATABASE\_HISTORY cards for the SBA loading beams and the seatbelt elements connected to them. |
| Change section and material ID's | Select this option to change the section and material ID's for seatbelt 1D, shell and pulling seatbelt part |
| Seatbelt element length | Change the length of the seatbelt in mm. The default is 8 |
| Seatbelt width | Change the width of the seatbelt in mm. The default is 40 |
| Seatbelt thickness | Change the thickness of the seatbelt in mm. The default is 1 |
| Set your own seatbelt start labels | Meshing start labels allow you to control the labels from which each of the various belt components are created. If unticked these default to the next free in layer, but may be set to any value so long as there is enough contiguous free space above them to hold all the required items. If ticked then any values set to zero or a negative value will also default to the next free in layer |

[Previous](main-input-seat-belt-anchorage.md)  |  [Next](inertia-constrains-contacts.md)