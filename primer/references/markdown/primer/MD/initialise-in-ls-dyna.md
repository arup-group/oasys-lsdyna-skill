####  Initialise in Ansys LS-DYNA

![Initial Read Dyna view](../Storage/primer-22-1/primer_links/sect_3/images/read_dyna_initial.png)

You can choose to **Initialise** the PRIMER model in the session via the " **Initialise in Ansys LS-DYNA** " option under " **Ansys** **LS-DYNA Results** ". 
The model initialisation in Ansys LS-DYNA happens via the [**"Ansys LS-DYNA submission" tool**](ls-dyna-submission-tool.md#need_for_submit)****tool in PRIMER by pressing the **Submit** button. 
The "Ansys LS-DYNA Directory" is taken from the "Submit Directory" path from the "Ansys LS-DYNA Submission" panel. 
After the model is submitted to Ansys LS-DYNA, PRIMER monitors the Ansys LS-DYNA job progress:

* After the Ansys LS-DYNA run is terminated, PRIMER automatically updates this panel with a list of the Ansys LS-DYNA output files.

You can choose the types of files to read and check from the options in the "Output Categories" section. 
After the Ansys LS-DYNA directory is populated these Ansys LS-DYNA output files with a will be listed and automatically selected for viewing in the tree view. 

* Log files: filenames of the format \*.otf, d3hsp or mes\*\*\*\*
* Contact, Load profile files: filenames with extensions \*.csv, \*.xy
* Decomposition files: filenames with extensions \*.ses

Once the **Apply** button has been pressed PRIMER will open the "Ansys LS-DYNA output tree viewer" and this will display all the errors/warnings and profiles/decomposition information - prepared from the Ansys LS-DYNA output files associated with the input model. 
 
The Ansys LS-DYNA submission can be modified using the **Initialisation Options** on this panel. 
Initialising the model with the **Decomposition** option will do the following upon the Ansys LS-DYNA submission:
1. "Temporarily" add these keywords to the PRIMER Model
    * CONTROL\_MPP\_DECOMPOSITION\_FILE
    * CONTROL\_MPP\_DECOMPOSITION\_NUMPROC
    * CONTROL\_MPP\_DECOMPOSITION\_OUTDECOMP
2. Re-write the model file in the "Submit Directory" specified on the Ansys LS-DYNA Submission panel.
3. Submit the re-written model file for Ansys LS-DYNA initialisation.

The "number of processors" for decomposition can be specified using the **NUMPROC** input. 
You can choose to initialise in Ansys LS-DYNA using the **MCHECK** or **NCYCLE** option.
* Initialising with MCHECK does not consume an Ansys LS-DYNA server license, but a special license option of **LS-DYNAMC** is required in the Ansys LS-DYNA server license file
* You can perform initialisation using **NCYCLE=1** , which is similar to performing "MCHECK" initialisation. 
This does consume a license and is perhaps appropriate for local submissions using node-locked licenses

#####  Ansys LS-DYNA Submission Tool

![LS-DYNA Submission Tool](../Storage/primer-22-1/primer_links/sect_3/images/dyna_submission_tool.png)

The Ansys LS-DYNA initialisation can only be done using the [**"Ansys LS-DYNA submission" tool**](ls-dyna-submission-tool.md#need_for_submit)****on the same (LOCAL) machine from where PRIMER is launched.

1. Ansys LS-DYNA initialisation requires an Ansys LS-DYNA license on the local machine.
2. The Ansys LS-DYNA model submission can be modified via the options in the "Ansys LS-DYNA Submission" panel.
3. Advanced Ansys LS-DYNA options can be changed via the sub-panel launched by pressing **More Options** button.
4. Input/Output file options for Ansys LS-DYNA submission can be changed via the sub-panel launched by pressing **Optional Files** buttons.
    * **Please Note:** The NCYCLE and MCHECK options on this panel are overridden by the related "Initialisation options" in the "Read DYNA" tool.

#####  Ansys LS-DYNA Monitor 

* After the PRIMER model is submitted to Ansys LS-DYNA, PRIMER monitors the Ansys LS-DYNA run progress and updates the
Ansys **LS-DYNA Job Monitor** panel.
* After the Ansys LS-DYNA run has terminated, PRIMER automatically updates the "Read DYNA" panel with the output files.
* The "Read DYNA" panel with output files, can also be mapped from the job monitor panel after the Ansys LS-DYNA job is terminated using the **Choose Action-&gt;Check Ansys LS-DYNA** Results menu button.

![LS-DYNA monitor](../Storage/primer-22-1/primer_links/sect_3/images/dyna_submission_monitor.png)

[Previous](reading-ls-dyna-output-error-files.md)  |  [Next](read-existing-ls-dyna-results.md)