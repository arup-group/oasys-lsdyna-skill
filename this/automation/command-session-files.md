##  Command / Session Files

Command and session files are used to drive or record a T/HIS session. Both session (save) and command (playback) files have been set up to act like tape recorders; and the concept of "recording" and "playing back" files will be used below.

These files ("button click" command files) are not easy to edit by hand and they are not always backwards compatible between versions of T/HIS. For these reasons most users prefer the newer [FAST-TCF](fast-tcf-overview.md)format, which can also be recorded and [played back](running-fast-tcf.md#run_inter)from within T/HIS.
 ![](../Storage/this-23-0/this%20-%20links/sect_5/fig_5_7.gif)

| In screen menu mode a command has a meaning beyond the simple command word. For example, HELP appears in many different places, with a distinct meaning (or relevance) in each place. Therefore, context information is stored when saving screen menu session files.<br> <br>In practice the following information is saved:<br> <ul> <li> the command itself - whether typed of inferred from a button </li> <li>the button identification (if any) </li> <li>the parent window identification </li> <li>the menu item (if relevant) </li> <li>the action type (screen pick, button press, etc) </li> <li>any x/y coordinates that may be relevant. </li> </ul> <br>A choice of either writing ("recording") session files or executing ("playing back") command files is given. By default commands are not saved. If they are to be saved the session file record switch must be turned on. |
| --- |

Previous: label-and-title-editing-in-the-dialogue-box  |  Next: writing-recording-session-files