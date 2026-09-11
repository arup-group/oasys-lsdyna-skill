####  Load Translation Options

Translate All allows the user to request all or none of the load cases defined in the SAP2000 ascii file to be translated.

Self Weight As? allows the self weight of the model to be represented in either of two ways: PNTL (POINT LOADS) where each node in the model that has weight associated with it will have a point load applied to it loading in the negative (downward) Z direction, or GRAV (GRAVITY) where the loading is applied as a gravity acceleration to the mass of the model. Use the self weight scale factor to multiply by the gravitational constant (i.e. 9.81 m/s2) for the GRAV option. The PNTL / GRAV option is chosen by invoking a pop-up box with the right mouse button.

![](../Storage/primer-22-1/primer_links/appen_6/sap2000/sap_fig_07.gif)

A Global Scale Factor for all load cases can also be set in this window. Note that each load case that is selected for translation will be multiplied by the product of its own individual scale factor and the global scale factor.

The names of all load cases that are not empty are printed in a list in the panel. If there are more than 10 load cases then a slider will be created to enable the user to scroll through the load cases. Each separate load case can be selected and deselected by changing the load Status to YES (select) or NO (deselect). Where a load is selected for translation, an individual Scale Factor can be typed directly in. If the load is not selected, then the individual scale factor will be greyed out.

Once happy with the chosen options, the CONTINUE button should be pushed to complete the analysis.

[Previous](frame-translation-options.md)  |  [Next](translator-functionality.md)