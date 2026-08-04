###  Creating and Editing Mechanisms

Mechanism definitions contain [Assemblies](assembly-creation-and-editing.md#edit_assembly), [Connections](connection-creation-and-editing.md#conn), [Points](nan)and [Children](child-mechanisms.md#children). They may also specify [Stretches](stretch-definitions-from-v11-onwards.md#stretch).

[Assemblies](assembly-creation-and-editing.md#edit_assembly)are collections of one or more parts and/or node sets. The parts may be any permutation of rigid or deformable.

[Connections](connection-creation-and-editing.md#conn)join assemblies together. At present PRIMER contains four connection types: [pin](connection-creation-and-editing.md#pin_joint), [hinge](connection-creation-and-editing.md#hinge_joint), [line](connection-creation-and-editing.md#line_joint)and [coupler](connection-creation-and-editing.md#coupler_joint).

[Points](nan)are optional, and any number may be defined. They are coordinates in space, "tied to" and a property of their parent assembly, that may have restraints in any combination degrees of freedom. If a local coordinate system is defined for a point then any restraints act in that system. Points may also be used to drive movement.

![](../Storage/primer-22-1/primer_links/sect_6/mechanism/fig_2.png)

[Children](child-mechanisms.md#children)are optional. They may be other assemblies or [Dummy](dummies-positioning-occupants.md#dummies)definitions, and their motion is driven by their parent mechanism. Motion is transmitted in selected degrees of freedom from parent to child.

[Stretch](stretch-definitions-from-v11-onwards.md#stretch)definitions are also optional. They allow you to define parts of the structure that are not included in the mechanism itself, but which will be "stretched" by the mechanism's movement. Typical examples might be coil springs in a vehicle suspension.

In addition from V12 onwards PRIMER will automatically determine \*DATABASE\_CROSS\_SECTION definitions that "belong to" assemblies and update their motion with those assemblies, see [Applying motion to Database Cross Sections](nan)below for more details.

Use Create.. ., Copy..., Edit... , etc to select and operate on the relevant items.

When the definition is correct use UPDATE\_MECH to save it.

[Previous](what-is-a-mechanism.md)  |  [Next](automake-automatic-creation-of-mechanisms.md)