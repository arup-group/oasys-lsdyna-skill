###  Editing Position Data by Hand

**Essentially don't try it!**

When a position is first saved an extra "reference" position, not visible to the user, which contains the assembly's current configuration is saved first, then user-defined positions follow. This reference position is updated whenever the assembly is repositioned, and all transformations are stored relative to this.

In addition any Orient type transformations of the whole Dummy or Mechanism will result in all saved positions being updated accordingly.

It would be virtually impossible to track all these transformations by hand, and it is strongly recommended that the only hand-editing carried out on these data should be limited to total deletion of a position should this be required.

[Previous](re-using-position-data-in-different-contexts.md)  |  [Next](deleting-position-data-manually.md)