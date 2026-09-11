####  Design Variable Files

Morph flow definitions can be written to a design variable file, which can then be passed to PRIMER as a command line argument to apply the morphing.

The design variable file is a JSON text file with the following format:


```json
[
 {
  "name": "variable_with_continuous",
  "type": "CONTINUOUS",
  "value": 0,
  "minimum": -10,
  "maximum": 10
 },
 {
  "name": "variable_with_step",
  "type": "STEP",
  "value": 0,
  "minimum": -10,
  "maximum": 10,
  "step": 2
 },
 {
  "name": "variable_with_discrete",
  "type": "DISCRETE",
  "value": 0,
  "values": [-6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6]
 }
]
```

This can be passed to the command line as follows:

>  
> *primer.exe*  *input.key* -ls\_opt= *dv.txt* -ls\_opt\_arg= *"OUTPUT: output.key"* -ls\_opt\_arg= *"REMAKE\_CONX: TRUE"* -ls\_opt\_arg= *"REMAKE\_CONX\_ERROR: TRUE"* -exit
> 

This command moves each morph point on each morph flow by the specified vector multiplied by the variable value. When writing design variable files, PRIMER will always write the variable values as 0. However, when these values are edited manually or by another program, like LS-OPT, the morph points will move as described. In the same way as morphing interactively, the nodes in relevant morph boxes will also move.

The morphing applied from the command line will only depend on the "name" and "value" properties in the JSON design variable file. The other properties have only been added for future LS-OPT development.

If no output .key file is specified with -ls\_opt\_arg= *"OUTPUT: "* , the input file will be overwritten with the model in which the morphing has been applied.

The optional arguments -ls\_opt\_arg= *"REMAKE\_CONX: TRUE"* and -ls\_opt\_arg= *"REMAKE\_CONX\_ERROR: TRUE"* turn on the remaking of connections after morphing and treat any failure to remake an initially realized connection as an Error Termination, respectively. By default, both of these arguments are TRUE but can be turned off by calling them with FALSE. If no optional argument string is specified, e.g. *REMAKE\_CONX:* , PRIMER assumes that the argument is referring to the output .key file.
[Previous](interactive-morph-flow-creation.md)  |  [Next](optimising-morphing-in-ls-opt.md)