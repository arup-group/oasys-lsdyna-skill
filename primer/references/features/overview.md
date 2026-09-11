The Battery Setup tool can be accessed through the **Batteries** button from the PRIMER Tools panel.

This brings up the main menu in the right hand side toolbar shown below.

![](../Storage/primer-22-1/overview/battery_menu.png)

**CREATE** Manages the creation of a new battery definition.

**MODIFY** Modifies the attributes of an existing definition.

**DELETE** Deletes existing definitions.

**SKETCH** Sketches the components of the selected battery definition(s).

**COPY** Generates a copy of an existing definition.

### Creating a new battery definition
![](../Storage/primer-22-1/overview/create_battery.png)
You must first select the model in which the new definition will reside.

Then you must give a label and title for this new definition, and press **Apply**.

Labels are arbitrary, but must be unique within a model.

A floating window will then guide you through the process of creating the battery cell model. The buttons at the top of the window are highlighted to indicate the step in the process you are currently at.

![](../Storage/primer-22-1/overview/new_batt_create_window.png)

In order to create the battery cell model you need to go through the following process:

**1. Select the desired modeling scale:**

All four Ansys LS-DYNA Randles battery modelling scales are supported by the tool, differing in the level of modeling detail and Ansys LS-DYNA run time.

**2. Define the layers structure properties and dimensions:**

Based on the selected scale and the data provided, PRIMER will automatically create and mesh the parts defining the layers structure.

**3. Define the tabs structure properties and dimensions:**

Based on the selected scale and the data provided, PRIMER will automatically create and mesh the parts defining the tabs structure, with the option to connect these to the layers parts structurally using Nodal Rigid Bodies and/or electrically using isopotentials.

**4. Define the Randles parameters:**

PRIMER will automatically create relevant \*EM\_RANDLES instances that define the distributed Randles circuit parameters for a Randles cell using the provided data and associate these to the layers created at step 2.

**5. Create / Activate relevant analysis keywords:**

The tool provides a list of analysis keywords typically used for battery cell analysis, and offers the option to create or activate what is needed directly from the tool.

### Modifying an existing battery definition

**Modify** functions in the same way as **Create**, except that an initial definition will be present. Any modifications made to the battery definition will not be made permanent until the **Update Battery** button in the last step is clicked. At this point the local copy which has been updated is used to overwrite the version in the model.

![](../Storage/primer-22-1/overview/overview-2024-10-08-1.png)

You can also exit the floating window at any point when creating a new definition or modifying an existing definition, and you will be prompted whether you want to save your latest changes or revert to the previous version of the battery definition. Note that the latter for creation means the new definition will not be created.

[Previous](battery-setup.md)  |  [Next](selecting-battery-scale.md)