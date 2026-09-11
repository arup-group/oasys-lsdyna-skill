####  Additional Options for Parts

![](../Storage/primer-22-1/primer_links/sect_3/images/mod_part.gif)

Additionally with this method part properties and geometries may be compared by using the part compare function, see

Properties If active, all properties available on part table (mass properties can be switched off) will be calculated for each pair of matched parts. Any parts for which properties differ will be reported on the tree.

Geometries This function will run a contact type check to detect gaps (using defined min/max values) between matched parts (of type shell only). The option Auto filter parts is recommended to block the test (which can take a few secs) for part pairs which are unlikely to be geometrically different (same element count, same geometric CofG and same surface area).

These options enable the user to readily identify parts which have been changed as result of change to another keyword, such as \*SECTION or \*NODE.

| ![](../Storage/primer-22-1/primer_links/sect_3/images/mod_6.gif) | ![](../Storage/primer-22-1/primer_links/sect_3/images/mod_7.gif) |
| --- | --- |

For parts with property differences, the Parts -&gt; table function will give a detailed description.

![](../Storage/primer-22-1/primer_links/sect_3/images/mod_8.gif)

For parts with geometric differences, the Parts -&gt; geom function will invoke a display where the difference can be contoured. See
. This must be dismissed to return to the tree viewer.

![](../Storage/primer-22-1/primer_links/sect_3/images/mod_9.gif)

[Previous](comparing-one-model-to-another-model.md)  |  [Next](additional-options-for-connections.md)