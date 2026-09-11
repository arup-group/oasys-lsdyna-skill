###  Dummy/HBM Setup

The next stage will ask for data required for the dummy positioning. This includes things like which nodes the cables should be attached to, the analysis time, the stiffness for the cables, etc.

![](../Storage/primer-22-1/primer_links/sect_6/dummy_and_seatsquash/fig_41_7.png)

This data is entered in the menu in the bottom right hand corner of PRIMER.

The steps to enter the data are similar to those described [here](dummy-positioning-using-ls-dyna.md#dynapositioning) and [here](advanced-hbm-positioning-using-ansys-ls-dyna.md).

![](../Storage/primer-22-1/dummyhbm-setup/dummyhbm-setup-2025-04-30.png)

To set up the analysis you need to define a starting position for the dummy/HBM, an intermediate position (if the two stage option was selected) and a final position. There are two methods for defining these positions:

* End Position: You define the final position and PRIMER will calculate the starting and intermediate positions. This is the quickest way to define the positions.
* Sequential: You define the start, intermediate and final positions. This takes more time to setup, but gives you more control over the positions.

You can define multiple end positions. PRIMER will create a model for each one.

####  6.15
.3.1 Multi Stage Setup

If multi stage option was selected during the analysis setup, you need to define multiple intermediate positions for the dummy/HBM.

![multi_stage](../Storage/primer-22-1/primer_links/sect_6/dummy_and_seatsquash/fig_41_10.png)

Move the dummy/HBM to desired position using the options in the menu in the bottom right hand corner and hit Add New Pos to add the position as an intermediate position. To update an existing intermediate position, select the desired Intr Position and move the dummy/HBM. Select tick boxes in each row to write out the dynain files at the end of the selected stages during DYNA run. It will allow you to produce variations of the final position.

![multi_inter](../Storage/primer-22-1/primer_links/sect_6/dummy_and_seatsquash/fig_41_11.png)

[Previous](seat-setup.md)  |  [Next](finish-setup.md)