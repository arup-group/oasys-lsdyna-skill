###  PGP Encrypted Keyword Data

Ansys LS-DYNA release 971 onwards permits data encrypted with "Pretty Good Privacy" (PGP) to be embedded anywhere in an input deck using the sequence:

-----BEGIN PGP MESSAGE-----  
 *[Any number of lines of encrypted data]*  
 -----END PGP MESSAGE-----

Typically this used to encode \*AIRBAG, \*MAT and \*DEFINE\_CURVE data in order to protect the intellectual copyright inherent in the values used, but it can be used for any keyword in a completely arbitrary fashion.

PGP uses "public/private key" encryption, in which anyone with the public key can encrypt data, but only those in possession of private key can decrypt it. Ansys LS-DYNA has this private key, but PRIMER does not, which means that the information in the encrypted sections is completely opaque to PRIMER . Therefore blocks of encrypted data within an input deck are handled as follows:

[Previous](dealing-with-character-labels-in-older-output-formats.md)  |  [Next](free-standing-pgp-encrypted-data-blocks.md)