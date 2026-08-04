### Read the GUI Into a Script

To read the GUI in a script you need to include the \*.jsi file with the Use() function.

This will create a global variable (gui by default) containing all the GUI objects. The name of the variable can be changed in the GUI builder menu under General Options.

For example, to include the GUI saved in C:\my\_gui.jsi:

**Use("C:\\my\_gui.jsi");**

[Previous](how-to-use-the-gui-in-a-script.md)  |  [Next](accessing-the-window-objects.md)