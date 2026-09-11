###  Display of Different Properties

Properties mode uses the part table.

All the matched pairs are then checked against one another for all the values that the part table treats (see ) and a part table is constructed for the part pairs which show differences.

The parts are listed in the form M1/Px, M2/Px, M1/Py, M2/Py, etc and the sorting of the Part ID column will always restore this order.

All the appropriate columns are displayed and the difference is highlighted. In this example, many parts have changed include file.

![](../Storage/primer-22-1/primer_links/sect_7/partcompare/comp6.gif)

You may use shift-select to select unwanted part pairs and then apply Remove Selected .

If we are not interested in the include change, we can use View.. to de-activate that column and Refresh to rebuild the table. Any part pairs from which the **only** diference is their include are now removed from the data stacks.

![](../Storage/primer-22-1/primer_links/sect_7/partcompare/comp7.gif)

We may then use the part table functionality to investigate and edit data as appropriate. For example, by using View... to activate display of Mat ID and editing the material for M1/P20443 to correct the density from 1.3e-6 to 1.2e-6.

![](../Storage/primer-22-1/primer_links/sect_7/partcompare/comp10.gif)

Refresh of the table will then remove part 20443 as the data is consistent across models

![](../Storage/primer-22-1/primer_links/sect_7/partcompare/comp11.gif)

####  Showing the difference

By default the table shows values with hover text to show the absolute and percentage differences wrt the other value.

![](../Storage/primer-22-1/primer_links/sect_7/partcompare/comp12.gif)

By activating the difference switch you may show the absolute difference for floating point numbers. For other types the string &lt;different&gt; will be written.

![](../Storage/primer-22-1/primer_links/sect_7/partcompare/comp13.gif)

The difference for floating point numbers may also be usefully expressed as a percentage.

![](../Storage/primer-22-1/primer_links/sect_7/partcompare/comp14.gif)

[Previous](selection-of-parts-to-compare.md)  |  [Next](display-of-different-geometries.md)