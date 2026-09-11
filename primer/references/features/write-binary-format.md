#####  Write Binary Format

Binary format provides a way of both reducing file sizes and speeding up input and output. 

![](../Storage/primer-22-1/primer_links/sect_3/images/fig_3_3_2l.png)

**Description of binary format files**
 
Each line of a normal keyword file is made up of numbers and text, and these are stored in a way that is readable by humans using ascii text. For example consider the format of a \*NODE card in Ansys LS-DYNA which is:

| Field name | **NID** | **X** | **Y** | **Z** | **TC** | **RC** |
| --- | --- | --- | --- | --- | --- | --- |
| Format width | I8 | F16 | F16 | F16 | I8 | I8 |
| Internal #bytes | 4 | 4 | 4 | 4 | 1 | 1 |

Therefore this card requires (8 + 16 + 16 + 16 + 8 + 8) = 72 ascii characters for output, yet only (4 + 4 + 4 + 4 + 1 + 1) = 18 bytes for internal storage, which is 25% of the space.
 
Moreover when this file is written out in ascii format considerable cpu time has to be spent converting the internal binary format to the external ascii format, in fact for many models this conversion process is the most "expensive" part of the output process.
 
So writing this card in its internal binary format is not only faster, but also results in substantially smaller files, and this is what PRIMER 's binary format does. The file also encodes the format of each card, so a binary file can be converted back to a normal ascii file without any loss of information.

**Format of the binary file.**
 
A binary file starts off in ascii just like a normal keyword output file, then swaps to binary when the keyword
 
\*START\_BINARY
 
is encountered. Thereafter the file is binary and not human readable. The details of the binary format are proprietary.
 
This is not a standard Ansys LS-DYNA keyword, and Ansys LS-DYNA will be unable to read the file unless it is converted back to ascii.

**Formatting options:**

| Master file is wholly ascii | If this option is selected then the master file of a model will not be converted to binary format. <br>This can be useful when the master file just contains \*INCLUDE, \*CONTROL and \*PARAMETER cards and the bulk of the model's data is in include files, since it means that the top level file can be hand-edited in its entirety. |
| --- | --- |
| File start (\*CONTROL etc) is in ascii | If this option is selected then the start of every file (master and include) will be written in ascii format. "Start" in this context means initial title and comments, plus any \*CONTROL, \*PARAMETER and \*INCLUDE cards. If \*INCLUDE\_TRANSFORM are present then any \*DEFINE\_TRANSFORMATION cards associated with them will also be written in ascii. <br>This means that the start of the file remains human readable, and even though a text editor will be bamboozled by the binary data (so don't try to edit it!!) it is at least possible to inspect the top of the file in a read-only fashion. |

**File size reduction**
 
Because information about the format as well as the contents of the line have to be stored, the actual file size tends to be about 30% of the original (small format) ascii file. When writing large (wide) format files the reduction in file size is substantially greater since the external ascii format is so much more verbose, but the cost of encoding this formatting is no greater, so files may be as little as 15% of the original size.
 
**Speed of output of binary files**
 
Speed-up of file writing tends to be in the range 6.5x on a fast local disk, to better than 18x on a remote disk on a slow network.

**Reading of binary files by PRIMER**
 
PRIMER will read binary files directly. No special action is required on the part of the user as the file is opened in the normal way and PRIMER then detects the \*START\_BINARY keyword and interprets the binary format directly.
 
**Speed of reading binary files**
 
From a fast local disk input tends to be about 1.5x faster, rising to 3.0x times faster on a slow remote disk. (Binary input means that the speed bottleneck moves from file read to internal database construction.)

**Converting binary files back to ascii format**
 
PRIMER users will be able to "read binary, write ascii" if they wish.
 
For users who do not have access to PRIMER, Oasys Ltd provides a free conversion utility that will turn binary format files back into ascii format.

**Compression of binary format files**
 
Compression and binary format may be used together, ie a binary file can be further compressed to .gz or .zip format.
 
Experience shows that at the standard level of compression a typical model which compresses to 20 - 25% of its original size in ascii format will compress to 15 - 20% in binary format, so there is some gain to be had.
 
Compression at the default level of 1 increases the time taken to write and read binary format files by a small amount, usually less than 5%. On a very slow network there may be an improvement in speed if the benefit of transmitting the smaller file size outweighs the cost of compression.

**Versions of the binary format file**
 
The \*START\_BINARY keyword contains information that includes a Major.Minor version number. On reading the file this will be checked against the version numbers that this release of PRIMER understands and:
 
1. If the Major number of the file is greater than this PRIMER version's equivalent it will not be able to read the file and it will be rejected.
2. If the Minor number of the file is greater then PRIMER will attempt to read it, and this will probably succeed so long as the Ansys LS-DYNA keyword formats are understood by this PRIMER version.

A typical example of point #2 is the Ansys LS-DYNA "i10" output format that is supported in PRIMER. Binary files written by PRIMER will have a minor revision number greater than that written by versions prior to PRIMER 17.0, but will still be readable by those earlier versions so long as "i10" format - which they won't understand - is not used.

######  "Remembering" binary output format when the output format is "keep original" 
 
The binary vs ASCII format of each master and include file is "remembered" when it is read, and if "keep original" format is chosen for output the file will be rewritten in the same format.
 
This introduces a potential conflict between the original format and the [Write binary format](write-binary-format.md#write_binary) setting in this situation, which wins? The rules are:

* If Write binary format is selected this supersedes other settings, and all include files in the model will be written in binary. The master file will also be written in binary unless the "master file in ASCII" option is selected.
* If Write binary format is not selected then the output format depends upon whether "keep original format" has been selected: 
 
If it has been selected  ***and***  the original format of a file (master or include) was binary then that master or include file will be rewritten in binary. 
In all cases the file will be written in ASCII.

[Previous](compress-files.md)  |  [Next](advanced-options.md)