####  Item Has Changed Include

By default PRIMER does not treat a change of include as a difference, so items which are the same but have simply been moved to another include will not appear on the tree.

Thus a model with no includes may be reported as identical to one split into many includes.

By activating the option Consider changed include as difference, the tree view will show them (in addition to the changed items).

PRIMER matches includes across models by using the name, the order in which they have been read is irrelevant. Only if a model contains multiple includes of the same name (these will be \*INCLUDE\_TRANSFORM) will the order be significant and a change of order between the models may give rise to spurious reports of include difference.

![](../Storage/primer-22-1/primer_links/sect_3/images/mod_11.gif)

The Details drop-down will give the include from which the item has been moved.

![](../Storage/primer-22-1/primer_links/sect_3/images/mod_12.gif)

[Previous](displaying-modified-items-by-include.md)  |  [Next](comparing-a-model-to-original-or-to-a-file.md)