###  Top Level Menu

This figure shows the top level "attached" menu.

When you enter the ATTACHED menu the following happens:

* Everything that is currently drawable (ie [unblanked](blanking-controlling-entity-visibility.md#BLANKING) with its [entity switch](controlling-entity-visibility-and-labelling.md#Entityvisibility) turned on) is unblanked.
* Everything else is blanked.
* This blanking status is "remembered".
* Sets the attached switches to find anything physically attached.

At this stage performing a drawing operation (LI , etc) will not result in any change to what is currently visible.

However each time you press APPLY PRIMER does the following:

* Looks at what you want to find attached (shells, constraints etc)
* Finds what is immediately "attached to" what is currently visible.
* Unblanks these newly found items.
* Redraws the image.

This results in progressively more and more of the model being drawn until nothing attached to what is currently visible (which is not necessarily the whole model) remains to be unblanked and drawn.
 
![](../Storage/primer-22-1/primer_links/sect_6/attached/fig_6_6_1.gif)

| The following six images demonstrate how ATTACHED makes progressively more and more of a model visible: |
| --- |
| (1) Just one part visible<br> <br>![](../Storage/primer-22-1/primer_links/sect_6/attached/fig_6_6_1a.gif) | (2) Restraints, contact and spotweld to next part<br> <br>![](../Storage/primer-22-1/primer_links/sect_6/attached/fig_6_6_1b.gif) |

| (3) Nearest elements on next (red) part attached to spotweld.<br> <br>![](../Storage/primer-22-1/primer_links/sect_6/attached/fig_6_6_1c.gif) | (4) (After a few APPLY operations) restraint set on red part.<br> <br>![](../Storage/primer-22-1/primer_links/sect_6/attached/fig_6_6_1d.gif) |
| --- | --- |
| (5) (After more APPLYs) elements on the light blue part<br> <br>![](../Storage/primer-22-1/primer_links/sect_6/attached/fig_6_6_1e.gif) | (6) More APPLYs: spotweld to & elements of dark blue part.<br> <br>![](../Storage/primer-22-1/primer_links/sect_6/attached/fig_6_6_1f.gif) |

[Previous](attached-displaying-what-is-attached-to-things.md)  |  [Next](what-does-attached-to-actually-mean.md)