#####  The Path Gets Stuck on the "Wrong" Side of Some Structure

This is usually caused by the basic path not being defined correctly and having initial penetrations. It can be solved by moving path points or possibly adding new ones - see the section on "[Defining the initial path](defining-the-initial-path.md#initial_path)" for more advice.

It is also sometimes caused because the route the belt takes when being pulled in is not the same as the outwards projection, and this leads to it getting snagged on intervening structure. Also it may be that not enough "structure" has been defined leaving a gap for the belt to "fall through".

| In this (contrived) example of fitting to a pelvis the belt above the left leg penetrates the upper leg structure.<br> <br>This is caused by the 3rd path point being too low down causing the lower edge of the belt path to be on the wrong side of the upper leg structure.<br> <br>Moving this point up (PATH..., MODIFY), then re-fitting the belt will fix the problem. | ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fig_7_2_3_3w.gif) |
| --- | --- |

[Previous](parameters-2-more-about-controlling-the-form-finding-process-1.md)  |  [Next](want-to-mesh-chest-and-lap-belts-using-two-different-element-properties.md)