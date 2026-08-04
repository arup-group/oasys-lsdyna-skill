#####  Include Files and Compression

Several issues arise when combining [compressed output](pre-out-compress-tab.md#pre_compress) with include files.

######  Using Select Files with .zip package compression

If [compressed output](pre-out-compress-tab.md#pre_compress) (eg .gz or .zip) has been selected, then individually written include files will be written in compressed form, however a problem arises if:

* Compressed output with all files written to a single .zip archive is selected 
and
* The master file is not selected for output in the include tree (ie " **demo.key** " in the example above is not selected).

In this situation what should the .zip file package be called? To solve this problem PRIMER does the following:

* The master archive file *name* .key.zip (in the example above " **demo.key.zip** ") is still created.
* The master keyword file name.key (" **demo.key** " in the example above) is written to that file, however it will only contain \*INCLUDE keywords.
* The selected include files are added to the .zip archive as normal.

######  Does compression have to apply to all include files? 
 
No. When  ***reading***  a file PRIMER uses the "fuzzy logic" described in [Reading of files using compression (.gz and .zip) and binary (.kby) formats](reading-of-files-using-compression-gz-and-zip-and-binary-kby-formats.md#read_gz_etc) above which permutes the various possible filename extensions to find one that is present. This might be the raw filename, or it might be a .gz, .zip, .kby or other variant.

When  ***writing***  a file you have the following options (see [Compress files](compress-files.md#compress_files) below):

1. No compression, so all files are uncompressed (raw)
2. Keep original, so each file is written in the format in which it was read.
3. Compress all files to individual .gz format
4. Compress all files to individual .zip format
5. Compress all files into a single .zip package

With the exception of option #2, Keep original, the original input format is not considered. Therefore any file can be read in any format, and written in any format.

######  How should compressed files be named in *INCLUDE keywords? 
 
They should always use their uncompressed (raw) syntax in the keyword file. For example all of the include files **include.key**  *,*  **include.key.gz**   and **include.zip** should be referred to by the keyword
 
\*INCLUDE 
include.key
 
PRIMER will automatically try the various alternatives (.key, .key.gz, .zip) when searching on disk for the file, see [Reading of files using compression (.gz and .zip) and binary (.kby) formats](reading-of-files-using-compression-gz-and-zip-and-binary-kby-formats.md#read_gz_etc) above.
 
In the case of the master file being a packaged .zip file (ie reading **master.zip** ) it will first look for the file using its raw name inside /INCL sub-directory in the package, and if it is not found it will look on disk as above.

 [Previous](select-files-output-method.md)  |  [Next](pre-out-options-tab.md)