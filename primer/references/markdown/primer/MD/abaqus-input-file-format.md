###  ABAQUS Input File Format

The following table shows the Abaqus keywords supported, and how they are translated to internal Ansys LS-DYNA data when read in.

| **Abaqus keyword** | **Internal Ansys LS-DYNA keyword** |
| --- | --- |
| \*BEAM GENERAL SECTION  <br>(Currently only " SECTION=GENERAL" supported.) | \*SECTION\_BEAM  <br>(ELFORM = 12) |
| \*BEAM SECTION  <br>(Currently only "SECTION=CIRC" supported.) | \*SECTION\_BEAM  <br>(ELFORM = 1) |
| \*CONTACT PAIR  <br>(Currently only supported for optional parameter SMALL SLIDING) <br> \*SURFACE <br>\*SURFACE INTERACTION | \*CONTACT\_NODES\_TO\_SURFACE |
| \*DISTRIBUTING COUPLING | \*CONSTRAINED\_INTERPOLATION |
| \*ELEMENT | \*ELEMENT <br> (Currently only beam elements (TYPE=B31), shell elements and 8 nodes solid elements supported) |
| \*ELSET | \*SET\_SHELL  <br> *or*  <br> \*SET\_SOLID |
| \*HEADING | \*TITLE |
| \*KINEMATIC COUPLING | \*CONSTRAINED\_INTERPOLATION |
| \*MATERIAL <br>\*DENSITY <br>\*ELASTIC | \*MAT\_ELASTIC |
| \*MPC  <br>(Currently only BEAM type supported.) | \*CONSTRAINED\_NODAL\_RIGID\_BODY |
| \*NODE | \*NODE |
| \*NSET | \*SET\_NODE |
| \*PLASTIC | \*MAT\_PIECEWISE\_LINEAR\_PLASTICITY |
| \*SHELL SECTION | \*SECTION\_SHELL |
| \*SOLID SECTION | \*SECTION\_SOLID |

[Previous](i-deas-universal-file-reader.md)  |  [Next](patran-neutral-file-ntl-reader.md)