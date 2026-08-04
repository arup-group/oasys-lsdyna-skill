### Accessing the Widget objects

Similarly, each Widget object is a property of the Window object. The name of the Widget property is whatever was defined in the properties window in the GUI builder.

![](../Storage/primer-22-1/project-common-topics/js_gui_builder/widget_name.png)

For example if the window is called my\_window and the widget is called btnExample, the Widget object can be accessed and modified with.

**var btn = gui.my\_window.btnExample;**

**btn.text = Test;**

[Previous](accessing-the-window-objects.md)  |  [Next](accessing-the-widgetitem-objects.md)