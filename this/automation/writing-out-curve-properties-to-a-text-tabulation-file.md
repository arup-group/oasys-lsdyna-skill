###  Writing out curve properties to a text "tabulation" file

This is achieved using the "tabulation" command. This automatically overwrites any existing file in the output directory, but only on the **first occurrence** in the input script. If this is not desired then use the "taba" command which will append an existing file on the first tab call.

The command **"tabc"**is available from T/HIS 9.2 onwards. This command appends the data into CSV format on the last line in the file. The first call to this command writes a **new line** to the file, and the subsequent calls append the end of this line. This enables the user to compare runs on a line by line basis in software such as Microsoft Excel.

Some examples of writing out curve properties to a text file are below:

| e.g. | tab output.txt | #1 | max | max y of curve #1 |
| --- | --- | --- | --- | --- |
|  | (file output.txt) | (curve number) | (maximum Y) | (description) |
|  | tab output.txt | node\_head\_accn | maxw | 1.00E-03 | 30.00E-3 |
|  | (file output.txt) | (curve tag) | (max Y in window) | (window t1) | (window t2) |
|  | taba output.txt | node\_head\_accn | min |
|  | (append output.txt) | (curve tag) | (minimum Y) |

Properties for multiple curves can be output by specifying either multiple "tab" commands or by using a curve tag containing wildcards or a curve group.

| e.g. | tab output.txt | node\_\* | max | maximum y value |
| --- | --- | --- | --- | --- |
|  | (file output.txt) | (all curves with a tag starting with node\_) | (maximum Y) | (description) |
|  | tab output.txt | &group\_1 | max | maximum y value |
|  | (file output.txt) | (all curves in group "group\_1") | (maximum Y) | (description) |

Previous: available-curve-properties  |  Next: writing-out-reporter-variables