####  Move Points: Movement Driven by Updated Point Positions

![](../Storage/primer-22-1/primer_links/sect_6/mechanism/mode_3.gif)

An alternative to dragging with the mouse is to set new target positions for points. As described [above](nan)any number of points can be defined in an assembly, and used both to apply localised restraint and to drive movement.
 
In this example a point has been created in the seat base, acting as a reference point for movement.
 
It can be moved by any combination of the following three methods:
 ![](../Storage/primer-22-1/primer_links/sect_6/mechanism/fig_13.gif)

| Move to pos'n | Will move the point  ***to***  the new coordinate specified |
| --- | --- |
| Move by delta | Will move the point  ***by***  the specified distance [dx.dy,dz] |
| Move to node | Will move the point  ***to***  the position of the chosen node. |

In all cases the effect is similar to dragging with a mouse, with the difference that PRIMER will drive the iterative scheme for you to try to achieve the new position.
 
Iteration will continue either until the target point is reached, or the changes between successive iterations become insignificantly small. The latter is necessary since, obviously, it is possible to set a target position for a point that cannot be achieved because of restraints.
 
#####  Using wild-card coordinates for movement of positions
 
It is sometimes the case that you want to move a point a certain distance along one axis, but not to constrain its movement along other axes. To allow for this PRIMER permits the following "wild-card" as opposed to"explicit" coordinate entry syntax.

| Values entered explicitly as zero mean exactly that. Therefore |
| --- |
| >  <br>> [ *Move by delta* ] 100.0 0.0 0.0<br>> | Means "move by 100 in X, but try not to have any movement in Y or Z." |
|  |  |
| Omitted trailing values, or values entered as an asterisk "\*" are taken to mean "not constrained". Therefore |
| >  <br>> [ *Move by delta* ] 100.0<br>> | Means "move by 100 in X, but don't care about movement in Y or Z" |
| > [ *Move by delta* ] \* \* 100.0 | Means "move by 100 in Z, but don't care about movement in X or Y" |

The same syntax may be used for absolute [ *Move to pos'n* ] coordinate entry.
 [Previous](drag-assemblies-free-dragging-of-assemblies.md)  |  [Next](connection-list-editing-locking-and-moving-connections.md)