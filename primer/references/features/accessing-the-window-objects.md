### Accessing the Window objects

The GUI Window objects are stored as properties on the global GUI object. The name of the property is whatever was defined in the properties window in the GUI builder.

![](../Storage/primer-22-1/project-common-topics/js_gui_builder/window_name.png)

To display the Window called my\_window use the Show() method:

**if (gui) gui.my\_window.Show();**

[Previous](read-the-gui-into-a-script.md)  |  [Next](accessing-the-widget-objects.md)