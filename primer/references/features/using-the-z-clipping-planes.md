####  Using the Z Clipping Planes

The Z clipping planes are shown in figure 10.7.2.2. There are two planes: a "near" and a "far" one, which the hardware uses to clip the image in the +/- screen Z axis.

By default they are set just outside the +/-Z limits of the structure (shown as green lines in the projection box), so that no clipping takes place, but you can move them (shown as blue lines in the box) using the following mouse and keyboard meta-key combination:

| &lt;right shift&gt; + &lt;left mouse&gt; | Moves the near clipping plane. | Cursor symbol is ![](../Storage/primer-22-1/primer_links/sect_9/images/fig_9_6_2_3b1.gif) |
| --- | --- | --- |
| &lt;right shift&gt; + &lt;right mouse&gt; | Moves the far clipping plane | Cursor symbol is ![](../Storage/primer-22-1/primer_links/sect_9/images/fig_9_6_2_3b2.gif) |
| &lt;right shift&gt; + &lt;mid mouse&gt; | Moves the both clipping planes | Cursor symbol is ![](../Storage/primer-22-1/primer_links/sect_9/images/fig_9_6_2_3b3.gif) |

In all cases moving the mouse up moves the plane(s) away from you, and down moves towards you. This is a form of dynamic viewing: the planes move and the image gets updated as the cursor moves. It is recommended that you turn the SHOW\_PROJ switch, described above, on as this will enable you to see the planes moving in the projection box.

To reset the planes to their default positions use the Reset Z clip NEAR and FAR buttons. This will reset them to their initial positions (shown by the blue lines in the projection box).

[Previous](soft-clip-clipping-graphics-outside-the-current-screen-window.md)  |  [Next](introduction.md)