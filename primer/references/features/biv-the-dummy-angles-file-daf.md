##  Appendix B.iv: The Dummy Angles File (.daf)

From release 9.3RC1 onwards PRIMER can read and write "Dummy Angle" files, extension .daf.

The following formatting rules apply:

* These are simple ASCII files, intended to be editable by hand if required.
* All lines starting with $ , % or # are treated as comment lines.
* All numerical data is in free format, however each section of data should be on a single line.
* All angles are in degrees, and should be in the range +/-180.0

The file format is: (note that this format evolved during release 9.3 development, see [Format Changes](format-changes-during-v9-3-development.md#f_change)below for details)

| $ Dummy Angles File. Generated on *&lt;current date&gt;*  <br>$ Model title: *&lt;current model title&gt;*<br> <br>&lt;... any number of comment lines starting with $, % or # ...&gt;<br> <br>These comment lines are remembered, and will be copied to any newly written file for this model. <br>All comment lines up to, but not including, the " $ H-Point ... " line are saved. |
| --- |
| The H-Point location. Note that its "label" field is always zero. |
| $ H-Point | X position | Y position | Z position |
| 0 | *&lt;X coord&gt;* | *&lt;Y coord&gt;* | *&lt;Z coord&gt;* |
| The "whole dummy" angles. Note that their label field is always -1. |
| $ Whole Dummy | X Angle | Y Angle | Z Angle |
| -1 | *&lt;Theta X&gt;* | *&lt;Theta Y&gt;* | *&lt;Theta Z&gt;* |
| Then each assembly's title, label and angles are listed.<br><ul> <li>These do not have to appear in numerical order, although this is recommended for clarity. </li> <li>The title is a comment line for ease of reading: it is ignored when the file is read, and need not match the existing title of assembly &lt;n&gt; </li> <li>If an assembly does not have an angle specified in this file its current angle will not be changed when the file is read. <br> </li> </ul> |
| $ Assembly #1 title |
| 1 | *&lt;Theta X&gt;* | *&lt;Theta Y&gt;* | *&lt;Theta Z&gt;* |
| $ Assembly #2 title |
| 2 | *&lt;Theta X&gt;* | *&lt;Theta Y&gt;* | *&lt;Theta Z&gt;* |
| And so on for all assemblies in the Dummy |

Here is an example of an actual file:


```
$ Dummy Angles File. Generated on Wed Aug 27 13:46:49 2008
$ Model title: FT-ARUP HYBRID III 50TH - VERSION 5.1S2 (MM, TON, S)
$
$ The comments on this line, and all following up to the "H-Point"
$ line below will be saved and written out again.
$
$ H-Point X position Y position Z position
0 6.8459E+002 0.0000E+000 0.0000E+000
$
$ Whole Dummy X Angle Y Angle Z Angle
$
-1 0.0000E+000 1.0000E+001 1.8000E+002
$
$ Assembly X Angle Y Angle Z Angle
$
$ Lower Torso
1 0.0000E+000 0.0000E+000 0.0000E+000
$ Thorax
2 0.0000E+000 0.0000E+000 0.0000E+000
$ Head & Neck
3 0.0000E+000 4.9999E+000 0.0000E+000
$ Upper leg left
4 0.0000E+000 1.8107E+001 0.0000E+000
$ Upper leg right
5 0.0000E+000 0.0000E+000 0.0000E+000
$ Lower leg left
6 7.1490E-004 5.0000E+001 0.0000E+000
$ Lower leg right
7 5.2281E-004 2.7816E+001 0.0000E+000
$ Foot left
8 -1.6916E-003 1.7390E+001 0.0000E+000
$ Foot right
9 -1.6445E-003 0.0000E+000 -1.4572E-004
$ Yoke left
10 3.8573E-004 2.1671E-004 -5.0000E+001
$ Yoke right
11 -3.8573E-004 -1.5796E-004 -5.0000E+001
$ Upper arm left
12 1.2956E-004 -1.5649E-004 1.0004E-001
$ Upper arm right
13 -4.7659E-004 2.2656E-004 -1.5000E+001
$ Elbow left
14 3.8414E-004 -1.4245E-004 5.5000E+001
$ Elbow right
15 0.0000E+000 0.0000E+000 5.5000E+001
$ Lower arm left
16 6.8736E-004 0.0000E+000 9.2774E+001
$ Lower arm right
17 -1.0686E-004 -4.4135E-004 6.1678E+001
$ Wrist left
18 -1.4033E-004 -1.2171E-003 -9.0001E+001
$ Wrist right
19 2.6753E-004 0.0000E+000 -9.0000E+001
$ Hand left
20 -4.7274E-004 0.0000E+000 -1.9801E+001
$ Hand right
21 0.0000E+000 1.6804E-004 2.3132E+001
$ <End of file>
```
[Previous](deleting-position-data-manually.md)  |  [Next](format-changes-during-v9-3-development.md)