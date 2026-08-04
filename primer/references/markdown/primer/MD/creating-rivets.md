#### Creating Rivets

![](../Storage/primer-22-1/primer_links/sect_6/connection/rivet_1.PNG)
 
Rivet connections may be created in the same way as spotwelds, i.e. screen pick, node pick, nodes in set, etc
 
In Ansys LS-DYNA a rivet connection is effected through \*CONSTRAINED\_SPR2 which uses node sets. By default, PRIMER will match newly created rivets to an existing SPR2 of the same layer. Alternately, one can select an existing SPR2 or create a new SPR2 for each rivet. The last method gives the greatest freedom to assign properties on the SPR2 card which should be done via the drop-down on the connection table.
 
Preferred defaults for C\_SPR2 card can be set by preference (default\_settings\_for\_rivet\_creation) and will be applied to any newly created cards if the setting use pref values is active.
 
Orientation of rivet is significant, so 'Reverse Last' option is offered.
 
![](../Storage/primer-22-1/primer_links/sect_6/connection/rivet2.PNG)

[Previous](creating-spotwelds.md)  |  [Next](creating-bolts.md)