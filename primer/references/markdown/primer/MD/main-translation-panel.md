####  Main Translation Panel

| ![](../Storage/primer-22-1/primer_links/appen_6/sap2000/sap_fig_04.gif)<br>Before any data is read, a SAP2000 defaults panel will appear on the screen. This panel allows some options to be set prior to the translation process:<br>
<br>DISMISS terminate the translation process, returning to the generic READ panel.<br> APPLY accept the defaults in the panel and proceed with the translation.<br> HELP will create a message box full of useful information about the function of this panel.<br>
<br>Termination Time will set the final termination time of your transient Ansys LS-DYNA analysis. This value is also used to define loadcurve timing values.<br> End-Release Stiffness defines the stiffness of the discrete springs used represent pin releases at the end of frame elements. It is important the spring elements do not control the time step of the Ansys LS-DYNA analysis. If this occurs, the model may terminate due to numerical instabilities. To avoid allowing springs to dictate the time step of the model the stiffness should be small. However, this must be balanced against the need for the spring to keep the pinned nodes together. Refer to Ansys LS-DYNA User Manual for more data.<br> Beam Split defines the default number of beams into which a SAP2000 frame will be split if required - refer to the OPTIONS panel.<br> Proximity Check Dist defines a linear distance in the model units. If two nodes in the same rigid offset group are further apart than this distance a warning will be produced. This option is useful for checking the model.<br>
<br>Output Data allows the Ansys LS-DYNA DATABASE keyword cards which control the output frequency of results to be created in PRIMER. Each individual card can be switched on and off (green highlight implies on). The output frequency can only be modified when the card is 'on', else it is greyed-out.<br>
<br>Dynamic Relaxation allows dynamic relaxation (DR) options to be turned on and off (green highlight implies 'on'). When the DR option is selected, the following items can be edited:<br> Convergence Check Freq Number of cycles between DR convergence checks.<br> Convergence Tolerance value at which convergence is achieved.<br> Dynamic Relax Factor DR damping factor. This is a scale factor on velocity.<br> Loading Period Period over which the load which is being relaxed onto the model (i.e. self weight) is ramped to the full value. This 'ramping' avoids dynamic shock and oscillation in the model. |
| --- |

**Non-Prismatic Section Translation**

the concept of non-prismatic frame sections does not easily translate into Ansys LS-DYNA. For this reason a choice of several options is required. SAP2000 allows the section type to be defined at either enc of the non-prismatic frame element. These sections are then used to define the intermediate section properties. The options are as follows:

* Split the frame element into 'nseg' beam elements (nseg is defined on the SAP2000 frame element card), and interpolate the section data at either end of the frame creating new frame sections. Note that this can become overly messy if nseg is set to greater than 2. Also note that nseg can be overridden by the beam splitting options in the OPTIONS panel.
* Split the frame element as before but use the section data from end 'I' all the way through the frame.
* Split the frame element as before but use the section data from end 'j' all the way through the frame.
* Do not split the non-prismatic frames (unless specified otherwise) and use section 'I'.
* Do not split the non-prismatic frames (unless specified otherwise) and use section 'j'.

Refer to the [Frame Element](translator-functionality.md#frameelementssections)section of this appendix for more details on frame splitting and non-prismatic frames.

End Release Translation end releases (i.e. pin ends) also do not have an equivalent in Ansys LS-DYNA. Hence there are three options:

* Ignore end releases entirely.
* Use the simple definition.
* Use the complex definition.

Please refer to the [Frame Element](translator-functionality.md#frameelementssections)section of this appendix for more details.

Constraint Translation Many of the constraint types in SAP2000 cannot be converted into Ansys LS-DYNA. This portion of the panel allows each type of constraint to be selected individually:

On (green highlight); all constraints of this type will be converted into nodal rigid bodies with all degrees of freedom connected. 
Off (greyed out); all constraints of this type will be ignored.

Once the APPLY button from the [main panel](main-translation-panel.md#main_panel)has been pushed the translation process will begin.

Stage one of the process reads all of the data from the SAP2000 ascii file and stores the majority of the data in the binary scratch files. Once stage one is completed a second window panel is created: SAP2000 OPTIONS - see figure below.

![](../Storage/primer-22-1/primer_links/appen_6/sap2000/sap_fig_05.gif)

This panel is split into three areas; the static top area ( CONTINUE - proceed with translation, and HELP ), a [frame options region](frame-translation-options.md#frame_translation)and a [loading options region](load-translation-options.md#load_translation).

[Previous](sap2000-file-format.md)  |  [Next](frame-translation-options.md)