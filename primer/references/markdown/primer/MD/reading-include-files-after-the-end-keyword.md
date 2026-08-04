###  Reading Include Files After the *END Keyword

PRIMER will read include files in the "post END" section of the input deck after \*END, for example:


```
   *END
   $
   *INCLUDE
   /pathname/filename.key
   $
```


Include files read in this way, and their contents, are entirely "normal" and behave just like items read from the main body of the input deck, but this process is subject to some limitations:

* Post-END include files cannot be "nested", thus such a file cannot contain a \*INCLUDE keyword.
* The \*CASE keyword is not supported within these files.
* Any data after \*END in these files will be ignored.

This capability may be generally useful, but it has been introduced specifically to help with the processing of partially encrypted input decks. A typical situation would be that a 3rd party vendor provides a model, typically a crash dummy, in the form of an input deck that is wholly or partially encrypted. PRIMER does not have the key required to decrypt these decks, so their contents are unknown, and it is sometimes the case that such decks will generate errors in PRIMER because key components - typically (but not exclusively) materials and loadcurves - are missing.

Being aware of the problem the vendor will often provide a simplified version of the encrypted data in a separate include file for pre-processing only, and including this file in the input deck resolves the missing items and gets rid of the errors. However when it comes to analysis the input deck will contain both encrypted data and "in clear" simplified data, and the latter must be removed otherwise clashes will occur, and this creates a work-flow problem.

By including the simplified "in clear" input deck after \*END the problem is solved because, without having to edit the input deck:

* During pre-processing PRIMER will "see" the encrypted data but will not decode it, rather placing its data to one side for subsequent output. It will also "see" the simplified data and use this to resolve any missing definitions.
* During analysis Ansys LS-DYNA will "see" and decrypt the encrypted data, but because it does not read beyond \*END it will not "see" the simplified data, thus clashes are avoided.

However there are some disadvantages to this method. Data inside encrypted blocks is effectively "frozen", and in particular any labels buried in these blocks must not be changed. In addition there may be references from within these encrypted blocks to items elsewhere in the input deck that PRIMER cannot know about, possibly leaving these items vulnerable to being deleted during a "cleanup" operation. Similarly items within the simplified input file may themselves be vulnerable to being deleted. PRIMER does not "know" about these problems and thus cannot protect the user from accidental deletion or renumbering that may result in the input deck becoming invalid during the input phase.

####  Alternative ways of dealing with encrypted data

PRIMER has some alternative solutions for dealing with partially or wholly encrypted data blocks within a file which may be superior to the above. In brief:

* Special syntax rules permit the initial line of \*MAT, \*DEFINE\_CURVE and \*DEFINE\_TABLE definitions to be in clear while their body is encrypted. This means that their labels are known, and this is often enough to overcome errors due to missing definitions.
* Where \*MAT, \*DEFINE\_CURVE and \*DEFINE\_TABLE definitions are wholly encrypted (including their labels) it is possible to provide alternative in-clear versions after \*END in a special \*ENCRYPTED data block.
* It is also possible to define \*PARAMETER cards in this post \*END encrypted block to provide alternative definitions for actual parameter values that are embedded inside a PGP encrypted data block.

In both of these situations PRIMER "knows" that the definitions must not be changed and has interlocks to prevent them being deleted or relabelled. So despite being less flexible these solutions may be preferable to using post-END include files.

More details can be found in [PGP Encrypted Data](pgp-encrypted-keyword-data.md#pgp_main)

[Previous](editing-comments-in-include-files.md)  |  [Next](browse-for-missing-include-files.md)