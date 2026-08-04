###  Submission Options

![](../Storage/primer-22-1/primer_links/sect_3/images/fig_3_18_8.png)
"Submission Options" define the Ansys LS-DYNA settings required to run the model on the specified machine.

All the specified values in this section can be saved in a PRIMER JSON settings file under the bookmark label name given in the
**Submission bookmark**input textbox.

The user can
**Add/Edit/Remove**a submission bookmark by pressing relevant buttons.

The settings are saved into the PRIMER settings file by pressing the
**"Save Settings"**button on the main panel.

These settings can be loaded and edited/removed in subsequent PRIMER sessions.

1. **Precision Type** : SINGLE or DOUBLE.
2. **Code Type** : SMP (Shared memory parallel), MPP (Distributed memory parallel), HYBRID.
3. **MPI Type** : Type of platform to run MPP/HYBRID LS-DYNA. 
By default, PRIMER supports only these MPI types:
    * **Windows** : HPMPI, IMPI (Intel MPI), MSMPI (Microsoft MPI), MPICH2.
    * **Linux** : HPMPI, IMPI (Intel MPI), PMPI (Platform MPI), OPENMPI.

To submit Ansys LS-DYNA with other MPI types, the tool can be configured in the [**'oasys.submit'**](configuration-of-the-tool.md#oasys.submit)****file.
4. **LS-DYNA Executable/Path** : The Ansys LS-DYNA executable must match to the selected Precision/Code/MPI types. 
The Ansys LS-DYNA executable can be chosen from the list contained in the optional 'dyna\_versions' file:
    * If no 'valid' LS-DYNA executables are found, the user needs to select a **'Local LS-DYNA Executable'** .
    * **Add Version** button adds the selected Local Ansys LS-DYNA executable into the [**'dyna\_versions'**](configuration-of-the-tool.md#dyna_versions)****file for future use.
5. **MPI Executable Path** : The path to the MPI executable to run the Ansys LS-DYNA MPP program. 
The path to the different MPI executables can also be specified in the [**'oasys.submit'**](configuration-of-the-tool.md#oasys.submit)****file.
6. **Submission Type** : Ansys LS-DYNA jobs may be submitted using 4 different submission methods.
    * **ONLINE** : Submit jobs interactively.
    * **QUEUE** : Submit jobs to NQE batch queues using **'qsub'** or equivalent commands. 
The option is available 'only if' the [**'oasys\_queue'**](configuration-of-the-tool.md#oasys_queue)****file is available. 
The Queue Options are available in the **"More Submission Options"** panel.
    * **BACKGROUND (LINUX Only)** : Submit jobs in background.
    * **BATCH (LINUX Only)** : Submit jobs into a batch queue using the LINUX **'batch'** command.
7. **NCPU** : Specifies the maximum number of processors that you want to run Ansys LS-DYNA on. 

    * This option will be of significance only if your system supports parallel versions of Ansys LS-DYNA.
    * The value selected will override the number of processors specified on any **\*CONTROL\_PARALLEL** card in the input deck.

[Previous](machine-and-model-options.md)  |  [Next](more-submission-options.md)