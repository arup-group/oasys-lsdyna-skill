##  Include Files

Include files provide a simple way to break up large analyses into smaller, more easily managed files. Ansys LS-DYNA supports the following include file types:

| **Keyword** | **Description** |
| --- | --- |
| \*INCLUDE | A simple include file with no additional attributes. |
| \*INCLUDE\_COSIM | Used to define an include file specifying the coupling interface across two models in different scales (global and local) running on an MPI based co-simulation. |
| \*INCLUDE\_AUTO\_OFFSET | As for \*INCLUDE above, but labels of nodes and elements in the include file are allowed to overlap with labels of the same items elsewhere in the model. <br>This is intended for wholly self-contained model sub-assemblies for which labels are not important, typically the tolling of dies and formers in metal-forming analyses. During keyword input Ansys LS-DYNA will automatically increment the labels in this file to make them unique.<br> <br>Similarly PRIMER will automatically add a label increment where required to make these labels unique during the PRIMER session, then remove them again during keyword output so that the file is unchanged. PRIMER 's label increments are very unlikely to be the same as those used by Ansys LS-DYNA. |
| \*INCLUDE\_TRANSFORM | An include file in which labels of items may be incremented by explicit offsets on this card, and which may also have its position in space transformed by a \*DEFINE\_TRANSFORMATION
card. |
| \*INCLUDE\_UNITCELL | Either defines a "unit cell" mesh in an include file, or specifies the dimensions and mesh parameters of such a mesh that Ansys LS-DYNA will create and - optionally - write to a conventional include file. |

There are further \*INCLUDE\_xxx keywords, but these do not contain sub-files of keyword data that are read into PRIMER, and so are not considered here. They may be processed in PRIMER via the INCLUDE v keyword popup.

In addition, files specified by \*DUALCESE\_MODEL and \*DUALCESE\_INCLUDE\_MODEL keywords are also treated as pseudo includes and a lot of the same functionality is extended to these keywords.

[Previous](memory-management-and-usage.md)  |  [Next](include-file-structure.md)