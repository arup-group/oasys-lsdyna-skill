###  Checkpoint/Recovery Files

All commands of your PRIMER session are recorded in a binary (non-editable) checkpoint or recovery file (CP\_PRIMER\_22.1\_xxx). If the session terminates normally the file is automatically deleted. If the software crashes, the file will be left behind.

When you next start PRIMER , you will be offered the option of rerunning any existing checkpoint files. Do not forget to **remove the last command** , by decrementing the *#commands to execute* counter or the crash will simply repeat.

Note that if you have overwritten your original file during the session, rerunning the command file will not be helpful.

In some cases, sending the checkpoint file and the input files to Oasys Ltd Support will assist in debugging the software, although "mini dump" files and/or tracebacks as described in 2.8.1 above are normally more useful for debugging.

**Please Note** : 
Reading/writing of checkpoint files can be enabled using the " **write\_checkpoint\_files** " and " **show\_checkpoint\_files** " command-line options and/or preferences. 
Also the folder path to write checkpoint files to can be set using the " **checkpoint\_dir** " command-line option and/or preference.

![](../Storage/primer-22-1/primer_links/sect_2/images/fig_2_8.gif)

If you rerun someone else's checkpoint file on a different computer you may find that it fails for either or both of the following two reasons:

| **Problem** | **Solution** | **Explanation** |
| --- | --- | --- |
| Any files read or written have an incompatible pathname embedded, meaning that they cannot be found. | Set the environment variable <br>CP\_FILE\_FILTER true | Means that whenever a file filter was used in the original run PRIMER will map a file filter during checkpoint replay, and wait for you to select the file manually. <br>The following environment variable will not work while replaying the checkpoint commands for the drag-drop of files into the PRIMER graphics area. |
| The screen window comes up the wrong size or shape, meaning that screen-picking operations do not always select the correct items | Set the environment variable <br>CP\_REFORMAT true | Will attempt to reformat the PRIMER window's resolution to that of the display on which the checkpoint file was captured. <br>This may not work if the resolutions of the two devices are wildly different |

**Note** : Checkpoint files should be cross-platform, ie a file generated on machine A should replay on machine B; however they are  ***not***  cross-version, and will only work with exactly the same version of the software.

[Previous](the-crash-handler.md)  |  [Next](quick-pick-function.md)