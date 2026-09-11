####  Free-Standing PGP Encrypted Data Blocks

When a block of PGP encrypted data is encountered  ***outside***  the specific cards of a keyword it is referred to here as "free-standing", meaning independent of any keyword. PRIMER handles such blocks as follows:

* They are copied verbatim to a "saved pgp data" file.
* Separate files are used for the master keyword file and any include files.
* When the model is written back out any saved PGP data blocks are written out in the following locations:

#####  Where free-standing PGP data blocks are written in the keyword deck

Up to and including PRIMER V12 any free-standing PGP data blocks found in a file were always written out immediately before \*END during keyout, and in most cases this was fine because the position of a keyword in a deck does not matter.

However if the PGP data contained \*PARAMETER definitions which were referred to elsewhere in the deck this caused Ansys LS-DYNA to reject file because these parameters were referred to before they were defined. A similar problem could arise if the encrypted block referred to parameters previously defined, and the position at which it was output preceded these definitions.

Therefore more flexibility about the location in the deck at which free-standing PGP is written has been added to PRIMER V12.1 by introducing the preference:

primer\*freestanding\_pgp\_output\_location:

The possible values for this preference and the corresponding locations for writing free-standing PGP data are given in the table below.

| **Preference value** | **Location for free-standing PGP data in file** |
| --- | --- |
| *not defined* | Immediately before \*END (existing behaviour) |
| top\_of\_file | At top of deck |
| after\_parameters | After \*PARAMETER cards |
| after\_includes | After \*INCLUDE cards |
| before\_end | Immediately before \*END |

A further preference can be used to define how free-standing PGP data is written:

primer\*freestanding\_pgp\_output\_method:

| **Preference value** | **Location for free-standing PGP data in file** |
| --- | --- |
| *not defined* | Embedded in the file itself (existing behaviour) |
| embedded | Embedded in the file itself |
| as\_include | As include file " fs\_pgp\_data.key " |

There are some qualifications to the as\_include setting:

* It only applies to free-standing PGP data in the master file. Such data in include files is always left "embedded" 
 
  ***except that:***
* If include files are merged into the master file for output then all free-standing PGP data in both master and any include files are collected together and written to this single include file.

#####  Free-standing PGP data blocks in include files

If the order or position of the encrypted data in your deck  ***are***  important then it is recommended that you place them in an include file, since PRIMER will treat such a file verbatim and it does at least reduce the problem of positioning the data to the insertion of a single \*INCLUDE statement at the desired position in the master input deck.

From V11 onwards a special case is made for Material and Loadcurve data defined entirely within free-standing PGP encrypted blocks, which may have alternate (simple) definitions defined for them in a special post \*END encrypted section. From V13 onwards it is also possible to define parameters in this way. See [Providing Alternate Definitions...](providing-alternative-definitions-for-wholly-encrypted-mat-define-curve-and-parameter-definitions.md#alternate) below.

#####  Problems using merged keyword output when include files contain encrypted *END

It is sometimes the case that proprietary data is supplied as an include file, and the entire contents of that include file are encrypted. This is not a problem in itself, but it can cause problems if the encrypted block in the include file contains a \*END keyword and the option to write a single "merged" output deck is used. Consider the following:

| Original input deck with separate include file | What happens when Ansys LS-DYNA reads the file |
| --- | --- |
| 
```
Master file
     |
  *INCLUDE
     |
     +-- Include file
     :        |
     :    PGP Encrypted data
that
     :    contains encrypted
*END
     |
  *other keywords
     :
  *END
```
 | Master file is opened<br> <br>Include file is read and decrypted line by line<br> <br>When (encrypted) \*END is encountered the include <br>file is closed and reading returns to the master file.<br> <br>Further keywords are read<br> <br>Input terminates successfully |
| If this original deck is written out as a single "Merged" file, and the option to embed PGP encrypted data in the master file is used: |
| Merged output deck with embedded PGP data | What happens when Ansys LS-DYNA reads the file |
| 
```
Master file
     |
 --- Begin PGP data---
  PGP Encrypted data that
  contains encrypted *END
 --- End PGP data---
     |
  *other keywords
     :
  *END
```
 | Master file is opened, and any cards prior to the embedded <br>PGP data are read successfully<br> <br>The PGP encrypted data is read until \*END is encountered, <br>  ***whereupon keyword reading stops.***<br> <br>***Any further cards in the input deck are ignored and keyword input terminates prematurely with errors.*** |

Therefore when generating include files that are fully encrypted the following practice should be adopted:

* Put the \*END card in clear text at the end of the file, not in the encrypted section. 
or
* Omit the \*END card altogether. It is not strictly necessary as Ansys LS-DYNA will recognise the physical end of the file for itself, although this practice is not recommended.

[Previous](pgp-encrypted-keyword-data.md)  |  [Next](pgp-data-within-a-define-curve-definition.md)