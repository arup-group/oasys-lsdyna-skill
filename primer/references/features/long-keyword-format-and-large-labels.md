###  "Long" Keyword Format and "Large" Labels

Historically the Ansys LS-DYNA keyword input deck has allocated field widths of either 8 or 10 columns for more items, resulting in a de facto maximum label of 99,999,999. The use of an intermediate "structured format" deck further limits some field widths, with a few items being limited to 5 columns, ie 99,999. In the discussion below this "small" format will be referred to as "regular".

To address this problem Ansys LS-DYNA (release 971 R7.1 onwards) also supports a "long" input format in which all data fields become 20 characters wide, permitting larger labels up to approximately 9e15 (in practice up to 999,999,999,999,999) to be used.

This "long" format worked, but was not popular because it was overkill: most people needed only a modest increase in label sizes but it doubled file sizes or worse. Therefore in Ansys LS-DYNA R9 a new "i10" format was introduced which is the same as traditional (small) format except that any data fields smaller than 10 columns wide are promoted to 10 columns, making it possible to read labels up to 9,999,999,999. Support for this format has been added to PRIMER V17

PRIMER has been developed to support these features, and the current status is:

| PRIMER up to and including V11.1 | Only supports the original regular format input deck, and labels up to ~2e9. |
| --- | --- |
| PRIMER V12 onwards | Supports both "long" keyword format and "large" labels up to ~9e15 <br>Also supports "extended" label ranges up to ~9e18. |
| PRIMER V17 | Supports I10 format. |
| PRIMER V18 | Has more extensive and detailed support for I10 and Large format output including both automatic and explicit promotion of individual \*keywords using "%" and "+" suffices. <br>See [Automatic Promotion to I10 and Large formats](automatic-promotion-to-i10-and-large-formats.md#promotion)and [Explicit per keyword promotion to I10 and Large formats using the "%" and "+" suffices](keyword-promotion-explicit-per-keyword-promotion-to-i10-and-large-formats-using-the-and-suffices.md#explicit_i10). |

####  Setting the current label limits in PRIMER 
 
PRIMER detects the current label limit range from the input format and the largest label in the model, and selects the appropriate output format and label checking limits automatically. Historically input decks have been in regular (small) format with labels up to 99,999,999, and since this gives smaller keyword files than large format PRIMER will keep to these limits if possible, and only set i10 or large format if required.
 
Label format is a "per model" attribute, and each model in PRIMER can have different settings which can be changed in the following ways:
 
#####  Simple method: using the Model List panel 
 
You can swap a model between "small", "i10" and "large" labels formats using the popup attached to the M *n*  buttons thus:
 
![](../Storage/primer-22-1/primer_links/sect_5/5a/label_5.png)

| **Meanings of label attributes options** |
| --- |
| Small labels | Numeric labels: 1 to 99,999,999 <br>Character labels: 10 characters |
| I10 (32) | Numeric labels: 1 to ~2e9 <br>Character labels: 10 characters |
| I10 (64) | Numeric labels: 1 to 9,999,999,999 <br>Character labels: 10 characters |
| Large labels | Numeric labels: 1 to ~9e15 <br>Character labels: 20 characters |
| Advanced... | Maps the detailed panel below. |

The reason for the (32) and (64) variants of I10 format is that the maximum value that can be represented by a signed 32 bit single precision integer is 2^31-1 = 2,147,483,647 (~2e9).
 
Therefore if single precision Ansys LS-DYNA is to be used for analysis the I10 (32) limit should be used for labels, whereas if double precision LS-DYNA is used the I10 (64) setting can be used, permitting labels up to 9,999,999,999.
 
However a further consideration is the format of the binary output files from Ansys LS-DYNA. Double precision files are vary large, so Ansys LS-DYNA has the option to convert them to single precision for output ( \*DATABASE\_FORMAT IBINARY field). Single precision output means that labels must lie in the range 1 to ~2e9, so if you plan to "run in double precision but write single" then stick to the I10 (32) option above to avoid problems when post-processing.
 
#####  Advanced... method: using the Detailed label format panel
 ![](../Storage/primer-22-1/primer_links/sect_5/5a/label_2.png) The detailed label panel can also be mapped via Model &gt; Renumber, Label range
 
![](../Storage/primer-22-1/primer_links/sect_5/5a/label_1.png)

As explained above PRIMER works internally using 64 bit integers for labels, permitting the full ~9e18 range in all internal contexts, however it is useful to impose "soft" limits on labels if you are planning to use normal (small) output format. The Label Range panel allows you to set one of three modes on a per-model basis:

| **Label format chosen** | **Typical limit sig figs** | **Comments** |
| --- | --- | --- |
| Small format (8 sig figs) | 8 | Limits most labels to 8 "9"s <br>Limits character labels to 8 or 10 chars <br>Fully supported by JavaScript |
| I10 (32) format (10 sig figs) | 10 | Limits labels to ~2e9 <br>Limits character labels to 10 chars <br>Fully supported by JavaScript and <br>  ***single***  precision Ansys LS-DYNA |
| I10 (64) format (10 sig figs) | 10 | Limits labels to 10 "9"s <br>Limits character labels to 10 chars <br>Fully supported by JavaScript and <br>  ***double***  precision Ansys LS-DYNA |
| Large format (15 sig figs) | 15 | Limits labels to approx 15 "9"s <br>Limits character labels to 20 chars <br>  ***Suitable***  if you [plan to use Ansys LS-DYNA <br>or JavaScript](long-keyword-format-and-large-labels.md#scripting_limits) |
| Extended format | 18 | Limits labels to approx 18 "9"s <br>Limits character labels to 20 chars <br>  ***NOT suitable***  if you [plan to use Ansys LS-DYNA <br>or JavaScript](long-keyword-format-and-large-labels.md#scripting_limits) |

The sections below explain in more details what these limits mean and why they exist.
 
(The ability to add a constant increment to all labels in a model was added for testing purposes when developing the ability to process 64 bit labels. It is an entirely "dumb" capability with no checking for consequences, and if you use it you do so at your own risk. More sophisticated renumbering capabilities are available under [Model, Renumber](model-renumber-renumbering-models-andor-their-contents.md#37MODELRENUMBER).)

####  More about "large" labels

In "long" Ansys LS-DYNA format all data fields become 20 characters, and the differences between this and normal format are given in the following table:

| **Label type** | **Limit in regular keyword format** | **Limit in I10 keyword format** | **Limit in long keyword format, all fields 20 wide** |
| --- | --- | --- | --- |
| Most items, eg \*NODE, defined via 8 wide fields | 99,999,999 | 8 sig figs | 9,999,999,999 | 10 sig figs | ~9e15 | 15 sig figs |
| Materials etc defined by 10 wide fields | ~2e9 | 9 sig figs |
| Items constrained by 5 wide fields | 99,999 | 5 sig figs |
| Character labels | 8 characters, or <br>10 chars from 971R7.1 onwards | 10 characters | 20 characters |
| Parameter names | 9 characters | 9 characters | 9 characters (early versions) <br>19 characters worked in R10 onwards |

Note that

* Single precision Ansys LS-DYNA will read labels larger than the 32 bit signed integer limit of ~2e9, but it mangles them into smaller values. The jobs will run, but the output files are truncated to 32 bit precision so post-processors may fail because of label errors or duplication. It would be prudent to limit labels run in single precision Ansys LS-DYNA to the ~2e9 limit.
* Ansys LS-DYNA limits labels in long format to 15 significant figures and that scripting in JavaScript imposes the same limit, both dictated by the mantissa precision of the 64 bit IEEE double length floating data type.
* PRIMER is capable of handling labels up to the 18 significant figure limit imposed by the 64 bit IEEE "long long" integer type. 
 
"Large" label format in PRIMER imposes the same 15 digit limit as Ansys LS-DYNA in order to ensure compatibility 
"Extended" label format in PRIMER permits the full 18 digit range, but is not the default because it is incompatible with both Ansys LS-DYNA and JavaScript.

These limits are explained in more detail below.

***The following discussion is an advanced topic and you don't need to understand it fully. If you need further help please contact Oasys Ltd Support.***

#####  Numerical label limits dictated by the hardware

In order to support "large" labels it has been necessary to move from using 32 bit (4 byte) integers to 64 bit (8 byte) ones to store them. The maximum values that can be represented by these two data types are:

| **Label limits dictated by 32 bit and 64 bit integer data types** | **#useful decimal digits** |
| --- | --- |
| 32 bit signed integer | Limit is 2\*\*31 - 1 | +/-2,147,483,641 (~2e9) | 9 |
| 64 bit signed integer | Limit is 2\*\*63 - 1 | +/-9,223,372,036,854,775,807 (~9e18) | 18 |

PRIMER V12 has been modified to use 64 bit integers for all labels, therefore it is capable of dealing with the full range of ~9e18.

#####  Numerical label limits dictated by scripting and Ansys LS-DYNA

There are further limits imposed by both Ansys LS-DYNA and the JavaScript language, so if you use either this will limit the maximum size of label you can use.

JavaScript stores all numbers in a 64 bit "double" variable, and Ansys LS-DYNA also uses this type in some contexts. This occupies the same space in the hardware as a 64 bit integer, but it is a floating point value with different internal organisation, and this means that it only has 53 bits of mantissa precision available since the remaining 11 bits store the sign and exponent. The maximum value that can represented accurately in decimal format is:

| **Label limits dictated by 64 bit long double data type used by JavaScript** | **#useful decimal digits** |
| --- | --- |
| 64 bit double | Limit is 2\*\*53 - 1 | +/-9,007,199,254,740,989 (~9e15) | 15 |

#####  Numerical label limits dictated by the Ansys LS-DYNA version and binary file output format chosen.

Ansys LS-DYNA is available in both single (32 bit) and double (64 bit) precision versions.

| Ansys LS-DYNA version | What is can read and process | What it outputs[( **\*** )](long-keyword-format-and-large-labels.md#bigid) |
| --- | --- | --- |
| Single precision (32 bit) | It \*can\* read labels larger than the ~2e9 limit, but they tend to get mangled. This doesn't affect the analysis because internally it uses in the internal index in the range 1 to N, where N is the number of items of that type in the model, so the job will run. But it can make interpreting output and error messages tricky | It will only write single precision binary database files. <br>This means that labels outside the ~2e9 limit get mangled, and while *something* will be written it will cause confusion when post-processing, and may cause post-processors to fail if labels end up being repeated. |
| Double precision (64 bit) | In this version all integers are 64 bit, so labels up to the ~9e15 limit can be used successfully. | Its native binary output format is double precision, meaning that labels up to the full ~9e15 limit will be written correctly. <br>The \*DATABASE\_FORMAT card (IBINARY field) can be used to write single precision files instead, in which case the ~2e9 label limit applies as above. |

Therefore if you will be using single precision Ansys LS-DYNA, or using double precision Ansys LS-DYNA but writing single precision binary files, then stick to the  [I10 (32)](long-keyword-format-and-large-labels.md#i1032) option above to avoid problems when post-processing.

( **\*** There is an undocumented "bigid" input argument for Ansys LS-DYNA which will write the labels in 32 bit files as 64 bit integers. At the time of writing (Feb 2020) this is not proven to work correctly so if you plan to use this please check it first before relying on it.)

#####  Numerical label limits dictated by common sense

It will be clear from the discussion above that the absolute maximum usable numbers are not very human-friendly powers of 2, and moreover attempts to exploit every last piece of precision could result in numerical overflow. For example 2,200,000,000 cannot be represented by a 32 bit signed integer.

Therefore it is  ***strongly***  recommended that you stick to human-friendly numbers of decimal digits, giving limits expressed by some number of 9s, and the following table gives suggested sensible limits. It is further recommended that when using large format you limit label usage to 15 decimal digits, as numbers larger than this will not be accessible in JavaScript or read by Ansys LS-DYNA.

| **Input deck format** | **Max recommended label value** | **#digits** | **Comments** |
| --- | --- | --- | --- |
| Regular (small) input format | 99,999,999 | 8 | Limited by typical field width of 8 |
| I10 (32 bit) format | 2,147,483,647 | 10 | Limited by single precision integers |
| I10 (64 bit) format | 9,999,999,999 | 10 | Limited by typical field width of 10 |
| Large (long) input format | 999,999,999,999,999 | 15 | Limited by the use of 64 bit double. <br> **Permits use of Ansys LS-DYNA & JavaScript** |
| Extended format | 999,999,999,999,999,999 | 18 | Limit dictated by use of 64 bit integer. <br> **Prohibits use of Ansys LS-DYNA & JavaScript** |

| The table above explains where the settings on the Label Range panel come from, and it is recommended that users stick either to the 8, 10 or 15 significant figure modes. | ![](../Storage/primer-22-1/primer_links/sect_5/5a/label_3.png) |
| --- | --- |

[Previous](include-file-selection-on-edit-panels.md)  |  [Next](character-labels.md)