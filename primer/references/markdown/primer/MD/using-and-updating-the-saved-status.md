###  Using and Updating the "SAVED" Status

![](../Storage/primer-22-1/primer_links/sect_6/attached/fig_6_6_5.gif)When you enter  **ATTACHED**  the current visibility status is saved in a backup blanking table. All  **APPLY**  operations operate only on the current blanking table, leaving this backup unchanged.
 
The reason for this is simple: most usage of  **ATTACHED**  reveals too much information in the first pass, and it is necessary to go back and repeat the process with some **attached** categories switched off.

| RESTORE SAVED | Copies the backup blanking tables to the "current" ones, effectively restoring the initial state. <br>You can  **RESTORE\_SAVED**  as many times as you like within a given usage of  **ATTACHED**  .<br> <br>Because the backup tables are always rebuilt from what is currently visible whenever you (re)enter  **ATTACHED**  they are effectively "lost" whenever you close this panel. To maintain a backup while performing other operations you can [iconise](window-management-in-the-screen-interface.md#24Windowmanagementinthescreeninterface)this panel rather than closing it. |
| --- | --- |
| SAVE CURRENT | Copies the current blanking tables, ie what is currently visible, into the backup ones (overwriting them). This then becomes the new "saved" state. <br>You can SAVE CURRENT at any time, but doing so loses your original saved state irretrievably. |

[Previous](restricting-the-extent-of-attached-to-propagation.md)  |  [Next](how-attached-inter-reacts-with-entity-viewing-and-blanking.md)