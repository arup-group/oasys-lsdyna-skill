####  Removing Multiple Holes

| To remove multiple holes toggle the Multiple button on<br> <br>PRIMER allows you to choose the maximum hole size that you want to remove. Use Max hole size to change the maximum size hole that PRIMER will remove.<br> <br>As when removing single holes there are two ways that PRIMER can remove the hole. It can either just fill in the hole with new elements or it can completely remesh the area around the hole to remove the hole completely. This is controlled by the Remesh area around hole checkbox.<br> <br>Once you have chosen the maximum hole size and the remeshing option use the object menu to choose the part(s) or shells that contain the holes you want to remove. Once you have selected what you want press Apply in the object menu.<br> <br><br> ![](../Storage/primer-22-1/primer_links/sect_6/meshing/remove_hole_multiple.png) |
| --- |

Once some shells are selected PRIMER will look for any holes automatically and highlight them with blue lines. In the image below PRIMER has found five holes to remove.

![](../Storage/primer-22-1/primer_links/sect_6/meshing/remove_hole_multiple_001.png)

Once the holes you want to remove are highlighted press Apply . 
If Remesh area round hole is unset then PRIMER will sketch the shells it will create in the hole

![](../Storage/primer-22-1/primer_links/sect_6/meshing/remove_hole_multiple_005.png)

Press Confirrm and PRIMER will actually create the elements.

![](../Storage/primer-22-1/primer_links/sect_6/meshing/remove_hole_multiple_006.png)

If instead Remesh area round hole is set then when Apply is pressed PRIMER will automatically select some of the shells around the hole to remesh and try to remesh the area(s). The shells PRIMER will remesh are shown in the sketch colour (black in the image below) and the shells PRIMER will create are sketched in blue

![](../Storage/primer-22-1/primer_links/sect_6/meshing/remove_hole_multiple_002.png)

As this can be confusing the Toggle mesh visibility button can be used to alter what is shown. Pressing once will show the original mesh only

![](../Storage/primer-22-1/primer_links/sect_6/meshing/remove_hole_multiple_003.png)

Pressing again will show the proposed new mesh only

![](../Storage/primer-22-1/primer_links/sect_6/meshing/remove_hole_multiple_004.png)

Pressing again will return to the original view. 
If you are happy with the proposed mesh press Confirrm and PRIMER will actually create the elements.

![](../Storage/primer-22-1/primer_links/sect_6/meshing/remove_hole_multiple_007.png)

[Previous](removing-a-single-hole.md)  |  [Next](remesh-area.md)