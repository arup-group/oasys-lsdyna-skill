###  I-DEAS Universal File Reader

The I-DEAS Universal file reader reads and processes the following I-DEAS Universal file modules.

    | **Module Number** | **Contents** | **Data Processed** |
    | --- | --- | --- |
    | 151 | Title |  |
    | 755 | Restraints | Translational and rotation restraints in the global axis system. |
    | 773, 1710 & 1714 | Materials | ID and Name |
    | 776 | Beam Cross Sections | ID and Name ( see below for more details) |
    | 780 & 2412 | Elements | ( see below for more details) |
    | 781 & 2411 | Nodes | ID, Global Coordinates |
    | 789, 2437, 2448 | Physical Sections | ID and Name ( see below for more details) |

####  Element Types

    | **I-DEAS TYPE** | **Colour** | **Ansys LS-DYNA Type** | **Additional Data / Comments** |
    | --- | --- | --- | --- |
    | 21 | Any | 2 Noded Beam | Beam Orientation Node |
    | 91 | Any | 3 Noded Shell |  |
    | 94 | Any | 4 Noded Shell |  |
    | 101 | Any | 6 Noded Thick Shell |  |
    | 104 | Any | 8 Noded Thick Shell |  |
    | 111 | Any | 4 Noded Solid |  |
    | 112 | Any | 6 Noded Solid |  |
    | 115 | Any | 8 Noded Solid |  |
    | 122 | Cyan | \*CONSTRAINED\_RIVET | Only first 2 nodes processed |
    | 122 | Red | \*CONSTRAINED\_SPOTWELD | Only first 2 nodes processed |
    | 122 | Yellow | \*CONSTRAINED\_NODAL\_ <br>RIGID\_BODY | I-DEAS element ID is used as the Ansys LS-DYNA node set ID. |
    | 122 | Green | \*CONSTRAINED\_NODE\_SET | I-DEAS element ID is used as the Ansys LS-DYNA node set ID |
    | 122 | Blue | \*CONSTRAINED\_GENERALIZED\_ <br>WELD\_SPOT | I-DEAS element ID is used as the Ansys LS-DYNA node set ID |
    | 136 | Any | Translational Spring |  |
    | 137 | Any | Rotational Spring |  |
    | 138 | Any | Grounded Translational Spring |  |
    | 139 | Any | Grounded Rotational Spring |  |
    | 141 | Any | Translational Damper |  |
    | 161 | Any | Lumped Mass |  |

####  Physical Sections

    | **IDEAS TYPE** | **Ansys LS-DYNA Type** | **Ansys LS-DYNA Data Processed** |
    | --- | --- | --- |
    | 90 (Thin Shell) | \*SECTION\_SHELL | ID, Name, Shell thickness |
    | 100 (Thick Shell) | \*SECTION\_TSHELL | ID, Name |
    | 110 (Solid) | \*SECTION\_SOLID | ID, Name |
    | 133 (Translational Spring) | \*SECTION\_DISCRETE | ID, Name |
    | 134 (Rotational Spring) | \*SECTION\_DISCRETE | ID, Name |
    | 161 (Lumped Mass) | \*ELEMENT\_MASS | Mass |

####  Beam Cross Sections

    | I-DEAS TYPE | Ansys LS-DYNA Type | Ansys LS-DYNA Data Processed |
    | --- | --- | --- |
    | 0 (Keyed In) | Belytschko-Schwer | Area, Iss, Itt, Irr , Shear Area = Area |
    | 1 (Rectangular) | Hughes-Lui (Rectangular) | TS1, TS2, TT1, TT2 |
    | 3 (Circular) | Hughes-Lui (Circular) | TS1, TS2, TT1, TT2 |
    | 4 (Pipe) | Hughes-Lui (Circular) | TS1, TS2, TT1, TT2 |
    | 999 (General) | Belytschko-Schwer | Area, Iss, Itt, Irr, Shear Area = Area |

In I-DEAS an elements properties are defined by both a set of Material data and a set of Physical. In Ansys LS-DYNA an elements properties are defined by a single PART number which then references a Material and a Section. When importing a Universal file PRIMER will automatically generate PARTS for all the combinations of Materials and Physicals used in the universal file. The ID's assigned to each PART can be made equal to either the elements Material ID or the elements Physical (Section) ID.

If PART numbers are based on Material ID and a Material is used with more than one Physical (Section) then the numbering scheme described above can not be followed. If this is the case then the PART using the Material which has the lowest Physical (Section) ID will be assigned the and ID equal to the Material ID and any other PARTs using the same material will be given ID's greater then the highest PART ID. Similarly if PART numbers are based on Physical (Section) ID and a Section is used with more than one Material then unique PART numbers will be generated for each PART.

The following table shows the difference in basing the PART number on the material or section property ID. Note that as there is only a clash with the material numbers then the option of basing the PART number on the section ID still results in the PARTS being given ID's the same as the section properties.

| **Element ID** | **Material ID** | **Section ID** | **Part Number based on** |
| --- | --- | --- | --- |
| **Material ID** | **Section ID** |
| 1 | 1 | 101 | 1 | 101 |
| 2 | 1 | 102 | 4 | 102 |
| 3 | 1 | 103 | 5 | 103 |
| 4 | 1 | 104 | 6 | 104 |
| 5 | 2 | 201 | 2 | 201 |
| 6 | 2 | 202 | 7 | 202 |
| 7 | 3 | 301 | 3 | 301 |

####  SPRING ELEMENTS

In I-DEAS spring elements are only assigned a Physical (Section) ID. PRIMER assumes that the Material ID of a spring element is the same as the Physical (Section) ID. Spring elements should NOT therefore be defined using Physical (Section) ID's that are the same as Material ID's used by other element types.

####  BEAM ELEMENTS

In I-DEAS the section properties for beam elements are defined using a Beam Cross Section. This means it is possible for beams to have the same Material and Physical ID's but to have different Beam Sections. When translating beam elements for I-DEAS PRIMER ignores the Physical ID and uses the Beam Cross Section ID as the Ansys LS-DYNA section ID. Beam Cross Sections should NOT therefore be defined using the same ID's as Physical Sections used by element types that are not beams.

[Previous](nastran-bulk-data-file-format.md)  |  [Next](abaqus-input-file-format.md)