###  Character Labels
 
Prior to Ansys LS-DYNA 971 R7.1 character labels may be up to 8 characters wide, and can be used for the following keywords
 
* EOS
* HOURGLASS
* MATERIAL (structural and thermal)
* SECTION

From Ansys LS-DYNA R7.1 onwards character labels can be as wide as the data field permits, typically 10 characters in regular format, and 20 characters in long format.
 
Also the usage of character labels has been extended to keyword

* PART

PRIMER fully supports the above:

* Internal storage of character labels is always 20 characters wide, but ["soft" limits on character label width](setting-soft-limits-on-character-label-size.md#clab_soft) can be set.
* In the editing panels for the above keywords character labels can be used instead of integer labels. Additionally the character labels will be shown in object menus and any other context where item labels are displayed.
* Various strategies for dealing with [mismatches between character label usage and chosen output format](dealing-with-character-labels-in-older-output-formats.md#clabel_old) are provided.

[Previous](long-keyword-format-and-large-labels.md)  |  [Next](case-sensitivity-of-character-labels.md)