####  Move Points: "Free" Movement Driven by Updated Point Positions

![](../Storage/primer-22-1/primer_links/sect_6/dummies/position-panel-move-mode.png)

| An alternative way of using the "free" dragging mode is to set new target positions for points. As described [before](nan) any number of points can be defined in an assembly, and used both to apply localised restraint and to drive movement.<br> <br>In this example two points have been created on the left hand, providing an alternative way of fixing it to the steering wheel which permits rotation about the axis through the two points. (Note that the 2nd points has a local coordinate system, so the fixity buttons are in green and "local" appears as a reminder that they are acting in the local system.)<br> <br><br>| **Move to pos'n** | Will move the point to the new coordinate specified |<br>| --- | --- |<br>| **Move by delta** | Will move the point by the specified [dx.dy,dz] |<br>| **Move to node** | Will move the point to the position of the chosen node. |<br><br><br>In all cases the effect is similar to dragging with a mouse, with the difference that PRIMER will drive the iterative scheme for you to try to achieve the new position.<br> <br>Iteration will continue either until the target point is reached, or the changes between successive iterations become insignificantly small. The latter is necessary since, obviously, it is possible to set a target position for a point that cannot be achieved because of restraints. | ![](../Storage/primer-22-1/primer_links/sect_6/dummies/fig_posn_9.gif) |
| --- | --- |

#####  Using wild-card coordinates for positions. 
 
It is sometimes the case that you want to move a point a certain distance along one axis, but not to constrain its movement along other axes. To allow for this PRIMER permits the following "wild-card" as opposed to"explicit" coordinate entry syntax.

| Values entered explicitly as zero mean exactly that. Therefore |
| --- |
| > [*Move by delta*] 100.0 0.0 0.0 | Means "move by 100 in X, but try not to have any movement in Y or Z." |
|  |  |
| Omitted trailing values, or values entered as an asterisk "\*" are taken to mean "not constrained". Therefore |
| > [*Move by delta*] 100.0 | Means "move by 100 in X, but don't care about movement in Y or Z" |
| > [*Move by delta*] \* \* 100.0 | Means "move by 100 in Z, but don't care about movement in X or Y" |

The same syntax may be used for absolute [ *Move to pos'n* ] coordinate entry.

[Previous](drag-assembly-free-dragging-of-limbs-using-mechanism-analysis.md)  |  [Next](further-positioning-commands.md)