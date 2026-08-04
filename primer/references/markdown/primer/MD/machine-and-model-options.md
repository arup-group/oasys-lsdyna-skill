###  Machine and Model Options

####  Local Ansys LS-DYNA run

![](../Storage/primer-22-1/primer_links/sect_3/images/fig_3_18_5.png)
To carry out local submission, select "Local" from the "Machine Type" menu.

The Model to run for Ansys LS-DYNA can be selected using the "..." button that maps the
**"SUBMIT MODEL"**menu.

![](../Storage/primer-22-1/primer_links/sect_3/images/fig_3_18_20.png)
The model file that will be submitted to Ansys LS-DYNA can be chosen from the menu next to the model selector button.

* **"Write Model File"** : Re-writes the model files (master and includes) to the "Submit Directory" and runs Ansys LS-DYNA on this file. 
The model output options can be changed by pressing the **"&gt;&gt;&gt; LS-DYNA output options"** button.

* **"Current Model File"** : runs Ansys LS-DYNA on the original model file that is currently loaded as a PRIMER model. 
If the current model file is a binary or the compressed file (optional PRIMER format), then PRIMER will always re-write the file. 
If the selection is "Current Model File", this is fixed as the path of current master file.

The
**"Submit Directory"**is the path where the Ansys LS-DYNA output is generated.

PRIMER saves the older submission paths to be picked from the
**"Recent files"**menu.

![](../Storage/primer-22-1/primer_links/sect_3/images/fig_3_18_21.png)

####  Remote Ansys LS-DYNA run

![](../Storage/primer-22-1/primer_links/sect_3/images/fig_3_18_6.png)

To carry out local submission, select "Remote" from the "Machine Type" menu.

The "Remote Machine" connection settings are retrieved from the PRIMER settings file, if one exists.

* These settings are created via the panel launched by pressing the button **"Add/Edit Remote Machines"** .
* The settings can be saved into PRIMER settings file by pressing the **"Save Settings"** . button.

The remote machine connection can only be completed by entering the
**"Password"**.

**Please Note:**

PRIMER never saves this password, and the user must manually enter the Password every time a remote connection is needed.

**For an individual PRIMER session, a first-time connection check to the "Remote" machine is required via "Connect Remote Machine"**.

The Model to run for Ansys LS-DYNA can be selected using the "..." button that maps the
**"SUBMIT MODEL"**menu.

![](../Storage/primer-22-1/primer_links/sect_3/images/fig_3_18_22.png)
The
**"Submit Directory"**is the path where the Ansys LS-DYNA outputs are generated on the "Remote" machine.
* For each "Remote" Ansys LS-DYNA submission, the submission paths are saved in the JSON settings files under the "Remote Machine Boomkarks" using **"Save Settings"** .

![](../Storage/primer-22-1/primer_links/sect_3/images/fig_3_18_23.png)
PRIMER always re-writes the model file for the "Remote" Ansys LS-DYNA submission.

* To save time and increase the performance of the submission process, the model file is written in the "compressed" format locally and then the compressed file is transferred to the remote machine path specified in "Submit Directory".

* The model output options can be changed by pressing the **"&gt;&gt;&gt; LS-DYNA output options"** button.

#####  Remote Machine Connection Options

![](../Storage/primer-22-1/primer_links/sect_3/images/fig_3_18_7.png)
This panel is launched by pressing the
**"Add/Edit Remote Machines"**button on the main panel and is used to Add/Edit/Remove connection settings for a remote machine.

All the entries related to a certain remote connection can be saved in a PRIMER JSON settings file under the bookmark label name given in the
**"Connection Name"**input textbox.

The settings are saved into the PRIMER settings file by pressing the
**"Save Settings"**button on the main panel.

These settings can be loaded and edited/removed in subsequent PRIMER sessions.
1. **Remote Connection** : List of the Remote connections retrieved from the PRIMER settings file.
2. **Connection Name** : Connection identifier in the main panel menu.
3. **Machine Name** : The user can also provide the IP address to the machine.
4. **User Name** : Username to connect to the "Remote" machine.
5. **Oasys Directory** : The path to the Oasys installation on the remote machine. This is optional and can be left empty.
6. **Buffer Size** : While connecting and transferring files to/from a remote machine a small 'buffer' is required to transfer the data. 
If the connection speed for data transfer is slow, the size of this buffer can be increased using this option for faster speed. 
 **Default value of this option is 64 KB** .
7. **Environment Variables** : The environment variables defined here will override the remote machine environment values. 
This list can be left empty since while connecting to the remote machine, PRIMER can automatically inquire important Ansys LS-DYNA or Oasys (if present on remote machine) related environment variables from the remote machine.

[Previous](configuration-of-the-tool.md)  |  [Next](submission-options.md)