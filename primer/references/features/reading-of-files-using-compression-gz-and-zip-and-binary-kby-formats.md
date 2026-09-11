####  Reading of Files Using Compression (.gz and .zip) and Binary (.kby) Formats

PRIMER can both write and read the following variants on normal Ansys LS-DYNA keyword syntax

* "Raw" ASCII files, typically (but not necessarily) "name.key" or "name.k"
* Binary format files using PRIMER 's special format, "name.kby"
* Compressed files using "gzip", "name.key.gz"
* Compressed files using "zip", "name.zip" or "name.key.zip"
* Permutations of these, for example a gzip compressed binary file would be "name.kby.gz"

More information about writing these formats can be found in [Format](format-setting-the-file-format.md#pre_format) and [Include Files and Compression](include-files-and-compression.md#incl_and_compress)

This introduces some potential problems with file names during keyin, especially include files. Consider the following example:

The master keyword file contains the lines

\*INCLUDE 
child.key

But depending on the output settings this might actually be written to disk as any of

| Gzip compression active | child.key.gz |
| --- | --- |
| Zip compression active | child.zip <br>child.key.zip |
| Binary output active | child.kby |
| Binary and gzip compression combined | child.kby.gz |
| Binary and zip compression combined | child.zip <br>child.kby.zip |
| ... and it is possible to contemplate further permutations. |

A further problem is that the user might edit that file inside PRIMER , then write it out in a different format to the same directory. So now we might have both:

| Original file<br>and<br>Edited file | child.key <br><br>child.kby |
| --- | --- |

To solve this problem PRIMER uses a sort of "fuzzy logic" when opening include files, testing many different variants of the raw name. If a single unique match is found then this is opened directly, but if multiple possible candidates are found, the behaviour will depend on the syntax option chosen. The options are:

| Include file reading syntax option | Effect |
| --- | --- |
| **Prefer exact** (default) | If the exact filename in the \*INCLUDE statement is found on disk this is used, regardless of file date of the presence of other candidates. Otherwise the newest of any eligible filenames found using "fuzzy logic" is used. |
| **Newest** | The newest of any eligible filenames found using "fuzzy logic" is used. |
| **Verbatim** | The exact filename in the \*INCLUDE statement is read if present on disk, otherwise nothing is read. |

The reading syntax option can be modified by the preference

primer\*keyin\_filename\_syntax: prefer\_exact | newest | verbatim

The default is prefer\_exact.

A warning will be written in [Model Check](model-check.md#39MODELCHECK) under INCLUDE FILE in the following cases:

* If the file read is compressed/binary and therefore would not be directly readable into Ansys LS-DYNA
* If the raw filename could not be found but a single alternative filename, found by fuzzy-matching the name, has been read instead
* If there were multiple variations of the filename

In all cases, asking for "details" (or "explain") will list the various filenames in detail explaining what was actually read. Similar warnings can also be found in the [Include Tree](include-file-structure.md#inclfilestruct), [Part Tree](part-tree.md)and [Model Write](ls-dyna-format-labels-compression-mode.md#write_format).

For master files PRIMER presumes that the given filename is "correct", and assuming it is found on disk it is opened without further searching. However if the given filename is not found then it applies the same search logic as above.

 [Previous](processing-of-ls-dyna-include-files.md)  |  [Next](view-log-viewing-the-input-log.md)