####  Ansys LS-DYNA Results Panels

If at least one output file is ticked the Apply button is enabled. When clicked, provided the [LS-DYNA output reader XML file](the-ls-dyna-output-reader-xml-file.md#readdyna_xml) is correctly found, a tree view of Errors, Warnings, and Termination Messages will be displayed.

![Read Dyna error mode](../Storage/primer-22-1/primer_links/sect_3/images/read_dyna_tree_error_mode.png)

As for the check tree, categories can be expanded or contracted using the small box to the left of the headings. Once the categories have been expanded a number appears to the right of the heading showing the number of sub-categories directly underneath this level. The show files button (off by default) will add an extra layer to tree so the errors/warnings/termination messages are displayed by output file. The warnings, termination messages, and smallest timesteps buttons toggles the warnings, termination messages, and timesteps branches, respectively, on or off.

By default the Ansys LS-DYNA output tree viewer opens in -&gt;error mode (as shown above). In this mode the tree branches can be expanded to view at the first level, a generalised version of the error/warning; at the second level the entity type(s) to which the error/warning pertains (if known/relevant, otherwise ENTITY is shown); at the third level a list of entity labels referred to by the error/warning (if found) or a shortened form of each specific error/warning message. Hovering over any shortened messages will display the full message text.

![Read Dyna timesteps error mode)](../Storage/primer-22-1/primer_links/sect_3/images/read_dyna_tree_error_mode_timesteps.png)

For the timesteps branch, the -&gt;error mode appears slightly differently (as shown above). This branch can only be expanded as far as the second level, at which the entity specifc message is shown. Hovering over the second branch will give column titles for the data displayed in the message. Additional operations and right-clicking (as described below) can be performed on this second level.

In -&gt;item mode (shown below) the tree branches can be expanded to view at the first level the entity types that have errors/warnings associated with them; at the second level a list of entity labels that are referred to by one or more errors/warnings; at the third level a shortened form of each specific error/warning pertaining to that particular entity.
 
![Read Dyna item mode](../Storage/primer-22-1/primer_links/sect_3/images/read_dyna_tree_item_mode.png)
 
Various operations are available once an entity label or type has been selected. Multiple selections are possible using the shift and control keys (similar to the part and check tree behaviour). Viewing operations can be utilised through the buttons at the top of the panel to Sketch, Unblank, and manipulate the model display. Autosca will autoscale the model display after an Only operation. List will give a concise summary of the errors, warnings and termination messages in a text box. The show tags button toggles on and off the Ansys LS-DYNA error/warning tags, e.g. STR+339.
 
![Read Dyna popup box](../Storage/primer-22-1/primer_links/sect_3/images/read_dyna_popup.png)
 
Right-clicking on an selection brings up a popup (the figure shown above). Here, if possible the selection can be sketched, deleted, and viewed in different ways. The user can also edit the entity (if a single entity has been picked) via an edit panel or a keyword editor or look at its xrefs within the model using the [cross-reference viewer](xrefs-cross-references-viewer.md) in a separate panel. Clipboard functions are also available. The popup Go to time will change the STATE DISPLAY time in an integrated D3PLOT session. If an integrated D3PLOT session is not already running , a new D3PLOT session will be started. The sketch option also sketch parts and elements referenced in the erro/warning message in an integrated D3PLOT session.

[Previous](read-existing-ls-dyna-results.md)  |  [Next](the-ls-dyna-output-reader-xml-file.md)