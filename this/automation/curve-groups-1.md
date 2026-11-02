##  CURVE GROUPS

Curve groups can be defined within FAST-TCF scripts using the  **cgroup**  keyword. After a curve group has been defined in a FAST-TCF script it can then be used as an input to some FAST-TCF commands. Each curve group should be given a unique name within the FAST-TCF script.

| Keyword | Second word | Third word | following word | notes |
| --- | --- | --- | --- | --- |
| cgroup | create | name | - | Create a curve group called "name". If the name contains any spaces then it should be enclosed in quotes ("name with space") |
| add | name | curve list | Adds a list of curves to the curve group called "name". If the name contains any spaces then it should be enclosed in quotes ("name with space"). The curve list should be a list of curve tags. |
| remove | name | curve list | Removes a list of curves from the curve group called "name". If the name contains any spaces then it should be enclosed in quotes ("name with space"). The curve list should be a list of curve tags. |

| e.g. | cgroup | create | group\_1 |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
|  | (Create a curve group called "group\_1") |
|  | cgroup | add | group\_1 | curve\_1 | curve\_2 |  |
|  | (Add curves with tags "curve\_1" and "curve\_2" to group "group\_1") |
|  | cgroup | create | "Group 2" |  |  |  |
|  | (Create a curve group called "Group 2") |
|  | cgroup | add | "Group 2" | curve\_1\* |  |  |
|  | (Add all curves with a curve tag containing "curve\_1" to group "Group 2") |
|  | cgroup | remove | "Group 2" | curve\_11 |  |  |
|  | (Remove curve with tag "curve\_11" from group "Group 2") |

To use a curve group as the input to another FAST-TCF command the curve group name is preceeded by an &. If a curve group name contains spaces then the name should be enclosed in double quotes and the & should be before the first ".

| e.g. | operate | multiple | &group\_1 | 10 | tag | output\_\* |
| --- | --- | --- | --- | --- | --- | --- |
|  | (Multiple all curves in curve group "group\_1" by 10 and tag the outputs as output\_1, output\_2 ...\_) |
|  | operate | multiple | &"Group 2" | 10 | tag | output\_\* |
|  | (Multiple all curves in curve group "Group 2 " by 10 and tag the outputs as output\_1, output\_2 ...\_) |

Curve Groups can currently be used

* As the first curve input in all of the [**operate**](performing-fast-tcf-curve-operations.md#opers)commands
* Within the list of curves specified as input to [curve range](range-of-curve-operation-commands.md#oper_multiple)functions.
* To select a group of curves for the   **[display](curve-display.md#curve_display)**  command.
* When [outputting curves](fast-tcf-curve-output.md) to T/HIS curve files and CSV files.

Previous: curve-tags-2  |  Next: performing-fast-tcf-curve-operations