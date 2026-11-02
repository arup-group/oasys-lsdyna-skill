###  Description

From T/HIS 9.3 onwards, the description specified as part of the output for a curve property can contain the following keywords that will automatically be replaced with the corresponding curve property.

| keyword | Curve Property |
| --- | --- |
| {tag} | FAST-TCF curve tag |
| {label} | Curve label |
| {id} | Entity ID that the curve was created from |
| {model} | Model ID curve was created from |

| e.g. | tab output.txt | head | max | Max accl of node {id} |
| --- | --- | --- | --- | --- |
|  | (file output.txt) | (curve tag) | (maximum Y) | (description) |
|  | tab output.txt | head | max | Model {model} max accl of node {id} |
|  | (file output.txt) | (curve tag) | (maximum Y) | (description) |

Previous: format-1  |  Next: fast-tcf-curve-output