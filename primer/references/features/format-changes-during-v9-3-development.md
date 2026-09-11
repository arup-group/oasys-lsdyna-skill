###  Format Changes During V9.3 Development

The format of this file evolved during the development of PRIMER 9.3 as described below.

Reading of earlier formats is automatic and no user intervention is required to read a 9.3RC1 or RC2 format .daf file into release 9.3, however if you propose to hand-edit older files you may need to consider the information below.

####  Direction cosines instead of Euler angles in 9.3RC1

The original format of this file, in 9.3RC1, used direction cosines instead of Euler angles to record assembly orientations; however the Euler angles were written as comment lines above these cosines. PRIMER 9.3 will read these files, but will write the new format described above using Euler angles.

If you have such an "old" file it is recommended that you read it into release 9.3 and write it out again immediately to convert it to the current format.

####  "Whole dummy" angles not present in 9.3RC2

PRIMER 9.3RC2 used Euler angles as described in the format above, but did not include the "whole dummy" orientation angles. These have been added in release 9.3 using the "label" -1.

If this line is omitted PRIMER assumes that no "whole dummy" orientation is required, making the change backwards-compatible.

[Previous](biv-the-dummy-angles-file-daf.md)  |  [Next](c-origami-tree-file-example.md)