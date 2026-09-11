##  

### (DEFINE_) ALEBAG_INFLATOR:

## 

These can be edited through their own specific editing panel (see below).

* [Main Menu](define-transform.md#themainmenu)
* [Creation](define-transform.md#create)
* [Copying](define-transform.md#copy)
* [Editing](define-transform.md#modify)
* [Deletion](Editing%20a%20Model%20Database.html#delete)
* [List](RADIOSS%20block%20format.html#list)
* [Check](define-transform.md#check)
* [Renumber](define-transform.md#renumber)

| This figure shows the main menufor the editing of alebag inflator definitions. <br>All functions have their standard meanings as given in [Standard Keyword Top Level Menu Options](standard-keyword-top-level-menu-options.md#501StandardKeywordtoplevelmenuoptions) | ![](../Storage/primer-22-1/primer_links/sect_5/define/fig_alebag_inflator_1.gif) |
| --- | --- |

####  CREATE Making a new alebag inflator definition
 
This shows the create/edit panel for alebag inflators. New 'NGAS' or 'NORIF' rows can be added to this card by typing the required value into the NGAS or NORIF fields on the first line.
 
![](../Storage/primer-22-1/primer_links/sect_5/define/fig_alebag_inflator_2.gif)

####  COPY Copy existing alebag inflator(s) to make a new alebag inflator(s)
 
The selected alebag inflators are copied. ( alebag inflators do not "own" anything, so the concept of recursive copying does not apply.)

####  MODIFY Modifying the attributes of an existing alebag inflator
 
MODIFY functions in the same way as CREATE , except that an initial definition will be present. Any modifications made to the alebag inflator definition will not be made permanent until the UPDATE\_ALEBAG\_INF button is pressed. At this point the local copy which has been updated is used to overwrite the version in the model.

####  DELETE Delete existing alebag inflator definitions
 
The selected alebag inflators are deleted.
 
Alebag inflators do not "own" anything, so the concept of recursive deletion does not apply, however an alebag inflator that is referred to (ie "owned") by some higher order item will not be deletable unless that item is deleted too, or its reference to the alebag inflator removed.

####  LIST List alebag inflator summaries to screen

The selected alebag inflators are summarised on the screen.

####  CHECK Check alebag inflator definitions for errors

The selected alebag inflator definitions are run through the standard checking routines.

####  RENUMBER Change alebag inflator labels

RENUMBER lets you change any or all alebag inflator labels within a given model using [the standard renumbering panel](standard-category-renumbering-panel.md#505Standardcategoryrenumberingpanel). To change the label of an individual alebag inflator it may be simpler just to MODIFY it.

[Previous](define-defining-define-options.md)  |  [Next](define-box-defining-boxes.md)