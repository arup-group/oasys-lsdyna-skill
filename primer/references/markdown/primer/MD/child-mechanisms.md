####  CHILD Mechanisms

| ![](../Storage/primer-22-1/primer_links/sect_6/mechanism/fig_8.png)It is possible to define a mechanism or dummy that is a "child" to this mechanism. You define the following:<br>
<br>The child type (here a Dummy) and the mechanism or dummy label.<br>
<br>The parent assembly on this mechanism.<br>
<br>The degrees of freedom to be linked.<br>
<br>The assemblies on the "child" to be linked via these degrees of freedom to the parent assembly. Here the Lower Torso, Thorax and Head & Neck have been linked.<br>
<br>Child mechanisms may be nested to any level (child has child has child ...). Dummies may not have children.<br> <br>**Warning**: Mechanisms may not be recursive.<br> <br>This means that a mechanism may not refer to itself as a child either directly (mechanism A has child mechanism A) or indirectly (mechanism A has child B which itself has child A). A moment's thought will reveal why this should be so: a mechanism cannot "drive" its own motion!<br> <br>PRIMER will detect any attempts to create recursive mechanisms and report this an error; the positioner will also reject recursive mechanisms. |
| --- |

| Linked degrees of freedom of children  <br>PRIMER offers two related but different ways of constraining the motion of the child to its parent.<br> <br><br>| ![](../Storage/primer-22-1/primer_links/sect_6/mechanism/fig_8a.png) | Linked degrees of freedom: Tx, Ty, Tz and All rot . <br> <br>The effect of these is similar to \*CONSTRAINED\_NODE\_SET in that the chosen degrees of freedom of the parent assembly are imposed on the child. Any permutation of the translational DoFs (Tx/y/z) and/or all rotational DoFs may be chosen. (Linking of individual rotational DoFs is not supported.) |<br>| --- | --- |<br>| ![](../Storage/primer-22-1/primer_links/sect_6/mechanism/fig_8b.png) | Fully locked  <br> <br>The effect of this is like \*CONSTRAINED\_RIGID\_BODY : the child assemblies are merged into the parent one to form a single | |
| --- |
| The effect of translation is easy enough to understand, and the two methods have the same effect in pure translation, but there are important differences between these two methods where rotations are concerned. In particular:<br> <br>Selecting all linked degrees of freedom ( Tx , Ty , Tz and All rot ) is  ***not the same as***  using Fully locked . The following figures explain why.<br> <br><br> ![](../Storage/primer-22-1/child-mechanisms/child-mechanisms-2023-07-18-2.png)<br><br> <br>When rotational degrees of freedom are linked the rotation of the parent is imposed on the child, but no translation arises from this.<br> <br>A good way of thinking about this is to consider the parent and child assemblies to be connected by a chain, like the pedals and back wheel of a bicycle. Rotating the pedals causes the back wheel to rotate, but has no tendency to try to lift it into the air. |
| ![](../Storage/primer-22-1/child-mechanisms/child-mechanisms-2023-07-18-3.png)<br> <br><br><br>When the parent and child are fully locked then the child is both rotated and translated by the motion of the parent since they are effectively a single rigid body. |
| Why have the two alternative linking methods?  <br>Although Fully locked might at first sight appear to be the logical choice, experience has shown that when constraining dummies to seats the most natural behaviour is obtained if only the translational degrees of freedom ( Tx , Ty , Tz ) are linked. This is because any rotation of the seat cushion is not transferred to the dummy, which can remain in its upright position looking straight ahead even if the seat tilts underneath it. |

#####  How Child Mechanisms & Dummies work

When a child is constrained to a parent mechanism the motion of the parent assembly is imposed on the child assemblies in the degrees of freedom specified as described above.

During analysis the motion of the parent assembly is computed and then applied to the child assemblies. There is feedback of force from the child to the parent, so movement of the parent will be constrained if it tries to push the child against a restraint. However in other respects it is a one-way treatment: moving child assemblies will not cause the parent mechanism to move.

This is best demonstrated by example. Here a Dummy has been positioned in a cockpit, on a seat, and the dummy is a child of the seat linked in Tx, Ty, Tz.

| ![](../Storage/primer-22-1/primer_links/sect_6/dummies/fig_posn_12.jpg) <br>In this example the seat has been moved forward and down to a ridiculous degree, but this demonstrates two things clearly:<br> <br>(1) The dummy motion has remained linked to that of the seat.<br> <br>(2) Connection between seat and dummy is in translation (Tx, Ty, Tz) only.<br> <br>This is made clear by the way that the seat cushion has tilted down but the pelvis, torso and head of the dummy have not rotated.<br> <br>A more detailed exposition of the use of a Dummy as a Child of a mechanism is given in section [6 . 14 .4 Using dummies as "children" of mechanisms](using-dummies-as-children-of-mechanisms.md#child), from which this image is taken. |
| --- |

[Previous](visualising-points-1.md)  |  [Next](stretch-definitions-from-v11-onwards.md)