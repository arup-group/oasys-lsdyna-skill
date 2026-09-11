####  Applying Motion to *DATABASE_CROSS_SECTION Definitions

From release 12 onwards PRIMER will automatically find \*DATABASE\_CROSS\_SECTION definitions in a model that "belong to" a mechanism assembly, and will update its motion as the assembly moves. In order to belong to and assembly a cross section must obey the following rules:

| **Rules that a \*DATABASE\_CROSS\_SECTION must satisfy to "Belong to" a Mechanism assembly** |
| --- |
| It must be of type \_PLANE | Sections of type \_SET are ignored by the mechanism positioner because they don't have an explicit location. <br> <br> (You can still use sections of this type and they will be carried through to the analysis, but because their location is determined by the nodes and elements that define them the positioner does not have to worry about them. In fact they may be a good solution if you want a cross section to include nodes and elements in multiple assemblies.) |
| It must have part set PSID defined. | Sections with PSID = 0 , ie all parts in the model, are ignored. |
| At least one part in set PSID must be in this assembly, and other parts must either be in this assembly or not in any assembly in this mechanism.<br> <br>Shell parts referencing \*MAT\_NULL are omitted from this check. | If no parts are in this assembly it is ignored. If parts are in both this assembly and also one or more other assemblies in this mechanism then motion is ambiguous so the section will be ignored. |

If a section has parts in more than one assembly in this dummy then a warning is issued prior to positioning, and you are given the option of "cloning" the section into as many definitions as necessary to create sections that are unique to each assembly. Each "clone" is a new section definition that is geometrically identical to the original, but in which PSID only contains the subset of parts present in a given assembly. These clones can be positioned with their respective assemblies since their motion is no longer ambiguous, but the original section definition (which is left unchanged) will not be moved.

By default "move cross-section with assembly" is on, but you can turn it off in the [Options panel](options-0.md#options)of the positioner. You also have the option of turning it off if the pre-positioning warning detects sections spanning multiple assemblies. This on/off status is recorded in the dummy section of the keyout file - see [Appendix B.i](bi-dummy-tree-file-format.md#Dummytreefile) for details.

[Previous](stretch-definitions-from-v11-onwards.md)  |  [Next](automake-creating-mechanisms-automatically.md)