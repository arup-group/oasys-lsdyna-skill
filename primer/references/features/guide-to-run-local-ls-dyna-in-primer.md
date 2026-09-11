###  Guide to Run 'Local' Ansys LS-DYNA in PRIMER

![](../Storage/primer-22-1/primer_links/sect_3/images/fig_3_18_15.png)

1. Read a Ansys LS-DYNA ready Model into PRIMER.
2. Press "Submit" on the "Model functions" panel.
3. Select "Machine Type" as "Local".
4. Select "Current Model File" - runs Ansys LS-DYNA in the same directory as model file.
5. Select Precision Type (SINGLE or DOUBLE) and Code Type (SMP or MPP or HYBRID).
6. Select Ansys LS-DYNA Executable as "Local Ansys LS-DYNA Executable".
7. Enter the MPI Type (needed for MPP or HYBRID run only) 
For example, MPI type values are: **IMPI or MSMPI or HPMPI** .
8. Select the Ansys LS-DYNA Executable Path.
    * Make sure that the Ansys LS-DYNA exe confirms the Precision/Code/MPI types selected above.
    * For example, for Ansys LS-DYNA version 10.1, the Windows MPP executable name to work with Intel MPI is going to be this filename: 
 **ls-dyna\_mpp\_s\_R101\_winx64\_ifort160\_impi.exe**

    ![](../Storage/primer-22-1/primer_links/sect_3/images/fig_3_18_16.png)
9. Select MPI Executable Path (needed for MPP or HYBRID run only)
    * Make sure that the MPI path confirms to the MPI type.
    * For example on Windows the path to MPI executable for Intel MPI (IMPI) could be something like this: 
 **C:\Program Files (x86)\Intel\MPI-RT\4.0.3.010\em64t\bin\mpiexec.exe**
10. Select Submission type as "ONLINE"
11. Enter the NCPU value.
12. Press "Submit" to run Ansys LS-DYNA.
13. Save Ansys LS-DYNA options as a "Submission Bookmark":
    * Enter appropriate name to the "Submission Bookmark".
    * Press "Add/Edit" to record the Bookmark into PRIMER session.
    * Select "New Settings" file from the drop down.
    * Press "Save Settings" to save the bookmark into the JSON file.

[Previous](ls-dyna-job-monitor.md)  |  [Next](configure-and-connect-a-remote-machine.md)