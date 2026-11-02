##  INPUT FOR DATA EXTRACTION REQUESTS

Each data extraction request occupies one line, with the 'words' on the line separated by space characters.

The line starts with a keyword and the required arguments follow, then any optional requests can occur after the arguments (see later on in the manual).

ID can be a number **or a name** (enclosed in quotes ""), depending on whether the Ansys LS-DYNA version supports it in the relevant output file.

When writing out FAST-TCF scripts from T/HIS, there is an option in the 'Create' panel to write entity names (when they exist) in place of numeric IDs into any generated script.

T/HIS 9.2 onwards supports multiple data output syntax. T/HIS will read the data in one file pass, making it much quicker for larger runs. To use this in FAST-TCF you need to specify the range using a colon (:) and it must be in a single word. As well as the standard numbers you can use, there are some special words namely "all", "first" and "last" (see example).

| e.g. | whole\_model | te | lsda |
| --- | --- | --- | --- |
|  | (whole model) | (total energy) | (force lsda file) |
|  | node | 42 | force | y\_dir |
|  | (node extraction) | (i.d. 42) | (force in y-direction) |
|  | node | "end of roof" | accel | z |
|  | (node extraction) | (i.d. "end of roof") | (z acceleration) |
|  | node | 100:last | force | y\_dir |
|  | (node extraction) | all nodes from 100 | (force in y-direction) |
|  | node | all | force | y\_dir |
|  | (node extraction) | all nodes | (force in y-direction) |  |

In some situations, it may be possible to speedup the data extraction routines for FAST-TCF. A simple but effective change can be made to the FAST-TCF script such that it improves the efficiency of data extraction by an order of N items.

An example can be seen below trying to extract various nodes, tag them and then label it.

node 6600000 b y tag by6600000 label by6600000
node 6600001 b y tag by6600001 label by6600001
node 6600002 b y tag by6600002 label by6600002
node 6600003 b y tag by6600003 label by6600003
node 6600004 b y tag by6600004 label by6600004

While these are perfectly valid FAST-TCF lines and will parse correctly, these can be rewritten into:

node 6600000 b y tag by6600000
node 6600001 b y tag by6600001
node 6600002 b y tag by6600002
node 6600003 b y tag by6600003
node 6600004 b y tag by6600004
label by6600000 by6600000
label by6600002 by6600002
label by6600003 by6600003
label by6600004 by6600004

Externally, to a real person, these lines can be seen as equivalent to the first example. However, internally, it's another matter. In the first example, T/HIS would instead have to process the first line, come out of the reading loop and then back into it again to parse the second line and so on until completion. The change effectively allows T/HIS to bundle all of the "node" commands together, allowing them to be read in a singular, much more efficient pass and then apply the labels after this data extraction has been completed.

In this example, "label" is the additional option that has been given to the read line, however this would be the case for any other additional option. Unfortunately it's important to note that this means that the speedup will only work if the read line does not contain any additional options on it and the read commands are placed together like in the example. Any additional options that you may have must be separated from the read commands like the example above to work.

The speedup gained is directly linked with the number of items that are being read in so while you would see some gain for a small number of items, the speedup is much more noticeable when handling a large number of items.

Previous: input-syntax-to-load-other-files  |  Next: selecting-models