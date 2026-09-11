###  Custom Merge

**More control over merging process**

The custom merge option gives control of how each type of entity is merged from the two source files. For example, shells can be merged together in a different way to nodes and parts.

If custom merge is selected, three extra buttons are shown at the bottom of the window:

* [GLOBAL PARAMETERS](custom-merging-global-parameters.md#global) This is used for things that can only exist once in the model such as control and database cards, airbag reference geometry etc.
* [BASIC MODEL DATA](custom-merging-basic-model-data.md#basic) The basic model data comprises entities which have labels and so can clash. E.g. shells, solids, nodes, loadcurves etc.
* [OTHER MODEL DATA](custom-merging-other-model-data.md#other) The other model data comprises entities which do not have labels and so cannot clash. E.g. boundary cards, constrained cards.

![](../Storage/primer-22-1/primer_links/sect_3/images/fig_3_4_1_1.gif)

If a button is red then there are problems with merging that type of data. For example in the figure above there are problems with the basic model data. The "other model data" button will always be green because there cannot be clashes as the entities have no labels. A summary or a detailed list of the problems for each category is available by using the popup on each button.

Clicking on each of the custom merge buttons will bring up a new window showing all the entity types in that category and the associated problems. Using these windows the problems can be solved and then the models can be merged together.

[Previous](options-to-fix-clashes.md)  |  [Next](custom-merging-global-parameters.md)