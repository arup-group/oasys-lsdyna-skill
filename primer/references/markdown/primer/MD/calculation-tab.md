###  Calculation Tab

The calculation tab contains the choice of calculation method and associated settings:

![](../Storage/primer-22-1/calculation-tab/calculation-tab-2024-04-09.png)![](../Storage/primer-22-1/calculation-tab/calculation-tab-2024-04-09-1.png)

You must select whether to use a GTR area based calculation or NCAP based scoring.

**For GTR:**

The low HIC area % is calculated using the given low HIC value. The high HIC value is not used in the calculation but is used to identify the 'red' areas in the tri-colour plots. Both HIC values can be changed and the plot/result will update automatically. The fine grid size, as explained, in [Calculation Method](area-calculation.md#calc_method)can also be changed. Smaller values of grid size will result in longer computation time and are not necessarily more accurate.

**For NCAP:**

Yellow, orange, brown and red banding values are shown and can be edited. Each NCAP regulation awards a maximum number of points, which can also be edited.

For NCAP no area calculation is required. Instead the output is a simple blob plot corresponding to the colour bands.

**For both regulations:**

It is possible to scale the limits using the scale factor text box. Scale factors are applied to the current regulation only, meaning applying a scale factor to both regulations would require entering it twice. Additionally scale factors are applied to the current limits, not the original values. This means a factor of 0.5 followed by 0.1 would result in a net factor of 0.05 not 0.1.

The red 'Res' button will reset the limits back to their original values.

Limits can be saved as oa\_preferences from the Utilities tab.

[Previous](display-options.md)  |  [Next](points-tab.md)