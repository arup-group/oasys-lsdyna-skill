###  Visualise

The Visualise feature allows you to view label distribution within your model in a graphical form. It allows you to identify ranges of labels that are currently used, and also ranges of labels that are free. The panel that opens when clicking on Visualise will look like this:

![](../Storage/primer-22-1/primer_links/sect_3/images/visualise_1.gif)

The entity types currently in the model are displayed as rows. Labels are shown along the top of the graphical area. The black lines/blocks represent label ranges that are currently used in the model. The white areas represent label ranges that are currently free. When moving the cursor over the graphical area, the black/white areas will be highlighted with a red border. The feedback section at the top of the panel will give you information about the highlighted area. In the following example, and area on the SOLID entity row highlighted shows that labels between 1529109 & 2000999 are not currently used for solid elements.

![](../Storage/primer-22-1/primer_links/sect_3/images/visualise_2.gif)

There are various options/actions that can be carried out on this panel:

####  Changing the label range shown

By default, the range of labels shown spans from the minimum label of all types in the model until the maximum labels of all types in the model. This can be changed by typing in a new range in the input boxes in the top left of the panel. Alternatively it is possible to zoom by holding the SHIFT or CTRL keyboard key and right mouse button hold and drag over the graphical area. Similarly, it is possible to pan the display by holding the SHIFT or CTRL keyboard key and middle mouse button hold and drag over the graphical area. To return to the default view of seeing the whole range click on the AC button on the panel, or click the keyboard shortcut "a" while your cursor is over the panel.

####  Writing information from the panel

The label range information on the panel can be written to a text file in CSV format by clicking on the Write button. The format is as follows:

*entity type 1, start of used range 1, end of used range 1, start of used range 2, end of used range 2, .......* 
*entity type 2, start of used range 1, end of used range 1, start of used range 2, end of used range 2, .......*

So a file may look something like this:

*All, 1, 1000, 2000, 2346, 5000, 5678, 8001, 8790, ...* 
*NODE, 1, 700, 2345, 5050, 5106, 8100, 8102, ...* 
*SOLID, 1, 60, 2070, 2074* 
*...*

####  Interactive options on currently used label ranges

Various interactive operations can be performed on currently used label ranges (black blocks) on the panel. A left mouse click hold and drag operation over a black block will give you the option to drag to renumber the entities represented by the block. When renumbering in this way a feedback display will appear telling you what the outcome will be. If the feedback display is green, the new location for the block does not clash with any other labels of that type in the model. If there is a clash, the feedback will be red. When you release the left mouse button with the block on the new location PRIMER will ask you to confirm the renumbering.

A right mouse click on a black (used) block will give the following options:

![](../Storage/primer-22-1/primer_links/sect_3/images/visualise_3.gif)

Blank - Blank the entities represented in the used block. 
 Unblank - Unblank the entities represented in the used block. 
 Only - Only the entities represented in the used block. 
 Sketch - Sketch the entities represented in the used block.

Note for the above the visual panel is quite big and may cover a large percentage of the graphics window, so it may be difficult to see the result of the above action. In these situations it is useful to use the keyboard shortcut "i" (iconise) which will iconise open panels allowing you to see the graphics window. Pressing "i" again will reopen the panels.

Move to - Type in a starting label to renumber the entities in the used block to. 
 Details - Gives some details on the contents of the used block. 
 Add to Clipboard - Add the entities represented by the used block to the clipboard. 
 Replace Clipboard - Replace the entities currently on the clipboard with the entities represented by the used block. 
 Multi. Sel. - Set the panel in multiple select mode which allows you to select multiple blocks of used labels for an operation. While in this mode, you will be locked into operating on one row. To select multiple blocks, drag a selection box around the appropriate used blocks using the left mouse button:

![](../Storage/primer-22-1/primer_links/sect_3/images/visualise_4.gif)

In the above image the selected area is highlighted as a blue box around label blocks on the SOLID row. A left mouse click drag renumber or a right mouse click to open the above options are now available to be applied to multiple selected blocks rather than just one. To quit out of multiple selection mode, click on Cancel Multi at the top of the panel.

####  Interactive options on currently free label ranges

When right mouse clicking on a currently free label range (white) there is an option to Renumber to here . When selecting this option, you can select entities of of the appropriate type to renumber into the selected range.

####  Entity mode and Include mode

By default the panel will open up in Entity mode, which means all the entity types currently in the model will each have a row in the table. The display can be changed to Include mode in the top left hand corner. In Include mode instead of one row per entity type you get one row per include:

![](../Storage/primer-22-1/primer_links/sect_3/images/visualise_5.bmp)

The used blocks (black blocks) in Include mode represent used labels of any entity type within the include file specified on the row. All the same operations that are available in Entity mode are also available in Include mode (drag renumbering, right click Blank etc.).

There are some extra features available in Include mode. If you have include numbering ranges set, they are displayed on the panel. For more information on include ranges, see [RENUMBER INCLUDES](renumber-includes.md#376renumberincludes). Two include ranges can be set for each include file, one for entities where you may many of them in the model (nodes, elements, nodal rigid bodies etc) and one for all other entities. The node/elem range is shown in transparent blue and the general range is shown in transparent green. Either set of ranges can be turned on/off in the top left of the panel. It is possible to modify the include range within the panel by right mouse click dragging when hovering over the start or end of the range block. When you hover over the ends the range is highlighted purple which will indicate you are dragging the range rather than dragging the labels themselves.

It is also possible to sort the include file list. You can sort the include file list by any of these three options:

1. Include entity labels
2. Include ID
3. Alphabetical

For master and include files, visualisation popups for each file, with the options Blank , Unblank and Only , are also available.

[Previous](declash-labels.md)  |  [Next](lock-label-ranges.md)