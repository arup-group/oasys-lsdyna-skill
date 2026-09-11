####  Error Handling

When PRIMER is reading a  PRIMER spotweld file there are 2 possible actions that can be taken if an error occurs when reading the file: Either stopping the read completely when an error is found, or ignoring an error.
 ![](../Storage/primer-22-1/primer_links/sect_6/connection/read_weld_3c.gif) 
To show the two options, consider the following example. PRIMER is reading a line from the spotweld file and has already read the X, Y and Z coordinates and panels 1 and 2. Now, when trying to read the third panel, an error occurs as PRIMER reads the string 'aaaa' from the file and it is expecting to read a panel number. If Stop read if line has an error is selected PRIMER will stop and give the line number of the error. If ignore errors is selected, PRIMER will just ignore the third panel and make the weld (if possible) between panels 1 and 2 at (X, Y, Z).

[Previous](choosing-file-format.md)  |  [Next](options-0.md)