###  Include File Structure

![](../Storage/primer-22-1/primer_links/sect_3/images/incl_7.gif)

The "INCLUDE" button in the tools panel will invoke a tree diagram (shown above in EXPAND ALL mode) describing the include structure of the models in memory. Models built of include files are referred to as "**Master models**", the include files themselves are generally "**Component models**" (which will usually be valid Ansys LS-dyna models in their own right) and "**connection files**".

Include files offer an easy, robust method to organise your analyses into a file structure, represented above as a tree, of smaller (component) files which can be edited individually.

The "Master keyword file" or "Root file" (at the top of the tree) references all the include files which reside at the first layer of depth. These files themselves may then contain include files at second layer of depth, and so on.

The Include files can exist in different directories to the Master file allowing the user to organise the them with flexibility (e.g. under different directories in a database). On keying out the model each include file is referenced after its \*INCLUDE statement, either with the **full path** or with the **path relative to the master file** . See [MODEL &gt; WRITE](includes-how-includes-are-written.md#incl_how).

 **Compressed and binaryAnsys LS-DYNA input files**  
In the Include tree, if multiple variations of an include file exist on disk, the actual file read (for example child\_1.key.gz) is listed first with the raw name (eg child\_1.key) appended. There are symbols to denote compression and binary, and also a warning symbol if the file read is not the raw name in the include statement or there were multiple doppelganger candidate filenames. Hovering over such a row gives details of the differences. See [Reading of files using compression (.gz and .zip) and binary (.kby) formats](reading-of-files-using-compression-gz-and-zip-and-binary-kby-formats.md#read_gz_etc) for more details.
 ![](../Storage/primer-22-1/primer_links/sect_3/images/doppelganger_include_tree.png)[Previous](include-files.md)  |  [Next](reading-in-selected-include-files.md)