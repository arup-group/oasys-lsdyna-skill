###  Top Section Options

The options in the top section of the Implicit Setup Tool window (shown below) affect all analysis types.

![](../Storage/primer-22-1/primer_links/sect_6/implicit_setup/TopWindow.bmp)

Simplified / Advanced

These toggle buttons allow the user to switch between Simplified and Advanced modes - by default the tool will start in Simplified mode. When Simplified mode is selected the tool uses default settings where possible, reducing the number of prompts for input. This makes it easier to quickly setup an implicit analysis. When Advanced is selected the tool offers more options for customisation/setting up a more complex analysis - however the default settings will be initially selected, so the Advanced mode requires a similar amount of input as the Simplified mode for the same analysis. For example, see the images of the Simplified and Advanced versions of a Linear Static analysis below - initially, the only required input for both modes is the termination time.

Simplified

![](../Storage/primer-22-1/primer_links/sect_6/implicit_setup/Simplified_StaticNonLinear.bmp)

Advanced

![](../Storage/primer-22-1/primer_links/sect_6/implicit_setup/Advanced_StaticNonLinear.bmp)

Type of analysis

Choose from this drop-down menu to select which analysis type to setup. The options are as follows:

* **Static**
* **Transient** - Direct or Modal (selected in the analysis options section)
* **Buckling** - Standalone or intermittent
* **Eigenvalue** - Standalone or intermittent
* **Frequency Domain** - Frequency Response Function (FRF)

Ansys LS-DYNA version options

Set the version of Ansys LS-DYNA that PRIMER will output. Some values and options can vary between versions, so the output version should not be changed after using this tool/before writing out the model. Also choose from MPP and SMP processors (this should be matched by the processor type chosen when submitting the job in Ansys LS-DYNA). Where possible, it is advised to use MPP .

Solver options

If the default option is not desired, use the drop-down menu to select which linear solver method should be used when solving the inverse of the stiffness matrix (see **\*CONTROL\_IMPLICIT\_SOLVER**  *LSOLVR* in the Ansys LS-DYNA manual for details). Note that non-default options are only available when Advanced mode is selected.

Overwriting options

Select from the drop-down menu to choose how the tool will handle keywords that are affected by the settings in the tool but already exist in the current model. For example, if an Eigenvalue analysis is being setup but \*CONTROL\_IMPLICIT\_EIGENVALUE already exists in the model, these options will determine how this keyword is handled when the tool applies its changes. The options are as follows:

* **Overwrite** - Completely overwrite all clashing keywords (affected by the chosen options but already exist in the model) with the output from the Implicit Setup Tool.
* **Ignore** - Preserve the options already in the model for clashing keywords.
* **Case-by-Case** - A list of the clashing keywords will be presented prior to output, each with the choice of whether to completely overwrite or preserve their options.

Apply

Click Apply to proceed to the pre-output summary. This button will only become available when all required input has been provided and is not invalid (missing or invalid data is signified by a textbox having a red background). Note that when changing analysis options new input may become required.

If Overwriting options is set to Case-by-Case and the current model already contains some keywords that the Implicit Setup Tool will output, the clashing keywords will be presented in the Pre-Existing Keywords window (shown below). To overwrite an existing keyword with the options from the Implicit Setup Tool tick the corresponding checkbox. The green tick and red cross buttons can be used to select and deselect all keywords respectively. Clicking Cancel will return to the main window with all previous options still selected.

![](../Storage/primer-22-1/primer_links/sect_6/implicit_setup/WriteOut_PreExisting.bmp)

After clicking Continue in the Pre-Existing Keywords window, or if there are no clashing keywords to choose from, a summary of the keywords that will be added/changed or ignored (preserved) will be presented on the Output Overview window (shown below). Clicking Confirm will write the added/changed keywords to the current model. Clicking Back will return to the Pre-Existing Keywords window, and Cancel will return to the main window with all previous options still selected.

![](../Storage/primer-22-1/primer_links/sect_6/implicit_setup/WriteOut_Confirm.bmp)

[Previous](reasons-to-use-implicit-vs-explicit.md)  |  [Next](include-controlling-include-files.md)