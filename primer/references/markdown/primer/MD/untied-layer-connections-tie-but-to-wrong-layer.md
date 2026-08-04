####  UNTIED LAYER Connections Tie but to Wrong Layer

This error appears to be unfixable. Spotwelds are correctly projected, nothing is missing from the contact and all the nodes and their corresponding shells are tied.

It has actually resulted from the fact that the tied contact is defined with an excessive thickness wrt the shells being tied. This means that it is ambiguous to which shell a node is tied and PRIMER suspects that the actual shell tied will not be on the part in the layer definition. This error will not arise if the contact thickness is consistent with the shell thickness.

![](../Storage/primer-22-1/primer_links/sect_6/connection/thickcontacterr.gif)

[Previous](checking-the-connection-contact.md)  |  [Next](using-connection-contact.md)