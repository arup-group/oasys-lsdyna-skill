####  Dealing with Character Labels in Older Output Formats

Various problems can arise when writing keyword decks for versions of Ansys LS-DYNA prior to LS971 R7.1

| **Problem** | **Solution in PRIMER** |
| --- | --- |
| Character labels have been used for \*PART, but this is not supported in the chosen format. | Each such part is automatically given a new and unique numeric label in the keyword output deck so that this is readable. The character label of the part inside PRIMER is not changed. |
| Character labels &gt;8 characters wide have been used for \*PART, and referred to by \*ELEMENT cards, but use of regular format means that the data fields on the \*ELEMENT cards are only 8 columns wide. | From 971 R7.1 onwards the relevant \*ELEMENT cards will be written in long output format, designated by appending a "+" to the end of the keyword header line for the elements. <br>Output formats prior to 971 R7.1 will adopt the "replace character label with unique numeric label" strategy as described above. |
| Character labels &gt;10 characters wide have been used, but the chosen output format is regular, meaning that only 10 column wide data fields are available. | This will be detected by the normal pre-output model checks, and the user will be warned and presented with a range of options. <br>The correct solution is to swap to long format, making 20 wide data fields available; alternatively the character labels can be edited manually to reduce their width to 10 characters or less.<br> <br>However if the user continues with regular format output then any character labels wider than the field width available will be replaced by a unique new label as described above. |

[Previous](setting-soft-limits-on-character-label-size.md)  |  [Next](pgp-encrypted-keyword-data.md)