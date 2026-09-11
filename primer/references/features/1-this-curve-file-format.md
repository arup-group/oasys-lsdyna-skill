###  (1) T/HIS Curve File Format

This section describes the format of a T/HIS "curve" file.

| Line 1 | Title |
| --- | --- |
| Line 2 | X axis label |
| Line 3 | Y axis label |
| Line 4 | Curve label |
| Line 5 | X, Y point 1 |
| Line 6 | X, Y point 2 |
| ... |  |
| Line n+4 | X, Y point n |

The X and Y values can be in any format as long as the two values are separated by a space or a comma.

A comment line may be included anywhere in the file by starting the line with a '$'.

Several curves can be put in one file sequentially, separated by the word CONTINUE.

The title and three label lines must be present for each curve.

[Previous](d3plotptf-file-output.md)  |  [Next](2-raw-x-y-file-formatcsv-format.md)