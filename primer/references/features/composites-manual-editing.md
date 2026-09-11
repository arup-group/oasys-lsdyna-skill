###  Composites Manual Editing
 
It is possible to edit composite values directly from the PART/ELEMENT edit panels. Users are discouraged from editing compopsite materials and thicknesses from these panels for ELEMENTs because these values are common across a ply and editing these values on the ELEMENT may cause PRIMERs internal ply data to do out of sync. It is however safe to modify the beta angles as these are element specific and are not specified on the ply itself.
 
Keeping this in mind, PRIMER now automatically greys out these fields if it determines that the edit panel in question belongs to PRIMER's internal ply/layup cards. The user can choose to override this functionality by clicking on the "EDIT" tab.
 
Users can now edit multiple ply values at the same time by using the "ctrl" and "shift" buttons and clicking on the layer buttons. Now any value set on any of the selected plys is automatically copied over to all selected layers.
 
This functionality is available on the PART, (T)SHELL and COMPOSITE\_LAYUP panels.
 ![](../Storage/primer-22-1/primer_links/sect_6/composite/composite_30.png)
### 

[Previous](composites-graphics-options.md)  |  [Next](connections.md)