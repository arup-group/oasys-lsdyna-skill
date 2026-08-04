####  Connection Creation and Editing

There are four types of connection available, the first three are demonstrated here by their usage in a seat mechanism.

The examples below show how the various assemblies of a seat mechanism have been joined together with connections.

This seat has runners attached to the floor in which sliders travel fore and aft. The base is attached to the sliders by links, and the seat back to the base by a hinge at its base.
 ![](../Storage/primer-22-1/primer_links/sect_6/mechanism/conn_base.jpg)
 
#####  PIN joint 
 
Two assemblies are specified (the order doesn't matter).
 
Either a node or a coordinate is also specified at the pin location point. The coordinates of the node, or the specified coordinate, are used to define the connection point (a parametric coordinate) on both assemblies.
 
* If a node is specified it does not have to be on either assembly, but it is recommended that it is on one of them since, if its motion is not updated as the assemblies move, the connection point will move relative to the assemblies.
* If a coordinate is specified it is implicitly tied to assembly #1, and its motion will be updated with that assembly.

This joint, like all types, may be locked: [see below](connection-creation-and-editing.md#locking_joints)for an explanation of this.

The pin acts like a spherical joint, providing connectivity in Tx, Ty, Tz; but no rotational constraint in its default unlocked condition.
 
In this example a pin joint has been used to connect the link between the sliding base of the a seat and the cushion frame.
 
![](../Storage/primer-22-1/connection-creation-and-editing-2022-12-12-4.png) ![](../Storage/primer-22-1/primer_links/sect_6/mechanism/fig_pin.gif)
 
An optional \*CONSTRAINED\_JOINT\_STIFFNESS may be defined from which stop angles will be extracted to limit the extent of rotations about the three local axes of the pin, but the stiffness loadcurves on this card will be ignored and will not influence mechanism positioning. If such a definition is used side A is on assembly 1 and side B on assembly 2. (This option is primarily to support the conversion of Dummy trees to Mechanisms, but it can also be used more generally.)

##### LINE joint
 
A LINE joint connects two assemblies 1 and 2 along the line between points A and B. Either or both points may be defined by nodes (NA and NB), or by explicit coordinates.

* If nodes are used neither node has to be on either assembly, but it is best to put both on one or the other so that they move as the assemblies move.
* If coordinates are used then their position is "tied" to that of assembly A only. A single assembly is used to prevent build-up of rounding errors during positioning.

In this example a LINE joint has been used to model the sliding of the runners fore and aft in the guide rails attached to the floor.
 
![](../Storage/primer-22-1/connection-creation-and-editing-2022-12-12-5.png) ![](../Storage/primer-22-1/primer_links/sect_6/mechanism/conn_line.jpg)

**Optional assembly 3**
 
There is also the option of adding a 3rd "intermediate" assembly between the first two, with its motion specified as some proportion P of assembly #1, and implicitly (1-P) of assembly 2.
 
The most common usage of this would be when defining a roller between two assemblies (here assembly 3 in red), where the roller motion is geared to that of assemblies 1 and 2.
 
There is no "parent/child" relationship: all assemblies are equal, and any assembly can drive the motion of the other two.Motion is constrained to axis A-B, the separation shown here is artificial.
 
![](../Storage/primer-22-1/primer_links/sect_6/mechanism/fig_5a.png)
 
Motion is constrained to:
 
**Sliding along the axis A - B**

>  
> Travel is limited in both +ve and -ve directions to the permitted distances given, with the sign convention being:
>  
> +ve travel is assembly 1 moving along the vector A -&gt; B
>  
> The "current slide distance" is set to zero when the connection is first defined, and thereafter is updated as the mechanism is analysed. The permitted limits and current value can be reset manually at any time in this panel.
>  

**Rotation about axis A - B**

>  
> By default there are no limits to this rotation, as shown in this example.
>  
> If limits are defined they should be expressed in degrees, the +ve rotation in the range 0 to +180 and the -ve rotation in the range 0 to -180. Rotation will be clamped to these limits.
>  
> +ve rotation is clockwise about vector A -&gt; B using a right hand rule.
>  
> The "current rotation angle" is set to zero when the connection is first defined, and is updated and can be reset manually in exactly the same way as the translation distance - its actual value is notional.
>  
> If the "current rotation angle" value is changed it is important that any limiting rotation angles are also changed if necessary so that the -ve limit is less than or equal to the current value, and the +ve limit is greater than or equal to it.
>  

#####  HINGE joint 

A HINGE joint also connects two assemblies 1 and 2 along the line between points A and B, each point being defined either by a node or an explicit coordinate. It is exactly like the LINE joint above except that translation along the axis A-B is not permitted.

* If nodes are used neither node has to be on either assembly, but it is best to put both on one or the other so that they move as the assemblies move.
* If coordinates are used then their position is "tied" to that of assembly A only. A single assembly is used to prevent build-up of rounding errors during positioning.

In this example a HINGE joint has been used to model the seat back to seat base connection, permitting only tilting backwards and forwards about the transverse axis.
 
![](../Storage/primer-22-1/connection-creation-and-editing-2022-12-12-7.png) ![](../Storage/primer-22-1/primer_links/sect_6/mechanism/conn_hinge.jpg)
 
Only rotation about the axis A-B is permitted, within the limits specified, translation along that axis being restrained.
 
(A LINE joint with its permitted translation distances set to zero is exactly the same as a HINGE joint.)

| COUPLER joint  <br>![](../Storage/primer-22-1/primer_links/sect_6/mechanism/fig_6a.png)A COUPLER joint defines a linear equation<br> <br>c1\*(r1 or d1) + c2\*(r2 or d2) = 0 or<br> <br>c1\*(r1 or d1) + c2\*(r2 or d2) + c3\*(r3 or d3) = 0<br> <br>between rotation angles r1, r2, r3 (in radians) and/or slide distances d1, d2, d3 of two or three LINE and/or HINGE connections. For each of the connections the mode on the edit panel specifies whether it is translation or rotation in the linear equation. Only for line connections both options are available, whereas for hinge connection only rotation can be coupled. The coefficients c1, c2 and c3 are those defining the equation. In the most common case with only two connections the third connection should be left as 0 on the edit panel, and PRIMER will ignore the settings for the mode and coefficient. |
| --- |

| **Example of coupler between rotation and rotation**<br> <br>![](../Storage/primer-22-1/primer_links/sect_6/mechanism/fig_6b.png)Here the two gears are attached by hinge connections to the red base assembly, where the axes of the hinges are orthogonal to the plane of the red assembly. In the picture on the right the radius of the blue gear is three times the radius of the green gear. Therefore the rotation angle r1 of the green gear should always be three times the rotation angle r2 of the blue gear, but in opposite direction. This can be defined as a coupler with equation c1\*r1 + c2\*r2 = 0 by setting the coefficient c1 for the green gear axis to 1.0 and c2 for the blue gear axis to 3.0. For more general radii, the coefficients need to be proportional to the respective radii of the gears. Note that scaling all coupler coefficients by the same non-zero constant does not have any effect on the meaning of the coupler. |
| --- |

| **Example of coupler between rotation and translation**<br> <br>![](../Storage/primer-22-1/primer_links/sect_6/mechanism/fig_6c.png)Here the green gear is again attached to the red base assembly by a hinge with axis orthogonal to the base. The blue rack can slide horizontally, which can be defined as a line connection between the blue and the red assemblies with horizontal axis and zero stop angles. As the gear rotates by the angle r1 in radians, the blue rack should translate by a distance d2 which the teeth of the gear move by its rotation. Since angles are measured in radians here, we have got d2 = R\*r1, where R is the radius of the green gear. This can be defined as a coupler wit h equation c1\*r1 + c2\*d2 = 0, where c1 = R and c2 = 1.0 or c2 = -1.0. The correct sign will depend on the orientations when defining the hinge and line connections. |
| --- |

#####  Locking connections.

It is normally the case that connections will be required to articulate in the expected degrees of freedom while analysing a mechanism, but there are also times when it is useful to be able to lock a connection completely. For example in the seat example above you might move the fore/aft slider in its base runner to some position, and then lock it there. Another example might be a headrest which must be slid to a particular height and then locked into position.

When a connection is locked all six degrees of freedom are constrained, and the effect is as if the two assemblies on either side have been merged into a single rigid assembly.

Connections may be locked and unlocked at any time, either on the connection editing panel as shown above or on the main positioning panel when it is in "Connection list" mode.

[Previous](assembly-creation-and-editing.md)  |  [Next](point-creation-and-editing-1.md)