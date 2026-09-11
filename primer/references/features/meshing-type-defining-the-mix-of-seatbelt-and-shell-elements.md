####  Meshing Type: Defining the Mix of SEATBELT and SHELL Elements

| Each segment of the belt between fixed ends or sliprings is divided into three spans:<br> <ul style="font-size: 14.6667px;"> <li>End 1 (E1)</li> <li>Centre (Ce)</li> <li>End (E2)</li> </ul> <br>From V14 onwards, using "new style" meshing, each span may be any of the eligible element types: 1d belt, 2d belt or shell. In the example on the right this segment is meshed from element types:<br> <br>[ **1d belt | shells | 2d belt**] | ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/mesh_layout_1.png) | ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/ovn_1.png) |
| --- | --- | --- |

However there are some limitations imposed by the end conditions of the segment:

| **End condition** | **Limitations** |
| --- | --- |
| Fixed end | No limitations, any element type may be used. Attachment will be directly by node, using a nodal rigid body terminate shell and 2d belt elements. |
| Retractor | Only 1d or 2d belt elements may attach to a retractor. |
| Slipring | At a slipring element (\*ELEMENT\_SEATBELT\_SLIPRING) only 1d or 2d belt elements may be used.<br> <br>At a radiused slipring, where PRIMER meshes continuously around a finite radius, any element type may be used.<br> <br>However in both element and radiused cases the element types at both sides of the slipring must be the same. Thus if segment #2 / end #2 is a 1d belt element then segment #3 / end #1 must also be a 1d belt element, and so on. |

#####  Using the new style Mesh Type buttons
 
This array of buttons forms a matrix:

| [End condition of previous segment] |
| :---: |
| *Status* | **1d belt** | **2d belt** | **Shell** |
| **End 1** | [ ] | [ ] | [ ] |
| **Centre** | [ ] | [ ] | [ ] |
| **End 2** | [ ] | [ ] | [ ] |
| [End condition of next segment] |

 ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/ovn_1.png)

For each span E1, Ce, E2 you need to select an element type. The colours and symbols of the buttons have the following meanings:
 
![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/mesh_layout_2.png)If the background of the button is green that means that this selection is valid for that span of the belt.
 
![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/mesh_layout_3.png)If the background of the image is orange this means that there is an uncorrected error due to this selection. Hovering the mouse over an orange button will explain why that selection is invalid, for example element mismatch across a slipring.
 
![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/mesh_layout_4.png)An unselected option with a red X means that it would be an error to select this element type in this location. Again, hovering over the button will explain why this is the case.
 
The "status" button at the top left of this matrix shows the good / bad status of the belt as a whole, considering all of its segments.
 
![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/mesh_layout_5.png)Means that the meshing definition does not contain any errors.
 
![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/mesh_layout_6.png)Means that there are one or more errors somewhere in the belt mesh definition, and hovering over this symbol will list all such errors. It will not be possible to generate the belt mesh while there are errors in the mesh.
 
#####  Using the old style Mesh Type buttons
 
Each segment must be meshed with one of:

| [Sblt 1D only](examples-of-each-type-of-mesh.md#mesh_1d) | 1D \*ELEMENT\_SEATBELT elements only |
| --- | --- |
| [Sblt 2D only](examples-of-each-type-of-mesh.md#2d_only) | 2D \*ELEMENT\_SEATBELT elements only |
| [Shells only](examples-of-each-type-of-mesh.md#sh_only) | Conventional SHELL elements only |
| [Mixed Sb1/Sh](examples-of-each-type-of-mesh.md#mix_1) | A mixture of 1D SEATBELT and SHELL elements |
| [Mixed SB2/Sh](examples-of-each-type-of-mesh.md#mix_2) | A mixture of 2D SEATBELT and SHELL elements. |

![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/ovn_2.png)
 
Historically 1D Seatbelt elements have been used to attach to retractors and in stretches through sliprings, and Shell elements have been used where contact with the dummy is required. This is Mixed Sb1/Sh mode.

Now that 2D Seatbelt (shell) elements may be used then such meshes may be (re-)created in two possible ways:

1. Replacing the stretches of 1D seatbelt elements with 2D seatbelt shells, but preserving the stretches of conventional shells in between. This is Mixed SB2/Sh mode, and may be preferred by users who wish to retain belts meshed with shells and simply want to improve the contact between belt and surrounding structure in slipring and retractor regions.
2. Replacing the whole belt with 2D seatbelt shell elements, which is Sblt 2D only mode.

PRIMER will remesh an existing belt definition in any of the new types above, changing element, slipring and retractor properties as required. However certain permutations are not geometrically possible:

* Where a belt passes through an element slipring then the sections on both sides must be either 1D Seatbelt or 2D seatbelt elements as sliprings cannot mix 1D and 2D belt types. In addition retractors may only attach to 1D or 2D seatbelt types. Therefore at a Slipring or Retractor element only the following permutations are available: 

    | Adjacent belt type | Permitted new style element type | Permitted old style adjacent meshing types |
    | --- | --- | --- |
    | 1D Seatbelts | 1d Belt | Sblt 1D only or Mixed Sb1/Sh |
    | 2D Seatbelts | 2d Belt | Sblt 2D only or Mixed SB2/Sh |

[Previous](old-versus-new-methods-of-defining-elements.md)  |  [Next](examples-of-each-type-of-mesh.md)