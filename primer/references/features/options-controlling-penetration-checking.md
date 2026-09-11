###  Options... Controlling Penetration Checking

 ![](../Storage/primer-22-1/primer_links/sect_5/pen_check/options_1.png)
 
**Treatment of duplicate shells**
 
This option controls which shell is used to determine contact properties when a contact segment lies on two or more coincident shells.
 
This requires a little explanation:
 ![](../Storage/primer-22-1/primer_links/sect_5/pen_check/options_2.png)
 
When LS-DYNA receives a list of elements, segments, parts or sets to define the geometry of a contact surface it uses them as follows:

* It builds a list of 3 or 4 noded segments from the shells or faces of 3D elements. (Incoming segments are used verbatim)
* It culls any duplicate segments (identical topology) from this list
* Then it searches through the whole model (not just the elements defined for contact) to find shells or 3D element faces under these segments.
* The chosen element under each segment is used to determine the its thickness and stiffness properties.

Clearly two ambiguous cases can arise when finding "the element under the segment":

1. A segment lies on a 3D element face that is also overlaid by a shell. 
 
In this case LS-DYNA prefers the shell element unless the I2D3D flag on \*CONTACT optional control card B is set to 1, in which case the solid element is preferred. The contact checker in PRIMER examines the I2D3D flag and applies the same logic.
2. A segment lies on a shell that is one of two or more duplicate shells sharing the same topology. 
 
In this case the shell element used by LS-DYNA is not determinate and it is not currently possible to state which shell element will be used for contact properties. Tests also suggest that the choice in the SMP and MPP versions may be different, so that if any initial penetrations exist they may be computed differently.

In order to address the second of these two cases PRIMER uses this option to define behaviour explicitly when a segment lies on duplicate shells, using one of three settings:

| Automatic <br>(default) | In this mode the thinnest shell is preferred for "Tied" contacts, and the thickest for all other types. <br>This approach is chosen to give conservative behaviour since "Sliding" types may over-report penetrations when compared with LS-DYNA, and "Tied" types may under-detect ties.<br> <br>Therefore the results of a contact check in PRIMER may be pessimistic when compared to initialisation in LS-DYNA, but it will err on the side of safety. This is the default setting. |
| --- | --- |
| Thinnest always | The thinnest shell is always used. |
| Thickest always | The thickest shell is always used. |

The default value of this option may be varied by the [preference](the-oa-pref-preferences-file.md#oa_pref):

primer\*contact\_penchk\_dup\_shells: with the possible values automatic , thinnest or thickest

This was the status quo for PRIMER release 9.4, however it is likely that this setting - or at least the logic behind its default "automatic" option - will evolve as LS-DYNA develops to remove the ambiguity in the choice between duplicate shells.

[Previous](list-errors-listing-penetrations-and-edges-to-screen-and-file.md)  |  [Next](checking-a-tied-contact.md)