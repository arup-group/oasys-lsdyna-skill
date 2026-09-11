###  What is a "Dummy"?

A "dummy" is simply a collection of ordinary nodes, elements, materials, etc. but with the extra property that a \*DUMMY definition has been created for it. This is a special set of additional data which defines how the parts of the dummy are connected together, and in what order. It is described fully in [Appendix B.i](bi-dummy-tree-file-format.md), but the key points are:

* A dummy is made up of a series of "assemblies", each of which contains one or more parts and node sets. For the purposes of positioning each assembly is assumed to move as a rigid body, although its definition may include both rigid and deformable components for the purposes of analysis. There is a limit of 100 assemblies per dummy.
* Assemblies are connected together in a hierarchy, in which "parent" and "child" relationships are strictly defined. For example the torso is "parent" to the upper leg, which in turn is "parent" to the lower leg, which is "parent" to the foot; thus the foot is a "child" of the lower leg, and great-grandchild or the torso.
* Introduced in PRIMER V17.0, a child dummy assembly can have multiple parent assemblies, one parent with a regular X/Y/Z rotational connections, others with a PIN/LINE/HINGE connection. If this feature is used that part of the dummy can only be positioned as a "mechanism", and not by explicit angular rotations. More on this [here](drag-assembly-free-dragging-of-limbs-using-mechanism-analysis.md#drag_assembly_multiple).
* Generalised Stiffness definitions between assemblies define the (local) axes a child may rotate about with respect to its parent, and a node must also be specified which gives the position on the parent about which the child rotates.
* The "root" part, generally the lower torso or pelvis, is assumed to rotate about the dummy "H-Point".
* Dummies may have a coordinate system defined, in which the angles of the "root" part are expressed, if none is defined then the dummy is assigned a system which is initially aligned with the global cartesian system. This system will be rotated as the dummy as a whole is rotated.

Dummies may constitute separate models, or may be part of a complete structural model, it makes no difference. \*DUMMY definitions are appended to the file after the \*END keyword, and so are ignored by the analysis code.

[Previous](dummies-positioning-occupants.md)  |  [Next](creating-and-editing-dummies.md)