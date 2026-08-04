###  Referencing of Clipboard Items

### ![](../Storage/primer-22-1/referencing-of-clipboard-items/referencing-of-clipboard-items-2024-04-11-3.png)

On the clipboard or when saving the clipboard contents to a new model or writing a keyword file there are options to propagate the selection of entities
 
* The clipboard contents can be written as they are.
* Nodes and elements in the clipboard and those belonging to parts in the clipboard can be written.
* Items referenced by entities in the clipboard can be included
* for Save as model, a sub-model can be created from selected parts

![](../Storage/primer-22-1/referencing-of-clipboard-items/referencing-of-clipboard-items-2024-04-11.png)

Find referenced items is useful as PRIMER will find cross-referenced entities necessary to produce a more complete model. It will not, however, find items such as \*CONTROL or \*DATABASE which have no direct reference to the selected items. Also it cannot adjust set contents. To achieve this, Sub-model from parts and
Sub-model from visible are worth considering.

PRIMER finds entities by propagating the selection from senior to junior items using clipboard hierarchy and then finding any missing items

* a clipboard containing elements would find the nodes of the elements (propagation) and the parts referenced by the element (missing item search). The material and section of the part also count as missing items and would be found. PRIMER carries on checking until all necessary entities are found. A clipboard containing only nodes would not find any elements as these are senior to nodes in the clipboard hierarchy and there are no missing items to find.

* Clipboard contains a \*CONTACT. If the contact referenced a \*SET\_PART then this would be found together with the parts on that \*SET\_PART. Elements and nodes of the parts would also be found.

Find referenced items works same as standalone function or option for **Save as keyword, Save as model**etc

Further options offer the user some control over how propagation works

* propagation to set can be done when ALL or ANY items of a set are selected
* propagation to senior items can be activated with specific control for material &gt; part, and node &gt; element, which are off by default

In the example below, selection of a part will propagate to the part-set (and all the parts in the set) and thence to the contact and any part-sets and parts it contains. Similarly selection of a single node could propagate to a node-set (and all nodes in it) and to constrained nodal rigid body. So you may end up selecting more than you intended!

![](../Storage/primer-22-1/referencing-of-clipboard-items/referencing-of-clipboard-items-2024-01-10-1.png)

Consider initial selection of a single part

![](../Storage/primer-22-1/referencing-of-clipboard-items/referencing-of-clipboard-items-2024-01-10-2.png)

Result of default Find referenced items

![](../Storage/primer-22-1/referencing-of-clipboard-items/referencing-of-clipboard-items-2024-01-10-6.png)

Result of Find referenced items with option propagate to set when any item selected

![](../Storage/primer-22-1/referencing-of-clipboard-items/referencing-of-clipboard-items-2024-01-10-5.png)

Result of Find referenced items with options propagate to set and find senior items

![](../Storage/primer-22-1/referencing-of-clipboard-items/referencing-of-clipboard-items-2024-01-10-3.png)

For Save as model, when PRIMER has finished finding all entities the following panel is displayed and at this stage the user has control over selection of items by clicking on the relevant button to take or leave each group of entities. Items originally present in the clipboard are displayed in the centre column and referenced items are shown in the right hand column of the panel.

![](../Storage/primer-22-1/referencing-of-clipboard-items/referencing-of-clipboard-items-2024-04-11-1.png)

[Previous](display-of-items-on-the-clipboard-panel.md)  |  [Next](saving-clipboard-entities-as-a-new-modelkeyword-file.md)