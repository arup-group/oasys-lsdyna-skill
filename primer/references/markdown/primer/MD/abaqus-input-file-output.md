###  ABAQUS "Input" File Output

The following table shows the limited set of DYNA keywords that are supported for conversion to Abaqus .inp file format. The translator leaves the internal Ansys LS-DYNA data unchanged.

| **Internal Ansys LS-DYNA keyword** | **Abaqus written output** | **Note** |
| --- | --- | --- |
| \*CONSTRAINED\_INTERPOLATION | \*ELEMENT,TYPE=DCOUP3D, \*ELSET= <br> **KINEMATIC COPULING**  <br>or <br> **DISTRIBUTING COPULING** |  |
| \*CONSTRAINED\_NODAL\_ RIGID\_BODY | \*MPC | [ [1](abaqus-input-file-output.md#abnote1)] |
| \*CONTACT\_NODES\_TO\_SURFACE | \*CONTACT\_PAIR <br>\*SURFACE <br>\*SURFACE\_INTERACTION |  |
| \*ELEMENT\_BEAM | \*ELEMENT | [ [2](abaqus-input-file-output.md#abnote2)] |
| \*ELEMENT\_SHELL | \*ELEMENT | [ [3](abaqus-input-file-output.md#abnote3)] |
| \*ELEMENT\_SOLID | \*ELEMENT | [ [4](abaqus-input-file-output.md#abnote4)] |
| \*MAT\_ELASTIC | \*MATERIAL <br>\*DENSITY <br>\*ELASTIC |  |
| \*MAT\_PIECEWISE\_LINEAR\_PLASTICITY | \*PLASTIC |  |
| \*NODE | \*NODE |  |
| \*SECTION\_BEAM (ELFORM = 1) | \*BEAM SECTION | [ [5](abaqus-input-file-output.md#abnote5)] |
| \*SECTION\_BEAM (ELFORM = 12) | \*BEAM GENERAL SECTION | [ [6](abaqus-input-file-output.md#abnote6)] |
| \*SECTION\_SHELL | \*SHELL SECTION |  |
| \*SECTION\_SOLID | \*SOLID SECTION |  |
| \*SET\_NODE | \*NSET |  |
| \*SET\_SHELL | \*ELSET |  |
| \*SET\_SOLID | \*ELSET |  |
| \*TITLE | \*HEADING |  |

####  Notes:

1. \*CONSTRAINED\_NODAL\_RIGID\_BODY cards are converted to \*MPC of **BEAM** type only.
2. \*ELEMENT\_BEAM crads are converted to \*ELEMENT with **Type B31** only.
3. **Three noded shells** are written as \*ELEMENT, **TYPE=S3R** while **four noded shells** are written as \*ELEMENT, **TYPE=S4.**
4. Four noded, six noded and eight noded solids are converted to types C3D4, C3D6 and C3D8 respectively.
5. All \*SECTION\_BEAM cards with elform =1 are converted to **\*BEAM SECTION with SECTION=CIRC** .
6. All \*SECTION\_BEAM cards with elform =12 are converted to **\*BEAM GENERAL SECTION with SECTION=GENERAL** .

[Previous](iges-file-format.md)  |  [Next](ideas-master-series-universal-file-format.md)