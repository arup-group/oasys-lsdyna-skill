####  Automatic Creation of Connections from Welds

Management of spotwelds by connection entities is fundamental to PRIMER - weld creation, deletion of welded shells, weld checking, find attached, etc. All welds created in PRIMER will have a corresponding connection, maintained as post-end keyword.

As read models may, however, contain welds which do not have connections. By default, PRIMER will attempt to create connections from any existing MAT100 welds (beams, single solid or solid 'nuggets' [with define hex spotweld assemblies]) which do not already have them

* when the connections tool is activated
* when a model check is done
* when shells or shell parts are being deleted

PRIMER will warn in the dialogue box when a model check or deletion operation has created connections. These connections are marked and will be ignored when the [model modified](model-modified.md#modified)function is applied.

![](../Storage/primer-22-1/primer_links/sect_6/connection/conx_created.gif)

Whilst this methodology is recommended, it is possible for the user to inhibit the automatic creation by the setting under CHECK &gt; OPTIONS &gt; SPOTWELD . This will also inhibit the checks which rely on connection logic **for all spotwelds** .

![](../Storage/primer-22-1/primer_links/sect_6/connection/check_opt_spot.gif)

![](../Storage/primer-22-1/primer_links/sect_6/connection/check_opt_spot2.gif)

#####  Fixing of solid topology

Creation of connections from solid welds (excluding nugget welds) requires that the solid topology is correctly configured. Nodes N1-N4 should be on one layer and nodes N5-N8 on the other. Ansys LS-DYNA actually requires this if direct and shear stresses are to be correctly calculated. An information panel will report the problem and give the user the option of fixing the topology.

![](../Storage/primer-22-1/primer_links/sect_6/connection/weld_topol.gif)

[Previous](methods-of-selecting-connections.md)  |  [Next](creating-connections-spotwelds-bolts-adhesive-rivet.md)