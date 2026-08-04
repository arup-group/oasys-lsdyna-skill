####  PGP Data within a *MAT Definition

A special case is that PGP encrypted data with a material card is treated "intelligently" if the following format and rules are applied:

| \*MAT\_ *xxx* \_TITLE | Where *xxx* is the material type. A new \*MAT header is required for each material |
| --- | --- |
| *&lt;title&gt;* | <ul> <li>V10: Must be (I10,A70) format, with the material label in the first 10 columns <br> <br> </li> <li>V11: Permits a more sophisticated treatment that also allows density, young&#39;s modulus and poisson&#39;s ratio to be read. This is described in more detail <a href="pgp-data-within-a-mat-definition.md#v11_parsing">below </a> </li> </ul> |
| -----BEGIN PGP MESSAGE----- | The encrypted data must be the whole of the rest of this material's data only. |
| *[Encrypted data]* |
| -----END PGP MESSAGE----- |

| The title parsing rules used in PRIMER V11 onwards for the title line in a partially PGP encrypted material definition |
| --- |
| **Mandatory:** | The first token nnnn on the line that can be parsed as a label <br>or <br>The first token starting MATLx\_nnnn on the line | Will be interpreted as material label nnnn |
| ***Optional*** | A subsequent string " RO=xxxxx " (or the lower case " ro=xxxxx ") | Will be interpreted as density xxxxx (There must not be any spaces in the string RO=xxxx ) <br>This will be applied to all material types for which the first data field is density (RO). It will not be applied to other material types, for example spring materials where the first field is stiffness. |
| ***Optional*** | A subsequent string " YM=xxxxx " (or the lower case " ym=xxxxx ") | Will be interpreted as Young's Modulus (E) | These values are currently only applied to material types 1 (elastic), 9 (null) and 20 (rigid). |
| ***Optional*** | A subsequent string " NU=xxxxx " (or the lower case " nu=xxxxx ") | Will be interpreted as Poisson's Ratio () |

If these rules are followed then PRIMER "knows" what the material label and type are, even if it doesn't know anything about the details of the data.

Given this information it can deal with the material in a reasonably intelligent fashion, for example if it is rigid then it can apply the normal rules about rigid bodies. However:

* If RO, YM or NU are not defined PRIMER cannot "know" what the material's yield stress or other properties (perhaps used in timestep calculations) are, so: 
 
A nominal density or stiffness is inserted as appropriate 
A minimal nominal set of remaining required data is also inserted.
* PRIMER also cannot "know" about other items, typically loadcurves, that this material might reference. 
 
When a deck also contains encrypted loadcurves PRIMER assumes that all encrypted loadcurves are referenced by all encrypted materials, thus locking the loadcurves against unintended deletion.
* The labels of encrypted materials are locked against being changed in most (but not all) contexts. This is because the encrypted material definition has a label id buried inside it, and this must be kept unchanged. 
 
It is not possible to prevent a determined user from relabelling such a material if they really try, for example via external Text Edit, hence the proviso above. It is assumed that users will be sensible about labels of encrypted items!

Here is an example of a partially encrypted material definition ( *the encrypted section is fabricated* )


```
   $
   *MAT_PIECEWISE_LINEAR_PLASTICITY_TITLE
          102 RO=7.85E-9 Normal material title
   -----BEGIN PGP MESSAGE-----
   aksjdfhqwhjhfvkjqhwdqef/qwdfqefqw/fdqwfqwoqijwfqwfnbqkwjhvjqljwodfkjvi
   HFYDHjghgkjhYfiyIHGLOHihougfDtygPhuyfyFyuf68587JLkndvnbGpwwqlehgvhsyc0
   -----END PGP MESSAGE-----
   $
```


In this example:

* The material label is 102 (red text). This has been right justified to occupy the first 10 columns in order to ensure backwards compatibility with PRIMER versions prior to 11.
* The material density is 7.85e-9 (blue text).
* The complete title line will appear verbatim in PRIMER . If you edit it be careful not to change the two fields above.

Note also the from V11 onwards PRIMER also supports alternate definitions for wholly encrypted materials and loadcurves in a post \*END "encrypted" block - see [Providing Alternative Definitions for Wholly Encrypted *MAT, *DEFINE_CURVE and *PAREMETER Definitions](providing-alternative-definitions-for-wholly-encrypted-mat-define-curve-and-parameter-definitions.md#alternate).

[Previous](pgp-data-within-a-define-curve-definition.md)  |  [Next](pgp-data-within-an-airbag-definition.md)