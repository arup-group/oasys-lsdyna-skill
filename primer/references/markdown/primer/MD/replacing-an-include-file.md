####  Replacing an Include File

You may also replace an include file with a different one. Typical uses are to replace dummy A (say 50th percentile) with dummy B (say 95th percentile).

Internally the steps that are gone through are:

1. Delete existing include file
2. Read in new file
3. Merge into model

This sounds like a statement of the obvious, but consider the case where some content in the include file is referred to by something else in the model. For example say a contact surface defines one side by a part that is in the include file to be replaced: what happens to this cross-reference, and why does "reference to item in include file" not lock the contents of that file against deletion, as would normally be the case when you try to delete an item that is referenced by something else?

Special logic applies when replacing an include file so that: 
 
During step 1 above, "Delete existing include file", PRIMER uses forcible deletion logic, which means that:

* Where something is not referred to it is totally removed.
* Where something  ***is***  referred to it is deleted, and replaced by a latent definition of the same label.

During step 2, "read in new file", the file is actually read into a temporary separate model.

During step 3, "merge into model", the contents of this temporary model are checked for label clashes against items in the target model, and:

* Where no clash occurs the new item is simply copied verbatim.
* Where an existing latent item is found, left "hanging" from step 1 above, the new definition populates this and makes it installed.
* Where a genuine label clash occurs you are offered automatic relabelling options to resolve the clash. Additionally, you can choose to manually renumber items in the include file after the automatic clash fix.

So "replace include" is intrinsically a safe operation, moreover it is designed to handle the problem that the new include will contain a direct replacement for some or all of the items in the old include file. It is the recommended way of swapping components into and out of a model.

[Previous](removing-include-file.md)  |  [Next](writing-master-file.md)