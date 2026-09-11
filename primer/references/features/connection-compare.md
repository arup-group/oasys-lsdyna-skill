###  Connection Compare

### The connection compare feature allows users to compare connections across models or with connection files.

![](../Storage/primer-22-1/primer_links/sect_6/connection/conx_comp_1.PNG)

There are three methods

![](../Storage/primer-22-1/primer_links/sect_6/connection/conx_comp_2.PNG)

Original - Compare with the original model connections.

Model - Compare with the any other model in PRIMER.

File - Compare with the connections present in connection files.

In case you select Model , the select model button is enabled and the other model is automatically selected if there are only 2 models in memory

![](../Storage/primer-22-1/primer_links/sect_6/connection/conx_comp_3.png)

In case you select File , the file selector button is enabled

![](../Storage/primer-22-1/primer_links/sect_6/connection/conx_comp_4.png)
 
Also, File options are enabled to select the type of connection file to be compared with.
 
![](../Storage/primer-22-1/connection-compare-2023-03-08-1.png)

One of the following modes of comparison should be selected:

![](../Storage/primer-22-1/connection-compare-2023-03-08-4.png)

The Tolerance is the spatial tolerance used to match connections across models. Those failing to meet it will be treated as unmatched.

![](../Storage/primer-22-1/connection-compare-2023-03-08-2.png)

Default settings are:

**Only show connections found**: ON - PRIMER will show only connections displayed on table.

Treat reversed layer as same L1L2=L2L1: OFF - Suppress the difference if reversed layers match (only applicable for two layer definitions).

Treat change of include file as diff: OFF.

**Filter options**: visible domain - Only process connections in the visible domain.

![](../Storage/primer-22-1/connection-compare-2024-08-21.png)

Filter options explained:

* all connections - process all connections
* visible domain - only process connections in the visible domain
* \*by layer panels - only process connections that use the selected part(s) in their layer definitions
* \*by attached panels - only process connections that are attached to the selected part(s)

\*Connections in the modified model are filtered by selected part(s) before comparing to connections in the original model.

After selecting the required comparison options hit Apply.

This brings up a connection compare table or a normal connection table depending on which mode is selected.

####  Connection compare table

![](../Storage/primer-22-1/primer_links/sect_6/connection/conx_comp_8.png)

The connection compare table shows the differences in the properties of spatially matched connections. This can be accessed from:

a) From Model modified - when Properties
button is turned on under further options for comparing connections.

Then selecting Conx-table from the popup as shown below.

![](../Storage/primer-22-1/primer_links/sect_6/connection/conx_comp_9.bmp)
 
b) From Connection compare - when show Connections with differences is selected.
 
All the matched connections are checked against one another for all the values that the connection table treats (see [Available Table Columns](available-table-columns.md#table_column_explanation)) and a connection compare table is constructed for the connection pairs which show differences.
 
The connections are listed in the form M1/CNXy, M2/CNXy, M1/CNXz, M2/CNXz, etc. and the sorting of the Connection ID column will always restore this order.
 
All the appropriate columns are displayed and the difference is highlighted. In example below, differences in bolt size/diameter, Layer, Patch area, Weld line pitch are shown.
 
![](../Storage/primer-22-1/primer_links/sect_6/connection/conx_comp_10.bmp)
 
You may use shift-select to select unwanted connection pairs and then apply Remove Selected .
 
If we are not interested in the weld line pitch change, we can use View.. to de-activate that column and Refresh to rebuild the table. Any connection pairs from which the **only** difference is their include are now removed from the data stacks.
 
![](../Storage/primer-22-1/primer_links/sect_6/connection/conx_comp_11.bmp)
 
We may then use the connection table functionality to investigate and edit data as appropriate. For example, click on diameter column of M1/CNX154, in the popup enter "6" and hit Apply .
 
![](../Storage/primer-22-1/primer_links/sect_6/connection/conx_comp_12.bmp)
 
Refresh of the table will then remove connection 154 as the data is consistent across models
 
![](../Storage/primer-22-1/primer_links/sect_6/connection/conx_comp_13.bmp)
 
#####  Showing the difference 
 
By default the table shows values with hover text to show the absolute and percentage differences with respect to the other value.
 
![](../Storage/primer-22-1/primer_links/sect_6/connection/conx_comp_14.png)
 
By activating the difference switch you may show the absolute difference for floating point numbers. For other types the string &lt;different&gt; will be written.
 
![](../Storage/primer-22-1/primer_links/sect_6/connection/conx_comp_15.bmp)
 
The difference for floating point numbers may also be usefully expressed as a percentage.
 
![](../Storage/primer-22-1/primer_links/sect_6/connection/conx_comp_16.bmp)
 
Unmask tol, when enabled, will unmask the tolerance used while spatial matching of connections and will show differences in location of the connection, if any.
 
In the below example, the difference in X coordinate for connection 155 is shown.
 
![](../Storage/primer-22-1/primer_links/sect_6/connection/conx_comp_17.bmp)
 [Previous](checking-connections.md)  |  [Next](creating-bolt-connections-from-fe-data.md)