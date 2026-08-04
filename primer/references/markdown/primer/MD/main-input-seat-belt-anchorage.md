###  Introduction

A seat belt system needs to be tested to make sure it functions properly during a vehicle impact. Seat belt anchorages must be able to withstand a static test load simulating vehicle impact.

ECE-R14 is one of the tests that provide the assurance of sufficient strength resistance of all anchorage points. The PRIMER SBA (seat belt anchorage analysis) tool positions the appropriate loading devices (lap block and shoulder block), attached with a seat belt system at the R-point in the vehicle and sets up the analysis according to the ECE R14 specification.

The following figure shows the "Main input" panel of the SBA tool:

![](../Storage/primer-22-1/main-input-seat-belt-anchorage/main-input-seat-belt-anchorage-2025-05-07.png)

The following options are available on the main input panel:

| Settings file | A settings file may be read or written which may include mandatory information and other data required for seat positioning. |
| --- | --- |
| Seat selection | Choose the seat being tested – Right, Middle or Left. |
| Middle seatbelt type | If middle seat has been selected in the Seat Selection Input, then choose 2 or 3 point belt system for the middle<br>seat from the drop-down box. The default value is 2. |
| Seatbelt connection method | Bolt hole: Create bolt for each anchorage to join the end of the belt to the seat/body.<br>Rigid patch: Use Rigid patches on the BIW for each anchorage to join at the end of the belt to the seat/body.<br>Constrained extra nodes: Create \*CONSTRAINED\_EXTRA\_NODES for each anchorage to join the end of the belt to the seat/body. |
| Formers directory | A formers directory may be selected so you can use your own impactors. If this input is left blank, the default directory will be used. Please ensure your impactors do not contain \*INCLUDE. |
| R-point | R-point is the relative location of the seated dummy's hip point when the seat is set in the rearmost and lowermost seating position. |
| Seat data input | Select ‘Seat with foam’ or ‘Seat without foam’. For seat with foam, provide part set for bottom and back foam separately. For seat without foam, provide part set comprising of all the parts that might effect positioning of the impactor. |
| Fix lap points | This is applicable to seat without foam. If this option is ON, seat belt points will be fixed on lap block. |
| Point B1 | B1 is the point on B-Pillar. |
| Point B2 | B2 is the point on B-Post. |
| Point S1 | S1 is the point on the buckle side. |
| Point E | E is the point at the end. |
| Rigid patch part/Node set at B1 | Either specify rigid patch part to merge (if rigid patch is selected) or node set to CONSTRAINED at B1 (if extra\_node<br> <br>is used for connection). |
| Rigid patch part/Node set at B2 | Either specify rigid patch part to merge (if rigid patch is selected) or node set to CONSTRAINED at B2 (if extra\_node<br> <br>is used for connection). |
| Rigid patch part/Node set at S1 | Either specify rigid patch part to merge (if rigid patch is selected) or node set to CONSTRAINED at S1 (if extra\_node<br> <br>is used for connection). |
| Rigid patch part/Node set at E | Either specify rigid patch part to merge (if rigid patch is selected) or node set to CONSTRAINED at E (if extra\_node<br> <br>is used for connection). |
| Input load keyword | Choose between \*LOAD\_NODE and \*BOUNDARY\_PRESCRIBED\_MOTION\_NODE (using curve smooth) for the input<br> <br>load keyword. |
| Vehicle category | Select a Vehicle category from the drop down box. This will automatically update the load on blocks and inertia<br> <br>load as per the specification. |
| Load on blocks | Load input on lap and shoulder block. |
| Units | Specify unit system of the selected model. |

[Previous](how-rigidify-will-flag-items-for-deletion.md)  |  [Next](seat-settings-and-belt-fitting-inputs.md)