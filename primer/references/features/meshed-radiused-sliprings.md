#####  Meshed (Radiused) Sliprings

As an alternative to using the \*ELEMENT\_SEATBELT\_SLIPRING element you can mesh the belt path explicitly around a tight radius at slipring locations.

This process has been described in some detail as [example 3](slipring-case-2-free-type-at-pelvis-location.md#slip_case_2) in the creation of sliprings above, so this is just a summary.
 ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fopts_meshed_1.png)

| ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fopts_meshed_2.png) <br><br> <br>A meshed slipring has three key attributes:<br> <ul> <li>A radius around which it must fit. <br> <br> </li> <li>A maximum angle which the &quot;short&quot; elements going around the radiused section are allowed to subtend. This is because the elements must be reasonably short in order to fit smoothly around a tight radius in order to avoid a &quot;ratchet&quot; effect (like pulling a bicycle chain around a rod). <br> <br> </li> <li>A transition distance either side of the slipring over which these short elements extend. This is so that material pulled around the slipring during the analysis also avoids any ratchet effect. </li> </ul> <br>The image here shows a fitted slipring that exhibits these characteristics. It uses the default settings shown on the options panel. |
| --- |

Things to consider when using meshed sliprings:

(1) The belt path will have to pull back from "in front of" the slipring (its offset) down onto it, and the inside segment of path will pull through it.

The centre image below shows the fitting process partially complete with the inside of the belt still pulling through.

This also means that if the belt buckle structure has been meshed it must not be included in the "structure" definition for belt fitting, otherwise the belt path will not pull through it but rather get stuck in front of it. (The cylinder at the centre of the slipring in the images below is drawn by the belt fitter, it has no physical existence.)

| ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/meshed_1.png) | ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/meshed_4.png) | ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/meshed_2.png) |
| --- | --- | --- |
| The belt path will start off "outside" the slipring, being projected outwards just like the rest of the path. | It will pull onto the slipring, and the "inside" will pull through it. | The final shape should wrap round the slipring correctly, but be careful that you have aligned it correctly - see below. |

(2) The two sections of path meeting at the slipring need to be lined up correctly.

The left hand image below shows a shoulder slipring detail where the two stretches of belt have deliberately been twisted so that they do not line up, showing how the widths are different. The right hand image shows what happens if this detail is fitted without correction, and anyone who has ever performed any carpentry will recognise the problem.

| ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fopts_meshed_3.png)<br> <br><br><br>Shoulder slipring detail with the two sections deliberately mis-aligned, giving different widths | ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fopts_meshed_5.png)<br> <br><br><br>When joining two pieces of wood at an angle the angle (red line) must be chosen so that it bisects the two vectors, otherwise the widths of the two pieces will not be the same at the join.<br> <br>Seatbelts are the same! | ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fopts_meshed_4.png)<br> <br><br><br>What happens when the detail on the left is "fitted". The right hand section is narrower than the left leading to a transition in width as it crosses the slipring. |
| --- | --- | --- |

When using meshed sliprings (or free ones for that matter) it is important to make sure that they are lined up correctly so that the angle of the slipring bisects the two incoming paths properly. Sometimes this is a process of trial and error since fitting may pull the paths to different angles meaning that something which was correct in the unfitted shape no longer lines up in the as-fitted state.

(3) It will also be evident from the images above that a meshed slipring requires an unambiguous definition of "in front" and "behind" belt paths. During fitting the "behind" segment must pass through the slipring while the "in front" segment stays on the outside.

Meshed sliprings use special logic to determine which belt segment is which in their immediate vicinity. It examines each segment of the belt path to see which has more points "in front of" the other, where the "in front" direction is the outwards vector along which the belt path is projected prior to fitting, and the one with more points in front is defined as the "in front" segment. Therefore you should aim to create an initial belt path that does not interpenetrate near these slipring locations, since this gives the algorithm the best chance of determining the belt shape correctly.

| ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/meshed_5.png)<br> <br>A poorly defined initial belt path | ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/meshed_6.png)<br> <br>Path has been adjusted manually to make its shape clearer |
| --- | --- |

This is good modelling practice for all sliprings, including those which use \*ELEMENT\_SEATBELT\_SLIPRING, but it is especially important for meshed ones since they must separate the belt by a distance equal to the diameter of the buckle.

The situation on the left may also be resolved by the [initial depenetration](initial-depenetration.md#init_depen)logic described below. This is still experimental, and may fail, therefore a better solution is to adjust the belt manually to give a clear result as in the right hand image above.

[Previous](point-projection.md)  |  [Next](radial-vectors.md)