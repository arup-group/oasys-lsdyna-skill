####  Dealing with Encrypted Keywords Other than *AIRBAG, *MAT, *DEFINE_CURVE/TABLE and *PARAMETER

The solutions described above work reasonably well, but they are limited to materials, loadcurves and tables and some encrypted input decks require other keywords to be provided in clear in order to function correctly.

From V11 onwards PRIMER supports the use of \*INCLUDE files after the \*END keyword, making it possible to include a simplified definition of  ***any***  keyword for pre-processing purposes without this conflicting with the "true" encrypted data during analysis. There are problems with this approach: PRIMER cannot "know" that items in the file must not have their labels changed, nor can it know that it must lock such items against deletion.

However the flexibility that this method provides may outweigh these disadvantages. It is described in more detail in [Reading include files after the *END keyword](reading-include-files-after-the-end-keyword.md#post_end_include).

[Previous](further-considerations-affecting-encrypted-airbag-mat-and-define-curve-definitions.md)  |  [Next](embedded-keyword-comments.md)