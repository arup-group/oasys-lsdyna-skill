###  Ansys LS-DYNA Job Monitor

![](../Storage/primer-22-1/primer_links/sect_3/images/fig_3_18_11.png)

![](../Storage/primer-22-1/primer_links/sect_3/images/fig_3_18_12.png)

* PRIMER monitors the progress of the ONLINE Ansys LS-DYNA runs on a Local machine.
* The progress of such jobs can be viewed in the 'Ansys LS-DYNA Jobs Monitor' panel.
* The user can also save the details of such an Ansys LS-DYNA run inside the HOME area settings file by pressing the **"Save Settings"** button.
* Later sessions of PRIMER will automatically pick up these jobs from the settings file and the user can monitor these jobs by pressing the **"Ansys LS-DYNA Jobs Monitor"** button.

####  Job Monitor Actions

![](../Storage/primer-22-1/primer_links/sect_3/images/fig_3_18_14.png)
The user can perform these actions on the running/completed jobs listed in the monitor.
1. **Load Model** : Load the model file in PRIMER on which the Ansys LS-DYNA was run.
2. **Add Sensor Switch** : Assign KILL switches on the currently running job. 
Please refer to the Ansys LS-DYNA manual for the description of the kill switches listed in the "KILL OPTIONS" panel.
3. **Check Ansys LS-DYNA Results** : Ansys LS-DYNA results for the **'Terminated'** jobs can be loaded in the [**"Ansys LS-DYNA Output Reader"**](reading-ls-dyna-output-error-files.md#readdyna)****tool in PRIMER.
4. **Open d3hsp/Log Files** : Open the files in a text editor.
5. **Pause/Resume Monitoring** : Pause or Resume the job monitoring in PRIMER.

[Previous](optional-files.md)  |  [Next](guide-to-run-local-ls-dyna-in-primer.md)