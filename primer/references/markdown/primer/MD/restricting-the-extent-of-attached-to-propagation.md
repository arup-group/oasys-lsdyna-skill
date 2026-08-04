###  Restricting the Extent of "Attached to" Propagation

![](../Storage/primer-22-1/primer_links/sect_6/attached/fig_6_6_3.gif)Because the definition in is all-embracing it may lead to too many things being made visible. Therefore it is possible to limit what is found attached through entity switches .

For example, you can still display shells, solids, beams ect but just find attached beams. Note that there is a triangle to the right of the Constrained entity switch. Right clicking here allows you to select to Filter the constrained entity types. A new panel will open up allowing you to turn on or off entity switches for the different constrained types. This allows you, for example, to find attached through nodal rigid bodies, but ignore constrained spotwelds.

In the example below the user has selected nodes and elements only, which results in the narrower "structural" definition of attachment referred to above. Starting from the same point as figure (1) above a series of APPLY operations gives rise to figures (7) and (8) below:

| (7) The spotweld connects to the 2nd red part as before <br> <br> <br>![](../Storage/primer-22-1/primer_links/sect_6/attached/fig_6_6_3a.gif) | (8) The final result: only nodes and elements are drawn <br> <br> <br>![](../Storage/primer-22-1/primer_links/sect_6/attached/fig_6_6_3b.gif) |
| --- | --- |

Now the blue parts are not diagnosed as being attached to the red and green ones, since the connection between them (the node set used by an initial velocity definition) has not been drawn.

[Previous](attached-options.md)  |  [Next](using-and-updating-the-saved-status.md)