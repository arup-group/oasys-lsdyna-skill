###  Settings...

| Some miscellaneous settings that control belt fitting are available here.<br>
<br>Preferences may also be saved automatically to you $home oa\_pref file using Save...<br> |
| --- |

**Action on node/point coordinate mismatch**
 
When the \*BELT\_PATH keyword defining the points that make up the basic belt path are read they contain both an explicit coordinate &lt;x1, y1, z1&gt; and an optional node &lt;nid&gt;:
 
```
*BELT_PATH
<npts>
<bits>       <x1>           <y1>           <z1>     (<nid>)
(Optional row 1 of further data depending on <bits>)
(Optional row 2 of further data depending on <bits>)
```
 
Prior to V14 PRIMER applied a hard-wired tolerance of 5mm when comparing the coordinates of node &lt;nid&gt; with the explicit coordinates &lt;x1, y1, z1&gt;, and the action taken was as follows:

| **Pre-V14 behaviour when dealing with node / point coordinate differences.** |
| --- |
| Point within 5mm of node | Move point silently to nodal coordinate |
| Point more than 5mm from node | Remove reference to node, use point coordinate |

From PRIMER V14 onwards this behaviour is now much more controllable as follows:

| **The mapping tolerance can be controlled**<br> <br>The default of 5mm can be changed to any reasonable value. (Note that this value is the same as that used in New Dummy when looking for nodes on the new dummy onto which to map the existing belt path.)<br> <br>This can also be set by the preference shown. | ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/settings_2.png)<br> <br>Preference: primer\*belt\_path\_match\_tol: <br> <br>    *&lt;value&gt;* |
| --- | --- |
| **The way point / node coordinate mismatches are handled can be controlled**<br> <br>Three behaviours are available if the point and node coordinates do not match within the given tolerance:<br> <br><br>| Prefer coord | Pre V14 behaviour. The reference to the node is deleted and the point coordinate is used. For backwards compatibility this is the default. |<br>| --- | --- |<br>| Prefer node | The node is used regardless, and the path point is moved to the node's cordinate. |<br>| Move node | The node is used regardless, but the coordinate of the node is moved to the path point. |<br><br> <br>The behaviour if the node and point are within tolerance is unchanged, ie move point to node coordinate. | ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/settings_3.png)<br> <br>Preference: primer\*belt\_path\_match\_method: <br> <br>prefer\_coord <br>prefer\_node <br>move\_node |

| Seatbelt and dummy keyout format  <br>Controls the version of PRIMER for which the post \*END cards written for ocupant related data are formatted. | ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/settings_4.png) |
| --- | --- |
| This setting affects the following PRIMER -specific keywords:<br> <br><br>| \*BELT\_xxx | Seatbelt fitting information. See [appendix E](e-seatbelt-tree-file-structure.md) |<br>| --- | --- |<br>| \*DUMMY\_xxx | Dummy positioning. See [appendix B.i](bi-dummy-tree-file-format.md#Dummytreefile) |<br>| \*MECHANISM\_xxx | Mechanism positioning. See [appendix B.ii](bii-mechanism-file-format.md#mech_tree_file) |<br><br> <br>***Warning:***  Choosing a format for an earlier version of PRIMER will attempt to format the relevant cards for that version, but it will inevitably mean that some data are lost and as a consequence that behaviour may not be the same. In some cases, for example "new" versus "old" style belt meshing, it may not be possible to express the data from the current PRIMER version in the older format. As a consequence it is recommended that this option is only used as a last resort.<br> <br>This output format may also be set by the preference:<br> <br>primer\*mdumm\_keyout\_format: current | V14 | V13 | V12 | V11 |

[Previous](new-dummy-replacing-one-dummy-with-another.md)  |  [Next](saving-seatbelt-definition-data-to-file-and-its-use-for-re-meshing.md)