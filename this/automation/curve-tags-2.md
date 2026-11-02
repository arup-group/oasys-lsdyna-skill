##  CURVE TAGS

In FAST-TCF any operation that uses one or more curves as an input can reference the curve using either the curve number or a curve tag. **The use of curve Tags is strongly recommended as it enables scripts to be easily modified and sections added / deleted without having to renumber all the curve references within the script.**

Curve tags are defined for a curve by adding the keyword TAG to the data extraction command followed by the tag.

| e.g. | node | 42 | force y\_dir | tag curve\_1 |
| --- | --- | --- | --- | --- |
|  | (node) | (i.d. 42) | (force in y-direction) | (tag the curve as "curve\_1") |
|  | node | "end of roof" | accel z | tag point\_2 |
|  | (node) | (i.d. "end of roof") | (z acceleration) | (tag the curve as "point\_2") |

Tags cannot begin with a numeric character, e.g. tag 1\_curve is not allowed.

If a tag is not specified for a curve then FAST-TCF will automatically generate a tag for the curve using the T/HIS curve number.

The tag for a curve can be redefined at anytime within a script using the "tag" command (see [Setting curve Labels, Titles and tags](setting-properties-for-curves.md#curve_labels)) for more details. Once a curve tag has been redefined the original definition should not be used in any following commands - a curve can only have 1 tag defined at any time.

###  Tagging curves from a T/HIS curve file

Curves read in from a T/HIS curve file can be tagged by refering to each curve in the file using a negative number:

| e.g. | tag | -1 | curve\_1 |
| --- | --- | --- | --- |
|  |  | (1st curve in the curve file) | (tag as "curve\_1") |
|  | tag | -2 | curve\_2 |
|  |  | (2nd curve in the curve file) | (tag as "curve\_2") |

If curves are read in from a T/HIS curve file then then the FAST-TCF tag will be generated using the following rules.

1. If the data extraction command contains a tag option then that tag will be used (as above).
2. If the curve file contains curve tags then they will be used if the data extraction command DOES NOT contain a tag option.
3. If no tags are specified in the file or in the data extraction command then T/HIS will automatically tag each curve as '#' where # is the internal T/HIS curve number.

In the third case, if for example there are three curves already in T/HIS, the
curves read in from the curve file will be tagged as '4', '5', '6', '7', etc. This limits
how you can refer to these curves since would not be able to multiply two curves together. For example the command op mul 4 5 tag new\_curve would multiply the curve tagged
as '4' by the number 5, not by the curve tagged as '5'.

To avoid this limitation you will need to tag your curves using either the
syntax explained above or by specifying a tag in the curve file.

###  Tagging multiple curve outputs

From T/HIS 9.2 onwards, multiple curve outputs can be generated from one FAST-TCF input line. Curve tags and labels can be specified for multiple curves using the following special syntax (note this only works on multiple curves):

* If the user specifies a wildcard in the tag or label (a "\*"), then FAST-TCF will substitute the wildcard for the number of the curve outputted (starting from 1).
* If the user specifies a "##" then the entity ID is substituted in its place which is useful if the user knows what entities are expected on output.

| e.g. | node 5:last | accel mag | tag node\_\* | lab Head Accn \* |
| --- | --- | --- | --- | --- |
|  | (node IDs. 5 to last) | (accel mag) | tags = node\_1, node\_2, etc | labels = Head Accn 1, Head Accn 2, etc |
|  | node 10:20 | accel mag | tag node\_## | lab Head Accn ## |
|  | (nodes 10 to 20) | (accel mag) | tags = node\_10, node\_11, etc | labels = Head Accn 10, Head Accn 11, etc |

###  Using Wildcards

A number of T/HIS functions and operations can be applied to multiple curves in a single command by specifying multiple curve tags using wildcards.

From T/HIS 10.0 onwards the following wildcards are supported

| **Wildcard** | **Matches** |
| --- | --- |
| \* | 1 or more characters |
| ? | a single character |
| [a-e] | matches a single character against a range of characters , 'a','b','c','d' or 'e' |
| [abc] | matches a single character against a list of characters, 'a', 'b' or 'c' |

| e.g. | operate | multiple | x\_disp\_\* | 10 | tag | x\_mul\_\* |
| --- | --- | --- | --- | --- | --- | --- |
|  | (Multiple all curves with a tag starting with "x\_disp\_" by 10 and tag the outputs as x\_mul\_1, x\_mul\_2 ... - see [PERFORMING FAST-TCF CURVE OPERATIONS](performing-fast-tcf-curve-operations.md#opers) for more details) |
|  | display | x\_disp\_\* |  |  |  |  |
|  | (Display all curves with a tag starting with "x\_disp\_" - see [Curve Display](curve-display.md#curve_display) for more details) |
|  | copy | curve\_file.cur | x\_disp\_\* |  |  |  |
|  | (Write all curves with a tag starting with "x\_disp\_" to a file called "curve\_file.cur"- see [FAST-TCF CURVE OUTPUT](fast-tcf-curve-output.md#curve_output) for more details) |
|  | csv | curve\_file.csv | curve\_1? | curve\_3[0-3] |  |  |
|  | Write curves with tags curve\_10, curve\_11, curve\_12 .... and curves with tags curve\_30, curve\_31, curve\_32, curve\_33 to a CSV file called "curve\_file.csv"- see [FAST-TCF CURVE OUTPUT](fast-tcf-curve-output.md#curve_output) for more details) |

###  Using Curve Numbers

Although it is not recommended curves can be referenced using the internal curve number instead of the curve tag. If for example the 1st curve generated by a script has the tag "curve\_1" then the following 2 commands are identical.

| e.g. | operate | multiple | curve\_1 | 10 | tag | x\_mul\_\* |
| --- | --- | --- | --- | --- | --- | --- |
|  | operate | multiple | #1 | 10 | tag | x\_mul\_\* |

If curve numbers are used within a script then T/HIS will automatically offset the curve numbers in the script by the number of curves T/HIS already has defined before the script is executed.

| e.g. | operate | multiple | #1 | 10 | tag | x\_mul\_\* |
| --- | --- | --- | --- | --- | --- | --- |

would multiply internal curve number 1 by 10 if T/HIS didn't contain any curve definitions when the script was run.

If T/HIS already contained 100 curves then the same command would multiple internal curve 101 by 10.

This means it is possible to play a script containing curve numbers multiple times within a session without having to either delete all the existing curves or modify the script each time.

###  Tagging the most recently created or highest ID curve

The most recently created/edited curve or the curve with the highest ID can be tagged with the specific commands "recent" and "highest".

| e.g. | tag | recent | curve\_tag\_1 |
| --- | --- | --- | --- |
|  | tag | highest | curve\_tag\_2 |

These commands won't be written out automatically into a FAST-TCF script, so will need to be added manually. It is worth noting that
if a curve tag starts with "recent" or "highest", then any command intended to change the tag would instead be interpreted as setting the tag of the most recent or highest ID curve, as in the above example. It is therefore recommended that curve tags should not start with "recent" or "highest".

Previous: units-1  |  Next: curve-groups-1