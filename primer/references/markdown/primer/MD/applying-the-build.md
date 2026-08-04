####  Applying the Build

Once you have selected all the files you wish to read in, press the APPLY button. You will now select one of 4 build modes. MASTER ONLY will create a master file for the selected include files. SIMPLE BUILD is suitable when there is no renumbering scheme and no label clashes amongst the include files. If either of these two conditions is not applicable a RIGOROUS BUILD is required. This is considerably slower as each include file has to be read into a scratch model, checked against the existing model, perhaps re-labelled and then read into the existing model. COMPONENT BUILD will ignore all connection files during the build, which allows user to check that all component files are self contained (no references to items which don't exist) and numbered correctly within their ranges.

You can skip this panel by pre-setting the build mode to SIMPLE BUILD or RIGOROUS BUILD by setting the radio button option.

![](../Storage/primer-22-1/primer_links/sect_3/images/datab_7a.gif)

PRIMER will now take you through a number of stages to help ensure the model is built correctly.

The next choice PRIMER will ask you to make concerns warning over model renumbering. Model renumbering may occur because either certain model labels lie outside the ranges specified in the database or because item labels in the include file are already taken up in the model.

The first pass involves setting item labels to meet the renumbering ranges. If the " **general type id** " range is set, part/section/material (see note below) labels must already be within this range. Other items will get renumbered into it. An **optional second range** may also be set for the more populous items (nodes, elements, nodal rigid bodies and node sets). Thus a node in the first or the second range will not have its label changed, but a node lying outside both will be renumbered into the second range. This node may subsequently be re-labelled for clash fixing. There is also a **FROZEN** range, intended for DATABASE\_HISTORY items, the labels of which will never be changed.

Note: renumbering is NOT applied to latent items, so Materials that are referenced by a part but exist elsewhere (typically in a material database file) will not be affected.

The second pass involves checking the (perhaps re-labelled) items of the include file against those of the model and, if possible, re-labelling to avoid clashes. If this proves impossible, e.g. because a label range is exhausted or frozen items lie out of range, the read operation will trip an error.

If you wish to be warned of any renumbering before it occurs, press the [WARN BEFORE RENUMBERING](applying-the-build.md#warnbeforerenum) button. If you wish PRIMER to renumber without notifying, press the [DO NOT WARN](applying-the-build.md#warnbeforerenum) tab. Then dialogue box will only be invoked in the event of a failure to renumber.

![](../Storage/primer-22-1/primer_links/sect_3/images/datab_7.gif)

#####  Renumbering into Range

If you select the option [WARN BEFORE RENUMBERING](applying-the-build.md#warnbeforerenum), a window will pop up in PRIMER before any renumbering takes place providing a description of the renumbering necessary and a list of options.

If renumbering is achievable the options are APPLY RENUMBERING , SKIP\_MODEL or ABORT . Otherwise, they are: CONTINUE , SKIP\_MODEL or ABORT .

![](../Storage/primer-22-1/primer_links/sect_3/images/datab_10.gif)

If you select CONTINUE the operation will proceed as usual. If you select SKIP\_MODEL , the file that required renumbering will be skipped and PRIMER will continue to read all further files. If you select ABORT , PRIMER will stop the operation entirely.

#####  Renumbering to fix clashes

Similarly, If renumbering is required because of a clash of labels, PRIMER will detail the fixing procedure automatically. Three options will be available: FIX\_CLASH , SKIP\_MODEL or ABORT .

If you select  ****  FIX\_CLASH PRIMER will fix the numbering problem as detailed in the pop-up window. If you select SKIP\_MODEL , the file that required renumbering will be skipped and PRIMER will continue to read all further files. If you select ABORT , PRIMER will stop the operation entirely.

![](../Storage/primer-22-1/primer_links/sect_3/images/datab_9.gif)

Once the model build has been completed, PRIMER will search the model for references to missing items. These will arise typically, where a connection file spans several components, but a choice was made to build the model with a subset of those components. For example, a connection file containing a contact which includes a vehicle dummy, an airbag and a steering wheel, but with only the dummy and the steering wheel read in as components. The airbag parts are now latent items in the connection file and must be removed before the job can run in Ansys LS-Dyna.

A window will pop up mentioning the number of missing items and offering option to FIX LATENT.

If you select CONTINUE, the missing items will remain in the model and it will require fixing before it can be run in Ansys LS-Dyna

If you select [FIX LATENT](applying-the-build.md#applyfix) PRIMER will run an auto-fix procedure to delete the offending items.

![](../Storage/primer-22-1/primer_links/sect_3/images/datab_11.gif)

As the option 'move\_include\_to\_master' is set to ASK, you will get a 2nd information panel.

![](../Storage/primer-22-1/primer_links/sect_3/images/datab_12.gif)

**** The deletion of latent items has modified the extra data file. If the option move modified include to master is taken, all the items of the file are moved up into the master file, and in the master file the keyout of the include file is itself suppressed. Thus the keyout of nthe master file alone is sufficient to represent the load case.

#####  Fix for Missing Items

For more information on model cleanup look at section [Cleanup unused](clean-up-unused.md#642CleanupUnused).

If you apply the fix PRIMER will also remove any unused items in the model (with the exception of parts and part sets which we deliberately keep) as this is implicit in the cleanup unused procedure.

The removal of missing items may incur further deletion operations such as the removal of contacts with empty sets. For this reason the cleanup unused procedure is necessary to ensure that the model will run in Ansys LS-Dyna.

PRIMER will now summarize the build procedure in the [Summary box](post-model-build-panels.md#summarybox) and present the result of checks made on the model in the [Check box](post-model-build-panels.md#checkbox). Once you have studied these boxes and wish to continue, click on the FINISH tab to complete the build procedure. The model Database will reappear. The information contained within the Summary and Check boxes will be written to a file called **build\_status.txt.**

[Previous](selecting-include-files-to-read.md)  |  [Next](post-model-build-panels.md)