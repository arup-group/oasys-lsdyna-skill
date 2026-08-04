###  Showing a Custom Tool Button for Scripts

As well as showing scripts in the script tree it may also be convenient to add a custom tool button to quickly enable you to run specific scripts. This can be controlled by the preferences

primer\*custom\_tools\_name 
primer\*custom\_tools\_script\_directory

If the custom\_tools\_script\_directory preference is given then PRIMER will show a new tool button next to the quickfind button. By default the text shown on the button will be the name of the specified directory but the custom\_tools\_name preference can be used to change the text. As normal these preferences can be defined in the $OA\_ADMIN, $OA\_INSTALL and/or $OA\_HOME directories. PRIMER will search each of the specified directories for scripts adding to the list. 
 [Preference locking](../../common_manual_files/installation_organisation/installation_organisation.htm#locking)can be used as necessary to restrict users from adding their own directories.

For example with the preferences:

primer\*custom\_tools\_name: Arup 
primer\*custom\_tools\_script\_directory: C:\test\Arup\_scripts

PRIMER will show buttons for the scripts in directory C:\test\Arup\_scripts and show buttons in the popup for each script found. The [name:](maintaining-a-library-of-javascripts.md#name)comment at the top of the script can be used to change the text shown on the button

![](../Storage/primer-22-1/showing-a-custom-tool-button-for-scripts/showing-a-custom-tool-button-for-scripts-2025-05-30.png)

[Previous](maintaining-a-library-of-javascripts.md)  |  [Next](running-a-javascript-in-batch-mode.md)