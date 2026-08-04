####  Pre-out: Compress Tab

![](../Storage/primer-22-1/primer_links/sect_3/images/fig_3_3_2i.png)Compression and binary output format provide ways of both speeding up output and also reducing file sizes.
* [Compression](compress-files.md#compress_files) uses the industry standard "ZLIB" library to compress files into .gz and .zip formats.
* [Binary files](write-binary-format.md#write_binary) are proprietary to PRIMER and provide a way of storing data more efficiently, they also improve reading and writing speed

The defaults are:

* The compression status of input files is "remembered" and re-used during output, the "keep" option.
* Binary output is ***not***used by default, even if the input file contained binary data.

These defaults can be changed via preferences, and using the Save settings to oa\_pref file button will update these preferences automatically to the current settings..

***WARNING: Ansys LS-DYNA cannot read compressed or binary files directly.***Do not use these options if the output is to be used directly for analysis.

 [Previous](mutable-parameter-scope-how-mutable-parameters-are-handled-during-output.md)  |  [Next](compress-files.md)