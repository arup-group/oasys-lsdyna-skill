####  Saving and Discarding Changes

 ![](../Storage/primer-22-1/primer_links/sect_5/5a/kwe_top.png) 
Changes made to **Data rows** in the keyword editor update the current database definitions immediately, but these changes only become permanent if and when you UPDATE to end an editing session. However any new entries that you have [CREATED](creating-a-new-definition-in-the-entry-row.md#using_create)will remain in the database regardless of how you exit the editor.
 
In more detail:

| CANCEL | Undoes all edits, and exits the editor leaving all original definitions unchanged |
| --- | --- |
| UPDATE | Exits the editor making all changes permanent |
| RESET\_ALL | Undoes all edits (equivalent to a Reset on every modified **Data Row**), returning all rows to their original state. |
| CHECK\_ALL | Runs the standard checking function on all **Data rows** and reports the results. |
| HELP | Provides a text summary of how the keyword editor works. |
| SKETCH\_ALL | Sketches all **Data rows** on the current model |

[Previous](working-with-multiple-rows.md)  |  [Next](general-rules-in-the-keyword-editor.md)