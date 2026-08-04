The first step is to select the Randles circuits modeling scale.

![](../Storage/primer-22-1/selecting-battery-scale/new_batt_create_window.png)

Ansys LS-DYNA offers 4 different solutions to model Randles circuits within a battery cell on different scales and level of detail, as below:

| Modeling scale | Ansys LS-DYNA keyword | Characteristics | Best for |
| --- | --- | --- | --- |
| Micro | \*EM\_RANDLES\_SOLID | Detailed modeling of cell layers / Current collector nodes connected by Randles circuits | Single unit cell battery |
| Meso | \*EM\_RANDLES\_TSHELL | Cell layers modelled using composite thick shells / Layer definition required | Detailed analysis of multi unit cell battery |
| Macro | \*EM\_RANDLES\_BATMAC | Unit cell modelled as a uniform solid part / Randles circuits modelled at nodal level | Multiphysics analysis |
| Meshless | \*EM\_RANDLES\_MESHLESS | Models a floating Randles circuit / Battery internal layers not modelled | External short circuit modeling |

The selected modeling scale determines the type and number of parts used per unit cell, the span of the tabs, the tab-cell electrical connection as well as the \*EM\_RANDLES keyword used to model the Randles circuit within the battery cell.

The selected scale will be highlighted. The structure of a battery unit cell depends on the selected modelling scale as follows:

**Micro scale:**

- Each unit cell is composed of 5 solid parts defining the battery layers: Positive Current Collector (PCC), Cathode, Separator, Anode, Negative Current Collector (NCC).

- The material and thickness information need to be defined for each layer.

- The positive tab spans the positive current collector and the negative tab spans the negative current collector.

**Meso scale:**

- Each unit cell is defined as a composite tshell part, and can contain as many layers as required (repetitions of PCC, Cathode, Separator, Anode, NCC).

- The material and thickness information need to be defined for each layer.

- Both positive and negative tabs span the unit cell part.

**Macro scale:**

- Each unit cell is defined as a single solid part.

- No physical representation of the individual layers.

- Both positive and negative tabs span the unit cell part.

**Meshless scale:**

- Can be used in solitary state without being connected to any structure (steps 2 and 3 will be skipped), or in conjunction with the Macro scale structure.

- If the **Connect to macro scale structure?** option is selected then the lumped Randles circuit of meshless type will be defined between the two tabs through the \*EM\_ISOPOTENTIAL\_CONNECT keyword.

Once the **Modeling scale********is selected, click on **Next** to move to the second step.
[Previous](overview.md)  |  [Next](creating-the-layers-structure.md)