####  Selecting a target

| Clicking on the red button on the left-hand side activates a target point. Clicking on the button when it is green will remove the target point. Once active the required information can then be input and the target selected for positioning the headform via the popup on the main positioning panel.<br> <br><br> <br>The NODE buttons on the target database panel allow the user to select a node in the model from which the co-ordinates are taken for use by the target. | ![](../Storage/primer-22-1/primer_links/sect_6/fmh/target_point.gif) |
| --- | --- |

When a target point is selected for use the headform is moved to that target point with the headform reference node located at the target co-ordinates. If a position definition (see below) exists and has been previously selected, the headform angles will be determined by that otherwise it will default to 0 vertical angle and the target minimum horizontal angle.

| ![](../Storage/primer-22-1/primer_links/sect_6/fmh/contact%20penetrations.JPG)Next the contact needs to be set-up. The contact definition exists in the headform tree file, under HEADFORM\_START -&gt; COMPONENTS. This contact must be created or edited to suit the headform. It is best to use an automatic surface-surface contact defined by part set, with the SURFB side defined on the headform.<br> <br>The SURFA side of the contact may require editing so that it contains the correct parts for each position. Alternatively a set can be defined with all the relevant parts and a box added to the contact. As the head is moved to different positions the box will be translated with it. In FMH mode the function which enlarges boxes as they are rotated is suppressed as this was found to enlarge the contact box excessively. |
| --- |

The contact can be edited and sketched in the usual way and also checked for initial penetrations. Those elements that are within a shell thickness apart or actually crossing over are sketched in white.

| ![](../Storage/primer-22-1/primer_links/sect_6/fmh/head_position.gif)The headform is now positioned relative to the selected target point. This requires a position definition to be created. If position definitions already exist within the model for the selected target point then they can be selected via the popup. |
| --- |

Creating or editing a position definition will bring up the panel shown in the panel below. This will create a unique position for the head form that is stored in the keyword deck. This can then be re-used at a later stage without having to re-create it.

![](../Storage/primer-22-1/primer_links/sect_6/fmh/headform_position.gif)

Delete headform position will remove the current position and return to the main panel. Auto cut will turn on PRIMER's cutsection feature and automatically orient the section through the centreline of the headform. This can aid in headform positioning.

The horizontal angle is the angle between the global X axis and the headform local X axis in the global XY plane. This can be set to the minimum, mean or maximum angle as defined on the selected target. If none of these angles are required a user defined angle can be entered which is required to be between the minimum and maximum.

The positional node is used for positioning and rotating. By default, when setting the vertical angle, PRIMER will rotate the headform around the head reference node. This can now be changed to any node on the headform. The default can be reset by clicking on Reset to default . After positioning the headform automatically, the initial contact point is known. The positional node can then be set to the initial contact point by clciking on Set to contact pt . With an alternative to the headform reference node chosen as the positional node, the X,Y,Z distance from the target point shown on this panel will now use the new node. Also, clicking zero will zero the headform to the target point at this new node.

The Auto vertical tool can be used to automatically position the headform to its maximum vertical angle by simulating the rolling of the headform on the trim. More information on this can be found below.

The vertical angle is the angle between the headform local X axis and the global X axis in the local XZ plane. This can either be typed in or dragged into position using the DRAG button and clicking and dragging the headform in the graphics area.

Max HIC This will rotate the head from +25 to -25 of its current position and leave it at the angle which minimizes the spread of penetrations in the XZ cutting plane of the head. This is theangle at which the head is least able to roll on impact and consequently should give the highest HIC value. It is recommended that the head be positioned at &lt;0 0 0&gt; first (note the positional node is reset to the head reference node for this operation).

AUTO POSITION This function will attempt to position the head to minimize the distance between the initial contact point and the target point. This distance (contact-&gt;target) is measured in the head local YZ plane, i.e as viewed along the X axis (line of flight).

There are 3 modes for controlling the corrective motion of the head.

Lock on axis - in this mode the head will only be moved along its line of flight (local X), i.e.without varying local Y or Z coordinates

Lock on XZ plane - the head can move axially (local X) and up or down (local Z) but the local Y coordinate does not vary

Unlock - the head can move freely

The example below shows how the different modes will position the head when faced with a "difficult" target point, which has been positioned in a re-entrant corner of the trim. In such cases, keeping the head locked to the XZ plane limits how close the initial contact point and target point can become. However, freeing the motion may result in excessive sideways movement and even an initial contact point outside the defined perimeter.

The automated positioning system is designed to assist in headform positioning, however, the user must use their own judgement about whether the iterative process has actually achieved the position most suited for test.

| ![](../Storage/primer-22-1/primer_links/sect_6/fmh/xz_locked.gif) |
| --- |
| Head positioned with lock on XZ plane cannot get initial contact point very close to target point. |

| ![](../Storage/primer-22-1/primer_links/sect_6/fmh/xyz_free.gif) |
| --- |
| Head positioned freely gets initial contact closely aligned but has moved sideways excessively. |

| ![](../Storage/primer-22-1/primer_links/sect_6/fmh/dragging.gif) | The headform can also be dragged in the headform local X, Y and Z directions using the left, middle and right mouse buttons respectively. Also its vertical angle can be dragged.<br><br>During the drag operations if the CHECK\_PENETRATIONS button is made active then the contact is checked for penetrations each time a mouse button is released. The penetrations are sketched in white and the CHECK\_PENETRATIONS is updated with a feedback message.<br> <br><br> <br>The contact and the target point can also be sketched at any time during these operations. |
| --- | --- |

#####  Auto vertical tool

![](../Storage/primer-22-1/primer_links/sect_6/fmh/auto_vertical_tool.gif)

The auto vertical tool can be used to automatically position the headform to its maximum vertical angle by simulating the rolling of the headform on the trim. The user can set a maximum angle and a 'back angle' which is used when contact occurs between the chin and the trim. This process works by starting off with the headform in contact with the target point. It will then slowly rotate the headform (depenetrating along the way) until it reaches its maximum vertical angle or the chin touches the trim (whichever comes first). The headform will then rotate back by the desired back angle (usually 5 or 10 degrees), again depenetating the headform along the way. 
Ensure the headform is positioned at the desired horizontal angle before using this tool. A shell set to define the chin area also needs to be created. The headform should also be positioned at the point of first contact as well, although PRIMER will run the automatic position process before entering this panel to find this point. As the headform rotates the contact point may change, and therefore the rotation centre point will change automatically. Also, the user can choose the method of head depenetration when rotating. With the depenetration method set to 'ROLL', PRIMER will depenetrate the headform from the trim along the x-axis of the headform coordinate system. This simulates the rolling of the headform off the target point during rotation. With the 'ROLL, SLIDE XY' setting, PRIMER will depenetrate the headform from the trim on the XY plane of the headform coordinate system. This simulates the headform rolling off the target point during rotation and then sliding back towards the target along the XY plane. With the 'ROLL, SLIDE XYZ setting, PRIMER will depenetrate the headform freely in all directions of the headform coordinate system. This simulates the headform rolling off the target point during rotation and then being free to slide back towards the target point in X, Y and Z directions. Auto rotate to maximum vertcial angle will apply the process.

| ![](../Storage/primer-22-1/primer_links/sect_6/fmh/initial_velocity.gif)The headform initial velocity is automatically created in the headform local X axis direction. The popup gives the option of selecting the two common impact velocities (in miles per hour) or the velocity can be typed in (in model units). |
| --- |
| ![](../Storage/primer-22-1/primer_links/sect_6/fmh/headzone.gif)You can specify a node set to define the headform impact zone. This is used in the headform checking panel described above to ensure that the point of first contact is within the impact zone. |

[Previous](checking-defined-targets.md)  |  [Next](groups.md)