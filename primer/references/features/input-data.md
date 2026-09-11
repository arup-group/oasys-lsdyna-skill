###  Input Data

The 'Read Data File' button allows you to select a text file containing the pedestrian head impact results.

The format of the file is:

*X coordinate, Y coordinate, Z coordinate, HIC value, [Name], [Path], [User Data 1], [User Data 2], ... , [User Data n]*

The data can be comma separated, tab separated or space separated and may also be prefixed with 'data' for compatibility with D3PLOT. The name field and path fields are optional but not including them will result in some loss of functionality.

Path is the full file path to the head impact keyword file (as submitted to Ansys LS-DYNA).

User data can be any numeric data (e.g. displacement or force values), the data is not used directly within PRIMER but is available for colouring as part of the T-HIS linked functionality. More details on this can be found in section .

In addition to the HIC data above it is possible to include additional information, which helps PRIMER to locate data for reading into D3PLOT and T-HIS. More details on this can be found in section .

Points are sorted into types based on the first letters of their name:

* C = Child
* A = Adult
* B/W = Cyclist

Once read, PRIMER will display the data on screen. PRIMER calculates a perimeter that encloses all of the data points. The shape of the perimeter can be modified using the arrow buttons located in the calculation parameters section (the number is the maximum allowable length of perimeter section and can be modified by clicking the middle button).

![](../Storage/primer-22-1/input-data/input-data-2024-04-09-2.png)

![](../Storage/primer-22-1/input-data/input-data-2024-04-09-1.png)

****  .

[Previous](introduction-hic.md)  |  [Next](area-calculation.md)