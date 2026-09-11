#####  Slipring case 4: child dummy in seat with guides

This is an example that is becoming common as child dummies in booster seats are modelled.

| ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fig_7_2_3_2g19.png) | ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fig_7_2_3_2g20.png) |
| --- | --- |
| The problem here is that the belt has to pass accurately through a slipring, then also through the slot in the guide before crossing the chest of the child. | This is the over-simplistic solution to the problem. All components shown here have been made part of the "dummy"; a slipring has been located at the slipring slot, and a known point at the centre of the guide. |

If you try fitting this as it stands it will go horribly wrong!
 
![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fig_7_2_3_2g21.png)

This goes horribly wrong for the following reasons:
 
* At the pink slipring slot the belt has started off "above" the slot and cannot pull through the upper material to line up with the slot.
* At the blue guide a similar problem has occurred and has completely defeated the contact algorithm

The simple "project outwards, then pull back" approach is simply not going to work here without some significant modifications, partly because there is structure in the way and partly because the geometry is too complicated. The following steps show how to solve the problem using the Advanced belt path editor.
 
The solution below dispenses with the slipring element (\*ELEMENT\_SEATBELT\_SLIPRING) altogether, instead running a continuous mesh of plain shell elements explicitly through the slot.
 
Firstly the projection distance, that is the distance the belt is "thrown outwards" before being pulled back for fitting has been set to "none":

 ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/guide_5.png)
 
This means that all points must be lifted manually clear of the structure onto which they are to fit.
 
Then, the radial (outwards) vector method has been changed to "Path twist"

 ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/guide_6.png)
 
Because we are fitting a twisty path through various holes we have departed a long way from the "rubber band around an egg" situation for a normal adult dummy, and it makes more sense to calculate outward vectors directly from path curvature rather than nearby structural element normals.
 ######  **Dealing with the slot**

 ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/guide_1.png)

By making path points on either side of the slot it is easy to adjust their position and orientation so that the belt fits cleanly through the slot.
 
The element length has also been made smaller in the section from point #2 to #3 to help navigation through the slot.
 ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/guide_2.png)
 
Now that the cut-section panel can be undocked it is also easy to use it conjunction with belt fitting. (See the notes above on [using cut sections in conjunction with belt fitting](right-click-options-at-basic-path-points.md#cutsect_digression).)
 
Here it is being used to confirm that the belt path fits cleanly through the slot.
 ######  **Dealing with the guide**

![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/guide_3.png)
 
The same technique has been used here: points on each side to give easy control of shape, and this time the belt path has been "skewed" to steer it through the guide.
 
In addition the local element length has been reduced.
 ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/guide_4.png)
Another problem is that fitting a flat belt into this sort of geometry would not give the fitter any guidance about the wanted shape. Adding some "curl" to the belt path, forming the arc that can be seen here, gives it some initial guidance. So how did this work? Performing a form-finding operation gave the following result:
 
![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/guide_7.png)
 
From which it is clear that the mesh through the top slot is a bit "bumpy", but through the blue guide it is acceptable, and has used the steer from the initial "curl" to adopt a reasonable curved shape.
 
Reducing the local element length at the top slot to 2mm and refitting...
 
![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/guide_8.png)

... gives a much happier shape through the slot.
 
![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/guide_9.png)
 
The belt fitter tries to keep element shape more or less rectangular which is a rather artificial constraint, however when it produces "bumpy" shapes as in the first attempt above the problem can usually be solved, as here, by reducing the element size.
 
This reduction will probably give better behaviour during the analysis as well.

[Previous](slipring-case-3-meshed-type-at-pelvis-location.md)  |  [Next](orienting-the-whole-path.md)