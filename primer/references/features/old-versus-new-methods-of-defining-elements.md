####  "Old" Versus "New" Methods of Defining Elements

| In PRIMER V14 the way in which belt elements are defined in each segment of the belt has been revised to make it more flexible.<br>
<br>Prior to V14, the "old" method, only certain combinations of belt element types were permitted in each segment of the belt:<br>
<ul> <li>1D seatbelt elements only</li> <li>2D seatbelt elements only</li> <li>Conventional shells only</li> <li>Mixed 1D seatbelt elements + shells</li> <li>Mixed 2D seatbelt elements + shells</li>
</ul> | ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/ovn_2.png)<br> <br>"Old" method | ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/ovn_1.png)<br> <br>"New" method |
| --- | --- | --- |

From V14 onwards each segment of belt can be made up of any permutation of these element types, split into three spans:
 
* End 1 (E1)
* Centre (Ce)
* End 2 (E2)

You can swap between "Old" and "New" meshing methods via the [O / N] button.

#####  Setting the default meshing method. 
 
By default PRIMER V14 onwards will show the new style meshing method since it is much more flexible, however you can change this via two related preferences:

| primer\*belt\_definition\_method:automatic|old|new | Sets the meshing method button explicitly. The default is **automatic** , which means "new" unless the output format pre-dates V14. |
| --- | --- |
| primer\*mdumm\_keyout\_format: current V18 | V17 | V16 | V15 | V14 | V13 | V12 | V11 | Sets the keyword output format for occupant-related cards written by PRIMER after \*END. |

It may not be possible to represent some "new" permutations of element types in "old" mode, in which case display will revert to the new mode.
 
#####  Meshing method compatibility between PRIMER versions 
 
This change is backwards compatible: any belt meshed in an earlier version of PRIMER can be represented in the new method.
 
However going from V14 to an earlier version, ie representing the belt in "old" style, will only work if all segments of the belt are meshed in one of the 5 "old" layouts. This is because the meanings of the various "new" output data fields in the \*BELT cards will not be understood by earlier versions of PRIMER.
 
(It is possible to get PRIMER to write out \*BELT cards in an earlier file format using the mdumm\_keyout\_format preference described above, or interactively using the relevant controls in the  [Settings...](saving-and-reading-orgiamifold-definitions.md#saving) panel.)
 
##### General belt mesh controls
 
![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fig_7_2_3_4b.png)Each chassis segment is meshed separately in turn so that the mix of SEATBELT and SHELL elements in each segment can be controlled independently: each segment may be all belts, all shells, or a specified mixture of the two.
 
You move between belt segments using the ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/belt_f.gif)(forwards) and ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/belt_b.gif)(backwards) buttons. A diagram of the current section is shown, and will also be sketched on the graphics image.
 
Mesh type determines how this section of belt will be meshed. From V14 onwards you have the options of "New style" (arbitrary mixture of element types) and "Old style") restricted to 5 arrangements. You can switch between old and new modes using the [ O / N ] button.
 
1D P  ,  2D P and SH P define the "chassis" element properties for 1d belt elements, 2d belt elements and shell elements respectively. This means the Part, Section and Material definitions for each type plus any further optional data on the relevant Element cards.
 
Set all segments will set all segments of the belt to settings of the current segment.
 
It is also possible to select explicit nodes and, if relevant, sliprings or retractors at each end of the belt segment. However this can usually be left in "automatic" mode.
 
In the case of a belt segment which mixes 1D or 2D seatbelt elements and shells it is also possible to define how many seatbelt elements should be used at each end.
 
Once the mesh definition is complete and all required properties have been given Generate may be used to create the mesh.
 
From V18 onwards reference geometry may be created for shell element meshes using \*MAT\_FABRIC
 
Meshing start labels allow you to control the labels from which each of the various belt components are created. These default to the "next free in layer", but may be set to any value so long as there is enough contiguous free space above them to hold all the required items.
 [Previous](mesh-meshing-the-fitted-chassis-mesh-with-structural-finite-elements.md)  |  [Next](meshing-type-defining-the-mix-of-seatbelt-and-shell-elements.md)