####  Saving sessions

| **Saving via the 'Session file' panel.** | Stores all relevant information in one session file (" .dsf ").<br> <br>The default filename " d3plot *nnn*.dsf " is recommended, although any user-defined filename may be used.<br> <br>![Save session panel](../Storage/d3plot-23-0/sect_6/fig_6_9_10_1.png) |
| --- | --- |
| **Saving via the SAVE\_SESSION\_EXIT option during exit** | Clicking SAVE\_SESSION\_EXIT will save a session fle with a default name with the format d3plot\_&lt;date&gt;\_&lt;time&gt;.dsf . The file will be saved in the home directory by default but the location can be controlled using preferences.<br> <br>![Exit popup](../Storage/d3plot-23-0/sect_6/fig_6_9_10_2.png) |
| **Saving a session unconditionally upon exit** | The preference d3plot\*session\_auto\_save , when set to ON, will automatically write out a session file every time D3PLOT exits. These automatic session files will carry the name d3plot\_&lt;date&gt;\_&lt;time&gt;.dsf .<br> <br>The save location may be controlled by using the preferences d3plot\*session\_save\_option and d3plot\*session\_save\_dir . |

Previous: utilities-session-file  |  Next: reading-session-files-in-a-new-session