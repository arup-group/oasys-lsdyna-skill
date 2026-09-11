####  Linking Model to Database

When a model has just been built, the include tree is linked implicitly to the database from which the model has been built as described in [Modifying the Built Model](modifying-the-built-model.md#built_model).

However, you may wish to write out the built model (probably just the master file) and come back to work on it later. This can be done in PRIMER by re-linking the read model to its database.

When you read in a model that has been built using the database/template method, a special comment in the master file enables PRIMER to recognize the origin of the model. Hover text on the model popup will show the database and template. By default the model is **not linked** to the database and may be treated as an independent entity.

![](../Storage/primer-22-1/primer_links/sect_3/images/link_database_1.gif)

By activating the link -&gt; database option off the model popup, the include tree will behave as if the model has been built. It does not matter if the contents of model have been changed before linking. However, it is assumed that the include file structure has not been changed, i.e. includes have not been added/deleted or written to different names. After linking the hover text that shows the provenance of each include will become active and Edit database will be available. Writing out includes (to different file names) is now handled as described [Modifying the Built Model](modifying-the-built-model.md#built_model).

![](../Storage/primer-22-1/primer_links/sect_3/images/link_database_2.gif)

[Previous](writing-the-model-using-select-files.md)  |  [Next](creating-and-managing-a-model-database.md)