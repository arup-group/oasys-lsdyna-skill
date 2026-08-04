###  Checking a Tied Contact

The following contact types are treated as tied contacts in PRIMER:

\*CONTACT\_TIED\_SURFACE\_TO\_SURFACE 
\*CONTACT\_TIED\_SURFACE\_TO\_SURFACE\_FAILURE 
\*CONTACT\_TIED\_SHELL\_EDGE\_TO\_SURFACE 
\*CONTACT\_TIED\_NODES\_TO\_SURFACE 
\*CONTACT\_TIEBREAK\_ SURFACE\_TO\_SURFACE 
\*CONTACT\_TIEBREAK\_ NODES\_ONLY 
\*CONTACT\_TIEBREAK\_ NODES\_TO\_SURFACE 
\*CONTACT\_SPOTWELD 
\*CONTACT\_SPOTWELD\_WITH\_TORSION

For tied contacts, penetration of the SURFA (tracked) node into the SURFB (reference) segment means the node is tied.

![](../Storage/primer-22-1/primer_links/sect_5/pen_check/tied_contact.gif)

![](../Storage/primer-22-1/primer_links/sect_5/pen_check/checking%20a%20tied%20contact.JPG)

When contouring tied contacts, the tied node is sketched and blue is used to denote the segment to which it ties.

PRIMER will also the report the count of tied and untied nodes. Some tied contacts may be expected to have zero untied nodes (e.g. those used for spotwelds) others may be using Ansys LS-DYNA's geometric tolerancing and intentionally contain untied nodes on SURFA side.

all tracked node/free edge only option has no relevance for tied contact checking, it applies for MOVE option and only when tracked nodes on shells

sketch & only - allow user to visualize what is tied and/or untied on SURFB ( M ) and/or SURFA ( S ) side of the contact, according to which option is ticked. These settings do not affect the contour plot or node count.

all tracked nodes/on free edge only - this option only applies if the SURFA side consists of nodes on shells. If set to on free edge only the reported count of untied nodes and sketch & only functions will only consider tracked nodes on shells on free edges.

| ![](../Storage/primer-22-1/primer_links/sect_5/pen_check/sketch_1a.gif)<br> <br>![](../Storage/primer-22-1/primer_links/sect_5/pen_check/sketch_1.gif) | sketch applied to what is tied on the SURFB side |
| --- | --- |

| ![](../Storage/primer-22-1/primer_links/sect_5/pen_check/sketch_2a.gif)<br> <br>![](../Storage/primer-22-1/primer_links/sect_5/pen_check/sketch_2.gif) | sketch applied to what is untied on the SURFA side<br> <br>some nodes do not tie because this is a constrained contact and the nodal rigid body shown interfers with it, others because they are too far away from their segment |
| --- | --- |

| ![](../Storage/primer-22-1/primer_links/sect_5/pen_check/sketch_1a.gif)<br> <br>![](../Storage/primer-22-1/primer_links/sect_5/pen_check/sketch_3.gif) | only applied to what is tied on the SURFB side |
| --- | --- |

-&gt;warnings.k - for tied contacts this function will write untied nodes to a node set, appropriately named, in include file *warnings.k.* Untied elements will also be written to a set.

Check against other constrained - by default if this is a constrained (not penalty) contact and if other constrained contacts exist in the model, PRIMER will check for clashes with other constrained contacts. A tracked node cannot be tied successfully to a segment, if another contact ties to this segment or a segment which shares a node with this one. You can turn this option off in [CHECK &gt; OPTIONS &gt; CONTACT](options-setting-model-check-options.md#options).

[Previous](options-controlling-penetration-checking.md)  |  [Next](notes-on-contact-penetration-checking.md)