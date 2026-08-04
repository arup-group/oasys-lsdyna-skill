###  IDEAS (Master Series) Universal File Format

This section shows which Ansys LS-DYNA keywords are supported, and how they are translated to entities in an I-DEAS universal file.

PRIMER uses the same conventions as N/CODE for the universal file so N/CODE can be used to re-translate the universal file back into a keyword deck.

PRIMER carries out several checks when writing a universal file to ensure that there are no problems when importing the universal file into I-DEAS.

These are:

* I-DEAS needs unique labels for every element. During output of the universal file PRIMER will check and fix any element clashes which occur, printing a warning about what has been renumbered. If this happens the model in PRIMER is renumbered, not just the output in the universal file. If you do not want the elements renumbered in your original Ansys LS-DYNA deck then ensure the keyword deck is saved before writing the universal file.

* I-DEAS does not allow Physical names longer than 40 characters in the universal file and does not allow duplicate names. As Ansys LS-DYNA allows part names up to 72 characters long there is a potential problem with names being duplicated. PRIMER truncates any part names in the Ansys LS-DYNA deck to 36 characters and then checks to see if any duplicate part names exist. If there are duplicates then '\_1' is added to the first duplicate, '\_2' to the second etc. to ensure names are unique.

* Node sets in I-DEAS (used for rivets, spotwelds, constrained node sets and generalised welds) need an independent node and at least one dependent node. PRIMER checks to see if any have been defined that use less than 2 nodes. If any have a warning is displayed and the node set is not translated.

* Springs in I-DEAS master series do not allow a material to be associated with them. To deal with this when translating a universal file to a Ansys LS-DYNA keyword deck N/CODE attempts to create a material with the same id as the physical id. This can cause problems so when PRIMER creates a universal file it checks any parts which contain discrete elements. If a material already exists with the same id as the discrete part then the part is renumbered so that N/CODE will not encounter any problems. This renumbering will not occur if the discrete part refers to a material with the same id.

    The universal file import in PRIMER is very basic. At present only nodes and elements are read. To read data from a universal file N/CODE should be used to create an Ansys LS-DYNA keyword deck. This can then be read into PRIMER.

####  Supported keywords 

    | \* | Materials. Structural and thermal material tables are written to the universal file (module 773). In addition to the structural materials dummy materials are written for lumped masses, sliprings, retractors, joints, stonewall plates, contact surfaces and airbag segments. Materials for conventional elements get written as isotropic materials with null properties. Materials for springs get written out as null materials with no properties. |
    | --- | --- |
    | \* | Physical property tables (module 772 for I-DEAS V, module 778 for I-DEAS VI). Solid, beam, shell, thick shell, seat belt properties are written. The property number in I-DEAS is created from the part number in the Ansys LS-DYNA keyword deck. Dummy physical properties are written for lumped mass, slip rings, retractors, joints, extra nodes on rigid bodies, stonewalls, contacts and airbags |
    | \* | Beam cross section properties (module 776) are written for rectangular or circular section Hughes-Liu beams. A, I , I and J are written for Belytschko-Schwer beams |
    | \* | Nodes |
    | \* | Solid, beam, shell, thick shell, discrete and lumped mass elements are all translated (module 780) |
    | \* | Seat belts, retractors and sliprings are translated as green, read and blue rod elements (module 780) consistent with N/CODE |
    | \* | Contact surfaces defined by either parts or segments are translated (module 2417). Groups are created in I-DEAS called CONTACT\_SURFA\_n and CONTACT\_SURFB\_n. If the contact is a nodes to surface contact the surfA group is called CONTACT\_NODES\_n or if the contact is a single surface algorithm a single group is created called CONTACT\_SINGLE\_n. Segments are translated as red and blue plate elements (surfA and surfB). For contacts defined by parts one element from each part is placed in the group. This is consistent with N/CODE |
    | \* | Extra nodes on rigid bodies are translated as pipe elements connecting the extra node to a node on the first element found in the rigid part. (module 780) |
    | \* | Node and element time history blocks are translated (module 2417) by creating a group in I-DEAS called NODE\_BLOCK or ELEMENT\_BLOCK containing the history entities |
    | \* | Restraints ( \*BOUNDARY\_SPC ) (module 755) |

    | \* | Constraints ( \*CONSTRAINED\_SPOTWELD, \*CONSTRAINED\_RIVET, \*CONSTRAINED\_NODE\_SET, \*CONSTRAINED\_GENERALIZED\_WELD\_SPOT ) (module 754) |
    | --- | --- |
    | \* | Point loads (module 782) |
    | \* | Displacement, velocity and acceleration boundary conditions on nodes (module 2417). A group in I-DEAS is created called BC\_DISP\_n:(dof i), BC\_VELO... or BC\_ACCE... where n is a unique group number and i is the degree of freedom (1 to 6). Boundary conditions on rigid bodies cannot be written |
    | \* | Nodal force groups ( \*DATABASE\_NODAL\_FORCE\_GROUP ) are written (module 2417) by creating a group in I-DEAS called REACTION |
    | \* | Nodal rigid bodies are written (module 2417) by creating a group in I\_DEAS called NODAL\_RIGID n |
    | \* | Joints (module 780) |
    | \* | Initial velocities (module 2417) are written by creating I-DEAS groups called VELOCITY x y z, where x, y and z are the components of the initial velocity |
    | \* | Rigidwalls are written (module 2417) by creating a group in I-DEAS called RIGIDWALL n. All the constrained nodes for the rigid wall are placed in this group. If the rigidwall is finite in size a yellow plate element is created which represents the extent of the stonewall and this is also placed in the group. Only planar rigidwalls are written. |
    | \* | Airbags are written (module 2417) by creating a group in I-DEAS called AIRBAG n. If the airbag is defined by segments they are translated as cyan plate elements. If it is created by parts one element from each part is placed in the group (compatible with N/CODE). |

    For further details on how Ansys LS-DYNA entities can be created in I-DEAS and how they are represented in a universal file see the N/CODE user manual.

[Previous](abaqus-input-file-output.md)  |  [Next](patran-neutral-file-output.md)