###  Area Calculation

Once the data has been read the area can be calculated using the 'Calculate Area Button'.

When complete the area plot will be displayed on screen, at the Z=0 plane. The calculated area value is shown in the table:

![](../Storage/primer-22-1/area-calculation/area-calculation-2024-04-09.png)

And is also echoed to the command line:

![](../Storage/primer-22-1/area-calculation/area-calculation-2024-04-09-1.png)

The number in the centre is the actual low HIC area as calculated in model units.

The table contains a 'By # Points' measurement. This is simply the ratio of high/low HIC points as contained in the input file. It may be of interest but is not as accurate as the calculated value.

****

####  Area Calculation Method

The steps for calculating the low HIC area % are as follows:

1. Create a 'fine' grid of points based on the grid size input parameter. This is typically 10% of the input point spacing.
2. Determine which of the fine points are within the perimeter.
3. Calculate a HIC value for each of the fine grid points by interpolating from the coarse spaced input points.
4. Calculated the ratio of fine low HIC values to the total.

Note: controls for user defined perimeters and Child WAL input can be found in the Utilities tab.

[Previous](input-data.md)  |  [Next](ncap-score-calculation.md)