###  Save Session
 
A T/HIS session can be saved either through Save/Retrieve Session panel or on Exit.

####  Save Session - Save/Retrieve Session Panel
 
To save a T/HIS session, select File -&gt; Session File -&gt; Save to open the Save/Retrieve Session panel in the menu area. Enter a name for the session file in the File Name textbox and click Apply. A filename can also be entered using file selection browser.

**It should be noted that T/HIS session file does not directly store either the Ansys LS-DYNA model results or any csv/cur files that have been used for generating the curves inside the session file by default. It will only contain the full address path to these files. As a result of this session file do not occupy much space on disk.**

If users want they can embed extra information into the session file so that the saved T/HIS session can be retrieved even if Ansys LS-DYNA results/csv/cur files are deleted or lost.

![](../Storage/this-23-0/this%20-%20links/sect_5/fig_5_25_1.png)

| Embed cur/csv files into session | This option embeds the cur or csv files that are used for creating the curves. The session file with embedded cur/csv files no longer depend on these files and the session can be retrieved even if these files are deleted or lost. If you want this option to be enabled always, you can set the preference this\*session\_embed\_cur\_csv\_files: ON (see Format of the oa_pref File for more details). |
| --- | --- |
| Embed curve data into session | This option embeds the curve xy coordinate data for all curves into the session file. A session file with embedded curve data can be retrieved even if the model files are missing. However, a session retrieved using embedded curve data loses information such as curve ID and graph properties. If you want this option to be enabled always, you can set the preference: this\*session\_embed\_curve\_data: ON (see Format of the oa_pref File for more details). |

####  Save Session - On Exit
 
T/HIS session can be saved on exit from T/HIS by selecting SAVE SESSION button on the exit INFORMATION panel. The session file saved would have a name of the format this\_&lt;DATE&gt;\_&lt;TIME&gt;.tsf. The file would be by saved to the location defined in preference file (see Format of the oa_pref File for more details).
 
this\*session\_save\_option:

this\*session\_save\_dir:

The session file can also saved automatically every time T/HIS exits by defining in the preference file (see Format of the oa_pref File for more details).

this\*session\_auto\_save:

![](../Storage/this-23-0/this%20-%20links/sect_5/fig_5_25_1b.png)

Previous: this-session-save-and-retrieve  |  Next: retrieve-session