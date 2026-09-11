####  Creating Connections: Spotwelds, Bolts, Adhesive, Rivet

![](../Storage/primer-22-1/creating-connections-spotwelds-bolts-adhesive-rivet/creating-connections-spotwelds-bolts-adhesive-rivet-2025-04-15.png)

The connection creation panel allows you to select the creation option from - spotweld/rivet, bolt/joint, adhesive or spotweld lines/arcweld and to select the layer parts/elements to be connected.

#####  Selecting which elements to connect

This may be as simple as just selecting all of the panels in the vehicle or you may just want to select 2 or 3 panels to connect

PRIMER considers SHELLS, SOLIDS, THICK SHELLS, IGA and SHELL\_NURBS\_PATCH as candidates for spotweld/adhesive connection

Previous versions treat only shells. PRIMER v17 supports attachment of 2pt bolts directly to solid/tshell faces if the layer parts are solid, single pt bolts require shell layers

All will select all eligible elements in the model

Visible will select all visible elements (i.e. entity switch ON and unblanked)

Exclude rigid from selection is active the selection will ONLY be applied to deformable elements

Select candidate elems/part allows you to select on the object menus

![](../Storage/primer-22-1/creating-connections-spotwelds-bolts-adhesive-rivet/creating-connections-spotwelds-bolts-adhesive-rivet-2025-04-15-1.png)

When PRIMER creates a spotweld from a point you give it, it considers which elements near the point are selected for welding and tries to create a spotweld between these elements. If you do not want a certain panel to be welded, do not include it in the selection.

An alternative method for selecting the elements to connect is by selecting the assembly method rather than the normal method. Using the assembly method you can select a part set or PRIMER assembly as your selection of source elements. When using this method PRIMER will store the part set/assembly with each connection created. This means that if the part set/assembly is modified (parts added/removed) and the connections remade, PRIMER will update the connection so that the layers take into account the changes made to the part set/assembly. This method is most suitable if your connection information is based on assemblies of parts, rather than refering directly to parts they are connecting.

To finish selecting the elements to weld press the APPLY SELECTION button. You can sketch the elements/parts that you are selecting at any time by pressing SKETCH SELECTION .

Once done Next &gt;&gt; reconfigures this panel to display the global options

When creating any connection, a title can be added to the connection by typing the title in the optional title box and one can set an xml filename to be associated with the connection (this assumes they will be exported to a file of that name when connections are written.

Note when connections are created all the various settings used during creation are stored with the connection entity. This means that when remaking the connection the saved settings are reused. This is new functionality added in v14 onwards. This can be turned off in the settings panel by unticking Save current settings with connection . When turned off, PRIMER will use the current program settings when remaking connections:

![](../Storage/primer-22-1/creating-connections-spotwelds-bolts-adhesive-rivet/creating-connections-spotwelds-bolts-adhesive-rivet-2025-04-15-2.png)

The creation panel will now open in the appropriate mode.

[Previous](automatic-creation-of-connections-from-welds.md)  |  [Next](creating-spotwelds.md)