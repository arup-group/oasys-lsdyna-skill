####  Custom Merging Basic Model Data

![](../Storage/primer-22-1/primer_links/sect_3/images/fig_3_4_1_5.bmp)

This figure shows the basic model data window. In this example there are problems with clashes in the types NODE, SHELL, SET\_PART, PART, MATERIAL, SECTION, HOURGLASS, CONTACT, DEFINE CURVE, GROUP and ASSIGN MASS . Clicking on the question mark maps a menu from which Only or Sketch all clashing items can be performed. Further pop-ups in this menu allow Blank , Unblank , Only , Sketch and Edit actions on individual items.

#####  Resolving clashes using the basic "Action" popup menu

Just as in the global parameters window, actions can be used to solve the clash problems.

![](../Storage/primer-22-1/primer_links/sect_3/images/fig_3_4_1_6.gif)

The actions available to resolve these, in the CLASH &gt; popup menu, are, in more detail:

| 1 | Copy from both. Inc M1 always | The items will be taken from both models. The labels of all items in M1 (of this type) are renumbered to be above the item labels in M2 |
| --- | --- | --- |
| 2 | Copy from both. Inc M1 if needed | The items will be taken from both models. The labels of items in M1 (of this type) will be renumbered to be above the item labels in M2 only if there is a clash. If there is no clash the original label will be used |
| 3 | Copy from both. Inc M2 always | As 1. except models swapped. |
| 4 | Copy from both. Inc M2 if needed | As 3. except models swapped. |
| 5 | On clash copy only M1 | The items will be taken from both models except when there is a label clash. When this occurs only the item from M1 will be taken |
| 6 | On clash copy only M2 . | As 5. Except item will be taken from M2 |
| 7 | No renumbering . | Nothing will be renumbered. This is only possible if there are no clashes. |

![](../Storage/primer-22-1/primer_links/sect_3/images/fig_3_4_1_7.bmp)

As appropriate actions are chosen for each type (or all types) the CLASH will be replaced by CLASH\_FIXED . This figure shows the same model after actions have been chosen to fix problems. The **action** column shows what has been done in each case.

[Previous](custom-merging-global-parameters.md)  |  [Next](custom-merging-other-model-data.md)