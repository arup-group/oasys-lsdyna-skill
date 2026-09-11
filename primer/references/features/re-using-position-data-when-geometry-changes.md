###  Re-using Position Data When Geometry Changes

Position data generates a notional centroid, the average coordinate of the bounding box round an assembly, the first time a position is saved and thereafter this value is "remembered". Since this value is non-structural it does not matter if the geometry or content of an assembly are modified: this centroid remains unchanged and saved positions will still work. (Technically ill-conditioning could occur if the assembly's dimensions are made wildly different, but this is unlikely to happen in practice.)

However if nodes on the assembly used for Connections with its neighbours are moved it is possible that retrieving previously saved position will result in these Connections becoming separated. A moment's thought reveals why: the location of such a node in a previously saved position is unlikely to match up with the relevant connection position on the assembly on the other side of the connection.

Therefore the general rule is that saved positions will continue to function despite changes or additions/subtractions to assemblies so long as the locations of nodes used in connections are not modified.

[Previous](positions-are-relative-within-the-dummy-mechanism.md)  |  [Next](re-using-position-data-in-different-contexts.md)