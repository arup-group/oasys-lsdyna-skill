####  Custom Merging Global Parameters

![](../Storage/primer-22-1/primer_links/sect_3/images/fig_3_4_1_2.gif)

This figure shows the global parameters window for the example above. You can see that:

| DATABASE\_EXTENT\_BINARY <br>DATABASE\_EXTENT\_SSSTAT, LOAD\_BODY | Cards only exist in one of the 2 models so there is no problem. |
| --- | --- |
| AIRBAG\_REFERENCE\_GEOMETRY, CONTROL, <br>DATABASE\_ASCII <br>DATABASE\_BINARY | Cards exist in both models and so there are duplicate cards which is causing a problem. |

#####  Resolving clashes using the global "Action" popup menu

The problems arise because the default action for all the types is to copy from both models ( **Copy from M1 and M2** ). This can be changed for all types, or for each individual type by using the action popup. The actions are self explanatory except for the last two. The  ****  **Copy from M1 (or M2 if not in M1)**   **** card is only in the first model or is in both models. If will take a card from the first model if the the card is only in the second model it will be taken from the second model. This is useful if you want to make sure that all control cards are copied from both models. They will be taken from both but the control cards in the first model will take precedence over the control cards in the second model.

![](../Storage/primer-22-1/primer_links/sect_3/images/fig_3_4_1_3.gif)

![](../Storage/primer-22-1/primer_links/sect_3/images/fig_3_4_1_4.gif)

As appropriate actions are chosen for each type (or all types) the DUPLICATES will be replaced by DUPLICATES\_FIXED . The figure above shows the same model after actions have been chosen to fix problems.

Summary or detailed information on a problem with each type is available by using the information popups.

[Previous](custom-merge.md)  |  [Next](custom-merging-basic-model-data.md)