##  Model Modified

The model modified function allows you to:

* see if a model has changed (compare to original)
* compare two models (modified model vs original model)
* compare a model to a file

![](../Storage/primer-22-1/primer_links/sect_3/images/modified.png)

By default the output is displayed in a Tree View as described below, but it can also be sent in the form of listing to the Screen or to a File .

Items which have been changed or created in the modified file can be put on to the  [Clipboard](clipboard.md) so you can view/modify them as required.

PRIMER will report items that have been created in the modified model ( only in modified model ), items that have been deleted from the original model (only in original model) and items that have been matched across models which have been modified ( differ ). For labelled items match across models is trivial. For unlabelled items this is done by trying to match the data on the cards. It is not always possible to tell whether an unlabelled item has been modified or created/deleted. There is a particular difficulty with types which admit of both labelled and unlabelled items (e.g. CONTACT). If all are labelled there is no problem. If they are all unlabelled, they will be treated the same as an unlabelled type. If some are labelled and some unlabelled, PRIMER will give a warning message and decline to treat the unlabelled items.

![](../Storage/primer-22-1/primer_links/sect_3/images/mod_warn.gif)

This function (in compare to original mode) is also available from the Find modified button in the  [Include](include-file-structure.md#inclfilestruct) tree (if &gt;1model in memory use the drop-down off the model tag) or when selecting include files to write keyword files. Any include files which have changed are highlighted so they can be written out.

[Previous](building-using-csv-targeting-file-ihi-pdh-build.md)  |  [Next](comparing-one-model-to-another-model.md)