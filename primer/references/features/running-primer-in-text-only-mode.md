##  Running PRIMER in "Text-Only" Mode.

All the previous sections assume that you want to use PRIMER 's Graphical User Interface (GUI) "menu system". However PRIMER can also run with no graphics, although this is usually only the case when it is used in batch or from a script file.

This is referred to as "Text-Only" mode, and is invoked by specifying device "TTY" or "Batch" (there is no difference between the two).

No interactive graphics are available, nor can bitmaps or laser files be generated. Only the limited dialogue command set (see [Appendix L](l-dialogue-typed-in-command-syntax.md) ) can be used, which restricts the functionality of the code to the following operations:

* Read, Write, Copy and Delete models
* Orient functions (translate, rotate, etc) on a restricted range of object types
* Data Transfer (moving properties from model A to B)
* Bill of Materials (BOM) operations
* Assign Mass (massing up) operations
* Material database import capability
* Model summary

The full Text-Only command list is described in [Appendix L](l-dialogue-typed-in-command-syntax.md)

All Text-Only commands may also be used in command files - see [Using Command Files](using-command-files-and-macros.md#UsingCommandFiles).

[Previous](if-primer-will-not-start-in-screen-menu-mode-on-your-display.md)  |  [Next](starting-primer-in-text-only-mode.md)