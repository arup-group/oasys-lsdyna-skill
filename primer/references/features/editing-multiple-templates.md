###  Editing Multiple Templates

On vehicle programs there will be many variant load-cases to analyze and consequently many templates to handle. The TEMPLATE CONTROL PANEL accessed from the TEMPLATE PANEL button will display contents and allow modification of multiple templates.

PRIMER will locate all the templates that exist in the search directory, applying the filtering string if it is set.

Reread All will discard any current edits and reread templates from disk.

Add new tpl will create a new blank template which can be populated and saved.

Increment all will modify all loaded template names, such that *fred.tpl* -&gt; *fred\_001.tpl* or *fred\_001.tpl* -&gt; *fred\_002.tpl* . This allows easy version control for templates. The renamed templates must then be saved. Special logic has been added so that *fred\_1.tpl* will increment to *fred\_2.tpl* (not *fred\_002.tpl* ).

Save all will save all the loaded templates to disk in the search directory, overwriting (without warning) if necessary.

[Build Models](multiple-build-from-template-panel.md#template_panel_build) starts multiple model build panel, see below.

Quit returns to the database panel.

The above functions may be activated for a single template by using the drop down (as shown below). Additionally, this allows user to Copy an existing template.

The Database item popups allow selection of an item across all templates. They also access the same category edit panel that is available from the database panel.

![](../Storage/primer-22-1/primer_links/sect_3/images/template.gif)

[Previous](templates.md)  |  [Next](multiple-build-from-template-panel.md)