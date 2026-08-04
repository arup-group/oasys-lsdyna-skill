###  NASTRAN Output

The following table shows the limited set of Ansys LS-DYNA keywords that are supported for conversion to a NASTRAN bulk data file. The translator leaves the internal Ansys LS-DYNA data unchanged. 
For property cards $HMNAME comments are written, as are the $HMMOVE comments which maintain the PBAR collectors. 
See special note on rigid parts.

| **Internal Ansys LS-DYNA keyword** | **NASTRAN written output** | **Note** |
| --- | --- | --- |
| \*BOUNDARY\_SPC\_NODE | SPC | [ [2](nastran-output.md#nasnote2)] |
| \*BOUNDARY\_SPC\_SET | SPC1 | [ [3](nastran-output.md#nasnote3)] |
| \*CONSTRAINED\_INTERPOLATION | RBE3 |  |
| \*CONSTRAINED\_NODAL\_ RIGID\_BODY | RBE2 |  |
| \*CONSTRAINED\_SPOTWELD | RBE2 or Solid welds | [ [10](nastran-output.md#nasnote10)] |
| \*DEFINE\_CORDINATE\_NODES <br>\*DEFINE\_COORDINATE\_xxx (except \_NODES) | CORD1R <br>CORD2R |  |
| \*DEFINE\_SD\_ORIENT | CORD2R | [ [1](nastran-output.md#nasnote1)] |
| \*ELEMENT\_BEAM | CBAR | [ [8](nastran-output.md#nasnote8)] |
| \*ELEMENT\_DISCRETE | CELAS1, CDAMP1 | [ [9](nastran-output.md#nasnote9)] |
| \*ELEMENT\_MASS <br>\*ELEMENT\_INERTIA | CONM2 |  |
| \*ELEMENT\_PLOTEL | PLOTEL |  |
| \*ELEMENT\_SHELL | CQUAD4, CQUAD8, CTRIA3, CTRIA6 | [ [7](nastran-output.md#nasnote7)] |
| \*ELEMENT\_SOLID | CHEXA, CTETRA, CPENTA |  |
| \*INCLUDE | INCLUDE |  |
| \*LOAD\_NODE | FORCE |  |
| \*LOAD\_SHELL | PLOAD |  |
| \*LOAD\_THERMAL\_CONSTANT\_NODE | TEMP |  |
| \*MAT (all structural exc. discrete, composite) | MAT1 |  |
| \*MAT\_ENHANCED\_COMPOSITE\_DAMAGE | MAT8 |  |
| \*NODE | GRID |  |
| \*PART\_COMPOSITE <br>\*MAT\_54 (with \*INTEGRATION) | PCOMP |  |
| \*SECTION\_BEAM (exc. type 6) | PBAR, PBARL | [ [5](nastran-output.md#nasnote5)] |
| \*SECTION\_DISCRETE | PELAS, PDAMP | [ [6](nastran-output.md#nasnote6)] |
| \*SECTION\_SHELL | PSHELL | [ [4](nastran-output.md#nasnote4)] |
| \*SECTION\_SOLID | PSOLID |  |
| \*TITLE | TITLE = |  |

####  Notes:

1. To avoid label clashes these will be labelled at the \*DEFINE\_SD\_ORIENT label offset with the highest \*DEFINE\_COORDINATE label.
2. Local coordinate systems on SPCs are maintained.
3. \*BOUNDARY\_SPC\_SET cards defined in a local coordinate system are automatically written out as SPC cards instead of SPC1 cards.
4. Thickness on the PSHELL card will be taken as the T1 value on the \*SECTION\_SHELL card. Shells of variant thickness must be set up on the \*ELEMENT\_SHELL card.
5. For Ansys LS-DYNA integrated beams the values of A, I1, I2, J and shear factor (if SHRF=0) are calculated from the section defined.
6. Values of k and dc are read from \*MAT\_SPRING\_ELASTIC and \*MAT\_DAMPER\_ VISCOUS. For other discrete materials the illegal field 'xxxxxxx' will be written to the NASTRAN file.
7. For shells \_THICKNESS and \_BETA attributes are translated directly.
8. Ansys LS-DYNA beam release codes, orientation vectors and global offset vectors are translated.
9. For a discrete element or set of coincident discrete elements, new RBE2s are created at each end in order to convert the discretes to zero length (if necessary) and to generate nodes to which the CORD2Rs may be referenced. All NASTRAN elements will reference component number 1 (translational) or 4 (rotational). If no \*DEFINE\_SD\_ORIENT vector exists for a non-zero length discrete, the CORD2R will be created from the two nodes.
10. \*CONSTRAINED\_SPOTWELD cards are translated to NASTRAN RBE2 cards.
11. The option of "SMALL" and "WIDE" format output is provided. Note that all GRID (node) cards are written out in the "WIDE" format even if the user opts to write the deck out in the "SMALL" format. This is done in order to preserve the precision of nodal coordinates. When the "WIDE" option is chosen by the user, only those cards which contain floating point fields are written out in the "WIDE" format. Cards containing only integer data are written out in the "SMALL" format always.

**Option panel for NASTRAN write**

![](../Storage/primer-22-1/nastran-output/nastran-output-2023-10-25.png)

**Special note on rigid parts:**

Rigid parts will be represented by the generation of an **RBE2** over the nodes of the part itself, any parts constrained to it and any \*CONSTRAINED\_EXTRA\_NODES. An additional node, created at the centre of mass, serves as the independent node and will carry an SPC if there is any Ansys LS-DYNA material constraint (CMO.ne.0).

If the option Suppress write of elements of rigid part is on (or \*PART\_INERTIA) a **CONM2** element will be added at the defined centre of mass and element printing will be suppressed. 
Local coordinate systems for the PART\_INERTIA (IRCS=1) and for Ansys LS-DYNA material constraint(CMO=-1) are treated appropriately.

If elements are not being written, it is unnecessary to RBE2 all the nodes except the centre node and those that connect. By default, RBE2 onto external nodes will be omitted for rigid bodies with more than 1000 elements as pref setting is nastran\_write\_rigid\_element\_limit:1000. If the pref is set to zero, all external structural nodes will be RBE2'd (as before). If set to 1, that will minimize the RBE2.

Fix clashing nodal rigid bodies - Ansys LS-DYNA will merge overlapping NRBs so Ansys LS-DYNA models often have them. To ensure legal RBE2s this process is now run pre-emptive to translation.

  **Conversion of tied contacts:**

If the option Convert tied contact to RBE3 is active (default), CONTACT\_TIED\_NODES\_TO\_SURFACE in Ansys LS-DYNA will be translated to RBE3s for NASTRAN output. The pref nastran\_write\_contact\_rbe3\_placement will determine whether these are written to the include of the dependent node, independent node or contact (as before).

The conversion process assumes that a set of tracked nodes (defined by node set/part/part-set) is to be tied to a set of reference shells (defined by part/part set/shell set).

The PRIMER contact checker will be used to determine which nodes actually tie in the Ansys LS-DYNA model. **Only these nodes** will be tied in the NASTRAN output.

In default mode, each tracked node (this is typically a node on a solid) will be tied as a dependent using an RBE3 element to the nodes of the corresponding reference shell. However, NASTRAN does not appear to permit zero weighting in RBE3, so if the nodes coincide with a corner or edge, a minor adjustment will be made to weight factors. Alternately, there are options to use RBE2 or RBE3 with 2 independent nodes.

By default only translational degrees of freedom for RBE3 nodes are considered, however the preference nastran\_enable\_rotational\_dof\_on\_RBE3\_shell\_nodes may be set to include rotational degrees of freedom.

On completion of the contact a node set will be created called " ***Nodes*** ***tied. Contact n***  " and (possibly) one called " ***Nodes******failed to tie. Contact n***"

  **Conversion of MIG Welds to RBE3:**

If the option Convert MIG to 2 RBE3s is active, MIG Weld beams in Ansys LS-DYNA will be translated to CBAR/CBUSH elements with RBE3 elements at both ends.

The node at the meshed-in end of the MIG weld beam will be offset along the beam axis as specified in
**Node offset %**and then RBE3'd back to shells attached with original node.

Convert MIG to CBUSH: This option may be used to convert MIG spot-weld beams to CBUSH elements, else converted to CBAR elements by default.

Translate matl with undef poisson ratio: If this option is active, materials with no Poisson's ratio are translated to MAT\_01 with a user defined value for PR. If no value is given, a default value of 0.001 is used.

Scale Beam & Scale Beam Orient Vector: With this option, beams and beam orient vectors are scaled to a user defined value. If the beam length is zero and the orientation vector is not set, it will be automatically created in the direction that is perpendicular to the beam axis with a unit magnitude.

MAT\_169 into new MAT\_03 parts by thickness: This option can be used to correctly translate the stiffness of parts using MAT\_ARUP\_ADHESIVE. This material can adjust the stiffness of elements using the BTHK parameter to account for adhesive being thicker in models than in reality. But this stiffness correction is lost when the model is written out for NASTRAN. To work around this, bond elements are moved into different parts with scaled stiffness depending on their thickness

Typical shell edge length value is set to 10.0 which is appropriate for typical crash models with units in mm.

[Previous](patran-neutral-file-output.md)  |  [Next](d3plotptf-file-output.md)