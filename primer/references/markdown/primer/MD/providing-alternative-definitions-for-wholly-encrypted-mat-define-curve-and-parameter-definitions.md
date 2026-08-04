####  Providing Alternative Definitions for Wholly Encrypted *MAT, *DEFINE_CURVE and *PARAMETER Definitions

It is sometimes the case the proprietary input decks will contain material and loadcurve definitions that are totally encrypted, missing even the keyword headers and title lines. In this case PRIMER cannot "know" that these definitions exist, and their absence can generate all sorts of problems and error messages during model check. To deal with this problem from V11 onwards PRIMER allows you to provide alternative definitions for the missing items in a special "encrypted" section after \*END.

We have also encountered situations where parameters have been defined within an encrypted block, but referred to elsewhere (in clear), so from V13 onwards it is also possible to add parameter definitions to this post \*END encrypted block.

The assumption is that these definitions will be simplified non-proprietary variations of the encrypted data that provide enough information for PRIMER to work normally.

The syntax of this block is:

| \*ENCRYPTED\_START | Denotes the start of the special "alternatibe definitions for encrypted data" block |
| --- | --- |
| \*MAT\_type( *\_TITLE* )  <br> *Title line if \_TITLE suffix is used*  <br>&lt; label &gt; &lt; density &gt; (&lt; *further data fields optional&gt;)*  <br>( *further lines of data optional* ) | Any number of material definitions, in any order, may be provided. <br>The first two data fields on line 1 of the definition, usually &lt;label&gt; &lt;density&gt;  ***must***  be provided. <br>Further data fields may be provided, but will be set to zero if omitted. |
| \*DEFINE\_CURVE( *\_TITLE* )  <br> *Title line if \_TITLE suffix is used*  <br>&lt; label &gt; (&lt; *further data fields optional&gt;)*  <br>( *further lines of data optional* ) | Any number of loadcurve definitions, in any order, may be provided. <br>The first field on line 1, &lt;label&gt;, must be provided. <br>All further data fields are optional, and will be filled with zero if omitted.<br> <br>If no curve points are provided the two points (0,0) (1,1) will be inserted |
| \*DEFINE\_TABLE( *\_TITLE* )  <br> *Title line if \_TITLE suffix is used*  <br>&lt; label &gt; | Any number of table definitions, in any order, may be provided. <br>Nothing is assumed about the table contents, and by default it will not contain any loadcurves. This may generate warnings, so on the whole it is better to use curves to satisfy missing curve / table labels since, for the purposes of pre-processing, it won't matter which is used. |
| \*PARAMETER <br>\*PARAMETER\_EXPRESSION | Any number of parameter definitions, in any order, provided that parameters referred to in an expression are defined before the expression itself. (This capability is from V13 onwards.) |
| \*ENCRYPTED\_END | Denotes the end of this block |

Here is an example of such a block:


```
   *END
   $
   $ ===============
   $ ENCRYPTED cards (simplistic info for encrypted items in main deck) 
   $ ===============
   $
   *ENCRYPTED_START
   $
   *MAT_ELASTIC_TITLE
   This is a fabricated material definition
           22     7.85e3
   $
   *MAT_RIGID
           23       10.0
   $
   $
   *DEFINE_CURVE_TITLE
   This is a fabricated curve
           99
   $
   *DEFINE_TABLE_TITLE
   This is a fabricated table
          199
   $
   $
   *PARAMETER
   R ENDTIM       750.0
   $
   *ENCRYPTED_END
```


The \*MAT and \*DEFINE\_CURVE keywords are read in exactly the same way as they would be in the main part of the deck, and they are treated inside PRIMER in exactly the same way with the following exceptions:

* Material definitions are not checked during model check. This because populating them with zero values might be invalid, and it would be silly to generate errors because of this.
* Items defined in this way are "locked" against deletion. This is because they are presumed to be present inside opaque PGP encrypted blocks, and deleting them might lead to an inconsistent model, or alternatively lead to their labels being re-used resulting in a clash.
* Their labels are locked against being changed. Again, their labels are fixed inside opaque PGP encrypted blocks, so changing them could lead to conflicts. (This lock is not absolute: a determined user could change them by various means, for example by using Text Edit; however it is assumed that users will be sensible!)
* During keyword output they will not be written in the main deck, but rather after \*END in this \*ENCRYPTED section. If extra data fields beyond the minimum required were provided these will be written out, but otherwise only the bare minimum (as in the example above) will be written.

The \*PARAMETER definition is read and processed in exactly the same way as \*PARAMETER cards in the main body of the deck. However bear in mind that if a \*PARAMETER\_EXPRESSION refers to a parameter in an encrypted block, and you define the missing parameter after \*END in the same file, then you will get an "out of sequence" error during keyin since the expression will not initially be able to be resolved. PRIMER will sort this out later when the deck is complete, but to avoid this problem you should consider carefully the order in which files are read.

##### Alternative syntax with each card inside its own \*ENCRYPTED\_START ... \*ENCRYPTED\_END pair

Some workflows require each of these definitions to be within its own start...end pair, for example
$
\*ENCRYPTED\_START
\*PARAMETER
I int\_1 1
\*ENCRYPTED\_END
$
$
\*ENCRYPTED\_START
\*PARAMETER
R float\_2 1.0
\*ENCRYPTED\_END

The preference primer\*keyout\_post\_end\_encrypted can be used to modify this output as follows.

| **Preference value** | **Meaning** |
| --- | --- |
| COMBINED | All definitions are output within a single \*ENCRYPTED\_START ... \*ENCRYPTED\_END pair. This is the default. |
| INDIVIDUAL | Each definition is output inside its own \*ENCRYPTED\_START ... \*ENCRYPTED\_END pair |
| OMIT | This output is omitted. |

The example above uses "individual" output.

[Previous](pgp-data-within-an-airbag-definition.md)  |  [Next](further-considerations-affecting-encrypted-airbag-mat-and-define-curve-definitions.md)