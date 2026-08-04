####  Error Tree Viewer

When PRIMER has performed the model check, the results are grouped into errors and warnings and then sub-divided into entity categories. Each category has further divisions to group the checks together, depending on the mode selected:

1. &gt;error mode lists under each error code the entities which exhibit the error. This is the default mode.
2. &gt;item mode lists under each entity which has been found to have an error, the error or errors which pertain to it

![](../Storage/primer-22-1/primer_links/sect_3/images/fig_3_9_2_1_1.gif)

![](../Storage/primer-22-1/primer_links/sect_3/images/fig_3_9_2_1_2.gif)

Navigation of the errors and warnings is very simple due to the hierarchy within the error tree. Categories can be expanded or contracted using the small box to the left of the headings. Once the categories have been expanded a number appears to the right of the heading - showing the number of sub-categories directly underneath this level.

INCLUDE button will add an extra layer to tree so the errors are diplayed per include file. WARNINGS button will toogle these on or off.

![](../Storage/primer-22-1/primer_links/sect_3/images/tree_by_include.gif)

Various operations are available once an error(s) has been selected. Multiple selections of errors are warnings are possible using the shift and control keys (similar to the part tree behaviour). Viewing operations can be utilised through the buttons at the top of the panel to sketch , unblank , and manipulate the model display to help identify the problem.

List will give a concise summary of the errors and warnings in a text box. If INCLUDE is active, the listing will be by include file.

![](../Storage/primer-22-1/primer_links/sect_3/images/fig_3_9_2_1_3.gif)

Right-clicking on an selection brings up a popup (the figure shown above). Here, if possible the selection can be sketch ed  , autofixed (this is [explained below](auto-fixing-errors.md#Autofixing)), explained (extra details if available), deleted , and viewed in different ways. The user can also edit the entity (if a single entity has been picked) or look at its xrefs within the model using the [cross-reference viewer](xrefs-cross-references-viewer.md) in a separate panel.

On completion of an autofix or deletion of item in error, in consideration of speed with larger models the recheck function will be run only on the type directly affected. In most cases this action will be suffiecient. However, sometimes fixing one error will fix other errors implicitly and occasionally it may cause new errors to appear. It is recommended, therefore, that you do a full recheck when you have completed you fixes by pressing Recheck.

The drop-down from the check tree allows Nodes and Elements in error to be written to a set, parts to be put onto the table, and contact penetration and tie errors to be written to sets in a separate include (warnings.k) file. Pressing err-&gt;warnings.k will run the contact checker and generate node and segment sets each with a title corresponding to the error detected.

![](../Storage/primer-22-1/primer_links/sect_3/images/warnings.k.gif)

[Previous](check-output.md)  |  [Next](summary-table-panel.md)