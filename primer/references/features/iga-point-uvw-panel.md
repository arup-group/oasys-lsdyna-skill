The IGA\_POINT\_UVW panel lets you pick points on IGA surfaces and create/modify required NODEs and edit SET\_IGA\_POINT\_UVW on the corresponding IGA\_FACE\_XYZ.

![](../Storage/primer-22-1/primer_links/sect_5/iga/iga_point_uvw_1.JPG)

There are three methods to create IGA\_POINT\_UVW:

| **(1) Create point on surface** | Create a point anywhere on IGA\_SHELL or type in the values to create a single IGA\_POINT\_UVW. If you pick PRIMER will automatically create a NODE and calculate U, V, W values.<br>PRIMER will also add IGA\_POINT\_UVW on the corresponding IGA\_FACE\_XYZ in SET\_IGA\_POINT\_UVW. |
| --- | --- |
| **(2) Create point on an edge** | Create a point anywhere on an edge or type in the values to create a single IGA\_POINT\_UVW. If you pick PRIMER will automatically create a NODE and calculate U, V, W values.<br>PRIMER will also add IGA\_POINT\_UVW on the corresponding IGA\_FACE\_XYZ in SET\_IGA\_POINT\_UVW. |
| **(3) Create points around a hole** | Pick IGA\_1D\_BREP definition PRIMER will automatically create NODEs and calculate U, V, W values. PRIMER will also add IGA\_POINT\_UVW on the corresponding IGA\_FACE\_XYZ in SET\_IGA\_POINT\_UVW.<br><br>There are two options for node creation:<br><ol><li>For the Pitch length option, the nearest possible even number of&#160;nodes are created based on the pitch length specified in the textbox.</li><li>For the Number of nodes option, the number of nodes created is based&#160;on the value specified in the textbox.</li></ol><br>NOTE: This is a create only method as it can involves multiple IGA\_POINT\_UVW. It will be disabled in the modify case. |

[Previous](sketching-trimming-loop.md)  |  [Next](visualisation.md)