###  Introduction

The strength of the rear seat needs to be tested to protect the occupants against displacement of luggage during vehicle impact. The rear seat must be able to withstand a static test load simulating luggage impact. ECE-R17 is one of the tests that provide the assurance of sufficient strength resistance of the rear seat.

The luggage retention tool creates a plane for luggage masses to slide on and  positions the luggage blocks of type-1 and type-2 if the seat-back is fitted with a head restraintis according to ECE-R17 specification. The tool will also set up the analysis as per the regulation.

The following figure shows "Main input" panel of the tool:

![luggage retention main panel](../Storage/primer-22-1/primer_links/sect_6/safety/luggage/main.png)

The following options are available on the main input panel:

| Settings file | A settings file may be read or written which will save specifying inputs repeatedly. The reading/writing of a settings file is optional. |
| --- | --- |
| R-point | R-point is the relative location of the seated dummy's hip point when the seat is set in the rearmost and lowermost seating position. |
| Create bottom plate | Select if you wish to create a bottom rigid plate part on which vehicle will be mounted. A longitudinal horizontal load shall be applied to the bottom rigid plate. |
| Select bottom plate | Use this option to select an already existing bottom rigid plate in the model on which vehicle is mounted. A longitudinal horizontal load shall be applied to the bottom rigid plate. |
| Ceate bndy prescribed motion | Select if you wish to create a \*BOUNDARY\_PRESCRIBED\_MOTION on the bottom rigid plate. |
| Blockage part set | Select a part set that luggage blocks should not impinge on |
| Seatback+Bottom part set | Select a part set consisting of PART(s) that makes up the rear seat excluding head restraint components |
| Head rest part set | Select a part set comprising of head restraint parts. |
| Use partitioning system | Select if the vehicle has a partitioning system (for examplke a net) which prevents luggage from sliding. |
| Partition part set | Select a part set consisting of partitioning systems including net part. |
| Position TYPE-2 Blocks | Select if you wish to position TYPE-2 test blocks. By default, it will be OFF. |
| Units | Specify units system of the selected model. |

[Previous](introduction-lstc-dummy-conversion.md)  |  [Next](constrain-the-vehicle.md)