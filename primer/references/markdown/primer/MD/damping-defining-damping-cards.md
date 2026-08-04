###  DAMPING: Defining Damping Cards.

* [Main **DAMPING** menu](damping-defining-damping-cards.md#dampmain)
* [Creation](damping-defining-damping-cards.md#createdamp)

Ansys LS-Dyna offers damping control via global damping, relative damping, frequency range damping, part damping by mass and part damping by stiffness. The CEAP version additionally has modal damping.
 
All six types may be created/edited in primer using the DAMPING function from the Keywords panel.

| **DAMPING MAIN MENU** <br>This figure shows the main **DAMPING** menu.<br> <br>The total number of damping cards for all models is reported.<br> <br>The panel will allow simultaneous editing of multiple damping cards. In the cases of Global and Modal damping there is no point in editing more than one card per model.<br> <br>The static damping cards have dedicated editing panels. The others access the generic keyword editor. | ![](../Storage/primer-22-1/primer_links/sect_5/damping/damping_1.png) |
| --- | --- |

| **PART DAMPING**<br> <br>To create for a few parts, to delete and to edit, the keyword reader is perfectly sufficient. However, to enable the user to create rather larger numbers of damping cards, creation panels exist for damping part MASS and damping part STIFFNESS which allow parts to be selected from the object menu.<br> <br>**CREATING MULTIPLE DAMPING\_PART\_MASS** |
| --- |
| ![](../Storage/primer-22-1/primer_links/sect_5/damping/damping_2.gif) |

| **CREATING FROM KEYWORD READER** (see [The Generic KEYWORD Editing Panel](the-generic-keyword-editing-panel.md#keywordedit) for more details)<br> ![](../Storage/primer-22-1/primer_links/sect_5/damping/damping_3.png) |
| --- |

[Previous](cosim.md)  |  [Next](database-defining-database-options.md)