###  Plotting Contact Penetrations

![](../Storage/primer-22-1/primer_links/sect_5/pen_check/fig_6_10_2.gif)

This is a CT (Continuous Tone) plot of the contact penetrations.

Penetrated segments are drawn in a colour determined by the depth to which nodes penetrate them. The penetrating nodes and their "escape" vectors are drawn too.

In this image the rest of the contact is drawn in "wireframe" mode: this, and other plotting parameters, are controlled in the [Settings...](settings-controlling-plots.md#SettingsControllingplots) panel.

**![](../Storage/primer-22-1/primer_links/sect_5/pen_check/fig_6_10_2a.gif)**

This is a SI (Shaded Image) plot of the penetration region.

The escape vector of the shell node (to "escape" from the solid) is clearly visible.

In addition the elements have been drawn "as thick" (controllable from the [Settings...](settings-controlling-plots.md#SettingsControllingplots) panel). This draws their thickness for contact purposes in grey lines.

![](../Storage/primer-22-1/primer_links/sect_5/pen_check/fig_6_10_2b.gif)

This is a WIRE plot of the same region.

No shading or hidden surface removal takes place, and this makes it possible to see the other nodal penetration (of the solid node into the shell element). This was obscured in the previous plots.

The elements have still been drawn "as thick" here.

![](../Storage/primer-22-1/primer_links/sect_5/pen_check/fig_6_10_2c.gif)

The plots above showed penetrations.

This is an SI plot of the crossed edges:

* Edges are drawn as thick yellow lines
* Penetrated elements are drawn in grey

It is possible to display penetrations and crossed edges on the same plot (the default) but this can lead to confusing images.

The display of each category of error is controllable separately in the [Settings...](settings-controlling-plots.md#SettingsControllingplots) panel.

![](../Storage/primer-22-1/primer_links/sect_5/pen_check/fig_6_10_2d.gif)

[Previous](checking-a-sliding-contact.md)  |  [Next](settings-controlling-plots.md)