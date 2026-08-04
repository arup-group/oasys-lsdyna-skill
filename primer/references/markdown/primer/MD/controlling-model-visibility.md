##  Controlling Model Visibility

Models can be enabled or disabled for display at will. This is carried out by setting them to "hidden" or "viewable": hidden models will not be drawn by any drawing command. By default a model is viewable when it is first read in, but thereafter its visibility is controlled by the user. Changing its status only takes effect the next time a drawing command is given.

Manipulating a model's status is simple:

![](../Storage/primer-22-1/primer_links/sect_4/images/fig_4_3_0.gif)

Under MODEL &gt; LIST click on the **Mnnn** buttons in for the relevant models. A depressed button (green) is viewable, undepressed (red) is hidden.

In this example models 1,2 and 4 are viewable.

Setting a model's visibility in this way has the highest priority when determining whether something should or should not be drawn. If the model is not viewable none of its contents will be, regardless of Entity switches or [Blanking](blanking-controlling-entity-visibility.md#BLANKING). However, making a model viewable does not cause its contents to be displayed if the entity types are not visible ([Controlling Entity Visibility and Labelling](controlling-entity-visibility-and-labelling.md)) or if the entities are blanked ([BLANKING Controlling Entity Visibility](blanking-controlling-entity-visibility.md)).

In addition turning off a model in the MODEL &gt; LIST menu has the effect of turning off its " Mn " tab in all selection menus throughout the code. For example given the case above of five models, with M3 and M5 deselected, the BLANK panel will start off looking like this:

| ![](../Storage/primer-22-1/primer_links/sect_4/images/fig_4_3_1.gif) | Note that the M3 and M5 tabs are deselected. You can still turn them on manually if you wish. <br>In other contexts, for example when creating items, if you only have one model "live" in the MODEL &gt; LIST menu the question "which model do you want to create it?" will be omitted, saving one mouse click. |
| --- | --- |

[Previous](contour-levels-on-the-contour-ramp.md)  |  [Next](controlling-entity-visibility-and-labelling.md)