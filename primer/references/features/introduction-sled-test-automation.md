###  Introduction

This regulation deals with test of strength of the seat anchorage and the adjustment, locking and displacement systems of the vehicle.

The seat anchorage and the adjustment, locking and displacement systems must be able to withstand a longitudinal horizontal deceleration of not less than 20g applied for 30 milliseconds in the forward/rear direction to the whole of the vehicle.

The tool creates a rigid plate on which vehicle will be mounted and set up the analysis as per the regulation ECE-R17.

The following figure shows the main input panel of the tool:

![sled main panel](../Storage/primer-22-1/primer_links/sect_6/safety/sled/main.png)

The following options are available on the main input panel:

| Settings file | A settings file may be read or written which will save specifying inputs repeatedly. The reading/writing of a settings file is optional. |
| --- | --- |
| Use default rigid plate | Select this option to create a default rigid plate which will be positioned at bottom of the vehicle. A longitudinal horizontal deceleration will be applied on bottom rigid plate in the forward/rear directions. |
| Select rigid plate | Alternatively, use this option to select an existing bottom rigid plate on which vehicle is mounted. |
| Bottom rigid plate | An existing bottom rigid part on which vehicle is mounted. |
| Import rigid plate | Or, you can use this option to import a rigid plate include file (.key) into the model. |
| Select rigid plate (.key) | The rigid plate include file(.key) will be imported into the model and plate will be positioned at bottom of the vehicle. |
| Create Bndy Prescribed Mot. | Select to create a \*BOUNDARY\_PRESCRIBED\_MOTION card for bottom rigid plate. |
| Acceleration direction | Load direction. |
| Use default acc. curve file | Select if you wish to use default acceleration curve which will be used in the \*BOUNDARY\_PRESCRIBED\_MOTION card. |
| Impot accl. curve csv file | Select this option to import an acceleration curve file in CSV format which will be used in the \*BOUNDARY\_PRESCRIBED\_MOTION card. |
| sfa | Acceleration load curve scale factor for abscissa value. By default, it is set to 1. |
| sfo | Acceleration load curve scale factor for ordinate value. By default, it is set to 1 |
| Units | Specify the units system of the selected model. |

[Previous](seat-pos-final-seat-and-model-output.md)  |  [Next](constrain-the-vehicle-sled-test-automation.md)