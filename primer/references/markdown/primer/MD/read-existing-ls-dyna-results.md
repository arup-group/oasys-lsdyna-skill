####  Read Existing Ansys LS-DYNA Results

![Existing LS-DYNA Results](../Storage/primer-22-1/primer_links/sect_3/images/existing_dyna_results.png)

You can load **Existing** Ansys LS-DYNA results using the
**Ansys** **LS-DYNA Results** drop down menu.

1. By default the
**Ansys**  **LS-DYNA directory** field is populated with the directory containing the model that is currently read into PRIMER.
    * If more than one model is loaded, use the file selector to browse to the directory in which the Ansys LS-DYNA output files are located, alternatively type the path in the Ansys LS-DYNA directory box.
2. Different filename formats can be found via the **Additional search** , which can include wildcards ('?' represents one character, '\*' represents any number of characters). This additional search can be set via the text box and turned on or off via the adjacent tick box on the panel; or with the preferences 'additional\_dyna\_output' and 'additional\_dyna\_output\_search', respectively.
3. Ansys LS-DYNA output files that have been compressed as .zip or .gz files can also be found and read. Compressed files are only found when the Compressed search tick box is on (also set via the preference 'compressed\_dyna\_output\_search'), which searches for filenames of the format \*.zip and \*.gz.
4. You can choose the types of files to read and check from the options in the **Output Categories** section.
5. After the Ansys LS-DYNA directory is populated, these Ansys LS-DYNA output files will be listed and automatically selected for viewing in the tree view:
    * **Log files** : filenames of the format \*.otf, d3hsp or mes\*\*\*\*
    * **Contact and Load profile files** : filenames with extensions \*.csv, \*.xy
    * **Decomposition files** : filenames with extensions \*.ses
6. Once the **Apply** button has been pressed PRIMER will open the
**Ansys**  **LS-DYNA output tree viewer** in error mode and this will display all the errors/warnings from the output file associated with that model.
    * Reading Ansys LS-DYNA output error files is most useful when the corresponding model is loaded so the entities associated with the errors/warnings/termination messages can be located and manipulated. The corresponding model should be entered in the optional Apply to model text box either directly or using the model selector button.
    * If Apply to model is left blank only output file text will be displayed in the tree view.

[Previous](initialise-in-ls-dyna.md)  |  [Next](ls-dyna-results-panels.md)