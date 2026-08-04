###  Deleting Connections

| This panel allows you to delete connections and their related entities. <br>You can specify which connections to delete by a number of different methods. For more details of the different methods see .<br> <br>Once you have selected which connections you want to delete and the [method for deleting them](deleting-connections.md#deletemethod) pressing Apply will delete the selected connections. | ![](../Storage/primer-22-1/primer_links/sect_6/connection/del_weld_1.gif) |
| --- | --- |

####  Selecting the deletion method

| If Delete connection (and FE?) is set, connections and related FE entities (spotweld beams, NRBs, etc.) will be deleted all together. The connection point is lost. | ![](../Storage/primer-22-1/primer_links/sect_6/connection/connection_delete01.gif) |
| --- | --- |

| If Delete connection contents only is set, the connection related FE entities will be deleted but the connection data (coordinates, layers, etc.) will not be deleted and therefore the connection can be remade later. | ![](../Storage/primer-22-1/primer_links/sect_6/connection/connection_delete02.gif) |
| --- | --- |

####  Merging spotweld connections

Two or more welds can be merged together by selecting them and applying the merge. A weld will be made at the average coordinate of the selected welds, re-making the layer definition as necessary.

If the option min dist between connections is set, PRIMER will expect all selected welds to be within that range of the averaged position. If not a warning will be isssued.

![](../Storage/primer-22-1/primer_links/sect_6/connection/weld_merge.gif)

The selected welds must share at least one part, have the same pid, configuration and diameter. Then the merge will proceed.

![](../Storage/primer-22-1/primer_links/sect_6/connection/before_merge.gif)

The two central welds have been merged to form a new weld.

![](../Storage/primer-22-1/primer_links/sect_6/connection/after_merge.gif)

[Previous](creating-spotweld-lines.md)  |  [Next](connection-table.md)