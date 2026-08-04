####  Modifying the Built Model

The built model now exists in PRIMER and may require modification, such as fix by auto-fix or otherwise of model errors, modification of properties, modification of boundary conditions, etc. On completion of the changes the updated include file must be saved. If it is overwritten the database requires no change, however, if it is written to a new filename the database entry requires update.

The include tree (TOOLS &gt; INCLUDE) is now aware of the provenance of the model and its includes. This is displayed in hover text.

| ![](../Storage/primer-22-1/primer_links/sect_3/images/model_hover_text.gif) | ![](../Storage/primer-22-1/primer_links/sect_3/images/component_hover_text.gif) |
| --- | --- |

The [Find modified](comparing-individual-include-files.md#mod6) function may be run on all the includes if accessed off the model popup. This will write the current include to a model and read the original include file into a model. These two models are compared and any differences reported.

![](../Storage/primer-22-1/primer_links/sect_3/images/comp_disk.gif)

On completion of the function the modified includes will be marked by a red background as shown above. The details of the differences for an individual include may be reviewed by running [compare include](comparing-individual-include-files.md#mod6) off the individual include popup.

![](../Storage/primer-22-1/primer_links/sect_3/images/incl_dropdown.gif)

Write include available off the include popup can then be used to save the modified include to a new name. The entry then becomes orange to warn the user that the database entry is out of date. The hover text is also modified.

![](../Storage/primer-22-1/primer_links/sect_3/images/saved_include.gif)

Edit database available off the include popup can be used to take you directly to the entry on the database. Here the keyword file (or extra data file) entry can be updated (at a newly created version number if you are using [version tracking](version-control.md#version)), the database entry updated and the database re-saved. The orange entry will then have its grey background restored, as the model and database are again consistent.

![](../Storage/primer-22-1/primer_links/sect_3/images/back_to_database.gif)

[Previous](post-model-build-panels.md)  |  [Next](writing-the-model-using-select-files.md)