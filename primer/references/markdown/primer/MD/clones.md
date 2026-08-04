###  CLONES

####  How PRIMER handles duplicate definitions using Clones.

Theoretically an Ansys LS-DYNA input deck should only have a single instance of any labelled item A, for example \*NODE label 1 should only ever appear once. "Unique" keywords such as \*CONTROL should also only occur once. However Ansys LS-DYNA tolerates duplicate definitions in a range of ways:

* \*NODE definitions may be repeated so long as they obey certain rules about coincidence. See [\[NODE\] Duplicates](node-defining-nodes.md#duplicates)for more information on how these are processed in PRIMER .
* \*PARAMETER definitions can be repeated by using suffices such as \_LOCAL and \_MUTABLE , and handling of repeated definitions is further controlled via the \*PARAMETER\_DUPLICATION card. See [PARAMETER](parameters.md)s for more information on how these are processed in PRIMER .
* Ansys LS-DYNA also tolerates repetition of some other keywords, usually by ignoring all but the last instance found in the input deck. PRIMER tolerates this subject to the [\[Options\] Permit duplicates](options-controls-many-aspects-of-reading-ls-dyna-files.md#opt_dupl)keyword input setting.

Unlike Ansys LS-DYNA, which can ignore all but the solitary definition it chooses to use, PRIMER must "remember" these duplicate definitions so that they can be written out again correctly, otherwise the sequence "read and write model" will end up removing entries from keyword files, and it does this by creating "clones".

#####  What is a clone?

A cloned definition is not a copy of a keyword, rather it is a  ***reference***  to the original "true" definition, and is subject to the following rules. In the definitions below "include file" can also mean the master file.

* There is only ever a single true definition of an entity inside PRIMER . This will normally be the first such definition read from the input deck, and this will dictate which include file it exists in during the PRIMER session. However if differences are detected in duplicate definitions you can choose which to use, [see below](clones.md#diff_handling).
* Any number of "clones" may refer to the true definition A, subject to the limitation that an include file may only contain a single definition of item A. This means that: 
 
- A clone of A may not exist in the same include file as the true definition of A. 
- An include file may only contain a single clone of item A.
* During keyword output the external keyword format of the true definition is written out in its "true" include file and also in every include file in which a clone of it exists.

Inside PRIMER each model has a list of clones, which can be thought of as pseudo-keywords. They show up in cross-reference lists of true items, but otherwise they are mostly invisible and can be ignored.

#####  What happens if duplicate definitions contain differences?

Special rules apply to the processing of \*NODE and \*PARAMETER cards, but for all other duplicates PRIMER applies the following rules during keyword input.

* Each duplicate definition is stored temporarily until keyword input is complete.
* Then each duplicate definition is compared with the original "true" definition, searching for any differences.
* If no differences are found then the first definition is used as the "true" one, and subsequent definitions become clones. This process is silent.
* If differences  ***are***  found then these are listed and the user is asked how to handle them. The options available are: 

    | USE\_LAST | Typical LS\_DYNA behaviour. The **last** read definition becomes the true one, and all others become clones. |
    | --- | --- |
    | USE\_FIRST | The **first** read definition is the true one, the remainder become clones. |
    | MASTER\_OR\_LAST | If a definition exists in the master file this becomes the true one, otherwise the last read is used. The rest become clones. |
    | MASTER\_OR\_FIRST | If a definition exists in the master file this becomes the true one, otherwise the first read is used. The rest become clones. |
    | ABORT | Keyword input is aborted and the model is deleted from PRIMER 's memory. |

It must be emphasised that inside PRIMER only a single true definition exists, and on keyword output this true definition is simply repeated in each clone location.

***Therefore***    ***any differences in the content of duplicate definitions will be lost when the deck is read into PRIMER***   .

This may seem like a limitation, but in fact it is a safety measure. If your deck contains duplicate definitions that have different contents this may well be an error, and even if it is not an error then having differences in these definitions may lead to subtle and hard to find errors during the analysis since the values used will depend on the order in which include files are read. In addition Ansys LS-DYNA does not state explicitly how it processes duplicate definitions, so any change in its behaviour in future versions may also affect your results.

It is  ***strongly***  recommended that you treat any differences that PRIMER detects as an error, and sort them out manually.

| The top level CLONE panel  <br>![](../Storage/primer-22-1/primer_links/sect_6/clones/clone_1.png)Although the Clone panel is accessed from [Tools] Other, it is really a pseudo-keyword and as such its functionality mimics that of conventional keywords.<br> <br>Create , Modify and Keyword functions are all performed using the keyword editor, see [Keyword editing](clones.md#kw_edit)below.  [Delete](Editing%20a%20Model%20Database.html#delete) , List , Check and Renumber all work as for other keywords.<br>  Drawing Clones  <br>Clones are not drawn separately on plots because they have no separate existence, and there is no separate CLONE entry in the  [ENTITY](controlling-entity-visibility-and-labelling.md#Entityvisibility) panel for the same reason, so the only way of visualising them explicitly is to the Sketch options in this panel, as shown here. You can select a subset of definitions from the menu for sketching, perhaps using filtering options to narrow down what is shown and then using Apply to draw them. Or Sketch all will draw everything.<br> <br>By default only the items themselves are sketched, however if you turn on Label Sketched then the original item labels, the clone label and also the incoude file in which the clone lives will all be added to the plot. |
| --- |

#####  Keyword editing clones

Since clones are pseudo keywords you can think of them as having the keyword format:

| **ID** (clone label) | **TYPE** (keyword type) | **ITEM** (label of duplicate item) |
| --- | --- | --- |
| label 1 .. n | eg NODE, SOLID, MAT | label 1 .. n |

The clone ID is purely for reference inside PRIMER , and clones will be created sequentially from 1. It has no relationship with the actual duplicate **ITEM** .

Here is an example of the clone keyword editor in a model containing duplicate items of various types.

![](../Storage/primer-22-1/primer_links/sect_6/clones/clone_2.png)

Definitions can be created, edited and deleted here. The Incl column shows the include file in which each clone exists,  ***not***  the include file of the true definition.

| Deleting clones  <br>Although clones can be deleted in the keyword editor above this is a cumbersome method, and they can more easily be deleted using the normal [Remove](remove-delete-unwanted-model-clean-up-node-merging-and-duplicate-elimination.md#64remove)logic.<br> <br>Simply select the category Cloned Items and then select clones for removal in the normal way.<br> <br>***Deleting a clone has no effect on the "true" definition of the item***  , it only removes the clone definition itself. | ![](../Storage/primer-22-1/primer_links/sect_6/clones/clone_3.png) |
| --- | --- |

[Previous](orient-and-include-transform.md)  |  [Next](encryption-tool.md)