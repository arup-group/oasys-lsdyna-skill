###  How to Use the "INPUT VOLUME & OUTPUT HEIGHT" Panel

User has 2 options:

1. Enter single volume and get single height.
2. Simulate filling process by entering the amount of liquid added each step.

The calculation is an iterative process where volume is calculated at 50% of height of the geometry and then compared to the input value. This process is repeated until a volume within the tolerance is found. 
The tolerance value is based on either Volume or dVol textbox. Tolerance determines the boundaries in which found volume is acceptable. For example, if dVol value is 500 and tolerance is 10, then output values can vary from +/-500/10 = +/-50. Therefore, any output between 450 and 550 is possible. Tighter tolerance will lead to longer calculation times and might mean increasing Max iterations under Advanced Options panel.

![](../Storage/primer-22-1/primer_links/sect_6/volume_calc/vol_calc_07.png)

[Previous](main-panel.md)  |  [Next](how-to-use-the-input-height-output-volume-panel.md)