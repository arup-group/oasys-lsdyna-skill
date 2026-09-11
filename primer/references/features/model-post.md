##  

| Model POST
<br>PRIMER can link with the D3PLOT and T/HIS post processors via shared memory, making it possible to exchange commands and data between the programmes.<br>
<br>This makes "Pre" functionality available in post-processors, for example editing the original keyword definitions; and "Post" functionality becomes available in PRIMER , for example extracting deformed coordinates.<br>
<br>In the case of D3PLOT graphics can be synchronised between the two codes, so that dynamic viewing, blanking, colours, cut-sections, etc are updated simultaneously at both ends. | ![](../Storage/primer-22-1/primer_links/sect_3/images/post_1.png) |
| --- | --- |

By default no link takes place, but it can be opened in any of the following ways:
 
* A running PRIMER session starts a new D3PLOT and/or T/HIS session using the stipulated model
* A running D3PLOT or T/HIS session starts a new PRIMER session using the stipulated model. 
and
* Once a link is established, in either of the modes above, further models can be opened and linked at will.

The link is symmetrical and bi-directional, with no concept of parent or child, and it can be closed at any time leaving both codes running autonomously. What you can't do at present is to link an already running, PRIMER, D3PLOT or T/HIS session with another autonomous session unless it was opened by the other code first.
 
Terminal output from the newly opened session will be sent to the following locations:

| **On Windows** | Each session will always open its own, separate MS-DOS terminal (console) window, which will receive all "Terminal" output. |
| --- | --- |
| **On Linux** | If the parent session was started directly from a terminal window then all output from child processes will be sent to that window.<br> <br>If the parent was started via a separate "xterm" window, the default when using the "Oasys SHELL", then each child process will also open its own, separate xterm window to act as a terminal (console) window. |

[Previous](options-for-comparing-models.md)  |  [Next](the-post-panel.md)