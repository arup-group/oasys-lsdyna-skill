## Running the script

Running the script is controlled by the buttons at the top of the debugger window. By default the script will be run in the debugger in 'strict mode'. This tries to pick up things which you might not have intended by running the script in a stricter environment doing more checking. You can toggle this on/off by using the strict mode checkbox.

### Starting and stopping

To start the script press the Run button. Execution of the script will start. If you have not defined any breakpoints then the script will run until it finishes (unless there are some script errors or [exceptions](https://help.oasys-software.com/smart/project-common-topics/exceptions)). If there is a breakpoint then the debugger will stop execution of the script when it reaches it. If the script is running and you want to pause execution of the script at any time you can press Interrupt.

![](../Storage/primer-22-1/project-common-topics/jade/interrupted.png)

The line that the debugger has paused the script on is shown by a green triangle. In the above example it is paused at line 114. The middle panel on the left shows the [call stack](https://help.oasys-software.com/smart/project-common-topics/the-call-stack/a/callStack). See the [call stack section](https://help.oasys-software.com/smart/project-common-topics/the-call-stack/a/callStack) for more details.

### Stepping and continuing

Once the script is paused in the debugger you can step through the source code by using the Continue, Next, Step and Finish buttons.

Continue will resume execution of the script again.

Next continues to the next line in the current function. i.e. it will step *over* a function call.

Step continues execution to the next source line (which may be in a different function. i.e. it will step *into* a function call).

Finish will finish executing the current function and stop at the next line in the calling function (the function above this in the [call stack](https://help.oasys-software.com/smart/project-common-topics/the-call-stack/a/callStack)).

Alternatively, if you want to continue until a particular line you can right click on the line you want to continue until and select Continue to here from the popup.
[Previous](addingremoving-breakpoints.md)  |  [Next](printing-the-value-of-a-variable.md)