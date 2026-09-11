### Browse for Missing Include Files

If PRIMER fails to locate an include file during a [**MODEL &gt; READ**](model-read.md#32MODELREAD)operation, it will generate a popup panel that will permit users to manually locate the missing files.

![](../Storage/primer-22-1/primer_links/sect_3/images/missing_inc_file.gif)

The following options are available on the popup panel:

| APPLY | By default **APPLY** button is greyed out and it will be ungreyed only if a file is specified. The user can specify the file location in blue textbox or browse for the file using file selector icon. |
| --- | --- |
| SKIP | If the **SKIP** button is pressed, PRIMER will continue to read the model and will skip the missing include. |
| SKIP - DO NOT ASK AGAIN | If the **SKIP - DO NOT ASK AGAIN** is pressed it will not popup this panel again if any missing include files are encountered later when reading. |
| STOP | If the **STOP** button is pressed, PRIMER will stop reading the model. |

To turn off this feature set **"** **read\_missing\_include\_file"** preference to FALSE in "[**oa\_pref**](the-oa-pref-preferences-file.md#oa_pref)".

#### Treatment of missing include files in the model.

Missing or skipped include files (that is, files referenced by \*INCLUDE but not read) are "remembered" by default. They will appear in the include tree, but the options for operating on them are very limited. An \*INCLUDE statement for the filename will be generated during keyword output, but no file will be written.

**[Model] Read, Options** has a Remember skipped include files option:

![](../Storage/primer-22-1/browse-for-missing-include-files/browse-for-missing-include-files-2025-04-01.png)

The default is to remember skipped include files, but this can be controlled via the preference

primer\*missing\_include\_file\_action: remember | forget

Turning off the option, or equivalently setting the preference to "forget", will mean a skipped include file will not appear in the include tree and on output no \*INCLUDE statement will be written for it.
[Previous](reading-include-files-after-the-end-keyword.md)  |  [Next](include-transform.md)