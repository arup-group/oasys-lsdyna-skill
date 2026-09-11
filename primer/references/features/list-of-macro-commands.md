###  List of Macro Commands

Below is a full list of all of the commands available in macros. Comments can be put anywhere in a macro file. Any line that begins with $ or # is treated as a comment and will be skipped.

####  Commands in windows

A window is identified in PRIMER with the commands. PRIMER will try to find a window exactly matching *name* . If that fails a partial match will be tried. See the section on [making macros work with different models](playing-a-macro.md#makeportable)for more details.

| **Command** | **Description** |
| --- | --- |
| DialogWindow( *"name"* ) | A window that is shown asking the user to confirm an action or answer a question. |
| GraphicsWindow( *"name"* ) | The main graphics window |
| Menu( *"name"* ) | An object menu |
| PopupWindow *&lt;number&gt;* () | A popup window.  *&lt;number&gt;*  identifies the popup. i.e. PopupWindow1 is a normal popup. PopupWindow2 is a popup mapped from a popup etc. |
| Window( *"name"* ) | A 'normal' window |

The following commands are used in conjuction with a 'window' command. Some commands have various alternatives. Where this is possible the alternatives are separated by | and are in square brackets [] . e.g. the command

.[|Ctrl|Shift]Click( *"name"* )

can be

Click( *"name"* )  
 CtrlClick( *"name"* )  
 ShiftClick( *"name"* )

| **Command** | **Description** |
| --- | --- |
| .Actions() | Equivalent to pressing the top left 'actions' button ![](../Storage/primer-22-1/primer_links/sect_6/macro/actions_icon.gif)for a window |
| .[Left|Right|Up|Down]Arrow() | Equivalent to using arrow keys to scroll a list |
| .Bitmap() | Equivalent to pressing the 'SAVE-&gt;BITMAP' button in the top left actions popup for a window |
| .[|Ctrl|Shift]Button( "name" ) | Press, Ctrl Press or Shift Press on button *name* . |
| .[|Ctrl|Shift]Button( "name" ) = [on|off] | Press, Ctrl Press or Shift Press on toggle button *name* . The state is set by using = on or = off . |
| .[|Ctrl|Shift]Click( *"name"* ) | Click, Ctrl click or Shift click on item *name* in a table or tree. |
| .Collapse( *"name"* ) | Collapse branch *name* in a tree. |
| .Dismiss() | Dismiss a window. Equivalent to pressing the top right ![](../Storage/primer-22-1/primer_links/sect_6/macro/dismiss_icon.gif)button for a window |
| .[|End|Start]Drag *&lt;number&gt;* ( *&lt;x&gt;* , *&lt;y&gt;* ) | Drag at location *x* , *y* using mouse button *number.* |
| .End() | Equivalent to pressing End key to go to the bottom of a list |
| .Expand( *"name"* ) | Expand branch *name* in a tree. |
| .Feedback( *"name"* ) = *"value"* | Perform feedback function on button *name* with *value* (e.g. when typing in parameter, show the list of matching parameters) |
| .Help() | Show help for a window. <br>Equivalent to pressing the top right ![](../Storage/primer-22-1/primer_links/sect_6/macro/help_icon.gif)button for a window |
| .Home() | Equivalent to pressing Home key to go to the top of a list |
| .Hover( *"name"* ) | Perform hover function on button *name* (e.g. when hovering over a button with a parameter, the parameter data is shown) |
| .Lower() | Lower a window in the stacking order. |
| .Maximise() | Maximise a window. Equivalent to pressing the top right ![](../Storage/primer-22-1/primer_links/sect_6/macro/maximise_icon.gif)button for a window |
| .Minimise() | Minimise a window. Equivalent to pressing the top right ![](../Storage/primer-22-1/primer_links/sect_6/macro/iconise_icon.gif)button for a window |
| .Page[Down|Up]() | Equivalent to pressing PageUp or PageDown to move up/down a page in a list |
| .Pick *&lt;number&gt;* ( *&lt;x&gt;* , *&lt;y&gt;* ) | Pick at location *x* , *y* using mouse button *number.* |
| .Picking() | Restart picking in a window. Equivalent to pressing the top left ![](../Storage/primer-22-1/primer_links/sect_6/macro/picking_icon.gif)button for a window |
| .Popup( *"name"* ) | Map popup window for button *name* (equivalent to right clicking on button) |
| .Radio( *"name"* ) = *"value"* | Set radio button *name* to *value* |
| .Resize( *&lt;data&gt;* ) | Resize/move window |
| .Restore() | Restore a minimised window. |
| .Select *&lt;number&gt;* ( *"name"* ) | Select *name* from object menu at depth *number* . PRIMER will try to find a menu entry exactly matching *name* . If that fails a partial match will be tried. See the section on [making macros work with different models](playing-a-macro.md#makeportable)for more details. |
| .Slider( "name").Move[Up|Down|Right|Left]() | Move slider *name* up, down, right or left. |
| .Tab( *"name"* ) | Press tab *name* in a window. |
| .Textbox( *"name"* ) = *"value"* | Set textbox *name* to *value* |
| .ViewMatrix( *&lt;view data&gt;* ) | Records the current view data to the command file so that when replaying the command file the view can be restored before doing a pick/drag |

####  Other commands

| **Command** | **Description** |
| --- | --- |
| $ *comment* | Any line beginning with $ is a comment |
| # *comment* | Any line beginning with # is a comment |
| Dialog( *"command"* ) | Iss *command* in the dialogue window |
| Dynamic[Rotate|RotateZ|Scale|Translate]( *&lt;data&gt;* ) | Dynamic viewing command |
| End In | End a [group of commands](playing-a-macro.md#groupingcommands)in the same window. |
| FunctionKey( &lt;key&gt; ) | Equivalent of pressing function key |
| In *&lt;window&gt;* | Start a [group of commands](playing-a-macro.md#groupingcommands)in the same [window](list-of-macro-commands.md#windowcommands). |
| Justify( "[Top|Bottom|Left|Right|Centre| <br>TopRight|TopLeft|BottomRight|BottomLeft]" ) | By default Pause commands are shown at the top right of the PRIMER window. The Justify command changes the position that they are shown in. For example if you want them to be shown in the centre of the screen add the command Justify("Centre") to the macro **before** the Pause command. |
| MacroDescription( *"description"* ) | Hover text that will be shown for the macro on the button in the macro panel. This must be in the first 10 lines of the macro. |
| MacroName( *"name"* ) | Name that will be shown for the macro on the button in the macro panel. This must be in the first 10 lines of the macro. |
| MacroUTF8Encoded() | Indicates that the macro contains Unicode text for Pause or MacroVariable descriptions and is UTF-8 encoded. See the [Unicode](playing-a-macro.md#unicode)section for more details. This must be in the first 10 lines of the macro. |
| MacroVariable( *"name"* , *"description"* , *"value"* ) | Adds a variable definition to the macro. See the [Variables](playing-a-macro.md#macroVariables)section for more details. These must be defined near the top of the file before the variable(s) are used. |
| Pause( *"text"* ) | Temporarily suspend command file playback to allow user interaction. A window is mapped on the screen with "text" as a prompt. e.g. <br> ![](../Storage/primer-22-1/primer_links/sect_6/macro/pause_command.gif) <br>Press Resume to resume playback. |
| Promptln( *"message"* ) | Write message to the dialogue box. |
| Promptln( *"message"* ) | Write message to the dialogue box, adding a new line |
| SelectFile( *"filter"* ) = *"name"* | Select file *name* from the File selection window. |
| DragDropFile( *"&lt;file\_index&gt;|&lt;number\_of\_files&gt;"* ) = *"filename"* | Drag and drop file *filename* into the PRIMER graphics area. You can call this command multiple times to drag-drop more than one file. Each of the files will be opened as a separate model in PRIMER . |
| ShortcutKey( &lt;key&gt; ) | Equivalent of doing shortcut *key* |
| Version( *"version"* , *&lt;build&gt;* ) | Records the version and build of PRIMER into the macro. this may be used in the future to help playback of macros recorded in earlier versions of PRIMER . |
| WindowSize( *&lt;x&gt;* , *&lt;y&gt;* ) | Records the size of the graphics window to the macro so that when replaying the window can be resized to the correct proportions (if different) so that picks and/or drags work correctly. |

[Previous](playing-a-macro.md)  |  [Next](assigning-macros-to-shortcut-keys.md)