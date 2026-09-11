Battery definitions are automatically saved in Ansys LS-DYNA format output files by appending extra keywords after the **\*END** card. The keywords are:

| \*BATT\_CELL\_START | Label, title, Randles modelling scale and other key information. |
| --- | --- |
| \*BATT\_CELL\_LAYER | The layers structure attributes. |
| \*BATT\_CELL\_TAB | The tabs structure attributes. |
| \*BATT\_CELL\_RANDLES | The Randles parameters. |
| \*BATT\_CELL\_ANALYSIS | The analysis keywords data. |
| \*BATT\_CELL\_LAYER\_PARTS | The list of parts modelling the battery cell layers. |
| \*BATT\_CELL\_TAB\_PARTS | The list of parts modelling the battery cell tabs. |
| \*BATT\_CELL\_TAB\_NRB | The list of Nodal Rigid Bodies connecting the layers and tabs. |
| \*BATT\_CELL\_TAB\_CON\_ISOP | The list of isopotentials connecting the layers and tabs. |
| \*BATT\_CELL\_TAB\_CON\_ISCO | The list of isopotential connections connecting the layers and tabs. |
| \*BATT\_CELL\_TAB\_FREE\_ISOP | The list of isopotentials at the free surfaces of the tabs. |
| \*BATT\_CELL\_INTER\_TAB\_ISCO | The list of isopotential connections connecting the unit cells |
| \*BATT\_CELL\_SECT\_LIST | The list of \*SECTIONs used by the layers and tabs. |
| \*BATT\_CELL\_RAND\_LIST | The list of Randles keyword. |
| \*BATT\_CELL\_END | Terminates the definition. |

Details of the format are given in [Appendix S](s-battery-cell-keyword-format.md), but users should avoid editing these sections since errors may cause internal inconsistencies.

Deleting these sections from the end of a file is legal: the analysis will still run, but PRIMER will not "know" about the battery definitions when the file is reread.

These sections can only be read by PRIMER from v22 onwards, and will be ignored for earlier versions.

When a file containing these extra **\*BATT\_CELL\_** data is read back into PRIMER the battery definitions will be created automatically. This makes it possible to modify a battery cell definition or view it's properties.
[Previous](storing-data-in-csv.md)  |  [Next](bill-of-materials.md)