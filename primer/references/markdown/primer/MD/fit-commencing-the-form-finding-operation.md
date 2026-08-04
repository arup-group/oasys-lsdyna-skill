####  FIT: Commencing the Form-Finding Operation

| ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fig_7_2_3_3k.gif)Once the chassis mesh, dimensions and basic parameters are defined you can initiate the form-finding process with the FIT command (Play icon). This loops through steps (1) to (4) as follows:<br> <ol style="font-size: 14.6667px;"> <li>For each point on the chassis mesh a new position is computed that is closer to the dummy structure, and the point is moved to that location.</li> <li>Contact between each point and dummy is checked at this new location, and the point is pushed out again if necessary to prevent any penetrations.</li> <li>Convergence is checked by comparing the current chassis mesh with that at the previous iteration, and form-finding halts if the change is less than the specified convergence tolerance.</li> <li>Form-finding also halts after the user-defined number of iterations so that you can check progress periodically.</li>
</ol> |
| --- |

| The following is a typical sequence showing fitting from initial position to final convergence: between 100 and 200 iterations is typical for most belts.<br> <br><br>| ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fig_7_2_3_3l.gif) | ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fig_7_2_3_3m.gif) |<br>| --- | --- |<br>| Fitting #0: At initial position | Fitting #1: After 50 iterations |<br>| ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fig_7_2_3_3n.gif) | ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fig_7_2_3_3o.gif) |<br>| Fitting #2: After 100 iterations | Fitting #1: Converged at 131 iterations | |
| --- |

When fitting halts, due either to (3) or (4) above, you can do any of:

* Continue the process from where it stopped with no changes by pressing FIT again. It will be necessary to do this several times to get the belt to converge when the number of iterations required is larger than the periodic halt (#iter) value.
* Adjust some PARAMETERS, then continue from where it stopped by pressing FIT again. But make sure that the changed parameters are valid when applied to the current, partially fitted position. If they aren't return to the start with RESET and start again using FIT.
* Adjust PARAMETERS and/or DIMENSIONS and restart from the initial projected-out position, using the revised values, by pressing RESET then FIT.
* Halt the fitting process at any iteration with the PAUSE button. The same can be done with the generic "Stop" button.
* When the fitting is halted, proceed to the next iteration with the STEP button.
* Or if you are happy with the converged shape press ACCEPT which will: 

    * Save the current path, dimensions and fitting parameters permanently in the current seatbelt definition. Prior to this point you were working with a scratch copy.
    * From the main seatbelt menu you can go ahead and mesh the result with actual Finite Elements.

| From version 20 onwards, you have the option to apply the fitting process for a specific belt segment instead of the whole belt by setting the radio button under the **FIT/PAUSE/RESET/STEP** buttons to 'Only' and choosing the number of the segment to be fitted. This could save some processing time if you're only interested in fitting a single belt segment through complex structures and doing any necessary path changes before fitting the whole belt.<br><br>Reminder that a ‘segment’ is defined as the stretch between end and slipring or between sliprings. If ‘acute points’ are used instead of sliprings these demarcate sliprings as well. Segments are numbered sequentially from 1. | ![](../Storage/primer-22-1/fit_single_segment.PNG) |
| --- | --- |

[Previous](special-treatment-of-known-intermediate-points.md)  |  [Next](parameters-2-more-about-controlling-the-form-finding-process-1.md)