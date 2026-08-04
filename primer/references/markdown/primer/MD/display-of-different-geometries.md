###  Display of Different Geometries

![](../Storage/primer-22-1/primer_links/sect_7/partcompare/comp15.gif)

In Geometry mode, matched part pairs will be compared to one another using a contact type check which will detect gaps within user defined min/max values (default 0-10mm). If many parts are being checked, the option Auto filter parts is recommended to block the test (which can take a few secs per contact check) for part pairs which are unlikely to be geometrically different (i.e. they have the same element count, same geometric CofG and same surface area).

Any part pairs found to be geometrically different are sent to the 'What's modified?' tree viewer where they can be investigated in detail by using Parts -&gt; geom.

![](../Storage/primer-22-1/primer_links/sect_7/partcompare/comp_geom.gif)

This will copy the parts into a separate model and create a surface to surface contact between them. This can be used to contour the distance away of the nodes of one part to the segments of the other by using CT button.

![](../Storage/primer-22-1/primer_links/sect_7/partcompare/comp17.gif)

![](../Storage/primer-22-1/primer_links/sect_7/partcompare/comp17_ct.gif)

Observe that the contact is deliberately reversed if Parts -&gt; Geom is selected for M2.

![](../Storage/primer-22-1/primer_links/sect_7/partcompare/comp18.gif)

![](../Storage/primer-22-1/primer_links/sect_7/partcompare/comp18_ct.gif)

Which view is more informative will depend on the geometries involved.

Because this is a rather non-standard use of the contact checker, the user is restricted to operations within this panel until Dismiss is pressed and they are returned to the modified tree. Unfortunately this inhibits all functions in the View box, so a shaded image draw button Sh has been added to the check panel. Dynamic viewing operations (rotate and zoom) are not affected by the restriction.

[Previous](display-of-different-properties.md)  |  [Next](saving-part-comapre-information-to-file.md)