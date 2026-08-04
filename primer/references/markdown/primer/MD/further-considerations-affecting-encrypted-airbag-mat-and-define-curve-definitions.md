####  Further Considerations Affecting Encrypted *AIRBAG, *MAT and *DEFINE_CURVE Definitions

#####  Locking encrypted loadcurves against deletion

It is usually the case that when encrypted airbags and/or materials and encrypted loadcurves occur in the same model that the airbags/materials refer to the curves. Unfortunately it is not possible to tell which, if any, airbags/materials do actually refer to which loadcurves, and if no action is taken it is likely that some or all loadcurves would appear to be unreferenced, and hence unused, and would be deleted by the standard PRIMER "cleanup" operation.

To prevent this PRIMER automatically assumes during deletion or cleanup operations that:

* For the partially encrypted definitions, where labels are provided in clear, all encrypted loadcurves are referred to by all encrypted airbags and/or materials, which has the effect of locking all such curves against deletion so long as there are any encrypted materials in the model.
* For the wholly encrypted case, where alternate definitions are provided after \*END , both materials and loadcurves are locked unconditionally against deletion.

These locks can be a nuisance, but it is hard to see how else the problem can be dealt with and, in practice, most encrypted models will be effectively "read only" anyway.

#####  Controlling material and curve labels

Although partially encrypted material definitions have their labels defined in their title line their "true" label is fixed inside their encrypted section and cannot be changed, so PRIMER must not change it either.

Partially encrypted loadcurves have their label field in clear, so at first sight it would seem that this label could be changed with impunity. However a moment's consideration reveals that these curves are likely to be referred to from deep within the encrypted part of material definitions, so they too cannot have their labels changed.

Finally both materials and loadcurves defined in the alternate post-END definition represent items that have their labels fixed within their wholly encrypted sections in the main body of the deck, so they too must not have their labels changed.

Therefore PRIMER tries to lock these labels against change. However this lock is not absolute, and a sufficiently determined user will manage to change their labels, for example via the Text Edit function. Therefore take great care when changing labels in encrypted decks, since PRIMER cannot protect you from all potential errors. The following strategies are recommended:

>  
> The vendor of the encrypted deck may provide some mechanism for adjusting labels. Sometimes this is a simplifed (in clear) include file that can be used during model assembly, with the proper (encrypted) include file being substituted for the analysis.
>  
> Another alternative is to include encrypted include files within an \*INCLUDE\_TRANSFORM definition, and to use this to offset labels. This is usually a better solution since it effectively moves the point at which the actual renumbering occurs to somewhere inside the Ansys LS-DYNA keyword reader, where the encrypted data is then available in clear.
>  

#####  Editing encrypted definitions

The normal editing panels will work for encrypted curves and materials, and they will show that a minimal primitive amount of data have been inserted.

* If you edit partially encrypted definitions the edits will be accepted and remembered, but when the deck is written out the original encrypted data block will be re-inserted and any edited data ignored.
* If you edit alternate definitions in the post \*END section these edits will be remembered and written out in that section.

[Previous](providing-alternative-definitions-for-wholly-encrypted-mat-define-curve-and-parameter-definitions.md)  |  [Next](dealing-with-encrypted-keywords-other-than-airbag-mat-define-curvetable-and-parameter.md)