###  Dummy/HBM and Seatsquash Setup

A floating window guides you through the process of creating the model.

The top of the window highlights in blue the step in the process you are currently at. You can move back and forward through the steps by pressing the '&lt;-' and '-&gt; buttons.

![](../Storage/primer-22-1/primer_links/sect_6/dummy_and_seatsquash/fig_41_4.png)

The first stage is to select what type of analysis you want to setup. The options are:

* Analysis type
    * Dummy/HBM &gt; Seat: Setup a combined dummy/HBM positioning and seatsquash analysis
    * Dummy/HBM: Setup a dummy/HBM positioning analysis only
* Cable type
    * Displacement based cables: A displacement is applied to the cables to ensure the dummy/HBM will end in the final position by the end of the analysis.
    * Force based cables: A constant force is applied to the cables. Using this method there is no guarantee that the dummy/HBM will end in the final position before the analysis has finished.
* Number of stages
    * One stage: Position the dummy/HBM and squash it into the seat in one stage
    * Two stage: Position the dummy/HBM in one stage and then squash it into the seat in a seconde stage
    * Multi stage: Position the dummy/HBM in more than one stages. You define the multiple intermediate stages for positioning the dummy/HBM, like move hands in one stage, move legs in second stage and so on. This gives you more control over the positions. In multi stage, only displacement based cables is supported.

If the number of stages in your setup is 1 or 2, then you will set the following values:

* Stage 1 duration
* Stage 1 settling
* Stage 2 duration (only for two stage positioning)
* Stage 2 settling (only for two stage positioning)

These values are used to calculate values in:

* DEFINE\_CURVE\_FUNCTION
* CONTROL\_TERMINATION
* DEFINE\_CONSTRUCTION\_STAGES

If you wish to update the values of these parameters please use the 'HBM Parameter Update' script. This will use your new parameters values to recalculate the keywords above.

NOTE: If you wish to use this script do not delete these parameters in your model: HBMstage, s1dur, s1set, s2dur, s2set. Also, please do not change the value of HBMstage.

[Previous](dummyhbm-and-seatsquash.md)  |  [Next](seat-setup.md)