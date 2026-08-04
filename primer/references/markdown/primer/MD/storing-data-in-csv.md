The data from all 5 steps can be stored in a CSV file through the **Write** **CSV** button in the *Analysis panel*, and imported back in a future session using the **Read CSV** button in the *Geometry & Scale panel*. The file can be selected by either writing its path in the textbox or using the file selector, and clicking on **Read CSV** imports the data.

![](../Storage/primer-22-1/storing-data-in-csv/storing-data-in-csv-2024-10-08.png)

The format for the CSV input is in the following order:

| Scale |
| --- |
| Connect meshless to macro? |
| Layers dimensions |
| Origin mode - Node - x coord - y coord - z coord |
| Layers Meshing mode - el numb x - el numb y -el numb z - el size x - el size y - el size z |
| Layers per unit cell - unit cell repetitions x - separation x -common sections - create EM\_MAT - unit cell repetitions y - separation y |
| PCC material - thermal material - thickness - conductivity |
| Cathode material - thermal material - thickness - conductivity |
| Separator material - thermal material - thickness - conductivity |
| Anode material - thermal material - thickness - conductivity |
| NCC material - thermal material - thickness - conductivity |
| Unit cell material - thermal material - thickness - pos conductivity - neg conductivity |
| Tabs position - x len - y len - separation - alternate x - alternate y |
| Tabs meshing mode - el numb x - el numb y - el numb z - el size x - el size y - el size z - NRBC |
| Positive tab material - thermal material - conductivity |
| Negative tab material - thermal material - conductivity |
| Connected isopotentials - Free isopotentials - Inter-cell connections flag - Inter-cell connections mode - Wire resistance |
| Randles area - cell capacity - initial SOC - SOC conv factor - OCV type - OCV cst - OCV curve |
| Randles order - Global defninition type? - Global defninition type |
| Charge defninition type for R0 - R1 - C1 - R2 - C2 - R3 - C3 |
| Discharge defninition type for R0 - R1 - C1 - R2 - C2 - R3 - C3 |
| Charge constants for R0 - R1 - C1 - R2 - C2 - R3 - C3 |
| Charge constants for R0 - R1 - C1 - R2 - C2 - R3 - C3 |
| Charge curves for R0 - R1 - C1 - R2 - C2 - R3 - C3 |
| Discharge curves for R0 - R1 - C1 - R2 - C2 - R3 - C3 |
| Randles temp mode - temp - temp unit - curve - joule heating |
| Randles SOC shift mode - damping time - FLCID |
| \*CONTROL\_SOLUTION flag - analysis type |
| \*CONTROL\_TERMINATION flag - term time |
| \*CONTROL\_TIMESTEP flag - init time step |
| \*CONTROL\_THERMAL\_TIMESTEP flag - time step |
| \*CONTROL\_THERMAL\_SOLVER flag - analysis type - problem type |
| \*EM\_CONTROL flag - FEM cycles - BEM cycles |
| \*EM\_CONTROL\_TIMESTEP flag - time step |
| \*EM\_OUTPUT flag - matrix assembly out - solver out |
| \*EM\_RANDLES\_EXOTHERMAL flag - area type - function |
| \*EM\_RANDLES\_SHORT\_CIRCUIT flag - area type - function |

Below is an example of a csv file written for a Micro scale model.

![](../Storage/primer-22-1/storing-data-in-csv/batteries_csv_new.png)

The CSV format is the same regardless of the selected scale mode or definition type (for the charge/discharge values for example) and includes all parameters from all 5 steps. Parameters that do not apply to the selected mode will either be set to their default or not contain any value.

On import, PRIMER will read in all the provided values and pre-populate the fields in all 5 panels. If an invalid value is detected, an error message will be printed to the PRIMER dialogue box stating the invalid value and the corresponding CSV line number. It will also set any missing or incorrect values to their default. Once imported, you can then continue the process as usual and you will still be able to edit any of the values through the user interface.

[Previous](creating-or-activating-analysis-keywords.md)  |  [Next](saving-battery-definition-data-to-the-keywords-file.md)