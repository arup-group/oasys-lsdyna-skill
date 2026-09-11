###  UPDATE... Controlling the View Updating Frequency

| PRIMER has an UPDATE\_LEVEL setting which dictates how often the view is updated following commands that change it.<br>
<br>The figure shows the UPDATE panel and its three settings. These have the following meanings: | ![](../Storage/primer-22-1/primer_links/sect_9/images/fig_9_5_3.gif) |
| --- | --- |

UPDATE\_LEVEL = 1 **No updates**
 
The plot is never updated automatically. Changes only become apparent when you issue an explicit drawing command, eg DR, CT , etc.

UPDATE\_LEVEL =  **** 2 **Medium updates**

The plot is updated immediately when any view control command is given. 
 
The current image is amended as necessary following blanking, clipping, etc if any viewing command, including dynamic viewing, is used. In other words a viewing change command is tantamount to an explicit redraw command in the current mode which would, of course, reflect any changes in the model geometry.

UPDATE\_LEVEL = 3 **Frequent updates**

The plot is updated immediately as at level 2 above, but also following any blanking, clipping, etc, command that would change the image if explicitly redrawn. 
 
Therefore the effects of blanking, etc are seen immediately.

| **Note 1** | The default setting is 2 on a windows device. |
| --- | --- |
| **Note 2** | Level 3 is only recommended if you have a very fast display and/or a small model <br>since it requires frequent redraws. |
| **Note 3** | Users with slow devices and/or with large models may find that level 1 is preferable to decrease redrawing effort. |

[Previous](persp-setting-perspective-attributes.md)  |  [Next](match-image.md)