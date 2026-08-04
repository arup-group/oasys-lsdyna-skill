## Adding/removing breakpoints

A breakpoint is a line in the script where execution will pause in JaDe. To add a breakpoint either left click on the line you want the breakpoint on or right click on the line and select Create breakpoint from the popup. A red circle is then drawn on the line to show that there is an active breakpoint.

![](../Storage/primer-22-1/project-common-topics/jade/breakpoint%20enabled.png)

Additionally the breakpoint will also be added to the list in the breakpoint window (bottom left of JaDe). You can click on this at any time and the main text window will jump to the correct file and line.
 Active breakpoints are shown with a red circle. Breakpoints can be activated/deactivated by clicking on the line again. Unactive breakpoints are shown as a grey circle instead of a red one. They are also shown in grey text in the breakpoint window .

To delete a breakpoint right click on the line and select Delete breakpoint. The breakpoint will be deleted.

### Conditional breakpoints

Sometimes it is useful to only stop at a breakpoint if a certain condition is met. For example in the above example we may only want to stop at line 114 if mines is 10. You can do this by right clicking on the the breakpoint and selecting Add condition.

![](../Storage/primer-22-1/project-common-topics/jade/add_condition.png)

A window is mapped allowing you type in the condition you want to try to meet. The condition should be a JavaScript expression which evaluates to true if you want the breakpoint to stop execution, or false if you want the breakpoint to be skipped. In this example the condition is n == 10.

If a breakpoint has a condition associated with it a C is drawn on the circle and in the breakpoint window. The condition can be edited again or removed by right clicking on the breakpoint and selecting either Edit condition or Remove condition from the popup.

[Previous](viewing-the-script-files-and-functions.md)  |  [Next](running-the-script.md)