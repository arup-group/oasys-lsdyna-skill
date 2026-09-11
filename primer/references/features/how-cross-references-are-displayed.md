###  How Cross References Are Displayed

Cross references for an item are displayed using 2 'tree' views. 
The left hand tree shows the items that are **referred to by the selected item** . For example below \*SET\_PART 1 is referred to by CONTACT cards (as there is a CONTACT branch in the left hand tree). 
The right hand tree shows the items that the **selected item refers to** . For example below \*SET\_PART 1 refers to PART cards (as there is a PART branch in the right hand tree).

A tab is shown ( S\_PT 1 ) at the top of the panel for each item (only \*SET\_PART 1 in this example). If [multiple tabs](multiple-tabs.md#multipletabs)are shown you can switch between them by pressing the tabs.

![](../Storage/primer-22-1/primer_links/sect_6/xref/xrefs2.gif)

To expand a branch click on the ![](../Storage/primer-22-1/primer_links/sect_6/xref/plus.gif)symbol. For example to see the parts that \*SET\_PART 1 refers to click on the ![](../Storage/primer-22-1/primer_links/sect_6/xref/plus.gif)on the PART branch. The branch is expanded and the parts are shown.

The cross reference viewer allows you to carry on looking for references, expanding branches as required. So, for example, we may want to look to see what PART 308 refers to. Does it have any references? At the moment we don't know. PRIMER does not calculate all the references in the tree at the beginning as this could take a long time for a large model. Instead it looks for cross references when each branch is clicked on. When PRIMER does not know if a branch has cross references a ![](../Storage/primer-22-1/primer_links/sect_6/xref/blank.gif)symbol is shown instead of a ![](../Storage/primer-22-1/primer_links/sect_6/xref/plus.gif)symbol. So, in the example below we do not know if any of the parts have cross references yet.

![](../Storage/primer-22-1/primer_links/sect_6/xref/xrefs3.gif)

| To see if part 308 has references click on the ![](../Storage/primer-22-1/primer_links/sect_6/xref/blank.gif)symbol. In this example part 308 does have references ( MATERIAL and SECTION references) so the branch is expanded. If the branch did not have any references the ![](../Storage/primer-22-1/primer_links/sect_6/xref/blank.gif)symbol would just disappear.<br> <br>![](../Storage/primer-22-1/primer_links/sect_6/xref/xrefs4.gif) |
| --- |

We can continue along the branches as required. In the example below SET\_PART 1 refers to PART 308 which refers to MATERIAL 149 which refers to DEFINE\_CURVE 7. Curve 7 is the end of the branch as there is no ![](../Storage/primer-22-1/primer_links/sect_6/xref/blank.gif)symbol.

![](../Storage/primer-22-1/primer_links/sect_6/xref/xrefs5.gif)

####  Displaying set cross references

Some of the newer set options in Ansys LS-DYNA such as \*SET\_xxxx\_GENERAL, \*SET\_xxxx\_ADD and \*SET\_xxxx\_INTERSECT allow you do define the set contents by boxes, combinations of other sets etc. As well as seeing the items *referenced* in the set definition you also want to see the *actual* items that will end up in the set.

For these set types PRIMER shows 2 branches. The Set references branch shows the items referred to by the set. The Set contents branch shows the actual items that will be in the set when Ansys LS-DYNA is run.

For example in the image below \*SET\_PART\_ADD 22000 refers to part sets 1028 and 4001 in its definition. However the parts 1000, 1001, ... are the actual parts that will be in the set.

![](../Storage/primer-22-1/primer_links/sect_6/xref/xrefs_set.png)

[Previous](selecting-an-item-in-the-viewer.md)  |  [Next](sketching-editing-and-references-for-items.md)