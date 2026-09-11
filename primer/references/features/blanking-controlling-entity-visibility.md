##  BLANKING Controlling Entity Visibility

![](../Storage/primer-22-1/primer_links/sect_4/images/fig_4_5_0.png)

Blanking allows the user to cut down what is displayed by controlling whether individual items are marked as drawable or not.

For an item in PRIMER to be drawn it must pass the following three tests:

| Is the model visible? | =&gt; | Is the entity type drawable? | =&gt; | Is the entity unblanked? |
| --- | --- | --- | --- | --- |
| (See [Controlling Model Visibility](controlling-model-visibility.md#43ControllingModelVisibility)) |  | (See [Controlling Entity Visibility and Labelling](controlling-entity-visibility-and-labelling.md#Entityvisibility)) |  | (This [BLANKING Controlling Entity Visibility](blanking-controlling-entity-visibility.md#BLANKING)) |

These represent increasingly more detailed levels of testing and the last of these checks, blanking, is performed on a per entity basis. Every drawable entity in PRIMER may be flagged as

* either "***blanked***" (not eligible for drawing)

* or "***unblanked***" (eligible for drawing)

The default being  ***unblanked***  . Control of the blanking status can be exercised in the standard hierarchical fashion of models, sets, parts and finally down to individual items; thus it may be used to control exactly what is seen on the screen. The way that blanking selection propagates down through the model can be controlled by the Recursive Action setting - see [Recursive Blanking](recursive-blanking.md#recursive_blanking).

As well as the main BLANK menu described in this section, Blanking may be activated by:

* Quick Pick blanking (["Quick Pick" Blanking](quick-pick-blanking.md#qp_blank))
* The Part Tree ([Part Tree Blanking](part-tree-blanking.md#ptree_blank))
* Keyboard short-cut keys ([Blanking Control Using Keyboard Shortcut Keys](blanking-control-using-keyboard-shortcut-keys.md#keybd_sc))
* Special keys in the View panel (["Locking" Blanking in the "View" Panel](locking-blanking-in-the-view-panel.md#scut_blank)) which include "locking".

[Previous](label-background.md)  |  [Next](the-blank-menu.md)