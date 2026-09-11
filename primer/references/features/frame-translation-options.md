####  Frame Translation Options

this panel allows the user to modify the material type of a frame component (part), or decide whether to split frame elements on an individual part basis.

![](../Storage/primer-22-1/primer_links/appen_6/sap2000/sap_fig_06.gif)

The material options are as follows:

LINEAR : standard linear elastic material.

SEISMIC : will convert the standard linear material into a non-linear 'seismic beam' material capable of modelling plastic hinges and failure. The plastic moments of these frame components are automatically calculated provided that the geometry of the frame section was included in the SAP2000 ascii file. This shape is combined with the yield stress of the material to calculate the plastic properties. Where frame elements are expected to fail due to applied moments it is advisable to split seismic beams into at least 2 beams in order to capture the correct moment at each end. Note that; seismic beams can only be created from Belytschko-Schwer beam sections (B-S).

CABLE : converts the standard frame sections to linear elastic discrete springs. These elements cannot be split and will ignore any end release definitions on frames in a 'cable' component - end releases have no meaning! 
 
 SET ALL enables all frame components to be set to a specific material type. The global Yield Stress and Beam Split options are adjacent. These global values become default values which apply to the entire model.

In the global Beam Split area all beams can be split with the current default value (i.e. the value from the [main panel](main-translation-panel.md#main_panel), 'nseg' (defined for each frame element in the SAP2000 ascii file) or some other even number typed in). A further option SPLIT NONE is available if no beams are to be split. A pop-up box can be displayed (by clicking the right mouse button) from the text box in order to define the default value.

Below the 'global' area is a list of frame component names, followed by data relevant to each individual component. If more than 10 components exist in the model the slider can be used to scroll through the components.

Each frame component name is followed by '(H-L)' implying Hughes-Lieu beam section or '(B-S)' for Belytschko-Schwer beam sections. As mentioned earlier, this enables the user to distinguish between components which can and cannot be modified to seismic beams. Refer to the [Frame Section](translator-functionality.md#frameelementssections)part of this appendix for details on how the frame section type is chosen in the translation.

The material Type is displayed in the next column. This can be chosen by cycling through the material options by clicking the left mouse button with the curser positioned over the screen button, or using the right mouse button to invoke a pop-up box.

Yield Stress is only appropriate for seismic materials, and will only become available if a seismic material is chosen. The yield stress value can be typed in directly or the right mouse button can be used to invoke a pop-up which will reset the current default value.

The last column contains the Beam Split option for individual components. The options are: type a value in directly (even numbers only) or use the right mouse button to invoke a pop-up to choose &lt;no split&gt;, &lt;nseg&gt; or &lt;default&gt; for 'do not split this component', 'split using the nseg value on the frame element card' or 'split using the default value above'. The beam split option will be unavailable for cable materials as it is inappropriate.

[Previous](main-translation-panel.md)  |  [Next](load-translation-options.md)