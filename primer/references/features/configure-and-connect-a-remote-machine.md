###  Configure and Connect a "Remote Machine"

![](../Storage/primer-22-1/primer_links/sect_3/images/fig_3_18_17.png) 
 ![](../Storage/primer-22-1/primer_links/sect_3/images/fig_3_18_13.png)

1. Press "Submit" on the "Model functions" panel.
2. Select "Machine Type" as "Remote".
3. Create a Remote machine bookmark from "Add/Edit Remote Machines" panel. 
Press "Add" button on this panel to save the remote machine settings in PRIMER.
4. Select a "Remote Machine" bookmark created above.
5. Enter the appropriate "Password".
6. Press "Connect Remote Machine" button to perform the one-time connection configuration
    * If Oasys LS-DYNA Environment is installed on the remote machine, the relevant "Ansys LS-DYNA configuration files" will be retrieved from the remote machine.
    * While working with the remote machine, if you feel that the data transfer speed is slow, you can try increasing the **"Buffer Size (KB)"** to higher value. 
The default value here is 64 KB.
7. Save remote machine settings:
    * Select "New Settings" file from the drop down.
    * Press "Save Settings" to save the bookmark into the JSON file.

[Previous](guide-to-run-local-ls-dyna-in-primer.md)  |  [Next](configure-and-run-ls-dyna-on-remote-machine.md)