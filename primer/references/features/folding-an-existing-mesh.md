###  Folding an Existing Mesh

  ****

The following sections deal with folding an existing mesh. There are several parts to this so it has been split up into several sections.

####  Suitable initial orientation of the mesh

The ideal way to fold an airbag is to define the unfolded airbag in the X-Y plane, fold it, and then orient it in space with respect to the vehicle space. If it is not defined topologically to be in the X-Y plane it would be sensible for the user to define a local co-ordinate system such that the local system is planar with the airbag (see [LOCAL_SYSTEM: Defining Airbag Local Axes](local-system-defining-airbag-local-axes.md)). When folding then takes place it will visually appear to be in the global X-Y plane. On exiting the airbag folder the bag will return to the global space.

However, it is strongly recommended that folding should start with the initial geometry in the global X-Y plane, as this will reduce the chances of confusion about where the geometry actually is, and make life simpler!

#### How the*AIRBAG_REFERENCE_GEOMETRYinteracts with folding

The \*AIRBAG\_REFERENCE\_GEOMETRY definition is also crucial to folding, as it is used as the basis for all folding operations. If no such definition exists when folding starts, then PRIMER will automatically copy the nodal coordinates *in their current configuration*into the reference geometry. (Any existing reference geometry for a node will not be over-written.)
 
This is not a wholly satisfactory solution, as an initial reference geometry which gives a satisfactory element shape for stress calculation during analysis may not prove an ideal starting point for folding operations: typically where a 3D bag needs to be split into several 2D panels for folding, and then reassembled. In this situation it may be necessary to save the "true" reference geometry (for analysis) in a separate file, delete it from the input deck used for folding in PRIMER so that a more satisfactory geometry can be used for folding each panel, then re-introduce it prior to analysis.

This is not a wholly satisfactory state of affairs, and the geometrical basis for folding may in future be changed to be independent of the reference geometry.  ****

####  Interaction between the ORIENT command and folding

Both ORIENT and folding act to change the current coordinates of nodes, and the order in which they are applied is important since the most recently used will "win" in determining the final position of nodes. This is important since folding is always based on the *reference* geometry (which is unaffected by orientation commands), whereas ORIENT always operates on the *current* (ie as-folded) geometry. If you use ORIENT to position an airbag after folding and then return to the airbag folder at a later date to refold the airbag any orientations will be lost. To prevent this problem the airbag folder has built in orientation functions. These orientations are saved just like folds and so if a bag is refolded it can be repositioned using these stored orientations.

It is strongly recommended that you use the orientation functions build into the folder rather than the general orient functions of PRIMER so that any orientations you create are saved and can be modified or replayed in the future.

[Previous](folding-airbags.md)  |  [Next](airbag-folding-summary.md)