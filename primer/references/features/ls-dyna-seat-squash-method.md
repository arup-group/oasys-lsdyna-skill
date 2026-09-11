####  Ansys LS-DYNA Seat Squash Method

#####  Process description

| ![](../Storage/primer-22-1/primer_links/sect_6/seatfoamcompression/method2process1.gif) | **Initial state: model with penetration**<br> <br>Cut section through dummy and seat showing initial penetration between dummy components and seat foam.<br> <br>The dummy is at the correct H-point but penetrates the seat. |
| --- | --- |
| ![](../Storage/primer-22-1/primer_links/sect_6/seatfoamcompression/method2process2.gif) | The dummy is moved from its initial H-point position, following the direction prescribed by the user until the contact with the seat top shell part has no penetration.<br> <br>The dummy and the seat components that you defined as non-deformable are then rigidified.<br> <br>Any contacts that you identify as redundant are then deleted.<br> <br>The complete input deck for the Ansys LS-DYNA seat-squash analysis is set-up.<br> <br>The user tidies, checks and modifies the Ansys LS-DYNA input file as required and then runs the analysis. |
| ![](../Storage/primer-22-1/primer_links/sect_6/seatfoamcompression/method2process3.gif) | **Final state: Seat foam compressed**<br> <br>When the Ansys LS-DYNA analysis terminates it will write a dynain file that contains the coordinates and initial stresses for the seat foam (and possibly other parts too)<br> <br>The user imports the data written out in the dynain file. The model now contains the deformed geometry and initial stress of all the **DEFORMABLE** parts<br> <br>The seat foam components are now in their compressed state and the contact between seat and dummy is de-penetrated. |

| Step 1  <br>Before you go any further you should save your model. PRIMER Will prompt you to save your model as the seat squash changes are irreversible (although you can import coordinates from a dynain file to effectively do an 'undo' See for more details).<br> <br>Once you have saved your model press Next<br> <br><br> ![](../Storage/primer-22-1/primer_links/sect_6/seatfoamcompression/method2step1.gif) |
| --- |

| Step 2  <br>You will be asked to move your dummy to the correct H-point location. Position the dummy by either using the [orient menu](orient-translating-rotating-scaling-reflecting-projecting.md)or [dummy positioning menu](dummies-positioning-occupants.md).<br> <br>Once this is done press Next<br> <br><br> ![](../Storage/primer-22-1/primer_links/sect_6/seatfoamcompression/method2step2.gif) |
| --- |

| Step 3  <br>Select all of the parts that make up the seat using the standard object menu.<br> <br>To continue press Next<br> <br><br> ![](../Storage/primer-22-1/primer_links/sect_6/seatfoamcompression/method2step3.gif) |
| --- |

| Step 4  <br>Select the all the **DEFORMABLE** parts of the seat structure using the standard object menu. PRIMER Will automatically select any parts that use a foam material. Typically, you should select the foam components and null shells on the surfaces. You can add and/or change this selection as required. PRIMER Will rigidify any parts that are not deformable to make the Ansys LS-DYNA analysis quicker.<br> <br>To continue press Next<br> <br><br> ![](../Storage/primer-22-1/primer_links/sect_6/seatfoamcompression/method2step4.gif) |
| --- |

| Step 5  <br>Select the dummy components. You can use the DUMMY... option in the standard object window.<br> <br>To continue press Next<br> <br><br> ![](../Storage/primer-22-1/primer_links/sect_6/seatfoamcompression/method2step5.gif) |
| --- |

| Step 6  <br>Select any parts of the dummy that you want to keep deformable using the standard object menu. Typically, you would not select any parts so the entire dummy is rigidified. However, you may want to keep some parts deformable so you can change this selection as required. PRIMER Will rigidify any parts that are not deformable to make the Ansys LS-DYNA analysis quicker.<br> <br>To continue press Next<br> <br><br> ![](../Storage/primer-22-1/primer_links/sect_6/seatfoamcompression/method2step6.gif) |
| --- |

| Step 7  <br>To select/create the contact between the seat foam and the dummy, you can use the standard popup functions (right click). You can then Pick, Select an existing contact or Create a new one.<br> <br>Once the contact has been selected/created press Next<br> <br><br> ![](../Storage/primer-22-1/primer_links/sect_6/seatfoamcompression/method2step7.gif) |
| --- |

| Step 8  <br>In the simplest seatsquash model the only contact that you will need is between the dummy and the seat. Any other contacts that are present in the model will just slow the analysis down. PRIMER Will prompt you to delete any contacts which it thinks are unnecessary. By default, all contacts except the contact defined in step 7 are chosen. Change this as required.<br> <br>When the relevant contacts are selected press Next<br> <br><br> ![](../Storage/primer-22-1/primer_links/sect_6/seatfoamcompression/method2step8.gif) |
| --- |

| Step 9  <br>Define the dummy displacement increment at each de-penetration iteration. X, Y, and Z increments are given for each iteration to move the dummy out of the seat. As this is only going to be used to move the dummy out of the seat the iteration can be as large as you like.<br> <br>You can set the maximum number of iterations that PRIMER will try to do when moving the dummy out of the seat.<br> <br>If you want to see the progress of the seatsquash then select the Redraw after each iteration checkbox. This will make the process much slower so if you want, you can turn it off.<br> <br>Some tet meshes can be very badly deformed making it very easy to make badly deformed elements. PRIMER Can try to 'smooth' tet meshes to make them better. This may help if you are having problems squashing a dummy into a tet meshed seat. Finally, it is possible to save settings by using the button Save settings to oa\_pref file .<br> <br>To continue press Next<br> <br><br> ![](../Storage/primer-22-1/primer_links/sect_6/seatfoamcompression/method2step9.gif) |
| --- |

| Step 10  <br>Setup the parameters of the Ansys LS-DYNA seat-squash analysis. In most cases, the default values setup in PRIMER should be appropriate.<br> <br>When the analysis is run it will output a dynain file which by default will be output using the \*INTERFACE\_SPRINGBACK card. In Ansys LS-DYNA R9 however, this does not output the coordinates of parts which use the \*MAT\_FABRIC material. An alternative method for outputting a dynain file is to use STAGED\_CONSTRUCTION cards and this can be selected here if required.<br> <br>Finally, it is possible to save settings by using the button Save settings to oa\_pref file .<br> <br>To continue press Next<br> <br><br> ![](../Storage/primer-22-1/primer_links/sect_6/seatfoamcompression/method2step10.png) |
| --- |

| Step 11  <br>Press Apply to start the process. First, the dummy will move away from the seat according to the displacement you prescribed until the contact between seat and dummy is fully de-penetrated.<br> <br>The dummy and the seat components that you defined as non-deformable are then rigidified.<br> <br>The contacts that you identified as redundant are then deleted.<br> <br>The complete input deck for the Ansys LS-DYNA seat-squash analysis is setup<br> <br><br> ![](../Storage/primer-22-1/primer_links/sect_6/seatfoamcompression/method2step11.gif) |
| --- |

#####  Step 12

Now review the Ansys LS-DYNA input deck that PRIMER has created, making any amendments you wish. Run the analysis using Ansys LS-DYNA and then [import](%28DEFINE_%29%20CURVETABLE%20%20Defining%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Load%20Curves..html#import)the required coordinates and initial stresses to your main model.

[Previous](simple-squash-using-primer.md)  |  [Next](import-option.md)