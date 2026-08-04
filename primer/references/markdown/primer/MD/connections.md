##  CONNECTIONS

| ![](../Storage/primer-22-1/primer_links/sect_6/connection/tools_connection.png) | A connection is a new PRIMER entity introduced in version 9.3. It allows PRIMER to create/modify/delete **mesh independent** spotwelds, bolt connections and adhesive runs. Spotwelds consist of beams or hexahedral elements tied to the panels using a tied contact. Bolts are rigid connections between panels. Adhesives consist of runs of hexahedral elements tied to the panels using a tied contact. <br>The Connection panel is used for all aspects of managing connection data. |
| --- | --- |

The connection entity allows PRIMER to store all of the information that makes up the appropriate connection entity. That means that for example, it is possible at any time to change a beam spotweld into a solid spotweld or a bolt. As PRIMER knows what entities make up the connection it can delete the old entities and make new ones as required. 
The connection can be drawn (a 'blob' is drawn at the connection point, or a line indicating the path of an adhesive run) or labelled using the [entities panel](controlling-entity-visibility-and-labelling.md). The colour of the connection is drawn in depends on the state of the connection. The following colours and their meanings are used.

| **Colour** | **Meaning** |
| --- | --- |
| Green | Realized. The connection is made and it does not have any errors |
| Blue | Provisionally realized, no contact check has been done |
| Red | Bad. The connection cannot be made because there is a problem |
| Orange | Invalid. The connection has been made but there is something wrong with it (e.g. the node is not tied correctly) |
| Yellow | Not checked. The connection has been made but PRIMER has not yet checked it to see if it is OK or not |
| Cyan | Latent. The connection point exists but it has not been made yet |

The panel allows you to create, review, modify and delete connections. A 'connection file' can also be read by PRIMER to connect an entire structure very easily. Additionally, tools are available for checking and correcting bad connections as well as finding connected or unconnected panels. The initial spotweld panel is shown below. If your model does not contain any mesh independent spotwelds only the [Create](automatic-creation-of-connections-from-welds.md),  [Read](reading-the-file.md#reading) and  [From FE](creating-bolt-connections-from-fe-data.md) options will be available.

The following options are available from the Connection panel.

![](../Storage/primer-22-1/primer_links/sect_6/connection/connection_options.PNG)

There are several [options](connection-options.md#options) that control how connections work in PRIMER.

![](../Storage/primer-22-1/primer_links/sect_6/connection/connection_tied_cont_opts.PNG)

To achieve realized status a connection must be checked using the contact checker. Normally this is done automatically before the table is displayed. Furthermore, if anything is changed in the model the check will be fully recalculated. For very large models with multiple contact definitions this may be slow. The user may elect to postpone the connectivity check by using one of the less rigorous options. In the case of no (contact) check a simple geometric check is made, there is no guarantee that the weld will tie or even be present in a tied contact! Hence the connections will be displayed as blue - provisionally realized.

[Previous](composites-manual-editing.md)  |  [Next](methods-of-selecting-connections.md)