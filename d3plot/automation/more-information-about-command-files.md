###  More Information About Command Files

####  The format of the ASCII disk files used for these

The ASCII files are up to 132 columns wide, with column numbers reserved as follows:
1 to 80 
Dialogue strings from the dialogue box, button text, etc
81 
Continuation character for long strings ( C below)
82 to 132 
Encoded screen-menu functions

| Diagrammatically this gives:<br> <br>&lt;Dialogue string (80 characters)&gt; |C| &lt;Encoded screen-menu function values&gt;<br> <br>If the continuation column (#81) is occupied then it assumed to be a "long" line, and the character string can extend to column 132. Any screen-menu function values will then appear on the next line.<br> <br>If columns 82 to 132 are empty the command is assumed to be a simple "dialogue" command, typed in by the user. |
| --- |

| An example of a command file is: |
| --- |
| $ |  |  |  |  |  |  |  |  |
| $ D3PLOT version 7.0 session file |  |  |  |  |  |  |  |  |
| $ Date/time: 25-Nov-95 17:42:00 |  |  |  |  |  |  |  |  |
| $ |  |  |  |  |  |  |  |  |
| /re 2 | 1 | 1 | 1 | 0 | 0 | 0 | 0 | 0 |
| /bl sta | 1 | 1 | 1 | 0 | 0 | 0 | 0 | 0 |
| /hi | 1 | 1 | 1 | 0 | 0 | 0 | 0 | 0 |
| DISMISS | 26 | 3 | 2 | 1 | 0 | 0 | 0 | 0 |
| CFILE | 23 | 3 | 2 | 14 | 0 | 0 | 0 | 0 |

| Backwards compatibility with command files from earlier versions of D3PLOT  <br>This file format is fully backwards compatible with text-only command files from earlier versions of D3PLOT. They will have nothing in columns 82 to 132, and so will be treated as command-line input, which is what they are.<br> <br>The command-line syntax in Version 7.0 of D3PLOT is virtually unchanged from earlier releases, so the vast majority of existing command-files should run with no modification. |
| --- |

| Editing command files by hand  <br>You can type in commands (in columns 1 to 80) that are genuine "command-line" commands, and you should leave columns 82 to 132 blank.<br> <br>It is also possible to concatenate screen-menu command files using the editor, **BUT** beware the following: |
| --- |

| **Context errors:** | The instructions "drive along motorway", and "remove wheel nuts and take wheel off car" are both perfectly sensible. But only if the intervening commands "in case of puncture pull over to hard shoulder, stop, and jack up car" are inserted.<br> <br>If you concatenate two sets of command files you can generate context errors if you miss out intervening steps. For example if file one sets up contour levels, and file two operates animation controls, you will have problems because you have omitted to switch from "static" to "animation" modes in between.<br> <br>This is a context error. Normally you would not be able to operate animation controls while in "static" mode, since the buttons would not be available. But this protection is absent when replaying command files. |
| --- | --- |
| **Range errors:** | Menus of items, for example lists of materials, may have fewer rows in this file than in the one where the command file was generated.<br> <br>Since the screen-menu function recorded is the menu row, not its contents, this produces errors if you try to reference rows for non-existent entries. |
| To concatenate files it is better to PLAY each of them in turn through D3PLOT, while simultaneously RECORD ing them. This will allow you to spot and fix context errors more quickly, and also to insert missing commands if needed. |

| Certain commands are not recorded  <br>Commands in "pop-up" windows, for example warning, confirmation and listing boxes are not recorded.<br> <br>Also commands in the file filter box are not. You can make this work for you: if you want to define a different filename at playback time use [ ? ] for the file filter box, if you want to use a fixed filename without intervention at playback time type it explicitly into the File: text box as this will be recorded. |
| --- |

Previous: using-the-launcher-box-during-recording-and-playback  |  Next: associating-command-files-with-function-keys