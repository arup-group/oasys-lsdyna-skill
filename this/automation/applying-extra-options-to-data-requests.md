##  APPLYING EXTRA OPTIONS TO DATA REQUESTS

Extra options can be used after a data component extraction, or a curve operation. After the basic request for a particuar component and particular entity have been made, the following extra data on the line is recognised to manipulate the curve further. This includes options to label a curve, scale it, write it out and so on.

Each request is executed in the order on the line, **if the curve label is used, it must be the last input on the line.**

| e.g. | no 54 | accel mag | xsc 1000 ysc 0.0001 | hic | lab Head Accn |
| --- | --- | --- | --- | --- | --- |
|  | (node i.d. 54) | (accel mag) | (scale x and y) | (obtain hic value) | (curve label) |
|  | no 1 | accel mag | filter c60 | append output.cur |
|  | (node i.d. 1) | (accel mag) | (filter with C60) | (append the curve to a file) |
|  | no 1 | accel mag | tag node\_1\_acc |
|  | (node i.d. 1) | (accel mag) | (tag the curve "node\_1\_acc" for ease of use later in the script) |

| Description | extra option word | following word #1 | following word #2 | notes |
| --- | --- | --- | --- | --- |
| 3ms clip | 3ms | - | - | Curve is squared and then square rooted to remove -ve values <br>Curve is truncated around 3ms values - only 3ms part is left |
| Append into file | app | filename | - | Appends into curve file, if it doesn't exist - create it |
| Combine | com | curve #2 | - | Y-value curve #1 vs X-value curve #2 |
| Copy into file | cop | filename | - | Copy will overwrite any previous instance of the file |
| Error function | err | curve #2 | - |  |
| HIC | hic, hic15, hicd | - | - | Curve is squared and then square rooted to remove -ve values, an identical curve is outputted |
| Filtering | fil | fir | - |  |
| c60 |
| c180 |
| c600 |
| c1000 |
| X scale factor | xsc | scale factor | - |  |
| Y scale factor | ysc | scale factor | - |  |
| Label | lab | label word #1 | label word #2 etc | Keyword and label must be at the end of the line |
| Reference tag | tag | tag word | - | Invalid words: "style", "xax", "yax", "title" |
| ASCII file request | ASC | - | - |  |
| LSDA file request | LSD | - | - |  |
| THF file request | THF | - | - |  |
| XTF file request | XTF | - | - |  |

###  Using extra options on multiple curve outputs

From T/HIS 9.2 onwards, multiple curve outputs can be generated from one FAST-TCF input line. Unfortunately most of the extra options displayed below will NOT work on these multiple outputs. However, support has been added to allow tagging and labeling of all the multiple curves outputted in one go (see [Tagging multiple curve outputs](curve-tags-2.md#multi-tags)).

Previous: range-of-curve-operation-commands  |  Next: setting-properties-for-curves