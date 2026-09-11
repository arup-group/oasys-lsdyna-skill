####  Filter by: Controlling What Is Shown in the Panel

![](../Storage/primer-22-1/primer_links/sect_5/5a/kwe_3.png)

\*CONSTRAINED\_JOINT has four possible sub-keywords:

| **1: Joint type** | **2: Force output option** | **3: Failure option** | **4: Label & title option** |
| --- | --- | --- | --- |
| \_SPHERICAL <br>\_REVOLUTE  <br>etc | *&lt;none&gt;*  <br> \_LOCAL | *&lt;none&gt;*   \_FAILURE | *&lt;none&gt;*  <br> \_ID |

To see the keyword suffices for each of the buttons above hover the mouse over them, and a popup window will display the relevant options.

| To control what is actually displayed in the editor click on the appropriate column and select the suffices to be shown.<br> <br>By default the [A] option, for "Automatic" will be selected for all suffices, causing all sub-types of this keyword in the model to be selected automatically for display. | ![](../Storage/primer-22-1/primer_links/sect_5/5a/kwe_2.png) |
| --- | --- |

This model contains the first three joint types, and also some \_TRANSLATIONAL ones; but the last of these has been deselected meaning that these joints are not shown in the image above.

| Many sub-keywords are optional, for example \_ID in this context, and the alternative is for that sub-keyword to be omitted altogether.<br> <br>In this situation you will be given the choice of that keyword or &lt;none&gt; as shown in the popup here for the \_ID column. | ![](../Storage/primer-22-1/primer_links/sect_5/5a/kwe_4.png) |
| --- | --- |
| This process of selection may be carried out for all sub-keyword columns, and what is shown in the editor rows below is the logical AND of the selected keyword suffices.<br> <br>You can change what is shown at any time, and the effect is only to change what is shown in the editor rows below. No change is made to the actual keyword definitions themselves. |

[Previous](use-of-button-background-colours.md)  |  [Next](displaying-data-for-different-sub-types.md)