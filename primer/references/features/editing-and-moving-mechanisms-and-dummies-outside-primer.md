###  Editing and Moving Mechanisms (and Dummies) Outside PRIMER

It is best to move mechanisms and dummies bodily (meaning as a whole) using the Orient function in PRIMER since this will update not only nodal coordinates and other part-related data, but also information in any saved \*POSITION data.

However it is recognised that some workflow practices will require sub-models containing mechanisms and dummies to be moved outside PRIMER , and the resulting merged deck then taken into PRIMER for detailed positioning. This will work so long as the following rules are obeyed:
 
1. Don't try to "position" individual assemblies within a dummy or mechanism outside PRIMER . It is unlikely that you will update all the required geometry and \*POSITION data, and this may lead to internal inconsistencies when the model is re-imported back into PRIMER . Positioning by dragging assemblies will probably still work after such changes, but retrieval of any saved \*POSITION information is likely to give the wrong result.
2. Minor editing of assembly contents, for example remeshing of a part or addition of nodes and elements, is acceptable so long as any nodes used for mechanism connections or points are not disturbed. Significant edits should be avoided, or if they are necessary then you will probably need to remake the assembly in question once back inside PRIMER
3. Translating and/or rotating the mechanism or dummy as a single quasi-rigid block, ie keeping the relative positions and orientations of assemblies the same, is OK. Scaling or "morphing" may result in any saved \*POSITION information giving the wrong result. 
 
However if you do this make sure that all definitions of connections and points within assemblies use nodes rather than explicit coordinates, as external software almost certainly will not know how to change some of the more obscure data fields on \*MECHANISM and \*DUMMY cards.

Perhaps surprisingly translating, rotating or reflecting a mechanism or dummy as a whole does not have any effect on stored \*POSITION data or subsequent positioning operations. \*POSITION data creates its own space system, and so long as all assemblies and stored positions use the same space system it doesn't matter where these are located in space or how they are oriented. This is because retrieving a saved position effectively extracts only the translations and rotations to get from orientation A to orientation B, and these transformations can be applied successfully to any object located anywhere.
 
However the key words in the first sentence are "  ***as a whole***  ". If you have moved individual assemblies relative to one another your saved \*POSITION data may become invalid. If you have done this accidentally, which may become obvious when retrieval of saved positions gives the wrong answer, then you should delete all the \*POSITION data inside the \*MECHANISM or \*DUMMY blocks in the keyword file in order to force PRIMER to recreate this information.

[Previous](mechanisms-and-include-transform.md)  |  [Next](meshing.md)