####  Extrude

Extrude allows you to:

* Extrude nodes to create beams;
* Extrude nodes to create shells;
* Extrude shells to create solids;
* Extrude shells to create thick shells;
* Extrude (faces of) solids to create new solids.

The popups allow you to choose the mode.

The number of beams, shells, solids or thick shells to create in the extrude direction can either be given or you can give the element size, in which case PRIMER will determine the number required.

The extrude direction can be given by:

* The global X, Y, or Z axes. Give the distance.
* A vector given by 2 nodes. Either give a distance or use the length N2-N1.
* A vector given by X, Y and Z components. Either give the distance or use the length of the vector.
* In case of extruding shells to Solid/Thick shells, we can also extrude in the shell normal direction.

When extruding nodes to create shells, if the last node chosen is the same as the first node then the shells created will wrap round.

When extruding shells to create solids:

* Set ESORT = 1, sets ESORT to 1 in \*CONTROL\_SOLID keyword.
* Create true thickness solid, creates solid version of shell by extruding it in +/- normal direction by 0.5 times the shell thickness.

When extruding solids to create new solids:

* Set Single face to extrude only the selected face.
* Propagate will expand the selected face across the surface defined by the break angle.

 ![mesh_extrude](../Storage/primer-22-1/primer_links/sect_6/meshing/mesh_extrude_light.png)
[Previous](simple-meshing-operations.md)  |  [Next](offset.md)