###  Modifying Spotwelds and Adhesives through Lines

Spotweld connections exist as individual entities within PRIMER , but the LINES tool can be used to modify groups of individual spotwelds that form lines. A common use of this feature is to modify the pitch of a run of individual spotwelds. This tool can also be used to convert a line of spotwelds to a run of adhesive, or vice-versa

The connection lines feature can be accessed by selecting LINES in the connections panel. You can then use the standard methods for selection of connections. For more details of the different methods see . Note that you can only modify spotwelds or adhesive, not spotwelds or adhesive together.

![](../Storage/primer-22-1/primer_links/sect_6/connection/spotweld_lines_01.gif)

After selecting the connections you wish to modify, PRIMER will group the the spotweld lines panel will open up. The panel will look different depending whether you select spotwelds or adhesives.

####  Modifying spotwelds

![](../Storage/primer-22-1/primer_links/sect_6/connection/spotweld_lines_03.gif)

The above panel opens up when modifying spotwelds. When opening up the panel, PRIMER will group the spotweld connections in the model together into line groups, and sketch the lines on the screen.

![](../Storage/primer-22-1/primer_links/sect_6/connection/spotweld_lines_05.gif)

The default when opening the panel with spotwelds is Change Pitch mode, which can be used to modify the pitch of the selected spotwelds. At the top of the panel, there is a Sketch current lines button. This can be used to sketch the lines currently being used by the panel should you lose the original sketching (can occur if you redraw for example). The top part of the panel can be used to modify the inputs PRIMER uses to calculate the groupings of spotwelds to form lines. The Break angle value is used to separate the lines should the angle between two sections of the line by greater than this value. The following image shows the affect of changing the break angle from the default of 40.0 to 20.0.

![](../Storage/primer-22-1/primer_links/sect_6/connection/spotweld_lines_07.gif)

The Max. pitch value is the maximum allowed distance that two spotwelds can be apart and still considered to be part of the same line. The following image shows the affect of changing the maximum pitch from the default of 80.0 to 40.0.

![](../Storage/primer-22-1/primer_links/sect_6/connection/spotweld_lines_11.gif)

If Group by similar pitch is toggled, PRIMER will group together spotwelds that have a similar pitch (as, for example, spotwelds may be irregular along a flange and you may want these to be considered separate lines). The default of Ignore current pitch will not group spotwelds according to this rule. The following image shows the affect on the example of toggling Group by similar pitch . Note the line on the lower right flange is now split into two, and the spotweld pitch is inconsistent along the flange.

![](../Storage/primer-22-1/primer_links/sect_6/connection/spotweld_lines_09.gif)

Clicking on Re-calculate lines will re-calculate the line groupings based on the current settings. The new pitch you want to apply to the spotweld line groupings in typed into New spotweld pitch . The proposed new spotweld positions can be sketched by clicking on Sketch new pitch , and the new spotweld pitch can be applied using Apply new pitch . The following images show the sketch case and the apply case for the above example when implementing a new pitch of 40.0mm.

![](../Storage/primer-22-1/primer_links/sect_6/connection/spotweld_lines_13.gif)

![](../Storage/primer-22-1/primer_links/sect_6/connection/spotweld_lines_14.gif)

Note that before applying spotwelds, PRIMER will check that the information held for all the spotwelds in the line is consistent. For example, the diameter could vary between spotwelds, or the include file the spotwelds are in. If PRIMER finds inconsistent data, a message will appear asking the user if they wish to proceed. If the do proceed, PRIMER will use information from the first spotweld in the line to create all new spotwelds along the line length.

As mentioned previously, this panel can also be used to convert lines of spotwelds into adhesive runs. Click on =&gt; adhesive to see the adhesive creation options.

![](../Storage/primer-22-1/primer_links/sect_6/connection/spotweld_lines_16.gif)

See the [create adhesive](creating-adhesive.md#adhesive_generic)section for details on the inputs for adhesive creation. The part ID of the solids that the adhesive solids will be created in is the only required parameter. Check the Keep spotwelds? tick box should you wish to create adhesive runs but retain the original spotwelds. Again, the user can sketch the proposed adhesive before creation ( Sketch adhesive ). Clicking on Convert to adhesive will apply the creation of the adhesive.

![](../Storage/primer-22-1/primer_links/sect_6/connection/spotweld_lines_17.gif)

![](../Storage/primer-22-1/primer_links/sect_6/connection/spotweld_lines_18.gif)

####  Modifying adhesive

Converting adhesive runs to spotweld lines is also possible. This option is available to you when selecting adhesives when opening up this panel.

![](../Storage/primer-22-1/primer_links/sect_6/connection/spotweld_lines_19.gif)

See the [create spotweld](creating-spotwelds.md#create_spotwelds)section for information on the inputs. The part ID of the spotweld solids or beams will be created in is the only required parameter. Check the Keep adhesive? tick box should you wish to create lines of spotwelds but retain the original adhesive. Again, the user can sketch the proposed spotwelds before creation ( Sketch spotwelds ). Clicking on Convert to spotweld lines will apply the creation of the spotwelds.

####  Modifying MIG spotweld types

When openning the spotweld lines panel with only MIG type spotwelds selected, the following panel is presented.

![](../Storage/primer-22-1/primer_links/sect_6/connection/spotweld_lines_20.gif)

This panel is used to reapply MIG type spotwelds should the mesh of the free edge the MIG welds are attached to change. The panel will again automatically group the MIG welds into lines. The search tolerance is used by the line end point to look for a new start node on the updated free edge mesh. Clicking on Sketch new path will display the new path the MIG welds will be applied to. Clicking Apply new path will reapply the MIG spotwelds to the new mesh.

![](../Storage/primer-22-1/primer_links/sect_6/connection/spotweld_lines_21.gif)

![](../Storage/primer-22-1/primer_links/sect_6/connection/spotweld_lines_22.gif)

####  Converting individual spotwelds to spotweld line connection types

From v11 onwards, PRIMER has a connection type called "spotweld lines". These allow you to contain many individual spotwelds in one connection entity. The benifit of this is you can easily change the pitch of these spotwelds on the connections table, and reproject the line along a free edge when the panel mesh has changed. Groups of individual spotwelds can be converted to spotweld lines via the =&gt; lines option.

![](../Storage/primer-22-1/primer_links/sect_6/connection/spotweld_lines_23.gif)

####  Connection creation settings

At the bottom of the spotweld lines panel are connection creation settings. These settings are used when creating new spotweld and adhesive entities. During creation, some spotwelds may not be made correctly due to the settings. A common example of this is if the user sets the new pitch to be smaller than the value set for minimum distance between welds (default 10.0mm). Should PRIMER note be able to make new connections for whatever reason, the user is given the opportunity to open these on the connections table for investigation.

For more information on the connection settings see [connection settings](connection-options.md#options).

Check the Reuse entity labels? if you wish PRIMER to reuse the entity labels of the previous spotwelds/adhesive when creating new connections.

[Previous](other-options-used-when-checkingcreating-connections.md)  |  [Next](catia-spotweld-file-format.md)