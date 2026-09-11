####  PGP Data within a *DEFINE_CURVE Definition

Another special case occurs when the (x,y) points data for a loadcurve are encrypted using the following rules and format:

| \*DEFINE\_CURVE | A new \*DEFINE\_CURVE header is required for each curve |
| --- | --- |
| &lt;lcid&gt; &lt;sidr&gt; ... &lt;dattyp&gt; | This line must be "in clear" |
| -----BEGIN PGP MESSAGE----- | The encrypted data must be all the (x,y) curve points for this curve only |
| *[Encrypted data]* |
| -----END PGP MESSAGE----- |

If these rules are followed PRIMER "knows" the material label, and therefore can deal with references to this curve from other items. However:

* PRIMER cannot "know" what the (x,y) data points of this curve are, so a nominal pair of points (0,0) (1,1) is inserted.

Here is an example of a partially encrypted loadcurve definition. ( *The encrypted data is fabricated* )


```
   $
   *DEFINE_CURVE
           11         0       0.0       0.0       0.0       0.0         0     
   -----BEGIN PGP MESSAGE-----
   nciqwgfgv7qwbfv0qw37bf0v93b4v0934bvbskldf745bvnv0923tygvb0c9034bv034hg
   vnoiquefd734v982bf0jnvb9034bfbv09bu40t90bw3enf2n398b2c0984gbb094299944
   -----END PGP MESSAGE-----
   $ 
```


In this example:

* The curve label is 11
* Other factors on the label line, sidr etc, have default values of zero. They could equally well have "real" values.

Note also the from V11 onwards PRIMER also supports alternate definitions for wholly encrypted materials and loadcurves in a post \*END "encrypted" block - see [Providing Alternative Definitions for Wholly Encrypted *MAT, *DEFINE_CURVE and *PAREMETER Definitions](providing-alternative-definitions-for-wholly-encrypted-mat-define-curve-and-parameter-definitions.md#alternate).

[Previous](free-standing-pgp-encrypted-data-blocks.md)  |  [Next](pgp-data-within-a-mat-definition.md)