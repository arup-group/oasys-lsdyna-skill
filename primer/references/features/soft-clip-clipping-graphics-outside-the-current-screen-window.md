#### Soft Clip Clipping Graphics Outside the Current Screen Window

If you are dealing with a very large model, but are only looking at a small part of it, the 3D graphics driver can work unnecessarily slowly in its default mode of operation. This is because the whole model is sent to and manipulated by the graphics driver, despite the fact that you are only looking at a small part of it, in anticipation of your wanting to zoom out to see the whole of it.

If you turn Soft Clip on, and redraw the image, the graphics will run faster. This is because the software has "clipped" (ie removed) those parts of the image not visible in the current window before sending it to the 3D graphics driver, so the 3D driver has to process fewer graphics entities. However this also means that if you zoom out those parts of the image outside the previous window will not be there. This is illustrated in figure 10 .7.2.1(a) and (b).
 
In this example the user has zoomed in on the neck and upper chest region of a side-impact dummy (left hand image), and then zoomed out to what should show the full dummy. This exposes the jagged edges left by the 3D clipping algorithm.
 
To see the missing elements you need to issue an explicit drawing command at the new scale to recalculate the clipping and send more elements to the 3D graphics driver.
 
![](../Storage/primer-22-1/soft-clip-clipping-graphics-outside-the-current-screen-window/soft-clip-clipping-graphics-outside-the-current-screen-window-2024-04-30.png)

![](../Storage/primer-22-1/primer_links/sect_9/images/fig_9_6_2_2_header.gif)10 .9.2.2 SHOW\_PROJ Showing the viewing frustrum
 
On 3D devices it is possible to show the current viewing "frustrum" at the bottom left corner of the plot by turning SHOW\_PROJ on.
 
This shows the information in figure 10 .7.2.2 (a copy of figure 10 .1(b)).

The frustrum shown here assumes perspective projection.
 
The Z clipping plane locations are shown when SHOW\_PROJ is on, and this can be very helpful when using Z clipping, as otherwise it is easy to "lose" the clipping planes.
 
The default near and far plane positions are drawn in green, and the plane locations in blue. So you can visualise movement relative to initial locations.
 
![](../Storage/primer-22-1/soft-clip-clipping-graphics-outside-the-current-screen-window/soft-clip-clipping-graphics-outside-the-current-screen-window-2024-04-30-1.png)
 [Previous](3d-opts-further-3d-options.md)  |  [Next](using-the-z-clipping-planes.md)