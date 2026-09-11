###  Generating "Null Beams" on Crossed Edges

**![](../Storage/primer-22-1/primer_links/sect_5/pen_check/fig_6_10_6.gif)**

Generally the presence of crossed edges will require some remeshing, and this task will be performed outside PRIMER.

To make it easier to identify the edges externally you can generate "null beams" on these edges. A "null beam" normally (although you can change this) references **\*MAT\_NULL** and serves no structural purpose.

This procedure is entirely optional.
 
PRIMER allows you to control the following settings:

| **Beam Part id** | By default each set of null beams will be given new **\*PART, \*SECTION\_BEAM** and **\*MAT\_NULL** definitions. Each will be given the "next free" label in its labelling sequence. <br>If you want your beams to be generated in a specific part instead then define it here. |
| --- | --- |
| **1st beam label** | By default beams will be generated using the "next free" beam label onwards. To generate them starting at a specific value (eg 100001) simply define the value: this may make them easier to identify. |
| **Add to SET\_BEAM** | By default the beams will not be placed in any sets. They may be easier to identify, and delete later when no longer required, if in a \* SET\_BEAM definition. If you want to add them to one simply give its label: it will be created if it doesn't already exist. |

Once any settings have been made  **GENERATE**  will create the beams. All nodes used for beams will be new nodes, starting at the "next free" node label.

[Previous](details-of-errors-local-to-elements-and-parts.md)  |  [Next](list-errors-listing-penetrations-and-edges-to-screen-and-file.md)