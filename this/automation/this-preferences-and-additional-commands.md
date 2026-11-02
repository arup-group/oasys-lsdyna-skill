###  T/HIS preferences and additional commands

There are a number of additional commands that improve the functionality of FAST-TCF such as labeling, resetting values, tagging curves and defining variables. All following words must be on the same line. The variables section is explained in more detail below.

| e.g. | report | 3ms | err | hic |
| --- | --- | --- | --- | --- |
|  |  | (FAST-TCF.clp written to) | (FAST-TCF.err written to) | (FAST-TCF.hic written to) |
|  | define | file | lsda |
|  |  |  | (define lsda as default file) |
|  | copy | output.cur | #1 |
|  |  | (file name) | (copy curve #1 into file name) |
|  | define | var | date | 30\_Nov\_2005 |
|  |  | (define variable) | (variable name) | (variable value) |

| Description | keyword | second word | third word | fourth word | notes |
| --- | --- | --- | --- | --- | --- |
| Autoscale plot | ac | - | - | - | for use in interactive playback |
| Auto update plot | auto | on or off | - | - | whether to auto update the plot on data read / font updates and so on. Please note this is reset to ON after any font definition. |
| Plot graphs | plot | - | - | - | for use in interactive playback |
| Append into file | app | filename | curve name | - | will append any previous file |
| Condense | condense | - | - | - | Condense the curve numbers |
| Convert | convert | on or off |  |  | Automatically convert curves from ms units to s(econds) before applying any filters and then convert back again. |
| Define FAST-TCF variable | def | var | name (without "$") | value | see FAST-TCF variables section |
| Define error fail value | def | err | error value (integer) | - | default is 10 errors before T/HIS will stop |
| Define default file | def | file | lsda | - | will always check that T/HIS can get the output from this file, if not then the original default file will be chosen (see data extraction table). This file can still be overwritten on the actual input line |
| ascii |
| xtf |
| thf |
| default |
| Define default title | def | tit | title word 1 | title word 2 etc |  |
| Define user line | def | user | user line number (1 to 6) | font size (8 to 24) | rest of line is the label |
| Define surface integration | def | surf | shell / beam / thickshell | layer number | t = top, m = middle, b = bottom, or use a number for the integration point (see [INPUT FOR DATA EXTRACTION REQUESTS](input-for-data-extraction-requests.md#surface) ) |
| Define ssd component | def | ssd\_comp | amplitude / angle | - | Define which value is read for each data component in a Steady State Dynamics (ssd) analysis (see [INPUT FOR DATA EXTRACTION REQUESTS](input-for-data-extraction-requests.md#ssd) ) |
| CSV field separator | def | csv\_separator | comma |  | used to change the field separator before reading a CSV file. |
| tab |
| space |
| Delete | del | curve #1 to curve #n | - | - | Delete curves |
| Exit reading file | exit | - | - | - | stops reading file here |
| ISO MME curve label format | isolabel | "label" or "code" | - | - | sets the curve label format when reading ISO MME data |
| Model set | mod | model # or "no" or "all" | - | - | sets the model number for extracting curve data |
| Regularise filtering | reg | time interval, or "off" | - | - | sets the auto regularise interval and turns it on, or turns it off |
| Report files written | rep | 3ms | - | - | To turn off see the **reset2** keyword |
| asi |
| err |
| hic |
| thiv |
| tti |
| Reset | reset1 | - | - | - | All curves and curve tags deleted |
| reset2 | - | - | - | Plot setup defaulted and all style definitions removed. Report files not written |
| reset3 | - | - | - | Variable names and default title removed |
| User-defined colours | col | colour number (1-6) | RRGGBB (6-digit hexadecimal) | - | 6-digit hexadecimal format for rgb colour values. |
| col\_rgb | colour number (1-6) | r g b (3 integers in range 0-255, separated by spaces) | - | Seperate integer format for rgb colour values. |

Previous: fast-tcf-curve-output  |  Next: limits