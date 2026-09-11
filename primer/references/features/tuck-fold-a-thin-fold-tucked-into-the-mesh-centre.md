####  Tuck Fold	(A Thin Fold Tucked Into the Mesh Centre)

 ![](../Storage/primer-22-1/primer_links/sect_6/airbag/Image56.gif) 

The tuck fold is also common in airbags. The material is folded inside the outer layers to form a "tuck". ("Up" and "Down" have no meaning here.)

![](../Storage/primer-22-1/primer_links/sect_6/airbag/airbag_tuck_fold_graphic.gif)

| The adjacent figure shows the tuck fold creation panel.<br> <br>In version 8.0 a second tuck fold algorithm has been added. This is not meant to replace the version 7.1 tuck fold as there will be situations when the version 7.1 fold will perform better than the version 8.0 tuck fold. However the new version 8.0 tuck fold will perform much better in situations where two tuck folds interfere with each other. To illustrate the point the next two figures show an cross section through an airbag with 2 interfering tuck folds (one from each side of the bag) folded with the version 7.1 tuck fold and the version 8.0 tuck folds. | ![](../Storage/primer-22-1/primer_links/sect_6/airbag/fold_tuck.gif) |
| --- | --- |

![Two interfering tuck folds using the version 7.1 tuck fold algorithm](../Storage/primer-22-1/primer_links/sect_6/airbag/airbag_71_tuck_fold.gif)

Two interfering tuck folds using the version 7.1 tuck fold algorithm

![Two interfering tuck folds using the version 8.0 tuck fold algorithm](../Storage/primer-22-1/primer_links/sect_6/airbag/airbag_80_tuck_fold.gif)

Two interfering tuck folds using the version 8.0 tuck fold algorithm

The tuck folds using the version 7.1 tuck folds penetrate through each other. If this airbag was deployed there would be problems with contacts and the airbag forming knots. Additionally the nodes on the fold tip are not in the correct place. The version 8.0 folds do not penetrate through each other and so this airbag will deploy correctly and the nodes at the tip of the fold are still in the correct position.

The default for tuck folds is to use the version 8.0 algorithm. If the fold cannot be performed with this algorithm you can still use the older 7.1 algorithm. This may be better for tuck folds which use multiple material thickness as there are some additional options which may help.

The following two figures illustrate the use of these options for the version 7.1 algorithm, the left hand figure shows that problems can occur with penetrations when using tuck folds for multiple layers. If problems occur then selecting [&gt;&gt;] (double layer mode) may help resolve the problem (right hand figure). But, the double layered mode is only valid if the fold tip lies along a line of nodes. If it does not then the single layered mode should be used.

![](../Storage/primer-22-1/primer_links/sect_6/airbag/airbag_71_tuck_penetrations.gif)

Penetrations at tip

![](../Storage/primer-22-1/primer_links/sect_6/airbag/airbag_71_tuck_nopenetrations.gif)

No Penetrations

By default, the folder attempts to locate the middle fibre of the unfolded material. Everything above the middle fibre is pushed up and everything below the middle fibre is pushed down so that the tip can be inserted and clearance maintained. This can be overridden if PRIMER selects the wrong location using ZSPLIT which prompts the user to pick two nodes. These define a plane whose normal vector starts mid-way between these nodes. The layers are then separated above and below this plane.

SCALE allows the user to reducing the pinching that occurs at the fold tip by increasing the node separation.

[Previous](thick-fold-a-radiused-fold-spanning-1-element.md)  |  [Next](spiral-fold-rolling-layers-into-a-spiral.md)