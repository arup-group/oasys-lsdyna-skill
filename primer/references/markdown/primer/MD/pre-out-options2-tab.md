###  

#### Pre-out: Options2 Tab

### 

This panel contains further miscellaneous options which influence output.

 ![](../Storage/primer-22-1/primer_links/sect_3/images/output_check.JPG) 

Write parameters as values applies only to input decks that contain \*PARAMETER cards. If selected then instead of writing out the parameter names ( &name ) the actual numeric values will be written instead. This can be useful when writing Ansys LS-DYNA keyword decks for import into 3rd party software that cannot handle parameters. However, latent and encrypted parameters are still written out as &name even when this option is selected (instead of the default value of '0') to avoid confusion with genuine values of '0' (this only applies for output formats that support parameters).

Write all solids in 2-line format means that all element solids will be written in the newer 2 line format (EID and PID on the first line, up to 10 nodes on the second line).When this option is NOT set, PRIMER will write out solid elements in the older one line format if the solids have 8 nodes or less.

Write overflowing character data is about data fields with character strings longer than the field width. Overflow of character data fields is detected and will cause the keyword output to be aborted with an error message. Such overflows will be detected during [Model Check](model-check.md#39MODELCHECK) so you will receive a warning that they may occur.
 
**Write out in fixed format** will write the keywords out with spaces between the fields. The popup has options to write the keywords out in free format which will write the fields separated by commas.
 
Older versions of PRIMER did not check for character field overflow and would potentially overwrite the next data field or overflow lines. The default is to perform this check, but you can select this option to suppress it and revert to earlier behaviour. This is not recommended, but it may be expedient if file comparison is required.

 [Previous](pre-out-options-tab.md)  |  [Next](keyword-promotion-explicit-per-keyword-promotion-to-i10-and-large-formats-using-the-and-suffices.md)