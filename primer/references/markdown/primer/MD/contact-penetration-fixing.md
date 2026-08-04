##  Contact Penetration/Crossed edge Fixing

PRIMER can help fix initial penetrations and crossed edges in contact surfaces. 
This capability can be invoked via the penetration checker window accessed via:
 
 [CHECK](model-check.md#39MODELCHECK) [(from **Tools** ) &gt; RULES](model-check.md#39MODELCHECK)

 [CONTACT &gt; PEN_CHECK](contact-defining-contact-surfaces.md#pencheck)

 [CONTACT &gt; CREATE/EDIT, PEN_CHECK](contact-defining-contact-surfaces.md#fromtheCreateEditpanel)

If contact is defined with exempt part set (SURFATYP = 6) crossed edges may be removed by moving elements to exempt part

![](../Storage/primer-22-1/contact-penetration-fixing/contact-penetration-fixing-2024-10-18.png)

![](../Storage/primer-22-1/contact-penetration-fixing/contact-penetration-fixing-2024-10-18-1.png)

For treating solid bodies Move x-edge elems to exempt part may be called iteratively

Parts can be protected from swap by inclusion in part set with a special name

![](../Storage/primer-22-1/contact-penetration-fixing/contact-penetration-fixing-2024-10-18-2.png)

[Previous](contouring-panel-gaps-for-sliding-contact.md)  |  [Next](penetration-fixing-panel.md)