###  Area_Pick: What is "Visible" When Area or Polygon Picking

For anything other than 3D elements the test is simple: if it has been drawn, even if it is obscured by something else, it is "visible".

For 3D elements, solids and thick shells, the question arises of how to treat elements that are interior to a solid block of mesh. These are not actually drawn since internal face culling removes them from the graphics pipeline, so are they "visible" or not?

| This is determined by the setting of the (cursor) AREA\_PICK parameter in the options popup menu. | ![](../Storage/primer-22-1/primer_links/sect_2/selection/fig_6_2k.gif) |
| --- | --- |

| ALL | Selects all 3D elements through the thickness, regardless of whether of not they have been culled due to internal face removal.<br> <br>This has the effect of punching a hole completely through a 3D mesh.<br> <br><br> <br>From PRIMER release 8.2 this is the default behaviour. In earlier releases no option was given, and the behaviour was implicitly EXT ernal as defined below. | ![](../Storage/primer-22-1/primer_links/sect_2/selection/fig_6_2l.jpg) |
| --- | --- | --- |
| EXT | Selects only those 3D elements which have actually been drawn, ie those which are "EXT"ernal.<br> <br>This tends to have the effect of "peeling the outer layer of the onion": only the outer layer is selected, and successive picks are required to make a hole right through the mesh. | ![](../Storage/primer-22-1/primer_links/sect_2/selection/fig_6_2m.jpg) |

| Using KEY_IN to type in selections  <br>It is also possible to type in selection labels by invoking the KEY\_IN box. Valid syntax is:<br> <ul> <li>Single labels: 1 101 27 93 </li> <li>&lt;start&gt; to &lt;end&gt;: 1 to 21 99 : 1000 </li> </ul> <br>Or any combination of these. (Note that either "to" or ":" may be used to denote a range.) |  |
| --- | --- |

[Previous](rejectingapplying-items-that-have-been-screen-picked.md)  |  [Next](key-in-syntax-when-model-andor-type-codes-must-be-defined-for-labels.md)