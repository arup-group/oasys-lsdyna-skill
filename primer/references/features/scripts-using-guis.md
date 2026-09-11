# Scripts using GUIs

Scripts that create a graphical user interface (GUI) have to keep running so that the windows for the user interface remain visible. The way that this is done has changed in version 21.
All programs that have a graphical user interface (GUI) use an "event loop" to process any mouse/keyboard events. PRIMER has a main "event loop" to process all of the program’s events.
In version 20 and before, if a script created and showed a window, PRIMER would start a new "event loop" to manage and process that JavaScript window.
The script would not return from the window Show() call until the window was hidden/closed.

i.e. showing the window would "block" execution of the script until the window was closed.
When the window is closed, the script continues.
When execution reaches the end of the script, the script is terminated

For example, in version 20 and earlier, in the following script, "Hello, world!" will not be printed until the window is closed because the call to w.Show() will not return until the window is closed.
// Create a window with a widget
var w = new Window("Test", 0.5, 0.6, 0.5, 0.6);
var l = new Widget(w, Widget.LABEL, 0, 50, 0, 6, "Press X to close the window");

// Show the window and start event loop
w.Show();

// Print message
Message("Hello, world!")

When the window is closed the message is printed and the script will then terminate as execution has reached the end of the script.
In version 21 the behaviour has changed. If a script creates and shows a window, PRIMER will **not** start a new "event loop" to manage and process that JavaScript window.
The window will now be processed from the main event loop in PRIMER.

The script now returns from the window Show() as soon as the window is shown, and execution of the script continues.
i.e. showing the window no longer "blocks" execution of the script until the window is closed.

When execution reaches the end of the script, the script is **not** terminated.
The script continues running "in the background" as the script has shown a window.

For example, in version 21, in the same script "Hello, world!" will be printed immediately after the window is shown, because the call to w.Show() returns after the window is shown.
When the message is printed, the script will **not** terminate when execution reaches the end of the script. The script will continue to run "in the background". You can use the [Running](compiling-and-running-a-script.md#running_scripts) button in the script menu to see which scripts are running at any time.

If a script that shows windows continues running "in the background", and does not terminate when execution reaches the end of the script, how/when does the script terminate?
A script that uses windows **must** now call Exit to terminate the script

// Create a window with a widget
var w = new Window("Test", 0.5, 0.6, 0.5, 0.6);
var l = new Widget(w, Widget.LABEL, 0, 50, 0, 6, "Press X to close the window");

// Exit when window closed
**w.onClose = Exit;**

// Show the window
w.Show();

// Print message
Message("Hello, world!");

If the script does not call Exit then the script will continue to run in the background, even if no windows are being shown. If necessary the [Running](compiling-and-running-a-script.md#running_scripts) menu can be used to terminate the script.

## Why the change has been made in version 21

![](../Storage/primer-22-1/primer_links/sect_10/event_loops_20.png)
To explain why the change has been made, we need to look at how multiple scripts are run concurrently in PRIMER.
JavaScript is used extensively by our clients to customise PRIMER and create their own workflows. It is also used by us to develop core tools/functionality in PRIMER.

When multiple scripts are running at the same time, the way this was implemented in version 20 and before was causing issues. Scripts had to be closed/terminated in the reverse order to which they were started.
In version 20 and before, every time a script with a GUI is used, an "event loop" was created to process the script. Every "event loop" that was created was a "child" of the previous event loop.

For example, the diagram on the left visualises the event loops in version 20, if script "A" and script "B" are both started.

If the script "A" is closed, script "B" must also be closed as the "event loop" for script "A" is terminated, and the "event loop" for script "B" then has no "parent".

In version 21 we no longer create an "event loop" to process each script. Calling Window Show() returns instead of "blocking".

The main "event loop" processes everything.

For example, the diagram below now visualises the "event loop" if script "A" and script "B" are both started in version 21.
If script "A" is closed, script "B" can continue to run as the "events" for it are all processed in the main event loop.

![](../Storage/primer-22-1/primer_links/sect_10/event_loops_21.png)

For simple scripts, the only change that should be required is to make sure that the script exits when the main window is closed by calling Exit(). The Window onClose event can be used to do this.

If you have specifically relied on script execution "blocking" when the Window Show method is used, then your script may need to be slightly modified. Please contact our support team if you have any questions or need assistance.

[Previous](ecmascript-6-modules.md)  |  [Next](write-hook.md)