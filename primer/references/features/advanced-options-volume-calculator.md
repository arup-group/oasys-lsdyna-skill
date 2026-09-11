###  Advanced Options

![](../Storage/primer-22-1/primer_links/sect_6/volume_calc/vol_calc_03.png)

Line options panel (red) is for line visualisation when draw lines option is checked in the previous window. 
Text option panel (yellow) is for label visualisation when draw lines checkbox is enabled in the previous window.

Line options and text options panels work in the same way. The user is able to choose colours and size of the text or width of the lines. Furthermore, the user can specify colours and whether the colours are random or constant. If random is chosen for both lines and text then the text and lines will be the same colour at each level.

Calculate panel (green) is for Input volume & Output height options. Max iterations determines the limit of the iterative process per dVol value.

####  Local Coordinate Systems

The local coordinate system section is for choosing or creating local coordinate systems or for rotating the global system which would only have an impact on the calculation (the actual global coordinate system will stay the same).

![](../Storage/primer-22-1/primer_links/sect_6/volume_calc/vol_calc_09.png)

Note: Z axis will determine the direction of calculation and xy-plane will define the resting liquid surface. 
User has two options:

1. Rotate the global system locally (has no effect on the model).
2. Choose or create their own defined local coordinate system.

First option will rotate the global coordinate system around the specified axis. The rotation is done locally. It will work only around one axis at a time. For example, if the user rotates X-axis 30 degrees and then decides to rotate the Y-axis, the X-axis rotation will go back to 0 degrees. 
Second option of choosing or creating a local coordinate system means that the user can pick a coordinate system they have created. The coordinate system can be based on nodes, vectors or system. If a local coordinate system is selected, then the user can go back to global by pressing the Reset to Global button.

![](../Storage/primer-22-1/primer_links/sect_6/volume_calc/vol_calc_10.png)

[Previous](how-to-use-the-input-height-output-volume-panel.md)  |  [Next](xrefs-cross-references-viewer.md)