#####  Handling "Acute" Points

| By default the fitter assumes that it will be draping a curved belt path over a reasonably curved shape, and it also assumes that the belt path will curve reasonably smoothly without sharp changes of direction. It defines a "sharp change of direction" as an "acute" angle, and by default it assumes that acute means &lt; 90 degrees.<br>
<br>Acute angles at points are handled in one of two ways:<br>
<ul style="font-size: 14.6667px;"> <li>If a slipring is defined at that point the belt is assumed to run continuously through the slipring, and will be meshed accordingly.</li> <li>Otherwise a break in the belt path is assumed, and the mesh will not be continuous.</li>
</ul>
<br>In the upper image here the B-Post slipring at the dummy's shoulder has been removed leaving an acute angle less than the default of 90 degrees, hence a break in the belt path occurs. When meshed the two belt paths would not be continuous, but instead each end would share a common nodal rigid body with a single common node at the path point.<br>
![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fig_7_2_3_2f14a.png) |
| --- |
| In the lower image the definition of an "Acute angle" has been changed to 60 degrees meaning that the belt will run continuously through this point. The change is made in the "Fitting params" section as shown below:<br> <br><br> ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fig_7_2_3_2f14c.png)<br> <br>![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fig_7_2_3_2f14b.png)<br><br><br><br>Setting the "Acute angle" to less than 90 degrees will almost certainly also be necessary when meshing continuously through buckles and D-rings. |

 [Previous](adding-fixed-points.md)  |  [Next](adding-cross-sections.md)