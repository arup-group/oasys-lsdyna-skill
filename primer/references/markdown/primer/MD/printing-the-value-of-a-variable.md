## Printing the value of a variable

If you want to see the value of a variable you can type the name of the variable you want to see in the textbox at the top of the debugger and press Print. JaDe will evaluate the variable and output the result in the statusbar at the bottom of the debugger.

### Using Quickwatch

If you want to look at the values for lots of variables it is annoying to have to type the variable name in and press Print for each one. A better way is to use Quickwatch at the top left of JaDe

![](../Storage/primer-22-1/project-common-topics/jade/quickwatch1.png)

Type the name of the variable that you want to watch in the Click to add textbox. A line will be added for the variable showing its name and value. e.g. in the following image the variable mines is being displayed and its current value is 10. If the value is very long hover over the value to get the whole string.

![](../Storage/primer-22-1/project-common-topics/jade/quickwatch2.png)

You can add any number of variables to watch. To remove one right click on the variable and select Remove quickwatch from the popup.

If a variable exists and has been assigned to then the value is displayed. e.g. mines in the following example.

If the variable exists but it has not yet had a value assigned its value is the undefined value. e.g. pos in the following example.

If the variable does not exist the value is shown as ! invalid ! . e.g. fred in the following example.

![](../Storage/primer-22-1/project-common-topics/jade/quickwatch3.png)

[Previous](running-the-script.md)  |  [Next](the-call-stack.md)