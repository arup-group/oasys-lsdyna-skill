####  Further Positioning Commands

![](../Storage/primer-22-1/primer_links/sect_6/dummies/position-panel-commands.png) 

| The following commands are common to all three positioning methods described before.<br><br><br>| **Accept** | Accept position and save changes. |<br>| --- | --- |<br>| **Reject** | Abandon positioning, and restore initial position. |<br>| **Global Accuracy** | Controls the accuracy of the positioning process |<br>| **Undo/Redo** | Perform **Undo/Redo** for assemblies positions - works for all position modes. The users can also perform “**Undo all**” to go back to the original position or “**Redo all**” to the last positioned orientation of the Dummy/HBM. |<br>| **Options...** | Further positioning options. |<br>| **Save/Retrieve** | Save and retrieve positions. |<br>| **Mirror** | Mirror the position of the Dummy/HBM. |<br>| **Visualisation Table** | View assembly based of the Dummy/HBM or the anatomy based internal entities of the HBM. | |
| --- |

##### Accept: accepts the current position and saves the changes you have made
 
Once you are happy with the current position use Accept to save it and finish positioning.
 
Before it saves the position PRIMER examines all the nodal pairs at joints in the dummy to check that positioning has not pulled them apart. It applies a twin tolerance:
 
* An absolute value of 1.0e-3. This is the value hard-wired into the Ansys LS-DYNA keyword reader.
* A distance of 1.0e-6 times the model longest diagonal

Any joints at which separation of nodal pairs exceeds this figure will be listed and you will be given the option of Autofixing them.
 
This is performed by moving each pair of nodes to their average position and, so long as the errors are small, this is an acceptable distortion of the model. This is an iterative process since if a node is on more than one joint then correcting for joint A may move it out of position for joint B. If there are still errors after 5 passes the operation is abandoned and it is left to the user to sort out.
 
##### WARNING: You should avoid repeated [Position, Accept, Autofix] cycles on a model
 
This is because each Autofix operation changes the geometry of your dummy slightly, and while a single such change may be insignificant repeated use of this feature will build up cumulative errors.
 
It is better to achieve a position in a single operation from an unmodified dummy model. If you are planning to generate a series of positions in succession you should use [Model, Copy](model-copy-copying-models-internally.md#MODELCOPY)to create a new model from an original one each time, and create the position in the copy.

Reject: rejects the current position, restores the initial one and exits the positioner

Use Reject if you want to abandon positioning and restore the initial position. All changes made during positioning will be lost, and you will return to the main [Position](position-analysing-mechanisms.md#operations) menu with the model unchanged.

#####  Reset all: restores the initial position

Sometimes positioning goes horribly wrong and the best thing is to start again. Reset all restores the initial position that was saved when you entered the positioner, cancelling all changes made since then. You can use this at any time.
 
##### Global Accuracy: sets the precision of the mechanism calculation
 
By default the precision with which the mechanism positioning process calculation is performed is based on the diagonal of the box bounding the mechanism times a "convergence factor" of 1.0e-4. Therefore a mechanism fitting into a box with a diagonal of one metre will be solved to a precision of approximately 0.1mm, this being the maximum permitted error at connection points.
 
***Note that this does not apply to Rotate Angles mode, in which orientation of assemblies is via explicit rotations.***
 
Detailed convergence parameters can be set in [Options](options-0.md#options), described below, but these are rather opaque and a simpler value to use is the Global accuracy parameter which can be in the range 0.1 to 100.0, default 1.0.
 
The effect of this factor is to divide the default value of the following three convergence parameters thus:

| Convergence factor | = | 1.0e-4 / Global Accuracy |
| --- | --- | --- |
| End movement factor | = | 1.0e-8 / Global Accuracy |
| Step size factor | = | 1.0e-4 / Global Accuracy |

You can still set these individually in [Options](options-0.md#options) below, this is just a simpler and easier way of doing that.
 
Global Accuracy is a floating point number that may have any value in the range 0.1 to 100.0, and typical values are:

| Global Accuracy typical values and their meanings. |
| --- |
| 0.1 | Very loose tolerance, ***not recommended*** |
| 1.0 | **Default value**, suitable for dragging with the mouse |
| 10.0 | Tighter value, practical limit for dragging with the mouse |
| 20.0 | Tighter still, suitable for "specified" motion |
| 50.0 | Very tight, practical limit for "specified" motion |
| 100.0 | Extremely tight: will probably lock up. |

You can change the value at any time, and some experimenting may be required with very complex mechanisms to find a value that gives a reasonably compromise between precision and speed of positioning.
 
The default value may be changed by the preference:
 
primer\*mechanism\_accuracy: *value*

| Options... Setting positioning options <br>The following options affect the positioner:<br> <br><br>| Convergence factor <br>End movement factor <br>Step size factor<br> <br>Max #outer steps <br>Max #inner steps | These options all affect the free dragging positioner only.<br> <br>They should not normally need to be changed, but if the dummy moves very slowly, or "gets stuck", then increasing the Convergence and Step size factors may help. Avoid much larger values as the solution will become inaccurate. |<br>| --- | --- |<br>| Draw wireframe <br>Draw normal | Sets the graphics mode to be used when dragging assemblies. "Draw normal" shows the assembly in grey using normal graphics, but this demands quite a lot of cpu time and only slower computers "Draw wireframe" may be necessary to get acceptable dragging speed. |<br>| Joint coinc check | Is the post Accept joint node coincidence check.<br> <br>By default it will check and report any results, asking you what action to take. You can it work silently, which will fix any errors without further input, or turn it off altogether. |<br>| Move Cross-sections | Whether \*DATABASE\_CROSS\_SECTIONS "belonging to" assemblies are moved with them during positioning. | | ![](../Storage/primer-22-1/primer_links/sect_6/dummies/fig_posn_11.png) |
| --- | --- |
| Diagnostic drawing, output verbosity and JSTF force display are for programmer debugging purposes and - hopefully - can be ignored! |

| Save/Retrieve: Saving and restoring dummy positions <br>You can store any number of dummy positions, and retrieve them at any time into the positioner.<br> <br>A stored position contains a [centre of gravity] plus [3x3 direction cosines] for each assembly in the dummy, making it possible to return to a given configuration without any further calculation. Position data is stored in the dummy [tree file](dummy-tree-files.md#tree_file) and is saved when the keyword file is written out.<br> <br><br>| Save... | Saves the current position. You only need to give a unique name. |<br>| --- | --- |<br>| Retrieve.. | Restores a saved position. This becomes the current position and the dummy geometry is updated immediately causing it to "jump" to the new position. |<br>| Delete... | Deletes the selected positions. Deletion is permanent! |<br><br> <br><br> <br>A more detailed explanation of saved positions, including card formats, is given in [Appendix B.iii](biii-positions-in-dummy-and-mechanism-data.md#position). | ![](../Storage/primer-22-1/primer_links/sect_6/dummies/save_retrieve_panel.PNG) |
| --- | --- |
| Dummy angle files: saving dummy positions in a model independent file  <br>While saved positions are a powerful feature they have the disadvantage that they are specific to the current model, and also (because they contain explicit assembly centres of gravity) to the current dummy's geometry.<br> <br>To make it possible to transfer positioning information between similar, but not identical dummies - for example a new version of an existing dummy - PRIMER also supports a model-independent "dummy angles file" (.daf extension).<br> <br>This file contains:<br><ul> <li>The dummy H-Point position. </li> <li>The rotation angles of the dummy. </li> <li>The rotation angles of each assembly. </li> </ul> <br>On reading this file back in:<br><ul> <li>Each assembly angle is reset to the specified angles, applied in the order [Rx, Ry, Rz]. <br> </li> <li>If the user chooses to move the H-Point then: <br><ul> <li>The dummy as a whole is translated to the specified H-Point position </li> <li>If &quot;whole dummy&quot; rotation angles are present these are applied as an absolute orientation </li> </ul> </li> </ul> <br>This file is likely to work well when transferring positions between successive versions of similar dummies but, obviously, it will not be suitable where the target dummy geometry is significantly different to that of the source. However used intelligently it should be a useful tool.<br> <br>See [The Dummy Angles File](biv-the-dummy-angles-file-daf.md#daf_format) in Appendix B.iv for a full description of the .daf file format, and the section on [Euler angles in PRIMER](notes-on-using-dummy-angles.md#euler_angles) below for a precise description of what "rotation angles" actually mean and how they are applied. |
| Dummy Configuration file: saving the current positioning settings only  <br>In some situations you may wish to save and retrieve only the restraints (and any local coordinate systems) applied to the dummy during mechanism-style positioning, and a "configuration file" (.dcf) performs this function.<br> <br>It contains the fully set of cards normally written between \*DUMMY\_START and \*DUMMY\_END in the keyword file, but when read back in  ***only***  the following information is processed and applied to the current dummy:<br> <br><br>| **Assemblies** | Any restraints, and any local coordinate systems used for these. | (Assemblies are matched by label) |<br>| --- | --- | --- |<br>| **Points** | Any restraints, and any local coordinate systems used for these. | (Points are matched by name) |<br><br> <br>Note that geometry, coordinates, connectivity and the like are ignored when this file is reread. |

| Mirroring the position of the Dummy/HBM <br>The position of the dummy can now be mirrored down a specified central axis through the 'Mirror...' panel.<br>![](../Storage/primer-22-1/further-positioning-commands-2022-12-22.png)<br><br><br><br>This panel provides the user with different methods for mirroring a dummy or HBM. Two different methods of mirroring are provided:<br><ul><li style="text-align: left;">Mirroring the whole dummy (either from left to right, or right to left)</li><li style="text-align: left;">Mirroring certain assemblies on the dummy (i.e. an arm)</li></ul><br><br><br>Before mirroring, first the reflection axes must be set-up. The mirroring of the dummy works by copying the angles from one side of the dummy to the other, with each assembly in each dummy having a specified angle in 3 axes: Phi, Theta and Psi. While most angles will need to just be copied over, sometimes angles may need to be negated (i.e. 30deg becomes -30deg). The set-up for some common dummy/HBM models have already been configured - these can be accessed through the dropdown menu at the top of this panel.<br><br>If none of the pre-configured settings are right, then a 'Custom' option has been provided - this will open up the axes buttons so the user can set their own:<br><br>![](../Storage/primer-22-1/further-positioning-commands-2022-12-22-1.png)<br><br>If the correct set-up is not clear, then the following steps can be used to identify which axes need to be negated:<br><ol><li style="text-align: left;">Go back to the positioning panel and into &#39;Drag Assembly&#39; mode</li><li style="text-align: left;"><span style="font-size: 11pt;">Drag either an arm or a leg into a new position</span></li><li style="text-align: left;">Drag the opposing arm or leg into the mirrored position</li><li style="text-align: left;">Observe the angles in the &#39;Rotate Angles&#39; panel for these two assemblies: the axes in which the angles are opposite (e.g. 40 vs -40) should be the axes selected in the panel above.</li></ol>Additionally, the user can set a default preference for these axes settings (one preference per axis *dummy\_hbm\_reflect\_axis\_phi*  etc.).<br><br><br>If the user doesn't want to mirror the whole dummy, then selecting 'Mirror selected assembly' opens up the rest of the settings:<br><br>![](../Storage/primer-22-1/further-positioning-commands-2022-12-22-2.png)<br><br>An assembly can be selected through the source button - you will only be able to select assemblies that have a 'sibling' pairing (an opposing feature on the opposite side). The propagate option here flags whether the assemblies children also should be mirrored:<br><ul><li style="text-align: left;">If propagate is unticked, just the left and right upper arms will be mirrored</li><li style="text-align: left;">If propagate is ticked, the upper arms, lower arms and hand positions will also be mirrored</li></ul><br>The 2 mirror buttons allow for both directions: 'mirror to sibling' copies the angles from the source assembly and moves the sibling; 'mirror from sibling' copies the angles from the sibling assembly to the source assembly.<br><br><br><br>PRIMER should automatically pair up opposing assemblies through naming conventions; for example 'left\_upper\_arm' will be paired with 'right\_upper\_arm'. If the sibling relationships need to be edited, then the sibling of each assembly can be viewed through the individual assembly panels via the interactive list in 'Drag Assembly' or 'Rotate Angles' modes:<br><br>![](../Storage/primer-22-1/further-positioning-commands-2022-12-22-3.png)<br><br>These mirror buttons have the same functionality as the main Mirror panel with the 'Mirror Selected Assembly' option, however allows for the 'Sibling' to be edited. |
| --- |
[Previous](move-points-free-movement-driven-by-updated-point-positions.md)  |  [Next](batch-command-line-positioning.md)