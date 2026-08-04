###  The BLANK Menu

This figure shows the main **BLANKING** Menu:

| ![](../Storage/primer-22-1/primer_links/sect_4/images/fig_4_5_1.gif) | It has three colour-coded states: <br><br>| **BLANK** | (Red) makes the selected entities invisible. |<br>| --- | --- |<br>| **UNBLANK** | (Green) makes the selected entities visible again. |<br>| **REVERSE** | (Blue) inverts the status of the selected entities. |<br><br> <br><br> <br>To use it: select a list of items, choose one of the three states above, and press APPLY .<br> <br>The effect will be seen the next time the image is drawn, or when UPDATE is used. |
| --- | --- |

The **ALL\_xx** commands are to provide short cuts for commonly issued commands:

| ALL\_MODELS | Means  ***everything***  ! All the contents of all models currently in memory will be operated on. |
| --- | --- |
| ALL\_CONTACTS | Means all contact surfaces in all models. |
| ALL\_RIGIDWALLS | Means all rigid walls in all models. |
| ALL\_ELEMENTS | Means all elements (of all types) in all models. |

These short cut commands will operate faster than the equivalent commands from the SELECT menu since they don't have to perform the hierarchy propagation checks implicit in using the menu.

| RESET | Resets to null the contents of the SELECT menu. This may be used to delete any current selection and start again. |
| --- | --- |
| UPDATE | Redraws the current image following a blanking change. This is necessary to see the effect of any changes (unless the Update Level in the View Control box has been set to "frequent", in which case changes take effect immediately). |

[Previous](blanking-controlling-entity-visibility.md)  |  [Next](recursive-blanking.md)