###  Additional Airbag Folding Notes

The following will help users to fold airbags successfully

* For thin and tuck folds make sure that mesh lines follow fold lines exactly, (or at least within Tolerance). To improve accuracy of these folds it is usually important that the mesh lines adjacent to a fold line are also straight and have a constant spacing (perpendicular to the fold) from the fold mesh line. This is not so critical for other fold types. If your mesh lines do not follow the fold lines exactly this can easily be fixed by using an ALIGN fold.
* Be sure that the airbag does not have any cuts: it should be a closed surface. Circular holes are not a problem, but there may be computational problems if there any internal free edges.
* Thick folds and spiral folds can result in penetrations between shells on different layers. These need to be done selectively and the radius may need to be increased to avoid penetrations.
* Plan ahead if possible. Frequently, there are many different orders in which folds can be done which will result in the same final folded configuration. One order is usually much easier to accomplish than the opposite order for complex bags. If difficulty results from trying to fold a bag in one order, then perhaps try the opposite order. Subset folding can make the folding process much easier but this can only be used when the nodes for a fold are a subset of the nodes from the last fold (i.e. if the fold order in the bag is from the centre towards the edge, not from the edge towards the centre).
* Be sure always to select NEW before selecting options for a new fold.
* If necessary a fold can be DELETEd and the user can start it again if something goes wrong.
* If nothing appears to happen when creating a fold ensure that sets, carried over from the previous fold, are not defined in this definition. This can happen as much of the previous fold's data is carried across when creating a new fold. Simply go to the SETS AND LAYERS feature and change the set or layer definition.

[Previous](saving-and-reading-orgiamifold-definitions.md)  |  [Next](folding-example.md)