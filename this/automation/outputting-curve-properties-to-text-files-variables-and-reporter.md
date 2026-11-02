##  Outputting curve properties to text files, variables and REPORTER

These requests output a curve property (eg its maximum Y value) into a specified tabulation file, to a REPORTER variable in a text file, or into a variable within FAST-TCF.

| Output type | keyword | 2nd word | 3rd word | 4th word | extra words | Format (optional) | variable word | variable name | description words | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Tabulation file | tab | filename | curve # | property to output | if values needed | format | varf | variable name | description |  |
| Tabulation file append | taba | filename | curve # | property to output | if values needed | format | varf | variable name | description |  |
| Tabulation file (csv) | tabc | filename | curve # | property to output | if values needed | format | varf | variable name | description | Each output is appended to the current line in the file. |
| Tabulation file (csv) | tabcr | filename | curve # | property to output | if values needed | format | varf | variable name | description | Each output is appended to the current line in the file, followed by a carrage return so that the next output starts a new line. |
| FAST-TCF variable | varf | variable name | curve # | property to output | if values needed | format | - | - | description |  |
| REPORTER variable | var | variable name | curve # | property to output | if values needed | format | varf | variable name | description |  |
| REPORTER variable append | vara | variable name | curve # | property to output | if values needed | format | varf | variable name | description |  |

Previous: pre-image-output  |  Next: available-curve-properties