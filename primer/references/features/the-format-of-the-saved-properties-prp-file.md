###  The Format of the Saved Properties (.prp) File

The saved properties file (.prp) is intended to be both programme-independent and model independent, so that attributes of a model's appearance can be shared between different programmes and variants of the same model. In particular the properties file can be shared between PRIMER and D3PLOT.

The file format is ASCII, so it is human readable and can be manipulated in a text editor, and its format is similar to Ansys LS-DYNA keyword format in that:

* Each data blocks begins with a "Keywords" that have an asterisk \* in column 1.
* Any number of comment lines may be inserted, and they start with $ , % or # in column 1.

However one significant difference is that all data is in free format, with no restrictions on field width or spacing between columns of data, so data will be formatted as:

| string | a string of some number of characters |
| --- | --- |
| integer | either a decimal number, or a hexadecimal one if it starts "0x..." |
| float | a floating point number |

A properties file contains the following blocks:

| **Header name** | **Status** | **Description** | **Notes** |
| --- | --- | --- | --- |
| [*PROPERTIES](the-format-of-the-saved-properties-prp-file.md#header_1) | Required | Defines the parameters of the following property state | This sequence of blocks is repeated for each saved property. |
| [*PROP_MASKS](the-format-of-the-saved-properties-prp-file.md#header_2) | Required | Describes the format of the data to follow |
| [*PROP_DATA](the-format-of-the-saved-properties-prp-file.md#header_3) | Required | Contains the actual property data for model items |
| [*PROP_SWITCHES](the-format-of-the-saved-properties-prp-file.md#header_4) | *Optional* | Contains information about "entity" panel settings |
| [*PROP_VIEW](the-format-of-the-saved-properties-prp-file.md#header_5) | *Optional* | Contains information about the current view settings |
| [*PROP_END](the-format-of-the-saved-properties-prp-file.md#header_6) | Required | Acts as an "end of property definition" marker |

Each block is described in more detail below.

>  
> 
> 

For each saved property data blocks should appear in the following order:
 
\*PROPERTIES 
&lt;code&gt; &lt;file version&gt; 
&lt;saved id&gt; &lt;title&gt;

| &lt;code&gt; <br>&lt;file version&gt;<br> <br>&lt;saved id&gt; <br>&lt;title&gt; | string <br>integer<br> <br>integer <br>string | is the programme name, here PRIMER  <br>is the version number of this file. This commences at 0 for release 11.<br> <br>is the saved property id, starting at 0 for "current". <br>is an optional title. At present this will be ignored. |
| --- | --- | --- |

This header block describes the basic parameters of the new saved property entry.

\*PROP\_MASKS 
row 1: &lt;keyword&gt; &lt;word&gt;&lt;data mask&gt; 
row 2: &lt;keyword&gt;&lt;word&gt; &lt;data mask&gt; 
: ::: 
row n: &lt;keyword&gt;&lt;word&gt; &lt;data mask&gt;

| &lt;keyword&gt; <br>&lt;column&gt; <br>&lt;mask&gt; | string <br>integer <br>integer | One of a known series of mask names. <br>The column number on the line, starting at 1. <br>Integer or hexadecimal value giving bits used. |
| --- | --- | --- |

The purpose of this block is to allow different programmes, which will almost certainly store information in different formats, to stipulate how they are presenting data, and also to specify how many columns (words) of data will be supplied in the \*PROP\_DATA block below.
 
You don't need to understand this block unless you plan to generate property files yourself, or to read PRIMER -generated property files into some other software. If this is the case please see " [More about *PROP_MASKS](the-format-of-the-saved-properties-prp-file.md#more_masks)" below.

\*PROP\_DATA 
row 1: &lt;item type&gt; &lt;start label&gt;&lt;end label&gt;&lt;word #1&gt;&lt;word #2&gt;...&lt;word #n&gt; 
row 2: &lt;item type&gt; &lt;start label&gt;&lt;end label&gt;&lt;word #1&gt;&lt;word #2&gt;... &lt;word #n&gt; 
: :::::: 
row n: &lt;item type&gt; &lt;start label&gt;&lt;end label&gt;&lt;word #1&gt;&lt;word #2&gt;...&lt;word #n&gt;

| &lt;item type&gt; <br>&lt;start label&gt; <br>&lt;end label&gt; <br>&lt;word #1&gt; <br>&lt;word #2&gt; <br>&lt;word #n&gt; | string <br>integer <br>integer <br>integer <br>integer <br>integer | Item name, eg NODE, PART, etc <br>The first label in the range, or FIRST or ALL <br>The end label in the range, or LAST. Omitted if the start label is ALL. <br>The first word of data, ie column 1 <br>The second word of data, ie column 2 <br>The last word of data, ie column n |
| --- | --- | --- |

The storage method here echoes the internal runlength-encoded format in which all items in the label range &lt;start&gt; ... &lt;end&gt; have the same property values.
 
ALL is used instead of &lt;start&gt; .. &lt;end&gt; labels when all items of the type share the same attributes.
 
FIRST is used in place of label &lt;start&gt; if this is the first item of its type, and LAST in place of label &lt;end&gt; if it is the last label. This is so that other models, perhaps with slightly different label ranges, will still apply the properties correctly.
 
Data words #1 to #n must be supplied for every item even if they do not contain any useful data, in which case they can be zero. The number of words expected on each line, #n, is inferred from the highest &lt;column&gt; entry in the preceding \*PROP\_MASKS block.

\*PROP\_SWITCHES 
row 1: &lt;item type&gt; &lt;drawn&gt;&lt;labelled&gt;&lt;named&gt; 
row 2:&lt;item type&gt; &lt;drawn&gt;&lt;labelled&gt;&lt;named&gt; 
::: : 
row n: &lt;item type&gt; &lt;drawn&gt;&lt;labelled&gt;&lt;named&gt;

| &lt;item type&gt; <br>&lt;drawn&gt; <br>&lt;labelled&gt; <br>&lt;named&gt; | string <br>integer <br>integer <br>integer | Item name, eg NODE, PART, etc <br>Whether this item is drawn <br>Whether this item is labelled <br>Whether this item is named |
| --- | --- | --- |

This data block is optional: if omitted the "entity" panel settings will be left unchanged when the file is read.
 
Each data field &lt;drawn&gt;, &lt;labelled&gt;, &lt;named&gt; is, at its simplest, 1 for true and 0 for false. However within PRIMER some item types have sub-keywords, and further bits can be used to denote the individual status of these.

\*PROP\_VIEW 
Matrix row 1: &lt;X cosine&gt;&lt;Y cosine&gt;&lt;Z cosine&gt; 
Matrix row 2: &lt;X cosine&gt;&lt;Y cosine&gt;&lt;Z cosine&gt; 
Matrix row 3: &lt;X cosine&gt;&lt;Y cosine&gt;&lt;Z cosine&gt; 
Offsets:&lt;X trans&gt;&lt;Y trans&gt;&lt;Z trans&gt; 
Scale:&lt;Scale factor&gt; 
Perspective:&lt;On/off&gt;&lt;Distance&gt;

| &lt;X/Y/Z cosine&gt; | float | The X/Y/Z components of the unit cosines for that matrix row |
| --- | --- | --- |
| &lt;X/Y/Z trans&gt; | float | The X/Y/Z component of the translations required to position the model in front of the eye position. |
| &lt;Scale&gt; | float | The scale factor from model space to screen (4096 x 4096) space |
| &lt;On/off&gt; | integer | Whether perspective is on (1) or off (0) |
| &lt;Distance&gt; | float | The perspective distance (from eye position to model centre) |

This data block is optional. If it is omitted the view will not be updated when the file is read.

\*PROP\_END  
(This block has no data)
 
This block signifies the end of the current property definition.
 
Here is an example properties file from a small model.


```
$ File J:\sled_model_binout\new_lg09_004.prp written at Tue Dec 06 15:40:43 2011
$
$ PRIMER Version  : 11.0
$ File   Version  :     0
$
*PROPERTIES
$
$ Code   File version
PRIMER             0
$ State id      Title
         0
$
*PROP_MASKS
$
$ Attribute    Word     Bits 
$ ---------------------------
BLANKED         1         0x1
$
ALPHA_MASK      2  0x78000000
RED_MASK        2     0x78000
GREEN_MASK      2    0x780000
BLUE_MASK       2   0x7800000
INDEX_MASK      2         0xf
FIXED_BIT       2        0x10
MODE_MASK       2        0x60
BRIGHT_MASK     2      0x7800
SHINE_MASK      2       0x780
SPECIAL_MASK    2  0x8000000f
BY_MODEL        2  0x80000001
BY_IFILE        2  0x80000002
BY_SUBSET       2  0x80000003
BY_PART         2  0x80000004
BY_SECTION      2  0x80000005
BY_MATERIAL     2  0x80000006
$
$
*PROP_DATA
$
$ Type                                       Label #1  Label #2     Word #1     Word #2
$ -------------------------------------------------------------------------------------
$
NODE                                              ALL                        0 0x7fff9ff0
BEAM                                              ALL                        0 0x7f879ff0
SHELL                                           FIRST           64           0 0x78079ff0
SHELL                                              65          128           0 0xfad61fe4
SHELL                                             129          256           0 0x7f801f90
SHELL                                             257          328           0 0x7ff81ff0
SHELL                                             329          392           0 0x787f9ff0
SHELL                                             393          456           0 0x7c879ff0
SHELL                                             457          520           0 0x785f9ff0
SHELL                                             521          584           0 0x787d1ff0
SHELL                                             585         LAST           0 0x37f81ff0
DISCRETE                                        FIRST            1           0 0x787d1ff0
DISCRETE                                            2            2           0 0x7d781ff0
DISCRETE                                     10000097         LAST           0 0x7f879ff0
SEATBELT                                          ALL                        0 0xf83f9fe4
ACCELEROMETER                                   FIRST            1           0 0x78079fe2
ACCELEROMETER                                       2            2           0 0x78781fe3
ACCELEROMETER                                       3         LAST           0 0x7f801fe4
PRETENSIONER                                      ALL                        0 0x787f9ff7
RETRACTOR                                         ALL                        0 0x7ff81ff5
SENSOR                                            ALL                        0 0x7f879ff6
SLIPRING                                          ALL                        0 0x78781ff3
SEGMENT                                         FIRST            1           0 0x783f9fe2
SEGMENT                                           488          491           0 0x7fb81fe8
SEGMENT                                           492         1079           0 0x78079fe4
SEGMENT                                          1080         LAST           0 0x7f879fe2
SET_NODE                                        FIRST            1           0 0x78079fe2
SET_NODE                                            2            2           0 0x78781fe3
SET_NODE                                            3         LAST           0 0x7f801fe4
SET_SEGMENT                                     FIRST            1           0 0x78079fe2
SET_SEGMENT                                         2            2           0 0x78781fe3
SET_SEGMENT                                         3         LAST           0 0x783f9fed
PART                                            FIRST            1           0 0x78079ff0
PART                                                2            2           0 0x7ad61ff0
PART                                                3            3           0 0x7f801f90
PART                                                4            4           0 0x7ff81ff0
PART                                                5            5           0 0x7f879ff0
PART                                             1001         1001           0 0x7fd81ff0
PART                                             1002         1002           0 0x78079ff0
PART                                             1003         1003           0 0x78781ff0
PART                                             1004         1004           0 0x7f801ff0
PART                                             2001         LAST           0 0x783f9ff0
MATERIAL                                        FIRST            1           0 0x78079fe2
MATERIAL                                            2            2           0 0x78781fe3
MATERIAL                                            3            3           0 0x7f801fe4
MATERIAL                                            4            4           0 0x7ff81fe5
MATERIAL                                            5            5           0 0x7f879fe6
MATERIAL                                         1001         1001           0 0x7fd81fee
MATERIAL                                         1002         1002           0 0x78079fe2
MATERIAL                                         1003         1003           0 0x78781fe3
MATERIAL                                         1004         1004           0 0x7f801fe4
MATERIAL                                         1005         1005           0 0x7ff81fe5
MATERIAL                                         2001         LAST           0 0x783f9fed
SECTION                                         FIRST            1           0 0x78079fe2
SECTION                                             2            2           0 0x78781fe3
SECTION                                             3            3           0 0x7f801fe4
SECTION                                             4            4           0 0x7ff81fe5
SECTION                                             5            5           0 0x7f879fe6
SECTION                                          1001         1001           0 0x7fd81fee
SECTION                                          1002         1002           0 0x78079fe2
SECTION                                          1003         1003           0 0x78781fe3
SECTION                                          1004         1004           0 0x7f801fe4
SECTION                                          1005         1005           0 0x7ff81fe5
SECTION                                          2001         LAST           0 0x787d1fea
PRESCRIBED_MOTION                                   2         LAST           0 0x7ff81fe3
SPC                                               ALL                        0 0x7fff9fe2
CONSTRAINED                                     FIRST            1           0 0x78079fe2
CONSTRAINED                                         2            2           0 0x7ad61fe3
CONSTRAINED                                         3            3           0 0x7f801fe4
CONSTRAINED                                         4            4           0 0x7ff81fe5
CONSTRAINED                                         5         LAST           0 0x785f9fe7
JOINT                                           FIRST           14           0 0x78079ff0
JOINT                                              15         LAST           0 0x7f801ff0
CONTACT                                           ALL                        0 0xffff9fe7
DATABASE_HISTORY                                  ALL                        0 0x78079ff2
DEFINE_COORDINATE                                 ALL                        0 0x78079fe2
DEFINE_SD_ORIENTATION                           FIRST            1           0 0x78079fe2
DEFINE_SD_ORIENTATION                               2         LAST           0 0x7f801fe4
$
$
*PROP_SWITCHES
$
$ Entity type switches                           Drawn     Labels    Names 
$ -------------------------------------------------------------------------
$
NODE                                               0          0          0
BEAM                                             0x1          0          0
SHELL                                            0x1          0          0
DISCRETE                                         0x1          0          0
SEATBELT                                         0x1          0          0
ACCELEROMETER                                    0x1          0          0
PRETENSIONER                                     0x1          0          0
RETRACTOR                                        0x1          0          0
SENSOR                                           0x1          0          0
SLIPRING                                         0x1          0          0
SEGMENT                                            0          0          0
SET_NODE                                           0          0          0
SET_SEGMENT                                        0          0          0
PART                                               0          0          0
MATERIAL                                           0          0          0
SECTION                                            0          0          0
PRESCRIBED_MOTION                                  0          0          0
SPC                                                0          0          0
CONSTRAINED                                        0          0          0
JOINT                                            0x1          0          0
CONTACT                                            0          0          0
DATABASE_HISTORY                                   0          0          0
DEFINE_COORDINATE                                  0          0          0
DEFINE_CURVE                                       0          0          0
DEFINE_SD_ORIENTATION                              0          0          0
$
$
*PROP_VIEW
$
$ Current viewing attributes
$ --------------------------
$ 
Matrix row 1:   8.769390E-001   -4.765534E-001   -6.238726E-002
Matrix row 2:   1.884609E-001    2.215460E-001    9.567727E-001
Matrix row 3:  -4.421267E-001   -8.507872E-001    2.840920E-001
Offsets:       -2.400639E+002   -1.826899E+001    1.233605E+002
Scale:          1.391819E+000
Perspective:                0    4.503000E+003
$
$
*PROP_END
$
$
$ End of file

```


####  More about the *PROP_MASKS block

You only need to understand property "masks" if you plan to create your own property files, or to read the PRIMER -generated ones into 3rd party software.

A "mask" defines the bits in a word that are used to contain data. In this context a "word" is always a single precision 32 bit integer, so you will be defining which of these 32 bits contain the data you want.

As an example let us take the problem of defining colour, which is specified by 4 components, generally known as RGBA in computer graphics:

| **Component** | **Property mask** | **Description** |
| --- | --- | --- |
| **R** ed | RED\_MASK | For each of red, green and blue the value must be in the range 0 to 100% |
| **G** reen | GREEN\_MASK |
| **B** lue | BLUE\_MASK |
| **A** lpha (transparency) | ALPHA\_MASK | A value must lie in the range 0% (fully transparent) to 100% (fully opaque) |

Therefore bright red, with no transparency, would comprise 100% Red, 0% Green, 0% Blue, 100% Alpha.

#####  Example 1: External data contains each colour component as a separate floating point value in the range 0.0 to 100.0

In this case the easiest solution would be to express your colours as 4 separate values. These must be integers, and the full bit field must imply 100%, so the easiest solution would be to convert the floating point range 0.0 to 100.0 into values in the range 0 to 255 by multiplying by 2.55 and writing the result as integers. The data masks you define might then be:

| RED\_MASK1255 <br>GREEN\_MASK2255 <br>BLUE\_MASK3255 <br>ALPHA\_MASK4255 | Each colour channel is defined in a separate integer word<br> <br>Red = word #1, Green = word #2, Blue = word #3, Alpha = word #4<br> <br>and lies in the range 0 - 255 |
| --- | --- |

And a typical property line to define some shells with labels 1 to 10 that are cyan (green + blue) and 50% transparent would then be

| Item name | Start label | End label | Word 1: Red value | W2: Green value | W3: Blue value | W4: Alpha value | .. further columns |
| --- | --- | --- | --- | --- | --- | --- | --- |
| SHELL | 1 | 10 | 0 | 255 | 255 | 128 | ... |

The choice of columns 1 to 4 for the RGBA components is arbitrary, you could choose any columns you like.

#####  Example 2: External data contains each colour component packed in a single 32 bit word

A more compact, and very common, way of storing RGBA data is to express each colour component in the range 0 - 255, which requires 8 bits or 1 byte, and to pack these four bytes into a single 32 bit word. Drawn as a diagram we could express the 32 bits in this word as:

| Highest byte: Alpha bits | Blue bits | Green bits | Lowest byte: red bits |
| --- | --- | --- | --- |
| AAAAAAAA | BBBBBBBB | GGGGGGGG | RRRRRRRR |

We can now define our colour masks, assuming that the colour word is in column #1, as

RED\_MASK10x000000ff 
GREEN\_MASK10x0000ff00 
BLUE\_MASK10x00ff0000 
ALPHA\_MASK 10xff000000

Hexadecimal (0x...) format has been used here, but the values could equally well - if less conveniently - be expressed in decimal. For example the Red mask 0x000000ff is the same as decimal 255 , and it would be legal to use that instead. Using this format our 50% transparent cyan shells would now be defined more compactly as:

| Item name | Start label | End label | Word 1: RGBA | .. further columns |
| --- | --- | --- | --- | --- |
| SHELL | 1 | 10 | 0x80ffff00 | ... |

Again hexadecimal has been used here, since the decimal equivalent would be an unwieldy negative number.

#####  What property masks are required?

You only have to provide property masks for the values you want to change. When property files are read in they only overwrite the attributes that they define so, for example, if you only included blanking information in a file the colour and lighting attributes of the model would be unchanged when it was read. Another example might be that you only have RGB colour information, and no Alpha (transparency) data. In that case omitting the Alpha mask and data word would leave item transparency unchanged when a file is read.

#####  Which columns may data occupy?

Up to 20 columns of data may be provided, numbered 1 to 20, and any attribute may exist in any column. When the \*PROP\_MASKS data block is read the highest column number is remembered and the subsequent \*PROP\_DATA block must contain that many columns of data on each line. It doesn't matter if data in a given column is not read, for example if you already have formatted data and you want to ignore some of it simply define masks that only specify the data you want.

#####  Valid property masks for PRIMER:

| **Mask name** | **Meaning** |
| --- | --- |
| BLANKED | The bit(s) used to designate that an item is blanked, ie blanked (non-zero) or unblanked (zero) |
| MODE\_MASK | The display mode: 0= wireframe, 1 = hidden, 2 = shaded, 3 = current |
| ALPHA\_MASK | The Alpha (transparency) <br>bits. 100% = opaque. | It is assumed that a fully occupied bit field is 100% of the given component value for all these types |
| RED\_MASK | The Red bits |
| GREEN\_MASK | The Green bits |
| BLUE\_MASK | The Blue bits |
| BRIGHT\_MASK | The diffuse brightness | At present lighting is only controllable on a programme-wide basis in PRIMER , so these fields are written but not read. However other codes, notably D3PLOT, can read them to obtain lighting data.<br> <br>As with colour a fully occupied bit field is assumed to be a value of 100% |
| SHINE\_MASK | The specular brightness <br>(shininess) |
| The following are PRIMER -specific and reflect its internal storage of colour. External programmes would not normally use these, and can ignore them. They are included here for completeness. |
| INDEX\_MASK | The bits set aside for indexed colours in the sequence Black (0), white (1), ... grey (15) |
| FIXED\_BIT | This bit is set if the item has a fixed colour as opposed to an inherited one using a code below |
| SPECIAL\_MASK | These bits define the mask for "inherited" colour codes below |
| BY\_MODEL | Colour is based on model id |
| BY\_IFILE | Colour is based on include file id |
| BY\_SUBSET | Colour is based on subset (part tree assembly) id |
| BY\_PART | Colour is based on the parent part's colour |
| BY\_SECTION | Colour is based on the parent section colour |
| BY\_MATERIAL | Colour is based on the parent material colour |

[Previous](options-managing-saved-properties.md)  |  [Next](accelerated-graphics.md)