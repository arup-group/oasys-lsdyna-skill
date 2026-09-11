####  Pre-out: Options Tab 

Options controlling the layout and other attributes of the output file.
 ![](../Storage/primer-22-1/primer_links/sect_3/images/post_end_options.png) 
The OUTPUT option gives a choice between writing keywords in alphabetical order or a more intuitive classic order e.g. sets are written together with their referencing objects.
 
The Short matl name option (available from LS 970 onwards) will write all material cards in the form \*MAT\_NNN (\_option) rather than the full name.
 
The HM comments option writes out part, section and material titles as comments for use with the Hypermesh pre-processor.
 
The Thumbnails option will write out any existing include file thumbnail images at the end of each keyword file.
 
The Part Colour option will add a PRIMER -readable comment line to all \*PART cards that contains their colour, display mode and transparency settings, meaning that these will be restored when the file is reread into PRIMER
 
The ZTF output option will write a  *&lt;name&gt;*   .ztf file, which is an extra binary data file readable by D3PLOT, making it possible to visualise extra information when post-processing. Specific ZTF modules may be selected/de-selected by clicking the ZTF opts button.
 
The Field Headers option adds a comment line above each row of keyword output containing the data field acronyms (eg PID, SECID, EOSID, etc)
 
The Write comments option determines whether or not [embedded keyword comments](embedded-keyword-comments.md#comments) read from the input deck or added in this session are written out in the output deck.
 
The ANSA comments option allows users to decide whether or not to write ANSA comments in the current model. It is not possible to select the option "Write assembly data in ANSA format" if the check button "ANSA comments" is switched on. In that case, PRIMER will use the default option "Write assembly data in PRIMER format".
 
The Timestamp option allows users to decide whether or not to write the timestamp, Ansys LS-DYNA version and PRIMER version comments in the current model. .
 
The Xref comments option controls whether cross-references to items are written as comment lines in the output file.
 
The Post \*END data option controls whether data succeeding \*END are written to the output file. This option over-rules other options that control whether specific post \*END items are written (e.g., 'write out all connections' or 'suppress\_keyout\_geometry').
  
##### Output style![](../Storage/primer-22-1/pre-out-options-tab/pre-out-options-tab-2023-12-22-1.png) 

Controlling how floating point numbers are formatted. 
 
Floating point numbers present a problem in computer-generated output, especially when the field width available is limited. In which way should they be written?

| Method | How a computer might write it | How a human might write it |
| --- | --- | --- |
| As precisely as possible? | 299.99999 | 300.0 |
| Rounded | 300.0 | 300.0 |
| Exponential format | 2.99999e02 | 3e2 |

A further problem is that the mantissa precision of a 32 bit floating number is 1 part in 16,777,216 meaning that the decimal precision is "7 and a bit" digits, with the 8th digit being unreliable. This doesn't mean that mantissa values in the range 1 to 16,777,215 for any exponent are exact with mantissas from 16,777,216 to 99,999,999 getting progressively more unreliable, rather for any value its accuracy depends on how well its mantissa (when multiplied by a binary exponent) maps onto a power of 2. Just to complicate matters different hardware can use different rules for the more abstruse aspects of floating point arithmetic, meaning that the unreliable 8th digit may vary slightly from machine to machine.
 
Historically PRIMER has tried to square this circle by using special routines to process floating point numbers written to "narrow" (meaning 10 digits or less wide) data fields which try to achieve the following goals:
 
* Maximise the number of significant figures written out.
* Give consistent precision on different hardware.

This is computationally expensive and slows down keyword output.
 
At the time of writing (September 2019) the use of different hardware has become a thing of the past, and almost all analysis and desktop processing is performed on machines using x86 architecture and IEEE floating point arithmetic. This removes the problem of trying to give the same results on different hardware, making it possible to use streamlined and much faster output processing.
 
The output styles available are:

| **Native** | Standard C formatting, not recommended |
| --- | --- |
| **Common** | Full precision, consistent on all hardware |
| **Rounded** | Rounded precision, consistent on all hardware |
| **Fast\_full** | Full precision | between 2.5x and 4x faster than "common" |
| **Fast\_rounded** | Rounded precision |

There are two subtle differences between the output of "Common" and "Fast\_full":

* The format of values between 1.0e-2 and 1.0e-3 has changed from exponential to not using an exponent. For example 

    | In "common" format we write |  | 1.23456e-3 |
    | --- | --- | --- |
    | In "fast\_full" format we write |  | 0.00123456 |

The reason for this change is that in a narrow data field such as the 10 column one used here we can obtain one extra digit of precision in the non-exponential case by omitting the leading "0". For example if the value being output here was in fact 1.23456  ***7***  e-3 we could output that extra significant figure by writing it as ".001234567", but we could not do this using exponential format without requiring an 11th column.
* The format of values in "wide" fields, meaning more than 10 columns wide, will no longer contain unnecessary trailing zeros. 

    | In "common" format we write |  | 120.00000 |
    | --- | --- | --- |
    | In "fast\_full" format we write |  | 120.0 |

Users who employ tools such as "diff" to compare output files by looking purely at the text may therefore see differences in the default output. They have two choices:

* Perform a one-time conversion to the new format. 
or
* Continue to use the old "common" format, accepting that it will be slower.

##### Double precision nodal coordinates

PRIMER uses 64 bit double precision floats for nodal coordinates, previous versions used 32 bit single precision floats. The main differences are:

| Attribute | 32 bit single precision | 64 bit double precision |
| --- | --- | --- |
| Mantissa precision | 7 reliable digits, 8th digit is "dodgy" | 15 reliable digits, 16th digit is "dodgy" |
| Exponent precision | Approximately E +/-38 | Approximately E +/-308 |
| Internal transformations | Tend to leave errors ~1.0e-7 | Tend to leave errors ~1.0e-15 |
| Storage cost | 4 bytes per value | 8 bytes per value. <br>Overall memory usage tends to be 3% - 5% larger |

This change was made for two main reasons:

1. Internal transformations required for processing Orient, \*INCLUDE\_TRANSFORM, \*NODE\_TRANSFORM and \*PART\_MOVE were introducing small but significant errors into coordinates because of the mixture of single and double precision arithmetic used. Swapping to double precision throughout has improved this accuracy by ~8 orders of magnitude.
2. When PRIMER formed part of a workflow in which one component provided nodal coordinates at more than 8 significant figures these would get truncated to 8 sig figs following a read/write sequence, even if nothing was changed. This was not normally of any *engineering* significance (the dimensional changes tended to be less than the wavelength of light!), but in an automated workflow where tools such as "diff" are used to detect changes this caused problems.

###### Detailed options... Double precision output formatting

Coordinates are now read, stored and written using the full available field width, which is 16 columns wide for Small and I10 format and 20 columns for Large format. As a result the typical precision for coordinates written to a 16 wide field is from 11 to 15 significant figures depending on the presence of exponents and -ve signs. For a 20 wide field the default is to round the result to 15 sig figs although there is an option to write more values.

This controllable via the [Model] Write, LS-DYNA output options, [Options tab], Output style, Detailed options... panel
![](../Storage/primer-22-1/pre-out-options-tab/pre-out-options-tab-2023-12-22-3.png)

![](../Storage/primer-22-1/pre-out-options-tab/pre-out-options-tab-2023-12-22-5.png)

Humans find it hard to process too many digits of precision so the default for nodal coordinates in GUI panels is 10 significant figures, for example
![](../Storage/primer-22-1/pre-out-options-tab/pre-out-options-tab-2023-12-22-7.png) ![](../Storage/primer-22-1/pre-out-options-tab/pre-out-options-tab-2023-12-22-6.png)

##### 

##### 

##### 

##### 

However output to file needs to be at the full available precision, for example:

| ![](../Storage/primer-22-1/pre-out-options-tab/pre-out-options-tab-2023-12-22-8.png) | **\*NODE**<br><br>**$: nid cx cy cz tc rc**<br><br>**7.6666666666666671.24401693585629.089316397477040 0 0**<br> **** *(this example uses Small / I10 format using I8, 3E16, 2I8 format)* |
| --- | :--- |

###### **Clamp to zero.**

Internal transformation and orientation operations require numerically sensitive operations which, even when performed using double precision arithmetic, tend to result in small errors at the 15th and 16 significant figures. This is a particular problem when processing the keywords

\*INCLUDE\_TRANSFORM
\*NODE\_TRANSFORM
\*PART\_MOVE

Because the process that must be gone through, even when simply reading and writing a deck with no changes, is the following:

| **Read Model** | **Read Model** | **Write model** | **Write model** |
| --- | --- | --- | --- |
| Read original untransformed data | Transform it into "as transformed" position | Apply inverse transform to return to original untransformed position | Write to disk |
| --- | --- | --- | --- |

The transform / inverse transform operations each introduce small numerical errors at the 15th or 16th significant figure with the result that output coordinates tend to vary slightly compared to the original input. For non-zero values this difference is usually insignificant and it tends to get rounded away when output is truncated to fit into the output field. However values which were originally zero may now become something like 1e-15 which not only looks stupid but is a significant change to the input deck.

Clamp to zero is designed to deal with this problem. ![](../Storage/primer-22-1/pre-out-options-tab/pre-out-options-tab-2023-12-22-10.png)

| Trans Coord | Only processes nodal coordinates which have been subject to one of the three transformation keywords listed above. | Default = 1.0e-15 |
| --- | --- | --- |
| All Coords | Processes any nodal coordinate | Default = 0.0 |

The effect is that if |coordinate| &lt;= clamp\_value it is reset to zero when output.

##### **Rounding of output.**

When **Rounded** or **Fast\_rounded** formats are used the least significant digit of the value is rounded away.

* For single precision floating point numbers, overwhelmingly the common case, this means that 8 digits are rounded to 7.
* For double precision floating point numbers 16 digits are rounded to 15, however this is academic as most Ansys LS-DYNA card formats limit output to fewer values than this.

###### Rounding of mid-way ("tied") values ![](../Storage/primer-22-1/pre-out-options-tab/pre-out-options-tab-2023-12-22-11.png) 

Rounding is straightforward except for those rare cases when a value lies precisely between two values. For example 2.5: should this be rounded up to 3.0 or down to 2.0?

The IEEE 754 standard offers two options for such "tied" decimal values:

* Tie to even (default)
* Tie away from zero

The difference between these two is best illustrated by example

| Tied value | Tie to even | Tie away from zero |
| --- | --- | --- |
| +2.5 | +2.0 | +3.0 |
| +3.5 | +4.0 | +4.0 |
| -2.5 | -2.0 | -3.0 |
| -3.5 | -4.0 | -4.0 |

By default PRIMER uses "ties away from zero" since this is more intuitive and what a human would expect, but most standard numerical output libraries use "Tie to even". So PRIMER complies with IEEE754 but uses the alternative rather than the default value.

In the vast majority of cases this difference is totally irrelevant but if PRIMER is part of a workflow in which other pieces of software produce rounded output using "ties to even" and something like "diff" is used to check output this difference may become significant. Therefore the option to change this is provided.
[Previous](include-files-and-compression.md)  |  [Next](pre-out-options2-tab.md)