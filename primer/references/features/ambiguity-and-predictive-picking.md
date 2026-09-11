###  Ambiguity and Predictive Picking
 
PRIMER has two possible ways of handling ambiguity during screen-picking operations. In the Picking and Selection panel shown above you can choose whether or not to map the Ambiguous selection menu using the options:

| | OFF: always choose closest | Picks always select the closest item without any further intervention from the user. Note that this is the default. |<br>| --- | --- |<br>| ON: Show menu of nearest | A list of possible candidates sorted by distance from the pick point is shown, and the user is invited to choose which is to be used. | | ![](../Storage/primer-22-1/primer_links/sect_4/images/fig_4_7_5.png) |
| --- | --- |

Predictive Picking works with this setting as follows:
 
* When the ambiguous menu is turned OFF Predictive picking will only ever show the closest item.
* When the ambiguous menu is turned ON Predictive picking will show all possible candidates if the current cursor position would result in an ambiguous selection. 
 
In this second case only the closest item is labelled (assuming that labelling is active), and it is drawn in colour (yellow or blue depending on the background colour). All other potential candidates are only drawn, and in the current sketch colour (black or white depending on background colour).

| This is illustrated in this example.<br> <br>Here the display mode is LINE (ie no hidden surface removal), we are currently picking Nodes, and the cursor has been positioned just outside the mesh.<br> <br>Three possible candidate nodes have been identified and highlighed, but only the nearest (M1/N101890) is labelled.<br> <br>If the ambiguous menu was OFF then only N101890 would have been sketched and labelled. | ![](../Storage/primer-22-1/primer_links/sect_4/images/fig_4_7_6.png) |
| --- | --- |

[Previous](controlling-predictive-picking.md)  |  [Next](description-of-menu-hover-over-highlighting.md)