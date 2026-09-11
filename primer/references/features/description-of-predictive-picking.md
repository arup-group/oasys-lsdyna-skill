###  Description of Predictive Picking

From PRIMER 10.0 onwards all screen-picking operations have "predictive picking" enabled by default. This means that when you move the cursor into the graphics window and position it over something pickable in the current context, the item in question will be highlighted by sketching and labelling it, identifying what would be selected were you to perform a left mouse click at that position.

| In this example the cursor (red cross added artificially here) has been hovered over the front bumper of a vehicle model.<br> <br>The current mode is the default "Quick pick by part", so the part making up the bumper has been sketched in free edge mode, and labelled with its id and title, here "P299 OB-BUMPER-FT".<br> <br><br> <br>The sketching used to highlight items is transient: it will disappear as you move the cursor away from the object in question, and there is no need to refresh the graphics window to get rid of it. | ![](../Storage/primer-22-1/primer_links/sect_4/images/fig_4_7_1.png) |
| --- | --- |
| In the example here the current pick mode was "Quick pick by part". Predictive picking is always associated with the current picking operation, so for example if you chose [Keyword] Element Shell, Modify then the current picking mode would be to select a shell, and predictive picking would change to highlighting shells under the cursor. |

[Previous](predictive-picking-and-menu-hover-over.md)  |  [Next](controlling-predictive-picking.md)