###  Purpose of the Composite Layup

In a model of a composite component, different combinations of layers or plies may be present in different zones.

Each different combination of layers requires a different \*PART\_COMPOSITE or \*ELEMENT\_SHELL\_COMPOSITE definition.

Information about the continuity of plies is not preserved.

![](../Storage/primer-22-1/primer_links/sect_6/composite/composite_3.png)

| With \*PART\_COMPOSITE one Part has to be defined for each combination of layer as below.<br> <br>![](../Storage/primer-22-1/primer_links/sect_6/composite/composite_4.png) | Using \*ELEMENT\_SHELL\_COMPOSITE, the combination of layers is directly contain into the element definition. Each physical componant only need one Part to be defined.<br> <br>![](../Storage/primer-22-1/primer_links/sect_6/composite/composite_5.png) |
| --- | --- |

When Creating/Updating a Composite Layup, PRIMER will automatically update all the Elements which are part of the Layup. As in the example below, Element with EID 1807 is included in Ply 1, 6, 7, 10 and 11 of the Layup. After updating the Layup, elements are updated and the layers are added to there definition (see definition of \*ELEMENT\_SHELL\_COMPOSITE).

![](../Storage/primer-22-1/primer_links/sect_6/composite/composite_8.png)

[Previous](composite.md)  |  [Next](create-a-composite-layup.md)