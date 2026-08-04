| DISPLAY OPTIONS... Controlling Plot Parameters  <br>"Options" gives user control over a number of graphical features.<br> <br>Most of these can be preset in the "oa\_pref" file: see [Graphics Setup via the "oa_pref" File](graphics-setup-via-the-oa-pref-file.md#oapref). The button Save display settings saves the settings directly to the preference file.<br> <br><br>| Back faces | Determines whether or not the back (ie facing away from you) faces of 3D (solid and thick shell) elements are drawn. | ![](../Storage/primer-22-1/display-options-controlling-plot-parameters/display-options-controlling-plot-parameters-2025-07-03.png) |<br>| --- | --- | --- |<br>| Internal faces | Determines whether or not the internal faces of 3D elements are drawn. You should only use this if you need to see them, as it slows down drawing by a large factor. |<br>| LI/HI free edges | Determines whether or not the internal faces of 3D elements are drawn on LI ne and HI dden-line plots. You should only use this if you need to see them, as it slows down drawing by a large factor. <br>The overlay on SH aded and data bearing plots is controlled in  [SH/CT/SI Overlay](display-options-controlling-plot-parameters.md#overlay) |<br>| Hatch segments | Controls how segment sets are displayed. The default is to draw a "hatched" wireframe overlay on them in order to distinguish them from ordinary 2D elements, but this can slow down graphics considerably on some platforms so it is switchable. |<br>|  |  | |  |
| --- | --- |

| Contacts | Historically PRIMER drew contacts using a hatched wireframe overlay but, as with segments above, this could be slow. Therefore the default has been changed to " Stippled 1x1 " which is fast, and distinguishes them visually from shells by giving them a semi-transparent appearance since every other pixel is omitted.<br><br>This is much faster than hatching, but may not be to the taste of all users, so a range of options is given as shown here. Solid shaded, hatched will give the original (slow) appearance, and Solid shaded, no hatching will give an opaque result visually indistinguishable from shells.<br> <br>The default appearance can be changed in the "oa\_pref" file using<br> <br>primer\*contact\_shaded\_display:  *&lt;option&gt;* | ![](../Storage/primer-22-1/primer_links/sect_4/images/options_contacts.png) |
| --- | --- | --- |
| Beams | PRIMER draws ordinary (not spotweld) beams as simple lines between the 2 nodes, but when these nodes get very close together the result can be a very small point of a single pixel which is almost impossible to see.<br><br>Therefore when the distance between the 2 nodes as drawn on the screen is less than Min size the symbol is changed to "blobs" on each node of Blob dia to make them easier to see. (Both these dimensions are in screen space units.) | ![](../Storage/primer-22-1/primer_links/sect_4/images/options_beams.png) |
|  | With True Sections switched on beams will be drawn with their explicit sections dimensions and orientation.<br> <br>For beams where only Area, Ixx and Iyy properties are available then a thin-walled rectangular section that matches these properties is synthesised. This should be approximately correct, but obviously it cannot represent I beams or rectangular sections with varying wall thicknesses, but it should give a reasonable representation of beam dimensions. If you use inconsistent or impossible properties you may get some strange looking sections!<br> <br>Use OPTT is now available with True Sections and will plot the beam as circular using the value of OPTT on \*PART\_CONTACT for diameter rather than the physical section | ![](../Storage/primer-22-1/primer_links/sect_4/images/beam_optt.GIF) |
| Shells | PRIMER normally draws thin shells as lines in wireframe mode, or as zero-thickness facets in shaded and contoured modes, neither of which give any indication of shell thickness. <br>The true thickness of shells can be displayed in two ways as shown below:<br> <br><br> <br>The way that shells which are coincident with 3d element faces., "Shells on 3d Els", can also be controlled | ![](../Storage/primer-22-1/display-options-controlling-plot-parameters/display-options-controlling-plot-parameters-2025-07-03-1.png) |
|  | Thin draws a shell as a single infinitely thin facet.<br> <br>This is fast to draw and minimises graphics memory usage, so it is the default mode.<br> <br>The two images below show exactly the same elements drawn using the two "thick" true section variants. | ![](../Storage/primer-22-1/primer_links/sect_4/images/shell_example_3.png) |
|  | True flat "extrudes" each element individually, making no attempt to form a continuous surface between adjacent shells sharing a common edge.<br> <br>This can be useful when trying to determine exactly what the thickness of each shell element is, as shown in this example.<br> <br>However it doesn't look very nice! | ![](../Storage/primer-22-1/primer_links/sect_4/images/shell_example_1.png) |
|  | True smooth extrudes as above, but attempts to join up shells at common edges to form a continuous surface.<br> <br>This image shows the same elements as above, but demonstrates how edges are now joined up. It looks much better, but it is not so easy to determine the exact shape and extent of each shell.<br> <br>This mode is better for presentation purposes. | ![](../Storage/primer-22-1/primer_links/sect_4/images/shell_example_2.png) |
|  | Use OPTT/SFT In True flat/True Smooth this option will derive the thickness from OPTT or SFT on the PART\_CONTACT card rather than the physical shell thickness. <br>The "true" shell shapes shown above take into account any variation in element thickness (eg fields T1 to T4 on \*SECTION\_SHELL ), and also any offsets of the neutral axis from the plane of the nodes as defined by **NLOC**(eg on \*PART\_COMPOSITE ) or by \*ELEMENT\_SHELL\_OFFSET .<br> <br>This is not the case in "thin" mode, which is always drawn on the shell's nodal plane, ignoring any offsets.<br> <br>In addition if the shell is a composite then in "true" mode lines will be drawn on the sides showing the individual layer thicknesses.<br> <br>The default shell display mode can be changed using the preference:<br> <br>primer\*shell\_graphics\_mode: thin  *or* flat  *or* smooth | ![](../Storage/primer-22-1/display-options-controlling-plot-parameters/display-options-controlling-plot-parameters-2025-07-03-2.png) |
| Window Dressing | Controls the display of the plot border, and display of the current date. <br>The "GRATICULE" is tick marks around the edge of the plot which show the current window dimensions: useful for estimating distances on the screen (although MEASURE provides a more accurate method). For more information on the graticule see [Graticule](graticule.md). |  |
| Graphics size | Sets the display size of certain dimensionless symbols. (Springs get a "small spiral" symbol when their size gets too small to visualise as their "normal" symbol.) <br>These sizes can be controlled via the preferences:<br> <br>primer\*lumped\_mass\_size: &lt; *size*&gt; <br> primer\*spring\_size: &lt; *size*&gt; <br>etc | ![](../Storage/primer-22-1/primer_links/sect_4/images/gsize.png) |
|  | Lumped mass symbols can be displayed in two different ways, controlled via the popup on the Masses size button.<br> <br><br>| 2d square | 2d square symbol. Not very attractive, but very fast to draw | ![](../Storage/primer-22-1/primer_links/sect_4/images/square_symbol.png) |<br>| --- | --- | --- |<br>| 3d cube | 3d cube symbol. Attractive and intuitive, but much slower to draw.<br> <br>Models with masses at many nodes become unacceptably slow to respond to dynamic viewing commands if this display method is used. | ![](../Storage/primer-22-1/primer_links/sect_4/images/cube_symbol.png) |<br>| Automatic | Uses "3d cube" symbols if there are &lt; 10,000 mass elements in the model, otherwise "2d square".<br> <br>This is the default since it gives a reasonable trade-off between image quality and rendering speed. | | ![](../Storage/primer-22-1/primer_links/sect_4/images/lmsize_popup.png) |
|  | The default lumped mass symbol display mode can be controlled by the preference<br> <br>primer\*lumped\_mass\_symbol: square|cube|automatic |  |
|  | Triad sizecan also be controlled. Normally the size of triads are drawn according to their respective elements, but sometimes the triads are so small at the current graphics scale that the resulting triads would be very hard to see. To make these small triads visible, PRIMER supports a minimum factor and a scale factor for triads: <br> <br> The minimum factor controls the minimum triad size. It can be any float value (larger than 0.0) which limits the minimum triad size according to a factor of the model size. Any triads that are smaller than the minimum triad size will increase to the minimum triad size. An approximate calculation of the minimum triad size is as follows: <br> Min triad size = (Triad min factor / 1000.0) \* (Diagonal model length) <br> Note: Since the minimum triad size depends on the diagonal length of the model, different models will have different minimum triad sizes. <br> <br> The scale factor will scale the size of triads by the factor specified. It can be any float value (larger than 0.0). The logic used is as follows: <br> Triad size = Triad scale factor \* Original Triad Size <br> <br> Both the minimum factor and the scale factor can be turned on/off according to the tickboxes that control them. When they are both on, the triad size will be evaluated as follows: <br> (1) Triad size = Triad scale factor \* Original Triad Size <br> (2) If triad size (evaluated above) is smaller than min triad size: Triad size = Min triad size <br> Both factors are turned off by default. The default values for triad minimum factor and triad scale factor is 4.0 and 2.0 respectively. | ![](../Storage/primer-22-1/primer_links/sect_4/images/triad_size.png) |
| Text & Labels | In the graphics window, font sizes can be set individually for: <ul> <li><span class="buttontext">Labels</span></li> <li><span class="buttontext">Title &amp; Date</span></li> <li><span class="buttontext">Contour Bar</span></li> </ul> <br>The default options for all three types is Automatic. That is, PRIMER will select an appropriate font size which will vary with window size. If an explicit point size is selected, the text size will stay constant, no matter the size of the window. | ![The font size options for graphics text](../Storage/primer-22-1/display-options-controlling-plot-parameters/Screenshot%202023-10-23%20175014.png) |

| SH/CT/SI Overlay | The element border overlay for SH (aded) plots, and also the contoured CT (continuous tone) and SI (shaded image) is separately controllable. <br><br>| Colour | Is one of the standard PRIMER colours selected from the popup menu |<br>| --- | --- |<br>| Overlay edging mode | Is one of No overlay , Free edges , Feature lines or All edges .<br> <br>Free edges are defined where an element edge is not connected to any other element of the same type, or where the part ids of the elements at an edge differ. Therefore a topological plot of the boundaries of mesh zones is produced.<br> <br>Feature lines are a superset of "free edge" mode in which the angle between adjacent elements is considered. Where this angle is greater than the "Edge angle" defined below then a feature line edge is defined, and this is added (logically ORed) to the free edges. The effect is to give a better idea of the shape of the mesh than is available from free edges alone. |<br>| Edge angle | Sets the angle (in degrees) between adjacent element faces at which a "[feature line](display-options-controlling-plot-parameters.md#feature)" edge will appear. | |
| --- | --- |
| Line width | Sets the width in pixels of lines drawn on the screen, that is overlay, wireframe and sketched graphics. The default is one pixel, but users with screens that are physically small but have a high resolution, typically 200 or more dots per inch (dpi), may prefer to use more pixels to make lines appear thicker. |

| Anti-aliasing | By default lines and overlay are drawn non-antialiased, meaning that each pixel of the line is either "drawn" or "not drawn", with no sub-pixel smoothing, meaning that lines which are anything other then vertical or horizontal can look "jagged". <br>If antialiasing is turned on lines will typically look slightly thicker, and lines drawn at an angle will be noticeably smoother. The example image here shows a spring symbol both without (left) and with (right) antialiasing, the effect is particularly noticeable on the curved lines. | ![](../Storage/primer-22-1/primer_links/sect_4/images/antialias.png) |
| --- | --- | --- |

Swap nodal coords

options-controls-many

allows you to swap the nodal coordinates used throughout PRIMER with:

>  
> 
> | Standard | Reverts to using the normal coordinates defined under the \*NODE card. |
> | --- | --- |
> | Airbag ref geom | The coordinates of nodes defined under \*AIRBAG\_REFERENCE\_GEOMETRY |
> | Foam ref geom | The coordinates of nodes defined under \*INITIAL\_FOAM\_REFERENCE\_GEOMETRY |
> 
>  
> This is a straight swap: the values of the nodal coordinates used for all internal PRIMER operations are swapped over, and there are no interlocks or warnings to prevent you misusing this.
>  
> ***If you use this option it is your responsibility to manage it in the appropriate context(s) and to unset it when finished.***
>  
> However, note that if this option is set when reading a model, PRIMER will automatically unset it first before reading the model to ensure that node data does not get corrupted.
> 

Swap shell topology allows you to swap the shell topologies used throughout PRIMER with:

>  
> 
> | Standard | Reverts to using the shell topology defined under the \*SHELL card. |
> | --- | --- |
> | Airbag ref geom | The topology of shells defined under \*AIRBAG\_SHELL\_REFERENCE\_GEOMETRY |
> 
>  
> This is a straight swap: the values of the shell topologies used for all internal PRIMER operations are swapped over, and there are no interlocks or warnings to prevent you misusing this.
>  
> ***If you use this option it is your responsibility to manage it in the appropriate context(s) and to unset it when finished.***
>  
> However, note that if this option is set when reading a model, PRIMER will automatically unset it first before reading the model to ensure that shell data does not get corrupted.
> 

> 
> Geometry Options
> 

These options control how PRIMER renders geometry (curves and surfaces).

Curve max seg allows you to change the maximum length of a segment used to draw a curve. The length is defined as a factor of the overall model diagonal, therefore if your model is ~1m in size, setting Curve max seg to 0.001 will yield curve segments that are a maximum of ~1mm long.

Curve min seg allows you to change the minimum length of a segment used to draw a curve. The length is defined as a factor of the overall model diagonal, therefore if your model is ~1m in size, setting Curve min seg to 0.001 will yield curve segments that are a minimum of ~1mm long.

Surf max seg allows you to change the maximum length of a segment used to draw a surface. The length is defined as a factor of the overall model diagonal, therefore if your model is ~1m in size, setting Surf max seg to 0.001 will yield surface segments that are a maximum of ~1mm long.

Surf min seg allows you to change the minimum length of a segment used to draw a surface. The length is defined as a factor of the overall model diagonal, therefore if your model is ~1m in size, setting Surf min seg to 0.001 will yield surface segments that are a minimum of ~1mm long.

Max separation allows you to change the maximum separation of midpoints of curve/surface segments and trias from the surface itself. This effectively sets the resolution at which curved features are rendered. The separation is defined as a factor of the overall model diagonal, therefore if your model is ~1m in size, setting Max separation to 0.001 will yield curve/surface segments that are separated from the surface by a maximum of ~1mm.

It is advised that the Curve min/max segment length values be smaller than the Surface min/max segment length values, as this allows for a detailed render of surface boundaries with high curvature while still having large trias in flat areas (thus potentially reducing the total number of trias and improving graphical speed).

Curve segs allows you to change how many segments are used to draw a curve. The more segments you use, the better the curve approximation will be, but it will take longer to draw and use more memory.

Surf segs allows you to change how many segments are used to draw a surface. The more segments you use, the better the surface approximation will be, but it will take longer to draw and use more memory.

HI/SH overlay and the colour allow you to control whether the edges of surfaces are drawn and what colour is used in shaded plots.

The tolerance option is a general tolerance which PRIMER uses for controlling how NURB surfaces are rendered. You should not have to change it.

End points on adjacent curves closer than Merge tol will be merged into a single point.

The ignore curves &lt; option sets the value at which PRIMER will ignore a curve. Any curves which are shorter than this will be ignored in surface trimming curve.

NURB tol option is the tolerance which PRIMER uses for finding coordinates on NURB surfaces.

Max trim split option is the maximum number of trias that can be split by a trim curve segment before PRIMER will abort reading the surface.
[Previous](basic-drawing-commands-li-ne-hi-dden-line-sh-aded-image.md)  |  [Next](colour-setting-item-colours-in-plots.md)