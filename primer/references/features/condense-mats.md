###  CONDENSE MATS

Models that contain multiple definitions of the same material, for example a material card for each part cards, may be tidied up with the CONDENSE MATS function.

Duplicate materials are detected by matching type, title(if any) and then comparing each entry (using a test of 5 significant figures for floating point values other than zero). If they are found the reference PID-&gt;MAT is adjusted to make them redundant. The user is then prompted to apply the deletion function to remove them.

The following Options for Condense Mats apply.

| Curve inspection | OFF | Materials are only condensed together if the curves they refer to have the same labels. |
| --- | --- | --- |
| ***Applies to fields LCSS and LCSR on MAT24 and MAT123 only*** | ON | If all other fields match, but the curve labels referred to are different, then the curves themselves are inspected. If the curve data points match, despite having different labels, then the materials are condensed. |
| Material titles | Ignored | Materials are condensed regardless of any mismatch between their title lines. |
| ***Applies to all material types*** | Read | Materials are only condensed if their titles match. |

[Previous](renumber-selection.md)  |  [Next](renumber-includes.md)