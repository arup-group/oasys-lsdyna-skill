#####  Where Includes Are Written

![](../Storage/primer-22-1/primer_links/sect_3/images/fig_3_3_2d.png)\*Include files may be read from anywhere on disk, including "read-only" file systems and directories. Therefore it may not be practical or sensible to try to restore these files to the directories from which they came, and the following approach is adopted:
* A new sub-directory called **INCL**is created.
* If this directory already exists suffices " **\_1**", " **\_2**", etc are added so that the directory name is always unique.
* All \*include files have their incoming paths stripped, leaving only the filename, and are written to this sub-directory.
* The references to them in the master file thus becomes **INCL/**&lt;include\_filename&gt;.
* If necessary suffices " **\_1**" etc will also be added to filenames in this directory to make them unique.

You may replace the default name INCL with a name of your own choice.
 [Previous](includes-how-includes-are-written.md)  |  [Next](include-filename-syntax.md)