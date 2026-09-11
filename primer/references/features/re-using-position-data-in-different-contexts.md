###  Re-using Position Data in Different Contexts

Dummies and Mechanisms can be child(ed) to parents as "children", whereupon position Save / Retrieve operations will operate on all assemblies in parent and child(ren).

This is not a problem since positions are referenced purely by name, therefore:

* During a Save operation each assembly will acquire another entry of the specified name. 
 
Care should be taken not to use the same name in different contexts, leading to two or more positions for an assembly having the same name. While Save will work, a subsequent Retrieve may pick up the wrong position.
* During a Retrieve operation each assembly is scanned for a previously saved position of the given name. If no such position is found then that assembly's geometry is not altered. 
 
As explained above if an assembly contains two or more positions of the same name the first encountered will be used, which may cause unexpected outcomes.

Positions are an attribute of assemblies, so those saved while positioning a Dummy or Mechanism in isolation will be "visible" and available for use when it is used as a "child", and vice-versa.

[Previous](re-using-position-data-when-geometry-changes.md)  |  [Next](editing-position-data-by-hand.md)