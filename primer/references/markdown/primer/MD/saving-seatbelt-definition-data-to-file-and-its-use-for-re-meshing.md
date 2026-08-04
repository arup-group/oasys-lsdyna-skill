###  Saving Seatbelt Definition Data to File and Its Use for Re-meshing

Seatbelt definitions are automatically saved in Ansys LS-DYNA format output files by appending extra keywords after the Ansys LS-DYNA \*END card. The keywords are:

| \*BELT\_START | Giving label, title, structure sets and other key information. |
| --- | --- |
| \*BELT\_MESH | Giving the dimensions and parameters used during meshing. |
| \*BELT\_PATH | Giving the coordinates and attributes of all basic path points. |
| \*BELT\_PARAMETER | Giving the name of the parameter updated with the total belt length. |
| \*BELT\_SLIPRING | Giving the attributes of an explicitly meshed shoulder slipring for automatic pulling. |
| \*BELT\_END | Terminates the definition. |

Details of the format are given in [Appendix E](e-seatbelt-tree-file-structure.md) , but users should avoid editing these sections since errors may cause internal inconsistencies. See [Seatbelt and dummy keyout format](settings.md#mismatch_action)above for information on how to format these cards for earlier versions of PRIMER .

Deleting these sections from the end of a file is legal: the analysis will still run, but PRIMER will not "know" about the belt definitions when the file is reread.

####  Writing *BELT cards for earlier PRIMER versions

As PRIMER has evolved so more data fields and lines have been added to the \*BELT cards, and this can mean that an output deck written from a later version of PRIMER may not read into an earlier version. If it is necessary to export such a deck to an earlier PRIMER version it will be necessary to set the following preference to the appropriate version:

primer\*mdumm\_keyout\_format: V19 | V18 | V17 | V16 | V15 | V14 | V13 | V12 | V11| CURRENT

If this preference is not defined the default will always be CURRENT, ie the current version.

####  Remeshing existing belt definitions

When a file containing this extra \*BELT\_... data is read back into PRIMER the belt definitions will be created automatically. This makes it possible to re-mesh a seatbelt either automatically or by hand.

#####  Auto-Refit: Remeshing a belt automatically

This is the preferred method, and will recreate both belt and any sliprings and retractors in the new dummy position. It is covered in the .

#####  Manual refit: Remeshing the belt by hand.

It is possible to repeat the refitting and remeshing process by hand as follows:

1. Only the basic path is stored in the file, so it will be necessary to repeat the FITTING operation to obtain a "chassis" mesh before remeshing can take place, see " [Changing and remeshing an existing belt definition](changing-and-remeshing-an-existing-belt-definition.md#change_remesh)" for more details.
2. It is not possible to reposition a belt by "adjusting existing nodal coordinates", even if the amount they need to move is small (although it might be feasible to use ORIENT , TRANSLATE instead with suitable interpolation). You must generate a new mesh each time, usually deleting the old one. 
The reason is that since a characteristic element length is used, moving the chassis mesh by even a small amount may change the number of elements in a segment, and then mapping the new shape onto the old mesh would be impractical.
3. Manual intervention during remeshing will usually be required at retractor and slipring locations, since these element types will "lock" connected seatbelt elements preventing their deletion. The simplest solution is to create the new mesh anyway, then to edit the retractor locations replacing the "old" seatbelt elements with the "new" ones, and then to delete the redundant old ones.

Now that automatic refitting has been added to PRIMER it is recommended that this be used instead.

[Previous](settings.md)  |  [Next](command-line-batch-commands-for-seatbelt-fitting.md)