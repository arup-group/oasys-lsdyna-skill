####  Thin Fold (Perform a Sharp "Crease" Fold)

![](../Storage/primer-22-1/primer_links/sect_6/airbag/Image49.gif)
 
For airbags, the most common fold type is the thin fold. Material is creased sharply along a line of nodes to give a precisely defined shape.
 
The definition and control panel for thin folds are shown in the figure below:
 
![](../Storage/primer-22-1/primer_links/sect_6/airbag/airbag_thin_fold_graphic.gif)

| The panel shows the creation of a thin fold. the airbag has been folded from right to left - the right hand side ending up on top of the left hand side. The fold thickness is 0.3.<br> <br>Typical thin folds, have a total fold angle of 180 with the centre portion rotated 90 though this is not a requirement. Angles larger than 180 are not permissible. These defaults are being used here. The thin fold graphic above shows that there is some pinching at the fold tip. The pinching can be reduced by increasing the Scale option to spread the layers at the fold tip. | ![](../Storage/primer-22-1/primer_links/sect_6/airbag/fold_types.gif) |
| --- | --- |

The figure below shows the effect of Scale on typical thin folds. It is generally desirable to try to select a value which causes the inner and outer material surfaces to be parallel, as this will lead to the contact algorithms being more reliable. However, the user should take care that this doesnt lead to gross local element deformations: as in the bottom right quadrant of the figure. This can also be visualised by using the CROSSED element button. If there are problems with element penetrations this will easily show it. Changing the scale factor will automatically update this plot so you can tell when any penetrations are eliminated.

![](../Storage/primer-22-1/primer_links/sect_6/airbag/airbag_tip_scaling.gif)

By default all the elements and nodes selected for the Origami definition are included in the fold, but it is possible only to operate on a sub-set of these. The SETS AND LAYERS button can be used to select a subset to fold

[Previous](null-fold-set-attributes-but-don-t-fold-mesh.md)  |  [Next](thick-fold-a-radiused-fold-spanning-1-element.md)