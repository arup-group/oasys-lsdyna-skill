####  Mismatched Data in Row/Column Fields

In the examples above we have:

>  
> 
> | **Entity type** | **1** | **2** | **3** | **4** | **5** | **6** |
> | --- | --- | --- | --- | --- | --- | --- |
> | SPHERICAL joints, data fields | N1 | N2 | RPS | DAMP |  |  |
> | REVOLUTE joints, data fields | N1 | N2 | N3 | N4 | RPS | DAMP |
> | CYLINDRICAL joints, data fields | N1 | N2 | N3 | N4 | RPS | DAMP |
> 
> 

Therefore column #3 may contain RPS or N3 , and column #4 may contain DAMP or N4 . This is handled as follows:
 
![](../Storage/primer-22-1/primer_links/sect_5/5a/kwe_10.png)
 
The acronym header button shows the various entries, here RPS / N3 . In addition hovering the mouse over that button, as shown here, displays the details of that row/column contents by suffix type.
 
The data rows contain the relevant data. Here the first three entries for SPHERICAL joints contain an RPS value of 1.0, and the remaining rows show N3 node values.
 
The keyword editor always "knows" the type of the data in a given field, and processes it accordingly. This is significant when multiple rows are edited as described in [COMMENT](comment.md#multiple).
 [Previous](limiting-the-rows-displayed.md)  |  [Next](sorting-rows-by-data-field.md)