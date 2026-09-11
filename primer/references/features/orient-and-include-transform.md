###  Orient and Include Transform

![](../Storage/primer-22-1/primer_links/sect_6/orient/inc_trans_1.gif)

Consider INCLUDE\_TRANSFORM option is available for Scale, Reflect, Rotate, Translate, Trans-Rot orients.

In this case, before orient is performed, PRIMER will inspect what is to be oriented looking for include files where all nodes are selected. If found, you will be offered the opportunity to create/modify Include\_transform (as an alternative to explicit orient). You will also be warned of any includes where a subset of nodes have been selected - these obviously cannot use the transform method and will be oriented explicitly.

![](../Storage/primer-22-1/primer_links/sect_6/orient/inc_trans_2.gif)

If you select the transform method PRIMER will then check that the nodes are in their original as read position, i.e .that an explicit orient has not been already applied. If the nodes fall outside the given tolerance the orient will be blocked. If the max diff reported seems small enough you may wish to increase the tolerance under Options &gt; Program Options &gt; Model Modified &gt; Threshold. Otherwise, you need to save the include in its current position, before you can implement the include tranform method.

![](../Storage/primer-22-1/primer_links/sect_6/orient/inc_trans_3.gif)

[Previous](check-for-element-distortion.md)  |  [Next](clones.md)