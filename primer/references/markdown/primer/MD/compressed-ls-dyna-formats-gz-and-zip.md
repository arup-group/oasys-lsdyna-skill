###  Compressed Ansys LS-DYNA Formats (.gz and .zip)

These formats do not require "translation", just decompression. The following are supported.

| **File format** | **Nomenclature** | **Organisation** |
| --- | --- | --- |
| .gz | name.key =&gt; name.key.gz | One-to-one compression of ascii .key files to .key.gz using "gzip". |
| .zip (single files) | name.key =&gt; name.key.zip | One-to-one compression of ascii .key files .zip using "Winzip" or similar |
| .zip (package) | master.key <br>include1.key <br>include2.key <br>etc | } <br>} name.key.zip <br>} <br>} | Master and any number of include files are packed into a single .zip archive.<br> <br>Master file is embedded as name.key <br>Include files are embedded as **INCL** /include1.key, INCL/include2.key, etc |

PRIMER can both read and write any of these compressed formats directly, ie you can open "file.key.gz" or "file.key.zip" directly.

Compressed input is automatic, detected from the file name and contents. Compressed output is under user control, see [Model Write, Pre-out, Compress tab](pre-out-compress-tab.md#pre_compress)

####  Output .zip file naming convention change in PRIMER 17

Prior to version 17 PRIMER used typical Windows extension syntax when writing .zip format files, so "name.key" was written out as "name.zip". This caused two problems:

* It obscured the original master filename extension, making it necessary for other software packages to open the .zip package to obtain this.
* In the particular case of binary output a user could not tell from looking at the "name.zip" file on disk whether it was ascii or binary.

Therefore from V17 onwards PRIMER uses the approach that a ".zip" extension is added to, rather than replaces, any existing filename extension. Thus

| Compression | Naming convention before V17 | Naming covention from V17 onwards |
| --- | --- | --- |
| .zip | name.key ==&gt;name.zip | ***name.key==&gt;name.key.zip*** |
| .gz | name.key==&gt; name.key.gz | name.key ==&gt;name.key.gz |

In other words ".zip" and ".gz" extensions now get exactly the same treatment in V17. (The treatment of ".gz" extensions is unchanged)

For backwards compatibility PRIMER will continue to read both old and new variants of the ".zip" filename syntax.

#####  Reverting to the old (Pre V17) .zip output filename syntax

For backwards compatibility there is a preference to control this behaviour

primer\*keyout\_zip\_extension: append|replace

The default behaviour in V17 is "append", but if this is set to "replace" then the original pre-V17 behaviour will be used.

####  Encrypted .zip files.

The ".zip" format optionally allows files to be encrypted. When this is done the master archive index is "in clear", but files within it can be encrypted in a variety of ways.

#####  Reading encrypted .zip files

From V16 onwards PRIMER can read encrypted .zip files. It will detect the encrypted status and prompt you for a password.

#####  Writing encrypted .zip files

PRIMER does not write encrypted .zip files.

[Previous](details-of-belt-cards.md)  |  [Next](binary-ls-dyna-format.md)