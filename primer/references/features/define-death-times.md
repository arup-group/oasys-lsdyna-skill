###  

### (DEFINE_) DEATH_TIMES

### 

These can be edited through their own specific editing panel (see below).

* [Main Menu](define-transform.md#themainmenu)
* [Creation](define-transform.md#create)
* [Copying](define-transform.md#copy)
* [Editing](define-transform.md#modify)
* [Deletion](Editing%20a%20Model%20Database.html#delete)
* [List](RADIOSS%20block%20format.html#list)
* [Check](define-transform.md#check)
* [Renumber](define-transform.md#renumber)

| This figure shows the main menufor the editing of death times definitions. <br>All functions have their standard meanings as given in [Standard Keyword Top Level Menu Options](standard-keyword-top-level-menu-options.md#501StandardKeywordtoplevelmenuoptions) | ![](../Storage/primer-22-1/primer_links/sect_5/define/fig_death_times_1.gif) |
| --- | --- |

####  CREATE Making a new death times definition
 
This shows the create/edit panel for death times. Clicking on the DEFINE\_DEATH\_TIMES\_... button will cycle through the \_NODES, \_SET and \_RIGID options. Once the desired option is chosen, the information for card 3 can be added/modified using the Add , Remove , Empty and View/Edit buttons at the bottom of the panel.
 
![](../Storage/primer-22-1/primer_links/sect_5/define/fig_death_times_2.gif)

####  COPY Copy existing death times(s) to make a new death times(s)
 
The selected death times are copied. ( death times do not "own" anything, so the concept of recursive copying does not apply.)

####  MODIFY Modifying the attributes of an existing death times
 
MODIFY functions in the same way as CREATE , except that an initial definition will be present. Any modifications made to the death times definition will not be made permanent until the UPDATE\_ALEBAG\_INF button is pressed. At this point the local copy which has been updated is used to overwrite the version in the model.

####  DELETE Delete existing death times definitions
 
The selected death times are deleted.
 
Death times do not "own" anything, so the concept of recursive deletion does not apply, however a death times that is referred to (ie "owned") by some higher order item will not be deletable unless that item is deleted too, or its reference to the death times removed.

####  LIST List death times summaries to screen

The selected death times are summarised on the screen.

####  CHECK Check death times definitions for errors

The selected death times definitions are run through the standard checking routines.

####  RENUMBER Change death times labels

RENUMBER lets you change any or all death times labels within a given model using [the standard renumbering panel](standard-category-renumbering-panel.md#505Standardcategoryrenumberingpanel). To change the label of an individual death times it may be simpler just to MODIFY it.

[Previous](define-curvetable-defining-load-curves.md)  |  [Next](define-friction.md)