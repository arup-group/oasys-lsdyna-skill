### Ansys LS-DYNA Format (Labels, Compression, Mode)

| PRIMER "remembers" the input format of every master and include file in a model, storing the following three attributes:<br> <ol style="font-size: 14.6667px;"> <li>The&#160;Ansys LS-DYNA field width format: &quot;small&quot;, &quot;i10&quot; or large.</li> <li>The compression status: uncompressed, .gz or .zip.</li> <li>The mode used for file encoding: ASCII or binary.</li> </ol> | ![](../Storage/primer-22-1/primer_links/sect_3/images/fig_3_3_1d.png)<br><br>![](../Storage/primer-22-1/primer_links/sect_3/images/fig_3_3_1da.png) |
| --- | --- |

Option #2 can change the output filename to .gz or .zip, and option #3 can change it to .kby. These filename changes affect the logic which detects whether or not an existing file of that name exists. For example if you choose to write "model.key" as a .zip binary file PRIMER must look to see if filename "model.kby.zip" exists on disk in order to test whether it will be overwritten.
 
In addition ***Ansys*** ***LS-DYNA cannot read compressed or binary files***  , they have to be converted back to plain ASCII format if the output is to be used directly for an analysis.
 
Therefore the Model Write panel now summarises both the original "remembered" status of the model, and how it will be written out using the current settings. Options which will make it unreadable if used directly in Ansys LS-DYNA are highlighted in red. For example here .zip and binary output has been selected, so ".zip (p)" compression and "Binary" are highlighted in red. Howevering over this button will map further information about why this output will not work directly in Ansys LS-DYNA.
 
You can change settings #1 to #3 in the "Format" popup in this panel, or defer the changes to the Next &gt;&gt;&gt; pre-output check panel. The advantage of doing this in this context is that any changes which affect the filename to be used will be actioned immediately, updating the check for whether or not a file will be overwritten.
 [Previous](model-write.md)  |  [Next](ls-dyna-output-pre-output-checks-and-output-options.md)