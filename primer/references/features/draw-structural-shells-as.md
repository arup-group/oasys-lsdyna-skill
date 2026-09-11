#####  Draw Structural Shells As

| How shell elements that make up the structure are drawn during belt fitting. | ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fopts_draw_struct.png) |
| --- | --- |

##### PRIMER normally draws shell elements as "thin" at the plane of their nodes, ignoring any thickness or offsets. This is done for speed, and it is satisfactory in most contexts.

However during belt fitting, and especially when fitting a belt to tight geometries, it can be important to be able to visualise the true thickness of both the belt itself and any shells that make up the structure. The human eye is by far the best of whether and how closely things fit, but to see this it needs the correct information!
 
PRIMER has the option to draw shells using their true thickness, see [Display Options, Shells](display-options-controlling-plot-parameters.md#dopt_shell). However to save having to set this manually the belt fitter has a "local" setting for this which is active only when it is active.
 [Previous](diagnostic-graphics.md)  |  [Next](explicit-slipring-panel.md)