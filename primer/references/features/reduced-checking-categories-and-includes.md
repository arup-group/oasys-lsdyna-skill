###  Reduced Checking: Categories and Includes

![](../Storage/primer-22-1/primer_links/sect_3/images/cat_check_1.gif)

PRIMER's default is to apply checking to every item in the model which can be checked. For very large models, one has the ability to limit checking to a subset of categories (for example, excluding any checks on CONTACTs and CONNECTIONs) and/or to limit the include files that are checked (for example, exclude the one that contains all material definitions). The selection is made via the drop-down and the fact that reduced checking is being applied will be highlighted by the appearance of cyan backround on the button.

![](../Storage/primer-22-1/primer_links/sect_3/images/cat_check.gif)

The effect of excluding a sub-set from checking may not have the expected consequences for complex checks where different categories interact e.g. PART and MATERIAL. Similarly exclusion of an include file means, on the face of it, that no item in that include will be checked. However, if a check on an item (e.g. PART) refers to an sub-item (e.g.MATL) it will make no difference if the include of the secondary item is excluded as the filter is only applied at the top level (in this case, before applying check of a particular PART).

####  Saving the on/off status of Model Check categories

From V12 onwards the on/off status of checking of each model category can be saved in the oa\_pref file. The syntax of the preference is

primer\*model\_check\_  *category*  : on | off

for example:

primer\*model\_check\_airbag: on - Airbags will be checked 
 primer\*model\_check\_dummy: off - Dummies will not be checked

To make it easier to save this status there is a Save as preferences button in the category check popup which will automatically save this preference for all categories present in your model.

![](../Storage/primer-22-1/primer_links/sect_3/images/cat_check_save.png)

Users are recommended to always apply a complete model check with no catagories/includes excluded before completion of their work.

[Previous](check-xml-file.md)  |  [Next](options-setting-model-check-options.md)