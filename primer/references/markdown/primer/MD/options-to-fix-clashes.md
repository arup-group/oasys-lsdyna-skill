###  Options to Fix Clashes

* No renumbering. This option is only possible if there are no clashes or duplicates in the two source models.
* Increment secondary model items always. This option will increment the labels of items in the secondary model by the maximum value in the primary model. For example, if nodes in the primary model ranged from 1 to 100, and from 25 to 40 in the secondary model, the nodes in the secondary model would be incremented to be in the range 125 to 140. This will occur even if there are no clashes between labels.
* Increment secondary model items only on clash. This option is similar to option 2 except that only items which actually clash between the two source models will be incremented.
* [Custom merge](custom-merge.md#custom). This option gives much greater control on how the models are merged together. It is only recommended for experienced users.

When there are parameters with the same name in both primary and secondary models, this is can also be a clash why merging the models is not possible. There are the following options to deal with this:

* No action . With this option the models can be merged only if there are no parameter name clashes.
* Rename only . When there are parameters with clashing names, PRIMER automatically generates new names by appending \_1, \_2 etc. to resolve these clashes.
* Merge & rename . Here PRIMER automatically renames clashing parameters when necessary, but merges parameter definitions with the same name and value from both source models.

| Determining the nature of clashes  <br>The two main problems with merging models together are items which have potential label clashes such as nodes, elements, parts etc. and items which are only allowed once in a model such as control and database cards, airbag reference geometry etc. |
| --- |

![](../Storage/primer-22-1/primer_links/sect_3/images/fig_3_4_3.gif)

You can get a summary (above) or a detailed list (below) of the potential merge problems by using the popup on the PROBLEMS WITH CLASHES.... button.

For example in the summary above you can see that there are clashes of nodes. The detailed list (below) tells you which node labels are clashing as well as the total number.

![](../Storage/primer-22-1/primer_links/sect_3/images/fig_3_4_4.gif)

The problem with label clashes is easily solved by using either option 2 or option 3 above (or custom merge for greater control)

The problem with duplicate items such as control cards etc is solved by the following method in options 1, 2 and 3.

* If the item exists in the primary model but not in the secondary model it is taken from the primary model.
* If the item exists in the secondary model but not in the primary model it is taken from the secondary model.
* If it exists in the secondary and primary model it is taken from the primary model.

Other items in the model which do not have labels such as constrained cards and boundary cards cannot clash so there is no problem with merging these entities. All of the cards from both models are used in the merge process.

Once you have chosen a method for merging the two models together which fixes any potential problems the PROBLEMS WITH MERGE... button in the main merge window will change message and turn green. The APPLY MERGE button will be ungreyed and the merge can proceed.

![](../Storage/primer-22-1/primer_links/sect_3/images/merge_21update.jpg)

This method is the easiest way to merge two models together. The original models will not be deleted after merging so if the outcome of the merge is not what you wanted you do not lose your original models. However, it is good practice to save your models before attempting to merge them together.

For much greater control on how models are merged together the [Custom Merge](custom-merge.md#custom)option can be used but this is only recommended for experienced users as there are potential problems. This is described in [Custom Merge](custom-merge.md#custom).

####  New labels for clashing items

By default the labels for clashing items will be changed to be greater than the highest label in the primary and secondary model. e.g. if the labels for nodes in the secondary model were in the range 100 - 1000 and in the range 200 - 2000 in the primary model the clashing node labels would be changed to be 2001, 2002 etc. This can be changed with the New labels for clashing items popup. The default value of Highest+1 in model is the above behaviour. Instead a start label can be given for new labels by changing this to Start at label and giving a starting label in the text box. For example, with the above labels you may want clashing labels to start at 100000.

####  Options for *PARAMETER cards

When there are parameters with the same name in both source models, the models cannot be merged without further action. The following options are available:

* No action: In this case the merge operation may not be possible.
* Rename only: Whenever there are name clashes between parameters without \_LOCAL suffix, PRIMER automatically renames the parameters in one of the source models by appending \_1, \_2 to their names to avoid these clashes.
* Merge & rename: Here PRIMER merges parameters with the same name, data type and value from both source models into one parameter definition for the target model. If the data type or value does not match, then parameters are renamed as in the previous option. Currently PRIMER does not merge \_MUTABLE parameters, but always renames them on clash. \_EXPRESSION parameters are merged as well, but only if in addition to the previous criteria the expression strings match and the respective referenced parameters with the same name in each model are merged as well.

[Previous](model-merge.md)  |  [Next](custom-merge.md)