###  Notes on Using Dummy Angles

There are some problems with the way GENERALIZED\_STIFFNESSES have been programmed into Ansys LS-DYNA. These all arise from the method of defining joint rotations as angles about the three Cartesian axes on the "parent" side of the joint, often referred to in literature as "Euler angles".

* Where rotations take place only about one axis then there is no problem: the current angle as reported by PRIMER will be the simple cumulative sum of all rotations to date about that axis.
* However where rotations are permitted about more than one axis then life becomes more difficult since the order in which Euler angles are applied matters in two related ways:
    1. A rotation about Phi, followed by one about Theta and then one about Psi will not give the same result as applying the same rotations in a different order
    2. Once the current rotation about any one angle is non-zero then rotations about any other axis will result in some compound set of rotations that may not be the expected numerical sum of rotations about the individual axes. 
 
(To demonstrate this try the following: set the initial view in PRIMER to a plan on XY [SXY], then compare rotations of 90 degrees about screen X, then Y, then Z [RS 90 0 0], [RS 0 90 0], [RS 0 0 90] against the same rotations in the order Z,Y,X.)
* Therefore the reported angles for assemblies free to rotate about all "parent" axes may not be the simple cumulative sum of the incremental rotations about each axis.

To understand this requires some explanation of how "Euler angles" are used inside PRIMER , and also of how it computes and maintains the current orientation of dummy assemblies.

####  Euler angles in PRIMER

In the following discussion the [Phi, Theta, Psi] angle notation used by the \*CONSTRAINED\_JOINT\_STIFFNESS card in Ansys LS-DYNA will be referred to as [X,Y,Z]. This easier to write and also to understand!

#####  The order in which PRIMER applies Euler angles

PRIMER treats a [X,Y,Z] compound angle definition as a set of rotations that it applies in the order X, Y, Z. To be more specific:

>  
> If the rotation matrix about X is written [Rx], and those about Y and Z as [Ry] and [Rz] 
>  
> then a single compound matrix [Rc] is assembled from [Rz] . [Ry] . [Rx]
> 

This looks counter-intuitive, but in fact when concatenating rotation matrices the effective order of rotations is right to left, ie the most recently applied rotation matrix (here [Rx]) is effectively the first rotation; thus the matrix above does indeed give rotations in the order X, Y, Z.

If you read up about Euler angles and robotics you will find that there are other possible application orders, but this is in many ways the simplest and most intuitive, so it is what PRIMER uses!

#####  The current orientation, and computing updated Euler angles from this

Internally PRIMER keeps track of each assembly's orientation using "direction cosines", which are effectively a local coordinate systems expressed by three vectors at right angles. When a Dummy is first read into PRIMER these direction cosines are initialised for each joint, taking into account any initial angular differences implicit in the \*CONSTRAINED\_JOINT\_STIFFNESS definition.

When an assembly is rotated the compound rotation matrix [Rc] described above is applied about the "parent" node, resulting in some new orientation, and these direction cosines are updated accordingly, so that they always maintain an accurate description of the assembly's orientation with respect to its parent.

The angles reported in the Dummy assembly rotations panel, and those used in the Dummy Angles File, are calculated from these direction cosines and  ***not***  from some cumulative sum of applied angular rotations. There are two reasons for this:

1. Using a "cumulative sum" only works for rotations about a single axis; once rotations about all three axes are permitted then rotations quickly get jumbled up together. Therefore such an approach would not work for those assemblies (typically head and leg components).
2. Dummy assemblies may be moved arbitrarily during the "drag" mode positioning process, resulting in a large number of small incremental displacements and rotations. Not only would it be expensive to keep track of these, but it would also lead to a considerable cumulative error due to adding small increments to a (relatively) large running total.

In cases where rotation is about only one axis then the angles derived from the direction cosines will match those that would be computed from a "cumulative sum", but once rotation becomes significant about 2 or more axes then the values will differ. To see why this should be consider the rotation matrices required to build up the full matrix of direction cosines.

| **[Rx]: Rotation about the X axis:**  <br> Sx = Sin(theta X)  <br>Cx = Cos(theta X) | **[Ry]: Rotation about the Y axis:**  <br> Sy = Sin(theta Y) <br> Cy = Cos(theta Y) | **[Rz]: Rotation about the Z axis:**  <br> Sz = Sin(theta Z) <br> Cz = Cos(theta Z) |
| --- | --- | --- |
| | [ | 1 | 0 | 0 | ] |<br>| --- | --- | --- | --- | --- |<br>| [ | 0 | Cx | -Sx | ] |<br>| [ | 0 | Sx | Cx | ] | | | [ | Cy | 0 | Sy | ] |<br>| --- | --- | --- | --- | --- |<br>| [ | 0 | 1 | 0 | ] |<br>| [ | -Sy | 0 | Cy | ] | | | [ | Cz | -Sz | 0 | ] |<br>| --- | --- | --- | --- | --- |<br>| [ | Sz | Cz | 0 | ] |<br>| [ | 0 | 0 | 1 | ] | |

Concatenating these together in the order [X, Y, Z], ie [Rz] . [Ry] . [Rx] gives the compound matrix [Rc]:

| [ | Cy.Cz |  | Sx.Sy.Cz - Cx.Sz |  | Cx.Sy.Cz + Sz.Sz | ] |
| --- | --- | --- | --- | --- | --- | --- |
| [ | Cy.Sz |  | Sx.Sy.Sz + Cx.Cz |  | Cx.Sy.Sz - Sx.Cz | ] |
| [ | -Sy |  | Sx.Cy |  | Cx.Cy | ] |

From which it can be seen that a set of Euler angles can be extracted as follows (using the notation &lt; ij &gt; is row &lt; i &gt;, column &lt; j &gt;)

Theta X = arctan(32/33) Since (Sx.Cy / Cx.Cy) = (Sx / Cx)  
Theta Y = arcsin(-31) 
Theta Z = arctan(21/11) Since (Cy.Sz / Cy.Cz) = (Sz / CZ)

However there are four well known problems with this calculation method:

1. The rotation about the Y axis, theta Y, can only be obtained in the range +/-90 degrees from the arcsin() operation.
2. At the special case of Theta Y very close to +/-90 degrees, ie Cy = 0, the calculation of the rotations about the other two axes is ill-conditioned. To see why, here is the [Rc] matrix above with Cy = 0: 

    | ![](../Storage/primer-22-1/primer_links/sect_6/dummies/gimbal_lock_eqn.png) | ![](../Storage/primer-22-1/primer_links/sect_6/dummies/gimbal_lock.png) |
    | --- | --- |
    | Clearly the arctan() operations will be upon (0/0) for both theta X and theta Z, ie undefined.<br> <br>This situation is analagous to "gimbal lock" in a 3 axis gyro-compass: the special case when the outer (X, red) and inner (Z, green) gimbal axes become co-planar with the middle (Y, blue) axis. |
3. If rotation has taken place about more than one axis then the angles returned from this calculation will not necessarily be the same as those input, although the result of multiplying through by them to achieve a new orientation will be correct.
4. As mentioned above the rotation order [X, Y, Z] is implicit in this calculation, and combined rotations about 2 or more axes in a different order will give a different result. (Although, again, it will give a consistent result when used to orient a dummy or limb.)

PRIMER deals with these problems as follows:

1. If rotation takes place about the Y axis only, or nearly so, (ie theta X and theta Z both less than +/- 10 degrees) then special exception logic is used to calculate theta Y in the full range of +/-180 degrees. Therefore dummy limbs which are locked in X and Z rotation may be rotated safely in the full Y range.
2. The ill-conditioning problem is treated by using double-precision arithmetic, and relying on the (sensible) behaviour of the standard atan2() function near these singularities. In practice this solves the problem in virtually all cases, although rotations of exactly +/-90 degrees about the Y axis should still be avoided if at all possible if stop angles are to be used.
3. Compound rotations about multiple angles are calculated as described above, and a rational set of angles that matches these cosines is returned, even if it is not what you input in order to create them. This does not normally matter unless "stop angles" have been defined, in which case these will become increasingly unreliable as the angular movement of the assembly departs from its initial orientation.
4. The "order of combined rotation" problem is really the same as (3) above, and is treated in the same way.

In all cases the angles reported are "correct", in that if they were applied to the initial reference position of the assembly they would give the current orientation, however they may not be what you expect. Perhaps a good way of thinking about this is to consider a journey across the earth's surface defined by increments of both latitude and longitude: your input would be a series of "rhumb line" increments, whereas your position would in fact be reported as the "great circle" angles required to get there. In addition if you travelled around the world, and approached your start position again, the angles returned would be those of the "shorter" distance, possibly negative, rather than the "longer" ones travelling around the globe.

Realistically "stop angles" will only work properly for joints that are only permitted to rotate about a single axis, in which case they can be computed unambiguously in the full +/-180 degree range.

#####  Achieving explicit Euler angles in the positioning panel

Once again, if rotation is only to be about a single axis then what you type in will be what you get reported back. However if you want to type in an explicit set of angles about multiple axes you may find that you don't get what you expect. The best solution to this "composite angle" case is to proceed as follows:

1. "Undo" any current angles in the order Z, Y, X. In other words set Theta Z to zero, then Theta Y, then ThetaX; in this way you will get back to angles (0.0, 0.0, 0.0).
2. Set the new angles in the order X, Y, Z. In this way they will not "interfere" with each other.

It follows from this that if you want to modify just one angle of an existing set you will be able to do so directly if:

* It is theta Z (ie the last cumulative one to be applied).
* Or the rotations applied "after" it are zero. 
 
So if you want to rotate about Y you will be able to get away with simple typing if theta Z is zero. If it isn't then it will be necessary to reset theta Z to zero, apply the new Y angle, then restore the original theta Z value.

[Previous](exporting-dummies-as-mechanisms.md)  |  [Next](measure-beams-orientation.md)