###  Saving and Reading ORGIAMI/Fold Definitions

There is no capability to directly read and write the ORIGAMI and FOLD definitions to a file. However, the information is stored in a section labelled \*ORIGAMI at the end of the Ansys LS-DYNA (after \*END ) keyword file which includes all the fold information. This is automatically added when a Ansys LS-DYNA keyword file is written. The format of these is included in the comments (see also [Appendix C](c-origami-tree-file-example.md)). When read back into PRIMER , these definitions are available to the airbag folder.

To stop any \*ORIGAMI , \*FOLD and \*ORIENT definitions from being output, the ORIGAMI definitions must be deleted.

Although the \*ORIGAMI , \*FOLD and \*ORIENT definitions are available in ASCII form at the end of the Ansys LS-DYNA input, it is recommended that hand editing be avoided as it is error prone: to modify fold and orient definitions read them back into PRIMER .

Note also that \*ORIGAMI definitions should not be separated from their "parent" input decks, since they make reference to nodes, sets and coordinate systems within those decks.

[Previous](scaling.md)  |  [Next](additional-airbag-folding-notes.md)