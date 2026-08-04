#####  Slipring Case 3: Meshed Type at Pelvis Location

| ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/meshed_3.png)A meshed (radiused) slipring can be used wherever you might otherwise consider using a free slipring.<br> <br>Unlike the normal B-Post and Free sliprings, which use \*ELEMENT\_SEATBELT\_SLIPRING to give a sharply angled transition in the belt path, meshed sliprings mesh the belt continuously around a user-defined radius. The user must define:<br> <ul style="font-size: 14.6667px;"> <li>The radius</li> <li>The angle subtended by the &quot;short&quot; elements near and around the slipring</li> <li>The transition distance over which short elements extend either side of the slipring.</li> </ul> <br>Meshed slipring properties are defined in the [Fitting Options](fitting-options.md#fitting_options) panel. |
| --- |

This example shows the pelvis slipring above using a Meshed slipring instead of a Free one (from a different viewpoint). Note that the white cylinder around which the slipring is formed is added by the path editor to show how the slipring will be located and oriented, it is not structural and has no physical existence.

When using a slipring like this you will need to have some genuine buckle structure around which the belt will fit, but since the belt path has to be pulled "through" this structure during the form-finding process the buckle should not be part of the "structure" used for fitting. However it will need to be part of the contact between itself and the belt during the analysis.

| ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/meshed_1.png)<br> <br>Before fitting.<br> <br>The path is projected outwards and needs to be pulled back through and around the slipring in order to achieve the correct path. | ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/meshed_4.png)<br> <br>During fitting.<br> <br>The inner segment of the belt has to pass through the slipring cylinder to get to the correct side. | ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/meshed_2.png)<br> <br>After fitting.<br> <br>The path has now fitted around the slipring. Because it pulls through the slipring any buckle elements (not shown here) must not be part of the "structure" used for belt fitting. |
| --- | --- | --- |

It will also be evident from the images above that a meshed slipring requires an unambiguous definition of "in front" and "behind" belt paths. During fitting the "behind" segment must pass through the slipring while the "in front" segment stays on the outside.

Meshed sliprings use special logic to determine which belt segment is which in their immediate vicinity. It examines each segment of the belt path to see which has more points "in front of" the other, where the "in front" direction is the outwards vector along which the belt path is projected prior to fitting, and the one with more points in front is defined as the "in front" segment. Therefore you should aim to create an initial belt path that does not interpenetrate near these slipring locations, since this gives the algorithm the best chance of determining the belt shape correctly.

| ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/meshed_5.png)<br> <br>A poorly defined initial belt path | ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/meshed_6.png)<br> <br>Path has been adjusted manually to make its shape clearer |
| --- | --- |

In fact this clear separation of belt paths is good modelling practice for all slipring types, both meshed and explicit using \*ELEMENT\_SEATBELT\_SLIPRING. You can use [initial depenetration](initial-depenetration.md#init_depen)to try to do the job for you, but you are more likely to get a good result if you separate the belt paths manually.

[Previous](slipring-case-2-free-type-at-pelvis-location.md)  |  [Next](slipring-case-4-child-dummy-in-seat-with-guides.md)