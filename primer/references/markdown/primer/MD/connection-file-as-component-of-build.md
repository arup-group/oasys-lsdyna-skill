###  Connection File as Component of Build

Edit of component that is an xml connection file will bring up the panel below.

The data supplied in the xml file is expected to contain a complete description of what is required to generate the connection FE. Defaults are not applicable..

Target component file . On completion of build the connection FE will be created in the include file which matches the category/sub-category set by the user "component file for connection" or, failing that, in the master file. Note that if build has been performed off the [Template &gt; Build panel](multiple-build-from-template-panel.md#template_panel_build) and the mode is keyout master only, any target setting here will be ignored.

If you are using this method to make connections each time a model is built, you should **not** have the same connections stored as post-end data, although other connections may be.

![](../Storage/primer-22-1/primer_links/sect_3/images/datab_200a.gif)[Previous](single-build-from-command-line.md)  |  [Next](reading-files-using-a-model-database.md)