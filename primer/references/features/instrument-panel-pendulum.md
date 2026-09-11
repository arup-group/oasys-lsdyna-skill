##  INSTRUMENT PANEL PENDULUM

![](../Storage/primer-22-1/instrument-panel-pendulum/instrument-panel-pendulum-2025-02-10.png)
 
The IP Pendulum function can be used to specify multiple Instrument Panel Pendulum impact models for ECE R21 or FMVSS202. It is accessed under SAFETY &gt; IP Pendulum .

This function supports interactive and batch model processing. Automated positioning and depenetration is available.

The initial screen for setting up IP Pendulum parameters is shown below. Post \*END data, if available, is read in by default. Pendulum to IP contact can be created by clicking on the Create button.

Standard and reduced impact airbag velocities can be specified using the appropriate text box and popup. Base and forward H-point coordinates can also be specified in this panel. The IPP targetting panel can be reached by clicking on the appropriate button.

![](../Storage/primer-22-1/instrument-panel-pendulum/instrument-panel-pendulum-2025-02-10-2.png)

The setting panel enables the user to change the default settings which are defined as per regulation, available for both ECE R21 and FMVSS201. These values are used by the positioner to determine whether or not a target point is legitimate. The head diameter should be consistent with the model used.

The user setting Max target-contact distance (accessed under settings ) will exclude from the list of successfully positioned points, any which fall outside this limit.

![](../Storage/primer-22-1/instrument-panel-pendulum/instrument-panel-pendulum-2025-02-10-3.png)

The IPP targetting panel, as shown below, displays existing targets in the model. A csv file can be read in using the Read button to load new points. New target points can be also added using the sel nodes for add/rem targets button. Prior to positioning, target points appear on a light blue background if they are misaligned with the trim normal. This indicates that they probably cannot be contacted by the pendulum. A red background indicates that they definitely cannot be reached by the pendulum. A white background suggests that points are not yet positioned. When the Position button is clicked, selected targets are positioned and de-penetrated.

![](../Storage/primer-22-1/instrument-panel-pendulum/instrument-panel-pendulum-2025-02-10-7.png)

Target points that have been successfully positioned are shaded green. Failed points are shaded red.

![](../Storage/primer-22-1/instrument-panel-pendulum/instrument-panel-pendulum-2025-02-10-8.png)

The list of target points can be stored in a model or written to a csv targetting file for batch processing. This can be done by switching to the KEYOUT PANEL . File path, sub-directory names, and file names can be modified by users prior to keyout.

![](../Storage/primer-22-1/instrument-panel-pendulum/instrument-panel-pendulum-2025-02-10-9.png)

Ticking the "Replace with user impactor?" enables the substitution of a user's own impactor model (presumably a linear impactor) before the model is keyed out.

This requires the preference setting primer\*replacement\_ipp\_impactor:&lt;name&gt;

The replacement impactor is expected to reside at the origin and be aligned with global XYZ axes. Assuming position has been achieved, it will be translated so the origin moves to the reference node (on the coordinate system) of the original Arup impactor and rotated so the x-axis points along the line of flight. It will then be linearly depenetrated or moved to point of contact. Note that the default Aup impactor is supplied with the installation and can be found at $OA\_INSTALL/primer\_library/Arup\_Pendulum.

In **ECE R21 (Deprecated)** mode the base of the pendulum is located at the H-point.

In **ECE R21** mode a subsequent **\*DEFINE\_TRANSFORMATION** is applied to rotate the line of flight onto the trim normal if the impact angle is more than 5 degrees.

![](../Storage/primer-22-1/primer_links/sect_6/ippi/ecer21.gif)

In **FMVSS201** mode after achieving a position, the base is translated in Y to align with each impact point.

![](../Storage/primer-22-1/primer_links/sect_6/ippi/fmvss.gif)

IPP parameters can be specified in the input csv file in the following manner when the IPP build is run interactively:

![IPP csv](../Storage/primer-22-1/primer_links/sect_6/ippi/ipp_input.png)

px, py, pz are the target points

h\_flag = 0 indicates standard H-point, h\_flag=1 forward H-point

v\_flag = 0 means use standard velocity, v\_flag=1 means use reduced velocity

r\_flag = 0 use ECE R21 position without rotation

r\_flag = 1 use ECE R21 position with rotation if the impact angle is more than 5 degrees, so that line of flight aligns with trim normal

r\_flag = 2 use FMVSS201 so that hinge is translated in Y to align with target point

Additional information would be required if the IPP build is run in batch mode. In this case, the csv file can be specified as follows:

![IPP batch input](../Storage/primer-22-1/primer_links/sect_6/ippi/ipp_input_batch.png)

[Previous](include-controlling-include-files.md)  |  [Next](script-using-javascript-in-primer.md)