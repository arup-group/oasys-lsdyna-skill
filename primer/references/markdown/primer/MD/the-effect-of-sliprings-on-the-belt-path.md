####  The Effect of Sliprings on the Belt Path

There are two distinct geometries of slipring that need to be considered if 2d seatbelt elements are to be meshed correctly:

>  
> **[B-Post](slipring-case-1-b-post-type-at-shoulder-location.md#slip_case_1)**  slipring-case-1-b-post-type-at-shoulder-location.md#slip_case_1(shoulder) location, where the slipring is constrained to rotate about the transverse axis defined by its fixing bolt.
> 

 [!\[\](../Storage/primer-22-1/primer_links/sect_6/seatbelt/uslip_21.png)](slipring-case-1-b-post-type-at-shoulder-location.md#slip_case_1)

>  
> **[Free](slipring-case-2-free-type-at-pelvis-location.md#slip_case_2)** (typically, but not exclusively, pelvis) location, where the slipring is free to adopt the average orientation of the two belt segments meeting at that point. **Meshed** (radiused) sliprings are also effectively "free", in that their orientation is not constrained by adjacent path geometry.
>  

In both cases it is important that the belt path is oriented correctly so PRIMER has specific "B-Post" and "Free" versions of element-based (\*ELEMENT\_SEATBELT\_SLIPRING) in the belt fitter.
 [!\[\](../Storage/primer-22-1/primer_links/sect_6/seatbelt/uslip_22.png)](slipring-case-2-free-type-at-pelvis-location.md#slip_case_2)
 
**Backwards compatibility of slipring type from pre-V12 decks.**
 
Input decks from versions of PRIMER written before V12 do not contain this explicit distinction, and for backwards compatibility these are still read and processed as before, making the automatic choice of slipring geometry using the old rules. However the user can use the path editor of the belt fitter to change this to an explicit choice, and once such a deck has passed through the belt fitter it will write out this explicit choice in the \*BELT cards. Therefore conversion to V12 format is a "once off" and permanent process.

Four examples of sliprings and associated belt guides, all for 2d belt or shell elements, are given below:
 
1. [Typical B-Post slipring element at shoulder location](slipring-case-1-b-post-type-at-shoulder-location.md#slip_case_1)
2. [Typical Free slipring element at pelvis location](slipring-case-2-free-type-at-pelvis-location.md#slip_case_2)
3. [Radiused continuous mesh](slipring-case-3-meshed-type-at-pelvis-location.md#slip_case_3)
4. [Child dummy in seat with guides.](slipring-case-4-child-dummy-in-seat-with-guides.md#slip_4)

 [Previous](meshing-sliprings-explicitly.md)  |  [Next](slipring-case-1-b-post-type-at-shoulder-location.md)