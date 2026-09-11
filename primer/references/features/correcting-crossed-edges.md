###  Correcting Crossed Edges

![](../Storage/primer-22-1/primer_links/sect_5/pen_check/penfix_4.gif)

In the penetration fixing panel, select the CROSSED option. The panel will display all pre-selected crossed panels present in pairs as shown. Select the pair of crossed panels you wish to correct. PRIMER will highlight the 2 panels and show where the crossed edges exist and the fixing options will ungrey.

PRIMER allows you to correct crossed edges by moving selected nodes. ADD nodes to fix will allow you to add nodes to the selection, either by elements or directly by nodes. By default the object menu will limit the selection to nodes of crossed segments, but you may switch this to consider all visible nodes which will enable you in manual modes to smooth the mesh. PICK nodes to fix allows you to pick nodes directly from the screen without opening the object menu.

The direction in which the selected nodes are moved can be specified by using one of the options

[AUTO FIX](manual-fixing.md#autofix)

[N1 -&gt; N2](manual-fixing.md#N1N2)

[NORMAL TO SHELL](manual-fixing.md#normshell)

[NORMAL TO N1N2N3](manual-fixing.md#N1N2N3)

[ALONG VECTOR](manual-fixing.md#alongvector)

[LOCAL NORMALS](manual-fixing.md#localnormals)

[DEPENETRATION VECTORS](manual-fixing.md#depenvectors)

For some cases the Pick & propagate method may be suitable. This will apply if the crossed edge is a closed loop or runs up to a free edge and so a single pick of a node on the side of the edge to be moved can be propagated to determine all the nodes which should be moved.

Pick & propagate will detect the closed path of crossed edges and make the nodes selection.

![](../Storage/primer-22-1/primer_links/sect_5/pen_check/penfix_5.gif)

![](../Storage/primer-22-1/primer_links/sect_5/pen_check/penfix_6.gif)

For closed loop cases a fully automatic fixing mode is available. Pick, propagate & fix will make the selection (as Pick & propagate above) and apply an iterative fixing function which attacks the wave front of the crossed edge until no nodes remain to move. Pressing this button disables all other fixing functionality and those buttons will remain greyed out until this one is unpressed.

When the desired fixing method has been set, press the Apply fix button in the Autofix case. In the other modes type in or drag a distance. Press End fix (as appropriate) to lock the change in.

####  Alternate method for fixing crossed edges

This method applies only for \*CONTACT\_AUTOMATIC\_SINGLE\_SURFACE that uses exempt part set (SSTYP=6).

It is available on the contact penetration check panel, if crossed edges are found.

For each crossed pair of shells, the one with the lowest part label or the one with the lowest shell label is moved to a new part with same section. That part is added to the exempt set.

![](../Storage/primer-22-1/primer_links/sect_5/pen_check/fix_pen1.PNG)

![](../Storage/primer-22-1/primer_links/sect_5/pen_check/fix_pen2.PNG)

The blue part is exempt from contact so the crossed edges disappear.

![](../Storage/primer-22-1/primer_links/sect_5/pen_check/fix_pen3.PNG)

[Previous](penetration-fixing-panel.md)  |  [Next](correcting-initial-penetrations.md)