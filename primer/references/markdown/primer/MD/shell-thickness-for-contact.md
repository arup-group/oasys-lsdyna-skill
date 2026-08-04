#####  Shell Thickness for Contact

| Applying a factor to the thickness of structure shells in contact with the belt. (This is the same setting as that in [Parameters #2](PARAMETERS%20#2%20More%20about%20controlling%20the%20form-finding%20process..html#parameters2)above, duplicated here to make it easier to adjust during path creation and editing.) | ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fopts_sthick_1.png) |
| --- | --- |

##### Normally contact between the belt and any shell elements in the structure uses the same parameters as an Ansys LS-DYNA contact would use, that is the shell's true thickness, or the thickness on a \*PART\_CONTACT card if this is defined.

This will give a tight fit of belt to dummy, but it can sometimes result in small initial penetrations because of differences between the contact algorithms in Ansys LS-DYNA and those in the belt fitter. Also the belt sometimes "pulls through to the wrong side" of structure shells during belt fitting due to the limitations of the belt contact algorithm, and artificially increasing the thickness of structure shells may help to prevent this happening.
 
By default the true thickness is used, but by using True \* Factor and supplying a factor greater than one the problems described here can often be avoided. Usually a factor in the range 1.5 to 2.0 will suffice, and you should use the smallest factor that works in order to avoid having an excessively loose fit between belt and dummy.
 
The Minimum Shell Thickness value can be used to set a lowerbound thickness, such that
 
t = max(True thickness, Minimum thickness)
 
This can be useful when a dummy has been coated with very thin null shells, and using their true thickness would impose a very small quantum of movement during fitting,.

[Previous](initial-depenetration.md)  |  [Next](belt-dimensions.md)