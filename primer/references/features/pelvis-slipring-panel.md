####  Pelvis Slipring Panel

The Pelvis slipring panel is the second tab of the Explicit slipring panel. This panel allows you to enter information about the explicit pelvis slipring which is needed to automatically adjust the initial path of the belt within the slot of the pelvis slipring and to pull an explicitly meshed slipring into its correct position during the fitting process. The panel and an explanation of the required inputs are shown below:

![](../Storage/primer-22-1/pelvis_panel.png)

The inputs in the panel are split into two parts, the Forward/Backwards rotation and the Sideways rotation. These are the two rotation directions as described in section 2 of this page. All panel inputs are described below in more detail:

**Forward/Backwards rotation inputs:**

**Rotating Part set**must include all parts forming the pelvis slipring and buckle that are expected to move in the Forward/Backwards direction during the fitting process. It is recommended to select all parts that make up the pelvis buckle and stalk. For example, for the image below, the whole pelvis buckle needs to rotate around the pivot centre, therefore the whole buckle must be included in the part set.

![](../Storage/primer-22-1/pelvis-slipring-panel/pelvis_sideways_parts.png)

**Pivot centre**defines the centre of rotation of the pelvis slipring.

**Left node** and **Right node**must be chosen from the two side corners of the slot where the belt would touch the edge of the slot. Note that these must be defined considering we're facing the dummy and the belt section going over the chest part of the dummy (the sketch in the panel can be used as a reference).

The **Rotation axis**can be defined either as an explicit vector or by selecting two nodes. In both cases, the rotation axis must point away from the pelvis buckle (the sketch in the panel can be used as a reference).

**Sideways rotation inputs:**

**Top node**is the node at the top of the pelvis buckle, right above the centre of the slot.

**Rotating Part set**must include all parts forming the pelvis slipring and buckle that are expected to move sideways during the fitting process. It is recommended to select a subset of the stalk and everything above it. For the example buckle below, the part set selected includes a subset of the stalk because only a subset of the stalk is required to rotate in a sideways direction towards the dummy/seat structure.

![](../Storage/primer-22-1/pelvis-slipring-panel/pelvis_forwards_parts.png)

**Stalk left node** and **Stalk r** **ight node**must be nodes at the outside of the buckle stalk, defining a straight line across the stalk. The Rotating Part set will be rotated around the line defined by the two nodes.

**General inputs:**

**Belt direction** refers to the sequence of the belt’s points in relation to the sliprings. When setting up a belt path, there are two options for the belt direction: the belt can either pass through the shoulder slipring first, then across the chest, through the pelvis slipring, and finally over the lap section, or it can go in the opposite direction. The ‘Shoulder to Pelvis’ choice means that the belt will move through the shoulder slipring before heading to the pelvis slipring. Conversely, the ‘Pelvis to Shoulder’ option indicates the reverse path, going through the pelvis section before going through the shoulder section.

**1. Automatically adjust the initial path within the slot of the pelvis slipring:**

This option allows effortless adjustment of the initial belt path within the slot of the slipring.

![](../Storage/primer-22-1/pelvis-slipring-panel/pelvis_adjust.png)

The following describes the steps required to apply this:

1. Define a single belt path point near the slipring top during initial path definition
2. Define **Rotating Part set, Left node, Right node and Top node**as explained above
3. Click on the **Adjust** button
4. **Undo** restores the original path point

This feature will set the [Point Projection](point-projection.md) at the two newly created points to zero and creates a 90-degree belt bend on the outside and inside points to improve the fitting of the belt around the slipring. You may need to make slight modifications to the automatically generated points to avoid initial penetrations of the belt path with the slipring. Usually this will only require moving the two points by a small distance using either the 'Advanced' drag handles or the light blue symbols, see [here](drag-handles-twist-handles-intermediate-points.md) for more details on move the belt using drag handles.

The two initial belt path points around the pelvis buckle can automatically modify their location to maintain a constant relative position to the pelvis buckle if the pelvis buckle was rotated during the fitting process as outlined below. The initial belt path points that were auto-generated using the **Adjust**feature will revise their location after the belt path was accepted in the main panel if the **Update adjusted points** checkbox is enabled. This is to ensure that the initial path points will still be located within the slipring slots after the sliprings have been rotated. Without this feature enabled, the initial belt path points around the sliprings will stay in the same position and will not update to reflect rotated sliprings.

**2. Automatically moving the pelvis buckle into its correct position during the fitting process:**

The Pelvis buckle has the ability to rotate in two directions: Forward/Backward and Sideways. During the fitting process, users can choose to move the pelvis buckle in both directions or only in a specific direction using the **Forward/Backwards rotation** and **Sideways rotation** checkboxes located at the top of the panel. If both rotational directions are enabled, the fitting tool will shift the pelvis buckle in one direction for 100 fitting iterations before switching to the other rotation direction. The frequency of this switching behaviour can be adjusted using the primer\*belt\_buckle\_rot\_iter\_per\_mode preference.

The Forward/Backward rotation revolves the entire pelvis buckle (**Rotating Part set**) around a central pivot (**Pivot centre**). The goal of this rotation is to align the belt within the slipring slot during the fitting process. If the sliprings are not properly positioned, fitting the belt through a meshed slipring can cause the belt to drift sideways and curl up against the side of the slot. Moving the pelvis buckle in the Forward/Backward direction can prevent this and keep the belt centered within the slot. The image on the left illustrates the intended rotational direction of the Forward/Backward rotation.

The Sideways rotation revolves a subset of the pelvis buckle (**Rotating Part set**) towards the seat/dummy along a line defined by two nodes (**Stalk left node** and **Stalk right node**), until any part of the buckle comes into contact with the structure. The rotation always moves towards the seat/dummy until contact is made. If contact is made, the tool will rotate the buckle back to the previous non-contact position. If the Forward/Backward rotation is also active, then after contact is made, the tool will switch to the Forward/Backward rotation and revert to the Sideways rotation once the number of fitting iterations for this rotation direction is reached. The image on the right depicts the intended rotational direction of the Sideways rotation.

![](../Storage/primer-22-1/pelvis-slipring-panel/forward_rotation.png) ![](../Storage/primer-22-1/pelvis-slipring-panel/sideways_rotation.png)

Forward\Backward rotation direction Sideways rotation rotation direction

The following describes the steps required to apply this:

1. Fill in the fields in the **Explicit slipring**panel. If you only require one of the two rotation directions than it requires only the data from this rotation direction.
2. Turn on **Forward/Backwards rotation** and/or **Sideways rotation**
3. Start the fitting process as normal

The **Update freq.** is the number of belt fitting iterations between slipring rotations. A lower update frequency value is more robust, since the slipring is rotated more frequently but it will take longer to fit the belt. By default, this value is set to 3 as this provides a robust slipring rotation. However, if the slipring only needs slight rotation for its' correct position, then the number can be increased.

Solid elements are recommended to easily model the correct slot width when considering contact to belt. However, for shell elements, the [Shell Thickness for Contact](shell-thickness-for-contact.md) is another fitting parameter that might affect the result of this solution. The reasoning is that the pulling of the slipring is highly sensitive to the belt-slipring contact at the two sides which determines the direction of rotation at each instance the slipring is rotated, so when using shells it is recommended to use the actual thickness when rotating the pelvis buckle is turned on for optimal results.

**Detecting and Solving Problems**

* **Slipring not in the correct position**: This could be due to the slipring part set containing a mix of element types (solids, shells, etc.). The tool relies heavily on the belt-to-structure penetrations, which can cause an imbalance between areas formed of different types of elements. Another factor could be setting different belt element lengths for sections of the belt in contact with the slipring. To avoid this issue, ensure that all parts in the slipring part set are of the same type, and all sections of the belt in contact with the slipring have the same element length set.
* **Slipring not rotating in the Forward/Backward direction**: Ensure that the ‘Left Node’ and ‘Right Node’ selected are in the corner of the slipring slot where the belt will first touch the side of the slot.
* **Slipring rotating in the wrong direction in the Forward/Backward rotation**: If the slipring seems to be rotating in the wrong direction during the fitting process, this could be due to the ‘Left Node’ and ‘Right Node’ being reversed or the rotation axis being reversed.
* **Slipring rotating in the wrong direction in the Sideways rotation**: If the slipring seems to be rotating in the wrong direction (i.e., away from the structure) during the fitting process, this could be due to the ‘Stalk Left Node’ and ‘Stalk Right Node’ being reversed.

**Updating initial path points after rotation**

If the rotation option is on, the location of the two initial belt path points around the shoulder slipring will be updated to maintain a constant relative position to the slot during the fitting process. This update is only made once "Accept" is pressed in the Fit menu. To deactivate this feature deselect the **Update adjusted points** checkbox at the bottom of the Explicit Slipring menu. The slipring will be returned to its original position if the Define Path menu is reopened, but it will not be returned when the reset button [|&lt;&lt;] is pressed in the Path Fitting controls.

**3. Create X-Sections around slipring:**

The explicit slipring panel allows for the creation of \*DATABASE\_CROSS\_SECTIONs on both sides of the explicit pelvis slipring using the**Create X-Section** checkbox.
The following describes the steps required to apply this:
1. Use the **Adjust** tool to insert the belt into the slipring slot **or** use points that have previously been created using the **Adjust** tool
2. Check the **C** **reate X-Section** box.

Ticking the **C** **reate X-Section** box will create two \*DATABASE\_CROSS\_SECTION cards during the meshing step. There will be one X-Section on each side of the pelvis slipring with a offset that is defined in the Free & meshed sliprings type box in the [Adding Cross-Sections](adding-cross-sections.md) panel. By default, the title of the create database cards will include a prefix text with an identifier (B4 for the first card or B5 for the second card), the Belt ID and distance to slipring. The prefix text can be modified in the **Additional prefix text** in [Adding Cross-Sections](adding-cross-sections.md).

The image below illustrates the result of using the **C** **reate X-Section**in a meshed belt where the tool creates two \*DATABASE\_CROSS\_SECTION cards with a distance of 150 on either side of the pelvis slipring:

![](../Storage/primer-22-1/pelvis-slipring-panel/belt_xsect_marked.png)
[Previous](shoulder-slipring-panel.md)  |  [Next](mesh-meshing-the-fitted-chassis-mesh-with-structural-finite-elements.md)