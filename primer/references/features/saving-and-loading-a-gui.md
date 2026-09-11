### Saving and loading a GUI

The GUI can be saved to file by pressing the Save button and then selecting a file. The saved file is a JavaScript file containing the window
and widget definitions in a JSON string, and a call to Window.BuildGUIFromString() which builds the GUI when the script is run. Further details are given in the next section.

![](../Storage/primer-22-1/project-common-topics/js_gui_builder/save.png)

It can be reloaded by pressing the Load button and selecting the file to load.

![](../Storage/primer-22-1/project-common-topics/js_gui_builder/load.png)

The GUI can also be saved as a raw JavaScript file, with the calls to create and position the windows and widgets, explicitly defined, rather than using Window.BuildGUIFromString(). This cannot be loaded back into the GUI Builder, however it may be useful for creating GUIs to run in versions prior to v18 that don't have the Window.BuildGUIFromString() function.

![](../Storage/primer-22-1/project-common-topics/js_gui_builder/rawjs.png)

[Previous](popupwindows.md)  |  [Next](how-to-use-the-gui-in-a-script.md)