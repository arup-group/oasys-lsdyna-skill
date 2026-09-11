###  Synchronising Attributes

It is possible to synchronise the following attributes across the link:

| **Attribute** | **What it does** |
| --- | --- |
| **Viewing** | The current view: scale, orientation, position on screen, perspective settings. Includes the effect of dynamic viewing. |
| **Visibility** | Blanking and entity visibility settings |
| **Attributes** | Item colour, transparency and drawing mode (current, shaded, etc) |
| **Xsec** | Cut-sections: location, orientation, setting. Includes the effect of dragging the section. |

####  Symmetry 
 
All the above attributes are symmetrical. For example if viewing is synchronised then a view change in D3PLOT will affect PRIMER, and one in PRIMER will effect D3PLOT.
 
####  Switching on/off 
 
Each attribute type can be turned on/off independently for each model. The switches themselves are symmetrical: changing a setting in the Pre panel of D3PLOT will update the same setting in the Post panel in PRIMER.
 
####  Effects of multiple models 
 
D3PLOT may put multiple models in different windows or the same window, but PRIMER places all models in the single window. This can lead to slightly strange behaviour since rotating only a single model (of several) in its own window in D3PLOT will affect all models in PRIMER, whereas rotating a model in PRIMER will affect all windows containing linked model in D3PLOT.

[Previous](the-post-panel.md)  |  [Next](synchronised-operations.md)