###  Creating Bolt Connections from FE Data

PRIMER will automatically create connections for any existing beam spotwelds and solid spotwelds in your model. At present PRIMER will not make connections for 'nugget' solid spotwelds (i.e. spotwelds that use multiple solids and a \*DEFINE\_HEX\_SPOTWELD\_ASSEMBLY card. PRIMER can also make connection entities for existing solid adhesive runs in the model which conform to "PRIMER like" adhesive connection entities.

For 'bolt' type connections PRIMER cannot make the connections automatically. The FROM FE panel enables you to create them from selected Nodal Rigid Body or Constrained Rigid Body definitions.

| ![](../Storage/primer-22-1/primer_links/sect_6/connection/from_fe_1.gif) | Nodal rigid body or one (of a possible chain) of rigid body merges may be selected from the object menu in the usual way.<br> <br>Beams may be selected to create connection beam bolts. In this mode, you may set PRIMER to create one point or two point connections.<br> <br>For each item selected a calculation of dimension is made and user has the option to exclude those that exceed the maximum size (if specified).<br> <br>The dimension is an approximate measure of the connection's diameter.<br> <br>line nrbs option will limit the object menu to offer only nodal rigid bodies which form a straight line<br> <br>*Where is the connection put?* If the model contains include the default behaviour is to put the connection entity into the layer of the NRB or the C\_RBOD from which it is formed. |
| --- | --- |

| ![](../Storage/primer-22-1/primer_links/sect_6/connection/from_fe_2.gif) | The FE items may also be found by selecting by attached part.<br> <br>The options are to select the item if it attaches to any or the parts selected or, more restrictively, to select only those items where all the attached parts are selected.<br> <br>On APPLY connection with correct layer data will be created. The  **** FE data itself  ****  *will not be changed.*<br> <br>The user is recommended to invoke the newly made connections on the TABLE and check their diameter, as this may require adjustment.<br> <br>*Note on remake of connections* - the FE items may be changed slightly after remake. Merge type bolts will remake with a lead part (itself containing no elements) and constrained parts overlaying the panel, so an extra part has been created. NRB type bolts may remake at a slightly different size. In all cases, connectivity of the layer panels will be maintained. |
| --- | --- |

For adhesive connections, you select the solid element runs you wish to create connection entities for. On APPLY PRIMER will create connection entities. The  **** FE data itself  ****  *will not be changed.*

[Previous](connection-compare.md)  |  [Next](connection-options.md)