####  Interactive Morph Flow Creation

When you create a morph flow, the following steps are recommended:

* Morph the box(es) how you wish them to look when a variable is applied. This can be achieved with the interactive functions on the Morph tab. Applying a numerical offset vector can be useful to ensure symmetry.
* Go to the Variables tab and fill in the unique name for the morph flow.
* Click the Create button. This will create a morph flow with the given name containing all morph points which have been moved from their original positions. The vector for each point will be taken from its original position to its current position. All vectors will be scaled such that the longest vector has unit length.
* Reset all morph boxes in the Utilities tab. This avoids unexpected results with the same morph points appearing on multiple flows; resetting boxes ensures that unexpected vectors don't occur in subsequent morph flows.
* After creating all morph flows, it is also recommended to reset all morph boxes before writing the model. This is so the current positions of all morph points in the keyword file will be the initial positions from which the design variables will be applied.

The Edit flow button allows you to edit existing morph flow definitions. This opens an edit panel with the morph flow name, variable ranges, and the list of morph points with their vectors. Details of these keyword fields are given in [Appendix R](r-morphing-keyword-format.md#morph_flow).
[Previous](variables-tab.md)  |  [Next](design-variable-files.md)