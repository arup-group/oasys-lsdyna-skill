####  Basic Editor Mode

| ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/define_path_panel.PNG)This shows the belt editor in its initial state with no points created.<br>
<br>Points can be created as follows:<br>
<ul style="font-size: 14.6667px;"> <li>Clicking on a node<br>or<br></li> <li>Typing in an (X,Y,Z) coordinate</li>
</ul>
<br>Either method can be used for any point, but using the "click on node" method is preferable where possible because of the dummy subsequently moves the motion of the node can be used to modify the belt path.<br>
<br>Alternatively you can load the belt path points from a CSV file using Read CSV. |
| --- |

Once you have created some points the editor will become populated, something like this.
 
Here the user has mapped the Point Fixity and Projection popup to add some detail to the path. The entries on this mean the following:

| U : Unfixed | The point is not fixed in any way and does not have any attributes. This is the default for a new point. |
| --- | --- |
| [R: Retractor](adding-sliprings-and-retractors.md#add_slip) | There will be a 1d or 2d \*ELEMENT\_SEATBELT\_RETRACTOR at this point. Retractors may only be defined at the ends of the belt. |
| [S : Slipring (free)](adding-sliprings-and-retractors.md#add_slip) | There will be a "free" 1d or 2d \*ELEMENT\_SEATBELT\_SLIPRING at this point. "Free" sliprings are suitable for pelvis buckle locations since they are not geometrically constrained |
| [B : B-Post slipring](adding-sliprings-and-retractors.md#add_slip) | There will be a "B-Post" 1d or 2d \*ELEMENT\_SEATBELT\_SLIPRING at this point. "B-Post" sliprings are suitable for D-Ring locations on the B pillar. They are constrained to rotate about an axis normal to that pillar. |
| [M : Meshed slipring](adding-sliprings-and-retractors.md#add_slip) | A "meshed" slipring is suitable for 2d \*ELEMENT\_SEATBELT or conventional \*ELEMENT\_SHELL elements only. There will be a continuous mesh around the circular geometry at the slipring location. |
| [F : Fixed](adding-fixed-points.md#add_fixed) | A fixed point marks the end of a belt segment. The path will not be continuous at this point, rather the effect is like cutting the belt fabric and pinning the two ends together at the point. |
| [K : Known position](adding-known-points.md#add_known) | This path point is assumed to be in its final position and will not move during form-finding. Unlike a "fixed" point it does not create a break in the path, the belt curves continuously through it. |
| [X : Cross section](adding-cross-sections.md#add_xsec) | A \*DATABASE\_CROSS\_SECTION definition will be created on the belt elements at (or near to after fitting) this point. |

Projection: gives per-point control over how far the belt is "projected outwards" from this point, overriding the default value for the belt as a whole.

 ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fig_7_2_3_2b2.png)

[Previous](basic-vs-advanced-editor-modes.md)  |  [Next](defining-the-initial-path.md)