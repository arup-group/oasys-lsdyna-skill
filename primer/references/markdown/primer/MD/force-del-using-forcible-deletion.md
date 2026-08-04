####  Force Del Using Forcible Deletion

Deleting items whether they are "locked" or not. ![](../Storage/primer-22-1/primer_links/sect_6/remove/fig_6_4_2_1f.png) 
At a first glance forcible deletion, which deletes items even when they are "locked" by a reference from elsewhere, appears to be a simple solution to the problem of removing things which refuse to be deleted. However before using it you should understand what it does and how this can affect your model.
 
If you select Force del rather than the normal Delete sel the following happens:
 
* Items which can be deleted using the normal rules, ie which are not locked, are removed as above.
* Items which remain, but which are marked for deletion are then also forcibly removed ... 
 
  ***... but they are replaced with Latent (empty) definitions of the same type.***

If you run a Model &gt; Check on a model that has undergone forcible deletion you will find that all these Latent definitions generate "Referenced but undefined" errors, and the deck is very unlikely to initialise in Ansys LS-DYNA in that state.
 
So if it leaves all these errors what is Force Del for? Two special cases:

1. When replacing include files it is useful to be able to delete  ***all***  existing file contents, regardless of references from elsewhere in the model, since we know that importing the new include file will re-populate the latent items with new definitions. PRIMER uses this during the [Tools] Include, Replace contents process.
2. A very careful user can also perform a similar operation manually. If you know that you are going to replace what you have removed, or deal with the latent definitions in some way, you can use this feature manually. However it will be your responsibility to sort out all the Latent definitions.

What you should  ***not***  do is use Force Del as a quick fix to the problem that normal deletion refuses to remove locked items. Instead you should use the [?] "why" buttons to find out why items are locked, and deal with the problems at source.
 [Previous](finding-out-why-an-item-is-locked-against-deletion.md)  |  [Next](clean-up-unused.md)