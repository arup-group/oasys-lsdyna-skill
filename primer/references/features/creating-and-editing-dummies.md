###  Creating and Editing Dummies

![](../Storage/primer-22-1/primer_links/sect_6/dummies/modify_dummy_panel.PNG)Dummy definitions contain [Assemblies](assemblycreation-and-editing.md) and [Points](point-creation-and-editing.md).

[Assemblies](assemblycreation-and-editing.md) are collections of one or more parts, which may be any permutation of rigid or deformable, that make up body components (torso, head, limbs, etc.).

[Points](point-creation-and-editing.md) are optional, and any number may be defined. They are coordinates in space, "tied to" and a property of their parent assembly, that may have restraints in any combination degrees of freedom. If a local coordinate system is defined for a point then any restraints act in that system.

[Points](point-creation-and-editing.md) may also be used for positioning: if a new coordinate if specified for a point then the "free drag" positioning algorithm will move the dummy accordingly.

[Stretch](stretch-definitions.md) definitions allows parts of the structure are not part of the dummy to be reshaped ("stretched") by interpolating from the motion of the dummy's assemblies.
 
In addition from V12 onwards PRIMER will automatically determine \*DATABASE\_CROSS\_SECTION definitions that "belong to" assemblies and update their motion with those assemblies, see [Applying motion to Database Cross Sections](applying-motion-to-database-cross-section-definitions.md) below for more details.
 
Use Create..., Copy..., Edit..., etc. to select and operate on the relevant items.
 
When the definition is correct use UPDATE\_DUMM to save it.
 [Previous](what-is-a-dummy.md)  |  [Next](assemblycreation-and-editing.md)