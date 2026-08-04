##  NODE IMPORT

## The NODE IMPORT function is a tool available from the MAIN top box, to give the master panel shown in this figure.

## ![](../Storage/primer-22-1/node-import-2023-03-03-3.png)

| Step 1  <br><br> ![](../Storage/primer-22-1/node-import-2023-03-03-1.png)<br><br><br><br>The nodal coordinates of the model will be replaced with those from another keyword file. There are three ways to import the nodal coordinates. Node and element or all data can be imported from another keyword file or deformed geometry data can be imported from D3PLOT.<br> <br>If importing from an existing file, then choosing only to read the node and element data gives a faster read-in. If other keywords are needed, then select the 'Read all entities' option.<br> <br>In case of importing data from another keyword file, select the 'Read only nodes and elements from existing file' or 'Read all entities from existing file' option and provide the location of the .key file (Step 2a and 3a). After file selection, press Next. To import the deformed geometry data directly from D3PLOT, select the 'Import deformed geometry from D3PLOT' option and press Next (Step 2b and 3b). |
| --- |

| Step 2(a) (Read only nodes and elements/all entities from existing file)  <br>You can now select to import the new nodal coordinates from all nodes in the keyword file, all parts, or just a selection of parts. Press Next.<br> ![](../Storage/primer-22-1/primer_links/sect_6/nodeimport/nodeimport2.PNG) |
| --- |

| Step 3(a) (Read only nodes and elements/all entities from existing file)  <br>By default only the new nodal coordinates will be imported. There are other options for data that can be updated in addition to the new coordinates. Make your selection and click Apply .<br> <br><br> ![](../Storage/primer-22-1/node-import/node-import-2025-08-26.png) |
| --- |

| Step 2(b) (Import deformed geometry from D3PLOT)  <br>![](../Storage/primer-22-1/primer_links/sect_6/nodeimport/nodeimport4.PNG)After clicking on Next ', a linked D3PLOT session will be launched (if D3PLOT is not already linked) and the 'Write' panel will be displayed in D3PLOT<br> <br>Select the required options for the data that needs to be imported (Nodal coordinates, initial stresses, initial strains, etc.) from this panel and click Apply . |
| --- |

| Step 3(b) (Import deformed geometry from D3PLOT)  <br>The data will be received in PRIMER and the Node import panel will display the selection of data from D3PLOT. Change the selection if required and click Apply. The data will be imported into the existing model<br> <br><br> ![](../Storage/primer-22-1/node-import/node-import-2025-08-26-1.png) |
| --- |

[Previous](meshing-limitations.md)  |  [Next](orient-translating-rotating-scaling-reflecting-projecting.md)