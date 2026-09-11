####  Writing ZTF and Group Files

| The ZTF and group files are used by D3PLOT in order to visualise during post-processing information that is not available in the normal Ansys LS-DYNA results files. Only PRIMER can write these files.
<br>The ZTF file contains information about nodal restraints, spotwelds, nodes on contacts, parts, sections, etc; which enables D3PLOT to draw and process extra information. This information is not available in the ptf, ctf or xtf files.<br>
<br>Specific ZTF modules may be selected/deselected by clicking the ZTF optionsbutton.<br>
<br>The binary Group file (.bin) is now superseded in D3PLOT, although it can still read it. Its output is preserved here for compatibility with older versions. | ![](../Storage/primer-22-1/primer_links/sect_3/images/ztf.png) |
| --- | --- |

**Writing a ZTF file**

This may be carried out in any of three ways in PRIMER :

1. As shown in the panel here: fill in a file name ( &lt;   *jobname*   &gt;.ztf is preferred) and Apply it.
2. If ZTF Output is selected in the Model &gt; Write panel file &lt;   *jobname*   &gt;.ztf will be generated at the same time as the output .key file is written. See
[LS-DYNA Output: Pre-Output Checks and Output Options](ls-dyna-output-pre-output-checks-and-output-options.md#precheck).
3. If PRIMER is run in batch mode with the following command line arguments: (see [Appendix M](command-line-arguments-to-primer.md#comm_valid)) 
 
 -d=batch -ztf=&lt; *input filename* &gt;  
 
. This method is used by the Shell to generate ZTF files automatically after an analysis has been run.

#####  Writing a binary Group file (deprecated)

This file type was read by D3PLOT 9.1 and earlier, providing a method of exporting groups in PRIMER for use in post-processing. It had the disadvantage that, being a binary file, it was not only large, opaque and uneditable, but it was also "tightly" locked to the given analysis and could not be used with a different one.

Therefore from D3PLOT 9.2 onwards an alternative way of exporting group information as an ASCII file via the  [GROUPS-&gt;EXPORT](group-io.md#groupio) function was introduced: (see [GROUPS](groups.md))

* This is simply a copy of the \*GROUP keywords (after \*END ) used by PRIMER to encode group information in the keyword output file.
* It format is compact, being typically less than 100 lines line.
* It is in a "human friendly" format and, being an ASCII file, it is manually editable if required.
* It is also flexible: any mis-match between the group file contents and the file being processed is simply ignored, making it usable over a wide range of broadly similar analyses.

ASCII groups file may also be read into PRIMER using [GROUPS-&gt;IMPORT](group-io.md#groupio).

Although D3PLOT 9.2 onwards will continue to read the binary groups file it is strongly recommended that you use the ASCII version instead. This feature may be withdrawm in future releases of PRIMER.

[Previous](utilities.md)  |  [Next](write-summary-file.md)