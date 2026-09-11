####  Shoulder Slipring Panel

The Shoulder slipring panel is the first tab on the Explicit slipring panel. This panel allows you to enter information about the explicit shoulder slipring (D-ring) which is needed to automatically adjust the initial path of the belt within the slot of the shoulder slipring and to pull an explicitly meshed shoulder slipring into its correct position during the fitting process.

The panel and an explanation of the required inputs are shown below:

![](../Storage/primer-22-1/shoulder_panel_new_UI.png) ![](../Storage/primer-22-1/explicit_slipring_panel_fields.PNG)

**Rotating Part set**must include all parts forming the shoulder slipring that are expected to be pulled during the fitting process.

**Pivot centre**reflects the centre of rotation of the shoulder slipring.

**Left node** and **Right node**must be chosen from the two lower corners of the slot, where the longitudinal cross section of the slipring and the two edges of the belt coincide. Note that these must be defined considering we're facing the side at which the belt section connected to the first path end point penetrates the slot (the sketch in the panel can be used as a reference).

The **Rotation axis**can be defined either as an explicit vector or by selecting two nodes. In both cases, the rotation axis must point towards the side at which the belt section connected to the first path end point penetrates the slot.

**Belt direction** refers to the sequence of the belt’s points in relation to the sliprings. When setting up a belt path, there are two options for the belt direction: the belt can either pass through the shoulder slipring first, then across the chest, through the pelvis slipring, and finally over the lap section, or it can go in the opposite direction. The ‘Shoulder to Pelvis’ choice means that the belt will move through the shoulder slipring before heading to the pelvis slipring. Conversely, the ‘Pelvis to Shoulder’ option indicates the reverse path, going through the pelvis section before going through the shoulder section.

**1. Automatically adjust the initial path within the slot of the shoulder slipring:**

This option allows effortless adjustment of the initial belt path within the slot of the slipring.

![](../Storage/primer-22-1/shoulder_dring_adjusted.png)

The following describes the steps required to apply this:

1. Define a single belt path point near the slipring bolt during initial path definition
2. Define **Pivot centre, Left node, and Right node**as explained above
3. Click on the **Adjust** button
4. **Undo** restores the original path point

This feature will set the [Point Projection](point-projection.md) at the two newly created points to zero and creates a 90-degree belt bend on the outside point, and a 45-degree bend on the inside point to improve the fitting of the belt around the slipring. You may need to do slight modifications to the automatically generated points to avoid initial penetrations of the belt path with the the slipring. Usually this will only require moving the two points by a small distance using either the 'Advanced' drag handles or the light blue symbols, see [here](drag-handles-twist-handles-intermediate-points.md) for more details on moving the belt using drag handles.

If the **Rotate slip. during fitting** option is on (described below), the location of the two initial belt path points around the shoulder slipring will be updated to maintain a constant relative position to the slot during the fitting process. To deactivate this feature deselect the **Update adjusted points** checkbox at the bottom of the menu.

-

**2. Automatically pull the shoulder slipring into its correct position during the fitting process:**

**![](../Storage/primer-22-1/explicit_slipring_pull.PNG)**

The following describes the steps required to apply this:

1. Fill in all the fields in the **Explicit slipring** panel.
2. Turn on **Rotate slip. during fitting**
3. Start the fitting process as normal

The **Update freq.** is the number of belt fitting iterations between slipring rotations. A lower update frequency value is more robust, since the slipring is rotated more frequently but it will take longer to fit the belt. By default, this value is set to 3 as this provides a robust slipring rotation. However, if the slipring only needs slight rotation for its' correct position, then the number can be increased.

The **Sensitivity**slider controls how responsive the slipring rotation is. A sensitivity setting of 10 maintains continuous slipring movement every Update freq. number of iterations, making it suitable for distant starting points but in most cases the slipring rotation can be switched off towards the end of the fittings process when the slipring is close to the optimal location. At lower sensitivity, the slipring rotation will automatically stop and restart, depending on the position of the belt position within the slipring slot. This will improve the speed of the fitting process as the pulling of the slipring will stop when the optimal position is reached but a lower sensitivity might lead to slightly less optimal slipring positions.

The [Shell Thickness for Contact](shell-thickness-for-contact.md) is another fitting parameter that might affect the result of this solution. The reasoning is that the pulling of the slipring is highly sensitive to the belt-slipring contact at the two sides which determines the direction of rotation at each instance the slipring is rotated, so it is recommended to use the actual thickness when the **Rotate slip. during fitting** is turned on for optimal results.

**Detecting and Solving Problems**

* *Slipring does not end up in the correct position -* This might be due to the slipring part set containing a mixture of element types (solids, shells..) given that the tool heavily relies on the belt to structure penetrations which cause imbalance between areas formed of different types of elements. Another aspect that could affect the performance of this tool would be setting different belt element lengths for sections of the belt in contact with the slipring. To avoid this issue, make sure that all parts contained in the slipring part set have the same type, and all sections of the belt in contact with the slipring have the same element length set.
* *Slipring rotates in the wrong direction -* If the slipring appears to be rotating in the wrong direction during the fitting process, this could either be due to the 'Left Node' and 'Right Node' being reversed or the rotation axis being reversed. To fix this make sure that you are following the directions mentioned in [Explicit Slipring Panel](explicit-slipring-panel.md) when providing the slipring information.

**Updating initial path points after rotation**

If the **Rotate slip. during fitting** option is on, the location of the two initial belt path points around the shoulder slipring will be updated to maintain a constant relative position to the slot during the fitting process. This update is only made once "Accept" is pressed in the Fit menu. To deactivate this feature deselect the **Update adjusted points** checkbox at the bottom of the Explicit Slipring menu. The slipring will be returned to its original position if the Define Path menu is reopened, but it will not be returned when the reset button [|&lt;&lt;] is pressed in the Path Fitting controls.

- 
 **3. Create X-Sections around slipring:**

The explicit slipring panel can be used to create \*DATABASE\_CROSS\_SECTIONs on both sides of the explicit shoulder slipring using the **Create X-Section** tick box.

![](../Storage/primer-22-1/shoulder-slipring-panel/shoulder_panel_new_UI_xsect.png)

The following describes the steps required to apply this:

1. Use the **Adjust** tool to insert the belt into the slipring slot **or** use points that have previously been created using the **Adjust** tool
2. Tick the **C** **reate X-Section** tick box

Ticking the **C****reate X-Section** tick box will create two \*DATABASE\_CROSS\_SECTION cards during the meshing step. There will be one X-Section on each side of the shoulder slipring with a offset that is defined in the B-Post type slipring box in the [Adding Cross-Sections](adding-cross-sections.md) panel. By default, the title of the create database cards will include a prefix text with an identifier, B1 for the first card or B2 for the second card, the Belt ID and distance to slipring. The prefix text can be changed in the **Additional prefix text** in [Adding Cross-Sections](adding-cross-sections.md).

The image below shows the result of using the **C** **reate X-Section** in a meshed belt where the tool created two \*DATABASE\_CROSS\_SECTION cards with a distance of 200 on either side of the shoulder slipring:

![](../Storage/primer-22-1/shoulder-slipring-panel/Picture2.png)
[Previous](explicit-slipring-panel.md)  |  [Next](pelvis-slipring-panel.md)