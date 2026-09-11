###  Finish Setup

Finally, if you selected a combined dummy/HBM positioning and seat squash analysis with the 'end position' method you will need to define a vector to depenetrate the dummy/HBM out of the seat so that PRIMER can calculate the start and intermediate dummy positions.

You can then create the model(s) to run in Ansys LS-DYNA. This will output a dynain file containing the final coordinates which can then be imported back into the original model.

![](../Storage/primer-22-1/primer_links/sect_6/dummy_and_seatsquash/fig_41_9.png)

Once the model(s) have been created you will need to write them out from PRIMER and then run them in Ansys LS-DYNA. This should produce a DYNAIN file for each model containing the coordinates and initial stress information from the analysis.

They can be imported back into the original model using PRIMER following the steps described [here](dummy-positioning-using-ls-dyna.md#import1).

[Previous](dummyhbm-setup.md)  |  [Next](introduction-dummy-finger.md)