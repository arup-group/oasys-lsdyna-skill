###  Using Text Filter to Search by Text String

By typing something into the text filter box you will limit what is displayed in the main object menu to items that match that string.

To cancel text filtering simply delete the contents of the box, and it will revert to showing &lt;No text filter&gt; as here.

| Text matching is not case sensitive, and leading and trailing white space characters are ignored. However embedded white space in a string is considered when pattern matching. In addition filtering supports the following "wildcard" characters:<br> <ul style="font-size: 14.6667px;"> <li> <span class="courierbold">?&#160;</span>means match any single character</li> <li> <span class="courierbold">*&#160;</span>means match any number of characters.</li> </ul> | ![](../Storage/primer-22-1/primer_links/sect_2/selection/fig_6_2i1.png) |
| --- | --- |

These may be used any number of times in a string, for example " \*quick\*fox\* " will match the string " The quick brown fox jumped ".
 
In addition the string has a "virtual" \* at its beginning and end, so typing in seat is exactly equivalent to typing in \*seat\* .
 
Here are some examples showing how filtering works, demonstrating the use of wildcards.

| Here is the unfiltered table | Here " diam " has been typed into the filter box, finding 3 entries | Here the filter box has been changed to " 2\*diam ", giving just one entry |
| --- | --- | --- |
| ![](../Storage/primer-22-1/primer_links/sect_2/selection/fig_6_2i0.png) | ![](../Storage/primer-22-1/primer_links/sect_2/selection/fig_6_2i3.png) | ![](../Storage/primer-22-1/primer_links/sect_2/selection/fig_6_2i5.png) |
| ![](../Storage/primer-22-1/primer_links/sect_2/selection/fig_6_2i2.png) | ![](../Storage/primer-22-1/primer_links/sect_2/selection/fig_6_2i4.png) | ![](../Storage/primer-22-1/primer_links/sect_2/selection/fig_6_2i6.png) |

[Previous](the-influence-of-selecting-a-filter-option.md)  |  [Next](filtering-by-mnn-model-tabs.md)