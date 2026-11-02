###   Run

This menu allows the user to run a FAST-TCF file from within T/HIS. After the user has selected the FAST-TCF file T/HIS scans the file for data requests and model requests to see what input the FAST-TCF file requires. Note that there must be a model read into T/HIS before a FAST-TCF file that contains data extraction can be run.

The next FAST-TCF command line is displayed in red in the upper text area, at this point the user can select to Play the FAST-TCF file or Step through it line by line. After every line of FAST-TCF the resulting command in T/HIS is shown in the lower text area. Select End during stepping through the lines to go to the end of the file. Reread will re read the file and start back at the beginning.

The Model Mapping option allows the user to define which model in T/HIS should be used for the equivalent model number in the FAST-TCF script. The model number zero is equivalent to the default model in FAST-TCF if no models are defined. The default model mapping will use the same model numbers as in the FAST-TCF script.

Auto confirm text boxes will force T/HIS to confirm any text boxes that should appear in the interactive playback of a FAST-TCF script (such as HIC results and so on).

The FAST-TCF script will ignore any existing T/HIS curves and their tags. This guarantees that the user can run a single FAST-TCF file many times and it will only use the new curves created by FAST-TCF.
 ![](../Storage/this-23-0/this%20-%20links/sect_5/fig_5_14_2.gif)

Previous: create  |  Next: titleaxeslegend-options