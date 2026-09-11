##  Tied Contact Fixing

When checking a tied contact the fix function becomes MOVE. This will move tracked (SURFA) nodes to "best position".

![](../Storage/primer-22-1/primer_links/sect_5/pen_check/tied_fix_2.gif)

![](../Storage/primer-22-1/tied-contact-fixing/tied-contact-fixing-2025-01-09-2.png)

The range for fix vector needs to be set. CT plot will now show all the moveable nodes with a vector. Nodes to move must then be selected using sel nodes or sel all and Apply fix will become active.

to shell mid-plane - will configure the vector to move the node to the mid-plane of the shell to which it ties. This is recommended.

remove gaps - will configure the vector to move the node so there is no remaining gap. For offset contacts this fix may be more appropriate.

Either of the above methods will ensure that the node is in a position to tie geometrically (a node may not tie due to other reasons of course)

Ansys LS-Dyna has rules for determining whether or not a node will tie which depend on mesh size as well as distance off segment (see the manual entry under \*CONTACT). It may be that some nodes with vectors drawn on them *are actually tied* and, therefore do not necessarily need to be moved.

![](../Storage/primer-22-1/primer_links/sect_5/pen_check/select%20nodes%20to%20move1.JPG)

Fixing to the shell mid-plane (shell thickness is shown)

![](../Storage/primer-22-1/primer_links/sect_5/pen_check/tied_fix_4.gif)

Fixing by removing the gap (shell thickness is shown)

![](../Storage/primer-22-1/primer_links/sect_5/pen_check/tied_fix_5.gif)

End fix will return you to the tied contact check panel, where you can re-check the count of tied nodes

all tracked nodes/on free edge only - the option only applies if tracked nodes are on shell elements. If set to on free edge only it will limit the MOVE option to apply only to nodes on free edges of shells

![](../Storage/primer-22-1/tied-contact-fixing/tied-contact-fixing-2025-01-09-3.png)

Tracked nodes in a tied contact will (by default) not be processed if the node is attached to its target segment.

The option Treat attached nodes as tied will count these nodes in the "tied nodes" count and plot them as tied

[Previous](contact-gap-fixing.md)  |  [Next](tools-panel.md)