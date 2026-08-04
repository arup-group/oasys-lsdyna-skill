###  Using the Mesh Volume Analysis Tool

Firstly, the user has to select a part or parts. It can be either be a shell or a ready-made solid part. The part needs to have closed geometry. Mesh density has an impact on calculation times. If it is a fine mesh, then calculations will take longer. 
If the user selects a shell part the part will be copied into a new model, then a tetmesh will be generated based on the element size user inputs, the suggested element size is based on the average minimum shell length\*3.5. Calculation will be based on each of the solid tetrahedron in the solid mesh.

![](../Storage/primer-22-1/primer_links/sect_6/volume_calc/vol_calc_01.png)
 
When a solid is selected, then a similar window will pop up but the user has to define shell thickness. Then the outer layer will be defined as a midsurface.

[Previous](volume-calculator.md)  |  [Next](main-panel.md)