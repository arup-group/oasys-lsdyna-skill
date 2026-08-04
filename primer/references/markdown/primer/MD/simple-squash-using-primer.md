####  Simple Squash Using PRIMER

#####  Process description

| ![](../Storage/primer-22-1/primer_links/sect_6/seatfoamcompression/method1process1.gif) | **Initial state: model with penetration**<br> <br>Cut section through dummy and seat showing initial penetration between dummy components and seat foam.<br> <br>The dummy is at the correct H-point but penetrates the seat. |
| --- | --- |
| ![](../Storage/primer-22-1/primer_links/sect_6/seatfoamcompression/method1process2.gif) | The dummy is moved from its initial H-point position, following the direction prescribed by the user until the contact with the seat top shell part has no penetration. |
| ![](../Storage/primer-22-1/primer_links/sect_6/seatfoamcompression/method1process3.gif) | **Final state: Seat foam compressed**<br> <br>The dummy is moved back to its initial H-point position by increments while using PRIMER contact depenetration option. The seat foam is progressively squashed under the dummy. Interior nodes within the foam components are also displaced to uniformly distribute strain. |

| Step 1  <br>There are two types of simple seat squash. The first type is where you specify the solid elements in the seat, and the solids are deformed during the compression. The second type does not consider the seat solid elements.  Use the second type if your model does not contain seat foam solids, and you just wish to deform the outer shells of the seat and mesh the solids after the deformation.<br> <br>Once you have chosen the method you wish to use press Next<br> <br><br> ![](../Storage/primer-22-1/primer_links/sect_6/seatfoamcompression/method1step1a.gif) |
| --- |

| Step 2  <br>Before you go any further you should save your model. PRIMER will prompt you to save your model as the seat squash changes are irreversible (although you can import coordinates from a dynain file to effectively do an 'undo' See [section 6 . 45 .1](undoing-a-seatquash-operation.md#undoing)for more details).<br> <br>Once you have saved your model press Next<br> <br><br> ![](../Storage/primer-22-1/primer_links/sect_6/seatfoamcompression/method1step1.gif) |
| --- |

| Step 3  <br>You will be asked to move your dummy to the correct H-point location. Position the dummy by either using the [orient menu](orient-translating-rotating-scaling-reflecting-projecting.md)or [dummy positioning menu](dummies-positioning-occupants.md).<br> <br>Once this is done press Next<br> <br><br> ![](../Storage/primer-22-1/primer_links/sect_6/seatfoamcompression/method1step2.gif) |
| --- |

| Step 4  <br>Select the foam parts of the seat using the standard object menu. These are the parts that PRIMER will squash the dummy into. This step is only available if you have chosen the "normal" method in step 1.<br> <br>To continue press Next<br> <br><br> ![](../Storage/primer-22-1/primer_links/sect_6/seatfoamcompression/method1step3.gif) |
| --- |

| Step 5  <br>Select the coating shell parts on the top surface of the seats. These can either be defined by parts or by sets of parts.<br> <br>To continue press Next<br> <br><br> ![](../Storage/primer-22-1/primer_links/sect_6/seatfoamcompression/method1step4.gif) |
| --- |

| Step 6  <br>Select the coating shell parts on the bottom surface of the seats. These can either be defined by parts or by sets of parts. These parts will be fixed. PRIMER Will deform the seat evenly as required between the top and bottom surfaces of the seat.<br> <br>To continue press Next<br> <br><br> ![](../Storage/primer-22-1/primer_links/sect_6/seatfoamcompression/method1step5.gif) |
| --- |

| Step 7  <br>Select the dummy components. You can use the DUMMY... option in the standard object window if required..<br> <br>To continue press Next<br> <br><br> ![](../Storage/primer-22-1/primer_links/sect_6/seatfoamcompression/method1step6.gif) |
| --- |

| Step 8  <br>To select the contact between the seat foam and the dummy. You can use the standard popup functions (right click). You can then Pick, Select an existing contact or Create a new one. Make sure that your contact uses a sensible thickness. This is what PRIMER will use when pushing the dummy into the seat. If the thickness is very small then you will have to have a small increment per iteration.<br> <br>Once you have selected/created the contact press Next<br> <br><br> ![](../Storage/primer-22-1/primer_links/sect_6/seatfoamcompression/method1step7.gif) |
| --- |

| Step 9  <br>Define the dummy displacement increment at each de-penetration iteration. Give the X, Y, and Z displacements that the dummy will move per iteration to move the dummy out of the seat. Once PRIMER has moved the dummy out of the seat enough to eliminate any penetrations it will reverse the motion, squashing the dummy back into the seat to the original position. <br>If the displacement per iteration is bigger than the contact thickness chosen in the previous step, PRIMER will scale it down.<br> <br>You can set the maximum number of iterations that PRIMER will try to do when moving the dummy out of the seat.<br> <br>If you want to see the progress of the seatsquash then select the Redraw after each iteration checkbox. This will make the process much slower so if you want, you can turn it off.<br> <br>Some tet meshes can be very badly deformed making it very easy to make badly deformed elements. PRIMER can try to 'smooth' tet meshes to make them better. This may help if you are having problems squashing a dummy into a tet meshed seat.<br> <br>You can opt to create \*INITIAL\_FOAM\_REFERENCE\_GEOMETRY cards for the nodes in the seat foam before the deformation. This is only available for hyperelastic materials and certain solid element formulations. Note the REF field on the appropriate material card will be set to 1.0 upon creation of the \*INITIAL\_FOAM\_REFERENCE\_GEOMERTY cards.<br> <br>The minimum value of relative volume for the seat foam solid elements is by default set to 0.2. If any solid element becomes excessively deformed and reaches this threshold, the seat squash process will stop. You can modified this value if you wish. Finally, it is possible to save settings by using the button Save settings to oa\_pref file .<br> <br>Then press Next<br> <br><br> ![](../Storage/primer-22-1/primer_links/sect_6/seatfoamcompression/method1step8.gif) |
| --- |

| Step 10  <br>Press Apply to start the process. First, the dummy will move away from the seat according to the displacement you prescribed until the contact between seat and dummy is fully de-penetrated.<br> <br>The dummy is then moved back to its original H-point position while compressing the seat foam.<br> <br>Once finished you can save your model and/or [export coordinates](%28DEFINE_%29%20CURVETABLE%20%20Defining%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Load%20Curves..html#export)if required for use in other analyses.<br> <br><br> ![](../Storage/primer-22-1/primer_links/sect_6/seatfoamcompression/method1step9.gif) |
| --- |

[Previous](squash-options.md)  |  [Next](ls-dyna-seat-squash-method.md)