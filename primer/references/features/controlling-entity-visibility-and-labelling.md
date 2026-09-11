##  Controlling Entity Visibility and Labelling

By default only the elements in a model are drawn, with no labels, node symbols or other information appended to them.

You can add extra information to plots, control the display of classes of information and label items dynamically on the screen using the ENTity Viewing panel. This can be accessed in 3 ways:

1. The keyboard shortcut key E.
2. The top bar menu DISPLAY &gt; ENTITIES.
3. The ENT from the viewing and drawing window.

This panel controls the display of elements and nodes, (ie basic "structural" items); also their symbols, labels and local direction triads as well as the display of "other" items, such as constraints, contacts, rigidwalls, etc; and also their labels, symbols and other related displayable data.

![](../Storage/primer-22-1/primer_links/sect_4/images/entities_panel.png)

It must be stressed that these commands only permit or deny the display of *classes* of information, they do not control the visibility of individual items or models. However they do provide one means of accessing the "dynamic" labelling of items: see [Dynamic Labelling](dynamic-labelling.md#46DynamicLabelling).

For example they might be used to enable the display of nodes and of contact surfaces. This would permit nodes and contacts in any models to be displayed provided they were not made invisible by some other command.

The left hand column of the panel dictates the display of the right hand column. At any one time a "master" category will be selected from the left-hand column (in this example Elements is selected). The "master" categories each contain further "child" categories below them. The right hand column displays the appropriate "child" categories for the selected"master". The **Label** columns control whether or not the items will be labelled (with the information selected under **labelled with.** The **Drawn** columns control whether or not the items will be drawn. "Child"categories can be controlled individually (in the example shown the display of beams has been turned off), or all the child categories may be switched on/off together by switching on/off the master category or the ALL\_&lt; *category&gt;* row *.*

**Labelled with** determines what is actually drawn as a "label" when labelling is selected for an element or node class.

Selecting multiple labelling categories will lead to compound labels being generated (eg **M1/H1001/P12/MAT12** ) and plots will become very cluttered if too much information is displayed.

[Previous](controlling-model-visibility.md)  |  [Next](elements-and-nodes-structural-items.md)