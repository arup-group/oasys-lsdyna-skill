###  Options for Ansys LS-DYNA Keyword Files Only

 ![](../Storage/primer-22-1/primer_links/sect_3/images/fig_3_2_1a.png) 

| Apply | Reads the file in the nomal way, and stores it in the database |
| --- | --- |
| Inc Declash | Reads a master keyword file followed by any number of include files, and increments labels of items in include files if necessary so that the resulting model does not contain any labels clashes. It attempts to preserve existing labels where possible, but if clashes occur it is inevitable that some relabelling will take place. |
| Scan all | Scans the file looking for include files, including looking for "nested" include files (ie include file referring to child include file. An include file tree is built, and the Include panel is built: see [Include Files](include-files.md#313Includefiles). |
| Quick scan | Scans the master file only looking for include files, nested include files are ignored, and builds an Include file panel as above. (See include-files.md#313Includefiles[Include Files](include-files.md#313Includefiles) ) |
| Options | Maps a sub-menu of options to control keyword input file behaviour: |

[Previous](model-read.md)  |  [Next](options-controls-many-aspects-of-reading-ls-dyna-files.md)