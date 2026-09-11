####  Layers

By default all layers (through the thickness of the airbag) will be folded, but sometimes it is convenient to restrict this to only layers within a given +/- Z coordinate.
 ![](../Storage/primer-22-1/primer_links/sect_6/airbag/layers.gif) 
Upper and Lower layer selection define respectively the upper (positive) and lower (negative) Z limits within which material will be folded. Selecting PICK from either prompts you for two nodes, and the Z limit used is set to the average of these. (The reason for having two nodes is that you need to define a point between the outermost layer to be folded, and the layer beyond that, and usually there will only be empty space there!). The default values that are used for the upper and lower limits are 1.0e+20 and 1.0e-20 respectively so by default the whole origami (or set) will be folded. RESET can be used to set the lower/upper layer back to this default. In this example the upper layer is 1.0e+20 and the lower layer is -0.3 so anything which is less than Z=-0.3 will not be considered for folding.

[Previous](advanced-set-selection.md)  |  [Next](airbag-folder-options.md)