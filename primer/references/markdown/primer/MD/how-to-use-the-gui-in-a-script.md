## How to use the GUI in a script

The GUI is saved to a JavaScript file, containing the GUI definition in a JSON string and a call to Window.BuildGUIFromString(). It is saved with the extension .jsi to indicate that it should be included from another file. You should not need to edit this file.

When saving the GUI a \*.js file is also written to demonstrate how to include the \*.jsi file and display the GUI. This can be used as a template to follow and modify.

It is written to the same folder as the \*.jsi file and named &lt;jsi\_filename&gt;\_TEMPLATE.js, e.g. if the \*.jsi file is called demo.jsi, the \*.js file will be saved as demo\_TEMPLATE.js

![](../Storage/primer-22-1/project-common-topics/js_gui_builder/filenames.png)

The following sections explain how you can reference the Windows, Widgets and WidgetItem objects within your script.

[Previous](saving-and-loading-a-gui.md)  |  [Next](read-the-gui-into-a-script.md)