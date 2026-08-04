####  Selecting/Creating a Database for Model Build

In the menu, select  **MODEL**   **-&gt; BUILD.**  The default is use last database loaded which will on its first call revert to select existing database .

| ![](../Storage/primer-22-1/primer_links/sect_3/images/incl_3.png) | ![](../Storage/primer-22-1/primer_links/sect_3/images/build_opt_pop.gif) |
| --- | --- |

NOTE: this procedure is to be distinguished from MODEL &gt; READ &gt; DATABASE (see section [MODEL &gt; READ](model-read.md#32MODELREAD)) in which each selected model is read into a separate file.

In order to select an existing database, select the SELECT EXISTING DATABASE (the default) option and press APPLY .

Connection contacts? The main panel allows you to configure the build mode to simple, rigorous, etc and to activate the post build connection contact options either to make new contacts for unconnected welds/adhesives or to fix existing contacts by using the penalty copy contact method (or setting IPBACK flag if keyout version is R7.0 or higher).

Scan component files? The use of include files with component files is blocked for rigorous build. However, the simple build process does permit it. This requires a pre-read scan of component files to determine how many includes they contain which is time consuming. If the user knows that there are no includes in any of the selected component files, the process can be speeded up considerably by inhibiting the scan - the No Scan option.

Build log file. All information written to the dialogue box may be saved to a session file on exit of PRIMER. By default this is not done unless the pref setting *save\_dialogue\_dir* has been set - then you will find files *pr\_dialog\_nnn* in the designated directory. However, in the absence of this setting. if a model build has been performed, the information will be written to a *pr\_build\_info\_nnn* file in the directory of the database. If something goes wrong with the build process this file will aid the debugging of the problem as it contains many relevant print messages.

To create a new Database select the appropriate option and press APPLY . See [CREATE NEW DATABASE](creating-a-new-model-database.md#createnewdatab).

![](../Storage/primer-22-1/primer_links/sect_3/images/datab_3.gif)

Select an existing database by inputting the name and path in the input box or using the search facility or by selecting one of the databases listed in the Database Name list.

Press APPLY to load the database. Once this is read in the following section applies.

[Previous](model-build.md)  |  [Next](viewing-the-model-database.md)