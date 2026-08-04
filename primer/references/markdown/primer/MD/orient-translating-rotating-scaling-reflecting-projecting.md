##  ORIENT Translating, Rotating, Scaling, Reflecting, Projecting

|  | The ORIENT command is invoked from the MAIN top box, to give the master panel shown in this figure.<br><br><br>![](../Storage/primer-22-1/primer_links/sect_6/orient/tools_orient.png)<br><br><br><br>There are currently six types of orientation available:<br> <br><br>| [TRANSLATE](translate-shifting-by-dx-dy-dz.md#631TRANSLATE) | shift by global vector, n1-&gt;n2, or normal to plane |<br>| --- | --- |<br>| [ROTATE](rotate-rotating-by-x-y-z.md#632ROTATE) | rotate about global or local axes |<br>| [REFLECT](reflect-reflect-about-an-axis.md#copyandreflect) | reflect about a distance [d] down a given axis. |<br>| [SCALE](scale-scale-by-sx-sy-sz.md#634SCALE) | factor nodal and other coordinates by [Sx,Sy,Sz] |<br>| [PROJECT](project-project-to-a-line-plane-or-surface.md#636PROJECT) | project nodes to line or plane or mesh surface |<br>| [TRANS-ROT](trans-rot-translate-and-rotate.md#637TRANSROT) | translate and rotate in one operation |<br><br> <br>There are also links to two other orient related features in PRIMER:<br> <br><br> ![](../Storage/primer-22-1/primer_links/sect_6/orient/fig_6_3_1.gif)<br><br><br><br><br>| [NODE DRAG](node-defining-nodes.md#dragnodes) | drag node interactively and mesh optimisation |<br>| --- | --- |<br>| [OFFSET](offset.md#offset) | offset shells | |
| --- | --- |
|  |

Normally just the selected items are oriented by the amount specified. It is also possible to [INTERPOLATE](the-interpolate-command.md#635TheINTERPOLATEcommand)movement to achieve other effects.

## ORIENT precision

All orient operations involving transformations are carried out using double precision (64 bit) arithmetic giving roughly 15 decimal digits of precision.

Nodal coordinates and inertia tensors are stored in double precision inside PRIMER so their accuracy should be preserved. Some other coordinate values are only read and stored in single precision so although the transformation itself may be performed at high precision the results will only give about 7 decimal digits of precision.

Input and display of data on the ORIENT panel itself uses double precision arithmetic although for ease of use values are typically shown with a maximum of 10 significant figures. To be clear values input with more significant figures than that are read and used at their full precision, it is only the echoed display of them which may be truncated.

If full precision display is required in the GUI then Options, Program options, Precision may be used to change the number of significant figures shown in GUI panels.

![](../Storage/primer-22-1/orient-translating-rotating-scaling-reflecting-projecting/orient-translating-rotating-scaling-reflecting-projecting-2025-04-01.png)
[Previous](node-import.md)  |  [Next](orient-in-a-local-system.md)