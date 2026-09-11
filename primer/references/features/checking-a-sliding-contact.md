###  Checking a Sliding Contact

| | Check all | Checks the whole contact (recommended) |<br>| --- | --- |<br>| Check visible | Only checks visible volume of the contact. If contact is large and substantial part of it is blanked, this option may save time particularly during iterative fixing procedures. |<br>| [List Errors](list-errors-listing-penetrations-and-edges-to-screen-and-file.md#LISTERRORS) | Lists all penetrating nodes, the element(s) they penetrate and the penetration distance. Also lists all crossed edges found. |<br>| [Options...](options-controlling-penetration-checking.md#pen_opts) | Maps the contact penetration check options panel in which checker settings may be changed. |<br><br><br>Note on SOFT=2. For single surface contacts this formulation gives segment based contact. This is considered preferable to node to segment contact which can allow one body to pass through another unrealistically. For each segment pair that penetrate, Ansys LS-DYNA reports the worst case penetration and the point on the segment where it applies. PRIMER simulates the Ansys LS-DYNA algorithm but reports the penetration at the closest node. Additionally PRIMER calculates the node to segment penetrations as these are useful data in cases where penetrations are found. The reason for this is that the contact fixer requires nodal info so it can de-penetrate the mesh geometry. | ![](../Storage/primer-22-1/primer_links/sect_5/pen_check/fig_6_10_1a.png) |
| --- | --- |

The front panel enables you to control visibility by unblanking interacting part pairs. It also pre-selects part pairs for fixing of crossed edges or penetrations in the default mode which is to observe blanking.
 
* Selection by a single click will exclusively select and "only" the display for a part pair.
* Ctrl-select will add another part pair to the seletion
* Shift-select in this context will select all part pairs which use P1. e.g. Shift-sel on P8710:P82151 also unblanks P8231as in interacts with P8710.
* Ctrl-shift-select does the same for all part pairs which use P2.

| ![](../Storage/primer-22-1/primer_links/sect_5/pen_check/psel_1.gif) | ![](../Storage/primer-22-1/primer_links/sect_5/pen_check/psel_3.gif) |
| --- | --- |

| ![](../Storage/primer-22-1/primer_links/sect_5/pen_check/psel_2.gif) | ![](../Storage/primer-22-1/primer_links/sect_5/pen_check/psel_4.gif) |
| --- | --- |

* sel none clears the selection and unblanks all parts in the contact
* sel all will "only" all the parts of the contact
* sel xedge will select all the interactions where crossed edges are found

| ![](../Storage/primer-22-1/primer_links/sect_5/pen_check/psel_5.gif) | The information panel gives the count of visible/total crossed edges and penetrations. Note - this is the (more useful) count of penetrating nodes not penetration events. |
| --- | --- |

The following functions are especially useful when one part only is initially displayed.

| ![](../Storage/primer-22-1/primer_links/sect_5/pen_check/sketch.gif) | sketch will sketch all the visible segments involved in a penetration and all the segments that penetrate/cross them |
| --- | --- |
| ![](../Storage/primer-22-1/primer_links/sect_5/pen_check/unblank.gif) | unblank will unblank underlying elements of all segments which penetrate/cross visible segments (i.e. blue and yellow shells) |
| ![](../Storage/primer-22-1/primer_links/sect_5/pen_check/unblank2.gif) | recursive will perform unblank until no more segments are found (note the extra blue shells which penetrate the yellow) |

-&gt;warnings.k - this functions writes error sets to include file *warnings.k* which will be created if it does not exist. The same function is available for contacts from the model [check error tree](error-tree-viewer.md#error_tree).

* If there are crossed edges in the contact, these will be written to a segment set named " *Contact &lt;id&gt;: Contact has crossed edges* ".
* If there are penetrations, both a node set and a segment set will be created with matching name which also denotes the error, e.g. " *Contact &lt;id&gt;: penetration exceeds max allowable value @0.5* "

| **Filtering penetrations by magnitude**<br> <br><br><ul> <li>Penetration magnitude - only consider penetrations greater than the given value </li> <li>thickness remaining - only consider penetrations where remaining unpenetrated thickness between segments is less than the given value. This is defined as 0.5*(t1+t2) - P, where t1,t2 are segment thicknesses and P is penetration magnitude </li> <li>thickness remaining ratio - only consider penetrations where remaining unpenetrated thickness expressed as ration of overall segment thickness is less than the given value </li> </ul> <br>Changing this value will change the penetration count, the contour plot and the fixing procedure. Fixing will de-penetrate (not fully) but up to the specified limit.<br> <br>This does not affect the handling of crossed edges. | ![](../Storage/primer-22-1/primer_links/sect_5/pen_check/filter.gif) |
| --- | --- |

CT, SI and WIRE provide Continuous Tone, Shaded Image and Wireframe plots respectively of the contact errors.

[Settings...](settings-controlling-plots.md#SettingsControllingplots)controls the parameters of these plots. 
 [Levels...](levels-setting-the-contour-bands.md#LevelsSettingthenumberofcontourbands)  **** controls the contour bands used.

[FIX](contact-penetration-fixing.md)  accesses the de-penetration fixing function.

[Element details](details-of-errors-local-to-elements-and-parts.md#Displayingdetailsoferrors) permits more detailed examination of the errors in elements adjacent to a node, or in a particular part. The CT, SI and WIRE plotting modes are the same as above.

[Beams on x-edge](generating-null-beams-on-crossed-edges.md#Generatingnullbeams) generates "null beams" on crossed edges. These can be used in external meshing programmes to identify where the problems occur, making remeshing easier.

[Previous](contact-penetration-checking.md)  |  [Next](plotting-contact-penetrations.md)