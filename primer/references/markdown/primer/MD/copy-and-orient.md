###  Copy and Orient

The COPY ON option is available for REFLECT, ROTATE, TRANSLATE, SCALE and PROJECT.

The copy function is **not** available for translate by Contact Orient or for Trans-Rot (triad to triad orientation).

The copy can be applied once or multiple times, the orient being incremented each time. The initial orient may be defined by a DRAG operation or explicitly. The copy function can be turned on at the top of the orient panel. The copy options can be opened by clicking on Options .

![](../Storage/primer-22-1/copy-and-orient/copy-and-orient-2023-07-18-1.png)

When you select COPY ON the orient option are temporarily pre-configured as follows:

* Move constrained rigid body OFF
* Move beam 3rd node ON
* Move attached extra nodes ON
* Move connection entities ON

Move/copy welds with panel is available for user to set.

When copy is deselected (or the orient panel dismissed) PRIMER will restore the settings to their previous value.

![](../Storage/primer-22-1/copy-and-orient/copy-and-orient-2023-07-18.png)

**Labels for new items** By default the new items will be labelled starting with the highest current label + 1 for each item type. Alternately, the user may specify a pair of seed labels (this or the next available label will be used) or a pair of offsets. One label is for the more populous type of item (nodes, elements, node sets, nrbs), the other for all other types. In the offset case, PRIMER will check that all the offset labels are available.

If [include label ranges](renumber-includes.md#376renumberincludes) are defined for the model, PRIMER will always try to correct any out of range labels once the orient operation is completed.

**Part for new items** For copied element the user may choose to

* elems in same part put copied elements in the original part
* elems in new part put copied elements into a newly created part

If the user selects elems in new part , items referenced by the original part (e.g. material, section) will also be copied if and only if the radio button create new sects/matls is selected. Otherwise the old ones are used. If the part is referenced directly by something (e.g. Boundary Prescribed Motion Rigid or contact by part) this card will also be copied if the option copy all related items is ticked.

| **Part for welds** If the options copy welds with panels and elems in new part are set, by default the option is to keep welds in their original part. If you want a new part for the welds you may switch from welds in same part to welds in new part. |
| --- |

**Include files** There are three options for the include file which copied items are put into:

* Copied items to same include will put the items into the same include where the original item was in.
* Copied items to current layer uses the current include.
* Copied items to duplicate include creates a duplicate include (named to xxx\_1, etc) for the new items.

[Previous](trans-rot-translate-and-rotate.md)  |  [Next](check-for-element-distortion.md)