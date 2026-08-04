###  Configure and Run Ansys LS-DYNA on "Remote Machine"

![](../Storage/primer-22-1/primer_links/sect_3/images/fig_3_18_18.png)

1. Select "Remote Machine" bookmark and enter "Submit Directory" to run an Ansys LS-DYNA job on that machine. 
 **This directory path must have appropriate read/write/execute permissions** .
2. Select Precision Type (SINGLE or DOUBLE) and Code Type (SMP or MPP or HYBRID).
3. Select Ansys LS-DYNA Executable as "Local Ansys LS-DYNA Executable".
4. Enter the MPI Type (needed for MPP or HYBRID run only). 
For example, MPI type values are: **IMPI or PMPI or HPMPI or OPENMPI** .
5. Enter the Ansys LS-DYNA Executable Path.
    * Make sure that the Ansys LS-DYNA exe confirms the Precision/Code/MPI types selected above.
    * For example, on Linux, Ansys LS-DYNA version 11, MPP executable name to work with Intel MPI on 64-bit CENTOS 6 is going to be this filename: 
 **ls-dyna\_mpp\_s\_r11\_0\_0\_x64\_centos65\_ifort160\_avx2\_intelmpi-413.exe**
6. Select MPI Executable Path (needed for MPP or HYBRID run only)
    * Make sure that the MPI path confirms to the MPI type.
    * On Linux the path to 64-bit MPI executable for Intel MPI (IMPI) could be: 
 **/intel64/bin/mpirun**

    ![](../Storage/primer-22-1/primer_links/sect_3/images/fig_3_18_19.png)
7. Select Submission type as "ONLINE"
8. Enter the NCPU value.
9. Enter the "Password" again to connect to the remote machine.
10. Press "Submit" to run Ansys LS-DYNA. The following happens:
    * PRIMER session connects to the remote machine.
    * Transfers zipped model to "Submit Directory" and unzips the file in the folder.
    * Run Ansys LS-DYNA on remote machine.
11. Save Ansys LS-DYNA options as a "Submission Bookmark":
    * Enter appropriate name to the "Submission Bookmark".
    * Press "Add/Edit" to record the Bookmark into PRIMER session.
    * Select "New Settings" file from the drop down.
    * Press "Save Settings" to save the bookmark into the JSON file.

[Previous](configure-and-connect-a-remote-machine.md)  |  [Next](visualisation-and-labelling.md)