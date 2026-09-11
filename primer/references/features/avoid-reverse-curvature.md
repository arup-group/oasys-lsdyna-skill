#####  Avoid Reverse Curvature

| In this example an extra, redundant point has been added between the shoulder and the slipring, and it has been located such that it causes reverse curvature. (A correctly meshed belt is also shown for comparison.)<br>
<br>This shows that the chassis mesh gets twisted - almost through 180deg - which is clearly wrong, and while it could be corrected by adjusting the belt twist it is better to avoid it in the first place by sensible positioning of path points.<br> ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fig_7_2_3_2r.gif) |
| --- |
| A common cause of this happening is the use of too many points when defining a path. In the example here point 4 is unnecessary: the dotted line shows how it causes reversal, whereas omitting it (long dashes) works OK.<br> <br>Remember that an initial path does not have to follow dummy contours exactly: it needs only to make a suitable initial shape for subsequent form-finding, thus a very simple shape will be adequate.<br> <br><br> ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fig_7_2_3_2u.gif) |

[Previous](aborting-path-operations.md)  |  [Next](choose-as-few-points-as-possible-for-each-path-segment.md)