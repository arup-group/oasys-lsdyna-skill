#####  Compress Files

| If this option is used then the current output files (of whatever format: small, large, binary) are compressed using the Huffman coding in ZLIB into one of the following formats: <br><br><br><br><br>| ".gz" format | Industry standard "gzip" format as handled by g(un)zip etc |<br>| --- | --- |<br>| ".zip" format | Industry standard "zip" format as handled by Winzip etc | | ![](../Storage/primer-22-1/primer_links/sect_3/images/fig_3_3_2j.png) |
| --- | --- |

The .gz and .zip files produced by PRIMER can be read by the standard Winzip, gzip, etc utilities; and PRIMER can read files created by those utilities provided that they use the default Huffman compression method.

| **Compressed format** | **Typical output** | **What is done.** |
| --- | --- | --- |
| Not compressed | All output is uncompressed | Regardless of the input compression status all master and include files are written in uncompressed form. Filnames will be adjusted if necessary, for example if compressed file **model.key.gz** was read it will be written as **model.key** . |
| Keep original format | Output compression matches input. | For each file individually, ie master file and any include files, the input compression status is "remembered" and re-used during output. |
| Individual .gz files | master.key =&gt; master.key.gz <br>child.key =&gt; child.key.gz | Regardless of input compression each file is separately compressed from its original form into .gz format, producing multiple .gz files. Files will be renamed as necessary, for example **include.key** will become **include.key.gz** |
| Individual.zip files | master.key =&gt; master.zip <br>child.key =&gt; child.zip | Regardless of input compression each file is separately compressed from its original form into .zip format, producing multiple .zip files. Files will be renamed as necessary, for example **include.key** will become **include.zip** |
| Packaged .zip format | master.key } <br>child1.key } =&gt; master.zip <br>child2.key } | Regardless of input compression all files, that is master file and all include files, are compressed into a single master .zip file. The directory structure **INCL** / *child* is preserved within the zip package, and the master file will be renamed as necessary, for example **master.key** will become **master.zip** . |

The treatment of include files is covered in [Include files and Compression](include-files-and-compression.md#incl_and_compress) above.

Level : the degree of compression.
 
The Huffman coding used by ZLIB works by looking for repetition of similar blocks of data in a file, and replacing the 2nd and subsequent references to a (long) block of data with a (short) reference to that block. Clearly the greater the distance within the file a search is made the more likely a match is to be found, but equally this search will take longer to perform, so there is a trade-off between compression time and file size.
 
Normal implementations of gzip and winzip use "default" compression, which is actually 6 in a range of 1 (least) to 9 (most), and while the time taken to compress a file rises linearly with "level" the amount of compression obtained tends to be some power less than one of the "level value. We could draw a graph something like this (values are notional):
 
![](../Storage/primer-22-1/primer_links/sect_3/images/fig_3_3_2k.png)

**File size reduction**
 
Most users of PRIMER will be working interactively and are likely to want the fastest output rather than the smallest file size, and experience shows that setting the lowest level of compression gives an acceptable result without costing too much time to compress during file output, therefore the default is 1 which tends to reduce typical small format ascii files to about 20 - 25% of their original size. However users who wish to prioritise small file size may wish to set a higher value.
 
***Note***  : the compression level will not affect the ability of the standard gunzip and winzip utilities to read these files, they will read files written with any level of compression in the range 1 to 9.
 
**Speed of output of compressed ascii files.**
 
At the lowest level of compression speed-up of writing ranges from about 1.25x faster to a fast local disk, and up to 4.0x faster to a remote disk on a slow network.

**Reading of compressed ascii files by PRIMER**
 
****  **** PRIMER can read compressed files directly, there is no need to convert them externally back to ascii format. When given a file with ".gz" or ".zip" extension it will automatically decompress the contents.
 
**Speed of reading compressed ascii files.**
 
Decompression is threaded (parallelised) so decompression does not have much impact on the speed of reading. From a fast local disk there is little difference, from a remote disk on a slow network reading can be up to 2.5x faster.
 
**Reading encrypted .zip files**
 
****  **** PRIMER will read encrypted .zip files, detecting encryption automatically and prompting you for a password.

 [Previous](pre-out-compress-tab.md)  |  [Next](write-binary-format.md)