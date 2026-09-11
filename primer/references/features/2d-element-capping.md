###  2D Element Capping

Controls how the cut edges of 2D elements (shells) are displayed.

| When shell elements are cut it is possible to draw their cut edges in three modes:<br> <ul style="font-size: 14.6667px;"> <li> <span class="buttontext">No 2D capping&#160;</span>. The cut is simply a line with colour but no thickness.<br><br></li> <li> <span class="buttontext">True thickness x factor&#160;</span>. Extracts the true shell thickness, multiplies it by &lt;factor&gt; and uses that value. This is probably the most useful since it shows actual model dimensions, although a factor &gt; 1.0 is often necessary to visualise thicknesses.<br><br></li> <li> <span class="buttontext">Fixed thickness&#160;</span>. Uses a constant value in model space units for all shells.<br><br></li> <li> <span class="buttontext">Use Part_Contact values&#160;</span>. (See also&#160;<a href="2d-element-capping.md#cut_cont">notes on plotting contact thickness</a>&#160;below)</li> </ul> | ![](../Storage/primer-22-1/primer_links/sect_6/cutsect/fig_16.png) |
| --- | --- |

| For shells on a \*PART\_CONTACT card:<br> <br><br>>  <br>> If explicit thickness OPTT is defined this is used. <br>> or <br>> If scale factor SFT is defined then the true thickness x SFT is used <br>> or <br>> The unscaled true thickness is used.<br>> |
| --- |
| For other shells the unscaled true thickness is used. |

| For automatic contact types in Ansys LS-DYNA, in the case of shell elements, automatic contact types determine the contact surfaces by projecting normally from the shell mid-plane a distance equal to one-half the ‘contact thickness’. Further, at the exterior edge of a shell surface, the contact surface wraps around the shell edge with a radius equal to one-half the contact thickness thus forming a continuous contact surface.<br><br>To display automatic contact wrapping around the shell edge, while using Part\_Contact values, a round cap is drawn with radius (r) equal to one half the contact thickness (t), where thickness is calculated as described above as per the \*PART\_CONTACT card.<br><br>**: In Part\_Contact mode, PRIMER does not check the type of contact and always draws a semi-circular cap with radius (r). Also, this radius (r) is calculated assuming an orthogonal cut irrespective of the angle of cut made by the cut-section with the shell edge.**<br><br>**** | ![](../Storage/primer-22-1/2d-element-capping/Shell%20capping.png) |
| --- | --- |

| In this example solids have been turned off leaving only shells, which have been rendered using True thickness x 15.0 to make them stand out at this scale. | ![](../Storage/primer-22-1/primer_links/sect_6/cutsect/demo_9.jpg) |
| --- | --- |

####  Showing shell offsets in cut sections. 
 
Normally the neutral axis of a shell lies in the plane of its nodes, but it is possible to offset it in various ways:
 
* Defining field NLOC on \*SECTION\_SHELL
* Using \*ELEMENT\_SHELL\_OFFSET
* Using \*INTEGRATION\_SHELL

In addition composites may be modelled using \*ELEMENT\_SHELL\_COMPOSITE or \*PART\_COMPOSITE .
 
All these methods can result in a shell's neutral axis being offset from the nodal plane, and in the case of composites the shell may have many layers through its thickness at different offsets from the nodal plane.
 
By default using "true" shell thickness capping does  ***not***  take into account these offsets, since that would conflict with the normal PRIMER graphics which render shells as infinitely thin plates on the nodal plane, ignoring both thickness and any offsets. This is because applying the offset to the cut section but not to the uncut element would give a visual offset that could be confusing.
 
However PRIMER can render shells in "true thickness" mode if the [Display Options, Shell, True thickness](display-options-controlling-plot-parameters.md#dopt_shell)options are used. This not only draws shells as "thick" using their actual thickness, but also takes into account any offsets to their neutral axis. If this option is in force then cut-section capping of shells will also show any offsets, retaining the logic that the capping cuts the element "as drawn". In addition if composites are being used the various layers will be shown at their correct locations through the thickness.
 
So to summarise: if you want to see shell offsets in cut sections it is necessary also to turn on "true thickness" display for all shells.
 
####  Showing beam thickness in cut sections. 
 
![](../Storage/primer-22-1/primer_links/sect_6/cutsect/beam_cutsect.GIF)
 
These options allow the beam to be drawn as true section or as circular if &lt;OPTT&gt; applies.
 
By default, when the panel is launched, the options inherit the displayoption settings of beam. When the cutting switch is turned ON, it gives a local setting to control beam display. Once the cutting switch is turned OFF, beams are plotted according to displayoption settings.
 
The changes made in displayoptions settings for beam will be displayed only when the cut sections are turned OFF as the control is transferred to local settings while cut section is ON, .
 
Both beams below are 2x2 rectangular sections and both shells have physical thickness = 2.
 
The lower pair of parts have OPTT = 1 both on the shell section and on the beam section so the display options above change how they plot.
 
![](../Storage/primer-22-1/primer_links/sect_6/cutsect/beam_cutsect2.GIF)

####  Notes on using cut sections to plot contact thickness 
 
There have been requests for cut sections in PRIMER to show contact thickness generally, but this is not really practical for two reasons:

* A given element may be in more than one contact, and the thickness used can be influenced by the contact type and the settings on the contact card itself, so there may not be a unique value.
* Inside Ansys LS-DYNA the relationship between elements specified for contact and those actually used is rather weaker than it may at first appear. When a contact surface is created the following process is used to determine the geometry of the contact: 

    * Segments are built from all shells or 3D element faces in the contact definition, or explicit segments are used directly.
    * Duplicate segments are eliminated.
    * The element under each segment is then used, whether or not it was specified in the original contact definition.
    * If shells overlay solids, or coincident shells are present, the choice of element is complicated further.

Therefore in a model with more than one contact surface it is nearly impossible to determine a general "thickness used for contact" for every shell, and the only real solution is to limit display to elements in a given contact.
 
The [contact penetration checker](contact-penetration-checking.md)performs all these calculations for the specified contact surface, and if [Settings, As Thick](settings-controlling-plots.md#SettingsControllingplots)is chosen when displaying penetrations then the thickness of each segment will be shown. If cut sections are then turned on they will apply to these penetration plots, and in this way it will be possible to visualise penetration thicknesses.
 [Previous](exclude-part.md)  |  [Next](saveretrieve.md)