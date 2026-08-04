####  What Is Stored Following Meshing

Internally PRIMER saves the following information about Seatbelt Definitions:

>  
> The sets of structure definitions. (See [Defining structure for seatbelt fitting](1-define-defining-structure-for-seatbelt-fitting.md#7231_create)).
>  
> The basic path. (See [Defining a belt path](2-fit-creating-a-belt-path.md#fit1)).
>  
> The "chassis" mesh and associated fitting data. (See [Fitting the belt to the dummy](fitting-the-belt-to-the-dummy.md#fit2)).
>  
> The belt FE data: sets of shells, first and last seatbelt, slipring and retractor elements, and the sets of nodal rigid bodies used.
>  
> Any cross-section definitions that were requested.
>  
> Any parameter name defined to hold the belt total length.
>  
> Contact data if it exists (See [Contact](contact-creating-a-contact-between-belt-and-dummy.md#createcontact)).
>  

A MESHING operation operates on the information saved in (1) to (3) above without changing it, therefore if you are happy with the belt shape but don't like the mix of element types you have created, you can go back and change it at will.

What you *can't* do in MESHING is change the "chassis" path, and in particular you can't change the number of shells across the width: to do that you must go back to  [FITTING](fitting-the-belt-to-the-dummy.md#fit2) , fit a revised chassis mesh with the new number of rows, then ACCEPT and remesh it.

[Previous](post-meshing-review.md)  |  [Next](changing-and-remeshing-an-existing-belt-definition.md)