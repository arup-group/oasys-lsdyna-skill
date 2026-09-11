####  PGP Data within an *AIRBAG Definition

As with loadcurves a partially encrypted \*AIRBAG card is also possible if the following rules are followed:

| \*AIRBAG\_ *xxx* \_ID | Where *xxx* is the airbag type. A new \*AIRBAG header is required for each definition |
| --- | --- |
| *&lt;label&gt; &lt;title&gt;* | The first line of the definition giving its label and an optional title must be supplied. (The title is not parsed in any way so it can contain anything.) |
| -----BEGIN PGP MESSAGE----- | The encrypted data may start at any line thereafter. It is normally the case that it will start immediately after the [label, title] row above, but PRIMER will "remember" the line at which it starts, so further lines of data in clear could be supplied if desired. |
| *[Encrypted data]* |
| -----END PGP MESSAGE----- |

The following logic is applied to encrypted airbags:

* Checking is turned off, so no errors or warnings will be reported.
* If the model contains partially encrypted loadcurves then these are locked against deletion and relabelling if encrypted airbag definitions (or encrypted materials) are present. This is to prevent loadcurves referenced within the encrypted section being deleted / relabelled.
* The airbag editor will work as normal, and will accept input for data fields, however such input will be lost when the model is written out.

[Previous](pgp-data-within-a-mat-definition.md)  |  [Next](providing-alternative-definitions-for-wholly-encrypted-mat-define-curve-and-parameter-definitions.md)