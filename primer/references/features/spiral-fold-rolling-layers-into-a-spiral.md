####  Spiral Fold (Rolling Layers into a Spiral)

![](../Storage/primer-22-1/primer_links/sect_6/airbag/Image63.gif)
 
The Spiral fold is used to roll up a flat bag.
 
An Archimedean spiral (radius is proportional to angle) is used, and PRIMER attempts to keep the characteristic element length constant at the middle fibre of the bag
 
![](../Storage/primer-22-1/primer_links/sect_6/airbag/airbag_spiral_graphic.gif)

The adjacent figure shows the fold definition and options menu for the spiral fold.
 
##### Controlling the spiral internal radius
 
![](../Storage/primer-22-1/primer_links/sect_6/airbag/fold_spiral.gif)PRIMER tries to preserve a constant arc length for the middle fibre of the bag as it is rolled, which presents problems at the spiral centre where the radius tends to zero and will always be smaller than the elements.
 
In practice a rolled airbag has a finite thickness and therefore will not use the early portion of this curve. PRIMER uses a Factor , of the original arc length of the airbag to specify that portion of the curve that is not to be used. For example, a Factor of 0.5 increases the total arc length to 1.5 times the airbags arc length and leaves the first 0.5 times this arc length unused. A factor of 0 would have no unused portion and the airbag would be rolled from the spiral centre. The options menu shows how much of the spiral is mapped and how much is unmapped. The default factor is 0.1.
 
The user can also specify a subset of the airbag to be folded using the SETS AND LAYERS options as for other types.

[Previous](tuck-fold-a-thin-fold-tucked-into-the-mesh-centre.md)  |  [Next](scrunch-fold-compressing-a-3d-bag-to-a-flat-shape.md)