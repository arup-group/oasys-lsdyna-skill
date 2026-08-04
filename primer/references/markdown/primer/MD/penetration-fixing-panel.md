###  Penetration Fixing Panel

![](../Storage/primer-22-1/primer_links/sect_5/pen_check/fig_6_10_1a.gif)
The pen check panel shown will provide data on the number of crossed edges and penetrations in the model. For more information on penetration checking, see section [Contact Penetration Checking](contact-penetration-checking.md).

The penetration checker panel allows you to easily correct any crossed edges and initial penetrations in your model. This option can be accessed by pressing the fix button.

By default fixing is only applied to *visible entities*so you can use [visibility control](checking-a-sliding-contact.md#WhatPenetrationCheckingDoes) of the check panel to determine what is to be fixed. The crossed edge fixing panel then offers further visibility control As these need to be fixed one-on-one). If you pre-select *all the interacting parts or none*, all crossed edges will be up for consideration. Normally, it is recommended that you **remove all crossed edges**before attempting to remove initial penetrations.

The list of pairs of interacting parts can be filtered by unticking List crossed or List penetrating.

Penetrations and Crossed edges can be removed using both automatic and manual methods. The Penetration checker can be used to check that all initial penetrations have been removed.

*Penetration mode.*Fixing will be applied using the *active check penetration mode*.The setting both limits to which nodes the fix is applied (e.g. ignore penetrations below a certain value) and controls the magnitude of the fix (e.g. setting ratio thickness rem &lt; 0.7 will mean that *minimal depenetration*is performed to meet this target)

[Previous](contact-penetration-fixing.md)  |  [Next](correcting-crossed-edges.md)