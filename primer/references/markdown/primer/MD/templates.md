###  Templates

The template provides an easy way to select a set of include files with which to build a model.

![](../Storage/primer-22-1/primer_links/sect_3/images/datab_4.gif)

Templates provide a way of saving particular combinations of include files in order to allow you to easily read in a particular, frequently used, pattern of files without having to select each file from the database every time you build a model. Generally, there will be one database for a vehicle programme, and one template for each load case or variant.

In order to save a particular combination of include files, select the desired combination in the Model Database window and press SAVE TEMPLATE .

When a standard keyword file is present, the template will reference *only the category and sub-category* of the mentioned file, hence if the keyword files of the database are externally updated, the model read in from the template will automatically be the latest one.

If a template is saved that lists a non-standard include file (i.e. the user has modified the original database entry - it shows in red), the name and path of the include file will be specified in the template. When this template is read in, a warning will be given that non-standard keyword files are being used.

In order to read a template file click on the LOAD TEMPLATE tab and the selection of files in the template will be selected in the model database.

[Previous](recording-a-snapshot-of-versions.md)  |  [Next](editing-multiple-templates.md)