###  Methods of Selecting Connections

Several of the connections functions (e.g.  [Table](connection-table.md), [Delete](deleting-connections.md),  [List](listing-connections.md) etc.) allow you to select which connections you want to work on by several different methods. At the top of the panel you can select which connection types you wish the different methods to apply to.

![](../Storage/primer-22-1/primer_links/sect_6/connection/connection_select2.png)

| <ul> <li> <span class="buttontext">all connections </span>. All the connections in the model are selected. </li> <li> <span class="buttontext">by connection id </span>. You can select which connections to modify by picking or using the object menus. </li> <li> <span class="buttontext">by panels </span>. Connections that use any of the selected parts in their layer definitions. Note that the connection does not have to be made for this. </li> <li> <span class="buttontext">by attached panels. </span>Any connections that are attached to any of the panels you select. Note this implies that the connection is &#39;realized&#39; </li> <li> <span class="buttontext">by spotweld part </span>. Any spotweld beams or solids using the specified part(s). </li> <li> <span class="buttontext">by spotweld beam </span>. Choose connections by spotweld beam. </li> <li> <span class="buttontext">by spotweld solid </span>. Choose connections by spotweld solid. </li> <li> <span class="buttontext">by adhesive part </span>. Any adhesive runs using the specified part(s). </li> <li> <span class="buttontext">by multiple seams </span>. Any connections that only use some (or all) of the selected parts (see <a href="methods-of-selecting-connections.md#explanation">Multiple or single seam selection</a>&#160;for a more detailed description). </li> <li> <span class="buttontext">by single seam </span>. Connections that use all of the selected parts (see <a href="methods-of-selecting-connections.md#explanation">Multiple or single seam selection</a>&#160;for a more detailed description). </li> <li> <span class="buttontext">by connection title </span>. A box opens up to enter a title search string. </li> </ul> | ![](../Storage/primer-22-1/primer_links/sect_6/connection/connection_select1.gif) |
| --- | --- |

####  Multiple or single seam selection

When selecting by multiple seam the connections and/or their related entities that are attached to **ANY** of the selected parts **AND NOT** attached to **ANY** deselected parts will be selected. For example, in the figure below, if part 3 and part 4 are selected then the two beams on the right will be chosen. If parts 1, 2, 3 and 4 are selected then all 4 beams will be chosen.

When selecting by single seam the connections and/or their related entities that are attached to **ALL** of the selected parts **AND NOT** attached to **ANY** deselected parts will be selected. This will only ever be one seam. For example, in the figure below, if part 3 and part 4 are selected then the two beams on the right will be chosen. If parts 1, 2, 3 and 4 are selected then ONLY the two beams on the left will be chosen.

![](../Storage/primer-22-1/primer_links/sect_6/connection/del_weld_9.gif)

[Previous](connections.md)  |  [Next](automatic-creation-of-connections-from-welds.md)