###  Deleting Position Data Manually

It is possible to delete saved positions manually using an editor, and so long as you obey the following rules it can be done safely.

* Any explicitly saved \*POSITION other than the first "reference" one can be deleted with no ill-effects. 
 
Simply delete the \*POSITION card and all subsequent data up to but not including the next \* *keyword* . 
Saved positions have names rather than numbers so there is no need to worry about changing labels.
* The first "reference" \*POSITION, marked "do not delete" can also be deleted  ***if, and only if***  , all other \*POSITION cards are also deleted. 
 
As the discussion in [The "reference" position](data-stored-for-positions.md#ref_pos)above explains the reference position is required for other saved positions to be restored correctly.

It would be reasonable, and perfectly legitimate, to "clean up" an input deck by deleting all \*POSITION data so that the positioner starts again from scratch next time it is used. Remember that Dummy and Mechanism assemblies have no intrinsic coordinate system, and it doesn't really matter what system is actually used so long as the usage is consistent thereafter.

[Previous](editing-position-data-by-hand.md)  |  [Next](biv-the-dummy-angles-file-daf.md)