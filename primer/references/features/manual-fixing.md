####  Manual Fixing

| This option can be accessed by selecting the MANUAL FIXING tab.<br>
<br>Fixing is applied to selected nodes.<br>
<br>The direction in which the selected nodes are moved can be specified by using one of the options;<br>
<br>[AUTO FIX](manual-fixing.md#autofix)<br>
<br>[N1 -&gt; N2](manual-fixing.md#N1N2)<br>
<br>[NORMAL TO SHELL](manual-fixing.md#normshell)<br>
<br>[NORMAL TO N1N2N3](manual-fixing.md#N1N2N3)<br>
<br>[ALONG VECTOR](manual-fixing.md#alongvector)<br>
<br>[LOCAL NORMALS](manual-fixing.md#localnormals)<br>
<br>[DEPENETRATION VECTORS](manual-fixing.md#depenvectors) | ![](../Storage/primer-22-1/primer_links/sect_5/pen_check/penfix_13.gif) |
| --- | --- |

| Selecting nodes to fix  <br>PRIMER allows you to correct initial penetrations by moving nodes selected by the nodes to fix function. By default the selection is limited to penetrating nodes, but you may select other nodes for manipulation to smooth the mesh changes by using consider all nodes .<br> <br>The direction in which the nodes are to be moved can be specified by using the options; [N1 -&gt; N2](manual-fixing.md#N1N2), [NORMAL TO SHELL](manual-fixing.md#normshell), [NORMAL TO N1N2N3](manual-fixing.md#N1N2N3), [ALONG VECTOR](manual-fixing.md#alongvector), or alternatively the [AUTO FIX](manual-fixing.md#autofix)option can be selected. | ![](../Storage/primer-22-1/primer_links/sect_5/pen_check/penfix_12.gif) |
| --- | --- |

| Auto fix  <br>This option will move the selected node or nodes normal to the penetrating shell in order to remove the penetration. | ![](../Storage/primer-22-1/primer_links/sect_5/pen_check/penfix_12.gif) |
| --- | --- |

| N1 -&gt; N2  <br>The selected node or nodes will be moved along a vector defined by 2 nodes. The nodes can be selected using any of the usual procedures. The extent to which the penetrating nodes are moved can be defined by distance, specified in the distance box, or by dragging the nodes, specified by selecting the DRAG button and dragging the nodes across the screen using the cursor. | ![](../Storage/primer-22-1/primer_links/sect_5/pen_check/penfix_14.gif) |
| --- | --- |

| Normal to shell  <br>Normal to shell allows you to move the selected node or nodes normal to a shell. The desired shell can be specified using any of the usual procedures. The extent to which the selected nodes are moved can be defined by distance, specified in the distance box, or by dragging the nodes, specified by selecting the DRAG button and dragging the nodes across the screen using the cursor. | ![](../Storage/primer-22-1/primer_links/sect_5/pen_check/penfix_15.gif) |
| --- | --- |

| Normal to N1N2N3  <br>Selected nodes will be moved normal to a plane defined by 3 nodes. These 3 nodes can be selected using any of the usual procedures. The extent to which the penetrating nodes are moved can be defined by distance, specified in the distance box, or by dragging the nodes, specified by selecting the DRAG button and dragging the nodes across the screen using the cursor. | ![](../Storage/primer-22-1/primer_links/sect_5/pen_check/penfix_16.gif) |
| --- | --- |

| Along Vector  <br>This option allows you to define a vector using co-ordinates along which the selected nodes are to be used. The extent to which the penetrating nodes are moved can be defined by distance, specified in the distance box, or by dragging the nodes, specified by selecting the DRAG button and dragging the nodes across the screen using the cursor. | ![](../Storage/primer-22-1/primer_links/sect_5/pen_check/penfix_17.gif) |
| --- | --- |

| Local normals  <br>For every node a local normal will be calculated as a weighted average of the normals of adjacent shells. All selected nodes are moved by the same distance specified by the text box or by dragging, but the direction will usually be different for every node. This is useful for fixing nodes on curved parts. | ![](../Storage/primer-22-1/primer_links/sect_5/pen_check/penfix_18.gif) |
| --- | --- |

| Depenetration vectors  <br>This option uses the internally calculated depenetration vectors like Autofix, but allows you to specify the distance manually in the text box or by dragging. The node with the longest depenetration vector will be moved by the indicated distance, and all other selected nodes are moved in a proportion corresponding to their depenetration vector magnitude. | ![](../Storage/primer-22-1/primer_links/sect_5/pen_check/penfix_19.gif) |
| --- | --- |

##### Dragging modes
 
![](../Storage/primer-22-1/primer_links/sect_5/pen_check/penfix_20.png)The distance which the nodes should be moved by can be specified by typing in a number into the text box. Otherwise it is possible to drag the nodes in several ways: The DRAG button allows you to visually determine the distance you want the selected nodes to move by continuously dragging them. Drag one at a time allows you to drag the nodes separately without selecting them, where the option in the radio button still determines the direction as a degree of freedom.
 
Nodes can be moved either along that direction or in a plane orthogonal to the direction. This option can be selected on the popup saying Along / Orthogonal . Moreover, using the right mouse button can save time switching between these two options: The right mouse button drags nodes orthogonally to the selected direction when Along is active and along that direction when Orthogonal is active, whereas the left mouse button does whatever the selection is saying.

[Previous](automatic-fixing.md)  |  [Next](contact-gap-fixing.md)