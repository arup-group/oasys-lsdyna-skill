###  Finding Connected Panels

![](../Storage/primer-22-1/primer_links/sect_6/connection/connected_3.gif)This panel allows you to find connections that are tied to panels. It also allows you to find panels tied to connections.
There is also a [switch that alters which panels are displayed](finding-connected-panels.md#unblankpanels).
 
When finding panels tied to connections ( panels from welds/bolts/adhesive ), select the connection and press Apply . PRIMER will blank the whole model then unblank the connection and all panels attached to it. In order to undo the blanking that PRIMER has just done, press the Reset blanking button.
 
When finding connections tied to panels ( welds/bolts/adhesive from panels ), select the panel you wish to find the connections attached to by any of the usual methods and press Apply . This option will only find attached if the connection has been made, i.e. contains FE entities. To find connections associated to a panel by connection layer (i.e. the connection may not be realized and may not contain FE entities) use welds/bolts/adhesive from layer parts . If the Unblank panels button is set, PRIMER will blank the whole model then unblank the selected panel, the attached connections and any other panels tied to these connections. If the Unblank panels button is not set, PRIMER will blank the model then unblank the selected panel and attached connections. In order to undo the blanking that PRIMER has just done, press the Reset blanking button. You can store the blanking status by hitting Store blank status.
 
### 

When finding seams connected to panels - select the panels you want the seams to join and press Apply . If you select parts 1, 2, 3 and 4 then **ANY** connection which ties **ANY** combination of these parts together will be shown.

When finding a single seam from a panel, select the panels you want the seam to join and press Apply . If you select parts 1, 2 and 3 then **ONLY** the connections joining **ALL** of these panels will be displayed.

For more on how the function works look at the following [example](An%20example%20of%20how%20to%20set%20up%20a%20database%20and%20how%20to%20use%20%20%20it..html#example).

####  Example

The following figure shows the front of a vehicle. It has been welded together using the PRIMER spotwelding ability. We want to find which panels are attached to the floorpan by spotwelds or bolt connections.

![](../Storage/primer-22-1/primer_links/sect_6/connection/connected_1.gif)

| First, we select the panels we want to find connections attached to by either picking the panel from the screen or selecting the panel from the list. <br>Secondly, set/unset the Unblank panels switch.<br> <br>Press the Apply button.<br> <br>[Result if Unblank panels is set](finding-connected-panels.md#set). <br> [Result if Unblank panels is unset](finding-connected-panels.md#unset). | ![](../Storage/primer-22-1/primer_links/sect_6/connection/connected_3.gif) |
| --- | --- |

##### Result if Unblank panels set
 
If the switch is set PRIMER will blank the model, unblank the part you selected, find and unblank the connections attached to that part, and also find and unblank the panels that are attached by those connections.
 
![](../Storage/primer-22-1/primer_links/sect_6/connection/connected_4.gif)
 
##### Result if Unblank panels unset
 
If the switch is unset PRIMER will blank the model, unblank the part you selected and find and unblank the connections attached to that part.
 
![](../Storage/primer-22-1/primer_links/sect_6/connection/connected_5.gif)

[Previous](options-in-the-connections-table.md)  |  [Next](finding-unconnected-panels.md)