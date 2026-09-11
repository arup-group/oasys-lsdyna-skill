###  Using Dummies as "Children" of Mechanisms

Dummies work as components of larger models, and it is usually the case that they are positioned on a seat with their feet in the floor or pedals, and their hands may be placed on a steering wheel. These "cockpit" components may themselves be capable of articulation, and the [Mechanism](mechanism-creating-and-analysing-mechanisms.md#mechanisms) capabilities of PRIMER may, for example, have been used to set the position of the seat.

Clearly when part of the cockpit moves it is likely that the dummy will need to be repositioned, and to make this easier PRIMER permits a dummy model to be made a "child" of a mechanism, and to move with it. When operating as a child a dummy is moved in the "free dragging" mode described above, with all the positioning capabilities and settings still active. The main difference is that the motion of the dummy is driven by the controlling assembly of the parent mechanism.

In the example below the seat assembly has been defined as a mechanism, and the lower torso of the dummy has been connected to the motion of the seat cushion in degrees of freedom TX, Ty, Tz.

| **![](../Storage/primer-22-1/primer_links/sect_6/dummies/fig_posn_10.jpg)Initial state**<br> <br>User has clicked on the seat cushion and the whole mechanism (seat) plus connected dummy turn grey to denote that they are being dragged. |
| --- |
| **![](../Storage/primer-22-1/primer_links/sect_6/dummies/fig_posn_11.jpg)Intermediate state**<br> <br>The seat has moved forward and risen up on its links, taking the dummy with it. |
| **![](../Storage/primer-22-1/primer_links/sect_6/dummies/fig_posn_12.jpg)Final (very uncomfortable!) position**<br> <br>In this example the seat has been moved forward and down to a ridiculous degree, but this demonstrates two things clearly:<br> <br>(1) The dummy motion has remained linked to that of the seat.<br> <br>(2) Connection between seat and dummy is in translation (TX, Ty, Tz) only with no rotational connection.<br> <br>This is made clear by the way that the seat cushion has tilted down but the pelvis, torso and head of the dummy have not rotated. |

The use of a dummy as a child of a mechanism is controlled entirely on the Mechanism panel, described in .

Dummies can also be exported as free-standing mechanisms allowing their assemblies to be siblings rather than children within the mechanism, which can be useful when the dummy needs to interact freely with the mechanism. This is described in [Exporting Dummies as Mechanisms](exporting-dummies-as-mechanisms.md).

[Previous](batch-command-line-positioning.md)  |  [Next](exporting-dummies-as-mechanisms.md)