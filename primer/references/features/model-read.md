##  MODEL &gt; READ

Reading in models from disk.

PRIMER's native internal data structures are based on Ansys LS-DYNA keyword format, with some additions for specialist purposes.

Files may be read in a variety of formats, some of which require a considerable degree of translation to convert them to PRIMER internal data.

[List of File Formats Read by PRIMER](list-of-file-formats-read-by-primer.md#formats_read) summarises what is read and how it is converted: more details of format conversions are given in [Appendix F](compressed-ls-dyna-formats-gz-and-zip.md).

In the example a. Ansys LS-DYNA keyword file is to be read into model #1 (which is the first free model number).

**Compressed and binary Ansys LS-DYNA input files**

Ansys LS-DYNA files that are compressed in .gz and .zip format may be read and written directly. In addition a new proprietary binary format that is both more compact and gives faster i/o may be used, see [Appendix F](compressed-ls-dyna-formats-gz-and-zip.md)for more details. PRIMER can also read .zip archives that are encrypted.
 ![](../Storage/primer-22-1/primer_links/sect_3/images/model_read.png)[Previous](model-create.md)  |  [Next](options-for-ls-dyna-keyword-files-only.md)