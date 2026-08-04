####  Post Model Build Panels

The following panels appear if the **RIGOROUS** or **COMPONENT** build has been selected.
 
#####  Summary Box
 
##### ![](../Storage/primer-22-1/primer_links/sect_3/images/datab_13.gif)
 
Listed down the left hand side of the box are the names of all the keyword files that you asked to be read in. In order to show only those keyword files that have been renumbered (orange) or that show an error (red), click on the CONDENSE tab.

Up to 7 pieces of information are available on each file under the headings:

* [Owner?](post-model-build-panels.md#owner)
* [Installed?](post-model-build-panels.md#installed)
* [Standard?](post-model-build-panels.md#standard)
* [x-refs?](post-model-build-panels.md#xrefs)
* [Renum'd?](post-model-build-panels.md#renumd)
* [Extra data?](post-model-build-panels.md#connect)

A green box illustrates that no problems were encountered under the corresponding heading in the building procedure. An Orange box illustrates a Warning - items in the file were renumbered or a connection file was shifted into the master file (see below). A Red box illustrates a fatal problem indicating that the file was skipped or contains missing cross-references.

In order to list any missing parts that have been read into the model, press the LIST\_MISSING button..

In order to display the model Database in its tree format, press the SHOW\_TREE button.

To access the [Check box](post-model-build-panels.md#checkbox) if it isn't already present, press the APPLY\_CHECKS button

If the check box is displayed, you may temporarily hide the summary box by pressing the HIDE\_PANEL button. It will be restored by RETURN\_TO\_SUMMARY .

#####  Owner

This category states who the owner of the corresponding keyword file is.

#####  Installed

This category declares whether the keyword file was installed successfully ( **OK** ) or failed to install ( **FAILED** ).

#####  Standard

This category reveals whether the installed keyword file was a standard file ( **YES** ) contained in the loaded database or a non-standard file ( **N/S** ), resulting from an edit to the the database.

#####  X-refs

The **BAD XREF** error indicates that the include file contains references to items which do not exist in the model. It should only arise if the Deletion and Cleanup functions have been aborted during the model build.

#####  Renum'd

This category specifies whether or not any renumbering of the contents of the keyword file occurred in the building process.

#####  Extra data

This category specifies whether the extra data files linked to the file were read in successfully ( **OK** ) or reports a warning, such as **FAILED** or **BAD XREF** .

If, during the build process, latent items of an extra data file have been deleted (see [APPLY FIX](applying-the-build.md#applyfix)), the file contents will have been shifted to the master file and the include file itself suppressed. Such files will bear the warning " **^MOVED^** ".
 
#####  Check Box 
 ![](../Storage/primer-22-1/primer_links/sect_3/images/datab_14.gif)

This window contains the result of a number of predefined checks specified as [CHECK &gt; OPTIONS](options-setting-model-check-options.md#options).

In order to detail the results of any check that generated errors, press on the DETAILS button.

To close this window and return to the summary box, click on the RETURN\_TO\_SUMMARY tab. In order to rerun the checks, for example, after modifying the CHECK -&gt; OPTIONS settings, click on the RECHECK tab.

**NOTE:** The same check panel can be activated for any existing PRIMER model by the route CHECK -&gt; APPLY -&gt; APPLY\_RULES .

[Previous](applying-the-build.md)  |  [Next](modifying-the-built-model.md)