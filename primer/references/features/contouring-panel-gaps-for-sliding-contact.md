##  Contouring Panel Gaps for Sliding Contact

![](../Storage/primer-22-1/primer_links/sect_5/pen_check/gap_1.gif)

Penetration check module is now capable of contouring gaps in a user defined range between panels. Three modes are available. In gap thickness mode the FIX function becomes a MOVE function which removes gaps.

| ![](../Storage/primer-22-1/primer_links/sect_5/pen_check/gap_2.gif) | gap thickness - will contour the gap between SURFA (tracked) side nodes and SURFB (reference) side shells for surface-surface contact. In single surface contact every node is treated as a tracked node. |
| --- | --- |
| ![](../Storage/primer-22-1/primer_links/sect_5/pen_check/gap_3.gif) | edge gap thickness - as above but will only consider tracked nodes on shells on a free edge |
| ![](../Storage/primer-22-1/primer_links/sect_5/pen_check/gap_4.gif) | node distance - measures the distance of each tracked node to mid-plane of its reference segment and reports cases where the distance is less than the user specified value. This test is independent of contact thickness |

[Previous](notes-on-contact-penetration-checking.md)  |  [Next](contact-penetration-fixing.md)