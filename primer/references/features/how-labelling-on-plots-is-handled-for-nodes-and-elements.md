###  How Labelling on Plots is Handled for Nodes and Elements

The default label is a node or element number, but a variable amount of information can be generated to form a "label" which can run to multiple lines, as this example shows:

![](../Storage/primer-22-1/primer_links/sect_4/images/fig_4_4_2.gif)

This figure shows an example of shells which have been labelled with:

| **MODEL** | **Mnnn** | for  ***M***odel number &lt;nnn&gt; |
| --- | --- | --- |
| **LABEL** | **Snnn** | for  ***S***hell &lt;nnn&gt;. |
| **PART** | **Pnnn** | for  ***P***art &lt;nnn&gt;. |
| **MATERIAL** | **MATnnn** | for  ***MAT***erial &lt;nnn&gt; |

PRIMER attempts to group labels logically and to locate them so that they don't overlap, but if you try to add too much information you will end up with a total mess on the page. This example, with four categories of data labelled on elements, is the sensible maximum; and even it starts to get messy when label numbers get large (&gt; 5 digits).

Labelling uses the standard acronyms for entities, these are listed in [Appendix A](a-standard-object-names-and-acronyms.md).

The "attached" nodes in this figure have also been switched on: these are drawn as asterisks (\*) at the relevant element vertices.

[Previous](elements-and-nodes-structural-items.md)  |  [Next](triads-elements.md)