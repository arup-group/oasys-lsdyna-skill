### Defining callback functions

Callback functions (onClick, onChange, etc.) can be assigned to the window and widgets in the properties window, by adding the name of a function to call.

For example to set the onClick property of a widget so it calls a function called pressed:

![](../Storage/primer-22-1/project-common-topics/js_gui_builder/callback.png)

This function then needs to be defined in your script:

**Use("C:\\test.jsi");**

**if (gui) gui.my\_window.Show();**

**function pressed()**

**{**

**Message("You clicked me!");**

**}**

 [Previous](accessing-the-widgetitem-objects.md)  |  [Next](fonts-on-linux.md)