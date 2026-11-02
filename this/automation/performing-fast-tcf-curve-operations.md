##  PERFORMING FAST-TCF CURVE OPERATIONS

| Description | keyword | following words |
| --- | --- | --- |
| Curve operation | oper | oper command + necessary words (depending on operation) |

Many curve processing operations and functions are available. The syntax is common for all types of curve operation:

1. The first word is oper and is followed by:
2. The operation/function name e.g. ADD, INT.
3. The required number of arguments for the operation, e.g. ADD requires two arguments, a curve and either a curve or a value.
4. The remainder of the line may contain optional requests.
5. Any optional requests can occur after the arguments.
6. Curve numbers must be in the format: #&lt;curve number&gt;
7. An output curve is always needed - for operation commands such as hic, hicd, tti, 3ms, err, the curve will be copied and the operation is executed on the copied curve.
8. A curve tag containing a wildcard or a curve group can be specified as the first curve input for any curve operation. If a curve tag contains a wildcard or if a curve group is specified then the curve operation will be repeated for each curve that either the tag matches or is in the curve group.

| e.g. | oper hic | node\_acc | 1.0 | 15E-3 | label Hic-ed node accn |
| --- | --- | --- | --- | --- | --- |
|  | (hic) | (curve tag) | (scale=1.0) | (15ms period) | (label) |
| In T/HIS 9.2 onwards, the user can operate on multiple input curves (only the first curve can be multiple at the moment) using the wildcard "\*". For example, to multiply all curves starting with the tag **acc** : |
| e.g. | oper mul | acc\* | 9810.0 |  |  |
|  | (multiply) | (on all curves with tag acc\*) |

Previous: curve-groups-1  |  Next: standard-operation-commands