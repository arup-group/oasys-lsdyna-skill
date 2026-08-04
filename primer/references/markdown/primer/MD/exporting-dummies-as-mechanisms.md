### Exporting Dummies as Mechanisms

Although a dummy definition can be included as a child of a mechanism this is a one-way treatment in which motion of the mechanism can "drive" articulation of the dummy, but not the other way round. In addition only one connection between parent mechanism and child dummy is permitted which is not adequate when the dummy needs to interact more generally during positioning.

For example when positioning a dummy on a bicycle you will probably need to connect the dummy to the bicycle at five different places:

* 2x hands on handlebars
* 2x feet on pedals
* 1x buttocks on seat

![](../Storage/primer-22-1/bike+dummy.png)

If the motion of the legs is to drive the pedals around and the hands are to turn the steering the "dummy is a child of the mechanism" approach described in the previous section will not work. Rather the dummy and bicycle assemblies need to be siblings, equal in priority, and able to connect with one another in an arbitrary fashion.

The =&gt; Mech button on the top-level assembly panel allows any dummy to be converted to a mechanism.

![](../Storage/primer-22-1/dummy-panel-import-mech.png) ![](../Storage/primer-22-1/exporting-dummies-as-mechanisms-2022-12-12-2.png)

The process works as follows:

* Assemblies are added verbatim but have their "child" assembly information removed.
* Mechanism connections are added between assemblies to reproduce the tree connectivity of the dummy.

Connections permitted to move in more than one degree of freedom are modelled as mechanism PIN joints. If a \*CONSTRAINED\_JOINT\_STIFFNESS definition is used to limit movement in some local coordinate system ("stop angles") this is copied over and will limit rotation about the pin in the mechanism in the same way.

Connections limited to rotation about a single degree of freedom are modelled as mechanism HINGE joint. If joint stiffness definition is used to define stop angles these will use the existing angular limits in the mechanism to limit rotation.
* Stretch definitions are copied over verbatim and will act in the same way.

A new mechanism will be created using the next free label for mechanisms in this model. The mechanism will be entirely free-standing and independent of the dummy, the existing dummy definition will be unchanged. Since both dummy and mechanism refer to the same underlying elements and nodes either can be used to articulate the model, but to avoid confusion it is best to use only one method.

Dummies may also be imported directly into mechanisms. This is described under [Mechanisms, Importing Mechanisms and Dummies.](importing-mechanisms-and-dummies.md)
[Previous](using-dummies-as-children-of-mechanisms.md)  |  [Next](notes-on-using-dummy-angles.md)