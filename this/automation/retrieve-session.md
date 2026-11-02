###  Retrieve Session

A session file (.tsf) that has been saved onto the disk can be opened by simply double-clicking on it.

To open a session file (.tsf) from inside T/HIS, select File -&gt; Session File -&gt; Retrieve to open the Save/Retrieve Session panel in the menu area. Enter the name of the session file which needs to be opened in the File Name textbox and click Apply. The session file can also be selected using file selection browser. The Retrieve Session panel can pop-up on the screen every time T/HIS is launched by setting the preference this\*show\_session\_retrieve\_on\_start: ON (see Format of the oa_pref File for more details).

A typical T/HIS session can be retrieved in two possible ways depending on the data saved in session file:

1. Using Ansys LS-DYNA model(s), cur and csv files
2. Using embedded curve xy data

**Note: An option to select either of the above types is provided only if the session file contains embedded curve xy data. By default session is retrieved using Ansys LS-DYNA model(s), cur and csv files option.**
 ![](../Storage/this-23-0/this%20-%20links/sect_5/fig_5_25_2.png)

| Using Ansys LS-DYNA model(s), cur and csv files  <br>The session retrieved using Ansys LS-DYNA models, cur and csv files can restore all the curve information such as ID, blanking status, curve history, curve and graph properties such as color, curve symbol, line width, line style and captions. This option needs<br>Ansys LS-DYNA model(s), cur and csv files that are not embedded in the session files to be present in the locations defined inside the session.<br> <br>If the session files uses any Ansys LS-DYNA models then the path of models used by the session file can be found in List of Ansys LS-DYNA models inside session file. If the session file contains any model which is not found in the path defined inside the session file, the background color of the textbox turns red from blue. |
| --- |

The path of the models used by the session files can be modified either by modifying the path of the file in the textbox or by select the file using the file selection browser.
 ![](../Storage/this-23-0/this%20-%20links/sect_5/fig_5_25_3.png)
 
**A T/HIS session file can be opened even if some of the models are missing. The retrieved session will only contain the curves from the models that are present.**

When trying to open a new session file with T/HIS already containing model(s) or curve(s), T/HIS session retrieve offers three different options:

![](../Storage/this-23-0/this%20-%20links/sect_5/fig_5_25_4.png)

| Delete existing session and open new one <br>(New Session) | This option deletes the current existing session and opens the selected session file as a fresh new T/HIS session. It should noted that graphs and curves, once deleted, cannot be retrieved unless they are saved beforehand. |
| --- | --- |
| Retains existing session and open on a new graph <br>(Append session) | This option retains the current existing session as it is and the graphs from the session file will start from the highest available graph id. Total number graphs in the combined session is limited to 32. |
| Retains existing session and adds to the existing graphs <br>(Overlay session) | This option retains the current existing session as it is and the curves from session file will be added to their corresponding graph in the current session. |

The above Retrieve Options can be set by clicking on the Options button in the Save/Retrieve Session panel. This button becomes available only if T/HIS already contains model(s) or curve(s). Clicking on this button will open up the Retrieve Options pop-up.

The Overlay Properties become available when Retains existing session and adds to the existing graphs option is selected. The Overlay Properties will help in defining the curve style for the curves/graphs properties such as curve line type, width, graph title, x-axis and y-axis labels and font that are being overlaid on top of existing session the curve and graph.

![](../Storage/this-23-0/this%20-%20links/sect_5/fig_5_25_5.png)

| Overlay Curve Options | Use default T/HIS | This option automatically defines the curve style for the curves that are being overlaid. |
| --- | --- | --- |
| Use .tsf file properties | For the curves that are being overlaid, this option will apply the curve style defined inside the session file (.tsf). |
| Overlay Graph Options | Use existing | This option will retain the current existing graph properties such as x-axis and y-axis labels and font as it is. |
| Use .tsf file properties | This option will apply the graph properties such as x-axis and y-axis labels and font as defined inside the session file (.tsf). |

| Using embedded curve xy data  <br>If the selected session file contains embedded curve xy data, the option to select Retrieve using embedded curve data becomes available. This option retrieves all the curves even when the Ansys LS-DYNA model files required for session are missing/lost. However, the session retrieved using embedded curve xy data loses certain curve and graph properties. Hence, session option such as append and overlay are not applicable for a session retrieved using embedded curve data. |
| --- |

 ![](../Storage/this-23-0/this%20-%20links/sect_5/fig_5_25_6.png)

Previous: save-session  |  Next: workflows