###  NASTRAN Bulk Data File Format

The following table shows the Nastran keywords supported, and how they are translated to internal Ansys LS-DYNA data when read in.

| **Nastran keyword** | **Internal Ansys LS-DYNA keyword** |
| --- | --- |
| CBAR (+BAROR) <br>CBEAM (+BEAMOR) <br>CBUSH <br>CROD <br>CTUBE | \*ELEMENT\_BEAM (+3rd nodes as required) |
| CDAMP1 <br>CDAMP2 <br>CELAS1 <br>CELAS2 <br>CVISC | \*ELEMENT\_DISCRETE (with appropriate attributes as deduced from PELAS, PDAMP and PVISC cards). |
| CHEXA <br>CPENTA <br>CTETRA | \*ELEMENT\_SOLID |
| CONM2 | \*ELEMENT\_MASS  <br> *or*  <br> \*ELEMENT\_INERTIA |
| CORD1R | \*DEFINE\_COORDINATE\_NODES |
| CORD2R | \*DEFINE\_COORDINATE\_SYSTEM |
| CQUAD4 <br>CQUAD8 <br>CQUADR <br>CTRIA3 <br>CTRIA6 <br>CTRIAR | \*ELEMENT\_SHELL |
| FORCE | \*LOAD\_NODE |
| GRID | \*NODE (includes restraints if specified) |
| INCLUDE | \*INCLUDE |
| MAT1 | \*MAT\_ELASTIC |
| MAT8 | \*MAT\_ENHANCED\_COMPOSITE\_DAMAGE |
| PBAR <br>PBEAM <br>PBUSH <br>PROD <br>PTUBE | \*PART <br>\*SECTION\_BEAM |
| PBARL  <br>(Currnetly "BAR", "BOX", "BOX1", "I", "I1", "ROD" and "TUBE" TYPEs are supported.) | \*SECTION\_BEAM <br>\*PART |
| PCOMP | \*PART\_COMPOSITE |
| PDAMP <br>PVISC | \*PART <br>\*SECTION\_DISCRETE <br>\*MAT\_DAMPER\_VISCOUS |
| PELAS | \*PART <br>\*SECTION\_DISCRETE <br>\*MAT\_SPRING\_ELASTIC |
| PLOAD | \*LOAD\_SHELL |
| PLOTEL | \*ELEMENT\_PLOTEL |
| PSHELL | \*PART <br>\*SECTION\_SHELL |
| PSOLID | \*PART <br>\*SECTION\_SOLID |
| RBAR <br>RBE1 <br>RBE2 | \*CONSTRAINED\_NODAL\_RIGID\_BODY  <br> *or*  <br> \*CONSTRAINED\_SPOTWELD (RBE2 only.) <br>(+sets of nodes [ \*SET\_NODE ] as required) |
| RBE3 | \*CONSTRAINED\_INTERPOLATION |
| SPC <br>SPC1 | \*BOUNDARY\_SPC |
| TEMP | \*LOAD\_THERMAL\_CONSTANT\_NODE |

####  Notes:

1. NASTRAN RBE2 cards with only two fully constrained nodes are translated to Ansys LS-Dyna \*CONSTRAINED\_SPOTWELD by default. If these two nodes are not fully constrained, then it is convereted to Ansys LS-Dyna \*CONSTRAINED\_NODAL\_RIGID\_BODY . Now there is a new option "Convert all RBE2s to CONSTRAINED NRB" available while reading the NASTRAN input file, which allows all two noded NASTRAN RBE2 cards to be converted to LS\_Dyna \*CONSTRAINED\_NODAL\_RIGID\_BODY cards. For this option there is a preference primer\*convert\_rbe2\_cnrb: also, which is set FALSE by default.

    ![](../Storage/primer-22-1/primer_links/appen_6/nas_trans_opt.gif)
2. Continuation characters are fully supported by the NASTRAN input translator. Even those cards that span multiple lines but do not contain explicit continuation characters are now translated properly.
3. Include files are fully supported by the input translator, and the include file structure is preserved in memory after the translation process is complete. Hence, if the model is written out in a format that supports include files, the resulting model will be written out across include its corresponding include files.
4. Both SMALL and WIDE format cards are supported by the input translator.
5. The "extra" data on certain cards that are defined in the Ansys LS-DYNA keyword manual under \*TRANSLATE\_NASTRAN (cards CELAS1, PSHELL, PSOLID ) is not supported by the PRIMER translator. These values will be ignored if found.

[Previous](binary-ls-dyna-format.md)  |  [Next](i-deas-universal-file-reader.md)