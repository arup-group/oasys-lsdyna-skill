####  Setting "Soft" Limits on Character Label Size

As explained above the limits on character label width from LS971 R7.1 onwards are 10 characters in regular format, and 20 characters in long format. However if you are planning to generate keyword decks for older versions of Ansys LS-DYNA you may wish to enforce the older 8 character limit in order to ensure compatibility.

| Model, Renumber, Label Range will map the label control panel<br> <br>![](../Storage/primer-22-1/primer_links/sect_5/5a/label_1.png) | ![](../Storage/primer-22-1/primer_links/sect_5/5a/label_4.png) |
| --- | --- |

The "permitted size of character labels" is a per-model setting that is initialised automatically following inspection of an input deck. As with numeric labels PRIMER will prefer the regular file format of 10 characters width, but if the file is detected to be in long format then 20 will be set instead.
 
This size is used purely for checking, meaning:
 
* Whenever a "check" function is run on a keyword the length of any character label will be tested against this value.
* Whenever a character label is created or modified you will not be permitted to define a label longer than this value.

You can change this limit at any time, it will not affect the current contents of the model at all.
 [Previous](renumbering-models-containing-character-labels.md)  |  [Next](dealing-with-character-labels-in-older-output-formats.md)