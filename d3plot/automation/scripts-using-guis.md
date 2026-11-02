# Scripts using GUIs

Scripts that create a graphical user interface (GUI) have to keep running so that the windows for the user interface remain visible. The way that this is done has changed in version 21.
All programs that have a graphical user interface (GUI) use an "event loop" to process any mouse/keyboard events. D3PLOT has a main "event loop" to process all of the program’s events.
In version 20 and before, if a script created and showed a window, D3PLOT would start a new "event loop" to manage and process that JavaScript window.
The script would not return from the window Show() call until the window was hidden/closed.

i.e. showing the window would "block" execution of the script until the window was closed.
When the window is closed, the script continues.
When execution reaches the end of the script, the script is terminated

For example, in version 20 and earlier, in the following script, "Hello, world!" will not be printed until the window is closed because the call to w.Show() will not return until the window is closed.
// Create a window with a widget
var w = new Window("Test", 0.5, 0.6, 0.5, 0.6);
var l = new Widget(w, Widget.LABEL, 0, 50, 0, 6, "Press X to close the window");

// Show the window and start event loop
w.Show();

// Print message
Message("Hello, world!")

When the window is closed the message is printed and the script will then terminate as execution has reached the end of the script.
In version 21 the behaviour has changed. If a script creates and shows a window, D3PLOT will **\*not\*** start a new "event loop" to manage and process that JavaScript window.
The window will now be processed from the main event loop in D3PLOT.

The script now returns from the window Show() as soon as the window is shown, and execution of the script continues.
i.e. showing the window no longer "blocks" execution of the script until the window is closed.

When execution reaches the end of the script, the script is **\*not\*** terminated.
The script continues running "in the background" as the script has shown a window.

For example, in version 21, in the same script "Hello, world!" will be printed immediately after the window is shown, because the call to w.Show() returns after the window is shown.
When the message is printed, the script will **\*not\*** terminate when execution reaches the end of the script. The script will continue to run "in the background". You can use the [Running](compiling-and-running-a-script.md#running_scripts) button in the script menu to see which scripts are running at any time.

If a script that shows windows continues running "in the background", and does not terminate when execution reaches the end of the script, how/when does the script terminate?
A script that uses windows **\*must\*** now call Exit to terminate the script

// Create a window with a widget
var w = new Window("Test", 0.5, 0.6, 0.5, 0.6);
var l = new Widget(w, Widget.LABEL, 0, 50, 0, 6, "Press X to close the window");

// Exit when window closed
**w.onClose = Exit;**

// Show the window
w.Show();

// Print message
Message("Hello, world!");

If the script does not call Exit then the script will continue to run in the background, even if no windows are being shown. If necessary the [Running](compiling-and-running-a-script.md#running_scripts) menu can be used to terminate the script.

This change was primarily required for running multiple scripts in PRIMER, but the behaviour in D3PLOT is the same. See [Why the change has been made in version 21](https://help.oasys-software.com/smart/project-primer/scripts-using-guis/a/blocking_script_changes_21) in the PRIMER manual for details.

For simple scripts, the only change that should be required is to make sure that the script exits when the main window is closed by calling Exit(). The Window onClose event can be used to do this.

If you have specifically relied on script execution "blocking" when the Window Show method is used, then your script may need to be slightly modified. Please contact our support team if you have any questions or need assistance.
Previous: ecmascript-6-modules  |  Next: the-d3plot-javascript-api