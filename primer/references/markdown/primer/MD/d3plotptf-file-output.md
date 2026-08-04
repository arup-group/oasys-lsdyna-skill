###  D3PLOT/PTF File Output

This file format is available for users who wish to visualise their model in a post-processor without having to initialise it in Ansys LS-DYNA. No data conversion is required since this file is "native" Ansys LS-DYNA format, however the following explains the output options:

####  Write elements and Nodes

This writes out the geometry and topology of nodes, solids, beams, shells, thick shells and SPH elements. It would be possible to write more recent and exotic d3plot file contents, such as Airbag particles, DES elements, etc, but these are complex to write and are not likely to be visualised in this way.

####  Write Geometry Surfaces as Shells

If your model contains "geometric" items, typically imported from an IGES file, the PRIMER will render these as surfaces, lines and points, however they have no existence as "nodes or elements" and will not normally be written to the d3plot file. If you select this option then the tesselated triangles used to display surfaces will be added to the d3plot file as triangular shells, and their vertex points will be added as nodes.

These elements and nodes are given sythesised labels, starting from the highest "real" item + 1.

####  Write state 1 (undeformed data)

If this item is chosen then an initial "state" of "results" will also be generated, similar to the result of initialising the deck in Ansys LS-DYNA and obtaining the results at the first cycle. This will contain:

| Nodal coordinates | Based on the existing undeformed geometry |
| --- | --- |
| Nodal velocities (if available) | If any INITIAL cards specify nodal velocities then the initial velocities of all nodes will be written, otherwise this block is omitted. |
| Nodal temperatures (if available) | If any INITIAL\_TEMPERATURE cards specify nodal temperatures, otehrwise omitted |
| Shell thicknesses | Taken from SECTION\_SHELL, PART\_COMPOSITE or ELEMENT\_SHELL cards |
| Solid, shell and thick shell initial stresses and plastic strains (if available) | Taken from \*INITIAL\_STRESS\_xxx cards, otherwise omitted |
| Solid, shell and thick shell initial strains (if available) | Taken from \*INITIAL\_STRAIN\_xxx cards, otherwise omitted |

Cognoscenti of the d3plot format will know that its shell output is switchable, and also that the number of integration points of data written for shells can be varied via MAXINT and other fields on the \*DATABASE\_EXTENT\_BINARY card. In order to avoid writing large files entirely full of zeros these settings are ignored and instead:

* Shell stresses and plastic strains are only output if there are one or more \*INITIAL\_STRESS\_SHELL or \_TSHELL cards
* The number of shell integration points written out is the greater of 1 and the largest NTHICK value on any \*INITIAL\_STRESS\_(T)SHELL card
* Shell strain tensors are only written out if there are one or more \*INITIAL\_STRAIN\_(T)SHELL cards, and then only for inner and outer integration points.
* Solid strain tensors are only written out if there are one or more \*INITIAL\_STRAIN\_SOLID cards

#####  The order of output of per-integration point data. Note: not the same as Ansys LS-DYNA

The aforementioned cognoscenti will also be aware that the order in which shell through-thickness data are written depends on the MAXINT value, with special rules applying where MAXINT = 3, and also in some cases where MAXINT = 5.

This file totally ignores those rules and writes initial stress and plastic strain data in the order in which it appears on the \*INITIAL\_STRESS\_(T)SHELL card, also ignoring any T value specifying the parametric coordinate through the shell. So if NTHICK = n (and NPLANES = 1) then layer 1 will be the first row of data, layer 2 the second, and so on for any value of NTHICK.up to layer n. This includes the special cases of n = 3 and n = 5.

In addition where multiple in-plane integration points have been specified, NPLANE &gt; 1, the file assumes the first NPLANE rows on the \*INITIAL\_STRESS\_(T)SHELL cards are the on plan values for the first through thickness integration point, the next NPLANE rows are values for the next through thickness point and so on...

In the case of no initial stress or strain data then MAXINT will be set to 1 and the shell element stress tensor, plastic strain and strain tensor output flags will be turned off in order to minimise the size of the file. There is little virtue in writing a file full of millions of redundant zeros!!

| ***The "results" in state 1 in this file are not identical to the results produced by initialising the input deck in Ansys LS-DYNA, and are not intended to be.***<br> <br>***Please make sure that you understand the differences, in particular with respect to the shell stress and strain output. If you need a "proper" set of results then you need to write out the keyword file and initialise it in Ansys LS-DYNA in the normal way.*** |
| --- |

####  Add space for on plan int point results

If the file doesn't contain any \*INITIAL\_STRESS\_(T)SHELL cards the file will
only contain one data slot for stress data per (T)SHELL. Users may want to create
a JavaScript user defined UBIN component in D3PLOT to add values to the model and
this limitation means they can only write it at one layer and one on plan point.

Selecting the option to add space for on plan integration point results will
make PRIMER write a file with data slots available for multiple on plan points (the number
of layers will still be limited to 1).

NOTE: The ELFORM field on the \*SECTION card needs to be set to a formulation
that supports multiple on plan integration points otherwise D3PLOT will still think
it only has space for one on plan point.

[Previous](nastran-output.md)  |  [Next](1-this-curve-file-format.md)